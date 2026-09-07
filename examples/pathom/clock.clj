(ns bench.clock
  "The Clojure half of the benchmark's platform shim. See examples/bench/clock.jank."
  (:require [promesa.core :as p]))

(defn runtime-name [] "clojure")

(defn now-ms [] (/ (double (System/nanoTime)) 1000000.0))

(defn sleep-ms [ms] (Thread/sleep (long ms)))

(defn await! [promise] (deref promise))
