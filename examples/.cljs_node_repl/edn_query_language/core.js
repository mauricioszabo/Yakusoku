// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('edn_query_language.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
/**
 * Dynamic var.  When bound to true in the current thread calls to query->ast will no go past the
 *   first level of children.  This is useful when you just want the AST for one layer of a query.
 */
edn_query_language.core._STAR_shallow_conversion_STAR_ = false;

/**
 * @define {boolean}
 */
edn_query_language.core.INCLUDE_SPECS = goog.define("edn_query_language.core.INCLUDE_SPECS",true);
if(cljs.core.truth_(edn_query_language.core.INCLUDE_SPECS)){
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","special-property","edn-query-language.core/special-property",-1016508506),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"*","*",345799209,null)),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","ident-value","edn-query-language.core/ident-value",-715964249),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident-value","edn-query-language.core/ident-value",-715964249)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident-value","edn-query-language.core/ident-value",-715964249)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident-value","edn-query-language.core/ident-value",-715964249)], null)));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"param-exp","param-exp",-594699720),new cljs.core.Keyword("edn-query-language.core","join-key-param-expr","edn-query-language.core/join-key-param-expr",496601666)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"param-exp","param-exp",-594699720)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","join-key-param-expr","edn-query-language.core/join-key-param-expr",496601666)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","join-key-param-expr","edn-query-language.core/join-key-param-expr",496601666)], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761)], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"into","into",-150836029),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),true,(function (G__1458){
return ((cljs.core.map_QMARK_.call(null,G__1458)) && (cljs.core._EQ_.call(null,(1),cljs.core.bounded_count.call(null,(1),G__1458))));
}),cljs.core.map_QMARK_,(1),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),true,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true)]),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","union","edn-query-language.core/union",-1766530903),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"into","into",-150836029),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),new cljs.core.Keyword(null,"min-count","min-count",1594709013),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),true,(function (G__1459){
return ((cljs.core.map_QMARK_.call(null,G__1459)) && (((((function (){var or__5002__auto__ = (1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(1)
,G__1459))) && ((cljs.core.bounded_count.call(null,(1)
,G__1459) <= (function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (9007199254740991);
}
})())))));
}),(1),cljs.core.map_QMARK_,(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),true,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true)]),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","recursion-depth","edn-query-language.core/recursion-depth",-1726216891),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","recursion","edn-query-language.core/recursion",2090214849),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword("edn-query-language.core","recursion-depth","edn-query-language.core/recursion-depth",-1726216891),new cljs.core.Keyword(null,"unbounded","unbounded",-2054589494),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),"null"], null), null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"unbounded","unbounded",-2054589494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","recursion-depth","edn-query-language.core/recursion-depth",-1726216891),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","recursion-depth","edn-query-language.core/recursion-depth",-1726216891),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"...","...",-1926939749,null),null], null), null)], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword("edn-query-language.core","union","edn-query-language.core/union",-1766530903),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword("edn-query-language.core","recursion","edn-query-language.core/recursion",2090214849)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"recursion","recursion",-749738765)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","union","edn-query-language.core/union",-1766530903),new cljs.core.Keyword("edn-query-language.core","recursion","edn-query-language.core/recursion",2090214849)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","union","edn-query-language.core/union",-1766530903),new cljs.core.Keyword("edn-query-language.core","recursion","edn-query-language.core/recursion",2090214849)], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq_QMARK_,cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null))], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","join-key-param-expr","edn-query-language.core/join-key-param-expr",496601666),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq_QMARK_,cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null))], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"mutate-key","mutate-key",-468386111),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"mutate-key","mutate-key",-468386111),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq_QMARK_,cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutate-key","mutate-key",-468386111),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null))], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","mutation-join","edn-query-language.core/mutation-join",2054928671),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"into","into",-150836029),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),true,(function (G__1460){
return ((cljs.core.map_QMARK_.call(null,G__1460)) && (cljs.core._EQ_.call(null,(1),cljs.core.bounded_count.call(null,(1),G__1460))));
}),cljs.core.map_QMARK_,(1),(function (i__388__auto__,v__389__auto__){
return cljs.core.nth.call(null,v__389__auto__,(0));
}),true,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true)]),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","mutation","edn-query-language.core/mutation",137261372),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword(null,"mutation-join","mutation-join",1363539465),new cljs.core.Keyword("edn-query-language.core","mutation-join","edn-query-language.core/mutation-join",2054928671)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword(null,"mutation-join","mutation-join",1363539465)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","mutation-join","edn-query-language.core/mutation-join",2054928671)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","mutation-join","edn-query-language.core/mutation-join",2054928671)], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("edn-query-language.core","mutation","edn-query-language.core/mutation",137261372),new cljs.core.Keyword(null,"param-exp","param-exp",-594699720),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),new cljs.core.Keyword(null,"special","special",-1125941630),new cljs.core.Keyword("edn-query-language.core","special-property","edn-query-language.core/special-property",-1016508506)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword(null,"param-exp","param-exp",-594699720),new cljs.core.Keyword(null,"special","special",-1125941630)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation","edn-query-language.core/mutation",137261372),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),new cljs.core.Keyword("edn-query-language.core","special-property","edn-query-language.core/special-property",-1016508506)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation","edn-query-language.core/mutation",137261372),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),new cljs.core.Keyword("edn-query-language.core","special-property","edn-query-language.core/special-property",-1016508506)], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__1461){
return cljs.core.vector_QMARK_.call(null,G__1461);
})], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.symbol_QMARK_], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),cljs.core.symbol_QMARK_], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","union-key","edn-query-language.ast/union-key",-682972655),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__1462){
return cljs.core.coll_QMARK_.call(null,G__1462);
})], null),null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1451#","p1__1451#",1931621862,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__1451#","p1__1451#",1931621862,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1452#","p1__1452#",842439847,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__1452#","p1__1452#",842439847,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1452#","p1__1452#",842439847,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__1452#","p1__1452#",842439847,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1463){
return cljs.core.map_QMARK_.call(null,G__1463);
}),(function (G__1463){
return cljs.core.contains_QMARK_.call(null,G__1463,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__1463){
return cljs.core.contains_QMARK_.call(null,G__1463,new cljs.core.Keyword(null,"children","children",-940561982));
})], null),(function (G__1463){
return ((cljs.core.map_QMARK_.call(null,G__1463)) && (((cljs.core.contains_QMARK_.call(null,G__1463,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_.call(null,G__1463,new cljs.core.Keyword(null,"children","children",-940561982))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)))], null),null])),(function (p1__1451_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__1451_SHARP_));
}),(function (x){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,(function (p1__1452_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),p1__1452_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x));
})], null),null));

