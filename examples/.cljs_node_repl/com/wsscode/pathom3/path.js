// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.path');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.pathom3.attribute');
goog.require('edn_query_language.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.nat_int_QMARK_,cljs.core.symbol_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.path","path-entry","com.wsscode.pathom3.path/path-entry",2017607573),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19207){
return cljs.core.vector_QMARK_.call(null,G__19207);
})], null),null),null));
com.wsscode.pathom3.path.append_path = (function com$wsscode$pathom3$path$append_path(env,path_entry){
return cljs.core.update.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),com.wsscode.misc.coll.vconj,path_entry);
});
/**
 * Check if current path is the root, meaning a blank path.
 */
com.wsscode.pathom3.path.root_QMARK_ = (function com$wsscode$pathom3$path$root_QMARK_(p__19208){
var map__19209 = p__19208;
var map__19209__$1 = cljs.core.__destructure_map.call(null,map__19209);
var path = cljs.core.get.call(null,map__19209__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
return cljs.core.empty_QMARK_.call(null,path);
});
com.wsscode.pathom3.path.at_path_string = (function com$wsscode$pathom3$path$at_path_string(p__19210){
var map__19211 = p__19210;
var map__19211__$1 = cljs.core.__destructure_map.call(null,map__19211);
var path = cljs.core.get.call(null,map__19211__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
if(cljs.core.seq.call(null,path)){
return [" at path ",cljs.core.pr_str.call(null,path)].join('');
} else {
return null;
}
});

//# sourceMappingURL=path.js.map
