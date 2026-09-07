// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.entity_tree');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.refs');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree","com.wsscode.pathom3.entity-tree/entity-tree",-1151887464),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),new cljs.core.Symbol("com.wsscode.misc.refs","atom?","com.wsscode.misc.refs/atom?",-53238677,null),com.wsscode.misc.refs.atom_QMARK_);
/**
 * Returns the entity tree value from env
 */
com.wsscode.pathom3.entity_tree.entity = (function com$wsscode$pathom3$entity_tree$entity(p__22370){
var map__22371 = p__22370;
var map__22371__$1 = cljs.core.__destructure_map.call(null,map__22371);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22371__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
var G__22372 = entity_tree_STAR_;
if((G__22372 == null)){
return null;
} else {
return cljs.core.deref.call(null,G__22372);
}
});
com.wsscode.pathom3.entity_tree.create_entity = (function com$wsscode$pathom3$entity_tree$create_entity(x){
return cljs.core.atom.call(null,x);
});
/**
 * Set the entity in the environment. Note in this function you must send the cache-tree
 *   as a map, not as an atom.
 */
com.wsscode.pathom3.entity_tree.with_entity = (function com$wsscode$pathom3$entity_tree$with_entity(env,entity_tree){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691),cljs.core.atom.call(null,entity_tree));
});
com.wsscode.pathom3.entity_tree.reset_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$reset_entity_BANG_(p__22373,entity_tree){
var map__22374 = p__22373;
var map__22374__$1 = cljs.core.__destructure_map.call(null,map__22374);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22374__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.reset_BANG_.call(null,entity_tree_STAR_,entity_tree);
});
/**
 * Swap cache-tree at the current path. Returns the updated whole cache-tree.
 */
com.wsscode.pathom3.entity_tree.swap_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$swap_entity_BANG_(var_args){
var G__22381 = arguments.length;
switch (G__22381) {
case 2:
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___22391 = arguments.length;
var i__5727__auto___22392 = (0);
while(true){
if((i__5727__auto___22392 < len__5726__auto___22391)){
args_arr__5751__auto__.push((arguments[i__5727__auto___22392]));

var G__22393 = (i__5727__auto___22392 + (1));
i__5727__auto___22392 = G__22393;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__22382,f){
var map__22383 = p__22382;
var map__22383__$1 = cljs.core.__destructure_map.call(null,map__22383);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.call(null,entity_tree_STAR_,f);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__22384,f,x){
var map__22385 = p__22384;
var map__22385__$1 = cljs.core.__destructure_map.call(null,map__22385);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22385__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.call(null,entity_tree_STAR_,f,x);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (p__22386,f,x,y){
var map__22387 = p__22386;
var map__22387__$1 = cljs.core.__destructure_map.call(null,map__22387);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22387__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.swap_BANG_.call(null,entity_tree_STAR_,f,x,y);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22388,f,x,y,args){
var map__22389 = p__22388;
var map__22389__$1 = cljs.core.__destructure_map.call(null,map__22389);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22389__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.apply.call(null,cljs.core.swap_BANG_,entity_tree_STAR_,f,x,y,args);
}));

/** @this {Function} */
(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$lang$applyTo = (function (seq22376){
var G__22377 = cljs.core.first.call(null,seq22376);
var seq22376__$1 = cljs.core.next.call(null,seq22376);
var G__22378 = cljs.core.first.call(null,seq22376__$1);
var seq22376__$2 = cljs.core.next.call(null,seq22376__$1);
var G__22379 = cljs.core.first.call(null,seq22376__$2);
var seq22376__$3 = cljs.core.next.call(null,seq22376__$2);
var G__22380 = cljs.core.first.call(null,seq22376__$3);
var seq22376__$4 = cljs.core.next.call(null,seq22376__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22377,G__22378,G__22379,G__22380,seq22376__$4);
}));

(com.wsscode.pathom3.entity_tree.swap_entity_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Swap cache-tree at the current path. Returns the updated whole cache-tree.
 */
com.wsscode.pathom3.entity_tree.vswap_entity_BANG_ = (function com$wsscode$pathom3$entity_tree$vswap_entity_BANG_(var_args){
var G__22400 = arguments.length;
switch (G__22400) {
case 2:
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___22410 = arguments.length;
var i__5727__auto___22411 = (0);
while(true){
if((i__5727__auto___22411 < len__5726__auto___22410)){
args_arr__5751__auto__.push((arguments[i__5727__auto___22411]));

var G__22412 = (i__5727__auto___22411 + (1));
i__5727__auto___22411 = G__22412;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__22401,f){
var map__22402 = p__22401;
var map__22402__$1 = cljs.core.__destructure_map.call(null,map__22402);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22402__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_.call(null,entity_tree_STAR_,f.call(null,cljs.core._deref.call(null,entity_tree_STAR_)));
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__22403,f,x){
var map__22404 = p__22403;
var map__22404__$1 = cljs.core.__destructure_map.call(null,map__22404);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22404__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_.call(null,entity_tree_STAR_,f.call(null,cljs.core._deref.call(null,entity_tree_STAR_),x));
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (p__22405,f,x,y){
var map__22406 = p__22405;
var map__22406__$1 = cljs.core.__destructure_map.call(null,map__22406);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22406__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core._vreset_BANG_.call(null,entity_tree_STAR_,f.call(null,cljs.core._deref.call(null,entity_tree_STAR_),x,y));
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22407,f,x,y,args){
var map__22408 = p__22407;
var map__22408__$1 = cljs.core.__destructure_map.call(null,map__22408);
var entity_tree_STAR_ = cljs.core.get.call(null,map__22408__$1,new cljs.core.Keyword("com.wsscode.pathom3.entity-tree","entity-tree*","com.wsscode.pathom3.entity-tree/entity-tree*",1259415691));
return cljs.core.vreset_BANG_.call(null,entity_tree_STAR_,cljs.core.apply.call(null,f,cljs.core.deref.call(null,entity_tree_STAR_),x,y,args));
}));

/** @this {Function} */
(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$lang$applyTo = (function (seq22395){
var G__22396 = cljs.core.first.call(null,seq22395);
var seq22395__$1 = cljs.core.next.call(null,seq22395);
var G__22397 = cljs.core.first.call(null,seq22395__$1);
var seq22395__$2 = cljs.core.next.call(null,seq22395__$1);
var G__22398 = cljs.core.first.call(null,seq22395__$2);
var seq22395__$3 = cljs.core.next.call(null,seq22395__$2);
var G__22399 = cljs.core.first.call(null,seq22395__$3);
var seq22395__$4 = cljs.core.next.call(null,seq22395__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22396,G__22397,G__22398,G__22399,seq22395__$4);
}));

(com.wsscode.pathom3.entity_tree.vswap_entity_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Specialized merge versions that work on entity data.
 */
com.wsscode.pathom3.entity_tree.merge_entity_data = (function com$wsscode$pathom3$entity_tree$merge_entity_data(entity,new_data){
return cljs.core.reduce_kv.call(null,cljs.core.assoc,entity,new_data);
});

//# sourceMappingURL=entity_tree.js.map
