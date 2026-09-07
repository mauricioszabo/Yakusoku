// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.connect.runner.async');
goog.require('cljs.core');
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
goog.require('com.wsscode.pathom3.entity_tree');
goog.require('com.wsscode.pathom3.error');
goog.require('com.wsscode.pathom3.format.shape_descriptor');
goog.require('com.wsscode.pathom3.path');
goog.require('com.wsscode.pathom3.plugin');
goog.require('com.wsscode.promesa.macros');
goog.require('promesa.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.async","env","com.wsscode.pathom3.connect.runner.async/env",505762358),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),new cljs.core.Keyword(null,"env-promise","env-promise",1031935557),new cljs.core.Symbol("promesa.core","promise?","promesa.core/promise?",-1893544292,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"env-promise","env-promise",1031935557)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),new cljs.core.Symbol("promesa.core","promise?","promesa.core/promise?",-1893544292,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23061){
return cljs.core.map_QMARK_.call(null,G__23061);
})], null),(function (G__23061){
return cljs.core.map_QMARK_.call(null,G__23061);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),promesa.core.promise_QMARK_], null),null));

com.wsscode.pathom3.connect.runner.async.reduce_async = (function com$wsscode$pathom3$connect$runner$async$reduce_async(f,init,coll){
return cljs.core.reduce.call(null,(function (d,item){
return promesa.core.then.call(null,d,(function (p1__23062_SHARP_){
return f.call(null,p1__23062_SHARP_,item);
}));
}),promesa.core.resolved.call(null,init),coll);
});
com.wsscode.pathom3.connect.runner.async.reduce_kv_async = (function com$wsscode$pathom3$connect$runner$async$reduce_kv_async(f,init,coll){
return cljs.core.reduce_kv.call(null,(function (d,k,v){
return promesa.core.then.call(null,d,(function (p1__23063_SHARP_){
return f.call(null,p1__23063_SHARP_,k,v);
}));
}),promesa.core.resolved.call(null,init),coll);
});
com.wsscode.pathom3.connect.runner.async.process_map_subquery = (function com$wsscode$pathom3$connect$runner$async$process_map_subquery(env,ast,m){
if(((cljs.core.map_QMARK_.call(null,m)) && (cljs.core.not.call(null,com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,m))))){
var temp__5821__auto__ = com.wsscode.pathom3.connect.runner.process_map_subquery_data.call(null,ast,m);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__23064 = temp__5821__auto__;
var ast__$1 = cljs.core.nth.call(null,vec__23064,(0),null);
var cache_tree_STAR_ = cljs.core.nth.call(null,vec__23064,(1),null);
return com.wsscode.pathom3.connect.runner.async.run_graph_BANG_.call(null,env,ast__$1,cache_tree_STAR_);
} else {
return null;
}
} else {
return m;
}
});
com.wsscode.pathom3.connect.runner.async.process_sequence_subquery = (function com$wsscode$pathom3$connect$runner$async$process_sequence_subquery(env,ast,s){
if(cljs.core.truth_(com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,s))){
return s;
} else {
return promesa.core.then.call(null,com.wsscode.pathom3.connect.runner.async.reduce_async.call(null,(function (p__23067,entry){
var vec__23068 = p__23067;
var seq = cljs.core.nth.call(null,vec__23068,(0),null);
var idx = cljs.core.nth.call(null,vec__23068,(1),null);
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-process-sequence-item","com.wsscode.pathom3.connect.runner/wrap-process-sequence-item",-1746615799),com.wsscode.pathom3.connect.runner.async.process_map_subquery,com.wsscode.pathom3.path.append_path.call(null,env,idx),ast,entry)),(function (sub_res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23071 = seq;
if(cljs.core.truth_(sub_res)){
return cljs.core.conj.call(null,G__23071,sub_res);
} else {
return G__23071;
}
})(),(idx + (1))], null));
}));
}));
}));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty.call(null,s),(0)], null),(function (){var G__23072 = s;
if(com.wsscode.misc.coll.coll_append_at_head_QMARK_.call(null,s)){
return cljs.core.reverse.call(null,G__23072);
} else {
return G__23072;
}
})()),cljs.core.first);
}
});
/**
 * Build a new map where the values are replaced with the map process of the subquery.
 */
