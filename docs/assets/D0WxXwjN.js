import{_ as z,a as U,b as V,c as H,d as M,e as G}from"./CBkLy2SA.js";import{_ as J}from"./B3LdbQa4.js";import{f as K,h as Q,j as X,r as S,k as r,g as Y,l as Z,c as ee,u as e,m as d,b as R,w as te,n as ne,o as g}from"./BahJtFiW.js";import{u as ae}from"./Di5kSJuz.js";import{d as oe}from"./rxGAEVpX.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const l={openapi:"3.0.0",info:{version:"1.0.0",title:"Arranging Endpoints by Tags",description:`<p>Following OpenAPI spec demonstrates how to arrange the paths using tags. (even though the paths are defined in random order in the spec but they are shown in the order as they are defined under <code>tags</code> section)</p>
<ul>
<li>If there are multiple paths inside a tag, they can be further sorted. Use <code>sort-endpoints-by</code> property which can accept <code>path</code>, <code>method</code>, <code>summary</code> or <code>none</code></li>
<li>If you do not want to specify tag order, but follow certain naming conventions for tags in the spec you may use <code>sort-tags</code> property in RapiDoc element to sort tags alphabetically</li>
</ul>
<pre><code class="language-yaml">  openapi: 3.0.0
  info:
    title: Arranging by Tags
    version: 1.0.0

  tags:  # &lt;&lt;&lt;&lt;&lt;&lt; Define the order of the Tags using tags object at root level
    - name: The First Tag
    - name: And Second Tag
    - name: 3rd Tag

  paths:
    /path-3.1:
      get:
        summary: This path belongs to third tag
        tags:
          - 3rd Tag
    /path-1.1:
      get:
        summary: This path belongs to first tag
        tags:
          - The First Tag
    /path-2.1:
      get:
        summary: First path of 2nd Tag
        tags:
          - And Second Tag
    /path-2.2:
      get:
        summary: Second path of 2nd Tag
        tags:
          - And Second Tag
    /common-path-in-first-and-3rd-tag:
      get:
        summary: Path belongs to First and 3rd Tag
        tags:    # &lt;&lt;&lt; Paths can belong to multiple Tags
          - The First Tag
          - 3rd Tag
    /no-tag/path:
      get:
        summary: This path do not have any tag
</code></pre>
`},paths:{"/path-3.1":{get:{summary:"This path belongs to third tag",tags:["3rd Tag"]}},"/path-1.1":{get:{summary:"This path belongs to first tag",tags:["The First Tag"]}},"/path-2.1":{get:{summary:"First path of 2nd Tag",tags:["And Second Tag"]}},"/path-2.2":{get:{summary:"Second path of 2nd Tag",tags:["And Second Tag"]}},"/common-path-in-first-and-3rd-tag":{get:{summary:"Path belongs to First and 3rd Tag",tags:["The First Tag","3rd Tag"]}},"/no-tag/path":{get:{summary:"This path do not have any tag",tags:["other"]}}},tags:{"the first tag":{name:"The First Tag"},"and second tag":{name:"And Second Tag"},"3rd tag":{name:"3rd Tag"}}},re={class:"content-container"},he=K({__name:"arrange-by-tags",setup(se){const h=Q(),$=X(),{$openapidoc:m,$openapidocBus:F,$openapidocRef:v}=ne(),f=S(""),P=S(0),_=S((oe.path??"").toString()),c=S(l??{}),y=r(()=>"arrange-by-tags"),o=r(()=>h.params.type.toString()),C=r(()=>(h.params.mathod??"default").toString()),A=r(()=>o.value==="info"),k=r(()=>o.value==="auth"),w=r(()=>o.value==="components"),p=r(()=>m.currentLocale());v.setComponents(l.components),v.setDefinitions(l.definitions),v.setDocPath(_.value),v.setFile(y.value);const s=r(()=>{const t={...l.paths};if(!t)return null;for(const a in t){let n=a.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===C.value)return f.value=a.toString(),t[a]??null}return null}),u=r(()=>{const t={...l.webhooks};if(!t)return null;for(const a in t){let n=a.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===C.value)return f.value=a.toString(),t[a][o.value]??null}return null}),i=r(()=>s.value?s.value[o.value]??null:null),I=r(()=>s.value?s.value.parameters??null:null),B=r(()=>{const t=m.currentLocale()??"";return A.value?"[arrange-by-tags] - Info Docs":k.value?"[arrange-by-tags] - Authorization":w.value?"[arrange-by-tags] - Components Docs":i.value?"[arrange-by-tags] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),L=r(()=>{const t=m.currentLocale()??"";return A.value?"[arrange-by-tags] - Info Docs":k.value?"[arrange-by-tags] - Authorization":w.value?"[arrange-by-tags] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ae({title:B.value,meta:[{name:"description",content:L.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const D=r(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[o.value]&&s.value[o.value].servers&&s.value[o.value].servers[0])return s.value[o.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[o.value]&&u.value[o.value].servers&&u.value[o.value].servers[0])return u.value[o.value].servers[0].url??null}let t=P.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const a=Object.values(l.servers[t].variables)??[];if(a&&a.length)return a[0].default}return l.servers[t].url??""});function O(t){P.value=t}function W(){var a;(((a=document.querySelector(".content-container"))==null?void 0:a.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",x=>{const b=n.getAttribute("id"),T=window.location.origin+window.location.pathname+"#"+b;m.copyToClipboard(T,x,!1),$.push({path:h.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{F.$on("changeServer",O),E(),W()}),Z(()=>{F.$off("changeServer",O)}),(t,a)=>{const n=z,x=U,b=V,T=H,N=G,j=M,q=J;return g(),ee("div",re,[e(A)&&e(c).info?(g(),d(n,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(k)&&e(c).components?(g(),d(x,{key:1,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(w)&&e(c).components?(g(),d(b,{key:2,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(g(),d(T,{key:3,route:e(i),"current-locale":e(p),method:e(o),components:e(c).components,url:e(f),path_doc:e(_),file:e(y),server:e(D),"sub-params":e(I)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(g(),d(T,{key:4,route:e(u),"current-locale":e(p),method:e(o),components:e(c).components,url:e(f),path_doc:e(_),file:e(y),server:e(D),"sub-params":e(I)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(g(),d(N,{key:5})),R(q,null,{default:te(()=>[R(j,{"current-locale":e(p),doc:e(c),path:e(_),file:e(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
