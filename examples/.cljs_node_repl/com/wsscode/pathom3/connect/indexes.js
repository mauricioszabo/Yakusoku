// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.connect.indexes');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.pathom3.attribute');
goog.require('com.wsscode.pathom3.connect.operation');
goog.require('com.wsscode.pathom3.format.eql');
goog.require('com.wsscode.pathom3.format.shape_descriptor');
goog.require('edn_query_language.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__20780){
return cljs.core.map_QMARK_.call(null,G__20780);
})], null),(function (G__20780){
return cljs.core.map_QMARK_.call(null,G__20780);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-attributes","com.wsscode.pathom3.connect.indexes/index-attributes",-711449838),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolver","com.wsscode.pathom3.connect.operation/resolver",380611107)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolver","com.wsscode.pathom3.connect.operation/resolver",380611107)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolver","com.wsscode.pathom3.connect.operation/resolver",380611107)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolver","com.wsscode.pathom3.connect.operation/resolver",380611107)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolver","com.wsscode.pathom3.connect.operation/resolver",380611107)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20781){
return cljs.core.map_QMARK_.call(null,G__20781);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutation","com.wsscode.pathom3.connect.operation/mutation",2085009056)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutation","com.wsscode.pathom3.connect.operation/mutation",2085009056)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutation","com.wsscode.pathom3.connect.operation/mutation",2085009056)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutation","com.wsscode.pathom3.connect.operation/mutation",2085009056)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutation","com.wsscode.pathom3.connect.operation/mutation",2085009056)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20782){
return cljs.core.map_QMARK_.call(null,G__20782);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-source-id","com.wsscode.pathom3.connect.indexes/index-source-id",-190271180),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),cljs.core.list(new cljs.core.Symbol("s","map-of","s/map-of",-1464752791,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null)))),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20785){
return cljs.core.set_QMARK_.call(null,G__20785);
})], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20784){
return cljs.core.map_QMARK_.call(null,G__20784);
})], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20783){
return cljs.core.map_QMARK_.call(null,G__20783);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20786){
return cljs.core.map_QMARK_.call(null,G__20786);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","operations","com.wsscode.pathom3.connect.indexes/operations",-1591274702),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"single","single",1551466437),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation","com.wsscode.pathom3.connect.operation/operation",874578684),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100),new cljs.core.Keyword(null,"many","many",1092119164),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","operations","com.wsscode.pathom3.connect.indexes/operations",-1591274702))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"single","single",1551466437),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"many","many",1092119164)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation","com.wsscode.pathom3.connect.operation/operation",874578684),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","operations","com.wsscode.pathom3.connect.indexes/operations",-1591274702))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation","com.wsscode.pathom3.connect.operation/operation",874578684),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","indexes","com.wsscode.pathom3.connect.indexes/indexes",-1732299100),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","operations","com.wsscode.pathom3.connect.indexes/operations",-1591274702),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","operations","com.wsscode.pathom3.connect.indexes/operations",-1591274702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","operations","com.wsscode.pathom3.connect.indexes/operations",-1591274702)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20787){
return cljs.core.coll_QMARK_.call(null,G__20787);
})], null),null)], null),null));
com.wsscode.pathom3.connect.indexes.op_set = cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20788){
return cljs.core.set_QMARK_.call(null,G__20788);
})], null),null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-id","com.wsscode.pathom3.connect.indexes/attr-id",-1508656158),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-combinations","com.wsscode.pathom3.connect.indexes/attr-combinations",1300944473),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__20789){
return cljs.core.set_QMARK_.call(null,G__20789);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-input-in","com.wsscode.pathom3.connect.indexes/attr-input-in",-354683516),new cljs.core.Symbol("com.wsscode.pathom3.connect.indexes","op-set","com.wsscode.pathom3.connect.indexes/op-set",67584702,null),com.wsscode.pathom3.connect.indexes.op_set);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-output-in","com.wsscode.pathom3.connect.indexes/attr-output-in",-2024181305),new cljs.core.Symbol("com.wsscode.pathom3.connect.indexes","op-set","com.wsscode.pathom3.connect.indexes/op-set",67584702,null),com.wsscode.pathom3.connect.indexes.op_set);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-mutation-output-in","com.wsscode.pathom3.connect.indexes/attr-mutation-output-in",-1783438378),new cljs.core.Symbol("com.wsscode.pathom3.connect.indexes","op-set","com.wsscode.pathom3.connect.indexes/op-set",67584702,null),com.wsscode.pathom3.connect.indexes.op_set);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-mutation-param-in","com.wsscode.pathom3.connect.indexes/attr-mutation-param-in",1156277282),new cljs.core.Symbol("com.wsscode.pathom3.connect.indexes","op-set","com.wsscode.pathom3.connect.indexes/op-set",67584702,null),com.wsscode.pathom3.connect.indexes.op_set);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","transient-attrs","com.wsscode.pathom3.connect.indexes/transient-attrs",-1280144923),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660));

