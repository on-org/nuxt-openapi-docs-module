import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.be60a727.js";import{f as Y,u as Z,i as ee,r as S,j as te,k as r,l as oe,m as ne,c as re,h as e,n as v,b as N,w as se,q as ae,o as i}from"./entry.ac86a563.js";import{u as le}from"./vue.f36acd1f.c494aa92.js";import"./nuxt-link.6688bdd4.js";import"./OpenApiDropdown.6290812a.js";const ue={class:"content-container"},de=Y({__name:"oneof-with-refs",setup(ce){var B,I;const f=Z(),U=ee(),{$openapidoc:d,$openapidocBus:h,$openapidocRef:_}=ae(),b=S(""),D=S(0),w=te().data,k=S((w.value.path??"").toString()),n=S(w.value.doc??{}),m=r(()=>f.params.name.toString()),a=r(()=>f.params.type.toString()),L=r(()=>(f.params.mathod??"default").toString()),x=r(()=>a.value==="info"),A=r(()=>a.value==="auth"),C=r(()=>a.value==="components"),p=r(()=>d.currentLocale());_.setComponents((B=w.value.doc)==null?void 0:B.components),_.setDefinitions((I=w.value.doc)==null?void 0:I.definitions),_.setDocPath(k.value),_.setFile(m.value);const s=r(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return b.value=o,n.value.paths[o]??null}return null}),O=r(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return b.value=o,n.value.webhooks[o][a.value]??null}return null}),c=r(()=>s.value?s.value[a.value]??null:null),R=r(()=>s.value?s.value.parameters??null:null),W=r(()=>{const o=d.currentLocale()??"";return x.value?"[oneof-with-refs] - Info Docs":A.value?"[oneof-with-refs] - Authorization":C.value?"[oneof-with-refs] - Components Docs":c.value?"[oneof-with-refs] - "+(c.value["x-summary-"+o.value]||c.value.summary||""):""}),q=r(()=>{const o=d.currentLocale()??"";return x.value?"[oneof-with-refs] - Info Docs":A.value?"[oneof-with-refs] - Authorization":C.value?"[oneof-with-refs] - Components Docs":c.value&&(c.value["x-description-"+o.value]||c.value.description)||""});le({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[a.value]&&s.value[a.value].servers&&s.value[a.value].servers[0])return s.value[a.value].servers[0].url??null}let o=D.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function j(o){D.value=o}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(l=>{l.addEventListener("click",u=>{const y=l.getAttribute("id"),g=window.location.origin+window.location.pathname+"#"+y;d.copyToClipboard(g,u),U.push({path:f.path,hash:"#"+y}),setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(f.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function $(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),l=URL.createObjectURL(t),u=document.createElement("a");u.href=l,u.download=m.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}return oe(()=>{h.$on("downloadJsonDoc",$),h.$on("changeServer",j),J(),E()}),ne(()=>{h.$off("downloadJsonDoc",$),h.$off("changeServer",j)}),(o,t)=>{const l=V,u=H,y=M,g=G,T=X,z=Q,F=K;return i(),re("div",ue,[e(x)&&e(n).info?(i(),v(l,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(n).components?(i(),v(u,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)&&e(n).components?(i(),v(y,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(i(),v(g,{key:3,route:e(c),"current-locale":e(p),method:e(a),components:e(n).components,url:e(b),path_doc:e(k),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),v(g,{key:4,route:e(O),"current-locale":e(p),method:e(a),components:e(n).components,url:e(b),path_doc:e(k),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),N(F,null,{default:se(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(k),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
