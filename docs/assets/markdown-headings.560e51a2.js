import{_ as J,a as W,b as q,c as z,d as V,e as G}from"./SearchBlock.3e19f150.js";import{_ as K}from"./client-only.45c4cd0b.js";import{f as Q,h as X,j as Y,r as x,k as a,g as Z,l as ee,c as te,u as e,m,b as B,w as ne,n as oe,o as p}from"./entry.4698dbd5.js";import{u as re}from"./vue.f36acd1f.e66bd35a.js";import{d as ae}from"./docs.markdown-headings.config.505a4391.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const T={openapi:"3.0.0",info:{title:"Markdown Headings in Navigation Bar",description:`# Documentation
This is an example of a multiline heading
`,version:"1.0.0"},paths:{"/employees":{get:{summary:"Get list of employees",tags:["Employees"],responses:{200:{description:"List of employees"}}}}},tags:{employees:{name:"Employees",description:`<p>Markdown headings can contain HTML as well as complex markdown</p>
<br>
<div style="background-color: #F0F0F0;padding: 12px 0px 12px 12px;border-left: 5px solid #F90258;">
  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.
  This TIP box i designed using raw HTML inside the markdown
</div>  
<br>

<h1 id="the-employee-object">The Employee Object</h1>
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
`}}},se={class:"content-container"},he=Q({__name:"markdown-headings",setup(le){const h=X(),E=Y(),{$openapidoc:f,$openapidocBus:_,$openapidocRef:g}=oe(),b=x(""),j=x(0),y=x(ae.path.toString()),o=x(T??{}),v=a(()=>"markdown-headings"),r=a(()=>h.params.type.toString()),C=a(()=>(h.params.mathod??"default").toString()),A=a(()=>r.value==="info"),S=a(()=>r.value==="auth"),L=a(()=>r.value==="components"),d=a(()=>f.currentLocale());g.setComponents(T.components),g.setDefinitions(T.definitions),g.setDocPath(y.value),g.setFile(v.value);const s=a(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===C.value)return b.value=n,o.value.paths[n]??null}return null}),l=a(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===C.value)return b.value=n,o.value.webhooks[n][r.value]??null}return null}),i=a(()=>s.value?s.value[r.value]??null:null),R=a(()=>s.value?s.value.parameters??null:null),F=a(()=>{const n=f.currentLocale()??"";return A.value?"[markdown-headings] - Info Docs":S.value?"[markdown-headings] - Authorization":L.value?"[markdown-headings] - Components Docs":i.value?"[markdown-headings] - "+(i.value["x-summary-"+n.value]||i.value.summary||""):""}),I=a(()=>{const n=f.currentLocale()??"";return A.value?"[markdown-headings] - Info Docs":S.value?"[markdown-headings] - Authorization":L.value?"[markdown-headings] - Components Docs":i.value&&(i.value["x-description-"+n.value]||i.value.description)||""});re({title:F.value,meta:[{name:"description",content:I.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const D=a(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[r.value]&&s.value[r.value].servers&&s.value[r.value].servers[0])return s.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let n=j.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function O(n){j.value=n}function M(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(u=>{u.addEventListener("click",c=>{const k=u.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+k;f.copyToClipboard(w,c,!1),E.push({path:h.path,hash:"#"+k}),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function N(){if(h.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function P(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),u=URL.createObjectURL(t),c=document.createElement("a");c.href=u,c.download=v.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)}return Z(()=>{_.$on("downloadJsonDoc",P),_.$on("changeServer",O),N(),M()}),ee(()=>{_.$off("downloadJsonDoc",P),_.$off("changeServer",O)}),(n,t)=>{const u=J,c=W,k=q,w=z,$=G,H=V,U=K;return p(),te("div",se,[e(A)&&e(o).info?(p(),m(u,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(S)&&e(o).components?(p(),m(c,{key:1,components:e(o).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(L)&&e(o).components?(p(),m(k,{key:2,components:e(o).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(i)?(p(),m(w,{key:3,route:e(i),"current-locale":e(d),method:e(r),components:e(o).components,url:e(b),path_doc:e(y),file:e(v),server:e(D),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(p(),m(w,{key:4,route:e(l),"current-locale":e(d),method:e(r),components:e(o).components,url:e(b),path_doc:e(y),file:e(v),server:e(D),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),m($,{key:5})),B(U,null,{default:ne(()=>[B(H,{"current-locale":e(d),doc:e(o),path:e(y),file:e(v)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
