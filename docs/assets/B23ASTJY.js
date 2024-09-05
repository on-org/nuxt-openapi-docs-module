import{_ as j,a as z,b as H,c as M,d as U,e as G}from"./BBKxxenp.js";import{_ as J}from"./Ctz0EXd-.js";import{f as K,h as Q,j as X,k as Y,r as k,l as s,g as Z,m as ee,o as p,c as te,u as e,n as m,b as $,w as re}from"./DrCf4G5v.js";import{u as oe}from"./CtmrR_TU.js";import{d as ne}from"./CQoUTTeX.js";import"./CXLPdVYg.js";import"./Bq3GVmQU.js";const l={openapi:"3.0.2",info:{version:"1.0",title:"Server Override",description:"For testing operation server override. Possible to list servers for specific operation that overrides default list."},servers:[{url:"http://www.defaultserver.com"}],paths:{"/global-api-server":{get:{summary:"This path sends request to API servers defined at global level",responses:{200:{description:"Successful operation"}},tags:["other"]}},"/path-specific-api-server":{get:{summary:"This path sends request to API servers defined at Path level",description:"`server variables` at path level is not yet supported by RapiDoc",responses:{200:{description:"Successful operation"}},tags:["other"]},servers:[{url:"http://example.com/api",description:"Test server"},{url:"/api"},{url:"{protocol}://dev.com/api",description:"Server with Variable",variables:{protocol:{default:"https",description:"Server choices:\n  * `http` Not Secured server\n  * `https` Secured server\n",enum:["http","https"]}}}]}},tags:{}},se={class:"content-container"},de=K({__name:"server-override",setup(ae){const d=Q(),q=X(),{$openapidoc:f,$openapidocBus:C,$openapidocRef:h}=Y(),_=k(""),I=k(0),b=k((ne.path??"").toString()),u=k(l??{}),g=s(()=>"server-override"),n=s(()=>d.params.type.toString()),D=s(()=>(d.params.mathod??"default").toString()),A=s(()=>n.value==="info"),x=s(()=>n.value==="auth"),w=s(()=>n.value==="components"),v=s(()=>f.currentLocale());h.setComponents(l.components),h.setDefinitions(l.definitions),h.setDocPath(b.value),h.setFile(g.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const o in t){let r=o.toString();if(r.startsWith("/")&&(r=r.substring(1)),r.endsWith("/")&&(r=r.substring(-1)),r=r.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),r===D.value)return _.value=o.toString(),t[o]??null}return null}),c=s(()=>{const t={...l.webhooks};if(!t)return null;for(const o in t){let r=o.toString();if(r.startsWith("/")&&(r=r.substring(1)),r.endsWith("/")&&(r=r.substring(-1)),r=r.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),r===D.value)return _.value=o.toString(),t[o][n.value]??null}return null}),i=s(()=>a.value?a.value[n.value]??null:null),T=s(()=>a.value?a.value.parameters??null:null),B=s(()=>{const t=f.currentLocale()??"";return A.value?"[server-override] - Info Docs":x.value?"[server-override] - Authorization":w.value?"[server-override] - Components Docs":i.value?"[server-override] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),L=s(()=>{const t=f.currentLocale()??"";return A.value?"[server-override] - Info Docs":x.value?"[server-override] - Authorization":w.value?"[server-override] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});oe({title:B.value,meta:[{name:"description",content:L.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[n.value]&&a.value[n.value].servers&&a.value[n.value].servers[0])return a.value[n.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[n.value]&&c.value[n.value].servers&&c.value[n.value].servers[0])return c.value[n.value].servers[0].url??null}let t=I.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const o=Object.values(l.servers[t].variables)??[];if(o&&o.length)return o[0].default}return l.servers[t].url??""});function R(t){I.value=t}function N(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(r=>{r.addEventListener("click",P=>{const S=r.getAttribute("id"),y=window.location.origin+window.location.pathname+"#"+S;f.copyToClipboard(y,P,!1),q.push({path:d.path,hash:"#"+S}),setTimeout(()=>{r.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function W(){if(d.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Z(()=>{C.$on("changeServer",R),W(),N()}),ee(()=>{C.$off("changeServer",R)}),(t,o)=>{const r=j,P=z,S=H,y=M,E=G,F=U,V=J;return p(),te("div",se,[e(A)&&e(u).info?(p(),m(r,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(x)&&e(u).components?(p(),m(P,{key:1,components:e(u).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(w)&&e(u).components?(p(),m(S,{key:2,components:e(u).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(i)?(p(),m(y,{key:3,route:e(i),"current-locale":e(v),method:e(n),components:e(u).components,url:e(_),path_doc:e(b),file:e(g),server:e(O),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(p(),m(y,{key:4,route:e(c),"current-locale":e(v),method:e(n),components:e(u).components,url:e(_),path_doc:e(b),file:e(g),server:e(O),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),m(E,{key:5})),$(V,null,{default:re(()=>[$(F,{"current-locale":e(v),doc:e(u),path:e(b),file:e(g)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
