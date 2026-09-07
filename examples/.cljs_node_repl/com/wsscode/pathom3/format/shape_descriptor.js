// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.format.shape_descriptor');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.misc.refs');
goog.require('com.wsscode.pathom3.placeholder');
goog.require('edn_query_language.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__19222){
return cljs.core.map_QMARK_.call(null,G__19222);
})], null),null));
/**
 * Deep merge of shapes, it takes in account that values are always maps.
 */
com.wsscode.pathom3.format.shape_descriptor.merge_shapes = (function com$wsscode$pathom3$format$shape_descriptor$merge_shapes(var_args){
var G__19224 = arguments.length;
switch (G__19224) {
case 1:
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(((cljs.core.map_QMARK_.call(null,a)) && (cljs.core.map_QMARK_.call(null,b)))){
return cljs.core.with_meta.call(null,cljs.core.merge_with.call(null,com.wsscode.pathom3.format.shape_descriptor.merge_shapes,a,b),cljs.core.merge.call(null,cljs.core.meta.call(null,a),cljs.core.meta.call(null,b)));
} else {
if(cljs.core.map_QMARK_.call(null,a)){
return a;
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return b;
} else {
return b;

}
}
}
}));

(com.wsscode.pathom3.format.shape_descriptor.merge_shapes.cljs$lang$maxFixedArity = 2);

/**
 * Helper function to transform a map into an shape descriptor.
 * 
 *   Edges of shape descriptor are always an empty map. If a value of the map is a sequence.
 *   This will combine the keys present in all items on the final shape description.
 * 
 *   WARN: this idea of merging is still under test, this may change in the future.
 */
com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor = (function com$wsscode$pathom3$format$shape_descriptor$data__GT_shape_descriptor(data){
if(cljs.core.map_QMARK_.call(null,data)){
return cljs.core.reduce_kv.call(null,(function (out,k,v){
return cljs.core.assoc.call(null,out,k,((cljs.core.map_QMARK_.call(null,v))?com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,v):((cljs.core.sequential_QMARK_.call(null,v))?(function (){var shape = cljs.core.reduce.call(null,(function (q,x){
return com.wsscode.misc.coll.merge_grow.call(null,q,com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor.call(null,x));
}),cljs.core.PersistentArrayMap.EMPTY,v);
if(cljs.core.seq.call(null,shape)){
return shape;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})():cljs.core.PersistentArrayMap.EMPTY
)));
}),cljs.core.PersistentArrayMap.EMPTY,data);
} else {
return null;
}
});
/**
 * Like data->shape-descriptor, but only at the root keys of the data.
 */
com.wsscode.pathom3.format.shape_descriptor.data__GT_shape_descriptor_shallow = (function com$wsscode$pathom3$format$shape_descriptor$data__GT_shape_descriptor_shallow(data){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,data),cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
com.wsscode.pathom3.format.shape_descriptor.shape_params = (function com$wsscode$pathom3$format$shape_descriptor$shape_params(shape_value,params){
return cljs.core.vary_meta.call(null,shape_value,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","params","com.wsscode.pathom3.format.shape-descriptor/params",-1116912186),params);
});
/**
 * Convert EQL AST to shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor = (function com$wsscode$pathom3$format$shape_descriptor$ast__GT_shape_descriptor(ast){
return cljs.core.reduce.call(null,(function (m,p__19226){
var map__19227 = p__19226;
var map__19227__$1 = cljs.core.__destructure_map.call(null,map__19227);
var node = map__19227__$1;
var key = cljs.core.get.call(null,map__19227__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.call(null,map__19227__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = cljs.core.get.call(null,map__19227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var params = cljs.core.get.call(null,map__19227__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),type)){
var unions = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor),children);
return cljs.core.reduce.call(null,com.wsscode.pathom3.format.shape_descriptor.merge_shapes,m,unions);
} else {
return cljs.core.assoc.call(null,m,key,(function (){var G__19228 = com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.call(null,node);
if(cljs.core.seq.call(null,params)){
return com.wsscode.pathom3.format.shape_descriptor.shape_params.call(null,G__19228,params);
} else {
return G__19228;
}
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.query__GT_shape_descriptor = (function com$wsscode$pathom3$format$shape_descriptor$query__GT_shape_descriptor(output){
return com.wsscode.pathom3.format.shape_descriptor.ast__GT_shape_descriptor.call(null,edn_query_language.core.query__GT_ast.call(null,output));
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children = (function com$wsscode$pathom3$format$shape_descriptor$shape_descriptor__GT_ast_children(shape){
var union_QMARK_ = new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","union?","com.wsscode.pathom3.format.shape-descriptor/union?",-702499972).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,shape));
if(cljs.core.truth_(union_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__19229){
var vec__19230 = p__19229;
var uk = cljs.core.nth.call(null,vec__19230,(0),null);
var uv = cljs.core.nth.call(null,vec__19230,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),uk,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children.call(null,uv)], null);
})),shape)], null)], null);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__19233){
var vec__19234 = p__19233;
var k = cljs.core.nth.call(null,vec__19234,(0),null);
var v = cljs.core.nth.call(null,vec__19234,(1),null);
var params = new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","params","com.wsscode.pathom3.format.shape-descriptor/params",-1116912186).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
var G__19237 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k], null);
var G__19237__$1 = ((cljs.core.seq.call(null,v))?cljs.core.assoc.call(null,G__19237,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children.call(null,v)):G__19237);
if(cljs.core.seq.call(null,params)){
return cljs.core.assoc.call(null,G__19237__$1,new cljs.core.Keyword(null,"params","params",710516235),params);
} else {
return G__19237__$1;
}
})),shape);
}
});
/**
 * Convert pathom output format into shape descriptor format.
 */
com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast = (function com$wsscode$pathom3$format$shape_descriptor$shape_descriptor__GT_ast(shape){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_ast_children.call(null,shape)], null);
});
/**
 * Convert shape descriptor format to EQL.
 */