com.wsscode.pathom3.connect.runner.async.process_map_container_subquery = (function com$wsscode$pathom3$connect$runner$async$process_map_container_subquery(env,ast,m){
if(cljs.core.truth_(com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,m))){
return m;
} else {
return com.wsscode.pathom3.connect.runner.async.reduce_kv_async.call(null,(function (m__$1,k,v){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.process_map_subquery.call(null,com.wsscode.pathom3.path.append_path.call(null,env,k),ast,v)),(function (res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,cljs.core.assoc.call(null,m__$1,k,res));
}));
}));
}));
}),cljs.core.empty.call(null,m),m);
}
});
com.wsscode.pathom3.connect.runner.async.process_attr_subquery = (function com$wsscode$pathom3$connect$runner$async$process_attr_subquery(p__23073,entity,k,v){
var map__23074 = p__23073;
var map__23074__$1 = cljs.core.__destructure_map.call(null,map__23074);
var env = map__23074__$1;
var graph = cljs.core.get.call(null,map__23074__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__23075 = com.wsscode.pathom3.connect.runner.process_attr_subquery_ast.call(null,graph,k);
var map__23075__$1 = cljs.core.__destructure_map.call(null,map__23075);
var ast = map__23075__$1;
var children = cljs.core.get.call(null,map__23075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var k__$1 = com.wsscode.pathom3.connect.runner.process_attr_subquery_key.call(null,k);
var env__$1 = com.wsscode.pathom3.path.append_path.call(null,env,k__$1);
if(cljs.core.truth_(children)){
if(cljs.core.map_QMARK_.call(null,v)){
if(cljs.core.truth_(com.wsscode.pathom3.connect.runner.process_map_container_QMARK_.call(null,ast,v))){
return com.wsscode.pathom3.connect.runner.async.process_map_container_subquery.call(null,env__$1,ast,v);
} else {
return com.wsscode.pathom3.connect.runner.async.process_map_subquery.call(null,env__$1,ast,v);
}
} else {
if(com.wsscode.misc.coll.collection_QMARK_.call(null,v)){
return com.wsscode.pathom3.connect.runner.async.process_sequence_subquery.call(null,(function (){var G__23076 = env__$1;
if((!(cljs.core.vector_QMARK_.call(null,v)))){
return cljs.core.assoc.call(null,G__23076,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","unsupported-batch?","com.wsscode.pathom3.connect.runner/unsupported-batch?",-826939500),true);
} else {
return G__23076;
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
com.wsscode.pathom3.connect.runner.async.merge_entity_data = (function com$wsscode$pathom3$connect$runner$async$merge_entity_data(env,entity,new_data){
return com.wsscode.pathom3.connect.runner.async.reduce_kv_async.call(null,(function (out,k,v){
if(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","unknown-value","com.wsscode.pathom3.connect.operation/unknown-value",1340287052))){
return out;
} else {
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-merge-attribute","com.wsscode.pathom3.connect.runner/wrap-merge-attribute",-520029320),(function com$wsscode$pathom3$connect$runner$async$merge_entity_data_$_merge_entity_data__internal(env__$1,m,k__$1,v__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.process_attr_subquery.call(null,env__$1,entity,k__$1,v__$1)),(function (v_SINGLEQUOTE_){
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
com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_ = (function com$wsscode$pathom3$connect$runner$async$merge_resolver_response_BANG_(env,response){
if(cljs.core.map_QMARK_.call(null,response)){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.merge_entity_data.call(null,env,com.wsscode.pathom3.entity_tree.entity.call(null,env),response)),(function (new_data){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.entity_tree.reset_entity_BANG_.call(null,env,new_data)),(function (___18777__auto__){
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
com.wsscode.pathom3.connect.runner.async.process_idents_BANG_ = (function com$wsscode$pathom3$connect$runner$async$process_idents_BANG_(env,idents){
return promesa.core.then.call(null,com.wsscode.pathom3.connect.runner.async.reduce_async.call(null,(function (_,k){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env)),(function (entity){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-merge-attribute","com.wsscode.pathom3.connect.runner/wrap-merge-attribute",-520029320),(function com$wsscode$pathom3$connect$runner$async$process_idents_BANG__$_process_idents_merge_attr__internal(env__$1,m,k__$1,v){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.process_attr_subquery.call(null,env__$1,entity,k__$1,v)),(function (sub_value){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,cljs.core.assoc.call(null,m,k__$1,sub_value));
}));
}));
}));
}),env,cljs.core.PersistentArrayMap.EMPTY,k,cljs.core.assoc.call(null,cljs.core.get.call(null,entity,k),cljs.core.first.call(null,k),cljs.core.second.call(null,k)))),(function (entity_SINGLEQUOTE_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,(function (p1__23077_SHARP_){
return cljs.core.assoc.call(null,p1__23077_SHARP_,k,cljs.core.get.call(null,entity_SINGLEQUOTE_,k));
})));
}));
}));
}));
}));
}),null,idents),cljs.core.constantly.call(null,null));
});
/**
 * Runs the next node associated with the node, in case it exists.
 */
