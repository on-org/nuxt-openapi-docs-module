import{_ as h,a as y,b as f,c as g,d as j}from"./SearchBlock.10c805ba.js";import{a as b,f as _,r,b as v,c as l,h as x,o}from"./entry.c6e65efe.js";import"./helpers.75b0c43c.js";import"./nuxt-link.bce30875.js";const q={name:"AppDocs",layout:"apidocs-layout-file-upload",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const s=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",t=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+s,description:t}},setup(){{const s=_(),t=r(s.params.locale??s.meta.locale),n=r(s.params.type??s.meta.type),e=r(s.params.path??s.meta.path);return{currentLocale:t,type:n,path:e}}},async fetch(){const s=this.$nuxt.context;try{this.currentLocale=s.route.params.locale??s.route.meta[0].locale,this.type=s.route.params.type??s.route.meta[0].type,this.path=s.route.params.path??s.route.meta[0].path}catch(t){console.error(t),console.error(s.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Various ways to upload files (binary content)",version:"1.0.0"},paths:{"upload-single-file":{post:{tags:["File Upload"],summary:"Uploads single file using form-data",description:`<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-single-file:</span>
  <span class="hljs-attr">post:</span>
    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">single</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">form-data</span>
    <span class="hljs-attr">requestBody:</span>
      <span class="hljs-attr">content:</span>
        <span class="hljs-attr">multipart/form-data:</span>
          <span class="hljs-attr">schema:</span>
            <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
            <span class="hljs-attr">properties:</span>
              <span class="hljs-attr">filename:</span>
                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
                <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>      
</code></pre>
`,requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{name:{type:"string"},photo:{type:"string",format:"binary"}}}}}},responses:{200:{summary:"OK"}},path:"/upload-single-file"}},"upload-multiple-file":{post:{tags:["File Upload"],summary:"Uploads multiple file using form-data and type as &#x27;array&#x27;",description:`<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-multiple-file:</span>
  <span class="hljs-attr">post:</span>
    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">multiple</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">form-data</span> <span class="hljs-string">and</span> <span class="hljs-string">type</span> <span class="hljs-string">as</span> <span class="hljs-string">&#x27;array&#x27;</span>
    <span class="hljs-attr">requestBody:</span>
      <span class="hljs-attr">content:</span>
        <span class="hljs-attr">multipart/form-data:</span>
          <span class="hljs-attr">schema:</span>
            <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
            <span class="hljs-attr">properties:</span>
              <span class="hljs-attr">filename:</span>
                <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>
                <span class="hljs-attr">items:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
                  <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>      
</code></pre>
`,requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{name:{type:"string"},picture:{type:"array",items:{type:"string",format:"binary"}}}}}}},responses:{200:{description:"OK"}},path:"/upload-multiple-file"}},"upload-using-request-body":{post:{tags:["File Upload"],summary:"Uploads single file using request-body content-type as application/octet-stream",description:`<pre><code class="hljs language-yaml"><span class="hljs-string">/upload-using-request-body:</span>
  <span class="hljs-attr">post:</span>
    <span class="hljs-attr">summary:</span> <span class="hljs-string">Uploads</span> <span class="hljs-string">single</span> <span class="hljs-string">file</span> <span class="hljs-string">using</span> <span class="hljs-string">request-body</span> <span class="hljs-string">content-type</span> <span class="hljs-string">as</span> <span class="hljs-string">application/octet-stream</span>
    <span class="hljs-attr">requestBody:</span>
      <span class="hljs-attr">content:</span>
        <span class="hljs-attr">application/octet-stream:</span>
          <span class="hljs-attr">schema:</span>
            <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
            <span class="hljs-attr">format:</span> <span class="hljs-string">binary</span>
</code></pre>
`,requestBody:{content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"successful operation"}},path:"/upload-using-request-body"}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{"File Upload":{name:"File Upload",description:"",isOpen:!0,items:[{name:"/upload-single-file",path:"upload-single-file",type:"post",description:`\`\`\`yaml
/upload-single-file:
  post:
    summary: Uploads single file using form-data
    requestBody:
      content:
        multipart/form-data:
          schema:
            type: object
            properties:
              filename:
                type: string
                format: binary      
\`\`\`
`},{name:"/upload-multiple-file",path:"upload-multiple-file",type:"post",description:`\`\`\`yaml
/upload-multiple-file:
  post:
    summary: Uploads multiple file using form-data and type as 'array'
    requestBody:
      content:
        multipart/form-data:
          schema:
            type: object
            properties:
              filename:
                type: array
                items:
                  type: string
                  format: binary      
\`\`\`
`},{name:"/upload-using-request-body",path:"upload-using-request-body",type:"post",description:`\`\`\`yaml
/upload-using-request-body:
  post:
    summary: Uploads single file using request-body content-type as application/octet-stream
    requestBody:
      content:
        application/octet-stream:
          schema:
            type: string
            format: binary
\`\`\`
`}]}},fileName:"file-upload",layoutName:"apidocs-layout-file-upload",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"file-upload"}},watch:{"$route.meta":{handler:function(s){this.currentLocale=s.locale,this.type=s.type,this.path=s.path},deep:!0}},methods:{downloadYaml(){const s=JSON.stringify(this.doc,null,4),t=new Blob([s],{type:"application/json"}),n=URL.createObjectURL(t),e=document.createElement("a");e.href=n,e.download=this.file+".yaml",document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(n)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function k(s,t,n,e,p,a){const i=h,c=y,u=f,d=j,m=g;return o(),v("div",null,[a.isInfo?(o(),l(i,{key:0,info:a.doc.info,servers:a.doc.servers,"current-locale":s.currentLocale},null,8,["info","servers","current-locale"])):a.isComponents?(o(),l(c,{key:1,components:a.doc.components,"current-locale":s.currentLocale},null,8,["components","current-locale"])):a.activeRoute?(o(),l(u,{key:2,route:a.activeRoute,"current-locale":s.currentLocale,method:s.type,components:a.doc.components,url:s.path,path_doc:p.path_doc,file:p.file,server:a.server,"sub-params":a.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(o(),l(d,{key:3})),x(m,{"current-locale":s.currentLocale,doc:a.doc,path:p.options.path,file:p.file},null,8,["current-locale","doc","path","file"])])}const L=b(q,[["render",k]]);export{L as default};
