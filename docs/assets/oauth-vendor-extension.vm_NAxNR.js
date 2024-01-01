import{_ as W,a as J,b as V,c as G,d as H,e as K}from"./SearchBlock.uRgVtHA9.js";import{_ as M}from"./client-only.SJwGiWH3.js";import{f as Y,h as Q,j as X,r as S,k as s,g as Z,l as ee,c as oe,u as e,m as h,b as j,w as te,n as ne,o as v}from"./entry.ZYFPaIZe.js";import{u as re}from"./vue.f36acd1f.fgq4zm8I.js";import{d as se}from"./docs.oauth-vendor-extension.config.5A5mzW1_.js";import"./nuxt-link.Gwkl8Cc8.js";import"./OpenApiDropdown.xsfmtu7V.js";const l={openapi:"3.0.0",info:{title:"Petstore API",description:`<p>Example to show how to use <code>x-client-id</code>, <code>x-client-secret</code> and <code>x-default-scopes</code> vendor extensions to pre fill them in the UI.</p>
<p>Below is the Open API spec snippet that shows its usage,
and if you check the authentication section you will find that client-id and client-secret are pre-filled, the user just needs to click on <code>GET TOKEN</code>.
Also notice that the scope <code>dog-lover</code> is already checked</p>
<pre><code class="language-yaml">  openapi: 3.0.0
  ...
  ...
  components:
    securitySchemes:
      exampleOauth2Flow:
        type: oauth2
        x-client-id: my-client-id             # &lt;--- when provided it will be pre filled in RapiDoc UI
        x-client-secret: my-client-secret     # &lt;--- when provided it will be pre filled in RapiDoc UI
        x-default-scopes: [dog-lover]         # &lt;--- when provided scopes will be pre checked in RapiDoc UI
        x-receive-token-in: request-body      # &lt;--- can be &#39;header&#39; or &#39;request-body&#39; when provided this will be pre selected
        flows:
          authorizationCode:
            authorizationUrl: /authorize
            tokenUrl: /access_token
            scopes:
              dog-lover: &quot;always required&quot;
              owner: &quot;optional&quot;
</code></pre>
`,version:"1.0"},security:[{exampleOauth2Flow:[]}],paths:{"/dogs":{get:{summary:"Return an array of the petstore&#x27;s dogs.",responses:{200:{description:"A successful request returns an array of dogs.",content:{"application/json":{schema:{type:"object",properties:{dogs:{type:"array",example:"[Rex, Lassie, Beethoven]"}}}}}},401:"#/components/responses/Unauthorized",500:"#/components/responses/InternalServerError"},tags:["other"]}}},components:{securitySchemes:{exampleOauth2Flow:{type:"oauth2",description:"You authorize requests, by providing client credentials.","x-client-id":"my-client-id","x-client-secret":"my-client-secret","x-default-scopes":["dog-lover"],"x-receive-token-in":"request-body",flows:{authorizationCode:{authorizationUrl:"/authorize",tokenUrl:"/access_token",scopes:{"dog-lover":"always required",owner:"optional"}},clientCredentials:{tokenUrl:"/token",scopes:{"dog-lover":"always required",owner:"optional"}}}}}},tags:{}},le={class:"content-container"},me=Y({__name:"oauth-vendor-extension",setup(ae){const f=Q(),z=X(),{$openapidoc:_,$openapidocBus:y,$openapidocRef:b}=ne(),x=S(""),U=S(0),g=S(se.path.toString()),c=S(l??{}),m=s(()=>"oauth-vendor-extension"),r=s(()=>f.params.type.toString()),R=s(()=>(f.params.mathod??"default").toString()),A=s(()=>r.value==="info"),q=s(()=>r.value==="auth"),C=s(()=>r.value==="components"),d=s(()=>_.currentLocale());b.setComponents(l.components),b.setDefinitions(l.definitions),b.setDocPath(g.value),b.setFile(m.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===R.value)return x.value=n.toString(),t[n]??null}return null}),u=s(()=>{const t={...l.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===R.value)return x.value=n.toString(),t[n][r.value]??null}return null}),p=s(()=>a.value?a.value[r.value]??null:null),I=s(()=>a.value?a.value.parameters??null:null),L=s(()=>{const t=_.currentLocale()??"";return A.value?"[oauth-vendor-extension] - Info Docs":q.value?"[oauth-vendor-extension] - Authorization":C.value?"[oauth-vendor-extension] - Components Docs":p.value?"[oauth-vendor-extension] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),B=s(()=>{const t=_.currentLocale()??"";return A.value?"[oauth-vendor-extension] - Info Docs":q.value?"[oauth-vendor-extension] - Authorization":C.value?"[oauth-vendor-extension] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});re({title:L.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=U.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const n=Object.values(l.servers[t].variables)??[];if(n&&n.length)return n[0].default}return l.servers[t].url??""});function D(t){U.value=t}function E(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",i=>{const w=o.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(k,i,!1),z.push({path:f.path,hash:"#"+w}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function $(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function P(){const t=JSON.stringify(l,null,4),n=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(n),i=document.createElement("a");i.href=o,i.download=m.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)}return Z(()=>{y.$on("downloadJsonDoc",P),y.$on("changeServer",D),$(),E()}),ee(()=>{y.$off("downloadJsonDoc",P),y.$off("changeServer",D)}),(t,n)=>{const o=W,i=J,w=V,k=G,N=K,T=H,F=M;return v(),oe("div",le,[e(A)&&e(c).info?(v(),h(o,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(q)&&e(c).components?(v(),h(i,{key:1,components:e(c).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(C)&&e(c).components?(v(),h(w,{key:2,components:e(c).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(p)?(v(),h(k,{key:3,route:e(p),"current-locale":e(d),method:e(r),components:e(c).components,url:e(x),path_doc:e(g),file:e(m),server:e(O),"sub-params":e(I)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(v(),h(k,{key:4,route:e(u),"current-locale":e(d),method:e(r),components:e(c).components,url:e(x),path_doc:e(g),file:e(m),server:e(O),"sub-params":e(I)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),h(N,{key:5})),j(F,null,{default:te(()=>[j(T,{"current-locale":e(d),doc:e(c),path:e(g),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{me as default};
