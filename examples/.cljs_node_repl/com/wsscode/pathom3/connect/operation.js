// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.connect.operation');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.misc.coll');
goog.require('com.wsscode.misc.refs');
goog.require('com.wsscode.pathom3.attribute');
goog.require('com.wsscode.pathom3.connect.operation.protocols');
goog.require('com.wsscode.pathom3.format.eql');
goog.require('com.wsscode.pathom3.format.shape_descriptor');
goog.require('edn_query_language.core');
com.wsscode.pathom3.connect.operation.operation_QMARK_ = (function com$wsscode$pathom3$connect$operation$operation_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.com$wsscode$pathom3$connect$operation$protocols$IOperation$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.wsscode.pathom3.connect.operation.protocols.IOperation,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.wsscode.pathom3.connect.operation.protocols.IOperation,x);
}
});
com.wsscode.pathom3.connect.operation.resolver_QMARK_ = (function com$wsscode$pathom3$connect$operation$resolver_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.com$wsscode$pathom3$connect$operation$protocols$IResolver$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.wsscode.pathom3.connect.operation.protocols.IResolver,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.wsscode.pathom3.connect.operation.protocols.IResolver,x);
}
});
com.wsscode.pathom3.connect.operation.mutation_QMARK_ = (function com$wsscode$pathom3$connect$operation$mutation_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.com$wsscode$pathom3$connect$operation$protocols$IMutation$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.wsscode.pathom3.connect.operation.protocols.IMutation,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.wsscode.pathom3.connect.operation.protocols.IMutation,x);
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","inferred-input","com.wsscode.pathom3.connect.operation/inferred-input",-1192133345),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","inferred-params","com.wsscode.pathom3.connect.operation/inferred-params",1566153874),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","docstring","com.wsscode.pathom3.connect.operation/docstring",-1367867441),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache?","com.wsscode.pathom3.connect.operation/cache?",575940493),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-store","com.wsscode.pathom3.connect.operation/cache-store",1503197377),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","cache-key","com.wsscode.pathom3.connect.operation/cache-key",1646000466),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch-chunk-size","com.wsscode.pathom3.connect.operation/batch-chunk-size",-1412106301),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","priority","com.wsscode.pathom3.connect.operation/priority",-813904543),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type","com.wsscode.pathom3.connect.operation/operation-type",704998960),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-mutation","com.wsscode.pathom3.connect.operation/operation-type-mutation",-494456636),"null",new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-resolver","com.wsscode.pathom3.connect.operation/operation-type-resolver",-1680641911),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-mutation","com.wsscode.pathom3.connect.operation/operation-type-mutation",-494456636),null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-resolver","com.wsscode.pathom3.connect.operation/operation-type-resolver",-1680641911),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-config","com.wsscode.pathom3.connect.operation/operation-config",583946173),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation","com.wsscode.pathom3.connect.operation/operation",874578684),new cljs.core.Symbol("com.wsscode.pathom3.connect.operation","operation?","com.wsscode.pathom3.connect.operation/operation?",1767294343,null),com.wsscode.pathom3.connect.operation.operation_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolver","com.wsscode.pathom3.connect.operation/resolver",380611107),new cljs.core.Symbol("com.wsscode.pathom3.connect.operation","resolver?","com.wsscode.pathom3.connect.operation/resolver?",-370083233,null),com.wsscode.pathom3.connect.operation.resolver_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutation","com.wsscode.pathom3.connect.operation/mutation",2085009056),new cljs.core.Symbol("com.wsscode.pathom3.connect.operation","mutation?","com.wsscode.pathom3.connect.operation/mutation?",1025315137,null),com.wsscode.pathom3.connect.operation.mutation_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433),new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","shape-descriptor","com.wsscode.pathom3.format.shape-descriptor/shape-descriptor",1733631433));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-name","com.wsscode.pathom3.connect.operation/dynamic-name",1218566238),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","dynamic-resolver?","com.wsscode.pathom3.connect.operation/dynamic-resolver?",868139406),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {com.wsscode.pathom3.connect.operation.protocols.IOperation}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {com.wsscode.pathom3.connect.operation.protocols.IResolver}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.pathom3.connect.operation.Resolver = (function (config,resolve,__meta,__extmap,__hash){
this.config = config;
this.resolve = resolve;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k20638,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__20643 = k20638;
var G__20643__$1 = (((G__20643 instanceof cljs.core.Keyword))?G__20643.fqn:null);
switch (G__20643__$1) {
case "config":
return self__.config;

break;
case "resolve":
return self__.resolve;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20638,else__5303__auto__);

}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__20644){
var vec__20645 = p__20644;
var k__5324__auto__ = cljs.core.nth.call(null,vec__20645,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__20645,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#com.wsscode.pathom3.connect.operation.Resolver{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resolve","resolve",-1584445482),self__.resolve],null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20637){
var self__ = this;
var G__20637__$1 = this;
return (new cljs.core.RecordIter((0),G__20637__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"resolve","resolve",-1584445482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IResolver$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IResolver$_resolve$arity$3 = (function (_,env,input){
var self__ = this;
var ___$1 = this;
return self__.resolve.call(null,env,input);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (276776581 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20639,other20640){
var self__ = this;
var this20639__$1 = this;
return (((!((other20640 == null)))) && ((((this20639__$1.constructor === other20640.constructor)) && (((cljs.core._EQ_.call(null,this20639__$1.config,other20640.config)) && (((cljs.core._EQ_.call(null,this20639__$1.resolve,other20640.resolve)) && (cljs.core._EQ_.call(null,this20639__$1.__extmap,other20640.__extmap)))))))));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_config$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.config;
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-resolver","com.wsscode.pathom3.connect.operation/operation-type-resolver",-1680641911);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k20638){
var self__ = this;
var this__5307__auto____$1 = this;
var G__20648 = k20638;
var G__20648__$1 = (((G__20648 instanceof cljs.core.Keyword))?G__20648.fqn:null);
switch (G__20648__$1) {
case "config":
case "resolve":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20638);

}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__20637){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__20649 = cljs.core.keyword_identical_QMARK_;
var expr__20650 = k__5309__auto__;
if(cljs.core.truth_(pred__20649.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__20650))){
return (new com.wsscode.pathom3.connect.operation.Resolver(G__20637,self__.resolve,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20649.call(null,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),expr__20650))){
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,G__20637,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__20637),null));
}
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"config","config",994861415),self__.config,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"resolve","resolve",-1584445482),self__.resolve,null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__20637){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Resolver(self__.config,self__.resolve,G__20637,self__.__extmap,self__.__hash));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.call = (function() {
var G__20656 = null;
var G__20656__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return self__.resolve.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
var G__20656__2 = (function (self__,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return self__.resolve.call(null,cljs.core.PersistentArrayMap.EMPTY,input);
});
var G__20656__3 = (function (self__,env,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return self__.resolve.call(null,env,input);
});
G__20656 = function(self__,env,input){
switch(arguments.length){
case 1:
return G__20656__1.call(this,self__);
case 2:
return G__20656__2.call(this,self__,env);
case 3:
return G__20656__3.call(this,self__,env,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20656.cljs$core$IFn$_invoke$arity$1 = G__20656__1;
G__20656.cljs$core$IFn$_invoke$arity$2 = G__20656__2;
G__20656.cljs$core$IFn$_invoke$arity$3 = G__20656__3;
return G__20656;
})()
);

(com.wsscode.pathom3.connect.operation.Resolver.prototype.apply = (function (self__,args20642){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone.call(null,args20642);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__20652 = args__5217__auto__.slice((0),(20));
G__20652.push(args__5217__auto__.slice((20)));

return G__20652;
})():args__5217__auto__)));
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _this = this;
return self__.resolve.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IFn$_invoke$arity$1 = (function (input){
var self__ = this;
var _this = this;
return self__.resolve.call(null,cljs.core.PersistentArrayMap.EMPTY,input);
}));

