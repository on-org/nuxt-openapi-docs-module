(window.webpackJsonp=window.webpackJsonp||[]).push([[59,8,15,17,23,24,31],{463:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("09cf48f4",content,!0,{sourceMap:!1})},464:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("d41c8358",content,!0,{sourceMap:!1})},465:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("7b1266a0",content,!0,{sourceMap:!1})},466:function(t,e,n){"use strict";n(463)},467:function(t,e,n){var o=n(3)((function(i){return i[1]}));o.push([t.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),o.locals={},t.exports=o},468:function(t,e,n){"use strict";n.r(e);n(41),n(54),n(6);var o=n(116),r={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=(n(466),n(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[e("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[t._v("\n    "+t._s(t.tr(t.securityScheme,"name",t.currentLocale))+"\n  ")]),t._v(" "),"http"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),e("p",[e("strong",[t._v("Scheme:")]),t._v(" "+t._s(t.securityScheme.scheme))]),t._v(" "),t.securityScheme.bearerFormat?e("p",[e("strong",[t._v("Bearer format:")]),t._v(" "+t._s(t.securityScheme.bearerFormat)+"\n    ")]):t._e(),t._v(" "),t.securityScheme.description?e("p",[e("strong",[t._v("Description:")]),t._v(" "+t._s(t.tr(t.securityScheme,"description",t.currentLocale))+"\n    ")]):t._e()]):"apiKey"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),e("p",[e("strong",[t._v("Name:")]),t._v(" "+t._s(t.securityScheme.name))]),t._v(" "),e("p",[e("strong",[t._v("In:")]),t._v(" "+t._s(t.securityScheme.in))]),t._v(" "),t.securityScheme.description?e("p",[e("strong",[t._v("Description:")]),t._v(" "+t._s(t.tr(t.securityScheme,"description",t.currentLocale))+"\n    ")]):t._e()]):"oauth2"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),t.securityScheme.flows?e("p",[e("strong",[t._v("Flows:")])]):t._e(),t._v(" "),e("ul",t._l(t.securityScheme.flows,(function(n,o){return e("li",{key:o},[e("p",[e("strong",[t._v(t._s(o)+":")])]),t._v(" "),e("ul",[n.authorizationUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Authorization URL"))+":")]),t._v(" "+t._s(n.authorizationUrl)+"\n          ")]):t._e(),t._v(" "),n.tokenUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Token URL"))+":")]),t._v(" "+t._s(n.tokenUrl)+"\n          ")]):t._e(),t._v(" "),n.refreshUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Refresh URL"))+":")]),t._v(" "+t._s(n.refreshUrl)+"\n          ")]):t._e(),t._v(" "),n.scopes?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Scopes"))+":")]),t._v(" "),e("ul",t._l(n.scopes,(function(n,o){return e("li",{key:o},[e("strong",[t._v(t._s(o)+":")]),t._v(" "+t._s(n)+"\n              ")])})),0)]):t._e()])])})),0),t._v(" "),t.securityScheme.description?e("div",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Description"))+":")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.tr(t.securityScheme,"description",t.currentLocale))}})]):t._e()]):t._e()])}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,n){"use strict";n(464)},470:function(t,e,n){var o=n(3)((function(i){return i[1]}));o.push([t.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.text-lg2{font-size:1.25rem}.font-medium{font-weight:500}",""]),o.locals={},t.exports=o},471:function(t,e,n){"use strict";n.r(e);var o=n(116),r={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=(n(469),n(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-lg2 font-bold mb-2"},[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Request Bodies"))+": ")]),t._v(" "),t._l(t.requestBodies,(function(n,o){return e("div",{key:o,staticClass:"mt-4"},[e("h4",{staticClass:"text-base font-bold"},[t._v(t._s(o))]),t._v(" "),e("OpenApiRequestBody",{attrs:{requestBody:n,"current-locale":t.currentLocale}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiRequestBody:n(483).default})},472:function(t,e,n){"use strict";n.r(e);var o=n(116),r={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=n(1),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-lg font-bold mb-2"},[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Security Schemes"))+": ")]),t._v(" "),t._l(t.securitySchemes,(function(n,o){return e("div",{key:o},[e("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:o}},[t._v(" - "+t._s(o))]),t._v(" "),e("OpenApiSecurityScheme",{attrs:{securityScheme:n,"current-locale":t.currentLocale}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiSecurityScheme:n(468).default})},473:function(t,e,n){"use strict";n(465)},474:function(t,e,n){var o=n(3)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},475:function(t,e,n){"use strict";n.r(e);n(41),n(54),n(5),n(7);var o=n(116),r={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c,getUrl:function(t){var e=t.url,n=t.variables;for(var o in n){var r=n[o].default;if(r){var c="{".concat(o,"}");e=e.replace(c,r)}}return e}}},c=n(1),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.tr(t.info,"title",t.currentLocale)))]),t._v(" "),e("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:t._s(t.tr(t.info,"description",t.currentLocale))}}),t._v(" "),t.servers?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("Servers")]),t._v(" "),e("ul",{staticClass:"list-disc list-inside"},t._l(t.servers,(function(n){return e("li",{key:n.url},[e("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:t.getUrl(n)}},[t._v(t._s(t.getUrl(n)))]),t._v(" - "),n.description?e("span",[t._v(t._s(n.description))]):t._e()])})),0)]):t._e(),t._v(" "),t.info.externalDocs?e("h3",{staticClass:"text-lg font-bold"},[t._v("External documentation")]):t._e(),t._v(" "),t.info.externalDocs?e("ul",{staticClass:"list-disc list-inside"},[e("li",[e("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:t.info.externalDocs.url}},[t._v(t._s(t.tr(t.info.externalDocs,"description",t.currentLocale)))])])]):t._e(),t._v(" "),t.info.version?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("version: "+t._s(t.info.version))])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){"use strict";n.r(e);var o={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.components.schemas?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("Schemas")]),t._v(" "),t._l(t.components.schemas,(function(n,o){return e("div",[e("h4",{staticClass:"text-base font-bold",domProps:{textContent:t._s(o)}}),t._v(" "),e("OpenApiSchema",{attrs:{components:t.components,schema:n,"current-locale":t.currentLocale}})],1)}))],2):t._e(),t._v(" "),t.components.schema?e("div",[e("OpenApiSchema",{attrs:{components:t.components,schema:t.components.schema,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.examples?e("div",[e("OpenApiExamples",{attrs:{examples:t.components.examples,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.requestBodies?e("div",[e("OpenApiRequestBodies",{attrs:{requestBodies:t.components.requestBodies,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.responses?e("div",[e("OpenApiResponses",{attrs:{responses:t.components.responses,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.parameters?e("div",[e("OpenApiParameters",{attrs:{parameters:t.components.parameters,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.securitySchemes?e("div",[e("OpenApiSecuritySchemes",{attrs:{securitySchemes:t.components.securitySchemes,"current-locale":t.currentLocale}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiSchema:n(479).default,OpenApiExamples:n(480).default,OpenApiRequestBodies:n(471).default,OpenApiResponses:n(481).default,OpenApiParameters:n(482).default,OpenApiSecuritySchemes:n(472).default})},477:function(t,e,n){"use strict";n.r(e);var o={name:"NotFound"},r=n(1),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[e("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[t._v("404")]),t._v(" "),e("p",{staticClass:"text-lg text-gray-700 text-center"},[t._v("Not found")])])}],!1,null,null,null);e.default=component.exports},478:function(t,e,n){"use strict";n.r(e);n(5),n(138),n(41),n(54),n(7),n(68);var o=n(116),r={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:o.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=e.indexOf(t);if(-1!==n){var o=Math.max(n-50,0),r=Math.min(n+t.length+50,e.length),c="..."+e.substring(o,r)+"...";c=c.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var d in l){var h=l[d],m=this.tr(h,"summary",this.currentLocale).toLowerCase(),f=this.tr(h,"description",this.currentLocale).toLowerCase(),v=null,y=m.indexOf(t);if(-1!==y){var _=f.substring(0,100)+"...";v={path:h.path,title:m.replace(t,"<b>"+t+"</b>"),description:_+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}if(-1!==(y=f.indexOf(t))){var x=Math.max(y-50,0),w=Math.min(y+t.length+50,f.length),L="..."+f.substring(x,w)+"...";L=L.replace(t,"<b>"+t+"</b>"),v?v.description=L:v={path:h.path,title:m,description:L,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}v&&this.list.push(v)}}}}}},c=(n(473),n(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(n){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:n.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(n.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(n.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},563:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(8),n(41),n(54),n(32),n(47),n(48),n(484),n(262),n(6),{name:"AppDocs",layout:"apidocs-layout-markdown",transition:{name:"fade"},head:function(){var t,e,n,o;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:""};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:""};var title=null!==(t=null!==(e=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==e?e:this.activeRoute.summary)&&void 0!==t?t:"",r=null!==(n=null!==(o=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==o?o:this.activeRoute.description)&&void 0!==n?n:"";return{title:"["+this.file+"] - "+title,description:r}},setup:function(){},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$nuxt.context;try{t.currentLocale=null!==(o=n.route.params.locale)&&void 0!==o?o:n.route.meta[0].locale,t.type=null!==(r=n.route.params.type)&&void 0!==r?r:n.route.meta[0].type,t.path=null!==(c=n.route.params.path)&&void 0!==c?c:n.route.meta[0].path,t.url=null!==(l=n.route.params.url)&&void 0!==l?l:n.route.meta[0].url}catch(t){console.error(t),console.error(n.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-markdown",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Markdown Content",description:"Test case to show markdown support. For more info check specification (http://spec.openapis.org/oas/v3.0.3)",version:"1.0.0"},paths:{"/markdown":{get:{summary:"Markdown in Description.",description:'<p>Endpoint to create and initiate a pipeline.</p>\n<h3 id="paragraph">Paragraph</h3>\n<p>In a hole in the ground there lived a hobbit. Not a <strong>nasty</strong>, <em>dirty</em>, <code>wet</code> hole, filled with the ends\nof worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to\neat: it was a <a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>, and that means comfort.</p>\n<h3 id="horizontal-rule----">Horizontal Rule <code>---</code></h3>\n<hr>\n<h3 id="number-list">Number List</h3>\n<ol>\n<li>Install <code>node</code>.</li>\n<li>Install <code>npm</code>.</li>\n<li>Open your editor</li>\n<li>Create a JavaScript file</li>\n</ol>\n<h3 id="blockquotes">Blockquotes</h3>\n<blockquote>\n<p>This is a sample OpenAPI spec to test the parsing of various markdown styles\n(RapiDoc supports common-mark syntax)</p>\n</blockquote>\n<h3 id="buleted-list">Buleted List</h3>\n<ul>\n<li>Install <code>node</code>.</li>\n<li>Install <code>npm</code>.</li>\n<li>Open you editor</li>\n<li>Create a JavaScript file</li>\n</ul>\n<h3 id="table">Table</h3>\n<table>\n<thead>\n<tr>\n<th>Heading 1</th>\n<th align="left">Left-Justified</th>\n<th align="center">Centered</th>\n<th align="right">Right-Justified</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>text</td>\n<td align="left">text</td>\n<td align="center">text</td>\n<td align="right">text</td>\n</tr>\n<tr>\n<td>text</td>\n<td align="left">text</td>\n<td align="center">text</td>\n<td align="right">text</td>\n</tr>\n<tr>\n<td>text</td>\n<td align="left">text</td>\n<td align="center">text</td>\n<td align="right">text</td>\n</tr>\n</tbody></table>\n<h3 id="code">Code</h3>\n<pre><code>$ curl -X POST -is -u username:password\n  -H &quot;Content-Type: application/json&quot; https://example.com\n  -d &#x27;{\n  &quot;target&quot;: {\n    &quot;ref_type&quot;: &quot;branch&quot;,\n    &quot;type&quot;: &quot;pipeline_ref_target&quot;,\n    &quot;ref_name&quot;: &quot;master&quot;\n  }&#x27;\n}\n</code></pre>\n<h3 id="code-with-syntax-highlight">Code (with syntax highlight)</h3>\n<pre><code class="hljs language-bash">$ curl -X POST -is -u username:password\n  -H <span class="hljs-string">&quot;Content-Type: application/json&quot;</span> https://example.com\n  -d <span class="hljs-string">&#x27;{\n  &quot;target&quot;: {\n    &quot;ref_type&quot;: &quot;branch&quot;,\n    &quot;type&quot;: &quot;pipeline_ref_target&quot;,\n    &quot;ref_name&quot;: &quot;master&quot;\n  }&#x27;</span>\n}\n</code></pre>\n<h3 id="use-html-in-markdown">Use HTML in markdown</h3>\n<br>\n<div style="color: white; background-color:SlateBlue; padding: 12px; border-radius:2px">\n  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.\n  This box I designed using raw HTML inside the markdown\n</div>\n<br>\n<div style="color:#bbb; background-color:#444; padding: 12px 0px 12px 12px;border-left: 5px solid #F06560;">\n  <b style="color:#F06560">TIP</b>  Here is another one, done using HTML inside markdown with two different colors to make it appear like a TIP\n</div>\n<br>\n\n\n<h3 id="images">Images</h3>\n<p>Inline Images no-gap - <img src="https://picsum.photos/100" alt="appspot image filler"><img src="https://picsum.photos/100" alt="appspot image filler"></p>\n<p>Inline Images Single space gap - <img src="https://picsum.photos/100" alt="appspot image filler">\n<img src="https://picsum.photos/00" alt="appspot image filler"></p>\n<p>Next Line Image</p>\n<p><img src="https://picsum.photos/140x100.png" alt="appspot image filler"></p>\n',parameters:[{name:"full-name",in:"query",description:"<p>Field descriptions can contain <code>Markdown</code> (Markdown must be monospaced)<br/>\n<strong>CONSTRAINTS</strong></p>\n<pre><code> - At least 3 characters\n - Cannot have space\n - Cannot have number\n - First Letter must be capital\n</code></pre>\n",required:!0,schema:{type:"string",minimum:3}},{name:"height",in:"query",description:"Height in `inches` (inches must be monospaced)",required:!0,schema:{type:"integer",format:"int32",minimum:12,maximum:120}},{name:"interests",in:"query",required:!0,description:'<p>Default is <code>hiking</code> (hiking must be monospaced)</p>\n<table>\n<thead>\n<tr>\n<th>Heading 1</th>\n<th align="left">Left-Justified</th>\n<th align="center">Centered</th>\n<th align="right">Right-Justified</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>text</td>\n<td align="left">text</td>\n<td align="center">text</td>\n<td align="right">text</td>\n</tr>\n<tr>\n<td>text</td>\n<td align="left">text</td>\n<td align="center">text</td>\n<td align="right">text</td>\n</tr>\n<tr>\n<td>text</td>\n<td align="left">text</td>\n<td align="center">text</td>\n<td align="right">text</td>\n</tr>\n</tbody></table>\n',schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["computers","hiking","swiming"],default:"hiking"}}}],responses:{200:{description:"Response Schema field contains `Markdown` contents  (Markdown must be monospaced)",content:{"application/json":{schema:{type:"object",description:"Description of `Person` object (Person must be monospaced)",properties:{fullName:{description:"Person&#x27;s Full name is made up of `firstName` and `lastName` (firstName and lastName must be mono-spaced).",type:"object",properties:{firstName:{description:"_First name_ (First name should be italics)",type:"string"},lastName:{description:"`Last name` (last name must be monospaced)\n",type:"string"}}},hobbies:{type:"array",description:"list of words separated by `comma` (comma should be monospaced).",items:{type:"string"}},dependentNames:{type:"array",description:"<p>Array of <strong>Dependents</strong> (Dependents must be bold).</p>\n",items:{type:"object",description:"Full Name Object is made up of `firstName` and `lastName` (firstName and lastName must be mono-spaced).",properties:{fullName:{description:"<p>Parts of <strong>First Name</strong> (First Name must be bold)</p>\n",type:"object",properties:{firstName:{description:"Dependent First Name",type:"string"},lastName:{description:"Dependent Last Name",type:"string"}}}}}}}}}},headers:{Link:{required:!0,schema:{type:"string"},description:'<p>Pagination links are included in the Link header of responses.\nIt is important to follow these Link header values instead of constructing your own URLs as query parameters or cursor formats may change without notice.</p>\n<table>\n<thead>\n<tr>\n<th align="left">Link Relation</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">first</td>\n<td align="left">The URL of the immediate first page of results</td>\n</tr>\n<tr>\n<td align="left">last</td>\n<td align="left">The URL of the immediate last page of results</td>\n</tr>\n<tr>\n<td align="left">next</td>\n<td align="left">The URL of the immediate next page of results</td>\n</tr>\n<tr>\n<td align="left">prev</td>\n<td align="left">The URL of the immediate previous page of results</td>\n</tr>\n<tr>\n<td align="left">self</td>\n<td align="left">The URL of the immediate current page of results</td>\n</tr>\n</tbody></table>\n'}}}},tags:["other"]}}}},isNuxt3:!1,isNuxt2:!0,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/markdown",path:"markdown",type:"get",description:"Markdown in Description."}]}},fileName:"markdown",layoutName:"apidocs-layout-markdown",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"markdown"}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path,this.url=t.url},deep:!0}},methods:{downloadJson:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(t=this.options.doc.paths[this.url][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(t=this.options.doc.paths[this.url].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&this.options.doc.paths[this.url].servers&&this.options.doc.paths[this.url].servers[0]?null!==(e=this.options.doc.paths[this.url].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$openapidocBus.$on("downloadJsonDoc",this.downloadJson)},unmounted:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)},destroyed:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)}}),c=n(1),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.url,path_doc:t.path_doc,file:t.file,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiInfo:n(475).default,OpenApiComponents:n(476).default,OpenApiRoute:n(485).default,NotFound:n(477).default,SearchBlock:n(478).default})}}]);