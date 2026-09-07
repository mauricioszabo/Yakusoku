// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.connect.planner');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.misc.refs');
goog.require('com.wsscode.pathom3.attribute');
goog.require('com.wsscode.pathom3.cache');
goog.require('com.wsscode.pathom3.connect.indexes');
goog.require('com.wsscode.pathom3.connect.operation');
goog.require('com.wsscode.pathom3.format.eql');
goog.require('com.wsscode.pathom3.format.shape_descriptor');
goog.require('com.wsscode.pathom3.path');
goog.require('com.wsscode.pathom3.placeholder');
goog.require('com.wsscode.pathom3.plugin');
goog.require('edn_query_language.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__21929){
return cljs.core.set_QMARK_.call(null,G__21929);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__21930){
return cljs.core.map_QMARK_.call(null,G__21930);
}),(function (G__21930){
return cljs.core.contains_QMARK_.call(null,G__21930,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574));
})], null),(function (G__21930){
return ((cljs.core.map_QMARK_.call(null,G__21930)) && (cljs.core.contains_QMARK_.call(null,G__21930,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph-fn","com.wsscode.pathom3.connect.planner/graph-fn",-288964380),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","user-request-shape","com.wsscode.pathom3.connect.planner/user-request-shape",-1740332989),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","attr-deps-trail","com.wsscode.pathom3.connect.planner/attr-deps-trail",-81376567),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","attr-resolvers-trail","com.wsscode.pathom3.connect.planner/attr-resolvers-trail",106750879),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__21931){
return cljs.core.set_QMARK_.call(null,G__21931);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","branch-type","com.wsscode.pathom3.connect.planner/branch-type",1641366236),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),"null",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","id-counter","com.wsscode.pathom3.connect.planner/id-counter",1593852285),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-type","com.wsscode.pathom3.connect.planner/node-type",-1525481049),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-resolver","com.wsscode.pathom3.connect.planner/node-resolver",391730247),"null",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-or","com.wsscode.pathom3.connect.planner/node-or",-1576441526),"null",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-and","com.wsscode.pathom3.connect.planner/node-and",2027136749),"null",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-unknown","com.wsscode.pathom3.connect.planner/node-unknown",-1165199202),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-resolver","com.wsscode.pathom3.connect.planner/node-resolver",391730247),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-or","com.wsscode.pathom3.connect.planner/node-or",-1576441526),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-and","com.wsscode.pathom3.connect.planner/node-and",2027136749),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-unknown","com.wsscode.pathom3.connect.planner/node-unknown",-1165199202),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__21932){
return cljs.core.map_QMARK_.call(null,G__21932);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-resolver->nodes","com.wsscode.pathom3.connect.planner/index-resolver->nodes",-1876314434),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__21933){
return cljs.core.map_QMARK_.call(null,G__21933);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-depth","com.wsscode.pathom3.connect.planner/node-depth",-1056073078),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-branch-depth","com.wsscode.pathom3.connect.planner/node-branch-depth",-702915247),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-chain-depth","com.wsscode.pathom3.connect.planner/node-chain-depth",-1372426841),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-resolution-checkpoint?","com.wsscode.pathom3.connect.planner/node-resolution-checkpoint?",1547353457),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
com.wsscode.pathom3.connect.planner.ignore_nils = (function com$wsscode$pathom3$connect$planner$ignore_nils(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__21934){
var vec__21935 = p__21934;
var _ = cljs.core.nth.call(null,vec__21935,(0),null);
var v = cljs.core.nth.call(null,vec__21935,(1),null);
return (v == null);
})),m);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("com.wsscode.pathom3.connect.planner","ignore-nils","com.wsscode.pathom3.connect.planner/ignore-nils",-2044194730,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524)], null))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("com.wsscode.pathom3.connect.planner","ignore-nils","com.wsscode.pathom3.connect.planner/ignore-nils",-2044194730,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("com.wsscode.pathom3.connect.planner","ignore-nils","com.wsscode.pathom3.connect.planner/ignore-nils",-2044194730,null)),com.wsscode.pathom3.connect.planner.ignore_nils,null,true),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__21938){
return cljs.core.map_QMARK_.call(null,G__21938);
})], null),(function (G__21938){
return cljs.core.map_QMARK_.call(null,G__21938);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524)], null)]))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__21939){
return cljs.core.map_QMARK_.call(null,G__21939);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-for-attrs","com.wsscode.pathom3.connect.planner/source-for-attrs",-82657270),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-sym","com.wsscode.pathom3.connect.planner/source-sym",-706962767),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-paths","com.wsscode.pathom3.connect.planner/unreachable-paths",614064297),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warnings","com.wsscode.pathom3.connect.planner/warnings",149755478),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377)], null))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__21941){
return cljs.core.map_QMARK_.call(null,G__21941);
}),(function (G__21941){
return cljs.core.contains_QMARK_.call(null,G__21941,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377));
})], null),(function (G__21941){
return ((cljs.core.map_QMARK_.call(null,G__21941)) && (cljs.core.contains_QMARK_.call(null,G__21941,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377)))], null),null])),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warn","com.wsscode.pathom3.connect.planner/warn",1381461377)], null))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__21940){
return cljs.core.coll_QMARK_.call(null,G__21940);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","conflict-params","com.wsscode.pathom3.connect.planner/conflict-params",58266122),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713),new cljs.core.Keyword("com.wsscode.pathom3.format.eql","prop->ast","com.wsscode.pathom3.format.eql/prop->ast",-87545218),new cljs.core.Keyword("com.wsscode.pathom3.format.eql","prop->ast","com.wsscode.pathom3.format.eql/prop->ast",-87545218));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","mutations","com.wsscode.pathom3.connect.planner/mutations",-1571107042),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__21942){
return cljs.core.vector_QMARK_.call(null,G__21942);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nested-process","com.wsscode.pathom3.connect.planner/nested-process",-35632382),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholders","com.wsscode.pathom3.connect.planner/placeholders",-1690563362),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attributes-set","com.wsscode.pathom3.attribute/attributes-set",-1031622660));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__21943){
return cljs.core.set_QMARK_.call(null,G__21943);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","optimize-graph?","com.wsscode.pathom3.connect.planner/optimize-graph?",95148922),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","plan-cache*","com.wsscode.pathom3.connect.planner/plan-cache*",-982885642),new cljs.core.Symbol("com.wsscode.pathom3.cache","cache-store?","com.wsscode.pathom3.cache/cache-store?",273516461,null),com.wsscode.pathom3.cache.cache_store_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshots*","com.wsscode.pathom3.connect.planner/snapshots*",-1855095128),new cljs.core.Symbol("com.wsscode.misc.refs","atom?","com.wsscode.misc.refs/atom?",-53238677,null),com.wsscode.misc.refs.atom_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","denorm-update-node","com.wsscode.pathom3.connect.planner/denorm-update-node",750983148),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholder-use-source-entity?","com.wsscode.pathom3.connect.planner/placeholder-use-source-entity?",1542269498),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);








/**
 * Return the next node ID in the system, its an incremental number
 */
com.wsscode.pathom3.connect.planner.next_node_id = (function com$wsscode$pathom3$connect$planner$next_node_id(p__21944){
var map__21945 = p__21944;
var map__21945__$1 = cljs.core.__destructure_map.call(null,map__21945);
var id_counter = cljs.core.get.call(null,map__21945__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","id-counter","com.wsscode.pathom3.connect.planner/id-counter",1593852285));
return cljs.core.swap_BANG_.call(null,id_counter,cljs.core.inc);
});
com.wsscode.pathom3.connect.planner.new_node = (function com$wsscode$pathom3$connect$planner$new_node(env,node_data){
return cljs.core.assoc.call(null,node_data,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),com.wsscode.pathom3.connect.planner.next_node_id.call(null,env));
});
com.wsscode.pathom3.connect.planner.get_node = (function com$wsscode$pathom3$connect$planner$get_node(var_args){
var G__21947 = arguments.length;
switch (G__21947) {
case 2:
return com.wsscode.pathom3.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.connect.planner.get_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2 = (function (graph,node_id){
return cljs.core.get_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null));
}));

(com.wsscode.pathom3.connect.planner.get_node.cljs$core$IFn$_invoke$arity$3 = (function (graph,node_id,k){
return cljs.core.get_in.call(null,graph,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id,k], null));
}));

(com.wsscode.pathom3.connect.planner.get_node.cljs$lang$maxFixedArity = 3);

/**
 * Get the node plus the resolver config, when the node has an op-name. If node is
 *   not a resolver not it returns nil.
 */
com.wsscode.pathom3.connect.planner.node_with_resolver_config = (function com$wsscode$pathom3$connect$planner$node_with_resolver_config(graph,env,node_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var node_name = (function (){var or__5002__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-op-name","com.wsscode.pathom3.connect.planner/source-op-name",396914378).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(node);
}
})();
var temp__5821__auto__ = (function (){var G__21949 = node_name;
if((G__21949 == null)){
return null;
} else {
return com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,G__21949);
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var config = temp__5821__auto__;
return cljs.core.merge.call(null,node,config);
} else {
return null;
}
});
/**
 * Set attribute k about node-id. Only assoc when node exists, otherwise its a noop.
 */
com.wsscode.pathom3.connect.planner.assoc_node = (function com$wsscode$pathom3$connect$planner$assoc_node(graph,node_id,k,v){
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))){
return cljs.core.assoc_in.call(null,graph,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id,k], null),v);
} else {
return graph;
}
});
/**
 * Update a given node in a graph, like Clojure native update.
 */
com.wsscode.pathom3.connect.planner.update_node = (function com$wsscode$pathom3$connect$planner$update_node(var_args){
var G__21959 = arguments.length;
switch (G__21959) {
case 4:
return com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___21966 = arguments.length;
var i__5727__auto___21967 = (0);
while(true){
if((i__5727__auto___21967 < len__5726__auto___21966)){
args_arr__5751__auto__.push((arguments[i__5727__auto___21967]));

var G__21968 = (i__5727__auto___21967 + (1));
i__5727__auto___21967 = G__21968;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((7) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((7)),(0),null)):null);
return com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5752__auto__);

}
});

(com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$4 = (function (graph,node_id,k,f){
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))){
return cljs.core.update_in.call(null,graph,(function (){var G__21960 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null);
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__21960,k);
} else {
return G__21960;
}
})(),f);
} else {
return graph;
}
}));

(com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$5 = (function (graph,node_id,k,f,v){
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))){
return cljs.core.update_in.call(null,graph,(function (){var G__21961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null);
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__21961,k);
} else {
return G__21961;
}
})(),f,v);
} else {
return graph;
}
}));

(com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$6 = (function (graph,node_id,k,f,v,v2){
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))){
return cljs.core.update_in.call(null,graph,(function (){var G__21962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null);
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__21962,k);
} else {
return G__21962;
}
})(),f,v,v2);
} else {
return graph;
}
}));

(com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$7 = (function (graph,node_id,k,f,v,v2,v3){
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))){
return cljs.core.update_in.call(null,graph,(function (){var G__21963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null);
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__21963,k);
} else {
return G__21963;
}
})(),f,v,v2,v3);
} else {
return graph;
}
}));

(com.wsscode.pathom3.connect.planner.update_node.cljs$core$IFn$_invoke$arity$variadic = (function (graph,node_id,k,f,v,v2,v3,args){
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id))){
return cljs.core.apply.call(null,cljs.core.update_in,graph,(function (){var G__21964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null);
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__21964,k);
} else {
return G__21964;
}
})(),f,v,v2,v3,args);
} else {
return graph;
}
}));

/** @this {Function} */
(com.wsscode.pathom3.connect.planner.update_node.cljs$lang$applyTo = (function (seq21951){
var G__21952 = cljs.core.first.call(null,seq21951);
var seq21951__$1 = cljs.core.next.call(null,seq21951);
var G__21953 = cljs.core.first.call(null,seq21951__$1);
var seq21951__$2 = cljs.core.next.call(null,seq21951__$1);
var G__21954 = cljs.core.first.call(null,seq21951__$2);
var seq21951__$3 = cljs.core.next.call(null,seq21951__$2);
var G__21955 = cljs.core.first.call(null,seq21951__$3);
var seq21951__$4 = cljs.core.next.call(null,seq21951__$3);
var G__21956 = cljs.core.first.call(null,seq21951__$4);
var seq21951__$5 = cljs.core.next.call(null,seq21951__$4);
var G__21957 = cljs.core.first.call(null,seq21951__$5);
var seq21951__$6 = cljs.core.next.call(null,seq21951__$5);
var G__21958 = cljs.core.first.call(null,seq21951__$6);
var seq21951__$7 = cljs.core.next.call(null,seq21951__$6);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21952,G__21953,G__21954,G__21955,G__21956,G__21957,G__21958,seq21951__$7);
}));

(com.wsscode.pathom3.connect.planner.update_node.cljs$lang$maxFixedArity = (7));

/**
 * Returns the root node of the graph.
 */
com.wsscode.pathom3.connect.planner.get_root_node = (function com$wsscode$pathom3$connect$planner$get_root_node(p__21969){
var map__21970 = p__21969;
var map__21970__$1 = cljs.core.__destructure_map.call(null,map__21970);
var graph = map__21970__$1;
var root = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212));
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph,root);
});
com.wsscode.pathom3.connect.planner.set_root_node = (function com$wsscode$pathom3$connect$planner$set_root_node(graph,node_id){
if(cljs.core.truth_(node_id)){
return cljs.core.assoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212),node_id);
} else {
return cljs.core.dissoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212));
}
});
com.wsscode.pathom3.connect.planner.add_resolvers_trail = (function com$wsscode$pathom3$connect$planner$add_resolvers_trail(env,resolvers){
return cljs.core.update.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","attr-resolvers-trail","com.wsscode.pathom3.connect.planner/attr-resolvers-trail",106750879),(function (p1__21971_SHARP_){
return cljs.core.into.call(null,(function (){var or__5002__auto__ = p1__21971_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),resolvers);
}));
});
/**
 * Return node branches, which can be the ::run-and or the ::run-or part of the node.
 */
com.wsscode.pathom3.connect.planner.node_branches = (function com$wsscode$pathom3$connect$planner$node_branches(node){
var or__5002__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891).cljs$core$IFn$_invoke$arity$1(node);
}
});
com.wsscode.pathom3.connect.planner.node_branch_type = (function com$wsscode$pathom3$connect$planner$node_branch_type(node){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891);
} else {
return null;
}
}
});
/**
 * Returns true when the node is a branch node type.
 */
com.wsscode.pathom3.connect.planner.branch_node_QMARK_ = (function com$wsscode$pathom3$connect$planner$branch_node_QMARK_(node){
return cljs.core.boolean$.call(null,com.wsscode.pathom3.connect.planner.node_branches.call(null,node));
});
/**
 * Return a keyword describing the type of the node.
 */
com.wsscode.pathom3.connect.planner.node_kind = (function com$wsscode$pathom3$connect$planner$node_kind(node){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-resolver","com.wsscode.pathom3.connect.planner/node-resolver",391730247);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-and","com.wsscode.pathom3.connect.planner/node-and",2027136749);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-or","com.wsscode.pathom3.connect.planner/node-or",-1576441526);
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-unknown","com.wsscode.pathom3.connect.planner/node-unknown",-1165199202);

}
}
}
});
/**
 * Return a string representation for the node, for resolver nodes this is the
 *   symbol, branch nodes get AND / OR respectively.
 */
com.wsscode.pathom3.connect.planner.node__GT_label = (function com$wsscode$pathom3$connect$planner$node__GT_label(node){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(node))?"AND":null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891).cljs$core$IFn$_invoke$arity$1(node))){
return "OR";
} else {
return null;
}
}
}
})());
});
com.wsscode.pathom3.connect.planner.attr_optional_QMARK_ = (function com$wsscode$pathom3$connect$planner$attr_optional_QMARK_(p__21972,attribute_kw){
var map__21973 = p__21972;
var map__21973__$1 = cljs.core.__destructure_map.call(null,map__21973);
var index_ast = cljs.core.get.call(null,map__21973__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713));
var attribute = cljs.core.get.call(null,index_ast,attribute_kw);
var or__5002__auto__ = (attribute == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.get_in.call(null,attribute,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517)], null));
}
});
com.wsscode.pathom3.connect.planner.node_optional_QMARK_ = (function com$wsscode$pathom3$connect$planner$node_optional_QMARK_(p__21974){
var map__21975 = p__21974;
var map__21975__$1 = cljs.core.__destructure_map.call(null,map__21975);
var params = cljs.core.get.call(null,map__21975__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210));
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517).cljs$core$IFn$_invoke$arity$1(params);
});
com.wsscode.pathom3.connect.planner.add_node_parent = (function com$wsscode$pathom3$connect$planner$add_node_parent(graph,node_id,node_parent_id){
if(cljs.core.truth_(node_parent_id)){
} else {
throw (new Error(["Assert failed: ","Tried to add after node with nil value","\n","node-parent-id"].join('')));
}

return com.wsscode.pathom3.connect.planner.update_node.call(null,graph,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),com.wsscode.misc.coll.sconj,node_parent_id);
});
/**
 * Disconnect the parent node node-parent-id from node node-id
 */
com.wsscode.pathom3.connect.planner.remove_node_parent = (function com$wsscode$pathom3$connect$planner$remove_node_parent(graph,node_id,node_parent_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var node_parents_SINGLEQUOTE_ = cljs.core.disj.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122).cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentHashSet.EMPTY),node_parent_id);
if(cljs.core.seq.call(null,node_parents_SINGLEQUOTE_)){
return com.wsscode.pathom3.connect.planner.assoc_node.call(null,graph,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),node_parents_SINGLEQUOTE_);
} else {
if(cljs.core.truth_(node)){
return cljs.core.update_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122));
} else {
return graph;
}
}
});
/**
 * Update the node-id run-next value, if run-next is nil the attribute
 *   will be removed from the map.
 */
com.wsscode.pathom3.connect.planner.set_node_run_next_STAR_ = (function com$wsscode$pathom3$connect$planner$set_node_run_next_STAR_(graph,node_id,run_next){
if(cljs.core.truth_(run_next)){
return com.wsscode.pathom3.connect.planner.assoc_node.call(null,graph,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140),run_next);
} else {
return cljs.core.update_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
}
});
/**
 * Set the node run next value and add the node-parent counterpart. Noop if target
 *   and run next are the same node.
 */
com.wsscode.pathom3.connect.planner.set_node_run_next = (function com$wsscode$pathom3$connect$planner$set_node_run_next(var_args){
var G__21977 = arguments.length;
switch (G__21977) {
case 2:
return com.wsscode.pathom3.connect.planner.set_node_run_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.connect.planner.set_node_run_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.planner.set_node_run_next.cljs$core$IFn$_invoke$arity$2 = (function (graph,run_next){
return com.wsscode.pathom3.connect.planner.set_node_run_next.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph),run_next);
}));

(com.wsscode.pathom3.connect.planner.set_node_run_next.cljs$core$IFn$_invoke$arity$3 = (function (graph,target_node_id,run_next){
var map__21978 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,target_node_id);
var map__21978__$1 = cljs.core.__destructure_map.call(null,map__21978);
var target_run_next = cljs.core.get.call(null,map__21978__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var graph__$1 = (cljs.core.truth_(target_run_next)?com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,graph,target_run_next,target_node_id):graph);
if(cljs.core.not.call(null,run_next)){
return com.wsscode.pathom3.connect.planner.set_node_run_next_STAR_.call(null,graph__$1,target_node_id,run_next);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = run_next;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.call(null,target_node_id,run_next);
} else {
return and__5000__auto__;
}
})())){
return com.wsscode.pathom3.connect.planner.add_node_parent.call(null,com.wsscode.pathom3.connect.planner.set_node_run_next_STAR_.call(null,graph__$1,target_node_id,run_next),run_next,target_node_id);
} else {
return graph__$1;

}
}
}));

(com.wsscode.pathom3.connect.planner.set_node_run_next.cljs$lang$maxFixedArity = 3);

/**
 * Set node expects, this also removes previous references from index-attrs and add
 *   new ones for the new expects.
 */
