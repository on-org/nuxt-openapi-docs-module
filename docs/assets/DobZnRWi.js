import{_ as $,a as W,b as G,c as F,d as V,e as z}from"./BdpLcoxu.js";import{_ as J}from"./BXvlvvPw.js";import{f as Y,h as K,j as Q,r as w,k as r,g as X,l as Z,c as ee,u as e,m,b as N,w as te,n as ne,o as d}from"./qEcSDZDN.js";import{u as oe}from"./Nl5E_vvB.js";import{d as se}from"./Bp4zP7Y8.js";import"./DwPOiaZ-.js";import"./BykPuthJ.js";const i={openapi:"3.0.2",info:{title:"Links",version:"1.0.0",description:`<h1>Various ways to create links in RapiDoc</h1>
<ul>
<li>Use markdown syntax to create<ul>
<li>Internal links to various sections of the document</li>
<li>External links to other websites</li>
</ul>
</li>
<li>Convert headings to links on the Navigation bar</li>
<li>Use custom HTMLs and styling to create buttons, links etc</li>
</ul>
<h2>Markdown syntax to create links</h2>
<h2>Internal Links</h2>
<p>  RapiDoc assigns auto generated IDs to important sections of the document.
  You may use these IDs in your markdown syntax to create clickable links to varous sections of the document</p>
<p>  below is how RapiDoc will assign IDs to different section</p>
<table class="table">
<tr>
<th>Section</th>
<th>ID</th>
<th>Note</th>
</tr>
<tr>
<td>Overview</td>
<td><code>overview</code></td>
<td></td>
</tr>
<tr>
<td>API Servers</td>
<td><code>servers</code></td>
<td></td>
</tr>
<tr>
<td>Authentications</td>
<td><code>auth</code></td>
<td></td>
</tr>
<tr>
<td>Tags</td>
<td><code>tag--{tag-name}</code></td>
<td><code>#</code> <code>:</code> <code>?</code> <code>&amp;</code> <code>=</code> <code>{</code> <code>}</code> and <code>space</code> is replaced by hyphen (<code>-</code>)</td>
</tr>
<tr>
<td>Paths/Operations</td>
<td><code>{method}-{path}</code></td>
<td><code>#</code> <code>:</code> <code>?</code> <code>&amp;</code> <code>=</code> <code>{</code> <code>}</code> and <code>space</code> is replaced by hyphen (<code>-</code>)</td>
</tr>
</table>
<p>  <strong>Example:</strong> ID of the operation <code>POST /users/find-by-name/{name}</code> is <code>post-/users/find-by-name/-name-</code> <em>(<strong>Note:</strong> that curlies around the name is replaced by hyphens)</em></p>
<p>  <strong>Use Markdown syntax</strong><br>
  Now that you understand how the IDs are generated, you may use Markdown syntax to create links to various sections</p>
<pre><code>  [My Link Text](#link-id)
</code></pre>
<p>  below are some of the links to various sections</p>
<ul>
<li><a href="#servers">Take me to API server </a></li>
<li><a href="#get-/users/-userId-">Operation: Get Single User </a></li>
</ul>
<h2>External Links</h2>
<p>  Just Like internal links you can use markdown syntax to create external links</p>
<pre><code>  [Take me to RapiDoc Homepage ](https://mrin9.github.io/RapiDoc/)
</code></pre>
<p>  <a href="https://mrin9.github.io/RapiDoc/">Take me to RapiDoc Homepage </a></p>
<h2>HTML Links</h2>
<p>  RapiDoc allows you to embed custom HTMLs in various slots.</p>
<table class="table">
<tr>
<th>Slot</th>
<th>Location</th>
</tr>
<tr>
<td><code>(default)</code></td>
<td>top of the document</td>
</tr>
<tr>
<td><code>header</code></td>
<td>on header bar</td>
</tr>
<tr>
<td><code>footer</code></td>
<td>bottom of document</td>
</tr>
<tr>
<td><code>logo</code></td>
<td>top-left of header</td>
</tr>
<tr>
<td><code>nav-logo</code></td>
<td>top of side navigation bar</td>
</tr>
</table>
<p>  below is how you can embed custome HTML content. Unlike markdown links HTML links can be styled by the user, like providing a diffrent color, font etc</p>
<pre><code class="language-html">&lt;html&gt;
  &lt;head&gt;
    ...
  &lt;/head&gt;
  &lt;body&gt;
    &lt;rapi-doc  spec-url = &quot;../specs/links.yaml&quot;&gt;
      &lt;slot&gt;
        &lt;a href = &quot;#get-/users/-userId-&quot;&gt; Get User Operation&lt;/a&gt;
        &lt;a href = &quot;https://mrin9.github.io/RapiDoc/&quot;&gt; RapiDoc Home &lt;/a&gt;
      &lt;/slot&gt;
    &lt;/rapi-doc&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>  As an example you can checkout this document&#39;s top-right corner, where you will find custom styled <strong>HTML Links</strong></p>
<h2>Headings as navigation links</h2>
<p>  You can turn <strong>level-1 and level-2 headings to links</strong> on Navigation bar using <code>info-description-headings-in-navbar=&#39;true&#39;</code> option</p>
<pre><code class="language-html">&lt;html&gt;
  ...
  &lt;rapi-doc
    spec-url = &quot;../specs/links.yaml&quot;
    info-description-headings-in-navbar=&#39;true&#39;
  &gt;
  &lt;/rapi-doc&gt;
&lt;/html&gt;
</code></pre>
  <br/>
  As an example you can checkout this document's Navigation Bar, where you will find links to level-1 and level-2 heading
`},servers:[{url:"https://reqres.in/api/"}],paths:{"/users":{get:{description:"List of users (paginated)",parameters:[{name:"page",in:"query",schema:{type:"integer",example:2}},{name:"delay",in:"query",description:"for simulating response delay. Do not provide any value for page parameter(0 indicates no delay)",examples:["0",3],schema:{type:"integer",minimum:0,maximum:10}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",description:`<p>Description of <strong>User</strong> object</p>
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}},"/users/{userId}":{get:{summary:"Get a Single User",description:"Get a Single User",parameters:[{in:"path",name:"userId",schema:{type:"integer",example:3},required:!0,description:"Numeric ID of the user to get"}],responses:{200:{description:"Response when a user is found",content:{"application/json":{schema:{type:"object",properties:{data:"#/components/schemas/user",support:"#/components/schemas/support"}}}}},404:{description:"User Not found"}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},re={class:"content-container"},he=Y({__name:"links",setup(ae){const h=K(),j=Q(),{$openapidoc:v,$openapidocBus:L,$openapidocRef:g}=ne(),f=w(""),R=w(0),y=w((se.path??"").toString()),c=w(i??{}),_=r(()=>"links"),s=r(()=>h.params.type.toString()),A=r(()=>(h.params.mathod??"default").toString()),x=r(()=>s.value==="info"),D=r(()=>s.value==="auth"),S=r(()=>s.value==="components"),p=r(()=>v.currentLocale());g.setComponents(i.components),g.setDefinitions(i.definitions),g.setDocPath(y.value),g.setFile(_.value);const a=r(()=>{const t={...i.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===A.value)return f.value=o.toString(),t[o]??null}return null}),l=r(()=>{const t={...i.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===A.value)return f.value=o.toString(),t[o][s.value]??null}return null}),u=r(()=>a.value?a.value[s.value]??null:null),U=r(()=>a.value?a.value.parameters??null:null),C=r(()=>{const t=v.currentLocale()??"";return x.value?"[links] - Info Docs":D.value?"[links] - Authorization":S.value?"[links] - Components Docs":u.value?"[links] - "+(u.value["x-summary-"+t.value]||u.value.summary||""):""}),P=r(()=>{const t=v.currentLocale()??"";return x.value?"[links] - Info Docs":D.value?"[links] - Authorization":S.value?"[links] - Components Docs":u.value&&(u.value["x-description-"+t.value]||u.value.description)||""});oe({title:C.value,meta:[{name:"description",content:P.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const T=r(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[s.value]&&a.value[s.value].servers&&a.value[s.value].servers[0])return a.value[s.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[s.value]&&l.value[s.value].servers&&l.value[s.value].servers[0])return l.value[s.value].servers[0].url??null}let t=R.value;if(t>0&&i.servers&&!i.servers[t]&&(t=0),!i.servers||!i.servers[t])return"";if(i.servers[t].variables){const o=Object.values(i.servers[t].variables)??[];if(o&&o.length)return o[0].default}return i.servers[t].url??""});function q(t){R.value=t}function H(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",I=>{const b=n.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+b;v.copyToClipboard(k,I,!1),j.push({path:h.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return X(()=>{L.$on("changeServer",q),M(),H()}),Z(()=>{L.$off("changeServer",q)}),(t,o)=>{const n=$,I=W,b=G,k=F,O=z,B=V,E=J;return d(),ee("div",re,[e(x)&&e(c).info?(d(),m(n,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(D)&&e(c).components?(d(),m(I,{key:1,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(S)&&e(c).components?(d(),m(b,{key:2,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(u)?(d(),m(k,{key:3,route:e(u),"current-locale":e(p),method:e(s),components:e(c).components,url:e(f),path_doc:e(y),file:e(_),server:e(T),"sub-params":e(U)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(d(),m(k,{key:4,route:e(l),"current-locale":e(p),method:e(s),components:e(c).components,url:e(f),path_doc:e(y),file:e(_),server:e(T),"sub-params":e(U)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),m(O,{key:5})),N(E,null,{default:te(()=>[N(B,{"current-locale":e(p),doc:e(c),path:e(y),file:e(_)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
