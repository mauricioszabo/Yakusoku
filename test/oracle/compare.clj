#!/usr/bin/env bb
;; Compares two files of EDN values, one per line: the jank port's output against real
;; Pathom's. Comparison is structural rather than textual -- map key order differs between
;; runtimes and says nothing about correctness.
(require '[clojure.edn :as edn] '[clojure.string :as str])

(defn read-lines [path]
  (->> (str/split-lines (slurp path))
       (remove str/blank?)
       (mapv (fn [line]
               (try (edn/read-string line)
                    (catch Exception _ {::unreadable line}))))))

(let [[label jank-file pathom-file] *command-line-args*
      a (read-lines jank-file)
      b (read-lines pathom-file)]
  (if (= a b)
    (do (println (format "  PASS  %-28s (%d values)" label (count a)))
        (System/exit 0))
    (do
      (println (format "  FAIL  %s" label))
      (when (not= (count a) (count b))
        (println (format "        value count differs: pathim %d, pathom %d" (count a) (count b))))
      (doseq [i (range (max (count a) (count b)))
              :let [x (get a i ::missing) y (get b i ::missing)]
              :when (not= x y)]
        (println (format "        [%d] pathim: %s" i (pr-str x)))
        (println (format "        [%d] pathom: %s" i (pr-str y))))
      (System/exit 1))))
