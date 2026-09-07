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
                  ;; Any catch type jank does not know sends its compiler into a loop
                  ;; rather than an error -- `(catch Throwable e ...)` alone never finishes
                  ;; compiling. Every one of these has to go, not just the ones inside a
                  ;; reader conditional: helpers/catch-exception writes the two branches out
                  ;; by hand, and that single occurrence was enough to stall two suites
                  ;; indefinitely.
                  (str/replace #"\(catch\s+(?:Throwable|Exception|ExceptionInfo|AssertionError|js/Error|:default)\s+"
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
  ;; matched after the catch-type pass above has run, so both branches read alike here
  "(defmacro catch-exception [& body]
     (if (:ns &env)
       `(try
          ~@body
          (catch cpp/jank.runtime.object_ref e#
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

(defn drop-testing!
  "Removes a (testing \"label\" ...) block. Used where a block tests something the port
   deliberately does not carry, rather than something it gets wrong."
  [rel label]
  (let [path (str root "/" rel)]
    (when (fs/exists? path)
      (let [before (slurp path)
            after (loop [l (z/of-string before {:track-position? false})]
                    (if (z/end? l)
                      (z/root-string l)
                      (if (and (= :list (z/tag l))
                               (= 'testing (some-> l z/down z/sexpr))
                               (= label (some-> l z/down z/right z/sexpr)))
                        (z/root-string (z/remove l))
                        (recur (z/next l)))))]
        (when (not= before after)
          (spit path after)
          (println "  dropped (testing" (pr-str label) ") from" rel))))))

(defn wrap-calls!
  "Wraps every call to one of `fns` in a call to `wrapper`: (f ...) becomes (wrapper (f ...))."
  [rel fns wrapper]
  (let [path (str root "/" rel)]
    (when (fs/exists? path)
      (let [before (slurp path)
            after (loop [l (z/of-string before {:track-position? false})]
                    (if (z/end? l)
                      (z/root-string l)
                      (if (and (= :list (z/tag l))
                               (contains? fns (some-> l z/down z/sexpr))
                               ;; not already wrapped -- otherwise walking into the node
                               ;; just created matches it again, forever
                               (not= wrapper (some-> l z/up z/down z/sexpr)))
                        (let [inner (z/node l)]
                          (recur (z/next (z/replace l (n/list-node [(n/token-node wrapper)
                                                                    (n/spaces 1)
                                                                    inner])))))
                        (recur (z/next l)))))]
        (when (not= before after)
          (spit path after)
          (println "  wrapped" (pr-str fns) "in" (pr-str wrapper) "in" rel))))))

(defn callable-resolvers!
  "Rewrites calls that treat a resolver as a function into pop/-op-resolve calls.

   Upstream's Resolver is a record implementing IFn, with arities [], [input] and
   [env input]. jank has no records and no way to make a map callable, so the port's
   resolvers are plain maps -- and calling one silently does the wrong thing: a map called
   with two arguments is a lookup with a default, and with none it throws. This is the one
   upstream shape that cannot survive the port, so the tests are rewritten to say the same
   thing the supported way rather than weakened.

   Two call shapes are rewritten: ((expr ...) ...), where the head is itself a call
   producing a resolver, and (sym ...) for the locals named in `locals`."
  ([rel locals] (callable-resolvers! rel locals 'pop/-op-resolve))
  ([rel locals op-fn]
  (let [path (str root "/" rel)]
    (when (fs/exists? path)
      (let [before (slurp path)
            resolver-call? (fn [l]
                             (and (= :list (z/tag l))
                                  (let [head (z/down l)]
                                    (or (= :list (z/tag head))
                                        (contains? locals (and (= :token (z/tag head))
                                                               (z/sexpr head)))))))
            after (loop [l (z/of-string before {:track-position? false})]
                    (if (z/end? l)
                      (z/root-string l)
                      (if (resolver-call? l)
                        (let [kids (remove #(contains? #{:whitespace :newline :comment} (n/tag %))
                                           (n/children (z/node l)))
                              [target & args] kids
                              ;; [] -> {} {}, [input] -> {} input, [env input] -> as is
                              args' (case (count args)
                                      0 [(n/map-node []) (n/map-node [])]
                                      1 [(n/map-node []) (first args)]
                                      (vec args))]
                          (recur (z/next (z/replace l (n/list-node
                                                        (into [(n/token-node op-fn)
                                                               (n/spaces 1)
                                                               target]
                                                              (mapcat (fn [a] [(n/spaces 1) a]) args')))))))
                        (recur (z/next l)))))]
        (when (not= before after)
          (spit path after)
          (println "  rewrote resolver calls in" rel)))))))

;; SmartMaps are not part of this port, and a resolver is not directly callable here.
(edit! "connect/built_in/resolvers_test.jank"
  "    [pathim.interface.smart-map :as psm]))" "    ))"
  ;; anchored on the smart-map line's replacement above so a re-run cannot add it twice
  "    [pathim.connect.operation :as pco]\n    ))"
  "    [pathim.connect.operation :as pco]\n    [pathim.connect.operation.protocols :as pop]\n    ))"
  "\n    (let [sm (psm/smart-map (pci/register resolvers) {:my.system/user-id 4})]
      (is (= (:my.system.user/name sm) \"Anne\")))))"
  "))\n\n;; Upstream also reads these through a SmartMap; SmartMaps are not part of this port.")

(callable-resolvers! "connect/built_in/resolvers_test.jank" '#{resolver})

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

;; operation_test conforms defresolver's arguments with clojure.spec, which this port does
;; not carry: the parsing is hand-written in pathim.connect.operation and produces exactly
;; the same shape, down to the [:sym env] tagging. The only difference is that it always
;; carries :docstring and :options, nil when absent, where spec omits the key -- so the
;; nils are dropped rather than the assertions changed.
;;
;; Two blocks in that suite test spec itself rather than the port: conforming a single
;; destructuring argument (there is no such function here, only the whole-arglist parser)
;; and spec's explain-data. The first is dropped; the second is replaced by an assertion
;; that the same input is rejected, which is the behaviour it was really checking.
(edit! "connect/operation_test.jank"
  "(s/conform :pathim.connect.operation/defresolver-args" "(conform-defresolver-args"
  "(deftest defresolver-syntax-test"
  "(defn- conform-defresolver-args
  \"pco/conform-defresolver-args, with the keys spec would have omitted removed.\"
  [args]
  (into {} (remove (fn [entry] (nil? (second entry)))) (pco/conform-defresolver-args args)))

(deftest defresolver-args-must-declare-output-test
  ;; Upstream asserts on spec's explain-data here. This port raises instead; what the test
  ;; is really checking -- that a resolver with neither options nor a trailing map is
  ;; rejected -- holds either way.
  (is (= :rejected
         (try (pco/conform-defresolver-args '[foo [env input] \"bar\"])
              :not-rejected
              (catch cpp/jank.runtime.object_ref _ :rejected)))))

(deftest defresolver-syntax-test")

(edit! "connect/operation_test.jank"
  ;; Registering a spec so that spec's conform/unform round-trip preserves an unknown
  ;; option. There is no spec here and nothing to round-trip through, but what the block
  ;; goes on to assert -- that defresolver's expansion keeps the option value intact --
  ;; still holds and is still worth checking, so only the registration goes.
  "       (s/def :pathim.connect.operation-test/or-thing (s/or :foo int? :bar string?))\n\n" "")

(drop-testing! "connect/operation_test.jank" "argument destructuring")
(drop-testing! "connect/operation_test.jank" "fails without options or visible map")

;; The defresolver/defmutation expansion tests compare against a literal that names the
;; operation `user/foo`. That namespace is not part of what they are checking -- it is
;; whatever *ns* happens to be, and Clojure's test runner leaves it as `user` while jank's
;; is its own namespace. Normalising the one quoted symbol on the actual side keeps the
;; assertion about the expansion's shape, which is the whole point of it.
(edit! "connect/operation_test.jank"
  "(deftest defresolver-syntax-test"
  "(defn- normalize-op-name
  \"Rewrites (quote some.ns/foo) to (quote user/foo) anywhere in a form.\"
  [form]
  (cond
    (and (seq? form) (= 'quote (first form)) (symbol? (second form)) (namespace (second form)))
    (list 'quote (symbol \"user\" (name (second form))))

    ;; the lambda is not redundant: jank's compiler crashes on a function handing itself
    ;; to another function from inside its own body
    (seq? form) (apply list (map (fn [x] (normalize-op-name x)) form))
    (vector? form) (mapv (fn [x] (normalize-op-name x)) form)
    (map? form) (into {} (map (fn [e] [(normalize-op-name (key e)) (normalize-op-name (val e))])) form)
    :else form))

(deftest defresolver-syntax-test")

(wrap-calls! "connect/operation_test.jank" '#{macroexpand-1} 'normalize-op-name)

;; operation_test does the same thing resolvers_test does, on both operation kinds, and
;; one block of it tests IFn-ness directly (calling a resolver through `apply`, including
;; its arity error). That block is about a capability jank cannot give a map at all, so it
;; goes; the ordinary calls are rewritten to the supported form.
(edit! "connect/operation_test.jank"
  "    [pathim.connect.operation :as pco]"
  "    [pathim.connect.operation :as pco]\n    [pathim.connect.operation.protocols :as pop]")

(drop-testing! "connect/operation_test.jank" "user can call resolver via apply")
(drop-testing! "connect/operation_test.jank" "user can call mutations via apply")
(callable-resolvers! "connect/operation_test.jank" '#{resolver} 'pop/-op-resolve)
(callable-resolvers! "connect/operation_test.jank" '#{mutation} 'pop/-op-mutate)