/**
 * Merge ::index-oir maps.
 */
com.wsscode.pathom3.connect.indexes.merge_oir = (function com$wsscode$pathom3$connect$indexes$merge_oir(a,b){
return cljs.core.merge_with.call(null,(function (p1__20790_SHARP_,p2__20791_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__20790_SHARP_,p2__20791_SHARP_);
}),a,b);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom3 !== 'undefined') && (typeof com.wsscode.pathom3.connect !== 'undefined') && (typeof com.wsscode.pathom3.connect.indexes !== 'undefined') && (typeof com.wsscode.pathom3.connect.indexes.index_merger !== 'undefined')){
} else {
/**
 * This is an extensible gateway so you can define different strategies for merging different
 *   kinds of indexes.
 */
com.wsscode.pathom3.connect.indexes.index_merger = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"com.wsscode.pathom3.connect.indexes","index-merger"),(function (k,_,___$1){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,com.wsscode.pathom3.connect.indexes.index_merger,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),(function (_,a,b){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
if((!(cljs.core.contains_QMARK_.call(null,m,k)))){
} else {
throw (new Error(["Assert failed: ",["Tried to register duplicated resolver: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),"\n","(not (contains? m k))"].join('')));
}

return cljs.core.assoc.call(null,m,k,v);
}),a,b);
}));
cljs.core._add_method.call(null,com.wsscode.pathom3.connect.indexes.index_merger,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175),(function (_,a,b){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
if((!(cljs.core.contains_QMARK_.call(null,m,k)))){
} else {
throw (new Error(["Assert failed: ",["Tried to register duplicated mutation: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),"\n","(not (contains? m k))"].join('')));
}

return cljs.core.assoc.call(null,m,k,v);
}),a,b);
}));
cljs.core._add_method.call(null,com.wsscode.pathom3.connect.indexes.index_merger,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909),(function (_,a,b){
return com.wsscode.pathom3.connect.indexes.merge_oir.call(null,a,b);
}));
cljs.core._add_method.call(null,com.wsscode.pathom3.connect.indexes.index_merger,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,a,b){
return com.wsscode.misc.coll.merge_grow.call(null,a,b);
}));
/**
 * Merge index ib in index ia.
 */
