import{a as pe,o as S,b as w,e as _,r as yt,p as Ge,f as We,h as Ie,i as I,j as _e,t as N,u as O,k as so,F as ee,l as ae,c as ye,w as ve,m as ie,q as z,s as ao,v as ah,x as Re,y as be,z as oh,A as ih,T as ch,B as lh,C as no}from"./entry.99f3341a.js";import{_ as oo}from"./nuxt-link.18a9272e.js";const uh=E=>(Ge("data-v-380a52ac"),E=E(),We(),E),dh={class:"flex items-center justify-between bg-white text-gray-800 px-4 py-3 sm:px-6 h-16 shadow-md border-b"},ph=uh(()=>_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[_("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),_("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),_("line",{x1:"3",y1:"18",x2:"21",y2:"18"})],-1)),hh=[ph],mh={class:"flex-shrink-0"},fh={class:"flex-shrink-0"},gh={__name:"MainHeader",emits:["toggleMenu"],setup(E,{emit:y}){function v(){y("toggleMenu")}return(q,T)=>(S(),w("header",dh,[_("button",{class:"menu-icon sm:hidden",onClick:v},hh),_("div",mh,[yt(q.$slots,"logo",{},void 0,!0)]),_("div",fh,[yt(q.$slots,"button",{},void 0,!0)])]))}},bh=pe(gh,[["__scopeId","data-v-380a52ac"]]);const _h={__name:"MainLeftMenu",props:{isMenuOpen:{type:Boolean,required:!0},isMobile:{type:Boolean,default(){return[]}}},setup(E){return(y,v)=>!E.isMobile||E.isMenuOpen?(S(),w("aside",{key:0,class:Ie(["left-menu fixed bg-gray-100 text-gray-800 dark:bg-black dark:text-gray-300/75 sm:w-60 p-2 border-r z-10 h-full transition duration-300 transform overflow-y-auto",{"-translate-x-full":!E.isMenuOpen&&E.isMobile,"translate-x-0":E.isMenuOpen&&E.isMobile}])},[yt(y.$slots,"default",{},void 0,!0)],2)):I("",!0)}},yh=pe(_h,[["__scopeId","data-v-cb4b56a1"]]);const vh={},Eh={class:"content flex-1 p-4 dark:bg-black dark:text-gray-300/75"};function Sh(E,y){return S(),w("main",Eh,[yt(E.$slots,"default",{},void 0,!0)])}const wh=pe(vh,[["render",Sh],["__scopeId","data-v-de3a36cd"]]);const kh={class:"relative inline-block"},xh={class:"text-gray-500 dark:text-gray-300/75"},Th={class:"w-4 h-4 ml-2 fill-current dark:fill-white/50",viewBox:"0 0 20 20"},Ch={key:0,d:"M5 8h10l-5 7z"},qh={key:1,d:"M5 12h10l-5-7z"},Nh={key:0,class:"dropdown-menu absolute top-full left-0 z-50 py-2 bg-white rounded-md shadow-lg dark:bg-black dark:text-gray-300/75"},Oh={__name:"CustomDropdown",props:{options:{required:!0},placeholder:{type:String,default:"Select an option"},value:{type:String,default:""},routeFunction:{type:Function,default:()=>{}}},emits:["input"],setup(E,{emit:y}){const v=E;let q=_e(!1),T=v.value;function k(x){T=x,q=!1,y("input",x)}return(x,A)=>{const U=oo;return S(),w("div",kh,[_("div",{class:"dropdown-toggle flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md cursor-pointer",onClick:A[0]||(A[0]=P=>so(q)?q.value=!O(q):q=!O(q))},[_("span",xh,N(v.placeholder??O(T)),1),(S(),w("svg",Th,[O(q)?(S(),w("path",qh)):(S(),w("path",Ch))]))]),O(q)?(S(),w("div",Nh,[(S(!0),w(ee,null,ae(v.options,(P,G)=>(S(),ye(U,{key:G,class:Ie(["dropdown-item px-4 py-2 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-900",{"bg-gray-300 dark:text-gray-900":G===O(T)}]),to:v.routeFunction(G),onClick:J=>k(G)},{default:ve(()=>[yt(x.$slots,"default",{option:P,index:G},()=>[ie(N(P),1)],!0)]),_:2},1032,["class","to","onClick"]))),128))])):I("",!0)])}}},ro=pe(Oh,[["__scopeId","data-v-4ed8195a"]]),Rh={__name:"DarkModeToggle",props:{value:{type:Boolean,required:!0}},setup(E){return(y,v)=>(S(),w("button",{class:"mr-2",onClick:v[0]||(v[0]=()=>y.$emit("change",!E.value))},N(E.value?"Light":"Dark")+" Mode ",1))}};const Ah={class:"right flex items-center"},Lh={class:"files pr-4"},Mh={class:"files pr-4"},Dh={class:"locales"},$h={__name:"OpenApiHeader",props:{currentLocale:{type:String,required:!0},file:{type:String,required:!0},isDarkMode:{type:Boolean,required:!0},locales:{type:Object,required:!0},files:{type:Object,required:!0},doc:{type:Object,required:!0},path:{type:String,required:!0}},emits:["toggleDarkMode"],setup(E,{emit:y}){const v=E;function q(x){return"/"+v.path+"/"+x+"/"+v.currentLocale+"/get/info"}function T(x){return"/"+v.path+"/"+v.file+"/"+x+"/get/info"}function k(){const x=JSON.stringify(v.doc),A=new Blob([x],{type:"application/json"}),U=URL.createObjectURL(A),P=document.createElement("a");P.href=U,P.download=v.file+".yaml",document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(U)}return(x,A)=>(S(),w("div",Ah,[_("div",Lh,[z(Rh,{value:v.isDarkMode,onChange:A[0]||(A[0]=()=>y("toggleDarkMode"))},null,8,["value"])]),_("div",Mh,[z(ro,{placeholder:v.files[E.file],options:v.files,value:v.file,"route-function":q},{default:ve(({option:U,index:P,isSelected:G})=>[ie(N(U),1)]),_:1},8,["placeholder","options","value"])]),_("div",Dh,[z(ro,{placeholder:v.locales[E.currentLocale],options:v.locales,value:v.currentLocale,"route-function":T},{default:ve(({option:U,index:P,isSelected:G})=>[ie(N(U),1)]),_:1},8,["placeholder","options","value"])]),_("div",{class:"locales"},[_("button",{onClick:k,type:"button",class:"inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-gray-300/75","aria-haspopup":"true"}," Yaml ")])]))}},Ih=pe($h,[["__scopeId","data-v-9460181a"]]);const Uh={props:{routes:{type:Object,required:!0},currentLocale:{type:String,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},setup(){return{open:_e(null)}},methods:{toggleOpen(E){this.open=this.open===E?null:E,localStorage.setItem("menu_open",this.open)},getRouteType(E){switch(E.toUpperCase()){case"GET":return"🔍 GET";case"POST":return"💾 POST";case"PUT":return"💾 PUT";case"PATCH":return"💾 PATCH";case"DELETE":return"🗑️ DELETE";default:return""}},getRoute(E){return"/"+this.path+"/"+this.file+"/"+this.currentLocale+"/get/"+E},getSubRoute(E){return"/"+this.path+"/"+this.file+"/"+this.currentLocale+"/"+E.type+"/"+encodeURI(E.path)}},computed:{pathsByTags(){const E=this.routes,y=Object.keys(E),v={};return y.forEach(q=>{Object.keys(E[q]).forEach(k=>{const x=E[q][k],A=x.tags;A&&A.length&&A.forEach(U=>{v[U]||(v[U]=[]),v[U].push({name:x.path,path:q,type:k,description:x.description})})})}),v}},mounted(){this.open=localStorage.getItem("menu_open")??null}},io=E=>(Ge("data-v-f5e86de0"),E=E(),We(),E),Ph={class:"openapi-menu"},Bh=io(()=>_("h2",{class:"text-xl font-bold mb-2"},"API documentation",-1)),jh=io(()=>_("p",{class:"mb-4"},"Select a route from the list below:",-1)),Hh={class:"menu list-none mb-4"},Fh=["onClick"],zh={class:"font-bold"},Kh={class:"menu-item__icon"},Gh={key:0,class:"pl-2"},Wh={class:"flex flex-col"},Zh={class:"font-bold item-path"},Vh={class:"description text-sm text-gray-600 dark:text-gray-300/75 overflow-hidden overflow-ellipsis whitespace-nowrap"};function Xh(E,y,v,q,T,k){const x=oo;return S(),w("div",Ph,[Bh,jh,_("ul",Hh,[_("li",null,[z(x,{to:k.getRoute("info"),class:"block px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"},{default:ve(()=>[ie(" OpenAPI Info ")]),_:1},8,["to"])]),_("li",null,[z(x,{to:k.getRoute("components"),class:"block px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"},{default:ve(()=>[ie(" OpenAPI Components ")]),_:1},8,["to"])]),(S(!0),w(ee,null,ae(k.pathsByTags,(A,U)=>(S(),w("li",{key:U,class:"sub-menu"},[_("div",{class:Ie([{selected:q.open===U},"block px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"])},[_("div",{class:"menu-title flex justify-between items-center",onClick:P=>k.toggleOpen(U)},[_("span",zh,N(U),1),_("span",Kh,N(q.open!==U?"▼":"▲"),1)],8,Fh),q.open===U?(S(),w("ul",Gh,[(S(!0),w(ee,null,ae(A,P=>(S(),w("li",{class:Ie(["menu-item hover:bg-gray-200 dark:hover:bg-gray-700",`menu-item-${P.type}`])},[z(x,{to:k.getSubRoute(P),onClick:y[0]||(y[0]=ao(()=>{},["stop","prevent"])),class:"block-btn py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"},{default:ve(()=>[_("div",Wh,[_("div",Zh,N(k.getRouteType(P.type))+" "+N(P.name),1),_("div",Vh,N(P.description),1)])]),_:2},1032,["to"])],2))),256))])):I("",!0)],2)]))),128))])])}const Qh=pe(Uh,[["render",Xh],["__scopeId","data-v-f5e86de0"]]),co={props:{markdown:{type:String,required:!0}},setup(E,{refs:y}){return{html:_e(E.markdown)}},render(){return[ah("div",{innerHTML:this.html})]}};function ge(E,y,v){return E[`x-${y}-${v}`]??E[y]??""}function Jh(E,y){const v=y.target,q=document.createElement("textarea");q.value=E,q.style.position="fixed",document.body.appendChild(q),q.focus(),q.select();try{document.execCommand("copy"),v.innerText="Copied",setTimeout(()=>{v.innerText="Copy"},5e3)}catch(T){console.error("Unable to copy",T)}document.body.removeChild(q)}function lo(E){const[y,v,q]=E.replace("#/","").split("/");return{type:y,path:v,name:q}}const Yh={components:{MarkdownRender:co},props:{info:{type:Object,required:!0},currentLocale:{type:String,required:!0}},setup(){return{open:_e(null)}},methods:{tr:ge}},em={class:"text-2xl font-bold"},tm={class:"my-4"},nm=_("h3",{class:"text-lg font-bold"},"Servers",-1),rm={class:"list-disc list-inside"},sm=["href"],am={key:0,class:"text-lg font-bold"},om={key:1,class:"list-disc list-inside"},im=["href"];function cm(E,y,v,q,T,k){const x=Re("MarkdownRender");return S(),w("div",null,[_("h2",em,N(k.tr(v.info,"title",v.currentLocale)),1),_("p",tm,[z(x,{markdown:k.tr(v.info,"description",v.currentLocale)},null,8,["markdown"])]),nm,_("ul",rm,[(S(!0),w(ee,null,ae(v.info.servers,A=>(S(),w("li",{key:A.url},[_("a",{class:"text-blue-500 hover:underline",href:A.url},N(A.url),9,sm)]))),128))]),v.info.externalDocs?(S(),w("h3",am,"External documentation")):I("",!0),v.info.externalDocs?(S(),w("ul",om,[_("li",null,[_("a",{class:"text-blue-500 hover:underline",href:v.info.externalDocs.url},N(k.tr(v.info.externalDocs,"description",v.currentLocale)),9,im)])])):I("",!0)])}const lm=pe(Yh,[["render",cm]]),um={class:"schema border border-gray-300 rounded p-5 mb-10"},dm={class:"schema-row flex items-center"},pm=_("div",{class:"schema-row-label font-bold mr-2"},"Type:",-1),hm={class:"schema-row-value"},mm={key:0,class:"schema-row flex items-center"},fm=_("div",{class:"schema-row-label font-bold mr-2"},"Format:",-1),gm={class:"schema-row-value"},bm={key:1,class:"schema-row flex items-center"},_m=_("div",{class:"schema-row-label font-bold mr-2"},"Enum:",-1),ym={class:"schema-row-value"},vm={key:2,class:"schema-row flex items-center"},Em=_("div",{class:"schema-row-label font-bold mr-2"},"Default:",-1),Sm={class:"schema-row-value"},wm={key:3,class:"schema-row flex items-center"},km=_("div",{class:"schema-row-label font-bold mr-2"},"Pattern:",-1),xm={class:"schema-row-value"},Tm={key:4,class:"schema-row flex items-center"},Cm=_("div",{class:"schema-row-label font-bold mr-2"},"Items:",-1),qm={class:"schema-row-value"},Nm={key:5,class:"schema-row items-center"},Om=_("div",{class:"schema-row-label font-bold mr-2"},"Properties:",-1),Rm={class:"schema-row-value"},Am={class:"table-auto"},Lm=_("thead",null,[_("tr",null,[_("th",{class:"px-4 py-2"},"Name"),_("th",{class:"px-4 py-2"},"Type"),_("th",{class:"px-4 py-2"},"Description")])],-1),Mm={class:"border px-4 py-2"},Dm={class:"border px-4 py-2"},$m={class:"border px-4 py-2"},Im={key:6,class:"schema-row flex items-center"},Um=_("div",{class:"schema-row-label font-bold mr-2"},"Additional Properties:",-1),Pm={class:"schema-row-value"},Bm={key:7,class:"schema-row flex items-center"},jm=_("div",{class:"schema-row-label font-bold mr-2"},"All Of:",-1),Hm={class:"schema-row-value"},Or={__name:"OpenApiSchema",props:{schema:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},setup(E){const y=E,v=be(()=>{if(y.schema.additionalProperties)return[];let q=[];for(let T in y.schema.additionalProperties){let k=y.schema.additionalProperties[T];if(k.$ref){const x=lo(k.$ref);y.components[x.path]&&y.components[x.path][x.name]&&(k=y.components[x.path][x.name])}k.path=T,q.push(k)}return q});return(q,T)=>{const k=Re("OpenApiSchema",!0);return S(),w("div",um,[_("div",dm,[pm,_("div",hm,N(y.schema.type),1)]),y.schema.format?(S(),w("div",mm,[fm,_("div",gm,N(y.schema.format),1)])):I("",!0),y.schema.enum?(S(),w("div",bm,[_m,_("div",ym,[(S(!0),w(ee,null,ae(y.schema.enum,(x,A)=>(S(),w("span",{key:A},N(x),1))),128))])])):I("",!0),y.schema.default?(S(),w("div",vm,[Em,_("div",Sm,N(y.schema.default),1)])):I("",!0),y.schema.pattern?(S(),w("div",wm,[km,_("div",xm,N(y.schema.pattern),1)])):I("",!0),y.schema.items?(S(),w("div",Tm,[Cm,_("div",qm,[z(k,{components:y.components,"current-locale":y.currentLocale,schema:y.schema.items},null,8,["components","current-locale","schema"])])])):I("",!0),y.schema.properties?(S(),w("div",Nm,[Om,_("div",Rm,[_("table",Am,[Lm,_("tbody",null,[(S(!0),w(ee,null,ae(y.schema.properties,(x,A)=>(S(),w("tr",{key:A},[_("td",Mm,N(A),1),_("td",Dm,N(x.type),1),_("td",$m,N(O(ge)(x,"description",y.currentLocale)),1)]))),128))])])])])):I("",!0),O(v).length?(S(),w("div",Im,[Um,_("div",Pm,[z(k,{components:y.components,"current-locale":y.currentLocale,schema:O(v)},null,8,["components","current-locale","schema"])])])):I("",!0),y.schema.allOf?(S(),w("div",Bm,[jm,_("div",Hm,[(S(!0),w(ee,null,ae(y.schema.allOf,(x,A)=>(S(),w("div",{key:A},[z(k,{components:y.components,schema:x,"current-locale":y.currentLocale},null,8,["components","schema","current-locale"])]))),128))])])):I("",!0)])}}};const uo=E=>(Ge("data-v-ca06abc5"),E=E(),We(),E),Fm={class:"openapi-examples"},zm=uo(()=>_("h3",{class:"text-lg font-bold mb-2"},"Examples: ",-1)),Km={class:"text-lg font-medium"},Gm={class:"w-full mt-2"},Wm=uo(()=>_("thead",null,[_("tr",null,[_("th",{class:"px-4 py-2 border-b border-gray-300"},"Media Type"),_("th",{class:"px-4 py-2 border-b border-gray-300"},"Summary"),_("th",{class:"px-4 py-2 border-b border-gray-300"},"Value")])],-1)),Zm={class:"px-4 py-2 border-b border-gray-300"},Vm={class:"px-4 py-2 border-b border-gray-300"},Xm={class:"px-4 py-2 border-b border-gray-300"},Qm={class:"m-0 whitespace-pre-wrap"},Jm={__name:"OpenApiExamples",props:{examples:{type:Object,required:!0},currentLocale:{type:String,required:!0}},setup(E){const y=E;return(v,q)=>(S(),w("div",Fm,[zm,(S(!0),w(ee,null,ae(y.examples,(T,k)=>(S(),w("div",{key:k},[_("h4",Km,N(k),1),_("table",Gm,[Wm,_("tbody",null,[(S(!0),w(ee,null,ae(T,(x,A)=>(S(),w("tr",{key:A},[_("td",Zm,N(A),1),_("td",Vm,N(O(ge)(x,"summary",y.currentLocale)),1),_("td",Xm,[_("pre",Qm,N(x.value),1)])]))),128))])])]))),128))]))}},po=pe(Jm,[["__scopeId","data-v-ca06abc5"]]);const Ym=_("h3",{class:"text-lg font-medium"},"Request Body:",-1),ef={class:"mt-2 p-2 rounded-md"},tf=["textContent"],ho={__name:"OpenApiRequestBody",props:{requestBody:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},setup(E){const y=E;return(v,q)=>(S(),w("div",null,[Ym,_("pre",ef,N(O(ge)(y.requestBody,"description",y.currentLocale)),1),(S(!0),w(ee,null,ae(y.requestBody.content,(T,k)=>(S(),w("div",null,[_("pre",{class:"mt-2 p-2 rounded-md",textContent:N(k)},null,8,tf),z(Or,{schema:T.schema,"current-locale":y.currentLocale,components:y.components,class:"mt-4"},null,8,["schema","current-locale","components"])]))),256))]))}};const nf=_("h3",{class:"text-lg font-bold mb-2"},"Request Bodies: ",-1),rf={class:"text-lg font-medium"},sf={__name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},setup(E){const y=E;return(v,q)=>(S(),w("div",null,[nf,(S(!0),w(ee,null,ae(y.requestBodies,(T,k)=>(S(),w("div",{key:k,class:"mt-4"},[_("h3",rf,N(k),1),z(ho,{requestBody:T,"current-locale":y.currentLocale},null,8,["requestBody","current-locale"])]))),128))]))}};const Rr=E=>(Ge("data-v-5408cc8a"),E=E(),We(),E),af={class:"examples-container"},of=Rr(()=>_("h4",{class:"text-xl font-medium mb-2"},"Examples:",-1)),cf={class:"text-lg font-medium mb-2"},lf={class:"example"},uf={key:0,class:"mb-1"},df=Rr(()=>_("strong",null,"Summary:",-1)),pf={key:1,class:"mb-1"},hf=Rr(()=>_("strong",null,"Description:",-1)),mf={key:0,class:"mt-2"},ff={class:Ie("language-json")},gf={key:1,class:"mt-2"},bf={class:Ie("language-xml")},_f={__name:"OpenApiExamplesResponse",props:{examples:{type:Object,required:!0},mediaType:{type:String,default:""},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},setup(E){const y=E;function v(T){return T.includes("json")}function q(T){return T.includes("xml")}return(T,k)=>(S(),w("div",af,[of,(S(!0),w(ee,null,ae(y.examples,(x,A)=>(S(),w("div",{key:A},[_("h5",cf,N(A),1),_("div",lf,[x.summary?(S(),w("p",uf,[df,ie(" "+N(O(ge)(x,"summary",y.currentLocale)),1)])):I("",!0),x.description?(S(),w("p",pf,[hf,ie(" "+N(O(ge)(x,"description",y.currentLocale)),1)])):I("",!0),x.value?(S(),w(ee,{key:2},[z(Or,{schema:x.schema,"current-locale":y.currentLocale,components:y.components},null,8,["schema","current-locale","components"]),v(y.mediaType)?(S(),w("pre",mf,[_("code",ff,N(x.value),1)])):q(y.mediaType)?(S(),w("pre",gf,[_("code",bf,N(x.value),1)])):I("",!0)],64)):I("",!0)])]))),128))]))}},yf=pe(_f,[["__scopeId","data-v-5408cc8a"]]),vf=_("h2",{class:"text-lg font-bold mb-2"},"Responses:",-1),Ef={class:"w-full border-collapse"},Sf=_("thead",null,[_("tr",{class:"border border-b border-gray-300"},[_("th",{class:"border p-3 font-semibold text-left"},"Status"),_("th",{class:"border p-3 font-semibold text-left"},"Description")])],-1),wf={class:"border p-3"},kf={class:"border p-3"},xf={class:"mb-2"},mo={__name:"OpenApiResponses",props:{responses:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},setup(E){const y=E;return(v,q)=>(S(),w("div",null,[vf,_("table",Ef,[Sf,_("tbody",null,[(S(!0),w(ee,null,ae(y.responses,(T,k)=>(S(),w("tr",{key:k,class:"border-b border-gray-300"},[_("td",wf,N(k),1),_("td",kf,[_("p",xf,N(O(ge)(T,"description",y.currentLocale)),1),T.examples?(S(),ye(yf,{key:0,examples:T.examples,"current-locale":y.currentLocale,components:y.components},null,8,["examples","current-locale","components"])):I("",!0)])]))),128))])])]))}};const Tf=E=>(Ge("data-v-919fcb4b"),E=E(),We(),E),Cf={key:0,class:"text-lg font-bold mb-2"},qf={key:1,class:"table-auto w-full"},Nf=Tf(()=>_("thead",null,[_("tr",null,[_("th",{class:"border px-4 py-2"},"Parameter Name"),_("th",{class:"border px-4 py-2"},"Description"),_("th",{class:"border px-4 py-2"},"In"),_("th",{class:"border px-4 py-2"},"Required"),_("th",{class:"border px-4 py-2"},"Type"),_("th",{class:"border px-4 py-2"},"Possible Values"),_("th",{class:"border px-4 py-2"},"Default"),_("th",{class:"border px-4 py-2"},"Example")])],-1)),Of={class:"border px-4 py-2 font-semibold"},Rf=["innerHTML"],Af={class:"border px-4 py-2"},Lf={class:"border px-4 py-2"},Mf={class:"border px-4 py-2"},Df={class:"border px-4 py-2"},$f={class:"border px-4 py-2"},If={class:"border px-4 py-2"},Uf={__name:"OpenApiParameters",props:{parameters:[Object,Array],currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},setup(E){const y=E,v=be(()=>{if(!y.parameters)return[];let q=[];for(let T in y.parameters){let k=y.parameters[T];if(k.$ref){const x=lo(k.$ref);y.components[x.path]&&y.components[x.path][x.name]&&(k=y.components[x.path][x.name])}k.path=T,q.push(k)}return q});return(q,T)=>(S(),w("div",null,[O(v).length?(S(),w("h2",Cf,"Parameters:")):I("",!0),O(v).length?(S(),w("table",qf,[Nf,_("tbody",null,[(S(!0),w(ee,null,ae(O(v),(k,x)=>(S(),w("tr",{key:x,class:"open-api-param"},[_("td",Of,N(O(ge)(k,"name",y.currentLocale)),1),_("td",{class:"border px-4 py-2",innerHTML:O(ge)(k,"description",y.currentLocale)},null,8,Rf),_("td",Af,N(k.in?k.in:"-"),1),_("td",Lf,N(k.required?"Yes":"No"),1),_("td",Mf,N(k.schema?k.schema.type:"-"),1),_("td",Df,N(k.schema&&k.schema.enum?k.schema.enum.join(", "):"-"),1),_("td",$f,N(k.schema&&k.schema.default?k.schema.default:k.default?k.default:"-"),1),_("td",If,N(k.example?k.example:"-"),1)]))),128))])])):I("",!0)]))}},fo=pe(Uf,[["__scopeId","data-v-919fcb4b"]]);const Pf={class:"security-scheme border border-gray-300 p-4 mb-8"},Bf={class:"security-scheme__name text-xl font-bold mb-4",style:{"margin-top":"0"}},jf={key:0,class:"security-scheme__details"},Hf=_("strong",null,"Type:",-1),Ff=_("strong",null,"Scheme:",-1),zf={key:0},Kf=_("strong",null,"Bearer format:",-1),Gf={key:1},Wf=_("strong",null,"Description:",-1),Zf={key:1,class:"security-scheme__details"},Vf=_("strong",null,"Type:",-1),Xf=_("strong",null,"Name:",-1),Qf=_("strong",null,"In:",-1),Jf={key:0},Yf=_("strong",null,"Description:",-1),eg={key:2,class:"security-scheme__details"},tg=_("strong",null,"Type:",-1),ng={key:0},rg=_("strong",null,"Flows:",-1),sg=[rg],ag={key:0},og=_("strong",null,"Authorization URL:",-1),ig={key:1},cg=_("strong",null,"Token URL:",-1),lg={key:2},ug=_("strong",null,"Refresh URL:",-1),dg={key:3},pg=_("strong",null,"Scopes:",-1),hg={key:1},mg=_("strong",null,"Description:",-1),fg={__name:"OpenApiSecurityScheme",props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},setup(E){const y=E;return(v,q)=>(S(),w("div",Pf,[_("h4",Bf,N(O(ge)(y.securityScheme,"name",y.currentLocale)),1),y.securityScheme.type==="http"?(S(),w("div",jf,[_("p",null,[Hf,ie(" "+N(y.securityScheme.type),1)]),_("p",null,[Ff,ie(" "+N(y.securityScheme.scheme),1)]),y.securityScheme.bearerFormat?(S(),w("p",zf,[Kf,ie(" "+N(y.securityScheme.bearerFormat),1)])):I("",!0),y.securityScheme.description?(S(),w("p",Gf,[Wf,ie(" "+N(O(ge)(y.securityScheme,"description",y.currentLocale)),1)])):I("",!0)])):y.securityScheme.type==="apiKey"?(S(),w("div",Zf,[_("p",null,[Vf,ie(" "+N(y.securityScheme.type),1)]),_("p",null,[Xf,ie(" "+N(y.securityScheme.name),1)]),_("p",null,[Qf,ie(" "+N(y.securityScheme.in),1)]),y.securityScheme.description?(S(),w("p",Jf,[Yf,ie(" "+N(O(ge)(y.securityScheme,"description",y.currentLocale)),1)])):I("",!0)])):y.securityScheme.type==="oauth2"?(S(),w("div",eg,[_("p",null,[tg,ie(" "+N(y.securityScheme.type),1)]),y.securityScheme.flows?(S(),w("p",ng,sg)):I("",!0),_("ul",null,[(S(!0),w(ee,null,ae(y.securityScheme.flows,(T,k)=>(S(),w("li",{key:k},[_("p",null,[_("strong",null,N(k)+":",1)]),_("ul",null,[T.authorizationUrl?(S(),w("li",ag,[og,ie(" "+N(T.authorizationUrl),1)])):I("",!0),T.tokenUrl?(S(),w("li",ig,[cg,ie(" "+N(T.tokenUrl),1)])):I("",!0),T.refreshUrl?(S(),w("li",lg,[ug,ie(" "+N(T.refreshUrl),1)])):I("",!0),T.scopes?(S(),w("li",dg,[pg,_("ul",null,[(S(!0),w(ee,null,ae(T.scopes,(x,A)=>(S(),w("li",{key:A},[_("strong",null,N(A)+":",1),ie(" "+N(x),1)]))),128))])])):I("",!0)])]))),128))]),y.securityScheme.description?(S(),w("p",hg,[mg,ie(" "+N(O(ge)(y.securityScheme,"description",y.currentLocale)),1)])):I("",!0)])):I("",!0)]))}},gg=_("h3",{class:"text-lg font-bold mb-2"},"Security Schemes: ",-1),bg={__name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},setup(E){const y=E;return(v,q)=>(S(),w("div",null,[gg,(S(!0),w(ee,null,ae(y.securitySchemes,(T,k)=>(S(),w("div",{key:k},[_("h3",null,N(k),1),z(fg,{securityScheme:T,"current-locale":y.currentLocale},null,8,["securityScheme","current-locale"])]))),128))]))}},_g={key:0},yg={key:1},vg={key:2},Eg={key:3},Sg={key:4},wg={key:5},kg={__name:"OpenApiComponents",props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}},setup(E){return(y,v)=>(S(),w("div",null,[E.components.schema?(S(),w("div",_g,[z(Or,{components:E.components,schema:E.components.schema,"current-locale":E.currentLocale},null,8,["components","schema","current-locale"])])):I("",!0),E.components.examples?(S(),w("div",yg,[z(po,{examples:E.components.examples,"current-locale":E.currentLocale},null,8,["examples","current-locale"])])):I("",!0),E.components.requestBodies?(S(),w("div",vg,[z(sf,{requestBodies:E.components.requestBodies,"current-locale":E.currentLocale},null,8,["requestBodies","current-locale"])])):I("",!0),E.components.responses?(S(),w("div",Eg,[z(mo,{responses:E.components.responses,"current-locale":E.currentLocale},null,8,["responses","current-locale"])])):I("",!0),E.components.parameters?(S(),w("div",Sg,[z(fo,{parameters:E.components.parameters,"current-locale":E.currentLocale},null,8,["parameters","current-locale"])])):I("",!0),E.components.securitySchemes?(S(),w("div",wg,[z(bg,{securitySchemes:E.components.securitySchemes,"current-locale":E.currentLocale},null,8,["securitySchemes","current-locale"])])):I("",!0)]))}},xg=oh({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(E,{slots:y,attrs:v}){const q=_e(!1);return ih(()=>{q.value=!0}),T=>{var U;if(q.value)return(U=y.default)==null?void 0:U.call(y);const k=y.fallback||y.placeholder;if(k)return k();const x=T.fallback||T.placeholder||"",A=T.fallbackTag||T.placeholderTag||"span";return w(A,v,x)}}}),Tg={class:"border border-gray-300 p-4 mb-8"},Cg={class:"text-2xl font-bold mb-2"},qg={class:"text-lg font-bold mb-2"},Ng={class:"text-gray-600 mb-2"},Og={class:"mb-2"},Rg={key:0,class:"mb-2"},Ag={key:1,class:"text-red-600 font-bold mb-2"},Lg={__name:"OpenApiRouteHeader",props:{path:String,method:String,tags:Array,summary:String,description:String,deprecated:Boolean,currentLocale:{type:String,required:!0}},setup(E){const y=E;return(v,q)=>(S(),w("div",Tg,[_("h1",Cg,N(y.path),1),_("h2",qg,N(y.summary),1),_("p",Ng,N(y.method),1),_("p",Og,[(S(!0),w(ee,null,ae(y.tags,(T,k)=>(S(),w("span",{key:k,class:"inline-block bg-gray-300 dark:bg-blue-200 dark:text-black px-2 py-1 rounded mr-2"},N(T),1))),128))]),y.description?(S(),w("p",Rg,[z(O(co),{markdown:y.description},null,8,["markdown"])])):I("",!0),y.deprecated?(S(),w("p",Ag,"Deprecated")):I("",!0)]))}};const Mg={class:"openapi-security-requirement"},Dg={class:"font-bold mr-2"},$g={class:"list-disc ml-8"},Ig={class:"inline-block bg-gray-300 px-2 py-1 rounded-md mr-2 dark:bg-blue-200 dark:text-black"},Ug={__name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0}},setup(E){const y=E;return(v,q)=>(S(),w("div",Mg,[_("ul",null,[(S(!0),w(ee,null,ae(y.securityRequirement,(T,k)=>(S(),w("li",{class:"openapi-security-requirement__item",key:k},[_("span",Dg,N(k),1),_("ul",$g,[(S(!0),w(ee,null,ae(T,x=>(S(),w("li",{key:x},[_("span",Ig,N(x),1)]))),128))])]))),128))])]))}},Pg=pe(Ug,[["__scopeId","data-v-e547acf0"]]);const Bg=E=>(Ge("data-v-18a0d203"),E=E(),We(),E),jg={class:"py-4"},Hg=Bg(()=>_("h3",{class:"text-xl font-semibold"},"Security:",-1)),Fg={class:"list-disc ml-6"},zg={__name:"OpenApiSecurity",props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0}},setup(E){const y=E;return(v,q)=>(S(),w("div",jg,[Hg,_("ul",Fg,[(S(!0),w(ee,null,ae(y.security,(T,k)=>(S(),w("li",{key:k,class:"py-2"},[z(Pg,{securityRequirement:T,"current-locale":y.currentLocale},null,8,["securityRequirement","current-locale"])]))),128))])]))}},Kg=pe(zg,[["__scopeId","data-v-18a0d203"]]);var qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nr={},Gg={get exports(){return Nr},set exports(E){Nr=E}};/*!
 * Request Templater v1.1.1
 *
 * Copyright (C) 2012-2023 Pavel Kuz`min (@s00d).
 *
 * Date: Sat, 25 Mar 2023 09:42:42 GMT
 */(function(E,y){(function(v,q){E.exports=q()})(qr,function(){var v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof qr<"u"?qr:typeof self<"u"?self:{},q=function(t){return t&&t.Math==Math&&t},T=q(typeof globalThis=="object"&&globalThis)||q(typeof window=="object"&&window)||q(typeof self=="object"&&self)||q(typeof v=="object"&&v)||function(){return this}()||Function("return this")(),k={},x=function(t){try{return!!t()}catch{return!0}},A=!x(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),U=!x(function(){var t=function(){}.bind();return typeof t!="function"||t.hasOwnProperty("prototype")}),P=U,G=Function.prototype.call,J=P?G.bind(G):function(){return G.apply(G,arguments)},W={},Ue={}.propertyIsEnumerable,vt=Object.getOwnPropertyDescriptor,nn=vt&&!Ue.call({1:2},1);W.f=nn?function(t){var n=vt(this,t);return!!n&&n.enumerable}:Ue;var Se,Ze,at=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},Et=U,ot=Function.prototype,it=ot.call,rn=Et&&ot.bind.bind(it,it),oe=Et?rn:function(t){return function(){return it.apply(t,arguments)}},St=oe,wt=St({}.toString),Ar=St("".slice),Pe=function(t){return Ar(wt(t),8,-1)},bo=x,_o=Pe,sn=Object,yo=oe("".split),kt=bo(function(){return!sn("z").propertyIsEnumerable(0)})?function(t){return _o(t)=="String"?yo(t,""):sn(t)}:sn,xt=function(t){return t==null},vo=xt,Eo=TypeError,Be=function(t){if(vo(t))throw Eo("Can't call method on "+t);return t},So=kt,wo=Be,ct=function(t){return So(wo(t))},an=typeof document=="object"&&document.all,Tt={all:an,IS_HTMLDDA:an===void 0&&an!==void 0},ko=Tt.all,he=Tt.IS_HTMLDDA?function(t){return typeof t=="function"||t===ko}:function(t){return typeof t=="function"},Lr=he,xo=Tt.all,Ce=Tt.IS_HTMLDDA?function(t){return typeof t=="object"?t!==null:Lr(t)||t===xo}:function(t){return typeof t=="object"?t!==null:Lr(t)},on=T,To=he,Ct=function(t,n){return arguments.length<2?(a=on[t],To(a)?a:void 0):on[t]&&on[t][n];var a},Co=oe({}.isPrototypeOf),Mr=T,cn=typeof navigator<"u"&&String(navigator.userAgent)||"",Dr=Mr.process,$r=Mr.Deno,Ir=Dr&&Dr.versions||$r&&$r.version,Ur=Ir&&Ir.v8;Ur&&(Ze=(Se=Ur.split("."))[0]>0&&Se[0]<4?1:+(Se[0]+Se[1])),!Ze&&cn&&(!(Se=cn.match(/Edge\/(\d+)/))||Se[1]>=74)&&(Se=cn.match(/Chrome\/(\d+)/))&&(Ze=+Se[1]);var lt=Ze,Pr=lt,qo=x,Br=!!Object.getOwnPropertySymbols&&!qo(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Pr&&Pr<41}),jr=Br&&!Symbol.sham&&typeof Symbol.iterator=="symbol",No=Ct,Oo=he,Ro=Co,Ao=Object,Hr=jr?function(t){return typeof t=="symbol"}:function(t){var n=No("Symbol");return Oo(n)&&Ro(n.prototype,Ao(t))},Lo=String,Mo=he,Do=function(t){try{return Lo(t)}catch{return"Object"}},$o=TypeError,qt=function(t){if(Mo(t))return t;throw $o(Do(t)+" is not a function")},Io=qt,Uo=xt,ln=function(t,n){var a=t[n];return Uo(a)?void 0:Io(a)},un=J,dn=he,pn=Ce,Po=TypeError,ut={},Bo={get exports(){return ut},set exports(t){ut=t}},Fr=T,jo=Object.defineProperty,hn=function(t,n){try{jo(Fr,t,{value:n,configurable:!0,writable:!0})}catch{Fr[t]=n}return n},Ho=hn,zr="__core-js_shared__",mn=T[zr]||Ho(zr,{}),Kr=mn;(Bo.exports=function(t,n){return Kr[t]||(Kr[t]=n!==void 0?n:{})})("versions",[]).push({version:"3.29.1",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Fo=Be,zo=Object,Ve=function(t){return zo(Fo(t))},Ko=Ve,Go=oe({}.hasOwnProperty),Ae=Object.hasOwn||function(t,n){return Go(Ko(t),n)},Wo=oe,Zo=0,Vo=Math.random(),Xo=Wo(1 .toString),Gr=function(t){return"Symbol("+(t===void 0?"":t)+")_"+Xo(++Zo+Vo,36)},Qo=ut,Wr=Ae,Jo=Gr,Yo=Br,ei=jr,Xe=T.Symbol,fn=Qo("wks"),ti=ei?Xe.for||Xe:Xe&&Xe.withoutSetter||Jo,we=function(t){return Wr(fn,t)||(fn[t]=Yo&&Wr(Xe,t)?Xe[t]:ti("Symbol."+t)),fn[t]},ni=J,Zr=Ce,Vr=Hr,ri=ln,si=function(t,n){var a,u;if(n==="string"&&dn(a=t.toString)&&!pn(u=un(a,t))||dn(a=t.valueOf)&&!pn(u=un(a,t))||n!=="string"&&dn(a=t.toString)&&!pn(u=un(a,t)))return u;throw Po("Can't convert object to primitive value")},ai=TypeError,oi=we("toPrimitive"),ii=function(t,n){if(!Zr(t)||Vr(t))return t;var a,u=ri(t,oi);if(u){if(n===void 0&&(n="default"),a=ni(u,t,n),!Zr(a)||Vr(a))return a;throw ai("Can't convert object to primitive value")}return n===void 0&&(n="number"),si(t,n)},ci=Hr,gn=function(t){var n=ii(t,"string");return ci(n)?n:n+""},Xr=Ce,bn=T.document,li=Xr(bn)&&Xr(bn.createElement),_n=function(t){return li?bn.createElement(t):{}},ui=_n,Qr=!A&&!x(function(){return Object.defineProperty(ui("div"),"a",{get:function(){return 7}}).a!=7}),di=A,pi=J,hi=W,mi=at,fi=ct,gi=gn,bi=Ae,_i=Qr,Jr=Object.getOwnPropertyDescriptor;k.f=di?Jr:function(t,n){if(t=fi(t),n=gi(n),_i)try{return Jr(t,n)}catch{}if(bi(t,n))return mi(!pi(hi.f,t,n),t[n])};var je={},Yr=A&&x(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),yi=Ce,vi=String,Ei=TypeError,Le=function(t){if(yi(t))return t;throw Ei(vi(t)+" is not an object")},Si=A,wi=Qr,ki=Yr,Nt=Le,es=gn,xi=TypeError,yn=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,vn="enumerable",En="configurable",Sn="writable";je.f=Si?ki?function(t,n,a){if(Nt(t),n=es(n),Nt(a),typeof t=="function"&&n==="prototype"&&"value"in a&&Sn in a&&!a[Sn]){var u=Ti(t,n);u&&u[Sn]&&(t[n]=a.value,a={configurable:En in a?a[En]:u[En],enumerable:vn in a?a[vn]:u[vn],writable:!1})}return yn(t,n,a)}:yn:function(t,n,a){if(Nt(t),n=es(n),Nt(a),wi)try{return yn(t,n,a)}catch{}if("get"in a||"set"in a)throw xi("Accessors not supported");return"value"in a&&(t[n]=a.value),t};var Ci=je,qi=at,Ot=A?function(t,n,a){return Ci.f(t,n,qi(1,a))}:function(t,n,a){return t[n]=a,t},Rt={},Ni={get exports(){return Rt},set exports(t){Rt=t}},wn=A,Oi=Ae,ts=Function.prototype,Ri=wn&&Object.getOwnPropertyDescriptor,kn=Oi(ts,"name"),ns={EXISTS:kn,PROPER:kn&&function(){}.name==="something",CONFIGURABLE:kn&&(!wn||wn&&Ri(ts,"name").configurable)},Ai=he,xn=mn,Li=oe(Function.toString);Ai(xn.inspectSource)||(xn.inspectSource=function(t){return Li(t)});var At,dt,Lt,rs=xn.inspectSource,Mi=he,ss=T.WeakMap,Di=Mi(ss)&&/native code/.test(String(ss)),$i=Gr,as=ut("keys"),os=function(t){return as[t]||(as[t]=$i(t))},Tn={},Ii=Di,is=T,Ui=Ce,Pi=Ot,Cn=Ae,qn=mn,Bi=os,ji=Tn,cs="Object already initialized",Nn=is.TypeError,Hi=is.WeakMap;if(Ii||qn.state){var ke=qn.state||(qn.state=new Hi);ke.get=ke.get,ke.has=ke.has,ke.set=ke.set,At=function(t,n){if(ke.has(t))throw Nn(cs);return n.facade=t,ke.set(t,n),n},dt=function(t){return ke.get(t)||{}},Lt=function(t){return ke.has(t)}}else{var Qe=Bi("state");ji[Qe]=!0,At=function(t,n){if(Cn(t,Qe))throw Nn(cs);return n.facade=t,Pi(t,Qe,n),n},dt=function(t){return Cn(t,Qe)?t[Qe]:{}},Lt=function(t){return Cn(t,Qe)}}var On={set:At,get:dt,has:Lt,enforce:function(t){return Lt(t)?dt(t):At(t,{})},getterFor:function(t){return function(n){var a;if(!Ui(n)||(a=dt(n)).type!==t)throw Nn("Incompatible receiver, "+t+" required");return a}}},Rn=oe,Fi=x,zi=he,Mt=Ae,An=A,Ki=ns.CONFIGURABLE,Gi=rs,Wi=On.enforce,Zi=On.get,ls=String,Dt=Object.defineProperty,Vi=Rn("".slice),Xi=Rn("".replace),Qi=Rn([].join),Ji=An&&!Fi(function(){return Dt(function(){},"length",{value:8}).length!==8}),Yi=String(String).split("String"),ec=Ni.exports=function(t,n,a){Vi(ls(n),0,7)==="Symbol("&&(n="["+Xi(ls(n),/^Symbol\(([^)]*)\)/,"$1")+"]"),a&&a.getter&&(n="get "+n),a&&a.setter&&(n="set "+n),(!Mt(t,"name")||Ki&&t.name!==n)&&(An?Dt(t,"name",{value:n,configurable:!0}):t.name=n),Ji&&a&&Mt(a,"arity")&&t.length!==a.arity&&Dt(t,"length",{value:a.arity});try{a&&Mt(a,"constructor")&&a.constructor?An&&Dt(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch{}var u=Wi(t);return Mt(u,"source")||(u.source=Qi(Yi,typeof n=="string"?n:"")),t};Function.prototype.toString=ec(function(){return zi(this)&&Zi(this).source||Gi(this)},"toString");var tc=he,nc=je,rc=Rt,sc=hn,Ln=function(t,n,a,u){u||(u={});var s=u.enumerable,o=u.name!==void 0?u.name:n;if(tc(a)&&rc(a,o,u),u.global)s?t[n]=a:sc(n,a);else{try{u.unsafe?t[n]&&(s=!0):delete t[n]}catch{}s?t[n]=a:nc.f(t,n,{value:a,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t},us={},ac=Math.ceil,oc=Math.floor,ic=Math.trunc||function(t){var n=+t;return(n>0?oc:ac)(n)},$t=function(t){var n=+t;return n!=n||n===0?0:ic(n)},cc=$t,lc=Math.max,uc=Math.min,dc=$t,pc=Math.min,pt=function(t){return t>0?pc(dc(t),9007199254740991):0},hc=pt,It=function(t){return hc(t.length)},mc=ct,fc=function(t,n){var a=cc(t);return a<0?lc(a+n,0):uc(a,n)},gc=It,ds=function(t){return function(n,a,u){var s,o=mc(n),d=gc(o),p=fc(u,d);if(t&&a!=a){for(;d>p;)if((s=o[p++])!=s)return!0}else for(;d>p;p++)if((t||p in o)&&o[p]===a)return t||p||0;return!t&&-1}},bc={includes:ds(!0),indexOf:ds(!1)},Mn=Ae,_c=ct,yc=bc.indexOf,vc=Tn,ps=oe([].push),hs=function(t,n){var a,u=_c(t),s=0,o=[];for(a in u)!Mn(vc,a)&&Mn(u,a)&&ps(o,a);for(;n.length>s;)Mn(u,a=n[s++])&&(~yc(o,a)||ps(o,a));return o},Dn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ec=hs,Sc=Dn.concat("length","prototype");us.f=Object.getOwnPropertyNames||function(t){return Ec(t,Sc)};var ms={};ms.f=Object.getOwnPropertySymbols;var wc=Ct,kc=us,xc=ms,Tc=Le,Cc=oe([].concat),qc=wc("Reflect","ownKeys")||function(t){var n=kc.f(Tc(t)),a=xc.f;return a?Cc(n,a(t)):n},fs=Ae,Nc=qc,Oc=k,Rc=je,Ac=x,Lc=he,Mc=/#|\.prototype\./,ht=function(t,n){var a=$c[Dc(t)];return a==Uc||a!=Ic&&(Lc(n)?Ac(n):!!n)},Dc=ht.normalize=function(t){return String(t).replace(Mc,".").toLowerCase()},$c=ht.data={},Ic=ht.NATIVE="N",Uc=ht.POLYFILL="P",Pc=ht,$n=T,Bc=k.f,jc=Ot,Hc=Ln,Fc=hn,zc=function(t,n,a){for(var u=Nc(n),s=Rc.f,o=Oc.f,d=0;d<u.length;d++){var p=u[d];fs(t,p)||a&&fs(a,p)||s(t,p,o(n,p))}},Kc=Pc,Ee=function(t,n){var a,u,s,o,d,p=t.target,l=t.global,e=t.stat;if(a=l?$n:e?$n[p]||Fc(p,{}):($n[p]||{}).prototype)for(u in n){if(o=n[u],s=t.dontCallGetSet?(d=Bc(a,u))&&d.value:a[u],!Kc(l?u:p+(e?".":"#")+u,t.forced)&&s!==void 0){if(typeof o==typeof s)continue;zc(o,s)}(t.sham||s&&s.sham)&&jc(o,"sham",!0),Hc(a,u,o,t)}},Gc=Pe,Wc=oe,mt=function(t){if(Gc(t)==="Function")return Wc(t)},gs={};gs[we("toStringTag")]="z";var In,Un=String(gs)==="[object z]",Zc=Un,Vc=he,Ut=Pe,Xc=we("toStringTag"),Qc=Object,Jc=Ut(function(){return arguments}())=="Arguments",Pn=Zc?Ut:function(t){var n,a,u;return t===void 0?"Undefined":t===null?"Null":typeof(a=function(s,o){try{return s[o]}catch{}}(n=Qc(t),Xc))=="string"?a:Jc?Ut(n):(u=Ut(n))=="Object"&&Vc(n.callee)?"Arguments":u},Yc=Pn,el=String,Je=function(t){if(Yc(t)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return el(t)},tl=Ce,nl=Pe,rl=we("match"),sl=function(t){var n;return tl(t)&&((n=t[rl])!==void 0?!!n:nl(t)=="RegExp")},al=TypeError,bs=function(t){if(sl(t))throw al("The method doesn't accept regular expressions");return t},ol=we("match"),_s=function(t){var n=/./;try{"/./"[t](n)}catch{try{return n[ol]=!1,"/./"[t](n)}catch{}}return!1},il=Ee,ys=mt,cl=k.f,ll=pt,vs=Je,ul=bs,dl=Be,pl=_s,Es=ys("".startsWith),hl=ys("".slice),ml=Math.min,Ss=pl("startsWith");il({target:"String",proto:!0,forced:!!(Ss||(In=cl(String.prototype,"startsWith"),!In||In.writable))&&!Ss},{startsWith:function(t){var n=vs(dl(this));ul(t);var a=ll(ml(arguments.length>1?arguments[1]:void 0,n.length)),u=vs(t);return Es?Es(n,u,a):hl(n,a,a+u.length)===u}});var fl=Ee,ws=mt,gl=k.f,bl=pt,ks=Je,_l=bs,yl=Be,vl=_s,xs=ws("".endsWith),El=ws("".slice),Sl=Math.min,Ts=vl("endsWith"),wl=!Ts&&!!function(){var t=gl(String.prototype,"endsWith");return t&&!t.writable}();fl({target:"String",proto:!0,forced:!wl&&!Ts},{endsWith:function(t){var n=ks(yl(this));_l(t);var a=arguments.length>1?arguments[1]:void 0,u=n.length,s=a===void 0?u:Sl(bl(a),u),o=ks(t);return xs?xs(n,o,s):El(n,s-o.length,s)===o}});var kl=qt,xl=U,Tl=mt(mt.bind),Cl=Pe,Cs=Array.isArray||function(t){return Cl(t)=="Array"},ql=oe,Nl=x,qs=he,Ol=Pn,Rl=rs,Ns=function(){},Al=[],Os=Ct("Reflect","construct"),Bn=/^\s*(?:class|function)\b/,Ll=ql(Bn.exec),Ml=!Bn.exec(Ns),ft=function(t){if(!qs(t))return!1;try{return Os(Ns,Al,t),!0}catch{return!1}},Rs=function(t){if(!qs(t))return!1;switch(Ol(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Ml||!!Ll(Bn,Rl(t))}catch{return!0}};Rs.sham=!0;var Dl=!Os||Nl(function(){var t;return ft(ft.call)||!ft(Object)||!ft(function(){t=!0})||t})?Rs:ft,As=Cs,$l=Dl,Il=Ce,Ul=we("species"),Ls=Array,Pl=function(t){var n;return As(t)&&(n=t.constructor,($l(n)&&(n===Ls||As(n.prototype))||Il(n)&&(n=n[Ul])===null)&&(n=void 0)),n===void 0?Ls:n},Ms=function(t,n){return new(Pl(t))(n===0?0:n)},Bl=function(t,n){return kl(t),n===void 0?t:xl?Tl(t,n):function(){return t.apply(n,arguments)}},jl=kt,Hl=Ve,Fl=It,zl=Ms,Ds=oe([].push),Me=function(t){var n=t==1,a=t==2,u=t==3,s=t==4,o=t==6,d=t==7,p=t==5||o;return function(l,e,h,m){for(var g,f,c=Hl(l),i=jl(c),r=Bl(e,h),se=Fl(i),H=0,C=m||zl,L=n?C(l,se):a||d?C(l,0):void 0;se>H;H++)if((p||H in i)&&(f=r(g=i[H],H,c),t))if(n)L[H]=f;else if(f)switch(t){case 3:return!0;case 5:return g;case 6:return H;case 2:Ds(L,g)}else switch(t){case 4:return!1;case 7:Ds(L,g)}return o?-1:u||s?s:L}},jn={forEach:Me(0),map:Me(1),filter:Me(2),some:Me(3),every:Me(4),find:Me(5),findIndex:Me(6),filterReject:Me(7)},Kl=x,Hn=function(t,n){var a=[][t];return!!a&&Kl(function(){a.call(null,n||function(){return 1},1)})},Gl=jn.forEach,Fn=Hn("forEach")?[].forEach:function(t){return Gl(this,t,arguments.length>1?arguments[1]:void 0)};Ee({target:"Array",proto:!0,forced:[].forEach!=Fn},{forEach:Fn});var Wl=Pn,Zl=Un?{}.toString:function(){return"[object "+Wl(this)+"]"};Un||Ln(Object.prototype,"toString",Zl,{unsafe:!0});var zn=_n("span").classList,$s=zn&&zn.constructor&&zn.constructor.prototype,Is=T,Us={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Vl=$s===Object.prototype?void 0:$s,Kn=Fn,Xl=Ot,Ps=function(t){if(t&&t.forEach!==Kn)try{Xl(t,"forEach",Kn)}catch{t.forEach=Kn}};for(var Gn in Us)Us[Gn]&&Ps(Is[Gn]&&Is[Gn].prototype);Ps(Vl);var Ql=x,Jl=lt,Yl=we("species"),Wn=function(t){return Jl>=51||!Ql(function(){var n=[];return(n.constructor={})[Yl]=function(){return{foo:1}},n[t](Boolean).foo!==1})},eu=jn.filter;Ee({target:"Array",proto:!0,forced:!Wn("filter")},{filter:function(t){return eu(this,t,arguments.length>1?arguments[1]:void 0)}});var tu=Le,Zn=x,Vn=T.RegExp,Xn=Zn(function(){var t=Vn("a","y");return t.lastIndex=2,t.exec("abcd")!=null}),nu=Xn||Zn(function(){return!Vn("a","y").sticky}),ru={BROKEN_CARET:Xn||Zn(function(){var t=Vn("^r","gy");return t.lastIndex=2,t.exec("str")!=null}),MISSED_STICKY:nu,UNSUPPORTED_Y:Xn},Bs={},su=hs,au=Dn,js=Object.keys||function(t){return su(t,au)},ou=A,iu=Yr,cu=je,lu=Le,uu=ct,du=js;Bs.f=ou&&!iu?Object.defineProperties:function(t,n){lu(t);for(var a,u=uu(n),s=du(n),o=s.length,d=0;o>d;)cu.f(t,a=s[d++],u[a]);return t};var Pt,pu=Ct("document","documentElement"),hu=Le,mu=Bs,Hs=Dn,fu=Tn,gu=pu,bu=_n,Qn="prototype",Jn="script",Fs=os("IE_PROTO"),Yn=function(){},zs=function(t){return"<"+Jn+">"+t+"</"+Jn+">"},Ks=function(t){t.write(zs("")),t.close();var n=t.parentWindow.Object;return t=null,n},Bt=function(){try{Pt=new ActiveXObject("htmlfile")}catch{}var t,n,a;Bt=typeof document<"u"?document.domain&&Pt?Ks(Pt):(n=bu("iframe"),a="java"+Jn+":",n.style.display="none",gu.appendChild(n),n.src=String(a),(t=n.contentWindow.document).open(),t.write(zs("document.F=Object")),t.close(),t.F):Ks(Pt);for(var u=Hs.length;u--;)delete Bt[Qn][Hs[u]];return Bt()};fu[Fs]=!0;var Gs,er,_u=Object.create||function(t,n){var a;return t!==null?(Yn[Qn]=hu(t),a=new Yn,Yn[Qn]=null,a[Fs]=t):a=Bt(),n===void 0?a:mu.f(a,n)},yu=x,vu=T.RegExp,Eu=yu(function(){var t=vu(".","s");return!(t.dotAll&&t.exec(`
`)&&t.flags==="s")}),Su=x,wu=T.RegExp,ku=Su(function(){var t=wu("(?<a>b)","g");return t.exec("b").groups.a!=="b"||"b".replace(t,"$<a>c")!=="bc"}),Ye=J,jt=oe,xu=Je,Tu=function(){var t=tu(this),n="";return t.hasIndices&&(n+="d"),t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.unicodeSets&&(n+="v"),t.sticky&&(n+="y"),n},Cu=ru,qu=_u,Nu=On.get,Ou=Eu,Ru=ku,Au=ut("native-string-replace",String.prototype.replace),Ht=RegExp.prototype.exec,tr=Ht,Lu=jt("".charAt),Mu=jt("".indexOf),Du=jt("".replace),nr=jt("".slice),rr=(er=/b*/g,Ye(Ht,Gs=/a/,"a"),Ye(Ht,er,"a"),Gs.lastIndex!==0||er.lastIndex!==0),Ws=Cu.BROKEN_CARET,sr=/()??/.exec("")[1]!==void 0;(rr||sr||Ws||Ou||Ru)&&(tr=function(t){var n,a,u,s,o,d,p,l=this,e=Nu(l),h=xu(t),m=e.raw;if(m)return m.lastIndex=l.lastIndex,n=Ye(tr,m,h),l.lastIndex=m.lastIndex,n;var g=e.groups,f=Ws&&l.sticky,c=Ye(Tu,l),i=l.source,r=0,se=h;if(f&&(c=Du(c,"y",""),Mu(c,"g")===-1&&(c+="g"),se=nr(h,l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&Lu(h,l.lastIndex-1)!==`
`)&&(i="(?: "+i+")",se=" "+se,r++),a=new RegExp("^(?:"+i+")",c)),sr&&(a=new RegExp("^"+i+"$(?!\\s)",c)),rr&&(u=l.lastIndex),s=Ye(Ht,f?a:l,se),f?s?(s.input=nr(s.input,r),s[0]=nr(s[0],r),s.index=l.lastIndex,l.lastIndex+=s[0].length):l.lastIndex=0:rr&&s&&(l.lastIndex=l.global?s.index+s[0].length:u),sr&&s&&s.length>1&&Ye(Au,s[0],a,function(){for(o=1;o<arguments.length-2;o++)arguments[o]===void 0&&(s[o]=void 0)}),s&&g)for(s.groups=d=qu(null),o=0;o<g.length;o++)d[(p=g[o])[0]]=s[p[1]];return s});var Ft=tr;Ee({target:"RegExp",proto:!0,forced:/./.exec!==Ft},{exec:Ft});var $u=U,Zs=Function.prototype,Vs=Zs.apply,Xs=Zs.call,Iu=typeof Reflect=="object"&&Reflect.apply||($u?Xs.bind(Vs):function(){return Xs.apply(Vs,arguments)}),Qs=mt,Js=Ln,Uu=Ft,Ys=x,ea=we,Pu=Ot,Bu=ea("species"),ar=RegExp.prototype,ta=function(t,n,a,u){var s=ea(t),o=!Ys(function(){var e={};return e[s]=function(){return 7},""[t](e)!=7}),d=o&&!Ys(function(){var e=!1,h=/a/;return t==="split"&&((h={}).constructor={},h.constructor[Bu]=function(){return h},h.flags="",h[s]=/./[s]),h.exec=function(){return e=!0,null},h[s](""),!e});if(!o||!d||a){var p=Qs(/./[s]),l=n(s,""[t],function(e,h,m,g,f){var c=Qs(e),i=h.exec;return i===Uu||i===ar.exec?o&&!f?{done:!0,value:p(h,m,g)}:{done:!0,value:c(m,h,g)}:{done:!1}});Js(String.prototype,t,l[0]),Js(ar,s,l[1])}u&&Pu(ar[s],"sham",!0)},or=oe,ju=$t,Hu=Je,Fu=Be,zu=or("".charAt),na=or("".charCodeAt),Ku=or("".slice),ra=function(t){return function(n,a){var u,s,o=Hu(Fu(n)),d=ju(a),p=o.length;return d<0||d>=p?t?"":void 0:(u=na(o,d))<55296||u>56319||d+1===p||(s=na(o,d+1))<56320||s>57343?t?zu(o,d):u:t?Ku(o,d,d+2):s-56320+(u-55296<<10)+65536}},Gu={codeAt:ra(!1),charAt:ra(!0)}.charAt,sa=function(t,n,a){return n+(a?Gu(t,n).length:1)},ir=oe,Wu=Ve,Zu=Math.floor,cr=ir("".charAt),Vu=ir("".replace),lr=ir("".slice),Xu=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Qu=/\$([$&'`]|\d{1,2})/g,aa=J,Ju=Le,Yu=he,ed=Pe,td=Ft,nd=TypeError,oa=function(t,n){var a=t.exec;if(Yu(a)){var u=aa(a,t,n);return u!==null&&Ju(u),u}if(ed(t)==="RegExp")return aa(td,t,n);throw nd("RegExp#exec called on incompatible receiver")},rd=Iu,ia=J,zt=oe,sd=ta,ad=x,od=Le,id=he,cd=xt,ld=$t,ud=pt,et=Je,dd=Be,pd=sa,hd=ln,md=function(t,n,a,u,s,o){var d=a+t.length,p=u.length,l=Qu;return s!==void 0&&(s=Wu(s),l=Xu),Vu(o,l,function(e,h){var m;switch(cr(h,0)){case"$":return"$";case"&":return t;case"`":return lr(n,0,a);case"'":return lr(n,d);case"<":m=s[lr(h,1,-1)];break;default:var g=+h;if(g===0)return e;if(g>p){var f=Zu(g/10);return f===0?e:f<=p?u[f-1]===void 0?cr(h,1):u[f-1]+cr(h,1):e}m=u[g-1]}return m===void 0?"":m})},fd=oa,ur=we("replace"),gd=Math.max,bd=Math.min,_d=zt([].concat),dr=zt([].push),ca=zt("".indexOf),la=zt("".slice),yd="a".replace(/./,"$0")==="$0",ua=!!/./[ur]&&/./[ur]("a","$0")==="";sd("replace",function(t,n,a){var u=ua?"$":"$0";return[function(s,o){var d=dd(this),p=cd(s)?void 0:hd(s,ur);return p?ia(p,s,d,o):ia(n,et(d),s,o)},function(s,o){var d=od(this),p=et(s);if(typeof o=="string"&&ca(o,u)===-1&&ca(o,"$<")===-1){var l=a(n,d,p,o);if(l.done)return l.value}var e=id(o);e||(o=et(o));var h=d.global;if(h){var m=d.unicode;d.lastIndex=0}for(var g=[];;){var f=fd(d,p);if(f===null||(dr(g,f),!h))break;et(f[0])===""&&(d.lastIndex=pd(p,ud(d.lastIndex),m))}for(var c,i="",r=0,se=0;se<g.length;se++){for(var H=et((f=g[se])[0]),C=gd(bd(ld(f.index),p.length),0),L=[],M=1;M<f.length;M++)dr(L,(c=f[M])===void 0?c:String(c));var K=f.groups;if(e){var F=_d([H],L,C,p);K!==void 0&&dr(F,K);var B=et(rd(o,void 0,F))}else B=md(H,p,C,L,K,o);C>=r&&(i+=la(p,r,C)+B,r=C+H.length)}return i+la(p,r)}]},!!ad(function(){var t=/./;return t.exec=function(){var n=[];return n.groups={a:"7"},n},"".replace(t,"$<a>")!=="7"})||!yd||ua);var da=Rt,vd=je,Ed=A,Sd=ns.EXISTS,pa=oe,wd=function(t,n,a){return a.get&&da(a.get,n,{getter:!0}),a.set&&da(a.set,n,{setter:!0}),vd.f(t,n,a)},ha=Function.prototype,kd=pa(ha.toString),ma=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,xd=pa(ma.exec);Ed&&!Sd&&wd(ha,"name",{configurable:!0,get:function(){try{return xd(ma,kd(this))[1]}catch{return""}}});var Td=jn.map;Ee({target:"Array",proto:!0,forced:!Wn("map")},{map:function(t){return Td(this,t,arguments.length>1?arguments[1]:void 0)}});var Cd=TypeError,qd=gn,Nd=je,Od=at,Rd=Ee,Ad=x,Ld=Cs,Md=Ce,Dd=Ve,$d=It,fa=function(t){if(t>9007199254740991)throw Cd("Maximum allowed index exceeded");return t},ga=function(t,n,a){var u=qd(n);u in t?Nd.f(t,u,Od(0,a)):t[u]=a},Id=Ms,Ud=Wn,Pd=lt,ba=we("isConcatSpreadable"),Bd=Pd>=51||!Ad(function(){var t=[];return t[ba]=!1,t.concat()[0]!==t}),jd=function(t){if(!Md(t))return!1;var n=t[ba];return n!==void 0?!!n:Ld(t)};Rd({target:"Array",proto:!0,arity:1,forced:!Bd||!Ud("concat")},{concat:function(t){var n,a,u,s,o,d=Dd(this),p=Id(d,0),l=0;for(n=-1,u=arguments.length;n<u;n++)if(jd(o=n===-1?d:arguments[n]))for(s=$d(o),fa(l+s),a=0;a<s;a++,l++)a in o&&ga(p,l,o[a]);else fa(l+1),ga(p,l++,o);return p.length=l,p}});var Hd=Ee,Fd=kt,zd=ct,Kd=Hn,Gd=oe([].join);Hd({target:"Array",proto:!0,forced:Fd!=Object||!Kd("join",",")},{join:function(t){return Gd(zd(this),t===void 0?",":t)}});var Wd=J,Zd=Le,Vd=xt,Xd=pt,pr=Je,Qd=Be,Jd=ln,Yd=sa,_a=oa;ta("match",function(t,n,a){return[function(u){var s=Qd(this),o=Vd(u)?void 0:Jd(u,t);return o?Wd(o,u,s):new RegExp(u)[t](pr(s))},function(u){var s=Zd(this),o=pr(u),d=a(n,s,o);if(d.done)return d.value;if(!s.global)return _a(s,o);var p=s.unicode;s.lastIndex=0;for(var l,e=[],h=0;(l=_a(s,o))!==null;){var m=pr(l[0]);e[h]=m,m===""&&(s.lastIndex=Yd(o,Xd(s.lastIndex),p)),h++}return h===0?null:e}]});var ep=qt,tp=Ve,np=kt,rp=It,sp=TypeError,ya=function(t){return function(n,a,u,s){ep(a);var o=tp(n),d=np(o),p=rp(o),l=t?p-1:0,e=t?-1:1;if(u<2)for(;;){if(l in d){s=d[l],l+=e;break}if(l+=e,t?l<0:p<=l)throw sp("Reduce of empty array with no initial value")}for(;t?l>=0:p>l;l+=e)l in d&&(s=a(s,d[l],l,o));return s}},ap={left:ya(!1),right:ya(!0)},op=typeof process<"u"&&Pe(process)=="process",ip=ap.left;Ee({target:"Array",proto:!0,forced:!op&&lt>79&&lt<83||!Hn("reduce")},{reduce:function(t){var n=arguments.length;return ip(this,t,n,n>1?arguments[1]:void 0)}});var cp=Ve,va=js;function b(t,n){if(t!==n)throw new TypeError("Cannot instantiate an arrow function")}Ee({target:"Object",stat:!0,forced:x(function(){va(1)})},{keys:function(t){return va(cp(t))}});var lp=oe([].slice),Ea=oe,up=qt,dp=Ce,pp=Ae,Sa=lp,hp=U,wa=Function,mp=Ea([].concat),fp=Ea([].join),hr={},gp=hp?wa.bind:function(t){var n=up(this),a=n.prototype,u=Sa(arguments,1),s=function(){var o=mp(u,Sa(arguments));return this instanceof s?function(d,p,l){if(!pp(hr,p)){for(var e=[],h=0;h<p;h++)e[h]="a["+h+"]";hr[p]=wa("C,a","return new C("+fp(e,",")+")")}return hr[p](d,l)}(n,o.length,o):n.apply(t,o)};return dp(a)&&(s.prototype=a),s},ka=gp;Ee({target:"Function",proto:!0,forced:Function.bind!==ka},{bind:ka});var xa={"swift/urlsession":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Create a new URLRequest object
var request = URLRequest(url: URL(string: "`),e(h),e(`")!)

// Set the request method
request.httpMethod = "`),e(m),e(`"

// Set the request content type header
request.addValue("`),e(g),e(`", forHTTPHeaderField: "Content-Type")

`),f.length>0&&(e(`// Add headers to the request
`),f.forEach(function(r){b(this,s),e(`
request.addValue("`),e(n(r.value)),e('", forHTTPHeaderField: "'),e(n(r.name)),e(`")
`)}.bind(this))),e(`

`),i.length>0&&(e(`// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
request.addValue("`),e(n(r.value)),e('", forHTTPHeaderField: "'),e(n(r.name)),e(`")
`)}.bind(this))),e(`

`),m==="POST"&&c.length>0&&(e(`// Set the request body
`),c.length===1&&c[0].type==="file"?e(`
let fileUrl = URL(fileURLWithPath: "/path/to/file")
let data = try Data(contentsOf: fileUrl)
request.httpBody = data
`):(e(`
let postData = "`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`"
let postDataEncoded = postData.data(using: .utf8)
request.httpBody = postDataEncoded
`))),e(`

// Create a new URLSession object
let session = URLSession.shared

// Send the request
let task = session.dataTask(with: request) { (data, response, error) in
guard let data = data else { return }
print("Response:", String(data: data, encoding: .utf8)!)
}

task.resume()
`),l},"swift/alamofire":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
// Construct the request URL
let fullUrl = "`),e(h),e(`"

// Set up the request headers
var headers: HTTPHeaders = [:]
`),g.forEach(function(i){b(this,s),e(`
headers["`),e(n(i.name)),e('"] = "'),e(n(i.value)),e(`"
`)}.bind(this)),e(`

// Add cookies to the request
`),c.forEach(function(i){b(this,s),e(`
let cookie = HTTPCookie(properties: [
    .domain: "`),e(n(i.domain)),e(`",
    .path: "`),e(n(i.path)),e(`",
    .name: "`),e(n(i.name)),e(`",
    .value: "`),e(n(i.value)),e(`",
])!
HTTPCookieStorage.shared.setCookie(cookie)
`)}.bind(this)),e(`

// Set up the request parameters
var parameters: Parameters = [:]
`),f.forEach(function(i){b(this,s),e(`
parameters["`),e(n(i.name)),e('"] = "'),e(n(i.value)),e(`"
`)}.bind(this)),e(`

// Create the request
AF.request(fullUrl, method: .`),e(n(m.toLowerCase())),e(`, parameters: parameters, headers: headers).response { response in
    switch response.result {
    case .success(let data):
        if let data = data {
            print("Response:", String(data: data, encoding: .utf8)!)
        }
    case .failure(let error):
        print("Error:", error.localizedDescription)
    }
}
`),l},"scala/scalaj-http":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import scalaj.http._

val url = "`),e(n(h)),e(`"
val method = "`),e(n(m)),e(`"
val mimeType = "`),e(n(g)),e(`"
val headers = `),f.length>0?(e(`Seq(
`),f.forEach(function(r){b(this,s),e(`
  ("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Nil"),e(`
val cookies = `),i.length>0?(e(`Seq(
`),i.forEach(function(r){b(this,s),e(`
  HttpCookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Nil"),e(`
val postData = `),c.length>0?(e(`Seq(
`),c.forEach(function(r){b(this,s),e(`
  ("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Nil"),e(`

// Construct the request
val request = Http(url).method(method)
  .headers(headers)
  .cookies(cookies)
  .timeout(connTimeoutMs = 10000, readTimeoutMs = 60000)
  .option(HttpOptions.followRedirects(true))

// Add request body if needed
if (postData.nonEmpty) {
  val entity = `),c.length===1&&c[0].type==="file"?(e(`
    MultipartFormData(Seq(
      `),c.forEach(function(r){b(this,s),e(`
        FileData("`),e(n(r.name)),e('", new java.io.File("'),e(n(r.value)),e(`"))
      `)}.bind(this)),e(`
    )).toEntity
  `)):e(`
    HttpConstants.writePostData(postData).getBytes("UTF-8")
  `),e(`
  request.postData(entity, mimeType)
}

// Send the request
val response = request.asString

// Handle the response
if (response.isSuccess) {
  println("Response: " + response.body)
} else {
  println("Error: " + response.code + " " + response.statusLine)
}
`),l},"scala/http4s":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import cats.effect._
import org.http4s._
import org.http4s.client.blaze._
import org.http4s.client.dsl.io._
import org.http4s.headers._
import org.http4s.MediaType._

val url = "`),e(n(h)),e(`"
val method = "`),e(n(m)),e(`"
val mimeType = "`),e(n(g)),e(`"
val headers = `),f.length>0?(e(`Headers(
`),f.forEach(function(r){b(this,s),e(`
  Header.apply("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Headers.empty"),e(`
val cookies = `),i.length>0?(e(`Seq(
`),i.forEach(function(r){b(this,s),e(`
  RequestCookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Seq.empty"),e(`
val postData = `),c.length>0?(e(`UrlForm(
`),c.forEach(function(r){b(this,s),e(`
  "`),e(n(r.name)),e('" -> "'),e(n(r.value)),e(`",
`)}.bind(this)),e(`
)`)):e("UrlForm.empty"),e(`

// Construct the request
implicit val cs = IO.contextShift(ExecutionContext.global)
val client = Http1Client[IO]().unsafeRunSync()
val request = Method.`),e(n(m.toUpperCase())),e(`(Uri.unsafeFromString(url), postData)
  .withHeaders(headers)
  .withCredentials(Credentials(cookies))

// Send the request
val response = client.expect[String](request).unsafeRunSync()

// Handle the response
println("Response: " + response)

// Clean up
client.shutdownNow()
`),l},"scala/akka":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer
import akka.stream.scaladsl._
import scala.concurrent.Future
import scala.util.{Failure, Success}

val url = "`),e(n(h)),e(`"
val method = "`),e(n(m)),e(`"
val mimeType = "`),e(n(g)),e(`"
val headers = List(
`),f.forEach(function(r){b(this,s),e(`
  HttpHeader.parse("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`").asInstanceOf[HttpHeader],
`)}.bind(this)),e(`
)
val cookies = List(
`),i.forEach(function(r){b(this,s),e(`
  HttpCookiePair("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`").asInstanceOf[HttpCookiePair],
`)}.bind(this)),e(`
)
val postData = List(
`),c.forEach(function(r){b(this,s),e(`
  FormData.BodyPart.Strict("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`").asInstanceOf[FormData.BodyPart.Strict],
`)}.bind(this)),e(`
)

// Construct the request
implicit val system = ActorSystem()
implicit val materializer = ActorMaterializer()
implicit val executionContext = system.dispatcher

val request = HttpRequest(
  method = HttpMethods.`),e(n(m.toUpperCase())),e(`,
  uri = url,
  headers = headers,
  entity = `),c.length>0?e("FormData(postData).toEntity"):e("HttpEntity.Empty"),e(`
).addCredentials(cookies)

// Send the request
val responseFuture: Future[HttpResponse] = Http().singleRequest(request)

// Handle the response
responseFuture.onComplete {
  case Success(response) =>
    response.entity.dataBytes.runWith(Sink.fold("")(_ + _.utf8String))
      .onComplete {
        case Success(responseBody) => println("Response: " + responseBody)
        case Failure(ex) => println("Failed to get response body: " + ex.getMessage)
      }
  case Failure(ex) => println("Error: " + ex.getMessage)
}
`),l},"rust/surf":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
use surf::http::{Method, Url, headers::{Headers, HeaderValue}};

// Construct the request URL
let url = Url::new("`),e(n(h)),e(`").unwrap();

// Set up the request
let mut req = surf::Request::new(`),e(n(m)),e(` , url);

// Add headers to the request
`),g.forEach(function(i){b(this,s),e(`
req.insert_header("`),e(n(i.name)),e('", HeaderValue::from_str("'),e(n(i.value)),e(`").unwrap());
`)}.bind(this)),e(`

// Add cookies to the request
`),c.forEach(function(i){b(this,s),e(`
req.insert_cookie(surf::http::Cookie::new("`),e(n(i.name)),e('", "'),e(n(i.value)),e(`"));
`)}.bind(this)),e(`

// Send the request
`),f.length>0&&(e(`
let body = `),f.length===1&&f[0].type==="file"?(e(`
surf::Body::from_form(&surf::http::Form::from(`),f[0].value,e(`))
`)):(e(`
surf::Body::from("`),e(n(f.map(function(i){return b(this,s),i.name+"="+encodeURIComponent(i.value)}.bind(this)).join("&"))),e(`")
`)),e(`;
req.set_body(body);
`)),e(`

// Send the request and handle the response
let res = async {
    let mut res = req.await?;
    let body = res.body_string().await?;
    println!("Response: {}", body);
    Ok(())
}.await;

// Handle errors
if let Err(err) = res {
    eprintln!("Error: {}", err);
}
`),l},"rust/reqwest":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
let url = "`),e(n(h)),e(`";
let method = "`),e(n(m)),e(`";
let mime_type = "`),e(n(g)),e(`";

let headers = reqwest::header::HeaderMap::new();
`),f.forEach(function(r){b(this,s),e(`
headers.insert("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`".parse().unwrap());
`)}.bind(this)),e(`

let mut cookies = reqwest::cookie::CookieJar::new();
`),i.forEach(function(r){b(this,s),e(`
cookies.add(reqwest::cookie::Cookie::new("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"));
`)}.bind(this)),e(`

let mut request_builder = reqwest::Client::new().request(method, url);
request_builder = request_builder.headers(headers);
request_builder = request_builder.cookie_store(cookies);

// Add post data to the request
`),c.length>0&&(e(`
`),c.length===1&&c[0].type==="file"?(e(`
let form_data = reqwest::multipart::Form::new()
    .file("`),e(n(c[0].name)),e('", "'),e(n(c[0].value)),e(`").unwrap();
`)):(e(`
let post_data = "`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`";
let request_builder = request_builder.body(post_data);
`)),e(`
`)),e(`

let response = request_builder.send().await.unwrap();
let response_text = response.text().await.unwrap();
println!("Response: {}", response_text);
`),l},"rust/hyper":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Create a new Hyper client object
let client = hyper::Client::new();

// Construct the request URL
let full_url = "`),e(n(h)),e(`";

// Create the request
let mut req = hyper::Request::new(hyper::Method::`),e(n(m)),e(`, full_url);

// Add headers to the request
`),f.forEach(function(r){b(this,s),e(`
req.headers_mut().insert(hyper::header::`),e(n(r.name)),e(", "),e(n(r.value)),e(`.parse().unwrap());
`)}.bind(this)),e(`

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
req.headers_mut().insert(hyper::header::COOKIE, format!("`),e(n(r.name)),e("={"),e(n(r.value)),e(`}; "));
`)}.bind(this)),e(`

// Add the request body
`),c.length>0&&(e(`
`),c.length===1&&c[0].type==="file"?(e(`
let form = multipart::Form::new()
.file("`),e(n(c[0].name)),e('", "'),e(n(c[0].value)),e(`")
.unwrap();
let mut body = hyper::Body::from(form.stream());
`)):(e(`
let body = hyper::Body::from("`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`");
`)),e(`
req.headers_mut().insert(hyper::header::CONTENT_TYPE, "`),e(n(g)),e(`".parse().unwrap());
req.headers_mut().insert(hyper::header::CONTENT_LENGTH, body.len().into());
req.set_body(body);
`)),e(`

// Send the request and get the response
let res = client.request(req).await?;

// Print the response
println!("Response: \\n{:?}", res);
`),l},"ruby/restclient":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
require 'rest-client'

url = "`),e(n(h)),e(`"
method = "`),e(n(m)),e(`"
mimeType = "`),e(n(g)),e(`"

headers = {
  `),f.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" => "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
}

cookies = {
  `),i.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" => "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
}

`),m==="GET"?e(`
  response = RestClient.get(url, headers: headers, cookies: cookies)
`):(e(`
  body = "`),e(n(c.map(function(r){return b(this,s),r.name+"="+CGI.escape(r.value)}.bind(this)).join("&"))),e(`"
  response = RestClient::`),e(n(m.downcase)),e(`(url, body, headers: headers, cookies: cookies, content_type: mimeType)
`)),e(`

puts "Response: #{response.body}"
`),l},"ruby/http":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
require 'net/http'
require 'uri'

url = URI("`),e(n(h)),e(`")
method = "`),e(n(m)),e(`"
mimeType = "`),e(n(g)),e(`"

`),m==="GET"?e(`
  req = Net::HTTP::Get.new(url)
`):(e(`
  body = "`),e(n(c.map(function(r){return b(this,s),r.name+"="+CGI.escape(r.value)}.bind(this)).join("&"))),e(`"
  req = Net::HTTP::`),e(n(m.capitalize)),e(`.new(url)
  req.body = body
  req.content_type = mimeType
`)),e(`

`),f.forEach(function(r){b(this,s),e(`
  req['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`'
`)}.bind(this)),e(`

`),i.forEach(function(r){b(this,s),e(`
  req['Cookie'] = '`),e(n(r.name)),e("="),e(n(r.value)),e(`'
`)}.bind(this)),e(`

res = Net::HTTP.start(url.hostname, url.port, use_ssl: url.scheme == 'https') do |http|
  http.request(req)
end

puts "Response: #{res.body}"
`),l},"python/requests":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import requests

# Extract parameters from the options object
fullUrl = "`),e(n(h)),e(`"
method = "`),e(n(m)),e(`"
mimeType = "`),e(n(g)),e(`"
headers = {
    `),f.forEach(function(r){b(this,s),e(`
        '`),e(n(r.name)),e("': '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
}
postData = {
    `),c.forEach(function(r){b(this,s),e(`
        '`),e(n(r.name)),e("': '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
}
cookies = {
    `),i.forEach(function(r){b(this,s),e(`
        '`),e(n(r.name)),e("': '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
}

# Set up the request
req = requests.Request(method, fullUrl, headers=headers, cookies=cookies)

# Add data to the request
if postData:
    req.data = postData

# Construct the prepared request
prepared_req = req.prepare()

# Send the request and get the response
session = requests.Session()
response = session.send(prepared_req)

# Handle the response
print(f"{response.status_code} {response.reason}")
print(response.text)

# Handle errors
if response.status_code >= 400:
    print("Error:", response.status_code, response.reason)
`),l},"python/http":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import http.client

# Extract parameters from the options object
fullUrl = "`),e(n(h)),e(`"
method = "`),e(n(m)),e(`"
mimeType = "`),e(n(g)),e(`"
headers = [
    `),f.forEach(function(r){b(this,s),e(`
        ('`),e(n(r.name)),e("', '"),e(n(r.value)),e(`'),
    `)}.bind(this)),e(`
]
postData = {
    `),c.forEach(function(r){b(this,s),e(`
        '`),e(n(r.name)),e("': '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
}
cookies = {
    `),i.forEach(function(r){b(this,s),e(`
        '`),e(n(r.name)),e("': '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
}

# Set up the request
conn = http.client.HTTPSConnection(fullUrl)

# Add headers to the request
for header in headers:
    conn.request(method, url, headers=header)

# Add cookies to the request
cookie_str = '; '.join([f"{name}={value}" for name, value in cookies.items()])
    conn.request(method, url, headers={'Cookie': cookie_str})

# Send the request
if postData:
    postData_str = '&'.join([f"{name}={value}" for name, value in postData.items()])
    conn.request(method, url, body=postData_str, headers={'Content-Type': mimeType})
else:
    conn.request(method, url)

# Handle the response
res = conn.getresponse()
print(res.status, res.reason)
data = res.read()
print(data.decode("utf-8"))

# Handle errors
if res.status >= 400:
    print("Error:", res.status, res.reason)
`),l},"powershell/webrequest":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
$url = "`),e(n(h)),e(`"
$method = "`),e(n(m)),e(`"
$mimeType = "`),e(n(g)),e(`"

$headers = @{
  `),f.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
}

$cookies = @{
  `),i.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
}

`),m==="GET"?e(`
  $req = Invoke-WebRequest -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
    `),c.forEach(function(r){b(this,s),e(`
      "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
    `)}.bind(this)),e(`
  }

  $req = Invoke-WebRequest -Uri $url -Method $method -Body $body -Headers $headers -ContentType $mimeType -Cookies $cookies
`)),e(`

Write-Host "Response: " -ForegroundColor Green
Write-Host $req.Content
`),l},"powershell/restmethod":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
$url = "`),e(n(h)),e(`"
$method = "`),e(n(m)),e(`"
$mimeType = "`),e(n(g)),e(`"

$headers = @{
  `),f.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
}

$cookies = @{
  `),i.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
}

`),m==="GET"?e(`
  $req = Invoke-RestMethod -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
    `),c.forEach(function(r){b(this,s),e(`
      "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
    `)}.bind(this)),e(`
  }

  $req = Invoke-RestMethod -Uri $url -Method $method -Body $body -Headers $headers -ContentType $mimeType -Cookies $cookies
`)),e(`

Write-Host "Response: " -ForegroundColor Green
Write-Host $req | ConvertTo-Json -Depth 100 -Compress
`),l},"php/http2":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
<?php

    $host = parse_url("`),e(n(h)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(n(h)),e(`", PHP_URL_PATH) ?: "/";

    $httpHeaders = array(
    `),g.forEach(function(i){b(this,s),e(`
        "`),e(n(i.name)),e('" => "'),e(n(i.value)),e(`",
    `)}.bind(this)),e(`
    );

    $httpCookies = array(
    `),c.forEach(function(i){b(this,s),e(`
        "`),e(n(i.name)),e('" => "'),e(n(i.value)),e(`",
    `)}.bind(this)),e(`
    );

    $httpBody = null;
    if ("`),e(n(m)),e(`" === "POST") {
        $httpBody = "`),e(n(f.map(function(i){return b(this,s),i.name+"="+urlencode(i.value)}.bind(this)).join("&"))),e(`";
    }

    $streamContext = stream_context_create([
        'http' => [
            'method' => "`),e(n(m)),e(`",
            'header' => implode("\\r\\n", $httpHeaders),
            'content' => $httpBody,
            'follow_location' => false,
            'protocol_version' => 2.0,
        ],
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
        ],
    ]);

    $response = file_get_contents("https://$host$path", false, $streamContext);

    echo "Response: " . $response;

?>
`),l},"php/http1":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
<?php

    $host = parse_url("`),e(n(h)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(n(h)),e(`", PHP_URL_PATH) ?: "/";

    $httpHeaders = array(
    `),g.forEach(function(i){b(this,s),e(`
        "`),e(n(i.name)),e(": "),e(n(i.value)),e(`",
    `)}.bind(this)),e(`
    );

    $httpCookies = array(
    `),c.forEach(function(i){b(this,s),e(`
        "`),e(n(i.name)),e('" => "'),e(n(i.value)),e(`",
    `)}.bind(this)),e(`
    );

    $httpBody = null;
    if ("`),e(n(m)),e(`" === "POST") {
        $httpBody = "`),e(n(f.map(function(i){return b(this,s),i.name+"="+urlencode(i.value)}.bind(this)).join("&"))),e(`";
    }

    $request = new http\\Client\\Request("`),e(n(m)),e(`", "http://$host$path");
    $request->setHeaders($httpHeaders);
    $request->setCookies($httpCookies);
    $request->setBody($httpBody);

    $client = new http\\Client;
    $client->enqueue($request);

    $response = $client->send();

    echo "Response: " . $response->getBody();

?>
`),l},"php/guzzle":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
<?php

    use GuzzleHttp\\Client;
    use GuzzleHttp\\Exception\\RequestException;

    $client = new Client();

    $url = "`),e(n(h)),e(`";

    $headers = array(
    `),g.forEach(function(i){b(this,s),e(`
        "`),e(n(i.name)),e('" => "'),e(n(i.value)),e(`",
    `)}.bind(this)),e(`
    );

    $cookies = array(
    `),c.forEach(function(i){b(this,s),e(`
        "`),e(n(i.name)),e('" => "'),e(n(i.value)),e(`",
    `)}.bind(this)),e(`
    );

    $requestBody = null;
    if ("`),e(n(m)),e(`" === "POST") {
        $requestBody = "`),e(n(f.map(function(i){return b(this,s),i.name+"="+urlencode(i.value)}.bind(this)).join("&"))),e(`";
    }

    try {
        $response = $client->request('`),e(n(m)),e(`', $url, [
            'headers' => $headers,
            'cookies' => $cookies,
            'body' => $requestBody,
        ]);

        echo "Response: " . $response->getBody();
    } catch (RequestException $e) {
        echo "Error: " . $e->getMessage();
    }

?>
`),l},"php/curl":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
<?php

    $url = "`),e(n(h)),e(`";

    $requestHeaders = array(
    `),g.forEach(function(i){b(this,s),e(`
        "`),e(n(i.name)),e(": "),e(n(i.value)),e(`",
    `)}.bind(this)),e(`
    );

    $requestCookies = array(
    `),c.forEach(function(i){b(this,s),e(`
        "`),e(n(i.name)),e("=<"),e(n(i.value)),e(`>",
    `)}.bind(this)),e(`
    );

    $requestBody = null;
    if ("`),e(n(m)),e(`" === "POST") {
        $requestBody = "`),e(n(f.map(function(i){return b(this,s),i.name+"="+urlencode(i.value)}.bind(this)).join("&"))),e(`";
    }

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $requestHeaders);
    curl_setopt($ch, CURLOPT_COOKIE, implode("; ", $requestCookies));

    if ("`),e(n(m)),e(`" === "POST") {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $requestBody);
    }

    $response = curl_exec($ch);

    curl_close($ch);

    echo "Response: " . $response;

?>
`),l},"perl/useragent":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
`),e(`
use LWP::UserAgent;
my $ua = LWP::UserAgent->new;

`),e(`
my $fullUrl = '`),e(n(h)),e(`';

`),e(`
my $request = HTTP::Request->new('`),e(n(m)),e(`', $fullUrl);

`),e(`
`),g.forEach(function(i){b(this,s),e(`
$request->header('`),e(n(i.name)),e("', '"),e(n(i.value)),e(`');
`)}.bind(this)),e(`

`),e(`
`),c.forEach(function(i){b(this,s),e(`
$ua->cookie_jar->set_cookie(0, '`),e(n(i.name)),e("', '"),e(n(i.value)),e(`', '/', 'example.com');
`)}.bind(this)),e(`

`),e(`
`),f.length>0&&(e(`
`),f.length===1&&f[0].type==="file"?(e(`
my $file = '`),e(n(f[0].value)),e(`';
$request->content($file);
`)):(e(`
my $post_data = {
`),f.forEach(function(i){b(this,s),e(`
'`),e(n(i.name)),e("' => '"),e(n(i.value)),e(`',
`)}.bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$_} } keys %$post_data));
`)),e(`
`)),e(`

