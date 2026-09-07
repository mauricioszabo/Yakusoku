// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('bench.main');
goog.require('cljs.core');
goog.require('bench.clock');
goog.require('bench.graph');
goog.require('promesa.core');
bench.main._main = (function bench$main$_main(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23491 = arguments.length;
var i__5727__auto___23492 = (0);
while(true){
if((i__5727__auto___23492 < len__5726__auto___23491)){
args__5732__auto__.push((arguments[i__5727__auto___23492]));

var G__23493 = (i__5727__auto___23492 + (1));
i__5727__auto___23492 = G__23493;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return bench.main._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(bench.main._main.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var seq__23487_23494 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sync","throughput","sync/throughput",-1464396252),new cljs.core.Keyword("sync","single-query","sync/single-query",703721696),new cljs.core.Keyword("sync","batched","sync/batched",876671673),new cljs.core.Keyword("sync","one-by-one","sync/one-by-one",-1115723160)], null));
var chunk__23488_23495 = null;
var count__23489_23496 = (0);
var i__23490_23497 = (0);
while(true){
if((i__23490_23497 < count__23489_23496)){
var label_23498 = cljs.core._nth.call(null,chunk__23488_23495,i__23490_23497);
cljs.core.prn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),bench.clock.runtime_name.call(null),new cljs.core.Keyword(null,"bench","bench",1414206922),label_23498,new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016)], null));


var G__23499 = seq__23487_23494;
var G__23500 = chunk__23488_23495;
var G__23501 = count__23489_23496;
var G__23502 = (i__23490_23497 + (1));
seq__23487_23494 = G__23499;
chunk__23488_23495 = G__23500;
count__23489_23496 = G__23501;
i__23490_23497 = G__23502;
continue;
} else {
var temp__5823__auto___23503 = cljs.core.seq.call(null,seq__23487_23494);
if(temp__5823__auto___23503){
var seq__23487_23504__$1 = temp__5823__auto___23503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23487_23504__$1)){
var c__5525__auto___23505 = cljs.core.chunk_first.call(null,seq__23487_23504__$1);
var G__23506 = cljs.core.chunk_rest.call(null,seq__23487_23504__$1);
var G__23507 = c__5525__auto___23505;
var G__23508 = cljs.core.count.call(null,c__5525__auto___23505);
var G__23509 = (0);
seq__23487_23494 = G__23506;
chunk__23488_23495 = G__23507;
count__23489_23496 = G__23508;
i__23490_23497 = G__23509;
continue;
} else {
var label_23510 = cljs.core.first.call(null,seq__23487_23504__$1);
cljs.core.prn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),bench.clock.runtime_name.call(null),new cljs.core.Keyword(null,"bench","bench",1414206922),label_23510,new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016)], null));


var G__23511 = cljs.core.next.call(null,seq__23487_23504__$1);
var G__23512 = null;
var G__23513 = (0);
var G__23514 = (0);
seq__23487_23494 = G__23511;
chunk__23488_23495 = G__23512;
count__23489_23496 = G__23513;
i__23490_23497 = G__23514;
continue;
}
} else {
}
}
break;
}

return promesa.core.then.call(null,bench.graph.run_async.call(null),(function (results){
bench.graph.report_BANG_.call(null,results);

return process.exit((0));
}));
}));

(bench.main._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bench.main._main.cljs$lang$applyTo = (function (seq23486){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23486));
}));

(cljs.core._STAR_main_cli_fn_STAR_ = bench.main._main);

//# sourceMappingURL=main.js.map
