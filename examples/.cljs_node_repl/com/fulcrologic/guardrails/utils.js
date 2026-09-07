// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.fulcrologic.guardrails.utils');
goog.require('cljs.core');
goog.require('clojure.walk');
com.fulcrologic.guardrails.utils.cljs_env_QMARK_ = (function com$fulcrologic$guardrails$utils$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
com.fulcrologic.guardrails.utils.get_ns_meta = (function com$fulcrologic$guardrails$utils$get_ns_meta(env){
if(com.fulcrologic.guardrails.utils.cljs_env_QMARK_.call(null,env)){
var or__5002__auto__ = cljs.core.meta.call(null,cljs.core._STAR_ns_STAR_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__1718 = env;
var G__1718__$1 = (((G__1718 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__1718));
if((G__1718__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(G__1718__$1);
}
}
} else {
return cljs.core.meta.call(null,cljs.core._STAR_ns_STAR_);
}
});
com.fulcrologic.guardrails.utils.get_ns_name = (function com$fulcrologic$guardrails$utils$get_ns_name(env){
if(com.fulcrologic.guardrails.utils.cljs_env_QMARK_.call(null,env)){
var or__5002__auto__ = cljs.core._STAR_ns_STAR_.name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__1719 = env;
var G__1719__$1 = (((G__1719 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__1719));
if((G__1719__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__1719__$1);
}
}
} else {
return cljs.core._STAR_ns_STAR_.name;
}
});
com.fulcrologic.guardrails.utils.clj__GT_cljs = (function com$fulcrologic$guardrails$utils$clj__GT_cljs(var_args){
var G__1722 = arguments.length;
switch (G__1722) {
case 1:
return com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$1 = (function (form){
return com.fulcrologic.guardrails.utils.clj__GT_cljs.call(null,form,true);
}));

(com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$2 = (function (form,strip_core_ns){
var ns_replacements = (function (){var G__1723 = new cljs.core.PersistentArrayMap(null, 6, ["clojure.core","cljs.core","clojure.test","cljs.test","clojure.spec.alpha","cljs.spec.alpha","clojure.spec.test.alpha","cljs.spec.test.alpha","orchestra.spec.test","orchestra-cljs.spec.test","clojure.spec.gen.alpha","cljs.spec.gen.alpha"], null);
if(cljs.core.truth_(strip_core_ns)){
return cljs.core.merge.call(null,G__1723,new cljs.core.PersistentArrayMap(null, 2, ["clojure.core",null,"cljs.core",null], null));
} else {
return G__1723;
}
})();
var replace_namespace = (function (p1__1720_SHARP_){
if((!(cljs.core.qualified_symbol_QMARK_.call(null,p1__1720_SHARP_)))){
return p1__1720_SHARP_;
} else {
var nspace = cljs.core.namespace.call(null,p1__1720_SHARP_);
if(cljs.core.contains_QMARK_.call(null,ns_replacements,nspace)){
return cljs.core.symbol.call(null,cljs.core.get.call(null,ns_replacements,nspace),cljs.core.name.call(null,p1__1720_SHARP_));
} else {
return p1__1720_SHARP_;
}
}
});
return clojure.walk.postwalk.call(null,replace_namespace,form);
}));

(com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$lang$maxFixedArity = 2);

com.fulcrologic.guardrails.utils.get_file_position = (function com$fulcrologic$guardrails$utils$get_file_position(env){
if(com.fulcrologic.guardrails.utils.cljs_env_QMARK_.call(null,env)){
var map__1725 = env;
var map__1725__$1 = cljs.core.__destructure_map.call(null,map__1725);
var line = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return null;
}
});
com.fulcrologic.guardrails.utils.get_call_context = (function com$fulcrologic$guardrails$utils$get_call_context(var_args){
var G__1727 = arguments.length;
switch (G__1727) {
case 1:
return com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.fulcrologic.guardrails.utils.get_call_context.call(null,env,null);
}));

(com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$2 = (function (env,label){
return [(cljs.core.truth_(label)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," \u2013 "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.get_ns_name.call(null,env)),":",com.fulcrologic.guardrails.utils.get_file_position.call(null,env)].join('');
}));

(com.fulcrologic.guardrails.utils.get_call_context.cljs$lang$maxFixedArity = 2);

com.fulcrologic.guardrails.utils.gen_exception = (function com$fulcrologic$guardrails$utils$gen_exception(env,msg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,((com.fulcrologic.guardrails.utils.cljs_env_QMARK_.call(null,env))?new cljs.core.Symbol("js","Error.","js/Error.",750655924,null):new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null)),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))))),null,(1),null)))));
});
com.fulcrologic.guardrails.utils.devtools_config_override = (function com$fulcrologic$guardrails$utils$devtools_config_override(){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"current-config__1729__auto__","current-config__1729__auto__",-1375051311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("devtools.prefs","get-prefs","devtools.prefs/get-prefs",1778468250,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"overrides__1730__auto__","overrides__1730__auto__",-294601795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"max-print-level","max-print-level",-462237413),null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"left-adjust__1731__auto__","left-adjust__1731__auto__",1377531987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"margin-left: -17px;",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",-822184067,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"current-config__1729__auto__","current-config__1729__auto__",-1375051311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"overrides__1730__auto__","overrides__1730__auto__",-294601795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"k__1732__auto__","k__1732__auto__",1170843883,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"header-style","header-style",-2122121341),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"let","let",-1282412701),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"v__1733__auto__","v__1733__auto__",143039994,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"current-config__1729__auto__","current-config__1729__auto__",-1375051311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__1732__auto__","k__1732__auto__",1170843883,null),null,(1),null))))),null,(1),null)))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"k__1732__auto__","k__1732__auto__",1170843883,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__1733__auto__","v__1733__auto__",143039994,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"left-adjust__1731__auto__","left-adjust__1731__auto__",1377531987,null),null,(1),null))))),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
com.fulcrologic.guardrails.utils.map_vals = (function com$fulcrologic$guardrails$utils$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});
com.fulcrologic.guardrails.utils.map_keys = (function com$fulcrologic$guardrails$utils$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
var p_BANG__1734 = cljs.core.persistent_BANG_;
var t_1735 = cljs.core.transient$;
com.fulcrologic.guardrails.utils.filter_vals = (function com$fulcrologic$guardrails$utils$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p_BANG__1734.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.call(null,m__$1,k);
}
}),t_1735.call(null,m),m));
}
});
com.fulcrologic.guardrails.utils.atom_QMARK_ = (function com$fulcrologic$guardrails$utils$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
com.fulcrologic.guardrails.utils.stacktrace = (function com$fulcrologic$guardrails$utils$stacktrace(var_args){
var G__1737 = arguments.length;
switch (G__1737) {
case 1:
return com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return com.fulcrologic.guardrails.utils.stacktrace.call(null,err,null);
}));

(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(err);
}));

(com.fulcrologic.guardrails.utils.stacktrace.cljs$lang$maxFixedArity = 2);

com.fulcrologic.guardrails.utils.report_problem = (function com$fulcrologic$guardrails$utils$report_problem(message){
return console.error(message);
});
com.fulcrologic.guardrails.utils.report_exception = (function com$fulcrologic$guardrails$utils$report_exception(e,message){
return console.error(message,e);
});

//# sourceMappingURL=utils.js.map
