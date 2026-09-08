# A macro named `do` makes its namespace impossible to load from an AOT build

```bash
bash run
```

Four lines of library code and a two-line consumer. `mylib.core` defines a macro named `do`;
`app.main` requires it and calls an ordinary function from it.

* `jank run-main --module-path . app.main` prints `app says: :hello`.
* `jank compile --module-path . app.main` compiles cleanly, and the binary it produces
  cannot load the module:

  ```
  error: Invalid call to `var_unbound_root` with `1` args provided.
  ```

Rename the macro to `do!` and the same binary runs.

## What narrows it down

`mylib.core` has no top-level forms beyond `defn` and `defmacro`, so nothing in the source
calls anything at load time — the failing call is in jank's own module-initialisation
codegen, which goes through a `do` and picks up the user's macro.

Bisected from the real case (Yakusoku's `p/do`) through several variants:

| variant | result |
| --- | --- |
| `do` macro expanding only into `clojure.core` calls | **works** |
| `do` macro expanding into a call to a var in its own namespace | **fails** |
| the same file with the macro renamed `do!` | **works** |
| the same file with the macro deleted | **works** |
| a `declare` before the macro | makes no difference either way |

So it takes both the name `do` and an expansion that references the namespace's own vars.

## A second effect, visible under AOT only

A separate claim about this macro — that it wins over the `do` *special form* for the rest of
the namespace — does not reproduce under `jank run`, where the special form always won in
every shape tried. It **does** reproduce under whole-file AOT compilation: a sibling macro
whose body syntax-quotes `` `(do ~@body) `` expanded through the user's macro, printing
`(:chained (:chained nil :a) :b)` where the special form would have given `:b`.

## Where it came from

Yakusoku offered `p/do` alongside `p/do!`, matching promesa's two spellings. Everything
worked under `jank run`, in the test suite and in the benchmark. The first consumer to run
`lein compile` could not load the library at all. `p/do` has been removed.
