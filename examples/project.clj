;; Runs examples/bench.clj: real Pathom 3 and promesa, so the benchmark can be timed
;; against the jank port in examples/bench.jank.
(defproject yakusoku-bench "0.1.0"
  :description "Cross-runtime benchmark for the pathim port"
  :dependencies [[org.clojure/clojure "1.12.0"]
                 [org.clojure/core.async "1.6.681"]
                 [com.wsscode/pathom3 "2025.01.16-alpha"]]
  :source-paths ["."]
  :main bench)
