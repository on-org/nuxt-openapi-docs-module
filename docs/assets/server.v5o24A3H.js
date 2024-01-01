import{_ as J,a as z,b as F,c as Q,d as H,e as M}from"./SearchBlock.39BIF1Me.js";import{_ as G}from"./client-only.qDKU5ACo.js";import{f as K,h as X,j as Y,r as w,k as s,g as Z,l as ee,c as te,u as e,m as d,b as T,w as ne,n as oe,o as m}from"./entry.F1ddeqcb.js";import{u as re}from"./vue.f36acd1f.8Vqce39Q.js";import{d as se}from"./docs.server.config.xXviUC-f.js";import"./nuxt-link.yTkd5Ou_.js";import"./OpenApiDropdown.9vX9r9au.js";const a={openapi:"3.0.2",info:{version:"1.0",title:"API Server templating using variables",description:`<p>Various ways to define API servers in the spec including variables</p>
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
`},servers:[{url:"http://example.com/api",description:"Test server (just for example)"},{url:"{protocol}://dev.com/api/{version}",variables:{protocol:{description:"Protocol (with enum)",default:"https",enum:["http","https"]},version:{description:"API Version (without enum)",default:"v1"}}},{url:"{protocol}://{environment}.example.com/{version}",variables:{environment:{default:"api",description:"Server choices:\n * `api` Production (this is the default).\n * `api.qa` QA server.\n * `api.dev` Development server.\n",enum:["api","api.dev","api.qa"]},protocol:{default:"https",enum:["http","https"]},version:{default:"v2",enum:["v1","v2"]}}}],paths:{"/api-server-template":{get:{summary:"Dynamic API Server.",description:"Uses API server template string and variables which can be used to generatea a desired API server url -  The selected and computed API Server URL should be shown against `API SERVER`.",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{name:{description:"Person Name",type:"string"},age:{description:"Person Age",type:"integer"}}}}}}},tags:["other"]}}},tags:{}},ae={class:"content-container"},he=K({__name:"server",setup(le){const f=X(),$=Y(),{$openapidoc:_,$openapidocBus:b,$openapidocRef:g}=oe(),y=w(""),C=w(0),A=w(se.path.toString()),u=w(a??{}),h=s(()=>"server"),r=s(()=>f.params.type.toString()),D=s(()=>(f.params.mathod??"default").toString()),k=s(()=>r.value==="info"),x=s(()=>r.value==="auth"),I=s(()=>r.value==="components"),v=s(()=>_.currentLocale());g.setComponents(a.components),g.setDefinitions(a.definitions),g.setDocPath(A.value),g.setFile(h.value);const l=s(()=>{const n={...a.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===D.value)return y.value=o.toString(),n[o]??null}return null}),c=s(()=>{const n={...a.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===D.value)return y.value=o.toString(),n[o][r.value]??null}return null}),p=s(()=>l.value?l.value[r.value]??null:null),R=s(()=>l.value?l.value.parameters??null:null),q=s(()=>{const n=_.currentLocale()??"";return k.value?"[server] - Info Docs":x.value?"[server] - Authorization":I.value?"[server] - Components Docs":p.value?"[server] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),U=s(()=>{const n=_.currentLocale()??"";return k.value?"[server] - Info Docs":x.value?"[server] - Authorization":I.value?"[server] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});re({title:q.value,meta:[{name:"description",content:U.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const j=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let n=C.value;if(n>0&&a.servers&&!a.servers[n]&&(n=0),!a.servers||!a.servers[n])return"";if(a.servers[n].variables){const o=Object.values(a.servers[n].variables)??[];if(o&&o.length)return o[0].default}return a.servers[n].url??""});function L(n){C.value=n}function B(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",i=>{const P=t.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+P;_.copyToClipboard(S,i,!1),$.push({path:f.path,hash:"#"+P}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(f.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function O(){const n=JSON.stringify(a,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),i=document.createElement("a");i.href=t,i.download=h.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}return Z(()=>{b.$on("downloadJsonDoc",O),b.$on("changeServer",L),E(),B()}),ee(()=>{b.$off("downloadJsonDoc",O),b.$off("changeServer",L)}),(n,o)=>{const t=J,i=z,P=F,S=Q,N=M,V=H,W=G;return m(),te("div",ae,[e(k)&&e(u).info?(m(),d(t,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(x)&&e(u).components?(m(),d(i,{key:1,components:e(u).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(I)&&e(u).components?(m(),d(P,{key:2,components:e(u).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(p)?(m(),d(S,{key:3,route:e(p),"current-locale":e(v),method:e(r),components:e(u).components,url:e(y),path_doc:e(A),file:e(h),server:e(j),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(m(),d(S,{key:4,route:e(c),"current-locale":e(v),method:e(r),components:e(u).components,url:e(y),path_doc:e(A),file:e(h),server:e(j),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),d(N,{key:5})),T(W,null,{default:ne(()=>[T(V,{"current-locale":e(v),doc:e(u),path:e(A),file:e(h)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
