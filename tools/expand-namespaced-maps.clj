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

(defn qualify-key
  "Applies the map's namespace to a key.

   n/sexpr reads the keys of a #::alias{...} map as already namespaced, but with a
   placeholder like :??_pci_??/attr-id, because it has no alias context. Those carry the
   prefix that needs replacing just as much as a bare key does."
  [full-ns k]
  (cond
    (not (keyword? k)) k
    (str/starts-with? (name k) "_") (keyword (name k))   ; #:foo{:_/bare} escapes the prefix
    (nil? (namespace k)) (keyword full-ns (name k))
    (str/includes? (namespace k) "?") (keyword full-ns (name k))
    :else k))

(defn- last-namespaced-map
  "The last namespaced-map node in a depth-first walk -- which is the innermost one, since
   a nested map is visited after its parent. Expanding from the inside out matters: reading
   an outer map with n/sexpr would flatten any nested #::alias{...} inside it into the
   placeholder :??alias??/key."
  [zloc]
  (loop [l zloc, found nil]
    (if (z/end? l)
      found
      (recur (z/next l) (if (= :namespaced-map (z/tag l)) l found)))))

(defn expand-one [src {:keys [self aliases]}]
  (if-let [l (last-namespaced-map (z/of-string src))]
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
      (n/string (z/root (z/replace l (n/coerce expanded)))))
    src))

(defn expand [src info]
  (loop [s src, guard 0]
    (let [s' (expand-one s info)]
      (cond
        (= s s') s
        (> guard 500) (throw (ex-info "namespaced-map expansion did not settle" {}))
        :else (recur s' (inc guard))))))

(defn expand-unused [src {:keys [self aliases]}]
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
