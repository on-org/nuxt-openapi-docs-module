(window.webpackJsonp=window.webpackJsonp||[]).push([[26,9,10,14,20,21,27,31,32,34],{769:function(e,t,r){var content=r(795);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("7b1e496e",content,!0,{sourceMap:!1})},770:function(e,t,r){var content=r(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("266eacd6",content,!0,{sourceMap:!1})},771:function(e,t,r){"use strict";r.r(t);r(42);var o=r(168),n={name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{tr:o.d,getRoute:function(e){return{name:"openapi-".concat(this.path_doc,"/").concat(this.file,"/").concat(this.currentLocale,"-components"),hash:"#"+e,meta:{locale:"en",path:"components",file:this.file,type:"get"}}}}},l=(r(794),r(3)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-sec-requirement"},[t("ul",e._l(e.securityRequirement,(function(r,o){return t("li",{key:o,attrs:{"data-scheme":o}},[t("nuxt-link",{staticClass:"oapi-sec-requirement-item",attrs:{to:e.getRoute(o)}},[t("span",{staticClass:"oapi-sec-requirement-item__scheme"},[e._v(e._s(o))]),e._v(" "),t("ul",{staticClass:"oapi-sec-requirement-item__scopes"},e._l(r,(function(r){return t("li",{key:r},[t("code",[e._v(e._s(r))])])})),0)])],1)})),0)])}),[],!1,null,"4924d964",null);t.default=component.exports},772:function(e,t,r){"use strict";r.r(t);var o={props:{items:{type:Object,required:!0}},data:function(){return{isOpen:!1,preSelectedSnippet:"javascript",selectedSnippet:"javascript",selectedLibrary:"xmlhttprequest"}},computed:{selectedText:function(){return this.selectedSnippet+" / "+this.selectedLibrary}},methods:{handleItemClick:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t?(this.selectedSnippet=e,this.selectedLibrary=t,this.$emit("select",e,t),this.isOpen=!1):this.preSelectedSnippet=e}}},n=o,l=(r(796),r(3)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-dd-sub"},[t("button",{staticClass:"oapi-dd-sub__btn",class:{"oapi-dd-sub__btn--is-open":e.isOpen},attrs:{type:"button"},on:{click:function(t){e.isOpen=!e.isOpen}}},[t("b",[e._v(e._s(e.selectedText?e.selectedText:"Select Library"))]),e._v(" "),t("svg",{attrs:{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}})])]),e._v(" "),t("transition",{attrs:{name:"oapi-dropdown"}},[e.isOpen?t("ul",{staticClass:"oapi-dd-sub-list",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"}},e._l(e.items,(function(r,o){return t("li",{key:o,staticClass:"oapi-dd-sub-list__item",attrs:{role:"menuitem"},on:{click:function(t){return e.handleItemClick(o)}}},[r?[t("div",{staticClass:"oapi-dd-sub-item"},[t("span",{staticClass:"oapi-dd-sub-item__title"},[e._v(e._s(o))]),e._v(" "),t("span",{staticClass:"oapi-dd-sub-item__icon"},[t("svg",{attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),e._v(" "),e.preSelectedSnippet===o?t("ul",{staticClass:"oapi-dd-sub-sub-menu"},e._l(r,(function(r){return t("li",{key:r,staticClass:"oapi-dd-sub-sub-menu__item",on:{click:function(t){return e.handleItemClick(o,r)}}},[e._v("\n              "+e._s(r)+"\n            ")])})),0):e._e()]:[e._v("\n          "+e._s(r.snippet)+"\n        ")]],2)})),0):e._e()])],1)}),[],!1,null,"cd860a04",null);t.default=component.exports},776:function(e,t,r){var content=r(805);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("03c02f7f",content,!0,{sourceMap:!1})},777:function(e,t,r){var content=r(807);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("375684a5",content,!0,{sourceMap:!1})},778:function(e,t,r){var content=r(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("41b053fe",content,!0,{sourceMap:!1})},779:function(e,t,r){var content=r(811);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("819e888a",content,!0,{sourceMap:!1})},780:function(e,t,r){var content=r(813);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("f4ca4e4c",content,!0,{sourceMap:!1})},782:function(e,t,r){"use strict";r.r(t);var o=r(168),n={components:{OpenApiExampleObject:r(767).default},props:{examples:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.d}},l=(r(804),r(3)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"openapi-examples"},[t("h2",{attrs:{id:"examples"}},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Examples"))+"\n  ")]),e._v(" "),e._l(e.examples,(function(r,o){return t("div",{key:o,staticClass:"oapi-schema-block"},[t("OpenApiExampleObject",{attrs:{"current-locale":e.currentLocale,example:r,name:o,"name-tag":"h3"}})],1)}))],2)}),[],!1,null,"3db46096",null);t.default=component.exports;installComponents(component,{OpenApiExampleObject:r(767).default})},783:function(e,t,r){"use strict";r.r(t);r(35),r(48);var o=r(168),n={props:{path:{type:String,required:!0},method:{type:String,required:!0},tags:{type:Array,default:function(){return[]}},summary:{type:String,default:null},description:{type:String,default:null},deprecated:Boolean,currentLocale:{type:String,required:!0}},methods:{tr:o.d,getTagColor:o.b}},l=(r(806),r(3)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-route-header",class:{"oapi-route-header--deprecated":e.deprecated}},[t("h1",{staticClass:"oapi-route-header__title"},[t("span",{staticClass:"oapi-method-tag",class:"oapi-method-tag--".concat(e.method)},[e._v(e._s(e.method))]),e._v("\n    "+e._s(e.path)+"\n  ")]),e._v(" "),e.deprecated?t("div",{staticClass:"oapi-route-header__deprecated",attrs:{role:"alert"}},[t("span",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Deprecated")))])]):e._e(),e._v(" "),t("div",{staticClass:"oapi-route-header__summary"},[e._v("\n    "+e._s(e.summary)+"\n  ")]),e._v(" "),t("div",{staticClass:"oapi-route-header__tags"},e._l(e.tags,(function(r){return t("span",{key:r,staticClass:"oapi-route-header__tag"},[e._v(e._s(r))])})),0),e._v(" "),t("div",{staticClass:"oapi-route-header__description",domProps:{innerHTML:e._s(e.description)}})])}),[],!1,null,null,null);t.default=component.exports},784:function(e,t,r){"use strict";r.r(t);var o=r(168),n={name:"OpenApiSecurity",components:{OpenApiSecurityRequirement:r(771).default},props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{tr:o.d}},l=(r(808),r(3)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-route-sec"},[t("h2",[e._v("\n    "+e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Security"))+"\n  ")]),e._v(" "),t("ul",{staticClass:"oapi-route-sec__list"},e._l(e.security,(function(r,o){return t("li",{key:o},[t("OpenApiSecurityRequirement",{attrs:{"security-requirement":r,"current-locale":e.currentLocale,path_doc:e.path_doc,file:e.file}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityRequirement:r(771).default})},785:function(e,t,r){"use strict";r.r(t);r(35),r(48),r(39);var o=r(168),n={name:"OpenApiServer",props:{server:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data:function(){return{}},methods:{tr:o.d}},l=(r(810),r(3)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-server"},[e.server.url?t("div",{staticClass:"oapi-server__url"},[t("code",[e._v(e._s(e.server.url))])]):e._e(),e._v(" "),e.server.description?t("div",{staticClass:"oapi-server__description",domProps:{innerHTML:e._s(e.tr(e.server,"description",e.currentLocale))}}):e._e(),e._v(" "),e.server.variables&&Object.keys(e.server.variables).length?t("div",{staticClass:"oapi-server-vars"},[t("div",{staticClass:"oapi-server-vars__title"},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Variables"))+"\n    ")]),e._v(" "),t("ul",e._l(e.server.variables,(function(r,o){return t("li",{staticClass:"oapi-server-var"},[t("div",{staticClass:"oapi-server-var__name"},[t("code",[e._v(e._s(o))])]),e._v(" "),r.description?t("div",{staticClass:"oapi-server-var__description",domProps:{innerHTML:e._s(e.tr(r,"description",e.currentLocale))}}):e._e(),e._v(" "),r.default?t("div",{staticClass:"oapi-server-var__default"},[e._v("\n          "+e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Default"))+": "),t("code",[e._v(e._s(r.default))])]):e._e(),e._v(" "),r.enum?t("div",{staticClass:"oapi-server-var__enum"},[e._v("\n          "+e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Enum"))+":\n          "),e._l(r.enum,(function(r){return t("span",{key:r},[t("code",[e._v(e._s(r))]),e._v(e._s(" ")+"\n          ")])}))],2):e._e()])})),0)]):e._e()])}),[],!1,null,null,null);t.default=component.exports},786:function(e,t,r){"use strict";r.r(t);var o=r(827),n=r.n(o),l=r(772),d=r(168),c=new n.a,m=c.config(),v={name:"CodeSimples",components:{CustomDropdownWithSubMenu:l.default},props:{baseUrl:{type:String,required:!1,default:""},url:{type:String,required:!0},method:{type:String,required:!1,default:"GET"},params:{type:Array,required:!1,default:function(){return[]}},mimeType:{type:String,required:!1,default:"application/x-www-form-urlencoded"}},data:function(){return{snippetIndex:"javascript",snippetLibraryIndex:"xmlhttprequest",code:"",html:"",showPopup:!1,onPopupIndex:null,vals:[]}},computed:{config:function(){return m}},watch:{},mounted:function(){this.genCode()},methods:{copyToClipboard:function(e){Object(d.a)(this.code,e)},onLangClick:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.snippetIndex=e,this.snippetLibraryIndex=t,this.genCode()},genCode:function(){var e,t=this.method.toUpperCase();c.baseUrl(null!==(e=this.baseUrl)&&void 0!==e?e:"https://".concat(location.host)),c.url(this.url),c.method(t),c.params(JSON.parse(JSON.stringify(this.params))),c.mimeType(this.mimeType),c.lang(this.snippetIndex),c.library(this.snippetLibraryIndex),this.code=c.generate(),this.html=c.generateHighlight()}}},f=v,_=(r(812),r(3)),component=Object(_.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-code-simple"},[t("CustomDropdownWithSubMenu",{attrs:{items:e.config},on:{select:e.onLangClick}}),e._v(" "),t("div",{staticClass:"oapi-code-panel"},[t("div",{staticClass:"oapi-code-panel__body"},[t("button",{staticClass:"oapi-code-panel__btn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.copyToClipboard.apply(null,arguments)}}},[e._v("\n        Copy\n      ")]),e._v(" "),t("pre",{staticClass:"language line-numbers",class:"language-".concat(e.snippetIndex)},[t("code",{staticClass:"language",domProps:{innerHTML:e._s(e.html)}})])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomDropdownWithSubMenu:r(772).default})},794:function(e,t,r){"use strict";r(769)},795:function(e,t,r){var o=r(7)((function(i){return i[1]}));o.push([e.i,".oapi-sec-requirement[data-v-4924d964]{margin-bottom:20px}.oapi-sec-requirement>ul>li[data-v-4924d964]{margin-bottom:8px}.oapi-sec-requirement>ul>li[data-v-4924d964]:last-child{margin-bottom:0}.oapi-sec-requirement ul[data-v-4924d964]{list-style:none;margin:0}.oapi-sec-requirement-item[data-v-4924d964]{background:#eaf5ff;border-radius:6px;display:block;list-style:none;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none}.oapi-sec-requirement-item__scheme[data-v-4924d964]{color:#000;font-family:var(--oapi-mono)}.oapi-sec-requirement-item__scopes[data-v-4924d964]{padding-left:16px;padding-top:8px}.oapi-sec-requirement-item__scopes li[data-v-4924d964]{margin-bottom:6px}.oapi-sec-requirement-item__scopes li code[data-v-4924d964]{background:#fff;color:#333}",""]),o.locals={},e.exports=o},796:function(e,t,r){"use strict";r(770)},797:function(e,t,r){var o=r(7)((function(i){return i[1]}));o.push([e.i,".oapi-dd-sub[data-v-cd860a04]{position:relative}.oapi-dd-sub button.oapi-dd-sub__btn[data-v-cd860a04]{align-items:center;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);color:#374151;cursor:pointer;display:inline-flex;font-size:.875rem;font-weight:500;justify-content:center;line-height:1.25rem;max-width:100%;padding:.5rem 1rem}.oapi-dd-sub button.oapi-dd-sub__btn[data-v-cd860a04]:hover{background-color:#f9fafb}.oapi-dd-sub button.oapi-dd-sub__btn[data-v-cd860a04]:focus-visible{outline:2px solid rgba(156,163,175,var(--tw-text-opacity));outline-offset:2px}.oapi-dd-sub button.oapi-dd-sub__btn svg[data-v-cd860a04]{fill:currentColor;height:1rem;transition:transform .3s ease-in-out;width:1rem}.oapi-dd-sub button.oapi-dd-sub__btn--is-open svg[data-v-cd860a04]{transform:rotate(180deg)}.oapi-dd-sub-list[data-v-cd860a04]{background-color:#fff;border-radius:.375rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);left:0;list-style:none;margin-left:0;margin-top:.5rem;max-height:300px;overflow-x:auto;padding:0;position:absolute;transform-origin:top right;width:14rem;z-index:10}.oapi-dd-sub-list[data-v-cd860a04]:focus{outline:none}@media(max-width:639px){.oapi-dd-sub-list[data-v-cd860a04]{background-color:#fff;bottom:0;left:0;position:absolute;right:0;top:0;z-index:-1}}.oapi-dd-sub-list__item[data-v-cd860a04]{border-width:1px;color:#374151;cursor:pointer;display:block;font-size:.875rem;line-height:1.25rem;margin:0;padding:.5rem 1rem}.oapi-dd-sub-list__item[data-v-cd860a04]:hover{background-color:#fff;color:#1f2937}.oapi-dd-sub-item[data-v-cd860a04]{cursor:pointer;display:flex;justify-content:space-between}.oapi-dd-sub-item__icon[data-v-cd860a04],.oapi-dd-sub-item__title[data-v-cd860a04]{display:flex;flex-grow:1}.oapi-dd-sub-item__icon[data-v-cd860a04]{justify-content:flex-end}.oapi-dd-sub-item__icon svg[data-v-cd860a04]{align-self:center;display:inline;display:initial;height:1rem;margin-left:.5rem;width:1rem}.oapi-dropdown-enter-active[data-v-cd860a04],.oapi-dropdown-leave-active[data-v-cd860a04]{transition:opacity .2s ease,transform .2s ease}.oapi-dropdown-enter[data-v-cd860a04],.oapi-dropdown-enter-active[data-v-cd860a04],.oapi-dropdown-leave-active[data-v-cd860a04],.oapi-dropdown-leave-to[data-v-cd860a04]{opacity:0;transform:translateY(-.5rem) scale(.98)}.oapi-dd-sub-sub-menu[data-v-cd860a04]{list-style:none;margin:0;padding:0}.oapi-dd-sub-sub-menu__item[data-v-cd860a04]{background-color:#f3f4f6;color:#374151;display:block;font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem}.oapi-dd-sub-sub-menu__item[data-v-cd860a04]:hover{background-color:#e5e7eb;color:#111827}@media(max-width:639px){.oapi-dropdown-enter-active[data-v-cd860a04],.oapi-dropdown-leave-active[data-v-cd860a04]{transition:opacity .2s ease-out,transform .2s ease-out}.oapi-dropdown-enter[data-v-cd860a04],.oapi-dropdown-leave-to[data-v-cd860a04]{opacity:0;transform:translateY(-20px)}.oapi-dropdown-leave-active[data-v-cd860a04]{position:absolute;width:100%}}",""]),o.locals={},e.exports=o},804:function(e,t,r){"use strict";r(776)},805:function(e,t,r){var o=r(7)((function(i){return i[1]}));o.push([e.i,".openapi-examples[data-v-3db46096]{margin-bottom:1.5rem}.openapi-examples h4[data-v-3db46096]{margin-bottom:.5rem;margin-top:1.5rem}",""]),o.locals={},e.exports=o},806:function(e,t,r){"use strict";r(777)},807:function(e,t,r){var o=r(7)((function(i){return i[1]}));o.push([e.i,".oapi-route-header__title{font-family:var(--oapi-mono)!important}.oapi-route-header__summary{color:#999;font-size:1.1rem;font-weight:600;margin-bottom:16px}.oapi-route-header .oapi-method-tag{border:2px solid #ddd;border-radius:6px;font-size:1.5rem;margin-right:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.oapi-route-header--deprecated .oapi-route-header__title{opacity:.6}.oapi-route-header__deprecated{margin-bottom:8px}.oapi-route-header__deprecated span{background:#e1e1e1;border-radius:4px;color:#666;display:inline-block;font-weight:600;padding:8px 16px}.oapi-route-header__tags{align-items:center;display:flex;flex-wrap:wrap;margin:0 -4px 16px}.oapi-route-header__tag{align-items:center;border:1px solid #ccc;border-radius:4px;display:inline-flex;line-height:1;margin:0 4px 4px;padding:6px 8px}",""]),o.locals={},e.exports=o},808:function(e,t,r){"use strict";r(778)},809:function(e,t,r){var o=r(7)((function(i){return i[1]}));o.push([e.i,".oapi-route-sec__list,.oapi-route-sec__list ul{list-style:none;margin:0;padding:0}",""]),o.locals={},e.exports=o},810:function(e,t,r){"use strict";r(779)},811:function(e,t,r){var o=r(7)((function(i){return i[1]}));o.push([e.i,".oapi-server{border:1px solid #e2e2e2;border-radius:6px;padding:16px}.oapi-server,.oapi-server__url{margin-bottom:16px}.oapi-server__url code{font-size:1rem}.oapi-server__description{margin-bottom:8px}.oapi-server-vars__title{color:#666;font-weight:600;margin-bottom:8px}.oapi-server-vars ul{margin:0;padding:0 0 0 16px}.oapi-server-var{margin-bottom:16px}.oapi-server-var:last-child{margin-bottom:0}",""]),o.locals={},e.exports=o},812:function(e,t,r){"use strict";r(780)},813:function(e,t,r){var o=r(7)((function(i){return i[1]}));o.push([e.i,".oapi-code-panel__body{position:relative}.oapi-code-panel button.oapi-code-panel__btn{background-color:#00a2fb;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:12px;margin:0 2px;min-width:50px;padding:6px 10px;position:absolute;right:10px;top:10px;z-index:99}",""]),o.locals={},e.exports=o},824:function(e,t,r){"use strict";r.r(t);var o=r(32),n=(r(39),r(30),r(85),r(6),r(791)),l=r(782),d=r(763),c=r(764),m=r(765),v=r(783),f=r(784),_=r(785),h=r(168),y=r(786),x={name:"OpenApiRoute",components:{OpenApiCallbacks:n.default,OpenApiResponses:m.default,OpenApiRequestBody:c.default,OpenApiSecurity:f.default,OpenApiParameters:d.default,OpenApiExamples:l.default,CodeSimples:y.default,OpenApiServer:_.default,OpenApiRouteHeader:v.default},props:{route:{type:[Object,Array],required:!0},subParams:{required:!1},path_doc:{type:String,required:!0},file:{type:String,required:!0},currentLocale:{type:String,required:!0},url:{type:String,required:!1,default:""},server:{type:String,required:!1,default:""},method:{type:String,required:!1,default:"GET"},components:{type:Object,default:function(){return{}}}},data:function(){return{lang:"javascript",mimeType:"application/x-www-form-urlencoded",params:[]}},computed:{routeInfo:function(){return this.$openapidoc.getRouteInfo(this.file,this.url,this.method)}},mounted:function(){this.genParamsToSimple()},methods:{tr:h.d,genParamsToSimple:function(){if(this.params=[],this.route.requestBody&&Object.keys(this.route.requestBody).length){var e=Object.keys(this.route.requestBody)[0],t=this.route.requestBody[e];if(t&&Object.keys(t).length){this.mimeType=Object.keys(t)[0];var r=t[this.mimeType];if(r.schema){var n=r.schema.properties;for(var l in n){var d,c=n[l]||{},m="";if(c.example)m=null!==(d=c.example)&&void 0!==d?d:"";if(""===m&&c.type&&(m=this.convertStringFormatToMd(c.type,l)),"array"===c.type)c.items.type?m="array"===c.items.type||"object"===c.items.type?[this.handleNestedArrayOrObject(c,l)]:[this.convertStringFormatToMd(c.items.type,l)]:c.items.enum?m=[c.items.enum[0]]:(c.items.properties||c.items.additionalProperties)&&(m=[this.handleNestedArrayOrObject(c.items,l)]),this.params.push({in:"postData",name:l,value:JSON.parse(JSON.stringify(m))});else if("object"===c.type){if(c.additionalProperties&&c.additionalProperties.type)m=Object(o.a)({},l,this.convertStringFormatToMd(c.additionalProperties.type,l));else if(c.properties)for(var v in m={},c.properties){var f=c.properties[v]||{};f.type?m[v]=this.convertStringFormatToMd(f.type,v):(f.properties||f.additionalProperties)&&(m[v]=this.handleNestedArrayOrObject(f,l))}this.params.push({in:"postData",name:l,value:JSON.parse(JSON.stringify(m))})}else this.params.push({in:"postData",name:l,value:m.toString()})}}}}for(var i in this.route.parameters){var _,h,y,x,O,param=this.route.parameters[i],S=null!==(_=param.name)&&void 0!==_?_:"",C=null!==(h=param.in)&&void 0!==h?h:"",w="";if(param.schema)w=null!==(y=param.schema.default)&&void 0!==y?y:"";else w=null!==(x=param.default)&&void 0!==x?x:"";if(""===w&&param.type&&(w=this.convertStringFormatToMd(param.type,S)),""===w&&param.schema&&param.schema.type&&(w=this.convertStringFormatToMd(param.schema.type,S)),""===w&&param.enum)w=null!==(O=param.enum[0])&&void 0!==O?O:"";this.params.push({in:C,name:S,value:w.toString()})}var k=this.$openapidoc.getParams();for(var L in k){var j=k[L];""===j.value&&j.type&&(j.value=this.convertStringFormatToMd(j.type,j.name)),this.params.push({in:j.pos,name:j.name,value:JSON.parse(JSON.stringify(j.value))})}},handleNestedArrayOrObject:function(e,t){if("array"===e.type){if(e.items.type)return"array"===e.items.type?[this.handleNestedArrayOrObject(e.items,t)]:"object"===e.items.type?[this.handleNestedObject(e.items)]:[this.convertStringFormatToMd(e.items.type)];if(e.items.enum)return[e.items.enum[0]];if(e.items.properties||e.items.additionalProperties)return[this.handleNestedObject(e.items)]}else if("object"===e.type)return this.handleNestedObject(e);return""},handleNestedObject:function(e){if(e.additionalProperties&&e.additionalProperties.type)return Object(o.a)({},propertyName,this.convertStringFormatToMd(e.additionalProperties.type,propertyName));if(e.properties){var t={};for(var r in e.properties){var n=e.properties[r]||{};n.type?t[r]=this.convertStringFormatToMd(n.type,r):(n.properties||n.additionalProperties)&&(t[r]=this.handleNestedArrayOrObject(n,r))}return t}return""},convertStringFormatToMd:function(e,t){switch(e){case"date":return"YYYY-MM-DD";case"date-time":return"YYYY-MM-DDTHH:MM:SSZ";case"email":return"example@example.com";case"hostname":return"example.com";case"ipv4":return"192.0.2.0";case"ipv6":return"2001:0db8:85a3:0000:0000:8a2e:0370:7334";case"uri":return"https://example.com";case"integer":case"number":return"1";case"string":return"{".concat(t,"}");default:return e}}}},O=r(3),component=Object(O.a)(x,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-route"},[t("OpenApiRouteHeader",{attrs:{path:e.url,method:e.method,tags:e.route.tags,summary:e.tr(e.route,"summary",e.currentLocale),description:e.tr(e.route,"description",e.currentLocale),deprecated:e.route.deprecated,"current-locale":e.currentLocale}}),e._v(" "),e.route.servers?t("div",{staticClass:"oapi-route__servers"},[t("h2",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Servers")))]),e._v(" "),e._l(e.route.servers,(function(r){return t("OpenApiServer",{key:r.url,attrs:{server:r,"current-locale":e.currentLocale}})}))],2):e._e(),e._v(" "),e.routeInfo?t("div",{staticClass:"oapi-doc-info"},[t("h2",[e._v("\n      "+e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Info"))+":\n    ")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.routeInfo)}})]):e._e(),e._v(" "),e.route.security?t("OpenApiSecurity",{attrs:{security:e.route.security,path_doc:e.path_doc,file:e.file,"current-locale":e.currentLocale}}):e._e(),e._v(" "),e.route.parameters?t("OpenApiParameters",{attrs:{parameters:e.route.parameters,"current-locale":e.currentLocale,components:e.components}}):e._e(),e._v(" "),e.subParams?t("OpenApiParameters",{attrs:{parameters:e.subParams,"current-locale":e.currentLocale,components:e.components,title:"Global params"}}):e._e(),e._v(" "),e.route.requestBody?t("OpenApiRequestBody",{attrs:{"request-body":e.route.requestBody,"current-locale":e.currentLocale,components:e.components}}):e._e(),e._v(" "),e.route.responses?t("OpenApiResponses",{attrs:{responses:e.route.responses,"current-locale":e.currentLocale,components:e.components}}):e._e(),e._v(" "),e.url?t("client-only",[t("h2",{staticClass:"text-lg font-bold mb-2"},[e._v("\n      "+e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Code simple"))+":\n    ")]),e._v(" "),t("CodeSimples",{attrs:{url:e.url,"base-url":e.server,method:e.method,"mime-type":e.mimeType,params:e.params}})],1):e._e(),e._v(" "),e.route.examples?t("OpenApiExamples",{attrs:{examples:e.route.examples,"current-locale":e.currentLocale}}):e._e(),e._v(" "),e.route.callbacks?t("OpenApiCallbacks",{attrs:{callbacks:e.route.callbacks,server:e.server,"current-locale":e.currentLocale,components:e.components,simples:e.simples,params:e.params,file:e.file,path_doc:e.path_doc}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiRouteHeader:r(783).default,OpenApiServer:r(785).default,OpenApiSecurity:r(784).default,OpenApiParameters:r(763).default,OpenApiRequestBody:r(764).default,OpenApiResponses:r(765).default,CodeSimples:r(786).default,OpenApiExamples:r(782).default,OpenApiCallbacks:r(791).default})},831:function(e,t,r){var o=r(22),n=r(26),l=r(86),d=r(237),c=r(18),m=o.RegExp,v=m.prototype;n&&c((function(){var e=!0;try{m(".","d")}catch(t){e=!1}var t={},r="",o=e?"dgimsy":"gimsy",n=function(e,o){Object.defineProperty(t,e,{get:function(){return r+=o,!0}})},l={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var d in e&&(l.hasIndices="d"),l)n(d,l[d]);return Object.getOwnPropertyDescriptor(v,"flags").get.call(t)!==o||r!==o}))&&l(v,"flags",{configurable:!0,get:d})}}]);