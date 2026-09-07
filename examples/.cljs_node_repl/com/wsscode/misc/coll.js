// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.misc.coll');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
com.wsscode.misc.coll.distinct_by = (function com$wsscode$misc$coll$distinct_by(var_args){
var G__19115 = arguments.length;
switch (G__19115) {
case 1:
return com.wsscode.misc.coll.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.misc.coll.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__19121 = null;
var G__19121__0 = (function (){
return rf.call(null);
});
var G__19121__1 = (function (result){
return rf.call(null,result);
});
var G__19121__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__19121 = function(result,x){
switch(arguments.length){
case 0:
return G__19121__0.call(this);
case 1:
return G__19121__1.call(this,result);
case 2:
return G__19121__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19121.cljs$core$IFn$_invoke$arity$0 = G__19121__0;
G__19121.cljs$core$IFn$_invoke$arity$1 = G__19121__1;
G__19121.cljs$core$IFn$_invoke$arity$2 = G__19121__2;
return G__19121;
})()
});
}));

(com.wsscode.misc.coll.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$misc$coll$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__19116,seen__$1){
while(true){
var vec__19117 = p__19116;
var x = cljs.core.nth.call(null,vec__19117,(0),null);
var xs__$1 = vec__19117;
var temp__5823__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5823__auto__){
var s = temp__5823__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__19122 = cljs.core.rest.call(null,s);
var G__19123 = seen__$1;
p__19116 = G__19122;
seen__$1 = G__19123;
continue;
} else {
return cljs.core.cons.call(null,x,com$wsscode$misc$coll$step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,fx)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
}));

(com.wsscode.misc.coll.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence removing consecutive duplicates in coll when passed to a function f.
 *   Returns a transducer when no collection is provided.
 */
com.wsscode.misc.coll.dedupe_by = (function com$wsscode$misc$coll$dedupe_by(var_args){
var G__19125 = arguments.length;
switch (G__19125) {
case 1:
return com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("com.wsscode.misc.coll","none","com.wsscode.misc.coll/none",1151350699));
return (function() {
var G__19127 = null;
var G__19127__0 = (function (){
return rf.call(null);
});
var G__19127__1 = (function (result){
return rf.call(null,result);
});
var G__19127__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__19127 = function(result,x){
switch(arguments.length){
case 0:
return G__19127__0.call(this);
case 1:
return G__19127__1.call(this,result);
case 2:
return G__19127__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19127.cljs$core$IFn$_invoke$arity$0 = G__19127__0;
G__19127.cljs$core$IFn$_invoke$arity$1 = G__19127__1;
G__19127.cljs$core$IFn$_invoke$arity$2 = G__19127__2;
return G__19127;
})()
});
}));

(com.wsscode.misc.coll.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,com.wsscode.misc.coll.dedupe_by.call(null,f),coll);
}));

(com.wsscode.misc.coll.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Like group by, but will keep only the last result.
 */
com.wsscode.misc.coll.index_by = (function com$wsscode$misc$coll$index_by(f,coll){
return cljs.core.reduce.call(null,(function (m,x){
return cljs.core.assoc.call(null,m,f.call(null,x),x);
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
/**
 * Return the first element in coll that returns true for f.
 */
com.wsscode.misc.coll.find_first = (function com$wsscode$misc$coll$find_first(f,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,f,coll));
});
com.wsscode.misc.coll.sconj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
com.wsscode.misc.coll.vconj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
/**
 * Add element to a vector at some specific index. Only works with vectors!
 */
com.wsscode.misc.coll.conj_at_index = (function com$wsscode$misc$coll$conj_at_index(v,idx,x){
var before = cljs.core.subvec.call(null,v,(0),idx);
var after = cljs.core.subvec.call(null,v,idx,cljs.core.count.call(null,v));
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,v)),cljs.core.concat.call(null,before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),after));
});
/**
 * Find the index of element x in coll. Return nil if element is not found.
 */
com.wsscode.misc.coll.index_of = (function com$wsscode$misc$coll$index_of(coll,x){
return cljs.core.reduce.call(null,(function (_,p__19128){
var vec__19129 = p__19128;
var i = cljs.core.nth.call(null,vec__19129,(0),null);
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__19129,(1),null);
if(cljs.core._EQ_.call(null,x,x_SINGLEQUOTE_)){
return cljs.core.reduced.call(null,i);
} else {
return null;
}
}),null,cljs.core.map_indexed.call(null,cljs.core.vector,coll));
});
/**
 * Return a blank immutable queue or create one from coll.
 */