`),e(`
my $response = $ua->request($request);

`),e(`
if ($response->is_success) {
print "Response:\\n";
print $response->content;
}

`),e(`
else {
print "Error: " . $response->status_line . "\\n";
}
`),l},"perl/tiny":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
`),e(`
use HTTP::Tiny;
my $http = HTTP::Tiny->new;

`),e(`
my $fullUrl = '`),e(n(h)),e(`';

`),e(`
my $options = {
headers => {
'Content-Type' => '`),e(n(g)),e(`',
`),f.forEach(function(r){b(this,s),e(`
'`),e(n(r.name)),e("' => '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
},
`),i.forEach(function(r){b(this,s),e(`
cookies => {
'`),e(n(r.name)),e("' => '"),e(n(r.value)),e(`',
},
`)}.bind(this)),e(`
};

`),e(`
`),c.length>0&&(e(`
`),c.length===1&&c[0].type==="file"?(e(`
my $file = '`),e(n(c[0].value)),e(`';
$options->{content} = $file;
`)):(e(`
my $post_data = {
`),c.forEach(function(r){b(this,s),e(`
'`),e(n(r.name)),e("' => '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
};
$options->{content} = join('&', map { $_ . '=' . $post_data->{$_} } keys %$post_data);
`)),e(`
`)),e(`

`),e(`
my $response = $http->request('`),e(n(m)),e(`', $fullUrl, $options);

`),e(`
if ($response->{success}) {
print "Response:\\n";
print $response->{content};
}

`),e(`
else {
print "Error: " . $response->{status} . "\\n";
}
`),l},"perl/request":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
`),e(`
use HTTP::Request;
my $request = HTTP::Request->new('`),e(n(m)),e("', '"),e(n(h)),e(`');

`),e(`
`),g.forEach(function(i){b(this,s),e(`
$request->header('`),e(n(i.name)),e("', '"),e(n(i.value)),e(`');
`)}.bind(this)),e(`

`),e(`
`),c.forEach(function(i){b(this,s),e(`
$request->header('Cookie', '`),e(n(i.name)),e("="),e(n(i.value)),e(`');
`)}.bind(this)),e(`

`),e(`
`),f.length>0&&(e(`
`),f.length===1&&f[0].type==="file"?(e(`
my $file = '`),e(n(f[0].value)),e(`';
$request->content($file);
`)):(e(`
my $post_data = {
`),f.forEach(function(i){b(this,s),e(`
'`),e(n(i.name)),e("' => '"),e(n(i.value)),e(`',
`)}.bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$_} } keys %$post_data));
`)),e(`
`)),e(`

