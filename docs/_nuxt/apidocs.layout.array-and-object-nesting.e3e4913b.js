import{_,a as b,b as M,c as k,d as x}from"./OpenApiMainContent.7d8016a9.js";import{a as v,z as w,M as O,b as l,h as r,w as o,e as i,o as s,c,j as n,T as p,N as D,G as L}from"./entry.1ce51ac4.js";import"./nuxt-link.0cc91d56.js";import"./helpers.75b0c43c.js";const j=!0,A=!1,T={name:"openapi-docs",setup(){{const a="array-and-object-nesting",{$openapidoc:d}=w();if(!d.hasAccess(a))throw O({statusCode:404,message:"page not found"})}},async fetch(){try{this.$openapidoc.hasAccess(this.file)||this.$nuxt.context.error({status:404,message:"page not found"})}catch(a){console.error(a)}},created(){this&&this.$fetch&&this.$fetch()},watch:{"$route.meta":{handler:function(a){this.currentLocale=a.locale},deep:!0},$route:{handler:function(a){this.isMobile&&(this.isMenuOpen=!1)},deep:!0}},data(){return{pathsByTags:{"Array and object nesting":{name:"Array and object nesting",description:"",isOpen:!0,items:[{name:"/object-as-root",path:"object-as-root",type:"get",description:null},{name:"/array-of-object",path:"array-of-object",type:"get",description:null},{name:"/array-of-array",path:"array-of-array",type:"get",description:null},{name:"/array-of-array-of-primitive",path:"array-of-array-of-primitive",type:"get",description:null},{name:"/array-of-array-3-levels",path:"array-of-array-3-levels",type:"get",description:null},{name:"/array-of-array-4-levels",path:"array-of-array-4-levels",type:"get",description:null},{name:"/object-containing-array",path:"object-containing-array",type:"get",description:null},{name:"/array-of-premitives",path:"array-of-premitives",type:"get",description:null}]}},files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"},path_doc:"docs",locales:{en:"English"},name:"Api Docs",isMenuOpen:!0,isMobile:!1,currentLocale:"en",file:"array-and-object-nesting",isDarkMode:!1}},computed:{footer(){return this.$openapidoc.getFooter()},logo(){return this.$openapidoc.getLogo().replace(":name",this.name)},isVue2(){return A},isVue3(){return j}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("isDarkMode",this.isDarkMode),this.isDarkMode?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")},handleResize(){this.isDesktop=window.innerWidth>=639,this.isMobile=window.innerWidth<639,!this.isDesktop&&this.isMenuOpen&&(this.isMenuOpen=!1),this.isDesktop&&(this.isMenuOpen=!0)}},mounted(){this.isMobile=window.innerWidth<639,this.isMenuOpen=window.innerWidth>639,window.addEventListener("resize",this.handleResize),this.isDarkMode=localStorage.getItem("isDarkMode")==="true",this.isDarkMode&&document.querySelector("html").classList.add("dark")},unmounted(){window.removeEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)}},N={class:"flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75"},z=["innerHTML"],V={slot:"button"},q={class:"flex flex-1 overflow-hidden"},E={key:0},B={key:2,class:"fixed w-full bg-gray-900 py-8"},H=["innerHTML"];function S(a,d,C,R,e,t){const u=k,m=_,h=x,f=b,y=L("Nuxt"),g=M;return s(),l("div",N,[r(m,{isMenuOpen:e.isMenuOpen,onToggleMenu:t.toggleMenu,class:"bg-blue dark:bg-blue"},{logo:o(()=>[i("span",{innerHTML:t.logo},null,8,z)]),default:o(()=>[i("div",V,[r(u,{"current-locale":e.currentLocale,files:e.files,locales:e.locales,file:e.file,path:e.path_doc,"is-dark-mode":e.isDarkMode,onToggleDarkMode:t.toggleDarkMode},null,8,["current-locale","files","locales","file","path","is-dark-mode","onToggleDarkMode"])])]),_:1},8,["isMenuOpen","onToggleMenu"]),i("div",q,[r(f,{isMenuOpen:e.isMenuOpen,isMobile:e.isMobile},{default:o(()=>[r(h,{routes:e.pathsByTags,"current-locale":e.currentLocale,file:e.file,path:e.path_doc,files:e.files,locales:e.locales},null,8,["routes","current-locale","file","path","files","locales"])]),_:1},8,["isMenuOpen","isMobile"]),r(g,{style:{"padding-bottom":"4rem"}},{default:o(()=>[t.isVue2?(s(),c(p,{key:0,name:"fade",tag:"div"},{default:o(()=>[t.isVue2?(s(),c(y,{key:0})):n("",!0)]),_:1})):n("",!0),t.isVue3?(s(),c(p,{key:1,name:"fade",tag:"div"},{default:o(()=>[t.isVue3?(s(),l("div",E,[t.isVue3?D(a.$slots,"default",{key:0}):n("",!0)])):n("",!0)]),_:3})):n("",!0),t.footer?(s(),l("footer",B,[i("div",{class:"container mx-auto flex justify-between bg-gray-100 text-gray-800 border-t border-gray-700 dark:bg-slate dark:text-gray-300/75",innerHTML:t.footer},null,8,H)])):n("",!0)]),_:3})])])}const P=v(T,[["render",S]]);export{P as default};