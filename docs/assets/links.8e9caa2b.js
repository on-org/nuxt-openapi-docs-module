import{_ as J,a as W,b as F,c as G,d as V,e as z}from"./SearchBlock.3e19f150.js";import{_ as Y}from"./client-only.45c4cd0b.js";import{f as K,h as Q,j as X,r as w,k as o,g as Z,l as ee,c as ne,u as e,m as h,b as q,w as te,n as se,o as d}from"./entry.4698dbd5.js";import{u as ae}from"./vue.f36acd1f.e66bd35a.js";import{d as oe}from"./docs.links.config.ada06c60.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const I={openapi:"3.0.2",info:{title:"Links",version:"1.0",description:`<h1 id="various-ways-to-create-links-in-rapidoc">Various ways to create links in RapiDoc</h1>
<ul>
<li>Use markdown syntax to create<ul>
<li>Internal links to various sections of the document</li>
<li>External links to other websites</li>
</ul>
</li>
<li>Convert headings to links on the Navigation bar</li>
<li>Use custom HTMLs and styling to create buttons, links etc</li>
</ul>
<h2 id="markdown-syntax-to-create-links">Markdown syntax to create links</h2>
<h2 id="internal-links">Internal Links</h2>
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
<h2 id="external-links">External Links</h2>
<p>  Just Like internal links you can use markdown syntax to create external links</p>
<pre><code>  [Take me to RapiDoc Homepage ](https://mrin9.github.io/RapiDoc/)
</code></pre>
<p>  <a href="https://mrin9.github.io/RapiDoc/">Take me to RapiDoc Homepage </a></p>
<h2 id="html-links">HTML Links</h2>
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
</code></pre>
<p>  As an example you can checkout this document&#39;s top-right corner, where you will find custom styled <strong>HTML Links</strong></p>
<h2 id="headings-as-navigation-links">Headings as navigation links</h2>
<p>  You can turn <strong>level-1 and level-2 headings to links</strong> on Navigation bar using <code>info-description-headings-in-navbar=&#39;true&#39;</code> option</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  ...
  <span class="hljs-tag">&lt;<span class="hljs-name">rapi-doc</span>  
    <span class="hljs-attr">spec-url</span> = <span class="hljs-string">&quot;../specs/links.yaml&quot;</span> 
    <span class="hljs-attr">info-description-headings-in-navbar</span>=<span class="hljs-string">&#x27;true&#x27;</span>
  &gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">rapi-doc</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
  <br/>
  As an example you can checkout this document's Navigation Bar, where you will find links to level-1 and level-2 heading
`},servers:[{url:"https://reqres.in/api/"}],paths:{"/users":{get:{description:"List of users (paginated)",parameters:[{name:"page",in:"query",schema:{type:"integer",example:2}},{name:"delay",in:"query",description:"for simulating response delay. Do not provide any value for page parameter(0 indicates no delay)",examples:["0",3],schema:{type:"integer",minimum:0,maximum:10}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",description:`<p>Description of <strong>User</strong> object</p>
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}},"/users/{userId}":{get:{description:"Get a Single User",parameters:[{in:"path",name:"userId",schema:{type:"integer",example:3},required:!0,description:"Numeric ID of the user to get"}],responses:{200:{description:"Response when a user is found",content:{"application/json":{schema:{type:"object",properties:{data:"#/components/schemas/user",support:"#/components/schemas/support"}}}}},404:{description:"User Not found"}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},re={class:"content-container"},ve=K({__name:"links",setup(le){const v=Q(),C=X(),{$openapidoc:g,$openapidocBus:f,$openapidocRef:y}=se(),b=w(""),R=w(0),k=w(oe.path.toString()),s=w(I??{}),m=o(()=>"links"),a=o(()=>v.params.type.toString()),U=o(()=>(v.params.mathod??"default").toString()),x=o(()=>a.value==="info"),D=o(()=>a.value==="auth"),L=o(()=>a.value==="components"),u=o(()=>g.currentLocale());y.setComponents(I.components),y.setDefinitions(I.definitions),y.setDocPath(k.value),y.setFile(m.value);const r=o(()=>{if(!s.value.paths)return null;for(let t in s.value.paths){let n=t;if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===U.value)return b.value=t,s.value.paths[t]??null}return null}),l=o(()=>{if(!s.value.webhooks)return null;for(let t in s.value.webhooks){let n=t;if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===U.value)return b.value=t,s.value.webhooks[t][a.value]??null}return null}),p=o(()=>r.value?r.value[a.value]??null:null),S=o(()=>r.value?r.value.parameters??null:null),O=o(()=>{const t=g.currentLocale()??"";return x.value?"[links] - Info Docs":D.value?"[links] - Authorization":L.value?"[links] - Components Docs":p.value?"[links] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),P=o(()=>{const t=g.currentLocale()??"";return x.value?"[links] - Info Docs":D.value?"[links] - Authorization":L.value?"[links] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});ae({title:O.value,meta:[{name:"description",content:P.value}],htmlAttrs:{lang:u.value},bodyAttrs:{class:"oapi"}});const A=o(()=>{if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[a.value]&&r.value[a.value].servers&&r.value[a.value].servers[0])return r.value[a.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[a.value]&&l.value[a.value].servers&&l.value[a.value].servers[0])return l.value[a.value].servers[0].url??null}let t=R.value;if(t>0&&s.value.servers&&!s.value.servers[t]&&(t=0),!s.value.servers||!s.value.servers[t])return"";if(s.value.servers[t].variables){const n=Object.values(s.value.servers[t].variables)??[];if(n&&n.length)return n[0].default}return s.value.servers[t].url??""});function N(t){R.value=t}function H(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(c=>{c.addEventListener("click",i=>{const _=c.getAttribute("id"),j=window.location.origin+window.location.pathname+"#"+_;g.copyToClipboard(j,i,!1),C.push({path:v.path,hash:"#"+_}),setTimeout(()=>{c.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(v.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function T(){const t=JSON.stringify(s.value,null,4),n=new Blob([t],{type:"application/json"}),c=URL.createObjectURL(n),i=document.createElement("a");i.href=c,i.download=m.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(c)}return Z(()=>{f.$on("downloadJsonDoc",T),f.$on("changeServer",N),M(),H()}),ee(()=>{f.$off("downloadJsonDoc",T),f.$off("changeServer",N)}),(t,n)=>{const c=J,i=W,_=F,j=G,B=z,E=V,$=Y;return d(),ne("div",re,[e(x)&&e(s).info?(d(),h(c,{key:0,info:e(s).info,servers:e(s).servers,"current-locale":e(u)},null,8,["info","servers","current-locale"])):e(D)&&e(s).components?(d(),h(i,{key:1,components:e(s).components,"current-locale":e(u)},null,8,["components","current-locale"])):e(L)&&e(s).components?(d(),h(_,{key:2,components:e(s).components,"current-locale":e(u)},null,8,["components","current-locale"])):e(p)?(d(),h(j,{key:3,route:e(p),"current-locale":e(u),method:e(a),components:e(s).components,url:e(b),path_doc:e(k),file:e(m),server:e(A),"sub-params":e(S)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(d(),h(j,{key:4,route:e(l),"current-locale":e(u),method:e(a),components:e(s).components,url:e(b),path_doc:e(k),file:e(m),server:e(A),"sub-params":e(S)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),h(B,{key:5})),q($,null,{default:te(()=>[q(E,{"current-locale":e(u),doc:e(s),path:e(k),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ve as default};
