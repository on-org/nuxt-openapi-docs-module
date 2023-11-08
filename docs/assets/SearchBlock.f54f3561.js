import{_ as J,o as b,c as y,a as v,t as S,S as E,F as L,g as D,d as $,n as Z,w as oe,T as Cn,U as Qa,V as ye,b as F,W as Ds,X as $s,p as js,e as Us,Y as Is,f as Bs,r as Ps,l as Hs,Z as Fs,$ as zs}from"./entry.a5f02078.js";import{_ as Ya}from"./nuxt-link.2bca0434.js";import{_ as ei,a as ni}from"./OpenApiDropdown.44f7d119.js";const Ks={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{getUrl(n){let t=n.url;const a=n.variables;for(const c in a){const s=a[c].default;if(s){const l=`{${c}}`;t=t.replace(l,s)}}return t}}},Gs={class:"oapi-info-head"},Js={key:0,class:"oapi-info-head__version"},Ws=["innerHTML"],Zs={key:0},Vs={id:"servers"},Xs=["href"],Qs={key:0},Ys={key:1,id:"external-documentation"},eo={key:2},no=["href"];function to(n,t,a,c,i,s){return b(),y("div",null,[v("div",Gs,[v("h1",null,S(n.$openapidocRef.tr(a.info,"title",a.currentLocale)),1),a.info.version?(b(),y("span",Js,S(a.info.version),1)):E("",!0)]),v("div",{class:"oapi-info-block",innerHTML:n.$openapidocRef.tr(a.info,"description",a.currentLocale)},null,8,Ws),a.servers?(b(),y("div",Zs,[v("h2",Vs,S(n.$openapidoc.getLocaleText("openapidoc.servers")),1),v("ul",null,[(b(!0),y(L,null,D(a.servers,l=>(b(),y("li",{key:l.url},[v("a",{href:s.getUrl(l)},S(s.getUrl(l)),9,Xs),$(" - "),l.description?(b(),y("span",Qs,S(l.description),1)):E("",!0)]))),128))])])):E("",!0),a.info.externalDocs?(b(),y("h2",Ys,S(n.$openapidoc.getLocaleText("openapidoc.external_documentation")),1)):E("",!0),a.info.externalDocs?(b(),y("ul",eo,[v("li",null,[v("a",{href:a.info.externalDocs.url},S(n.$openapidocRef.tr(a.info.externalDocs,"description",a.currentLocale)),9,no)])])):E("",!0)])}const gy=J(Ks,[["render",to]]);const ro={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},computed:{formattedIn(){if(!this.securityScheme.in)return null;const n=this.securityScheme.in.toString();return n.charAt(0).toUpperCase()+n.slice(1)}}},ao={class:"oapi-sec-scheme"},io={class:"oapi-sec-scheme__type"},so={key:0,class:"oapi-sec-scheme__param"},oo={key:1,class:"oapi-sec-scheme__param"},co={key:2,class:"oapi-sec-scheme__param"},lo={key:3,class:"oapi-sec-scheme__param"},uo={key:4,class:"oapi-sec-scheme__flows"},po={key:0,class:"oapi-sec-scheme__param"},ho={key:1,class:"oapi-sec-scheme__param"},mo={key:2,class:"oapi-sec-scheme__param"},fo={key:3,class:"oapi-sec-scheme-scopes"},go={class:"oapi-sec-scheme-scopes__title"},_o={class:"oapi-sec-scheme-scopes__list"},bo={key:0,class:"oapi-sec-scheme-scope__descr"};function yo(n,t,a,c,i,s){return b(),y("div",ao,[v("div",io,[v("span",null,S(a.securityScheme.type),1)]),a.securityScheme.type==="http"&&a.securityScheme.scheme?(b(),y("div",so,[$(S(n.$openapidoc.getLocaleText("openapidoc.scheme"))+": ",1),v("code",null,S(a.securityScheme.scheme),1)])):E("",!0),a.securityScheme.type==="http"&&a.securityScheme.scheme==="bearer"&&a.securityScheme.bearerFormat?(b(),y("div",oo,[$(S(n.$openapidoc.getLocaleText("openapidoc.bearer_format"))+": ",1),v("code",null,S(a.securityScheme.bearerFormat),1)])):E("",!0),a.securityScheme.type==="apiKey"&&a.securityScheme.in?(b(),y("div",co,[$(S(n.$openapidoc.getLocaleText("openapidoc.in"))+": ",1),v("code",null,S(a.securityScheme.in),1)])):E("",!0),a.securityScheme.type==="apiKey"&&s.formattedIn&&a.securityScheme.name?(b(),y("div",lo,[$(S(s.formattedIn)+" name: ",1),v("code",null,S(a.securityScheme.name),1)])):E("",!0),a.securityScheme.type==="oauth2"&&a.securityScheme.flows?(b(),y("div",uo,[(b(!0),y(L,null,D(a.securityScheme.flows,(l,d)=>(b(),y("div",{key:d,class:"oapi-sec-scheme__flow"},[v("h4",null,S(d),1),l.authorizationUrl?(b(),y("div",po,[$(S(n.$openapidoc.getLocaleText("openapidoc.authorization_url"))+": ",1),v("code",null,S(l.authorizationUrl),1)])):E("",!0),l.tokenUrl?(b(),y("div",ho,[$(S(n.$openapidoc.getLocaleText("openapidoc.token_url"))+": ",1),v("code",null,S(l.tokenUrl),1)])):E("",!0),l.refreshUrl?(b(),y("div",mo,[$(S(n.$openapidoc.getLocaleText("openapidoc.refresh_url"))+": ",1),v("code",null,S(l.refreshUrl),1)])):E("",!0),l.scopes&&Object.keys(l.scopes).length?(b(),y("div",fo,[v("span",go,S(n.$openapidoc.getLocaleText("openapidoc.scopes"))+":",1),v("ul",_o,[(b(!0),y(L,null,D(l.scopes,(u,e)=>(b(),y("li",{key:e,class:"oapi-sec-scheme-scope"},[v("code",null,S(e),1),u?(b(),y("div",bo,S(u),1)):E("",!0)]))),128))])])):E("",!0)]))),128))])):E("",!0)])}const ti=J(ro,[["render",yo]]);const vo={name:"OpenApiExampleObject",props:{lite:Boolean,name:{type:String,default:""},nameTag:{type:String,default:"h3"},example:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}},computed:{valueFormatted(){return this.example.value?JSON.stringify(this.example.value,null,2):null}}},So={class:"oapi-example-obj"},Eo=["innerHTML"],ko=["innerHTML"],To={key:3,class:"oapi-example-obj__value"},Oo=["innerHTML"];function wo(n,t,a,c,i,s){return b(),y("div",So,[a.name?(b(),Z(Cn(a.nameTag),{key:0,class:"oapi-example-obj__name"},{default:oe(()=>[$(S(a.name),1)]),_:1})):E("",!0),a.example.summary?(b(),y("div",{key:1,class:"oapi-example-obj__summary",innerHTML:n.$openapidocRef.tr(a.example,"summary",a.currentLocale)},null,8,Eo)):E("",!0),a.example.description?(b(),y("div",{key:2,class:"oapi-example-obj__description",innerHTML:n.$openapidocRef.tr(a.example,"description",a.currentLocale)},null,8,ko)):E("",!0),s.valueFormatted?(b(),y("div",To,[v("pre",{innerHTML:s.valueFormatted},null,8,Oo)])):E("",!0)])}const Ze=J(vo,[["render",wo]]);const No={name:"OpenApiSchemaSubObject",props:{title:{type:String,default:""},currentLocale:{type:String,required:!0}},data(){return{}},methods:{}},Co={class:"oapi-schema-sub-obj"},Ao={class:"oapi-schema-sub-obj__head"},xo={class:"oapi-schema-sub-obj__title"},qo={class:"oapi-schema-sub-obj__content"};function Ro(n,t,a,c,i,s){return b(),y("div",Co,[v("div",Ao,[v("div",xo,S(a.title),1)]),v("div",null,[v("ul",qo,[Qa(n.$slots,"default")])])])}const ri=J(No,[["render",Ro]]);const Lo={name:"OpenApiSchemaProperty",components:{OpenApiSchemaSubObject:ri,OpenApiExpandIcon:ei},props:{name:{type:String,default:""},required:{type:Boolean},schema:{type:Object,required:!0},noLines:{type:Boolean},hideTitleDescription:{type:Boolean},open:{type:Boolean},currentLocale:{type:String,required:!0}},data(){return{isOpen:!1}},computed:{resolvedSchema(){return this.schema},isPlainArray(){if(!this.resolvedSchema)return!1;const n=["string","integer","number","boolean"];return this.resolvedSchema.type==="array"&&this.resolvedSchema.items&&n.includes(this.resolvedSchema.items.type)},isObject(){return this.resolvedSchema?this.resolvedSchema.type==="object":!1},isArray(){return this.resolvedSchema?this.resolvedSchema.type==="array":!1},isOneOf(){return!!(this.resolvedSchema&&this.resolvedSchema.oneOf)},isAnyOf(){return!!(this.resolvedSchema&&this.resolvedSchema.anyOf)},hasProperties(){return!!Object.keys(this.resolvedSchema.properties||{}).length},exampleString(){return this.resolvedSchema.example?typeof this.resolvedSchema.example=="object"?JSON.stringify(this.resolvedSchema.example,null,2):this.resolvedSchema.example.toString():""},computedOneAnyOf(){return this.resolvedSchema?this.resolvedSchema.oneOf||this.resolvedSchema.anyOf:[]},computedType(){let n=this.resolvedSchema.type||"any";return this.isPlainArray?(n=`array<${this.getType(this.resolvedSchema.items)}>`,this.resolvedSchema.nullable&&(n=`${n} or null`),n):this.getType(this.resolvedSchema)},flags(){const n=[];return this.resolvedSchema.deprecated&&n.push("Deprecated"),this.resolvedSchema.readOnly&&n.push("ReadOnly"),this.resolvedSchema.writeOnly&&n.push("WriteOnly"),this.resolvedSchema.uniqueItems&&n.push("UniqueItems"),n},requiredProps(){return this.isObject&&this.resolvedSchema.required&&Array.isArray(this.resolvedSchema.required)?this.resolvedSchema.required:[]},classes(){return{"oapi-prop--is-object":this.isObject,"oapi-prop--no-lines":this.noLines,"oapi-prop--no-name":!this.name,"oapi-prop--deprecated":!!this.resolvedSchema.deprecated}}},created(){this.isOneOf&&(this.isOpen=!0),this.open&&(this.isOpen=!0)},methods:{getType(n){let t=n.type||"any";if(!n)return t;if(n.oneOf||n.anyOf){const a=n.oneOf||n.anyOf||[];return a.length>0&&a[0].type&&a.every(c=>c.type&&c.type===a[0].type)?a[0].type:"mixed"}else n.format&&(t=`${t}:${n.format}`);return n.nullable&&(t=`${t} or null`),t},toggle(){this.isOpen=!this.isOpen}}},Mo={class:"oapi-prop-body"},Do={class:"oapi-prop-head"},$o={key:1,class:"oapi-prop__name"},jo={class:"oapi-prop__type"},Uo={key:2,class:"oapi-prop__required"},Io={class:"oapi-prop__content"},Bo={key:0,class:"oapi-prop__title"},Po=["innerHTML"],Ho={key:2,class:"oapi-prop__ext-docs"},Fo=["innerHTML"],zo=["href"],Ko={key:3,class:"oapi-prop-add-info"},Go={key:0},Jo=["innerHTML"],Wo={key:4,class:"oapi-prop-add-info"},Zo={key:5,class:"oapi-prop-add-info"},Vo={key:6,class:"oapi-prop-add-info"},Xo={key:7,class:"oapi-prop-add-info"},Qo={key:8,class:"oapi-prop-add-info"},Yo={key:9,class:"oapi-prop-add-info"},ec={key:10,class:"oapi-prop-add-info"},nc={key:11,class:"oapi-prop-add-info"},tc={key:12,class:"oapi-prop-add-info"},rc={key:13,class:"oapi-prop-add-info"},ac={key:14,class:"oapi-prop-add-info"},ic=["innerHTML"],sc={key:15,class:"oapi-prop-add-info oapi-prop-add-info--enums"},oc={key:16,class:"oapi-prop-flags"},cc={key:1,class:"oapi-prop__props-title"},lc={key:0,class:"oapi-prop-sub"},uc={class:"oapi-object__list"},dc={key:2,class:"oapi-prop__props-title"},pc={key:0},hc={key:1},mc={key:3,class:"oapi-prop-items-of"};function fc(n,t,a,c,i,s){const l=ei,d=Xt,u=ri;return s.resolvedSchema?(b(),y("li",{key:0,class:ye(["oapi-prop",s.classes])},[v("div",Mo,[v("div",Do,[s.isObject&&s.hasProperties||s.isOneOf?(b(),y("button",{key:0,class:ye(["oapi-prop-head__expand",{"oapi-prop-head__expand--is-open":i.isOpen}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},[F(l)],2)):E("",!0),a.name?(b(),y("div",$o,[v("code",null,S(a.name),1)])):E("",!0),v("div",jo,S(s.computedType),1),a.required?(b(),y("div",Uo,S(n.$openapidoc.getLocaleText("openapidoc.required")),1)):E("",!0)]),v("div",Io,[s.resolvedSchema.title&&!a.hideTitleDescription?(b(),y("div",Bo,S(n.$openapidocRef.tr(s.resolvedSchema,"title",a.currentLocale)),1)):E("",!0),s.resolvedSchema.description&&!a.hideTitleDescription?(b(),y("div",{key:1,class:"oapi-prop__description",innerHTML:n.$openapidocRef.tr(s.resolvedSchema,"description",a.currentLocale)},null,8,Po)):E("",!0),s.resolvedSchema.externalDocs?(b(),y("div",Ho,[s.resolvedSchema.externalDocs.description?(b(),y("div",{key:0,class:"oapi-prop__ext-docs-md",innerHTML:n.$openapidocRef.tr(s.resolvedSchema.externalDocs,"description",a.currentLocale)},null,8,Fo)):E("",!0),v("a",{href:s.resolvedSchema.externalDocs.url,target:"_blank"},S(n.$openapidoc.getLocaleText("openapidoc.external_docs")),9,zo)])):E("",!0),s.resolvedSchema.example?(b(),y("div",Ko,[$(S(n.$openapidoc.getLocaleText("openapidoc.example"))+": ",1),s.exampleString.includes(`
`)?(b(),y("br",Go)):E("",!0),v("code",{innerHTML:s.exampleString},null,8,Jo)])):E("",!0),s.resolvedSchema.multipleOf!==void 0?(b(),y("div",Wo,[$(S(n.$openapidoc.getLocaleText("openapidoc.multiple_of"))+": ",1),v("code",null,S(s.resolvedSchema.multipleOf),1)])):E("",!0),s.resolvedSchema.maximum!==void 0?(b(),y("div",Zo,[v("code",null,S(s.resolvedSchema.exclusiveMaximum?"<":"<=")+" "+S(s.resolvedSchema.maximum),1)])):E("",!0),s.resolvedSchema.minimum!==void 0?(b(),y("div",Vo,[v("code",null,S(s.resolvedSchema.exclusiveMinimum?">":">=")+" "+S(s.resolvedSchema.minimum),1)])):E("",!0),s.resolvedSchema.maxLength!==void 0?(b(),y("div",Xo,[$(S(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,S(s.resolvedSchema.maxLength),1)])):E("",!0),s.resolvedSchema.minLength!==void 0?(b(),y("div",Qo,[$(S(n.$openapidoc.getLocaleText("openapidoc.minimum"))+": ",1),v("code",null,S(s.resolvedSchema.minLength),1)])):E("",!0),s.resolvedSchema.maxItems!==void 0?(b(),y("div",Yo,[$(S(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,S(s.resolvedSchema.maxItems),1)])):E("",!0),s.resolvedSchema.minItems!==void 0?(b(),y("div",ec,[$(S(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,S(s.resolvedSchema.minItems),1)])):E("",!0),s.resolvedSchema.maxProperties!==void 0?(b(),y("div",nc,[$(S(n.$openapidoc.getLocaleText("openapidoc.maximum_props"))+": ",1),v("code",null,S(s.resolvedSchema.maxProperties),1)])):E("",!0),s.resolvedSchema.minProperties!==void 0?(b(),y("div",tc,[$(S(n.$openapidoc.getLocaleText("openapidoc.minimum_props"))+": ",1),v("code",null,S(s.resolvedSchema.minProperties),1)])):E("",!0),s.resolvedSchema.additionalProperties!==void 0&&typeof s.resolvedSchema.additionalProperties=="boolean"?(b(),y("div",rc,[$(S(n.$openapidoc.getLocaleText("openapidoc.additional_properties"))+": ",1),v("code",null,S(!!s.resolvedSchema.additionalProperties),1)])):E("",!0),s.resolvedSchema.pattern?(b(),y("div",ac,[$(S(n.$openapidoc.getLocaleText("openapidoc.pattern"))+": ",1),v("code",{innerHTML:s.resolvedSchema.pattern},null,8,ic)])):E("",!0),s.resolvedSchema.enum?(b(),y("div",sc,[$(S(n.$openapidoc.getLocaleText("openapidoc.enum"))+": ",1),(b(!0),y(L,null,D(s.resolvedSchema.enum,e=>(b(),y("span",{key:e},[v("code",null,S(e),1),$(S(" "))]))),128))])):E("",!0),s.flags.length?(b(),y("div",oc,[(b(!0),y(L,null,D(s.flags,e=>(b(),y("span",{key:e,class:"oapi-prop-flags__flag"},S(e),1))),128))])):E("",!0)]),s.resolvedSchema.not&&(!s.isObject||i.isOpen)?(b(),Z(u,{key:0,"current-locale":a.currentLocale,title:`${n.$openapidoc.getLocaleText("openapidoc.not")}:`},{default:oe(()=>[F(d,{"current-locale":a.currentLocale,schema:s.resolvedSchema.not},null,8,["current-locale","schema"])]),_:1},8,["current-locale","title"])):E("",!0),s.isObject&&i.isOpen&&s.hasProperties?(b(),y("div",cc,S(n.$openapidoc.getLocaleText("openapidoc.properties"))+": ",1)):E("",!0)]),s.isObject&&i.isOpen&&s.hasProperties?(b(),y("div",lc,[v("ul",uc,[(b(!0),y(L,null,D(s.resolvedSchema.properties,(e,h)=>(b(),Z(d,{key:h,schema:e,name:h,"current-locale":a.currentLocale,required:s.requiredProps.includes(h)},null,8,["schema","name","current-locale","required"]))),128))])])):E("",!0),s.resolvedSchema.additionalProperties&&typeof s.resolvedSchema.additionalProperties=="object"&&s.isObject?(b(),Z(u,{key:1,title:`${n.$openapidoc.getLocaleText("openapidoc.additional_properties")}:`,"current-locale":a.currentLocale},{default:oe(()=>[F(d,{schema:s.resolvedSchema.additionalProperties,"current-locale":a.currentLocale},null,8,["schema","current-locale"])]),_:1},8,["title","current-locale"])):E("",!0),(s.isOneOf||s.isAnyOf)&&i.isOpen?(b(),y("div",dc,[s.isOneOf?(b(),y("span",pc,S(n.$openapidoc.getLocaleText("openapidoc.one_of"))+":",1)):E("",!0),!s.isOneOf&&s.isAnyOf?(b(),y("span",hc,S(n.$openapidoc.getLocaleText("openapidoc.any_of"))+":",1)):E("",!0)])):E("",!0),(s.isOneOf||s.isAnyOf)&&i.isOpen?(b(),y("ul",mc,[(b(!0),y(L,null,D(s.computedOneAnyOf,(e,h)=>(b(),Z(d,{key:h,schema:e,"current-locale":a.currentLocale},null,8,["schema","current-locale"]))),128))])):E("",!0),s.isArray?(b(),Z(u,{key:4,title:"Items:","current-locale":a.currentLocale},{default:oe(()=>[F(d,{schema:s.resolvedSchema.items,"current-locale":a.currentLocale},null,8,["schema","current-locale"])]),_:1},8,["current-locale"])):E("",!0)],2)):E("",!0)}const Xt=J(Lo,[["render",fc]]);const gc={name:"OpenApiObjectModel",components:{OpenApiSchemaProperty:Xt},props:{lite:Boolean,schema:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}},computed:{resolvedSchema(){return this.$openapidocRef.repReplace(this.schema)},requiredProps(){return this.resolvedSchema.required&&Array.isArray(this.resolvedSchema.required)?this.resolvedSchema.required:[]}},methods:{}},_c={class:"oapi-object__list"};function bc(n,t,a,c,i,s){const l=Xt;return b(),y("div",{class:ye(["oapi-object",{"oapi-object--lite":a.lite}])},[v("ul",_c,[F(l,{"hide-title-description":!a.lite,schema:s.resolvedSchema,"current-locale":a.currentLocale,"no-lines":"",open:""},null,8,["hide-title-description","schema","current-locale"])])],2)}const Ne=J(gc,[["render",bc]]);const yc={props:{tabNames:{type:Object,default:null}},data(){return{activeSlotName:null}},computed:{computedTabNames(){return this.tabNames?this.tabNames:Object.keys(this.$slots).reduce((n,t)=>({...n,[t]:this.tabNames&&this.tabNames[t]||t}),{})}},created(){this.activeSlotName=Object.keys(this.$slots)[0]}},vc={class:"oapi-tabs"},Sc={class:"oapi-tabs-list"},Ec=["onClick"],kc={class:"oapi-tabs__content"};function Tc(n,t,a,c,i,s){return b(),y("div",vc,[v("ul",Sc,[(b(!0),y(L,null,D(s.computedTabNames,(l,d)=>(b(),y("li",{key:d,class:ye(["oapi-tabs-list__item",{"oapi-tabs-list__item--is-active":d===i.activeSlotName}]),onClick:u=>i.activeSlotName=d},S(l),11,Ec))),128))]),v("div",kc,[Qa(n.$slots,i.activeSlotName)])])}const ai=J(yc,[["render",Tc]]);const Oc={name:"OpenApiMediaTypes",components:{OpenApiExampleObject:Ze,OpenApiTabs:ai,OpenApiObjectModel:Ne,OpenApiDropdown:ni},props:{data:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{selectedMediaType:null}},computed:{types(){return Object.keys(this.data).map(n=>({value:n}))},medaTypeObject(){return this.selectedMediaType===null?null:this.data[this.selectedMediaType]||null}},created(){this.selectedMediaType=Object.keys(this.data||{})[0]||null},methods:{}},wc={class:"oapi-req-body-obj"},Nc={class:"oapi-req-body-obj-content-type"},Cc={class:"oapi-req-body-obj-content-type__label"},Ac={class:"oapi-req-body-obj__schema"},xc={class:"oapi-req-body-obj__example"},qc=["innerHTML"],Rc={class:"oapi-req-body-obj__examples"};function Lc(n,t,a,c,i,s){const l=ni,d=Ne,u=Ze,e=ai;return b(),y("div",wc,[v("div",Nc,[v("span",Cc,S(n.$openapidoc.getLocaleText("openapidoc.content_type"))+": ",1),F(l,{modelValue:i.selectedMediaType,"onUpdate:modelValue":t[0]||(t[0]=h=>i.selectedMediaType=h),options:s.types,"text-prop":"value","value-prop":"value"},null,8,["modelValue","options"])]),(b(),Z(e,{key:i.selectedMediaType},Ds({_:2},[s.medaTypeObject&&s.medaTypeObject.schema?{name:"Schema",fn:oe(()=>[v("div",Ac,[F(d,{schema:s.medaTypeObject.schema,"current-locale":a.currentLocale,lite:""},null,8,["schema","current-locale"])])]),key:"0"}:void 0,s.medaTypeObject&&s.medaTypeObject.example&&!s.medaTypeObject.examples?{name:"Example",fn:oe(()=>[v("div",xc,[v("pre",{innerHTML:JSON.stringify(s.medaTypeObject.example,null,2)},null,8,qc)])]),key:"1"}:void 0,s.medaTypeObject&&s.medaTypeObject.examples?{name:"Examples",fn:oe(()=>[v("div",Rc,[(b(!0),y(L,null,D(s.medaTypeObject.examples,(h,m)=>(b(),Z(u,{key:m,example:h,name:m,"current-locale":a.currentLocale,"name-tag":"h4"},null,8,["example","name","current-locale"]))),128))])]),key:"2"}:void 0]),1024))])}const Ce=J(Oc,[["render",Lc]]);const Mc={name:"OpenApiParameter",components:{OpenApiMediaTypes:Ce,OpenApiObjectModel:Ne},props:{data:{type:Object,required:!0},hideName:Boolean,hideDescription:Boolean,lite:Boolean,currentLocale:{type:String,required:!0}},data(){return{}},computed:{flags(){const n=[];return this.data.deprecated&&n.push("Deprecated"),this.data.allowEmptyValue&&n.push("Allow empty"),this.data.allowReserved&&n.push("Allow reserved"),this.data.allowEmptyValue&&n.push("Explode"),n},exampleString(){return this.data.example?typeof this.data.example=="object"?JSON.stringify(this.data.example,null,2):this.data.example.toString():""}}},Dc={class:"oapi-res-param"},$c={key:0,class:"oapi-res-param__name"},jc={key:1,class:"oapi-res-param__required"},Uc={key:2,class:"oapi-res-param-flags"},Ic=["innerHTML"],Bc={key:4,class:"oapi-res-param__param"},Pc={key:5,class:"oapi-res-param__param"},Hc={key:6,class:"oapi-res-param__param"},Fc={key:0},zc=["innerHTML"],Kc={key:7,class:"oapi-res-param__examples"},Gc={class:"oapi-res-param__muted"},Jc={class:"oapi-res-param-example__name"},Wc={key:0,class:"oapi-res-param-example__summary"},Zc=["innerHTML"],Vc={key:2,class:"oapi-res-param-example__value"},Xc=["innerHTML"],Qc={key:8,class:"oapi-res-param__schema"},Yc={class:"oapi-res-param__muted"},el={key:9,class:"oapi-res-param__content"},nl={class:"oapi-res-param__muted"};function tl(n,t,a,c,i,s){const l=Ne,d=Ce;return b(),y("div",Dc,[a.data.name&&!a.hideName?(b(),y("div",$c,[v("code",null,S(a.data.name),1)])):E("",!0),a.data.required?(b(),y("div",jc,S(n.$openapidoc.getLocaleText("openapidoc.required")),1)):E("",!0),s.flags.length?(b(),y("div",Uc,[(b(!0),y(L,null,D(s.flags,u=>(b(),y("span",{key:u,class:"oapi-res-param-flags__flag"},S(u),1))),128))])):E("",!0),a.data.description&&!a.hideDescription?(b(),y("div",{key:3,class:"oapi-res-param__description",innerHTML:n.$openapidocRef.tr(a.data,"description",a.currentLocale)},null,8,Ic)):E("",!0),a.data.in?(b(),y("div",Bc,[$(S(n.$openapidoc.getLocaleText("openapidoc.in"))+": ",1),v("code",null,S(a.data.in),1)])):E("",!0),a.data.style?(b(),y("div",Pc,[$(S(n.$openapidoc.getLocaleText("openapidoc.style"))+": ",1),v("code",null,S(a.data.style),1)])):E("",!0),a.data.example?(b(),y("div",Hc,[$(S(n.$openapidoc.getLocaleText("openapidoc.example"))+": ",1),s.exampleString.includes(`
`)?(b(),y("br",Fc)):E("",!0),v("code",{innerHTML:s.exampleString},null,8,zc)])):E("",!0),a.data.examples?(b(),y("div",Kc,[v("div",Gc,S(n.$openapidoc.getLocaleText("openapidoc.examples"))+": ",1),(b(!0),y(L,null,D(a.data.examples,(u,e)=>(b(),y("div",{key:e,class:"oapi-res-param-example"},[v("div",Jc,S(e),1),u.summary?(b(),y("div",Wc,S(n.$openapidocRef.tr(u,"summary",a.currentLocale)),1)):E("",!0),u.description?(b(),y("div",{key:1,class:"oapi-res-param-example__description",innerHTML:n.$openapidocRef.tr(u,"description",a.currentLocale)},null,8,Zc)):E("",!0),u.value?(b(),y("div",Vc,[v("pre",{innerHTML:JSON.stringify(u.value,null,2)},null,8,Xc)])):E("",!0)]))),128))])):E("",!0),a.data.schema?(b(),y("div",Qc,[v("div",Yc,S(n.$openapidoc.getLocaleText("openapidoc.schema"))+": ",1),F(l,{lite:"",schema:a.data.schema,"current-locale":a.currentLocale},null,8,["schema","current-locale"])])):E("",!0),a.data.content?(b(),y("div",el,[v("div",nl,S(n.$openapidoc.getLocaleText("openapidoc.content"))+": ",1),F(d,{"current-locale":a.currentLocale,data:a.data.content},null,8,["current-locale","data"])])):E("",!0)])}const Ve=J(Mc,[["render",tl]]);const rl={name:"OpenApiResponse",components:{OpenApiParameter:Ve,OpenApiObjectModel:Ne,OpenApiMediaTypes:Ce},props:{response:{type:Object,required:!0},currentLocale:{type:String,required:!0},lite:Boolean},data(){return{}},computed:{isEmpty(){return(!this.response.description||this.lite)&&(!this.response.headers||!Object.keys(this.response.headers).length)&&!this.response.content&&!this.response.schema}}},al={key:0,class:"oapi-response"},il=["innerHTML"],sl={key:1,class:"oapi-response__section"},ol={class:"oapi-response__section-title"},cl={class:"oapi-response-header__name"},ll={key:2,class:"oapi-response__section"},ul={key:0,class:"oapi-response__section-title"},dl={class:"oapi-response-media-types"},pl={key:3,class:"oapi-response__schema"},hl={key:0,class:"oapi-response__section-title"},ml={class:"oapi-response-media-types"};function fl(n,t,a,c,i,s){const l=Ve,d=Ce,u=Ne;return s.isEmpty?E("",!0):(b(),y("div",al,[a.response.description&&!a.lite?(b(),y("div",{key:0,class:"oapi-response__description",innerHTML:n.$openapidocRef.tr(a.response,"description",a.currentLocale)},null,8,il)):E("",!0),a.response.headers?(b(),y("div",sl,[v("strong",ol,S(n.$openapidoc.getLocaleText("openapidoc.headers")),1),(b(!0),y(L,null,D(a.response.headers,(e,h)=>(b(),y("div",{key:h,class:"oapi-response-header"},[v("div",cl,[v("code",null,S(h),1)]),F(l,{data:e,"current-locale":a.currentLocale,"hide-name":""},null,8,["data","current-locale"])]))),128))])):E("",!0),a.response.content?(b(),y("div",ll,[a.response.headers?(b(),y("strong",ul,S(n.$openapidoc.getLocaleText("openapidoc.content")),1)):E("",!0),v("div",dl,[F(d,{data:a.response.content,"current-locale":a.currentLocale,lite:""},null,8,["data","current-locale"])])])):E("",!0),a.response.schema?(b(),y("div",pl,[a.response.headers||a.response.content?(b(),y("strong",hl,S(n.$openapidoc.getLocaleText("openapidoc.schema")),1)):E("",!0),v("div",ml,[F(u,{schema:a.response.schema,"current-locale":a.currentLocale,lite:""},null,8,["schema","current-locale"])])])):E("",!0)]))}const Mn=J(rl,[["render",fl]]),gl={components:{OpenApiParameter:Ve,OpenApiResponse:Mn,OpenApiSecurityScheme:ti,OpenApiMediaTypes:Ce,OpenApiExampleObject:Ze,OpenApiObjectModel:Ne},props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},_l={key:0},bl={id:"security-schemes"},yl=["id","textContent"],vl=["innerHTML"];function Sl(n,t,a,c,i,s){const l=ti;return b(),y("div",null,[a.components.securitySchemes?(b(),y("div",_l,[v("h2",bl,S(n.$openapidoc.getLocaleText("openapidoc.security_schemes")),1),(b(!0),y(L,null,D(a.components.securitySchemes,(d,u)=>(b(),y("div",{key:u,class:"oapi-schema-block"},[v("h3",{id:"security-schemes-"+u,textContent:S(u)},null,8,yl),d.description?(b(),y("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(d,"description",a.currentLocale)},null,8,vl)):E("",!0),F(l,{"current-locale":a.currentLocale,"security-scheme":d},null,8,["current-locale","security-scheme"])]))),128))])):E("",!0)])}const _y=J(gl,[["render",Sl]]),El={props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},kl={key:0},Tl={id:"schemas"},Ol=["id","textContent"],wl=["innerHTML"],Nl=["innerHTML"],Cl={key:1},Al={id:"examples"},xl={key:2},ql={id:"request-bodies"},Rl=["id","textContent"],Ll={class:"oapi-schema-block__required"},Ml=["innerHTML"],Dl={key:3},$l={id:"responses"},jl=["id","textContent"],Ul=["innerHTML"],Il={key:4},Bl={id:"parameters"},Pl=["id","textContent"],Hl=["innerHTML"],Fl={key:5},zl={id:"headers"},Kl=["id","textContent"],Gl=["innerHTML"];function Jl(n,t,a,c,i,s){const l=Ne,d=Ze,u=Ce,e=Mn,h=Ve;return b(),y("div",null,[a.components.schemas?(b(),y("div",kl,[v("h2",Tl,S(n.$openapidoc.getLocaleText("openapidoc.schemas")),1),(b(!0),y(L,null,D(a.components.schemas,(m,g)=>(b(),y("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:S(g)},null,8,Ol),m.title?(b(),y("div",{key:0,class:"oapi-schema-block__title",innerHTML:n.$openapidocRef.tr(m,"title",a.currentLocale)},null,8,wl)):E("",!0),m.description?(b(),y("div",{key:1,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Nl)):E("",!0),F(l,{class:"oapi-schema-block__model",schema:m,"current-locale":a.currentLocale,root:""},null,8,["schema","current-locale"])]))),128))])):E("",!0),a.components.examples?(b(),y("div",Cl,[v("h2",Al,S(n.$openapidoc.getLocaleText("openapidoc.examples")),1),(b(!0),y(L,null,D(a.components.examples,(m,g)=>(b(),y("div",{key:g,class:"oapi-schema-block"},[F(d,{example:m,name:g,"current-locale":a.currentLocale,"name-tag":"h3"},null,8,["example","name","current-locale"])]))),128))])):E("",!0),a.components.requestBodies?(b(),y("div",xl,[v("h2",ql,S(n.$openapidoc.getLocaleText("openapidoc.request_bodies")),1),(b(!0),y(L,null,D(a.components.requestBodies,(m,g)=>(b(),y("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:S(g)},null,8,Rl),v("div",Ll,S(n.$openapidoc.getLocaleText("openapidoc.required")),1),m.description?(b(),y("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Ml)):E("",!0),F(u,{data:m.content,"current-locale":a.currentLocale},null,8,["data","current-locale"])]))),128))])):E("",!0),a.components.responses?(b(),y("div",Dl,[v("h2",$l,S(n.$openapidoc.getLocaleText("openapidoc.responses")),1),(b(!0),y(L,null,D(a.components.responses,(m,g)=>(b(),y("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:S(g)},null,8,jl),m.description?(b(),y("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Ul)):E("",!0),F(e,{response:m,"current-locale":a.currentLocale},null,8,["response","current-locale"])]))),128))])):E("",!0),a.components.parameters?(b(),y("div",Il,[v("h2",Bl,S(n.$openapidoc.getLocaleText("openapidoc.parameters")),1),n.name!=="Authorization"?(b(!0),y(L,{key:0},D(a.components.parameters,(m,g)=>(b(),y("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:S(g)},null,8,Pl),m.description?(b(),y("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Hl)):E("",!0),F(h,{data:m,"hide-description":"","current-locale":a.currentLocale},null,8,["data","current-locale"])]))),128)):E("",!0)])):E("",!0),a.components.headers?(b(),y("div",Fl,[v("h2",zl,S(n.$openapidoc.getLocaleText("openapidoc.headers")),1),(b(!0),y(L,null,D(a.components.headers,(m,g)=>(b(),y("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:S(g)},null,8,Kl),m.description?(b(),y("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Gl)):E("",!0),F(h,{data:m,"current-locale":a.currentLocale,"hide-name":"","hide-description":""},null,8,["data","current-locale"])]))),128))])):E("",!0)])}const by=J(El,[["render",Jl]]);const Wl={props:{path:{type:String,required:!0},method:{type:String,required:!0},tags:{type:Array,default:()=>[]},summary:{type:String,default:null},description:{type:String,default:null},deprecated:Boolean,currentLocale:{type:String,required:!0},server:{type:String,required:!1,default:""}},computed:{requestUrl(){return this.server+""+this.path},title(){return this.summary&&this.summary!==""?this.summary:this.path}}},Zl=["id"],Vl=["textContent"],Xl={key:0,class:"oapi-route-header__deprecated",role:"alert"},Ql={class:"oapi-route-header__tags"},Yl=["innerHTML"];function eu(n,t,a,c,i,s){return b(),y("div",{class:ye(["oapi-route-header",{"oapi-route-header--deprecated":a.deprecated}])},[v("h1",{id:"method-"+a.method,class:"oapi-route-header__title"},[v("span",{class:ye(["oapi-method-tag",`oapi-method-tag--${a.method}`])},S(a.method),3),$(" "+S(s.title),1)],8,Zl),v("div",{class:"oapi-route-header__path",onClick:t[0]||(t[0]=l=>n.$openapidoc.copyToClipboard(s.requestUrl,l))},[v("code",{textContent:S(s.requestUrl)},null,8,Vl)]),a.deprecated?(b(),y("div",Xl,[v("span",null,S(n.$openapidoc.getLocaleText("openapidoc.deprecated")),1)])):E("",!0),v("div",Ql,[(b(!0),y(L,null,D(a.tags,l=>(b(),y("span",{key:l,class:"oapi-route-header__tag"},S(l),1))),128))]),v("div",{class:"oapi-route-header__description",innerHTML:a.description},null,8,Yl)],2)}const ii=J(Wl,[["render",eu]]);const nu={name:"OpenApiServer",props:{server:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}}},tu={class:"oapi-server"},ru={key:0,class:"oapi-server__url"},au=["innerHTML"],iu={key:2,class:"oapi-server-vars"},su={class:"oapi-server-vars__title"},ou={class:"oapi-server-var"},cu={class:"oapi-server-var__name"},lu=["innerHTML"],uu={key:1,class:"oapi-server-var__default"},du={key:2,class:"oapi-server-var__enum"};function pu(n,t,a,c,i,s){return b(),y("div",tu,[a.server.url?(b(),y("div",ru,[v("code",null,S(a.server.url),1)])):E("",!0),a.server.description?(b(),y("div",{key:1,class:"oapi-server__description",innerHTML:n.$openapidocRef.tr(a.server,"description",a.currentLocale)},null,8,au)):E("",!0),a.server.variables&&Object.keys(a.server.variables).length?(b(),y("div",iu,[v("div",su,S(n.$openapidoc.getLocaleText("openapidoc.variables")),1),v("ul",null,[(b(!0),y(L,null,D(a.server.variables,(l,d)=>(b(),y("li",ou,[v("div",cu,[v("code",null,S(d),1)]),l.description?(b(),y("div",{key:0,class:"oapi-server-var__description",innerHTML:n.$openapidocRef.tr(l,"description",a.currentLocale)},null,8,lu)):E("",!0),l.default?(b(),y("div",uu,[$(S(n.$openapidoc.getLocaleText("openapidoc.default"))+": ",1),v("code",null,S(l.default),1)])):E("",!0),l.enum?(b(),y("div",du,[$(S(n.$openapidoc.getLocaleText("openapidoc.enum"))+": ",1),(b(!0),y(L,null,D(l.enum,u=>(b(),y("span",{key:u},[v("code",null,S(u),1),$(S(" "))]))),128))])):E("",!0)]))),256))])])):E("",!0)])}const si=J(nu,[["render",pu]]);const hu={name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{getRoute(n){return{name:`openapi-${this.path_doc}${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:"components"},hash:"#"+n}}}},mu={class:"oapi-sec-requirement"},fu=["data-scheme"],gu={class:"oapi-sec-requirement-item__scheme"},_u={class:"oapi-sec-requirement-item__scopes"};function bu(n,t,a,c,i,s){const l=Ya;return b(),y("div",mu,[v("ul",null,[(b(!0),y(L,null,D(a.securityRequirement,(d,u)=>(b(),y("li",{key:u,"data-scheme":u},[F(l,{to:s.getRoute(u),class:"oapi-sec-requirement-item"},{default:oe(()=>[v("span",gu,S(u),1),v("ul",_u,[(b(!0),y(L,null,D(d,e=>(b(),y("li",{key:e},[v("code",null,S(e),1)]))),128))])]),_:2},1032,["to"])],8,fu))),128))])])}const oi=J(hu,[["render",bu],["__scopeId","data-v-9e8502f7"]]);const yu={name:"OpenApiSecurity",components:{OpenApiSecurityRequirement:oi},props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}}},vu={class:"oapi-route-sec"},Su={id:"security"},Eu={class:"oapi-route-sec__list"};function ku(n,t,a,c,i,s){const l=oi;return b(),y("div",vu,[v("h2",Su,S(n.$openapidoc.getLocaleText("openapidoc.security")),1),v("ul",Eu,[(b(!0),y(L,null,D(a.security,(d,u)=>(b(),y("li",{key:u},[F(l,{"security-requirement":d,"current-locale":a.currentLocale,path_doc:a.path_doc,file:a.file},null,8,["security-requirement","current-locale","path_doc","file"])]))),128))])])}const ci=J(yu,[["render",ku]]),Tu={components:{OpenApiParameter:Ve},props:{title:{type:String,required:!1,default:"Parameters"},parameters:{type:Array,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}}},Ou={id:"parameters"},wu=["textContent"];function Nu(n,t,a,c,i,s){const l=Ve;return b(),y("div",null,[v("h2",Ou,[v("span",{textContent:S(a.title)},null,8,wu)]),(b(!0),y(L,null,D(a.parameters,d=>(b(),Z(l,{key:`${d.name}-${d.in||"def"}`,data:d,"current-locale":a.currentLocale},null,8,["data","current-locale"]))),128))])}const Dn=J(Tu,[["render",Nu]]);const Cu={name:"OpenApiRequestBody",components:{OpenApiMediaTypes:Ce},props:{requestBody:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})},isCb:Boolean,hPrefix:{type:String,default:""}}},Au={class:"oapi-req-body"},xu={key:0,class:"oapi-req-body__required"},qu=["innerHTML"];function Ru(n,t,a,c,i,s){const l=Ce;return b(),y("div",Au,[(b(),Z(Cn(a.isCb?"h3":"h2"),{id:`${a.hPrefix}request-body`},{default:oe(()=>[$(S(n.$openapidoc.getLocaleText("openapidoc.request_body")),1)]),_:1},8,["id"])),a.requestBody.required?(b(),y("div",xu,S(n.$openapidoc.getLocaleText("openapidoc.required")),1)):E("",!0),a.requestBody.description?(b(),y("div",{key:1,class:"oapi-req-body__description",innerHTML:n.$openapidocRef.tr(a.requestBody,"description",a.currentLocale)},null,8,qu)):E("",!0),a.requestBody.content?(b(),Z(l,{key:2,data:a.requestBody.content,"current-locale":a.currentLocale},null,8,["data","current-locale"])):E("",!0)])}const $n=J(Cu,[["render",Ru]]);const Lu={name:"OpenApiResponses",components:{OpenApiResponse:Mn},props:{isCb:Boolean,hPrefix:{type:String,default:""},responses:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}}},Mu={class:"oapi-responses"},Du=["innerHTML"];function $u(n,t,a,c,i,s){const l=Mn;return b(),y("div",Mu,[(b(),Z(Cn(a.isCb?"h3":"h2"),{id:`${a.hPrefix}responses`},{default:oe(()=>[$(S(n.$openapidoc.getLocaleText("openapidoc.responses")),1)]),_:1},8,["id"])),(b(!0),y(L,null,D(a.responses,(d,u)=>(b(),y("div",{key:u,class:"oapi-responses-item"},[(b(),Z(Cn(a.isCb?"h4":"h3"),{id:`${a.hPrefix}response-${u}`,class:"oapi-responses-item__status"},{default:oe(()=>[$(S(u),1)]),_:2},1032,["id"])),v("div",{class:"oapi-responses-item__description",innerHTML:n.$openapidocRef.tr(d,"description",a.currentLocale)},null,8,Du),F(l,{lite:"","current-locale":a.currentLocale,response:d},null,8,["current-locale","response"])]))),128))])}const jn=J(Lu,[["render",$u]]);const ju={props:{items:{type:Object,required:!0}},data(){return{isOpen:!1,preSelectedSnippet:"javascript",selectedSnippet:"javascript",selectedLibrary:"xmlhttprequest"}},computed:{selectedText(){return this.selectedSnippet+" / "+this.selectedLibrary}},methods:{handleItemClick(n,t=null){t?(this.selectedSnippet=n,this.selectedLibrary=t,this.$emit("select",n,t),this.isOpen=!1):this.preSelectedSnippet=n}}},li=n=>(js("data-v-5101a728"),n=n(),Us(),n),Uu={class:"oapi-dd-sub"},Iu=li(()=>v("svg",{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1)),Bu={key:0,class:"oapi-dd-sub-list",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},Pu=["onClick"],Hu={class:"oapi-dd-sub-item"},Fu={class:"oapi-dd-sub-item__title"},zu=li(()=>v("span",{class:"oapi-dd-sub-item__icon"},[v("svg",{viewBox:"0 0 20 20",fill:"currentColor"},[v("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1)),Ku={key:0,class:"oapi-dd-sub-sub-menu"},Gu=["onClick"];function Ju(n,t,a,c,i,s){return b(),y("div",Uu,[v("button",{type:"button",class:ye(["oapi-dd-sub__btn",{"oapi-dd-sub__btn--is-open":i.isOpen}]),onClick:t[0]||(t[0]=l=>i.isOpen=!i.isOpen)},[v("b",null,S(s.selectedText?s.selectedText:"Select Library"),1),Iu],2),F($s,{name:"oapi-dropdown"},{default:oe(()=>[i.isOpen?(b(),y("ul",Bu,[(b(!0),y(L,null,D(a.items,(l,d)=>(b(),y("li",{key:d,role:"menuitem",class:"oapi-dd-sub-list__item",onClick:u=>s.handleItemClick(d)},[l?(b(),y(L,{key:0},[v("div",Hu,[v("span",Fu,S(d),1),zu]),i.preSelectedSnippet===d?(b(),y("ul",Ku,[(b(!0),y(L,null,D(l,u=>(b(),y("li",{key:u,class:"oapi-dd-sub-sub-menu__item",onClick:e=>s.handleItemClick(d,u)},S(u),9,Gu))),128))])):E("",!0)],64)):(b(),y(L,{key:1},[$(S(l.snippet),1)],64))],8,Pu))),128))])):E("",!0)]),_:1})])}const ui=J(ju,[["render",Ju],["__scopeId","data-v-5101a728"]]);/*!
 * Request Templater v1.3.1
 *
 * Copyright (C) 2012-2023 Pavel Kuz`min (@s00d).
 *
 * Date: Wed, 01 Nov 2023 11:34:05 GMT
 */function C(n){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(n)}function Wu(n,t){for(var a=0;a<t.length;a++){var c=t[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,di(c.key),c)}}function qe(n,t,a){return(t=di(t))in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function _(n,t){if(n!==t)throw new TypeError("Cannot instantiate an arrow function")}function Ye(n,t){return function(a){if(Array.isArray(a))return a}(n)||function(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var s,l,d,u,e=[],h=!0,m=!1;try{if(d=(i=i.call(a)).next,c===0){if(Object(i)!==i)return;h=!1}else for(;!(h=(s=d.call(i)).done)&&(e.push(s.value),e.length!==c);h=!0);}catch(g){m=!0,l=g}finally{try{if(!h&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(m)throw l}}return e}}(n,t)||function(a,c){if(a){if(typeof a=="string")return Cr(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Cr(a,c)}}(n,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Cr(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,c=new Array(t);a<t;a++)c[a]=n[a];return c}function di(n){var t=function(a,c){if(typeof a!="object"||a===null)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var s=i.call(a,c||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}(n,"string");return typeof t=="symbol"?t:String(t)}var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var pn=function(n){return n&&n.Math===Math&&n},re=pn(typeof globalThis=="object"&&globalThis)||pn(typeof window=="object"&&window)||pn(typeof self=="object"&&self)||pn(typeof et=="object"&&et)||function(){return this}()||et||Function("return this")(),sn={},Q=function(n){try{return!!n()}catch{return!0}},pe=!Q(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),on=!Q(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),Vu=on,hn=Function.prototype.call,Ae=Vu?hn.bind(hn):function(){return hn.apply(hn,arguments)},Qt={},pi={}.propertyIsEnumerable,hi=Object.getOwnPropertyDescriptor,Xu=hi&&!pi.call({1:2},1);Qt.f=Xu?function(n){var t=hi(this,n);return!!t&&t.enumerable}:pi;var Te,Tn,Yt=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}},mi=on,fi=Function.prototype,jt=fi.call,Qu=mi&&fi.bind.bind(jt,jt),X=mi?Qu:function(n){return function(){return jt.apply(n,arguments)}},gi=X,Yu=gi({}.toString),ed=gi("".slice),Le=function(n){return ed(Yu(n),8,-1)},nd=Q,td=Le,nt=Object,rd=X("".split),Un=nd(function(){return!nt("z").propertyIsEnumerable(0)})?function(n){return td(n)==="String"?rd(n,""):nt(n)}:nt,In=function(n){return n==null},ad=In,id=TypeError,Me=function(n){if(ad(n))throw new id("Can't call method on "+n);return n},sd=Un,od=Me,Xe=function(n){return sd(od(n))},tt=typeof document=="object"&&document.all,Bn={all:tt,IS_HTMLDDA:tt===void 0&&tt!==void 0},cd=Bn.all,ae=Bn.IS_HTMLDDA?function(n){return typeof n=="function"||n===cd}:function(n){return typeof n=="function"},Ar=ae,ld=Bn.all,ve=Bn.IS_HTMLDDA?function(n){return typeof n=="object"?n!==null:Ar(n)||n===ld}:function(n){return typeof n=="object"?n!==null:Ar(n)},rt=re,ud=ae,Pn=function(n,t){return arguments.length<2?(a=rt[n],ud(a)?a:void 0):rt[n]&&rt[n][t];var a},_i=X({}.isPrototypeOf),bi=re,at=typeof navigator<"u"&&String(navigator.userAgent)||"",xr=bi.process,qr=bi.Deno,Rr=xr&&xr.versions||qr&&qr.version,Lr=Rr&&Rr.v8;Lr&&(Tn=(Te=Lr.split("."))[0]>0&&Te[0]<4?1:+(Te[0]+Te[1])),!Tn&&at&&(!(Te=at.match(/Edge\/(\d+)/))||Te[1]>=74)&&(Te=at.match(/Chrome\/(\d+)/))&&(Tn=+Te[1]);var nn=Tn,Mr=nn,dd=Q,pd=re.String,yi=!!Object.getOwnPropertySymbols&&!dd(function(){var n=Symbol("symbol detection");return!pd(n)||!(Object(n)instanceof Symbol)||!Symbol.sham&&Mr&&Mr<41}),vi=yi&&!Symbol.sham&&typeof Symbol.iterator=="symbol",hd=Pn,md=ae,fd=_i,gd=Object,Si=vi?function(n){return typeof n=="symbol"}:function(n){var t=hd("Symbol");return md(t)&&fd(t.prototype,gd(n))},_d=String,bd=ae,yd=function(n){try{return _d(n)}catch{return"Object"}},vd=TypeError,Hn=function(n){if(bd(n))return n;throw new vd(yd(n)+" is not a function")},Sd=Hn,Ed=In,er=function(n,t){var a=n[t];return Ed(a)?void 0:Sd(a)},it=Ae,st=ae,ot=ve,kd=TypeError,Ei={exports:{}},Dr=re,Td=Object.defineProperty,nr=function(n,t){try{Td(Dr,n,{value:t,configurable:!0,writable:!0})}catch{Dr[n]=t}return t},Od=nr,$r="__core-js_shared__",tr=re[$r]||Od($r,{}),jr=tr;(Ei.exports=function(n,t){return jr[n]||(jr[n]=t!==void 0?t:{})})("versions",[]).push({version:"3.33.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var rr=Ei.exports,wd=Me,Nd=Object,De=function(n){return Nd(wd(n))},Cd=De,Ad=X({}.hasOwnProperty),he=Object.hasOwn||function(n,t){return Ad(Cd(n),t)},xd=X,qd=0,Rd=Math.random(),Ld=xd((+"1").toString),ki=function(n){return"Symbol("+(n===void 0?"":n)+")_"+Ld(++qd+Rd,36)},Md=rr,Ur=he,Dd=ki,$d=yi,jd=vi,Ge=re.Symbol,ct=Md("wks"),Ud=jd?Ge.for||Ge:Ge&&Ge.withoutSetter||Dd,me=function(n){return Ur(ct,n)||(ct[n]=$d&&Ur(Ge,n)?Ge[n]:Ud("Symbol."+n)),ct[n]},Id=Ae,Ir=ve,Br=Si,Bd=er,Pd=function(n,t){var a,c;if(t==="string"&&st(a=n.toString)&&!ot(c=it(a,n))||st(a=n.valueOf)&&!ot(c=it(a,n))||t!=="string"&&st(a=n.toString)&&!ot(c=it(a,n)))return c;throw new kd("Can't convert object to primitive value")},Hd=TypeError,Fd=me("toPrimitive"),zd=function(n,t){if(!Ir(n)||Br(n))return n;var a,c=Bd(n,Fd);if(c){if(t===void 0&&(t="default"),a=Id(c,n,t),!Ir(a)||Br(a))return a;throw new Hd("Can't convert object to primitive value")}return t===void 0&&(t="number"),Pd(n,t)},Kd=Si,ar=function(n){var t=zd(n,"string");return Kd(t)?t:t+""},Pr=ve,Ut=re.document,Gd=Pr(Ut)&&Pr(Ut.createElement),ir=function(n){return Gd?Ut.createElement(n):{}},Jd=ir,Ti=!pe&&!Q(function(){return Object.defineProperty(Jd("div"),"a",{get:function(){return 7}}).a!==7}),Wd=pe,Zd=Ae,Vd=Qt,Xd=Yt,Qd=Xe,Yd=ar,ep=he,np=Ti,Hr=Object.getOwnPropertyDescriptor;sn.f=Wd?Hr:function(n,t){if(n=Qd(n),t=Yd(t),np)try{return Hr(n,t)}catch{}if(ep(n,t))return Xd(!Zd(Vd.f,n,t),n[t])};var $e={},Oi=pe&&Q(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),tp=ve,rp=String,ap=TypeError,Se=function(n){if(tp(n))return n;throw new ap(rp(n)+" is not an object")},ip=pe,sp=Ti,op=Oi,mn=Se,Fr=ar,cp=TypeError,lt=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,ut="enumerable",dt="configurable",pt="writable";$e.f=ip?op?function(n,t,a){if(mn(n),t=Fr(t),mn(a),typeof n=="function"&&t==="prototype"&&"value"in a&&pt in a&&!a[pt]){var c=lp(n,t);c&&c[pt]&&(n[t]=a.value,a={configurable:dt in a?a[dt]:c[dt],enumerable:ut in a?a[ut]:c[ut],writable:!1})}return lt(n,t,a)}:lt:function(n,t,a){if(mn(n),t=Fr(t),mn(a),sp)try{return lt(n,t,a)}catch{}if("get"in a||"set"in a)throw new cp("Accessors not supported");return"value"in a&&(n[t]=a.value),n};var up=$e,dp=Yt,Fn=pe?function(n,t,a){return up.f(n,t,dp(1,a))}:function(n,t,a){return n[t]=a,n},wi={exports:{}},It=pe,pp=he,Ni=Function.prototype,hp=It&&Object.getOwnPropertyDescriptor,ht=pp(Ni,"name"),sr={EXISTS:ht,PROPER:ht&&(function(){}).name==="something",CONFIGURABLE:ht&&(!It||It&&hp(Ni,"name").configurable)},mp=ae,Bt=tr,fp=X(Function.toString);mp(Bt.inspectSource)||(Bt.inspectSource=function(n){return fp(n)});var An,en,xn,Ci=Bt.inspectSource,gp=ae,zr=re.WeakMap,_p=gp(zr)&&/native code/.test(String(zr)),bp=ki,Kr=rr("keys"),or=function(n){return Kr[n]||(Kr[n]=bp(n))},cr={},yp=_p,Ai=re,vp=ve,Sp=Fn,mt=he,ft=tr,Ep=or,kp=cr,Gr="Object already initialized",Pt=Ai.TypeError,Tp=Ai.WeakMap;if(yp||ft.state){var ue=ft.state||(ft.state=new Tp);ue.get=ue.get,ue.has=ue.has,ue.set=ue.set,An=function(n,t){if(ue.has(n))throw new Pt(Gr);return t.facade=n,ue.set(n,t),t},en=function(n){return ue.get(n)||{}},xn=function(n){return ue.has(n)}}else{var Pe=Ep("state");kp[Pe]=!0,An=function(n,t){if(mt(n,Pe))throw new Pt(Gr);return t.facade=n,Sp(n,Pe,t),t},en=function(n){return mt(n,Pe)?n[Pe]:{}},xn=function(n){return mt(n,Pe)}}var lr={set:An,get:en,has:xn,enforce:function(n){return xn(n)?en(n):An(n,{})},getterFor:function(n){return function(t){var a;if(!vp(t)||(a=en(t)).type!==n)throw new Pt("Incompatible receiver, "+n+" required");return a}}},ur=X,Op=Q,wp=ae,fn=he,Ht=pe,Np=sr.CONFIGURABLE,Cp=Ci,Ap=lr.enforce,xp=lr.get,Jr=String,On=Object.defineProperty,qp=ur("".slice),Rp=ur("".replace),Lp=ur([].join),Mp=Ht&&!Op(function(){return On(function(){},"length",{value:8}).length!==8}),Dp=String(String).split("String"),$p=wi.exports=function(n,t,a){qp(Jr(t),0,7)==="Symbol("&&(t="["+Rp(Jr(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),a&&a.getter&&(t="get "+t),a&&a.setter&&(t="set "+t),(!fn(n,"name")||Np&&n.name!==t)&&(Ht?On(n,"name",{value:t,configurable:!0}):n.name=t),Mp&&a&&fn(a,"arity")&&n.length!==a.arity&&On(n,"length",{value:a.arity});try{a&&fn(a,"constructor")&&a.constructor?Ht&&On(n,"prototype",{writable:!1}):n.prototype&&(n.prototype=void 0)}catch{}var c=Ap(n);return fn(c,"source")||(c.source=Lp(Dp,typeof t=="string"?t:"")),n};Function.prototype.toString=$p(function(){return wp(this)&&xp(this).source||Cp(this)},"toString");var xi=wi.exports,jp=ae,Up=$e,Ip=xi,Bp=nr,cn=function(n,t,a,c){c||(c={});var i=c.enumerable,s=c.name!==void 0?c.name:t;if(jp(a)&&Ip(a,s,c),c.global)i?n[t]=a:Bp(t,a);else{try{c.unsafe?n[t]&&(i=!0):delete n[t]}catch{}i?n[t]=a:Up.f(n,t,{value:a,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return n},qi={},Pp=Math.ceil,Hp=Math.floor,Fp=Math.trunc||function(n){var t=+n;return(t>0?Hp:Pp)(t)},zn=function(n){var t=+n;return t!=t||t===0?0:Fp(t)},zp=zn,Kp=Math.max,Gp=Math.min,Jp=zn,Wp=Math.min,ln=function(n){return n>0?Wp(Jp(n),9007199254740991):0},Zp=ln,Kn=function(n){return Zp(n.length)},Vp=Xe,Xp=function(n,t){var a=zp(n);return a<0?Kp(a+t,0):Gp(a,t)},Qp=Kn,Wr=function(n){return function(t,a,c){var i,s=Vp(t),l=Qp(s),d=Xp(c,l);if(n&&a!=a){for(;l>d;)if((i=s[d++])!=i)return!0}else for(;l>d;d++)if((n||d in s)&&s[d]===a)return n||d||0;return!n&&-1}},Yp={includes:Wr(!0),indexOf:Wr(!1)},gt=he,eh=Xe,nh=Yp.indexOf,th=cr,Zr=X([].push),Ri=function(n,t){var a,c=eh(n),i=0,s=[];for(a in c)!gt(th,a)&&gt(c,a)&&Zr(s,a);for(;t.length>i;)gt(c,a=t[i++])&&(~nh(s,a)||Zr(s,a));return s},dr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],rh=Ri,ah=dr.concat("length","prototype");qi.f=Object.getOwnPropertyNames||function(n){return rh(n,ah)};var Li={};Li.f=Object.getOwnPropertySymbols;var ih=Pn,sh=qi,oh=Li,ch=Se,lh=X([].concat),uh=ih("Reflect","ownKeys")||function(n){var t=sh.f(ch(n)),a=oh.f;return a?lh(t,a(n)):t},Vr=he,dh=uh,ph=sn,hh=$e,mh=Q,fh=ae,gh=/#|\.prototype\./,un=function(n,t){var a=bh[_h(n)];return a===vh||a!==yh&&(fh(t)?mh(t):!!t)},_h=un.normalize=function(n){return String(n).replace(gh,".").toLowerCase()},bh=un.data={},yh=un.NATIVE="N",vh=un.POLYFILL="P",Sh=un,_t=re,Eh=sn.f,kh=Fn,Th=cn,Oh=nr,wh=function(n,t,a){for(var c=dh(t),i=hh.f,s=ph.f,l=0;l<c.length;l++){var d=c[l];Vr(n,d)||a&&Vr(a,d)||i(n,d,s(t,d))}},Nh=Sh,ie=function(n,t){var a,c,i,s,l,d=n.target,u=n.global,e=n.stat;if(a=u?_t:e?_t[d]||Oh(d,{}):(_t[d]||{}).prototype)for(c in t){if(s=t[c],i=n.dontCallGetSet?(l=Eh(a,c))&&l.value:a[c],!Nh(u?c:d+(e?".":"#")+c,n.forced)&&i!==void 0){if(typeof s==typeof i)continue;wh(s,i)}(n.sham||i&&i.sham)&&kh(s,"sham",!0),Th(a,c,s,n)}},Ch=Le,Ah=X,tn=function(n){if(Ch(n)==="Function")return Ah(n)},Mi={};Mi[me("toStringTag")]="z";var bt,pr=String(Mi)==="[object z]",xh=pr,qh=ae,wn=Le,Rh=me("toStringTag"),Lh=Object,Mh=wn(function(){return arguments}())==="Arguments",hr=xh?wn:function(n){var t,a,c;return n===void 0?"Undefined":n===null?"Null":typeof(a=function(i,s){try{return i[s]}catch{}}(t=Lh(n),Rh))=="string"?a:Mh?wn(t):(c=wn(t))==="Object"&&qh(t.callee)?"Arguments":c},Dh=hr,$h=String,je=function(n){if(Dh(n)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return $h(n)},jh=ve,Uh=Le,Ih=me("match"),Bh=function(n){var t;return jh(n)&&((t=n[Ih])!==void 0?!!t:Uh(n)==="RegExp")},Ph=TypeError,Di=function(n){if(Bh(n))throw new Ph("The method doesn't accept regular expressions");return n},Hh=me("match"),$i=function(n){var t=/./;try{"/./"[n](t)}catch{try{return t[Hh]=!1,"/./"[n](t)}catch{}}return!1},Fh=ie,ji=tn,zh=sn.f,Kh=ln,Xr=je,Gh=Di,Jh=Me,Wh=$i,Qr=ji("".startsWith),Zh=ji("".slice),Vh=Math.min,Yr=Wh("startsWith");Fh({target:"String",proto:!0,forced:!!(Yr||(bt=zh(String.prototype,"startsWith"),!bt||bt.writable))&&!Yr},{startsWith:function(n){var t=Xr(Jh(this));Gh(n);var a=Kh(Vh(arguments.length>1?arguments[1]:void 0,t.length)),c=Xr(n);return Qr?Qr(t,c,a):Zh(t,a,a+c.length)===c}});var Xh=ie,Ui=tn,Qh=sn.f,Yh=ln,ea=je,em=Di,nm=Me,tm=$i,na=Ui("".endsWith),rm=Ui("".slice),am=Math.min,Ii=tm("endsWith"),im=!Ii&&!!function(){var n=Qh(String.prototype,"endsWith");return n&&!n.writable}();Xh({target:"String",proto:!0,forced:!im&&!Ii},{endsWith:function(n){var t=ea(nm(this));em(n);var a=arguments.length>1?arguments[1]:void 0,c=t.length,i=a===void 0?c:am(Yh(a),c),s=ea(n);return na?na(t,s,i):rm(t,i-s.length,i)===s}});var sm=Hn,om=on,cm=tn(tn.bind),lm=Le,mr=Array.isArray||function(n){return lm(n)==="Array"},um=X,dm=Q,Bi=ae,pm=hr,hm=Ci,Pi=function(){},mm=[],Hi=Pn("Reflect","construct"),fr=/^\s*(?:class|function)\b/,fm=um(fr.exec),gm=!fr.test(Pi),Qe=function(n){if(!Bi(n))return!1;try{return Hi(Pi,mm,n),!0}catch{return!1}},Fi=function(n){if(!Bi(n))return!1;switch(pm(n)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return gm||!!fm(fr,hm(n))}catch{return!0}};Fi.sham=!0;var _m=!Hi||dm(function(){var n;return Qe(Qe.call)||!Qe(Object)||!Qe(function(){n=!0})||n})?Fi:Qe,ta=mr,bm=_m,ym=ve,vm=me("species"),ra=Array,Sm=function(n){var t;return ta(n)&&(t=n.constructor,(bm(t)&&(t===ra||ta(t.prototype))||ym(t)&&(t=t[vm])===null)&&(t=void 0)),t===void 0?ra:t},zi=function(n,t){return new(Sm(n))(t===0?0:t)},Em=function(n,t){return sm(n),t===void 0?n:om?cm(n,t):function(){return n.apply(t,arguments)}},km=Un,Tm=De,Om=Kn,wm=zi,aa=X([].push),Oe=function(n){var t=n===1,a=n===2,c=n===3,i=n===4,s=n===6,l=n===7,d=n===5||s;return function(u,e,h,m){for(var g,f,p=Tm(u),o=km(p),r=Em(e,h),k=Om(o),O=0,T=m||wm,w=t?T(u,k):a||l?T(u,0):void 0;k>O;O++)if((d||O in o)&&(f=r(g=o[O],O,p),n))if(t)w[O]=f;else if(f)switch(n){case 3:return!0;case 5:return g;case 6:return O;case 2:aa(w,g)}else switch(n){case 4:return!1;case 7:aa(w,g)}return s?-1:c||i?i:w}},Gn={forEach:Oe(0),map:Oe(1),filter:Oe(2),some:Oe(3),every:Oe(4),find:Oe(5),findIndex:Oe(6),filterReject:Oe(7)},Nm=Q,Jn=function(n,t){var a=[][n];return!!a&&Nm(function(){a.call(null,t||function(){return 1},1)})},Cm=Gn.forEach,Ft=Jn("forEach")?[].forEach:function(n){return Cm(this,n,arguments.length>1?arguments[1]:void 0)};ie({target:"Array",proto:!0,forced:[].forEach!==Ft},{forEach:Ft});var Am=hr,xm=pr?{}.toString:function(){return"[object "+Am(this)+"]"};pr||cn(Object.prototype,"toString",xm,{unsafe:!0});var yt=ir("span").classList,ia=yt&&yt.constructor&&yt.constructor.prototype,sa=re,oa={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},qm=ia===Object.prototype?void 0:ia,vt=Ft,Rm=Fn,Ki=function(n){if(n&&n.forEach!==vt)try{Rm(n,"forEach",vt)}catch{n.forEach=vt}};for(var St in oa)oa[St]&&Ki(sa[St]&&sa[St].prototype);Ki(qm);var Lm=Q,Mm=nn,Dm=me("species"),gr=function(n){return Mm>=51||!Lm(function(){var t=[];return(t.constructor={})[Dm]=function(){return{foo:1}},t[n](Boolean).foo!==1})},$m=Gn.filter;ie({target:"Array",proto:!0,forced:!gr("filter")},{filter:function(n){return $m(this,n,arguments.length>1?arguments[1]:void 0)}});var jm=X([].slice),Gi=X,Um=Hn,Im=ve,Bm=he,ca=jm,Pm=on,la=Function,Hm=Gi([].concat),Fm=Gi([].join),Et={},ua=Pm?la.bind:function(n){var t=Um(this),a=t.prototype,c=ca(arguments,1),i=function(){var s=Hm(c,ca(arguments));return this instanceof i?function(l,d,u){if(!Bm(Et,d)){for(var e=[],h=0;h<d;h++)e[h]="a["+h+"]";Et[d]=la("C,a","return new C("+Fm(e,",")+")")}return Et[d](l,u)}(t,s.length,s):t.apply(n,s)};return Im(a)&&(i.prototype=a),i};ie({target:"Function",proto:!0,forced:Function.bind!==ua},{bind:ua});var zm=Se,Ji=function(){var n=zm(this),t="";return n.hasIndices&&(t+="d"),n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.dotAll&&(t+="s"),n.unicode&&(t+="u"),n.unicodeSets&&(t+="v"),n.sticky&&(t+="y"),t},_r=Q,br=re.RegExp,zt=_r(function(){var n=br("a","y");return n.lastIndex=2,n.exec("abcd")!==null}),Km=zt||_r(function(){return!br("a","y").sticky}),Gm={BROKEN_CARET:zt||_r(function(){var n=br("^r","gy");return n.lastIndex=2,n.exec("str")!==null}),MISSED_STICKY:Km,UNSUPPORTED_Y:zt},Wi={},Jm=Ri,Wm=dr,yr=Object.keys||function(n){return Jm(n,Wm)},Zm=pe,Vm=Oi,Xm=$e,Qm=Se,Ym=Xe,ef=yr;Wi.f=Zm&&!Vm?Object.defineProperties:function(n,t){Qm(n);for(var a,c=Ym(t),i=ef(t),s=i.length,l=0;s>l;)Xm.f(n,a=i[l++],c[a]);return n};var gn,nf=Pn("document","documentElement"),tf=Se,rf=Wi,da=dr,af=cr,sf=nf,of=ir,Kt="prototype",Gt="script",Zi=or("IE_PROTO"),kt=function(){},Vi=function(n){return"<"+Gt+">"+n+"</"+Gt+">"},pa=function(n){n.write(Vi("")),n.close();var t=n.parentWindow.Object;return n=null,t},Nn=function(){try{gn=new ActiveXObject("htmlfile")}catch{}var n,t,a;Nn=typeof document<"u"?document.domain&&gn?pa(gn):(t=of("iframe"),a="java"+Gt+":",t.style.display="none",sf.appendChild(t),t.src=String(a),(n=t.contentWindow.document).open(),n.write(Vi("document.F=Object")),n.close(),n.F):pa(gn);for(var c=da.length;c--;)delete Nn[Kt][da[c]];return Nn()};af[Zi]=!0;var ha,Tt,cf=Object.create||function(n,t){var a;return n!==null?(kt[Kt]=tf(n),a=new kt,kt[Kt]=null,a[Zi]=n):a=Nn(),t===void 0?a:rf.f(a,t)},lf=Q,uf=re.RegExp,df=lf(function(){var n=uf(".","s");return!(n.dotAll&&n.test(`
`)&&n.flags==="s")}),pf=Q,hf=re.RegExp,mf=pf(function(){var n=hf("(?<a>b)","g");return n.exec("b").groups.a!=="b"||"b".replace(n,"$<a>c")!=="bc"}),Je=Ae,Wn=X,ff=je,gf=Ji,_f=Gm,bf=cf,yf=lr.get,vf=df,Sf=mf,Ef=rr("native-string-replace",String.prototype.replace),qn=RegExp.prototype.exec,Jt=qn,kf=Wn("".charAt),Tf=Wn("".indexOf),Of=Wn("".replace),Ot=Wn("".slice),wt=(Tt=/b*/g,Je(qn,ha=/a/,"a"),Je(qn,Tt,"a"),ha.lastIndex!==0||Tt.lastIndex!==0),ma=_f.BROKEN_CARET,Nt=/()??/.exec("")[1]!==void 0;(wt||Nt||ma||vf||Sf)&&(Jt=function(n){var t,a,c,i,s,l,d,u=this,e=yf(u),h=ff(n),m=e.raw;if(m)return m.lastIndex=u.lastIndex,t=Je(Jt,m,h),u.lastIndex=m.lastIndex,t;var g=e.groups,f=ma&&u.sticky,p=Je(gf,u),o=u.source,r=0,k=h;if(f&&(p=Of(p,"y",""),Tf(p,"g")===-1&&(p+="g"),k=Ot(h,u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&kf(h,u.lastIndex-1)!==`
`)&&(o="(?: "+o+")",k=" "+k,r++),a=new RegExp("^(?:"+o+")",p)),Nt&&(a=new RegExp("^"+o+"$(?!\\s)",p)),wt&&(c=u.lastIndex),i=Je(qn,f?a:u,k),f?i?(i.input=Ot(i.input,r),i[0]=Ot(i[0],r),i.index=u.lastIndex,u.lastIndex+=i[0].length):u.lastIndex=0:wt&&i&&(u.lastIndex=u.global?i.index+i[0].length:c),Nt&&i&&i.length>1&&Je(Ef,i[0],a,function(){for(s=1;s<arguments.length-2;s++)arguments[s]===void 0&&(i[s]=void 0)}),i&&g)for(i.groups=l=bf(null),s=0;s<g.length;s++)l[(d=g[s])[0]]=i[d[1]];return i});var Rn=Jt;ie({target:"RegExp",proto:!0,forced:/./.exec!==Rn},{exec:Rn});var wf=on,Xi=Function.prototype,fa=Xi.apply,ga=Xi.call,Nf=typeof Reflect=="object"&&Reflect.apply||(wf?ga.bind(fa):function(){return ga.apply(fa,arguments)}),_a=tn,ba=cn,Cf=Rn,ya=Q,Qi=me,Af=Fn,xf=Qi("species"),Ct=RegExp.prototype,Yi=function(n,t,a,c){var i=Qi(n),s=!ya(function(){var e={};return e[i]=function(){return 7},""[n](e)!==7}),l=s&&!ya(function(){var e=!1,h=/a/;return n==="split"&&((h={}).constructor={},h.constructor[xf]=function(){return h},h.flags="",h[i]=/./[i]),h.exec=function(){return e=!0,null},h[i](""),!e});if(!s||!l||a){var d=_a(/./[i]),u=t(i,""[n],function(e,h,m,g,f){var p=_a(e),o=h.exec;return o===Cf||o===Ct.exec?s&&!f?{done:!0,value:d(h,m,g)}:{done:!0,value:p(m,h,g)}:{done:!1}});ba(String.prototype,n,u[0]),ba(Ct,i,u[1])}c&&Af(Ct[i],"sham",!0)},vr=X,qf=zn,Rf=je,Lf=Me,Mf=vr("".charAt),va=vr("".charCodeAt),Df=vr("".slice),Sa=function(n){return function(t,a){var c,i,s=Rf(Lf(t)),l=qf(a),d=s.length;return l<0||l>=d?n?"":void 0:(c=va(s,l))<55296||c>56319||l+1===d||(i=va(s,l+1))<56320||i>57343?n?Mf(s,l):c:n?Df(s,l,l+2):i-56320+(c-55296<<10)+65536}},$f={codeAt:Sa(!1),charAt:Sa(!0)}.charAt,es=function(n,t,a){return t+(a?$f(n,t).length:1)},Sr=X,jf=De,Uf=Math.floor,At=Sr("".charAt),If=Sr("".replace),xt=Sr("".slice),Bf=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Pf=/\$([$&'`]|\d{1,2})/g,Ea=Ae,Hf=Se,Ff=ae,zf=Le,Kf=Rn,Gf=TypeError,ns=function(n,t){var a=n.exec;if(Ff(a)){var c=Ea(a,n,t);return c!==null&&Hf(c),c}if(zf(n)==="RegExp")return Ea(Kf,n,t);throw new Gf("RegExp#exec called on incompatible receiver")},Jf=Nf,ka=Ae,Zn=X,Wf=Yi,Zf=Q,Vf=Se,Xf=ae,Qf=In,Yf=zn,eg=ln,He=je,ng=Me,tg=es,rg=er,ag=function(n,t,a,c,i,s){var l=a+n.length,d=c.length,u=Pf;return i!==void 0&&(i=jf(i),u=Bf),If(s,u,function(e,h){var m;switch(At(h,0)){case"$":return"$";case"&":return n;case"`":return xt(t,0,a);case"'":return xt(t,l);case"<":m=i[xt(h,1,-1)];break;default:var g=+h;if(g===0)return e;if(g>d){var f=Uf(g/10);return f===0?e:f<=d?c[f-1]===void 0?At(h,1):c[f-1]+At(h,1):e}m=c[g-1]}return m===void 0?"":m})},ig=ns,Wt=me("replace"),sg=Math.max,og=Math.min,cg=Zn([].concat),qt=Zn([].push),Ta=Zn("".indexOf),Oa=Zn("".slice),lg="a".replace(/./,"$0")==="$0",wa=!!/./[Wt]&&/./[Wt]("a","$0")==="";Wf("replace",function(n,t,a){var c=wa?"$":"$0";return[function(i,s){var l=ng(this),d=Qf(i)?void 0:rg(i,Wt);return d?ka(d,i,l,s):ka(t,He(l),i,s)},function(i,s){var l=Vf(this),d=He(i);if(typeof s=="string"&&Ta(s,c)===-1&&Ta(s,"$<")===-1){var u=a(t,l,d,s);if(u.done)return u.value}var e=Xf(s);e||(s=He(s));var h,m=l.global;m&&(h=l.unicode,l.lastIndex=0);for(var g,f=[];(g=ig(l,d))!==null&&(qt(f,g),m);)He(g[0])===""&&(l.lastIndex=tg(d,eg(l.lastIndex),h));for(var p,o="",r=0,k=0;k<f.length;k++){for(var O,T=He((g=f[k])[0]),w=sg(og(Yf(g.index),d.length),0),A=[],j=1;j<g.length;j++)qt(A,(p=g[j])===void 0?p:String(p));var M=g.groups;if(e){var R=cg([T],A,w,d);M!==void 0&&qt(R,M),O=He(Jf(s,void 0,R))}else O=ag(T,d,w,A,M,s);w>=r&&(o+=Oa(d,r,w)+O,r=w+T.length)}return o+Oa(d,r)}]},!!Zf(function(){var n=/./;return n.exec=function(){var t=[];return t.groups={a:"7"},t},"".replace(n,"$<a>")!=="7"})||!lg||wa);var Na=xi,ug=$e,dg=pe,pg=sr.EXISTS,ts=X,hg=function(n,t,a){return a.get&&Na(a.get,t,{getter:!0}),a.set&&Na(a.set,t,{setter:!0}),ug.f(n,t,a)},rs=Function.prototype,mg=ts(rs.toString),as=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,fg=ts(as.exec);dg&&!pg&&hg(rs,"name",{configurable:!0,get:function(){try{return fg(as,mg(this))[1]}catch{return""}}}),ie({target:"Array",stat:!0},{isArray:mr});var gg=Gn.map;ie({target:"Array",proto:!0,forced:!gr("map")},{map:function(n){return gg(this,n,arguments.length>1?arguments[1]:void 0)}});var _g=ie,bg=Un,yg=Xe,vg=Jn,Sg=X([].join);_g({target:"Array",proto:!0,forced:bg!==Object||!vg("join",",")},{join:function(n){return Sg(yg(this),n===void 0?",":n)}});var Eg=!Q(function(){function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype}),kg=he,Tg=ae,Og=De,wg=Eg,Ca=or("IE_PROTO"),Zt=Object,Ng=Zt.prototype,Cg=wg?Zt.getPrototypeOf:function(n){var t=Og(n);if(kg(t,Ca))return t[Ca];var a=t.constructor;return Tg(a)&&t instanceof a?a.prototype:t instanceof Zt?Ng:null},is=pe,Ag=Q,ss=X,xg=Cg,qg=yr,Rg=Xe,os=ss(Qt.f),Lg=ss([].push),Mg=is&&Ag(function(){var n=Object.create(null);return n[2]=2,!os(n,2)}),Aa=function(n){return function(t){for(var a,c=Rg(t),i=qg(c),s=Mg&&xg(c)===null,l=i.length,d=0,u=[];l>d;)a=i[d++],is&&!(s?a in c:os(c,a))||Lg(u,n?[a,c[a]]:c[a]);return u}},cs={entries:Aa(!0),values:Aa(!1)},Dg=cs.entries;ie({target:"Object",stat:!0},{entries:function(n){return Dg(n)}});var $g=TypeError,jg=ar,Ug=$e,Ig=Yt,Bg=ie,Pg=Q,Hg=mr,Fg=ve,zg=De,Kg=Kn,xa=function(n){if(n>9007199254740991)throw $g("Maximum allowed index exceeded");return n},qa=function(n,t,a){var c=jg(t);c in n?Ug.f(n,c,Ig(0,a)):n[c]=a},Gg=zi,Jg=gr,Wg=nn,ls=me("isConcatSpreadable"),Zg=Wg>=51||!Pg(function(){var n=[];return n[ls]=!1,n.concat()[0]!==n}),Vg=function(n){if(!Fg(n))return!1;var t=n[ls];return t!==void 0?!!t:Hg(n)};Bg({target:"Array",proto:!0,arity:1,forced:!Zg||!Jg("concat")},{concat:function(n){var t,a,c,i,s,l=zg(this),d=Gg(l,0),u=0;for(t=-1,c=arguments.length;t<c;t++)if(Vg(s=t===-1?l:arguments[t]))for(i=Kg(s),xa(u+i),a=0;a<i;a++,u++)a in s&&qa(d,u,s[a]);else xa(u+1),qa(d,u++,s);return d.length=u,d}});var Xg=De,Ra=yr;ie({target:"Object",stat:!0,forced:Q(function(){Ra(1)})},{keys:function(n){return Ra(Xg(n))}});var Qg=Ae,Yg=Se,e_=In,n_=ln,Rt=je,t_=Me,r_=er,a_=es,La=ns;Yi("match",function(n,t,a){return[function(c){var i=t_(this),s=e_(c)?void 0:r_(c,n);return s?Qg(s,c,i):new RegExp(c)[n](Rt(i))},function(c){var i=Yg(this),s=Rt(c),l=a(t,i,s);if(l.done)return l.value;if(!i.global)return La(i,s);var d=i.unicode;i.lastIndex=0;for(var u,e=[],h=0;(u=La(i,s))!==null;){var m=Rt(u[0]);e[h]=m,m===""&&(i.lastIndex=a_(s,n_(i.lastIndex),d)),h++}return h===0?null:e}]});var i_=Hn,s_=De,o_=Un,c_=Kn,l_=TypeError,Ma=function(n){return function(t,a,c,i){i_(a);var s=s_(t),l=o_(s),d=c_(s),u=n?d-1:0,e=n?-1:1;if(c<2)for(;;){if(u in l){i=l[u],u+=e;break}if(u+=e,n?u<0:d<=u)throw new l_("Reduce of empty array with no initial value")}for(;n?u>=0:d>u;u+=e)u in l&&(i=a(i,l[u],u,s));return i}},u_={left:Ma(!1),right:Ma(!0)},d_=Le(re.process)==="process",p_=u_.left;ie({target:"Array",proto:!0,forced:!d_&&nn>79&&nn<83||!Jn("reduce")},{reduce:function(n){var t=arguments.length;return p_(this,n,t,t>1?arguments[1]:void 0)}});var us=X,h_=cn,Er=Date.prototype,Da="Invalid Date",ds="toString",m_=us(Er[ds]),f_=us(Er.getTime);String(new Date(NaN))!==Da&&h_(Er,ds,function(){var n=f_(this);return n==n?m_(this):Da});var g_=Ae,__=he,b_=_i,y_=Ji,$a=RegExp.prototype,v_=sr.PROPER,S_=cn,E_=Se,ja=je,k_=Q,T_=function(n){var t=n.flags;return t!==void 0||"flags"in $a||__(n,"flags")||!b_($a,n)?t:g_(y_,n)},kr="toString",ps=RegExp.prototype[kr],O_=k_(function(){return ps.call({source:"a",flags:"b"})!=="/a/b"}),w_=v_&&ps.name!==kr;(O_||w_)&&S_(RegExp.prototype,kr,function(){var n=E_(this);return"/"+ja(n.source)+"/"+ja(T_(n))},{unsafe:!0});var N_=cs.values;ie({target:"Object",stat:!0},{values:function(n){return N_(n)}});var C_=Gn.some;ie({target:"Array",proto:!0,forced:!Jn("some")},{some:function(n){return C_(this,n,arguments.length>1?arguments[1]:void 0)}});var Ua={"swift/urlsession":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
// Create a new URLRequest object
var request = URLRequest(url: URL(string: "`),e(h),e(`")!)

// Set the request method
request.httpMethod = "`),e(m),e(`"

// Set the request content type header
request.addValue("`),e(g),e(`", forHTTPHeaderField: "Content-Type")

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){_(this,i),e(`
request.addValue("`),e(t(r.value)),e('", forHTTPHeaderField: "'),e(t(r.name)),e(`")
`)}).bind(this))),e(`

`),o.length>0&&(e(`
// Add cookies to the request
`),o.forEach((function(r){_(this,i),e(`
request.addValue("`),e(t(r.value)),e('", forHTTPHeaderField: "'),e(t(r.name)),e(`")
`)}).bind(this))),e(`

`),m==="POST"&&p.length>0&&(e(`// Set the request body
`),p.length===1&&p[0].type==="file"?e(`
let fileUrl = URL(fileURLWithPath: "/path/to/file")
let data = try Data(contentsOf: fileUrl)
request.httpBody = data
`):(e(`
let postDataDict = `),e(t(JSON.stringify(p.reduce((function(r,k){return _(this,i),Array.isArray(k.value)||C(k.value),r[k.name]=k.value,r}).bind(this),{})))),e(`
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
`),u},"swift/alamofire":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
let fullUrl = "`),e(h),e(`"

// Set up the request headers
var headers: HTTPHeaders = [:]
`),g.forEach((function(o){_(this,i),e(`
headers["`),e(t(o.name)),e('"] = "'),e(t(o.value)),e(`"
`)}).bind(this)),e(`

`),p.length>0&&(e(`
// Add cookies to the request
`),p.forEach((function(o){_(this,i),e(`
let cookie = HTTPCookie(properties: [
    .domain: "`),e(t(o.domain)),e(`",
    .path: "`),e(t(o.path)),e(`",
    .name: "`),e(t(o.name)),e(`",
    .value: "`),e(t(o.value)),e(`",
])!
HTTPCookieStorage.shared.setCookie(cookie)
`)}).bind(this)),e(`
`)),e(`

// Set up the request parameters
var parameters: Parameters = [:]
`),f.forEach((function(o){_(this,i),e(`
`),Array.isArray(o.value)||C(o.value)==="object"?(e(`
if let jsonData = try? JSONSerialization.data(withJSONObject: `),e(t(JSON.stringify(o.value))),e(`, options: []) {
    if let jsonString = String(data: jsonData, encoding: .utf8) {
        parameters["`),e(t(o.name)),e(`"] = jsonString
    }
}
`)):(e(`
parameters["`),e(t(o.name)),e('"] = "'),e(t(o.value)),e(`"
`)),e(`
`)}).bind(this)),e(`

// Create the request
AF.request(fullUrl, method: .`),e(t(m.toLowerCase())),e(`, parameters: parameters, headers: headers).response { response in
    switch response.result {
    case .success(let data):
        if let data = data {
            print("Response:", String(data: data, encoding: .utf8)!)
        }
    case .failure(let error):
        print("Error:", error.localizedDescription)
    }
}
`),u},"scala/scalaj-http":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import scalaj.http._

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(g)),e(`"
val headers = `),f.length>0?(e(`Seq(
`),f.forEach((function(r){_(this,i),e(`
  ("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Nil"),e(`
val cookies = `),o.length>0?(e(`Seq(
`),o.forEach((function(r){_(this,i),e(`
  HttpCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Nil"),e(`
val postData = `),p.length>0?(e(`Seq(
`),p.forEach((function(r){_(this,i),e(`
`),Array.isArray(r.value)||C(r.value)==="object"?(e(`
  ("`),e(t(r.name)),e('", "'),e(t(JSON.stringify(r.value))),e(`"),
`)):(e(`
  ("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)),e(`
`)}).bind(this)),e(`
)`)):e("Nil"),e(`

// Construct the request
val request = Http(url).method(method)
  .headers(headers)
  .cookies(cookies)
  .timeout(connTimeoutMs = 10000, readTimeoutMs = 60000)
  .option(HttpOptions.followRedirects(true))

// Add request body if needed
if (postData.nonEmpty) {
  val entity = `),p.length===1&&p[0].type==="file"?(e(`
    MultipartFormData(Seq(
      `),p.forEach((function(r){_(this,i),e(`
        FileData("`),e(t(r.name)),e('", new java.io.File("'),e(t(r.value)),e(`"))
      `)}).bind(this)),e(`
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
`),u},"scala/http4s":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import cats.effect._
import org.http4s._
import org.http4s.client.blaze._
import org.http4s.client.dsl.io._
import org.http4s.headers._
import org.http4s.MediaType._

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(g)),e(`"
val headers = `),f.length>0?(e(`Headers(
`),f.forEach((function(r){_(this,i),e(`
  Header.apply("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Headers.empty"),e(`
val cookies = `),o.length>0?(e(`Seq(
`),o.forEach((function(r){_(this,i),e(`
  RequestCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Seq.empty"),e(`
val postData = `),p.length>0?(e(`UrlForm(
`),p.forEach((function(r){_(this,i),e(`
`),Array.isArray(r.value)||C(r.value)==="object"?(e(`
  "`),e(t(r.name)),e('" -> "'),e(t(JSON.stringify(r.value))),e(`",
`)):(e(`
  "`),e(t(r.name)),e('" -> "'),e(t(r.value)),e(`",
`)),e(`
`)}).bind(this)),e(`
)`)):e("UrlForm.empty"),e(`

// Construct the request
implicit val cs = IO.contextShift(ExecutionContext.global)
val client = Http1Client[IO]().unsafeRunSync()
val request = Method.`),e(t(m.toUpperCase())),e(`(Uri.unsafeFromString(url), postData)
  .withHeaders(headers)
  .withCredentials(Credentials(cookies))

// Send the request
val response = client.expect[String](request).unsafeRunSync()

// Handle the response
println("Response: " + response)

// Clean up
client.shutdownNow()
`),u},"scala/akka":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer
import akka.stream.scaladsl._
import scala.concurrent.Future
import scala.util.{Failure, Success}

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(g)),e(`"
val headers = List(
`),f.forEach((function(r){_(this,i),e(`
  HttpHeader.parse("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[HttpHeader],
`)}).bind(this)),e(`
)
val cookies = List(
`),o.forEach((function(r){_(this,i),e(`
  HttpCookiePair("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[HttpCookiePair],
`)}).bind(this)),e(`
)
val postData = List(
`),p.forEach((function(r){_(this,i),e(`
  `),Array.isArray(r.value)||C(r.value)==="object"?(e(`
    FormData.BodyPart.Strict("`),e(t(r.name)),e('", HttpEntity(ContentTypes.application/json, "'),e(t(JSON.stringify(r.value))),e(`")).asInstanceOf[FormData.BodyPart.Strict],
  `)):(e(`
    FormData.BodyPart.Strict("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[FormData.BodyPart.Strict],
  `)),e(`
`)}).bind(this)),e(`
)

// Construct the request
implicit val system = ActorSystem()
implicit val materializer = ActorMaterializer()
implicit val executionContext = system.dispatcher

val request = HttpRequest(
  method = HttpMethods.`),e(t(m.toUpperCase())),e(`,
  uri = url,
  headers = headers,
  entity = `),p.length>0?e("FormData(postData).toEntity"):e("HttpEntity.Empty"),e(`
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
`),u},"rust/surf":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
use surf::http::{Method, Url, headers::{Headers, HeaderValue}};

// Construct the request URL
let url = Url::new("`),e(t(h)),e(`").unwrap();

// Set up the request
let mut req = surf::Request::new(`),e(t(m)),e(` , url);

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach((function(o){_(this,i),e(`
req.insert_header("`),e(t(o.name)),e('", HeaderValue::from_str("'),e(t(o.value)),e(`").unwrap());
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
// Add cookies to the request
`),p.forEach((function(o){_(this,i),e(`
req.insert_cookie(surf::http::Cookie::new("`),e(t(o.name)),e('", "'),e(t(o.value)),e(`"));
`)}).bind(this)),e(`
`)),e(`

`),f.length>0&&(e(`
// Send the request
let body = `),f.length===1&&f[0].type==="file"?(e(`
surf::Body::from(surf::http::Form::from(`),f[0].value,e(`))
`)):(e(`
surf::Body::from("`),e(t(f.map((function(o){return _(this,i),Array.isArray(o.value)||C(o.value)==="object"?o.name+"="+encodeURIComponent(JSON.stringify(o.value)):o.name+"="+encodeURIComponent(o.value)}).bind(this)).join("&"))),e(`")
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
`),u},"rust/reqwest":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
let url = "`),e(t(h)),e(`";
let method = "`),e(t(m)),e(`";
let mime_type = "`),e(t(g)),e(`";

let headers = reqwest::header::HeaderMap::new();
`),f.forEach((function(r){_(this,i),e(`
headers.insert("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`".parse().unwrap());
`)}).bind(this)),e(`

let mut cookies = reqwest::cookie::CookieJar::new();
`),o.forEach((function(r){_(this,i),e(`
cookies.add(reqwest::cookie::Cookie::new("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"));
`)}).bind(this)),e(`

let mut request_builder = reqwest::Client::new().request(method, url);
request_builder = request_builder.headers(headers);
request_builder = request_builder.cookie_store(cookies);

// Add post data to the request
`),p.length>0&&(e(`
`),p.length===1&&p[0].type==="file"?(e(`
let form_data = reqwest::multipart::Form::new()
.file("`),e(t(p[0].name)),e('", "'),e(t(p[0].value)),e(`").unwrap();
let request_builder = request_builder.multipart(form_data);
`)):(e(`
let post_data = "`),e(t(p.map((function(r){return _(this,i),Array.isArray(r.value)||C(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`";
let request_builder = request_builder.body(post_data);
`)),e(`
`)),e(`

let response = request_builder.send().await.unwrap();
let response_text = response.text().await.unwrap();
println!("Response: {}", response_text);
`),u},"rust/hyper":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
// Create a new Hyper client object
let client = hyper::Client::new();

// Construct the request URL
let full_url = "`),e(t(h)),e(`";

// Create the request
let mut req = hyper::Request::new(hyper::Method::`),e(t(m)),e(`, full_url);

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){_(this,i),e(`
req.headers_mut().insert(hyper::header::`),e(t(r.name)),e(", "),e(t(r.value)),e(`.parse().unwrap());
`)}).bind(this)),e(`
`)),e(`

`),o.length>0&&(e(`
// Add cookies to the request
`),o.forEach((function(r){_(this,i),e(`
req.headers_mut().insert(hyper::header::COOKIE, format!("`),e(t(r.name)),e("={"),e(t(r.value)),e(`}; "));
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
    // Add the request body
`),p.length===1&&p[0].type==="file"?(e(`
let form = multipart::Form::new()
.file("`),e(t(p[0].name)),e('", "'),e(t(p[0].value)),e(`")
.unwrap();
let mut body = hyper::Body::from(form.stream());
`)):(e(`
let body = hyper::Body::from("`),e(t(p.map((function(r){return _(this,i),Array.isArray(r.value)||C(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`");
`)),e(`
req.headers_mut().insert(hyper::header::CONTENT_TYPE, "`),e(t(g)),e(`".parse().unwrap());
req.headers_mut().insert(hyper::header::CONTENT_LENGTH, body.len().into());
req.set_body(body);
`)),e(`

// Send the request and get the response
let res = client.request(req).await?;

// Print the response
println!("Response: \\n{:?}", res);
`),u},"ruby/restclient":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
require 'rest-client'

url = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(g)),e(`"

headers = {
  `),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" => "'),e(t(r.value)),e(`",
  `)}).bind(this)),e(`
}

cookies = {
  `),o.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" => "'),e(t(r.value)),e(`",
  `)}).bind(this)),e(`
}

`),m==="GET"?e(`
  response = RestClient.get(url, headers: headers, cookies: cookies)
`):(e(`
  body = "`),e(t(p.map((function(r){return _(this,i),Array.isArray(r.value)||C(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`"
  response = RestClient::`),e(t(m.downcase)),e(`(url, body, headers: headers, cookies: cookies, content_type: mimeType)
`)),e(`

puts "Response: #{response.body}"
`),u},"ruby/http":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
require 'net/http'
require 'uri'

url = URI("`),e(t(h)),e(`")
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(g)),e(`"

`),m==="GET"?e(`
  req = Net::HTTP::Get.new(url)
`):(e(`
  body = "`),e(t(p.map((function(r){return _(this,i),Array.isArray(r.value)||C(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`"
  req = Net::HTTP::`),e(t(m.capitalize)),e(`.new(url)
  req.body = body
  req.content_type = mimeType
`)),e(`

`),f.forEach((function(r){_(this,i),e(`
  req['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`'
`)}).bind(this)),e(`

`),o.forEach((function(r){_(this,i),e(`
  req['Cookie'] = '`),e(t(r.name)),e("="),e(t(r.value)),e(`'
`)}).bind(this)),e(`

res = Net::HTTP.start(url.hostname, url.port, use_ssl: url.scheme == 'https') do |http|
  http.request(req)
end

puts "Response: #{res.body}"
`),u},"python/requests":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import requests

# Extract parameters from the options object
fullUrl = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(g)),e(`"
headers = {
    `),f.forEach((function(r){_(this,i),e(`
        '`),e(t(r.name)),e("': '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
}
postData = {
`),p.forEach((function(r){_(this,i),e(`
'`),e(t(r.name)),e("': "),Array.isArray(r.value)||C(r.value)==="object"?(e(`
    '`),e(t(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(t(r.value)),e(`',
`)),e(`
`)}).bind(this)),e(`
}
cookies = {
    `),o.forEach((function(r){_(this,i),e(`
        '`),e(t(r.name)),e("': '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
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
`),u},"python/http":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import http.client

# Extract parameters from the options object
fullUrl = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(g)),e(`"
headers = [
    `),f.forEach((function(r){_(this,i),e(`
        ('`),e(t(r.name)),e("', '"),e(t(r.value)),e(`'),
    `)}).bind(this)),e(`
]
postData = {
`),p.forEach((function(r){_(this,i),e(`
'`),e(t(r.name)),e("': "),Array.isArray(r.value)||C(r.value)==="object"?(e(`
    '`),e(t(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(t(r.value)),e(`',
`)),e(`
`)}).bind(this)),e(`
}
cookies = {
    `),o.forEach((function(r){_(this,i),e(`
        '`),e(t(r.name)),e("': '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
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
`),u},"powershell/webrequest":function(n,t,a,c){var i=this;t=t||function(h){return h==null?"":String(h).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(h){return s[h]||h}var u="";function e(h){h!=null&&(u+=h)}return e('$url = "'),e(t(url)),e(`"
$method = "`),e(t(method)),e(`"
$mimeType = "`),e(t(mimeType)),e(`"

$headers = @{
`),headers.forEach((function(h){_(this,i),e(`
  "`),e(t(h.name)),e('" = "'),e(t(h.value)),e(`",
`)}).bind(this)),e(`
}

$cookies = @{
`),cookies.forEach((function(h){_(this,i),e(`
  "`),e(t(h.name)),e('" = "'),e(t(h.value)),e(`",
`)}).bind(this)),e(`
}

`),method==="GET"?e(`
  $req = Invoke-WebRequest -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),postData.forEach((function(h){_(this,i),e(`
    "`),e(t(h.name)),e('" = '),Array.isArray(h.value)||C(h.value)==="object"?(e(`
      `),e(t(JSON.stringify(h.value))),e(` | ConvertTo-Json -Depth 100 -Compress
    `)):(e(`
      '`),e(t(h.value)),e(`'
    `)),e(`,
  `)}).bind(this)),e(`
  }

  $req = Invoke-WebRequest -Uri $url -Method $method -Body $body -Headers $headers -ContentType $mimeType -Cookies $cookies
`)),e(`

Write-Host "Response: " -ForegroundColor Green
Write-Host $req.Content
`),u},"powershell/restmethod":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
$url = "`),e(t(h)),e(`"
$method = "`),e(t(m)),e(`"
$mimeType = "`),e(t(g)),e(`"

$headers = @{
`),f.forEach((function(r){_(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
}

$cookies = @{
`),o.forEach((function(r){_(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
}

`),m==="GET"?e(`
  $req = Invoke-RestMethod -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),p.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" = '),Array.isArray(r.value)||C(r.value)==="object"?(e(`
      `),e(t(JSON.stringify(r.value))),e(` | ConvertTo-Json -Depth 100 -Compress
    `)):(e(`
      '`),e(t(r.value)),e(`'
    `)),e(`,
  `)}).bind(this)),e(`
  }

  $req = Invoke-RestMethod -Uri $url -Method $method -Body $body -Headers $headers -ContentType $mimeType -Cookies $cookies
`)),e(`

Write-Host "Response: " -ForegroundColor Green
Write-Host $req | ConvertTo-Json -Depth 100 -Compress
`),u},"php/http2":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php
    $host = parse_url("`),e(t(h)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(t(h)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),g.forEach((function(o){_(this,i),e(' "'),e(t(o.name)),e('" => "'),e(t(o.value)),e('", ')}).bind(this)),e(` );
    $httpCookies = array( `),p.forEach((function(o){_(this,i),e(' "'),e(t(o.name)),e('" => "'),e(t(o.value)),e('", ')}).bind(this)),e(` );
    $httpBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
        `),Array.isArray(f)?(e(`
        $postData = array( `),f.forEach((function(o){_(this,i),e(" '"),e(t(o.name)),e("' => '"),e(t(Array.isArray(o.value)?JSON.stringify(o.value):encodeURIComponent(o.value))),e("', ")}).bind(this)),e(` );
        $httpBody = http_build_query($postData);
        `)):C(f)==="object"&&(e(`
        $httpBody = json_encode(`),e(t(f)),e(`);
    `)),e(`
    }
    $streamContext = stream_context_create([
        'http' => [ 'method' => "`),e(t(m)),e(`",
        'header' => implode("\\r\\n", $httpHeaders),
        'content' => $httpBody, 'follow_location' => false,
        'protocol_version' => 2.0,
    ],
        'ssl' => [ 'verify_peer' => false, 'verify_peer_name' => false, ],
    ]);
    $response = file_get_contents("https://$host$path", false, $streamContext);
    echo "Response: " . $response;
?>
`),u},"php/http1":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php
    $host = parse_url("`),e(t(h)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(t(h)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),g.forEach((function(o){_(this,i),e(' "'),e(t(o.name)),e(": "),e(t(o.value)),e('", ')}).bind(this)),e(` );
    $httpCookies = array( `),p.forEach((function(o){_(this,i),e(' "'),e(t(o.name)),e('" => "'),e(t(o.value)),e('", ')}).bind(this)),e(` );
    $httpBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
    $httpBody = new http\\Message\\Body(fopen('`),e(t(f[0].value)),e(`', 'r'));
    `)):(e(`
     $postData = array( `),f.forEach((function(o){_(this,i),e(" '"),e(t(o.name)),e("' => '"),e(t(Array.isArray(o.value)?JSON.stringify(o.value):encodeURIComponent(o.value))),e("', ")}).bind(this)),e(` );
     $httpBody = new http\\Message\\Body(http_build_query($postData));
    `)),e(" ")):C(f)==="object"&&(e(`
    $postData = '`),e(t(JSON.stringify(f))),e(`';
    $httpBody = new http\\Message\\Body($postData);
    `)),e(` }
    $request = new http\\Client\\Request("`),e(t(m)),e(`", "http://$host$path");
    $request->setHeaders($httpHeaders);
    $request->setCookies($httpCookies);
    $request->setBody($httpBody);
    $client = new http\\Client;
    $client->enqueue($request);
    $response = $client->send();
    echo "Response: " . $response->getBody();
?>
`),u},"php/guzzle":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
<?php
    use GuzzleHttp\\Exception\\RequestException;
    $client = new Client();
    $url = "`),e(t(h)),e(`";
    $headers = array( `),g.forEach((function(o){_(this,i),e(' "'),e(t(o.name)),e('" => "'),e(t(o.value)),e('", ')}).bind(this)),e(` );
    $cookies = array( `),p.forEach((function(o){_(this,i),e(' "'),e(t(o.name)),e('" => "'),e(t(o.value)),e('", ')}).bind(this)),e(` );
    $requestBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
        $requestBody = array( 'multipart' => [ [ 'name' => '`),e(t(f[0].name)),e("', 'contents' => fopen('"),e(t(f[0].value)),e(`', 'r') ] ] );
    `)):(e(`
        $postData = array( `),f.forEach((function(o){_(this,i),e(" '"),e(t(o.name)),e("' => '"),e(t(Array.isArray(o.value)?JSON.stringify(o.value):encodeURIComponent(o.value))),e("', ")}).bind(this)),e(` );
        $requestBody = http_build_query($postData);
    `)),e(`
    `)):C(f)==="object"&&(e(`
    $postData = '`),e(t(JSON.stringify(f))),e(`';
    $requestBody = $postData;
    `)),e(` }
    try {
        $response = $client->request('`),e(t(m)),e(`', $url, [
            'headers' => $headers,
            'cookies' => $cookies,
            'body' => $requestBody,
        ]);
        echo "Response: " . $response->getBody();
    } catch (RequestException $e) {
        echo "Error: " . $e->getMessage();
    }

?>
`),u},"php/curl":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php

    $url = "`),e(t(h)),e(`";
    $requestHeaders = array( `),g.forEach((function(o){_(this,i),e(' "'),e(t(o.name)),e(": "),e(t(o.value)),e('", ')}).bind(this)),e(` );
    $requestCookies = array( `),p.forEach((function(o){_(this,i),e(' "'),e(t(o.name)),e("=<"),e(t(o.value)),e('>", ')}).bind(this)),e(` );
    $requestBody = null; if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
    $requestBody = array( '`),e(t(f[0].name)),e("' => new [](poeCURLFile('"),e(t(f[0].value)),e(`') );
    `)):(e(`
    $postData = array( `),f.forEach((function(o){_(this,i),e(`
        '`),e(t(o.name)),e("' => '"),e(t(Array.isArray(o.value)?JSON.stringify(o.value):encodeURIComponent(o.value))),e(`',
    `)}).bind(this)),e(` );
    $requestBody = http_build_query($postData); `)),e(`
    `)):C(f)==="object"&&(e(`
    $postData = array( `),Object.keys(f).forEach((function(o){_(this,i),e(`
        '`),e(t(o)),e("' => '"),e(t(Array.isArray(f[o])?JSON.stringify(f[o]):encodeURIComponent(f[o]))),e(`',
    `)}).bind(this)),e(` );
    $requestBody = http_build_query($postData); `)),e(` } $ch = curl_init(); curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_setopt($ch, CURLOPT_HTTPHEADER, $requestHeaders);
    curl_setopt($ch, CURLOPT_COOKIE, implode("; ", $requestCookies));
    if ("`),e(t(m)),e(`" === "POST") {
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $requestBody); }
    $response = curl_exec($ch);
    curl_close($ch);
    echo "Response: " . $response;
?>
`),u},"perl/useragent":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
`),e(`
use LWP::UserAgent;
my $ua = LWP::UserAgent->new;

`),e(`
my $fullUrl = '`),e(t(h)),e(`';

`),e(`
my $request = HTTP::Request->new('`),e(t(m)),e(`', $fullUrl);

`),g.length>0&&(e(`
`),e(`
`),g.forEach((function(o){_(this,i),e(`
    $request->header('`),e(t(o.name)),e("', '"),e(t(o.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
`),e(`
`),p.forEach((function(o){_(this,i),e(`
    $ua->cookie_jar->set_cookie(0, '`),e(t(o.name)),e("', '"),e(t(o.value)),e(`', '/', 'example.com');
`)}).bind(this)),e(`
`)),e(`

`),f.length>0&&(e(`
`),e(`
`),Array.isArray(f)?(e(`
`),f.length===1&&f[0].type==="file"?(e(`
my $file = '`),e(t(f[0].value)),e(`';
$request->content($file);
`)):(e(`
my $post_data = {
`),f.forEach((function(o){_(this,i),e(`
    '`),e(t(o.name)),e("' => '"),e(t(Array.isArray(o.value)?JSON.stringify(o.value):o.value)),e(`',
`)}).bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):C(f)==="object"&&(e(`
my $post_data = {
`),Object.keys(f).forEach((function(o){_(this,i),e(`
'`),e(t(o)),e("' => '"),e(t(Array.isArray(f[o])?JSON.stringify(f[o]):f[o])),e(`',
`)}).bind(this)),e(`
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
`),u},"perl/tiny":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
`),e(`
use HTTP::Tiny;
my $http = HTTP::Tiny->new;

`),e(`
my $fullUrl = '`),e(t(h)),e(`';

`),e(`
my $options = {
headers => {
    'Content-Type' => '`),e(t(g)),e(`',
    `),f.forEach((function(r){_(this,i),e(`
    '`),e(t(r.name)),e("' => '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
},
`),o.forEach((function(r){_(this,i),e(`
cookies => {
    '`),e(t(r.name)),e("' => '"),e(t(r.value)),e(`',
},
`)}).bind(this)),e(`
};

`),e(`
`),p.length>0&&(e(`
`),Array.isArray(p)?(e(`
`),p.length===1&&p[0].type==="file"?(e(`
my $file = '`),e(t(p[0].value)),e(`';
$options->{content} = $file;
`)):(e(`
my $post_data = {
`),p.forEach((function(r){_(this,i),e(`
    '`),e(t(r.name)),e("' => '"),e(t(Array.isArray(r.value)?JSON.stringify(r.value):r.value)),e(`',
`)}).bind(this)),e(`
};
$options->{content} = join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data);
`)),e(`
`)):C(p)==="object"&&(e(`
my $post_data = {
`),Object.keys(p).forEach((function(r){_(this,i),e(`
    '`),e(t(r)),e("' => '"),e(t(Array.isArray(p[r])?JSON.stringify(p[r]):p[r])),e(`',
`)}).bind(this)),e(`
};
$options->{content} = join('&', map { $ . '=' . $post_data->{$_} } keys %$post_data);
`)),e(`
`)),e(`

`),e(`
my $response = $http->request('`),e(t(m)),e(`', $fullUrl, $options);

`),e(`
if ($response->{success}) {
    print "Response:\\n";
    print $response->{content};
}
`),e(`
else {
    print "Error: " . $response->{status} . "\\n";
}
`),u},"perl/request":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
`),e(`
use HTTP::Request;
my $request = HTTP::Request->new('`),e(t(m)),e("', '"),e(t(h)),e(`');

`),g.length>0&&(e(`
`),e(`
`),g.forEach((function(o){_(this,i),e(`
$request->header('`),e(t(o.name)),e("', '"),e(t(o.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
`),e(`
`),p.forEach((function(o){_(this,i),e(`
$request->header('Cookie', '`),e(t(o.name)),e("="),e(t(o.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),f.length>0&&(e(`
`),e(`
`),Array.isArray(f)?(e(`
`),f.length===1&&f[0].type==="file"?(e(`
my $file = '`),e(t(f[0].value)),e(`';
$request->content($file);
`)):(e(`
my $post_data = {
`),f.forEach((function(o){_(this,i),e(`
    '`),e(t(o.name)),e("' => '"),e(t(Array.isArray(o.value)?JSON.stringify(o.value):o.value)),e(`',
`)}).bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):C(f)==="object"&&(e(`
my $post_data = {
`),Object.keys(f).forEach((function(o){_(this,i),e(`
'`),e(t(o)),e("' => '"),e(t(Array.isArray(f[o])?JSON.stringify(f[o]):f[o])),e(`',
`)}).bind(this)),e(`
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
`),u},"ocaml/httpaf":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
(* Construct the request URL *)
let fullUrl = "`),e(t(h)),e(`" in
let headers = Httpaf.Headers.of_list [
  "Content-Type", "`),e(t(g)),e(`";
  `),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('", "'),e(t(r.value)),e(`";
  `)}).bind(this)),e(`
  `),o.forEach((function(r){_(this,i),e(`
    "Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
  `)}).bind(this)),e(`
] in
let body =
`),p.length>0?(e(`
  (match `),e(t(m)),e(` with
  | "GET" -> ""
  | _ ->
  let postData = [%yojson `),e(t(JSON.stringify(p))),e(`] in
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
  (Httpaf.Method.of_string "`),e(t(m)),e(`")
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
`),u},"ocaml/cohttp_lwt":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
(* Set up the request *)
let fullUrl = "`),e(t(h)),e(`" in
let headers = Cohttp.Header.of_list [
  "Content-Type", "`),e(t(g)),e(`";
    `),f.forEach((function(r){_(this,i),e(`
      "`),e(t(r.name)),e('", "'),e(t(r.value)),e(`";
    `)}).bind(this)),e(`
    `),o.forEach((function(r){_(this,i),e(`
      "Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
    `)}).bind(this)),e(`
    ] in
  let body =
  `),p.length>0?(e(`
    (match `),e(t(m)),e(` with
    | "GET" -> Cohttp_lwt.Body.empty
    | _ ->
    let postData = [%yojson `),e(t(JSON.stringify(p))),e(`] in
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
let req = Cohttp_lwt_unix.Client.call (`),e(t(m)),e(` |> Cohttp.Code.method_of_string) fullUrl ~headers ~body in
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
`),u},"objectivec/nsurlsession":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(h),e(`";
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),f.forEach((function(r){_(this,i),e(`
    [headers setObject:@"`),e(t(r.value)),e('" forKey:@"'),e(t(r.name)),e(`"];
`)}).bind(this)),e(`
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),p.forEach((function(r){var k=this;_(this,i),e(`
`),Array.isArray(r.value)?(e(`
    NSMutableArray *`),e(t(r.name)),e(`Array = [NSMutableArray array];
    `),r.value.forEach((function(O){var T=this;_(this,k),e(`
    `),C(O)==="object"?(e(`
    NSDictionary *`),e(t(r.name)),e(`Item = @{
    `),Object.keys(O).forEach((function(w){_(this,T),e(`
        @"`),e(t(w)),e('": '),e(t(JSON.stringify(O[w]))),e(`,
    `)}).bind(this)),e(`
    };
    [`),e(t(r.name)),e("Array addObject:"),e(t(r.name)),e(`Item];
    `)):(e(`
        [`),e(t(r.name)),e('Array addObject:@"'),e(t(O)),e(`"];
    `)),e(`
    `)}).bind(this)),e(`
    [parameters setObject:`),e(t(r.name)),e('Array forKey:@"'),e(t(r.name)),e(`"];
`)):C(r.value)==="object"?(e(`
    NSDictionary *`),e(t(r.name)),e(`Dict = @{
    `),Object.keys(r.value).forEach((function(O){_(this,k),e(`
        @"`),e(t(O)),e('": '),e(t(JSON.stringify(r.value[O]))),e(`,
    `)}).bind(this)),e(`
    };
    [parameters setObject:`),e(t(r.name)),e('Dict forKey:@"'),e(t(r.name)),e(`"];
`)):(e(`
    [parameters setObject:@"`),e(t(r.value)),e('" forKey:@"'),e(t(r.name)),e(`"];
`)),e(`
`)}).bind(this)),e(`
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:fullUrl]];
request.HTTPMethod = @"`),e(t(m)),e(`";
[request setValue:@"`),e(t(g)),e(`" forHTTPHeaderField:@"Content-Type"];
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
`),o.forEach((function(r){_(this,i),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(t(r.domain)),e(`",
    NSHTTPCookiePath: @"`),e(t(r.path)),e(`",
    NSHTTPCookieName: @"`),e(t(r.name)),e(`",
    NSHTTPCookieValue: @"`),e(t(r.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[cookieStorage setCookie:cookie];
`)}).bind(this)),e(`

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
`),u},"objectivec/afnetworking":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(h),e(`";

// Set up the request headers
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),g.forEach((function(o){_(this,i),e(`
    [headers setObject:@"`),e(t(o.value)),e('" forKey:@"'),e(t(o.name)),e(`"];
`)}).bind(this)),e(`

// Add cookies to the request
`),p.forEach((function(o){_(this,i),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(t(o.domain)),e(`",
    NSHTTPCookiePath: @"`),e(t(o.path)),e(`",
    NSHTTPCookieName: @"`),e(t(o.name)),e(`",
    NSHTTPCookieValue: @"`),e(t(o.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
`)}).bind(this)),e(`

// Set up the request parameters
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),f.forEach((function(o){var r=this;_(this,i),e(`
    `),Array.isArray(o.value)?(e(`
    NSMutableArray *`),e(t(o.name)),e(`Array = [NSMutableArray array];
    `),o.value.forEach((function(k){_(this,r),e(`
    `),C(k)==="object"?(e(`
    NSDictionary *`),e(t(o.name)),e(`Object = @{
        '`),e(t(Object.keys(k)[0])),e("': "),e(t(JSON.stringify(k[Object.keys(k)[0]]))),e(`,
    };
    [`),e(t(o.name)),e("Array addObject:"),e(t(o.name)),e(`Object];
    `)):(e(`
        [`),e(t(o.name)),e('Array addObject:@"'),e(t(encodeURIComponent(k))),e(`"];
    `)),e(`
    `)}).bind(this)),e(`
    [parameters setObject:`),e(t(o.name)),e('Array forKey:@"'),e(t(o.name)),e(`"];
    `)):C(o.value)==="object"?(e(`
        NSDictionary *`),e(t(o.name)),e(`Object = @{
        '`),e(t(Object.keys(o.value)[0])),e("': "),e(t(JSON.stringify(o.value[Object.keys(o.value)[0]]))),e(`,
        };
        [parameters setObject:`),e(t(o.name)),e('Object forKey:@"'),e(t(o.name)),e(`"];
    `)):(e(`
        [parameters setObject:@"`),e(t(encodeURIComponent(o.value))),e('" forKey:@"'),e(t(o.name)),e(`"];
    `)),e(`
`)}).bind(this)),e(`

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
NSString *method = @"`),e(t(m)),e(`";
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
`),u},"lua/httpclient":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
local http_client = require("httpclient")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){var k=this;_(this,i),e(`
    ['`),e(t(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
        {
        `),r.value.forEach((function(O,T){_(this,k),e(`
            `),C(O)==="object"?(e(`
                ['`),e(t(Object.keys(O)[0])),e("'] = "),e(t(JSON.stringify(O[Object.keys(O)[0]]))),e(`,
            `)):(e(`
                `),e(t(T)),e(" = '"),e(t(encodeURIComponent(O))),e(`',
            `)),e(`
        `)}).bind(this)),e(`
        },
    `)):C(r.value)==="object"?(e(`
        {
        ['`),e(t(Object.keys(r.value)[0])),e("'] = "),e(t(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
        },
    `)):(e(`
        '`),e(t(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),o.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
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
`),u},"lua/http":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
local http = require("socket.http")
local ltn12 = require("ltn12")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){var k=this;_(this,i),e(`
    ['`),e(t(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
    {
    `),r.value.forEach((function(O,T){_(this,k),e(`
    `),C(O)==="object"?(e(`
        ['`),e(t(Object.keys(O)[0])),e("'] = "),e(t(JSON.stringify(O[Object.keys(O)[0]]))),e(`,
    `)):(e(`
        `),e(t(T)),e(" = '"),e(t(encodeURIComponent(O))),e(`',
    `)),e(`
    `)}).bind(this)),e(`
    },
    `)):C(r.value)==="object"?(e(`
    {
    ['`),e(t(Object.keys(r.value)[0])),e("'] = "),e(t(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
    },
    `)):(e(`
    '`),e(t(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),o.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
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
`),u},"lua/curl":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
local curl = require("cURL")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){_(this,i),e(`
    `),Array.isArray(r.value)||C(r.value)==="object"?(e(`
    ['`),e(t(r.name)),e("'] = "),e(t(JSON.stringify(r.value))),e(`,
    `)):(e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),o.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
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
`),u},"kotlin/okhttp3":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import okhttp3.*
import java.io.IOException

val client = OkHttpClient()

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(g)),e(`"

val body = `),p.length>0?(e(`
  `),p.forEach((function(r){_(this,i),e(`
  `),Array.isArray(r.value)||C(r.value)==="object"?(e(`
  "`),e(t(r.name)),e('" to '),e(t(JSON.stringify(r.value))),e(`,
  `)):(e(`
  "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
  `)),e(`
  `)}).bind(this)),e(`
  .joinToString(separator = "&") { "\${it.first}=\${URLEncoder.encode(it.second.toString(), "UTF-8")}" }
  .let { RequestBody.create(MediaType.parse(mimeType), it) }
`)):e(`
  null
`),e(`

val request = Request.Builder()
.url(url)
.`),e(t(m.toLowerCase())),e(`(body)
`),f.forEach((function(r){_(this,i),e(`
  .addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`),o.forEach((function(r){_(this,i),e(`
  .addHeader("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`")
`)}).bind(this)),e(`
.build()

val response = client.newCall(request).execute()

println("Response: " + response.body()?.string())
`),u},"kotlin/java":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

val url = URL("`),e(t(h)),e(`")
val connection = url.openConnection() as HttpURLConnection
connection.requestMethod = "`),e(t(m)),e(`"

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){_(this,i),e(`
connection.setRequestProperty("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`)),e(`

`),o.length>0&&(e(`
// Add cookies to the request
`),o.forEach((function(r){_(this,i),e(`
connection.addRequestProperty("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`)),e(`

// Send the request
`),p.length>0?m==="POST"?(e(`
val postData = "`),e(t(p.map((function(r){var k=this;if(_(this,i),Array.isArray(r.value))return r.value.map((function(w){return _(this,k),encodeURIComponent(w.toString(),"UTF-8")}).bind(this)).map((function(w){return _(this,k),r.name+"="+w}).bind(this)).join("&");if(C(r.value)==="object"){var O=Object.values(r.value).map((function(w){return _(this,k),encodeURIComponent(w.toString(),"UTF-8")}).bind(this)),T=Object.keys(r.value);return O.map((function(w,A){return _(this,k),r.name+"["+T[A]+"]="+w}).bind(this)).join("&")}return r.name+"="+encodeURIComponent(r.value.toString(),"UTF-8")}).bind(this)).join("&"))),e(`".toByteArray(Charsets.UTF_8)
connection.setRequestProperty("Content-Type", "`),e(t(g)),e(`")
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
`),u},"kotlin/fuel":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import com.github.kittinunf.fuel.*
import com.github.kittinunf.fuel.core.*
import com.github.kittinunf.result.*

val fullUrl = "`),e(t(h)),e(`"

val requestHeaders = listOf(
    `),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)}).bind(this)),e(`
)

val requestCookies = listOf(
    `),o.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)}).bind(this)),e(`
)

val parameters = listOf(
    `),p.forEach((function(r){_(this,i),e(`
    `),Array.isArray(r.value)||C(r.value)==="object"?(e(`
    "`),e(t(r.name)),e('" to '),e(t(JSON.stringify(r.value))),e(`,
    `)):(e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)),e(`
    `)}).bind(this)),e(`
)

val request = Fuel.request(Method.`),e(t(m)),e(`, fullUrl)
    .header(requestHeaders)
    .header("Content-Type", "`),e(t(g)),e(`")
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
`),u},"javascript/jquery":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  const fullUrl = url;

  // Set up the request configuration object
  const config = {
    url: fullUrl,
    type: method,
    headers: {
      'Content-Type': mimeType,
      `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    data: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" null "),e(`
  };

  // Add cookies to the request
  `),o.forEach((function(r){_(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
  `)}).bind(this)),e(`

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
const url = '`),e(t(h)),e(`';
const method = '`),e(t(m)),e(`';
const mimeType = '`),e(t(g)),e(`';
const headers = {
  `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),o.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),u},"javascript/fetch":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  // Construct the request configuration object
  var config = {
    method: method,
    headers: {
      'Content-Type': mimeType,
      `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    body: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" null "),e(`
  };

  // Add cookies to the request
  `),o.forEach((function(r){_(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
  `)}).bind(this)),e(`

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
const url = '`),e(t(h)),e(`';
const method = '`),e(t(m)),e(`';
const mimeType = '`),e(t(g)),e(`';
const headers = {
  `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),o.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),u},"javascript/axios":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
// Import the Axios library
import axios from 'axios';

async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  // Construct the request configuration object
  var config = {
    method: method,
    url: url,
    headers: {
      'Content-Type': mimeType,
      `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    data: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" undefined "),e(`
  };

  // Add cookies to the request
  `),o.forEach((function(r){_(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
  `)}).bind(this)),e(`

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
const url = '`),e(t(h)),e(`';
const method = '`),e(t(m)),e(`';
const mimeType = '`),e(t(g)),e(`';
const headers = {
  `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),o.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),u},"javascript/xmlhttprequest":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
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
const url = '`),e(t(h)),e(`';
const method = '`),e(t(m)),e(`';
const mimeType = '`),e(t(g)),e(`';
const headers = [
  `),f.forEach((function(r){_(this,i),e("{ name: '"),e(t(r.name)),e("', value: '"),e(t(r.value)),e("' },")}).bind(this)),e(`
];
const cookies = [
  `),o.forEach((function(r){_(this,i),e("{ name: '"),e(t(r.name)),e("', value: '"),e(t(r.value)),e("' },")}).bind(this)),e(`
];

const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),u},"java/unirest":function(n,t,a,c){var i=this;t=t||function(O){return O==null?"":String(O).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(O){return s[O]||O}var u="";function e(O){O!=null&&(u+=O)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;if(e(`
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class Main {
    public static void main(String[] args) {
        // Construct the request URL
        String fullUrl = "`),e(t(h)),e(`";

        // Set up the request
        com.mashape.unirest.http.HttpRequestWithBody request =
        Unirest.`),e(t(m.toLowerCase())),e(`(fullUrl)
            .header("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(O){_(this,i),e(`
        request.header("`),e(t(O.name)),e('", "'),e(t(O.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),o.length>0&&(e(`
        // Add cookies to the request
        `),o.forEach((function(O){_(this,i),e(`
        request.cookie("`),e(t(O.name)),e('", "'),e(t(O.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0){if(e(`
        // Set up the request body
        `),Array.isArray(p)){if(e(`
        `),p.length===1&&p[0].type==="file")e(`
            // Upload a file
            request.field("`),e(t(p[0].name)),e('", new java.io.File("'),e(t(p[0].value)),e(`"));
        `);else{if(e(`
        // Send form data or raw data
        `),g==="application/x-www-form-urlencoded"){e(`
        `);var r=p.filter((function(O){return _(this,i),!Array.isArray(O.value)}).bind(this));e(`
        `);var k=p.filter((function(O){return _(this,i),Array.isArray(O.value)}).bind(this));e(`
        request.field("`),e(t(r.map((function(O){return _(this,i),O.name}).bind(this)).join('", "'))),e(`",
        `),e(t(r.map((function(O){return _(this,i),'encodeURIComponent("'+O.value+'")'}).bind(this)).join(", "))),e(`
        `),k.length>0&&(e(`
        `),k.forEach((function(O){var T=this;_(this,i),e(`
            , "`),e(t(O.name)),e(`[]",
            `),e(t(O.value.map((function(w){return _(this,T),'encodeURIComponent("'+w+'")'}).bind(this)).join(", "))),e(`
        `)}).bind(this)),e(`
        `)),e(`
        );
        `)}else e(`
        request.body("`),e(t(p.map((function(O){return _(this,i),O.value}).bind(this)).join(""))),e(`");
        `);e(`
        `)}e(`
        `)}else C(p)==="object"&&(e(`
        // Send JSON data
        request.body("`),e(t(JSON.stringify(p))),e(`");
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
`),u},"java/okhttp":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import java.io.IOException;
import okhttp3.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // Construct the request URL
        String fullUrl = "`),e(t(h)),e(`";

        // Set up the request
        OkHttpClient client = new OkHttpClient();
        Request.Builder requestBuilder = new Request.Builder()
            .url(fullUrl)
            .method("`),e(t(m)),e(`", null)
            .addHeader("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        requestBuilder.addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),o.length>0&&(e(`
        // Add cookies to the request
        `),o.forEach((function(r){_(this,i),e(`
        requestBuilder.addHeader("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),Array.isArray(p)?(e(`
        FormBody.Builder formBodyBuilder = new FormBody.Builder();
        `),p.forEach((function(r){_(this,i),e(`
        formBodyBuilder.add("`),e(t(r.name)),e('", "'),e(t(JSON.stringify(r.value))),e(`");
        `)}).bind(this)),e(`
        RequestBody requestBody = formBodyBuilder.build();
        requestBuilder.post(requestBody);
        `)):(e(`
        MediaType mediaType = MediaType.parse("`),e(t(g)),e(`");
        String requestBodyJson = "`),e(t(JSON.stringify(p))),e(`";
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
`),u},"java/nethttp":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
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
        String fullUrl = "`),e(t(h)),e(`";

        // Set up the request
        URL url = new URL(fullUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("`),e(t(m)),e(`");
        connection.setRequestProperty("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        connection.setRequestProperty("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),o.length>0&&(e(`
        // Add cookies to the request
        `),o.forEach((function(r){_(this,i),e(`
        connection.setRequestProperty("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        connection.setDoOutput(true);
        `),Array.isArray(p)?(e(`
        String requestBody = "`),e(t(p.map((function(r){return _(this,i),r.name+"="+encodeURIComponent(r.value,"UTF-8")}).bind(this)).join("&"))),e(`";
        `)):(e(`
        String requestBody = new Gson().toJson(`),e(t(JSON.stringify(p))),e(`);
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
`),u},"java/asynchttp":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
import org.asynchttpclient.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Construct the request URL
        String fullUrl = "`),e(t(h)),e(`";

        // Set up the request
        AsyncHttpClient client = Dsl.asyncHttpClient();
        RequestBuilder requestBuilder = new RequestBuilder("`),e(t(m)),e(`")
        .setUrl(fullUrl)
        .addHeader("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        requestBuilder.addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),o.length>0&&(e(`
        // Add cookies to the request
        `),o.forEach((function(r){_(this,i),e(`
        requestBuilder.addCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
            // Set up the request body
        `),p.length>0&&(e(`
        `),Array.isArray(p)?(e(`
        StringBuilder bodyBuilder = new StringBuilder();
        `),p.forEach((function(r){_(this,i),e(`
        bodyBuilder.append("`),e(t(r.name)),e('").append("=").append("Uri.EscapeDataString('),e(t(r.value)),e(`)").append("&");
        `)}).bind(this)),e(`
        String body = bodyBuilder.toString();
        requestBuilder.setBody(body.substring(0, body.length() - 1));
        `)):(e(`
        String body = new Gson().toJson(`),e(t(JSON.stringify(p))),e(`);
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
`),u},"http/rfc7230":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
// https://www.rfc-editor.org/rfc/rfc7230
`),m==="GET"?(e(`
`),e(t(m)),e(" "),e(t(h)),e(` HTTP/1.1
`)):(e(`
`),e(t(m)),e(" "),e(t(h)),e(` HTTP/1.1
Content-Type: `),e(t(g)),e(`
`)),e(`

`),f.forEach((function(r){_(this,i),e(`
`),e(t(r.name)),e(": "),e(t(r.value)),e(`
`)}).bind(this)),e(`

`),o.forEach((function(r){_(this,i),e(`
Cookie: `),e(t(r.name)),e("="),e(t(r.value)),e(`
`)}).bind(this)),e(`

`),m==="POST"&&p.length>0&&(e(`
`),g==="application/x-www-form-urlencoded"?(e(`
`),e(t(p.map((function(r){return _(this,i),r.name+"="+encodeURIComponent(Array.isArray(r.value)||C(r.value)==="object"?JSON.stringify(r.value):r.value)}).bind(this)).join("&"))),e(`
`)):g==="application/json"?(e(`
`),e(t(JSON.stringify(p))),e(`
`)):g==="multipart/form-data"?(e(`
`),p.forEach((function(r){_(this,i),e(`
--`),e(t("boundary-"+Math.random().toString().substr(2))),e(`
Content-Disposition: form-data; name="`),e(t(r.name)),e(`"

`),e(t(Array.isArray(r.value)||C(r.value)==="object"?JSON.stringify(r.value):r.value)),e(`
`)}).bind(this)),e(`
--`),e(t("boundary-"+Math.random().toString().substr(2))),e(`-->
`)):(e(`
`),p.forEach((function(r){_(this,i),e(`
`),e(t(r.name)),e(": "),e(t(r.value)),e(`
`)}).bind(this)),e(`
`)),e(`
`)),e(`
`),u},"go/http":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

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
	url := "`),e(t(h)),e(`"

	// Construct the request body
	var body io.Reader
	`),f.length>0?(e(`
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
	body = formData
	`):(e(`
	form := url.Values{}
	`),f.forEach((function(o){var r=this;_(this,i),e(`
	`),Array.isArray(o.value)?(e(`
	`),o.value.forEach((function(k){_(this,r),e(`
	form.Add("`),e(t(o.name)),e('[]", fmt.Sprintf("%v", "'),e(t(k)),e(`"))
	`)}).bind(this)),e(`
	`)):C(o.value)==="object"?(e(`
	`),Object.keys(o.value).forEach((function(k){_(this,r),e(`
	form.Add("`),e(t(o.name)),e("["),e(t(k)),e(']", fmt.Sprintf("%v", "'),e(t(o.value[k])),e(`"))
	`)}).bind(this)),e(`
	`)):(e(`
	form.Add("`),e(t(o.name)),e('", fmt.Sprintf("%v", "'),e(t(o.value)),e(`"))
	`)),e(`
	`)}).bind(this)),e(`
	body = strings.NewReader(form.Encode())
	`)),e(`
	`)):e(`
	body = nil
	`),e(`

	// Create a new HTTP request
	req, err := http.NewRequest("`),e(t(m)),e(`", url, body)
	if err != nil {
		fmt.Println(err)
		return
	}

	`),g.length>0&&(e(`
	// Add headers to the request
	`),g.forEach((function(o){_(this,i),e(`
	req.Header.Set("`),e(t(o.name)),e('", "'),e(t(o.value)),e(`")
	`)}).bind(this)),e(`
	`)),e(`

	`),p.length>0&&(e(`
	// Add cookies to the request
	`),p.forEach((function(o){_(this,i),e(`
	req.AddCookie(&http.Cookie{Name: "`),e(t(o.name)),e('", Value: "'),e(t(o.value)),e(`"})
	`)}).bind(this)),e(`
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
`),u},"go/fasthttp":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
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
    url := "`),e(t(h)),e(`"

    // Construct the request body
    var body *strings.Reader
    `),p.length>0&&(e(`
    `),Array.isArray(p)&&p.length===1&&p[0].type==="file"?(e(`
    // Construct the form data
    file, err := os.Open("`),e(t(p[0].value)),e(`")
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
    `),Array.isArray(p)?(e(`
    var params []string
    `),p.forEach((function(r){_(this,i),e(`
    `),C(r.value)==="object"?e(`
    paramValue, err := json.Marshal(param.value)
    if err != nil {
        fmt.Println(err)
        return
    }
    params = append(params, fmt.Sprintf("%s=%s", param.name, paramValue))
    `):e(`
    params = append(params, fmt.Sprintf("%s=%s", param.name, param.value))
    `),e(`
    `)}).bind(this)),e(`
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
    req.Header.SetMethod("`),e(t(m)),e(`")
    req.Header.SetContentType("`),e(t(g)),e(`")
    req.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36")

    `),f.length>0&&(e(`
    // Add headers to the request
    `),f.forEach((function(r){_(this,i),e(`
    req.Header.Add("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
    `)}).bind(this)),e(`
    `)),e(`

    `),o.length>0&&(e(`
    // Add cookies to the request
    `),o.forEach((function(r){_(this,i),e(`
    req.Header.AddCookie(&fasthttp.Cookie{Name: "`),e(t(r.name)),e('", Value: "'),e(t(r.value)),e(`"})
    `)}).bind(this)),e(`
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
`),u},"dart/http":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
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
    final url = '`),e(t(h)),e(`';
    final method = '`),e(t(m)),e(`';
    final mimeType = '`),e(t(g)),e(`';
    final headers = {
    `),f.forEach((function(r){_(this,i),e(`
        '`),e(t(r.name)),e("' : '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
    };
    final cookies = {
    `),o.forEach((function(r){_(this,i),e(`
        '`),e(t(r.name)),e("' : '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
    };
    final postData = [
    `),p.forEach((function(r){_(this,i),e(`
        {
        'name': '`),e(t(r.name)),e(`',
        'value': `),e(t(JSON.stringify(r.value))),e(`,
        'type': '`),e(t(r.type)),e(`'
        },
    `)}).bind(this)),e(`
    ];

    final response = await makeRequest(url, method, mimeType, headers, cookies, postData);
    print('Response: $response');
}
`),u},"dart/dio":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
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
            `),p.some((function(r){return _(this,i),C(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
            std::string body = R"({`),p.forEach((function(r){_(this,i),C(r.value)==="object"||Array.isArray(r.value)?(e(`
                        "`),e(t(r.name)),e('" : '),e(t(JSON.stringify(r.value))),e(`,
                        `)):(e(`
                        "`),e(t(r.name)),e('" : "'),e(t(r.value)),e(`",
                        `))}).bind(this)),e(`})";
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
    std::string url = "`),e(t(h)),e(`";
    std::string method = "`),e(t(m)),e(`";
    std::string mimeType = "`),e(t(g)),e(`";
    std::vector<std::string> headers = {
        `),f.forEach((function(r){_(this,i),e(`
        "`),e(t(r.name)),e(": "),e(t(r.value)),e(`",
        `)}).bind(this)),e(`
    };
    std::vector<std::string> cookies = {
        `),o.forEach((function(r){_(this,i),e(`
        "`),e(t(r.name)),e("="),e(t(r.value)),e(`",
        `)}).bind(this)),e(`
    };
    std::vector<std::string> postData = {
        `),p.forEach((function(r){_(this,i),e(`
        {
            "name": "`),e(t(r.name)),e(`",
            `),C(r.value)==="object"||Array.isArray(r.value)?(e(`
            "value": `),e(t(JSON.stringify(r.value))),e(`
            `)):(e(`
            "value": "`),e(t(r.value)),e(`"
            `)),e(`
        },
        `)}).bind(this)),e(`
    };

    std::string response = makeRequest(url, method, mimeType, headers, cookies, postData);
    std::cout << "Response Code: " << response << std::endl;
    return 0;
}
`),u},"csharp/restsharp":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
using RestSharp;

class Program
{
    static void Main(string[] args)
    {
        // Construct the request URL
        var fullUrl = "`),e(t(h)),e(`";

        // Set up the request
        var client = new RestClient(fullUrl);
        var request = new RestRequest("`),e(t(m)),e('", Method.'),e(t(m.toUpperCase())),e(`);
        request.AddHeader("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        request.AddHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),o.length>0&&(e(`
        // Add cookies to the request
        `),o.forEach((function(r){_(this,i),e(`
        request.AddCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),p.some((function(r){return _(this,i),C(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
        var body = new {
            `),p.filter((function(r){return _(this,i),C(r.value)==="object"||Array.isArray(r.value)}).bind(this)).forEach((function(r){_(this,i),e(`
            `),e(t(r.name)),e(" = "),e(t(JSON.stringify(r.value))),e(`,
            `)}).bind(this)),e(`
        };
        request.AddJsonBody(body);
        `)):(e(`
        request.AddParameter("text/plain", "`),e(t(p.map((function(r){return _(this,i),r.name+"="+Uri.EscapeDataString(r.value)}).bind(this)).join("&"))),e(`", ParameterType.RequestBody);
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
`),u},"csharp/httpclient":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Construct the request URL
        var fullUrl = "`),e(t(h)),e(`";

        // Set up the request
        var client = new HttpClient();
        var request = new HttpRequestMessage(new HttpMethod("`),e(t(m)),e(`"), fullUrl);
        request.Headers.Add("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        request.Headers.Add("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),o.length>0&&(e(`
        // Add cookies to the request
        `),o.forEach((function(r){_(this,i),e(`
        var cookie = new System.Net.Cookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e('", "/", "'),e(t(h)),e(`");
        clientHandler.CookieContainer.Add(cookie);
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),p.some((function(r){return _(this,i),C(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
        var formData = new MultipartFormDataContent();
        `),p.forEach((function(r){var k=this;_(this,i),Array.isArray(r.value)?(e(`
                `),r.value.forEach((function(O){_(this,k),e(`
                    formData.Add(new StringContent("`),e(t(O)),e('"), "'),e(t(r.name)),e(`[]");
                `)}).bind(this)),e(`
            `)):C(r.value)==="object"?(e(`
                `),Object.entries(r.value).forEach((function(O){_(this,k);var T=Ye(O,2),w=T[0],A=T[1];e(`
                    formData.Add(new StringContent("`),e(t(A)),e('"), "'),e(t(r.name)),e("["),e(t(w)),e(`]");
                `)}).bind(this)),e(`
            `)):(e(`
                formData.Add(new StringContent("`),e(t(r.value)),e('"), "'),e(t(r.name)),e(`");
            `)),e(`
        `)}).bind(this)),e(`
        request.Content = formData;
        `)):(e(`
        var requestBody = new StringContent("`),e(t(p.map((function(r){return _(this,i),r.name+"="+Uri.EscapeDataString(r.value)}).bind(this)).join("&"))),e(`");
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
`),u},"cpp/iostream":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
std::string fullUrl = "`),e(h),e(`";

// Set up the request headers
std::map<std::string, std::string> headers;
`),g.forEach((function(o){_(this,i),e(`
headers["`),e(t(o.name)),e('"] = "'),e(t(o.value)),e(`";
`)}).bind(this)),e(`

// Add cookies to the request
std::string cookieString;
`),p.forEach((function(o){_(this,i),e(`
cookieString += "`),e(t(o.name)),e("="),e(t(o.value)),e(`; ";
`)}).bind(this)),e(`

// Set up the request parameters
std::map<std::string, std::string> parameters;
`),f.forEach((function(o){var r=this;_(this,i),e(`
`),Array.isArray(o.value)?(e(`
`),o.value.forEach((function(k){_(this,r),e(`
std::string paramString = "`),e(t(o.name)),e("[]="),e(t(k)),e(`";
parameters["`),e(t(o.name)),e(`"] += paramString + "&";
`)}).bind(this)),e(`
`)):C(o.value)==="object"?(e(`
`),Object.entries(o.value).forEach((function(k){_(this,r);var O=Ye(k,2),T=O[0],w=O[1];e(`
std::string paramString = "`),e(t(o.name)),e("["),e(t(T)),e("]="),e(t(w)),e(`";
parameters["`),e(t(o.name)),e(`"] += paramString + "&";
`)}).bind(this)),e(`
`)):(e(`
std::string paramString = "`),e(t(o.name)),e("="),e(t(o.value)),e(`";
parameters["`),e(t(o.name)),e(`"] += paramString + "&";
`)),e(`
`)}).bind(this)),e(`

// Construct the request
std::string method = "`),e(t(m)),e(`";
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
`),u},"cpp/curl":function(n,t,a,c){var i=this;t=t||function(p){return p==null?"":String(p).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(p){return s[p]||p}var u="";function e(p){p!=null&&(u+=p)}var h=n.url;n.method,n.mimeType;var m=n.headers,g=n.postData,f=n.cookies;return e(`
// Construct the request URL
std::string url = "`),e(h),e(`";

// Set up the request headers
struct curl_slist* headers = NULL;
`),m.forEach((function(p){_(this,i),e(`
std::string headerString = "`),e(t(p.name)),e(": "),e(t(p.value)),e(`";
headers = curl_slist_append(headers, headerString.c_str());
`)}).bind(this)),e(`

// Add cookies to the request
std::string cookieData;
`),f.forEach((function(p){_(this,i),e(`
std::string cookieString = "`),e(t(p.name)),e("="),e(t(p.value)),e(`";
cookieData += cookieString + "; ";
`)}).bind(this)),e(`

// Set up the request parameters
std::string postData;
`),g.forEach((function(p){var o=this;_(this,i),e(`
`),Array.isArray(p.value)?(e(`
`),p.value.forEach((function(r){_(this,o),e(`
std::string paramString = "`),e(t(p.name)),e("[]="),e(t(r)),e(`";
postData += paramString + "&";
`)}).bind(this)),e(`
`)):C(p.value)==="object"?(e(`
`),Object.entries(p.value).forEach((function(r){_(this,o);var k=Ye(r,2),O=k[0],T=k[1];e(`
std::string paramString = "`),e(t(p.name)),e("["),e(t(O)),e("]="),e(t(T)),e(`";
postData += paramString + "&";
`)}).bind(this)),e(`
`)):(e(`
std::string paramString = "`),e(t(p.name)),e("="),e(t(p.value)),e(`";
postData += paramString + "&";
`)),e(`
`)}).bind(this)),e(`

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
`),u},"cpp/arduino":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
// Construct the request URL
String url = "`),e(h),e(`";

// Set up the request headers
String headers;
`),f.forEach((function(r){_(this,i),e(`
    String headerString = "`),e(t(r.name)),e(": "),e(t(r.value)),e(`";
    headers += headerString + "\\r\\n";
`)}).bind(this)),e(`

// Add cookies to the request
`),o.forEach((function(r){_(this,i),e(`
    String cookieString = "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
    // TODO: Add cookieString to the request
`)}).bind(this)),e(`

// Set up the request parameters
String postData;
`),p.forEach((function(r){var k=this;_(this,i),e(`
    `),Array.isArray(r.value)?(e(`
        `),r.value.forEach((function(O){_(this,k),e(`
            String paramString = "`),e(t(r.name)),e("="),e(t(O)),e(`";
            postData += paramString + "&";
        `)}).bind(this)),e(`
    `)):C(r.value)==="object"?(e(`
        String paramString = "`),e(t(r.name)),e("="),e(t(JSON.stringify(r.value))),e(`";
        postData += paramString + "&";
    `)):(e(`
        String paramString = "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
        postData += paramString + "&";
    `)),e(`
`)}).bind(this)),e(`

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
`),u},"clojure/ring-client":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`

(require '[ring.util.http-client :as client])

(defn make-request []
    (let [url "`),e(t(h)),e(`"
        headers {`),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        cookies {`),o.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        options {:headers headers
        :cookies cookies
        :content-type "`),e(t(g)),e(`"}
    `),m==="GET"?e(`
        response (client/get url options)]
    `):(e(`
        post-data "`),p.length===1&&p[0].type==="file"?(e(`
    {:multipart true
        :file "`),e(t(p[0].value)),e(`"}
    `)):(e(`
    {`),p.forEach((function(r){_(this,i),e(`
        "`),e(t(r.name)),e('" '),Array.isArray(r.value)||C(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(t(r.value)),e('"')),r.isLast||e(",")}).bind(this)),e(`}
    `)),e(`"
    response (client/post url options post-data)]
    `)),e(`
    (println "Response: " (:body response))))

(make-request)
`),u},"clojure/clj-http":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
(require '[clj-http.client :as client])

(defn make-request []
    (let [url "`),e(t(h)),e(`"
        headers {`),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        cookies {`),o.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        options {:headers headers
        :cookies cookies
        :content-type "`),e(t(g)),e(`"}
    `),m==="GET"?e(`
        response (client/get url options)]
    `):(e(`
        post-data "`),p.length===1&&p[0].type==="file"?(e(`
    {:multipart true
        :file "`),e(t(p[0].value)),e(`"}
    `)):(e(`
    {`),p.forEach((function(r){_(this,i),e(`
        "`),e(t(r.name)),e('" '),Array.isArray(r.value)||C(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(t(r.value)),e('"')),r.isLast||e(",")}).bind(this)),e(`}
    `)),e(`"
    response (client/post url options post-data)]
    `)),e(`
    (println (str "`),e(t(m)),e(` " url " HTTP/1.1"))
    (doseq [entry headers]
    (println (str entry)))
    (doseq [entry cookies]
    (println (str "Cookie: " entry)))
    (when (not (empty? post-data))
    (println (str post-data)))
    (println (str "\\nResponse: " (:body response)))))

(make-request)
`),u},"c/ghttp":function(n,t,a,c){var i=this;t=t||function(k){return k==null?"":String(k).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(k){return s[k]||k}var u="";function e(k){k!=null&&(u+=k)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;if(e(`
// Set up the request
struct evhttp_uri *uri = evhttp_uri_parse("`),e(t(h)),e(`");
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
evhttp_request_set_type(req, EVHTTP_REQ_`),e(t(m.toUpperCase())),e(`);

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(k){_(this,i),e(`
evhttp_add_header(req->output_headers, "`),e(t(k.name)),e('", "'),e(t(k.value)),e(`");
`)}).bind(this)),e(`
`)),e(`

`),o.length>0&&(e(`
// Add cookies to the request
`),o.forEach((function(k){_(this,i),e(`
evhttp_add_header(req->output_headers, "Cookie", "`),e(t(k.name)),e("="),e(t(k.value)),e(`");
`)}).bind(this)),e(`
`)),e(`

`),p.length>0){e(`
// Set request body
`);var r=p.map((function(k){var O=this;return _(this,i),Array.isArray(k.value)?k.value.map((function(T){return _(this,O),k.name+"="+encodeURIComponent(JSON.stringify(T))}).bind(this)).join("&"):C(k.value)==="object"?k.name+"="+encodeURIComponent(JSON.stringify(k.value)):k.name+"="+encodeURIComponent(k.value)}).bind(this)).join("&");e(`
evbuffer_add_printf(req->output_buffer, "%s", "`),e(t(r)),e(`");
evhttp_add_header(req->output_headers, "Content-Type", "`),e(t(g)),e(`");
`)}return e(`

// Send the request
if (evhttp_make_request(conn, req, EVHTTP_REQ_`),e(t(m.toUpperCase())),e(`, path) == -1) {
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
`),u},"c/curl":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url,m=n.method,g=n.mimeType;n.headers;var f=n.postData;if(n.cookies,e(`
#include <stdio.h>
#include <stdlib.h>
#include <curl/curl.h>

int main(void) {
CURL *curl;
CURLcode res;
struct curl_slist *headers = NULL;
char *url = "`),e(t(h)),e(`";
char *method = "`),e(t(m)),e(`";
char *mimeType = "`),e(t(g)),e(`";
char *postData = "";
`),f.length>0){e(`
`);var p=f.map((function(o){var r=this;return _(this,i),Array.isArray(o.value)?o.value.map((function(k){return _(this,r),o.name+"="+encodeURIComponent(JSON.stringify(k))}).bind(this)).join("&"):C(o.value)==="object"?o.name+"="+encodeURIComponent(JSON.stringify(o.value)):o.name+"="+encodeURIComponent(o.value)}).bind(this)).join("&");e(`
postData = "`),e(t(p)),e(`";
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
`),u},"brainfuck/brainfuck":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
// Create a new brainfuck program
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.

// Construct the request URL
,[<]>[.>],`),h.split("").forEach((function(r){_(this,i),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}).bind(this)),e(`++++++++[->+++++<]>.

// Set up the request
,[<]>[.>],`),m.split("").forEach((function(r){_(this,i),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}).bind(this)),e(`++++++++[->+++++<]>.

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){_(this,i),e(",[<]>[.>],'"),e(t(r.name)),e(": "),e(t(r.value)),e("',")}).bind(this)),e(`
`)),e(`

`),o.length>0&&(e(`
// Add cookies to the request
`),o.forEach((function(r){_(this,i),e(",[<]>[.>],'Set-Cookie: "),e(t(r.name)),e("="),e(t(r.value)),e("',")}).bind(this)),e(`
`)),e(`


`),p.length>0&&(e(`
// Send the request
,[<]>[.>],'`),p.length===1&&p[0].type==="file"?e("multipart/form-data"):e(t(g)),e(`',<

`),p.length===1&&p[0].type==="file"?(e(`
    ,[<]>[.>],'`),e(t(p[0].name)),e("=',<,[>]<[.>],<,[<]>[.>],<,[>]<[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")):(e(`
    `),p.forEach((function(r){_(this,i),e(`
        ,[<]>[.>],'`),e(t(r.name)),e("=',<,[>]<[.>],'"),e(t(r.value)),e("',")}).bind(this)),e(`
    ,`)),e(`

,[<]>[.>],'',<]
`)),e(`

// Handle the response
,[<]>[.>],'Response:',<[<]>[.>],[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-],<

// Handle errors
,[<]>[.>],'Error:',<[<]>[.>],'Oops! Brainfuck couldn't handle this request. Maybe try Python next time?',`),p.length===1&&p[0].type==="file"&&e(" Remember, uploading files in Brainfuck is like trying to fit a square peg in a round hole."),e(`
`),u},"bash/wget":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
wget --verbose --output-document=-
--header="Content-Type: `),e(t(g)),e(`"
`),f.forEach((function(r){_(this,i),e(`
    --header="`),e(t(r.name)),e(": "),e(t(r.value)),e(`"
`)}).bind(this)),e(`
`),o.forEach((function(r){_(this,i),e(`
    --header="Cookie: `),e(t(r.name)),e("="),e(t(r.value)),e(`"
`)}).bind(this)),m==="GET"?(e(`
    "`),e(t(h)),e(`"
`)):m==="POST"?(e(`
    --post-data="`),e(t(p.map((function(r){_(this,i);var k=r.value;return(Array.isArray(k)||C(k)==="object")&&(k=JSON.stringify(k)),encodeURIComponent(r.name)+"="+encodeURIComponent(k)}).bind(this)).join("&"))),e(`"
    "`),e(t(h)),e(`"
`)):m==="PUT"?(e(`
    --method=PUT
    --body-data="`),e(t(p.map((function(r){_(this,i);var k=r.value;return(Array.isArray(k)||C(k)==="object")&&(k=JSON.stringify(k)),encodeURIComponent(r.name)+"="+encodeURIComponent(k)}).bind(this)).join("&"))),e(`"
    "`),e(t(h)),e(`"
`)):m==="DELETE"&&(e(`
    --method=DELETE
    "`),e(t(h)),e(`"
`)),e(`
`),u},"bash/httpie":function(n,t,a,c){var i=this;t=t||function(o){return o==null?"":String(o).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(o){return s[o]||o}var u="";function e(o){o!=null&&(u+=o)}var h=n.url;n.method,n.mimeType;var m=n.headers,g=n.postData,f=n.cookies;if(e(`
http --verbose --check --follow
"`),e(t(h)),e(`"
`),e(t(m.map((function(o){return _(this,i),"'"+o.name+":"+o.value+"'"}).bind(this)).join(` 
 `))),e(`
`),f.forEach((function(o){_(this,i),e(`
Cookie:"`),e(t(o.name)),e("="),e(t(o.value)),e(`"
`)}).bind(this)),e(`
`),g.length>0){e(`
`);var p=g.map((function(o){var r=this;return _(this,i),Array.isArray(o.value)?o.value.map((function(k){return _(this,r),"'"+o.name+"="+encodeURIComponent(JSON.stringify(k))+"'"}).bind(this)).join(" "):C(o.value)==="object"?"'"+o.name+"="+encodeURIComponent(JSON.stringify(o.value))+"'":"'"+o.name+"="+encodeURIComponent(o.value)+"'"}).bind(this)).join(` 
 `);e(`
`),e(t(p)),e(`
`)}return e(`
--form
--timeout 120s
--max-redirects 10
`),u},"bash/curl":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
curl -X `),e(t(m)),e(`
-H "Content-Type: `),e(t(g)),e(`"
`),f.forEach((function(r){_(this,i),e(`
    -H "`),e(t(r.name)),e(": "),e(t(r.value)),e(`"
`)}).bind(this)),e(`
`),o.forEach((function(r){_(this,i),e(`
    --cookie "`),e(t(r.name)),e("="),e(t(r.value)),e(`"
`)}).bind(this)),p.length>0&&(e(`
    -d `),p.length===1&&p[0].type==="file"?(e(`
        "@`),e(t(p[0].value)),e(`"
    `)):(e(`
        "`),e(t(p.map((function(r){_(this,i);var k=r.value;return(Array.isArray(k)||C(k)==="object")&&(k=JSON.stringify(k)),encodeURIComponent(r.name)+"="+encodeURIComponent(k)}).bind(this)).join("&"))),e(`"
    `))),e(`
"`),e(t(h)),e(`"
`),u},"r/rcurl":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
library(RCurl)

url <- "`),e(t(h)),e(`"
method <- "`),e(t(m)),e(`"
mimeType <- "`),e(t(g)),e(`"

headers <- list(
`),f.forEach((function(r){_(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
)

cookies <- list(
`),o.forEach((function(r){_(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
)

`),m==="GET"?e(`
req <- getURL(url, httpheader = headers, cookie = cookies)
`):(e(`
body <- list(
`),p.forEach((function(r){_(this,i),e(`
"`),e(t(r.name)),e('" = '),Array.isArray(r.value)||C(r.value)==="object"?(e(`
  `),e(t(JSON.stringify(r.value))),e(`,
`)):(e(`
  "`),e(t(r.value)),e(`",
`)),e(`
`)}).bind(this)),e(`
)

req <- postForm(url, .params = body, httpheader = headers, cookie = cookies)
`)),e(`

cat("Response: ", "\\n")
cat(req, "\\n")

`),u},"r/httr":function(n,t,a,c){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,d)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function d(r){return s[r]||r}var u="";function e(r){r!=null&&(u+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,o=n.cookies;return e(`
library(httr)

url <- "`),e(t(h)),e(`"

req <- VERB("`),e(t(m)),e(`", url)

`),f.forEach((function(r){_(this,i),e(`
req <- add_headers("`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`", req)
`)}).bind(this)),e(`

`),o.forEach((function(r){_(this,i),e(`
req <- add_headers("Cookie" = "`),e(t(r.name)),e("="),e(t(r.value)),e(`", req)
`)}).bind(this)),e(`

`),p.length>0&&(e(`
body <- list(
`),p.forEach((function(r){_(this,i),e(`
"`),e(t(r.name)),e('" = '),Array.isArray(r.value)||C(r.value)==="object"?(e(`
    `),e(t(JSON.stringify(r.value))),e(`,
`)):(e(`
    "`),e(t(r.value)),e(`",
`)),e(`
`)}).bind(this)),e(`
)
req <- content(req, as.formula(paste0("`),e(t(g)),e(`", "()")), body)
`)),e(`

res <- content(req)

cat("Response: ")
print(toJSON(res, pretty = TRUE))
`),u}};function hs(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(t=>{const a=n[t],c=typeof a;c!=="object"&&c!=="function"||Object.isFrozen(a)||hs(a)}),n}class Ia{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ms(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function we(n,...t){const a=Object.create(null);for(const c in n)a[c]=n[c];return t.forEach(function(c){for(const i in c)a[i]=c[i]}),a}const Ba=n=>!!n.scope;class A_{constructor(t,a){this.buffer="",this.classPrefix=a.classPrefix,t.walk(this)}addText(t){this.buffer+=ms(t)}openNode(t){if(!Ba(t))return;const a=((c,{prefix:i})=>{if(c.startsWith("language:"))return c.replace("language:","language-");if(c.includes(".")){const s=c.split(".");return[`${i}${s.shift()}`,...s.map((l,d)=>`${l}${"_".repeat(d+1)}`)].join(" ")}return`${i}${c}`})(t.scope,{prefix:this.classPrefix});this.span(a)}closeNode(t){Ba(t)&&(this.buffer+="</span>")}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Pa=(n={})=>{const t={children:[]};return Object.assign(t,n),t};class Tr{constructor(){this.rootNode=Pa(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const a=Pa({scope:t});this.add(a),this.stack.push(a)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,a){return typeof a=="string"?t.addText(a):a.children&&(t.openNode(a),a.children.forEach(c=>this._walk(t,c)),t.closeNode(a)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(a=>typeof a=="string")?t.children=[t.children.join("")]:t.children.forEach(a=>{Tr._collapse(a)}))}}class x_ extends Tr{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,a){const c=t.root;a&&(c.scope=`language:${a}`),this.add(c)}toHTML(){return new A_(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function rn(n){return n?typeof n=="string"?n:n.source:null}function fs(n){return Ue("(?=",n,")")}function q_(n){return Ue("(?:",n,")*")}function R_(n){return Ue("(?:",n,")?")}function Ue(...n){return n.map(t=>rn(t)).join("")}function Or(...n){return"("+(function(a){const c=a[a.length-1];return typeof c=="object"&&c.constructor===Object?(a.splice(a.length-1,1),c):{}}(n).capture?"":"?:")+n.map(a=>rn(a)).join("|")+")"}function gs(n){return new RegExp(n.toString()+"|").exec("").length-1}const L_=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Vt(n,{joinWith:t}){let a=0;return n.map(c=>{a+=1;const i=a;let s=rn(c),l="";for(;s.length>0;){const d=L_.exec(s);if(!d){l+=s;break}l+=s.substring(0,d.index),s=s.substring(d.index+d[0].length),d[0][0]==="\\"&&d[1]?l+="\\"+String(Number(d[1])+i):(l+=d[0],d[0]==="("&&a++)}return l}).map(c=>`(${c})`).join(t)}const _s="[a-zA-Z]\\w*",wr="[a-zA-Z_]\\w*",bs="\\b\\d+(\\.\\d+)?",ys="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",vs="\\b(0b[01]+)",an={begin:"\\\\[\\s\\S]",relevance:0},M_={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[an]},D_={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[an]},Vn=function(n,t,a={}){const c=we({scope:"comment",begin:n,end:t,contains:[]},a);c.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Or("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return c.contains.push({begin:Ue(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),c},$_=Vn("//","$"),j_=Vn("/\\*","\\*/"),U_=Vn("#","$"),I_={scope:"number",begin:bs,relevance:0},B_={scope:"number",begin:ys,relevance:0},P_={scope:"number",begin:vs,relevance:0},H_={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[an,{begin:/\[/,end:/\]/,relevance:0,contains:[an]}]},F_={scope:"title",begin:_s,relevance:0},z_={scope:"title",begin:wr,relevance:0},K_={begin:"\\.\\s*"+wr,relevance:0};var _n=Object.freeze({__proto__:null,APOS_STRING_MODE:M_,BACKSLASH_ESCAPE:an,BINARY_NUMBER_MODE:P_,BINARY_NUMBER_RE:vs,COMMENT:Vn,C_BLOCK_COMMENT_MODE:j_,C_LINE_COMMENT_MODE:$_,C_NUMBER_MODE:B_,C_NUMBER_RE:ys,END_SAME_AS_BEGIN:function(n){return Object.assign(n,{"on:begin":(t,a)=>{a.data._beginMatch=t[1]},"on:end":(t,a)=>{a.data._beginMatch!==t[1]&&a.ignoreMatch()}})},HASH_COMMENT_MODE:U_,IDENT_RE:_s,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:K_,NUMBER_MODE:I_,NUMBER_RE:bs,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:D_,REGEXP_MODE:H_,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(n={})=>{const t=/^#![ ]*\//;return n.binary&&(n.begin=Ue(t,/.*\b/,n.binary,/\b.*/)),we({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(a,c)=>{a.index!==0&&c.ignoreMatch()}},n)},TITLE_MODE:F_,UNDERSCORE_IDENT_RE:wr,UNDERSCORE_TITLE_MODE:z_});function G_(n,t){n.input[n.index-1]==="."&&t.ignoreMatch()}function J_(n,t){n.className!==void 0&&(n.scope=n.className,delete n.className)}function W_(n,t){t&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=G_,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function Z_(n,t){Array.isArray(n.illegal)&&(n.illegal=Or(...n.illegal))}function V_(n,t){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function X_(n,t){n.relevance===void 0&&(n.relevance=1)}const Q_=(n,t)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const a=Object.assign({},n);Object.keys(n).forEach(c=>{delete n[c]}),n.keywords=a.keywords,n.begin=Ue(a.beforeMatch,fs(a.begin)),n.starts={relevance:0,contains:[Object.assign(a,{endsParent:!0})]},n.relevance=0,delete a.beforeMatch},Y_=["of","and","for","in","not","or","if","then","parent","list","value"],eb="keyword";function Ss(n,t,a=eb){const c=Object.create(null);return typeof n=="string"?i(a,n.split(" ")):Array.isArray(n)?i(a,n):Object.keys(n).forEach(function(s){Object.assign(c,Ss(n[s],t,s))}),c;function i(s,l){t&&(l=l.map(d=>d.toLowerCase())),l.forEach(function(d){const u=d.split("|");c[u[0]]=[s,nb(u[0],u[1])]})}}function nb(n,t){return t?Number(t):function(a){return Y_.includes(a.toLowerCase())}(n)?0:1}const Ha={},Re=n=>{console.error(n)},Fa=(n,...t)=>{console.log(`WARN: ${n}`,...t)},Fe=(n,t)=>{Ha[`${n}/${t}`]||(console.log(`Deprecated as of ${n}. ${t}`),Ha[`${n}/${t}`]=!0)},bn=new Error;function za(n,t,{key:a}){let c=0;const i=n[a],s={},l={};for(let d=1;d<=t.length;d++)l[d+c]=i[d],s[d+c]=!0,c+=gs(t[d-1]);n[a]=l,n[a]._emit=s,n[a]._multi=!0}function tb(n){(function(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)})(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),function(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw Re("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),bn;if(typeof t.beginScope!="object"||t.beginScope===null)throw Re("beginScope must be object"),bn;za(t,t.begin,{key:"beginScope"}),t.begin=Vt(t.begin,{joinWith:""})}}(n),function(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw Re("skip, excludeEnd, returnEnd not compatible with endScope: {}"),bn;if(typeof t.endScope!="object"||t.endScope===null)throw Re("endScope must be object"),bn;za(t,t.end,{key:"endScope"}),t.end=Vt(t.end,{joinWith:""})}}(n)}function rb(n){function t(i,s){return new RegExp(rn(i),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(s?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,s]),this.matchAt+=gs(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(l=>l[1]);this.matcherRe=t(Vt(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(s);if(!l)return null;const d=l.findIndex((e,h)=>h>0&&e!==void 0),u=this.matchIndexes[d];return l.splice(0,d),Object.assign(l,u)}}class c{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const l=new a;return this.rules.slice(s).forEach(([d,u])=>l.addRule(d,u)),l.compile(),this.multiRegexes[s]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,l){this.rules.push([s,l]),l.type==="begin"&&this.count++}exec(s){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let d=l.exec(s);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,d=u.exec(s)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=we(n.classNameAliases||{}),function i(s,l){const d=s;if(s.isCompiled)return d;[J_,V_,tb,Q_].forEach(e=>e(s,l)),n.compilerExtensions.forEach(e=>e(s,l)),s.__beforeBegin=null,[W_,Z_,X_].forEach(e=>e(s,l)),s.isCompiled=!0;let u=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),u=s.keywords.$pattern,delete s.keywords.$pattern),u=u||/\w+/,s.keywords&&(s.keywords=Ss(s.keywords,n.case_insensitive)),d.keywordPatternRe=t(u,!0),l&&(s.begin||(s.begin=/\B|\b/),d.beginRe=t(d.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(d.endRe=t(d.end)),d.terminatorEnd=rn(d.end)||"",s.endsWithParent&&l.terminatorEnd&&(d.terminatorEnd+=(s.end?"|":"")+l.terminatorEnd)),s.illegal&&(d.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(e){return function(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(m){return we(h,{variants:null},m)})),h.cachedVariants?h.cachedVariants:Es(h)?we(h,{starts:h.starts?we(h.starts):null}):Object.isFrozen(h)?we(h):h}(e==="self"?s:e)})),s.contains.forEach(function(e){i(e,d)}),s.starts&&i(s.starts,l),d.matcher=function(e){const h=new c;return e.contains.forEach(m=>h.addRule(m.begin,{rule:m,type:"begin"})),e.terminatorEnd&&h.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&h.addRule(e.illegal,{type:"illegal"}),h}(d),d}(n)}function Es(n){return!!n&&(n.endsWithParent||Es(n.starts))}class ab extends Error{constructor(t,a){super(t),this.name="HTMLInjectionError",this.html=a}}const Lt=ms,Ka=we,Ga=Symbol("nomatch"),ks=function(n){const t=Object.create(null),a=Object.create(null),c=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:x_};function u(T){return d.noHighlightRe.test(T)}function e(T,w,A){let j="",M="";typeof w=="object"?(j=T,A=w.ignoreIllegals,M=w.language):(Fe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Fe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),M=T,j=w),A===void 0&&(A=!0);const R={code:j,language:M};O("before:highlight",R);const B=R.result?R.result:h(R.language,R.code,A);return B.code=R.code,O("after:highlight",B),B}function h(T,w,A,j){const M=Object.create(null);function R(){if(!q.keywords)return void V.addText(I);let N=0;q.keywordPatternRe.lastIndex=0;let x=q.keywordPatternRe.exec(I),K="";for(;x;){K+=I.substring(N,x.index);const W=te.case_insensitive?x[0].toLowerCase():x[0],ne=(P=W,q.keywords[P]);if(ne){const[_e,Yn]=ne;if(V.addText(K),K="",M[W]=(M[W]||0)+1,M[W]<=7&&(Be+=Yn),_e.startsWith("_"))K+=x[0];else{const dn=te.classNameAliases[_e]||_e;Y(x[0],dn)}}else K+=x[0];N=q.keywordPatternRe.lastIndex,x=q.keywordPatternRe.exec(I)}var P;K+=I.substring(N),V.addText(K)}function B(){q.subLanguage!=null?function(){if(I==="")return;let N=null;if(typeof q.subLanguage=="string"){if(!t[q.subLanguage])return void V.addText(I);N=h(q.subLanguage,I,!0,U[q.subLanguage]),U[q.subLanguage]=N._top}else N=m(I,q.subLanguage.length?q.subLanguage:null);q.relevance>0&&(Be+=N.relevance),V.__addSublanguage(N._emitter,N.language)}():R(),I=""}function Y(N,x){N!==""&&(V.startScope(x),V.addText(N),V.endScope())}function z(N,x){let K=1;const P=x.length-1;for(;K<=P;){if(!N._emit[K]){K++;continue}const W=te.classNameAliases[N[K]]||N[K],ne=x[K];W?Y(ne,W):(I=ne,R(),I=""),K++}}function ee(N,x){return N.scope&&typeof N.scope=="string"&&V.openNode(te.classNameAliases[N.scope]||N.scope),N.beginScope&&(N.beginScope._wrap?(Y(I,te.classNameAliases[N.beginScope._wrap]||N.beginScope._wrap),I=""):N.beginScope._multi&&(z(N.beginScope,x),I="")),q=Object.create(N,{parent:{value:q}}),q}function ce(N,x,K){let P=function(W,ne){const _e=W&&W.exec(ne);return _e&&_e.index===0}(N.endRe,K);if(P){if(N["on:end"]){const W=new Ia(N);N["on:end"](x,W),W.isMatchIgnored&&(P=!1)}if(P){for(;N.endsParent&&N.parent;)N=N.parent;return N}}if(N.endsWithParent)return ce(N.parent,x,K)}function fe(N){return q.matcher.regexIndex===0?(I+=N[0],1):(Qn=!0,0)}function Ee(N){const x=N[0],K=w.substring(N.index),P=ce(q,N,K);if(!P)return Ga;const W=q;q.endScope&&q.endScope._wrap?(B(),Y(x,q.endScope._wrap)):q.endScope&&q.endScope._multi?(B(),z(q.endScope,N)):W.skip?I+=x:(W.returnEnd||W.excludeEnd||(I+=x),B(),W.excludeEnd&&(I=x));do q.scope&&V.closeNode(),q.skip||q.subLanguage||(Be+=q.relevance),q=q.parent;while(q!==P.parent);return P.starts&&ee(P.starts,N),W.returnEnd?0:x.length}let le={};function ge(N,x){const K=x&&x[0];if(I+=N,K==null)return B(),0;if(le.type==="begin"&&x.type==="end"&&le.index===x.index&&K===""){if(I+=w.slice(x.index,x.index+1),!i){const P=new Error(`0 width match regex (${T})`);throw P.languageName=T,P.badRule=le.rule,P}return 1}if(le=x,x.type==="begin")return function(P){const W=P[0],ne=P.rule,_e=new Ia(ne),Yn=[ne.__beforeBegin,ne["on:begin"]];for(const dn of Yn)if(dn&&(dn(P,_e),_e.isMatchIgnored))return fe(W);return ne.skip?I+=W:(ne.excludeBegin&&(I+=W),B(),ne.returnBegin||ne.excludeBegin||(I=W)),ee(ne,P),ne.returnBegin?0:W.length}(x);if(x.type==="illegal"&&!A){const P=new Error('Illegal lexeme "'+K+'" for mode "'+(q.scope||"<unnamed>")+'"');throw P.mode=q,P}if(x.type==="end"){const P=Ee(x);if(P!==Ga)return P}if(x.type==="illegal"&&K==="")return 1;if(Xn>1e5&&Xn>3*x.index)throw new Error("potential infinite loop, way more iterations than matches");return I+=K,K.length}const te=o(T);if(!te)throw Re(s.replace("{}",T)),new Error('Unknown language: "'+T+'"');const Ie=rb(te);let ke="",q=j||Ie;const U={},V=new d.__emitter(d);(function(){const N=[];for(let x=q;x!==te;x=x.parent)x.scope&&N.unshift(x.scope);N.forEach(x=>V.openNode(x))})();let I="",Be=0,xe=0,Xn=0,Qn=!1;try{if(te.__emitTokens)te.__emitTokens(w,V);else{for(q.matcher.considerAll();;){Xn++,Qn?Qn=!1:q.matcher.considerAll(),q.matcher.lastIndex=xe;const N=q.matcher.exec(w);if(!N)break;const x=ge(w.substring(xe,N.index),N);xe=N.index+x}ge(w.substring(xe))}return V.finalize(),ke=V.toHTML(),{language:T,value:ke,relevance:Be,illegal:!1,_emitter:V,_top:q}}catch(N){if(N.message&&N.message.includes("Illegal"))return{language:T,value:Lt(w),illegal:!0,relevance:0,_illegalBy:{message:N.message,index:xe,context:w.slice(xe-100,xe+100),mode:N.mode,resultSoFar:ke},_emitter:V};if(i)return{language:T,value:Lt(w),illegal:!1,relevance:0,errorRaised:N,_emitter:V,_top:q};throw N}}function m(T,w){w=w||d.languages||Object.keys(t);const A=function(z){const ee={value:Lt(z),illegal:!1,relevance:0,_top:l,_emitter:new d.__emitter(d)};return ee._emitter.addText(z),ee}(T),j=w.filter(o).filter(k).map(z=>h(z,T,!1));j.unshift(A);const M=j.sort((z,ee)=>{if(z.relevance!==ee.relevance)return ee.relevance-z.relevance;if(z.language&&ee.language){if(o(z.language).supersetOf===ee.language)return 1;if(o(ee.language).supersetOf===z.language)return-1}return 0}),[R,B]=M,Y=R;return Y.secondBest=B,Y}function g(T){let w=null;const A=function(R){let B=R.className+" ";B+=R.parentNode?R.parentNode.className:"";const Y=d.languageDetectRe.exec(B);if(Y){const z=o(Y[1]);return z||(Fa(s.replace("{}",Y[1])),Fa("Falling back to no-highlight mode for this block.",R)),z?Y[1]:"no-highlight"}return B.split(/\s+/).find(z=>u(z)||o(z))}(T);if(u(A))return;if(O("before:highlightElement",{el:T,language:A}),T.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",T);if(T.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(T)),d.throwUnescapedHTML))throw new ab("One of your code blocks includes unescaped HTML.",T.innerHTML);w=T;const j=w.textContent,M=A?e(j,{language:A,ignoreIllegals:!0}):m(j);T.innerHTML=M.value,T.dataset.highlighted="yes",function(R,B,Y){const z=B&&a[B]||Y;R.classList.add("hljs"),R.classList.add(`language-${z}`)}(T,A,M.language),T.result={language:M.language,re:M.relevance,relevance:M.relevance},M.secondBest&&(T.secondBest={language:M.secondBest.language,relevance:M.secondBest.relevance}),O("after:highlightElement",{el:T,result:M,text:j})}let f=!1;function p(){if(document.readyState==="loading")return void(f=!0);document.querySelectorAll(d.cssSelector).forEach(g)}function o(T){return T=(T||"").toLowerCase(),t[T]||t[a[T]]}function r(T,{languageName:w}){typeof T=="string"&&(T=[T]),T.forEach(A=>{a[A.toLowerCase()]=w})}function k(T){const w=o(T);return w&&!w.disableAutodetect}function O(T,w){const A=T;c.forEach(function(j){j[A]&&j[A](w)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){f&&p()},!1),Object.assign(n,{highlight:e,highlightAuto:m,highlightAll:p,highlightElement:g,highlightBlock:function(T){return Fe("10.7.0","highlightBlock will be removed entirely in v12.0"),Fe("10.7.0","Please use highlightElement now."),g(T)},configure:function(T){d=Ka(d,T)},initHighlighting:()=>{p(),Fe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){p(),Fe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(T,w){let A=null;try{A=w(n)}catch(j){if(Re("Language definition for '{}' could not be registered.".replace("{}",T)),!i)throw j;Re(j),A=l}A.name||(A.name=T),t[T]=A,A.rawDefinition=w.bind(null,n),A.aliases&&r(A.aliases,{languageName:T})},unregisterLanguage:function(T){delete t[T];for(const w of Object.keys(a))a[w]===T&&delete a[w]},listLanguages:function(){return Object.keys(t)},getLanguage:o,registerAliases:r,autoDetection:k,inherit:Ka,addPlugin:function(T){(function(w){w["before:highlightBlock"]&&!w["before:highlightElement"]&&(w["before:highlightElement"]=A=>{w["before:highlightBlock"](Object.assign({block:A.el},A))}),w["after:highlightBlock"]&&!w["after:highlightElement"]&&(w["after:highlightElement"]=A=>{w["after:highlightBlock"](Object.assign({block:A.el},A))})})(T),c.push(T)},removePlugin:function(T){const w=c.indexOf(T);w!==-1&&c.splice(w,1)}}),n.debugMode=function(){i=!1},n.safeMode=function(){i=!0},n.versionString="11.9.0",n.regex={concat:Ue,lookahead:fs,either:Or,optional:R_,anyNumberOfTimes:q_};for(const T in _n)typeof _n[T]=="object"&&hs(_n[T]);return Object.assign(n,_n),n},We=ks({});We.newInstance=()=>ks({});var ib=We;We.HighlightJS=We,We.default=We;var G=Zu(ib);function Ts(n){return n?typeof n=="string"?n:n.source:null}function yn(n){return H("(?=",n,")")}function H(...n){return n.map(t=>Ts(t)).join("")}function se(...n){return"("+(function(a){const c=a[a.length-1];return typeof c=="object"&&c.constructor===Object?(a.splice(a.length-1,1),c):{}}(n).capture?"":"?:")+n.map(a=>Ts(a)).join("|")+")"}const Nr=n=>H(/\b/,n,/\w$/.test(n)?/\b/:/\B/),sb=["Protocol","Type"].map(Nr),Ja=["init","self"].map(Nr),ob=["Any","Self"],Mt=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Wa=["false","nil","true"],cb=["assignment","associativity","higherThan","left","lowerThan","none","right"],lb=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],Za=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],Os=se(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),ws=se(Os,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Dt=H(Os,ws,"*"),Ns=se(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Ln=se(Ns,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),be=H(Ns,Ln,"*"),$t=H(/[A-Z]/,Ln,"*"),ub=["attached","autoclosure",H(/convention\(/,se("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",H(/objc\(/,be,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],db=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];var ze="[0-9](_*[0-9])*",vn=`\\.(${ze})`,Sn="[0-9a-fA-F](_*[0-9a-fA-F])*",pb={className:"number",variants:[{begin:`(\\b(${ze})((${vn})|\\.)?|(${vn}))[eE][+-]?(${ze})[fFdD]?\\b`},{begin:`\\b(${ze})((${vn})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${vn})[fFdD]?\\b`},{begin:`\\b(${ze})[fFdD]\\b`},{begin:`\\b0[xX]((${Sn})\\.?|(${Sn})?\\.(${Sn}))[pP][+-]?(${ze})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${Sn})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};const Va="[A-Za-z$_][0-9A-Za-z$_]*",hb=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],mb=["true","false","null","undefined","NaN","Infinity"],Cs=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],As=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],xs=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],fb=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],gb=[].concat(xs,Cs,As);var Ke="[0-9](_*[0-9])*",En=`\\.(${Ke})`,kn="[0-9a-fA-F](_*[0-9a-fA-F])*",Xa={className:"number",variants:[{begin:`(\\b(${Ke})((${En})|\\.)?|(${En}))[eE][+-]?(${Ke})[fFdD]?\\b`},{begin:`\\b(${Ke})((${En})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${En})[fFdD]?\\b`},{begin:`\\b(${Ke})[fFdD]\\b`},{begin:`\\b0[xX]((${kn})\\.?|(${kn})?\\.(${kn}))[pP][+-]?(${Ke})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${kn})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function qs(n,t,a){return a===-1?"":n.replace(t,c=>qs(n,t,a-1))}G.registerLanguage("swift",function(n){const t={match:/\s+/,relevance:0},a=n.COMMENT("/\\*","\\*/",{contains:["self"]}),c=[n.C_LINE_COMMENT_MODE,a],i={match:[/\./,se(...sb,...Ja)],className:{2:"keyword"}},s={match:H(/\./,se(...Mt)),relevance:0},l=Mt.filter(U=>typeof U=="string").concat(["_|0"]),d={variants:[{className:"keyword",match:se(...Mt.filter(U=>typeof U!="string").concat(ob).map(Nr),...Ja)}]},u={$pattern:se(/\b\w+/,/#\w+/),keyword:l.concat(lb),literal:Wa},e=[i,s,d],h=[{match:H(/\./,se(...Za)),relevance:0},{className:"built_in",match:H(/\b/,se(...Za),/(?=\()/)}],m={match:/->/,relevance:0},g=[m,{className:"operator",relevance:0,variants:[{match:Dt},{match:`\\.(\\.|${ws})+`}]}],f="([0-9]_*)+",p="([0-9a-fA-F]_*)+",o={className:"number",relevance:0,variants:[{match:`\\b(${f})(\\.(${f}))?([eE][+-]?(${f}))?\\b`},{match:`\\b0x(${p})(\\.(${p}))?([pP][+-]?(${f}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},r=(U="")=>({className:"subst",variants:[{match:H(/\\/,U,/[0\\tnr"']/)},{match:H(/\\/,U,/u\{[0-9a-fA-F]{1,8}\}/)}]}),k=(U="")=>({className:"subst",match:H(/\\/,U,/[\t ]*(?:[\r\n]|\r\n)/)}),O=(U="")=>({className:"subst",label:"interpol",begin:H(/\\/,U,/\(/),end:/\)/}),T=(U="")=>({begin:H(U,/"""/),end:H(/"""/,U),contains:[r(U),k(U),O(U)]}),w=(U="")=>({begin:H(U,/"/),end:H(/"/,U),contains:[r(U),O(U)]}),A={className:"string",variants:[T(),T("#"),T("##"),T("###"),w(),w("#"),w("##"),w("###")]},j=[n.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[n.BACKSLASH_ESCAPE]}],M={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:j},R=U=>{const V=H(U,/\//),I=H(/\//,U);return{begin:V,end:I,contains:[...j,{scope:"comment",begin:`#(?!.*${I})`,end:/$/}]}},B={scope:"regexp",variants:[R("###"),R("##"),R("#"),M]},Y={match:H(/`/,be,/`/)},z=[Y,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${Ln}+`}],ee=[{match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:db,contains:[...g,o,A]}]}},{scope:"keyword",match:H(/@/,se(...ub))},{scope:"meta",match:H(/@/,be)}],ce={match:yn(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:H(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Ln,"+")},{className:"type",match:$t,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:H(/\s+&\s+/,yn($t)),relevance:0}]},fe={begin:/</,end:/>/,keywords:u,contains:[...c,...e,...ee,m,ce]};ce.contains.push(fe);const Ee={begin:/\(/,end:/\)/,relevance:0,keywords:u,contains:["self",{match:H(be,/\s*:/),keywords:"_|0",relevance:0},...c,B,...e,...h,...g,o,A,...z,...ee,ce]},le={begin:/</,end:/>/,keywords:"repeat each",contains:[...c,ce]},ge={begin:/\(/,end:/\)/,keywords:u,contains:[{begin:se(yn(H(be,/\s*:/)),yn(H(be,/\s+/,be,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:be}]},...c,...e,...g,o,A,...ee,ce,Ee],endsParent:!0,illegal:/["']/},te={match:[/(func|macro)/,/\s+/,se(Y.match,be,Dt)],className:{1:"keyword",3:"title.function"},contains:[le,ge,t],illegal:[/\[/,/%/]},Ie={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[le,ge,t],illegal:/\[|%/},ke={match:[/operator/,/\s+/,Dt],className:{1:"keyword",3:"title"}},q={begin:[/precedencegroup/,/\s+/,$t],className:{1:"keyword",3:"title"},contains:[ce],keywords:[...cb,...Wa],end:/}/};for(const U of A.variants){const V=U.contains.find(Be=>Be.label==="interpol");V.keywords=u;const I=[...e,...h,...g,o,A,...z];V.contains=[...I,{begin:/\(/,end:/\)/,contains:["self",...I]}]}return{name:"Swift",keywords:u,contains:[...c,te,Ie,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:u,contains:[n.inherit(n.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...e]},ke,q,{beginKeywords:"import",end:/$/,contains:[...c],relevance:0},B,...e,...h,...g,o,A,...z,...ee,ce,Ee]}}),G.registerLanguage("scala",function(n){const t=n.regex,a={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:/\$\{/,end:/\}/}]},c={className:"string",variants:[{begin:'"""',end:'"""'},{begin:'"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,a]},{className:"string",begin:'[a-z]+"""',end:'"""',contains:[a],relevance:10}]},i={className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},s={className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,relevance:0},l={className:"class",beginKeywords:"class object trait type",end:/[:={\[\n;]/,excludeEnd:!0,contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},s]},d={className:"function",beginKeywords:"def",end:t.lookahead(/[:={\[(\n;]/),contains:[s]};return{name:"Scala",keywords:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"},contains:[{begin:["//>",/\s+/,/using/,/\s+/,/\S+/],beginScope:{1:"comment",3:"keyword",5:"type"},end:/$/,contains:[{className:"string",begin:/\S+/}]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,c,i,d,l,n.C_NUMBER_MODE,{begin:[/^\s*/,"extension",/\s+(?=[[(])/],beginScope:{2:"keyword"}},{begin:[/^\s*/,/end/,/\s+/,/(extension\b)?/],beginScope:{2:"keyword",4:"keyword"}},{match:/\.inline\b/},{begin:/\binline(?=\s)/,keywords:"inline"},{begin:[/\(\s*/,/using/,/\s+(?!\))/],beginScope:{2:"keyword"}},{className:"meta",begin:"@[A-Za-z]+"}]}}),G.registerLanguage("rust",function(n){const t=n.regex,a={className:"title.function.invoke",relevance:0,begin:t.concat(/\b/,/(?!let|for|while|if|else|match\b)/,n.IDENT_RE,t.lookahead(/\s*\(/))},c="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],s=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:n.IDENT_RE+"!?",type:s,keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.COMMENT("/\\*","\\*/",{contains:["self"]}),n.inherit(n.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+c},{begin:"\\b0o([0-7_]+)"+c},{begin:"\\b0x([A-Fa-f0-9_]+)"+c},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+c}],relevance:0},{begin:[/fn/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,n.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:n.IDENT_RE+"::",keywords:{keyword:"Self",built_in:i,type:s}},{className:"punctuation",begin:"->"},a]}}),G.registerLanguage("ruby",function(n){const t=n.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",c=t.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=t.concat(c,/(::\w+)*/),s={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},l={className:"doctag",begin:"@[A-Za-z]+"},d={begin:"#<",end:">"},u=[n.COMMENT("#","$",{contains:[l]}),n.COMMENT("^=begin","^=end",{contains:[l],relevance:10}),n.COMMENT("^__END__",n.MATCH_NOTHING_RE)],e={className:"subst",begin:/#\{/,end:/\}/,keywords:s},h={className:"string",contains:[n.BACKSLASH_ESCAPE,e],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:t.concat(/<<[-~]?'?/,t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[n.BACKSLASH_ESCAPE,e]})]}]},m="[0-9](_?[0-9])*",g={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},f={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:s}]},p=[h,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{match:[/\b(class|module)\s+/,i]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:s},{match:[/(include|extend)\s+/,i],scope:{2:"title.class"},keywords:s},{relevance:0,match:[i,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:c,scope:"title.class"},{match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[f]},{begin:n.IDENT_RE+"::"},{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[h,{begin:a}],relevance:0},g,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:s},{begin:"("+n.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[n.BACKSLASH_ESCAPE,e],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(d,u),relevance:0}].concat(d,u);e.contains=p,f.contains=p;const o=[{begin:/^\s*=>/,starts:{end:"$",contains:p}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:s,contains:p}}];return u.unshift(d),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:s,illegal:/\/\*/,contains:[n.SHEBANG({binary:"ruby"})].concat(o).concat(u).concat(p)}}),G.registerLanguage("python",function(n){const t=n.regex,a=/[\p{XID_Start}_]\p{XID_Continue}*/u,c=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],i={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:c,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:i,illegal:/#/},d={begin:/\{\{/,relevance:0},u={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s,d,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s,d,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,d,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,d,l]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},e="[0-9](_?[0-9])*",h=`(\\b(${e}))?\\.(${e})|\\b(${e})\\.`,m=`\\b|${c.join("|")}`,g={className:"number",relevance:0,variants:[{begin:`(\\b(${e})|(${h}))[eE][+-]?(${e})[jJ]?(?=${m})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${m})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${m})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`},{begin:`\\b(${e})[jJ](?=${m})`}]},f={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:i,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},p={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:["self",s,g,u,n.HASH_COMMENT_MODE]}]};return l.contains=[u,g,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:i,illegal:/(<\/|\?)|=>/,contains:[s,g,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},u,f,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[p]},{variants:[{match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,p,u]}]}}),G.registerLanguage("powershell",function(n){const t={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},a={begin:"`[\\s\\S]",relevance:0},c={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},i={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[a,c,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},s={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},l=n.inherit(n.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),d={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},u={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[n.TITLE_MODE]},e={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[c]}]},h={begin:/using\s/,end:/$/,returnBegin:!0,contains:[i,s,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},m={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},g={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(t.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},n.inherit(n.TITLE_MODE,{endsParent:!0})]},f=[g,l,a,n.NUMBER_MODE,i,s,d,c,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/@\B/,relevance:0}],p={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",f,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return g.contains.unshift(p),{name:"PowerShell",aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:t,contains:f.concat(u,e,h,m,p)}}),G.registerLanguage("php",function(n){const t=n.regex,a=/(?![A-Za-z0-9])(?![$])/,c=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,a),i=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,a),s={scope:"variable",match:"\\$+"+c},l={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},d=n.inherit(n.APOS_STRING_MODE,{illegal:null}),u=`[ 	
]`,e={scope:"string",variants:[n.inherit(n.QUOTE_STRING_MODE,{illegal:null,contains:n.QUOTE_STRING_MODE.contains.concat(l)}),d,{begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:n.QUOTE_STRING_MODE.contains.concat(l),"on:begin":(M,R)=>{R.data._beginMatch=M[1]||M[2]},"on:end":(M,R)=>{R.data._beginMatch!==M[1]&&R.ignoreMatch()}},n.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/})]},h={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},m=["false","null","true"],g=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],f=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],p={keyword:g,literal:(M=>{const R=[];return M.forEach(B=>{R.push(B),B.toLowerCase()===B?R.push(B.toUpperCase()):R.push(B.toLowerCase())}),R})(m),built_in:f},o=M=>M.map(R=>R.replace(/\|\d+$/,"")),r={variants:[{match:[/new/,t.concat(u,"+"),t.concat("(?!",o(f).join("\\b|"),"\\b)"),i],scope:{1:"keyword",4:"title.class"}}]},k=t.concat(c,"\\b(?!\\()"),O={variants:[{match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),k],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[i,t.concat(/::/,t.lookahead(/(?!class\b)/)),k],scope:{1:"title.class",3:"variable.constant"}},{match:[i,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[i,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},T={scope:"attr",match:t.concat(c,t.lookahead(":"),t.lookahead(/(?!::)/))},w={relevance:0,begin:/\(/,end:/\)/,keywords:p,contains:[T,s,O,n.C_BLOCK_COMMENT_MODE,e,h,r]},A={relevance:0,match:[/\b/,t.concat("(?!fn\\b|function\\b|",o(g).join("\\b|"),"|",o(f).join("\\b|"),"\\b)"),c,t.concat(u,"*"),t.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[w]};w.contains.push(A);const j=[T,O,n.C_BLOCK_COMMENT_MODE,e,h,r];return{case_insensitive:!1,keywords:p,contains:[{begin:t.concat(/#\[\s*/,i),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:m,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:m,keyword:["new","array"]},contains:["self",...j]},...j,{scope:"meta",match:i}]},n.HASH_COMMENT_MODE,n.COMMENT("//","$"),n.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:n.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},s,A,O,{match:[/const/,/\s/,c],scope:{1:"keyword",3:"variable.constant"}},r,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},n.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:p,contains:["self",s,O,n.C_BLOCK_COMMENT_MODE,e,h]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[n.inherit(n.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},n.UNDERSCORE_TITLE_MODE]},e,h]}}),G.registerLanguage("perl",function(n){const t=n.regex,a=/[dualxmsipngr]{0,12}/,c={$pattern:/[\w.]+/,keyword:["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"].join(" ")},i={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:c},s={begin:/->\{/,end:/\}/},l={variants:[{begin:/\$\d/},{begin:t.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},d=[n.BACKSLASH_ESCAPE,i,l],u=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],e=(g,f,p="\\1")=>{const o=p==="\\1"?p:t.concat(p,f);return t.concat(t.concat("(?:",g,")"),f,/(?:\\.|[^\\\/])*?/,o,/(?:\\.|[^\\\/])*?/,p,a)},h=(g,f,p)=>t.concat(t.concat("(?:",g,")"),f,/(?:\\.|[^\\\/])*?/,p,a),m=[l,n.HASH_COMMENT_MODE,n.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),s,{className:"string",contains:d,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+n.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[n.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:e("s|tr|y",t.either(...u,{capture:!0}))},{begin:e("s|tr|y","\\(","\\)")},{begin:e("s|tr|y","\\[","\\]")},{begin:e("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:h("(?:m|qr)?",/\//,/\//)},{begin:h("m|qr",t.either(...u,{capture:!0}),/\1/)},{begin:h("m|qr",/\(/,/\)/)},{begin:h("m|qr",/\[/,/\]/)},{begin:h("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[n.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return i.contains=m,s.contains=m,{name:"Perl",aliases:["pl","pm"],keywords:c,contains:m}}),G.registerLanguage("ocaml",function(n){return{name:"OCaml",aliases:["ml"],keywords:{$pattern:"[a-z_]\\w*!?",keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},illegal:/\/\/|>>/,contains:[{className:"literal",begin:"\\[(\\|\\|)?\\]|\\(\\)",relevance:0},n.COMMENT("\\(\\*","\\*\\)",{contains:["self"]}),{className:"symbol",begin:"'[A-Za-z_](?!')[\\w']*"},{className:"type",begin:"`[A-Z][\\w']*"},{className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},{begin:"[a-z_]\\w*'[\\w']*",relevance:0},n.inherit(n.APOS_STRING_MODE,{className:"string",relevance:0}),n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),{className:"number",begin:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",relevance:0},{begin:/->/}]}}),G.registerLanguage("objectivec",function(n){const t=/[a-zA-Z@][a-zA-Z0-9_]*/,a={$pattern:t,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{"variable.language":["this","super"],$pattern:t,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},illegal:"</",contains:[{className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,n.C_NUMBER_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+a.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:a,contains:[n.UNDERSCORE_TITLE_MODE]},{begin:"\\."+n.UNDERSCORE_IDENT_RE,relevance:0}]}}),G.registerLanguage("lua",function(n){const t="\\[=*\\[",a="\\]=*\\]",c={begin:t,end:a,contains:["self"]},i=[n.COMMENT("--(?!"+t+")","$"),n.COMMENT("--"+t,a,{contains:[c],relevance:10})];return{name:"Lua",keywords:{$pattern:n.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[n.inherit(n.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:i}].concat(i)},n.C_NUMBER_MODE,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{className:"string",begin:t,end:a,contains:[c],relevance:5}])}}),G.registerLanguage("kotlin",function(n){const t={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"@"},c={className:"subst",begin:/\$\{/,end:/\}/,contains:[n.C_NUMBER_MODE]},i={className:"variable",begin:"\\$"+n.UNDERSCORE_IDENT_RE},s={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[i,c]},{begin:"'",end:"'",illegal:/\n/,contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[n.BACKSLASH_ESCAPE,i,c]}]};c.contains.push(s);const l={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+n.UNDERSCORE_IDENT_RE+")?"},d={className:"meta",begin:"@"+n.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[n.inherit(s,{className:"string"}),"self"]}]},u=pb,e=n.COMMENT("/\\*","\\*/",{contains:[n.C_BLOCK_COMMENT_MODE]}),h={variants:[{className:"type",begin:n.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},m=h;return m.variants[1].contains=[h],h.variants[1].contains=[m],{name:"Kotlin",aliases:["kt","kts"],keywords:t,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),n.C_LINE_COMMENT_MODE,e,{className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},a,l,d,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:t,relevance:5,contains:[{begin:n.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[n.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[h,n.C_LINE_COMMENT_MODE,e],relevance:0},n.C_LINE_COMMENT_MODE,e,l,d,s,n.C_NUMBER_MODE]},e]},{begin:[/class|interface|trait/,/\s+/,n.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},n.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},l,d]},s,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},u]}}),G.registerLanguage("javascript",function(n){const t=n.regex,a=Va,c="<>",i="</>",s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(fe,Ee)=>{const le=fe[0].length+fe.index,ge=fe.input[le];if(ge==="<"||ge===",")return void Ee.ignoreMatch();let te;ge===">"&&(((ke,{after:q})=>{const U="</"+ke[0].slice(1);return ke.input.indexOf(U,q)!==-1})(fe,{after:le})||Ee.ignoreMatch());const Ie=fe.input.substring(le);((te=Ie.match(/^\s*=/))||(te=Ie.match(/^\s+extends\s+/))&&te.index===0)&&Ee.ignoreMatch()}},l={$pattern:Va,keyword:hb,literal:mb,built_in:gb,"variable.language":fb},d="[0-9](_?[0-9])*",u=`\\.(${d})`,e="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${e})((${u})|\\.)?|(${u}))[eE][+-]?(${d})\\b`},{begin:`\\b(${e})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"css"}},p={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"graphql"}},o={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,m]},r={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},k=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,g,f,p,o,{match:/\$\d+/},h];m.contains=k.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(k)});const O=[].concat(r,m.contains),T=O.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(O)}]),w={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:T},A={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},j={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Cs,...As]}},M={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[w],illegal:/%/},R={match:t.concat(/\b/,(B=[...xs,"super","import"],t.concat("(?!",B.join("|"),")")),a,t.lookahead(/\(/)),className:"title.function",relevance:0};var B;const Y={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},z={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},w]},ee="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",ce={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ee)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[w]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:T,CLASS_REFERENCE:j},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,g,f,p,o,r,{match:/\$\d+/},h,j,{className:"attr",begin:a+t.lookahead(":"),relevance:0},ce,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[r,n.REGEXP_MODE,{className:"function",begin:ee,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:T}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:c,end:i},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},M,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[w,n.inherit(n.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Y,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[w]},R,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},A,z,{match:/\$[(.]/}]}}),G.registerLanguage("java",function(n){const t=n.regex,a="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",c=a+qs("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),i={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},s={className:"meta",begin:"@"+a,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},l={className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[n.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:i,illegal:/<\/|#/,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[n.BACKSLASH_ESCAPE]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[t.concat(/(?!else)/,a),/\s+/,a,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},contains:[l,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+c+"\\s+)",n.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:i,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[s,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,Xa,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},Xa,s]}}),G.registerLanguage("http",function(n){const t="HTTP/([32]|1\\.[01])",a={className:"attribute",begin:n.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},c=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+t+" \\d{3})",end:/$/,contains:[{className:"meta",begin:t},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:c}},{begin:"(?=^[A-Z]+ (.*?) "+t+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:t},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:c}},n.inherit(a,{relevance:0})]}}),G.registerLanguage("go",function(n){const t={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:t,illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"string",variants:[n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:n.C_NUMBER_RE+"[i]",relevance:1},n.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[n.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,illegal:/["']/}]}]}}),G.registerLanguage("dart",function(n){const t={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"},c={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:'"""',end:'"""',contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:"'",end:"'",illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:'"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,t,a]}]};a.contains=[n.C_NUMBER_MODE,c];const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],s=i.map(l=>`${l}?`);return{name:"Dart",keywords:{keyword:["abstract","as","assert","async","await","base","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","interface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","sealed","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","when","while","with","yield"],built_in:i.concat(s).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},contains:[c,n.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),n.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",end:"$",relevance:0}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},n.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}),G.registerLanguage("csharp",function(n){const t={keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],literal:["default","false","null","true"]},a=n.inherit(n.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),c={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},i={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},s=n.inherit(i,{illegal:/\n/}),l={className:"subst",begin:/\{/,end:/\}/,keywords:t},d=n.inherit(l,{illegal:/\n/}),u={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},n.BACKSLASH_ESCAPE,d]},e={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},l]},h=n.inherit(e,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},d]});l.contains=[e,u,i,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,c,n.C_BLOCK_COMMENT_MODE],d.contains=[h,u,s,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,c,n.inherit(n.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const m={variants:[e,u,i,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},g={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]},f=n.IDENT_RE+"(<"+n.IDENT_RE+"(\\s*,\\s*"+n.IDENT_RE+")*>)?(\\[\\])?",p={begin:"@"+n.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:t,illegal:/::/,contains:[n.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},m,c,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},a,g,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,g,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+f+"\\s+)+"+n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:t,contains:[{beginKeywords:["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"].join(" "),relevance:0},{begin:n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[n.TITLE_MODE,g],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,relevance:0,contains:[m,c,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},p]}}),G.registerLanguage("cpp",function(n){const t=n.regex,a=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),c="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="(?!struct)("+c+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",l={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},d={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(d,{className:"string"}),{className:"string",begin:/<.*?>/},a,n.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},m=t.optional(i)+n.IDENT_RE+"\\s*\\(",g={type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]},f={className:"function.dispatch",relevance:0,keywords:{_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]},begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},p=[f,e,l,a,n.C_BLOCK_COMMENT_MODE,u,d],o={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:g,contains:p.concat([{begin:/\(/,end:/\)/,keywords:g,contains:p.concat(["self"]),relevance:0}]),relevance:0},r={className:"function",begin:"("+s+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:g,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:c,keywords:g,relevance:0},{begin:m,returnBegin:!0,contains:[h],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[d,u]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[a,n.C_BLOCK_COMMENT_MODE,d,u,l,{begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:["self",a,n.C_BLOCK_COMMENT_MODE,d,u,l]}]},l,a,n.C_BLOCK_COMMENT_MODE,e]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:g,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(o,r,f,p,[e,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:g,contains:["self",l]},{begin:n.IDENT_RE+"::",keywords:g},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}),G.registerLanguage("clojure",function(n){const t="a-zA-Z_\\-!.?+*=<>&'",a="[#]?["+t+"]["+t+"0-9/;:$#]*",c="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",i={$pattern:a,built_in:c+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},s={begin:a,relevance:0},l={scope:"number",relevance:0,variants:[{match:/[-+]?0[xX][0-9a-fA-F]+N?/},{match:/[-+]?0[0-7]+N?/},{match:/[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/},{match:/[-+]?[0-9]+\/[0-9]+N?/},{match:/[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/},{match:/[-+]?([1-9][0-9]*|0)N?/}]},d={scope:"character",variants:[{match:/\\o[0-3]?[0-7]{1,2}/},{match:/\\u[0-9a-fA-F]{4}/},{match:/\\(newline|space|tab|formfeed|backspace|return)/},{match:/\\\S/,relevance:0}]},u={scope:"regex",begin:/#"/,end:/"/,contains:[n.BACKSLASH_ESCAPE]},e=n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),h={scope:"punctuation",match:/,/,relevance:0},m=n.COMMENT(";","$",{relevance:0}),g={className:"literal",begin:/\b(true|false|nil)\b/},f={begin:"\\[|(#::?"+a+")?\\{",end:"[\\]\\}]",relevance:0},p={className:"symbol",begin:"[:]{1,2}"+a},o={begin:"\\(",end:"\\)"},r={endsWithParent:!0,relevance:0},k={keywords:i,className:"name",begin:a,relevance:0,starts:r},O=[h,o,d,u,e,m,p,f,l,g,s],T={beginKeywords:c,keywords:{$pattern:a,keyword:c},end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:a,relevance:0,excludeEnd:!0,endsParent:!0}].concat(O)};return o.contains=[T,k,r],r.contains=O,f.contains=O,{name:"Clojure",aliases:["clj","edn"],illegal:/\S/,contains:[h,o,d,u,e,m,p,f,l,g]}}),G.registerLanguage("c",function(n){const t=n.regex,a=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),c="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="("+c+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",l={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},d={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(d,{className:"string"}),{className:"string",begin:/<.*?>/},a,n.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},m=t.optional(i)+n.IDENT_RE+"\\s*\\(",g={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},f=[e,l,a,n.C_BLOCK_COMMENT_MODE,u,d],p={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:g,contains:f.concat([{begin:/\(/,end:/\)/,keywords:g,contains:f.concat(["self"]),relevance:0}]),relevance:0},o={begin:"("+s+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:g,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:c,keywords:g,relevance:0},{begin:m,returnBegin:!0,contains:[n.inherit(h,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[a,n.C_BLOCK_COMMENT_MODE,d,u,l,{begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:["self",a,n.C_BLOCK_COMMENT_MODE,d,u,l]}]},l,a,n.C_BLOCK_COMMENT_MODE,e]};return{name:"C",aliases:["h"],keywords:g,disableAutodetect:!0,illegal:"</",contains:[].concat(p,o,f,[e,{begin:n.IDENT_RE+"::",keywords:g},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},n.TITLE_MODE]}]),exports:{preprocessor:e,strings:d,keywords:g}}}),G.registerLanguage("brainfuck",function(n){const t={className:"literal",begin:/[+-]+/,relevance:0};return{name:"Brainfuck",aliases:["bf"],contains:[n.COMMENT(/[^\[\]\.,\+\-<> \r\n]/,/[\[\]\.,\+\-<> \r\n]/,{contains:[{match:/[ ]+[^\[\]\.,\+\-<> \r\n]/,relevance:0}],returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",begin:"[\\.,]",relevance:0},{begin:/(?=\+\+|--)/,contains:[t]},t]}}),G.registerLanguage("bash",function(n){const t=n.regex,a={},c={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[a]}]};Object.assign(a,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},c]});const i={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},l={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,a,i]};i.contains.push(l);const d={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,a]},u=n.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),e={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[u,n.SHEBANG(),e,d,n.HASH_COMMENT_MODE,s,{match:/(\/[a-z._-]+)+/},l,{match:/\\"/},{className:"string",begin:/'/,end:/'/},{match:/\\'/},a]}}),G.registerLanguage("r",function(n){const t=n.regex,a=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,c=t.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),i=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,s=t.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:a,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[n.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:a},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),n.HASH_COMMENT_MODE,{scope:"string",contains:[n.BACKSLASH_ESCAPE],variants:[n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[i,c]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,c]},{scope:{1:"punctuation",2:"number"},match:[s,c]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,c]}]},{scope:{3:"operator"},match:[a,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:i},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:s},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}});var _b=function(){function n(){(function(c,i){if(!(c instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),qe(this,"_baseUrl",""),qe(this,"_url",""),qe(this,"_method","GET"),qe(this,"_params",[]),qe(this,"_mimeType","application/x-www-form-urlencoded"),qe(this,"_lang","javascript"),qe(this,"_library","xmlhttprequest")}var t,a;return t=n,(a=[{key:"library",value:function(c){return c=c.toLowerCase(),this._library=c,this}},{key:"lang",value:function(c){var i;if(c=c.toLowerCase(),!this.config()[c])throw new Error("bad lang: "+c);return this._lang=c,this._library=(i=this.config()[c][0])!==null&&i!==void 0?i:null,this}},{key:"mimeType",value:function(c){return this._mimeType=c,this}},{key:"params",value:function(c){return this._params=c,this}},{key:"method",value:function(c){return this._method=c,this}},{key:"url",value:function(c){return c=c.startsWith("/")?c.substring(1):c,this._url=c,this}},{key:"baseUrl",value:function(c){return c.endsWith("/")||(c+="/"),this._baseUrl=c,this}},{key:"convertParams",value:function(){var c,i=this,s=this._baseUrl;s.endsWith("/")||(s+="/");var l=this._url;l.startsWith("/")&&(l=l.substring(1)),this._params.filter((function(m){return _(this,i),m.in==="path"}).bind(this)).forEach((function(m){_(this,i),l=l.replace("{".concat(m.name,"}"),m.value)}).bind(this));var d=this._params.filter((function(m){return _(this,i),m.in==="query"}).bind(this)),u=(function(m,g){var f=this;return _(this,i),Array.isArray(g)?g.map((function(p){return _(this,f),u(m,p)}).bind(this)).join("&"):C(g)==="object"?Object.entries(g).map((function(p){_(this,f);var o=Ye(p,2),r=o[0],k=o[1];return u("".concat(m,"[").concat(r,"]"),k)}).bind(this)).join("&"):"".concat(m,"=").concat(g)}).bind(this),e=JSON.parse(JSON.stringify(d)).map((function(m){return _(this,i),u(m.name,m.value)}).bind(this)).join("&");e!==""&&(l+="?"+e),l=s+l;var h=(c=s.match(/^https?:\/\/([^\/]+)/i)[1])!==null&&c!==void 0?c:"";return{method:this._method,mimeType:this._mimeType,url:l,host:h,headers:this._params.filter((function(m){return _(this,i),m.in==="headers"}).bind(this)),postData:this._params.filter((function(m){return _(this,i),m.in==="postData"}).bind(this)),cookies:this._params.filter((function(m){return _(this,i),m.in==="cookie"}).bind(this))}}},{key:"cleanup",value:function(c){return c.replace(/&amp;/gim,"&").replace(/&#39;/gim,"'").replace(/&#34;/gim,'"').replace(/\n\n+/gim,`
`).replace(/^\n/gim,"")}},{key:"generate",value:function(){var c,i=(c=Ua[this._lang+"/"+this._library])!==null&&c!==void 0?c:null;if(!i)throw new Error("bad library");var s=this.convertParams();return this.cleanup(i(s))}},{key:"generateHighlight",value:function(){return G.highlight(this.generate(),{language:this._lang,ignoreIllegals:!0}).value}},{key:"makeHighlightCode",value:function(c){return G.highlight(c,{language:this._lang,ignoreIllegals:!0}).value}},{key:"config",value:function(){var c=this;return Object.keys(Ua).reduce((function(i,s){_(this,c);var l=Ye(s.split("/"),2),d=l[0],u=l[1];return i[d]||(i[d]=[]),i[d].push(u),i}).bind(this),{})}}])&&Wu(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),n}();const de=new _b,bb=de.config(),yb={name:"CodeSimples",components:{CustomDropdownWithSubMenu:ui},props:{baseUrl:{type:String,required:!1,default:""},url:{type:String,required:!0},method:{type:String,required:!1,default:"GET"},params:{type:Array,required:!1,default:()=>[]},mimeType:{type:String,required:!1,default:"application/x-www-form-urlencoded"}},data(){return{snippetIndex:"javascript",snippetLibraryIndex:"xmlhttprequest",code:"",html:"",showPopup:!1,onPopupIndex:null,vals:[]}},computed:{config(){return bb}},watch:{},mounted(){this.genCode()},methods:{copyToClipboard(n){this.$openapidoc.copyToClipboard(this.code,n)},onLangClick(n,t=null){this.snippetIndex=n,this.snippetLibraryIndex=t,this.genCode()},getAbsoluteUrl(){const n=this.baseUrl;if(!n)return window.location.origin;if(/^https?:\/\//i.test(n))return n;const t=window.location.origin;return new URL(n,t).href},genCode(){const n=this.method.toUpperCase();de.baseUrl(this.getAbsoluteUrl()),de.url(this.url),de.method(n),de.params(JSON.parse(JSON.stringify(this.params))),de.mimeType(this.mimeType),de.lang(this.snippetIndex),de.library(this.snippetLibraryIndex),this.code=de.generate(),this.html=de.generateHighlight()}}},vb={class:"oapi-code-simple"},Sb={class:"oapi-code-panel"},Eb={class:"oapi-code-panel__body"},kb=["innerHTML"];function Tb(n,t,a,c,i,s){const l=ui;return b(),y("div",vb,[F(l,{items:s.config,onSelect:s.onLangClick},null,8,["items","onSelect"]),v("div",Sb,[v("div",Eb,[v("button",{class:"oapi-code-panel__btn",onClick:t[0]||(t[0]=Is((...d)=>s.copyToClipboard&&s.copyToClipboard(...d),["stop","prevent"]))}," Copy "),v("pre",{class:ye(["language line-numbers",`language-${i.snippetIndex}`])},[v("code",{class:"language",innerHTML:i.html},null,8,kb)],2)])])])}const Rs=J(yb,[["render",Tb]]),Ob=Bs({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:t,attrs:a}){const c=Ps(!1);return Hs(()=>{c.value=!0}),i=>{var u;if(c.value)return(u=t.default)==null?void 0:u.call(t);const s=t.fallback||t.placeholder;if(s)return s();const l=i.fallback||i.placeholder||"",d=i.fallbackTag||i.placeholderTag||"span";return y(d,a,l)}}});const wb={components:{OpenApiExampleObject:Ze},props:{examples:{type:Object,required:!0},currentLocale:{type:String,required:!0}}},Nb={class:"openapi-examples"},Cb={id:"examples"};function Ab(n,t,a,c,i,s){const l=Ze;return b(),y("div",Nb,[v("h2",Cb,S(n.$openapidoc.getLocaleText("openapidoc.examples")),1),(b(!0),y(L,null,D(a.examples,(d,u)=>(b(),y("div",{key:u,class:"oapi-schema-block"},[F(l,{"current-locale":a.currentLocale,example:d,name:u,"name-tag":"h3"},null,8,["current-locale","example","name"])]))),128))])}const Ls=J(wb,[["render",Ab],["__scopeId","data-v-f147433f"]]);const xb={name:"OpenApiCallbacks",components:{OpenApiResponses:jn,OpenApiRequestBody:$n,OpenApiParameters:Dn},props:{callbacks:{type:Object,default:()=>({})},currentLocale:{type:String,default:""},components:{type:Object,default:()=>({})}}},qb={key:0,class:"oapi-callbacks"},Rb={id:"callbacks"},Lb={class:"oapi-callbacks__list"},Mb=["id"],Db=["innerHTML"],$b={class:"oapi-callback-op__name"},jb=["innerHTML"];function Ub(n,t,a,c,i,s){const l=Dn,d=$n,u=jn;return a.callbacks?(b(),y("div",qb,[v("h2",Rb,S(n.$openapidoc.getLocaleText("openapidoc.callbacks")),1),v("div",Lb,[(b(!0),y(L,null,D(a.callbacks,(e,h)=>(b(),y("div",{key:h},[(b(!0),y(L,null,D(e,(m,g)=>(b(),y("div",{key:g,class:"oapi-callback-method"},[v("h3",{id:g+"-"+h,class:"oapi-callback-method__name"},[v("code",null,S(g),1),$(" - "+S(h),1)],8,Mb),m.description?(b(),y("div",{key:0,class:"oapi-callback-method__description",innerHTML:m.description},null,8,Db)):E("",!0),(b(!0),y(L,null,D(m,(f,p)=>(b(),y("div",{key:p,class:"oapi-callback-op"},[v("div",$b,[v("span",{class:ye(["oapi-method-tag",`oapi-method-tag--${p}`])},S(p),3)]),f.description?(b(),y("div",{key:0,class:"oapi-callback-op__description",innerHTML:f.description},null,8,jb)):E("",!0),f.parameters?(b(),Z(l,{key:1,parameters:f.parameters,"current-locale":a.currentLocale,components:a.components},null,8,["parameters","current-locale","components"])):E("",!0),f.requestBody?(b(),Z(d,{key:2,"is-cb":"","h-prefix":`${h}-${p}-${g}`,"request-body":f.requestBody,"current-locale":a.currentLocale,components:a.components},null,8,["h-prefix","request-body","current-locale","components"])):E("",!0),f.responses?(b(),Z(u,{key:3,"is-cb":"","h-prefix":`${h}-${p}-${g}`,responses:f.responses,"current-locale":a.currentLocale,components:a.components},null,8,["h-prefix","responses","current-locale","components"])):E("",!0)]))),128))]))),128))]))),128))])])):E("",!0)}const Ms=J(xb,[["render",Ub]]);const Ib={name:"OpenApiRoute",components:{OpenApiCallbacks:Ms,OpenApiResponses:jn,OpenApiRequestBody:$n,OpenApiSecurity:ci,OpenApiParameters:Dn,OpenApiExamples:Ls,CodeSimples:Rs,OpenApiServer:si,OpenApiRouteHeader:ii},props:{route:{type:[Object,Array],required:!0},subParams:{required:!1},path_doc:{type:String,required:!0},file:{type:String,required:!0},currentLocale:{type:String,required:!0},url:{type:String,required:!1,default:""},server:{type:String,required:!1,default:""},method:{type:String,required:!1,default:"GET"},components:{type:Object,default:()=>({})}},data(){return{lang:"javascript",mimeType:"application/x-www-form-urlencoded",params:[]}},computed:{resolvedSchema(){return this.$openapidocRef.repReplace(this.route)},routeInfo(){return this.$openapidoc.getRouteInfo(this.file,this.url,this.method)}},mounted(){this.genParamsToSimple()},methods:{genParamsToSimple(){if(this.params=[],this.resolvedSchema.requestBody&&Object.keys(this.resolvedSchema.requestBody).length){const t=Object.keys(this.resolvedSchema.requestBody)[0],a=this.resolvedSchema.requestBody[t];if(a&&Object.keys(a).length){this.mimeType=Object.keys(a)[0];const c=a[this.mimeType];if(c.schema){const i=c.schema.properties;for(const s in i){const l=i[s]||{};let d="";if(l.example&&(d=l.example??""),d===""&&l.type&&(d=this.convertStringFormatToMd(l.type,s)),l.type==="array")l.items.type?l.items.type==="array"||l.items.type==="object"?d=[this.handleNestedArrayOrObject(l,s)]:d=[this.convertStringFormatToMd(l.items.type,s)]:l.items.enum?d=[l.items.enum[0]]:(l.items.properties||l.items.additionalProperties)&&(d=[this.handleNestedArrayOrObject(l.items,s)]),this.params.push({in:"postData",name:s,value:JSON.parse(JSON.stringify(d))});else if(l.type==="object"){if(l.additionalProperties&&l.additionalProperties.type)d={[s]:this.convertStringFormatToMd(l.additionalProperties.type,s)};else if(l.properties){d={};for(const u in l.properties){const e=l.properties[u]||{};e.type?d[u]=this.convertStringFormatToMd(e.type,u):(e.properties||e.additionalProperties)&&(d[u]=this.handleNestedArrayOrObject(e,s))}}this.params.push({in:"postData",name:s,value:JSON.parse(JSON.stringify(d))})}else this.params.push({in:"postData",name:s,value:d.toString()})}}}}for(const t in this.resolvedSchema.parameters){const a=this.resolvedSchema.parameters[t],c=a.name??"",i=a.in??"";let s="";a.schema?s=a.schema.default??"":s=a.default??"",s===""&&a.type&&(s=this.convertStringFormatToMd(a.type,c)),s===""&&a.schema&&a.schema.type&&(s=this.convertStringFormatToMd(a.schema.type,c)),s===""&&a.enum&&(s=a.enum[0]??""),this.params.push({in:i,name:c,value:s.toString()})}const n=this.$openapidoc.getParams();for(const t in n){const a=n[t];a.value===""&&a.type&&(a.value=this.convertStringFormatToMd(a.type,a.name)),this.params.push({in:a.pos,name:a.name,value:JSON.parse(JSON.stringify(a.value))})}},handleNestedArrayOrObject(n,t){if(n.type==="array"){if(n.items.type)return n.items.type==="array"?[this.handleNestedArrayOrObject(n.items,t)]:n.items.type==="object"?[this.handleNestedObject(n.items)]:[this.convertStringFormatToMd(n.items.type)];if(n.items.enum)return[n.items.enum[0]];if(n.items.properties||n.items.additionalProperties)return[this.handleNestedObject(n.items)]}else if(n.type==="object")return this.handleNestedObject(n);return""},handleNestedObject(n){if(n.additionalProperties&&n.additionalProperties.type)return{[propertyName]:this.convertStringFormatToMd(n.additionalProperties.type,propertyName)};if(n.properties){const t={};for(const a in n.properties){const c=n.properties[a]||{};c.type?t[a]=this.convertStringFormatToMd(c.type,a):(c.properties||c.additionalProperties)&&(t[a]=this.handleNestedArrayOrObject(c,a))}return t}return""},convertStringFormatToMd(n,t){switch(n){case"date":return"YYYY-MM-DD";case"date-time":return"YYYY-MM-DDTHH:MM:SSZ";case"email":return"example@example.com";case"hostname":return"example.com";case"ipv4":return"192.0.2.0";case"ipv6":return"2001:0db8:85a3:0000:0000:8a2e:0370:7334";case"uri":return"https://example.com";case"integer":return"1";case"number":return"1";case"string":return`{${t}}`;default:return n}}}},Bb={class:"oapi-route"},Pb={key:0,class:"oapi-route__servers"},Hb={id:"servers"},Fb={key:1},zb={id:"info"},Kb=["innerHTML"],Gb={id:"code_simple",class:"text-lg font-bold mb-2"};function Jb(n,t,a,c,i,s){const l=ii,d=si,u=ci,e=Dn,h=$n,m=jn,g=Rs,f=Ob,p=Ls,o=Ms;return b(),y("div",Bb,[F(l,{path:a.url,method:a.method,server:a.server,tags:s.resolvedSchema.tags,summary:n.$openapidocRef.tr(a.route,"summary",a.currentLocale),description:n.$openapidocRef.tr(a.route,"description",a.currentLocale),deprecated:a.route.deprecated,"current-locale":a.currentLocale},null,8,["path","method","server","tags","summary","description","deprecated","current-locale"]),s.resolvedSchema.servers?(b(),y("div",Pb,[v("h2",Hb,S(n.$openapidoc.getLocaleText("openapidoc.servers")),1),(b(!0),y(L,null,D(s.resolvedSchema.servers,r=>(b(),Z(d,{key:r.url,server:r,"current-locale":a.currentLocale},null,8,["server","current-locale"]))),128))])):E("",!0),s.routeInfo?(b(),y("div",Fb,[v("h2",zb,S(n.$openapidoc.getLocaleText("openapidoc.info")),1),v("div",{class:"oapi-doc-info",innerHTML:s.routeInfo},null,8,Kb)])):E("",!0),s.resolvedSchema.security?(b(),Z(u,{key:2,security:s.resolvedSchema.security,path_doc:a.path_doc,file:a.file,"current-locale":a.currentLocale},null,8,["security","path_doc","file","current-locale"])):E("",!0),s.resolvedSchema.parameters?(b(),Z(e,{key:3,parameters:s.resolvedSchema.parameters,"current-locale":a.currentLocale,components:a.components},null,8,["parameters","current-locale","components"])):E("",!0),a.subParams?(b(),Z(e,{key:4,parameters:a.subParams,"current-locale":a.currentLocale,components:a.components,title:"Global params"},null,8,["parameters","current-locale","components"])):E("",!0),s.resolvedSchema.requestBody?(b(),Z(h,{key:5,"request-body":s.resolvedSchema.requestBody,"current-locale":a.currentLocale,components:a.components},null,8,["request-body","current-locale","components"])):E("",!0),s.resolvedSchema.responses?(b(),Z(m,{key:6,responses:s.resolvedSchema.responses,"current-locale":a.currentLocale,components:a.components},null,8,["responses","current-locale","components"])):E("",!0),a.url?(b(),Z(f,{key:7},{default:oe(()=>[v("h2",Gb,S(n.$openapidoc.getLocaleText("openapidoc.code_simple"))+": ",1),F(g,{url:a.url,"base-url":a.server,method:a.method,"mime-type":i.mimeType,params:i.params},null,8,["url","base-url","method","mime-type","params"])]),_:1})):E("",!0),s.resolvedSchema.examples?(b(),Z(p,{key:8,examples:s.resolvedSchema.examples,"current-locale":a.currentLocale},null,8,["examples","current-locale"])):E("",!0),s.resolvedSchema.callbacks?(b(),Z(o,{key:9,callbacks:s.resolvedSchema.callbacks,server:a.server,"current-locale":a.currentLocale,components:a.components,simples:n.simples,params:i.params,file:a.file,path_doc:a.path_doc},null,8,["callbacks","server","current-locale","components","simples","params","file","path_doc"])):E("",!0)])}const yy=J(Ib,[["render",Jb]]);const Wb={name:"NotFound"},Zb={class:"oapi-not-found"},Vb=v("h1",{class:""},"404",-1),Xb=v("p",{class:"oapi-not-found__msg"},"Not found",-1),Qb=[Vb,Xb];function Yb(n,t,a,c,i,s){return b(),y("div",Zb,Qb)}const vy=J(Wb,[["render",Yb]]);const ey={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search(n){this.searchInPaths(n)}},mounted(){var n;this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch),this.search=(((n=this.$route.query)==null?void 0:n.query)??"").toString(),this.highlightText()},beforeUnmount(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{highlightText(n=null){if(!this.search||this.search==="")return;if(!n){const c=document.querySelectorAll(".highlighted");for(let i=0;i<c.length;i++)c[i].classList.remove("highlighted");n=document.querySelector(".content-container")}if(!n)return;const t=this.search.replace("#",""),a=new RegExp(t,"gi");if(n.nodeType===Node.TEXT_NODE){if(n.textContent.match(a)){document.createElement("span").classList.add("highlighted");const s=n.textContent.replace(a,d=>`<span class="highlighted">${d}</span>`),l=document.createRange().createContextualFragment(s);n.parentNode.replaceChild(l,n)}}else if(n.nodeType===Node.ELEMENT_NODE){const c=n.childNodes;for(let i=0;i<c.length;i++)this.highlightText(c[i])}},toggleSearch(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?(document.body.style.overflow="hidden",setTimeout(()=>{this.$refs.input.focus()},100)):(document.body.style.overflow="auto",this.highlightText())},searchInPaths(n){if(n=n.toLowerCase(),this.list=[],n==="")return;const t=this.$openapidocRef.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),a=this.$openapidocRef.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),c=a.indexOf(n);if(c!==-1){const i=Math.max(c-50,0),s=Math.min(c+n.length+50,a.length);let l="..."+a.substring(i,s)+"...";l=l.replace(n,"<b>"+n+"</b>"),this.list.push({path:"info",title:t,description:l,route:{name:`openapi-${this.path}${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:"info"},query:{query:n}}})}for(const i in this.doc.paths){if(i==="parameters")continue;const s=this.doc.paths[i];for(const l in s){const d=s[l];let u=i;u.startsWith("/")&&(u=u.substring(1)),u.endsWith("/")&&(u=u.substring(-1)),u=u.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_");const e=this.$openapidocRef.tr(d,"summary",this.currentLocale).toLowerCase(),h=this.$openapidocRef.tr(d,"description",this.currentLocale).toLowerCase();let m=null,g=e.indexOf(n);if(g!==-1){const f=h.substring(0,100)+"...";m={path:i,title:e.replace(n,"<b>"+n+"</b>"),description:f+"...",route:{name:`openapi-${this.path}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:u,mathod:l},query:{query:n}}}}if(g=h.indexOf(n),g!==-1){const f=Math.max(g-50,0),p=Math.min(g+n.length+50,h.length);let o="..."+h.substring(f,p)+"...";o=o.replace(n,"<b>"+n+"</b>"),m?m.description=o:m={path:i,title:e,description:o,route:{name:`openapi-${this.path}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:u,mathod:l},query:{query:n}}}}m&&this.list.push(m)}}}}},ny={class:"oapi-search"},ty={key:0,class:"oapi-search-overlay"},ry={class:"oapi-search__wrapper"},ay={class:"oapi-search-box"},iy={class:"oapi-search-box__inner"},sy={class:"oapi-search-item"},oy=["innerHTML"],cy=["textContent"],ly=["innerHTML"],uy=v("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),dy=[uy];function py(n,t,a,c,i,s){const l=Ya;return b(),y("div",ny,[i.isSearchOpen?(b(),y("div",ty,[v("div",ry,[v("div",ay,[v("div",iy,[Fs(v("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>i.search=d),ref:"input",type:"text",class:"oapi-search-box__input",placeholder:"Search..."},null,512),[[zs,i.search]]),(b(!0),y(L,null,D(i.list,(d,u)=>(b(),y("div",{key:u,class:"oapi-search-box__list",onClick:t[1]||(t[1]=(...e)=>s.toggleSearch&&s.toggleSearch(...e))},[F(l,{to:d.route,"active-class":""},{default:oe(()=>[v("div",sy,[v("h5",{class:"oapi-search-item__title",innerHTML:d.title},null,8,oy),v("p",{class:"oapi-search-item__path",textContent:S(d.path)},null,8,cy),v("p",{class:"oapi-search-item__text",innerHTML:d.description},null,8,ly)])]),_:2},1032,["to"])]))),128))])])]),v("button",{class:"oapi-search__close",onClick:t[2]||(t[2]=(...d)=>s.toggleSearch&&s.toggleSearch(...d))},dy)])):E("",!0)])}const Sy=J(ey,[["render",py]]);export{gy as _,_y as a,by as b,yy as c,Ob as d,Sy as e,vy as f};