(com.wsscode.pathom3.connect.operation.Resolver.prototype.cljs$core$IFn$_invoke$arity$2 = (function (env,input){
var self__ = this;
var _this = this;
return self__.resolve.call(null,env,input);
}));

(com.wsscode.pathom3.connect.operation.Resolver.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"resolve","resolve",56086045,null)], null);
}));

(com.wsscode.pathom3.connect.operation.Resolver.cljs$lang$type = true);

(com.wsscode.pathom3.connect.operation.Resolver.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom3.connect.operation/Resolver",null,(1),null));
}));

(com.wsscode.pathom3.connect.operation.Resolver.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"com.wsscode.pathom3.connect.operation/Resolver");
}));

/**
 * Positional factory function for com.wsscode.pathom3.connect.operation/Resolver.
 */
com.wsscode.pathom3.connect.operation.__GT_Resolver = (function com$wsscode$pathom3$connect$operation$__GT_Resolver(config,resolve){
return (new com.wsscode.pathom3.connect.operation.Resolver(config,resolve,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom3.connect.operation/Resolver, taking a map of keywords to field values.
 */
com.wsscode.pathom3.connect.operation.map__GT_Resolver = (function com$wsscode$pathom3$connect$operation$map__GT_Resolver(G__20641){
var extmap__5342__auto__ = (function (){var G__20653 = cljs.core.dissoc.call(null,G__20641,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
if(cljs.core.record_QMARK_.call(null,G__20641)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20653);
} else {
return G__20653;
}
})();
return (new com.wsscode.pathom3.connect.operation.Resolver(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__20641),new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(G__20641),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {com.wsscode.pathom3.connect.operation.protocols.IMutation}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {com.wsscode.pathom3.connect.operation.protocols.IOperation}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.pathom3.connect.operation.Mutation = (function (config,mutate,__meta,__extmap,__hash){
this.config = config;
this.mutate = mutate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k20658,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__20663 = k20658;
var G__20663__$1 = (((G__20663 instanceof cljs.core.Keyword))?G__20663.fqn:null);
switch (G__20663__$1) {
case "config":
return self__.config;

break;
case "mutate":
return self__.mutate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20658,else__5303__auto__);

}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__20664){
var vec__20665 = p__20664;
var k__5324__auto__ = cljs.core.nth.call(null,vec__20665,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__20665,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#com.wsscode.pathom3.connect.operation.Mutation{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mutate","mutate",1422419038),self__.mutate],null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20657){
var self__ = this;
var G__20657__$1 = this;
return (new cljs.core.RecordIter((0),G__20657__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"mutate","mutate",1422419038)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IMutation$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IMutation$_mutate$arity$3 = (function (_,env,input){
var self__ = this;
var ___$1 = this;
return self__.mutate.call(null,env,input);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1635502555 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20659,other20660){
var self__ = this;
var this20659__$1 = this;
return (((!((other20660 == null)))) && ((((this20659__$1.constructor === other20660.constructor)) && (((cljs.core._EQ_.call(null,this20659__$1.config,other20660.config)) && (((cljs.core._EQ_.call(null,this20659__$1.mutate,other20660.mutate)) && (cljs.core._EQ_.call(null,this20659__$1.__extmap,other20660.__extmap)))))))));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"mutate","mutate",1422419038),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$ = cljs.core.PROTOCOL_SENTINEL);

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_config$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.config;
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","operation-type-mutation","com.wsscode.pathom3.connect.operation/operation-type-mutation",-494456636);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k20658){
var self__ = this;
var this__5307__auto____$1 = this;
var G__20668 = k20658;
var G__20668__$1 = (((G__20668 instanceof cljs.core.Keyword))?G__20668.fqn:null);
switch (G__20668__$1) {
case "config":
case "mutate":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k20658);

}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__20657){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__20669 = cljs.core.keyword_identical_QMARK_;
var expr__20670 = k__5309__auto__;
if(cljs.core.truth_(pred__20669.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__20670))){
return (new com.wsscode.pathom3.connect.operation.Mutation(G__20657,self__.mutate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20669.call(null,new cljs.core.Keyword(null,"mutate","mutate",1422419038),expr__20670))){
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,G__20657,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__20657),null));
}
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"config","config",994861415),self__.config,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mutate","mutate",1422419038),self__.mutate,null))], null),self__.__extmap));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__20657){
var self__ = this;
var this__5299__auto____$1 = this;
return (new com.wsscode.pathom3.connect.operation.Mutation(self__.config,self__.mutate,G__20657,self__.__extmap,self__.__hash));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.call = (function() {
var G__20676 = null;
var G__20676__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return self__.mutate.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
var G__20676__2 = (function (self__,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return self__.mutate.call(null,cljs.core.PersistentArrayMap.EMPTY,input);
});
var G__20676__3 = (function (self__,env,input){
var self__ = this;
var self____$1 = this;
var _this = self____$1;
return self__.mutate.call(null,env,input);
});
G__20676 = function(self__,env,input){
switch(arguments.length){
case 1:
return G__20676__1.call(this,self__);
case 2:
return G__20676__2.call(this,self__,env);
case 3:
return G__20676__3.call(this,self__,env,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20676.cljs$core$IFn$_invoke$arity$1 = G__20676__1;
G__20676.cljs$core$IFn$_invoke$arity$2 = G__20676__2;
G__20676.cljs$core$IFn$_invoke$arity$3 = G__20676__3;
return G__20676;
})()
);

(com.wsscode.pathom3.connect.operation.Mutation.prototype.apply = (function (self__,args20662){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone.call(null,args20662);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__20672 = args__5217__auto__.slice((0),(20));
G__20672.push(args__5217__auto__.slice((20)));

return G__20672;
})():args__5217__auto__)));
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _this = this;
return self__.mutate.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (input){
var self__ = this;
var _this = this;
return self__.mutate.call(null,cljs.core.PersistentArrayMap.EMPTY,input);
}));

(com.wsscode.pathom3.connect.operation.Mutation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (env,input){
var self__ = this;
var _this = this;
return self__.mutate.call(null,env,input);
}));

(com.wsscode.pathom3.connect.operation.Mutation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"mutate","mutate",-1232016731,null)], null);
}));

