// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.connect.runner');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.log');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.misc.refs');
goog.require('com.wsscode.misc.time');
goog.require('com.wsscode.pathom3.attribute');
goog.require('com.wsscode.pathom3.cache');
goog.require('com.wsscode.pathom3.connect.indexes');
goog.require('com.wsscode.pathom3.connect.operation');
goog.require('com.wsscode.pathom3.connect.operation.protocols');
goog.require('com.wsscode.pathom3.connect.planner');
goog.require('com.wsscode.pathom3.entity_tree');
goog.require('com.wsscode.pathom3.error');
goog.require('com.wsscode.pathom3.format.eql');
goog.require('com.wsscode.pathom3.format.shape_descriptor');
goog.require('com.wsscode.pathom3.path');
goog.require('com.wsscode.pathom3.placeholder');
goog.require('com.wsscode.pathom3.plugin');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attribute-errors","com.wsscode.pathom3.connect.runner/attribute-errors",723532527),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom3.attribute","attribute","com.wsscode.pathom3.attribute/attribute",1003469786),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__22452){
return cljs.core.map_QMARK_.call(null,G__22452);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attributes-missing","com.wsscode.pathom3.connect.runner/attributes-missing",-941012314),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","choose-path","com.wsscode.pathom3.connect.runner/choose-path",-251774625),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-error?","com.wsscode.pathom3.connect.runner/batch-error?",-244618920),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__22453){
return cljs.core.map_QMARK_.call(null,G__22453);
})], null),(function (G__22453){
return cljs.core.map_QMARK_.call(null,G__22453);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-waiting*","com.wsscode.pathom3.connect.runner/batch-waiting*",-950834195),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-duration-ms","com.wsscode.pathom3.connect.runner/batch-run-duration-ms",-591544025),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-duration-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-duration-ms",-404774312),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-start-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-start-ms",1143271592),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-finish-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-finish-ms",-1603607227),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-duration-ms","com.wsscode.pathom3.connect.runner/mutation-run-duration-ms",979834),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-start-ms","com.wsscode.pathom3.connect.runner/mutation-run-start-ms",2017573501),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-finish-ms","com.wsscode.pathom3.connect.runner/mutation-run-finish-ms",394220236),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","graph-run-duration-ms","com.wsscode.pathom3.connect.runner/graph-run-duration-ms",-1215124488),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","graph-run-start-ms","com.wsscode.pathom3.connect.runner/graph-run-start-ms",-954308936),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","graph-run-finish-ms","com.wsscode.pathom3.connect.runner/graph-run-finish-ms",-1109337048),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","merge-attribute","com.wsscode.pathom3.connect.runner/merge-attribute",-5247203),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-duration-ms","com.wsscode.pathom3.connect.runner/node-run-duration-ms",-1113275696),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-output","com.wsscode.pathom3.connect.runner/node-resolver-output",800199202),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats","com.wsscode.pathom3.connect.runner/node-run-stats",-2036346899),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","nodes-with-error","com.wsscode.pathom3.connect.runner/nodes-with-error",-1230963295),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id-set","com.wsscode.pathom3.connect.planner/node-id-set",146448050));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-cache*","com.wsscode.pathom3.connect.runner/resolver-cache*",334664084),new cljs.core.Symbol("com.wsscode.pathom3.cache","cache-store?","com.wsscode.pathom3.cache/cache-store?",273516461,null),com.wsscode.pathom3.cache.cache_store_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-duration-ms","com.wsscode.pathom3.connect.runner/resolver-run-duration-ms",-1533273691),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-start-ms","com.wsscode.pathom3.connect.runner/resolver-run-start-ms",213921287),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-finish-ms","com.wsscode.pathom3.connect.runner/resolver-run-finish-ms",375193860),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","omit-run-stats?","com.wsscode.pathom3.connect.runner/omit-run-stats?",2065057485),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","omit-run-stats-resolver-io?","com.wsscode.pathom3.connect.runner/omit-run-stats-resolver-io?",-1107914784),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","source-node-id","com.wsscode.pathom3.connect.runner/source-node-id",-124882568),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","taken-paths","com.wsscode.pathom3.connect.runner/taken-paths",-1349641664),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__22454){
return cljs.core.vector_QMARK_.call(null,G__22454);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","success-path","com.wsscode.pathom3.connect.runner/success-path",1003623091),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","root-query","com.wsscode.pathom3.connect.runner/root-query",1906324752),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","unsupported-batch?","com.wsscode.pathom3.connect.runner/unsupported-batch?",-826939500),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-batch-resolver-error","com.wsscode.pathom3.connect.runner/wrap-batch-resolver-error",176601916),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-merge-attribute","com.wsscode.pathom3.connect.runner/wrap-merge-attribute",-520029320),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutate","com.wsscode.pathom3.connect.runner/wrap-mutate",-1277033248),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-resolve","com.wsscode.pathom3.connect.runner/wrap-resolve",-1315168003),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-resolver-error","com.wsscode.pathom3.connect.runner/wrap-resolver-error",-1230614515),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutation-error","com.wsscode.pathom3.connect.runner/wrap-mutation-error",-1155458602),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-run-graph!","com.wsscode.pathom3.connect.runner/wrap-run-graph!",-170975775),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-entity-ready!","com.wsscode.pathom3.connect.runner/wrap-entity-ready!",-134020323),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","process-run-start-ms","com.wsscode.pathom3.connect.runner/process-run-start-ms",-360009927),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","process-run-finish-ms","com.wsscode.pathom3.connect.runner/process-run-finish-ms",-1288047429),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","process-run-duration-ms","com.wsscode.pathom3.connect.runner/process-run-duration-ms",2453785),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-return","com.wsscode.pathom3.connect.runner/node-run-return",-741031913),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__22455){
return cljs.core.map_QMARK_.call(null,G__22455);
})], null),(function (G__22455){
return cljs.core.map_QMARK_.call(null,G__22455);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743)], null)])),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-done?","com.wsscode.pathom3.connect.runner/node-done?",230375681),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
/**
 * Check if all requirements from the node are present in the current entity.
 */
com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_ = (function com$wsscode$pathom3$connect$runner$all_requires_ready_QMARK_(env,p__22457){
var map__22458 = p__22457;
var map__22458__$1 = cljs.core.__destructure_map.call(null,map__22458);
var expects = cljs.core.get.call(null,map__22458__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040));
var entity = com.wsscode.pathom3.entity_tree.entity.call(null,env);
return cljs.core.every_QMARK_.call(null,(function (p1__22456_SHARP_){
return cljs.core.contains_QMARK_.call(null,entity,p1__22456_SHARP_);
}),cljs.core.keys.call(null,expects));
});





com.wsscode.pathom3.connect.runner.union_key_on_data_QMARK_ = (function com$wsscode$pathom3$connect$runner$union_key_on_data_QMARK_(p__22459,m){
var map__22460 = p__22459;
var map__22460__$1 = cljs.core.__destructure_map.call(null,map__22460);
var union_key = cljs.core.get.call(null,map__22460__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
return cljs.core.contains_QMARK_.call(null,m,union_key);
});
com.wsscode.pathom3.connect.runner.process_map_subquery_data = (function com$wsscode$pathom3$connect$runner$process_map_subquery_data(ast,m){
var temp__5821__auto__ = com.wsscode.pathom3.format.eql.pick_union_entry.call(null,ast,m);
if(cljs.core.truth_(temp__5821__auto__)){
var map__22461 = temp__5821__auto__;
var map__22461__$1 = cljs.core.__destructure_map.call(null,map__22461);
var ast__$1 = map__22461__$1;
var union_key = cljs.core.get.call(null,map__22461__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var cache_tree_STAR_ = com.wsscode.pathom3.entity_tree.create_entity.call(null,(function (){var G__22462 = m;
if(cljs.core.truth_(union_key)){
return cljs.core.vary_meta.call(null,G__22462,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.format.eql","union-entry-key","com.wsscode.pathom3.format.eql/union-entry-key",1995121629),union_key);
} else {
return G__22462;
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast__$1,cache_tree_STAR_], null);
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.process_map_subquery = (function com$wsscode$pathom3$connect$runner$process_map_subquery(env,ast,m){
if(((cljs.core.map_QMARK_.call(null,m)) && (cljs.core.not.call(null,com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,m))))){
var temp__5821__auto__ = com.wsscode.pathom3.connect.runner.process_map_subquery_data.call(null,ast,m);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__22463 = temp__5821__auto__;
var ast__$1 = cljs.core.nth.call(null,vec__22463,(0),null);
var cache_tree_STAR_ = cljs.core.nth.call(null,vec__22463,(1),null);
return com.wsscode.pathom3.connect.runner.run_graph_BANG_.call(null,env,ast__$1,cache_tree_STAR_);
} else {
return null;
}
} else {
return m;
}
});
com.wsscode.pathom3.connect.runner.process_sequence_subquery = (function com$wsscode$pathom3$connect$runner$process_sequence_subquery(env,ast,s){
if(cljs.core.truth_(com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,s))){
return s;
} else {
return cljs.core.into.call(null,cljs.core.empty.call(null,s),cljs.core.keep_indexed.call(null,(function (p1__22466_SHARP_,p2__22467_SHARP_){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-process-sequence-item","com.wsscode.pathom3.connect.runner/wrap-process-sequence-item",-1746615799),com.wsscode.pathom3.connect.runner.process_map_subquery,com.wsscode.pathom3.path.append_path.call(null,env,p1__22466_SHARP_),ast,p2__22467_SHARP_);
})),(function (){var G__22468 = s;
if(com.wsscode.misc.coll.coll_append_at_head_QMARK_.call(null,s)){
return cljs.core.reverse.call(null,G__22468);
} else {
return G__22468;
}
})());
}
});
/**
 * Build a new map where the values are replaced with the map process of the subquery.
 */
com.wsscode.pathom3.connect.runner.process_map_container_subquery = (function com$wsscode$pathom3$connect$runner$process_map_container_subquery(env,ast,m){
if(cljs.core.truth_(com.wsscode.pathom3.connect.operation.final_value_QMARK_.call(null,m))){
return m;
} else {
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (x){
return com.wsscode.misc.coll.make_map_entry.call(null,cljs.core.key.call(null,x),com.wsscode.pathom3.connect.runner.process_map_subquery.call(null,com.wsscode.pathom3.path.append_path.call(null,env,cljs.core.key.call(null,x)),ast,cljs.core.val.call(null,x)));
})),m);
}
});
/**
 * Check if the map should be processed as a map-container, this means the sub-query
 *   should apply to the map values instead of the map itself.
 * 
 *   This can be dictated by adding the ::pcr/map-container? meta data on the value, or
 *   requested by the query as part of the param.
 */
com.wsscode.pathom3.connect.runner.process_map_container_QMARK_ = (function com$wsscode$pathom3$connect$runner$process_map_container_QMARK_(ast,v){
var or__5002__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast));
}
});
com.wsscode.pathom3.connect.runner.normalize_ast_recursive_query = (function com$wsscode$pathom3$connect$runner$normalize_ast_recursive_query(p__22469,graph,k){
var map__22470 = p__22469;
var map__22470__$1 = cljs.core.__destructure_map.call(null,map__22470);
var ast = map__22470__$1;
var query = cljs.core.get.call(null,map__22470__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var children = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query))?cljs.core.vec.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713).cljs$core$IFn$_invoke$arity$1(graph))):((cljs.core.pos_int_QMARK_.call(null,query))?cljs.core.vec.call(null,cljs.core.vals.call(null,cljs.core.update_in.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"query","query",-1288509510)], null),cljs.core.dec))):new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)
));
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),children);
});
/**
 * Get AST entry and pulls recursive query when needed.
 */
