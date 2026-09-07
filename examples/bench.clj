;; This Source Code Form is subject to the terms of the Mozilla Public
;; License, v. 2.0. If a copy of the MPL was not distributed with this
;; file, You can obtain one at http://mozilla.org/MPL/2.0/.

(ns bench
  "Benchmarks Pathom 3's three runners on Clojure.

   Run it with:

     cd examples && lein run

   examples/bench.jank is the same benchmark against pathim and Yakusoku on jank, so the
   two can be compared. The files are deliberately independent: each is ordinary code for
   its own dialect, and neither is generated from the other.

   What each runner buys is worth stating, because the benchmarks are shaped around it:

     * The async runner does not overlap the steps of one query -- it walks the same plan,
       awaiting each node. What it buys is not blocking a thread, so many queries can be in
       flight at once. `throughput` measures that.
     * The parallel runner overlaps independent branches *within* one query, and that is
       what `single-query` and `one-by-one` measure.
     * Batching turns N resolver calls into one. All three runners batch, so `batched` is
       about the same everywhere; it is here because `one-by-one` only means something
       next to it."
  (:require
    [com.wsscode.pathom3.connect.operation :as pco]
    [com.wsscode.pathom3.connect.indexes :as pci]
    [com.wsscode.pathom3.interface.eql :as p.eql]
    [com.wsscode.pathom3.interface.async.eql :as p.a.eql]
    [promesa.core :as p]))

;; ---------------------------------------------------------------- platform ----

(defn- now-ms []
  (/ (double (System/nanoTime)) 1000000.0))

(defn- sleep-ms [ms]
  (Thread/sleep (long ms)))

(defn- await! [promise]
  (deref promise))

;; ---------------------------------------------------------------- workload ----
;;
;; Simulated latency, in milliseconds, standing in for network calls: the sync resolvers
;; block for it, the async ones resolve a promise after it.

(def slow-ms 50)   ; each of the two independent user resolvers
(def join-ms 10)   ; the resolver that depends on both of them
(def batch-ms 60)  ; one batched call, however many items it covers
(def item-ms 20)   ; one call of the non-batched twin, per item

(def user-ids (vec (range 1 21)))
(def items (mapv (fn [id] {:item/id id}) (range 1 31)))
(def items-entity {:items items})

;; ----------------------------------------------------------- sync resolvers ----

(pco/defresolver profile-sync [env input]
  {::pco/input  [:user/id]
   ::pco/output [:user/profile]}
  (sleep-ms slow-ms)
  {:user/profile (str "profile-" (:user/id input))})

(pco/defresolver orders-sync [env input]
  {::pco/input  [:user/id]
   ::pco/output [:user/orders]}
  (sleep-ms slow-ms)
  {:user/orders (* 3 (:user/id input))})

(pco/defresolver summary-sync [env input]
  {::pco/input  [:user/profile :user/orders]
   ::pco/output [:user/summary]}
  (sleep-ms join-ms)
  {:user/summary (str (:user/profile input) "/" (:user/orders input))})

(pco/defresolver price-batch-sync [env inputs]
  {::pco/input  [:item/id]
   ::pco/output [:item/price]
   ::pco/batch? true}
  (sleep-ms batch-ms)
  (mapv (fn [item] {:item/price (* 10 (:item/id item))}) inputs))

(pco/defresolver price-one-sync [env input]
  {::pco/input  [:item/id]
   ::pco/output [:item/slow-price]}
  (sleep-ms item-ms)
  {:item/slow-price (* 10 (:item/id input))})

;; ---------------------------------------------------------- async resolvers ----
;;
;; The same graph, with every resolver returning a promise rather than blocking.

(pco/defresolver profile-async [env input]
  {::pco/input  [:user/id]
   ::pco/output [:user/profile]}
  (p/delay slow-ms {:user/profile (str "profile-" (:user/id input))}))

(pco/defresolver orders-async [env input]
  {::pco/input  [:user/id]
   ::pco/output [:user/orders]}
  (p/delay slow-ms {:user/orders (* 3 (:user/id input))}))

(pco/defresolver summary-async [env input]
  {::pco/input  [:user/profile :user/orders]
   ::pco/output [:user/summary]}
  (p/delay join-ms {:user/summary (str (:user/profile input) "/" (:user/orders input))}))

(pco/defresolver price-batch-async [env inputs]
  {::pco/input  [:item/id]
   ::pco/output [:item/price]
   ::pco/batch? true}
  (p/delay batch-ms (mapv (fn [item] {:item/price (* 10 (:item/id item))}) inputs)))

(pco/defresolver price-one-async [env input]
  {::pco/input  [:item/id]
   ::pco/output [:item/slow-price]}
  (p/delay item-ms {:item/slow-price (* 10 (:item/id input))}))

;; --------------------------------------------------------------------- envs ----

(def sync-env
  (pci/register [profile-sync orders-sync summary-sync price-batch-sync price-one-sync]))

(def async-env
  (pci/register [profile-async orders-async summary-async price-batch-async price-one-async]))

(def parallel-env
  (assoc async-env ::p.a.eql/parallel? true))

(def batch-query [{:items [:item/price]}])
(def one-by-one-query [{:items [:item/slow-price]}])

;; --------------------------------------------------------------- benchmarks ----
;;
;; Each returns {:ms .. :answer ..}. The answer is a plain value so the two runtimes can be
;; checked against each other before any timing is compared: a benchmark that computed
;; something different is not a faster one.

