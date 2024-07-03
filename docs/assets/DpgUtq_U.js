import{_ as T,a as $,b as R,c as W,d as Q,e as J}from"./ChvMsacI.js";import{_ as H}from"./B0IMRMEv.js";import{g as M,i as K,k as X,r as _,l,h as Y,m as Z,o as h,c as ss,u as s,n as m,b as O,w as as,q as ns}from"./nlcBd7m8.js";import{u as es}from"./DBI-y-W5.js";import{d as ts}from"./D1hVouDq.js";import"./CEQtGfPO.js";import"./CUV8rRWz.js";const p={openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"/dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:`<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>
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
</code></pre>`,parameters:[{name:"limit",in:"query",example:10,description:"primitive non-dynamic parameter can coexist with dynamic parameters &lt;br /&gt; `limit=10`\n",schema:{type:"integer"}},{name:"fruits",in:"query",example:["apple","banana","grape"],description:"not-exploded array, should be serialized as &lt;br /&gt; `fruits=apple,banana,grape`\n",schema:{type:"array",items:{type:"string"}}},{name:"colors",in:"query",example:["red","black","white"],description:"exploded array, should be serialized as &lt;br /&gt; `colors=red&colors=black&colors=white`\n",schema:{type:"array",items:{type:"string"}}},{in:"query",name:"dynamic-query-params1",description:"Arrays are exploded, should be serialized as  &lt;br /&gt; `a=1&b=2&colors=red&colors=black&e=3`\n",schema:{type:"object",additionalProperties:{}},example:`{
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
`,schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}}}}},tags:{}},ls={class:"content-container"},ds=M({__name:"dynamic-query-params",setup(rs){const d=K(),V=X(),{$openapidoc:j,$openapidocBus:w,$openapidocRef:y}=ns(),g=_(""),L=_(0),v=_((ts.path??"").toString()),o=_(p??{}),f=l(()=>"dynamic-query-params"),t=l(()=>d.params.type.toString()),S=l(()=>(d.params.mathod??"default").toString()),x=l(()=>t.value==="info"),A=l(()=>t.value==="auth"),P=l(()=>t.value==="components"),u=l(()=>j.currentLocale());y.setComponents(p.components),y.setDefinitions(p.definitions),y.setDocPath(v.value),y.setFile(f.value);const r=l(()=>{const a={...p.paths};if(!a)return null;for(const e in a){let n=e.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===S.value)return g.value=e.toString(),a[e]??null}return null}),c=l(()=>{const a={...p.webhooks};if(!a)return null;for(const e in a){let n=e.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===S.value)return g.value=e.toString(),a[e][t.value]??null}return null}),i=l(()=>r.value?r.value[t.value]??null:null),C=l(()=>r.value?r.value.parameters??null:null),F=l(()=>{const a=j.currentLocale()??"";return x.value?"[dynamic-query-params] - Info Docs":A.value?"[dynamic-query-params] - Authorization":P.value?"[dynamic-query-params] - Components Docs":i.value?"[dynamic-query-params] - "+(i.value["x-summary-"+a.value]||i.value.summary||""):""}),z=l(()=>{const a=j.currentLocale()??"";return x.value?"[dynamic-query-params] - Info Docs":A.value?"[dynamic-query-params] - Authorization":P.value?"[dynamic-query-params] - Components Docs":i.value&&(i.value["x-description-"+a.value]||i.value.description)||""});es({title:F.value,meta:[{name:"description",content:z.value}],htmlAttrs:{lang:u.value},bodyAttrs:{class:"oapi"}});const D=l(()=>{if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[t.value]&&r.value[t.value].servers&&r.value[t.value].servers[0])return r.value[t.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[t.value]&&c.value[t.value].servers&&c.value[t.value].servers[0])return c.value[t.value].servers[0].url??null}let a=L.value;if(a>0&&p.servers&&!p.servers[a]&&(a=0),!p.servers||!p.servers[a])return"";if(p.servers[a].variables){const e=Object.values(p.servers[a].variables)??[];if(e&&e.length)return e[0].default}return p.servers[a].url??""});function E(a){L.value=a}function U(){var e;(((e=document.querySelector(".content-container"))==null?void 0:e.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",k=>{const q=n.getAttribute("id"),b=window.location.origin+window.location.pathname+"#"+q;j.copyToClipboard(b,k,!1),V.push({path:d.path,hash:"#"+q}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function G(){if(d.hash)return;const a=document.querySelector(".oapi-content");a&&(a.scrollTop=0)}return Y(()=>{w.$on("changeServer",E),G(),U()}),Z(()=>{w.$off("changeServer",E)}),(a,e)=>{const n=T,k=$,q=R,b=W,I=J,B=Q,N=H;return h(),ss("div",ls,[s(x)&&s(o).info?(h(),m(n,{key:0,info:s(o).info,servers:s(o).servers,"current-locale":s(u)},null,8,["info","servers","current-locale"])):s(A)&&s(o).components?(h(),m(k,{key:1,components:s(o).components,"current-locale":s(u)},null,8,["components","current-locale"])):s(P)&&s(o).components?(h(),m(q,{key:2,components:s(o).components,"current-locale":s(u)},null,8,["components","current-locale"])):s(i)?(h(),m(b,{key:3,route:s(i),"current-locale":s(u),method:s(t),components:s(o).components,url:s(g),path_doc:s(v),file:s(f),server:s(D),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):s(c)?(h(),m(b,{key:4,route:s(c),"current-locale":s(u),method:s(t),components:s(o).components,url:s(g),path_doc:s(v),file:s(f),server:s(D),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(h(),m(I,{key:5})),O(N,null,{default:as(()=>[O(B,{"current-locale":s(u),doc:s(o),path:s(v),file:s(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ds as default};
