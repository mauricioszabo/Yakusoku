// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('bench.graph');
goog.require('cljs.core');
goog.require('bench.clock');
goog.require('com.wsscode.pathom3.connect.operation');
goog.require('com.wsscode.pathom3.connect.indexes');
goog.require('com.wsscode.pathom3.interface$.eql');
goog.require('com.wsscode.pathom3.interface$.async.eql');
goog.require('promesa.core');
/**
 * Each of the two independent user resolvers.
 */
bench.graph.slow_ms = (50);
/**
 * The resolver that depends on both of them.
 */
bench.graph.join_ms = (10);
/**
 * One batched call, however many items it covers.
 */
bench.graph.batch_ms = (60);
/**
 * One call of the non-batched twin, per item.
 */
bench.graph.item_ms = (20);
bench.graph.user_ids = cljs.core.vec.call(null,cljs.core.range.call(null,(1),(21)));
bench.graph.item_ids = cljs.core.vec.call(null,cljs.core.range.call(null,(1),(31)));
bench.graph.items = cljs.core.mapv.call(null,(function (id){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","id","item/id",-1385287903),id], null);
}),bench.graph.item_ids);
bench.graph.profile_sync = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","profile-sync","bench.graph/profile-sync",-1424699231,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","profile","user/profile",-543273885)], null)], null),(function bench$graph$profile_sync(env,input){
bench.clock.sleep_ms.call(null,bench.graph.slow_ms);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","profile","user/profile",-543273885),["profile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(input))].join('')], null);
}));
bench.graph.orders_sync = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","orders-sync","bench.graph/orders-sync",-272235806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","orders","user/orders",-1038452021)], null)], null),(function bench$graph$orders_sync(env,input){
bench.clock.sleep_ms.call(null,bench.graph.slow_ms);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","orders","user/orders",-1038452021),((3) * new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(input))], null);
}));
bench.graph.summary_sync = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","summary-sync","bench.graph/summary-sync",2059560215,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","profile","user/profile",-543273885),new cljs.core.Keyword("user","orders","user/orders",-1038452021)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","summary","user/summary",367680507)], null)], null),(function bench$graph$summary_sync(env,input){
bench.clock.sleep_ms.call(null,bench.graph.join_ms);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","summary","user/summary",367680507),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","profile","user/profile",-543273885).cljs$core$IFn$_invoke$arity$1(input)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","orders","user/orders",-1038452021).cljs$core$IFn$_invoke$arity$1(input))].join('')], null);
}));
bench.graph.price_batch_sync = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","price-batch-sync","bench.graph/price-batch-sync",671263105,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","id","item/id",-1385287903)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","price","item/price",23278889)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317),true], null),(function bench$graph$price_batch_sync(env,inputs){
bench.clock.sleep_ms.call(null,bench.graph.batch_ms);

