(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{755:function(e,t,n){"use strict";n.r(t);n(45);var o=n(163),r={name:"OpenApiResponses",components:{OpenApiResponse:n(759).default},props:{isCb:Boolean,hPrefix:{type:String,default:""},responses:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:function(){return{}}}},methods:{tr:o.c}},c=(n(782),n(2)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-responses"},[t(e.isCb?"h3":"h2",{tag:"component",attrs:{id:"".concat(e.hPrefix,"responses")}},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.responses"))+"\n  ")]),e._v(" "),e._l(e.responses,(function(n,o){return t("div",{key:o,staticClass:"oapi-responses-item"},[t(e.isCb?"h4":"h3",{tag:"component",staticClass:"oapi-responses-item__status",attrs:{id:"".concat(e.hPrefix,"response-").concat(o)}},[e._v("\n      "+e._s(o)+"\n    ")]),e._v(" "),t("div",{staticClass:"oapi-responses-item__description",domProps:{innerHTML:e._s(e.tr(n,"description",e.currentLocale))}}),e._v(" "),t("OpenApiResponse",{attrs:{lite:"","current-locale":e.currentLocale,response:n}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiResponse:n(759).default})},761:function(e,t,n){var content=n(783);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("21db6df4",content,!0,{sourceMap:!1})},782:function(e,t,n){"use strict";n(761)},783:function(e,t,n){var o=n(5)((function(i){return i[1]}));o.push([e.i,".oapi-responses-item .oapi-response{margin-top:16px}",""]),o.locals={},e.exports=o}}]);