import{_ as T,a as $,b as R,c as W,d as Q,e as J}from"./BdpLcoxu.js";import{_ as H}from"./BXvlvvPw.js";import{f as M,h as K,j as X,r as x,k as a,g as Y,l as Z,c as ee,u as e,m as d,b as O,w as ne,n as te,o as m}from"./qEcSDZDN.js";import{u as re}from"./Nl5E_vvB.js";import{d as oe}from"./D1hVouDq.js";import"./DwPOiaZ-.js";import"./BykPuthJ.js";const u={openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"/dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:`<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>
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
`,schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}}}}},tags:{}},ae={class:"content-container"},ye=M({__name:"dynamic-query-params",setup(se){const y=K(),V=X(),{$openapidoc:v,$openapidocBus:j,$openapidocRef:f}=te(),q=x(""),L=x(0),h=x((oe.path??"").toString()),i=x(u??{}),_=a(()=>"dynamic-query-params"),o=a(()=>y.params.type.toString()),S=a(()=>(y.params.mathod??"default").toString()),A=a(()=>o.value==="info"),P=a(()=>o.value==="auth"),k=a(()=>o.value==="components"),p=a(()=>v.currentLocale());f.setComponents(u.components),f.setDefinitions(u.definitions),f.setDocPath(h.value),f.setFile(_.value);const s=a(()=>{const n={...u.paths};if(!n)return null;for(const r in n){let t=r.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===S.value)return q.value=r.toString(),n[r]??null}return null}),l=a(()=>{const n={...u.webhooks};if(!n)return null;for(const r in n){let t=r.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===S.value)return q.value=r.toString(),n[r][o.value]??null}return null}),c=a(()=>s.value?s.value[o.value]??null:null),C=a(()=>s.value?s.value.parameters??null:null),F=a(()=>{const n=v.currentLocale()??"";return A.value?"[dynamic-query-params] - Info Docs":P.value?"[dynamic-query-params] - Authorization":k.value?"[dynamic-query-params] - Components Docs":c.value?"[dynamic-query-params] - "+(c.value["x-summary-"+n.value]||c.value.summary||""):""}),z=a(()=>{const n=v.currentLocale()??"";return A.value?"[dynamic-query-params] - Info Docs":P.value?"[dynamic-query-params] - Authorization":k.value?"[dynamic-query-params] - Components Docs":c.value&&(c.value["x-description-"+n.value]||c.value.description)||""});re({title:F.value,meta:[{name:"description",content:z.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const D=a(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[o.value]&&s.value[o.value].servers&&s.value[o.value].servers[0])return s.value[o.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[o.value]&&l.value[o.value].servers&&l.value[o.value].servers[0])return l.value[o.value].servers[0].url??null}let n=L.value;if(n>0&&u.servers&&!u.servers[n]&&(n=0),!u.servers||!u.servers[n])return"";if(u.servers[n].variables){const r=Object.values(u.servers[n].variables)??[];if(r&&r.length)return r[0].default}return u.servers[n].url??""});function E(n){L.value=n}function U(){var r;(((r=document.querySelector(".content-container"))==null?void 0:r.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",w=>{const b=t.getAttribute("id"),g=window.location.origin+window.location.pathname+"#"+b;v.copyToClipboard(g,w,!1),V.push({path:y.path,hash:"#"+b}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function G(){if(y.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}return Y(()=>{j.$on("changeServer",E),G(),U()}),Z(()=>{j.$off("changeServer",E)}),(n,r)=>{const t=T,w=$,b=R,g=W,I=J,B=Q,N=H;return m(),ee("div",ae,[e(A)&&e(i).info?(m(),d(t,{key:0,info:e(i).info,servers:e(i).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(P)&&e(i).components?(m(),d(w,{key:1,components:e(i).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(k)&&e(i).components?(m(),d(b,{key:2,components:e(i).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(m(),d(g,{key:3,route:e(c),"current-locale":e(p),method:e(o),components:e(i).components,url:e(q),path_doc:e(h),file:e(_),server:e(D),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(m(),d(g,{key:4,route:e(l),"current-locale":e(p),method:e(o),components:e(i).components,url:e(q),path_doc:e(h),file:e(_),server:e(D),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),d(I,{key:5})),O(N,null,{default:ne(()=>[O(B,{"current-locale":e(p),doc:e(i),path:e(h),file:e(_)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ye as default};
