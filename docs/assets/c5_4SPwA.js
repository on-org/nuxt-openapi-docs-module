import{_ as $,a as W,b as G,c as F,d as V,e as z}from"./CcICxIlW.js";import{_ as J}from"./Cdvvw1m9.js";import{g as Y,i as K,k as Q,r as j,l as o,h as X,m as Z,o as d,c as ee,u as e,n as h,b as T,w as te,q as ne}from"./DmzEE5X3.js";import{u as se}from"./BwBK4R7O.js";import{d as ae}from"./Bp4zP7Y8.js";import"./D9-aD2zd.js";import"./Ca973n2n.js";const l={openapi:"3.0.2",info:{title:"Links",version:"1.0.0",description:`<h1>Various ways to create links in RapiDoc</h1>
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
</code></pre><p>  below are some of the links to various sections</p>
<ul>
<li><a href="#servers">Take me to API server </a></li>
<li><a href="#get-/users/-userId-">Operation: Get Single User </a></li>
</ul>
<h2>External Links</h2>
<p>  Just Like internal links you can use markdown syntax to create external links</p>
<pre><code>  [Take me to RapiDoc Homepage ](https://mrin9.github.io/RapiDoc/)
</code></pre><p>  <a href="https://mrin9.github.io/RapiDoc/">Take me to RapiDoc Homepage </a></p>
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
<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    ...
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">rapi-doc</span>  <span class="hljs-attr">spec-url</span> = <span class="hljs-string">&quot;../specs/links.yaml&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">slot</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span> = <span class="hljs-string">&quot;#get-/users/-userId-&quot;</span>&gt;</span> Get User Operation<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span> = <span class="hljs-string">&quot;https://mrin9.github.io/RapiDoc/&quot;</span>&gt;</span> RapiDoc Home <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">rapi-doc</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><p>  As an example you can checkout this document&#39;s top-right corner, where you will find custom styled <strong>HTML Links</strong></p>
<h2>Headings as navigation links</h2>
<p>  You can turn <strong>level-1 and level-2 headings to links</strong> on Navigation bar using <code>info-description-headings-in-navbar=&#39;true&#39;</code> option</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  ...
  <span class="hljs-tag">&lt;<span class="hljs-name">rapi-doc</span>
    <span class="hljs-attr">spec-url</span> = <span class="hljs-string">&quot;../specs/links.yaml&quot;</span>
    <span class="hljs-attr">info-description-headings-in-navbar</span>=<span class="hljs-string">&#x27;true&#x27;</span>
  &gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">rapi-doc</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>  <br/>
  As an example you can checkout this document's Navigation Bar, where you will find links to level-1 and level-2 heading
`},servers:[{url:"https://reqres.in/api/"}],paths:{"/users":{get:{description:"List of users (paginated)",parameters:[{name:"page",in:"query",schema:{type:"integer",example:2}},{name:"delay",in:"query",description:"for simulating response delay. Do not provide any value for page parameter(0 indicates no delay)",examples:["0",3],schema:{type:"integer",minimum:0,maximum:10}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",description:`<p>Description of <strong>User</strong> object</p>
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}},"/users/{userId}":{get:{summary:"Get a Single User",description:"Get a Single User",parameters:[{in:"path",name:"userId",schema:{type:"integer",example:3},required:!0,description:"Numeric ID of the user to get"}],responses:{200:{description:"Response when a user is found",content:{"application/json":{schema:{type:"object",properties:{data:"#/components/schemas/user",support:"#/components/schemas/support"}}}}},404:{description:"User Not found"}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},oe={class:"content-container"},me=Y({__name:"links",setup(re){const m=K(),N=Q(),{$openapidoc:g,$openapidocBus:I,$openapidocRef:v}=ne(),f=j(""),L=j(0),y=j((ae.path??"").toString()),c=j(l??{}),_=o(()=>"links"),a=o(()=>m.params.type.toString()),R=o(()=>(m.params.mathod??"default").toString()),w=o(()=>a.value==="info"),x=o(()=>a.value==="auth"),D=o(()=>a.value==="components"),u=o(()=>g.currentLocale());v.setComponents(l.components),v.setDefinitions(l.definitions),v.setDocPath(y.value),v.setFile(_.value);const r=o(()=>{const t={...l.paths};if(!t)return null;for(const s in t){let n=s.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===R.value)return f.value=s.toString(),t[s]??null}return null}),i=o(()=>{const t={...l.webhooks};if(!t)return null;for(const s in t){let n=s.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===R.value)return f.value=s.toString(),t[s][a.value]??null}return null}),p=o(()=>r.value?r.value[a.value]??null:null),A=o(()=>r.value?r.value.parameters??null:null),C=o(()=>{const t=g.currentLocale()??"";return w.value?"[links] - Info Docs":x.value?"[links] - Authorization":D.value?"[links] - Components Docs":p.value?"[links] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),P=o(()=>{const t=g.currentLocale()??"";return w.value?"[links] - Info Docs":x.value?"[links] - Authorization":D.value?"[links] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});se({title:C.value,meta:[{name:"description",content:P.value}],htmlAttrs:{lang:u.value},bodyAttrs:{class:"oapi"}});const U=o(()=>{if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[a.value]&&r.value[a.value].servers&&r.value[a.value].servers[0])return r.value[a.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[a.value]&&i.value[a.value].servers&&i.value[a.value].servers[0])return i.value[a.value].servers[0].url??null}let t=L.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const s=Object.values(l.servers[t].variables)??[];if(s&&s.length)return s[0].default}return l.servers[t].url??""});function q(t){L.value=t}function H(){var s;(((s=document.querySelector(".content-container"))==null?void 0:s.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",S=>{const b=n.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+b;g.copyToClipboard(k,S,!1),N.push({path:m.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(m.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return X(()=>{I.$on("changeServer",q),M(),H()}),Z(()=>{I.$off("changeServer",q)}),(t,s)=>{const n=$,S=W,b=G,k=F,O=z,B=V,E=J;return d(),ee("div",oe,[e(w)&&e(c).info?(d(),h(n,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(u)},null,8,["info","servers","current-locale"])):e(x)&&e(c).components?(d(),h(S,{key:1,components:e(c).components,"current-locale":e(u)},null,8,["components","current-locale"])):e(D)&&e(c).components?(d(),h(b,{key:2,components:e(c).components,"current-locale":e(u)},null,8,["components","current-locale"])):e(p)?(d(),h(k,{key:3,route:e(p),"current-locale":e(u),method:e(a),components:e(c).components,url:e(f),path_doc:e(y),file:e(_),server:e(U),"sub-params":e(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(d(),h(k,{key:4,route:e(i),"current-locale":e(u),method:e(a),components:e(c).components,url:e(f),path_doc:e(y),file:e(_),server:e(U),"sub-params":e(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),h(O,{key:5})),T(E,null,{default:te(()=>[T(B,{"current-locale":e(u),doc:e(c),path:e(y),file:e(_)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{me as default};
