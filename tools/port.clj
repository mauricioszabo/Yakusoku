#!/usr/bin/env bb
;; Mechanically rewrites Pathom 3 sources into pathim jank sources.
;;
;; This handles the boring, uniform 90%: stripping guardrails and spec, renaming
;; namespaces, and routing throws through `raise!`. It is a starting point, not the
;; deliverable -- every generated file is then read and fixed by hand, since the parts jank
;; cannot express (protocols, records, reader conditionals) need judgement.
;;
;; Node-level editing rather than read-and-print, so comments and formatting survive and the
;; result can be diffed against upstream.
;;
;; Usage: bb tools/port.clj <pathom-checkout> <eql-checkout> <cljc-misc-checkout> <out-dir>

(require '[rewrite-clj.zip :as z]
         '[rewrite-clj.node :as n]
         '[clojure.string :as str]
         '[babashka.fs :as fs])

(def ns-renames
  [["com.wsscode.pathom3.connect.operation.protocols" "pathim.connect.operation.protocols"]
   ["com.wsscode.pathom3" "pathim"]
   ["edn-query-language.core" "pathim.eql"]
   ["com.wsscode.misc" "pathim.misc"]
   ["com.wsscode.promesa.macros" "pathim.promise-macros"]
   ["promesa.core" "yakusoku.core"]])

(defn rename-ns-text [s]
  (reduce (fn [acc [from to]] (str/replace acc from to)) s ns-renames))

;; ---------------------------------------------------------------- guardrails ----

(defn gspec?
  "True for a guardrails spec vector -- the `[int? int? => int?]` that follows an argument
   vector. Every gspec contains =>, which is what distinguishes it from a destructuring or
   body vector."
  [node]
  (and (= :vector (n/tag node))
       (some #(and (= :token (n/tag %)) (= '=> (n/sexpr %)))
             (n/children node))))

(defn arg-vector? [node]
  (= :vector (n/tag node)))

(defn strip-gspecs
  "Removes every gspec vector (and the whitespace introducing it) from a >defn form's
   children. A gspec only ever appears directly after an argument vector."
  [children]
  (loop [[c & more :as all] children, out [], prev-arg? false]
    (cond
      (nil? all) out
      (and prev-arg? (gspec? c))
      ;; drop this node, and trailing whitespace up to the next real form
      (recur (drop-while #(contains? #{:whitespace :newline} (n/tag %)) more) out false)

      :else
      (recur more (conj out c)
             (if (contains? #{:whitespace :newline :comment} (n/tag c))
               prev-arg?
               (arg-vector? c))))))

(defn arity-form?
  "True for the ([args] gspec body) list inside a multi-arity >defn -- a list whose first
   child is the argument vector."
  [node]
  (and (= :list (n/tag node))
       (= :vector (some-> (remove #(contains? #{:whitespace :newline :comment} (n/tag %))
                                  (n/children node))
                          first
                          n/tag))))

(defn strip-arity
  "Strips the gspec inside one arity form. Multi-arity >defn puts the gspec inside each
   arity rather than at the top of the form, so the top-level pass alone misses them."
  [node]
  (if (arity-form? node)
    (n/list-node (strip-gspecs (n/children node)))
    node))

(defn transform-form
  "Rewrites one top-level form. Returns nil to delete it."
  [node]
  (if-not (= :list (n/tag node))
    node
    (let [kids (n/children node)
          head (first (remove #(contains? #{:whitespace :newline :comment} (n/tag %)) kids))
          head-sym (when (and head (= :token (n/tag head))) (n/sexpr head))]
      (case (str head-sym)
        (">def" "s/def") nil
        ;; EQL wraps its specs in (when INCLUDE_SPECS ...) rather than defining them at the
        ;; top level, so the head-symbol check alone does not catch them.
        "when" (let [args (remove #(contains? #{:whitespace :newline :comment} (n/tag %))
                                  (n/children node))]
                 (when-not (= "INCLUDE_SPECS" (str (some-> (second args) n/sexpr)))
                   node))
        (">defn" ">defn-")
        (n/list-node
          (strip-gspecs
            (map (fn [c]
                   (cond
                     (identical? c head)
                     (n/token-node (symbol (str/replace (str head-sym) ">" "")))
                     :else (strip-arity c)))
                 kids)))
        node))))

;; ------------------------------------------------------------------- throws ----

(defn rewrite-throws
  "Turns (throw X) into (raise! X). jank miscompiles a literal throw whose value is
   consumed -- as a function argument, inside a collection literal, or in a case branch --
   while a throw raised inside a called function unwinds correctly. Routing every throw
   through a function makes the position irrelevant."
  [zloc]
  (loop [l zloc]
    (if (z/end? l)
      (z/root l)
      (let [l' (if (and (= :list (z/tag l))
                        (= 'throw (some-> l z/down z/sexpr)))
                 (-> l z/down (z/replace 'raise!) z/up)
                 l)]
        (recur (z/next l'))))))

;; --------------------------------------------------------------------- main ----

(def dropped-requires
  ["com.fulcrologic.guardrails" "clojure.spec.alpha" "com.wsscode.log" "potemkin"])

(defn strip-requires
  "Removes the require entries for libraries this port does not carry. They only ever
   appear as vectors inside an ns form, so matching on the vector's leading symbol is
   enough -- and removing whole nodes keeps the form balanced, which line-based stripping
   does not."
  [zloc]
  (loop [l zloc]
    (if (z/end? l)
      (z/root l)
      (if (and (= :vector (z/tag l))
               (let [head (some-> l z/down z/sexpr)]
                 (and (symbol? head)
                      (some #(str/starts-with? (str head) %) dropped-requires))))
        (recur (z/remove l))
        (recur (z/next l))))))

(defn port-file [in-path out-path]
  (let [src (slurp in-path)
        root (z/root (z/of-string src {:track-position? false}))
        forms (keep transform-form (n/children root))
        final (-> (n/forms-node forms) n/string
                  z/of-string strip-requires n/string
                  z/of-string rewrite-throws n/string
                  rename-ns-text)]
    (fs/create-dirs (fs/parent out-path))
    (spit out-path final)
    (println (format "  %-52s -> %s" (str (fs/file-name in-path)) out-path))))

(let [[pathom eql misc out] *command-line-args*]
  (when-not out
    (println "usage: bb tools/port.clj <pathom> <eql> <cljc-misc> <out-dir>")
    (System/exit 1))
  (println "porting...")
  (doseq [[in rel] (concat
                     (for [f ["attribute" "path" "error" "placeholder" "cache" "entity_tree"
                              "plugin" "format/eql" "format/shape_descriptor"
                              "connect/operation" "connect/indexes" "connect/planner"
                              "connect/runner" "connect/runner/stats" "interface/eql"
                              "connect/built_in/resolvers" "connect/built_in/plugins"]]
                       [(str pathom "/src/main/com/wsscode/pathom3/" f ".cljc") (str f ".jank")])
                     [[(str eql "/src/edn_query_language/core.cljc") "eql.jank"]]
                     (for [f ["coll" "refs" "time"]]
                       [(str misc "/src/main/com/wsscode/misc/" f ".cljc") (str "misc/" f ".jank")]))]
    (when (fs/exists? in)
      (port-file in (str out "/" rel)))))
