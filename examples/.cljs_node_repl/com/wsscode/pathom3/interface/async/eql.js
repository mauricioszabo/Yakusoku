// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.interface$.async.eql');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.pathom3.connect.foreign');
goog.require('com.wsscode.pathom3.connect.indexes');
goog.require('com.wsscode.pathom3.connect.runner');
goog.require('com.wsscode.pathom3.connect.runner.async');
goog.require('com.wsscode.pathom3.connect.runner.parallel');
goog.require('com.wsscode.pathom3.entity_tree');
goog.require('com.wsscode.pathom3.error');
goog.require('com.wsscode.pathom3.format.eql');
goog.require('com.wsscode.pathom3.interface$.eql');
goog.require('com.wsscode.pathom3.plugin');
goog.require('edn_query_language.core');
goog.require('promesa.core');
com.wsscode.pathom3.interface$.async.eql.process_ast_STAR_ = (function com$wsscode$pathom3$interface$async$eql$process_ast_STAR_(env,ast){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,cljs.core.get.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),com.wsscode.pathom3.entity_tree.create_entity.call(null,cljs.core.PersistentArrayMap.EMPTY))),(function (ent_tree_STAR_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.interface.async.eql","parallel?","com.wsscode.pathom3.interface.async.eql/parallel?",-1509873192).cljs$core$IFn$_invoke$arity$1(env))?com.wsscode.pathom3.connect.runner.parallel.run_graph_BANG_.call(null,env,ast,ent_tree_STAR_):com.wsscode.pathom3.connect.runner.async.run_graph_BANG_.call(null,env,ast,ent_tree_STAR_))),(function (result){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(function (){var _LT__GT_ = result;
return com.wsscode.pathom3.format.eql.map_select_ast.call(null,com.wsscode.pathom3.interface$.eql.select_ast_env.call(null,env),_LT__GT_,ast);
})());
}));
}));
}));
}));
});
com.wsscode.pathom3.interface$.async.eql.process_ast = (function com$wsscode$pathom3$interface$async$eql$process_ast(env,ast){
var source_entity = (function (){var or__5002__auto__ = com.wsscode.pathom3.entity_tree.entity.call(null,env);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return promesa.core.catch$.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.plugin.run_with_plugins.call(null,env__$1,new cljs.core.Keyword("com.wsscode.pathom3.interface.eql","wrap-process-ast","com.wsscode.pathom3.interface.eql/wrap-process-ast",-300125751),com.wsscode.pathom3.interface$.async.eql.process_ast_STAR_,env__$1,ast));
}));
}));
})),(function (e){
throw com.wsscode.pathom3.interface$.eql.process_error.call(null,env,ast,source_entity,e);
}));
});
/**
 * Evaluate EQL expression using async runner.
 * 
 *   This interface allows you to request a specific data shape to Pathom and get
 *   the response as a map with all data combined.
 * 
 *   This is efficient for large queries, given Pathom can make a plan considering
 *   the whole request at once (different from Smart Map, which always plans for one
 *   attribute at a time).
 * 
 *   At minimum you need to build an index to use this.
 * 
 *    (p.eql/process (pci/register some-resolvers)
 *      [:eql :request])
 * 
 *   By default, processing will start with a blank entity tree. You can override this by
 *   sending an entity tree as the second argument in the 3-arity version of this fn:
 * 
 *    (p.eql/process (pci/register some-resolvers)
 *      {:eql "initial data"}
 *      [:eql :request])
 * 
 *   For more options around processing check the docs on the connect runner.
 */
com.wsscode.pathom3.interface$.async.eql.process = (function com$wsscode$pathom3$interface$async$eql$process(var_args){
var G__23443 = arguments.length;
switch (G__23443) {
case 2:
return com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$2 = (function (env,tx){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.interface$.async.eql.process_ast.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),tx),edn_query_language.core.query__GT_ast.call(null,tx)));
}));
}));
}));
}));

(com.wsscode.pathom3.interface$.async.eql.process.cljs$core$IFn$_invoke$arity$3 = (function (env,entity,tx){
if(cljs.core.map_QMARK_.call(null,entity)){
} else {
throw (new Error(["Assert failed: ","Entity data must be a map.","\n","(map? entity)"].join('')));
}

return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.interface$.async.eql.process_ast.call(null,com.wsscode.pathom3.entity_tree.with_entity.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),tx),entity),edn_query_language.core.query__GT_ast.call(null,tx)));
}));
}));
}));
}));

(com.wsscode.pathom3.interface$.async.eql.process.cljs$lang$maxFixedArity = 3);

/**
 * Similar to process, but returns a single value instead of a map.
 * 
 *   This is a convenience method to read a single attribute.
 * 
 *   Simplest usage:
 *   ```clojure
 *   (p.eql/process-one env :foo)
 *   ```
 * 
 *   Same as process, you can send initial data:
 *   ```clojure
 *   (p.eql/process-one env {:data "here"} :foo)
 *   ```
 * 
 *   You can also use joins and param expressions:
 *   ```clojure
 *   (p.eql/process-one env {:join [:sub-query]})
 *   (p.eql/process-one env '(:param {:expr "sion"}))
 *   ```
 *   
 */
