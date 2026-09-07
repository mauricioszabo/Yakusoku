// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.misc.refs');
goog.require('cljs.core');
/**
 * Clojure/Clojurescript efficient keyword comparison.
 */
com.wsscode.misc.refs.kw_identical_QMARK_ = (function com$wsscode$misc$refs$kw_identical_QMARK_(kw_a,kw_b){
return cljs.core.keyword_identical_QMARK_.call(null,kw_a,kw_b);
});
/**
 * Check if x is an atom.
 */
com.wsscode.misc.refs.atom_QMARK_ = (function com$wsscode$misc$refs$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

/**
 * @interface
 */
com.wsscode.misc.refs.GenericBox = function(){};

var com$wsscode$misc$refs$GenericBox$_greset_BANG_$dyn_548 = (function (this$,value){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.misc.refs._greset_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,value);
} else {
var m__5349__auto__ = (com.wsscode.misc.refs._greset_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"GenericBox.-greset!",this$);
}
}
});
com.wsscode.misc.refs._greset_BANG_ = (function com$wsscode$misc$refs$_greset_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_greset_BANG_$arity$2 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_greset_BANG_$arity$2(this$,value);
} else {
return com$wsscode$misc$refs$GenericBox$_greset_BANG_$dyn_548.call(null,this$,value);
}
});

var com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_549 = (function() {
var G__550 = null;
var G__550__2 = (function (this$,f){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.misc.refs._gswap_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,f);
} else {
var m__5349__auto__ = (com.wsscode.misc.refs._gswap_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"GenericBox.-gswap!",this$);
}
}
});
var G__550__3 = (function (this$,f,x){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.misc.refs._gswap_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,f,x);
} else {
var m__5349__auto__ = (com.wsscode.misc.refs._gswap_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,f,x);
} else {
throw cljs.core.missing_protocol.call(null,"GenericBox.-gswap!",this$);
}
}
});
var G__550__4 = (function (this$,f,x,y){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.misc.refs._gswap_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,f,x,y);
} else {
var m__5349__auto__ = (com.wsscode.misc.refs._gswap_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,f,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"GenericBox.-gswap!",this$);
}
}
});
var G__550__5 = (function (this$,f,x,y,more){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.misc.refs._gswap_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,f,x,y,more);
} else {
var m__5349__auto__ = (com.wsscode.misc.refs._gswap_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,f,x,y,more);
} else {
throw cljs.core.missing_protocol.call(null,"GenericBox.-gswap!",this$);
}
}
});
G__550 = function(this$,f,x,y,more){
switch(arguments.length){
case 2:
return G__550__2.call(this,this$,f);
case 3:
return G__550__3.call(this,this$,f,x);
case 4:
return G__550__4.call(this,this$,f,x,y);
case 5:
return G__550__5.call(this,this$,f,x,y,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__550.cljs$core$IFn$_invoke$arity$2 = G__550__2;
G__550.cljs$core$IFn$_invoke$arity$3 = G__550__3;
G__550.cljs$core$IFn$_invoke$arity$4 = G__550__4;
G__550.cljs$core$IFn$_invoke$arity$5 = G__550__5;
return G__550;
})()
;
com.wsscode.misc.refs._gswap_BANG_ = (function com$wsscode$misc$refs$_gswap_BANG_(var_args){
var G__547 = arguments.length;
switch (G__547) {
case 2:
return com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$2 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$2(this$,f);
} else {
return com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_549.call(null,this$,f);
}
}));

(com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,x){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$3 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$3(this$,f,x);
} else {
return com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_549.call(null,this$,f,x);
}
}));

(com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,x,y){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$4 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$4(this$,f,x,y);
} else {
return com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_549.call(null,this$,f,x,y);
}
}));

(com.wsscode.misc.refs._gswap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (this$,f,x,y,more){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$5 == null)))))){
return this$.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$5(this$,f,x,y,more);
} else {
return com$wsscode$misc$refs$GenericBox$_gswap_BANG_$dyn_549.call(null,this$,f,x,y,more);
}
}));

(com.wsscode.misc.refs._gswap_BANG_.cljs$lang$maxFixedArity = 5);


(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_greset_BANG_$arity$2 = (function (this$,value){
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,value);
}));

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,this$__$1,f);
}));

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$3 = (function (this$,f,x){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,this$__$1,f,x);
}));

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$4 = (function (this$,f,x,y){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,this$__$1,f,x,y);
}));

(cljs.core.Atom.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$5 = (function (this$,f,x,y,more){
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.swap_BANG_,this$__$1,f,x,y,more);
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_greset_BANG_$arity$2 = (function (this$,value){
var this$__$1 = this;
return cljs.core.vreset_BANG_.call(null,this$__$1,value);
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core._vreset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$3 = (function (this$,f,x){
var this$__$1 = this;
return cljs.core._vreset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),x));
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$4 = (function (this$,f,x,y){
var this$__$1 = this;
return cljs.core._vreset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),x,y));
}));

(cljs.core.Volatile.prototype.com$wsscode$misc$refs$GenericBox$_gswap_BANG_$arity$5 = (function (this$,f,x,y,more){
var this$__$1 = this;
return cljs.core.vreset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core.deref.call(null,this$__$1),x,y,more));
}));
com.wsscode.misc.refs.greset_BANG_ = (function com$wsscode$misc$refs$greset_BANG_(this$,val){
return com.wsscode.misc.refs._greset_BANG_.call(null,this$,val);
});
com.wsscode.misc.refs.gswap_BANG_ = (function com$wsscode$misc$refs$gswap_BANG_(var_args){
var G__558 = arguments.length;
switch (G__558) {
case 2:
return com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___560 = arguments.length;
var i__5727__auto___561 = (0);
while(true){
if((i__5727__auto___561 < len__5726__auto___560)){
args_arr__5751__auto__.push((arguments[i__5727__auto___561]));

var G__562 = (i__5727__auto___561 + (1));
i__5727__auto___561 = G__562;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
return com.wsscode.misc.refs._gswap_BANG_.call(null,this$,f);
}));

(com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,x){
return com.wsscode.misc.refs._gswap_BANG_.call(null,this$,f,x);
}));

(com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,x,y){
return com.wsscode.misc.refs._gswap_BANG_.call(null,this$,f,x,y);
}));

(com.wsscode.misc.refs.gswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,f,x,y,more){
return com.wsscode.misc.refs._gswap_BANG_.call(null,this$,f,x,y,more);
}));

/** @this {Function} */
(com.wsscode.misc.refs.gswap_BANG_.cljs$lang$applyTo = (function (seq553){
var G__554 = cljs.core.first.call(null,seq553);
var seq553__$1 = cljs.core.next.call(null,seq553);
var G__555 = cljs.core.first.call(null,seq553__$1);
var seq553__$2 = cljs.core.next.call(null,seq553__$1);
var G__556 = cljs.core.first.call(null,seq553__$2);
var seq553__$3 = cljs.core.next.call(null,seq553__$2);
var G__557 = cljs.core.first.call(null,seq553__$3);
var seq553__$4 = cljs.core.next.call(null,seq553__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__554,G__555,G__556,G__557,seq553__$4);
}));

(com.wsscode.misc.refs.gswap_BANG_.cljs$lang$maxFixedArity = (4));


//# sourceMappingURL=refs.js.map
