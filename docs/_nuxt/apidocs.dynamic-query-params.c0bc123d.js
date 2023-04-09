import{_ as d,a as y,b as j,c as f,d as g}from"./SearchBlock.bca23b98.js";import{a as q,f as b,r as o,b as x,c as l,h as v,o as p}from"./entry.a7680423.js";import"./helpers.75b0c43c.js";import"./nuxt-link.859f6161.js";const _={name:"AppDocs",layout:"apidocs-layout-dynamic-query-params",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const s=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",n=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+s,description:n}},setup(){{const s=b(),n=o(s.params.locale??s.meta.locale),t=o(s.params.type??s.meta.type),e=o(s.params.path??s.meta.path);return{currentLocale:n,type:t,path:e}}},async fetch(){const s=this.$nuxt.context;try{this.currentLocale=s.route.params.locale??s.route.meta[0].locale,this.type=s.route.params.type??s.route.meta[0].type,this.path=s.route.params.path??s.route.meta[0].path}catch(n){console.error(n),console.error(s.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:`<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>
<ul>
<li>you may pass predefined query params</li>
<li>you may create dynamic query params by defining a query-param as an object,
in that case each key of the object will be treated as a seperate param</li>
<li>Array serialization depends on <code>style</code> and <code>explode</code> property</li>
</ul>
<pre><code class="hljs language-yaml"> <span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>
  <span class="hljs-attr">info:</span>
    <span class="hljs-attr">title:</span>  <span class="hljs-string">Dynamic</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>
    <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>
  <span class="hljs-attr">paths:</span>
    <span class="hljs-string">/dynamic-query-params:</span>
      <span class="hljs-attr">get:</span>
        <span class="hljs-attr">tags:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>
        <span class="hljs-attr">summary:</span>  <span class="hljs-string">Various</span> <span class="hljs-string">ways</span> <span class="hljs-string">to</span> <span class="hljs-string">pass</span> <span class="hljs-string">query</span> <span class="hljs-string">params</span>
        <span class="hljs-attr">parameters:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">limit</span>
            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">integer</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">fruits</span>
            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>
            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>
              <span class="hljs-attr">items:</span>
                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">colors</span>
            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>
              <span class="hljs-attr">items:</span>
                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params1</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
              <span class="hljs-attr">additionalProperties:</span> {}
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params2</span>
            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>
            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
              <span class="hljs-attr">additionalProperties:</span> {}
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params3</span>
            <span class="hljs-attr">style:</span> <span class="hljs-string">pipeDelimited</span>
            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
              <span class="hljs-attr">additionalProperties:</span> {}
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params4</span>
            <span class="hljs-attr">content:</span>
              <span class="hljs-attr">&quot;application/json&quot;:</span>
                <span class="hljs-attr">schema:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
                  <span class="hljs-attr">properties:</span>
                    <span class="hljs-attr">someProperty:</span>
                      <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
                  <span class="hljs-attr">additionalProperties:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params5</span>
            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">required:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
              <span class="hljs-attr">properties:</span>
                <span class="hljs-attr">propertyOne:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
                  <span class="hljs-attr">enum:</span>
                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-1</span>
                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-2</span>
                  <span class="hljs-attr">default:</span> <span class="hljs-string">VALUE-2</span>
                <span class="hljs-attr">propertyTwo:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
                  <span class="hljs-attr">enum:</span>
                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-1</span>
                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-2</span>
                  <span class="hljs-attr">default:</span> <span class="hljs-string">FLAG-1</span>
        <span class="hljs-attr">responses:</span>
          <span class="hljs-attr">&#x27;200&#x27;:</span>
            <span class="hljs-attr">description:</span> <span class="hljs-string">successful</span> <span class="hljs-string">operation</span>
</code></pre>
`,parameters:[{name:"limit",in:"query",example:10,description:"primitive non-dynamic parameter can coexist with dynamic parameters &lt;br /&gt; `limit=10`\n",schema:{type:"integer"}},{name:"fruits",in:"query",example:["apple","banana","grape"],description:"not-exploded array, should be serialized as &lt;br /&gt; `fruits=apple,banana,grape`\n",schema:{type:"array",items:{type:"string"}}},{name:"colors",in:"query",example:["red","black","white"],description:"exploded array, should be serialized as &lt;br /&gt; `colors=red&colors=black&colors=white`\n",schema:{type:"array",items:{type:"string"}}},{in:"query",name:"dynamic-query-params1",description:"Arrays are exploded, should be serialized as  &lt;br /&gt; `a=1&b=2&colors=red&colors=black&e=3`\n",schema:{type:"object",additionalProperties:{}},example:`{
  &quot;a&quot;:1,
  &quot;b&quot;:2,
  &quot;colors&quot;:[
    &quot;red&quot;,
    &quot;black&quot;
  ],
  &quot;d&quot;:{ &quot;d1&quot;:1, &quot;d2&quot;:2 },
  &quot;e&quot;:3
}
`},{in:"query",name:"dynamic-query-params2",description:"Arrays are not-exploded, therefore comma sperated &lt;br /&gt; `f=1&g=2&hobbies=music,dance`\n",style:"form",explode:!1,schema:{type:"object",additionalProperties:{}},example:`{
  &quot;f&quot;:1,
  &quot;g&quot;:2,
  &quot;hobbies&quot;:[
    &quot;music&quot;,
    &quot;dance&quot;
  ]
}
`},{in:"query",name:"dynamic-query-params3",description:"Arrays are not exploded, and pipe separated &lt;br /&gt; `i=1&j=2&keys=public&#x7C;private`\n",style:"pipeDelimited",explode:!1,schema:{type:"object",additionalProperties:{}},example:`{
  &quot;i&quot;:1,
  &quot;j&quot;:2,
  &quot;keys&quot;:[&quot;public&quot;, &quot;private&quot;]
}
`},{in:"query",name:"dynamic-query-params4",description:"Parameters with JSON encoding are JSON encoded and escaped: &lt;br /&gt; `dynamic-query-params4=%7B%22someProperty%22%3A%22foo%22%2C%22bar%22%3A%22baz%22%7D`\n",content:{"application/json":{example:`{
  &quot;someProperty&quot;: &quot;foo&quot;,
  &quot;bar&quot;: &quot;baz&quot;
}
`,schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}},path:"/dynamic-query-params"}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{"Query Params":{name:"Query Params",description:"",isOpen:!0,items:[{name:"/dynamic-query-params",path:"dynamic-query-params",type:"get",description:`Following OpenAPI spec demonstrate various ways to pass query params.
  - you may pass predefined query params
  - you may create dynamic query params by defining a query-param as an object,
    in that case each key of the object will be treated as a seperate param
  - Array serialization depends on \`style\` and \`explode\` property

\`\`\`yaml
 openapi: 3.0.0
  info:
    title:  Dynamic Query Params
    version: 1.0.0
  paths:
    /dynamic-query-params:
      get:
        tags:
          - Query Params
        summary:  Various ways to pass query params
        parameters:
          - name: limit
            in: query
            schema:
              type: integer
          - name: fruits
            in: query
            style: form
            explode: false
            schema:
              type: array
              items:
                type: string
          - name: colors
            in: query
            schema:
              type: array
              items:
                type: string
          - in: query
            name: dynamic-query-params1
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params2
            style: form
            explode: false
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params3
            style: pipeDelimited
            explode: false
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params4
            content:
              "application/json":
                schema:
                  type: object
                  properties:
                    someProperty:
                      type: string
                  additionalProperties:
                  type: string
          - in: query
            name: dynamic-query-params5
            explode: false
            required: false
            schema:
              type: object
              properties:
                propertyOne:
                  type: string
                  enum:
                    - VALUE-1
                    - VALUE-2
                  default: VALUE-2
                propertyTwo:
                  type: string
                  enum:
                    - FLAG-1
                    - FLAG-2
                  default: FLAG-1
        responses:
          '200':
            description: successful operation
  \`\`\`
`}]}},fileName:"dynamic-query-params",layoutName:"apidocs-layout-dynamic-query-params",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"dynamic-query-params"}},watch:{"$route.meta":{handler:function(s){this.currentLocale=s.locale,this.type=s.type,this.path=s.path},deep:!0}},methods:{downloadYaml(){const s=JSON.stringify(this.doc,null,4),n=new Blob([s],{type:"application/json"}),t=URL.createObjectURL(n),e=document.createElement("a");e.href=t,e.download=this.file+".yaml",document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(t)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function w(s,n,t,e,r,a){const i=d,c=y,h=j,m=g,u=f;return p(),x("div",null,[a.isInfo?(p(),l(i,{key:0,info:a.doc.info,servers:a.doc.servers,"current-locale":s.currentLocale},null,8,["info","servers","current-locale"])):a.isComponents?(p(),l(c,{key:1,components:a.doc.components,"current-locale":s.currentLocale},null,8,["components","current-locale"])):a.activeRoute?(p(),l(h,{key:2,route:a.activeRoute,"current-locale":s.currentLocale,method:s.type,components:a.doc.components,url:s.path,path_doc:r.path_doc,file:r.file,server:a.server,"sub-params":a.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),l(m,{key:3})),v(u,{"current-locale":s.currentLocale,doc:a.doc,path:r.options.path,file:r.file},null,8,["current-locale","doc","path","file"])])}const E=q(_,[["render",w]]);export{E as default};
