// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.cache');
goog.require('cljs.core');
goog.require('com.fulcrologic.guardrails.core');

/**
 * @interface
 */
com.wsscode.pathom3.cache.CacheStore = function(){};

var com$wsscode$pathom3$cache$CacheStore$_cache_lookup_or_miss$dyn_20775 = (function (this$,cache_key,f){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.pathom3.cache._cache_lookup_or_miss[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,cache_key,f);
} else {
var m__5349__auto__ = (com.wsscode.pathom3.cache._cache_lookup_or_miss["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,cache_key,f);
} else {
throw cljs.core.missing_protocol.call(null,"CacheStore.-cache-lookup-or-miss",this$);
}
}
});
/**
 * Implement the main functionality of a cache, this receives a cache key and a function
 *  that computes the value in case its uncached. When cache misses, the implementation
 *  should run f to compute the result and cache it. This method should always return a
 *  value (reading from cache or calling f). A cache store can also support async, in such
 *  cases it's ok for the cache store to return a promise.
 */
com.wsscode.pathom3.cache._cache_lookup_or_miss = (function com$wsscode$pathom3$cache$_cache_lookup_or_miss(this$,cache_key,f){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$pathom3$cache$CacheStore$_cache_lookup_or_miss$arity$3 == null)))))){
return this$.com$wsscode$pathom3$cache$CacheStore$_cache_lookup_or_miss$arity$3(this$,cache_key,f);
} else {
return com$wsscode$pathom3$cache$CacheStore$_cache_lookup_or_miss$dyn_20775.call(null,this$,cache_key,f);
}
});

var com$wsscode$pathom3$cache$CacheStore$_cache_find$dyn_20776 = (function (this$,cache_key){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.pathom3.cache._cache_find[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,cache_key);
} else {
var m__5349__auto__ = (com.wsscode.pathom3.cache._cache_find["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,cache_key);
} else {
throw cljs.core.missing_protocol.call(null,"CacheStore.-cache-find",this$);
}
}
});
/**
 * Implement a way to read a cache key from the cache. If there is a hit, you must
 *  return a map entry for the result, otherwise return nil. The map-entry can make
 *  the distinction between a miss (nil return) vs a value with a miss (a map-entry with
 *  a value of nil)
 */
com.wsscode.pathom3.cache._cache_find = (function com$wsscode$pathom3$cache$_cache_find(this$,cache_key){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$pathom3$cache$CacheStore$_cache_find$arity$2 == null)))))){
return this$.com$wsscode$pathom3$cache$CacheStore$_cache_find$arity$2(this$,cache_key);
} else {
return com$wsscode$pathom3$cache$CacheStore$_cache_find$dyn_20776.call(null,this$,cache_key);
}
});

(cljs.core.Atom.prototype.com$wsscode$pathom3$cache$CacheStore$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.com$wsscode$pathom3$cache$CacheStore$_cache_lookup_or_miss$arity$3 = (function (this$,cache_key,f){
var this$__$1 = this;
var cache = cljs.core.deref.call(null,this$__$1);
var temp__5821__auto__ = cljs.core.find.call(null,cache,cache_key);
if(cljs.core.truth_(temp__5821__auto__)){
var entry = temp__5821__auto__;
return cljs.core.val.call(null,entry);
} else {
var res = f.call(null);
cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.assoc,cache_key,res);

return res;
}
}));

(cljs.core.Atom.prototype.com$wsscode$pathom3$cache$CacheStore$_cache_find$arity$2 = (function (this$,cache_key){
var this$__$1 = this;
return cljs.core.find.call(null,cljs.core.deref.call(null,this$__$1),cache_key);
}));

(cljs.core.Volatile.prototype.com$wsscode$pathom3$cache$CacheStore$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Volatile.prototype.com$wsscode$pathom3$cache$CacheStore$_cache_lookup_or_miss$arity$3 = (function (this$,cache_key,f){
var this$__$1 = this;
var cache = cljs.core.deref.call(null,this$__$1);
var temp__5821__auto__ = cljs.core.find.call(null,cache,cache_key);
if(cljs.core.truth_(temp__5821__auto__)){
var entry = temp__5821__auto__;
return cljs.core.val.call(null,entry);
} else {
var res = f.call(null);
cljs.core._vreset_BANG_.call(null,this$__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,this$__$1),cache_key,res));

return res;
}
}));

(cljs.core.Volatile.prototype.com$wsscode$pathom3$cache$CacheStore$_cache_find$arity$2 = (function (this$,cache_key){
var this$__$1 = this;
return cljs.core.find.call(null,cljs.core.deref.call(null,this$__$1),cache_key);
}));
com.wsscode.pathom3.cache.cache_store_QMARK_ = (function com$wsscode$pathom3$cache$cache_store_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.com$wsscode$pathom3$cache$CacheStore$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.wsscode.pathom3.cache.CacheStore,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.wsscode.pathom3.cache.CacheStore,x);
}
});
/**
 * Try to read some value from a cache, otherwise run and cache it.
 * 
 *   cache-container is a keyword for the cache container name, consider that the environment
 *   has multiple cache atoms. If the cache-container key is not present in the env, the
 *   cache will be ignored and will always run f.
 * 
 *   cache-key is how you decide, in that cache container, what key should be used for
 *   this cache try.
 * 
 *   f needs to be a function of zero arguments.
 * 
 *   Example:
 * 
 *    (cached ::my-cache {::my-cache (atom {})} [3 :foo]
 *      (fn [] (run-expensive-operation)))
 */
com.wsscode.pathom3.cache.cached = (function com$wsscode$pathom3$cache$cached(cache_container,env,cache_key,f){
var temp__5821__auto__ = cljs.core.get.call(null,env,cache_container);
if(cljs.core.truth_(temp__5821__auto__)){
var cache_STAR_ = temp__5821__auto__;
return com.wsscode.pathom3.cache._cache_lookup_or_miss.call(null,cache_STAR_,cache_key,f);
} else {
return f.call(null);
}
});
/**
 * Read from cache, without trying to set.
 */
com.wsscode.pathom3.cache.cache_find = (function com$wsscode$pathom3$cache$cache_find(cache,cache_key){
return com.wsscode.pathom3.cache._cache_find.call(null,cache,cache_key);
});

//# sourceMappingURL=cache.js.map
