import{_ as h,a as f,b as y,c as b,d as _}from"./SearchBlock.43c03cbe.js";import{a as v,f as x,r as i,b as g,c as p,h as q,o as n}from"./entry.7023a70d.js";import"./helpers.75b0c43c.js";import"./nuxt-link.8de9ea58.js";const j={name:"AppDocs",layout:"apidocs-layout-dynamic-form-params",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const e=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",a=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+e,description:a}},setup(){{const e=x(),a=i(e.params.locale??e.meta.locale),o=i(e.params.type??e.meta.type),s=i(e.params.path??e.meta.path);return{currentLocale:a,type:o,path:s}}},async fetch(){const e=this.$nuxt.context;try{this.currentLocale=e.route.params.locale??e.route.meta[0].locale,this.type=e.route.params.type??e.route.meta[0].type,this.path=e.route.params.path??e.route.meta[0].path}catch(a){console.error(a),console.error(e.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Dynamic Form Params",version:"1.0.0",description:`Following OpenAPI spec demonstrate various ways to pass form params.
  - You may pass predefined form params
  - You may create dynamic form params by defining a form-param as an object, 
`},paths:{"dynamic-form-parameters":{post:{tags:["Form Params"],summary:"Dynamic Params",description:`<pre><code class="hljs language-yaml"><span class="hljs-string">/dynamic-form-parameters:</span>
  <span class="hljs-attr">post:</span>
    <span class="hljs-attr">summary:</span> <span class="hljs-string">Dynamic</span> <span class="hljs-string">Params</span>
    <span class="hljs-attr">requestBody:</span>
      <span class="hljs-attr">content:</span>
        <span class="hljs-attr">multipart/form-data:</span>
          <span class="hljs-attr">schema:</span>
            <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
    <span class="hljs-attr">responses:</span>
      <span class="hljs-attr">&#x27;200&#x27;:</span>
        <span class="hljs-attr">description:</span> <span class="hljs-string">successful</span> <span class="hljs-string">operation</span>
</code></pre>
`,requestBody:{content:{"multipart/form-data":{schema:{type:"object",description:`<p>This param is defined as a dynamic param, this accepts data in a strict object notation (JSON) and its each <code>key</code>, <code>value</code> pairs is treated as a seperate form parameter. In this case the example will send 5 form parameters as shown below </p>
<pre><code> a = 1
 b = 2
 c = [ &quot;red&quot;, &quot;black&quot; ]
 d = { &quot;d1&quot;:1, &quot;d2&quot;:2 }
 e = 3
</code></pre>
`},example:`{
  &quot;a&quot;:1,
  &quot;b&quot;:2,
  &quot;c&quot;:[
    &quot;red&quot;,
    &quot;black&quot;
  ],
  &quot;d&quot;:{ &quot;d1&quot;:1, &quot;d2&quot;:2 },
  &quot;e&quot;:3
}
`}}},responses:{200:{description:"OK"}},path:"/dynamic-form-parameters"}},"fixed-form-parameters":{post:{tags:["Form Params"],summary:"Fixed Params",requestBody:{content:{"multipart/form-data":{schema:{type:"object",description:"name and age are fixed form params",properties:{name:{type:"string",description:"name of person",examples:{example1:{summary:"Fullname",value:"Nikola Tesla"},example2:{summary:"Name with prefix",value:"Dr. Albert Einstein"}}},age:{type:"integer",description:"age of person",example:28}}}}}},responses:{200:{description:"OK"}},path:"/fixed-form-parameters"}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{"Form Params":{name:"Form Params",description:"",isOpen:!0,items:[{name:"/dynamic-form-parameters",path:"dynamic-form-parameters",type:"post",description:`\`\`\`yaml
/dynamic-form-parameters:
  post:
    summary: Dynamic Params
    requestBody:
      content:
        multipart/form-data:
          schema:
            type: object
    responses:
      '200':
        description: successful operation
\`\`\`
`},{name:"/fixed-form-parameters",path:"fixed-form-parameters",type:"post",description:null}]}},fileName:"dynamic-form-params",layoutName:"apidocs-layout-dynamic-form-params",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"dynamic-form-params"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml(){const e=JSON.stringify(this.doc,null,4),a=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(a),s=document.createElement("a");s.href=o,s.download=this.file+".yaml",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function k(e,a,o,s,r,t){const c=h,l=f,m=y,d=_,u=b;return n(),g("div",null,[t.isInfo?(n(),p(c,{key:0,info:t.doc.info,servers:t.doc.servers,"current-locale":e.currentLocale},null,8,["info","servers","current-locale"])):t.isComponents?(n(),p(l,{key:1,components:t.doc.components,"current-locale":e.currentLocale},null,8,["components","current-locale"])):t.activeRoute?(n(),p(m,{key:2,route:t.activeRoute,"current-locale":e.currentLocale,method:e.type,components:t.doc.components,url:e.path,path_doc:r.path_doc,file:r.file,server:t.server,"sub-params":t.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(n(),p(d,{key:3})),q(u,{"current-locale":e.currentLocale,doc:t.doc,path:r.options.path,file:r.file},null,8,["current-locale","doc","path","file"])])}const D=v(j,[["render",k]]);export{D as default};
