(defproject eagerness-repro "0.1.0"
  :plugins [[org.jank-lang/lein-jank "2026.09-7"]]
  :middleware [leiningen.jank/middleware]
  :source-paths ["src"]
  :main app.main
  :jank {:target-dir "target/debug"
         :optimization-level 0})
