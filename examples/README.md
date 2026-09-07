# Benchmark: the three runners, on three runtimes

One resolver graph, one set of benchmarks, run three ways — the pathim port on **jank**,
and real [Pathom 3](https://github.com/wilkerlucio/pathom3) on **Clojure** and
**ClojureScript** — so the port can be compared against the thing it was ported from, both
for correctness and for speed.

```bash
examples/run                    # all three runtimes
examples/run jank clojure       # or a subset
```

The script prints a table, and before it does, it checks that every runtime that ran
computed the *same answers*. A benchmark that got a different result is not a faster one.

## What is being measured

The graph has three user resolvers — two independent ones that take ~50 ms each and a third
that joins them and takes ~10 ms — plus a batched item resolver (~60 ms for the whole
batch, however large) and a deliberately non-batched twin (~20 ms per item). The latency is
simulated: the sync resolvers block for it, the async ones resolve a promise after it.

| benchmark | what it does |
| --- | --- |
| `throughput` | 20 independent user queries |
| `single-query` | one query whose two expensive resolvers are independent |
| `batched` | 30 items through the batched resolver |
| `one-by-one` | the same 30 items through the non-batched twin |

Each is run once to warm up (discarded) and then three times; the table shows the median.

## Reading the results

The three runners differ in ways worth stating plainly, because the numbers only make sense
against them:

* **The async runner does not make one query faster.** It walks the same plan and awaits
  each node, so `async/single-query` costs the same ~110 ms as `sync/single-query`. What it
  buys is not blocking a thread: `async/throughput` runs all 20 queries at once and finishes
  in the time of roughly one, against ~2.2 s for the sync runner. It is also the only runner
  that exists at all on ClojureScript, which cannot block.
* **The parallel runner overlaps independent work inside one query.** That is why
  `parallel/single-query` is ~60 ms rather than ~110: the two 50 ms resolvers run at the
  same time and only the 10 ms join is serial. `parallel/one-by-one` shows it at its most
  dramatic — 30 independent items resolved together, ~25 ms against ~615 ms.
* **Batching is not a parallel-only win.** All three runners batch, so `batched` is roughly
  the same everywhere; it is included because it is what exercises the debouncer, and
  because `one-by-one` is only meaningful next to it.

The `sync/*` row is `:unsupported` under ClojureScript. JavaScript has no blocking sleep, so
those benchmarks cannot be expressed there at all — that is a real result about the runtime,
not a gap in the harness.

## How one source runs three ways

`bench/graph.jank` is the whole benchmark, written against `pathim` and `yakusoku`.
`examples/run` produces the Pathom variant by rewriting namespace prefixes — `pathim.*` to
`com.wsscode.pathom3.*`, `yakusoku.core` to `promesa.core` — the same trick `test/oracle/run`
uses. Nothing else in that file differs between the dialects, and nothing in it may use a
reader conditional: jank's reader feature is `:jank`, so `#?(:clj … :cljs …)` would silently
resolve to nothing.

Four things genuinely differ per runtime — the millisecond clock, the blocking sleep, how a
promise is awaited, and what the runtime calls itself. They live in `bench.clock`, which has
three implementations: `bench/clock.jank`, `pathom/clock.clj` and `pathom/clock.cljs`. The
drivers (`bench/main.jank`, `pathom/main.clj`, `pathom/main.cljs`) differ for the same
reason: the first two block on each benchmark in turn, while the ClojureScript one chains
the whole suite into a single promise, because it has no other choice.

## Fairness, and what these numbers are not

The timings are dominated by simulated latency on purpose: what is being compared is how
each runner *schedules* work, not how fast each runtime executes Clojure. Do not read
`jank vs clojure` here as a language benchmark — the resolvers spend their time sleeping.

Two things do bias the raw numbers, and both are handled: jank compiles a function on its
first call, and the JVM's JIT warms up, so every benchmark discards a warm-up pass before
timing. The warm-up runs over a one-element input rather than the real one, which reaches
the same code without any of it running concurrently — see the note in `bench/graph.jank`
for why that distinction matters on jank.

**jank must be run with `--eagerness eager`.** Its compiler is not reentrant across
threads, and lazily compiling a function on a pool worker while the main thread compiles
another is a segfault. `examples/run` passes the flag; anything else that runs jank code on
Yakusoku's workers should too.