com.wsscode.pathom3.connect.runner.entry_ast = (function com$wsscode$pathom3$connect$runner$entry_ast(graph,k){
return com.wsscode.pathom3.connect.runner.normalize_ast_recursive_query.call(null,com.wsscode.pathom3.connect.planner.entry_ast.call(null,graph,k),graph,k);
});
com.wsscode.pathom3.connect.runner.fail_fast = (function com$wsscode$pathom3$connect$runner$fail_fast(p__22471,error){
var map__22472 = p__22471;
var map__22472__$1 = cljs.core.__destructure_map.call(null,map__22472);
var lenient_mode_QMARK_ = cljs.core.get.call(null,map__22472__$1,new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921));
if(cljs.core.not.call(null,lenient_mode_QMARK_)){
throw error;
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.process_attr_subquery_ast = (function com$wsscode$pathom3$connect$runner$process_attr_subquery_ast(graph,k){
if(cljs.core.map_QMARK_.call(null,k)){
return k;
} else {
return com.wsscode.pathom3.connect.runner.entry_ast.call(null,graph,k);
}
});
com.wsscode.pathom3.connect.runner.process_attr_subquery_key = (function com$wsscode$pathom3$connect$runner$process_attr_subquery_key(k){
if(cljs.core.map_QMARK_.call(null,k)){
return cljs.core.get.call(null,k,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return k;
}
});
com.wsscode.pathom3.connect.runner.process_attr_subquery = (function com$wsscode$pathom3$connect$runner$process_attr_subquery(p__22473,entity,k,v){
var map__22474 = p__22473;
var map__22474__$1 = cljs.core.__destructure_map.call(null,map__22474);
var env = map__22474__$1;
var graph = cljs.core.get.call(null,map__22474__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__22475 = com.wsscode.pathom3.connect.runner.process_attr_subquery_ast.call(null,graph,k);
var map__22475__$1 = cljs.core.__destructure_map.call(null,map__22475);
var ast = map__22475__$1;
var children = cljs.core.get.call(null,map__22475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var k__$1 = com.wsscode.pathom3.connect.runner.process_attr_subquery_key.call(null,k);
var env__$1 = com.wsscode.pathom3.path.append_path.call(null,env,k__$1);
if(cljs.core.truth_(children)){
if(cljs.core.map_QMARK_.call(null,v)){
if(cljs.core.truth_(com.wsscode.pathom3.connect.runner.process_map_container_QMARK_.call(null,ast,v))){
return com.wsscode.pathom3.connect.runner.process_map_container_subquery.call(null,env__$1,ast,v);
} else {
return com.wsscode.pathom3.connect.runner.process_map_subquery.call(null,env__$1,ast,v);
}
} else {
if(com.wsscode.misc.coll.collection_QMARK_.call(null,v)){
return com.wsscode.pathom3.connect.runner.process_sequence_subquery.call(null,(function (){var G__22476 = env__$1;
if((!(cljs.core.vector_QMARK_.call(null,v)))){
return cljs.core.assoc.call(null,G__22476,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","unsupported-batch?","com.wsscode.pathom3.connect.runner/unsupported-batch?",-826939500),true);
} else {
return G__22476;
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
com.wsscode.pathom3.connect.runner.merge_entity_data = (function com$wsscode$pathom3$connect$runner$merge_entity_data(env,entity,new_data){
return cljs.core.reduce_kv.call(null,(function (out,k,v){
if(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","unknown-value","com.wsscode.pathom3.connect.operation/unknown-value",1340287052))){
return out;
} else {
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-merge-attribute","com.wsscode.pathom3.connect.runner/wrap-merge-attribute",-520029320),(function com$wsscode$pathom3$connect$runner$merge_entity_data_$_merge_entity_data__internal(env__$1,m,k__$1,v__$1){
return cljs.core.assoc.call(null,m,k__$1,com.wsscode.pathom3.connect.runner.process_attr_subquery.call(null,env__$1,entity,k__$1,v__$1));
}),env,out,k,v);
}
}),entity,new_data);
});
/**
 * This function gets the map returned from the resolver and merge the data in the
 *   current cache-tree.
 */
com.wsscode.pathom3.connect.runner.merge_resolver_response_BANG_ = (function com$wsscode$pathom3$connect$runner$merge_resolver_response_BANG_(env,response){
if(cljs.core.map_QMARK_.call(null,response)){
com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,(function (p1__22477_SHARP_,p2__22478_SHARP_){
return com.wsscode.pathom3.connect.runner.merge_entity_data.call(null,env,p1__22477_SHARP_,p2__22478_SHARP_);
}),response);
} else {
}

return env;
});
/**
 * Process the idents from the Graph, this will add the ident data into the child.
 * 
 *   If there is ident data already, it gets merged with the ident value.
 */
com.wsscode.pathom3.connect.runner.process_idents_BANG_ = (function com$wsscode$pathom3$connect$runner$process_idents_BANG_(env,idents){
var seq__22479 = cljs.core.seq.call(null,idents);
var chunk__22480 = null;
var count__22481 = (0);
var i__22482 = (0);
while(true){
if((i__22482 < count__22481)){
var vec__22489 = cljs.core._nth.call(null,chunk__22480,i__22482);
var k = cljs.core.nth.call(null,vec__22489,(0),null);
var v = cljs.core.nth.call(null,vec__22489,(1),null);
var ident = vec__22489;
com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,((function (seq__22479,chunk__22480,count__22481,i__22482,vec__22489,k,v,ident){
return (function (entity){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-merge-attribute","com.wsscode.pathom3.connect.runner/wrap-merge-attribute",-520029320),((function (seq__22479,chunk__22480,count__22481,i__22482,vec__22489,k,v,ident){
return (function com$wsscode$pathom3$connect$runner$process_idents_BANG__$_process_idents_merge_attr__internal(env__$1,m,k__$1,v__$1){
return cljs.core.assoc.call(null,m,k__$1,com.wsscode.pathom3.connect.runner.process_attr_subquery.call(null,env__$1,cljs.core.PersistentArrayMap.EMPTY,k__$1,v__$1));
});})(seq__22479,chunk__22480,count__22481,i__22482,vec__22489,k,v,ident))
,env,entity,ident,cljs.core.assoc.call(null,cljs.core.get.call(null,entity,ident),k,v));
});})(seq__22479,chunk__22480,count__22481,i__22482,vec__22489,k,v,ident))
);


var G__22495 = seq__22479;
var G__22496 = chunk__22480;
var G__22497 = count__22481;
var G__22498 = (i__22482 + (1));
seq__22479 = G__22495;
chunk__22480 = G__22496;
count__22481 = G__22497;
i__22482 = G__22498;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__22479);
if(temp__5823__auto__){
var seq__22479__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22479__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22479__$1);
var G__22499 = cljs.core.chunk_rest.call(null,seq__22479__$1);
var G__22500 = c__5525__auto__;
var G__22501 = cljs.core.count.call(null,c__5525__auto__);
var G__22502 = (0);
seq__22479 = G__22499;
chunk__22480 = G__22500;
count__22481 = G__22501;
i__22482 = G__22502;
continue;
} else {
var vec__22492 = cljs.core.first.call(null,seq__22479__$1);
var k = cljs.core.nth.call(null,vec__22492,(0),null);
var v = cljs.core.nth.call(null,vec__22492,(1),null);
var ident = vec__22492;
com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,((function (seq__22479,chunk__22480,count__22481,i__22482,vec__22492,k,v,ident,seq__22479__$1,temp__5823__auto__){
return (function (entity){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-merge-attribute","com.wsscode.pathom3.connect.runner/wrap-merge-attribute",-520029320),((function (seq__22479,chunk__22480,count__22481,i__22482,vec__22492,k,v,ident,seq__22479__$1,temp__5823__auto__){
return (function com$wsscode$pathom3$connect$runner$process_idents_BANG__$_process_idents_merge_attr__internal(env__$1,m,k__$1,v__$1){
return cljs.core.assoc.call(null,m,k__$1,com.wsscode.pathom3.connect.runner.process_attr_subquery.call(null,env__$1,cljs.core.PersistentArrayMap.EMPTY,k__$1,v__$1));
});})(seq__22479,chunk__22480,count__22481,i__22482,vec__22492,k,v,ident,seq__22479__$1,temp__5823__auto__))
,env,entity,ident,cljs.core.assoc.call(null,cljs.core.get.call(null,entity,ident),k,v));
});})(seq__22479,chunk__22480,count__22481,i__22482,vec__22492,k,v,ident,seq__22479__$1,temp__5823__auto__))
);


var G__22503 = cljs.core.next.call(null,seq__22479__$1);
var G__22504 = null;
var G__22505 = (0);
var G__22506 = (0);
seq__22479 = G__22503;
chunk__22480 = G__22504;
count__22481 = G__22505;
i__22482 = G__22506;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Runs the next node associated with the node, in case it exists.
 */
com.wsscode.pathom3.connect.runner.run_next_node_BANG_ = (function com$wsscode$pathom3$connect$runner$run_next_node_BANG_(p__22507,p__22508){
var map__22509 = p__22507;
var map__22509__$1 = cljs.core.__destructure_map.call(null,map__22509);
var env = map__22509__$1;
var graph = cljs.core.get.call(null,map__22509__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__22510 = p__22508;
var map__22510__$1 = cljs.core.__destructure_map.call(null,map__22510);
var run_next = cljs.core.get.call(null,map__22510__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
if(cljs.core.truth_(run_next)){
return com.wsscode.pathom3.connect.runner.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,run_next));
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_ = (function com$wsscode$pathom3$connect$runner$merge_node_stats_BANG_(p__22511,p__22512,data){
var map__22513 = p__22511;
var map__22513__$1 = cljs.core.__destructure_map.call(null,map__22513);
var node_run_stats_STAR_ = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030));
var map__22514 = p__22512;
var map__22514__$1 = cljs.core.__destructure_map.call(null,map__22514);
var node_id = cljs.core.get.call(null,map__22514__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
if(cljs.core.truth_(node_run_stats_STAR_)){
return com.wsscode.misc.refs.gswap_BANG_.call(null,node_run_stats_STAR_,cljs.core.update,node_id,com.wsscode.misc.coll.merge_defaults,data);
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.resolver_already_ran_QMARK_ = (function com$wsscode$pathom3$connect$runner$resolver_already_ran_QMARK_(p__22515,p__22516){
var map__22517 = p__22515;
var map__22517__$1 = cljs.core.__destructure_map.call(null,map__22517);
var node_run_stats_STAR_ = cljs.core.get.call(null,map__22517__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030));
var map__22518 = p__22516;
var map__22518__$1 = cljs.core.__destructure_map.call(null,map__22518);
var node_id = cljs.core.get.call(null,map__22518__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var G__22519 = node_run_stats_STAR_;
var G__22519__$1 = (((G__22519 == null))?null:cljs.core.deref.call(null,G__22519));
var G__22519__$2 = (((G__22519__$1 == null))?null:cljs.core.get.call(null,G__22519__$1,node_id));
if((G__22519__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-done?","com.wsscode.pathom3.connect.runner/node-done?",230375681).cljs$core$IFn$_invoke$arity$1(G__22519__$2);
}
});
com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_ = (function com$wsscode$pathom3$connect$runner$merge_mutation_stats_BANG_(p__22520,p__22521,data){
var map__22522 = p__22520;
var map__22522__$1 = cljs.core.__destructure_map.call(null,map__22522);
var node_run_stats_STAR_ = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030));
var map__22523 = p__22521;
var map__22523__$1 = cljs.core.__destructure_map.call(null,map__22523);
var op_name = cljs.core.get.call(null,map__22523__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
if(cljs.core.truth_(node_run_stats_STAR_)){
return com.wsscode.misc.refs.gswap_BANG_.call(null,node_run_stats_STAR_,cljs.core.update,op_name,com.wsscode.misc.coll.merge_defaults,data);
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.mark_node_error = (function com$wsscode$pathom3$connect$runner$mark_node_error(p__22524,p__22525,error){
var map__22526 = p__22524;
var map__22526__$1 = cljs.core.__destructure_map.call(null,map__22526);
var env = map__22526__$1;
var node_run_stats_STAR_ = cljs.core.get.call(null,map__22526__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030));
var map__22527 = p__22525;
var map__22527__$1 = cljs.core.__destructure_map.call(null,map__22527);
var node_id = cljs.core.get.call(null,map__22527__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
if(cljs.core.truth_(node_run_stats_STAR_)){
var G__22528_22529 = node_run_stats_STAR_;
com.wsscode.misc.refs.gswap_BANG_.call(null,G__22528_22529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380)], null),com.wsscode.pathom3.error.datafy_processor_error.call(null,error));

com.wsscode.misc.refs.gswap_BANG_.call(null,G__22528_22529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-done?","com.wsscode.pathom3.connect.runner/node-done?",230375681)], null),true);

com.wsscode.misc.refs.gswap_BANG_.call(null,G__22528_22529,cljs.core.update,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","nodes-with-error","com.wsscode.pathom3.connect.runner/nodes-with-error",-1230963295),com.wsscode.misc.coll.sconj,node_id);

} else {
}

com.wsscode.pathom3.connect.runner.fail_fast.call(null,env,error);

return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380);
});
com.wsscode.pathom3.connect.runner.mark_node_error_with_plugins = (function com$wsscode$pathom3$connect$runner$mark_node_error_with_plugins(env,node,e){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-resolver-error","com.wsscode.pathom3.connect.runner/wrap-resolver-error",-1230614515),com.wsscode.pathom3.connect.runner.mark_node_error,env,node,e);
});
com.wsscode.pathom3.connect.runner.choose_cache_store = (function com$wsscode$pathom3$connect$runner$choose_cache_store(env,cache_store){
if(cljs.core.truth_(cache_store)){
if(cljs.core.contains_QMARK_.call(null,env,cache_store)){
return cache_store;
} else {
com.wsscode.log._STAR_active_logger_STAR_.call(null,com.wsscode.log.make_event.call(null,new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","event-attempt-use-undefined-cache-store","com.wsscode.pathom3.connect.runner/event-attempt-use-undefined-cache-store",1467123936),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377),cache_store], null)));

return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-cache*","com.wsscode.pathom3.connect.runner/resolver-cache*",334664084);
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-cache*","com.wsscode.pathom3.connect.runner/resolver-cache*",334664084);
}
});
com.wsscode.pathom3.connect.runner.report_resolver_io_stats = (function com$wsscode$pathom3$connect$runner$report_resolver_io_stats(p__22530,input_data,result){
var map__22531 = p__22530;
var map__22531__$1 = cljs.core.__destructure_map.call(null,map__22531);
var omit_run_stats_resolver_io_QMARK_ = cljs.core.get.call(null,map__22531__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","omit-run-stats-resolver-io?","com.wsscode.pathom3.connect.runner/omit-run-stats-resolver-io?",-1107914784));
if(cljs.core.truth_(omit_run_stats_resolver_io_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input-shape","com.wsscode.pathom3.connect.runner/node-resolver-input-shape",470286423),com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,input_data),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-output-shape","com.wsscode.pathom3.connect.runner/node-resolver-output-shape",1837913870),com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,result),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-done?","com.wsscode.pathom3.connect.runner/node-done?",230375681),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633),input_data,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-output","com.wsscode.pathom3.connect.runner/node-resolver-output",800199202),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743):result),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-done?","com.wsscode.pathom3.connect.runner/node-done?",230375681),true], null);
}
});
/**
 * Check if there is any pending batching in the sub-path of the current input.
 * 
 *   During the serial execution, a nested input process may be halted waiting to run
 *   after the all entities pass. In this case we need to also halt the execution to wait
 *   for that dependent input batch to run before moving on to process this node.
 */
com.wsscode.pathom3.connect.runner.missing_maybe_in_pending_batch_QMARK_ = (function com$wsscode$pathom3$connect$runner$missing_maybe_in_pending_batch_QMARK_(p__22533,input){
var map__22534 = p__22533;
var map__22534__$1 = cljs.core.__destructure_map.call(null,map__22534);
var env = map__22534__$1;
var path = cljs.core.get.call(null,map__22534__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
var nested_inputs = com.wsscode.misc.coll.filter_vals.call(null,cljs.core.seq,input);
if(cljs.core.seq.call(null,nested_inputs)){
return cljs.core.some.call(null,(function (path_SINGLEQUOTE_){
return cljs.core.contains_QMARK_.call(null,nested_inputs,cljs.core.first.call(null,path_SINGLEQUOTE_));
}),cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__22532_SHARP_){
return cljs.core.subvec.call(null,p1__22532_SHARP_,(function (){var x__5090__auto__ = cljs.core.count.call(null,p1__22532_SHARP_);
var y__5091__auto__ = cljs.core.count.call(null,path);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
}),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env))))));
} else {
return false;
}
});
com.wsscode.pathom3.connect.runner.wait_batch_response = (function com$wsscode$pathom3$connect$runner$wait_batch_response(env,node){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428),env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","nested-waiting?","com.wsscode.pathom3.connect.runner/nested-waiting?",820889396),true], null)], null);
});
com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins = (function com$wsscode$pathom3$connect$runner$invoke_resolver_with_plugins(resolver,env,input_data){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-resolve","com.wsscode.pathom3.connect.runner/wrap-resolve",-1315168003),(function (p1__22535_SHARP_,p2__22536_SHARP_){
return com.wsscode.pathom3.connect.operation.protocols._resolve.call(null,resolver,p1__22535_SHARP_,p2__22536_SHARP_);
}),env,input_data);
});
com.wsscode.pathom3.connect.runner.cache_key = (function com$wsscode$pathom3$connect$runner$cache_key(env,input_data,op_name,params){
var map__22537 = com.wsscode.pathom3.connect.indexes.resolver_config.call(null,env,op_name);
var map__22537__$1 = cljs.core.__destructure_map.call(null,map__22537);
var cache_key = cljs.core.get.call(null,map__22537__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-key","com.wsscode.pathom3.connect.operation/cache-key",1646000466));
if(cljs.core.truth_(cache_key)){
return cache_key.call(null,env,input_data);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_name,input_data,params], null);
}
});
com.wsscode.pathom3.connect.runner.invoke_resolver_cached = (function com$wsscode$pathom3$connect$runner$invoke_resolver_cached(env,cache_QMARK_,op_name,resolver,cache_store,input_data,params){
if(cljs.core.truth_(cache_QMARK_)){
return com.wsscode.pathom3.cache.cached.call(null,cache_store,env,com.wsscode.pathom3.connect.runner.cache_key.call(null,env,input_data,op_name,params),(function (){
return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,input_data);
}));
} else {
return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,input_data);
}
});
com.wsscode.pathom3.connect.runner.warn_batch_unsupported = (function com$wsscode$pathom3$connect$runner$warn_batch_unsupported(env,op_name){
return com.wsscode.log._STAR_active_logger_STAR_.call(null,com.wsscode.log.make_event.call(null,new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","event-batch-unsupported","com.wsscode.pathom3.connect.runner/event-batch-unsupported",1324438337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name], null)));
});
com.wsscode.pathom3.connect.runner.invoke_resolver_cached_batch = (function com$wsscode$pathom3$connect$runner$invoke_resolver_cached_batch(env,cache_QMARK_,op_name,resolver,cache_store,input_data,params){
com.wsscode.pathom3.connect.runner.warn_batch_unsupported.call(null,env,op_name);

if(cljs.core.truth_(cache_QMARK_)){
return com.wsscode.pathom3.cache.cached.call(null,cache_store,env,com.wsscode.pathom3.connect.runner.cache_key.call(null,env,input_data,op_name,params),(function (){
return cljs.core.first.call(null,com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_data], null)));
}));
} else {
return cljs.core.first.call(null,com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_data], null)));
}
});
com.wsscode.pathom3.connect.runner.batch_hold_token = (function com$wsscode$pathom3$connect$runner$batch_hold_token(env,cache_QMARK_,op_name,node,cache_store,input_data,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),cache_QMARK_,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377),cache_store,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210),params,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633),input_data,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428),env], null)], null);
});
com.wsscode.pathom3.connect.runner.valid_resolver_response_QMARK_ = (function com$wsscode$pathom3$connect$runner$valid_resolver_response_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) || ((x == null)));
});
com.wsscode.pathom3.connect.runner.special_resolver_signal_QMARK_ = (function com$wsscode$pathom3$connect$runner$special_resolver_signal_QMARK_(response){
return ((com.wsscode.misc.refs.kw_identical_QMARK_.call(null,response,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380))) || (((cljs.core.map_QMARK_.call(null,response)) && (cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743))))));
});
com.wsscode.pathom3.connect.runner.validate_response_BANG_ = (function com$wsscode$pathom3$connect$runner$validate_response_BANG_(env,p__22538,response){
var map__22539 = p__22538;
var map__22539__$1 = cljs.core.__destructure_map.call(null,map__22539);
var node = map__22539__$1;
var op_name = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
if(((com.wsscode.pathom3.connect.runner.special_resolver_signal_QMARK_.call(null,response)) || (com.wsscode.pathom3.connect.runner.valid_resolver_response_QMARK_.call(null,response)))){
return response;
} else {
return com.wsscode.pathom3.connect.runner.mark_node_error_with_plugins.call(null,env,node,cljs.core.ex_info.call(null,["Resolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_name)," returned an invalid response: ",cljs.core.pr_str.call(null,response)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","invalid-response","com.wsscode.pathom3.connect.runner/invalid-response",100376353),response], null)));
}
});
com.wsscode.pathom3.connect.runner.report_resolver_error = (function com$wsscode$pathom3$connect$runner$report_resolver_error(p__22540,p__22541,error){
var map__22542 = p__22540;
var map__22542__$1 = cljs.core.__destructure_map.call(null,map__22542);
var env = map__22542__$1;
var path = cljs.core.get.call(null,map__22542__$1,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558));
var lenient_mode_QMARK_ = cljs.core.get.call(null,map__22542__$1,new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921));
var map__22543 = p__22541;
var map__22543__$1 = cljs.core.__destructure_map.call(null,map__22543);
var node = map__22543__$1;
var op_name = cljs.core.get.call(null,map__22543__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
return com.wsscode.pathom3.connect.runner.mark_node_error_with_plugins.call(null,env,node,(cljs.core.truth_(lenient_mode_QMARK_)?error:cljs.core.ex_info.call(null,["Resolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_name)," exception",com.wsscode.pathom3.path.at_path_string.call(null,env),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error))].join(''),cljs.core.merge.call(null,cljs.core.ex_data.call(null,error),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),path], null)),error)));
});
com.wsscode.pathom3.connect.runner.enhance_dynamic_input = (function com$wsscode$pathom3$connect$runner$enhance_dynamic_input(p__22544,node,input_data){
var map__22545 = p__22544;
var map__22545__$1 = cljs.core.__destructure_map.call(null,map__22545);
var dynamic_resolver_QMARK_ = cljs.core.get.call(null,map__22545__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-resolver?","com.wsscode.pathom3.connect.operation/dynamic-resolver?",868139406));
if(cljs.core.truth_(dynamic_resolver_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633),input_data,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548).cljs$core$IFn$_invoke$arity$1(node)], null);
} else {
return input_data;
}
});
/**
 * Checks via stats if a node had failed inputs, or if wasn't invoked at all (which also indicates
 *   lack of inputs).
 */
com.wsscode.pathom3.connect.runner.node_failed_due_to_missing_inputs_QMARK_ = (function com$wsscode$pathom3$connect$runner$node_failed_due_to_missing_inputs_QMARK_(p__22546,p__22547){
var map__22548 = p__22546;
var map__22548__$1 = cljs.core.__destructure_map.call(null,map__22548);
var node_run_stats_STAR_ = cljs.core.get.call(null,map__22548__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030));
var map__22549 = p__22547;
var map__22549__$1 = cljs.core.__destructure_map.call(null,map__22549);
var node_id = cljs.core.get.call(null,map__22549__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
return ((cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,node_run_stats_STAR_),node_id),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-missing-required-inputs","com.wsscode.pathom3.connect.runner/node-missing-required-inputs",713513191))) || ((!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,node_run_stats_STAR_),node_id)))));
});
com.wsscode.pathom3.connect.runner.input_missing_error_message_leaf = (function com$wsscode$pathom3$connect$runner$input_missing_error_message_leaf(nodes,attr){
var resolvers = cljs.core.sort.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),nodes)));
if((cljs.core.count.call(null,resolvers) > (1))){
return ["- Attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," was expected to be returned from resolvers ",clojure.string.join.call(null,", ",resolvers)," but all of them failed to provide it."].join('');
} else {
return ["- Attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," was expected to be returned from resolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,nodes)))," but it failed to provide it."].join('');
}
});
com.wsscode.pathom3.connect.runner.input_missing_error_message = (function com$wsscode$pathom3$connect$runner$input_missing_error_message(env,node,attr){
if(com.wsscode.pathom3.connect.runner.node_failed_due_to_missing_inputs_QMARK_.call(null,env,node)){
return com.wsscode.pathom3.connect.runner.node_missing_input_error_details.call(null,env,node,attr);
} else {
return com.wsscode.pathom3.connect.runner.input_missing_error_message_leaf.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),attr);
}
});
com.wsscode.pathom3.connect.runner.input_missing_detail_branch_node = (function com$wsscode$pathom3$connect$runner$input_missing_detail_branch_node(p__22552,branch_node,attr){
var map__22553 = p__22552;
var map__22553__$1 = cljs.core.__destructure_map.call(null,map__22553);
var graph = cljs.core.get.call(null,map__22553__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var resolver_nodes = cljs.core.filter.call(null,(function (p1__22551_SHARP_){
var and__5000__auto__ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040).cljs$core$IFn$_invoke$arity$1(p1__22551_SHARP_),attr);
if(and__5000__auto__){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(p1__22551_SHARP_);
} else {
return and__5000__auto__;
}
}),cljs.core.map.call(null,(function (p1__22550_SHARP_){
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph,p1__22550_SHARP_);
}),com.wsscode.pathom3.connect.planner.node_successors.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707).cljs$core$IFn$_invoke$arity$1(branch_node))));
return com.wsscode.pathom3.connect.runner.input_missing_error_message_leaf.call(null,resolver_nodes,attr);
});
com.wsscode.pathom3.connect.runner.input_missing_detail = (function com$wsscode$pathom3$connect$runner$input_missing_detail(p__22556,node,attr){
var map__22557 = p__22556;
var map__22557__$1 = cljs.core.__destructure_map.call(null,map__22557);
var env = map__22557__$1;
var graph = cljs.core.get.call(null,map__22557__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var temp__5821__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__22555_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040).cljs$core$IFn$_invoke$arity$1(p1__22555_SHARP_),attr);
}),cljs.core.map.call(null,(function (p1__22554_SHARP_){
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph,p1__22554_SHARP_);
}),com.wsscode.pathom3.connect.planner.node_ancestors.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707).cljs$core$IFn$_invoke$arity$1(node)))));
if(cljs.core.truth_(temp__5821__auto__)){
var missed_parent_node = temp__5821__auto__;
if(com.wsscode.pathom3.connect.planner.branch_node_QMARK_.call(null,missed_parent_node)){
return com.wsscode.pathom3.connect.runner.input_missing_detail_branch_node.call(null,env,missed_parent_node,attr);
} else {
return com.wsscode.pathom3.connect.runner.input_missing_error_message.call(null,env,missed_parent_node,attr);
}
} else {
return ["Can't find parent node that should provide attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),", this is likely a bug in Pathom, please report it."].join('');
}
});
com.wsscode.pathom3.connect.runner.node_error_indent = (function com$wsscode$pathom3$connect$runner$node_error_indent(p__22558){
var map__22559 = p__22558;
var map__22559__$1 = cljs.core.__destructure_map.call(null,map__22559);
var node_error_indent_level = cljs.core.get.call(null,map__22559__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error-indent-level","com.wsscode.pathom3.connect.runner/node-error-indent-level",1039190651),(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,node_error_indent_level,"  "));
});
com.wsscode.pathom3.connect.runner.increase_error_indent = (function com$wsscode$pathom3$connect$runner$increase_error_indent(p__22560){
var map__22561 = p__22560;
var map__22561__$1 = cljs.core.__destructure_map.call(null,map__22561);
var env = map__22561__$1;
var node_error_indent_level = cljs.core.get.call(null,map__22561__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error-indent-level","com.wsscode.pathom3.connect.runner/node-error-indent-level",1039190651),(1));
return cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error-indent-level","com.wsscode.pathom3.connect.runner/node-error-indent-level",1039190651),(node_error_indent_level + (1)));
});
com.wsscode.pathom3.connect.runner.node_missing_input_error_details = (function com$wsscode$pathom3$connect$runner$node_missing_input_error_details(p__22563,p__22564,attr){
var map__22565 = p__22563;
var map__22565__$1 = cljs.core.__destructure_map.call(null,map__22565);
var env = map__22565__$1;
var node_run_stats_STAR_ = cljs.core.get.call(null,map__22565__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030));
var map__22566 = p__22564;
var map__22566__$1 = cljs.core.__destructure_map.call(null,map__22566);
var node = map__22566__$1;
var node_id = cljs.core.get.call(null,map__22566__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
var input = cljs.core.get.call(null,map__22566__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
var op_name = cljs.core.get.call(null,map__22566__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var missing = (function (){var or__5002__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,node_run_stats_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-missing-required-inputs","com.wsscode.pathom3.connect.runner/node-missing-required-inputs",713513191)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return com.wsscode.pathom3.format.shape_descriptor.missing_from_data.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env),input);
}
})();
return ["- Attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," was expected to be returned from resolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_name)," but inputs were missing:\n",clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__22562_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.runner.node_error_indent.call(null,env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.runner.input_missing_detail.call(null,com.wsscode.pathom3.connect.runner.increase_error_indent.call(null,env),node,p1__22562_SHARP_))].join('');
}),cljs.core.keys.call(null,missing)))].join('');
});
/**
 * This will verify if all dependencies required by a resolver are satisfied.
 * 
 *   One special case here might be a dependency from a batch process that's pending to run. In this case,
 *   we return a special block of data that tells Pathom to wait for the batch to run and try it again.
 */
