# Pathim

A port of [Pathom 3](https://github.com/wilkerlucio/pathom3) to [jank](https://jank-lang.org),
built on [Yakusoku](README.md). Pathom is a graph-query engine: you declare resolvers —
functions with declared inputs and outputs — and it works out which chain of them answers a
query.

```clojure
(require '[pathim.connect.operation :as pco]
         '[pathim.connect.indexes :as pci]
         '[pathim.interface.eql :as p.eql])

(pco/defresolver full-name [{:keys [first-name last-name]}]
  {:full-name (str first-name " " last-name)})

(pco/defresolver greeting [{:keys [full-name]}]
  {:greeting (str "Hello, " full-name "!")})

(def env (pci/register [full-name greeting]))

(p.eql/process env {:first-name "Ada" :last-name "Lovelace"} [:greeting])
;; => {:greeting "Hello, Ada Lovelace!"}
```

## What is here

The engine, end to end: EQL query/AST conversion, the connect indexes, the planner, all
three runners — sync, async and parallel — the EQL interfaces, plugins, caching, the
built-in resolvers (`pbir`) and built-in plugins, and `connect/foreign` for dynamic
resolvers.

Not here: SmartMaps, transit, and `clojure.spec` / guardrails — dropped rather than ported,
since Pathom uses them for development-time checking rather than behaviour.

### The async and parallel runners

Resolvers may return promises. `pathim.interface.async.eql/process` returns one too, and
runs the async runner; add `::p.a.eql/parallel? true` to the env for the parallel runner.

```clojure
(require '[pathim.interface.async.eql :as p.a.eql]
         '[yakusoku.core :as p])

(pco/defresolver profile [env {:user/keys [id]}]
  {::pco/input [:user/id] ::pco/output [:user/profile]}
  (p/delay 50 {:user/profile (str "profile-" id)}))

(p/await! (p.a.eql/process env {:user/id 1} [:user/profile]))
```

The two runners differ in a way worth knowing before choosing: the **async** runner walks
the same plan the sync one does, awaiting each node, so a single query is no faster — what
it buys is not blocking a thread, so many queries can be in flight at once. The **parallel**
runner overlaps independent branches *within* a query, and batches through a debouncer. The
benchmark in [examples/](examples/) measures both: `bench.jank` against this port and
`bench.clj` against real Pathom 3, as two independent programs.

Upstream builds the parallel runner's batch debouncer on core.async. jank has none, and
none is needed: `yakusoku.exec/debouncer` is that loop, built on a restartable Asio timer.

Both runners compile a throwaway query on the calling thread before dispatching anything —
see the note in `src/pathim/connect/runner/async.jank`. jank compiles a function on its
first call and its compiler is not reentrant, so without that a query that fans out across
workers dies inside clang. Programs of any size should also run jank with
`--eagerness eager`.

## Differences from upstream, and why

**Resolvers are not directly callable.** Upstream's `Resolver` is a record implementing
`IFn`, so `(my-resolver env input)` works. jank has no records and no way to make a map
callable, so an operation here is a map carrying its type, config and function. Use
`(pop/-op-resolve resolver env input)`.

**Custom cache stores need a change.** Upstream defines a `CacheStore` protocol and extends
it to atoms and volatiles. Without protocols, a cache store here *is* an atom or a volatile,
recognised by its runtime type. Anything else needs a new dispatch point in `pathim.cache`.

**`defresolver` parses its own arguments.** Upstream conforms them with `clojure.spec`,
including inferring resolver inputs from destructuring. That parsing is hand-written here
and produces the same shapes, so the macro behaves the same — but a malformed
`defresolver` reports a plain error rather than a spec explanation.

**No stack traces in error data.** `p.error/error-stack` returns nil: jank throws its own
runtime objects, which carry no stack.

## Building the port

The mechanical work is reproducible. Given checkouts of pathom3, eql and cljc-misc:

```bash
tools/port.clj            # strips guardrails and spec, rewrites namespaces, routes throws
tools/resolve-reader-conditionals.clj   # picks the :clj branch of every #?(...)
tools/expand-namespaced-maps.clj        # rewrites #:foo{...} into plain maps
tools/port-tests          # chains all three for the test suite
```

These get the boring 90% right and uniform; the rest was done by hand, and every such spot
carries a comment saying what jank could not express and what replaced it.

## Notes on jank

Porting nine thousand lines of idiomatic Clojure turned up a number of jank limitations.
Each is worked around where it occurs; collected here so they can be removed as jank fixes
them. All were reproduced against `jank 0.1-noble`.

**Compiler and reader**

1. `ir::hoist_scoped_values` crashes (`unordered_map::at`) when a function hands *itself* to
   another function from inside its own body — `(update-in m ks merge-asts x)` inside
   `merge-asts`. Calling yourself is fine. Wrapping the reference in a lambda fixes it; 15
   sites needed it.
2. The lexer reads a leading `-r` as the start of a radix literal, so `-resolve` cannot be
   spelled at all. The protocol function is `-op-resolve`.
3. `#:foo{...}` and `#::alias{...}` are not supported; the port expands them.
4. The reader feature is `:jank`, so every `#?(:clj ... :cljs ...)` resolves to *nothing* —
   silently dropping code rather than failing. All conditionals are resolved at port time.
5. A literal `(throw ...)` miscompiles where its value is consumed — as a function argument,
   inside a collection literal, or in a `case` branch. Every throw goes through
   `pathim.misc/raise!`, a function, because a throw raised inside a called function unwinds
   correctly.
6. Functions take at most 10 parameters, and a variadic arity may not be shorter than the
   longest fixed one. Two of Pathom's arity ladders were trimmed.

**Runtime**

7. `meta` returns `{}` where Clojure returns `nil`. Testing it directly would have attached
   `:meta {}` to every AST node and made every query differ from upstream.
8. Missing or stubbed: `instance?`, `class`, `rseq`, `sorted-map-by`, `system-time`,
   `munge`, `PersistentQueue`. The port supplies `munge`, uses a vector as a FIFO queue
   (with `queue-peek`/`queue-pop`, since a vector's `peek`/`pop` read the tail), and
   substitutes `reverse` for `rseq`.
9. A two-element vector *is* a map entry, which makes `make-map-entry` trivial.

**Threads**

10. jank's compiler is not reentrant. It compiles a function on its first call, and two
    threads reaching that compilation at once crash inside clang or LLVM — which is easy to
    do here, since the async and parallel runners resolve promises on pool workers while the
    caller carries on. Both runners compile a throwaway query on the calling thread first
    (`pathim.connect.runner.async/warm-path!`), and anything substantial should run jank with
    `--eagerness eager`, which compiles at load time and removes the race entirely.
11. `cpp/box` emits a `_jank_eval_str` per call site, so it re-enters the compiler at
    runtime and cannot be called from two threads. Yakusoku boxes its native handles in C++
    instead; see the note in `native/yakusoku.hpp`.

## Tests

Two suites, and they check different things.

```bash
test/oracle/run                                            # differential, against real Pathom
jank run $(bin/jank-flags) --module-path src:test test/run_pathim_tests.jank
```

**The oracle** runs each scenario twice: once through this port, once through real Pathom 3
on babashka, comparing results structurally. The scenario is written once — only namespace
prefixes are rewritten for the Pathom side — so the two runs execute the same code against
the two implementations. This is what catches a planner that quietly plans differently.
Requires `bb` on the path.

**The ported suite** is Pathom's own tests: the planner, operation, indexes, format and
interface suites, adapted only where jank genuinely differs. Where a test cannot hold as
written, the adaptation is in `tools/test-fixups.clj` with a comment saying why; nothing is
weakened to pass. Three kinds recur:

* Operations are called as functions upstream, since `Resolver` implements `IFn`. Those
  calls are rewritten to `pop/-op-resolve` / `pop/-op-mutate`, which says the same thing.
  The two blocks that test `IFn`-ness itself, through `apply`, are dropped.
* `clojure.spec` conforming. The port's hand-written parser produces the same shapes, so
  those assertions stand; the blocks that test spec's own machinery (`explain-data`,
  conforming a single destructuring argument) are replaced by an assertion that the same
  input is rejected.
* Environment assumptions, chiefly the `user/foo` in the `defresolver` expansion tests --
  whatever `*ns*` happens to be. That symbol is normalised rather than the assertion
  changed.

**Known failures**: three, all in the planner, all the same thing. `optimize-OR-equal-branches`
(twice) and `denormalize-node-test` produce the same graph as upstream with the node ids
swapped between two branches. Node ids are assigned in the order the planner walks an
unordered collection, and jank's iteration order is not Clojure's. The plans are equivalent;
the assertions name specific ids, so they fail.

There is no oracle for the async and parallel runners: promesa does not load under babashka
(`defrecord ... found: Supplier`), which is why Pathom itself carries a `:bb` branch. Two
things stand in for it — upstream's `runner_test`, which asserts that all three runners
produce the same answer, and the benchmark in [examples/](examples/), which runs the same
graph through all three runners on jank and on real Pathom 3, printing each answer beside
its timing so the two can be checked against each other.
