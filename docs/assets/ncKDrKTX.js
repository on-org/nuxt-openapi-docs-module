import{_ as W,a as U,b as F,c as z,d as V,e as G}from"./CBkLy2SA.js";import{_ as J}from"./B3LdbQa4.js";import{f as K,h as Q,j as X,r as k,k as a,g as Y,l as Z,c as ee,u as e,m as d,b as O,w as ne,n as te,o as m}from"./BahJtFiW.js";import{u as oe}from"./Di5kSJuz.js";import{d as se}from"./CjlHlbaW.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const c={openapi:"3.0.0",info:{title:"Collapsible Tags",version:"1.0.0",description:`<p>Tags in openapi are used for grouping and ordering operations.<br/>
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
`,"x-tag-expanded":!1}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},name:{description:"First Name",type:"string"}}},job:{type:"object",properties:{job:{type:"string"},grade:{type:"string"}}}}}},ae={class:"content-container"},he=K({__name:"collapsable",setup(re){const h=Q(),R=X(),{$openapidoc:v,$openapidocBus:j,$openapidocRef:g}=te(),f=k(""),A=k(0),_=k((se.path??"").toString()),l=k(c??{}),y=a(()=>"collapsable"),s=a(()=>h.params.type.toString()),P=a(()=>(h.params.mathod??"default").toString()),w=a(()=>s.value==="info"),S=a(()=>s.value==="auth"),C=a(()=>s.value==="components"),u=a(()=>v.currentLocale());g.setComponents(c.components),g.setDefinitions(c.definitions),g.setDocPath(_.value),g.setFile(y.value);const r=a(()=>{const n={...c.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===P.value)return f.value=o.toString(),n[o]??null}return null}),i=a(()=>{const n={...c.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===P.value)return f.value=o.toString(),n[o][s.value]??null}return null}),p=a(()=>r.value?r.value[s.value]??null:null),q=a(()=>r.value?r.value.parameters??null:null),B=a(()=>{const n=v.currentLocale()??"";return w.value?"[collapsable] - Info Docs":S.value?"[collapsable] - Authorization":C.value?"[collapsable] - Components Docs":p.value?"[collapsable] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),E=a(()=>{const n=v.currentLocale()??"";return w.value?"[collapsable] - Info Docs":S.value?"[collapsable] - Authorization":C.value?"[collapsable] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});oe({title:B.value,meta:[{name:"description",content:E.value}],htmlAttrs:{lang:u.value},bodyAttrs:{class:"oapi"}});const I=a(()=>{if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[s.value]&&r.value[s.value].servers&&r.value[s.value].servers[0])return r.value[s.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[s.value]&&i.value[s.value].servers&&i.value[s.value].servers[0])return i.value[s.value].servers[0].url??null}let n=A.value;if(n>0&&c.servers&&!c.servers[n]&&(n=0),!c.servers||!c.servers[n])return"";if(c.servers[n].variables){const o=Object.values(c.servers[n].variables)??[];if(o&&o.length)return o[0].default}return c.servers[n].url??""});function D(n){A.value=n}function H(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",T=>{const b=t.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+b;v.copyToClipboard(x,T,!1),R.push({path:h.path,hash:"#"+b}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function L(){if(h.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}return Y(()=>{j.$on("changeServer",D),L(),H()}),Z(()=>{j.$off("changeServer",D)}),(n,o)=>{const t=W,T=U,b=F,x=z,N=G,$=V,M=J;return m(),ee("div",ae,[e(w)&&e(l).info?(m(),d(t,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(u)},null,8,["info","servers","current-locale"])):e(S)&&e(l).components?(m(),d(T,{key:1,components:e(l).components,"current-locale":e(u)},null,8,["components","current-locale"])):e(C)&&e(l).components?(m(),d(b,{key:2,components:e(l).components,"current-locale":e(u)},null,8,["components","current-locale"])):e(p)?(m(),d(x,{key:3,route:e(p),"current-locale":e(u),method:e(s),components:e(l).components,url:e(f),path_doc:e(_),file:e(y),server:e(I),"sub-params":e(q)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(m(),d(x,{key:4,route:e(i),"current-locale":e(u),method:e(s),components:e(l).components,url:e(f),path_doc:e(_),file:e(y),server:e(I),"sub-params":e(q)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),d(N,{key:5})),O(M,null,{default:ne(()=>[O($,{"current-locale":e(u),doc:e(l),path:e(_),file:e(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
