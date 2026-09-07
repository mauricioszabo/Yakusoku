#!/usr/bin/env bb
;; The edits the mechanical pipeline cannot make on its own, applied to the ported tests.
;;
;; Each exists because jank genuinely differs from Clojure, not for convenience; keeping
;; them here means the whole port is reproducible with one command.
(require '[clojure.string :as str] '[babashka.fs :as fs])

(def root (or (first *command-line-args*) "test/pathim"))

(defn edit! [rel & replacements]
  (let [path (str root "/" rel)]
    (when (fs/exists? path)
      (let [before (slurp path)
            after (reduce (fn [s [from to]] (str/replace s from to))
                          before (partition 2 replacements))]
        (when (not= before after)
          (spit path after)
          (println "  fixed up" rel))))))

;; jank catches the runtime's object_ref rather than a class, and its clojure.test takes no
;; class argument at all: (thrown? expr) and (thrown-with-msg? re expr).
(doseq [f (fs/glob root "**/*.jank")]
  (let [before (slurp (str f))
        after (-> before
                  (str/replace "(catch #?(:clj Throwable :cljs :default) "
                               "(catch cpp/jank.runtime.object_ref ")
                  (str/replace #"\(thrown-with-msg\?\s+(?:AssertionError|Throwable|Exception|ExceptionInfo|js/Error)\s+"
                               "(thrown-with-msg? ")
                  (str/replace #"\(thrown\?\s+(?:AssertionError|Throwable|Exception|ExceptionInfo|js/Error)\s+"
                               "(thrown? "))]
    (when (not= before after) (spit (str f) after))))

;; raise! is referred wherever the transformer rewrote a throw.
(doseq [f (fs/glob root "**/*.jank")]
  (let [s (slurp (str f))]
    (when (and (re-find #"\(raise!\s" s) (not (str/includes? s "pathim.misc :refer")))
      (spit (str f) (str/replace-first s "(:require\n"
                                       "(:require\n    [pathim.misc :refer [raise!]]\n")))))

(edit! "test/helpers.jank"
  "(defmacro catch-exception [& body]
     (if (:ns &env)
       `(try
          ~@body
          (catch :default e#
            (error->data e#)))
       `(try
          ~@body
          (catch cpp/jank.runtime.object_ref e#
            (error->data e#)))))"
  "(defmacro catch-exception
  \"Runs body, returning the thrown error as data rather than propagating it.\"
  [& body]
  `(try
     ~@body
     (catch cpp/jank.runtime.object_ref e#
       (error->data e#))))")

;; jank has no records.
(edit! "format/eql_test.jank"
  "(defrecord RecordSample [foo])\n\n" ""
  "  (testing \"custom records\"
    (let [record (->RecordSample \"bar\")]
      (is (= (pf.eql/map-select {} {:foo record} [:foo])
             {:foo record}))))\n\n"
  "  ;; Upstream also checks map-select against a defrecord value. jank has no records, so
  ;; there is nothing to construct; map-select over plain maps is covered above.\n\n")

;; check.core becomes a small compatible subset; one use is a plain equality check.
(edit! "connect/indexes_test.jank"
  "    [check.core :refer [=> check]]\n" ""
  "    (check\n      (=> '{#{:b :a}" "    (is (= '{#{:b :a}")
(edit! "connect/planner_test.jank"
  "    [check.core :refer [=> check]]" "    [pathim.test.check :refer [check]]"
  "    [matcher-combinators.matchers :as m]))" "    ))")
(edit! "interface/eql_test.jank"
  "    [check.core :refer [=> check]]" "    [pathim.test.check :refer [check]]")

;; SmartMaps are not part of this port, and a resolver is not directly callable here.
(edit! "connect/built_in/resolvers_test.jank"
  "    [pathim.interface.smart-map :as psm]))" "    ))"
  "    [pathim.connect.operation :as pco]"
  "    [pathim.connect.operation :as pco]\n    [pathim.connect.operation.protocols :as pop]"
  "(is (= (resolver {} {})" "(is (= (pop/-op-resolve resolver {} {})"
  "\n    (let [sm (psm/smart-map (pci/register resolvers) {:my.system/user-id 4})]
      (is (= (:my.system.user/name sm) \"Anne\")))))"
  "))\n\n;; Upstream also reads these through a SmartMap; SmartMaps are not part of this port.")

;; jank has no Java interop, and cpp/std.sqrt is ambiguous across its overloads.
(edit! "test/geometry_resolvers.jank"
  "  (Math/sqrt n))" "  (cpp/pathim_sqrt (cpp/cast cpp/double n)))")
(let [p (str root "/test/geometry_resolvers.jank")]
  (when (fs/exists? p)
    (let [s (slurp p)]
      (when-not (str/includes? s "pathim_sqrt(double")
        (spit p (str/replace-first
                  s #"(?s)(\(ns pathim\.test\.geometry-resolvers.*?\)\)\n)"
                  "$1\n(cpp/raw \"double pathim_sqrt(double n) { return std::sqrt(n); }\")\n"))))))

(println "test fixups applied")
