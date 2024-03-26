import{_ as T,a as V,b as z,c as K,d as H,e as M}from"./C4aTQ1ik.js";import{_ as G}from"./7ewQVEGD.js";import{f as Q,h as X,j as Y,r as x,k as s,g as Z,l as ee,c as te,u as e,m as f,b as D,w as ne,n as oe,o as d}from"./Uw59YdHJ.js";import{u as re}from"./Dayx65lQ.js";import{d as se}from"./BreU9qJo.js";import"./lR3_jA5D.js";import"./DZOCZtjG.js";const a={openapi:"3.0.0",info:{title:"Various ways to upload files (binary content)",version:"1.0.0"},paths:{"/upload-single-file":{post:{tags:["File Upload"],summary:"Uploads single file using form-data",description:`<pre><code class="language-yaml">/upload-single-file:
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
`,requestBody:{content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"successful operation"}}}}},tags:{}},ae={class:"content-container"},ve=Q({__name:"file-upload",setup(le){const h=X(),P=Y(),{$openapidoc:_,$openapidocBus:y,$openapidocRef:g}=oe(),b=x(""),B=x(0),k=x(se.path.toString()),u=x(a??{}),v=s(()=>"file-upload"),r=s(()=>h.params.type.toString()),C=s(()=>(h.params.mathod??"default").toString()),U=s(()=>r.value==="info"),q=s(()=>r.value==="auth"),A=s(()=>r.value==="components"),m=s(()=>_.currentLocale());g.setComponents(a.components),g.setDefinitions(a.definitions),g.setDocPath(k.value),g.setFile(v.value);const l=s(()=>{const n={...a.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===C.value)return b.value=o.toString(),n[o]??null}return null}),c=s(()=>{const n={...a.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===C.value)return b.value=o.toString(),n[o][r.value]??null}return null}),p=s(()=>l.value?l.value[r.value]??null:null),j=s(()=>l.value?l.value.parameters??null:null),$=s(()=>{const n=_.currentLocale()??"";return U.value?"[file-upload] - Info Docs":q.value?"[file-upload] - Authorization":A.value?"[file-upload] - Components Docs":p.value?"[file-upload] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),I=s(()=>{const n=_.currentLocale()??"";return U.value?"[file-upload] - Info Docs":q.value?"[file-upload] - Authorization":A.value?"[file-upload] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});re({title:$.value,meta:[{name:"description",content:I.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let n=B.value;if(n>0&&a.servers&&!a.servers[n]&&(n=0),!a.servers||!a.servers[n])return"";if(a.servers[n].variables){const o=Object.values(a.servers[n].variables)??[];if(o&&o.length)return o[0].default}return a.servers[n].url??""});function L(n){B.value=n}function F(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",i=>{const S=t.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+S;_.copyToClipboard(w,i,!1),P.push({path:h.path,hash:"#"+S}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function N(){if(h.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function R(){const n=JSON.stringify(a,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),i=document.createElement("a");i.href=t,i.download=v.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}return Z(()=>{y.$on("downloadJsonDoc",R),y.$on("changeServer",L),N(),F()}),ee(()=>{y.$off("downloadJsonDoc",R),y.$off("changeServer",L)}),(n,o)=>{const t=T,i=V,S=z,w=K,W=M,E=H,J=G;return d(),te("div",ae,[e(U)&&e(u).info?(d(),f(t,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(q)&&e(u).components?(d(),f(i,{key:1,components:e(u).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(A)&&e(u).components?(d(),f(S,{key:2,components:e(u).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(p)?(d(),f(w,{key:3,route:e(p),"current-locale":e(m),method:e(r),components:e(u).components,url:e(b),path_doc:e(k),file:e(v),server:e(O),"sub-params":e(j)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(d(),f(w,{key:4,route:e(c),"current-locale":e(m),method:e(r),components:e(u).components,url:e(b),path_doc:e(k),file:e(v),server:e(O),"sub-params":e(j)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),f(W,{key:5})),D(J,null,{default:ne(()=>[D(E,{"current-locale":e(m),doc:e(u),path:e(k),file:e(v)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ve as default};
