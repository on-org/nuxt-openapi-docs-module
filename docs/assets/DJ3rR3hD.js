import{_ as z,a as K,b as V,c as Y,d as H,e as J}from"./CBkLy2SA.js";import{_ as M}from"./B3LdbQa4.js";import{f as U,h as G,j as Q,r as x,k as a,g as X,l as Z,c as ee,u as e,m as d,b as I,w as te,n as oe,o as p}from"./BahJtFiW.js";import{u as ne}from"./Di5kSJuz.js";import{d as re}from"./BbJj2s_g.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const u={openapi:"3.0.0",info:{title:"Dynamic Form Params",version:"1.0.0",description:`Following OpenAPI spec demonstrate various ways to pass form params.
  - You may pass predefined form params
  - You may create dynamic form params by defining a form-param as an object, 
`},paths:{"/dynamic-form-parameters":{post:{tags:["Form Params"],summary:"Dynamic Params",description:`<pre><code class="language-yaml">/dynamic-form-parameters:
  post:
    summary: Dynamic Params
    requestBody:
      content:
        multipart/form-data:
          schema:
            type: object
    responses:
      &#39;200&#39;:
        description: successful operation
</code></pre>
`,requestBody:{content:{"multipart/form-data":{schema:{type:"object",description:`<p>This param is defined as a dynamic param, this accepts data in a strict object notation (JSON) and its each <code>key</code>, <code>value</code> pairs is treated as a seperate form parameter. In this case the example will send 5 form parameters as shown below </p>
<pre><code> a = 1
 b = 2
 c = [ &quot;red&quot;, &quot;black&quot; ]
 d = { &quot;d1&quot;:1, &quot;d2&quot;:2 }
 e = 3
</code></pre>
`},example:`{
  &quot;a&quot;:1,
  &quot;b&quot;:2,
  &quot;c&quot;:[
    &quot;red&quot;,
    &quot;black&quot;
  ],
  &quot;d&quot;:{ &quot;d1&quot;:1, &quot;d2&quot;:2 },
  &quot;e&quot;:3
}
`}}},responses:{200:{description:"OK"}}}},"/fixed-form-parameters":{post:{tags:["Form Params"],summary:"Fixed Params",requestBody:{content:{"multipart/form-data":{schema:{type:"object",description:"name and age are fixed form params",properties:{name:{type:"string",description:"name of person",examples:{example1:{summary:"Fullname",value:"Nikola Tesla"},example2:{summary:"Name with prefix",value:"Dr. Albert Einstein"}}},age:{type:"integer",description:"age of person",example:28}}}}}},responses:{200:{description:"OK"}}}}},tags:{}},ae={class:"content-container"},fe=U({__name:"dynamic-form-params",setup(se){const f=G(),j=Q(),{$openapidoc:v,$openapidocBus:P,$openapidocRef:h}=oe(),_=x(""),C=x(0),y=x((re.path??"").toString()),c=x(u??{}),b=a(()=>"dynamic-form-params"),r=a(()=>f.params.type.toString()),D=a(()=>(f.params.mathod??"default").toString()),k=a(()=>r.value==="info"),S=a(()=>r.value==="auth"),w=a(()=>r.value==="components"),m=a(()=>v.currentLocale());h.setComponents(u.components),h.setDefinitions(u.definitions),h.setDocPath(y.value),h.setFile(b.value);const s=a(()=>{const t={...u.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===D.value)return _.value=n.toString(),t[n]??null}return null}),l=a(()=>{const t={...u.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===D.value)return _.value=n.toString(),t[n][r.value]??null}return null}),i=a(()=>s.value?s.value[r.value]??null:null),O=a(()=>s.value?s.value.parameters??null:null),N=a(()=>{const t=v.currentLocale()??"";return k.value?"[dynamic-form-params] - Info Docs":S.value?"[dynamic-form-params] - Authorization":w.value?"[dynamic-form-params] - Components Docs":i.value?"[dynamic-form-params] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),T=a(()=>{const t=v.currentLocale()??"";return k.value?"[dynamic-form-params] - Info Docs":S.value?"[dynamic-form-params] - Authorization":w.value?"[dynamic-form-params] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ne({title:N.value,meta:[{name:"description",content:T.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const B=a(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[r.value]&&s.value[r.value].servers&&s.value[r.value].servers[0])return s.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let t=C.value;if(t>0&&u.servers&&!u.servers[t]&&(t=0),!u.servers||!u.servers[t])return"";if(u.servers[t].variables){const n=Object.values(u.servers[t].variables)??[];if(n&&n.length)return n[0].default}return u.servers[t].url??""});function F(t){C.value=t}function $(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",A=>{const g=o.getAttribute("id"),q=window.location.origin+window.location.pathname+"#"+g;v.copyToClipboard(q,A,!1),j.push({path:f.path,hash:"#"+g}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function L(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return X(()=>{P.$on("changeServer",F),L(),$()}),Z(()=>{P.$off("changeServer",F)}),(t,n)=>{const o=z,A=K,g=V,q=Y,R=J,W=H,E=M;return p(),ee("div",ae,[e(k)&&e(c).info?(p(),d(o,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(S)&&e(c).components?(p(),d(A,{key:1,components:e(c).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(w)&&e(c).components?(p(),d(g,{key:2,components:e(c).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(i)?(p(),d(q,{key:3,route:e(i),"current-locale":e(m),method:e(r),components:e(c).components,url:e(_),path_doc:e(y),file:e(b),server:e(B),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(p(),d(q,{key:4,route:e(l),"current-locale":e(m),method:e(r),components:e(c).components,url:e(_),path_doc:e(y),file:e(b),server:e(B),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),d(R,{key:5})),I(E,null,{default:te(()=>[I(W,{"current-locale":e(m),doc:e(c),path:e(y),file:e(b)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
