import{_ as G,a as z,b as F,c as V,d as H,e as M}from"./CBkLy2SA.js";import{_ as J}from"./B3LdbQa4.js";import{f as K,h as Q,j as X,r as w,k as s,g as Y,l as Z,c as ee,u as e,m as v,b as T,w as te,n as ne,o as m}from"./BahJtFiW.js";import{u as oe}from"./Di5kSJuz.js";import{d as re}from"./BPmTHwBg.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const i={openapi:"3.1.0",info:{title:"Sample Pet Store App",summary:"A pet store manager.",description:"This is a sample server for a pet store.",termsOfService:"https://example.com/terms/",contact:{name:"API Support",url:"https://www.example.com/support",email:"support@example.com"},license:{name:"Apache 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.1"},webhooks:{newPet:{post:{requestBody:{description:"Information about a new pet in the system",content:{"application/json":{schema:"#/components/schemas/Pet"}}},responses:{200:{description:"Return a 200 status to indicate that the data was received successfully"}},tags:["webhooks"]}}},paths:{"/person":{post:{summary:"Demonstrates data-types and constraints",description:"Request-Parameters and Response-Schema contains various data types and constrains. Check out how is it desplayed below",parameters:[{name:"height",in:"query",description:"height (in inches)",required:!0,example:70,schema:{type:"integer",format:"int32",minimum:12,maximum:120}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:"#/components/schemas/person"}}}}},tags:["other"]}}},tags:{person:{name:"Person",description:"Person Datatype"}},components:{schemas:{location:{description:"longitude/latitude or city name",type:["object","string"],properties:{longitude:{type:["number","string"]},latitude:{type:["number","string"]}}},person:{type:"object",required:["id","photoUrls"],properties:{id:{description:"Person ID",type:["string","integer"],minLength:4,example:"Guru"},name:{description:"Name of the person",type:["string","null"],minLength:4,example:"Guru"},age:{description:"Age of Person",type:["integer","number"]},photoUrls:{description:"One or more URL&#x27;s",type:["string","array"],maxItems:20,minimum:10,items:{type:"string",format:"url"}},hobby:{description:"comma separated list of hobbies or an array of object",type:["string","array"],items:{type:"object",properties:{hobbyRank:{type:["integer","number"]},hobbyName:{type:"string"}}}},location:{description:"Location",type:["array","integer"],minimum:10,minItems:1,items:"#/components/schemas/location"},tag:{description:"A tag-object or comma separated text",type:["object","string"],properties:{tagId:{description:"Tag ID",type:"string"},tagDefinition:{description:"Tag properties or plain text",minLength:1,type:["object","string"],properties:{tagText:{description:"Text inside the tag",minLength:1,type:"string"},tagColor:{description:"Color of Tag in RGB or Color Name",type:["string","object"],properties:{red:{type:"integer"},green:{type:"integer"},blue:{type:"integer"}}}}}}}}}}}},se={class:"content-container"},de=K({__name:"open-api-3-1-test",setup(ae){const d=Q(),q=X(),{$openapidoc:h,$openapidocBus:C,$openapidocRef:f}=ne(),_=w(""),I=w(0),g=w((re.path??"").toString()),c=w(i??{}),y=s(()=>"open-api-3-1-test"),r=s(()=>d.params.type.toString()),j=s(()=>(d.params.mathod??"default").toString()),S=s(()=>r.value==="info"),k=s(()=>r.value==="auth"),A=s(()=>r.value==="components"),p=s(()=>h.currentLocale());f.setComponents(i.components),f.setDefinitions(i.definitions),f.setDocPath(g.value),f.setFile(y.value);const a=s(()=>{const t={...i.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===j.value)return _.value=o.toString(),t[o]??null}return null}),l=s(()=>{const t={...i.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===j.value)return _.value=o.toString(),t[o][r.value]??null}return null}),u=s(()=>a.value?a.value[r.value]??null:null),L=s(()=>a.value?a.value.parameters??null:null),N=s(()=>{const t=h.currentLocale()??"";return S.value?"[open-api-3-1-test] - Info Docs":k.value?"[open-api-3-1-test] - Authorization":A.value?"[open-api-3-1-test] - Components Docs":u.value?"[open-api-3-1-test] - "+(u.value["x-summary-"+t.value]||u.value.summary||""):""}),B=s(()=>{const t=h.currentLocale()??"";return S.value?"[open-api-3-1-test] - Info Docs":k.value?"[open-api-3-1-test] - Authorization":A.value?"[open-api-3-1-test] - Components Docs":u.value&&(u.value["x-description-"+t.value]||u.value.description)||""});oe({title:N.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const D=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let t=I.value;if(t>0&&i.servers&&!i.servers[t]&&(t=0),!i.servers||!i.servers[t])return"";if(i.servers[t].variables){const o=Object.values(i.servers[t].variables)??[];if(o&&o.length)return o[0].default}return i.servers[t].url??""});function R(t){I.value=t}function O(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",P=>{const b=n.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+b;h.copyToClipboard(x,P,!1),q.push({path:d.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function $(){if(d.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{C.$on("changeServer",R),$(),O()}),Z(()=>{C.$off("changeServer",R)}),(t,o)=>{const n=G,P=z,b=F,x=V,E=M,W=H,U=J;return m(),ee("div",se,[e(S)&&e(c).info?(m(),v(n,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(k)&&e(c).components?(m(),v(P,{key:1,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(A)&&e(c).components?(m(),v(b,{key:2,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(u)?(m(),v(x,{key:3,route:e(u),"current-locale":e(p),method:e(r),components:e(c).components,url:e(_),path_doc:e(g),file:e(y),server:e(D),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(m(),v(x,{key:4,route:e(l),"current-locale":e(p),method:e(r),components:e(c).components,url:e(_),path_doc:e(g),file:e(y),server:e(D),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),v(E,{key:5})),T(U,null,{default:te(()=>[T(W,{"current-locale":e(p),doc:e(c),path:e(g),file:e(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
