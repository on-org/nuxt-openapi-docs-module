import{_ as g,a as h,b as x,c as u,d as f}from"./SearchBlock.f0c23d8a.js";import{a as b,f as F,r as a,b as j,c as n,h as R,o as i}from"./entry.1ce51ac4.js";import"./helpers.75b0c43c.js";import"./nuxt-link.0cc91d56.js";const B={name:"AppDocs",layout:"apidocs-layout-toomany-example-generation",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const e=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",o=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+e,description:o}},setup(){{const e=F(),o=a(e.params.locale??e.meta.locale),p=a(e.params.type??e.meta.type),r=a(e.params.path??e.meta.path);return{currentLocale:o,type:p,path:r}}},async fetch(){const e=this.$nuxt.context;try{this.currentLocale=e.route.params.locale??e.route.meta[0].locale,this.type=e.route.params.type??e.route.meta[0].type,this.path=e.route.params.path??e.route.meta[0].path}catch(o){console.error(o),console.error(e.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"tennis",version:"1.0",contact:{name:"test"}},paths:{getPlayer:{get:{summary:"Possibility of generatiing 1024 Examples",description:"the test case ensures that it do not generate more than 10 examples",responses:{200:{description:"OK",content:{"application/json":{schema:{title:"schemas",type:"object",properties:{eyeColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},hairColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},lipColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},mouthColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},pantsColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},racketColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},shirtColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},shoeColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},skinColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},sockColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]}}}}}}},tags:["Many Examples"],path:"/getPlayer"}},getTennisMatch:{get:{summary:"Possibility of generatiing 1 million Examples",description:"the test case ensures that it do not generate more than 10 examples",tags:["Many Examples"],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{leftPlayer:{title:"schemas",type:"object",properties:{eyeColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},hairColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},lipColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},mouthColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},pantsColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},racketColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},shirtColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},shoeColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},skinColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},sockColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]}}},rightPlayer:{title:"schemas",type:"object",properties:{eyeColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},hairColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},lipColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},mouthColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},pantsColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},racketColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},shirtColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},shoeColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},skinColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},sockColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]}}}}}}}}},path:"/getTennisMatch"},parameters:[]}},components:{schemas:{Color:{title:"Color",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},Player:{title:"schemas",type:"object",properties:{eyeColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},hairColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},lipColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},mouthColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},pantsColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},racketColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},shirtColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},shoeColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},skinColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]},sockColor:{title:"schemas",description:"",oneOf:[{type:"string",properties:{},description:"color code",example:"#FF0000"},{type:"object",properties:{r:{type:"integer",example:255},g:{type:"integer",example:0},b:{type:"integer",example:0}},description:"RGB color"}]}}}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{"Many Examples":{name:"Many Examples",description:"",isOpen:!0,items:[{name:"/getPlayer",path:"getPlayer",type:"get",description:"the test case ensures that it do not generate more than 10 examples"},{name:"/getTennisMatch",path:"getTennisMatch",type:"get",description:"the test case ensures that it do not generate more than 10 examples"}]}},fileName:"toomany-example-generation",layoutName:"apidocs-layout-toomany-example-generation",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"toomany-example-generation"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml(){const e=JSON.stringify(this.doc,null,4),o=new Blob([e],{type:"application/json"}),p=URL.createObjectURL(o),r=document.createElement("a");r.href=p,r.download=this.file+".yaml",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(p)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function O(e,o,p,r,s,t){const c=g,l=h,m=x,d=f,y=u;return i(),j("div",null,[t.isInfo?(i(),n(c,{key:0,info:t.doc.info,servers:t.doc.servers,"current-locale":e.currentLocale},null,8,["info","servers","current-locale"])):t.isComponents?(i(),n(l,{key:1,components:t.doc.components,"current-locale":e.currentLocale},null,8,["components","current-locale"])):t.activeRoute?(i(),n(m,{key:2,route:t.activeRoute,"current-locale":e.currentLocale,method:e.type,components:t.doc.components,url:e.path,path_doc:s.path_doc,file:s.file,server:t.server,"sub-params":t.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),n(d,{key:3})),R(y,{"current-locale":e.currentLocale,doc:t.doc,path:s.options.path,file:s.file},null,8,["current-locale","doc","path","file"])])}const k=b(B,[["render",O]]);export{k as default};