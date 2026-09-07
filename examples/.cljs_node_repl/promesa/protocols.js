// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('promesa.protocols');
goog.require('cljs.core');

/**
 * A promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_bind$dyn_17922 = (function() {
var G__17923 = null;
var G__17923__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._bind[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f);
} else {
var m__5349__auto__ = (promesa.protocols._bind["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-bind",_);
}
}
});
var G__17923__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._bind[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f,executor);
} else {
var m__5349__auto__ = (promesa.protocols._bind["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-bind",_);
}
}
});
G__17923 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__17923__2.call(this,_,f);
case 3:
return G__17923__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17923.cljs$core$IFn$_invoke$arity$2 = G__17923__2;
G__17923.cljs$core$IFn$_invoke$arity$3 = G__17923__3;
return G__17923;
})()
;
/**
 * Apply function to a computation and flatten.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__17909 = arguments.length;
switch (G__17909) {
case 2:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_bind$dyn_17922.call(null,_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_17922.call(null,_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_map$dyn_17925 = (function() {
var G__17926 = null;
var G__17926__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._map[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f);
} else {
var m__5349__auto__ = (promesa.protocols._map["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-map",_);
}
}
});
var G__17926__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._map[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f,executor);
} else {
var m__5349__auto__ = (promesa.protocols._map["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-map",_);
}
}
});
G__17926 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__17926__2.call(this,_,f);
case 3:
return G__17926__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17926.cljs$core$IFn$_invoke$arity$2 = G__17926__2;
G__17926.cljs$core$IFn$_invoke$arity$3 = G__17926__3;
return G__17926;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__17911 = arguments.length;
switch (G__17911) {
case 2:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_map$dyn_17925.call(null,_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_17925.call(null,_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_then$dyn_17928 = (function() {
var G__17929 = null;
var G__17929__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._then[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f);
} else {
var m__5349__auto__ = (promesa.protocols._then["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-then",_);
}
}
});
var G__17929__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._then[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f,executor);
} else {
var m__5349__auto__ = (promesa.protocols._then["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-then",_);
}
}
});
G__17929 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__17929__2.call(this,_,f);
case 3:
return G__17929__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17929.cljs$core$IFn$_invoke$arity$2 = G__17929__2;
G__17929.cljs$core$IFn$_invoke$arity$3 = G__17929__3;
return G__17929;
})()
;
/**
 * Apply function to a computation and flatten if promise found.
 */
promesa.protocols._then = (function promesa$protocols$_then(var_args){
var G__17913 = arguments.length;
switch (G__17913) {
case 2:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_then$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_then$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_then$dyn_17928.call(null,_,f);
}
}));

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_then$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_then$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_then$dyn_17928.call(null,_,f,executor);
}
}));

(promesa.protocols._then.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_mapErr$dyn_17931 = (function() {
var G__17932 = null;
var G__17932__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._mapErr[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f);
} else {
var m__5349__auto__ = (promesa.protocols._mapErr["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-mapErr",_);
}
}
});
var G__17932__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._mapErr[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f,executor);
} else {
var m__5349__auto__ = (promesa.protocols._mapErr["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-mapErr",_);
}
}
});
G__17932 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__17932__2.call(this,_,f);
case 3:
return G__17932__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17932.cljs$core$IFn$_invoke$arity$2 = G__17932__2;
G__17932.cljs$core$IFn$_invoke$arity$3 = G__17932__3;
return G__17932;
})()
;
/**
 * Apply function to a failed computation.
 */
promesa.protocols._mapErr = (function promesa$protocols$_mapErr(var_args){
var G__17915 = arguments.length;
switch (G__17915) {
case 2:
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_mapErr$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_mapErr$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_mapErr$dyn_17931.call(null,_,f);
}
}));

(promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_mapErr$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_mapErr$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_mapErr$dyn_17931.call(null,_,f,executor);
}
}));

(promesa.protocols._mapErr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_thenErr$dyn_17934 = (function() {
var G__17935 = null;
var G__17935__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._thenErr[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f);
} else {
var m__5349__auto__ = (promesa.protocols._thenErr["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-thenErr",_);
}
}
});
var G__17935__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._thenErr[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f,executor);
} else {
var m__5349__auto__ = (promesa.protocols._thenErr["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-thenErr",_);
}
}
});
G__17935 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__17935__2.call(this,_,f);
case 3:
return G__17935__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17935.cljs$core$IFn$_invoke$arity$2 = G__17935__2;
G__17935.cljs$core$IFn$_invoke$arity$3 = G__17935__3;
return G__17935;
})()
;
/**
 * Apply function to a failed computation. and flatten if promise found.
 */
promesa.protocols._thenErr = (function promesa$protocols$_thenErr(var_args){
var G__17917 = arguments.length;
switch (G__17917) {
case 2:
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_thenErr$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_thenErr$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_thenErr$dyn_17934.call(null,_,f);
}
}));

(promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_thenErr$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_thenErr$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_thenErr$dyn_17934.call(null,_,f,executor);
}
}));

