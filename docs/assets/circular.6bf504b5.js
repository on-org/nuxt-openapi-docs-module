import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.be60a727.js";import{f as Y,u as Z,i as ee,r as S,j as te,k as r,l as oe,m as ne,c as re,h as e,n as v,b as N,w as ae,q as le,o as i}from"./entry.ac86a563.js";import{u as se}from"./vue.f36acd1f.c494aa92.js";import"./nuxt-link.6688bdd4.js";import"./OpenApiDropdown.6290812a.js";const ce={class:"content-container"},fe=Y({__name:"circular",setup(ue){var B,I;const m=Z(),U=ee(),{$openapidoc:f,$openapidocBus:_,$openapidocRef:h}=le(),b=S(""),D=S(0),k=te().data,y=S((k.value.path??"").toString()),n=S(k.value.doc??{}),d=r(()=>m.params.name.toString()),l=r(()=>m.params.type.toString()),L=r(()=>(m.params.mathod??"default").toString()),x=r(()=>l.value==="info"),A=r(()=>l.value==="auth"),C=r(()=>l.value==="components"),p=r(()=>f.currentLocale());h.setComponents((B=k.value.doc)==null?void 0:B.components),h.setDefinitions((I=k.value.doc)==null?void 0:I.definitions),h.setDocPath(y.value),h.setFile(d.value);const a=r(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return b.value=o,n.value.paths[o]??null}return null}),O=r(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return b.value=o,n.value.webhooks[o][l.value]??null}return null}),u=r(()=>a.value?a.value[l.value]??null:null),R=r(()=>a.value?a.value.parameters??null:null),W=r(()=>{const o=f.currentLocale()??"";return x.value?"[circular] - Info Docs":A.value?"[circular] - Authorization":C.value?"[circular] - Components Docs":u.value?"[circular] - "+(u.value["x-summary-"+o.value]||u.value.summary||""):""}),q=r(()=>{const o=f.currentLocale()??"";return x.value?"[circular] - Info Docs":A.value?"[circular] - Authorization":C.value?"[circular] - Components Docs":u.value&&(u.value["x-description-"+o.value]||u.value.description)||""});se({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[l.value]&&a.value[l.value].servers&&a.value[l.value].servers[0])return a.value[l.value].servers[0].url??null}let o=D.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function j(o){D.value=o}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(s=>{s.addEventListener("click",c=>{const g=s.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+g;f.copyToClipboard(w,c),U.push({path:m.path,hash:"#"+g}),setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(m.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function $(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(t),c=document.createElement("a");c.href=s,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(s)}return oe(()=>{_.$on("downloadJsonDoc",$),_.$on("changeServer",j),J(),E()}),ne(()=>{_.$off("downloadJsonDoc",$),_.$off("changeServer",j)}),(o,t)=>{const s=V,c=H,g=M,w=G,T=X,z=Q,F=K;return i(),re("div",ce,[e(x)&&e(n).info?(i(),v(s,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(n).components?(i(),v(c,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)&&e(n).components?(i(),v(g,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(u)?(i(),v(w,{key:3,route:e(u),"current-locale":e(p),method:e(l),components:e(n).components,url:e(b),path_doc:e(y),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),v(w,{key:4,route:e(O),"current-locale":e(p),method:e(l),components:e(n).components,url:e(b),path_doc:e(y),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),N(F,null,{default:ae(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(y),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
