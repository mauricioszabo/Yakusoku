# Benchmark: the three runners, on jank and on Clojure

Two programs, one benchmark. `bench.jank` runs it against **pathim and Yakusoku on jank**;
`bench.clj` runs the same thing against **real [Pathom 3](https://github.com/wilkerlucio/pathom3)
and promesa on Clojure**, so the port can be compared against what it was ported from — both
for speed and for whether it computes the same answers.

The two files are deliberately independent. Each is ordinary code for its own dialect, and
neither is generated from the other: the only differences are the namespaces, the clock, the
sleep, and how a promise is awaited.

```bash
# jank
jank --eagerness eager run $(bin/jank-flags) --module-path src:examples examples/bench.jank

# Clojure
cd examples && lein run
```

Each prints its own table, with the answer beside each timing so the two runs can be checked
against each other. A benchmark that computed something different is not a faster one.

**`--eagerness eager` is not optional on jank.** Its compiler is not reentrant, and with the
default lazy compilation a pool worker compiling a callback can race the main thread
compiling something else — the crash lands inside clang.

## What is being measured

The graph has three user resolvers — two independent ones that take ~50 ms each and a third
that joins them and takes ~10 ms — plus a batched item resolver (~60 ms for the whole batch,
however large) and a deliberately non-batched twin (~20 ms per item). The latency is
simulated: the sync resolvers block for it, the async ones resolve a promise after it.

| benchmark | what it does |
| --- | --- |
| `throughput` | 20 independent user queries |
| `single-query` | one query whose two expensive resolvers are independent |
| `batched` | 30 items through the batched resolver |
| `one-by-one` | the same 30 items through the non-batched twin |

Each runs once to warm up (discarded) and then three times; the table shows the median.

## Reading the results

The three runners differ in ways worth stating, because the numbers only make sense against
them:

* **The async runner does not make one query faster.** It walks the same plan and awaits
  each node, so `async/single-query` costs the same ~112 ms as `sync/single-query`. What it
  buys is not blocking a thread: `async/throughput` runs all 20 queries at once and finishes
  in the time of roughly one, against ~2.2 s for the sync runner.
* **The parallel runner overlaps independent work inside one query.** That is why
  `parallel/single-query` is ~62 ms rather than ~112: the two 50 ms resolvers run at the same
  time and only the 10 ms join is serial. `parallel/one-by-one` shows it at its most
  dramatic — 30 independent items resolved together, ~26 ms against ~620 ms.
* **Batching is not a parallel-only win.** All three runners batch, so `batched` is about the
  same everywhere; it is here because `one-by-one` only means something next to it.

Measured on this machine, medians in milliseconds:

| benchmark | jank (pathim) | Clojure (Pathom 3) |
| --- | ---: | ---: |
| sync / throughput | 2246.9 | 2258.1 |
| sync / single-query | 112.1 | 112.8 |
| sync / batched | 65.3 | 66.1 |
| sync / one-by-one | 620.8 | 623.0 |
| async / single-query | 113.2 | 115.0 |
| async / throughput | 124.0 | 126.0 |
| async / batched | 73.6 | 69.3 |
| async / one-by-one | 629.7 | 627.7 |
| parallel / single-query | 62.4 | 62.3 |
| parallel / throughput | 75.3 | 72.8 |
| parallel / batched | 79.2 | 74.8 |
| parallel / one-by-one | 26.3 | 23.4 |

## Fairness, and what these numbers are not

The timings are dominated by simulated latency on purpose: what is being compared is how
each runner *schedules* work, not how fast each runtime executes Clojure. Do not read
`jank vs Clojure` here as a language benchmark — the resolvers spend their time sleeping.

Two things do bias the raw numbers, and both are handled. jank compiles a function on its
first call and the JVM's JIT warms up, so every benchmark discards a warm-up pass. On jank
that warm-up runs over a one-element input rather than the real one, which reaches the same
code without any of it running concurrently — see the comment on `run-async!` in
`bench.jank` for why that distinction matters there.
