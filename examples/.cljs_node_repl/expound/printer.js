// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :none}
goog.provide('expound.printer');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.pprint');
goog.require('clojure.set');
goog.require('expound.util');
goog.require('expound.ansi');
goog.require('expound.paths');
goog.require('clojure.walk');
goog.require('goog.string.format');
goog.require('goog.string');
expound.printer.indent_level = (2);
expound.printer.anon_fn_str = "<anonymous function>";
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",-2019438263),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),"null"], null), null),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"specs","specs",1426570741)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"and","and",668631710,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"or","or",1876275696,null)),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword(null,"conj","conj",1527141827),new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",-2019438263)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Keyword(null,"conj","conj",1527141827)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",-2019438263)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",-2019438263)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.spec","key-spec","expound.spec/key-spec",169182720),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),"null"], null), null),new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),"null",new cljs.core.Keyword(null,"opt-un","opt-un",883442496),"null",new cljs.core.Keyword(null,"req","req",-326448303),"null",new cljs.core.Keyword(null,"opt","opt",-794706369),"null"], null), null),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),null], null), null),cljs.spec.alpha.rep_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),"null",new cljs.core.Keyword(null,"opt-un","opt-un",883442496),"null",new cljs.core.Keyword(null,"req","req",-326448303),"null",new cljs.core.Keyword(null,"opt","opt",-794706369),"null"], null), null),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.Keyword(null,"specs","specs",1426570741)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),null,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),null,new cljs.core.Keyword(null,"req","req",-326448303),null,new cljs.core.Keyword(null,"opt","opt",-794706369),null], null), null),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__3179){
return cljs.core.coll_QMARK_.call(null,G__3179);
})], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),"null",new cljs.core.Keyword(null,"opt-un","opt-un",883442496),"null",new cljs.core.Keyword(null,"req","req",-326448303),"null",new cljs.core.Keyword(null,"opt","opt",-794706369),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",1074571008),"null",new cljs.core.Keyword(null,"opt-un","opt-un",883442496),"null",new cljs.core.Keyword(null,"req","req",-326448303),"null",new cljs.core.Keyword(null,"opt","opt",-794706369),"null"], null), null),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",1714582226))))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),"null"], null), null),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),"null"], null), null),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"compound","compound",1539396613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),"null"], null), null),new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236)))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"compound","compound",1539396613)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),"null"], null), null),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),"null"], null), null),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),"null"], null), null),new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.Keyword(null,"kw","kw",1158308175)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"%","%",-950237169,null),null], null), null),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),"null"], null), null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236))], null))], null),null));
expound.printer.str_width = (function expound$printer$str_width(lines){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,lines));
});
expound.printer.max_column_width = (function expound$printer$max_column_width(rows,i){
return cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.map.call(null,(function (p1__3180_SHARP_){
return expound.printer.str_width.call(null,clojure.string.split_lines.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,p1__3180_SHARP_,i))));
}),rows));
});
expound.printer.max_row_height = (function expound$printer$max_row_height(row){
return cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.map.call(null,(function (p1__3181_SHARP_){
return cljs.core.count.call(null,clojure.string.split_lines.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3181_SHARP_)));
}),row));
});
expound.printer.indented_multirows = (function expound$printer$indented_multirows(column_widths,multi_rows){
return cljs.core.map.call(null,(function (multi_row){
return cljs.core.map.call(null,(function (row){
return cljs.core.map_indexed.call(null,(function (i,v){
return expound.printer.format.call(null,["%-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,column_widths,i)),"s"].join(''),v);
}),row);
}),multi_row);
}),multi_rows);
});
expound.printer.formatted_row = (function expound$printer$formatted_row(row,edge,spacer,middle){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),clojure.string.join.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer)].join(''),row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge)].join('');
});
expound.printer.table = (function expound$printer$table(multirows){
var header = cljs.core.first.call(null,cljs.core.first.call(null,multirows));
var columns_dividers = cljs.core.map.call(null,(function (p1__3182_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3182_SHARP_)).length),"-"));
}),header);
var header_columns_dividers = cljs.core.map.call(null,(function (p1__3183_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3183_SHARP_)).length),"="));
}),header);
var header_divider = expound.printer.formatted_row.call(null,header_columns_dividers,"|","=","+");
var row_divider = expound.printer.formatted_row.call(null,columns_dividers,"|","-","+");
var formatted_multirows = cljs.core.map.call(null,(function (multirow){
return cljs.core.map.call(null,(function (row){
return expound.printer.formatted_row.call(null,row,"|"," ","|");
}),multirow);
}),multirows);
return cljs.core.mapcat.call(null,cljs.core.seq,cljs.core.butlast.call(null,cljs.core.mapcat.call(null,cljs.core.vector,formatted_multirows,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_divider], null)], null),cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_divider], null))))));
});
expound.printer.multirow = (function expound$printer$multirow(row_height,row){
var split_row_contents = cljs.core.mapv.call(null,(function (v){
return clojure.string.split_lines.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}),row);
var iter__5480__auto__ = (function expound$printer$multirow_$_iter__3184(s__3185){
return (new cljs.core.LazySeq(null,(function (){
var s__3185__$1 = s__3185;
while(true){
var temp__5823__auto__ = cljs.core.seq.call(null,s__3185__$1);
if(temp__5823__auto__){
var s__3185__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3185__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__3185__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__3187 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__3186 = (0);
while(true){
if((i__3186 < size__5479__auto__)){
var row_idx = cljs.core._nth.call(null,c__5478__auto__,i__3186);
cljs.core.chunk_append.call(null,b__3187,(function (){var iter__5480__auto__ = ((function (i__3186,row_idx,c__5478__auto__,size__5479__auto__,b__3187,s__3185__$2,temp__5823__auto__,split_row_contents){
return (function expound$printer$multirow_$_iter__3184_$_iter__3188(s__3189){
return (new cljs.core.LazySeq(null,((function (i__3186,row_idx,c__5478__auto__,size__5479__auto__,b__3187,s__3185__$2,temp__5823__auto__,split_row_contents){
return (function (){
var s__3189__$1 = s__3189;
while(true){
var temp__5823__auto____$1 = cljs.core.seq.call(null,s__3189__$1);
if(temp__5823__auto____$1){
var s__3189__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3189__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__3189__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__3191 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__3190 = (0);
while(true){
if((i__3190 < size__5479__auto____$1)){
var col_idx = cljs.core._nth.call(null,c__5478__auto____$1,i__3190);
cljs.core.chunk_append.call(null,b__3191,cljs.core.get_in.call(null,split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""));

var G__3196 = (i__3190 + (1));
i__3190 = G__3196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3191),expound$printer$multirow_$_iter__3184_$_iter__3188.call(null,cljs.core.chunk_rest.call(null,s__3189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3191),null);
}
} else {
var col_idx = cljs.core.first.call(null,s__3189__$2);
return cljs.core.cons.call(null,cljs.core.get_in.call(null,split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""),expound$printer$multirow_$_iter__3184_$_iter__3188.call(null,cljs.core.rest.call(null,s__3189__$2)));
}
} else {
return null;
}
break;
}
});})(i__3186,row_idx,c__5478__auto__,size__5479__auto__,b__3187,s__3185__$2,temp__5823__auto__,split_row_contents))
,null,null));
});})(i__3186,row_idx,c__5478__auto__,size__5479__auto__,b__3187,s__3185__$2,temp__5823__auto__,split_row_contents))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row)));
})());

var G__3197 = (i__3186 + (1));
i__3186 = G__3197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3187),expound$printer$multirow_$_iter__3184.call(null,cljs.core.chunk_rest.call(null,s__3185__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3187),null);
}
} else {
var row_idx = cljs.core.first.call(null,s__3185__$2);
return cljs.core.cons.call(null,(function (){var iter__5480__auto__ = ((function (row_idx,s__3185__$2,temp__5823__auto__,split_row_contents){
return (function expound$printer$multirow_$_iter__3184_$_iter__3192(s__3193){
return (new cljs.core.LazySeq(null,(function (){
var s__3193__$1 = s__3193;
while(true){
var temp__5823__auto____$1 = cljs.core.seq.call(null,s__3193__$1);
if(temp__5823__auto____$1){
var s__3193__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3193__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__3193__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__3195 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__3194 = (0);
while(true){
if((i__3194 < size__5479__auto__)){
var col_idx = cljs.core._nth.call(null,c__5478__auto__,i__3194);
cljs.core.chunk_append.call(null,b__3195,cljs.core.get_in.call(null,split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""));

var G__3198 = (i__3194 + (1));
i__3194 = G__3198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3195),expound$printer$multirow_$_iter__3184_$_iter__3192.call(null,cljs.core.chunk_rest.call(null,s__3193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3195),null);
}
} else {
var col_idx = cljs.core.first.call(null,s__3193__$2);
return cljs.core.cons.call(null,cljs.core.get_in.call(null,split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""),expound$printer$multirow_$_iter__3184_$_iter__3192.call(null,cljs.core.rest.call(null,s__3193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_idx,s__3185__$2,temp__5823__auto__,split_row_contents))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row)));
})(),expound$printer$multirow_$_iter__3184.call(null,cljs.core.rest.call(null,s__3185__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,row_height));
});
expound.printer.multirows = (function expound$printer$multirows(row_heights,rows){
return cljs.core.map_indexed.call(null,(function (idx,row){
return expound.printer.multirow.call(null,cljs.core.get.call(null,row_heights,idx),row);
}),rows);
});
expound.printer.formatted_multirows = (function expound$printer$formatted_multirows(column_keys,map_rows){
if(cljs.core.empty_QMARK_.call(null,map_rows)){
return null;
} else {
var rows = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_keys], null),cljs.core.map.call(null,(function (p1__3199_SHARP_){
return cljs.core.map.call(null,p1__3199_SHARP_,column_keys);
}),map_rows));
var row_heights = cljs.core.mapv.call(null,expound.printer.max_row_height,rows);
var column_widths = cljs.core.map_indexed.call(null,(function (i,_){
return expound.printer.max_column_width.call(null,rows,i);
}),cljs.core.first.call(null,rows));
return expound.printer.indented_multirows.call(null,column_widths,expound.printer.multirows.call(null,row_heights,rows));
}
});
expound.printer.table_str = (function expound$printer$table_str(column_keys,map_rows){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"\n"].join('');
}),expound.printer.table.call(null,expound.printer.formatted_multirows.call(null,column_keys,map_rows)))))].join('');
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.printer","print-table","expound.printer/print-table",173559216,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"map-rows","map-rows",217464867),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"map-rows","map-rows",217464867),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"map-rows","map-rows",217464867)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl.call(null,cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__3200){
return cljs.core.coll_QMARK_.call(null,G__3200);
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__3201){
return cljs.core.coll_QMARK_.call(null,G__3201);
})], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"map-rows","map-rows",217464867),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
expound.printer.print_table = (function expound$printer$print_table(var_args){
var G__3203 = arguments.length;
switch (G__3203) {
case 1:
return expound.printer.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.printer.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.printer.print_table.cljs$core$IFn$_invoke$arity$1 = (function (map_rows){
return expound.printer.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,map_rows)),map_rows);
}));

(expound.printer.print_table.cljs$core$IFn$_invoke$arity$2 = (function (column_keys,map_rows){
return cljs.core.print.call(null,expound.printer.table_str.call(null,column_keys,map_rows));
}));

(expound.printer.print_table.cljs$lang$maxFixedArity = 2);

expound.printer.keywords = (function expound$printer$keywords(form){
return cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.seq,form));
});
expound.printer.singleton_QMARK_ = (function expound$printer$singleton_QMARK_(xs){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,xs));
});
expound.printer.specs_from_form = (function expound$printer$specs_from_form(via){
var form = (function (){var G__3205 = via;
var G__3205__$1 = (((G__3205 == null))?null:cljs.core.last.call(null,G__3205));
if((G__3205__$1 == null)){
return null;
} else {
return cljs.spec.alpha.form.call(null,G__3205__$1);
}
})();
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("expound.spec","key-spec","expound.spec/key-spec",169182720),form);
if(cljs.core.truth_((function (){var and__5000__auto__ = form;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),conformed);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,(function (x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),cljs.core.first.call(null,x))));
}),cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.seq,cljs.core.map.call(null,new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(conformed))))));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
expound.printer.key__GT_spec = (function expound$printer$key__GT_spec(keys,problems){
var seq__3207_3211 = cljs.core.seq.call(null,problems);
var chunk__3208_3212 = null;
var count__3209_3213 = (0);
var i__3210_3214 = (0);
while(true){
if((i__3210_3214 < count__3209_3213)){
var p_3215 = cljs.core._nth.call(null,chunk__3208_3212,i__3210_3214);
if((!((new cljs.core.Keyword("expound","via","expound/via",-595987777).cljs$core$IFn$_invoke$arity$1(p_3215) == null)))){
} else {
throw (new Error(["Assert failed: ",expound.util.assert_message,"\n","(some? (:expound/via p))"].join('')));
}


var G__3216 = seq__3207_3211;
var G__3217 = chunk__3208_3212;
var G__3218 = count__3209_3213;
var G__3219 = (i__3210_3214 + (1));
seq__3207_3211 = G__3216;
chunk__3208_3212 = G__3217;
count__3209_3213 = G__3218;
i__3210_3214 = G__3219;
continue;
} else {
var temp__5823__auto___3220 = cljs.core.seq.call(null,seq__3207_3211);
if(temp__5823__auto___3220){
var seq__3207_3221__$1 = temp__5823__auto___3220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3207_3221__$1)){
var c__5525__auto___3222 = cljs.core.chunk_first.call(null,seq__3207_3221__$1);
var G__3223 = cljs.core.chunk_rest.call(null,seq__3207_3221__$1);
var G__3224 = c__5525__auto___3222;
var G__3225 = cljs.core.count.call(null,c__5525__auto___3222);
var G__3226 = (0);
seq__3207_3211 = G__3223;
chunk__3208_3212 = G__3224;
count__3209_3213 = G__3225;
i__3210_3214 = G__3226;
continue;
} else {
var p_3227 = cljs.core.first.call(null,seq__3207_3221__$1);
if((!((new cljs.core.Keyword("expound","via","expound/via",-595987777).cljs$core$IFn$_invoke$arity$1(p_3227) == null)))){
} else {
throw (new Error(["Assert failed: ",expound.util.assert_message,"\n","(some? (:expound/via p))"].join('')));
}


var G__3228 = cljs.core.next.call(null,seq__3207_3221__$1);
var G__3229 = null;
var G__3230 = (0);
var G__3231 = (0);
seq__3207_3211 = G__3228;
chunk__3208_3212 = G__3229;
count__3209_3213 = G__3230;
i__3210_3214 = G__3231;
continue;
}
} else {
}
}
break;
}

