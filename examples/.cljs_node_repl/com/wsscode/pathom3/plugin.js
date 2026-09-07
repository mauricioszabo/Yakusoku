// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.plugin');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","index-plugins","com.wsscode.pathom3.plugin/index-plugins",-1377419395),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null))),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19473){
return cljs.core.map_QMARK_.call(null,G__19473);
}),(function (G__19473){
return cljs.core.contains_QMARK_.call(null,G__19473,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804));
})], null),(function (G__19473){
return ((cljs.core.map_QMARK_.call(null,G__19473)) && (cljs.core.contains_QMARK_.call(null,G__19473,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)))], null),null]))], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19472){
return cljs.core.map_QMARK_.call(null,G__19472);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19474){
return cljs.core.map_QMARK_.call(null,G__19474);
}),(function (G__19474){
return cljs.core.contains_QMARK_.call(null,G__19474,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804));
})], null),(function (G__19474){
return ((cljs.core.map_QMARK_.call(null,G__19474)) && (cljs.core.contains_QMARK_.call(null,G__19474,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugins","com.wsscode.pathom3.plugin/plugins",-284057411),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19475){
return cljs.core.coll_QMARK_.call(null,G__19475);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-or-plugins","com.wsscode.pathom3.plugin/plugin-or-plugins",1915484558),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),new cljs.core.Keyword(null,"many","many",1092119164),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-or-plugins","com.wsscode.pathom3.plugin/plugin-or-plugins",1915484558))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.Keyword(null,"many","many",1092119164)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-or-plugins","com.wsscode.pathom3.plugin/plugin-or-plugins",1915484558))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-or-plugins","com.wsscode.pathom3.plugin/plugin-or-plugins",1915484558),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-or-plugins","com.wsscode.pathom3.plugin/plugin-or-plugins",1915484558),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-or-plugins","com.wsscode.pathom3.plugin/plugin-or-plugins",1915484558)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19476){
return cljs.core.coll_QMARK_.call(null,G__19476);
})], null),null)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-actions","com.wsscode.pathom3.plugin/plugin-actions",-235783767),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null))),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),cljs.core.fn_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19478){
return cljs.core.vector_QMARK_.call(null,G__19478);
})], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19477){
return cljs.core.map_QMARK_.call(null,G__19477);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-order","com.wsscode.pathom3.plugin/plugin-order",777834505),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin","com.wsscode.pathom3.plugin/plugin",486886261),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19479){
return cljs.core.vector_QMARK_.call(null,G__19479);
})], null),null));
/**
 * Given a function and a list of extension wrappers, call then in order to create
 *   a composed functions of them.
 */
com.wsscode.pathom3.plugin.compile_extensions = (function com$wsscode$pathom3$plugin$compile_extensions(f,extension_wrappers){
return cljs.core.reduce.call(null,(function (f__$1,wrapper){
return wrapper.call(null,f__$1);
}),f,extension_wrappers);
});
com.wsscode.pathom3.plugin.compile_env_extensions = (function com$wsscode$pathom3$plugin$compile_env_extensions(env,plugin_type,f){
var temp__5821__auto__ = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-actions","com.wsscode.pathom3.plugin/plugin-actions",-235783767),plugin_type], null));
if(cljs.core.truth_(temp__5821__auto__)){
var plugins = temp__5821__auto__;
return com.wsscode.pathom3.plugin.compile_extensions.call(null,f,plugins);
} else {
return f;
}
});
com.wsscode.pathom3.plugin.build_plugin_actions = (function com$wsscode$pathom3$plugin$build_plugin_actions(p__19480,k){
var map__19481 = p__19480;
var map__19481__$1 = cljs.core.__destructure_map.call(null,map__19481);
var env = map__19481__$1;
var plugin_order = cljs.core.get.call(null,map__19481__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-order","com.wsscode.pathom3.plugin/plugin-order",777834505));
var index_plugins = cljs.core.get.call(null,map__19481__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","index-plugins","com.wsscode.pathom3.plugin/index-plugins",-1377419395));
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-actions","com.wsscode.pathom3.plugin/plugin-actions",-235783767),k], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p__19482){
var map__19483 = p__19482;
var map__19483__$1 = cljs.core.__destructure_map.call(null,map__19483);
var id = cljs.core.get.call(null,map__19483__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804));
return cljs.core.get_in.call(null,index_plugins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
})),cljs.core.rseq.call(null,plugin_order)));
});
com.wsscode.pathom3.plugin.add_plugin_at_order = (function com$wsscode$pathom3$plugin$add_plugin_at_order(p__19484,p__19485){
var map__19486 = p__19484;
var map__19486__$1 = cljs.core.__destructure_map.call(null,map__19486);
var env = map__19486__$1;
var plugin_order = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-order","com.wsscode.pathom3.plugin/plugin-order",777834505));
var map__19487 = p__19485;
var map__19487__$1 = cljs.core.__destructure_map.call(null,map__19487);
var id = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804));
var add_before = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","add-before","com.wsscode.pathom3.plugin/add-before",815083567));
var add_after = cljs.core.get.call(null,map__19487__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","add-after","com.wsscode.pathom3.plugin/add-after",550600708));
if(((cljs.core.not.call(null,(function (){var or__5002__auto__ = add_before;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return add_after;
}
})())) || (cljs.core.not.call(null,(function (){var and__5000__auto__ = add_before;
if(cljs.core.truth_(and__5000__auto__)){
return add_after;
} else {
return and__5000__auto__;
}
})())))){
} else {
throw (new Error(["Assert failed: ","You can provide add-before or add-after, but not both at the same time.","\n","(or (not (or add-before add-after)) (not (and add-before add-after)))"].join('')));
}

