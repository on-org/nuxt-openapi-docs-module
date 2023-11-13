import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.b9f12ca5.js";import{f as Y,u as Z,i as ee,r as x,j as ne,k as l,l as te,m as oe,c as re,h as e,n as m,b as N,w as le,q as se,o as v}from"./entry.c82a4297.js";import{u as ae}from"./vue.f36acd1f.1e7f0639.js";import"./nuxt-link.70b43bc4.js";import"./OpenApiDropdown.9ae9203b.js";const ue={class:"content-container"},de=Y({__name:"links",setup(ce){var B,I;const f=Z(),U=ee(),{$openapidoc:_,$openapidocBus:h,$openapidocRef:b}=se(),k=x(""),L=x(0),y=ne().data,g=x((y.value.path??"").toString()),o=x(y.value.doc??{}),d=l(()=>f.params.name.toString()),r=l(()=>f.params.type.toString()),O=l(()=>(f.params.mathod??"default").toString()),A=l(()=>r.value==="info"),C=l(()=>r.value==="auth"),D=l(()=>r.value==="components"),p=l(()=>_.currentLocale());b.setComponents((B=y.value.doc)==null?void 0:B.components),b.setDefinitions((I=y.value.doc)==null?void 0:I.definitions),b.setDocPath(g.value),b.setFile(d.value);const s=l(()=>{if(!o.value.paths)return null;for(let t in o.value.paths){let n=t;if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===O.value)return k.value=t,o.value.paths[t]??null}return null}),a=l(()=>{if(!o.value.webhooks)return null;for(let t in o.value.webhooks){let n=t;if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===O.value)return k.value=t,o.value.webhooks[t][r.value]??null}return null}),i=l(()=>s.value?s.value[r.value]??null:null),R=l(()=>s.value?s.value.parameters??null:null),W=l(()=>{const t=_.currentLocale()??"";return A.value?"[links] - Info Docs":C.value?"[links] - Authorization":D.value?"[links] - Components Docs":i.value?"[links] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),q=l(()=>{const t=_.currentLocale()??"";return A.value?"[links] - Info Docs":C.value?"[links] - Authorization":D.value?"[links] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ae({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=l(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[r.value]&&s.value[r.value].servers&&s.value[r.value].servers[0])return s.value[r.value].servers[0].url??null}if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}let t=L.value;if(t>0&&o.value.servers&&!o.value.servers[t]&&(t=0),!o.value.servers||!o.value.servers[t])return"";if(o.value.servers[t].variables){const n=Object.values(o.value.servers[t].variables)??[];if(n&&n.length)return n[0].default}return o.value.servers[t].url??""});function j(t){L.value=t}function E(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(u=>{u.addEventListener("click",c=>{const w=u.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(S,c),U.push({path:f.path,hash:"#"+w}),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function $(){const t=JSON.stringify(o.value,null,4),n=new Blob([t],{type:"application/json"}),u=URL.createObjectURL(n),c=document.createElement("a");c.href=u,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)}return te(()=>{h.$on("downloadJsonDoc",$),h.$on("changeServer",j),J(),E()}),oe(()=>{h.$off("downloadJsonDoc",$),h.$off("changeServer",j)}),(t,n)=>{const u=V,c=H,w=M,S=G,T=X,z=Q,F=K;return v(),re("div",ue,[e(A)&&e(o).info?(v(),m(u,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(C)&&e(o).components?(v(),m(c,{key:1,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(D)&&e(o).components?(v(),m(w,{key:2,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(v(),m(S,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(o).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(a)?(v(),m(S,{key:4,route:e(a),"current-locale":e(p),method:e(r),components:e(o).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),m(T,{key:5})),N(F,null,{default:le(()=>[N(z,{"current-locale":e(p),doc:e(o),path:e(g),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