var vias = cljs.core.map.call(null,new cljs.core.Keyword("expound","via","expound/via",-595987777),problems);
var specs = ((cljs.core.every_QMARK_.call(null,cljs.core.qualified_keyword_QMARK_,keys))?keys:(function (){var temp__5821__auto__ = cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,expound.printer.specs_from_form,vias));
if(cljs.core.truth_(temp__5821__auto__)){
var specs = temp__5821__auto__;
return specs;
} else {
return keys;
}
})());
return cljs.core.reduce.call(null,(function (m,k){
return cljs.core.assoc.call(null,m,k,((cljs.core.qualified_keyword_QMARK_.call(null,k))?k:(function (){var or__5002__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3206_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,k),cljs.core.name.call(null,p1__3206_SHARP_));
}),specs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<can't find spec for unqualified spec identifier>";
}
})()));
}),cljs.core.PersistentArrayMap.EMPTY,keys);
});
expound.printer.summarize_key_clause = (function expound$printer$summarize_key_clause(p__3232){
var vec__3233 = p__3232;
var branch = cljs.core.nth.call(null,vec__3233,(0),null);
var match = cljs.core.nth.call(null,vec__3233,(1),null);
var G__3236 = branch;
var G__3236__$1 = (((G__3236 instanceof cljs.core.Keyword))?G__3236.fqn:null);
switch (G__3236__$1) {
case "simple":
return new cljs.core.Keyword(null,"kw","kw",1158308175).cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return cljs.core.apply.call(null,cljs.core.list,cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(match))),cljs.core.map.call(null,expound.printer.summarize_key_clause,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(match)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3236__$1)].join('')));

}
});
expound.printer.missing_key = (function expound$printer$missing_key(form){
var vec__3238 = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236),cljs.core.nth.call(null,form,(2)));
var branch = cljs.core.nth.call(null,vec__3238,(0),null);
var match = cljs.core.nth.call(null,vec__3238,(1),null);
var G__3241 = branch;
var G__3241__$1 = (((G__3241 instanceof cljs.core.Keyword))?G__3241.fqn:null);
switch (G__3241__$1) {
case "simple":
return new cljs.core.Keyword(null,"kw","kw",1158308175).cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return expound.printer.summarize_key_clause.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch,match], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3241__$1)].join('')));

}
});
expound.printer.elide_core_ns = (function expound$printer$elide_core_ns(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,"cljs.core/",""),"cljs/core/","");
});
expound.printer.elide_spec_ns = (function expound$printer$elide_spec_ns(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,"cljs.spec.alpha/",""),"cljs/spec/alpha","");
});
expound.printer.pprint_fn = (function expound$printer$pprint_fn(f){
return clojure.string.replace.call(null,clojure.string.replace.call(null,expound.printer.elide_core_ns.call(null,(function (){var fn_parts = clojure.string.split.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/object\[([^\( \]]+).*(\n|\])?/,cljs.core.pr_str.call(null,f))),/\$/);
var ns_n = clojure.string.join.call(null,".",cljs.core.butlast.call(null,fn_parts));
var fn_n = cljs.core.last.call(null,fn_parts);
if(cljs.core.empty_QMARK_.call(null,ns_n)){
return expound.printer.anon_fn_str;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge.call(null,ns_n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge.call(null,fn_n))].join('');
}
})()),/--\d+/,""),/@[a-zA-Z0-9]+/,"");
});
expound.printer.format = (function expound$printer$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___3245 = arguments.length;
var i__5727__auto___3246 = (0);
while(true){
if((i__5727__auto___3246 < len__5726__auto___3245)){
args__5732__auto__.push((arguments[i__5727__auto___3246]));

var G__3247 = (i__5727__auto___3246 + (1));
i__5727__auto___3246 = G__3247;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(expound.printer.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(expound.printer.format.cljs$lang$applyTo = (function (seq3243){
var G__3244 = cljs.core.first.call(null,seq3243);
var seq3243__$1 = cljs.core.next.call(null,seq3243);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3244,seq3243__$1);
}));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.printer","pprint-str","expound.printer/pprint-str",545590738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Returns the pretty-printed string
 */
expound.printer.pprint_str = (function expound$printer$pprint_str(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return expound.printer.pprint_fn.call(null,x);
} else {
return cljs.pprint.write.call(null,x,new cljs.core.Keyword(null,"stream","stream",1534941648),null);
}
});
expound.printer.expand_spec = (function expound$printer$expand_spec(spec){
var expanded_spec = (cljs.core.truth_(cljs.spec.alpha.get_spec.call(null,spec))?cljs.spec.alpha.form.call(null,spec):spec);
if(typeof expanded_spec === 'string'){
return expanded_spec;
} else {
return expound.printer.pprint_str.call(null,expanded_spec);
}
});
expound.printer.simple_spec_or_name = (function expound$printer$simple_spec_or_name(spec_name){
var expanded = expound.printer.expand_spec.call(null,spec_name);
var spec_str = expound.printer.elide_spec_ns.call(null,expound.printer.elide_core_ns.call(null,(((expanded == null))?"nil":expanded)));
return spec_str;
});
expound.printer.print_spec_keys_STAR_ = (function expound$printer$print_spec_keys_STAR_(problems){
var keys = expound.printer.keywords.call(null,cljs.core.map.call(null,(function (p1__3248_SHARP_){
return expound.printer.missing_key.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(p1__3248_SHARP_));
}),problems));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("expound","via","expound/via",-595987777).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,problems)));
if(and__5000__auto__){
return cljs.core.some.call(null,cljs.core.simple_keyword_QMARK_,keys);
} else {
return and__5000__auto__;
}
})())){
return null;
} else {
return cljs.core.sort_by.call(null,(function (p1__3249_SHARP_){
return cljs.core.get.call(null,p1__3249_SHARP_,"key");
}),cljs.core.map.call(null,(function (p__3250){
var vec__3251 = p__3250;
var k = cljs.core.nth.call(null,vec__3251,(0),null);
var v = cljs.core.nth.call(null,vec__3251,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, ["key",k,"spec",expound.printer.simple_spec_or_name.call(null,v)], null);
}),expound.printer.key__GT_spec.call(null,keys,problems)));
}
});
expound.printer.print_spec_keys = (function expound$printer$print_spec_keys(problems){
return clojure.string.trim.call(null,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3254_3258 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3255_3259 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3256_3260 = true;
var _STAR_print_fn_STAR__temp_val__3257_3261 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3256_3260);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3257_3261);

try{expound.printer.print_table.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","spec"], null),expound.printer.print_spec_keys_STAR_.call(null,problems));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3255_3259);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3254_3258);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
});
expound.printer.print_missing_keys = (function expound$printer$print_missing_keys(problems){
var keys_clauses = cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,expound.printer.missing_key,new cljs.core.Keyword(null,"pred","pred",1927423397)),problems));
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,keys_clauses)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__3262_SHARP_){
return expound.ansi.color.call(null,p1__3262_SHARP_,new cljs.core.Keyword(null,"correct-key","correct-key",1087492967));
}),cljs.core.sort.call(null,keys_clauses)));
} else {
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.call(null,expound.printer.pprint_str.call(null,((expound.printer.singleton_QMARK_.call(null,keys_clauses))?cljs.core.first.call(null,keys_clauses):cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"and","and",668631710,null),keys_clauses))),new cljs.core.Keyword(null,"correct-key","correct-key",1087492967)))].join('');
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.printer","no-trailing-whitespace","expound.printer/no-trailing-whitespace",12095135,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given an potentially multi-line string, returns that string with all
 *   trailing whitespace removed.
 */