var ref_id = (function (){var or__5002__auto__ = add_before;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return add_after;
}
})();
var ref_position = com.wsscode.misc.coll.index_of.call(null,plugin_order,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),ref_id], null));
var G__19488 = env;
var G__19488__$1 = (cljs.core.truth_(add_before)?cljs.core.update_in.call(null,G__19488,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-order","com.wsscode.pathom3.plugin/plugin-order",777834505)], null),com.wsscode.misc.coll.conj_at_index,ref_position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),id], null)):G__19488);
var G__19488__$2 = (cljs.core.truth_(add_after)?cljs.core.update_in.call(null,G__19488__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-order","com.wsscode.pathom3.plugin/plugin-order",777834505)], null),com.wsscode.misc.coll.conj_at_index,(ref_position + (1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),id], null)):G__19488__$1);
if(cljs.core.not.call(null,(function (){var or__5002__auto__ = add_before;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return add_after;
}
})())){
return cljs.core.update_in.call(null,G__19488__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-order","com.wsscode.pathom3.plugin/plugin-order",777834505)], null),com.wsscode.misc.coll.vconj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),id], null));
} else {
return G__19488__$2;
}
});
com.wsscode.pathom3.plugin.plugin_extensions = (function com$wsscode$pathom3$plugin$plugin_extensions(plugin){
return cljs.core.keys.call(null,com.wsscode.misc.coll.filter_vals.call(null,cljs.core.fn_QMARK_,plugin));
});
com.wsscode.pathom3.plugin.refresh_actions_from_plugin = (function com$wsscode$pathom3$plugin$refresh_actions_from_plugin(env,plugin){
return cljs.core.reduce.call(null,com.wsscode.pathom3.plugin.build_plugin_actions,env,com.wsscode.pathom3.plugin.plugin_extensions.call(null,plugin));
});
/**
 * Add a new plugin to the end. This will create the appropriated structures to optimize
 *   the plugin call speed.
 */
com.wsscode.pathom3.plugin.register_plugin = (function com$wsscode$pathom3$plugin$register_plugin(var_args){
var G__19490 = arguments.length;
switch (G__19490) {
case 1:
return com.wsscode.pathom3.plugin.register_plugin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.plugin.register_plugin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.plugin.register_plugin.cljs$core$IFn$_invoke$arity$1 = (function (plugin){
return com.wsscode.pathom3.plugin.register_plugin.call(null,cljs.core.PersistentArrayMap.EMPTY,plugin);
}));

(com.wsscode.pathom3.plugin.register_plugin.cljs$core$IFn$_invoke$arity$2 = (function (env,p__19491){
var map__19492 = p__19491;
var map__19492__$1 = cljs.core.__destructure_map.call(null,map__19492);
var plugin = map__19492__$1;
var id = cljs.core.get.call(null,map__19492__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804));
if((cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","index-plugins","com.wsscode.pathom3.plugin/index-plugins",-1377419395),id], null)) == null)){
} else {
throw (new Error(["Assert failed: ",["Tried to add duplicated plugin: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),"\n","(nil? (get-in env [:com.wsscode.pathom3.plugin/index-plugins id]))"].join('')));
}

var env_SINGLEQUOTE_ = com.wsscode.pathom3.plugin.add_plugin_at_order.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","index-plugins","com.wsscode.pathom3.plugin/index-plugins",-1377419395),id], null),plugin),plugin);
return com.wsscode.pathom3.plugin.refresh_actions_from_plugin.call(null,env_SINGLEQUOTE_,plugin);
}));

(com.wsscode.pathom3.plugin.register_plugin.cljs$lang$maxFixedArity = 2);

com.wsscode.pathom3.plugin.register_before = (function com$wsscode$pathom3$plugin$register_before(env,ref_id,plugin){
return com.wsscode.pathom3.plugin.register_plugin.call(null,env,cljs.core.assoc.call(null,plugin,new cljs.core.Keyword("com.wsscode.pathom3.plugin","add-before","com.wsscode.pathom3.plugin/add-before",815083567),ref_id));
});
com.wsscode.pathom3.plugin.register_after = (function com$wsscode$pathom3$plugin$register_after(env,ref_id,plugin){
return com.wsscode.pathom3.plugin.register_plugin.call(null,env,cljs.core.assoc.call(null,plugin,new cljs.core.Keyword("com.wsscode.pathom3.plugin","add-after","com.wsscode.pathom3.plugin/add-after",550600708),ref_id));
});
/**
 * Add one or many plugins.
 */
com.wsscode.pathom3.plugin.register = (function com$wsscode$pathom3$plugin$register(var_args){
var G__19495 = arguments.length;
switch (G__19495) {
case 1:
return com.wsscode.pathom3.plugin.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.plugin.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.plugin.register.cljs$core$IFn$_invoke$arity$1 = (function (plugins){
return com.wsscode.pathom3.plugin.register.call(null,cljs.core.PersistentArrayMap.EMPTY,plugins);
}));

(com.wsscode.pathom3.plugin.register.cljs$core$IFn$_invoke$arity$2 = (function (env,plugins){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804).cljs$core$IFn$_invoke$arity$1(plugins))){
return com.wsscode.pathom3.plugin.register_plugin.call(null,env,plugins);
} else {
if(cljs.core.sequential_QMARK_.call(null,plugins)){
return cljs.core.reduce.call(null,com.wsscode.pathom3.plugin.register,env,plugins);
} else {
throw cljs.core.ex_info.call(null,"Invalid plugin, make sure you set the ::p.plugin/id on it.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugins], null));

}
}
}));

(com.wsscode.pathom3.plugin.register.cljs$lang$maxFixedArity = 2);

/**
 * Remove a plugin.
 */
com.wsscode.pathom3.plugin.remove_plugin = (function com$wsscode$pathom3$plugin$remove_plugin(env,plugin_id){
var temp__5821__auto__ = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","index-plugins","com.wsscode.pathom3.plugin/index-plugins",-1377419395),plugin_id], null));
if(cljs.core.truth_(temp__5821__auto__)){
var map__19498 = temp__5821__auto__;
var map__19498__$1 = cljs.core.__destructure_map.call(null,map__19498);
var plugin = map__19498__$1;
var id = cljs.core.get.call(null,map__19498__$1,new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804));
var env_SINGLEQUOTE_ = cljs.core.update.call(null,cljs.core.update.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.plugin","index-plugins","com.wsscode.pathom3.plugin/index-plugins",-1377419395),cljs.core.dissoc,id),new cljs.core.Keyword("com.wsscode.pathom3.plugin","plugin-order","com.wsscode.pathom3.plugin/plugin-order",777834505),(function (p1__19497_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.plugin","id","com.wsscode.pathom3.plugin/id",661105804),id], null)])),p1__19497_SHARP_);
}));
return com.wsscode.pathom3.plugin.refresh_actions_from_plugin.call(null,env_SINGLEQUOTE_,plugin);
} else {
return env;
}
});
/**
 * Run some operation f wrapping it with the plugins of a given plugin-type installed
 *   in the environment.
 */