com.wsscode.pathom3.connect.runner.input_missing_check = (function com$wsscode$pathom3$connect$runner$input_missing_check(env,node,entity,input,input_PLUS_opts){
var missing_all = com.wsscode.pathom3.format.shape_descriptor.missing_from_data.call(null,entity,input_PLUS_opts);
var wait_batch_QMARK_ = (function (){var and__5000__auto__ = missing_all;
if(cljs.core.truth_(and__5000__auto__)){
return com.wsscode.pathom3.connect.runner.missing_maybe_in_pending_batch_QMARK_.call(null,env,input_PLUS_opts);
} else {
return and__5000__auto__;
}
})();
var missing = (function (){var and__5000__auto__ = missing_all;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not.call(null,wait_batch_QMARK_);
if(and__5000__auto____$1){
return com.wsscode.pathom3.format.shape_descriptor.missing_from_data.call(null,entity,input);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(wait_batch_QMARK_)){
return com.wsscode.pathom3.connect.runner.wait_batch_response.call(null,env,node);
} else {
if(cljs.core.truth_(missing)){
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-missing-required-inputs","com.wsscode.pathom3.connect.runner/node-missing-required-inputs",713513191),missing], null));

return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380);
} else {
return null;
}
}
});
/**
 * Evaluates a resolver using node information.
 * 
 *   When this function runs the resolver, if filters the data to only include the keys
 *   mentioned by the resolver input. This is important to ensure that the resolver is
 *   not using some key that came accidentally due to execution order, that would lead to
 *   brittle executions.
 */
com.wsscode.pathom3.connect.runner.invoke_resolver_from_node = (function com$wsscode$pathom3$connect$runner$invoke_resolver_from_node(env,p__22567){
var map__22568 = p__22567;
var map__22568__$1 = cljs.core.__destructure_map.call(null,map__22568);
var node = map__22568__$1;
var op_name = cljs.core.get.call(null,map__22568__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var input = cljs.core.get.call(null,map__22568__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524));
var resolver = com.wsscode.pathom3.connect.indexes.resolver.call(null,env,op_name);
var map__22569 = com.wsscode.pathom3.connect.operation.operation_config.call(null,resolver);
var map__22569__$1 = cljs.core.__destructure_map.call(null,map__22569);
var r_config = map__22569__$1;
var op_name__$1 = cljs.core.get.call(null,map__22569__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var batch_QMARK_ = cljs.core.get.call(null,map__22569__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317));
var cache_QMARK_ = cljs.core.get.call(null,map__22569__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),true);
var cache_store = cljs.core.get.call(null,map__22569__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377));
var optionals = cljs.core.get.call(null,map__22569__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663));
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),node);
var entity = com.wsscode.pathom3.entity_tree.entity.call(null,env__$1);
var input_PLUS_opts = com.wsscode.pathom3.format.shape_descriptor.merge_shapes.call(null,input,optionals);
var input_data = com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.call(null,entity,input_PLUS_opts,input);
var input_data__$1 = com.wsscode.pathom3.connect.runner.enhance_dynamic_input.call(null,r_config,node,input_data);
var params = com.wsscode.pathom3.connect.operation.params.call(null,env__$1);
var cache_store__$1 = com.wsscode.pathom3.connect.runner.choose_cache_store.call(null,env__$1,cache_store);
var resolver_cache_STAR_ = cljs.core.get.call(null,env__$1,cache_store__$1);
var _ = com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-start-ms","com.wsscode.pathom3.connect.runner/resolver-run-start-ms",213921287),com.wsscode.misc.time.now_ms.call(null)], null));
var response = (function (){try{var missing_check = com.wsscode.pathom3.connect.runner.input_missing_check.call(null,env__$1,node,entity,input,input_PLUS_opts);
if(cljs.core.truth_(missing_check)){
return missing_check;
} else {
if(cljs.core.truth_(batch_QMARK_)){
var temp__5821__auto__ = com.wsscode.pathom3.cache.cache_find.call(null,resolver_cache_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_name__$1,input_data__$1,params], null));
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
return cljs.core.val.call(null,x);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","unsupported-batch?","com.wsscode.pathom3.connect.runner/unsupported-batch?",-826939500).cljs$core$IFn$_invoke$arity$1(env__$1))){
return com.wsscode.pathom3.connect.runner.invoke_resolver_cached_batch.call(null,env__$1,cache_QMARK_,op_name__$1,resolver,cache_store__$1,input_data__$1,params);
} else {
return com.wsscode.pathom3.connect.runner.batch_hold_token.call(null,env__$1,cache_QMARK_,op_name__$1,node,cache_store__$1,input_data__$1,params);
}
}
} else {
return com.wsscode.pathom3.connect.runner.invoke_resolver_cached.call(null,env__$1,cache_QMARK_,op_name__$1,resolver,cache_store__$1,input_data__$1,params);

}
}
}catch (e22570){var e = e22570;
return com.wsscode.pathom3.connect.runner.report_resolver_error.call(null,env__$1,node,e);
}})();
var finish = com.wsscode.misc.time.now_ms.call(null);
var response__$1 = com.wsscode.pathom3.connect.runner.validate_response_BANG_.call(null,env__$1,node,response);
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env__$1,node,(function (){var G__22571 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-run-finish-ms","com.wsscode.pathom3.connect.runner/resolver-run-finish-ms",375193860),finish], null);
if(cljs.core.not.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(response__$1))){
return cljs.core.merge.call(null,G__22571,com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env__$1,input_data__$1,response__$1));
} else {
return G__22571;
}
})());

return response__$1;
});
com.wsscode.pathom3.connect.runner.user_demand_completed_QMARK_ = (function com$wsscode$pathom3$connect$runner$user_demand_completed_QMARK_(env){
return cljs.core.empty_QMARK_.call(null,com.wsscode.pathom3.format.shape_descriptor.missing_from_data.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","user-request-shape","com.wsscode.pathom3.connect.planner/user-request-shape",-1740332989).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744).cljs$core$IFn$_invoke$arity$1(env))));
});
/**
 * This function evaluates the resolver associated with the node.
 * 
 *   First it checks if the expected results from the resolver are already available. In
 *   case they are, the resolver call is skipped.
 */
com.wsscode.pathom3.connect.runner.run_resolver_node_BANG_ = (function com$wsscode$pathom3$connect$runner$run_resolver_node_BANG_(env,node){
if(cljs.core.truth_((function (){var or__5002__auto__ = com.wsscode.pathom3.connect.runner.resolver_already_ran_QMARK_.call(null,env,node);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,node);
}
})())){
return com.wsscode.pathom3.connect.runner.run_next_node_BANG_.call(null,env,node);
} else {
var _ = com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null));
var map__22572 = com.wsscode.pathom3.connect.runner.invoke_resolver_from_node.call(null,env,node);
var map__22572__$1 = cljs.core.__destructure_map.call(null,map__22572);
var response = map__22572__$1;
var batch_hold = cljs.core.get.call(null,map__22572__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743));
if(cljs.core.truth_(batch_hold)){
return response;
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),response)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return com.wsscode.pathom3.connect.planner.node_optional_QMARK_.call(null,node);
}
})())){
com.wsscode.pathom3.connect.runner.merge_resolver_response_BANG_.call(null,env,response);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

if(cljs.core.not.call(null,(function (){var and__5000__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-resolution-checkpoint?","com.wsscode.pathom3.connect.planner/node-resolution-checkpoint?",1547353457).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__5000__auto__)){
return com.wsscode.pathom3.connect.runner.user_demand_completed_QMARK_.call(null,env);
} else {
return and__5000__auto__;
}
})())){
return com.wsscode.pathom3.connect.runner.run_next_node_BANG_.call(null,env,node);
} else {
return null;
}
} else {
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

return null;

}
}
}
});
/**
 * Starting from possible paths, find the nodes responsible for the attribute required by the
 *   OR node. Now compute the criteria from each node config it must result in a number. Keep only
 *   the nodes that have the highest criteria value.
 */
