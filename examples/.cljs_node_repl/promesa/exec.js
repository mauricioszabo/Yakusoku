// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('promesa.exec');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('promesa.util');
goog.require('goog.object');
goog.scope(function(){
promesa.exec.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_scheduler !== 'undefined')){
} else {
promesa.exec.default_scheduler = (new cljs.core.Delay((function (){
return promesa.exec.__GT_ScheduledExecutor.call(null);
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_executor !== 'undefined')){
} else {
promesa.exec.default_executor = (new cljs.core.Delay((function (){
return promesa.exec.__GT_MicrotaskExecutor.call(null);
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.current_thread_executor !== 'undefined')){
} else {
promesa.exec.current_thread_executor = (new cljs.core.Delay((function (){
return promesa.exec.__GT_CurrentThreadExecutor.call(null);
}),null));
}
promesa.exec.resolve_executor = (function promesa$exec$resolve_executor(var_args){
var G__17960 = arguments.length;
switch (G__17960) {
case 0:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.delay_QMARK_.call(null,promesa.exec.default_executor)){
return cljs.core.deref.call(null,promesa.exec.default_executor);
} else {
return promesa.exec.default_executor;
}
}));

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1 = (function (executor){
if(cljs.core.delay_QMARK_.call(null,executor)){
return cljs.core.deref.call(null,executor);
} else {
return executor;
}
}));

(promesa.exec.resolve_executor.cljs$lang$maxFixedArity = 1);

promesa.exec.resolve_scheduler = (function promesa$exec$resolve_scheduler(var_args){
var G__17963 = arguments.length;
switch (G__17963) {
case 0:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.delay_QMARK_.call(null,promesa.exec.default_scheduler)){
return cljs.core.deref.call(null,promesa.exec.default_scheduler);
} else {
return promesa.exec.default_scheduler;
}
}));

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1 = (function (scheduler){
if(cljs.core.delay_QMARK_.call(null,scheduler)){
return cljs.core.deref.call(null,scheduler);
} else {
return scheduler;
}
}));

(promesa.exec.resolve_scheduler.cljs$lang$maxFixedArity = 1);

/**
 * Run the task in the provided executor.
 */
promesa.exec.run_BANG_ = (function promesa$exec$run_BANG_(var_args){
var G__17966 = arguments.length;
switch (G__17966) {
case 1:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (task){
return promesa.protocols._run_BANG_.call(null,promesa.exec.resolve_executor.call(null),task);
}));

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,task){
return promesa.protocols._run_BANG_.call(null,promesa.exec.resolve_executor.call(null,executor),task);
}));

(promesa.exec.run_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Submit a task to be executed in a provided executor
 *   and return a promise that will be completed with
 *   the return value of a task.
 * 
 *   A task is a plain clojure function.
 */
promesa.exec.submit_BANG_ = (function promesa$exec$submit_BANG_(var_args){
var G__17969 = arguments.length;
switch (G__17969) {
case 1:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (task){
return promesa.protocols._submit_BANG_.call(null,promesa.exec.resolve_executor.call(null),task);
}));

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,task){
return promesa.protocols._submit_BANG_.call(null,promesa.exec.resolve_executor.call(null,executor),task);
}));

(promesa.exec.submit_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.exec.schedule_BANG_ = (function promesa$exec$schedule_BANG_(var_args){
var G__17972 = arguments.length;
switch (G__17972) {
case 2:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ms,task){
return promesa.protocols._schedule_BANG_.call(null,promesa.exec.resolve_scheduler.call(null),ms,task);
}));

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,task){
return promesa.protocols._schedule_BANG_.call(null,promesa.exec.resolve_scheduler.call(null,scheduler),ms,task);
}));

(promesa.exec.schedule_BANG_.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
*/
promesa.exec.MicrotaskExecutor = (function (){
});
(promesa.exec.MicrotaskExecutor.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.MicrotaskExecutor.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._mapErr.call(null,promesa.protocols._map.call(null,promesa.protocols._promise.call(null,null),(function (_){
f.call(null);

return null;
})),(function (e){
setTimeout((function (){
throw e;
}));

return null;
}));
}));

(promesa.exec.MicrotaskExecutor.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._mapErr.call(null,promesa.protocols._map.call(null,promesa.protocols._promise.call(null,null),(function (_){
return f.call(null);
})),(function (e){
setTimeout((function (){
throw e;
}));

return null;
}));
}));

(promesa.exec.MicrotaskExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.MicrotaskExecutor.cljs$lang$type = true);

(promesa.exec.MicrotaskExecutor.cljs$lang$ctorStr = "promesa.exec/MicrotaskExecutor");

(promesa.exec.MicrotaskExecutor.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"promesa.exec/MicrotaskExecutor");
}));

/**
 * Positional factory function for promesa.exec/MicrotaskExecutor.
 */
promesa.exec.__GT_MicrotaskExecutor = (function promesa$exec$__GT_MicrotaskExecutor(){
return (new promesa.exec.MicrotaskExecutor());
});


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
*/
promesa.exec.CurrentThreadExecutor = (function (){
});
(promesa.exec.CurrentThreadExecutor.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.CurrentThreadExecutor.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
f.call(null);

return promesa.protocols._promise.call(null,null);
}));

