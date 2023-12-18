import{_ as W,a as F,b as H,c as V,d as z,e as M}from"./SearchBlock.28655242.js";import{_ as X}from"./client-only.4440f32e.js";import{f as Y,h as K,j as Q,r as S,k as s,g as Z,l as ee,c as te,u as e,m as v,b as P,w as ne,n as oe,o as m}from"./entry.dba88898.js";import{u as re}from"./vue.f36acd1f.bd032e03.js";import{d as se}from"./docs.events.config.633e9f5f.js";import"./nuxt-link.5f533b5e.js";import"./OpenApiDropdown.c150524c.js";const a={openapi:"3.1.0",info:{title:"Event Handling",version:"1.0",description:`<h3 id="the-code-demonstrate-how-some-events-can-be-used-listed-below-are-some-common-use-cases">The code demonstrate how some events can be used. Listed below are some common use cases</h3>
<ul>
<li><code>before-render</code> - Good place to twaek the OpenAPI spec if needed. In this example the Title above is dynamically created </li>
<li><code>before-try</code> - Good place to twaek the AJAX request sucha as adding a request header or abort the request</li>
<li><code>after-try</code> - Good place to inspect the response received</li>
</ul>
<h4 id="to-test-it-out-go-ahead-and-click-try-below-you-will-notice-all-post-requests-are-aborted-and-get-are-success-">To test it out go ahead and click TRY below, you will notice all <code>POST</code> requests are aborted and <code>GET</code> are success <br/><br/></h4>
<pre><code class="hljs language-markup">&lt;!doctype html&gt;

&lt;html&gt;
  &lt;body&gt;
    &lt;rapi-doc id = &quot;thedoc&quot; spec-url = &quot;...&quot;&gt; &lt;/rapi-doc&gt;
  
    &lt;script&gt;
      document.addEventListener(&#x27;DOMContentLoaded&#x27;, (event) =&gt; {
        let docEl = document.getElementById(&quot;thedoc&quot;);

        // Add various event listeners

        // 1. before-render (Dynamically changes the Title of this Spec)
        docEl.addEventListener(&#x27;before-render&#x27;, (e) =&gt; {
          e.detail.spec.info.title = &quot;EVENTS - This text is updated during \`before-render\` event&quot;;
        });

        // 2. before-try (Adds a querystring param to all GET calls)
        docEl.addEventListener(&#x27;before-try&#x27;, (e) =&gt; {
          if (e.detail.request.method === &#x27;GET&#x27;) {
            const url = new URL( e.detail.request.url);
            url.searchParams.append(&#x27;delay&#x27;, &#x27;3&#x27;);
            e.detail.request.url = url.searchParams.toString();
          }
        });

        // 3. before-try (Aborts all post calls)
        docEl.addEventListener(&#x27;before-try&#x27;, (e) =&gt; {
          if (e.detail.request.method === &#x27;POST&#x27;) {
            e.detail.controller.abort();
          }
        });

        // 4. after-try
        docEl.addEventListener(&#x27;after-try&#x27;, (e) =&gt; {
          console.log(&quot;Hello from &#x27;after-try&#x27; event &quot;);
        });

        // 5. request-aborted
        docEl.addEventListener(&#x27;request-aborted&#x27;, (e) =&gt; {
          calert(&quot;POST Requests are aborted in &#x27;before-try&#x27; event &quot;);
        });

      })
    &lt;/script&gt;
  &lt;/body&gt; 

&lt;/html&gt;
</code></pre>
`},servers:[{url:"https://reqres.in/api/"}],paths:{"/users":{get:{description:"List of users (paginated)",parameters:[{name:"page",in:"query",schema:{type:"integer",examples:[1,2]}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",description:`<p>Description of <strong>User</strong> object</p>
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",parameters:[{name:"delay",in:"query",schema:{type:"integer",examples:[1,10]}}],requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",description:"user object with `name` and `job` properties",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},ae={class:"content-container"},he=Y({__name:"events",setup(ce){const f=K(),O=Q(),{$openapidoc:g,$openapidocBus:_,$openapidocRef:b}=oe(),y=S(""),A=S(0),x=S(se.path.toString()),l=S(a??{}),h=s(()=>"events"),r=s(()=>f.params.type.toString()),j=s(()=>(f.params.mathod??"default").toString()),k=s(()=>r.value==="info"),E=s(()=>r.value==="auth"),L=s(()=>r.value==="components"),d=s(()=>g.currentLocale());b.setComponents(a.components),b.setDefinitions(a.definitions),b.setDocPath(x.value),b.setFile(h.value);const c=s(()=>{const t={...a.paths};if(!t)return null;for(const o in t){let n=o.toString().replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_");if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n===j.value)return y.value=o.toString(),t[o]??null}return null}),i=s(()=>{const t={...a.webhooks};if(!t)return null;for(const o in t){let n=o.toString().replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_");if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n===j.value)return y.value=o.toString(),t[o][r.value]??null}return null}),p=s(()=>c.value?c.value[r.value]??null:null),T=s(()=>c.value?c.value.parameters??null:null),D=s(()=>{const t=g.currentLocale()??"";return k.value?"[events] - Info Docs":E.value?"[events] - Authorization":L.value?"[events] - Components Docs":p.value?"[events] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),I=s(()=>{const t=g.currentLocale()??"";return k.value?"[events] - Info Docs":E.value?"[events] - Authorization":L.value?"[events] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});re({title:D.value,meta:[{name:"description",content:I.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const R=s(()=>{if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}let t=A.value;if(t>0&&a.servers&&!a.servers[t]&&(t=0),!a.servers||!a.servers[t])return"";if(a.servers[t].variables){const o=Object.values(a.servers[t].variables)??[];if(o&&o.length)return o[0].default}return a.servers[t].url??""});function U(t){A.value=t}function N(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",u=>{const q=n.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+q;g.copyToClipboard(w,u,!1),O.push({path:f.path,hash:"#"+q}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function B(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function C(){const t=JSON.stringify(a,null,4),o=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(o),u=document.createElement("a");u.href=n,u.download=h.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(n)}return Z(()=>{_.$on("downloadJsonDoc",C),_.$on("changeServer",U),B(),N()}),ee(()=>{_.$off("downloadJsonDoc",C),_.$off("changeServer",U)}),(t,o)=>{const n=W,u=F,q=H,w=V,$=M,G=z,J=X;return m(),te("div",ae,[e(k)&&e(l).info?(m(),v(n,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(E)&&e(l).components?(m(),v(u,{key:1,components:e(l).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(L)&&e(l).components?(m(),v(q,{key:2,components:e(l).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(p)?(m(),v(w,{key:3,route:e(p),"current-locale":e(d),method:e(r),components:e(l).components,url:e(y),path_doc:e(x),file:e(h),server:e(R),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(m(),v(w,{key:4,route:e(i),"current-locale":e(d),method:e(r),components:e(l).components,url:e(y),path_doc:e(x),file:e(h),server:e(R),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),v($,{key:5})),P(J,null,{default:ne(()=>[P(G,{"current-locale":e(d),doc:e(l),path:e(x),file:e(h)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