com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_next_node_BANG_(p__23078,p__23079){
var map__23080 = p__23078;
var map__23080__$1 = cljs.core.__destructure_map.call(null,map__23080);
var env = map__23080__$1;
var graph = cljs.core.get.call(null,map__23080__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__23081 = p__23079;
var map__23081__$1 = cljs.core.__destructure_map.call(null,map__23081);
var run_next = cljs.core.get.call(null,map__23081__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
if(cljs.core.truth_(run_next)){
return com.wsscode.pathom3.connect.runner.async.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,run_next));
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.async.invoke_resolver_cached = (function com$wsscode$pathom3$connect$runner$async$invoke_resolver_cached(env,cache_QMARK_,op_name,resolver,cache_store,input_data,params){
if(cljs.core.truth_(cache_QMARK_)){
return com.wsscode.pathom3.cache.cached.call(null,cache_store,env,com.wsscode.pathom3.connect.runner.cache_key.call(null,env,input_data,op_name,params),(function (){
try{return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,input_data);
}catch (e23082){var e = e23082;
return promesa.core.rejected.call(null,e);
}}));
} else {
try{return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,input_data);
}catch (e23083){var e = e23083;
return promesa.core.rejected.call(null,e);
}}
});
com.wsscode.pathom3.connect.runner.async.invoke_resolver_cached_batch = (function com$wsscode$pathom3$connect$runner$async$invoke_resolver_cached_batch(env,cache_QMARK_,op_name,resolver,cache_store,input_data,params){
com.wsscode.pathom3.connect.runner.warn_batch_unsupported.call(null,env,op_name);

if(cljs.core.truth_(cache_QMARK_)){
return com.wsscode.pathom3.cache.cached.call(null,cache_store,env,com.wsscode.pathom3.connect.runner.cache_key.call(null,env,input_data,op_name,params),(function (){
try{var r__22423__auto__ = com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_data], null));
if(promesa.core.promise_QMARK_.call(null,r__22423__auto__)){
return promesa.core.then.call(null,r__22423__auto__,(function (res){
return cljs.core.first.call(null,res);
}));
} else {
var res = r__22423__auto__;
return cljs.core.first.call(null,res);
}
}catch (e23084){var e = e23084;
return promesa.core.rejected.call(null,e);
}}));
} else {
try{var r__22423__auto__ = com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_data], null));
if(promesa.core.promise_QMARK_.call(null,r__22423__auto__)){
return promesa.core.then.call(null,r__22423__auto__,(function (res){
return cljs.core.first.call(null,res);
}));
} else {
var res = r__22423__auto__;
return cljs.core.first.call(null,res);
}
}catch (e23085){var e = e23085;
return promesa.core.rejected.call(null,e);
}}
});
/**
 * Evaluates a resolver using node information.
 * 
 *   When this function runs the resolver, if filters the data to only include the keys
 *   mentioned by the resolver input. This is important to ensure that the resolver is
 *   not using some key that came accidentally due to execution order, that would lead to
 *   brittle executions.
 */
