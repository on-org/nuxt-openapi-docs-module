import{_ as q,a as W,b as z,c as U,d as V,e as G}from"./hAKOVsNa.js";import{_ as J}from"./DjNn3e3j.js";import{g as K,i as Q,k as X,r as w,l as s,h as Y,m as Z,o as p,c as ee,u as e,n as m,b as I,w as te,q as ne}from"./D0_sVEes.js";import{u as oe}from"./B1AvujwT.js";import{d as re}from"./CPyuPkJ7.js";import"./DNulFo3o.js";import"./DUk9io8q.js";const l={openapi:"3.0.0",info:{title:"Markdown Headings in Navigation Bar",description:`# Documentation
This is an example of a multiline heading
`,version:"1.0.0"},paths:{"/employees":{get:{summary:"Get list of employees",tags:["Employees"],responses:{200:{description:"List of employees"}}}}},tags:{employees:{name:"Employees",description:`<p>Markdown headings can contain HTML as well as complex markdown</p>
<br>
<div style="background-color: #F0F0F0;padding: 12px 0px 12px 12px;border-left: 5px solid #F90258;">
  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.
  This TIP box i designed using raw HTML inside the markdown
</div>  
<br>

<h1>The Employee Object</h1>
<p>Responses from the <code>/employees</code> endpoint are encoded as UTF-8 JSON objects with the following attributes:</p>
<table class="table">
<tr>
<th align="right">Attribute</th>
<th>Type</th>
<th align="left">Description</th>
</tr>
<tr>
<td align="right"><code>id</code></td>
<td>string</td>
<td align="left">A globally unique identifier.</td>
</tr>
<tr>
<td align="right"><code>account_id</code></td>
<td>string</td>
<td align="left">Reference to a parent account object.</td>
</tr>
<tr>
<td align="right"><code>thread_id</code></td>
<td>string</td>
<td align="left">Reference to a parent thread object (all messages have a thread).</td>
</tr>
<tr>
<td align="right"><code>tags</code></td>
<td>array</td>
<td align="left">A list of labels that you like to associate with an employee</td>
</tr>
</table>
`}}},se={class:"content-container"},ve=K({__name:"markdown-headings",setup(ae){const v=Q(),M=X(),{$openapidoc:h,$openapidocBus:C,$openapidocRef:f}=ne(),_=w(""),L=w(0),g=w((re.path??"").toString()),i=w(l??{}),b=s(()=>"markdown-headings"),r=s(()=>v.params.type.toString()),P=s(()=>(v.params.mathod??"default").toString()),x=s(()=>r.value==="info"),S=s(()=>r.value==="auth"),A=s(()=>r.value==="components"),d=s(()=>h.currentLocale());f.setComponents(l.components),f.setDefinitions(l.definitions),f.setDocPath(g.value),f.setFile(b.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return _.value=o.toString(),t[o]??null}return null}),c=s(()=>{const t={...l.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return _.value=o.toString(),t[o][r.value]??null}return null}),u=s(()=>a.value?a.value[r.value]??null:null),D=s(()=>a.value?a.value.parameters??null:null),O=s(()=>{const t=h.currentLocale()??"";return x.value?"[markdown-headings] - Info Docs":S.value?"[markdown-headings] - Authorization":A.value?"[markdown-headings] - Components Docs":u.value?"[markdown-headings] - "+(u.value["x-summary-"+t.value]||u.value.summary||""):""}),B=s(()=>{const t=h.currentLocale()??"";return x.value?"[markdown-headings] - Info Docs":S.value?"[markdown-headings] - Authorization":A.value?"[markdown-headings] - Components Docs":u.value&&(u.value["x-description-"+t.value]||u.value.description)||""});oe({title:O.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const R=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let t=L.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const o=Object.values(l.servers[t].variables)??[];if(o&&o.length)return o[0].default}return l.servers[t].url??""});function F(t){L.value=t}function E(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",T=>{const y=n.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+y;h.copyToClipboard(k,T,!1),M.push({path:v.path,hash:"#"+y}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function H(){if(v.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{C.$on("changeServer",F),H(),E()}),Z(()=>{C.$off("changeServer",F)}),(t,o)=>{const n=q,T=W,y=z,k=U,N=G,$=V,j=J;return p(),ee("div",se,[e(x)&&e(i).info?(p(),m(n,{key:0,info:e(i).info,servers:e(i).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(S)&&e(i).components?(p(),m(T,{key:1,components:e(i).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(A)&&e(i).components?(p(),m(y,{key:2,components:e(i).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(u)?(p(),m(k,{key:3,route:e(u),"current-locale":e(d),method:e(r),components:e(i).components,url:e(_),path_doc:e(g),file:e(b),server:e(R),"sub-params":e(D)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(p(),m(k,{key:4,route:e(c),"current-locale":e(d),method:e(r),components:e(i).components,url:e(_),path_doc:e(g),file:e(b),server:e(R),"sub-params":e(D)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),m(N,{key:5})),I(j,null,{default:te(()=>[I($,{"current-locale":e(d),doc:e(i),path:e(g),file:e(b)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ve as default};