com.wsscode.pathom3.connect.planner.set_node_expects = (function com$wsscode$pathom3$connect$planner$set_node_expects(graph,node_id,expects){
var _LT__GT_ = com.wsscode.pathom3.connect.planner.assoc_node.call(null,com.wsscode.pathom3.connect.planner.remove_node_expects_index_attrs.call(null,graph,node_id),node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),expects);
return cljs.core.reduce.call(null,(function (g,attr){
return cljs.core.update_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),attr], null),com.wsscode.misc.coll.sconj,node_id);
}),_LT__GT_,cljs.core.keys.call(null,expects));
});
com.wsscode.pathom3.connect.planner.set_node_source_for_attrs = (function com$wsscode$pathom3$connect$planner$set_node_source_for_attrs(var_args){
var G__21981 = arguments.length;
switch (G__21981) {
case 2:
return com.wsscode.pathom3.connect.planner.set_node_source_for_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.connect.planner.set_node_source_for_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.planner.set_node_source_for_attrs.cljs$core$IFn$_invoke$arity$2 = (function (graph,env){
return com.wsscode.pathom3.connect.planner.set_node_source_for_attrs.call(null,graph,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph));
}));

(com.wsscode.pathom3.connect.planner.set_node_source_for_attrs.cljs$core$IFn$_invoke$arity$3 = (function (graph,p__21982,node_id){
var map__21983 = p__21982;
var map__21983__$1 = cljs.core.__destructure_map.call(null,map__21983);
var attribute = cljs.core.get.call(null,map__21983__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
if(cljs.core.truth_(node_id)){
return cljs.core.update_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),attribute], null),com.wsscode.misc.coll.sconj,node_id);
} else {
return graph;
}
}));

(com.wsscode.pathom3.connect.planner.set_node_source_for_attrs.cljs$lang$maxFixedArity = 3);

com.wsscode.pathom3.connect.planner.add_branch_to_node = (function com$wsscode$pathom3$connect$planner$add_branch_to_node(graph,target_node_id,branch_type,new_branch_node_id){
return com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.add_node_parent.call(null,graph,new_branch_node_id,target_node_id),target_node_id,branch_type,com.wsscode.misc.coll.sconj,new_branch_node_id);
});
com.wsscode.pathom3.connect.planner.add_node_branches = (function com$wsscode$pathom3$connect$planner$add_node_branches(graph,target_node_id,branch_type,node_ids){
return cljs.core.reduce.call(null,(function (g,node_id){
return com.wsscode.pathom3.connect.planner.add_branch_to_node.call(null,g,target_node_id,branch_type,node_id);
}),graph,node_ids);
});
/**
 * When node-id is a branch node, remove all node-parents associated from its children.
 */
com.wsscode.pathom3.connect.planner.remove_branch_node_parents = (function com$wsscode$pathom3$connect$planner$remove_branch_node_parents(graph,node_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.node_branches.call(null,node);
if(cljs.core.truth_(temp__5821__auto__)){
var branches = temp__5821__auto__;
return cljs.core.reduce.call(null,(function (g,n_id){
return com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,g,n_id,node_id);
}),graph,branches);
} else {
return graph;
}
});
/**
 * Disconnect a branch node from its parents.
 */
com.wsscode.pathom3.connect.planner.remove_from_parent_branch = (function com$wsscode$pathom3$connect$planner$remove_from_parent_branch(graph,node_id,parent_id){
var parent_node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,parent_id);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(parent_node),node_id)){
return com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,graph,parent_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),cljs.core.disj,node_id),node_id,parent_id);
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891).cljs$core$IFn$_invoke$arity$1(parent_node),node_id)){
return com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,graph,parent_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),cljs.core.disj,node_id),node_id,parent_id);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(parent_node),node_id)){
return com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,com.wsscode.pathom3.connect.planner.set_node_run_next.call(null,graph,parent_id,null),node_id,parent_id);
} else {
return graph;

}
}
}
});
/**
 * Disconnect a branch node from its parents.
 */
com.wsscode.pathom3.connect.planner.remove_from_parent_branches = (function com$wsscode$pathom3$connect$planner$remove_from_parent_branches(graph,p__21987){
var map__21988 = p__21987;
var map__21988__$1 = cljs.core.__destructure_map.call(null,map__21988);
var node_id = cljs.core.get.call(null,map__21988__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var node_parents = cljs.core.get.call(null,map__21988__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122));
return cljs.core.reduce.call(null,(function (p1__21985_SHARP_,p2__21986_SHARP_){
return com.wsscode.pathom3.connect.planner.remove_from_parent_branch.call(null,p1__21985_SHARP_,node_id,p2__21986_SHARP_);
}),graph,node_parents);
});
com.wsscode.pathom3.connect.planner.remove_run_next_edge = (function com$wsscode$pathom3$connect$planner$remove_run_next_edge(graph,node_id){
var map__21989 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__21989__$1 = cljs.core.__destructure_map.call(null,map__21989);
var run_next = cljs.core.get.call(null,map__21989__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
if(cljs.core.truth_(run_next)){
return com.wsscode.pathom3.connect.planner.set_node_run_next.call(null,com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,graph,run_next,node_id),node_id,null);
} else {
return graph;
}
});
/**
 * Remove all node connections. This disconnect the nodes from parents and run-next.
 */
com.wsscode.pathom3.connect.planner.remove_node_edges = (function com$wsscode$pathom3$connect$planner$remove_node_edges(graph,node_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
return com.wsscode.pathom3.connect.planner.remove_run_next_edge.call(null,com.wsscode.pathom3.connect.planner.remove_from_parent_branches.call(null,graph,node),node_id);
});
/**
 * Move a branch item from source parent target parent.
 */
com.wsscode.pathom3.connect.planner.move_branch_item_node = (function com$wsscode$pathom3$connect$planner$move_branch_item_node(graph,target_parent_id,node_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var branch_type = com.wsscode.pathom3.connect.planner.node_branch_type.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,target_parent_id));
return com.wsscode.pathom3.connect.planner.add_branch_to_node.call(null,com.wsscode.pathom3.connect.planner.remove_from_parent_branches.call(null,graph,node),target_parent_id,branch_type,node_id);
});
com.wsscode.pathom3.connect.planner.disj_rem = (function com$wsscode$pathom3$connect$planner$disj_rem(m,k,item){
var new_val = cljs.core.disj.call(null,cljs.core.get.call(null,m,k),item);
if(cljs.core.seq.call(null,new_val)){
return cljs.core.assoc.call(null,m,k,new_val);
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
/**
 * Since the node has attribute indexes associated with it, this removes those links
 *   considering the attributes listed on expects.
 */
com.wsscode.pathom3.connect.planner.remove_node_expects_index_attrs = (function com$wsscode$pathom3$connect$planner$remove_node_expects_index_attrs(graph,node_id){
var expects = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040));
return cljs.core.reduce.call(null,(function (g,attr){
return cljs.core.update.call(null,g,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),com.wsscode.pathom3.connect.planner.disj_rem,attr,node_id);
}),graph,cljs.core.keys.call(null,expects));
});
/**
 * Remove a node from the graph. Doesn't remove any references, caution!
 */
com.wsscode.pathom3.connect.planner.remove_node_STAR_ = (function com$wsscode$pathom3$connect$planner$remove_node_STAR_(graph,node_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var op_name = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(node);
return cljs.core.update.call(null,(function (){var G__21990 = graph;
if(cljs.core.truth_(op_name)){
return cljs.core.update.call(null,G__21990,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-resolver->nodes","com.wsscode.pathom3.connect.planner/index-resolver->nodes",-1876314434),(function (idx){
var next = cljs.core.disj.call(null,cljs.core.get.call(null,idx,op_name),node_id);
if(cljs.core.seq.call(null,next)){
return cljs.core.assoc.call(null,idx,op_name,next);
} else {
return cljs.core.dissoc.call(null,idx,op_name);
}
}));
} else {
return G__21990;
}
})(),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),cljs.core.dissoc,node_id);
});
/**
 * Remove a node from the graph. In case of resolver nodes it also removes them
 *   from the ::index-syms, the index-attrs and after node references.
 */
com.wsscode.pathom3.connect.planner.remove_node = (function com$wsscode$pathom3$connect$planner$remove_node(graph,node_id){
var map__21992 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__21992__$1 = cljs.core.__destructure_map.call(null,map__21992);
var node = map__21992__$1;
var run_next = cljs.core.get.call(null,map__21992__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var node_parents = cljs.core.get.call(null,map__21992__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122));
if((cljs.core.truth_(node_parents)?cljs.core.every_QMARK_.call(null,(function (p1__21991_SHARP_){
return cljs.core.not_EQ_.call(null,node_id,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,p1__21991_SHARP_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140)));
}),node_parents):true)){
} else {
throw (new Error(["Assert failed: ",["Tried to remove node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_id)," that still contains references pointing to it. Move\n      the run-next references from the pointer nodes before removing it. Also check if\n      parent is branch and trying to merge."].join(''),"\n","(if node-parents (every? (fn* [p1__21991#] (not= node-id (get-node graph p1__21991# :com.wsscode.pathom3.connect.planner/run-next))) node-parents) true)"].join('')));
}

return com.wsscode.pathom3.connect.planner.remove_node_STAR_.call(null,com.wsscode.pathom3.connect.planner.remove_node_expects_index_attrs.call(null,com.wsscode.pathom3.connect.planner.remove_from_parent_branches.call(null,com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,com.wsscode.pathom3.connect.planner.remove_branch_node_parents.call(null,graph,node_id),run_next,node_id),node),node_id),node_id);
});
/**
 * Given a graph and a node-id, walks the run-next chain until it finds the first node
 *   that's connected to a branch parent (via branch relationship, not as run next) or
 *   the root.
 */
com.wsscode.pathom3.connect.planner.find_chain_start = (function com$wsscode$pathom3$connect$planner$find_chain_start(graph,node_id){
while(true){
var map__21993 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__21993__$1 = cljs.core.__destructure_map.call(null,map__21993);
var node_parents = cljs.core.get.call(null,map__21993__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122));
var parent_id = cljs.core.first.call(null,node_parents);
if(cljs.core.truth_(parent_id)){
var parent = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,parent_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(parent),node_id)){
var G__21994 = graph;
var G__21995 = parent_id;
graph = G__21994;
node_id = G__21995;
continue;
} else {
return node_id;
}
} else {
return node_id;
}
break;
}
});
/**
 * Remove a complete node cluster, starting from some node root.
 */
com.wsscode.pathom3.connect.planner.remove_root_node_cluster = (function com$wsscode$pathom3$connect$planner$remove_root_node_cluster(graph,node_ids){
while(true){
if(cljs.core.seq.call(null,node_ids)){
var vec__21996 = node_ids;
var seq__21997 = cljs.core.seq.call(null,vec__21996);
var first__21998 = cljs.core.first.call(null,seq__21997);
var seq__21997__$1 = cljs.core.next.call(null,seq__21997);
var node_id = first__21998;
var rest = seq__21997__$1;
var node_id_SINGLEQUOTE_ = com.wsscode.pathom3.connect.planner.find_chain_start.call(null,graph,node_id);
var map__21999 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id_SINGLEQUOTE_);
var map__21999__$1 = cljs.core.__destructure_map.call(null,map__21999);
var node = map__21999__$1;
var run_next = cljs.core.get.call(null,map__21999__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var branches = (function (){var or__5002__auto__ = com.wsscode.pathom3.connect.planner.node_branches.call(null,node);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var next_nodes = (function (){var G__22000 = branches;
if(cljs.core.truth_(run_next)){
return cljs.core.conj.call(null,G__22000,run_next);
} else {
return G__22000;
}
})();
var G__22001 = com.wsscode.pathom3.connect.planner.remove_node.call(null,graph,node_id_SINGLEQUOTE_);
var G__22002 = cljs.core.into.call(null,rest,next_nodes);
graph = G__22001;
node_ids = G__22002;
continue;
} else {
return graph;
}
break;
}
});
/**
 * Add new node to the graph, this add the node and the index of in ::index-syms.
 */
com.wsscode.pathom3.connect.planner.include_node = (function com$wsscode$pathom3$connect$planner$include_node(graph,p__22003){
var map__22004 = p__22003;
var map__22004__$1 = cljs.core.__destructure_map.call(null,map__22004);
var node = map__22004__$1;
var node_id = cljs.core.get.call(null,map__22004__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var op_name = cljs.core.get.call(null,map__22004__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var G__22005 = cljs.core.assoc_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),node_id], null),node);
if(cljs.core.truth_(op_name)){
return cljs.core.update_in.call(null,G__22005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-resolver->nodes","com.wsscode.pathom3.connect.planner/index-resolver->nodes",-1876314434),op_name], null),com.wsscode.misc.coll.sconj,node_id);
} else {
return G__22005;
}
});
com.wsscode.pathom3.connect.planner.create_root_and = (function com$wsscode$pathom3$connect$planner$create_root_and(graph,env,node_ids){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,node_ids))){
return com.wsscode.pathom3.connect.planner.set_root_node.call(null,graph,cljs.core.first.call(null,node_ids));
} else {
var map__22006 = com.wsscode.pathom3.connect.planner.new_node.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),com.wsscode.pathom3.connect.planner.expects_from_node_chains.call(null,graph,node_ids)], null));
var map__22006__$1 = cljs.core.__destructure_map.call(null,map__22006);
var and_node = map__22006__$1;
var and_node_id = cljs.core.get.call(null,map__22006__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var _LT__GT_ = com.wsscode.pathom3.connect.planner.set_root_node.call(null,com.wsscode.pathom3.connect.planner.add_node_branches.call(null,com.wsscode.pathom3.connect.planner.include_node.call(null,graph,and_node),and_node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),node_ids),and_node_id);
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,_LT__GT_,env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-create-and","com.wsscode.pathom3.connect.planner/snapshot-create-and",811113842),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Create root AND",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(_LT__GT_)]),node_ids),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(_LT__GT_),(1)])], null));
}
});
com.wsscode.pathom3.connect.planner.create_root_or = (function com$wsscode$pathom3$connect$planner$create_root_or(graph,p__22007,node_ids){
var map__22008 = p__22007;
var map__22008__$1 = cljs.core.__destructure_map.call(null,map__22008);
var env = map__22008__$1;
var attribute = cljs.core.get.call(null,map__22008__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,node_ids))){
return com.wsscode.pathom3.connect.planner.set_root_node.call(null,graph,cljs.core.first.call(null,node_ids));
} else {
var map__22009 = com.wsscode.pathom3.connect.planner.new_node.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,cljs.core.PersistentArrayMap.EMPTY])], null));
var map__22009__$1 = cljs.core.__destructure_map.call(null,map__22009);
var or_node = map__22009__$1;
var or_node_id = cljs.core.get.call(null,map__22009__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var _LT__GT_ = com.wsscode.pathom3.connect.planner.set_root_node.call(null,com.wsscode.pathom3.connect.planner.add_node_branches.call(null,com.wsscode.pathom3.connect.planner.include_node.call(null,graph,or_node),or_node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),node_ids),or_node_id);
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,_LT__GT_,env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-create-or","com.wsscode.pathom3.connect.planner/snapshot-create-or",1253927982),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Create root OR",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(_LT__GT_)]),node_ids),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(_LT__GT_),(1)])], null));
}
});
/**
 * For a specific attribute, return a vector containing the provides of each node of
 *   that resolver, or the current available data for it.
 */
com.wsscode.pathom3.connect.planner.node_attribute_provides = (function com$wsscode$pathom3$connect$planner$node_attribute_provides(graph,env,attr){
var temp__5821__auto__ = cljs.core.get_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),attr], null));
if(cljs.core.truth_(temp__5821__auto__)){
var available = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [available], null);
} else {
var G__22011 = cljs.core.get_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),attr], null));
if((G__22011 == null)){
return null;
} else {
return cljs.core.mapv.call(null,(function (p1__22010_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.planner.node_with_resolver_config.call(null,graph,env,p1__22010_SHARP_)),attr);
}),G__22011);
}
}
});
/**
 * Transfer the node parent from source node to target node. This function will also
 *   update the parents references to point to target node.
 */
com.wsscode.pathom3.connect.planner.transfer_node_parent = (function com$wsscode$pathom3$connect$planner$transfer_node_parent(graph,target_node_id,source_node_id,node_id){
var _LT__GT_ = com.wsscode.pathom3.connect.planner.add_node_parent.call(null,com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,graph,source_node_id,node_id),target_node_id,node_id);
if(cljs.core._EQ_.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140)),source_node_id)){
return com.wsscode.pathom3.connect.planner.set_node_run_next_STAR_.call(null,_LT__GT_,node_id,target_node_id);
} else {
if(cljs.core.contains_QMARK_.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884)),source_node_id)){
return com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.add_branch_to_node.call(null,_LT__GT_,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),target_node_id),node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),cljs.core.disj,source_node_id);
} else {
if(cljs.core.contains_QMARK_.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891)),source_node_id)){
return com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.add_branch_to_node.call(null,_LT__GT_,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),target_node_id),node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),cljs.core.disj,source_node_id);
} else {
return _LT__GT_;

}
}
}
});
/**
 * Transfer node parents from source node to target node. In case source node is root,
 *   the root will be transferred to target node.
 */
com.wsscode.pathom3.connect.planner.transfer_node_parents = (function com$wsscode$pathom3$connect$planner$transfer_node_parents(graph,target_node_id,source_node_id){
var parents = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,source_node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122));
var _LT__GT_ = (function (){var G__22012 = graph;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph),source_node_id)){
return com.wsscode.pathom3.connect.planner.set_root_node.call(null,G__22012,target_node_id);
} else {
return G__22012;
}
})();
return cljs.core.reduce.call(null,(function (g,node_id){
return com.wsscode.pathom3.connect.planner.transfer_node_parent.call(null,g,target_node_id,source_node_id,node_id);
}),_LT__GT_,parents);
});
com.wsscode.pathom3.connect.planner.get_denormalized_node = (function com$wsscode$pathom3$connect$planner$get_denormalized_node(graph,node_id){
return cljs.core.get_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes-denormalized","com.wsscode.pathom3.connect.planner/nodes-denormalized",1503814741),node_id], null));
});
/**
 * Compute a version of the node that contains all forward references denormalized. It means
 *   instead of having the ids at run-next/branches (both OR and AND) the node will have
 *   the node data itself directly there. The denormalized version is added using the node-id
 *   at the ::nodes-denormalized key in the graph. All subsequent nodes are also denormalized
 *   in the process and also add to ::nodes-denormalized, so a lookup for then will be
 *   also readly available.
 */