(com.wsscode.pathom3.connect.operation.Mutation.cljs$lang$type = true);

(com.wsscode.pathom3.connect.operation.Mutation.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom3.connect.operation/Mutation",null,(1),null));
}));

(com.wsscode.pathom3.connect.operation.Mutation.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"com.wsscode.pathom3.connect.operation/Mutation");
}));

/**
 * Positional factory function for com.wsscode.pathom3.connect.operation/Mutation.
 */
com.wsscode.pathom3.connect.operation.__GT_Mutation = (function com$wsscode$pathom3$connect$operation$__GT_Mutation(config,mutate){
return (new com.wsscode.pathom3.connect.operation.Mutation(config,mutate,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom3.connect.operation/Mutation, taking a map of keywords to field values.
 */
com.wsscode.pathom3.connect.operation.map__GT_Mutation = (function com$wsscode$pathom3$connect$operation$map__GT_Mutation(G__20661){
var extmap__5342__auto__ = (function (){var G__20673 = cljs.core.dissoc.call(null,G__20661,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.record_QMARK_.call(null,G__20661)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__20673);
} else {
return G__20673;
}
})();
return (new com.wsscode.pathom3.connect.operation.Mutation(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(G__20661),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});

/**
 * Make an attribute optional
 */
com.wsscode.pathom3.connect.operation._QMARK_ = (function com$wsscode$pathom3$connect$operation$_QMARK_(attr){
return edn_query_language.core.update_property_param.call(null,attr,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517),true);
});
com.wsscode.pathom3.connect.operation.operation_config = (function com$wsscode$pathom3$connect$operation$operation_config(operation){
return com.wsscode.pathom3.connect.operation.protocols._operation_config.call(null,operation);
});
com.wsscode.pathom3.connect.operation.operation_type = (function com$wsscode$pathom3$connect$operation$operation_type(operation){
return com.wsscode.pathom3.connect.operation.protocols._operation_type.call(null,operation);
});
com.wsscode.pathom3.connect.operation.operation_type_name = (function com$wsscode$pathom3$connect$operation$operation_type_name(operation){
var G__20677 = com.wsscode.pathom3.connect.operation.operation_type.call(null,operation);
var G__20677__$1 = (((G__20677 instanceof cljs.core.Keyword))?G__20677.fqn:null);
switch (G__20677__$1) {
case "com.wsscode.pathom3.connect.operation/operation-type-resolver":
return "resolver";

break;
case "com.wsscode.pathom3.connect.operation/operation-type-mutation":
return "mutation";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20677__$1)].join('')));

}
});
com.wsscode.pathom3.connect.operation.describe_input_STAR_ = (function com$wsscode$pathom3$connect$operation$describe_input_STAR_(ast,path,outs_STAR_,opt_parent_QMARK_){
var seq__20679 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var chunk__20680 = null;
var count__20681 = (0);
var i__20682 = (0);
while(true){
if((i__20682 < count__20681)){
var map__20687 = cljs.core._nth.call(null,chunk__20680,i__20682);
var map__20687__$1 = cljs.core.__destructure_map.call(null,map__20687);
var node = map__20687__$1;
var key = cljs.core.get.call(null,map__20687__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.call(null,map__20687__$1,new cljs.core.Keyword(null,"params","params",710516235));
var entry_20691 = (function (){var G__20688 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.seq.call(null,params)){
return cljs.core.with_meta.call(null,G__20688,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","params","com.wsscode.pathom3.format.shape-descriptor/params",-1116912186),params], null));
} else {
return G__20688;
}
})();
var opt_QMARK__20692 = (function (){var or__5002__auto__ = opt_parent_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(opt_QMARK__20692)){
cljs.core._vreset_BANG_.call(null,outs_STAR_,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,outs_STAR_),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663)], null),path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)),entry_20691));
} else {
cljs.core._vreset_BANG_.call(null,outs_STAR_,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,outs_STAR_),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715)], null),path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)),entry_20691));
}

