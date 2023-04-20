(window.webpackJsonp=window.webpackJsonp||[]).push([[57,10,17,25,26,33],{475:function(e,t,n){var content=n(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("09cf48f4",content,!0,{sourceMap:!1})},476:function(e,t,n){var content=n(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("d41c8358",content,!0,{sourceMap:!1})},477:function(e,t,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("60ee6faa",content,!0,{sourceMap:!1})},478:function(e,t,n){"use strict";n(475)},479:function(e,t,n){var r=n(3)((function(i){return i[1]}));r.push([e.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),r.locals={},e.exports=r},480:function(e,t,n){"use strict";n.r(t);n(41),n(54),n(6);var r=n(116),o={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},c=(n(478),n(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[t("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[e._v("\n    "+e._s(e.tr(e.securityScheme,"name",e.currentLocale))+"\n  ")]),e._v(" "),"http"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Scheme:")]),e._v(" "+e._s(e.securityScheme.scheme))]),e._v(" "),e.securityScheme.bearerFormat?t("p",[t("strong",[e._v("Bearer format:")]),e._v(" "+e._s(e.securityScheme.bearerFormat)+"\n    ")]):e._e(),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"apiKey"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.securityScheme.name))]),e._v(" "),t("p",[t("strong",[e._v("In:")]),e._v(" "+e._s(e.securityScheme.in))]),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"oauth2"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),e.securityScheme.flows?t("p",[t("strong",[e._v("Flows:")])]):e._e(),e._v(" "),t("ul",e._l(e.securityScheme.flows,(function(n,r){return t("li",{key:r},[t("p",[t("strong",[e._v(e._s(r)+":")])]),e._v(" "),t("ul",[n.authorizationUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Authorization URL"))+":")]),e._v(" "+e._s(n.authorizationUrl)+"\n          ")]):e._e(),e._v(" "),n.tokenUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Token URL"))+":")]),e._v(" "+e._s(n.tokenUrl)+"\n          ")]):e._e(),e._v(" "),n.refreshUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Refresh URL"))+":")]),e._v(" "+e._s(n.refreshUrl)+"\n          ")]):e._e(),e._v(" "),n.scopes?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Scopes"))+":")]),e._v(" "),t("ul",e._l(n.scopes,(function(n,r){return t("li",{key:r},[t("strong",[e._v(e._s(r)+":")]),e._v(" "+e._s(n)+"\n              ")])})),0)]):e._e()])])})),0),e._v(" "),e.securityScheme.description?t("div",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Description"))+":")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.tr(e.securityScheme,"description",e.currentLocale))}})]):e._e()]):e._e()])}),[],!1,null,null,null);t.default=component.exports},481:function(e,t,n){"use strict";n(476)},482:function(e,t,n){var r=n(3)((function(i){return i[1]}));r.push([e.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.text-lg2{font-size:1.25rem}.font-medium{font-weight:500}",""]),r.locals={},e.exports=r},483:function(e,t,n){"use strict";n.r(t);var r=n(116),o={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},c=(n(481),n(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg2 font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Request Bodies"))+": ")]),e._v(" "),e._l(e.requestBodies,(function(n,r){return t("div",{key:r,staticClass:"mt-4"},[t("h4",{staticClass:"text-base font-bold"},[e._v(e._s(r))]),e._v(" "),t("OpenApiRequestBody",{attrs:{requestBody:n,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiRequestBody:n(493).default})},484:function(e,t,n){"use strict";n.r(t);var r=n(116),o={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Security Schemes"))+": ")]),e._v(" "),e._l(e.securitySchemes,(function(n,r){return t("div",{key:r},[t("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:r}},[e._v(" - "+e._s(r))]),e._v(" "),t("OpenApiSecurityScheme",{attrs:{securityScheme:n,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityScheme:n(480).default})},485:function(e,t,n){"use strict";n(477)},486:function(e,t,n){var r=n(3)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},487:function(e,t,n){"use strict";n.r(t);n(41),n(54),n(5),n(7);var r=n(116),o={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c,getUrl:function(e){var t=e.url,n=e.variables;for(var r in n){var o=n[r].default;if(o){var c="{".concat(r,"}");t=t.replace(c,o)}}return t}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"text-2xl font-bold"},[e._v(e._s(e.tr(e.info,"title",e.currentLocale)))]),e._v(" "),t("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:e._s(e.tr(e.info,"description",e.currentLocale))}}),e._v(" "),e.servers?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Servers")]),e._v(" "),t("ul",{staticClass:"list-disc list-inside"},e._l(e.servers,(function(n){return t("li",{key:n.url},[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.getUrl(n)}},[e._v(e._s(e.getUrl(n)))]),e._v(" - "),n.description?t("span",[e._v(e._s(n.description))]):e._e()])})),0)]):e._e(),e._v(" "),e.info.externalDocs?t("h3",{staticClass:"text-lg font-bold"},[e._v("External documentation")]):e._e(),e._v(" "),e.info.externalDocs?t("ul",{staticClass:"list-disc list-inside"},[t("li",[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.info.externalDocs.url}},[e._v(e._s(e.tr(e.info.externalDocs,"description",e.currentLocale)))])])]):e._e(),e._v(" "),e.info.version?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("version: "+e._s(e.info.version))])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},488:function(e,t,n){"use strict";n.r(t);var r={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[e.components.schemas?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Schemas")]),e._v(" "),e._l(e.components.schemas,(function(n,r){return t("div",[t("h4",{staticClass:"text-base font-bold",domProps:{textContent:e._s(r)}}),e._v(" "),t("OpenApiSchema",{attrs:{components:e.components,schema:n,"current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.schema?t("div",[t("OpenApiSchema",{attrs:{components:e.components,schema:e.components.schema,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.examples?t("div",[t("OpenApiExamples",{attrs:{examples:e.components.examples,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.requestBodies?t("div",[t("OpenApiRequestBodies",{attrs:{requestBodies:e.components.requestBodies,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.responses?t("div",[t("OpenApiResponses",{attrs:{responses:e.components.responses,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.parameters?t("div",[t("OpenApiParameters",{attrs:{parameters:e.components.parameters,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.securitySchemes?t("div",[t("OpenApiSecuritySchemes",{attrs:{securitySchemes:e.components.securitySchemes,"current-locale":e.currentLocale}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSchema:n(491).default,OpenApiExamples:n(492).default,OpenApiRequestBodies:n(483).default,OpenApiResponses:n(494).default,OpenApiParameters:n(495).default,OpenApiSecuritySchemes:n(484).default})},489:function(e,t,n){"use strict";n.r(t);var r={name:"NotFound"},o=n(1),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[t("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[e._v("404")]),e._v(" "),t("p",{staticClass:"text-lg text-gray-700 text-center"},[e._v("Not found")])])}],!1,null,null,null);t.default=component.exports},490:function(e,t,n){"use strict";n.r(t);n(5),n(139),n(41),n(54),n(7),n(68),n(138),n(266);var r=n(116),o={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=t.indexOf(e);if(-1!==n){var r=Math.max(n-50,0),o=Math.min(n+e.length+50,t.length),c="..."+t.substring(r,o)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var h in l){var d=l[h],m=path;m.startsWith("/")&&(m=m.substring(1)),m.endsWith("/")&&(m=m.substring(-1)),m=m.replace(/[&\+\.\/=\?\\\{\}]/gim,"_").replace(/__+/,"_");var f=this.tr(d,"summary",this.currentLocale).toLowerCase(),v=this.tr(d,"description",this.currentLocale).toLowerCase(),_=null,y=f.indexOf(e);if(-1!==y){var x=v.substring(0,100)+"...";_={path:path,title:f.replace(e,"<b>"+e+"</b>"),description:x+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(m)}}if(-1!==(y=v.indexOf(e))){var j=Math.max(y-50,0),L=Math.min(y+e.length+50,v.length),S="..."+v.substring(j,L)+"...";S=S.replace(e,"<b>"+e+"</b>"),_?_.description=S:_={path:path,title:f,description:S,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(m)}}_&&this.list.push(_)}}}}}},c=(n(485),n(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(n){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:n.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(n.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(n.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(n.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},592:function(e,t,n){"use strict";n.r(t);var r=n(2),o=(n(8),n(41),n(54),n(32),n(47),n(48),n(496),n(267),n(6),{name:"AppDocs",layout:"apidocs-layout-external-refs",transition:{name:"fade"},head:function(){var e,t,n,r;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:"",bodyAttrs:{class:"ggggg"}};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:"",bodyAttrs:{class:"gggg"}};if(!this.activeRoute)return{};var title=null!==(e=null!==(t=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==t?t:this.activeRoute.summary)&&void 0!==e?e:"",o=null!==(n=null!==(r=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==r?r:this.activeRoute.description)&&void 0!==n?n:"";return{title:"["+this.file+"] - "+title,description:o}},setup:function(){},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$nuxt.context;try{e.currentLocale=null!==(r=n.route.params.locale)&&void 0!==r?r:n.route.meta[0].locale,e.type=null!==(o=n.route.params.type)&&void 0!==o?o:n.route.meta[0].type,e.path=null!==(c=n.route.params.path)&&void 0!==c?c:n.route.meta[0].path,e.url=null!==(l=n.route.params.url)&&void 0!==l?l:n.route.meta[0].url}catch(e){console.error(e),console.error(n.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-external-refs",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.2",info:{version:"1.0",title:"External refs (json-pointers)",description:'<p>Following OpenAPI spec demonstrate how to use external reference</p>\n<p>below is the main spec, but the schema used in the response is defined in a separate file named - schema.yaml</p>\n<pre><code class="hljs language-yaml"><span class="hljs-attr">openapi: 3.0.0 info:</span>\n  <span class="hljs-attr">title:</span>  <span class="hljs-string">Dynamic</span> <span class="hljs-string">Form</span> <span class="hljs-string">Params</span>\n  <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>\n<span class="hljs-attr">paths:</span>\n  <span class="hljs-string">/user1:</span>\n    <span class="hljs-attr">get:</span>\n      <span class="hljs-attr">description:</span> <span class="hljs-string">List</span> <span class="hljs-string">User</span>\n      <span class="hljs-attr">summary:</span> <span class="hljs-string">List</span> <span class="hljs-string">User</span>\n      <span class="hljs-attr">responses:</span>\n        <span class="hljs-attr">&#x27;200&#x27;:</span>\n          <span class="hljs-attr">description:</span> <span class="hljs-string">The</span> <span class="hljs-string">response</span>\n          <span class="hljs-attr">content:</span>\n            <span class="hljs-attr">application/json:</span>\n              <span class="hljs-attr">schema:</span>\n                <span class="hljs-string">$ref:&#x27;./schema.yaml#/components/schemas/user&#x27;</span> <span class="hljs-string">&lt;&lt;&lt;</span> <span class="hljs-string">relative</span> <span class="hljs-string">to</span> <span class="hljs-string">html</span> <span class="hljs-string">where</span> <span class="hljs-string">rapidoc</span> <span class="hljs-string">element</span> <span class="hljs-string">is</span> <span class="hljs-string">defined</span>\n</code></pre>\n<p>schema.yaml</p>\n<pre><code class="hljs language-yaml"><span class="hljs-attr">openapi: 3.0.2 info:</span>\n  <span class="hljs-attr">title:</span> <span class="hljs-string">Partial</span> <span class="hljs-string">spec</span> <span class="hljs-string">for</span> <span class="hljs-string">schema</span>\n  <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>\n<span class="hljs-attr">components:</span>\n  <span class="hljs-attr">schemas:</span>\n    <span class="hljs-attr">user:</span>\n      <span class="hljs-attr">properties:</span>\n        <span class="hljs-attr">id:</span>\n          <span class="hljs-attr">type:</span> <span class="hljs-string">integer</span>\n        <span class="hljs-attr">name:</span>\n          <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n</code></pre>\n'},paths:{"/external-refs":{get:{summary:"External Refs",description:"Using external refs in spec",responses:{200:{description:'<p>The response schema is defined in a separate file. If external refs are resolved properly then it should display the below schema</p>\n<pre><code class="hljs language-json">  <span class="hljs-punctuation">{</span>\n    id<span class="hljs-punctuation">:</span> integer\n    name<span class="hljs-punctuation">:</span> string\n  <span class="hljs-punctuation">}</span>\n</code></pre>\n',content:{"application/json":{schema:"./partial/partial.yaml#/components/schemas/user"}}}},tags:["other"]}}},tags:[]},isNuxt3:!1,isNuxt2:!0,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/external-refs",path:"external-refs",type:"get",icon:null,description:"External Refs"}]}},fileName:"external-refs",layoutName:"apidocs-layout-external-refs",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access",page:"Custom Page",webhook:"webhook","external-refs":"external-refs","external-refs2":"external-refs2","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"external-refs"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path,this.url=e.url},deep:!0}},methods:{downloadJson:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(e=this.options.doc.paths[this.url][this.type])&&void 0!==e?e:null},activeWebhook:function(){var e;return this.options.doc.webhooks&&this.options.doc.webhooks[this.url]&&null!==(e=this.options.doc.webhooks[this.url][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(e=this.options.doc.paths[this.url].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&this.options.doc.paths[this.url].servers&&this.options.doc.paths[this.url].servers[0]?null!==(t=this.options.doc.paths[this.url].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$openapidocBus.$on("downloadJsonDoc",this.downloadJson)},unmounted:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)},destroyed:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)}}),c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.url,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):e.activeWebhook?t("OpenApiRoute",{attrs:{route:e.activeWebhook,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.url,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiInfo:n(487).default,OpenApiComponents:n(488).default,OpenApiRoute:n(497).default,NotFound:n(489).default,SearchBlock:n(490).default})}}]);