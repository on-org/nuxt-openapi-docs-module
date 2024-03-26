import{_ as q,a as z,b as V,c as H,d as M,e as G}from"./C4aTQ1ik.js";import{_ as K}from"./7ewQVEGD.js";import{f as Q,h as X,j as Y,r as k,k as r,g as Z,l as ee,c as te,u as e,m,b as O,w as ne,n as oe,o as g}from"./Uw59YdHJ.js";import{u as ae}from"./Dayx65lQ.js";import{d as re}from"./rxGAEVpX.js";import"./lR3_jA5D.js";import"./DZOCZtjG.js";const s={openapi:"3.0.0",info:{version:"1.0.0",title:"Arranging Endpoints by Tags",description:`<p>Following OpenAPI spec demonstrates how to arrange the paths using tags. (even though the paths are defined in random order in the spec but they are shown in the order as they are defined under <code>tags</code> section)</p>
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
`},paths:{"/path-3.1":{get:{summary:"This path belongs to third tag",tags:["3rd Tag"]}},"/path-1.1":{get:{summary:"This path belongs to first tag",tags:["The First Tag"]}},"/path-2.1":{get:{summary:"First path of 2nd Tag",tags:["And Second Tag"]}},"/path-2.2":{get:{summary:"Second path of 2nd Tag",tags:["And Second Tag"]}},"/common-path-in-first-and-3rd-tag":{get:{summary:"Path belongs to First and 3rd Tag",tags:["The First Tag","3rd Tag"]}},"/no-tag/path":{get:{summary:"This path do not have any tag",tags:["other"]}}},tags:{"the first tag":{name:"The First Tag"},"and second tag":{name:"And Second Tag"},"3rd tag":{name:"3rd Tag"}}},se={class:"content-container"},he=Q({__name:"arrange-by-tags",setup(le){const v=X(),j=Y(),{$openapidoc:f,$openapidocBus:_,$openapidocRef:y}=oe(),b=k(""),C=k(0),T=k(re.path.toString()),c=k(s??{}),h=r(()=>"arrange-by-tags"),a=r(()=>v.params.type.toString()),P=r(()=>(v.params.mathod??"default").toString()),w=r(()=>a.value==="info"),x=r(()=>a.value==="auth"),F=r(()=>a.value==="components"),d=r(()=>f.currentLocale());y.setComponents(s.components),y.setDefinitions(s.definitions),y.setDocPath(T.value),y.setFile(h.value);const l=r(()=>{const n={...s.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===P.value)return b.value=o.toString(),n[o]??null}return null}),u=r(()=>{const n={...s.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===P.value)return b.value=o.toString(),n[o][a.value]??null}return null}),p=r(()=>l.value?l.value[a.value]??null:null),D=r(()=>l.value?l.value.parameters??null:null),$=r(()=>{const n=f.currentLocale()??"";return w.value?"[arrange-by-tags] - Info Docs":x.value?"[arrange-by-tags] - Authorization":F.value?"[arrange-by-tags] - Components Docs":p.value?"[arrange-by-tags] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),B=r(()=>{const n=f.currentLocale()??"";return w.value?"[arrange-by-tags] - Info Docs":x.value?"[arrange-by-tags] - Authorization":F.value?"[arrange-by-tags] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});ae({title:$.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const R=r(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[a.value]&&l.value[a.value].servers&&l.value[a.value].servers[0])return l.value[a.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[a.value]&&u.value[a.value].servers&&u.value[a.value].servers[0])return u.value[a.value].servers[0].url??null}let n=C.value;if(n>0&&s.servers&&!s.servers[n]&&(n=0),!s.servers||!s.servers[n])return"";if(s.servers[n].variables){const o=Object.values(s.servers[n].variables)??[];if(o&&o.length)return o[0].default}return s.servers[n].url??""});function I(n){C.value=n}function U(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",i=>{const S=t.getAttribute("id"),A=window.location.origin+window.location.pathname+"#"+S;f.copyToClipboard(A,i,!1),j.push({path:v.path,hash:"#"+S}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(v.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function L(){const n=JSON.stringify(s,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),i=document.createElement("a");i.href=t,i.download=h.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}return Z(()=>{_.$on("downloadJsonDoc",L),_.$on("changeServer",I),E(),U()}),ee(()=>{_.$off("downloadJsonDoc",L),_.$off("changeServer",I)}),(n,o)=>{const t=q,i=z,S=V,A=H,N=G,W=M,J=K;return g(),te("div",se,[e(w)&&e(c).info?(g(),m(t,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(x)&&e(c).components?(g(),m(i,{key:1,components:e(c).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(F)&&e(c).components?(g(),m(S,{key:2,components:e(c).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(p)?(g(),m(A,{key:3,route:e(p),"current-locale":e(d),method:e(a),components:e(c).components,url:e(b),path_doc:e(T),file:e(h),server:e(R),"sub-params":e(D)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(g(),m(A,{key:4,route:e(u),"current-locale":e(d),method:e(a),components:e(c).components,url:e(b),path_doc:e(T),file:e(h),server:e(R),"sub-params":e(D)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(g(),m(N,{key:5})),O(J,null,{default:ne(()=>[O(W,{"current-locale":e(d),doc:e(c),path:e(T),file:e(h)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
