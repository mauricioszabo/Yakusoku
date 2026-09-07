(ns bench.clock
  "The ClojureScript half of the benchmark's platform shim. See examples/bench/clock.jank.

  JavaScript cannot block, so sleep-ms and await! do not exist here in any useful form.
  That is why the cljs driver runs only the non-blocking benchmarks and reports the sync
  ones as unsupported -- a real result for the comparison rather than an error."
  (:require [promesa.core :as p]))

(defn runtime-name [] "clojurescript")

(defn now-ms [] (js/Date.now))

(defn sleep-ms [_ms]
  (throw (ex-info "ClojureScript cannot block; the sync benchmarks do not run here" {})))

(defn await! [_promise]
  (throw (ex-info "ClojureScript cannot block on a promise" {})))
