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

Each runs once to warm up (discarded) and then three times; the table shows the median.

## Results

Measured on this machine — 4 cores, jank 0.1-noble, OpenJDK 21:

| benchmark | jank (pathim) | Clojure (Pathom 3) | jank / Clojure |
| --- | ---: | ---: | ---: |
| raw / chain | 4.7 | 2.7 | 1.7× |
| raw / many | 139.0 | 80.3 | 1.7× |
| sync / chain | 19.2 | 18.4 | 1.04× |
| sync / chain-fallback | 20.4 | 14.6 | 1.4× |
| sync / many | 152.2 | 85.7 | 1.8× |
| async / chain | 22.7 | 16.8 | 1.4× |
| async / many | 226.6 | 122.5 | 1.8× |
| parallel / chain | 26.9 | 13.3 | 2.0× |
| parallel / many | 123.0 | 57.5 | 2.1× |

Three things stand out.

**jank runs this arithmetic about 1.7× slower than the JVM.** That is the `raw` row, and it
is the cleanest signal in the table: no Pathom, no promises, just Peano addition,
multiplication and a doubly-recursive Fibonacci. For a young compiler against a JIT that has
had twenty-five years of tuning, 1.7× on call-heavy integer code is a respectable place to
be starting from.

**The port's planner is not the slow part.** Subtract `raw/chain` from `sync/chain` and you
get what Pathom costs to plan and run one query: **14.5 ms on jank, 15.7 ms on Clojure**.
Those are the same within noise, which says the ported planner and runner are not carrying a
penalty — the gap in the totals comes from the arithmetic underneath them, not from pathim.
It also says something about the graph: a single query spends most of its time *planning*,
because nothing here caches plans between calls. That is why `many` — 24 tasks under one
plan — is so much cheaper per task than 24 separate `chain` runs would be.

**Parallelism helps, and helps less than the core count suggests.** `parallel/many` is 1.2×
`sync/many` on jank and 1.5× on Clojure, on four cores. The chain is mostly serial — each
step needs the one before it — so the only thing to overlap is the 24 tasks in the join, and
each of those still pays a thread hop per expensive resolver. The jank side hands its work
to a `yakusoku.exec/pool` rather than `p/future`, because jank's `future` spawns a raw OS
thread per call with no pooling; measuring through that would have measured thread creation.

## Fairness

Both files use `cond` where `case` would be idiomatic. That is not a handicap for Clojure —
it is because jank miscompiles a `case` whose branch is a primitive literal (`(case k :sum 4 5)`
does not build), and the two sides should do the same work. That bug and the others this
benchmark turned up are written up in [../JANK-ISSUES.md](../JANK-ISSUES.md).

The `raw` baseline is the honest way to read the rest: it separates "how fast is the
runtime" from "what does the graph machinery cost", and those two questions have quite
different answers here.