com.wsscode.pathom3.connect.runner.pick_node_highest = (function com$wsscode$pathom3$connect$runner$pick_node_highest(p__22575,or_node,node_ids,criteria){
var map__22576 = p__22575;
var map__22576__$1 = cljs.core.__destructure_map.call(null,map__22576);
var env = map__22576__$1;
var graph = cljs.core.get.call(null,map__22576__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var expects = cljs.core.keys.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040).cljs$core$IFn$_invoke$arity$1(or_node));
var nodes = (function (){var iter__5480__auto__ = (function com$wsscode$pathom3$connect$runner$pick_node_highest_$_iter__22577(s__22578){
return (new cljs.core.LazySeq(null,(function (){
var s__22578__$1 = s__22578;
while(true){
var temp__5823__auto__ = cljs.core.seq.call(null,s__22578__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var id = cljs.core.first.call(null,xs__6383__auto__);
var iterys__5476__auto__ = ((function (s__22578__$1,id,xs__6383__auto__,temp__5823__auto__,expects,map__22576,map__22576__$1,env,graph){
return (function com$wsscode$pathom3$connect$runner$pick_node_highest_$_iter__22577_$_iter__22579(s__22580){
return (new cljs.core.LazySeq(null,((function (s__22578__$1,id,xs__6383__auto__,temp__5823__auto__,expects,map__22576,map__22576__$1,env,graph){
return (function (){
var s__22580__$1 = s__22580;
while(true){
var temp__5823__auto____$1 = cljs.core.seq.call(null,s__22580__$1);
if(temp__5823__auto____$1){
var s__22580__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22580__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__22580__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__22582 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__22581 = (0);
while(true){
if((i__22581 < size__5479__auto__)){
var successor = cljs.core._nth.call(null,c__5478__auto__,i__22581);
var config = com.wsscode.pathom3.connect.planner.node_with_resolver_config.call(null,graph,env,successor);
var provides = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_((function (){var and__5000__auto__ = provides;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.every_QMARK_.call(null,provides,expects);
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__22582,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,config], null));

var G__22586 = (i__22581 + (1));
i__22581 = G__22586;
continue;
} else {
var G__22587 = (i__22581 + (1));
i__22581 = G__22587;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22582),com$wsscode$pathom3$connect$runner$pick_node_highest_$_iter__22577_$_iter__22579.call(null,cljs.core.chunk_rest.call(null,s__22580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22582),null);
}
} else {
var successor = cljs.core.first.call(null,s__22580__$2);
var config = com.wsscode.pathom3.connect.planner.node_with_resolver_config.call(null,graph,env,successor);
var provides = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_((function (){var and__5000__auto__ = provides;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.every_QMARK_.call(null,provides,expects);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,config], null),com$wsscode$pathom3$connect$runner$pick_node_highest_$_iter__22577_$_iter__22579.call(null,cljs.core.rest.call(null,s__22580__$2)));
} else {
var G__22588 = cljs.core.rest.call(null,s__22580__$2);
s__22580__$1 = G__22588;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__22578__$1,id,xs__6383__auto__,temp__5823__auto__,expects,map__22576,map__22576__$1,env,graph))
,null,null));
});})(s__22578__$1,id,xs__6383__auto__,temp__5823__auto__,expects,map__22576,map__22576__$1,env,graph))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,com.wsscode.pathom3.connect.planner.node_successors.call(null,graph,id)));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,com$wsscode$pathom3$connect$runner$pick_node_highest_$_iter__22577.call(null,cljs.core.rest.call(null,s__22578__$1)));
} else {
var G__22589 = cljs.core.rest.call(null,s__22578__$1);
s__22578__$1 = G__22589;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,node_ids);
})();
if(cljs.core.seq.call(null,nodes)){
var vec__22583 = cljs.core.apply.call(null,cljs.core.max_key,(function (p1__22573_SHARP_){
return criteria.call(null,cljs.core.second.call(null,p1__22573_SHARP_));
}),nodes);
var id = cljs.core.nth.call(null,vec__22583,(0),null);
var config = cljs.core.nth.call(null,vec__22583,(1),null);
if(cljs.core.truth_(id)){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__22574_SHARP_){
return cljs.core._EQ_.call(null,criteria.call(null,config),criteria.call(null,cljs.core.second.call(null,p1__22574_SHARP_)));
})),cljs.core.map.call(null,cljs.core.first)),nodes);
} else {
return node_ids;
}
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
/**
 * Find the node path with the highest priority to run. Returns a set of the candidates
 *   with the same priority level.
 */
com.wsscode.pathom3.connect.runner.priority_sort = (function com$wsscode$pathom3$connect$runner$priority_sort(env,or_node,node_ids){
return com.wsscode.pathom3.connect.runner.pick_node_highest.call(null,env,or_node,node_ids,(function (p1__22590_SHARP_){
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543).cljs$core$IFn$_invoke$arity$2(p1__22590_SHARP_,(0));
}));
});
/**
 * Find the nodes with highest input size and removes any node with sizes smaller than it.
 */
com.wsscode.pathom3.connect.runner.input_size_sort = (function com$wsscode$pathom3$connect$runner$input_size_sort(env,or_node,node_ids){
var available = com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor_shallow.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env));
return com.wsscode.pathom3.connect.runner.pick_node_highest.call(null,env,or_node,node_ids,(function (p1__22591_SHARP_){
return cljs.core.count.call(null,com.wsscode.pathom3.format.shape_descriptor.intersection.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","input","com.wsscode.pathom3.connect.planner/input",1912157524).cljs$core$IFn$_invoke$arity$1(p1__22591_SHARP_),available));
}));
});
/**
 * Sums up the weight of a node and its successors
 */
com.wsscode.pathom3.connect.runner.node_weight = (function com$wsscode$pathom3$connect$runner$node_weight(p__22594,node_id){
var map__22595 = p__22594;
var map__22595__$1 = cljs.core.__destructure_map.call(null,map__22595);
var env = map__22595__$1;
var graph = cljs.core.get.call(null,map__22595__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var resolver_weights_STAR_ = cljs.core.get.call(null,map__22595__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-weights*","com.wsscode.pathom3.connect.runner/resolver-weights*",1736308320));
var map__22596 = com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id);
var map__22596__$1 = cljs.core.__destructure_map.call(null,map__22596);
var node = map__22596__$1;
var run_next = cljs.core.get.call(null,map__22596__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-next","com.wsscode.pathom3.connect.planner/run-next",285457140));
var G__22597 = (function (){var G__22598 = com.wsscode.pathom3.connect.planner.node_kind.call(null,node);
var G__22598__$1 = (((G__22598 instanceof cljs.core.Keyword))?G__22598.fqn:null);
switch (G__22598__$1) {
case "com.wsscode.pathom3.connect.planner/node-and":
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22592_SHARP_){
return com.wsscode.pathom3.connect.runner.node_weight.call(null,env,p1__22592_SHARP_);
})),cljs.core._PLUS_,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884).cljs$core$IFn$_invoke$arity$1(node));

break;
case "com.wsscode.pathom3.connect.planner/node-or":
return cljs.core.apply.call(null,cljs.core.min,cljs.core.mapv.call(null,(function (p1__22593_SHARP_){
return com.wsscode.pathom3.connect.runner.node_weight.call(null,env,p1__22593_SHARP_);
}),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891).cljs$core$IFn$_invoke$arity$1(node)));

break;
case "com.wsscode.pathom3.connect.planner/node-resolver":
return cljs.core.get.call(null,cljs.core.deref.call(null,resolver_weights_STAR_),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(node),(1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22598__$1)].join('')));

}
})();
if(cljs.core.truth_(run_next)){
return (G__22597 + com.wsscode.pathom3.connect.runner.node_weight.call(null,env,run_next));
} else {
return G__22597;
}
});
/**
 * Sorts nodes based on the weight of their paths. The weight is calculated every time
 *   a resolver runs.
 */
com.wsscode.pathom3.connect.runner.weight_sort = (function com$wsscode$pathom3$connect$runner$weight_sort(p__22601,_or_node,candidates){
var map__22602 = p__22601;
var map__22602__$1 = cljs.core.__destructure_map.call(null,map__22602);
var env = map__22602__$1;
var resolver_weights_STAR_ = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-weights*","com.wsscode.pathom3.connect.runner/resolver-weights*",1736308320));
if(cljs.core.truth_(resolver_weights_STAR_)){
return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__22600_SHARP_){
return com.wsscode.pathom3.connect.runner.node_weight.call(null,env,p1__22600_SHARP_);
}),candidates);
} else {
return cljs.core.first.call(null,candidates);
}
});
com.wsscode.pathom3.connect.runner.default_choose_path = (function com$wsscode$pathom3$connect$runner$default_choose_path(env,or_node,node_ids){
var candidates = com.wsscode.pathom3.connect.runner.input_size_sort.call(null,env,or_node,com.wsscode.pathom3.connect.runner.priority_sort.call(null,env,or_node,node_ids));
var cc = cljs.core.count.call(null,candidates);
if((cc > (1))){
return com.wsscode.pathom3.connect.runner.weight_sort.call(null,env,or_node,candidates);
} else {
if(cljs.core._EQ_.call(null,cc,(1))){
return cljs.core.first.call(null,candidates);
} else {
return cljs.core.first.call(null,node_ids);

}
}
});
com.wsscode.pathom3.connect.runner.add_taken_path_BANG_ = (function com$wsscode$pathom3$connect$runner$add_taken_path_BANG_(p__22603,p__22604,taken_path_id){
var map__22605 = p__22603;
var map__22605__$1 = cljs.core.__destructure_map.call(null,map__22605);
var node_run_stats_STAR_ = cljs.core.get.call(null,map__22605__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030));
var map__22606 = p__22604;
var map__22606__$1 = cljs.core.__destructure_map.call(null,map__22606);
var node_id = cljs.core.get.call(null,map__22606__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node-id","com.wsscode.pathom3.connect.planner/node-id",1696523707));
return com.wsscode.misc.refs.gswap_BANG_.call(null,node_run_stats_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","taken-paths","com.wsscode.pathom3.connect.runner/taken-paths",-1349641664)], null),com.wsscode.misc.coll.vconj,taken_path_id);
});
com.wsscode.pathom3.connect.runner.or_error_exception = (function com$wsscode$pathom3$connect$runner$or_error_exception(or_node,errors){
return cljs.core.ex_info.call(null,["All paths from an OR node failed. Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040).cljs$core$IFn$_invoke$arity$1(or_node)),"\n",clojure.string.join.call(null,"\n",cljs.core.mapv.call(null,cljs.core.ex_message,errors))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null));
});
com.wsscode.pathom3.connect.runner.handle_or_error = (function com$wsscode$pathom3$connect$runner$handle_or_error(env,or_node,res){
var error = com.wsscode.pathom3.connect.runner.or_error_exception.call(null,or_node,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(res));
com.wsscode.pathom3.connect.runner.mark_node_error_with_plugins.call(null,env,or_node,error);

return com.wsscode.pathom3.connect.runner.fail_fast.call(null,env,error);
});
com.wsscode.pathom3.connect.runner.or_expected_optional_QMARK_ = (function com$wsscode$pathom3$connect$runner$or_expected_optional_QMARK_(p__22607,or_node){
var map__22608 = p__22607;
var map__22608__$1 = cljs.core.__destructure_map.call(null,map__22608);
var graph = cljs.core.get.call(null,map__22608__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var attr = cljs.core.ffirst.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","expects","com.wsscode.pathom3.connect.planner/expects",2018136040).cljs$core$IFn$_invoke$arity$1(or_node));
return com.wsscode.pathom3.connect.planner.attr_optional_QMARK_.call(null,graph,attr);
});
com.wsscode.pathom3.connect.runner.run_or_node_BANG_ = (function com$wsscode$pathom3$connect$runner$run_or_node_BANG_(p__22609,p__22610){
var map__22611 = p__22609;
var map__22611__$1 = cljs.core.__destructure_map.call(null,map__22611);
var env = map__22611__$1;
var graph = cljs.core.get.call(null,map__22611__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var choose_path = cljs.core.get.call(null,map__22611__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","choose-path","com.wsscode.pathom3.connect.runner/choose-path",-251774625),com.wsscode.pathom3.connect.runner.default_choose_path);
var map__22612 = p__22610;
var map__22612__$1 = cljs.core.__destructure_map.call(null,map__22612);
var or_node = map__22612__$1;
var run_or = cljs.core.get.call(null,map__22612__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-or","com.wsscode.pathom3.connect.planner/run-or",-672801891));
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null));

var res = (((!(com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,or_node))))?(function (){var nodes = run_or;
var errors = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,nodes)){
var picked_node_id = choose_path.call(null,env,or_node,nodes);
var node_id = ((cljs.core.contains_QMARK_.call(null,nodes,picked_node_id))?picked_node_id:(function (){var actual_node = cljs.core.first.call(null,nodes);
com.wsscode.log._STAR_active_logger_STAR_.call(null,com.wsscode.log.make_event.call(null,new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","event-invalid-chosen-path","com.wsscode.pathom3.connect.runner/event-invalid-chosen-path",646160441),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expected-one-of","expected-one-of",2046658893),nodes,new cljs.core.Keyword(null,"chosen-attempt","chosen-attempt",-1651171103),picked_node_id,new cljs.core.Keyword(null,"actual-used","actual-used",-2136040608),actual_node], null)));

return actual_node;
})());
com.wsscode.pathom3.connect.runner.add_taken_path_BANG_.call(null,env,or_node,node_id);

var res = (function (){try{return com.wsscode.pathom3.connect.runner.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id));
}catch (e22614){var e = e22614;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709),e], null);
}})();
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(res))){
return res;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(res))){
var G__22615 = cljs.core.disj.call(null,nodes,node_id);
var G__22616 = cljs.core.conj.call(null,errors,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(res));
nodes = G__22615;
errors = G__22616;
continue;
} else {
if(com.wsscode.pathom3.connect.runner.all_requires_ready_QMARK_.call(null,env,or_node)){
return com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","success-path","com.wsscode.pathom3.connect.runner/success-path",1003623091),node_id], null));
} else {
var G__22617 = cljs.core.disj.call(null,nodes,node_id);
var G__22618 = errors;
nodes = G__22617;
errors = G__22618;
continue;
}

}
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709),errors], null);
}
break;
}
})():null);
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(res))){
return res;
} else {
if(((cljs.core.seq.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","or-option-error","com.wsscode.pathom3.connect.runner/or-option-error",442757709).cljs$core$IFn$_invoke$arity$1(res))) && (cljs.core.not.call(null,com.wsscode.pathom3.connect.runner.or_expected_optional_QMARK_.call(null,env,or_node))))){
return com.wsscode.pathom3.connect.runner.handle_or_error.call(null,env,or_node,res);
} else {
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,or_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

return com.wsscode.pathom3.connect.runner.run_next_node_BANG_.call(null,env,or_node);

}
}
});
/**
 * Given an AND node, runs every attached node, then runs the attached next.
 */
com.wsscode.pathom3.connect.runner.run_and_node_BANG_ = (function com$wsscode$pathom3$connect$runner$run_and_node_BANG_(p__22619,p__22620){
var map__22621 = p__22619;
var map__22621__$1 = cljs.core.__destructure_map.call(null,map__22621);
var env = map__22621__$1;
var graph = cljs.core.get.call(null,map__22621__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__22622 = p__22620;
var map__22622__$1 = cljs.core.__destructure_map.call(null,map__22622);
var and_node = map__22622__$1;
var run_and = cljs.core.get.call(null,map__22622__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","run-and","com.wsscode.pathom3.connect.planner/run-and",-1356844884));
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,and_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),com.wsscode.misc.time.now_ms.call(null)], null));

var res = cljs.core.reduce.call(null,(function (_,node_id){
var node_res = com.wsscode.pathom3.connect.runner.run_node_BANG_.call(null,env,com.wsscode.pathom3.connect.planner.get_node.call(null,graph,node_id));
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(node_res))){
return cljs.core.reduced.call(null,node_res);
} else {
return null;
}
}),null,run_and);
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743).cljs$core$IFn$_invoke$arity$1(res))){
return res;
} else {
com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env,and_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

return com.wsscode.pathom3.connect.runner.run_next_node_BANG_.call(null,env,and_node);
}
});
/**
 * Run a node from the compute graph. This will start the processing on the sent node
 *   and them will run everything that's connected to this node as sequences of it.
 * 
 *   The result is going to build up at ::p.ent/cache-tree*, after the run is concluded
 *   the output will be there.
 */
