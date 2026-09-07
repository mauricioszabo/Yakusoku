// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.error');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.pathom3.attribute');
goog.require('com.wsscode.pathom3.connect.planner');
goog.require('com.wsscode.pathom3.plugin');
goog.require('goog.object');
goog.scope(function(){
com.wsscode.pathom3.error.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.error","phase","com.wsscode.pathom3.error/phase",-1759004513),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-unreachable","com.wsscode.pathom3.error/attribute-unreachable",-777663159),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","node-exception","com.wsscode.pathom3.error/node-exception",-1554442230),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","ancestor-error","com.wsscode.pathom3.error/ancestor-error",-29995439),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-not-requested","com.wsscode.pathom3.error/attribute-not-requested",1788921876),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","plugin-missing-id","com.wsscode.pathom3.error/plugin-missing-id",1326668374),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-missing","com.wsscode.pathom3.error/attribute-missing",584652600),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","node-errors","com.wsscode.pathom3.error/node-errors",-1703376516),"null"], null), null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-unreachable","com.wsscode.pathom3.error/attribute-unreachable",-777663159),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","node-exception","com.wsscode.pathom3.error/node-exception",-1554442230),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","ancestor-error","com.wsscode.pathom3.error/ancestor-error",-29995439),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-not-requested","com.wsscode.pathom3.error/attribute-not-requested",1788921876),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","plugin-missing-id","com.wsscode.pathom3.error/plugin-missing-id",1326668374),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-missing","com.wsscode.pathom3.error/attribute-missing",584652600),"null",new cljs.core.Keyword("com.wsscode.pathom3.error","node-errors","com.wsscode.pathom3.error/node-errors",-1703376516),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-unreachable","com.wsscode.pathom3.error/attribute-unreachable",-777663159),null,new cljs.core.Keyword("com.wsscode.pathom3.error","node-exception","com.wsscode.pathom3.error/node-exception",-1554442230),null,new cljs.core.Keyword("com.wsscode.pathom3.error","ancestor-error","com.wsscode.pathom3.error/ancestor-error",-29995439),null,new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-not-requested","com.wsscode.pathom3.error/attribute-not-requested",1788921876),null,new cljs.core.Keyword("com.wsscode.pathom3.error","plugin-missing-id","com.wsscode.pathom3.error/plugin-missing-id",1326668374),null,new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-missing","com.wsscode.pathom3.error/attribute-missing",584652600),null,new cljs.core.Keyword("com.wsscode.pathom3.error","node-errors","com.wsscode.pathom3.error/node-errors",-1703376516),null], null), null)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
com.wsscode.pathom3.error.optional_QMARK_ = (function com$wsscode$pathom3$error$optional_QMARK_(index_ast,attribute){
return cljs.core.get_in.call(null,index_ast,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517)], null));
});
com.wsscode.pathom3.error.attribute_node_error = (function com$wsscode$pathom3$error$attribute_node_error(p__22358,node_id){
var map__22359 = p__22358;
var map__22359__$1 = cljs.core.__destructure_map.call(null,map__22359);
var graph = map__22359__$1;
var node_run_stats = cljs.core.get.call(null,map__22359__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats","com.wsscode.pathom3.connect.runner/node-run-stats",-2036346899));
var attribute = cljs.core.get.call(null,map__22359__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
var index_ast = cljs.core.get.call(null,map__22359__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713));
var map__22360 = cljs.core.get.call(null,node_run_stats,node_id);
var map__22360__$1 = cljs.core.__destructure_map.call(null,map__22360);
var node_error = cljs.core.get.call(null,map__22360__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380));
var node_run_finish_ms = cljs.core.get.call(null,map__22360__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944));
if(cljs.core.truth_(node_error)){
return com.wsscode.misc.coll.make_map_entry.call(null,node_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),new cljs.core.Keyword("com.wsscode.pathom3.error","node-exception","com.wsscode.pathom3.error/node-exception",-1554442230),new cljs.core.Keyword("com.wsscode.pathom3.error","exception","com.wsscode.pathom3.error/exception",-49171775),node_error], null));
} else {
if(cljs.core.truth_(node_run_finish_ms)){
if(cljs.core.not.call(null,com.wsscode.pathom3.error.optional_QMARK_.call(null,index_ast,attribute))){
return com.wsscode.misc.coll.make_map_entry.call(null,node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-missing","com.wsscode.pathom3.error/attribute-missing",584652600)], null));
} else {
return null;
}
} else {
var temp__5821__auto__ = cljs.core.first.call(null,cljs.core.keep.call(null,(function (node_id__$1){
var temp__5821__auto__ = cljs.core.get_in.call(null,node_run_stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380)], null));
if(cljs.core.truth_(temp__5821__auto__)){
var error = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id__$1,error], null);
} else {
return null;
}
}),com.wsscode.pathom3.connect.planner.node_ancestors.call(null,graph,node_id)));
if(cljs.core.truth_(temp__5821__auto__)){
var vec__22361 = temp__5821__auto__;
var node_id_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22361,(0),null);
var error = cljs.core.nth.call(null,vec__22361,(1),null);
return com.wsscode.misc.coll.make_map_entry.call(null,node_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),new cljs.core.Keyword("com.wsscode.pathom3.error","ancestor-error","com.wsscode.pathom3.error/ancestor-error",-29995439),new cljs.core.Keyword("com.wsscode.pathom3.error","error-ancestor-id","com.wsscode.pathom3.error/error-ancestor-id",1256475106),node_id_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom3.error","exception","com.wsscode.pathom3.error/exception",-49171775),error], null));
} else {
return null;
}

}
}
});
/**
 * Return the attribute error, in case it failed.
 */
