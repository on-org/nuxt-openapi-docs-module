import{_ as F,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.aab76cea.js";import{f as Y,u as Z,i as ee,r as g,j as te,k as r,l as ne,m as oe,c as re,h as e,n as p,b as E,w as ae,q as se,o as i}from"./entry.f4c139f7.js";import{u as le}from"./vue.f36acd1f.8d011b12.js";import"./nuxt-link.3383537a.js";import"./OpenApiDropdown.227b3450.js";const ue={class:"content-container"},_e=Y({__name:"oauth-vendor-extension",setup(ce){var B,I;const d=Z(),N=ee(),{$openapidoc:_,$openapidocBus:h,$openapidocRef:f}=se(),b=g(""),L=g(0),x=te().data,w=g((x.value.path??"").toString()),o=g(x.value.doc??{}),m=r(()=>d.params.name.toString()),s=r(()=>d.params.type.toString()),S=r(()=>(d.params.mathod??"default").toString()),A=r(()=>s.value==="info"),C=r(()=>s.value==="auth"),D=r(()=>s.value==="components"),v=r(()=>_.currentLocale());f.setComponents((B=x.value.doc)==null?void 0:B.components),f.setDefinitions((I=x.value.doc)==null?void 0:I.definitions),f.setDocPath(w.value),f.setFile(m.value);const a=r(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===S.value)return b.value=n,o.value.paths[n]??null}return null}),O=r(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===S.value)return b.value=n,o.value.webhooks[n][s.value]??null}return null}),c=r(()=>a.value?a.value[s.value]??null:null),R=r(()=>a.value?a.value.parameters??null:null),U=r(()=>{const n=_.currentLocale()??"";return A.value?"[oauth-vendor-extension] - Info Docs":C.value?"[oauth-vendor-extension] - Authorization":D.value?"[oauth-vendor-extension] - Components Docs":c.value?"[oauth-vendor-extension] - "+(c.value["x-summary-"+n.value]||c.value.summary||""):""}),W=r(()=>{const n=_.currentLocale()??"";return A.value?"[oauth-vendor-extension] - Info Docs":C.value?"[oauth-vendor-extension] - Authorization":D.value?"[oauth-vendor-extension] - Components Docs":c.value&&(c.value["x-description-"+n.value]||c.value.description)||""});le({title:U.value,meta:[{name:"description",content:W.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[s.value]&&a.value[s.value].servers&&a.value[s.value].servers[0])return a.value[s.value].servers[0].url??null}let n=L.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function j(n){L.value=n}function q(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(l=>{l.addEventListener("click",u=>{const y=l.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+y;_.copyToClipboard(k,u),N.push({path:d.path,hash:"#"+y}),setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(d.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function $(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),l=URL.createObjectURL(t),u=document.createElement("a");u.href=l,u.download=m.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}return ne(()=>{h.$on("downloadJsonDoc",$),h.$on("changeServer",j),J(),q()}),oe(()=>{h.$off("downloadJsonDoc",$),h.$off("changeServer",j)}),(n,t)=>{const l=F,u=H,y=M,k=G,T=X,V=Q,z=K;return i(),re("div",ue,[e(A)?(i(),p(l,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(C)?(i(),p(u,{key:1,components:e(o).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(D)?(i(),p(y,{key:2,components:e(o).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(c)?(i(),p(k,{key:3,route:e(c),"current-locale":e(v),method:e(s),components:e(o).components,url:e(b),path_doc:e(w),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),p(k,{key:4,route:e(O),"current-locale":e(v),method:e(s),components:e(o).components,url:e(b),path_doc:e(w),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),p(T,{key:5})),E(z,null,{default:ae(()=>[E(V,{"current-locale":e(v),doc:e(o),path:e(S),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{_e as default};