com.wsscode.pathom3.connect.runner.run_node_BANG_ = (function com$wsscode$pathom3$connect$runner$run_node_BANG_(env,node){
var G__22623 = com.wsscode.pathom3.connect.planner.node_kind.call(null,node);
var G__22623__$1 = (((G__22623 instanceof cljs.core.Keyword))?G__22623.fqn:null);
switch (G__22623__$1) {
case "com.wsscode.pathom3.connect.planner/node-resolver":
return com.wsscode.pathom3.connect.runner.run_resolver_node_BANG_.call(null,env,node);

break;
case "com.wsscode.pathom3.connect.planner/node-and":
return com.wsscode.pathom3.connect.runner.run_and_node_BANG_.call(null,env,node);

break;
case "com.wsscode.pathom3.connect.planner/node-or":
return com.wsscode.pathom3.connect.runner.run_or_node_BANG_.call(null,env,node);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22623__$1)].join('')));

}
});
/**
 * Create an entity to process the placeholder demands.
 */
com.wsscode.pathom3.connect.runner.placeholder_merge_entity_STAR_ = (function com$wsscode$pathom3$connect$runner$placeholder_merge_entity_STAR_(p__22625){
var map__22626 = p__22625;
var map__22626__$1 = cljs.core.__destructure_map.call(null,map__22626);
var env = map__22626__$1;
var graph = cljs.core.get.call(null,map__22626__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var source_entity = cljs.core.get.call(null,map__22626__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","source-entity","com.wsscode.pathom3.connect.runner/source-entity",1992877853));
var current_entity = com.wsscode.pathom3.entity_tree.entity.call(null,env);
var index_ast = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-ast","com.wsscode.pathom3.connect.planner/index-ast",905845713).cljs$core$IFn$_invoke$arity$1(graph);
return cljs.core.reduce.call(null,(function (out,ph){
return cljs.core.assoc.call(null,out,ph,(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholder-use-source-entity?","com.wsscode.pathom3.connect.planner/placeholder-use-source-entity?",1542269498).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,index_ast,ph)))?source_entity:current_entity));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholders","com.wsscode.pathom3.connect.planner/placeholders",-1690563362).cljs$core$IFn$_invoke$arity$1(graph));
});
/**
 * Create an entity to process the placeholder demands.
 */
com.wsscode.pathom3.connect.runner.placeholder_merge_entity = (function com$wsscode$pathom3$connect$runner$placeholder_merge_entity(env){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-placeholder-merge-entity","com.wsscode.pathom3.connect.runner/wrap-placeholder-merge-entity",-406595922),com.wsscode.pathom3.connect.runner.placeholder_merge_entity_STAR_,env);
});
com.wsscode.pathom3.connect.runner.run_foreign_mutation = (function com$wsscode$pathom3$connect$runner$run_foreign_mutation(env,p__22627){
var map__22628 = p__22627;
var map__22628__$1 = cljs.core.__destructure_map.call(null,map__22628);
var ast = map__22628__$1;
var key = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var ast__$1 = (function (){var G__22631 = ast;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.dissoc.call(null,G__22631,new cljs.core.Keyword(null,"children","children",-940561982));
} else {
return G__22631;
}
})();
var mutation = com.wsscode.pathom3.connect.indexes.mutation.call(null,env,key);
var map__22629 = com.wsscode.pathom3.connect.operation.operation_config.call(null,mutation);
var map__22629__$1 = cljs.core.__destructure_map.call(null,map__22629);
var dynamic_name = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238));
var foreign = com.wsscode.pathom3.connect.indexes.resolver.call(null,env,dynamic_name);
var map__22630 = com.wsscode.pathom3.connect.operation.operation_config.call(null,foreign);
var map__22630__$1 = cljs.core.__destructure_map.call(null,map__22630);
var batch_QMARK_ = cljs.core.get.call(null,map__22630__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317));
var ast__$2 = com.wsscode.pathom3.connect.planner.promote_foreign_ast_children.call(null,ast__$1);
return cljs.core.get.call(null,com.wsscode.pathom3.connect.operation.protocols._resolve.call(null,foreign,env,(function (){var G__22632 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","foreign-ast","com.wsscode.pathom3.connect.planner/foreign-ast",1579399548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast__$2], null)], null)], null);
if(cljs.core.truth_(batch_QMARK_)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__22632],null));
} else {
return G__22632;
}
})()),key);
});
com.wsscode.pathom3.connect.runner.invoke_not_found_mutation_BANG_ = (function com$wsscode$pathom3$connect$runner$invoke_not_found_mutation_BANG_(env,ast,key){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutate","com.wsscode.pathom3.connect.runner/wrap-mutate",-1277033248),(function (_,___$1){
throw cljs.core.ex_info.call(null,["Mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," not found"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null));
}),env,ast);
});
/**
 * Run mutation from AST.
 */
com.wsscode.pathom3.connect.runner.invoke_mutation_BANG_ = (function com$wsscode$pathom3$connect$runner$invoke_mutation_BANG_(env,p__22635){
var map__22636 = p__22635;
var map__22636__$1 = cljs.core.__destructure_map.call(null,map__22636);
var ast = map__22636__$1;
var key = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var mutation = com.wsscode.pathom3.connect.indexes.mutation.call(null,env,key);
var start = com.wsscode.misc.time.now_ms.call(null);
var _ = com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-start-ms","com.wsscode.pathom3.connect.runner/node-run-start-ms",-2130582528),start,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-start-ms","com.wsscode.pathom3.connect.runner/mutation-run-start-ms",2017573501),start], null));
var result = (function (){try{if(cljs.core.truth_(mutation)){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.operation_config.call(null,mutation)))){
return com.wsscode.pathom3.connect.runner.run_foreign_mutation.call(null,env,ast);
} else {
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutate","com.wsscode.pathom3.connect.runner/wrap-mutate",-1277033248),(function (p1__22633_SHARP_,p2__22634_SHARP_){
return com.wsscode.pathom3.connect.operation.protocols._mutate.call(null,mutation,p1__22633_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p2__22634_SHARP_));
}),env,ast);
}
} else {
return com.wsscode.pathom3.connect.runner.invoke_not_found_mutation_BANG_.call(null,env,ast,key);
}
}catch (e22637){var e = e22637;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468),com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-mutation-error","com.wsscode.pathom3.connect.runner/wrap-mutation-error",-1155458602),(function (env__$1,_ast,e__$1){
com.wsscode.pathom3.connect.runner.fail_fast.call(null,env__$1,e__$1);

return e__$1;
}),env,ast,e)], null);
}})();
com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-run-finish-ms","com.wsscode.pathom3.connect.runner/mutation-run-finish-ms",394220236),com.wsscode.misc.time.now_ms.call(null)], null));

if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","mutation-error","com.wsscode.pathom3.connect.runner/mutation-error",1516517468).cljs$core$IFn$_invoke$arity$1(result))){
com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,cljs.core.assoc,key,result);
} else {
com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,cljs.core.assoc,key,com.wsscode.pathom3.connect.runner.process_attr_subquery.call(null,env,cljs.core.PersistentArrayMap.EMPTY,ast,result));
}

return com.wsscode.pathom3.connect.runner.merge_mutation_stats_BANG_.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));
});
/**
 * Runs the mutations gathered by the planner.
 */
com.wsscode.pathom3.connect.runner.process_mutations_BANG_ = (function com$wsscode$pathom3$connect$runner$process_mutations_BANG_(p__22638){
var map__22639 = p__22638;
var map__22639__$1 = cljs.core.__destructure_map.call(null,map__22639);
var env = map__22639__$1;
var graph = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var seq__22640 = cljs.core.seq.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","mutations","com.wsscode.pathom3.connect.planner/mutations",-1571107042).cljs$core$IFn$_invoke$arity$1(graph));
var chunk__22641 = null;
var count__22642 = (0);
var i__22643 = (0);
while(true){
if((i__22643 < count__22642)){
var ast = cljs.core._nth.call(null,chunk__22641,i__22643);
com.wsscode.pathom3.connect.runner.invoke_mutation_BANG_.call(null,env,ast);


var G__22644 = seq__22640;
var G__22645 = chunk__22641;
var G__22646 = count__22642;
var G__22647 = (i__22643 + (1));
seq__22640 = G__22644;
chunk__22641 = G__22645;
count__22642 = G__22646;
i__22643 = G__22647;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__22640);
if(temp__5823__auto__){
var seq__22640__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22640__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22640__$1);
var G__22648 = cljs.core.chunk_rest.call(null,seq__22640__$1);
var G__22649 = c__5525__auto__;
var G__22650 = cljs.core.count.call(null,c__5525__auto__);
var G__22651 = (0);
seq__22640 = G__22648;
chunk__22641 = G__22649;
count__22642 = G__22650;
i__22643 = G__22651;
continue;
} else {
var ast = cljs.core.first.call(null,seq__22640__$1);
com.wsscode.pathom3.connect.runner.invoke_mutation_BANG_.call(null,env,ast);


var G__22652 = cljs.core.next.call(null,seq__22640__$1);
var G__22653 = null;
var G__22654 = (0);
var G__22655 = (0);
seq__22640 = G__22652;
chunk__22641 = G__22653;
count__22642 = G__22654;
i__22643 = G__22655;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom3.connect.runner.entity_missing_attribute_details = (function com$wsscode$pathom3$connect$runner$entity_missing_attribute_details(p__22659,attr){
var map__22660 = p__22659;
var map__22660__$1 = cljs.core.__destructure_map.call(null,map__22660);
var env = map__22660__$1;
var graph = cljs.core.get.call(null,map__22660__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var map__22661 = cljs.core.group_by.call(null,(function (p1__22657_SHARP_){
return com.wsscode.pathom3.connect.runner.node_failed_due_to_missing_inputs_QMARK_.call(null,env,p1__22657_SHARP_);
}),cljs.core.map.call(null,(function (p1__22656_SHARP_){
return com.wsscode.pathom3.connect.planner.get_node.call(null,graph,p1__22656_SHARP_);
}),cljs.core.get_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","index-attrs","com.wsscode.pathom3.connect.planner/index-attrs",-2110590142),attr], null))));
var map__22661__$1 = cljs.core.__destructure_map.call(null,map__22661);
var nodes_missing_inputs = cljs.core.get.call(null,map__22661__$1,true);
var nodes_missing_attribute_in_response = cljs.core.get.call(null,map__22661__$1,false);
return clojure.string.join.call(null,"\n",(function (){var G__22662 = cljs.core.PersistentVector.EMPTY;
var G__22662__$1 = ((cljs.core.seq.call(null,nodes_missing_attribute_in_response))?cljs.core.conj.call(null,G__22662,com.wsscode.pathom3.connect.runner.input_missing_error_message_leaf.call(null,nodes_missing_attribute_in_response,attr)):G__22662);
if(cljs.core.seq.call(null,nodes_missing_inputs)){
return cljs.core.into.call(null,G__22662__$1,cljs.core.map.call(null,(function (p1__22658_SHARP_){
return com.wsscode.pathom3.connect.runner.node_missing_input_error_details.call(null,env,p1__22658_SHARP_,attr);
})),nodes_missing_inputs);
} else {
return G__22662__$1;
}
})());
});
/**
 * Verify if entity contains all required keys from graph index-ast. This is
 *   a shallow check (don't visit nested entities).
 */
com.wsscode.pathom3.connect.runner.check_entity_requires_BANG_ = (function com$wsscode$pathom3$connect$runner$check_entity_requires_BANG_(p__22665){
var map__22666 = p__22665;
var map__22666__$1 = cljs.core.__destructure_map.call(null,map__22666);
var env = map__22666__$1;
var graph = cljs.core.get.call(null,map__22666__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var entity = com.wsscode.pathom3.entity_tree.entity.call(null,env);
var expected = cljs.core.zipmap.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.remove.call(null,(function (p1__22663_SHARP_){
return com.wsscode.pathom3.placeholder.placeholder_key_QMARK_.call(null,env,p1__22663_SHARP_);
}))),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.planner.required_ast_from_source_ast.call(null,graph))),cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY));
var missing = com.wsscode.pathom3.format.shape_descriptor.missing.call(null,com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor_shallow.call(null,entity),expected);
if(cljs.core.seq.call(null,missing)){
return com.wsscode.pathom3.connect.runner.fail_fast.call(null,env,cljs.core.ex_info.call(null,["Required attributes missing",com.wsscode.pathom3.path.at_path_string.call(null,env),":\n",clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__22664_SHARP_){
return com.wsscode.pathom3.connect.runner.entity_missing_attribute_details.call(null,env,p1__22664_SHARP_);
}),cljs.core.keys.call(null,missing)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attributes-missing","com.wsscode.pathom3.connect.runner/attributes-missing",-941012314),missing,new cljs.core.Keyword("com.wsscode.pathom3.error","phase","com.wsscode.pathom3.error/phase",-1759004513),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","execute","com.wsscode.pathom3.connect.runner/execute",835253779),new cljs.core.Keyword("com.wsscode.pathom3.error","cause","com.wsscode.pathom3.error/cause",381250583),new cljs.core.Keyword("com.wsscode.pathom3.error","attribute-missing","com.wsscode.pathom3.error/attribute-missing",584652600)], null)));
} else {
return null;
}
});
com.wsscode.pathom3.connect.runner.run_graph_done_BANG_ = (function com$wsscode$pathom3$connect$runner$run_graph_done_BANG_(env){
com.wsscode.pathom3.connect.runner.check_entity_requires_BANG_.call(null,env);

com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,com.wsscode.pathom3.connect.runner.include_meta_stats,env);

if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921).cljs$core$IFn$_invoke$arity$1(env))){
com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,(function (p1__22667_SHARP_){
return com.wsscode.pathom3.error.process_entity_errors.call(null,env,p1__22667_SHARP_);
}));
} else {
}

return null;
});
com.wsscode.pathom3.connect.runner.run_graph_entity_done = (function com$wsscode$pathom3$connect$runner$run_graph_entity_done(env){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholders","com.wsscode.pathom3.connect.planner/placeholders",-1690563362).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744).cljs$core$IFn$_invoke$arity$1(env)))){
com.wsscode.pathom3.connect.runner.merge_resolver_response_BANG_.call(null,env,com.wsscode.pathom3.connect.runner.placeholder_merge_entity.call(null,env));
} else {
}

return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-entity-ready!","com.wsscode.pathom3.connect.runner/wrap-entity-ready!",-134020323),com.wsscode.pathom3.connect.runner.run_graph_done_BANG_,env);
});
com.wsscode.pathom3.connect.runner.run_root_node_BANG_ = (function com$wsscode$pathom3$connect$runner$run_root_node_BANG_(p__22668){
var map__22669 = p__22668;
var map__22669__$1 = cljs.core.__destructure_map.call(null,map__22669);
var env = map__22669__$1;
var graph = cljs.core.get.call(null,map__22669__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var temp__5821__auto__ = com.wsscode.pathom3.connect.planner.get_root_node.call(null,graph);
if(cljs.core.truth_(temp__5821__auto__)){
var root = temp__5821__auto__;
var map__22670 = com.wsscode.pathom3.connect.runner.run_node_BANG_.call(null,env,root);
var map__22670__$1 = cljs.core.__destructure_map.call(null,map__22670);
var batch_hold = cljs.core.get.call(null,map__22670__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-hold","com.wsscode.pathom3.connect.runner/batch-hold",-364021743));
if(cljs.core.truth_(batch_hold)){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","nested-waiting?","com.wsscode.pathom3.connect.runner/nested-waiting?",820889396).cljs$core$IFn$_invoke$arity$1(batch_hold))){
return com.wsscode.misc.refs.gswap_BANG_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-waiting*","com.wsscode.pathom3.connect.runner/batch-waiting*",-950834195).cljs$core$IFn$_invoke$arity$1(env),com.wsscode.misc.coll.vconj,batch_hold);
} else {
return com.wsscode.misc.refs.gswap_BANG_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env),cljs.core.update,cljs.core.select_keys.call(null,batch_hold,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210)], null)),com.wsscode.misc.coll.vconj,batch_hold);
}
} else {
return com.wsscode.pathom3.connect.runner.run_graph_entity_done.call(null,env);
}
} else {
return com.wsscode.pathom3.connect.runner.run_graph_entity_done.call(null,env);
}
});
/**
 * Run the root node of the graph. As resolvers run, the result will be add to the
 *   entity cache tree.
 */
