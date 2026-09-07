// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('com.wsscode.pathom3.connect.operation.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
com.wsscode.pathom3.connect.operation.protocols.IOperation = function(){};

var com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_config$dyn_19259 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.pathom3.connect.operation.protocols._operation_config[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (com.wsscode.pathom3.connect.operation.protocols._operation_config["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOperation.-operation-config",this$);
}
}
});
com.wsscode.pathom3.connect.operation.protocols._operation_config = (function com$wsscode$pathom3$connect$operation$protocols$_operation_config(this$){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_config$arity$1 == null)))))){
return this$.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_config$arity$1(this$);
} else {
return com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_config$dyn_19259.call(null,this$);
}
});

var com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_type$dyn_19260 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.pathom3.connect.operation.protocols._operation_type[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (com.wsscode.pathom3.connect.operation.protocols._operation_type["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOperation.-operation-type",this$);
}
}
});
com.wsscode.pathom3.connect.operation.protocols._operation_type = (function com$wsscode$pathom3$connect$operation$protocols$_operation_type(this$){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_type$arity$1 == null)))))){
return this$.com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_type$arity$1(this$);
} else {
return com$wsscode$pathom3$connect$operation$protocols$IOperation$_operation_type$dyn_19260.call(null,this$);
}
});


/**
 * @interface
 */
com.wsscode.pathom3.connect.operation.protocols.IResolver = function(){};

var com$wsscode$pathom3$connect$operation$protocols$IResolver$_resolve$dyn_19261 = (function (this$,env,input){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.pathom3.connect.operation.protocols._resolve[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,env,input);
} else {
var m__5349__auto__ = (com.wsscode.pathom3.connect.operation.protocols._resolve["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,env,input);
} else {
throw cljs.core.missing_protocol.call(null,"IResolver.-resolve",this$);
}
}
});
com.wsscode.pathom3.connect.operation.protocols._resolve = (function com$wsscode$pathom3$connect$operation$protocols$_resolve(this$,env,input){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$pathom3$connect$operation$protocols$IResolver$_resolve$arity$3 == null)))))){
return this$.com$wsscode$pathom3$connect$operation$protocols$IResolver$_resolve$arity$3(this$,env,input);
} else {
return com$wsscode$pathom3$connect$operation$protocols$IResolver$_resolve$dyn_19261.call(null,this$,env,input);
}
});


/**
 * @interface
 */
com.wsscode.pathom3.connect.operation.protocols.IMutation = function(){};

var com$wsscode$pathom3$connect$operation$protocols$IMutation$_mutate$dyn_19262 = (function (this$,env,params){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (com.wsscode.pathom3.connect.operation.protocols._mutate[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,env,params);
} else {
var m__5349__auto__ = (com.wsscode.pathom3.connect.operation.protocols._mutate["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,env,params);
} else {
throw cljs.core.missing_protocol.call(null,"IMutation.-mutate",this$);
}
}
});
com.wsscode.pathom3.connect.operation.protocols._mutate = (function com$wsscode$pathom3$connect$operation$protocols$_mutate(this$,env,params){
if((((!((this$ == null)))) && ((!((this$.com$wsscode$pathom3$connect$operation$protocols$IMutation$_mutate$arity$3 == null)))))){
return this$.com$wsscode$pathom3$connect$operation$protocols$IMutation$_mutate$arity$3(this$,env,params);
} else {
return com$wsscode$pathom3$connect$operation$protocols$IMutation$_mutate$dyn_19262.call(null,this$,env,params);
}
});


//# sourceMappingURL=protocols.js.map
