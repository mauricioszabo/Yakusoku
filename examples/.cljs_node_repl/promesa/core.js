// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('cljs.core');
goog.require('promesa.exec');
goog.require('promesa.impl');
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.impl.resolved.call(null,v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.impl.rejected.call(null,v);
});
/**
 * Creates an empty promise instance.
 */
promesa.core.deferred = (function promesa$core$deferred(){
return promesa.impl.deferred.call(null);
});
/**
 * The coerce based promise constructor. Creates a appropriate promise
 *   instance depending on the provided value.
 * 
 *   If an executor is provided, it will be used to resolve this
 *   promise.
 */
promesa.core.promise = (function promesa$core$promise(var_args){
var G__18884 = arguments.length;
switch (G__18884) {
case 1:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (v){
return promesa.protocols._promise.call(null,v);
}));

(promesa.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (v,executor){
return promesa.protocols._map.call(null,promesa.protocols._promise.call(null,v),cljs.core.identity,executor);
}));

(promesa.core.promise.cljs$lang$maxFixedArity = 2);

/**
 * A convenience alias for `promise` coercion function that only accepts
 *   a single argument.
 */
promesa.core.wrap = (function promesa$core$wrap(v){
return promesa.protocols._promise.call(null,v);
});
/**
 * Create a promise instance from a factory function. If an executor is
 *   provided, the factory will be executed in the provided executor.
 * 
 *   A factory function looks like `(fn [resolve reject] (resolve 1))`.
 */