com.wsscode.pathom3.connect.operation.describe_input_STAR_.call(null,node,cljs.core.conj.call(null,path,key),outs_STAR_,opt_QMARK__20692);


var G__20693 = seq__20679;
var G__20694 = chunk__20680;
var G__20695 = count__20681;
var G__20696 = (i__20682 + (1));
seq__20679 = G__20693;
chunk__20680 = G__20694;
count__20681 = G__20695;
i__20682 = G__20696;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__20679);
if(temp__5823__auto__){
var seq__20679__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20679__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20679__$1);
var G__20697 = cljs.core.chunk_rest.call(null,seq__20679__$1);
var G__20698 = c__5525__auto__;
var G__20699 = cljs.core.count.call(null,c__5525__auto__);
var G__20700 = (0);
seq__20679 = G__20697;
chunk__20680 = G__20698;
count__20681 = G__20699;
i__20682 = G__20700;
continue;
} else {
var map__20689 = cljs.core.first.call(null,seq__20679__$1);
var map__20689__$1 = cljs.core.__destructure_map.call(null,map__20689);
var node = map__20689__$1;
var key = cljs.core.get.call(null,map__20689__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.call(null,map__20689__$1,new cljs.core.Keyword(null,"params","params",710516235));
var entry_20701 = (function (){var G__20690 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.seq.call(null,params)){
return cljs.core.with_meta.call(null,G__20690,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.format.shape-descriptor","params","com.wsscode.pathom3.format.shape-descriptor/params",-1116912186),params], null));
} else {
return G__20690;
}
})();
var opt_QMARK__20702 = (function (){var or__5002__auto__ = opt_parent_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(opt_QMARK__20702)){
cljs.core._vreset_BANG_.call(null,outs_STAR_,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,outs_STAR_),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optionals","com.wsscode.pathom3.connect.operation/optionals",1880951663)], null),path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)),entry_20701));
} else {
cljs.core._vreset_BANG_.call(null,outs_STAR_,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,outs_STAR_),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715)], null),path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)),entry_20701));
}

com.wsscode.pathom3.connect.operation.describe_input_STAR_.call(null,node,cljs.core.conj.call(null,path,key),outs_STAR_,opt_QMARK__20702);


