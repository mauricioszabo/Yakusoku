// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('expound.paths');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('expound.util');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound","path","expound/path",-1026376555),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
expound.paths.KeyPathSegment = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k3107,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__3111 = k3107;
var G__3111__$1 = (((G__3111 instanceof cljs.core.Keyword))?G__3111.fqn:null);
switch (G__3111__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3107,else__5303__auto__);

}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__3112){
var vec__3113 = p__3112;
var k__5324__auto__ = cljs.core.nth.call(null,vec__3113,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__3113,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#expound.paths.KeyPathSegment{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3106){
var self__ = this;
var G__3106__$1 = this;
return (new cljs.core.RecordIter((0),G__3106__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (233526946 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3108,other3109){
var self__ = this;
var this3108__$1 = this;
return (((!((other3109 == null)))) && ((((this3108__$1.constructor === other3109.constructor)) && (((cljs.core._EQ_.call(null,this3108__$1.key,other3109.key)) && (cljs.core._EQ_.call(null,this3108__$1.__extmap,other3109.__extmap)))))));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k3107){
var self__ = this;
var this__5307__auto____$1 = this;
var G__3116 = k3107;
var G__3116__$1 = (((G__3116 instanceof cljs.core.Keyword))?G__3116.fqn:null);
switch (G__3116__$1) {
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3107);

}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__3106){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__3117 = cljs.core.keyword_identical_QMARK_;
var expr__3118 = k__5309__auto__;
if(cljs.core.truth_(pred__3117.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__3118))){
return (new expound.paths.KeyPathSegment(G__3106,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__3106),null));
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__3106){
var self__ = this;
var this__5299__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,G__3106,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(expound.paths.KeyPathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(expound.paths.KeyPathSegment.cljs$lang$type = true);

(expound.paths.KeyPathSegment.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"expound.paths/KeyPathSegment",null,(1),null));
}));

(expound.paths.KeyPathSegment.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"expound.paths/KeyPathSegment");
}));

/**
 * Positional factory function for expound.paths/KeyPathSegment.
 */
expound.paths.__GT_KeyPathSegment = (function expound$paths$__GT_KeyPathSegment(key){
return (new expound.paths.KeyPathSegment(key,null,null,null));
});

/**
 * Factory function for expound.paths/KeyPathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyPathSegment = (function expound$paths$map__GT_KeyPathSegment(G__3110){
var extmap__5342__auto__ = (function (){var G__3120 = cljs.core.dissoc.call(null,G__3110,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_.call(null,G__3110)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3120);
} else {
return G__3120;
}
})();
return (new expound.paths.KeyPathSegment(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__3110),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
expound.paths.KeyValuePathSegment = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k3124,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__3128 = k3124;
var G__3128__$1 = (((G__3128 instanceof cljs.core.Keyword))?G__3128.fqn:null);
switch (G__3128__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3124,else__5303__auto__);

}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__3129){
var vec__3130 = p__3129;
var k__5324__auto__ = cljs.core.nth.call(null,vec__3130,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__3130,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#expound.paths.KeyValuePathSegment{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3123){
var self__ = this;
var G__3123__$1 = this;
return (new cljs.core.RecordIter((0),G__3123__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1269438429 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3125,other3126){
var self__ = this;
var this3125__$1 = this;
return (((!((other3126 == null)))) && ((((this3125__$1.constructor === other3126.constructor)) && (((cljs.core._EQ_.call(null,this3125__$1.idx,other3126.idx)) && (cljs.core._EQ_.call(null,this3125__$1.__extmap,other3126.__extmap)))))));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k3124){
var self__ = this;
var this__5307__auto____$1 = this;
var G__3133 = k3124;
var G__3133__$1 = (((G__3133 instanceof cljs.core.Keyword))?G__3133.fqn:null);
switch (G__3133__$1) {
case "idx":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3124);

}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__3123){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__3134 = cljs.core.keyword_identical_QMARK_;
var expr__3135 = k__5309__auto__;
if(cljs.core.truth_(pred__3134.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__3135))){
return (new expound.paths.KeyValuePathSegment(G__3123,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__3123),null));
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__3123){
var self__ = this;
var this__5299__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,G__3123,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(expound.paths.KeyValuePathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(expound.paths.KeyValuePathSegment.cljs$lang$type = true);

(expound.paths.KeyValuePathSegment.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"expound.paths/KeyValuePathSegment",null,(1),null));
}));

(expound.paths.KeyValuePathSegment.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"expound.paths/KeyValuePathSegment");
}));

/**
 * Positional factory function for expound.paths/KeyValuePathSegment.
 */
expound.paths.__GT_KeyValuePathSegment = (function expound$paths$__GT_KeyValuePathSegment(idx){
return (new expound.paths.KeyValuePathSegment(idx,null,null,null));
});

