import{_ as $,a as z,b as E,c as W,d as V,e as X}from"./SearchBlock.3e19f150.js";import{_ as G}from"./client-only.45c4cd0b.js";import{f as K,h as Q,j as Y,r as x,k as a,g as Z,l as ee,c as te,u as e,m,b as A,w as ne,n as oe,o as d}from"./entry.4698dbd5.js";import{u as re}from"./vue.f36acd1f.e66bd35a.js";import{d as ae}from"./docs.markdown.config.a3d238a2.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const I={openapi:"3.0.0",info:{title:"Markdown Content",description:"Test case to show markdown support. For more info check specification (http://spec.openapis.org/oas/v3.0.3)",version:"1.0.0"},paths:{"/markdown":{get:{summary:"Markdown in Description.",description:`<p>Endpoint to create and initiate a pipeline.</p>
<h3 id="paragraph">Paragraph</h3>
<p>In a hole in the ground there lived a hobbit. Not a <strong>nasty</strong>, <em>dirty</em>, <code>wet</code> hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a <a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>, and that means comfort.</p>
<h3 id="horizontal-rule----">Horizontal Rule <code>---</code></h3>
<hr>
<h3 id="number-list">Number List</h3>
<ol>
<li>Install <code>node</code>.</li>
<li>Install <code>npm</code>.</li>
<li>Open your editor</li>
<li>Create a JavaScript file</li>
</ol>
<h3 id="blockquotes">Blockquotes</h3>
<blockquote>
<p>This is a sample OpenAPI spec to test the parsing of various markdown styles
(RapiDoc supports common-mark syntax)</p>
</blockquote>
<h3 id="buleted-list">Buleted List</h3>
<ul>
<li>Install <code>node</code>.</li>
<li>Install <code>npm</code>.</li>
<li>Open you editor</li>
<li>Create a JavaScript file</li>
</ul>
<h3 id="table">Table</h3>
<table class="table">
<tr>
<th>Heading 1</th>
<th align="left">Left-Justified</th>
<th align="center">Centered</th>
<th align="right">Right-Justified</th>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
</table>
<h3 id="code">Code</h3>
<pre><code>$ curl -X POST -is -u username:password
  -H &quot;Content-Type: application/json&quot; https://example.com
  -d &#x27;{
  &quot;target&quot;: {
    &quot;ref_type&quot;: &quot;branch&quot;,
    &quot;type&quot;: &quot;pipeline_ref_target&quot;,
    &quot;ref_name&quot;: &quot;master&quot;
  }&#x27;
}
</code></pre>
<h3 id="code-with-syntax-highlight">Code (with syntax highlight)</h3>
<pre><code class="hljs language-bash">$ curl -X POST -is -u username:password
  -H <span class="hljs-string">&quot;Content-Type: application/json&quot;</span> https://example.com
  -d <span class="hljs-string">&#x27;{
  &quot;target&quot;: {
    &quot;ref_type&quot;: &quot;branch&quot;,
    &quot;type&quot;: &quot;pipeline_ref_target&quot;,
    &quot;ref_name&quot;: &quot;master&quot;
  }&#x27;</span>
}
</code></pre>
<h3 id="use-html-in-markdown">Use HTML in markdown</h3>
<br>
<div style="color: white; background-color:SlateBlue; padding: 12px; border-radius:2px">
  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.
  This box I designed using raw HTML inside the markdown
</div>
<br>
<div style="color:#bbb; background-color:#444; padding: 12px 0px 12px 12px;border-left: 5px solid #F06560;">
  <b style="color:#F06560">TIP</b>  Here is another one, done using HTML inside markdown with two different colors to make it appear like a TIP
</div>
<br>


<h3 id="images">Images</h3>
<p>Inline Images no-gap - <img src="https://picsum.photos/100" alt="appspot image filler"><img src="https://picsum.photos/100" alt="appspot image filler"></p>
<p>Inline Images Single space gap - <img src="https://picsum.photos/100" alt="appspot image filler">
<img src="https://picsum.photos/00" alt="appspot image filler"></p>
<p>Next Line Image</p>
<p><img src="https://picsum.photos/140x100.png" alt="appspot image filler"></p>
`,parameters:[{name:"full-name",in:"query",description:`<p>Field descriptions can contain <code>Markdown</code> (Markdown must be monospaced)<br/>
<strong>CONSTRAINTS</strong></p>
<pre><code> - At least 3 characters
 - Cannot have space
 - Cannot have number
 - First Letter must be capital