com.wsscode.pathom3.connect.planner.denormalize_node = (function com$wsscode$pathom3$connect$planner$denormalize_node(p__22015,node_id){
var map__22016 = p__22015;
var map__22016__$1 = cljs.core.__destructure_map.call(null,map__22016);
var graph = map__22016__$1;
var denorm_update_node = cljs.core.get.call(null,map__22016__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","denorm-update-node","com.wsscode.pathom3.connect.planner/denorm-update-node",750983148));
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.get_denormalized_node.call(null,graph,node_id))){
return graph;
} else {
var map__22017 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__22017__$1 = cljs.core.__destructure_map.call(null,map__22017);
var node = map__22017__$1;
var run_next = cljs.core.get.call(null,map__22017__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var run_and = cljs.core.get.call(null,map__22017__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884));
var run_or = cljs.core.get.call(null,map__22017__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891));
var branches = com.wsscode.pathom3.connect.planner.node_branches.call(null,node);
var graph_SINGLEQUOTE_ = (function (){var G__22018 = graph;
var G__22018__$1 = (cljs.core.truth_(run_next)?com.wsscode.pathom3.connect.planner.denormalize_node.call(null,G__22018,run_next):G__22018);
if(cljs.core.truth_(branches)){
var _LT__GT_ = G__22018__$1;
return cljs.core.reduce.call(null,com.wsscode.pathom3.connect.planner.denormalize_node,_LT__GT_,branches);
} else {
return G__22018__$1;
}
})();
var node_SINGLEQUOTE_ = (function (){var G__22019 = node;
var G__22019__$1 = (cljs.core.truth_(run_next)?cljs.core.assoc.call(null,G__22019,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140),com.wsscode.pathom3.connect.planner.get_denormalized_node.call(null,graph_SINGLEQUOTE_,run_next)):G__22019);
var G__22019__$2 = (cljs.core.truth_(run_and)?cljs.core.assoc.call(null,G__22019__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__22013_SHARP_){
return com.wsscode.pathom3.connect.planner.get_denormalized_node.call(null,graph_SINGLEQUOTE_,p1__22013_SHARP_);
})),branches)):G__22019__$1);
var G__22019__$3 = (cljs.core.truth_(run_or)?cljs.core.assoc.call(null,G__22019__$2,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__22014_SHARP_){
return com.wsscode.pathom3.connect.planner.get_denormalized_node.call(null,graph_SINGLEQUOTE_,p1__22014_SHARP_);
})),branches)):G__22019__$2);
if(cljs.core.truth_(denorm_update_node)){
return denorm_update_node.call(null,G__22019__$3);
} else {
return G__22019__$3;
}
})();
return cljs.core.assoc_in.call(null,graph_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes-denormalized","com.wsscode.pathom3.connect.planner/nodes-denormalized",1503814741),node_id], null),node_SINGLEQUOTE_);
}
});
com.wsscode.pathom3.connect.planner.combine_expects = (function com$wsscode$pathom3$connect$planner$combine_expects(na,nb){
return cljs.core.update.call(null,na,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),com.wsscode.pathom3.format.shape_descriptor.merge_shapes,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040).cljs$core$IFn$_invoke$arity$1(nb));
});
com.wsscode.pathom3.connect.planner.combine_params = (function com$wsscode$pathom3$connect$planner$combine_params(na,nb){
var G__22020 = na;
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210).cljs$core$IFn$_invoke$arity$1(na);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210).cljs$core$IFn$_invoke$arity$1(nb);
}
})())){
return cljs.core.update.call(null,G__22020,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210),cljs.core.merge,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210).cljs$core$IFn$_invoke$arity$1(nb));
} else {
return G__22020;
}
});
com.wsscode.pathom3.connect.planner.combine_inputs = (function com$wsscode$pathom3$connect$planner$combine_inputs(na,nb){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524).cljs$core$IFn$_invoke$arity$1(nb))){
return cljs.core.update.call(null,na,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524),com.wsscode.pathom3.format.shape_descriptor.merge_shapes,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524).cljs$core$IFn$_invoke$arity$1(nb));
} else {
return na;
}
});
com.wsscode.pathom3.connect.planner.combine_foreign_ast = (function com$wsscode$pathom3$connect$planner$combine_foreign_ast(na,nb){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548).cljs$core$IFn$_invoke$arity$1(nb))){
return cljs.core.update.call(null,na,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),com.wsscode.pathom3.format.eql.merge_ast_children,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548).cljs$core$IFn$_invoke$arity$1(nb));
} else {
return na;
}
});
com.wsscode.pathom3.connect.planner.transfer_node_indexes = (function com$wsscode$pathom3$connect$planner$transfer_node_indexes(graph,target_node_id,source_node_id){
var attrs = cljs.core.keys.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,source_node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040)));
return cljs.core.reduce.call(null,(function (graph__$1,attr){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,graph__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),attr], null),com.wsscode.misc.coll.sconj,target_node_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),attr], null),cljs.core.disj,source_node_id);
}),graph,attrs);
});
/**
 * Combine run next of elements, in case both have a run-next, a branch node will
 *   be placed there connecting both next nodes.
 */
com.wsscode.pathom3.connect.planner.combine_run_next_STAR_ = (function com$wsscode$pathom3$connect$planner$combine_run_next_STAR_(graph,env,branch_type,node_ids,pivot,node_defaults){
var run_next_nodes = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p1__22021_SHARP_){
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph,p1__22021_SHARP_);
})),cljs.core.filter.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140))),node_ids);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,run_next_nodes))){
var map__22022 = cljs.core.first.call(null,run_next_nodes);
var map__22022__$1 = cljs.core.__destructure_map.call(null,map__22022);
var node_id = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var run_next = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
return com.wsscode.pathom3.connect.planner.set_node_run_next.call(null,com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,graph,run_next,node_id),pivot,run_next);
} else {
if(cljs.core.seq.call(null,run_next_nodes)){
var branch_node = com.wsscode.pathom3.connect.planner.new_node.call(null,env,cljs.core.merge.call(null,node_defaults,cljs.core.PersistentArrayMap.createAsIfByAssoc([branch_type,cljs.core.PersistentHashSet.EMPTY])));
var _LT__GT_ = graph;
var _LT__GT___$1 = com.wsscode.pathom3.connect.planner.include_node.call(null,_LT__GT_,branch_node);
var _LT__GT___$2 = cljs.core.reduce.call(null,(function (g,p__22023){
var map__22024 = p__22023;
var map__22024__$1 = cljs.core.__destructure_map.call(null,map__22024);
var node_id = cljs.core.get.call(null,map__22024__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var run_next = cljs.core.get.call(null,map__22024__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
return com.wsscode.pathom3.connect.planner.add_branch_to_node.call(null,com.wsscode.pathom3.connect.planner.remove_node_parent.call(null,g,run_next,node_id),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707).cljs$core$IFn$_invoke$arity$1(branch_node),branch_type,run_next);
}),_LT__GT___$1,run_next_nodes);
return com.wsscode.pathom3.connect.planner.set_node_run_next.call(null,_LT__GT___$2,pivot,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707).cljs$core$IFn$_invoke$arity$1(branch_node));
} else {
return graph;

}
}
});
/**
 * Combine each node in node-ids with the pivot run next, this version will use
 *   AND node to connect the run next items
 */
com.wsscode.pathom3.connect.planner.combine_run_next = (function com$wsscode$pathom3$connect$planner$combine_run_next(graph,env,node_ids,pivot){
return com.wsscode.pathom3.connect.planner.combine_run_next_STAR_.call(null,graph,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),node_ids,pivot,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Find the node at the end of chain from target-node-id and move node-to-move-id
 *   as the next of that
 */
com.wsscode.pathom3.connect.planner.move_run_next_to_edge = (function com$wsscode$pathom3$connect$planner$move_run_next_to_edge(graph,target_node_id,node_to_move_id){
var leaf = com.wsscode.pathom3.connect.planner.find_leaf_node.call(null,graph,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,target_node_id));
return com.wsscode.pathom3.connect.planner.set_node_run_next.call(null,com.wsscode.pathom3.connect.planner.remove_from_parent_branches.call(null,graph,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_to_move_id)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707).cljs$core$IFn$_invoke$arity$1(leaf),node_to_move_id);
});
/**
 * When a branch node contains a single branch out, remove the node and put that
 *   single item in place.
 * 
 *   Note in case the branch has a run-next, that run-next gets moved to the end of chain
 *   to retain the same order as it would run with the branch.
 */
com.wsscode.pathom3.connect.planner.simplify_single_branch_node = (function com$wsscode$pathom3$connect$planner$simplify_single_branch_node(graph,env,node_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var branch_type = com.wsscode.pathom3.connect.planner.node_branch_type.call(null,node);
var target_node_id = (function (){var and__5000__auto__ = branch_type;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,branch_type.call(null,node)));
if(and__5000__auto____$1){
return cljs.core.first.call(null,branch_type.call(null,node));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(target_node_id)){
return com.wsscode.pathom3.connect.planner.optimize_node.call(null,com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.remove_node.call(null,com.wsscode.pathom3.connect.planner.remove_node_edges.call(null,com.wsscode.pathom3.connect.planner.transfer_node_parents.call(null,(function (){var G__22025 = com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Simplifying branch with single element",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([target_node_id,node_id]),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,(1)])], null));
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(node))){
return com.wsscode.pathom3.connect.planner.move_run_next_to_edge.call(null,G__22025,target_node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(node));
} else {
return G__22025;
}
})(),target_node_id,node_id),node_id),node_id),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Simplification done",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([target_node_id])], null)),env,target_node_id);
} else {
return graph;
}
});
/**
 * Merges data from source-node-id into target-node-id, them removes the source node.
 */
com.wsscode.pathom3.connect.planner.merge_sibling_resolver_node = (function com$wsscode$pathom3$connect$planner$merge_sibling_resolver_node(graph,target_node_id,source_node_id){
var source_node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,source_node_id);
return com.wsscode.pathom3.connect.planner.remove_node.call(null,com.wsscode.pathom3.connect.planner.remove_node_edges.call(null,com.wsscode.pathom3.connect.planner.transfer_node_indexes.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,graph,target_node_id,null,com.wsscode.misc.coll.merge_defaults,source_node),target_node_id,null,com.wsscode.pathom3.connect.planner.combine_params,source_node),target_node_id,null,com.wsscode.pathom3.connect.planner.combine_expects,source_node),target_node_id,null,com.wsscode.pathom3.connect.planner.combine_inputs,source_node),target_node_id,null,com.wsscode.pathom3.connect.planner.combine_foreign_ast,source_node),target_node_id,null,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-op-name","com.wsscode.pathom3.connect.planner/source-op-name",396914378)),target_node_id,source_node_id),source_node_id),source_node_id);
});
com.wsscode.pathom3.connect.planner.merge_sibling_resolver_nodes_STAR_ = (function com$wsscode$pathom3$connect$planner$merge_sibling_resolver_nodes_STAR_(graph,pivot,node_ids){
return cljs.core.reduce.call(null,(function (g,node_id){
return com.wsscode.pathom3.connect.planner.merge_sibling_resolver_node.call(null,g,pivot,node_id);
}),graph,node_ids);
});
com.wsscode.pathom3.connect.planner.merge_sibling_resolver_nodes = (function com$wsscode$pathom3$connect$planner$merge_sibling_resolver_nodes(graph,env,parent_node_id,node_ids){
var vec__22026 = node_ids;
var seq__22027 = cljs.core.seq.call(null,vec__22026);
var first__22028 = cljs.core.first.call(null,seq__22027);
var seq__22027__$1 = cljs.core.next.call(null,seq__22027);
var pivot = first__22028;
var node_ids_SINGLEQUOTE_ = seq__22027__$1;
var resolver = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.planner.get_node.call(null,graph,pivot));
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Merging sibling resolver calls to resolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolver)].join(''),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.conj.call(null,node_ids,parent_node_id)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([parent_node_id,(1)])], null));

return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.merge_sibling_resolver_nodes_STAR_.call(null,com.wsscode.pathom3.connect.planner.combine_run_next.call(null,graph,env,node_ids,pivot),pivot,node_ids_SINGLEQUOTE_),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Merge complete",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([pivot,parent_node_id]),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([parent_node_id,(1)])], null));
});
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_ = (function com$wsscode$pathom3$connect$planner$add_snapshot_BANG_(graph,p__22030,event_details){
var map__22031 = p__22030;
var map__22031__$1 = cljs.core.__destructure_map.call(null,map__22031);
var snapshots_STAR_ = cljs.core.get.call(null,map__22031__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshots*","com.wsscode.pathom3.connect.planner/snapshots*",-1855095128));
var snapshot_depth = cljs.core.get.call(null,map__22031__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-depth","com.wsscode.pathom3.connect.planner/snapshot-depth",1034256870));
if(cljs.core.truth_(snapshots_STAR_)){
var pad_22032 = clojure.string.join.call(null,cljs.core.repeat.call(null,(function (){var or__5002__auto__ = snapshot_depth;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),"-"));
var pad_22033__$1 = ((cljs.core.seq.call(null,pad_22032))?[pad_22032," "].join(''):"");
var event_details_SINGLEQUOTE__22034 = com.wsscode.misc.coll.update_if.call(null,event_details,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),(function (p1__22029_SHARP_){
return [pad_22033__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22029_SHARP_)].join('');
}));
cljs.core.swap_BANG_.call(null,snapshots_STAR_,cljs.core.conj,cljs.core.merge.call(null,cljs.core.dissoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-ast","com.wsscode.pathom3.connect.planner/source-ast",1604047106),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292)),event_details_SINGLEQUOTE__22034));
} else {
}

return graph;
});
com.wsscode.pathom3.connect.planner.base_graph = (function com$wsscode$pathom3$connect$planner$base_graph(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),cljs.core.PersistentArrayMap.EMPTY], null);
});
com.wsscode.pathom3.connect.planner.base_env = (function com$wsscode$pathom3$connect$planner$base_env(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","id-counter","com.wsscode.pathom3.connect.planner/id-counter",1593852285),cljs.core.atom.call(null,(0)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),cljs.core.PersistentArrayMap.EMPTY], null);
});
/**
 * Restore the original environment sent to run-graph! Use this for nested graphs
 *   that need a clean environment.
 */
com.wsscode.pathom3.connect.planner.reset_env = (function com$wsscode$pathom3$connect$planner$reset_env(env){
var or__5002__auto__ = (function (){var G__22035 = env;
var G__22035__$1 = (((G__22035 == null))?null:cljs.core.meta.call(null,G__22035));
var G__22035__$2 = (((G__22035__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","original-env","com.wsscode.pathom3.connect.planner/original-env",-154232736).cljs$core$IFn$_invoke$arity$1(G__22035__$1));
if((G__22035__$2 == null)){
return null;
} else {
return cljs.core.with_meta.call(null,G__22035__$2,cljs.core.meta.call(null,env));
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return env;
}
});
com.wsscode.pathom3.connect.planner.push_path = (function com$wsscode$pathom3$connect$planner$push_path(env,p__22036){
var map__22037 = p__22036;
var map__22037__$1 = cljs.core.__destructure_map.call(null,map__22037);
var attribute = cljs.core.get.call(null,map__22037__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
var path = cljs.core.get.call(null,map__22037__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
var G__22038 = env;
if(cljs.core.truth_(attribute)){
return cljs.core.assoc.call(null,G__22038,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),com.wsscode.misc.coll.vconj.call(null,path,attribute));
} else {
return G__22038;
}
});
/**
 * Add attribute to unreachable list
 */
com.wsscode.pathom3.connect.planner.add_unreachable_path = (function com$wsscode$pathom3$connect$planner$add_unreachable_path(graph,env,path){
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,cljs.core.update.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-paths","com.wsscode.pathom3.connect.planner/unreachable-paths",614064297),com.wsscode.pathom3.format.shape_descriptor.merge_shapes,path),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-mark-attr-unreachable","com.wsscode.pathom3.connect.planner/snapshot-mark-attr-unreachable",1348357148),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Mark path ",cljs.core.pr_str.call(null,path)," as unreachable."].join('')], null));
});
com.wsscode.pathom3.connect.planner.add_warning = (function com$wsscode$pathom3$connect$planner$add_warning(graph,warn){
return cljs.core.update.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","warnings","com.wsscode.pathom3.connect.planner/warnings",149755478),com.wsscode.misc.coll.vconj,warn);
});
/**
 * Copy unreachable attributes from discard-graph to target-graph. Using the extra arity
 *   you can also add a new unreachable path in the same call.
 */
com.wsscode.pathom3.connect.planner.merge_unreachable = (function com$wsscode$pathom3$connect$planner$merge_unreachable(var_args){
var G__22040 = arguments.length;
switch (G__22040) {
case 2:
return com.wsscode.pathom3.connect.planner.merge_unreachable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return com.wsscode.pathom3.connect.planner.merge_unreachable.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.planner.merge_unreachable.cljs$core$IFn$_invoke$arity$2 = (function (target_graph,p__22041){
var map__22042 = p__22041;
var map__22042__$1 = cljs.core.__destructure_map.call(null,map__22042);
var unreachable_paths = cljs.core.get.call(null,map__22042__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-paths","com.wsscode.pathom3.connect.planner/unreachable-paths",614064297));
var G__22043 = target_graph;
if(cljs.core.truth_(unreachable_paths)){
return cljs.core.update.call(null,G__22043,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-paths","com.wsscode.pathom3.connect.planner/unreachable-paths",614064297),com.wsscode.pathom3.format.shape_descriptor.merge_shapes,(function (){var or__5002__auto__ = unreachable_paths;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else {
return G__22043;
}
}));

(com.wsscode.pathom3.connect.planner.merge_unreachable.cljs$core$IFn$_invoke$arity$4 = (function (target_graph,graph,env,path){
return com.wsscode.pathom3.connect.planner.add_unreachable_path.call(null,com.wsscode.pathom3.connect.planner.merge_unreachable.call(null,target_graph,graph),env,path);
}));

(com.wsscode.pathom3.connect.planner.merge_unreachable.cljs$lang$maxFixedArity = 4);

/**
 * Get a set with all provided attributes from the graph.
 */
com.wsscode.pathom3.connect.planner.graph_provides = (function com$wsscode$pathom3$connect$planner$graph_provides(p__22045){
var map__22046 = p__22045;
var map__22046__$1 = cljs.core.__destructure_map.call(null,map__22046);
var index_attrs = cljs.core.get.call(null,map__22046__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142));
return cljs.core.set.call(null,cljs.core.keys.call(null,index_attrs));
});
/**
 * Find AST node a given entry from the source AST.
 */
com.wsscode.pathom3.connect.planner.entry_ast = (function com$wsscode$pathom3$connect$planner$entry_ast(graph,k){
return cljs.core.get_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713),k], null));
});
/**
 * Add information about attribute that is present but requires further processing
 *   due to subquery, this is created so the runner can quickly know which attributes
 *   need to have the subquery processing done.
 */
com.wsscode.pathom3.connect.planner.mark_attribute_process_sub_query = (function com$wsscode$pathom3$connect$planner$mark_attribute_process_sub_query(graph,p__22047){
var map__22048 = p__22047;
var map__22048__$1 = cljs.core.__destructure_map.call(null,map__22048);
var key = cljs.core.get.call(null,map__22048__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.call(null,map__22048__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query = cljs.core.get.call(null,map__22048__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__5002__auto__ = children;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return query;
}
})())){
return cljs.core.update.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nested-process","com.wsscode.pathom3.connect.planner/nested-process",-35632382),com.wsscode.misc.coll.sconj,key);
} else {
return graph;
}
});
com.wsscode.pathom3.connect.planner.add_ident_process = (function com$wsscode$pathom3$connect$planner$add_ident_process(graph,p__22049){
var map__22050 = p__22049;
var map__22050__$1 = cljs.core.__destructure_map.call(null,map__22050);
var key = cljs.core.get.call(null,map__22050__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100),com.wsscode.misc.coll.sconj,key);
});
com.wsscode.pathom3.connect.planner.add_placeholder_entry = (function com$wsscode$pathom3$connect$planner$add_placeholder_entry(graph,attr){
return cljs.core.update.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholders","com.wsscode.pathom3.connect.planner/placeholders",-1690563362),com.wsscode.misc.coll.sconj,attr);
});
com.wsscode.pathom3.connect.planner.inc_snapshot_depth = (function com$wsscode$pathom3$connect$planner$inc_snapshot_depth(env){
return cljs.core.update.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-depth","com.wsscode.pathom3.connect.planner/snapshot-depth",1034256870),(function (p1__22051_SHARP_){
return ((function (){var or__5002__auto__ = p1__22051_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + (1));
}));
});
/**
 * Direct successors of node, branch nodes, and run-next, in case of branch nodes the
 *   branches will always come before the run-next.
 */
com.wsscode.pathom3.connect.planner.find_direct_node_successors = (function com$wsscode$pathom3$connect$planner$find_direct_node_successors(p__22052){
var map__22053 = p__22052;
var map__22053__$1 = cljs.core.__destructure_map.call(null,map__22053);
var node = map__22053__$1;
var run_next = cljs.core.get.call(null,map__22053__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var branches = com.wsscode.pathom3.connect.planner.node_branches.call(null,node);
var G__22054 = cljs.core.PersistentVector.EMPTY;
var G__22054__$1 = (cljs.core.truth_(branches)?cljs.core.into.call(null,G__22054,branches):G__22054);
if(cljs.core.truth_(run_next)){
return cljs.core.conj.call(null,G__22054__$1,run_next);
} else {
return G__22054__$1;
}
});
/**
 * Return all node ancestors. The order of the output will go from closest to farthest
 *   nodes, like breathing out of the current node.
 */
com.wsscode.pathom3.connect.planner.node_ancestors = (function com$wsscode$pathom3$connect$planner$node_ancestors(graph,node_id){
var node_queue = com.wsscode.misc.coll.queue.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null));
var ancestors = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5821__auto__ = cljs.core.peek.call(null,node_queue);
if(cljs.core.truth_(temp__5821__auto__)){
var node_id_SINGLEQUOTE_ = temp__5821__auto__;
var map__22056 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id_SINGLEQUOTE_);
var map__22056__$1 = cljs.core.__destructure_map.call(null,map__22056);
var node_parents = cljs.core.get.call(null,map__22056__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122));
var G__22057 = cljs.core.into.call(null,cljs.core.pop.call(null,node_queue),node_parents);
var G__22058 = cljs.core.conj.call(null,ancestors,node_id_SINGLEQUOTE_);
node_queue = G__22057;
ancestors = G__22058;
continue;
} else {
return ancestors;
}
break;
}
});
/**
 * Find successor nodes of node-id, node-id is included in the list. This will add
 *   branch nodes before run-next nodes. Returns a lazy sequence that traverses the graph
 *   as items are requested.
 */