com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_query = (function com$wsscode$pathom3$format$shape_descriptor$shape_descriptor__GT_query(shape){
var union_QMARK_ = new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","union?","com.wsscode.pathom3.format.shape-descriptor/union?",-702499972).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,shape));
return cljs.core.into.call(null,(cljs.core.truth_(union_QMARK_)?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),cljs.core.map.call(null,(function (p__19238){
var vec__19239 = p__19238;
var k = cljs.core.nth.call(null,vec__19239,(0),null);
var v = cljs.core.nth.call(null,vec__19239,(1),null);
var params = new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","params","com.wsscode.pathom3.format.shape-descriptor/params",-1116912186).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
var G__19242 = (cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.seq.call(null,v);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return union_QMARK_;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,com.wsscode.pathom3.format.shape_descriptor.shape_descriptor__GT_query.call(null,v)]):k);
if(cljs.core.seq.call(null,params)){
return (new cljs.core.List(null,G__19242,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return G__19242;
}
})),shape);
});
/**
 * This helper will remove nested requirements when data is an empty collection. This
 *   allows for nested inputs with empty collections to still be valid in shape.
 */
com.wsscode.pathom3.format.shape_descriptor.relax_empty_collections = (function com$wsscode$pathom3$format$shape_descriptor$relax_empty_collections(required,data){
return cljs.core.reduce.call(null,(function (r,p__19243){
var vec__19244 = p__19243;
var k = cljs.core.nth.call(null,vec__19244,(0),null);
var v = cljs.core.nth.call(null,vec__19244,(1),null);
if(((cljs.core.contains_QMARK_.call(null,r,k)) && (((com.wsscode.misc.coll.collection_QMARK_.call(null,v)) && (cljs.core.empty_QMARK_.call(null,v)))))){
return cljs.core.assoc.call(null,r,k,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((cljs.core.contains_QMARK_.call(null,r,k)) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,r,k),cljs.core.PersistentArrayMap.EMPTY)))){
return cljs.core.update.call(null,r,k,com.wsscode.pathom3.format.shape_descriptor.relax_empty_collections,v);
} else {
return r;

}
}
}),required,((cljs.core.map_QMARK_.call(null,data))?data:((com.wsscode.misc.coll.collection_QMARK_.call(null,data))?cljs.core.first.call(null,data):null
)));
});
/**
 * Given some available and required shapes, returns which items are missing from available
 *   in the required. Returns nil when nothing is missing.
 */