com.wsscode.misc.coll.queue = (function com$wsscode$misc$coll$queue(var_args){
var G__19133 = arguments.length;
switch (G__19133) {
case 0:
return com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(com.wsscode.misc.coll.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,com.wsscode.misc.coll.queue.call(null),coll);
}));

(com.wsscode.misc.coll.queue.cljs$lang$maxFixedArity = 1);

/**
 * CLJC helper to create MapEntry.
 */
com.wsscode.misc.coll.make_map_entry = (function com$wsscode$misc$coll$make_map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Map over the given hash-map keys.
 * 
 *   Example:
 *  (map-keys #(str/replace (name %) "_" "-") {"foo_bar" 1}) => {"foo-bar" 1}
 *   
 */
com.wsscode.misc.coll.map_keys = (function com$wsscode$misc$coll$map_keys(f,m){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),cljs.core.map.call(null,(function (x){
return com.wsscode.misc.coll.make_map_entry.call(null,f.call(null,cljs.core.key.call(null,x)),cljs.core.val.call(null,x));
})),m);
});
/**
 * Map over the given hash-map vals.
 * 
 *   Example:
 *  (map-vals inc {:a 1 :b 2})
 *   
 */
com.wsscode.misc.coll.map_vals = (function com$wsscode$misc$coll$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),cljs.core.map.call(null,(function (x){
return com.wsscode.misc.coll.make_map_entry.call(null,cljs.core.key.call(null,x),f.call(null,cljs.core.val.call(null,x)));
})),m);
});
com.wsscode.misc.coll.filter_keys = (function com$wsscode$misc$coll$filter_keys(f,m){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),cljs.core.filter.call(null,cljs.core.comp.call(null,f,cljs.core.key)),m);
});
com.wsscode.misc.coll.filter_vals = (function com$wsscode$misc$coll$filter_vals(f,m){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),cljs.core.filter.call(null,cljs.core.comp.call(null,f,cljs.core.val)),m);
});
com.wsscode.misc.coll.remove_keys = (function com$wsscode$misc$coll$remove_keys(f,m){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),cljs.core.remove.call(null,cljs.core.comp.call(null,f,cljs.core.key)),m);
});
com.wsscode.misc.coll.remove_vals = (function com$wsscode$misc$coll$remove_vals(f,m){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),cljs.core.remove.call(null,cljs.core.comp.call(null,f,cljs.core.val)),m);
});
/**
 * Return the map keys, as a set. This also checks if the entry is a map, otherwise
 *   returns nil (instead of throw).
 */
com.wsscode.misc.coll.keys_set = (function com$wsscode$misc$coll$keys_set(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,m));
} else {
return null;
}
});
/**
 * Additive merging.
 * 
 *   When merging maps, it does a deep merge.
 *   When merging sets, makes a union of them.
 * 
 *   When value of the right side is nil, the left side will be kept.
 * 
 *   For the rest works as standard merge.
 */
com.wsscode.misc.coll.merge_grow = (function com$wsscode$misc$coll$merge_grow(var_args){
var G__19136 = arguments.length;
switch (G__19136) {
case 0:
return com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentArrayMap.EMPTY;
}));

(com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(com.wsscode.misc.coll.merge_grow.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(((cljs.core.set_QMARK_.call(null,a)) && (cljs.core.set_QMARK_.call(null,b)))){
return clojure.set.union.call(null,a,b);
} else {
if(((cljs.core.map_QMARK_.call(null,a)) && (cljs.core.map_QMARK_.call(null,b)))){
return cljs.core.merge_with.call(null,com.wsscode.misc.coll.merge_grow,a,b);
} else {
if((b == null)){
return a;
} else {
return b;

}
}
}
}));

(com.wsscode.misc.coll.merge_grow.cljs$lang$maxFixedArity = 2);

/**
 * Like merge, but only add keys that are not present in the original map.
 */
