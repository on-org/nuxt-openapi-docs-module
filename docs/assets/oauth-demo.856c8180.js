import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.b9f12ca5.js";import{f as Y,u as Z,i as ee,r as x,j as te,k as a,l as oe,m as ne,c as re,h as e,n as m,b as N,w as ae,q as le,o as v}from"./entry.c82a4297.js";import{u as ue}from"./vue.f36acd1f.1e7f0639.js";import"./nuxt-link.70b43bc4.js";import"./OpenApiDropdown.9ae9203b.js";const se={class:"content-container"},fe=Y({__name:"oauth-demo",setup(ce){var B,I;const d=Z(),U=ee(),{$openapidoc:h,$openapidocBus:_,$openapidocRef:b}=le(),k=x(""),L=x(0),y=te().data,g=x((y.value.path??"").toString()),n=x(y.value.doc??{}),f=a(()=>d.params.name.toString()),r=a(()=>d.params.type.toString()),O=a(()=>(d.params.mathod??"default").toString()),A=a(()=>r.value==="info"),C=a(()=>r.value==="auth"),D=a(()=>r.value==="components"),p=a(()=>h.currentLocale());b.setComponents((B=y.value.doc)==null?void 0:B.components),b.setDefinitions((I=y.value.doc)==null?void 0:I.definitions),b.setDocPath(g.value),b.setFile(f.value);const l=a(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=o,n.value.paths[o]??null}return null}),u=a(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=o,n.value.webhooks[o][r.value]??null}return null}),i=a(()=>l.value?l.value[r.value]??null:null),R=a(()=>l.value?l.value.parameters??null:null),W=a(()=>{const o=h.currentLocale()??"";return A.value?"[oauth-demo] - Info Docs":C.value?"[oauth-demo] - Authorization":D.value?"[oauth-demo] - Components Docs":i.value?"[oauth-demo] - "+(i.value["x-summary-"+o.value]||i.value.summary||""):""}),q=a(()=>{const o=h.currentLocale()??"";return A.value?"[oauth-demo] - Info Docs":C.value?"[oauth-demo] - Authorization":D.value?"[oauth-demo] - Components Docs":i.value&&(i.value["x-description-"+o.value]||i.value.description)||""});ue({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=a(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let o=L.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function j(o){L.value=o}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(s=>{s.addEventListener("click",c=>{const w=s.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+w;h.copyToClipboard(S,c),U.push({path:d.path,hash:"#"+w}),setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(d.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function $(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(t),c=document.createElement("a");c.href=s,c.download=f.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(s)}return oe(()=>{_.$on("downloadJsonDoc",$),_.$on("changeServer",j),J(),E()}),ne(()=>{_.$off("downloadJsonDoc",$),_.$off("changeServer",j)}),(o,t)=>{const s=V,c=H,w=M,S=G,T=X,z=Q,F=K;return v(),re("div",se,[e(A)&&e(n).info?(v(),m(s,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(C)&&e(n).components?(v(),m(c,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(D)&&e(n).components?(v(),m(w,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(v(),m(S,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(n).components,url:e(k),path_doc:e(g),file:e(f),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(v(),m(S,{key:4,route:e(u),"current-locale":e(p),method:e(r),components:e(n).components,url:e(k),path_doc:e(g),file:e(f),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),m(T,{key:5})),N(F,null,{default:ae(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(g),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
