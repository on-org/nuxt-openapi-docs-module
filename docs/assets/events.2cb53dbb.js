import{_ as W,a as F,b as H,c as V,d as z,e as M}from"./SearchBlock.3e19f150.js";import{_ as X}from"./client-only.45c4cd0b.js";import{f as Y,h as K,j as Q,r as w,k as s,g as Z,l as ee,c as te,u as e,m,b as P,w as ne,n as oe,o as d}from"./entry.4698dbd5.js";import{u as re}from"./vue.f36acd1f.e66bd35a.js";import{d as se}from"./docs.events.config.633e9f5f.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const S={openapi:"3.1.0",info:{title:"Event Handling",version:"1.0",description:`<h3 id="the-code-demonstrate-how-some-events-can-be-used-listed-below-are-some-common-use-cases">The code demonstrate how some events can be used. Listed below are some common use cases</h3>
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
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",parameters:[{name:"delay",in:"query",schema:{type:"integer",examples:[1,10]}}],requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",description:"user object with `name` and `job` properties",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},ae={class:"content-container"},he=Y({__name:"events",setup(le){const h=K(),O=Q(),{$openapidoc:f,$openapidocBus:g,$openapidocRef:b}=oe(),_=w(""),A=w(0),y=w(se.path.toString()),o=w(S??{}),v=s(()=>"events"),r=s(()=>h.params.type.toString()),j=s(()=>(h.params.mathod??"default").toString()),k=s(()=>r.value==="info"),E=s(()=>r.value==="auth"),L=s(()=>r.value==="components"),p=s(()=>f.currentLocale());b.setComponents(S.components),b.setDefinitions(S.definitions),b.setDocPath(y.value),b.setFile(v.value);const a=s(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===j.value)return _.value=n,o.value.paths[n]??null}return null}),l=s(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===j.value)return _.value=n,o.value.webhooks[n][r.value]??null}return null}),i=s(()=>a.value?a.value[r.value]??null:null),T=s(()=>a.value?a.value.parameters??null:null),D=s(()=>{const n=f.currentLocale()??"";return k.value?"[events] - Info Docs":E.value?"[events] - Authorization":L.value?"[events] - Components Docs":i.value?"[events] - "+(i.value["x-summary-"+n.value]||i.value.summary||""):""}),I=s(()=>{const n=f.currentLocale()??"";return k.value?"[events] - Info Docs":E.value?"[events] - Authorization":L.value?"[events] - Components Docs":i.value&&(i.value["x-description-"+n.value]||i.value.description)||""});re({title:D.value,meta:[{name:"description",content:I.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const R=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let n=A.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function U(n){A.value=n}function N(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(c=>{c.addEventListener("click",u=>{const x=c.getAttribute("id"),q=window.location.origin+window.location.pathname+"#"+x;f.copyToClipboard(q,u,!1),O.push({path:h.path,hash:"#"+x}),setTimeout(()=>{c.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function B(){if(h.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function C(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),c=URL.createObjectURL(t),u=document.createElement("a");u.href=c,u.download=v.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(c)}return Z(()=>{g.$on("downloadJsonDoc",C),g.$on("changeServer",U),B(),N()}),ee(()=>{g.$off("downloadJsonDoc",C),g.$off("changeServer",U)}),(n,t)=>{const c=W,u=F,x=H,q=V,$=M,G=z,J=X;return d(),te("div",ae,[e(k)&&e(o).info?(d(),m(c,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(E)&&e(o).components?(d(),m(u,{key:1,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(L)&&e(o).components?(d(),m(x,{key:2,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(d(),m(q,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(o).components,url:e(_),path_doc:e(y),file:e(v),server:e(R),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(d(),m(q,{key:4,route:e(l),"current-locale":e(p),method:e(r),components:e(o).components,url:e(_),path_doc:e(y),file:e(v),server:e(R),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),m($,{key:5})),P(J,null,{default:ne(()=>[P(G,{"current-locale":e(p),doc:e(o),path:e(y),file:e(v)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
