import{_ as N,a as J,b as T,c as W,d as Q,e as H}from"./SearchBlock.1e4291ad.js";import{_ as M}from"./client-only.bc1de542.js";import{f as K,h as X,j as Y,r as A,k as l,g as Z,l as ss,c as as,u as s,m as d,b as U,w as ns,n as es,o as m}from"./entry.02ff2795.js";import{u as ts}from"./vue.f36acd1f.eda93068.js";import{d as ls}from"./docs.dynamic-query-params.config.2c1ee2df.js";import"./nuxt-link.162a37af.js";import"./OpenApiDropdown.42b99cd0.js";const r={openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"/dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:`<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>
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
`,schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}}}}},tags:{}},rs={class:"content-container"},js=K({__name:"dynamic-query-params",setup(ps){const y=X(),V=Y(),{$openapidoc:g,$openapidocBus:f,$openapidocRef:v}=es(),q=A(""),L=A(0),b=A(ls.path.toString()),o=A(r??{}),j=l(()=>"dynamic-query-params"),t=l(()=>y.params.type.toString()),S=l(()=>(y.params.mathod??"default").toString()),k=l(()=>t.value==="info"),w=l(()=>t.value==="auth"),P=l(()=>t.value==="components"),h=l(()=>g.currentLocale());v.setComponents(r.components),v.setDefinitions(r.definitions),v.setDocPath(b.value),v.setFile(j.value);const p=l(()=>{const a={...r.paths};if(!a)return null;for(const e in a){let n=e.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===S.value)return q.value=e.toString(),a[e]??null}return null}),c=l(()=>{const a={...r.webhooks};if(!a)return null;for(const e in a){let n=e.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===S.value)return q.value=e.toString(),a[e][t.value]??null}return null}),u=l(()=>p.value?p.value[t.value]??null:null),C=l(()=>p.value?p.value.parameters??null:null),F=l(()=>{const a=g.currentLocale()??"";return k.value?"[dynamic-query-params] - Info Docs":w.value?"[dynamic-query-params] - Authorization":P.value?"[dynamic-query-params] - Components Docs":u.value?"[dynamic-query-params] - "+(u.value["x-summary-"+a.value]||u.value.summary||""):""}),R=l(()=>{const a=g.currentLocale()??"";return k.value?"[dynamic-query-params] - Info Docs":w.value?"[dynamic-query-params] - Authorization":P.value?"[dynamic-query-params] - Components Docs":u.value&&(u.value["x-description-"+a.value]||u.value.description)||""});ts({title:F.value,meta:[{name:"description",content:R.value}],htmlAttrs:{lang:h.value},bodyAttrs:{class:"oapi"}});const O=l(()=>{if(p.value){if(p.value.servers&&p.value.servers[0])return p.value.servers[0].url??null;if(p.value[t.value]&&p.value[t.value].servers&&p.value[t.value].servers[0])return p.value[t.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[t.value]&&c.value[t.value].servers&&c.value[t.value].servers[0])return c.value[t.value].servers[0].url??null}let a=L.value;if(a>0&&r.servers&&!r.servers[a]&&(a=0),!r.servers||!r.servers[a])return"";if(r.servers[a].variables){const e=Object.values(r.servers[a].variables)??[];if(e&&e.length)return e[0].default}return r.servers[a].url??""});function D(a){L.value=a}function z(){var e;(((e=document.querySelector(".content-container"))==null?void 0:e.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",i=>{const _=n.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+_;g.copyToClipboard(x,i,!1),V.push({path:y.path,hash:"#"+_}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function $(){if(y.hash)return;const a=document.querySelector(".oapi-content");a&&(a.scrollTop=0)}function E(){const a=JSON.stringify(r,null,4),e=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=j.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}return Z(()=>{f.$on("downloadJsonDoc",E),f.$on("changeServer",D),$(),z()}),ss(()=>{f.$off("downloadJsonDoc",E),f.$off("changeServer",D)}),(a,e)=>{const n=N,i=J,_=T,x=W,B=H,G=Q,I=M;return m(),as("div",rs,[s(k)&&s(o).info?(m(),d(n,{key:0,info:s(o).info,servers:s(o).servers,"current-locale":s(h)},null,8,["info","servers","current-locale"])):s(w)&&s(o).components?(m(),d(i,{key:1,components:s(o).components,"current-locale":s(h)},null,8,["components","current-locale"])):s(P)&&s(o).components?(m(),d(_,{key:2,components:s(o).components,"current-locale":s(h)},null,8,["components","current-locale"])):s(u)?(m(),d(x,{key:3,route:s(u),"current-locale":s(h),method:s(t),components:s(o).components,url:s(q),path_doc:s(b),file:s(j),server:s(O),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):s(c)?(m(),d(x,{key:4,route:s(c),"current-locale":s(h),method:s(t),components:s(o).components,url:s(q),path_doc:s(b),file:s(j),server:s(O),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),d(B,{key:5})),U(I,null,{default:ns(()=>[U(G,{"current-locale":s(h),doc:s(o),path:s(b),file:s(j)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{js as default};
