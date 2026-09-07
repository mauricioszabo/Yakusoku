// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.fulcrologic.guardrails.core');
goog.require('cljs.core');
goog.require('com.fulcrologic.guardrails.impl.externs');
goog.require('com.fulcrologic.guardrails.utils');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('expound.alpha');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.call(null,cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.call(null,com.fulcrologic.guardrails.core.global_context,cljs.core.partial.call(null,cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.call(null,com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first.call(null,cljs.core.deref.call(null,com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__4928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__4929__auto__ = (function (){var switch__4854__auto__ = (function (state_17792){
var state_val_17793 = (state_17792[(1)]);
if((state_val_17793 === (7))){
var inst_17788 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
var statearr_17794_17818 = state_17792__$1;
(statearr_17794_17818[(2)] = inst_17788);

(statearr_17794_17818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (1))){
var state_17792__$1 = state_17792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17792__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_17793 === (4))){
var inst_17790 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17792__$1,inst_17790);
} else {
if((state_val_17793 === (6))){
var inst_17786 = cljs.core.println.call(null,"Guardrails ASYNC LOOP STOPPED ****************************************");
var state_17792__$1 = state_17792;
var statearr_17795_17819 = state_17792__$1;
(statearr_17795_17819[(2)] = inst_17786);

(statearr_17795_17819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (3))){
var inst_17769 = (state_17792[(7)]);
var state_17792__$1 = state_17792;
if(cljs.core.truth_(inst_17769)){
var statearr_17796_17820 = state_17792__$1;
(statearr_17796_17820[(1)] = (5));

} else {
var statearr_17797_17821 = state_17792__$1;
(statearr_17797_17821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (12))){
var inst_17783 = (state_17792[(2)]);
var inst_17769 = inst_17783;
var state_17792__$1 = (function (){var statearr_17799 = state_17792;
(statearr_17799[(7)] = inst_17769);

return statearr_17799;
})();
var statearr_17800_17822 = state_17792__$1;
(statearr_17800_17822[(2)] = null);

(statearr_17800_17822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (2))){
var inst_17768 = (state_17792[(2)]);
var inst_17769 = inst_17768;
var state_17792__$1 = (function (){var statearr_17801 = state_17792;
(statearr_17801[(7)] = inst_17769);

return statearr_17801;
})();
var statearr_17802_17823 = state_17792__$1;
(statearr_17802_17823[(2)] = null);

(statearr_17802_17823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (11))){
var _ = (function (){var statearr_17803 = state_17792;
(statearr_17803[(4)] = cljs.core.rest.call(null,(state_17792[(4)])));

return statearr_17803;
})();
var state_17792__$1 = state_17792;
var ex17798 = (state_17792__$1[(2)]);
var statearr_17804_17824 = state_17792__$1;
(statearr_17804_17824[(5)] = ex17798);


var statearr_17805_17825 = state_17792__$1;
(statearr_17805_17825[(1)] = (10));

(statearr_17805_17825[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (9))){
var inst_17781 = (state_17792[(2)]);
var state_17792__$1 = (function (){var statearr_17806 = state_17792;
(statearr_17806[(8)] = inst_17781);

return statearr_17806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17792__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_17793 === (5))){
var state_17792__$1 = state_17792;
var statearr_17807_17826 = state_17792__$1;
(statearr_17807_17826[(2)] = null);

(statearr_17807_17826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (10))){
var inst_17772 = (state_17792[(2)]);
var state_17792__$1 = (function (){var statearr_17808 = state_17792;
(statearr_17808[(9)] = inst_17772);

return statearr_17808;
})();
var statearr_17809_17827 = state_17792__$1;
(statearr_17809_17827[(2)] = null);

(statearr_17809_17827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (8))){
var inst_17769 = (state_17792[(7)]);
var _ = (function (){var statearr_17810 = state_17792;
(statearr_17810[(4)] = cljs.core.cons.call(null,(11),(state_17792[(4)])));

return statearr_17810;
})();
var inst_17778 = inst_17769.call(null);
var ___$1 = (function (){var statearr_17811 = state_17792;
(statearr_17811[(4)] = cljs.core.rest.call(null,(state_17792[(4)])));

return statearr_17811;
})();
var state_17792__$1 = state_17792;
var statearr_17812_17828 = state_17792__$1;
(statearr_17812_17828[(2)] = inst_17778);

(statearr_17812_17828[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__4855__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__4855__auto____0 = (function (){
var statearr_17813 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17813[(0)] = com$fulcrologic$guardrails$core$state_machine__4855__auto__);

(statearr_17813[(1)] = (1));

return statearr_17813;
});
var com$fulcrologic$guardrails$core$state_machine__4855__auto____1 = (function (state_17792){
while(true){
var ret_value__4856__auto__ = (function (){try{while(true){
var result__4857__auto__ = switch__4854__auto__.call(null,state_17792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4857__auto__;
}
break;
}
}catch (e17814){var ex__4858__auto__ = e17814;
var statearr_17815_17829 = state_17792;
(statearr_17815_17829[(2)] = ex__4858__auto__);


if(cljs.core.seq.call(null,(state_17792[(4)]))){
var statearr_17816_17830 = state_17792;
(statearr_17816_17830[(1)] = cljs.core.first.call(null,(state_17792[(4)])));

} else {
throw ex__4858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17831 = state_17792;
state_17792 = G__17831;
continue;
} else {
return ret_value__4856__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__4855__auto__ = function(state_17792){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__4855__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__4855__auto____1.call(this,state_17792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__4855__auto____0;
com$fulcrologic$guardrails$core$state_machine__4855__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__4855__auto____1;
return com$fulcrologic$guardrails$core$state_machine__4855__auto__;
})()
})();
var state__4930__auto__ = (function (){var statearr_17817 = f__4929__auto__.call(null);
(statearr_17817[(6)] = c__4928__auto__);

return statearr_17817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4930__auto__);
}));

return c__4928__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__17832 = data;
var map__17832__$1 = cljs.core.__destructure_map.call(null,map__17832);
var level = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case.call(null,cljs.core.name.call(null,level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force.call(null,msg_)),(function (){var temp__5823__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5823__auto__)){
var err = temp__5823__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.call(null,err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms.call(null,(new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",(20),(1),(12050),(12050),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__17833,spec,value){
var map__17834 = p__17833;
var map__17834__$1 = cljs.core.__destructure_map.call(null,map__17834);
var tap_GT__QMARK_ = cljs.core.get.call(null,map__17834__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.call(null,map__17834__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.call(null,map__17834__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.call(null,map__17834__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.call(null,map__17834__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.call(null,map__17834__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.call(null,map__17834__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_17837 = com.fulcrologic.guardrails.core.now_ms.call(null);
var vargs_QMARK__17838 = (function (){var and__5000__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return vararg_QMARK_;
} else {
return and__5000__auto__;
}
})();
var varg_17839 = (cljs.core.truth_(vargs_QMARK__17838)?cljs.core.last.call(null,cljs.core.seq.call(null,value)):null);
var specable_args_17840 = (cljs.core.truth_(vargs_QMARK__17838)?((cljs.core.map_QMARK_.call(null,varg_17839))?cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,value)),cljs.core.flatten.call(null,cljs.core.seq.call(null,varg_17839))):cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,value)),cljs.core.seq.call(null,varg_17839))):value);
var valid_exception_17841 = cljs.core.atom.call(null,null);
try{if(cljs.spec.alpha.valid_QMARK_.call(null,spec,specable_args_17840)){
} else {
var problem_17842 = expound.alpha.expound_str.call(null,spec,specable_args_17840,expound_opts);
var description_17843 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_17842)].join('');
var context_17844 = com.fulcrologic.guardrails.core.get_global_context.call(null);
if(cljs.core.truth_((function (){var and__5000__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5000__auto__)){
return tap_GT__QMARK_;
} else {
return and__5000__auto__;
}
})())){
com.fulcrologic.guardrails.core.tap.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data.call(null,spec,specable_args_17840)], null));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_.call(null,valid_exception_17841,cljs.core.ex_info.call(null,(function (){var G__17836 = description_17843;
if(cljs.core.truth_(context_17844)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_17844),G__17836].join('');
} else {
return G__17836;
}
})(),cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_17844], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_17840], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem.call(null,[description_17843,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.call(null,(function (){var or__5002__auto__ = callsite;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.ex_info.call(null,"",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e17835){var e_17845 = e17835;
com.fulcrologic.guardrails.utils.report_exception.call(null,e_17845,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_17846 = (com.fulcrologic.guardrails.core.now_ms.call(null) - start_17837);
if((duration_17846 > (100))){
com.fulcrologic.guardrails.utils.report_problem.call(null,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_17846),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref.call(null,valid_exception_17841))){
throw cljs.core.deref.call(null,valid_exception_17841);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=core.js.map