return cljs.core.mapv.call(null,(function (item){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","price","item/price",23278889),((10) * new cljs.core.Keyword("item","id","item/id",-1385287903).cljs$core$IFn$_invoke$arity$1(item))], null);
}),inputs);
}));
bench.graph.price_one_sync = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","price-one-sync","bench.graph/price-one-sync",-977020403,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","id","item/id",-1385287903)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","slow-price","item/slow-price",-2072017622)], null)], null),(function bench$graph$price_one_sync(env,input){
bench.clock.sleep_ms.call(null,bench.graph.item_ms);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","slow-price","item/slow-price",-2072017622),((10) * new cljs.core.Keyword("item","id","item/id",-1385287903).cljs$core$IFn$_invoke$arity$1(input))], null);
}));
bench.graph.profile_async = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","profile-async","bench.graph/profile-async",461790242,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","profile","user/profile",-543273885)], null)], null),(function bench$graph$profile_async(env,input){
return promesa.core.delay.call(null,bench.graph.slow_ms,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","profile","user/profile",-543273885),["profile-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(input))].join('')], null));
}));
bench.graph.orders_async = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","orders-async","bench.graph/orders-async",-182369272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","orders","user/orders",-1038452021)], null)], null),(function bench$graph$orders_async(env,input){
return promesa.core.delay.call(null,bench.graph.slow_ms,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","orders","user/orders",-1038452021),((3) * new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(input))], null));
}));
bench.graph.summary_async = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","summary-async","bench.graph/summary-async",-1468701804,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","profile","user/profile",-543273885),new cljs.core.Keyword("user","orders","user/orders",-1038452021)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","summary","user/summary",367680507)], null)], null),(function bench$graph$summary_async(env,input){
return promesa.core.delay.call(null,bench.graph.join_ms,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","summary","user/summary",367680507),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","profile","user/profile",-543273885).cljs$core$IFn$_invoke$arity$1(input)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","orders","user/orders",-1038452021).cljs$core$IFn$_invoke$arity$1(input))].join('')], null));
}));
bench.graph.price_batch_async = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","price-batch-async","bench.graph/price-batch-async",-1775886624,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","id","item/id",-1385287903)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","price","item/price",23278889)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","batch?","com.wsscode.pathom3.connect.operation/batch?",1500979317),true], null),(function bench$graph$price_batch_async(env,inputs){
return promesa.core.delay.call(null,bench.graph.batch_ms,cljs.core.mapv.call(null,(function (item){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","price","item/price",23278889),((10) * new cljs.core.Keyword("item","id","item/id",-1385287903).cljs$core$IFn$_invoke$arity$1(item))], null);
}),inputs));
}));
bench.graph.price_one_async = com.wsscode.pathom3.connect.operation.resolver.call(null,new cljs.core.Symbol("bench.graph","price-one-async","bench.graph/price-one-async",784390289,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","input","com.wsscode.pathom3.connect.operation/input",-1553849497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","id","item/id",-1385287903)], null),new cljs.core.Keyword("com.wsscode.pathom3.connect.operation","output","com.wsscode.pathom3.connect.operation/output",801488703),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","slow-price","item/slow-price",-2072017622)], null)], null),(function bench$graph$price_one_async(env,input){
return promesa.core.delay.call(null,bench.graph.item_ms,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","slow-price","item/slow-price",-2072017622),((10) * new cljs.core.Keyword("item","id","item/id",-1385287903).cljs$core$IFn$_invoke$arity$1(input))], null));
}));
bench.graph.sync_env = com.wsscode.pathom3.connect.indexes.register.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bench.graph.profile_sync,bench.graph.orders_sync,bench.graph.summary_sync,bench.graph.price_batch_sync,bench.graph.price_one_sync], null));
bench.graph.async_env = com.wsscode.pathom3.connect.indexes.register.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bench.graph.profile_async,bench.graph.orders_async,bench.graph.summary_async,bench.graph.price_batch_async,bench.graph.price_one_async], null));
bench.graph.parallel_env = cljs.core.assoc.call(null,bench.graph.async_env,new cljs.core.Keyword("com.wsscode.pathom3.interface.async.eql","parallel?","com.wsscode.pathom3.interface.async.eql/parallel?",-1509873192),true);
bench.graph.batch_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","price","item/price",23278889)], null)], null)], null);
bench.graph.one_by_one_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","slow-price","item/slow-price",-2072017622)], null)], null)], null);
bench.graph.items_entity = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),bench.graph.items], null);
/**
 * Independent user queries, one after another. Blocking, so the cost is the sum.
 */
bench.graph.sync_throughput = (function bench$graph$sync_throughput(ids){
var start = bench.clock.now_ms.call(null);
var answer = cljs.core.mapv.call(null,(function (id){
return new cljs.core.Keyword("user","summary","user/summary",367680507).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.interface$.eql.process.call(null,bench.graph.sync_env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","summary","user/summary",367680507)], null)));
}),ids);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(bench.clock.now_ms.call(null) - start),new cljs.core.Keyword(null,"answer","answer",-742633163),answer], null);
});
/**
 * One query whose two expensive resolvers are independent. Sync pays for both.
 */
