#!/usr/bin/env bb
;; Resolves #?(...) reader conditionals to their :clj branch (falling back to :default).
;;
;; jank's reader feature is :jank, so a #?(:clj x :cljs y) form resolves to nothing at all
;; there -- silently dropping code. The ported sources therefore have to pick a branch at
;; port time, and :clj is the one Pathom's own JVM tests assert against.
(require '[rewrite-clj.zip :as z] '[rewrite-clj.node :as n] '[clojure.string :as str])

(defn branch-for [list-node]
  (let [kids (remove #(contains? #{:whitespace :newline :comment} (n/tag %)) (n/children list-node))
        pairs (partition 2 kids)]
    (or (some (fn [[k v]] (when (= :clj (n/sexpr k)) v)) pairs)
        (some (fn [[k v]] (when (= :default (n/sexpr k)) v)) pairs))))

(defn resolve-conditionals [src]
  (loop [l (z/of-string src)]
    (if (z/end? l)
      (n/string (z/root l))
      (if (and (= :reader-macro (z/tag l))
               (contains? #{"?" "?@"} (some-> l z/down z/string)))
        (let [splice? (= "?@" (some-> l z/down z/string))
              lst (some-> l z/down z/right z/node)
              branch (branch-for lst)]
          (cond
            ;; No :clj branch at all (a :cljs-only form). Remove the node rather than
            ;; leaving nil behind: inside an ns form or a require list, a stray nil is not
            ;; valid, and elsewhere it would silently change a return value.
            (nil? branch) (recur (z/next (z/remove l)))
            ;; #?@ splices a sequence into its surrounding form; with the :clj branch
            ;; chosen, its elements are inserted where the conditional stood.
            splice? (let [elems (remove #(contains? #{:whitespace :newline} (n/tag %))
                                        (n/children branch))]
                      (recur (z/next (reduce (fn [loc e] (z/insert-right loc e))
                                             (z/replace l (first elems))
                                             (reverse (rest elems))))))
            :else (recur (z/next (z/replace l branch)))))
        (recur (z/next l))))))

(doseq [path *command-line-args*]
  (let [src (slurp path)
        out (resolve-conditionals src)]
    (when (not= src out)
      (spit path out)
      (println "  resolved conditionals in" path))))
