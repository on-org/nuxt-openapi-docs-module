import{_ as M,a as U,b as F,c as V,d as Y,e as z}from"./SearchBlock.c303c9e2.js";import{_ as G}from"./client-only.3a82950f.js";import{f as X,h as K,j as Q,r as k,k as l,g as Z,l as ss,c as ns,u as s,m as j,b as R,w as as,n as ts,o as d}from"./entry.fb805d14.js";import{u as es}from"./vue.f36acd1f.c0336c75.js";import{d as ls}from"./docs.code-highlight.config.a1eae79e.js";import"./nuxt-link.c634151e.js";import"./OpenApiDropdown.4032f810.js";const o={openapi:"3.0.0",info:{title:"Syntax Highlighting",version:"1.0.0",description:`<p>You may provide little snippets of code using markdown syntax and they will be color coded based on the language you specified as shown below</p>
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
`,content:{"application/json":{schema:"#/components/schemas/Price"}}},responses:{200:{description:"Successful"}},tags:["other"]}}},components:{schemas:{Price:{type:"object",properties:{amount:{type:"integer"},currency:{type:"string"}}}}},tags:{}},os={class:"content-container"},gs=X({__name:"code-highlight",setup(ps){const m=K(),I=Q(),{$openapidoc:f,$openapidocBus:v,$openapidocRef:y}=ts(),q=k(""),T=k(0),_=k(ls.path.toString()),c=k(o??{}),g=l(()=>"code-highlight"),e=l(()=>m.params.type.toString()),O=l(()=>(m.params.mathod??"default").toString()),x=l(()=>e.value==="info"),S=l(()=>e.value==="auth"),P=l(()=>e.value==="components"),h=l(()=>f.currentLocale());y.setComponents(o.components),y.setDefinitions(o.definitions),y.setDocPath(_.value),y.setFile(g.value);const p=l(()=>{const a={...o.paths};if(!a)return null;for(const t in a){let n=t.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===O.value)return q.value=t.toString(),a[t]??null}return null}),r=l(()=>{const a={...o.webhooks};if(!a)return null;for(const t in a){let n=t.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===O.value)return q.value=t.toString(),a[t][e.value]??null}return null}),i=l(()=>p.value?p.value[e.value]??null:null),A=l(()=>p.value?p.value.parameters??null:null),N=l(()=>{const a=f.currentLocale()??"";return x.value?"[code-highlight] - Info Docs":S.value?"[code-highlight] - Authorization":P.value?"[code-highlight] - Components Docs":i.value?"[code-highlight] - "+(i.value["x-summary-"+a.value]||i.value.summary||""):""}),E=l(()=>{const a=f.currentLocale()??"";return x.value?"[code-highlight] - Info Docs":S.value?"[code-highlight] - Authorization":P.value?"[code-highlight] - Components Docs":i.value&&(i.value["x-description-"+a.value]||i.value.description)||""});es({title:N.value,meta:[{name:"description",content:E.value}],htmlAttrs:{lang:h.value},bodyAttrs:{class:"oapi"}});const C=l(()=>{if(p.value){if(p.value.servers&&p.value.servers[0])return p.value.servers[0].url??null;if(p.value[e.value]&&p.value[e.value].servers&&p.value[e.value].servers[0])return p.value[e.value].servers[0].url??null}if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[e.value]&&r.value[e.value].servers&&r.value[e.value].servers[0])return r.value[e.value].servers[0].url??null}let a=T.value;if(a>0&&o.servers&&!o.servers[a]&&(a=0),!o.servers||!o.servers[a])return"";if(o.servers[a].variables){const t=Object.values(o.servers[a].variables)??[];if(t&&t.length)return t[0].default}return o.servers[a].url??""});function H(a){T.value=a}function D(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",u=>{const b=n.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+b;f.copyToClipboard(w,u,!1),I.push({path:m.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function $(){if(m.hash)return;const a=document.querySelector(".oapi-content");a&&(a.scrollTop=0)}function L(){const a=JSON.stringify(o,null,4),t=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(t),u=document.createElement("a");u.href=n,u.download=g.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(n)}return Z(()=>{v.$on("downloadJsonDoc",L),v.$on("changeServer",H),$(),D()}),ss(()=>{v.$off("downloadJsonDoc",L),v.$off("changeServer",H)}),(a,t)=>{const n=M,u=U,b=F,w=V,B=z,W=Y,J=G;return d(),ns("div",os,[s(x)&&s(c).info?(d(),j(n,{key:0,info:s(c).info,servers:s(c).servers,"current-locale":s(h)},null,8,["info","servers","current-locale"])):s(S)&&s(c).components?(d(),j(u,{key:1,components:s(c).components,"current-locale":s(h)},null,8,["components","current-locale"])):s(P)&&s(c).components?(d(),j(b,{key:2,components:s(c).components,"current-locale":s(h)},null,8,["components","current-locale"])):s(i)?(d(),j(w,{key:3,route:s(i),"current-locale":s(h),method:s(e),components:s(c).components,url:s(q),path_doc:s(_),file:s(g),server:s(C),"sub-params":s(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):s(r)?(d(),j(w,{key:4,route:s(r),"current-locale":s(h),method:s(e),components:s(c).components,url:s(q),path_doc:s(_),file:s(g),server:s(C),"sub-params":s(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),j(B,{key:5})),R(J,null,{default:as(()=>[R(W,{"current-locale":s(h),doc:s(c),path:s(_),file:s(g)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{gs as default};
