import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.3d52f55b.js";import{f as Y,u as Z,i as ee,r as x,j as te,k as s,l as ne,m as oe,c as re,h as e,n as m,b as N,w as se,q as le,o as v}from"./entry.aac0b5ea.js";import{u as ue}from"./vue.f36acd1f.4a97fd33.js";import"./nuxt-link.85b8bf59.js";import"./OpenApiDropdown.63d5c8f0.js";const ae={class:"content-container"},de=Y({__name:"multiple-security-schemes",setup(ce){var B,I;const f=Z(),U=ee(),{$openapidoc:h,$openapidocBus:_,$openapidocRef:b}=le(),y=x(""),L=x(0),k=te().data,g=x((k.value.path??"").toString()),o=x(k.value.doc??{}),d=s(()=>f.params.name.toString()),r=s(()=>f.params.type.toString()),O=s(()=>(f.params.mathod??"default").toString()),A=s(()=>r.value==="info"),C=s(()=>r.value==="auth"),D=s(()=>r.value==="components"),p=s(()=>h.currentLocale());b.setComponents((B=k.value.doc)==null?void 0:B.components),b.setDefinitions((I=k.value.doc)==null?void 0:I.definitions),b.setDocPath(g.value),b.setFile(d.value);const l=s(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return y.value=n,o.value.paths[n]??null}return null}),u=s(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return y.value=n,o.value.webhooks[n][r.value]??null}return null}),i=s(()=>l.value?l.value[r.value]??null:null),R=s(()=>l.value?l.value.parameters??null:null),W=s(()=>{const n=h.currentLocale()??"";return A.value?"[multiple-security-schemes] - Info Docs":C.value?"[multiple-security-schemes] - Authorization":D.value?"[multiple-security-schemes] - Components Docs":i.value?"[multiple-security-schemes] - "+(i.value["x-summary-"+n.value]||i.value.summary||""):""}),q=s(()=>{const n=h.currentLocale()??"";return A.value?"[multiple-security-schemes] - Info Docs":C.value?"[multiple-security-schemes] - Authorization":D.value?"[multiple-security-schemes] - Components Docs":i.value&&(i.value["x-description-"+n.value]||i.value.description)||""});ue({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let n=L.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function j(n){L.value=n}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(a=>{a.addEventListener("click",c=>{const w=a.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+w;h.copyToClipboard(S,c),U.push({path:f.path,hash:"#"+w}),setTimeout(()=>{a.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(f.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function $(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(t),c=document.createElement("a");c.href=a,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(a)}return ne(()=>{_.$on("downloadJsonDoc",$),_.$on("changeServer",j),J(),E()}),oe(()=>{_.$off("downloadJsonDoc",$),_.$off("changeServer",j)}),(n,t)=>{const a=V,c=H,w=M,S=G,T=X,z=Q,F=K;return v(),re("div",ae,[e(A)&&e(o).info?(v(),m(a,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(C)&&e(o).components?(v(),m(c,{key:1,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(D)&&e(o).components?(v(),m(w,{key:2,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(v(),m(S,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(o).components,url:e(y),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(v(),m(S,{key:4,route:e(u),"current-locale":e(p),method:e(r),components:e(o).components,url:e(y),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),m(T,{key:5})),N(F,null,{default:se(()=>[N(z,{"current-locale":e(p),doc:e(o),path:e(g),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};