com.wsscode.pathom3.connect.planner.node_successors = (function com$wsscode$pathom3$connect$planner$node_successors(graph,node_id){
var successors = com.wsscode.pathom3.connect.planner.find_direct_node_successors.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id));
if(cljs.core.seq.call(null,successors)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,node_id,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__22059_SHARP_){
return com.wsscode.pathom3.connect.planner.node_successors.call(null,graph,p1__22059_SHARP_);
}),successors)));
}),null,null));
} else {
return (new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null);
}),null,null));

}
});
/**
 * Return descendants by walking the run-next
 */
com.wsscode.pathom3.connect.planner.find_run_next_descendants = (function com$wsscode$pathom3$connect$planner$find_run_next_descendants(graph,p__22060){
var map__22061 = p__22060;
var map__22061__$1 = cljs.core.__destructure_map.call(null,map__22061);
var node_id = cljs.core.get.call(null,map__22061__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var descendants = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var G__22063 = node;
var map__22064 = G__22063;
var map__22064__$1 = cljs.core.__destructure_map.call(null,map__22064);
var run_next = cljs.core.get.call(null,map__22064__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var descendants__$1 = descendants;
var G__22063__$1 = G__22063;
while(true){
var descendants__$2 = descendants__$1;
var map__22066 = G__22063__$1;
var map__22066__$1 = cljs.core.__destructure_map.call(null,map__22066);
var run_next__$1 = cljs.core.get.call(null,map__22066__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,run_next__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var next = temp__5821__auto__;
var G__22067 = cljs.core.conj.call(null,descendants__$2,next);
var G__22068 = next;
descendants__$1 = G__22067;
G__22063__$1 = G__22068;
continue;
} else {
return descendants__$2;
}
break;
}
});
/**
 * Traverses all run-next still it reaches a leaf.
 */
com.wsscode.pathom3.connect.planner.find_leaf_node = (function com$wsscode$pathom3$connect$planner$find_leaf_node(graph,node){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565)], null);

return cljs.core.peek.call(null,com.wsscode.pathom3.connect.planner.find_run_next_descendants.call(null,graph,node));
});
/**
 * Returns the first resolvers to get called in the graph. This will traverse AND and OR
 *   node branches until the first resolvers are found. This function doesn't work the
 *   run-next of nodes.
 */
com.wsscode.pathom3.connect.planner.find_root_resolver_nodes = (function com$wsscode$pathom3$connect$planner$find_root_resolver_nodes(p__22069){
var map__22070 = p__22069;
var map__22070__$1 = cljs.core.__destructure_map.call(null,map__22070);
var graph = map__22070__$1;
var root = cljs.core.get.call(null,map__22070__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212));
var nodes = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var queue = com.wsscode.misc.coll.queue.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null));
while(true){
var temp__5821__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5821__auto__)){
var node_id = temp__5821__auto__;
var map__22072 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__22072__$1 = cljs.core.__destructure_map.call(null,map__22072);
var node = map__22072__$1;
var op_name = cljs.core.get.call(null,map__22072__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
if(cljs.core.truth_(op_name)){
var G__22073 = cljs.core.conj_BANG_.call(null,nodes,node_id);
var G__22074 = cljs.core.pop.call(null,queue);
nodes = G__22073;
queue = G__22074;
continue;
} else {
var G__22075 = nodes;
var G__22076 = cljs.core.into.call(null,cljs.core.pop.call(null,queue),com.wsscode.pathom3.connect.planner.node_branches.call(null,node));
nodes = G__22075;
queue = G__22076;
continue;
}
} else {
return cljs.core.persistent_BANG_.call(null,nodes);
}
break;
}
});
com.wsscode.pathom3.connect.planner.expects_from_node_chain = (function com$wsscode$pathom3$connect$planner$expects_from_node_chain(graph,node_id){
return cljs.core.transduce.call(null,cljs.core.keep.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040)),cljs.core.completing.call(null,com.wsscode.pathom3.format.shape_descriptor.merge_shapes),cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom3.connect.planner.find_run_next_descendants.call(null,graph,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id)));
});
com.wsscode.pathom3.connect.planner.expects_from_node_chains = (function com$wsscode$pathom3$connect$planner$expects_from_node_chains(graph,node_ids){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22077_SHARP_){
return com.wsscode.pathom3.connect.planner.expects_from_node_chain.call(null,graph,p1__22077_SHARP_);
})),cljs.core.completing.call(null,com.wsscode.pathom3.format.shape_descriptor.merge_shapes),cljs.core.PersistentArrayMap.EMPTY,node_ids);
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.connect.planner.shape_descriptor__GT_ast_children_optional = (function com$wsscode$pathom3$connect$planner$shape_descriptor__GT_ast_children_optional(shape){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__22078){
var vec__22079 = p__22078;
var k = cljs.core.nth.call(null,vec__22079,(0),null);
var v = cljs.core.nth.call(null,vec__22079,(1),null);
if(cljs.core.seq.call(null,v)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.connect.planner.shape_descriptor__GT_ast_children_optional.call(null,v),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517),true], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517),true], null)], null);
}
})),shape);
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.connect.planner.shape_descriptor__GT_ast_optional = (function com$wsscode$pathom3$connect$planner$shape_descriptor__GT_ast_optional(shape){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.connect.planner.shape_descriptor__GT_ast_children_optional.call(null,shape)], null);
});
com.wsscode.pathom3.connect.planner.extend_attribute_sub_query = (function com$wsscode$pathom3$connect$planner$extend_attribute_sub_query(graph,p__22082,attr,shape){
var map__22083 = p__22082;
var map__22083__$1 = cljs.core.__destructure_map.call(null,map__22083);
var optional_process_QMARK_ = cljs.core.get.call(null,map__22083__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","optional-process?","com.wsscode.pathom3.connect.planner/optional-process?",1273892632));
return cljs.core.update_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713),attr], null),com.wsscode.pathom3.format.eql.merge_ast_children,cljs.core.assoc.call(null,(cljs.core.truth_(optional_process_QMARK_)?com.wsscode.pathom3.connect.planner.shape_descriptor__GT_ast_optional.call(null,shape):com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast.call(null,shape)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"key","key",-1516042587),attr,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),attr));
});
/**
 * Given an environment, available data and shape, determines if the whole shape
 *   is reachable (including nested dependencies).
 */
com.wsscode.pathom3.connect.planner.shape_reachable_QMARK_ = (function com$wsscode$pathom3$connect$planner$shape_reachable_QMARK_(p__22085,available,shape){
var map__22086 = p__22085;
var map__22086__$1 = cljs.core.__destructure_map.call(null,map__22086);
var env = map__22086__$1;
var resolvers = cljs.core.get.call(null,map__22086__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","resolvers","com.wsscode.pathom3.connect.planner/resolvers",-1328852921));
var missing = com.wsscode.pathom3.format.shape_descriptor.missing.call(null,available,shape);
if(cljs.core.seq.call(null,missing)){
var graph = com.wsscode.pathom3.connect.planner.compute_run_graph.call(null,cljs.core.assoc.call(null,com.wsscode.pathom3.connect.planner.add_resolvers_trail.call(null,com.wsscode.pathom3.connect.planner.inc_snapshot_depth.call(null,com.wsscode.pathom3.connect.planner.push_path.call(null,com.wsscode.pathom3.connect.planner.reset_env.call(null,env),env)),resolvers),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","optimize-graph?","com.wsscode.pathom3.connect.planner/optimize-graph?",95148922),false,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),available,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast.call(null,missing)));
return cljs.core.every_QMARK_.call(null,(function (p__22087){
var vec__22088 = p__22087;
var attr = cljs.core.nth.call(null,vec__22088,(0),null);
var sub = cljs.core.nth.call(null,vec__22088,(1),null);
var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.node_attribute_provides.call(null,graph,env,attr);
if(cljs.core.truth_(temp__5821__auto__)){
var nodes_subs = temp__5821__auto__;
if(cljs.core.seq.call(null,nodes_subs)){
return cljs.core.some.call(null,(function (p1__22084_SHARP_){
return com.wsscode.pathom3.connect.planner.shape_reachable_QMARK_.call(null,env,p1__22084_SHARP_,sub);
}),nodes_subs);
} else {
return true;
}
} else {
return null;
}
}),shape);
} else {
return true;
}
});
com.wsscode.pathom3.connect.planner.compute_attribute_nested_input_require = (function com$wsscode$pathom3$connect$planner$compute_attribute_nested_input_require(graph,env,attr,shape,nodes){
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Processing nested requirements ",cljs.core.pr_str.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,shape]))].join(''),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707)),nodes)], null));

var checked_nodes = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (node){
var G__22091 = node;
if(com.wsscode.pathom3.connect.planner.shape_reachable_QMARK_.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),attr),cljs.core.get.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618).cljs$core$IFn$_invoke$arity$1(node),attr),shape)){
return cljs.core.assoc.call(null,G__22091,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true);
} else {
return G__22091;
}
})),nodes);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),checked_nodes))){
return com.wsscode.pathom3.connect.planner.extend_attribute_sub_query.call(null,cljs.core.reduce.call(null,(function (g,p__22092){
var map__22093 = p__22092;
var map__22093__$1 = cljs.core.__destructure_map.call(null,map__22093);
var valid_path_QMARK_ = cljs.core.get.call(null,map__22093__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var node_id = cljs.core.get.call(null,map__22093__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
if(cljs.core.not.call(null,valid_path_QMARK_)){
return com.wsscode.pathom3.connect.planner.assoc_node.call(null,g,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","invalid-node?","com.wsscode.pathom3.connect.planner/invalid-node?",-2034679756),true);
} else {
return g;
}
}),graph,checked_nodes),env,attr,shape);
} else {
return com.wsscode.pathom3.connect.planner.add_unreachable_path.call(null,cljs.core.dissoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212)),env,cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,shape]));
}
});
com.wsscode.pathom3.connect.planner.compute_attribute_dependency_graph = (function com$wsscode$pathom3$connect$planner$compute_attribute_dependency_graph(graph,p__22095,attr,shape){
var map__22096 = p__22095;
var map__22096__$1 = cljs.core.__destructure_map.call(null,map__22096);
var env = map__22096__$1;
var recursive_joins = cljs.core.get.call(null,map__22096__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","recursive-joins","com.wsscode.pathom3.connect.planner/recursive-joins",-1936947108));
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Processing dependency ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,shape]))].join('')], null));

var graph_SINGLEQUOTE_ = com.wsscode.pathom3.connect.planner.compute_attribute_graph.call(null,cljs.core.dissoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212)),cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","attr-deps-trail","com.wsscode.pathom3.connect.planner/attr-deps-trail",-81376567),com.wsscode.misc.coll.sconj,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),cljs.core.first.call(null,com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,shape])))));
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph_SINGLEQUOTE_))){
var nodes = cljs.core.mapv.call(null,(function (p1__22094_SHARP_){
return com.wsscode.pathom3.connect.planner.node_with_resolver_config.call(null,graph_SINGLEQUOTE_,env,p1__22094_SHARP_);
}),cljs.core.get_in.call(null,graph_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),attr], null)));
var recur = cljs.core.get.call(null,recursive_joins,attr);
if(cljs.core.truth_(recur)){
return cljs.core.update_in.call(null,com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph_SINGLEQUOTE_,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Detected recursive nested dependency on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713),attr], null),cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"key","key",-1516042587),attr,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),attr,new cljs.core.Keyword(null,"query","query",-1288509510),recur);
} else {
if(cljs.core.seq.call(null,shape)){
return com.wsscode.pathom3.connect.planner.compute_attribute_nested_input_require.call(null,graph_SINGLEQUOTE_,env,attr,shape,nodes);
} else {
return graph_SINGLEQUOTE_;

}
}
} else {
return graph_SINGLEQUOTE_;
}
});
com.wsscode.pathom3.connect.planner.extend_available_attribute_nested = (function com$wsscode$pathom3$connect$planner$extend_available_attribute_nested(graph,p__22097,attr,shape){
var map__22098 = p__22097;
var map__22098__$1 = cljs.core.__destructure_map.call(null,map__22098);
var env = map__22098__$1;
var available_data = cljs.core.get.call(null,map__22098__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292));
if(com.wsscode.pathom3.connect.planner.shape_reachable_QMARK_.call(null,env,cljs.core.get.call(null,available_data,attr),shape)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.planner.mark_attribute_process_sub_query.call(null,com.wsscode.pathom3.connect.planner.extend_attribute_sub_query.call(null,graph,env,attr,shape),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),attr,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)),true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.planner.add_unreachable_path.call(null,graph,env,cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,shape])),false], null);
}
});
/**
 * Find the runner symbol for a resolver, on normal resolvers that is the resolver symbol,
 *   but for foreign resolvers it uses its ::p.c.o/dynamic-name.
 */
com.wsscode.pathom3.connect.planner.runner_node_sym = (function com$wsscode$pathom3$connect$planner$runner_node_sym(env,resolver_name){
var resolver = com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,resolver_name);
var or__5002__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238).cljs$core$IFn$_invoke$arity$1(resolver);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return resolver_name;
}
});
/**
 * Moves the children from foreign ast to the main children. Also removes the foreign
 *   ast attribute.
 */
com.wsscode.pathom3.connect.planner.promote_foreign_ast_children = (function com$wsscode$pathom3$connect$planner$promote_foreign_ast_children(p__22099){
var map__22100 = p__22099;
var map__22100__$1 = cljs.core.__destructure_map.call(null,map__22100);
var ast = map__22100__$1;
var foreign_ast = cljs.core.get.call(null,map__22100__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548));
var G__22101 = cljs.core.dissoc.call(null,ast,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548));
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(foreign_ast))){
return cljs.core.assoc.call(null,G__22101,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(foreign_ast));
} else {
return G__22101;
}
});
com.wsscode.pathom3.connect.planner.compute_dynamic_nested_requirements_STAR_ = (function com$wsscode$pathom3$connect$planner$compute_dynamic_nested_requirements_STAR_(p__22103,dynamic_name,available){
var map__22104 = p__22103;
var map__22104__$1 = cljs.core.__destructure_map.call(null,map__22104);
var env = map__22104__$1;
var ast = cljs.core.get.call(null,map__22104__$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
var graph = com.wsscode.pathom3.connect.planner.compute_run_graph.call(null,cljs.core.assoc.call(null,com.wsscode.pathom3.connect.planner.add_resolvers_trail.call(null,com.wsscode.pathom3.connect.planner.inc_snapshot_depth.call(null,com.wsscode.pathom3.connect.planner.push_path.call(null,com.wsscode.pathom3.connect.planner.reset_env.call(null,env),env)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","resolvers","com.wsscode.pathom3.connect.planner/resolvers",-1328852921).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),available));
var root_res = com.wsscode.pathom3.connect.planner.find_root_resolver_nodes.call(null,graph);
var nested_needs = cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22102_SHARP_){
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph,p1__22102_SHARP_);
})),cljs.core.completing.call(null,(function (i,p__22105){
var map__22106 = p__22105;
var map__22106__$1 = cljs.core.__destructure_map.call(null,map__22106);
var input = cljs.core.get.call(null,map__22106__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
var expects = cljs.core.get.call(null,map__22106__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040));
var op_name = cljs.core.get.call(null,map__22106__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
if(cljs.core._EQ_.call(null,op_name,dynamic_name)){
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,i,expects);
} else {
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,i,input);
}
})),cljs.core.PersistentArrayMap.EMPTY,root_res);
var ast_shape = com.wsscode.pathom3.format.shape_descriptor.lift_placeholders_first_level.call(null,env,com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.call(null,ast));
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,nested_needs,com.wsscode.pathom3.format.shape_descriptor.intersection.call(null,available,ast_shape));
});
com.wsscode.pathom3.connect.planner.compute_dynamic_nested_union_requirements_STAR_ = (function com$wsscode$pathom3$connect$planner$compute_dynamic_nested_union_requirements_STAR_(p__22107,dynamic_name,available){
var map__22108 = p__22107;
var map__22108__$1 = cljs.core.__destructure_map.call(null,map__22108);
var env = map__22108__$1;
var ast = cljs.core.get.call(null,map__22108__$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
var union_children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
return cljs.core.into.call(null,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","union?","com.wsscode.pathom3.format.shape-descriptor/union?",-702499972),true], null)),cljs.core.map.call(null,(function (p__22109){
var map__22110 = p__22109;
var map__22110__$1 = cljs.core.__destructure_map.call(null,map__22110);
var ast_SINGLEQUOTE_ = map__22110__$1;
var union_key = cljs.core.get.call(null,map__22110__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
return com.wsscode.misc.coll.make_map_entry.call(null,union_key,com.wsscode.pathom3.connect.planner.compute_dynamic_nested_requirements_STAR_.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast_SINGLEQUOTE_),dynamic_name,available));
})),union_children);
});
/**
 * Considering the operation output, find out what a query can extend during nesting.
 * 
 *   Pathom uses it to compute the dynamic requirements to send into dynamic resolvers.
 * 
 *   This function is a useful tool for developers of custom dynamic resolvers.
 */
com.wsscode.pathom3.connect.planner.compute_dynamic_nested_requirements = (function com$wsscode$pathom3$connect$planner$compute_dynamic_nested_requirements(p__22111){
var map__22112 = p__22111;
var map__22112__$1 = cljs.core.__destructure_map.call(null,map__22112);
var env = map__22112__$1;
var ast = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
var attribute = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
var op_name = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
var map__22113 = com.wsscode.pathom3.connect.indexes.operation_config.call(null,env,op_name);
var map__22113__$1 = cljs.core.__destructure_map.call(null,map__22113);
var dynamic_name = cljs.core.get.call(null,map__22113__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238));
var provides = cljs.core.get.call(null,map__22113__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618));
var dynamic_name__$1 = (function (){var or__5002__auto__ = dynamic_name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238).cljs$core$IFn$_invoke$arity$1(env);
}
})();
var available = (cljs.core.truth_(attribute)?cljs.core.get.call(null,provides,attribute):provides);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))),new cljs.core.Keyword(null,"union","union",2142937499))){
return com.wsscode.pathom3.connect.planner.compute_dynamic_nested_union_requirements_STAR_.call(null,env,dynamic_name__$1,available);
} else {
return com.wsscode.pathom3.connect.planner.compute_dynamic_nested_requirements_STAR_.call(null,env,dynamic_name__$1,available);
}
} else {
return null;
}
});
com.wsscode.pathom3.connect.planner.compute_nested_requirements = (function com$wsscode$pathom3$connect$planner$compute_nested_requirements(p__22115){
var map__22116 = p__22115;
var map__22116__$1 = cljs.core.__destructure_map.call(null,map__22116);
var env = map__22116__$1;
var ast = cljs.core.get.call(null,map__22116__$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
var available_data = cljs.core.get.call(null,map__22116__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292));
var attribute = cljs.core.get.call(null,map__22116__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
var op_name = cljs.core.get.call(null,map__22116__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var config = com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,op_name);
var provide_sub = cljs.core.get.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618).cljs$core$IFn$_invoke$arity$1(config),attribute);
var graph = com.wsscode.pathom3.connect.planner.compute_run_graph.call(null,cljs.core.assoc.call(null,com.wsscode.pathom3.connect.planner.add_resolvers_trail.call(null,com.wsscode.pathom3.connect.planner.inc_snapshot_depth.call(null,com.wsscode.pathom3.connect.planner.push_path.call(null,com.wsscode.pathom3.connect.planner.reset_env.call(null,env),env)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","resolvers","com.wsscode.pathom3.connect.planner/resolvers",-1328852921).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921),true,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,available_data,provide_sub)));
var root_res = com.wsscode.pathom3.connect.planner.find_root_resolver_nodes.call(null,graph);
var root_inputs = cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22114_SHARP_){
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph,p1__22114_SHARP_);
})),cljs.core.completing.call(null,(function (i,p__22117){
var map__22118 = p__22117;
var map__22118__$1 = cljs.core.__destructure_map.call(null,map__22118);
var input = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,i,input);
})),cljs.core.PersistentArrayMap.EMPTY,root_res);
var ast_shape = com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.call(null,ast);
return com.wsscode.pathom3.format.shape_descriptor.intersection.call(null,com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,ast_shape,root_inputs),provide_sub);
});
/**
 * Create a new node representative to run a given resolver.
 */