com.wsscode.misc.coll.merge_defaults = (function com$wsscode$misc$coll$merge_defaults(m,defaults){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.contains_QMARK_.call(null,m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),m,defaults);
});
com.wsscode.misc.coll._STAR_deep_merge_handlers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
com.wsscode.misc.coll.value_merger = (function com$wsscode$misc$coll$value_merger(x){
var G__19138 = x;
var G__19138__$1 = (((G__19138 == null))?null:cljs.core.meta.call(null,G__19138));
if((G__19138__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.misc.coll","merge-with","com.wsscode.misc.coll/merge-with",-764343606).cljs$core$IFn$_invoke$arity$1(G__19138__$1);
}
});
/**
 * Merge util to keep the value from the left side.
 */
com.wsscode.misc.coll.keep_current = (function com$wsscode$misc$coll$keep_current(a,_){
return a;
});
/**
 * Merge util to keep the value from the right side.
 */
com.wsscode.misc.coll.keep_new = (function com$wsscode$misc$coll$keep_new(_,b){
return b;
});
/**
 * Recursively merges maps together. If all the maps supplied have nested maps
 *   under the same keys, these nested maps are merged.
 * 
 *   A custom merge strategy may be configured for specific keys, to do so you need to
 *   bind the value of *deep-merge-handlers*, the keys are the keywords and the values
 *   are functions to handle the merge of that key.
 * 
 *    (binding [*deep-merge-handlers* {:foo +}]
 *      (deep-merge {:foo 1} {:foo 2}))
 *    ; => {:foo 3}
 * 
 *   Another way to control the merge of values is to set some metadata to control the
 *   merge process (notice it only applies for types that support meta like maps and vectors,
 *   but not for keywords or numbers for example).
 * 
 *    (deep-merge {:list [1 2 3]} ^{::merge-with into} {:list [:a :b]})
 *    ; => {:list [1 2 3 :a :b]}
 * 
 *   The meta may go in the left or side of the merge, the right side has higher priority.
 * 
 *   Note that meta mergers have higher priority than merge handlers.
 * 
 *   Here is the merger pick order for clarity:
 * 
 *   1. Value merger from meta at new value
 *   2. Value merger from meta at current value
 *   3. Merge key handler
 *   4. Deep merge (in case both values are maps)
 *   5. Keep the new value (as in `clojure.core/merge`)
 * 
 *   Forked from Medley library.
 */
com.wsscode.misc.coll.deep_merge = (function com$wsscode$misc$coll$deep_merge(var_args){
var G__19143 = arguments.length;
switch (G__19143) {
case 0:
return com.wsscode.misc.coll.deep_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.misc.coll.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.misc.coll.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___19145 = arguments.length;
var i__5727__auto___19146 = (0);
while(true){
if((i__5727__auto___19146 < len__5726__auto___19145)){
args_arr__5751__auto__.push((arguments[i__5727__auto___19146]));

var G__19147 = (i__5727__auto___19146 + (1));
i__5727__auto___19146 = G__19147;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return com.wsscode.misc.coll.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(com.wsscode.misc.coll.deep_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(com.wsscode.misc.coll.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(com.wsscode.misc.coll.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_((function (){var or__5002__auto__ = a;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return b;
}
})())){
var merge_entry = (function com$wsscode$misc$coll$merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v_SINGLEQUOTE_ = cljs.core.val.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k)){
var v = cljs.core.get.call(null,m,k);
var merger = (function (){var or__5002__auto__ = com.wsscode.misc.coll.value_merger.call(null,v_SINGLEQUOTE_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = com.wsscode.misc.coll.value_merger.call(null,v);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = cljs.core.get.call(null,com.wsscode.misc.coll._STAR_deep_merge_handlers_STAR_,k);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = ((((cljs.core.map_QMARK_.call(null,v)) && (cljs.core.map_QMARK_.call(null,v_SINGLEQUOTE_))))?com.wsscode.misc.coll.deep_merge:null);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return com.wsscode.misc.coll.keep_new;
}
}
}
}
})();
return cljs.core.assoc.call(null,m,k,merger.call(null,cljs.core.get.call(null,m,k),v_SINGLEQUOTE_));
} else {
return cljs.core.assoc.call(null,m,k,v_SINGLEQUOTE_);
}
});
return cljs.core.reduce.call(null,merge_entry,(function (){var or__5002__auto__ = a;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,b));
} else {
return null;
}
}));

(com.wsscode.misc.coll.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,com.wsscode.misc.coll.deep_merge,(function (){var or__5002__auto__ = a;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cons.call(null,b,more));
}));