`),e(`
use HTTP::Tiny;
my $http = HTTP::Tiny->new;
my $response = $http->request($request);

`),e(`
if ($response->{success}) {
print "Response:\\n";
print $response->{content};
}

`),e(`
else {
print "Error: " . $response->{status} . "\\n";
}
`),l},"ocaml/httpaf":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
(* Construct the request URL *)
let fullUrl = "`),e(n(h)),e(`" in

(* Set up the request *)
let headers = Cohttp.Header.of_list [
  "Content-Type", "`),e(n(g)),e(`";
  `),f.forEach(function(r){b(this,s),e(`
  "`),e(n(r.name)),e('", "'),e(n(r.value)),e(`";
  `)}.bind(this)),e(`
  `),i.forEach(function(r){b(this,s),e(`
  "Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`";
  `)}.bind(this)),e(`
] in
let body =
  `),c.length>0?(e(`
  (match `),e(n(m)),e(` with
  | "GET" -> ""
  | _ -> "`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`")
  `)):e(`
  ""
  `),e(`
in
let req = Httpaf.Request.create
  ~headers:(Httpaf.Headers.of_list (Cohttp.Header.to_list headers))
  (Httpaf.Method.of_string "`),e(n(m)),e(`")
  (Uri.of_string fullUrl)
  body
in

(* Send the request *)
let conn = Httpaf_lwt_unix.Client.create_connection (Uri.host_with_default ~default:"localhost" (Uri.of_string fullUrl)) in
let%bind () = Httpaf_lwt_unix.Client.write_request conn req in
let%bind resp = Httpaf_lwt_unix.Client.read_response conn in

(* Handle the response *)
let%bind body = Httpaf_lwt.Body.to_string resp.body in
print_endline ("Response: " ^ body);

(* Handle errors *)
let error_handler = function
  | Unix.Unix_error (Unix.ENETUNREACH, _, _) ->
      print_endline "Error: Network is unreachable"
  | Unix.Unix_error (Unix.ECONNREFUSED, _, _) ->
      print_endline "Error: Connection refused"
  | exn ->
      Printf.eprintf "Error: %s\\n" (Printexc.to_string exn);
      exit 1
in
Lwt.catch (fun () -> body) error_handler;
`),l},"ocaml/cohttp_lwt":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
(* Construct the request URL *)
let fullUrl = "`),e(n(h)),e(`" in

(* Set up the request *)
let req = Cohttp_lwt_unix.Client.request
  ~headers:(Cohttp.Header.of_list [
    "Content-Type", "`),e(n(g)),e(`";
    `),f.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('", "'),e(n(r.value)),e(`";
    `)}.bind(this)),e(`
    `),i.forEach(function(r){b(this,s),e(`
    "Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`";
    `)}.bind(this)),e(`
  ])
  `),c.length>0?(e(`
  (match `),e(n(m)),e(` with
  | "GET" -> Cohttp_lwt.Body.empty
  | _ -> Cohttp_lwt.Body.of_string "`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`")
  `)):e(`
  Cohttp_lwt.Body.empty
  `),e(`
in

(* Send the request *)
let%bind (_resp, body) = Cohttp_lwt_unix.Client.call (`),e(n(m)),e(` |> Cohttp.Code.method_of_string) fullUrl req in

(* Handle the response *)
let%bind body = Cohttp_lwt.Body.to_string body in
print_endline ("Response: " ^ body);

(* Handle errors *)
let error_handler = function
  | Unix.Unix_error (Unix.ENETUNREACH, _, _) ->
      print_endline "Error: Network is unreachable"
  | Unix.Unix_error (Unix.ECONNREFUSED, _, _) ->
      print_endline "Error: Connection refused"
  | exn ->
      Printf.eprintf "Error: %s\\n" (Printexc.to_string exn);
      exit 1
in
Lwt.catch (fun () -> body) error_handler;
`),l},"objectivec/nsurlsession":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(h),e(`";

// Set up the request headers
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),f.forEach(function(r){b(this,s),e(`
[headers setObject:@"`),e(n(r.value)),e('" forKey:@"'),e(n(r.name)),e(`"];
`)}.bind(this)),e(`

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(n(r.domain)),e(`",
    NSHTTPCookiePath: @"`),e(n(r.path)),e(`",
    NSHTTPCookieName: @"`),e(n(r.name)),e(`",
    NSHTTPCookieValue: @"`),e(n(r.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
`)}.bind(this)),e(`

// Set up the request parameters
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),c.forEach(function(r){b(this,s),e(`
[parameters setObject:@"`),e(n(r.value)),e('" forKey:@"'),e(n(r.name)),e(`"];
`)}.bind(this)),e(`

// Create the request
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:fullUrl]];
request.HTTPMethod = @"`),e(n(m)),e(`";
[request setValue:@"`),e(n(g)),e(`" forHTTPHeaderField:@"Content-Type"];
for (NSString *key in headers) {
    [request setValue:headers[key] forHTTPHeaderField:key];
}
NSURLSessionConfiguration *config = [NSURLSessionConfiguration defaultSessionConfiguration];
NSURLSession *session = [NSURLSession sessionWithConfiguration:config];

// Add the parameters to the request body
if (parameters.count > 0) {
    NSData *bodyData = [[parameters urlEncodedString] dataUsingEncoding:NSUTF8StringEncoding];
    request.HTTPBody = bodyData;
}

// Send the request
NSURLSessionDataTask *task = [session dataTaskWithRequest:request completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
    if (error) {
        NSLog(@"Error: %@", error);
        return;
    }
    if ([response isKindOfClass:[NSHTTPURLResponse class]]) {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)response;
        if (httpResponse.statusCode == 200) {
            NSString *responseString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
            NSLog(@"Response: %@", responseString);
        }
    }
}];
[task resume];
`),l},"objectivec/afnetworking":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(h),e(`";

// Set up the request headers
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),g.forEach(function(i){b(this,s),e(`
[headers setObject:@"`),e(n(i.value)),e('" forKey:@"'),e(n(i.name)),e(`"];
`)}.bind(this)),e(`

// Add cookies to the request
`),c.forEach(function(i){b(this,s),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(n(i.domain)),e(`",
    NSHTTPCookiePath: @"`),e(n(i.path)),e(`",
    NSHTTPCookieName: @"`),e(n(i.name)),e(`",
    NSHTTPCookieValue: @"`),e(n(i.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
`)}.bind(this)),e(`

// Set up the request parameters
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),f.forEach(function(i){b(this,s),e(`
[parameters setObject:@"`),e(n(i.value)),e('" forKey:@"'),e(n(i.name)),e(`"];
`)}.bind(this)),e(`

// Create the request manager
AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
manager.requestSerializer = [AFJSONRequestSerializer serializer];
manager.responseSerializer = [AFJSONResponseSerializer serializer];

// Add the headers to the request manager
for (NSString *key in headers) {
    [manager.requestSerializer setValue:headers[key] forHTTPHeaderField:key];
}

// Add the cookies to the request manager
NSArray *cookies = [[NSHTTPCookieStorage sharedHTTPCookieStorage] cookiesForURL:[NSURL URLWithString:fullUrl]];
NSDictionary *cookieHeaders = [NSHTTPCookie requestHeaderFieldsWithCookies:cookies];
for (NSString *key in cookieHeaders) {
    [manager.requestSerializer setValue:cookieHeaders[key] forHTTPHeaderField:key];
}

// Send the request
NSString *method = @"`),e(n(m)),e(`";
if ([method isEqualToString:@"GET"]) {
    [manager GET:fullUrl parameters:parameters headers:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        NSLog(@"Response: %@", responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"Error: %@", error);
    }];
} else if ([method isEqualToString:@"POST"]) {
    [manager POST:fullUrl parameters:parameters headers:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        NSLog(@"Response: %@", responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"Error: %@", error);
    }];
} else if ([method isEqualToString:@"PUT"]) {
    [manager PUT:fullUrl parameters:parameters headers:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        NSLog(@"Response: %@", responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"Error: %@", error);
    }];
} else if ([method isEqualToString:@"DELETE"]) {
    [manager DELETE:fullUrl parameters:parameters headers:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        NSLog(@"Response: %@", responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"Error: %@", error);
    }];
} else {
    // Handle unsupported methods
}
`),l},"lua/httpclient":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
local http_client = require("httpclient")