com.wsscode.pathom3.connect.planner.create_node_for_resolver_call = (function com$wsscode$pathom3$connect$planner$create_node_for_resolver_call(p__22119){
var map__22120 = p__22119;
var map__22120__$1 = cljs.core.__destructure_map.call(null,map__22120);
var env = map__22120__$1;
var ast = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
var input = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
var attribute = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
var op_name = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var ast_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast);
var config = com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,op_name);
var op_name_SINGLEQUOTE_ = (function (){var or__5002__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return op_name;
}
})();
var dynamic_QMARK_ = com.wsscode.pathom3.connect.indexes.dynamic_resolver_QMARK_.call(null,env,op_name_SINGLEQUOTE_);
var provide_sub = cljs.core.get.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618).cljs$core$IFn$_invoke$arity$1(config),attribute);
var sub = (cljs.core.truth_(dynamic_QMARK_)?com.wsscode.pathom3.connect.planner.compute_dynamic_nested_requirements.call(null,env):((((cljs.core.seq.call(null,provide_sub)) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)))))?com.wsscode.pathom3.connect.planner.compute_nested_requirements.call(null,env):null));
var requires = cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,(function (){var G__22121 = (function (){var or__5002__auto__ = sub;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(cljs.core.seq.call(null,ast_params)){
return com.wsscode.pathom3.format.shape_descriptor.shape_params.call(null,G__22121,ast_params);
} else {
return G__22121;
}
})()]);
var G__22122 = com.wsscode.pathom3.connect.planner.new_node.call(null,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040),requires,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524),input], null));
var G__22122__$1 = ((cljs.core.seq.call(null,ast_params))?cljs.core.assoc.call(null,G__22122,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210),ast_params):G__22122);
if(cljs.core.truth_(dynamic_QMARK_)){
return cljs.core.assoc.call(null,G__22122__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-op-name","com.wsscode.pathom3.connect.planner/source-op-name",396914378),op_name,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(sub)?(function (){var ast_SINGLEQUOTE_ = com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast.call(null,sub);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_),new cljs.core.Keyword(null,"query","query",-1288509510),com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_query.call(null,sub))], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null))], null));
} else {
return G__22122__$1;
}
});
/**
 * For a set of resolvers (the R part of OIR index), create one OR node that branches
 *   to each option in the set.
 */
com.wsscode.pathom3.connect.planner.compute_resolver_leaf = (function com$wsscode$pathom3$connect$planner$compute_resolver_leaf(graph,p__22126,resolvers){
var map__22127 = p__22126;
var map__22127__$1 = cljs.core.__destructure_map.call(null,map__22127);
var env = map__22127__$1;
var input = cljs.core.get.call(null,map__22127__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
var resolver_nodes = cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.map.call(null,(function (p1__22123_SHARP_){
return com.wsscode.pathom3.connect.planner.create_node_for_resolver_call.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),p1__22123_SHARP_));
})),resolvers);
if(cljs.core.seq.call(null,resolver_nodes)){
var _LT__GT_ = com.wsscode.pathom3.connect.planner.create_root_or.call(null,cljs.core.reduce.call(null,(function (p1__22124_SHARP_,p2__22125_SHARP_){
return com.wsscode.pathom3.connect.planner.set_node_source_for_attrs.call(null,com.wsscode.pathom3.connect.planner.include_node.call(null,p1__22124_SHARP_,p2__22125_SHARP_),env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707).cljs$core$IFn$_invoke$arity$1(p2__22125_SHARP_));
}),graph,resolver_nodes),env,cljs.core.mapv.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),resolver_nodes));
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,_LT__GT_,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Add nodes for input path ",cljs.core.pr_str.call(null,input)].join(''),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(_LT__GT_)]),cljs.core.map.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707)),resolver_nodes),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(_LT__GT_),(1)])], null));
} else {
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"No reachable resolver found."], null));
}
});
/**
 * Merge the optionals from a collection of resolver symbols.
 */
com.wsscode.pathom3.connect.planner.resolvers_missing_optionals = (function com$wsscode$pathom3$connect$planner$resolvers_missing_optionals(p__22129,resolvers){
var map__22130 = p__22129;
var map__22130__$1 = cljs.core.__destructure_map.call(null,map__22130);
var env = map__22130__$1;
var available_data = cljs.core.get.call(null,map__22130__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292));
return com.wsscode.pathom3.format.shape_descriptor.missing.call(null,available_data,cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22128_SHARP_){
return com.wsscode.pathom3.connect.indexes.resolver_optionals.call(null,env,p1__22128_SHARP_);
})),com.wsscode.pathom3.format.shape_descriptor.merge_shapes,cljs.core.PersistentArrayMap.EMPTY,resolvers));
});
com.wsscode.pathom3.connect.planner.compute_missing_chain_deps = (function com$wsscode$pathom3$connect$planner$compute_missing_chain_deps(graph,p__22131,missing){
var map__22132 = p__22131;
var map__22132__$1 = cljs.core.__destructure_map.call(null,map__22132);
var env = map__22132__$1;
var available_data = cljs.core.get.call(null,map__22132__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292));
return cljs.core.reduce_kv.call(null,(function (p__22133,attr,shape){
var vec__22134 = p__22133;
var graph__$1 = cljs.core.nth.call(null,vec__22134,(0),null);
var node_map = cljs.core.nth.call(null,vec__22134,(1),null);
if(cljs.core.contains_QMARK_.call(null,available_data,attr)){
var vec__22137 = com.wsscode.pathom3.connect.planner.extend_available_attribute_nested.call(null,graph__$1,env,attr,shape);
var graph_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22137,(0),null);
var extended_QMARK_ = cljs.core.nth.call(null,vec__22137,(1),null);
if(cljs.core.truth_(extended_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_SINGLEQUOTE_,node_map], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_SINGLEQUOTE_,null], null);
}
} else {
var graph_SINGLEQUOTE_ = com.wsscode.pathom3.connect.planner.compute_attribute_dependency_graph.call(null,graph__$1,env,attr,shape);
var temp__5821__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5821__auto__)){
var root = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_SINGLEQUOTE_,(cljs.core.truth_(node_map)?cljs.core.assoc.call(null,node_map,attr,root):null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.planner.merge_unreachable.call(null,graph__$1,graph_SINGLEQUOTE_),null], null);
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph,cljs.core.PersistentArrayMap.EMPTY], null),missing);
});
com.wsscode.pathom3.connect.planner.compute_missing_chain_optional_deps = (function com$wsscode$pathom3$connect$planner$compute_missing_chain_optional_deps(graph,p__22140,opt_missing,node_map){
var map__22141 = p__22140;
var map__22141__$1 = cljs.core.__destructure_map.call(null,map__22141);
var env = map__22141__$1;
var available_data = cljs.core.get.call(null,map__22141__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292));
return cljs.core.reduce_kv.call(null,(function (p__22142,attr,shape){
var vec__22143 = p__22142;
var graph__$1 = cljs.core.nth.call(null,vec__22143,(0),null);
var node_map__$1 = cljs.core.nth.call(null,vec__22143,(1),null);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","optional-process?","com.wsscode.pathom3.connect.planner/optional-process?",1273892632),true);
if(cljs.core.contains_QMARK_.call(null,available_data,attr)){
var vec__22146 = com.wsscode.pathom3.connect.planner.extend_available_attribute_nested.call(null,graph__$1,env__$1,attr,shape);
var graph_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22146,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_SINGLEQUOTE_,node_map__$1], null);
} else {
var graph_SINGLEQUOTE_ = com.wsscode.pathom3.connect.planner.compute_attribute_dependency_graph.call(null,graph__$1,env__$1,attr,shape);
var temp__5821__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5821__auto__)){
var root = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22149 = graph_SINGLEQUOTE_;
if(cljs.core.contains_QMARK_.call(null,node_map__$1,attr)){
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.remove_root_node_cluster.call(null,G__22149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,node_map__$1,attr)], null)),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Optional computation overrode the required."], null));
} else {
return G__22149;
}
})(),cljs.core.assoc.call(null,node_map__$1,attr,root)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.planner.merge_unreachable.call(null,graph__$1,graph_SINGLEQUOTE_),node_map__$1], null);
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph,node_map], null),opt_missing);
});
com.wsscode.pathom3.connect.planner.index_recursive_joins = (function com$wsscode$pathom3$connect$planner$index_recursive_joins(env,resolvers){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p1__22150_SHARP_){
return com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,p1__22150_SHARP_);
})),cljs.core.mapcat.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497)),cljs.core.keep.call(null,(function (x){
if(((cljs.core.map_QMARK_.call(null,x)) && (com.wsscode.pathom3.format.eql.recursive_query_QMARK_.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,x)))))){
return cljs.core.first.call(null,x);
} else {
return null;
}
}))),resolvers);
});
/**
 * Start a recursive call to process the dependencies required by the resolver.
 */
com.wsscode.pathom3.connect.planner.compute_missing_chain = (function com$wsscode$pathom3$connect$planner$compute_missing_chain(graph,env,missing,missing_optionals){
var _ = com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Computing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786).cljs$core$IFn$_invoke$arity$1(env))," inputs: ",cljs.core.pr_str.call(null,missing)].join('')], null));
var vec__22151 = com.wsscode.pathom3.connect.planner.compute_missing_chain_deps.call(null,graph,env,missing);
var graph_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22151,(0),null);
var node_map = cljs.core.nth.call(null,vec__22151,(1),null);
if((!((node_map == null)))){
var vec__22154 = com.wsscode.pathom3.connect.planner.compute_missing_chain_optional_deps.call(null,graph_SINGLEQUOTE_,env,missing_optionals,node_map);
var graph_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22154,(0),null);
var node_map_opts = cljs.core.nth.call(null,vec__22154,(1),null);
var all_nodes = cljs.core.vals.call(null,cljs.core.merge.call(null,node_map,node_map_opts));
var _LT__GT_ = (function (){var G__22157 = graph_SINGLEQUOTE__SINGLEQUOTE_;
var G__22157__$1 = ((cljs.core.seq.call(null,all_nodes))?com.wsscode.pathom3.connect.planner.create_root_and.call(null,G__22157,env,cljs.core.vals.call(null,cljs.core.merge.call(null,node_map,node_map_opts))):G__22157);
if(cljs.core.empty_QMARK_.call(null,all_nodes)){
return com.wsscode.pathom3.connect.planner.set_root_node.call(null,G__22157__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph));
} else {
return G__22157__$1;
}
})();
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,_LT__GT_,env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","compute-missing-success","com.wsscode.pathom3.connect.planner/compute-missing-success",1845372101),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Complete computing deps ",cljs.core.pr_str.call(null,missing)].join(''),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(_LT__GT_)]),cljs.core.vals.call(null,node_map)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(_LT__GT_),(1)])], null));
} else {
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.merge_unreachable.call(null,cljs.core.dissoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212)),graph_SINGLEQUOTE_),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","compute-missing-failed","com.wsscode.pathom3.connect.planner/compute-missing-failed",2096505951),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Failed to compute inputs ",cljs.core.pr_str.call(null,missing)].join('')], null));
}
});
/**
 * This function computes the graph for a given `process path`. It creates the resolver
 *   nodes to execute the resolvers, in case of many resolvers it uses a OR node to combine
 *   them.
 * 
 *   Then it fetches the dependencies, declared in the process path. If the dependencies
 *   are successfully computed, it returns the graph with the root on the node that
 *   fulfills the request.
 */
com.wsscode.pathom3.connect.planner.compute_input_resolvers_graph = (function com$wsscode$pathom3$connect$planner$compute_input_resolvers_graph(graph,p__22160,input,resolvers){
var map__22161 = p__22160;
var map__22161__$1 = cljs.core.__destructure_map.call(null,map__22161);
var env = map__22161__$1;
var available_data = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292));
var attr_resolvers_trail = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","attr-resolvers-trail","com.wsscode.pathom3.connect.planner/attr-resolvers-trail",106750879));
var attribute = cljs.core.get.call(null,map__22161__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
if(cljs.core.contains_QMARK_.call(null,input,attribute)){
return graph;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22158_SHARP_){
return cljs.core.contains_QMARK_.call(null,attr_resolvers_trail,p1__22158_SHARP_);
}),resolvers))){
var failed = clojure.set.intersection.call(null,(function (){var or__5002__auto__ = attr_resolvers_trail;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),resolvers);
cljs.core.println.call(null,["WARN: Nested cycle detected for attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute)," on one of these resolvers: ",cljs.core.pr_str.call(null,failed)].join(''));

return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-nested-cycle-dependency","com.wsscode.pathom3.connect.planner/snapshot-nested-cycle-dependency",-971090732),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Nested cycle detected for attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute)," on one of these resolvers: ",cljs.core.pr_str.call(null,failed)].join('')], null));
} else {
var missing = com.wsscode.pathom3.format.shape_descriptor.missing.call(null,available_data,input);
var missing_opts = com.wsscode.pathom3.connect.planner.resolvers_missing_optionals.call(null,env,resolvers);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524),input);
var map__22162 = com.wsscode.pathom3.connect.planner.compute_resolver_leaf.call(null,graph,env__$1,resolvers);
var map__22162__$1 = cljs.core.__destructure_map.call(null,map__22162);
var graph_SINGLEQUOTE_ = map__22162__$1;
var leaf_root = cljs.core.get.call(null,map__22162__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212));
if(cljs.core.truth_(leaf_root)){
if(cljs.core.seq.call(null,cljs.core.merge.call(null,missing,missing_opts))){
var graph_with_deps = com.wsscode.pathom3.connect.planner.compute_missing_chain.call(null,graph_SINGLEQUOTE_,cljs.core.update.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","resolvers","com.wsscode.pathom3.connect.planner/resolvers",-1328852921),resolvers,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","recursive-joins","com.wsscode.pathom3.connect.planner/recursive-joins",-1936947108),com.wsscode.pathom3.connect.planner.index_recursive_joins.call(null,env__$1,resolvers)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-depth","com.wsscode.pathom3.connect.planner/snapshot-depth",1034256870),(function (p1__22159_SHARP_){
return ((function (){var or__5002__auto__ = p1__22159_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + (1));
})),missing,missing_opts);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph_with_deps),leaf_root)){
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph_with_deps,env__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-chained-no-nodes","com.wsscode.pathom3.connect.planner/snapshot-chained-no-nodes",369295509),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Chained deps without adding nodes",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([leaf_root])], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph_with_deps))){
var tail_node_id = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.planner.find_leaf_node.call(null,graph_with_deps,com.wsscode.pathom3.connect.planner.get_root_node.call(null,graph_with_deps)));
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.set_node_run_next.call(null,graph_with_deps,tail_node_id,leaf_root),env__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-chained-dependencies","com.wsscode.pathom3.connect.planner/snapshot-chained-dependencies",573974212),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Chained deps",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail_node_id,leaf_root], null))], null));
} else {
return com.wsscode.pathom3.connect.planner.merge_unreachable.call(null,graph,graph_with_deps);

}
}
} else {
return graph_SINGLEQUOTE_;
}
} else {
return graph;
}

}
}
});
/**
 * Traverse the attribute options, for example, considering we are processing the
 *   attribute `:a`. And we have this index:
 * 
 *    {::pci/index-oir {:a {{} #{a}}}}
 * 
 *   This means we are now at the `{{} #{a}}` part, lets call each entry of this map a
 *   `process path`.
 * 
 *   To break it down, in this case we have one `process path` to get `:a`. Each process
 *   pair contains an input shape and a set of resolvers.
 * 
 *   You can read it as: I can fetch `:a` providing the data `{}` to the resolver `a`.
 * 
 *   A bigger example:
 * 
 *    {::pci/index-oir {:a {{:b {}} #{a-from-b}
 *                          {:c {}} #{a-from-c a-f-c}}}}
 * 
 *   In this case we have two process paths.
 * 
 *   This function iterates over each process path, if at least one can complete the path,
 *   it returns a graph with a root o the node. In case of many options, an OR node will
 *   be the root, providing each path.
 */
com.wsscode.pathom3.connect.planner.compute_attribute_graph_STAR_ = (function com$wsscode$pathom3$connect$planner$compute_attribute_graph_STAR_(graph,p__22163){
var map__22164 = p__22163;
var map__22164__$1 = cljs.core.__destructure_map.call(null,map__22164);
var env = map__22164__$1;
var index_oir = cljs.core.get.call(null,map__22164__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909));
var attribute = cljs.core.get.call(null,map__22164__$1,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786));
var graph__$1 = com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-process-attribute","com.wsscode.pathom3.connect.planner/snapshot-process-attribute",-1867107939),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Process attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute)].join('')], null));
var vec__22165 = cljs.core.reduce_kv.call(null,(function (p__22168,input,resolvers){
var vec__22169 = p__22168;
var graph__$2 = cljs.core.nth.call(null,vec__22169,(0),null);
var nodes = cljs.core.nth.call(null,vec__22169,(1),null);
var unreachable_graphs = cljs.core.nth.call(null,vec__22169,(2),null);
var graph_SINGLEQUOTE_ = com.wsscode.pathom3.connect.planner.compute_input_resolvers_graph.call(null,cljs.core.dissoc.call(null,graph__$2,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212)),env,input,resolvers);
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph_SINGLEQUOTE_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_SINGLEQUOTE_,cljs.core.conj.call(null,nodes,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph_SINGLEQUOTE_)),unreachable_graphs], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph__$2,nodes,cljs.core.conj.call(null,unreachable_graphs,graph_SINGLEQUOTE_)], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph__$1,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.get.call(null,index_oir,attribute));
var graph_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22165,(0),null);
var node_ids = cljs.core.nth.call(null,vec__22165,(1),null);
var unreachable_graphs = cljs.core.nth.call(null,vec__22165,(2),null);
if(cljs.core.seq.call(null,node_ids)){
return com.wsscode.pathom3.connect.planner.create_root_or.call(null,graph_SINGLEQUOTE_,env,node_ids);
} else {
var _LT__GT_ = com.wsscode.pathom3.connect.planner.add_unreachable_path.call(null,graph__$1,env,cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,cljs.core.PersistentArrayMap.EMPTY]));
return cljs.core.reduce.call(null,com.wsscode.pathom3.connect.planner.merge_unreachable,_LT__GT_,unreachable_graphs);
}
});
/**
 * Compute the run graph for a given attribute.
 */
