import{_ as J,a as W,b as F,c as G,d as V,e as z}from"./C4aTQ1ik.js";import{_ as Y}from"./7ewQVEGD.js";import{f as K,h as Q,j as X,r as D,k as r,g as Z,l as ee,c as te,u as e,m as h,b as q,w as ne,n as oe,o as m}from"./Uw59YdHJ.js";import{u as se}from"./Dayx65lQ.js";import{d as re}from"./_VurbN1F.js";import"./lR3_jA5D.js";import"./DZOCZtjG.js";const a={openapi:"3.0.2",info:{title:"Links",version:"1.0",description:`<h1>Various ways to create links in RapiDoc</h1>
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
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}},"/users/{userId}":{get:{description:"Get a Single User",parameters:[{in:"path",name:"userId",schema:{type:"integer",example:3},required:!0,description:"Numeric ID of the user to get"}],responses:{200:{description:"Response when a user is found",content:{"application/json":{schema:{type:"object",properties:{data:"#/components/schemas/user",support:"#/components/schemas/support"}}}}},404:{description:"User Not found"}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},ae={class:"content-container"},ve=K({__name:"links",setup(ce){const g=Q(),C=X(),{$openapidoc:f,$openapidocBus:y,$openapidocRef:b}=oe(),_=D(""),R=D(0),k=D(re.path.toString()),i=D(a??{}),v=r(()=>"links"),s=r(()=>g.params.type.toString()),U=r(()=>(g.params.mathod??"default").toString()),L=r(()=>s.value==="info"),S=r(()=>s.value==="auth"),I=r(()=>s.value==="components"),d=r(()=>f.currentLocale());b.setComponents(a.components),b.setDefinitions(a.definitions),b.setDocPath(k.value),b.setFile(v.value);const c=r(()=>{const n={...a.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===U.value)return _.value=o.toString(),n[o]??null}return null}),l=r(()=>{const n={...a.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===U.value)return _.value=o.toString(),n[o][s.value]??null}return null}),p=r(()=>c.value?c.value[s.value]??null:null),A=r(()=>c.value?c.value.parameters??null:null),O=r(()=>{const n=f.currentLocale()??"";return L.value?"[links] - Info Docs":S.value?"[links] - Authorization":I.value?"[links] - Components Docs":p.value?"[links] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),P=r(()=>{const n=f.currentLocale()??"";return L.value?"[links] - Info Docs":S.value?"[links] - Authorization":I.value?"[links] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});se({title:O.value,meta:[{name:"description",content:P.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const j=r(()=>{if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[s.value]&&c.value[s.value].servers&&c.value[s.value].servers[0])return c.value[s.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[s.value]&&l.value[s.value].servers&&l.value[s.value].servers[0])return l.value[s.value].servers[0].url??null}let n=R.value;if(n>0&&a.servers&&!a.servers[n]&&(n=0),!a.servers||!a.servers[n])return"";if(a.servers[n].variables){const o=Object.values(a.servers[n].variables)??[];if(o&&o.length)return o[0].default}return a.servers[n].url??""});function N(n){R.value=n}function H(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",u=>{const w=t.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+w;f.copyToClipboard(x,u,!1),C.push({path:g.path,hash:"#"+w}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(g.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function T(){const n=JSON.stringify(a,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),u=document.createElement("a");u.href=t,u.download=v.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(t)}return Z(()=>{y.$on("downloadJsonDoc",T),y.$on("changeServer",N),M(),H()}),ee(()=>{y.$off("downloadJsonDoc",T),y.$off("changeServer",N)}),(n,o)=>{const t=J,u=W,w=F,x=G,B=z,E=V,$=Y;return m(),te("div",ae,[e(L)&&e(i).info?(m(),h(t,{key:0,info:e(i).info,servers:e(i).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(S)&&e(i).components?(m(),h(u,{key:1,components:e(i).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(I)&&e(i).components?(m(),h(w,{key:2,components:e(i).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(p)?(m(),h(x,{key:3,route:e(p),"current-locale":e(d),method:e(s),components:e(i).components,url:e(_),path_doc:e(k),file:e(v),server:e(j),"sub-params":e(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(m(),h(x,{key:4,route:e(l),"current-locale":e(d),method:e(s),components:e(i).components,url:e(_),path_doc:e(k),file:e(v),server:e(j),"sub-params":e(A)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),h(B,{key:5})),q($,null,{default:ne(()=>[q(E,{"current-locale":e(d),doc:e(i),path:e(k),file:e(v)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ve as default};
