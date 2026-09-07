;; The Pathom side of the benchmark: real Pathom 3 on Clojure and ClojureScript, so the
;; same graph can be timed against the jank port. examples/run generates the sources this
;; builds from -- see the note there.
(defproject yakusoku-bench "0.1.0"
  :description "Cross-runtime benchmark for the pathim port"
  :dependencies [[org.clojure/clojure "1.12.0"]
                 [org.clojure/clojurescript "1.11.132"]
                 [org.clojure/core.async "1.6.681"]
                 [com.wsscode/pathom3 "2025.01.16-alpha"]]
  :source-paths ["target/bench/clj"]
  :main bench.main)