/** @this {Function} */
(com.wsscode.misc.coll.deep_merge.cljs$lang$applyTo = (function (seq19140){
var G__19141 = cljs.core.first.call(null,seq19140);
var seq19140__$1 = cljs.core.next.call(null,seq19140);
var G__19142 = cljs.core.first.call(null,seq19140__$1);
var seq19140__$2 = cljs.core.next.call(null,seq19140__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19141,G__19142,seq19140__$2);
}));

(com.wsscode.misc.coll.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Like assoc, but noop if v is falsy.
 */
com.wsscode.misc.coll.assoc_if = (function com$wsscode$misc$coll$assoc_if(var_args){
var G__19153 = arguments.length;
switch (G__19153) {
case 3:
return com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___19155 = arguments.length;
var i__5727__auto___19156 = (0);
while(true){
if((i__5727__auto___19156 < len__5726__auto___19155)){
args_arr__5751__auto__.push((arguments[i__5727__auto___19156]));

var G__19157 = (i__5727__auto___19156 + (1));
i__5727__auto___19156 = G__19157;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}));

(com.wsscode.misc.coll.assoc_if.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = com.wsscode.misc.coll.assoc_if.call(null,m,k,v);
if(cljs.core.truth_(kvs)){
var G__19158 = ret;
var G__19159 = cljs.core.first.call(null,kvs);
var G__19160 = cljs.core.second.call(null,kvs);
var G__19161 = cljs.core.nnext.call(null,kvs);
m = G__19158;
k = G__19159;
v = G__19160;
kvs = G__19161;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(com.wsscode.misc.coll.assoc_if.cljs$lang$applyTo = (function (seq19149){
var G__19150 = cljs.core.first.call(null,seq19149);
var seq19149__$1 = cljs.core.next.call(null,seq19149);
var G__19151 = cljs.core.first.call(null,seq19149__$1);
var seq19149__$2 = cljs.core.next.call(null,seq19149__$1);
var G__19152 = cljs.core.first.call(null,seq19149__$2);
var seq19149__$3 = cljs.core.next.call(null,seq19149__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19150,G__19151,G__19152,seq19149__$3);
}));

(com.wsscode.misc.coll.assoc_if.cljs$lang$maxFixedArity = (3));

/**
 * Update some key when that key is present in the map.
 */
com.wsscode.misc.coll.update_contained = (function com$wsscode$misc$coll$update_contained(var_args){
var G__19170 = arguments.length;
switch (G__19170) {
case 3:
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___19172 = arguments.length;
var i__5727__auto___19173 = (0);
while(true){
if((i__5727__auto___19173 < len__5726__auto___19172)){
args_arr__5751__auto__.push((arguments[i__5727__auto___19173]));

var G__19174 = (i__5727__auto___19173 + (1));
i__5727__auto___19173 = G__19174;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((6) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((6)),(0),null)):null);
return com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5752__auto__);

}
});

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.update.call(null,m,k,f);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,a1){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.update.call(null,m,k,f,a1);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,a1,a2){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.update.call(null,m,k,f,a1,a2);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,a1,a2,a3){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.update.call(null,m,k,f,a1,a2,a3);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_contained.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,a1,a2,a3,args){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.apply.call(null,cljs.core.update,m,k,f,a1,a2,a3,args);
} else {
return m;
}
}));

/** @this {Function} */
(com.wsscode.misc.coll.update_contained.cljs$lang$applyTo = (function (seq19163){
var G__19164 = cljs.core.first.call(null,seq19163);
var seq19163__$1 = cljs.core.next.call(null,seq19163);
var G__19165 = cljs.core.first.call(null,seq19163__$1);
var seq19163__$2 = cljs.core.next.call(null,seq19163__$1);
var G__19166 = cljs.core.first.call(null,seq19163__$2);
var seq19163__$3 = cljs.core.next.call(null,seq19163__$2);
var G__19167 = cljs.core.first.call(null,seq19163__$3);
var seq19163__$4 = cljs.core.next.call(null,seq19163__$3);
var G__19168 = cljs.core.first.call(null,seq19163__$4);
var seq19163__$5 = cljs.core.next.call(null,seq19163__$4);
var G__19169 = cljs.core.first.call(null,seq19163__$5);
var seq19163__$6 = cljs.core.next.call(null,seq19163__$5);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19164,G__19165,G__19166,G__19167,G__19168,G__19169,seq19163__$6);
}));

