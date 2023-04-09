import{_ as j,a as m,b as g,c as y,d as f}from"./SearchBlock.f0c23d8a.js";import{a as q,f as b,r as c,b as w,c as l,h as k,o as p}from"./entry.1ce51ac4.js";import"./helpers.75b0c43c.js";import"./nuxt-link.0cc91d56.js";const x={name:"AppDocs",layout:"apidocs-layout-code-highlight",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const s=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",a=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+s,description:a}},setup(){{const s=b(),a=c(s.params.locale??s.meta.locale),e=c(s.params.type??s.meta.type),t=c(s.params.path??s.meta.path);return{currentLocale:a,type:e,path:t}}},async fetch(){const s=this.$nuxt.context;try{this.currentLocale=s.route.params.locale??s.route.meta[0].locale,this.type=s.route.params.type??s.route.meta[0].type,this.path=s.route.params.path??s.route.meta[0].path}catch(a){console.error(a),console.error(s.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Syntax Highlighting",version:"1.0.0",description:`<p>You may provide little snippets of code using markdown syntax and they will be color coded based on the language you specified as shown below</p>
<pre><code>    \`\`\`java
      some code...
      ...
      ...
    \`\`\`
</code></pre>
<p>Following are the supported language codes that you may use for syntax highlighting</p>
<ul>
<li><code>bash</code> <code>shell</code></li>
<li><code>markup</code> <code>html</code> <code>xml</code> <code>svg</code></li>
<li><code>json</code></li>
<li><code>yaml</code> <code>yml</code></li>
<li><code>go</code></li>
<li><code>javascript</code> <code>js</code></li>
<li><code>java</code></li>
<li><code>python</code> <code>py</code></li>
<li><code>csharp</code> <code>cs</code></li>
<li><code>http</code></li>
<li><code>css</code></li>
</ul>
<p><strong>No Highlight</strong></p>
<pre><code>$ curl -X POST -is -u username:password
  -H &quot;Content-Type: application/json&quot; https://example.com
  -d &#x27;{
    &quot;target&quot;: {
      &quot;ref_type&quot;: &quot;branch&quot;,
      &quot;type&quot;: &quot;pipeline_ref_target&quot;,
      &quot;ref_name&quot;: &quot;master&quot;
    }
  }&#x27;
</code></pre>
<p><strong>SHELL</strong> <code>shell</code> <code>bash</code></p>
<pre><code class="hljs language-bash">$ curl -X POST -is -u username:password
  -H <span class="hljs-string">&quot;Content-Type: application/json&quot;</span> https://example.com
  -d <span class="hljs-string">&#x27;{
    &quot;target&quot;: {
      &quot;ref_type&quot;: &quot;branch&quot;,
      &quot;type&quot;: &quot;pipeline_ref_target&quot;,
      &quot;ref_name&quot;: &quot;master&quot;
    }
  }&#x27;</span>
</code></pre>
<p><strong>MARKUP</strong> <code>markup</code> <code>html</code> <code>xml</code> <code>svg</code></p>
<pre><code class="hljs language-markup">&lt;!doctype html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt; &lt;!-- Important: rapi-doc uses utf8 characters --&gt;
    &lt;script type=&quot;module&quot; src=&quot;https://unpkg.com/rapidoc/dist/rapidoc-min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;rapi-doc spec-url=&quot;https://petstore.swagger.io/v2/swagger.json&quot;&gt; &lt;/rapi-doc&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p><strong>JSON</strong> <code>json</code></p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;firstName&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Mickey&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;lastName&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Mouse&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;age&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">9</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;married&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">false</span></span><span class="hljs-punctuation">,</span>
<span class="hljs-punctuation">}</span>
</code></pre>
<p><strong>YAML</strong> <code>yaml</code> <code>yml</code></p>
<pre><code class="hljs language-yaml"><span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>
<span class="hljs-attr">info:</span>
  <span class="hljs-attr">title:</span> <span class="hljs-string">Syntax</span> <span class="hljs-string">Highlighting</span>
  <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>
  <span class="hljs-attr">description:</span> <span class="hljs-string">&gt;
    Example of
    Syntax highlighting</span>
</code></pre>
<p><strong>GO</strong> <code>go</code></p>
<pre><code class="hljs language-go"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">readFileAsLines</span><span class="hljs-params">(path <span class="hljs-type">string</span>)</span></span> ([]<span class="hljs-type">string</span>, <span class="hljs-type">error</span>) {
  d, err := ioutil.ReadFile(path)
  <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">nil</span>, err
  }
  s := <span class="hljs-type">string</span>(d)
  res := strings.Split(s, <span class="hljs-string">&quot;\\n&quot;</span>)
  <span class="hljs-keyword">return</span> res, <span class="hljs-literal">nil</span>
}
</code></pre>
<p><strong>JAVA SCRIPT</strong> <code>javascript</code> <code>js</code></p>
<pre><code class="hljs language-js">  <span class="hljs-keyword">function</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">x, y</span>) {
    <span class="hljs-keyword">const</span> answer = x + y;
    <span class="hljs-keyword">return</span> answer;
  }

  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-number">3</span>, i); <span class="hljs-comment">// prints in console</span>
  }
</code></pre>
<p><strong>JAVA</strong> <code>java</code></p>
<pre><code class="hljs language-java"><span class="hljs-type">BufferedWriter</span> <span class="hljs-variable">out</span> <span class="hljs-operator">=</span> <span class="hljs-literal">null</span>;
<span class="hljs-keyword">try</span> {
  out = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BufferedWriter</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileWriter</span>(”filename”, <span class="hljs-literal">true</span>));
  out.write(”aString”);
} <span class="hljs-keyword">catch</span> (IOException e) {
  <span class="hljs-comment">// error processing code</span>
} <span class="hljs-keyword">finally</span> {
  <span class="hljs-keyword">if</span> (out != <span class="hljs-literal">null</span>) {
    out.close();
  }
}
</code></pre>
<p><strong>PYTHON</strong> <code>python</code> <code>py</code></p>
<pre><code class="hljs language-python"><span class="hljs-meta">@app.route(<span class="hljs-params"><span class="hljs-string">&#x27;/parse_data&#x27;</span>, methods=[<span class="hljs-string">&#x27;GET&#x27;</span>, <span class="hljs-string">&#x27;POST&#x27;</span>]</span>)</span>
<span class="hljs-comment"># define the function</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">parse_data</span>():
  <span class="hljs-keyword">if</span> request.method == <span class="hljs-string">&#x27;POST&#x27;</span>:
    search = request.get_json()
    <span class="hljs-keyword">return</span> jsonify(search)
  <span class="hljs-keyword">return</span> render_template(<span class="hljs-string">&#x27;index.html&#x27;</span>)
</code></pre>
<p><strong>C SHARP</strong> <code>chsarp</code> <code>cs</code></p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">using</span> System.IO.Compression;

<span class="hljs-keyword">namespace</span> <span class="hljs-title">MyApplication</span> {
  [<span class="hljs-meta">Obsolete(<span class="hljs-string">&quot;...&quot;</span>)</span>]
  <span class="hljs-keyword">class</span> <span class="hljs-title">Program</span> : <span class="hljs-title">IInterface</span> {
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-title">List</span>&lt;<span class="hljs-title">int</span>&gt; <span class="hljs-title">JustDoIt</span>(<span class="hljs-params"><span class="hljs-built_in">int</span> count</span>)</span> {
      Console.WriteLine(<span class="hljs-string">$&quot;Hello <span class="hljs-subst">{Name}</span>!&quot;</span>);
      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> List&lt;<span class="hljs-built_in">int</span>&gt;(<span class="hljs-keyword">new</span> <span class="hljs-built_in">int</span>[] { <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span> })
    }
  }
}
</code></pre>
<p><strong>HTTP</strong> <code>http</code></p>
<pre><code class="hljs language-http"><span class="hljs-keyword">POST</span> <span class="hljs-string">/pet</span> <span class="hljs-meta">HTTP/1.1</span>
<span class="hljs-attribute">Host</span><span class="hljs-punctuation">: </span>example.org
<span class="hljs-attribute">Content-Type</span><span class="hljs-punctuation">: </span>application/json; charset=utf-8
<span class="hljs-attribute">Content-Length</span><span class="hljs-punctuation">: </span>137

<span class="language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;status&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ok&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;extended&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;results&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;int64&quot;</span><span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0e+3</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;decimal&quot;</span><span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span></span>
</code></pre>
`},paths:{code:{get:{summary:"Syntax Highlighting in Markdown",description:`<p>Syntax Highlighting in <strong>OPERATION DESCRIPTION</strong></p>
<pre><code class="hljs language-http"><span class="hljs-keyword">POST</span> <span class="hljs-string">/pet</span> <span class="hljs-meta">HTTP/1.1</span>
<span class="hljs-attribute">Host</span><span class="hljs-punctuation">: </span>example.org
<span class="hljs-attribute">Content-Type</span><span class="hljs-punctuation">: </span>application/json; charset=utf-8
<span class="hljs-attribute">Content-Length</span><span class="hljs-punctuation">: </span>137

<span class="language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;status&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ok&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;extended&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;results&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;int64&quot;</span><span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0e+3</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;decimal&quot;</span><span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span></span>
</code></pre>
`,path:"/code",tags:["other"]},post:{summary:"Request body",requestBody:{description:`<p>Syntax Highlighting in <strong>REQUEST BODY</strong></p>
<pre><code class="hljs language-js"><span class="hljs-keyword">function</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">x, y</span>) {
  <span class="hljs-keyword">const</span> answer = x + y;
  <span class="hljs-keyword">return</span> answer;
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++){
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-number">3</span>, i); <span class="hljs-comment">// prints in console</span>
}
</code></pre>
`,content:{"application/json":{schema:{type:"object",properties:{amount:{type:"integer"},currency:{type:"string"}},title:"schemas"}}}},responses:{200:{description:"Successful"}},path:"/code",tags:["other"]}}},components:{schemas:{Price:{type:"object",properties:{amount:{type:"integer"},currency:{type:"string"}},title:"schemas"}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/code",path:"code",type:"get",description:`Syntax Highlighting in **OPERATION DESCRIPTION**
\`\`\`http
POST /pet HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  "status": "ok",
  "extended": true,
  "results": [
    {"value": 0, "type": "int64"},
    {"value": 1.0e+3, "type": "decimal"}
  ]
}
\`\`\`
`},{name:"/code",path:"code",type:"post",description:null}]}},fileName:"code-highlight",layoutName:"apidocs-layout-code-highlight",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"code-highlight"}},watch:{"$route.meta":{handler:function(s){this.currentLocale=s.locale,this.type=s.type,this.path=s.path},deep:!0}},methods:{downloadYaml(){const s=JSON.stringify(this.doc,null,4),a=new Blob([s],{type:"application/json"}),e=URL.createObjectURL(a),t=document.createElement("a");t.href=e,t.download=this.file+".yaml",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(e)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function _(s,a,e,t,o,n){const r=j,i=m,u=g,h=f,d=y;return p(),w("div",null,[n.isInfo?(p(),l(r,{key:0,info:n.doc.info,servers:n.doc.servers,"current-locale":s.currentLocale},null,8,["info","servers","current-locale"])):n.isComponents?(p(),l(i,{key:1,components:n.doc.components,"current-locale":s.currentLocale},null,8,["components","current-locale"])):n.activeRoute?(p(),l(u,{key:2,route:n.activeRoute,"current-locale":s.currentLocale,method:s.type,components:n.doc.components,url:s.path,path_doc:o.path_doc,file:o.file,server:n.server,"sub-params":n.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),l(h,{key:3})),k(d,{"current-locale":s.currentLocale,doc:n.doc,path:o.options.path,file:o.file},null,8,["current-locale","doc","path","file"])])}const P=q(x,[["render",_]]);export{P as default};
