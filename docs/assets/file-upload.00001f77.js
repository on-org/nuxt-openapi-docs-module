import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.b9f12ca5.js";import{f as Y,u as Z,i as ee,r as x,j as te,k as l,l as oe,m as ne,c as re,h as e,n as m,b as N,w as le,q as ae,o as v}from"./entry.c82a4297.js";import{u as ue}from"./vue.f36acd1f.1e7f0639.js";import"./nuxt-link.70b43bc4.js";import"./OpenApiDropdown.9ae9203b.js";const se={class:"content-container"},de=Y({__name:"file-upload",setup(ce){var B,I;const f=Z(),U=ee(),{$openapidoc:_,$openapidocBus:h,$openapidocRef:b}=ae(),k=x(""),L=x(0),y=te().data,g=x((y.value.path??"").toString()),n=x(y.value.doc??{}),d=l(()=>f.params.name.toString()),r=l(()=>f.params.type.toString()),O=l(()=>(f.params.mathod??"default").toString()),A=l(()=>r.value==="info"),C=l(()=>r.value==="auth"),D=l(()=>r.value==="components"),p=l(()=>_.currentLocale());b.setComponents((B=y.value.doc)==null?void 0:B.components),b.setDefinitions((I=y.value.doc)==null?void 0:I.definitions),b.setDocPath(g.value),b.setFile(d.value);const a=l(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=o,n.value.paths[o]??null}return null}),u=l(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=o,n.value.webhooks[o][r.value]??null}return null}),i=l(()=>a.value?a.value[r.value]??null:null),R=l(()=>a.value?a.value.parameters??null:null),W=l(()=>{const o=_.currentLocale()??"";return A.value?"[file-upload] - Info Docs":C.value?"[file-upload] - Authorization":D.value?"[file-upload] - Components Docs":i.value?"[file-upload] - "+(i.value["x-summary-"+o.value]||i.value.summary||""):""}),q=l(()=>{const o=_.currentLocale()??"";return A.value?"[file-upload] - Info Docs":C.value?"[file-upload] - Authorization":D.value?"[file-upload] - Components Docs":i.value&&(i.value["x-description-"+o.value]||i.value.description)||""});ue({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=l(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let o=L.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function j(o){L.value=o}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(s=>{s.addEventListener("click",c=>{const w=s.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(S,c),U.push({path:f.path,hash:"#"+w}),setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(f.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function $(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(t),c=document.createElement("a");c.href=s,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(s)}return oe(()=>{h.$on("downloadJsonDoc",$),h.$on("changeServer",j),J(),E()}),ne(()=>{h.$off("downloadJsonDoc",$),h.$off("changeServer",j)}),(o,t)=>{const s=V,c=H,w=M,S=G,T=X,z=Q,F=K;return v(),re("div",se,[e(A)&&e(n).info?(v(),m(s,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(C)&&e(n).components?(v(),m(c,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(D)&&e(n).components?(v(),m(w,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(v(),m(S,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(n).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(v(),m(S,{key:4,route:e(u),"current-locale":e(p),method:e(r),components:e(n).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),m(T,{key:5})),N(F,null,{default:le(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(g),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
