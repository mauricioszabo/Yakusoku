// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.format.eql');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.misc.refs');
goog.require('com.wsscode.pathom3.attribute');
goog.require('com.wsscode.pathom3.plugin');
goog.require('edn_query_language.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","prop->ast","com.wsscode.pathom3.format.eql/prop->ast",-87545218),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19519){
return cljs.core.map_QMARK_.call(null,G__19519);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","map-select-include","com.wsscode.pathom3.format.eql/map-select-include",-1328680889),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","union-entry-key","com.wsscode.pathom3.format.eql/union-entry-key",1995121629),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
/**
 * Returns a vector with the properties at the root of the query.
 * 
 *   For example:
 * 
 *  (query-root-properties [{:a [:b]} :c])
 *  => [:a :c]
 * 
 *   In case the query is a union query, it will merge the roots of then will merge:
 * 
 *  (query-root-properties {:foo [{:a [:b]} :c]
 *                          :bar [:a :d]})
 *  => [:a :c :d]
 */
com.wsscode.pathom3.format.eql.query_root_properties = (function com$wsscode$pathom3$format$eql$query_root_properties(query){
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,com.wsscode.pathom3.format.eql.query_root_properties,cljs.core.vals.call(null,query))));
} else {
return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast.call(null,query)));
}
});
com.wsscode.pathom3.format.eql.prop = (function com$wsscode$pathom3$format$eql$prop(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
/**
 * Given an AST point, check if the children is a union query type.
 */
com.wsscode.pathom3.format.eql.union_children_QMARK_ = (function com$wsscode$pathom3$format$eql$union_children_QMARK_(ast){
return com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__19520 = ast;
var G__19520__$1 = (((G__19520 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__19520));
var G__19520__$2 = (((G__19520__$1 == null))?null:cljs.core.first.call(null,G__19520__$1));
if((G__19520__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__19520__$2);
}
})());
});
/**
 * Get union children when its an union, otherwise return nil.
 */
com.wsscode.pathom3.format.eql.union_children = (function com$wsscode$pathom3$format$eql$union_children(ast){
if(com.wsscode.pathom3.format.eql.union_children_QMARK_.call(null,ast)){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
} else {
return null;
}
});
/**
 * Convert a union entry to a root.
 */
com.wsscode.pathom3.format.eql.union__GT_root = (function com$wsscode$pathom3$format$eql$union__GT_root(ast){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"query","query",-1288509510));
});
com.wsscode.pathom3.format.eql.union_key_on_data_QMARK_ = (function com$wsscode$pathom3$format$eql$union_key_on_data_QMARK_(p__19521,m){
var map__19522 = p__19521;
var map__19522__$1 = cljs.core.__destructure_map.call(null,map__19522);
var union_key = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
return cljs.core.contains_QMARK_.call(null,m,union_key);
});
/**
 * Check if ast children is a union type. If so, makes a decision to choose a path and
 *   return that AST.
 */
com.wsscode.pathom3.format.eql.pick_union_entry = (function com$wsscode$pathom3$format$eql$pick_union_entry(ast,m){
if(com.wsscode.pathom3.format.eql.union_children_QMARK_.call(null,ast)){
var meta_path = new cljs.core.Keyword("com.wsscode.pathom3.format.eql","union-entry-key","com.wsscode.pathom3.format.eql/union-entry-key",1995121629).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m));
return cljs.core.some.call(null,(function (p__19523){
var map__19524 = p__19523;
var map__19524__$1 = cljs.core.__destructure_map.call(null,map__19524);
var ast_SINGLEQUOTE_ = map__19524__$1;
var union_key = cljs.core.get.call(null,map__19524__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
if(((cljs.core._EQ_.call(null,union_key,meta_path)) || (com.wsscode.pathom3.format.eql.union_key_on_data_QMARK_.call(null,ast_SINGLEQUOTE_,m)))){
return com.wsscode.pathom3.format.eql.union__GT_root.call(null,ast_SINGLEQUOTE_);
} else {
return null;
}
}),com.wsscode.pathom3.format.eql.union_children.call(null,ast));
} else {
return ast;
}
});
/**
 * Check if AST entry is a union, if so it computes a new AST entry by combining
 *   all union paths as a single entry.
 */
