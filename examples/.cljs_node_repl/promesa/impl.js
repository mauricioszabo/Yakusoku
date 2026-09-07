// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('promesa.impl');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('promesa.util');
goog.require('promesa.exec');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x17984 = obj;
(x17984.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x17984.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x17984.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x17984;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__17985_SHARP_){
return f.call(null,p1__17985_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__17986_SHARP_){
return f.call(null,p1__17986_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__17987_SHARP_){
return f.call(null,p1__17987_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__17988_SHARP_){
return f.call(null,p1__17988_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__17989_SHARP_){
return f.call(null,p1__17989_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__17990_SHARP_){
return f.call(null,p1__17990_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__17991_SHARP_){
return f.call(null,p1__17991_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__17992_SHARP_){
return f.call(null,p1__17992_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__17993_SHARP_){
return f.call(null,p1__17993_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__17994_SHARP_){
return f.call(null,p1__17994_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__17995_SHARP_){
return f.call(null,p1__17995_SHARP_,null);
}),(function (p1__17996_SHARP_){
return f.call(null,null,p1__17996_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__17997_SHARP_){
return f.call(null,p1__17997_SHARP_,null);
}),(function (p1__17998_SHARP_){
return f.call(null,null,p1__17998_SHARP_);
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__17999_SHARP_){
return f.call(null,p1__17999_SHARP_,null);
}),(function (p1__18000_SHARP_){
return f.call(null,null,p1__18000_SHARP_);
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__18001_SHARP_){
return f.call(null,p1__18001_SHARP_,null);
}),(function (p1__18002_SHARP_){
return f.call(null,null,p1__18002_SHARP_);
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_.call(null,Promise);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected.call(null,e__$1);
}));

(promesa.protocols.IPromiseFactory["_"] = true);

(promesa.protocols._promise["_"] = (function (v){
return promesa.impl.resolved.call(null,v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write.call(null,writer,promesa.impl.promise__GT_str.call(null,p__$1));
}));

//# sourceMappingURL=impl.js.map