(defn sync-throughput [ids]
  (let [start (now-ms)
        answer (mapv (fn [id]
                       (:user/summary (p.eql/process sync-env {:user/id id} [:user/summary])))
                     ids)]
    {:ms (- (now-ms) start) :answer answer}))

(defn sync-single-query []
  (let [start (now-ms)
        answer (:user/summary (p.eql/process sync-env {:user/id 1} [:user/summary]))]
    {:ms (- (now-ms) start) :answer answer}))

(defn sync-batched [entity]
  (let [start (now-ms)
        answer (mapv :item/price (:items (p.eql/process sync-env entity batch-query)))]
    {:ms (- (now-ms) start) :answer answer}))

(defn sync-one-by-one [entity]
  (let [start (now-ms)
        answer (mapv :item/slow-price (:items (p.eql/process sync-env entity one-by-one-query)))]
    {:ms (- (now-ms) start) :answer answer}))

(defn async-throughput
  "Every query started before any of them finishes."
  [env ids]
  (let [start (now-ms)]
    (p/then (p/all (mapv (fn [id] (p.a.eql/process env {:user/id id} [:user/summary])) ids))
            (fn [results]
              {:ms (- (now-ms) start) :answer (mapv :user/summary results)}))))

(defn async-single-query [env]
  (let [start (now-ms)]
    (p/then (p.a.eql/process env {:user/id 1} [:user/summary])
            (fn [result] {:ms (- (now-ms) start) :answer (:user/summary result)}))))

(defn async-batched [env entity]
  (let [start (now-ms)]
    (p/then (p.a.eql/process env entity batch-query)
            (fn [result]
              {:ms (- (now-ms) start) :answer (mapv :item/price (:items result))}))))

(defn async-one-by-one [env entity]
  (let [start (now-ms)]
    (p/then (p.a.eql/process env entity one-by-one-query)
            (fn [result]
              {:ms (- (now-ms) start) :answer (mapv :item/slow-price (:items result))}))))

;; ------------------------------------------------------------------ running ----

(def iterations
  "Timed passes per benchmark. A warm-up pass runs first and is discarded, so the JIT is
   warm before anything is measured."
  3)

(def ^:private one-user (vec (take 1 user-ids)))
(def ^:private one-item {:items (vec (take 1 items))})

(defn- median [xs]
  (let [sorted (vec (sort xs))]
    (nth sorted (quot (count sorted) 2))))

(defn- ms-str
  "Milliseconds to one decimal place.

   The remainder is subtracted rather than taken with `rem`: in jank, `(rem 22457 10)`
   answers 7.0 -- a double from two integers -- which would print as \"2245.7.0\"."
  [ms]
  (let [tenths (long (+ 0.5 (* 10.0 ms)))
        whole (quot tenths 10)]
    (str whole "." (- tenths (* 10 whole)))))

(defn- pad-left [s n]
  (let [s (str s)
        gap (- n (count s))]
    (str (apply str (repeat (max 0 gap) " ")) s)))

(defn- pad-right [s n]
  (let [s (str s)
        gap (- n (count s))]
    (str s (apply str (repeat (max 0 gap) " ")))))

(defn- clip [s n]
  (let [s (str s)]
    (if (> (count s) n) (str (subs s 0 (- n 3)) "...") s)))

(defn- row! [label result]
  (println (str "  " (pad-right label 22)
                (pad-left (ms-str (:ms result)) 10)
                "   " (clip (pr-str (:answer result)) 44))))

(defn- run-sync!
  "The blocking benchmarks. A one-element warm-up pass first, then the timed ones."
  []
  (println)
  (println "  sync runner")
  (doseq [[label warm run]
          [["throughput" (fn [] (sync-throughput one-user)) (fn [] (sync-throughput user-ids))]
           ["single-query" sync-single-query sync-single-query]
           ["batched" (fn [] (sync-batched one-item)) (fn [] (sync-batched items-entity))]
           ["one-by-one" (fn [] (sync-one-by-one one-item)) (fn [] (sync-one-by-one items-entity))]]]
    (warm)
    (let [runs (mapv (fn [_] (run)) (range iterations))]
      (row! label (assoc (first runs) :ms (median (mapv :ms runs)))))))

(defn- run-async!
  "The non-blocking benchmarks, driven one at a time from this thread. single-query goes
   first because it is the only one that runs a single query at a time, so it warms the
   whole path before anything concurrent starts."
  [label env]
  (println)
  (println (str "  " label " runner"))
  (doseq [[name warm run]
          [["single-query" (fn [] (async-single-query env)) (fn [] (async-single-query env))]
           ["throughput" (fn [] (async-throughput env one-user)) (fn [] (async-throughput env user-ids))]
           ["batched" (fn [] (async-batched env one-item)) (fn [] (async-batched env items-entity))]
           ["one-by-one" (fn [] (async-one-by-one env one-item)) (fn [] (async-one-by-one env items-entity))]]]
    (await! (warm))
    (let [runs (mapv (fn [_] (await! (run))) (range iterations))]
      (row! name (assoc (first runs) :ms (median (mapv :ms runs)))))))

(defn -main [& _]
  (println)
  (println (str "Pathom 3 on Clojure -- median of " iterations " passes, milliseconds (lower is better)"))
  (println (str "  " (pad-right "benchmark" 22) (pad-left "ms" 10) "   answer"))
  (run-sync!)
  (run-async! "async" async-env)
  (run-async! "parallel" parallel-env)
  (println)
  (shutdown-agents)
  (System/exit 0))
