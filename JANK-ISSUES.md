# jank issues found building Yakusoku and pathim

Each entry below is written to be filed as-is against
[jank-lang/jank](https://github.com/jank-lang/jank). They came out of porting
[promesa](https://github.com/funcool/promesa) and [Pathom 3](https://github.com/wilkerlucio/pathom3)
— about nine thousand lines of idiomatic Clojure, plus a C++ core — so most are reduced from
real code rather than invented.

**Environment for every entry unless stated otherwise**

```
jank 0.1-alpha (PPA build, "0.1-noble")
binary version x86_64-unknown-linux-gnu-a836dc6b7a6df7c434796123b874a4a0e89caa9…
Ubuntu 24.04.4 LTS, x86_64
```

Entries are grouped by how well they reproduce **on that build, today**. That distinction
matters: three of these were recorded earlier in the port and two of them no longer
reproduce, so they are held back rather than filed. Issues 7 and 8 came out of writing the
benchmark in `examples/`, after the rest; issue 9 came out of rewriting that benchmark
around a duck-repled-shaped resolver graph; issues 10 and 11 came out of a consumer
project depending on the published jar, which is a path none of the others exercise.

---

## Ready to file

### 1. An unknown `catch` type makes the compiler loop forever instead of erroring

**Severity:** high — the failure mode is indistinguishable from a hang, with no output at all.

Four lines:

```clojure
(ns repro)
(defn f [] (try (throw (ex-info "x" {})) (catch Throwable e :caught)))
(println "never reached")
```

```
$ jank run repro.jank      # no output; still running after 25 minutes
```

**Expected:** an `analyze/unresolved-symbol` error naming `Throwable`, the way jank reports
any other unknown symbol.

**Actual:** the compiler spins at 100% CPU indefinitely. Nothing is printed, so from the
outside it is indistinguishable from a slow compile.

**Why it matters in practice:** `Throwable` reaches jank easily from ported Clojure, and a
single occurrence poisons a whole file. In this project one such form inside a test helper
made two test suites appear to "take more than 25 minutes to load"; it took a long bisect
down to the `ns` form to discover the file was not slow but stuck. `(catch Exception …)`,
`(catch js/Error …)` and `(catch :default …)` behave the same way.

**Workaround:** rewrite every catch type to `cpp/jank.runtime.object_ref`.

---

### 2. `cpp/box` re-enters the compiler on every call, and is not thread-safe

**Severity:** high — a correctness problem for any multithreaded program, and a large
performance cost for every one.

jank's codegen for `cpp/box` emits a `_jank_eval_str` per call site, to attach source
metadata. From `compiler+runtime/src/cpp/jank/codegen/cpp_processor.cpp`:

```cpp
util::format_to(b.body_buffer,
                /* TODO: Lift this. */
                "jank::runtime::reset_meta({}, _jank_eval_str(\"{}\"));\n",
                inst->name,
                util::escape(meta.to_code_string()));
```

So every evaluation of a `cpp/box` form runs the compiler. That has two consequences.

**2a. Concurrent `cpp/box` crashes.**

```clojure
(ns repro)
(cpp/raw "struct thing { int x; };")
(defn make [] (cpp/box (cpp/new thing)))
(make)                                   ; warm on this thread first
(let [fs (doall (map (fn [_] (future (dotimes [_ 2000] (make)) :done)) (range 4)))]
  (println (mapv deref fs)))
```

**Expected:** `[:done :done :done :done]`.

**Actual:** SIGSEGV inside `clang::Sema` (under gdb: `clang::DiagnosticsEngine::setClient`,
reached from `CppImpl::InstantiateTemplate` → `jank::analyze::cpp_util::is_trait_convertible`),
or a hang, within the first couple of thousand calls. `cpp/unbox` emits no such eval and is
safe under the same test.

**2b. It is ~14× slower than it needs to be.** Boxing a pointer in a tight loop measured
**54 µs per call**. Building the same `obj::opaque_box` in C++ and returning it as an
`object_ref` — no `cpp/box` form involved — measured **3.9 µs**.

**Workaround:** never call `cpp/box` from jank; box in C++ with
`jank::runtime::make_box<jank::runtime::obj::opaque_box>(ptr, "")` and return an `object_ref`.

---

### 3. The compiler is not reentrant across threads

**Severity:** high, and architectural — it constrains what a concurrency library can offer.

jank compiles a function on its first call. If two threads reach a first-call at the same
time, the process dies. Under gdb, one crash had:

- **Thread 1 (main)** in `llvm::TargetPassConfig::addPass` ← `addPassesToEmitMC` ←
  `llvm::orc::SimpleCompiler::operator()`
- **Thread 5 (worker)** in `clang::CodeGen::CGDebugInfo::EmitDeclare` ←
  `CodeGenFunction::EmitAutoVarAlloca` ← `CodeGenModule::EmitTopLevelDecl`
- SIGSEGV.

Another produced interleaved codegen — text from two source files spliced into one
translation unit:

```
In file included from src/yakusoku/core.jank<<< inputs >>>::4711::
34/home/user/Yakusoku/src/pathim/connect/runner/async.jank:: 132error: :expected expression1
: error: reference to local variable 'v6' declared in enclosing function …
```

**Expected:** first-call compilation is serialised, or documented as requiring external
serialisation.

**Actual:** crashes non-deterministically. It is easy to hit without writing any threading
code yourself: a promise library resolves callbacks on worker threads, so the *caller's*
functions get first-compiled there while the main thread compiles something else.

**Workaround:** `--eagerness eager`, which compiles at load time and removes the race — but
see issue 4.

---

### 4. `--eagerness eager` segfaults a `clojure.test` suite before any output

**Severity:** medium, but it blocks the workaround for issue 3.

Running this project's test suite with `--eagerness eager` segfaults before the first line
of test output. The same namespaces load cleanly in eager mode, and ordinary (non-test)
programs run fine in it — including a benchmark that exercises the same library code. Only
`clojure.test`'s `run-tests` path is affected.

**Repro:** `jank --eagerness eager run --module-path src:test test/run_tests.jank` in
[mauricioszabo/Yakusoku](https://github.com/mauricioszabo/Yakusoku) on branch
`claude/promesa-jank-port-px3ni4`. The same command without `--eagerness eager` passes 22
tests / 134 assertions.

This matters because eager mode is the only mitigation for issue 3, so a concurrent program
currently has to choose between a testable build and a safe one.

---

### 5. `(flush)` crashes

```clojure
(ns repro)
(println "hello")
(flush)
```

**Actual:**

```
Stack trace (most recent call first):
#0  in clojure_core_flush_33583_0 at jank
#1  in jank::evaluate::eval at jank
…
```

**Expected:** flush the output stream, or be absent rather than present-and-crashing.

Minor on its own, but it bites when debugging anything else: with stdout block-buffered
under redirection, `flush` is the obvious reach for, and it takes the process down.

---

### 6. `ir::hoist_scoped_values` crashes with `unordered_map::at`

**Severity:** medium. **Status: reproduces, but only in situ — see the note.**

A function that hands *itself* to another function from inside its own body crashes the
module loader:

```
─ runtime/unable-to-load-module ────────────────────────────────────────────────
error: unordered_map::at
```

**Repro** (verified today):

1. Clone [mauricioszabo/Yakusoku](https://github.com/mauricioszabo/Yakusoku), branch
   `claude/promesa-jank-port-px3ni4`.
2. In `src/pathim/eql.jank`, inside `merge-asts`, replace the workaround
   `(update-in ast [:children idx] (fn [a b] (merge-asts a b)) item-b)`
   with the natural `(update-in ast [:children idx] merge-asts item-b)`.
3. `jank run $(bin/jank-flags) --module-path src -e "(require '[pathim.eql])"`

**Expected:** the module loads. Wrapping the identical reference in a lambda —
`(fn [a b] (merge-asts a b))` — makes it load, which is what the port does at 15 sites.

**Note for whoever picks this up:** I could not reduce it to a small file. Several
plausible reductions (a self-referential multi-arity `defn` passed to `merge-with`, the same
passed to `update-in`, a named `fn` recurring inside a `let` inside a `defn`) all compile and
run correctly on this build. A *sibling* site in the same project —
`(merge-with merge-grow a b)` inside `merge-grow` in `src/pathim/misc/coll.jank` — used to
crash the same way and **no longer does**, so part of this may already be fixed and what
remains needs a narrower trigger than "function references itself".

### 7. Any non-ASCII character in a string literal fails to lex

**Severity:** medium — trivially hit, and the error names the wrong problem.

```clojure
(ns repro)
(println "ellipsis:" "…")
```

**Actual:**

```
─ lex/unterminated-string ──────────────────────────────────────────────────────
error: Unterminated string.
  2  │ (println "ellipsis:" "…")
```

`"café"` fails the same way. The string is terminated; the lexer appears to count bytes
where it means characters, so a multi-byte character makes it lose the closing quote.

**Expected:** UTF-8 string literals lex. jank's own diagnostics print `…` happily, so this
is the lexer alone.

---

### 8. `rem` and `mod` return a double for integer arguments

**Severity:** low, but it corrupts output silently.

```clojure
(ns repro)
(println (pr-str (rem 7 3)))   ; => 1.0   (Clojure: 1)
(println (pr-str (mod 7 3)))   ; => 1.0   (Clojure: 1)
(println (pr-str (quot 7 3)))  ; => 2     correct
```

**Expected:** `1`, as in Clojure — `rem` and `mod` on two integers give an integer.

**Actual:** a double. `quot` is correct, which makes it look like an oversight in those two
rather than a deliberate numeric-tower choice.

**Where it bit:** formatting a number to one decimal place with
`(str (quot tenths 10) "." (rem tenths 10))` printed `2245.7.0`. The workaround is to
subtract instead: `(- tenths (* 10 (quot tenths 10)))`.

---

### 9. `case` miscompiles when a branch's value is a primitive literal

**Severity:** high — `case` is everywhere in ordinary Clojure, and the error points at
jank's own `core.jank` rather than at the user's code.

```clojure
(ns repro)
(defn f [k] (case k :sum 4 :prod 3 5))
(println (f :sum))
```

**Actual:** a C++ compile error inside jank's `case` macro:

```
/…/src/jank/clojure/core.jank:4551:4: error: no viable overloaded '='
 4551 | v2 = std::move(v32);
note: candidate function not viable: no known conversion from
      'typename std::remove_reference<int &>::type' (aka 'int') to
      'const oref<jank::runtime::object>' for 1st argument
```

A string branch fails differently, in the same macro:

```clojure
(defn f [k] (case k :sum "a" :prod "b" "c"))
```
```
/…/src/jank/clojure/core.jank:3961:18: error: brackets are not allowed here;
      to declare an array, place the brackets after the name
 3961 | const char[2] v12{ };
```

**Expected:** both compile, as in Clojure.

**What works, which narrows it:** the same `case` is fine when the branches are anything
other than a primitive literal —

```clojure
(defn f [k] (case k :sum :four :prod :three :five))   ; => works
(defn f [k] (case k :sum (g) :prod (g) (g)))          ; => works
(def four 4)
(defn f [k] (case k :sum four :prod four four))       ; => works
```

So the branch value is being emitted unboxed and then assigned to an `oref`. Integer tests
(`(case k 1 4 2 3 5)`) fail the same way as keyword tests, so it is the result that matters,
not the test.

**Workaround:** `cond`, or bind the literal to a var first.

---

### 10. A macro named `do` makes a namespace impossible to load from an AOT build

**Severity:** high for anyone shipping a library — it only appears in a *consumer's* build,
never in the author's `jank run`.

```clojure
;; mylib/core.jank
(ns mylib.core)
(defmacro do
  "A promise-chaining `do`, as promesa spells it."
  [& body]
  (clojure.core/reduce (fn [acc form] `(list :chained ~acc ~form)) nil body))
```

Depend on that from another project and `lein compile` it (or `jank compile-module` the
consumer's entry namespace):

```
─ runtime/unable-to-load-module ────────────────────────────────────────────────
error: Invalid call to `var_unbound_root` with `1` args provided.
```

**Expected:** the namespace loads, as it does under `jank run`.

**Actual:** loading the AOT-compiled module fails. Renaming the macro to anything else —
`do!`, `do*` — makes the same build compile and run. The module has no top-level forms
beyond `def`, `defn`, `defmacro` and `declare`, so nothing in the source is calling
anything at load time; the call appears to come from jank's own module-initialisation
codegen, which goes through a `do` and picks up the user's macro.

**Where it came from:** Yakusoku had `p/do` alongside `p/do!`, matching promesa's two
spellings. Everything worked under `jank run`, in the test suite and in the benchmark. The
first consumer to run `lein compile` could not load the library at all. `p/do` has been
removed; `p/do!` remains.

---

### 11. lein-jank cannot pass `--eagerness`, which async programs need

**Severity:** medium, and it is the difference between "works" and "segfaults" for any
program that resolves promises on worker threads.

Issue 3 above means such a program has to run with `--eagerness eager`. `lein-jank`'s
`build-declarative-flag` recognises `:target-dir`, `:build-dir`, `:name`, `:direct-call`,
`:optimization-level`, `:runtime`, `:defines`, `:include-dirs`, `:library-dirs`,
`:linked-libraries`, `:linked-static-libraries`, `:linked-frameworks` and `:static?` — there
is no key for eagerness, and an unrecognised key only warns.

So `lein run` on a program using this library's async or parallel runner dies with `double
free or corruption`, while the identical program run as

```
jank run-main --eagerness eager --module-path <same> … <ns>
```

completes. The flag is accepted after the subcommand, which is exactly where lein-jank
already inserts its declarative flags, so adding

```clojure
:eagerness ["--eagerness" (name value)]
```

to that `case` would be enough.

**Workaround today:** `lein compile` and run the resulting binary, which does not need the
flag, or take the command from `lein run --verbose` and re-run it with the flag inserted.

---

---

## Recorded during the port, but **not reproducible today** — do not file without re-verifying

These two are in this project's `README.md` / `PATHIM.md` as jank limitations, and the
codebase still carries workarounds for them. I could not reproduce either on the build
above. They are listed so the workarounds can be removed once someone confirms they are
gone, and so nobody files a stale report.

### A macro named `do` overriding the special form — **did not reproduce**

The recorded claim: defining `(defmacro do …)` makes every subsequent `when`, multi-form
`defn` body, or bare `do` in that namespace expand through the macro. Yakusoku's `p/do` is
consequently the last form in `core.jank`.

Four shapes were tried today; the special form won every time:

```clojure
(ns repro)
(defmacro do [& body] `(list :chained ~@body))
(defn multi    [] 1 2 3)                              ;; => 3
(defn explicit [] (clojure.core/let [x 1] (do x 99))) ;; => 99
(defn iff      [] (if true (do 7 8) :no))             ;; => 8
(defn whn      [] (when true 1 2))                    ;; => 2
```

All four returned the special-form answer, so the macro is simply ignored. Either this was
fixed, or the original diagnosis attributed some other misbehaviour to it.

### A header `#include`d from two namespaces breaking the incremental parser — **did not reproduce**

The recorded claim: jank's C++ environment is global, so a second `#include` of the same
header contributes nothing and leaves the parser mid-expression, miscompiling the *next*
form. Only `yakusoku.impl` includes `yakusoku.hpp` for this reason.

Today, two namespaces each doing `(cpp/raw "#include <hdr.hpp>")`, with a `def` immediately
after the second include, both loaded and evaluated correctly. The original was hit with
`asio` headers, which are far larger and are pulled in under
`ASIO_SEPARATE_COMPILATION` — so if it is real, the trigger is probably specific to that,
not to double-inclusion in general.

---

## Smaller findings, mostly missing rather than broken

Reported here for completeness; each is worked around where it occurs in this project.

| | |
| --- | --- |
| A literal `(throw …)` in value position miscompiles | `(try [:ok (throw x)] …)` and `(try (identity (throw x)) …)` segfault; a throw raised inside a *called* function unwinds correctly, `ex-data` intact. Everything in the port throws through a one-line function for this reason. |
| The lexer reads a leading `-r` as a radix literal | `-resolve` cannot be spelled at all, so the ported protocol function is `-op-resolve`. |
| `#?(:clj … :cljs …)` resolves to *nothing* | The reader feature is `:jank`, so a conditional with no `:default` silently drops the code rather than failing. Silent is the problem, not the absence of `:clj`. |
| `#:foo{…}` and `#::alias{…}` unsupported | Namespaced map literals; the port expands them at port time. |
| `meta` returns `{}` where Clojure returns `nil` | Testing metadata directly attaches `:meta {}` to everything downstream. |
| `reduce-kv` rejects vectors | Clojure accepts them, indexing by position. |
| `rseq` is a stub that throws | Substituted with `reverse`. |
| Also missing or stubbed | `instance?`, `class`, `sorted-map-by`, `system-time`, `munge`, `PersistentQueue`, and `(deref ref ms val)` (returns `nil` rather than timing out). |
| Functions take at most 10 parameters | And a variadic arity may not be shorter than the longest fixed one. |
| A `steady_timer` destroyed by its own completion handler corrupts the heap | Arguably Asio's contract rather than jank's, but worth knowing for anyone doing timers through `cpp/raw`. |
| `asio/impl/cancellation_signal.ipp` rejected as accessing a private member | Ordinary Clang 23 compiles the same file without complaint; this is why the project uses `ASIO_SEPARATE_COMPILATION`. |

### One unexplained anomaly

Across roughly thirty-five runs of this project's test suite, a GC stress test once reported
2001 completions for 2000 queued tasks. It has not recurred in 20 subsequent suite runs, nor
in 50,000 tasks of targeted stress across 8 workers with forced collections throughout, and
jank's atoms count exactly under contention. The test now records which task indices ran and
how often, so a recurrence will say plainly whether a task ran twice, never ran, or arrived
corrupted. Not filable as it stands; recorded in case someone else sees the same shape.
