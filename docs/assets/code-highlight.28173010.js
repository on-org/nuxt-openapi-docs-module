import{_ as M,a as U,b as F,c as V,d as Y,e as z}from"./SearchBlock.3e19f150.js";import{_ as G}from"./client-only.45c4cd0b.js";import{f as X,h as K,j as Q,r as w,k as l,g as Z,l as ss,c as ns,u as s,m as d,b as R,w as as,n as ts,o as h}from"./entry.4698dbd5.js";import{u as es}from"./vue.f36acd1f.e66bd35a.js";import{d as ls}from"./docs.code-highlight.config.a1eae79e.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const P={openapi:"3.0.0",info:{title:"Syntax Highlighting",version:"1.0.0",description:`<p>You may provide little snippets of code using markdown syntax and they will be color coded based on the language you specified as shown below</p>
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
`},paths:{"/code":{get:{summary:"Syntax Highlighting in Markdown",description:`<p>Syntax Highlighting in <strong>OPERATION DESCRIPTION</strong></p>
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
`,tags:["other"]},post:{summary:"Request body",requestBody:{description:`<p>Syntax Highlighting in <strong>REQUEST BODY</strong></p>
<pre><code class="hljs language-js"><span class="hljs-keyword">function</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">x, y</span>) {
  <span class="hljs-keyword">const</span> answer = x + y;
  <span class="hljs-keyword">return</span> answer;
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++){
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-number">3</span>, i); <span class="hljs-comment">// prints in console</span>
}
</code></pre>
`,content:{"application/json":{schema:"#/components/schemas/Price"}}},responses:{200:{description:"Successful"}},tags:["other"]}}},components:{schemas:{Price:{type:"object",properties:{amount:{type:"integer"},currency:{type:"string"}}}}},tags:{}},os={class:"content-container"},gs=X({__name:"code-highlight",setup(ps){const g=K(),I=Q(),{$openapidoc:m,$openapidocBus:v,$openapidocRef:f}=ts(),y=w(""),T=w(0),q=w(ls.path.toString()),t=w(P??{}),j=l(()=>"code-highlight"),e=l(()=>g.params.type.toString()),O=l(()=>(g.params.mathod??"default").toString()),k=l(()=>e.value==="info"),x=l(()=>e.value==="auth"),S=l(()=>e.value==="components"),i=l(()=>m.currentLocale());f.setComponents(P.components),f.setDefinitions(P.definitions),f.setDocPath(q.value),f.setFile(j.value);const o=l(()=>{if(!t.value.paths)return null;for(let a in t.value.paths){let n=a;if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===O.value)return y.value=a,t.value.paths[a]??null}return null}),p=l(()=>{if(!t.value.webhooks)return null;for(let a in t.value.webhooks){let n=a;if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===O.value)return y.value=a,t.value.webhooks[a][e.value]??null}return null}),u=l(()=>o.value?o.value[e.value]??null:null),A=l(()=>o.value?o.value.parameters??null:null),N=l(()=>{const a=m.currentLocale()??"";return k.value?"[code-highlight] - Info Docs":x.value?"[code-highlight] - Authorization":S.value?"[code-highlight] - Components Docs":u.value?"[code-highlight] - "+(u.value["x-summary-"+a.value]||u.value.summary||""):""}),E=l(()=>{const a=m.currentLocale()??"";return k.value?"[code-highlight] - Info Docs":x.value?"[code-highlight] - Authorization":S.value?"[code-highlight] - Components Docs":u.value&&(u.value["x-description-"+a.value]||u.value.description)||""});es({title:N.value,meta:[{name:"description",content:E.value}],htmlAttrs:{lang:i.value},bodyAttrs:{class:"oapi"}});const C=l(()=>{if(o.value){if(o.value.servers&&o.value.servers[0])return o.value.servers[0].url??null;if(o.value[e.value]&&o.value[e.value].servers&&o.value[e.value].servers[0])return o.value[e.value].servers[0].url??null}if(p.value){if(p.value.servers&&p.value.servers[0])return p.value.servers[0].url??null;if(p.value[e.value]&&p.value[e.value].servers&&p.value[e.value].servers[0])return p.value[e.value].servers[0].url??null}let a=T.value;if(a>0&&t.value.servers&&!t.value.servers[a]&&(a=0),!t.value.servers||!t.value.servers[a])return"";if(t.value.servers[a].variables){const n=Object.values(t.value.servers[a].variables)??[];if(n&&n.length)return n[0].default}return t.value.servers[a].url??""});function H(a){T.value=a}function D(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(c=>{c.addEventListener("click",r=>{const _=c.getAttribute("id"),b=window.location.origin+window.location.pathname+"#"+_;m.copyToClipboard(b,r,!1),I.push({path:g.path,hash:"#"+_}),setTimeout(()=>{c.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function B(){if(g.hash)return;const a=document.querySelector(".oapi-content");a&&(a.scrollTop=0)}function L(){const a=JSON.stringify(t.value,null,4),n=new Blob([a],{type:"application/json"}),c=URL.createObjectURL(n),r=document.createElement("a");r.href=c,r.download=j.value+".json",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(c)}return Z(()=>{v.$on("downloadJsonDoc",L),v.$on("changeServer",H),B(),D()}),ss(()=>{v.$off("downloadJsonDoc",L),v.$off("changeServer",H)}),(a,n)=>{const c=M,r=U,_=F,b=V,$=z,W=Y,J=G;return h(),ns("div",os,[s(k)&&s(t).info?(h(),d(c,{key:0,info:s(t).info,servers:s(t).servers,"current-locale":s(i)},null,8,["info","servers","current-locale"])):s(x)&&s(t).components?(h(),d(r,{key:1,components:s(t).components,"current-locale":s(i)},null,8,["components","current-locale"])):s(S)&&s(t).components?(h(),d(_,{key:2,components:s(t).components,"current-locale":s(i)},null,8,["components","current-locale"])):s(u)?(h(),d(b,{key:3,route:s(u),"current-locale":s(i),method:s(e),components:s(t).components,url:s(y),path_doc:s(q),file:s(j),server:s(C),"sub-params":s(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):s(p)?(h(),d(b,{key:4,route:s(p),"current-locale":s(i),method:s(e),components:s(t).components,url:s(y),path_doc:s(q),file:s(j),server:s(C),"sub-params":s(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(h(),d($,{key:5})),R(J,null,{default:as(()=>[R(W,{"current-locale":s(i),doc:s(t),path:s(q),file:s(j)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{gs as default};