var G__20703 = cljs.core.next.call(null,seq__20679__$1);
var G__20704 = null;
var G__20705 = (0);
var G__20706 = (0);
seq__20679 = G__20703;
chunk__20680 = G__20704;
count__20681 = G__20705;
i__20682 = G__20706;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom3.connect.operation.describe_input = (function com$wsscode$pathom3$connect$operation$describe_input(input){
var input_ast = edn_query_language.core.query__GT_ast.call(null,input);
var outs_STAR_ = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","requires","com.wsscode.pathom3.connect.operation/requires",926175715),cljs.core.PersistentArrayMap.EMPTY], null));
com.wsscode.pathom3.connect.operation.describe_input_STAR_.call(null,input_ast,cljs.core.PersistentVector.EMPTY,outs_STAR_,false);

return cljs.core.deref.call(null,outs_STAR_);
});
com.wsscode.pathom3.connect.operation.eql__GT_root_attrs = (function com$wsscode$pathom3$connect$operation$eql__GT_root_attrs(eql){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast.call(null,eql)));
});
com.wsscode.pathom3.connect.operation.input_destructure_missing = (function com$wsscode$pathom3$connect$operation$input_destructure_missing(p__20707){
var map__20708 = p__20707;
var map__20708__$1 = cljs.core.__destructure_map.call(null,map__20708);
var input = cljs.core.get.call(null,map__20708__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497));
var inferred_input = cljs.core.get.call(null,map__20708__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","inferred-input","com.wsscode.pathom3.connect.operation/inferred-input",-1192133345));
if(cljs.core.truth_((function (){var and__5000__auto__ = input;
if(cljs.core.truth_(and__5000__auto__)){
return inferred_input;
} else {
return and__5000__auto__;
}
})())){
var missing = clojure.set.difference.call(null,com.wsscode.pathom3.connect.operation.eql__GT_root_attrs.call(null,inferred_input),com.wsscode.pathom3.connect.operation.eql__GT_root_attrs.call(null,input));
if(cljs.core.seq.call(null,missing)){
return missing;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Helper to create a resolver. A resolver have at least a name, the output definition
 *   and the resolve function.
 * 
 *   You can create a resolver using a map:
 * 
 *    (resolver
 *      {::op-name 'foo
 *       ::output  [:foo]
 *       ::resolve (fn [env input] ...)})
 * 
 *   Or with the helper syntax:
 * 
 *    (resolver 'foo {::output [:foo]} (fn [env input] ...))
 * 
 *   Returns an instance of the Resolver type.
 *   
 */
com.wsscode.pathom3.connect.operation.resolver = (function com$wsscode$pathom3$connect$operation$resolver(var_args){
var G__20711 = arguments.length;
switch (G__20711) {
case 2:
return com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$2 = (function (op_name,config){
return com.wsscode.pathom3.connect.operation.resolver.call(null,com.wsscode.misc.coll.merge_defaults.call(null,config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name], null)));
}));

(com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$3 = (function (op_name,config,resolve){
return com.wsscode.pathom3.connect.operation.resolver.call(null,cljs.core.assoc.call(null,com.wsscode.misc.coll.merge_defaults.call(null,config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name], null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628),resolve));
}));

(com.wsscode.pathom3.connect.operation.resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__20712){
var map__20713 = p__20712;
var map__20713__$1 = cljs.core.__destructure_map.call(null,map__20713);
var config = map__20713__$1;
var transform = cljs.core.get.call(null,map__20713__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498));
var inferred_input = cljs.core.get.call(null,map__20713__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","inferred-input","com.wsscode.pathom3.connect.operation/inferred-input",-1192133345));
var config__$1 = ((com.wsscode.pathom3.connect.operation.resolver_QMARK_.call(null,config))?config:(function (){var G__20714 = config;
if(cljs.core.truth_(transform)){
return transform.call(null,G__20714);
} else {
return G__20714;
}
})());
if(cljs.spec.alpha.valid_QMARK_.call(null,cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__20715){
return cljs.core.map_QMARK_.call(null,G__20715);
})], null),(function (G__20715){
return cljs.core.map_QMARK_.call(null,G__20715);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config__$1)){
} else {
cljs.spec.alpha.explain.call(null,cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__20716){
return cljs.core.map_QMARK_.call(null,G__20716);
})], null),(function (G__20716){
return cljs.core.map_QMARK_.call(null,G__20716);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config__$1);

throw cljs.core.ex_info.call(null,["Invalid config on resolver ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(config__$1))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.spec.alpha.explain_data.call(null,cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__20717){
return cljs.core.map_QMARK_.call(null,G__20717);
})], null),(function (G__20717){
return cljs.core.map_QMARK_.call(null,G__20717);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config__$1)], null));
}

if(com.wsscode.pathom3.connect.operation.resolver_QMARK_.call(null,config__$1)){
return config__$1;
} else {
var map__20718 = config__$1;
var map__20718__$1 = cljs.core.__destructure_map.call(null,map__20718);
var resolve = cljs.core.get.call(null,map__20718__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628));
var output = cljs.core.get.call(null,map__20718__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
var defaults = (cljs.core.truth_(output)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618),com.wsscode.pathom3.format.shape_descriptor.query__GT_shape_descriptor.call(null,output)], null):cljs.core.PersistentArrayMap.EMPTY);
var map__20719 = (function (){var G__20720 = cljs.core.dissoc.call(null,cljs.core.merge.call(null,defaults,config__$1),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","resolve","com.wsscode.pathom3.connect.operation/resolve",606027628),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498));
if(cljs.core.truth_(inferred_input)){
return cljs.core.update.call(null,G__20720,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),(function (p1__20709_SHARP_){
return com.wsscode.pathom3.format.eql.merge_queries.call(null,inferred_input,p1__20709_SHARP_);
}));
} else {
return G__20720;
}
})();
var map__20719__$1 = cljs.core.__destructure_map.call(null,map__20719);
var config_SINGLEQUOTE_ = map__20719__$1;
var input = cljs.core.get.call(null,map__20719__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497));
var config_SINGLEQUOTE___$1 = (function (){var G__20721 = config_SINGLEQUOTE_;
if(cljs.core.truth_(input)){
return cljs.core.merge.call(null,G__20721,com.wsscode.pathom3.connect.operation.describe_input.call(null,input));
} else {
return G__20721;
}
})();
return com.wsscode.pathom3.connect.operation.__GT_Resolver.call(null,config_SINGLEQUOTE___$1,(function (){var or__5002__auto__ = resolve;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (function (_,___$1){
return null;
});
}
})());
}
}));

(com.wsscode.pathom3.connect.operation.resolver.cljs$lang$maxFixedArity = 3);

/**
 * Helper to create a mutation. A mutation must have a name and the mutate function.
 * 
 *   You can create a mutation using a map:
 * 
 *    (mutation
 *      {::op-name 'foo
 *       ::output  [:foo]
 *       ::mutate  (fn [env params] ...)})
 * 
 *   Or with the helper syntax:
 * 
 *    (mutation 'foo {} (fn [env params] ...))
 * 
 *   Returns an instance of the Mutation type.
 *   
 */
com.wsscode.pathom3.connect.operation.mutation = (function com$wsscode$pathom3$connect$operation$mutation(var_args){
var G__20725 = arguments.length;
switch (G__20725) {
case 2:
return com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$2 = (function (op_name,config){
return com.wsscode.pathom3.connect.operation.mutation.call(null,com.wsscode.misc.coll.merge_defaults.call(null,config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name], null)));
}));