com.wsscode.pathom3.connect.runner.async.invoke_resolver_from_node = (function com$wsscode$pathom3$connect$runner$async$invoke_resolver_from_node(env,p__23086){
var map__23087 = p__23086;
var map__23087__$1 = cljs.core.__destructure_map.call(null,map__23087);
var node = map__23087__$1;
var op_name = cljs.core.get.call(null,map__23087__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var input = cljs.core.get.call(null,map__23087__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
var resolver = com.wsscode.pathom3.connect.indexes.resolver.call(null,env,op_name);
var map__23088 = com.wsscode.pathom3.connect.operation.operation_config.call(null,resolver);
var map__23088__$1 = cljs.core.__destructure_map.call(null,map__23088);
var r_config = map__23088__$1;
var op_name__$1 = cljs.core.get.call(null,map__23088__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var batch_QMARK_ = cljs.core.get.call(null,map__23088__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317));
var cache_QMARK_ = cljs.core.get.call(null,map__23088__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),true);
var cache_store = cljs.core.get.call(null,map__23088__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377));
var optionals = cljs.core.get.call(null,map__23088__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663));
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node);
var entity = com.wsscode.pathom3.entity_tree.entity.call(null,env__$1);
var input_PLUS_opts = com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,input,optionals);
var input_data = com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.call(null,entity,input_PLUS_opts,input);
var input_data__$1 = com.wsscode.pathom3.connect.runner.enhance_dynamic_input.call(null,r_config,node,input_data);
var params = com.wsscode.pathom3.connect.operation.params.call(null,env__$1);
var cache_store__$1 = com.wsscode.pathom3.connect.runner.choose_cache_store.call(null,env__$1,cache_store);
var resolver_cache_STAR_ = cljs.core.get.call(null,env__$1,cache_store__$1);
var _ = com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-start-ms","com.wsscode.pathom3.connect.runner/resolver-run-start-ms",213921287),com.wsscode.misc.time.now_ms.call(null)], null));
var missing_check = (function (){try{return com.wsscode.pathom3.connect.runner.input_missing_check.call(null,env__$1,node,entity,input,input_PLUS_opts);
}catch (e23089){var e = e23089;
return promesa.core.rejected.call(null,e);
}})();
var response = promesa.core.catch$.call(null,(cljs.core.truth_(missing_check)?missing_check:(cljs.core.truth_(batch_QMARK_)?(function (){var temp__5821__auto__ = com.wsscode.pathom3.cache.cache_find.call(null,resolver_cache_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_name__$1,input_data__$1,params], null));
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
return cljs.core.val.call(null,x);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","unsupported-batch?","com.wsscode.pathom3.connect.runner/unsupported-batch?",-826939500).cljs$core$IFn$_invoke$arity$1(env__$1))){
return com.wsscode.pathom3.connect.runner.async.invoke_resolver_cached_batch.call(null,env__$1,cache_QMARK_,op_name__$1,resolver,cache_store__$1,input_data__$1,params);
} else {
return com.wsscode.pathom3.connect.runner.batch_hold_token.call(null,env__$1,cache_QMARK_,op_name__$1,node,cache_store__$1,input_data__$1,params);
}
}
})():com.wsscode.pathom3.connect.runner.async.invoke_resolver_cached.call(null,env__$1,cache_QMARK_,op_name__$1,resolver,cache_store__$1,input_data__$1,params)
)),(function (error){
return com.wsscode.pathom3.connect.runner.report_resolver_error.call(null,env__$1,node,error);
}));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,response),(function (response__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.validate_response_BANG_.call(null,env__$1,node,response__$1)),(function (response__$2){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(function (){var finish = com.wsscode.misc.time.now_ms.call(null);
return com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env__$1,node,(function (){var G__23090 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-finish-ms","com.wsscode.pathom3.connect.runner/resolver-run-finish-ms",375193860),finish], null);
if(cljs.core.not.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(response__$2))){
return cljs.core.merge.call(null,G__23090,com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env__$1,input_data__$1,response__$2));
} else {
return G__23090;
}
})());
})()),(function (___18777__auto__){
return promesa.protocols._promise.call(null,response__$2);
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
com.wsscode.pathom3.connect.runner.async.run_resolver_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_resolver_node_BANG_(env,node){
if(cljs.core.truth_((function (){var or__5002__auto__ = com.wsscode.pathom3.connect.runner.resolver_already_ran_QMARK_.call(null,env,node);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,node);
}
})())){
return com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_.call(null,env,node);
} else {
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null))),(function (_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node)),(function (env_SINGLEQUOTE_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.invoke_resolver_from_node.call(null,env_SINGLEQUOTE_,node)),(function (p__23091){
var map__23092 = p__23091;
var map__23092__$1 = cljs.core.__destructure_map.call(null,map__23092);
var response = map__23092__$1;
var batch_hold = cljs.core.get.call(null,map__23092__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(cljs.core.truth_(batch_hold)?response:(cljs.core.truth_((function (){var or__5002__auto__ = (!(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),response)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return com.wsscode.pathom3.connect.planner.node_optional_QMARK_.call(null,node);
}
})())?promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_.call(null,env,response)),(function (___18777__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto____$1){
return promesa.protocols._promise.call(null,((cljs.core.not.call(null,(function (){var and__5000__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-resolution-checkpoint?","com.wsscode.pathom3.connect.planner/node-resolution-checkpoint?",1547353457).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__5000__auto__)){
return com.wsscode.pathom3.connect.runner.user_demand_completed_QMARK_.call(null,env);
} else {
return and__5000__auto__;
}
})()))?com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_.call(null,env,node):null));
}));
}));
})):(function (){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

return null;
})()

)));
}));
}));
}));
}));
}));
}
});
com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_ = (function com$wsscode$pathom3$connect$runner$async$run_or_node_BANG__STAR_(p__23094,or_node,nodes,errors){
var map__23095 = p__23094;
var map__23095__$1 = cljs.core.__destructure_map.call(null,map__23095);
var env = map__23095__$1;
var graph = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var choose_path = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","choose-path","com.wsscode.pathom3.connect.runner/choose-path",-251774625),com.wsscode.pathom3.connect.runner.default_choose_path);
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
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))),(function (res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,res);
}));
}));
})),(function (p1__23093_SHARP_){
return (new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709),p1__23093_SHARP_],null));
}))),(function (node_res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(node_res))?node_res:(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(node_res))?com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_.call(null,env,or_node,cljs.core.disj.call(null,nodes,node_id),cljs.core.conj.call(null,errors,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(node_res))):((com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,or_node))?com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","success-path","com.wsscode.pathom3.connect.runner/success-path",1003623091),node_id], null)):com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_.call(null,env,or_node,cljs.core.disj.call(null,nodes,node_id),errors))
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
com.wsscode.pathom3.connect.runner.async.run_or_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_or_node_BANG_(env,p__23096){
var map__23097 = p__23096;
var map__23097__$1 = cljs.core.__destructure_map.call(null,map__23097);
var or_node = map__23097__$1;
var run_or = cljs.core.get.call(null,map__23097__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto__){
return promesa.protocols._promise.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(((!(com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,or_node))))?com.wsscode.pathom3.connect.runner.async.run_or_node_BANG__STAR_.call(null,env,or_node,run_or,cljs.core.PersistentVector.EMPTY):null)),(function (res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(res))?res:((((cljs.core.seq.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(res))) && (cljs.core.not.call(null,com.wsscode.pathom3.connect.runner.or_expected_optional_QMARK_.call(null,env,or_node)))))?com.wsscode.pathom3.connect.runner.handle_or_error.call(null,env,or_node,res):(function (){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

return com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_.call(null,env,or_node);
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
com.wsscode.pathom3.connect.runner.async.run_and_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_and_node_BANG_(p__23098,p__23099){
var map__23100 = p__23098;
var map__23100__$1 = cljs.core.__destructure_map.call(null,map__23100);
var env = map__23100__$1;
var graph = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__23101 = p__23099;
var map__23101__$1 = cljs.core.__destructure_map.call(null,map__23101);
var and_node = map__23101__$1;
var run_and = cljs.core.get.call(null,map__23101__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,and_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto__){
return promesa.protocols._promise.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(function (){var run23104 = promesa.core._STAR_loop_run_fn_STAR_;
var deferred23103 = promesa.core.deferred.call(null);
var loop23102 = (function com$wsscode$pathom3$connect$runner$async$run_and_node_BANG__$_loop23102(params__18817__auto__){
return promesa.core.handle.call(null,promesa.core.then.call(null,promesa.core.all.call(null,params__18817__auto__),(function (p__23105){
var vec__23106 = p__23105;
var xs = cljs.core.nth.call(null,vec__23106,(0),null);
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._promise.call(null,(cljs.core.truth_(xs)?promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,cljs.core.first.call(null,xs)),(function (node_id){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))),(function (node_res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$2){
return promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(node_res))?node_res:(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,xs)], null)],null))));
}));
}));
}));
})):null));
}));
})),(function (res__18818__auto__,err__18819__auto__){
if((!((err__18819__auto__ == null)))){
return promesa.core.reject_BANG_.call(null,deferred23103,err__18819__auto__);
} else {
if(((cljs.core.map_QMARK_.call(null,res__18818__auto__)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(res__18818__auto__),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374))))){
run23104.call(null,(function (){
return com$wsscode$pathom3$connect$runner$async$run_and_node_BANG__$_loop23102.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res__18818__auto__));
}));