bench.graph.sync_single_query = (function bench$graph$sync_single_query(){
var start = bench.clock.now_ms.call(null);
var answer = new cljs.core.Keyword("user","summary","user/summary",367680507).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.interface$.eql.process.call(null,bench.graph.sync_env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","summary","user/summary",367680507)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(bench.clock.now_ms.call(null) - start),new cljs.core.Keyword(null,"answer","answer",-742633163),answer], null);
});
bench.graph.sync_batched = (function bench$graph$sync_batched(entity){
var start = bench.clock.now_ms.call(null);
var answer = cljs.core.mapv.call(null,new cljs.core.Keyword("item","price","item/price",23278889),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.interface$.eql.process.call(null,bench.graph.sync_env,entity,bench.graph.batch_query)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(bench.clock.now_ms.call(null) - start),new cljs.core.Keyword(null,"answer","answer",-742633163),answer], null);
});
bench.graph.sync_one_by_one = (function bench$graph$sync_one_by_one(entity){
var start = bench.clock.now_ms.call(null);
var answer = cljs.core.mapv.call(null,new cljs.core.Keyword("item","slow-price","item/slow-price",-2072017622),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom3.interface$.eql.process.call(null,bench.graph.sync_env,entity,bench.graph.one_by_one_query)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(bench.clock.now_ms.call(null) - start),new cljs.core.Keyword(null,"answer","answer",-742633163),answer], null);
});
/**
 * The same queries, all started before any of them finishes.
 */
bench.graph.async_throughput = (function bench$graph$async_throughput(env,ids){
var start = bench.clock.now_ms.call(null);
return promesa.core.then.call(null,promesa.core.all.call(null,cljs.core.mapv.call(null,(function (id){
return com.wsscode.pathom3.interface$.async.eql.process.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","summary","user/summary",367680507)], null));
}),ids)),(function (results){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(bench.clock.now_ms.call(null) - start),new cljs.core.Keyword(null,"answer","answer",-742633163),cljs.core.mapv.call(null,new cljs.core.Keyword("user","summary","user/summary",367680507),results)], null);
}));
});
bench.graph.async_single_query = (function bench$graph$async_single_query(env){
var start = bench.clock.now_ms.call(null);
return promesa.core.then.call(null,com.wsscode.pathom3.interface$.async.eql.process.call(null,env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","summary","user/summary",367680507)], null)),(function (result){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(bench.clock.now_ms.call(null) - start),new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword("user","summary","user/summary",367680507).cljs$core$IFn$_invoke$arity$1(result)], null);
}));
});
bench.graph.async_batched = (function bench$graph$async_batched(env,entity){
var start = bench.clock.now_ms.call(null);
return promesa.core.then.call(null,com.wsscode.pathom3.interface$.async.eql.process.call(null,env,entity,bench.graph.batch_query),(function (result){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(bench.clock.now_ms.call(null) - start),new cljs.core.Keyword(null,"answer","answer",-742633163),cljs.core.mapv.call(null,new cljs.core.Keyword("item","price","item/price",23278889),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(result))], null);
}));
});
bench.graph.async_one_by_one = (function bench$graph$async_one_by_one(env,entity){
var start = bench.clock.now_ms.call(null);
return promesa.core.then.call(null,com.wsscode.pathom3.interface$.async.eql.process.call(null,env,entity,bench.graph.one_by_one_query),(function (result){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(bench.clock.now_ms.call(null) - start),new cljs.core.Keyword(null,"answer","answer",-742633163),cljs.core.mapv.call(null,new cljs.core.Keyword("item","slow-price","item/slow-price",-2072017622),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(result))], null);
}));
});
/**
 * How many timed passes each benchmark gets. A warm-up pass runs first and is discarded:
 * jank compiles a function on its first call and the JVM's JIT warms up, so the first
 * pass of anything is not a measurement.
 */
bench.graph.iterations = (3);
bench.graph.one_user = cljs.core.vec.call(null,cljs.core.take.call(null,(1),bench.graph.user_ids));
bench.graph.one_item = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.vec.call(null,cljs.core.take.call(null,(1),bench.graph.items))], null);
bench.graph.median = (function bench$graph$median(xs){
var sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,xs));
return cljs.core.nth.call(null,sorted,cljs.core.quot.call(null,cljs.core.count.call(null,sorted),(2)));
});
bench.graph.summarise = (function bench$graph$summarise(label,runs){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bench","bench",1414206922),label,new cljs.core.Keyword(null,"ms","ms",-1152709733),bench.graph.median.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733),runs)),new cljs.core.Keyword(null,"all-ms","all-ms",-1154075036),cljs.core.mapv.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733),runs),new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,runs))], null);
});
/**
 * Runs f n times in sequence, one promise chained onto the last, and collects the
 * results. Sequential on purpose: overlapping the repetitions would measure the pool,
 * not the query.
 */
