// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.connect.runner.parallel');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.log');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.misc.refs');
goog.require('com.wsscode.misc.time');
goog.require('com.wsscode.pathom3.cache');
goog.require('com.wsscode.pathom3.connect.indexes');
goog.require('com.wsscode.pathom3.connect.operation');
goog.require('com.wsscode.pathom3.connect.operation.protocols');
goog.require('com.wsscode.pathom3.connect.planner');
goog.require('com.wsscode.pathom3.connect.runner');
goog.require('com.wsscode.pathom3.connect.runner.async');
goog.require('com.wsscode.pathom3.entity_tree');
goog.require('com.wsscode.pathom3.format.shape_descriptor');
goog.require('com.wsscode.pathom3.path');
goog.require('com.wsscode.pathom3.plugin');
goog.require('com.wsscode.promesa.macros');
goog.require('promesa.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","env","com.wsscode.pathom3.connect.runner.parallel/env",582380409),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),new cljs.core.Keyword(null,"env-promise","env-promise",1031935557),new cljs.core.Symbol("promesa.core","promise?","promesa.core/promise?",-1893544292,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"env-promise","env-promise",1031935557)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),new cljs.core.Symbol("promesa.core","promise?","promesa.core/promise?",-1893544292,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23194){
return cljs.core.map_QMARK_.call(null,G__23194);
})], null),(function (G__23194){
return cljs.core.map_QMARK_.call(null,G__23194);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),promesa.core.promise_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-hold-delay-ms","com.wsscode.pathom3.connect.runner.parallel/batch-hold-delay-ms",1844464513),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-hold-flush-threshold","com.wsscode.pathom3.connect.runner.parallel/batch-hold-flush-threshold",937991515),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);



com.wsscode.pathom3.connect.runner.parallel.reduce_async = (function com$wsscode$pathom3$connect$runner$parallel$reduce_async(f,init,coll){
return cljs.core.reduce.call(null,(function (d,item){
return promesa.core.then.call(null,d,(function (p1__23195_SHARP_){
return f.call(null,p1__23195_SHARP_,item);
}));
}),promesa.core.resolved.call(null,init),coll);
});
com.wsscode.pathom3.connect.runner.parallel.reduce_kv_async = (function com$wsscode$pathom3$connect$runner$parallel$reduce_kv_async(f,init,coll){
return cljs.core.reduce_kv.call(null,(function (d,k,v){
return promesa.core.then.call(null,d,(function (p1__23196_SHARP_){
return f.call(null,p1__23196_SHARP_,k,v);
}));
}),promesa.core.resolved.call(null,init),coll);
});
com.wsscode.pathom3.connect.runner.parallel.process_map_subquery = (function com$wsscode$pathom3$connect$runner$parallel$process_map_subquery(env,ast,m){
if(((cljs.core.map_QMARK_.call(null,m)) && (cljs.core.not.call(null,com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,m))))){
var temp__5821__auto__ = com.wsscode.pathom3.connect.runner.process_map_subquery_data.call(null,ast,m);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__23197 = temp__5821__auto__;
var ast__$1 = cljs.core.nth.call(null,vec__23197,(0),null);
var cache_tree_STAR_ = cljs.core.nth.call(null,vec__23197,(1),null);
return com.wsscode.pathom3.connect.runner.parallel.run_graph_BANG_.call(null,env,ast__$1,cache_tree_STAR_);
} else {
return null;
}
} else {
return m;
}
});
com.wsscode.pathom3.connect.runner.parallel.process_sequence_subquery = (function com$wsscode$pathom3$connect$runner$parallel$process_sequence_subquery(env,ast,s){
if(cljs.core.truth_(com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,s))){
return s;
} else {
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,promesa.core.all.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (idx,entry){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-process-sequence-item","com.wsscode.pathom3.connect.runner/wrap-process-sequence-item",-1746615799),com.wsscode.pathom3.connect.runner.parallel.process_map_subquery,com.wsscode.pathom3.path.append_path.call(null,env,idx),ast,entry);
})),s))),(function (results){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(function (){var G__23200 = cljs.core.into.call(null,cljs.core.empty.call(null,s),cljs.core.filter.call(null,cljs.core.some_QMARK_),results);
if(com.wsscode.misc.coll.coll_append_at_head_QMARK_.call(null,s)){
return cljs.core.reverse.call(null,G__23200);
} else {
return G__23200;
}
})());
}));
}));
}));
}
});
/**
 * Build a new map where the values are replaced with the map process of the subquery.
 */
com.wsscode.pathom3.connect.runner.parallel.process_map_container_subquery = (function com$wsscode$pathom3$connect$runner$parallel$process_map_container_subquery(env,ast,m){
if(cljs.core.truth_(com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,m))){
return m;
} else {
return com.wsscode.pathom3.connect.runner.parallel.reduce_kv_async.call(null,(function (m__$1,k,v){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.process_map_subquery.call(null,com.wsscode.pathom3.path.append_path.call(null,env,k),ast,v)),(function (res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,cljs.core.assoc.call(null,m__$1,k,res));
}));
}));
}));
}),cljs.core.empty.call(null,m),m);
}
});
com.wsscode.pathom3.connect.runner.parallel.process_attr_subquery = (function com$wsscode$pathom3$connect$runner$parallel$process_attr_subquery(p__23201,entity,k,v){
var map__23202 = p__23201;
var map__23202__$1 = cljs.core.__destructure_map.call(null,map__23202);
var env = map__23202__$1;
var graph = cljs.core.get.call(null,map__23202__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__23203 = com.wsscode.pathom3.connect.runner.process_attr_subquery_ast.call(null,graph,k);
var map__23203__$1 = cljs.core.__destructure_map.call(null,map__23203);
var ast = map__23203__$1;
var children = cljs.core.get.call(null,map__23203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var k__$1 = com.wsscode.pathom3.connect.runner.process_attr_subquery_key.call(null,k);
var env__$1 = com.wsscode.pathom3.path.append_path.call(null,env,k__$1);
if(cljs.core.truth_(children)){
if(cljs.core.map_QMARK_.call(null,v)){
if(cljs.core.truth_(com.wsscode.pathom3.connect.runner.process_map_container_QMARK_.call(null,ast,v))){
return com.wsscode.pathom3.connect.runner.parallel.process_map_container_subquery.call(null,env__$1,ast,v);
} else {
return com.wsscode.pathom3.connect.runner.parallel.process_map_subquery.call(null,env__$1,ast,v);
}
} else {
if(com.wsscode.misc.coll.collection_QMARK_.call(null,v)){
return com.wsscode.pathom3.connect.runner.parallel.process_sequence_subquery.call(null,(function (){var G__23204 = env__$1;
if((!(cljs.core.vector_QMARK_.call(null,v)))){
return cljs.core.assoc.call(null,G__23204,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","unsupported-batch?","com.wsscode.pathom3.connect.runner/unsupported-batch?",-826939500),true);
} else {
return G__23204;
}
})(),ast,v);
} else {
return v;

}
}
} else {
var temp__5821__auto__ = cljs.core.find.call(null,entity,k__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
return cljs.core.val.call(null,x);
} else {
return v;
}
}
});
/**
 * Specialized merge versions that work on entity data.
 */
com.wsscode.pathom3.connect.runner.parallel.merge_entity_data = (function com$wsscode$pathom3$connect$runner$parallel$merge_entity_data(env,entity,new_data){
return com.wsscode.pathom3.connect.runner.parallel.reduce_kv_async.call(null,(function (out,k,v){
if(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","unknown-value","com.wsscode.pathom3.connect.operation/unknown-value",1340287052))){
return out;
} else {
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-merge-attribute","com.wsscode.pathom3.connect.runner/wrap-merge-attribute",-520029320),(function com$wsscode$pathom3$connect$runner$parallel$merge_entity_data_$_merge_entity_data__internal(env__$1,m,k__$1,v__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.process_attr_subquery.call(null,env__$1,entity,k__$1,v__$1)),(function (v_SINGLEQUOTE_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,cljs.core.assoc.call(null,m,k__$1,v_SINGLEQUOTE_));
}));
}));
}));
}),env,out,k,v);
}
}),entity,new_data);
});
/**
 * This function gets the map returned from the resolver and merge the data in the
 *   current cache-tree.
 */
