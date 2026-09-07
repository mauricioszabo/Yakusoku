// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.connect.foreign');
goog.require('cljs.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.pathom3.connect.indexes');
goog.require('com.wsscode.pathom3.connect.operation');
goog.require('com.wsscode.pathom3.connect.planner');
goog.require('com.wsscode.pathom3.connect.runner');
goog.require('com.wsscode.promesa.macros');
com.wsscode.pathom3.connect.foreign.index_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100)], null);
com.wsscode.pathom3.connect.foreign.foreign_indexed_key = (function com$wsscode$pathom3$connect$foreign$foreign_indexed_key(i){
return cljs.core.keyword.call(null,"com.wsscode.pathom3.connect.foreign",["foreign-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
});
com.wsscode.pathom3.connect.foreign.compute_foreign_request = (function com$wsscode$pathom3$connect$foreign$compute_foreign_request(inputs){
var ph_requests = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (i,p__23159){
var map__23160 = p__23159;
var map__23160__$1 = cljs.core.__destructure_map.call(null,map__23160);
var foreign_ast = cljs.core.get.call(null,map__23160__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548));
var k = com.wsscode.pathom3.connect.foreign.foreign_indexed_key.call(null,i);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(foreign_ast)], null);
})),inputs);
var entity = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,p__23161){
var map__23162 = p__23161;
var map__23162__$1 = cljs.core.__destructure_map.call(null,map__23162);
var node_resolver_input = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var k = com.wsscode.pathom3.connect.foreign.foreign_indexed_key.call(null,i);
return com.wsscode.misc.coll.make_map_entry.call(null,k,(function (){var or__5002__auto__ = node_resolver_input;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
})),inputs);
var ast = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),ph_requests], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857),ast,new cljs.core.Keyword("pathom","entity","pathom/entity",541245087),entity], null);
});
com.wsscode.pathom3.connect.foreign.compute_foreign_mutation = (function com$wsscode$pathom3$connect$foreign$compute_foreign_mutation(p__23163){
var map__23164 = p__23163;
var map__23164__$1 = cljs.core.__destructure_map.call(null,map__23164);
var node = cljs.core.get.call(null,map__23164__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548).cljs$core$IFn$_invoke$arity$1(node)], null);
});
com.wsscode.pathom3.connect.foreign.call_foreign_mutation = (function com$wsscode$pathom3$connect$foreign$call_foreign_mutation(foreign,p__23165){
var map__23166 = p__23165;
var map__23166__$1 = cljs.core.__destructure_map.call(null,map__23166);
var foreign_ast = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548));
return foreign.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857),foreign_ast], null));
});
com.wsscode.pathom3.connect.foreign.call_foreign_query = (function com$wsscode$pathom3$connect$foreign$call_foreign_query(foreign,inputs){
var r__22423__auto__ = com.wsscode.pathom3.connect.foreign.compute_foreign_request.call(null,inputs);
if(promesa.core.promise_QMARK_.call(null,r__22423__auto__)){
return promesa.core.then.call(null,r__22423__auto__,(function (foreign_call){
var r__22423__auto____$1 = foreign.call(null,foreign_call);
if(promesa.core.promise_QMARK_.call(null,r__22423__auto____$1)){
return promesa.core.then.call(null,r__22423__auto____$1,(function (result){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__23167_SHARP_){
return cljs.core.get.call(null,result,com.wsscode.pathom3.connect.foreign.foreign_indexed_key.call(null,p1__23167_SHARP_));
})),cljs.core.range.call(null,cljs.core.count.call(null,inputs)));
}));
} else {
var result = r__22423__auto____$1;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__23167_SHARP_){
return cljs.core.get.call(null,result,com.wsscode.pathom3.connect.foreign.foreign_indexed_key.call(null,p1__23167_SHARP_));
})),cljs.core.range.call(null,cljs.core.count.call(null,inputs)));
}
}));
} else {
var foreign_call = r__22423__auto__;
var r__22423__auto____$1 = foreign.call(null,foreign_call);
if(promesa.core.promise_QMARK_.call(null,r__22423__auto____$1)){
return promesa.core.then.call(null,r__22423__auto____$1,(function (result){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__23167_SHARP_){
return cljs.core.get.call(null,result,com.wsscode.pathom3.connect.foreign.foreign_indexed_key.call(null,p1__23167_SHARP_));
})),cljs.core.range.call(null,cljs.core.count.call(null,inputs)));
}));
} else {
var result = r__22423__auto____$1;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__23167_SHARP_){
return cljs.core.get.call(null,result,com.wsscode.pathom3.connect.foreign.foreign_indexed_key.call(null,p1__23167_SHARP_));
})),cljs.core.range.call(null,cljs.core.count.call(null,inputs)));
}
}
});
com.wsscode.pathom3.connect.foreign.call_foreign = (function com$wsscode$pathom3$connect$foreign$call_foreign(foreign,inputs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,inputs))))),new cljs.core.Keyword(null,"call","call",-519999866))){
return com.wsscode.pathom3.connect.foreign.call_foreign_mutation.call(null,foreign,cljs.core.first.call(null,inputs));
} else {
return com.wsscode.pathom3.connect.foreign.call_foreign_query.call(null,foreign,inputs);
}
});
com.wsscode.pathom3.connect.foreign.foreign_indexes_resolver = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("com.wsscode.pathom3.connect.foreign","foreign-indexes-resolver","com.wsscode.pathom3.connect.foreign/foreign-indexes-resolver",707360563,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100)], null)], null),(function com$wsscode$pathom3$connect$foreign$foreign_indexes_resolver(env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100),cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-attributes","com.wsscode.pathom3.connect.indexes/index-attributes",-711449838),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","transient-attrs","com.wsscode.pathom3.connect.indexes/transient-attrs",-1280144923),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-source-id","com.wsscode.pathom3.connect.indexes/index-source-id",-190271180)], null))], null);
}));
com.wsscode.pathom3.connect.foreign.remove_foreign_indexes = (function com$wsscode$pathom3$connect$foreign$remove_foreign_indexes(indexes){
return cljs.core.update_in.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,indexes,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),cljs.core.dissoc,new cljs.core.Symbol("com.wsscode.pathom3.connect.foreign","foreign-indexes-resolver","com.wsscode.pathom3.connect.foreign/foreign-indexes-resolver",707360563,null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175),cljs.core.dissoc,new cljs.core.Symbol("com.wsscode.pathom.viz.ws-connector.pathom3","request-snapshots","com.wsscode.pathom.viz.ws-connector.pathom3/request-snapshots",-1413152521,null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-attributes","com.wsscode.pathom3.connect.indexes/index-attributes",-711449838),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100)),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100));
});
/**
 * Introduce a new dynamic resolver and make all the resolvers in the index point to
 *   it.
 */