if((typeof edn_query_language !== 'undefined') && (typeof edn_query_language.core !== 'undefined') && (typeof edn_query_language.core.node_type !== 'undefined')){
} else {
edn_query_language.core.node_type = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"edn-query-language.core","node-type"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}

cljs.core._add_method.call(null,edn_query_language.core.node_type,null,(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1464){
return cljs.core.map_QMARK_.call(null,G__1464);
}),(function (G__1464){
return cljs.core.contains_QMARK_.call(null,G__1464,new cljs.core.Keyword(null,"key","key",-1516042587));
}),(function (G__1464){
return cljs.core.contains_QMARK_.call(null,G__1464,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
})], null),(function (G__1464){
return ((cljs.core.map_QMARK_.call(null,G__1464)) && (((cljs.core.contains_QMARK_.call(null,G__1464,new cljs.core.Keyword(null,"key","key",-1516042587))) && (cljs.core.contains_QMARK_.call(null,G__1464,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)))], null),null]));
}));

cljs.core._add_method.call(null,edn_query_language.core.node_type,new cljs.core.Keyword(null,"prop","prop",-515168332),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1465){
return cljs.core.map_QMARK_.call(null,G__1465);
}),(function (G__1465){
return cljs.core.contains_QMARK_.call(null,G__1465,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__1465){
return cljs.core.contains_QMARK_.call(null,G__1465,new cljs.core.Keyword(null,"key","key",-1516042587));
}),(function (G__1465){
return cljs.core.contains_QMARK_.call(null,G__1465,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
})], null),(function (G__1465){
return ((cljs.core.map_QMARK_.call(null,G__1465)) && (((cljs.core.contains_QMARK_.call(null,G__1465,new cljs.core.Keyword(null,"type","type",1174270348))) && (((cljs.core.contains_QMARK_.call(null,G__1465,new cljs.core.Keyword(null,"key","key",-1516042587))) && (cljs.core.contains_QMARK_.call(null,G__1465,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)))], null),null]));
}));

cljs.core._add_method.call(null,edn_query_language.core.node_type,new cljs.core.Keyword(null,"join","join",-758861890),(function (_){
return cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Keyword(null,"recursion","recursion",-749738765))),new cljs.core.Symbol(null,"%","%",-950237169,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1454#","p1__1454#",-1294627075,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"union","union",2142937499),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__1454#","p1__1454#",-1294627075,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1466){
return cljs.core.map_QMARK_.call(null,G__1466);
}),(function (G__1466){
return cljs.core.contains_QMARK_.call(null,G__1466,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__1466){
return cljs.core.contains_QMARK_.call(null,G__1466,new cljs.core.Keyword(null,"key","key",-1516042587));
}),(function (G__1466){
return cljs.core.contains_QMARK_.call(null,G__1466,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
})], null),(function (G__1466){
return ((cljs.core.map_QMARK_.call(null,G__1466)) && (((cljs.core.contains_QMARK_.call(null,G__1466,new cljs.core.Keyword(null,"type","type",1174270348))) && (((cljs.core.contains_QMARK_.call(null,G__1466,new cljs.core.Keyword(null,"key","key",-1516042587))) && (cljs.core.contains_QMARK_.call(null,G__1466,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))))))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)))], null),null])),(function (p1__1453_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__1453_SHARP_)),new cljs.core.Keyword(null,"recursion","recursion",-749738765))){
return p1__1453_SHARP_;
} else {
if(cljs.core.contains_QMARK_.call(null,p1__1453_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982))){
return p1__1453_SHARP_;
} else {
return false;
}
}
}),(function (x){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,(function (p1__1454_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"union","union",2142937499),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),p1__1454_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x));
})], null),null);
}));

