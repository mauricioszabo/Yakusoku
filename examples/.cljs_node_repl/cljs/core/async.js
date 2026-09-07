// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__4988 = arguments.length;
switch (G__4988) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4989 = (function (f,blockable,meta4990){
this.f = f;
this.blockable = blockable;
this.meta4990 = meta4990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4991,meta4990__$1){
var self__ = this;
var _4991__$1 = this;
return (new cljs.core.async.t_cljs$core$async4989(self__.f,self__.blockable,meta4990__$1));
}));

(cljs.core.async.t_cljs$core$async4989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4991){
var self__ = this;
var _4991__$1 = this;
return self__.meta4990;
}));

(cljs.core.async.t_cljs$core$async4989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async4989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async4989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async4989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta4990","meta4990",1186867087,null)], null);
}));

(cljs.core.async.t_cljs$core$async4989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4989");

(cljs.core.async.t_cljs$core$async4989.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async4989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4989.
 */
cljs.core.async.__GT_t_cljs$core$async4989 = (function cljs$core$async$__GT_t_cljs$core$async4989(f__$1,blockable__$1,meta4990){
return (new cljs.core.async.t_cljs$core$async4989(f__$1,blockable__$1,meta4990));
});

}

return (new cljs.core.async.t_cljs$core$async4989(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__4995 = arguments.length;
switch (G__4995) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__4998 = arguments.length;
switch (G__4998) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__5001 = arguments.length;
switch (G__5001) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_5003 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_5003);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_5003);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__5005 = arguments.length;
switch (G__5005) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___5007 = n;
var x_5008 = (0);
while(true){
if((x_5008 < n__5593__auto___5007)){
(a[x_5008] = x_5008);

var G__5009 = (x_5008 + (1));
x_5008 = G__5009;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5010 = (function (flag,meta5011){
this.flag = flag;
this.meta5011 = meta5011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5012,meta5011__$1){
var self__ = this;
var _5012__$1 = this;
return (new cljs.core.async.t_cljs$core$async5010(self__.flag,meta5011__$1));
}));

(cljs.core.async.t_cljs$core$async5010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5012){
var self__ = this;
var _5012__$1 = this;
return self__.meta5011;
}));

(cljs.core.async.t_cljs$core$async5010.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async5010.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async5010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta5011","meta5011",-1686040169,null)], null);
}));

(cljs.core.async.t_cljs$core$async5010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5010");

(cljs.core.async.t_cljs$core$async5010.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async5010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5010.
 */
cljs.core.async.__GT_t_cljs$core$async5010 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async5010(flag__$1,meta5011){
return (new cljs.core.async.t_cljs$core$async5010(flag__$1,meta5011));
});

}

return (new cljs.core.async.t_cljs$core$async5010(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5013 = (function (flag,cb,meta5014){
this.flag = flag;
this.cb = cb;
this.meta5014 = meta5014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5015,meta5014__$1){
var self__ = this;
var _5015__$1 = this;
return (new cljs.core.async.t_cljs$core$async5013(self__.flag,self__.cb,meta5014__$1));
}));

(cljs.core.async.t_cljs$core$async5013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5015){
var self__ = this;
var _5015__$1 = this;
return self__.meta5014;
}));

(cljs.core.async.t_cljs$core$async5013.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async5013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async5013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta5014","meta5014",-1135847455,null)], null);
}));

(cljs.core.async.t_cljs$core$async5013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5013");

(cljs.core.async.t_cljs$core$async5013.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async5013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5013.
 */
cljs.core.async.__GT_t_cljs$core$async5013 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async5013(flag__$1,cb__$1,meta5014){
return (new cljs.core.async.t_cljs$core$async5013(flag__$1,cb__$1,meta5014));
});

}