(com.wsscode.misc.coll.update_contained.cljs$lang$maxFixedArity = (6));

/**
 * Update some key if that key is present in the map and value is truthy.
 */
com.wsscode.misc.coll.update_if = (function com$wsscode$misc$coll$update_if(var_args){
var G__19183 = arguments.length;
switch (G__19183) {
case 3:
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___19185 = arguments.length;
var i__5727__auto___19186 = (0);
while(true){
if((i__5727__auto___19186 < len__5726__auto___19185)){
args_arr__5751__auto__.push((arguments[i__5727__auto___19186]));

var G__19187 = (i__5727__auto___19186 + (1));
i__5727__auto___19186 = G__19187;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((6) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((6)),(0),null)):null);
return com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5752__auto__);

}
});

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
if(cljs.core.truth_(cljs.core.get.call(null,m,k))){
return cljs.core.update.call(null,m,k,f);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,a1){
if(cljs.core.truth_(cljs.core.get.call(null,m,k))){
return cljs.core.update.call(null,m,k,f,a1);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,a1,a2){
if(cljs.core.truth_(cljs.core.get.call(null,m,k))){
return cljs.core.update.call(null,m,k,f,a1,a2);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,a1,a2,a3){
if(cljs.core.truth_(cljs.core.get.call(null,m,k))){
return cljs.core.update.call(null,m,k,f,a1,a2,a3);
} else {
return m;
}
}));

(com.wsscode.misc.coll.update_if.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,a1,a2,a3,args){
if(cljs.core.truth_(cljs.core.get.call(null,m,k))){
return cljs.core.apply.call(null,cljs.core.update,m,k,f,a1,a2,a3,args);
} else {
return m;
}
}));

/** @this {Function} */
(com.wsscode.misc.coll.update_if.cljs$lang$applyTo = (function (seq19176){
var G__19177 = cljs.core.first.call(null,seq19176);
var seq19176__$1 = cljs.core.next.call(null,seq19176);
var G__19178 = cljs.core.first.call(null,seq19176__$1);
var seq19176__$2 = cljs.core.next.call(null,seq19176__$1);
var G__19179 = cljs.core.first.call(null,seq19176__$2);
var seq19176__$3 = cljs.core.next.call(null,seq19176__$2);
var G__19180 = cljs.core.first.call(null,seq19176__$3);
var seq19176__$4 = cljs.core.next.call(null,seq19176__$3);
var G__19181 = cljs.core.first.call(null,seq19176__$4);
var seq19176__$5 = cljs.core.next.call(null,seq19176__$4);
var G__19182 = cljs.core.first.call(null,seq19176__$5);
var seq19176__$6 = cljs.core.next.call(null,seq19176__$5);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19177,G__19178,G__19179,G__19180,G__19181,G__19182,seq19176__$6);
}));

(com.wsscode.misc.coll.update_if.cljs$lang$maxFixedArity = (6));

com.wsscode.misc.coll.native_map_QMARK_ = (function com$wsscode$misc$coll$native_map_QMARK_(x){
return (((x instanceof cljs.core.PersistentArrayMap)) || ((x instanceof cljs.core.PersistentHashMap)));
});
/**
 * Sorts output list to match input list order.
 * 
 *    (coll/restore-order
 *      [{:id 1} {:id 2} {:id 3}]
 *      :id
 *      [{:id 4 :x "a"}
 *       {:id 1 :x "b"}
 *       {:id 3 :x "c"}
 *       {:id 2 :x "d"}])
 * 
 *    => [{:id 1 :x "b"}
 *        {:id 2 :x "d"}
 *        {:id 3 :x "c"}]
 * 
 *    (coll/restore-order
 *      [{:id 1, :id2 1} {:id 2, :id2 0} {:id 3, :id2 1}]
 *      #(select-keys % [:id :id2])
 *      [{:id 4 :id2 0 :x "a"}
 *       {:id 1 :id2 1 :x "b"}
 *       {:id 3 :id2 1 :x "c"}
 *       {:id 2 :id2 0 :x "d"}])
 * 
 *    => [{:id 1 :id2 1 :x "b"}
 *        {:id 2 :id2 0 :x "d"}
 *        {:id 3 :id2 1 :x "c"}]
 * 
 * Note it will also remove items that don't match anything in the original items
 * list.
 * 
 * In case the items contains a matching key more than once, the last one will be taken.
 */
