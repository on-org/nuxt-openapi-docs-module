import{_ as W,a as F,b as H,c as V,d as z,e as J}from"./D0W6j26D.js";import{_ as M}from"./CEVRrJuC.js";import{g as X,j as Y,l as K,r as q,m as s,h as Q,n as Z,o as d,c as ee,u as e,q as m,b as I,w as te,s as ne}from"./DPO4xrpJ.js";import{u as oe}from"./C61GI16N.js";import{d as re}from"./CJTVbXnG.js";import"./DrZ4cwoV.js";import"./CZDlII-a.js";const c={openapi:"3.1.0",info:{title:"Event Handling",version:"1.0",description:`<h3>The code demonstrate how some events can be used. Listed below are some common use cases</h3>
<ul>
<li><code>before-render</code> - Good place to twaek the OpenAPI spec if needed. In this example the Title above is dynamically created</li>
<li><code>before-try</code> - Good place to twaek the AJAX request sucha as adding a request header or abort the request</li>
<li><code>after-try</code> - Good place to inspect the response received</li>
</ul>
<h4>To test it out go ahead and click TRY below, you will notice all <code>POST</code> requests are aborted and <code>GET</code> are success <br/><br/></h4>
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
</code></pre>`},servers:[{url:"https://reqres.in/api/"}],paths:{"/users":{get:{description:"List of users (paginated)",parameters:[{name:"page",in:"query",schema:{type:"integer",examples:[1,2]}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",description:`<p>Description of <strong>User</strong> object</p>
`,properties:{page:{description:"Current Page number",type:"integer"},per_page:{description:"Number of records per page",type:"integer"},total:{description:"Total number of records",type:"integer"},total_pages:{type:"integer"},data:{type:"array",description:"List of users",items:"#/components/schemas/user"},support:"#/components/schemas/support"}}}}}},tags:["other"]},post:{description:"Create a user",parameters:[{name:"delay",in:"query",schema:{type:"integer",examples:[1,10]}}],requestBody:{content:{"application/json":{schema:"#/components/schemas/userInput"}}},responses:{201:{description:"User creation response",content:{"application/json":{schema:{allOf:["#/components/schemas/userInput","#/components/schemas/createUserResponse"]}}}}},tags:["other"]}}},components:{schemas:{user:{type:"object",properties:{id:{description:"User ID",type:"integer"},email:{description:"User Email",type:"string"},first_name:{description:"First Name",type:"string"},last_name:{description:"Last Name",type:"string"},avatar:{description:"Avatar URL",type:"string"}}},support:{type:"object",properties:{url:{description:"Support URL",type:"string"},text:{description:"Support URL - Description",type:"string"}}},userInput:{type:"object",description:"user object with `name` and `job` properties",properties:{name:{description:"User Name",type:"string"},job:{description:"Job",type:"string"}}},createUserResponse:{type:"object",properties:{id:{type:"integer"},createdAt:{type:"string"}}}}},tags:{}},se={class:"content-container"},ve=X({__name:"events",setup(ae){const v=Y(),R=K(),{$openapidoc:h,$openapidocBus:L,$openapidocRef:f}=ne(),g=q(""),T=q(0),_=q((re.path??"").toString()),l=q(c??{}),y=s(()=>"events"),r=s(()=>v.params.type.toString()),w=s(()=>(v.params.mathod??"default").toString()),S=s(()=>r.value==="info"),E=s(()=>r.value==="auth"),A=s(()=>r.value==="components"),p=s(()=>h.currentLocale());f.setComponents(c.components),f.setDefinitions(c.definitions),f.setDocPath(_.value),f.setFile(y.value);const a=s(()=>{const t={...c.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===w.value)return g.value=o.toString(),t[o]??null}return null}),i=s(()=>{const t={...c.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===w.value)return g.value=o.toString(),t[o][r.value]??null}return null}),u=s(()=>a.value?a.value[r.value]??null:null),j=s(()=>a.value?a.value.parameters??null:null),U=s(()=>{const t=h.currentLocale()??"";return S.value?"[events] - Info Docs":E.value?"[events] - Authorization":A.value?"[events] - Components Docs":u.value?"[events] - "+(u.value["x-summary-"+t.value]||u.value.summary||""):""}),D=s(()=>{const t=h.currentLocale()??"";return S.value?"[events] - Info Docs":E.value?"[events] - Authorization":A.value?"[events] - Components Docs":u.value&&(u.value["x-description-"+t.value]||u.value.description)||""});oe({title:U.value,meta:[{name:"description",content:D.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const P=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}let t=T.value;if(t>0&&c.servers&&!c.servers[t]&&(t=0),!c.servers||!c.servers[t])return"";if(c.servers[t].variables){const o=Object.values(c.servers[t].variables)??[];if(o&&o.length)return o[0].default}return c.servers[t].url??""});function C(t){T.value=t}function O(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",k=>{const b=n.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+b;h.copyToClipboard(x,k,!1),R.push({path:v.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function N(){if(v.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Q(()=>{L.$on("changeServer",C),N(),O()}),Z(()=>{L.$off("changeServer",C)}),(t,o)=>{const n=W,k=F,b=H,x=V,B=J,G=z,$=M;return d(),ee("div",se,[e(S)&&e(l).info?(d(),m(n,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(E)&&e(l).components?(d(),m(k,{key:1,components:e(l).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(A)&&e(l).components?(d(),m(b,{key:2,components:e(l).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(u)?(d(),m(x,{key:3,route:e(u),"current-locale":e(p),method:e(r),components:e(l).components,url:e(g),path_doc:e(_),file:e(y),server:e(P),"sub-params":e(j)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(d(),m(x,{key:4,route:e(i),"current-locale":e(p),method:e(r),components:e(l).components,url:e(g),path_doc:e(_),file:e(y),server:e(P),"sub-params":e(j)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),m(B,{key:5})),I($,null,{default:te(()=>[I(G,{"current-locale":e(p),doc:e(l),path:e(_),file:e(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ve as default};
