// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.placeholder');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.pathom3.path');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.placeholder","placeholder-prefixes","com.wsscode.pathom3.placeholder/placeholder-prefixes",-1875287531),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19214){
return cljs.core.set_QMARK_.call(null,G__19214);
})], null),null));
/**
 * Check if a given key is a placeholder.
 */
com.wsscode.pathom3.placeholder.placeholder_key_QMARK_ = (function com$wsscode$pathom3$placeholder$placeholder_key_QMARK_(p__19215,k){
var map__19216 = p__19215;
var map__19216__$1 = cljs.core.__destructure_map.call(null,map__19216);
var placeholder_prefixes = cljs.core.get.call(null,map__19216__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","placeholder-prefixes","com.wsscode.pathom3.path/placeholder-prefixes",77896209));
var placeholder_prefixes__$1 = (function (){var or__5002__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null);
}
})();
return (((k instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_.call(null,placeholder_prefixes__$1,cljs.core.namespace.call(null,k))));
});
/**
 * Find the closest parent key that's not a placeholder key.
 */
com.wsscode.pathom3.placeholder.find_closest_non_placeholder_parent_join_key = (function com$wsscode$pathom3$placeholder$find_closest_non_placeholder_parent_join_key(p__19218){
var map__19219 = p__19218;
var map__19219__$1 = cljs.core.__destructure_map.call(null,map__19219);
var env = map__19219__$1;
var path = cljs.core.get.call(null,map__19219__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
return cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19217_SHARP_){
return com.wsscode.pathom3.placeholder.placeholder_key_QMARK_.call(null,env,p1__19217_SHARP_);
}),cljs.core.drop.call(null,(1),cljs.core.rseq.call(null,(function (){var or__5002__auto__ = path;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()))));
});

//# sourceMappingURL=placeholder.js.map
