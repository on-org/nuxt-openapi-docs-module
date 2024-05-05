import{_ as M,a as F,b as J,c as V,d as Y,e as U}from"./DSQ-IUf6.js";import{_ as z}from"./B8qZcnjj.js";import{g as G,E as X,H as K,r as b,f as l,h as Q,l as Z,o as h,c as ss,u as s,I as d,b as I,w as ns,q as as}from"./BDZePtGr.js";import{u as ts}from"./DinT7-Rj.js";import{d as es}from"./B1ij63-k.js";import"./B89F3anb.js";import"./BI-Ve22G.js";const o={openapi:"3.0.0",info:{title:"Syntax Highlighting",version:"1.0.0",description:`<p>You may provide little snippets of code using markdown syntax and they will be color coded based on the language you specified as shown below</p>
<pre><code>    \`\`\`java
      some code...
      ...
      ...
    \`\`\`
</code></pre><p>Following are the supported language codes that you may use for syntax highlighting</p>
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
</code></pre><p><strong>SHELL</strong> <code>shell</code> <code>bash</code></p>
<pre><code class="hljs language-bash">$ curl -X POST -is -u username:password
  -H <span class="hljs-string">&quot;Content-Type: application/json&quot;</span> https://example.com
  -d <span class="hljs-string">&#x27;{
    &quot;target&quot;: {
      &quot;ref_type&quot;: &quot;branch&quot;,
      &quot;type&quot;: &quot;pipeline_ref_target&quot;,
      &quot;ref_name&quot;: &quot;master&quot;
    }
  }&#x27;</span>
</code></pre><p><strong>MARKUP</strong> <code>markup</code> <code>html</code> <code>xml</code> <code>svg</code></p>
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
</code></pre><p><strong>JSON</strong> <code>json</code></p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;firstName&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Mickey&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;lastName&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Mouse&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;age&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">9</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;married&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">false</span></span><span class="hljs-punctuation">,</span>
<span class="hljs-punctuation">}</span>
</code></pre><p><strong>YAML</strong> <code>yaml</code> <code>yml</code></p>
<pre><code class="hljs language-yaml"><span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>
<span class="hljs-attr">info:</span>
  <span class="hljs-attr">title:</span> <span class="hljs-string">Syntax</span> <span class="hljs-string">Highlighting</span>
  <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>
  <span class="hljs-attr">description:</span> <span class="hljs-string">&gt;
    Example of
    Syntax highlighting</span>
</code></pre><p><strong>GO</strong> <code>go</code></p>
<pre><code class="hljs language-go"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">readFileAsLines</span><span class="hljs-params">(path <span class="hljs-type">string</span>)</span></span> ([]<span class="hljs-type">string</span>, <span class="hljs-type">error</span>) {
  d, err := ioutil.ReadFile(path)
  <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">nil</span>, err
  }
  s := <span class="hljs-type">string</span>(d)
  res := strings.Split(s, <span class="hljs-string">&quot;\\n&quot;</span>)
  <span class="hljs-keyword">return</span> res, <span class="hljs-literal">nil</span>
}
</code></pre><p><strong>JAVA SCRIPT</strong> <code>javascript</code> <code>js</code></p>
<pre><code class="hljs language-js">  <span class="hljs-keyword">function</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">x, y</span>) {
    <span class="hljs-keyword">const</span> answer = x + y;
    <span class="hljs-keyword">return</span> answer;
  }

  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++){
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-number">3</span>, i); <span class="hljs-comment">// prints in console</span>
  }
</code></pre><p><strong>JAVA</strong> <code>java</code></p>
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
</code></pre><p><strong>PYTHON</strong> <code>python</code> <code>py</code></p>
<pre><code class="hljs language-python"><span class="hljs-meta">@app.route(<span class="hljs-params"><span class="hljs-string">&#x27;/parse_data&#x27;</span>, methods=[<span class="hljs-string">&#x27;GET&#x27;</span>, <span class="hljs-string">&#x27;POST&#x27;</span>]</span>)</span>
<span class="hljs-comment"># define the function</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">parse_data</span>():
  <span class="hljs-keyword">if</span> request.method == <span class="hljs-string">&#x27;POST&#x27;</span>:
    search = request.get_json()
    <span class="hljs-keyword">return</span> jsonify(search)
  <span class="hljs-keyword">return</span> render_template(<span class="hljs-string">&#x27;index.html&#x27;</span>)
</code></pre><p><strong>C SHARP</strong> <code>chsarp</code> <code>cs</code></p>
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
</code></pre><p><strong>HTTP</strong> <code>http</code></p>
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
</code></pre>`},paths:{"/code":{get:{summary:"Syntax Highlighting in Markdown",description:`<p>Syntax Highlighting in <strong>OPERATION DESCRIPTION</strong></p>
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
</code></pre>`,tags:["other"]},post:{summary:"Request body",requestBody:{description:`<p>Syntax Highlighting in <strong>REQUEST BODY</strong></p>
<pre><code class="hljs language-js"><span class="hljs-keyword">function</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">x, y</span>) {
  <span class="hljs-keyword">const</span> answer = x + y;
  <span class="hljs-keyword">return</span> answer;
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++){
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-number">3</span>, i); <span class="hljs-comment">// prints in console</span>
}
</code></pre>`,content:{"application/json":{schema:"#/components/schemas/Price"}}},responses:{200:{description:"Successful"}},tags:["other"]}}},components:{schemas:{Price:{type:"object",properties:{amount:{type:"integer"},currency:{type:"string"}}}}},tags:{}},ls={class:"content-container"},js=G({__name:"code-highlight",setup(ps){const j=X(),L=K(),{$openapidoc:g,$openapidocBus:P,$openapidocRef:m}=as(),v=b(""),T=b(0),f=b((es.path??"").toString()),c=b(o??{}),y=l(()=>"code-highlight"),e=l(()=>j.params.type.toString()),A=l(()=>(j.params.mathod??"default").toString()),w=l(()=>e.value==="info"),k=l(()=>e.value==="auth"),x=l(()=>e.value==="components"),i=l(()=>g.currentLocale());m.setComponents(o.components),m.setDefinitions(o.definitions),m.setDocPath(f.value),m.setFile(y.value);const p=l(()=>{const n={...o.paths};if(!n)return null;for(const t in n){let a=t.toString();if(a.startsWith("/")&&(a=a.substring(1)),a.endsWith("/")&&(a=a.substring(-1)),a=a.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),a===A.value)return v.value=t.toString(),n[t]??null}return null}),r=l(()=>{const n={...o.webhooks};if(!n)return null;for(const t in n){let a=t.toString();if(a.startsWith("/")&&(a=a.substring(1)),a.endsWith("/")&&(a=a.substring(-1)),a=a.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),a===A.value)return v.value=t.toString(),n[t][e.value]??null}return null}),u=l(()=>p.value?p.value[e.value]??null:null),C=l(()=>p.value?p.value.parameters??null:null),R=l(()=>{const n=g.currentLocale()??"";return w.value?"[code-highlight] - Info Docs":k.value?"[code-highlight] - Authorization":x.value?"[code-highlight] - Components Docs":u.value?"[code-highlight] - "+(u.value["x-summary-"+n.value]||u.value.summary||""):""}),E=l(()=>{const n=g.currentLocale()??"";return w.value?"[code-highlight] - Info Docs":k.value?"[code-highlight] - Authorization":x.value?"[code-highlight] - Components Docs":u.value&&(u.value["x-description-"+n.value]||u.value.description)||""});ts({title:R.value,meta:[{name:"description",content:E.value}],htmlAttrs:{lang:i.value},bodyAttrs:{class:"oapi"}});const O=l(()=>{if(p.value){if(p.value.servers&&p.value.servers[0])return p.value.servers[0].url??null;if(p.value[e.value]&&p.value[e.value].servers&&p.value[e.value].servers[0])return p.value[e.value].servers[0].url??null}if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[e.value]&&r.value[e.value].servers&&r.value[e.value].servers[0])return r.value[e.value].servers[0].url??null}let n=T.value;if(n>0&&o.servers&&!o.servers[n]&&(n=0),!o.servers||!o.servers[n])return"";if(o.servers[n].variables){const t=Object.values(o.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.servers[n].url??""});function H(n){T.value=n}function N(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(a=>{a.addEventListener("click",S=>{const q=a.getAttribute("id"),_=window.location.origin+window.location.pathname+"#"+q;g.copyToClipboard(_,S,!1),L.push({path:j.path,hash:"#"+q}),setTimeout(()=>{a.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function B(){if(j.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}return Q(()=>{P.$on("changeServer",H),B(),N()}),Z(()=>{P.$off("changeServer",H)}),(n,t)=>{const a=M,S=F,q=J,_=V,D=Y,W=U,$=z;return h(),ss("div",ls,[s(w)&&s(c).info?(h(),d(a,{key:0,info:s(c).info,servers:s(c).servers,"current-locale":s(i)},null,8,["info","servers","current-locale"])):s(k)&&s(c).components?(h(),d(S,{key:1,components:s(c).components,"current-locale":s(i)},null,8,["components","current-locale"])):s(x)&&s(c).components?(h(),d(q,{key:2,components:s(c).components,"current-locale":s(i)},null,8,["components","current-locale"])):s(u)?(h(),d(_,{key:3,route:s(u),"current-locale":s(i),method:s(e),components:s(c).components,url:s(v),path_doc:s(f),file:s(y),server:s(O),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):s(r)?(h(),d(_,{key:4,route:s(r),"current-locale":s(i),method:s(e),components:s(c).components,url:s(v),path_doc:s(f),file:s(y),server:s(O),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(h(),d(D,{key:5})),I($,null,{default:ns(()=>[I(W,{"current-locale":s(i),doc:s(c),path:s(f),file:s(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{js as default};
