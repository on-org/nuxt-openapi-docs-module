import{_ as $,a as J,b as W,c as z,d as E,e as V}from"./DApfJBIp.js";import{_ as X}from"./MzyEKMKj.js";import{g as G,j as K,l as Q,r as k,m as s,h as Y,n as Z,o as d,c as ee,u as e,q as m,b as A,w as te,s as ne}from"./CZbOQZ4Y.js";import{u as oe}from"./BgidLD4-.js";import{d as re}from"./BvYXFt5L.js";import"./C3QBS5EZ.js";import"./BXn-I8F8.js";const i={openapi:"3.0.0",info:{title:"Markdown Content",description:"Test case to show markdown support. For more info check specification (http://spec.openapis.org/oas/v3.0.3)",version:"1.0.0"},paths:{"/markdown":{get:{summary:"Markdown in Description.",description:`<p>Endpoint to create and initiate a pipeline.</p>
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
  -d &#x27;{
  &quot;target&quot;: {
    &quot;ref_type&quot;: &quot;branch&quot;,
    &quot;type&quot;: &quot;pipeline_ref_target&quot;,
    &quot;ref_name&quot;: &quot;master&quot;
  }&#x27;
}
</code></pre><h3>Code (with syntax highlight)</h3>
<pre><code class="hljs language-bash">$ curl -X POST -is -u username:password
  -H <span class="hljs-string">&quot;Content-Type: application/json&quot;</span> https://example.com
  -d <span class="hljs-string">&#x27;{
  &quot;target&quot;: {
    &quot;ref_type&quot;: &quot;branch&quot;,
    &quot;type&quot;: &quot;pipeline_ref_target&quot;,
    &quot;ref_name&quot;: &quot;master&quot;
  }&#x27;</span>
}
</code></pre><h3>Use HTML in markdown</h3>
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
</code></pre>`,required:!0,schema:{type:"string",minimum:3}},{name:"height",in:"query",description:"Height in `inches` (inches must be monospaced)",required:!0,schema:{type:"integer",format:"int32",minimum:12,maximum:120}},{name:"interests",in:"query",required:!0,description:`<p>Default is <code>hiking</code> (hiking must be monospaced)</p>
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
`}}}},tags:["other"]}}},tags:{}},se={class:"content-container"},he=G({__name:"markdown",setup(ae){const h=K(),D=Q(),{$openapidoc:f,$openapidocBus:I,$openapidocRef:g}=ne(),v=k(""),S=k(0),b=k((re.path??"").toString()),l=k(i??{}),_=s(()=>"markdown"),r=s(()=>h.params.type.toString()),T=s(()=>(h.params.mathod??"default").toString()),w=s(()=>r.value==="info"),q=s(()=>r.value==="auth"),N=s(()=>r.value==="components"),p=s(()=>f.currentLocale());g.setComponents(i.components),g.setDefinitions(i.definitions),g.setDocPath(b.value),g.setFile(_.value);const a=s(()=>{const t={...i.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===T.value)return v.value=o.toString(),t[o]??null}return null}),c=s(()=>{const t={...i.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===T.value)return v.value=o.toString(),t[o][r.value]??null}return null}),u=s(()=>a.value?a.value[r.value]??null:null),C=s(()=>a.value?a.value.parameters??null:null),H=s(()=>{const t=f.currentLocale()??"";return w.value?"[markdown] - Info Docs":q.value?"[markdown] - Authorization":N.value?"[markdown] - Components Docs":u.value?"[markdown] - "+(u.value["x-summary-"+t.value]||u.value.summary||""):""}),j=s(()=>{const t=f.currentLocale()??"";return w.value?"[markdown] - Info Docs":q.value?"[markdown] - Authorization":N.value?"[markdown] - Components Docs":u.value&&(u.value["x-description-"+t.value]||u.value.description)||""});oe({title:H.value,meta:[{name:"description",content:j.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const P=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let t=S.value;if(t>0&&i.servers&&!i.servers[t]&&(t=0),!i.servers||!i.servers[t])return"";if(i.servers[t].variables){const o=Object.values(i.servers[t].variables)??[];if(o&&o.length)return o[0].default}return i.servers[t].url??""});function R(t){S.value=t}function F(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",L=>{const y=n.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+y;f.copyToClipboard(x,L,!1),D.push({path:h.path,hash:"#"+y}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{I.$on("changeServer",R),M(),F()}),Z(()=>{I.$off("changeServer",R)}),(t,o)=>{const n=$,L=J,y=W,x=z,O=E,B=V,U=X;return d(),ee("div",se,[e(w)&&e(l).info?(d(),m(n,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(q)&&e(l).components?(d(),m(L,{key:1,components:e(l).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(N)&&e(l).components?(d(),m(y,{key:2,components:e(l).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(u)?(d(),m(x,{key:3,route:e(u),"current-locale":e(p),method:e(r),components:e(l).components,url:e(v),path_doc:e(b),file:e(_),server:e(P),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(d(),m(x,{key:4,route:e(c),"current-locale":e(p),method:e(r),components:e(l).components,url:e(v),path_doc:e(b),file:e(_),server:e(P),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),m(O,{key:5})),A(U,null,{default:te(()=>[A(B,{"current-locale":e(p),doc:e(l),path:e(b),file:e(_)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
