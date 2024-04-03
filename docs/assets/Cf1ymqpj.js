import{_ as M,a as F,b as J,c as V,d as Y,e as U}from"./BdpLcoxu.js";import{_ as z}from"./BXvlvvPw.js";import{f as G,h as X,j as K,r as S,k as s,g as Q,l as Z,c as ee,u as e,m as g,b as I,w as te,n as oe,o as d}from"./qEcSDZDN.js";import{u as ne}from"./Nl5E_vvB.js";import{d as re}from"./B1ij63-k.js";import"./DwPOiaZ-.js";import"./BykPuthJ.js";const u={openapi:"3.0.0",info:{title:"Syntax Highlighting",version:"1.0.0",description:`<p>You may provide little snippets of code using markdown syntax and they will be color coded based on the language you specified as shown below</p>
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
  -d &#39;{
    &quot;target&quot;: {
      &quot;ref_type&quot;: &quot;branch&quot;,
      &quot;type&quot;: &quot;pipeline_ref_target&quot;,
      &quot;ref_name&quot;: &quot;master&quot;
    }
  }&#39;
</code></pre>
<p><strong>SHELL</strong> <code>shell</code> <code>bash</code></p>
<pre><code class="language-bash">$ curl -X POST -is -u username:password
  -H &quot;Content-Type: application/json&quot; https://example.com
  -d &#39;{
    &quot;target&quot;: {
      &quot;ref_type&quot;: &quot;branch&quot;,
      &quot;type&quot;: &quot;pipeline_ref_target&quot;,
      &quot;ref_name&quot;: &quot;master&quot;
    }
  }&#39;
</code></pre>
<p><strong>MARKUP</strong> <code>markup</code> <code>html</code> <code>xml</code> <code>svg</code></p>
<pre><code class="language-markup">&lt;!doctype html&gt;

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
<pre><code class="language-json">{
  &quot;firstName&quot;: &quot;Mickey&quot;,
  &quot;lastName&quot;: &quot;Mouse&quot;,
  &quot;age&quot;: 9,
  &quot;married&quot;: false,
}
</code></pre>
<p><strong>YAML</strong> <code>yaml</code> <code>yml</code></p>
<pre><code class="language-yaml">openapi: 3.0.0
info:
  title: Syntax Highlighting
  version: 1.0.0
  description: &gt;
    Example of
    Syntax highlighting
</code></pre>
<p><strong>GO</strong> <code>go</code></p>
<pre><code class="language-go">func readFileAsLines(path string) ([]string, error) {
  d, err := ioutil.ReadFile(path)
  if err != nil {
    return nil, err
  }
  s := string(d)
  res := strings.Split(s, &quot;\\n&quot;)
  return res, nil
}
</code></pre>
<p><strong>JAVA SCRIPT</strong> <code>javascript</code> <code>js</code></p>
<pre><code class="language-js">  function add(x, y) {
    const answer = x + y;
    return answer;
  }

  for (let i = 0; i &lt; 10; i++){
    console.log(3, i); // prints in console
  }
</code></pre>
<p><strong>JAVA</strong> <code>java</code></p>
<pre><code class="language-java">BufferedWriter out = null;
try {
  out = new BufferedWriter(new FileWriter(”filename”, true));
  out.write(”aString”);
} catch (IOException e) {
  // error processing code
} finally {
  if (out != null) {
    out.close();
  }
}
</code></pre>
<p><strong>PYTHON</strong> <code>python</code> <code>py</code></p>
<pre><code class="language-python">@app.route(&#39;/parse_data&#39;, methods=[&#39;GET&#39;, &#39;POST&#39;])
# define the function
def parse_data():
  if request.method == &#39;POST&#39;:
    search = request.get_json()
    return jsonify(search)
  return render_template(&#39;index.html&#39;)
</code></pre>
<p><strong>C SHARP</strong> <code>chsarp</code> <code>cs</code></p>
<pre><code class="language-csharp">using System.IO.Compression;

namespace MyApplication {
  [Obsolete(&quot;...&quot;)]
  class Program : IInterface {
    public static List&lt;int&gt; JustDoIt(int count) {
      Console.WriteLine($&quot;Hello {Name}!&quot;);
      return new List&lt;int&gt;(new int[] { 1, 2, 3 })
    }
  }
}
</code></pre>
<p><strong>HTTP</strong> <code>http</code></p>
<pre><code class="language-http">POST /pet HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  &quot;status&quot;: &quot;ok&quot;,
  &quot;extended&quot;: true,
  &quot;results&quot;: [
    {&quot;value&quot;: 0, &quot;type&quot;: &quot;int64&quot;},
    {&quot;value&quot;: 1.0e+3, &quot;type&quot;: &quot;decimal&quot;}
  ]
}
</code></pre>
`},paths:{"/code":{get:{summary:"Syntax Highlighting in Markdown",description:`<p>Syntax Highlighting in <strong>OPERATION DESCRIPTION</strong></p>
<pre><code class="language-http">POST /pet HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  &quot;status&quot;: &quot;ok&quot;,
  &quot;extended&quot;: true,
  &quot;results&quot;: [
    {&quot;value&quot;: 0, &quot;type&quot;: &quot;int64&quot;},
    {&quot;value&quot;: 1.0e+3, &quot;type&quot;: &quot;decimal&quot;}
  ]
}
</code></pre>
`,tags:["other"]},post:{summary:"Request body",requestBody:{description:`<p>Syntax Highlighting in <strong>REQUEST BODY</strong></p>
<pre><code class="language-js">function add(x, y) {
  const answer = x + y;
  return answer;
}

for (let i = 0; i &lt; 10; i++){
  console.log(3, i); // prints in console
}
</code></pre>
`,content:{"application/json":{schema:"#/components/schemas/Price"}}},responses:{200:{description:"Successful"}},tags:["other"]}}},components:{schemas:{Price:{type:"object",properties:{amount:{type:"integer"},currency:{type:"string"}}}}},tags:{}},se={class:"content-container"},he=G({__name:"code-highlight",setup(ce){const h=X(),L=K(),{$openapidoc:m,$openapidocBus:T,$openapidocRef:v}=oe(),f=S(""),j=S(0),q=S((re.path??"").toString()),a=S(u??{}),_=s(()=>"code-highlight"),r=s(()=>h.params.type.toString()),A=s(()=>(h.params.mathod??"default").toString()),x=s(()=>r.value==="info"),w=s(()=>r.value==="auth"),k=s(()=>r.value==="components"),p=s(()=>m.currentLocale());v.setComponents(u.components),v.setDefinitions(u.definitions),v.setDocPath(q.value),v.setFile(_.value);const c=s(()=>{const t={...u.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===A.value)return f.value=n.toString(),t[n]??null}return null}),l=s(()=>{const t={...u.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===A.value)return f.value=n.toString(),t[n][r.value]??null}return null}),i=s(()=>c.value?c.value[r.value]??null:null),C=s(()=>c.value?c.value.parameters??null:null),R=s(()=>{const t=m.currentLocale()??"";return x.value?"[code-highlight] - Info Docs":w.value?"[code-highlight] - Authorization":k.value?"[code-highlight] - Components Docs":i.value?"[code-highlight] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),N=s(()=>{const t=m.currentLocale()??"";return x.value?"[code-highlight] - Info Docs":w.value?"[code-highlight] - Authorization":k.value?"[code-highlight] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ne({title:R.value,meta:[{name:"description",content:N.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let t=j.value;if(t>0&&u.servers&&!u.servers[t]&&(t=0),!u.servers||!u.servers[t])return"";if(u.servers[t].variables){const n=Object.values(u.servers[t].variables)??[];if(n&&n.length)return n[0].default}return u.servers[t].url??""});function H(t){j.value=t}function E(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",P=>{const y=o.getAttribute("id"),b=window.location.origin+window.location.pathname+"#"+y;m.copyToClipboard(b,P,!1),L.push({path:h.path,hash:"#"+y}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function B(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Q(()=>{T.$on("changeServer",H),B(),E()}),Z(()=>{T.$off("changeServer",H)}),(t,n)=>{const o=M,P=F,y=J,b=V,D=U,W=Y,$=z;return d(),ee("div",se,[e(x)&&e(a).info?(d(),g(o,{key:0,info:e(a).info,servers:e(a).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(w)&&e(a).components?(d(),g(P,{key:1,components:e(a).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(k)&&e(a).components?(d(),g(y,{key:2,components:e(a).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(d(),g(b,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(a).components,url:e(f),path_doc:e(q),file:e(_),server:e(O),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(d(),g(b,{key:4,route:e(l),"current-locale":e(p),method:e(r),components:e(a).components,url:e(f),path_doc:e(q),file:e(_),server:e(O),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),g(D,{key:5})),I($,null,{default:te(()=>[I(W,{"current-locale":e(p),doc:e(a),path:e(q),file:e(_)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
