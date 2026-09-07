# Yakusoku

A promise and concurrency library for [jank](https://jank-lang.org), shaped after
[promesa](https://github.com/funcool/promesa). 約束 — *yakusoku* — is Japanese for "promise".

```clojure
(require '[yakusoku.core :as p])

(p/await!
  (p/let [a (p/delay 100 20)
          b (p/future (* a 2))]
    (+ a b)))
;; => 60
```

## Why it isn't a transliteration of promesa

Promesa is protocol-based from top to bottom and sits on `CompletableFuture` and
`java.util.concurrent`. jank has neither, so the internals are different by necessity:

| | promesa (JVM) | Yakusoku (jank) |
| --- | --- | --- |
| Polymorphism | `defprotocol` / `deftype` | plain functions and maps — jank has no protocols or types yet |
| Promise state | `CompletableFuture` | a C++ `cell`: mutex, condition variable, callback list |
| Executors | `java.util.concurrent` | [Asio](https://think-async.com/Asio/)'s `io_context` |
| Timers | `ScheduledExecutorService` | Asio's `steady_timer` |
| Worker threads | JDK pools | jank's own `future`, running Asio's event loop |

The thread pool and the timer wheel are Asio's. What lives in `native/yakusoku.hpp` is the
promise cell and the glue that lets jank values cross into Asio's queue safely — about 260
lines, most of it explaining itself.

## Requirements

- jank (tested against `0.1-noble` from the [official PPA](https://jank-lang.org/))
- Standalone Asio headers — `apt install libasio-dev`, `brew install asio`, or vendored at
  `third-party/asio`

The same applies to any project that *depends* on Yakusoku: its `lein compile` runs
Yakusoku's `jank-build.bb`, which compiles Asio, so Asio's headers need to be present there
too. Leiningen's jank build also sandboxes build scripts with bubblewrap, so `bwrap` must be
installed (or pass `lein --disable-sandbox`).

## Usage

With Leiningen and `lein-jank`, add the dependency and let `jank-build.bb` do the rest; it
locates Asio, compiles it, and emits the include/link flags:

```clojure
:dependencies [[org.clojars.mauricioszabo/yakusoku "0.1.0"]]
```

Verified end to end from a project created with `lein new org.jank-lang/jank`: `lein compile`,
`lein run` and `lein repl` all work against the published jar.

Without Leiningen:

```bash
bin/build-native                                    # builds the Asio support library
jank run $(bin/jank-flags) --module-path src my_program.jank
```

## API

Creation and settling:

```clojure
(p/deferred)                  ; a pending promise
(p/resolved 42) (p/rejected e)
(p/promise x)                 ; coerce: promise, jank promise/future, or plain value
(p/create (fn [resolve reject] ...))
(p/resolve! p v) (p/reject! p e) (p/cancel! p)
```

State — `p/state`, `p/pending?`, `p/resolved?`, `p/rejected?`, `p/cancelled?`, `p/done?`,
`p/extract`, `p/error`.

Chaining — `p/then` (flattens), `p/then'` (doesn't), `p/map`, `p/fmap`, `p/bind`,
`p/mapcat`, `p/chain`, `p/catch` / `p/merr`, `p/handle`, `p/finally` / `p/fnly`.

Combinators — `p/all`, `p/race`, `p/any`, `p/wait-all`.

Blocking — `p/await!`, `p/deref`, `p/await-for!`, `p/wait!`.

Timing — `p/delay`, `p/timeout`.

Macros — `p/let`, `p/plet`, `p/do`, `p/->`, `p/->>`, `p/loop` / `p/recur`, `p/doseq`,
`p/future`, `p/via`.

```clojure
(p/loop [n 0]
  (if (< n 3)
    (p/then (p/delay 10 (inc n)) p/recur)   ; awaits each iteration
    n))
```

Executors (`yakusoku.exec`):

```clojure
(exec/inline-executor)   ; runs on the settling thread — the default
(exec/thread-executor)   ; one jank future, i.e. one OS thread, per task
(exec/pool 4)            ; Asio io_context with 4 workers
(exec/shutdown! pool)    ; drain and join; shutdown-now! abandons queued work
```

Every chaining function takes an optional trailing executor:

```clojure
(p/then p f pool)   ; run this callback on the pool
```

## Things to know

**`@promise` does not work.** jank has no `deftype` and its object-type enum is not
extensible from user code, so nothing we can construct carries deref behaviour. Use
`p/await!` (or `p/await-for!` for a bounded wait). Relatedly, `p/await-for!` exists because
jank's own `(deref ref ms val)` is an unimplemented stub that returns `nil`.

**Callbacks run on the settling thread by default**, as in promesa. A chain of ten `then`s
costs no threads unless you pass an executor — which matters here, because jank's `future`
spawns a raw `std::thread` per call with no pooling.

**Shut pools down when you are done with them** — `(exec/shutdown! pool)` drains queued work
and joins the workers. You no longer *have* to: pools stop themselves at process exit, and
exit waits (up to two seconds) for workers to leave Asio's event loop. Without that,
a program that used nothing but `p/delay` segfaulted on exit, since workers were still
running while Asio's statics were being destroyed.

**Run jank with `--eagerness eager` if your callbacks touch code that has not run yet.**
jank compiles a function on its first call, and its compiler is not reentrant across
threads: a pool worker compiling a callback while the main thread compiles something else
is a segfault, deep inside clang or LLVM. Yakusoku compiles its own bridge up front (see
`yakusoku.impl/warm-up!`) but it cannot do that for yours. `--eagerness eager` compiles
everything at load time and removes the race entirely — `examples/bench.jank` documents
it, and so should anything that runs a non-trivial amount of jank code on a pool.

**Cancellation is not preemptive.** Cancelling settles the promise and propagates `:cancelled`
downstream — `catch` deliberately does not treat it as an error — but it does not interrupt
work already running. A scheduled timer is likewise left to fire and find its promise settled.

## Notes on jank

jank is under heavy development, and building this turned up a number of rough edges. Each
is worked around in the code rather than papered over, and each is noted where the
workaround lives — partly as documentation, partly so they can be removed as jank fixes
them. All were reproduced against `jank 0.1-noble`.

**Compiler**

1. **A literal `(throw ...)` in value position miscompiles.** `(try [:ok (throw x)] ...)`,
   `(try (identity (throw x)) ...)` and `(try (let [v (throw x)] [:ok v]) ...)` all segfault,
   while a throw raised inside a *called* function unwinds correctly. `impl/attempt` routes
   its body through a thunk, turning the broken shape into the working one.
2. **A self-referential `fn` nested in another `fn` crashes the compiler** in
   `ir::hoist_scoped_values` (`unordered_map::at`). `p/loop` therefore drives its iterations
   from a top-level `run-loop` function rather than a nested named `fn`.
3. **A macro named `do` wins over the special form** for the rest of the namespace, so every
   subsequent `when`, multi-form `defn` body and anything else expanding to a bare `do`
   becomes a promise chain. `p/do` is consequently the last form in `core.jank`.
4. **A header included by two namespaces breaks the incremental parser.** jank's C++
   environment is global, so a second `#include` contributes nothing and leaves the parser
   mid-expression, miscompiling the next form. Only `yakusoku.impl` includes the header.

**Threads and the JIT**

jank compiles a function on its first call, and that compilation is not safe to perform on
a worker thread:

5. **Several threads first-compiling at once** corrupts the JIT — starting N pool workers on
   a not-yet-compiled function gave interleaved Clang errors and a segfault.
6. **First-compiling a function that contains C++ interop on a pool or timer worker**
   corrupts the heap. `(p/then (p/delay 5 1) (fn [v] (p/delay 5 (inc v))))` reliably produced
   `double free or corruption` — the timer callback was compiling the scheduling path on a
   worker thread.

Both are handled by warming up: `impl/ensure-warm!` and the warm-up at the foot of
`core.jank` run every function in the library once, on the calling thread, before any
Yakusoku thread exists. This is why `p/deferred` — which every promise passes through —
calls `ensure-warm!`.

**Asio**

7. Asio is used in `ASIO_SEPARATE_COMPILATION` mode because jank's incremental parser
   rejects `asio/impl/cancellation_signal.ipp` as accessing a private member, though
   ordinary Clang 23 compiles the same file without complaint. Compiling Asio ahead of time
   also cuts load time, since the JIT then parses only declarations.
8. A `steady_timer` must not be destroyed by its own completion handler — that corrupts the
   heap. `pool_schedule` hands the timer to a `shared_ptr` captured in the handler, so Asio
   destroys it afterwards.

**Known limitations**

Running the test suite under `--eagerness eager` segfaults inside jank before any test
output appears, though every namespace loads cleanly in that mode and ordinary programs run
fine there. The suite runs in jank's default (lazy) mode, where it is stable. That is
unfortunate, because eager mode is exactly what makes a concurrent program safe (see
"Things to know"): in lazy mode a pool worker compiling a callback can race the main thread
compiling something else, and the crash is inside clang or LLVM. The suite gets away with
lazy mode because Yakusoku warms its own bridge before any worker starts; a program that
runs much of *its own* code on workers should use eager mode; `examples/bench.jank` is
run that way.

One unexplained anomaly is on record: across roughly thirty-five suite runs, the GC stress
test once reported 2001 completions for 2000 queued tasks. It has not recurred in 20
subsequent suite runs, nor in 50,000 tasks of targeted stress across 8 workers with forced
collections throughout, and jank's atoms count exactly under contention. The test now
records which task indices ran and how often, so a recurrence will say plainly whether a
task ran twice, never ran, or arrived corrupted.

## Not implemented

CSP (`promesa.exec.csp`), bulkhead, semaphore, `promisify`, and virtual-thread executors. An `asio-sys` package for
[jank commons](https://github.com/jank-lang/commons) — which has no concurrency package yet —
would be a natural next step.

## Tests

```bash
bin/test
```

22 tests, 134 assertions, run against real jank — covering settling and its races, chaining
and flattening, error propagation and recovery, cancellation, every combinator, bounded
blocking waits, the macros, pool execution and draining, timer ordering, the
restartable timer and the debouncer built on it, and a GC stress test that forces
collections while jank values sit in Asio's queue.

## Pathim

The repository also carries pathim, a port of
[Pathom 3](https://github.com/wilkerlucio/pathom3) built on Yakusoku — sync, async and
parallel runners. See [PATHIM.md](PATHIM.md), and [examples/](examples/) for a pair of
benchmark programs — one on jank, one on Clojure — that run the same resolver graph, with OR
nodes and real computation, so the port can be compared against the original.

The jank rough edges this turned up are written up as filable bug reports in
[JANK-ISSUES.md](JANK-ISSUES.md).

## License

MPL-2.0, matching both jank and promesa.
