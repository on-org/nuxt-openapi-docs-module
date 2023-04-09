import{_,a as M,b,c as k,d as x}from"./OpenApiMainContent.4ef5cd41.js";import{a as v,z as w,M as O,b as l,h as i,w as s,e as r,o as n,c as p,j as a,T as c,N as D,G as L}from"./entry.7023a70d.js";import"./nuxt-link.8de9ea58.js";import"./helpers.75b0c43c.js";const q=!0,T=!1,z={name:"openapi-docs",setup(){{const o="file-upload",{$openapidoc:d}=w();if(!d.hasAccess(o))throw O({statusCode:404,message:"page not found"})}},async fetch(){try{this.$openapidoc.hasAccess(this.file)||this.$nuxt.context.error({status:404,message:"page not found"})}catch(o){console.error(o)}},created(){this&&this.$fetch&&this.$fetch()},watch:{"$route.meta":{handler:function(o){this.currentLocale=o.locale},deep:!0},$route:{handler:function(o){this.isMobile&&(this.isMenuOpen=!1)},deep:!0}},data(){return{pathsByTags:{"File Upload":{name:"File Upload",description:"",isOpen:!0,items:[{name:"/upload-single-file",path:"upload-single-file",type:"post",description:`\`\`\`yaml
/upload-single-file:
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
\`\`\`
`},{name:"/upload-multiple-file",path:"upload-multiple-file",type:"post",description:`\`\`\`yaml
/upload-multiple-file:
  post:
    summary: Uploads multiple file using form-data and type as 'array'
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
\`\`\`
`},{name:"/upload-using-request-body",path:"upload-using-request-body",type:"post",description:`\`\`\`yaml
/upload-using-request-body:
  post:
    summary: Uploads single file using request-body content-type as application/octet-stream
    requestBody:
      content:
        application/octet-stream:
          schema:
            type: string
            format: binary
\`\`\`
`}]}},files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"},path_doc:"docs",locales:{en:"English"},name:"Api Docs",isMenuOpen:!0,isMobile:!1,currentLocale:"en",file:"file-upload",isDarkMode:!1}},computed:{footer(){return this.$openapidoc.getFooter()},logo(){return this.$openapidoc.getLogo().replace(":name",this.name)},isVue2(){return T},isVue3(){return q}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("isDarkMode",this.isDarkMode),this.isDarkMode?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")},handleResize(){this.isDesktop=window.innerWidth>=639,this.isMobile=window.innerWidth<639,!this.isDesktop&&this.isMenuOpen&&(this.isMenuOpen=!1),this.isDesktop&&(this.isMenuOpen=!0)}},mounted(){this.isMobile=window.innerWidth<639,this.isMenuOpen=window.innerWidth>639,window.addEventListener("resize",this.handleResize),this.isDarkMode=localStorage.getItem("isDarkMode")==="true",this.isDarkMode&&document.querySelector("html").classList.add("dark")},unmounted(){window.removeEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)}},A={class:"flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75"},V=["innerHTML"],B={slot:"button"},N={class:"flex flex-1 overflow-hidden"},E={key:0},U={key:2,class:"fixed w-full bg-gray-900 py-8"},j=["innerHTML"];function H(o,d,S,C,e,t){const u=k,m=_,f=x,h=M,y=L("Nuxt"),g=b;return n(),l("div",A,[i(m,{isMenuOpen:e.isMenuOpen,onToggleMenu:t.toggleMenu,class:"bg-blue dark:bg-blue"},{logo:s(()=>[r("span",{innerHTML:t.logo},null,8,V)]),default:s(()=>[r("div",B,[i(u,{"current-locale":e.currentLocale,files:e.files,locales:e.locales,file:e.file,path:e.path_doc,"is-dark-mode":e.isDarkMode,onToggleDarkMode:t.toggleDarkMode},null,8,["current-locale","files","locales","file","path","is-dark-mode","onToggleDarkMode"])])]),_:1},8,["isMenuOpen","onToggleMenu"]),r("div",N,[i(h,{isMenuOpen:e.isMenuOpen,isMobile:e.isMobile},{default:s(()=>[i(f,{routes:e.pathsByTags,"current-locale":e.currentLocale,file:e.file,path:e.path_doc,files:e.files,locales:e.locales},null,8,["routes","current-locale","file","path","files","locales"])]),_:1},8,["isMenuOpen","isMobile"]),i(g,{style:{"padding-bottom":"4rem"}},{default:s(()=>[t.isVue2?(n(),p(c,{key:0,name:"fade",tag:"div"},{default:s(()=>[t.isVue2?(n(),p(y,{key:0})):a("",!0)]),_:1})):a("",!0),t.isVue3?(n(),p(c,{key:1,name:"fade",tag:"div"},{default:s(()=>[t.isVue3?(n(),l("div",E,[t.isVue3?D(o.$slots,"default",{key:0}):a("",!0)])):a("",!0)]),_:3})):a("",!0),t.footer?(n(),l("footer",U,[r("div",{class:"container mx-auto flex justify-between bg-gray-100 text-gray-800 border-t border-gray-700 dark:bg-slate dark:text-gray-300/75",innerHTML:t.footer},null,8,j)])):a("",!0)]),_:3})])])}const G=v(z,[["render",H]]);export{G as default};
