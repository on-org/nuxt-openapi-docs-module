import{_ as h,a as f,b as y,c as b,d as v}from"./SearchBlock.f0c23d8a.js";import{a as _,f as k,r as c,b as g,c as i,h as x,o as n}from"./entry.1ce51ac4.js";import"./helpers.75b0c43c.js";import"./nuxt-link.0cc91d56.js";const w={name:"AppDocs",layout:"apidocs-layout-callback",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const e=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",o=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+e,description:o}},setup(){{const e=k(),o=c(e.params.locale??e.meta.locale),a=c(e.params.type??e.meta.type),s=c(e.params.path??e.meta.path);return{currentLocale:o,type:a,path:s}}},async fetch(){const e=this.$nuxt.context;try{this.currentLocale=e.route.params.locale??e.route.meta[0].locale,this.type=e.route.params.type??e.route.meta[0].type,this.path=e.route.params.path??e.route.meta[0].path}catch(o){console.error(o),console.error(e.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Callback Example",version:"1.0.0"},paths:{streams:{post:{description:"subscribes a client to receive out-of-band data",parameters:[{name:"callbackUrl",in:"query",required:!0,description:`the location where data will be sent.  Must be network accessible
by the source server
`,schema:{type:"string",format:"uri",example:"https://tonys-server.com"}}],responses:{201:{description:"subscription successfully created",content:{"application/json":{schema:{description:"subscription information",required:["subscriptionId"],properties:{subscriptionId:{description:"this unique identifier allows management of the subscription",type:"string",example:"2531329f-fb09-4ef7-887e-84e648214436"}}}}}}},callbacks:{onData:{"{$request.query.callbackUrl1}/data":{post:{requestBody:{description:"subscription POST payload",content:{"application/json":{schema:{type:"object",properties:{timestamp:{type:"string",format:"date-time"},userData:{type:"string"}}}}}},responses:{202:{description:`Your server implementation should return this HTTP status code
if the data was received successfully
`},204:{description:`Your server should return this HTTP status code if no longer interested
in further updates
`}}}}}},path:"/streams",tags:["other"]}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/streams",path:"streams",type:"post",description:"subscribes a client to receive out-of-band data"}]}},fileName:"callback",layoutName:"apidocs-layout-callback",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"callback"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml(){const e=JSON.stringify(this.doc,null,4),o=new Blob([e],{type:"application/json"}),a=URL.createObjectURL(o),s=document.createElement("a");s.href=a,s.download=this.file+".yaml",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function R(e,o,a,s,r,t){const p=h,l=f,u=y,d=v,m=b;return n(),g("div",null,[t.isInfo?(n(),i(p,{key:0,info:t.doc.info,servers:t.doc.servers,"current-locale":e.currentLocale},null,8,["info","servers","current-locale"])):t.isComponents?(n(),i(l,{key:1,components:t.doc.components,"current-locale":e.currentLocale},null,8,["components","current-locale"])):t.activeRoute?(n(),i(u,{key:2,route:t.activeRoute,"current-locale":e.currentLocale,method:e.type,components:t.doc.components,url:e.path,path_doc:r.path_doc,file:r.file,server:t.server,"sub-params":t.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(n(),i(d,{key:3})),x(m,{"current-locale":e.currentLocale,doc:t.doc,path:r.options.path,file:r.file},null,8,["current-locale","doc","path","file"])])}const D=_(w,[["render",R]]);export{D as default};