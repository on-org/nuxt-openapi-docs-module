import{_ as B,a as E,b as W,c as z,d as V,e as X}from"./SearchBlock.39BIF1Me.js";import{_ as G}from"./client-only.qDKU5ACo.js";import{f as K,h as Q,j as Y,r as q,k as a,g as Z,l as ee,c as te,u as e,m as h,b as D,w as ne,n as oe,o as m}from"./entry.F1ddeqcb.js";import{u as re}from"./vue.f36acd1f.8Vqce39Q.js";import{d as ae}from"./docs.markdown.config.w1bF5Z5Y.js";import"./nuxt-link.yTkd5Ou_.js";import"./OpenApiDropdown.9vX9r9au.js";const s={openapi:"3.0.0",info:{title:"Markdown Content",description:"Test case to show markdown support. For more info check specification (http://spec.openapis.org/oas/v3.0.3)",version:"1.0.0"},paths:{"/markdown":{get:{summary:"Markdown in Description.",description:`<p>Endpoint to create and initiate a pipeline.</p>
<h3>Paragraph</h3>
<p>In a hole in the ground there lived a hobbit. Not a <strong>nasty</strong>, <em>dirty</em>, <code>wet</code> hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a <a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>, and that means comfort.</p>
<h3>Horizontal Rule <code>---</code></h3>
<hr>
<h3>Number List</h3>
<ol>
<li>Install <code>node</code>.</li>
<li>Install <code>npm</code>.</li>
<li>Open your editor</li>
<li>Create a JavaScript file</li>
</ol>
<h3>Blockquotes</h3>
<blockquote>
<p>This is a sample OpenAPI spec to test the parsing of various markdown styles
(RapiDoc supports common-mark syntax)</p>
</blockquote>
<h3>Buleted List</h3>
<ul>
<li>Install <code>node</code>.</li>
<li>Install <code>npm</code>.</li>
<li>Open you editor</li>
<li>Create a JavaScript file</li>
</ul>
<h3>Table</h3>
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
<h3>Code</h3>
<pre><code>$ curl -X POST -is -u username:password
  -H &quot;Content-Type: application/json&quot; https://example.com
  -d &#39;{
  &quot;target&quot;: {
    &quot;ref_type&quot;: &quot;branch&quot;,
    &quot;type&quot;: &quot;pipeline_ref_target&quot;,
    &quot;ref_name&quot;: &quot;master&quot;
  }&#39;
}
</code></pre>
<h3>Code (with syntax highlight)</h3>
<pre><code class="language-bash">$ curl -X POST -is -u username:password
  -H &quot;Content-Type: application/json&quot; https://example.com
  -d &#39;{
  &quot;target&quot;: {
    &quot;ref_type&quot;: &quot;branch&quot;,
    &quot;type&quot;: &quot;pipeline_ref_target&quot;,
    &quot;ref_name&quot;: &quot;master&quot;
  }&#39;
}
</code></pre>
<h3>Use HTML in markdown</h3>
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


<h3>Images</h3>
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
`}}}},tags:["other"]}}},tags:{}},se={class:"content-container"},fe=K({__name:"markdown",setup(ie){const g=Q(),j=Y(),{$openapidoc:v,$openapidocBus:b,$openapidocRef:_}=oe(),y=q(""),I=q(0),k=q(ae.path.toString()),l=q(s??{}),f=a(()=>"markdown"),r=a(()=>g.params.type.toString()),T=a(()=>(g.params.mathod??"default").toString()),L=a(()=>r.value==="info"),N=a(()=>r.value==="auth"),S=a(()=>r.value==="components"),d=a(()=>v.currentLocale());_.setComponents(s.components),_.setDefinitions(s.definitions),_.setDocPath(k.value),_.setFile(f.value);const i=a(()=>{const n={...s.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===T.value)return y.value=o.toString(),n[o]??null}return null}),c=a(()=>{const n={...s.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===T.value)return y.value=o.toString(),n[o][r.value]??null}return null}),p=a(()=>i.value?i.value[r.value]??null:null),C=a(()=>i.value?i.value.parameters??null:null),H=a(()=>{const n=v.currentLocale()??"";return L.value?"[markdown] - Info Docs":N.value?"[markdown] - Authorization":S.value?"[markdown] - Components Docs":p.value?"[markdown] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),O=a(()=>{const n=v.currentLocale()??"";return L.value?"[markdown] - Info Docs":N.value?"[markdown] - Authorization":S.value?"[markdown] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});re({title:H.value,meta:[{name:"description",content:O.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const R=a(()=>{if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let n=I.value;if(n>0&&s.servers&&!s.servers[n]&&(n=0),!s.servers||!s.servers[n])return"";if(s.servers[n].variables){const o=Object.values(s.servers[n].variables)??[];if(o&&o.length)return o[0].default}return s.servers[n].url??""});function P(n){I.value=n}function F(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",u=>{const w=t.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+w;v.copyToClipboard(x,u,!1),j.push({path:g.path,hash:"#"+w}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(g.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function A(){const n=JSON.stringify(s,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),u=document.createElement("a");u.href=t,u.download=f.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(t)}return Z(()=>{b.$on("downloadJsonDoc",A),b.$on("changeServer",P),M(),F()}),ee(()=>{b.$off("downloadJsonDoc",A),b.$off("changeServer",P)}),(n,o)=>{const t=B,u=E,w=W,x=z,U=X,J=V,$=G;return m(),te("div",se,[e(L)&&e(l).info?(m(),h(t,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(N)&&e(l).components?(m(),h(u,{key:1,components:e(l).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(S)&&e(l).components?(m(),h(w,{key:2,components:e(l).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(p)?(m(),h(x,{key:3,route:e(p),"current-locale":e(d),method:e(r),components:e(l).components,url:e(y),path_doc:e(k),file:e(f),server:e(R),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(m(),h(x,{key:4,route:e(c),"current-locale":e(d),method:e(r),components:e(l).components,url:e(y),path_doc:e(k),file:e(f),server:e(R),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),h(U,{key:5})),D($,null,{default:ne(()=>[D(J,{"current-locale":e(d),doc:e(l),path:e(k),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