com.wsscode.pathom3.connect.runner.parallel.merge_resolver_response_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$merge_resolver_response_BANG_(env,response){
if(cljs.core.map_QMARK_.call(null,response)){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.merge_entity_data.call(null,env,com.wsscode.pathom3.entity_tree.entity.call(null,env),response)),(function (new_data){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,com.wsscode.misc.coll.deep_merge,new_data)),(function (___18777__auto__){
return promesa.protocols._promise.call(null,env);
}));
}));
}));
}));
} else {
return env;
}
});
/**
 * Process the idents from the Graph, this will add the ident data into the child.
 * 
 *   If there is ident data already, it gets merged with the ident value.
 */
com.wsscode.pathom3.connect.runner.parallel.process_idents_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$process_idents_BANG_(env,idents){
return promesa.core.then.call(null,promesa.core.all.call(null,cljs.core.mapv.call(null,(function (k){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env)),(function (entity){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-merge-attribute","com.wsscode.pathom3.connect.runner/wrap-merge-attribute",-520029320),(function com$wsscode$pathom3$connect$runner$parallel$process_idents_BANG__$_process_idents_merge_attr__internal(env__$1,m,k__$1,v){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.process_attr_subquery.call(null,env__$1,entity,k__$1,v)),(function (sub_value){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,cljs.core.assoc.call(null,m,k__$1,sub_value));
}));
}));
}));
}),env,cljs.core.PersistentArrayMap.EMPTY,k,cljs.core.assoc.call(null,cljs.core.get.call(null,entity,k),cljs.core.first.call(null,k),cljs.core.second.call(null,k)))),(function (entity_SINGLEQUOTE_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,(function (p1__23205_SHARP_){
return cljs.core.assoc.call(null,p1__23205_SHARP_,k,cljs.core.get.call(null,entity_SINGLEQUOTE_,k));
})));
}));
}));
}));
}));
}),idents)),cljs.core.constantly.call(null,null));
});
/**
 * Runs the next node associated with the node, in case it exists.
 */