com.wsscode.pathom3.connect.indexes.merge_indexes = (function com$wsscode$pathom3$connect$indexes$merge_indexes(ia,ib){
return cljs.core.reduce_kv.call(null,(function (idx,k,v){
if(cljs.core.contains_QMARK_.call(null,idx,k)){
return cljs.core.update.call(null,idx,k,(function (p1__20792_SHARP_){
return com.wsscode.pathom3.connect.indexes.index_merger.call(null,k,p1__20792_SHARP_,v);
}));
} else {
return cljs.core.assoc.call(null,idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom3.connect.indexes.input_set = (function com$wsscode$pathom3$connect$indexes$input_set(input){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (attr){
if(cljs.core.map_QMARK_.call(null,attr)){
return com.wsscode.misc.coll.map_vals.call(null,com.wsscode.pathom3.connect.indexes.input_set,attr);
} else {
return attr;
}
})),input);
});
com.wsscode.pathom3.connect.indexes.normalized_children = (function com$wsscode$pathom3$connect$indexes$normalized_children(p__20793){
var map__20794 = p__20793;
var map__20794__$1 = cljs.core.__destructure_map.call(null,map__20794);
var children = cljs.core.get.call(null,map__20794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__20795 = children;
var G__20795__$1 = (((G__20795 == null))?null:cljs.core.first.call(null,G__20795));
var G__20795__$2 = (((G__20795__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__20795__$1));
if((G__20795__$2 == null)){
return null;
} else {
return cljs.core._EQ_.call(null,G__20795__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children)));
} else {
return children;
}
});
com.wsscode.pathom3.connect.indexes.index_attributes = (function com$wsscode$pathom3$connect$indexes$index_attributes(p__20798){
var map__20799 = p__20798;
var map__20799__$1 = cljs.core.__destructure_map.call(null,map__20799);
var op = map__20799__$1;
var op_name = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var requires = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715));
var provides = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618));
var output = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
var input = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,requires));
var provides__$1 = cljs.core.remove.call(null,(function (p1__20796_SHARP_){
return cljs.core.contains_QMARK_.call(null,input,p1__20796_SHARP_);
}),cljs.core.keys.call(null,provides));
var op_group = cljs.core.PersistentHashSet.createAsIfByAssoc([op_name]);
var attr_provides = cljs.core.zipmap.call(null,provides__$1,cljs.core.repeat.call(null,op_group));
var input_count = cljs.core.count.call(null,input);
var _LT__GT_ = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545),true], null));
var _LT__GT___$1 = cljs.core.reduce.call(null,(function (idx,in_attr){
return cljs.core.update.call(null,idx,in_attr,cljs.core.partial.call(null,cljs.core.merge_with,com.wsscode.misc.coll.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-id","com.wsscode.pathom3.connect.indexes/attr-id",-1508656158),in_attr,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-provides","com.wsscode.pathom3.connect.indexes/attr-provides",-1360845181),attr_provides,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-input-in","com.wsscode.pathom3.connect.indexes/attr-input-in",-354683516),op_group], null));
}),_LT__GT_,(function (){var G__20800 = input_count;
switch (G__20800) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY], null);

break;
case (1):
return input;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);

}
})());
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.call(null,(function (idx,in_attr){
return cljs.core.update.call(null,idx,in_attr,cljs.core.partial.call(null,cljs.core.merge_with,com.wsscode.misc.coll.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-id","com.wsscode.pathom3.connect.indexes/attr-id",-1508656158),in_attr,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-combinations","com.wsscode.pathom3.connect.indexes/attr-combinations",1300944473),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-input-in","com.wsscode.pathom3.connect.indexes/attr-input-in",-354683516),op_group], null));
}),_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.call(null,(function (idx,out_attr){
if(cljs.core.vector_QMARK_.call(null,out_attr)){
return cljs.core.update.call(null,idx,cljs.core.peek.call(null,out_attr),cljs.core.partial.call(null,cljs.core.merge_with,com.wsscode.misc.coll.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-id","com.wsscode.pathom3.connect.indexes/attr-id",-1508656158),cljs.core.peek.call(null,out_attr),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-reach-via","com.wsscode.pathom3.connect.indexes/attr-reach-via",1180499290),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop.call(null,out_attr)),op_group]),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-output-in","com.wsscode.pathom3.connect.indexes/attr-output-in",-2024181305),op_group], null));
} else {
return cljs.core.update.call(null,idx,out_attr,cljs.core.partial.call(null,cljs.core.merge_with,com.wsscode.misc.coll.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-id","com.wsscode.pathom3.connect.indexes/attr-id",-1508656158),out_attr,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-reach-via","com.wsscode.pathom3.connect.indexes/attr-reach-via",1180499290),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,op_group]),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-output-in","com.wsscode.pathom3.connect.indexes/attr-output-in",-2024181305),op_group], null));
}
}),_LT__GT___$2,provides__$1);
return cljs.core.reduce.call(null,(function (idx,p__20801){
var map__20802 = p__20801;
var map__20802__$1 = cljs.core.__destructure_map.call(null,map__20802);
var key = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__20803 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.call(null,G__20803,key,cljs.core.partial.call(null,cljs.core.merge_with,com.wsscode.misc.coll.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-id","com.wsscode.pathom3.connect.indexes/attr-id",-1508656158),key,(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-branch-in","com.wsscode.pathom3.connect.indexes/attr-branch-in",-656701927):new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-leaf-in","com.wsscode.pathom3.connect.indexes/attr-leaf-in",1474934692)),op_group]));
} else {
return G__20803;
}
}),_LT__GT___$3,cljs.core.concat.call(null,cljs.core.tree_seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982),edn_query_language.core.query__GT_ast.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497).cljs$core$IFn$_invoke$arity$1(op))),((cljs.core.map_QMARK_.call(null,output))?cljs.core.mapcat.call(null,(function (p1__20797_SHARP_){
return cljs.core.tree_seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.connect.indexes.normalized_children,edn_query_language.core.query__GT_ast.call(null,p1__20797_SHARP_));
}),cljs.core.vals.call(null,output)):cljs.core.tree_seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982),edn_query_language.core.query__GT_ast.call(null,output)))));
});
/**
 * Low level function to add resolvers to the index. This function adds the resolver
 *   configuration to the index set, adds the resolver to the ::pc/index-resolvers, add
 *   the output to input index in the ::pc/index-oir and the reverse index for auto-complete
 *   to the index ::pc/index-io.
 */