com.wsscode.pathom3.format.eql.maybe_merge_union_ast = (function com$wsscode$pathom3$format$eql$maybe_merge_union_ast(ast){
if(com.wsscode.pathom3.format.eql.union_children_QMARK_.call(null,ast)){
var merged_children = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"children","children",-940561982)),(function (){var G__19525 = ast;
var G__19525__$1 = (((G__19525 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__19525));
var G__19525__$2 = (((G__19525__$1 == null))?null:cljs.core.first.call(null,G__19525__$1));
if((G__19525__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__19525__$2);
}
})());
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),merged_children,new cljs.core.Keyword(null,"query","query",-1288509510),edn_query_language.core.ast__GT_query.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),merged_children], null)));
} else {
return ast;
}
});
/**
 * When key is an ident, return the first part of it. Otherwise returns nil.
 */
com.wsscode.pathom3.format.eql.ident_key = (function com$wsscode$pathom3$format$eql$ident_key(key){
if(cljs.core.vector_QMARK_.call(null,key)){
return cljs.core.first.call(null,key);
} else {
return null;
}
});
com.wsscode.pathom3.format.eql.index_ast = (function com$wsscode$pathom3$format$eql$index_ast(p__19527){
var map__19528 = p__19527;
var map__19528__$1 = cljs.core.__destructure_map.call(null,map__19528);
var children = cljs.core.get.call(null,map__19528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.dissoc.call(null,com.wsscode.misc.coll.index_by.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (p1__19526_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__19526_SHARP_),new cljs.core.Keyword(null,"call","call",-519999866));
})),children)),new cljs.core.Symbol(null,"*","*",345799209,null));
});
com.wsscode.pathom3.format.eql.recursive_query_QMARK_ = (function com$wsscode$pathom3$format$eql$recursive_query_QMARK_(query){
return ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) || (cljs.core.int_QMARK_.call(null,query)));
});
com.wsscode.pathom3.format.eql.map_select_entry = (function com$wsscode$pathom3$format$eql$map_select_entry(env,source,p__19531){
var map__19532 = p__19531;
var map__19532__$1 = cljs.core.__destructure_map.call(null,map__19532);
var ast = map__19532__$1;
var key = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var type = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5821__auto__ = cljs.core.find.call(null,source,key);
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
var val = cljs.core.val.call(null,x);
var ast__$1 = ((com.wsscode.pathom3.format.eql.recursive_query_QMARK_.call(null,query))?new cljs.core.Keyword(null,"parent-ast","parent-ast",-1730341901).cljs$core$IFn$_invoke$arity$1(ast):ast);
var ast__$2 = cljs.core.update.call(null,ast__$1,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__19529_SHARP_){
var or__5002__auto__ = p1__19529_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
}
}));
return com.wsscode.misc.coll.make_map_entry.call(null,key,(cljs.core.truth_((function (){var and__5000__auto__ = com.wsscode.misc.refs.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"call","call",-519999866));
if(and__5000__auto__){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468).cljs$core$IFn$_invoke$arity$1(val);
} else {
return and__5000__auto__;
}
})())?val:((cljs.core.map_QMARK_.call(null,val))?(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,val));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545).cljs$core$IFn$_invoke$arity$1(params);
}
})())?cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,val)),cljs.core.map.call(null,(function (entry){
return com.wsscode.misc.coll.make_map_entry.call(null,cljs.core.key.call(null,entry),com.wsscode.pathom3.format.eql.map_select_ast.call(null,env,cljs.core.val.call(null,entry),ast__$2));
})),val):com.wsscode.pathom3.format.eql.map_select_ast.call(null,env,val,ast__$2)):((com.wsscode.misc.coll.collection_QMARK_.call(null,val))?cljs.core.into.call(null,cljs.core.empty.call(null,val),cljs.core.map.call(null,(function (p1__19530_SHARP_){
return com.wsscode.pathom3.format.eql.map_select_ast.call(null,env,p1__19530_SHARP_,ast__$2);
})),(function (){var G__19533 = val;
if(com.wsscode.misc.coll.coll_append_at_head_QMARK_.call(null,val)){
return cljs.core.reverse.call(null,G__19533);
} else {
return G__19533;
}
})()):val
))));
} else {
return null;
}
});
/**
 * Check if some of the AST children is the wildcard value, which is *.
 */
