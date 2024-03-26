import{_ as J,a as F,b as V,c as G,d as H,e as M}from"./CS6cvqKt.js";import{_ as K}from"./pWAC-K-K.js";import{f as Q,h as X,j as Y,r as L,k as s,g as Z,l as ee,c as te,u as e,m as v,b as I,w as oe,n as ne,o as f}from"./BYj_I_4_.js";import{u as re}from"./BDA3X4wF.js";import{d as se}from"./CSJrpSfr.js";import"./y4eX7S1R.js";import"./DpDRfkx3.js";const a={components:{schemas:{Links:{additionalProperties:!1,properties:{first:"#/components/schemas/LinkProperty",last:"#/components/schemas/LinkProperty",next:"#/components/schemas/LinkProperty",prev:"#/components/schemas/LinkProperty",related:"#/components/schemas/LinkProperty",self:"#/components/schemas/LinkProperty"},type:"object"},LinkProperty:{oneOf:[{description:"A string containing the link’s URL.",example:"https://example.com/api/resource",type:"string"},{additionalProperties:!1,example:{href:"https://example.com/api/resource"},properties:{href:{description:"A string containing the link’s URL.",example:"https://example.com/api/resource",type:"string"},meta:{type:"string"}},required:["href"],type:"object"}]}}},info:{title:"Example API",version:"v3"},openapi:"3.0.3",paths:{"/foo/{bar_id}/baz":{get:{description:"Get a list of bazzes your foo can access based on its bar id.",operationId:"getFooBaz",parameters:[{description:"The bar id of your foo.",in:"path",name:"bar_id",required:!0,schema:{format:"uuid",type:"string"}}],responses:{200:{content:{"application/vnd.api+json":{schema:{additionalProperties:!1,properties:{data:{items:{type:"string"},type:"array"},links:"#/components/schemas/Links"},required:["data","links"],type:"object"}}},description:"A list of bazzes accessible by the foo."}},tags:["other"]}}},tags:{}},ae={class:"content-container"},de=Q({__name:"oneof-with-refs",setup(le){const h=X(),$=Y(),{$openapidoc:_,$openapidocBus:b,$openapidocRef:y}=ne(),g=L(""),C=L(0),k=L(se.path.toString()),c=L(a??{}),d=s(()=>"oneof-with-refs"),r=s(()=>h.params.type.toString()),j=s(()=>(h.params.mathod??"default").toString()),P=s(()=>r.value==="info"),A=s(()=>r.value==="auth"),S=s(()=>r.value==="components"),m=s(()=>_.currentLocale());y.setComponents(a.components),y.setDefinitions(a.definitions),y.setDocPath(k.value),y.setFile(d.value);const l=s(()=>{const o={...a.paths};if(!o)return null;for(const n in o){let t=n.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===j.value)return g.value=n.toString(),o[n]??null}return null}),i=s(()=>{const o={...a.webhooks};if(!o)return null;for(const n in o){let t=n.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===j.value)return g.value=n.toString(),o[n][r.value]??null}return null}),p=s(()=>l.value?l.value[r.value]??null:null),R=s(()=>l.value?l.value.parameters??null:null),B=s(()=>{const o=_.currentLocale()??"";return P.value?"[oneof-with-refs] - Info Docs":A.value?"[oneof-with-refs] - Authorization":S.value?"[oneof-with-refs] - Components Docs":p.value?"[oneof-with-refs] - "+(p.value["x-summary-"+o.value]||p.value.summary||""):""}),U=s(()=>{const o=_.currentLocale()??"";return P.value?"[oneof-with-refs] - Info Docs":A.value?"[oneof-with-refs] - Authorization":S.value?"[oneof-with-refs] - Components Docs":p.value&&(p.value["x-description-"+o.value]||p.value.description)||""});re({title:B.value,meta:[{name:"description",content:U.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}let o=C.value;if(o>0&&a.servers&&!a.servers[o]&&(o=0),!a.servers||!a.servers[o])return"";if(a.servers[o].variables){const n=Object.values(a.servers[o].variables)??[];if(n&&n.length)return n[0].default}return a.servers[o].url??""});function z(o){C.value=o}function q(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",u=>{const w=t.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(x,u,!1),$.push({path:h.path,hash:"#"+w}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(h.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function D(){const o=JSON.stringify(a,null,4),n=new Blob([o],{type:"application/json"}),t=URL.createObjectURL(n),u=document.createElement("a");u.href=t,u.download=d.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(t)}return Z(()=>{b.$on("downloadJsonDoc",D),b.$on("changeServer",z),E(),q()}),ee(()=>{b.$off("downloadJsonDoc",D),b.$off("changeServer",z)}),(o,n)=>{const t=J,u=F,w=V,x=G,N=M,T=H,W=K;return f(),te("div",ae,[e(P)&&e(c).info?(f(),v(t,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(A)&&e(c).components?(f(),v(u,{key:1,components:e(c).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(S)&&e(c).components?(f(),v(w,{key:2,components:e(c).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(p)?(f(),v(x,{key:3,route:e(p),"current-locale":e(m),method:e(r),components:e(c).components,url:e(g),path_doc:e(k),file:e(d),server:e(O),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(f(),v(x,{key:4,route:e(i),"current-locale":e(m),method:e(r),components:e(c).components,url:e(g),path_doc:e(k),file:e(d),server:e(O),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(f(),v(N,{key:5})),I(W,null,{default:oe(()=>[I(T,{"current-locale":e(m),doc:e(c),path:e(k),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