bench.graph.repeat_async = (function bench$graph$repeat_async(n,f){
return cljs.core.reduce.call(null,(function (acc,_){
return promesa.core.then.call(null,acc,(function (runs){
return promesa.core.then.call(null,f.call(null),(function (run){
return cljs.core.conj.call(null,runs,run);
}));
}));
}),promesa.core.resolved.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.range.call(null,n));
});
bench.graph.sync_benches = (function bench$graph$sync_benches(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("sync","throughput","sync/throughput",-1464396252),new cljs.core.Keyword(null,"warm","warm",608437969),(function (){
return bench.graph.sync_throughput.call(null,bench.graph.one_user);
}),new cljs.core.Keyword(null,"run","run",-1821166653),(function (){
return bench.graph.sync_throughput.call(null,bench.graph.user_ids);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("sync","single-query","sync/single-query",703721696),new cljs.core.Keyword(null,"warm","warm",608437969),bench.graph.sync_single_query,new cljs.core.Keyword(null,"run","run",-1821166653),bench.graph.sync_single_query], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("sync","batched","sync/batched",876671673),new cljs.core.Keyword(null,"warm","warm",608437969),(function (){
return bench.graph.sync_batched.call(null,bench.graph.one_item);
}),new cljs.core.Keyword(null,"run","run",-1821166653),(function (){
return bench.graph.sync_batched.call(null,bench.graph.items_entity);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("sync","one-by-one","sync/one-by-one",-1115723160),new cljs.core.Keyword(null,"warm","warm",608437969),(function (){
return bench.graph.sync_one_by_one.call(null,bench.graph.one_item);
}),new cljs.core.Keyword(null,"run","run",-1821166653),(function (){
return bench.graph.sync_one_by_one.call(null,bench.graph.items_entity);
})], null)], null);
});
bench.graph.async_benches = (function bench$graph$async_benches(prefix){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keyword.call(null,prefix,"single-query"),new cljs.core.Keyword(null,"warm","warm",608437969),(function (env){
return bench.graph.async_single_query.call(null,env);
}),new cljs.core.Keyword(null,"run","run",-1821166653),(function (env){
return bench.graph.async_single_query.call(null,env);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keyword.call(null,prefix,"throughput"),new cljs.core.Keyword(null,"warm","warm",608437969),(function (env){
return bench.graph.async_throughput.call(null,env,bench.graph.one_user);
}),new cljs.core.Keyword(null,"run","run",-1821166653),(function (env){
return bench.graph.async_throughput.call(null,env,bench.graph.user_ids);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keyword.call(null,prefix,"batched"),new cljs.core.Keyword(null,"warm","warm",608437969),(function (env){
return bench.graph.async_batched.call(null,env,bench.graph.one_item);
}),new cljs.core.Keyword(null,"run","run",-1821166653),(function (env){
return bench.graph.async_batched.call(null,env,bench.graph.items_entity);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keyword.call(null,prefix,"one-by-one"),new cljs.core.Keyword(null,"warm","warm",608437969),(function (env){
return bench.graph.async_one_by_one.call(null,env,bench.graph.one_item);
}),new cljs.core.Keyword(null,"run","run",-1821166653),(function (env){
return bench.graph.async_one_by_one.call(null,env,bench.graph.items_entity);
})], null)], null);
});
bench.graph.suites = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async",bench.graph.async_env], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parallel",bench.graph.parallel_env], null)], null);
/**
 * The blocking benchmarks. Not callable on ClojureScript, which has no way to block.
 */
bench.graph.run_sync = (function bench$graph$run_sync(){
return cljs.core.mapv.call(null,(function (p__23454){
var map__23455 = p__23454;
var map__23455__$1 = cljs.core.__destructure_map.call(null,map__23455);
var label = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var warm = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"warm","warm",608437969));
var run = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"run","run",-1821166653));
warm.call(null);

return bench.graph.summarise.call(null,label,cljs.core.mapv.call(null,(function (_){
return run.call(null);
}),cljs.core.range.call(null,bench.graph.iterations)));
}),bench.graph.sync_benches.call(null));
});
/**
 * The non-blocking benchmarks, driven one at a time from the calling thread.
 * 
 * This is the shape jank and Clojure use. On jank it is not merely tidier: chaining the
 * whole suite into one promise means the harness's own closures first-compile on pool
 * workers, alongside the query continuations, and jank's compiler does not survive two
 * threads entering it at once.
 */
