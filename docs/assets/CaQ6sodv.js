import{_ as F,a as V,b as H,c as M,d as U,e as G}from"./CBkLy2SA.js";import{_ as J}from"./B3LdbQa4.js";import{f as K,h as Q,j as X,r as S,k as s,g as Y,l as Z,c as ee,u as e,m,b as L,w as te,n as re,o as v}from"./BahJtFiW.js";import{u as oe}from"./Di5kSJuz.js";import{d as ne}from"./CBVCGF1c.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const l={openapi:"3.0.0",info:{version:"1.2.3",title:"api"},paths:{"/api":{post:{summary:"api",requestBody:{content:{"application/json":{schema:"#/components/schemas/Data"}}},responses:{200:{description:"Ok"}},tags:["other"]}}},components:{schemas:{Data:{type:"object",properties:{array:{type:"array",items:{type:"array",items:{type:"array",items:{type:"number"}}}}}}}},tags:{}},se={class:"content-container"},fe=K({__name:"arr-of-arr",setup(ae){const f=Q(),R=X(),{$openapidoc:_,$openapidocBus:D,$openapidocRef:h}=re(),d=S(""),P=S(0),y=S((ne.path??"").toString()),u=S(l??{}),b=s(()=>"arr-of-arr"),n=s(()=>f.params.type.toString()),B=s(()=>(f.params.mathod??"default").toString()),x=s(()=>n.value==="info"),A=s(()=>n.value==="auth"),C=s(()=>n.value==="components"),p=s(()=>_.currentLocale());h.setComponents(l.components),h.setDefinitions(l.definitions),h.setDocPath(y.value),h.setFile(b.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const o in t){let r=o.toString();if(r.startsWith("/")&&(r=r.substring(1)),r.endsWith("/")&&(r=r.substring(-1)),r=r.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),r===B.value)return d.value=o.toString(),t[o]??null}return null}),c=s(()=>{const t={...l.webhooks};if(!t)return null;for(const o in t){let r=o.toString();if(r.startsWith("/")&&(r=r.substring(1)),r.endsWith("/")&&(r=r.substring(-1)),r=r.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),r===B.value)return d.value=o.toString(),t[o][n.value]??null}return null}),i=s(()=>a.value?a.value[n.value]??null:null),I=s(()=>a.value?a.value.parameters??null:null),W=s(()=>{const t=_.currentLocale()??"";return x.value?"[arr-of-arr] - Info Docs":A.value?"[arr-of-arr] - Authorization":C.value?"[arr-of-arr] - Components Docs":i.value?"[arr-of-arr] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),j=s(()=>{const t=_.currentLocale()??"";return x.value?"[arr-of-arr] - Info Docs":A.value?"[arr-of-arr] - Authorization":C.value?"[arr-of-arr] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});oe({title:W.value,meta:[{name:"description",content:j.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[n.value]&&a.value[n.value].servers&&a.value[n.value].servers[0])return a.value[n.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[n.value]&&c.value[n.value].servers&&c.value[n.value].servers[0])return c.value[n.value].servers[0].url??null}let t=P.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const o=Object.values(l.servers[t].variables)??[];if(o&&o.length)return o[0].default}return l.servers[t].url??""});function $(t){P.value=t}function q(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(r=>{r.addEventListener("click",w=>{const g=r.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+g;_.copyToClipboard(k,w,!1),R.push({path:f.path,hash:"#"+g}),setTimeout(()=>{r.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function N(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{D.$on("changeServer",$),N(),q()}),Z(()=>{D.$off("changeServer",$)}),(t,o)=>{const r=F,w=V,g=H,k=M,T=G,E=U,z=J;return v(),ee("div",se,[e(x)&&e(u).info?(v(),m(r,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(u).components?(v(),m(w,{key:1,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)&&e(u).components?(v(),m(g,{key:2,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(v(),m(k,{key:3,route:e(i),"current-locale":e(p),method:e(n),components:e(u).components,url:e(d),path_doc:e(y),file:e(b),server:e(O),"sub-params":e(I)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(v(),m(k,{key:4,route:e(c),"current-locale":e(p),method:e(n),components:e(u).components,url:e(d),path_doc:e(y),file:e(b),server:e(O),"sub-params":e(I)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),m(T,{key:5})),L(z,null,{default:te(()=>[L(E,{"current-locale":e(p),doc:e(u),path:e(y),file:e(b)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