com.wsscode.pathom3.connect.runner.parallel.run_next_node_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_next_node_BANG_(p__23206,p__23207){
var map__23208 = p__23206;
var map__23208__$1 = cljs.core.__destructure_map.call(null,map__23208);
var env = map__23208__$1;
var graph = cljs.core.get.call(null,map__23208__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__23209 = p__23207;
var map__23209__$1 = cljs.core.__destructure_map.call(null,map__23209);
var run_next = cljs.core.get.call(null,map__23209__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
if(cljs.core.truth_(run_next)){
return com.wsscode.pathom3.connect.runner.parallel.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,run_next));
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.parallel.invoke_resolver_cached = (function com$wsscode$pathom3$connect$runner$parallel$invoke_resolver_cached(env,cache_QMARK_,op_name,resolver,cache_store,input_data,params){
if(cljs.core.truth_(cache_QMARK_)){
return com.wsscode.pathom3.cache.cached.call(null,cache_store,env,com.wsscode.pathom3.connect.runner.cache_key.call(null,env,input_data,op_name,params),(function (){
try{return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,input_data);
}catch (e23210){var e = e23210;
return promesa.core.rejected.call(null,e);
}}));
} else {
try{return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,input_data);
}catch (e23211){var e = e23211;
return promesa.core.rejected.call(null,e);
}}
});
com.wsscode.pathom3.connect.runner.parallel.delayed_process = (function com$wsscode$pathom3$connect$runner$parallel$delayed_process(var_args){
var G__23213 = arguments.length;
switch (G__23213) {
case 2:
return com.wsscode.pathom3.connect.runner.parallel.delayed_process.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.connect.runner.parallel.delayed_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.runner.parallel.delayed_process.cljs$core$IFn$_invoke$arity$2 = (function (f,debounce_window_ms){
return com.wsscode.pathom3.connect.runner.parallel.delayed_process.call(null,f,debounce_window_ms,null);
}));

(com.wsscode.pathom3.connect.runner.parallel.delayed_process.cljs$core$IFn$_invoke$arity$3 = (function (f,debounce_window_ms,flush_threshold){
var income = cljs.core.async.chan.call(null,(1024));
var c__4928__auto___23309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_23270){
var state_val_23271 = (state_23270[(1)]);
if((state_val_23271 === (7))){
var inst_23215 = (state_23270[(7)]);
var inst_23221 = cljs.core.count.call(null,inst_23215);
var inst_23222 = (inst_23221 >= flush_threshold);
var state_23270__$1 = state_23270;
var statearr_23272_23310 = state_23270__$1;
(statearr_23272_23310[(2)] = inst_23222);

(statearr_23272_23310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (20))){
var inst_23264 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
var statearr_23273_23311 = state_23270__$1;
(statearr_23273_23311[(2)] = inst_23264);

(statearr_23273_23311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (1))){
var inst_23214 = cljs.core.List.EMPTY;
var inst_23215 = inst_23214;
var state_23270__$1 = (function (){var statearr_23274 = state_23270;
(statearr_23274[(7)] = inst_23215);

return statearr_23274;
})();
var statearr_23275_23312 = state_23270__$1;
(statearr_23275_23312[(2)] = null);

(statearr_23275_23312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (4))){
var inst_23219 = (state_23270[(8)]);
var inst_23219__$1 = flush_threshold;
var state_23270__$1 = (function (){var statearr_23276 = state_23270;
(statearr_23276[(8)] = inst_23219__$1);

return statearr_23276;
})();
if(cljs.core.truth_(inst_23219__$1)){
var statearr_23277_23313 = state_23270__$1;
(statearr_23277_23313[(1)] = (7));

} else {
var statearr_23278_23314 = state_23270__$1;
(statearr_23278_23314[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (15))){
var inst_23215 = (state_23270[(7)]);
var inst_23241 = (state_23270[(9)]);
var inst_23250 = cljs.core.conj.call(null,inst_23215,inst_23241);
var inst_23215__$1 = inst_23250;
var state_23270__$1 = (function (){var statearr_23279 = state_23270;
(statearr_23279[(7)] = inst_23215__$1);

return statearr_23279;
})();
var statearr_23280_23315 = state_23270__$1;
(statearr_23280_23315[(2)] = null);

(statearr_23280_23315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (13))){
var inst_23235 = (state_23270[(10)]);
var inst_23240 = (state_23270[(2)]);
var inst_23241 = cljs.core.nth.call(null,inst_23240,(0),null);
var inst_23242 = cljs.core.nth.call(null,inst_23240,(1),null);
var inst_23243 = cljs.core._EQ_.call(null,inst_23242,inst_23235);
var state_23270__$1 = (function (){var statearr_23281 = state_23270;
(statearr_23281[(9)] = inst_23241);

return statearr_23281;
})();
if(inst_23243){
var statearr_23282_23316 = state_23270__$1;
(statearr_23282_23316[(1)] = (14));

} else {
var statearr_23283_23317 = state_23270__$1;
(statearr_23283_23317[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (6))){
var inst_23266 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
var statearr_23284_23318 = state_23270__$1;
(statearr_23284_23318[(2)] = inst_23266);

(statearr_23284_23318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (17))){
var inst_23258 = (state_23270[(11)]);
var inst_23258__$1 = (state_23270[(2)]);
var state_23270__$1 = (function (){var statearr_23285 = state_23270;
(statearr_23285[(11)] = inst_23258__$1);

return statearr_23285;
})();
if(cljs.core.truth_(inst_23258__$1)){
var statearr_23286_23319 = state_23270__$1;
(statearr_23286_23319[(1)] = (18));

} else {
var statearr_23287_23320 = state_23270__$1;
(statearr_23287_23320[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (3))){
var inst_23268 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23270__$1,inst_23268);
} else {
if((state_val_23271 === (12))){
var inst_23255 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
var statearr_23288_23321 = state_23270__$1;
(statearr_23288_23321[(2)] = inst_23255);

(statearr_23288_23321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (2))){
var inst_23215 = (state_23270[(7)]);
var inst_23217 = cljs.core.seq.call(null,inst_23215);
var state_23270__$1 = state_23270;
if(inst_23217){
var statearr_23289_23322 = state_23270__$1;
(statearr_23289_23322[(1)] = (4));

} else {
var statearr_23290_23323 = state_23270__$1;
(statearr_23290_23323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (19))){
var state_23270__$1 = state_23270;
var statearr_23291_23324 = state_23270__$1;
(statearr_23291_23324[(2)] = null);

(statearr_23291_23324[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (11))){
var inst_23235 = (state_23270[(10)]);
var inst_23235__$1 = cljs.core.async.timeout.call(null,debounce_window_ms);
var inst_23236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23237 = [income,inst_23235__$1];
var inst_23238 = (new cljs.core.PersistentVector(null,2,(5),inst_23236,inst_23237,null));
var state_23270__$1 = (function (){var statearr_23292 = state_23270;
(statearr_23292[(10)] = inst_23235__$1);

return statearr_23292;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23270__$1,(13),inst_23238,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_23271 === (9))){
var inst_23225 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
if(cljs.core.truth_(inst_23225)){
var statearr_23293_23325 = state_23270__$1;
(statearr_23293_23325[(1)] = (10));

} else {
var statearr_23294_23326 = state_23270__$1;
(statearr_23294_23326[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (5))){
var state_23270__$1 = state_23270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23270__$1,(17),income);
} else {
if((state_val_23271 === (14))){
var inst_23215 = (state_23270[(7)]);
var inst_23245 = cljs.core.reverse.call(null,inst_23215);
var inst_23246 = f.call(null,inst_23245);
var inst_23247 = cljs.core.List.EMPTY;
var inst_23215__$1 = inst_23247;
var state_23270__$1 = (function (){var statearr_23295 = state_23270;
(statearr_23295[(12)] = inst_23246);

(statearr_23295[(7)] = inst_23215__$1);

return statearr_23295;
})();
var statearr_23296_23327 = state_23270__$1;
(statearr_23296_23327[(2)] = null);

(statearr_23296_23327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (16))){
var inst_23253 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
var statearr_23297_23328 = state_23270__$1;
(statearr_23297_23328[(2)] = inst_23253);

(statearr_23297_23328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (10))){
var inst_23215 = (state_23270[(7)]);
var inst_23227 = cljs.core.reverse.call(null,inst_23215);
var inst_23228 = f.call(null,inst_23227);
var inst_23229 = cljs.core.List.EMPTY;
var inst_23215__$1 = inst_23229;
var state_23270__$1 = (function (){var statearr_23298 = state_23270;
(statearr_23298[(13)] = inst_23228);

(statearr_23298[(7)] = inst_23215__$1);

return statearr_23298;
})();
var statearr_23299_23329 = state_23270__$1;
(statearr_23299_23329[(2)] = null);

(statearr_23299_23329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (18))){
var inst_23215 = (state_23270[(7)]);
var inst_23258 = (state_23270[(11)]);
var inst_23260 = cljs.core.conj.call(null,inst_23215,inst_23258);
var inst_23215__$1 = inst_23260;
var state_23270__$1 = (function (){var statearr_23300 = state_23270;
(statearr_23300[(7)] = inst_23215__$1);

return statearr_23300;
})();
var statearr_23301_23330 = state_23270__$1;
(statearr_23301_23330[(2)] = null);

(statearr_23301_23330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23271 === (8))){
var inst_23219 = (state_23270[(8)]);
var state_23270__$1 = state_23270;
var statearr_23302_23331 = state_23270__$1;
(statearr_23302_23331[(2)] = inst_23219);

(statearr_23302_23331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto__ = null;
var com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto____0 = (function (){
var statearr_23303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23303[(0)] = com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto__);

(statearr_23303[(1)] = (1));

return statearr_23303;
});
var com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto____1 = (function (state_23270){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_23270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e23304){var ex__4858__auto__ = e23304;
var statearr_23305_23332 = state_23270;
(statearr_23305_23332[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_23270[(4)]))){
var statearr_23306_23333 = state_23270;
(statearr_23306_23333[(1)] = cljs.core.first.call(null,(state_23270[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23334 = state_23270;
state_23270 = G__23334;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto__ = function(state_23270){
switch(arguments.length){
case 0:
return com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto____0.call(this);
case 1:
return com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto____1.call(this,state_23270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto____0;
com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto____1;
return com$wsscode$pathom3$connect$runner$parallel$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_23307 = f__4929__auto__.call(null);
(statearr_23307[(6)] = c__4928__auto___23309);

return statearr_23307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return income;
}));

(com.wsscode.pathom3.connect.runner.parallel.delayed_process.cljs$lang$maxFixedArity = 3);

com.wsscode.pathom3.connect.runner.parallel.run_async_batches_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_async_batches_BANG_(env,batch_items){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,batch_items))),(function (batch_op){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.indexes.resolver.call(null,env,batch_op)),(function (resolver){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.batch_group_input_groups.call(null,batch_items)),(function (input_groups){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.batch_group_inputs.call(null,batch_items)),(function (inputs){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.coll.update_if.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,batch_items)),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),(function (p1__23335_SHARP_){
var G__23336 = p1__23335_SHARP_;
if(cljs.core.seq.call(null,p1__23335_SHARP_)){
return cljs.core.pop.call(null,G__23336);
} else {
return G__23336;
}
}))),(function (batch_env){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch-chunk-size","com.wsscode.pathom3.connect.operation/batch-chunk-size",-1412106301).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.operation_config.call(null,resolver))),(function (max_size){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.time.now_ms.call(null)),(function (start){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,promesa.core.catch$.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.invoke_async_maybe_split_batches.call(null,max_size,resolver,batch_env,batch_op,input_groups,inputs));
})),(function (e){
try{com.wsscode.pathom3.connect.runner.mark_batch_errors.call(null,e,batch_env,batch_op,batch_items);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),e], null);
}catch (e23337){var e__$1 = e23337;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),e__$1], null);
}}))),(function (responses){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.time.now_ms.call(null)),(function (finish){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(function (){var temp__5821__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380).cljs$core$IFn$_invoke$arity$1(responses);
if(cljs.core.truth_(temp__5821__auto__)){
var err = temp__5821__auto__;
var seq__23338_23366 = cljs.core.seq.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.vals.call(null,input_groups)));
var chunk__23339_23367 = null;
var count__23340_23368 = (0);
var i__23341_23369 = (0);
while(true){
if((i__23341_23369 < count__23340_23368)){
var map__23344_23370 = cljs.core._nth.call(null,chunk__23339_23367,i__23341_23369);
var map__23344_23371__$1 = cljs.core.__destructure_map.call(null,map__23344_23370);
var batch_response_promise_23372 = cljs.core.get.call(null,map__23344_23371__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-response-promise","com.wsscode.pathom3.connect.runner.parallel/batch-response-promise",1081071709));
promesa.core.reject_BANG_.call(null,batch_response_promise_23372,err);


var G__23373 = seq__23338_23366;
var G__23374 = chunk__23339_23367;
var G__23375 = count__23340_23368;
var G__23376 = (i__23341_23369 + (1));
seq__23338_23366 = G__23373;
chunk__23339_23367 = G__23374;
count__23340_23368 = G__23375;
i__23341_23369 = G__23376;
continue;
} else {
var temp__5823__auto___23377 = cljs.core.seq.call(null,seq__23338_23366);
if(temp__5823__auto___23377){
var seq__23338_23378__$1 = temp__5823__auto___23377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23338_23378__$1)){
var c__5525__auto___23379 = cljs.core.chunk_first.call(null,seq__23338_23378__$1);
var G__23380 = cljs.core.chunk_rest.call(null,seq__23338_23378__$1);
var G__23381 = c__5525__auto___23379;
var G__23382 = cljs.core.count.call(null,c__5525__auto___23379);
var G__23383 = (0);
seq__23338_23366 = G__23380;
chunk__23339_23367 = G__23381;
count__23340_23368 = G__23382;
i__23341_23369 = G__23383;
continue;
} else {
var map__23345_23384 = cljs.core.first.call(null,seq__23338_23378__$1);
var map__23345_23385__$1 = cljs.core.__destructure_map.call(null,map__23345_23384);
var batch_response_promise_23386 = cljs.core.get.call(null,map__23345_23385__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-response-promise","com.wsscode.pathom3.connect.runner.parallel/batch-response-promise",1081071709));
promesa.core.reject_BANG_.call(null,batch_response_promise_23386,err);


var G__23387 = cljs.core.next.call(null,seq__23338_23378__$1);
var G__23388 = null;
var G__23389 = (0);
var G__23390 = (0);
seq__23338_23366 = G__23387;
chunk__23339_23367 = G__23388;
count__23340_23368 = G__23389;
i__23341_23369 = G__23390;
continue;
}
} else {
}
}
break;
}

return err;
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,inputs),cljs.core.count.call(null,responses))){
throw cljs.core.ex_info.call(null,"Batch results must be a sequence and have the same length as the inputs.",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var seq__23346 = cljs.core.seq.call(null,com.wsscode.pathom3.connect.runner.combine_inputs_with_responses.call(null,input_groups,inputs,responses));
var chunk__23347 = null;
var count__23348 = (0);
var i__23349 = (0);
while(true){
if((i__23349 < count__23348)){
var vec__23358 = cljs.core._nth.call(null,chunk__23347,i__23349);
var map__23361 = cljs.core.nth.call(null,vec__23358,(0),null);
var map__23361__$1 = cljs.core.__destructure_map.call(null,map__23361);
var batch_item = map__23361__$1;
var env_SINGLEQUOTE_ = cljs.core.get.call(null,map__23361__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var batch_response_promise = cljs.core.get.call(null,map__23361__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-response-promise","com.wsscode.pathom3.connect.runner.parallel/batch-response-promise",1081071709));
var node = cljs.core.get.call(null,map__23361__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var node_resolver_input = cljs.core.get.call(null,map__23361__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var response = cljs.core.nth.call(null,vec__23358,(1),null);
com.wsscode.pathom3.connect.runner.cache_batch_item.call(null,batch_item,batch_op,response);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE_,node,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),start,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),finish], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env_SINGLEQUOTE_,node_resolver_input,response)));

promesa.core.resolve_BANG_.call(null,batch_response_promise,response);


var G__23391 = seq__23346;
var G__23392 = chunk__23347;
var G__23393 = count__23348;
var G__23394 = (i__23349 + (1));
seq__23346 = G__23391;
chunk__23347 = G__23392;
count__23348 = G__23393;
i__23349 = G__23394;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__23346);
if(temp__5823__auto__){
var seq__23346__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23346__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23346__$1);
var G__23395 = cljs.core.chunk_rest.call(null,seq__23346__$1);
var G__23396 = c__5525__auto__;
var G__23397 = cljs.core.count.call(null,c__5525__auto__);
var G__23398 = (0);
seq__23346 = G__23395;
chunk__23347 = G__23396;
count__23348 = G__23397;
i__23349 = G__23398;
continue;
} else {
var vec__23362 = cljs.core.first.call(null,seq__23346__$1);
var map__23365 = cljs.core.nth.call(null,vec__23362,(0),null);
var map__23365__$1 = cljs.core.__destructure_map.call(null,map__23365);
var batch_item = map__23365__$1;
var env_SINGLEQUOTE_ = cljs.core.get.call(null,map__23365__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var batch_response_promise = cljs.core.get.call(null,map__23365__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-response-promise","com.wsscode.pathom3.connect.runner.parallel/batch-response-promise",1081071709));
var node = cljs.core.get.call(null,map__23365__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var node_resolver_input = cljs.core.get.call(null,map__23365__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var response = cljs.core.nth.call(null,vec__23362,(1),null);
com.wsscode.pathom3.connect.runner.cache_batch_item.call(null,batch_item,batch_op,response);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE_,node,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),start,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),finish], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env_SINGLEQUOTE_,node_resolver_input,response)));

promesa.core.resolve_BANG_.call(null,batch_response_promise,response);


var G__23399 = cljs.core.next.call(null,seq__23346__$1);
var G__23400 = null;
var G__23401 = (0);
var G__23402 = (0);
seq__23346 = G__23399;
chunk__23347 = G__23400;
count__23348 = G__23401;
i__23349 = G__23402;
continue;
}
} else {
return null;
}
}
break;
}
}
})());
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
com.wsscode.pathom3.connect.runner.parallel.create_batch_processor = (function com$wsscode$pathom3$connect$runner$parallel$create_batch_processor(p__23404){
var map__23405 = p__23404;
var map__23405__$1 = cljs.core.__destructure_map.call(null,map__23405);
var env = map__23405__$1;
var batch_hold_delay_ms = cljs.core.get.call(null,map__23405__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-hold-delay-ms","com.wsscode.pathom3.connect.runner.parallel/batch-hold-delay-ms",1844464513));
var batch_hold_flush_threshold = cljs.core.get.call(null,map__23405__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-hold-flush-threshold","com.wsscode.pathom3.connect.runner.parallel/batch-hold-flush-threshold",937991515));
return com.wsscode.pathom3.connect.runner.parallel.delayed_process.call(null,(function (p1__23403_SHARP_){
return com.wsscode.pathom3.connect.runner.parallel.run_async_batches_BANG_.call(null,env,p1__23403_SHARP_);
}),batch_hold_delay_ms,batch_hold_flush_threshold);
});
com.wsscode.pathom3.connect.runner.parallel.get_batch_process = (function com$wsscode$pathom3$connect$runner$parallel$get_batch_process(p__23406,batch_split){
var map__23407 = p__23406;
var map__23407__$1 = cljs.core.__destructure_map.call(null,map__23407);
var env = map__23407__$1;
var async_batches_STAR_ = cljs.core.get.call(null,map__23407__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","async-batches*","com.wsscode.pathom3.connect.runner.parallel/async-batches*",1778493869));
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,async_batches_STAR_,(function (batches){
if(cljs.core.contains_QMARK_.call(null,batches,batch_split)){
return batches;
} else {
return cljs.core.assoc.call(null,batches,batch_split,com.wsscode.pathom3.connect.runner.parallel.create_batch_processor.call(null,env));
}
})),batch_split);
});
com.wsscode.pathom3.connect.runner.parallel.invoke_async_batch = (function com$wsscode$pathom3$connect$runner$parallel$invoke_async_batch(env,cache_QMARK_,op_name,node,cache_store,input_data,params){
var process__$1 = com.wsscode.pathom3.connect.runner.parallel.get_batch_process.call(null,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210),params], null));
var response = promesa.core.deferred.call(null);
cljs.core.async.put_BANG_.call(null,process__$1,cljs.core.assoc.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.runner.batch_hold_token.call(null,env,cache_QMARK_,op_name,node,cache_store,input_data,params)),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-response-promise","com.wsscode.pathom3.connect.runner.parallel/batch-response-promise",1081071709),response));

return response;
});
/**
 * Evaluates a resolver using node information.
 * 
 *   When this function runs the resolver, if filters the data to only include the keys
 *   mentioned by the resolver input. This is important to ensure that the resolver is
 *   not using some key that came accidentally due to execution order, that would lead to
 *   brittle executions.
 */
com.wsscode.pathom3.connect.runner.parallel.invoke_resolver_from_node = (function com$wsscode$pathom3$connect$runner$parallel$invoke_resolver_from_node(env,p__23408){
var map__23409 = p__23408;
var map__23409__$1 = cljs.core.__destructure_map.call(null,map__23409);
var node = map__23409__$1;
var op_name = cljs.core.get.call(null,map__23409__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var input = cljs.core.get.call(null,map__23409__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
var resolver = com.wsscode.pathom3.connect.indexes.resolver.call(null,env,op_name);
var map__23410 = com.wsscode.pathom3.connect.operation.operation_config.call(null,resolver);
var map__23410__$1 = cljs.core.__destructure_map.call(null,map__23410);
var r_config = map__23410__$1;
var op_name__$1 = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var batch_QMARK_ = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317));
var cache_QMARK_ = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),true);
var cache_store = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377));
var optionals = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663));
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node);
var entity = com.wsscode.pathom3.entity_tree.entity.call(null,env__$1);
var input_data = com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.call(null,entity,com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,input,optionals),input);
var input_data__$1 = com.wsscode.pathom3.connect.runner.enhance_dynamic_input.call(null,r_config,node,input_data);
var params = com.wsscode.pathom3.connect.operation.params.call(null,env__$1);
var cache_store__$1 = com.wsscode.pathom3.connect.runner.choose_cache_store.call(null,env__$1,cache_store);
var resolver_cache_STAR_ = cljs.core.get.call(null,env__$1,cache_store__$1);
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-start-ms","com.wsscode.pathom3.connect.runner/resolver-run-start-ms",213921287),com.wsscode.misc.time.now_ms.call(null)], null));