com.wsscode.pathom3.connect.runner.run_graph_BANG__STAR_ = (function com$wsscode$pathom3$connect$runner$run_graph_BANG__STAR_(p__22671){
var map__22672 = p__22671;
var map__22672__$1 = cljs.core.__destructure_map.call(null,map__22672);
var env = map__22672__$1;
var graph = cljs.core.get.call(null,map__22672__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","source-entity","com.wsscode.pathom3.connect.runner/source-entity",1992877853),com.wsscode.pathom3.entity_tree.entity.call(null,env));
com.wsscode.pathom3.connect.runner.process_mutations_BANG_.call(null,env__$1);

var temp__5821__auto___22673 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nested-process","com.wsscode.pathom3.connect.planner/nested-process",-35632382).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(temp__5821__auto___22673)){
var nested_22674 = temp__5821__auto___22673;
com.wsscode.pathom3.connect.runner.merge_resolver_response_BANG_.call(null,env__$1,cljs.core.select_keys.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env__$1),nested_22674));
} else {
}

var temp__5821__auto___22675 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(temp__5821__auto___22675)){
var idents_22676 = temp__5821__auto___22675;
com.wsscode.pathom3.connect.runner.process_idents_BANG_.call(null,env__$1,idents_22676);
} else {
}

com.wsscode.pathom3.connect.runner.run_root_node_BANG_.call(null,env__$1);

return env__$1;
});
/**
 * Quick check to see if the graph has something to run. In the false case we can skip the
 *   running section.
 */
com.wsscode.pathom3.connect.runner.runnable_graph_QMARK_ = (function com$wsscode$pathom3$connect$runner$runnable_graph_QMARK_(graph){
var or__5002__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574).cljs$core$IFn$_invoke$arity$1(graph));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","mutations","com.wsscode.pathom3.connect.planner/mutations",-1571107042).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nested-process","com.wsscode.pathom3.connect.planner/nested-process",-35632382).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","idents","com.wsscode.pathom3.connect.planner/idents",-1156950100).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","placeholders","com.wsscode.pathom3.connect.planner/placeholders",-1690563362).cljs$core$IFn$_invoke$arity$1(graph);
}
}
}
}
});
com.wsscode.pathom3.connect.runner.plan_and_run_BANG_ = (function com$wsscode$pathom3$connect$runner$plan_and_run_BANG_(env,ast_or_graph,entity_tree_STAR_){
var graph = (cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","nodes","com.wsscode.pathom3.connect.planner/nodes",873592574).cljs$core$IFn$_invoke$arity$1(ast_or_graph))?ast_or_graph:(function (){var start_plan = com.wsscode.misc.time.now_ms.call(null);
var plan = com.wsscode.pathom3.connect.planner.compute_run_graph.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast_or_graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","available-data","com.wsscode.pathom3.connect.planner/available-data",727921292),com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,cljs.core.deref.call(null,entity_tree_STAR_))));
var finish_plan = com.wsscode.misc.time.now_ms.call(null);
return cljs.core.assoc.call(null,plan,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-start-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-start-ms",1143271592),start_plan,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","compute-plan-run-finish-ms","com.wsscode.pathom3.connect.runner/compute-plan-run-finish-ms",-1603607227),finish_plan);
})());
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744),graph,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),entity_tree_STAR_);
try{if(cljs.core.truth_(com.wsscode.pathom3.connect.runner.runnable_graph_QMARK_.call(null,graph))){
return com.wsscode.pathom3.connect.runner.run_graph_BANG__STAR_.call(null,env__$1);
} else {
com.wsscode.pathom3.connect.runner.run_graph_entity_done.call(null,env__$1);

return env__$1;
}
}catch (e22677){var e = e22677;
throw e;
}});
com.wsscode.pathom3.connect.runner.assoc_end_plan_stats = (function com$wsscode$pathom3$connect$runner$assoc_end_plan_stats(p__22678){
var map__22679 = p__22678;
var map__22679__$1 = cljs.core.__destructure_map.call(null,map__22679);
var env = map__22679__$1;
var graph = cljs.core.get.call(null,map__22679__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","graph","com.wsscode.pathom3.connect.planner/graph",-1915509744));
return cljs.core.assoc.call(null,graph,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","graph-run-start-ms","com.wsscode.pathom3.connect.runner/graph-run-start-ms",-954308936),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","graph-run-start-ms","com.wsscode.pathom3.connect.runner/graph-run-start-ms",-954308936).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","graph-run-finish-ms","com.wsscode.pathom3.connect.runner/graph-run-finish-ms",-1109337048),com.wsscode.misc.time.now_ms.call(null),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats","com.wsscode.pathom3.connect.runner/node-run-stats",-2036346899),(function (){var G__22680 = env;
var G__22680__$1 = (((G__22680 == null))?null:new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030).cljs$core$IFn$_invoke$arity$1(G__22680));
if((G__22680__$1 == null)){
return null;
} else {
return cljs.core.deref.call(null,G__22680__$1);
}
})());
});
com.wsscode.pathom3.connect.runner.include_meta_stats = (function com$wsscode$pathom3$connect$runner$include_meta_stats(result,p__22681){
var map__22682 = p__22681;
var map__22682__$1 = cljs.core.__destructure_map.call(null,map__22682);
var env = map__22682__$1;
var omit_run_stats_QMARK_ = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","omit-run-stats?","com.wsscode.pathom3.connect.runner/omit-run-stats?",2065057485),false);
var G__22683 = result;
if(cljs.core.not.call(null,omit_run_stats_QMARK_)){
return cljs.core.vary_meta.call(null,G__22683,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","run-stats","com.wsscode.pathom3.connect.runner/run-stats",1718909061),com.wsscode.pathom3.connect.runner.assoc_end_plan_stats.call(null,env));
} else {
return G__22683;
}
});
com.wsscode.pathom3.connect.runner.mark_batch_errors = (function com$wsscode$pathom3$connect$runner$mark_batch_errors(error,env,batch_op,batch_items){
com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-batch-resolver-error","com.wsscode.pathom3.connect.runner/wrap-batch-resolver-error",176601916),(function (_,___$1,___$2){
return null;
}),env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [batch_op,batch_items], null),error);

var seq__22684_22692 = cljs.core.seq.call(null,batch_items);
var chunk__22685_22693 = null;
var count__22686_22694 = (0);
var i__22687_22695 = (0);
while(true){
if((i__22687_22695 < count__22686_22694)){
var map__22690_22696 = cljs.core._nth.call(null,chunk__22685_22693,i__22687_22695);
var map__22690_22697__$1 = cljs.core.__destructure_map.call(null,map__22690_22696);
var env_SINGLEQUOTE__22698 = cljs.core.get.call(null,map__22690_22697__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_22699 = cljs.core.get.call(null,map__22690_22697__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
com.wsscode.pathom3.plugin.run_with_plugins.call(null,env_SINGLEQUOTE__22698,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-resolver-error","com.wsscode.pathom3.connect.runner/wrap-resolver-error",-1230614515),com.wsscode.pathom3.connect.runner.mark_node_error,env_SINGLEQUOTE__22698,node_22699,cljs.core.ex_info.call(null,["Batch error on resolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(batch_op),com.wsscode.pathom3.path.at_path_string.call(null,env),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-error?","com.wsscode.pathom3.connect.runner/batch-error?",-244618920),true], null),error));


var G__22700 = seq__22684_22692;
var G__22701 = chunk__22685_22693;
var G__22702 = count__22686_22694;
var G__22703 = (i__22687_22695 + (1));
seq__22684_22692 = G__22700;
chunk__22685_22693 = G__22701;
count__22686_22694 = G__22702;
i__22687_22695 = G__22703;
continue;
} else {
var temp__5823__auto___22704 = cljs.core.seq.call(null,seq__22684_22692);
if(temp__5823__auto___22704){
var seq__22684_22705__$1 = temp__5823__auto___22704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22684_22705__$1)){
var c__5525__auto___22706 = cljs.core.chunk_first.call(null,seq__22684_22705__$1);
var G__22707 = cljs.core.chunk_rest.call(null,seq__22684_22705__$1);
var G__22708 = c__5525__auto___22706;
var G__22709 = cljs.core.count.call(null,c__5525__auto___22706);
var G__22710 = (0);
seq__22684_22692 = G__22707;
chunk__22685_22693 = G__22708;
count__22686_22694 = G__22709;
i__22687_22695 = G__22710;
continue;
} else {
var map__22691_22711 = cljs.core.first.call(null,seq__22684_22705__$1);
var map__22691_22712__$1 = cljs.core.__destructure_map.call(null,map__22691_22711);
var env_SINGLEQUOTE__22713 = cljs.core.get.call(null,map__22691_22712__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_22714 = cljs.core.get.call(null,map__22691_22712__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
com.wsscode.pathom3.plugin.run_with_plugins.call(null,env_SINGLEQUOTE__22713,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-resolver-error","com.wsscode.pathom3.connect.runner/wrap-resolver-error",-1230614515),com.wsscode.pathom3.connect.runner.mark_node_error,env_SINGLEQUOTE__22713,node_22714,cljs.core.ex_info.call(null,["Batch error on resolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(batch_op),com.wsscode.pathom3.path.at_path_string.call(null,env),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-error?","com.wsscode.pathom3.connect.runner/batch-error?",-244618920),true], null),error));


var G__22715 = cljs.core.next.call(null,seq__22684_22705__$1);
var G__22716 = null;
var G__22717 = (0);
var G__22718 = (0);
seq__22684_22692 = G__22715;
chunk__22685_22693 = G__22716;
count__22686_22694 = G__22717;
i__22687_22695 = G__22718;
continue;
}
} else {
}
}
break;
}

return new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380);
});
com.wsscode.pathom3.connect.runner.cache_batch_item = (function com$wsscode$pathom3$connect$runner$cache_batch_item(p__22719,batch_op,response){
var map__22720 = p__22719;
var map__22720__$1 = cljs.core.__destructure_map.call(null,map__22720);
var batch_item = map__22720__$1;
var env_SINGLEQUOTE_ = cljs.core.get.call(null,map__22720__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_resolver_input = cljs.core.get.call(null,map__22720__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var cache_QMARK_ = cljs.core.get.call(null,map__22720__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493));
var cache_store = cljs.core.get.call(null,map__22720__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377));
if(cljs.core.truth_(cache_QMARK_)){
return com.wsscode.pathom3.cache.cached.call(null,cache_store,env_SINGLEQUOTE_,com.wsscode.pathom3.connect.runner.cache_key.call(null,env_SINGLEQUOTE_,node_resolver_input,batch_op,com.wsscode.pathom3.connect.operation.params.call(null,batch_item)),(function (){
return response;
}));
} else {
return null;
}
});
/**
 * For batch we group the items with the same inputs so the resolver only needs to have
 *   each input once. This function is a helper to side the input batch items with the
 *   distinct list of responses.
 */
com.wsscode.pathom3.connect.runner.combine_inputs_with_responses = (function com$wsscode$pathom3$connect$runner$combine_inputs_with_responses(input_groups,inputs,responses){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (p__22724){
var vec__22725 = p__22724;
var inputs__$1 = cljs.core.nth.call(null,vec__22725,(0),null);
var result = cljs.core.nth.call(null,vec__22725,(1),null);
return cljs.core.mapv.call(null,(function (p1__22723_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__22723_SHARP_,result],null));
}),inputs__$1);
})),cljs.core.mapv.call(null,(function (p1__22722_SHARP_,p2__22721_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p2__22721_SHARP_,p1__22722_SHARP_],null));
}),responses,cljs.core.mapv.call(null,input_groups,inputs)));
});
com.wsscode.pathom3.connect.runner.merge_entity_to_root_data = (function com$wsscode$pathom3$connect$runner$merge_entity_to_root_data(env,env_SINGLEQUOTE_,_node){
if(com.wsscode.pathom3.path.root_QMARK_.call(null,env_SINGLEQUOTE_)){
return null;
} else {
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,cljs.core.update_in,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_),(function (ent){
var ent_SINGLEQUOTE_ = com.wsscode.pathom3.entity_tree.entity.call(null,env_SINGLEQUOTE_);
return cljs.core.vary_meta.call(null,com.wsscode.misc.coll.merge_defaults.call(null,ent,ent_SINGLEQUOTE_),cljs.core.merge,cljs.core.meta.call(null,ent_SINGLEQUOTE_));
}));
}
});
com.wsscode.pathom3.connect.runner.batch_group_input_groups = (function com$wsscode$pathom3$connect$runner$batch_group_input_groups(batch_items){
return cljs.core.group_by.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633),batch_items);
});
com.wsscode.pathom3.connect.runner.batch_group_inputs = (function com$wsscode$pathom3$connect$runner$batch_group_inputs(batch_items){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633)),cljs.core.distinct.call(null)),batch_items);
});
com.wsscode.pathom3.connect.runner.mark_batch_block_errors = (function com$wsscode$pathom3$connect$runner$mark_batch_block_errors(err,env,batch_op,input_groups,inputs){
com.wsscode.pathom3.connect.runner.mark_batch_errors.call(null,err,env,batch_op,cljs.core.vec.call(null,(function (){var iter__5480__auto__ = (function com$wsscode$pathom3$connect$runner$mark_batch_block_errors_$_iter__22728(s__22729){
return (new cljs.core.LazySeq(null,(function (){
var s__22729__$1 = s__22729;
while(true){
var temp__5823__auto__ = cljs.core.seq.call(null,s__22729__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var input = cljs.core.first.call(null,xs__6383__auto__);
var iterys__5476__auto__ = ((function (s__22729__$1,input,xs__6383__auto__,temp__5823__auto__){
return (function com$wsscode$pathom3$connect$runner$mark_batch_block_errors_$_iter__22728_$_iter__22730(s__22731){
return (new cljs.core.LazySeq(null,((function (s__22729__$1,input,xs__6383__auto__,temp__5823__auto__){
return (function (){
var s__22731__$1 = s__22731;
while(true){
var temp__5823__auto____$1 = cljs.core.seq.call(null,s__22731__$1);
if(temp__5823__auto____$1){
var s__22731__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22731__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__22731__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__22733 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__22732 = (0);
while(true){
if((i__22732 < size__5479__auto__)){
var item = cljs.core._nth.call(null,c__5478__auto__,i__22732);
cljs.core.chunk_append.call(null,b__22733,item);

var G__22734 = (i__22732 + (1));
i__22732 = G__22734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22733),com$wsscode$pathom3$connect$runner$mark_batch_block_errors_$_iter__22728_$_iter__22730.call(null,cljs.core.chunk_rest.call(null,s__22731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22733),null);
}
} else {
var item = cljs.core.first.call(null,s__22731__$2);
return cljs.core.cons.call(null,item,com$wsscode$pathom3$connect$runner$mark_batch_block_errors_$_iter__22728_$_iter__22730.call(null,cljs.core.rest.call(null,s__22731__$2)));
}
} else {
return null;
}
break;
}
});})(s__22729__$1,input,xs__6383__auto__,temp__5823__auto__))
,null,null));
});})(s__22729__$1,input,xs__6383__auto__,temp__5823__auto__))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,cljs.core.get.call(null,input_groups,input)));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,com$wsscode$pathom3$connect$runner$mark_batch_block_errors_$_iter__22728.call(null,cljs.core.rest.call(null,s__22729__$1)));
} else {
var G__22735 = cljs.core.rest.call(null,s__22729__$1);
s__22729__$1 = G__22735;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,inputs);
})()));

return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,inputs),null));
});
com.wsscode.pathom3.connect.runner.invoke_batch_block = (function com$wsscode$pathom3$connect$runner$invoke_batch_block(resolver,batch_env,batch_op,input_groups,inputs){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921).cljs$core$IFn$_invoke$arity$1(batch_env))){
try{return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,batch_env,inputs);
}catch (e22736){var err = e22736;
return com.wsscode.pathom3.connect.runner.mark_batch_block_errors.call(null,err,batch_env,batch_op,input_groups,inputs);
}} else {
return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver,batch_env,inputs);
}
});
com.wsscode.pathom3.connect.runner.run_batches_pending_BANG_ = (function com$wsscode$pathom3$connect$runner$run_batches_pending_BANG_(env){
var batches_STAR_ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env);
var batches = cljs.core.deref.call(null,batches_STAR_);
cljs.core.vreset_BANG_.call(null,batches_STAR_,cljs.core.PersistentArrayMap.EMPTY);

var seq__22739 = cljs.core.seq.call(null,batches);
var chunk__22740 = null;
var count__22741 = (0);
var i__22742 = (0);
while(true){
if((i__22742 < count__22741)){
var vec__22811 = cljs.core._nth.call(null,chunk__22740,i__22742);
var map__22814 = cljs.core.nth.call(null,vec__22811,(0),null);
var map__22814__$1 = cljs.core.__destructure_map.call(null,map__22814);
var batch_op = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var batch_items = cljs.core.nth.call(null,vec__22811,(1),null);
var resolver_22879 = com.wsscode.pathom3.connect.indexes.resolver.call(null,env,batch_op);
var input_groups_22880 = com.wsscode.pathom3.connect.runner.batch_group_input_groups.call(null,batch_items);
var inputs_22881 = com.wsscode.pathom3.connect.runner.batch_group_inputs.call(null,batch_items);
var batch_env_22882 = com.wsscode.misc.coll.update_if.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,batch_items)),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),((function (seq__22739,chunk__22740,count__22741,i__22742,resolver_22879,input_groups_22880,inputs_22881,vec__22811,map__22814,map__22814__$1,batch_op,batch_items,batches_STAR_,batches){
return (function (p1__22737_SHARP_){
var G__22815 = p1__22737_SHARP_;
if(cljs.core.seq.call(null,p1__22737_SHARP_)){
return cljs.core.pop.call(null,G__22815);
} else {
return G__22815;
}
});})(seq__22739,chunk__22740,count__22741,i__22742,resolver_22879,input_groups_22880,inputs_22881,vec__22811,map__22814,map__22814__$1,batch_op,batch_items,batches_STAR_,batches))
);
var max_size_22883 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch-chunk-size","com.wsscode.pathom3.connect.operation/batch-chunk-size",-1412106301).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.operation_config.call(null,resolver_22879));
var start_22884 = com.wsscode.misc.time.now_ms.call(null);
var responses_22885 = (function (){try{if(cljs.core.truth_(max_size_22883)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,((function (seq__22739,chunk__22740,count__22741,i__22742,resolver_22879,input_groups_22880,inputs_22881,batch_env_22882,max_size_22883,start_22884,vec__22811,map__22814,map__22814__$1,batch_op,batch_items,batches_STAR_,batches){
return (function (p1__22738_SHARP_){
return com.wsscode.pathom3.connect.runner.invoke_batch_block.call(null,resolver_22879,batch_env_22882,batch_op,input_groups_22880,p1__22738_SHARP_);
});})(seq__22739,chunk__22740,count__22741,i__22742,resolver_22879,input_groups_22880,inputs_22881,batch_env_22882,max_size_22883,start_22884,vec__22811,map__22814,map__22814__$1,batch_op,batch_items,batches_STAR_,batches))
),cljs.core.partition_all.call(null,max_size_22883,inputs_22881));
} else {
return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver_22879,batch_env_22882,inputs_22881);
}
}catch (e22816){var e = e22816;
return com.wsscode.pathom3.connect.runner.mark_batch_errors.call(null,e,batch_env_22882,batch_op,batch_items);
}})();
var finish_22886 = com.wsscode.misc.time.now_ms.call(null);
if(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),responses_22885)){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921).cljs$core$IFn$_invoke$arity$1(env))){
var seq__22817_22887 = cljs.core.seq.call(null,batch_items);
var chunk__22818_22888 = null;
var count__22819_22889 = (0);
var i__22820_22890 = (0);
while(true){
if((i__22820_22890 < count__22819_22889)){
var map__22823_22891 = cljs.core._nth.call(null,chunk__22818_22888,i__22820_22890);
var map__22823_22892__$1 = cljs.core.__destructure_map.call(null,map__22823_22891);
var env_SINGLEQUOTE__22893 = cljs.core.get.call(null,map__22823_22892__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_22894 = cljs.core.get.call(null,map__22823_22892__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
com.wsscode.pathom3.connect.runner.run_graph_entity_done.call(null,env_SINGLEQUOTE__22893);

com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE__22893,node_22894);


var G__22895 = seq__22817_22887;
var G__22896 = chunk__22818_22888;
var G__22897 = count__22819_22889;
var G__22898 = (i__22820_22890 + (1));
seq__22817_22887 = G__22895;
chunk__22818_22888 = G__22896;
count__22819_22889 = G__22897;
i__22820_22890 = G__22898;
continue;
} else {
var temp__5823__auto___22899 = cljs.core.seq.call(null,seq__22817_22887);
if(temp__5823__auto___22899){
var seq__22817_22900__$1 = temp__5823__auto___22899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22817_22900__$1)){
var c__5525__auto___22901 = cljs.core.chunk_first.call(null,seq__22817_22900__$1);
var G__22902 = cljs.core.chunk_rest.call(null,seq__22817_22900__$1);
var G__22903 = c__5525__auto___22901;
var G__22904 = cljs.core.count.call(null,c__5525__auto___22901);
var G__22905 = (0);
seq__22817_22887 = G__22902;
chunk__22818_22888 = G__22903;
count__22819_22889 = G__22904;
i__22820_22890 = G__22905;
continue;
} else {
var map__22824_22906 = cljs.core.first.call(null,seq__22817_22900__$1);
var map__22824_22907__$1 = cljs.core.__destructure_map.call(null,map__22824_22906);
var env_SINGLEQUOTE__22908 = cljs.core.get.call(null,map__22824_22907__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_22909 = cljs.core.get.call(null,map__22824_22907__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
com.wsscode.pathom3.connect.runner.run_graph_entity_done.call(null,env_SINGLEQUOTE__22908);

com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE__22908,node_22909);


var G__22910 = cljs.core.next.call(null,seq__22817_22900__$1);
var G__22911 = null;
var G__22912 = (0);
var G__22913 = (0);
seq__22817_22887 = G__22910;
chunk__22818_22888 = G__22911;
count__22819_22889 = G__22912;
i__22820_22890 = G__22913;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,inputs_22881),cljs.core.count.call(null,responses_22885))){
throw cljs.core.ex_info.call(null,"Batch results must be a sequence and have the same length as the inputs.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),inputs_22881,new cljs.core.Keyword(null,"op-name","op-name",854688697),batch_op], null));
} else {
}

var seq__22825_22914 = cljs.core.seq.call(null,com.wsscode.pathom3.connect.runner.combine_inputs_with_responses.call(null,input_groups_22880,inputs_22881,responses_22885));
var chunk__22826_22915 = null;
var count__22827_22916 = (0);
var i__22828_22917 = (0);
while(true){
if((i__22828_22917 < count__22827_22916)){
var vec__22837_22918 = cljs.core._nth.call(null,chunk__22826_22915,i__22828_22917);
var map__22840_22919 = cljs.core.nth.call(null,vec__22837_22918,(0),null);
var map__22840_22920__$1 = cljs.core.__destructure_map.call(null,map__22840_22919);
var batch_item_22921 = map__22840_22920__$1;
var env_SINGLEQUOTE__22922 = cljs.core.get.call(null,map__22840_22920__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_22923 = cljs.core.get.call(null,map__22840_22920__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var node_resolver_input_22924 = cljs.core.get.call(null,map__22840_22920__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var response_22925 = cljs.core.nth.call(null,vec__22837_22918,(1),null);
com.wsscode.pathom3.connect.runner.cache_batch_item.call(null,batch_item_22921,batch_op,response_22925);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE__22922,node_22923,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),start_22884,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),finish_22886], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env_SINGLEQUOTE__22922,node_resolver_input_22924,response_22925)));

com.wsscode.pathom3.connect.runner.merge_resolver_response_BANG_.call(null,env_SINGLEQUOTE__22922,response_22925);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE__22922,node_22923,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

com.wsscode.pathom3.connect.runner.run_root_node_BANG_.call(null,env_SINGLEQUOTE__22922);

com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE__22922,node_22923);


var G__22926 = seq__22825_22914;
var G__22927 = chunk__22826_22915;
var G__22928 = count__22827_22916;
var G__22929 = (i__22828_22917 + (1));
seq__22825_22914 = G__22926;
chunk__22826_22915 = G__22927;
count__22827_22916 = G__22928;
i__22828_22917 = G__22929;
continue;
} else {
var temp__5823__auto___22930 = cljs.core.seq.call(null,seq__22825_22914);
if(temp__5823__auto___22930){
var seq__22825_22931__$1 = temp__5823__auto___22930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22825_22931__$1)){
var c__5525__auto___22932 = cljs.core.chunk_first.call(null,seq__22825_22931__$1);
var G__22933 = cljs.core.chunk_rest.call(null,seq__22825_22931__$1);
var G__22934 = c__5525__auto___22932;
var G__22935 = cljs.core.count.call(null,c__5525__auto___22932);
var G__22936 = (0);
seq__22825_22914 = G__22933;
chunk__22826_22915 = G__22934;
count__22827_22916 = G__22935;
i__22828_22917 = G__22936;
continue;
} else {
var vec__22841_22937 = cljs.core.first.call(null,seq__22825_22931__$1);
var map__22844_22938 = cljs.core.nth.call(null,vec__22841_22937,(0),null);
var map__22844_22939__$1 = cljs.core.__destructure_map.call(null,map__22844_22938);
var batch_item_22940 = map__22844_22939__$1;
var env_SINGLEQUOTE__22941 = cljs.core.get.call(null,map__22844_22939__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_22942 = cljs.core.get.call(null,map__22844_22939__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var node_resolver_input_22943 = cljs.core.get.call(null,map__22844_22939__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var response_22944 = cljs.core.nth.call(null,vec__22841_22937,(1),null);
com.wsscode.pathom3.connect.runner.cache_batch_item.call(null,batch_item_22940,batch_op,response_22944);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE__22941,node_22942,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),start_22884,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),finish_22886], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env_SINGLEQUOTE__22941,node_resolver_input_22943,response_22944)));