com.wsscode.pathom3.connect.planner.compute_attribute_graph = (function com$wsscode$pathom3$connect$planner$compute_attribute_graph(p__22172,p__22173){
var map__22174 = p__22172;
var map__22174__$1 = cljs.core.__destructure_map.call(null,map__22174);
var graph = map__22174__$1;
var unreachable_paths = cljs.core.get.call(null,map__22174__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-paths","com.wsscode.pathom3.connect.planner/unreachable-paths",614064297));
var map__22175 = p__22173;
var map__22175__$1 = cljs.core.__destructure_map.call(null,map__22175);
var env = map__22175__$1;
var map__22176 = cljs.core.get.call(null,map__22175__$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
var map__22176__$1 = cljs.core.__destructure_map.call(null,map__22176);
var attr = cljs.core.get.call(null,map__22176__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var attr_deps_trail = cljs.core.get.call(null,map__22175__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","attr-deps-trail","com.wsscode.pathom3.connect.planner/attr-deps-trail",-81376567));
var index_oir = cljs.core.get.call(null,map__22175__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909));
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),attr);
if(cljs.core.contains_QMARK_.call(null,unreachable_paths,attr)){
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-attribute-unreachable","com.wsscode.pathom3.connect.planner/snapshot-attribute-unreachable",-974827819),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Attribute unreachable ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)].join('')], null));
} else {
if(cljs.core.contains_QMARK_.call(null,attr_deps_trail,attr)){
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-attribute-cycle-dependency","com.wsscode.pathom3.connect.planner/snapshot-attribute-cycle-dependency",-2139400464),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Attribute cycle detected for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)].join('')], null));
} else {
if(cljs.core.contains_QMARK_.call(null,index_oir,attr)){
return com.wsscode.pathom3.connect.planner.compute_attribute_graph_STAR_.call(null,graph,env__$1);
} else {
return com.wsscode.pathom3.connect.planner.add_unreachable_path.call(null,graph,env__$1,cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,cljs.core.PersistentArrayMap.EMPTY]));

}
}
}
});
com.wsscode.pathom3.connect.planner.sanitize_params = (function com$wsscode$pathom3$connect$planner$sanitize_params(params){
if(cljs.core.seq.call(null,params)){
return params;
} else {
return null;
}
});
com.wsscode.pathom3.connect.planner.merge_ast_children = (function com$wsscode$pathom3$connect$planner$merge_ast_children(a,b){
var idx = com.wsscode.pathom3.format.eql.index_ast.call(null,a);
return cljs.core.reduce.call(null,(function (ast,child){
var temp__5821__auto__ = cljs.core.get.call(null,idx,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child));
if(cljs.core.truth_(temp__5821__auto__)){
var entry = temp__5821__auto__;
var p1 = com.wsscode.pathom3.connect.planner.sanitize_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(entry));
var p2 = com.wsscode.pathom3.connect.planner.sanitize_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(child));
if(cljs.core._EQ_.call(null,p1,p2)){
if(((cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(entry))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(child))))){
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.mapv.call(null,(function (c){
if(cljs.core._EQ_.call(null,c,entry)){
return com.wsscode.pathom3.connect.planner.merge_ast_children.call(null,c,child);
} else {
return c;
}
}),children);
}));
} else {
return ast;
}
} else {
throw cljs.core.ex_info.call(null,"Incompatible placeholder request",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-node","source-node",2089159489),entry,new cljs.core.Keyword(null,"conflicting-node","conflicting-node",1427124623),child], null));
}
} else {
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,child);
}
}),a,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(b));
});
com.wsscode.pathom3.connect.planner.merge_placeholder_ast = (function com$wsscode$pathom3$connect$planner$merge_placeholder_ast(index_ast,placeholder_ast){
return cljs.core.merge_with.call(null,com.wsscode.pathom3.connect.planner.merge_ast_children,index_ast,com.wsscode.misc.coll.filter_vals.call(null,cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"children","children",-940561982)),com.wsscode.pathom3.format.eql.index_ast.call(null,placeholder_ast)));
});
com.wsscode.pathom3.connect.planner.remove_parameterized_attributes = (function com$wsscode$pathom3$connect$planner$remove_parameterized_attributes(ast){
return edn_query_language.core.transduce_children.call(null,cljs.core.remove.call(null,(function (p1__22177_SHARP_){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__22177_SHARP_));
})),ast);
});
/**
 * This function deals with attributes that are not part of the index execution. The
 *   cases here are:
 * 
 *   - EQL idents
 *   - Previously available data
 *   - Placeholders
 */
com.wsscode.pathom3.connect.planner.compute_non_index_attribute = (function com$wsscode$pathom3$connect$planner$compute_non_index_attribute(graph,p__22178){
var map__22179 = p__22178;
var map__22179__$1 = cljs.core.__destructure_map.call(null,map__22179);
var env = map__22179__$1;
var map__22180 = cljs.core.get.call(null,map__22179__$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957));
var map__22180__$1 = cljs.core.__destructure_map.call(null,map__22180);
var ast = map__22180__$1;
var attr = cljs.core.get.call(null,map__22180__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var available_data = cljs.core.get.call(null,map__22179__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292));
if(edn_query_language.core.ident_QMARK_.call(null,attr)){
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.add_ident_process.call(null,graph,ast),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-add-ident-process","com.wsscode.pathom3.connect.planner/snapshot-add-ident-process",-1538347931),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Add ident process for ",cljs.core.pr_str.call(null,attr)].join('')], null));
} else {
if(cljs.core.contains_QMARK_.call(null,available_data,attr)){
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.mark_attribute_process_sub_query.call(null,graph,ast),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-attribute-already-available","com.wsscode.pathom3.connect.planner/snapshot-attribute-already-available",-1865514315),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Attribute already available ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)].join('')], null));
} else {
if(com.wsscode.pathom3.placeholder.placeholder_key_QMARK_.call(null,env,attr)){
var G__22181 = com.wsscode.pathom3.connect.planner.add_placeholder_entry.call(null,graph,attr);
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.update.call(null,com.wsscode.pathom3.connect.planner.compute_run_graph_STAR_.call(null,G__22181,cljs.core.update.call(null,env,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),com.wsscode.pathom3.connect.planner.remove_parameterized_attributes)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713),com.wsscode.pathom3.connect.planner.merge_placeholder_ast,ast);
} else {
return G__22181;
}
} else {
return null;
}
}
}
});
com.wsscode.pathom3.connect.planner.plan_mutation_nested_query = (function com$wsscode$pathom3$connect$planner$plan_mutation_nested_query(env,p__22182){
var map__22183 = p__22182;
var map__22183__$1 = cljs.core.__destructure_map.call(null,map__22183);
var ast = map__22183__$1;
var key = cljs.core.get.call(null,map__22183__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.compute_dynamic_nested_requirements.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786)));
if(cljs.core.truth_(temp__5821__auto__)){
var nested_shape = temp__5821__auto__;
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast.call(null,nested_shape));
} else {
return ast;
}
});
com.wsscode.pathom3.connect.planner.plan_mutation = (function com$wsscode$pathom3$connect$planner$plan_mutation(graph,env,p__22184){
var map__22185 = p__22184;
var map__22185__$1 = cljs.core.__destructure_map.call(null,map__22185);
var ast = map__22185__$1;
var key = cljs.core.get.call(null,map__22185__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var temp__5821__auto__ = com.wsscode.pathom3.connect.indexes.mutation.call(null,env,key);
if(cljs.core.truth_(temp__5821__auto__)){
var mutation = temp__5821__auto__;
var ast__$1 = (function (){var G__22186 = ast;
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.operation_config.call(null,mutation)))){
return com.wsscode.pathom3.connect.planner.plan_mutation_nested_query.call(null,env,G__22186);
} else {
return G__22186;
}
})();
return cljs.core.update.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","mutations","com.wsscode.pathom3.connect.planner/mutations",-1571107042),com.wsscode.misc.coll.vconj,ast__$1);
} else {
return cljs.core.update.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","mutations","com.wsscode.pathom3.connect.planner/mutations",-1571107042),com.wsscode.misc.coll.vconj,ast);
}
});
/**
 * Starts scanning the AST to plan for each attribute.
 */
com.wsscode.pathom3.connect.planner.compute_run_graph_STAR_ = (function com$wsscode$pathom3$connect$planner$compute_run_graph_STAR_(graph,env){
var vec__22187 = cljs.core.reduce.call(null,(function (p__22190,ast){
var vec__22191 = p__22190;
var graph__$1 = cljs.core.nth.call(null,vec__22191,(0),null);
var node_ids = cljs.core.nth.call(null,vec__22191,(1),null);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast))){
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast);
var or__5002__auto__ = (function (){var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.compute_non_index_attribute.call(null,graph__$1,env__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var map__22194 = temp__5821__auto__;
var map__22194__$1 = cljs.core.__destructure_map.call(null,map__22194);
var graph_SINGLEQUOTE_ = map__22194__$1;
var root = cljs.core.get.call(null,map__22194__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_SINGLEQUOTE_,(function (){var G__22195 = node_ids;
if(cljs.core.truth_(root)){
return cljs.core.conj.call(null,G__22195,root);
} else {
return G__22195;
}
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var map__22196 = com.wsscode.pathom3.connect.planner.compute_attribute_graph.call(null,graph__$1,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast));
var map__22196__$1 = cljs.core.__destructure_map.call(null,map__22196);
var graph_SINGLEQUOTE_ = map__22196__$1;
var root = cljs.core.get.call(null,map__22196__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212));
if(cljs.core.truth_(root)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_SINGLEQUOTE_,cljs.core.conj.call(null,node_ids,root)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.planner.merge_unreachable.call(null,graph__$1,graph_SINGLEQUOTE_),node_ids], null);
}
}
} else {
if(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"call","call",-519999866))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.planner.plan_mutation.call(null,graph__$1,env,ast),node_ids], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph__$1,node_ids], null);

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph,cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957).cljs$core$IFn$_invoke$arity$1(env)));
var graph_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22187,(0),null);
var node_ids = cljs.core.nth.call(null,vec__22187,(1),null);
if(cljs.core.seq.call(null,node_ids)){
return com.wsscode.pathom3.connect.planner.create_root_and.call(null,graph_SINGLEQUOTE_,env,node_ids);
} else {
return graph_SINGLEQUOTE_;
}
});
com.wsscode.pathom3.connect.planner.keep_required_transducer = cljs.core.comp.call(null,cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517),new cljs.core.Keyword(null,"params","params",710516235))),cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"...","...",-1926939749,null),null], null), null),new cljs.core.Keyword(null,"query","query",-1288509510))),cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.int_QMARK_,new cljs.core.Keyword(null,"query","query",-1288509510))));
com.wsscode.pathom3.connect.planner.required_ast_from_index_ast = (function com$wsscode$pathom3$connect$planner$required_ast_from_index_ast(p__22197){
var map__22198 = p__22197;
var map__22198__$1 = cljs.core.__destructure_map.call(null,map__22198);
var index_ast = cljs.core.get.call(null,map__22198__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,com.wsscode.pathom3.connect.planner.keep_required_transducer,cljs.core.vals.call(null,index_ast))], null);
});
com.wsscode.pathom3.connect.planner.required_ast_from_source_ast = (function com$wsscode$pathom3$connect$planner$required_ast_from_source_ast(p__22200){
var map__22201 = p__22200;
var map__22201__$1 = cljs.core.__destructure_map.call(null,map__22201);
var source_ast = cljs.core.get.call(null,map__22201__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-ast","com.wsscode.pathom3.connect.planner/source-ast",1604047106));
return cljs.core.update.call(null,source_ast,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__22199_SHARP_){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,p1__22199_SHARP_)),com.wsscode.pathom3.connect.planner.keep_required_transducer,p1__22199_SHARP_);
}));
});
com.wsscode.pathom3.connect.planner.unreachable_attr_cause = (function com$wsscode$pathom3$connect$planner$unreachable_attr_cause(p__22202,graph,attr){
var map__22203 = p__22202;
var map__22203__$1 = cljs.core.__destructure_map.call(null,map__22203);
var index_oir = cljs.core.get.call(null,map__22203__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909));
var temp__5821__auto__ = cljs.core.get.call(null,index_oir,attr);
if(cljs.core.truth_(temp__5821__auto__)){
var paths = temp__5821__auto__;
var unreachable_paths = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-paths","com.wsscode.pathom3.connect.planner/unreachable-paths",614064297).cljs$core$IFn$_invoke$arity$1(graph);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-cause","com.wsscode.pathom3.connect.planner/unreachable-cause",1852050791),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-cause-missing-inputs","com.wsscode.pathom3.connect.planner/unreachable-cause-missing-inputs",456921428),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-missing-inputs","com.wsscode.pathom3.connect.planner/unreachable-missing-inputs",2044730969),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__22204){
var vec__22205 = p__22204;
var k = cljs.core.nth.call(null,vec__22205,(0),null);
var v = cljs.core.nth.call(null,vec__22205,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.format.shape_descriptor.intersection.call(null,unreachable_paths,k),v], null);
})),paths)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-cause","com.wsscode.pathom3.connect.planner/unreachable-cause",1852050791),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-cause-unknown-attribute","com.wsscode.pathom3.connect.planner/unreachable-cause-unknown-attribute",-1429347908)], null);
}
});
com.wsscode.pathom3.connect.planner.unreachable_details = (function com$wsscode$pathom3$connect$planner$unreachable_details(env,graph,missing){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__22208){
var vec__22209 = p__22208;
var k = cljs.core.nth.call(null,vec__22209,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,com.wsscode.pathom3.connect.planner.unreachable_attr_cause.call(null,env,graph,k)], null);
})),missing);
});
com.wsscode.pathom3.connect.planner.unreachable_attr_str = (function com$wsscode$pathom3$connect$planner$unreachable_attr_str(attr){
return ["  - Can't reach attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)].join('');
});
com.wsscode.pathom3.connect.planner.unreachable_attr_inputs = (function com$wsscode$pathom3$connect$planner$unreachable_attr_inputs(inputs){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,com.wsscode.pathom3.connect.planner.unreachable_attr_str,cljs.core.keys.call(null,cljs.core.key.call(null,inputs))));
});
com.wsscode.pathom3.connect.planner.unreachable_detail_string = (function com$wsscode$pathom3$connect$planner$unreachable_detail_string(_env,attr,cause){
var G__22212 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-cause","com.wsscode.pathom3.connect.planner/unreachable-cause",1852050791).cljs$core$IFn$_invoke$arity$1(cause);
var G__22212__$1 = (((G__22212 instanceof cljs.core.Keyword))?G__22212.fqn:null);
switch (G__22212__$1) {
case "com.wsscode.pathom3.connect.planner/unreachable-cause-missing-inputs":
return ["- Attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," inputs can't be met, details:\n",clojure.string.join.call(null,"\n  OR\n",cljs.core.map.call(null,com.wsscode.pathom3.connect.planner.unreachable_attr_inputs,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-missing-inputs","com.wsscode.pathom3.connect.planner/unreachable-missing-inputs",2044730969).cljs$core$IFn$_invoke$arity$1(cause)))].join('');

break;
case "com.wsscode.pathom3.connect.planner/unreachable-cause-unknown-attribute":
return ["- Attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," is unknown, there is not any resolver that outputs it."].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22212__$1)].join('')));

}
});
com.wsscode.pathom3.connect.planner.verify_plan_BANG__STAR_ = (function com$wsscode$pathom3$connect$planner$verify_plan_BANG__STAR_(env,p__22215){
var map__22216 = p__22215;
var map__22216__$1 = cljs.core.__destructure_map.call(null,map__22216);
var graph = map__22216__$1;
var unreachable_paths = cljs.core.get.call(null,map__22216__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-paths","com.wsscode.pathom3.connect.planner/unreachable-paths",614064297));
if(cljs.core.seq.call(null,unreachable_paths)){
var user_required = com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.call(null,com.wsscode.pathom3.connect.planner.required_ast_from_index_ast.call(null,graph));
var missing = com.wsscode.pathom3.format.shape_descriptor.intersection.call(null,unreachable_paths,user_required);
if(cljs.core.seq.call(null,missing)){
throw (function (){var details = com.wsscode.pathom3.connect.planner.unreachable_details.call(null,env,graph,missing);
return cljs.core.ex_info.call(null,["Pathom can't find a path for the following elements in the query",com.wsscode.pathom3.path.at_path_string.call(null,env),":\n",clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__22214_SHARP_){
return com.wsscode.pathom3.connect.planner.unreachable_detail_string.call(null,env,cljs.core.key.call(null,p1__22214_SHARP_),cljs.core.val.call(null,p1__22214_SHARP_));
}),details))].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph-fn","com.wsscode.pathom3.connect.planner/graph-fn",-288964380),(function (){
return graph;
}),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-paths","com.wsscode.pathom3.connect.planner/unreachable-paths",614064297),missing,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","unreachable-details","com.wsscode.pathom3.connect.planner/unreachable-details",772719517),details,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),cljs.core.get.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558)),new cljs.core.Keyword("com.wsscode.pathom3.error","phase","com.wsscode.pathom3.error/phase",-1759004513),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","plan","com.wsscode.pathom3.connect.planner/plan",367838385),new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-unreachable","com.wsscode.pathom3.error/attribute-unreachable",-777663159)], null));
})();
} else {
return graph;
}
} else {
return graph;
}
});
/**
 * This will cause an exception to throw in case the plan can't reach some required
 *   attribute
 */
com.wsscode.pathom3.connect.planner.verify_plan_BANG_ = (function com$wsscode$pathom3$connect$planner$verify_plan_BANG_(p__22217,graph){
var map__22218 = p__22217;
var map__22218__$1 = cljs.core.__destructure_map.call(null,map__22218);
var env = map__22218__$1;
var lenient_mode_QMARK_ = cljs.core.get.call(null,map__22218__$1,new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921));
if(cljs.core.truth_(lenient_mode_QMARK_)){
try{return com.wsscode.pathom3.connect.planner.verify_plan_BANG__STAR_.call(null,env,graph);
}catch (e22219){var _ = e22219;
return cljs.core.assoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","verification-failed?","com.wsscode.pathom3.connect.planner/verification-failed?",-1491781109),true);
}} else {
return com.wsscode.pathom3.connect.planner.verify_plan_BANG__STAR_.call(null,env,graph);
}
});
com.wsscode.pathom3.connect.planner.pull_idents = (function com$wsscode$pathom3$connect$planner$pull_idents(ast){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.filter.call(null,edn_query_language.core.ident_QMARK_)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
/**
 * To optimize the plan caching Pathom will remove the values of the idents at the cache
 *   key. But upon later usage of the cache, the cache key will hit the previous AST, but
 *   that AST still has the initial values used on caching. This function will rehydrate
 *   the AST replacing the cached ident values with the current ident values.
 */
com.wsscode.pathom3.connect.planner.rehydrate_graph_idents = (function com$wsscode$pathom3$connect$planner$rehydrate_graph_idents(graph,ast){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100).cljs$core$IFn$_invoke$arity$1(graph))){
var target_idents = com.wsscode.pathom3.connect.planner.pull_idents.call(null,ast);
var source_idents = com.wsscode.pathom3.connect.planner.pull_idents.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-ast","com.wsscode.pathom3.connect.planner/source-ast",1604047106).cljs$core$IFn$_invoke$arity$1(graph));
var pairs = cljs.core.zipmap.call(null,source_idents,target_idents);
return cljs.core.reduce.call(null,(function (graph__$1,p__22221){
var vec__22222 = p__22221;
var source_ident = cljs.core.nth.call(null,vec__22222,(0),null);
var target_ident = cljs.core.nth.call(null,vec__22222,(1),null);
return cljs.core.update.call(null,graph__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100),(function (p1__22220_SHARP_){
return cljs.core.conj.call(null,cljs.core.disj.call(null,p1__22220_SHARP_,source_ident),target_ident);
}));
}),cljs.core.update.call(null,cljs.core.assoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-ast","com.wsscode.pathom3.connect.planner/source-ast",1604047106),ast),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713),clojure.set.rename_keys,pairs),cljs.core.map.call(null,cljs.core.vector,source_idents,target_idents));
} else {
return graph;
}
});
com.wsscode.pathom3.connect.planner.ast_contains_params_QMARK_ = (function com$wsscode$pathom3$connect$planner$ast_contains_params_QMARK_(p__22226){
var map__22227 = p__22226;
var map__22227__$1 = cljs.core.__destructure_map.call(null,map__22227);
var children = cljs.core.get.call(null,map__22227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.some.call(null,(function (p1__22225_SHARP_){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__22225_SHARP_));
}),children);
});
com.wsscode.pathom3.connect.planner.mark_fast_placeholder_processes = (function com$wsscode$pathom3$connect$planner$mark_fast_placeholder_processes(graph,env){
return cljs.core.update.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713),(function (index_ast){
return com.wsscode.misc.coll.map_vals.call(null,(function (ast){
var G__22228 = ast;
if(cljs.core.truth_((function (){var and__5000__auto__ = com.wsscode.pathom3.placeholder.placeholder_key_QMARK_.call(null,env,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if(and__5000__auto__){
return com.wsscode.pathom3.connect.planner.ast_contains_params_QMARK_.call(null,ast);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.call(null,G__22228,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholder-use-source-entity?","com.wsscode.pathom3.connect.planner/placeholder-use-source-entity?",1542269498),true);
} else {
return G__22228;
}
}),index_ast);
}));
});
com.wsscode.pathom3.connect.planner.ensure_resolver_consistent_params = (function com$wsscode$pathom3$connect$planner$ensure_resolver_consistent_params(graph){
return cljs.core.reduce.call(null,(function (graph_SINGLEQUOTE_,node_ids){
if((cljs.core.count.call(null,node_ids) > (1))){
var params = cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22229_SHARP_){
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph_SINGLEQUOTE_,p1__22229_SHARP_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210));
})),cljs.core.merge,node_ids);
if(cljs.core.seq.call(null,params)){
return cljs.core.reduce.call(null,(function (p1__22230_SHARP_,p2__22231_SHARP_){
return com.wsscode.pathom3.connect.planner.assoc_node.call(null,p1__22230_SHARP_,p2__22231_SHARP_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210),params);
}),graph_SINGLEQUOTE_,node_ids);
} else {
return graph_SINGLEQUOTE_;
}
} else {
return graph_SINGLEQUOTE_;
}
}),graph,cljs.core.vals.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-resolver->nodes","com.wsscode.pathom3.connect.planner/index-resolver->nodes",-1876314434).cljs$core$IFn$_invoke$arity$1(graph)));
});
/**
 * Generates a run plan for a given environment, the environment should contain the
 *   indexes in it (::pc/index-oir and ::pc/index-resolvers). It computes a plan to execute
 *   one level of an AST, the AST must be provided via the key :edn-query-language.ast/node.
 * 
 *    (compute-run-graph (assoc indexes :edn-query-language.ast/node ...))
 * 
 *   The resulting graph will look like this:
 * 
 *    {::nodes                 {1 {::pco/op-name      a
 *                                 ::node-id          1
 *                                 ::requires         {:a {}}
 *                                 ::input            {}
 *                                 ::source-for-attrs #{:a}
 *                                 ::node-parents      #{3}}
 *                              2 {::pco/op-name      b
 *                                 ::node-id          2
 *                                 ::requires         {:b {}}
 *                                 ::input            {}
 *                                 ::source-for-attrs #{:b}
 *                                 ::node-parents      #{3}}
 *                              3 {::node-id  3
 *                                 ::requires {:b {} :a {} :c {}}
 *                                 ::run-and  #{2 1 4}}
 *                              4 {::pco/op-name      c
 *                                 ::node-id          4
 *                                 ::requires         {:c {}}
 *                                 ::input            {}
 *                                 ::source-for-attrs #{:c}
 *                                 ::node-parents      #{3}}}
 *     ::index-resolver->nodes {a #{1} b #{2} c #{4}}
 *     ::unreachable-attrs     #{}
 *     ::index-attrs           {:a #{1} :b #{2} :c #{4}}
 *     ::root                  3}
 *   
 */