return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,promesa.core.catch$.call(null,(function (){var temp__5821__auto__ = com.wsscode.pathom3.format.shape_descriptor.missing_from_data.call(null,entity,input);
if(cljs.core.truth_(temp__5821__auto__)){
var missing = temp__5821__auto__;
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-missing-required-inputs","com.wsscode.pathom3.connect.runner/node-missing-required-inputs",713513191),missing], null));

return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380);
} else {
if(cljs.core.truth_(batch_QMARK_)){
var temp__5821__auto____$1 = com.wsscode.pathom3.cache.cache_find.call(null,resolver_cache_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_name__$1,input_data__$1,params], null));
if(cljs.core.truth_(temp__5821__auto____$1)){
var x = temp__5821__auto____$1;
return cljs.core.val.call(null,x);
} else {
return com.wsscode.pathom3.connect.runner.parallel.invoke_async_batch.call(null,env__$1,cache_QMARK_,op_name__$1,node,cache_store__$1,input_data__$1,params);
}
} else {
return com.wsscode.pathom3.connect.runner.parallel.invoke_resolver_cached.call(null,env__$1,cache_QMARK_,op_name__$1,resolver,cache_store__$1,input_data__$1,params);

}
}
})(),(function (error){
return com.wsscode.pathom3.connect.runner.report_resolver_error.call(null,env__$1,node,error);
}))),(function (response){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.validate_response_BANG_.call(null,env__$1,node,response)),(function (response__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(function (){var finish = com.wsscode.misc.time.now_ms.call(null);
return com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env__$1,node,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-finish-ms","com.wsscode.pathom3.connect.runner/resolver-run-finish-ms",375193860),finish], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env__$1,input_data__$1,response__$1)));
})()),(function (___18777__auto__){
return promesa.protocols._promise.call(null,response__$1);
}));
}));
}));
}));
}));
});
/**
 * This function evaluates the resolver associated with the node.
 * 
 *   First it checks if the expected results from the resolver are already available. In
 *   case they are, the resolver call is skipped.
 */
