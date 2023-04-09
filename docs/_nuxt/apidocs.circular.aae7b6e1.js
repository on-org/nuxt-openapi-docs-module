import{_ as d,a as y,b as f,c as b,d as k}from"./SearchBlock.f0c23d8a.js";import{a as g,f as _,r as p,b as x,c as n,h as v,o as a}from"./entry.1ce51ac4.js";import"./helpers.75b0c43c.js";import"./nuxt-link.0cc91d56.js";const w={name:"AppDocs",layout:"apidocs-layout-circular",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const e=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",o=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+e,description:o}},setup(){{const e=_(),o=p(e.params.locale??e.meta.locale),r=p(e.params.type??e.meta.type),s=p(e.params.path??e.meta.path);return{currentLocale:o,type:r,path:s}}},async fetch(){const e=this.$nuxt.context;try{this.currentLocale=e.route.params.locale??e.route.meta[0].locale,this.type=e.route.params.type??e.route.meta[0].type,this.path=e.route.params.path??e.route.meta[0].path}catch(o){console.error(o),console.error(e.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{swagger:"2.0",info:{title:"Circular References",version:"1.0.0"},paths:{books:{get:{summary:"List all books",description:"here the `related_books` schema is same as `books` schema, creating a circular reference, it should show `recursive` in the model",tags:["Circular References"],responses:{200:{description:"An array of books",schema:{type:"array",items:{type:"object",properties:{title:{type:"string",example:"Drama"},books:{type:"array",items:{type:"object",required:["title","summary"],properties:{title:{type:"string",example:"Winnie the Pooh"},summary:{type:"string",example:"Famous children&#x27;s book"},related_books:{type:"array",items:{type:"string",title:"Book",description:"recursive"}}},title:"Book"}}},title:"Category"}}}},path:"/books"}}},definitions:{Store:{type:"object",properties:{title:{type:"string",example:"Book Shop"},categories:{type:"array",items:{type:"object",properties:{title:{type:"string",example:"Drama"},books:{type:"array",items:{type:"object",required:["title","summary"],properties:{title:{type:"string",example:"Winnie the Pooh"},summary:{type:"string",example:"Famous children&#x27;s book"},related_books:{type:"array",items:{type:"string",title:"Book",description:"recursive"}}},title:"Book"}}},title:"Category"}}}},Category:{type:"object",properties:{title:{type:"string",example:"Drama"},books:{type:"array",items:{type:"object",required:["title","summary"],properties:{title:{type:"string",example:"Winnie the Pooh"},summary:{type:"string",example:"Famous children&#x27;s book"},related_books:{type:"array",items:{type:"string",title:"Book",description:"recursive"}}},title:"Book"}}},title:"Category"},Book:{type:"object",required:["title","summary"],properties:{title:{type:"string",example:"Winnie the Pooh"},summary:{type:"string",example:"Famous children&#x27;s book"},related_books:{type:"array",items:{type:"object",required:["title","summary"],properties:{title:{type:"string",example:"Winnie the Pooh"},summary:{type:"string",example:"Famous children&#x27;s book"},related_books:{type:"array",items:{type:"string",title:"Book",description:"recursive"}}},title:"Book"}}},title:"Book"}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{"Circular References":{name:"Circular References",description:"",isOpen:!0,items:[{name:"/books",path:"books",type:"get",description:"here the `related_books` schema is same as `books` schema, creating a circular reference, it should show `recursive` in the model"}]}},fileName:"circular",layoutName:"apidocs-layout-circular",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"circular"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml(){const e=JSON.stringify(this.doc,null,4),o=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(o),s=document.createElement("a");s.href=r,s.download=this.file+".yaml",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function B(e,o,r,s,i,t){const c=d,l=y,m=f,u=k,h=b;return a(),x("div",null,[t.isInfo?(a(),n(c,{key:0,info:t.doc.info,servers:t.doc.servers,"current-locale":e.currentLocale},null,8,["info","servers","current-locale"])):t.isComponents?(a(),n(l,{key:1,components:t.doc.components,"current-locale":e.currentLocale},null,8,["components","current-locale"])):t.activeRoute?(a(),n(m,{key:2,route:t.activeRoute,"current-locale":e.currentLocale,method:e.type,components:t.doc.components,url:e.path,path_doc:i.path_doc,file:i.file,server:t.server,"sub-params":t.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(a(),n(u,{key:3})),v(h,{"current-locale":e.currentLocale,doc:t.doc,path:i.options.path,file:i.file},null,8,["current-locale","doc","path","file"])])}const D=g(w,[["render",B]]);export{D as default};