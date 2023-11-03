import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.be60a727.js";import{f as Y,u as Z,i as ee,r as S,j as oe,k as r,l as te,m as ne,c as re,h as e,n as v,b as N,w as ae,q as se,o as i}from"./entry.ac86a563.js";import{u as le}from"./vue.f36acd1f.c494aa92.js";import"./nuxt-link.6688bdd4.js";import"./OpenApiDropdown.6290812a.js";const ue={class:"content-container"},de=Y({__name:"oneof",setup(ce){var B,I;const m=Z(),U=ee(),{$openapidoc:d,$openapidocBus:_,$openapidocRef:h}=se(),b=S(""),D=S(0),k=oe().data,y=S((k.value.path??"").toString()),n=S(k.value.doc??{}),f=r(()=>m.params.name.toString()),s=r(()=>m.params.type.toString()),L=r(()=>(m.params.mathod??"default").toString()),x=r(()=>s.value==="info"),A=r(()=>s.value==="auth"),C=r(()=>s.value==="components"),p=r(()=>d.currentLocale());h.setComponents((B=k.value.doc)==null?void 0:B.components),h.setDefinitions((I=k.value.doc)==null?void 0:I.definitions),h.setDocPath(y.value),h.setFile(f.value);const a=r(()=>{if(!n.value.paths)return null;for(let t in n.value.paths){let o=t;if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===L.value)return b.value=t,n.value.paths[t]??null}return null}),O=r(()=>{if(!n.value.webhooks)return null;for(let t in n.value.webhooks){let o=t;if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===L.value)return b.value=t,n.value.webhooks[t][s.value]??null}return null}),c=r(()=>a.value?a.value[s.value]??null:null),R=r(()=>a.value?a.value.parameters??null:null),W=r(()=>{const t=d.currentLocale()??"";return x.value?"[oneof] - Info Docs":A.value?"[oneof] - Authorization":C.value?"[oneof] - Components Docs":c.value?"[oneof] - "+(c.value["x-summary-"+t.value]||c.value.summary||""):""}),q=r(()=>{const t=d.currentLocale()??"";return x.value?"[oneof] - Info Docs":A.value?"[oneof] - Authorization":C.value?"[oneof] - Components Docs":c.value&&(c.value["x-description-"+t.value]||c.value.description)||""});le({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[s.value]&&a.value[s.value].servers&&a.value[s.value].servers[0])return a.value[s.value].servers[0].url??null}let t=D.value;if(t>0&&n.value.servers&&!n.value.servers[t]&&(t=0),!n.value.servers||!n.value.servers[t])return"";if(n.value.servers[t].variables){const o=Object.values(n.value.servers[t].variables)??[];if(o&&o.length)return o[0].default}return n.value.servers[t].url??""});function j(t){D.value=t}function E(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(l=>{l.addEventListener("click",u=>{const g=l.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+g;d.copyToClipboard(w,u),U.push({path:m.path,hash:"#"+g}),setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(m.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function $(){const t=JSON.stringify(n.value,null,4),o=new Blob([t],{type:"application/json"}),l=URL.createObjectURL(o),u=document.createElement("a");u.href=l,u.download=f.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}return te(()=>{_.$on("downloadJsonDoc",$),_.$on("changeServer",j),J(),E()}),ne(()=>{_.$off("downloadJsonDoc",$),_.$off("changeServer",j)}),(t,o)=>{const l=V,u=H,g=M,w=G,T=X,z=Q,F=K;return i(),re("div",ue,[e(x)&&e(n).info?(i(),v(l,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(n).components?(i(),v(u,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)&&e(n).components?(i(),v(g,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(i(),v(w,{key:3,route:e(c),"current-locale":e(p),method:e(s),components:e(n).components,url:e(b),path_doc:e(y),file:e(f),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),v(w,{key:4,route:e(O),"current-locale":e(p),method:e(s),components:e(n).components,url:e(b),path_doc:e(y),file:e(f),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),N(F,null,{default:ae(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(y),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
