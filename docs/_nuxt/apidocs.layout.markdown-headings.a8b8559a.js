import{_ as y,a as k,b,c as M,d as x}from"./OpenApiMainContent.0d7c24a1.js";import{a as w,z as v,M as O,b as l,h as i,w as n,e as r,o as s,c as d,j as a,T as p,N as D,G as L}from"./entry.c6e65efe.js";import"./nuxt-link.bce30875.js";import"./helpers.75b0c43c.js";const T=!0,A=!1,H={name:"openapi-docs",setup(){{const o="markdown-headings",{$openapidoc:c}=v();if(!c.hasAccess(o))throw O({statusCode:404,message:"page not found"})}},async fetch(){try{this.$openapidoc.hasAccess(this.file)||this.$nuxt.context.error({status:404,message:"page not found"})}catch(o){console.error(o)}},created(){this&&this.$fetch&&this.$fetch()},watch:{"$route.meta":{handler:function(o){this.currentLocale=o.locale},deep:!0},$route:{handler:function(o){this.isMobile&&(this.isMenuOpen=!1)},deep:!0}},data(){return{pathsByTags:{Employees:{name:"Employees",description:`<p>Markdown headings can contain HTML as well as complex markdown</p>
<br>
<div style="background-color: #F0F0F0;padding: 12px 0px 12px 12px;border-left: 5px solid #F90258;">
  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.
  This TIP box i designed using raw HTML inside the markdown
</div>  
<br>

<h1 id="the-employee-object">The Employee Object</h1>
<p>Responses from the <code>/employees</code> endpoint are encoded as UTF-8 JSON objects with the following attributes:</p>
<table>
<thead>
<tr>
<th align="right">Attribute</th>
<th>Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody><tr>
<td align="right"><code>id</code></td>
<td>string</td>
<td align="left">A globally unique identifier.</td>
</tr>
<tr>
<td align="right"><code>account_id</code></td>
<td>string</td>
<td align="left">Reference to a parent account object.</td>
</tr>
<tr>
<td align="right"><code>thread_id</code></td>
<td>string</td>
<td align="left">Reference to a parent thread object (all messages have a thread).</td>
</tr>
<tr>
<td align="right"><code>tags</code></td>
<td>array</td>
<td align="left">A list of labels that you like to associate with an employee</td>
</tr>
</tbody></table>
`,isOpen:!0,items:[{name:"/employees",path:"employees",type:"get",description:null}]}},files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"},path_doc:"docs",locales:{en:"English"},name:"Api Docs",isMenuOpen:!0,isMobile:!1,currentLocale:"en",file:"markdown-headings",isDarkMode:!1}},computed:{footer(){return this.$openapidoc.getFooter()},logo(){return this.$openapidoc.getLogo().replace(":name",this.name)},isVue2(){return A},isVue3(){return T}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("isDarkMode",this.isDarkMode),this.isDarkMode?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")},handleResize(){this.isDesktop=window.innerWidth>=639,this.isMobile=window.innerWidth<639,!this.isDesktop&&this.isMenuOpen&&(this.isMenuOpen=!1),this.isDesktop&&(this.isMenuOpen=!0)}},mounted(){this.isMobile=window.innerWidth<639,this.isMenuOpen=window.innerWidth>639,window.addEventListener("resize",this.handleResize),this.isDarkMode=localStorage.getItem("isDarkMode")==="true",this.isDarkMode&&document.querySelector("html").classList.add("dark")},unmounted(){window.removeEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)}},z={class:"flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75"},E=["innerHTML"],N={slot:"button"},V={class:"flex flex-1 overflow-hidden"},j={key:0},q={key:2,class:"fixed w-full bg-gray-900 py-8"},R=["innerHTML"];function S(o,c,B,F,e,t){const u=M,h=y,m=x,f=k,g=L("Nuxt"),_=b;return s(),l("div",z,[i(h,{isMenuOpen:e.isMenuOpen,onToggleMenu:t.toggleMenu,class:"bg-blue dark:bg-blue"},{logo:n(()=>[r("span",{innerHTML:t.logo},null,8,E)]),default:n(()=>[r("div",N,[i(u,{"current-locale":e.currentLocale,files:e.files,locales:e.locales,file:e.file,path:e.path_doc,"is-dark-mode":e.isDarkMode,onToggleDarkMode:t.toggleDarkMode},null,8,["current-locale","files","locales","file","path","is-dark-mode","onToggleDarkMode"])])]),_:1},8,["isMenuOpen","onToggleMenu"]),r("div",V,[i(f,{isMenuOpen:e.isMenuOpen,isMobile:e.isMobile},{default:n(()=>[i(m,{routes:e.pathsByTags,"current-locale":e.currentLocale,file:e.file,path:e.path_doc,files:e.files,locales:e.locales},null,8,["routes","current-locale","file","path","files","locales"])]),_:1},8,["isMenuOpen","isMobile"]),i(_,{style:{"padding-bottom":"4rem"}},{default:n(()=>[t.isVue2?(s(),d(p,{key:0,name:"fade",tag:"div"},{default:n(()=>[t.isVue2?(s(),d(g,{key:0})):a("",!0)]),_:1})):a("",!0),t.isVue3?(s(),d(p,{key:1,name:"fade",tag:"div"},{default:n(()=>[t.isVue3?(s(),l("div",j,[t.isVue3?D(o.$slots,"default",{key:0}):a("",!0)])):a("",!0)]),_:3})):a("",!0),t.footer?(s(),l("footer",q,[r("div",{class:"container mx-auto flex justify-between bg-gray-100 text-gray-800 border-t border-gray-700 dark:bg-slate dark:text-gray-300/75",innerHTML:t.footer},null,8,R)])):a("",!0)]),_:3})])])}const G=w(H,[["render",S]]);export{G as default};