(com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$3 = (function (op_name,config,mutate){
return com.wsscode.pathom3.connect.operation.mutation.call(null,cljs.core.assoc.call(null,com.wsscode.misc.coll.merge_defaults.call(null,config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049),op_name], null)),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464),mutate));
}));

(com.wsscode.pathom3.connect.operation.mutation.cljs$core$IFn$_invoke$arity$1 = (function (p__20726){
var map__20727 = p__20726;
var map__20727__$1 = cljs.core.__destructure_map.call(null,map__20727);
var config = map__20727__$1;
var transform = cljs.core.get.call(null,map__20727__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498));
var inferred_params = cljs.core.get.call(null,map__20727__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","inferred-params","com.wsscode.pathom3.connect.operation/inferred-params",1566153874));
if(cljs.spec.alpha.valid_QMARK_.call(null,cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__20728){
return cljs.core.map_QMARK_.call(null,G__20728);
})], null),(function (G__20728){
return cljs.core.map_QMARK_.call(null,G__20728);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)){
} else {
cljs.spec.alpha.explain.call(null,cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__20729){
return cljs.core.map_QMARK_.call(null,G__20729);
})], null),(function (G__20729){
return cljs.core.map_QMARK_.call(null,G__20729);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config);

throw cljs.core.ex_info.call(null,["Invalid config on mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","op-name","com.wsscode.pathom3.connect.operation/op-name",-1249801049).cljs$core$IFn$_invoke$arity$1(config))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.spec.alpha.explain_data.call(null,cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__20730){
return cljs.core.map_QMARK_.call(null,G__20730);
})], null),(function (G__20730){
return cljs.core.map_QMARK_.call(null,G__20730);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),config)], null));
}

if(com.wsscode.pathom3.connect.operation.mutation_QMARK_.call(null,config)){
return config;
} else {
var map__20731 = (function (){var G__20732 = config;
if(cljs.core.truth_(transform)){
return transform.call(null,G__20732);
} else {
return G__20732;
}
})();
var map__20731__$1 = cljs.core.__destructure_map.call(null,map__20731);
var config__$1 = map__20731__$1;
var mutate = cljs.core.get.call(null,map__20731__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464));
var output = cljs.core.get.call(null,map__20731__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703));
var defaults = (cljs.core.truth_(output)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","provides","com.wsscode.pathom3.connect.operation/provides",541419618),com.wsscode.pathom3.format.shape_descriptor.query__GT_shape_descriptor.call(null,output)], null):cljs.core.PersistentArrayMap.EMPTY);
var config_SINGLEQUOTE_ = (function (){var G__20733 = cljs.core.dissoc.call(null,cljs.core.merge.call(null,defaults,config__$1),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","mutate","com.wsscode.pathom3.connect.operation/mutate",-822588464),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","transform","com.wsscode.pathom3.connect.operation/transform",-704383498));
if(cljs.core.truth_(inferred_params)){
return cljs.core.update.call(null,G__20733,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","params","com.wsscode.pathom3.connect.operation/params",-1389779339),(function (p1__20723_SHARP_){
return com.wsscode.pathom3.format.eql.merge_queries.call(null,inferred_params,p1__20723_SHARP_);
}));
} else {
return G__20733;
}
})();
return com.wsscode.pathom3.connect.operation.__GT_Mutation.call(null,config_SINGLEQUOTE_,(function (){var or__5002__auto__ = mutate;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (function (_,___$1){
return null;
});
}
})());
}
}));

(com.wsscode.pathom3.connect.operation.mutation.cljs$lang$maxFixedArity = 3);

/**
 * Pull parameters from environment. Always returns a map.
 */
com.wsscode.pathom3.connect.operation.params = (function com$wsscode$pathom3$connect$operation$params(env){
var or__5002__auto__ = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Set current node params to params.
 */
com.wsscode.pathom3.connect.operation.with_node_params = (function com$wsscode$pathom3$connect$operation$with_node_params(var_args){
var G__20736 = arguments.length;
switch (G__20736) {
case 1:
return com.wsscode.pathom3.connect.operation.with_node_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom3.connect.operation.with_node_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom3.connect.operation.with_node_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210),params], null)], null);
}));

(com.wsscode.pathom3.connect.operation.with_node_params.cljs$core$IFn$_invoke$arity$2 = (function (env,params){
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","node","com.wsscode.pathom3.connect.planner/node",325156565),new cljs.core.Keyword("com.wsscode.pathom3.connect.planner","params","com.wsscode.pathom3.connect.planner/params",1545394210)], null),params);
}));

