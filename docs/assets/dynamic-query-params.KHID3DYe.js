import{_ as N,a as J,b as T,c as W,d as Q,e as H}from"./SearchBlock.39BIF1Me.js";import{_ as M}from"./client-only.qDKU5ACo.js";import{f as K,h as X,j as Y,r as k,k as a,g as Z,l as ee,c as ne,u as e,m as y,b as U,w as te,n as re,o as d}from"./entry.F1ddeqcb.js";import{u as oe}from"./vue.f36acd1f.8Vqce39Q.js";import{d as ae}from"./docs.dynamic-query-params.config.Wpk_cJO0.js";import"./nuxt-link.yTkd5Ou_.js";import"./OpenApiDropdown.9vX9r9au.js";const s={openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"/dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:`<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>
<ul>
<li>you may pass predefined query params</li>
<li>you may create dynamic query params by defining a query-param as an object,
in that case each key of the object will be treated as a seperate param</li>
<li>Array serialization depends on <code>style</code> and <code>explode</code> property</li>
</ul>
<pre><code class="language-yaml"> openapi: 3.0.0
  info:
    title:  Dynamic Query Params
    version: 1.0.0
  paths:
    /dynamic-query-params:
      get:
        tags:
          - Query Params
        summary:  Various ways to pass query params
        parameters:
          - name: limit
            in: query
            schema:
              type: integer
          - name: fruits
            in: query
            style: form
            explode: false
            schema:
              type: array
              items:
                type: string
          - name: colors
            in: query
            schema:
              type: array
              items:
                type: string
          - in: query
            name: dynamic-query-params1
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params2
            style: form
            explode: false
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params3
            style: pipeDelimited
            explode: false
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params4
            content:
              &quot;application/json&quot;:
                schema:
                  type: object
                  properties:
                    someProperty:
                      type: string
                  additionalProperties:
                  type: string
          - in: query
            name: dynamic-query-params5
            explode: false
            required: false
            schema:
              type: object
              properties:
                propertyOne:
                  type: string
                  enum:
                    - VALUE-1
                    - VALUE-2
                  default: VALUE-2
                propertyTwo:
                  type: string
                  enum:
                    - FLAG-1
                    - FLAG-2
                  default: FLAG-1
        responses:
          &#39;200&#39;:
            description: successful operation
</code></pre>
`,parameters:[{name:"limit",in:"query",example:10,description:"primitive non-dynamic parameter can coexist with dynamic parameters &lt;br /&gt; `limit=10`\n",schema:{type:"integer"}},{name:"fruits",in:"query",example:["apple","banana","grape"],description:"not-exploded array, should be serialized as &lt;br /&gt; `fruits=apple,banana,grape`\n",schema:{type:"array",items:{type:"string"}}},{name:"colors",in:"query",example:["red","black","white"],description:"exploded array, should be serialized as &lt;br /&gt; `colors=red&colors=black&colors=white`\n",schema:{type:"array",items:{type:"string"}}},{in:"query",name:"dynamic-query-params1",description:"Arrays are exploded, should be serialized as  &lt;br /&gt; `a=1&b=2&colors=red&colors=black&e=3`\n",schema:{type:"object",additionalProperties:{}},example:`{
  &quot;a&quot;:1,
  &quot;b&quot;:2,
  &quot;colors&quot;:[
    &quot;red&quot;,
    &quot;black&quot;
  ],
  &quot;d&quot;:{ &quot;d1&quot;:1, &quot;d2&quot;:2 },
  &quot;e&quot;:3
}
`},{in:"query",name:"dynamic-query-params2",description:"Arrays are not-exploded, therefore comma sperated &lt;br /&gt; `f=1&g=2&hobbies=music,dance`\n",style:"form",explode:!1,schema:{type:"object",additionalProperties:{}},example:`{
  &quot;f&quot;:1,
  &quot;g&quot;:2,
  &quot;hobbies&quot;:[
    &quot;music&quot;,
    &quot;dance&quot;
  ]
}
`},{in:"query",name:"dynamic-query-params3",description:"Arrays are not exploded, and pipe separated &lt;br /&gt; `i=1&j=2&keys=public&#x7C;private`\n",style:"pipeDelimited",explode:!1,schema:{type:"object",additionalProperties:{}},example:`{
  &quot;i&quot;:1,
  &quot;j&quot;:2,
  &quot;keys&quot;:[&quot;public&quot;, &quot;private&quot;]
}
`},{in:"query",name:"dynamic-query-params4",description:"Parameters with JSON encoding are JSON encoded and escaped: &lt;br /&gt; `dynamic-query-params4=%7B%22someProperty%22%3A%22foo%22%2C%22bar%22%3A%22baz%22%7D`\n",content:{"application/json":{example:`{
  &quot;someProperty&quot;: &quot;foo&quot;,
  &quot;bar&quot;: &quot;baz&quot;
}
`,schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}}}}},tags:{}},se={class:"content-container"},fe=K({__name:"dynamic-query-params",setup(ue){const v=X(),V=Y(),{$openapidoc:q,$openapidocBus:h,$openapidocRef:b}=re(),_=k(""),L=k(0),g=k(ae.path.toString()),i=k(s??{}),f=a(()=>"dynamic-query-params"),o=a(()=>v.params.type.toString()),S=a(()=>(v.params.mathod??"default").toString()),w=a(()=>o.value==="info"),P=a(()=>o.value==="auth"),j=a(()=>o.value==="components"),m=a(()=>q.currentLocale());b.setComponents(s.components),b.setDefinitions(s.definitions),b.setDocPath(g.value),b.setFile(f.value);const u=a(()=>{const t={...s.paths};if(!t)return null;for(const r in t){let n=r.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===S.value)return _.value=r.toString(),t[r]??null}return null}),l=a(()=>{const t={...s.webhooks};if(!t)return null;for(const r in t){let n=r.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===S.value)return _.value=r.toString(),t[r][o.value]??null}return null}),p=a(()=>u.value?u.value[o.value]??null:null),C=a(()=>u.value?u.value.parameters??null:null),F=a(()=>{const t=q.currentLocale()??"";return w.value?"[dynamic-query-params] - Info Docs":P.value?"[dynamic-query-params] - Authorization":j.value?"[dynamic-query-params] - Components Docs":p.value?"[dynamic-query-params] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),R=a(()=>{const t=q.currentLocale()??"";return w.value?"[dynamic-query-params] - Info Docs":P.value?"[dynamic-query-params] - Authorization":j.value?"[dynamic-query-params] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});oe({title:F.value,meta:[{name:"description",content:R.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const O=a(()=>{if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[o.value]&&u.value[o.value].servers&&u.value[o.value].servers[0])return u.value[o.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[o.value]&&l.value[o.value].servers&&l.value[o.value].servers[0])return l.value[o.value].servers[0].url??null}let t=L.value;if(t>0&&s.servers&&!s.servers[t]&&(t=0),!s.servers||!s.servers[t])return"";if(s.servers[t].variables){const r=Object.values(s.servers[t].variables)??[];if(r&&r.length)return r[0].default}return s.servers[t].url??""});function D(t){L.value=t}function z(){var r;(((r=document.querySelector(".content-container"))==null?void 0:r.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",c=>{const x=n.getAttribute("id"),A=window.location.origin+window.location.pathname+"#"+x;q.copyToClipboard(A,c,!1),V.push({path:v.path,hash:"#"+x}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function $(){if(v.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function E(){const t=JSON.stringify(s,null,4),r=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(r),c=document.createElement("a");c.href=n,c.download=f.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(n)}return Z(()=>{h.$on("downloadJsonDoc",E),h.$on("changeServer",D),$(),z()}),ee(()=>{h.$off("downloadJsonDoc",E),h.$off("changeServer",D)}),(t,r)=>{const n=N,c=J,x=T,A=W,B=H,G=Q,I=M;return d(),ne("div",se,[e(w)&&e(i).info?(d(),y(n,{key:0,info:e(i).info,servers:e(i).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(P)&&e(i).components?(d(),y(c,{key:1,components:e(i).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(j)&&e(i).components?(d(),y(x,{key:2,components:e(i).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(p)?(d(),y(A,{key:3,route:e(p),"current-locale":e(m),method:e(o),components:e(i).components,url:e(_),path_doc:e(g),file:e(f),server:e(O),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(d(),y(A,{key:4,route:e(l),"current-locale":e(m),method:e(o),components:e(i).components,url:e(_),path_doc:e(g),file:e(f),server:e(O),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),y(B,{key:5})),U(I,null,{default:te(()=>[U(G,{"current-locale":e(m),doc:e(i),path:e(g),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