expound.printer.no_trailing_whitespace = (function expound$printer$no_trailing_whitespace(s){
var s_SINGLEQUOTE_ = clojure.string.join.call(null,"\n",cljs.core.map.call(null,clojure.string.trimr,clojure.string.split_lines.call(null,s)));
if(cljs.core._EQ_.call(null,"\n",cljs.core.last.call(null,s))){
return [s_SINGLEQUOTE_,"\n"].join('');
} else {
return s_SINGLEQUOTE_;
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.printer","indent","expound.printer/indent",-1038636895,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",-142390557),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",-142390557),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",-142390557),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),new cljs.core.Keyword(null,"s","s",1705939918)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl.call(null,cljs.core.nat_int_QMARK_,new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.spec.alpha.maybe_impl.call(null,cljs.core.nat_int_QMARK_,new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",-142390557),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given an potentially multi-line string, returns that string indented by
 * 'indent-level' spaces. Optionally, can indent first line and other lines
 * different amounts.
 */
expound.printer.indent = (function expound$printer$indent(var_args){
var G__3265 = arguments.length;
switch (G__3265) {
case 1:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.printer.indent.cljs$core$IFn$_invoke$arity$1 = (function (s){
return expound.printer.indent.call(null,expound.printer.indent_level,s);
}));

(expound.printer.indent.cljs$core$IFn$_invoke$arity$2 = (function (indent_level,s){
return expound.printer.indent.call(null,indent_level,indent_level,s);
}));

(expound.printer.indent.cljs$core$IFn$_invoke$arity$3 = (function (first_line_indent,rest_lines_indent,s){
var vec__3266 = clojure.string.split_lines.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
var seq__3267 = cljs.core.seq.call(null,vec__3266);
var first__3268 = cljs.core.first.call(null,seq__3267);
var seq__3267__$1 = cljs.core.next.call(null,seq__3267);
var line = first__3268;
var lines = seq__3267__$1;
return clojure.string.join.call(null,"\n",cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,first_line_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('')], null),cljs.core.map.call(null,(function (p1__3263_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,rest_lines_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3263_SHARP_)].join('');
}),lines)));
}));