com.wsscode.pathom3.connect.planner.compute_run_graph = (function com$wsscode$pathom3$connect$planner$compute_run_graph(var_args){
var G__22233 = arguments.length;
switch (G__22233) {
case 1:
return com.wsscode.pathom3.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.wsscode.pathom3.connect.planner.compute_run_graph.call(null,cljs.core.PersistentArrayMap.EMPTY,env);
}));

(com.wsscode.pathom3.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$2 = (function (graph,p__22234){
var map__22235 = p__22234;
var map__22235__$1 = cljs.core.__destructure_map.call(null,map__22235);
var env = map__22235__$1;
var optimize_graph_QMARK_ = cljs.core.get.call(null,map__22235__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","optimize-graph?","com.wsscode.pathom3.connect.planner/optimize-graph?",95148922),true);
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-start-graph","com.wsscode.pathom3.connect.planner/snapshot-start-graph",-1423570127),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"=== Start query plan ==="], null));

return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","wrap-compute-run-graph","com.wsscode.pathom3.connect.planner/wrap-compute-run-graph",-815936910),(function com$wsscode$pathom3$connect$planner$compute_run_graph_internal(graph__$1,env__$1){
var _LT__GT_ = env__$1;
var _LT__GT___$1 = com.wsscode.pathom3.cache.cached.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","plan-cache*","com.wsscode.pathom3.connect.planner/plan-cache*",-982885642),_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.hash.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.indexes","index-oir","com.wsscode.pathom3.connect.indexes/index-oir",-418434909).cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292).cljs$core$IFn$_invoke$arity$1(env__$1),com.wsscode.pathom3.format.eql.cacheable_ast.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957).cljs$core$IFn$_invoke$arity$1(env__$1)),cljs.core.boolean$.call(null,optimize_graph_QMARK_)], null),(function (){
var env_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,cljs.core.merge.call(null,com.wsscode.pathom3.connect.planner.base_env.call(null),env__$1),cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","original-env","com.wsscode.pathom3.connect.planner/original-env",-154232736),env__$1);
var G__22236 = com.wsscode.pathom3.connect.planner.compute_run_graph_STAR_.call(null,cljs.core.merge.call(null,com.wsscode.pathom3.connect.planner.base_graph.call(null),graph__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713),com.wsscode.pathom3.format.eql.index_ast.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957).cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-ast","com.wsscode.pathom3.connect.planner/source-ast",1604047106),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957).cljs$core$IFn$_invoke$arity$1(env__$1),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292).cljs$core$IFn$_invoke$arity$1(env__$1),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","user-request-shape","com.wsscode.pathom3.connect.planner/user-request-shape",-1740332989),com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957).cljs$core$IFn$_invoke$arity$1(env__$1))], null)),env_SINGLEQUOTE_);
var G__22236__$1 = (cljs.core.truth_(optimize_graph_QMARK_)?com.wsscode.pathom3.connect.planner.optimize_graph.call(null,G__22236,env_SINGLEQUOTE_):G__22236);
var G__22236__$2 = com.wsscode.pathom3.connect.planner.mark_fast_placeholder_processes.call(null,G__22236__$1,env_SINGLEQUOTE_)
;
return com.wsscode.pathom3.connect.planner.ensure_resolver_consistent_params.call(null,G__22236__$2);

}));
var _LT__GT___$2 = com.wsscode.pathom3.connect.planner.rehydrate_graph_idents.call(null,_LT__GT___$1,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957).cljs$core$IFn$_invoke$arity$1(env__$1));
return com.wsscode.pathom3.connect.planner.verify_plan_BANG_.call(null,env__$1,_LT__GT___$2);
}),graph,env);
}));

(com.wsscode.pathom3.connect.planner.compute_run_graph.cljs$lang$maxFixedArity = 2);

com.wsscode.pathom3.connect.planner.can_merge_sibling_resolver_nodes_QMARK_ = (function com$wsscode$pathom3$connect$planner$can_merge_sibling_resolver_nodes_QMARK_(graph,node_id1,node_id2){
var n1 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id1);
var n2 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id2);
var and__5000__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(n1);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(n2));
} else {
return and__5000__auto__;
}
});
com.wsscode.pathom3.connect.planner.optimize_AND_resolver_siblings = (function com$wsscode$pathom3$connect$planner$optimize_AND_resolver_siblings(graph,env,parent_id,pivot,other_nodes){
var matching_nodes = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__22238_SHARP_){
return com.wsscode.pathom3.connect.planner.can_merge_sibling_resolver_nodes_QMARK_.call(null,graph,pivot,p1__22238_SHARP_);
})),other_nodes);
var merge_nodes = cljs.core.sort.call(null,cljs.core.conj.call(null,matching_nodes,pivot));
var graph_SINGLEQUOTE_ = (function (){var G__22239 = graph;
if(cljs.core.seq.call(null,matching_nodes)){
return com.wsscode.pathom3.connect.planner.merge_sibling_resolver_nodes.call(null,G__22239,env,parent_id,merge_nodes);
} else {
return G__22239;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom3.connect.planner.optimize_node.call(null,graph_SINGLEQUOTE_,env,cljs.core.first.call(null,merge_nodes)),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,matching_nodes),other_nodes)], null);
});
/**
 * This pass will collapse the same resolver node branches. This also do a local optimization
 *   on AND's and OR's sub-nodes. This is important to simplify the pass to merge OR nodes.
 */
com.wsscode.pathom3.connect.planner.optimize_AND_resolvers_pass = (function com$wsscode$pathom3$connect$planner$optimize_AND_resolvers_pass(graph,env,parent_id){
var map__22240 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,parent_id);
var map__22240__$1 = cljs.core.__destructure_map.call(null,map__22240);
var run_and = cljs.core.get.call(null,map__22240__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884));
var graph__$1 = graph;
var G__22244 = run_and;
var vec__22245 = G__22244;
var seq__22246 = cljs.core.seq.call(null,vec__22245);
var first__22247 = cljs.core.first.call(null,seq__22246);
var seq__22246__$1 = cljs.core.next.call(null,seq__22246);
var pivot = first__22247;
var node_ids = seq__22246__$1;
var graph__$2 = graph__$1;
var G__22244__$1 = G__22244;
while(true){
var graph__$3 = graph__$2;
var vec__22254 = G__22244__$1;
var seq__22255 = cljs.core.seq.call(null,vec__22254);
var first__22256 = cljs.core.first.call(null,seq__22255);
var seq__22255__$1 = cljs.core.next.call(null,seq__22255);
var pivot__$1 = first__22256;
var node_ids__$1 = seq__22255__$1;
if(cljs.core.truth_(pivot__$1)){
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.get_node.call(null,graph__$3,pivot__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049)))){
var vec__22257 = com.wsscode.pathom3.connect.planner.optimize_AND_resolver_siblings.call(null,graph__$3,env,parent_id,pivot__$1,node_ids__$1);
var graph_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22257,(0),null);
var node_ids_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22257,(1),null);
var G__22260 = graph_SINGLEQUOTE_;
var G__22261 = node_ids_SINGLEQUOTE_;
graph__$2 = G__22260;
G__22244__$1 = G__22261;
continue;
} else {
var G__22262 = com.wsscode.pathom3.connect.planner.optimize_node.call(null,graph__$3,env,pivot__$1);
var G__22263 = node_ids__$1;
graph__$2 = G__22262;
G__22244__$1 = G__22263;
continue;

}
} else {
return graph__$3;
}
break;
}
});
com.wsscode.pathom3.connect.planner.optimize_branch_items = (function com$wsscode$pathom3$connect$planner$optimize_branch_items(graph,env,branch_node_id){
var branches = com.wsscode.pathom3.connect.planner.node_branches.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,branch_node_id));
return cljs.core.reduce.call(null,(function (graph__$1,node_id){
return com.wsscode.pathom3.connect.planner.optimize_node.call(null,graph__$1,env,node_id);
}),graph,branches);
});
/**
 * This pass will look for branches of an AND node that are also AND nodes. In case
 *   further AND doesn't contain a run-next, it can be safely merged with the parent AND.
 * 
 *  AND           >        AND
 *  -> A          >        -> A
 *  -> AND        >        -> B
 *     -> B       >        -> C
 *     -> C       >
 *   
 */
com.wsscode.pathom3.connect.planner.optimize_AND_nested = (function com$wsscode$pathom3$connect$planner$optimize_AND_nested(graph,env,node_id){
var map__22264 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__22264__$1 = cljs.core.__destructure_map.call(null,map__22264);
var run_and = cljs.core.get.call(null,map__22264__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884));
var graph__$1 = graph;
var G__22268 = run_and;
var vec__22269 = G__22268;
var seq__22270 = cljs.core.seq.call(null,vec__22269);
var first__22271 = cljs.core.first.call(null,seq__22270);
var seq__22270__$1 = cljs.core.next.call(null,seq__22270);
var pivot = first__22271;
var node_ids = seq__22270__$1;
var graph__$2 = graph__$1;
var G__22268__$1 = G__22268;
while(true){
var graph__$3 = graph__$2;
var vec__22276 = G__22268__$1;
var seq__22277 = cljs.core.seq.call(null,vec__22276);
var first__22278 = cljs.core.first.call(null,seq__22277);
var seq__22277__$1 = cljs.core.next.call(null,seq__22277);
var pivot__$1 = first__22278;
var node_ids__$1 = seq__22277__$1;
if(cljs.core.truth_(pivot__$1)){
var pivot_node = (function (){var G__22279 = pivot__$1;
if((G__22279 == null)){
return null;
} else {
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph__$3,G__22279);
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = pivot_node;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(pivot_node);
if(cljs.core.truth_(and__5000__auto____$1)){
return (new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(pivot_node) == null);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var _ = com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph__$3,env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-merge-nested-ands","com.wsscode.pathom3.connect.planner/snapshot-merge-nested-ands",605591652),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Merge nested AND with parent AND",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([pivot__$1,node_id]),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(pivot_node)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,(1),pivot__$1,(1)])], null));
var graph_SINGLEQUOTE_ = com.wsscode.pathom3.connect.planner.remove_node.call(null,cljs.core.reduce.call(null,((function (graph__$2,G__22268__$1,_,pivot_node,graph__$3,vec__22276,seq__22277,first__22278,seq__22277__$1,pivot__$1,node_ids__$1,graph__$1,G__22268,vec__22269,seq__22270,first__22271,seq__22270__$1,pivot,node_ids,map__22264,map__22264__$1,run_and){
return (function (g,nested_and_child_node_id){
return com.wsscode.pathom3.connect.planner.add_branch_to_node.call(null,com.wsscode.pathom3.connect.planner.remove_from_parent_branches.call(null,g,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),nested_and_child_node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-parents","com.wsscode.pathom3.connect.planner/node-parents",-690861122),cljs.core.PersistentHashSet.createAsIfByAssoc([pivot__$1])], null)),node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),nested_and_child_node_id);
});})(graph__$2,G__22268__$1,_,pivot_node,graph__$3,vec__22276,seq__22277,first__22278,seq__22277__$1,pivot__$1,node_ids__$1,graph__$1,G__22268,vec__22269,seq__22270,first__22271,seq__22270__$1,pivot,node_ids,map__22264,map__22264__$1,run_and))
,graph__$3,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(pivot_node)),pivot__$1);
var ___$1 = com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph_SINGLEQUOTE_,env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-event","com.wsscode.pathom3.connect.planner/snapshot-event",-122347979),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-merge-nested-ands-done","com.wsscode.pathom3.connect.planner/snapshot-merge-nested-ands-done",874295309),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Merged nested AND with parent AND",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node_id]),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(pivot_node)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,(1)])], null));
var G__22280 = graph_SINGLEQUOTE_;
var G__22281 = node_ids__$1;
graph__$2 = G__22280;
G__22268__$1 = G__22281;
continue;
} else {
var G__22282 = graph__$3;
var G__22283 = node_ids__$1;
graph__$2 = G__22282;
G__22268__$1 = G__22283;
continue;
}
} else {
return graph__$3;
}
break;
}
});
com.wsscode.pathom3.connect.planner.compare_AND_children_denorm = (function com$wsscode$pathom3$connect$planner$compare_AND_children_denorm(node){
return cljs.core.select_keys.call(null,node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140)], null));
});
com.wsscode.pathom3.connect.planner.move_branches_to_another_node = (function com$wsscode$pathom3$connect$planner$move_branches_to_another_node(graph,source_node_id,target_node_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,source_node_id);
var branch_items = com.wsscode.pathom3.connect.planner.node_branches.call(null,node);
return cljs.core.reduce.call(null,(function (p1__22284_SHARP_,p2__22285_SHARP_){
return com.wsscode.pathom3.connect.planner.move_branch_item_node.call(null,p1__22284_SHARP_,target_node_id,p2__22285_SHARP_);
}),graph,branch_items);
});
com.wsscode.pathom3.connect.planner.merge_sibling_equal_branches = (function com$wsscode$pathom3$connect$planner$merge_sibling_equal_branches(graph,env,parent_node_id,p__22286){
var vec__22287 = p__22286;
var seq__22288 = cljs.core.seq.call(null,vec__22287);
var first__22289 = cljs.core.first.call(null,seq__22288);
var seq__22288__$1 = cljs.core.next.call(null,seq__22288);
var target_node_id = first__22289;
var mergeable_siblings_ids = seq__22288__$1;
var node_ids = vec__22287;
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Merge nodes of same type with same branches",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.set.call(null,node_ids),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([target_node_id,(1)])], null));

var parent_node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,parent_node_id);
var branch_type = com.wsscode.pathom3.connect.planner.node_branch_type.call(null,parent_node);
var _LT__GT_ = graph;
var _LT__GT___$1 = cljs.core.reduce.call(null,(function (graph__$1,node_id){
return com.wsscode.pathom3.connect.planner.move_branches_to_another_node.call(null,graph__$1,node_id,target_node_id);
}),_LT__GT_,mergeable_siblings_ids);
var _LT__GT___$2 = com.wsscode.pathom3.connect.planner.combine_run_next_STAR_.call(null,_LT__GT___$1,env,branch_type,cljs.core.conj.call(null,mergeable_siblings_ids,target_node_id),target_node_id,((cljs.core._EQ_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),branch_type))?cljs.core.select_keys.call(null,parent_node,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040)], null)):cljs.core.PersistentArrayMap.EMPTY));
var _LT__GT___$3 = cljs.core.reduce.call(null,(function (graph__$1,node_id){
return com.wsscode.pathom3.connect.planner.remove_node.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,graph__$1,target_node_id,null,com.wsscode.pathom3.connect.planner.combine_expects,com.wsscode.pathom3.connect.planner.get_node.call(null,graph__$1,node_id)),node_id);
}),_LT__GT___$2,mergeable_siblings_ids);
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,_LT__GT___$3,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Merge done",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([target_node_id])], null));
});
/**
 * When sibling branch nodes are of the same type and have the same branch structure we
 *   can merge then.
 */
com.wsscode.pathom3.connect.planner.optimize_siblings_with_same_branches = (function com$wsscode$pathom3$connect$planner$optimize_siblings_with_same_branches(graph,env,node_id){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","experimental-branch-optimizations","com.wsscode.pathom3.connect.planner/experimental-branch-optimizations",-1025833949).cljs$core$IFn$_invoke$arity$1(env))){
var branches = com.wsscode.pathom3.connect.planner.node_branches.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id));
var node_ids = cljs.core.keep.call(null,(function (nid){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,nid);
if(cljs.core.truth_(com.wsscode.pathom3.connect.planner.node_branch_type.call(null,node))){
return nid;
} else {
return null;
}
}),branches);
var denorm_index = (function (){var _LT__GT_ = graph;
var _LT__GT___$1 = cljs.core.assoc.call(null,_LT__GT_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","denorm-update-node","com.wsscode.pathom3.connect.planner/denorm-update-node",750983148),com.wsscode.pathom3.connect.planner.compare_AND_children_denorm);
return cljs.core.reduce.call(null,(function (p1__22290_SHARP_,p2__22291_SHARP_){
return com.wsscode.pathom3.connect.planner.denormalize_node.call(null,cljs.core.update_in.call(null,p1__22290_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574),p2__22291_SHARP_], null),cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140)),p2__22291_SHARP_);
}),_LT__GT___$1,node_ids);
})();
var same_branch_groups = com.wsscode.misc.coll.filter_vals.call(null,(function (p1__22293_SHARP_){
return (cljs.core.count.call(null,p1__22293_SHARP_) > (1));
}),cljs.core.group_by.call(null,(function (p1__22292_SHARP_){
return com.wsscode.pathom3.connect.planner.get_denormalized_node.call(null,denorm_index,p1__22292_SHARP_);
}),node_ids));
var mergeable_groups = cljs.core.vals.call(null,same_branch_groups);
if(cljs.core.seq.call(null,mergeable_groups)){
return com.wsscode.pathom3.connect.planner.optimize_branch_items.call(null,cljs.core.reduce.call(null,(function (p1__22294_SHARP_,p2__22295_SHARP_){
return com.wsscode.pathom3.connect.planner.merge_sibling_equal_branches.call(null,p1__22294_SHARP_,env,node_id,p2__22295_SHARP_);
}),graph,mergeable_groups),env,node_id);
} else {
return graph;
}
} else {
return graph;
}
});
com.wsscode.pathom3.connect.planner.push_parent_and_deps_to_branch = (function com$wsscode$pathom3$connect$planner$push_parent_and_deps_to_branch(graph,env,parent_node_id,branch_node_id){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,parent_node_id);
var branch_items = cljs.core.disj.call(null,com.wsscode.pathom3.connect.planner.node_branches.call(null,node),branch_node_id);
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Move parent AND branches to children with same structure",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),com.wsscode.pathom3.connect.planner.node_branches.call(null,node),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([branch_node_id,(1)])], null));

return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__22296_SHARP_,p2__22297_SHARP_){
return com.wsscode.pathom3.connect.planner.move_branch_item_node.call(null,p1__22296_SHARP_,branch_node_id,p2__22297_SHARP_);
}),graph,branch_items),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Move done",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),com.wsscode.pathom3.connect.planner.node_branches.call(null,node)], null));
});
/**
 * Similar to optimize-siblings-with-same-braches, but looks if a branch node has a children
 *   item that has the same branch structure as the parent.
 */
