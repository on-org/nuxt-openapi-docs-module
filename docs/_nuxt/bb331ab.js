(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{464:function(e,t,o){var content=o(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("d41c8358",content,!0,{sourceMap:!1})},469:function(e,t,o){"use strict";o(464)},470:function(e,t,o){var n=o(3)((function(i){return i[1]}));n.push([e.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.text-lg2{font-size:1.25rem}.font-medium{font-weight:500}",""]),n.locals={},e.exports=n},471:function(e,t,o){"use strict";o.r(t);var n=o(116),r={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:n.c}},l=(o(469),o(1)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg2 font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Request Bodies"))+": ")]),e._v(" "),e._l(e.requestBodies,(function(o,n){return t("div",{key:n,staticClass:"mt-4"},[t("h4",{staticClass:"text-base font-bold"},[e._v(e._s(n))]),e._v(" "),t("OpenApiRequestBody",{attrs:{requestBody:o,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiRequestBody:o(483).default})}}]);