(promesa.protocols._thenErr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_17937 = (function() {
var G__17938 = null;
var G__17938__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._handle[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f);
} else {
var m__5349__auto__ = (promesa.protocols._handle["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-handle",_);
}
}
});
var G__17938__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._handle[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f,executor);
} else {
var m__5349__auto__ = (promesa.protocols._handle["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-handle",_);
}
}
});
G__17938 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__17938__2.call(this,_,f);
case 3:
return G__17938__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17938.cljs$core$IFn$_invoke$arity$2 = G__17938__2;
G__17938.cljs$core$IFn$_invoke$arity$3 = G__17938__3;
return G__17938;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful and flatten if promise found.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__17919 = arguments.length;
switch (G__17919) {
case 2:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_handle$dyn_17937.call(null,_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_17937.call(null,_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_finally$dyn_17940 = (function() {
var G__17941 = null;
var G__17941__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._finally[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f);
} else {
var m__5349__auto__ = (promesa.protocols._finally["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-finally",_);
}
}
});
var G__17941__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._finally[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,f,executor);
} else {
var m__5349__auto__ = (promesa.protocols._finally["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-finally",_);
}
}
});
G__17941 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__17941__2.call(this,_,f);
case 3:
return G__17941__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17941.cljs$core$IFn$_invoke$arity$2 = G__17941__2;
G__17941.cljs$core$IFn$_invoke$arity$3 = G__17941__3;
return G__17941;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__17921 = arguments.length;
switch (G__17921) {
case 2:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_finally$dyn_17940.call(null,_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_17940.call(null,_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

var promesa$protocols$IState$_extract$dyn_17943 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._extract[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (promesa.protocols._extract["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-extract",_);
}
}
});
/**
 * Extract the current value.
 */
promesa.protocols._extract = (function promesa$protocols$_extract(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_extract$arity$1 == null)))))){
return _.promesa$protocols$IState$_extract$arity$1(_);
} else {
return promesa$protocols$IState$_extract$dyn_17943.call(null,_);
}
});

var promesa$protocols$IState$_resolved_QMARK_$dyn_17944 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (promesa.protocols._resolved_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-resolved?",_);
}
}
});
/**
 * Returns true if a promise is resolved.
 */
promesa.protocols._resolved_QMARK_ = (function promesa$protocols$_resolved_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_resolved_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_resolved_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_resolved_QMARK_$dyn_17944.call(null,_);
}
});

var promesa$protocols$IState$_rejected_QMARK_$dyn_17945 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (promesa.protocols._rejected_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-rejected?",_);
}
}
});
/**
 * Returns true if a promise is rejected.
 */
promesa.protocols._rejected_QMARK_ = (function promesa$protocols$_rejected_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_rejected_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_rejected_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_rejected_QMARK_$dyn_17945.call(null,_);
}
});

var promesa$protocols$IState$_pending_QMARK_$dyn_17946 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._pending_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (promesa.protocols._pending_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-pending?",_);
}
}
});
/**
 * Retutns true if a promise is pending.
 */
promesa.protocols._pending_QMARK_ = (function promesa$protocols$_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_pending_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_pending_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_pending_QMARK_$dyn_17946.call(null,_);
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_17947 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._promise[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (promesa.protocols._promise["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IPromiseFactory.-promise",_);
}
}
});
/**
 * Create a promise instance from other types
 */
promesa.protocols._promise = (function promesa$protocols$_promise(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromiseFactory$_promise$arity$1 == null)))))){
return _.promesa$protocols$IPromiseFactory$_promise$arity$1(_);
} else {
return promesa$protocols$IPromiseFactory$_promise$dyn_17947.call(null,_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_17948 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancel!",_);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_17948.call(null,_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_17949 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancelled?",_);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_17949.call(null,_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_17950 = (function (_,v){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,v);
} else {
var m__5349__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"ICompletable.-resolve!",_);
}
}
});
/**
 * Deliver a value to empty promise.
 */
promesa.protocols._resolve_BANG_ = (function promesa$protocols$_resolve_BANG_(_,v){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_resolve_BANG_$arity$2(_,v);
} else {
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_17950.call(null,_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_17951 = (function (_,e){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,e);
} else {
var m__5349__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,e);
} else {
throw cljs.core.missing_protocol.call(null,"ICompletable.-reject!",_);
}
}
});
/**
 * Deliver an error to empty promise.
 */
promesa.protocols._reject_BANG_ = (function promesa$protocols$_reject_BANG_(_,e){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_reject_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_reject_BANG_$arity$2(_,e);
} else {
return promesa$protocols$ICompletable$_reject_BANG_$dyn_17951.call(null,_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_run_BANG_$dyn_17952 = (function (_,task){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._run_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,task);
} else {
var m__5349__auto__ = (promesa.protocols._run_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,task);
} else {
throw cljs.core.missing_protocol.call(null,"IExecutor.-run!",_);
}
}
});
/**
 * Run a task and return a promise.
 */
promesa.protocols._run_BANG_ = (function promesa$protocols$_run_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_run_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_run_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_run_BANG_$dyn_17952.call(null,_,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_17953 = (function (_,task){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,task);
} else {
var m__5349__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,task);
} else {
throw cljs.core.missing_protocol.call(null,"IExecutor.-submit!",_);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._submit_BANG_ = (function promesa$protocols$_submit_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_submit_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_submit_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_submit_BANG_$dyn_17953.call(null,_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_17954 = (function (_,ms,func){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_,ms,func);
} else {
var m__5349__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_,ms,func);
} else {
throw cljs.core.missing_protocol.call(null,"IScheduler.-schedule!",_);
}
}
});
/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule_BANG_ = (function promesa$protocols$_schedule_BANG_(_,ms,func){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 == null)))))){
return _.promesa$protocols$IScheduler$_schedule_BANG_$arity$3(_,ms,func);
} else {
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_17954.call(null,_,ms,func);
}
});


//# sourceMappingURL=protocols.js.map