return null;
} else {
return promesa.core.resolve_BANG_.call(null,deferred23103,res__18818__auto__);

}
}
}));
});
run23104.call(null,(function (){
return loop23102.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [run_and], null));
}));

return deferred23103;
})()),(function (res){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(res))?res:(function (){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,and_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

return com.wsscode.pathom3.connect.runner.async.run_next_node_BANG_.call(null,env,and_node);
})()
));
}));
}));
})));
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
com.wsscode.pathom3.connect.runner.async.run_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_node_BANG_(env,node){
var G__23109 = com.wsscode.pathom3.connect.planner.node_kind.call(null,node);
var G__23109__$1 = (((G__23109 instanceof cljs.core.Keyword))?G__23109.fqn:null);
switch (G__23109__$1) {
case "com.wsscode.pathom3.connect.planner/node-resolver":
return com.wsscode.pathom3.connect.runner.async.run_resolver_node_BANG_.call(null,env,node);

break;
case "com.wsscode.pathom3.connect.planner/node-and":
return com.wsscode.pathom3.connect.runner.async.run_and_node_BANG_.call(null,env,node);

break;
case "com.wsscode.pathom3.connect.planner/node-or":
return com.wsscode.pathom3.connect.runner.async.run_or_node_BANG_.call(null,env,node);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23109__$1)].join('')));

}
});
com.wsscode.pathom3.connect.runner.async.run_foreign_mutation = (function com$wsscode$pathom3$connect$runner$async$run_foreign_mutation(env,p__23111){
var map__23112 = p__23111;
var map__23112__$1 = cljs.core.__destructure_map.call(null,map__23112);
var ast = map__23112__$1;
var key = cljs.core.get.call(null,map__23112__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var ast__$1 = (function (){var G__23115 = ast;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.dissoc.call(null,G__23115,new cljs.core.Keyword(null,"children","children",-940561982));
} else {
return G__23115;
}
})();
var mutation = com.wsscode.pathom3.connect.indexes.mutation.call(null,env,key);
var map__23113 = com.wsscode.pathom3.connect.operation.operation_config.call(null,mutation);
var map__23113__$1 = cljs.core.__destructure_map.call(null,map__23113);
var dynamic_name = cljs.core.get.call(null,map__23113__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238));
var foreign = com.wsscode.pathom3.connect.indexes.resolver.call(null,env,dynamic_name);
var map__23114 = com.wsscode.pathom3.connect.operation.operation_config.call(null,foreign);
var map__23114__$1 = cljs.core.__destructure_map.call(null,map__23114);
var batch_QMARK_ = cljs.core.get.call(null,map__23114__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317));
var ast__$2 = com.wsscode.pathom3.connect.planner.promote_foreign_ast_children.call(null,ast__$1);
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.operation.protocols._resolve.call(null,foreign,env,(function (){var G__23116 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast__$2], null)], null)], null);
if(cljs.core.truth_(batch_QMARK_)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__23116],null));
} else {
return G__23116;
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
com.wsscode.pathom3.connect.runner.async.invoke_mutation_BANG_ = (function com$wsscode$pathom3$connect$runner$async$invoke_mutation_BANG_(env,p__23119){
var map__23120 = p__23119;
var map__23120__$1 = cljs.core.__destructure_map.call(null,map__23120);
var ast = map__23120__$1;
var key = cljs.core.get.call(null,map__23120__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.indexes.mutation.call(null,env,key)),(function (mutation){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.time.now_ms.call(null)),(function (start){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),start,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-start-ms","com.wsscode.pathom3.connect.runner/mutation-run-start-ms",2017573501),start], null))),(function (_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,promesa.core.catch$.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(cljs.core.truth_(mutation)?(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.operation_config.call(null,mutation)))?com.wsscode.pathom3.connect.runner.async.run_foreign_mutation.call(null,env,ast):com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutate","com.wsscode.pathom3.connect.runner/wrap-mutate",-1277033248),(function (p1__23117_SHARP_,p2__23118_SHARP_){
return com.wsscode.pathom3.connect.operation.protocols._mutate.call(null,mutation,p1__23117_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p2__23118_SHARP_));
}),env,ast)):com.wsscode.pathom3.connect.runner.invoke_not_found_mutation_BANG_.call(null,env,ast,key)));
})),(function (e){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468),com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutation-error","com.wsscode.pathom3.connect.runner/wrap-mutation-error",-1155458602),(function (env__$1,_ast,e__$1){
com.wsscode.pathom3.connect.runner.fail_fast.call(null,env__$1,e__$1);

return e__$1;
}),env,ast,e)], null);
}))),(function (result){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-finish-ms","com.wsscode.pathom3.connect.runner/mutation-run-finish-ms",394220236),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468).cljs$core$IFn$_invoke$arity$1(result))?result:com.wsscode.pathom3.connect.runner.async.process_attr_subquery.call(null,env,cljs.core.PersistentArrayMap.EMPTY,ast,result))),(function (result_SINGLEQUOTE_){
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
com.wsscode.pathom3.connect.runner.async.process_mutations_BANG_ = (function com$wsscode$pathom3$connect$runner$async$process_mutations_BANG_(p__23121){
var map__23122 = p__23121;
var map__23122__$1 = cljs.core.__destructure_map.call(null,map__23122);
var env = map__23122__$1;
var graph = cljs.core.get.call(null,map__23122__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
return com.wsscode.pathom3.connect.runner.async.reduce_async.call(null,(function (_,ast){
return com.wsscode.pathom3.connect.runner.async.invoke_mutation_BANG_.call(null,env,ast);
}),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","mutations","com.wsscode.pathom3.connect.planner/mutations",-1571107042).cljs$core$IFn$_invoke$arity$1(graph));
});
com.wsscode.pathom3.connect.runner.async.run_graph_entity_done = (function com$wsscode$pathom3$connect$runner$async$run_graph_entity_done(env){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholders","com.wsscode.pathom3.connect.planner/placeholders",-1690563362).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744).cljs$core$IFn$_invoke$arity$1(env)))?com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_.call(null,env,com.wsscode.pathom3.connect.runner.placeholder_merge_entity.call(null,env)):null)),(function (___18777__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-entity-ready!","com.wsscode.pathom3.connect.runner/wrap-entity-ready!",-134020323),com.wsscode.pathom3.connect.runner.run_graph_done_BANG_,env));
}));
}));
});
com.wsscode.pathom3.connect.runner.async.run_root_node_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_root_node_BANG_(p__23123){
var map__23124 = p__23123;
var map__23124__$1 = cljs.core.__destructure_map.call(null,map__23124);
var env = map__23124__$1;
var graph = cljs.core.get.call(null,map__23124__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.get_root_node.call(null,graph);
if(cljs.core.truth_(temp__5821__auto__)){
var root = temp__5821__auto__;
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_node_BANG_.call(null,env,root)),(function (p__23125){
var map__23126 = p__23125;
var map__23126__$1 = cljs.core.__destructure_map.call(null,map__23126);
var batch_hold = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(cljs.core.truth_(batch_hold)?(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","nested-waiting?","com.wsscode.pathom3.connect.runner/nested-waiting?",820889396).cljs$core$IFn$_invoke$arity$1(batch_hold))?com.wsscode.misc.refs.gswap_BANG_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-waiting*","com.wsscode.pathom3.connect.runner/batch-waiting*",-950834195).cljs$core$IFn$_invoke$arity$1(env),com.wsscode.misc.coll.vconj,batch_hold):com.wsscode.misc.refs.gswap_BANG_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env),cljs.core.update,cljs.core.select_keys.call(null,batch_hold,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210)], null)),com.wsscode.misc.coll.vconj,batch_hold)):com.wsscode.pathom3.connect.runner.async.run_graph_entity_done.call(null,env)));
}));
}));
}));
} else {
return com.wsscode.pathom3.connect.runner.async.run_graph_entity_done.call(null,env);
}
});
/**
 * Run the root node of the graph. As resolvers run, the result will be add to the
 *   entity cache tree.
 */