-- Extract parameters from the options object
local url = '`),e(n(h)),e(`'
local method = '`),e(n(m)),e(`'
local mimeType = '`),e(n(g)),e(`'
local headers = {
`),f.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local postData = {
`),c.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local cookies = {
`),i.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}

-- Construct the request table
local request = {
    url = url,
    method = method,
    headers = headers,
}
if method == "POST" then
    request.data = {
    `),c.forEach(function(r){b(this,s),e(`
        ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
    }
end

-- Add cookies to the request headers
local cookieHeader = ""
for cookie, value in pairs(cookies) do
    cookieHeader = cookieHeader .. cookie .. "=" .. value .. "; "
end
if cookieHeader ~= "" then
    request.headers['Cookie'] = string.sub(cookieHeader, 1, -3)
end

-- Send the request
local response = http_client.send(request)

-- Print the response
print(response.body)
`),l},"lua/http":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
local http = require("socket.http")
local ltn12 = require("ltn12")

-- Extract parameters from the options object
local url = '`),e(n(h)),e(`'
local method = '`),e(n(m)),e(`'
local mimeType = '`),e(n(g)),e(`'
local headers = {
`),f.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local postData = {
`),c.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local cookies = {
`),i.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}

-- Construct the request table
local request = {
    url = url,
    method = method,
    headers = headers,
    source = nil,
    sink = ltn12.sink.table(),
}
if method == "POST" then
    request.source = ltn12.source.string(
        '`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`'
    )
end

-- Add cookies to the request headers
local cookieHeader = ""
for cookie, value in pairs(cookies) do
    cookieHeader = cookieHeader .. cookie .. "=" .. value .. "; "
end
if cookieHeader ~= "" then
    request.headers['Cookie'] = string.sub(cookieHeader, 1, -3)
end

-- Send the request
local response = ""
local result, code, response_headers, status = http.request(request)
if result then
    response = table.concat(request.sink)
end

-- Print the response
print(response)
`),l},"lua/curl":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
local curl = require("cURL")

-- Extract parameters from the options object
local url = '`),e(n(h)),e(`'
local method = '`),e(n(m)),e(`'
local mimeType = '`),e(n(g)),e(`'
local headers = {
`),f.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local postData = {
`),c.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local cookies = {
`),i.forEach(function(r){b(this,s),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}

-- Construct the request command
local command = "curl -X " .. method .. " '" .. url .. "'"
if mimeType ~= '' then
    command = command .. " -H 'Content-Type: " .. mimeType .. "'"
end
for header, value in pairs(headers) do
    command = command .. " -H '" .. header .. ": " .. value .. "'"
end
for cookie, value in pairs(cookies) do
    command = command .. " --cookie '" .. cookie .. "=" .. value .. "'"
end
if method == "POST" then
    command = command .. " --data '"
    for key, value in pairs(postData) do
        command = command .. key .. "=" .. value .. "&"
    end
    command = string.sub(command, 1, -2) .. "'"
end

-- Execute the request command
local easy = curl.easy()
easy:setopt(curl.OPT_URL, url)
easy:setopt(curl.OPT_CUSTOMREQUEST, method)
easy:setopt(curl.OPT_HEADER, true)
easy:setopt(curl.OPT_VERBOSE, true)
easy:setopt(curl.OPT_POSTFIELDS, postData)
easy:setopt(curl.OPT_COOKIE, cookies)
local response_body = {}
easy:setopt(curl.OPT_WRITEFUNCTION, function (data)
    table.insert(response_body, data)
    return #data
end)
easy:perform()
easy:close()

-- Print the response
local response = table.concat(response_body)
print(response)
`),l},"kotlin/okhttp3":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import okhttp3.*
import java.io.IOException

val client = OkHttpClient()

val url = "`),e(n(h)),e(`"
val method = "`),e(n(m)),e(`"
val mimeType = "`),e(n(g)),e(`"

val body = `),c.length>0?(e(`
  RequestBody.create(MediaType.parse(mimeType), "`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`")
`)):e(`
  null
`),e(`

val request = Request.Builder()
  .url(url)
  .`),e(n(m.toLowerCase())),e(`(body)
  `),f.forEach(function(r){b(this,s),e(`
    .addHeader("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`")
  `)}.bind(this)),e(`
  `),i.forEach(function(r){b(this,s),e(`
    .addHeader("Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`")
  `)}.bind(this)),e(`
  .build()

val response = client.newCall(request).execute()

println("Response: " + response.body()?.string())
`),l},"kotlin/java":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

val url = URL("`),e(n(h)),e(`")
val connection = url.openConnection() as HttpURLConnection
connection.requestMethod = "`),e(n(m)),e(`"

// Add headers to the request
`),f.forEach(function(r){b(this,s),e(`
connection.setRequestProperty("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`")
`)}.bind(this)),e(`

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
connection.addRequestProperty("Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`")
`)}.bind(this)),e(`

// Send the request
`),c.length>0?m==="POST"?(e(`
val postData = "`),e(n(c.map(function(r){return b(this,s),r.name+"="+URLEncoder.encode(r.value,"UTF-8")}.bind(this)).join("&"))),e(`".toByteArray(Charsets.UTF_8)
connection.setRequestProperty("Content-Type", "`),e(n(g)),e(`")
connection.setRequestProperty("Content-Length", postData.size.toString())
connection.doOutput = true
connection.outputStream.write(postData)
`)):e(`
println("Error: GET method does not support POST data.")
`):e(`
connection.connect()
`),e(`

// Handle the response
if (connection.responseCode == HttpURLConnection.HTTP_OK) {
  val response = connection.inputStream.bufferedReader().use { it.readText() }
  println("Response: $response")
} else {
  println("Error: \${connection.responseMessage}")
}
connection.disconnect()
`),l},"kotlin/fuel":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import com.github.kittinunf.fuel.*
import com.github.kittinunf.fuel.core.*
import com.github.kittinunf.result.*

val fullUrl = "`),e(n(h)),e(`"

val requestHeaders = listOf(
`),f.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" to "'),e(n(r.value)),e(`",
`)}.bind(this)),e(`
)

val requestCookies = listOf(
`),i.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" to "'),e(n(r.value)),e(`",
`)}.bind(this)),e(`
)

val parameters = listOf(
`),c.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" to "'),e(n(r.value)),e(`",
`)}.bind(this)),e(`
)

val request = Fuel.request(Method.`),e(n(m)),e(`, fullUrl)
    .header(requestHeaders)
    .header("Content-Type", "`),e(n(g)),e(`")
    .header("Cookie", requestCookies.joinToString(separator = "; ") { "\${it.first}=\${it.second}" })

if (parameters.isNotEmpty()) {
    request.parameters(parameters)
}

request.responseString { _, _, result ->
    when (result) {
        is Result.Failure -> {
            println("Error: \${result.getException().message}")
        }
        is Result.Success -> {
            val data = result.get()
            println("Response: $data")
        }
    }
}

Like
Dislik
`),l},"javascript/jquery":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Construct the request URL
var fullUrl = '`),e(n(h)),e(`';

// Set up the request configuration object
var config = {
url: fullUrl,
type: '`),e(n(m)),e(`',
headers: {
'Content-Type': '`),e(n(g)),e(`',
`),f.forEach(function(r){b(this,s),e(`
    '`),e(n(r.name)),e("': '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
},
data: `),c.length===1&&c[0].type==="file"?e(`
    new FormData(document.getElementById('#file_upload_form'))
`):c.length>0?(e(`
    '`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`'
`)):e(`
    null
`),e(`
};

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
    document.cookie = '`),e(n(r.name)),e("="),e(n(r.value)),e(`';
`)}.bind(this)),e(`

// Send the request using jQuery
$.ajax(config)
    .done(function(data) {
        console.log('Response:', data);
    })
    .fail(function(jqXHR, textStatus) {
        console.error('Error:', textStatus);
    });
`),l},"javascript/fetch":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Construct the request URL
var fullUrl = '`),e(n(h)),e(`';

// Set up the request configuration object
var config = {
method: '`),e(n(m)),e(`',
headers: {
'Content-Type': '`),e(n(g)),e(`',
`),f.forEach(function(r){b(this,s),e(`
    '`),e(n(r.name)),e("': '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
},
body: `),c.length===1&&c[0].type==="file"?e(`
    new FormData(document.getElementById('#file_upload_form'))
`):c.length>0?(e(`
    '`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`'
`)):e(`
    null
`),e(`
};

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
    document.cookie = '`),e(n(r.name)),e("="),e(n(r.value)),e(`';
`)}.bind(this)),e(`

// Send the request using fetch
fetch(fullUrl, config)
.then(function(response) {
if (!response.ok) {
throw new Error('HTTP error, status = ' + response.status);
}
return response.text();
})
.then(function(data) {
console.log('Response:', data);
})
.catch(function(error) {
console.error('Error:', error.message);
});
`),l},"javascript/axios":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Import the Axios library
import axios from 'axios';

// Construct the request URL
var fullUrl = '`),e(n(h)),e(`';

// Set up the request configuration object
var config = {
    method: '`),e(n(m)),e(`',
    url: fullUrl,
    headers: {
        'Content-Type': '`),e(n(g)),e(`',
    `),f.forEach(function(r){b(this,s),e("   '"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
    },
    data: `),c.length===1&&c[0].type==="file"?e(`
        new FormData(document.getElementById('#file_upload_form'))
    `):c.length>0?(e("'"),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`'
    `)):e(" "),e(`
};

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e("document.cookie = '"),e(n(r.name)),e("="),e(n(r.value)),e(`';
`)}.bind(this)),e(`
// Send the request using Axios
axios(config)
    .then(function (response) {
        console.log('Response:', response.data);
    })
    .catch(function (error) {
        console.error('Error:', error);
    });
`),l},"javascript/xmlhttprequest":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Construct the request URL
var fullUrl = '`),e(n(h)),e(`';

// Set up the request
xhr.open('`),e(n(m)),e(`', fullUrl, true);
xhr.setRequestHeader('Content-Type', '`),e(n(g)),e(`');

// Add headers to the request
`),f.forEach(function(r){b(this,s),e(`
    xhr.setRequestHeader('`),e(n(r.name)),e("', '"),e(n(r.value)),e(`');
`)}.bind(this)),e(`

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
    document.cookie = '`),e(n(r.name)),e("="),e(n(r.value)),e(`';
`)}.bind(this)),e(`

// Send the request
`),c.length>0?(e(`
    xhr.send(`),c.length===1&&c[0].type==="file"?e(`
        new FormData(document.getElementById('#file_upload_form'))`):(e(`
        '`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e("'")),e(`);
`)):e(`
    xhr.send();
`),e(`

// Handle the response
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log('Response:', this.responseText);
    }
};

