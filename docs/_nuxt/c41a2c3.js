(window.webpackJsonp=window.webpackJsonp||[]).push([[16,15],{768:function(e,t,n){"use strict";n.r(t);n(6),n(34),n(50);var o={name:"OpenApiExampleObject",props:{lite:Boolean,name:{type:String,default:""},nameTag:{type:String,default:"h3"},example:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data:function(){return{}},computed:{valueFormatted:function(){return this.example.value?JSON.stringify(this.example.value,null,2):null}}},r=(n(837),n(3)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-example-obj"},[e.name?t(e.nameTag,{tag:"component",staticClass:"oapi-example-obj__name"},[e._v("\n    "+e._s(e.name)+"\n  ")]):e._e(),e._v(" "),e.example.summary?t("div",{staticClass:"oapi-example-obj__summary",domProps:{innerHTML:e._s(e.$openapidocRef.tr(e.example,"summary",e.currentLocale))}}):e._e(),e._v(" "),e.example.description?t("div",{staticClass:"oapi-example-obj__description",domProps:{innerHTML:e._s(e.$openapidocRef.tr(e.example,"description",e.currentLocale))}}):e._e(),e._v(" "),e.valueFormatted?t("div",{staticClass:"oapi-example-obj__value"},[t("pre",{domProps:{innerHTML:e._s(e.valueFormatted)}})]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},778:function(e,t,n){var content=n(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("36efae23",content,!0,{sourceMap:!1})},785:function(e,t,n){"use strict";n.r(t);var o={components:{OpenApiExampleObject:n(768).default},props:{examples:{type:Object,required:!0},currentLocale:{type:String,required:!0}}},r=(n(808),n(3)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"openapi-examples"},[t("h2",{attrs:{id:"examples"}},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.examples"))+"\n  ")]),e._v(" "),e._l(e.examples,(function(n,o){return t("div",{key:o,staticClass:"oapi-schema-block"},[t("OpenApiExampleObject",{attrs:{"current-locale":e.currentLocale,example:n,name:o,"name-tag":"h3"}})],1)}))],2)}),[],!1,null,"34d9ef07",null);t.default=component.exports;installComponents(component,{OpenApiExampleObject:n(768).default})},808:function(e,t,n){"use strict";n(778)},809:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,".openapi-examples[data-v-34d9ef07]{margin-bottom:1.5rem}.openapi-examples h4[data-v-34d9ef07]{margin-bottom:.5rem;margin-top:1.5rem}",""]),o.locals={},e.exports=o},835:function(e,t,n){var content=n(838);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("7721bb2f",content,!0,{sourceMap:!1})},837:function(e,t,n){"use strict";n(835)},838:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,".oapi-example-obj__summary{color:#999;font-size:.825rem;font-weight:600;margin-bottom:.5rem;margin-top:-.8rem}.oapi-example-obj__description{margin-bottom:1rem}",""]),o.locals={},e.exports=o}}]);