com.wsscode.pathom3.connect.runner.parallel.run_resolver_node_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_resolver_node_BANG_(env,node){
if(cljs.core.truth_((function (){var or__5002__auto__ = com.wsscode.pathom3.connect.runner.resolver_already_ran_QMARK_.call(null,env,node);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,node);
}
})())){
return com.wsscode.pathom3.connect.runner.parallel.run_next_node_BANG_.call(null,env,node);
} else {
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null))),(function (_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node)),(function (env_SINGLEQUOTE_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.invoke_resolver_from_node.call(null,env_SINGLEQUOTE_,node)),(function (response){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(cljs.core.truth_((function (){var or__5002__auto__ = (!(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),response)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return com.wsscode.pathom3.connect.planner.node_optional_QMARK_.call(null,node);
}
})())?promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.merge_resolver_response_BANG_.call(null,env,response)),(function (___18777__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto____$1){
return promesa.protocols._promise.call(null,((cljs.core.not.call(null,(function (){var and__5000__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-resolution-checkpoint?","com.wsscode.pathom3.connect.planner/node-resolution-checkpoint?",1547353457).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__5000__auto__)){
return com.wsscode.pathom3.connect.runner.user_demand_completed_QMARK_.call(null,env);
} else {
return and__5000__auto__;
}
})()))?com.wsscode.pathom3.connect.runner.parallel.run_next_node_BANG_.call(null,env,node):null));
}));
}));
})):(function (){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

return null;
})()

));
}));
}));
}));
}));
}));
}
});
com.wsscode.pathom3.connect.runner.parallel.run_or_node_BANG__STAR_ = (function com$wsscode$pathom3$connect$runner$parallel$run_or_node_BANG__STAR_(p__23412,or_node,nodes,errors){
var map__23413 = p__23412;
var map__23413__$1 = cljs.core.__destructure_map.call(null,map__23413);
var env = map__23413__$1;
var graph = cljs.core.get.call(null,map__23413__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var choose_path = cljs.core.get.call(null,map__23413__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","choose-path","com.wsscode.pathom3.connect.runner/choose-path",-251774625),com.wsscode.pathom3.connect.runner.default_choose_path);
if(cljs.core.seq.call(null,nodes)){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,choose_path.call(null,env,or_node,nodes)),(function (picked_node_id){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,((cljs.core.contains_QMARK_.call(null,nodes,picked_node_id))?picked_node_id:(function (){
com.wsscode.log._STAR_active_logger_STAR_.call(null,com.wsscode.log.make_event.call(null,new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","event-invalid-chosen-path","com.wsscode.pathom3.connect.runner/event-invalid-chosen-path",646160441),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expected-one-of","expected-one-of",2046658893),nodes,new cljs.core.Keyword(null,"chosen-attempt","chosen-attempt",-1651171103),picked_node_id,new cljs.core.Keyword(null,"actual-used","actual-used",-2136040608),cljs.core.first.call(null,nodes)], null)));

return cljs.core.first.call(null,nodes);
})()
)),(function (node_id){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.add_taken_path_BANG_.call(null,env,or_node,node_id)),(function (_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,promesa.core.catch$.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))),(function (res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,res);
}));
}));
})),(function (p1__23411_SHARP_){
return (new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709),p1__23411_SHARP_],null));
}))),(function (node_res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(node_res))?node_res:(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(node_res))?com.wsscode.pathom3.connect.runner.parallel.run_or_node_BANG__STAR_.call(null,env,or_node,cljs.core.disj.call(null,nodes,node_id),cljs.core.conj.call(null,errors,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(node_res))):((com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,or_node))?com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","success-path","com.wsscode.pathom3.connect.runner/success-path",1003623091),node_id], null)):com.wsscode.pathom3.connect.runner.parallel.run_or_node_BANG__STAR_.call(null,env,or_node,cljs.core.disj.call(null,nodes,node_id),errors))
)));
}));
}));
}));
}));
}));
}));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709),errors], null);
}
});
com.wsscode.pathom3.connect.runner.parallel.run_or_node_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_or_node_BANG_(env,p__23414){
var map__23415 = p__23414;
var map__23415__$1 = cljs.core.__destructure_map.call(null,map__23415);
var or_node = map__23415__$1;
var run_or = cljs.core.get.call(null,map__23415__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto__){
return promesa.protocols._promise.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(((!(com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,or_node))))?com.wsscode.pathom3.connect.runner.parallel.run_or_node_BANG__STAR_.call(null,env,or_node,run_or,cljs.core.PersistentVector.EMPTY):null)),(function (res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(res))?res:((((cljs.core.seq.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(res))) && (cljs.core.not.call(null,com.wsscode.pathom3.connect.runner.or_expected_optional_QMARK_.call(null,env,or_node)))))?com.wsscode.pathom3.connect.runner.handle_or_error.call(null,env,or_node,res):(function (){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

return com.wsscode.pathom3.connect.runner.parallel.run_next_node_BANG_.call(null,env,or_node);
})()

)));
}));
}));
})));
}));
}));
});
/**
 * Given an AND node, runs every attached node, then runs the attached next.
 */
