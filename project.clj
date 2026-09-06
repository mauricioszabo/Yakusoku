(defproject org.clojars.mauricioszabo/yakusoku "0.1.0-SNAPSHOT"
  :description "A promise and concurrency library for jank, in the spirit of promesa."
  :url "https://github.com/mauricioszabo/yakusoku"
  :license {:name "MPL 2.0"
            :url "https://www.mozilla.org/en-US/MPL/2.0/"}
  :dependencies []
  :plugins [[org.jank-lang/lein-jank "2026.09-7"]]
  :middleware [leiningen.jank/middleware]
  :source-paths ["src"]
  :test-paths ["test"]
  :profiles {:base {:jank {:target-dir "target/debug"
                           :optimization-level 0}}
             :release {:jank {:target-dir "target/release"
                              :optimization-level 3}}})