com.wsscode.pathom3.connect.runner.merge_resolver_response_BANG_.call(null,env_SINGLEQUOTE__22941,response_22944);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE__22941,node_22942,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

com.wsscode.pathom3.connect.runner.run_root_node_BANG_.call(null,env_SINGLEQUOTE__22941);

com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE__22941,node_22942);


var G__22945 = cljs.core.next.call(null,seq__22825_22931__$1);
var G__22946 = null;
var G__22947 = (0);
var G__22948 = (0);
seq__22825_22914 = G__22945;
chunk__22826_22915 = G__22946;
count__22827_22916 = G__22947;
i__22828_22917 = G__22948;
continue;
}
} else {
}
}
break;
}
}


var G__22949 = seq__22739;
var G__22950 = chunk__22740;
var G__22951 = count__22741;
var G__22952 = (i__22742 + (1));
seq__22739 = G__22949;
chunk__22740 = G__22950;
count__22741 = G__22951;
i__22742 = G__22952;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__22739);
if(temp__5823__auto__){
var seq__22739__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22739__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22739__$1);
var G__22953 = cljs.core.chunk_rest.call(null,seq__22739__$1);
var G__22954 = c__5525__auto__;
var G__22955 = cljs.core.count.call(null,c__5525__auto__);
var G__22956 = (0);
seq__22739 = G__22953;
chunk__22740 = G__22954;
count__22741 = G__22955;
i__22742 = G__22956;
continue;
} else {
var vec__22845 = cljs.core.first.call(null,seq__22739__$1);
var map__22848 = cljs.core.nth.call(null,vec__22845,(0),null);
var map__22848__$1 = cljs.core.__destructure_map.call(null,map__22848);
var batch_op = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
var batch_items = cljs.core.nth.call(null,vec__22845,(1),null);
var resolver_22957 = com.wsscode.pathom3.connect.indexes.resolver.call(null,env,batch_op);
var input_groups_22958 = com.wsscode.pathom3.connect.runner.batch_group_input_groups.call(null,batch_items);
var inputs_22959 = com.wsscode.pathom3.connect.runner.batch_group_inputs.call(null,batch_items);
var batch_env_22960 = com.wsscode.misc.coll.update_if.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,batch_items)),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),((function (seq__22739,chunk__22740,count__22741,i__22742,resolver_22957,input_groups_22958,inputs_22959,vec__22845,map__22848,map__22848__$1,batch_op,batch_items,seq__22739__$1,temp__5823__auto__,batches_STAR_,batches){
return (function (p1__22737_SHARP_){
var G__22849 = p1__22737_SHARP_;
if(cljs.core.seq.call(null,p1__22737_SHARP_)){
return cljs.core.pop.call(null,G__22849);
} else {
return G__22849;
}
});})(seq__22739,chunk__22740,count__22741,i__22742,resolver_22957,input_groups_22958,inputs_22959,vec__22845,map__22848,map__22848__$1,batch_op,batch_items,seq__22739__$1,temp__5823__auto__,batches_STAR_,batches))
);
var max_size_22961 = new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch-chunk-size","com.wsscode.pathom3.connect.operation/batch-chunk-size",-1412106301).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.connect.operation.operation_config.call(null,resolver_22957));
var start_22962 = com.wsscode.misc.time.now_ms.call(null);
var responses_22963 = (function (){try{if(cljs.core.truth_(max_size_22961)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,((function (seq__22739,chunk__22740,count__22741,i__22742,resolver_22957,input_groups_22958,inputs_22959,batch_env_22960,max_size_22961,start_22962,vec__22845,map__22848,map__22848__$1,batch_op,batch_items,seq__22739__$1,temp__5823__auto__,batches_STAR_,batches){
return (function (p1__22738_SHARP_){
return com.wsscode.pathom3.connect.runner.invoke_batch_block.call(null,resolver_22957,batch_env_22960,batch_op,input_groups_22958,p1__22738_SHARP_);
});})(seq__22739,chunk__22740,count__22741,i__22742,resolver_22957,input_groups_22958,inputs_22959,batch_env_22960,max_size_22961,start_22962,vec__22845,map__22848,map__22848__$1,batch_op,batch_items,seq__22739__$1,temp__5823__auto__,batches_STAR_,batches))
),cljs.core.partition_all.call(null,max_size_22961,inputs_22959));
} else {
return com.wsscode.pathom3.connect.runner.invoke_resolver_with_plugins.call(null,resolver_22957,batch_env_22960,inputs_22959);
}
}catch (e22850){var e = e22850;
return com.wsscode.pathom3.connect.runner.mark_batch_errors.call(null,e,batch_env_22960,batch_op,batch_items);
}})();
var finish_22964 = com.wsscode.misc.time.now_ms.call(null);
if(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-error","com.wsscode.pathom3.connect.runner/node-error",890120380),responses_22963)){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921).cljs$core$IFn$_invoke$arity$1(env))){
var seq__22851_22965 = cljs.core.seq.call(null,batch_items);
var chunk__22852_22966 = null;
var count__22853_22967 = (0);
var i__22854_22968 = (0);
while(true){
if((i__22854_22968 < count__22853_22967)){
var map__22857_22969 = cljs.core._nth.call(null,chunk__22852_22966,i__22854_22968);
var map__22857_22970__$1 = cljs.core.__destructure_map.call(null,map__22857_22969);
var env_SINGLEQUOTE__22971 = cljs.core.get.call(null,map__22857_22970__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_22972 = cljs.core.get.call(null,map__22857_22970__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
com.wsscode.pathom3.connect.runner.run_graph_entity_done.call(null,env_SINGLEQUOTE__22971);

com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE__22971,node_22972);


var G__22973 = seq__22851_22965;
var G__22974 = chunk__22852_22966;
var G__22975 = count__22853_22967;
var G__22976 = (i__22854_22968 + (1));
seq__22851_22965 = G__22973;
chunk__22852_22966 = G__22974;
count__22853_22967 = G__22975;
i__22854_22968 = G__22976;
continue;
} else {
var temp__5823__auto___22977__$1 = cljs.core.seq.call(null,seq__22851_22965);
if(temp__5823__auto___22977__$1){
var seq__22851_22978__$1 = temp__5823__auto___22977__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22851_22978__$1)){
var c__5525__auto___22979 = cljs.core.chunk_first.call(null,seq__22851_22978__$1);
var G__22980 = cljs.core.chunk_rest.call(null,seq__22851_22978__$1);
var G__22981 = c__5525__auto___22979;
var G__22982 = cljs.core.count.call(null,c__5525__auto___22979);
var G__22983 = (0);
seq__22851_22965 = G__22980;
chunk__22852_22966 = G__22981;
count__22853_22967 = G__22982;
i__22854_22968 = G__22983;
continue;
} else {
var map__22858_22984 = cljs.core.first.call(null,seq__22851_22978__$1);
var map__22858_22985__$1 = cljs.core.__destructure_map.call(null,map__22858_22984);
var env_SINGLEQUOTE__22986 = cljs.core.get.call(null,map__22858_22985__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_22987 = cljs.core.get.call(null,map__22858_22985__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
com.wsscode.pathom3.connect.runner.run_graph_entity_done.call(null,env_SINGLEQUOTE__22986);

com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE__22986,node_22987);


var G__22988 = cljs.core.next.call(null,seq__22851_22978__$1);
var G__22989 = null;
var G__22990 = (0);
var G__22991 = (0);
seq__22851_22965 = G__22988;
chunk__22852_22966 = G__22989;
count__22853_22967 = G__22990;
i__22854_22968 = G__22991;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,inputs_22959),cljs.core.count.call(null,responses_22963))){
throw cljs.core.ex_info.call(null,"Batch results must be a sequence and have the same length as the inputs.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),inputs_22959,new cljs.core.Keyword(null,"op-name","op-name",854688697),batch_op], null));
} else {
}

var seq__22859_22992 = cljs.core.seq.call(null,com.wsscode.pathom3.connect.runner.combine_inputs_with_responses.call(null,input_groups_22958,inputs_22959,responses_22963));
var chunk__22860_22993 = null;
var count__22861_22994 = (0);
var i__22862_22995 = (0);
while(true){
if((i__22862_22995 < count__22861_22994)){
var vec__22871_22996 = cljs.core._nth.call(null,chunk__22860_22993,i__22862_22995);
var map__22874_22997 = cljs.core.nth.call(null,vec__22871_22996,(0),null);
var map__22874_22998__$1 = cljs.core.__destructure_map.call(null,map__22874_22997);
var batch_item_22999 = map__22874_22998__$1;
var env_SINGLEQUOTE__23000 = cljs.core.get.call(null,map__22874_22998__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_23001 = cljs.core.get.call(null,map__22874_22998__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var node_resolver_input_23002 = cljs.core.get.call(null,map__22874_22998__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var response_23003 = cljs.core.nth.call(null,vec__22871_22996,(1),null);
com.wsscode.pathom3.connect.runner.cache_batch_item.call(null,batch_item_22999,batch_op,response_23003);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE__23000,node_23001,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),start_22962,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),finish_22964], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env_SINGLEQUOTE__23000,node_resolver_input_23002,response_23003)));

com.wsscode.pathom3.connect.runner.merge_resolver_response_BANG_.call(null,env_SINGLEQUOTE__23000,response_23003);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE__23000,node_23001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

com.wsscode.pathom3.connect.runner.run_root_node_BANG_.call(null,env_SINGLEQUOTE__23000);

com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE__23000,node_23001);


var G__23004 = seq__22859_22992;
var G__23005 = chunk__22860_22993;
var G__23006 = count__22861_22994;
var G__23007 = (i__22862_22995 + (1));
seq__22859_22992 = G__23004;
chunk__22860_22993 = G__23005;
count__22861_22994 = G__23006;
i__22862_22995 = G__23007;
continue;
} else {
var temp__5823__auto___23008__$1 = cljs.core.seq.call(null,seq__22859_22992);
if(temp__5823__auto___23008__$1){
var seq__22859_23009__$1 = temp__5823__auto___23008__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22859_23009__$1)){
var c__5525__auto___23010 = cljs.core.chunk_first.call(null,seq__22859_23009__$1);
var G__23011 = cljs.core.chunk_rest.call(null,seq__22859_23009__$1);
var G__23012 = c__5525__auto___23010;
var G__23013 = cljs.core.count.call(null,c__5525__auto___23010);
var G__23014 = (0);
seq__22859_22992 = G__23011;
chunk__22860_22993 = G__23012;
count__22861_22994 = G__23013;
i__22862_22995 = G__23014;
continue;
} else {
var vec__22875_23015 = cljs.core.first.call(null,seq__22859_23009__$1);
var map__22878_23016 = cljs.core.nth.call(null,vec__22875_23015,(0),null);
var map__22878_23017__$1 = cljs.core.__destructure_map.call(null,map__22878_23016);
var batch_item_23018 = map__22878_23017__$1;
var env_SINGLEQUOTE__23019 = cljs.core.get.call(null,map__22878_23017__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
var node_23020 = cljs.core.get.call(null,map__22878_23017__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565));
var node_resolver_input_23021 = cljs.core.get.call(null,map__22878_23017__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-resolver-input","com.wsscode.pathom3.connect.runner/node-resolver-input",-1558799633));
var response_23022 = cljs.core.nth.call(null,vec__22875_23015,(1),null);
com.wsscode.pathom3.connect.runner.cache_batch_item.call(null,batch_item_23018,batch_op,response_23022);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE__23019,node_23020,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-start-ms","com.wsscode.pathom3.connect.runner/batch-run-start-ms",-1710202816),start_22962,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-run-finish-ms","com.wsscode.pathom3.connect.runner/batch-run-finish-ms",-1912626285),finish_22964], null),com.wsscode.pathom3.connect.runner.report_resolver_io_stats.call(null,env_SINGLEQUOTE__23019,node_resolver_input_23021,response_23022)));