com.wsscode.pathom3.connect.runner.parallel.run_and_node_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_and_node_BANG_(p__23417,p__23418){
var map__23419 = p__23417;
var map__23419__$1 = cljs.core.__destructure_map.call(null,map__23419);
var env = map__23419__$1;
var graph = cljs.core.get.call(null,map__23419__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__23420 = p__23418;
var map__23420__$1 = cljs.core.__destructure_map.call(null,map__23420);
var and_node = map__23420__$1;
var run_and = cljs.core.get.call(null,map__23420__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,and_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,promesa.core.all.call(null,cljs.core.mapv.call(null,(function (p1__23416_SHARP_){
return com.wsscode.pathom3.connect.runner.parallel.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,p1__23416_SHARP_));
}),run_and))),(function (___18777__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,and_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto____$2){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.run_next_node_BANG_.call(null,env,and_node));
}));
}));
}));
}));
});
/**
 * Run a node from the compute graph. This will start the processing on the sent node
 *   and them will run everything that's connected to this node as sequences of it.
 * 
 *   The result is going to build up at ::p.ent/cache-tree*, after the run is concluded
 *   the output will be there.
 */
com.wsscode.pathom3.connect.runner.parallel.run_node_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_node_BANG_(env,node){
var G__23421 = com.wsscode.pathom3.connect.planner.node_kind.call(null,node);
var G__23421__$1 = (((G__23421 instanceof cljs.core.Keyword))?G__23421.fqn:null);
switch (G__23421__$1) {
case "com.wsscode.pathom3.connect.planner/node-resolver":
return com.wsscode.pathom3.connect.runner.parallel.run_resolver_node_BANG_.call(null,env,node);

break;
case "com.wsscode.pathom3.connect.planner/node-and":
return com.wsscode.pathom3.connect.runner.parallel.run_and_node_BANG_.call(null,env,node);

break;
case "com.wsscode.pathom3.connect.planner/node-or":
return com.wsscode.pathom3.connect.runner.parallel.run_or_node_BANG_.call(null,env,node);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23421__$1)].join('')));

}
});
com.wsscode.pathom3.connect.runner.parallel.run_foreign_mutation = (function com$wsscode$pathom3$connect$runner$parallel$run_foreign_mutation(env,p__23423){
var map__23424 = p__23423;
var map__23424__$1 = cljs.core.__destructure_map.call(null,map__23424);
var ast = map__23424__$1;
var key = cljs.core.get.call(null,map__23424__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var ast__$1 = (function (){var G__23427 = ast;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.dissoc.call(null,G__23427,new cljs.core.Keyword(null,"children","children",-940561982));
} else {
return G__23427;
}
})();
var mutation = com.wsscode.pathom3.connect.indexes.mutation.call(null,env,key);
var map__23425 = com.wsscode.pathom3.connect.operation.operation_config.call(null,mutation);
var map__23425__$1 = cljs.core.__destructure_map.call(null,map__23425);
var dynamic_name = cljs.core.get.call(null,map__23425__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238));
var foreign = com.wsscode.pathom3.connect.indexes.resolver.call(null,env,dynamic_name);
var map__23426 = com.wsscode.pathom3.connect.operation.operation_config.call(null,foreign);
var map__23426__$1 = cljs.core.__destructure_map.call(null,map__23426);
var batch_QMARK_ = cljs.core.get.call(null,map__23426__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317));
var ast__$2 = com.wsscode.pathom3.connect.planner.promote_foreign_ast_children.call(null,ast__$1);
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.operation.protocols._resolve.call(null,foreign,env,(function (){var G__23428 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast__$2], null)], null)], null);
if(cljs.core.truth_(batch_QMARK_)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__23428],null));
} else {
return G__23428;
}
})())),(function (res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,cljs.core.get.call(null,res,key));
}));
}));
}));
});
/**
 * Run mutation from AST.
 */
