// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.interface$.eql');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.pathom3.connect.foreign');
goog.require('com.wsscode.pathom3.connect.indexes');
goog.require('com.wsscode.pathom3.connect.runner');
goog.require('com.wsscode.pathom3.entity_tree');
goog.require('com.wsscode.pathom3.error');
goog.require('com.wsscode.pathom3.format.eql');
goog.require('com.wsscode.pathom3.plugin');
goog.require('edn_query_language.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pathom","eql","pathom/eql",302093908),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pathom","entity","pathom/entity",541245087),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pathom","lenient-mode?","pathom/lenient-mode?",1068946287),new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921),new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921));
com.wsscode.pathom3.interface$.eql.select_ast_env = (function com$wsscode$pathom3$interface$eql$select_ast_env(p__23177){
var map__23178 = p__23177;
var map__23178__$1 = cljs.core.__destructure_map.call(null,map__23178);
var env = map__23178__$1;
var lenient_mode_QMARK_ = cljs.core.get.call(null,map__23178__$1,new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921));
var G__23179 = env;
if(cljs.core.truth_(lenient_mode_QMARK_)){
return cljs.core.update.call(null,G__23179,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","map-select-include","com.wsscode.pathom3.format.eql/map-select-include",-1328680889),com.wsscode.misc.coll.sconj,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attribute-errors","com.wsscode.pathom3.connect.runner/attribute-errors",723532527));
} else {
return G__23179;
}
});
com.wsscode.pathom3.interface$.eql.process_ast_STAR_ = (function com$wsscode$pathom3$interface$eql$process_ast_STAR_(env,ast){
var ent_tree_STAR_ = cljs.core.get.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),com.wsscode.pathom3.entity_tree.create_entity.call(null,cljs.core.PersistentArrayMap.EMPTY));
var result = com.wsscode.pathom3.connect.runner.run_graph_BANG_.call(null,env,ast,ent_tree_STAR_);
var _LT__GT_ = result;
return com.wsscode.pathom3.format.eql.map_select_ast.call(null,com.wsscode.pathom3.interface$.eql.select_ast_env.call(null,env),_LT__GT_,ast);
});
com.wsscode.pathom3.interface$.eql.string_cap = (function com$wsscode$pathom3$interface$eql$string_cap(s,max_size){
if((cljs.core.count.call(null,s) > max_size)){
return [cljs.core.subs.call(null,s,(0),(max_size - (3))),"..."].join('');
} else {
return s;
}
});
com.wsscode.pathom3.interface$.eql.process_error = (function com$wsscode$pathom3$interface$eql$process_error(env,ast,source_entity,error){
var entity = (function (){var or__5002__auto__ = com.wsscode.pathom3.entity_tree.entity.call(null,env);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var tx = edn_query_language.core.ast__GT_query.call(null,ast);
return cljs.core.ex_info.call(null,["Error while processing request ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.interface$.eql.string_cap.call(null,cljs.core.pr_str.call(null,tx),(40)))," for entity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.interface$.eql.string_cap.call(null,cljs.core.pr_str.call(null,source_entity),(40)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null),error);
});
com.wsscode.pathom3.interface$.eql.process_ast = (function com$wsscode$pathom3$interface$eql$process_ast(env,ast){
var source_entity = (function (){var or__5002__auto__ = com.wsscode.pathom3.entity_tree.entity.call(null,env);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
try{return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.interface.eql","wrap-process-ast","com.wsscode.pathom3.interface.eql/wrap-process-ast",-300125751),com.wsscode.pathom3.interface$.eql.process_ast_STAR_,env,ast);
}catch (e23180){var e = e23180;
throw com.wsscode.pathom3.interface$.eql.process_error.call(null,env,ast,source_entity,e);
}});
/**
 * Evaluate EQL expression.
 * 
 *   This interface allows you to request a specific data shape to Pathom and get
 *   the response as a map with all data combined.
 * 
 *   This is efficient for large queries, given Pathom can make a plan considering
 *   the whole request at once (different from Smart Map, which always plans for one
 *   attribute at a time).
 * 
 *   At minimum, you need to build an index to use this.
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
 *   For more options around processing, check the docs on the connect runner.
 */
com.wsscode.pathom3.interface$.eql.process = (function com$wsscode$pathom3$interface$eql$process(var_args){
var G__23182 = arguments.length;
switch (G__23182) {
case 2:
return com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$2 = (function (env,tx){
return com.wsscode.pathom3.interface$.eql.process_ast.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),tx),edn_query_language.core.query__GT_ast.call(null,tx));
}));

(com.wsscode.pathom3.interface$.eql.process.cljs$core$IFn$_invoke$arity$3 = (function (env,entity,tx){
if(cljs.core.map_QMARK_.call(null,entity)){
} else {
throw (new Error(["Assert failed: ","Entity data must be a map.","\n","(map? entity)"].join('')));
}

return com.wsscode.pathom3.interface$.eql.process_ast.call(null,com.wsscode.pathom3.entity_tree.with_entity.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),tx),entity),edn_query_language.core.query__GT_ast.call(null,tx));
}));

(com.wsscode.pathom3.interface$.eql.process.cljs$lang$maxFixedArity = 3);

/**
 * Similar to `process`, but returns a single value instead of a map.
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
 *   If the value returned supports meta, it will have the run stats meta from the root
 *   entity.
 *   
 */
com.wsscode.pathom3.interface$.eql.process_one = (function com$wsscode$pathom3$interface$eql$process_one(var_args){
var G__23185 = arguments.length;
switch (G__23185) {
case 2:
return com.wsscode.pathom3.interface$.eql.process_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.interface$.eql.process_one.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.interface$.eql.process_one.cljs$core$IFn$_invoke$arity$2 = (function (env,attr){
return com.wsscode.pathom3.interface$.eql.process_one.call(null,env,cljs.core.PersistentArrayMap.EMPTY,attr);
}));

(com.wsscode.pathom3.interface$.eql.process_one.cljs$core$IFn$_invoke$arity$3 = (function (env,entity,attr){
var response = com.wsscode.pathom3.interface$.eql.process.call(null,env,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var temp__5825__auto__ = (function (){var G__23186 = response;
var G__23186__$1 = (((G__23186 == null))?null:cljs.core.first.call(null,G__23186));
if((G__23186__$1 == null)){
return null;
} else {
return cljs.core.val.call(null,G__23186__$1);
}
})();
if((temp__5825__auto__ == null)){
return null;
} else {
var val = temp__5825__auto__;
var G__23187 = val;
if(cljs.core.coll_QMARK_.call(null,val)){
return cljs.core.vary_meta.call(null,G__23187,com.wsscode.misc.coll.merge_defaults,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,response))], null));
} else {
return G__23187;
}
}
}));

