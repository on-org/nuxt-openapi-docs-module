import{_ as y,a as k,b as x,c as b,d as w}from"./OpenApiMainContent.4ef5cd41.js";import{a as M,z as v,M as L,b as l,h as i,w as o,e as r,o as s,c as p,j as a,T as c,N as O,G as T}from"./entry.7023a70d.js";import"./nuxt-link.8de9ea58.js";import"./helpers.75b0c43c.js";const D=!0,H=!1,I={name:"openapi-docs",setup(){{const n="markdown",{$openapidoc:d}=v();if(!d.hasAccess(n))throw L({statusCode:404,message:"page not found"})}},async fetch(){try{this.$openapidoc.hasAccess(this.file)||this.$nuxt.context.error({status:404,message:"page not found"})}catch(n){console.error(n)}},created(){this&&this.$fetch&&this.$fetch()},watch:{"$route.meta":{handler:function(n){this.currentLocale=n.locale},deep:!0},$route:{handler:function(n){this.isMobile&&(this.isMenuOpen=!1)},deep:!0}},data(){return{pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/markdown",path:"markdown",type:"get",description:`Endpoint to create and initiate a pipeline.

### Paragraph
In a hole in the ground there lived a hobbit. Not a **nasty**, _dirty_, \`wet\` hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.


### Horizontal Rule \`---\`
---

### Number List
1. Install \`node\`.
2. Install \`npm\`.
3. Open your editor
4. Create a JavaScript file

### Blockquotes
> This is a sample OpenAPI spec to test the parsing of various markdown styles
> (RapiDoc supports common-mark syntax)

### Buleted List
- Install \`node\`.
- Install \`npm\`.
- Open you editor
- Create a JavaScript file

### Table
| Heading 1 | Left-Justified | Centered | Right-Justified |
| --------- | :------------- | :------: | --------------: |
| text | text | text | text |
| text | text | text | text |
| text | text | text | text |

### Code
\`\`\`
$ curl -X POST -is -u username:password
  -H "Content-Type: application/json" https://example.com
  -d '{
  "target": {
    "ref_type": "branch",
    "type": "pipeline_ref_target",
    "ref_name": "master"
  }'
}
\`\`\`
### Code (with syntax highlight)
\`\`\`bash
$ curl -X POST -is -u username:password
  -H "Content-Type: application/json" https://example.com
  -d '{
  "target": {
    "ref_type": "branch",
    "type": "pipeline_ref_target",
    "ref_name": "master"
  }'
}
\`\`\`

### Use HTML in markdown
<br>
<div style="color: white; background-color:SlateBlue; padding: 12px; border-radius:2px">
  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.
  This box I designed using raw HTML inside the markdown
</div>
<br>
<div style="color:#bbb; background-color:#444; padding: 12px 0px 12px 12px;border-left: 5px solid #F06560;">
  <b style="color:#F06560">TIP</b>  Here is another one, done using HTML inside markdown with two different colors to make it appear like a TIP
</div>
<br>


### Images
Inline Images no-gap - ![appspot image filler](https://picsum.photos/100)![appspot image filler](https://picsum.photos/100)

Inline Images Single space gap - ![appspot image filler](https://picsum.photos/100)
![appspot image filler](https://picsum.photos/00)

Next Line Image

![appspot image filler](https://picsum.photos/140x100.png)
`}]}},files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"},path_doc:"docs",locales:{en:"English"},name:"Api Docs",isMenuOpen:!0,isMobile:!1,currentLocale:"en",file:"markdown",isDarkMode:!1}},computed:{footer(){return this.$openapidoc.getFooter()},logo(){return this.$openapidoc.getLogo().replace(":name",this.name)},isVue2(){return H},isVue3(){return D}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("isDarkMode",this.isDarkMode),this.isDarkMode?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")},handleResize(){this.isDesktop=window.innerWidth>=639,this.isMobile=window.innerWidth<639,!this.isDesktop&&this.isMenuOpen&&(this.isMenuOpen=!1),this.isDesktop&&(this.isMenuOpen=!0)}},mounted(){this.isMobile=window.innerWidth<639,this.isMenuOpen=window.innerWidth>639,window.addEventListener("resize",this.handleResize),this.isDarkMode=localStorage.getItem("isDarkMode")==="true",this.isDarkMode&&document.querySelector("html").classList.add("dark")},unmounted(){window.removeEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)}},z={class:"flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75"},C=["innerHTML"],N={slot:"button"},S={class:"flex flex-1 overflow-hidden"},A={key:0},V={key:2,class:"fixed w-full bg-gray-900 py-8"},B=["innerHTML"];function q(n,d,E,P,e,t){const u=b,m=y,h=w,f=k,g=T("Nuxt"),_=x;return s(),l("div",z,[i(m,{isMenuOpen:e.isMenuOpen,onToggleMenu:t.toggleMenu,class:"bg-blue dark:bg-blue"},{logo:o(()=>[r("span",{innerHTML:t.logo},null,8,C)]),default:o(()=>[r("div",N,[i(u,{"current-locale":e.currentLocale,files:e.files,locales:e.locales,file:e.file,path:e.path_doc,"is-dark-mode":e.isDarkMode,onToggleDarkMode:t.toggleDarkMode},null,8,["current-locale","files","locales","file","path","is-dark-mode","onToggleDarkMode"])])]),_:1},8,["isMenuOpen","onToggleMenu"]),r("div",S,[i(f,{isMenuOpen:e.isMenuOpen,isMobile:e.isMobile},{default:o(()=>[i(h,{routes:e.pathsByTags,"current-locale":e.currentLocale,file:e.file,path:e.path_doc,files:e.files,locales:e.locales},null,8,["routes","current-locale","file","path","files","locales"])]),_:1},8,["isMenuOpen","isMobile"]),i(_,{style:{"padding-bottom":"4rem"}},{default:o(()=>[t.isVue2?(s(),p(c,{key:0,name:"fade",tag:"div"},{default:o(()=>[t.isVue2?(s(),p(g,{key:0})):a("",!0)]),_:1})):a("",!0),t.isVue3?(s(),p(c,{key:1,name:"fade",tag:"div"},{default:o(()=>[t.isVue3?(s(),l("div",A,[t.isVue3?O(n.$slots,"default",{key:0}):a("",!0)])):a("",!0)]),_:3})):a("",!0),t.footer?(s(),l("footer",V,[r("div",{class:"container mx-auto flex justify-between bg-gray-100 text-gray-800 border-t border-gray-700 dark:bg-slate dark:text-gray-300/75",innerHTML:t.footer},null,8,B)])):a("",!0)]),_:3})])])}const F=M(I,[["render",q]]);export{F as default};