com.wsscode.pathom3.plugin.run_with_plugins = (function com$wsscode$pathom3$plugin$run_with_plugins(var_args){
var G__19512 = arguments.length;
switch (G__19512) {
case 3:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___19514 = arguments.length;
var i__5727__auto___19515 = (0);
while(true){
if((i__5727__auto___19515 < len__5726__auto___19514)){
args_arr__5751__auto__.push((arguments[i__5727__auto___19515]));

var G__19516 = (i__5727__auto___19515 + (1));
i__5727__auto___19515 = G__19516;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((11) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((11)),(0),null)):null);
return com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),argseq__5752__auto__);

}
});

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$3 = (function (env,plugin_type,f){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$4 = (function (env,plugin_type,f,a1){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null,a1);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$5 = (function (env,plugin_type,f,a1,a2){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null,a1,a2);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$6 = (function (env,plugin_type,f,a1,a2,a3){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null,a1,a2,a3);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$7 = (function (env,plugin_type,f,a1,a2,a3,a4){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null,a1,a2,a3,a4);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$8 = (function (env,plugin_type,f,a1,a2,a3,a4,a5){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null,a1,a2,a3,a4,a5);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$9 = (function (env,plugin_type,f,a1,a2,a3,a4,a5,a6){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null,a1,a2,a3,a4,a5,a6);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$10 = (function (env,plugin_type,f,a1,a2,a3,a4,a5,a6,a7){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null,a1,a2,a3,a4,a5,a6,a7);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$11 = (function (env,plugin_type,f,a1,a2,a3,a4,a5,a6,a7,a8){
var augmented_v = com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f);
return augmented_v.call(null,a1,a2,a3,a4,a5,a6,a7,a8);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$core$IFn$_invoke$arity$variadic = (function (env,plugin_type,f,a1,a2,a3,a4,a5,a6,a7,a8,args){
return cljs.core.apply.call(null,com.wsscode.pathom3.plugin.compile_env_extensions.call(null,env,plugin_type,f),a1,a2,a3,a4,a5,a6,a7,a8,args);
}));

/** @this {Function} */
(com.wsscode.pathom3.plugin.run_with_plugins.cljs$lang$applyTo = (function (seq19500){
var G__19501 = cljs.core.first.call(null,seq19500);
var seq19500__$1 = cljs.core.next.call(null,seq19500);
var G__19502 = cljs.core.first.call(null,seq19500__$1);
var seq19500__$2 = cljs.core.next.call(null,seq19500__$1);
var G__19503 = cljs.core.first.call(null,seq19500__$2);
var seq19500__$3 = cljs.core.next.call(null,seq19500__$2);
var G__19504 = cljs.core.first.call(null,seq19500__$3);
var seq19500__$4 = cljs.core.next.call(null,seq19500__$3);
var G__19505 = cljs.core.first.call(null,seq19500__$4);
var seq19500__$5 = cljs.core.next.call(null,seq19500__$4);
var G__19506 = cljs.core.first.call(null,seq19500__$5);
var seq19500__$6 = cljs.core.next.call(null,seq19500__$5);
var G__19507 = cljs.core.first.call(null,seq19500__$6);
var seq19500__$7 = cljs.core.next.call(null,seq19500__$6);
var G__19508 = cljs.core.first.call(null,seq19500__$7);
var seq19500__$8 = cljs.core.next.call(null,seq19500__$7);
var G__19509 = cljs.core.first.call(null,seq19500__$8);
var seq19500__$9 = cljs.core.next.call(null,seq19500__$8);
var G__19510 = cljs.core.first.call(null,seq19500__$9);
var seq19500__$10 = cljs.core.next.call(null,seq19500__$9);
var G__19511 = cljs.core.first.call(null,seq19500__$10);
var seq19500__$11 = cljs.core.next.call(null,seq19500__$10);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19501,G__19502,G__19503,G__19504,G__19505,G__19506,G__19507,G__19508,G__19509,G__19510,G__19511,seq19500__$11);
}));

(com.wsscode.pathom3.plugin.run_with_plugins.cljs$lang$maxFixedArity = (11));


//# sourceMappingURL=plugin.js.map
