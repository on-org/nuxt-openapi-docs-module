(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{539:function(e,t,o){var content=o(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},540:function(e,t,o){"use strict";o(539)},541:function(e,t,o){var n=o(8)((function(i){return i[1]}));n.push([e.i,"",""]),n.locals={},e.exports=n},542:function(e,t,o){"use strict";o(159),o(545),o(50),o(51),o(204),o(160);var n=o(11),r={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:n.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),o=t.indexOf(e);if(-1!==o){var n=Math.max(o-50,0),r=Math.min(o+e.length+50,t.length),c="..."+t.substring(n,r)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var h in l){var d=l[h],m=this.tr(d,"summary",this.currentLocale).toLowerCase(),f=this.tr(d,"description",this.currentLocale).toLowerCase(),y=null,v=m.indexOf(e);if(-1!==v){var x=f.substring(0,100)+"...";y={path:d.path,title:m.replace(e,"<b>"+e+"</b>"),description:x+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}if(-1!==(v=f.indexOf(e))){var w=Math.max(v-50,0),O=Math.min(v+e.length+50,f.length),_="..."+f.substring(w,O)+"...";_=_.replace(e,"<b>"+e+"</b>"),y?y.description=_:y={path:d.path,title:m,description:_,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}y&&this.list.push(y)}}}}}},c=(o(540),o(1)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(o){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:o.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(o.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(o.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(o.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.a=component.exports},610:function(e,t,o){"use strict";o.r(t);var n=o(3),r=(o(21),o(159),o(204),o(338),o(337),o(339),o(543),o(544),o(17),o(6)),c=o(5),l=o(4),h=o(7),d=o(542),m={name:"AppDocs",layout:function(e){var t;return"apidocs-layout-".concat(null!==(t=e.route.params.file)&&void 0!==t?t:e.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:r.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:h.a,SearchBlock:d.a},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.$nuxt.context;try{e.currentLocale=null!==(n=o.route.params.locale)&&void 0!==n?n:o.route.meta[0].locale,e.type=null!==(r=o.route.params.type)&&void 0!==r?r:o.route.meta[0].type,e.path=null!==(c=o.route.params.path)&&void 0!==c?c:o.route.meta[0].path}catch(e){console.error(e),console.error(o.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"one-of Models",version:"1.0.0",description:"Spec containing model composition using one-of. Checkout the model definition under the RESPONSE section"},paths:{"one-of_employee":{get:{tags:["One Of Schema Model"],summary:"Schema defined using one-of",operationId:"empDetails",responses:{200:{description:"Checkout the model tab to view object schemas defined using one-of",content:{"application/json":{schema:{type:"array",items:{type:"object",additionalProperties:!1,properties:{id:{type:"string",description:"Employee ID"},employee:{description:"Employee Details (Worker or Manager)",oneOf:[{title:"schemas",type:"object",additionalProperties:!1,properties:{name:{type:"string",description:"Name of employee"},directReports:{type:"integer",description:"Count of direct reports"},managePower:{oneOf:[{title:"schemas",type:"object",additionalProperties:!1,properties:{level:{type:"integer"},maxDirectReportsAllowed:{type:"string",description:"No of people the level can manage"}}},{title:"schemas",type:"object",additionalProperties:!1,properties:{level:{type:"integer"},canAuthorizeMaxAmount:{type:"number",description:"Maximum amount that this level can authorize"}}}]}}},{title:"schemas",type:"object",additionalProperties:!1,properties:{name:{type:"string",description:"Name of employee"},managerName:{type:"string",description:"Name of manager"}}}]}},title:"schemas"}}}}}},path:"/one-of/employee"}},"one-of_schema":{get:{tags:["One Of Schema Model"],summary:"ONE-OF schema example generation test",operationId:"empDetails",responses:{200:{description:"Should generate 2 examples one with each option and the properties",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{option1_PropA:{type:"string"},option1_PropB:{type:"string"}}},{type:"object",properties:{option2_PropX:{type:"string"}}}],properties:{prop1:{type:"string"},prop2:{type:"string",minLength:10}}}}}}},path:"/one-of/schema"}},"one-of_schema_senseless-options":{get:{tags:["One Of Schema Model"],summary:"ONE-OF schema example generation test but with senseless options",operationId:"empDetails",responses:{200:{description:"Should only generate examples for options that are objects",content:{"application/json":{schema:{oneOf:[{type:"null"},{type:"string"},{type:"object",properties:{option2_PropX:{type:"string"}}},{type:"object",properties:{option1_PropA:{type:"string"},option1_PropB:{type:"string"}}}],properties:{prop1:{type:"string"},prop2:{type:"string",minLength:10}}}}}}},path:"/one-of/schema/senseless-options"}},"one-of_schema_root":{get:{tags:["One Of Schema Model"],summary:"ONE-OF schema example generation with object and primitives at the root level (no common properties)",operationId:"empDetails",responses:{200:{description:"Should generate examples for both the object and primitive options, but not for null",content:{"application/json":{schema:{oneOf:[{type:"null"},{type:"string"},{type:"object",properties:{option2_PropX:{type:"string"}}},{type:"object",properties:{option1_PropA:{type:"string"},option1_PropB:{type:"string"}}}]}}}}},path:"/one-of/schema/root"}}},tags:[{name:"Employee Details",description:"Employee Details"}],components:{schemas:{employee:{type:"object",additionalProperties:!1,properties:{id:{type:"string",description:"Employee ID"},employee:{description:"Employee Details (Worker or Manager)",oneOf:[{title:"schemas",type:"object",additionalProperties:!1,properties:{name:{type:"string",description:"Name of employee"},directReports:{type:"integer",description:"Count of direct reports"},managePower:{oneOf:[{title:"schemas",type:"object",additionalProperties:!1,properties:{level:{type:"integer"},maxDirectReportsAllowed:{type:"string",description:"No of people the level can manage"}}},{title:"schemas",type:"object",additionalProperties:!1,properties:{level:{type:"integer"},canAuthorizeMaxAmount:{type:"number",description:"Maximum amount that this level can authorize"}}}]}}},{title:"schemas",type:"object",additionalProperties:!1,properties:{name:{type:"string",description:"Name of employee"},managerName:{type:"string",description:"Name of manager"}}}]}},title:"schemas"},manager:{title:"schemas",type:"object",additionalProperties:!1,properties:{name:{type:"string",description:"Name of employee"},directReports:{type:"integer",description:"Count of direct reports"},managePower:{oneOf:[{title:"schemas",type:"object",additionalProperties:!1,properties:{level:{type:"integer"},maxDirectReportsAllowed:{type:"string",description:"No of people the level can manage"}}},{title:"schemas",type:"object",additionalProperties:!1,properties:{level:{type:"integer"},canAuthorizeMaxAmount:{type:"number",description:"Maximum amount that this level can authorize"}}}]}}},worker:{title:"schemas",type:"object",additionalProperties:!1,properties:{name:{type:"string",description:"Name of employee"},managerName:{type:"string",description:"Name of manager"}}},peopleManager:{title:"schemas",type:"object",additionalProperties:!1,properties:{level:{type:"integer"},maxDirectReportsAllowed:{type:"string",description:"No of people the level can manage"}}},costManager:{title:"schemas",type:"object",additionalProperties:!1,properties:{level:{type:"integer"},canAuthorizeMaxAmount:{type:"number",description:"Maximum amount that this level can authorize"}}}}}},locales:{en:"English"},pathsByTags:{"One Of Schema Model":{description:"",isOpen:!0,items:[{name:"/one-of/employee",path:"one-of_employee",type:"get",description:null},{name:"/one-of/schema",path:"one-of_schema",type:"get",description:null},{name:"/one-of/schema/senseless-options",path:"one-of_schema_senseless-options",type:"get",description:null},{name:"/one-of/schema/root",path:"one-of_schema_root",type:"get",description:null}]}},fileName:"oneof"},path_doc:"docs",file:"oneof",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(t),link=document.createElement("a");link.href=o,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(o)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},simples:function(){return[{in:"queryString",name:"apikey",value:"1111"}]},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(t=this.options.doc.paths[this.path].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},f=o(1),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.path,path_doc:e.path_doc,file:e.file,simples:e.simples,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);