com.wsscode.pathom3.connect.runner.async.run_graph_BANG__STAR_ = (function com$wsscode$pathom3$connect$runner$async$run_graph_BANG__STAR_(p__23127){
var map__23128 = p__23127;
var map__23128__$1 = cljs.core.__destructure_map.call(null,map__23128);
var env = map__23128__$1;
var graph = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","source-entity","com.wsscode.pathom3.connect.runner/source-entity",1992877853),com.wsscode.pathom3.entity_tree.entity.call(null,env));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.process_mutations_BANG_.call(null,env__$1)),(function (___18777__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(function (){var temp__5821__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nested-process","com.wsscode.pathom3.connect.planner/nested-process",-35632382).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(temp__5821__auto__)){
var nested = temp__5821__auto__;
return com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_.call(null,env__$1,cljs.core.select_keys.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env__$1),nested));
} else {
return null;
}
})()),(function (___18777__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(function (){var temp__5821__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(temp__5821__auto__)){
var idents = temp__5821__auto__;
return com.wsscode.pathom3.connect.runner.async.process_idents_BANG_.call(null,env__$1,idents);
} else {
return null;
}
})()),(function (___18777__auto____$2){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_root_node_BANG_.call(null,env__$1)),(function (___18777__auto____$3){
return promesa.protocols._promise.call(null,env__$1);
}));
}));
}));
}));
}));
});
com.wsscode.pathom3.connect.runner.async.plan_and_run_BANG_ = (function com$wsscode$pathom3$connect$runner$async$plan_and_run_BANG_(env,ast_or_graph,entity_tree_STAR_){
var graph = (cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574).cljs$core$IFn$_invoke$arity$1(ast_or_graph))?ast_or_graph:(function (){var start_plan = com.wsscode.misc.time.now_ms.call(null);
var plan = com.wsscode.pathom3.connect.planner.compute_run_graph.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast_or_graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,cljs.core.deref.call(null,entity_tree_STAR_))));
var finish_plan = com.wsscode.misc.time.now_ms.call(null);
return cljs.core.assoc.call(null,plan,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-start-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-start-ms",1143271592),start_plan,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-finish-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-finish-ms",-1603607227),finish_plan);
})());
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744),graph,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),entity_tree_STAR_);
try{var res__22435__auto__ = (cljs.core.truth_(com.wsscode.pathom3.connect.runner.runnable_graph_QMARK_.call(null,graph))?com.wsscode.pathom3.connect.runner.async.run_graph_BANG__STAR_.call(null,env__$1):(function (){
com.wsscode.pathom3.connect.runner.async.run_graph_entity_done.call(null,env__$1);

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
}catch (e23129){var e = e23129;
throw e;
}});
com.wsscode.pathom3.connect.runner.async.invoke_batch_block = (function com$wsscode$pathom3$connect$runner$async$invoke_batch_block(resolver,batch_env,batch_op,input_groups,inputs){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921).cljs$core$IFn$_invoke$arity$1(batch_env))){
return promesa.core.catch$.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,batch_env,inputs));
})),(function (p1__23130_SHARP_){
return com.wsscode.pathom3.connect.runner.mark_batch_block_errors.call(null,p1__23130_SHARP_,batch_env,batch_op,input_groups,inputs);
}));
} else {
return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,batch_env,inputs);
}
});
com.wsscode.pathom3.connect.runner.async.invoke_async_maybe_split_batches = (function com$wsscode$pathom3$connect$runner$async$invoke_async_maybe_split_batches(max_size,resolver,batch_env,batch_op,input_groups,inputs){
if(cljs.core.truth_(max_size)){
return com.wsscode.pathom3.connect.runner.async.reduce_async.call(null,(function com$wsscode$pathom3$connect$runner$async$invoke_async_maybe_split_batches_$_reduce_async_blocks(acc,inputs__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.invoke_batch_block.call(null,resolver,batch_env,batch_op,input_groups,inputs__$1)),(function (result){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,cljs.core.into.call(null,acc,result));
}));
}));
}));
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.call(null,max_size,inputs));
} else {
return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,batch_env,inputs);
}
});
com.wsscode.pathom3.connect.runner.async.run_batches_pending_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_batches_pending_BANG_(env){
var batches_STAR_ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env);
var batches = cljs.core.deref.call(null,batches_STAR_);
cljs.core.reset_BANG_.call(null,batches_STAR_,cljs.core.PersistentArrayMap.EMPTY);

