(ns bench.main
  "ClojureScript driver. No blocking, so the sync benchmarks are reported as unsupported
  and everything else is consumed as a promise."
  (:require [bench.clock :as clock]
            [bench.graph :as graph]
            [promesa.core :as p]))

(defn -main [& _]
  (doseq [label [:sync/throughput :sync/single-query :sync/batched :sync/one-by-one]]
    (prn {:runtime (clock/runtime-name) :bench label :ms :unsupported}))
  (p/then (graph/run-async)
          (fn [results]
            (graph/report! results)
            (js/process.exit 0))))

(set! *main-cli-fn* -main)