com.wsscode.pathom3.format.eql.ast_contains_wildcard_QMARK_ = (function com$wsscode$pathom3$format$eql$ast_contains_wildcard_QMARK_(p__19534){
var map__19535 = p__19534;
var map__19535__$1 = cljs.core.__destructure_map.call(null,map__19535);
var children = cljs.core.get.call(null,map__19535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),children)));
});
com.wsscode.pathom3.format.eql.extend_ast_with_wildcard = (function com$wsscode$pathom3$format$eql$extend_ast_with_wildcard(source,children){
var children_contains_QMARK_ = (function (k){
return cljs.core.boolean$.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.Keyword(null,"key","key",-1516042587)),children)));
});
return cljs.core.reduce.call(null,(function (children__$1,k){
if(children_contains_QMARK_.call(null,k)){
return children__$1;
} else {
return cljs.core.conj.call(null,children__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k], null));
}
}),children,cljs.core.keys.call(null,source));
});
com.wsscode.pathom3.format.eql.include_extra_attrs = (function com$wsscode$pathom3$format$eql$include_extra_attrs(children,attrs){
return cljs.core.into.call(null,children,cljs.core.map.call(null,(function (k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k], null);
})),attrs);
});
/**
 * Check if a value is a map with a run stats, or a sequence containing items
 *   with run stats
 */
com.wsscode.pathom3.format.eql.stats_value_QMARK_ = (function com$wsscode$pathom3$format$eql$stats_value_QMARK_(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,x),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061));
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,cljs.core.first.call(null,x)),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061));
} else {
return false;

}
}
});
/**
 * Filter X to keep only values that are relevant for running stats.
 */
com.wsscode.pathom3.format.eql.select_stats_data = (function com$wsscode$pathom3$format$eql$select_stats_data(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,x)),cljs.core.comp.call(null,cljs.core.filter.call(null,(function (e){
return com.wsscode.pathom3.format.eql.stats_value_QMARK_.call(null,cljs.core.val.call(null,e));
})),cljs.core.map.call(null,(function (e){
return com.wsscode.misc.coll.make_map_entry.call(null,cljs.core.key.call(null,e),com.wsscode.pathom3.format.eql.select_stats_data.call(null,cljs.core.val.call(null,e)));
}))),x);
} else {
if(com.wsscode.misc.coll.collection_QMARK_.call(null,x)){
var G__19536 = cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,com.wsscode.pathom3.format.eql.select_stats_data),x);
if(com.wsscode.misc.coll.coll_append_at_head_QMARK_.call(null,x)){
return cljs.core.reverse.call(null,G__19536);
} else {
return G__19536;
}
} else {
return null;
}
}
});
/**
 * Same as map-select, but using AST as source.
 */
com.wsscode.pathom3.format.eql.map_select_ast = (function com$wsscode$pathom3$format$eql$map_select_ast(p__19538,source,ast){
var map__19539 = p__19538;
var map__19539__$1 = cljs.core.__destructure_map.call(null,map__19539);
var env = map__19539__$1;
var map_select_include = cljs.core.get.call(null,map__19539__$1,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","map-select-include","com.wsscode.pathom3.format.eql/map-select-include",-1328680889));
if(com.wsscode.misc.coll.native_map_QMARK_.call(null,source)){
var start = cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,source));
var selected = cljs.core.into.call(null,start,cljs.core.keep.call(null,(function (p1__19537_SHARP_){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","wrap-map-select-entry","com.wsscode.pathom3.format.eql/wrap-map-select-entry",901874620),com.wsscode.pathom3.format.eql.map_select_entry,env,source,cljs.core.assoc.call(null,p1__19537_SHARP_,new cljs.core.Keyword(null,"parent-ast","parent-ast",-1730341901),ast));
})),(function (){var G__19540 = (function (){var G__19541 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.format.eql.pick_union_entry.call(null,ast,source));
if(cljs.core.truth_(map_select_include)){
return com.wsscode.pathom3.format.eql.include_extra_attrs.call(null,G__19541,map_select_include);
} else {
return G__19541;
}
})();
if(com.wsscode.pathom3.format.eql.ast_contains_wildcard_QMARK_.call(null,ast)){
return com.wsscode.pathom3.format.eql.extend_ast_with_wildcard.call(null,source,G__19540);
} else {
return G__19540;
}
})());
if(com.wsscode.pathom3.format.eql.stats_value_QMARK_.call(null,source)){
var transient_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (entry){
return (((!(cljs.core.contains_QMARK_.call(null,selected,cljs.core.key.call(null,entry))))) && (com.wsscode.pathom3.format.eql.stats_value_QMARK_.call(null,cljs.core.val.call(null,entry))));
})),cljs.core.map.call(null,(function (entry){
return com.wsscode.misc.coll.make_map_entry.call(null,cljs.core.key.call(null,entry),com.wsscode.pathom3.format.eql.select_stats_data.call(null,cljs.core.val.call(null,entry)));
}))),source);
return cljs.core.vary_meta.call(null,selected,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","transient-stats","com.wsscode.pathom3.connect.runner/transient-stats",697181212)], null),transient_attrs);
} else {
return selected;
}
} else {
return source;
}
});
/**
 * Starting from a map, do a EQL selection on that map. Think of this function as
 *   a power up version of select-keys.
 * 
 *   Example:
 *   (p/map-select {:foo "bar" :deep {:a 1 :b 2}} [{:deep [:a]}])
 *   => {:deep {:a 1}}
 */
