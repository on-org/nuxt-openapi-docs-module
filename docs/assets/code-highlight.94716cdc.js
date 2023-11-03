import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.be60a727.js";import{f as Y,u as Z,i as ee,r as S,j as te,k as r,l as oe,m as ne,c as re,h as e,n as v,b as N,w as le,q as ae,o as i}from"./entry.ac86a563.js";import{u as se}from"./vue.f36acd1f.c494aa92.js";import"./nuxt-link.6688bdd4.js";import"./OpenApiDropdown.6290812a.js";const ce={class:"content-container"},de=Y({__name:"code-highlight",setup(ue){var B,I;const h=Z(),U=ee(),{$openapidoc:d,$openapidocBus:f,$openapidocRef:_}=ae(),g=S(""),D=S(0),b=te().data,k=S((b.value.path??"").toString()),n=S(b.value.doc??{}),m=r(()=>h.params.name.toString()),a=r(()=>h.params.type.toString()),L=r(()=>(h.params.mathod??"default").toString()),x=r(()=>a.value==="info"),A=r(()=>a.value==="auth"),C=r(()=>a.value==="components"),p=r(()=>d.currentLocale());_.setComponents((B=b.value.doc)==null?void 0:B.components),_.setDefinitions((I=b.value.doc)==null?void 0:I.definitions),_.setDocPath(k.value),_.setFile(m.value);const l=r(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return g.value=o,n.value.paths[o]??null}return null}),O=r(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return g.value=o,n.value.webhooks[o][a.value]??null}return null}),u=r(()=>l.value?l.value[a.value]??null:null),R=r(()=>l.value?l.value.parameters??null:null),W=r(()=>{const o=d.currentLocale()??"";return x.value?"[code-highlight] - Info Docs":A.value?"[code-highlight] - Authorization":C.value?"[code-highlight] - Components Docs":u.value?"[code-highlight] - "+(u.value["x-summary-"+o.value]||u.value.summary||""):""}),q=r(()=>{const o=d.currentLocale()??"";return x.value?"[code-highlight] - Info Docs":A.value?"[code-highlight] - Authorization":C.value?"[code-highlight] - Components Docs":u.value&&(u.value["x-description-"+o.value]||u.value.description)||""});se({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[a.value]&&l.value[a.value].servers&&l.value[a.value].servers[0])return l.value[a.value].servers[0].url??null}let o=D.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function j(o){D.value=o}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(s=>{s.addEventListener("click",c=>{const y=s.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+y;d.copyToClipboard(w,c),U.push({path:h.path,hash:"#"+y}),setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(h.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function $(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(t),c=document.createElement("a");c.href=s,c.download=m.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(s)}return oe(()=>{f.$on("downloadJsonDoc",$),f.$on("changeServer",j),J(),E()}),ne(()=>{f.$off("downloadJsonDoc",$),f.$off("changeServer",j)}),(o,t)=>{const s=V,c=H,y=M,w=G,T=X,z=Q,F=K;return i(),re("div",ce,[e(x)&&e(n).info?(i(),v(s,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(n).components?(i(),v(c,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)&&e(n).components?(i(),v(y,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(u)?(i(),v(w,{key:3,route:e(u),"current-locale":e(p),method:e(a),components:e(n).components,url:e(g),path_doc:e(k),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),v(w,{key:4,route:e(O),"current-locale":e(p),method:e(a),components:e(n).components,url:e(g),path_doc:e(k),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),N(F,null,{default:le(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(k),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
