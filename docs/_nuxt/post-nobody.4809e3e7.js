import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.aab76cea.js";import{f as Y,u as Z,i as ee,r as w,j as oe,k as r,l as te,m as ne,c as re,h as e,n as v,b as N,w as se,q as ae,o as i}from"./entry.f4c139f7.js";import{u as le}from"./vue.f36acd1f.8d011b12.js";import"./nuxt-link.3383537a.js";import"./OpenApiDropdown.227b3450.js";const ue={class:"content-container"},_e=Y({__name:"post-nobody",setup(ce){var B,I;const d=Z(),U=ee(),{$openapidoc:_,$openapidocBus:f,$openapidocRef:h}=ae(),b=w(""),L=w(0),y=oe().data,S=w((y.value.path??"").toString()),n=w(y.value.doc??{}),m=r(()=>d.params.name.toString()),a=r(()=>d.params.type.toString()),x=r(()=>(d.params.mathod??"default").toString()),A=r(()=>a.value==="info"),C=r(()=>a.value==="auth"),D=r(()=>a.value==="components"),p=r(()=>_.currentLocale());h.setComponents((B=y.value.doc)==null?void 0:B.components),h.setDefinitions((I=y.value.doc)==null?void 0:I.definitions),h.setDocPath(S.value),h.setFile(m.value);const s=r(()=>{if(!n.value.paths)return null;for(let t in n.value.paths){let o=t;if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===x.value)return b.value=t,n.value.paths[t]??null}return null}),O=r(()=>{if(!n.value.webhooks)return null;for(let t in n.value.webhooks){let o=t;if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===x.value)return b.value=t,n.value.webhooks[t][a.value]??null}return null}),c=r(()=>s.value?s.value[a.value]??null:null),R=r(()=>s.value?s.value.parameters??null:null),W=r(()=>{const t=_.currentLocale()??"";return A.value?"[post-nobody] - Info Docs":C.value?"[post-nobody] - Authorization":D.value?"[post-nobody] - Components Docs":c.value?"[post-nobody] - "+(c.value["x-summary-"+t.value]||c.value.summary||""):""}),q=r(()=>{const t=_.currentLocale()??"";return A.value?"[post-nobody] - Info Docs":C.value?"[post-nobody] - Authorization":D.value?"[post-nobody] - Components Docs":c.value&&(c.value["x-description-"+t.value]||c.value.description)||""});le({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[a.value]&&s.value[a.value].servers&&s.value[a.value].servers[0])return s.value[a.value].servers[0].url??null}let t=L.value;if(t>0&&n.value.servers&&!n.value.servers[t]&&(t=0),!n.value.servers||!n.value.servers[t])return"";if(n.value.servers[t].variables){const o=Object.values(n.value.servers[t].variables)??[];if(o&&o.length)return o[0].default}return n.value.servers[t].url??""});function j(t){L.value=t}function E(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(l=>{l.addEventListener("click",u=>{const k=l.getAttribute("id"),g=window.location.origin+window.location.pathname+"#"+k;_.copyToClipboard(g,u),U.push({path:d.path,hash:"#"+k}),setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(d.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function $(){const t=JSON.stringify(n.value,null,4),o=new Blob([t],{type:"application/json"}),l=URL.createObjectURL(o),u=document.createElement("a");u.href=l,u.download=m.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}return te(()=>{f.$on("downloadJsonDoc",$),f.$on("changeServer",j),J(),E()}),ne(()=>{f.$off("downloadJsonDoc",$),f.$off("changeServer",j)}),(t,o)=>{const l=V,u=H,k=M,g=G,T=X,z=Q,F=K;return i(),re("div",ue,[e(A)?(i(),v(l,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(C)?(i(),v(u,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(D)?(i(),v(k,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(i(),v(g,{key:3,route:e(c),"current-locale":e(p),method:e(a),components:e(n).components,url:e(b),path_doc:e(S),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),v(g,{key:4,route:e(O),"current-locale":e(p),method:e(a),components:e(n).components,url:e(b),path_doc:e(S),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),N(F,null,{default:se(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(x),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{_e as default};