com.wsscode.pathom3.connect.runner.parallel.invoke_mutation_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$invoke_mutation_BANG_(env,p__23431){
var map__23432 = p__23431;
var map__23432__$1 = cljs.core.__destructure_map.call(null,map__23432);
var ast = map__23432__$1;
var key = cljs.core.get.call(null,map__23432__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.indexes.mutation.call(null,env,key)),(function (mutation){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.time.now_ms.call(null)),(function (start){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),start,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-start-ms","com.wsscode.pathom3.connect.runner/mutation-run-start-ms",2017573501),start], null))),(function (_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,promesa.core.catch$.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(cljs.core.truth_(mutation)?(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.operation_config.call(null,mutation)))?com.wsscode.pathom3.connect.runner.parallel.run_foreign_mutation.call(null,env,ast):com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutate","com.wsscode.pathom3.connect.runner/wrap-mutate",-1277033248),(function (p1__23429_SHARP_,p2__23430_SHARP_){
return com.wsscode.pathom3.connect.operation.protocols._mutate.call(null,mutation,p1__23429_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p2__23430_SHARP_));
}),env,ast)):com.wsscode.pathom3.connect.runner.invoke_not_found_mutation_BANG_.call(null,env,ast,key)));
})),(function (e){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468),com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutation-error","com.wsscode.pathom3.connect.runner/wrap-mutation-error",-1155458602),(function (env__$1,_ast,e__$1){
com.wsscode.pathom3.connect.runner.fail_fast.call(null,env__$1,e__$1);

return e__$1;
}),env,ast,e)], null);
}))),(function (result){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-finish-ms","com.wsscode.pathom3.connect.runner/mutation-run-finish-ms",394220236),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468).cljs$core$IFn$_invoke$arity$1(result))?result:com.wsscode.pathom3.connect.runner.parallel.process_attr_subquery.call(null,env,cljs.core.PersistentArrayMap.EMPTY,ast,result))),(function (result_SINGLEQUOTE_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,cljs.core.assoc,key,result_SINGLEQUOTE_)),(function (___18777__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto____$1){
return promesa.protocols._promise.call(null,result);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * Runs the mutations gathered by the planner.
 */
com.wsscode.pathom3.connect.runner.parallel.process_mutations_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$process_mutations_BANG_(p__23433){
var map__23434 = p__23433;
var map__23434__$1 = cljs.core.__destructure_map.call(null,map__23434);
var env = map__23434__$1;
var graph = cljs.core.get.call(null,map__23434__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
return com.wsscode.pathom3.connect.runner.parallel.reduce_async.call(null,(function (_,ast){
return com.wsscode.pathom3.connect.runner.parallel.invoke_mutation_BANG_.call(null,env,ast);
}),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","mutations","com.wsscode.pathom3.connect.planner/mutations",-1571107042).cljs$core$IFn$_invoke$arity$1(graph));
});
com.wsscode.pathom3.connect.runner.parallel.run_graph_entity_done = (function com$wsscode$pathom3$connect$runner$parallel$run_graph_entity_done(env){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholders","com.wsscode.pathom3.connect.planner/placeholders",-1690563362).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744).cljs$core$IFn$_invoke$arity$1(env)))?com.wsscode.pathom3.connect.runner.parallel.merge_resolver_response_BANG_.call(null,env,com.wsscode.pathom3.connect.runner.placeholder_merge_entity.call(null,env)):null)),(function (___18777__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-entity-ready!","com.wsscode.pathom3.connect.runner/wrap-entity-ready!",-134020323),com.wsscode.pathom3.connect.runner.run_graph_done_BANG_,env));
}));
}));
});
com.wsscode.pathom3.connect.runner.parallel.run_root_node_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_root_node_BANG_(p__23435){
var map__23436 = p__23435;
var map__23436__$1 = cljs.core.__destructure_map.call(null,map__23436);
var env = map__23436__$1;
var graph = cljs.core.get.call(null,map__23436__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.get_root_node.call(null,graph);
if(cljs.core.truth_(temp__5821__auto__)){
var root = temp__5821__auto__;
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.run_node_BANG_.call(null,env,root)),(function (___18777__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.run_graph_entity_done.call(null,env));
}));
}));
} else {
return com.wsscode.pathom3.connect.runner.parallel.run_graph_entity_done.call(null,env);
}
});
/**
 * Run the root node of the graph. As resolvers run, the result will be add to the
 *   entity cache tree.
 */
