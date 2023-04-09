import{_ as h,a as y,b as f,c as g,d as x}from"./SearchBlock.f0c23d8a.js";import{a as b,f as v,r as p,b as _,c as i,h as w,o}from"./entry.1ce51ac4.js";import"./helpers.75b0c43c.js";import"./nuxt-link.0cc91d56.js";const k={name:"AppDocs",layout:"apidocs-layout-data-types-simple",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const e=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",a=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+e,description:a}},setup(){{const e=v(),a=p(e.params.locale??e.meta.locale),n=p(e.params.type??e.meta.type),s=p(e.params.path??e.meta.path);return{currentLocale:a,type:n,path:s}}},async fetch(){const e=this.$nuxt.context;try{this.currentLocale=e.route.params.locale??e.route.meta[0].locale,this.type=e.route.params.type??e.route.meta[0].type,this.path=e.route.params.path??e.route.meta[0].path}catch(a){console.error(a),console.error(e.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{description:"Contains all data types",version:"1.0.0",title:"Testing different data-types"},paths:{person:{post:{summary:"Demonstrates data-types and constraints",description:"Request-Parameters and Response-Schema contains various data types and constrains. Check out how is it desplayed below",parameters:[{in:"query",name:"search",examples:{example1:{summary:"s1",value:"v1"},example2:{summary:"s2",value:"v2"}},"x-fill-example":"no",schema:{type:"string"},description:"term to search (use &quot;*&quot; to show all)"},{in:"query",name:"id",example:"my-id",schema:{type:"string"}},{name:"height",in:"query",description:"height (in inches)",required:!0,example:70,schema:{type:"integer",format:"int32",minimum:12,maximum:120}},{name:"full-name",in:"query",description:"Name of a person",required:!0,examples:{empty:{value:null,summary:"No Name"},"male-name":{value:"James",summary:"Male name"},"female-name":{value:"Ria",summary:"Female Name"},"gender-nutral-name":{value:"Charlie",summary:"Gender Neutral Name"}},schema:{type:"string",minimum:3}},{name:"social-connection",in:"query",description:"facebook, linkedin, github, instagram, twitter etc",schema:{type:"string",format:"url"}},{name:"email",in:"query",required:!0,example:"iron_man@example.com",schema:{type:"string",format:"email"}},{name:"email-password",in:"query",required:!0,schema:{type:"string",format:"password"}},{name:"date-of-birth",in:"query",required:!0,example:"01-09-2021",schema:{type:"string",format:"date"}},{name:"interests",in:"query",required:!0,"x-fill-example":"yes",examples:["computers","movies"],schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["computers","hiking","swiming","movies","music","dancing","reading","painting"],default:"hiking"}}},{name:"tags",in:"query",description:"Add tags to the person (not-exploded)",style:"form",explode:!1,examples:["robot","not-real"],schema:{type:"array",items:{type:"string"}}},{name:"maritalStatus",in:"query",description:"marital status",example:"unmarried",schema:{type:"string",enum:["married","unmarried","widowed"]}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["name","photoUrls"],example:{name:"account-name",type:"StandardBankAccount",url:"https://api.freeagent.com/v2/bank_accounts/4093",current_balance:28742},properties:{id:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},category:{description:"Categories this person belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Category name",type:"string",minLength:1}},title:"schemas"}]},DependentIds:{type:"array",description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"string",minLength:4,example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{description:"Tags attached to the pet",type:"array",minItems:1,items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}},maritalStatus:{type:"string",description:"Pet status in the store",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}},title:"schemas"}}}}}},path:"/person",tags:["other"]}}},tags:[{name:"Person",description:"Person Datatype"}],components:{schemas:{Person:{type:"object",required:["name","photoUrls"],example:{name:"account-name",type:"StandardBankAccount",url:"https://api.freeagent.com/v2/bank_accounts/4093",current_balance:28742},properties:{id:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},category:{description:"Categories this person belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Category name",type:"string",minLength:1}},title:"schemas"}]},DependentIds:{type:"array",description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"string",minLength:4,example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{description:"Tags attached to the pet",type:"array",minItems:1,items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}},maritalStatus:{type:"string",description:"Pet status in the store",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}},title:"schemas"},Category:{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Category name",type:"string",minLength:1}},title:"schemas"},Id:{type:"integer",format:"int64",readOnly:!0,title:"schemas"},Tag:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/person",path:"person",type:"post",description:"Request-Parameters and Response-Schema contains various data types and constrains. Check out how is it desplayed below"}]}},fileName:"data-types-simple",layoutName:"apidocs-layout-data-types-simple",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"data-types-simple"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml(){const e=JSON.stringify(this.doc,null,4),a=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(a),s=document.createElement("a");s.href=n,s.download=this.file+".yaml",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function q(e,a,n,s,r,t){const m=h,l=y,c=f,d=x,u=g;return o(),_("div",null,[t.isInfo?(o(),i(m,{key:0,info:t.doc.info,servers:t.doc.servers,"current-locale":e.currentLocale},null,8,["info","servers","current-locale"])):t.isComponents?(o(),i(l,{key:1,components:t.doc.components,"current-locale":e.currentLocale},null,8,["components","current-locale"])):t.activeRoute?(o(),i(c,{key:2,route:t.activeRoute,"current-locale":e.currentLocale,method:e.type,components:t.doc.components,url:e.path,path_doc:r.path_doc,file:r.file,server:t.server,"sub-params":t.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(o(),i(d,{key:3})),w(u,{"current-locale":e.currentLocale,doc:t.doc,path:r.options.path,file:r.file},null,8,["current-locale","doc","path","file"])])}const L=b(k,[["render",q]]);export{L as default};