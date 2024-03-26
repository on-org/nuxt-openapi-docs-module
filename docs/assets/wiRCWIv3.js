import{_ as M,a as U,b as F,c as V,d as Y,e as z}from"./CS6cvqKt.js";import{_ as G}from"./pWAC-K-K.js";import{f as X,h as K,j as Q,r as w,k as s,g as Z,l as ee,c as te,u as e,m as h,b as R,w as oe,n as ne,o as g}from"./BYj_I_4_.js";import{u as re}from"./BDA3X4wF.js";import{d as se}from"./B1ij63-k.js";import"./y4eX7S1R.js";import"./DpDRfkx3.js";const c={openapi:"3.0.0",info:{title:"Syntax Highlighting",version:"1.0.0",description:`<p>You may provide little snippets of code using markdown syntax and they will be color coded based on the language you specified as shown below</p>
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
`,content:{"application/json":{schema:"#/components/schemas/Price"}}},responses:{200:{description:"Successful"}},tags:["other"]}}},components:{schemas:{Price:{type:"object",properties:{amount:{type:"integer"},currency:{type:"string"}}}}},tags:{}},ce={class:"content-container"},me=X({__name:"code-highlight",setup(ae){const v=K(),I=Q(),{$openapidoc:f,$openapidocBus:q,$openapidocRef:_}=ne(),y=w(""),T=w(0),b=w(se.path.toString()),u=w(c??{}),m=s(()=>"code-highlight"),r=s(()=>v.params.type.toString()),O=s(()=>(v.params.mathod??"default").toString()),j=s(()=>r.value==="info"),k=s(()=>r.value==="auth"),P=s(()=>r.value==="components"),d=s(()=>f.currentLocale());_.setComponents(c.components),_.setDefinitions(c.definitions),_.setDocPath(b.value),_.setFile(m.value);const a=s(()=>{const o={...c.paths};if(!o)return null;for(const n in o){let t=n.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return y.value=n.toString(),o[n]??null}return null}),l=s(()=>{const o={...c.webhooks};if(!o)return null;for(const n in o){let t=n.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return y.value=n.toString(),o[n][r.value]??null}return null}),p=s(()=>a.value?a.value[r.value]??null:null),A=s(()=>a.value?a.value.parameters??null:null),N=s(()=>{const o=f.currentLocale()??"";return j.value?"[code-highlight] - Info Docs":k.value?"[code-highlight] - Authorization":P.value?"[code-highlight] - Components Docs":p.value?"[code-highlight] - "+(p.value["x-summary-"+o.value]||p.value.summary||""):""}),E=s(()=>{const o=f.currentLocale()??"";return j.value?"[code-highlight] - Info Docs":k.value?"[code-highlight] - Authorization":P.value?"[code-highlight] - Components Docs":p.value&&(p.value["x-description-"+o.value]||p.value.description)||""});re({title:N.value,meta:[{name:"description",content:E.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const C=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let o=T.value;if(o>0&&c.servers&&!c.servers[o]&&(o=0),!c.servers||!c.servers[o])return"";if(c.servers[o].variables){const n=Object.values(c.servers[o].variables)??[];if(n&&n.length)return n[0].default}return c.servers[o].url??""});function H(o){T.value=o}function D(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",i=>{const S=t.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+S;f.copyToClipboard(x,i,!1),I.push({path:v.path,hash:"#"+S}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function $(){if(v.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function L(){const o=JSON.stringify(c,null,4),n=new Blob([o],{type:"application/json"}),t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=m.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}return Z(()=>{q.$on("downloadJsonDoc",L),q.$on("changeServer",H),$(),D()}),ee(()=>{q.$off("downloadJsonDoc",L),q.$off("changeServer",H)}),(o,n)=>{const t=M,i=U,S=F,x=V,B=z,W=Y,J=G;return g(),te("div",ce,[e(j)&&e(u).info?(g(),h(t,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(k)&&e(u).components?(g(),h(i,{key:1,components:e(u).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(P)&&e(u).components?(g(),h(S,{key:2,components:e(u).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(p)?(g(),h(x,{key:3,route:e(p),"current-locale":e(d),method:e(r),components:e(u).components,url:e(y),path_doc:e(b),file:e(m),server:e(C),"sub-params":e(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(g(),h(x,{key:4,route:e(l),"current-locale":e(d),method:e(r),components:e(u).components,url:e(y),path_doc:e(b),file:e(m),server:e(C),"sub-params":e(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(g(),h(B,{key:5})),R(J,null,{default:oe(()=>[R(W,{"current-locale":e(d),doc:e(u),path:e(b),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{me as default};
