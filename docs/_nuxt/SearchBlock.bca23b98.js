import{t as _e,g as Oh,c as Ch}from"./helpers.75b0c43c.js";import{a as ae,o as v,b as E,e as y,t as k,F as z,i as G,j as R,k as ie,h as Y,c as be,l as kr,w as Jn,T as Ah,p as qh,m as Rh,q as Lh,s as Dh,r as Mh,v as $h,x as jh,y as Uh}from"./entry.a7680423.js";import{_ as po}from"./nuxt-link.859f6161.js";const Ih={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:_e,getUrl(S){let D=S.url;const i=S.variables;for(const m in i){const C=i[m].default;if(C){const x=`{${m}}`;D=D.replace(x,C)}}return D}}},Bh={class:"text-2xl font-bold"},Ph=["innerHTML"],Hh={key:0},Fh=y("h3",{class:"text-lg font-bold"},"Servers",-1),zh={class:"list-disc list-inside"},Kh=["href"],Gh={key:0},Jh={key:1,class:"text-lg font-bold"},Wh={key:2,class:"list-disc list-inside"},Zh=["href"],Vh={key:3},Qh={class:"text-lg font-bold"};function Xh(S,D,i,m,M,C){return v(),E("div",null,[y("h2",Bh,k(C.tr(i.info,"title",i.currentLocale)),1),y("div",{class:"my-4 description doc-info",innerHTML:C.tr(i.info,"description",i.currentLocale)},null,8,Ph),i.servers?(v(),E("div",Hh,[Fh,y("ul",zh,[(v(!0),E(z,null,G(i.servers,x=>(v(),E("li",{key:x.url},[y("a",{class:"text-blue-500 hover:underline",href:C.getUrl(x)},k(C.getUrl(x)),9,Kh),ie(" - "),x.description?(v(),E("span",Gh,k(x.description),1)):R("",!0)]))),128))])])):R("",!0),i.info.externalDocs?(v(),E("h3",Jh,"External documentation")):R("",!0),i.info.externalDocs?(v(),E("ul",Wh,[y("li",null,[y("a",{class:"text-blue-500 hover:underline",href:i.info.externalDocs.url},k(C.tr(i.info.externalDocs,"description",i.currentLocale)),9,Zh)])])):R("",!0),i.info.version?(v(),E("div",Vh,[y("h3",Qh,"version: "+k(i.info.version),1)])):R("",!0)])}const I_=ae(Ih,[["render",Xh]]),Yh={name:"OpenApiSchema",props:{schema:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},computed:{},methods:{tr:_e}},em={key:0,class:"schema border border-gray-300 rounded p-2"},nm={key:0,class:"schema-row items-center"},tm={class:"schema-row-label font-bold mr-2"},rm=["innerHTML"],am={key:1,class:"schema-row items-center"},sm={class:"schema-row-label font-bold mr-2"},om=["innerHTML"],im={key:2,class:"schema-row items-center"},cm={class:"schema-row-label font-bold mr-2"},lm={class:"schema-row-value"},um={key:3,class:"schema-row items-center"},dm={class:"schema-row-label font-bold mr-2"},pm={class:"schema-row-value"},hm={key:4,class:"schema-row items-center"},mm={class:"schema-row-label font-bold mr-2"},fm={class:"schema-row-value p-2"},gm={class:"list-disc"},bm={key:5,class:"schema-row items-center"},_m={class:"schema-row-label font-bold mr-2"},ym={class:"schema-row-value"},vm={key:6,class:"schema-row items-center"},Em={class:"schema-row-label font-bold mr-2"},Sm={class:"schema-row-value"},wm={key:7,class:"schema-row items-center"},km={class:"schema-row-label font-bold mr-2"},Tm={class:"schema-row-value"},Nm={key:8,class:"schema-row items-center"},xm={class:"schema-row-label font-bold mr-2"},Om={class:"schema-row-value"},Cm={class:"table-auto"},Am={class:"px-4 py-2"},qm={class:"px-4 py-2"},Rm={class:"px-4 py-2"},Lm={class:"border px-4 py-2"},Dm={class:"border px-4 py-2"},Mm={class:"border px-4 py-2"},$m={key:0,class:"schema-row items-center"},jm=y("span",{class:"schema-row-label font-bold mr-2"},"Title:",-1),Um=["innerHTML"],Im={key:1,class:"schema-row items-center"},Bm=y("span",{class:"schema-row-label font-bold mr-2"},"Type:",-1),Pm=["textContent"],Hm={key:2,class:"schema-row items-center"},Fm=y("span",{class:"schema-row-label font-bold mr-2"},"Description:",-1),zm=["innerHTML"],Km={key:3},Gm={key:4,class:"border px-4 py-2"},Jm={key:5,class:"border px-4 py-2"},Wm={key:6,class:"schema-row items-center"},Zm={class:"schema-row-label font-bold mr-2"},Vm={class:"schema-row-value"},Qm={key:9,class:"schema-row items-center"},Xm={class:"schema-row-label font-bold mr-2"},Ym={class:"schema-row-value"},ef={key:10,class:"schema-row items-center"},nf={class:"schema-row-label font-bold mr-2"},tf={class:"schema-row-value"},rf={key:11,class:"schema-row items-center"},af={class:"schema-row-label font-bold mr-2"},sf={class:"schema-row-value"};function of(S,D,i,m,M,C){const x=dn;return i.schema?(v(),E("div",em,[i.schema.title?(v(),E("div",nm,[y("span",tm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Title"))+":",1),y("span",{class:"schema-row-value",innerHTML:C.tr(i.schema,"title",i.currentLocale)},null,8,rm)])):R("",!0),i.schema.description?(v(),E("div",am,[y("span",sm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Description"))+":",1),y("span",{class:"schema-row-value",innerHTML:C.tr(i.schema,"description",i.currentLocale)},null,8,om)])):R("",!0),i.schema.type?(v(),E("div",im,[y("span",cm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Type"))+":",1),y("span",lm,k(i.schema.type),1)])):R("",!0),i.schema.format?(v(),E("div",um,[y("span",dm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Format"))+":",1),y("span",pm,k(i.schema.format),1)])):R("",!0),i.schema.enum?(v(),E("div",hm,[y("div",mm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Enum"))+":",1),y("div",fm,[y("ul",gm,[(v(!0),E(z,null,G(i.schema.enum,(N,q)=>(v(),E("li",{key:q},k(N),1))),128))])])])):R("",!0),i.schema.default?(v(),E("div",bm,[y("span",_m,k(S.$openapidoc.getLocaleText(i.currentLocale,"Default"))+":",1),y("span",ym,k(i.schema.default),1)])):R("",!0),i.schema.pattern?(v(),E("div",vm,[y("span",Em,k(S.$openapidoc.getLocaleText(i.currentLocale,"Pattern"))+":",1),y("span",Sm,k(i.schema.pattern),1)])):R("",!0),i.schema.items?(v(),E("div",wm,[y("div",km,k(S.$openapidoc.getLocaleText(i.currentLocale,"Items"))+":",1),y("div",Tm,[Y(x,{components:i.components,"current-locale":i.currentLocale,schema:i.schema.items},null,8,["components","current-locale","schema"])])])):R("",!0),i.schema.properties?(v(),E("div",Nm,[y("div",xm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Properties"))+":",1),y("div",Om,[y("table",Cm,[y("thead",null,[y("tr",null,[y("th",Am,k(S.$openapidoc.getLocaleText(i.currentLocale,"Name")),1),y("th",qm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Type")),1),y("th",Rm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Description")),1)])]),y("tbody",null,[(v(!0),E(z,null,G(i.schema.properties,(N,q)=>(v(),E("tr",{key:q},[y("td",Lm,k(q),1),y("td",Dm,k(N.type),1),y("td",Mm,[N.title?(v(),E("div",$m,[jm,y("span",{class:"schema-row-value",innerHTML:C.tr(N,"title",i.currentLocale)},null,8,Um)])):R("",!0),N.type?(v(),E("div",Im,[Bm,y("span",{class:"schema-row-value",textContent:k(N.type)},null,8,Pm)])):R("",!0),N.description?(v(),E("div",Hm,[Fm,y("span",{class:"schema-row-value",innerHTML:C.tr(N,"description",i.currentLocale)},null,8,zm)])):R("",!0),q==="reference"?(v(),E("div",Km,[Y(x,{components:i.components,"current-locale":i.currentLocale,schema:N},null,8,["components","current-locale","schema"])])):R("",!0),N.items?(v(),E("div",Gm,[Y(x,{components:i.components,"current-locale":i.currentLocale,schema:N.items},null,8,["components","current-locale","schema"])])):R("",!0),N.properties?(v(),E("div",Jm,[(v(!0),E(z,null,G(N.properties,(B,I)=>(v(),be(x,{key:I,components:i.components,"current-locale":i.currentLocale,schema:B},null,8,["components","current-locale","schema"]))),128))])):R("",!0),N.oneOf?(v(),E("div",Wm,[y("div",Zm,k(S.$openapidoc.getLocaleText(i.currentLocale,"One Of"))+":",1),y("div",Vm,[(v(!0),E(z,null,G(N.oneOf,(B,I)=>(v(),E("div",{key:I},[Y(x,{components:i.components,schema:B,"current-locale":i.currentLocale},null,8,["components","schema","current-locale"])]))),128))])])):R("",!0)])]))),128))])])])])):R("",!0),i.schema.additionalProperties?(v(),E("div",Qm,[y("div",Xm,k(S.$openapidoc.getLocaleText(i.currentLocale,"Additional Properties"))+":",1),y("div",Ym,[Y(x,{components:i.components,"current-locale":i.currentLocale,schema:i.schema.additionalProperties},null,8,["components","current-locale","schema"])])])):R("",!0),i.schema.allOf?(v(),E("div",ef,[y("div",nf,k(S.$openapidoc.getLocaleText(i.currentLocale,"All Of"))+":",1),y("div",tf,[(v(!0),E(z,null,G(i.schema.allOf,(N,q)=>(v(),E("div",{key:q},[Y(x,{components:i.components,schema:N,"current-locale":i.currentLocale},null,8,["components","schema","current-locale"])]))),128))])])):R("",!0),i.schema.oneOf?(v(),E("div",rf,[y("div",af,k(S.$openapidoc.getLocaleText(i.currentLocale,"One Of"))+":",1),y("div",sf,[(v(!0),E(z,null,G(i.schema.oneOf,(N,q)=>(v(),E("div",{key:q},[Y(x,{components:i.components,schema:N,"current-locale":i.currentLocale},null,8,["components","schema","current-locale"])]))),128))])])):R("",!0)])):R("",!0)}const dn=ae(Yh,[["render",of]]);const cf={props:{examples:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:_e}},lf={class:"openapi-examples"},uf={class:"text-lg font-bold mb-2"},df={class:"text-lg font-medium"},pf={class:"w-full mt-2"},hf={class:"px-4 py-2 border-b border-gray-300"},mf={class:"px-4 py-2 border-b border-gray-300"},ff={class:"px-4 py-2 border-b border-gray-300"},gf={class:"px-4 py-2 border-b border-gray-300"},bf={class:"px-4 py-2 border-b border-gray-300"},_f={class:"px-4 py-2 border-b border-gray-300"},yf={class:"m-0 whitespace-pre-wrap"};function vf(S,D,i,m,M,C){return v(),E("div",lf,[y("h3",uf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Examples"))+": ",1),(v(!0),E(z,null,G(i.examples,(x,N)=>(v(),E("div",{key:N},[y("h4",df,k(N),1),y("table",pf,[y("thead",null,[y("tr",null,[y("th",hf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Media Type")),1),y("th",mf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Summary")),1),y("th",ff,k(S.$openapidoc.getLocaleText(i.currentLocale,"Value")),1)])]),y("tbody",null,[(v(!0),E(z,null,G(x,(q,B)=>(v(),E("tr",{key:B},[y("td",gf,k(B),1),y("td",bf,k(C.tr(q,"summary",i.currentLocale)),1),y("td",_f,[y("pre",yf,k(q.value),1)])]))),128))])])]))),128))])}const Tr=ae(cf,[["render",vf],["__scopeId","data-v-9885cddf"]]);const Ef={name:"OpenApiRequestBody",props:{requestBody:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},methods:{tr:_e},computed:{}},Sf={class:"text-lg font-medium"},wf=["innerHTML"],kf=["textContent"];function Tf(S,D,i,m,M,C){const x=dn;return v(),E("div",null,[y("h3",Sf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Request Body"))+":",1),i.requestBody.description?(v(),E("pre",{key:0,class:"mt-2 p-2 rounded-md",innerHTML:C.tr(i.requestBody,"description",i.currentLocale)},null,8,wf)):R("",!0),(v(!0),E(z,null,G(i.requestBody.content,(N,q)=>(v(),E("div",null,[y("pre",{class:"mt-2 p-2 rounded-md",textContent:k(q)},null,8,kf),Y(x,{schema:N.schema,"current-locale":i.currentLocale,components:i.components,class:"mt-4"},null,8,["schema","current-locale","components"])]))),256))])}const Nr=ae(Ef,[["render",Tf]]);const Nf={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:_e}},xf={class:"text-lg font-bold mb-2"},Of={class:"text-lg font-medium"};function Cf(S,D,i,m,M,C){const x=Nr;return v(),E("div",null,[y("h3",xf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Request Bodies"))+": ",1),(v(!0),E(z,null,G(i.requestBodies,(N,q)=>(v(),E("div",{key:q,class:"mt-4"},[y("h3",Of,k(q),1),Y(x,{requestBody:N,"current-locale":i.currentLocale},null,8,["requestBody","current-locale"])]))),128))])}const Af=ae(Nf,[["render",Cf]]),qf={name:"OpenApiResponses",props:{responses:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},methods:{tr:_e}},Rf={class:"text-lg font-bold mb-2"},Lf={class:"w-full border-collapse"},Df={class:"border border-b border-gray-300"},Mf={class:"border p-3 font-semibold text-left"},$f={class:"border p-3 font-semibold text-left",style:{width:"25%"}},jf={class:"border p-3 font-semibold text-left"},Uf={class:"border p-3"},If={class:"border p-3"},Bf=["innerHTML"],Pf={class:"border p-3"},Hf=["textContent"];function Ff(S,D,i,m,M,C){const x=Tr,N=dn;return v(),E("div",null,[y("h2",Rf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Responses"))+":",1),y("table",Lf,[y("thead",null,[y("tr",Df,[y("th",Mf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Status")),1),y("th",$f,k(S.$openapidoc.getLocaleText(i.currentLocale,"Description")),1),y("th",jf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Content")),1)])]),y("tbody",null,[(v(!0),E(z,null,G(i.responses,(q,B)=>(v(),E("tr",{key:B,class:"border-b border-gray-300"},[y("td",Uf,k(B),1),y("td",If,[y("p",{class:"mb-2",innerHTML:C.tr(q,"description",i.currentLocale)},null,8,Bf),q.examples?(v(),be(x,{key:0,examples:q.examples,"current-locale":i.currentLocale,components:i.components},null,8,["examples","current-locale","components"])):R("",!0)]),y("td",Pf,[(v(!0),E(z,null,G(q.content,(I,ee)=>(v(),E("div",null,[y("pre",{class:"mt-2 p-2 rounded-md",textContent:k(ee)},null,8,Hf),Y(N,{schema:I.schema,"current-locale":i.currentLocale,components:i.components,class:"mt-4"},null,8,["schema","current-locale","components"])]))),256)),q.schema?(v(),be(N,{key:0,schema:q.schema,"current-locale":i.currentLocale,components:i.components,class:"mt-4"},null,8,["schema","current-locale","components"])):R("",!0)])]))),128))])])])}const xr=ae(qf,[["render",Ff]]);const zf={props:{title:{type:String,required:!1,default:"Parameters"},parameters:[Object,Array],currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}},computed:{},methods:{tr:_e}},Kf={key:0,class:"text-lg font-bold mb-2"},Gf=["textContent"],Jf={key:1,class:"table-auto w-full"},Wf={class:"border px-4 py-2"},Zf={class:"border px-4 py-2",style:{width:"25%"}},Vf={class:"border px-4 py-2"},Qf={class:"border px-4 py-2"},Xf={class:"border px-4 py-2"},Yf={class:"border px-4 py-2"},eg={class:"border px-4 py-2 font-semibold"},ng=["innerHTML"],tg={class:"border px-4 py-2"},rg={class:"border px-4 py-2"},ag={class:"border px-4 py-2"},sg={class:"border px-4 py-2"};function og(S,D,i,m,M,C){const x=dn;return v(),E("div",null,[i.parameters.length?(v(),E("h2",Kf,[y("span",{textContent:k(i.title)},null,8,Gf),ie(":")])):R("",!0),i.parameters.length?(v(),E("table",Jf,[y("thead",null,[y("tr",null,[y("th",Wf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Parameter Name")),1),y("th",Zf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Description")),1),y("th",Vf,k(S.$openapidoc.getLocaleText(i.currentLocale,"In")),1),y("th",Qf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Required")),1),y("th",Xf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Schema")),1),y("th",Yf,k(S.$openapidoc.getLocaleText(i.currentLocale,"Example")),1)])]),y("tbody",null,[(v(!0),E(z,null,G(i.parameters,(N,q)=>(v(),E("tr",{key:q,class:"open-api-param"},[y("td",eg,k(C.tr(N,"name",i.currentLocale)),1),y("td",{class:"border px-4 py-2",innerHTML:C.tr(N,"description",i.currentLocale)},null,8,ng),y("td",tg,k(N.in?N.in:"-"),1),y("td",rg,k(N.required?"Yes":"No"),1),y("td",ag,[Y(x,{schema:N.schema,"current-locale":i.currentLocale,components:i.components,class:"p-0"},null,8,["schema","current-locale","components"])]),y("td",sg,k(N.example?N.example:"-"),1)]))),128))])])):R("",!0)])}const Or=ae(zf,[["render",og],["__scopeId","data-v-f076142d"]]);const ig={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:_e}},cg={class:"security-scheme border border-gray-300 p-4 mb-8"},lg={class:"security-scheme__name text-xl font-bold mb-4",style:{"margin-top":"0"}},ug={key:0,class:"security-scheme__details"},dg=y("strong",null,"Type:",-1),pg=y("strong",null,"Scheme:",-1),hg={key:0},mg=y("strong",null,"Bearer format:",-1),fg={key:1},gg=y("strong",null,"Description:",-1),bg={key:1,class:"security-scheme__details"},_g=y("strong",null,"Type:",-1),yg=y("strong",null,"Name:",-1),vg=y("strong",null,"In:",-1),Eg={key:0},Sg=y("strong",null,"Description:",-1),wg={key:2,class:"security-scheme__details"},kg=y("strong",null,"Type:",-1),Tg={key:0},Ng=y("strong",null,"Flows:",-1),xg=[Ng],Og={key:0},Cg={key:1},Ag={key:2},qg={key:3},Rg={key:1},Lg=["innerHTML"];function Dg(S,D,i,m,M,C){return v(),E("div",cg,[y("h4",lg,k(C.tr(i.securityScheme,"name",i.currentLocale)),1),i.securityScheme.type==="http"?(v(),E("div",ug,[y("p",null,[dg,ie(" "+k(i.securityScheme.type),1)]),y("p",null,[pg,ie(" "+k(i.securityScheme.scheme),1)]),i.securityScheme.bearerFormat?(v(),E("p",hg,[mg,ie(" "+k(i.securityScheme.bearerFormat),1)])):R("",!0),i.securityScheme.description?(v(),E("p",fg,[gg,ie(" "+k(C.tr(i.securityScheme,"description",i.currentLocale)),1)])):R("",!0)])):i.securityScheme.type==="apiKey"?(v(),E("div",bg,[y("p",null,[_g,ie(" "+k(i.securityScheme.type),1)]),y("p",null,[yg,ie(" "+k(i.securityScheme.name),1)]),y("p",null,[vg,ie(" "+k(i.securityScheme.in),1)]),i.securityScheme.description?(v(),E("p",Eg,[Sg,ie(" "+k(C.tr(i.securityScheme,"description",i.currentLocale)),1)])):R("",!0)])):i.securityScheme.type==="oauth2"?(v(),E("div",wg,[y("p",null,[kg,ie(" "+k(i.securityScheme.type),1)]),i.securityScheme.flows?(v(),E("p",Tg,xg)):R("",!0),y("ul",null,[(v(!0),E(z,null,G(i.securityScheme.flows,(x,N)=>(v(),E("li",{key:N},[y("p",null,[y("strong",null,k(N)+":",1)]),y("ul",null,[x.authorizationUrl?(v(),E("li",Og,[y("strong",null,k(S.$openapidoc.getLocaleText(i.currentLocale,"Authorization URL"))+":",1),ie(" "+k(x.authorizationUrl),1)])):R("",!0),x.tokenUrl?(v(),E("li",Cg,[y("strong",null,k(S.$openapidoc.getLocaleText(i.currentLocale,"Token URL"))+":",1),ie(" "+k(x.tokenUrl),1)])):R("",!0),x.refreshUrl?(v(),E("li",Ag,[y("strong",null,k(S.$openapidoc.getLocaleText(i.currentLocale,"Refresh URL"))+":",1),ie(" "+k(x.refreshUrl),1)])):R("",!0),x.scopes?(v(),E("li",qg,[y("strong",null,k(S.$openapidoc.getLocaleText(i.currentLocale,"Scopes"))+":",1),y("ul",null,[(v(!0),E(z,null,G(x.scopes,(q,B)=>(v(),E("li",{key:B},[y("strong",null,k(B)+":",1),ie(" "+k(q),1)]))),128))])])):R("",!0)])]))),128))]),i.securityScheme.description?(v(),E("div",Rg,[y("strong",null,k(S.$openapidoc.getLocaleText(i.currentLocale,"Description"))+":",1),y("div",{innerHTML:C.tr(i.securityScheme,"description",i.currentLocale)},null,8,Lg)])):R("",!0)])):R("",!0)])}const Mg=ae(ig,[["render",Dg]]),$g={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:_e}},jg={class:"text-lg font-bold mb-2"},Ug=["id"];function Ig(S,D,i,m,M,C){const x=Mg;return v(),E("div",null,[y("h3",jg,k(S.$openapidoc.getLocaleText(i.currentLocale,"Security Schemes"))+": ",1),(v(!0),E(z,null,G(i.securitySchemes,(N,q)=>(v(),E("div",{key:q},[y("h3",{class:"text-base font-bold mb-2",id:q}," - "+k(q),9,Ug),Y(x,{securityScheme:N,"current-locale":i.currentLocale},null,8,["securityScheme","current-locale"])]))),128))])}const Bg=ae($g,[["render",Ig]]),Pg={props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},Hg={key:0},Fg=y("h3",{class:"text-lg font-bold"},"Schemas",-1),zg=["textContent"],Kg={key:1},Gg={key:2},Jg={key:3},Wg={key:4},Zg={key:5},Vg={key:6};function Qg(S,D,i,m,M,C){const x=dn,N=Tr,q=Af,B=xr,I=Or,ee=Bg;return v(),E("div",null,[i.components.schemas?(v(),E("div",Hg,[Fg,(v(!0),E(z,null,G(i.components.schemas,(ue,de)=>(v(),E("div",null,[y("h4",{class:"text-base font-bold",textContent:k(de)},null,8,zg),Y(x,{components:i.components,schema:ue,"current-locale":i.currentLocale},null,8,["components","schema","current-locale"])]))),256))])):R("",!0),i.components.schema?(v(),E("div",Kg,[Y(x,{components:i.components,schema:i.components.schema,"current-locale":i.currentLocale},null,8,["components","schema","current-locale"])])):R("",!0),i.components.examples?(v(),E("div",Gg,[Y(N,{examples:i.components.examples,"current-locale":i.currentLocale},null,8,["examples","current-locale"])])):R("",!0),i.components.requestBodies?(v(),E("div",Jg,[Y(q,{requestBodies:i.components.requestBodies,"current-locale":i.currentLocale},null,8,["requestBodies","current-locale"])])):R("",!0),i.components.responses?(v(),E("div",Wg,[Y(B,{responses:i.components.responses,"current-locale":i.currentLocale},null,8,["responses","current-locale"])])):R("",!0),i.components.parameters?(v(),E("div",Zg,[Y(I,{parameters:i.components.parameters,"current-locale":i.currentLocale},null,8,["parameters","current-locale"])])):R("",!0),i.components.securitySchemes?(v(),E("div",Vg,[Y(ee,{securitySchemes:i.components.securitySchemes,"current-locale":i.currentLocale},null,8,["securitySchemes","current-locale"])])):R("",!0)])}const B_=ae(Pg,[["render",Qg]]),Xg={props:{path:String,method:String,tags:Array,summary:String,description:String,deprecated:Boolean,currentLocale:{type:String,required:!0}},methods:{tr:_e,getTagColor:Oh}},Yg={class:"border border-gray-300 p-4 mb-8 doc-info"},eb={class:"text-2xl font-bold mb-2"},nb={key:0,class:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert"},tb={class:"font-medium"},rb={class:"text-lg font-bold mb-2"},ab={class:"mb-2"},sb=["innerHTML"];function ob(S,D,i,m,M,C){return v(),E("div",Yg,[y("h1",eb,[y("span",{class:kr(["text-xl font-medium mr-2 px-2.5 py-0.5 rounded",C.getTagColor(i.method)])},k(i.method),3),ie(" "+k(i.path),1)]),i.deprecated?(v(),E("div",nb,[y("div",null,[y("span",tb,k(S.$openapidoc.getLocaleText(i.currentLocale,"Deprecated!")),1)])])):R("",!0),y("h2",rb,k(i.summary),1),y("p",ab,[(v(!0),E(z,null,G(i.tags,(x,N)=>(v(),E("span",{key:N,class:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"},k(x),1))),128))]),y("p",{class:"mb-2",innerHTML:i.description},null,8,sb)])}const ib=ae(Xg,[["render",ob]]);const cb={name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{tr:_e,getRoute(S){return{name:`openapi-${this.path_doc}/${this.file}/${this.currentLocale}-components`,hash:"#"+S,meta:{locale:"en",path:"components",file:this.file,type:"get"}}}}},lb={class:"openapi-security-requirement"},ub={class:"font-bold mr-2"},db={class:"list-disc ml-8"},pb={class:"bg-green-50/50 text-black font-medium mr-2 px-2.5 py-0.5 rounded"};function hb(S,D,i,m,M,C){const x=po;return v(),E("div",lb,[y("ul",null,[(v(!0),E(z,null,G(i.securityRequirement,(N,q)=>(v(),E("li",{key:q},[Y(x,{to:C.getRoute(q),class:"openapi-security-requirement__item bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",style:{display:"block"}},{default:Jn(()=>[y("span",ub,k(q),1),y("ul",db,[(v(!0),E(z,null,G(N,B=>(v(),E("li",{key:B},[y("span",pb,k(B),1)]))),128))])]),_:2},1032,["to"])]))),128))])])}const mb=ae(cb,[["render",hb],["__scopeId","data-v-45ccd488"]]);const fb={name:"OpenApiSecurity",props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{tr:_e}},gb={class:"py-4"},bb={class:"text-xl font-semibold"},_b={class:"list-disc ml-6"};function yb(S,D,i,m,M,C){const x=mb;return v(),E("div",gb,[y("h3",bb,k(S.$openapidoc.getLocaleText(i.currentLocale,"Security"))+":",1),y("ul",_b,[(v(!0),E(z,null,G(i.security,(N,q)=>(v(),E("li",{key:q,class:"py-2"},[Y(x,{securityRequirement:N,"current-locale":i.currentLocale,path_doc:i.path_doc,file:i.file},null,8,["securityRequirement","current-locale","path_doc","file"])]))),128))])])}const vb=ae(fb,[["render",yb],["__scopeId","data-v-7e5e6053"]]);const Eb={props:{items:{type:Object,required:!0}},data(){return{isOpen:!1,preSelectedSnippet:"javascript",selectedSnippet:"javascript",selectedLibrary:"xmlhttprequest"}},computed:{selectedText(){return this.selectedSnippet+" / "+this.selectedLibrary}},methods:{handleItemClick(S,D=null){D?(this.selectedSnippet=S,this.selectedLibrary=D,this.$emit("select",S,D),this.isOpen=!1):this.preSelectedSnippet=S}}},ho=S=>(qh("data-v-604a7470"),S=S(),Rh(),S),Sb={class:"relative"},wb=["aria-expanded"],kb=ho(()=>y("path",{"fill-rule":"evenodd",d:"M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)),Tb=[kb],Nb={key:0,class:"dropdown-list origin-top-right absolute left-0 mt-2 ml-0 w-56 rounded-md shadow-lg bg-white dark:bg-black dark:text-gray-300/75 ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},xb=["onClick"],Ob={class:"flex justify-between cursor-pointer"},Cb={class:"flex flex-grow"},Ab={class:"flex flex-grow",style:{"justify-content":"end"}},qb={class:"h-4 w-4 ml-2 self-center",style:{display:"initial"},viewBox:"0 0 20 20",fill:"currentColor"},Rb=ho(()=>y("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)),Lb=[Rb],Db={key:0,class:"sub-menu"},Mb=["onClick"];function $b(S,D,i,m,M,C){return v(),E("div",Sb,[y("button",{onClick:D[0]||(D[0]=x=>M.isOpen=!M.isOpen),type:"button",class:"inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-gray-300/75","aria-haspopup":"true","aria-expanded":M.isOpen},[y("b",null,k(C.selectedText?C.selectedText:"Select Library"),1),(v(),E("svg",{class:kr(["-mr-1 ml-2 h-5 w-5",M.isOpen?"-rotate-180":"rotate-0"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Tb,2))],8,wb),Y(Ah,{name:"dropdown"},{default:Jn(()=>[M.isOpen?(v(),E("ul",Nb,[(v(!0),E(z,null,G(i.items,(x,N)=>(v(),E("li",{key:N,onClick:q=>C.handleItemClick(N),role:"menuitem",class:"border block px-4 py-2 m-0 text-sm text-gray-700 hover:bg-white hover:text-gray-800 dark:bg-black dark:hover:bg-gray-800 dark:text-gray-300/75"},[x?(v(),E(z,{key:0},[y("div",Ob,[y("span",Cb,k(N),1),y("span",Ab,[(v(),E("svg",qb,Lb))])]),M.preSelectedSnippet===N?(v(),E("ul",Db,[(v(!0),E(z,null,G(x,q=>(v(),E("li",{key:q,onClick:B=>C.handleItemClick(N,q),class:"bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800 dark:text-gray-300/75 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"},k(q),9,Mb))),128))])):R("",!0)],64)):(v(),E(z,{key:1},[ie(k(x.snippet),1)],64))],8,xb))),128))])):R("",!0)]),_:1})])}const mo=ae(Eb,[["render",$b],["__scopeId","data-v-604a7470"]]);var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wr={},jb={get exports(){return wr},set exports(S){wr=S}};/*!
 * Request Templater v1.1.2
 *
 * Copyright (C) 2012-2023 Pavel Kuz`min (@s00d).
 *
 * Date: Sun, 02 Apr 2023 16:47:59 GMT
 */(function(S,D){(function(i,m){S.exports=m()})(Sr,function(){function i(t){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(t)}function m(t,n){if(t!==n)throw new TypeError("Cannot instantiate an arrow function")}function M(t,n){return function(o){if(Array.isArray(o))return o}(t)||function(o,u){var a=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(a!=null){var c,h,p,l,e=[],f=!0,b=!1;try{if(p=(a=a.call(o)).next,u===0){if(Object(a)!==a)return;f=!1}else for(;!(f=(c=p.call(a)).done)&&(e.push(c.value),e.length!==u);f=!0);}catch(_){b=!0,h=_}finally{try{if(!f&&a.return!=null&&(l=a.return(),Object(l)!==l))return}finally{if(b)throw h}}return e}}(t,n)||function(o,u){if(o){if(typeof o=="string")return C(o,u);var a=Object.prototype.toString.call(o).slice(8,-1);if(a==="Object"&&o.constructor&&(a=o.constructor.name),a==="Map"||a==="Set")return Array.from(o);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(o,u)}}(t,n)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function C(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,u=new Array(n);o<n;o++)u[o]=t[o];return u}var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Sr<"u"?Sr:typeof self<"u"?self:{},N=function(t){return t&&t.Math==Math&&t},q=N(typeof globalThis=="object"&&globalThis)||N(typeof window=="object"&&window)||N(typeof self=="object"&&self)||N(typeof x=="object"&&x)||function(){return this}()||Function("return this")(),B={},I=function(t){try{return!!t()}catch{return!0}},ee=!I(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),ue=!I(function(){var t=function(){}.bind();return typeof t!="function"||t.hasOwnProperty("prototype")}),de=ue,he=Function.prototype.call,ye=de?he.bind(he):function(){return he.apply(he,arguments)},Wn={},Cr={}.propertyIsEnumerable,Ar=Object.getOwnPropertyDescriptor,fo=Ar&&!Cr.call({1:2},1);Wn.f=fo?function(t){var n=Ar(this,t);return!!n&&n.enumerable}:Cr;var qe,pn,Zn=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},qr=ue,Rr=Function.prototype,Vn=Rr.call,go=qr&&Rr.bind.bind(Vn,Vn),re=qr?go:function(t){return function(){return Vn.apply(t,arguments)}},Lr=re,bo=Lr({}.toString),_o=Lr("".slice),Me=function(t){return _o(bo(t),8,-1)},yo=I,vo=Me,Qn=Object,Eo=re("".split),hn=yo(function(){return!Qn("z").propertyIsEnumerable(0)})?function(t){return vo(t)=="String"?Eo(t,""):Qn(t)}:Qn,mn=function(t){return t==null},So=mn,wo=TypeError,$e=function(t){if(So(t))throw wo("Can't call method on "+t);return t},ko=hn,To=$e,Fe=function(t){return ko(To(t))},Xn=typeof document=="object"&&document.all,fn={all:Xn,IS_HTMLDDA:Xn===void 0&&Xn!==void 0},No=fn.all,me=fn.IS_HTMLDDA?function(t){return typeof t=="function"||t===No}:function(t){return typeof t=="function"},Dr=me,xo=fn.all,Te=fn.IS_HTMLDDA?function(t){return typeof t=="object"?t!==null:Dr(t)||t===xo}:function(t){return typeof t=="object"?t!==null:Dr(t)},Yn=q,Oo=me,gn=function(t,n){return arguments.length<2?(o=Yn[t],Oo(o)?o:void 0):Yn[t]&&Yn[t][n];var o},Mr=re({}.isPrototypeOf),$r=q,et=typeof navigator<"u"&&String(navigator.userAgent)||"",jr=$r.process,Ur=$r.Deno,Ir=jr&&jr.versions||Ur&&Ur.version,Br=Ir&&Ir.v8;Br&&(pn=(qe=Br.split("."))[0]>0&&qe[0]<4?1:+(qe[0]+qe[1])),!pn&&et&&(!(qe=et.match(/Edge\/(\d+)/))||qe[1]>=74)&&(qe=et.match(/Chrome\/(\d+)/))&&(pn=+qe[1]);var Ye=pn,Pr=Ye,Co=I,Hr=!!Object.getOwnPropertySymbols&&!Co(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Pr&&Pr<41}),Fr=Hr&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Ao=gn,qo=me,Ro=Mr,Lo=Object,zr=Fr?function(t){return typeof t=="symbol"}:function(t){var n=Ao("Symbol");return qo(n)&&Ro(n.prototype,Lo(t))},Do=String,Mo=me,$o=function(t){try{return Do(t)}catch{return"Object"}},jo=TypeError,bn=function(t){if(Mo(t))return t;throw jo($o(t)+" is not a function")},Uo=bn,Io=mn,nt=function(t,n){var o=t[n];return Io(o)?void 0:Uo(o)},tt=ye,rt=me,at=Te,Bo=TypeError,en={},Po={get exports(){return en},set exports(t){en=t}},Kr=q,Ho=Object.defineProperty,st=function(t,n){try{Ho(Kr,t,{value:n,configurable:!0,writable:!0})}catch{Kr[t]=n}return n},Fo=st,Gr="__core-js_shared__",ot=q[Gr]||Fo(Gr,{}),Jr=ot;(Po.exports=function(t,n){return Jr[t]||(Jr[t]=n!==void 0?n:{})})("versions",[]).push({version:"3.29.1",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"});var zo=$e,Ko=Object,ze=function(t){return Ko(zo(t))},Go=ze,Jo=re({}.hasOwnProperty),Ne=Object.hasOwn||function(t,n){return Jo(Go(t),n)},Wo=re,Zo=0,Vo=Math.random(),Qo=Wo(1 .toString),Wr=function(t){return"Symbol("+(t===void 0?"":t)+")_"+Qo(++Zo+Vo,36)},Xo=en,Zr=Ne,Yo=Wr,ei=Hr,ni=Fr,Ke=q.Symbol,it=Xo("wks"),ti=ni?Ke.for||Ke:Ke&&Ke.withoutSetter||Yo,ve=function(t){return Zr(it,t)||(it[t]=ei&&Zr(Ke,t)?Ke[t]:ti("Symbol."+t)),it[t]},ri=ye,Vr=Te,Qr=zr,ai=nt,si=function(t,n){var o,u;if(n==="string"&&rt(o=t.toString)&&!at(u=tt(o,t))||rt(o=t.valueOf)&&!at(u=tt(o,t))||n!=="string"&&rt(o=t.toString)&&!at(u=tt(o,t)))return u;throw Bo("Can't convert object to primitive value")},oi=TypeError,ii=ve("toPrimitive"),ci=function(t,n){if(!Vr(t)||Qr(t))return t;var o,u=ai(t,ii);if(u){if(n===void 0&&(n="default"),o=ri(u,t,n),!Vr(o)||Qr(o))return o;throw oi("Can't convert object to primitive value")}return n===void 0&&(n="number"),si(t,n)},li=zr,ct=function(t){var n=ci(t,"string");return li(n)?n:n+""},Xr=Te,lt=q.document,ui=Xr(lt)&&Xr(lt.createElement),ut=function(t){return ui?lt.createElement(t):{}},di=ut,Yr=!ee&&!I(function(){return Object.defineProperty(di("div"),"a",{get:function(){return 7}}).a!=7}),pi=ee,hi=ye,mi=Wn,fi=Zn,gi=Fe,bi=ct,_i=Ne,yi=Yr,ea=Object.getOwnPropertyDescriptor;B.f=pi?ea:function(t,n){if(t=gi(t),n=bi(n),yi)try{return ea(t,n)}catch{}if(_i(t,n))return fi(!hi(mi.f,t,n),t[n])};var je={},na=ee&&I(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),vi=Te,Ei=String,Si=TypeError,xe=function(t){if(vi(t))return t;throw Si(Ei(t)+" is not an object")},wi=ee,ki=Yr,Ti=na,_n=xe,ta=ct,Ni=TypeError,dt=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,pt="enumerable",ht="configurable",mt="writable";je.f=wi?Ti?function(t,n,o){if(_n(t),n=ta(n),_n(o),typeof t=="function"&&n==="prototype"&&"value"in o&&mt in o&&!o[mt]){var u=xi(t,n);u&&u[mt]&&(t[n]=o.value,o={configurable:ht in o?o[ht]:u[ht],enumerable:pt in o?o[pt]:u[pt],writable:!1})}return dt(t,n,o)}:dt:function(t,n,o){if(_n(t),n=ta(n),_n(o),ki)try{return dt(t,n,o)}catch{}if("get"in o||"set"in o)throw Ni("Accessors not supported");return"value"in o&&(t[n]=o.value),t};var Oi=je,Ci=Zn,yn=ee?function(t,n,o){return Oi.f(t,n,Ci(1,o))}:function(t,n,o){return t[n]=o,t},vn={},Ai={get exports(){return vn},set exports(t){vn=t}},ft=ee,qi=Ne,ra=Function.prototype,Ri=ft&&Object.getOwnPropertyDescriptor,gt=qi(ra,"name"),bt={EXISTS:gt,PROPER:gt&&function(){}.name==="something",CONFIGURABLE:gt&&(!ft||ft&&Ri(ra,"name").configurable)},Li=me,_t=ot,Di=re(Function.toString);Li(_t.inspectSource)||(_t.inspectSource=function(t){return Di(t)});var En,nn,Sn,aa=_t.inspectSource,Mi=me,sa=q.WeakMap,$i=Mi(sa)&&/native code/.test(String(sa)),ji=Wr,oa=en("keys"),ia=function(t){return oa[t]||(oa[t]=ji(t))},yt={},Ui=$i,ca=q,Ii=Te,Bi=yn,vt=Ne,Et=ot,Pi=ia,Hi=yt,la="Object already initialized",St=ca.TypeError,Fi=ca.WeakMap;if(Ui||Et.state){var Ee=Et.state||(Et.state=new Fi);Ee.get=Ee.get,Ee.has=Ee.has,Ee.set=Ee.set,En=function(t,n){if(Ee.has(t))throw St(la);return n.facade=t,Ee.set(t,n),n},nn=function(t){return Ee.get(t)||{}},Sn=function(t){return Ee.has(t)}}else{var Ge=Pi("state");Hi[Ge]=!0,En=function(t,n){if(vt(t,Ge))throw St(la);return n.facade=t,Bi(t,Ge,n),n},nn=function(t){return vt(t,Ge)?t[Ge]:{}},Sn=function(t){return vt(t,Ge)}}var wt={set:En,get:nn,has:Sn,enforce:function(t){return Sn(t)?nn(t):En(t,{})},getterFor:function(t){return function(n){var o;if(!Ii(n)||(o=nn(n)).type!==t)throw St("Incompatible receiver, "+t+" required");return o}}},kt=re,zi=I,Ki=me,wn=Ne,Tt=ee,Gi=bt.CONFIGURABLE,Ji=aa,Wi=wt.enforce,Zi=wt.get,ua=String,kn=Object.defineProperty,Vi=kt("".slice),Qi=kt("".replace),Xi=kt([].join),Yi=Tt&&!zi(function(){return kn(function(){},"length",{value:8}).length!==8}),ec=String(String).split("String"),nc=Ai.exports=function(t,n,o){Vi(ua(n),0,7)==="Symbol("&&(n="["+Qi(ua(n),/^Symbol\(([^)]*)\)/,"$1")+"]"),o&&o.getter&&(n="get "+n),o&&o.setter&&(n="set "+n),(!wn(t,"name")||Gi&&t.name!==n)&&(Tt?kn(t,"name",{value:n,configurable:!0}):t.name=n),Yi&&o&&wn(o,"arity")&&t.length!==o.arity&&kn(t,"length",{value:o.arity});try{o&&wn(o,"constructor")&&o.constructor?Tt&&kn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch{}var u=Wi(t);return wn(u,"source")||(u.source=Xi(ec,typeof n=="string"?n:"")),t};Function.prototype.toString=nc(function(){return Ki(this)&&Zi(this).source||Ji(this)},"toString");var tc=me,rc=je,ac=vn,sc=st,tn=function(t,n,o,u){u||(u={});var a=u.enumerable,c=u.name!==void 0?u.name:n;if(tc(o)&&ac(o,c,u),u.global)a?t[n]=o:sc(n,o);else{try{u.unsafe?t[n]&&(a=!0):delete t[n]}catch{}a?t[n]=o:rc.f(t,n,{value:o,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t},da={},oc=Math.ceil,ic=Math.floor,cc=Math.trunc||function(t){var n=+t;return(n>0?ic:oc)(n)},Tn=function(t){var n=+t;return n!=n||n===0?0:cc(n)},lc=Tn,uc=Math.max,dc=Math.min,pc=Tn,hc=Math.min,rn=function(t){return t>0?hc(pc(t),9007199254740991):0},mc=rn,Nn=function(t){return mc(t.length)},fc=Fe,gc=function(t,n){var o=lc(t);return o<0?uc(o+n,0):dc(o,n)},bc=Nn,pa=function(t){return function(n,o,u){var a,c=fc(n),h=bc(c),p=gc(u,h);if(t&&o!=o){for(;h>p;)if((a=c[p++])!=a)return!0}else for(;h>p;p++)if((t||p in c)&&c[p]===o)return t||p||0;return!t&&-1}},_c={includes:pa(!0),indexOf:pa(!1)},Nt=Ne,yc=Fe,vc=_c.indexOf,Ec=yt,ha=re([].push),ma=function(t,n){var o,u=yc(t),a=0,c=[];for(o in u)!Nt(Ec,o)&&Nt(u,o)&&ha(c,o);for(;n.length>a;)Nt(u,o=n[a++])&&(~vc(c,o)||ha(c,o));return c},xt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Sc=ma,wc=xt.concat("length","prototype");da.f=Object.getOwnPropertyNames||function(t){return Sc(t,wc)};var fa={};fa.f=Object.getOwnPropertySymbols;var kc=gn,Tc=da,Nc=fa,xc=xe,Oc=re([].concat),Cc=kc("Reflect","ownKeys")||function(t){var n=Tc.f(xc(t)),o=Nc.f;return o?Oc(n,o(t)):n},ga=Ne,Ac=Cc,qc=B,Rc=je,Lc=I,Dc=me,Mc=/#|\.prototype\./,an=function(t,n){var o=jc[$c(t)];return o==Ic||o!=Uc&&(Dc(n)?Lc(n):!!n)},$c=an.normalize=function(t){return String(t).replace(Mc,".").toLowerCase()},jc=an.data={},Uc=an.NATIVE="N",Ic=an.POLYFILL="P",Bc=an,Ot=q,Pc=B.f,Hc=yn,Fc=tn,zc=st,Kc=function(t,n,o){for(var u=Ac(n),a=Rc.f,c=qc.f,h=0;h<u.length;h++){var p=u[h];ga(t,p)||o&&ga(o,p)||a(t,p,c(n,p))}},Gc=Bc,pe=function(t,n){var o,u,a,c,h,p=t.target,l=t.global,e=t.stat;if(o=l?Ot:e?Ot[p]||zc(p,{}):(Ot[p]||{}).prototype)for(u in n){if(c=n[u],a=t.dontCallGetSet?(h=Pc(o,u))&&h.value:o[u],!Gc(l?u:p+(e?".":"#")+u,t.forced)&&a!==void 0){if(typeof c==typeof a)continue;Kc(c,a)}(t.sham||a&&a.sham)&&Hc(c,"sham",!0),Fc(o,u,c,t)}},Jc=Me,Wc=re,sn=function(t){if(Jc(t)==="Function")return Wc(t)},ba={};ba[ve("toStringTag")]="z";var Ct,At=String(ba)==="[object z]",Zc=At,Vc=me,xn=Me,Qc=ve("toStringTag"),Xc=Object,Yc=xn(function(){return arguments}())=="Arguments",qt=Zc?xn:function(t){var n,o,u;return t===void 0?"Undefined":t===null?"Null":typeof(o=function(a,c){try{return a[c]}catch{}}(n=Xc(t),Qc))=="string"?o:Yc?xn(n):(u=xn(n))=="Object"&&Vc(n.callee)?"Arguments":u},el=qt,nl=String,Ue=function(t){if(el(t)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return nl(t)},tl=Te,rl=Me,al=ve("match"),sl=function(t){var n;return tl(t)&&((n=t[al])!==void 0?!!n:rl(t)=="RegExp")},ol=TypeError,_a=function(t){if(sl(t))throw ol("The method doesn't accept regular expressions");return t},il=ve("match"),ya=function(t){var n=/./;try{"/./"[t](n)}catch{try{return n[il]=!1,"/./"[t](n)}catch{}}return!1},cl=pe,va=sn,ll=B.f,ul=rn,Ea=Ue,dl=_a,pl=$e,hl=ya,Sa=va("".startsWith),ml=va("".slice),fl=Math.min,wa=hl("startsWith");cl({target:"String",proto:!0,forced:!!(wa||(Ct=ll(String.prototype,"startsWith"),!Ct||Ct.writable))&&!wa},{startsWith:function(t){var n=Ea(pl(this));dl(t);var o=ul(fl(arguments.length>1?arguments[1]:void 0,n.length)),u=Ea(t);return Sa?Sa(n,u,o):ml(n,o,o+u.length)===u}});var gl=pe,ka=sn,bl=B.f,_l=rn,Ta=Ue,yl=_a,vl=$e,El=ya,Na=ka("".endsWith),Sl=ka("".slice),wl=Math.min,xa=El("endsWith"),kl=!xa&&!!function(){var t=bl(String.prototype,"endsWith");return t&&!t.writable}();gl({target:"String",proto:!0,forced:!kl&&!xa},{endsWith:function(t){var n=Ta(vl(this));yl(t);var o=arguments.length>1?arguments[1]:void 0,u=n.length,a=o===void 0?u:wl(_l(o),u),c=Ta(t);return Na?Na(n,c,a):Sl(n,a-c.length,a)===c}});var Tl=bn,Nl=ue,xl=sn(sn.bind),Ol=Me,Rt=Array.isArray||function(t){return Ol(t)=="Array"},Cl=re,Al=I,Oa=me,ql=qt,Rl=aa,Ca=function(){},Ll=[],Aa=gn("Reflect","construct"),Lt=/^\s*(?:class|function)\b/,Dl=Cl(Lt.exec),Ml=!Lt.exec(Ca),on=function(t){if(!Oa(t))return!1;try{return Aa(Ca,Ll,t),!0}catch{return!1}},qa=function(t){if(!Oa(t))return!1;switch(ql(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Ml||!!Dl(Lt,Rl(t))}catch{return!0}};qa.sham=!0;var $l=!Aa||Al(function(){var t;return on(on.call)||!on(Object)||!on(function(){t=!0})||t})?qa:on,Ra=Rt,jl=$l,Ul=Te,Il=ve("species"),La=Array,Bl=function(t){var n;return Ra(t)&&(n=t.constructor,(jl(n)&&(n===La||Ra(n.prototype))||Ul(n)&&(n=n[Il])===null)&&(n=void 0)),n===void 0?La:n},Da=function(t,n){return new(Bl(t))(n===0?0:n)},Pl=function(t,n){return Tl(t),n===void 0?t:Nl?xl(t,n):function(){return t.apply(n,arguments)}},Hl=hn,Fl=ze,zl=Nn,Kl=Da,Ma=re([].push),Re=function(t){var n=t==1,o=t==2,u=t==3,a=t==4,c=t==6,h=t==7,p=t==5||c;return function(l,e,f,b){for(var _,g,d=Fl(l),s=Hl(d),r=Pl(e,f),w=zl(s),O=0,T=b||Kl,A=n?T(l,w):o||h?T(l,0):void 0;w>O;O++)if((p||O in s)&&(g=r(_=s[O],O,d),t))if(n)A[O]=g;else if(g)switch(t){case 3:return!0;case 5:return _;case 6:return O;case 2:Ma(A,_)}else switch(t){case 4:return!1;case 7:Ma(A,_)}return c?-1:u||a?a:A}},On={forEach:Re(0),map:Re(1),filter:Re(2),some:Re(3),every:Re(4),find:Re(5),findIndex:Re(6),filterReject:Re(7)},Gl=I,Cn=function(t,n){var o=[][t];return!!o&&Gl(function(){o.call(null,n||function(){return 1},1)})},Jl=On.forEach,Dt=Cn("forEach")?[].forEach:function(t){return Jl(this,t,arguments.length>1?arguments[1]:void 0)};pe({target:"Array",proto:!0,forced:[].forEach!=Dt},{forEach:Dt});var Wl=qt,Zl=At?{}.toString:function(){return"[object "+Wl(this)+"]"};At||tn(Object.prototype,"toString",Zl,{unsafe:!0});var Mt=ut("span").classList,$a=Mt&&Mt.constructor&&Mt.constructor.prototype,ja=q,Ua={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Vl=$a===Object.prototype?void 0:$a,$t=Dt,Ql=yn,Ia=function(t){if(t&&t.forEach!==$t)try{Ql(t,"forEach",$t)}catch{t.forEach=$t}};for(var jt in Ua)Ua[jt]&&Ia(ja[jt]&&ja[jt].prototype);Ia(Vl);var Xl=I,Yl=Ye,eu=ve("species"),Ut=function(t){return Yl>=51||!Xl(function(){var n=[];return(n.constructor={})[eu]=function(){return{foo:1}},n[t](Boolean).foo!==1})},nu=On.filter;pe({target:"Array",proto:!0,forced:!Ut("filter")},{filter:function(t){return nu(this,t,arguments.length>1?arguments[1]:void 0)}});var tu=xe,Ba=function(){var t=tu(this),n="";return t.hasIndices&&(n+="d"),t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.unicodeSets&&(n+="v"),t.sticky&&(n+="y"),n},It=I,Bt=q.RegExp,Pt=It(function(){var t=Bt("a","y");return t.lastIndex=2,t.exec("abcd")!=null}),ru=Pt||It(function(){return!Bt("a","y").sticky}),au={BROKEN_CARET:Pt||It(function(){var t=Bt("^r","gy");return t.lastIndex=2,t.exec("str")!=null}),MISSED_STICKY:ru,UNSUPPORTED_Y:Pt},Pa={},su=ma,ou=xt,Ht=Object.keys||function(t){return su(t,ou)},iu=ee,cu=na,lu=je,uu=xe,du=Fe,pu=Ht;Pa.f=iu&&!cu?Object.defineProperties:function(t,n){uu(t);for(var o,u=du(n),a=pu(n),c=a.length,h=0;c>h;)lu.f(t,o=a[h++],u[o]);return t};var An,hu=gn("document","documentElement"),mu=xe,fu=Pa,Ha=xt,gu=yt,bu=hu,_u=ut,Ft="prototype",zt="script",Fa=ia("IE_PROTO"),Kt=function(){},za=function(t){return"<"+zt+">"+t+"</"+zt+">"},Ka=function(t){t.write(za("")),t.close();var n=t.parentWindow.Object;return t=null,n},qn=function(){try{An=new ActiveXObject("htmlfile")}catch{}var t,n,o;qn=typeof document<"u"?document.domain&&An?Ka(An):(n=_u("iframe"),o="java"+zt+":",n.style.display="none",bu.appendChild(n),n.src=String(o),(t=n.contentWindow.document).open(),t.write(za("document.F=Object")),t.close(),t.F):Ka(An);for(var u=Ha.length;u--;)delete qn[Ft][Ha[u]];return qn()};gu[Fa]=!0;var Ga,Gt,yu=Object.create||function(t,n){var o;return t!==null?(Kt[Ft]=mu(t),o=new Kt,Kt[Ft]=null,o[Fa]=t):o=qn(),n===void 0?o:fu.f(o,n)},vu=I,Eu=q.RegExp,Su=vu(function(){var t=Eu(".","s");return!(t.dotAll&&t.exec(`
`)&&t.flags==="s")}),wu=I,ku=q.RegExp,Tu=wu(function(){var t=ku("(?<a>b)","g");return t.exec("b").groups.a!=="b"||"b".replace(t,"$<a>c")!=="bc"}),Je=ye,Rn=re,Nu=Ue,xu=Ba,Ou=au,Cu=yu,Au=wt.get,qu=Su,Ru=Tu,Lu=en("native-string-replace",String.prototype.replace),Ln=RegExp.prototype.exec,Jt=Ln,Du=Rn("".charAt),Mu=Rn("".indexOf),$u=Rn("".replace),Wt=Rn("".slice),Zt=(Gt=/b*/g,Je(Ln,Ga=/a/,"a"),Je(Ln,Gt,"a"),Ga.lastIndex!==0||Gt.lastIndex!==0),Ja=Ou.BROKEN_CARET,Vt=/()??/.exec("")[1]!==void 0;(Zt||Vt||Ja||qu||Ru)&&(Jt=function(t){var n,o,u,a,c,h,p,l=this,e=Au(l),f=Nu(t),b=e.raw;if(b)return b.lastIndex=l.lastIndex,n=Je(Jt,b,f),l.lastIndex=b.lastIndex,n;var _=e.groups,g=Ja&&l.sticky,d=Je(xu,l),s=l.source,r=0,w=f;if(g&&(d=$u(d,"y",""),Mu(d,"g")===-1&&(d+="g"),w=Wt(f,l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&Du(f,l.lastIndex-1)!==`
`)&&(s="(?: "+s+")",w=" "+w,r++),o=new RegExp("^(?:"+s+")",d)),Vt&&(o=new RegExp("^"+s+"$(?!\\s)",d)),Zt&&(u=l.lastIndex),a=Je(Ln,g?o:l,w),g?a?(a.input=Wt(a.input,r),a[0]=Wt(a[0],r),a.index=l.lastIndex,l.lastIndex+=a[0].length):l.lastIndex=0:Zt&&a&&(l.lastIndex=l.global?a.index+a[0].length:u),Vt&&a&&a.length>1&&Je(Lu,a[0],o,function(){for(c=1;c<arguments.length-2;c++)arguments[c]===void 0&&(a[c]=void 0)}),a&&_)for(a.groups=h=Cu(null),c=0;c<_.length;c++)h[(p=_[c])[0]]=a[p[1]];return a});var Dn=Jt;pe({target:"RegExp",proto:!0,forced:/./.exec!==Dn},{exec:Dn});var ju=ue,Wa=Function.prototype,Za=Wa.apply,Va=Wa.call,Uu=typeof Reflect=="object"&&Reflect.apply||(ju?Va.bind(Za):function(){return Va.apply(Za,arguments)}),Qa=sn,Xa=tn,Iu=Dn,Ya=I,es=ve,Bu=yn,Pu=es("species"),Qt=RegExp.prototype,ns=function(t,n,o,u){var a=es(t),c=!Ya(function(){var e={};return e[a]=function(){return 7},""[t](e)!=7}),h=c&&!Ya(function(){var e=!1,f=/a/;return t==="split"&&((f={}).constructor={},f.constructor[Pu]=function(){return f},f.flags="",f[a]=/./[a]),f.exec=function(){return e=!0,null},f[a](""),!e});if(!c||!h||o){var p=Qa(/./[a]),l=n(a,""[t],function(e,f,b,_,g){var d=Qa(e),s=f.exec;return s===Iu||s===Qt.exec?c&&!g?{done:!0,value:p(f,b,_)}:{done:!0,value:d(b,f,_)}:{done:!1}});Xa(String.prototype,t,l[0]),Xa(Qt,a,l[1])}u&&Bu(Qt[a],"sham",!0)},Xt=re,Hu=Tn,Fu=Ue,zu=$e,Ku=Xt("".charAt),ts=Xt("".charCodeAt),Gu=Xt("".slice),rs=function(t){return function(n,o){var u,a,c=Fu(zu(n)),h=Hu(o),p=c.length;return h<0||h>=p?t?"":void 0:(u=ts(c,h))<55296||u>56319||h+1===p||(a=ts(c,h+1))<56320||a>57343?t?Ku(c,h):u:t?Gu(c,h,h+2):a-56320+(u-55296<<10)+65536}},Ju={codeAt:rs(!1),charAt:rs(!0)}.charAt,as=function(t,n,o){return n+(o?Ju(t,n).length:1)},Yt=re,Wu=ze,Zu=Math.floor,er=Yt("".charAt),Vu=Yt("".replace),nr=Yt("".slice),Qu=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Xu=/\$([$&'`]|\d{1,2})/g,ss=ye,Yu=xe,ed=me,nd=Me,td=Dn,rd=TypeError,os=function(t,n){var o=t.exec;if(ed(o)){var u=ss(o,t,n);return u!==null&&Yu(u),u}if(nd(t)==="RegExp")return ss(td,t,n);throw rd("RegExp#exec called on incompatible receiver")},ad=Uu,is=ye,Mn=re,sd=ns,od=I,id=xe,cd=me,ld=mn,ud=Tn,dd=rn,We=Ue,pd=$e,hd=as,md=nt,fd=function(t,n,o,u,a,c){var h=o+t.length,p=u.length,l=Xu;return a!==void 0&&(a=Wu(a),l=Qu),Vu(c,l,function(e,f){var b;switch(er(f,0)){case"$":return"$";case"&":return t;case"`":return nr(n,0,o);case"'":return nr(n,h);case"<":b=a[nr(f,1,-1)];break;default:var _=+f;if(_===0)return e;if(_>p){var g=Zu(_/10);return g===0?e:g<=p?u[g-1]===void 0?er(f,1):u[g-1]+er(f,1):e}b=u[_-1]}return b===void 0?"":b})},gd=os,tr=ve("replace"),bd=Math.max,_d=Math.min,yd=Mn([].concat),rr=Mn([].push),cs=Mn("".indexOf),ls=Mn("".slice),vd="a".replace(/./,"$0")==="$0",us=!!/./[tr]&&/./[tr]("a","$0")==="";sd("replace",function(t,n,o){var u=us?"$":"$0";return[function(a,c){var h=pd(this),p=ld(a)?void 0:md(a,tr);return p?is(p,a,h,c):is(n,We(h),a,c)},function(a,c){var h=id(this),p=We(a);if(typeof c=="string"&&cs(c,u)===-1&&cs(c,"$<")===-1){var l=o(n,h,p,c);if(l.done)return l.value}var e=cd(c);e||(c=We(c));var f=h.global;if(f){var b=h.unicode;h.lastIndex=0}for(var _=[];;){var g=gd(h,p);if(g===null||(rr(_,g),!f))break;We(g[0])===""&&(h.lastIndex=hd(p,dd(h.lastIndex),b))}for(var d,s="",r=0,w=0;w<_.length;w++){for(var O=We((g=_[w])[0]),T=bd(_d(ud(g.index),p.length),0),A=[],$=1;$<g.length;$++)rr(A,(d=g[$])===void 0?d:String(d));var K=g.groups;if(e){var F=yd([O],A,T,p);K!==void 0&&rr(F,K);var P=We(ad(c,void 0,F))}else P=fd(O,p,T,A,K,c);T>=r&&(s+=ls(p,r,T)+P,r=T+O.length)}return s+ls(p,r)}]},!!od(function(){var t=/./;return t.exec=function(){var n=[];return n.groups={a:"7"},n},"".replace(t,"$<a>")!=="7"})||!vd||us);var ds=vn,Ed=je,Sd=ee,wd=bt.EXISTS,ps=re,kd=function(t,n,o){return o.get&&ds(o.get,n,{getter:!0}),o.set&&ds(o.set,n,{setter:!0}),Ed.f(t,n,o)},hs=Function.prototype,Td=ps(hs.toString),ms=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,Nd=ps(ms.exec);Sd&&!wd&&kd(hs,"name",{configurable:!0,get:function(){try{return Nd(ms,Td(this))[1]}catch{return""}}}),pe({target:"Array",stat:!0},{isArray:Rt});var xd=On.map;pe({target:"Array",proto:!0,forced:!Ut("map")},{map:function(t){return xd(this,t,arguments.length>1?arguments[1]:void 0)}});var Od=pe,Cd=hn,Ad=Fe,qd=Cn,Rd=re([].join);Od({target:"Array",proto:!0,forced:Cd!=Object||!qd("join",",")},{join:function(t){return Rd(Ad(this),t===void 0?",":t)}});var Ld=ee,fs=re,Dd=Ht,Md=Fe,$d=fs(Wn.f),jd=fs([].push),gs=function(t){return function(n){for(var o,u=Md(n),a=Dd(u),c=a.length,h=0,p=[];c>h;)o=a[h++],Ld&&!$d(u,o)||jd(p,t?[o,u[o]]:u[o]);return p}},bs={entries:gs(!0),values:gs(!1)},Ud=bs.entries;pe({target:"Object",stat:!0},{entries:function(t){return Ud(t)}});var Id=TypeError,Bd=ct,Pd=je,Hd=Zn,Fd=pe,zd=I,Kd=Rt,Gd=Te,Jd=ze,Wd=Nn,_s=function(t){if(t>9007199254740991)throw Id("Maximum allowed index exceeded");return t},ys=function(t,n,o){var u=Bd(n);u in t?Pd.f(t,u,Hd(0,o)):t[u]=o},Zd=Da,Vd=Ut,Qd=Ye,vs=ve("isConcatSpreadable"),Xd=Qd>=51||!zd(function(){var t=[];return t[vs]=!1,t.concat()[0]!==t}),Yd=function(t){if(!Gd(t))return!1;var n=t[vs];return n!==void 0?!!n:Kd(t)};Fd({target:"Array",proto:!0,arity:1,forced:!Xd||!Vd("concat")},{concat:function(t){var n,o,u,a,c,h=Jd(this),p=Zd(h,0),l=0;for(n=-1,u=arguments.length;n<u;n++)if(Yd(c=n===-1?h:arguments[n]))for(a=Wd(c),_s(l+a),o=0;o<a;o++,l++)o in c&&ys(p,l,c[o]);else _s(l+1),ys(p,l++,c);return p.length=l,p}});var ep=ye,np=xe,tp=mn,rp=rn,ar=Ue,ap=$e,sp=nt,op=as,Es=os;ns("match",function(t,n,o){return[function(u){var a=ap(this),c=tp(u)?void 0:sp(u,t);return c?ep(c,u,a):new RegExp(u)[t](ar(a))},function(u){var a=np(this),c=ar(u),h=o(n,a,c);if(h.done)return h.value;if(!a.global)return Es(a,c);var p=a.unicode;a.lastIndex=0;for(var l,e=[],f=0;(l=Es(a,c))!==null;){var b=ar(l[0]);e[f]=b,b===""&&(a.lastIndex=op(c,rp(a.lastIndex),p)),f++}return f===0?null:e}]});var ip=bn,cp=ze,lp=hn,up=Nn,dp=TypeError,Ss=function(t){return function(n,o,u,a){ip(o);var c=cp(n),h=lp(c),p=up(c),l=t?p-1:0,e=t?-1:1;if(u<2)for(;;){if(l in h){a=h[l],l+=e;break}if(l+=e,t?l<0:p<=l)throw dp("Reduce of empty array with no initial value")}for(;t?l>=0:p>l;l+=e)l in h&&(a=o(a,h[l],l,c));return a}},pp={left:Ss(!1),right:Ss(!0)},hp=typeof process<"u"&&Me(process)=="process",mp=pp.left;pe({target:"Array",proto:!0,forced:!hp&&Ye>79&&Ye<83||!Cn("reduce")},{reduce:function(t){var n=arguments.length;return mp(this,t,n,n>1?arguments[1]:void 0)}});var fp=ze,ws=Ht;pe({target:"Object",stat:!0,forced:I(function(){ws(1)})},{keys:function(t){return ws(fp(t))}});var gp=re([].slice),ks=re,bp=bn,_p=Te,yp=Ne,Ts=gp,vp=ue,Ns=Function,Ep=ks([].concat),Sp=ks([].join),sr={},wp=vp?Ns.bind:function(t){var n=bp(this),o=n.prototype,u=Ts(arguments,1),a=function(){var c=Ep(u,Ts(arguments));return this instanceof a?function(h,p,l){if(!yp(sr,p)){for(var e=[],f=0;f<p;f++)e[f]="a["+f+"]";sr[p]=Ns("C,a","return new C("+Sp(e,",")+")")}return sr[p](h,l)}(n,c.length,c):n.apply(t,c)};return _p(o)&&(a.prototype=o),a},xs=wp;pe({target:"Function",proto:!0,forced:Function.bind!==xs},{bind:xs});var Os=re,kp=tn,or=Date.prototype,Cs="Invalid Date",As="toString",Tp=Os(or[As]),Np=Os(or.getTime);String(new Date(NaN))!=Cs&&kp(or,As,function(){var t=Np(this);return t==t?Tp(this):Cs});var xp=ye,Op=Ne,Cp=Mr,Ap=Ba,qs=RegExp.prototype,qp=bt.PROPER,Rp=tn,Lp=xe,Rs=Ue,Dp=I,Mp=function(t){var n=t.flags;return n!==void 0||"flags"in qs||Op(t,"flags")||!Cp(qs,t)?n:xp(Ap,t)},ir="toString",Ls=RegExp.prototype[ir],$p=Dp(function(){return Ls.call({source:"a",flags:"b"})!="/a/b"}),jp=qp&&Ls.name!=ir;($p||jp)&&Rp(RegExp.prototype,ir,function(){var t=Lp(this);return"/"+Rs(t.source)+"/"+Rs(Mp(t))},{unsafe:!0});var Up=bs.values;pe({target:"Object",stat:!0},{values:function(t){return Up(t)}});var Ip=On.some;pe({target:"Array",proto:!0,forced:!Cn("some")},{some:function(t){return Ip(this,t,arguments.length>1?arguments[1]:void 0)}});var Ds={"swift/urlsession":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
// Create a new URLRequest object
var request = URLRequest(url: URL(string: "`),e(f),e(`")!)

// Set the request method
request.httpMethod = "`),e(b),e(`"

// Set the request content type header
request.addValue("`),e(_),e(`", forHTTPHeaderField: "Content-Type")

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach(function(r){m(this,a),e(`
request.addValue("`),e(n(r.value)),e('", forHTTPHeaderField: "'),e(n(r.name)),e(`")
`)}.bind(this))),e(`

`),s.length>0&&(e(`
// Add cookies to the request
`),s.forEach(function(r){m(this,a),e(`
request.addValue("`),e(n(r.value)),e('", forHTTPHeaderField: "'),e(n(r.name)),e(`")
`)}.bind(this))),e(`

`),b==="POST"&&d.length>0&&(e(`// Set the request body
`),d.length===1&&d[0].type==="file"?e(`
    let fileUrl = URL(fileURLWithPath: "/path/to/file")
    let data = try Data(contentsOf: fileUrl)
    request.httpBody = data
`):(e(`
    let postDataDict = `),e(n(JSON.stringify(d.reduce(function(r,w){return m(this,a),Array.isArray(w.value)||i(w.value),r[w.name]=w.value,r}.bind(this),{})))),e(`
    let postData = postDataDict.map { (key, value) -> String in
    let encodedKey = key.addingPercentEncoding(withAllowedCharacters: .alphanumerics) ?? ""
    let encodedValue = String(describing: value).addingPercentEncoding(withAllowedCharacters: .alphanumerics) ?? ""
    return "(encodedKey)=(encodedValue)"
    }.joined(separator: "&")
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
`),l},"swift/alamofire":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`
// Construct the request URL
let fullUrl = "`),e(f),e(`"

// Set up the request headers
var headers: HTTPHeaders = [:]
`),_.forEach(function(s){m(this,a),e(`
headers["`),e(n(s.name)),e('"] = "'),e(n(s.value)),e(`"
`)}.bind(this)),e(`

`),d.length>0&&(e(`
// Add cookies to the request
`),d.forEach(function(s){m(this,a),e(`
let cookie = HTTPCookie(properties: [
    .domain: "`),e(n(s.domain)),e(`",
    .path: "`),e(n(s.path)),e(`",
    .name: "`),e(n(s.name)),e(`",
    .value: "`),e(n(s.value)),e(`",
])!
HTTPCookieStorage.shared.setCookie(cookie)
`)}.bind(this)),e(`
`)),e(`

// Set up the request parameters
var parameters: Parameters = [:]
`),g.forEach(function(s){m(this,a),e(`
`),Array.isArray(s.value)||i(s.value)==="object"?(e(`
if let jsonData = try? JSONSerialization.data(withJSONObject: `),e(n(JSON.stringify(s.value))),e(`, options: []) {
    if let jsonString = String(data: jsonData, encoding: .utf8) {
        parameters["`),e(n(s.name)),e(`"] = jsonString
    }
}
`)):(e(`
parameters["`),e(n(s.name)),e('"] = "'),e(n(s.value)),e(`"
`)),e(`
`)}.bind(this)),e(`

// Create the request
AF.request(fullUrl, method: .`),e(n(b.toLowerCase())),e(`, parameters: parameters, headers: headers).response { response in
    switch response.result {
    case .success(let data):
        if let data = data {
            print("Response:", String(data: data, encoding: .utf8)!)
        }
    case .failure(let error):
        print("Error:", error.localizedDescription)
    }
}
`),l},"scala/scalaj-http":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import scalaj.http._

val url = "`),e(n(f)),e(`"
val method = "`),e(n(b)),e(`"
val mimeType = "`),e(n(_)),e(`"
val headers = `),g.length>0?(e(`Seq(
`),g.forEach(function(r){m(this,a),e(`
  ("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Nil"),e(`
val cookies = `),s.length>0?(e(`Seq(
`),s.forEach(function(r){m(this,a),e(`
  HttpCookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Nil"),e(`
val postData = `),d.length>0?(e(`Seq(
`),d.forEach(function(r){m(this,a),e(`
`),Array.isArray(r.value)||i(r.value)==="object"?(e(`
  ("`),e(n(r.name)),e('", "'),e(n(JSON.stringify(r.value))),e(`"),
`)):(e(`
  ("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)),e(`
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
  val entity = `),d.length===1&&d[0].type==="file"?(e(`
    MultipartFormData(Seq(
      `),d.forEach(function(r){m(this,a),e(`
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
`),l},"scala/http4s":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import cats.effect._
import org.http4s._
import org.http4s.client.blaze._
import org.http4s.client.dsl.io._
import org.http4s.headers._
import org.http4s.MediaType._

val url = "`),e(n(f)),e(`"
val method = "`),e(n(b)),e(`"
val mimeType = "`),e(n(_)),e(`"
val headers = `),g.length>0?(e(`Headers(
`),g.forEach(function(r){m(this,a),e(`
  Header.apply("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Headers.empty"),e(`
val cookies = `),s.length>0?(e(`Seq(
`),s.forEach(function(r){m(this,a),e(`
  RequestCookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"),
`)}.bind(this)),e(`
)`)):e("Seq.empty"),e(`
val postData = `),d.length>0?(e(`UrlForm(
`),d.forEach(function(r){m(this,a),e(`
`),Array.isArray(r.value)||i(r.value)==="object"?(e(`
  "`),e(n(r.name)),e('" -> "'),e(n(JSON.stringify(r.value))),e(`",
`)):(e(`
  "`),e(n(r.name)),e('" -> "'),e(n(r.value)),e(`",
`)),e(`
`)}.bind(this)),e(`
)`)):e("UrlForm.empty"),e(`

// Construct the request
implicit val cs = IO.contextShift(ExecutionContext.global)
val client = Http1Client[IO]().unsafeRunSync()
val request = Method.`),e(n(b.toUpperCase())),e(`(Uri.unsafeFromString(url), postData)
  .withHeaders(headers)
  .withCredentials(Credentials(cookies))

// Send the request
val response = client.expect[String](request).unsafeRunSync()

// Handle the response
println("Response: " + response)

// Clean up
client.shutdownNow()
`),l},"scala/akka":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer
import akka.stream.scaladsl._
import scala.concurrent.Future
import scala.util.{Failure, Success}

val url = "`),e(n(f)),e(`"
val method = "`),e(n(b)),e(`"
val mimeType = "`),e(n(_)),e(`"
val headers = List(
`),g.forEach(function(r){m(this,a),e(`
  HttpHeader.parse("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`").asInstanceOf[HttpHeader],
`)}.bind(this)),e(`
)
val cookies = List(
`),s.forEach(function(r){m(this,a),e(`
  HttpCookiePair("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`").asInstanceOf[HttpCookiePair],
`)}.bind(this)),e(`
)
val postData = List(
`),d.forEach(function(r){m(this,a),e(`
  `),Array.isArray(r.value)||i(r.value)==="object"?(e(`
    FormData.BodyPart.Strict("`),e(n(r.name)),e('", HttpEntity(ContentTypes.application/json, "'),e(n(JSON.stringify(r.value))),e(`")).asInstanceOf[FormData.BodyPart.Strict],
  `)):(e(`
    FormData.BodyPart.Strict("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`").asInstanceOf[FormData.BodyPart.Strict],
  `)),e(`
`)}.bind(this)),e(`
)

// Construct the request
implicit val system = ActorSystem()
implicit val materializer = ActorMaterializer()
implicit val executionContext = system.dispatcher

val request = HttpRequest(
  method = HttpMethods.`),e(n(b.toUpperCase())),e(`,
  uri = url,
  headers = headers,
  entity = `),d.length>0?e("FormData(postData).toEntity"):e("HttpEntity.Empty"),e(`
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
`),l},"rust/surf":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`
use surf::http::{Method, Url, headers::{Headers, HeaderValue}};

// Construct the request URL
let url = Url::new("`),e(n(f)),e(`").unwrap();

// Set up the request
let mut req = surf::Request::new(`),e(n(b)),e(` , url);

`),_.length>0&&(e(`
// Add headers to the request
`),_.forEach(function(s){m(this,a),e(`
req.insert_header("`),e(n(s.name)),e('", HeaderValue::from_str("'),e(n(s.value)),e(`").unwrap());
`)}.bind(this)),e(`
`)),e(`

`),d.length>0&&(e(`
// Add cookies to the request
`),d.forEach(function(s){m(this,a),e(`
req.insert_cookie(surf::http::Cookie::new("`),e(n(s.name)),e('", "'),e(n(s.value)),e(`"));
`)}.bind(this)),e(`
`)),e(`

`),g.length>0&&(e(`
// Send the request
let body = `),g.length===1&&g[0].type==="file"?(e(`
surf::Body::from(surf::http::Form::from(`),g[0].value,e(`))
`)):(e(`
surf::Body::from("`),e(n(g.map(function(s){return m(this,a),Array.isArray(s.value)||i(s.value)==="object"?s.name+"="+encodeURIComponent(JSON.stringify(s.value)):s.name+"="+encodeURIComponent(s.value)}.bind(this)).join("&"))),e(`")
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
`),l},"rust/reqwest":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
let url = "`),e(n(f)),e(`";
let method = "`),e(n(b)),e(`";
let mime_type = "`),e(n(_)),e(`";

let headers = reqwest::header::HeaderMap::new();
`),g.forEach(function(r){m(this,a),e(`
headers.insert("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`".parse().unwrap());
`)}.bind(this)),e(`

let mut cookies = reqwest::cookie::CookieJar::new();
`),s.forEach(function(r){m(this,a),e(`
cookies.add(reqwest::cookie::Cookie::new("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`"));
`)}.bind(this)),e(`

let mut request_builder = reqwest::Client::new().request(method, url);
request_builder = request_builder.headers(headers);
request_builder = request_builder.cookie_store(cookies);

// Add post data to the request
`),d.length>0&&(e(`
`),d.length===1&&d[0].type==="file"?(e(`
let form_data = reqwest::multipart::Form::new()
.file("`),e(n(d[0].name)),e('", "'),e(n(d[0].value)),e(`").unwrap();
let request_builder = request_builder.multipart(form_data);
`)):(e(`
let post_data = "`),e(n(d.map(function(r){return m(this,a),Array.isArray(r.value)||i(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`";
let request_builder = request_builder.body(post_data);
`)),e(`
`)),e(`

let response = request_builder.send().await.unwrap();
let response_text = response.text().await.unwrap();
println!("Response: {}", response_text);
`),l},"rust/hyper":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
// Create a new Hyper client object
let client = hyper::Client::new();

// Construct the request URL
let full_url = "`),e(n(f)),e(`";

// Create the request
let mut req = hyper::Request::new(hyper::Method::`),e(n(b)),e(`, full_url);

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach(function(r){m(this,a),e(`
req.headers_mut().insert(hyper::header::`),e(n(r.name)),e(", "),e(n(r.value)),e(`.parse().unwrap());
`)}.bind(this)),e(`
`)),e(`

`),s.length>0&&(e(`
// Add cookies to the request
`),s.forEach(function(r){m(this,a),e(`
req.headers_mut().insert(hyper::header::COOKIE, format!("`),e(n(r.name)),e("={"),e(n(r.value)),e(`}; "));
`)}.bind(this)),e(`
`)),e(`

`),d.length>0&&(e(`
    // Add the request body
`),d.length===1&&d[0].type==="file"?(e(`
let form = multipart::Form::new()
.file("`),e(n(d[0].name)),e('", "'),e(n(d[0].value)),e(`")
.unwrap();
let mut body = hyper::Body::from(form.stream());
`)):(e(`
let body = hyper::Body::from("`),e(n(d.map(function(r){return m(this,a),Array.isArray(r.value)||i(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`");
`)),e(`
req.headers_mut().insert(hyper::header::CONTENT_TYPE, "`),e(n(_)),e(`".parse().unwrap());
req.headers_mut().insert(hyper::header::CONTENT_LENGTH, body.len().into());
req.set_body(body);
`)),e(`

// Send the request and get the response
let res = client.request(req).await?;

// Print the response
println!("Response: \\n{:?}", res);
`),l},"ruby/restclient":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
require 'rest-client'

url = "`),e(n(f)),e(`"
method = "`),e(n(b)),e(`"
mimeType = "`),e(n(_)),e(`"

headers = {
  `),g.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" => "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
}

cookies = {
  `),s.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" => "'),e(n(r.value)),e(`",
  `)}.bind(this)),e(`
}

`),b==="GET"?e(`
  response = RestClient.get(url, headers: headers, cookies: cookies)
`):(e(`
  body = "`),e(n(d.map(function(r){return m(this,a),Array.isArray(r.value)||i(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`"
  response = RestClient::`),e(n(b.downcase)),e(`(url, body, headers: headers, cookies: cookies, content_type: mimeType)
`)),e(`

puts "Response: #{response.body}"
`),l},"ruby/http":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
require 'net/http'
require 'uri'

url = URI("`),e(n(f)),e(`")
method = "`),e(n(b)),e(`"
mimeType = "`),e(n(_)),e(`"

`),b==="GET"?e(`
  req = Net::HTTP::Get.new(url)
`):(e(`
  body = "`),e(n(d.map(function(r){return m(this,a),Array.isArray(r.value)||i(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}.bind(this)).join("&"))),e(`"
  req = Net::HTTP::`),e(n(b.capitalize)),e(`.new(url)
  req.body = body
  req.content_type = mimeType
`)),e(`

`),g.forEach(function(r){m(this,a),e(`
  req['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`'
`)}.bind(this)),e(`

`),s.forEach(function(r){m(this,a),e(`
  req['Cookie'] = '`),e(n(r.name)),e("="),e(n(r.value)),e(`'
`)}.bind(this)),e(`

res = Net::HTTP.start(url.hostname, url.port, use_ssl: url.scheme == 'https') do |http|
  http.request(req)
end

puts "Response: #{res.body}"
`),l},"python/requests":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import requests

# Extract parameters from the options object
fullUrl = "`),e(n(f)),e(`"
method = "`),e(n(b)),e(`"
mimeType = "`),e(n(_)),e(`"
headers = {
    `),g.forEach(function(r){m(this,a),e(`
        '`),e(n(r.name)),e("': '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
}
postData = {
`),d.forEach(function(r){m(this,a),e(`
'`),e(n(r.name)),e("': "),Array.isArray(r.value)||i(r.value)==="object"?(e(`
    '`),e(n(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(n(r.value)),e(`',
`)),e(`
`)}.bind(this)),e(`
}
cookies = {
    `),s.forEach(function(r){m(this,a),e(`
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
`),l},"python/http":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import http.client

# Extract parameters from the options object
fullUrl = "`),e(n(f)),e(`"
method = "`),e(n(b)),e(`"
mimeType = "`),e(n(_)),e(`"
headers = [
    `),g.forEach(function(r){m(this,a),e(`
        ('`),e(n(r.name)),e("', '"),e(n(r.value)),e(`'),
    `)}.bind(this)),e(`
]
postData = {
`),d.forEach(function(r){m(this,a),e(`
'`),e(n(r.name)),e("': "),Array.isArray(r.value)||i(r.value)==="object"?(e(`
    '`),e(n(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(n(r.value)),e(`',
`)),e(`
`)}.bind(this)),e(`
}
cookies = {
    `),s.forEach(function(r){m(this,a),e(`
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
`),l},"powershell/webrequest":function(t,n,o,u){var a=this;n=n||function(f){return f==null?"":String(f).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(f){return c[f]||f}var l="";function e(f){f!=null&&(l+=f)}return e('$url = "'),e(n(url)),e(`"
$method = "`),e(n(method)),e(`"
$mimeType = "`),e(n(mimeType)),e(`"

$headers = @{
`),headers.forEach(function(f){m(this,a),e(`
  "`),e(n(f.name)),e('" = "'),e(n(f.value)),e(`",
`)}.bind(this)),e(`
}

$cookies = @{
`),cookies.forEach(function(f){m(this,a),e(`
  "`),e(n(f.name)),e('" = "'),e(n(f.value)),e(`",
`)}.bind(this)),e(`
}

`),method==="GET"?e(`
  $req = Invoke-WebRequest -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),postData.forEach(function(f){m(this,a),e(`
    "`),e(n(f.name)),e('" = '),Array.isArray(f.value)||i(f.value)==="object"?(e(`
      `),e(n(JSON.stringify(f.value))),e(` | ConvertTo-Json -Depth 100 -Compress
    `)):(e(`
      '`),e(n(f.value)),e(`'
    `)),e(`,
  `)}.bind(this)),e(`
  }

  $req = Invoke-WebRequest -Uri $url -Method $method -Body $body -Headers $headers -ContentType $mimeType -Cookies $cookies
`)),e(`

Write-Host "Response: " -ForegroundColor Green
Write-Host $req.Content
`),l},"powershell/restmethod":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
$url = "`),e(n(f)),e(`"
$method = "`),e(n(b)),e(`"
$mimeType = "`),e(n(_)),e(`"

$headers = @{
`),g.forEach(function(r){m(this,a),e(`
  "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
`)}.bind(this)),e(`
}

$cookies = @{
`),s.forEach(function(r){m(this,a),e(`
  "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
`)}.bind(this)),e(`
}

`),b==="GET"?e(`
  $req = Invoke-RestMethod -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),d.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" = '),Array.isArray(r.value)||i(r.value)==="object"?(e(`
      `),e(n(JSON.stringify(r.value))),e(` | ConvertTo-Json -Depth 100 -Compress
    `)):(e(`
      '`),e(n(r.value)),e(`'
    `)),e(`,
  `)}.bind(this)),e(`
  }

  $req = Invoke-RestMethod -Uri $url -Method $method -Body $body -Headers $headers -ContentType $mimeType -Cookies $cookies
`)),e(`

Write-Host "Response: " -ForegroundColor Green
Write-Host $req | ConvertTo-Json -Depth 100 -Compress
`),l},"php/http2":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`

<?php
    $host = parse_url("`),e(n(f)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(n(f)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),_.forEach(function(s){m(this,a),e(' "'),e(n(s.name)),e('" => "'),e(n(s.value)),e('", ')}.bind(this)),e(` );
    $httpCookies = array( `),d.forEach(function(s){m(this,a),e(' "'),e(n(s.name)),e('" => "'),e(n(s.value)),e('", ')}.bind(this)),e(` );
    $httpBody = null;
    if ("`),e(n(b)),e(`" === "POST") {
        `),Array.isArray(g)?(e(`
        $postData = array( `),g.forEach(function(s){m(this,a),e(" '"),e(n(s.name)),e("' => '"),e(n(Array.isArray(s.value)?JSON.stringify(s.value):encodeURIComponent(s.value))),e("', ")}.bind(this)),e(` );
        $httpBody = http_build_query($postData);
        `)):i(g)==="object"&&(e(`
        $httpBody = json_encode(`),e(n(g)),e(`);
    `)),e(`
    }
    $streamContext = stream_context_create([
        'http' => [ 'method' => "`),e(n(b)),e(`",
        'header' => implode("\\r\\n", $httpHeaders),
        'content' => $httpBody, 'follow_location' => false,
        'protocol_version' => 2.0,
    ],
        'ssl' => [ 'verify_peer' => false, 'verify_peer_name' => false, ],
    ]);
    $response = file_get_contents("https://$host$path", false, $streamContext);
    echo "Response: " . $response;
?>
`),l},"php/http1":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`

<?php
    $host = parse_url("`),e(n(f)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(n(f)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),_.forEach(function(s){m(this,a),e(' "'),e(n(s.name)),e(": "),e(n(s.value)),e('", ')}.bind(this)),e(` );
    $httpCookies = array( `),d.forEach(function(s){m(this,a),e(' "'),e(n(s.name)),e('" => "'),e(n(s.value)),e('", ')}.bind(this)),e(` );
    $httpBody = null;
    if ("`),e(n(b)),e(`" === "POST") {
    `),Array.isArray(g)?(e(`
    `),g.length===1&&g[0].type==="file"?(e(`
    $httpBody = new http\\Message\\Body(fopen('`),e(n(g[0].value)),e(`', 'r'));
    `)):(e(`
     $postData = array( `),g.forEach(function(s){m(this,a),e(" '"),e(n(s.name)),e("' => '"),e(n(Array.isArray(s.value)?JSON.stringify(s.value):encodeURIComponent(s.value))),e("', ")}.bind(this)),e(` );
     $httpBody = new http\\Message\\Body(http_build_query($postData));
    `)),e(" ")):i(g)==="object"&&(e(`
    $postData = '`),e(n(JSON.stringify(g))),e(`';
    $httpBody = new http\\Message\\Body($postData);
    `)),e(` }
    $request = new http\\Client\\Request("`),e(n(b)),e(`", "http://$host$path");
    $request->setHeaders($httpHeaders);
    $request->setCookies($httpCookies);
    $request->setBody($httpBody);
    $client = new http\\Client;
    $client->enqueue($request);
    $response = $client->send();
    echo "Response: " . $response->getBody();
?>
`),l},"php/guzzle":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`
<?php
    use GuzzleHttp\\Exception\\RequestException;
    $client = new Client();
    $url = "`),e(n(f)),e(`";
    $headers = array( `),_.forEach(function(s){m(this,a),e(' "'),e(n(s.name)),e('" => "'),e(n(s.value)),e('", ')}.bind(this)),e(` );
    $cookies = array( `),d.forEach(function(s){m(this,a),e(' "'),e(n(s.name)),e('" => "'),e(n(s.value)),e('", ')}.bind(this)),e(` );
    $requestBody = null;
    if ("`),e(n(b)),e(`" === "POST") {
    `),Array.isArray(g)?(e(`
    `),g.length===1&&g[0].type==="file"?(e(`
        $requestBody = array( 'multipart' => [ [ 'name' => '`),e(n(g[0].name)),e("', 'contents' => fopen('"),e(n(g[0].value)),e(`', 'r') ] ] );
    `)):(e(`
        $postData = array( `),g.forEach(function(s){m(this,a),e(" '"),e(n(s.name)),e("' => '"),e(n(Array.isArray(s.value)?JSON.stringify(s.value):encodeURIComponent(s.value))),e("', ")}.bind(this)),e(` );
        $requestBody = http_build_query($postData);
    `)),e(`
    `)):i(g)==="object"&&(e(`
    $postData = '`),e(n(JSON.stringify(g))),e(`';
    $requestBody = $postData;
    `)),e(` }
    try {
        $response = $client->request('`),e(n(b)),e(`', $url, [
            'headers' => $headers,
            'cookies' => $cookies,
            'body' => $requestBody,
        ]);
        echo "Response: " . $response->getBody();
    } catch (RequestException $e) {
        echo "Error: " . $e->getMessage();
    }

?>
`),l},"php/curl":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`

<?php

    $url = "`),e(n(f)),e(`";
    $requestHeaders = array( `),_.forEach(function(s){m(this,a),e(' "'),e(n(s.name)),e(": "),e(n(s.value)),e('", ')}.bind(this)),e(` );
    $requestCookies = array( `),d.forEach(function(s){m(this,a),e(' "'),e(n(s.name)),e("=<"),e(n(s.value)),e('>", ')}.bind(this)),e(` );
    $requestBody = null; if ("`),e(n(b)),e(`" === "POST") {
    `),Array.isArray(g)?(e(`
    `),g.length===1&&g[0].type==="file"?(e(`
    $requestBody = array( '`),e(n(g[0].name)),e("' => new [](poeCURLFile('"),e(n(g[0].value)),e(`') );
    `)):(e(`
    $postData = array( `),g.forEach(function(s){m(this,a),e(`
        '`),e(n(s.name)),e("' => '"),e(n(Array.isArray(s.value)?JSON.stringify(s.value):encodeURIComponent(s.value))),e(`',
    `)}.bind(this)),e(` );
    $requestBody = http_build_query($postData); `)),e(`
    `)):i(g)==="object"&&(e(`
    $postData = array( `),Object.keys(g).forEach(function(s){m(this,a),e(`
        '`),e(n(s)),e("' => '"),e(n(Array.isArray(g[s])?JSON.stringify(g[s]):encodeURIComponent(g[s]))),e(`',
    `)}.bind(this)),e(` );
    $requestBody = http_build_query($postData); `)),e(` } $ch = curl_init(); curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_setopt($ch, CURLOPT_HTTPHEADER, $requestHeaders);
    curl_setopt($ch, CURLOPT_COOKIE, implode("; ", $requestCookies));
    if ("`),e(n(b)),e(`" === "POST") {
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $requestBody); }
    $response = curl_exec($ch);
    curl_close($ch);
    echo "Response: " . $response;
?>
`),l},"perl/useragent":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`
`),e(`
use LWP::UserAgent;
my $ua = LWP::UserAgent->new;

`),e(`
my $fullUrl = '`),e(n(f)),e(`';

`),e(`
my $request = HTTP::Request->new('`),e(n(b)),e(`', $fullUrl);

`),_.length>0&&(e(`
`),e(`
`),_.forEach(function(s){m(this,a),e(`
    $request->header('`),e(n(s.name)),e("', '"),e(n(s.value)),e(`');
`)}.bind(this)),e(`
`)),e(`

`),d.length>0&&(e(`
`),e(`
`),d.forEach(function(s){m(this,a),e(`
    $ua->cookie_jar->set_cookie(0, '`),e(n(s.name)),e("', '"),e(n(s.value)),e(`', '/', 'example.com');
`)}.bind(this)),e(`
`)),e(`

`),g.length>0&&(e(`
`),e(`
`),Array.isArray(g)?(e(`
`),g.length===1&&g[0].type==="file"?(e(`
my $file = '`),e(n(g[0].value)),e(`';
$request->content($file);
`)):(e(`
my $post_data = {
`),g.forEach(function(s){m(this,a),e(`
    '`),e(n(s.name)),e("' => '"),e(n(Array.isArray(s.value)?JSON.stringify(s.value):s.value)),e(`',
`)}.bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):i(g)==="object"&&(e(`
my $post_data = {
`),Object.keys(g).forEach(function(s){m(this,a),e(`
'`),e(n(s)),e("' => '"),e(n(Array.isArray(g[s])?JSON.stringify(g[s]):g[s])),e(`',
`)}.bind(this)),e(`
};
$request->content(join('&', map { $ . '=' . $post_data->{$_} } keys %$post_data));
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
`),l},"perl/tiny":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
`),e(`
use HTTP::Tiny;
my $http = HTTP::Tiny->new;

`),e(`
my $fullUrl = '`),e(n(f)),e(`';

`),e(`
my $options = {
headers => {
    'Content-Type' => '`),e(n(_)),e(`',
    `),g.forEach(function(r){m(this,a),e(`
    '`),e(n(r.name)),e("' => '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
},
`),s.forEach(function(r){m(this,a),e(`
cookies => {
    '`),e(n(r.name)),e("' => '"),e(n(r.value)),e(`',
},
`)}.bind(this)),e(`
};

`),e(`
`),d.length>0&&(e(`
`),Array.isArray(d)?(e(`
`),d.length===1&&d[0].type==="file"?(e(`
my $file = '`),e(n(d[0].value)),e(`';
$options->{content} = $file;
`)):(e(`
my $post_data = {
`),d.forEach(function(r){m(this,a),e(`
    '`),e(n(r.name)),e("' => '"),e(n(Array.isArray(r.value)?JSON.stringify(r.value):r.value)),e(`',
`)}.bind(this)),e(`
};
$options->{content} = join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data);
`)),e(`
`)):i(d)==="object"&&(e(`
my $post_data = {
`),Object.keys(d).forEach(function(r){m(this,a),e(`
    '`),e(n(r)),e("' => '"),e(n(Array.isArray(d[r])?JSON.stringify(d[r]):d[r])),e(`',
`)}.bind(this)),e(`
};
$options->{content} = join('&', map { $ . '=' . $post_data->{$_} } keys %$post_data);
`)),e(`
`)),e(`

`),e(`
my $response = $http->request('`),e(n(b)),e(`', $fullUrl, $options);

`),e(`
if ($response->{success}) {
    print "Response:\\n";
    print $response->{content};
}
`),e(`
else {
    print "Error: " . $response->{status} . "\\n";
}
`),l},"perl/request":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`
`),e(`
use HTTP::Request;
my $request = HTTP::Request->new('`),e(n(b)),e("', '"),e(n(f)),e(`');

`),_.length>0&&(e(`
`),e(`
`),_.forEach(function(s){m(this,a),e(`
$request->header('`),e(n(s.name)),e("', '"),e(n(s.value)),e(`');
`)}.bind(this)),e(`
`)),e(`

`),d.length>0&&(e(`
`),e(`
`),d.forEach(function(s){m(this,a),e(`
$request->header('Cookie', '`),e(n(s.name)),e("="),e(n(s.value)),e(`');
`)}.bind(this)),e(`
`)),e(`

`),g.length>0&&(e(`
`),e(`
`),Array.isArray(g)?(e(`
`),g.length===1&&g[0].type==="file"?(e(`
my $file = '`),e(n(g[0].value)),e(`';
$request->content($file);
`)):(e(`
my $post_data = {
`),g.forEach(function(s){m(this,a),e(`
    '`),e(n(s.name)),e("' => '"),e(n(Array.isArray(s.value)?JSON.stringify(s.value):s.value)),e(`',
`)}.bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):i(g)==="object"&&(e(`
my $post_data = {
`),Object.keys(g).forEach(function(s){m(this,a),e(`
'`),e(n(s)),e("' => '"),e(n(Array.isArray(g[s])?JSON.stringify(g[s]):g[s])),e(`',
`)}.bind(this)),e(`
};
$request->content(join('&', map { $ . '=' . $post_data->{$_} } keys %$post_data));
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
`),l},"ocaml/httpaf":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
(* Construct the request URL *)
let fullUrl = "`),e(n(f)),e(`" in
let headers = Httpaf.Headers.of_list [
  "Content-Type", "`),e(n(_)),e(`";
  `),g.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('", "'),e(n(r.value)),e(`";
  `)}.bind(this)),e(`
  `),s.forEach(function(r){m(this,a),e(`
    "Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`";
  `)}.bind(this)),e(`
] in
let body =
`),d.length>0?(e(`
  (match `),e(n(b)),e(` with
  | "GET" -> ""
  | _ ->
  let postData = [%yojson `),e(n(JSON.stringify(d))),e(`] in
  let rec build_body = function
  | Assoc [] -> ""       | Assoc ((name, value) :: xs) ->
  (match value with
  | String s -> name ^ "=" ^ Uri.pct_encode s         | Int i -> name ^ "=" ^ string_of_int i
  | Bool b -> name ^ "=" ^ string_of_bool b         | List l ->
  let body_list = List.map (fun x -> ("", x)) l in
  build_body (Assoc body_list)         | Assoc a ->
  let body_list = List.map (fun (key, value) -> (name ^ "[" ^ key ^ "]", value)) a in
  build_body (Assoc body_list))         ^ (if xs = [] then "" else "&" ^ build_body (Assoc xs))
  | _ -> failwith "Invalid post data format"
  in build_body postData)
`)):e(`
  ""
`),e(`
in
  let req = Httpaf.Request.create
  ~headers
  (Httpaf.Method.of_string "`),e(n(b)),e(`")
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
let error_handler exn =
  match exn with
  | Unix.Unix_error (Unix.ENETUNREACH, _, _) ->
    print_endline "Error: Network is unreachable"
  | Unix.Unix_error (Unix.ECONNREFUSED, _, _) ->
    print_endline "Error: Connection refused"
  | _ ->
    Printf.eprintf "Error: %s\\n" (Printexc.to_string exn);
    exit 1
in
Lwt.catch (fun () -> body) error_handler >>= fun _ -> Lwt.return_unit
`),l},"ocaml/cohttp_lwt":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
(* Set up the request *)
let fullUrl = "`),e(n(f)),e(`" in
let headers = Cohttp.Header.of_list [
  "Content-Type", "`),e(n(_)),e(`";
    `),g.forEach(function(r){m(this,a),e(`
      "`),e(n(r.name)),e('", "'),e(n(r.value)),e(`";
    `)}.bind(this)),e(`
    `),s.forEach(function(r){m(this,a),e(`
      "Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`";
    `)}.bind(this)),e(`
    ] in
  let body =
  `),d.length>0?(e(`
    (match `),e(n(b)),e(` with
    | "GET" -> Cohttp_lwt.Body.empty
    | _ ->
    let postData = [%yojson `),e(n(JSON.stringify(d))),e(`] in
    let rec build_body = function
    | Assoc [] -> Cohttp_lwt.Body.empty       | Assoc ((name, value) :: xs) ->
    (match value with
    | String s -> Cohttp_lwt.Body.of_string (name ^ "=" ^ Uri.pct_encode s)         | Int i -> Cohttp_lwt.Body.of_string (name ^ "=" ^ string_of_int i)
    | Bool b -> Cohttp_lwt.Body.of_string (name ^ "=" ^ string_of_bool b)         | List l ->
    let body_list = List.map (fun x -> ("", x)) l in
    build_body (Assoc body_list)         | Assoc a ->
    let body_list = List.map (fun (key, value) -> (name ^ "[" ^ key ^ "]", value)) a in
    build_body (Assoc body_list))         >>= fun b1 ->          if xs = [] then Lwt.return b1         else build_body (Assoc xs) >>= fun b2 -> Lwt.return (Cohttp_lwt.Body.concat [b1; Cohttp_lwt.Body.of_string "&"; b2])
    | _ -> failwith "Invalid post data format"
    in build_body postData)
  `)):e(`
    Cohttp_lwt.Body.empty
  `),e(`
in
let req = Cohttp_lwt_unix.Client.call (`),e(n(b)),e(` |> Cohttp.Code.method_of_string) fullUrl ~headers ~body in
let run_request () =
req >>= fun (resp, body) ->
let status = Cohttp.Response.status resp in
let code = Cohttp.Code.code_of_status status in
let%bind body = Cohttp_lwt.Body.to_string body in
if code = 200 then Lwt.return (Ok body)   else Lwt.return (Error ("Error: " ^ body))
in
  let error_handler exn =
  match exn with
    | Unix.Unix_error (Unix.ENETUNREACH, _, _) ->
      print_endline "Error: Network is unreachable"
    | Unix.Unix_error (Unix.ECONNREFUSED, _, _) ->
      print_endline "Error: Connection refused"
    | _ ->
    Printf.eprintf "Error: %s\\n" (Printexc.to_string exn);
    exit 1
in
  Lwt.catch run_request error_handler >>= function
    | Ok body -> print_endline ("Response: " ^ body); Lwt.return_unit | Error err -> print_endline err; exit 1
`),l},"objectivec/nsurlsession":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(f),e(`";
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),g.forEach(function(r){m(this,a),e(`
    [headers setObject:@"`),e(n(r.value)),e('" forKey:@"'),e(n(r.name)),e(`"];
`)}.bind(this)),e(`
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),d.forEach(function(r){var w=this;m(this,a),e(`
`),Array.isArray(r.value)?(e(`
    NSMutableArray *`),e(n(r.name)),e(`Array = [NSMutableArray array];
    `),r.value.forEach(function(O){var T=this;m(this,w),e(`
    `),i(O)==="object"?(e(`
    NSDictionary *`),e(n(r.name)),e(`Item = @{
    `),Object.keys(O).forEach(function(A){m(this,T),e(`
        @"`),e(n(A)),e('": '),e(n(JSON.stringify(O[A]))),e(`,
    `)}.bind(this)),e(`
    };
    [`),e(n(r.name)),e("Array addObject:"),e(n(r.name)),e(`Item];
    `)):(e(`
        [`),e(n(r.name)),e('Array addObject:@"'),e(n(O)),e(`"];
    `)),e(`
    `)}.bind(this)),e(`
    [parameters setObject:`),e(n(r.name)),e('Array forKey:@"'),e(n(r.name)),e(`"];
`)):i(r.value)==="object"?(e(`
    NSDictionary *`),e(n(r.name)),e(`Dict = @{
    `),Object.keys(r.value).forEach(function(O){m(this,w),e(`
        @"`),e(n(O)),e('": '),e(n(JSON.stringify(r.value[O]))),e(`,
    `)}.bind(this)),e(`
    };
    [parameters setObject:`),e(n(r.name)),e('Dict forKey:@"'),e(n(r.name)),e(`"];
`)):(e(`
    [parameters setObject:@"`),e(n(r.value)),e('" forKey:@"'),e(n(r.name)),e(`"];
`)),e(`
`)}.bind(this)),e(`
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:fullUrl]];
request.HTTPMethod = @"`),e(n(b)),e(`";
[request setValue:@"`),e(n(_)),e(`" forHTTPHeaderField:@"Content-Type"];
for (NSString *key in headers) {
    [request setValue:headers[key] forHTTPHeaderField:key];
}
NSURLSessionConfiguration *config = [NSURLSessionConfiguration defaultSessionConfiguration];
NSURLSession *session = [NSURLSession sessionWithConfiguration:config];

if (parameters.count > 0) {
    NSError *jsonError;
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:&jsonError];
    if (jsonError) {
        NSLog(@"Error converting parameters to JSON: %@", jsonError);
        return;
    }
    request.HTTPBody = jsonData;
}

NSHTTPCookieStorage *cookieStorage = [NSHTTPCookieStorage sharedHTTPCookieStorage];
`),s.forEach(function(r){m(this,a),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(n(r.domain)),e(`",
    NSHTTPCookiePath: @"`),e(n(r.path)),e(`",
    NSHTTPCookieName: @"`),e(n(r.name)),e(`",
    NSHTTPCookieValue: @"`),e(n(r.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[cookieStorage setCookie:cookie];
`)}.bind(this)),e(`

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
`),l},"objectivec/afnetworking":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(f),e(`";

// Set up the request headers
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),_.forEach(function(s){m(this,a),e(`
    [headers setObject:@"`),e(n(s.value)),e('" forKey:@"'),e(n(s.name)),e(`"];
`)}.bind(this)),e(`

// Add cookies to the request
`),d.forEach(function(s){m(this,a),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(n(s.domain)),e(`",
    NSHTTPCookiePath: @"`),e(n(s.path)),e(`",
    NSHTTPCookieName: @"`),e(n(s.name)),e(`",
    NSHTTPCookieValue: @"`),e(n(s.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
`)}.bind(this)),e(`

// Set up the request parameters
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),g.forEach(function(s){var r=this;m(this,a),e(`
    `),Array.isArray(s.value)?(e(`
    NSMutableArray *`),e(n(s.name)),e(`Array = [NSMutableArray array];
    `),s.value.forEach(function(w){m(this,r),e(`
    `),i(w)==="object"?(e(`
    NSDictionary *`),e(n(s.name)),e(`Object = @{
        '`),e(n(Object.keys(w)[0])),e("': "),e(n(JSON.stringify(w[Object.keys(w)[0]]))),e(`,
    };
    [`),e(n(s.name)),e("Array addObject:"),e(n(s.name)),e(`Object];
    `)):(e(`
        [`),e(n(s.name)),e('Array addObject:@"'),e(n(encodeURIComponent(w))),e(`"];
    `)),e(`
    `)}.bind(this)),e(`
    [parameters setObject:`),e(n(s.name)),e('Array forKey:@"'),e(n(s.name)),e(`"];
    `)):i(s.value)==="object"?(e(`
        NSDictionary *`),e(n(s.name)),e(`Object = @{
        '`),e(n(Object.keys(s.value)[0])),e("': "),e(n(JSON.stringify(s.value[Object.keys(s.value)[0]]))),e(`,
        };
        [parameters setObject:`),e(n(s.name)),e('Object forKey:@"'),e(n(s.name)),e(`"];
    `)):(e(`
        [parameters setObject:@"`),e(n(encodeURIComponent(s.value))),e('" forKey:@"'),e(n(s.name)),e(`"];
    `)),e(`
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
NSString *method = @"`),e(n(b)),e(`";
if ([method isEqualToString:@"GET"]) {
    [manager GET:fullUrl parameters:parameters headers:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id _Nullable responseObject) {
        NSLog(@"Response: %@", responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"Error: %@", error);
    }];
} else if ([method isEqualToString:@"POST"]) {
    [manager POST:fullUrl parameters:parameters headers:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id _Nullable responseObject) {
        NSLog(@"Response: %@", responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"Error: %@", error);
    }];
} else if ([method isEqualToString:@"PUT"]) {
    [manager PUT:fullUrl parameters:parameters headers:nil success:^(NSURLSessionDataTask * _Nonnull task, id _Nullable responseObject) {
        NSLog(@"Response: %@", responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"Error: %@", error);
    }];
} else if ([method isEqualToString:@"DELETE"]) {
    [manager DELETE:fullUrl parameters:parameters headers:nil success:^(NSURLSessionDataTask * _Nonnull task, id _Nullable responseObject) {
        NSLog(@"Response: %@", responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"Error: %@", error);
    }];
} else {
    // Handle unsupported methods
}
`),l},"lua/httpclient":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
local http_client = require("httpclient")

-- Extract parameters from the options object
local url = '`),e(n(f)),e(`'
local method = '`),e(n(b)),e(`'
local mimeType = '`),e(n(_)),e(`'
local headers = {
`),g.forEach(function(r){m(this,a),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local postData = {
`),d.forEach(function(r){var w=this;m(this,a),e(`
    ['`),e(n(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
        {
        `),r.value.forEach(function(O,T){m(this,w),e(`
            `),i(O)==="object"?(e(`
                ['`),e(n(Object.keys(O)[0])),e("'] = "),e(n(JSON.stringify(O[Object.keys(O)[0]]))),e(`,
            `)):(e(`
                `),e(n(T)),e(" = '"),e(n(encodeURIComponent(O))),e(`',
            `)),e(`
        `)}.bind(this)),e(`
        },
    `)):i(r.value)==="object"?(e(`
        {
        ['`),e(n(Object.keys(r.value)[0])),e("'] = "),e(n(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
        },
    `)):(e(`
        '`),e(n(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}.bind(this)),e(`
}
local cookies = {
`),s.forEach(function(r){m(this,a),e(`
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
    request.data = postData
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
`),l},"lua/http":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
local http = require("socket.http")
local ltn12 = require("ltn12")

-- Extract parameters from the options object
local url = '`),e(n(f)),e(`'
local method = '`),e(n(b)),e(`'
local mimeType = '`),e(n(_)),e(`'
local headers = {
`),g.forEach(function(r){m(this,a),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local postData = {
`),d.forEach(function(r){var w=this;m(this,a),e(`
    ['`),e(n(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
    {
    `),r.value.forEach(function(O,T){m(this,w),e(`
    `),i(O)==="object"?(e(`
        ['`),e(n(Object.keys(O)[0])),e("'] = "),e(n(JSON.stringify(O[Object.keys(O)[0]]))),e(`,
    `)):(e(`
        `),e(n(T)),e(" = '"),e(n(encodeURIComponent(O))),e(`',
    `)),e(`
    `)}.bind(this)),e(`
    },
    `)):i(r.value)==="object"?(e(`
    {
    ['`),e(n(Object.keys(r.value)[0])),e("'] = "),e(n(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
    },
    `)):(e(`
    '`),e(n(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}.bind(this)),e(`
}
local cookies = {
`),s.forEach(function(r){m(this,a),e(`
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
    request.source = postData
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
`),l},"lua/curl":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
local curl = require("cURL")

-- Extract parameters from the options object
local url = '`),e(n(f)),e(`'
local method = '`),e(n(b)),e(`'
local mimeType = '`),e(n(_)),e(`'
local headers = {
`),g.forEach(function(r){m(this,a),e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
`)}.bind(this)),e(`
}
local postData = {
`),d.forEach(function(r){m(this,a),e(`
    `),Array.isArray(r.value)||i(r.value)==="object"?(e(`
    ['`),e(n(r.name)),e("'] = "),e(n(JSON.stringify(r.value))),e(`,
    `)):(e(`
    ['`),e(n(r.name)),e("'] = '"),e(n(r.value)),e(`',
    `)),e(`
`)}.bind(this)),e(`
}
local cookies = {
`),s.forEach(function(r){m(this,a),e(`
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
        command = command .. key .. "[]=" .. item .. "&"
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
`),l},"kotlin/okhttp3":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import okhttp3.*
import java.io.IOException

val client = OkHttpClient()

val url = "`),e(n(f)),e(`"
val method = "`),e(n(b)),e(`"
val mimeType = "`),e(n(_)),e(`"

val body = `),d.length>0?(e(`
  `),d.forEach(function(r){m(this,a),e(`
  `),Array.isArray(r.value)||i(r.value)==="object"?(e(`
  "`),e(n(r.name)),e('" to '),e(n(JSON.stringify(r.value))),e(`,
  `)):(e(`
  "`),e(n(r.name)),e('" to "'),e(n(r.value)),e(`",
  `)),e(`
  `)}.bind(this)),e(`
  .joinToString(separator = "&") { "\${it.first}=\${URLEncoder.encode(it.second.toString(), "UTF-8")}" }
  .let { RequestBody.create(MediaType.parse(mimeType), it) }
`)):e(`
  null
`),e(`

val request = Request.Builder()
.url(url)
.`),e(n(b.toLowerCase())),e(`(body)
`),g.forEach(function(r){m(this,a),e(`
  .addHeader("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`")
`)}.bind(this)),e(`
`),s.forEach(function(r){m(this,a),e(`
  .addHeader("Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`")
`)}.bind(this)),e(`
.build()

val response = client.newCall(request).execute()

println("Response: " + response.body()?.string())
`),l},"kotlin/java":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

val url = URL("`),e(n(f)),e(`")
val connection = url.openConnection() as HttpURLConnection
connection.requestMethod = "`),e(n(b)),e(`"

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach(function(r){m(this,a),e(`
connection.setRequestProperty("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`")
`)}.bind(this)),e(`
`)),e(`

`),s.length>0&&(e(`
// Add cookies to the request
`),s.forEach(function(r){m(this,a),e(`
connection.addRequestProperty("Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`")
`)}.bind(this)),e(`
`)),e(`

// Send the request
`),d.length>0?b==="POST"?(e(`
val postData = "`),e(n(d.map(function(r){var w=this;if(m(this,a),Array.isArray(r.value))return r.value.map(function(A){return m(this,w),encodeURIComponent(A.toString(),"UTF-8")}.bind(this)).map(function(A){return m(this,w),r.name+"="+A}.bind(this)).join("&");if(i(r.value)==="object"){var O=Object.values(r.value).map(function(A){return m(this,w),encodeURIComponent(A.toString(),"UTF-8")}.bind(this)),T=Object.keys(r.value);return O.map(function(A,$){return m(this,w),r.name+"["+T[$]+"]="+A}.bind(this)).join("&")}return r.name+"="+encodeURIComponent(r.value.toString(),"UTF-8")}.bind(this)).join("&"))),e(`".toByteArray(Charsets.UTF_8)
connection.setRequestProperty("Content-Type", "`),e(n(_)),e(`")
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
`),l},"kotlin/fuel":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import com.github.kittinunf.fuel.*
import com.github.kittinunf.fuel.core.*
import com.github.kittinunf.result.*

val fullUrl = "`),e(n(f)),e(`"

val requestHeaders = listOf(
    `),g.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" to "'),e(n(r.value)),e(`",
    `)}.bind(this)),e(`
)

val requestCookies = listOf(
    `),s.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" to "'),e(n(r.value)),e(`",
    `)}.bind(this)),e(`
)

val parameters = listOf(
    `),d.forEach(function(r){m(this,a),e(`
    `),Array.isArray(r.value)||i(r.value)==="object"?(e(`
    "`),e(n(r.name)),e('" to '),e(n(JSON.stringify(r.value))),e(`,
    `)):(e(`
    "`),e(n(r.name)),e('" to "'),e(n(r.value)),e(`",
    `)),e(`
    `)}.bind(this)),e(`
)

val request = Fuel.request(Method.`),e(n(b)),e(`, fullUrl)
    .header(requestHeaders)
    .header("Content-Type", "`),e(n(_)),e(`")
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
`),l},"javascript/jquery":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  const fullUrl = url;

  // Set up the request configuration object
  const config = {
    url: fullUrl,
    type: method,
    headers: {
      'Content-Type': mimeType,
      `),g.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
    },
    data: `),d.length===1&&d[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):d.length>0?e(`postData
      `):e(" null "),e(`
  };

  // Add cookies to the request
  `),s.forEach(function(r){m(this,a),e("document.cookie = '"),e(n(r.name)),e("="),e(n(r.value)),e(`';
  `)}.bind(this)),e(`

  // Send the request using jQuery
  try {
    const data = await $.ajax(config);
    console.log('Response:', data);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Example usage
const url = '`),e(n(f)),e(`';
const method = '`),e(n(b)),e(`';
const mimeType = '`),e(n(_)),e(`';
const headers = {
  `),g.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
};
const cookies = {
  `),s.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
};
const postData = `),e(JSON.stringify(d,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),l},"javascript/fetch":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  // Construct the request configuration object
  var config = {
    method: method,
    headers: {
      'Content-Type': mimeType,
      `),g.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
    },
    body: `),d.length===1&&d[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):d.length>0?e(`postData
      `):e(" null "),e(`
  };

  // Add cookies to the request
  `),s.forEach(function(r){m(this,a),e("document.cookie = '"),e(n(r.name)),e("="),e(n(r.value)),e(`';
  `)}.bind(this)),e(`

  // Send the request using fetch
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }
    const data = await response.text();
    console.log('Response:', data);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Example usage
const url = '`),e(n(f)),e(`';
const method = '`),e(n(b)),e(`';
const mimeType = '`),e(n(_)),e(`';
const headers = {
  `),g.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
};
const cookies = {
  `),s.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
};
const postData = `),e(JSON.stringify(d,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),l},"javascript/axios":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
// Import the Axios library
import axios from 'axios';

async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  // Construct the request configuration object
  var config = {
    method: method,
    url: url,
    headers: {
      'Content-Type': mimeType,
      `),g.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
    },
    data: `),d.length===1&&d[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):d.length>0?e(`postData
      `):e(" undefined "),e(`
  };

  // Add cookies to the request
  `),s.forEach(function(r){m(this,a),e("document.cookie = '"),e(n(r.name)),e("="),e(n(r.value)),e(`';
  `)}.bind(this)),e(`

  // Send the request using Axios
  try {
    const response = await axios(config);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Example usage
const url = '`),e(n(f)),e(`';
const method = '`),e(n(b)),e(`';
const mimeType = '`),e(n(_)),e(`';
const headers = {
  `),g.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
};
const cookies = {
  `),s.forEach(function(r){m(this,a),e("'"),e(n(r.name)),e("': '"),e(n(r.value)),e("',")}.bind(this)),e(`
};
const postData = `),e(JSON.stringify(d,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),l},"javascript/xmlhttprequest":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  const xhr = new XMLHttpRequest();

  // Construct the request URL
  const fullUrl = url;

  // Set up the request
  xhr.open(method, fullUrl, true);
  xhr.setRequestHeader('Content-Type', mimeType);

  // Add headers to the request
  headers.forEach(header => {
    xhr.setRequestHeader(header.name, header.value);
  });

  // Add cookies to the request
  cookies.forEach(cookie => {
    document.cookie = \`\${cookie.name}=\${cookie.value}\`;
  });

  // Send the request
if (Array.isArray(postData)) {
  if (postData.length > 0) {
    if (postData.some(param => param.type === 'file')) {
      xhr.send(new FormData(document.getElementById('#file_upload_form')));
    } else {
      const encodedParams = postData.map(param => \${param.name}=\${encodeURIComponent(param.value)}).join('&');
      xhr.send(encodedParams);
    }
  } else {
    xhr.send();
  }
} else if (typeof postData === 'object' && postData !== null) {
    xhr.send(JSON.stringify(postData));
} else {
  xhr.send();
}

  // Handle the response
  try {
    await new Promise((resolve, reject) => {
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {
            console.log('Response:', this.responseText);
            resolve(this.responseText);
          } else {
            reject(new Error(\`Request failed with status code \${this.status}\`));
          }
        }
      };
    });
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Example usage
const url = '`),e(n(f)),e(`';
const method = '`),e(n(b)),e(`';
const mimeType = '`),e(n(_)),e(`';
const headers = [
  `),g.forEach(function(r){m(this,a),e("{ name: '"),e(n(r.name)),e("', value: '"),e(n(r.value)),e("' },")}.bind(this)),e(`
];
const cookies = [
  `),s.forEach(function(r){m(this,a),e("{ name: '"),e(n(r.name)),e("', value: '"),e(n(r.value)),e("' },")}.bind(this)),e(`
];

const postData = `),e(JSON.stringify(d,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),l},"java/unirest":function(t,n,o,u){var a=this;n=n||function(O){return O==null?"":String(O).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(O){return c[O]||O}var l="";function e(O){O!=null&&(l+=O)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;if(e(`
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class Main {
    public static void main(String[] args) {
        // Construct the request URL
        String fullUrl = "`),e(n(f)),e(`";

        // Set up the request
        com.mashape.unirest.http.HttpRequestWithBody request =
        Unirest.`),e(n(b.toLowerCase())),e(`(fullUrl)
            .header("Content-Type", "`),e(n(_)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach(function(O){m(this,a),e(`
        request.header("`),e(n(O.name)),e('", "'),e(n(O.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),s.length>0&&(e(`
        // Add cookies to the request
        `),s.forEach(function(O){m(this,a),e(`
        request.cookie("`),e(n(O.name)),e('", "'),e(n(O.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),d.length>0){if(e(`
        // Set up the request body
        `),Array.isArray(d)){if(e(`
        `),d.length===1&&d[0].type==="file")e(`
            // Upload a file
            request.field("`),e(n(d[0].name)),e('", new java.io.File("'),e(n(d[0].value)),e(`"));
        `);else{if(e(`
        // Send form data or raw data
        `),_==="application/x-www-form-urlencoded"){e(`
        `);var r=d.filter(function(O){return m(this,a),!Array.isArray(O.value)}.bind(this));e(`
        `);var w=d.filter(function(O){return m(this,a),Array.isArray(O.value)}.bind(this));e(`
        request.field("`),e(n(r.map(function(O){return m(this,a),O.name}.bind(this)).join('", "'))),e(`",
        `),e(n(r.map(function(O){return m(this,a),'encodeURIComponent("'+O.value+'")'}.bind(this)).join(", "))),e(`
        `),w.length>0&&(e(`
        `),w.forEach(function(O){var T=this;m(this,a),e(`
            , "`),e(n(O.name)),e(`[]",
            `),e(n(O.value.map(function(A){return m(this,T),'encodeURIComponent("'+A+'")'}.bind(this)).join(", "))),e(`
        `)}.bind(this)),e(`
        `)),e(`
        );
        `)}else e(`
        request.body("`),e(n(d.map(function(O){return m(this,a),O.value}.bind(this)).join(""))),e(`");
        `);e(`
        `)}e(`
        `)}else i(d)==="object"&&(e(`
        // Send JSON data
        request.body("`),e(n(JSON.stringify(d))),e(`");
        `));e(`
        `)}return e(`

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
`),l},"java/okhttp":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import java.io.IOException;
import okhttp3.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // Construct the request URL
        String fullUrl = "`),e(n(f)),e(`";

        // Set up the request
        OkHttpClient client = new OkHttpClient();
        Request.Builder requestBuilder = new Request.Builder()
            .url(fullUrl)
            .method("`),e(n(b)),e(`", null)
            .addHeader("Content-Type", "`),e(n(_)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach(function(r){m(this,a),e(`
        requestBuilder.addHeader("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),s.length>0&&(e(`
        // Add cookies to the request
        `),s.forEach(function(r){m(this,a),e(`
        requestBuilder.addHeader("Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),d.length>0&&(e(`
        // Set up the request body
        `),Array.isArray(d)?(e(`
        FormBody.Builder formBodyBuilder = new FormBody.Builder();
        `),d.forEach(function(r){m(this,a),e(`
        formBodyBuilder.add("`),e(n(r.name)),e('", "'),e(n(JSON.stringify(r.value))),e(`");
        `)}.bind(this)),e(`
        RequestBody requestBody = formBodyBuilder.build();
        requestBuilder.post(requestBody);
        `)):(e(`
        MediaType mediaType = MediaType.parse("`),e(n(_)),e(`");
        String requestBodyJson = "`),e(n(JSON.stringify(d))),e(`";
        RequestBody requestBody = RequestBody.create(requestBodyJson, mediaType);
        requestBuilder.post(requestBody);
        `)),e(`
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
`),l},"java/nethttp":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
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
        String fullUrl = "`),e(n(f)),e(`";

        // Set up the request
        URL url = new URL(fullUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("`),e(n(b)),e(`");
        connection.setRequestProperty("Content-Type", "`),e(n(_)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach(function(r){m(this,a),e(`
        connection.setRequestProperty("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),s.length>0&&(e(`
        // Add cookies to the request
        `),s.forEach(function(r){m(this,a),e(`
        connection.setRequestProperty("Cookie", "`),e(n(r.name)),e("="),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),d.length>0&&(e(`
        // Set up the request body
        connection.setDoOutput(true);
        `),Array.isArray(d)?(e(`
        String requestBody = "`),e(n(d.map(function(r){return m(this,a),r.name+"="+encodeURIComponent(r.value,"UTF-8")}.bind(this)).join("&"))),e(`";
        `)):(e(`
        String requestBody = new Gson().toJson(`),e(n(JSON.stringify(d))),e(`);
        `)),e(`
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
`),l},"java/asynchttp":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import org.asynchttpclient.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Construct the request URL
        String fullUrl = "`),e(n(f)),e(`";

        // Set up the request
        AsyncHttpClient client = Dsl.asyncHttpClient();
        RequestBuilder requestBuilder = new RequestBuilder("`),e(n(b)),e(`")
        .setUrl(fullUrl)
        .addHeader("Content-Type", "`),e(n(_)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach(function(r){m(this,a),e(`
        requestBuilder.addHeader("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),s.length>0&&(e(`
        // Add cookies to the request
        `),s.forEach(function(r){m(this,a),e(`
        requestBuilder.addCookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),d.length>0&&(e(`
            // Set up the request body
        `),d.length>0&&(e(`
        `),Array.isArray(d)?(e(`
        StringBuilder bodyBuilder = new StringBuilder();
        `),d.forEach(function(r){m(this,a),e(`
        bodyBuilder.append("`),e(n(r.name)),e('").append("=").append("Uri.EscapeDataString('),e(n(r.value)),e(`)").append("&");
        `)}.bind(this)),e(`
        String body = bodyBuilder.toString();
        requestBuilder.setBody(body.substring(0, body.length() - 1));
        `)):(e(`
        String body = new Gson().toJson(`),e(n(JSON.stringify(d))),e(`);
        requestBuilder.setBody(body);
        `)),e(`
        `)),e(`
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
`),l},"http/rfc7230":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
// https://www.rfc-editor.org/rfc/rfc7230
`),b==="GET"?(e(`
`),e(n(b)),e(" "),e(n(f)),e(` HTTP/1.1
`)):(e(`
`),e(n(b)),e(" "),e(n(f)),e(` HTTP/1.1
Content-Type: `),e(n(_)),e(`
`)),e(`

`),g.forEach(function(r){m(this,a),e(`
`),e(n(r.name)),e(": "),e(n(r.value)),e(`
`)}.bind(this)),e(`

`),s.forEach(function(r){m(this,a),e(`
Cookie: `),e(n(r.name)),e("="),e(n(r.value)),e(`
`)}.bind(this)),e(`

`),b==="POST"&&d.length>0&&(e(`
`),_==="application/x-www-form-urlencoded"?(e(`
`),e(n(d.map(function(r){return m(this,a),r.name+"="+encodeURIComponent(Array.isArray(r.value)||i(r.value)==="object"?JSON.stringify(r.value):r.value)}.bind(this)).join("&"))),e(`
`)):_==="application/json"?(e(`
`),e(n(JSON.stringify(d))),e(`
`)):_==="multipart/form-data"?(e(`
`),d.forEach(function(r){m(this,a),e(`
--`),e(n("boundary-"+Math.random().toString().substr(2))),e(`
Content-Disposition: form-data; name="`),e(n(r.name)),e(`"

`),e(n(Array.isArray(r.value)||i(r.value)==="object"?JSON.stringify(r.value):r.value)),e(`
`)}.bind(this)),e(`
--`),e(n("boundary-"+Math.random().toString().substr(2))),e(`-->
`)):(e(`
`),d.forEach(function(r){m(this,a),e(`
`),e(n(r.name)),e(": "),e(n(r.value)),e(`
`)}.bind(this)),e(`
`)),e(`
`)),e(`
`),l},"go/http":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`

package main

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"net/url"
	"strings"
)

func main() {
	// Construct the request URL
	url := "`),e(n(f)),e(`"

	// Construct the request body
	var body io.Reader
	`),g.length>0?(e(`
    `),g.length===1&&g[0].type==="file"?e(`
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
	body = formData
	`):(e(`
	form := url.Values{}
	`),g.forEach(function(s){var r=this;m(this,a),e(`
	`),Array.isArray(s.value)?(e(`
	`),s.value.forEach(function(w){m(this,r),e(`
	form.Add("`),e(n(s.name)),e('[]", fmt.Sprintf("%v", "'),e(n(w)),e(`"))
	`)}.bind(this)),e(`
	`)):i(s.value)==="object"?(e(`
	`),Object.keys(s.value).forEach(function(w){m(this,r),e(`
	form.Add("`),e(n(s.name)),e("["),e(n(w)),e(']", fmt.Sprintf("%v", "'),e(n(s.value[w])),e(`"))
	`)}.bind(this)),e(`
	`)):(e(`
	form.Add("`),e(n(s.name)),e('", fmt.Sprintf("%v", "'),e(n(s.value)),e(`"))
	`)),e(`
	`)}.bind(this)),e(`
	body = strings.NewReader(form.Encode())
	`)),e(`
	`)):e(`
	body = nil
	`),e(`

	// Create a new HTTP request
	req, err := http.NewRequest("`),e(n(b)),e(`", url, body)
	if err != nil {
		fmt.Println(err)
		return
	}

	`),_.length>0&&(e(`
	// Add headers to the request
	`),_.forEach(function(s){m(this,a),e(`
	req.Header.Set("`),e(n(s.name)),e('", "'),e(n(s.value)),e(`")
	`)}.bind(this)),e(`
	`)),e(`

	`),d.length>0&&(e(`
	// Add cookies to the request
	`),d.forEach(function(s){m(this,a),e(`
	req.AddCookie(&http.Cookie{Name: "`),e(n(s.name)),e('", Value: "'),e(n(s.value)),e(`"})
	`)}.bind(this)),e(`
	`)),e(`

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
`),l},"go/fasthttp":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
package main

import (
    "fmt"
    "mime/multipart"
    "os"
    "strings"
    "encoding/json"
    "github.com/valyala/fasthttp"
)

func main() {
    // Construct the request URL
    url := "`),e(n(f)),e(`"

    // Construct the request body
    var body *strings.Reader
    `),d.length>0&&(e(`
    `),Array.isArray(d)&&d.length===1&&d[0].type==="file"?(e(`
    // Construct the form data
    file, err := os.Open("`),e(n(d[0].value)),e(`")
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
    `),Array.isArray(d)?(e(`
    var params []string
    `),d.forEach(function(r){m(this,a),e(`
    `),i(r.value)==="object"?e(`
    paramValue, err := json.Marshal(param.value)
    if err != nil {
        fmt.Println(err)
        return
    }
    params = append(params, fmt.Sprintf("%s=%s", param.name, paramValue))
    `):e(`
    params = append(params, fmt.Sprintf("%s=%s", param.name, param.value))
    `),e(`
    `)}.bind(this)),e(`
    bodyStr := strings.Join(params, "&")
    `)):e(`
    bodyStr, err := json.Marshal(postData)
    if err != nil {
        fmt.Println(err)
        return
    }
    `),e(`
    body = strings.NewReader(bodyStr)
    `)),e(`
    `)),e(`

    // Create a new HTTP request
    req := fasthttp.AcquireRequest()
    defer fasthttp.ReleaseRequest(req)
    req.Header.SetMethod("`),e(n(b)),e(`")
    req.Header.SetContentType("`),e(n(_)),e(`")
    req.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36")

    `),g.length>0&&(e(`
    // Add headers to the request
    `),g.forEach(function(r){m(this,a),e(`
    req.Header.Add("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`")
    `)}.bind(this)),e(`
    `)),e(`

    `),s.length>0&&(e(`
    // Add cookies to the request
    `),s.forEach(function(r){m(this,a),e(`
    req.Header.AddCookie(&fasthttp.Cookie{Name: "`),e(n(r.name)),e('", Value: "'),e(n(r.value)),e(`"})
    `)}.bind(this)),e(`
    `)),e(`

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
`),l},"dart/http":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
import 'package:http/http.dart' as http;

Future<String> makeRequest(String url, String method, String mimeType,
                            Map<String, String> headers, Map<String, String> cookies,
                            List<Map<String, dynamic>> postData) async {
    // Construct the request
    final request = http.Request(method, Uri.parse(url));
    request.headers.addAll(headers);

    // Add cookies to the request
    cookies.forEach((name, value) {
        request.cookies.add(Cookie(name, value));
    });

    // Add post data to the request
    if (postData.isNotEmpty) {
    if (postData.length == 1 && postData[0]['type'] == 'file') {
        // Handle file upload
        final fileUploadRequest = http.MultipartRequest(method, Uri.parse(url));
        postData.forEach((param) async {
            if (param['type'] == 'file') {
                fileUploadRequest.files.add(await http.MultipartFile.fromPath(param['name'], param['value']));
            } else {
                fileUploadRequest.fields[param['name']] = param['value'].toString();
            }
        });
        final response = await fileUploadRequest.send();
        final responseBody = await response.stream.bytesToString();
        return responseBody;
    } else {
    // Handle regular post data
    final postDataString = postData.map((param) {
    if (param['value'] is List) {
    if (param['value'].isNotEmpty && param['value'][0] is List) {
    // Handle array of arrays
        final nestedArrayString = param['value'].map((nestedArray) {
        return nestedArray.map((element) => '\${Uri.encodeComponent(element.toString())}').join(',');
            }).join(';');
            return '\${param['name']}=$nestedArrayString';
    } else {
        // Handle array of objects
        final nestedObjectString = param['value'].map((nestedObject) {
        return nestedObject.entries.map((entry) {
        return '\${Uri.encodeComponent('\${entry.key}')}=\${Uri.encodeComponent('\${entry.value}')}';
            }).join('&');
        }).join(';');
            return '\${param['name']}=$nestedObjectString';
        }
    } else if (param['value'] is Map) {
        // Handle object
        return param['value'].entries.map((entry) {
        return '\${Uri.encodeComponent('\${entry.key}')}=\${Uri.encodeComponent('\${entry.value}')}';
        }).join('&');
    } else {
        // Handle string or number
        return '\${param['name']}=\${Uri.encodeComponent(param['value'].toString())}';
        }
        }).join('&');
        request.body = postDataString;
        request.headers['Content-Type'] = mimeType;
        final response = await request.send();
        final responseBody = await response.stream.bytesToString();
        return responseBody;
    }
    } else {
        // Handle GET request
        final response = await request.send();
        final responseBody = await response.stream.bytesToString();
        return responseBody;
    }
}

// Example usage
void main() async {
    final url = '`),e(n(f)),e(`';
    final method = '`),e(n(b)),e(`';
    final mimeType = '`),e(n(_)),e(`';
    final headers = {
    `),g.forEach(function(r){m(this,a),e(`
        '`),e(n(r.name)),e("' : '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
    };
    final cookies = {
    `),s.forEach(function(r){m(this,a),e(`
        '`),e(n(r.name)),e("' : '"),e(n(r.value)),e(`',
    `)}.bind(this)),e(`
    };
    final postData = [
    `),d.forEach(function(r){m(this,a),e(`
        {
        'name': '`),e(n(r.name)),e(`',
        'value': `),e(n(JSON.stringify(r.value))),e(`,
        'type': '`),e(n(r.type)),e(`'
        },
    `)}.bind(this)),e(`
    ];

    final response = await makeRequest(url, method, mimeType, headers, cookies, postData);
    print('Response: $response');
}
`),l},"dart/dio":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
#include <iostream>
#include <string>
#include <vector>
#include <curl/curl.h>

std::string makeRequest(const std::string& url, const std::string& method,
                         const std::string& mimeType, const std::vector<std::string>& headers,
                         const std::vector<std::string>& cookies, const std::vector<std::string>& postData) {
    // Set up the request
    curl_global_init(CURL_GLOBAL_ALL);
    auto curl = curl_easy_init();
    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, method.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        if (!cookies.empty()) {
            curl_easy_setopt(curl, CURLOPT_COOKIE, cookies[0].c_str());
        }
        if (!postData.empty()) {
            `),d.some(function(r){return m(this,a),i(r.value)==="object"||Array.isArray(r.value)}.bind(this))?(e(`
            std::string body = R"({`),d.forEach(function(r){m(this,a),i(r.value)==="object"||Array.isArray(r.value)?(e(`
                        "`),e(n(r.name)),e('" : '),e(n(JSON.stringify(r.value))),e(`,
                        `)):(e(`
                        "`),e(n(r.name)),e('" : "'),e(n(r.value)),e(`",
                        `))}.bind(this)),e(`})";
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body.c_str());
            `)):e(`
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postData[0].c_str());
            `),e(`
        }

        // Send the request
        CURLcode res = curl_easy_perform(curl);
        if (res != CURLE_OK) {
            std::cerr << "Error: " << curl_easy_strerror(res) << std::endl;
        }

        // Handle the response
        long responseCode;
        curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &responseCode);
        std::string response = std::to_string(responseCode);
        curl_easy_cleanup(curl);
        curl_global_cleanup();

        return response;
    }
}

// Example usage
int main() {
    std::string url = "`),e(n(f)),e(`";
    std::string method = "`),e(n(b)),e(`";
    std::string mimeType = "`),e(n(_)),e(`";
    std::vector<std::string> headers = {
        `),g.forEach(function(r){m(this,a),e(`
        "`),e(n(r.name)),e(": "),e(n(r.value)),e(`",
        `)}.bind(this)),e(`
    };
    std::vector<std::string> cookies = {
        `),s.forEach(function(r){m(this,a),e(`
        "`),e(n(r.name)),e("="),e(n(r.value)),e(`",
        `)}.bind(this)),e(`
    };
    std::vector<std::string> postData = {
        `),d.forEach(function(r){m(this,a),e(`
        {
            "name": "`),e(n(r.name)),e(`",
            `),i(r.value)==="object"||Array.isArray(r.value)?(e(`
            "value": `),e(n(JSON.stringify(r.value))),e(`
            `)):(e(`
            "value": "`),e(n(r.value)),e(`"
            `)),e(`
        },
        `)}.bind(this)),e(`
    };

    std::string response = makeRequest(url, method, mimeType, headers, cookies, postData);
    std::cout << "Response Code: " << response << std::endl;
    return 0;
}
`),l},"csharp/restsharp":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
using RestSharp;

class Program
{
    static void Main(string[] args)
    {
        // Construct the request URL
        var fullUrl = "`),e(n(f)),e(`";

        // Set up the request
        var client = new RestClient(fullUrl);
        var request = new RestRequest("`),e(n(b)),e('", Method.'),e(n(b.toUpperCase())),e(`);
        request.AddHeader("Content-Type", "`),e(n(_)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach(function(r){m(this,a),e(`
        request.AddHeader("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),s.length>0&&(e(`
        // Add cookies to the request
        `),s.forEach(function(r){m(this,a),e(`
        request.AddCookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),d.length>0&&(e(`
        // Set up the request body
        `),d.some(function(r){return m(this,a),i(r.value)==="object"||Array.isArray(r.value)}.bind(this))?(e(`
        var body = new {
            `),d.filter(function(r){return m(this,a),i(r.value)==="object"||Array.isArray(r.value)}.bind(this)).forEach(function(r){m(this,a),e(`
            `),e(n(r.name)),e(" = "),e(n(JSON.stringify(r.value))),e(`,
            `)}.bind(this)),e(`
        };
        request.AddJsonBody(body);
        `)):(e(`
        request.AddParameter("text/plain", "`),e(n(d.map(function(r){return m(this,a),r.name+"="+Uri.EscapeDataString(r.value)}.bind(this)).join("&"))),e(`", ParameterType.RequestBody);
        `)),e(`
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
`),l},"csharp/httpclient":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Construct the request URL
        var fullUrl = "`),e(n(f)),e(`";

        // Set up the request
        var client = new HttpClient();
        var request = new HttpRequestMessage(new HttpMethod("`),e(n(b)),e(`"), fullUrl);
        request.Headers.Add("Content-Type", "`),e(n(_)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach(function(r){m(this,a),e(`
        request.Headers.Add("`),e(n(r.name)),e('", "'),e(n(r.value)),e(`");
        `)}.bind(this)),e(`
        `)),e(`

        `),s.length>0&&(e(`
        // Add cookies to the request
        `),s.forEach(function(r){m(this,a),e(`
        var cookie = new System.Net.Cookie("`),e(n(r.name)),e('", "'),e(n(r.value)),e('", "/", "'),e(n(f)),e(`");
        clientHandler.CookieContainer.Add(cookie);
        `)}.bind(this)),e(`
        `)),e(`

        `),d.length>0&&(e(`
        // Set up the request body
        `),d.some(function(r){return m(this,a),i(r.value)==="object"||Array.isArray(r.value)}.bind(this))?(e(`
        var formData = new MultipartFormDataContent();
        `),d.forEach(function(r){var w=this;m(this,a),Array.isArray(r.value)?(e(`
                `),r.value.forEach(function(O){m(this,w),e(`
                    formData.Add(new StringContent("`),e(n(O)),e('"), "'),e(n(r.name)),e(`[]");
                `)}.bind(this)),e(`
            `)):i(r.value)==="object"?(e(`
                `),Object.entries(r.value).forEach(function(O){m(this,w);var T=M(O,2),A=T[0],$=T[1];e(`
                    formData.Add(new StringContent("`),e(n($)),e('"), "'),e(n(r.name)),e("["),e(n(A)),e(`]");
                `)}.bind(this)),e(`
            `)):(e(`
                formData.Add(new StringContent("`),e(n(r.value)),e('"), "'),e(n(r.name)),e(`");
            `)),e(`
        `)}.bind(this)),e(`
        request.Content = formData;
        `)):(e(`
        var requestBody = new StringContent("`),e(n(d.map(function(r){return m(this,a),r.name+"="+Uri.EscapeDataString(r.value)}.bind(this)).join("&"))),e(`");
        request.Content = requestBody;
        `)),e(`
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
`),l},"cpp/iostream":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method;t.mimeType;var _=t.headers,g=t.postData,d=t.cookies;return e(`
// Construct the request URL
std::string fullUrl = "`),e(f),e(`";

// Set up the request headers
std::map<std::string, std::string> headers;
`),_.forEach(function(s){m(this,a),e(`
headers["`),e(n(s.name)),e('"] = "'),e(n(s.value)),e(`";
`)}.bind(this)),e(`

// Add cookies to the request
std::string cookieString;
`),d.forEach(function(s){m(this,a),e(`
cookieString += "`),e(n(s.name)),e("="),e(n(s.value)),e(`; ";
`)}.bind(this)),e(`

// Set up the request parameters
std::map<std::string, std::string> parameters;
`),g.forEach(function(s){var r=this;m(this,a),e(`
`),Array.isArray(s.value)?(e(`
`),s.value.forEach(function(w){m(this,r),e(`
std::string paramString = "`),e(n(s.name)),e("[]="),e(n(w)),e(`";
parameters["`),e(n(s.name)),e(`"] += paramString + "&";
`)}.bind(this)),e(`
`)):i(s.value)==="object"?(e(`
`),Object.entries(s.value).forEach(function(w){m(this,r);var O=M(w,2),T=O[0],A=O[1];e(`
std::string paramString = "`),e(n(s.name)),e("["),e(n(T)),e("]="),e(n(A)),e(`";
parameters["`),e(n(s.name)),e(`"] += paramString + "&";
`)}.bind(this)),e(`
`)):(e(`
std::string paramString = "`),e(n(s.name)),e("="),e(n(s.value)),e(`";
parameters["`),e(n(s.name)),e(`"] += paramString + "&";
`)),e(`
`)}.bind(this)),e(`

// Construct the request
std::string method = "`),e(n(b)),e(`";
std::string postDataString;
if (method == "GET") {
    // Construct GET request with parameters
} else if (method == "POST") {
    // Construct POST request with postDataString
} else if (method == "PUT") {
    // Construct PUT request with parameters
} else if (method == "DELETE") {
    // Construct DELETE request with parameters
} else {
    // Handle unsupported methods
}

// Print the request
std::cout << method << " " << fullUrl << " HTTP/1.1\\r\\n";
for (auto const& [key, val] : headers) {
    std::cout << key << ": " << val << "\\r\\n";
}
if (!cookieString.empty()) {
    // Print cookies
    std::cout << "Cookie: " << cookieString << "\\r\\n";
}
std::cout << "\\r\\n";
if (method == "POST" || method == "PUT" || method == "DELETE") {
    std::cout << postDataString << "\\r\\n";
}
`),l},"cpp/curl":function(t,n,o,u){var a=this;n=n||function(d){return d==null?"":String(d).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(d){return c[d]||d}var l="";function e(d){d!=null&&(l+=d)}var f=t.url;t.method,t.mimeType;var b=t.headers,_=t.postData,g=t.cookies;return e(`
// Construct the request URL
std::string url = "`),e(f),e(`";

// Set up the request headers
struct curl_slist* headers = NULL;
`),b.forEach(function(d){m(this,a),e(`
std::string headerString = "`),e(n(d.name)),e(": "),e(n(d.value)),e(`";
headers = curl_slist_append(headers, headerString.c_str());
`)}.bind(this)),e(`

// Add cookies to the request
std::string cookieData;
`),g.forEach(function(d){m(this,a),e(`
std::string cookieString = "`),e(n(d.name)),e("="),e(n(d.value)),e(`";
cookieData += cookieString + "; ";
`)}.bind(this)),e(`

// Set up the request parameters
std::string postData;
`),_.forEach(function(d){var s=this;m(this,a),e(`
`),Array.isArray(d.value)?(e(`
`),d.value.forEach(function(r){m(this,s),e(`
std::string paramString = "`),e(n(d.name)),e("[]="),e(n(r)),e(`";
postData += paramString + "&";
`)}.bind(this)),e(`
`)):i(d.value)==="object"?(e(`
`),Object.entries(d.value).forEach(function(r){m(this,s);var w=M(r,2),O=w[0],T=w[1];e(`
std::string paramString = "`),e(n(d.name)),e("["),e(n(O)),e("]="),e(n(T)),e(`";
postData += paramString + "&";
`)}.bind(this)),e(`
`)):(e(`
std::string paramString = "`),e(n(d.name)),e("="),e(n(d.value)),e(`";
postData += paramString + "&";
`)),e(`
`)}.bind(this)),e(`

// Construct the request
CURL* curl = curl_easy_init();
if (curl) {
    curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

    if (!cookieData.empty()) {
        curl_easy_setopt(curl, CURLOPT_COOKIE, cookieData.c_str());
    }

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
`),l},"cpp/arduino":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
// Construct the request URL
String url = "`),e(f),e(`";

// Set up the request headers
String headers;
`),g.forEach(function(r){m(this,a),e(`
    String headerString = "`),e(n(r.name)),e(": "),e(n(r.value)),e(`";
    headers += headerString + "\\r\\n";
`)}.bind(this)),e(`

// Add cookies to the request
`),s.forEach(function(r){m(this,a),e(`
    String cookieString = "`),e(n(r.name)),e("="),e(n(r.value)),e(`";
    // TODO: Add cookieString to the request
`)}.bind(this)),e(`

// Set up the request parameters
String postData;
`),d.forEach(function(r){var w=this;m(this,a),e(`
    `),Array.isArray(r.value)?(e(`
        `),r.value.forEach(function(O){m(this,w),e(`
            String paramString = "`),e(n(r.name)),e("="),e(n(O)),e(`";
            postData += paramString + "&";
        `)}.bind(this)),e(`
    `)):i(r.value)==="object"?(e(`
        String paramString = "`),e(n(r.name)),e("="),e(n(JSON.stringify(r.value))),e(`";
        postData += paramString + "&";
    `)):(e(`
        String paramString = "`),e(n(r.name)),e("="),e(n(r.value)),e(`";
        postData += paramString + "&";
    `)),e(`
`)}.bind(this)),e(`

// Construct the request
WiFiClient client;
if (client.connect(url, 80)) {
    // Send the request
    client.print("`),e(b),e(` ");
    client.print(url);
    client.println(" HTTP/1.1");
    client.print("Host: ");
    client.println(url);
    client.print("Content-Type: ");
    client.println("`),e(_),e(`");
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
`),l},"clojure/ring-client":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`

(require '[ring.util.http-client :as client])

(defn make-request []
    (let [url "`),e(n(f)),e(`"
        headers {`),g.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
        cookies {`),s.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
        options {:headers headers
        :cookies cookies
        :content-type "`),e(n(_)),e(`"}
    `),b==="GET"?e(`
        response (client/get url options)]
    `):(e(`
        post-data "`),d.length===1&&d[0].type==="file"?(e(`
    {:multipart true
        :file "`),e(n(d[0].value)),e(`"}
    `)):(e(`
    {`),d.forEach(function(r){m(this,a),e(`
        "`),e(n(r.name)),e('" '),Array.isArray(r.value)||i(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(n(r.value)),e('"')),r.isLast||e(",")}.bind(this)),e(`}
    `)),e(`"
    response (client/post url options post-data)]
    `)),e(`
    (println "Response: " (:body response))))

(make-request)
`),l},"clojure/clj-http":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
(require '[clj-http.client :as client])

(defn make-request []
    (let [url "`),e(n(f)),e(`"
        headers {`),g.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
        cookies {`),s.forEach(function(r){m(this,a),e(`
    "`),e(n(r.name)),e('" "'),e(n(r.value)),e('"'),r.isLast||e(",")}.bind(this)),e(`}
        options {:headers headers
        :cookies cookies
        :content-type "`),e(n(_)),e(`"}
    `),b==="GET"?e(`
        response (client/get url options)]
    `):(e(`
        post-data "`),d.length===1&&d[0].type==="file"?(e(`
    {:multipart true
        :file "`),e(n(d[0].value)),e(`"}
    `)):(e(`
    {`),d.forEach(function(r){m(this,a),e(`
        "`),e(n(r.name)),e('" '),Array.isArray(r.value)||i(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(n(r.value)),e('"')),r.isLast||e(",")}.bind(this)),e(`}
    `)),e(`"
    response (client/post url options post-data)]
    `)),e(`
    (println (str "`),e(n(b)),e(` " url " HTTP/1.1"))
    (doseq [entry headers]
    (println (str entry)))
    (doseq [entry cookies]
    (println (str "Cookie: " entry)))
    (when (not (empty? post-data))
    (println (str post-data)))
    (println (str "\\nResponse: " (:body response)))))

(make-request)
`),l},"c/ghttp":function(t,n,o,u){var a=this;n=n||function(w){return w==null?"":String(w).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(w){return c[w]||w}var l="";function e(w){w!=null&&(l+=w)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;if(e(`
// Set up the request
struct evhttp_uri *uri = evhttp_uri_parse("`),e(n(f)),e(`");
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
evhttp_request_set_type(req, EVHTTP_REQ_`),e(n(b.toUpperCase())),e(`);

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach(function(w){m(this,a),e(`
evhttp_add_header(req->output_headers, "`),e(n(w.name)),e('", "'),e(n(w.value)),e(`");
`)}.bind(this)),e(`
`)),e(`

`),s.length>0&&(e(`
// Add cookies to the request
`),s.forEach(function(w){m(this,a),e(`
evhttp_add_header(req->output_headers, "Cookie", "`),e(n(w.name)),e("="),e(n(w.value)),e(`");
`)}.bind(this)),e(`
`)),e(`

`),d.length>0){e(`
// Set request body
`);var r=d.map(function(w){var O=this;return m(this,a),Array.isArray(w.value)?w.value.map(function(T){return m(this,O),w.name+"="+encodeURIComponent(JSON.stringify(T))}.bind(this)).join("&"):i(w.value)==="object"?w.name+"="+encodeURIComponent(JSON.stringify(w.value)):w.name+"="+encodeURIComponent(w.value)}.bind(this)).join("&");e(`
evbuffer_add_printf(req->output_buffer, "%s", "`),e(n(r)),e(`");
evhttp_add_header(req->output_headers, "Content-Type", "`),e(n(_)),e(`");
`)}return e(`

// Send the request
if (evhttp_make_request(conn, req, EVHTTP_REQ_`),e(n(b.toUpperCase())),e(`, path) == -1) {
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
`),l},"c/curl":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url,b=t.method,_=t.mimeType;t.headers;var g=t.postData;if(t.cookies,e(`
#include <stdio.h>
#include <stdlib.h>
#include <curl/curl.h>

int main(void) {
CURL *curl;
CURLcode res;
struct curl_slist *headers = NULL;
char *url = "`),e(n(f)),e(`";
char *method = "`),e(n(b)),e(`";
char *mimeType = "`),e(n(_)),e(`";
char *postData = "";
`),g.length>0){e(`
`);var d=g.map(function(s){var r=this;return m(this,a),Array.isArray(s.value)?s.value.map(function(w){return m(this,r),s.name+"="+encodeURIComponent(JSON.stringify(w))}.bind(this)).join("&"):i(s.value)==="object"?s.name+"="+encodeURIComponent(JSON.stringify(s.value)):s.name+"="+encodeURIComponent(s.value)}.bind(this)).join("&");e(`
postData = "`),e(n(d)),e(`";
`)}return e(`

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
`),l},"brainfuck/brainfuck":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
// Create a new brainfuck program
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.

// Construct the request URL
,[<]>[.>],`),f.split("").forEach(function(r){m(this,a),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}.bind(this)),e(`++++++++[->+++++<]>.

// Set up the request
,[<]>[.>],`),b.split("").forEach(function(r){m(this,a),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}.bind(this)),e(`++++++++[->+++++<]>.

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach(function(r){m(this,a),e(",[<]>[.>],'"),e(n(r.name)),e(": "),e(n(r.value)),e("',")}.bind(this)),e(`
`)),e(`

`),s.length>0&&(e(`
// Add cookies to the request
`),s.forEach(function(r){m(this,a),e(",[<]>[.>],'Set-Cookie: "),e(n(r.name)),e("="),e(n(r.value)),e("',")}.bind(this)),e(`
`)),e(`


`),d.length>0&&(e(`
// Send the request
,[<]>[.>],'`),d.length===1&&d[0].type==="file"?e("multipart/form-data"):e(n(_)),e(`',<

`),d.length===1&&d[0].type==="file"?(e(`
    ,[<]>[.>],'`),e(n(d[0].name)),e("=',<,[>]<[.>],<,[<]>[.>],<,[>]<[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")):(e(`
    `),d.forEach(function(r){m(this,a),e(`
        ,[<]>[.>],'`),e(n(r.name)),e("=',<,[>]<[.>],'"),e(n(r.value)),e("',")}.bind(this)),e(`
    ,`)),e(`

,[<]>[.>],'',<]
`)),e(`

// Handle the response
,[<]>[.>],'Response:',<[<]>[.>],[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-],<

// Handle errors
,[<]>[.>],'Error:',<[<]>[.>],'Oops! Brainfuck couldn't handle this request. Maybe try Python next time?',`),d.length===1&&d[0].type==="file"&&e(" Remember, uploading files in Brainfuck is like trying to fit a square peg in a round hole."),e(`
`),l},"bash/wget":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
wget --verbose --output-document=-
--header="Content-Type: `),e(n(_)),e(`"
`),g.forEach(function(r){m(this,a),e(`
    --header="`),e(n(r.name)),e(": "),e(n(r.value)),e(`"
`)}.bind(this)),e(`
`),s.forEach(function(r){m(this,a),e(`
    --header="Cookie: `),e(n(r.name)),e("="),e(n(r.value)),e(`"
`)}.bind(this)),b==="GET"?(e(`
    "`),e(n(f)),e(`"
`)):b==="POST"?(e(`
    --post-data="`),e(n(d.map(function(r){m(this,a);var w=r.value;return(Array.isArray(w)||i(w)==="object")&&(w=JSON.stringify(w)),encodeURIComponent(r.name)+"="+encodeURIComponent(w)}.bind(this)).join("&"))),e(`"
    "`),e(n(f)),e(`"
`)):b==="PUT"?(e(`
    --method=PUT
    --body-data="`),e(n(d.map(function(r){m(this,a);var w=r.value;return(Array.isArray(w)||i(w)==="object")&&(w=JSON.stringify(w)),encodeURIComponent(r.name)+"="+encodeURIComponent(w)}.bind(this)).join("&"))),e(`"
    "`),e(n(f)),e(`"
`)):b==="DELETE"&&(e(`
    --method=DELETE
    "`),e(n(f)),e(`"
`)),e(`
`),l},"bash/httpie":function(t,n,o,u){var a=this;n=n||function(s){return s==null?"":String(s).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(s){return c[s]||s}var l="";function e(s){s!=null&&(l+=s)}var f=t.url;t.method,t.mimeType;var b=t.headers,_=t.postData,g=t.cookies;if(e(`
http --verbose --check --follow
"`),e(n(f)),e(`"
`),e(n(b.map(function(s){return m(this,a),"'"+s.name+":"+s.value+"'"}.bind(this)).join(` 
 `))),e(`
`),g.forEach(function(s){m(this,a),e(`
Cookie:"`),e(n(s.name)),e("="),e(n(s.value)),e(`"
`)}.bind(this)),e(`
`),_.length>0){e(`
`);var d=_.map(function(s){var r=this;return m(this,a),Array.isArray(s.value)?s.value.map(function(w){return m(this,r),"'"+s.name+"="+encodeURIComponent(JSON.stringify(w))+"'"}.bind(this)).join(" "):i(s.value)==="object"?"'"+s.name+"="+encodeURIComponent(JSON.stringify(s.value))+"'":"'"+s.name+"="+encodeURIComponent(s.value)+"'"}.bind(this)).join(` 
 `);e(`
`),e(n(d)),e(`
`)}return e(`
--form
--timeout 120s
--max-redirects 10
`),l},"bash/curl":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
curl -X `),e(n(b)),e(`
-H "Content-Type: `),e(n(_)),e(`"
`),g.forEach(function(r){m(this,a),e(`
    -H "`),e(n(r.name)),e(": "),e(n(r.value)),e(`"
`)}.bind(this)),e(`
`),s.forEach(function(r){m(this,a),e(`
    --cookie "`),e(n(r.name)),e("="),e(n(r.value)),e(`"
`)}.bind(this)),d.length>0&&(e(`
    -d `),d.length===1&&d[0].type==="file"?(e(`
        "@`),e(n(d[0].value)),e(`"
    `)):(e(`
        "`),e(n(d.map(function(r){m(this,a);var w=r.value;return(Array.isArray(w)||i(w)==="object")&&(w=JSON.stringify(w)),encodeURIComponent(r.name)+"="+encodeURIComponent(w)}.bind(this)).join("&"))),e(`"
    `))),e(`
"`),e(n(f)),e(`"
`),l},"r/rcurl":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
library(RCurl)

url <- "`),e(n(f)),e(`"
method <- "`),e(n(b)),e(`"
mimeType <- "`),e(n(_)),e(`"

headers <- list(
`),g.forEach(function(r){m(this,a),e(`
  "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
`)}.bind(this)),e(`
)

cookies <- list(
`),s.forEach(function(r){m(this,a),e(`
  "`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`",
`)}.bind(this)),e(`
)

`),b==="GET"?e(`
req <- getURL(url, httpheader = headers, cookie = cookies)
`):(e(`
body <- list(
`),d.forEach(function(r){m(this,a),e(`
"`),e(n(r.name)),e('" = '),Array.isArray(r.value)||i(r.value)==="object"?(e(`
  `),e(n(JSON.stringify(r.value))),e(`,
`)):(e(`
  "`),e(n(r.value)),e(`",
`)),e(`
`)}.bind(this)),e(`
)

req <- postForm(url, .params = body, httpheader = headers, cookie = cookies)
`)),e(`

cat("Response: ", "\\n")
cat(req, "\\n")

`),l},"r/httr":function(t,n,o,u){var a=this;n=n||function(r){return r==null?"":String(r).replace(h,p)};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},h=/[&<>'"]/g;function p(r){return c[r]||r}var l="";function e(r){r!=null&&(l+=r)}var f=t.url,b=t.method,_=t.mimeType,g=t.headers,d=t.postData,s=t.cookies;return e(`
library(httr)

url <- "`),e(n(f)),e(`"

req <- VERB("`),e(n(b)),e(`", url)

`),g.forEach(function(r){m(this,a),e(`
req <- add_headers("`),e(n(r.name)),e('" = "'),e(n(r.value)),e(`", req)
`)}.bind(this)),e(`

`),s.forEach(function(r){m(this,a),e(`
req <- add_headers("Cookie" = "`),e(n(r.name)),e("="),e(n(r.value)),e(`", req)
`)}.bind(this)),e(`

`),d.length>0&&(e(`
body <- list(
`),d.forEach(function(r){m(this,a),e(`
"`),e(n(r.name)),e('" = '),Array.isArray(r.value)||i(r.value)==="object"?(e(`
    `),e(n(JSON.stringify(r.value))),e(`,
`)):(e(`
    "`),e(n(r.value)),e(`",
`)),e(`
`)}.bind(this)),e(`
)
req <- content(req, as.formula(paste0("`),e(n(_)),e(`", "()")), body)
`)),e(`

res <- content(req)

cat("Response: ")
print(toJSON(res, pretty = TRUE))
`),l}},cr={exports:{}};function lr(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(n){var o=t[n];typeof o!="object"||Object.isFrozen(o)||lr(o)}),t}cr.exports=lr,cr.exports.default=lr;class Ms{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function $s(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Le(t,...n){const o=Object.create(null);for(const u in t)o[u]=t[u];return n.forEach(function(u){for(const a in u)o[a]=u[a]}),o}const js=t=>!!t.scope||t.sublanguage&&t.language;class Bp{constructor(n,o){this.buffer="",this.classPrefix=o.classPrefix,n.walk(this)}addText(n){this.buffer+=$s(n)}openNode(n){if(!js(n))return;let o="";o=n.sublanguage?`language-${n.language}`:((u,{prefix:a})=>{if(u.includes(".")){const c=u.split(".");return[`${a}${c.shift()}`,...c.map((h,p)=>`${h}${"_".repeat(p+1)}`)].join(" ")}return`${a}${u}`})(n.scope,{prefix:this.classPrefix}),this.span(o)}closeNode(n){js(n)&&(this.buffer+="</span>")}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const Us=(t={})=>{const n={children:[]};return Object.assign(n,t),n};class ur{constructor(){this.rootNode=Us(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const o=Us({scope:n});this.add(o),this.stack.push(o)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,o){return typeof o=="string"?n.addText(o):o.children&&(n.openNode(o),o.children.forEach(u=>this._walk(n,u)),n.closeNode(o)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(o=>typeof o=="string")?n.children=[n.children.join("")]:n.children.forEach(o=>{ur._collapse(o)}))}}class Pp extends ur{constructor(n){super(),this.options=n}addKeyword(n,o){n!==""&&(this.openNode(o),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,o){const u=n.root;u.sublanguage=!0,u.language=o,this.add(u)}toHTML(){return new Bp(this,this.options).value()}finalize(){return!0}}function cn(t){return t?typeof t=="string"?t:t.source:null}function Is(t){return Ie("(?=",t,")")}function Hp(t){return Ie("(?:",t,")*")}function Fp(t){return Ie("(?:",t,")?")}function Ie(...t){return t.map(n=>cn(n)).join("")}function dr(...t){return"("+(function(o){const u=o[o.length-1];return typeof u=="object"&&u.constructor===Object?(o.splice(o.length-1,1),u):{}}(t).capture?"":"?:")+t.map(o=>cn(o)).join("|")+")"}function Bs(t){return new RegExp(t.toString()+"|").exec("").length-1}const zp=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function pr(t,{joinWith:n}){let o=0;return t.map(u=>{o+=1;const a=o;let c=cn(u),h="";for(;c.length>0;){const p=zp.exec(c);if(!p){h+=c;break}h+=c.substring(0,p.index),c=c.substring(p.index+p[0].length),p[0][0]==="\\"&&p[1]?h+="\\"+String(Number(p[1])+a):(h+=p[0],p[0]==="("&&o++)}return h}).map(u=>`(${u})`).join(n)}const Ps="[a-zA-Z]\\w*",hr="[a-zA-Z_]\\w*",Hs="\\b\\d+(\\.\\d+)?",Fs="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",zs="\\b(0b[01]+)",ln={begin:"\\\\[\\s\\S]",relevance:0},Kp={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ln]},Gp={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ln]},$n=function(t,n,o={}){const u=Le({scope:"comment",begin:t,end:n,contains:[]},o);u.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const a=dr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return u.contains.push({begin:Ie(/[ ]+/,"(",a,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),u},Jp=$n("//","$"),Wp=$n("/\\*","\\*/"),Zp=$n("#","$"),Vp={scope:"number",begin:Hs,relevance:0},Qp={scope:"number",begin:Fs,relevance:0},Xp={scope:"number",begin:zs,relevance:0},Yp={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[ln,{begin:/\[/,end:/\]/,relevance:0,contains:[ln]}]}]},eh={scope:"title",begin:Ps,relevance:0},nh={scope:"title",begin:hr,relevance:0},th={begin:"\\.\\s*"+hr,relevance:0};var jn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:Ps,UNDERSCORE_IDENT_RE:hr,NUMBER_RE:Hs,C_NUMBER_RE:Fs,BINARY_NUMBER_RE:zs,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(t={})=>{const n=/^#![ ]*\//;return t.binary&&(t.begin=Ie(n,/.*\b/,t.binary,/\b.*/)),Le({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(o,u)=>{o.index!==0&&u.ignoreMatch()}},t)},BACKSLASH_ESCAPE:ln,APOS_STRING_MODE:Kp,QUOTE_STRING_MODE:Gp,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:$n,C_LINE_COMMENT_MODE:Jp,C_BLOCK_COMMENT_MODE:Wp,HASH_COMMENT_MODE:Zp,NUMBER_MODE:Vp,C_NUMBER_MODE:Qp,BINARY_NUMBER_MODE:Xp,REGEXP_MODE:Yp,TITLE_MODE:eh,UNDERSCORE_TITLE_MODE:nh,METHOD_GUARD:th,END_SAME_AS_BEGIN:function(t){return Object.assign(t,{"on:begin":(n,o)=>{o.data._beginMatch=n[1]},"on:end":(n,o)=>{o.data._beginMatch!==n[1]&&o.ignoreMatch()}})}});function rh(t,n){t.input[t.index-1]==="."&&n.ignoreMatch()}function ah(t,n){t.className!==void 0&&(t.scope=t.className,delete t.className)}function sh(t,n){n&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=rh,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function oh(t,n){Array.isArray(t.illegal)&&(t.illegal=dr(...t.illegal))}function ih(t,n){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function ch(t,n){t.relevance===void 0&&(t.relevance=1)}const lh=(t,n)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const o=Object.assign({},t);Object.keys(t).forEach(u=>{delete t[u]}),t.keywords=o.keywords,t.begin=Ie(o.beforeMatch,Is(o.begin)),t.starts={relevance:0,contains:[Object.assign(o,{endsParent:!0})]},t.relevance=0,delete o.beforeMatch},uh=["of","and","for","in","not","or","if","then","parent","list","value"],dh="keyword";function Ks(t,n,o=dh){const u=Object.create(null);return typeof t=="string"?a(o,t.split(" ")):Array.isArray(t)?a(o,t):Object.keys(t).forEach(function(c){Object.assign(u,Ks(t[c],n,c))}),u;function a(c,h){n&&(h=h.map(p=>p.toLowerCase())),h.forEach(function(p){const l=p.split("|");u[l[0]]=[c,ph(l[0],l[1])]})}}function ph(t,n){return n?Number(n):function(o){return uh.includes(o.toLowerCase())}(t)?0:1}const Gs={},Be=t=>{console.error(t)},Js=(t,...n)=>{console.log(`WARN: ${t}`,...n)},Ze=(t,n)=>{Gs[`${t}/${n}`]||(console.log(`Deprecated as of ${t}. ${n}`),Gs[`${t}/${n}`]=!0)},Un=new Error;function Ws(t,n,{key:o}){let u=0;const a=t[o],c={},h={};for(let p=1;p<=n.length;p++)h[p+u]=a[p],c[p+u]=!0,u+=Bs(n[p-1]);t[o]=h,t[o]._emit=c,t[o]._multi=!0}function hh(t){(function(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)})(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),function(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw Be("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Un;if(typeof n.beginScope!="object"||n.beginScope===null)throw Be("beginScope must be object"),Un;Ws(n,n.begin,{key:"beginScope"}),n.begin=pr(n.begin,{joinWith:""})}}(t),function(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw Be("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Un;if(typeof n.endScope!="object"||n.endScope===null)throw Be("endScope must be object"),Un;Ws(n,n.end,{key:"endScope"}),n.end=pr(n.end,{joinWith:""})}}(t)}function mh(t){function n(a,c){return new RegExp(cn(a),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(c?"g":""))}class o{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(c,h){h.position=this.position++,this.matchIndexes[this.matchAt]=h,this.regexes.push([h,c]),this.matchAt+=Bs(c)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const c=this.regexes.map(h=>h[1]);this.matcherRe=n(pr(c,{joinWith:"|"}),!0),this.lastIndex=0}exec(c){this.matcherRe.lastIndex=this.lastIndex;const h=this.matcherRe.exec(c);if(!h)return null;const p=h.findIndex((e,f)=>f>0&&e!==void 0),l=this.matchIndexes[p];return h.splice(0,p),Object.assign(h,l)}}class u{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(c){if(this.multiRegexes[c])return this.multiRegexes[c];const h=new o;return this.rules.slice(c).forEach(([p,l])=>h.addRule(p,l)),h.compile(),this.multiRegexes[c]=h,h}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(c,h){this.rules.push([c,h]),h.type==="begin"&&this.count++}exec(c){const h=this.getMatcher(this.regexIndex);h.lastIndex=this.lastIndex;let p=h.exec(c);if(this.resumingScanAtSamePosition()&&!(p&&p.index===this.lastIndex)){const l=this.getMatcher(0);l.lastIndex=this.lastIndex+1,p=l.exec(c)}return p&&(this.regexIndex+=p.position+1,this.regexIndex===this.count&&this.considerAll()),p}}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Le(t.classNameAliases||{}),function a(c,h){const p=c;if(c.isCompiled)return p;[ah,ih,hh,lh].forEach(e=>e(c,h)),t.compilerExtensions.forEach(e=>e(c,h)),c.__beforeBegin=null,[sh,oh,ch].forEach(e=>e(c,h)),c.isCompiled=!0;let l=null;return typeof c.keywords=="object"&&c.keywords.$pattern&&(c.keywords=Object.assign({},c.keywords),l=c.keywords.$pattern,delete c.keywords.$pattern),l=l||/\w+/,c.keywords&&(c.keywords=Ks(c.keywords,t.case_insensitive)),p.keywordPatternRe=n(l,!0),h&&(c.begin||(c.begin=/\B|\b/),p.beginRe=n(p.begin),c.end||c.endsWithParent||(c.end=/\B|\b/),c.end&&(p.endRe=n(p.end)),p.terminatorEnd=cn(p.end)||"",c.endsWithParent&&h.terminatorEnd&&(p.terminatorEnd+=(c.end?"|":"")+h.terminatorEnd)),c.illegal&&(p.illegalRe=n(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(e){return function(f){return f.variants&&!f.cachedVariants&&(f.cachedVariants=f.variants.map(function(b){return Le(f,{variants:null},b)})),f.cachedVariants?f.cachedVariants:Zs(f)?Le(f,{starts:f.starts?Le(f.starts):null}):Object.isFrozen(f)?Le(f):f}(e==="self"?c:e)})),c.contains.forEach(function(e){a(e,p)}),c.starts&&a(c.starts,h),p.matcher=function(e){const f=new u;return e.contains.forEach(b=>f.addRule(b.begin,{rule:b,type:"begin"})),e.terminatorEnd&&f.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&f.addRule(e.illegal,{type:"illegal"}),f}(p),p}(t)}function Zs(t){return!!t&&(t.endsWithParent||Zs(t.starts))}class fh extends Error{constructor(n,o){super(n),this.name="HTMLInjectionError",this.html=o}}const mr=$s,Vs=Le,Qs=Symbol("nomatch");var un=function(t){const n=Object.create(null),o=Object.create(null),u=[];let a=!0;const c="Could not find the language '{}', did you forget to load/include a language module?",h={disableAutodetect:!0,name:"Plain text",contains:[]};let p={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Pp};function l(T){return p.noHighlightRe.test(T)}function e(T,A,$){let K="",F="";typeof A=="object"?(K=T,$=A.ignoreIllegals,F=A.language):(Ze("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ze("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),F=T,K=A),$===void 0&&($=!0);const P={code:K,language:F};O("before:highlight",P);const H=P.result?P.result:f(P.language,P.code,$);return H.code=P.code,O("after:highlight",H),H}function f(T,A,$,K){const F=Object.create(null);function P(){if(!j.keywords)return void se.addText(ne);let L=0;j.keywordPatternRe.lastIndex=0;let U=j.keywordPatternRe.exec(ne),V="";for(;U;){V+=ne.substring(L,U.index);const te=ge.case_insensitive?U[0].toLowerCase():U[0],oe=(W=te,j.keywords[W]);if(oe){const[Ae,Er]=oe;if(se.addText(V),V="",F[te]=(F[te]||0)+1,F[te]<=7&&(Kn+=Er),Ae.startsWith("_"))V+=U[0];else{const Gn=ge.classNameAliases[Ae]||Ae;se.addKeyword(U[0],Gn)}}else V+=U[0];L=j.keywordPatternRe.lastIndex,U=j.keywordPatternRe.exec(ne)}var W;V+=ne.substring(L),se.addText(V)}function H(){j.subLanguage!=null?function(){if(ne==="")return;let L=null;if(typeof j.subLanguage=="string"){if(!n[j.subLanguage])return void se.addText(ne);L=f(j.subLanguage,ne,!0,Xe[j.subLanguage]),Xe[j.subLanguage]=L._top}else L=b(ne,j.subLanguage.length?j.subLanguage:null);j.relevance>0&&(Kn+=L.relevance),se.addSublanguage(L._emitter,L.language)}():P(),ne=""}function ce(L,U){let V=1;const W=U.length-1;for(;V<=W;){if(!L._emit[V]){V++;continue}const te=ge.classNameAliases[L[V]]||L[V],oe=U[V];te?se.addKeyword(oe,te):(ne=oe,P(),ne=""),V++}}function Z(L,U){return L.scope&&typeof L.scope=="string"&&se.openNode(ge.classNameAliases[L.scope]||L.scope),L.beginScope&&(L.beginScope._wrap?(se.addKeyword(ne,ge.classNameAliases[L.beginScope._wrap]||L.beginScope._wrap),ne=""):L.beginScope._multi&&(ce(L.beginScope,U),ne="")),j=Object.create(L,{parent:{value:j}}),j}function le(L,U,V){let W=function(te,oe){const Ae=te&&te.exec(oe);return Ae&&Ae.index===0}(L.endRe,V);if(W){if(L["on:end"]){const te=new Ms(L);L["on:end"](U,te),te.isMatchIgnored&&(W=!1)}if(W){for(;L.endsParent&&L.parent;)L=L.parent;return L}}if(L.endsWithParent)return le(L.parent,U,V)}function Se(L){return j.matcher.regexIndex===0?(ne+=L[0],1):(vr=!0,0)}function Pe(L){const U=L[0],V=A.substring(L.index),W=le(j,L,V);if(!W)return Qs;const te=j;j.endScope&&j.endScope._wrap?(H(),se.addKeyword(U,j.endScope._wrap)):j.endScope&&j.endScope._multi?(H(),ce(j.endScope,L)):te.skip?ne+=U:(te.returnEnd||te.excludeEnd||(ne+=U),H(),te.excludeEnd&&(ne=U));do j.scope&&se.closeNode(),j.skip||j.subLanguage||(Kn+=j.relevance),j=j.parent;while(j!==W.parent);return W.starts&&Z(W.starts,L),te.returnEnd?0:U.length}let we={};function De(L,U){const V=U&&U[0];if(ne+=L,V==null)return H(),0;if(we.type==="begin"&&U.type==="end"&&we.index===U.index&&V===""){if(ne+=A.slice(U.index,U.index+1),!a){const W=new Error(`0 width match regex (${T})`);throw W.languageName=T,W.badRule=we.rule,W}return 1}if(we=U,U.type==="begin")return function(W){const te=W[0],oe=W.rule,Ae=new Ms(oe),Er=[oe.__beforeBegin,oe["on:begin"]];for(const Gn of Er)if(Gn&&(Gn(W,Ae),Ae.isMatchIgnored))return Se(te);return oe.skip?ne+=te:(oe.excludeBegin&&(ne+=te),H(),oe.returnBegin||oe.excludeBegin||(ne=te)),Z(oe,W),oe.returnBegin?0:te.length}(U);if(U.type==="illegal"&&!$){const W=new Error('Illegal lexeme "'+V+'" for mode "'+(j.scope||"<unnamed>")+'"');throw W.mode=j,W}if(U.type==="end"){const W=Pe(U);if(W!==Qs)return W}if(U.type==="illegal"&&V==="")return 1;if(yr>1e5&&yr>3*U.index)throw new Error("potential infinite loop, way more iterations than matches");return ne+=V,V.length}const ge=s(T);if(!ge)throw Be(c.replace("{}",T)),new Error('Unknown language: "'+T+'"');const J=mh(ge);let Ce="",j=K||J;const Xe={},se=new p.__emitter(p);(function(){const L=[];for(let U=j;U!==ge;U=U.parent)U.scope&&L.unshift(U.scope);L.forEach(U=>se.openNode(U))})();let ne="",Kn=0,He=0,yr=0,vr=!1;try{for(j.matcher.considerAll();;){yr++,vr?vr=!1:j.matcher.considerAll(),j.matcher.lastIndex=He;const L=j.matcher.exec(A);if(!L)break;const U=De(A.substring(He,L.index),L);He=L.index+U}return De(A.substring(He)),se.closeAllNodes(),se.finalize(),Ce=se.toHTML(),{language:T,value:Ce,relevance:Kn,illegal:!1,_emitter:se,_top:j}}catch(L){if(L.message&&L.message.includes("Illegal"))return{language:T,value:mr(A),illegal:!0,relevance:0,_illegalBy:{message:L.message,index:He,context:A.slice(He-100,He+100),mode:L.mode,resultSoFar:Ce},_emitter:se};if(a)return{language:T,value:mr(A),illegal:!1,relevance:0,errorRaised:L,_emitter:se,_top:j};throw L}}function b(T,A){A=A||p.languages||Object.keys(n);const $=function(Z){const le={value:mr(Z),illegal:!1,relevance:0,_top:h,_emitter:new p.__emitter(p)};return le._emitter.addText(Z),le}(T),K=A.filter(s).filter(w).map(Z=>f(Z,T,!1));K.unshift($);const F=K.sort((Z,le)=>{if(Z.relevance!==le.relevance)return le.relevance-Z.relevance;if(Z.language&&le.language){if(s(Z.language).supersetOf===le.language)return 1;if(s(le.language).supersetOf===Z.language)return-1}return 0}),[P,H]=F,ce=P;return ce.secondBest=H,ce}function _(T){let A=null;const $=function(P){let H=P.className+" ";H+=P.parentNode?P.parentNode.className:"";const ce=p.languageDetectRe.exec(H);if(ce){const Z=s(ce[1]);return Z||(Js(c.replace("{}",ce[1])),Js("Falling back to no-highlight mode for this block.",P)),Z?ce[1]:"no-highlight"}return H.split(/\s+/).find(Z=>l(Z)||s(Z))}(T);if(l($))return;if(O("before:highlightElement",{el:T,language:$}),T.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(T)),p.throwUnescapedHTML))throw new fh("One of your code blocks includes unescaped HTML.",T.innerHTML);A=T;const K=A.textContent,F=$?e(K,{language:$,ignoreIllegals:!0}):b(K);T.innerHTML=F.value,function(P,H,ce){const Z=H&&o[H]||ce;P.classList.add("hljs"),P.classList.add(`language-${Z}`)}(T,$,F.language),T.result={language:F.language,re:F.relevance,relevance:F.relevance},F.secondBest&&(T.secondBest={language:F.secondBest.language,relevance:F.secondBest.relevance}),O("after:highlightElement",{el:T,result:F,text:K})}let g=!1;function d(){if(document.readyState==="loading")return void(g=!0);document.querySelectorAll(p.cssSelector).forEach(_)}function s(T){return T=(T||"").toLowerCase(),n[T]||n[o[T]]}function r(T,{languageName:A}){typeof T=="string"&&(T=[T]),T.forEach($=>{o[$.toLowerCase()]=A})}function w(T){const A=s(T);return A&&!A.disableAutodetect}function O(T,A){const $=T;u.forEach(function(K){K[$]&&K[$](A)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){g&&d()},!1),Object.assign(t,{highlight:e,highlightAuto:b,highlightAll:d,highlightElement:_,highlightBlock:function(T){return Ze("10.7.0","highlightBlock will be removed entirely in v12.0"),Ze("10.7.0","Please use highlightElement now."),_(T)},configure:function(T){p=Vs(p,T)},initHighlighting:()=>{d(),Ze("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){d(),Ze("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(T,A){let $=null;try{$=A(t)}catch(K){if(Be("Language definition for '{}' could not be registered.".replace("{}",T)),!a)throw K;Be(K),$=h}$.name||($.name=T),n[T]=$,$.rawDefinition=A.bind(null,t),$.aliases&&r($.aliases,{languageName:T})},unregisterLanguage:function(T){delete n[T];for(const A of Object.keys(o))o[A]===T&&delete o[A]},listLanguages:function(){return Object.keys(n)},getLanguage:s,registerAliases:r,autoDetection:w,inherit:Vs,addPlugin:function(T){(function(A){A["before:highlightBlock"]&&!A["before:highlightElement"]&&(A["before:highlightElement"]=$=>{A["before:highlightBlock"](Object.assign({block:$.el},$))}),A["after:highlightBlock"]&&!A["after:highlightElement"]&&(A["after:highlightElement"]=$=>{A["after:highlightBlock"](Object.assign({block:$.el},$))})})(T),u.push(T)}}),t.debugMode=function(){a=!1},t.safeMode=function(){a=!0},t.versionString="11.7.0",t.regex={concat:Ie,lookahead:Is,either:dr,optional:Fp,anyNumberOfTimes:Hp};for(const T in jn)typeof jn[T]=="object"&&cr.exports(jn[T]);return Object.assign(t,jn),t}({}),gh=un;un.HighlightJS=un,un.default=un;var Q=gh;function Xs(t){return t?typeof t=="string"?t:t.source:null}function In(t){return X("(?=",t,")")}function X(...t){return t.map(n=>Xs(n)).join("")}function fe(...t){return"("+(function(o){const u=o[o.length-1];return typeof u=="object"&&u.constructor===Object?(o.splice(o.length-1,1),u):{}}(t).capture?"":"?:")+t.map(o=>Xs(o)).join("|")+")"}const fr=t=>X(/\b/,t,/\w$/.test(t)?/\b/:/\B/),bh=["Protocol","Type"].map(fr),Ys=["init","self"].map(fr),_h=["Any","Self"],gr=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","distributed","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],eo=["false","nil","true"],yh=["assignment","associativity","higherThan","left","lowerThan","none","right"],vh=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],no=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],to=fe(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),ro=fe(to,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),br=X(to,ro,"*"),ao=fe(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Bn=fe(ao,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),Oe=X(ao,Bn,"*"),_r=X(/[A-Z]/,Bn,"*"),Eh=["autoclosure",X(/convention\(/,fe("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",X(/objc\(/,Oe,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],Sh=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];var Ve="[0-9](_*[0-9])*",Pn=`\\.(${Ve})`,Hn="[0-9a-fA-F](_*[0-9a-fA-F])*",wh={className:"number",variants:[{begin:`(\\b(${Ve})((${Pn})|\\.)?|(${Pn}))[eE][+-]?(${Ve})[fFdD]?\\b`},{begin:`\\b(${Ve})((${Pn})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Pn})[fFdD]?\\b`},{begin:`\\b(${Ve})[fFdD]\\b`},{begin:`\\b0[xX]((${Hn})\\.?|(${Hn})?\\.(${Hn}))[pP][+-]?(${Ve})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${Hn})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};const so="[A-Za-z$_][0-9A-Za-z$_]*",kh=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Th=["true","false","null","undefined","NaN","Infinity"],oo=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],io=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],co=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Nh=["arguments","this","super","console","window","document","localStorage","module","global"],xh=[].concat(co,oo,io);var Qe="[0-9](_*[0-9])*",Fn=`\\.(${Qe})`,zn="[0-9a-fA-F](_*[0-9a-fA-F])*",lo={className:"number",variants:[{begin:`(\\b(${Qe})((${Fn})|\\.)?|(${Fn}))[eE][+-]?(${Qe})[fFdD]?\\b`},{begin:`\\b(${Qe})((${Fn})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Fn})[fFdD]?\\b`},{begin:`\\b(${Qe})[fFdD]\\b`},{begin:`\\b0[xX]((${zn})\\.?|(${zn})?\\.(${zn}))[pP][+-]?(${Qe})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${zn})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function uo(t,n,o){return o===-1?"":t.replace(n,u=>uo(t,n,o-1))}return Q.registerLanguage("swift",function(t){const n={match:/\s+/,relevance:0},o=t.COMMENT("/\\*","\\*/",{contains:["self"]}),u=[t.C_LINE_COMMENT_MODE,o],a={match:[/\./,fe(...bh,...Ys)],className:{2:"keyword"}},c={match:X(/\./,fe(...gr)),relevance:0},h=gr.filter(J=>typeof J=="string").concat(["_|0"]),p={variants:[{className:"keyword",match:fe(...gr.filter(J=>typeof J!="string").concat(_h).map(fr),...Ys)}]},l={$pattern:fe(/\b\w+/,/#\w+/),keyword:h.concat(vh),literal:eo},e=[a,c,p],f=[{match:X(/\./,fe(...no)),relevance:0},{className:"built_in",match:X(/\b/,fe(...no),/(?=\()/)}],b={match:/->/,relevance:0},_=[b,{className:"operator",relevance:0,variants:[{match:br},{match:`\\.(\\.|${ro})+`}]}],g="([0-9]_*)+",d="([0-9a-fA-F]_*)+",s={className:"number",relevance:0,variants:[{match:`\\b(${g})(\\.(${g}))?([eE][+-]?(${g}))?\\b`},{match:`\\b0x(${d})(\\.(${d}))?([pP][+-]?(${g}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},r=(J="")=>({className:"subst",variants:[{match:X(/\\/,J,/[0\\tnr"']/)},{match:X(/\\/,J,/u\{[0-9a-fA-F]{1,8}\}/)}]}),w=(J="")=>({className:"subst",match:X(/\\/,J,/[\t ]*(?:[\r\n]|\r\n)/)}),O=(J="")=>({className:"subst",label:"interpol",begin:X(/\\/,J,/\(/),end:/\)/}),T=(J="")=>({begin:X(J,/"""/),end:X(/"""/,J),contains:[r(J),w(J),O(J)]}),A=(J="")=>({begin:X(J,/"/),end:X(/"/,J),contains:[r(J),O(J)]}),$={className:"string",variants:[T(),T("#"),T("##"),T("###"),A(),A("#"),A("##"),A("###")]},K={match:X(/`/,Oe,/`/)},F=[K,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${Bn}+`}],P=[{match:/(@|#(un)?)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:Sh,contains:[..._,s,$]}]}},{className:"keyword",match:X(/@/,fe(...Eh))},{className:"meta",match:X(/@/,Oe)}],H={match:In(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:X(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Bn,"+")},{className:"type",match:_r,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:X(/\s+&\s+/,In(_r)),relevance:0}]},ce={begin:/</,end:/>/,keywords:l,contains:[...u,...e,...P,b,H]};H.contains.push(ce);const Z={begin:/\(/,end:/\)/,relevance:0,keywords:l,contains:["self",{match:X(Oe,/\s*:/),keywords:"_|0",relevance:0},...u,...e,...f,..._,s,$,...F,...P,H]},le={begin:/</,end:/>/,contains:[...u,H]},Se={begin:/\(/,end:/\)/,keywords:l,contains:[{begin:fe(In(X(Oe,/\s*:/)),In(X(Oe,/\s+/,Oe,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:Oe}]},...u,...e,..._,s,$,...P,H,Z],endsParent:!0,illegal:/["']/},Pe={match:[/func/,/\s+/,fe(K.match,Oe,br)],className:{1:"keyword",3:"title.function"},contains:[le,Se,n],illegal:[/\[/,/%/]},we={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[le,Se,n],illegal:/\[|%/},De={match:[/operator/,/\s+/,br],className:{1:"keyword",3:"title"}},ge={begin:[/precedencegroup/,/\s+/,_r],className:{1:"keyword",3:"title"},contains:[H],keywords:[...yh,...eo],end:/}/};for(const J of $.variants){const Ce=J.contains.find(Xe=>Xe.label==="interpol");Ce.keywords=l;const j=[...e,...f,..._,s,$,...F];Ce.contains=[...j,{begin:/\(/,end:/\)/,contains:["self",...j]}]}return{name:"Swift",keywords:l,contains:[...u,Pe,we,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:l,contains:[t.inherit(t.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...e]},De,ge,{beginKeywords:"import",end:/$/,contains:[...u],relevance:0},...e,...f,..._,s,$,...F,...P,H,Z]}}),Q.registerLanguage("scala",function(t){const n=t.regex,o={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:/\$\{/,end:/\}/}]},u={className:"string",variants:[{begin:'"""',end:'"""'},{begin:'"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},{begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE,o]},{className:"string",begin:'[a-z]+"""',end:'"""',contains:[o],relevance:10}]},a={className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},c={className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,relevance:0},h={className:"class",beginKeywords:"class object trait type",end:/[:={\[\n;]/,excludeEnd:!0,contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[a]},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[a]},c]},p={className:"function",beginKeywords:"def",end:n.lookahead(/[:={\[(\n;]/),contains:[c]};return{name:"Scala",keywords:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"},contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,u,a,p,h,t.C_NUMBER_MODE,{begin:[/^\s*/,"extension",/\s+(?=[[(])/],beginScope:{2:"keyword"}},{begin:[/^\s*/,/end/,/\s+/,/(extension\b)?/],beginScope:{2:"keyword",4:"keyword"}},{match:/\.inline\b/},{begin:/\binline(?=\s)/,keywords:"inline"},{begin:[/\(\s*/,/using/,/\s+(?!\))/],beginScope:{2:"keyword"}},{className:"meta",begin:"@[A-Za-z]+"}]}}),Q.registerLanguage("rust",function(t){const n=t.regex,o={className:"title.function.invoke",relevance:0,begin:n.concat(/\b/,/(?!let\b)/,t.IDENT_RE,n.lookahead(/\s*\(/))},u="([ui](8|16|32|64|128|size)|f(32|64))?",a=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],c=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:t.IDENT_RE+"!?",type:c,keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],literal:["true","false","Some","None","Ok","Err"],built_in:a},illegal:"</",contains:[t.C_LINE_COMMENT_MODE,t.COMMENT("/\\*","\\*/",{contains:["self"]}),t.inherit(t.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+u},{begin:"\\b0o([0-7_]+)"+u},{begin:"\\b0x([A-Fa-f0-9_]+)"+u},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+u}],relevance:0},{begin:[/fn/,/\s+/,t.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,t.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,t.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,t.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,t.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:t.IDENT_RE+"::",keywords:{keyword:"Self",built_in:a,type:c}},{className:"punctuation",begin:"->"},o]}}),Q.registerLanguage("ruby",function(t){const n=t.regex,o="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",u=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),a=n.concat(u,/(::\w+)*/),c={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},h={className:"doctag",begin:"@[A-Za-z]+"},p={begin:"#<",end:">"},l=[t.COMMENT("#","$",{contains:[h]}),t.COMMENT("^=begin","^=end",{contains:[h],relevance:10}),t.COMMENT("^__END__",t.MATCH_NOTHING_RE)],e={className:"subst",begin:/#\{/,end:/\}/,keywords:c},f={className:"string",contains:[t.BACKSLASH_ESCAPE,e],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[t.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[t.BACKSLASH_ESCAPE,e]})]}]},b="[0-9](_?[0-9])*",_={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${b}))?([eE][+-]?(${b})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},g={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:c}]},d=[f,{variants:[{match:[/class\s+/,a,/\s+<\s+/,a]},{match:[/\b(class|module)\s+/,a]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:c},{match:[/(include|extend)\s+/,a],scope:{2:"title.class"},keywords:c},{relevance:0,match:[a,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:u,scope:"title.class"},{match:[/def/,/\s+/,o],scope:{1:"keyword",3:"title.function"},contains:[g]},{begin:t.IDENT_RE+"::"},{className:"symbol",begin:t.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[f,{begin:o}],relevance:0},_,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:c},{begin:"("+t.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[t.BACKSLASH_ESCAPE,e],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(p,l),relevance:0}].concat(p,l);e.contains=d,g.contains=d;const s=[{begin:/^\s*=>/,starts:{end:"$",contains:d}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:c,contains:d}}];return l.unshift(p),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:c,illegal:/\/\*/,contains:[t.SHEBANG({binary:"ruby"})].concat(s).concat(l).concat(d)}}),Q.registerLanguage("python",function(t){const n=t.regex,o=/[\p{XID_Start}_]\p{XID_Continue}*/u,u=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:u,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},c={className:"meta",begin:/^(>>>|\.\.\.) /},h={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},p={begin:/\{\{/,relevance:0},l={className:"string",contains:[t.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,c,p,h]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,c,p,h]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[t.BACKSLASH_ESCAPE,p,h]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,p,h]},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},e="[0-9](_?[0-9])*",f=`(\\b(${e}))?\\.(${e})|\\b(${e})\\.`,b=`\\b|${u.join("|")}`,_={className:"number",relevance:0,variants:[{begin:`(\\b(${e})|(${f}))[eE][+-]?(${e})[jJ]?(?=${b})`},{begin:`(${f})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${b})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${b})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${b})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${b})`},{begin:`\\b(${e})[jJ](?=${b})`}]},g={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},d={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",c,_,l,t.HASH_COMMENT_MODE]}]};return h.contains=[l,_,c],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|->|\?)|=>/,contains:[c,_,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},l,g,t.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,o],scope:{1:"keyword",3:"title.function"},contains:[d]},{variants:[{match:[/\bclass/,/\s+/,o,/\s*/,/\(\s*/,o,/\s*\)/]},{match:[/\bclass/,/\s+/,o]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[_,d,l]}]}}),Q.registerLanguage("powershell",function(t){const n={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},o={begin:"`[\\s\\S]",relevance:0},u={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},a={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[o,u,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},c={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},h=t.inherit(t.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),p={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},l={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[t.TITLE_MODE]},e={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[u]}]},f={begin:/using\s/,end:/$/,returnBegin:!0,contains:[a,c,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},b={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},_={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(n.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},t.inherit(t.TITLE_MODE,{endsParent:!0})]},g=[_,h,o,t.NUMBER_MODE,a,c,p,u,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/@\B/,relevance:0}],d={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",g,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return _.contains.unshift(d),{name:"PowerShell",aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:n,contains:g.concat(l,e,f,b,d)}}),Q.registerLanguage("php",function(t){const n=t.regex,o=/(?![A-Za-z0-9])(?![$])/,u=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,o),a=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,o),c={scope:"variable",match:"\\$+"+u},h={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},p=t.inherit(t.APOS_STRING_MODE,{illegal:null}),l=`[ 	
]`,e={scope:"string",variants:[t.inherit(t.QUOTE_STRING_MODE,{illegal:null,contains:t.QUOTE_STRING_MODE.contains.concat(h)}),p,t.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,contains:t.QUOTE_STRING_MODE.contains.concat(h)})]},f={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},b=["false","null","true"],_=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],g=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],d={keyword:_,literal:(F=>{const P=[];return F.forEach(H=>{P.push(H),H.toLowerCase()===H?P.push(H.toUpperCase()):P.push(H.toLowerCase())}),P})(b),built_in:g},s=F=>F.map(P=>P.replace(/\|\d+$/,"")),r={variants:[{match:[/new/,n.concat(l,"+"),n.concat("(?!",s(g).join("\\b|"),"\\b)"),a],scope:{1:"keyword",4:"title.class"}}]},w=n.concat(u,"\\b(?!\\()"),O={variants:[{match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),w],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[a,n.concat(/::/,n.lookahead(/(?!class\b)/)),w],scope:{1:"title.class",3:"variable.constant"}},{match:[a,n.concat("::",n.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[a,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},T={scope:"attr",match:n.concat(u,n.lookahead(":"),n.lookahead(/(?!::)/))},A={relevance:0,begin:/\(/,end:/\)/,keywords:d,contains:[T,c,O,t.C_BLOCK_COMMENT_MODE,e,f,r]},$={relevance:0,match:[/\b/,n.concat("(?!fn\\b|function\\b|",s(_).join("\\b|"),"|",s(g).join("\\b|"),"\\b)"),u,n.concat(l,"*"),n.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[A]};A.contains.push($);const K=[T,O,t.C_BLOCK_COMMENT_MODE,e,f,r];return{case_insensitive:!1,keywords:d,contains:[{begin:n.concat(/#\[\s*/,a),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:b,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:b,keyword:["new","array"]},contains:["self",...K]},...K,{scope:"meta",match:a}]},t.HASH_COMMENT_MODE,t.COMMENT("//","$"),t.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:t.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},c,$,O,{match:[/const/,/\s/,u],scope:{1:"keyword",3:"variable.constant"}},r,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},t.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:d,contains:["self",c,O,t.C_BLOCK_COMMENT_MODE,e,f]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},t.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[t.inherit(t.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},t.UNDERSCORE_TITLE_MODE]},e,f]}}),Q.registerLanguage("perl",function(t){const n=t.regex,o=/[dualxmsipngr]{0,12}/,u={$pattern:/[\w.]+/,keyword:["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"].join(" ")},a={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:u},c={begin:/->\{/,end:/\}/},h={variants:[{begin:/\$\d/},{begin:n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},p=[t.BACKSLASH_ESCAPE,a,h],l=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],e=(_,g,d="\\1")=>{const s=d==="\\1"?d:n.concat(d,g);return n.concat(n.concat("(?:",_,")"),g,/(?:\\.|[^\\\/])*?/,s,/(?:\\.|[^\\\/])*?/,d,o)},f=(_,g,d)=>n.concat(n.concat("(?:",_,")"),g,/(?:\\.|[^\\\/])*?/,d,o),b=[h,t.HASH_COMMENT_MODE,t.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),c,{className:"string",contains:p,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[t.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+t.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[t.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:e("s|tr|y",n.either(...l,{capture:!0}))},{begin:e("s|tr|y","\\(","\\)")},{begin:e("s|tr|y","\\[","\\]")},{begin:e("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:f("(?:m|qr)?",/\//,/\//)},{begin:f("m|qr",n.either(...l,{capture:!0}),/\1/)},{begin:f("m|qr",/\(/,/\)/)},{begin:f("m|qr",/\[/,/\]/)},{begin:f("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[t.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return a.contains=b,c.contains=b,{name:"Perl",aliases:["pl","pm"],keywords:u,contains:b}}),Q.registerLanguage("ocaml",function(t){return{name:"OCaml",aliases:["ml"],keywords:{$pattern:"[a-z_]\\w*!?",keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},illegal:/\/\/|>>/,contains:[{className:"literal",begin:"\\[(\\|\\|)?\\]|\\(\\)",relevance:0},t.COMMENT("\\(\\*","\\*\\)",{contains:["self"]}),{className:"symbol",begin:"'[A-Za-z_](?!')[\\w']*"},{className:"type",begin:"`[A-Z][\\w']*"},{className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},{begin:"[a-z_]\\w*'[\\w']*",relevance:0},t.inherit(t.APOS_STRING_MODE,{className:"string",relevance:0}),t.inherit(t.QUOTE_STRING_MODE,{illegal:null}),{className:"number",begin:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",relevance:0},{begin:/->/}]}}),Q.registerLanguage("objectivec",function(t){const n=/[a-zA-Z@][a-zA-Z0-9_]*/,o={$pattern:n,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{"variable.language":["this","super"],$pattern:n,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},illegal:"</",contains:[{className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,t.C_NUMBER_MODE,t.QUOTE_STRING_MODE,t.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+o.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:o,contains:[t.UNDERSCORE_TITLE_MODE]},{begin:"\\."+t.UNDERSCORE_IDENT_RE,relevance:0}]}}),Q.registerLanguage("lua",function(t){const n="\\[=*\\[",o="\\]=*\\]",u={begin:n,end:o,contains:["self"]},a=[t.COMMENT("--(?!"+n+")","$"),t.COMMENT("--"+n,o,{contains:[u],relevance:10})];return{name:"Lua",keywords:{$pattern:t.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:a.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[t.inherit(t.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:a}].concat(a)},t.C_NUMBER_MODE,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,{className:"string",begin:n,end:o,contains:[u],relevance:5}])}}),Q.registerLanguage("kotlin",function(t){const n={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},o={className:"symbol",begin:t.UNDERSCORE_IDENT_RE+"@"},u={className:"subst",begin:/\$\{/,end:/\}/,contains:[t.C_NUMBER_MODE]},a={className:"variable",begin:"\\$"+t.UNDERSCORE_IDENT_RE},c={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[a,u]},{begin:"'",end:"'",illegal:/\n/,contains:[t.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[t.BACKSLASH_ESCAPE,a,u]}]};u.contains.push(c);const h={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+t.UNDERSCORE_IDENT_RE+")?"},p={className:"meta",begin:"@"+t.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[t.inherit(c,{className:"string"}),"self"]}]},l=wh,e=t.COMMENT("/\\*","\\*/",{contains:[t.C_BLOCK_COMMENT_MODE]}),f={variants:[{className:"type",begin:t.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},b=f;return b.variants[1].contains=[f],f.variants[1].contains=[b],{name:"Kotlin",aliases:["kt","kts"],keywords:n,contains:[t.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),t.C_LINE_COMMENT_MODE,e,{className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},o,h,p,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{begin:t.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[t.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[f,t.C_LINE_COMMENT_MODE,e],relevance:0},t.C_LINE_COMMENT_MODE,e,h,p,c,t.C_NUMBER_MODE]},e]},{begin:[/class|interface|trait/,/\s+/,t.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},t.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},h,p]},c,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},l]}}),Q.registerLanguage("javascript",function(t){const n=t.regex,o=so,u="<>",a="</>",c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(Se,Pe)=>{const we=Se[0].length+Se.index,De=Se.input[we];if(De==="<"||De===",")return void Pe.ignoreMatch();let ge;De===">"&&(((Ce,{after:j})=>{const Xe="</"+Ce[0].slice(1);return Ce.input.indexOf(Xe,j)!==-1})(Se,{after:we})||Pe.ignoreMatch());const J=Se.input.substring(we);((ge=J.match(/^\s*=/))||(ge=J.match(/^\s+extends\s+/))&&ge.index===0)&&Pe.ignoreMatch()}},h={$pattern:so,keyword:kh,literal:Th,built_in:xh,"variable.language":Nh},p="[0-9](_?[0-9])*",l=`\\.(${p})`,e="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${e})((${l})|\\.)?|(${l}))[eE][+-]?(${p})\\b`},{begin:`\\b(${e})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:h,contains:[]},_={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},g={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,b],subLanguage:"css"}},d={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,b]},s={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},r=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,_,g,d,{match:/\$\d+/},f];b.contains=r.concat({begin:/\{/,end:/\}/,keywords:h,contains:["self"].concat(r)});const w=[].concat(s,b.contains),O=w.concat([{begin:/\(/,end:/\)/,keywords:h,contains:["self"].concat(w)}]),T={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:h,contains:O},A={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,n.concat(o,"(",n.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},$={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...oo,...io]}},K={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[T],illegal:/%/},F={match:n.concat(/\b/,(P=[...co,"super","import"],n.concat("(?!",P.join("|"),")")),o,n.lookahead(/\(/)),className:"title.function",relevance:0};var P;const H={begin:n.concat(/\./,n.lookahead(n.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ce={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},T]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",le={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[T]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:h,exports:{PARAMS_CONTAINS:O,CLASS_REFERENCE:$},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,_,g,d,s,{match:/\$\d+/},f,$,{className:"attr",begin:o+n.lookahead(":"),relevance:0},le,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[s,t.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:h,contains:O}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:u,end:a},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},K,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[T,t.inherit(t.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},H,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[T]},F,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},A,ce,{match:/\$[(.]/}]}}),Q.registerLanguage("java",function(t){const n=t.regex,o="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",u=o+uo("(?:<"+o+"~~~(?:\\s*,\\s*"+o+"~~~)*>)?",/~~~/g,2),a={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},c={className:"meta",begin:"@"+o,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},h={className:"params",begin:/\(/,end:/\)/,keywords:a,relevance:0,contains:[t.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:a,illegal:/<\/|#/,contains:[t.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[t.BACKSLASH_ESCAPE]},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,o],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[n.concat(/(?!else)/,o),/\s+/,o,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,o],className:{1:"keyword",3:"title.class"},contains:[h,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+u+"\\s+)",t.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:a,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:a,relevance:0,contains:[c,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,lo,t.C_BLOCK_COMMENT_MODE]},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},lo,c]}}),Q.registerLanguage("http",function(t){const n="HTTP/(2|1\\.[01])",o={className:"attribute",begin:t.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},u=[o,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+n+" \\d{3})",end:/$/,contains:[{className:"meta",begin:n},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:u}},{begin:"(?=^[A-Z]+ (.*?) "+n+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:n},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:u}},t.inherit(o,{relevance:0})]}}),Q.registerLanguage("go",function(t){const n={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{className:"string",variants:[t.QUOTE_STRING_MODE,t.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:t.C_NUMBER_RE+"[i]",relevance:1},t.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[t.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:n,illegal:/["']/}]}]}}),Q.registerLanguage("dart",function(t){const n={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},o={className:"subst",variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"},u={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[t.BACKSLASH_ESCAPE,n,o]},{begin:'"""',end:'"""',contains:[t.BACKSLASH_ESCAPE,n,o]},{begin:"'",end:"'",illegal:"\\n",contains:[t.BACKSLASH_ESCAPE,n,o]},{begin:'"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE,n,o]}]};o.contains=[t.C_NUMBER_MODE,u];const a=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],c=a.map(h=>`${h}?`);return{name:"Dart",keywords:{keyword:["abstract","as","assert","async","await","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","inferface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","while","with","yield"],built_in:a.concat(c).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},contains:[u,t.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),t.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",end:"$",relevance:0}]}),t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},t.UNDERSCORE_TITLE_MODE]},t.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}),Q.registerLanguage("csharp",function(t){const n={keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],literal:["default","false","null","true"]},o=t.inherit(t.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},a={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},c=t.inherit(a,{illegal:/\n/}),h={className:"subst",begin:/\{/,end:/\}/,keywords:n},p=t.inherit(h,{illegal:/\n/}),l={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},t.BACKSLASH_ESCAPE,p]},e={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},h]},f=t.inherit(e,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},p]});h.contains=[e,l,a,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,u,t.C_BLOCK_COMMENT_MODE],p.contains=[f,l,c,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,u,t.inherit(t.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const b={variants:[e,l,a,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},_={begin:"<",end:">",contains:[{beginKeywords:"in out"},o]},g=t.IDENT_RE+"(<"+t.IDENT_RE+"(\\s*,\\s*"+t.IDENT_RE+")*>)?(\\[\\])?",d={begin:"@"+t.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:n,illegal:/::/,contains:[t.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},b,u,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},o,_,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[o,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[o,_,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+g+"\\s+)+"+t.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{beginKeywords:["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"].join(" "),relevance:0},{begin:t.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[t.TITLE_MODE,_],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,contains:[b,u,t.C_BLOCK_COMMENT_MODE]},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},d]}}),Q.registerLanguage("cpp",function(t){const n=t.regex,o=t.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),u="decltype\\(auto\\)",a="[a-zA-Z_]\\w*::",c="(?!struct)("+u+"|"+n.optional(a)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",h={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},t.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},t.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},o,t.C_BLOCK_COMMENT_MODE]},f={className:"title",begin:n.optional(a)+t.IDENT_RE,relevance:0},b=n.optional(a)+t.IDENT_RE+"\\s*\\(",_={type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]},g={className:"function.dispatch",relevance:0,keywords:{_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]},begin:n.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,t.IDENT_RE,n.lookahead(/(<[^<>]+>|)\s*\(/))},d=[g,e,h,o,t.C_BLOCK_COMMENT_MODE,l,p],s={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:_,contains:d.concat([{begin:/\(/,end:/\)/,keywords:_,contains:d.concat(["self"]),relevance:0}]),relevance:0},r={className:"function",begin:"("+c+"[\\*&\\s]+)+"+b,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:_,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:u,keywords:_,relevance:0},{begin:b,returnBegin:!0,contains:[f],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[p,l]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:[o,t.C_BLOCK_COMMENT_MODE,p,l,h,{begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:["self",o,t.C_BLOCK_COMMENT_MODE,p,l,h]}]},h,o,t.C_BLOCK_COMMENT_MODE,e]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:_,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(s,r,g,d,[e,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:_,contains:["self",h]},{begin:t.IDENT_RE+"::",keywords:_},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}),Q.registerLanguage("clojure",function(t){const n="a-zA-Z_\\-!.?+*=<>&'",o="[#]?["+n+"]["+n+"0-9/;:$#]*",u="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",a={$pattern:o,built_in:u+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},c={begin:o,relevance:0},h={scope:"number",relevance:0,variants:[{match:/[-+]?0[xX][0-9a-fA-F]+N?/},{match:/[-+]?0[0-7]+N?/},{match:/[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/},{match:/[-+]?[0-9]+\/[0-9]+N?/},{match:/[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/},{match:/[-+]?([1-9][0-9]*|0)N?/}]},p={scope:"character",variants:[{match:/\\o[0-3]?[0-7]{1,2}/},{match:/\\u[0-9a-fA-F]{4}/},{match:/\\(newline|space|tab|formfeed|backspace|return)/},{match:/\\\S/,relevance:0}]},l={scope:"regex",begin:/#"/,end:/"/,contains:[t.BACKSLASH_ESCAPE]},e=t.inherit(t.QUOTE_STRING_MODE,{illegal:null}),f={scope:"punctuation",match:/,/,relevance:0},b=t.COMMENT(";","$",{relevance:0}),_={className:"literal",begin:/\b(true|false|nil)\b/},g={begin:"\\[|(#::?"+o+")?\\{",end:"[\\]\\}]",relevance:0},d={className:"symbol",begin:"[:]{1,2}"+o},s={begin:"\\(",end:"\\)"},r={endsWithParent:!0,relevance:0},w={keywords:a,className:"name",begin:o,relevance:0,starts:r},O=[f,s,p,l,e,b,d,g,h,_,c],T={beginKeywords:u,keywords:{$pattern:o,keyword:u},end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:o,relevance:0,excludeEnd:!0,endsParent:!0}].concat(O)};return s.contains=[T,w,r],r.contains=O,g.contains=O,{name:"Clojure",aliases:["clj","edn"],illegal:/\S/,contains:[f,s,p,l,e,b,d,g,h,_]}}),Q.registerLanguage("c",function(t){const n=t.regex,o=t.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),u="decltype\\(auto\\)",a="[a-zA-Z_]\\w*::",c="("+u+"|"+n.optional(a)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",h={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},t.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},t.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},o,t.C_BLOCK_COMMENT_MODE]},f={className:"title",begin:n.optional(a)+t.IDENT_RE,relevance:0},b=n.optional(a)+t.IDENT_RE+"\\s*\\(",_={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},g=[e,h,o,t.C_BLOCK_COMMENT_MODE,l,p],d={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:_,contains:g.concat([{begin:/\(/,end:/\)/,keywords:_,contains:g.concat(["self"]),relevance:0}]),relevance:0},s={begin:"("+c+"[\\*&\\s]+)+"+b,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:_,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:u,keywords:_,relevance:0},{begin:b,returnBegin:!0,contains:[t.inherit(f,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:[o,t.C_BLOCK_COMMENT_MODE,p,l,h,{begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:["self",o,t.C_BLOCK_COMMENT_MODE,p,l,h]}]},h,o,t.C_BLOCK_COMMENT_MODE,e]};return{name:"C",aliases:["h"],keywords:_,disableAutodetect:!0,illegal:"</",contains:[].concat(d,s,g,[e,{begin:t.IDENT_RE+"::",keywords:_},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},t.TITLE_MODE]}]),exports:{preprocessor:e,strings:p,keywords:_}}}),Q.registerLanguage("brainfuck",function(t){const n={className:"literal",begin:/[+-]+/,relevance:0};return{name:"Brainfuck",aliases:["bf"],contains:[t.COMMENT(/[^\[\]\.,\+\-<> \r\n]/,/[\[\]\.,\+\-<> \r\n]/,{contains:[{match:/[ ]+[^\[\]\.,\+\-<> \r\n]/,relevance:0}],returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",begin:"[\\.,]",relevance:0},{begin:/(?=\+\+|--)/,contains:[n]},n]}}),Q.registerLanguage("bash",function(t){const n=t.regex,o={},u={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[o]}]};Object.assign(o,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},u]});const a={className:"subst",begin:/\$\(/,end:/\)/,contains:[t.BACKSLASH_ESCAPE]},c={begin:/<<-?\s*(?=\w+)/,starts:{contains:[t.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},h={className:"string",begin:/"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,o,a]};a.contains.push(h);const p={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},t.NUMBER_MODE,o]},l=t.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),e={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[t.inherit(t.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[l,t.SHEBANG(),e,p,t.HASH_COMMENT_MODE,c,{match:/(\/[a-z._-]+)+/},h,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},o]}}),Q.registerLanguage("r",function(t){const n=t.regex,o=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,u=n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),a=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,c=n.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:o,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[t.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:o},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),t.HASH_COMMENT_MODE,{scope:"string",contains:[t.BACKSLASH_ESCAPE],variants:[t.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),t.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),t.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),t.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),t.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),t.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[a,u]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,u]},{scope:{1:"punctuation",2:"number"},match:[c,u]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,u]}]},{scope:{3:"operator"},match:[o,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:a},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:c},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}),function(){function t(){this._baseUrl="",this._url="",this._method="GET",this._params=[],this._mimeType="application/x-www-form-urlencoded",this._lang="javascript",this._library="xmlhttprequest"}return t.prototype.library=function(n){return n=n.toLowerCase(),this._library=n,this},t.prototype.lang=function(n){var o;if(n=n.toLowerCase(),!this.config()[n])throw new Error("bad lang: "+n);return this._lang=n,this._library=(o=this.config()[n][0])!==null&&o!==void 0?o:null,this},t.prototype.mimeType=function(n){return this._mimeType=n,this},t.prototype.params=function(n){return this._params=n,this},t.prototype.method=function(n){return this._method=n,this},t.prototype.url=function(n){return n=n.startsWith("/")?n.substring(1):n,this._url=n,this},t.prototype.baseUrl=function(n){return n.endsWith("/")||(n+="/"),this._baseUrl=n,this},t.prototype.convertParams=function(){var n,o=this._baseUrl;o.endsWith("/")||(o+="/");var u=this._url;u.startsWith("/")&&(u=u.substring(1)),this._params.filter(function(l){return l.in==="path"}).forEach(function(l){u=u.replace("{".concat(l.name,"}"),l.value)});var a=this._params.filter(function(l){return l.in==="query"}),c=function l(e,f){if(Array.isArray(f))return(b=f.map(function(_){return l(e,_)})).join("&");if(i(f)==="object"){var b=Object.entries(f).map(function(_){var g=_[0],d=_[1];return l("".concat(e,"[").concat(g,"]"),d)});return b.join("&")}return"".concat(e,"=").concat(f)},h=JSON.parse(JSON.stringify(a)).map(function(l){return c(l.name,l.value)}).join("&");h!==""&&(u+="?"+h),u=o+u;var p=(n=o.match(/^https?:\/\/([^\/]+)/i)[1])!==null&&n!==void 0?n:"";return{method:this._method,mimeType:this._mimeType,url:u,host:p,headers:this._params.filter(function(l){return l.in==="headers"}),postData:this._params.filter(function(l){return l.in==="postData"}),cookies:this._params.filter(function(l){return l.in==="cookie"})}},t.prototype.cleanup=function(n){return n.replace(/&amp;/gim,"&").replace(/&#39;/gim,"'").replace(/&#34;/gim,'"').replace(/\n\n+/gim,`
`).replace(/^\n/gim,"")},t.prototype.generate=function(){var n,o=(n=Ds[this._lang+"/"+this._library])!==null&&n!==void 0?n:null;if(!o)throw new Error("bad library");var u=this.convertParams();return this.cleanup(o(u))},t.prototype.generateHighlight=function(){return Q.highlight(this.generate(),{language:this._lang,ignoreIllegals:!0}).value},t.prototype.makeHighlightCode=function(n){return Q.highlight(n,{language:this._lang,ignoreIllegals:!0}).value},t.prototype.config=function(){return Object.keys(Ds).reduce(function(n,o){var u=o.split("/"),a=u[0],c=u[1];return n[a]||(n[a]=[]),n[a].push(c),n},{})},t}()})})(jb);const Ub=wr,ke=new Ub,Ib=ke.config(),Bb={name:"code-simples",components:{CustomDropdownWithSubMenu:mo},props:{baseUrl:{type:String,required:!1,default:""},url:{type:String,required:!0},method:{type:String,required:!1,default:"GET"},params:{type:Array,required:!1,default:()=>[]},mimeType:{type:String,required:!1,default:"application/x-www-form-urlencoded"}},data(){return{snippetIndex:"javascript",snippetLibraryIndex:"xmlhttprequest",code:"",html:"",showPopup:!1,onPopupIndex:null,vals:[]}},watch:{},methods:{copyToClipboard(S){Ch(this.code,S)},onLangClick(S,D=null){this.snippetIndex=S,this.snippetLibraryIndex=D,this.genCode()},genCode(){const S=this.method.toUpperCase();ke.baseUrl(this.baseUrl??`https://${location.host}`),ke.url(this.url),ke.method(S),ke.params(JSON.parse(JSON.stringify(this.params))),ke.mimeType(this.mimeType),ke.lang(this.snippetIndex),ke.library(this.snippetLibraryIndex),this.code=ke.generate(),this.html=ke.generateHighlight()}},computed:{config(){return Ib}},mounted(){this.genCode()}},Pb={class:"col regular-font request-panel code-simple"},Hb={class:"code-panel"},Fb={class:"code-panel-body relative"},zb=["innerHTML"];function Kb(S,D,i,m,M,C){const x=mo;return v(),E("div",Pb,[Y(x,{items:C.config,onSelect:C.onLangClick},null,8,["items","onSelect"]),y("div",Hb,[y("div",Fb,[y("button",{class:"toolbar-btn absolute top-2 right-2",onClick:D[0]||(D[0]=Lh((...N)=>C.copyToClipboard&&C.copyToClipboard(...N),["stop","prevent"]))},"Copy"),y("pre",{class:kr(["p-4 language line-numbers",`language-${M.snippetIndex}`])},[y("code",{class:"language",innerHTML:M.html},null,8,zb)],2)])])])}const Gb=ae(Bb,[["render",Kb]]),Jb=Dh({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(S,{slots:D,attrs:i}){const m=Mh(!1);return $h(()=>{m.value=!0}),M=>{var q;if(m.value)return(q=D.default)==null?void 0:q.call(D);const C=D.fallback||D.placeholder;if(C)return C();const x=M.fallback||M.placeholder||"",N=M.fallbackTag||M.placeholderTag||"span";return E(N,i,x)}}}),Wb={name:"OpenApiCallbacks",props:{callbacks:{type:Object,default:()=>({})},currentLocale:{type:String,default:""},components:{type:Object,default:()=>({})}}},Zb={key:0},Vb={class:"text-lg font-bold mb-2"},Qb={class:"list-disc list-inside"},Xb={class:"text-md font-bold mb-1"},Yb={class:"text-sm mb-2"},e_={class:"mb-2"},n_={class:"bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"},t_={class:"text-sm mb-2"};function r_(S,D,i,m,M,C){const x=Or,N=Nr,q=xr;return i.callbacks?(v(),E("div",Zb,[y("h2",Vb,k(S.$openapidoc.getLocaleText(i.currentLocale,"Callbacks"))+":",1),y("div",Qb,[(v(!0),E(z,null,G(i.callbacks,(B,I)=>(v(),E("div",{key:I},[(v(!0),E(z,null,G(B,(ee,ue)=>(v(),E("div",{key:I},[y("h3",Xb,k(ue)+" - "+k(I),1),y("div",Yb,k(ee.description),1),(v(!0),E(z,null,G(ee,(de,he)=>(v(),E("div",{key:he},[y("div",e_,[y("span",n_,k(he),1),y("div",t_,k(de.description),1),de.parameters?(v(),be(x,{key:0,parameters:de.parameters,"current-locale":i.currentLocale,components:i.components},null,8,["parameters","current-locale","components"])):R("",!0),de.requestBody?(v(),be(N,{key:1,requestBody:de.requestBody,"current-locale":i.currentLocale,components:i.components},null,8,["requestBody","current-locale","components"])):R("",!0),de.responses?(v(),be(q,{key:2,responses:de.responses,"current-locale":i.currentLocale,components:i.components},null,8,["responses","current-locale","components"])):R("",!0)])]))),128))]))),128))]))),128))])])):R("",!0)}const a_=ae(Wb,[["render",r_]]),s_={name:"OpenApiRoute",components:{},props:{route:{type:[Object,Array],required:!0},subParams:{required:!1},path_doc:{type:String,required:!0},file:{type:String,required:!0},currentLocale:{type:String,required:!0},url:{type:String,required:!1,default:""},server:{type:String,required:!1,default:""},method:{type:String,required:!1,default:"GET"},components:{type:Object,default:()=>({})}},data(){return{lang:"javascript",mimeType:"application/x-www-form-urlencoded",params:[]}},computed:{routeInfo(){return this.$openapidoc.getRouteInfo(this.file,this.url,this.method)}},methods:{tr:_e,genParamsToSimple(){if(this.params=[],this.route.requestBody&&Object.keys(this.route.requestBody).length){const D=Object.keys(this.route.requestBody)[0];let i=this.route.requestBody[D];if(i&&Object.keys(i).length){this.mimeType=Object.keys(i)[0];const m=i[this.mimeType];if(m.schema){const M=m.schema.properties;for(const C in M){const x=M[C]||{};let N="";if(x.example&&(N=x.example??""),N===""&&x.type&&(N=this.convertStringFormatToMd(x.type,C)),x.type==="array")x.items.type?x.items.type==="array"||x.items.type==="object"?N=[this.handleNestedArrayOrObject(x,C)]:N=[this.convertStringFormatToMd(x.items.type,C)]:x.items.enum?N=[x.items.enum[0]]:(x.items.properties||x.items.additionalProperties)&&(N=[this.handleNestedArrayOrObject(x.items,C)]),this.params.push({in:"postData",name:C,value:JSON.parse(JSON.stringify(N))});else if(x.type==="object"){if(x.additionalProperties&&x.additionalProperties.type)N={[C]:this.convertStringFormatToMd(x.additionalProperties.type,C)};else if(x.properties){N={};for(const q in x.properties){const B=x.properties[q]||{};B.type?N[q]=this.convertStringFormatToMd(B.type,q):(B.properties||B.additionalProperties)&&(N[q]=this.handleNestedArrayOrObject(B,C))}}this.params.push({in:"postData",name:C,value:JSON.parse(JSON.stringify(N))})}else this.params.push({in:"postData",name:C,value:N.toString()})}}}}for(let D in this.route.parameters){const i=this.route.parameters[D],m=i.name??"",M=i.in??"";let C="";i.schema?C=i.schema.default??"":C=i.default??"",C===""&&i.type&&(C=this.convertStringFormatToMd(i.type,m)),C===""&&i.schema&&i.schema.type&&(C=this.convertStringFormatToMd(i.schema.type,m)),C===""&&i.enum&&(C=i.enum[0]??""),this.params.push({in:M,name:m,value:C.toString()})}const S=this.$openapidoc.getParams();for(let D in S){const i=S[D];i.value===""&&i.type&&(i.value=this.convertStringFormatToMd(i.type,i.name)),this.params.push({in:i.pos,name:i.name,value:JSON.parse(JSON.stringify(i.value))})}},handleNestedArrayOrObject(S,D){if(S.type==="array"){if(S.items.type)return S.items.type==="array"?[this.handleNestedArrayOrObject(S.items,D)]:S.items.type==="object"?[this.handleNestedObject(S.items)]:[this.convertStringFormatToMd(S.items.type)];if(S.items.enum)return[S.items.enum[0]];if(S.items.properties||S.items.additionalProperties)return[this.handleNestedObject(S.items)]}else if(S.type==="object")return this.handleNestedObject(S);return""},handleNestedObject(S){if(S.additionalProperties&&S.additionalProperties.type)return{[propertyName]:this.convertStringFormatToMd(S.additionalProperties.type,propertyName)};if(S.properties){const D={};for(const i in S.properties){const m=S.properties[i]||{};m.type?D[i]=this.convertStringFormatToMd(m.type,i):(m.properties||m.additionalProperties)&&(D[i]=this.handleNestedArrayOrObject(m,i))}return D}return""},convertStringFormatToMd(S,D){switch(S){case"date":return"YYYY-MM-DD";case"date-time":return"YYYY-MM-DDTHH:MM:SSZ";case"email":return"example@example.com";case"hostname":return"example.com";case"ipv4":return"192.0.2.0";case"ipv6":return"2001:0db8:85a3:0000:0000:8a2e:0370:7334";case"uri":return"https://example.com";case"integer":return"1";case"number":return"1";case"string":return`{${D}}`;default:return S}}},mounted(){this.genParamsToSimple()}},o_={key:0},i_={class:"text-lg font-bold"},c_={class:"list-disc list-inside"},l_=["href"],u_={key:1,class:"border border-gray-300 p-4 mb-8 doc-info"},d_={class:"text-lg font-bold"},p_=["innerHTML"],h_={class:"text-lg font-bold mb-2"};function m_(S,D,i,m,M,C){const x=ib,N=vb,q=Or,B=Nr,I=Gb,ee=Jb,ue=xr,de=Tr,he=a_;return v(),E("div",null,[Y(x,{path:i.route.path,method:i.method,tags:i.route.tags,summary:C.tr(i.route,"summary",i.currentLocale),description:C.tr(i.route,"description",i.currentLocale),deprecated:i.route.deprecated,"current-locale":i.currentLocale},null,8,["path","method","tags","summary","description","deprecated","current-locale"]),i.route.servers?(v(),E("div",o_,[y("h3",i_,k(S.$openapidoc.getLocaleText(i.currentLocale,"Servers")),1),y("ul",c_,[(v(!0),E(z,null,G(i.route.servers,ye=>(v(),E("li",{key:ye.url},[y("a",{class:"text-blue-500 hover:underline",href:ye.url},k(ye.url),9,l_)]))),128))])])):R("",!0),C.routeInfo?(v(),E("div",u_,[y("h3",d_,k(S.$openapidoc.getLocaleText(i.currentLocale,"Info"))+":",1),y("div",{innerHTML:C.routeInfo},null,8,p_)])):R("",!0),i.route.security?(v(),be(N,{key:2,security:i.route.security,"current-locale":i.currentLocale,path_doc:i.path_doc,file:i.file},null,8,["security","current-locale","path_doc","file"])):R("",!0),i.route.parameters?(v(),be(q,{key:3,parameters:i.route.parameters,"current-locale":i.currentLocale,components:i.components},null,8,["parameters","current-locale","components"])):R("",!0),i.subParams?(v(),be(q,{key:4,parameters:i.subParams,"current-locale":i.currentLocale,components:i.components,title:"Global params"},null,8,["parameters","current-locale","components"])):R("",!0),i.route.requestBody?(v(),be(B,{key:5,requestBody:i.route.requestBody,"current-locale":i.currentLocale,components:i.components},null,8,["requestBody","current-locale","components"])):R("",!0),i.route.path?(v(),be(ee,{key:6},{default:Jn(()=>[y("h2",h_,k(S.$openapidoc.getLocaleText(i.currentLocale,"Code simple"))+":",1),Y(I,{url:i.route.path,baseUrl:i.server,method:i.method,"mime-type":M.mimeType,params:M.params},null,8,["url","baseUrl","method","mime-type","params"])]),_:1})):R("",!0),i.route.responses?(v(),be(ue,{key:7,responses:i.route.responses,"current-locale":i.currentLocale,components:i.components},null,8,["responses","current-locale","components"])):R("",!0),i.route.examples?(v(),be(de,{key:8,examples:i.route.examples,"current-locale":i.currentLocale},null,8,["examples","current-locale"])):R("",!0),i.route.callbacks?(v(),be(he,{key:9,callbacks:i.route.callbacks,server:i.server,"current-locale":i.currentLocale,components:i.components,simples:S.simples,params:M.params,file:i.file,path_doc:i.path_doc},null,8,["callbacks","server","current-locale","components","simples","params","file","path_doc"])):R("",!0)])}const P_=ae(s_,[["render",m_]]),f_={name:"NotFound"},g_={class:"flex flex-col items-center justify-center h-screen"},b_=y("h1",{class:"text-9xl font-bold text-gray-500 mb-0"},"404",-1),__=y("p",{class:"text-lg text-gray-700 text-center"},"Not found",-1),y_=[b_,__];function v_(S,D,i,m,M,C){return v(),E("div",g_,y_)}const H_=ae(f_,[["render",v_]]);const E_={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search(S){this.searchInPaths(S)}},mounted(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:_e,toggleSearch(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths(S){if(S=S.toLowerCase(),this.list=[],S==="")return;let D=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),i=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),m=i.indexOf(S);if(m!==-1){let M=Math.max(m-50,0),C=Math.min(m+S.length+50,i.length),x="..."+i.substring(M,C)+"...";x=x.replace(S,"<b>"+S+"</b>"),this.list.push({path:"info",title:D,description:x,url:`/${this.path}/${this.file}/${this.currentLocale}/get/info`})}for(let M in this.doc.paths){if(M==="parameters")continue;let C=this.doc.paths[M];for(let x in C){let N=C[x],q=this.tr(N,"summary",this.currentLocale).toLowerCase(),B=this.tr(N,"description",this.currentLocale).toLowerCase(),I=null,ee=q.indexOf(S);if(ee!==-1){let ue=B.substring(0,100)+"...";I={path:N.path,title:q.replace(S,"<b>"+S+"</b>"),description:ue+"...",url:`/${this.path}/${this.file}/${this.currentLocale}/${x}/${M}`}}if(ee=B.indexOf(S),ee!==-1){let ue=Math.max(ee-50,0),de=Math.min(ee+S.length+50,B.length),he="..."+B.substring(ue,de)+"...";he=he.replace(S,"<b>"+S+"</b>"),I?I.description=he:I={path:N.path,title:q,description:he,url:`/${this.path}/${this.file}/${this.currentLocale}/${x}/${M}`}}I&&this.list.push(I)}}}}},S_={class:"relative"},w_={key:0,class:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},k_={class:"w-full max-w-lg mx-auto"},T_={class:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},N_={class:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",style:{height:"300px","overflow-x":"scroll"}},x_={class:"mt-4"},O_={class:"mt-2"},C_={class:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},A_=["innerHTML"],q_=["textContent"],R_=["innerHTML"],L_=y("svg",{class:"w-10 h-10 shadow",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),D_=[L_];function M_(S,D,i,m,M,C){const x=po;return v(),E("div",S_,[M.isSearchOpen?(v(),E("div",w_,[y("div",k_,[y("div",T_,[y("div",N_,[jh(y("input",{type:"text","onUpdate:modelValue":D[0]||(D[0]=N=>M.search=N),class:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",placeholder:"Search..."},null,512),[[Uh,M.search]]),(v(!0),E(z,null,G(M.list,N=>(v(),E("div",x_,[Y(x,{to:N.url},{default:Jn(()=>[y("div",O_,[y("div",C_,[y("h5",{class:"text-base font-medium text-gray-700",innerHTML:N.title},null,8,A_),y("p",{class:"text-sm text-gray-400",style:{"font-size":"10px"},textContent:k(N.path)},null,8,q_),y("p",{class:"text-sm text-gray-500",innerHTML:N.description},null,8,R_)])])]),_:2},1032,["to"])]))),256))])])]),y("button",{class:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",onClick:D[1]||(D[1]=(...N)=>C.toggleSearch&&C.toggleSearch(...N))},D_)])):R("",!0)])}const F_=ae(E_,[["render",M_]]);export{I_ as _,B_ as a,P_ as b,F_ as c,H_ as d};
