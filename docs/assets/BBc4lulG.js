import{_ as z,a as F,b as V,c as Y,d as H,e as U}from"./BBKxxenp.js";import{_ as G}from"./Ctz0EXd-.js";import{f as J,h as K,j as Q,k as X,r as k,l as s,g as Z,m as ee,o as m,c as te,u as e,n as v,b as $,w as oe}from"./DrCf4G5v.js";import{u as ne}from"./CtmrR_TU.js";import{d as re}from"./Co59VFnq.js";import"./CXLPdVYg.js";import"./Bq3GVmQU.js";const a={openapi:"3.0.0",info:{title:"Multiple One-Of Test",version:"1.0.0"},paths:{"/multiple-one-of":{get:{summary:"Multiple One of",description:"Schema composition using multiple `one-of`",responses:{200:{description:"Success",content:{"application/json":{schema:"#/components/schemas/Data"}}}},tags:["other"]}}},components:{schemas:{Woman:{properties:{haircolor:{type:"string"}}},Man:{properties:{weight:{type:"integer"}}},Young:{properties:{schoolName:{type:"string"}}},Old:{properties:{employerName:{type:"string"}}},Data:{allOf:[{type:"object",properties:{id:{type:"integer"},name:{type:"string"}}},{oneOf:["#/components/schemas/Woman","#/components/schemas/Man"]},{oneOf:["#/components/schemas/Young","#/components/schemas/Old"]},{properties:{language:{type:"string"}}}]}}},tags:{}},se={class:"content-container"},fe=J({__name:"multiple-oneof",setup(le){const f=K(),B=Q(),{$openapidoc:h,$openapidocBus:C,$openapidocRef:_}=X(),d=k(""),D=k(0),g=k((re.path??"").toString()),u=k(a??{}),y=s(()=>"multiple-oneof"),r=s(()=>f.params.type.toString()),P=s(()=>(f.params.mathod??"default").toString()),x=s(()=>r.value==="info"),A=s(()=>r.value==="auth"),O=s(()=>r.value==="components"),p=s(()=>h.currentLocale());_.setComponents(a.components),_.setDefinitions(a.definitions),_.setDocPath(g.value),_.setFile(y.value);const l=s(()=>{const t={...a.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===P.value)return d.value=n.toString(),t[n]??null}return null}),c=s(()=>{const t={...a.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===P.value)return d.value=n.toString(),t[n][r.value]??null}return null}),i=s(()=>l.value?l.value[r.value]??null:null),W=s(()=>l.value?l.value.parameters??null:null),L=s(()=>{const t=h.currentLocale()??"";return x.value?"[multiple-oneof] - Info Docs":A.value?"[multiple-oneof] - Authorization":O.value?"[multiple-oneof] - Components Docs":i.value?"[multiple-oneof] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),M=s(()=>{const t=h.currentLocale()??"";return x.value?"[multiple-oneof] - Info Docs":A.value?"[multiple-oneof] - Authorization":O.value?"[multiple-oneof] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ne({title:L.value,meta:[{name:"description",content:M.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const I=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let t=D.value;if(t>0&&a.servers&&!a.servers[t]&&(t=0),!a.servers||!a.servers[t])return"";if(a.servers[t].variables){const n=Object.values(a.servers[t].variables)??[];if(n&&n.length)return n[0].default}return a.servers[t].url??""});function N(t){D.value=t}function R(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",w=>{const b=o.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+b;h.copyToClipboard(S,w,!1),B.push({path:f.path,hash:"#"+b}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function T(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Z(()=>{C.$on("changeServer",N),T(),R()}),ee(()=>{C.$off("changeServer",N)}),(t,n)=>{const o=z,w=F,b=V,S=Y,j=U,q=H,E=G;return m(),te("div",se,[e(x)&&e(u).info?(m(),v(o,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(u).components?(m(),v(w,{key:1,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(O)&&e(u).components?(m(),v(b,{key:2,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(m(),v(S,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(u).components,url:e(d),path_doc:e(g),file:e(y),server:e(I),"sub-params":e(W)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(m(),v(S,{key:4,route:e(c),"current-locale":e(p),method:e(r),components:e(u).components,url:e(d),path_doc:e(g),file:e(y),server:e(I),"sub-params":e(W)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),v(j,{key:5})),$(E,null,{default:oe(()=>[$(q,{"current-locale":e(p),doc:e(u),path:e(g),file:e(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
