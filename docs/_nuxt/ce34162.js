(window.webpackJsonp=window.webpackJsonp||[]).push([[28,29],{771:function(e,t,r){var content=r(800);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("0bc6c97e",content,!0,{sourceMap:!1})},773:function(e,t,r){"use strict";r.r(t);r(45);var n={name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{getRoute:function(e){return{name:"openapi-".concat(this.path_doc,"/").concat(this.file,"/auth").concat(this.$openapidoc.I18nLocaleSuffix()),hash:"#"+e,meta:{locale:"en",path:"components",file:this.file,type:"get"}}}}},o=(r(799),r(3)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-sec-requirement"},[t("ul",e._l(e.securityRequirement,(function(r,n){return t("li",{key:n,attrs:{"data-scheme":n}},[t("nuxt-link",{staticClass:"oapi-sec-requirement-item",attrs:{to:e.getRoute(n)}},[t("span",{staticClass:"oapi-sec-requirement-item__scheme"},[e._v(e._s(n))]),e._v(" "),t("ul",{staticClass:"oapi-sec-requirement-item__scopes"},e._l(r,(function(r){return t("li",{key:r},[t("code",[e._v(e._s(r))])])})),0)])],1)})),0)])}),[],!1,null,"632c8438",null);t.default=component.exports},779:function(e,t,r){var content=r(812);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("21a237a7",content,!0,{sourceMap:!1})},786:function(e,t,r){"use strict";r.r(t);var n={name:"OpenApiSecurity",components:{OpenApiSecurityRequirement:r(773).default},props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}}},o=(r(811),r(3)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-route-sec"},[t("h2",{attrs:{id:"security"}},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.security"))+"\n  ")]),e._v(" "),t("ul",{staticClass:"oapi-route-sec__list"},e._l(e.security,(function(r,n){return t("li",{key:n},[t("OpenApiSecurityRequirement",{attrs:{"security-requirement":r,"current-locale":e.currentLocale,path_doc:e.path_doc,file:e.file}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityRequirement:r(773).default})},799:function(e,t,r){"use strict";r(771)},800:function(e,t,r){var n=r(7)((function(i){return i[1]}));n.push([e.i,".oapi-sec-requirement[data-v-632c8438]{margin-bottom:20px}.oapi-sec-requirement>ul>li[data-v-632c8438]{margin-bottom:8px}.oapi-sec-requirement>ul>li[data-v-632c8438]:last-child{margin-bottom:0}.oapi-sec-requirement ul[data-v-632c8438]{list-style:none;margin:0}.oapi-sec-requirement-item[data-v-632c8438]{background:#eaf5ff;border-radius:6px;display:block;list-style:none;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none}.oapi-sec-requirement-item__scheme[data-v-632c8438]{color:#000;font-family:var(--oapi-mono)}.oapi-sec-requirement-item__scopes[data-v-632c8438]{padding-left:16px;padding-top:8px}.oapi-sec-requirement-item__scopes li[data-v-632c8438]{margin-bottom:6px}.oapi-sec-requirement-item__scopes li code[data-v-632c8438]{background:#fff;color:#333}",""]),n.locals={},e.exports=n},811:function(e,t,r){"use strict";r(779)},812:function(e,t,r){var n=r(7)((function(i){return i[1]}));n.push([e.i,".oapi-route-sec__list,.oapi-route-sec__list ul{list-style:none;margin:0;padding:0}",""]),n.locals={},e.exports=n}}]);