com.wsscode.pathom3.format.eql.map_select = (function com$wsscode$pathom3$format$eql$map_select(env,source,tx){
return com.wsscode.pathom3.format.eql.map_select_ast.call(null,env,source,edn_query_language.core.query__GT_ast.call(null,tx));
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom3.format.eql.data__GT_query = (function com$wsscode$pathom3$format$eql$data__GT_query(data){
if(cljs.core.map_QMARK_.call(null,data)){
return cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.pr_str,(function (p1__19542_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__19542_SHARP_)){
return cljs.core.ffirst.call(null,p1__19542_SHARP_);
} else {
return p1__19542_SHARP_;
}
})),cljs.core.reduce_kv.call(null,(function (out,k,v){
if((((k instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_.call(null,k)))){
return cljs.core.conj.call(null,out,((cljs.core.map_QMARK_.call(null,v))?(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){var shape = cljs.core.reduce_kv.call(null,(function (q,_k,v__$1){
return edn_query_language.core.merge_queries.call(null,q,com.wsscode.pathom3.format.eql.data__GT_query.call(null,v__$1));
}),cljs.core.PersistentVector.EMPTY,v);
if(cljs.core.seq.call(null,shape)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,shape]);
} else {
return k;
}
})():(function (){var q = com.wsscode.pathom3.format.eql.data__GT_query.call(null,v);
if(cljs.core.seq.call(null,q)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,q]);
} else {
return k;
}
})()):((cljs.core.sequential_QMARK_.call(null,v))?(function (){var shape = cljs.core.reduce.call(null,(function (q,x){
return edn_query_language.core.merge_queries.call(null,q,com.wsscode.pathom3.format.eql.data__GT_query.call(null,x));
}),cljs.core.PersistentVector.EMPTY,v);
if(cljs.core.seq.call(null,shape)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,shape]);
} else {
return k;
}
})():k
)));
} else {
return out;
}
}),cljs.core.PersistentVector.EMPTY,data)));
} else {
return null;
}
});
com.wsscode.pathom3.format.eql.seq_data__GT_query = (function com$wsscode$pathom3$format$eql$seq_data__GT_query(coll){
return cljs.core.val.call(null,cljs.core.ffirst.call(null,com.wsscode.pathom3.format.eql.data__GT_query.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.format.eql","temp","com.wsscode.pathom3.format.eql/temp",-1930916158),coll], null))));
});
com.wsscode.pathom3.format.eql.map_children__GT_children = (function com$wsscode$pathom3$format$eql$map_children__GT_children(map_children){
return cljs.core.reduce_kv.call(null,(function (children,_,ast){
return cljs.core.conj.call(null,children,(function (){var G__19543 = ast;
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.update.call(null,G__19543,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.format.eql.map_children__GT_children);
} else {
return G__19543;
}
})());
}),cljs.core.PersistentVector.EMPTY,map_children);
});
com.wsscode.pathom3.format.eql.merge_ast_children = (function com$wsscode$pathom3$format$eql$merge_ast_children(ast1,ast2){
var idx = com.wsscode.misc.coll.index_by.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast1));
var idx_SINGLEQUOTE_ = cljs.core.reduce.call(null,(function (idx__$1,p__19544){
var map__19545 = p__19544;
var map__19545__$1 = cljs.core.__destructure_map.call(null,map__19545);
var node = map__19545__$1;
var key = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var node__$1 = cljs.core.dissoc.call(null,node,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.contains_QMARK_.call(null,idx__$1,key)){
return cljs.core.update.call(null,idx__$1,key,com.wsscode.pathom3.format.eql.merge_ast_children,node__$1);
} else {
return cljs.core.assoc.call(null,idx__$1,key,node__$1);
}
}),idx,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast2));
return cljs.core.dissoc.call(null,(function (){var G__19546 = (function (){var or__5002__auto__ = ast1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ast2;
}
})();
var G__19546__$1 = ((cljs.core.seq.call(null,idx_SINGLEQUOTE_))?cljs.core.assoc.call(null,G__19546,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.format.eql.map_children__GT_children.call(null,idx_SINGLEQUOTE_)):G__19546);
if(((cljs.core.seq.call(null,idx_SINGLEQUOTE_)) && ((!(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast1))))))){
return cljs.core.assoc.call(null,G__19546__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890));
} else {
return G__19546__$1;
}
})(),new cljs.core.Keyword(null,"query","query",-1288509510));
});
/**
 * Merges two ast's the difference between this and the original merge-ast is related to
 *   params, the original implementation would return nil when there is a mismatch in
 *   params between the entries being merged. This version will merge the params.
 */
