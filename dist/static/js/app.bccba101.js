(function(t){function e(e){for(var d,r,o=e[0],i=e[1],s=e[2],b=0,c=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&c.push(l[r][0]),l[r]=0;for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(t[d]=i[d]);p&&p(e);while(c.length)c.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],d=!0,r=1;r<a.length;r++){var i=a[r];0!==l[i]&&(d=!1)}d&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var d={},l={app:0},n=[];function r(t){return o.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"c06fe4ad"}[t]+".js"}function o(e){if(d[e])return d[e].exports;var a=d[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=l[t];if(0!==a)if(a)e.push(a[2]);else{var d=new Promise((function(e,d){a=l[t]=[e,d]}));e.push(a[2]=d);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=r(t);var s=new Error;n=function(e){i.onerror=i.onload=null,clearTimeout(b);var a=l[t];if(0!==a){if(a){var d=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+d+": "+n+")",s.name="ChunkLoadError",s.type=d,s.request=n,a[1](s)}l[t]=void 0}};var b=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=d,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var d in t)o.d(a,d,function(e){return t[e]}.bind(null,d));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var b=0;b<i.length;b++)e(i[b]);var p=s;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21bb":function(t,e,a){"use strict";var d=a("b47d"),l=a.n(d);l.a},"56d7":function(t,e,a){"use strict";a.r(e);a("d9a3"),a("c9db"),a("de3e"),a("618d");var d=a("0261"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r=a("5511"),o={},i=Object(r["a"])(o,l,n,!1,null,null,null),s=i.exports,b=(a("3a20"),a("9bfb")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"water-mark"}},[t._m(0),a("div",{staticClass:"right-menu",staticStyle:{width:"75%",float:"right"}},[a("div",[a("h2",{attrs:{id:"使用方法"}},[t._v("Table(如果有什么不会的，请熟读并背诵文档)")]),a("h3",[t._v("使用方法")]),t._m(1),a("h3",{attrs:{id:"初始实例"}},[t._v("初始实例")]),a("div",[a("zd-table",{attrs:{data:t.data},scopedSlots:t._u([{key:"tbody",fn:function(t){return[a("zd-table-body",{attrs:{prop:"name",data:t.row}}),a("zd-table-body",{attrs:{prop:"name2",data:t.row}})]}}])},[a("zd-table-head",{attrs:{label:"字段1"}}),a("zd-table-head",{attrs:{label:"字段2"}})],1)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datareset)+" ")]),a("h3",{attrs:{id:"斑马线与边框"}},[t._v("斑马线与边框")]),a("p",{staticClass:"tip"},[t._v("传入border striped即可实现斑马线与边框")]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data},scopedSlots:t._u([{key:"tbody",fn:function(e){return[a("zd-table-body",{attrs:{prop:"name",data:e.row}}),t._l(100,(function(t,d){return a("zd-table-body",{key:d,attrs:{prop:"name2",data:e.row}})}))]}}])},[a("zd-table-head",{attrs:{label:"字段1"}}),t._l(100,(function(t,e){return a("zd-table-head",{key:e,attrs:{label:"字段2"}})}))],2)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.databmx)+" ")]),a("h3",{attrs:{id:"固定列"}},[t._v("固定列")]),a("p",{staticClass:"tip"},[t._v('在table指定使用fixed功能，fixed="left"向左固定 fixed="right" 向右固定')]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data,fixed:""},scopedSlots:t._u([{key:"tbody",fn:function(e){return[a("zd-table-body",{attrs:{prop:"name",fixed:"left",data:e.row}}),a("zd-table-body",{attrs:{prop:"name",fixed:"left",data:e.row}}),t._l(20,(function(t,d){return a("zd-table-body",{key:d,attrs:{prop:"name2",data:e.row}})})),a("zd-table-body",{attrs:{prop:"name",fixed:"right",data:e.row}}),a("zd-table-body",{attrs:{prop:"name",fixed:"right",data:e.row}})]}}])},[a("zd-table-head",{attrs:{label:"固定left",fixed:"left"}}),a("zd-table-head",{attrs:{label:"固定left",fixed:"left"}}),t._l(20,(function(t,e){return a("zd-table-head",{key:e,attrs:{label:"字段2"}})})),a("zd-table-head",{attrs:{label:"固定right",fixed:"right"}}),a("zd-table-head",{attrs:{label:"固定right",fixed:"right"}})],2)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datajggdl)+" ")]),a("h3",{attrs:{id:"间隔固定列"}},[t._v("间隔固定列")]),a("p",{staticClass:"tip"},[t._v("在table指定使用fixed功能，在需要的地方加上fixed固定，拖动到指定位置时会自动合并")]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data,fixed:""},scopedSlots:t._u([{key:"tbody",fn:function(e){return[a("zd-table-body",{attrs:{prop:"name",fixed:"left",data:e.row}}),a("zd-table-body",{attrs:{prop:"name",fixed:"left",data:e.row}}),t._l(4,(function(t,d){return a("zd-table-body",{key:d+"a",attrs:{prop:"name",data:e.row}})})),a("zd-table-body",{attrs:{prop:"name",fixed:"left",data:e.row}}),t._l(20,(function(t,d){return a("zd-table-body",{key:d,attrs:{prop:"name2",data:e.row}})})),a("zd-table-body",{attrs:{prop:"name",fixed:"right",data:e.row}}),a("zd-table-body",{attrs:{prop:"name",fixed:"right",data:e.row}})]}}])},[a("zd-table-head",{attrs:{label:"固定left",fixed:"left"}}),a("zd-table-head",{attrs:{label:"固定left",fixed:"left"}}),t._l(4,(function(t,e){return a("zd-table-head",{key:e+"a",attrs:{label:"字段1"}})})),a("zd-table-head",{attrs:{label:"我也是固定",fixed:"left"}}),t._l(20,(function(t,e){return a("zd-table-head",{key:e,attrs:{label:"字段2"}})})),a("zd-table-head",{attrs:{label:"固定right",fixed:"right"}}),a("zd-table-head",{attrs:{label:"固定right",fixed:"right"}})],2)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datajggdl1)+" ")]),a("h3",{attrs:{id:"流体高度"}},[t._v("流体高度")]),a("p",{staticClass:"tip"},[t._v("传入height即可固定表头，height为max-height")]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data1,height:"300px"},scopedSlots:t._u([{key:"tbody",fn:function(t){return[a("zd-table-body",{attrs:{prop:"name",data:t.row}}),a("zd-table-body",{attrs:{prop:"name2",data:t.row}})]}}])},[a("zd-table-head",{attrs:{label:"字段1"}}),a("zd-table-head",{attrs:{label:"字段2"}})],1)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datafixbiaotou)+" ")]),a("h3",{attrs:{id:"自定义宽度"}},[t._v("自定义宽度")]),a("p",{staticClass:"tip"},[t._v("zd-table-head或者zd-table-body传入width，实际为min-width,内容太少时会自动撑开，内容多时会变成max-width，多余会超出省略，th与td同时设置时，宽度大的会覆盖小的")]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data},scopedSlots:t._u([{key:"tbody",fn:function(e){return[a("zd-table-body",{attrs:{prop:"name",data:e.row}}),a("zd-table-body",{attrs:{prop:"name3",data:e.row,width:"200px"}}),a("zd-table-body",{attrs:{prop:"name4",data:e.row}}),t._l(100,(function(t,d){return a("zd-table-body",{key:d,attrs:{prop:"name2",data:e.row}})}))]}}])},[a("zd-table-head",{attrs:{label:"字段1"}}),a("zd-table-head",{attrs:{label:"这个是比较长的宽度"}}),a("zd-table-head",{attrs:{label:"字段K"}}),t._l(100,(function(t,e){return a("zd-table-head",{key:e,attrs:{label:"字段2"}})}))],2)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datawidth)+" ")]),a("h3",{attrs:{id:"超出省略"}},[t._v("超出省略")]),a("p",{staticClass:"tip"},[t._v("zd-table-head或者zd-table使用show-overflow-tooltip，必须设置width或者min-width，会超出省略并且显示悬浮内容，需要使用el-tooltip")]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data},scopedSlots:t._u([{key:"tbody",fn:function(e){return[a("zd-table-body",{attrs:{prop:"name",data:e.row}}),a("zd-table-body",{attrs:{prop:"name5",data:e.row,width:"200px","show-overflow-tooltip":""}}),a("zd-table-body",{attrs:{prop:"name5",data:e.row,width:"200px","show-overflow-tooltip":""}}),t._l(100,(function(t,d){return a("zd-table-body",{key:d,attrs:{prop:"name2",data:e.row}})}))]}}])},[a("zd-table-head",{attrs:{label:"字段1"}}),a("zd-table-head",{attrs:{label:"这个是比较长的宽度这个是比较长的宽度这个是比较长的宽度"}}),a("zd-table-head",{attrs:{label:"这个是比较长的宽度会超出省略这个是比较长的宽度会超出省略",width:"200px","show-overflow-tooltip":""}}),t._l(100,(function(t,e){return a("zd-table-head",{key:e,attrs:{label:"字段2"}})}))],2)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datatooltip)+" ")]),a("h3",{attrs:{id:"合计"}},[t._v("合计")]),a("p",{staticClass:"tip"},[t._v("使用插槽sumAppend与sumPrepend可以设置合计列位置")]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data1,height:"300px"},scopedSlots:t._u([{key:"tbody",fn:function(e){return[a("zd-table-body",{attrs:{prop:"name",data:e.row}}),t._l(10,(function(t,d){return a("zd-table-body",{key:d,attrs:{prop:"name2",data:e.row}})}))]}},{key:"sumAppend",fn:function(){return[a("zd-table-body",[t._v("合计")]),t._l(10,(function(e,d){return a("zd-table-body",{key:d},[t._v(" 1 ")])}))]},proxy:!0}])},[a("zd-table-head",{attrs:{label:"字段1"}}),t._l(10,(function(t,e){return a("zd-table-head",{key:e,attrs:{label:"字段2"}})}))],2)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datam1)+" ")]),a("h3",{attrs:{id:"获取某一行数据"}},[t._v("获取获取某一行数据")]),a("p",{staticClass:"tip"},[t._v("设置row-click点击方法获取某一行数据，设置cell-mouse-enter与cell-mouse-leave获取移入移出某一行数据")]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data,"row-click":t.rowClick,"cell-mouse-enter":t.cellMouseEnter,"cell-mouse-leave":t.cellMouseLeave},scopedSlots:t._u([{key:"tbody",fn:function(e){return[a("zd-table-body",[t._v(" "+t._s(e.$index)+" ")]),a("zd-table-body",{attrs:{prop:"name",data:e.row}}),t._l(100,(function(t,d){return a("zd-table-body",{key:d,attrs:{prop:"name2",data:e.row}})}))]}}])},[a("zd-table-head",{attrs:{label:"序号"}}),a("zd-table-head",{attrs:{label:"字段1"}}),t._l(100,(function(t,e){return a("zd-table-head",{key:e,attrs:{label:"字段2"}})}))],2)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datam1)+" ")]),a("h3",{attrs:{id:"设置某一行样式"}},[t._v("设置某一行样式")]),a("p",{staticClass:"tip"},[t._v("指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class")]),a("div",[a("zd-table",{attrs:{border:"",striped:"",data:t.data,"row-class-name":t.rowClassName},scopedSlots:t._u([{key:"tbody",fn:function(e){return[a("zd-table-body",[t._v(" "+t._s(e.$index)+" ")]),a("zd-table-body",{attrs:{prop:"name",data:e.row}}),t._l(100,(function(t,d){return a("zd-table-body",{key:d,attrs:{prop:"name2",data:e.row}})}))]}}])},[a("zd-table-head",{attrs:{label:"序号"}}),a("zd-table-head",{attrs:{label:"字段1"}}),t._l(100,(function(t,e){return a("zd-table-head",{key:e,attrs:{label:"字段2"}})}))],2)],1),a("p",{staticClass:"hljs"},[t._v(" "+t._s(t.datam2)+" ")]),a("h3",[t._v("Table Param")]),a("table",{staticClass:"table"},[t._m(2),t._l(t.paramTable,(function(e,d){return a("tr",{key:d},[a("td",[t._v(t._s(e.a))]),a("td",[t._v(t._s(e.b))]),a("td",[t._v(t._s(e.c))]),a("td",[t._v(t._s(e.d))]),a("td",[t._v(t._s(e.e))]),a("td",[t._v(t._s(e.f))]),a("td",[t._v(t._s(e.g))])])}))],2),a("h3",[t._v("table-head Param")]),a("table",{staticClass:"table"},[t._m(3),t._l(t.paramTableTh,(function(e,d){return a("tr",{key:d},[a("td",[t._v(t._s(e.a))]),a("td",[t._v(t._s(e.b))]),a("td",[t._v(t._s(e.c))]),a("td",[t._v(t._s(e.d))]),a("td",[t._v(t._s(e.e))]),a("td",[t._v(t._s(e.f))]),a("td",[t._v(t._s(e.g))])])}))],2),a("h3",[t._v("table-body Param")]),a("table",{staticClass:"table"},[t._m(4),t._l(t.paramTableTd,(function(e,d){return a("tr",{key:d},[a("td",[t._v(t._s(e.a))]),a("td",[t._v(t._s(e.b))]),a("td",[t._v(t._s(e.c))]),a("td",[t._v(t._s(e.d))]),a("td",[t._v(t._s(e.e))]),a("td",[t._v(t._s(e.f))]),a("td",[t._v(t._s(e.g))])])}))],2),a("h3",[t._v("table Methods")]),a("table",{staticClass:"table"},[t._m(5),t._l(t.tableMethods,(function(e,d){return a("tr",{key:d},[a("td",[t._v(t._s(e.a))]),a("td",[t._v(t._s(e.b))]),a("td",[t._v(t._s(e.c))]),a("td",[t._v(t._s(e.d))]),a("td",[t._v(t._s(e.e))])])}))],2)])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-menu",staticStyle:{float:"left"}},[a("h3",[t._v("开发指南")]),a("p",[a("a",{attrs:{href:"#使用方法"}},[t._v("使用方法")])]),a("p",[a("a",{attrs:{href:"#初始实例"}},[t._v("初始实例")])]),a("p",[a("a",{attrs:{href:"#斑马线与边框"}},[t._v("斑马线与边框")])]),a("p",[a("a",{attrs:{href:"#固定列"}},[t._v("固定列")])]),a("p",[a("a",{attrs:{href:"#间隔固定列"}},[t._v("间隔固定列")])]),a("p",[a("a",{attrs:{href:"#固定表头"}},[t._v("固定表头")])]),a("p",[a("a",{attrs:{href:"#自定义宽度"}},[t._v("自定义宽度")])]),a("p",[a("a",{attrs:{href:"#超出省略"}},[t._v("超出省略")])]),a("p",[a("a",{attrs:{href:"#合计"}},[t._v("合计")])]),a("h3",[t._v("方法")]),a("p",[a("a",{attrs:{href:"#获取某一行数据"}},[t._v("获取某一行数据")])]),a("p",[a("a",{attrs:{href:"#设置某一行样式"}},[t._v("设置某一行样式")])]),a("h3",[t._v("链接")]),a("p",[a("a",{attrs:{href:"https://github.com/a873969678/zd-table-demo"}},[t._v("git仓库地址")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hljs"},[a("p",[t._v("import ZdTable from '@/components/ZdTable.vue'")]),a("p",[t._v("import ZdTableHead from '@/components/ZdTableHead.vue'")]),a("p",[t._v("import ZdTableBody from '@/components/ZdTableBody.vue'")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")]),a("th",[t._v("回调参数")]),a("th",[t._v("是否必传")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")]),a("th",[t._v("回调参数")]),a("th",[t._v("是否必传")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")]),a("th",[t._v("回调参数")]),a("th",[t._v("是否必传")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("方法名")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("回调参数")]),a("th",[t._v("参数说明")])])}],f=function(){var t,e=this,a=e.$createElement,d=e._self._c||a;return d("div",{class:(t={"zd-table":!0},t[e.className]=!0,t["zd-table-border-div"]=e.border,t),style:{"max-height":e.height}},[d("table",{class:{"zd-table-wrapper":!0,"zd-table-striped":e.striped,"zd-table-border":e.border}},[d("thead",[d("tr",{staticClass:"zd-table-cloumn-tr zd-table-cloumn-tr-th"},[e._t("default")],2)]),d("tbody",[d("tr",[e._t("sumPrepend")],2),e._l(e.data,(function(t,a){var l;return d("tr",{key:a,class:(l={"zd-table-cloumn-tr":!0},l[e.rowClassName(a,t)||""]=!0,l),on:{click:function(d){return e.rowClick(a,t,d)},mouseenter:function(d){return e.cellMouseEnter(a,t,d)},mouseleave:function(d){return e.cellMouseLeave(a,t,d)}}},[e._t("tbody",null,{row:t,$index:a})],2)})),d("tr",{staticClass:"sum-cloumn sum-cloumn-append"},[e._t("sumAppend")],2)],2),0===e.data.length?d("tbody",[e._m(0)]):e._e()])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"fixed-left-th",attrs:{colspan:"20"}},[t._v("暂无数据")])])}],u=(a("ad37"),a("7267"),a("1eb9"),a("60f0"),{name:"ZdTable",props:{data:{type:Array,default:function(){return[]}},height:{type:String,default:function(){return""}},striped:{type:Boolean,default:!1},border:{type:Boolean,default:!1},rowClick:{type:Function,default:function(){}},cellMouseEnter:{type:Function,default:function(){}},cellMouseLeave:{type:Function,default:function(){}},rowClassName:{type:Function,default:function(){return""}},fixed:{type:Boolean,default:function(){return!1}}},data:function(){return{className:(new Date).getTime().toString()}},watch:{data:function(t,e){this.data=t}},mounted:function(){var t=this,e=document.getElementsByClassName(this.className)[0];this.fixed&&(e.clientWidth!==e.scrollWidth-e.scrollLeft&&setTimeout((function(){t.addOrRemoveClass(e,"add","right")}),200),e.addEventListener("scroll",this.getScroll))},methods:{getScroll:function(t){t.target.scrollLeft>0?this.addOrRemoveClass(t.target,"add"):this.addOrRemoveClass(t.target,"remove"),t.target.clientWidth===t.target.scrollWidth-t.target.scrollLeft?this.addOrRemoveClass(t.target,"remove","right"):this.addOrRemoveClass(t.target,"add","right")},addOrRemoveClass:function(t,e){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"left",d=t.getElementsByClassName("zd-table-cloumn-tr"),l=0;l<d.length;l++){var n=d[l].getElementsByClassName("fixed-"+a+"-th"),r=d[l].getElementsByClassName("fixed-"+a+"-td");if(n.length>0){var o="left"===a?n.length-1:0;"add"===e?n[o].classList.add("fixed-"+a+"-shadow"):"remove"===e&&n[o].classList.remove("fixed-"+a+"-shadow")}if(r.length>0){var i="left"===a?r.length-1:0;"add"===e?r[i].classList.add("fixed-"+a+"-shadow"):"remove"===e&&r[i].classList.remove("fixed-"+a+"-shadow")}}}}}),m=u,v=(a("d4b3"),Object(r["a"])(m,f,h,!1,null,null,null)),w=v.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{class:{"fixed-left-th":"left"===t.fixed,"fixed-right-th":"right"===t.fixed},style:{"min-width":t.minWidth||t.width,width:t.minWidth||t.width}},[a("el-tooltip",{attrs:{content:t.label,disabled:!(t.showOverflowTooltip&&t.widthValue&&t.getTextLength(t.label)*t.tdFontSize>t.widthValue),placement:"top",effect:"light"}},[a("span",{class:{showOverflowTooltip:t.showOverflowTooltip},style:{width:t.minWidth||t.width}},[t._t("default",[t._v(t._s(t.label))])],2)])],1)},y=[];a("b3f9"),a("d780"),a("ec4a");function x(t,e){var a="left"===e?"fixed-left-th":"fixed-right-th",d=document.getElementsByClassName(t);if(d.length>0){var l=d[0].getElementsByClassName(a),n=0;if("left"===e)for(var r=0;r<l.length;r++)r>0?(l[r].style.left=n-1+"px",n+=l[r].clientWidth):n=l[r].clientWidth;else for(var o=l.length-1;o>=0;o--)o<l.length-1?(l[o].style.right=n-1+"px",n+=l[o].clientWidth):n=l[o].clientWidth}}function z(t,e){var a="left"===e?"fixed-left-td":"fixed-right-td",d=document.getElementsByClassName(t)[0].getElementsByClassName("zd-table-cloumn-tr");if(d.length>0)for(var l=0;l<d.length;l++){var n=d[l].getElementsByClassName(a),r=0;if("left"===e)for(var o=0;o<n.length;o++)o>0?(n[o].style.left=r-1+"px",r+=n[o].clientWidth):r=n[o].clientWidth;else for(var i=n.length-1;i>=0;i--)i<n.length-1?(n[i].style.right=r-1+"px",r+=n[i].clientWidth):r=n[i].clientWidth}}function g(t){if(t){t=String(t);var e=/([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g,a=t.match(e);return a?a.length+.5*(t.length-a.length):.5*t.length}return 0}var k={name:"ZdTableHead",props:{label:{type:String,default:""},minWidth:{type:String,default:""},width:{type:String,default:""},fixed:{type:String,default:function(){return""}},showOverflowTooltip:{type:Boolean,default:function(){return!1}}},data:function(){return{data:[],tdFontSize:12,widthValue:""}},watch:{"$parent.data":function(t,e){this.data=t},fixed:function(t,e){var a=this;t&&setTimeout((function(){x(a.$parent.className,t)}),200)}},created:function(){},mounted:function(){var t=this;this.data=this.$parent.data,this.widthValue=(this.minWidth||this.width).replace("px",""),this.fixed&&setTimeout((function(){x(t.$parent.className,t.fixed)}),200),this.showOverflowTooltip&&document.getElementsByTagName("td").length>0&&(this.tdFontSize=window.getComputedStyle(document.getElementsByTagName("th")[0]).fontSize.replace("px",""))},methods:{getTextLength:g}},C=k,T=Object(r["a"])(C,_,y,!1,null,null,null),S=T.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{class:{"fixed-left-td":"left"===t.fixed,"fixed-right-td":"right"===t.fixed,"white-space-nowrap":!t.minWidth&&!t.width},style:{"min-width":t.minWidth||t.width,width:t.minWidth||t.width}},[a("el-tooltip",{attrs:{content:t.data&&t.data[t.prop]+""||"",disabled:!(t.showOverflowTooltip&&t.widthValue&&t.getTextLength(t.data&&t.data[t.prop]||"")*t.tdFontSize>t.widthValue),placement:"top",effect:"light"}},[a("span",{class:{showOverflowTooltip:t.showOverflowTooltip},style:{width:t.minWidth||t.width}},[t._t("default",[t._v(t._s(t.data&&t.data[t.prop]||""))])],2)])],1)},O=[],j={name:"ZdTableBody",props:{prop:{type:String,default:""},data:{type:Object,default:function(){}},minWidth:{type:String,default:""},width:{type:String,default:""},fixed:{type:String,default:function(){return""}},showOverflowTooltip:{type:Boolean,default:function(){return!1}}},data:function(){return{tdFontSize:12,widthValue:""}},watch:{data:function(t,e){this.data=t},fixed:function(t,e){var a=this;t&&setTimeout((function(){z(a.$parent.className,t)}),200)}},mounted:function(){var t=this;this.widthValue=(this.minWidth||this.width).replace("px",""),this.fixed&&setTimeout((function(){z(t.$parent.className,t.fixed)}),200),this.showOverflowTooltip&&document.getElementsByTagName("td").length>0&&(this.tdFontSize=window.getComputedStyle(document.getElementsByTagName("td")[0]).fontSize.replace("px",""))},methods:{getTextLength:g}},B=j,N=Object(r["a"])(B,E,O,!1,null,null,null),$=N.exports,W={name:"Home",components:{ZdTable:w,ZdTableHead:S,ZdTableBody:$},data:function(){return{data:[],paramTable:[{a:"border",b:"添加边框",c:"Boolean",d:"true/false",e:"--",f:"--",g:"--"},{a:"striped",b:"添加斑马线",c:"Boolean",d:"true/false",e:"--",f:"--",g:"--"},{a:"fixed",b:"指定使用固定列功能",c:"Boolean",d:"true/false",e:"--",f:"--",g:"--"},{a:"height",b:"最大高度，会固定表头",c:"String",d:"px/百分比",e:"--",f:"--",g:"--"}],tableMethods:[{a:"rowClick",b:"点击某一行触发",c:"Function",d:"rowIndex，rowData，event",e:"rowIndex下标，rowData 整行数据，event节点信息"},{a:"cellMouseEnter",b:"鼠标进入某一行触发",c:"Function",d:"rowIndex，rowData，event",e:"rowIndex下标，rowData 整行数据，event节点信息"},{a:"cellMouseLeave",b:"鼠标离开某一行触发",c:"Function",d:"rowIndex，rowData，event",e:"rowIndex下标，rowData 整行数据，event节点信息"},{a:"rowClassName",b:"设置某一行样式",c:"Function",d:"rowIndex，rowData",e:"rowIndex下标，rowData 整行数据"}],paramTableTh:[{a:"fixed",b:"固定列,向左固定或者向右固定",c:"String",d:"left/right",e:"--",f:"--",g:"--"},{a:"width",b:"th的最小宽度，内容太少时会自动撑开，内容多时会变成max-width",c:"String",d:"px/百分比",e:"--",f:"--",g:"--"},{a:"show-overflow-tooltip",b:"超出省略，需要配合width或者min-width",c:"Boolean",d:"true/false",e:"false",f:"--",g:"--"}],paramTableTd:[{a:"fixed",b:"固定列，向左固定或者向右固定",c:"String",d:"left/right",e:"--",f:"--",g:"--"},{a:"width",b:"td的最小宽度，内容太少时会自动撑开，内容多时会变成max-width，并且会换行",c:"String",d:"px/百分比",e:"--",f:"--",g:"--"},{a:"show-overflow-tooltip",b:"超出省略，需要配合width或者min-width",c:"Boolean",d:"true/false",e:"false",f:"--",g:"--"}],databmx:'<zd-table border striped :data=\'data\'>\n  \x3c!-- 表头 --\x3e\n  <zd-table-head label=\'字段1\' />\n  <zd-table-head label=\'字段2\' v-for="(item,index) in 100" :key="index" />\n  \x3c!-- 主体 --\x3e\n  <template #tbody="scope">\n    <zd-table-body prop=\'name\' :data="scope.row" />\n    <zd-table-body prop=\'name2\' :data="scope.row" v-for="(item,index) in 100" :key="index" />\n  </template>\n</zd-table>',datareset:"<zd-table :data='data'>\n  \x3c!-- 表头 --\x3e\n  <zd-table-head label='字段1' />\n  <zd-table-head label='字段2' />\n  \x3c!-- 主体 --\x3e\n  <template #tbody=\"scope\">\n    <zd-table-body prop='name' :data=\"scope.row\" />\n    <zd-table-body prop='name2' :data=\"scope.row\" />\n  </template>\n</zd-table>",datajggdl:'<zd-table border striped :data=\'data\' fixed>\n  \x3c!-- 表头 --\x3e\n  <zd-table-head label=\'固定left\' fixed="left" />\n  <zd-table-head label=\'固定left\' fixed="left" />\n  <zd-table-head label=\'字段2\' v-for="(item,index) in 20" :key="index" />\n  <zd-table-head label=\'固定right\' fixed="right" />\n  <zd-table-head label=\'固定right\' fixed="right" />\n  \x3c!-- 主体 --\x3e\n  <template #tbody="scope">\n    <zd-table-body prop=\'name\' fixed="left" :data="scope.row" />\n    <zd-table-body prop=\'name\' fixed="left" :data="scope.row" />\n    <zd-table-body prop=\'name2\' :data="scope.row" v-for="(item,index) in 20" :key="index" />\n    <zd-table-body prop=\'name\' fixed="right" :data="scope.row" />\n    <zd-table-body prop=\'name\' fixed="right" :data="scope.row" />\n  </template>\n</zd-table>',datajggdl1:'<zd-table border striped :data=\'data\' fixed>\n  \x3c!-- 表头 --\x3e\n  <zd-table-head label=\'固定left\' fixed="left" />\n  <zd-table-head label=\'固定left\' fixed="left" />\n  <zd-table-head label=\'字段1\' v-for="(item,index) in 4" :key="index+\'a\'" />\n  <zd-table-head label=\'我也是固定\' fixed="left" />\n  <zd-table-head label=\'字段2\' v-for="(item,index) in 20" :key="index" />\n  <zd-table-head label=\'固定right\' fixed="right" />\n  <zd-table-head label=\'固定right\' fixed="right" />\n  \x3c!-- 主体 --\x3e\n  <template #tbody="scope">\n    <zd-table-body prop=\'name\' fixed="left" :data="scope.row" />\n    <zd-table-body prop=\'name\' fixed="left" :data="scope.row" />\n    <zd-table-body prop=\'name\' :data="scope.row" v-for="(item,index) in 4" :key="index+\'a\'" />\n    <zd-table-body prop=\'name\' fixed="left" :data="scope.row" />\n    <zd-table-body prop=\'name2\' :data="scope.row" v-for="(item,index) in 20" :key="index" />\n    <zd-table-body prop=\'name\' fixed="right" :data="scope.row" />\n    <zd-table-body prop=\'name\' fixed="right" :data="scope.row" />\n  </template>\n</zd-table>',datafixbiaotou:"<zd-table border striped :data='data' :height='300px'>\n  <zd-table-head label='字段1' />\n  <zd-table-head label='字段2' />\n  <template #tbody=\"scope\">\n    <zd-table-body prop='name' :data=\"scope.row\" />\n    <zd-table-body prop='name2' :data=\"scope.row\" />\n  </template>\n</zd-table>",datawidth:'<zd-table border striped :data=\'data\'>\n  \x3c!-- 表头 --\x3e\n  <zd-table-head label=\'字段1\' />\n  <zd-table-head label=\'这个是比较长的宽度\'/>\n  <zd-table-head label=\'字段K\'/>\n  <zd-table-head label=\'字段2\' v-for="(item,index) in 100" :key="index" />\n  \x3c!-- 主体 --\x3e\n  <template #tbody="scope">\n    <zd-table-body prop=\'name\' :data="scope.row" />\n    <zd-table-body prop=\'name3\' :data="scope.row" width="200px" />\n    <zd-table-body prop=\'name4\' :data="scope.row" />\n    <zd-table-body prop=\'name2\' :data="scope.row" v-for="(item,index) in 100" :key="index" />\n  </template>\n</zd-table>',datatooltip:'<zd-table border striped :data=\'data\'>\n  \x3c!-- 表头 --\x3e\n  <zd-table-head label=\'字段1\' />\n  <zd-table-head label=\'这个是比较长的宽度这个是比较长的宽度这个是比较长的宽度\'/>\n  <zd-table-head label=\'这个是比较长的宽度会超出省略这个是比较长的宽度会超出省略\' width="200px" show-overflow-tooltip/>\n  <zd-table-head label=\'字段2\' v-for="(item,index) in 100" :key="index" />\n  \x3c!-- 主体 --\x3e\n  <template #tbody="scope">\n    <zd-table-body prop=\'name\' :data="scope.row" />\n    <zd-table-body prop=\'name5\' :data="scope.row" width="200px" show-overflow-tooltip />\n    <zd-table-body prop=\'name5\' :data="scope.row" width="200px" show-overflow-tooltip />\n    <zd-table-body prop=\'name2\' :data="scope.row" v-for="(item,index) in 100" :key="index" />\n  </template>\n</zd-table>',datam1:'<zd-table border striped :data=\'data\' :row-click=\'rowClick\' :cell-mouse-enter="cellMouseEnter" :cell-mouse-leave="cellMouseLeave" >\n  \x3c!-- 表头 --\x3e\n  <zd-table-head label=\'序号\' />\n  <zd-table-head label=\'字段1\' />\n  <zd-table-head label=\'字段2\' v-for="(item,index) in 100" :key="index" />\n  \x3c!-- 主体 --\x3e\n  <template #tbody="scope">\n    <zd-table-body> {{scope.$index}} </zd-table-body>\n    <zd-table-body prop=\'name\' :data="scope.row" />\n    <zd-table-body prop=\'name2\' :data="scope.row" v-for="(item,index) in 100" :key="index" />\n  </template>\n</zd-table>\n\nrowClick (rowIndex, rowData, event) {\n  console.log(rowIndex, rowData, event)\n},\ncellMouseEnter (rowIndex, rowData, event) {\n  console.log(rowIndex, rowData, event)\n},\ncellMouseLeave (rowIndex, rowData, event) {\n  console.log(rowIndex, rowData, event)\n}',datam2:"<zd-table border striped :data='data' :row-class-name='rowClassName' >\n  \x3c!-- 表头 --\x3e\n  <zd-table-head label='序号' />\n  <zd-table-head label='字段1' />\n  <zd-table-head label='字段2' v-for=\"(item,index) in 100\" :key=\"index\" />\n  \x3c!-- 主体 --\x3e\n  <template #tbody=\"scope\">\n    <zd-table-body> {{scope.$index}} </zd-table-body>\n    <zd-table-body prop='name' :data=\"scope.row\" />\n    <zd-table-body prop='name2' :data=\"scope.row\" v-for=\"(item,index) in 100\" :key=\"index\" />\n  </template>\n</zd-table>\n\nrowClassName (rowIndex, rowData) {\n  if (rowIndex === 2) {\n    return 'light'\n  }\n}",loading:!0,data1:[]}},mounted:function(){this.data=[{name:"test1",name2:"test2",name3:"如果th设置了宽度，那么td不会跟着内容去撑，达到设置的宽度后会换行",name4:"因为我没有设置宽度，所以我跟着内容自动撑开了，而且不换行",name5:"我的内容比较多，所以超出省略悬浮上去会有悬浮框显示所有内容呢"},{name:"test3",name2:"test4",name3:"",name5:"内容比较少不用悬浮"},{name:"test5",name2:"test6",name3:""},{name:"test7",name2:"test8",name3:""}],this.data1=[];for(var t=0;t<100;t++)this.data1.push({name:"test1",name2:"test2"})},methods:{rowClick:function(t,e,a){console.log(t,e,a)},cellMouseEnter:function(t,e,a){console.log(t,e,a)},cellMouseLeave:function(t,e,a){console.log(t,e,a)},rowClassName:function(t,e){if(2===t)return"light"}}},L=W,M=(a("21bb"),Object(r["a"])(L,p,c,!1,null,null,null)),F=M.exports;d["default"].use(b["a"]);var D=[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],I=new b["a"]({routes:D}),P=I,Z=a("2ca7"),V=a.n(Z);a("46c6");d["default"].config.productionTip=!1,d["default"].use(V.a),new d["default"]({router:P,render:function(t){return t(s)}}).$mount("#app")},"8c86":function(t,e,a){},b47d:function(t,e,a){},d4b3:function(t,e,a){"use strict";var d=a("8c86"),l=a.n(d);l.a}});