com.wsscode.pathom3.connect.indexes.register_resolver = (function com$wsscode$pathom3$connect$indexes$register_resolver(indexes,resolver){
var map__20805 = com.wsscode.pathom3.connect.operation.operation_config.call(null,resolver);
var map__20805__$1 = cljs.core.__destructure_map.call(null,map__20805);
var op_config = map__20805__$1;
var op_name = cljs.core.get.call(null,map__20805__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var output = cljs.core.get.call(null,map__20805__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
var requires = cljs.core.get.call(null,map__20805__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715));
var dynamic_resolver_QMARK_ = cljs.core.get.call(null,map__20805__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-resolver?","com.wsscode.pathom3.connect.operation/dynamic-resolver?",868139406));
var input_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,requires));
var root_props = com.wsscode.pathom3.format.eql.query_root_properties.call(null,output);
if((com.wsscode.pathom3.connect.indexes.resolver.call(null,indexes,op_name) == null)){
} else {
throw (new Error(["Assert failed: ",["Tried to register duplicated resolver: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_name)].join(''),"\n","(nil? (com.wsscode.pathom3.connect.indexes/resolver indexes op-name))"].join('')));
}

return com.wsscode.pathom3.connect.indexes.merge_indexes.call(null,indexes,(function (){var G__20806 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([op_name,resolver]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545),true], null))], null);
if(cljs.core.not.call(null,dynamic_resolver_QMARK_)){
return cljs.core.assoc.call(null,G__20806,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-attributes","com.wsscode.pathom3.connect.indexes/index-attributes",-711449838),com.wsscode.pathom3.connect.indexes.index_attributes.call(null,op_config),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,com.wsscode.pathom3.format.shape_descriptor.query__GT_shape_descriptor.call(null,output)]),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909),cljs.core.reduce.call(null,(function (indexes__$1,out_attr){
var G__20807 = indexes__$1;
if((!(cljs.core.contains_QMARK_.call(null,requires,out_attr)))){
return cljs.core.update_in.call(null,G__20807,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,requires], null),com.wsscode.misc.coll.sconj,op_name);
} else {
return G__20807;
}
}),cljs.core.PersistentArrayMap.EMPTY,root_props));
} else {
return G__20806;
}
})());
});
/**
 * Low level function to add a mutation to the index. For mutations, the index-mutations
 *   and the index-attributes are affected.
 */
com.wsscode.pathom3.connect.indexes.register_mutation = (function com$wsscode$pathom3$connect$indexes$register_mutation(indexes,mutation){
var map__20808 = com.wsscode.pathom3.connect.operation.operation_config.call(null,mutation);
var map__20808__$1 = cljs.core.__destructure_map.call(null,map__20808);
var op_name = cljs.core.get.call(null,map__20808__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var params = cljs.core.get.call(null,map__20808__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339));
var output = cljs.core.get.call(null,map__20808__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
if((com.wsscode.pathom3.connect.indexes.mutation.call(null,indexes,op_name) == null)){
} else {
throw (new Error(["Assert failed: ",["Tried to register duplicated mutation: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_name)].join(''),"\n","(nil? (com.wsscode.pathom3.connect.indexes/mutation indexes op-name))"].join('')));
}

return com.wsscode.pathom3.connect.indexes.merge_indexes.call(null,indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([op_name,mutation]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545),true], null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-attributes","com.wsscode.pathom3.connect.indexes/index-attributes",-711449838),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.call(null,(function (idx,attribute){
return cljs.core.update.call(null,idx,attribute,cljs.core.partial.call(null,cljs.core.merge_with,com.wsscode.misc.coll.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-id","com.wsscode.pathom3.connect.indexes/attr-id",-1508656158),attribute,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-mutation-param-in","com.wsscode.pathom3.connect.indexes/attr-mutation-param-in",1156277282),cljs.core.PersistentHashSet.createAsIfByAssoc([op_name])], null));
}),_LT__GT_,(function (){var G__20809 = params;
if((G__20809 == null)){
return null;
} else {
return com.wsscode.pathom3.format.eql.query_root_properties.call(null,G__20809);
}
})());
return cljs.core.reduce.call(null,(function (idx,attribute){
return cljs.core.update.call(null,idx,attribute,cljs.core.partial.call(null,cljs.core.merge_with,com.wsscode.misc.coll.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-id","com.wsscode.pathom3.connect.indexes/attr-id",-1508656158),attribute,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-mutation-output-in","com.wsscode.pathom3.connect.indexes/attr-mutation-output-in",-1783438378),cljs.core.PersistentHashSet.createAsIfByAssoc([op_name])], null));
}),_LT__GT___$1,(function (){var G__20810 = output;
if((G__20810 == null)){
return null;
} else {
return com.wsscode.pathom3.format.eql.query_root_properties.call(null,G__20810);
}
})());
})()], null));
});
com.wsscode.pathom3.connect.indexes.resolver = (function com$wsscode$pathom3$connect$indexes$resolver(p__20811,resolver_name){
var map__20812 = p__20811;
var map__20812__$1 = cljs.core.__destructure_map.call(null,map__20812);
var index_resolvers = cljs.core.get.call(null,map__20812__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553));
return cljs.core.get.call(null,index_resolvers,resolver_name);
});
/**
 * Given a indexes map and a resolver sym, returns the resolver configuration map.
 */
