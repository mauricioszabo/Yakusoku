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

> **These numbers are stale and must be re-measured.** They were taken when `p/future` on
> jank meant "one raw OS thread per call" and the benchmark worked around it by threading an
> explicit `yakusoku.exec/pool` through `p/via`. `p/future` is now the core-sized default
> pool on both sides, and `p/via` is gone, so the async and parallel rows in particular no
> longer describe the code above. Re-run both files and replace this table.

Measured on a quiet 4-core box, medians of seven passes, jank 0.1-noble against OpenJDK 21:

| benchmark | jank (pathim) | Clojure (Pathom 3) | jank / Clojure |
| --- | ---: | ---: | ---: |
| raw / chain | 2.0 | 1.8 | 1.1× |
| raw / many | 57.1 | 53.1 | 1.08× |
| sync / chain | 11.6 | 13.3 | 0.9× |
| sync / chain-fallback | 11.5 | 8.9 | 1.3× |
| sync / many | 80.6 | 51.7 | 1.6× |
| async / chain | 20.4 | 11.9 | 1.7× |
| async / many | 150.6 | 88.2 | 1.7× |
| parallel / chain | 17.0 | 9.3 | 1.8× |
| parallel / many | 88.1 | 25.2 | 3.5× |

Treat these as indicative rather than precise: run them yourself. Timings on this workload
move by a factor of two depending on what else the machine is doing, which is why the
benchmark takes a median and why the interesting readings below are ratios between rows of
the same run rather than absolute numbers.

Three things stand out.

**jank runs this arithmetic at roughly JVM speed.** That is the `raw` row — no Pathom, no
promises, just Peano addition, multiplication and a doubly-recursive Fibonacci — and jank is
within about 10% of the JVM on it. Tight integer loops and self-recursive calls are what
jank's ahead-of-time C++ codegen should be good at, and it is.

**The cost shows up once the graph machinery is involved, and grows with concurrency.**
`sync/many` is 1.6× the JVM, `async/many` 1.7×, `parallel/many` 3.5×. Since the arithmetic
underneath is at parity, that spread is the port and the promise layer: allocation,
map-heavy plan bookkeeping, and — for the parallel row — Yakusoku scheduling through Asio
against promesa on a JVM thread pool. The `parallel/many` gap is the widest number in the
table and the most obvious place to look for wins.

**Parallelism helps both, and helps the JVM more.** `parallel/many` against `sync/many` is
1.1× faster on jank and 2.1× on Clojure, on four cores. The chain is mostly serial — each
step needs the one before it — so the only thing to overlap is the 24 tasks in the join, and
each of those pays a thread hop per expensive resolver. Both sides call `p/future`, and on
both sides that means a fixed pool sized to the core count — promesa's default executor on
the JVM, Yakusoku's on jank. Neither file plumbs an executor by hand.

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