com.wsscode.pathom3.format.shape_descriptor.missing = (function com$wsscode$pathom3$format$shape_descriptor$missing(var_args){
var G__19248 = arguments.length;
switch (G__19248) {
case 2:
return com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$2 = (function (available_shape,required_shape){
var res = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,(function (el){
var attr = cljs.core.key.call(null,el);
var sub_query = cljs.core.val.call(null,el);
if(cljs.core.contains_QMARK_.call(null,available_shape,attr)){
var temp__5821__auto__ = (function (){var and__5000__auto__ = cljs.core.seq.call(null,sub_query);
if(and__5000__auto__){
return com.wsscode.pathom3.format.shape_descriptor.missing.call(null,cljs.core.get.call(null,available_shape,attr),sub_query);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var sub_req = temp__5821__auto__;
return com.wsscode.misc.coll.make_map_entry.call(null,attr,sub_req);
} else {
return null;
}
} else {
return el;
}
})),required_shape);
if(cljs.core.seq.call(null,res)){
return res;
} else {
return null;
}
}));

(com.wsscode.pathom3.format.shape_descriptor.missing.cljs$core$IFn$_invoke$arity$3 = (function (available,required,data){
return com.wsscode.pathom3.format.shape_descriptor.missing.call(null,available,com.wsscode.pathom3.format.shape_descriptor.relax_empty_collections.call(null,required,data));
}));

(com.wsscode.pathom3.format.shape_descriptor.missing.cljs$lang$maxFixedArity = 3);

/**
 * Like missing, but starts from data instead of shape. If you are starting from data
 *   prefer this over missing, this can perform better by avoiding scanning the whole
 *   available data to build a shape, when the required-shape is a sub-set of the available
 *   data.
 */
com.wsscode.pathom3.format.shape_descriptor.missing_from_data = (function com$wsscode$pathom3$format$shape_descriptor$missing_from_data(available_data,required_shape){
if((available_data == null)){
return null;
} else {
var res = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,(function (el){
var attr = cljs.core.key.call(null,el);
var sub_shape = cljs.core.val.call(null,el);
var sub_value = cljs.core.get.call(null,available_data,attr);
if(cljs.core.contains_QMARK_.call(null,available_data,attr)){
if(cljs.core.seq.call(null,sub_shape)){
if(com.wsscode.misc.coll.collection_QMARK_.call(null,sub_value)){
var shape = cljs.core.reduce.call(null,com.wsscode.pathom3.format.shape_descriptor.merge_shapes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,(function (p1__19250_SHARP_){
return com.wsscode.pathom3.format.shape_descriptor.missing_from_data.call(null,p1__19250_SHARP_,sub_shape);
}),sub_value));
if(cljs.core.seq.call(null,shape)){
return com.wsscode.misc.coll.make_map_entry.call(null,attr,shape);
} else {
return null;
}
} else {
var temp__5821__auto__ = com.wsscode.pathom3.format.shape_descriptor.missing_from_data.call(null,sub_value,sub_shape);
if(cljs.core.truth_(temp__5821__auto__)){
var sub_req = temp__5821__auto__;
return com.wsscode.misc.coll.make_map_entry.call(null,attr,sub_req);
} else {
return null;
}
}
} else {
return null;
}
} else {
return el;
}
})),required_shape);
if(cljs.core.seq.call(null,res)){
return res;
} else {
return null;
}
}
});
/**
 * Like set/difference, for shapes.
 */
com.wsscode.pathom3.format.shape_descriptor.difference = (function com$wsscode$pathom3$format$shape_descriptor$difference(s1,s2){
return cljs.core.reduce_kv.call(null,(function (out,k,sub){
var temp__5821__auto__ = cljs.core.find.call(null,s2,k);
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
var v = cljs.core.val.call(null,x);
if(((cljs.core.seq.call(null,sub)) && (cljs.core.seq.call(null,v)))){
var sub_diff = com.wsscode.pathom3.format.shape_descriptor.difference.call(null,sub,v);
if(cljs.core.seq.call(null,sub_diff)){
return cljs.core.assoc.call(null,out,k,sub_diff);
} else {
return out;
}
} else {
return out;
}
} else {
return cljs.core.assoc.call(null,out,k,sub);
}
}),(function (){var or__5002__auto__ = cljs.core.empty.call(null,s1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),s1);
});
/**
 * Like set/intersection, for shapes.
 */
com.wsscode.pathom3.format.shape_descriptor.intersection = (function com$wsscode$pathom3$format$shape_descriptor$intersection(s1,s2){
return cljs.core.reduce_kv.call(null,(function (out,k,sub){
var temp__5821__auto__ = cljs.core.find.call(null,s2,k);
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
var v = cljs.core.val.call(null,x);
var meta = cljs.core.merge.call(null,cljs.core.meta.call(null,sub),cljs.core.meta.call(null,v));
if(((cljs.core.seq.call(null,sub)) && (cljs.core.seq.call(null,v)))){
var sub_inter = com.wsscode.pathom3.format.shape_descriptor.intersection.call(null,sub,v);
if(cljs.core.seq.call(null,sub_inter)){
return cljs.core.assoc.call(null,out,k,cljs.core.with_meta.call(null,sub_inter,meta));
} else {
return cljs.core.assoc.call(null,out,k,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,meta));
}
} else {
return cljs.core.assoc.call(null,out,k,cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,meta));
}
} else {
return out;
}
}),(function (){var or__5002__auto__ = cljs.core.empty.call(null,s1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),s1);
});
/**
 * Select the parts of data covered by shape. This is similar to select-keys, but for
 *   nested shapes.
 */
