import{_ as $,a as J,b as T,c as W,d as Q,e as H}from"./SearchBlock.3e19f150.js";import{_ as M}from"./client-only.45c4cd0b.js";import{f as K,h as X,j as Y,r as x,k as l,g as Z,l as ss,c as as,u as s,m,b as U,w as ns,n as es,o as h}from"./entry.4698dbd5.js";import{u as ts}from"./vue.f36acd1f.e66bd35a.js";import{d as ls}from"./docs.dynamic-query-params.config.2c1ee2df.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const P={openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"/dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:`<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>
<ul>
<li>you may pass predefined query params</li>
<li>you may create dynamic query params by defining a query-param as an object,
in that case each key of the object will be treated as a seperate param</li>
<li>Array serialization depends on <code>style</code> and <code>explode</code> property</li>
</ul>
<pre><code class="hljs language-yaml"> <span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>
  <span class="hljs-attr">info:</span>
    <span class="hljs-attr">title:</span>  <span class="hljs-string">Dynamic</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>
    <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>
  <span class="hljs-attr">paths:</span>
    <span class="hljs-string">/dynamic-query-params:</span>
      <span class="hljs-attr">get:</span>
        <span class="hljs-attr">tags:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>
        <span class="hljs-attr">summary:</span>  <span class="hljs-string">Various</span> <span class="hljs-string">ways</span> <span class="hljs-string">to</span> <span class="hljs-string">pass</span> <span class="hljs-string">query</span> <span class="hljs-string">params</span>
        <span class="hljs-attr">parameters:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">limit</span>
            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">integer</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">fruits</span>
            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>
            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>
              <span class="hljs-attr">items:</span>
                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">colors</span>
            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>
              <span class="hljs-attr">items:</span>
                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params1</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
              <span class="hljs-attr">additionalProperties:</span> {}
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params2</span>
            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>
            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
              <span class="hljs-attr">additionalProperties:</span> {}
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params3</span>
            <span class="hljs-attr">style:</span> <span class="hljs-string">pipeDelimited</span>
            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
              <span class="hljs-attr">additionalProperties:</span> {}
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params4</span>
            <span class="hljs-attr">content:</span>
              <span class="hljs-attr">&quot;application/json&quot;:</span>
                <span class="hljs-attr">schema:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
                  <span class="hljs-attr">properties:</span>
                    <span class="hljs-attr">someProperty:</span>
                      <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
                  <span class="hljs-attr">additionalProperties:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>
            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params5</span>
            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">required:</span> <span class="hljs-literal">false</span>
            <span class="hljs-attr">schema:</span>
              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>
              <span class="hljs-attr">properties:</span>
                <span class="hljs-attr">propertyOne:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
                  <span class="hljs-attr">enum:</span>
                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-1</span>
                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-2</span>
                  <span class="hljs-attr">default:</span> <span class="hljs-string">VALUE-2</span>
                <span class="hljs-attr">propertyTwo:</span>
                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>
                  <span class="hljs-attr">enum:</span>
                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-1</span>
                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-2</span>
                  <span class="hljs-attr">default:</span> <span class="hljs-string">FLAG-1</span>
        <span class="hljs-attr">responses:</span>
          <span class="hljs-attr">&#x27;200&#x27;:</span>
            <span class="hljs-attr">description:</span> <span class="hljs-string">successful</span> <span class="hljs-string">operation</span>
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
`,schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}}}}},tags:{}},rs={class:"content-container"},js=K({__name:"dynamic-query-params",setup(ps){const j=X(),V=Y(),{$openapidoc:y,$openapidocBus:v,$openapidocRef:f}=es(),g=x(""),L=x(0),q=x(ls.path.toString()),e=x(P??{}),d=l(()=>"dynamic-query-params"),t=l(()=>j.params.type.toString()),S=l(()=>(j.params.mathod??"default").toString()),A=l(()=>t.value==="info"),k=l(()=>t.value==="auth"),w=l(()=>t.value==="components"),u=l(()=>y.currentLocale());f.setComponents(P.components),f.setDefinitions(P.definitions),f.setDocPath(q.value),f.setFile(d.value);const r=l(()=>{if(!e.value.paths)return null;for(let n in e.value.paths){let a=n;if(a.startsWith("/")&&(a=a.substring(1)),a.endsWith("/")&&(a=a.substring(-1)),a=a.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),a===S.value)return g.value=n,e.value.paths[n]??null}return null}),p=l(()=>{if(!e.value.webhooks)return null;for(let n in e.value.webhooks){let a=n;if(a.startsWith("/")&&(a=a.substring(1)),a.endsWith("/")&&(a=a.substring(-1)),a=a.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),a===S.value)return g.value=n,e.value.webhooks[n][t.value]??null}return null}),i=l(()=>r.value?r.value[t.value]??null:null),C=l(()=>r.value?r.value.parameters??null:null),F=l(()=>{const n=y.currentLocale()??"";return A.value?"[dynamic-query-params] - Info Docs":k.value?"[dynamic-query-params] - Authorization":w.value?"[dynamic-query-params] - Components Docs":i.value?"[dynamic-query-params] - "+(i.value["x-summary-"+n.value]||i.value.summary||""):""}),R=l(()=>{const n=y.currentLocale()??"";return A.value?"[dynamic-query-params] - Info Docs":k.value?"[dynamic-query-params] - Authorization":w.value?"[dynamic-query-params] - Components Docs":i.value&&(i.value["x-description-"+n.value]||i.value.description)||""});ts({title:F.value,meta:[{name:"description",content:R.value}],htmlAttrs:{lang:u.value},bodyAttrs:{class:"oapi"}});const O=l(()=>{if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[t.value]&&r.value[t.value].servers&&r.value[t.value].servers[0])return r.value[t.value].servers[0].url??null}if(p.value){if(p.value.servers&&p.value.servers[0])return p.value.servers[0].url??null;if(p.value[t.value]&&p.value[t.value].servers&&p.value[t.value].servers[0])return p.value[t.value].servers[0].url??null}let n=L.value;if(n>0&&e.value.servers&&!e.value.servers[n]&&(n=0),!e.value.servers||!e.value.servers[n])return"";if(e.value.servers[n].variables){const a=Object.values(e.value.servers[n].variables)??[];if(a&&a.length)return a[0].default}return e.value.servers[n].url??""});function D(n){L.value=n}function z(){var a;(((a=document.querySelector(".content-container"))==null?void 0:a.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",c=>{const b=o.getAttribute("id"),_=window.location.origin+window.location.pathname+"#"+b;y.copyToClipboard(_,c,!1),V.push({path:j.path,hash:"#"+b}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function B(){if(j.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function E(){const n=JSON.stringify(e.value,null,4),a=new Blob([n],{type:"application/json"}),o=URL.createObjectURL(a),c=document.createElement("a");c.href=o,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(o)}return Z(()=>{v.$on("downloadJsonDoc",E),v.$on("changeServer",D),B(),z()}),ss(()=>{v.$off("downloadJsonDoc",E),v.$off("changeServer",D)}),(n,a)=>{const o=$,c=J,b=T,_=W,G=H,I=Q,N=M;return h(),as("div",rs,[s(A)&&s(e).info?(h(),m(o,{key:0,info:s(e).info,servers:s(e).servers,"current-locale":s(u)},null,8,["info","servers","current-locale"])):s(k)&&s(e).components?(h(),m(c,{key:1,components:s(e).components,"current-locale":s(u)},null,8,["components","current-locale"])):s(w)&&s(e).components?(h(),m(b,{key:2,components:s(e).components,"current-locale":s(u)},null,8,["components","current-locale"])):s(i)?(h(),m(_,{key:3,route:s(i),"current-locale":s(u),method:s(t),components:s(e).components,url:s(g),path_doc:s(q),file:s(d),server:s(O),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):s(p)?(h(),m(_,{key:4,route:s(p),"current-locale":s(u),method:s(t),components:s(e).components,url:s(g),path_doc:s(q),file:s(d),server:s(O),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(h(),m(G,{key:5})),U(N,null,{default:ns(()=>[U(I,{"current-locale":s(u),doc:s(e),path:s(q),file:s(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{js as default};