return (new cljs.core.async.t_cljs$core$async5013(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__5016_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5016_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__5017_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5017_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__5018 = (i + (1));
i = G__5018;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___5023 = arguments.length;
var i__5727__auto___5024 = (0);
while(true){
if((i__5727__auto___5024 < len__5726__auto___5023)){
args__5732__auto__.push((arguments[i__5727__auto___5024]));

var G__5025 = (i__5727__auto___5024 + (1));
i__5727__auto___5024 = G__5025;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__5021){
var map__5022 = p__5021;
var map__5022__$1 = cljs.core.__destructure_map.call(null,map__5022);
var opts = map__5022__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq5019){
var G__5020 = cljs.core.first.call(null,seq5019);
var seq5019__$1 = cljs.core.next.call(null,seq5019);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5020,seq5019__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__5027 = arguments.length;
switch (G__5027) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__4928__auto___5074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5051){
var state_val_5052 = (state_5051[(1)]);
if((state_val_5052 === (7))){
var inst_5047 = (state_5051[(2)]);
var state_5051__$1 = state_5051;
var statearr_5053_5075 = state_5051__$1;
(statearr_5053_5075[(2)] = inst_5047);

(statearr_5053_5075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (1))){
var state_5051__$1 = state_5051;
var statearr_5054_5076 = state_5051__$1;
(statearr_5054_5076[(2)] = null);

(statearr_5054_5076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (4))){
var inst_5030 = (state_5051[(7)]);
var inst_5030__$1 = (state_5051[(2)]);
var inst_5031 = (inst_5030__$1 == null);
var state_5051__$1 = (function (){var statearr_5055 = state_5051;
(statearr_5055[(7)] = inst_5030__$1);

return statearr_5055;
})();
if(cljs.core.truth_(inst_5031)){
var statearr_5056_5077 = state_5051__$1;
(statearr_5056_5077[(1)] = (5));

} else {
var statearr_5057_5078 = state_5051__$1;
(statearr_5057_5078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (13))){
var state_5051__$1 = state_5051;
var statearr_5058_5079 = state_5051__$1;
(statearr_5058_5079[(2)] = null);

(statearr_5058_5079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (6))){
var inst_5030 = (state_5051[(7)]);
var state_5051__$1 = state_5051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5051__$1,(11),to,inst_5030);
} else {
if((state_val_5052 === (3))){
var inst_5049 = (state_5051[(2)]);
var state_5051__$1 = state_5051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5051__$1,inst_5049);
} else {
if((state_val_5052 === (12))){
var state_5051__$1 = state_5051;
var statearr_5059_5080 = state_5051__$1;
(statearr_5059_5080[(2)] = null);

(statearr_5059_5080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (2))){
var state_5051__$1 = state_5051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5051__$1,(4),from);
} else {
if((state_val_5052 === (11))){
var inst_5040 = (state_5051[(2)]);
var state_5051__$1 = state_5051;
if(cljs.core.truth_(inst_5040)){
var statearr_5060_5081 = state_5051__$1;
(statearr_5060_5081[(1)] = (12));

} else {
var statearr_5061_5082 = state_5051__$1;
(statearr_5061_5082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (9))){
var state_5051__$1 = state_5051;
var statearr_5062_5083 = state_5051__$1;
(statearr_5062_5083[(2)] = null);

(statearr_5062_5083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (5))){
var state_5051__$1 = state_5051;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5063_5084 = state_5051__$1;
(statearr_5063_5084[(1)] = (8));

} else {
var statearr_5064_5085 = state_5051__$1;
(statearr_5064_5085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (14))){
var inst_5045 = (state_5051[(2)]);
var state_5051__$1 = state_5051;
var statearr_5065_5086 = state_5051__$1;
(statearr_5065_5086[(2)] = inst_5045);

(statearr_5065_5086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (10))){
var inst_5037 = (state_5051[(2)]);
var state_5051__$1 = state_5051;
var statearr_5066_5087 = state_5051__$1;
(statearr_5066_5087[(2)] = inst_5037);

(statearr_5066_5087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5052 === (8))){
var inst_5034 = cljs.core.async.close_BANG_.call(null,to);
var state_5051__$1 = state_5051;
var statearr_5067_5088 = state_5051__$1;
(statearr_5067_5088[(2)] = inst_5034);

(statearr_5067_5088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_5068 = [null,null,null,null,null,null,null,null];
(statearr_5068[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_5068[(1)] = (1));

return statearr_5068;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_5051){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5069){var ex__4858__auto__ = e5069;
var statearr_5070_5089 = state_5051;
(statearr_5070_5089[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5051[(4)]))){
var statearr_5071_5090 = state_5051;
(statearr_5071_5090[(1)] = cljs.core.first.call(null,(state_5051[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5091 = state_5051;
state_5051 = G__5091;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_5051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_5051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5072 = f__4929__auto__.call(null);
(statearr_5072[(6)] = c__4928__auto___5074);

return statearr_5072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__5092){
var vec__5093 = p__5092;
var v = cljs.core.nth.call(null,vec__5093,(0),null);
var p = cljs.core.nth.call(null,vec__5093,(1),null);
var job = vec__5093;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__4928__auto___5269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5100){
var state_val_5101 = (state_5100[(1)]);
if((state_val_5101 === (1))){
var state_5100__$1 = state_5100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5100__$1,(2),res,v);
} else {
if((state_val_5101 === (2))){
var inst_5097 = (state_5100[(2)]);
var inst_5098 = cljs.core.async.close_BANG_.call(null,res);
var state_5100__$1 = (function (){var statearr_5102 = state_5100;
(statearr_5102[(7)] = inst_5097);

return statearr_5102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5100__$1,inst_5098);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0 = (function (){
var statearr_5103 = [null,null,null,null,null,null,null,null];
(statearr_5103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__);

(statearr_5103[(1)] = (1));

return statearr_5103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1 = (function (state_5100){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5104){var ex__4858__auto__ = e5104;
var statearr_5105_5270 = state_5100;
(statearr_5105_5270[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5100[(4)]))){
var statearr_5106_5271 = state_5100;
(statearr_5106_5271[(1)] = cljs.core.first.call(null,(state_5100[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5272 = state_5100;
state_5100 = G__5272;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = function(state_5100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1.call(this,state_5100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5107 = f__4929__auto__.call(null);
(statearr_5107[(6)] = c__4928__auto___5269);

return statearr_5107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__5108){
var vec__5109 = p__5108;
var v = cljs.core.nth.call(null,vec__5109,(0),null);
var p = cljs.core.nth.call(null,vec__5109,(1),null);
var job = vec__5109;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5593__auto___5273 = n;
var __5274 = (0);
while(true){
if((__5274 < n__5593__auto___5273)){
var G__5112_5275 = type;
var G__5112_5276__$1 = (((G__5112_5275 instanceof cljs.core.Keyword))?G__5112_5275.fqn:null);
switch (G__5112_5276__$1) {
case "compute":
var c__4928__auto___5278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__5274,c__4928__auto___5278,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async){
return (function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = ((function (__5274,c__4928__auto___5278,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async){
return (function (state_5125){
var state_val_5126 = (state_5125[(1)]);
if((state_val_5126 === (1))){
var state_5125__$1 = state_5125;
var statearr_5127_5279 = state_5125__$1;
(statearr_5127_5279[(2)] = null);

(statearr_5127_5279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (2))){
var state_5125__$1 = state_5125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5125__$1,(4),jobs);
} else {
if((state_val_5126 === (3))){
var inst_5123 = (state_5125[(2)]);
var state_5125__$1 = state_5125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5125__$1,inst_5123);
} else {
if((state_val_5126 === (4))){
var inst_5115 = (state_5125[(2)]);
var inst_5116 = process__$1.call(null,inst_5115);
var state_5125__$1 = state_5125;
if(cljs.core.truth_(inst_5116)){
var statearr_5128_5280 = state_5125__$1;
(statearr_5128_5280[(1)] = (5));

} else {
var statearr_5129_5281 = state_5125__$1;
(statearr_5129_5281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (5))){
var state_5125__$1 = state_5125;
var statearr_5130_5282 = state_5125__$1;
(statearr_5130_5282[(2)] = null);

(statearr_5130_5282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (6))){
var state_5125__$1 = state_5125;
var statearr_5131_5283 = state_5125__$1;
(statearr_5131_5283[(2)] = null);

(statearr_5131_5283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5126 === (7))){
var inst_5121 = (state_5125[(2)]);
var state_5125__$1 = state_5125;
var statearr_5132_5284 = state_5125__$1;
(statearr_5132_5284[(2)] = inst_5121);

(statearr_5132_5284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__5274,c__4928__auto___5278,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async))
;
return ((function (__5274,switch__4854__auto__,c__4928__auto___5278,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0 = (function (){
var statearr_5133 = [null,null,null,null,null,null,null];
(statearr_5133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__);

(statearr_5133[(1)] = (1));

return statearr_5133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1 = (function (state_5125){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5134){var ex__4858__auto__ = e5134;
var statearr_5135_5285 = state_5125;
(statearr_5135_5285[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5125[(4)]))){
var statearr_5136_5286 = state_5125;
(statearr_5136_5286[(1)] = cljs.core.first.call(null,(state_5125[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5287 = state_5125;
state_5125 = G__5287;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = function(state_5125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1.call(this,state_5125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__;
})()
;})(__5274,switch__4854__auto__,c__4928__auto___5278,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async))
})();
var state__4930__auto__ = (function (){var statearr_5137 = f__4929__auto__.call(null);
(statearr_5137[(6)] = c__4928__auto___5278);

return statearr_5137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
});})(__5274,c__4928__auto___5278,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async))
);


break;
case "async":
var c__4928__auto___5288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__5274,c__4928__auto___5288,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async){
return (function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = ((function (__5274,c__4928__auto___5288,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async){
return (function (state_5150){
var state_val_5151 = (state_5150[(1)]);
if((state_val_5151 === (1))){
var state_5150__$1 = state_5150;
var statearr_5152_5289 = state_5150__$1;
(statearr_5152_5289[(2)] = null);

(statearr_5152_5289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5151 === (2))){
var state_5150__$1 = state_5150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5150__$1,(4),jobs);
} else {
if((state_val_5151 === (3))){
var inst_5148 = (state_5150[(2)]);
var state_5150__$1 = state_5150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5150__$1,inst_5148);
} else {
if((state_val_5151 === (4))){
var inst_5140 = (state_5150[(2)]);
var inst_5141 = async.call(null,inst_5140);
var state_5150__$1 = state_5150;
if(cljs.core.truth_(inst_5141)){
var statearr_5153_5290 = state_5150__$1;
(statearr_5153_5290[(1)] = (5));

} else {
var statearr_5154_5291 = state_5150__$1;
(statearr_5154_5291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5151 === (5))){
var state_5150__$1 = state_5150;
var statearr_5155_5292 = state_5150__$1;
(statearr_5155_5292[(2)] = null);

(statearr_5155_5292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5151 === (6))){
var state_5150__$1 = state_5150;
var statearr_5156_5293 = state_5150__$1;
(statearr_5156_5293[(2)] = null);

(statearr_5156_5293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5151 === (7))){
var inst_5146 = (state_5150[(2)]);
var state_5150__$1 = state_5150;
var statearr_5157_5294 = state_5150__$1;
(statearr_5157_5294[(2)] = inst_5146);

(statearr_5157_5294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__5274,c__4928__auto___5288,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async))
;
return ((function (__5274,switch__4854__auto__,c__4928__auto___5288,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0 = (function (){
var statearr_5158 = [null,null,null,null,null,null,null];
(statearr_5158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__);

(statearr_5158[(1)] = (1));

return statearr_5158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1 = (function (state_5150){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5159){var ex__4858__auto__ = e5159;
var statearr_5160_5295 = state_5150;
(statearr_5160_5295[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5150[(4)]))){
var statearr_5161_5296 = state_5150;
(statearr_5161_5296[(1)] = cljs.core.first.call(null,(state_5150[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5297 = state_5150;
state_5150 = G__5297;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = function(state_5150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1.call(this,state_5150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__;
})()
;})(__5274,switch__4854__auto__,c__4928__auto___5288,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async))
})();
var state__4930__auto__ = (function (){var statearr_5162 = f__4929__auto__.call(null);
(statearr_5162[(6)] = c__4928__auto___5288);

return statearr_5162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
});})(__5274,c__4928__auto___5288,G__5112_5275,G__5112_5276__$1,n__5593__auto___5273,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5112_5276__$1)].join('')));

}

var G__5298 = (__5274 + (1));
__5274 = G__5298;
continue;
} else {
}
break;
}

var c__4928__auto___5299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5184){
var state_val_5185 = (state_5184[(1)]);
if((state_val_5185 === (7))){
var inst_5180 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
var statearr_5186_5300 = state_5184__$1;
(statearr_5186_5300[(2)] = inst_5180);

(statearr_5186_5300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (1))){
var state_5184__$1 = state_5184;
var statearr_5187_5301 = state_5184__$1;
(statearr_5187_5301[(2)] = null);

(statearr_5187_5301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (4))){
var inst_5165 = (state_5184[(7)]);
var inst_5165__$1 = (state_5184[(2)]);
var inst_5166 = (inst_5165__$1 == null);
var state_5184__$1 = (function (){var statearr_5188 = state_5184;
(statearr_5188[(7)] = inst_5165__$1);

return statearr_5188;
})();
if(cljs.core.truth_(inst_5166)){
var statearr_5189_5302 = state_5184__$1;
(statearr_5189_5302[(1)] = (5));

} else {
var statearr_5190_5303 = state_5184__$1;
(statearr_5190_5303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (6))){
var inst_5165 = (state_5184[(7)]);
var inst_5170 = (state_5184[(8)]);
var inst_5170__$1 = cljs.core.async.chan.call(null,(1));
var inst_5171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5172 = [inst_5165,inst_5170__$1];
var inst_5173 = (new cljs.core.PersistentVector(null,2,(5),inst_5171,inst_5172,null));
var state_5184__$1 = (function (){var statearr_5191 = state_5184;
(statearr_5191[(8)] = inst_5170__$1);

return statearr_5191;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5184__$1,(8),jobs,inst_5173);
} else {
if((state_val_5185 === (3))){
var inst_5182 = (state_5184[(2)]);
var state_5184__$1 = state_5184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5184__$1,inst_5182);
} else {
if((state_val_5185 === (2))){
var state_5184__$1 = state_5184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5184__$1,(4),from);
} else {
if((state_val_5185 === (9))){
var inst_5177 = (state_5184[(2)]);
var state_5184__$1 = (function (){var statearr_5192 = state_5184;
(statearr_5192[(9)] = inst_5177);

return statearr_5192;
})();
var statearr_5193_5304 = state_5184__$1;
(statearr_5193_5304[(2)] = null);

(statearr_5193_5304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (5))){
var inst_5168 = cljs.core.async.close_BANG_.call(null,jobs);
var state_5184__$1 = state_5184;
var statearr_5194_5305 = state_5184__$1;
(statearr_5194_5305[(2)] = inst_5168);

(statearr_5194_5305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5185 === (8))){
var inst_5170 = (state_5184[(8)]);
var inst_5175 = (state_5184[(2)]);
var state_5184__$1 = (function (){var statearr_5195 = state_5184;
(statearr_5195[(10)] = inst_5175);

return statearr_5195;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5184__$1,(9),results,inst_5170);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0 = (function (){
var statearr_5196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__);

(statearr_5196[(1)] = (1));

return statearr_5196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1 = (function (state_5184){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5197){var ex__4858__auto__ = e5197;
var statearr_5198_5306 = state_5184;
(statearr_5198_5306[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5184[(4)]))){
var statearr_5199_5307 = state_5184;
(statearr_5199_5307[(1)] = cljs.core.first.call(null,(state_5184[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5308 = state_5184;
state_5184 = G__5308;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = function(state_5184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1.call(this,state_5184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5200 = f__4929__auto__.call(null);
(statearr_5200[(6)] = c__4928__auto___5299);

return statearr_5200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


var c__4928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5238){
var state_val_5239 = (state_5238[(1)]);
if((state_val_5239 === (7))){
var inst_5234 = (state_5238[(2)]);
var state_5238__$1 = state_5238;
var statearr_5240_5309 = state_5238__$1;
(statearr_5240_5309[(2)] = inst_5234);

(statearr_5240_5309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (20))){
var state_5238__$1 = state_5238;
var statearr_5241_5310 = state_5238__$1;
(statearr_5241_5310[(2)] = null);

(statearr_5241_5310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (1))){
var state_5238__$1 = state_5238;
var statearr_5242_5311 = state_5238__$1;
(statearr_5242_5311[(2)] = null);

(statearr_5242_5311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (4))){
var inst_5203 = (state_5238[(7)]);
var inst_5203__$1 = (state_5238[(2)]);
var inst_5204 = (inst_5203__$1 == null);
var state_5238__$1 = (function (){var statearr_5243 = state_5238;
(statearr_5243[(7)] = inst_5203__$1);

return statearr_5243;
})();
if(cljs.core.truth_(inst_5204)){
var statearr_5244_5312 = state_5238__$1;
(statearr_5244_5312[(1)] = (5));

} else {
var statearr_5245_5313 = state_5238__$1;
(statearr_5245_5313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (15))){
var inst_5216 = (state_5238[(8)]);
var state_5238__$1 = state_5238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5238__$1,(18),to,inst_5216);
} else {
if((state_val_5239 === (21))){
var inst_5229 = (state_5238[(2)]);
var state_5238__$1 = state_5238;
var statearr_5246_5314 = state_5238__$1;
(statearr_5246_5314[(2)] = inst_5229);

(statearr_5246_5314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (13))){
var inst_5231 = (state_5238[(2)]);
var state_5238__$1 = (function (){var statearr_5247 = state_5238;
(statearr_5247[(9)] = inst_5231);

return statearr_5247;
})();
var statearr_5248_5315 = state_5238__$1;
(statearr_5248_5315[(2)] = null);

(statearr_5248_5315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (6))){
var inst_5203 = (state_5238[(7)]);
var state_5238__$1 = state_5238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5238__$1,(11),inst_5203);
} else {
if((state_val_5239 === (17))){
var inst_5224 = (state_5238[(2)]);
var state_5238__$1 = state_5238;
if(cljs.core.truth_(inst_5224)){
var statearr_5249_5316 = state_5238__$1;
(statearr_5249_5316[(1)] = (19));

} else {
var statearr_5250_5317 = state_5238__$1;
(statearr_5250_5317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (3))){
var inst_5236 = (state_5238[(2)]);
var state_5238__$1 = state_5238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5238__$1,inst_5236);
} else {
if((state_val_5239 === (12))){
var inst_5213 = (state_5238[(10)]);
var state_5238__$1 = state_5238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5238__$1,(14),inst_5213);
} else {
if((state_val_5239 === (2))){
var state_5238__$1 = state_5238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5238__$1,(4),results);
} else {
if((state_val_5239 === (19))){
var state_5238__$1 = state_5238;
var statearr_5251_5318 = state_5238__$1;
(statearr_5251_5318[(2)] = null);

(statearr_5251_5318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (11))){
var inst_5213 = (state_5238[(2)]);
var state_5238__$1 = (function (){var statearr_5252 = state_5238;
(statearr_5252[(10)] = inst_5213);

return statearr_5252;
})();
var statearr_5253_5319 = state_5238__$1;
(statearr_5253_5319[(2)] = null);

(statearr_5253_5319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (9))){
var state_5238__$1 = state_5238;
var statearr_5254_5320 = state_5238__$1;
(statearr_5254_5320[(2)] = null);

(statearr_5254_5320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (5))){
var state_5238__$1 = state_5238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5255_5321 = state_5238__$1;
(statearr_5255_5321[(1)] = (8));

} else {
var statearr_5256_5322 = state_5238__$1;
(statearr_5256_5322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (14))){
var inst_5216 = (state_5238[(8)]);
var inst_5218 = (state_5238[(11)]);
var inst_5216__$1 = (state_5238[(2)]);
var inst_5217 = (inst_5216__$1 == null);
var inst_5218__$1 = cljs.core.not.call(null,inst_5217);
var state_5238__$1 = (function (){var statearr_5257 = state_5238;
(statearr_5257[(8)] = inst_5216__$1);

(statearr_5257[(11)] = inst_5218__$1);

return statearr_5257;
})();
if(inst_5218__$1){
var statearr_5258_5323 = state_5238__$1;
(statearr_5258_5323[(1)] = (15));

} else {
var statearr_5259_5324 = state_5238__$1;
(statearr_5259_5324[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (16))){
var inst_5218 = (state_5238[(11)]);
var state_5238__$1 = state_5238;
var statearr_5260_5325 = state_5238__$1;
(statearr_5260_5325[(2)] = inst_5218);

(statearr_5260_5325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (10))){
var inst_5210 = (state_5238[(2)]);
var state_5238__$1 = state_5238;
var statearr_5261_5326 = state_5238__$1;
(statearr_5261_5326[(2)] = inst_5210);

(statearr_5261_5326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (18))){
var inst_5221 = (state_5238[(2)]);
var state_5238__$1 = state_5238;
var statearr_5262_5327 = state_5238__$1;
(statearr_5262_5327[(2)] = inst_5221);

(statearr_5262_5327[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5239 === (8))){
var inst_5207 = cljs.core.async.close_BANG_.call(null,to);
var state_5238__$1 = state_5238;
var statearr_5263_5328 = state_5238__$1;
(statearr_5263_5328[(2)] = inst_5207);

(statearr_5263_5328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0 = (function (){
var statearr_5264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__);

(statearr_5264[(1)] = (1));

return statearr_5264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1 = (function (state_5238){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5265){var ex__4858__auto__ = e5265;
var statearr_5266_5329 = state_5238;
(statearr_5266_5329[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5238[(4)]))){
var statearr_5267_5330 = state_5238;
(statearr_5267_5330[(1)] = cljs.core.first.call(null,(state_5238[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5331 = state_5238;
state_5238 = G__5331;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__ = function(state_5238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1.call(this,state_5238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5268 = f__4929__auto__.call(null);
(statearr_5268[(6)] = c__4928__auto__);

return statearr_5268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));

return c__4928__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__5333 = arguments.length;
switch (G__5333) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__5336 = arguments.length;
switch (G__5336) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__5339 = arguments.length;
switch (G__5339) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__4928__auto___5389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5365){
var state_val_5366 = (state_5365[(1)]);
if((state_val_5366 === (7))){
var inst_5361 = (state_5365[(2)]);
var state_5365__$1 = state_5365;
var statearr_5367_5390 = state_5365__$1;
(statearr_5367_5390[(2)] = inst_5361);

(statearr_5367_5390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (1))){
var state_5365__$1 = state_5365;
var statearr_5368_5391 = state_5365__$1;
(statearr_5368_5391[(2)] = null);

(statearr_5368_5391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (4))){
var inst_5342 = (state_5365[(7)]);
var inst_5342__$1 = (state_5365[(2)]);
var inst_5343 = (inst_5342__$1 == null);
var state_5365__$1 = (function (){var statearr_5369 = state_5365;
(statearr_5369[(7)] = inst_5342__$1);

return statearr_5369;
})();
if(cljs.core.truth_(inst_5343)){
var statearr_5370_5392 = state_5365__$1;
(statearr_5370_5392[(1)] = (5));

} else {
var statearr_5371_5393 = state_5365__$1;
(statearr_5371_5393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (13))){
var state_5365__$1 = state_5365;
var statearr_5372_5394 = state_5365__$1;
(statearr_5372_5394[(2)] = null);

(statearr_5372_5394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (6))){
var inst_5342 = (state_5365[(7)]);
var inst_5348 = p.call(null,inst_5342);
var state_5365__$1 = state_5365;
if(cljs.core.truth_(inst_5348)){
var statearr_5373_5395 = state_5365__$1;
(statearr_5373_5395[(1)] = (9));

} else {
var statearr_5374_5396 = state_5365__$1;
(statearr_5374_5396[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (3))){
var inst_5363 = (state_5365[(2)]);
var state_5365__$1 = state_5365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5365__$1,inst_5363);
} else {
if((state_val_5366 === (12))){
var state_5365__$1 = state_5365;
var statearr_5375_5397 = state_5365__$1;
(statearr_5375_5397[(2)] = null);

(statearr_5375_5397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (2))){
var state_5365__$1 = state_5365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5365__$1,(4),ch);
} else {
if((state_val_5366 === (11))){
var inst_5342 = (state_5365[(7)]);
var inst_5352 = (state_5365[(2)]);
var state_5365__$1 = state_5365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5365__$1,(8),inst_5352,inst_5342);
} else {
if((state_val_5366 === (9))){
var state_5365__$1 = state_5365;
var statearr_5376_5398 = state_5365__$1;
(statearr_5376_5398[(2)] = tc);

(statearr_5376_5398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (5))){
var inst_5345 = cljs.core.async.close_BANG_.call(null,tc);
var inst_5346 = cljs.core.async.close_BANG_.call(null,fc);
var state_5365__$1 = (function (){var statearr_5377 = state_5365;
(statearr_5377[(8)] = inst_5345);

return statearr_5377;
})();
var statearr_5378_5399 = state_5365__$1;
(statearr_5378_5399[(2)] = inst_5346);

(statearr_5378_5399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (14))){
var inst_5359 = (state_5365[(2)]);
var state_5365__$1 = state_5365;
var statearr_5379_5400 = state_5365__$1;
(statearr_5379_5400[(2)] = inst_5359);

(statearr_5379_5400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (10))){
var state_5365__$1 = state_5365;
var statearr_5380_5401 = state_5365__$1;
(statearr_5380_5401[(2)] = fc);

(statearr_5380_5401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5366 === (8))){
var inst_5354 = (state_5365[(2)]);
var state_5365__$1 = state_5365;
if(cljs.core.truth_(inst_5354)){
var statearr_5381_5402 = state_5365__$1;
(statearr_5381_5402[(1)] = (12));

} else {
var statearr_5382_5403 = state_5365__$1;
(statearr_5382_5403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_5383 = [null,null,null,null,null,null,null,null,null];
(statearr_5383[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_5383[(1)] = (1));

return statearr_5383;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_5365){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5384){var ex__4858__auto__ = e5384;
var statearr_5385_5404 = state_5365;
(statearr_5385_5404[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5365[(4)]))){
var statearr_5386_5405 = state_5365;
(statearr_5386_5405[(1)] = cljs.core.first.call(null,(state_5365[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5406 = state_5365;
state_5365 = G__5406;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_5365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_5365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5387 = f__4929__auto__.call(null);
(statearr_5387[(6)] = c__4928__auto___5389);

return statearr_5387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__4928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5428){
var state_val_5429 = (state_5428[(1)]);
if((state_val_5429 === (7))){
var inst_5424 = (state_5428[(2)]);
var state_5428__$1 = state_5428;
var statearr_5430_5449 = state_5428__$1;
(statearr_5430_5449[(2)] = inst_5424);

(statearr_5430_5449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5429 === (1))){
var inst_5407 = init;
var inst_5408 = inst_5407;
var state_5428__$1 = (function (){var statearr_5431 = state_5428;
(statearr_5431[(7)] = inst_5408);

return statearr_5431;
})();
var statearr_5432_5450 = state_5428__$1;
(statearr_5432_5450[(2)] = null);

(statearr_5432_5450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5429 === (4))){
var inst_5411 = (state_5428[(8)]);
var inst_5411__$1 = (state_5428[(2)]);
var inst_5412 = (inst_5411__$1 == null);
var state_5428__$1 = (function (){var statearr_5433 = state_5428;
(statearr_5433[(8)] = inst_5411__$1);

return statearr_5433;
})();
if(cljs.core.truth_(inst_5412)){
var statearr_5434_5451 = state_5428__$1;
(statearr_5434_5451[(1)] = (5));

} else {
var statearr_5435_5452 = state_5428__$1;
(statearr_5435_5452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5429 === (6))){
var inst_5408 = (state_5428[(7)]);
var inst_5411 = (state_5428[(8)]);
var inst_5415 = (state_5428[(9)]);
var inst_5415__$1 = f.call(null,inst_5408,inst_5411);
var inst_5416 = cljs.core.reduced_QMARK_.call(null,inst_5415__$1);
var state_5428__$1 = (function (){var statearr_5436 = state_5428;
(statearr_5436[(9)] = inst_5415__$1);

return statearr_5436;
})();
if(inst_5416){
var statearr_5437_5453 = state_5428__$1;
(statearr_5437_5453[(1)] = (8));

} else {
var statearr_5438_5454 = state_5428__$1;
(statearr_5438_5454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5429 === (3))){
var inst_5426 = (state_5428[(2)]);
var state_5428__$1 = state_5428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5428__$1,inst_5426);
} else {
if((state_val_5429 === (2))){
var state_5428__$1 = state_5428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5428__$1,(4),ch);
} else {
if((state_val_5429 === (9))){
var inst_5415 = (state_5428[(9)]);
var inst_5408 = inst_5415;
var state_5428__$1 = (function (){var statearr_5439 = state_5428;
(statearr_5439[(7)] = inst_5408);

return statearr_5439;
})();
var statearr_5440_5455 = state_5428__$1;
(statearr_5440_5455[(2)] = null);

(statearr_5440_5455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5429 === (5))){
var inst_5408 = (state_5428[(7)]);
var state_5428__$1 = state_5428;
var statearr_5441_5456 = state_5428__$1;
(statearr_5441_5456[(2)] = inst_5408);

(statearr_5441_5456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5429 === (10))){
var inst_5422 = (state_5428[(2)]);
var state_5428__$1 = state_5428;
var statearr_5442_5457 = state_5428__$1;
(statearr_5442_5457[(2)] = inst_5422);

(statearr_5442_5457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5429 === (8))){
var inst_5415 = (state_5428[(9)]);
var inst_5418 = cljs.core.deref.call(null,inst_5415);
var state_5428__$1 = state_5428;
var statearr_5443_5458 = state_5428__$1;
(statearr_5443_5458[(2)] = inst_5418);

(statearr_5443_5458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__4855__auto__ = null;
var cljs$core$async$reduce_$_state_machine__4855__auto____0 = (function (){
var statearr_5444 = [null,null,null,null,null,null,null,null,null,null];
(statearr_5444[(0)] = cljs$core$async$reduce_$_state_machine__4855__auto__);

(statearr_5444[(1)] = (1));

return statearr_5444;
});
var cljs$core$async$reduce_$_state_machine__4855__auto____1 = (function (state_5428){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5445){var ex__4858__auto__ = e5445;
var statearr_5446_5459 = state_5428;
(statearr_5446_5459[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5428[(4)]))){
var statearr_5447_5460 = state_5428;
(statearr_5447_5460[(1)] = cljs.core.first.call(null,(state_5428[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5461 = state_5428;
state_5428 = G__5461;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__4855__auto__ = function(state_5428){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__4855__auto____1.call(this,state_5428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__4855__auto____0;
cljs$core$async$reduce_$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__4855__auto____1;
return cljs$core$async$reduce_$_state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5448 = f__4929__auto__.call(null);
(statearr_5448[(6)] = c__4928__auto__);

return statearr_5448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));

return c__4928__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__4928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5467){
var state_val_5468 = (state_5467[(1)]);
if((state_val_5468 === (1))){
var inst_5462 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_5467__$1 = state_5467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5467__$1,(2),inst_5462);
} else {
if((state_val_5468 === (2))){
var inst_5464 = (state_5467[(2)]);
var inst_5465 = f__$1.call(null,inst_5464);
var state_5467__$1 = state_5467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5467__$1,inst_5465);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__4855__auto__ = null;
var cljs$core$async$transduce_$_state_machine__4855__auto____0 = (function (){
var statearr_5469 = [null,null,null,null,null,null,null];
(statearr_5469[(0)] = cljs$core$async$transduce_$_state_machine__4855__auto__);

(statearr_5469[(1)] = (1));

return statearr_5469;
});
var cljs$core$async$transduce_$_state_machine__4855__auto____1 = (function (state_5467){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5470){var ex__4858__auto__ = e5470;
var statearr_5471_5474 = state_5467;
(statearr_5471_5474[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5467[(4)]))){
var statearr_5472_5475 = state_5467;
(statearr_5472_5475[(1)] = cljs.core.first.call(null,(state_5467[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5476 = state_5467;
state_5467 = G__5476;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__4855__auto__ = function(state_5467){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__4855__auto____1.call(this,state_5467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__4855__auto____0;
cljs$core$async$transduce_$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__4855__auto____1;
return cljs$core$async$transduce_$_state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5473 = f__4929__auto__.call(null);
(statearr_5473[(6)] = c__4928__auto__);

return statearr_5473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));

return c__4928__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__5478 = arguments.length;
switch (G__5478) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__4928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5503){
var state_val_5504 = (state_5503[(1)]);
if((state_val_5504 === (7))){
var inst_5485 = (state_5503[(2)]);
var state_5503__$1 = state_5503;
var statearr_5505_5527 = state_5503__$1;
(statearr_5505_5527[(2)] = inst_5485);

(statearr_5505_5527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (1))){
var inst_5479 = cljs.core.seq.call(null,coll);
var inst_5480 = inst_5479;
var state_5503__$1 = (function (){var statearr_5506 = state_5503;
(statearr_5506[(7)] = inst_5480);

return statearr_5506;
})();
var statearr_5507_5528 = state_5503__$1;
(statearr_5507_5528[(2)] = null);

(statearr_5507_5528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (4))){
var inst_5480 = (state_5503[(7)]);
var inst_5483 = cljs.core.first.call(null,inst_5480);
var state_5503__$1 = state_5503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5503__$1,(7),ch,inst_5483);
} else {
if((state_val_5504 === (13))){
var inst_5497 = (state_5503[(2)]);
var state_5503__$1 = state_5503;
var statearr_5508_5529 = state_5503__$1;
(statearr_5508_5529[(2)] = inst_5497);

(statearr_5508_5529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (6))){
var inst_5488 = (state_5503[(2)]);
var state_5503__$1 = state_5503;
if(cljs.core.truth_(inst_5488)){
var statearr_5509_5530 = state_5503__$1;
(statearr_5509_5530[(1)] = (8));

} else {
var statearr_5510_5531 = state_5503__$1;
(statearr_5510_5531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (3))){
var inst_5501 = (state_5503[(2)]);
var state_5503__$1 = state_5503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5503__$1,inst_5501);
} else {
if((state_val_5504 === (12))){
var state_5503__$1 = state_5503;
var statearr_5511_5532 = state_5503__$1;
(statearr_5511_5532[(2)] = null);

(statearr_5511_5532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (2))){
var inst_5480 = (state_5503[(7)]);
var state_5503__$1 = state_5503;
if(cljs.core.truth_(inst_5480)){
var statearr_5512_5533 = state_5503__$1;
(statearr_5512_5533[(1)] = (4));

} else {
var statearr_5513_5534 = state_5503__$1;
(statearr_5513_5534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (11))){
var inst_5494 = cljs.core.async.close_BANG_.call(null,ch);
var state_5503__$1 = state_5503;
var statearr_5514_5535 = state_5503__$1;
(statearr_5514_5535[(2)] = inst_5494);

(statearr_5514_5535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (9))){
var state_5503__$1 = state_5503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5515_5536 = state_5503__$1;
(statearr_5515_5536[(1)] = (11));

} else {
var statearr_5516_5537 = state_5503__$1;
(statearr_5516_5537[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (5))){
var inst_5480 = (state_5503[(7)]);
var state_5503__$1 = state_5503;
var statearr_5517_5538 = state_5503__$1;
(statearr_5517_5538[(2)] = inst_5480);

(statearr_5517_5538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (10))){
var inst_5499 = (state_5503[(2)]);
var state_5503__$1 = state_5503;
var statearr_5518_5539 = state_5503__$1;
(statearr_5518_5539[(2)] = inst_5499);

(statearr_5518_5539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5504 === (8))){
var inst_5480 = (state_5503[(7)]);
var inst_5490 = cljs.core.next.call(null,inst_5480);
var inst_5480__$1 = inst_5490;
var state_5503__$1 = (function (){var statearr_5519 = state_5503;
(statearr_5519[(7)] = inst_5480__$1);

return statearr_5519;
})();
var statearr_5520_5540 = state_5503__$1;
(statearr_5520_5540[(2)] = null);

(statearr_5520_5540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_5521 = [null,null,null,null,null,null,null,null];
(statearr_5521[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_5521[(1)] = (1));

return statearr_5521;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_5503){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5522){var ex__4858__auto__ = e5522;
var statearr_5523_5541 = state_5503;
(statearr_5523_5541[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5503[(4)]))){
var statearr_5524_5542 = state_5503;
(statearr_5524_5542[(1)] = cljs.core.first.call(null,(state_5503[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5543 = state_5503;
state_5503 = G__5543;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_5503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_5503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5525 = f__4929__auto__.call(null);
(statearr_5525[(6)] = c__4928__auto__);

return statearr_5525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));

return c__4928__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__5545 = arguments.length;
switch (G__5545) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_5547 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_5547.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_5548 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_5548.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_5549 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_5549.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_5550 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_5550.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5551 = (function (ch,cs,meta5552){
this.ch = ch;
this.cs = cs;
this.meta5552 = meta5552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5553,meta5552__$1){
var self__ = this;
var _5553__$1 = this;
return (new cljs.core.async.t_cljs$core$async5551(self__.ch,self__.cs,meta5552__$1));
}));

(cljs.core.async.t_cljs$core$async5551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5553){
var self__ = this;
var _5553__$1 = this;
return self__.meta5552;
}));

(cljs.core.async.t_cljs$core$async5551.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async5551.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5551.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async5551.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async5551.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async5551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta5552","meta5552",-1500536923,null)], null);
}));

(cljs.core.async.t_cljs$core$async5551.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5551");

(cljs.core.async.t_cljs$core$async5551.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async5551");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5551.
 */
cljs.core.async.__GT_t_cljs$core$async5551 = (function cljs$core$async$mult_$___GT_t_cljs$core$async5551(ch__$1,cs__$1,meta5552){
return (new cljs.core.async.t_cljs$core$async5551(ch__$1,cs__$1,meta5552));
});

}

return (new cljs.core.async.t_cljs$core$async5551(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__4928__auto___5770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5686){
var state_val_5687 = (state_5686[(1)]);
if((state_val_5687 === (7))){
var inst_5682 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5688_5771 = state_5686__$1;
(statearr_5688_5771[(2)] = inst_5682);

(statearr_5688_5771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (20))){
var inst_5587 = (state_5686[(7)]);
var inst_5599 = cljs.core.first.call(null,inst_5587);
var inst_5600 = cljs.core.nth.call(null,inst_5599,(0),null);
var inst_5601 = cljs.core.nth.call(null,inst_5599,(1),null);
var state_5686__$1 = (function (){var statearr_5689 = state_5686;
(statearr_5689[(8)] = inst_5600);

return statearr_5689;
})();
if(cljs.core.truth_(inst_5601)){
var statearr_5690_5772 = state_5686__$1;
(statearr_5690_5772[(1)] = (22));

} else {
var statearr_5691_5773 = state_5686__$1;
(statearr_5691_5773[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (27))){
var inst_5629 = (state_5686[(9)]);
var inst_5631 = (state_5686[(10)]);
var inst_5636 = (state_5686[(11)]);
var inst_5556 = (state_5686[(12)]);
var inst_5636__$1 = cljs.core._nth.call(null,inst_5629,inst_5631);
var inst_5637 = cljs.core.async.put_BANG_.call(null,inst_5636__$1,inst_5556,done);
var state_5686__$1 = (function (){var statearr_5692 = state_5686;
(statearr_5692[(11)] = inst_5636__$1);

return statearr_5692;
})();
if(cljs.core.truth_(inst_5637)){
var statearr_5693_5774 = state_5686__$1;
(statearr_5693_5774[(1)] = (30));

} else {
var statearr_5694_5775 = state_5686__$1;
(statearr_5694_5775[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (1))){
var state_5686__$1 = state_5686;
var statearr_5695_5776 = state_5686__$1;
(statearr_5695_5776[(2)] = null);

(statearr_5695_5776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (24))){
var inst_5587 = (state_5686[(7)]);
var inst_5606 = (state_5686[(2)]);
var inst_5607 = cljs.core.next.call(null,inst_5587);
var inst_5565 = inst_5607;
var inst_5566 = null;
var inst_5567 = (0);
var inst_5568 = (0);
var state_5686__$1 = (function (){var statearr_5696 = state_5686;
(statearr_5696[(13)] = inst_5606);

(statearr_5696[(14)] = inst_5565);

(statearr_5696[(15)] = inst_5566);

(statearr_5696[(16)] = inst_5567);

(statearr_5696[(17)] = inst_5568);

return statearr_5696;
})();
var statearr_5697_5777 = state_5686__$1;
(statearr_5697_5777[(2)] = null);

(statearr_5697_5777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (39))){
var state_5686__$1 = state_5686;
var statearr_5701_5778 = state_5686__$1;
(statearr_5701_5778[(2)] = null);

(statearr_5701_5778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (4))){
var inst_5556 = (state_5686[(12)]);
var inst_5556__$1 = (state_5686[(2)]);
var inst_5557 = (inst_5556__$1 == null);
var state_5686__$1 = (function (){var statearr_5702 = state_5686;
(statearr_5702[(12)] = inst_5556__$1);

return statearr_5702;
})();
if(cljs.core.truth_(inst_5557)){
var statearr_5703_5779 = state_5686__$1;
(statearr_5703_5779[(1)] = (5));

} else {
var statearr_5704_5780 = state_5686__$1;
(statearr_5704_5780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (15))){
var inst_5568 = (state_5686[(17)]);
var inst_5565 = (state_5686[(14)]);
var inst_5566 = (state_5686[(15)]);
var inst_5567 = (state_5686[(16)]);
var inst_5583 = (state_5686[(2)]);
var inst_5584 = (inst_5568 + (1));
var tmp5698 = inst_5566;
var tmp5699 = inst_5567;
var tmp5700 = inst_5565;
var inst_5565__$1 = tmp5700;
var inst_5566__$1 = tmp5698;
var inst_5567__$1 = tmp5699;
var inst_5568__$1 = inst_5584;
var state_5686__$1 = (function (){var statearr_5705 = state_5686;
(statearr_5705[(18)] = inst_5583);

(statearr_5705[(14)] = inst_5565__$1);

(statearr_5705[(15)] = inst_5566__$1);

(statearr_5705[(16)] = inst_5567__$1);

(statearr_5705[(17)] = inst_5568__$1);

return statearr_5705;
})();
var statearr_5706_5781 = state_5686__$1;
(statearr_5706_5781[(2)] = null);

(statearr_5706_5781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (21))){
var inst_5610 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5710_5782 = state_5686__$1;
(statearr_5710_5782[(2)] = inst_5610);

(statearr_5710_5782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (31))){
var inst_5636 = (state_5686[(11)]);
var inst_5640 = cljs.core.async.untap_STAR_.call(null,m,inst_5636);
var state_5686__$1 = state_5686;
var statearr_5711_5783 = state_5686__$1;
(statearr_5711_5783[(2)] = inst_5640);

(statearr_5711_5783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (32))){
var inst_5631 = (state_5686[(10)]);
var inst_5628 = (state_5686[(19)]);
var inst_5629 = (state_5686[(9)]);
var inst_5630 = (state_5686[(20)]);
var inst_5642 = (state_5686[(2)]);
var inst_5643 = (inst_5631 + (1));
var tmp5707 = inst_5630;
var tmp5708 = inst_5629;
var tmp5709 = inst_5628;
var inst_5628__$1 = tmp5709;
var inst_5629__$1 = tmp5708;
var inst_5630__$1 = tmp5707;
var inst_5631__$1 = inst_5643;
var state_5686__$1 = (function (){var statearr_5712 = state_5686;
(statearr_5712[(21)] = inst_5642);

(statearr_5712[(19)] = inst_5628__$1);

(statearr_5712[(9)] = inst_5629__$1);

(statearr_5712[(20)] = inst_5630__$1);

(statearr_5712[(10)] = inst_5631__$1);

return statearr_5712;
})();
var statearr_5713_5784 = state_5686__$1;
(statearr_5713_5784[(2)] = null);

(statearr_5713_5784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (40))){
var inst_5655 = (state_5686[(22)]);
var inst_5659 = cljs.core.async.untap_STAR_.call(null,m,inst_5655);
var state_5686__$1 = state_5686;
var statearr_5714_5785 = state_5686__$1;
(statearr_5714_5785[(2)] = inst_5659);

(statearr_5714_5785[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (33))){
var inst_5646 = (state_5686[(23)]);
var inst_5648 = cljs.core.chunked_seq_QMARK_.call(null,inst_5646);
var state_5686__$1 = state_5686;
if(inst_5648){
var statearr_5715_5786 = state_5686__$1;
(statearr_5715_5786[(1)] = (36));

} else {
var statearr_5716_5787 = state_5686__$1;
(statearr_5716_5787[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (13))){
var inst_5577 = (state_5686[(24)]);
var inst_5580 = cljs.core.async.close_BANG_.call(null,inst_5577);
var state_5686__$1 = state_5686;
var statearr_5717_5788 = state_5686__$1;
(statearr_5717_5788[(2)] = inst_5580);

(statearr_5717_5788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (22))){
var inst_5600 = (state_5686[(8)]);
var inst_5603 = cljs.core.async.close_BANG_.call(null,inst_5600);
var state_5686__$1 = state_5686;
var statearr_5718_5789 = state_5686__$1;
(statearr_5718_5789[(2)] = inst_5603);

(statearr_5718_5789[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (36))){
var inst_5646 = (state_5686[(23)]);
var inst_5650 = cljs.core.chunk_first.call(null,inst_5646);
var inst_5651 = cljs.core.chunk_rest.call(null,inst_5646);
var inst_5652 = cljs.core.count.call(null,inst_5650);
var inst_5628 = inst_5651;
var inst_5629 = inst_5650;
var inst_5630 = inst_5652;
var inst_5631 = (0);
var state_5686__$1 = (function (){var statearr_5719 = state_5686;
(statearr_5719[(19)] = inst_5628);

(statearr_5719[(9)] = inst_5629);

(statearr_5719[(20)] = inst_5630);

(statearr_5719[(10)] = inst_5631);

return statearr_5719;
})();
var statearr_5720_5790 = state_5686__$1;
(statearr_5720_5790[(2)] = null);

(statearr_5720_5790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (41))){
var inst_5646 = (state_5686[(23)]);
var inst_5661 = (state_5686[(2)]);
var inst_5662 = cljs.core.next.call(null,inst_5646);
var inst_5628 = inst_5662;
var inst_5629 = null;
var inst_5630 = (0);
var inst_5631 = (0);
var state_5686__$1 = (function (){var statearr_5721 = state_5686;
(statearr_5721[(25)] = inst_5661);

(statearr_5721[(19)] = inst_5628);

(statearr_5721[(9)] = inst_5629);

(statearr_5721[(20)] = inst_5630);

(statearr_5721[(10)] = inst_5631);

return statearr_5721;
})();
var statearr_5722_5791 = state_5686__$1;
(statearr_5722_5791[(2)] = null);

(statearr_5722_5791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (43))){
var state_5686__$1 = state_5686;
var statearr_5723_5792 = state_5686__$1;
(statearr_5723_5792[(2)] = null);

(statearr_5723_5792[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (29))){
var inst_5670 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5724_5793 = state_5686__$1;
(statearr_5724_5793[(2)] = inst_5670);

(statearr_5724_5793[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (44))){
var inst_5679 = (state_5686[(2)]);
var state_5686__$1 = (function (){var statearr_5725 = state_5686;
(statearr_5725[(26)] = inst_5679);

return statearr_5725;
})();
var statearr_5726_5794 = state_5686__$1;
(statearr_5726_5794[(2)] = null);

(statearr_5726_5794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (6))){
var inst_5620 = (state_5686[(27)]);
var inst_5619 = cljs.core.deref.call(null,cs);
var inst_5620__$1 = cljs.core.keys.call(null,inst_5619);
var inst_5621 = cljs.core.count.call(null,inst_5620__$1);
var inst_5622 = cljs.core.reset_BANG_.call(null,dctr,inst_5621);
var inst_5627 = cljs.core.seq.call(null,inst_5620__$1);
var inst_5628 = inst_5627;
var inst_5629 = null;
var inst_5630 = (0);
var inst_5631 = (0);
var state_5686__$1 = (function (){var statearr_5727 = state_5686;
(statearr_5727[(27)] = inst_5620__$1);

(statearr_5727[(28)] = inst_5622);

(statearr_5727[(19)] = inst_5628);

(statearr_5727[(9)] = inst_5629);

(statearr_5727[(20)] = inst_5630);

(statearr_5727[(10)] = inst_5631);

return statearr_5727;
})();
var statearr_5728_5795 = state_5686__$1;
(statearr_5728_5795[(2)] = null);

(statearr_5728_5795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (28))){
var inst_5628 = (state_5686[(19)]);
var inst_5646 = (state_5686[(23)]);
var inst_5646__$1 = cljs.core.seq.call(null,inst_5628);
var state_5686__$1 = (function (){var statearr_5729 = state_5686;
(statearr_5729[(23)] = inst_5646__$1);

return statearr_5729;
})();
if(inst_5646__$1){
var statearr_5730_5796 = state_5686__$1;
(statearr_5730_5796[(1)] = (33));

} else {
var statearr_5731_5797 = state_5686__$1;
(statearr_5731_5797[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (25))){
var inst_5631 = (state_5686[(10)]);
var inst_5630 = (state_5686[(20)]);
var inst_5633 = (inst_5631 < inst_5630);
var inst_5634 = inst_5633;
var state_5686__$1 = state_5686;
if(cljs.core.truth_(inst_5634)){
var statearr_5732_5798 = state_5686__$1;
(statearr_5732_5798[(1)] = (27));

} else {
var statearr_5733_5799 = state_5686__$1;
(statearr_5733_5799[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (34))){
var state_5686__$1 = state_5686;
var statearr_5734_5800 = state_5686__$1;
(statearr_5734_5800[(2)] = null);

(statearr_5734_5800[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (17))){
var state_5686__$1 = state_5686;
var statearr_5735_5801 = state_5686__$1;
(statearr_5735_5801[(2)] = null);

(statearr_5735_5801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (3))){
var inst_5684 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5686__$1,inst_5684);
} else {
if((state_val_5687 === (12))){
var inst_5615 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5736_5802 = state_5686__$1;
(statearr_5736_5802[(2)] = inst_5615);

(statearr_5736_5802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (2))){
var state_5686__$1 = state_5686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5686__$1,(4),ch);
} else {
if((state_val_5687 === (23))){
var state_5686__$1 = state_5686;
var statearr_5737_5803 = state_5686__$1;
(statearr_5737_5803[(2)] = null);

(statearr_5737_5803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (35))){
var inst_5668 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5738_5804 = state_5686__$1;
(statearr_5738_5804[(2)] = inst_5668);

(statearr_5738_5804[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (19))){
var inst_5587 = (state_5686[(7)]);
var inst_5591 = cljs.core.chunk_first.call(null,inst_5587);
var inst_5592 = cljs.core.chunk_rest.call(null,inst_5587);
var inst_5593 = cljs.core.count.call(null,inst_5591);
var inst_5565 = inst_5592;
var inst_5566 = inst_5591;
var inst_5567 = inst_5593;
var inst_5568 = (0);
var state_5686__$1 = (function (){var statearr_5739 = state_5686;
(statearr_5739[(14)] = inst_5565);

(statearr_5739[(15)] = inst_5566);

(statearr_5739[(16)] = inst_5567);

(statearr_5739[(17)] = inst_5568);

return statearr_5739;
})();
var statearr_5740_5805 = state_5686__$1;
(statearr_5740_5805[(2)] = null);

(statearr_5740_5805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (11))){
var inst_5565 = (state_5686[(14)]);
var inst_5587 = (state_5686[(7)]);
var inst_5587__$1 = cljs.core.seq.call(null,inst_5565);
var state_5686__$1 = (function (){var statearr_5741 = state_5686;
(statearr_5741[(7)] = inst_5587__$1);

return statearr_5741;
})();
if(inst_5587__$1){
var statearr_5742_5806 = state_5686__$1;
(statearr_5742_5806[(1)] = (16));

} else {
var statearr_5743_5807 = state_5686__$1;
(statearr_5743_5807[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (9))){
var inst_5617 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5744_5808 = state_5686__$1;
(statearr_5744_5808[(2)] = inst_5617);

(statearr_5744_5808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (5))){
var inst_5563 = cljs.core.deref.call(null,cs);
var inst_5564 = cljs.core.seq.call(null,inst_5563);
var inst_5565 = inst_5564;
var inst_5566 = null;
var inst_5567 = (0);
var inst_5568 = (0);
var state_5686__$1 = (function (){var statearr_5745 = state_5686;
(statearr_5745[(14)] = inst_5565);

(statearr_5745[(15)] = inst_5566);

(statearr_5745[(16)] = inst_5567);

(statearr_5745[(17)] = inst_5568);

return statearr_5745;
})();
var statearr_5746_5809 = state_5686__$1;
(statearr_5746_5809[(2)] = null);

(statearr_5746_5809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (14))){
var state_5686__$1 = state_5686;
var statearr_5747_5810 = state_5686__$1;
(statearr_5747_5810[(2)] = null);

(statearr_5747_5810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (45))){
var inst_5676 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5748_5811 = state_5686__$1;
(statearr_5748_5811[(2)] = inst_5676);

(statearr_5748_5811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (26))){
var inst_5620 = (state_5686[(27)]);
var inst_5672 = (state_5686[(2)]);
var inst_5673 = cljs.core.seq.call(null,inst_5620);
var state_5686__$1 = (function (){var statearr_5749 = state_5686;
(statearr_5749[(29)] = inst_5672);

return statearr_5749;
})();
if(inst_5673){
var statearr_5750_5812 = state_5686__$1;
(statearr_5750_5812[(1)] = (42));

} else {
var statearr_5751_5813 = state_5686__$1;
(statearr_5751_5813[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (16))){
var inst_5587 = (state_5686[(7)]);
var inst_5589 = cljs.core.chunked_seq_QMARK_.call(null,inst_5587);
var state_5686__$1 = state_5686;
if(inst_5589){
var statearr_5752_5814 = state_5686__$1;
(statearr_5752_5814[(1)] = (19));

} else {
var statearr_5753_5815 = state_5686__$1;
(statearr_5753_5815[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (38))){
var inst_5665 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5754_5816 = state_5686__$1;
(statearr_5754_5816[(2)] = inst_5665);

(statearr_5754_5816[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (30))){
var state_5686__$1 = state_5686;
var statearr_5755_5817 = state_5686__$1;
(statearr_5755_5817[(2)] = null);

(statearr_5755_5817[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (10))){
var inst_5566 = (state_5686[(15)]);
var inst_5568 = (state_5686[(17)]);
var inst_5576 = cljs.core._nth.call(null,inst_5566,inst_5568);
var inst_5577 = cljs.core.nth.call(null,inst_5576,(0),null);
var inst_5578 = cljs.core.nth.call(null,inst_5576,(1),null);
var state_5686__$1 = (function (){var statearr_5756 = state_5686;
(statearr_5756[(24)] = inst_5577);

return statearr_5756;
})();
if(cljs.core.truth_(inst_5578)){
var statearr_5757_5818 = state_5686__$1;
(statearr_5757_5818[(1)] = (13));

} else {
var statearr_5758_5819 = state_5686__$1;
(statearr_5758_5819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (18))){
var inst_5613 = (state_5686[(2)]);
var state_5686__$1 = state_5686;
var statearr_5759_5820 = state_5686__$1;
(statearr_5759_5820[(2)] = inst_5613);

(statearr_5759_5820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (42))){
var state_5686__$1 = state_5686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5686__$1,(45),dchan);
} else {
if((state_val_5687 === (37))){
var inst_5646 = (state_5686[(23)]);
var inst_5655 = (state_5686[(22)]);
var inst_5556 = (state_5686[(12)]);
var inst_5655__$1 = cljs.core.first.call(null,inst_5646);
var inst_5656 = cljs.core.async.put_BANG_.call(null,inst_5655__$1,inst_5556,done);
var state_5686__$1 = (function (){var statearr_5760 = state_5686;
(statearr_5760[(22)] = inst_5655__$1);

return statearr_5760;
})();
if(cljs.core.truth_(inst_5656)){
var statearr_5761_5821 = state_5686__$1;
(statearr_5761_5821[(1)] = (39));

} else {
var statearr_5762_5822 = state_5686__$1;
(statearr_5762_5822[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5687 === (8))){
var inst_5568 = (state_5686[(17)]);
var inst_5567 = (state_5686[(16)]);
var inst_5570 = (inst_5568 < inst_5567);
var inst_5571 = inst_5570;
var state_5686__$1 = state_5686;
if(cljs.core.truth_(inst_5571)){
var statearr_5763_5823 = state_5686__$1;
(statearr_5763_5823[(1)] = (10));

} else {
var statearr_5764_5824 = state_5686__$1;
(statearr_5764_5824[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__4855__auto__ = null;
var cljs$core$async$mult_$_state_machine__4855__auto____0 = (function (){
var statearr_5765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5765[(0)] = cljs$core$async$mult_$_state_machine__4855__auto__);

(statearr_5765[(1)] = (1));

return statearr_5765;
});
var cljs$core$async$mult_$_state_machine__4855__auto____1 = (function (state_5686){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5766){var ex__4858__auto__ = e5766;
var statearr_5767_5825 = state_5686;
(statearr_5767_5825[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5686[(4)]))){
var statearr_5768_5826 = state_5686;
(statearr_5768_5826[(1)] = cljs.core.first.call(null,(state_5686[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5827 = state_5686;
state_5686 = G__5827;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__4855__auto__ = function(state_5686){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__4855__auto____1.call(this,state_5686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__4855__auto____0;
cljs$core$async$mult_$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__4855__auto____1;
return cljs$core$async$mult_$_state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5769 = f__4929__auto__.call(null);
(statearr_5769[(6)] = c__4928__auto___5770);

return statearr_5769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__5829 = arguments.length;
switch (G__5829) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_5831 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_5831.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_5832 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_5832.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_5833 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_5833.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_5834 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,state_map);
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_5834.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_5835 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,mode);
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_5835.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___5845 = arguments.length;
var i__5727__auto___5846 = (0);
while(true){
if((i__5727__auto___5846 < len__5726__auto___5845)){
args__5732__auto__.push((arguments[i__5727__auto___5846]));

var G__5847 = (i__5727__auto___5846 + (1));
i__5727__auto___5846 = G__5847;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5840){
var map__5841 = p__5840;
var map__5841__$1 = cljs.core.__destructure_map.call(null,map__5841);
var opts = map__5841__$1;
var statearr_5842_5848 = state;
(statearr_5842_5848[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_5843_5849 = state;
(statearr_5843_5849[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_5844_5850 = state;
(statearr_5844_5850[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5836){
var G__5837 = cljs.core.first.call(null,seq5836);
var seq5836__$1 = cljs.core.next.call(null,seq5836);
var G__5838 = cljs.core.first.call(null,seq5836__$1);
var seq5836__$2 = cljs.core.next.call(null,seq5836__$1);
var G__5839 = cljs.core.first.call(null,seq5836__$2);
var seq5836__$3 = cljs.core.next.call(null,seq5836__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5837,G__5838,G__5839,seq5836__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5851 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5852){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta5852 = meta5852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5853,meta5852__$1){
var self__ = this;
var _5853__$1 = this;
return (new cljs.core.async.t_cljs$core$async5851(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5852__$1));
}));

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5853){
var self__ = this;
var _5853__$1 = this;
return self__.meta5852;
}));

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5851.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta5852","meta5852",-1837179608,null)], null);
}));

(cljs.core.async.t_cljs$core$async5851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5851");

(cljs.core.async.t_cljs$core$async5851.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async5851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5851.
 */
cljs.core.async.__GT_t_cljs$core$async5851 = (function cljs$core$async$mix_$___GT_t_cljs$core$async5851(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5852){
return (new cljs.core.async.t_cljs$core$async5851(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5852));
});

}

return (new cljs.core.async.t_cljs$core$async5851(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4928__auto___5966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_5921){
var state_val_5922 = (state_5921[(1)]);
if((state_val_5922 === (7))){
var inst_5881 = (state_5921[(2)]);
var state_5921__$1 = state_5921;
if(cljs.core.truth_(inst_5881)){
var statearr_5923_5967 = state_5921__$1;
(statearr_5923_5967[(1)] = (8));

} else {
var statearr_5924_5968 = state_5921__$1;
(statearr_5924_5968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (20))){
var inst_5874 = (state_5921[(7)]);
var state_5921__$1 = state_5921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5921__$1,(23),out,inst_5874);
} else {
if((state_val_5922 === (1))){
var inst_5857 = calc_state.call(null);
var inst_5858 = cljs.core.__destructure_map.call(null,inst_5857);
var inst_5859 = cljs.core.get.call(null,inst_5858,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5860 = cljs.core.get.call(null,inst_5858,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5861 = cljs.core.get.call(null,inst_5858,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5862 = inst_5857;
var state_5921__$1 = (function (){var statearr_5925 = state_5921;
(statearr_5925[(8)] = inst_5859);

(statearr_5925[(9)] = inst_5860);

(statearr_5925[(10)] = inst_5861);

(statearr_5925[(11)] = inst_5862);

return statearr_5925;
})();
var statearr_5926_5969 = state_5921__$1;
(statearr_5926_5969[(2)] = null);

(statearr_5926_5969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (24))){
var inst_5865 = (state_5921[(12)]);
var inst_5862 = inst_5865;
var state_5921__$1 = (function (){var statearr_5927 = state_5921;
(statearr_5927[(11)] = inst_5862);

return statearr_5927;
})();
var statearr_5928_5970 = state_5921__$1;
(statearr_5928_5970[(2)] = null);

(statearr_5928_5970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (4))){
var inst_5874 = (state_5921[(7)]);
var inst_5876 = (state_5921[(13)]);
var inst_5873 = (state_5921[(2)]);
var inst_5874__$1 = cljs.core.nth.call(null,inst_5873,(0),null);
var inst_5875 = cljs.core.nth.call(null,inst_5873,(1),null);
var inst_5876__$1 = (inst_5874__$1 == null);
var state_5921__$1 = (function (){var statearr_5929 = state_5921;
(statearr_5929[(7)] = inst_5874__$1);

(statearr_5929[(14)] = inst_5875);

(statearr_5929[(13)] = inst_5876__$1);

return statearr_5929;
})();
if(cljs.core.truth_(inst_5876__$1)){
var statearr_5930_5971 = state_5921__$1;
(statearr_5930_5971[(1)] = (5));

} else {
var statearr_5931_5972 = state_5921__$1;
(statearr_5931_5972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (15))){
var inst_5866 = (state_5921[(15)]);
var inst_5895 = (state_5921[(16)]);
var inst_5895__$1 = cljs.core.empty_QMARK_.call(null,inst_5866);
var state_5921__$1 = (function (){var statearr_5932 = state_5921;
(statearr_5932[(16)] = inst_5895__$1);

return statearr_5932;
})();
if(inst_5895__$1){
var statearr_5933_5973 = state_5921__$1;
(statearr_5933_5973[(1)] = (17));

} else {
var statearr_5934_5974 = state_5921__$1;
(statearr_5934_5974[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (21))){
var inst_5865 = (state_5921[(12)]);
var inst_5862 = inst_5865;
var state_5921__$1 = (function (){var statearr_5935 = state_5921;
(statearr_5935[(11)] = inst_5862);

return statearr_5935;
})();
var statearr_5936_5975 = state_5921__$1;
(statearr_5936_5975[(2)] = null);

(statearr_5936_5975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (13))){
var inst_5888 = (state_5921[(2)]);
var inst_5889 = calc_state.call(null);
var inst_5862 = inst_5889;
var state_5921__$1 = (function (){var statearr_5937 = state_5921;
(statearr_5937[(17)] = inst_5888);

(statearr_5937[(11)] = inst_5862);

return statearr_5937;
})();
var statearr_5938_5976 = state_5921__$1;
(statearr_5938_5976[(2)] = null);

(statearr_5938_5976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (22))){
var inst_5915 = (state_5921[(2)]);
var state_5921__$1 = state_5921;
var statearr_5939_5977 = state_5921__$1;
(statearr_5939_5977[(2)] = inst_5915);

(statearr_5939_5977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (6))){
var inst_5875 = (state_5921[(14)]);
var inst_5879 = cljs.core._EQ_.call(null,inst_5875,change);
var state_5921__$1 = state_5921;
var statearr_5940_5978 = state_5921__$1;
(statearr_5940_5978[(2)] = inst_5879);

(statearr_5940_5978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (25))){
var state_5921__$1 = state_5921;
var statearr_5941_5979 = state_5921__$1;
(statearr_5941_5979[(2)] = null);

(statearr_5941_5979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (17))){
var inst_5867 = (state_5921[(18)]);
var inst_5875 = (state_5921[(14)]);
var inst_5897 = inst_5867.call(null,inst_5875);
var inst_5898 = cljs.core.not.call(null,inst_5897);
var state_5921__$1 = state_5921;
var statearr_5942_5980 = state_5921__$1;
(statearr_5942_5980[(2)] = inst_5898);

(statearr_5942_5980[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (3))){
var inst_5919 = (state_5921[(2)]);
var state_5921__$1 = state_5921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5921__$1,inst_5919);
} else {
if((state_val_5922 === (12))){
var state_5921__$1 = state_5921;
var statearr_5943_5981 = state_5921__$1;
(statearr_5943_5981[(2)] = null);

(statearr_5943_5981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (2))){
var inst_5862 = (state_5921[(11)]);
var inst_5865 = (state_5921[(12)]);
var inst_5865__$1 = cljs.core.__destructure_map.call(null,inst_5862);
var inst_5866 = cljs.core.get.call(null,inst_5865__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5867 = cljs.core.get.call(null,inst_5865__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5868 = cljs.core.get.call(null,inst_5865__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5921__$1 = (function (){var statearr_5944 = state_5921;
(statearr_5944[(12)] = inst_5865__$1);

(statearr_5944[(15)] = inst_5866);

(statearr_5944[(18)] = inst_5867);

return statearr_5944;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5921__$1,(4),inst_5868);
} else {
if((state_val_5922 === (23))){
var inst_5906 = (state_5921[(2)]);
var state_5921__$1 = state_5921;
if(cljs.core.truth_(inst_5906)){
var statearr_5945_5982 = state_5921__$1;
(statearr_5945_5982[(1)] = (24));

} else {
var statearr_5946_5983 = state_5921__$1;
(statearr_5946_5983[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (19))){
var inst_5901 = (state_5921[(2)]);
var state_5921__$1 = state_5921;
var statearr_5947_5984 = state_5921__$1;
(statearr_5947_5984[(2)] = inst_5901);

(statearr_5947_5984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (11))){
var inst_5875 = (state_5921[(14)]);
var inst_5885 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5875);
var state_5921__$1 = state_5921;
var statearr_5948_5985 = state_5921__$1;
(statearr_5948_5985[(2)] = inst_5885);

(statearr_5948_5985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (9))){
var inst_5866 = (state_5921[(15)]);
var inst_5875 = (state_5921[(14)]);
var inst_5892 = (state_5921[(19)]);
var inst_5892__$1 = inst_5866.call(null,inst_5875);
var state_5921__$1 = (function (){var statearr_5949 = state_5921;
(statearr_5949[(19)] = inst_5892__$1);

return statearr_5949;
})();
if(cljs.core.truth_(inst_5892__$1)){
var statearr_5950_5986 = state_5921__$1;
(statearr_5950_5986[(1)] = (14));

} else {
var statearr_5951_5987 = state_5921__$1;
(statearr_5951_5987[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (5))){
var inst_5876 = (state_5921[(13)]);
var state_5921__$1 = state_5921;
var statearr_5952_5988 = state_5921__$1;
(statearr_5952_5988[(2)] = inst_5876);

(statearr_5952_5988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (14))){
var inst_5892 = (state_5921[(19)]);
var state_5921__$1 = state_5921;
var statearr_5953_5989 = state_5921__$1;
(statearr_5953_5989[(2)] = inst_5892);

(statearr_5953_5989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (26))){
var inst_5911 = (state_5921[(2)]);
var state_5921__$1 = state_5921;
var statearr_5954_5990 = state_5921__$1;
(statearr_5954_5990[(2)] = inst_5911);

(statearr_5954_5990[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (16))){
var inst_5903 = (state_5921[(2)]);
var state_5921__$1 = state_5921;
if(cljs.core.truth_(inst_5903)){
var statearr_5955_5991 = state_5921__$1;
(statearr_5955_5991[(1)] = (20));

} else {
var statearr_5956_5992 = state_5921__$1;
(statearr_5956_5992[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (10))){
var inst_5917 = (state_5921[(2)]);
var state_5921__$1 = state_5921;
var statearr_5957_5993 = state_5921__$1;
(statearr_5957_5993[(2)] = inst_5917);

(statearr_5957_5993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (18))){
var inst_5895 = (state_5921[(16)]);
var state_5921__$1 = state_5921;
var statearr_5958_5994 = state_5921__$1;
(statearr_5958_5994[(2)] = inst_5895);

(statearr_5958_5994[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5922 === (8))){
var inst_5874 = (state_5921[(7)]);
var inst_5883 = (inst_5874 == null);
var state_5921__$1 = state_5921;
if(cljs.core.truth_(inst_5883)){
var statearr_5959_5995 = state_5921__$1;
(statearr_5959_5995[(1)] = (11));

} else {
var statearr_5960_5996 = state_5921__$1;
(statearr_5960_5996[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__4855__auto__ = null;
var cljs$core$async$mix_$_state_machine__4855__auto____0 = (function (){
var statearr_5961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5961[(0)] = cljs$core$async$mix_$_state_machine__4855__auto__);

(statearr_5961[(1)] = (1));

return statearr_5961;
});
var cljs$core$async$mix_$_state_machine__4855__auto____1 = (function (state_5921){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_5921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e5962){var ex__4858__auto__ = e5962;
var statearr_5963_5997 = state_5921;
(statearr_5963_5997[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_5921[(4)]))){
var statearr_5964_5998 = state_5921;
(statearr_5964_5998[(1)] = cljs.core.first.call(null,(state_5921[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5999 = state_5921;
state_5921 = G__5999;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__4855__auto__ = function(state_5921){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__4855__auto____1.call(this,state_5921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__4855__auto____0;
cljs$core$async$mix_$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__4855__auto____1;
return cljs$core$async$mix_$_state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_5965 = f__4929__auto__.call(null);
(statearr_5965[(6)] = c__4928__auto___5966);

return statearr_5965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_6002 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_6002.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_6003 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_6003.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_6004 = (function() {
var G__6005 = null;
var G__6005__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__6005__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__6005 = function(p,v){
switch(arguments.length){
case 1:
return G__6005__1.call(this,p);
case 2:
return G__6005__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6005.cljs$core$IFn$_invoke$arity$1 = G__6005__1;
G__6005.cljs$core$IFn$_invoke$arity$2 = G__6005__2;
return G__6005;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__6001 = arguments.length;
switch (G__6001) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_6004.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_6004.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__6009 = arguments.length;
switch (G__6009) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__6007_SHARP_){
if(cljs.core.truth_(p1__6007_SHARP_.call(null,topic))){
return p1__6007_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__6007_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6010 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta6011){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta6011 = meta6011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6012,meta6011__$1){
var self__ = this;
var _6012__$1 = this;
return (new cljs.core.async.t_cljs$core$async6010(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta6011__$1));
}));

(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6012){
var self__ = this;
var _6012__$1 = this;
return self__.meta6011;
}));

(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async6010.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async6010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta6011","meta6011",1255365690,null)], null);
}));

(cljs.core.async.t_cljs$core$async6010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6010");

(cljs.core.async.t_cljs$core$async6010.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async6010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6010.
 */
cljs.core.async.__GT_t_cljs$core$async6010 = (function cljs$core$async$__GT_t_cljs$core$async6010(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6011){
return (new cljs.core.async.t_cljs$core$async6010(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6011));
});

}

return (new cljs.core.async.t_cljs$core$async6010(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4928__auto___6131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6084){
var state_val_6085 = (state_6084[(1)]);
if((state_val_6085 === (7))){
var inst_6080 = (state_6084[(2)]);
var state_6084__$1 = state_6084;
var statearr_6086_6132 = state_6084__$1;
(statearr_6086_6132[(2)] = inst_6080);

(statearr_6086_6132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (20))){
var state_6084__$1 = state_6084;
var statearr_6087_6133 = state_6084__$1;
(statearr_6087_6133[(2)] = null);

(statearr_6087_6133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (1))){
var state_6084__$1 = state_6084;
var statearr_6088_6134 = state_6084__$1;
(statearr_6088_6134[(2)] = null);

(statearr_6088_6134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (24))){
var inst_6063 = (state_6084[(7)]);
var inst_6072 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_6063);
var state_6084__$1 = state_6084;
var statearr_6089_6135 = state_6084__$1;
(statearr_6089_6135[(2)] = inst_6072);

(statearr_6089_6135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (4))){
var inst_6015 = (state_6084[(8)]);
var inst_6015__$1 = (state_6084[(2)]);
var inst_6016 = (inst_6015__$1 == null);
var state_6084__$1 = (function (){var statearr_6090 = state_6084;
(statearr_6090[(8)] = inst_6015__$1);

return statearr_6090;
})();
if(cljs.core.truth_(inst_6016)){
var statearr_6091_6136 = state_6084__$1;
(statearr_6091_6136[(1)] = (5));

} else {
var statearr_6092_6137 = state_6084__$1;
(statearr_6092_6137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (15))){
var inst_6057 = (state_6084[(2)]);
var state_6084__$1 = state_6084;
var statearr_6093_6138 = state_6084__$1;
(statearr_6093_6138[(2)] = inst_6057);

(statearr_6093_6138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (21))){
var inst_6077 = (state_6084[(2)]);
var state_6084__$1 = (function (){var statearr_6094 = state_6084;
(statearr_6094[(9)] = inst_6077);

return statearr_6094;
})();
var statearr_6095_6139 = state_6084__$1;
(statearr_6095_6139[(2)] = null);

(statearr_6095_6139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (13))){
var inst_6039 = (state_6084[(10)]);
var inst_6041 = cljs.core.chunked_seq_QMARK_.call(null,inst_6039);
var state_6084__$1 = state_6084;
if(inst_6041){
var statearr_6096_6140 = state_6084__$1;
(statearr_6096_6140[(1)] = (16));

} else {
var statearr_6097_6141 = state_6084__$1;
(statearr_6097_6141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (22))){
var inst_6069 = (state_6084[(2)]);
var state_6084__$1 = state_6084;
if(cljs.core.truth_(inst_6069)){
var statearr_6098_6142 = state_6084__$1;
(statearr_6098_6142[(1)] = (23));

} else {
var statearr_6099_6143 = state_6084__$1;
(statearr_6099_6143[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (6))){
var inst_6015 = (state_6084[(8)]);
var inst_6063 = (state_6084[(7)]);
var inst_6065 = (state_6084[(11)]);
var inst_6063__$1 = topic_fn.call(null,inst_6015);
var inst_6064 = cljs.core.deref.call(null,mults);
var inst_6065__$1 = cljs.core.get.call(null,inst_6064,inst_6063__$1);
var state_6084__$1 = (function (){var statearr_6100 = state_6084;
(statearr_6100[(7)] = inst_6063__$1);

(statearr_6100[(11)] = inst_6065__$1);

return statearr_6100;
})();
if(cljs.core.truth_(inst_6065__$1)){
var statearr_6101_6144 = state_6084__$1;
(statearr_6101_6144[(1)] = (19));

} else {
var statearr_6102_6145 = state_6084__$1;
(statearr_6102_6145[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (25))){
var inst_6074 = (state_6084[(2)]);
var state_6084__$1 = state_6084;
var statearr_6103_6146 = state_6084__$1;
(statearr_6103_6146[(2)] = inst_6074);

(statearr_6103_6146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (17))){
var inst_6039 = (state_6084[(10)]);
var inst_6048 = cljs.core.first.call(null,inst_6039);
var inst_6049 = cljs.core.async.muxch_STAR_.call(null,inst_6048);
var inst_6050 = cljs.core.async.close_BANG_.call(null,inst_6049);
var inst_6051 = cljs.core.next.call(null,inst_6039);
var inst_6025 = inst_6051;
var inst_6026 = null;
var inst_6027 = (0);
var inst_6028 = (0);
var state_6084__$1 = (function (){var statearr_6104 = state_6084;
(statearr_6104[(12)] = inst_6050);

(statearr_6104[(13)] = inst_6025);

(statearr_6104[(14)] = inst_6026);

(statearr_6104[(15)] = inst_6027);

(statearr_6104[(16)] = inst_6028);

return statearr_6104;
})();
var statearr_6105_6147 = state_6084__$1;
(statearr_6105_6147[(2)] = null);

(statearr_6105_6147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (3))){
var inst_6082 = (state_6084[(2)]);
var state_6084__$1 = state_6084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6084__$1,inst_6082);
} else {
if((state_val_6085 === (12))){
var inst_6059 = (state_6084[(2)]);
var state_6084__$1 = state_6084;
var statearr_6106_6148 = state_6084__$1;
(statearr_6106_6148[(2)] = inst_6059);

(statearr_6106_6148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (2))){
var state_6084__$1 = state_6084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6084__$1,(4),ch);
} else {
if((state_val_6085 === (23))){
var state_6084__$1 = state_6084;
var statearr_6107_6149 = state_6084__$1;
(statearr_6107_6149[(2)] = null);

(statearr_6107_6149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (19))){
var inst_6065 = (state_6084[(11)]);
var inst_6015 = (state_6084[(8)]);
var inst_6067 = cljs.core.async.muxch_STAR_.call(null,inst_6065);
var state_6084__$1 = state_6084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6084__$1,(22),inst_6067,inst_6015);
} else {
if((state_val_6085 === (11))){
var inst_6025 = (state_6084[(13)]);
var inst_6039 = (state_6084[(10)]);
var inst_6039__$1 = cljs.core.seq.call(null,inst_6025);
var state_6084__$1 = (function (){var statearr_6108 = state_6084;
(statearr_6108[(10)] = inst_6039__$1);

return statearr_6108;
})();
if(inst_6039__$1){
var statearr_6109_6150 = state_6084__$1;
(statearr_6109_6150[(1)] = (13));

} else {
var statearr_6110_6151 = state_6084__$1;
(statearr_6110_6151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (9))){
var inst_6061 = (state_6084[(2)]);
var state_6084__$1 = state_6084;
var statearr_6111_6152 = state_6084__$1;
(statearr_6111_6152[(2)] = inst_6061);

(statearr_6111_6152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (5))){
var inst_6022 = cljs.core.deref.call(null,mults);
var inst_6023 = cljs.core.vals.call(null,inst_6022);
var inst_6024 = cljs.core.seq.call(null,inst_6023);
var inst_6025 = inst_6024;
var inst_6026 = null;
var inst_6027 = (0);
var inst_6028 = (0);
var state_6084__$1 = (function (){var statearr_6112 = state_6084;
(statearr_6112[(13)] = inst_6025);

(statearr_6112[(14)] = inst_6026);

(statearr_6112[(15)] = inst_6027);

(statearr_6112[(16)] = inst_6028);

return statearr_6112;
})();
var statearr_6113_6153 = state_6084__$1;
(statearr_6113_6153[(2)] = null);

(statearr_6113_6153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (14))){
var state_6084__$1 = state_6084;
var statearr_6117_6154 = state_6084__$1;
(statearr_6117_6154[(2)] = null);

(statearr_6117_6154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (16))){
var inst_6039 = (state_6084[(10)]);
var inst_6043 = cljs.core.chunk_first.call(null,inst_6039);
var inst_6044 = cljs.core.chunk_rest.call(null,inst_6039);
var inst_6045 = cljs.core.count.call(null,inst_6043);
var inst_6025 = inst_6044;
var inst_6026 = inst_6043;
var inst_6027 = inst_6045;
var inst_6028 = (0);
var state_6084__$1 = (function (){var statearr_6118 = state_6084;
(statearr_6118[(13)] = inst_6025);

(statearr_6118[(14)] = inst_6026);

(statearr_6118[(15)] = inst_6027);

(statearr_6118[(16)] = inst_6028);

return statearr_6118;
})();
var statearr_6119_6155 = state_6084__$1;
(statearr_6119_6155[(2)] = null);

(statearr_6119_6155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (10))){
var inst_6026 = (state_6084[(14)]);
var inst_6028 = (state_6084[(16)]);
var inst_6025 = (state_6084[(13)]);
var inst_6027 = (state_6084[(15)]);
var inst_6033 = cljs.core._nth.call(null,inst_6026,inst_6028);
var inst_6034 = cljs.core.async.muxch_STAR_.call(null,inst_6033);
var inst_6035 = cljs.core.async.close_BANG_.call(null,inst_6034);
var inst_6036 = (inst_6028 + (1));
var tmp6114 = inst_6025;
var tmp6115 = inst_6026;
var tmp6116 = inst_6027;
var inst_6025__$1 = tmp6114;
var inst_6026__$1 = tmp6115;
var inst_6027__$1 = tmp6116;
var inst_6028__$1 = inst_6036;
var state_6084__$1 = (function (){var statearr_6120 = state_6084;
(statearr_6120[(17)] = inst_6035);

(statearr_6120[(13)] = inst_6025__$1);

(statearr_6120[(14)] = inst_6026__$1);

(statearr_6120[(15)] = inst_6027__$1);

(statearr_6120[(16)] = inst_6028__$1);

return statearr_6120;
})();
var statearr_6121_6156 = state_6084__$1;
(statearr_6121_6156[(2)] = null);

(statearr_6121_6156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (18))){
var inst_6054 = (state_6084[(2)]);
var state_6084__$1 = state_6084;
var statearr_6122_6157 = state_6084__$1;
(statearr_6122_6157[(2)] = inst_6054);

(statearr_6122_6157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6085 === (8))){
var inst_6028 = (state_6084[(16)]);
var inst_6027 = (state_6084[(15)]);
var inst_6030 = (inst_6028 < inst_6027);
var inst_6031 = inst_6030;
var state_6084__$1 = state_6084;
if(cljs.core.truth_(inst_6031)){
var statearr_6123_6158 = state_6084__$1;
(statearr_6123_6158[(1)] = (10));

} else {
var statearr_6124_6159 = state_6084__$1;
(statearr_6124_6159[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_6125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6125[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_6125[(1)] = (1));

return statearr_6125;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_6084){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6126){var ex__4858__auto__ = e6126;
var statearr_6127_6160 = state_6084;
(statearr_6127_6160[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6084[(4)]))){
var statearr_6128_6161 = state_6084;
(statearr_6128_6161[(1)] = cljs.core.first.call(null,(state_6084[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6162 = state_6084;
state_6084 = G__6162;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_6084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_6084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6129 = f__4929__auto__.call(null);
(statearr_6129[(6)] = c__4928__auto___6131);

return statearr_6129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__6164 = arguments.length;
switch (G__6164) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__6167 = arguments.length;
switch (G__6167) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__6170 = arguments.length;
switch (G__6170) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__4928__auto___6248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6213){
var state_val_6214 = (state_6213[(1)]);
if((state_val_6214 === (7))){
var state_6213__$1 = state_6213;
var statearr_6215_6249 = state_6213__$1;
(statearr_6215_6249[(2)] = null);

(statearr_6215_6249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (1))){
var state_6213__$1 = state_6213;
var statearr_6216_6250 = state_6213__$1;
(statearr_6216_6250[(2)] = null);

(statearr_6216_6250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (4))){
var inst_6174 = (state_6213[(7)]);
var inst_6173 = (state_6213[(8)]);
var inst_6176 = (inst_6174 < inst_6173);
var state_6213__$1 = state_6213;
if(cljs.core.truth_(inst_6176)){
var statearr_6217_6251 = state_6213__$1;
(statearr_6217_6251[(1)] = (6));

} else {
var statearr_6218_6252 = state_6213__$1;
(statearr_6218_6252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (15))){
var inst_6199 = (state_6213[(9)]);
var inst_6204 = cljs.core.apply.call(null,f,inst_6199);
var state_6213__$1 = state_6213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6213__$1,(17),out,inst_6204);
} else {
if((state_val_6214 === (13))){
var inst_6199 = (state_6213[(9)]);
var inst_6199__$1 = (state_6213[(2)]);
var inst_6200 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_6199__$1);
var state_6213__$1 = (function (){var statearr_6219 = state_6213;
(statearr_6219[(9)] = inst_6199__$1);

return statearr_6219;
})();
if(cljs.core.truth_(inst_6200)){
var statearr_6220_6253 = state_6213__$1;
(statearr_6220_6253[(1)] = (14));

} else {
var statearr_6221_6254 = state_6213__$1;
(statearr_6221_6254[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (6))){
var state_6213__$1 = state_6213;
var statearr_6222_6255 = state_6213__$1;
(statearr_6222_6255[(2)] = null);

(statearr_6222_6255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (17))){
var inst_6206 = (state_6213[(2)]);
var state_6213__$1 = (function (){var statearr_6224 = state_6213;
(statearr_6224[(10)] = inst_6206);

return statearr_6224;
})();
var statearr_6225_6256 = state_6213__$1;
(statearr_6225_6256[(2)] = null);

(statearr_6225_6256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (3))){
var inst_6211 = (state_6213[(2)]);
var state_6213__$1 = state_6213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6213__$1,inst_6211);
} else {
if((state_val_6214 === (12))){
var _ = (function (){var statearr_6226 = state_6213;
(statearr_6226[(4)] = cljs.core.rest.call(null,(state_6213[(4)])));

return statearr_6226;
})();
var state_6213__$1 = state_6213;
var ex6223 = (state_6213__$1[(2)]);
var statearr_6227_6257 = state_6213__$1;
(statearr_6227_6257[(5)] = ex6223);


if((ex6223 instanceof Object)){
var statearr_6228_6258 = state_6213__$1;
(statearr_6228_6258[(1)] = (11));

(statearr_6228_6258[(5)] = null);

} else {
throw ex6223;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (2))){
var inst_6172 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_6173 = cnt;
var inst_6174 = (0);
var state_6213__$1 = (function (){var statearr_6229 = state_6213;
(statearr_6229[(11)] = inst_6172);

(statearr_6229[(8)] = inst_6173);

(statearr_6229[(7)] = inst_6174);

return statearr_6229;
})();
var statearr_6230_6259 = state_6213__$1;
(statearr_6230_6259[(2)] = null);

(statearr_6230_6259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (11))){
var inst_6178 = (state_6213[(2)]);
var inst_6179 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_6213__$1 = (function (){var statearr_6231 = state_6213;
(statearr_6231[(12)] = inst_6178);

return statearr_6231;
})();
var statearr_6232_6260 = state_6213__$1;
(statearr_6232_6260[(2)] = inst_6179);

(statearr_6232_6260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (9))){
var inst_6174 = (state_6213[(7)]);
var _ = (function (){var statearr_6233 = state_6213;
(statearr_6233[(4)] = cljs.core.cons.call(null,(12),(state_6213[(4)])));

return statearr_6233;
})();
var inst_6185 = chs__$1.call(null,inst_6174);
var inst_6186 = done.call(null,inst_6174);
var inst_6187 = cljs.core.async.take_BANG_.call(null,inst_6185,inst_6186);
var ___$1 = (function (){var statearr_6234 = state_6213;
(statearr_6234[(4)] = cljs.core.rest.call(null,(state_6213[(4)])));

return statearr_6234;
})();
var state_6213__$1 = state_6213;
var statearr_6235_6261 = state_6213__$1;
(statearr_6235_6261[(2)] = inst_6187);

(statearr_6235_6261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (5))){
var inst_6197 = (state_6213[(2)]);
var state_6213__$1 = (function (){var statearr_6236 = state_6213;
(statearr_6236[(13)] = inst_6197);

return statearr_6236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6213__$1,(13),dchan);
} else {
if((state_val_6214 === (14))){
var inst_6202 = cljs.core.async.close_BANG_.call(null,out);
var state_6213__$1 = state_6213;
var statearr_6237_6262 = state_6213__$1;
(statearr_6237_6262[(2)] = inst_6202);

(statearr_6237_6262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (16))){
var inst_6209 = (state_6213[(2)]);
var state_6213__$1 = state_6213;
var statearr_6238_6263 = state_6213__$1;
(statearr_6238_6263[(2)] = inst_6209);

(statearr_6238_6263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (10))){
var inst_6174 = (state_6213[(7)]);
var inst_6190 = (state_6213[(2)]);
var inst_6191 = (inst_6174 + (1));
var inst_6174__$1 = inst_6191;
var state_6213__$1 = (function (){var statearr_6239 = state_6213;
(statearr_6239[(14)] = inst_6190);

(statearr_6239[(7)] = inst_6174__$1);

return statearr_6239;
})();
var statearr_6240_6264 = state_6213__$1;
(statearr_6240_6264[(2)] = null);

(statearr_6240_6264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6214 === (8))){
var inst_6195 = (state_6213[(2)]);
var state_6213__$1 = state_6213;
var statearr_6241_6265 = state_6213__$1;
(statearr_6241_6265[(2)] = inst_6195);

(statearr_6241_6265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_6242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6242[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_6242[(1)] = (1));

return statearr_6242;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_6213){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6243){var ex__4858__auto__ = e6243;
var statearr_6244_6266 = state_6213;
(statearr_6244_6266[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6213[(4)]))){
var statearr_6245_6267 = state_6213;
(statearr_6245_6267[(1)] = cljs.core.first.call(null,(state_6213[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6268 = state_6213;
state_6213 = G__6268;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_6213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_6213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6246 = f__4929__auto__.call(null);
(statearr_6246[(6)] = c__4928__auto___6248);

return statearr_6246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__6271 = arguments.length;
switch (G__6271) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4928__auto___6326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6303){
var state_val_6304 = (state_6303[(1)]);
if((state_val_6304 === (7))){
var inst_6282 = (state_6303[(7)]);
var inst_6283 = (state_6303[(8)]);
var inst_6282__$1 = (state_6303[(2)]);
var inst_6283__$1 = cljs.core.nth.call(null,inst_6282__$1,(0),null);
var inst_6284 = cljs.core.nth.call(null,inst_6282__$1,(1),null);
var inst_6285 = (inst_6283__$1 == null);
var state_6303__$1 = (function (){var statearr_6305 = state_6303;
(statearr_6305[(7)] = inst_6282__$1);

(statearr_6305[(8)] = inst_6283__$1);

(statearr_6305[(9)] = inst_6284);

return statearr_6305;
})();
if(cljs.core.truth_(inst_6285)){
var statearr_6306_6327 = state_6303__$1;
(statearr_6306_6327[(1)] = (8));

} else {
var statearr_6307_6328 = state_6303__$1;
(statearr_6307_6328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6304 === (1))){
var inst_6272 = cljs.core.vec.call(null,chs);
var inst_6273 = inst_6272;
var state_6303__$1 = (function (){var statearr_6308 = state_6303;
(statearr_6308[(10)] = inst_6273);

return statearr_6308;
})();
var statearr_6309_6329 = state_6303__$1;
(statearr_6309_6329[(2)] = null);

(statearr_6309_6329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6304 === (4))){
var inst_6273 = (state_6303[(10)]);
var state_6303__$1 = state_6303;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6303__$1,(7),inst_6273);
} else {
if((state_val_6304 === (6))){
var inst_6299 = (state_6303[(2)]);
var state_6303__$1 = state_6303;
var statearr_6310_6330 = state_6303__$1;
(statearr_6310_6330[(2)] = inst_6299);

(statearr_6310_6330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6304 === (3))){
var inst_6301 = (state_6303[(2)]);
var state_6303__$1 = state_6303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6303__$1,inst_6301);
} else {
if((state_val_6304 === (2))){
var inst_6273 = (state_6303[(10)]);
var inst_6275 = cljs.core.count.call(null,inst_6273);
var inst_6276 = (inst_6275 > (0));
var state_6303__$1 = state_6303;
if(cljs.core.truth_(inst_6276)){
var statearr_6312_6331 = state_6303__$1;
(statearr_6312_6331[(1)] = (4));

} else {
var statearr_6313_6332 = state_6303__$1;
(statearr_6313_6332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6304 === (11))){
var inst_6273 = (state_6303[(10)]);
var inst_6292 = (state_6303[(2)]);
var tmp6311 = inst_6273;
var inst_6273__$1 = tmp6311;
var state_6303__$1 = (function (){var statearr_6314 = state_6303;
(statearr_6314[(11)] = inst_6292);

(statearr_6314[(10)] = inst_6273__$1);

return statearr_6314;
})();
var statearr_6315_6333 = state_6303__$1;
(statearr_6315_6333[(2)] = null);

(statearr_6315_6333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6304 === (9))){
var inst_6283 = (state_6303[(8)]);
var state_6303__$1 = state_6303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6303__$1,(11),out,inst_6283);
} else {
if((state_val_6304 === (5))){
var inst_6297 = cljs.core.async.close_BANG_.call(null,out);
var state_6303__$1 = state_6303;
var statearr_6316_6334 = state_6303__$1;
(statearr_6316_6334[(2)] = inst_6297);

(statearr_6316_6334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6304 === (10))){
var inst_6295 = (state_6303[(2)]);
var state_6303__$1 = state_6303;
var statearr_6317_6335 = state_6303__$1;
(statearr_6317_6335[(2)] = inst_6295);

(statearr_6317_6335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6304 === (8))){
var inst_6273 = (state_6303[(10)]);
var inst_6282 = (state_6303[(7)]);
var inst_6283 = (state_6303[(8)]);
var inst_6284 = (state_6303[(9)]);
var inst_6287 = (function (){var cs = inst_6273;
var vec__6278 = inst_6282;
var v = inst_6283;
var c = inst_6284;
return (function (p1__6269_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__6269_SHARP_);
});
})();
var inst_6288 = cljs.core.filterv.call(null,inst_6287,inst_6273);
var inst_6273__$1 = inst_6288;
var state_6303__$1 = (function (){var statearr_6318 = state_6303;
(statearr_6318[(10)] = inst_6273__$1);

return statearr_6318;
})();
var statearr_6319_6336 = state_6303__$1;
(statearr_6319_6336[(2)] = null);

(statearr_6319_6336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_6320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6320[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_6320[(1)] = (1));

return statearr_6320;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_6303){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6321){var ex__4858__auto__ = e6321;
var statearr_6322_6337 = state_6303;
(statearr_6322_6337[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6303[(4)]))){
var statearr_6323_6338 = state_6303;
(statearr_6323_6338[(1)] = cljs.core.first.call(null,(state_6303[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6339 = state_6303;
state_6303 = G__6339;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_6303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_6303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6324 = f__4929__auto__.call(null);
(statearr_6324[(6)] = c__4928__auto___6326);

return statearr_6324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__6341 = arguments.length;
switch (G__6341) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4928__auto___6387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6365){
var state_val_6366 = (state_6365[(1)]);
if((state_val_6366 === (7))){
var inst_6347 = (state_6365[(7)]);
var inst_6347__$1 = (state_6365[(2)]);
var inst_6348 = (inst_6347__$1 == null);
var inst_6349 = cljs.core.not.call(null,inst_6348);
var state_6365__$1 = (function (){var statearr_6367 = state_6365;
(statearr_6367[(7)] = inst_6347__$1);

return statearr_6367;
})();
if(inst_6349){
var statearr_6368_6388 = state_6365__$1;
(statearr_6368_6388[(1)] = (8));

} else {
var statearr_6369_6389 = state_6365__$1;
(statearr_6369_6389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6366 === (1))){
var inst_6342 = (0);
var state_6365__$1 = (function (){var statearr_6370 = state_6365;
(statearr_6370[(8)] = inst_6342);

return statearr_6370;
})();
var statearr_6371_6390 = state_6365__$1;
(statearr_6371_6390[(2)] = null);

(statearr_6371_6390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6366 === (4))){
var state_6365__$1 = state_6365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6365__$1,(7),ch);
} else {
if((state_val_6366 === (6))){
var inst_6360 = (state_6365[(2)]);
var state_6365__$1 = state_6365;
var statearr_6372_6391 = state_6365__$1;
(statearr_6372_6391[(2)] = inst_6360);

(statearr_6372_6391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6366 === (3))){
var inst_6362 = (state_6365[(2)]);
var inst_6363 = cljs.core.async.close_BANG_.call(null,out);
var state_6365__$1 = (function (){var statearr_6373 = state_6365;
(statearr_6373[(9)] = inst_6362);

return statearr_6373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6365__$1,inst_6363);
} else {
if((state_val_6366 === (2))){
var inst_6342 = (state_6365[(8)]);
var inst_6344 = (inst_6342 < n);
var state_6365__$1 = state_6365;
if(cljs.core.truth_(inst_6344)){
var statearr_6374_6392 = state_6365__$1;
(statearr_6374_6392[(1)] = (4));

} else {
var statearr_6375_6393 = state_6365__$1;
(statearr_6375_6393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6366 === (11))){
var inst_6342 = (state_6365[(8)]);
var inst_6352 = (state_6365[(2)]);
var inst_6353 = (inst_6342 + (1));
var inst_6342__$1 = inst_6353;
var state_6365__$1 = (function (){var statearr_6376 = state_6365;
(statearr_6376[(10)] = inst_6352);

(statearr_6376[(8)] = inst_6342__$1);

return statearr_6376;
})();
var statearr_6377_6394 = state_6365__$1;
(statearr_6377_6394[(2)] = null);

(statearr_6377_6394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6366 === (9))){
var state_6365__$1 = state_6365;
var statearr_6378_6395 = state_6365__$1;
(statearr_6378_6395[(2)] = null);

(statearr_6378_6395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6366 === (5))){
var state_6365__$1 = state_6365;
var statearr_6379_6396 = state_6365__$1;
(statearr_6379_6396[(2)] = null);

(statearr_6379_6396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6366 === (10))){
var inst_6357 = (state_6365[(2)]);
var state_6365__$1 = state_6365;
var statearr_6380_6397 = state_6365__$1;
(statearr_6380_6397[(2)] = inst_6357);

(statearr_6380_6397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6366 === (8))){
var inst_6347 = (state_6365[(7)]);
var state_6365__$1 = state_6365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6365__$1,(11),out,inst_6347);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_6381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6381[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_6381[(1)] = (1));

return statearr_6381;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_6365){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6382){var ex__4858__auto__ = e6382;
var statearr_6383_6398 = state_6365;
(statearr_6383_6398[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6365[(4)]))){
var statearr_6384_6399 = state_6365;
(statearr_6384_6399[(1)] = cljs.core.first.call(null,(state_6365[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6400 = state_6365;
state_6365 = G__6400;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_6365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_6365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6385 = f__4929__auto__.call(null);
(statearr_6385[(6)] = c__4928__auto___6387);

return statearr_6385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6402 = (function (f,ch,meta6403){
this.f = f;
this.ch = ch;
this.meta6403 = meta6403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6404,meta6403__$1){
var self__ = this;
var _6404__$1 = this;
return (new cljs.core.async.t_cljs$core$async6402(self__.f,self__.ch,meta6403__$1));
}));

(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6404){
var self__ = this;
var _6404__$1 = this;
return self__.meta6403;
}));

(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6405 = (function (f,ch,meta6403,_,fn1,meta6406){
this.f = f;
this.ch = ch;
this.meta6403 = meta6403;
this._ = _;
this.fn1 = fn1;
this.meta6406 = meta6406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6407,meta6406__$1){
var self__ = this;
var _6407__$1 = this;
return (new cljs.core.async.t_cljs$core$async6405(self__.f,self__.ch,self__.meta6403,self__._,self__.fn1,meta6406__$1));
}));

(cljs.core.async.t_cljs$core$async6405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6407){
var self__ = this;
var _6407__$1 = this;
return self__.meta6406;
}));

(cljs.core.async.t_cljs$core$async6405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async6405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async6405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__6401_SHARP_){
return f1.call(null,(((p1__6401_SHARP_ == null))?null:self__.f.call(null,p1__6401_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async6405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6403","meta6403",-1469025766,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async6402","cljs.core.async/t_cljs$core$async6402",952795235,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta6406","meta6406",712357009,null)], null);
}));

(cljs.core.async.t_cljs$core$async6405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6405");

(cljs.core.async.t_cljs$core$async6405.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async6405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6405.
 */
cljs.core.async.__GT_t_cljs$core$async6405 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6405(f__$1,ch__$1,meta6403__$1,___$2,fn1__$1,meta6406){
return (new cljs.core.async.t_cljs$core$async6405(f__$1,ch__$1,meta6403__$1,___$2,fn1__$1,meta6406));
});

}

return (new cljs.core.async.t_cljs$core$async6405(self__.f,self__.ch,self__.meta6403,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async6402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6403","meta6403",-1469025766,null)], null);
}));

(cljs.core.async.t_cljs$core$async6402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6402");

(cljs.core.async.t_cljs$core$async6402.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async6402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6402.
 */
cljs.core.async.__GT_t_cljs$core$async6402 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6402(f__$1,ch__$1,meta6403){
return (new cljs.core.async.t_cljs$core$async6402(f__$1,ch__$1,meta6403));
});

}

return (new cljs.core.async.t_cljs$core$async6402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6408 = (function (f,ch,meta6409){
this.f = f;
this.ch = ch;
this.meta6409 = meta6409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6410,meta6409__$1){
var self__ = this;
var _6410__$1 = this;
return (new cljs.core.async.t_cljs$core$async6408(self__.f,self__.ch,meta6409__$1));
}));

(cljs.core.async.t_cljs$core$async6408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6410){
var self__ = this;
var _6410__$1 = this;
return self__.meta6409;
}));

(cljs.core.async.t_cljs$core$async6408.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6408.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async6408.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async6408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6409","meta6409",-1861864965,null)], null);
}));

(cljs.core.async.t_cljs$core$async6408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6408");

(cljs.core.async.t_cljs$core$async6408.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async6408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6408.
 */
cljs.core.async.__GT_t_cljs$core$async6408 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async6408(f__$1,ch__$1,meta6409){
return (new cljs.core.async.t_cljs$core$async6408(f__$1,ch__$1,meta6409));
});

}

return (new cljs.core.async.t_cljs$core$async6408(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6411 = (function (p,ch,meta6412){
this.p = p;
this.ch = ch;
this.meta6412 = meta6412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6413,meta6412__$1){
var self__ = this;
var _6413__$1 = this;
return (new cljs.core.async.t_cljs$core$async6411(self__.p,self__.ch,meta6412__$1));
}));

(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6413){
var self__ = this;
var _6413__$1 = this;
return self__.meta6412;
}));

(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async6411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6412","meta6412",2112030457,null)], null);
}));

(cljs.core.async.t_cljs$core$async6411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6411");

(cljs.core.async.t_cljs$core$async6411.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async6411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6411.
 */
cljs.core.async.__GT_t_cljs$core$async6411 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async6411(p__$1,ch__$1,meta6412){
return (new cljs.core.async.t_cljs$core$async6411(p__$1,ch__$1,meta6412));
});

}

return (new cljs.core.async.t_cljs$core$async6411(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__6415 = arguments.length;
switch (G__6415) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4928__auto___6456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6436){
var state_val_6437 = (state_6436[(1)]);
if((state_val_6437 === (7))){
var inst_6432 = (state_6436[(2)]);
var state_6436__$1 = state_6436;
var statearr_6438_6457 = state_6436__$1;
(statearr_6438_6457[(2)] = inst_6432);

(statearr_6438_6457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6437 === (1))){
var state_6436__$1 = state_6436;
var statearr_6439_6458 = state_6436__$1;
(statearr_6439_6458[(2)] = null);

(statearr_6439_6458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6437 === (4))){
var inst_6418 = (state_6436[(7)]);
var inst_6418__$1 = (state_6436[(2)]);
var inst_6419 = (inst_6418__$1 == null);
var state_6436__$1 = (function (){var statearr_6440 = state_6436;
(statearr_6440[(7)] = inst_6418__$1);

return statearr_6440;
})();
if(cljs.core.truth_(inst_6419)){
var statearr_6441_6459 = state_6436__$1;
(statearr_6441_6459[(1)] = (5));

} else {
var statearr_6442_6460 = state_6436__$1;
(statearr_6442_6460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6437 === (6))){
var inst_6418 = (state_6436[(7)]);
var inst_6423 = p.call(null,inst_6418);
var state_6436__$1 = state_6436;
if(cljs.core.truth_(inst_6423)){
var statearr_6443_6461 = state_6436__$1;
(statearr_6443_6461[(1)] = (8));

} else {
var statearr_6444_6462 = state_6436__$1;
(statearr_6444_6462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6437 === (3))){
var inst_6434 = (state_6436[(2)]);
var state_6436__$1 = state_6436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6436__$1,inst_6434);
} else {
if((state_val_6437 === (2))){
var state_6436__$1 = state_6436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6436__$1,(4),ch);
} else {
if((state_val_6437 === (11))){
var inst_6426 = (state_6436[(2)]);
var state_6436__$1 = state_6436;
var statearr_6445_6463 = state_6436__$1;
(statearr_6445_6463[(2)] = inst_6426);

(statearr_6445_6463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6437 === (9))){
var state_6436__$1 = state_6436;
var statearr_6446_6464 = state_6436__$1;
(statearr_6446_6464[(2)] = null);

(statearr_6446_6464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6437 === (5))){
var inst_6421 = cljs.core.async.close_BANG_.call(null,out);
var state_6436__$1 = state_6436;
var statearr_6447_6465 = state_6436__$1;
(statearr_6447_6465[(2)] = inst_6421);

(statearr_6447_6465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6437 === (10))){
var inst_6429 = (state_6436[(2)]);
var state_6436__$1 = (function (){var statearr_6448 = state_6436;
(statearr_6448[(8)] = inst_6429);

return statearr_6448;
})();
var statearr_6449_6466 = state_6436__$1;
(statearr_6449_6466[(2)] = null);

(statearr_6449_6466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6437 === (8))){
var inst_6418 = (state_6436[(7)]);
var state_6436__$1 = state_6436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6436__$1,(11),out,inst_6418);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_6450 = [null,null,null,null,null,null,null,null,null];
(statearr_6450[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_6450[(1)] = (1));

return statearr_6450;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_6436){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6451){var ex__4858__auto__ = e6451;
var statearr_6452_6467 = state_6436;
(statearr_6452_6467[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6436[(4)]))){
var statearr_6453_6468 = state_6436;
(statearr_6453_6468[(1)] = cljs.core.first.call(null,(state_6436[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6469 = state_6436;
state_6436 = G__6469;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_6436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_6436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6454 = f__4929__auto__.call(null);
(statearr_6454[(6)] = c__4928__auto___6456);

return statearr_6454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__6471 = arguments.length;
switch (G__6471) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__4928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6534){
var state_val_6535 = (state_6534[(1)]);
if((state_val_6535 === (7))){
var inst_6530 = (state_6534[(2)]);
var state_6534__$1 = state_6534;
var statearr_6536_6575 = state_6534__$1;
(statearr_6536_6575[(2)] = inst_6530);

(statearr_6536_6575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (20))){
var inst_6500 = (state_6534[(7)]);
var inst_6511 = (state_6534[(2)]);
var inst_6512 = cljs.core.next.call(null,inst_6500);
var inst_6486 = inst_6512;
var inst_6487 = null;
var inst_6488 = (0);
var inst_6489 = (0);
var state_6534__$1 = (function (){var statearr_6537 = state_6534;
(statearr_6537[(8)] = inst_6511);

(statearr_6537[(9)] = inst_6486);

(statearr_6537[(10)] = inst_6487);

(statearr_6537[(11)] = inst_6488);

(statearr_6537[(12)] = inst_6489);

return statearr_6537;
})();
var statearr_6538_6576 = state_6534__$1;
(statearr_6538_6576[(2)] = null);

(statearr_6538_6576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (1))){
var state_6534__$1 = state_6534;
var statearr_6539_6577 = state_6534__$1;
(statearr_6539_6577[(2)] = null);

(statearr_6539_6577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (4))){
var inst_6475 = (state_6534[(13)]);
var inst_6475__$1 = (state_6534[(2)]);
var inst_6476 = (inst_6475__$1 == null);
var state_6534__$1 = (function (){var statearr_6540 = state_6534;
(statearr_6540[(13)] = inst_6475__$1);

return statearr_6540;
})();
if(cljs.core.truth_(inst_6476)){
var statearr_6541_6578 = state_6534__$1;
(statearr_6541_6578[(1)] = (5));

} else {
var statearr_6542_6579 = state_6534__$1;
(statearr_6542_6579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (15))){
var state_6534__$1 = state_6534;
var statearr_6546_6580 = state_6534__$1;
(statearr_6546_6580[(2)] = null);

(statearr_6546_6580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (21))){
var state_6534__$1 = state_6534;
var statearr_6547_6581 = state_6534__$1;
(statearr_6547_6581[(2)] = null);

(statearr_6547_6581[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (13))){
var inst_6489 = (state_6534[(12)]);
var inst_6486 = (state_6534[(9)]);
var inst_6487 = (state_6534[(10)]);
var inst_6488 = (state_6534[(11)]);
var inst_6496 = (state_6534[(2)]);
var inst_6497 = (inst_6489 + (1));
var tmp6543 = inst_6488;
var tmp6544 = inst_6486;
var tmp6545 = inst_6487;
var inst_6486__$1 = tmp6544;
var inst_6487__$1 = tmp6545;
var inst_6488__$1 = tmp6543;
var inst_6489__$1 = inst_6497;
var state_6534__$1 = (function (){var statearr_6548 = state_6534;
(statearr_6548[(14)] = inst_6496);

(statearr_6548[(9)] = inst_6486__$1);

(statearr_6548[(10)] = inst_6487__$1);

(statearr_6548[(11)] = inst_6488__$1);

(statearr_6548[(12)] = inst_6489__$1);

return statearr_6548;
})();
var statearr_6549_6582 = state_6534__$1;
(statearr_6549_6582[(2)] = null);

(statearr_6549_6582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (22))){
var state_6534__$1 = state_6534;
var statearr_6550_6583 = state_6534__$1;
(statearr_6550_6583[(2)] = null);

(statearr_6550_6583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (6))){
var inst_6475 = (state_6534[(13)]);
var inst_6484 = f.call(null,inst_6475);
var inst_6485 = cljs.core.seq.call(null,inst_6484);
var inst_6486 = inst_6485;
var inst_6487 = null;
var inst_6488 = (0);
var inst_6489 = (0);
var state_6534__$1 = (function (){var statearr_6551 = state_6534;
(statearr_6551[(9)] = inst_6486);

(statearr_6551[(10)] = inst_6487);

(statearr_6551[(11)] = inst_6488);

(statearr_6551[(12)] = inst_6489);

return statearr_6551;
})();
var statearr_6552_6584 = state_6534__$1;
(statearr_6552_6584[(2)] = null);

(statearr_6552_6584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (17))){
var inst_6500 = (state_6534[(7)]);
var inst_6504 = cljs.core.chunk_first.call(null,inst_6500);
var inst_6505 = cljs.core.chunk_rest.call(null,inst_6500);
var inst_6506 = cljs.core.count.call(null,inst_6504);
var inst_6486 = inst_6505;
var inst_6487 = inst_6504;
var inst_6488 = inst_6506;
var inst_6489 = (0);
var state_6534__$1 = (function (){var statearr_6553 = state_6534;
(statearr_6553[(9)] = inst_6486);

(statearr_6553[(10)] = inst_6487);

(statearr_6553[(11)] = inst_6488);

(statearr_6553[(12)] = inst_6489);

return statearr_6553;
})();
var statearr_6554_6585 = state_6534__$1;
(statearr_6554_6585[(2)] = null);

(statearr_6554_6585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (3))){
var inst_6532 = (state_6534[(2)]);
var state_6534__$1 = state_6534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6534__$1,inst_6532);
} else {
if((state_val_6535 === (12))){
var inst_6520 = (state_6534[(2)]);
var state_6534__$1 = state_6534;
var statearr_6555_6586 = state_6534__$1;
(statearr_6555_6586[(2)] = inst_6520);

(statearr_6555_6586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (2))){
var state_6534__$1 = state_6534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6534__$1,(4),in$);
} else {
if((state_val_6535 === (23))){
var inst_6528 = (state_6534[(2)]);
var state_6534__$1 = state_6534;
var statearr_6556_6587 = state_6534__$1;
(statearr_6556_6587[(2)] = inst_6528);

(statearr_6556_6587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (19))){
var inst_6515 = (state_6534[(2)]);
var state_6534__$1 = state_6534;
var statearr_6557_6588 = state_6534__$1;
(statearr_6557_6588[(2)] = inst_6515);

(statearr_6557_6588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (11))){
var inst_6486 = (state_6534[(9)]);
var inst_6500 = (state_6534[(7)]);
var inst_6500__$1 = cljs.core.seq.call(null,inst_6486);
var state_6534__$1 = (function (){var statearr_6558 = state_6534;
(statearr_6558[(7)] = inst_6500__$1);

return statearr_6558;
})();
if(inst_6500__$1){
var statearr_6559_6589 = state_6534__$1;
(statearr_6559_6589[(1)] = (14));

} else {
var statearr_6560_6590 = state_6534__$1;
(statearr_6560_6590[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (9))){
var inst_6522 = (state_6534[(2)]);
var inst_6523 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_6534__$1 = (function (){var statearr_6561 = state_6534;
(statearr_6561[(15)] = inst_6522);

return statearr_6561;
})();
if(cljs.core.truth_(inst_6523)){
var statearr_6562_6591 = state_6534__$1;
(statearr_6562_6591[(1)] = (21));

} else {
var statearr_6563_6592 = state_6534__$1;
(statearr_6563_6592[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (5))){
var inst_6478 = cljs.core.async.close_BANG_.call(null,out);
var state_6534__$1 = state_6534;
var statearr_6564_6593 = state_6534__$1;
(statearr_6564_6593[(2)] = inst_6478);

(statearr_6564_6593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (14))){
var inst_6500 = (state_6534[(7)]);
var inst_6502 = cljs.core.chunked_seq_QMARK_.call(null,inst_6500);
var state_6534__$1 = state_6534;
if(inst_6502){
var statearr_6565_6594 = state_6534__$1;
(statearr_6565_6594[(1)] = (17));

} else {
var statearr_6566_6595 = state_6534__$1;
(statearr_6566_6595[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (16))){
var inst_6518 = (state_6534[(2)]);
var state_6534__$1 = state_6534;
var statearr_6567_6596 = state_6534__$1;
(statearr_6567_6596[(2)] = inst_6518);

(statearr_6567_6596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6535 === (10))){
var inst_6487 = (state_6534[(10)]);
var inst_6489 = (state_6534[(12)]);
var inst_6494 = cljs.core._nth.call(null,inst_6487,inst_6489);
var state_6534__$1 = state_6534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6534__$1,(13),out,inst_6494);
} else {
if((state_val_6535 === (18))){
var inst_6500 = (state_6534[(7)]);
var inst_6509 = cljs.core.first.call(null,inst_6500);
var state_6534__$1 = state_6534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6534__$1,(20),out,inst_6509);
} else {
if((state_val_6535 === (8))){
var inst_6489 = (state_6534[(12)]);
var inst_6488 = (state_6534[(11)]);
var inst_6491 = (inst_6489 < inst_6488);
var inst_6492 = inst_6491;
var state_6534__$1 = state_6534;
if(cljs.core.truth_(inst_6492)){
var statearr_6568_6597 = state_6534__$1;
(statearr_6568_6597[(1)] = (10));

} else {
var statearr_6569_6598 = state_6534__$1;
(statearr_6569_6598[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__4855__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__4855__auto____0 = (function (){
var statearr_6570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6570[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__4855__auto__);

(statearr_6570[(1)] = (1));

return statearr_6570;
});
var cljs$core$async$mapcat_STAR__$_state_machine__4855__auto____1 = (function (state_6534){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6571){var ex__4858__auto__ = e6571;
var statearr_6572_6599 = state_6534;
(statearr_6572_6599[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6534[(4)]))){
var statearr_6573_6600 = state_6534;
(statearr_6573_6600[(1)] = cljs.core.first.call(null,(state_6534[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6601 = state_6534;
state_6534 = G__6601;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__4855__auto__ = function(state_6534){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__4855__auto____1.call(this,state_6534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__4855__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__4855__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6574 = f__4929__auto__.call(null);
(statearr_6574[(6)] = c__4928__auto__);

return statearr_6574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));

return c__4928__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__6603 = arguments.length;
switch (G__6603) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__6606 = arguments.length;
switch (G__6606) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__6609 = arguments.length;
switch (G__6609) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4928__auto___6657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6633){
var state_val_6634 = (state_6633[(1)]);
if((state_val_6634 === (7))){
var inst_6628 = (state_6633[(2)]);
var state_6633__$1 = state_6633;
var statearr_6635_6658 = state_6633__$1;
(statearr_6635_6658[(2)] = inst_6628);

(statearr_6635_6658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6634 === (1))){
var inst_6610 = null;
var state_6633__$1 = (function (){var statearr_6636 = state_6633;
(statearr_6636[(7)] = inst_6610);

return statearr_6636;
})();
var statearr_6637_6659 = state_6633__$1;
(statearr_6637_6659[(2)] = null);

(statearr_6637_6659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6634 === (4))){
var inst_6613 = (state_6633[(8)]);
var inst_6613__$1 = (state_6633[(2)]);
var inst_6614 = (inst_6613__$1 == null);
var inst_6615 = cljs.core.not.call(null,inst_6614);
var state_6633__$1 = (function (){var statearr_6638 = state_6633;
(statearr_6638[(8)] = inst_6613__$1);

return statearr_6638;
})();
if(inst_6615){
var statearr_6639_6660 = state_6633__$1;
(statearr_6639_6660[(1)] = (5));

} else {
var statearr_6640_6661 = state_6633__$1;
(statearr_6640_6661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6634 === (6))){
var state_6633__$1 = state_6633;
var statearr_6641_6662 = state_6633__$1;
(statearr_6641_6662[(2)] = null);

(statearr_6641_6662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6634 === (3))){
var inst_6630 = (state_6633[(2)]);
var inst_6631 = cljs.core.async.close_BANG_.call(null,out);
var state_6633__$1 = (function (){var statearr_6642 = state_6633;
(statearr_6642[(9)] = inst_6630);

return statearr_6642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6633__$1,inst_6631);
} else {
if((state_val_6634 === (2))){
var state_6633__$1 = state_6633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6633__$1,(4),ch);
} else {
if((state_val_6634 === (11))){
var inst_6613 = (state_6633[(8)]);
var inst_6622 = (state_6633[(2)]);
var inst_6610 = inst_6613;
var state_6633__$1 = (function (){var statearr_6643 = state_6633;
(statearr_6643[(10)] = inst_6622);

(statearr_6643[(7)] = inst_6610);

return statearr_6643;
})();
var statearr_6644_6663 = state_6633__$1;
(statearr_6644_6663[(2)] = null);

(statearr_6644_6663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6634 === (9))){
var inst_6613 = (state_6633[(8)]);
var state_6633__$1 = state_6633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6633__$1,(11),out,inst_6613);
} else {
if((state_val_6634 === (5))){
var inst_6613 = (state_6633[(8)]);
var inst_6610 = (state_6633[(7)]);
var inst_6617 = cljs.core._EQ_.call(null,inst_6613,inst_6610);
var state_6633__$1 = state_6633;
if(inst_6617){
var statearr_6646_6664 = state_6633__$1;
(statearr_6646_6664[(1)] = (8));

} else {
var statearr_6647_6665 = state_6633__$1;
(statearr_6647_6665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6634 === (10))){
var inst_6625 = (state_6633[(2)]);
var state_6633__$1 = state_6633;
var statearr_6648_6666 = state_6633__$1;
(statearr_6648_6666[(2)] = inst_6625);

(statearr_6648_6666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6634 === (8))){
var inst_6610 = (state_6633[(7)]);
var tmp6645 = inst_6610;
var inst_6610__$1 = tmp6645;
var state_6633__$1 = (function (){var statearr_6649 = state_6633;
(statearr_6649[(7)] = inst_6610__$1);

return statearr_6649;
})();
var statearr_6650_6667 = state_6633__$1;
(statearr_6650_6667[(2)] = null);

(statearr_6650_6667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_6651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6651[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_6651[(1)] = (1));

return statearr_6651;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_6633){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6652){var ex__4858__auto__ = e6652;
var statearr_6653_6668 = state_6633;
(statearr_6653_6668[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6633[(4)]))){
var statearr_6654_6669 = state_6633;
(statearr_6654_6669[(1)] = cljs.core.first.call(null,(state_6633[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6670 = state_6633;
state_6633 = G__6670;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_6633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_6633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6655 = f__4929__auto__.call(null);
(statearr_6655[(6)] = c__4928__auto___6657);

return statearr_6655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__6672 = arguments.length;
switch (G__6672) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4928__auto___6739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6710){
var state_val_6711 = (state_6710[(1)]);
if((state_val_6711 === (7))){
var inst_6706 = (state_6710[(2)]);
var state_6710__$1 = state_6710;
var statearr_6712_6740 = state_6710__$1;
(statearr_6712_6740[(2)] = inst_6706);

(statearr_6712_6740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (1))){
var inst_6673 = (new Array(n));
var inst_6674 = inst_6673;
var inst_6675 = (0);
var state_6710__$1 = (function (){var statearr_6713 = state_6710;
(statearr_6713[(7)] = inst_6674);

(statearr_6713[(8)] = inst_6675);

return statearr_6713;
})();
var statearr_6714_6741 = state_6710__$1;
(statearr_6714_6741[(2)] = null);

(statearr_6714_6741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (4))){
var inst_6678 = (state_6710[(9)]);
var inst_6678__$1 = (state_6710[(2)]);
var inst_6679 = (inst_6678__$1 == null);
var inst_6680 = cljs.core.not.call(null,inst_6679);
var state_6710__$1 = (function (){var statearr_6715 = state_6710;
(statearr_6715[(9)] = inst_6678__$1);

return statearr_6715;
})();
if(inst_6680){
var statearr_6716_6742 = state_6710__$1;
(statearr_6716_6742[(1)] = (5));

} else {
var statearr_6717_6743 = state_6710__$1;
(statearr_6717_6743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (15))){
var inst_6700 = (state_6710[(2)]);
var state_6710__$1 = state_6710;
var statearr_6718_6744 = state_6710__$1;
(statearr_6718_6744[(2)] = inst_6700);

(statearr_6718_6744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (13))){
var state_6710__$1 = state_6710;
var statearr_6719_6745 = state_6710__$1;
(statearr_6719_6745[(2)] = null);

(statearr_6719_6745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (6))){
var inst_6675 = (state_6710[(8)]);
var inst_6696 = (inst_6675 > (0));
var state_6710__$1 = state_6710;
if(cljs.core.truth_(inst_6696)){
var statearr_6720_6746 = state_6710__$1;
(statearr_6720_6746[(1)] = (12));

} else {
var statearr_6721_6747 = state_6710__$1;
(statearr_6721_6747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (3))){
var inst_6708 = (state_6710[(2)]);
var state_6710__$1 = state_6710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6710__$1,inst_6708);
} else {
if((state_val_6711 === (12))){
var inst_6674 = (state_6710[(7)]);
var inst_6698 = cljs.core.vec.call(null,inst_6674);
var state_6710__$1 = state_6710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6710__$1,(15),out,inst_6698);
} else {
if((state_val_6711 === (2))){
var state_6710__$1 = state_6710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6710__$1,(4),ch);
} else {
if((state_val_6711 === (11))){
var inst_6690 = (state_6710[(2)]);
var inst_6691 = (new Array(n));
var inst_6674 = inst_6691;
var inst_6675 = (0);
var state_6710__$1 = (function (){var statearr_6722 = state_6710;
(statearr_6722[(10)] = inst_6690);

(statearr_6722[(7)] = inst_6674);

(statearr_6722[(8)] = inst_6675);

return statearr_6722;
})();
var statearr_6723_6748 = state_6710__$1;
(statearr_6723_6748[(2)] = null);

(statearr_6723_6748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (9))){
var inst_6674 = (state_6710[(7)]);
var inst_6688 = cljs.core.vec.call(null,inst_6674);
var state_6710__$1 = state_6710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6710__$1,(11),out,inst_6688);
} else {
if((state_val_6711 === (5))){
var inst_6674 = (state_6710[(7)]);
var inst_6675 = (state_6710[(8)]);
var inst_6678 = (state_6710[(9)]);
var inst_6683 = (state_6710[(11)]);
var inst_6682 = (inst_6674[inst_6675] = inst_6678);
var inst_6683__$1 = (inst_6675 + (1));
var inst_6684 = (inst_6683__$1 < n);
var state_6710__$1 = (function (){var statearr_6724 = state_6710;
(statearr_6724[(12)] = inst_6682);

(statearr_6724[(11)] = inst_6683__$1);

return statearr_6724;
})();
if(cljs.core.truth_(inst_6684)){
var statearr_6725_6749 = state_6710__$1;
(statearr_6725_6749[(1)] = (8));

} else {
var statearr_6726_6750 = state_6710__$1;
(statearr_6726_6750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (14))){
var inst_6703 = (state_6710[(2)]);
var inst_6704 = cljs.core.async.close_BANG_.call(null,out);
var state_6710__$1 = (function (){var statearr_6728 = state_6710;
(statearr_6728[(13)] = inst_6703);

return statearr_6728;
})();
var statearr_6729_6751 = state_6710__$1;
(statearr_6729_6751[(2)] = inst_6704);

(statearr_6729_6751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (10))){
var inst_6694 = (state_6710[(2)]);
var state_6710__$1 = state_6710;
var statearr_6730_6752 = state_6710__$1;
(statearr_6730_6752[(2)] = inst_6694);

(statearr_6730_6752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6711 === (8))){
var inst_6674 = (state_6710[(7)]);
var inst_6683 = (state_6710[(11)]);
var tmp6727 = inst_6674;
var inst_6674__$1 = tmp6727;
var inst_6675 = inst_6683;
var state_6710__$1 = (function (){var statearr_6731 = state_6710;
(statearr_6731[(7)] = inst_6674__$1);

(statearr_6731[(8)] = inst_6675);

return statearr_6731;
})();
var statearr_6732_6753 = state_6710__$1;
(statearr_6732_6753[(2)] = null);

(statearr_6732_6753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_6733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6733[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_6733[(1)] = (1));

return statearr_6733;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_6710){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6734){var ex__4858__auto__ = e6734;
var statearr_6735_6754 = state_6710;
(statearr_6735_6754[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6710[(4)]))){
var statearr_6736_6755 = state_6710;
(statearr_6736_6755[(1)] = cljs.core.first.call(null,(state_6710[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6756 = state_6710;
state_6710 = G__6756;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_6710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_6710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6737 = f__4929__auto__.call(null);
(statearr_6737[(6)] = c__4928__auto___6739);

return statearr_6737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__6758 = arguments.length;
switch (G__6758) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4928__auto___6836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_6803){
var state_val_6804 = (state_6803[(1)]);
if((state_val_6804 === (7))){
var inst_6799 = (state_6803[(2)]);
var state_6803__$1 = state_6803;
var statearr_6805_6837 = state_6803__$1;
(statearr_6805_6837[(2)] = inst_6799);

(statearr_6805_6837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (1))){
var inst_6759 = [];
var inst_6760 = inst_6759;
var inst_6761 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6803__$1 = (function (){var statearr_6806 = state_6803;
(statearr_6806[(7)] = inst_6760);

(statearr_6806[(8)] = inst_6761);

return statearr_6806;
})();
var statearr_6807_6838 = state_6803__$1;
(statearr_6807_6838[(2)] = null);

(statearr_6807_6838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (4))){
var inst_6764 = (state_6803[(9)]);
var inst_6764__$1 = (state_6803[(2)]);
var inst_6765 = (inst_6764__$1 == null);
var inst_6766 = cljs.core.not.call(null,inst_6765);
var state_6803__$1 = (function (){var statearr_6808 = state_6803;
(statearr_6808[(9)] = inst_6764__$1);

return statearr_6808;
})();
if(inst_6766){
var statearr_6809_6839 = state_6803__$1;
(statearr_6809_6839[(1)] = (5));

} else {
var statearr_6810_6840 = state_6803__$1;
(statearr_6810_6840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (15))){
var inst_6760 = (state_6803[(7)]);
var inst_6791 = cljs.core.vec.call(null,inst_6760);
var state_6803__$1 = state_6803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6803__$1,(18),out,inst_6791);
} else {
if((state_val_6804 === (13))){
var inst_6786 = (state_6803[(2)]);
var state_6803__$1 = state_6803;
var statearr_6811_6841 = state_6803__$1;
(statearr_6811_6841[(2)] = inst_6786);

(statearr_6811_6841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (6))){
var inst_6760 = (state_6803[(7)]);
var inst_6788 = inst_6760.length;
var inst_6789 = (inst_6788 > (0));
var state_6803__$1 = state_6803;
if(cljs.core.truth_(inst_6789)){
var statearr_6812_6842 = state_6803__$1;
(statearr_6812_6842[(1)] = (15));

} else {
var statearr_6813_6843 = state_6803__$1;
(statearr_6813_6843[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (17))){
var inst_6796 = (state_6803[(2)]);
var inst_6797 = cljs.core.async.close_BANG_.call(null,out);
var state_6803__$1 = (function (){var statearr_6814 = state_6803;
(statearr_6814[(10)] = inst_6796);

return statearr_6814;
})();
var statearr_6815_6844 = state_6803__$1;
(statearr_6815_6844[(2)] = inst_6797);

(statearr_6815_6844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (3))){
var inst_6801 = (state_6803[(2)]);
var state_6803__$1 = state_6803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6803__$1,inst_6801);
} else {
if((state_val_6804 === (12))){
var inst_6760 = (state_6803[(7)]);
var inst_6779 = cljs.core.vec.call(null,inst_6760);
var state_6803__$1 = state_6803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6803__$1,(14),out,inst_6779);
} else {
if((state_val_6804 === (2))){
var state_6803__$1 = state_6803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6803__$1,(4),ch);
} else {
if((state_val_6804 === (11))){
var inst_6760 = (state_6803[(7)]);
var inst_6764 = (state_6803[(9)]);
var inst_6768 = (state_6803[(11)]);
var inst_6776 = inst_6760.push(inst_6764);
var tmp6816 = inst_6760;
var inst_6760__$1 = tmp6816;
var inst_6761 = inst_6768;
var state_6803__$1 = (function (){var statearr_6817 = state_6803;
(statearr_6817[(12)] = inst_6776);

(statearr_6817[(7)] = inst_6760__$1);

(statearr_6817[(8)] = inst_6761);

return statearr_6817;
})();
var statearr_6818_6845 = state_6803__$1;
(statearr_6818_6845[(2)] = null);

(statearr_6818_6845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (9))){
var inst_6761 = (state_6803[(8)]);
var inst_6772 = cljs.core.keyword_identical_QMARK_.call(null,inst_6761,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_6803__$1 = state_6803;
var statearr_6819_6846 = state_6803__$1;
(statearr_6819_6846[(2)] = inst_6772);

(statearr_6819_6846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (5))){
var inst_6764 = (state_6803[(9)]);
var inst_6768 = (state_6803[(11)]);
var inst_6761 = (state_6803[(8)]);
var inst_6769 = (state_6803[(13)]);
var inst_6768__$1 = f.call(null,inst_6764);
var inst_6769__$1 = cljs.core._EQ_.call(null,inst_6768__$1,inst_6761);
var state_6803__$1 = (function (){var statearr_6820 = state_6803;
(statearr_6820[(11)] = inst_6768__$1);

(statearr_6820[(13)] = inst_6769__$1);

return statearr_6820;
})();
if(inst_6769__$1){
var statearr_6821_6847 = state_6803__$1;
(statearr_6821_6847[(1)] = (8));

} else {
var statearr_6822_6848 = state_6803__$1;
(statearr_6822_6848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (14))){
var inst_6764 = (state_6803[(9)]);
var inst_6768 = (state_6803[(11)]);
var inst_6781 = (state_6803[(2)]);
var inst_6782 = [];
var inst_6783 = inst_6782.push(inst_6764);
var inst_6760 = inst_6782;
var inst_6761 = inst_6768;
var state_6803__$1 = (function (){var statearr_6823 = state_6803;
(statearr_6823[(14)] = inst_6781);

(statearr_6823[(15)] = inst_6783);

(statearr_6823[(7)] = inst_6760);

(statearr_6823[(8)] = inst_6761);

return statearr_6823;
})();
var statearr_6824_6849 = state_6803__$1;
(statearr_6824_6849[(2)] = null);

(statearr_6824_6849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (16))){
var state_6803__$1 = state_6803;
var statearr_6825_6850 = state_6803__$1;
(statearr_6825_6850[(2)] = null);

(statearr_6825_6850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (10))){
var inst_6774 = (state_6803[(2)]);
var state_6803__$1 = state_6803;
if(cljs.core.truth_(inst_6774)){
var statearr_6826_6851 = state_6803__$1;
(statearr_6826_6851[(1)] = (11));

} else {
var statearr_6827_6852 = state_6803__$1;
(statearr_6827_6852[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (18))){
var inst_6793 = (state_6803[(2)]);
var state_6803__$1 = state_6803;
var statearr_6828_6853 = state_6803__$1;
(statearr_6828_6853[(2)] = inst_6793);

(statearr_6828_6853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6804 === (8))){
var inst_6769 = (state_6803[(13)]);
var state_6803__$1 = state_6803;
var statearr_6829_6854 = state_6803__$1;
(statearr_6829_6854[(2)] = inst_6769);

(statearr_6829_6854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__4855__auto__ = null;
var cljs$core$async$state_machine__4855__auto____0 = (function (){
var statearr_6830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6830[(0)] = cljs$core$async$state_machine__4855__auto__);

(statearr_6830[(1)] = (1));

return statearr_6830;
});
var cljs$core$async$state_machine__4855__auto____1 = (function (state_6803){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_6803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e6831){var ex__4858__auto__ = e6831;
var statearr_6832_6855 = state_6803;
(statearr_6832_6855[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_6803[(4)]))){
var statearr_6833_6856 = state_6803;
(statearr_6833_6856[(1)] = cljs.core.first.call(null,(state_6803[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6857 = state_6803;
state_6803 = G__6857;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
cljs$core$async$state_machine__4855__auto__ = function(state_6803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4855__auto____1.call(this,state_6803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4855__auto____0;
cljs$core$async$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4855__auto____1;
return cljs$core$async$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_6834 = f__4929__auto__.call(null);
(statearr_6834[(6)] = c__4928__auto___6836);

return statearr_6834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