com.wsscode.pathom3.connect.indexes.resolver_config = (function com$wsscode$pathom3$connect$indexes$resolver_config(p__20813,resolver_name){
var map__20814 = p__20813;
var map__20814__$1 = cljs.core.__destructure_map.call(null,map__20814);
var index_resolvers = cljs.core.get.call(null,map__20814__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-resolvers","com.wsscode.pathom3.connect.indexes/index-resolvers",-848370553));
var G__20815 = cljs.core.get.call(null,index_resolvers,resolver_name);
if((G__20815 == null)){
return null;
} else {
return com.wsscode.pathom3.connect.operation.operation_config.call(null,G__20815);
}
});
/**
 * Get the resolver provides from the resolver configuration map
 */
com.wsscode.pathom3.connect.indexes.resolver_provides = (function com$wsscode$pathom3$connect$indexes$resolver_provides(env,resolver_sym){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,resolver_sym));
});
/**
 * Get the resolver provides from the resolver configuration map
 */
com.wsscode.pathom3.connect.indexes.resolver_optionals = (function com$wsscode$pathom3$connect$indexes$resolver_optionals(env,resolver_sym){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,resolver_sym));
});
com.wsscode.pathom3.connect.indexes.dynamic_resolver_QMARK_ = (function com$wsscode$pathom3$connect$indexes$dynamic_resolver_QMARK_(env,resolver_name){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-resolver?","com.wsscode.pathom3.connect.operation/dynamic-resolver?",868139406).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,resolver_name));
});
com.wsscode.pathom3.connect.indexes.mutation = (function com$wsscode$pathom3$connect$indexes$mutation(p__20816,mutation_name){
var map__20817 = p__20816;
var map__20817__$1 = cljs.core.__destructure_map.call(null,map__20817);
var index_mutations = cljs.core.get.call(null,map__20817__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175));
return cljs.core.get.call(null,index_mutations,mutation_name);
});
/**
 * Given a indexes map and a mutation sym, returns the mutation configuration map.
 */