com.wsscode.misc.coll.restore_order = (function com$wsscode$misc$coll$restore_order(var_args){
var G__19190 = arguments.length;
switch (G__19190) {
case 3:
return com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$3 = (function (inputs,key,items){
return com.wsscode.misc.coll.restore_order.call(null,inputs,key,items,((cljs.core.ident_QMARK_.call(null,key))?(function (p1__19188_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.call(null,p1__19188_SHARP_,key)]);
}):key));
}));

(com.wsscode.misc.coll.restore_order.cljs$core$IFn$_invoke$arity$4 = (function (inputs,key,items,default_fn){
var index = com.wsscode.misc.coll.index_by.call(null,key,items);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (input){
var or__5002__auto__ = cljs.core.get.call(null,index,key.call(null,input));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default_fn.call(null,input);
}
})),inputs);
}));

(com.wsscode.misc.coll.restore_order.cljs$lang$maxFixedArity = 4);

/**
 * Same functionality as restore-order, but fixes the arguments order to make
 *   it easier to thread with a default-fn.
 * 
 *   Also, it returns nil for not found items instead of a map with the key.
 */
com.wsscode.misc.coll.restore_order2 = (function com$wsscode$misc$coll$restore_order2(var_args){
var G__19193 = arguments.length;
switch (G__19193) {
case 3:
return com.wsscode.misc.coll.restore_order2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.coll.restore_order2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.coll.restore_order2.cljs$core$IFn$_invoke$arity$3 = (function (inputs,key,items){
return com.wsscode.misc.coll.restore_order.call(null,inputs,key,items,cljs.core.constantly.call(null,null));
}));

(com.wsscode.misc.coll.restore_order2.cljs$core$IFn$_invoke$arity$4 = (function (inputs,key,default_fn,items){
return com.wsscode.misc.coll.restore_order.call(null,inputs,key,items,default_fn);
}));

(com.wsscode.misc.coll.restore_order2.cljs$lang$maxFixedArity = 4);

/**
 * CLJC utility to get an iterator from the collection.
 */
com.wsscode.misc.coll.iterator = (function com$wsscode$misc$coll$iterator(coll){
return cljs.core.iter.call(null,coll);
});
/**
 * Like iterate, but stops when it sees a `nil` value.
 */
com.wsscode.misc.coll.iterate_while = (function com$wsscode$misc$coll$iterate_while(f,x){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,f,x));
});
/**
 * Return true if column add items at head with conj.
 */
com.wsscode.misc.coll.coll_append_at_head_QMARK_ = (function com$wsscode$misc$coll$coll_append_at_head_QMARK_(s){
return (!(((cljs.core.vector_QMARK_.call(null,s)) || (cljs.core.set_QMARK_.call(null,s)))));
});
/**
 * Returns true for sequential collections and sets, false for maps.
 */
com.wsscode.misc.coll.collection_QMARK_ = (function com$wsscode$misc$coll$collection_QMARK_(x){
return ((cljs.core.sequential_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x)));
});
/**
 * Compare two vectors, this expects the vectors to be ordered.
 */
com.wsscode.misc.coll.vector_compare = (function com$wsscode$misc$coll$vector_compare(p__19195,p__19196){
while(true){
var vec__19197 = p__19195;
var seq__19198 = cljs.core.seq.call(null,vec__19197);
var first__19199 = cljs.core.first.call(null,seq__19198);
var seq__19198__$1 = cljs.core.next.call(null,seq__19198);
var value1 = first__19199;
var rest1 = seq__19198__$1;
var vec__19200 = p__19196;
var seq__19201 = cljs.core.seq.call(null,vec__19200);
var first__19202 = cljs.core.first.call(null,seq__19201);
var seq__19201__$1 = cljs.core.next.call(null,seq__19201);
var value2 = first__19202;
var rest2 = seq__19201__$1;
var result = cljs.core.compare.call(null,value1,value2);
if((!((result === (0))))){
return result;
} else {
if((value1 == null)){
return (0);
} else {
var G__19203 = rest1;
var G__19204 = rest2;
p__19195 = G__19203;
p__19196 = G__19204;
continue;

}
}
break;
}
});

//# sourceMappingURL=coll.js.map