(com.wsscode.pathom3.connect.operation.with_node_params.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","defresolver-args","com.wsscode.pathom3.connect.operation/defresolver-args",1313253759),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
com.wsscode.pathom3.connect.operation.extract_destructure_map_keys_as_keywords = (function com$wsscode$pathom3$connect$operation$extract_destructure_map_keys_as_keywords(p__20739){
var map__20740 = p__20739;
var map__20740__$1 = cljs.core.__destructure_map.call(null,map__20740);
var m = map__20740__$1;
var defaults = cljs.core.get.call(null,map__20740__$1,new cljs.core.Keyword(null,"or","or",235744169));
var add_entry = (function com$wsscode$pathom3$connect$operation$extract_destructure_map_keys_as_keywords_$_add_entry(entries,sym,k){
return cljs.core.conj.call(null,entries,((cljs.core.contains_QMARK_.call(null,defaults,sym))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","optional?","com.wsscode.pathom3.connect.operation/optional?",-926143517),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null))))):k));
});
return cljs.core.reduce_kv.call(null,(function (entries,k,v){
if((k instanceof cljs.core.Symbol)){
return add_entry.call(null,entries,k,v);
} else {
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,"keys",cljs.core.name.call(null,k))))){
return cljs.core.reduce.call(null,(function (entries__$1,sym){
return add_entry.call(null,entries__$1,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)),cljs.core.keyword.call(null,(function (){var or__5002__auto__ = cljs.core.namespace.call(null,sym);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.namespace.call(null,k);
}
})(),cljs.core.name.call(null,sym)));
}),entries,v);
} else {
return cljs.core.conj.call(null,entries,v);

}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)));
});
com.wsscode.pathom3.connect.operation.params__GT_resolver_options = (function com$wsscode$pathom3$connect$operation$params__GT_resolver_options(p__20741){
var map__20742 = p__20741;
var map__20742__$1 = cljs.core.__destructure_map.call(null,map__20742);
var arglist = cljs.core.get.call(null,map__20742__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var options = cljs.core.get.call(null,map__20742__$1,new cljs.core.Keyword(null,"options","options",99638489));
var body = cljs.core.get.call(null,map__20742__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var docstring = cljs.core.get.call(null,map__20742__$1,new cljs.core.Keyword(null,"docstring","docstring",879233117));
var vec__20743 = cljs.core.last.call(null,arglist);
var input_type = cljs.core.nth.call(null,vec__20743,(0),null);
var input_arg = cljs.core.nth.call(null,vec__20743,(1),null);
var last_expr = cljs.core.last.call(null,body);
var inferred_input = ((com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),input_type))?com.wsscode.pathom3.connect.operation.extract_destructure_map_keys_as_keywords.call(null,input_arg):null);
var G__20746 = options;
var G__20746__$1 = ((((cljs.core.map_QMARK_.call(null,last_expr)) && (cljs.core.not.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.call(null,G__20746,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),com.wsscode.pathom3.format.eql.data__GT_query.call(null,last_expr)):G__20746);
var G__20746__$2 = (cljs.core.truth_(inferred_input)?cljs.core.assoc.call(null,G__20746__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","inferred-input","com.wsscode.pathom3.connect.operation/inferred-input",-1192133345),inferred_input):G__20746__$1);
if(cljs.core.truth_(docstring)){
return cljs.core.assoc.call(null,G__20746__$2,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","docstring","com.wsscode.pathom3.connect.operation/docstring",-1367867441),docstring);
} else {
return G__20746__$2;
}
});
com.wsscode.pathom3.connect.operation.params__GT_mutation_options = (function com$wsscode$pathom3$connect$operation$params__GT_mutation_options(p__20747){
var map__20748 = p__20747;
var map__20748__$1 = cljs.core.__destructure_map.call(null,map__20748);
var arglist = cljs.core.get.call(null,map__20748__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var options = cljs.core.get.call(null,map__20748__$1,new cljs.core.Keyword(null,"options","options",99638489));
var body = cljs.core.get.call(null,map__20748__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var docstring = cljs.core.get.call(null,map__20748__$1,new cljs.core.Keyword(null,"docstring","docstring",879233117));
var vec__20749 = cljs.core.last.call(null,arglist);
var input_type = cljs.core.nth.call(null,vec__20749,(0),null);
var params_arg = cljs.core.nth.call(null,vec__20749,(1),null);
var last_expr = cljs.core.last.call(null,body);
var inferred_params = ((com.wsscode.misc.refs.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),input_type))?com.wsscode.pathom3.connect.operation.extract_destructure_map_keys_as_keywords.call(null,params_arg):null);
var G__20752 = options;
var G__20752__$1 = ((((cljs.core.map_QMARK_.call(null,last_expr)) && (cljs.core.not.call(null,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.call(null,G__20752,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),com.wsscode.pathom3.format.eql.data__GT_query.call(null,last_expr)):G__20752);
var G__20752__$2 = (cljs.core.truth_(inferred_params)?cljs.core.assoc.call(null,G__20752__$1,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","inferred-params","com.wsscode.pathom3.connect.operation/inferred-params",1566153874),inferred_params):G__20752__$1);
if(cljs.core.truth_(docstring)){
return cljs.core.assoc.call(null,G__20752__$2,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","docstring","com.wsscode.pathom3.connect.operation/docstring",-1367867441),docstring);
} else {
return G__20752__$2;
}
});
/**
 * Ensures arglist contains two elements.
 */
com.wsscode.pathom3.connect.operation.normalize_arglist = (function com$wsscode$pathom3$connect$operation$normalize_arglist(arglist){
var arglist__$1 = arglist;
while(true){
if((cljs.core.count.call(null,arglist__$1) < (2))){
var G__20753 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),arglist__$1);
arglist__$1 = G__20753;
continue;
} else {
return arglist__$1;
}
break;
}
});
/**
 * Returns a new resolver with the modified config. You can use this to change anything
 *   in the resolver configuration map. The only thing you can't change from here is the
 *   resolver or mutation functions. You can use the wrap-resolve and wrap-mutation
 *   helpers to do that.
 */
com.wsscode.pathom3.connect.operation.update_config = (function com$wsscode$pathom3$connect$operation$update_config(var_args){
var G__20767 = arguments.length;
switch (G__20767) {
case 2:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___20769 = arguments.length;
var i__5727__auto___20770 = (0);
while(true){
if((i__5727__auto___20770 < len__5726__auto___20769)){
args_arr__5751__auto__.push((arguments[i__5727__auto___20770]));

var G__20771 = (i__5727__auto___20770 + (1));
i__5727__auto___20770 = G__20771;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((11) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((11)),(0),null)):null);
return com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),argseq__5752__auto__);

}
});

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$2 = (function (operation,f){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$3 = (function (operation,f,a1){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$4 = (function (operation,f,a1,a2){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$5 = (function (operation,f,a1,a2,a3){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$6 = (function (operation,f,a1,a2,a3,a4){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,a4);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$7 = (function (operation,f,a1,a2,a3,a4,a5){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,a4,a5);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$8 = (function (operation,f,a1,a2,a3,a4,a5,a6){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,a4,a5,a6);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$9 = (function (operation,f,a1,a2,a3,a4,a5,a6,a7){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,a4,a5,a6,a7);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$10 = (function (operation,f,a1,a2,a3,a4,a5,a6,a7,a8){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,a4,a5,a6,a7,a8);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$11 = (function (operation,f,a1,a2,a3,a4,a5,a6,a7,a8,a9){
return cljs.core.update.call(null,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,a4,a5,a6,a7,a8,a9);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$core$IFn$_invoke$arity$variadic = (function (operation,f,a1,a2,a3,a4,a5,a6,a7,a8,a9,args){
return cljs.core.apply.call(null,cljs.core.update,operation,new cljs.core.Keyword(null,"config","config",994861415),f,a1,a2,a3,a4,a5,a6,a7,a8,a9,args);
}));

/** @this {Function} */
(com.wsscode.pathom3.connect.operation.update_config.cljs$lang$applyTo = (function (seq20755){
var G__20756 = cljs.core.first.call(null,seq20755);
var seq20755__$1 = cljs.core.next.call(null,seq20755);
var G__20757 = cljs.core.first.call(null,seq20755__$1);
var seq20755__$2 = cljs.core.next.call(null,seq20755__$1);
var G__20758 = cljs.core.first.call(null,seq20755__$2);
var seq20755__$3 = cljs.core.next.call(null,seq20755__$2);
var G__20759 = cljs.core.first.call(null,seq20755__$3);
var seq20755__$4 = cljs.core.next.call(null,seq20755__$3);
var G__20760 = cljs.core.first.call(null,seq20755__$4);
var seq20755__$5 = cljs.core.next.call(null,seq20755__$4);
var G__20761 = cljs.core.first.call(null,seq20755__$5);
var seq20755__$6 = cljs.core.next.call(null,seq20755__$5);
var G__20762 = cljs.core.first.call(null,seq20755__$6);
var seq20755__$7 = cljs.core.next.call(null,seq20755__$6);
var G__20763 = cljs.core.first.call(null,seq20755__$7);
var seq20755__$8 = cljs.core.next.call(null,seq20755__$7);
var G__20764 = cljs.core.first.call(null,seq20755__$8);
var seq20755__$9 = cljs.core.next.call(null,seq20755__$8);
var G__20765 = cljs.core.first.call(null,seq20755__$9);
var seq20755__$10 = cljs.core.next.call(null,seq20755__$9);
var G__20766 = cljs.core.first.call(null,seq20755__$10);
var seq20755__$11 = cljs.core.next.call(null,seq20755__$10);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20756,G__20757,G__20758,G__20759,G__20760,G__20761,G__20762,G__20763,G__20764,G__20765,G__20766,seq20755__$11);
}));

(com.wsscode.pathom3.connect.operation.update_config.cljs$lang$maxFixedArity = (11));

/**
 * Return a new resolver with the resolve fn modified. You can use the previous fn or
 *   just replace. Here is a noop wrapper example:
 * 
 *   (wrap-resolve resolver
 *  (fn [resolve]
 *    (fn [env input]
 *      (resolve env input)))
 */
com.wsscode.pathom3.connect.operation.wrap_resolve = (function com$wsscode$pathom3$connect$operation$wrap_resolve(resolver,f){
return cljs.core.update.call(null,resolver,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),f);
});
/**
 * Return a new mutation with the resolve fn modified. You can use the previous fn or
 *   just replace. Here is a noop wrapper example:
 * 
 *   (wrap-mutate mutation
 *  (fn [mutate]
 *    (fn [env params]
 *      (mutate env params)))
 */
com.wsscode.pathom3.connect.operation.wrap_mutate = (function com$wsscode$pathom3$connect$operation$wrap_mutate(mutation,f){
return cljs.core.update.call(null,mutation,new cljs.core.Keyword(null,"mutate","mutate",1422419038),f);
});
/**
 * Makes a value final. This will add some meta-data to a collection or a map to
 *   flag it as final. Data marked as final will make Pathom skip sub-processing it.
 * 
 *   Example:
 * 
 *    (pco/defresolver complex-done-list []
 *      {:dont-process (pco/final-value [{:a 1} {:a 2} ...])})
 * 
 *   Note that in this case, a query like `[{:dont-process [:a :b]}]` won't even try
 *   to process `:b`, the vector value will be returned as-is.
 */
com.wsscode.pathom3.connect.operation.final_value = (function com$wsscode$pathom3$connect$operation$final_value(x){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","final","com.wsscode.pathom3.connect.operation/final",-910956993),true);
});
com.wsscode.pathom3.connect.operation.final_value_QMARK_ = (function com$wsscode$pathom3$connect$operation$final_value_QMARK_(x){
var G__20772 = x;
var G__20772__$1 = (((G__20772 == null))?null:cljs.core.meta.call(null,G__20772));
var G__20772__$2 = (((G__20772__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","final","com.wsscode.pathom3.connect.operation/final",-910956993).cljs$core$IFn$_invoke$arity$1(G__20772__$1));
if((G__20772__$2 == null)){
return null;
} else {
return G__20772__$2 === true;
}
});

//# sourceMappingURL=operation.js.map