(com.wsscode.pathom3.interface$.eql.process_one.cljs$lang$maxFixedArity = 3);

/**
 * Works like process, but none of the original entity data is filtered out.
 */
com.wsscode.pathom3.interface$.eql.satisfy = (function com$wsscode$pathom3$interface$eql$satisfy(env,entity,tx){
return cljs.core.merge.call(null,entity,com.wsscode.pathom3.interface$.eql.process.call(null,env,entity,tx));
});
/**
 * Normalize a remote interface input. In the case of vector, it makes a map.
 *   Otherwise, returns as is.
 * 
 *   IMPORTANT: `:pathom/tx` is deprecated, and it's going to be dropped, if you are using it, please
 *   replace it with `:pathom/eql` to avoid breakages in the future.
 */
com.wsscode.pathom3.interface$.eql.normalize_input = (function com$wsscode$pathom3$interface$eql$normalize_input(env,input){
var G__23189 = ((cljs.core.vector_QMARK_.call(null,input))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pathom","eql","pathom/eql",302093908),input,new cljs.core.Keyword("pathom","entity","pathom/entity",541245087),cljs.core.PersistentArrayMap.EMPTY], null):input);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword("pathom","lenient-mode?","pathom/lenient-mode?",1068946287).cljs$core$IFn$_invoke$arity$1(input);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pathom","include-stats?","pathom/include-stats?",1839648439),true], null),G__23189);
} else {
return G__23189;
}
});
com.wsscode.pathom3.interface$.eql.extend_env = (function com$wsscode$pathom3$interface$eql$extend_env(source_env,env_extension){
if(cljs.core.fn_QMARK_.call(null,env_extension)){
return env_extension.call(null,source_env);
} else {
return cljs.core.merge.call(null,source_env,env_extension);
}
});
com.wsscode.pathom3.interface$.eql.boundary_env = (function com$wsscode$pathom3$interface$eql$boundary_env(env,request){
var temp__5821__auto__ = cljs.core.find.call(null,request,new cljs.core.Keyword("pathom","lenient-mode?","pathom/lenient-mode?",1068946287));
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
return cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921),cljs.core.val.call(null,x));
} else {
return env;
}
});
/**
 * Returns a function that wraps the environment. When exposing Pathom to some external
 *   system, this is the recommended way to do it. The format here makes your API compatible
 *   with a Pathom Foreign process, which allows the integration of distributed environments.
 * 
 *   When calling the remote interface, the user can send a query or a map containing the
 *   query and the initial entity data. This map is open, and you can use as a way to extend
 *   the API.
 * 
 *   Boundary interface:
 * 
 *   ([env-ext request])
 *   ([request])
 * 
 *   Request is one of:
 * 
 *   1. EQL request
 *   2. A map, supported keys:
 *    :pathom/eql
 *    :pathom/ast
 *    :pathom/entity
 *    :pathom/include-stats?
 *    :pathom/lenient-mode?
 * 
 *   Env ext can be either a map to merge in the original env, or a function that transforms
 *   the env.
 *   
 */