cljs.core._add_method.call(null,edn_query_language.core.node_type,new cljs.core.Keyword(null,"union","union",2142937499),(function (_){
return cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"union-entry","union-entry",223335750),"null"], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1467){
return cljs.core.map_QMARK_.call(null,G__1467);
}),(function (G__1467){
return cljs.core.contains_QMARK_.call(null,G__1467,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__1467){
return cljs.core.contains_QMARK_.call(null,G__1467,new cljs.core.Keyword(null,"children","children",-940561982));
})], null),(function (G__1467){
return ((cljs.core.map_QMARK_.call(null,G__1467)) && (((cljs.core.contains_QMARK_.call(null,G__1467,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_.call(null,G__1467,new cljs.core.Keyword(null,"children","children",-940561982))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)))], null),null])),(function (p1__1455_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"union-entry","union-entry",223335750),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__1455_SHARP_));
})], null),null);
}));

cljs.core._add_method.call(null,edn_query_language.core.node_type,new cljs.core.Keyword(null,"union-entry","union-entry",223335750),(function (_){
return cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","union-key","edn-query-language.ast/union-key",-682972655),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1456#","p1__1456#",619011450,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__1456#","p1__1456#",619011450,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","union-key","edn-query-language.ast/union-key",-682972655),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1468){
return cljs.core.map_QMARK_.call(null,G__1468);
}),(function (G__1468){
return cljs.core.contains_QMARK_.call(null,G__1468,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__1468){
return cljs.core.contains_QMARK_.call(null,G__1468,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
}),(function (G__1468){
return cljs.core.contains_QMARK_.call(null,G__1468,new cljs.core.Keyword(null,"children","children",-940561982));
})], null),(function (G__1468){
return ((cljs.core.map_QMARK_.call(null,G__1468)) && (((cljs.core.contains_QMARK_.call(null,G__1468,new cljs.core.Keyword(null,"type","type",1174270348))) && (((cljs.core.contains_QMARK_.call(null,G__1468,new cljs.core.Keyword(null,"union-key","union-key",1529707234))) && (cljs.core.contains_QMARK_.call(null,G__1468,new cljs.core.Keyword(null,"children","children",-940561982))))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","union-key","edn-query-language.ast/union-key",-682972655),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-key","union-key",1529707234),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"union-key","union-key",1529707234))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)))], null),null])),(function (x){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,(function (p1__1456_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),p1__1456_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x));
})], null),null);
}));

cljs.core._add_method.call(null,edn_query_language.core.node_type,new cljs.core.Keyword(null,"call","call",-519999866),(function (_){
return cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1457#","p1__1457#",-1763614584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__1457#","p1__1457#",-1763614584,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1469){
return cljs.core.map_QMARK_.call(null,G__1469);
}),(function (G__1469){
return cljs.core.contains_QMARK_.call(null,G__1469,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__1469){
return cljs.core.contains_QMARK_.call(null,G__1469,new cljs.core.Keyword(null,"key","key",-1516042587));
}),(function (G__1469){
return cljs.core.contains_QMARK_.call(null,G__1469,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
}),(function (G__1469){
return cljs.core.contains_QMARK_.call(null,G__1469,new cljs.core.Keyword(null,"params","params",710516235));
})], null),(function (G__1469){
return ((cljs.core.map_QMARK_.call(null,G__1469)) && (((cljs.core.contains_QMARK_.call(null,G__1469,new cljs.core.Keyword(null,"type","type",1174270348))) && (((cljs.core.contains_QMARK_.call(null,G__1469,new cljs.core.Keyword(null,"key","key",-1516042587))) && (((cljs.core.contains_QMARK_.call(null,G__1469,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))) && (cljs.core.contains_QMARK_.call(null,G__1469,new cljs.core.Keyword(null,"params","params",710516235))))))))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"params","params",710516235)))], null),null])),(function (x){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,(function (p1__1457_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),p1__1457_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x));
})], null),null);
}));