com.wsscode.pathom3.interface$.async.eql.process_one = (function com$wsscode$pathom3$interface$async$eql$process_one(var_args){
var G__23446 = arguments.length;
switch (G__23446) {
case 2:
return com.wsscode.pathom3.interface$.async.eql.process_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.interface$.async.eql.process_one.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.interface$.async.eql.process_one.cljs$core$IFn$_invoke$arity$2 = (function (env,attr){
return com.wsscode.pathom3.interface$.async.eql.process_one.call(null,env,cljs.core.PersistentArrayMap.EMPTY,attr);
}));

(com.wsscode.pathom3.interface$.async.eql.process_one.cljs$core$IFn$_invoke$arity$3 = (function (env,entity,attr){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.interface$.async.eql.process.call(null,env,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null))),(function (response){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(function (){var temp__5825__auto__ = (function (){var G__23447 = response;
var G__23447__$1 = (((G__23447 == null))?null:cljs.core.first.call(null,G__23447));
if((G__23447__$1 == null)){
return null;
} else {
return cljs.core.val.call(null,G__23447__$1);
}
})();
if((temp__5825__auto__ == null)){
return null;
} else {
var val = temp__5825__auto__;
var G__23448 = val;
if(cljs.core.coll_QMARK_.call(null,val)){
return cljs.core.vary_meta.call(null,G__23448,com.wsscode.misc.coll.merge_defaults,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,response))], null));
} else {
return G__23448;
}
}
})());
}));
}));
}));
}));

(com.wsscode.pathom3.interface$.async.eql.process_one.cljs$lang$maxFixedArity = 3);

/**
 * Returns a function that wraps the environment. When exposing Pathom to some external
 *   system, this is the recommended way to do it. The format here makes your API compatible
 *   with Pathom Foreign process, which allows the integration of distributed environments.
 * 
 *   When calling the remote interface the user can send a query or a map containing the
 *   query and the initial entity data. This map is open and you can use as a way to extend
 *   the API.
 * 
 *   Boundary interface:
 * 
 *   ([env-ext request])
 *   ([request])
 * 
 *   Request is one of:
 * 
 *   1. An EQL request
 *   2. A map, supported keys:
 *    :pathom/eql
 *    :pathom/ast
 *    :pathom/entity
 *    :pathom/include-stats?
 *    :pathom/lenient-mode?
 * 
 *   Env ext can be either a map to merge in the original env, or a function that transforms
 *   the env.
 */
com.wsscode.pathom3.interface$.async.eql.boundary_interface = (function com$wsscode$pathom3$interface$async$eql$boundary_interface(env){
var env_SINGLEQUOTE_ = promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,com.wsscode.pathom3.connect.indexes.register.call(null,env__$1,com.wsscode.pathom3.connect.foreign.foreign_indexes_resolver));
}));
}));
}));
return (function() {
var com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal = null;
var com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__1 = (function (input){
return com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal.call(null,null,input);
});
var com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__2 = (function (env_extension,input){
return promesa.core.catch$.call(null,promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18793__auto__){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env),(function (env__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,com.wsscode.pathom3.interface$.eql.normalize_input.call(null,env__$1,input)),(function (p__23450){
var map__23451 = p__23450;
var map__23451__$1 = cljs.core.__destructure_map.call(null,map__23451);
var request = map__23451__$1;
var eql = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword("pathom","eql","pathom/eql",302093908));
var entity = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword("pathom","entity","pathom/entity",541245087));
var ast = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857));
var include_stats_QMARK_ = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword("pathom","include-stats?","pathom/include-stats?",1839648439));
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env_SINGLEQUOTE_),(function (env_SINGLEQUOTE___$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,env_extension),(function (env_extension__$1){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,cljs.core.assoc.call(null,com.wsscode.pathom3.interface$.eql.extend_env.call(null,com.wsscode.pathom3.interface$.eql.boundary_env.call(null,env_SINGLEQUOTE___$1,input),env_extension__$1),new cljs.core.Keyword("com.wsscode.pathom3.interface.async.eql","source-request","com.wsscode.pathom3.interface.async.eql/source-request",416859869),request,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","omit-run-stats?","com.wsscode.pathom3.connect.runner/omit-run-stats?",2065057485),cljs.core.not.call(null,include_stats_QMARK_))),(function (env_SINGLEQUOTE___$2){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,(function (){var or__5002__auto__ = entity;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),(function (entity_SINGLEQUOTE_){
return promesa.protocols._bind.call(null,promesa.protocols._promise.call(null,null),(function (___18778__auto__){
return promesa.protocols._promise.call(null,(cljs.core.truth_(ast)?com.wsscode.pathom3.interface$.async.eql.process_ast.call(null,com.wsscode.pathom3.entity_tree.with_entity.call(null,env_SINGLEQUOTE___$2,entity_SINGLEQUOTE_),ast):com.wsscode.pathom3.interface$.async.eql.process.call(null,env_SINGLEQUOTE___$2,entity_SINGLEQUOTE_,(function (){var or__5002__auto__ = eql;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("pathom","tx","pathom/tx",1467758675).cljs$core$IFn$_invoke$arity$1(request);
}
})())));
}));
}));
}));
}));
}));
}));
}));
})),com.wsscode.pathom3.error.datafy_processor_error);
});
com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal = function(env_extension,input){
switch(arguments.length){
case 1:
return com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__1.call(this,env_extension);
case 2:
return com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__2.call(this,env_extension,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__1;
com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal__2;
return com$wsscode$pathom3$interface$async$eql$boundary_interface_$_boundary_interface_internal;
})()
});

//# sourceMappingURL=eql.js.map
