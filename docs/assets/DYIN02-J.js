import{_ as E,a as V,b as z,c as K,d as H,e as M}from"./BdpLcoxu.js";import{_ as G}from"./BXvlvvPw.js";import{f as J,h as Q,j as X,r as S,k as s,g as Y,l as Z,c as ee,u as e,m as d,b as D,w as te,n as ne,o as m}from"./qEcSDZDN.js";import{u as oe}from"./Nl5E_vvB.js";import{d as re}from"./BreU9qJo.js";import"./DwPOiaZ-.js";import"./BykPuthJ.js";const l={openapi:"3.0.0",info:{title:"Various ways to upload files (binary content)",version:"1.0.0"},paths:{"/upload-single-file":{post:{tags:["File Upload"],summary:"Uploads single file using form-data",description:`<pre><code class="language-yaml">/upload-single-file:
  post:
    summary: Uploads single file using form-data
    requestBody:
      content:
        multipart/form-data:
          schema:
            type: object
            properties:
              filename:
                type: string
                format: binary      
</code></pre>
`,requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{name:{type:"string"},photo:{type:"string",format:"binary"}}}}}},responses:{200:{summary:"OK"}}}},"/upload-multiple-file":{post:{tags:["File Upload"],summary:"Uploads multiple file using form-data and type as &#x27;array&#x27;",description:`<pre><code class="language-yaml">/upload-multiple-file:
  post:
    summary: Uploads multiple file using form-data and type as &#39;array&#39;
    requestBody:
      content:
        multipart/form-data:
          schema:
            type: object
            properties:
              filename:
                type: array
                items:
                  type: string
                  format: binary      
</code></pre>
`,requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{name:{type:"string"},picture:{type:"array",items:{type:"string",format:"binary"}}}}}}},responses:{200:{description:"OK"}}}},"/upload-using-request-body":{post:{tags:["File Upload"],summary:"Uploads single file using request-body content-type as application/octet-stream",description:`<pre><code class="language-yaml">/upload-using-request-body:
  post:
    summary: Uploads single file using request-body content-type as application/octet-stream
    requestBody:
      content:
        application/octet-stream:
          schema:
            type: string
            format: binary
</code></pre>
`,requestBody:{content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"successful operation"}}}}},tags:{}},se={class:"content-container"},fe=J({__name:"file-upload",setup(ae){const f=Q(),I=X(),{$openapidoc:v,$openapidocBus:w,$openapidocRef:_}=ne(),h=S(""),C=S(0),y=S((re.path??"").toString()),u=S(l??{}),g=s(()=>"file-upload"),r=s(()=>f.params.type.toString()),U=s(()=>(f.params.mathod??"default").toString()),x=s(()=>r.value==="info"),q=s(()=>r.value==="auth"),A=s(()=>r.value==="components"),p=s(()=>v.currentLocale());_.setComponents(l.components),_.setDefinitions(l.definitions),_.setDocPath(y.value),_.setFile(g.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===U.value)return h.value=o.toString(),t[o]??null}return null}),i=s(()=>{const t={...l.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===U.value)return h.value=o.toString(),t[o][r.value]??null}return null}),c=s(()=>a.value?a.value[r.value]??null:null),P=s(()=>a.value?a.value.parameters??null:null),$=s(()=>{const t=v.currentLocale()??"";return x.value?"[file-upload] - Info Docs":q.value?"[file-upload] - Authorization":A.value?"[file-upload] - Components Docs":c.value?"[file-upload] - "+(c.value["x-summary-"+t.value]||c.value.summary||""):""}),F=s(()=>{const t=v.currentLocale()??"";return x.value?"[file-upload] - Info Docs":q.value?"[file-upload] - Authorization":A.value?"[file-upload] - Components Docs":c.value&&(c.value["x-description-"+t.value]||c.value.description)||""});oe({title:$.value,meta:[{name:"description",content:F.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}let t=C.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const o=Object.values(l.servers[t].variables)??[];if(o&&o.length)return o[0].default}return l.servers[t].url??""});function j(t){C.value=t}function L(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",B=>{const b=n.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+b;v.copyToClipboard(k,B,!1),I.push({path:f.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function R(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{w.$on("changeServer",j),R(),L()}),Z(()=>{w.$off("changeServer",j)}),(t,o)=>{const n=E,B=V,b=z,k=K,W=M,N=H,T=G;return m(),ee("div",se,[e(x)&&e(u).info?(m(),d(n,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(q)&&e(u).components?(m(),d(B,{key:1,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(A)&&e(u).components?(m(),d(b,{key:2,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(m(),d(k,{key:3,route:e(c),"current-locale":e(p),method:e(r),components:e(u).components,url:e(h),path_doc:e(y),file:e(g),server:e(O),"sub-params":e(P)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(m(),d(k,{key:4,route:e(i),"current-locale":e(p),method:e(r),components:e(u).components,url:e(h),path_doc:e(y),file:e(g),server:e(O),"sub-params":e(P)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),d(W,{key:5})),D(T,null,{default:te(()=>[D(N,{"current-locale":e(p),doc:e(u),path:e(y),file:e(g)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
