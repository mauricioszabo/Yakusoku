// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.misc.time');
goog.require('cljs.core');
com.wsscode.misc.time.now_ms = (function com$wsscode$misc$time$now_ms(){
return cljs.core.system_time.call(null);
});
/**
 * Clojure and Clojurescript solution to hold execution for a given time.
 */
com.wsscode.misc.time.sleep_ms = (function com$wsscode$misc$time$sleep_ms(ms){
var now = cljs.core.system_time.call(null);
var continue_at = (now + ms);
while(true){
if((cljs.core.system_time.call(null) < continue_at)){
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=time.js.map