(promesa.exec.CurrentThreadExecutor.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._promise.call(null,f.call(null));
}));

(promesa.exec.CurrentThreadExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.CurrentThreadExecutor.cljs$lang$type = true);

(promesa.exec.CurrentThreadExecutor.cljs$lang$ctorStr = "promesa.exec/CurrentThreadExecutor");

(promesa.exec.CurrentThreadExecutor.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"promesa.exec/CurrentThreadExecutor");
}));

/**
 * Positional factory function for promesa.exec/CurrentThreadExecutor.
 */
promesa.exec.__GT_CurrentThreadExecutor = (function promesa$exec$__GT_CurrentThreadExecutor(){
return (new promesa.exec.CurrentThreadExecutor());
});


/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {promesa.protocols.ICancellable}
*/
promesa.exec.ScheduledTask = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(promesa.exec.ScheduledTask.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var done_iref = promesa.exec.goog$module$goog$object.get.call(null,self__.state,"done");
return cljs.core.deref.call(null,done_iref);
}));

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return promesa.exec.goog$module$goog$object.get.call(null,self__.state,"cancelled");
}));

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
if(cljs.core.truth_(promesa.protocols._cancelled_QMARK_.call(null,self__$1))){
return null;
} else {
var cancel_fn = promesa.exec.goog$module$goog$object.get.call(null,self__.state,"cancel-fn");
promesa.exec.goog$module$goog$object.set.call(null,self__.state,"cancelled",true);

return cancel_fn.call(null);
}
}));

(promesa.exec.ScheduledTask.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(promesa.exec.ScheduledTask.cljs$lang$type = true);

(promesa.exec.ScheduledTask.cljs$lang$ctorStr = "promesa.exec/ScheduledTask");

(promesa.exec.ScheduledTask.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"promesa.exec/ScheduledTask");
}));

/**
 * Positional factory function for promesa.exec/ScheduledTask.
 */
promesa.exec.__GT_ScheduledTask = (function promesa$exec$__GT_ScheduledTask(state){
return (new promesa.exec.ScheduledTask(state));
});


/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
*/
promesa.exec.ScheduledExecutor = (function (){
});
(promesa.exec.ScheduledExecutor.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.ScheduledExecutor.prototype.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 = (function (_,ms,f){
var self__ = this;
var ___$1 = this;
var done = cljs.core.volatile_BANG_.call(null,false);
var task = (function (){
try{return f.call(null);
}finally {cljs.core.vreset_BANG_.call(null,done,true);
}});
var tid = setTimeout(task,ms);
var cancel = (function (){
return clearTimeout(tid);
});
return promesa.exec.__GT_ScheduledTask.call(null,({"done": done, "cancelled": false, "cancel-fn": cancel}));
}));

(promesa.exec.ScheduledExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.ScheduledExecutor.cljs$lang$type = true);

(promesa.exec.ScheduledExecutor.cljs$lang$ctorStr = "promesa.exec/ScheduledExecutor");

(promesa.exec.ScheduledExecutor.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"promesa.exec/ScheduledExecutor");
}));

/**
 * Positional factory function for promesa.exec/ScheduledExecutor.
 */
promesa.exec.__GT_ScheduledExecutor = (function promesa$exec$__GT_ScheduledExecutor(){
return (new promesa.exec.ScheduledExecutor());
});

var ret__5781__auto___17978 = (function (){
/**
 * Helper marcro for dispatch execution of the body to an executor
 *   service.
 */
promesa.exec.with_dispatch = (function promesa$exec$with_dispatch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17979 = arguments.length;
var i__5727__auto___17980 = (0);
while(true){
if((i__5727__auto___17980 < len__5726__auto___17979)){
args__5732__auto__.push((arguments[i__5727__auto___17980]));

var G__17981 = (i__5727__auto___17980 + (1));
i__5727__auto___17980 = G__17981;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return promesa.exec.with_dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(promesa.exec.with_dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,executor,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","submit!","promesa.exec/submit!",1325930091,null),null,(1),null)),(new cljs.core.List(null,executor,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.with_meta(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"once","once",-262568523),true], null)),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/root/.cljs/.aot_cache/1.11.132/7C84972/promesa/exec.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,337,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,31,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,337,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,34,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"once","once",-262568523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(promesa.exec.with_dispatch.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.exec.with_dispatch.cljs$lang$applyTo = (function (seq17974){
var G__17975 = cljs.core.first.call(null,seq17974);
var seq17974__$1 = cljs.core.next.call(null,seq17974);
var G__17976 = cljs.core.first.call(null,seq17974__$1);
var seq17974__$2 = cljs.core.next.call(null,seq17974__$1);
var G__17977 = cljs.core.first.call(null,seq17974__$2);
var seq17974__$3 = cljs.core.next.call(null,seq17974__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17975,G__17976,G__17977,seq17974__$3);
}));

return null;
})()
;
(promesa.exec.with_dispatch.cljs$lang$macro = true);


//# sourceMappingURL=exec.js.map
