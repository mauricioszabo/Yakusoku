// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.log');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.fulcrologic.guardrails.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.wsscode.log","level","com.wsscode.log/level",1172057907),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),"null",new cljs.core.Keyword("com.wsscode.log","level-debug","com.wsscode.log/level-debug",1489977397),"null",new cljs.core.Keyword("com.wsscode.log","level-info","com.wsscode.log/level-info",702175034),"null",new cljs.core.Keyword("com.wsscode.log","level-error","com.wsscode.log/level-error",1042653178),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),null,new cljs.core.Keyword("com.wsscode.log","level-debug","com.wsscode.log/level-debug",1489977397),null,new cljs.core.Keyword("com.wsscode.log","level-info","com.wsscode.log/level-info",702175034),null,new cljs.core.Keyword("com.wsscode.log","level-error","com.wsscode.log/level-error",1042653178),null], null), null));
com.wsscode.log.log_levels = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.log","level-debug","com.wsscode.log/level-debug",1489977397),(1),new cljs.core.Keyword("com.wsscode.log","level-info","com.wsscode.log/level-info",702175034),(2),new cljs.core.Keyword("com.wsscode.log","level-warn","com.wsscode.log/level-warn",312686542),(3),new cljs.core.Keyword("com.wsscode.log","level-error","com.wsscode.log/level-error",1042653178),(4)], null);
com.wsscode.log.print_logger = (function com$wsscode$log$print_logger(_){
return (function com$wsscode$log$print_logger_$_print_logger_internal(p__17904){
var map__17905 = p__17904;
var map__17905__$1 = cljs.core.__destructure_map.call(null,map__17905);
var data = map__17905__$1;
var timestamp = cljs.core.get.call(null,map__17905__$1,new cljs.core.Keyword("com.wsscode.log","timestamp","com.wsscode.log/timestamp",731997926));
var level = cljs.core.get.call(null,map__17905__$1,new cljs.core.Keyword("com.wsscode.log","level","com.wsscode.log/level",1172057907));
var event = cljs.core.get.call(null,map__17905__$1,new cljs.core.Keyword("com.wsscode.log","event","com.wsscode.log/event",151015715));
return cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(timestamp)," ",(cljs.core.truth_(level)?[clojure.string.upper_case.call(null,cljs.core.subs.call(null,cljs.core.name.call(null,level),(6)))," "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," - ",cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword("com.wsscode.log","level","com.wsscode.log/level",1172057907),new cljs.core.Keyword("com.wsscode.log","event","com.wsscode.log/event",151015715),new cljs.core.Keyword("com.wsscode.log","timestamp","com.wsscode.log/timestamp",731997926))),"\n"].join(''));
});
});
com.wsscode.log._STAR_active_logger_STAR_ = com.wsscode.log.print_logger.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.log","min-level","com.wsscode.log/min-level",1514573958),new cljs.core.Keyword("com.wsscode.log","level-debug","com.wsscode.log/level-debug",1489977397)], null));
com.wsscode.log.now = (function com$wsscode$log$now(){
return (new Date());
});
com.wsscode.log.make_event = (function com$wsscode$log$make_event(event_level,event_name,data){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.log","event","com.wsscode.log/event",151015715),event_name,new cljs.core.Keyword("com.wsscode.log","level","com.wsscode.log/level",1172057907),event_level,new cljs.core.Keyword("com.wsscode.log","timestamp","com.wsscode.log/timestamp",731997926),com.wsscode.log.now.call(null)], null),data);
});

//# sourceMappingURL=log.js.map