/**
 * Factory function for expound.paths/KeyValuePathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyValuePathSegment = (function expound$paths$map__GT_KeyValuePathSegment(G__3127){
var extmap__5342__auto__ = (function (){var G__3137 = cljs.core.dissoc.call(null,G__3127,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_.call(null,G__3127)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3137);
} else {
return G__3137;
}
})();
return (new expound.paths.KeyValuePathSegment(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__3127),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});

expound.paths.kps_QMARK_ = (function expound$paths$kps_QMARK_(x){
return (x instanceof expound.paths.KeyPathSegment);
});
expound.paths.kvps_QMARK_ = (function expound$paths$kvps_QMARK_(x){
return (x instanceof expound.paths.KeyValuePathSegment);
});
expound.paths.fn_equal = (function expound$paths$fn_equal(x,y){
return ((cljs.core.fn_QMARK_.call(null,x)) && (((cljs.core.fn_QMARK_.call(null,y)) && (cljs.core._EQ_.call(null,cljs.core.pr_str.call(null,x),cljs.core.pr_str.call(null,y))))));
});
expound.paths.both_nan_QMARK_ = (function expound$paths$both_nan_QMARK_(x,y){
var and__5000__auto__ = expound.util.nan_QMARK_.call(null,x);
if(cljs.core.truth_(and__5000__auto__)){
return expound.util.nan_QMARK_.call(null,y);
} else {
return and__5000__auto__;
}
});
expound.paths.equalish_QMARK_ = (function expound$paths$equalish_QMARK_(x,y){
var or__5002__auto__ = cljs.core._EQ_.call(null,x,y);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = expound.paths.fn_equal.call(null,x,y);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return expound.paths.both_nan_QMARK_.call(null,x,y);
}
}
});
expound.paths.in_with_kps_maps_as_seqs = (function expound$paths$in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_){
var vec__3140 = in$;
var seq__3141 = cljs.core.seq.call(null,vec__3140);
var first__3142 = cljs.core.first.call(null,seq__3141);
var seq__3141__$1 = cljs.core.next.call(null,seq__3141);
var k = first__3142;
var rst = seq__3141__$1;
var vec__3143 = rst;
var seq__3144 = cljs.core.seq.call(null,vec__3143);
var first__3145 = cljs.core.first.call(null,seq__3144);
var seq__3144__$1 = cljs.core.next.call(null,seq__3144);
var idx = first__3145;
var rst2 = seq__3144__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),form)){
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__5000__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__5000__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (((cljs.core.nat_int_QMARK_.call(null,k)) && ((cljs.core.long$.call(null,k) < cljs.core.count.call(null,cljs.core.seq.call(null,form)))))))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment.call(null,k)));
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (((cljs.core.nat_int_QMARK_.call(null,k)) && (((cljs.core.int_QMARK_.call(null,idx)) && ((((cljs.core.long$.call(null,k) < cljs.core.count.call(null,cljs.core.seq.call(null,form)))) && ((cljs.core.long$.call(null,idx) < cljs.core.count.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k)))))))))))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),idx),val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment.call(null,k),idx));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_fuzzy_match_for_regex_failures = (function expound$paths$in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__3146 = in$;
var seq__3147 = cljs.core.seq.call(null,vec__3146);
var first__3148 = cljs.core.first.call(null,seq__3147);
var seq__3147__$1 = cljs.core.next.call(null,seq__3147);
var k = first__3148;
var rst = seq__3147__$1;
if(((cljs.core.empty_QMARK_.call(null,in$)) && (((cljs.core.seqable_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,val,cljs.core.List.EMPTY)))))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.empty_QMARK_.call(null,in$)) && (((cljs.core.seq_QMARK_.call(null,val)) && (cljs.core._EQ_.call(null,form,cljs.core.first.call(null,val))))))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.nat_int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795)),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_keys = (function expound$paths$in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__3149 = in$;
var seq__3150 = cljs.core.seq.call(null,vec__3149);
var first__3151 = cljs.core.first.call(null,seq__3150);
var seq__3150__$1 = cljs.core.next.call(null,seq__3150);
var k = first__3151;
var rst = seq__3150__$1;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__5000__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__5000__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.get.call(null,form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795)),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795)),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_key_value_indicators = (function expound$paths$in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__3152 = in$;
var seq__3153 = cljs.core.seq.call(null,vec__3152);
var first__3154 = cljs.core.first.call(null,seq__3153);
var seq__3153__$1 = cljs.core.next.call(null,seq__3153);
var k = first__3154;
var rst = seq__3153__$1;
var vec__3155 = rst;
var seq__3156 = cljs.core.seq.call(null,vec__3155);
var first__3157 = cljs.core.first.call(null,seq__3156);
var seq__3156__$1 = cljs.core.next.call(null,seq__3156);
var idx = first__3157;
var rst2 = seq__3156__$1;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__5000__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__5000__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,(0),idx)))){
return expound.paths.in_with_kps_STAR_.call(null,k,val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyPathSegment.call(null,k)));
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,(1),idx)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.get.call(null,form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795)),val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_STAR_ = (function expound$paths$in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core.fn_QMARK_.call(null,form)){
return in_SINGLEQUOTE_;
} else {
var br1 = expound.paths.in_with_kps_ints_are_key_value_indicators.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br1)){
return br1;
} else {
var br2 = expound.paths.in_with_kps_maps_as_seqs.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br2)){
return br2;
} else {
var br3 = expound.paths.in_with_kps_ints_are_keys.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br3)){
return br3;
} else {
var br4 = expound.paths.in_with_kps_fuzzy_match_for_regex_failures.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br4)){
return br4;
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
}
}
}
}
}
});
expound.paths.paths_to_value = (function expound$paths$paths_to_value(form,val,path,paths){
if(cljs.core._EQ_.call(null,form,val)){
return cljs.core.conj.call(null,paths,path);
} else {
if(((cljs.core.sequential_QMARK_.call(null,form)) || (cljs.core.set_QMARK_.call(null,form)))){
return cljs.core.reduce.call(null,(function (ps,p__3158){
var vec__3159 = p__3158;
var x = cljs.core.nth.call(null,vec__3159,(0),null);
var i = cljs.core.nth.call(null,vec__3159,(1),null);
return expound.paths.paths_to_value.call(null,x,val,cljs.core.conj.call(null,path,i),ps);
}),paths,cljs.core.map.call(null,cljs.core.vector,form,cljs.core.range.call(null)));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (ps,p__3162){
var vec__3163 = p__3162;
var k = cljs.core.nth.call(null,vec__3163,(0),null);
var v = cljs.core.nth.call(null,vec__3163,(1),null);
return expound.paths.paths_to_value.call(null,v,val,cljs.core.conj.call(null,path,k),expound.paths.paths_to_value.call(null,k,val,cljs.core.conj.call(null,path,expound.paths.__GT_KeyPathSegment.call(null,k)),ps));
}),paths,form);
} else {
return paths;

}
}
}
});
expound.paths.in_with_kps = (function expound$paths$in_with_kps(form,val,in$,in_SINGLEQUOTE_){
var res = expound.paths.in_with_kps_STAR_.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),res)){
return null;
} else {
return res;
}
});
expound.paths.compare_path_segment = (function expound$paths$compare_path_segment(x,y){
if(((cljs.core.int_QMARK_.call(null,x)) && (expound.paths.kvps_QMARK_.call(null,y)))){
return cljs.core.compare.call(null,x,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(y));
} else {
if(((expound.paths.kvps_QMARK_.call(null,x)) && (cljs.core.int_QMARK_.call(null,y)))){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(x),y);
} else {
if(((expound.paths.kps_QMARK_.call(null,x)) && ((!(expound.paths.kps_QMARK_.call(null,y)))))){
return (-1);
} else {
if((((!(expound.paths.kps_QMARK_.call(null,x)))) && (expound.paths.kps_QMARK_.call(null,y)))){
return (1);
} else {
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core.vector_QMARK_.call(null,y)))){
return expound.paths.compare_paths.call(null,x,y);
} else {
return cljs.core.compare.call(null,x,y);

}
}
}
}
}
});
expound.paths.compare_paths = (function expound$paths$compare_paths(path1,path2){
return cljs.core.first.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,expound.paths.compare_path_segment,path1,path2)));
});
/**
 * Similar to get-in, but works with paths that reference map keys
 */
expound.paths.value_in = (function expound$paths$value_in(form,in$){
while(true){
if((in$ == null)){
return form;
} else {
var vec__3166 = in$;
var seq__3167 = cljs.core.seq.call(null,vec__3166);
var first__3168 = cljs.core.first.call(null,seq__3167);
var seq__3167__$1 = cljs.core.next.call(null,seq__3167);
var k = first__3168;
var rst = seq__3167__$1;
if(cljs.core.empty_QMARK_.call(null,in$)){
return form;
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (expound.paths.kps_QMARK_.call(null,k)))){
var G__3169 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
var G__3170 = rst;
form = G__3169;
in$ = G__3170;
continue;
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (expound.paths.kvps_QMARK_.call(null,k)))){
var G__3171 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__3172 = rst;
form = G__3171;
in$ = G__3172;
continue;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
var G__3173 = cljs.core.get.call(null,form,k);
var G__3174 = rst;
form = G__3173;
in$ = G__3174;
continue;
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form)))){
var G__3175 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),k);
var G__3176 = rst;
form = G__3175;
in$ = G__3176;
continue;
} else {
throw cljs.core.ex_info.call(null,"No value found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=paths.js.map
