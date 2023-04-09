import{_ as d,a as f,b as y,c as _,d as v}from"./SearchBlock.f0c23d8a.js";import{a as b,f as x,r as p,b as k,c as i,h as g,o as r}from"./entry.1ce51ac4.js";import"./helpers.75b0c43c.js";import"./nuxt-link.0cc91d56.js";const w={name:"AppDocs",layout:"apidocs-layout-arr-of-arr",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const e=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",o=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+e,description:o}},setup(){{const e=x(),o=p(e.params.locale??e.meta.locale),s=p(e.params.type??e.meta.type),a=p(e.params.path??e.meta.path);return{currentLocale:o,type:s,path:a}}},async fetch(){const e=this.$nuxt.context;try{this.currentLocale=e.route.params.locale??e.route.meta[0].locale,this.type=e.route.params.type??e.route.meta[0].type,this.path=e.route.params.path??e.route.meta[0].path}catch(o){console.error(o),console.error(e.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{version:"1.2.3",title:"api"},paths:{api:{post:{summary:"api",requestBody:{content:{"application/json":{schema:{type:"object",properties:{array:{type:"array",items:{type:"array",items:{type:"array",items:{type:"number"}}}}},title:"schemas"}}}},responses:{200:{description:"Ok"}},path:"/api",tags:["other"]}}},components:{schemas:{Data:{type:"object",properties:{array:{type:"array",items:{type:"array",items:{type:"array",items:{type:"number"}}}}},title:"schemas"}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/api",path:"api",type:"post",description:null}]}},fileName:"arr-of-arr",layoutName:"apidocs-layout-arr-of-arr",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"arr-of-arr"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml(){const e=JSON.stringify(this.doc,null,4),o=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(o),a=document.createElement("a");a.href=s,a.download=this.file+".yaml",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(s)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function R(e,o,s,a,n,t){const c=d,l=f,u=y,m=v,h=_;return r(),k("div",null,[t.isInfo?(r(),i(c,{key:0,info:t.doc.info,servers:t.doc.servers,"current-locale":e.currentLocale},null,8,["info","servers","current-locale"])):t.isComponents?(r(),i(l,{key:1,components:t.doc.components,"current-locale":e.currentLocale},null,8,["components","current-locale"])):t.activeRoute?(r(),i(u,{key:2,route:t.activeRoute,"current-locale":e.currentLocale,method:e.type,components:t.doc.components,url:e.path,path_doc:n.path_doc,file:n.file,server:t.server,"sub-params":t.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(r(),i(m,{key:3})),g(h,{"current-locale":e.currentLocale,doc:t.doc,path:n.options.path,file:n.file},null,8,["current-locale","doc","path","file"])])}const D=b(w,[["render",R]]);export{D as default};