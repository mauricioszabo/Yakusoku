#!/usr/bin/env bb
;; Collects the EDN lines each runtime printed and renders them as one table.
;;
;; Answers are compared before timings are shown: a benchmark that computed a different
;; result is not a faster one, and the whole point of running the same source three ways is
;; that the three must agree.
(require '[clojure.edn :as edn] '[clojure.string :as str] '[babashka.fs :as fs])

(def runtimes ["jank" "clojure" "cljs"])

(defn read-results [dir runtime]
  (let [f (fs/file dir (str runtime ".edn"))]
    (when (fs/exists? f)
      (->> (str/split-lines (slurp f))
           (remove str/blank?)
           (keep #(try (edn/read-string %) (catch Exception _ nil)))))))

(let [[dir] *command-line-args*
      by-runtime (into {} (for [r runtimes] [r (read-results dir r)]))
      present (filter (comp seq by-runtime) runtimes)
      benches (->> (mapcat by-runtime present) (map :bench) distinct)
      lookup (fn [r b] (->> (by-runtime r) (filter #(= b (:bench %))) first))]

  (when (empty? present)
    (println "no results to report") (System/exit 1))

  ;; answers first
  (println)
  (println "Answers")
  (let [mismatches (for [b benches
                         :let [answers (into {} (for [r present
                                                      :let [m (lookup r b)]
                                                      :when (and m (contains? m :answer))]
                                                  [r (:answer m)]))]
                         :when (> (count (distinct (vals answers))) 1)]
                     [b answers])]
    (if (seq mismatches)
      (doseq [[b answers] mismatches]
        (println (format "  MISMATCH %s" b))
        (doseq [[r a] answers]
          (println (format "    %-12s %s" r (pr-str a)))))
      (println "  every runtime that ran agreed on every benchmark's result.")))

  (println)
  (println "Milliseconds (median of the timed passes; lower is better)")
  (println (format "  %-24s %s" "benchmark"
                   (str/join "" (map #(format "%14s" %) present))))
  (doseq [b benches]
    (println (format "  %-24s %s" b
                     (str/join "" (for [r present]
                                    (let [ms (:ms (lookup r b))]
                                      (format "%14s"
                                              (cond
                                                (nil? ms) "-"
                                                (number? ms) (format "%.1f" (double ms))
                                                :else (str ms)))))))))
  (println)
  (doseq [r runtimes :when (empty? (by-runtime r))]
    (println (format "  (%s did not run)" r))))