com.wsscode.pathom3.error.attribute_error = (function com$wsscode$pathom3$error$attribute_error(response,attribute){
if(cljs.core.contains_QMARK_.call(null,response,attribute)){
return null;
} else {
var map__22365 = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,response));
var map__22365__$1 = cljs.core.__destructure_map.call(null,map__22365);
var run_stats = map__22365__$1;
var index_ast = cljs.core.get.call(null,map__22365__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713));
var index_attrs = cljs.core.get.call(null,map__22365__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142));
if(cljs.core.contains_QMARK_.call(null,index_ast,attribute)){
var temp__5821__auto__ = cljs.core.get.call(null,index_attrs,attribute);
if(cljs.core.truth_(temp__5821__auto__)){
var nodes = temp__5821__auto__;
var run_stats__$1 = cljs.core.assoc.call(null,run_stats,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),attribute);
var errors = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,(function (p1__22364_SHARP_){
return com.wsscode.pathom3.error.attribute_node_error.call(null,run_stats__$1,p1__22364_SHARP_);
})),nodes);
if(cljs.core.seq.call(null,errors)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),new cljs.core.Keyword("com.wsscode.pathom3.error","node-errors","com.wsscode.pathom3.error/node-errors",-1703376516),new cljs.core.Keyword("com.wsscode.pathom3.error","node-error-details","com.wsscode.pathom3.error/node-error-details",1227147828),errors], null);
} else {
return null;
}
} else {
if(cljs.core.not.call(null,com.wsscode.pathom3.error.optional_QMARK_.call(null,index_ast,attribute))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-unreachable","com.wsscode.pathom3.error/attribute-unreachable",-777663159)], null);
} else {
return null;
}
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-not-requested","com.wsscode.pathom3.error/attribute-not-requested",1788921876)], null);
}
}
});
com.wsscode.pathom3.error.scan_for_errors_QMARK_ = (function com$wsscode$pathom3$error$scan_for_errors_QMARK_(response){
var G__22366 = response;
var G__22366__$1 = (((G__22366 == null))?null:cljs.core.meta.call(null,G__22366));
if((G__22366__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_.call(null,G__22366__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061));
}
});
com.wsscode.pathom3.error.process_entity_errors = (function com$wsscode$pathom3$error$process_entity_errors(env,entity){
if(cljs.core.truth_(com.wsscode.pathom3.error.scan_for_errors_QMARK_.call(null,entity))){
var ast = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,entity)));
var errors = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,(function (k){
var temp__5821__auto__ = com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.error","wrap-attribute-error","com.wsscode.pathom3.error/wrap-attribute-error",261076496),com.wsscode.pathom3.error.attribute_error,entity,k);
if(cljs.core.truth_(temp__5821__auto__)){
var error = temp__5821__auto__;
return com.wsscode.misc.coll.make_map_entry.call(null,k,error);
} else {
return null;
}
})),cljs.core.keys.call(null,ast));
var G__22367 = entity;
if(cljs.core.seq.call(null,errors)){
return cljs.core.assoc.call(null,G__22367,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attribute-errors","com.wsscode.pathom3.connect.runner/attribute-errors",723532527),errors);
} else {
return G__22367;
}
} else {
return entity;
}
});
com.wsscode.pathom3.error.error_stack = (function com$wsscode$pathom3$error$error_stack(err){
return com.wsscode.pathom3.error.goog$module$goog$object.get.call(null,err,"stack");
});
com.wsscode.pathom3.error.datafy_processor_error = (function com$wsscode$pathom3$error$datafy_processor_error(err){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.error","error-message","com.wsscode.pathom3.error/error-message",-1684909960),cljs.core.ex_message.call(null,err),new cljs.core.Keyword("com.wsscode.pathom3.error","error-data","com.wsscode.pathom3.error/error-data",-420236343),cljs.core.ex_data.call(null,err),new cljs.core.Keyword("com.wsscode.pathom3.error","error-stack","com.wsscode.pathom3.error/error-stack",211302553),com.wsscode.pathom3.error.error_stack.call(null,err)], null);
});

//# sourceMappingURL=error.js.map
