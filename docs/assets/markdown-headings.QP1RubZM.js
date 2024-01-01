import{_ as J,a as W,b as q,c as z,d as V,e as G}from"./SearchBlock.39BIF1Me.js";import{_ as K}from"./client-only.qDKU5ACo.js";import{f as Q,h as X,j as Y,r as S,k as s,g as Z,l as ee,c as te,u as e,m as v,b as $,w as ne,n as oe,o as m}from"./entry.F1ddeqcb.js";import{u as re}from"./vue.f36acd1f.8Vqce39Q.js";import{d as se}from"./docs.markdown-headings.config.Qul5sVXq.js";import"./nuxt-link.yTkd5Ou_.js";import"./OpenApiDropdown.9vX9r9au.js";const a={openapi:"3.0.0",info:{title:"Markdown Headings in Navigation Bar",description:`# Documentation
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
`}}},ae={class:"content-container"},he=Q({__name:"markdown-headings",setup(le){const f=X(),B=Y(),{$openapidoc:_,$openapidocBus:g,$openapidocRef:b}=oe(),y=S(""),C=S(0),k=S(se.path.toString()),c=S(a??{}),h=s(()=>"markdown-headings"),r=s(()=>f.params.type.toString()),R=s(()=>(f.params.mathod??"default").toString()),A=s(()=>r.value==="info"),L=s(()=>r.value==="auth"),T=s(()=>r.value==="components"),p=s(()=>_.currentLocale());b.setComponents(a.components),b.setDefinitions(a.definitions),b.setDocPath(k.value),b.setFile(h.value);const l=s(()=>{const n={...a.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===R.value)return y.value=o.toString(),n[o]??null}return null}),i=s(()=>{const n={...a.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===R.value)return y.value=o.toString(),n[o][r.value]??null}return null}),d=s(()=>l.value?l.value[r.value]??null:null),j=s(()=>l.value?l.value.parameters??null:null),E=s(()=>{const n=_.currentLocale()??"";return A.value?"[markdown-headings] - Info Docs":L.value?"[markdown-headings] - Authorization":T.value?"[markdown-headings] - Components Docs":d.value?"[markdown-headings] - "+(d.value["x-summary-"+n.value]||d.value.summary||""):""}),F=s(()=>{const n=_.currentLocale()??"";return A.value?"[markdown-headings] - Info Docs":L.value?"[markdown-headings] - Authorization":T.value?"[markdown-headings] - Components Docs":d.value&&(d.value["x-description-"+n.value]||d.value.description)||""});re({title:E.value,meta:[{name:"description",content:F.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const D=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}let n=C.value;if(n>0&&a.servers&&!a.servers[n]&&(n=0),!a.servers||!a.servers[n])return"";if(a.servers[n].variables){const o=Object.values(a.servers[n].variables)??[];if(o&&o.length)return o[0].default}return a.servers[n].url??""});function O(n){C.value=n}function I(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",u=>{const w=t.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(x,u,!1),B.push({path:f.path,hash:"#"+w}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function M(){if(f.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function P(){const n=JSON.stringify(a,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),u=document.createElement("a");u.href=t,u.download=h.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(t)}return Z(()=>{g.$on("downloadJsonDoc",P),g.$on("changeServer",O),M(),I()}),ee(()=>{g.$off("downloadJsonDoc",P),g.$off("changeServer",O)}),(n,o)=>{const t=J,u=W,w=q,x=z,N=G,H=V,U=K;return m(),te("div",ae,[e(A)&&e(c).info?(m(),v(t,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(L)&&e(c).components?(m(),v(u,{key:1,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(T)&&e(c).components?(m(),v(w,{key:2,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(d)?(m(),v(x,{key:3,route:e(d),"current-locale":e(p),method:e(r),components:e(c).components,url:e(y),path_doc:e(k),file:e(h),server:e(D),"sub-params":e(j)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(m(),v(x,{key:4,route:e(i),"current-locale":e(p),method:e(r),components:e(c).components,url:e(y),path_doc:e(k),file:e(h),server:e(D),"sub-params":e(j)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),v(N,{key:5})),$(U,null,{default:ne(()=>[$(H,{"current-locale":e(p),doc:e(c),path:e(k),file:e(h)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
