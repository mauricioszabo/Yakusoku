# lein-jank cannot pass `--eagerness`, and an unrecognised `:jank` key breaks the build

```bash
bash run
```

`src/app/main.jank` has no dependencies at all: thirty-two never-called functions, each
first called from its own `future`. jank compiles a function on its first call, so this puts
several threads into the compiler at once — jank issue 3 — and `--eagerness eager` is what
avoids it.

The `run` script shows three things:

1. **`lein run`** — SIGSEGV, usually preceded by

   ```
   fatal error: malformed or corrupted precompiled file: 'Invalid abbrev number'
   ```

2. **`lein run` with `:jank {:eagerness :eager}`** — lein-jank warns `Unknown flag
   :eagerness`, emits no flag for it, *and* inserts an empty string in its place, so jank
   itself then fails:

   ```
   error: Extra positional args: app.main
   ```

   That second half is the worse bug of the two: an unrecognised key does not degrade to
   "ignored", it makes the build fail with an error naming the wrong thing.

3. **`jank run-main --eagerness eager --module-path src app.main`** — prints
   `sum: 1600160000` and exits 0.

## The fix

`lein-jank`'s `build-declarative-flag` recognises `:target-dir`, `:output-dir`, `:build-dir`,
`:name`, `:direct-call`, `:optimization-level`, `:runtime`, `:defines`, `:include-dirs`,
`:library-dirs`, `:linked-libraries`, `:linked-static-libraries`, `:linked-frameworks` and
`:static?`. Adding one clause to that `case`:

```clojure
:eagerness ["--eagerness" (name value)]
```

covers the first half. The second half is that the fallthrough for an unknown key should
produce no argument rather than `""`.

## Workaround today

`lein compile` and run the resulting binary — the AOT build does not need the flag — or take
the command out of `lein run --verbose` and re-run it with `--eagerness eager` inserted after
the subcommand.