cljs.core._add_method.call(null,edn_query_language.core.node_type,new cljs.core.Keyword(null,"root","root",-448657453),(function (_){
return cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null);
}));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),cljs.core.list(new cljs.core.Symbol("cljs.core","methods","cljs.core/methods",-1793562622,null),new cljs.core.Symbol("edn-query-language.core","node-type","edn-query-language.core/node-type",1078374183,null)))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,edn_query_language.core.node_type))));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("edn-query-language.core","node-type","edn-query-language.core/node-type",1078374183,null),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("edn-query-language.core","node-type","edn-query-language.core/node-type",1078374183,null),new cljs.core.Var(function(){return edn_query_language.core.node_type;},new cljs.core.Symbol("edn-query-language.core","node-type","edn-query-language.core/node-type",1078374183,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"edn-query-language.core","edn-query-language.core",1253777601,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),"/root/.cljs/.aot_cache/1.11.132/87A86E2/edn_query_language/core.cljc",22,3,85,85,cljs.core.List.EMPTY,null,(cljs.core.truth_(edn_query_language.core.node_type)?edn_query_language.core.node_type.cljs$lang$test:null)])),new cljs.core.Keyword(null,"type","type",1174270348)));
} else {
}
edn_query_language.core.mark_meta = (function edn_query_language$core$mark_meta(source,target){
var G__1470 = target;
if(cljs.core.truth_(cljs.core.meta.call(null,source))){
return cljs.core.assoc.call(null,G__1470,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta.call(null,source));
} else {
return G__1470;
}
});
edn_query_language.core.symbol__GT_ast = (function edn_query_language$core$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
edn_query_language.core.keyword__GT_ast = (function edn_query_language$core$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
edn_query_language.core.union_entry__GT_ast = (function edn_query_language$core$union_entry__GT_ast(p__1471){
var vec__1472 = p__1471;
var k = cljs.core.nth.call(null,vec__1472,(0),null);
var v = cljs.core.nth.call(null,vec__1472,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,edn_query_language.core.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
edn_query_language.core.union__GT_ast = (function edn_query_language$core$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,edn_query_language.core.union_entry__GT_ast),m)], null);
});
edn_query_language.core.call__GT_ast = (function edn_query_language$core$call__GT_ast(p__1475){
var vec__1476 = p__1475;
var f = cljs.core.nth.call(null,vec__1476,(0),null);
var args = cljs.core.nth.call(null,vec__1476,(1),null);
var call = vec__1476;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.call(null,edn_query_language.core.expr__GT_ast.call(null,args),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,call));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.call(null,edn_query_language.core.expr__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__5002__auto__ = args;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__1479 = edn_query_language.core.mark_meta.call(null,call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.call(null,G__1479,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__1479;
}
}
});
/**
 * Convert a query to its AST representation.
 */