// Handle errors
xhr.onerror = function() {
    console.error('Error:', xhr.statusText);
};
`),l},"java/unirest":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class Main {
    public static void main(String[] args) {
        // Construct the request URL
        String fullUrl = "`),e(n(h)),e(`";

        // Set up the request
        com.mashape.unirest.http.HttpRequestWithBody request =
            Unirest.`),e(n(m.toLowerCase())),e(`(fullUrl)
                .header("Content-Type", "`),e(n(g)),e(`");

        // Add headers to the request
        `),f.forEach(function(r){b(this,s),e(`
        request.header("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Add cookies to the request
        `),i.forEach(function(r){b(this,s),e(`
        request.cookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Set up the request body
        `),c.length>0&&(e(`
        `),c.length===1&&c[0].type==="file"?(e(`
        // Upload a file
        request.field("`),e(n(c[0].name)),e('", new java.io.File("'),e(n(c[0].value)),e(`"));
        `)):(e(`
        // Send form data or raw data
        `),g==="application/x-www-form-urlencoded"?(e(`
        request.field("`),e(n(c.map(function(r){return b(this,s),r.name}.bind(this)).join('", "'))),e(`",
            `),e(n(c.map(function(r){return b(this,s),'encodeURIComponent("'+r.value+'")'}.bind(this)).join(", "))),e(`);
        `)):(e(`
        request.body("`),e(n(c.map(function(r){return b(this,s),r.value}.bind(this)).join(""))),e(`");
        `)),e(`
        `)),e(`
        `)),e(`

        // Send the request
        try {
            com.mashape.unirest.http.HttpResponse<String> response = request.asString();
            if (response.getStatus() == 200) {
                String responseBody = response.getBody();
                System.out.println("Response: " + responseBody);
            } else {
                System.out.println("Error: " + response.getStatusText());
            }
        } catch (UnirestException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
`),l},"java/okhttp":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import java.io.IOException;
import okhttp3.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // Construct the request URL
        String fullUrl = "`),e(n(h)),e(`";

        // Set up the request
        OkHttpClient client = new OkHttpClient();
        Request.Builder requestBuilder = new Request.Builder()
            .url(fullUrl)
            .method("`),e(n(m)),e(`", null)
            .addHeader("Content-Type", "`),e(n(g)),e(`");

        // Add headers to the request
        `),f.forEach(function(r){b(this,s),e(`
        requestBuilder.addHeader("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Add cookies to the request
        `),i.forEach(function(r){b(this,s),e(`
        requestBuilder.addHeader("Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Set up the request body
        `),c.length>0&&(e(`
        FormBody.Builder formBodyBuilder = new FormBody.Builder();
        `),c.forEach(function(r){b(this,s),e(`
        formBodyBuilder.add("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        RequestBody requestBody = formBodyBuilder.build();
        requestBuilder.post(requestBody);
        `)),e(`

        // Send the request
        Request request = requestBuilder.build();
        Response response = client.newCall(request).execute();

        // Handle the response
        if (response.isSuccessful()) {
            String responseBody = response.body().string();
            System.out.println("Response: " + responseBody);
        } else {
            System.out.println("Error: " + response.code() + " " + response.message());
        }

        // Clean up
        response.close();
    }
}
`),l},"java/nethttp":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

public class Main {
    public static void main(String[] args) throws IOException {
        // Construct the request URL
        String fullUrl = "`),e(n(h)),e(`";

        // Set up the request
        URL url = new URL(fullUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("`),e(n(m)),e(`");
        connection.setRequestProperty("Content-Type", "`),e(n(g)),e(`");

        // Add headers to the request
        `),f.forEach(function(r){b(this,s),e(`
        connection.setRequestProperty("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Add cookies to the request
        `),i.forEach(function(r){b(this,s),e(`
        connection.setRequestProperty("Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Set up the request body
        `),c.length>0&&(e(`
        connection.setDoOutput(true);
        String requestBody = "`),e(n(c.map(function(r){return b(this,s),r.name+"="+URLEncoder.encode(r.value,"UTF-8")}.bind(this)).join("&"))),e(`";
        connection.getOutputStream().write(requestBody.getBytes("UTF-8"));
        `)),e(`

        // Send the request
        connection.connect();

        // Handle the response
        int responseCode = connection.getResponseCode();
        if (responseCode == 200) {
            InputStream inputStream = connection.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));

            StringBuilder responseBody = new StringBuilder();
            String line;

            while ((line = reader.readLine()) != null) {
                responseBody.append(line);
                responseBody.append("\\n");
            }

            System.out.println("Response: " + responseBody.toString());
        } else {
            System.out.println("Error: " + responseCode + " " + connection.getResponseMessage());
        }

        // Clean up
        connection.disconnect();
    }
}
`),l},"java/asynchttp":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import org.asynchttpclient.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Construct the request URL
        String fullUrl = "`),e(n(h)),e(`";

        // Set up the request
        AsyncHttpClient client = Dsl.asyncHttpClient();
        RequestBuilder requestBuilder = new RequestBuilder("`),e(n(m)),e(`")
            .setUrl(fullUrl)
            .addHeader("Content-Type", "`),e(n(g)),e(`");

        // Add headers to the request
        `),f.forEach(function(r){b(this,s),e(`
        requestBuilder.addHeader("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Add cookies to the request
        `),i.forEach(function(r){b(this,s),e(`
        requestBuilder.addCookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Set up the request body
        `),c.length>0&&(e(`
        requestBuilder.setBody("`),e(n(c.map(function(r){return b(this,s),r.name+"="+Uri.EscapeDataString(r.value)}.bind(this)).join("&"))),e(`");
        `)),e(`

        // Send the request
        ListenableFuture<Response> future = client.executeRequest(requestBuilder.build());

        // Handle the response
        Response response = future.get();
        String responseBody = response.getResponseBody();
        System.out.println("Response: " + responseBody);

        // Handle errors
        if (response.getStatusCode() != 200) {
            System.out.println("Error: " + response.getStatusCode() + " " + response.getStatusText());
        }

        // Clean up
        client.close();
    }
}
`),l},"http/rfc7230":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// https://www.rfc-editor.org/rfc/rfc7230
`),m==="GET"?(e(`
`),e(n(m)),e(" "),e(n(h)),e(` HTTP/1.1
`)):(e(`
`),e(n(m)),e(" "),e(n(h)),e(` HTTP/1.1
Content-Type: `),e(n(g)),e(`
`)),e(`

`),f.forEach(function(r){b(this,s),e(`
`),e(n(r.name)),e(": "),e(n(r.value)),e(`
`)}.bind(this)),e(`

`),i.forEach(function(r){b(this,s),e(`
Cookie: `),e(n(r.name)),e("="),e(n(r.value)),e(`
`)}.bind(this)),e(`

`),m==="POST"&&c.length>0&&(e(`
    `),g==="application/x-www-form-urlencoded"?(e(`
`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`
    `)):(e(`
        `),c.forEach(function(r){b(this,s),e(`
`),e(n(r.name)),e(": "),e(n(r.value)),e(`
        `)}.bind(this)),e(`
    `)),e(`
`)),e(`
`),l},"go/http":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
package main

import (
    "fmt"
    "net/http"
    "strings"
)

func main() {
// Construct the request URL
    url := "`),e(n(h)),e(`"

    // Construct the request body
    var body strings.Reader
    `),f.length>0&&(e(`
        `),f.length===1&&f[0].type==="file"?e(`
            // Construct the form data
            file, header, err := r.FormFile("file")
            if err != nil {
                fmt.Println(err)
                return
            }
            defer file.Close()
            formData := &bytes.Buffer{}
            writer := multipart.NewWriter(formData)
            part, err := writer.CreateFormFile("file", header.Filename)
            if err != nil {
                fmt.Println(err)
                return
            }
            io.Copy(part, file)
            writer.Close()
            body = *strings.NewReader(formData.String())
        `):(e(`
            bodyStr := "`),e(n(f.map(function(i){return b(this,s),i.name+"="+encodeURIComponent(i.value)}.bind(this)).join("&"))),e(`"
            body = *strings.NewReader(bodyStr)
        `)),e(`
    `)),e(`

    // Create a new HTTP request
    req, err := http.NewRequest("`),e(n(m)),e(`", url, &body)
    if err != nil {
        fmt.Println(err)
        return
    }

    // Add headers to the request
    `),g.forEach(function(i){b(this,s),e(`
        req.Header.Set("`),e(n(i.name)),e('", "'),e(n(i.value)),e(`")
    `)}.bind(this)),e(`

    // Add cookies to the request
    `),c.forEach(function(i){b(this,s),e(`
        req.AddCookie(&http.Cookie{Name: "`),e(n(i.name)),e('", Value: "'),e(n(i.value)),e(`"})
    `)}.bind(this)),e(`

    // Send the request and get the response
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    // Handle the response
    fmt.Println("Response:")
    respBody, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(respBody))
}

`),l},"go/fasthttp":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
package main

import (
    "fmt"
    "mime/multipart"
    "os"
    "strings"
    "github.com/valyala/fasthttp"
)

func main() {
    // Construct the request URL
    url := "`),e(n(h)),e(`"

    // Construct the request body
    var body *strings.Reader
    `),c.length>0&&(e(`
        `),c.length===1&&c[0].type==="file"?(e(`
            // Construct the form data
            file, err := os.Open("`),e(n(c[0].value)),e(`")
            if err != nil {
                fmt.Println(err)
                return
            }
            defer file.Close()
            formData := &fasthttp.Args{}
            writer := multipart.NewWriter(formData)
            part, err := writer.CreateFormFile("file", file.Name())
            if err != nil {
                fmt.Println(err)
                return
            }
            io.Copy(part, file)
            writer.Close()
            body = strings.NewReader(formData.String())
        `)):(e(`
            bodyStr := "`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`"
            body = strings.NewReader(bodyStr)
        `)),e(`
    `)),e(`

    // Create a new HTTP request
    req := fasthttp.AcquireRequest()
    defer fasthttp.ReleaseRequest(req)
    req.Header.SetMethod("`),e(n(m)),e(`")
    req.Header.SetContentType("`),e(n(g)),e(`")
    req.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36")

    // Add headers to the request
    `),f.forEach(function(r){b(this,s),e(`
        req.Header.Add("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`")
    `)}.bind(this)),e(`

    // Add cookies to the request
    `),i.forEach(function(r){b(this,s),e(`
        req.Header.AddCookie(&fasthttp.Cookie{Name: "`),e(n(r.name)),e('", Value: "'),e(n(r.value)),e(`"})
    `)}.bind(this)),e(`

    // Send the request
    resp := fasthttp.AcquireResponse()
    defer fasthttp.ReleaseResponse(resp)
    if body != nil {
        req.SetBodyReader(body)
    }
    req.URI().Update(url)
    err := fasthttp.Do(req, resp)
    if err != nil {
        fmt.Println(err)
        return
    }

    // Handle the response
    fmt.Printf("Response: %s\\n", resp.Body())
}


`),l},"dart/http_client":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import 'dart:convert';
import 'package:http/http.dart' as http;

final url = '`),e(n(h)),e(`';
final method = '`),e(n(m)),e(`';
final mimeType = '`),e(n(g)),e(`';
final headers = {
`),f.forEach(function(r){b(this,s),e(`
  '`),e(n(r.name)),e("' : '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
};
final cookies = {
`),i.forEach(function(r){b(this,s),e(`
  '`),e(n(r.name)),e("' : '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
};
final postData = {
`),c.forEach(function(r){b(this,s),e(`
  '`),e(n(r.name)),e("' : '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
};

// Construct the request
final request = http.Request(method, Uri.parse(url));
request.headers.addAll(headers);

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
request.cookies.add(Cookie('`),e(n(r.name)),e("', '"),e(n(r.value)),e(`'));
`)}.bind(this)),e(`

// Add post data to the request
`),c.length>0&&e(`
request.bodyFields = postData;
`),e(`

// Send the request
final response = await http.Client().send(request);
final responseBody = await response.stream.bytesToString();

// Handle the response
print('Response: $responseBody');

// Handle errors
if (response.statusCode != 200) {
  print('Error: \${response.reasonPhrase}');
}
`),l},"dart/http":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
import 'package:http/http.dart' as http;

final url = '`),e(n(h)),e(`';
final method = '`),e(n(m)),e(`';
final mimeType = '`),e(n(g)),e(`';
final headers = {
`),f.forEach(function(r){b(this,s),e(`
  '`),e(n(r.name)),e("' : '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
};
final cookies = {
`),i.forEach(function(r){b(this,s),e(`
  '`),e(n(r.name)),e("' : '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
};

// Construct the request
final request = http.Request(method, Uri.parse(url));
request.headers.addAll(headers);

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
request.cookies.add(Cookie('`),e(n(r.name)),e("', '"),e(n(r.value)),e(`'));
`)}.bind(this)),e(`

// Add post data to the request
`),c.length>0?(e(`
`),c.length===1&&c[0].type==="file"?(e(`
// Handle file upload
final fileUploadRequest = http.MultipartRequest(method, Uri.parse(url));
`),c.forEach(function(r){b(this,s),e(`
if ('`),e(n(r.type)),e(`' === 'file') {
  fileUploadRequest.files.add(await http.MultipartFile.fromPath('`),e(n(r.name)),e("', '"),e(n(r.value)),e(`'));
} else {
  fileUploadRequest.fields['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`';
}
`)}.bind(this)),e(`
final response = await fileUploadRequest.send();
final responseBody = await response.stream.bytesToString();
`)):(e(`
// Handle regular post data
final postDataString = '`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`';
request.body = postDataString;
request.headers['Content-Type'] = mimeType;
final response = await request.send();
final responseBody = await response.stream.bytesToString();
`)),e(`
`)):e(`
// Handle GET request
final response = await request.send();
final responseBody = await response.stream.bytesToString();
`),e(`

// Handle the response
print('Response: $responseBody');

// Handle errors
if (response.statusCode != 200) {
  print('Error: \${response.reasonPhrase}');
}
`),l},"dart/dio":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
#include <iostream>
#include <string>
#include <curl/curl.h>

const auto url = "`),e(n(h)),e(`";
const auto method = "`),e(n(m)),e(`";
const auto mimeType = "`),e(n(g)),e(`";
const auto headers = std::vector<std::string>{
`),f.forEach(function(r){b(this,s),e(`
  "`),e(n(r.name)),e(": "),e(n(r.value)),e(`",
`)}.bind(this)),e(`
};
const auto cookies = std::vector<std::string>{
`),i.forEach(function(r){b(this,s),e(`
  "`),e(n(r.name)),e("="),e(n(r.value)),e(`",
`)}.bind(this)),e(`
};
const auto postData = std::vector<std::string>{
`),c.forEach(function(r){b(this,s),e(`
  "`),e(n(r.name)),e("="),e(n(r.value)),e(`",
`)}.bind(this)),e(`
};

// Set up the request
curl_global_init(CURL_GLOBAL_ALL);
auto curl = curl_easy_init();
if (curl) {
  curl_easy_setopt(curl, CURLOPT_URL, url);
  curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, method);
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
  curl_easy_setopt(curl, CURLOPT_COOKIE, cookies);
  curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postData);

  // Send the request
  CURLcode res = curl_easy_perform(curl);
  if (res != CURLE_OK) {
    std::cerr << "Error: " << curl_easy_strerror(res) << std::endl;
  }

  // Handle the response
  long responseCode;
  curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &responseCode);
  std::cout << "Response Code: " << responseCode << std::endl;
  curl_easy_cleanup(curl);
}
curl_global_cleanup();
`),l},"csharp/restsharp":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
using RestSharp;

class Program
{
    static void Main(string[] args)
    {
        // Construct the request URL
        var fullUrl = "`),e(n(h)),e(`";

        // Set up the request
        var client = new RestClient(fullUrl);
        var request = new RestRequest("`),e(n(m)),e('", Method.'),e(n(m.toUpperCase())),e(`);
        request.AddHeader("Content-Type", "`),e(n(g)),e(`");

        // Add headers to the request
        `),f.forEach(function(r){b(this,s),e(`
        request.AddHeader("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Add cookies to the request
        `),i.forEach(function(r){b(this,s),e(`
        request.AddCookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Set up the request body
        `),c.length>0&&(e(`
        request.AddParameter("text/plain", "`),e(n(c.map(function(r){return b(this,s),r.name+"="+Uri.EscapeDataString(r.value)}.bind(this)).join("&"))),e(`", ParameterType.RequestBody);
        `)),e(`

        // Send the request
        var response = client.Execute(request);

        // Handle the response
        var responseBody = response.Content;
        Console.WriteLine("Response: " + responseBody);

        // Handle errors
        if (response.StatusCode != System.Net.HttpStatusCode.OK)
        {
            Console.WriteLine("Error: " + response.StatusCode + " " + response.StatusDescription);
        }
    }
}
`),l},"csharp/httpclient":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Construct the request URL
        var fullUrl = "`),e(n(h)),e(`";

        // Set up the request
        var client = new HttpClient();
        var request = new HttpRequestMessage(new HttpMethod("`),e(n(m)),e(`"), fullUrl);
        request.Headers.Add("Content-Type", "`),e(n(g)),e(`");

        // Add headers to the request
        `),f.forEach(function(r){b(this,s),e(`
        request.Headers.Add("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`

        // Add cookies to the request
        `),i.forEach(function(r){b(this,s),e(`
        var cookie = new System.Net.Cookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e('", "/", "'),e(n(h)),e(`");
        clientHandler.CookieContainer.Add(cookie);
        `)}.bind(this)),e(`

        // Set up the request body
        `),c.length>0&&(e(`
        var requestBody = new StringContent("`),e(n(c.map(function(r){return b(this,s),r.name+"="+Uri.EscapeDataString(r.value)}.bind(this)).join("&"))),e(`");
        request.Content = requestBody;
        `)),e(`

        // Send the request
        var response = await client.SendAsync(request);

        // Handle the response
        var responseBody = await response.Content.ReadAsStringAsync();
        Console.WriteLine("Response: " + responseBody);

        // Handle errors
        if (!response.IsSuccessStatusCode)
        {
            Console.WriteLine("Error: " + response.StatusCode + " " + response.ReasonPhrase);
        }
    }
}
`),l},"cpp/iostream":function(t,n,a,u){var s=this;n=n||function(i){return i==null?"":String(i).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(i){return o[i]||i}var l="";function e(i){i!=null&&(l+=i)}var h=t.url,m=t.method;t.mimeType;var g=t.headers,f=t.postData,c=t.cookies;return e(`
// Construct the request URL
std::string fullUrl = "`),e(h),e(`";

// Set up the request headers
std::map<std::string, std::string> headers;
`),g.forEach(function(i){b(this,s),e(`
headers["`),e(n(i.name)),e('"] = "'),e(n(i.value)),e(`";
`)}.bind(this)),e(`

// Add cookies to the request
`),c.forEach(function(i){b(this,s),e(`
std::string cookieString = "`),e(n(i.name)),e("="),e(n(i.value)),e(`";
// TODO: Add cookieString to the request
`)}.bind(this)),e(`

// Set up the request parameters
std::map<std::string, std::string> parameters;
`),f.forEach(function(i){b(this,s),e(`
parameters["`),e(n(i.name)),e('"] = "'),e(n(i.value)),e(`";
`)}.bind(this)),e(`

// Construct the request
std::string method = "`),e(n(m)),e(`";
std::string postDataString;
if (method == "GET") {
    // TODO: Construct GET request with parameters
} else if (method == "POST") {
    for (auto const& [key, val] : parameters) {
        postDataString += key + "=" + val + "&";
    }
    // TODO: Construct POST request with postDataString
} else if (method == "PUT") {
    // TODO: Construct PUT request with parameters
} else if (method == "DELETE") {
    // TODO: Construct DELETE request with parameters
} else {
    // Handle unsupported methods
}

// Print the request
std::cout << method << " " << fullUrl << " HTTP/1.1\\r\\n";
for (auto const& [key, val] : headers) {
    std::cout << key << ": " << val << "\\r\\n";
}
// TODO: Print cookies
std::cout << "\\r\\n";
if (method == "POST" || method == "PUT" || method == "DELETE") {
    std::cout << postDataString << "\\r\\n";
}
`),l},"cpp/curl":function(t,n,a,u){var s=this;n=n||function(c){return c==null?"":String(c).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(c){return o[c]||c}var l="";function e(c){c!=null&&(l+=c)}var h=t.url;t.method,t.mimeType;var m=t.headers,g=t.postData,f=t.cookies;return e(`
// Construct the request URL
std::string url = "`),e(h),e(`";

// Set up the request headers
struct curl_slist* headers = NULL;
`),m.forEach(function(c){b(this,s),e(`
std::string headerString = "`),e(n(c.name)),e(": "),e(n(c.value)),e(`";
headers = curl_slist_append(headers, headerString.c_str());
`)}.bind(this)),e(`

// Add cookies to the request
`),f.forEach(function(c){b(this,s),e(`
std::string cookieString = "`),e(n(c.name)),e("="),e(n(c.value)),e(`";
// TODO: Add cookieString to the request
`)}.bind(this)),e(`

// Set up the request parameters
std::string postData;
`),g.forEach(function(c){b(this,s),e(`
std::string paramString = "`),e(n(c.name)),e("="),e(n(c.value)),e(`";
postData += paramString + "&";
`)}.bind(this)),e(`
// Construct the request
CURL* curl = curl_easy_init();
if (curl) {
    curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    // TODO: Set up cookies with CURLOPT_COOKIE
    if (postData.length() > 0) {
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postData.c_str());
    }

    // Perform the request
    CURLcode res = curl_easy_perform(curl);

    // Handle errors
    if (res != CURLE_OK) {
        fprintf(stderr, "curl_easy_perform() failed: %s\\n", curl_easy_strerror(res));
    }

    // Cleanup
    curl_slist_free_all(headers);
    curl_easy_cleanup(curl);
}
`),l},"cpp/arduino":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Construct the request URL
String url = "`),e(h),e(`";

// Set up the request headers
String headers;
`),f.forEach(function(r){b(this,s),e(`
String headerString = "`),e(n(r.name)),e(": "),e(n(r.value)),e(`";
headers += headerString + "\\r\\n";
`)}.bind(this)),e(`

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
String cookieString = "`),e(n(r.name)),e("="),e(n(r.value)),e(`";
// TODO: Add cookieString to the request
`)}.bind(this)),e(`

// Set up the request parameters
String postData;
`),c.forEach(function(r){b(this,s),e(`
String paramString = "`),e(n(r.name)),e("="),e(n(r.value)),e(`";
postData += paramString + "&";
`)}.bind(this)),e(`

// Construct the request
WiFiClient client;
if (client.connect(url, 80)) {
    // Send the request
    client.print("`),e(m),e(` ");
    client.print(url);
    client.println(" HTTP/1.1");
    client.print("Host: ");
    client.println(url);
    client.print("Content-Type: ");
    client.println("`),e(g),e(`");
    client.print("Content-Length: ");
    client.println(postData.length());
    client.print(headers);
    if (postData.length() > 0) {
        client.print("\\r\\n");
        client.print(postData);
    }
    client.println();

    // Read the response
    while (client.connected()) {
        String line = client.readStringUntil('\\n');
        if (line == "\\r") {
            break;
        }
    }
    String response = client.readStringUntil('\\n');
    Serial.println("Response: " + response);
}
`),l},"clojure/ring-client":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
(require '[ring.util.http-client :as client])

(defn make-request []
  (let [url "`),e(n(h)),e(`"
        headers {`),f.forEach(function(r){b(this,s),e(`
                 "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
        cookies {`),i.forEach(function(r){b(this,s),e(`
                 "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
        options {:headers headers
                 :cookies cookies
                 :content-type "`),e(n(g)),e(`"}
        `),m==="GET"?e(`
        response (client/get url options)]
        `):(e(`
        post-data "`),c.length===1&&c[0].type==="file"?(e(`
                    {:multipart true
                     :file "`),e(n(c[0].value)),e(`"}
                    `)):(e(`
                    {`),c.forEach(function(r){b(this,s),e(`
                     "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
                    `)),e(`"
        response (client/post url options post-data)]
        `)),e(`
    (println "Response: " (:body response))))

(make-request)
`),l},"clojure/clj-http":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
(require '[clj-http.client :as client])

(defn make-request []
  (let [url "`),e(n(h)),e(`"
        headers {`),f.forEach(function(r){b(this,s),e(`
                 "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
        cookies {`),i.forEach(function(r){b(this,s),e(`
                 "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
        options {:headers headers
                 :cookies cookies
                 :content-type "`),e(n(g)),e(`"}
        `),m==="GET"?e(`
        response (client/get url options)]
        `):(e(`
        post-data "`),c.length===1&&c[0].type==="file"?(e(`
                    {:multipart true
                     :file "`),e(n(c[0].value)),e(`"}
                    `)):(e(`
                    {`),c.forEach(function(r){b(this,s),e(`
                     "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
                    `)),e(`"
        response (client/post url options post-data)]
        `)),e(`
    (println (str "`),e(n(m)),e(` " url " HTTP/1.1"))
    (doseq [entry headers]
      (println (str entry)))
    (doseq [entry cookies]
      (println (str "Cookie: " entry)))
    (when (not (empty? post-data))
      (println (str post-data)))
    (println (str "\\nResponse: " (:body response)))))

(make-request)
`),l},"c/ghttp":function(t,n,a,u){var s=this;n=n||function(c){return c==null?"":String(c).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(c){return o[c]||c}var l="";function e(c){c!=null&&(l+=c)}var h=t.url,m=t.method;t.mimeType;var g=t.headers;t.postData;var f=t.cookies;return e(`
// Set up the request
struct evhttp_uri *uri = evhttp_uri_parse("`),e(n(h)),e(`");
struct evhttp_connection *conn = evhttp_connection_base_new(NULL, NULL, evhttp_uri_get_host(uri), evhttp_uri_get_port(uri));
struct evhttp_request *req = evhttp_request_new(NULL, NULL);

// Construct the request URL
char *path = evhttp_uri_get_path(uri);
if(strlen(path) == 0) {
    path = "/";
}

// Set request method and URL
evhttp_request_set_chunked_cb(req, NULL);
evhttp_request_set_error_cb(req, request_error_cb);
evhttp_request_set_cb(req, request_done_cb);
evhttp_request_set_header_cb(req, request_header_cb);
evhttp_request_set_response_cb(req, request_response_cb);
evhttp_request_set_uri(req, path);
evhttp_request_set_type(req, EVHTTP_REQ_`),e(n(m.toUpperCase())),e(`);

// Add headers to the request
`),g.forEach(function(c){b(this,s),e(`
    evhttp_add_header(req->output_headers, "`),e(n(c.name)),e('", "'),e(n(c.value)),e(`");
`)}.bind(this)),e(`

// Add cookies to the request
`),f.forEach(function(c){b(this,s),e(`
    evhttp_add_header(req->output_headers, "Cookie", "`),e(n(c.name)),e("="),e(n(c.value)),e(`");
`)}.bind(this)),e(`

// Send the request
if (evhttp_make_request(conn, req, EVHTTP_REQ_`),e(n(m.toUpperCase())),e(`, path) == -1) {
    fprintf(stderr, "Failed to send HTTP request\\n");
    return 1;
}

// Handle errors
void request_error_cb(struct evhttp_request *req, void *ctx) {
    fprintf(stderr, "Error: %d %s\\n", evhttp_request_get_response_code(req), evhttp_request_get_response_code_line(req));
}

// Handle response headers
void request_header_cb(struct evhttp_request *req, void *ctx) {
    struct evkeyvalq *headers = evhttp_request_get_input_headers(req);
    struct evkeyval *header;
    TAILQ_FOREACH(header, headers, next) {
        fprintf(stdout, "%s: %s\\n", header->key, header->value);
    }
}

// Handle response body
void request_response_cb(struct evhttp_request *req, void *ctx) {
    struct evbuffer *buffer = evhttp_request_get_input_buffer(req);
    fprintf(stdout, "%.*s\\n", (int)evbuffer_get_length(buffer), evbuffer_pullup(buffer, -1));
}

// Handle completion of the request
void request_done_cb(struct evhttp_request *req, void *ctx) {
    event_base_loopbreak(base);
}
`),l},"c/curl":function(t,n,a,u){var s=this;n=n||function(c){return c==null?"":String(c).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(c){return o[c]||c}var l="";function e(c){c!=null&&(l+=c)}var h=t.url,m=t.method,g=t.mimeType;t.headers;var f=t.postData;return t.cookies,e(`
#include <stdio.h>
#include <stdlib.h>
#include <curl/curl.h>

int main(void) {
    CURL *curl;
    CURLcode res;
    struct curl_slist *headers = NULL;
    char *url = "`),e(n(h)),e(`";
    char *method = "`),e(n(m)),e(`";
    char *mimeType = "`),e(n(g)),e(`";
    char *postData = "`),f.length>0&&e(n(f.map(function(c){return b(this,s),c.name+"="+encodeURIComponent(c.value)}.bind(this)).join("&"))),e(`";

    curl = curl_easy_init();
    if (curl) {
        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, method);
        curl_easy_setopt(curl, CURLOPT_URL, url);

        if (*mimeType) {
            char *contentType = malloc(strlen("Content-Type: ") + strlen(mimeType) + 1);
            sprintf(contentType, "Content-Type: %s", mimeType);
            headers = curl_slist_append(headers, contentType);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        }

        if (*postData) {
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postData);
        }

        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\\n", curl_easy_strerror(res));
        }

        curl_easy_cleanup(curl);
    }

    return 0;
}
`),l},"brainfuck/brainfuck":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
// Create a new brainfuck program
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.

// Construct the request URL
,[<]>[.>],`),h.split("").forEach(function(r){b(this,s),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}.bind(this)),e(`++++++++[->+++++<]>.

// Set up the request
,[<]>[.>],`),m.split("").forEach(function(r){b(this,s),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}.bind(this)),e(`++++++++[->+++++<]>.

// Add headers to the request
`),f.forEach(function(r){b(this,s),e(`
    ,[<]>[.>],'`),e(n(r.name)),e(": "),e(n(r.value)),e("',")}.bind(this)),e(`

// Add cookies to the request
`),i.forEach(function(r){b(this,s),e(`
    ,[<]>[.>],'Set-Cookie: `),e(n(r.name)),e("="),e(n(r.value)),e("',")}.bind(this)),e(`

// Send the request
`),c.length>0&&(e(`
    ,[<]>[.>],'`),c.length===1&&c[0].type==="file"?e("multipart/form-data"):e(n(g)),e(`',<

    `),c.length===1&&c[0].type==="file"?(e(`
        ,[<]>[.>],'`),e(n(c[0].name)),e("=',<,[>]<[.>],<,[<]>[.>],<,[>]<[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")):(e(`
        `),c.forEach(function(r){b(this,s),e(`
            ,[<]>[.>],'`),e(n(r.name)),e("=',<,[>]<[.>],'"),e(n(r.value)),e("',")}.bind(this)),e(`
        ,`)),e(`

    ,[<]>[.>],'',<]
`)),e(`
// Handle the response
,[<]>[.>],'Response:',<[<]>[.>],[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-],<

// Handle errors
,[<]>[.>],'Error:',<[<]>[.>],'Oops! Brainfuck couldn't handle this request. Maybe try Python next time?',`),c.length===1&&c[0].type==="file"&&e(" Remember, uploading files in Brainfuck is like trying to fit a square peg in a round hole."),e(`
`),l},"bash/wget":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
wget --verbose --output-document=- \\
--header="Content-Type: `),e(n(g)),e(`" \\
`),f.forEach(function(r){b(this,s),e(`
    --header="`),e(n(r.name)),e(": "),e(n(r.value)),e(`" \\
`)}.bind(this)),e(`
`),i.forEach(function(r){b(this,s),e(`
    --header="Cookie: `),e(n(r.name)),e("="),e(n(r.value)),e(`" \\
`)}.bind(this)),m==="GET"?(e(`
    "`),e(n(h)),e(`" \\
`)):m==="POST"?(e(`
    --post-data="`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`" \\
    "`),e(n(h)),e(`" \\
`)):m==="PUT"?(e(`
    --method=PUT \\
    --body-data="`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`" \\
    "`),e(n(h)),e(`" \\
`)):m==="DELETE"&&(e(`
    --method=DELETE \\
    "`),e(n(h)),e(`"
`)),e(`
`),l},"bash/httpie":function(t,n,a,u){var s=this;n=n||function(c){return c==null?"":String(c).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(c){return o[c]||c}var l="";function e(c){c!=null&&(l+=c)}var h=t.url;t.method,t.mimeType;var m=t.headers,g=t.postData,f=t.cookies;return e(`
http --verbose --check --follow \\
"`),e(n(h)),e(`" \\
`),e(n(m.map(function(c){return b(this,s),"'"+c.name+":"+c.value+"'"}.bind(this)).join(` \\
    `))),e(` \\
`),f.forEach(function(c){b(this,s),e(`
    Cookie:"`),e(n(c.name)),e("="),e(n(c.value)),e(`" \\
`)}.bind(this)),g.length>0&&(e(`
    `),e(n(g.map(function(c){return b(this,s),"'"+c.name+"="+encodeURIComponent(c.value)+"'"}.bind(this)).join(` \\
    `))),e(` \\
`)),e(`
--form \\
--timeout 120s \\
--max-redirects 10
`),l},"bash/curl":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
curl -X `),e(n(m)),e(` \\
-H "Content-Type: `),e(n(g)),e(`" \\
`),f.forEach(function(r){b(this,s),e(`
    -H "`),e(n(r.name)),e(": "),e(n(r.value)),e(`" \\
`)}.bind(this)),e(`
`),i.forEach(function(r){b(this,s),e(`
    --cookie "`),e(n(r.name)),e("="),e(n(r.value)),e(`" \\
`)}.bind(this)),c.length>0&&(e(`
    -d `),c.length===1&&c[0].type==="file"?(e(`
        "@`),e(n(c[0].value)),e(`" \\
    `)):(e(`
        "`),e(n(c.map(function(r){return b(this,s),r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`" \\
    `))),e(`
"`),e(n(h)),e(`
`),l},"r/rcurl":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
library(RCurl)

url <- "`),e(n(h)),e(`"
method <- "`),e(n(m)),e(`"
mimeType <- "`),e(n(g)),e(`"

headers <- list(
  `),f.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
)

cookies <- list(
  `),i.forEach(function(r){b(this,s),e(`
    "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
)

`),m==="GET"?e(`
  req <- getURL(url, httpheader = headers, cookie = cookies)
`):(e(`
  body <- list(
    `),c.forEach(function(r){b(this,s),e(`
      "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
    `)}.bind(this)),e(`
  )

  req <- postForm(url, .params = body, httpheader = headers, cookie = cookies)
`)),e(`

cat("Response: ", "\\n")
cat(req, "\\n")
`),l},"r/httr":function(t,n,a,u){var s=this;n=n||function(r){return r==null?"":String(r).replace(d,p)};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function p(r){return o[r]||r}var l="";function e(r){r!=null&&(l+=r)}var h=t.url,m=t.method,g=t.mimeType,f=t.headers,c=t.postData,i=t.cookies;return e(`
library(httr)

url <- "`),e(n(h)),e(`"

req <- VERB("`),e(n(m)),e(`", url)

`),f.forEach(function(r){b(this,s),e(`
req <- add_headers("`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`", req)
`)}.bind(this)),e(`

`),i.forEach(function(r){b(this,s),e(`
req <- add_headers("Cookie" = "`),e(n(r.name)),e("="),e(n(r.value)),e(`", req)
`)}.bind(this)),e(`

`),c.length>0&&(e(`
body <- list(`),e(n(c.map(function(r){return b(this,s),'"'.concat(r.name,'" = "').concat(r.value,'"')}.bind(this)).join(", "))),e(`)
req <- content(req, as.formula(paste0("`),e(n(g)),e(`", "()")), body)
`)),e(`

res <- content(req)

cat("Response: ")
print(toJSON(res, pretty = TRUE))
`),l}},mr={exports:{}};function fr(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(n){var a=t[n];typeof a!="object"||Object.isFrozen(a)||fr(a)}),t}mr.exports=fr,mr.exports.default=fr;class Ta{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ca(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function De(t,...n){const a=Object.create(null);for(const u in t)a[u]=t[u];return n.forEach(function(u){for(const s in u)a[s]=u[s]}),a}const qa=t=>!!t.scope||t.sublanguage&&t.language;class bp{constructor(n,a){this.buffer="",this.classPrefix=a.classPrefix,n.walk(this)}addText(n){this.buffer+=Ca(n)}openNode(n){if(!qa(n))return;let a="";a=n.sublanguage?`language-${n.language}`:((u,{prefix:s})=>{if(u.includes(".")){const o=u.split(".");return[`${s}${o.shift()}`,...o.map((d,p)=>`${d}${"_".repeat(p+1)}`)].join(" ")}return`${s}${u}`})(n.scope,{prefix:this.classPrefix}),this.span(a)}closeNode(n){qa(n)&&(this.buffer+="</span>")}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const Na=(t={})=>{const n={children:[]};return Object.assign(n,t),n};class gr{constructor(){this.rootNode=Na(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const a=Na({scope:n});this.add(a),this.stack.push(a)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,a){return typeof a=="string"?n.addText(a):a.children&&(n.openNode(a),a.children.forEach(u=>this._walk(n,u)),n.closeNode(a)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(a=>typeof a=="string")?n.children=[n.children.join("")]:n.children.forEach(a=>{gr._collapse(a)}))}}class _p extends gr{constructor(n){super(),this.options=n}addKeyword(n,a){n!==""&&(this.openNode(a),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,a){const u=n.root;u.sublanguage=!0,u.language=a,this.add(u)}toHTML(){return new bp(this,this.options).value()}finalize(){return!0}}function gt(t){return t?typeof t=="string"?t:t.source:null}function Oa(t){return He("(?=",t,")")}function yp(t){return He("(?:",t,")*")}function vp(t){return He("(?:",t,")?")}function He(...t){return t.map(n=>gt(n)).join("")}function br(...t){return"("+(function(a){const u=a[a.length-1];return typeof u=="object"&&u.constructor===Object?(a.splice(a.length-1,1),u):{}}(t).capture?"":"?:")+t.map(a=>gt(a)).join("|")+")"}function Ra(t){return new RegExp(t.toString()+"|").exec("").length-1}const Ep=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function _r(t,{joinWith:n}){let a=0;return t.map(u=>{a+=1;const s=a;let o=gt(u),d="";for(;o.length>0;){const p=Ep.exec(o);if(!p){d+=o;break}d+=o.substring(0,p.index),o=o.substring(p.index+p[0].length),p[0][0]==="\\"&&p[1]?d+="\\"+String(Number(p[1])+s):(d+=p[0],p[0]==="("&&a++)}return d}).map(u=>`(${u})`).join(n)}const Aa="[a-zA-Z]\\w*",yr="[a-zA-Z_]\\w*",La="\\b\\d+(\\.\\d+)?",Ma="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Da="\\b(0b[01]+)",bt={begin:"\\\\[\\s\\S]",relevance:0},Sp={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[bt]},wp={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[bt]},Kt=function(t,n,a={}){const u=De({scope:"comment",begin:t,end:n,contains:[]},a);u.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=br("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return u.contains.push({begin:He(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),u},kp=Kt("//","$"),xp=Kt("/\\*","\\*/"),Tp=Kt("#","$"),Cp={scope:"number",begin:La,relevance:0},qp={scope:"number",begin:Ma,relevance:0},Np={scope:"number",begin:Da,relevance:0},Op={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[bt,{begin:/\[/,end:/\]/,relevance:0,contains:[bt]}]}]},Rp={scope:"title",begin:Aa,relevance:0},Ap={scope:"title",begin:yr,relevance:0},Lp={begin:"\\.\\s*"+yr,relevance:0};var Gt=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:Aa,UNDERSCORE_IDENT_RE:yr,NUMBER_RE:La,C_NUMBER_RE:Ma,BINARY_NUMBER_RE:Da,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(t={})=>{const n=/^#![ ]*\//;return t.binary&&(t.begin=He(n,/.*\b/,t.binary,/\b.*/)),De({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(a,u)=>{a.index!==0&&u.ignoreMatch()}},t)},BACKSLASH_ESCAPE:bt,APOS_STRING_MODE:Sp,QUOTE_STRING_MODE:wp,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:Kt,C_LINE_COMMENT_MODE:kp,C_BLOCK_COMMENT_MODE:xp,HASH_COMMENT_MODE:Tp,NUMBER_MODE:Cp,C_NUMBER_MODE:qp,BINARY_NUMBER_MODE:Np,REGEXP_MODE:Op,TITLE_MODE:Rp,UNDERSCORE_TITLE_MODE:Ap,METHOD_GUARD:Lp,END_SAME_AS_BEGIN:function(t){return Object.assign(t,{"on:begin":(n,a)=>{a.data._beginMatch=n[1]},"on:end":(n,a)=>{a.data._beginMatch!==n[1]&&a.ignoreMatch()}})}});function Mp(t,n){t.input[t.index-1]==="."&&n.ignoreMatch()}function Dp(t,n){t.className!==void 0&&(t.scope=t.className,delete t.className)}function $p(t,n){n&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=Mp,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Ip(t,n){Array.isArray(t.illegal)&&(t.illegal=br(...t.illegal))}function Up(t,n){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Pp(t,n){t.relevance===void 0&&(t.relevance=1)}const Bp=(t,n)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const a=Object.assign({},t);Object.keys(t).forEach(u=>{delete t[u]}),t.keywords=a.keywords,t.begin=He(a.beforeMatch,Oa(a.begin)),t.starts={relevance:0,contains:[Object.assign(a,{endsParent:!0})]},t.relevance=0,delete a.beforeMatch},jp=["of","and","for","in","not","or","if","then","parent","list","value"],Hp="keyword";function $a(t,n,a=Hp){const u=Object.create(null);return typeof t=="string"?s(a,t.split(" ")):Array.isArray(t)?s(a,t):Object.keys(t).forEach(function(o){Object.assign(u,$a(t[o],n,o))}),u;function s(o,d){n&&(d=d.map(p=>p.toLowerCase())),d.forEach(function(p){const l=p.split("|");u[l[0]]=[o,Fp(l[0],l[1])]})}}function Fp(t,n){return n?Number(n):function(a){return jp.includes(a.toLowerCase())}(t)?0:1}const Ia={},Fe=t=>{console.error(t)},Ua=(t,...n)=>{console.log(`WARN: ${t}`,...n)},tt=(t,n)=>{Ia[`${t}/${n}`]||(console.log(`Deprecated as of ${t}. ${n}`),Ia[`${t}/${n}`]=!0)},Wt=new Error;function Pa(t,n,{key:a}){let u=0;const s=t[a],o={},d={};for(let p=1;p<=n.length;p++)d[p+u]=s[p],o[p+u]=!0,u+=Ra(n[p-1]);t[a]=d,t[a]._emit=o,t[a]._multi=!0}function zp(t){(function(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)})(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),function(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw Fe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Wt;if(typeof n.beginScope!="object"||n.beginScope===null)throw Fe("beginScope must be object"),Wt;Pa(n,n.begin,{key:"beginScope"}),n.begin=_r(n.begin,{joinWith:""})}}(t),function(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw Fe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Wt;if(typeof n.endScope!="object"||n.endScope===null)throw Fe("endScope must be object"),Wt;Pa(n,n.end,{key:"endScope"}),n.end=_r(n.end,{joinWith:""})}}(t)}function Kp(t){function n(s,o){return new RegExp(gt(s),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(o?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,d){d.position=this.position++,this.matchIndexes[this.matchAt]=d,this.regexes.push([d,o]),this.matchAt+=Ra(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(d=>d[1]);this.matcherRe=n(_r(o,{joinWith:"|"}),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const d=this.matcherRe.exec(o);if(!d)return null;const p=d.findIndex((e,h)=>h>0&&e!==void 0),l=this.matchIndexes[p];return d.splice(0,p),Object.assign(d,l)}}class u{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const d=new a;return this.rules.slice(o).forEach(([p,l])=>d.addRule(p,l)),d.compile(),this.multiRegexes[o]=d,d}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,d){this.rules.push([o,d]),d.type==="begin"&&this.count++}exec(o){const d=this.getMatcher(this.regexIndex);d.lastIndex=this.lastIndex;let p=d.exec(o);if(this.resumingScanAtSamePosition()&&!(p&&p.index===this.lastIndex)){const l=this.getMatcher(0);l.lastIndex=this.lastIndex+1,p=l.exec(o)}return p&&(this.regexIndex+=p.position+1,this.regexIndex===this.count&&this.considerAll()),p}}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=De(t.classNameAliases||{}),function s(o,d){const p=o;if(o.isCompiled)return p;[Dp,Up,zp,Bp].forEach(e=>e(o,d)),t.compilerExtensions.forEach(e=>e(o,d)),o.__beforeBegin=null,[$p,Ip,Pp].forEach(e=>e(o,d)),o.isCompiled=!0;let l=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),l=o.keywords.$pattern,delete o.keywords.$pattern),l=l||/\w+/,o.keywords&&(o.keywords=$a(o.keywords,t.case_insensitive)),p.keywordPatternRe=n(l,!0),d&&(o.begin||(o.begin=/\B|\b/),p.beginRe=n(p.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(p.endRe=n(p.end)),p.terminatorEnd=gt(p.end)||"",o.endsWithParent&&d.terminatorEnd&&(p.terminatorEnd+=(o.end?"|":"")+d.terminatorEnd)),o.illegal&&(p.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(e){return function(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(m){return De(h,{variants:null},m)})),h.cachedVariants?h.cachedVariants:Ba(h)?De(h,{starts:h.starts?De(h.starts):null}):Object.isFrozen(h)?De(h):h}(e==="self"?o:e)})),o.contains.forEach(function(e){s(e,p)}),o.starts&&s(o.starts,d),p.matcher=function(e){const h=new u;return e.contains.forEach(m=>h.addRule(m.begin,{rule:m,type:"begin"})),e.terminatorEnd&&h.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&h.addRule(e.illegal,{type:"illegal"}),h}(p),p}(t)}function Ba(t){return!!t&&(t.endsWithParent||Ba(t.starts))}class Gp extends Error{constructor(n,a){super(n),this.name="HTMLInjectionError",this.html=a}}const vr=Ca,ja=De,Ha=Symbol("nomatch");var _t=function(t){const n=Object.create(null),a=Object.create(null),u=[];let s=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",d={disableAutodetect:!0,name:"Plain text",contains:[]};let p={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:_p};function l(C){return p.noHighlightRe.test(C)}function e(C,L,M){let K="",F="";typeof L=="object"?(K=C,M=L.ignoreIllegals,F=L.language):(tt("10.7.0","highlight(lang, code, ...args) has been deprecated."),tt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),F=C,K=L),M===void 0&&(M=!0);const B={code:K,language:F};H("before:highlight",B);const j=B.result?B.result:h(B.language,B.code,M);return j.code=B.code,H("after:highlight",j),j}function h(C,L,M,K){const F=Object.create(null);function B(){if(!D.keywords)return void ce.addText(ne);let R=0;D.keywordPatternRe.lastIndex=0;let $=D.keywordPatternRe.exec(ne),Q="";for(;$;){Q+=ne.substring(R,$.index);const re=fe.case_insensitive?$[0].toLowerCase():$[0],le=(V=re,D.keywords[V]);if(le){const[Oe,Cr]=le;if(ce.addText(Q),Q="",F[re]=(F[re]||0)+1,F[re]<=7&&(en+=Cr),Oe.startsWith("_"))Q+=$[0];else{const tn=fe.classNameAliases[Oe]||Oe;ce.addKeyword($[0],tn)}}else Q+=$[0];R=D.keywordPatternRe.lastIndex,$=D.keywordPatternRe.exec(ne)}var V;Q+=ne.substring(R),ce.addText(Q)}function j(){D.subLanguage!=null?function(){if(ne==="")return;let R=null;if(typeof D.subLanguage=="string"){if(!n[D.subLanguage])return void ce.addText(ne);R=h(D.subLanguage,ne,!0,st[D.subLanguage]),st[D.subLanguage]=R._top}else R=m(ne,D.subLanguage.length?D.subLanguage:null);D.relevance>0&&(en+=R.relevance),ce.addSublanguage(R._emitter,R.language)}():B(),ne=""}function ue(R,$){let Q=1;const V=$.length-1;for(;Q<=V;){if(!R._emit[Q]){Q++;continue}const re=fe.classNameAliases[R[Q]]||R[Q],le=$[Q];re?ce.addKeyword(le,re):(ne=le,B(),ne=""),Q++}}function X(R,$){return R.scope&&typeof R.scope=="string"&&ce.openNode(fe.classNameAliases[R.scope]||R.scope),R.beginScope&&(R.beginScope._wrap?(ce.addKeyword(ne,fe.classNameAliases[R.beginScope._wrap]||R.beginScope._wrap),ne=""):R.beginScope._multi&&(ue(R.beginScope,$),ne="")),D=Object.create(R,{parent:{value:D}}),D}function de(R,$,Q){let V=function(re,le){const Oe=re&&re.exec(le);return Oe&&Oe.index===0}(R.endRe,Q);if(V){if(R["on:end"]){const re=new Ta(R);R["on:end"]($,re),re.isMatchIgnored&&(V=!1)}if(V){for(;R.endsParent&&R.parent;)R=R.parent;return R}}if(R.endsWithParent)return de(R.parent,$,Q)}function xe(R){return D.matcher.regexIndex===0?(ne+=R[0],1):(Tr=!0,0)}function ze(R){const $=R[0],Q=L.substring(R.index),V=de(D,R,Q);if(!V)return Ha;const re=D;D.endScope&&D.endScope._wrap?(j(),ce.addKeyword($,D.endScope._wrap)):D.endScope&&D.endScope._multi?(j(),ue(D.endScope,R)):re.skip?ne+=$:(re.returnEnd||re.excludeEnd||(ne+=$),j(),re.excludeEnd&&(ne=$));do D.scope&&ce.closeNode(),D.skip||D.subLanguage||(en+=D.relevance),D=D.parent;while(D!==V.parent);return V.starts&&X(V.starts,R),re.returnEnd?0:$.length}let Te={};function $e(R,$){const Q=$&&$[0];if(ne+=R,Q==null)return j(),0;if(Te.type==="begin"&&$.type==="end"&&Te.index===$.index&&Q===""){if(ne+=L.slice($.index,$.index+1),!s){const V=new Error(`0 width match regex (${C})`);throw V.languageName=C,V.badRule=Te.rule,V}return 1}if(Te=$,$.type==="begin")return function(V){const re=V[0],le=V.rule,Oe=new Ta(le),Cr=[le.__beforeBegin,le["on:begin"]];for(const tn of Cr)if(tn&&(tn(V,Oe),Oe.isMatchIgnored))return xe(re);return le.skip?ne+=re:(le.excludeBegin&&(ne+=re),j(),le.returnBegin||le.excludeBegin||(ne=re)),X(le,V),le.returnBegin?0:re.length}($);if($.type==="illegal"&&!M){const V=new Error('Illegal lexeme "'+Q+'" for mode "'+(D.scope||"<unnamed>")+'"');throw V.mode=D,V}if($.type==="end"){const V=ze($);if(V!==Ha)return V}if($.type==="illegal"&&Q==="")return 1;if(xr>1e5&&xr>3*$.index)throw new Error("potential infinite loop, way more iterations than matches");return ne+=Q,Q.length}const fe=i(C);if(!fe)throw Fe(o.replace("{}",C)),new Error('Unknown language: "'+C+'"');const Z=Kp(fe);let Ne="",D=K||Z;const st={},ce=new p.__emitter(p);(function(){const R=[];for(let $=D;$!==fe;$=$.parent)$.scope&&R.unshift($.scope);R.forEach($=>ce.openNode($))})();let ne="",en=0,Ke=0,xr=0,Tr=!1;try{for(D.matcher.considerAll();;){xr++,Tr?Tr=!1:D.matcher.considerAll(),D.matcher.lastIndex=Ke;const R=D.matcher.exec(L);if(!R)break;const $=$e(L.substring(Ke,R.index),R);Ke=R.index+$}return $e(L.substring(Ke)),ce.closeAllNodes(),ce.finalize(),Ne=ce.toHTML(),{language:C,value:Ne,relevance:en,illegal:!1,_emitter:ce,_top:D}}catch(R){if(R.message&&R.message.includes("Illegal"))return{language:C,value:vr(L),illegal:!0,relevance:0,_illegalBy:{message:R.message,index:Ke,context:L.slice(Ke-100,Ke+100),mode:R.mode,resultSoFar:Ne},_emitter:ce};if(s)return{language:C,value:vr(L),illegal:!1,relevance:0,errorRaised:R,_emitter:ce,_top:D};throw R}}function m(C,L){L=L||p.languages||Object.keys(n);const M=function(X){const de={value:vr(X),illegal:!1,relevance:0,_top:d,_emitter:new p.__emitter(p)};return de._emitter.addText(X),de}(C),K=L.filter(i).filter(se).map(X=>h(X,C,!1));K.unshift(M);const F=K.sort((X,de)=>{if(X.relevance!==de.relevance)return de.relevance-X.relevance;if(X.language&&de.language){if(i(X.language).supersetOf===de.language)return 1;if(i(de.language).supersetOf===X.language)return-1}return 0}),[B,j]=F,ue=B;return ue.secondBest=j,ue}function g(C){let L=null;const M=function(B){let j=B.className+" ";j+=B.parentNode?B.parentNode.className:"";const ue=p.languageDetectRe.exec(j);if(ue){const X=i(ue[1]);return X||(Ua(o.replace("{}",ue[1])),Ua("Falling back to no-highlight mode for this block.",B)),X?ue[1]:"no-highlight"}return j.split(/\s+/).find(X=>l(X)||i(X))}(C);if(l(M))return;if(H("before:highlightElement",{el:C,language:M}),C.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(C)),p.throwUnescapedHTML))throw new Gp("One of your code blocks includes unescaped HTML.",C.innerHTML);L=C;const K=L.textContent,F=M?e(K,{language:M,ignoreIllegals:!0}):m(K);C.innerHTML=F.value,function(B,j,ue){const X=j&&a[j]||ue;B.classList.add("hljs"),B.classList.add(`language-${X}`)}(C,M,F.language),C.result={language:F.language,re:F.relevance,relevance:F.relevance},F.secondBest&&(C.secondBest={language:F.secondBest.language,relevance:F.secondBest.relevance}),H("after:highlightElement",{el:C,result:F,text:K})}let f=!1;function c(){if(document.readyState==="loading")return void(f=!0);document.querySelectorAll(p.cssSelector).forEach(g)}function i(C){return C=(C||"").toLowerCase(),n[C]||n[a[C]]}function r(C,{languageName:L}){typeof C=="string"&&(C=[C]),C.forEach(M=>{a[M.toLowerCase()]=L})}function se(C){const L=i(C);return L&&!L.disableAutodetect}function H(C,L){const M=C;u.forEach(function(K){K[M]&&K[M](L)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){f&&c()},!1),Object.assign(t,{highlight:e,highlightAuto:m,highlightAll:c,highlightElement:g,highlightBlock:function(C){return tt("10.7.0","highlightBlock will be removed entirely in v12.0"),tt("10.7.0","Please use highlightElement now."),g(C)},configure:function(C){p=ja(p,C)},initHighlighting:()=>{c(),tt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){c(),tt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(C,L){let M=null;try{M=L(t)}catch(K){if(Fe("Language definition for '{}' could not be registered.".replace("{}",C)),!s)throw K;Fe(K),M=d}M.name||(M.name=C),n[C]=M,M.rawDefinition=L.bind(null,t),M.aliases&&r(M.aliases,{languageName:C})},unregisterLanguage:function(C){delete n[C];for(const L of Object.keys(a))a[L]===C&&delete a[L]},listLanguages:function(){return Object.keys(n)},getLanguage:i,registerAliases:r,autoDetection:se,inherit:ja,addPlugin:function(C){(function(L){L["before:highlightBlock"]&&!L["before:highlightElement"]&&(L["before:highlightElement"]=M=>{L["before:highlightBlock"](Object.assign({block:M.el},M))}),L["after:highlightBlock"]&&!L["after:highlightElement"]&&(L["after:highlightElement"]=M=>{L["after:highlightBlock"](Object.assign({block:M.el},M))})})(C),u.push(C)}}),t.debugMode=function(){s=!1},t.safeMode=function(){s=!0},t.versionString="11.7.0",t.regex={concat:He,lookahead:Oa,either:br,optional:vp,anyNumberOfTimes:yp};for(const C in Gt)typeof Gt[C]=="object"&&mr.exports(Gt[C]);return Object.assign(t,Gt),t}({}),Wp=_t;_t.HighlightJS=_t,_t.default=_t;var te=Wp;function Fa(t){return t?typeof t=="string"?t:t.source:null}function Zt(t){return Y("(?=",t,")")}function Y(...t){return t.map(n=>Fa(n)).join("")}function me(...t){return"("+(function(a){const u=a[a.length-1];return typeof u=="object"&&u.constructor===Object?(a.splice(a.length-1,1),u):{}}(t).capture?"":"?:")+t.map(a=>Fa(a)).join("|")+")"}const Er=t=>Y(/\b/,t,/\w$/.test(t)?/\b/:/\B/),Zp=["Protocol","Type"].map(Er),za=["init","self"].map(Er),Vp=["Any","Self"],Sr=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","distributed","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Ka=["false","nil","true"],Xp=["assignment","associativity","higherThan","left","lowerThan","none","right"],Qp=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],Ga=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],Wa=me(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),Za=me(Wa,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),wr=Y(Wa,Za,"*"),Va=me(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Vt=me(Va,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),qe=Y(Va,Vt,"*"),kr=Y(/[A-Z]/,Vt,"*"),Jp=["autoclosure",Y(/convention\(/,me("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",Y(/objc\(/,qe,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],Yp=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];var nt="[0-9](_*[0-9])*",Xt=`\\.(${nt})`,Qt="[0-9a-fA-F](_*[0-9a-fA-F])*",eh={className:"number",variants:[{begin:`(\\b(${nt})((${Xt})|\\.)?|(${Xt}))[eE][+-]?(${nt})[fFdD]?\\b`},{begin:`\\b(${nt})((${Xt})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Xt})[fFdD]?\\b`},{begin:`\\b(${nt})[fFdD]\\b`},{begin:`\\b0[xX]((${Qt})\\.?|(${Qt})?\\.(${Qt}))[pP][+-]?(${nt})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${Qt})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};const Xa="[A-Za-z$_][0-9A-Za-z$_]*",th=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],nh=["true","false","null","undefined","NaN","Infinity"],Qa=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Ja=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ya=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],rh=["arguments","this","super","console","window","document","localStorage","module","global"],sh=[].concat(Ya,Qa,Ja);var rt="[0-9](_*[0-9])*",Jt=`\\.(${rt})`,Yt="[0-9a-fA-F](_*[0-9a-fA-F])*",eo={className:"number",variants:[{begin:`(\\b(${rt})((${Jt})|\\.)?|(${Jt}))[eE][+-]?(${rt})[fFdD]?\\b`},{begin:`\\b(${rt})((${Jt})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Jt})[fFdD]?\\b`},{begin:`\\b(${rt})[fFdD]\\b`},{begin:`\\b0[xX]((${Yt})\\.?|(${Yt})?\\.(${Yt}))[pP][+-]?(${rt})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${Yt})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function to(t,n,a){return a===-1?"":t.replace(n,u=>to(t,n,a-1))}return te.registerLanguage("swift",function(t){const n={match:/\s+/,relevance:0},a=t.COMMENT("/\\*","\\*/",{contains:["self"]}),u=[t.C_LINE_COMMENT_MODE,a],s={match:[/\./,me(...Zp,...za)],className:{2:"keyword"}},o={match:Y(/\./,me(...Sr)),relevance:0},d=Sr.filter(Z=>typeof Z=="string").concat(["_|0"]),p={variants:[{className:"keyword",match:me(...Sr.filter(Z=>typeof Z!="string").concat(Vp).map(Er),...za)}]},l={$pattern:me(/\b\w+/,/#\w+/),keyword:d.concat(Qp),literal:Ka},e=[s,o,p],h=[{match:Y(/\./,me(...Ga)),relevance:0},{className:"built_in",match:Y(/\b/,me(...Ga),/(?=\()/)}],m={match:/->/,relevance:0},g=[m,{className:"operator",relevance:0,variants:[{match:wr},{match:`\\.(\\.|${Za})+`}]}],f="([0-9]_*)+",c="([0-9a-fA-F]_*)+",i={className:"number",relevance:0,variants:[{match:`\\b(${f})(\\.(${f}))?([eE][+-]?(${f}))?\\b`},{match:`\\b0x(${c})(\\.(${c}))?([pP][+-]?(${f}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},r=(Z="")=>({className:"subst",variants:[{match:Y(/\\/,Z,/[0\\tnr"']/)},{match:Y(/\\/,Z,/u\{[0-9a-fA-F]{1,8}\}/)}]}),se=(Z="")=>({className:"subst",match:Y(/\\/,Z,/[\t ]*(?:[\r\n]|\r\n)/)}),H=(Z="")=>({className:"subst",label:"interpol",begin:Y(/\\/,Z,/\(/),end:/\)/}),C=(Z="")=>({begin:Y(Z,/"""/),end:Y(/"""/,Z),contains:[r(Z),se(Z),H(Z)]}),L=(Z="")=>({begin:Y(Z,/"/),end:Y(/"/,Z),contains:[r(Z),H(Z)]}),M={className:"string",variants:[C(),C("#"),C("##"),C("###"),L(),L("#"),L("##"),L("###")]},K={match:Y(/`/,qe,/`/)},F=[K,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${Vt}+`}],B=[{match:/(@|#(un)?)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:Yp,contains:[...g,i,M]}]}},{className:"keyword",match:Y(/@/,me(...Jp))},{className:"meta",match:Y(/@/,qe)}],j={match:Zt(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:Y(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Vt,"+")},{className:"type",match:kr,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:Y(/\s+&\s+/,Zt(kr)),relevance:0}]},ue={begin:/</,end:/>/,keywords:l,contains:[...u,...e,...B,m,j]};j.contains.push(ue);const X={begin:/\(/,end:/\)/,relevance:0,keywords:l,contains:["self",{match:Y(qe,/\s*:/),keywords:"_|0",relevance:0},...u,...e,...h,...g,i,M,...F,...B,j]},de={begin:/</,end:/>/,contains:[...u,j]},xe={begin:/\(/,end:/\)/,keywords:l,contains:[{begin:me(Zt(Y(qe,/\s*:/)),Zt(Y(qe,/\s+/,qe,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:qe}]},...u,...e,...g,i,M,...B,j,X],endsParent:!0,illegal:/["']/},ze={match:[/func/,/\s+/,me(K.match,qe,wr)],className:{1:"keyword",3:"title.function"},contains:[de,xe,n],illegal:[/\[/,/%/]},Te={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[de,xe,n],illegal:/\[|%/},$e={match:[/operator/,/\s+/,wr],className:{1:"keyword",3:"title"}},fe={begin:[/precedencegroup/,/\s+/,kr],className:{1:"keyword",3:"title"},contains:[j],keywords:[...Xp,...Ka],end:/}/};for(const Z of M.variants){const Ne=Z.contains.find(st=>st.label==="interpol");Ne.keywords=l;const D=[...e,...h,...g,i,M,...F];Ne.contains=[...D,{begin:/\(/,end:/\)/,contains:["self",...D]}]}return{name:"Swift",keywords:l,contains:[...u,ze,Te,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:l,contains:[t.inherit(t.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...e]},$e,fe,{beginKeywords:"import",end:/$/,contains:[...u],relevance:0},...e,...h,...g,i,M,...F,...B,j,X]}}),te.registerLanguage("scala",function(t){const n=t.regex,a={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:/\$\{/,end:/\}/}]},u={className:"string",variants:[{begin:'"""',end:'"""'},{begin:'"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},{begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE,a]},{className:"string",begin:'[a-z]+"""',end:'"""',contains:[a],relevance:10}]},s={className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},o={className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,relevance:0},d={className:"class",beginKeywords:"class object trait type",end:/[:={\[\n;]/,excludeEnd:!0,contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[s]},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[s]},o]},p={className:"function",beginKeywords:"def",end:n.lookahead(/[:={\[(\n;]/),contains:[o]};return{name:"Scala",keywords:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"},contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,u,s,p,d,t.C_NUMBER_MODE,{begin:[/^\s*/,"extension",/\s+(?=[[(])/],beginScope:{2:"keyword"}},{begin:[/^\s*/,/end/,/\s+/,/(extension\b)?/],beginScope:{2:"keyword",4:"keyword"}},{match:/\.inline\b/},{begin:/\binline(?=\s)/,keywords:"inline"},{begin:[/\(\s*/,/using/,/\s+(?!\))/],beginScope:{2:"keyword"}},{className:"meta",begin:"@[A-Za-z]+"}]}}),te.registerLanguage("rust",function(t){const n=t.regex,a={className:"title.function.invoke",relevance:0,begin:n.concat(/\b/,/(?!let\b)/,t.IDENT_RE,n.lookahead(/\s*\(/))},u="([ui](8|16|32|64|128|size)|f(32|64))?",s=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],o=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:t.IDENT_RE+"!?",type:o,keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],literal:["true","false","Some","None","Ok","Err"],built_in:s},illegal:"</",contains:[t.C_LINE_COMMENT_MODE,t.COMMENT("/\\*","\\*/",{contains:["self"]}),t.inherit(t.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+u},{begin:"\\b0o([0-7_]+)"+u},{begin:"\\b0x([A-Fa-f0-9_]+)"+u},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+u}],relevance:0},{begin:[/fn/,/\s+/,t.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,t.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,t.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,t.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,t.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:t.IDENT_RE+"::",keywords:{keyword:"Self",built_in:s,type:o}},{className:"punctuation",begin:"->"},a]}}),te.registerLanguage("ruby",function(t){const n=t.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",u=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),s=n.concat(u,/(::\w+)*/),o={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},d={className:"doctag",begin:"@[A-Za-z]+"},p={begin:"#<",end:">"},l=[t.COMMENT("#","$",{contains:[d]}),t.COMMENT("^=begin","^=end",{contains:[d],relevance:10}),t.COMMENT("^__END__",t.MATCH_NOTHING_RE)],e={className:"subst",begin:/#\{/,end:/\}/,keywords:o},h={className:"string",contains:[t.BACKSLASH_ESCAPE,e],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[t.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[t.BACKSLASH_ESCAPE,e]})]}]},m="[0-9](_?[0-9])*",g={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},f={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:o}]},c=[h,{variants:[{match:[/class\s+/,s,/\s+<\s+/,s]},{match:[/\b(class|module)\s+/,s]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:o},{match:[/(include|extend)\s+/,s],scope:{2:"title.class"},keywords:o},{relevance:0,match:[s,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:u,scope:"title.class"},{match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[f]},{begin:t.IDENT_RE+"::"},{className:"symbol",begin:t.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[h,{begin:a}],relevance:0},g,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:o},{begin:"("+t.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[t.BACKSLASH_ESCAPE,e],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(p,l),relevance:0}].concat(p,l);e.contains=c,f.contains=c;const i=[{begin:/^\s*=>/,starts:{end:"$",contains:c}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:o,contains:c}}];return l.unshift(p),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:o,illegal:/\/\*/,contains:[t.SHEBANG({binary:"ruby"})].concat(i).concat(l).concat(c)}}),te.registerLanguage("python",function(t){const n=t.regex,a=/[\p{XID_Start}_]\p{XID_Continue}*/u,u=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],s={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:u,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},o={className:"meta",begin:/^(>>>|\.\.\.) /},d={className:"subst",begin:/\{/,end:/\}/,keywords:s,illegal:/#/},p={begin:/\{\{/,relevance:0},l={className:"string",contains:[t.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,o],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,o],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,o,p,d]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,o,p,d]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[t.BACKSLASH_ESCAPE,p,d]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,p,d]},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},e="[0-9](_?[0-9])*",h=`(\\b(${e}))?\\.(${e})|\\b(${e})\\.`,m=`\\b|${u.join("|")}`,g={className:"number",relevance:0,variants:[{begin:`(\\b(${e})|(${h}))[eE][+-]?(${e})[jJ]?(?=${m})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${m})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${m})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`},{begin:`\\b(${e})[jJ](?=${m})`}]},f={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:s,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},c={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:["self",o,g,l,t.HASH_COMMENT_MODE]}]};return d.contains=[l,g,o],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:s,illegal:/(<\/|->|\?)|=>/,contains:[o,g,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},l,f,t.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[c]},{variants:[{match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,c,l]}]}}),te.registerLanguage("powershell",function(t){const n={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},a={begin:"`[\\s\\S]",relevance:0},u={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},s={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[a,u,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},o={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},d=t.inherit(t.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),p={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},l={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[t.TITLE_MODE]},e={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[u]}]},h={begin:/using\s/,end:/$/,returnBegin:!0,contains:[s,o,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},m={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},g={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(n.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},t.inherit(t.TITLE_MODE,{endsParent:!0})]},f=[g,d,a,t.NUMBER_MODE,s,o,p,u,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/@\B/,relevance:0}],c={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",f,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return g.contains.unshift(c),{name:"PowerShell",aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:n,contains:f.concat(l,e,h,m,c)}}),te.registerLanguage("php",function(t){const n=t.regex,a=/(?![A-Za-z0-9])(?![$])/,u=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,a),s=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,a),o={scope:"variable",match:"\\$+"+u},d={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},p=t.inherit(t.APOS_STRING_MODE,{illegal:null}),l=`[ 	
]`,e={scope:"string",variants:[t.inherit(t.QUOTE_STRING_MODE,{illegal:null,contains:t.QUOTE_STRING_MODE.contains.concat(d)}),p,t.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,contains:t.QUOTE_STRING_MODE.contains.concat(d)})]},h={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},m=["false","null","true"],g=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],f=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],c={keyword:g,literal:(F=>{const B=[];return F.forEach(j=>{B.push(j),j.toLowerCase()===j?B.push(j.toUpperCase()):B.push(j.toLowerCase())}),B})(m),built_in:f},i=F=>F.map(B=>B.replace(/\|\d+$/,"")),r={variants:[{match:[/new/,n.concat(l,"+"),n.concat("(?!",i(f).join("\\b|"),"\\b)"),s],scope:{1:"keyword",4:"title.class"}}]},se=n.concat(u,"\\b(?!\\()"),H={variants:[{match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),se],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[s,n.concat(/::/,n.lookahead(/(?!class\b)/)),se],scope:{1:"title.class",3:"variable.constant"}},{match:[s,n.concat("::",n.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},C={scope:"attr",match:n.concat(u,n.lookahead(":"),n.lookahead(/(?!::)/))},L={relevance:0,begin:/\(/,end:/\)/,keywords:c,contains:[C,o,H,t.C_BLOCK_COMMENT_MODE,e,h,r]},M={relevance:0,match:[/\b/,n.concat("(?!fn\\b|function\\b|",i(g).join("\\b|"),"|",i(f).join("\\b|"),"\\b)"),u,n.concat(l,"*"),n.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[L]};L.contains.push(M);const K=[C,H,t.C_BLOCK_COMMENT_MODE,e,h,r];return{case_insensitive:!1,keywords:c,contains:[{begin:n.concat(/#\[\s*/,s),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:m,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:m,keyword:["new","array"]},contains:["self",...K]},...K,{scope:"meta",match:s}]},t.HASH_COMMENT_MODE,t.COMMENT("//","$"),t.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:t.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},o,M,H,{match:[/const/,/\s/,u],scope:{1:"keyword",3:"variable.constant"}},r,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},t.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:c,contains:["self",o,H,t.C_BLOCK_COMMENT_MODE,e,h]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},t.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[t.inherit(t.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},t.UNDERSCORE_TITLE_MODE]},e,h]}}),te.registerLanguage("perl",function(t){const n=t.regex,a=/[dualxmsipngr]{0,12}/,u={$pattern:/[\w.]+/,keyword:["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"].join(" ")},s={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:u},o={begin:/->\{/,end:/\}/},d={variants:[{begin:/\$\d/},{begin:n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},p=[t.BACKSLASH_ESCAPE,s,d],l=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],e=(g,f,c="\\1")=>{const i=c==="\\1"?c:n.concat(c,f);return n.concat(n.concat("(?:",g,")"),f,/(?:\\.|[^\\\/])*?/,i,/(?:\\.|[^\\\/])*?/,c,a)},h=(g,f,c)=>n.concat(n.concat("(?:",g,")"),f,/(?:\\.|[^\\\/])*?/,c,a),m=[d,t.HASH_COMMENT_MODE,t.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),o,{className:"string",contains:p,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[t.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+t.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[t.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:e("s|tr|y",n.either(...l,{capture:!0}))},{begin:e("s|tr|y","\\(","\\)")},{begin:e("s|tr|y","\\[","\\]")},{begin:e("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:h("(?:m|qr)?",/\//,/\//)},{begin:h("m|qr",n.either(...l,{capture:!0}),/\1/)},{begin:h("m|qr",/\(/,/\)/)},{begin:h("m|qr",/\[/,/\]/)},{begin:h("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[t.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return s.contains=m,o.contains=m,{name:"Perl",aliases:["pl","pm"],keywords:u,contains:m}}),te.registerLanguage("ocaml",function(t){return{name:"OCaml",aliases:["ml"],keywords:{$pattern:"[a-z_]\\w*!?",keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},illegal:/\/\/|>>/,contains:[{className:"literal",begin:"\\[(\\|\\|)?\\]|\\(\\)",relevance:0},t.COMMENT("\\(\\*","\\*\\)",{contains:["self"]}),{className:"symbol",begin:"'[A-Za-z_](?!')[\\w']*"},{className:"type",begin:"`[A-Z][\\w']*"},{className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},{begin:"[a-z_]\\w*'[\\w']*",relevance:0},t.inherit(t.APOS_STRING_MODE,{className:"string",relevance:0}),t.inherit(t.QUOTE_STRING_MODE,{illegal:null}),{className:"number",begin:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",relevance:0},{begin:/->/}]}}),te.registerLanguage("objectivec",function(t){const n=/[a-zA-Z@][a-zA-Z0-9_]*/,a={$pattern:n,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{"variable.language":["this","super"],$pattern:n,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},illegal:"</",contains:[{className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,t.C_NUMBER_MODE,t.QUOTE_STRING_MODE,t.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+a.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:a,contains:[t.UNDERSCORE_TITLE_MODE]},{begin:"\\."+t.UNDERSCORE_IDENT_RE,relevance:0}]}}),te.registerLanguage("lua",function(t){const n="\\[=*\\[",a="\\]=*\\]",u={begin:n,end:a,contains:["self"]},s=[t.COMMENT("--(?!"+n+")","$"),t.COMMENT("--"+n,a,{contains:[u],relevance:10})];return{name:"Lua",keywords:{$pattern:t.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:s.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[t.inherit(t.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:s}].concat(s)},t.C_NUMBER_MODE,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,{className:"string",begin:n,end:a,contains:[u],relevance:5}])}}),te.registerLanguage("kotlin",function(t){const n={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"symbol",begin:t.UNDERSCORE_IDENT_RE+"@"},u={className:"subst",begin:/\$\{/,end:/\}/,contains:[t.C_NUMBER_MODE]},s={className:"variable",begin:"\\$"+t.UNDERSCORE_IDENT_RE},o={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[s,u]},{begin:"'",end:"'",illegal:/\n/,contains:[t.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[t.BACKSLASH_ESCAPE,s,u]}]};u.contains.push(o);const d={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+t.UNDERSCORE_IDENT_RE+")?"},p={className:"meta",begin:"@"+t.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[t.inherit(o,{className:"string"}),"self"]}]},l=eh,e=t.COMMENT("/\\*","\\*/",{contains:[t.C_BLOCK_COMMENT_MODE]}),h={variants:[{className:"type",begin:t.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},m=h;return m.variants[1].contains=[h],h.variants[1].contains=[m],{name:"Kotlin",aliases:["kt","kts"],keywords:n,contains:[t.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),t.C_LINE_COMMENT_MODE,e,{className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},a,d,p,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{begin:t.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[t.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[h,t.C_LINE_COMMENT_MODE,e],relevance:0},t.C_LINE_COMMENT_MODE,e,d,p,o,t.C_NUMBER_MODE]},e]},{begin:[/class|interface|trait/,/\s+/,t.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},t.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},d,p]},o,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},l]}}),te.registerLanguage("javascript",function(t){const n=t.regex,a=Xa,u="<>",s="</>",o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(xe,ze)=>{const Te=xe[0].length+xe.index,$e=xe.input[Te];if($e==="<"||$e===",")return void ze.ignoreMatch();let fe;$e===">"&&(((Ne,{after:D})=>{const st="</"+Ne[0].slice(1);return Ne.input.indexOf(st,D)!==-1})(xe,{after:Te})||ze.ignoreMatch());const Z=xe.input.substring(Te);((fe=Z.match(/^\s*=/))||(fe=Z.match(/^\s+extends\s+/))&&fe.index===0)&&ze.ignoreMatch()}},d={$pattern:Xa,keyword:th,literal:nh,built_in:sh,"variable.language":rh},p="[0-9](_?[0-9])*",l=`\\.(${p})`,e="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${e})((${l})|\\.)?|(${l}))[eE][+-]?(${p})\\b`},{begin:`\\b(${e})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,m],subLanguage:"css"}},c={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,m]},i={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},r=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,f,c,{match:/\$\d+/},h];m.contains=r.concat({begin:/\{/,end:/\}/,keywords:d,contains:["self"].concat(r)});const se=[].concat(i,m.contains),H=se.concat([{begin:/\(/,end:/\)/,keywords:d,contains:["self"].concat(se)}]),C={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:H},L={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},M={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Qa,...Ja]}},K={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[C],illegal:/%/},F={match:n.concat(/\b/,(B=[...Ya,"super","import"],n.concat("(?!",B.join("|"),")")),a,n.lookahead(/\(/)),className:"title.function",relevance:0};var B;const j={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ue={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},C]},X="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",de={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(X)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[C]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:d,exports:{PARAMS_CONTAINS:H,CLASS_REFERENCE:M},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,f,c,i,{match:/\$\d+/},h,M,{className:"attr",begin:a+n.lookahead(":"),relevance:0},de,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[i,t.REGEXP_MODE,{className:"function",begin:X,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:H}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:u,end:s},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},K,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[C,t.inherit(t.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},j,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[C]},F,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},L,ue,{match:/\$[(.]/}]}}),te.registerLanguage("java",function(t){const n=t.regex,a="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",u=a+to("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),s={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},o={className:"meta",begin:"@"+a,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},d={className:"params",begin:/\(/,end:/\)/,keywords:s,relevance:0,contains:[t.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:s,illegal:/<\/|#/,contains:[t.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[t.BACKSLASH_ESCAPE]},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[n.concat(/(?!else)/,a),/\s+/,a,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},contains:[d,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+u+"\\s+)",t.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:s,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:s,relevance:0,contains:[o,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,eo,t.C_BLOCK_COMMENT_MODE]},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},eo,o]}}),te.registerLanguage("http",function(t){const n="HTTP/(2|1\\.[01])",a={className:"attribute",begin:t.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},u=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+n+" \\d{3})",end:/$/,contains:[{className:"meta",begin:n},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:u}},{begin:"(?=^[A-Z]+ (.*?) "+n+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:n},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:u}},t.inherit(a,{relevance:0})]}}),te.registerLanguage("go",function(t){const n={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{className:"string",variants:[t.QUOTE_STRING_MODE,t.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:t.C_NUMBER_RE+"[i]",relevance:1},t.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[t.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:n,illegal:/["']/}]}]}}),te.registerLanguage("dart",function(t){const n={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"},u={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[t.BACKSLASH_ESCAPE,n,a]},{begin:'"""',end:'"""',contains:[t.BACKSLASH_ESCAPE,n,a]},{begin:"'",end:"'",illegal:"\\n",contains:[t.BACKSLASH_ESCAPE,n,a]},{begin:'"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE,n,a]}]};a.contains=[t.C_NUMBER_MODE,u];const s=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],o=s.map(d=>`${d}?`);return{name:"Dart",keywords:{keyword:["abstract","as","assert","async","await","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","inferface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","while","with","yield"],built_in:s.concat(o).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},contains:[u,t.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),t.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",end:"$",relevance:0}]}),t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},t.UNDERSCORE_TITLE_MODE]},t.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}),te.registerLanguage("csharp",function(t){const n={keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],literal:["default","false","null","true"]},a=t.inherit(t.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},s={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},o=t.inherit(s,{illegal:/\n/}),d={className:"subst",begin:/\{/,end:/\}/,keywords:n},p=t.inherit(d,{illegal:/\n/}),l={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},t.BACKSLASH_ESCAPE,p]},e={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},d]},h=t.inherit(e,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},p]});d.contains=[e,l,s,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,u,t.C_BLOCK_COMMENT_MODE],p.contains=[h,l,o,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,u,t.inherit(t.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const m={variants:[e,l,s,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},g={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]},f=t.IDENT_RE+"(<"+t.IDENT_RE+"(\\s*,\\s*"+t.IDENT_RE+")*>)?(\\[\\])?",c={begin:"@"+t.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:n,illegal:/::/,contains:[t.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},m,u,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},a,g,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,g,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+f+"\\s+)+"+t.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{beginKeywords:["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"].join(" "),relevance:0},{begin:t.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[t.TITLE_MODE,g],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,contains:[m,u,t.C_BLOCK_COMMENT_MODE]},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},c]}}),te.registerLanguage("cpp",function(t){const n=t.regex,a=t.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),u="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",o="(?!struct)("+u+"|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",d={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},t.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},t.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},a,t.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:n.optional(s)+t.IDENT_RE,relevance:0},m=n.optional(s)+t.IDENT_RE+"\\s*\\(",g={type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]},f={className:"function.dispatch",relevance:0,keywords:{_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]},begin:n.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,t.IDENT_RE,n.lookahead(/(<[^<>]+>|)\s*\(/))},c=[f,e,d,a,t.C_BLOCK_COMMENT_MODE,l,p],i={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:g,contains:c.concat([{begin:/\(/,end:/\)/,keywords:g,contains:c.concat(["self"]),relevance:0}]),relevance:0},r={className:"function",begin:"("+o+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:g,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:u,keywords:g,relevance:0},{begin:m,returnBegin:!0,contains:[h],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[p,l]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[a,t.C_BLOCK_COMMENT_MODE,p,l,d,{begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:["self",a,t.C_BLOCK_COMMENT_MODE,p,l,d]}]},d,a,t.C_BLOCK_COMMENT_MODE,e]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:g,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(i,r,f,c,[e,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:g,contains:["self",d]},{begin:t.IDENT_RE+"::",keywords:g},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}),te.registerLanguage("clojure",function(t){const n="a-zA-Z_\\-!.?+*=<>&'",a="[#]?["+n+"]["+n+"0-9/;:$#]*",u="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",s={$pattern:a,built_in:u+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},o={begin:a,relevance:0},d={scope:"number",relevance:0,variants:[{match:/[-+]?0[xX][0-9a-fA-F]+N?/},{match:/[-+]?0[0-7]+N?/},{match:/[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/},{match:/[-+]?[0-9]+\/[0-9]+N?/},{match:/[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/},{match:/[-+]?([1-9][0-9]*|0)N?/}]},p={scope:"character",variants:[{match:/\\o[0-3]?[0-7]{1,2}/},{match:/\\u[0-9a-fA-F]{4}/},{match:/\\(newline|space|tab|formfeed|backspace|return)/},{match:/\\\S/,relevance:0}]},l={scope:"regex",begin:/#"/,end:/"/,contains:[t.BACKSLASH_ESCAPE]},e=t.inherit(t.QUOTE_STRING_MODE,{illegal:null}),h={scope:"punctuation",match:/,/,relevance:0},m=t.COMMENT(";","$",{relevance:0}),g={className:"literal",begin:/\b(true|false|nil)\b/},f={begin:"\\[|(#::?"+a+")?\\{",end:"[\\]\\}]",relevance:0},c={className:"symbol",begin:"[:]{1,2}"+a},i={begin:"\\(",end:"\\)"},r={endsWithParent:!0,relevance:0},se={keywords:s,className:"name",begin:a,relevance:0,starts:r},H=[h,i,p,l,e,m,c,f,d,g,o],C={beginKeywords:u,keywords:{$pattern:a,keyword:u},end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:a,relevance:0,excludeEnd:!0,endsParent:!0}].concat(H)};return i.contains=[C,se,r],r.contains=H,f.contains=H,{name:"Clojure",aliases:["clj","edn"],illegal:/\S/,contains:[h,i,p,l,e,m,c,f,d,g]}}),te.registerLanguage("c",function(t){const n=t.regex,a=t.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),u="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",o="("+u+"|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",d={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},t.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},t.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},a,t.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:n.optional(s)+t.IDENT_RE,relevance:0},m=n.optional(s)+t.IDENT_RE+"\\s*\\(",g={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},f=[e,d,a,t.C_BLOCK_COMMENT_MODE,l,p],c={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:g,contains:f.concat([{begin:/\(/,end:/\)/,keywords:g,contains:f.concat(["self"]),relevance:0}]),relevance:0},i={begin:"("+o+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:g,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:u,keywords:g,relevance:0},{begin:m,returnBegin:!0,contains:[t.inherit(h,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[a,t.C_BLOCK_COMMENT_MODE,p,l,d,{begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:["self",a,t.C_BLOCK_COMMENT_MODE,p,l,d]}]},d,a,t.C_BLOCK_COMMENT_MODE,e]};return{name:"C",aliases:["h"],keywords:g,disableAutodetect:!0,illegal:"</",contains:[].concat(c,i,f,[e,{begin:t.IDENT_RE+"::",keywords:g},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},t.TITLE_MODE]}]),exports:{preprocessor:e,strings:p,keywords:g}}}),te.registerLanguage("brainfuck",function(t){const n={className:"literal",begin:/[+-]+/,relevance:0};return{name:"Brainfuck",aliases:["bf"],contains:[t.COMMENT(/[^\[\]\.,\+\-<> \r\n]/,/[\[\]\.,\+\-<> \r\n]/,{contains:[{match:/[ ]+[^\[\]\.,\+\-<> \r\n]/,relevance:0}],returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",begin:"[\\.,]",relevance:0},{begin:/(?=\+\+|--)/,contains:[n]},n]}}),te.registerLanguage("bash",function(t){const n=t.regex,a={},u={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[a]}]};Object.assign(a,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},u]});const s={className:"subst",begin:/\$\(/,end:/\)/,contains:[t.BACKSLASH_ESCAPE]},o={begin:/<<-?\s*(?=\w+)/,starts:{contains:[t.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},d={className:"string",begin:/"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,a,s]};s.contains.push(d);const p={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},t.NUMBER_MODE,a]},l=t.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),e={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[t.inherit(t.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[l,t.SHEBANG(),e,p,t.HASH_COMMENT_MODE,o,{match:/(\/[a-z._-]+)+/},d,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},a]}}),te.registerLanguage("r",function(t){const n=t.regex,a=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,u=n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),s=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,o=n.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:a,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[t.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:a},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),t.HASH_COMMENT_MODE,{scope:"string",contains:[t.BACKSLASH_ESCAPE],variants:[t.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),t.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),t.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),t.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),t.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),t.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[s,u]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,u]},{scope:{1:"punctuation",2:"number"},match:[o,u]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,u]}]},{scope:{3:"operator"},match:[a,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:s},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:o},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}),function(){function t(){this._baseUrl="",this._url="",this._method="GET",this._params=[],this._mimeType="application/x-www-form-urlencoded",this._lang="javascript",this._library="xmlhttprequest"}return t.prototype.library=function(n){return n=n.toLowerCase(),this._library=n,this},t.prototype.lang=function(n){var a;if(n=n.toLowerCase(),!this.config()[n])throw new Error("bad lang: "+n);return this._lang=n,this._library=(a=this.config()[n][0])!==null&&a!==void 0?a:null,this},t.prototype.mimeType=function(n){return this._mimeType=n,this},t.prototype.params=function(n){return this._params=n,this},t.prototype.method=function(n){return this._method=n,this},t.prototype.url=function(n){return n=n.startsWith("/")?n.substring(1):n,this._url=n,this},t.prototype.baseUrl=function(n){return n.endsWith("/")||(n+="/"),this._baseUrl=n,this},t.prototype.convertParams=function(){var n,a=this._baseUrl;a.endsWith("/")||(a+="/");var u=this._url;u.startsWith("/")&&(u=u.substring(1)),this._params.filter(function(d){return d.in==="path"}).forEach(function(d){u=u.replace("{".concat(d.name,"}"),d.value)});var s=this._params.filter(function(d){return d.in==="query"}).map(function(d){return"".concat(d.name,"=").concat(d.value)}).join("&");s!==""&&(u+="?"+s),u=a+u;var o=(n=a.match(/^https?:\/\/([^\/]+)/i)[1])!==null&&n!==void 0?n:"";return{method:this._method,mimeType:this._mimeType,url:u,host:o,headers:this._params.filter(function(d){return d.in==="headers"}),postData:this._params.filter(function(d){return d.in==="postData"}),cookies:this._params.filter(function(d){return d.in==="cookie"})}},t.prototype.cleanup=function(n){return n.replace(/&amp;/gim,"&").replace(/\n\n+/gim,`
`).replace(/^\n/gim,"")},t.prototype.generate=function(){var n,a=(n=xa[this._lang+"/"+this._library])!==null&&n!==void 0?n:null;if(!a)throw new Error("bad library");var u=this.convertParams();return this.cleanup(a(u))},t.prototype.generateHighlight=function(){return te.highlight(this.generate(),{language:this._lang,ignoreIllegals:!0}).value},t.prototype.config=function(){return Object.keys(xa).reduce(function(n,a){var u=a.split("/"),s=u[0],o=u[1];return n[s]||(n[s]=[]),n[s].push(o),n},{})},t}()})})(Gg);const Wg=Nr;const go=E=>(Ge("data-v-1d101d7d"),E=E(),We(),E),Zg={class:"relative"},Vg=["aria-expanded"],Xg=go(()=>_("path",{"fill-rule":"evenodd",d:"M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)),Qg=[Xg],Jg={key:0,class:"dropdown-list origin-top-right absolute left-0 mt-2 ml-0 w-56 rounded-md shadow-lg bg-white dark:bg-black dark:text-gray-300/75 ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},Yg=["onClick"],eb={class:"flex justify-between cursor-pointer"},tb={class:"flex flex-grow"},nb={class:"flex flex-grow",style:{"justify-content":"end"}},rb={class:"h-4 w-4 ml-2 self-center",style:{display:"initial"},viewBox:"0 0 20 20",fill:"currentColor"},sb=go(()=>_("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)),ab=[sb],ob={key:0,class:"sub-menu"},ib=["onClick"],cb={__name:"CustomDropdownWithSubMenu",props:{items:{type:Object,required:!0}},emits:["select"],setup(E,{emit:y}){let v=_e(!1),q=_e("javascript"),T=_e("javascript"),k=_e("xmlhttprequest");const x=be(()=>T.value+" / "+k.value);function A(U,P=null){P?(T.value=U,k.value=P,y("select",U,P),v.value=!1):q.value=U}return(U,P)=>(S(),w("div",Zg,[_("button",{onClick:P[0]||(P[0]=()=>so(v)?v.value=!O(v):v=!O(v)),type:"button",class:"inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-gray-300/75","aria-haspopup":"true","aria-expanded":O(v)},[_("b",null,N(O(x)?O(x):"Select Library"),1),(S(),w("svg",{class:Ie(["-mr-1 ml-2 h-5 w-5",O(v)?"-rotate-180":"rotate-0"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Qg,2))],8,Vg),z(ch,{name:"dropdown"},{default:ve(()=>[O(v)?(S(),w("ul",Jg,[(S(!0),w(ee,null,ae(E.items,(G,J)=>(S(),w("li",{key:J,onClick:W=>A(J),role:"menuitem",class:"border block px-4 py-2 m-0 text-sm text-gray-700 hover:bg-white hover:text-gray-800 dark:bg-black dark:hover:bg-gray-800 dark:text-gray-300/75"},[G?(S(),w(ee,{key:0},[_("div",eb,[_("span",tb,N(J),1),_("span",nb,[(S(),w("svg",rb,ab))])]),O(q)===J?(S(),w("ul",ob,[(S(!0),w(ee,null,ae(G,W=>(S(),w("li",{key:W,onClick:Ue=>A(J,W),class:"bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800 dark:text-gray-300/75 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"},N(W),9,ib))),128))])):I("",!0)],64)):(S(),w(ee,{key:1},[ie(N(G.snippet),1)],64))],8,Yg))),128))])):I("",!0)]),_:1})]))}},lb=pe(cb,[["__scopeId","data-v-1d101d7d"]]);const ub={class:"col regular-font request-panel code-simple"},db={class:"code-panel"},pb={class:"code-panel-body relative"},hb=["onClick"],mb=["innerHTML"],fb={__name:"CodeSimples",props:{simples:{type:[Object,Array],required:!1},baseUrl:{type:String,required:!1,default:""},url:{type:String,required:!0},method:{type:String,required:!1,default:"GET"},params:{type:Array,required:!1,default:()=>[]},mimeType:{type:String,required:!1,default:"application/x-www-form-urlencoded"}},setup(E){const y=E,v=new Wg,q=v.config();let T=_e("javascript"),k=_e("xmlhttprequest"),x=_e(""),A=_e("");function U(J,W=null){T.value=J,k.value=W,G()}function P(J){Jh(this.code,J)}function G(){const J=y.method.toUpperCase();let W=y.baseUrl||`${location.protocol}//${location.host}/`;v.baseUrl(W),v.url(y.url),v.method(J),v.params(JSON.parse(JSON.stringify(y.params))),v.mimeType(y.mimeType),v.lang(T.value),v.library(k.value),x.value=v.generate(),A.value=v.generateHighlight()}return G(),(J,W)=>(S(),w("div",ub,[z(lb,{items:O(q),onSelect:U},null,8,["items"]),_("div",db,[_("div",pb,[_("button",{class:"toolbar-btn absolute top-2 right-2",onClick:ao(P,["stop","prevent"])},"Copy",8,hb),_("pre",{class:Ie(["language line-numbers",`language-${O(T)}`])},[_("code",{class:"language",innerHTML:O(A)},null,8,mb)],2)])])]))}},gb={components:{OpenApiRouteHeader:Lg,OpenApiRequestBody:ho,OpenApiSecurity:Kg,OpenApiParameters:fo,OpenApiResponses:mo,OpenApiExamples:po,CodeSimples:fb},props:{simples:{type:[Object,Array],required:!0},route:{type:Object,required:!0},currentLocale:{type:String,required:!0},url:{type:String,required:!1,default:""},server:{type:String,required:!1,default:""},method:{type:String,required:!1,default:"GET"},components:{type:Object,default:()=>({})}},data(){return{lang:"javascript",mimeType:"application/x-www-form-urlencoded",params:[]}},methods:{tr:ge,genParamsToSimple(){if(this.route.requestBody&&Object.keys(this.route.requestBody).length){const y=Object.keys(this.route.requestBody)[0],v=this.route.requestBody[y];if(Object.keys(v).length){this.mimeType=Object.keys(v)[0];const q=v[this.mimeType];if(q.schema){const T=q.schema.properties;for(const k in T){const x=T[k]||{};let A="";x.example&&(A=x.example??""),A===""&&x.type&&(A=this.convertStringFormatToMd(x.type,k)),this.params.push({in:"postData",name:k,value:A.toString()})}}}}for(let y in this.route.parameters){const v=this.route.parameters[y];if(v.$ref)continue;const q=v.name??"",T=v.in??"";let k="";v.schema?k=v.schema.default??"":k=v.default??"",k===""&&v.schema&&v.schema.type&&(k=this.convertStringFormatToMd(v.schema.type,q)),this.params.push({in:T,name:q,value:k.toString()})}const E=this.simples;for(let y in E)this.params.push({in:E[y].in,name:E[y].name,value:E[y].value})},convertStringFormatToMd(E,y){switch(E){case"date":return"YYYY-MM-DD";case"date-time":return"YYYY-MM-DDTHH:MM:SSZ";case"email":return"example@example.com";case"hostname":return"example.com";case"ipv4":return"192.0.2.0";case"ipv6":return"2001:0db8:85a3:0000:0000:8a2e:0370:7334";case"uri":return"https://example.com";case"integer":return"1";case"string":return`{${y}}`;default:return E}}},mounted(){this.genParamsToSimple()}},bb=_("h2",{class:"text-lg font-bold mb-2"},"Code simples:",-1);function _b(E,y,v,q,T,k){const x=Re("OpenApiRouteHeader"),A=Re("OpenApiParameters"),U=Re("OpenApiRequestBody"),P=Re("CodeSimples"),G=xg,J=Re("OpenApiSecurity"),W=Re("OpenApiResponses"),Ue=Re("OpenApiExamples");return S(),w("div",null,[z(x,{path:v.route.path,method:v.route.method,tags:v.route.tags,summary:k.tr(v.route,"summary",v.currentLocale),description:k.tr(v.route,"description",v.currentLocale),deprecated:v.route.deprecated,"current-locale":v.currentLocale},null,8,["path","method","tags","summary","description","deprecated","current-locale"]),v.route.parameters?(S(),ye(A,{key:0,parameters:v.route.parameters,"current-locale":v.currentLocale,components:v.components},null,8,["parameters","current-locale","components"])):I("",!0),v.route.requestBody?(S(),ye(U,{key:1,requestBody:v.route.requestBody,"current-locale":v.currentLocale,components:v.components},null,8,["requestBody","current-locale","components"])):I("",!0),bb,z(G,{"fallback-tag":"span",fallback:"Loading comments..."},{default:ve(()=>[z(P,{url:v.route.path,baseUrl:v.server,simples:v.simples,method:v.method,"mime-type":T.mimeType,params:T.params},null,8,["url","baseUrl","simples","method","mime-type","params"])]),_:1}),v.route.security?(S(),ye(J,{key:2,security:v.route.security,"current-locale":v.currentLocale},null,8,["security","current-locale"])):I("",!0),v.route.responses?(S(),ye(W,{key:3,responses:v.route.responses,"current-locale":v.currentLocale,components:v.components},null,8,["responses","current-locale","components"])):I("",!0),v.route.examples?(S(),ye(Ue,{key:4,examples:v.route.examples,"current-locale":v.currentLocale},null,8,["examples","current-locale"])):I("",!0)])}const yb=pe(gb,[["render",_b]]),vb={},Eb={class:"flex flex-col items-center justify-center h-screen"},Sb=_("h1",{class:"text-9xl font-bold text-gray-500 mb-0"},"404",-1),wb=_("p",{class:"text-lg text-gray-700 text-center"},"Not found",-1),kb=[Sb,wb];function xb(E,y){return S(),w("div",Eb,kb)}const Tb=pe(vb,[["render",xb]]);const Cb={class:"flex flex-col h-screen dark:bg-gray-900 dark:text-gray-300/75"},qb={xmlns:"http://www.w3.org/2000/svg",width:"100",height:"30"},Nb=_("rect",{width:"100",height:"30",rx:"5",fill:"#1A202C"},null,-1),Ob=["textContent"],Rb={class:"flex flex-1 overflow-hidden"},Mb={__name:"apidocs.petstore_extended",setup(E){const y=function(wt){return{petstore_extended:"Petstore Extended Api"}},v=function(wt){return[{in:"queryString",name:"apikey",value:"1111"}]},q={folder:"./docs/openapi",name:"Api Docs",path:"docs",locales:{en:"English",ru:"Русский"},doc:{openapi:"3.0.0",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],info:{title:"Pet Store",version:"1.0.0",description:`<h1 id="introduction">Introduction</h1>
<p>Petstore illustrate the typical design decisions and tradeoffs a developer makes when building an enterprise application.  The demo shows how to document REST API services <strong>OpenAPI format</strong> and is based on <a href="http://petstore.swagger.io/">Petstore sample</a> by <a href="http://swagger.io">swagger.io</a> team. It was further <strong>extended</strong> by <a href="https://github.com/Redocly/redoc">ReDoc</a> Team.</p>
<h2 id="api-categories">API Categories</h2>
<p>The APIs are divided in 3 separate categories, to make things easy to discover.  In RapiDoc OpenAPI renderer these catagories are organized into Tags. each of these tags will contain their respective APIs In case you are viewing RapiDoc in <code>read-mode</code> then the Tags and their operation will be organized in Left Navigation bar.
Below is how these APIs are arranged</p>
<ul>
<li>Pet</li>
<li>Store</li>
<li>Users</li>
</ul>
<h2 id="api-operations">API Operations</h2>
<h3 id="pet-operations">Pet Operations</h3>
<p>Below is the list of supported operations</p>
<ul>
<li>Update an existing pet</li>
<li>Add a new pet to the store</li>
<li>Find Pet by ID</li>
<li>Updates a pet in the store</li>
<li>Deletes a pet</li>
<li>Upload an pet image</li>
<li>Finds Pets by status</li>
<li>Finds Pets by tags</li>
</ul>
<h3 id="store-operations">Store Operations</h3>
<p>Below is the list of supported operations</p>
<ul>
<li>Get pet inventory by status</li>
<li>Place an order for a pet</li>
<li>Find purchase order by ID</li>
<li>Delete purchase order</li>
</ul>
<h3 id="user-operations">User Operations</h3>
<p>Below is the list of supported operations</p>
<ul>
<li>Create User</li>
<li>Login and Logout of user</li>
<li>Get user by user name</li>
<li>Update user</li>
<li>Delete user</li>
</ul>
<h1 id="example">Example</h1>
<p>Below is a small code sample how to sender this OpenAPI spec using RapiDoc</p>
<pre><code class="language-html">  &lt;!doctype html&gt; &lt;!-- Important: must specify --&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt; &lt;!-- Important: rapi-doc uses utf8 characters --&gt;
    &lt;script type=&quot;module&quot; src=&quot;https://unpkg.com/rapidoc/dist/rapidoc-min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;rapi-doc 
      spec-url = &quot;https://petstore.swagger.io/v2/swagger.json&quot; 
    &gt; &lt;/rapi-doc&gt;
  &lt;/body&gt; 
  &lt;/html&gt;
</code></pre>
<h1 id="openapi-version">OpenAPI Version</h1>
<p>You can find the version of OpenAPI spec from the <code>version</code> object</p>
<pre><code class="language-yaml">  openapi: 3.0.2
  info:
    version: &#39;1.0&#39;
    title: Server Variables
  ...  
</code></pre>
<h1 id="authentication">Authentication</h1>
<p>Petstore offers two forms of authentication:</p>
<ul>
<li>API Key</li>
<li>OAuth2</li>
</ul>
<p>OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications.</p>
`},externalDocs:{description:"Find out how to create Github repo for your OpenAPI spec.",url:"https://github.com/Rebilly/generator-openapi-repo"},tags:[{name:"pet",description:"Everything about your Pets"},{name:"store",description:"Access to Petstore orders","x-tag-expanded":!1},{name:"user",description:"Operations about user"},{name:"pet_model",description:"The Pet Model"},{name:"store_model",description:"The Order Model"}],paths:{pet:{parameters:[{name:"cookieParam",in:"cookie",description:"Some cookie",required:!0,schema:{type:"integer",format:"int64"}}],post:{tags:["pet"],summary:"Add a new pet to the store",description:"Add new pet to the store inventory.",operationId:"addPet",responses:{405:{description:"Invalid input"}},security:[{petstore_auth:["write:pets","read:pets"]}],"x-code-samples":[{lang:"HTTP",label:"HTTP Request",source:`POST /pet HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  &quot;status&quot;: &quot;ok&quot;,
  &quot;extended&quot;: true,
  &quot;results&quot;: [
    {&quot;value&quot;: 0, &quot;type&quot;: &quot;int64&quot;},
    {&quot;value&quot;: 1.0e+3, &quot;type&quot;: &quot;decimal&quot;}
  ]
}
`},{lang:"java",label:"JAVA",source:`private String createPet() throws JsonProcessingException {
  Pet pet = new Pet();
  pet.setId(1l);
  pet.setName(&quot;Wuffy&quot;);
  Category category = new Category(1l, &quot;Hund&quot;);
  pet.setCategory(category);
  return new ObjectMapper().writeValueAsString(pet);
}
`}],requestBody:{$ref:"#/components/requestBodies/Pet"},path:"/pet"},put:{tags:["pet"],summary:"Update an existing pet",description:"",operationId:"updatePet",responses:{400:{description:"Invalid ID supplied"},404:{description:"Pet not found"},405:{description:"Validation exception"}},security:[{petstore_auth:["write:pets","read:pets"]}],"x-code-samples":[{lang:"PHP",source:`$form = new &#x5C;PetStore&#x5C;Entities&#x5C;Pet();
$form-&gt;setPetId(1);
$form-&gt;setPetType(&quot;Dog&quot;);
$form-&gt;setName(&quot;Rex&quot;);
// set other fields
try {
    $pet = $client-&gt;pets()-&gt;update($form);
} catch (UnprocessableEntityException $e) {
    var_dump($e-&gt;getErrors());
}
`}],requestBody:{$ref:"#/components/requestBodies/Pet"},path:"/pet"}},pet__petId_:{get:{tags:["pet"],summary:"Find pet by ID",description:"Returns a single pet",operationId:"getPetById",parameters:[{name:"petId",in:"path",description:"ID of pet to return",required:!0,deprecated:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{$ref:"#/components/schemas/Pet"}},"application/xml":{schema:{$ref:"#/components/schemas/Pet"}}}},400:{description:"Invalid ID supplied"},404:{description:"Pet not found"}},security:[{api_key:[]}],path:"/pet/{petId}"},post:{tags:["pet"],summary:"Updates a pet in the store with form data",description:"",operationId:"updatePetWithForm",parameters:[{name:"petId",in:"path",description:"ID of pet that needs to be updated",required:!0,schema:{type:"integer",format:"int64"}}],responses:{405:{description:"Invalid input"}},security:[{petstore_auth:["write:pets","read:pets"]}],requestBody:{content:{"application/x-www-form-urlencoded":{schema:{type:"object",properties:{name:{description:"Updated name of the pet",type:"string"},status:{description:"Updated status of the pet",type:"string"}}}}}},path:"/pet/{petId}"},delete:{tags:["pet"],summary:"Deletes a pet",description:"",operationId:"deletePet",parameters:[{name:"api_key",in:"header",required:!1,schema:{type:"string"},example:"Bearer &lt;TOKEN&gt;"},{name:"petId",in:"path",description:"Pet id to delete",required:!0,schema:{type:"integer",format:"int64"}}],responses:{400:{description:"Invalid pet value"}},security:[{petstore_auth:["write:pets","read:pets"]}],path:"/pet/{petId}"}},pet__petId__uploadImage:{post:{tags:["pet"],summary:"uploads an image",description:"",operationId:"uploadFile",parameters:[{name:"petId",in:"path",description:"ID of pet to update",required:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{$ref:"#/components/schemas/ApiResponse"}}}}},security:[{petstore_auth:["write:pets","read:pets"]}],requestBody:{content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},path:"/pet/{petId}/uploadImage"}},pet_findByStatus:{get:{tags:["pet"],summary:"Finds Pets by status",description:"Multiple status values can be provided with comma seperated strings",operationId:"findPetsByStatus",parameters:[{name:"status",in:"query",description:"Status values that need to be considered for filter",required:!0,style:"form",schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["available","pending","sold"],default:"available"}}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/Pet"}}},"application/xml":{schema:{type:"array",items:{$ref:"#/components/schemas/Pet"}}}}},400:{description:"Invalid status value"}},security:[{petstore_auth:["write:pets","read:pets"]}],path:"/pet/findByStatus"}},pet_findByTags:{get:{tags:["pet"],summary:"Finds Pets by tags",description:"Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.",operationId:"findPetsByTags",deprecated:!0,parameters:[{name:"tags",in:"query",description:"Tags to filter by",required:!0,style:"form",schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/Pet"}}},"application/xml":{schema:{type:"array",items:{$ref:"#/components/schemas/Pet"}}}}},400:{description:"Invalid tag value"}},security:[{petstore_auth:["write:pets","read:pets"]}],path:"/pet/findByTags"}},store_inventory:{get:{tags:["store"],summary:"Returns pet inventories by status",description:"Returns a map of status codes to quantities",operationId:"getInventory",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",additionalProperties:{type:"integer",format:"int32"}}}}}},security:[{api_key:[]}],path:"/store/inventory"}},store_order:{post:{tags:["store"],summary:"Place an order for a pet",description:"",operationId:"placeOrder",responses:{200:{description:"successful operation",content:{"application/json":{schema:{$ref:"#/components/schemas/Order"}},"application/xml":{schema:{$ref:"#/components/schemas/Order"}}}},400:{description:"Invalid Order",content:{"application/json":{example:{status:400,message:"Invalid Order"}}}}},requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/Order"}}},description:"order placed for purchasing the pet",required:!0},path:"/store/order"}},store_order__orderId_:{get:{tags:["store"],summary:"Find purchase order by ID",description:"For valid response try integer IDs with value &lt;= 5 or &gt; 10. Other values will generated exceptions",operationId:"getOrderById",parameters:[{name:"orderId",in:"path",description:"ID of pet that needs to be fetched",required:!0,schema:{type:"integer",format:"int64",minimum:1,maximum:5}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{$ref:"#/components/schemas/Order"}},"application/xml":{schema:{$ref:"#/components/schemas/Order"}}}},400:{description:"Invalid ID supplied"},404:{description:"Order not found"}},path:"/store/order/{orderId}"},delete:{tags:["store"],summary:"Delete purchase order by ID",description:"For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors",operationId:"deleteOrder",parameters:[{name:"orderId",in:"path",description:"ID of the order that needs to be deleted",required:!0,schema:{type:"string",minimum:1}}],responses:{400:{description:"Invalid ID supplied"},404:{description:"Order not found"}},path:"/store/order/{orderId}"}},user:{post:{tags:["user"],summary:"Create user",description:"This can only be done by the logged in user.",operationId:"createUser",responses:{default:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/User"}}},description:"Created user object",required:!0},path:"/user"}},user__username_:{get:{tags:["user"],summary:"Get user by user name",description:"",operationId:"getUserByName",parameters:[{name:"username",in:"path",description:"The name that needs to be fetched. Use user1 for testing. ",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{$ref:"#/components/schemas/User"}},"application/xml":{schema:{$ref:"#/components/schemas/User"}}}},400:{description:"Invalid username supplied"},404:{description:"User not found"}},path:"/user/{username}"},put:{tags:["user"],summary:"Updated user",description:"This can only be done by the logged in user.",operationId:"updateUser",parameters:[{name:"username",in:"path",description:"name that need to be deleted",required:!0,schema:{type:"string"}}],responses:{400:{description:"Invalid user supplied"},404:{description:"User not found"}},requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/User"}}},description:"Updated user object",required:!0},path:"/user/{username}"},delete:{tags:["user"],summary:"Delete user",description:"This can only be done by the logged in user.",operationId:"deleteUser",parameters:[{name:"username",in:"path",description:"The name that needs to be deleted",required:!0,schema:{type:"string"}}],responses:{400:{description:"Invalid username supplied"},404:{description:"User not found"}},path:"/user/{username}"}},user_createWithArray:{post:{tags:["user"],summary:"Creates list of users with given input array",description:"",operationId:"createUsersWithArrayInput",responses:{default:{description:"successful operation"}},requestBody:{$ref:"#/components/requestBodies/UserArray"},path:"/user/createWithArray"}},user_createWithList:{post:{tags:["user"],summary:"Creates list of users with given input array",description:"",operationId:"createUsersWithListInput",responses:{default:{description:"successful operation"}},requestBody:{$ref:"#/components/requestBodies/UserArray"},path:"/user/createWithList"}},user_login:{get:{tags:["user"],summary:"Logs user into the system",description:"",operationId:"loginUser",parameters:[{name:"username",in:"query",description:"The user name for login",required:!0,schema:{type:"string"}},{name:"password",in:"query",description:"The password for login in clear text",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",headers:{"X-Rate-Limit":{description:`calls per hour allowed by the user. The rate limit is applid to avoid DoS attack or an accdental usage of this
API such as putting it in a loop. \`X-Rate-Limit\` can vary based on time of the day, user, load and many more other factors.
This header will provide information on the rate limit which the user can use to adapt their task
`,schema:{type:"integer",format:"int32"}},"X-Expires-After":{description:`date in UTC when toekn expires. This information can be used to makke request for new tokens if its near expiry and thereby 
extend an existing session. 
`,schema:{type:"string",format:"date-time"}}},content:{"application/json":{schema:{type:"string"},examples:{response:{value:"OK"}}},"application/xml":{schema:{type:"string"},examples:{response:{value:"&lt;Message&gt; OK &lt;/Message&gt;"}}},"text/plain":{examples:{response:{value:"OK"}}}}},400:{description:"Invalid username/password supplied"}},path:"/user/login"}},user_logout:{get:{tags:["user"],summary:"Logs out current logged in user session",description:"",operationId:"logoutUser",responses:{default:{description:"successful operation"}},path:"/user/logout"}}},components:{schemas:{ApiResponse:{type:"object",properties:{code:{type:"integer",format:"int32"},type:{type:"string"},message:{type:"string"}}},Cat:{description:"A representation of a cat",allOf:[{$ref:"#/components/schemas/Pet"},{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},Category:{type:"object",properties:{id:{description:"Category ID",allOf:[{$ref:"#/components/schemas/Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}},Dog:{description:"A representation of a dog",allOf:[{$ref:"#/components/schemas/Pet"},{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},HoneyBee:{description:"A representation of a honey bee",allOf:[{$ref:"#/components/schemas/Pet"},{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14}},required:["honeyPerDay"]}]},Id:{type:"integer",format:"int64",readOnly:!0},Order:{type:"object",properties:{id:{description:"Order ID",allOf:[{$ref:"#/components/schemas/Id"}]},petId:{description:"Pet ID",allOf:[{$ref:"#/components/schemas/Id"}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},rqeuestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}},Pet:{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:"#/components/schemas/Cat",dog:"#/components/schemas/Dog",bee:"#/components/schemas/HoneyBee"}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{$ref:"#/components/schemas/Id"}]},category:{description:"Categories this pet belongs to",allOf:[{$ref:"#/components/schemas/Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:[{$ref:"#/components/schemas/Pet"}]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{$ref:"#/components/schemas/Tag"}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string"}},xml:{name:"Pet"}},Tag:{type:"object",properties:{id:{description:"Tag ID",allOf:[{$ref:"#/components/schemas/Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}},User:{type:"object",properties:{id:{$ref:"#/components/schemas/Id"},pet:{oneOf:[{$ref:"#/components/schemas/Pet"},{$ref:"#/components/schemas/Tag"}]},username:{description:"User supplied username",type:"string",minLength:4,example:"John78"},firstName:{description:"User first name",type:"string",minLength:1,example:"John"},lastName:{description:"User last name",type:"string",minLength:1,example:"Smith"},email:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},password:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},phone:{description:"User phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0},userStatus:{description:"User status",type:"integer",format:"int32"}},xml:{name:"User"}}},requestBodies:{Pet:{content:{"application/json":{schema:{allOf:[{description:"My Pet",title:"Pettie"},{$ref:"#/components/schemas/Pet"}]}},"application/xml":{schema:{type:"object",properties:{name:{type:"string",description:"hooray"}}}}},description:"Pet object that needs to be added to the store",required:!0},UserArray:{content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/User"}}}},description:"List of user object",required:!0}},securitySchemes:{basic:{type:"http",scheme:"basic"},petstore_auth:{description:`Get access to data while protecting your account credentials.
OAuth2 is also a safer and more secure way to give you access.
`,type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},examples:{Order:{value:{quantity:"1,",shipDate:"2018-10-19T16:46:45Z,",status:"placed,",complete:!1}}}}}},T=lh(),k=T.params.file??T.meta.file,x=T.params.locale??T.meta.locale,A=T.params.type??T.meta.type,U=T.params.path??T.meta.path;let P=!0,G=!1,J=!0;const W=be(()=>q.doc),Ue=be(()=>q.locales),vt=be(()=>q.name),nn=be(()=>window.innerWidth>=768),Se=be(()=>U==="info"),Ze=be(()=>y(no())),at=be(()=>v(no())),Et=be(()=>U==="components"),ot=be(()=>!W.value.paths||!W.value.paths[U]?null:W.value.paths[U][A]??null),it=be(()=>!W.value.servers||!W.value.servers[0]?null:W.value.servers[0].url??null);G=localStorage.getItem("isDarkMode")==="true",G&&document.querySelector("html").classList.add("dark");function rn(){P=!P}function oe(){G=!G,G?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")}function St(){J=window.innerWidth>=768,J||(P=!1)}return P=window.innerWidth>640,window.addEventListener("resize",St),G&&document.querySelector("html").classList.add("dark"),(wt,Ar)=>(S(),w("div",Cb,[z(bh,{isMenuOpen:O(P),onToggleMenu:rn,class:"dark:bg-black dark:text-gray-300/75"},{logo:ve(()=>[(S(),w("svg",qb,[Nb,_("text",{x:"50%",y:"50%","dominant-baseline":"middle","text-anchor":"middle",fill:"#FFFFFF","font-size":"16",textContent:N(O(vt))},null,8,Ob)]))]),button:ve(()=>[z(Ih,{"current-locale":O(x),files:O(Ze),doc:O(W),file:O(k),locales:O(Ue),path:q.path,"is-dark-mode":O(G),onToggleDarkMode:oe},null,8,["current-locale","files","doc","file","locales","path","is-dark-mode"])]),_:1},8,["isMenuOpen"]),_("div",Rb,[z(yh,{isMenuOpen:O(P),isMobile:O(nn)},{default:ve(()=>[O(W).paths?(S(),ye(Qh,{key:0,routes:O(W).paths,"current-locale":O(x),file:O(k),path:q.path},null,8,["routes","current-locale","file","path"])):I("",!0)]),_:1},8,["isMenuOpen","isMobile"]),z(wh,null,{default:ve(()=>[O(Se)?(S(),ye(lm,{key:0,info:O(W).info,servers:O(W).servers,"current-locale":O(x)},null,8,["info","servers","current-locale"])):O(Et)?(S(),ye(kg,{key:1,components:O(W).components,"current-locale":O(x)},null,8,["components","current-locale"])):O(ot)?(S(),ye(yb,{key:2,route:O(ot),"current-locale":O(x),method:O(A),components:O(W).components,url:O(U),simples:O(at),server:O(it)},null,8,["route","current-locale","method","components","url","simples","server"])):(S(),ye(Tb,{key:3}))]),_:1})])]))}};export{Mb as default};