com.wsscode.pathom3.connect.indexes.mutation_config = (function com$wsscode$pathom3$connect$indexes$mutation_config(p__20818,mutation_name){
var map__20819 = p__20818;
var map__20819__$1 = cljs.core.__destructure_map.call(null,map__20819);
var index_mutations = cljs.core.get.call(null,map__20819__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-mutations","com.wsscode.pathom3.connect.indexes/index-mutations",24467175));
var G__20820 = cljs.core.get.call(null,index_mutations,mutation_name);
if((G__20820 == null)){
return null;
} else {
return com.wsscode.pathom3.connect.operation.operation_config.call(null,G__20820);
}
});
/**
 * Add an operation to the indexes. The operation value supports some different types:
 * 
 *   Resolver: adds a single resolver
 *   Mutation: adds a single mutation
 *   Map: assumes it is a map containing indexes, merges in using merge-indexes functionality
 *   Sequential: a vector containing any of the operators (including other sequentials)
 */
com.wsscode.pathom3.connect.indexes.register = (function com$wsscode$pathom3$connect$indexes$register(var_args){
var G__20822 = arguments.length;
switch (G__20822) {
case 1:
return com.wsscode.pathom3.connect.indexes.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.connect.indexes.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.indexes.register.cljs$core$IFn$_invoke$arity$1 = (function (operation_or_operations){
return com.wsscode.pathom3.connect.indexes.register.call(null,cljs.core.PersistentArrayMap.EMPTY,operation_or_operations);
}));

(com.wsscode.pathom3.connect.indexes.register.cljs$core$IFn$_invoke$arity$2 = (function (indexes,operation_or_operations_or_indexes){
if(com.wsscode.pathom3.connect.operation.operation_QMARK_.call(null,operation_or_operations_or_indexes)){
var G__20823 = com.wsscode.pathom3.connect.operation.operation_type.call(null,operation_or_operations_or_indexes);
var G__20823__$1 = (((G__20823 instanceof cljs.core.Keyword))?G__20823.fqn:null);
switch (G__20823__$1) {
case "com.wsscode.pathom3.connect.operation/operation-type-resolver":
return com.wsscode.pathom3.connect.indexes.register_resolver.call(null,indexes,operation_or_operations_or_indexes);

break;
case "com.wsscode.pathom3.connect.operation/operation-type-mutation":
return com.wsscode.pathom3.connect.indexes.register_mutation.call(null,indexes,operation_or_operations_or_indexes);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20823__$1)].join('')));

}
} else {
if(cljs.core.sequential_QMARK_.call(null,operation_or_operations_or_indexes)){
return cljs.core.reduce.call(null,com.wsscode.pathom3.connect.indexes.register,indexes,operation_or_operations_or_indexes);
} else {
if(cljs.core.map_QMARK_.call(null,operation_or_operations_or_indexes)){
return com.wsscode.pathom3.connect.indexes.merge_indexes.call(null,indexes,operation_or_operations_or_indexes);
} else {
throw cljs.core.ex_info.call(null,"Invalid type to register",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","operations","com.wsscode.pathom3.connect.indexes/operations",-1591274702),operation_or_operations_or_indexes], null));

}
}
}
}));

(com.wsscode.pathom3.connect.indexes.register.cljs$lang$maxFixedArity = 2);

com.wsscode.pathom3.connect.indexes.operation_config = (function com$wsscode$pathom3$connect$indexes$operation_config(env,op_name){
var or__5002__auto__ = com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,op_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return com.wsscode.pathom3.connect.indexes.mutation_config.call(null,env,op_name);
}
});
/**
 * Check if some attribute is known in the index, this checks uses the index-oir.
 */
