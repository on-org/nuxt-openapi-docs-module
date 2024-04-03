import{_ as F,a as V,b as H,c as M,d as U,e as G}from"./CBkLy2SA.js";import{_ as J}from"./B3LdbQa4.js";import{f as K,h as Q,j as X,r as k,k as s,g as Y,l as Z,c as ee,u as e,m,b as D,w as te,n as oe,o as v}from"./BahJtFiW.js";import{u as ne}from"./Di5kSJuz.js";import{d as re}from"./BgXJVBqy.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const l={openapi:"3.0.2",info:{version:"1.0",title:"POST with no request-body",description:"POST with no request-body"},servers:[{url:"http://demo1373839.mockable.io"}],paths:{"/sample-post":{post:{summary:"Resend schedule to a node",description:"Resend a schedule to a node.",operationId:"resendScheduleToNode",parameters:[{orgid:null,in:"query",schema:{type:"string"}}],responses:{204:{description:"Success"}},tags:["other"]}}},tags:{}},se={class:"content-container"},de=K({__name:"post-nobody",setup(ae){const d=Q(),$=X(),{$openapidoc:f,$openapidocBus:P,$openapidocRef:_}=oe(),h=k(""),I=k(0),b=k((re.path??"").toString()),u=k(l??{}),y=s(()=>"post-nobody"),r=s(()=>d.params.type.toString()),O=s(()=>(d.params.mathod??"default").toString()),x=s(()=>r.value==="info"),A=s(()=>r.value==="auth"),w=s(()=>r.value==="components"),p=s(()=>f.currentLocale());_.setComponents(l.components),_.setDefinitions(l.definitions),_.setDocPath(b.value),_.setFile(y.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===O.value)return h.value=n.toString(),t[n]??null}return null}),c=s(()=>{const t={...l.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===O.value)return h.value=n.toString(),t[n][r.value]??null}return null}),i=s(()=>a.value?a.value[r.value]??null:null),R=s(()=>a.value?a.value.parameters??null:null),B=s(()=>{const t=f.currentLocale()??"";return x.value?"[post-nobody] - Info Docs":A.value?"[post-nobody] - Authorization":w.value?"[post-nobody] - Components Docs":i.value?"[post-nobody] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),L=s(()=>{const t=f.currentLocale()??"";return x.value?"[post-nobody] - Info Docs":A.value?"[post-nobody] - Authorization":w.value?"[post-nobody] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ne({title:B.value,meta:[{name:"description",content:L.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const T=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let t=I.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const n=Object.values(l.servers[t].variables)??[];if(n&&n.length)return n[0].default}return l.servers[t].url??""});function q(t){I.value=t}function N(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",C=>{const g=o.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+g;f.copyToClipboard(S,C,!1),$.push({path:d.path,hash:"#"+g}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function W(){if(d.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{P.$on("changeServer",q),W(),N()}),Z(()=>{P.$off("changeServer",q)}),(t,n)=>{const o=F,C=V,g=H,S=M,E=G,j=U,z=J;return v(),ee("div",se,[e(x)&&e(u).info?(v(),m(o,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(u).components?(v(),m(C,{key:1,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(w)&&e(u).components?(v(),m(g,{key:2,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(v(),m(S,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(u).components,url:e(h),path_doc:e(b),file:e(y),server:e(T),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(v(),m(S,{key:4,route:e(c),"current-locale":e(p),method:e(r),components:e(u).components,url:e(h),path_doc:e(b),file:e(y),server:e(T),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),m(E,{key:5})),D(z,null,{default:te(()=>[D(j,{"current-locale":e(p),doc:e(u),path:e(b),file:e(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
