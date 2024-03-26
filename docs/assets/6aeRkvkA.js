import{_ as z,a as F,b as V,c as H,d as M,e as G}from"./CS6cvqKt.js";import{_ as K}from"./pWAC-K-K.js";import{f as Q,h as X,j as Y,r as S,k as a,g as Z,l as ee,c as te,u as e,m as d,b as B,w as re,n as ne,o as y}from"./BYj_I_4_.js";import{u as oe}from"./BDA3X4wF.js";import{d as ae}from"./Du0_b-Zw.js";import"./y4eX7S1R.js";import"./DpDRfkx3.js";const s={openapi:"3.0.3",info:{description:"Nesting of Arrays and Object",version:"0.0.0"},paths:{"/object-as-root":{get:{tags:["Array and object nesting"],summary:"Object as root",responses:{200:{description:"Object as root",content:{"application/json":{schema:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}},"/array-of-object":{get:{tags:["Array and object nesting"],summary:"Array of Object",responses:{200:{description:"Array as root",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}},"/array-of-array":{get:{tags:["Array and object nesting"],summary:"Array of array",responses:{200:{description:"Array of array",content:{"application/json":{schema:{type:"array",items:{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}}},"/array-of-array-of-primitive":{get:{tags:["Array and object nesting"],summary:"Array of array of number",responses:{200:{description:"Array of array of number",content:{"application/json":{schema:{type:"object",properties:{name:{type:"string"},age:{type:"integer"},prices:{type:"array",items:{type:"array",items:{type:"number"}}}}}}}}}}},"/array-of-array-3-levels":{get:{tags:["Array and object nesting"],summary:"Array of array (3 Levels)",responses:{200:{description:"Array of array (3 Levels)",content:{"application/json":{schema:{type:"array",items:{type:"array",items:{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}}}},"/array-of-array-4-levels":{get:{tags:["Array and object nesting"],summary:"Array of array (4 Levels)",responses:{200:{description:"Array of array (4 Levels)",content:{"application/json":{schema:{type:"array",items:{type:"array",items:{type:"array",items:{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}}}}},"/object-containing-array":{get:{tags:["Array and object nesting"],summary:"Object containing array",responses:{200:{description:"Object as root",content:{"application/json":{schema:{type:"object",properties:{"my-array":{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}}}},"/array-of-premitives":{get:{tags:["Array and object nesting"],summary:"Array of primitive types",responses:{200:{description:"Object as root",content:{"application/json":{schema:{type:"array",items:{type:"string"}}}}}}}}},tags:{}},se={class:"content-container"},ve=Q({__name:"array-and-object-nesting",setup(ce){const f=X(),I=Y(),{$openapidoc:b,$openapidocBus:h,$openapidocRef:_}=ne(),g=S(""),L=S(0),j=S(ae.path.toString()),i=S(s??{}),v=a(()=>"array-and-object-nesting"),o=a(()=>f.params.type.toString()),C=a(()=>(f.params.mathod??"default").toString()),O=a(()=>o.value==="info"),w=a(()=>o.value==="auth"),x=a(()=>o.value==="components"),m=a(()=>b.currentLocale());_.setComponents(s.components),_.setDefinitions(s.definitions),_.setDocPath(j.value),_.setFile(v.value);const c=a(()=>{const r={...s.paths};if(!r)return null;for(const n in r){let t=n.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===C.value)return g.value=n.toString(),r[n]??null}return null}),l=a(()=>{const r={...s.webhooks};if(!r)return null;for(const n in r){let t=n.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===C.value)return g.value=n.toString(),r[n][o.value]??null}return null}),p=a(()=>c.value?c.value[o.value]??null:null),R=a(()=>c.value?c.value.parameters??null:null),N=a(()=>{const r=b.currentLocale()??"";return O.value?"[array-and-object-nesting] - Info Docs":w.value?"[array-and-object-nesting] - Authorization":x.value?"[array-and-object-nesting] - Components Docs":p.value?"[array-and-object-nesting] - "+(p.value["x-summary-"+r.value]||p.value.summary||""):""}),U=a(()=>{const r=b.currentLocale()??"";return O.value?"[array-and-object-nesting] - Info Docs":w.value?"[array-and-object-nesting] - Authorization":x.value?"[array-and-object-nesting] - Components Docs":p.value&&(p.value["x-description-"+r.value]||p.value.description)||""});oe({title:N.value,meta:[{name:"description",content:U.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const D=a(()=>{if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[o.value]&&c.value[o.value].servers&&c.value[o.value].servers[0])return c.value[o.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[o.value]&&l.value[o.value].servers&&l.value[o.value].servers[0])return l.value[o.value].servers[0].url??null}let r=L.value;if(r>0&&s.servers&&!s.servers[r]&&(r=0),!s.servers||!s.servers[r])return"";if(s.servers[r].variables){const n=Object.values(s.servers[r].variables)??[];if(n&&n.length)return n[0].default}return s.servers[r].url??""});function P(r){L.value=r}function W(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",u=>{const A=t.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+A;b.copyToClipboard(k,u,!1),I.push({path:f.path,hash:"#"+A}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(f.hash)return;const r=document.querySelector(".oapi-content");r&&(r.scrollTop=0)}function $(){const r=JSON.stringify(s,null,4),n=new Blob([r],{type:"application/json"}),t=URL.createObjectURL(n),u=document.createElement("a");u.href=t,u.download=v.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(t)}return Z(()=>{h.$on("downloadJsonDoc",$),h.$on("changeServer",P),E(),W()}),ee(()=>{h.$off("downloadJsonDoc",$),h.$off("changeServer",P)}),(r,n)=>{const t=z,u=F,A=V,k=H,J=G,T=M,q=K;return y(),te("div",se,[e(O)&&e(i).info?(y(),d(t,{key:0,info:e(i).info,servers:e(i).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(w)&&e(i).components?(y(),d(u,{key:1,components:e(i).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(x)&&e(i).components?(y(),d(A,{key:2,components:e(i).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(p)?(y(),d(k,{key:3,route:e(p),"current-locale":e(m),method:e(o),components:e(i).components,url:e(g),path_doc:e(j),file:e(v),server:e(D),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(y(),d(k,{key:4,route:e(l),"current-locale":e(m),method:e(o),components:e(i).components,url:e(g),path_doc:e(j),file:e(v),server:e(D),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(y(),d(J,{key:5})),B(q,null,{default:re(()=>[B(T,{"current-locale":e(m),doc:e(i),path:e(j),file:e(v)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ve as default};
