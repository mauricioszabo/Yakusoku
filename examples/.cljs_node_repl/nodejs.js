// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__23525__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23526__i = 0, G__23526__a = new Array(arguments.length -  0);
while (G__23526__i < G__23526__a.length) {G__23526__a[G__23526__i] = arguments[G__23526__i + 0]; ++G__23526__i;}
  args = new cljs.core.IndexedSeq(G__23526__a,0,null);
} 
return G__23525__delegate.call(this,args);};
G__23525.cljs$lang$maxFixedArity = 0;
G__23525.cljs$lang$applyTo = (function (arglist__23527){
var args = cljs.core.seq(arglist__23527);
return G__23525__delegate(args);
});
G__23525.cljs$core$IFn$_invoke$arity$variadic = G__23525__delegate;
return G__23525;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__23528__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23529__i = 0, G__23529__a = new Array(arguments.length -  0);
while (G__23529__i < G__23529__a.length) {G__23529__a[G__23529__i] = arguments[G__23529__i + 0]; ++G__23529__i;}
  args = new cljs.core.IndexedSeq(G__23529__a,0,null);
} 
return G__23528__delegate.call(this,args);};
G__23528.cljs$lang$maxFixedArity = 0;
G__23528.cljs$lang$applyTo = (function (arglist__23530){
var args = cljs.core.seq(arglist__23530);
return G__23528__delegate(args);
});
G__23528.cljs$core$IFn$_invoke$arity$variadic = G__23528__delegate;
return G__23528;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
