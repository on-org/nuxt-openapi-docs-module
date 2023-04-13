(window.webpackJsonp=window.webpackJsonp||[]).push([[53,8,15,17,23,24,31],{463:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("09cf48f4",content,!0,{sourceMap:!1})},464:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("d41c8358",content,!0,{sourceMap:!1})},465:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("7b1266a0",content,!0,{sourceMap:!1})},466:function(t,e,n){"use strict";n(463)},467:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),r.locals={},t.exports=r},468:function(t,e,n){"use strict";n.r(e);n(41),n(54),n(6);var r=n(116),o={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=(n(466),n(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[e("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[t._v("\n    "+t._s(t.tr(t.securityScheme,"name",t.currentLocale))+"\n  ")]),t._v(" "),"http"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),e("p",[e("strong",[t._v("Scheme:")]),t._v(" "+t._s(t.securityScheme.scheme))]),t._v(" "),t.securityScheme.bearerFormat?e("p",[e("strong",[t._v("Bearer format:")]),t._v(" "+t._s(t.securityScheme.bearerFormat)+"\n    ")]):t._e(),t._v(" "),t.securityScheme.description?e("p",[e("strong",[t._v("Description:")]),t._v(" "+t._s(t.tr(t.securityScheme,"description",t.currentLocale))+"\n    ")]):t._e()]):"apiKey"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),e("p",[e("strong",[t._v("Name:")]),t._v(" "+t._s(t.securityScheme.name))]),t._v(" "),e("p",[e("strong",[t._v("In:")]),t._v(" "+t._s(t.securityScheme.in))]),t._v(" "),t.securityScheme.description?e("p",[e("strong",[t._v("Description:")]),t._v(" "+t._s(t.tr(t.securityScheme,"description",t.currentLocale))+"\n    ")]):t._e()]):"oauth2"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),t.securityScheme.flows?e("p",[e("strong",[t._v("Flows:")])]):t._e(),t._v(" "),e("ul",t._l(t.securityScheme.flows,(function(n,r){return e("li",{key:r},[e("p",[e("strong",[t._v(t._s(r)+":")])]),t._v(" "),e("ul",[n.authorizationUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Authorization URL"))+":")]),t._v(" "+t._s(n.authorizationUrl)+"\n          ")]):t._e(),t._v(" "),n.tokenUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Token URL"))+":")]),t._v(" "+t._s(n.tokenUrl)+"\n          ")]):t._e(),t._v(" "),n.refreshUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Refresh URL"))+":")]),t._v(" "+t._s(n.refreshUrl)+"\n          ")]):t._e(),t._v(" "),n.scopes?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Scopes"))+":")]),t._v(" "),e("ul",t._l(n.scopes,(function(n,r){return e("li",{key:r},[e("strong",[t._v(t._s(r)+":")]),t._v(" "+t._s(n)+"\n              ")])})),0)]):t._e()])])})),0),t._v(" "),t.securityScheme.description?e("div",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Description"))+":")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.tr(t.securityScheme,"description",t.currentLocale))}})]):t._e()]):t._e()])}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,n){"use strict";n(464)},470:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.text-lg2{font-size:1.25rem}.font-medium{font-weight:500}",""]),r.locals={},t.exports=r},471:function(t,e,n){"use strict";n.r(e);var r=n(116),o={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=(n(469),n(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-lg2 font-bold mb-2"},[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Request Bodies"))+": ")]),t._v(" "),t._l(t.requestBodies,(function(n,r){return e("div",{key:r,staticClass:"mt-4"},[e("h4",{staticClass:"text-base font-bold"},[t._v(t._s(r))]),t._v(" "),e("OpenApiRequestBody",{attrs:{requestBody:n,"current-locale":t.currentLocale}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiRequestBody:n(483).default})},472:function(t,e,n){"use strict";n.r(e);var r=n(116),o={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=n(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-lg font-bold mb-2"},[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Security Schemes"))+": ")]),t._v(" "),t._l(t.securitySchemes,(function(n,r){return e("div",{key:r},[e("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:r}},[t._v(" - "+t._s(r))]),t._v(" "),e("OpenApiSecurityScheme",{attrs:{securityScheme:n,"current-locale":t.currentLocale}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiSecurityScheme:n(468).default})},473:function(t,e,n){"use strict";n(465)},474:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},475:function(t,e,n){"use strict";n.r(e);n(41),n(54),n(5),n(7);var r=n(116),o={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c,getUrl:function(t){var e=t.url,n=t.variables;for(var r in n){var o=n[r].default;if(o){var l="{".concat(r,"}");e=e.replace(l,o)}}return e}}},l=n(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.tr(t.info,"title",t.currentLocale)))]),t._v(" "),e("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:t._s(t.tr(t.info,"description",t.currentLocale))}}),t._v(" "),t.servers?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("Servers")]),t._v(" "),e("ul",{staticClass:"list-disc list-inside"},t._l(t.servers,(function(n){return e("li",{key:n.url},[e("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:t.getUrl(n)}},[t._v(t._s(t.getUrl(n)))]),t._v(" - "),n.description?e("span",[t._v(t._s(n.description))]):t._e()])})),0)]):t._e(),t._v(" "),t.info.externalDocs?e("h3",{staticClass:"text-lg font-bold"},[t._v("External documentation")]):t._e(),t._v(" "),t.info.externalDocs?e("ul",{staticClass:"list-disc list-inside"},[e("li",[e("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:t.info.externalDocs.url}},[t._v(t._s(t.tr(t.info.externalDocs,"description",t.currentLocale)))])])]):t._e(),t._v(" "),t.info.version?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("version: "+t._s(t.info.version))])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){"use strict";n.r(e);var r={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.components.schemas?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("Schemas")]),t._v(" "),t._l(t.components.schemas,(function(n,r){return e("div",[e("h4",{staticClass:"text-base font-bold",domProps:{textContent:t._s(r)}}),t._v(" "),e("OpenApiSchema",{attrs:{components:t.components,schema:n,"current-locale":t.currentLocale}})],1)}))],2):t._e(),t._v(" "),t.components.schema?e("div",[e("OpenApiSchema",{attrs:{components:t.components,schema:t.components.schema,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.examples?e("div",[e("OpenApiExamples",{attrs:{examples:t.components.examples,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.requestBodies?e("div",[e("OpenApiRequestBodies",{attrs:{requestBodies:t.components.requestBodies,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.responses?e("div",[e("OpenApiResponses",{attrs:{responses:t.components.responses,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.parameters?e("div",[e("OpenApiParameters",{attrs:{parameters:t.components.parameters,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.securitySchemes?e("div",[e("OpenApiSecuritySchemes",{attrs:{securitySchemes:t.components.securitySchemes,"current-locale":t.currentLocale}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiSchema:n(479).default,OpenApiExamples:n(480).default,OpenApiRequestBodies:n(471).default,OpenApiResponses:n(481).default,OpenApiParameters:n(482).default,OpenApiSecuritySchemes:n(472).default})},477:function(t,e,n){"use strict";n.r(e);var r={name:"NotFound"},o=n(1),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[e("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[t._v("404")]),t._v(" "),e("p",{staticClass:"text-lg text-gray-700 text-center"},[t._v("Not found")])])}],!1,null,null,null);e.default=component.exports},478:function(t,e,n){"use strict";n.r(e);n(5),n(138),n(41),n(54),n(7),n(68);var r=n(116),o={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=e.indexOf(t);if(-1!==n){var r=Math.max(n-50,0),o=Math.min(n+t.length+50,e.length),l="..."+e.substring(r,o)+"...";l=l.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:l,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var c=this.doc.paths[path];for(var d in c){var h=c[d],m=this.tr(h,"summary",this.currentLocale).toLowerCase(),f=this.tr(h,"description",this.currentLocale).toLowerCase(),v=null,y=m.indexOf(t);if(-1!==y){var _=f.substring(0,100)+"...";v={path:h.path,title:m.replace(t,"<b>"+t+"</b>"),description:_+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}if(-1!==(y=f.indexOf(t))){var x=Math.max(y-50,0),j=Math.min(y+t.length+50,f.length),S="..."+f.substring(x,j)+"...";S=S.replace(t,"<b>"+t+"</b>"),v?v.description=S:v={path:h.path,title:m,description:S,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}v&&this.list.push(v)}}}}}},l=(n(473),n(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(n){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:n.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(n.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(n.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},558:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(8),n(41),n(54),n(32),n(47),n(48),n(484),n(262),n(6),{name:"AppDocs",layout:"apidocs-layout-file-upload",transition:{name:"fade"},head:function(){var t,e,n,r;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:""};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:""};var title=null!==(t=null!==(e=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==e?e:this.activeRoute.summary)&&void 0!==t?t:"",o=null!==(n=null!==(r=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==r?r:this.activeRoute.description)&&void 0!==n?n:"";return{title:"["+this.file+"] - "+title,description:o}},setup:function(){},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$nuxt.context;try{t.currentLocale=null!==(r=n.route.params.locale)&&void 0!==r?r:n.route.meta[0].locale,t.type=null!==(o=n.route.params.type)&&void 0!==o?o:n.route.meta[0].type,t.path=null!==(l=n.route.params.path)&&void 0!==l?l:n.route.meta[0].path,t.url=null!==(c=n.route.params.url)&&void 0!==c?c:n.route.meta[0].url}catch(t){console.error(t),console.error(n.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-file-upload",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Various ways to upload files (binary content)",version:"1.0.0"},paths:{"/upload-single-file":{post:{tags:["File Upload"],summary:"Uploads single file using form-data",description:'<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-single-file:</span>\n  <span class="hljs-attr">post:</span>\n    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">single</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">form-data</span>\n    <span class="hljs-attr">requestBody:</span>\n      <span class="hljs-attr">content:</span>\n        <span class="hljs-attr">multipart/form-data:</span>\n          <span class="hljs-attr">schema:</span>\n            <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n            <span class="hljs-attr">properties:</span>\n              <span class="hljs-attr">filename:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>      \n</code></pre>\n',requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{name:{type:"string"},photo:{type:"string",format:"binary"}}}}}},responses:{200:{summary:"OK"}}}},"/upload-multiple-file":{post:{tags:["File Upload"],summary:"Uploads multiple file using form-data and type as &#x27;array&#x27;",description:'<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-multiple-file:</span>\n  <span class="hljs-attr">post:</span>\n    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">multiple</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">form-data</span> <span class="hljs-string">and</span> <span class="hljs-string">type</span> <span class="hljs-string">as</span> <span class="hljs-string">&#x27;array&#x27;</span>\n    <span class="hljs-attr">requestBody:</span>\n      <span class="hljs-attr">content:</span>\n        <span class="hljs-attr">multipart/form-data:</span>\n          <span class="hljs-attr">schema:</span>\n            <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n            <span class="hljs-attr">properties:</span>\n              <span class="hljs-attr">filename:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>\n                <span class="hljs-attr">items:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>      \n</code></pre>\n',requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{name:{type:"string"},picture:{type:"array",items:{type:"string",format:"binary"}}}}}}},responses:{200:{description:"OK"}}}},"/upload-using-request-body":{post:{tags:["File Upload"],summary:"Uploads single file using request-body content-type as application/octet-stream",description:'<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-using-request-body:</span>\n  <span class="hljs-attr">post:</span>\n    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">single</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">request-body</span> <span class="hljs-string">content-type</span> <span class="hljs-string">as</span> <span class="hljs-string">application/octet-stream</span>\n    <span class="hljs-attr">requestBody:</span>\n      <span class="hljs-attr">content:</span>\n        <span class="hljs-attr">application/octet-stream:</span>\n          <span class="hljs-attr">schema:</span>\n            <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n            <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>\n</code></pre>\n',requestBody:{content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"successful operation"}}}}}},isNuxt3:!1,isNuxt2:!0,locales:{en:"English"},pathsByTags:{"File Upload":{name:"File Upload",description:"",isOpen:!0,items:[{name:"/upload-single-file",path:"upload-single-file",type:"post",description:"Uploads single file using form-data"},{name:"/upload-multiple-file",path:"upload-multiple-file",type:"post",description:"Uploads multiple file using form-data and type as 'array'"},{name:"/upload-using-request-body",path:"upload-using-request-body",type:"post",description:"Uploads single file using request-body content-type as application/octet-stream"}]}},fileName:"file-upload",layoutName:"apidocs-layout-file-upload",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"file-upload"}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path,this.url=t.url},deep:!0}},methods:{downloadJson:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(t=this.options.doc.paths[this.url][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(t=this.options.doc.paths[this.url].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&this.options.doc.paths[this.url].servers&&this.options.doc.paths[this.url].servers[0]?null!==(e=this.options.doc.paths[this.url].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$openapidocBus.$on("downloadJsonDoc",this.downloadJson)},unmounted:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)},destroyed:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)}}),l=n(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.url,path_doc:t.path_doc,file:t.file,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiInfo:n(475).default,OpenApiComponents:n(476).default,OpenApiRoute:n(485).default,NotFound:n(477).default,SearchBlock:n(478).default})}}]);