edn_query_language.core.query__GT_ast = (function edn_query_language$core$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
return cljs.core.merge.call(null,edn_query_language.core.mark_meta.call(null,query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,edn_query_language.core.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
/**
 * Call query->ast and return the first children.
 */
edn_query_language.core.query__GT_ast1 = (function edn_query_language$core$query__GT_ast1(query_expr){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast.call(null,query_expr)));
});
edn_query_language.core.join__GT_ast = (function edn_query_language$core$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join));
var vec__1480 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__1480,(0),null);
var v = cljs.core.nth.call(null,vec__1480,(1),null);
var ast = edn_query_language.core.expr__GT_ast.call(null,k);
var type = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,ast,edn_query_language.core.mark_meta.call(null,join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),(cljs.core.truth_((function (){var or__5002__auto__ = typeof v === 'number';
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),v);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return edn_query_language.core._STAR_shallow_conversion_STAR_;
}
}
})())?null:((cljs.core.vector_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,edn_query_language.core.expr__GT_ast),v)], null):((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.union__GT_ast.call(null,v)], null)], null):(function(){throw cljs.core.ex_info.call(null,["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
))));
});
edn_query_language.core.ident__GT_ast = (function edn_query_language$core$ident__GT_ast(p__1483){
var vec__1484 = p__1483;
var k = cljs.core.nth.call(null,vec__1484,(0),null);
var id = cljs.core.nth.call(null,vec__1484,(1),null);
var ref = vec__1484;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
edn_query_language.core.expr__GT_ast = (function edn_query_language$core$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return edn_query_language.core.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return edn_query_language.core.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return edn_query_language.core.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return edn_query_language.core.ident__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return edn_query_language.core.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
edn_query_language.core.wrap_expr = (function edn_query_language$core$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta.call(null,(function (){var G__1487 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__1487,null,(1),null));
} else {
return G__1487;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
edn_query_language.core.parameterize = (function edn_query_language$core$parameterize(expr,params){
if((!(cljs.core.empty_QMARK_.call(null,params)))){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,expr,null,(1),null));
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
edn_query_language.core.ast__GT_expr = (function edn_query_language$core$ast__GT_expr(var_args){
var G__1492 = arguments.length;
switch (G__1492) {
case 1:
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return edn_query_language.core.ast__GT_expr.call(null,ast,false);
}));

(edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__1493,unparse_QMARK_){
var map__1494 = p__1493;
var map__1494__$1 = cljs.core.__destructure_map.call(null,map__1494);
var ast = map__1494__$1;
var ast_meta = cljs.core.get.call(null,map__1494__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.call(null,map__1494__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.call(null,map__1494__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__1495 = cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.call(null,(function (p1__1488_SHARP_){
return edn_query_language.core.ast__GT_expr.call(null,p1__1488_SHARP_,unparse_QMARK_);
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.call(null,G__1495,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__1495;
}
} else {
var map__1496 = ast;
var map__1496__$1 = cljs.core.__destructure_map.call(null,map__1496);
var key = cljs.core.get.call(null,map__1496__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__1496__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.call(null,map__1496__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.call(null,map__1496__$1,new cljs.core.Keyword(null,"params","params",710516235));
return edn_query_language.core.wrap_expr.call(null,query_root,(cljs.core.truth_((function (){var and__5000__auto__ = params;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
} else {
return and__5000__auto__;
}
})())?(function (){var expr = edn_query_language.core.ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
return edn_query_language.core.parameterize.call(null,expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type))?edn_query_language.core.parameterize.call(null,key,params):key);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),type);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
if(and__5000__auto__){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return and__5000__auto__;
}
}
})())){
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && ((((!(typeof query === 'number'))) && (((unparse_QMARK_ === true) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type)))))))){
var map__1497 = ast;
var map__1497__$1 = cljs.core.__destructure_map.call(null,map__1497);
var children = cljs.core.get.call(null,map__1497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta.call(null,query);
if(((((1) === cljs.core.count.call(null,children))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children)))))){
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.call(null,(function (){var G__1498 = cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.call(null,G__1498,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__1498;
}
})(),cljs.core.map.call(null,(function (p__1499){
var map__1500 = p__1499;
var map__1500__$1 = cljs.core.__destructure_map.call(null,map__1500);
var union_key = cljs.core.get.call(null,map__1500__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.call(null,map__1500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.call(null,map__1500__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__1501 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__1489_SHARP_){
return edn_query_language.core.ast__GT_expr.call(null,p1__1489_SHARP_,unparse_QMARK_);
})),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.call(null,G__1501,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__1501;
}
})()], null);
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children)))]),ast_meta);
} else {
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__1502 = cljs.core.into.call(null,cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.call(null,(function (p1__1490_SHARP_){
return edn_query_language.core.ast__GT_expr.call(null,p1__1490_SHARP_,unparse_QMARK_);
})),children);
if((!((component == null)))){
return cljs.core.vary_meta.call(null,G__1502,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__1502;
}
})()]),ast_meta);
}
} else {
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,query]),ast_meta);
}
} else {
return key__$1;
}
})()));
}
}));

(edn_query_language.core.ast__GT_expr.cljs$lang$maxFixedArity = 2);

edn_query_language.core.ast__GT_query = (function edn_query_language$core$ast__GT_query(query_ast){

var _LT__GT_ = edn_query_language.core.ast__GT_expr.call(null,query_ast,true);
if(cljs.core.vector_QMARK_.call(null,_LT__GT_)){
return _LT__GT_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT__GT_], null);
}
});
/**
 * Check if x is a EQL ident.
 */
