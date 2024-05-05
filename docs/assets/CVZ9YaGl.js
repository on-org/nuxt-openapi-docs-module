import{_ as F,a as z,b as G,c as H,d as M,e as V}from"./-UBvbCGK.js";import{_ as J}from"./C02Rc8ii.js";import{g as K,E as Q,H as X,r as q,f as s,h as Y,l as Z,o as p,c as ee,u as e,I as d,b as O,w as te,q as ne}from"./Dj-RiYBC.js";import{u as re}from"./Chp6ADhi.js";import{d as ae}from"./7ez_OyLZ.js";import"./DvSdkWXY.js";import"./D4fHaaMz.js";const i={openapi:"3.0.0",info:{description:"Contains all data types",version:"1.0.0",title:"Testing different data-types"},paths:{"/person":{post:{summary:"Demonstrates data-types and constraints",description:"Request-Parameters and Response-Schema contains various data types and constrains. Check out how is it desplayed below",parameters:[{in:"query",name:"search",examples:{example1:{summary:"s1",value:"v1"},example2:{summary:"s2",value:"v2"}},"x-fill-example":"no",schema:{type:"string"},description:"term to search (use &quot;*&quot; to show all)"},{in:"query",name:"id",example:"my-id",schema:{type:"string"}},{name:"height",in:"query",description:"height (in inches)",required:!0,example:70,schema:{type:"integer",format:"int32",minimum:12,maximum:120}},{name:"full-name",in:"query",description:"Name of a person",required:!0,examples:{empty:{value:null,summary:"No Name"},"male-name":{value:"James",summary:"Male name"},"female-name":{value:"Ria",summary:"Female Name"},"gender-nutral-name":{value:"Charlie",summary:"Gender Neutral Name"}},schema:{type:"string",minimum:3}},{name:"social-connection",in:"query",description:"facebook, linkedin, github, instagram, twitter etc",schema:{type:"string",format:"url"}},{name:"email",in:"query",required:!0,example:"iron_man@example.com",schema:{type:"string",format:"email"}},{name:"email-password",in:"query",required:!0,schema:{type:"string",format:"password"}},{name:"date-of-birth",in:"query",required:!0,example:"01-09-2021",schema:{type:"string",format:"date"}},{name:"interests",in:"query",required:!0,"x-fill-example":"yes",examples:["computers","movies"],schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["computers","hiking","swiming","movies","music","dancing","reading","painting"],default:"hiking"}}},{name:"tags",in:"query",description:"Add tags to the person (not-exploded)",style:"form",explode:!1,examples:["robot","not-real"],schema:{type:"array",items:{type:"string"}}},{name:"maritalStatus",in:"query",description:"marital status",example:"unmarried",schema:{type:"string",enum:["married","unmarried","widowed"]}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:"#/components/schemas/Person"}}}}},tags:["other"]}}},tags:{person:{name:"Person",description:"Person Datatype"}},components:{schemas:{Person:{type:"object",required:["name","photoUrls"],example:{name:"account-name",type:"StandardBankAccount",url:"https://api.freeagent.com/v2/bank_accounts/4093",current_balance:28742},properties:{id:{description:"Pet ID",allOf:["#/components/schemas/Id"]},category:{description:"Categories this person belongs to",allOf:["#/components/schemas/Category"]},DependentIds:{type:"array",description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"string",minLength:4,example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{description:"Tags attached to the pet",type:"array",minItems:1,items:"#/components/schemas/Tag"},maritalStatus:{type:"string",description:"Pet status in the store",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}}},Category:{type:"object",properties:{id:{description:"Category ID",allOf:["#/components/schemas/Id"]},name:{description:"Category name",type:"string",minLength:1}}},Id:{type:"integer",format:"int64",readOnly:!0},Tag:{type:"object",properties:{id:{description:"Tag ID",allOf:["#/components/schemas/Id"]},name:{description:"Tag name",type:"string",minLength:1}}}}}},se={class:"content-container"},he=K({__name:"data-types-simple",setup(oe){const h=Q(),L=X(),{$openapidoc:v,$openapidocBus:C,$openapidocRef:f}=ne(),y=q(""),A=q(0),g=q((ae.path??"").toString()),l=q(i??{}),_=s(()=>"data-types-simple"),a=s(()=>h.params.type.toString()),P=s(()=>(h.params.mathod??"default").toString()),k=s(()=>a.value==="info"),w=s(()=>a.value==="auth"),I=s(()=>a.value==="components"),m=s(()=>v.currentLocale());f.setComponents(i.components),f.setDefinitions(i.definitions),f.setDocPath(g.value),f.setFile(_.value);const o=s(()=>{const t={...i.paths};if(!t)return null;for(const r in t){let n=r.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return y.value=r.toString(),t[r]??null}return null}),u=s(()=>{const t={...i.webhooks};if(!t)return null;for(const r in t){let n=r.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return y.value=r.toString(),t[r][a.value]??null}return null}),c=s(()=>o.value?o.value[a.value]??null:null),D=s(()=>o.value?o.value.parameters??null:null),R=s(()=>{const t=v.currentLocale()??"";return k.value?"[data-types-simple] - Info Docs":w.value?"[data-types-simple] - Authorization":I.value?"[data-types-simple] - Components Docs":c.value?"[data-types-simple] - "+(c.value["x-summary-"+t.value]||c.value.summary||""):""}),$=s(()=>{const t=v.currentLocale()??"";return k.value?"[data-types-simple] - Info Docs":w.value?"[data-types-simple] - Authorization":I.value?"[data-types-simple] - Components Docs":c.value&&(c.value["x-description-"+t.value]||c.value.description)||""});re({title:R.value,meta:[{name:"description",content:$.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const N=s(()=>{if(o.value){if(o.value.servers&&o.value.servers[0])return o.value.servers[0].url??null;if(o.value[a.value]&&o.value[a.value].servers&&o.value[a.value].servers[0])return o.value[a.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[a.value]&&u.value[a.value].servers&&u.value[a.value].servers[0])return u.value[a.value].servers[0].url??null}let t=A.value;if(t>0&&i.servers&&!i.servers[t]&&(t=0),!i.servers||!i.servers[t])return"";if(i.servers[t].variables){const r=Object.values(i.servers[t].variables)??[];if(r&&r.length)return r[0].default}return i.servers[t].url??""});function T(t){A.value=t}function B(){var r;(((r=document.querySelector(".content-container"))==null?void 0:r.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",S=>{const x=n.getAttribute("id"),b=window.location.origin+window.location.pathname+"#"+x;v.copyToClipboard(b,S,!1),L.push({path:h.path,hash:"#"+x}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function j(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{C.$on("changeServer",T),j(),B()}),Z(()=>{C.$off("changeServer",T)}),(t,r)=>{const n=F,S=z,x=G,b=H,W=M,E=V,U=J;return p(),ee("div",se,[e(k)&&e(l).info?(p(),d(n,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(w)&&e(l).components?(p(),d(S,{key:1,components:e(l).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(I)&&e(l).components?(p(),d(x,{key:2,components:e(l).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(c)?(p(),d(b,{key:3,route:e(c),"current-locale":e(m),method:e(a),components:e(l).components,url:e(y),path_doc:e(g),file:e(_),server:e(N),"sub-params":e(D)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(p(),d(b,{key:4,route:e(u),"current-locale":e(m),method:e(a),components:e(l).components,url:e(y),path_doc:e(g),file:e(_),server:e(N),"sub-params":e(D)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),d(W,{key:5})),O(U,null,{default:te(()=>[O(E,{"current-locale":e(m),doc:e(l),path:e(g),file:e(_)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};