com.wsscode.pathom3.connect.runner.parallel.run_graph_BANG__STAR_ = (function com$wsscode$pathom3$connect$runner$parallel$run_graph_BANG__STAR_(p__23437){
var map__23438 = p__23437;
var map__23438__$1 = cljs.core.__destructure_map.call(null,map__23438);
var env = map__23438__$1;
var graph = cljs.core.get.call(null,map__23438__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","source-entity","com.wsscode.pathom3.connect.runner/source-entity",1992877853),com.wsscode.pathom3.entity_tree.entity.call(null,env));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.process_mutations_BANG_.call(null,env__$1)),(function (___18777__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(function (){var temp__5821__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nested-process","com.wsscode.pathom3.connect.planner/nested-process",-35632382).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(temp__5821__auto__)){
var nested = temp__5821__auto__;
return com.wsscode.pathom3.connect.runner.parallel.merge_resolver_response_BANG_.call(null,env__$1,cljs.core.select_keys.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env__$1),nested));
} else {
return null;
}
})()),(function (___18777__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(function (){var temp__5821__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(temp__5821__auto__)){
var idents = temp__5821__auto__;
return com.wsscode.pathom3.connect.runner.parallel.process_idents_BANG_.call(null,env__$1,idents);
} else {
return null;
}
})()),(function (___18777__auto____$2){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.run_root_node_BANG_.call(null,env__$1)),(function (___18777__auto____$3){
return promesa.protocols._promise.call(null,env__$1);
}));
}));
}));
}));
}));
});
com.wsscode.pathom3.connect.runner.parallel.plan_and_run_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$plan_and_run_BANG_(env,ast_or_graph,entity_tree_STAR_){
var graph = (cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574).cljs$core$IFn$_invoke$arity$1(ast_or_graph))?ast_or_graph:(function (){var start_plan = com.wsscode.misc.time.now_ms.call(null);
var plan = com.wsscode.pathom3.connect.planner.compute_run_graph.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast_or_graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,cljs.core.deref.call(null,entity_tree_STAR_))));
var finish_plan = com.wsscode.misc.time.now_ms.call(null);
return cljs.core.assoc.call(null,plan,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-start-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-start-ms",1143271592),start_plan,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-finish-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-finish-ms",-1603607227),finish_plan);
})());
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744),graph,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),entity_tree_STAR_);
try{var res__22435__auto__ = (cljs.core.truth_(com.wsscode.pathom3.connect.runner.runnable_graph_QMARK_.call(null,graph))?com.wsscode.pathom3.connect.runner.parallel.run_graph_BANG__STAR_.call(null,env__$1):(function (){
com.wsscode.pathom3.connect.runner.parallel.run_graph_entity_done.call(null,env__$1);

return env__$1;
})()
);
if(promesa.core.promise_QMARK_.call(null,res__22435__auto__)){
return promesa.core.catch$.call(null,res__22435__auto__,(function (e){
throw e;
}));
} else {
return res__22435__auto__;
}
}catch (e23439){var e = e23439;
throw e;
}});
com.wsscode.pathom3.connect.runner.parallel.run_graph_impl_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_graph_impl_BANG_(env,ast_or_graph,entity_tree_STAR_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.coll.merge_defaults.call(null,com.wsscode.pathom3.connect.runner.setup_runner_env.call(null,env,entity_tree_STAR_,cljs.core.atom),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","batch-hold-delay-ms","com.wsscode.pathom3.connect.runner.parallel/batch-hold-delay-ms",1844464513),(5),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.parallel","async-batches*","com.wsscode.pathom3.connect.runner.parallel/async-batches*",1778493869),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null))),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.parallel.plan_and_run_BANG_.call(null,env__$1,ast_or_graph,entity_tree_STAR_)),(function (env__$2){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.include_meta_stats.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env__$2),env__$2));
}));
}));
}));
}));
});
/**
 * Plan and execute a request, given an environment (with indexes), the request AST
 *   and the entity-tree*.
 */
com.wsscode.pathom3.connect.runner.parallel.run_graph_BANG_ = (function com$wsscode$pathom3$connect$runner$parallel$run_graph_BANG_(env,ast_or_graph,entity_tree_STAR_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.run_graph_with_plugins.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.async","async-runner?","com.wsscode.pathom3.connect.runner.async/async-runner?",961718140),true),ast_or_graph,entity_tree_STAR_,com.wsscode.pathom3.connect.runner.parallel.run_graph_impl_BANG_));
}));
}));
}));
});

//# sourceMappingURL=parallel.js.map
