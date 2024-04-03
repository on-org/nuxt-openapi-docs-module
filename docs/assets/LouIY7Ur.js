import{_ as N,a as W,b as V,c as G,d as H,e as K}from"./CBkLy2SA.js";import{_ as M}from"./B3LdbQa4.js";import{f as Y,h as J,j as Q,r as w,k as s,g as X,l as Z,c as ee,u as e,m as v,b as R,w as te,n as oe,o as d}from"./BahJtFiW.js";import{u as ne}from"./Di5kSJuz.js";import{d as re}from"./DEMwr-Ke.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const l={openapi:"3.0.0",info:{title:"Petstore API",description:`<p>Example to show how to use <code>x-client-id</code>, <code>x-client-secret</code> and <code>x-default-scopes</code> vendor extensions to pre fill them in the UI.</p>
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
`,version:"1.0"},security:[{exampleOauth2Flow:[]}],paths:{"/dogs":{get:{summary:"Return an array of the petstore&#x27;s dogs.",responses:{200:{description:"A successful request returns an array of dogs.",content:{"application/json":{schema:{type:"object",properties:{dogs:{type:"array",example:"[Rex, Lassie, Beethoven]"}}}}}},401:"#/components/responses/Unauthorized",500:"#/components/responses/InternalServerError"},tags:["other"]}}},components:{securitySchemes:{exampleOauth2Flow:{type:"oauth2",description:"You authorize requests, by providing client credentials.","x-client-id":"my-client-id","x-client-secret":"my-client-secret","x-default-scopes":["dog-lover"],"x-receive-token-in":"request-body",flows:{authorizationCode:{authorizationUrl:"/authorize",tokenUrl:"/access_token",scopes:{"dog-lover":"always required",owner:"optional"}},clientCredentials:{tokenUrl:"/token",scopes:{"dog-lover":"always required",owner:"optional"}}}}}},tags:{}},se={class:"content-container"},he=Y({__name:"oauth-vendor-extension",setup(ae){const h=J(),D=Q(),{$openapidoc:m,$openapidocBus:C,$openapidocRef:f}=oe(),_=w(""),I=w(0),y=w((re.path??"").toString()),c=w(l??{}),x=s(()=>"oauth-vendor-extension"),r=s(()=>h.params.type.toString()),P=s(()=>(h.params.mathod??"default").toString()),k=s(()=>r.value==="info"),S=s(()=>r.value==="auth"),A=s(()=>r.value==="components"),p=s(()=>m.currentLocale());f.setComponents(l.components),f.setDefinitions(l.definitions),f.setDocPath(y.value),f.setFile(x.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===P.value)return _.value=n.toString(),t[n]??null}return null}),u=s(()=>{const t={...l.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===P.value)return _.value=n.toString(),t[n][r.value]??null}return null}),i=s(()=>a.value?a.value[r.value]??null:null),U=s(()=>a.value?a.value.parameters??null:null),B=s(()=>{const t=m.currentLocale()??"";return k.value?"[oauth-vendor-extension] - Info Docs":S.value?"[oauth-vendor-extension] - Authorization":A.value?"[oauth-vendor-extension] - Components Docs":i.value?"[oauth-vendor-extension] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),E=s(()=>{const t=m.currentLocale()??"";return k.value?"[oauth-vendor-extension] - Info Docs":S.value?"[oauth-vendor-extension] - Authorization":A.value?"[oauth-vendor-extension] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ne({title:B.value,meta:[{name:"description",content:E.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const z=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=I.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const n=Object.values(l.servers[t].variables)??[];if(n&&n.length)return n[0].default}return l.servers[t].url??""});function O(t){I.value=t}function L(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",q=>{const g=o.getAttribute("id"),b=window.location.origin+window.location.pathname+"#"+g;m.copyToClipboard(b,q,!1),D.push({path:h.path,hash:"#"+g}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function T(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return X(()=>{C.$on("changeServer",O),T(),L()}),Z(()=>{C.$off("changeServer",O)}),(t,n)=>{const o=N,q=W,g=V,b=G,$=K,j=H,F=M;return d(),ee("div",se,[e(k)&&e(c).info?(d(),v(o,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(S)&&e(c).components?(d(),v(q,{key:1,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(A)&&e(c).components?(d(),v(g,{key:2,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(d(),v(b,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(c).components,url:e(_),path_doc:e(y),file:e(x),server:e(z),"sub-params":e(U)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(d(),v(b,{key:4,route:e(u),"current-locale":e(p),method:e(r),components:e(c).components,url:e(_),path_doc:e(y),file:e(x),server:e(z),"sub-params":e(U)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),v($,{key:5})),R(F,null,{default:te(()=>[R(j,{"current-locale":e(p),doc:e(c),path:e(y),file:e(x)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};