com.wsscode.pathom3.format.shape_descriptor.select_shape = (function com$wsscode$pathom3$format$shape_descriptor$select_shape(data,shape){
return cljs.core.reduce_kv.call(null,(function (out,k,sub){
var temp__5821__auto__ = cljs.core.find.call(null,data,k);
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
var v = cljs.core.val.call(null,x);
if(cljs.core.seq.call(null,sub)){
if(cljs.core.map_QMARK_.call(null,v)){
return cljs.core.assoc.call(null,out,k,com.wsscode.pathom3.format.shape_descriptor.select_shape.call(null,v,sub));
} else {
if(com.wsscode.misc.coll.collection_QMARK_.call(null,v)){
return cljs.core.assoc.call(null,out,k,cljs.core.into.call(null,cljs.core.empty.call(null,v),cljs.core.map.call(null,(function (p1__19251_SHARP_){
return com.wsscode.pathom3.format.shape_descriptor.select_shape.call(null,p1__19251_SHARP_,sub);
})),v));
} else {
return cljs.core.assoc.call(null,out,k,v);

}
}
} else {
return cljs.core.assoc.call(null,out,k,v);
}
} else {
return out;
}
}),cljs.core.empty.call(null,data),shape);
});
com.wsscode.pathom3.format.shape_descriptor.select_shape_filter_coll = (function com$wsscode$pathom3$format$shape_descriptor$select_shape_filter_coll(out,k,v,sub,sub_req){
var sub_keys = cljs.core.keys.call(null,sub_req);
return cljs.core.assoc.call(null,out,k,cljs.core.into.call(null,cljs.core.empty.call(null,v),cljs.core.keep.call(null,(function (p1__19252_SHARP_){
var s_SINGLEQUOTE_ = com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.call(null,p1__19252_SHARP_,sub,sub_req);
if(cljs.core.every_QMARK_.call(null,(function (x){
return cljs.core.contains_QMARK_.call(null,s_SINGLEQUOTE_,x);
}),sub_keys)){
return s_SINGLEQUOTE_;
} else {
return null;
}
})),(function (){var G__19253 = v;
if(com.wsscode.misc.coll.coll_append_at_head_QMARK_.call(null,v)){
return cljs.core.reverse.call(null,G__19253);
} else {
return G__19253;
}
})()));
});
/**
 * Like select-shape, but in case of collections, if some item doesn't have all the
 *   required keys, it's removed from the collection.
 */
com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering = (function com$wsscode$pathom3$format$shape_descriptor$select_shape_filtering(var_args){
var G__19255 = arguments.length;
switch (G__19255) {
case 2:
return com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$2 = (function (data,shape){
return com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.call(null,data,shape,shape);
}));

(com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$core$IFn$_invoke$arity$3 = (function (data,shape,required_shape){
return cljs.core.reduce_kv.call(null,(function (out,k,sub){
var temp__5821__auto__ = cljs.core.find.call(null,data,k);
if(cljs.core.truth_(temp__5821__auto__)){
var x = temp__5821__auto__;
var v = cljs.core.val.call(null,x);
if(cljs.core.seq.call(null,sub)){
var sub_req = cljs.core.get.call(null,required_shape,k);
if(cljs.core.map_QMARK_.call(null,v)){
return cljs.core.assoc.call(null,out,k,com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.call(null,v,sub,sub_req));
} else {
if(com.wsscode.misc.coll.collection_QMARK_.call(null,v)){
return com.wsscode.pathom3.format.shape_descriptor.select_shape_filter_coll.call(null,out,k,v,sub,sub_req);
} else {
return cljs.core.assoc.call(null,out,k,v);

}
}
} else {
return cljs.core.assoc.call(null,out,k,v);
}
} else {
return out;
}
}),cljs.core.empty.call(null,data),shape);
}));

(com.wsscode.pathom3.format.shape_descriptor.select_shape_filtering.cljs$lang$maxFixedArity = 3);

/**
 * This function will normalize up all placeholders that start from the root of the tree.
 * 
 *   For example:
 * 
 *  {:>/foo {:a {}}} = becomes => {:a {}}
 * 
 *   Nested items also are bring up:
 * 
 *  {:>/foo {:a {} :>/other {:b {}}}} => {:a {} :b {}}
 * 
 *   But placeholders not connected to the root as kept as-is:
 * 
 *  {:coll {:>/inner {:a {}}}} => {:coll {:>/inner {:a {}}}}
 */
com.wsscode.pathom3.format.shape_descriptor.lift_placeholders_first_level = (function com$wsscode$pathom3$format$shape_descriptor$lift_placeholders_first_level(env,shape){
return cljs.core.reduce_kv.call(null,(function (out,k,v){
if(com.wsscode.pathom3.placeholder.placeholder_key_QMARK_.call(null,env,k)){
return cljs.core.merge.call(null,out,com.wsscode.pathom3.format.shape_descriptor.lift_placeholders_first_level.call(null,env,v));
} else {
return cljs.core.assoc.call(null,out,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,shape);
});

//# sourceMappingURL=shape_descriptor.js.map