edn_query_language.core.ident_QMARK_ = (function edn_query_language$core$ident_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && ((((cljs.core.first.call(null,x) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,x))))));
});
edn_query_language.core.focus_subquery_union_STAR_ = (function edn_query_language$core$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__1504_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__1504_SHARP_),p1__1504_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.call(null,query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.call(null,(function (children,p__1505){
var map__1506 = p__1505;
var map__1506__$1 = cljs.core.__destructure_map.call(null,map__1506);
var union_entry = map__1506__$1;
var union_key = cljs.core.get.call(null,map__1506__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5821__auto__ = cljs.core.get.call(null,s_index,union_key);
if(cljs.core.truth_(temp__5821__auto__)){
var sub = temp__5821__auto__;
return cljs.core.conj.call(null,children,edn_query_language.core.focus_subquery_STAR_.call(null,union_entry,sub));
} else {
return cljs.core.conj.call(null,children,union_entry);
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
/**
 * Internal implementation of focus-subquery, you can use this function directly if
 *   you want to send AST in and get AST out (instead of query in / query out).
 */
edn_query_language.core.focus_subquery_STAR_ = (function edn_query_language$core$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__1507_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__1507_SHARP_),p1__1507_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.call(null,query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.call(null,(function (children,p__1508){
var map__1509 = p__1508;
var map__1509__$1 = cljs.core.__destructure_map.call(null,map__1509);
var focus = map__1509__$1;
var key = cljs.core.get.call(null,map__1509__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.call(null,map__1509__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5821__auto__ = cljs.core.get.call(null,q_index,key);
if(cljs.core.truth_(temp__5821__auto__)){
var source = temp__5821__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source))){
return cljs.core.conj.call(null,children,edn_query_language.core.focus_subquery_STAR_.call(null,source,focus));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source))){
return cljs.core.conj.call(null,children,edn_query_language.core.focus_subquery_union_STAR_.call(null,source,focus));
} else {
return cljs.core.conj.call(null,children,source);

}
}
} else {
return children;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
edn_query_language.core.focus_subquery = (function edn_query_language$core$focus_subquery(query,sub_query){
var query_ast = edn_query_language.core.query__GT_ast.call(null,query);
var sub_ast = edn_query_language.core.query__GT_ast.call(null,sub_query);
return edn_query_language.core.ast__GT_expr.call(null,edn_query_language.core.focus_subquery_STAR_.call(null,query_ast,sub_ast),true);
});
/**
 * Recursivelly transduce children on the AST, you can use this to apply filter/transformations
 *   on a whole AST. Each iteration of the transducer will get a single AST node to process.
 * 
 *   ```
 *   (->> [:a {:b [:c :d]} :e]
 *     (p/query->ast)
 *     (p/transduce-children (remove (comp #{:a :c} :key)))
 *     (p/ast->query))
 *   ; => [{:b [:d]} :e]
 *   ```
 */
edn_query_language.core.transduce_children = (function edn_query_language$core$transduce_children(xform,p__1511){
var map__1512 = p__1511;
var map__1512__$1 = cljs.core.__destructure_map.call(null,map__1512);
var node = map__1512__$1;
var children = cljs.core.get.call(null,map__1512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__1513 = node;
if(cljs.core.seq.call(null,children)){
return cljs.core.update.call(null,G__1513,new cljs.core.Keyword(null,"children","children",-940561982),(function (children__$1){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,xform,cljs.core.map.call(null,(function (p1__1510_SHARP_){
return edn_query_language.core.transduce_children.call(null,xform,p1__1510_SHARP_);
}))),children__$1);
}));
} else {
return G__1513;
}
});
/**
 * Given an AST point, check if the children is a union query type.
 */
edn_query_language.core.union_children_QMARK_ = (function edn_query_language$core$union_children_QMARK_(ast){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__1514 = ast;
var G__1514__$1 = (((G__1514 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__1514));
var G__1514__$2 = (((G__1514__$1 == null))?null:cljs.core.first.call(null,G__1514__$1));
if((G__1514__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__1514__$2);
}
})());
});
/**
 * Add property param, eg:
 * 
 *   ```
 *   (p/update-property-param :keyword assoc :foo "bar") => (:keyword {:foo "bar"})
 *   (p/update-property-param '(:keyword {:param "prev"}) assoc :foo "bar") => (:keyword {:foo "bar" :param "prev"})
 *   ```
 *   
 */
edn_query_language.core.update_property_param = (function edn_query_language$core$update_property_param(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1521 = arguments.length;
var i__5727__auto___1522 = (0);
while(true){
if((i__5727__auto___1522 < len__5726__auto___1521)){
args__5732__auto__.push((arguments[i__5727__auto___1522]));

var G__1523 = (i__5727__auto___1522 + (1));
i__5727__auto___1522 = G__1523;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return edn_query_language.core.update_property_param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(edn_query_language.core.update_property_param.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,args){
if(cljs.core.seq_QMARK_.call(null,x)){
var vec__1518 = x;
var k = cljs.core.nth.call(null,vec__1518,(0),null);
var p = cljs.core.nth.call(null,vec__1518,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.call(null,f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.call(null,f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
}));

(edn_query_language.core.update_property_param.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(edn_query_language.core.update_property_param.cljs$lang$applyTo = (function (seq1515){
var G__1516 = cljs.core.first.call(null,seq1515);
var seq1515__$1 = cljs.core.next.call(null,seq1515);
var G__1517 = cljs.core.first.call(null,seq1515__$1);
var seq1515__$2 = cljs.core.next.call(null,seq1515__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1516,G__1517,seq1515__$2);
}));

/**
 * Merges two ast's.
 */
edn_query_language.core.merge_asts = (function edn_query_language$core$merge_asts(qa,qb){
return cljs.core.reduce.call(null,(function (ast,p__1526){
var map__1527 = p__1526;
var map__1527__$1 = cljs.core.__destructure_map.call(null,map__1527);
var item_b = map__1527__$1;
var key = cljs.core.get.call(null,map__1527__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.call(null,map__1527__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.call(null,map__1527__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5821__auto__ = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__1525_SHARP_,p2__1524_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__1524_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1525_SHARP_,p2__1524_SHARP_], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5821__auto__)){
var vec__1528 = temp__5821__auto__;
var idx = cljs.core.nth.call(null,vec__1528,(0),null);
var item = cljs.core.nth.call(null,vec__1528,(1),null);
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),type)))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item),params)){
return cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),edn_query_language.core.merge_asts,item_b);
} else {
return cljs.core.reduced.call(null,null);
}
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),type)))){
return cljs.core.assoc_in.call(null,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),item_b);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.reduced.call(null,null);
} else {
return ast;

}
}
}
} else {
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,item_b);
}
}),qa,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(qb));
});
/**
 * Merges two queries
 */
