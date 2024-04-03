import{_ as q,a as E,b as V,c as j,d as F,e as H}from"./CBkLy2SA.js";import{_ as J}from"./B3LdbQa4.js";import{f as K,h as Q,j as X,r as S,k as s,g as Y,l as Z,c as ee,u as e,m as v,b as W,w as te,n as oe,o as h}from"./BahJtFiW.js";import{u as ne}from"./Di5kSJuz.js";import{d as re}from"./Wbuv7F6q.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const l={openapi:"3.0.1",info:{title:"Office 365 - MS Graph API",description:"Works only on `http://localhost...`",version:"1.0"},servers:[{url:"https://graph.microsoft.com/V1.0"}],paths:{"/users":{get:{description:"Get all users",security:[{"ms-oauth":null}],tags:["other"]}}},components:{securitySchemes:{"ms-oauth":{type:"oauth2",description:`<h2>IMPORTANT !!!</h2>
<p>Works only when client (<code>this html</code>) is served from <code>http://localhost:8080/...</code> because the registered client has a redirect url pointing to <code>http://localhost:8080/examples/oauth-receiver.html</code></p>
<ol>
<li>Register an app at <a href="https://portal.azure.com/">https://portal.azure.com/</a> (this will give you an Application ID / Client ID)</li>
<li>Create some users in MS Active Directory (MS Graph)</li>
<li>Provide permissions to your APP to access MS Graph users</li>
</ol>
`,"x-client-id":"0801ecad-97a5-4bed-bd5e-0528afecc1d6",flows:{authorizationCode:{authorizationUrl:"https://login.microsoftonline.com/546ffd36-88d5-494c-b126-57cc823bb5ea/oauth2/v2.0/authorize",tokenUrl:"https://login.microsoftonline.com/546ffd36-88d5-494c-b126-57cc823bb5ea/oauth2/v2.0/token",scopes:{"https://graph.microsoft.com/User.Read.All":"Read logged users data"}}}}}},tags:{}},se={class:"content-container"},me=K({__name:"oauth-o365",setup(ae){const m=Q(),M=X(),{$openapidoc:f,$openapidocBus:w,$openapidocRef:d}=oe(),_=S(""),I=S(0),g=S((re.path??"").toString()),c=S(l??{}),b=s(()=>"oauth-o365"),r=s(()=>m.params.type.toString()),D=s(()=>(m.params.mathod??"default").toString()),A=s(()=>r.value==="info"),x=s(()=>r.value==="auth"),C=s(()=>r.value==="components"),p=s(()=>f.currentLocale());d.setComponents(l.components),d.setDefinitions(l.definitions),d.setDocPath(g.value),d.setFile(b.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===D.value)return _.value=n.toString(),t[n]??null}return null}),u=s(()=>{const t={...l.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===D.value)return _.value=n.toString(),t[n][r.value]??null}return null}),i=s(()=>a.value?a.value[r.value]??null:null),R=s(()=>a.value?a.value.parameters??null:null),T=s(()=>{const t=f.currentLocale()??"";return A.value?"[oauth-o365] - Info Docs":x.value?"[oauth-o365] - Authorization":C.value?"[oauth-o365] - Components Docs":i.value?"[oauth-o365] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),$=s(()=>{const t=f.currentLocale()??"";return A.value?"[oauth-o365] - Info Docs":x.value?"[oauth-o365] - Authorization":C.value?"[oauth-o365] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ne({title:T.value,meta:[{name:"description",content:$.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const z=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=I.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const n=Object.values(l.servers[t].variables)??[];if(n&&n.length)return n[0].default}return l.servers[t].url??""});function O(t){I.value=t}function B(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",P=>{const y=o.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+y;f.copyToClipboard(k,P,!1),M.push({path:m.path,hash:"#"+y}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function L(){if(m.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{w.$on("changeServer",O),L(),B()}),Z(()=>{w.$off("changeServer",O)}),(t,n)=>{const o=q,P=E,y=V,k=j,N=H,G=F,U=J;return h(),ee("div",se,[e(A)&&e(c).info?(h(),v(o,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(x)&&e(c).components?(h(),v(P,{key:1,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)&&e(c).components?(h(),v(y,{key:2,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(h(),v(k,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(c).components,url:e(_),path_doc:e(g),file:e(b),server:e(z),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(h(),v(k,{key:4,route:e(u),"current-locale":e(p),method:e(r),components:e(c).components,url:e(_),path_doc:e(g),file:e(b),server:e(z),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(h(),v(N,{key:5})),W(U,null,{default:te(()=>[W(G,{"current-locale":e(p),doc:e(c),path:e(g),file:e(b)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{me as default};
