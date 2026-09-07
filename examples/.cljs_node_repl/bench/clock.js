// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('bench.clock');
goog.require('cljs.core');
goog.require('promesa.core');
bench.clock.runtime_name = (function bench$clock$runtime_name(){
return "clojurescript";
});
bench.clock.now_ms = (function bench$clock$now_ms(){
return Date.now();
});
bench.clock.sleep_ms = (function bench$clock$sleep_ms(_ms){
throw cljs.core.ex_info.call(null,"ClojureScript cannot block; the sync benchmarks do not run here",cljs.core.PersistentArrayMap.EMPTY);
});
bench.clock.await_BANG_ = (function bench$clock$await_BANG_(_promise){
throw cljs.core.ex_info.call(null,"ClojureScript cannot block on a promise",cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=clock.js.map