com.wsscode.pathom3.format.eql.merge_asts = (function com$wsscode$pathom3$format$eql$merge_asts(var_args){
var G__19550 = arguments.length;
switch (G__19550) {
case 0:
return com.wsscode.pathom3.format.eql.merge_asts.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom3.format.eql.merge_asts.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.format.eql.merge_asts.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.format.eql.merge_asts.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null);
}));

(com.wsscode.pathom3.format.eql.merge_asts.cljs$core$IFn$_invoke$arity$1 = (function (q){
return q;
}));

(com.wsscode.pathom3.format.eql.merge_asts.cljs$core$IFn$_invoke$arity$2 = (function (qa,qb){
return cljs.core.reduce.call(null,(function (ast,p__19551){
var map__19552 = p__19551;
var map__19552__$1 = cljs.core.__destructure_map.call(null,map__19552);
var item_b = map__19552__$1;
var key = cljs.core.get.call(null,map__19552__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.call(null,map__19552__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.call(null,map__19552__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5821__auto__ = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__19548_SHARP_,p2__19547_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__19547_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19548_SHARP_,p2__19547_SHARP_], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5821__auto__)){
var vec__19553 = temp__5821__auto__;
var idx = cljs.core.nth.call(null,vec__19553,(0),null);
var item = cljs.core.nth.call(null,vec__19553,(1),null);
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),type)))){
var G__19556 = cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),com.wsscode.pathom3.format.eql.merge_asts,item_b);
if(cljs.core.truth_((function (){var or__5002__auto__ = params;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item);
}
})())){
return cljs.core.update_in.call(null,G__19556,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx,new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,params);
} else {
return G__19556;
}
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),type)))){
return cljs.core.assoc_in.call(null,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),item_b);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.reduced.call(null,null);
} else {
return ast;

}
}
}
} else {
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,item_b);
}
}),qa,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(qb));
}));

(com.wsscode.pathom3.format.eql.merge_asts.cljs$lang$maxFixedArity = 2);

/**
 * Merges two queries, the difference between this and the original merge is related to
 *   params, the original implementation would return nil when there is a mismatch in
 *   params between the entries being merged. This version will merge the params.
 */
com.wsscode.pathom3.format.eql.merge_queries = (function com$wsscode$pathom3$format$eql$merge_queries(qa,qb){
var G__19558 = com.wsscode.pathom3.format.eql.merge_asts.call(null,edn_query_language.core.query__GT_ast.call(null,qa),edn_query_language.core.query__GT_ast.call(null,qb));
if((G__19558 == null)){
return null;
} else {
return edn_query_language.core.ast__GT_query.call(null,G__19558);
}
});
/**
 * Transform the AST to remove specific values from idents. This is useful to use the
 *   AST as a cache key that doesn't change with the ident value (which is not impactful
 *   for planning for example).
 * 
 *   The current implementation does it by removing `:key` from the children at root level.
 */
com.wsscode.pathom3.format.eql.cacheable_ast = (function com$wsscode$pathom3$format$eql$cacheable_ast(node){
return com.wsscode.misc.coll.update_if.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.mapv.call(null,(function (p1__19559_SHARP_){
return cljs.core.dissoc.call(null,p1__19559_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587));
}),children);
}));
});

//# sourceMappingURL=eql.js.map