com.wsscode.pathom3.connect.runner.merge_resolver_response_BANG_.call(null,env_SINGLEQUOTE__23019,response_23022);

com.wsscode.pathom3.connect.runner.merge_node_stats_BANG_.call(null,env_SINGLEQUOTE__23019,node_23020,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-finish-ms","com.wsscode.pathom3.connect.runner/node-run-finish-ms",1292429944),com.wsscode.misc.time.now_ms.call(null)], null));

com.wsscode.pathom3.connect.runner.run_root_node_BANG_.call(null,env_SINGLEQUOTE__23019);

com.wsscode.pathom3.connect.runner.merge_entity_to_root_data.call(null,env,env_SINGLEQUOTE__23019,node_23020);


var G__23023 = cljs.core.next.call(null,seq__22859_23009__$1);
var G__23024 = null;
var G__23025 = (0);
var G__23026 = (0);
seq__22859_22992 = G__23023;
chunk__22860_22993 = G__23024;
count__22861_22994 = G__23025;
i__22862_22995 = G__23026;
continue;
}
} else {
}
}
break;
}
}


var G__23027 = cljs.core.next.call(null,seq__22739__$1);
var G__23028 = null;
var G__23029 = (0);
var G__23030 = (0);
seq__22739 = G__23027;
chunk__22740 = G__23028;
count__22741 = G__23029;
i__22742 = G__23030;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom3.connect.runner.sort_waiting_by_depth = (function com$wsscode$pathom3$connect$runner$sort_waiting_by_depth(waits){
return cljs.core.sort_by.call(null,(function (p1__23031_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428).cljs$core$IFn$_invoke$arity$1(p1__23031_SHARP_)));
}),(function (p1__23033_SHARP_,p2__23032_SHARP_){
return cljs.core.compare.call(null,p2__23032_SHARP_,p1__23033_SHARP_);
}),waits);
});
com.wsscode.pathom3.connect.runner.run_batches_waiting_BANG_ = (function com$wsscode$pathom3$connect$runner$run_batches_waiting_BANG_(env){
var waits_STAR_ = new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-waiting*","com.wsscode.pathom3.connect.runner/batch-waiting*",-950834195).cljs$core$IFn$_invoke$arity$1(env);
var waits = com.wsscode.pathom3.connect.runner.sort_waiting_by_depth.call(null,cljs.core.deref.call(null,waits_STAR_));
cljs.core.vreset_BANG_.call(null,waits_STAR_,cljs.core.PersistentVector.EMPTY);

var seq__23034 = cljs.core.seq.call(null,waits);
var chunk__23035 = null;
var count__23036 = (0);
var i__23037 = (0);
while(true){
if((i__23037 < count__23036)){
var map__23040 = cljs.core._nth.call(null,chunk__23035,i__23037);
var map__23040__$1 = cljs.core.__destructure_map.call(null,map__23040);
var env_SINGLEQUOTE_ = cljs.core.get.call(null,map__23040__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
com.wsscode.pathom3.entity_tree.reset_entity_BANG_.call(null,env_SINGLEQUOTE_,cljs.core.get_in.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_)));

com.wsscode.pathom3.connect.runner.run_root_node_BANG_.call(null,env_SINGLEQUOTE_);

if(com.wsscode.pathom3.path.root_QMARK_.call(null,env_SINGLEQUOTE_)){
} else {
com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,cljs.core.assoc_in,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_),com.wsscode.pathom3.entity_tree.entity.call(null,env_SINGLEQUOTE_));
}


var G__23042 = seq__23034;
var G__23043 = chunk__23035;
var G__23044 = count__23036;
var G__23045 = (i__23037 + (1));
seq__23034 = G__23042;
chunk__23035 = G__23043;
count__23036 = G__23044;
i__23037 = G__23045;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__23034);
if(temp__5823__auto__){
var seq__23034__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23034__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23034__$1);
var G__23046 = cljs.core.chunk_rest.call(null,seq__23034__$1);
var G__23047 = c__5525__auto__;
var G__23048 = cljs.core.count.call(null,c__5525__auto__);
var G__23049 = (0);
seq__23034 = G__23046;
chunk__23035 = G__23047;
count__23036 = G__23048;
i__23037 = G__23049;
continue;
} else {
var map__23041 = cljs.core.first.call(null,seq__23034__$1);
var map__23041__$1 = cljs.core.__destructure_map.call(null,map__23041);
var env_SINGLEQUOTE_ = cljs.core.get.call(null,map__23041__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","env","com.wsscode.pathom3.connect.runner/env",-1421599428));
com.wsscode.pathom3.entity_tree.reset_entity_BANG_.call(null,env_SINGLEQUOTE_,cljs.core.get_in.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_)));

com.wsscode.pathom3.connect.runner.run_root_node_BANG_.call(null,env_SINGLEQUOTE_);

if(com.wsscode.pathom3.path.root_QMARK_.call(null,env_SINGLEQUOTE_)){
} else {
com.wsscode.pathom3.entity_tree.swap_entity_BANG_.call(null,env,cljs.core.assoc_in,new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558).cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_),com.wsscode.pathom3.entity_tree.entity.call(null,env_SINGLEQUOTE_));
}


var G__23050 = cljs.core.next.call(null,seq__23034__$1);
var G__23051 = null;
var G__23052 = (0);
var G__23053 = (0);
seq__23034 = G__23050;
chunk__23035 = G__23051;
count__23036 = G__23052;
i__23037 = G__23053;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom3.connect.runner.run_batches_BANG_ = (function com$wsscode$pathom3$connect$runner$run_batches_BANG_(env){
com.wsscode.pathom3.connect.runner.run_batches_pending_BANG_.call(null,env);

return com.wsscode.pathom3.connect.runner.run_batches_waiting_BANG_.call(null,env);
});
com.wsscode.pathom3.connect.runner.attribute_error_resolver = (function com$wsscode$pathom3$connect$runner$attribute_error_resolver(){
return com.wsscode.pathom3.connect.operation.resolver.call(null,cljs.core.symbol.call(null,"com.wsscode.pathom3.connect.runner","attribute-errors"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attribute-errors","com.wsscode.pathom3.connect.runner/attribute-errors",723532527)], null)], null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","attribute-errors","com.wsscode.pathom3.connect.runner/attribute-errors",723532527),cljs.core.PersistentArrayMap.EMPTY], null);
}));
});
com.wsscode.pathom3.connect.runner.setup_root_env = (function com$wsscode$pathom3$connect$runner$setup_root_env(env){
var G__23054 = env;
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword("com.wsscode.pathom3.error","lenient-mode?","com.wsscode.pathom3.error/lenient-mode?",-1865845921).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(and__5000__auto__)){
return (com.wsscode.pathom3.connect.indexes.resolver.call(null,env,new cljs.core.Symbol("com.wsscode.pathom3.connect.runner","attribute-errors","com.wsscode.pathom3.connect.runner/attribute-errors",-1930903242,null)) == null);
} else {
return and__5000__auto__;
}
})())){
return com.wsscode.pathom3.connect.indexes.register.call(null,G__23054,com.wsscode.pathom3.connect.runner.attribute_error_resolver.call(null));
} else {
return G__23054;
}
});
com.wsscode.pathom3.connect.runner.setup_runner_env = (function com$wsscode$pathom3$connect$runner$setup_runner_env(env,entity_tree_STAR_,cache_type){
return cljs.core.assoc.call(null,com.wsscode.misc.coll.merge_defaults.call(null,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","plan-cache*","com.wsscode.pathom3.connect.planner/plan-cache*",-982885642),cache_type.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706),cache_type.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-waiting*","com.wsscode.pathom3.connect.runner/batch-waiting*",-950834195),cache_type.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-cache*","com.wsscode.pathom3.connect.runner/resolver-cache*",334664084),cache_type.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom3.path","path","com.wsscode.pathom3.path/path",1029673558),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","graph-run-start-ms","com.wsscode.pathom3.connect.runner/graph-run-start-ms",-954308936),com.wsscode.misc.time.now_ms.call(null),new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),entity_tree_STAR_,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","node-run-stats*","com.wsscode.pathom3.connect.runner/node-run-stats*",453579030),cache_type.call(null,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","map-container?","com.wsscode.pathom3.connect.runner/map-container?",905687545),true], null))));
});
com.wsscode.pathom3.connect.runner.run_graph_impl_BANG_ = (function com$wsscode$pathom3$connect$runner$run_graph_impl_BANG_(env,ast_or_graph,entity_tree_STAR_){
var env__$1 = com.wsscode.pathom3.connect.runner.plan_and_run_BANG_.call(null,com.wsscode.pathom3.connect.runner.setup_runner_env.call(null,env,entity_tree_STAR_,cljs.core.volatile_BANG_),ast_or_graph,entity_tree_STAR_);
try{if(com.wsscode.pathom3.path.root_QMARK_.call(null,env__$1)){
while(true){
if(cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","batch-pending*","com.wsscode.pathom3.connect.runner/batch-pending*",898520706).cljs$core$IFn$_invoke$arity$1(env__$1)))){
com.wsscode.pathom3.connect.runner.run_batches_BANG_.call(null,env__$1);

continue;
} else {
}
break;
}
} else {
}

return com.wsscode.pathom3.connect.runner.include_meta_stats.call(null,com.wsscode.pathom3.entity_tree.entity.call(null,env__$1),env__$1);
}catch (e23055){var e = e23055;
throw e;
}});
com.wsscode.pathom3.connect.runner.run_graph_with_plugins = (function com$wsscode$pathom3$connect$runner$run_graph_with_plugins(env,ast_or_graph,entity_tree_STAR_,impl_BANG_){
if(com.wsscode.pathom3.path.root_QMARK_.call(null,env)){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-root-run-graph!","com.wsscode.pathom3.connect.runner/wrap-root-run-graph!",893721083),(function (e,a,t){
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-run-graph!","com.wsscode.pathom3.connect.runner/wrap-run-graph!",-170975775),impl_BANG_,com.wsscode.pathom3.connect.runner.setup_root_env.call(null,e),a,t);
}),env,ast_or_graph,entity_tree_STAR_);
} else {
return com.wsscode.pathom3.plugin.run_with_plugins.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","wrap-run-graph!","com.wsscode.pathom3.connect.runner/wrap-run-graph!",-170975775),impl_BANG_,env,ast_or_graph,entity_tree_STAR_);
}
});
/**
 * Plan and execute a request, given an environment (with indexes), the request AST
 *   and the entity-tree*.
 */
com.wsscode.pathom3.connect.runner.run_graph_BANG_ = (function com$wsscode$pathom3$connect$runner$run_graph_BANG_(env,ast_or_graph,entity_tree_STAR_){
return com.wsscode.pathom3.connect.runner.run_graph_with_plugins.call(null,env,ast_or_graph,entity_tree_STAR_,com.wsscode.pathom3.connect.runner.run_graph_impl_BANG_);
});
com.wsscode.pathom3.connect.runner.with_resolver_cache = (function com$wsscode$pathom3$connect$runner$with_resolver_cache(var_args){
var G__23057 = arguments.length;
switch (G__23057) {
case 1:
return com.wsscode.pathom3.connect.runner.with_resolver_cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.connect.runner.with_resolver_cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.runner.with_resolver_cache.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.wsscode.pathom3.connect.runner.with_resolver_cache.call(null,env,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
}));

(com.wsscode.pathom3.connect.runner.with_resolver_cache.cljs$core$IFn$_invoke$arity$2 = (function (env,cache_STAR_){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.connect.runner","resolver-cache*","com.wsscode.pathom3.connect.runner/resolver-cache*",334664084),cache_STAR_);
}));

(com.wsscode.pathom3.connect.runner.with_resolver_cache.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=runner.js.map