return com.wsscode.pathom3.connect.runner.async.reduce_async.call(null,(function (_,p__23132){
var vec__23133 = p__23132;
var map__23136 = cljs.core.nth.call(null,vec__23133,(0),null);
var map__23136__$1 = cljs.core.__destructure_map.call(null,map__23136);
var batch_op = cljs.core.get.call(null,map__23136__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var batch_items = cljs.core.nth.call(null,vec__23133,(1),null);
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.indexes.resolver.call(null,env,batch_op)),(function (resolver){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.batch_group_input_groups.call(null,batch_items)),(function (input_groups){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.batch_group_inputs.call(null,batch_items)),(function (inputs){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.coll.update_if.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,batch_items)),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),(function (p1__23131_SHARP_){
var G__23137 = p1__23131_SHARP_;
if(cljs.core.seq.call(null,p1__23131_SHARP_)){
return cljs.core.pop.call(null,G__23137);
} else {
return G__23137;
}
}))),(function (batch_env){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch-chunk-size","com.wsscode.pathom3.connect.operation/batch-chunk-size",-1412106301).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.operation_config.call(null,resolver))),(function (max_size){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.time.now_ms.call(null)),(function (start){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,promesa.core.catch$.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.invoke_async_maybe_split_batches.call(null,max_size,resolver,batch_env,batch_op,input_groups,inputs));
})),(function (e){
return com.wsscode.pathom3.connect.runner.mark_batch_errors.call(null,e,batch_env,batch_op,batch_items);
}))),(function (responses){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.misc.time.now_ms.call(null)),(function (finish){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,((com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),responses))?(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921).cljs$core$IFn$_invoke$arity$1(env))?com.wsscode.pathom3.connect.runner.async.reduce_async.call(null,(function (___$1,p__23138){
var map__23139 = p__23138;
var map__23139__$1 = cljs.core.__destructure_map.call(null,map__23139);
var env_SINGLEQUOTE_ = cljs.core.get.call(null,map__23139__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node = cljs.core.get.call(null,map__23139__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_graph_entity_done.call(null,env_SINGLEQUOTE_)),(function (___18777__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE_,node));
}));
}));
}),null,batch_items):null):(function (){
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,inputs),cljs.core.count.call(null,responses))){
throw cljs.core.ex_info.call(null,"Batch results must be a sequence and have the same length as the inputs.",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return com.wsscode.pathom3.connect.runner.async.reduce_async.call(null,(function (___$1,p__23140){
var vec__23141 = p__23140;
var map__23144 = cljs.core.nth.call(null,vec__23141,(0),null);
var map__23144__$1 = cljs.core.__destructure_map.call(null,map__23144);
var batch_item = map__23144__$1;
var env_SINGLEQUOTE_ = cljs.core.get.call(null,map__23144__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node = cljs.core.get.call(null,map__23144__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var node_resolver_input = cljs.core.get.call(null,map__23144__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var response = cljs.core.nth.call(null,vec__23141,(1),null);
com.wsscode.pathom3.connect.runner.cache_batch_item.call(null,batch_item,batch_op,response);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE_,node,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),start,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),finish], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env_SINGLEQUOTE_,node_resolver_input,response)));

return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.merge_resolver_response_BANG_.call(null,env_SINGLEQUOTE_,response)),(function (___18777__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE_,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null))),(function (___18777__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_root_node_BANG_.call(null,env_SINGLEQUOTE_)),(function (___18777__auto____$2){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE_,node));
}));
}));
}));
}));
}),null,com.wsscode.pathom3.connect.runner.combine_inputs_with_responses.call(null,input_groups,inputs,responses));
})()
));
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
}),null,batches);
});
com.wsscode.pathom3.connect.runner.async.run_batches_waiting_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_batches_waiting_BANG_(env){
var waits_STAR_ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-waiting*","com.wsscode.pathom3.connect.runner/batch-waiting*",-950834195).cljs$core$IFn$_invoke$arity$1(env);
var waits = com.wsscode.pathom3.connect.runner.sort_waiting_by_depth.call(null,cljs.core.deref.call(null,waits_STAR_));
cljs.core.reset_BANG_.call(null,waits_STAR_,cljs.core.PersistentVector.EMPTY);

return com.wsscode.pathom3.connect.runner.async.reduce_async.call(null,(function (_,p__23145){
var map__23146 = p__23145;
var map__23146__$1 = cljs.core.__destructure_map.call(null,map__23146);
var env_SINGLEQUOTE_ = cljs.core.get.call(null,map__23146__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
com.wsscode.pathom3.entity_tree.reset_entity_BANG_.call(null,env_SINGLEQUOTE_,cljs.core.get_in.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_)));

return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_root_node_BANG_.call(null,env_SINGLEQUOTE_)),(function (___18777__auto__){
return promesa.protocols._promise.call(null,((com.wsscode.pathom3.path.root_QMARK_.call(null,env_SINGLEQUOTE_))?null:com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,cljs.core.assoc_in,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_),com.wsscode.pathom3.entity_tree.entity.call(null,env_SINGLEQUOTE_))));
}));
}));
}),null,waits);
});
com.wsscode.pathom3.connect.runner.async.run_batches_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_batches_BANG_(env){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_batches_pending_BANG_.call(null,env)),(function (___18777__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.run_batches_waiting_BANG_.call(null,env));
}));
}));
});
com.wsscode.pathom3.connect.runner.async.run_graph_impl_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_graph_impl_BANG_(env,ast_or_graph,entity_tree_STAR_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.setup_runner_env.call(null,env,entity_tree_STAR_,cljs.core.atom)),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.async.plan_and_run_BANG_.call(null,env__$1,ast_or_graph,entity_tree_STAR_)),(function (env__$2){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(function (){try{var res__22435__auto__ = promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,((com.wsscode.pathom3.path.root_QMARK_.call(null,env__$2))?(function (){var run23150 = promesa.core._STAR_loop_run_fn_STAR_;
var deferred23149 = promesa.core.deferred.call(null);
var loop23148 = (function com$wsscode$pathom3$connect$runner$async$run_graph_impl_BANG__$_loop23148(params__18817__auto__){
return promesa.core.handle.call(null,promesa.core.then.call(null,promesa.core.all.call(null,params__18817__auto__),(function (p__23151){
var vec__23152 = p__23151;
var _ = cljs.core.nth.call(null,vec__23152,(0),null);
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto____$2){
return promesa.protocols._promise.call(null,((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env__$2))))?(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.runner.async.run_batches_BANG_.call(null,env__$2)], null)],null)):null));
}));
})),(function (res__18818__auto__,err__18819__auto__){
if((!((err__18819__auto__ == null)))){
return promesa.core.reject_BANG_.call(null,deferred23149,err__18819__auto__);
} else {
if(((cljs.core.map_QMARK_.call(null,res__18818__auto__)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(res__18818__auto__),new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374))))){
run23150.call(null,(function (){
return com$wsscode$pathom3$connect$runner$async$run_graph_impl_BANG__$_loop23148.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res__18818__auto__));
}));

return null;
} else {
return promesa.core.resolve_BANG_.call(null,deferred23149,res__18818__auto__);

}
}
}));
});
run23150.call(null,(function (){
return loop23148.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.resolved.call(null,null)], null));
}));

return deferred23149;
})():null)),(function (___18777__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.include_meta_stats.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env__$2),env__$2));
}));
}));
if(promesa.core.promise_QMARK_.call(null,res__22435__auto__)){
return promesa.core.catch$.call(null,res__22435__auto__,(function (e){
throw e;
}));
} else {
return res__22435__auto__;
}
}catch (e23147){var e = e23147;
throw e;
}})());
}));
}));
}));
}));
});
/**
 * Plan and execute a request, given an environment (with indexes), the request AST
 *   and the entity-tree*.
 */
com.wsscode.pathom3.connect.runner.async.run_graph_BANG_ = (function com$wsscode$pathom3$connect$runner$async$run_graph_BANG_(env,ast_or_graph,entity_tree_STAR_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.runner.run_graph_with_plugins.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner.async","async-runner?","com.wsscode.pathom3.connect.runner.async/async-runner?",961718140),true),ast_or_graph,entity_tree_STAR_,com.wsscode.pathom3.connect.runner.async.run_graph_impl_BANG_));
}));
}));
}));
});

//# sourceMappingURL=async.js.map
