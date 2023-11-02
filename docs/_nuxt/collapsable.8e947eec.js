import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.aab76cea.js";import{f as Y,u as Z,i as ee,r as w,j as te,k as l,l as oe,m as ne,c as le,h as e,n as v,b as N,w as ae,q as re,o as i}from"./entry.f4c139f7.js";import{u as se}from"./vue.f36acd1f.8d011b12.js";import"./nuxt-link.3383537a.js";import"./OpenApiDropdown.227b3450.js";const ue={class:"content-container"},_e=Y({__name:"collapsable",setup(ce){var B,I;const m=Z(),U=ee(),{$openapidoc:_,$openapidocBus:f,$openapidocRef:h}=re(),b=w(""),L=w(0),y=te().data,S=w((y.value.path??"").toString()),n=w(y.value.doc??{}),d=l(()=>m.params.name.toString()),r=l(()=>m.params.type.toString()),x=l(()=>(m.params.mathod??"default").toString()),A=l(()=>r.value==="info"),C=l(()=>r.value==="auth"),D=l(()=>r.value==="components"),p=l(()=>_.currentLocale());h.setComponents((B=y.value.doc)==null?void 0:B.components),h.setDefinitions((I=y.value.doc)==null?void 0:I.definitions),h.setDocPath(S.value),h.setFile(d.value);const a=l(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return b.value=o,n.value.paths[o]??null}return null}),O=l(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return b.value=o,n.value.webhooks[o][r.value]??null}return null}),c=l(()=>a.value?a.value[r.value]??null:null),R=l(()=>a.value?a.value.parameters??null:null),W=l(()=>{const o=_.currentLocale()??"";return A.value?"[collapsable] - Info Docs":C.value?"[collapsable] - Authorization":D.value?"[collapsable] - Components Docs":c.value?"[collapsable] - "+(c.value["x-summary-"+o.value]||c.value.summary||""):""}),q=l(()=>{const o=_.currentLocale()??"";return A.value?"[collapsable] - Info Docs":C.value?"[collapsable] - Authorization":D.value?"[collapsable] - Components Docs":c.value&&(c.value["x-description-"+o.value]||c.value.description)||""});se({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=l(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}let o=L.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function j(o){L.value=o}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(s=>{s.addEventListener("click",u=>{const k=s.getAttribute("id"),g=window.location.origin+window.location.pathname+"#"+k;_.copyToClipboard(g,u),U.push({path:m.path,hash:"#"+k}),setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(m.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function $(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(t),u=document.createElement("a");u.href=s,u.download=d.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(s)}return oe(()=>{f.$on("downloadJsonDoc",$),f.$on("changeServer",j),J(),E()}),ne(()=>{f.$off("downloadJsonDoc",$),f.$off("changeServer",j)}),(o,t)=>{const s=V,u=H,k=M,g=G,T=X,z=Q,F=K;return i(),le("div",ue,[e(A)?(i(),v(s,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(C)?(i(),v(u,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(D)?(i(),v(k,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(i(),v(g,{key:3,route:e(c),"current-locale":e(p),method:e(r),components:e(n).components,url:e(b),path_doc:e(S),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),v(g,{key:4,route:e(O),"current-locale":e(p),method:e(r),components:e(n).components,url:e(b),path_doc:e(S),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),N(F,null,{default:ae(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(x),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{_e as default};