promesa.core.create = (function promesa$core$create(var_args){
var G__18891 = arguments.length;
switch (G__18891) {
case 1:
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.create.cljs$core$IFn$_invoke$arity$1 = (function (f){
var d = promesa.impl.deferred.call(null);
try{f.call(null,(function (p1__18886_SHARP_){
return promesa.protocols._resolve_BANG_.call(null,d,p1__18886_SHARP_);
}),(function (p1__18887_SHARP_){
return promesa.protocols._reject_BANG_.call(null,d,p1__18887_SHARP_);
}));
}catch (e18892){var e_18895 = e18892;
promesa.protocols._reject_BANG_.call(null,d,e_18895);
}
return d;
}));

(promesa.core.create.cljs$core$IFn$_invoke$arity$2 = (function (f,executor){
var d = promesa.impl.deferred.call(null);
promesa.exec.run_BANG_.call(null,executor,(function (){
try{return f.call(null,(function (p1__18888_SHARP_){
return promesa.protocols._resolve_BANG_.call(null,d,p1__18888_SHARP_);
}),(function (p1__18889_SHARP_){
return promesa.protocols._reject_BANG_.call(null,d,p1__18889_SHARP_);
}));
}catch (e18893){var e = e18893;
return promesa.protocols._reject_BANG_.call(null,d,e);
}}));

return d;
}));

(promesa.core.create.cljs$lang$maxFixedArity = 2);

/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
if((!((v == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === v.promesa$protocols$IPromise$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,promesa.protocols.IPromise,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,promesa.protocols.IPromise,v);
}
});
/**
 * Return true if `v` is a promise instance (alias to `promise?`).
 */
promesa.core.deferred_QMARK_ = (function promesa$core$deferred_QMARK_(v){
return (v instanceof promesa.impl._STAR_default_promise_STAR_);
});
/**
 * Returns true if `v` is a promise like object.
 */
promesa.core.thenable_QMARK_ = (function promesa$core$thenable_QMARK_(v){
return ((cljs.core.object_QMARK_.call(null,v)) && (cljs.core.fn_QMARK_.call(null,(v["then"]))));
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return promesa.protocols._pending_QMARK_.call(null,p);
});
/**
 * Returns the current promise value.
 */
promesa.core.extract = (function promesa$core$extract(p){
return promesa.protocols._extract.call(null,p);
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = cljs.core.complement.call(null,promesa.core.pending_QMARK_);
/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   The computation will be executed in the calling thread by default;
 *   you also can provide a custom executor.
 * 
 *   If the function `f` returns a promise instance, it will be
 *   automatically unwrapped.
 */
promesa.core.then = (function promesa$core$then(var_args){
var G__18898 = arguments.length;
switch (G__18898) {
case 2:
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._then.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.then.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._then.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.then.cljs$lang$maxFixedArity = 3);

promesa.core.bind = (function promesa$core$bind(var_args){
var G__18901 = arguments.length;
switch (G__18901) {
case 2:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.bind.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.bind.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   The computation will be executed in the calling thread by default;
 *   you also can provide a custom executor.
 * 
 *   Don't perform flatten on the result.
 */
promesa.core.then_SINGLEQUOTE_ = (function promesa$core$then_SINGLEQUOTE_(var_args){
var G__18904 = arguments.length;
switch (G__18904) {
case 2:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._map.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._map.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved.
 * 
 *   Unlike `then` this does not performs automatic promise flattening.
 *   This is designed to be used with `->>`.
 */
promesa.core.map = (function promesa$core$map(var_args){
var G__18907 = arguments.length;
switch (G__18907) {
case 2:
return promesa.core.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.map.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._map.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.map.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._map.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.map.cljs$lang$maxFixedArity = 3);

/**
 * Chains a computation `f` (function) to be executed when the promise
 *   `p` is successfully resolved. always expecting that `f` returns a
 *   promise that will be automatically unwrapped.
 * 
 *   This is just a stricter version of `then` with reversed arguments in
 *   the same way as `map`.
 * 
 *   This is designed to be used with `->>`.
 */
promesa.core.mapcat = (function promesa$core$mapcat(var_args){
var G__18910 = arguments.length;
switch (G__18910) {
case 2:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.mapcat.cljs$lang$maxFixedArity = 3);

/**
 * Chain variable number of computations to be executed
 *   serially. Analogous to `then` that accepts variable number of
 *   functions.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var G__18918 = arguments.length;
switch (G__18918) {
case 2:
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___18920 = arguments.length;
var i__5727__auto___18921 = (0);
while(true){
if((i__5727__auto___18921 < len__5726__auto___18920)){
args_arr__5751__auto__.push((arguments[i__5727__auto___18921]));

var G__18922 = (i__5727__auto___18921 + (1));
i__5727__auto___18921 = G__18922;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(promesa.core.chain.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then.call(null,p,f);
}));

(promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.call(null,(function (p1__18912_SHARP_,p2__18913_SHARP_){
return promesa.core.then.call(null,p1__18912_SHARP_,p2__18913_SHARP_);
}),p,cljs.core.cons.call(null,f,fs));
}));

/** @this {Function} */
(promesa.core.chain.cljs$lang$applyTo = (function (seq18915){
var G__18916 = cljs.core.first.call(null,seq18915);
var seq18915__$1 = cljs.core.next.call(null,seq18915);
var G__18917 = cljs.core.first.call(null,seq18915__$1);
var seq18915__$2 = cljs.core.next.call(null,seq18915__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18916,G__18917,seq18915__$2);
}));

(promesa.core.chain.cljs$lang$maxFixedArity = (2));

/**
 * Chain variable number of computations to be executed serially. Unlike
 *   `chain` does not flattens the return value of each step (probably
 *   this is more performant than `chain`).
 */
promesa.core.chain_SINGLEQUOTE_ = (function promesa$core$chain_SINGLEQUOTE_(var_args){
var G__18927 = arguments.length;
switch (G__18927) {
case 2:
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___18929 = arguments.length;
var i__5727__auto___18930 = (0);
while(true){
if((i__5727__auto___18930 < len__5726__auto___18929)){
args_arr__5751__auto__.push((arguments[i__5727__auto___18930]));

var G__18931 = (i__5727__auto___18930 + (1));
i__5727__auto___18930 = G__18931;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then_SINGLEQUOTE_.call(null,p,f);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.call(null,promesa.protocols._map,promesa.protocols._promise.call(null,p),cljs.core.cons.call(null,f,fs));
}));

/** @this {Function} */
(promesa.core.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq18924){
var G__18925 = cljs.core.first.call(null,seq18924);
var seq18924__$1 = cljs.core.next.call(null,seq18924);
var G__18926 = cljs.core.first.call(null,seq18924__$1);
var seq18924__$2 = cljs.core.next.call(null,seq18924__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18925,G__18926,seq18924__$2);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$lang$maxFixedArity = (2));

/**
 * Executes `f` when the promise `p` is resolved or is rejected. Returns
 *   a promise resolved with the return value of `f` function.
 */
promesa.core.handle = (function promesa$core$handle(var_args){
var G__18933 = arguments.length;
switch (G__18933) {
case 2:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.handle.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._handle.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.handle.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._handle.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.handle.cljs$lang$maxFixedArity = 3);

/**
 * Attach a potentially side-effectful handler to promise that will be
 *   executed independently if promise is resolved or rejected.
 * 
 *   Returns the original promise and the return value of `f` function is
 *   ignored.
 */
promesa.core.finally$ = (function promesa$core$finally(var_args){
var G__18936 = arguments.length;
switch (G__18936) {
case 2:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._finally.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._finally.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.finally$.cljs$lang$maxFixedArity = 3);

/**
 * Executes `f` when the promise `p` is rejected. Returns a promise
 *   resolved with the return value of `f` function handler.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__18940 = arguments.length;
switch (G__18940) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._thenErr.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_.call(null,pred_or_type))?pred_or_type:(function (p1__18938_SHARP_){
return (p1__18938_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._thenErr.call(null,promesa.protocols._promise.call(null,p),(function (e){
if(cljs.core.truth_(accept_QMARK_.call(null,e))){
return f.call(null,e);
} else {
return promesa.impl.rejected.call(null,e);
}
}));
}));

(promesa.core.catch$.cljs$lang$maxFixedArity = 3);

/**
 * Executes `f` when the promise `p` is rejected. Returns a promise
 *   resolved with the return value of `f` function handler.
 */
promesa.core.catch_SINGLEQUOTE_ = (function promesa$core$catch_SINGLEQUOTE_(var_args){
var G__18944 = arguments.length;
switch (G__18944) {
case 2:
return promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._mapErr.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_.call(null,pred_or_type))?pred_or_type:(function (p1__18942_SHARP_){
return (p1__18942_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._mapErr.call(null,promesa.protocols._promise.call(null,p),(function (e){
if(cljs.core.truth_(accept_QMARK_.call(null,e))){
return f.call(null,e);
} else {
return promesa.impl.rejected.call(null,e);
}
}));
}));

(promesa.core.catch_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Same as `catch` but with parameters inverted.
 */
promesa.core.error = (function promesa$core$error(var_args){
var G__18947 = arguments.length;
switch (G__18947) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.call(null,p,f);
}));

(promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core.catch$.call(null,p,type,f);
}));

(promesa.core.error.cljs$lang$maxFixedArity = 3);

/**
 * A short alias for `error` function.
 */
promesa.core.err = promesa.core.error;
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 * 
 *   Example:
 * 
 *   (-> (all [(promise :first-promise)
 *          (promise :second-promise)]
 *    (then (fn [[first-result second-result]]))
 *     (println (str first-result ", " second-result)
 * 
 *   Will print out
 *   :first-promise, :second-promise.
 * 
 *   If at least one of the promises is rejected, the resulting promise will be
 *   rejected.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.core.then_SINGLEQUOTE_.call(null,promesa.impl._STAR_default_promise_STAR_.all(cljs.core.into_array.call(null,promises)),cljs.core.vec);
});
promesa.core.race = (function promesa$core$race(promises){
return promesa.impl._STAR_default_promise_STAR_.race(cljs.core.into_array.call(null,cljs.core.map.call(null,promesa.protocols._promise,promises)));
});
/**
 * Given an array of promises, return a promise that is fulfilled when
 *   first one item in the array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(var_args){
var G__18950 = arguments.length;
switch (G__18950) {
case 1:
return promesa.core.any.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.any.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.any.cljs$core$IFn$_invoke$arity$1 = (function (promises){
return promesa.core.any.call(null,promises,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826));
}));

(promesa.core.any.cljs$core$IFn$_invoke$arity$2 = (function (promises,default$){
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resolved","resolved",968763567),false,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.count.call(null,promises),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.PersistentVector.EMPTY], null));
return promesa.core.create.call(null,(function (resolve,reject){
var seq__18951 = cljs.core.seq.call(null,promises);
var chunk__18952 = null;
var count__18953 = (0);
var i__18954 = (0);
while(true){
if((i__18954 < count__18953)){
var p = cljs.core._nth.call(null,chunk__18952,i__18954);
promesa.core.catch$.call(null,promesa.core.then.call(null,promesa.protocols._promise.call(null,p),((function (seq__18951,chunk__18952,count__18953,i__18954,p,state){
return (function (v){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved","resolved",968763567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
cljs.core.swap_BANG_.call(null,state,((function (seq__18951,chunk__18952,count__18953,i__18954,p,state){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567),true),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec);
});})(seq__18951,chunk__18952,count__18953,i__18954,p,state))
);

return resolve.call(null,v);
}
});})(seq__18951,chunk__18952,count__18953,i__18954,p,state))
),((function (seq__18951,chunk__18952,count__18953,i__18954,p,state){
return (function (e){
cljs.core.swap_BANG_.call(null,state,((function (seq__18951,chunk__18952,count__18953,i__18954,p,state){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,e);
});})(seq__18951,chunk__18952,count__18953,i__18954,p,state))
);

var map__18957 = cljs.core.deref.call(null,state);
var map__18957__$1 = cljs.core.__destructure_map.call(null,map__18957);
var resolved = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567));
var counter = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var rejections = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"rejections","rejections",-1620899911));
if(((cljs.core.not.call(null,resolved)) && (cljs.core._EQ_.call(null,counter,(0))))){
if(cljs.core._EQ_.call(null,default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return reject.call(null,cljs.core.ex_info.call(null,"No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),rejections], null)));
} else {
return resolve.call(null,default$);
}
} else {
return null;
}
});})(seq__18951,chunk__18952,count__18953,i__18954,p,state))
);


var G__18960 = seq__18951;
var G__18961 = chunk__18952;
var G__18962 = count__18953;
var G__18963 = (i__18954 + (1));
seq__18951 = G__18960;
chunk__18952 = G__18961;
count__18953 = G__18962;
i__18954 = G__18963;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__18951);
if(temp__5823__auto__){
var seq__18951__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18951__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__18951__$1);
var G__18964 = cljs.core.chunk_rest.call(null,seq__18951__$1);
var G__18965 = c__5525__auto__;
var G__18966 = cljs.core.count.call(null,c__5525__auto__);
var G__18967 = (0);
seq__18951 = G__18964;
chunk__18952 = G__18965;
count__18953 = G__18966;
i__18954 = G__18967;
continue;
} else {
var p = cljs.core.first.call(null,seq__18951__$1);
promesa.core.catch$.call(null,promesa.core.then.call(null,promesa.protocols._promise.call(null,p),((function (seq__18951,chunk__18952,count__18953,i__18954,p,seq__18951__$1,temp__5823__auto__,state){
return (function (v){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved","resolved",968763567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
cljs.core.swap_BANG_.call(null,state,((function (seq__18951,chunk__18952,count__18953,i__18954,p,seq__18951__$1,temp__5823__auto__,state){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567),true),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec);
});})(seq__18951,chunk__18952,count__18953,i__18954,p,seq__18951__$1,temp__5823__auto__,state))
);

return resolve.call(null,v);
}
});})(seq__18951,chunk__18952,count__18953,i__18954,p,seq__18951__$1,temp__5823__auto__,state))
),((function (seq__18951,chunk__18952,count__18953,i__18954,p,seq__18951__$1,temp__5823__auto__,state){
return (function (e){
cljs.core.swap_BANG_.call(null,state,((function (seq__18951,chunk__18952,count__18953,i__18954,p,seq__18951__$1,temp__5823__auto__,state){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,e);
});})(seq__18951,chunk__18952,count__18953,i__18954,p,seq__18951__$1,temp__5823__auto__,state))
);

var map__18958 = cljs.core.deref.call(null,state);
var map__18958__$1 = cljs.core.__destructure_map.call(null,map__18958);
var resolved = cljs.core.get.call(null,map__18958__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567));
var counter = cljs.core.get.call(null,map__18958__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var rejections = cljs.core.get.call(null,map__18958__$1,new cljs.core.Keyword(null,"rejections","rejections",-1620899911));
if(((cljs.core.not.call(null,resolved)) && (cljs.core._EQ_.call(null,counter,(0))))){
if(cljs.core._EQ_.call(null,default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return reject.call(null,cljs.core.ex_info.call(null,"No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),rejections], null)));
} else {
return resolve.call(null,default$);
}
} else {
return null;
}
});})(seq__18951,chunk__18952,count__18953,i__18954,p,seq__18951__$1,temp__5823__auto__,state))
);


var G__18968 = cljs.core.next.call(null,seq__18951__$1);
var G__18969 = null;
var G__18970 = (0);
var G__18971 = (0);
seq__18951 = G__18968;
chunk__18952 = G__18969;
count__18953 = G__18970;
i__18954 = G__18971;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));

(promesa.core.any.cljs$lang$maxFixedArity = 2);

/**
 * A promise aware run! function.
 */
promesa.core.run_BANG_ = (function promesa$core$run_BANG_(var_args){
var G__18975 = arguments.length;
switch (G__18975) {
case 2:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return promesa.core.run_BANG_.call(null,f,coll,promesa.exec.current_thread_executor);
}));

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return cljs.core.reduce.call(null,(function (p1__18972_SHARP_,p2__18973_SHARP_){
return promesa.core.then.call(null,p1__18972_SHARP_,(function (_){
return f.call(null,p2__18973_SHARP_);
}));
}),promesa.core.promise.call(null,null,executor),coll);
}));

(promesa.core.run_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.protocols._cancel_BANG_.call(null,p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.protocols._cancelled_QMARK_.call(null,v);
});
/**
 * Resolve a completable promise with a value.
 */
promesa.core.resolve_BANG_ = (function promesa$core$resolve_BANG_(var_args){
var G__18978 = arguments.length;
switch (G__18978) {
case 1:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.protocols._resolve_BANG_.call(null,o,null);
}));

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,v){
return promesa.protocols._resolve_BANG_.call(null,o,v);
}));

(promesa.core.resolve_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Reject a completable promise with an error.
 */
promesa.core.reject_BANG_ = (function promesa$core$reject_BANG_(p,e){
return promesa.protocols._reject_BANG_.call(null,p,e);
});
/**
 * Given a function that accepts a callback as the last argument return other
 *   function that returns a promise. Callback is expected to take single
 *   parameter (result of a computation).
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__18981__delegate = function (args){
return promesa.core.create.call(null,(function (resolve,reject){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
try{return cljs.core.apply.call(null,callable,args__$1);
}catch (e18980){if((e18980 instanceof Error)){
var e = e18980;
return reject.call(null,e);
} else {
throw e18980;

}
}}));
};
var G__18981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18982__i = 0, G__18982__a = new Array(arguments.length -  0);
while (G__18982__i < G__18982__a.length) {G__18982__a[G__18982__i] = arguments[G__18982__i + 0]; ++G__18982__i;}
  args = new cljs.core.IndexedSeq(G__18982__a,0,null);
} 
return G__18981__delegate.call(this,args);};
G__18981.cljs$lang$maxFixedArity = 0;
G__18981.cljs$lang$applyTo = (function (arglist__18983){
var args = cljs.core.seq(arglist__18983);
return G__18981__delegate(args);
});
G__18981.cljs$core$IFn$_invoke$arity$variadic = G__18981__delegate;
return G__18981;
})()
;
});
/**
 * @constructor
 */
promesa.core.TimeoutException = (function promesa$core$TimeoutException(message){
var it = this;
Error.call(it,message,cljs.core.PersistentArrayMap.EMPTY,null);

return it;
});
goog.inherits(promesa.core.TimeoutException,Error);
/**
 * Returns a cancellable promise that will be fulfilled with this
 *   promise's fulfillment value or rejection reason.  However, if this
 *   promise is not fulfilled or rejected within `ms` milliseconds, the
 *   returned promise is cancelled with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var G__18985 = arguments.length;
switch (G__18985) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return promesa.core.timeout.call(null,p,t,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826),promesa.exec.default_scheduler);
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return promesa.core.timeout.call(null,p,t,v,promesa.exec.default_scheduler);
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$4 = (function (p,t,v,scheduler){
var timeout = promesa.core.deferred.call(null);
var tid = promesa.exec.schedule_BANG_.call(null,scheduler,t,(function (){
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return promesa.core.reject_BANG_.call(null,timeout,(new promesa.core.TimeoutException("Operation timed out.")));
} else {
return promesa.core.resolve_BANG_.call(null,timeout,v);
}
}));
return promesa.core.race.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.finally$.call(null,p,(function (_,___$1){
return promesa.protocols._cancel_BANG_.call(null,tid);
})),timeout], null));
}));

(promesa.core.timeout.cljs$lang$maxFixedArity = 4);

/**
 * Given a timeout in miliseconds and optional value, returns a promise
 *   that will fulfilled with provided value (or nil) after the time is
 *   reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var G__18988 = arguments.length;
switch (G__18988) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.call(null,t,null,promesa.exec.default_scheduler);
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.delay.call(null,t,v,promesa.exec.default_scheduler);
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$3 = (function (t,v,scheduler){
var d = promesa.core.deferred.call(null);
promesa.exec.schedule_BANG_.call(null,scheduler,t,(function (){
return promesa.core.resolve_BANG_.call(null,d,v);
}));

return d;
}));

(promesa.core.delay.cljs$lang$maxFixedArity = 3);

var ret__5781__auto___18998 = (function (){
/**
 * Execute potentially side effectful code and return a promise resolved
 *   to the last expression. Always awaiting the result of each
 *   expression.
 */
promesa.core.do_BANG_ = (function promesa$core$do_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18999 = arguments.length;
var i__5727__auto___19000 = (0);
while(true){
if((i__5727__auto___19000 < len__5726__auto___18999)){
args__5732__auto__.push((arguments[i__5727__auto___19000]));

var G__19001 = (i__5727__auto___19000 + (1));
i__5727__auto___19000 = G__19001;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return promesa.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(promesa.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___18991__auto__","___18991__auto__",599909438,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,(function (){var pred__18995 = cljs.core._EQ_;
var expr__18996 = cljs.core.count.call(null,exprs);
if(cljs.core.truth_(pred__18995.call(null,(0),expr__18996))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
if(cljs.core.truth_(pred__18995.call(null,(1),expr__18996))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,exprs),null,(1),null)))));
} else {
return cljs.core.reduce.call(null,(function (acc,e){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___18990__auto__","___18990__auto__",1141634257,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last.call(null,exprs),null,(1),null))))),cljs.core.reverse.call(null,cljs.core.butlast.call(null,exprs)));
}
}
})(),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.do_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do_BANG_.cljs$lang$applyTo = (function (seq18992){
var G__18993 = cljs.core.first.call(null,seq18992);
var seq18992__$1 = cljs.core.next.call(null,seq18992);
var G__18994 = cljs.core.first.call(null,seq18992__$1);
var seq18992__$2 = cljs.core.next.call(null,seq18992__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18993,G__18994,seq18992__$2);
}));

return null;
})()
;
(promesa.core.do_BANG_.cljs$lang$macro = true);

var ret__5781__auto___19005 = (function (){
/**
 * An alias for do!
 */
promesa.core.do$ = (function promesa$core$do(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19006 = arguments.length;
var i__5727__auto___19007 = (0);
while(true){
if((i__5727__auto___19007 < len__5726__auto___19006)){
args__5732__auto__.push((arguments[i__5727__auto___19007]));

var G__19008 = (i__5727__auto___19007 + (1));
i__5727__auto___19007 = G__19008;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return promesa.core.do$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(promesa.core.do$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),exprs)));
}));

(promesa.core.do$.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do$.cljs$lang$applyTo = (function (seq19002){
var G__19003 = cljs.core.first.call(null,seq19002);
var seq19002__$1 = cljs.core.next.call(null,seq19002);
var G__19004 = cljs.core.first.call(null,seq19002__$1);
var seq19002__$2 = cljs.core.next.call(null,seq19002__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19003,G__19004,seq19002__$2);
}));

return null;
})()
;
(promesa.core.do$.cljs$lang$macro = true);

var ret__5781__auto___19018 = (function (){
/**
 * A `let` alternative that always returns promise and waits for all the
 *   promises on the bindings.
 */
promesa.core.let$ = (function promesa$core$let(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19019 = arguments.length;
var i__5727__auto___19020 = (0);
while(true){
if((i__5727__auto___19020 < len__5726__auto___19019)){
args__5732__auto__.push((arguments[i__5727__auto___19020]));

var G__19021 = (i__5727__auto___19020 + (1));
i__5727__auto___19020 = G__19021;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return promesa.core.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(promesa.core.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___19009__auto__","___19009__auto__",1497632972,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.reduce.call(null,(function (acc,p__19014){
var vec__19015 = p__19014;
var l = cljs.core.nth.call(null,vec__19015,(0),null);
var r = cljs.core.nth.call(null,vec__19015,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,l,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),bindings))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.let$.cljs$lang$applyTo = (function (seq19010){
var G__19011 = cljs.core.first.call(null,seq19010);
var seq19010__$1 = cljs.core.next.call(null,seq19010);
var G__19012 = cljs.core.first.call(null,seq19010__$1);
var seq19010__$2 = cljs.core.next.call(null,seq19010__$1);
var G__19013 = cljs.core.first.call(null,seq19010__$2);
var seq19010__$3 = cljs.core.next.call(null,seq19010__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19011,G__19012,G__19013,seq19010__$3);
}));

return null;
})()
;
(promesa.core.let$.cljs$lang$macro = true);

var ret__5781__auto___19027 = (function (){
/**
 * A parallel let; executes all the bindings in parallel and when all
 *   bindings are resolved, executes the body.
 */
promesa.core.plet = (function promesa$core$plet(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19028 = arguments.length;
var i__5727__auto___19029 = (0);
while(true){
if((i__5727__auto___19029 < len__5726__auto___19028)){
args__5732__auto__.push((arguments[i__5727__auto___19029]));

var G__19030 = (i__5727__auto___19029 + (1));
i__5727__auto___19029 = G__19030;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return promesa.core.plet.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(promesa.core.plet.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___19022__auto__","___19022__auto__",920022430,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,(function (){var bindings__$1 = cljs.core.partition.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,cljs.core.second,bindings__$1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","then","promesa.core/then",487138967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapv.call(null,cljs.core.first,bindings__$1))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
})(),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.plet.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.plet.cljs$lang$applyTo = (function (seq19023){
var G__19024 = cljs.core.first.call(null,seq19023);
var seq19023__$1 = cljs.core.next.call(null,seq19023);
var G__19025 = cljs.core.first.call(null,seq19023__$1);
var seq19023__$2 = cljs.core.next.call(null,seq19023__$1);
var G__19026 = cljs.core.first.call(null,seq19023__$2);
var seq19023__$3 = cljs.core.next.call(null,seq19023__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19024,G__19025,G__19026,seq19023__$3);
}));

return null;
})()
;
(promesa.core.plet.cljs$lang$macro = true);

var ret__5781__auto___19035 = (function (){
/**
 * Analogous to `clojure.core/future` that returns a promise instance
 *   instead of the `Future`. Usefull for execute synchronous code in a
 *   separate thread (also works in cljs).
 */
promesa.core.future = (function promesa$core$future(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19036 = arguments.length;
var i__5727__auto___19037 = (0);
while(true){
if((i__5727__auto___19037 < len__5726__auto___19036)){
args__5732__auto__.push((arguments[i__5727__auto___19037]));

var G__19038 = (i__5727__auto___19037 + (1));
i__5727__auto___19037 = G__19038;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return promesa.core.future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(promesa.core.future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","submit!","promesa.exec/submit!",1325930091,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__19031__auto__","f__19031__auto__",-1191369214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__19031__auto__","f__19031__auto__",-1191369214,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.future.cljs$lang$applyTo = (function (seq19032){
var G__19033 = cljs.core.first.call(null,seq19032);
var seq19032__$1 = cljs.core.next.call(null,seq19032);
var G__19034 = cljs.core.first.call(null,seq19032__$1);
var seq19032__$2 = cljs.core.next.call(null,seq19032__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19033,G__19034,seq19032__$2);
}));

return null;
})()
;
(promesa.core.future.cljs$lang$macro = true);

promesa.core._STAR_loop_run_fn_STAR_ = promesa.exec.run_BANG_;
var ret__5781__auto___19046 = (function (){
promesa.core.loop = (function promesa$core$loop(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19047 = arguments.length;
var i__5727__auto___19048 = (0);
while(true){
if((i__5727__auto___19048 < len__5726__auto___19047)){
args__5732__auto__.push((arguments[i__5727__auto___19048]));

var G__19049 = (i__5727__auto___19048 + (1));
i__5727__auto___19048 = G__19049;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return promesa.core.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(promesa.core.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindings__$1 = cljs.core.partition.call(null,(2),(2),bindings);
var names = cljs.core.mapv.call(null,cljs.core.first,bindings__$1);
var fvals = cljs.core.mapv.call(null,cljs.core.second,bindings__$1);
var tsym = cljs.core.gensym.call(null,"loop");
var dsym = cljs.core.gensym.call(null,"deferred");
var rsym = cljs.core.gensym.call(null,"run");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","*loop-run-fn*","promesa.core/*loop-run-fn*",448089407,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","deferred","promesa.core/deferred",-880308979,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"params__19039__auto__","params__19039__auto__",1014741525,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"params__19039__auto__","params__19039__auto__",1014741525,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","then","promesa.core/then",487138967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,names)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","handle","promesa.core/handle",-1644778541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"res__19040__auto__","res__19040__auto__",2007175790,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__19041__auto__","err__19041__auto__",-367567199,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__19041__auto__","err__19041__auto__",-367567199,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","reject!","promesa.core/reject!",-314773537,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__19041__auto__","err__19041__auto__",-367567199,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__19040__auto__","res__19040__auto__",2007175790,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__19040__auto__","res__19040__auto__",2007175790,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__19040__auto__","res__19040__auto__",2007175790,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","resolve!","promesa.core/resolve!",1603668640,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__19040__auto__","res__19040__auto__",2007175790,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,fvals,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)))));
}));

(promesa.core.loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.loop.cljs$lang$applyTo = (function (seq19042){
var G__19043 = cljs.core.first.call(null,seq19042);
var seq19042__$1 = cljs.core.next.call(null,seq19042);
var G__19044 = cljs.core.first.call(null,seq19042__$1);
var seq19042__$2 = cljs.core.next.call(null,seq19042__$1);
var G__19045 = cljs.core.first.call(null,seq19042__$2);
var seq19042__$3 = cljs.core.next.call(null,seq19042__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19043,G__19044,G__19045,seq19042__$3);
}));

return null;
})()
;
(promesa.core.loop.cljs$lang$macro = true);

var ret__5781__auto___19053 = (function (){
promesa.core.recur = (function promesa$core$recur(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19054 = arguments.length;
var i__5727__auto___19055 = (0);
while(true){
if((i__5727__auto___19055 < len__5726__auto___19054)){
args__5732__auto__.push((arguments[i__5727__auto___19055]));

var G__19056 = (i__5727__auto___19055 + (1));
i__5727__auto___19055 = G__19056;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return promesa.core.recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(promesa.core.recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,args)))),null,(1),null)))));
}));

(promesa.core.recur.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.recur.cljs$lang$applyTo = (function (seq19050){
var G__19051 = cljs.core.first.call(null,seq19050);
var seq19050__$1 = cljs.core.next.call(null,seq19050);
var G__19052 = cljs.core.first.call(null,seq19050__$1);
var seq19050__$2 = cljs.core.next.call(null,seq19050__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19051,G__19052,seq19050__$2);
}));

return null;
})()
;
(promesa.core.recur.cljs$lang$macro = true);

var ret__5781__auto___19065 = (function (){
/**
 * Like the clojure.core/->, but it will handle promises in values
 *   and make sure the next form gets the value realized instead of
 *   the promise. Example using to fetch data in the browser with CLJS:
 * 
 *   Example:
 * 
 *   (p/-> (js/fetch #js {...}) ; returns a promise
 *      .-body)
 * 
 *   The result of a thread is a promise that will resolve to the
 *   end of the thread chain.
 */
promesa.core.__GT_ = (function promesa$core$__GT_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19066 = arguments.length;
var i__5727__auto___19067 = (0);
while(true){
if((i__5727__auto___19067 < len__5726__auto___19066)){
args__5732__auto__.push((arguments[i__5727__auto___19067]));

var G__19068 = (i__5727__auto___19067 + (1));
i__5727__auto___19067 = G__19068;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return promesa.core.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(promesa.core.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var fns = cljs.core.mapv.call(null,(function (arg){
var vec__19062 = ((cljs.core.sequential_QMARK_.call(null,arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__19063 = cljs.core.seq.call(null,vec__19062);
var first__19064 = cljs.core.first.call(null,seq__19063);
var seq__19063__$1 = cljs.core.next.call(null,seq__19063);
var f = first__19064;
var args = seq__19063__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__19057__auto__","p__19057__auto__",-1514188831,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__19057__auto__","p__19057__auto__",-1514188831,null),null,(1),null)),args))),null,(1),null)))));
}),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),fns)));
}));

(promesa.core.__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.__GT_.cljs$lang$applyTo = (function (seq19058){
var G__19059 = cljs.core.first.call(null,seq19058);
var seq19058__$1 = cljs.core.next.call(null,seq19058);
var G__19060 = cljs.core.first.call(null,seq19058__$1);
var seq19058__$2 = cljs.core.next.call(null,seq19058__$1);
var G__19061 = cljs.core.first.call(null,seq19058__$2);
var seq19058__$3 = cljs.core.next.call(null,seq19058__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19059,G__19060,G__19061,seq19058__$3);
}));

return null;
})()
;
(promesa.core.__GT_.cljs$lang$macro = true);

var ret__5781__auto___19077 = (function (){
/**
 * Like the clojure.core/->>, but it will handle promises in values
 *   and make sure the next form gets the value realized instead of
 *   the promise. Example using to fetch data in the browser with CLJS:
 * 
 *   Example:
 * 
 *   (p/->> (js/fetch #js {...}) ; returns a promise
 *       .-body
 *       read-string
 *       (mapv inc)
 * 
 *   The result of a thread is a promise that will resolve to the
 *   end of the thread chain.
 */
promesa.core.__GT__GT_ = (function promesa$core$__GT__GT_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19078 = arguments.length;
var i__5727__auto___19079 = (0);
while(true){
if((i__5727__auto___19079 < len__5726__auto___19078)){
args__5732__auto__.push((arguments[i__5727__auto___19079]));

var G__19080 = (i__5727__auto___19079 + (1));
i__5727__auto___19079 = G__19080;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return promesa.core.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(promesa.core.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var fns = cljs.core.mapv.call(null,(function (arg){
var vec__19074 = ((cljs.core.sequential_QMARK_.call(null,arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__19075 = cljs.core.seq.call(null,vec__19074);
var first__19076 = cljs.core.first.call(null,seq__19075);
var seq__19075__$1 = cljs.core.next.call(null,seq__19075);
var f = first__19076;
var args = seq__19075__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__19069__auto__","p__19069__auto__",-500869089,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),args,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__19069__auto__","p__19069__auto__",-500869089,null),null,(1),null))))),null,(1),null)))));
}),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),fns)));
}));

(promesa.core.__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.__GT__GT_.cljs$lang$applyTo = (function (seq19070){
var G__19071 = cljs.core.first.call(null,seq19070);
var seq19070__$1 = cljs.core.next.call(null,seq19070);
var G__19072 = cljs.core.first.call(null,seq19070__$1);
var seq19070__$2 = cljs.core.next.call(null,seq19070__$1);
var G__19073 = cljs.core.first.call(null,seq19070__$2);
var seq19070__$3 = cljs.core.next.call(null,seq19070__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19071,G__19072,G__19073,seq19070__$3);
}));

return null;
})()
;
(promesa.core.__GT__GT_.cljs$lang$macro = true);

var ret__5781__auto___19086 = (function (){
/**
 * Like clojure.core/as->, but it will handle promises in values
 * and make sure the next form gets the value realized instead of
 * the promise.
 */
promesa.core.as__GT_ = (function promesa$core$as__GT_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19087 = arguments.length;
var i__5727__auto___19088 = (0);
while(true){
if((i__5727__auto___19088 < len__5726__auto___19087)){
args__5732__auto__.push((arguments[i__5727__auto___19088]));

var G__19089 = (i__5727__auto___19088 + (1));
i__5727__auto___19088 = G__19089;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return promesa.core.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(promesa.core.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","let","promesa.core/let",895780400,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms)),null,(1),null)))));
}));

(promesa.core.as__GT_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(promesa.core.as__GT_.cljs$lang$applyTo = (function (seq19081){
var G__19082 = cljs.core.first.call(null,seq19081);
var seq19081__$1 = cljs.core.next.call(null,seq19081);
var G__19083 = cljs.core.first.call(null,seq19081__$1);
var seq19081__$2 = cljs.core.next.call(null,seq19081__$1);
var G__19084 = cljs.core.first.call(null,seq19081__$2);
var seq19081__$3 = cljs.core.next.call(null,seq19081__$2);
var G__19085 = cljs.core.first.call(null,seq19081__$3);
var seq19081__$4 = cljs.core.next.call(null,seq19081__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19082,G__19083,G__19084,G__19085,seq19081__$4);
}));

return null;
})()
;
(promesa.core.as__GT_.cljs$lang$macro = true);

var ret__5781__auto___19105 = (function (){
/**
 * Like clojure.core/with-redefs, but it will handle promises in
 * body and wait until they resolve or reject before restoring the
 * bindings. Useful for mocking async APIs.
 */
promesa.core.with_redefs = (function promesa$core$with_redefs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19106 = arguments.length;
var i__5727__auto___19107 = (0);
while(true){
if((i__5727__auto___19107 < len__5726__auto___19106)){
args__5732__auto__.push((arguments[i__5727__auto___19107]));

var G__19108 = (i__5727__auto___19107 + (1));
i__5727__auto___19107 = G__19108;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return promesa.core.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(promesa.core.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var orig_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,(function (p1__19090_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19090_SHARP_),"-orig-val__"].join('');
}),cljs.core.name),names);
var temp_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,(function (p1__19091_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19091_SHARP_),"-temp-val__"].join('');
}),cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,orig_val_syms));
var bind_value = (cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))?(function (p__19097){
var vec__19098 = p__19097;
var k = cljs.core.nth.call(null,vec__19098,(0),null);
var v = cljs.core.nth.call(null,vec__19098,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
}):(function (p__19101){
var vec__19102 = p__19101;
var k = cljs.core.nth.call(null,vec__19102,(0),null);
var v = cljs.core.nth.call(null,vec__19102,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"alter-var-root","alter-var-root",-1749458519,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"constantly","constantly",-271143939,null),(new cljs.core.List(null,v,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,orig_val_syms,names),cljs.core.interleave.call(null,temp_val_syms,vals))))),null,(1),null)),cljs.core.map.call(null,bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","finally","promesa.core/finally",-527135850,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___19092__auto__","___19092__auto__",1297918843,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"___19092__auto__","___19092__auto__",1297918843,null),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,bind_value,resets)))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.with_redefs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.with_redefs.cljs$lang$applyTo = (function (seq19093){
var G__19094 = cljs.core.first.call(null,seq19093);
var seq19093__$1 = cljs.core.next.call(null,seq19093);
var G__19095 = cljs.core.first.call(null,seq19093__$1);
var seq19093__$2 = cljs.core.next.call(null,seq19093__$1);
var G__19096 = cljs.core.first.call(null,seq19093__$2);
var seq19093__$3 = cljs.core.next.call(null,seq19093__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19094,G__19095,G__19096,seq19093__$3);
}));

return null;
})()
;
(promesa.core.with_redefs.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map
