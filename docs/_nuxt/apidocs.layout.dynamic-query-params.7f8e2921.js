import{_,a as M,b as k,c as b,d as x}from"./OpenApiMainContent.59567f0e.js";import{a as w,z as v,M as q,b as l,h as r,w as a,e as i,o as s,c as p,j as o,T as d,N as L,G as O}from"./entry.a7680423.js";import"./nuxt-link.859f6161.js";import"./helpers.75b0c43c.js";const D=!0,A=!1,V={name:"openapi-docs",setup(){{const t="dynamic-query-params",{$openapidoc:c}=v();if(!c.hasAccess(t))throw q({statusCode:404,message:"page not found"})}},async fetch(){try{this.$openapidoc.hasAccess(this.file)||this.$nuxt.context.error({status:404,message:"page not found"})}catch(t){console.error(t)}},created(){this&&this.$fetch&&this.$fetch()},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale},deep:!0},$route:{handler:function(t){this.isMobile&&(this.isMenuOpen=!1)},deep:!0}},data(){return{pathsByTags:{"Query Params":{name:"Query Params",description:"",isOpen:!0,items:[{name:"/dynamic-query-params",path:"dynamic-query-params",type:"get",description:`Following OpenAPI spec demonstrate various ways to pass query params.
  - you may pass predefined query params
  - you may create dynamic query params by defining a query-param as an object,
    in that case each key of the object will be treated as a seperate param
  - Array serialization depends on \`style\` and \`explode\` property

\`\`\`yaml
 openapi: 3.0.0
  info:
    title:  Dynamic Query Params
    version: 1.0.0
  paths:
    /dynamic-query-params:
      get:
        tags:
          - Query Params
        summary:  Various ways to pass query params
        parameters:
          - name: limit
            in: query
            schema:
              type: integer
          - name: fruits
            in: query
            style: form
            explode: false
            schema:
              type: array
              items:
                type: string
          - name: colors
            in: query
            schema:
              type: array
              items:
                type: string
          - in: query
            name: dynamic-query-params1
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params2
            style: form
            explode: false
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params3
            style: pipeDelimited
            explode: false
            schema:
              type: object
              additionalProperties: {}
          - in: query
            name: dynamic-query-params4
            content:
              "application/json":
                schema:
                  type: object
                  properties:
                    someProperty:
                      type: string
                  additionalProperties:
                  type: string
          - in: query
            name: dynamic-query-params5
            explode: false
            required: false
            schema:
              type: object
              properties:
                propertyOne:
                  type: string
                  enum:
                    - VALUE-1
                    - VALUE-2
                  default: VALUE-2
                propertyTwo:
                  type: string
                  enum:
                    - FLAG-1
                    - FLAG-2
                  default: FLAG-1
        responses:
          '200':
            description: successful operation
  \`\`\`
`}]}},files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"},path_doc:"docs",locales:{en:"English"},name:"Api Docs",isMenuOpen:!0,isMobile:!1,currentLocale:"en",file:"dynamic-query-params",isDarkMode:!1}},computed:{footer(){return this.$openapidoc.getFooter()},logo(){return this.$openapidoc.getLogo().replace(":name",this.name)},isVue2(){return A},isVue3(){return D}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("isDarkMode",this.isDarkMode),this.isDarkMode?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")},handleResize(){this.isDesktop=window.innerWidth>=639,this.isMobile=window.innerWidth<639,!this.isDesktop&&this.isMenuOpen&&(this.isMenuOpen=!1),this.isDesktop&&(this.isMenuOpen=!0)}},mounted(){this.isMobile=window.innerWidth<639,this.isMenuOpen=window.innerWidth>639,window.addEventListener("resize",this.handleResize),this.isDarkMode=localStorage.getItem("isDarkMode")==="true",this.isDarkMode&&document.querySelector("html").classList.add("dark")},unmounted(){window.removeEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)}},P={class:"flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75"},T=["innerHTML"],j={slot:"button"},z={class:"flex flex-1 overflow-hidden"},E={key:0},N={key:2,class:"fixed w-full bg-gray-900 py-8"},B=["innerHTML"];function H(t,c,Q,S,e,n){const u=b,m=_,y=x,h=M,f=O("Nuxt"),g=k;return s(),l("div",P,[r(m,{isMenuOpen:e.isMenuOpen,onToggleMenu:n.toggleMenu,class:"bg-blue dark:bg-blue"},{logo:a(()=>[i("span",{innerHTML:n.logo},null,8,T)]),default:a(()=>[i("div",j,[r(u,{"current-locale":e.currentLocale,files:e.files,locales:e.locales,file:e.file,path:e.path_doc,"is-dark-mode":e.isDarkMode,onToggleDarkMode:n.toggleDarkMode},null,8,["current-locale","files","locales","file","path","is-dark-mode","onToggleDarkMode"])])]),_:1},8,["isMenuOpen","onToggleMenu"]),i("div",z,[r(h,{isMenuOpen:e.isMenuOpen,isMobile:e.isMobile},{default:a(()=>[r(y,{routes:e.pathsByTags,"current-locale":e.currentLocale,file:e.file,path:e.path_doc,files:e.files,locales:e.locales},null,8,["routes","current-locale","file","path","files","locales"])]),_:1},8,["isMenuOpen","isMobile"]),r(g,{style:{"padding-bottom":"4rem"}},{default:a(()=>[n.isVue2?(s(),p(d,{key:0,name:"fade",tag:"div"},{default:a(()=>[n.isVue2?(s(),p(f,{key:0})):o("",!0)]),_:1})):o("",!0),n.isVue3?(s(),p(d,{key:1,name:"fade",tag:"div"},{default:a(()=>[n.isVue3?(s(),l("div",E,[n.isVue3?L(t.$slots,"default",{key:0}):o("",!0)])):o("",!0)]),_:3})):o("",!0),n.footer?(s(),l("footer",N,[i("div",{class:"container mx-auto flex justify-between bg-gray-100 text-gray-800 border-t border-gray-700 dark:bg-slate dark:text-gray-300/75",innerHTML:n.footer},null,8,B)])):o("",!0)]),_:3})])])}const W=w(V,[["render",H]]);export{W as default};
