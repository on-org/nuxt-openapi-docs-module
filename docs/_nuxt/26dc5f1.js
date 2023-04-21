(window.webpackJsonp=window.webpackJsonp||[]).push([[12,27],{764:function(e,t,c){var content=c(787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(6).default)("1255228d",content,!0,{sourceMap:!1})},770:function(e,t,c){"use strict";c.r(t);c(4),c(36),c(27),c(82),c(46);var o=c(163),n={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},computed:{formattedIn:function(){if(!this.securityScheme.in)return null;var e=this.securityScheme.in.toString();return e.charAt(0).toUpperCase()+e.slice(1)}},methods:{tr:o.d}},r=(c(786),c(2)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-sec-scheme"},[t("div",{staticClass:"oapi-sec-scheme__type"},[t("span",[e._v(e._s(e.securityScheme.type))])]),e._v(" "),"http"===e.securityScheme.type&&e.securityScheme.scheme?t("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.scheme"))+": "),t("code",[e._v(e._s(e.securityScheme.scheme))])]):e._e(),e._v(" "),"http"===e.securityScheme.type&&"bearer"===e.securityScheme.scheme&&e.securityScheme.bearerFormat?t("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.bearer_format"))+": "),t("code",[e._v(e._s(e.securityScheme.bearerFormat))])]):e._e(),e._v(" "),"apiKey"===e.securityScheme.type&&e.securityScheme.in?t("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.in"))+": "),t("code",[e._v(e._s(e.securityScheme.in))])]):e._e(),e._v(" "),"apiKey"===e.securityScheme.type&&e.formattedIn&&e.securityScheme.name?t("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n    "+e._s(e.formattedIn)+" name: "),t("code",[e._v(e._s(e.securityScheme.name))])]):e._e(),e._v(" "),"oauth2"===e.securityScheme.type&&e.securityScheme.flows?t("div",{staticClass:"oapi-sec-scheme__flows"},e._l(e.securityScheme.flows,(function(c,o){return t("div",{key:o,staticClass:"oapi-sec-scheme__flow"},[t("h4",[e._v(e._s(o))]),e._v(" "),c.authorizationUrl?t("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n        "+e._s(e.$openapidoc.getLocaleText("openapidoc.authorization_url"))+": "),t("code",[e._v(e._s(c.authorizationUrl))])]):e._e(),e._v(" "),c.tokenUrl?t("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n        "+e._s(e.$openapidoc.getLocaleText("openapidoc.token_url"))+": "),t("code",[e._v(e._s(c.tokenUrl))])]):e._e(),e._v(" "),c.refreshUrl?t("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n        "+e._s(e.$openapidoc.getLocaleText("openapidoc.refresh_url"))+": "),t("code",[e._v(e._s(c.refreshUrl))])]):e._e(),e._v(" "),c.scopes&&Object.keys(c.scopes).length?t("div",{staticClass:"oapi-sec-scheme-scopes"},[t("span",{staticClass:"oapi-sec-scheme-scopes__title"},[e._v(e._s(e.$openapidoc.getLocaleText("openapidoc.scopes"))+":")]),e._v(" "),t("ul",{staticClass:"oapi-sec-scheme-scopes__list"},e._l(c.scopes,(function(c,o){return t("li",{key:o,staticClass:"oapi-sec-scheme-scope"},[t("code",[e._v(e._s(o))]),e._v(" "),c?t("div",{staticClass:"oapi-sec-scheme-scope__descr"},[e._v("\n              "+e._s(c)+"\n            ")]):e._e()])})),0)]):e._e()])})),0):e._e()])}),[],!1,null,null,null);t.default=component.exports},786:function(e,t,c){"use strict";c(764)},787:function(e,t,c){var o=c(5)((function(i){return i[1]}));o.push([e.i,".oapi-sec-scheme{border:1px solid #e2e2e2;border-radius:6px;margin-bottom:16px;padding:16px}.oapi-sec-scheme__type{margin-bottom:1rem}.oapi-sec-scheme__type span{background:rgba(0,0,0,.03);border:1px solid #e2e2e2;border-radius:16px;color:#999;display:inline-block;font-family:var(--oapi-mono);font-size:.825rem;font-weight:600;line-height:1.2;padding:8px 16px}.oapi-sec-scheme__param{font-size:.875rem;margin-bottom:.5rem}.oapi-sec-scheme-scopes{font-size:.875rem}.oapi-sec-scheme-scopes__title{display:block;font-weight:600;margin-bottom:8px}.oapi-sec-scheme-scopes__list{list-style:none;margin:0;padding:0 0 0 1rem}.oapi-sec-scheme-scopes .oapi-sec-scheme-scope{margin:0 0 16px}",""]),o.locals={},e.exports=o},806:function(e,t,c){"use strict";c.r(t);c(32),c(44);var o=c(756),n=c(757),r=c(779),_=c(758),l=c(759),d=c(770),m=c(163),h={components:{OpenApiParameter:_.default,OpenApiResponse:l.default,OpenApiSecurityScheme:d.default,OpenApiMediaTypes:n.default,OpenApiExampleObject:o.default,OpenApiObjectModel:r.default},props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}},methods:{tr:m.d}},v=c(2),component=Object(v.a)(h,(function(){var e=this,t=e._self._c;return t("div",[e.components.schemas?t("div",[t("h2",{attrs:{id:"schemas"}},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText("openapidoc.schemas"))+"\n    ")]),e._v(" "),e._l(e.components.schemas,(function(c,o){return t("div",{key:o,staticClass:"oapi-schema-block"},[t("h3",{domProps:{textContent:e._s(o)}}),e._v(" "),c.title?t("div",{staticClass:"oapi-schema-block__title",domProps:{innerHTML:e._s(e.tr(c,"title",e.currentLocale))}}):e._e(),e._v(" "),c.description?t("div",{staticClass:"oapi-schema-block__description",domProps:{innerHTML:e._s(e.tr(c,"description",e.currentLocale))}}):e._e(),e._v(" "),t("OpenApiObjectModel",{staticClass:"oapi-schema-block__model",attrs:{schema:c,"current-locale":e.currentLocale,root:""}})],1)}))],2):e._e(),e._v(" "),e.components.examples?t("div",[t("h2",{attrs:{id:"examples"}},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText("openapidoc.examples"))+"\n    ")]),e._v(" "),e._l(e.components.examples,(function(c,o){return t("div",{key:o,staticClass:"oapi-schema-block"},[t("OpenApiExampleObject",{attrs:{example:c,name:o,"current-locale":e.currentLocale,"name-tag":"h3"}})],1)}))],2):e._e(),e._v(" "),e.components.requestBodies?t("div",[t("h2",{attrs:{id:"request-bodies"}},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText("openapidoc.request_bodies"))+"\n    ")]),e._v(" "),e._l(e.components.requestBodies,(function(c,o){return t("div",{key:o,staticClass:"oapi-schema-block"},[t("h3",{domProps:{textContent:e._s(o)}}),e._v(" "),t("div",{staticClass:"oapi-schema-block__required"},[e._v("\n        "+e._s(e.$openapidoc.getLocaleText("openapidoc.required"))+"\n      ")]),e._v(" "),c.description?t("div",{staticClass:"oapi-schema-block__description",domProps:{innerHTML:e._s(e.tr(c,"description",e.currentLocale))}}):e._e(),e._v(" "),t("OpenApiMediaTypes",{attrs:{data:c.content,"current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.responses?t("div",[t("h2",{attrs:{id:"responses"}},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText("openapidoc.responses"))+"\n    ")]),e._v(" "),e._l(e.components.responses,(function(c,o){return t("div",{key:o,staticClass:"oapi-schema-block"},[t("h3",{domProps:{textContent:e._s(o)}}),e._v(" "),c.description?t("div",{staticClass:"oapi-schema-block__description",domProps:{innerHTML:e._s(e.tr(c,"description",e.currentLocale))}}):e._e(),e._v(" "),t("OpenApiResponse",{attrs:{response:c,"current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.parameters?t("div",[t("h2",{attrs:{id:"parameters"}},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText("openapidoc.rarameters"))+"\n    ")]),e._v(" "),e._l(e.components.parameters,(function(c,o){return t("div",{key:o,staticClass:"oapi-schema-block"},[t("h3",{domProps:{textContent:e._s(o)}}),e._v(" "),c.description?t("div",{staticClass:"oapi-schema-block__description",domProps:{innerHTML:e._s(e.tr(c,"description",e.currentLocale))}}):e._e(),e._v(" "),t("OpenApiParameter",{attrs:{data:c,"hide-description":"","current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.headers?t("div",[t("h2",{attrs:{id:"headers"}},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText("openapidoc.headers"))+"\n    ")]),e._v(" "),e._l(e.components.headers,(function(header,c){return t("div",{key:c,staticClass:"oapi-schema-block"},[t("h3",{domProps:{textContent:e._s(c)}}),e._v(" "),header.description?t("div",{staticClass:"oapi-schema-block__description",domProps:{innerHTML:e._s(e.tr(header,"description",e.currentLocale))}}):e._e(),e._v(" "),t("OpenApiParameter",{attrs:{data:header,"current-locale":e.currentLocale,"hide-name":"","hide-description":""}})],1)}))],2):e._e(),e._v(" "),e.components.securitySchemes?t("div",[t("h2",{attrs:{id:"security-schemes"}},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText("openapidoc.security_schemes"))+"\n    ")]),e._v(" "),e._l(e.components.securitySchemes,(function(c,o){return t("div",{key:o,staticClass:"oapi-schema-block"},[t("h3",{domProps:{textContent:e._s(o)}}),e._v(" "),c.description?t("div",{staticClass:"oapi-schema-block__description",domProps:{innerHTML:e._s(e.tr(c,"description",e.currentLocale))}}):e._e(),e._v(" "),t("OpenApiSecurityScheme",{attrs:{"current-locale":e.currentLocale,"security-scheme":c}})],1)}))],2):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiObjectModel:c(779).default,OpenApiExampleObject:c(756).default,OpenApiMediaTypes:c(757).default,OpenApiResponse:c(759).default,OpenApiParameter:c(758).default,OpenApiSecurityScheme:c(770).default})}}]);