com.wsscode.pathom3.connect.indexes.attribute_available_QMARK_ = (function com$wsscode$pathom3$connect$indexes$attribute_available_QMARK_(p__20826,k){
var map__20827 = p__20826;
var map__20827__$1 = cljs.core.__destructure_map.call(null,map__20827);
var index_oir = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909));
return cljs.core.contains_QMARK_.call(null,index_oir,k);
});
com.wsscode.pathom3.connect.indexes.transient_attr_QMARK_ = (function com$wsscode$pathom3$connect$indexes$transient_attr_QMARK_(p__20828,attr){
var map__20829 = p__20828;
var map__20829__$1 = cljs.core.__destructure_map.call(null,map__20829);
var transient_attrs = cljs.core.get.call(null,map__20829__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","transient-attrs","com.wsscode.pathom3.connect.indexes/transient-attrs",-1280144923));
return cljs.core.contains_QMARK_.call(null,transient_attrs,attr);
});
com.wsscode.pathom3.connect.indexes.reachable_attributes_STAR_ = (function com$wsscode$pathom3$connect$indexes$reachable_attributes_STAR_(p__20831,queue,attributes){
while(true){
var map__20832 = p__20831;
var map__20832__$1 = cljs.core.__destructure_map.call(null,map__20832);
var env = map__20832__$1;
var index_io = cljs.core.get.call(null,map__20832__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042));
if(cljs.core.seq.call(null,queue)){
var vec__20833 = queue;
var seq__20834 = cljs.core.seq.call(null,vec__20833);
var first__20835 = cljs.core.first.call(null,seq__20834);
var seq__20834__$1 = cljs.core.next.call(null,seq__20834);
var attr = first__20835;
var rest = seq__20834__$1;
var attrs = cljs.core.conj_BANG_.call(null,attributes,attr);
var G__20836 = env;
var G__20837 = cljs.core.into.call(null,rest,cljs.core.remove.call(null,((function (p__20831,queue,attributes,vec__20833,seq__20834,first__20835,seq__20834__$1,attr,rest,attrs,map__20832,map__20832__$1,env,index_io){
return (function (p1__20830_SHARP_){
return cljs.core.contains_QMARK_.call(null,attrs,p1__20830_SHARP_);
});})(p__20831,queue,attributes,vec__20833,seq__20834,first__20835,seq__20834__$1,attr,rest,attrs,map__20832,map__20832__$1,env,index_io))
),cljs.core.keys.call(null,cljs.core.get.call(null,index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([attr]))));
var G__20838 = attrs;
p__20831 = G__20836;
queue = G__20837;
attributes = G__20838;
continue;
} else {
return attributes;
}
break;
}
});
com.wsscode.pathom3.connect.indexes.reachable_attributes_for_groups_STAR_ = (function com$wsscode$pathom3$connect$indexes$reachable_attributes_for_groups_STAR_(p__20842,groups,attributes){
var map__20843 = p__20842;
var map__20843__$1 = cljs.core.__destructure_map.call(null,map__20843);
var index_io = cljs.core.get.call(null,map__20843__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042));
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__20839_SHARP_){
return cljs.core.every_QMARK_.call(null,(function (x){
return cljs.core.contains_QMARK_.call(null,attributes,x);
}),p1__20839_SHARP_);
})),cljs.core.mapcat.call(null,(function (p1__20840_SHARP_){
return cljs.core.keys.call(null,cljs.core.get.call(null,index_io,p1__20840_SHARP_));
})),cljs.core.remove.call(null,(function (p1__20841_SHARP_){
return cljs.core.contains_QMARK_.call(null,attributes,p1__20841_SHARP_);
}))),groups);
});
com.wsscode.pathom3.connect.indexes.attrs_multi_deps = (function com$wsscode$pathom3$connect$indexes$attrs_multi_deps(p__20845,attrs){
var map__20846 = p__20845;
var map__20846__$1 = cljs.core.__destructure_map.call(null,map__20846);
var index_attributes = cljs.core.get.call(null,map__20846__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-attributes","com.wsscode.pathom3.connect.indexes/index-attributes",-711449838));
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p1__20844_SHARP_){
return cljs.core.get_in.call(null,index_attributes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20844_SHARP_,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","attr-combinations","com.wsscode.pathom3.connect.indexes/attr-combinations",1300944473)], null));
})),attrs);
});
/**
 * Discover which attributes are available, given an index and a data context.
 * 
 *   Also includes the attributes from available-data.
 */
