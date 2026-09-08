;; The same project, asking for the flag the program needs.
;; `run` copies this over project.clj for its second step.
(defproject eagerness-repro "0.1.0"
  :plugins [[org.jank-lang/lein-jank "2026.09-7"]]
  :middleware [leiningen.jank/middleware]
  :source-paths ["src"]
  :main app.main
  :jank {:target-dir "target/debug"
         :optimization-level 0
         ;; jank accepts `--eagerness eager`. lein-jank does not recognise this key:
         ;; it warns, emits no flag, and injects an empty argument in its place.
         :eagerness :eager})