(expound.printer.indent.cljs$lang$maxFixedArity = 3);

expound.printer.escape_replacement = (function expound$printer$escape_replacement(_pattern,s){
return clojure.string.replace.call(null,s,/\$/,"$$$$");
});
expound.printer.blank_form = (function expound$printer$blank_form(form){
if(cljs.core.map_QMARK_.call(null,form)){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,form),cljs.core.repeat.call(null,new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.vector_QMARK_.call(null,form)){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.set_QMARK_.call(null,form)){
return form;
} else {
if(((cljs.core.list_QMARK_.call(null,form)) || (cljs.core.seq_QMARK_.call(null,form)))){
return cljs.core.apply.call(null,cljs.core.list,cljs.core.repeat.call(null,cljs.core.count.call(null,form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
return new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124);

}
}
}
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.printer","summary-form","expound.printer/summary-form",2067963162,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
expound.printer.summary_form = (function expound$printer$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__3270 = in$;
var seq__3271 = cljs.core.seq.call(null,vec__3270);
var first__3272 = cljs.core.first.call(null,seq__3271);
var seq__3271__$1 = cljs.core.next.call(null,seq__3271);
var k = first__3272;
var rst = seq__3271__$1;
var rst__$1 = (function (){var or__5002__auto__ = rst;
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.printer.blank_form.call(null,form));
if(cljs.core.empty_QMARK_.call(null,in$)){
return new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036);
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (expound.paths.kps_QMARK_.call(null,k)))){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,displayed_form,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k)),expound.printer.summary_form.call(null,show_valid_values_QMARK_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k),rst__$1),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124));
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (expound.paths.kvps_QMARK_.call(null,k)))){
var G__3273 = show_valid_values_QMARK_;
var G__3274 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__3275 = rst__$1;
show_valid_values_QMARK_ = G__3273;
form = G__3274;
in$ = G__3275;
continue;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
return cljs.core.assoc.call(null,displayed_form,k,expound.printer.summary_form.call(null,show_valid_values_QMARK_,cljs.core.get.call(null,form,k),rst__$1));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seq_QMARK_.call(null,form)))){
return cljs.core.apply.call(null,cljs.core.list,cljs.core.assoc.call(null,cljs.core.vec.call(null,displayed_form),k,expound.printer.summary_form.call(null,show_valid_values_QMARK_,cljs.core.nth.call(null,form,k),rst__$1)));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.set_QMARK_.call(null,form)))){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.assoc.call(null,cljs.core.vec.call(null,displayed_form),k,expound.printer.summary_form.call(null,show_valid_values_QMARK_,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),rst__$1)));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.list_QMARK_.call(null,form)))){
return cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.assoc.call(null,cljs.core.vec.call(null,displayed_form),k,expound.printer.summary_form.call(null,show_valid_values_QMARK_,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),rst__$1)));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (typeof form === 'string'))){
return clojure.string.join.call(null,cljs.core.assoc.call(null,cljs.core.vec.call(null,form),k,new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036)));
} else {
throw cljs.core.ex_info.call(null,"Cannot find path segment in form. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));

}
}
}
}
}
}
}
}
break;
}
});
expound.printer.highlight_line = (function expound$printer$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__3276_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3276_SHARP_)).length);
}),clojure.string.split_lines.call(null,replacement)));
return expound.printer.indent.call(null,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)).length),cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,max_width,"^")));
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.printer.highlighted_value = (function expound$printer$highlighted_value(opts,problem){
var map__3277 = problem;
var map__3277__$1 = cljs.core.__destructure_map.call(null,map__3277);
var form = cljs.core.get.call(null,map__3277__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var in$ = cljs.core.get.call(null,map__3277__$1,new cljs.core.Keyword("expound","in","expound/in",-1900412298));
var map__3278 = opts;
var map__3278__$1 = cljs.core.__destructure_map.call(null,map__3278);
var show_valid_values_QMARK_ = cljs.core.get.call(null,map__3278__$1,new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),false);
var printed_val = expound.printer.pprint_str.call(null,expound.paths.value_in.call(null,form,in$));
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036)),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"))"].join('');
var regex = cljs.core.re_pattern.call(null,["(.*)",relevant,".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR__orig_val__3282 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__3283 = false;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__3283);

try{return expound.printer.pprint_str.call(null,clojure.walk.prewalk_replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),expound.printer.summary_form.call(null,show_valid_values_QMARK_,form,in$)));
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__3282);
}})();
var vec__3279 = cljs.core.re_find.call(null,regex,s);
var seq__3280 = cljs.core.seq.call(null,vec__3279);
var first__3281 = cljs.core.first.call(null,seq__3280);
var seq__3280__$1 = cljs.core.next.call(null,seq__3280);
var line = first__3281;
var first__3281__$1 = cljs.core.first.call(null,seq__3280__$1);
var seq__3280__$2 = cljs.core.next.call(null,seq__3280__$1);
var prefix = first__3281__$1;
var _more = seq__3280__$2;
var highlighted_line = [clojure.string.replace.call(null,line,cljs.core.re_pattern.call(null,relevant),expound.printer.escape_replacement.call(null,cljs.core.re_pattern.call(null,relevant),expound.printer.indent.call(null,(0),cljs.core.count.call(null,prefix),expound.ansi.color.call(null,printed_val,new cljs.core.Keyword(null,"bad-value","bad-value",-139100659))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.call(null,expound.printer.highlight_line.call(null,prefix,printed_val),new cljs.core.Keyword(null,"pointer","pointer",85071187)))].join('');
return expound.printer.no_trailing_whitespace.call(null,clojure.string.replace.call(null,s,line,expound.printer.escape_replacement.call(null,line,highlighted_line)));
});

//# sourceMappingURL=printer.js.map
