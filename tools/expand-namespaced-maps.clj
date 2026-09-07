#!/usr/bin/env bb
;; Expands namespaced map literals -- #:foo{:a 1} and #::alias{:a 1} -- into plain maps
;; with fully-qualified keys, since jank's reader does not support the shorthand.
;;
;; Aliases are resolved from each file's own ns form, and :: with no alias means the file's
;; own namespace, exactly as the reader would resolve them.
(require '[rewrite-clj.zip :as z] '[rewrite-clj.node :as n] '[clojure.string :as str])

(defn ns-info
  "Reads the file's namespace name and its require aliases."
  [src]
  (let [form (read-string {:read-cond :allow} src)
        self (str (second form))
        aliases (into {}
                      (comp (filter #(and (sequential? %) (= :require (first %))))
                            (mapcat rest)
                            (keep (fn [spec]
                                    (when (and (vector? spec) (>= (count spec) 3))
                                      (let [[nm & opts] spec
                                            m (apply hash-map opts)]
                                        (when-let [a (:as m)] [(str a) (str nm)]))))))
                      form)]
    {:self self :aliases aliases}))

(defn qualify-key [full-ns k]
  (cond
    (not (keyword? k)) k
    (namespace k) k
    (str/starts-with? (name k) "_") (keyword (name k))   ; #:foo{:_/bare} escapes the prefix
    :else (keyword full-ns (name k))))

(defn expand [src {:keys [self aliases]}]
  (loop [l (z/of-string src)]
    (if (z/end? l)
      (n/string (z/root l))
      (if (= :namespaced-map (z/tag l))
        (let [s (z/string l)
              prefix (second (re-find #"^#(::?[^\{]*)\{" s))
              full-ns (cond
                        (= "::" prefix) self
                        (str/starts-with? prefix "::") (or (get aliases (subs prefix 2))
                                                           (throw (ex-info "unknown alias"
                                                                           {:prefix prefix})))
                        :else (subs prefix 1))
              m (n/sexpr (some #(when (= :map (n/tag %)) %) (n/children (z/node l))))
              expanded (into {} (map (fn [[k v]] [(qualify-key full-ns k) v])) m)]
          (recur (z/next (z/replace l (n/coerce expanded)))))
        (recur (z/next l))))))

(doseq [path *command-line-args*]
  (let [src (slurp path)]
    (when (re-find #"#::?[^\s]*\{" src)
      (let [info (ns-info src)
            out (expand src info)]
        (spit path out)
        (println "  expanded namespaced maps in" path)))))