com.wsscode.pathom3.connect.indexes.reachable_attributes = (function com$wsscode$pathom3$connect$indexes$reachable_attributes(p__20847,available_data){
var map__20848 = p__20847;
var map__20848__$1 = cljs.core.__destructure_map.call(null,map__20848);
var env = map__20848__$1;
var index_io = cljs.core.get.call(null,map__20848__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042));
var queue = cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.get.call(null,index_io,cljs.core.PersistentHashSet.EMPTY))),cljs.core.keys.call(null,available_data));
var attrs = cljs.core.persistent_BANG_.call(null,com.wsscode.pathom3.connect.indexes.reachable_attributes_STAR_.call(null,env,queue,cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY)));
var group_reaches = com.wsscode.pathom3.connect.indexes.reachable_attributes_for_groups_STAR_.call(null,env,com.wsscode.pathom3.connect.indexes.attrs_multi_deps.call(null,env,attrs),attrs);
while(true){
if(cljs.core.seq.call(null,group_reaches)){
var new_attrs = cljs.core.persistent_BANG_.call(null,com.wsscode.pathom3.connect.indexes.reachable_attributes_STAR_.call(null,env,group_reaches,cljs.core.transient$.call(null,attrs)));
var G__20849 = new_attrs;
var G__20850 = com.wsscode.pathom3.connect.indexes.reachable_attributes_for_groups_STAR_.call(null,env,com.wsscode.pathom3.connect.indexes.attrs_multi_deps.call(null,env,new_attrs),new_attrs);
attrs = G__20849;
group_reaches = G__20850;
continue;
} else {
return attrs;
}
break;
}
});
com.wsscode.pathom3.connect.indexes.reachable_paths_STAR_ = (function com$wsscode$pathom3$connect$indexes$reachable_paths_STAR_(p__20852,queue,paths){
while(true){
var map__20853 = p__20852;
var map__20853__$1 = cljs.core.__destructure_map.call(null,map__20853);
var env = map__20853__$1;
var index_io = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042));
if(cljs.core.seq.call(null,queue)){
var vec__20854 = queue;
var seq__20855 = cljs.core.seq.call(null,vec__20854);
var first__20856 = cljs.core.first.call(null,seq__20855);
var seq__20855__$1 = cljs.core.next.call(null,seq__20855);
var vec__20857 = first__20856;
var attr = cljs.core.nth.call(null,vec__20857,(0),null);
var sub = cljs.core.nth.call(null,vec__20857,(1),null);
var rest = seq__20855__$1;
var attrs = cljs.core.update.call(null,paths,attr,com.wsscode.pathom3.format.shape_descriptor.merge_shapes,sub);
var G__20860 = env;
var G__20861 = cljs.core.into.call(null,rest,cljs.core.remove.call(null,((function (p__20852,queue,paths,vec__20854,seq__20855,first__20856,seq__20855__$1,vec__20857,attr,sub,rest,attrs,map__20853,map__20853__$1,env,index_io){
return (function (p1__20851_SHARP_){
return cljs.core.contains_QMARK_.call(null,attrs,cljs.core.key.call(null,p1__20851_SHARP_));
});})(p__20852,queue,paths,vec__20854,seq__20855,first__20856,seq__20855__$1,vec__20857,attr,sub,rest,attrs,map__20853,map__20853__$1,env,index_io))
),cljs.core.get.call(null,index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
var G__20862 = attrs;
p__20852 = G__20860;
queue = G__20861;
paths = G__20862;
continue;
} else {
return paths;
}
break;
}
});
com.wsscode.pathom3.connect.indexes.reachable_paths_for_groups_STAR_ = (function com$wsscode$pathom3$connect$indexes$reachable_paths_for_groups_STAR_(p__20865,groups,attributes){
var map__20866 = p__20865;
var map__20866__$1 = cljs.core.__destructure_map.call(null,map__20866);
var index_io = cljs.core.get.call(null,map__20866__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042));
return com.wsscode.misc.coll.remove_keys.call(null,(function (p1__20864_SHARP_){
return cljs.core.contains_QMARK_.call(null,attributes,p1__20864_SHARP_);
}),cljs.core.reduce.call(null,(function (group,attr){
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,group,cljs.core.get.call(null,index_io,attr));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filterv.call(null,(function (p1__20863_SHARP_){
return cljs.core.every_QMARK_.call(null,(function (x){
return cljs.core.contains_QMARK_.call(null,attributes,x);
}),p1__20863_SHARP_);
}),groups)));
});
/**
 * Discover which paths are available, given an index and a data context.
 * 
 *   Also includes the attributes from available-data.
 */
com.wsscode.pathom3.connect.indexes.reachable_paths = (function com$wsscode$pathom3$connect$indexes$reachable_paths(p__20867,available_data){
var map__20868 = p__20867;
var map__20868__$1 = cljs.core.__destructure_map.call(null,map__20868);
var env = map__20868__$1;
var index_io = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-io","com.wsscode.pathom3.connect.indexes/index-io",-1535152042));
var queue = com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,cljs.core.get.call(null,index_io,cljs.core.PersistentHashSet.EMPTY),available_data);
var paths = com.wsscode.pathom3.connect.indexes.reachable_paths_STAR_.call(null,env,queue,cljs.core.PersistentArrayMap.EMPTY);
var group_reaches = com.wsscode.pathom3.connect.indexes.reachable_paths_for_groups_STAR_.call(null,env,com.wsscode.pathom3.connect.indexes.attrs_multi_deps.call(null,env,cljs.core.keys.call(null,paths)),paths);
while(true){
if(cljs.core.seq.call(null,group_reaches)){
var new_attrs = com.wsscode.pathom3.connect.indexes.reachable_paths_STAR_.call(null,env,group_reaches,paths);
var G__20869 = new_attrs;
var G__20870 = com.wsscode.pathom3.connect.indexes.reachable_paths_for_groups_STAR_.call(null,env,com.wsscode.pathom3.connect.indexes.attrs_multi_deps.call(null,env,cljs.core.keys.call(null,new_attrs)),new_attrs);
paths = G__20869;
group_reaches = G__20870;
continue;
} else {
return paths;
}
break;
}
});
/**
 * Discover which attributes are available, given an index and a data context.
 */
com.wsscode.pathom3.connect.indexes.attribute_reachable_QMARK_ = (function com$wsscode$pathom3$connect$indexes$attribute_reachable_QMARK_(env,available_data,attr){
return cljs.core.contains_QMARK_.call(null,com.wsscode.pathom3.connect.indexes.reachable_attributes.call(null,env,available_data),attr);
});

//# sourceMappingURL=indexes.js.map