com.wsscode.pathom3.connect.foreign.internalize_foreign_indexes = (function com$wsscode$pathom3$connect$foreign$internalize_foreign_indexes(p__23170,foreign){
var map__23171 = p__23170;
var map__23171__$1 = cljs.core.__destructure_map.call(null,map__23171);
var indexes = map__23171__$1;
var index_source_id = cljs.core.get.call(null,map__23171__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-source-id","com.wsscode.pathom3.connect.indexes/index-source-id",-190271180));
var index_source_id__$1 = (function (){var or__5002__auto__ = index_source_id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null,"foreign-pathom-");
}
})();
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,cljs.core.assoc_in.call(null,cljs.core.update.call(null,cljs.core.update.call(null,com.wsscode.pathom3.connect.foreign.remove_foreign_indexes.call(null,indexes),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175),(function (mutations){
return com.wsscode.misc.coll.map_vals.call(null,(function (p1__23168_SHARP_){
return com.wsscode.pathom3.connect.operation.update_config.call(null,p1__23168_SHARP_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238),index_source_id__$1);
}),mutations);
})),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),(function (resolvers){
return com.wsscode.misc.coll.map_vals.call(null,(function (p1__23169_SHARP_){
return com.wsscode.pathom3.connect.operation.update_config.call(null,p1__23169_SHARP_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238),index_source_id__$1);
}),resolvers);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),index_source_id__$1], null),com.wsscode.pathom3.connect.operation.resolver.call(null,index_source_id__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),false,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317),true,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-resolver?","com.wsscode.pathom3.connect.operation/dynamic-resolver?",868139406),true], null),(function (_env,inputs){
return com.wsscode.pathom3.connect.foreign.call_foreign.call(null,foreign,inputs);
}))),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-source-id","com.wsscode.pathom3.connect.indexes/index-source-id",-190271180)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.foreign","foreign-indexes","com.wsscode.pathom3.connect.foreign/foreign-indexes",1938921194),index_source_id__$1], null),indexes);
});
/**
 * Load foreign indexes and incorporate it as an external data source. This will make
 *   every resolver from the remote to point to a single one, enabling data delegation
 *   to the foreign node.
 * 
 *   The return of this function is the indexes, you can use pci/register to add them
 *   into your environment.
 */
com.wsscode.pathom3.connect.foreign.foreign_register = (function com$wsscode$pathom3$connect$foreign$foreign_register(foreign){
var r__22423__auto__ = foreign.call(null,com.wsscode.pathom3.connect.foreign.index_query);
if(promesa.core.promise_QMARK_.call(null,r__22423__auto__)){
return promesa.core.then.call(null,r__22423__auto__,(function (p__23172){
var map__23173 = p__23172;
var map__23173__$1 = cljs.core.__destructure_map.call(null,map__23173);
var indexes = cljs.core.get.call(null,map__23173__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100));
return com.wsscode.pathom3.connect.foreign.internalize_foreign_indexes.call(null,indexes,foreign);
}));
} else {
var map__23174 = r__22423__auto__;
var map__23174__$1 = cljs.core.__destructure_map.call(null,map__23174);
var indexes = cljs.core.get.call(null,map__23174__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100));
return com.wsscode.pathom3.connect.foreign.internalize_foreign_indexes.call(null,indexes,foreign);
}
});

//# sourceMappingURL=foreign.js.map
