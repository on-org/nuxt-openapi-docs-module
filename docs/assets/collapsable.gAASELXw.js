import{_ as W,a as J,b as F,c as z,d as V,e as G}from"./SearchBlock.uRgVtHA9.js";import{_ as K}from"./client-only.SJwGiWH3.js";import{f as Q,h as X,j as Y,r as j,k as a,g as Z,l as ee,c as ne,u as e,m as h,b as I,w as te,n as oe,o as m}from"./entry.ZYFPaIZe.js";import{u as se}from"./vue.f36acd1f.fgq4zm8I.js";import{d as ae}from"./docs.collapsable.config.DfVax5NA.js";import"./nuxt-link.Gwkl8Cc8.js";import"./OpenApiDropdown.xsfmtu7V.js";const r={openapi:"3.0.0",info:{title:"Collapsible Tags",version:"1.0.0",description:`<p>Tags in openapi are used for grouping and ordering operations.<br/>
In RapiDoc&#39;s <code>view</code> mode these tags acts like an accordions, which you can expand or collapse.</p>
<p>By default all the tags are expanded, but if you wish to collapse certain tags at the beginning when the spec is loaded,<br/>
you may do so by using <code>x-tag-expanded</code> extension under <code>tags</code> section which can contain <code>true</code> or <code>false</code></p>
<p>below is an example how to achieve it</p>
<pre><code class="language-yaml">  openapi: 3.0.0
  info:
    version: 1.0.0
    title: Collapsible Tags
  paths:
    ...
    ...
  tags:
    - name: My Tag 1
    - name: My Tag 2
      x-tag-expanded: false # &lt;-- extension to control expand collapse tags in RapiDoc
    - name: My Tag 3
    - name: My Tag 4
</code></pre>
<p>Even if a tag is closed, you can create links to operations inside them.<br/> 
Upon clicking the link, it will open the tag if it is closed and navigate to operation&#39;s location </p>
<p>Example: <strong><a href="#get-/path1-in-closed-tag">Link</a></strong> for <code>path1-in-closed-tag</code></p>
`},paths:{"/path1-in-open-tag":{get:{summary:"Path 1 under open tag",tags:["Open"],parameters:[{name:"name",in:"query",schema:{type:"string"}},{name:"age",in:"query",schema:{type:"integer"}}],responses:{200:{description:"Happy response",content:{"application/json":{schema:"#/components/schemas/user"}}}}}},"/path2-in-open-tag":{get:{summary:"Path 2 under open tag",tags:["Open"],parameters:[{name:"name",in:"query",schema:{type:"string"}}],responses:{200:{description:"Happy response",content:{"application/json":{schema:"#/components/schemas/job"}}}}}},"/path1-in-closed-tag":{get:{summary:"Path 1 under closed tag",tags:["Closed"],parameters:[{name:"city",in:"query",schema:{type:"string"}},{name:"state",in:"query",schema:{type:"string"}}],responses:{200:{description:"Happy response",content:{"application/json":{schema:"#/components/schemas/job"}}}}}},"/path2-in-closed-tag":{get:{summary:"Path 2 under closed tag",tags:["Closed"],parameters:[{name:"grade",in:"query",schema:{type:"string"}},{name:"salary",in:"query",schema:{type:"integer"}}],responses:{200:{description:"Happy response",content:{"application/json":{schema:"#/components/schemas/job"}}}}}},"/No-Tags":{get:{summary:"This path dont have any tag associated with it. (It gets created from the path)",responses:{200:{description:"Happy response",content:{"application/json":{schema:"#/components/schemas/user"}}}},tags:["other"]}}},tags:{open:{name:"Open",description:`<p>This tag is <strong>open</strong> by default, and it contains 2 paths inside it.</p>
`},closed:{name:"Closed",description:`<p>This tag is <strong>closed</strong> in the begining when the spec loads. It achieved by using <code>x-tag-expanded</code> extension</p>
`,"x-tag-expanded":!1}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},name:{description:"First Name",type:"string"}}},job:{type:"object",properties:{job:{type:"string"},grade:{type:"string"}}}}}},re={class:"content-container"},ve=Q({__name:"collapsable",setup(ce){const g=X(),L=Y(),{$openapidoc:f,$openapidocBus:_,$openapidocRef:y}=oe(),b=j(""),A=j(0),x=j(ae.path.toString()),l=j(r??{}),v=a(()=>"collapsable"),s=a(()=>g.params.type.toString()),P=a(()=>(g.params.mathod??"default").toString()),C=a(()=>s.value==="info"),S=a(()=>s.value==="auth"),T=a(()=>s.value==="components"),d=a(()=>f.currentLocale());y.setComponents(r.components),y.setDefinitions(r.definitions),y.setDocPath(x.value),y.setFile(v.value);const c=a(()=>{const t={...r.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return b.value=o.toString(),t[o]??null}return null}),i=a(()=>{const t={...r.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return b.value=o.toString(),t[o][s.value]??null}return null}),u=a(()=>c.value?c.value[s.value]??null:null),D=a(()=>c.value?c.value.parameters??null:null),U=a(()=>{const t=f.currentLocale()??"";return C.value?"[collapsable] - Info Docs":S.value?"[collapsable] - Authorization":T.value?"[collapsable] - Components Docs":u.value?"[collapsable] - "+(u.value["x-summary-"+t.value]||u.value.summary||""):""}),$=a(()=>{const t=f.currentLocale()??"";return C.value?"[collapsable] - Info Docs":S.value?"[collapsable] - Authorization":T.value?"[collapsable] - Components Docs":u.value&&(u.value["x-description-"+t.value]||u.value.description)||""});se({title:U.value,meta:[{name:"description",content:$.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const O=a(()=>{if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[s.value]&&c.value[s.value].servers&&c.value[s.value].servers[0])return c.value[s.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[s.value]&&i.value[s.value].servers&&i.value[s.value].servers[0])return i.value[s.value].servers[0].url??null}let t=A.value;if(t>0&&r.servers&&!r.servers[t]&&(t=0),!r.servers||!r.servers[t])return"";if(r.servers[t].variables){const o=Object.values(r.servers[t].variables)??[];if(o&&o.length)return o[0].default}return r.servers[t].url??""});function R(t){A.value=t}function B(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",p=>{const k=n.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+k;f.copyToClipboard(w,p,!1),L.push({path:g.path,hash:"#"+k}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(g.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function q(){const t=JSON.stringify(r,null,4),o=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(o),p=document.createElement("a");p.href=n,p.download=v.value+".json",document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(n)}return Z(()=>{_.$on("downloadJsonDoc",q),_.$on("changeServer",R),E(),B()}),ee(()=>{_.$off("downloadJsonDoc",q),_.$off("changeServer",R)}),(t,o)=>{const n=W,p=J,k=F,w=z,N=G,H=V,M=K;return m(),ne("div",re,[e(C)&&e(l).info?(m(),h(n,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(S)&&e(l).components?(m(),h(p,{key:1,components:e(l).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(T)&&e(l).components?(m(),h(k,{key:2,components:e(l).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(u)?(m(),h(w,{key:3,route:e(u),"current-locale":e(d),method:e(s),components:e(l).components,url:e(b),path_doc:e(x),file:e(v),server:e(O),"sub-params":e(D)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(m(),h(w,{key:4,route:e(i),"current-locale":e(d),method:e(s),components:e(l).components,url:e(b),path_doc:e(x),file:e(v),server:e(O),"sub-params":e(D)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),h(N,{key:5})),I(M,null,{default:te(()=>[I(H,{"current-locale":e(d),doc:e(l),path:e(x),file:e(v)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ve as default};
