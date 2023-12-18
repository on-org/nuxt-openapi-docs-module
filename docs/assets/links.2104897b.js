import{_ as J,a as W,b as F,c as G,d as V,e as z}from"./SearchBlock.fe27b004.js";import{_ as Y}from"./client-only.ebd476aa.js";import{f as K,h as Q,j as X,r as x,k as a,g as Z,l as ee,c as ne,u as e,m,b as q,w as te,n as se,o as h}from"./entry.71760bb6.js";import{u as oe}from"./vue.f36acd1f.679bd063.js";import{d as ae}from"./docs.links.config.ada06c60.js";import"./nuxt-link.ba0f9af6.js";import"./OpenApiDropdown.244fc662.js";const r={openapi:"3.0.2",info:{title:"Links",version:"1.0",description:`<h1 id="various-ways-to-create-links-in-rapidoc">Various ways to create links in RapiDoc</h1>
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
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}},"/users/{userId}":{get:{description:"Get a Single User",parameters:[{in:"path",name:"userId",schema:{type:"integer",example:3},required:!0,description:"Numeric ID of the user to get"}],responses:{200:{description:"Response when a user is found",content:{"application/json":{schema:{type:"object",properties:{data:"#/components/schemas/user",support:"#/components/schemas/support"}}}}},404:{description:"User Not found"}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},re={class:"content-container"},ge=K({__name:"links",setup(le){const v=Q(),C=X(),{$openapidoc:f,$openapidocBus:y,$openapidocRef:b}=se(),k=x(""),I=x(0),_=x(ae.path.toString()),c=x(r??{}),g=a(()=>"links"),o=a(()=>v.params.type.toString()),R=a(()=>(v.params.mathod??"default").toString()),D=a(()=>o.value==="info"),L=a(()=>o.value==="auth"),S=a(()=>o.value==="components"),d=a(()=>f.currentLocale());b.setComponents(r.components),b.setDefinitions(r.definitions),b.setDocPath(_.value),b.setFile(g.value);const l=a(()=>{const t={...r.paths};if(!t)return null;for(const s in t){let n=s.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===R.value)return k.value=s.toString(),t[s]??null}return null}),i=a(()=>{const t={...r.webhooks};if(!t)return null;for(const s in t){let n=s.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===R.value)return k.value=s.toString(),t[s][o.value]??null}return null}),u=a(()=>l.value?l.value[o.value]??null:null),U=a(()=>l.value?l.value.parameters??null:null),O=a(()=>{const t=f.currentLocale()??"";return D.value?"[links] - Info Docs":L.value?"[links] - Authorization":S.value?"[links] - Components Docs":u.value?"[links] - "+(u.value["x-summary-"+t.value]||u.value.summary||""):""}),P=a(()=>{const t=f.currentLocale()??"";return D.value?"[links] - Info Docs":L.value?"[links] - Authorization":S.value?"[links] - Components Docs":u.value&&(u.value["x-description-"+t.value]||u.value.description)||""});oe({title:O.value,meta:[{name:"description",content:P.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const A=a(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[o.value]&&l.value[o.value].servers&&l.value[o.value].servers[0])return l.value[o.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[o.value]&&i.value[o.value].servers&&i.value[o.value].servers[0])return i.value[o.value].servers[0].url??null}let t=I.value;if(t>0&&r.servers&&!r.servers[t]&&(t=0),!r.servers||!r.servers[t])return"";if(r.servers[t].variables){const s=Object.values(r.servers[t].variables)??[];if(s&&s.length)return s[0].default}return r.servers[t].url??""});function N(t){I.value=t}function H(){var s;(((s=document.querySelector(".content-container"))==null?void 0:s.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",p=>{const j=n.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+j;f.copyToClipboard(w,p,!1),C.push({path:v.path,hash:"#"+j}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(v.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function T(){const t=JSON.stringify(r,null,4),s=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(s),p=document.createElement("a");p.href=n,p.download=g.value+".json",document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(n)}return Z(()=>{y.$on("downloadJsonDoc",T),y.$on("changeServer",N),M(),H()}),ee(()=>{y.$off("downloadJsonDoc",T),y.$off("changeServer",N)}),(t,s)=>{const n=J,p=W,j=F,w=G,B=z,E=V,$=Y;return h(),ne("div",re,[e(D)&&e(c).info?(h(),m(n,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(L)&&e(c).components?(h(),m(p,{key:1,components:e(c).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(S)&&e(c).components?(h(),m(j,{key:2,components:e(c).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(u)?(h(),m(w,{key:3,route:e(u),"current-locale":e(d),method:e(o),components:e(c).components,url:e(k),path_doc:e(_),file:e(g),server:e(A),"sub-params":e(U)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(h(),m(w,{key:4,route:e(i),"current-locale":e(d),method:e(o),components:e(c).components,url:e(k),path_doc:e(_),file:e(g),server:e(A),"sub-params":e(U)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(h(),m(B,{key:5})),q($,null,{default:te(()=>[q(E,{"current-locale":e(d),doc:e(c),path:e(_),file:e(g)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ge as default};
