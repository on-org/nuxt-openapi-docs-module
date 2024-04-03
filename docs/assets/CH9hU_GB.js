import{_ as U,a as z,b as F,c as Q,d as H,e as M}from"./CBkLy2SA.js";import{_ as G}from"./B3LdbQa4.js";import{f as J,h as K,j as X,r as y,k as s,g as Y,l as Z,c as ee,u as e,m,b as j,w as te,n as ne,o as v}from"./BahJtFiW.js";import{u as re}from"./Di5kSJuz.js";import{d as oe}from"./FE-UY7oi.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const l={openapi:"3.0.2",info:{version:"1.0",title:"API Server templating using variables",description:`<p>Various ways to define API servers in the spec including variables</p>
<pre><code class="language-yaml">  servers:
    - url: &#39;http://example.com/api&#39;
      description: Test server (just for example)
    - url: &#39;/api&#39;
    - url: &#39;{protocol}://dev.com/api/{version}&#39;
      variables:
        protocol:
          description: Protocol (with enum)
          default: https
          enum:
            - http
            - https
        version:
          description: API Version (without enum)
          default: v1
    - url: &#39;{protocol}://{environment}.example.com/{version}&#39;
      variables:
        environment:
          default: api    # Production server
          description: &gt;
            Server choices:
            * \`api\` Production (this is the default).
            * \`api.qa\` QA server.
            * \`api.dev\` Development server.
          enum:
            - api      # Production server
            - api.dev  # Development server
            - api.qa   # Testing server
        protocol:
          default: https
          enum:
            - http
            - https
        version:
          default: v2
          enum:
            - v1
            - v2
</code></pre>
`},servers:[{url:"http://example.com/api",description:"Test server (just for example)"},{url:"{protocol}://dev.com/api/{version}",variables:{protocol:{description:"Protocol (with enum)",default:"https",enum:["http","https"]},version:{description:"API Version (without enum)",default:"v1"}}},{url:"{protocol}://{environment}.example.com/{version}",variables:{environment:{default:"api",description:"Server choices:\n * `api` Production (this is the default).\n * `api.qa` QA server.\n * `api.dev` Development server.\n",enum:["api","api.dev","api.qa"]},protocol:{default:"https",enum:["http","https"]},version:{default:"v2",enum:["v1","v2"]}}}],paths:{"/api-server-template":{get:{summary:"Dynamic API Server.",description:"Uses API server template string and variables which can be used to generatea a desired API server url -  The selected and computed API Server URL should be shown against `API SERVER`.",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{name:{description:"Person Name",type:"string"},age:{description:"Person Age",type:"integer"}}}}}}},tags:["other"]}}},tags:{}},se={class:"content-container"},de=J({__name:"server",setup(ae){const d=K(),L=X(),{$openapidoc:h,$openapidocBus:I,$openapidocRef:f}=ne(),_=y(""),C=y(0),g=y((oe.path??"").toString()),u=y(l??{}),b=s(()=>"server"),o=s(()=>d.params.type.toString()),D=s(()=>(d.params.mathod??"default").toString()),S=s(()=>o.value==="info"),x=s(()=>o.value==="auth"),k=s(()=>o.value==="components"),p=s(()=>h.currentLocale());f.setComponents(l.components),f.setDefinitions(l.definitions),f.setDocPath(g.value),f.setFile(b.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const r in t){let n=r.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===D.value)return _.value=r.toString(),t[r]??null}return null}),i=s(()=>{const t={...l.webhooks};if(!t)return null;for(const r in t){let n=r.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===D.value)return _.value=r.toString(),t[r][o.value]??null}return null}),c=s(()=>a.value?a.value[o.value]??null:null),R=s(()=>a.value?a.value.parameters??null:null),V=s(()=>{const t=h.currentLocale()??"";return S.value?"[server] - Info Docs":x.value?"[server] - Authorization":k.value?"[server] - Components Docs":c.value?"[server] - "+(c.value["x-summary-"+t.value]||c.value.summary||""):""}),$=s(()=>{const t=h.currentLocale()??"";return S.value?"[server] - Info Docs":x.value?"[server] - Authorization":k.value?"[server] - Components Docs":c.value&&(c.value["x-description-"+t.value]||c.value.description)||""});re({title:V.value,meta:[{name:"description",content:$.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const T=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[o.value]&&a.value[o.value].servers&&a.value[o.value].servers[0])return a.value[o.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[o.value]&&i.value[o.value].servers&&i.value[o.value].servers[0])return i.value[o.value].servers[0].url??null}let t=C.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const r=Object.values(l.servers[t].variables)??[];if(r&&r.length)return r[0].default}return l.servers[t].url??""});function q(t){C.value=t}function B(){var r;(((r=document.querySelector(".content-container"))==null?void 0:r.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",w=>{const A=n.getAttribute("id"),P=window.location.origin+window.location.pathname+"#"+A;h.copyToClipboard(P,w,!1),L.push({path:d.path,hash:"#"+A}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(d.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{I.$on("changeServer",q),E(),B()}),Z(()=>{I.$off("changeServer",q)}),(t,r)=>{const n=U,w=z,A=F,P=Q,N=M,O=H,W=G;return v(),ee("div",se,[e(S)&&e(u).info?(v(),m(n,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(x)&&e(u).components?(v(),m(w,{key:1,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(k)&&e(u).components?(v(),m(A,{key:2,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(v(),m(P,{key:3,route:e(c),"current-locale":e(p),method:e(o),components:e(u).components,url:e(_),path_doc:e(g),file:e(b),server:e(T),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(v(),m(P,{key:4,route:e(i),"current-locale":e(p),method:e(o),components:e(u).components,url:e(_),path_doc:e(g),file:e(b),server:e(T),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),m(N,{key:5})),j(W,null,{default:te(()=>[j(O,{"current-locale":e(p),doc:e(u),path:e(g),file:e(b)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