edn_query_language.core.merge_queries = (function edn_query_language$core$merge_queries(qa,qb){
var G__1531 = edn_query_language.core.merge_asts.call(null,edn_query_language.core.query__GT_ast.call(null,qa),edn_query_language.core.query__GT_ast.call(null,qb));
if((G__1531 == null)){
return null;
} else {
return edn_query_language.core.ast__GT_query.call(null,G__1531);
}
});
edn_query_language.core.mask_query_STAR_ = (function edn_query_language$core$mask_query_STAR_(p__1532,mask_ast){
var map__1533 = p__1532;
var map__1533__$1 = cljs.core.__destructure_map.call(null,map__1533);
var source_ast = map__1533__$1;
var children = cljs.core.get.call(null,map__1533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.call(null,(function (ast,p__1534){
var map__1535 = p__1534;
var map__1535__$1 = cljs.core.__destructure_map.call(null,map__1535);
var mask_node = map__1535__$1;
var mask_children = cljs.core.get.call(null,map__1535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var key = cljs.core.get.call(null,map__1535__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var temp__5821__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587)),children));
if(cljs.core.truth_(temp__5821__auto__)){
var source_node = temp__5821__auto__;
if(((cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(source_node))) && (cljs.core.seq.call(null,mask_children)))){
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,edn_query_language.core.mask_query_STAR_.call(null,source_node,mask_node));
} else {
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,source_node);
}
} else {
return ast;
}
}),cljs.core.assoc.call(null,source_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(mask_ast));
});
/**
 * Given an AST, find the child with a given key and run update against it.
 */
edn_query_language.core.update_child = (function edn_query_language$core$update_child(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1540 = arguments.length;
var i__5727__auto___1541 = (0);
while(true){
if((i__5727__auto___1541 < len__5726__auto___1540)){
args__5732__auto__.push((arguments[i__5727__auto___1541]));

var G__1542 = (i__5727__auto___1541 + (1));
i__5727__auto___1541 = G__1542;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return edn_query_language.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(edn_query_language.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5821__auto__ = (function (){var G__1539 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__1539__$1 = (((G__1539 == null))?null:cljs.core.map_indexed.call(null,cljs.core.vector,G__1539));
var G__1539__$2 = (((G__1539__$1 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__1539__$1));
if((G__1539__$2 == null)){
return null;
} else {
return cljs.core.ffirst.call(null,G__1539__$2);
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var idx = temp__5821__auto__;
return cljs.core.apply.call(null,cljs.core.update_in,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),args);
} else {
return ast;
}
}));

(edn_query_language.core.update_child.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(edn_query_language.core.update_child.cljs$lang$applyTo = (function (seq1536){
var G__1537 = cljs.core.first.call(null,seq1536);
var seq1536__$1 = cljs.core.next.call(null,seq1536);
var G__1538 = cljs.core.first.call(null,seq1536__$1);
var seq1536__$2 = cljs.core.next.call(null,seq1536__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1537,G__1538,seq1536__$2);
}));

/**
 * Given an AST, find the child with a given key and run update against it.
 */
edn_query_language.core.update_recursive_depth = (function edn_query_language$core$update_recursive_depth(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1548 = arguments.length;
var i__5727__auto___1549 = (0);
while(true){
if((i__5727__auto___1549 < len__5726__auto___1548)){
args__5732__auto__.push((arguments[i__5727__auto___1549]));

var G__1550 = (i__5727__auto___1549 + (1));
i__5727__auto___1549 = G__1550;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return edn_query_language.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(edn_query_language.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5821__auto__ = (function (){var G__1547 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__1547__$1 = (((G__1547 == null))?null:cljs.core.map_indexed.call(null,cljs.core.vector,G__1547));
var G__1547__$2 = (((G__1547__$1 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__1543_SHARP_){
return ((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__1543_SHARP_))) && (cljs.core.pos_int_QMARK_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__1543_SHARP_))));
}),cljs.core.second),G__1547__$1));
if((G__1547__$2 == null)){
return null;
} else {
return cljs.core.ffirst.call(null,G__1547__$2);
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var idx = temp__5821__auto__;
return cljs.core.apply.call(null,cljs.core.update_in,ast,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx,new cljs.core.Keyword(null,"query","query",-1288509510)], null),args);
} else {
return ast;
}
}));

(edn_query_language.core.update_recursive_depth.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(edn_query_language.core.update_recursive_depth.cljs$lang$applyTo = (function (seq1544){
var G__1545 = cljs.core.first.call(null,seq1544);
var seq1544__$1 = cljs.core.next.call(null,seq1544);
var G__1546 = cljs.core.first.call(null,seq1544__$1);
var seq1544__$2 = cljs.core.next.call(null,seq1544__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1545,G__1546,seq1544__$2);
}));

/**
 * Given a source EQL query, use a mask EQL query to filter which elements to pick from
 *   the source. Params will be maintaned from the source, params in mask are ignored.
 */
edn_query_language.core.mask_query = (function edn_query_language$core$mask_query(source,mask){
var source_ast = edn_query_language.core.query__GT_ast.call(null,source);
var mask_ast = edn_query_language.core.query__GT_ast.call(null,mask);
return edn_query_language.core.ast__GT_query.call(null,edn_query_language.core.mask_query_STAR_.call(null,source_ast,mask_ast));
});
/**
 * Converts ident values and param values to ::p/var.
 */
edn_query_language.core.normalize_query_variables = (function edn_query_language$core$normalize_query_variables(query){
return edn_query_language.core.ast__GT_query.call(null,edn_query_language.core.transduce_children.call(null,cljs.core.map.call(null,(function (x){
var G__1552 = x;
var G__1552__$1 = ((edn_query_language.core.ident_QMARK_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.call(null,G__1552,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("edn-query-language.core","var","edn-query-language.core/var",-1571169875)], null)):G__1552);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.call(null,G__1552__$1,new cljs.core.Keyword(null,"params","params",710516235),(function (p1__1551_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__1553){
var vec__1554 = p__1553;
var k = cljs.core.nth.call(null,vec__1554,(0),null);
var _ = cljs.core.nth.call(null,vec__1554,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("edn-query-language.core","var","edn-query-language.core/var",-1571169875)], null);
})),p1__1551_SHARP_);
}));
} else {
return G__1552__$1;
}
})),edn_query_language.core.query__GT_ast.call(null,query)));
});
/**
 * Generates a consistent hash from the query. The query first goes to a process to remove any
 *   variables from idents and params, then we get the Clojure hash of it. You can use this to save
 *   information about a query that can be used to correlate with the query later.
 */