bench.graph.run_async_blocking = (function bench$graph$run_async_blocking(){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p__23456){
var vec__23457 = p__23456;
var prefix = cljs.core.nth.call(null,vec__23457,(0),null);
var env = cljs.core.nth.call(null,vec__23457,(1),null);
return cljs.core.mapv.call(null,(function (p__23460){
var map__23461 = p__23460;
var map__23461__$1 = cljs.core.__destructure_map.call(null,map__23461);
var label = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var warm = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"warm","warm",608437969));
var run = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"run","run",-1821166653));
bench.clock.await_BANG_.call(null,warm.call(null,env));

return bench.graph.summarise.call(null,label,cljs.core.mapv.call(null,(function (_){
return bench.clock.await_BANG_.call(null,run.call(null,env));
}),cljs.core.range.call(null,bench.graph.iterations)));
}),bench.graph.async_benches.call(null,prefix));
}),bench.graph.suites));
});
bench.graph.run_async_suite = (function bench$graph$run_async_suite(prefix,env){
return cljs.core.reduce.call(null,(function (acc,p__23462){
var map__23463 = p__23462;
var map__23463__$1 = cljs.core.__destructure_map.call(null,map__23463);
var label = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var warm = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"warm","warm",608437969));
var run = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"run","run",-1821166653));
return promesa.core.then.call(null,acc,(function (results){
return promesa.core.then.call(null,warm.call(null,env),(function (_){
return promesa.core.then.call(null,bench.graph.repeat_async.call(null,bench.graph.iterations,(function (){
return run.call(null,env);
})),(function (runs){
return cljs.core.conj.call(null,results,bench.graph.summarise.call(null,label,runs));
}));
}));
}));
}),promesa.core.resolved.call(null,cljs.core.PersistentVector.EMPTY),bench.graph.async_benches.call(null,prefix));
});
/**
 * The same benchmarks as run-async-blocking, chained into one promise. This is the shape
 * ClojureScript needs, since it cannot block on anything.
 */
bench.graph.run_async = (function bench$graph$run_async(){
return cljs.core.reduce.call(null,(function (acc,p__23464){
var vec__23465 = p__23464;
var prefix = cljs.core.nth.call(null,vec__23465,(0),null);
var env = cljs.core.nth.call(null,vec__23465,(1),null);
return promesa.core.then.call(null,acc,(function (results){
return promesa.core.then.call(null,bench.graph.run_async_suite.call(null,prefix,env),(function (suite){
return cljs.core.into.call(null,results,suite);
}));
}));
}),promesa.core.resolved.call(null,cljs.core.PersistentVector.EMPTY),bench.graph.suites);
});
/**
 * Prints one EDN map per line: the format examples/run reads.
 */
bench.graph.report_BANG_ = (function bench$graph$report_BANG_(results){
var seq__23468 = cljs.core.seq.call(null,results);
var chunk__23469 = null;
var count__23470 = (0);
var i__23471 = (0);
while(true){
if((i__23471 < count__23470)){
var r = cljs.core._nth.call(null,chunk__23469,i__23471);
cljs.core.prn.call(null,cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"runtime","runtime",-1331573996),bench.clock.runtime_name.call(null)));


var G__23472 = seq__23468;
var G__23473 = chunk__23469;
var G__23474 = count__23470;
var G__23475 = (i__23471 + (1));
seq__23468 = G__23472;
chunk__23469 = G__23473;
count__23470 = G__23474;
i__23471 = G__23475;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__23468);
if(temp__5823__auto__){
var seq__23468__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23468__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23468__$1);
var G__23476 = cljs.core.chunk_rest.call(null,seq__23468__$1);
var G__23477 = c__5525__auto__;
var G__23478 = cljs.core.count.call(null,c__5525__auto__);
var G__23479 = (0);
seq__23468 = G__23476;
chunk__23469 = G__23477;
count__23470 = G__23478;
i__23471 = G__23479;
continue;
} else {
var r = cljs.core.first.call(null,seq__23468__$1);
cljs.core.prn.call(null,cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"runtime","runtime",-1331573996),bench.clock.runtime_name.call(null)));


var G__23480 = cljs.core.next.call(null,seq__23468__$1);
var G__23481 = null;
var G__23482 = (0);
var G__23483 = (0);
seq__23468 = G__23480;
chunk__23469 = G__23481;
count__23470 = G__23482;
i__23471 = G__23483;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=graph.js.map
