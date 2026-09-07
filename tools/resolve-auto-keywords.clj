#!/usr/bin/env bb
;; Rewrites auto-resolved keywords -- ::x and ::alias/x -- into fully-qualified ones.
;;
;; jank supports them, so this is not about jank: it is about the namespaced-map expansion
;; that follows. That step reads map nodes with n/sexpr, which has no alias context and
;; turns ::pci/attr-id into the placeholder :??_pci_??/attr-id. Resolving them first, from
;; each file's own ns form, keeps that from happening.
(require '[clojure.string :as str])

(defn ns-info [src]
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

(defn rewrite [src {:keys [self aliases]}]
  (-> src
      ;; ::alias/name -> :full.namespace/name. The (?<!#) guards the namespaced-map
      ;; prefix in #::alias{...}, which belongs to the expansion step that follows.
      (str/replace #"(?<!#)::([a-zA-Z][a-zA-Z0-9._*+!<>=-]*)/([a-zA-Z0-9._*+!?<>=-]+)"
                   (fn [[whole alias nm]]
                     (if-let [full (get aliases alias)]
                       (str ":" full "/" nm)
                       whole)))
      ;; ::name -> :this.namespace/name, likewise leaving #::name{...} alone
      (str/replace #"(?<!#)::([a-zA-Z][a-zA-Z0-9._*+!?<>=-]*)(?![/a-zA-Z0-9._*+!?<>={-])"
                   (fn [[_ nm]] (str ":" self "/" nm)))))

(doseq [path *command-line-args*]
  (let [src (slurp path)]
    (when (re-find #"::" src)
      (let [out (rewrite src (ns-info src))]
        (when (not= src out)
          (spit path out)
          (println "  resolved auto keywords in" path))))))