edn_query_language.core.query_id = (function edn_query_language$core$query_id(query){
return cljs.core.hash.call(null,edn_query_language.core.normalize_query_variables.call(null,query));
});
/**
 * Like query->ast, but does not follow joins.  Useful for efficiently getting just the top-level entries in
 * a large query.
 */
edn_query_language.core.query__GT_shallow_ast = (function edn_query_language$core$query__GT_shallow_ast(query){
var _STAR_shallow_conversion_STAR__orig_val__1557 = edn_query_language.core._STAR_shallow_conversion_STAR_;
var _STAR_shallow_conversion_STAR__temp_val__1558 = true;
(edn_query_language.core._STAR_shallow_conversion_STAR_ = _STAR_shallow_conversion_STAR__temp_val__1558);

try{return edn_query_language.core.query__GT_ast.call(null,query);
}finally {(edn_query_language.core._STAR_shallow_conversion_STAR_ = _STAR_shallow_conversion_STAR__orig_val__1557);
}});
if(cljs.core.truth_(edn_query_language.core.INCLUDE_SPECS)){
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","query->ast","edn-query-language.core/query->ast",1749339811,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","query->ast1","edn-query-language.core/query->ast1",-1127394108,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","ast->query","edn-query-language.core/ast->query",1361699420,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","focus-subquery","edn-query-language.core/focus-subquery",167014332,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"sub-query","sub-query",-1930580307),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"sub-query","sub-query",-1930580307),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"sub-query","sub-query",-1930580307)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"sub-query","sub-query",-1930580307),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","transduce-children","edn-query-language.core/transduce-children",966659322,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Keyword(null,"node","node",581201198)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),null,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","union-children?","edn-query-language.core/union-children?",730690780,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","update-property-param","edn-query-language.core/update-property-param",213758125,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"expr","expr",745722291)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)], null),null),cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),null,null),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","merge-asts","edn-query-language.core/merge-asts",807253317,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword(null,"qb","qb",-1714166232),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword(null,"qb","qb",-1714166232),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword(null,"qb","qb",-1714166232)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword(null,"qb","qb",-1714166232),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),null,null,null));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("edn-query-language.core","merge-queries","edn-query-language.core/merge-queries",-229392415,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"qb","qb",-1714166232),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"qb","qb",-1714166232),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword(null,"qb","qb",-1714166232)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"qb","qb",-1714166232),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),null,null,null));
} else {
}

//# sourceMappingURL=core.js.map
