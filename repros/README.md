# Minimal repros for jank issues

Self-contained reproductions for two of the entries in [../JANK-ISSUES.md](../JANK-ISSUES.md).
Neither depends on Yakusoku or pathim; each is small enough to attach to a bug report as-is.

| directory | issue | needs |
| --- | --- | --- |
| [`issue-10-do-macro-aot/`](issue-10-do-macro-aot) | a macro named `do` makes its namespace impossible to load from an AOT build | `jank` |
| [`issue-11-lein-jank-eagerness/`](issue-11-lein-jank-eagerness) | lein-jank cannot pass `--eagerness`, and an unrecognised `:jank` key injects an empty argument | `jank`, `lein` |

Each directory has an executable `run` that shows the working case and the broken one side
by side, so the difference is visible without knowing what to look for:

```bash
bash repros/issue-10-do-macro-aot/run
bash repros/issue-11-lein-jank-eagerness/run
```

Verified on `jank 0.1-alpha` ("0.1-noble" PPA build), binary version
`x86_64-unknown-linux-gnu-a836dc6b7a6df7c434796123b874a4a0e89caa9…`, Ubuntu 24.04.4,
x86_64, with `org.jank-lang/lein-jank "2026.09-7"`.
