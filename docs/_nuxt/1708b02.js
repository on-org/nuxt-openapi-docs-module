(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{539:function(t,e,n){var content=n(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},540:function(t,e,n){"use strict";n(539)},541:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},542:function(t,e,n){"use strict";n(159),n(545),n(50),n(51),n(204),n(160);var o=n(11),r={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:o.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=e.indexOf(t);if(-1!==n){var o=Math.max(n-50,0),r=Math.min(n+t.length+50,e.length),c="..."+e.substring(o,r)+"...";c=c.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var h in l){var d=l[h],m=this.tr(d,"summary",this.currentLocale).toLowerCase(),y=this.tr(d,"description",this.currentLocale).toLowerCase(),f=null,v=m.indexOf(t);if(-1!==v){var j=y.substring(0,100)+"...";f={path:d.path,title:m.replace(t,"<b>"+t+"</b>"),description:j+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}if(-1!==(v=y.indexOf(t))){var x=Math.max(v-50,0),w=Math.min(v+t.length+50,y.length),C="..."+y.substring(x,w)+"...";C=C.replace(t,"<b>"+t+"</b>"),f?f.description=C:f={path:d.path,title:m,description:C,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}f&&this.list.push(f)}}}}}},c=(n(540),n(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(n){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:n.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(n.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(n.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},582:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(21),n(159),n(204),n(338),n(337),n(339),n(543),n(544),n(17),n(6)),c=n(5),l=n(4),h=n(7),d=n(542),m={name:"AppDocs",layout:function(t){var e;return"apidocs-layout-".concat(null!==(e=t.route.params.file)&&void 0!==e?e:t.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:r.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:h.a,SearchBlock:d.a},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$nuxt.context;try{t.currentLocale=null!==(o=n.route.params.locale)&&void 0!==o?o:n.route.meta[0].locale,t.type=null!==(r=n.route.params.type)&&void 0!==r?r:n.route.meta[0].type,t.path=null!==(c=n.route.params.path)&&void 0!==c?c:n.route.meta[0].path}catch(t){console.error(t),console.error(n.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Collapsible Tags",version:"1.0.0",description:'<p>Tags in openapi are used for grouping and ordering operations.<br/>\nIn RapiDoc&#39;s <code>view</code> mode these tags acts like an accordions, which you can expand or collapse.</p>\n<p>By default all the tags are expanded, but if you wish to collapse certain tags at the beginning when the spec is loaded,<br/>\nyou may do so by using <code>x-tag-expanded</code> extension under <code>tags</code> section which can contain <code>true</code> or <code>false</code></p>\n<p>below is an example how to achieve it</p>\n<pre><code class="hljs language-yaml">  <span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>\n  <span class="hljs-attr">info:</span>\n    <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>\n    <span class="hljs-attr">title:</span> <span class="hljs-string">Collapsible</span> <span class="hljs-string">Tags</span>\n  <span class="hljs-attr">paths:</span>\n    <span class="hljs-string">...</span>\n    <span class="hljs-string">...</span>\n  <span class="hljs-attr">tags:</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">My</span> <span class="hljs-string">Tag</span> <span class="hljs-number">1</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">My</span> <span class="hljs-string">Tag</span> <span class="hljs-number">2</span>\n      <span class="hljs-attr">x-tag-expanded:</span> <span class="hljs-literal">false</span> <span class="hljs-comment"># &lt;-- extension to control expand collapse tags in RapiDoc</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">My</span> <span class="hljs-string">Tag</span> <span class="hljs-number">3</span>\n    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">My</span> <span class="hljs-string">Tag</span> <span class="hljs-number">4</span>\n</code></pre>\n<p>Even if a tag is closed, you can create links to operations inside them.<br/> \nUpon clicking the link, it will open the tag if it is closed and navigate to operation&#39;s location </p>\n<p>Example: <strong><a href="#get-/path1-in-closed-tag">Link</a></strong> for <code>path1-in-closed-tag</code></p>\n'},paths:{"path1-in-open-tag":{get:{summary:"Path 1 under open tag",tags:["Open"],parameters:[{name:"name",in:"query",schema:{type:"string"}},{name:"age",in:"query",schema:{type:"integer"}}],responses:{200:{description:"Happy response",content:{"application/json":{schema:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},name:{description:"First Name",type:"string"}},title:"schemas"}}}}},path:"/path1-in-open-tag"}},"path2-in-open-tag":{get:{summary:"Path 2 under open tag",tags:["Open"],parameters:[{name:"name",in:"query",schema:{type:"string"}}],responses:{200:{description:"Happy response",content:{"application/json":{schema:{type:"object",properties:{job:{type:"string"},grade:{type:"string"}},title:"schemas"}}}}},path:"/path2-in-open-tag"}},"path1-in-closed-tag":{get:{summary:"Path 1 under closed tag",tags:["Closed"],parameters:[{name:"city",in:"query",schema:{type:"string"}},{name:"state",in:"query",schema:{type:"string"}}],responses:{200:{description:"Happy response",content:{"application/json":{schema:{type:"object",properties:{job:{type:"string"},grade:{type:"string"}},title:"schemas"}}}}},path:"/path1-in-closed-tag"}},"path2-in-closed-tag":{get:{summary:"Path 2 under closed tag",tags:["Closed"],parameters:[{name:"grade",in:"query",schema:{type:"string"}},{name:"salary",in:"query",schema:{type:"integer"}}],responses:{200:{description:"Happy response",content:{"application/json":{schema:{type:"object",properties:{job:{type:"string"},grade:{type:"string"}},title:"schemas"}}}}},path:"/path2-in-closed-tag"}},"No-Tags":{get:{summary:"This path dont have any tag associated with it. (It gets created from the path)",responses:{200:{description:"Happy response",content:{"application/json":{schema:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},name:{description:"First Name",type:"string"}},title:"schemas"}}}}},path:"/No-Tags",tags:["other"]}}},tags:[{name:"Open",description:"<p>This tag is <strong>open</strong> by default, and it contains 2 paths inside it.</p>\n"},{name:"Closed",description:"<p>This tag is <strong>closed</strong> in the begining when the spec loads. It achieved by using <code>x-tag-expanded</code> extension</p>\n","x-tag-expanded":!1}],components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},name:{description:"First Name",type:"string"}},title:"schemas"},job:{type:"object",properties:{job:{type:"string"},grade:{type:"string"}},title:"schemas"}}}},locales:{en:"English"},pathsByTags:{Open:{description:"<p>This tag is <strong>open</strong> by default, and it contains 2 paths inside it.</p>\n",isOpen:!0,items:[{name:"/path1-in-open-tag",path:"path1-in-open-tag",type:"get",description:null},{name:"/path2-in-open-tag",path:"path2-in-open-tag",type:"get",description:null}]},Closed:{description:"<p>This tag is <strong>closed</strong> in the begining when the spec loads. It achieved by using <code>x-tag-expanded</code> extension</p>\n",isOpen:!1,items:[{name:"/path1-in-closed-tag",path:"path1-in-closed-tag",type:"get",description:null},{name:"/path2-in-closed-tag",path:"path2-in-closed-tag",type:"get",description:null}]},other:{description:"",isOpen:!0,items:[{name:"/No-Tags",path:"No-Tags",type:"get",description:null}]}},fileName:"collapsable"},path_doc:"docs",file:"collapsable",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path},deep:!0}},methods:{downloadYaml:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},simples:function(){return[{in:"queryString",name:"apikey",value:"1111"}]},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(e=this.options.doc.paths[this.path].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},y=n(1),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.path,path_doc:t.path_doc,file:t.file,simples:t.simples,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);