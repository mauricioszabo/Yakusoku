(ns bench.main
  "Clojure driver: the same two lines as the jank one."
  (:require [bench.clock :as clock]
            [bench.graph :as graph]))

(defn -main [& _]
  (graph/report! (graph/run-sync))
  (graph/report! (clock/await! (graph/run-async)))
  (shutdown-agents)
  (System/exit 0))