com.wsscode.pathom3.connect.planner.optimize_nested_branch_with_same_branches = (function com$wsscode$pathom3$connect$planner$optimize_nested_branch_with_same_branches(graph,env,node_id){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","experimental-branch-optimizations","com.wsscode.pathom3.connect.planner/experimental-branch-optimizations",-1025833949).cljs$core$IFn$_invoke$arity$1(env))){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var branch_type = com.wsscode.pathom3.connect.planner.node_branch_type.call(null,node);
var candidate_ids = cljs.core.keep.call(null,(function (node_id__$1){
if(cljs.core._EQ_.call(null,com.wsscode.pathom3.connect.planner.node_branch_type.call(null,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id__$1)),branch_type)){
return node_id__$1;
} else {
return null;
}
}),cljs.core.get.call(null,node,branch_type));
var denorm_index = (function (){var _LT__GT_ = graph;
var _LT__GT___$1 = cljs.core.assoc.call(null,_LT__GT_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","denorm-update-node","com.wsscode.pathom3.connect.planner/denorm-update-node",750983148),com.wsscode.pathom3.connect.planner.compare_AND_children_denorm);
return cljs.core.reduce.call(null,(function (p1__22298_SHARP_,p2__22299_SHARP_){
return com.wsscode.pathom3.connect.planner.denormalize_node.call(null,com.wsscode.pathom3.connect.planner.set_node_run_next_STAR_.call(null,p1__22298_SHARP_,p2__22299_SHARP_,null),p2__22299_SHARP_);
}),_LT__GT___$1,cljs.core.conj.call(null,candidate_ids,node_id));
})();
var parent_denormed = com.wsscode.pathom3.connect.planner.get_denormalized_node.call(null,denorm_index,node_id);
var mergeable_id = com.wsscode.misc.coll.find_first.call(null,(function (node_id__$1){
var denorm_item = com.wsscode.pathom3.connect.planner.get_denormalized_node.call(null,denorm_index,node_id__$1);
return cljs.core._EQ_.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,parent_denormed,branch_type,cljs.core.disj,denorm_item),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140)),cljs.core.dissoc.call(null,denorm_item,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140)));
}),candidate_ids);
var mergeable_node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,mergeable_id);
if(cljs.core.truth_(mergeable_id)){
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(mergeable_node);
} else {
return and__5000__auto__;
}
})())){
return com.wsscode.pathom3.connect.planner.optimize_node.call(null,com.wsscode.pathom3.connect.planner.push_parent_and_deps_to_branch.call(null,graph,env,node_id,mergeable_id),env,node_id);
} else {
return com.wsscode.pathom3.connect.planner.optimize_node.call(null,com.wsscode.pathom3.connect.planner.merge_sibling_equal_branches.call(null,graph,env,node_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,mergeable_id], null)),env,node_id);
}
} else {
return graph;
}
} else {
return graph;
}
});
com.wsscode.pathom3.connect.planner.optimize_AND_branches = (function com$wsscode$pathom3$connect$planner$optimize_AND_branches(graph,env,node_id){
return com.wsscode.pathom3.connect.planner.simplify_single_branch_node.call(null,com.wsscode.pathom3.connect.planner.optimize_nested_branch_with_same_branches.call(null,com.wsscode.pathom3.connect.planner.optimize_siblings_with_same_branches.call(null,com.wsscode.pathom3.connect.planner.optimize_AND_resolvers_pass.call(null,com.wsscode.pathom3.connect.planner.optimize_AND_nested.call(null,com.wsscode.pathom3.connect.planner.optimize_branch_items.call(null,graph,env,node_id),env,node_id),env,node_id),env,node_id),env,node_id),env,node_id);
});
com.wsscode.pathom3.connect.planner.sub_sequence_QMARK_ = (function com$wsscode$pathom3$connect$planner$sub_sequence_QMARK_(seq_a,seq_b){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,cljs.core._EQ_,seq_a,seq_b));
});
com.wsscode.pathom3.connect.planner.matching_chains_QMARK_ = (function com$wsscode$pathom3$connect$planner$matching_chains_QMARK_(chain_a,chain_b){
return com.wsscode.pathom3.connect.planner.sub_sequence_QMARK_.call(null,cljs.core.map.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),chain_a),cljs.core.map.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),chain_b));
});
com.wsscode.pathom3.connect.planner.merge_sibling_or_sub_chains = (function com$wsscode$pathom3$connect$planner$merge_sibling_or_sub_chains(graph,env,p__22300){
var vec__22301 = p__22300;
var seq__22302 = cljs.core.seq.call(null,vec__22301);
var first__22303 = cljs.core.first.call(null,seq__22302);
var seq__22302__$1 = cljs.core.next.call(null,seq__22302);
var chain = first__22303;
var other_chains = seq__22302__$1;
return cljs.core.reduce.call(null,(function (graph__$1,chain_SINGLEQUOTE_){
var map__22304 = cljs.core.get.call(null,chain,(cljs.core.count.call(null,chain_SINGLEQUOTE_) - (1)));
var map__22304__$1 = cljs.core.__destructure_map.call(null,map__22304);
var last_target_node_id = cljs.core.get.call(null,map__22304__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
return com.wsscode.pathom3.connect.planner.assoc_node.call(null,cljs.core.reduce.call(null,(function (graph__$2,p__22305){
var vec__22306 = p__22305;
var map__22309 = cljs.core.nth.call(null,vec__22306,(0),null);
var map__22309__$1 = cljs.core.__destructure_map.call(null,map__22309);
var target_node_id = cljs.core.get.call(null,map__22309__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var map__22310 = cljs.core.nth.call(null,vec__22306,(1),null);
var map__22310__$1 = cljs.core.__destructure_map.call(null,map__22310);
var source_node_id = cljs.core.get.call(null,map__22310__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.merge_sibling_resolver_node.call(null,com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph__$2,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Merge sibling resolvers from same OR sub-path",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([target_node_id,source_node_id])], null)),target_node_id,source_node_id),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Merged",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([target_node_id])], null));
}),graph__$1,cljs.core.mapv.call(null,cljs.core.vector,chain,chain_SINGLEQUOTE_)),last_target_node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-resolution-checkpoint?","com.wsscode.pathom3.connect.planner/node-resolution-checkpoint?",1547353457),true);
}),graph,other_chains);
});
/**
 * This function will start from a pivot and check which chains are sub-chains, in case
 *   the matched chain is longer than the pivot, that chain becomes the pivot. This avoids
 *   the issue where the initial pivot is compatible with chains B and C, but B isn't
 *   compatible with C.
 * 
 *  A -> X
 *  B -> X Y Z
 *  C -> X Z Y
 * 
 *   In that example, A will be compatible with B. A is also compatible with C, but B isn't
 *   compatible with C. So only B chain must be returned as a matching chain.
 */
com.wsscode.pathom3.connect.planner.find_matching_chains = (function com$wsscode$pathom3$connect$planner$find_matching_chains(pivot,chains){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__22311,chain){
var vec__22312 = p__22311;
var p = cljs.core.nth.call(null,vec__22312,(0),null);
var o = cljs.core.nth.call(null,vec__22312,(1),null);
if(com.wsscode.pathom3.connect.planner.matching_chains_QMARK_.call(null,p,chain)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core.count.call(null,chain) > cljs.core.count.call(null,p)))?chain:p),cljs.core.conj.call(null,o,chain)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,o], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pivot,cljs.core.PersistentHashSet.EMPTY], null),chains));
});
/**
 * This function looks to match branches of the OR node that are
 *   sub-paths of each other (eg: A, A -> B, merge to just A -> B). In this case we can
 *   merge those chains and return the number of branches in the OR node.
 * 
 *   At this moment this fn only deals with paths that have only resolvers,
 *   it may look for paths with sub-branches in the future.
 */
com.wsscode.pathom3.connect.planner.optimize_OR_sub_paths = (function com$wsscode$pathom3$connect$planner$optimize_OR_sub_paths(graph,env,node_id){
var map__22317 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__22317__$1 = cljs.core.__destructure_map.call(null,map__22317);
var run_or = cljs.core.get.call(null,map__22317__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891));
var resolver_chains = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.call(null,(function (node_id__$1){
var chain = com.wsscode.pathom3.connect.planner.find_run_next_descendants.call(null,graph,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),node_id__$1], null));
if(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),chain)){
return chain;
} else {
return null;
}
})),run_or);
var graph__$1 = graph;
var G__22321 = resolver_chains;
var vec__22322 = G__22321;
var seq__22323 = cljs.core.seq.call(null,vec__22322);
var first__22324 = cljs.core.first.call(null,seq__22323);
var seq__22323__$1 = cljs.core.next.call(null,seq__22323);
var pivot = first__22324;
var chains = seq__22323__$1;
var graph__$2 = graph__$1;
var G__22321__$1 = G__22321;
while(true){
var graph__$3 = graph__$2;
var vec__22325 = G__22321__$1;
var seq__22326 = cljs.core.seq.call(null,vec__22325);
var first__22327 = cljs.core.first.call(null,seq__22326);
var seq__22326__$1 = cljs.core.next.call(null,seq__22326);
var pivot__$1 = first__22327;
var chains__$1 = seq__22326__$1;
if(cljs.core.truth_(pivot__$1)){
var matching_chains = com.wsscode.pathom3.connect.planner.find_matching_chains.call(null,pivot__$1,chains__$1);
var merge_chains = cljs.core.sort_by.call(null,cljs.core.count,((function (graph__$2,G__22321__$1,matching_chains,graph__$3,vec__22325,seq__22326,first__22327,seq__22326__$1,pivot__$1,chains__$1,graph__$1,G__22321,vec__22322,seq__22323,first__22324,seq__22323__$1,pivot,chains,map__22317,map__22317__$1,run_or,resolver_chains){
return (function (p1__22316_SHARP_,p2__22315_SHARP_){
return cljs.core.compare.call(null,p2__22315_SHARP_,p1__22316_SHARP_);
});})(graph__$2,G__22321__$1,matching_chains,graph__$3,vec__22325,seq__22326,first__22327,seq__22326__$1,pivot__$1,chains__$1,graph__$1,G__22321,vec__22322,seq__22323,first__22324,seq__22323__$1,pivot,chains,map__22317,map__22317__$1,run_or,resolver_chains))
,cljs.core.conj.call(null,matching_chains,pivot__$1));
var graph_SINGLEQUOTE_ = (function (){var G__22328 = graph__$3;
if(cljs.core.seq.call(null,matching_chains)){
return com.wsscode.pathom3.connect.planner.merge_sibling_or_sub_chains.call(null,G__22328,env,merge_chains);
} else {
return G__22328;
}
})();
var G__22329 = graph_SINGLEQUOTE_;
var G__22330 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,matching_chains),chains__$1);
graph__$2 = G__22329;
G__22321__$1 = G__22330;
continue;
} else {
return graph__$3;
}
break;
}
});
com.wsscode.pathom3.connect.planner.optimize_nested_OR = (function com$wsscode$pathom3$connect$planner$optimize_nested_OR(graph,env,node_id){
var map__22331 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__22331__$1 = cljs.core.__destructure_map.call(null,map__22331);
var run_or = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891));
var nested_candidates = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.call(null,(function (node_id__$1){
var node = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id__$1);
var and__5000__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(node));
if(and__5000__auto____$1){
return node;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})),run_or);
return cljs.core.reduce.call(null,(function (graph__$1,p__22332){
var map__22333 = p__22332;
var map__22333__$1 = cljs.core.__destructure_map.call(null,map__22333);
var node_id_SINGLEQUOTE_ = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var run_or__$1 = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891));
return com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,com.wsscode.pathom3.connect.planner.add_node_branches.call(null,com.wsscode.pathom3.connect.planner.remove_node.call(null,com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph__$1,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Pulling nested OR",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.conj.call(null,run_or__$1,node_id,node_id_SINGLEQUOTE_),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id_SINGLEQUOTE_,(1)])], null)),node_id_SINGLEQUOTE_),node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891),run_or__$1),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Pulled nodes",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.conj.call(null,run_or__$1,node_id),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-styles","com.wsscode.pathom3.connect.planner/highlight-styles",1086922280),cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,(1)])], null));
}),graph,nested_candidates);
});
com.wsscode.pathom3.connect.planner.optimize_OR_branches = (function com$wsscode$pathom3$connect$planner$optimize_OR_branches(graph,env,node_id){
return com.wsscode.pathom3.connect.planner.simplify_single_branch_node.call(null,com.wsscode.pathom3.connect.planner.optimize_siblings_with_same_branches.call(null,com.wsscode.pathom3.connect.planner.optimize_nested_OR.call(null,com.wsscode.pathom3.connect.planner.optimize_OR_sub_paths.call(null,com.wsscode.pathom3.connect.planner.optimize_branch_items.call(null,graph,env,node_id),env,node_id),env,node_id),env,node_id),env,node_id);
});
com.wsscode.pathom3.connect.planner.optimize_resolver_chain_QMARK_ = (function com$wsscode$pathom3$connect$planner$optimize_resolver_chain_QMARK_(graph,p__22334){
var map__22335 = p__22334;
var map__22335__$1 = cljs.core.__destructure_map.call(null,map__22335);
var op_name = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var run_next = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
return cljs.core._EQ_.call(null,op_name,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,run_next,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049)));
});
/**
 * Merge node and its run-next, when they are the same dynamic resolver.
 */
com.wsscode.pathom3.connect.planner.optimize_resolver_chain = (function com$wsscode$pathom3$connect$planner$optimize_resolver_chain(graph,env,node_id){
while(true){
var map__22336 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__22336__$1 = cljs.core.__destructure_map.call(null,map__22336);
var node = map__22336__$1;
var run_next = cljs.core.get.call(null,map__22336__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var next = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,run_next);
if(com.wsscode.pathom3.connect.planner.optimize_resolver_chain_QMARK_.call(null,graph,node)){
var G__22337 = com.wsscode.pathom3.connect.planner.remove_node.call(null,com.wsscode.pathom3.connect.planner.update_node.call(null,com.wsscode.pathom3.connect.planner.assoc_node.call(null,com.wsscode.pathom3.connect.planner.set_node_expects.call(null,com.wsscode.pathom3.connect.planner.set_node_run_next.call(null,com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Merge chained same dynamic resolvers.",new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([run_next,node_id])], null)),node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(next)),node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040).cljs$core$IFn$_invoke$arity$1(next)),node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548).cljs$core$IFn$_invoke$arity$1(next)),node_id,null,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","source-op-name","com.wsscode.pathom3.connect.planner/source-op-name",396914378)),run_next);
var G__22338 = env;
var G__22339 = node_id;
graph = G__22337;
env = G__22338;
node_id = G__22339;
continue;
} else {
return graph;
}
break;
}
});
com.wsscode.pathom3.connect.planner.optimize_resolver_node = (function com$wsscode$pathom3$connect$planner$optimize_resolver_node(graph,env,node_id){
var map__22340 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__22340__$1 = cljs.core.__destructure_map.call(null,map__22340);
var invalid_node_QMARK_ = cljs.core.get.call(null,map__22340__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","invalid-node?","com.wsscode.pathom3.connect.planner/invalid-node?",-2034679756));
if(cljs.core.truth_(invalid_node_QMARK_)){
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Removing node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_id)," because it doesn't fulfill the sub-query."].join(''),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([node_id])], null));

return com.wsscode.pathom3.connect.planner.remove_root_node_cluster.call(null,graph,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null));
} else {
return com.wsscode.pathom3.connect.planner.optimize_resolver_chain.call(null,graph,env,node_id);
}
});
com.wsscode.pathom3.connect.planner.optimize_node = (function com$wsscode$pathom3$connect$planner$optimize_node(graph,env,node_id){
while(true){
var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
if(cljs.core.truth_(temp__5821__auto__)){
var node = temp__5821__auto__;
com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Visit node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_id)].join(''),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","highlight-nodes","com.wsscode.pathom3.connect.planner/highlight-nodes",-1697917026),cljs.core.PersistentHashSet.createAsIfByAssoc([node_id])], null));

var G__22341 = com.wsscode.pathom3.connect.planner.node_kind.call(null,node);
var G__22341__$1 = (((G__22341 instanceof cljs.core.Keyword))?G__22341.fqn:null);
switch (G__22341__$1) {
case "com.wsscode.pathom3.connect.planner/node-resolver":
var graph_SINGLEQUOTE_ = com.wsscode.pathom3.connect.planner.optimize_resolver_node.call(null,graph,env,node_id);
var G__22343 = graph_SINGLEQUOTE_;
var G__22344 = env;
var G__22345 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph_SINGLEQUOTE_,node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
graph = G__22343;
env = G__22344;
node_id = G__22345;
continue;

break;
case "com.wsscode.pathom3.connect.planner/node-and":
var G__22346 = com.wsscode.pathom3.connect.planner.optimize_AND_branches.call(null,graph,env,node_id);
var G__22347 = env;
var G__22348 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(node);
graph = G__22346;
env = G__22347;
node_id = G__22348;
continue;

break;
case "com.wsscode.pathom3.connect.planner/node-or":
var G__22349 = com.wsscode.pathom3.connect.planner.optimize_OR_branches.call(null,graph,env,node_id);
var G__22350 = env;
var G__22351 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140).cljs$core$IFn$_invoke$arity$1(node);
graph = G__22349;
env = G__22350;
node_id = G__22351;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22341__$1)].join('')));

}
} else {
return graph;
}
break;
}
});
com.wsscode.pathom3.connect.planner.optimize_graph = (function com$wsscode$pathom3$connect$planner$optimize_graph(graph,env){
return com.wsscode.pathom3.connect.planner.optimize_node.call(null,com.wsscode.pathom3.connect.planner.add_snapshot_BANG_.call(null,graph,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"=== Optimize ==="], null)),env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","root","com.wsscode.pathom3.connect.planner/root",311111212).cljs$core$IFn$_invoke$arity$1(graph));
});
com.wsscode.pathom3.connect.planner.with_plan_cache = (function com$wsscode$pathom3$connect$planner$with_plan_cache(var_args){
var G__22353 = arguments.length;
switch (G__22353) {
case 1:
return com.wsscode.pathom3.connect.planner.with_plan_cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.connect.planner.with_plan_cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.planner.with_plan_cache.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.wsscode.pathom3.connect.planner.with_plan_cache.call(null,env,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
}));

(com.wsscode.pathom3.connect.planner.with_plan_cache.cljs$core$IFn$_invoke$arity$2 = (function (env,cache_STAR_){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","plan-cache*","com.wsscode.pathom3.connect.planner/plan-cache*",-982885642),cache_STAR_);
}));

(com.wsscode.pathom3.connect.planner.with_plan_cache.cljs$lang$maxFixedArity = 2);

/**
 * Run compute graph capturing snapshots, return the snapshots vector in the end.
 */
com.wsscode.pathom3.connect.planner.compute_plan_snapshots = (function com$wsscode$pathom3$connect$planner$compute_plan_snapshots(env){
var snapshots_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var graph = (function (){try{return com.wsscode.pathom3.connect.planner.compute_run_graph.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","plan-cache*","com.wsscode.pathom3.connect.planner/plan-cache*",-982885642)),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshots*","com.wsscode.pathom3.connect.planner/snapshots*",-1855095128),snapshots_STAR_));
}catch (e22355){var e = e22355;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),["Planning stopped due to an error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,e))].join(''),new cljs.core.Keyword(null,"error","error",-978969032),e], null);
}})();
return cljs.core.conj.call(null,cljs.core.deref.call(null,snapshots_STAR_),cljs.core.assoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","snapshot-message","com.wsscode.pathom3.connect.planner/snapshot-message",1408384173),"Complete graph."));
});

//# sourceMappingURL=planner.js.map
