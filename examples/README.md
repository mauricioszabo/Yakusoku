# Benchmark: a complex resolver graph, on jank and on Clojure

Two programs, one benchmark. `bench.jank` runs it against **pathim on jank**; `bench.clj`
runs the same thing against **real [Pathom 3](https://github.com/wilkerlucio/pathom3) on
Clojure**. The two files are deliberately independent: each is ordinary code for its own
dialect, and neither is generated from the other.

```bash
# jank
jank --eagerness eager run $(bin/jank-flags) --module-path src:examples examples/bench.jank

# Clojure
cd examples && lein run
```

Each prints its own table with the answer beside each timing, so the two runs can be checked
against each other. A benchmark that computed something different is not a faster one.

**`--eagerness eager` is not optional on jank.** Its compiler is not reentrant, and with the
default lazy compilation a pool worker compiling a callback can race the main thread
compiling something else — the crash lands inside clang.

## The graph

Nothing here sleeps. Every millisecond is either arithmetic or Pathom deciding what to run,
which is what makes the two numbers worth comparing: the difference is the two runtimes, not
two schedulers waiting on the same timer.

The shape is modelled on [duck-repled](https://gitlab.com/clj-editors/duck-repled), where
five different resolvers can all produce `:definition/filename`, several inputs are optional
(`pco/?`), and answers are reached through a long chain of small steps. Three properties are
copied deliberately:

* **OR nodes.** `:task/data` has three resolvers that can produce it, at descending
  priorities — a registry lookup that only answers for known ids, a derivation that only
  answers for even ids, and a default that always answers. `:calc/sum` has two: a cheap one
  gated on an optional `:calc/memo`, and the expensive one. So the planner builds OR nodes,
  and a query whose better branches miss pays for the backtrack.
* **Depth.** `:task/id` reaches `:report/line` through seven dependent steps:

  ```
  :task/id → :task/data → :spec/kind + :spec/scale → :calc/operands
           → :calc/sum → :calc/product → :calc/signature → :report/line
  ```

* **Real computation.** Peano arithmetic — addition by counting, `sum(0,y) = y` and
  `sum(x,y) = sum(x-1,y+1)` — with multiplication as repeated addition and a naively
  recursive Fibonacci built on both. Deliberately the slow way round: the point is to spend
  time in millions of small calls, where a runtime's codegen shows.

| benchmark | what it does |
| --- | --- |
| `raw/*` | the identical arithmetic called directly, no Pathom at all |
| `chain` | one query for `:report/line`, id in the registry — first OR branch hits |
| `chain-fallback` | the same for an odd, unknown id — both better branches miss first |
| `many` | 24 tasks through one nested join, so one plan covers all of them |

Each runs once to warm up (discarded) and then seven times; the table shows the median.

## Results

Measured on a quiet 4-core box, medians of seven passes, jank 0.1-noble against OpenJDK 21:

| benchmark | jank (pathim) | Clojure (Pathom 3) | jank / Clojure |
| --- | ---: | ---: | ---: |
| raw / chain | 2.1 | 2.5 | 0.84× |
| raw / many | 57.5 | 73.5 | 0.78× |
| sync / chain | 23.7 | 14.9 | 1.6× |
| sync / chain-fallback | 12.5 | 12.1 | 1.03× |
| sync / many | 75.8 | 66.3 | 1.14× |
| async / chain | 14.0 | 12.1 | 1.16× |
| async / chain-fallback | 15.6 | 12.2 | 1.28× |
| async / many | 132.0 | 90.7 | 1.46× |
| parallel / chain | 12.6 | 10.8 | 1.17× |
| parallel / chain-fallback | 15.1 | 9.8 | 1.54× |
| parallel / many | 69.9 | 28.6 | 2.44× |

Treat these as indicative rather than precise: run them yourself. Timings on this workload
move by a factor of two depending on what else the machine is doing, which is why the
benchmark takes a median and why the interesting readings below are ratios between rows of
the same run rather than absolute numbers. `sync/chain` on jank is the one row not to read
too closely — at 23.7 ms it is nearly twice its own `chain-fallback`, which is the harder
query, so most of it is first-call compilation the single warm-up pass did not cover.

Three things stand out.

**jank runs this arithmetic faster than the JVM.** That is the `raw` row — no Pathom, no
promises, just Peano addition, multiplication and a doubly-recursive Fibonacci — and jank
comes in at 0.78–0.84× of OpenJDK 21. Tight integer loops and self-recursive calls are what
jank's ahead-of-time C++ codegen should be good at, and it is.

**The cost is in the graph machinery, and it grows with concurrency.** `sync/many` is 1.14×
the JVM, `async/many` 1.46×, `parallel/many` 2.44×. Since the arithmetic underneath is
*ahead*, that spread is entirely the port and the promise layer: allocation, map-heavy plan
bookkeeping, and — for the parallel row — Yakusoku scheduling through an Asio `io_context`
against promesa on a ForkJoinPool. The `parallel/many` gap is the widest number in the table
and the most obvious place to look for wins; a plausible part of it is that the Asio pool is
one shared FIFO queue, where ForkJoinPool gives each worker its own deque and steals.

**Parallelism helps both, and helps the JVM far more.** `parallel/many` against `sync/many`
is 1.08× faster on jank and 2.3× on Clojure, on four cores. The chain is mostly serial —
each step needs the one before it — so the only thing to overlap is the 24 tasks in the
join, and each of those pays a hop through the pool per expensive resolver. Both sides call
`p/future`, and on both sides that means a fixed pool sized to the core count — promesa's
default executor on the JVM, Yakusoku's on jank. Neither file plumbs an executor by hand.

A single query spends most of its time *planning* — `sync/chain` is several times
`raw/chain` on both runtimes — because nothing here caches plans between calls. That is why
`many`, where 24 tasks share one plan, is so much cheaper per task than 24 separate `chain`
runs.

## Fairness

Both files use `cond` where `case` would be idiomatic. That is not a handicap for Clojure —
it is because jank miscompiles a `case` whose branch is a primitive literal (`(case k :sum 4 5)`
does not build), and the two sides should do the same work. That bug and the others this
benchmark turned up are written up in [../JANK-ISSUES.md](../JANK-ISSUES.md).

The `raw` baseline is the honest way to read the rest: it separates "how fast is the
runtime" from "what does the graph machinery cost", and those two questions have quite
different answers here.
