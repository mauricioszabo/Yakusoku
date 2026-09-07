#!/usr/bin/env bb
;; The edits the mechanical pipeline cannot make on its own, applied to the ported tests.
;;
;; Each exists because jank genuinely differs from Clojure, not for convenience; keeping
;; them here means the whole port is reproducible with one command.
(require '[clojure.string :as str] '[babashka.fs :as fs]
         '[rewrite-clj.zip :as z] '[rewrite-clj.node :as n])

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

(defn await-derefs!
  "Rewrites @(f ...) into (p/await! (f ...)) for the named fns.

   A string replacement cannot do this: the closing paren has to go after the form the
   deref covers, so the rewrite has to understand the shape. rewrite-clj does."
  [rel fns]
  (let [path (str root "/" rel)]
    (when (fs/exists? path)
      (let [before (slurp path)
            after (loop [l (z/of-string before {:track-position? false})]
                    (if (z/end? l)
                      (z/root-string l)
                      (if (and (= :deref (z/tag l))
                               (contains? fns (some-> l z/down z/down z/sexpr)))
                        (let [inner (z/node (z/down l))]
                          (recur (z/next (z/replace l (n/list-node
                                                        [(n/token-node 'p/await!)
                                                         (n/spaces 1)
                                                         inner])))))
                        (recur (z/next l)))))]
        (when (not= before after)
          (spit path after)
          (println "  awaited promise derefs in" rel))))))

;; runner_test is the joint suite: it asserts that the sync, async and parallel runners
;; agree. Two libraries it leans on are stood in for by small compatible subsets here --
;; check, as the other suites already do, and matcher-combinators, of which it uses four
;; things. And it derefs the async runners' promises with @, which cannot work: jank has no
;; deftype, so our promises carry no deref behaviour. p/await! is the same wait.
(edit! "connect/runner_test.jank"
  "    [check.core :refer [check =>]]" "    [pathim.test.check :refer [check]]"
  "    [matcher-combinators.matchers :as m]\n" "    [pathim.test.matchers :as m]\n"
  "    [matcher-combinators.standalone :as mcs]\n" "    [pathim.test.matchers :as mcs]\n"
  "    [matcher-combinators.test]\n" "")

(await-derefs! "connect/runner_test.jank" '#{run-graph-async run-graph-parallel})

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
;; check's => matches maps partially, so it must keep going through the compatibility
;; layer rather than becoming a strict = -- upstream's expectation here names only some of
;; the keys the index actually carries.
;; jank's assert puts its message in ex-data rather than in the exception message, so the
;; duplicate-registration assertions go through a matcher that looks in both places.
(edit! "connect/indexes_test.jank"
  "    [check.core :refer [=> check]]" "    [pathim.test.check :refer [check thrown-msg?]]"
  "(thrown-with-msg? #\"Tried to register duplicated"
  "(thrown-msg? #\"Tried to register duplicated")
(edit! "connect/planner_test.jank"
  "    [check.core :refer [=> check]]" "    [pathim.test.check :refer [check]]"
  "    [matcher-combinators.matchers :as m]))" "    ))")
(edit! "interface/eql_test.jank"
  "    [check.core :refer [=> check]]" "    [pathim.test.check :refer [check]]")

;; SmartMaps are not part of this port, and a resolver is not directly callable here.
(edit! "connect/built_in/resolvers_test.jank"
  "    [pathim.interface.smart-map :as psm]))" "    ))"
  ;; anchored on the smart-map line's replacement above so a re-run cannot add it twice
  "    [pathim.connect.operation :as pco]\n    ))"
  "    [pathim.connect.operation :as pco]\n    [pathim.connect.operation.protocols :as pop]\n    ))"
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
