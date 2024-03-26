import{_ as W,a as F,b as H,c as V,d as z,e as M}from"./C4aTQ1ik.js";import{_ as X}from"./7ewQVEGD.js";import{f as Y,h as K,j as Q,r as E,k as s,g as Z,l as ee,c as te,u as e,m as v,b as P,w as ne,n as oe,o as m}from"./Uw59YdHJ.js";import{u as re}from"./Dayx65lQ.js";import{d as se}from"./CJTVbXnG.js";import"./lR3_jA5D.js";import"./DZOCZtjG.js";const a={openapi:"3.1.0",info:{title:"Event Handling",version:"1.0",description:`<h3>The code demonstrate how some events can be used. Listed below are some common use cases</h3>
<ul>
<li><code>before-render</code> - Good place to twaek the OpenAPI spec if needed. In this example the Title above is dynamically created </li>
<li><code>before-try</code> - Good place to twaek the AJAX request sucha as adding a request header or abort the request</li>
<li><code>after-try</code> - Good place to inspect the response received</li>
</ul>
<h4>To test it out go ahead and click TRY below, you will notice all <code>POST</code> requests are aborted and <code>GET</code> are success <br/><br/></h4>
<pre><code class="language-markup">&lt;!doctype html&gt;

&lt;html&gt;
  &lt;body&gt;
    &lt;rapi-doc id = &quot;thedoc&quot; spec-url = &quot;...&quot;&gt; &lt;/rapi-doc&gt;
  
    &lt;script&gt;
      document.addEventListener(&#39;DOMContentLoaded&#39;, (event) =&gt; {
        let docEl = document.getElementById(&quot;thedoc&quot;);

        // Add various event listeners

        // 1. before-render (Dynamically changes the Title of this Spec)
        docEl.addEventListener(&#39;before-render&#39;, (e) =&gt; {
          e.detail.spec.info.title = &quot;EVENTS - This text is updated during \`before-render\` event&quot;;
        });

        // 2. before-try (Adds a querystring param to all GET calls)
        docEl.addEventListener(&#39;before-try&#39;, (e) =&gt; {
          if (e.detail.request.method === &#39;GET&#39;) {
            const url = new URL( e.detail.request.url);
            url.searchParams.append(&#39;delay&#39;, &#39;3&#39;);
            e.detail.request.url = url.searchParams.toString();
          }
        });

        // 3. before-try (Aborts all post calls)
        docEl.addEventListener(&#39;before-try&#39;, (e) =&gt; {
          if (e.detail.request.method === &#39;POST&#39;) {
            e.detail.controller.abort();
          }
        });

        // 4. after-try
        docEl.addEventListener(&#39;after-try&#39;, (e) =&gt; {
          console.log(&quot;Hello from &#39;after-try&#39; event &quot;);
        });

        // 5. request-aborted
        docEl.addEventListener(&#39;request-aborted&#39;, (e) =&gt; {
          calert(&quot;POST Requests are aborted in &#39;before-try&#39; event &quot;);
        });

      })
    &lt;/script&gt;
  &lt;/body&gt; 

&lt;/html&gt;
</code></pre>
`},servers:[{url:"https://reqres.in/api/"}],paths:{"/users":{get:{description:"List of users (paginated)",parameters:[{name:"page",in:"query",schema:{type:"integer",examples:[1,2]}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",description:`<p>Description of <strong>User</strong> object</p>
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",parameters:[{name:"delay",in:"query",schema:{type:"integer",examples:[1,10]}}],requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",description:"user object with `name` and `job` properties",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},ae={class:"content-container"},he=Y({__name:"events",setup(ce){const f=K(),O=Q(),{$openapidoc:g,$openapidocBus:_,$openapidocRef:b}=oe(),y=E(""),j=E(0),q=E(se.path.toString()),l=E(a??{}),h=s(()=>"events"),r=s(()=>f.params.type.toString()),x=s(()=>(f.params.mathod??"default").toString()),L=s(()=>r.value==="info"),w=s(()=>r.value==="auth"),A=s(()=>r.value==="components"),d=s(()=>g.currentLocale());b.setComponents(a.components),b.setDefinitions(a.definitions),b.setDocPath(q.value),b.setFile(h.value);const c=s(()=>{const n={...a.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return y.value=o.toString(),n[o]??null}return null}),i=s(()=>{const n={...a.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return y.value=o.toString(),n[o][r.value]??null}return null}),p=s(()=>c.value?c.value[r.value]??null:null),T=s(()=>c.value?c.value.parameters??null:null),D=s(()=>{const n=g.currentLocale()??"";return L.value?"[events] - Info Docs":w.value?"[events] - Authorization":A.value?"[events] - Components Docs":p.value?"[events] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),I=s(()=>{const n=g.currentLocale()??"";return L.value?"[events] - Info Docs":w.value?"[events] - Authorization":A.value?"[events] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});re({title:D.value,meta:[{name:"description",content:I.value}],htmlAttrs:{lang:d.value},bodyAttrs:{class:"oapi"}});const R=s(()=>{if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}let n=j.value;if(n>0&&a.servers&&!a.servers[n]&&(n=0),!a.servers||!a.servers[n])return"";if(a.servers[n].variables){const o=Object.values(a.servers[n].variables)??[];if(o&&o.length)return o[0].default}return a.servers[n].url??""});function U(n){j.value=n}function N(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",u=>{const S=t.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+S;g.copyToClipboard(k,u,!1),O.push({path:f.path,hash:"#"+S}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function B(){if(f.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function C(){const n=JSON.stringify(a,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),u=document.createElement("a");u.href=t,u.download=h.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(t)}return Z(()=>{_.$on("downloadJsonDoc",C),_.$on("changeServer",U),B(),N()}),ee(()=>{_.$off("downloadJsonDoc",C),_.$off("changeServer",U)}),(n,o)=>{const t=W,u=F,S=H,k=V,$=M,G=z,J=X;return m(),te("div",ae,[e(L)&&e(l).info?(m(),v(t,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(d)},null,8,["info","servers","current-locale"])):e(w)&&e(l).components?(m(),v(u,{key:1,components:e(l).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(A)&&e(l).components?(m(),v(S,{key:2,components:e(l).components,"current-locale":e(d)},null,8,["components","current-locale"])):e(p)?(m(),v(k,{key:3,route:e(p),"current-locale":e(d),method:e(r),components:e(l).components,url:e(y),path_doc:e(q),file:e(h),server:e(R),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(m(),v(k,{key:4,route:e(i),"current-locale":e(d),method:e(r),components:e(l).components,url:e(y),path_doc:e(q),file:e(h),server:e(R),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),v($,{key:5})),P(J,null,{default:ne(()=>[P(G,{"current-locale":e(d),doc:e(l),path:e(q),file:e(h)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