</code></pre>
`,required:!0,schema:{type:"string",minimum:3}},{name:"height",in:"query",description:"Height in `inches` (inches must be monospaced)",required:!0,schema:{type:"integer",format:"int32",minimum:12,maximum:120}},{name:"interests",in:"query",required:!0,description:`<p>Default is <code>hiking</code> (hiking must be monospaced)</p>
<table class="table">
<tr>
<th>Heading 1</th>
<th align="left">Left-Justified</th>
<th align="center">Centered</th>
<th align="right">Right-Justified</th>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
</table>
`,schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["computers","hiking","swiming"],default:"hiking"}}}],responses:{200:{description:"Response Schema field contains `Markdown` contents  (Markdown must be monospaced)",content:{"application/json":{schema:{type:"object",description:"Description of `Person` object (Person must be monospaced)",properties:{fullName:{description:"Person&#x27;s Full name is made up of `firstName` and `lastName` (firstName and lastName must be mono-spaced).",type:"object",properties:{firstName:{description:"_First name_ (First name should be italics)",type:"string"},lastName:{description:"`Last name` (last name must be monospaced)\n",type:"string"}}},hobbies:{type:"array",description:"list of words separated by `comma` (comma should be monospaced).",items:{type:"string"}},dependentNames:{type:"array",description:`<p>Array of <strong>Dependents</strong> (Dependents must be bold).</p>
`,items:{type:"object",description:"Full Name Object is made up of `firstName` and `lastName` (firstName and lastName must be mono-spaced).",properties:{fullName:{description:`<p>Parts of <strong>First Name</strong> (First Name must be bold)</p>
`,type:"object",properties:{firstName:{description:"Dependent First Name",type:"string"},lastName:{description:"Dependent Last Name",type:"string"}}}}}}}}}},headers:{Link:{required:!0,schema:{type:"string"},description:`<p>Pagination links are included in the Link header of responses.
It is important to follow these Link header values instead of constructing your own URLs as query parameters or cursor formats may change without notice.</p>
<table class="table">
<tr>
<th align="left">Link Relation</th>
<th align="left">Description</th>
</tr>
<tr>
<td align="left">first</td>
<td align="left">The URL of the immediate first page of results</td>
</tr>
<tr>
<td align="left">last</td>
<td align="left">The URL of the immediate last page of results</td>
</tr>
<tr>
<td align="left">next</td>
<td align="left">The URL of the immediate next page of results</td>
</tr>
<tr>
<td align="left">prev</td>
<td align="left">The URL of the immediate previous page of results</td>
</tr>
<tr>
<td align="left">self</td>
<td align="left">The URL of the immediate current page of results</td>
</tr>
</table>
`}}}},tags:["other"]}}},tags:{}},se={class:"content-container"},fe=K({__name:"markdown",setup(ie){const f=Q(),D=Y(),{$openapidoc:g,$openapidocBus:v,$openapidocRef:b}=oe(),_=x(""),T=x(0),y=x(ae.path.toString()),o=x(I??{}),h=a(()=>"markdown"),r=a(()=>f.params.type.toString()),C=a(()=>(f.params.mathod??"default").toString()),q=a(()=>r.value==="info"),L=a(()=>r.value==="auth"),N=a(()=>r.value==="components"),p=a(()=>g.currentLocale());b.setComponents(I.components),b.setDefinitions(I.definitions),b.setDocPath(y.value),b.setFile(h.value);const s=a(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===C.value)return _.value=n,o.value.paths[n]??null}return null}),i=a(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===C.value)return _.value=n,o.value.webhooks[n][r.value]??null}return null}),c=a(()=>s.value?s.value[r.value]??null:null),R=a(()=>s.value?s.value.parameters??null:null),H=a(()=>{const n=g.currentLocale()??"";return q.value?"[markdown] - Info Docs":L.value?"[markdown] - Authorization":N.value?"[markdown] - Components Docs":c.value?"[markdown] - "+(c.value["x-summary-"+n.value]||c.value.summary||""):""}),O=a(()=>{const n=g.currentLocale()??"";return q.value?"[markdown] - Info Docs":L.value?"[markdown] - Authorization":N.value?"[markdown] - Components Docs":c.value&&(c.value["x-description-"+n.value]||c.value.description)||""});re({title:H.value,meta:[{name:"description",content:O.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const S=a(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[r.value]&&s.value[r.value].servers&&s.value[r.value].servers[0])return s.value[r.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}let n=T.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function j(n){T.value=n}function F(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(l=>{l.addEventListener("click",u=>{const k=l.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+k;g.copyToClipboard(w,u,!1),D.push({path:f.path,hash:"#"+k}),setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(f.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function P(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),l=URL.createObjectURL(t),u=document.createElement("a");u.href=l,u.download=h.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}return Z(()=>{v.$on("downloadJsonDoc",P),v.$on("changeServer",j),M(),F()}),ee(()=>{v.$off("downloadJsonDoc",P),v.$off("changeServer",j)}),(n,t)=>{const l=$,u=z,k=E,w=W,U=X,J=V,B=G;return d(),te("div",se,[e(q)&&e(o).info?(d(),m(l,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(L)&&e(o).components?(d(),m(u,{key:1,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(N)&&e(o).components?(d(),m(k,{key:2,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(d(),m(w,{key:3,route:e(c),"current-locale":e(p),method:e(r),components:e(o).components,url:e(_),path_doc:e(y),file:e(h),server:e(S),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(d(),m(w,{key:4,route:e(i),"current-locale":e(p),method:e(r),components:e(o).components,url:e(_),path_doc:e(y),file:e(h),server:e(S),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),m(U,{key:5})),A(B,null,{default:ne(()=>[A(J,{"current-locale":e(p),doc:e(o),path:e(y),file:e(h)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