com.wsscode.pathom3.interface$.eql.boundary_interface = (function com$wsscode$pathom3$interface$eql$boundary_interface(env){
var env_SINGLEQUOTE_ = com.wsscode.pathom3.connect.indexes.register.call(null,env,com.wsscode.pathom3.connect.foreign.foreign_indexes_resolver);
return (function() {
var com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal = null;
var com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__1 = (function (request){
return com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal.call(null,null,request);
});
var com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__2 = (function (env_extension,request){
var map__23190 = com.wsscode.pathom3.interface$.eql.normalize_input.call(null,env,request);
var map__23190__$1 = cljs.core.__destructure_map.call(null,map__23190);
var request_SINGLEQUOTE_ = map__23190__$1;
var eql = cljs.core.get.call(null,map__23190__$1,new cljs.core.Keyword("pathom","eql","pathom/eql",302093908));
var entity = cljs.core.get.call(null,map__23190__$1,new cljs.core.Keyword("pathom","entity","pathom/entity",541245087));
var ast = cljs.core.get.call(null,map__23190__$1,new cljs.core.Keyword("pathom","ast","pathom/ast",-211527857));
var include_stats_QMARK_ = cljs.core.get.call(null,map__23190__$1,new cljs.core.Keyword("pathom","include-stats?","pathom/include-stats?",1839648439));
var env_SINGLEQUOTE___$1 = cljs.core.assoc.call(null,com.wsscode.pathom3.interface$.eql.extend_env.call(null,com.wsscode.pathom3.interface$.eql.boundary_env.call(null,env_SINGLEQUOTE_,request),env_extension),new cljs.core.Keyword("com.wsscode.pathom3.interface.eql","source-request","com.wsscode.pathom3.interface.eql/source-request",-2143815025),request_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","omit-run-stats?","com.wsscode.pathom3.connect.runner/omit-run-stats?",2065057485),cljs.core.not.call(null,include_stats_QMARK_));
var entity_SINGLEQUOTE_ = (function (){var or__5002__auto__ = entity;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
try{if(cljs.core.truth_(ast)){
return com.wsscode.pathom3.interface$.eql.process_ast.call(null,com.wsscode.pathom3.entity_tree.with_entity.call(null,env_SINGLEQUOTE___$1,entity_SINGLEQUOTE_),ast);
} else {
return com.wsscode.pathom3.interface$.eql.process.call(null,env_SINGLEQUOTE___$1,entity_SINGLEQUOTE_,(function (){var or__5002__auto__ = eql;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("pathom","tx","pathom/tx",1467758675).cljs$core$IFn$_invoke$arity$1(request_SINGLEQUOTE_);
}
})());
}
}catch (e23191){var err = e23191;
return com.wsscode.pathom3.error.datafy_processor_error.call(null,err);
}});
com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal = function(env_extension,request){
switch(arguments.length){
case 1:
return com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__1.call(this,env_extension);
case 2:
return com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__2.call(this,env_extension,request);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__1;
com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal__2;
return com$wsscode$pathom3$interface$eql$boundary_interface_$_boundary_interface_internal;
})()
});

//# sourceMappingURL=eql.js.map
