import{_ as J,o as y,c as b,a as v,t as E,U as k,F as L,l as M,d as D,s as Z,w as ce,V as Pn,W as vi,X as ve,b as F,Y as fo,Z as go,p as _o,e as yo,$ as bo,a0 as vo,a1 as So}from"./entry.91c37bae.js";import{_ as Si}from"./nuxt-link.32369f9e.js";import{_ as Ei,a as ki}from"./OpenApiDropdown.5b5f745a.js";import{_ as Eo}from"./client-only.2869900b.js";const ko={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{getUrl(n){let t=n.url;const a=n.variables;for(const o in a){const s=a[o].default;if(s){const l=`{${o}}`;t=t.replace(l,s)}}return t}}},Oo={class:"oapi-info-head"},wo={key:0,class:"oapi-info-head__version"},To=["innerHTML"],Ao={key:0},No={id:"servers"},Co=["href"],xo={key:0},Ro={key:1,id:"external-documentation"},qo={key:2},Lo=["href"];function $o(n,t,a,o,i,s){return y(),b("div",null,[v("div",Oo,[v("h1",null,E(n.$openapidocRef.tr(a.info,"title",a.currentLocale)),1),a.info.version?(y(),b("span",wo,E(a.info.version),1)):k("",!0)]),v("div",{class:"oapi-info-block",innerHTML:n.$openapidocRef.tr(a.info,"description",a.currentLocale)},null,8,To),a.servers?(y(),b("div",Ao,[v("h2",No,E(n.$openapidoc.getLocaleText("openapidoc.servers")),1),v("ul",null,[(y(!0),b(L,null,M(a.servers,l=>(y(),b("li",{key:l.url},[v("a",{href:s.getUrl(l)},E(s.getUrl(l)),9,Co),D(" - "),l.description?(y(),b("span",xo,E(l.description),1)):k("",!0)]))),128))])])):k("",!0),a.info.externalDocs?(y(),b("h2",Ro,E(n.$openapidoc.getLocaleText("openapidoc.external_documentation")),1)):k("",!0),a.info.externalDocs?(y(),b("ul",qo,[v("li",null,[v("a",{href:a.info.externalDocs.url},E(n.$openapidocRef.tr(a.info.externalDocs,"description",a.currentLocale)),9,Lo)])])):k("",!0)])}const bv=J(ko,[["render",$o]]);const Mo={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},computed:{formattedIn(){if(!this.securityScheme.in)return null;const n=this.securityScheme.in.toString();return n.charAt(0).toUpperCase()+n.slice(1)}}},Do={class:"oapi-sec-scheme"},jo={class:"oapi-sec-scheme__type"},Io={key:0,class:"oapi-sec-scheme__param"},Po={key:1,class:"oapi-sec-scheme__param"},Uo={key:2,class:"oapi-sec-scheme__param"},Bo={key:3,class:"oapi-sec-scheme__param"},Ho={key:4,class:"oapi-sec-scheme__flows"},Fo={key:0,class:"oapi-sec-scheme__param"},zo={key:1,class:"oapi-sec-scheme__param"},Ko={key:2,class:"oapi-sec-scheme__param"},Go={key:3,class:"oapi-sec-scheme-scopes"},Jo={class:"oapi-sec-scheme-scopes__title"},Wo={class:"oapi-sec-scheme-scopes__list"},Zo={key:0,class:"oapi-sec-scheme-scope__descr"};function Vo(n,t,a,o,i,s){return y(),b("div",Do,[v("div",jo,[v("span",null,E(a.securityScheme.type),1)]),a.securityScheme.type==="http"&&a.securityScheme.scheme?(y(),b("div",Io,[D(E(n.$openapidoc.getLocaleText("openapidoc.scheme"))+": ",1),v("code",null,E(a.securityScheme.scheme),1)])):k("",!0),a.securityScheme.type==="http"&&a.securityScheme.scheme==="bearer"&&a.securityScheme.bearerFormat?(y(),b("div",Po,[D(E(n.$openapidoc.getLocaleText("openapidoc.bearer_format"))+": ",1),v("code",null,E(a.securityScheme.bearerFormat),1)])):k("",!0),a.securityScheme.type==="apiKey"&&a.securityScheme.in?(y(),b("div",Uo,[D(E(n.$openapidoc.getLocaleText("openapidoc.in"))+": ",1),v("code",null,E(a.securityScheme.in),1)])):k("",!0),a.securityScheme.type==="apiKey"&&s.formattedIn&&a.securityScheme.name?(y(),b("div",Bo,[D(E(s.formattedIn)+" name: ",1),v("code",null,E(a.securityScheme.name),1)])):k("",!0),a.securityScheme.type==="oauth2"&&a.securityScheme.flows?(y(),b("div",Ho,[(y(!0),b(L,null,M(a.securityScheme.flows,(l,u)=>(y(),b("div",{key:u,class:"oapi-sec-scheme__flow"},[v("h4",null,E(u),1),l.authorizationUrl?(y(),b("div",Fo,[D(E(n.$openapidoc.getLocaleText("openapidoc.authorization_url"))+": ",1),v("code",null,E(l.authorizationUrl),1)])):k("",!0),l.tokenUrl?(y(),b("div",zo,[D(E(n.$openapidoc.getLocaleText("openapidoc.token_url"))+": ",1),v("code",null,E(l.tokenUrl),1)])):k("",!0),l.refreshUrl?(y(),b("div",Ko,[D(E(n.$openapidoc.getLocaleText("openapidoc.refresh_url"))+": ",1),v("code",null,E(l.refreshUrl),1)])):k("",!0),l.scopes&&Object.keys(l.scopes).length?(y(),b("div",Go,[v("span",Jo,E(n.$openapidoc.getLocaleText("openapidoc.scopes"))+":",1),v("ul",Wo,[(y(!0),b(L,null,M(l.scopes,(d,e)=>(y(),b("li",{key:e,class:"oapi-sec-scheme-scope"},[v("code",null,E(e),1),d?(y(),b("div",Zo,E(d),1)):k("",!0)]))),128))])])):k("",!0)]))),128))])):k("",!0)])}const Oi=J(Mo,[["render",Vo]]);const Xo={name:"OpenApiExampleObject",props:{lite:Boolean,name:{type:String,default:""},nameTag:{type:String,default:"h3"},example:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}},computed:{valueFormatted(){return this.example.value?JSON.stringify(this.example.value,null,2):null}}},Qo={class:"oapi-example-obj"},Yo=["innerHTML"],ec=["innerHTML"],nc={key:3,class:"oapi-example-obj__value"},tc=["innerHTML"];function rc(n,t,a,o,i,s){return y(),b("div",Qo,[a.name?(y(),Z(Pn(a.nameTag),{key:0,class:"oapi-example-obj__name"},{default:ce(()=>[D(E(a.name),1)]),_:1})):k("",!0),a.example.summary?(y(),b("div",{key:1,class:"oapi-example-obj__summary",innerHTML:n.$openapidocRef.tr(a.example,"summary",a.currentLocale)},null,8,Yo)):k("",!0),a.example.description?(y(),b("div",{key:2,class:"oapi-example-obj__description",innerHTML:n.$openapidocRef.tr(a.example,"description",a.currentLocale)},null,8,ec)):k("",!0),s.valueFormatted?(y(),b("div",nc,[v("pre",{innerHTML:s.valueFormatted},null,8,tc)])):k("",!0)])}const Ye=J(Xo,[["render",rc]]);const ac={name:"OpenApiSchemaSubObject",props:{title:{type:String,default:""},currentLocale:{type:String,required:!0}},data(){return{}},methods:{}},ic={class:"oapi-schema-sub-obj"},sc={class:"oapi-schema-sub-obj__head"},oc={class:"oapi-schema-sub-obj__title"},cc={class:"oapi-schema-sub-obj__content"};function lc(n,t,a,o,i,s){return y(),b("div",ic,[v("div",sc,[v("div",oc,E(a.title),1)]),v("div",null,[v("ul",cc,[vi(n.$slots,"default")])])])}const wi=J(ac,[["render",lc]]);const uc={name:"OpenApiSchemaProperty",components:{OpenApiSchemaSubObject:wi,OpenApiExpandIcon:Ei},props:{name:{type:String,default:""},required:{type:Boolean},schema:{type:Object,required:!0},noLines:{type:Boolean},hideTitleDescription:{type:Boolean},open:{type:Boolean},currentLocale:{type:String,required:!0}},data(){return{isOpen:!1}},computed:{resolvedSchema(){return this.schema},isPlainArray(){if(!this.resolvedSchema)return!1;const n=["string","integer","number","boolean"];return this.resolvedSchema.type==="array"&&this.resolvedSchema.items&&n.includes(this.resolvedSchema.items.type)},isObject(){return this.resolvedSchema?this.resolvedSchema.type==="object":!1},isArray(){return this.resolvedSchema?this.resolvedSchema.type==="array":!1},isOneOf(){return!!(this.resolvedSchema&&this.resolvedSchema.oneOf)},isAnyOf(){return!!(this.resolvedSchema&&this.resolvedSchema.anyOf)},hasProperties(){return!!Object.keys(this.resolvedSchema.properties||{}).length},exampleString(){return this.resolvedSchema.example?typeof this.resolvedSchema.example=="object"?JSON.stringify(this.resolvedSchema.example,null,2):this.resolvedSchema.example.toString():""},computedOneAnyOf(){return this.resolvedSchema?this.resolvedSchema.oneOf||this.resolvedSchema.anyOf:[]},computedType(){let n=this.resolvedSchema.type||"any";return this.isPlainArray?(n=`array<${this.getType(this.resolvedSchema.items)}>`,this.resolvedSchema.nullable&&(n=`${n} or null`),n):this.getType(this.resolvedSchema)},flags(){const n=[];return this.resolvedSchema.deprecated&&n.push("Deprecated"),this.resolvedSchema.readOnly&&n.push("ReadOnly"),this.resolvedSchema.writeOnly&&n.push("WriteOnly"),this.resolvedSchema.uniqueItems&&n.push("UniqueItems"),n},requiredProps(){return this.isObject&&this.resolvedSchema.required&&Array.isArray(this.resolvedSchema.required)?this.resolvedSchema.required:[]},classes(){return{"oapi-prop--is-object":this.isObject,"oapi-prop--no-lines":this.noLines,"oapi-prop--no-name":!this.name,"oapi-prop--deprecated":!!this.resolvedSchema.deprecated}}},created(){this.isOneOf&&(this.isOpen=!0),this.open&&(this.isOpen=!0)},methods:{getType(n){let t=n.type||"any";if(!n)return t;if(n.oneOf||n.anyOf){const a=n.oneOf||n.anyOf||[];return a.length>0&&a[0].type&&a.every(o=>o.type&&o.type===a[0].type)?a[0].type:"mixed"}else n.format&&(t=`${t}:${n.format}`);return n.nullable&&(t=`${t} or null`),t},toggle(){this.isOpen=!this.isOpen}}},dc={class:"oapi-prop-body"},pc={class:"oapi-prop-head"},hc={key:1,class:"oapi-prop__name"},mc={class:"oapi-prop__type"},fc={key:2,class:"oapi-prop__required"},gc={class:"oapi-prop__content"},_c={key:0,class:"oapi-prop__title"},yc=["innerHTML"],bc={key:2,class:"oapi-prop__ext-docs"},vc=["innerHTML"],Sc=["href"],Ec={key:3,class:"oapi-prop-add-info"},kc={key:0},Oc=["innerHTML"],wc={key:4,class:"oapi-prop-add-info"},Tc={key:5,class:"oapi-prop-add-info"},Ac={key:6,class:"oapi-prop-add-info"},Nc={key:7,class:"oapi-prop-add-info"},Cc={key:8,class:"oapi-prop-add-info"},xc={key:9,class:"oapi-prop-add-info"},Rc={key:10,class:"oapi-prop-add-info"},qc={key:11,class:"oapi-prop-add-info"},Lc={key:12,class:"oapi-prop-add-info"},$c={key:13,class:"oapi-prop-add-info"},Mc={key:14,class:"oapi-prop-add-info"},Dc=["innerHTML"],jc={key:15,class:"oapi-prop-add-info oapi-prop-add-info--enums"},Ic={key:16,class:"oapi-prop-flags"},Pc={key:1,class:"oapi-prop__props-title"},Uc={key:0,class:"oapi-prop-sub"},Bc={class:"oapi-object__list"},Hc={key:2,class:"oapi-prop__props-title"},Fc={key:0},zc={key:1},Kc={key:3,class:"oapi-prop-items-of"};function Gc(n,t,a,o,i,s){const l=Ei,u=hr,d=wi;return s.resolvedSchema?(y(),b("li",{key:0,class:ve(["oapi-prop",s.classes])},[v("div",dc,[v("div",pc,[s.isObject&&s.hasProperties||s.isOneOf?(y(),b("button",{key:0,class:ve(["oapi-prop-head__expand",{"oapi-prop-head__expand--is-open":i.isOpen}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},[F(l)],2)):k("",!0),a.name?(y(),b("div",hc,[v("code",null,E(a.name),1)])):k("",!0),v("div",mc,E(s.computedType),1),a.required?(y(),b("div",fc,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):k("",!0)]),v("div",gc,[s.resolvedSchema.title&&!a.hideTitleDescription?(y(),b("div",_c,E(n.$openapidocRef.tr(s.resolvedSchema,"title",a.currentLocale)),1)):k("",!0),s.resolvedSchema.description&&!a.hideTitleDescription?(y(),b("div",{key:1,class:"oapi-prop__description",innerHTML:n.$openapidocRef.tr(s.resolvedSchema,"description",a.currentLocale)},null,8,yc)):k("",!0),s.resolvedSchema.externalDocs?(y(),b("div",bc,[s.resolvedSchema.externalDocs.description?(y(),b("div",{key:0,class:"oapi-prop__ext-docs-md",innerHTML:n.$openapidocRef.tr(s.resolvedSchema.externalDocs,"description",a.currentLocale)},null,8,vc)):k("",!0),v("a",{href:s.resolvedSchema.externalDocs.url,target:"_blank"},E(n.$openapidoc.getLocaleText("openapidoc.external_docs")),9,Sc)])):k("",!0),s.resolvedSchema.example?(y(),b("div",Ec,[D(E(n.$openapidoc.getLocaleText("openapidoc.example"))+": ",1),s.exampleString.includes(`
`)?(y(),b("br",kc)):k("",!0),v("code",{innerHTML:s.exampleString},null,8,Oc)])):k("",!0),s.resolvedSchema.multipleOf!==void 0?(y(),b("div",wc,[D(E(n.$openapidoc.getLocaleText("openapidoc.multiple_of"))+": ",1),v("code",null,E(s.resolvedSchema.multipleOf),1)])):k("",!0),s.resolvedSchema.maximum!==void 0?(y(),b("div",Tc,[v("code",null,E(s.resolvedSchema.exclusiveMaximum?"<":"<=")+" "+E(s.resolvedSchema.maximum),1)])):k("",!0),s.resolvedSchema.minimum!==void 0?(y(),b("div",Ac,[v("code",null,E(s.resolvedSchema.exclusiveMinimum?">":">=")+" "+E(s.resolvedSchema.minimum),1)])):k("",!0),s.resolvedSchema.maxLength!==void 0?(y(),b("div",Nc,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.maxLength),1)])):k("",!0),s.resolvedSchema.minLength!==void 0?(y(),b("div",Cc,[D(E(n.$openapidoc.getLocaleText("openapidoc.minimum"))+": ",1),v("code",null,E(s.resolvedSchema.minLength),1)])):k("",!0),s.resolvedSchema.maxItems!==void 0?(y(),b("div",xc,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.maxItems),1)])):k("",!0),s.resolvedSchema.minItems!==void 0?(y(),b("div",Rc,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.minItems),1)])):k("",!0),s.resolvedSchema.maxProperties!==void 0?(y(),b("div",qc,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum_props"))+": ",1),v("code",null,E(s.resolvedSchema.maxProperties),1)])):k("",!0),s.resolvedSchema.minProperties!==void 0?(y(),b("div",Lc,[D(E(n.$openapidoc.getLocaleText("openapidoc.minimum_props"))+": ",1),v("code",null,E(s.resolvedSchema.minProperties),1)])):k("",!0),s.resolvedSchema.additionalProperties!==void 0&&typeof s.resolvedSchema.additionalProperties=="boolean"?(y(),b("div",$c,[D(E(n.$openapidoc.getLocaleText("openapidoc.additional_properties"))+": ",1),v("code",null,E(!!s.resolvedSchema.additionalProperties),1)])):k("",!0),s.resolvedSchema.pattern?(y(),b("div",Mc,[D(E(n.$openapidoc.getLocaleText("openapidoc.pattern"))+": ",1),v("code",{innerHTML:s.resolvedSchema.pattern},null,8,Dc)])):k("",!0),s.resolvedSchema.enum?(y(),b("div",jc,[D(E(n.$openapidoc.getLocaleText("openapidoc.enum"))+": ",1),(y(!0),b(L,null,M(s.resolvedSchema.enum,e=>(y(),b("span",{key:e},[v("code",null,E(e),1),D(E(" "))]))),128))])):k("",!0),s.flags.length?(y(),b("div",Ic,[(y(!0),b(L,null,M(s.flags,e=>(y(),b("span",{key:e,class:"oapi-prop-flags__flag"},E(e),1))),128))])):k("",!0)]),s.resolvedSchema.not&&(!s.isObject||i.isOpen)?(y(),Z(d,{key:0,"current-locale":a.currentLocale,title:`${n.$openapidoc.getLocaleText("openapidoc.not")}:`},{default:ce(()=>[F(u,{"current-locale":a.currentLocale,schema:s.resolvedSchema.not},null,8,["current-locale","schema"])]),_:1},8,["current-locale","title"])):k("",!0),s.isObject&&i.isOpen&&s.hasProperties?(y(),b("div",Pc,E(n.$openapidoc.getLocaleText("openapidoc.properties"))+": ",1)):k("",!0)]),s.isObject&&i.isOpen&&s.hasProperties?(y(),b("div",Uc,[v("ul",Bc,[(y(!0),b(L,null,M(s.resolvedSchema.properties,(e,m)=>(y(),Z(u,{key:m,schema:e,name:m,"current-locale":a.currentLocale,required:s.requiredProps.includes(m)},null,8,["schema","name","current-locale","required"]))),128))])])):k("",!0),s.resolvedSchema.additionalProperties&&typeof s.resolvedSchema.additionalProperties=="object"&&s.isObject?(y(),Z(d,{key:1,title:`${n.$openapidoc.getLocaleText("openapidoc.additional_properties")}:`,"current-locale":a.currentLocale},{default:ce(()=>[F(u,{schema:s.resolvedSchema.additionalProperties,"current-locale":a.currentLocale},null,8,["schema","current-locale"])]),_:1},8,["title","current-locale"])):k("",!0),(s.isOneOf||s.isAnyOf)&&i.isOpen?(y(),b("div",Hc,[s.isOneOf?(y(),b("span",Fc,E(n.$openapidoc.getLocaleText("openapidoc.one_of"))+":",1)):k("",!0),!s.isOneOf&&s.isAnyOf?(y(),b("span",zc,E(n.$openapidoc.getLocaleText("openapidoc.any_of"))+":",1)):k("",!0)])):k("",!0),(s.isOneOf||s.isAnyOf)&&i.isOpen?(y(),b("ul",Kc,[(y(!0),b(L,null,M(s.computedOneAnyOf,(e,m)=>(y(),Z(u,{key:m,schema:e,"current-locale":a.currentLocale},null,8,["schema","current-locale"]))),128))])):k("",!0),s.isArray?(y(),Z(d,{key:4,title:"Items:","current-locale":a.currentLocale},{default:ce(()=>[F(u,{schema:s.resolvedSchema.items,"current-locale":a.currentLocale},null,8,["schema","current-locale"])]),_:1},8,["current-locale"])):k("",!0)],2)):k("",!0)}const hr=J(uc,[["render",Gc]]);/*!
 * allof-merge v0.5.3
 * Copyright (C) 2012-2023 Damir Yusipov
 * Date: Tue, 07 Nov 2023 20:32:30 GMT
 */function ln(n,t){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(a[o[i]]=n[o[i]])}return a}const Jc=(n={},t,a,o={})=>{const i=`/${t}`;let s=n;if(i in s)s=s[i];else{if(!("/*"in s))return"/**"in s?(s=s["/**"],{...typeof s=="function"?s(a,o):s,"/**":s}):void 0;s=s["/*"]}return typeof s=="function"?s(a,o):s},Ti=n=>{const t={},a=n.reduce((o,i)=>(Object.keys(i).forEach(s=>o.add(s)),o),new Set);for(const o of a.keys()){const i=n.filter(s=>o in s);if(i.length!==1){if(o.charAt(0)!=="/")throw new Error(`Cannot merge rules. Duplicate key: ${o}. Rules should not have same Rule key`);t[o]=(s,l)=>{const u=i.map(d=>typeof d[o]=="function"?d[o](s,l):d[o]);return Ti(u)}}else t[o]=i[0][o]}return t},Ne=n=>typeof n=="object"&&n!==null,pt=n=>Array.isArray(n),Wc=(n,t=[],a={})=>{t=Array.isArray(t)?t:[t];const o={},i={state:{...a.state,root:o,node:o},...a.rules?{rules:a.rules}:{}};return((s,l,u={})=>{var d;l=pt(l)?l:[l];const e=pt(u.rules)?Ti(u.rules):u.rules,m=[{data:s,state:u.state,path:[],keys:[],keyIndex:-1,rules:e}];for(;m.length>0;){const h=m[m.length-1];if(h.keyIndex>=h.keys.length){for(;(d=h.hooks)!=null&&d.length;)h.hooks.pop()();m.pop();continue}const g=h.keys[h.keyIndex++],[f,p,c]=m.length>1?[h.data[g],[...h.path,g],Jc(h.rules,g,[...h.path,g],u.state)]:[h.data,h.path,e];let r={value:f,state:h.state};const S=[];for(const w of l)if(w&&r){if(r=w(r.value,{path:p,key:g,state:r.state||h.state,rules:c}),r!=null&&r.terminate)return;r!=null&&r.exitHook&&S.push(r.exitHook)}if(r&&Ne(r.value)){const w=pt(r.value)?[...r.value.keys()]:Object.keys(r.value);m.push({hooks:S,state:r.state,data:r.value,path:p,keys:w,keyIndex:0,rules:c})}else for(;S.length;)S.pop()()}})(n,[...t,(s,{path:l,key:u,state:d})=>(u=l.length?u:"#",d.node[u]=Ne(s)?Array.isArray(s)?[]:{}:s,{value:s,state:{...d,node:d.node[u]}})],i),o["#"]};let Ai=class extends Map{add(t,a){const o=this.get(t);return o?o.push(a):this.set(t,[a]),this}};const Zc=(n,t)=>{const a={};for(const o of t)o in n&&(a[o]=n[o],delete n[o]);return a},Ni=(n,t)=>{if(Array.isArray(n)&&Array.isArray(t))return[...n,...t];if(Ne(n)&&Ne(t)){const a=Object.assign({},n);for(const o of Object.keys(t))a[o]=Ni(a[o],t[o]);return a}return t},Qt=n=>n&&n.$ref&&typeof n.$ref=="string",Gr=n=>n&&n.anyOf&&Array.isArray(n.anyOf),Jr=n=>n&&n.oneOf&&Array.isArray(n.oneOf),Ci=(n,t="")=>{const[a=t,o]=n.split("#"),i=o&&o!=="/"?o:"";return{filePath:a,pointer:i,normalized:Vc(a,i)}},Vc=(n,t)=>n?`${n}${t?"#"+t:""}`:t?`#${t}`:"#",xi=(n,t,a=[t])=>{if(!Ne(n))return;let o=n;const i=Xc(t);for(const s of i)if(Array.isArray(o)&&o.length>+s)o=o[+s];else if(Ne(o)&&s in o)o=o[s];else{if(!Qt(o))return;{const l=Ci(o.$ref);o=l.filePath||a.includes(l.pointer)?void 0:xi(n,l.pointer,[...a,l.pointer])}}return o},Un={slash:/\//g,tilde:/~/g,escapedSlash:/~1/g,escapedTilde:/~0/g},Xc=n=>n.split("/").map(t=>decodeURIComponent(t.replace(Un.escapedSlash,"/").replace(Un.escapedTilde,"~"))).slice(1),mr=n=>n.length?"/"+n.map(t=>encodeURIComponent(String(t).replace(Un.tilde,"~0").replace(Un.slash,"~1"))).join("/"):"",Qc=(n,t)=>JSON.stringify(n)==JSON.stringify(t),Yc=n=>{let t=1;for(;n*t%1!=0;)t*=10;return t};function el(n){const t=n.reduce((a,o)=>Math.max(a,Yc(o)),0);return n.reduce((a,o)=>Math.round(a*t*o*t/Ri(a*t,o*t))/t)}function Ri(n,t){return t===0?n:Ri(t,n%t)}const qi=n=>{if(n.length===0)return[[]];const t=n[0],a=n.slice(1),o=qi(a),i=[];for(const s of t)for(const l of o)i.push([s,...l]);return i},En=(n,t,a)=>{const o=a.sibling||[],i=n,s=t,l=i[s],u=ln(i,[typeof s=="symbol"?s:s+""]),d=Zc(u,o);return Object.keys(u).length?Object.assign({[t]:l.map(e=>({allOf:[u,e]}))},d):n},nl=n=>{const t=[];for(const a of n){if(!("properties"in a))continue;const o=new Set(Object.keys(a.properties)),i=new Ai;for(const l of o.values())for(const u of n)if(!(u==a||u.properties&&l in u.properties))if("patternProperties"in u&&u.patternProperties)for(const d of Object.keys(u.patternProperties))new RegExp(d).test(l)||o.delete(l);else"additionalProperties"in u&&(u.additionalProperties===!1?o.delete(l):typeof u.additionalProperties=="object"&&i.add(l,u.additionalProperties));if(!o.size)continue;const s={};for(const l of o.values())i.has(l)?s[l]={allOf:[a.properties[l],...i.get(l)]}:s[l]=a.properties[l];t.push(s)}return t},tl=n=>{const t=[];for(const a of n){if(!("patternProperties"in a))continue;const o=new Set(Object.keys(a.patternProperties));for(const s of n)if(s!=a&&"additionalProperties"in s&&!s.additionalProperties)for(const l of o.values())s.patternProperties&&l in s.patternProperties||o.delete(l);if(!o.size)continue;const i={};for(const s of o.values())i[s]=a.patternProperties[s];t.push(i)}return t},Wr=n=>{const t={},a=fr(n);for(const[o,i]of Object.entries(a))i.includes(!1)?t[o]=!1:t[o]=i.length>1?{allOf:i}:i[0];return t},rl=(n,t)=>!!n.reduce((a,o)=>a&&o===!0,!0)||fn(n,t),al=()=>"Could not merge values, they are probably incompatible",il=n=>`Merge rule not found for key: ${n}`,fr=n=>{const t={};for(const a of n)for(const o of Object.keys(a))Array.isArray(t[o])?t[o].push(a[o]):t[o]=[a[o]];return t},fn=(n,t)=>{if(n.includes(!1))return!1;const a={},o=fr(n);"properties"in o&&(o.properties=nl(n)),"patternProperties"in o&&(o.patternProperties=tl(n));for(let[i,s]of Object.entries(o)){if(!s.length)continue;const l=t.mergeRules;let u=`/${i}`in l?l[`/${i}`]:l["/?"];u=u&&!("$"in u)&&"/"in u?u["/"]:u,u=typeof u=="function"?u():u;const d=u&&"$"in u?u.$:void 0;if(!d)throw new Error(il(i));const e=s.length>1?d(s,Object.assign(Object.assign({},t),{allOfItems:n})):s[0];e===void 0?t.mergeError(s):a[i]=e}return Object.keys(a).length?a:void 0},ze=n=>n[n.length-1],Le=n=>n.reduce((t,a)=>t||a,!1),tn=n=>Math.min(...n),rn=n=>Math.max(...n),sl=n=>n.length>1?n.reduce((t,a)=>`${t}(?=${a})`,""):n[0],Li=([n,...t])=>t.reduce((a,o)=>a.filter(i=>o.includes(i)),n),ol=([n,...t])=>t.find(a=>!Qc(a,n))?void 0:n,an=([n,...t])=>t.reduce((a,o)=>Ni(a,o),n),ht=n=>qi(n).map(t=>({allOf:t})),cl=n=>({anyOf:n}),ll=n=>el(n),ul=(n,t)=>{const a=n.map(i=>i.map(s=>JSON.stringify(s))),o=Li(a).map(i=>JSON.parse(i)).sort();return o.length||t.mergeError(n),o},dl=(n,t)=>{const a=n.map(i=>Array.isArray(i)?i:[i]),o=Li(a);return o.length===1?o[0]:o.length?o:void 0},$i=n=>{const t=new Set;for(const a of n)for(const o of a)t.add(o);return Array.from(t).sort()},pl=(n,t)=>{const a={},o=fr(n);for(const[i,s]of Object.entries(o))if(s.reduce((l,u)=>l&&Array.isArray(u),!0))a[i]=$i(s);else{const l=s.map(u=>Array.isArray(u)?{required:u}:u);a[i]=l.length>1?{allOf:l}:l[0]}return a},hl=(n,t)=>{if(!n.reduce((d,e)=>Array.isArray(e)||d,!1))return fn(n,t);const a=[];let o=1/0,i=0;const s=new Ai;for(const d of t.allOfItems)"additionalItems"in d&&d.additionalItems&&"items"in d&&Array.isArray(d.items)&&s.add(d.items.length,d.additionalItems),"items"in d&&(a.push(d.items),Array.isArray(d.items)&&(i=Math.max(i,d.items.length),"additionalItems"in d&&d.additionalItems===!1&&(o=Math.min(o,d.items.length))));const l=Math.min(i,o),u=[...Array(l)].map(()=>({allOf:[]}));for(const d of a)if(Array.isArray(d))for(let e=0;e<l;e++){const m=[];for(let h=0;h<=e;h++)s.has(h)&&m.push(...s.get(h));e<d.length?u[e].allOf.push(m.length?Object.assign(Object.assign({},d[e]),{allOf:m}):d[e]):u[e].allOf.push(!m.length||{allOf:m})}else u.forEach(({allOf:e})=>e.push(d));return u},ml=(n,t)=>{const a=[],o=[];for(const i of t.allOfItems)"items"in i&&!Array.isArray(i.items)&&o.push(i.items),"additionalItems"in i&&"items"in i&&Array.isArray(i.items)&&a.push(i.additionalItems);return o.length&&a.forEach(i=>i.allOf=o),fn(a,t)},Mi=(n,t,a,o)=>{const i=[],s=mr(t),l=[],u={pointer:s,data:"",refs:[]};for(const e of n)if(Qt(e)&&!l.includes(e.$ref)){u.data===""&&(u.data=JSON.stringify(n));const{$ref:m}=e,h=ln(e,["$ref"]),{filePath:g,normalized:f,pointer:p}=Ci(m),c=o.find(S=>S.refs.includes(e.$ref)&&S.data===u.data&&p!==S.pointer);if(c)return{allOfItems:[{$ref:"#"+c.pointer}],brokenRefs:l};u.refs.push(f);const r=g?void 0:xi(a,p);r===void 0?(l.push(f),i.push(e)):i.push(r),Object.keys(h).length&&i.push(h)}else i.push(e);u.refs.length&&o.push(u);const d=Di(i);return d.find(e=>Qt(e)&&!l.includes(e.$ref))?Mi(d,t,a,o):{allOfItems:d,brokenRefs:l}},Di=n=>{const t=[];for(const a of n)if(Ne(a))if(a.allOf&&Array.isArray(a.allOf)){const{allOf:o}=a,i=ln(a,["allOf"]),s=Object.keys(i).length?[...o,i]:o;t.push(...Di(s))}else t.push(a);return t},re=(n="draft-06")=>Object.assign(Object.assign({"/maximum":{$:tn},"/exclusiveMaximum":{$:Le},"/minimum":{$:rn},"/exclusiveMinimum":{$:Le},"/maxLength":{$:tn},"/minLength":{$:rn},"/maxItems":{$:tn},"/minItems":{$:rn},"/uniqueItems":{$:Le},"/maxProperties":{$:tn},"/minProperties":{$:rn},"/required":{$:$i},"/multipleOf":{$:ll},"/enum":{$:ul},"/type":{$:dl},"/allOf":{"/*":()=>re(n),$:ht},"/not":{$:cl},"/oneOf":{"/*":()=>re(n),$:ht,sibling:n==="draft-04"?["defs"]:["definitions"]},"/anyOf":{"/*":()=>re(n),$:ht,sibling:n==="draft-04"?["defs"]:["definitions"]},"/properties":{"/*":()=>re(n),$:Wr},"/items":()=>Object.assign(Object.assign({},re(n)),{$:hl,"/*":t=>typeof t[t.length-1]=="number"?re(n):{}}),"/additionalProperties":()=>Object.assign(Object.assign({},re(n)),{$:rl}),"/additionalItems":()=>Object.assign(Object.assign({},re(n)),{$:ml}),"/patternProperties":{"/*":()=>re(n),$:Wr},"/pattern":{$:sl},"/nullable":{$:Le},"/readOnly":{$:Le},"/writeOnly":{$:Le},"/example":{$:an},"/examples":{$:an},"/deprecated":{$:Le}},n!=="draft-04"?{"/propertyNames":()=>re(n),"/contains":()=>re(n),"/dependencies":{"/*":()=>re(n),$:pl},"/const":{$:ol},"/exclusiveMaximum":{$:tn},"/exclusiveMinimum":{$:rn},"/definitions":{"/*":()=>re(n),$:an}}:{}),{"/xml":{$:an},"/externalDocs":{$:ze},"/description":{$:ze},"/title":{$:ze},"/format":{$:ze},"/default":{$:ze},"/?":{$:ze},"/defs":{"/*":()=>re(n),$:an},$:fn}),fl=(n,t)=>{const a=(t==null?void 0:t.rules)||re();return Wc(n,gl(t),{rules:a})},gl=n=>{const t=new Map;let a=n==null?void 0:n.source;const o=[];return(i,s)=>{s.path.length||n!=null&&n.source||(a=i);const l=c=>{var r;const S=_l(s.path);S?t.set(...S):(r=n==null?void 0:n.onMergeError)===null||r===void 0||r.call(n,al(),s.path,c)},u=()=>{const{node:c}=s.state,r=mr(s.path);if(t.has(r)){const S=t.get(r);Array.isArray(c[s.key])&&(c[s.key].length<2&&l((i==null?void 0:i.allOf)||[]),c[s.key].splice(S,1))}};if(!Ne(i)||Array.isArray(i))return{value:i,exitHook:u};if(!((d=s.rules)&&d["/allOf"]&&"$"in d["/allOf"]))return{value:i,exitHook:u};var d;const{allOf:e}=i,m=ln(i,["allOf"]),h=[];if(Array.isArray(e)&&h.push(...e),h.length)Object.keys(m).length&&h.push(m);else{const{$ref:c}=m,r=ln(m,["$ref"]);if(n!=null&&n.mergeRefSibling&&c&&Object.keys(r).length>0)h.push({$ref:c},r);else if(n!=null&&n.mergeCombinarySibling){if(Gr(m)&&s.rules["/anyOf"])return{value:En(m,"anyOf",s.rules["/anyOf"]),exitHook:u};if(Jr(m)&&s.rules["/oneOf"])return{value:En(m,"oneOf",s.rules["/oneOf"]),exitHook:u}}}if(!h.length)return{value:m,exitHook:u};const{allOfItems:g,brokenRefs:f}=Mi(h,s.path,a,o);if(f.length)return f.forEach(c=>{var r;return(r=n==null?void 0:n.onRefResolveError)===null||r===void 0?void 0:r.call(n,"Cannot resolve $ref",s.path,c)}),{value:{allOf:g},exitHook:u};if(g.length<2)return{value:g.length?g[0]:{},exitHook:u};const p=fn(g,{allOfItems:g,mergeRules:s.rules,mergeError:l});return n!=null&&n.mergeCombinarySibling&&Gr(p)?{value:En(p,"anyOf",s.rules["/anyOf"]),exitHook:u}:n!=null&&n.mergeCombinarySibling&&Jr(p)?{value:En(p,"oneOf",s.rules["/oneOf"]),exitHook:u}:{value:p,exitHook:u}}},_l=n=>{for(let t=n.length-2;t>=0;t--)if(n[t]==="anyOf"||n[t]==="oneOf"){const a=n.slice(0,t+1);return[mr(a),n[t+1]]}},mt={};function yl(n){if(typeof n!="object"||!Array.isArray(n.allOf))return n;const t=n.$ref,a=fl(n,{onMergeError:o=>console.error(o)});return t?a.$ref=t:a.$ref&&delete a.$ref,a}function Zr(n,t=[],a,o){if(typeof n!="string"||!n.startsWith("#"))return n;if(mt[n])return mt[n];if(t.includes(n))return{$recursive:!0,$ref:n};const[i,s,l,u]=n.split("/");let d=null;if(s==="definitions"){if(!a||!a[l])return{};d=a[l],d.title=u,t.push(n)}else{if(!o||!o[l]||!o[l][u])return{};d=o[l][u],d.title=u,t.push(n)}return d?mt[n]=un(d,t,a,o):null}function un(n,t=[],a={},o={},i=!0){if(typeof n=="string")return Zr(n,t,a,o);if(!n||typeof n!="object")return n;if(Array.isArray(n))return n.map(l=>un(l,t,a,o,i));if(n&&"$ref"in n){const l=n.$ref,u=Zr(l,t,a,o);return u?u.$ref||!i?u:{...u,$path:l}:{}}let s={};for(const[l,u]of Object.entries(n)){let d=u;typeof d=="string"&&d.startsWith("#")&&(d={$ref:u}),s[l]=un(d,t,a,o,l!=="allOf")}return"allOf"in s&&(s=yl(s)),s}const bl={name:"OpenApiObjectModel",components:{OpenApiSchemaProperty:hr},props:{lite:Boolean,schema:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}},computed:{resolvedSchema(){return un(this.schema,[],this.$openapidocRef.definitions,this.$openapidocRef.components)},requiredProps(){return this.resolvedSchema.required&&Array.isArray(this.resolvedSchema.required)?this.resolvedSchema.required:[]}},methods:{}},vl={class:"oapi-object__list"};function Sl(n,t,a,o,i,s){const l=hr;return y(),b("div",{class:ve(["oapi-object",{"oapi-object--lite":a.lite}])},[v("ul",vl,[F(l,{"hide-title-description":!a.lite,schema:s.resolvedSchema,"current-locale":a.currentLocale,"no-lines":"",open:""},null,8,["hide-title-description","schema","current-locale"])])],2)}const Ce=J(bl,[["render",Sl]]);const El={props:{tabNames:{type:Object,default:null}},data(){return{activeSlotName:null}},computed:{computedTabNames(){return this.tabNames?this.tabNames:Object.keys(this.$slots).reduce((n,t)=>({...n,[t]:this.tabNames&&this.tabNames[t]||t}),{})}},created(){this.activeSlotName=Object.keys(this.$slots)[0]}},kl={class:"oapi-tabs"},Ol={class:"oapi-tabs-list"},wl=["onClick"],Tl={class:"oapi-tabs__content"};function Al(n,t,a,o,i,s){return y(),b("div",kl,[v("ul",Ol,[(y(!0),b(L,null,M(s.computedTabNames,(l,u)=>(y(),b("li",{key:u,class:ve(["oapi-tabs-list__item",{"oapi-tabs-list__item--is-active":u===i.activeSlotName}]),onClick:d=>i.activeSlotName=u},E(l),11,wl))),128))]),v("div",Tl,[vi(n.$slots,i.activeSlotName)])])}const ji=J(El,[["render",Al]]);const Nl={name:"OpenApiMediaTypes",components:{OpenApiExampleObject:Ye,OpenApiTabs:ji,OpenApiObjectModel:Ce,OpenApiDropdown:ki},props:{data:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{selectedMediaType:null}},computed:{types(){return Object.keys(this.data).map(n=>({value:n}))},medaTypeObject(){return this.selectedMediaType===null?null:this.data[this.selectedMediaType]||null}},created(){this.selectedMediaType=Object.keys(this.data||{})[0]||null},methods:{}},Cl={class:"oapi-req-body-obj"},xl={class:"oapi-req-body-obj-content-type"},Rl={class:"oapi-req-body-obj-content-type__label"},ql={class:"oapi-req-body-obj__schema"},Ll={class:"oapi-req-body-obj__example"},$l=["innerHTML"],Ml={class:"oapi-req-body-obj__examples"};function Dl(n,t,a,o,i,s){const l=ki,u=Ce,d=Ye,e=ji;return y(),b("div",Cl,[v("div",xl,[v("span",Rl,E(n.$openapidoc.getLocaleText("openapidoc.content_type"))+": ",1),F(l,{modelValue:i.selectedMediaType,"onUpdate:modelValue":t[0]||(t[0]=m=>i.selectedMediaType=m),options:s.types,"text-prop":"value","value-prop":"value"},null,8,["modelValue","options"])]),(y(),Z(e,{key:i.selectedMediaType},fo({_:2},[s.medaTypeObject&&s.medaTypeObject.schema?{name:"Schema",fn:ce(()=>[v("div",ql,[F(u,{schema:s.medaTypeObject.schema,"current-locale":a.currentLocale,lite:""},null,8,["schema","current-locale"])])]),key:"0"}:void 0,s.medaTypeObject&&s.medaTypeObject.example&&!s.medaTypeObject.examples?{name:"Example",fn:ce(()=>[v("div",Ll,[v("pre",{innerHTML:JSON.stringify(s.medaTypeObject.example,null,2)},null,8,$l)])]),key:"1"}:void 0,s.medaTypeObject&&s.medaTypeObject.examples?{name:"Examples",fn:ce(()=>[v("div",Ml,[(y(!0),b(L,null,M(s.medaTypeObject.examples,(m,h)=>(y(),Z(d,{key:h,example:m,name:h,"current-locale":a.currentLocale,"name-tag":"h4"},null,8,["example","name","current-locale"]))),128))])]),key:"2"}:void 0]),1024))])}const xe=J(Nl,[["render",Dl]]);const jl={name:"OpenApiParameter",components:{OpenApiMediaTypes:xe,OpenApiObjectModel:Ce},props:{data:{type:Object,required:!0},hideName:Boolean,hideDescription:Boolean,lite:Boolean,currentLocale:{type:String,required:!0}},data(){return{}},computed:{flags(){const n=[];return this.data.deprecated&&n.push("Deprecated"),this.data.allowEmptyValue&&n.push("Allow empty"),this.data.allowReserved&&n.push("Allow reserved"),this.data.allowEmptyValue&&n.push("Explode"),n},exampleString(){return this.data.example?typeof this.data.example=="object"?JSON.stringify(this.data.example,null,2):this.data.example.toString():""}}},Il={class:"oapi-res-param"},Pl={key:0,class:"oapi-res-param__name"},Ul={key:1,class:"oapi-res-param__required"},Bl={key:2,class:"oapi-res-param-flags"},Hl=["innerHTML"],Fl={key:4,class:"oapi-res-param__param"},zl={key:5,class:"oapi-res-param__param"},Kl={key:6,class:"oapi-res-param__param"},Gl={key:0},Jl=["innerHTML"],Wl={key:7,class:"oapi-res-param__examples"},Zl={class:"oapi-res-param__muted"},Vl={class:"oapi-res-param-example__name"},Xl={key:0,class:"oapi-res-param-example__summary"},Ql=["innerHTML"],Yl={key:2,class:"oapi-res-param-example__value"},eu=["innerHTML"],nu={key:8,class:"oapi-res-param__schema"},tu={class:"oapi-res-param__muted"},ru={key:9,class:"oapi-res-param__content"},au={class:"oapi-res-param__muted"};function iu(n,t,a,o,i,s){const l=Ce,u=xe;return y(),b("div",Il,[a.data.name&&!a.hideName?(y(),b("div",Pl,[v("code",null,E(a.data.name),1)])):k("",!0),a.data.required?(y(),b("div",Ul,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):k("",!0),s.flags.length?(y(),b("div",Bl,[(y(!0),b(L,null,M(s.flags,d=>(y(),b("span",{key:d,class:"oapi-res-param-flags__flag"},E(d),1))),128))])):k("",!0),a.data.description&&!a.hideDescription?(y(),b("div",{key:3,class:"oapi-res-param__description",innerHTML:n.$openapidocRef.tr(a.data,"description",a.currentLocale)},null,8,Hl)):k("",!0),a.data.in?(y(),b("div",Fl,[D(E(n.$openapidoc.getLocaleText("openapidoc.in"))+": ",1),v("code",null,E(a.data.in),1)])):k("",!0),a.data.style?(y(),b("div",zl,[D(E(n.$openapidoc.getLocaleText("openapidoc.style"))+": ",1),v("code",null,E(a.data.style),1)])):k("",!0),a.data.example?(y(),b("div",Kl,[D(E(n.$openapidoc.getLocaleText("openapidoc.example"))+": ",1),s.exampleString.includes(`
`)?(y(),b("br",Gl)):k("",!0),v("code",{innerHTML:s.exampleString},null,8,Jl)])):k("",!0),a.data.examples?(y(),b("div",Wl,[v("div",Zl,E(n.$openapidoc.getLocaleText("openapidoc.examples"))+": ",1),(y(!0),b(L,null,M(a.data.examples,(d,e)=>(y(),b("div",{key:e,class:"oapi-res-param-example"},[v("div",Vl,E(e),1),d.summary?(y(),b("div",Xl,E(n.$openapidocRef.tr(d,"summary",a.currentLocale)),1)):k("",!0),d.description?(y(),b("div",{key:1,class:"oapi-res-param-example__description",innerHTML:n.$openapidocRef.tr(d,"description",a.currentLocale)},null,8,Ql)):k("",!0),d.value?(y(),b("div",Yl,[v("pre",{innerHTML:JSON.stringify(d.value,null,2)},null,8,eu)])):k("",!0)]))),128))])):k("",!0),a.data.schema?(y(),b("div",nu,[v("div",tu,E(n.$openapidoc.getLocaleText("openapidoc.schema"))+": ",1),F(l,{lite:"",schema:a.data.schema,"current-locale":a.currentLocale},null,8,["schema","current-locale"])])):k("",!0),a.data.content?(y(),b("div",ru,[v("div",au,E(n.$openapidoc.getLocaleText("openapidoc.content"))+": ",1),F(u,{"current-locale":a.currentLocale,data:a.data.content},null,8,["current-locale","data"])])):k("",!0)])}const en=J(jl,[["render",iu]]);const su={name:"OpenApiResponse",components:{OpenApiParameter:en,OpenApiObjectModel:Ce,OpenApiMediaTypes:xe},props:{response:{type:Object,required:!0},currentLocale:{type:String,required:!0},lite:Boolean},data(){return{}},computed:{isEmpty(){return(!this.response.description||this.lite)&&(!this.response.headers||!Object.keys(this.response.headers).length)&&!this.response.content&&!this.response.schema}}},ou={key:0,class:"oapi-response"},cu=["innerHTML"],lu={key:1,class:"oapi-response__section"},uu={class:"oapi-response__section-title"},du={class:"oapi-response-header__name"},pu={key:2,class:"oapi-response__section"},hu={key:0,class:"oapi-response__section-title"},mu={class:"oapi-response-media-types"},fu={key:3,class:"oapi-response__schema"},gu={key:0,class:"oapi-response__section-title"},_u={class:"oapi-response-media-types"};function yu(n,t,a,o,i,s){const l=en,u=xe,d=Ce;return s.isEmpty?k("",!0):(y(),b("div",ou,[a.response.description&&!a.lite?(y(),b("div",{key:0,class:"oapi-response__description",innerHTML:n.$openapidocRef.tr(a.response,"description",a.currentLocale)},null,8,cu)):k("",!0),a.response.headers?(y(),b("div",lu,[v("strong",uu,E(n.$openapidoc.getLocaleText("openapidoc.headers")),1),(y(!0),b(L,null,M(a.response.headers,(e,m)=>(y(),b("div",{key:m,class:"oapi-response-header"},[v("div",du,[v("code",null,E(m),1)]),F(l,{data:e,"current-locale":a.currentLocale,"hide-name":""},null,8,["data","current-locale"])]))),128))])):k("",!0),a.response.content?(y(),b("div",pu,[a.response.headers?(y(),b("strong",hu,E(n.$openapidoc.getLocaleText("openapidoc.content")),1)):k("",!0),v("div",mu,[F(u,{data:a.response.content,"current-locale":a.currentLocale,lite:""},null,8,["data","current-locale"])])])):k("",!0),a.response.schema?(y(),b("div",fu,[a.response.headers||a.response.content?(y(),b("strong",gu,E(n.$openapidoc.getLocaleText("openapidoc.schema")),1)):k("",!0),v("div",_u,[F(d,{schema:a.response.schema,"current-locale":a.currentLocale,lite:""},null,8,["schema","current-locale"])])])):k("",!0)]))}const Gn=J(su,[["render",yu]]),bu={components:{OpenApiParameter:en,OpenApiResponse:Gn,OpenApiSecurityScheme:Oi,OpenApiMediaTypes:xe,OpenApiExampleObject:Ye,OpenApiObjectModel:Ce},props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},vu={key:0},Su={id:"security-schemes"},Eu=["id","textContent"],ku=["innerHTML"];function Ou(n,t,a,o,i,s){const l=Oi;return y(),b("div",null,[a.components.securitySchemes?(y(),b("div",vu,[v("h2",Su,E(n.$openapidoc.getLocaleText("openapidoc.security_schemes")),1),(y(!0),b(L,null,M(a.components.securitySchemes,(u,d)=>(y(),b("div",{key:d,class:"oapi-schema-block"},[v("h3",{id:"security-schemes-"+d,textContent:E(d)},null,8,Eu),u.description?(y(),b("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(u,"description",a.currentLocale)},null,8,ku)):k("",!0),F(l,{"current-locale":a.currentLocale,"security-scheme":u},null,8,["current-locale","security-scheme"])]))),128))])):k("",!0)])}const Sv=J(bu,[["render",Ou]]),wu={props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},Tu={key:0},Au={id:"schemas"},Nu=["id","textContent"],Cu=["innerHTML"],xu=["innerHTML"],Ru={key:1},qu={id:"examples"},Lu={key:2},$u={id:"request-bodies"},Mu=["id","textContent"],Du={class:"oapi-schema-block__required"},ju=["innerHTML"],Iu={key:3},Pu={id:"responses"},Uu=["id","textContent"],Bu=["innerHTML"],Hu={key:4},Fu={id:"parameters"},zu=["id","textContent"],Ku=["innerHTML"],Gu={key:5},Ju={id:"headers"},Wu=["id","textContent"],Zu=["innerHTML"];function Vu(n,t,a,o,i,s){const l=Ce,u=Ye,d=xe,e=Gn,m=en;return y(),b("div",null,[a.components.schemas?(y(),b("div",Tu,[v("h2",Au,E(n.$openapidoc.getLocaleText("openapidoc.schemas")),1),(y(!0),b(L,null,M(a.components.schemas,(h,g)=>(y(),b("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,Nu),h.title?(y(),b("div",{key:0,class:"oapi-schema-block__title",innerHTML:n.$openapidocRef.tr(h,"title",a.currentLocale)},null,8,Cu)):k("",!0),h.description?(y(),b("div",{key:1,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(h,"description",a.currentLocale)},null,8,xu)):k("",!0),F(l,{class:"oapi-schema-block__model",schema:h,"current-locale":a.currentLocale,root:""},null,8,["schema","current-locale"])]))),128))])):k("",!0),a.components.examples?(y(),b("div",Ru,[v("h2",qu,E(n.$openapidoc.getLocaleText("openapidoc.examples")),1),(y(!0),b(L,null,M(a.components.examples,(h,g)=>(y(),b("div",{key:g,class:"oapi-schema-block"},[F(u,{example:h,name:g,"current-locale":a.currentLocale,"name-tag":"h3"},null,8,["example","name","current-locale"])]))),128))])):k("",!0),a.components.requestBodies?(y(),b("div",Lu,[v("h2",$u,E(n.$openapidoc.getLocaleText("openapidoc.request_bodies")),1),(y(!0),b(L,null,M(a.components.requestBodies,(h,g)=>(y(),b("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,Mu),v("div",Du,E(n.$openapidoc.getLocaleText("openapidoc.required")),1),h.description?(y(),b("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(h,"description",a.currentLocale)},null,8,ju)):k("",!0),F(d,{data:h.content,"current-locale":a.currentLocale},null,8,["data","current-locale"])]))),128))])):k("",!0),a.components.responses?(y(),b("div",Iu,[v("h2",Pu,E(n.$openapidoc.getLocaleText("openapidoc.responses")),1),(y(!0),b(L,null,M(a.components.responses,(h,g)=>(y(),b("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,Uu),h.description?(y(),b("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(h,"description",a.currentLocale)},null,8,Bu)):k("",!0),F(e,{response:h,"current-locale":a.currentLocale},null,8,["response","current-locale"])]))),128))])):k("",!0),a.components.parameters?(y(),b("div",Hu,[v("h2",Fu,E(n.$openapidoc.getLocaleText("openapidoc.parameters")),1),n.name!=="Authorization"?(y(!0),b(L,{key:0},M(a.components.parameters,(h,g)=>(y(),b("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,zu),h.description?(y(),b("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(h,"description",a.currentLocale)},null,8,Ku)):k("",!0),F(m,{data:h,"hide-description":"","current-locale":a.currentLocale},null,8,["data","current-locale"])]))),128)):k("",!0)])):k("",!0),a.components.headers?(y(),b("div",Gu,[v("h2",Ju,E(n.$openapidoc.getLocaleText("openapidoc.headers")),1),(y(!0),b(L,null,M(a.components.headers,(h,g)=>(y(),b("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,Wu),h.description?(y(),b("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(h,"description",a.currentLocale)},null,8,Zu)):k("",!0),F(m,{data:h,"current-locale":a.currentLocale,"hide-name":"","hide-description":""},null,8,["data","current-locale"])]))),128))])):k("",!0)])}const Ev=J(wu,[["render",Vu]]);const Xu={props:{path:{type:String,required:!0},method:{type:String,required:!0},tags:{type:Array,default:()=>[]},summary:{type:String,default:null},description:{type:String,default:null},deprecated:Boolean,currentLocale:{type:String,required:!0},server:{type:String,required:!1,default:""}},computed:{requestUrl(){return this.server+""+this.path},title(){return this.summary&&this.summary!==""?this.summary:this.path}}},Qu=["id"],Yu=["textContent"],ed={key:0,class:"oapi-route-header__deprecated",role:"alert"},nd={class:"oapi-route-header__tags"},td=["innerHTML"];function rd(n,t,a,o,i,s){return y(),b("div",{class:ve(["oapi-route-header",{"oapi-route-header--deprecated":a.deprecated}])},[v("h1",{id:"method-"+a.method,class:"oapi-route-header__title"},[v("span",{class:ve(["oapi-method-tag",`oapi-method-tag--${a.method}`])},E(a.method),3),D(" "+E(s.title),1)],8,Qu),v("div",{class:"oapi-route-header__path",onClick:t[0]||(t[0]=l=>n.$openapidoc.copyToClipboard(s.requestUrl,l))},[v("code",{textContent:E(s.requestUrl)},null,8,Yu)]),a.deprecated?(y(),b("div",ed,[v("span",null,E(n.$openapidoc.getLocaleText("openapidoc.deprecated")),1)])):k("",!0),v("div",nd,[(y(!0),b(L,null,M(a.tags,l=>(y(),b("span",{key:l,class:"oapi-route-header__tag"},E(l),1))),128))]),v("div",{class:"oapi-route-header__description",innerHTML:a.description},null,8,td)],2)}const Ii=J(Xu,[["render",rd]]);const ad={name:"OpenApiServer",props:{server:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}}},id={class:"oapi-server"},sd={key:0,class:"oapi-server__url"},od=["innerHTML"],cd={key:2,class:"oapi-server-vars"},ld={class:"oapi-server-vars__title"},ud={class:"oapi-server-var"},dd={class:"oapi-server-var__name"},pd=["innerHTML"],hd={key:1,class:"oapi-server-var__default"},md={key:2,class:"oapi-server-var__enum"};function fd(n,t,a,o,i,s){return y(),b("div",id,[a.server.url?(y(),b("div",sd,[v("code",null,E(a.server.url),1)])):k("",!0),a.server.description?(y(),b("div",{key:1,class:"oapi-server__description",innerHTML:n.$openapidocRef.tr(a.server,"description",a.currentLocale)},null,8,od)):k("",!0),a.server.variables&&Object.keys(a.server.variables).length?(y(),b("div",cd,[v("div",ld,E(n.$openapidoc.getLocaleText("openapidoc.variables")),1),v("ul",null,[(y(!0),b(L,null,M(a.server.variables,(l,u)=>(y(),b("li",ud,[v("div",dd,[v("code",null,E(u),1)]),l.description?(y(),b("div",{key:0,class:"oapi-server-var__description",innerHTML:n.$openapidocRef.tr(l,"description",a.currentLocale)},null,8,pd)):k("",!0),l.default?(y(),b("div",hd,[D(E(n.$openapidoc.getLocaleText("openapidoc.default"))+": ",1),v("code",null,E(l.default),1)])):k("",!0),l.enum?(y(),b("div",md,[D(E(n.$openapidoc.getLocaleText("openapidoc.enum"))+": ",1),(y(!0),b(L,null,M(l.enum,d=>(y(),b("span",{key:d},[v("code",null,E(d),1),D(E(" "))]))),128))])):k("",!0)]))),256))])])):k("",!0)])}const Pi=J(ad,[["render",fd]]);const gd={name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{getRoute(n){return{name:`openapi-${this.path_doc}${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:"components"},hash:"#"+n}}}},_d={class:"oapi-sec-requirement"},yd=["data-scheme"],bd={class:"oapi-sec-requirement-item__scheme"},vd={class:"oapi-sec-requirement-item__scopes"};function Sd(n,t,a,o,i,s){const l=Si;return y(),b("div",_d,[v("ul",null,[(y(!0),b(L,null,M(a.securityRequirement,(u,d)=>(y(),b("li",{key:d,"data-scheme":d},[F(l,{to:s.getRoute(d),class:"oapi-sec-requirement-item"},{default:ce(()=>[v("span",bd,E(d),1),v("ul",vd,[(y(!0),b(L,null,M(u,e=>(y(),b("li",{key:e},[v("code",null,E(e),1)]))),128))])]),_:2},1032,["to"])],8,yd))),128))])])}const Ui=J(gd,[["render",Sd],["__scopeId","data-v-9e8502f7"]]);const Ed={name:"OpenApiSecurity",components:{OpenApiSecurityRequirement:Ui},props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}}},kd={class:"oapi-route-sec"},Od={id:"security"},wd={class:"oapi-route-sec__list"};function Td(n,t,a,o,i,s){const l=Ui;return y(),b("div",kd,[v("h2",Od,E(n.$openapidoc.getLocaleText("openapidoc.security")),1),v("ul",wd,[(y(!0),b(L,null,M(a.security,(u,d)=>(y(),b("li",{key:d},[F(l,{"security-requirement":u,"current-locale":a.currentLocale,path_doc:a.path_doc,file:a.file},null,8,["security-requirement","current-locale","path_doc","file"])]))),128))])])}const Bi=J(Ed,[["render",Td]]),Ad={components:{OpenApiParameter:en},props:{title:{type:String,required:!1,default:"Parameters"},parameters:{type:Array,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}}},Nd={id:"parameters"},Cd=["textContent"];function xd(n,t,a,o,i,s){const l=en;return y(),b("div",null,[v("h2",Nd,[v("span",{textContent:E(a.title)},null,8,Cd)]),(y(!0),b(L,null,M(a.parameters,u=>(y(),Z(l,{key:`${u.name}-${u.in||"def"}`,data:u,"current-locale":a.currentLocale},null,8,["data","current-locale"]))),128))])}const Jn=J(Ad,[["render",xd]]);const Rd={name:"OpenApiRequestBody",components:{OpenApiMediaTypes:xe},props:{requestBody:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})},isCb:Boolean,hPrefix:{type:String,default:""}}},qd={class:"oapi-req-body"},Ld={key:0,class:"oapi-req-body__required"},$d=["innerHTML"];function Md(n,t,a,o,i,s){const l=xe;return y(),b("div",qd,[(y(),Z(Pn(a.isCb?"h3":"h2"),{id:`${a.hPrefix}request-body`},{default:ce(()=>[D(E(n.$openapidoc.getLocaleText("openapidoc.request_body")),1)]),_:1},8,["id"])),a.requestBody.required?(y(),b("div",Ld,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):k("",!0),a.requestBody.description?(y(),b("div",{key:1,class:"oapi-req-body__description",innerHTML:n.$openapidocRef.tr(a.requestBody,"description",a.currentLocale)},null,8,$d)):k("",!0),a.requestBody.content?(y(),Z(l,{key:2,data:a.requestBody.content,"current-locale":a.currentLocale},null,8,["data","current-locale"])):k("",!0)])}const Wn=J(Rd,[["render",Md]]);const Dd={name:"OpenApiResponses",components:{OpenApiResponse:Gn},props:{isCb:Boolean,hPrefix:{type:String,default:""},responses:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}}},jd={class:"oapi-responses"},Id=["innerHTML"];function Pd(n,t,a,o,i,s){const l=Gn;return y(),b("div",jd,[(y(),Z(Pn(a.isCb?"h3":"h2"),{id:`${a.hPrefix}responses`},{default:ce(()=>[D(E(n.$openapidoc.getLocaleText("openapidoc.responses")),1)]),_:1},8,["id"])),(y(!0),b(L,null,M(a.responses,(u,d)=>(y(),b("div",{key:d,class:"oapi-responses-item"},[(y(),Z(Pn(a.isCb?"h4":"h3"),{id:`${a.hPrefix}response-${d}`,class:"oapi-responses-item__status"},{default:ce(()=>[D(E(d),1)]),_:2},1032,["id"])),v("div",{class:"oapi-responses-item__description",innerHTML:n.$openapidocRef.tr(u,"description",a.currentLocale)},null,8,Id),F(l,{lite:"","current-locale":a.currentLocale,response:u},null,8,["current-locale","response"])]))),128))])}const Zn=J(Dd,[["render",Pd]]);const Ud={props:{items:{type:Object,required:!0}},data(){return{isOpen:!1,preSelectedSnippet:"javascript",selectedSnippet:"javascript",selectedLibrary:"xmlhttprequest"}},computed:{selectedText(){return this.selectedSnippet+" / "+this.selectedLibrary}},methods:{handleItemClick(n,t=null){t?(this.selectedSnippet=n,this.selectedLibrary=t,this.$emit("select",n,t),this.isOpen=!1):this.preSelectedSnippet=n}}},Hi=n=>(_o("data-v-5101a728"),n=n(),yo(),n),Bd={class:"oapi-dd-sub"},Hd=Hi(()=>v("svg",{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1)),Fd={key:0,class:"oapi-dd-sub-list",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},zd=["onClick"],Kd={class:"oapi-dd-sub-item"},Gd={class:"oapi-dd-sub-item__title"},Jd=Hi(()=>v("span",{class:"oapi-dd-sub-item__icon"},[v("svg",{viewBox:"0 0 20 20",fill:"currentColor"},[v("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1)),Wd={key:0,class:"oapi-dd-sub-sub-menu"},Zd=["onClick"];function Vd(n,t,a,o,i,s){return y(),b("div",Bd,[v("button",{type:"button",class:ve(["oapi-dd-sub__btn",{"oapi-dd-sub__btn--is-open":i.isOpen}]),onClick:t[0]||(t[0]=l=>i.isOpen=!i.isOpen)},[v("b",null,E(s.selectedText?s.selectedText:"Select Library"),1),Hd],2),F(go,{name:"oapi-dropdown"},{default:ce(()=>[i.isOpen?(y(),b("ul",Fd,[(y(!0),b(L,null,M(a.items,(l,u)=>(y(),b("li",{key:u,role:"menuitem",class:"oapi-dd-sub-list__item",onClick:d=>s.handleItemClick(u)},[l?(y(),b(L,{key:0},[v("div",Kd,[v("span",Gd,E(u),1),Jd]),i.preSelectedSnippet===u?(y(),b("ul",Wd,[(y(!0),b(L,null,M(l,d=>(y(),b("li",{key:d,class:"oapi-dd-sub-sub-menu__item",onClick:e=>s.handleItemClick(u,d)},E(d),9,Zd))),128))])):k("",!0)],64)):(y(),b(L,{key:1},[D(E(l.snippet),1)],64))],8,zd))),128))])):k("",!0)]),_:1})])}const Fi=J(Ud,[["render",Vd],["__scopeId","data-v-5101a728"]]);/*!
 * Request Templater v1.3.1
 *
 * Copyright (C) 2012-2023 Pavel Kuz`min (@s00d).
 *
 * Date: Wed, 01 Nov 2023 11:34:05 GMT
 */function N(n){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(n)}function Xd(n,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,zi(o.key),o)}}function $e(n,t,a){return(t=zi(t))in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function _(n,t){if(n!==t)throw new TypeError("Cannot instantiate an arrow function")}function on(n,t){return function(a){if(Array.isArray(a))return a}(n)||function(a,o){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var s,l,u,d,e=[],m=!0,h=!1;try{if(u=(i=i.call(a)).next,o===0){if(Object(i)!==i)return;m=!1}else for(;!(m=(s=u.call(i)).done)&&(e.push(s.value),e.length!==o);m=!0);}catch(g){h=!0,l=g}finally{try{if(!m&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(h)throw l}}return e}}(n,t)||function(a,o){if(a){if(typeof a=="string")return Vr(a,o);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Vr(a,o)}}(n,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Vr(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=n[a];return o}function zi(n){var t=function(a,o){if(typeof a!="object"||a===null)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var s=i.call(a,o||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(a)}(n,"string");return typeof t=="symbol"?t:String(t)}var ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kn=function(n){return n&&n.Math===Math&&n},ae=kn(typeof globalThis=="object"&&globalThis)||kn(typeof window=="object"&&window)||kn(typeof self=="object"&&self)||kn(typeof ft=="object"&&ft)||function(){return this}()||ft||Function("return this")(),gn={},Q=function(n){try{return!!n()}catch{return!0}},he=!Q(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),_n=!Q(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),Yd=_n,On=Function.prototype.call,Re=Yd?On.bind(On):function(){return On.apply(On,arguments)},gr={},Ki={}.propertyIsEnumerable,Gi=Object.getOwnPropertyDescriptor,ep=Gi&&!Ki.call({1:2},1);gr.f=ep?function(n){var t=Gi(this,n);return!!t&&t.enumerable}:Ki;var we,Mn,_r=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}},Ji=_n,Wi=Function.prototype,Yt=Wi.call,np=Ji&&Wi.bind.bind(Yt,Yt),X=Ji?np:function(n){return function(){return Yt.apply(n,arguments)}},Zi=X,tp=Zi({}.toString),rp=Zi("".slice),De=function(n){return rp(tp(n),8,-1)},ap=Q,ip=De,gt=Object,sp=X("".split),Vn=ap(function(){return!gt("z").propertyIsEnumerable(0)})?function(n){return ip(n)==="String"?sp(n,""):gt(n)}:gt,Xn=function(n){return n==null},op=Xn,cp=TypeError,je=function(n){if(op(n))throw new cp("Can't call method on "+n);return n},lp=Vn,up=je,nn=function(n){return lp(up(n))},_t=typeof document=="object"&&document.all,Qn={all:_t,IS_HTMLDDA:_t===void 0&&_t!==void 0},dp=Qn.all,ie=Qn.IS_HTMLDDA?function(n){return typeof n=="function"||n===dp}:function(n){return typeof n=="function"},Xr=ie,pp=Qn.all,Se=Qn.IS_HTMLDDA?function(n){return typeof n=="object"?n!==null:Xr(n)||n===pp}:function(n){return typeof n=="object"?n!==null:Xr(n)},yt=ae,hp=ie,Yn=function(n,t){return arguments.length<2?(a=yt[n],hp(a)?a:void 0):yt[n]&&yt[n][t];var a},Vi=X({}.isPrototypeOf),Xi=ae,bt=typeof navigator<"u"&&String(navigator.userAgent)||"",Qr=Xi.process,Yr=Xi.Deno,ea=Qr&&Qr.versions||Yr&&Yr.version,na=ea&&ea.v8;na&&(Mn=(we=na.split("."))[0]>0&&we[0]<4?1:+(we[0]+we[1])),!Mn&&bt&&(!(we=bt.match(/Edge\/(\d+)/))||we[1]>=74)&&(we=bt.match(/Chrome\/(\d+)/))&&(Mn=+we[1]);var dn=Mn,ta=dn,mp=Q,fp=ae.String,Qi=!!Object.getOwnPropertySymbols&&!mp(function(){var n=Symbol("symbol detection");return!fp(n)||!(Object(n)instanceof Symbol)||!Symbol.sham&&ta&&ta<41}),Yi=Qi&&!Symbol.sham&&typeof Symbol.iterator=="symbol",gp=Yn,_p=ie,yp=Vi,bp=Object,es=Yi?function(n){return typeof n=="symbol"}:function(n){var t=gp("Symbol");return _p(t)&&yp(t.prototype,bp(n))},vp=String,Sp=ie,Ep=function(n){try{return vp(n)}catch{return"Object"}},kp=TypeError,et=function(n){if(Sp(n))return n;throw new kp(Ep(n)+" is not a function")},Op=et,wp=Xn,yr=function(n,t){var a=n[t];return wp(a)?void 0:Op(a)},vt=Re,St=ie,Et=Se,Tp=TypeError,ns={exports:{}},ra=ae,Ap=Object.defineProperty,br=function(n,t){try{Ap(ra,n,{value:t,configurable:!0,writable:!0})}catch{ra[n]=t}return t},Np=br,aa="__core-js_shared__",vr=ae[aa]||Np(aa,{}),ia=vr;(ns.exports=function(n,t){return ia[n]||(ia[n]=t!==void 0?t:{})})("versions",[]).push({version:"3.33.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Sr=ns.exports,Cp=je,xp=Object,Ie=function(n){return xp(Cp(n))},Rp=Ie,qp=X({}.hasOwnProperty),me=Object.hasOwn||function(n,t){return qp(Rp(n),t)},Lp=X,$p=0,Mp=Math.random(),Dp=Lp((+"1").toString),ts=function(n){return"Symbol("+(n===void 0?"":n)+")_"+Dp(++$p+Mp,36)},jp=Sr,sa=me,Ip=ts,Pp=Qi,Up=Yi,Ve=ae.Symbol,kt=jp("wks"),Bp=Up?Ve.for||Ve:Ve&&Ve.withoutSetter||Ip,fe=function(n){return sa(kt,n)||(kt[n]=Pp&&sa(Ve,n)?Ve[n]:Bp("Symbol."+n)),kt[n]},Hp=Re,oa=Se,ca=es,Fp=yr,zp=function(n,t){var a,o;if(t==="string"&&St(a=n.toString)&&!Et(o=vt(a,n))||St(a=n.valueOf)&&!Et(o=vt(a,n))||t!=="string"&&St(a=n.toString)&&!Et(o=vt(a,n)))return o;throw new Tp("Can't convert object to primitive value")},Kp=TypeError,Gp=fe("toPrimitive"),Jp=function(n,t){if(!oa(n)||ca(n))return n;var a,o=Fp(n,Gp);if(o){if(t===void 0&&(t="default"),a=Hp(o,n,t),!oa(a)||ca(a))return a;throw new Kp("Can't convert object to primitive value")}return t===void 0&&(t="number"),zp(n,t)},Wp=es,Er=function(n){var t=Jp(n,"string");return Wp(t)?t:t+""},la=Se,er=ae.document,Zp=la(er)&&la(er.createElement),kr=function(n){return Zp?er.createElement(n):{}},Vp=kr,rs=!he&&!Q(function(){return Object.defineProperty(Vp("div"),"a",{get:function(){return 7}}).a!==7}),Xp=he,Qp=Re,Yp=gr,eh=_r,nh=nn,th=Er,rh=me,ah=rs,ua=Object.getOwnPropertyDescriptor;gn.f=Xp?ua:function(n,t){if(n=nh(n),t=th(t),ah)try{return ua(n,t)}catch{}if(rh(n,t))return eh(!Qp(Yp.f,n,t),n[t])};var Pe={},as=he&&Q(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),ih=Se,sh=String,oh=TypeError,Ee=function(n){if(ih(n))return n;throw new oh(sh(n)+" is not an object")},ch=he,lh=rs,uh=as,wn=Ee,da=Er,dh=TypeError,Ot=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,wt="enumerable",Tt="configurable",At="writable";Pe.f=ch?uh?function(n,t,a){if(wn(n),t=da(t),wn(a),typeof n=="function"&&t==="prototype"&&"value"in a&&At in a&&!a[At]){var o=ph(n,t);o&&o[At]&&(n[t]=a.value,a={configurable:Tt in a?a[Tt]:o[Tt],enumerable:wt in a?a[wt]:o[wt],writable:!1})}return Ot(n,t,a)}:Ot:function(n,t,a){if(wn(n),t=da(t),wn(a),lh)try{return Ot(n,t,a)}catch{}if("get"in a||"set"in a)throw new dh("Accessors not supported");return"value"in a&&(n[t]=a.value),n};var hh=Pe,mh=_r,nt=he?function(n,t,a){return hh.f(n,t,mh(1,a))}:function(n,t,a){return n[t]=a,n},is={exports:{}},nr=he,fh=me,ss=Function.prototype,gh=nr&&Object.getOwnPropertyDescriptor,Nt=fh(ss,"name"),Or={EXISTS:Nt,PROPER:Nt&&(function(){}).name==="something",CONFIGURABLE:Nt&&(!nr||nr&&gh(ss,"name").configurable)},_h=ie,tr=vr,yh=X(Function.toString);_h(tr.inspectSource)||(tr.inspectSource=function(n){return yh(n)});var Bn,cn,Hn,os=tr.inspectSource,bh=ie,pa=ae.WeakMap,vh=bh(pa)&&/native code/.test(String(pa)),Sh=ts,ha=Sr("keys"),wr=function(n){return ha[n]||(ha[n]=Sh(n))},Tr={},Eh=vh,cs=ae,kh=Se,Oh=nt,Ct=me,xt=vr,wh=wr,Th=Tr,ma="Object already initialized",rr=cs.TypeError,Ah=cs.WeakMap;if(Eh||xt.state){var de=xt.state||(xt.state=new Ah);de.get=de.get,de.has=de.has,de.set=de.set,Bn=function(n,t){if(de.has(n))throw new rr(ma);return t.facade=n,de.set(n,t),t},cn=function(n){return de.get(n)||{}},Hn=function(n){return de.has(n)}}else{var Ke=wh("state");Th[Ke]=!0,Bn=function(n,t){if(Ct(n,Ke))throw new rr(ma);return t.facade=n,Oh(n,Ke,t),t},cn=function(n){return Ct(n,Ke)?n[Ke]:{}},Hn=function(n){return Ct(n,Ke)}}var Ar={set:Bn,get:cn,has:Hn,enforce:function(n){return Hn(n)?cn(n):Bn(n,{})},getterFor:function(n){return function(t){var a;if(!kh(t)||(a=cn(t)).type!==n)throw new rr("Incompatible receiver, "+n+" required");return a}}},Nr=X,Nh=Q,Ch=ie,Tn=me,ar=he,xh=Or.CONFIGURABLE,Rh=os,qh=Ar.enforce,Lh=Ar.get,fa=String,Dn=Object.defineProperty,$h=Nr("".slice),Mh=Nr("".replace),Dh=Nr([].join),jh=ar&&!Nh(function(){return Dn(function(){},"length",{value:8}).length!==8}),Ih=String(String).split("String"),Ph=is.exports=function(n,t,a){$h(fa(t),0,7)==="Symbol("&&(t="["+Mh(fa(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),a&&a.getter&&(t="get "+t),a&&a.setter&&(t="set "+t),(!Tn(n,"name")||xh&&n.name!==t)&&(ar?Dn(n,"name",{value:t,configurable:!0}):n.name=t),jh&&a&&Tn(a,"arity")&&n.length!==a.arity&&Dn(n,"length",{value:a.arity});try{a&&Tn(a,"constructor")&&a.constructor?ar&&Dn(n,"prototype",{writable:!1}):n.prototype&&(n.prototype=void 0)}catch{}var o=qh(n);return Tn(o,"source")||(o.source=Dh(Ih,typeof t=="string"?t:"")),n};Function.prototype.toString=Ph(function(){return Ch(this)&&Lh(this).source||Rh(this)},"toString");var ls=is.exports,Uh=ie,Bh=Pe,Hh=ls,Fh=br,yn=function(n,t,a,o){o||(o={});var i=o.enumerable,s=o.name!==void 0?o.name:t;if(Uh(a)&&Hh(a,s,o),o.global)i?n[t]=a:Fh(t,a);else{try{o.unsafe?n[t]&&(i=!0):delete n[t]}catch{}i?n[t]=a:Bh.f(n,t,{value:a,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return n},us={},zh=Math.ceil,Kh=Math.floor,Gh=Math.trunc||function(n){var t=+n;return(t>0?Kh:zh)(t)},tt=function(n){var t=+n;return t!=t||t===0?0:Gh(t)},Jh=tt,Wh=Math.max,Zh=Math.min,Vh=tt,Xh=Math.min,bn=function(n){return n>0?Xh(Vh(n),9007199254740991):0},Qh=bn,rt=function(n){return Qh(n.length)},Yh=nn,em=function(n,t){var a=Jh(n);return a<0?Wh(a+t,0):Zh(a,t)},nm=rt,ga=function(n){return function(t,a,o){var i,s=Yh(t),l=nm(s),u=em(o,l);if(n&&a!=a){for(;l>u;)if((i=s[u++])!=i)return!0}else for(;l>u;u++)if((n||u in s)&&s[u]===a)return n||u||0;return!n&&-1}},tm={includes:ga(!0),indexOf:ga(!1)},Rt=me,rm=nn,am=tm.indexOf,im=Tr,_a=X([].push),ds=function(n,t){var a,o=rm(n),i=0,s=[];for(a in o)!Rt(im,a)&&Rt(o,a)&&_a(s,a);for(;t.length>i;)Rt(o,a=t[i++])&&(~am(s,a)||_a(s,a));return s},Cr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],sm=ds,om=Cr.concat("length","prototype");us.f=Object.getOwnPropertyNames||function(n){return sm(n,om)};var ps={};ps.f=Object.getOwnPropertySymbols;var cm=Yn,lm=us,um=ps,dm=Ee,pm=X([].concat),hm=cm("Reflect","ownKeys")||function(n){var t=lm.f(dm(n)),a=um.f;return a?pm(t,a(n)):t},ya=me,mm=hm,fm=gn,gm=Pe,_m=Q,ym=ie,bm=/#|\.prototype\./,vn=function(n,t){var a=Sm[vm(n)];return a===km||a!==Em&&(ym(t)?_m(t):!!t)},vm=vn.normalize=function(n){return String(n).replace(bm,".").toLowerCase()},Sm=vn.data={},Em=vn.NATIVE="N",km=vn.POLYFILL="P",Om=vn,qt=ae,wm=gn.f,Tm=nt,Am=yn,Nm=br,Cm=function(n,t,a){for(var o=mm(t),i=gm.f,s=fm.f,l=0;l<o.length;l++){var u=o[l];ya(n,u)||a&&ya(a,u)||i(n,u,s(t,u))}},xm=Om,se=function(n,t){var a,o,i,s,l,u=n.target,d=n.global,e=n.stat;if(a=d?qt:e?qt[u]||Nm(u,{}):(qt[u]||{}).prototype)for(o in t){if(s=t[o],i=n.dontCallGetSet?(l=wm(a,o))&&l.value:a[o],!xm(d?o:u+(e?".":"#")+o,n.forced)&&i!==void 0){if(typeof s==typeof i)continue;Cm(s,i)}(n.sham||i&&i.sham)&&Tm(s,"sham",!0),Am(a,o,s,n)}},Rm=De,qm=X,pn=function(n){if(Rm(n)==="Function")return qm(n)},hs={};hs[fe("toStringTag")]="z";var Lt,xr=String(hs)==="[object z]",Lm=xr,$m=ie,jn=De,Mm=fe("toStringTag"),Dm=Object,jm=jn(function(){return arguments}())==="Arguments",Rr=Lm?jn:function(n){var t,a,o;return n===void 0?"Undefined":n===null?"Null":typeof(a=function(i,s){try{return i[s]}catch{}}(t=Dm(n),Mm))=="string"?a:jm?jn(t):(o=jn(t))==="Object"&&$m(t.callee)?"Arguments":o},Im=Rr,Pm=String,Ue=function(n){if(Im(n)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Pm(n)},Um=Se,Bm=De,Hm=fe("match"),Fm=function(n){var t;return Um(n)&&((t=n[Hm])!==void 0?!!t:Bm(n)==="RegExp")},zm=TypeError,ms=function(n){if(Fm(n))throw new zm("The method doesn't accept regular expressions");return n},Km=fe("match"),fs=function(n){var t=/./;try{"/./"[n](t)}catch{try{return t[Km]=!1,"/./"[n](t)}catch{}}return!1},Gm=se,gs=pn,Jm=gn.f,Wm=bn,ba=Ue,Zm=ms,Vm=je,Xm=fs,va=gs("".startsWith),Qm=gs("".slice),Ym=Math.min,Sa=Xm("startsWith");Gm({target:"String",proto:!0,forced:!!(Sa||(Lt=Jm(String.prototype,"startsWith"),!Lt||Lt.writable))&&!Sa},{startsWith:function(n){var t=ba(Vm(this));Zm(n);var a=Wm(Ym(arguments.length>1?arguments[1]:void 0,t.length)),o=ba(n);return va?va(t,o,a):Qm(t,a,a+o.length)===o}});var ef=se,_s=pn,nf=gn.f,tf=bn,Ea=Ue,rf=ms,af=je,sf=fs,ka=_s("".endsWith),of=_s("".slice),cf=Math.min,ys=sf("endsWith"),lf=!ys&&!!function(){var n=nf(String.prototype,"endsWith");return n&&!n.writable}();ef({target:"String",proto:!0,forced:!lf&&!ys},{endsWith:function(n){var t=Ea(af(this));rf(n);var a=arguments.length>1?arguments[1]:void 0,o=t.length,i=a===void 0?o:cf(tf(a),o),s=Ea(n);return ka?ka(t,s,i):of(t,i-s.length,i)===s}});var uf=et,df=_n,pf=pn(pn.bind),hf=De,qr=Array.isArray||function(n){return hf(n)==="Array"},mf=X,ff=Q,bs=ie,gf=Rr,_f=os,vs=function(){},yf=[],Ss=Yn("Reflect","construct"),Lr=/^\s*(?:class|function)\b/,bf=mf(Lr.exec),vf=!Lr.test(vs),sn=function(n){if(!bs(n))return!1;try{return Ss(vs,yf,n),!0}catch{return!1}},Es=function(n){if(!bs(n))return!1;switch(gf(n)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return vf||!!bf(Lr,_f(n))}catch{return!0}};Es.sham=!0;var Sf=!Ss||ff(function(){var n;return sn(sn.call)||!sn(Object)||!sn(function(){n=!0})||n})?Es:sn,Oa=qr,Ef=Sf,kf=Se,Of=fe("species"),wa=Array,wf=function(n){var t;return Oa(n)&&(t=n.constructor,(Ef(t)&&(t===wa||Oa(t.prototype))||kf(t)&&(t=t[Of])===null)&&(t=void 0)),t===void 0?wa:t},ks=function(n,t){return new(wf(n))(t===0?0:t)},Tf=function(n,t){return uf(n),t===void 0?n:df?pf(n,t):function(){return n.apply(t,arguments)}},Af=Vn,Nf=Ie,Cf=rt,xf=ks,Ta=X([].push),Te=function(n){var t=n===1,a=n===2,o=n===3,i=n===4,s=n===6,l=n===7,u=n===5||s;return function(d,e,m,h){for(var g,f,p=Nf(d),c=Af(p),r=Tf(e,m),S=Cf(c),w=0,O=h||xf,T=t?O(d,S):a||l?O(d,0):void 0;S>w;w++)if((u||w in c)&&(f=r(g=c[w],w,p),n))if(t)T[w]=f;else if(f)switch(n){case 3:return!0;case 5:return g;case 6:return w;case 2:Ta(T,g)}else switch(n){case 4:return!1;case 7:Ta(T,g)}return s?-1:o||i?i:T}},at={forEach:Te(0),map:Te(1),filter:Te(2),some:Te(3),every:Te(4),find:Te(5),findIndex:Te(6),filterReject:Te(7)},Rf=Q,it=function(n,t){var a=[][n];return!!a&&Rf(function(){a.call(null,t||function(){return 1},1)})},qf=at.forEach,ir=it("forEach")?[].forEach:function(n){return qf(this,n,arguments.length>1?arguments[1]:void 0)};se({target:"Array",proto:!0,forced:[].forEach!==ir},{forEach:ir});var Lf=Rr,$f=xr?{}.toString:function(){return"[object "+Lf(this)+"]"};xr||yn(Object.prototype,"toString",$f,{unsafe:!0});var $t=kr("span").classList,Aa=$t&&$t.constructor&&$t.constructor.prototype,Na=ae,Ca={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Mf=Aa===Object.prototype?void 0:Aa,Mt=ir,Df=nt,Os=function(n){if(n&&n.forEach!==Mt)try{Df(n,"forEach",Mt)}catch{n.forEach=Mt}};for(var Dt in Ca)Ca[Dt]&&Os(Na[Dt]&&Na[Dt].prototype);Os(Mf);var jf=Q,If=dn,Pf=fe("species"),$r=function(n){return If>=51||!jf(function(){var t=[];return(t.constructor={})[Pf]=function(){return{foo:1}},t[n](Boolean).foo!==1})},Uf=at.filter;se({target:"Array",proto:!0,forced:!$r("filter")},{filter:function(n){return Uf(this,n,arguments.length>1?arguments[1]:void 0)}});var Bf=X([].slice),ws=X,Hf=et,Ff=Se,zf=me,xa=Bf,Kf=_n,Ra=Function,Gf=ws([].concat),Jf=ws([].join),jt={},qa=Kf?Ra.bind:function(n){var t=Hf(this),a=t.prototype,o=xa(arguments,1),i=function(){var s=Gf(o,xa(arguments));return this instanceof i?function(l,u,d){if(!zf(jt,u)){for(var e=[],m=0;m<u;m++)e[m]="a["+m+"]";jt[u]=Ra("C,a","return new C("+Jf(e,",")+")")}return jt[u](l,d)}(t,s.length,s):t.apply(n,s)};return Ff(a)&&(i.prototype=a),i};se({target:"Function",proto:!0,forced:Function.bind!==qa},{bind:qa});var Wf=Ee,Ts=function(){var n=Wf(this),t="";return n.hasIndices&&(t+="d"),n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.dotAll&&(t+="s"),n.unicode&&(t+="u"),n.unicodeSets&&(t+="v"),n.sticky&&(t+="y"),t},Mr=Q,Dr=ae.RegExp,sr=Mr(function(){var n=Dr("a","y");return n.lastIndex=2,n.exec("abcd")!==null}),Zf=sr||Mr(function(){return!Dr("a","y").sticky}),Vf={BROKEN_CARET:sr||Mr(function(){var n=Dr("^r","gy");return n.lastIndex=2,n.exec("str")!==null}),MISSED_STICKY:Zf,UNSUPPORTED_Y:sr},As={},Xf=ds,Qf=Cr,jr=Object.keys||function(n){return Xf(n,Qf)},Yf=he,eg=as,ng=Pe,tg=Ee,rg=nn,ag=jr;As.f=Yf&&!eg?Object.defineProperties:function(n,t){tg(n);for(var a,o=rg(t),i=ag(t),s=i.length,l=0;s>l;)ng.f(n,a=i[l++],o[a]);return n};var An,ig=Yn("document","documentElement"),sg=Ee,og=As,La=Cr,cg=Tr,lg=ig,ug=kr,or="prototype",cr="script",Ns=wr("IE_PROTO"),It=function(){},Cs=function(n){return"<"+cr+">"+n+"</"+cr+">"},$a=function(n){n.write(Cs("")),n.close();var t=n.parentWindow.Object;return n=null,t},In=function(){try{An=new ActiveXObject("htmlfile")}catch{}var n,t,a;In=typeof document<"u"?document.domain&&An?$a(An):(t=ug("iframe"),a="java"+cr+":",t.style.display="none",lg.appendChild(t),t.src=String(a),(n=t.contentWindow.document).open(),n.write(Cs("document.F=Object")),n.close(),n.F):$a(An);for(var o=La.length;o--;)delete In[or][La[o]];return In()};cg[Ns]=!0;var Ma,Pt,dg=Object.create||function(n,t){var a;return n!==null?(It[or]=sg(n),a=new It,It[or]=null,a[Ns]=n):a=In(),t===void 0?a:og.f(a,t)},pg=Q,hg=ae.RegExp,mg=pg(function(){var n=hg(".","s");return!(n.dotAll&&n.test(`
`)&&n.flags==="s")}),fg=Q,gg=ae.RegExp,_g=fg(function(){var n=gg("(?<a>b)","g");return n.exec("b").groups.a!=="b"||"b".replace(n,"$<a>c")!=="bc"}),Xe=Re,st=X,yg=Ue,bg=Ts,vg=Vf,Sg=dg,Eg=Ar.get,kg=mg,Og=_g,wg=Sr("native-string-replace",String.prototype.replace),Fn=RegExp.prototype.exec,lr=Fn,Tg=st("".charAt),Ag=st("".indexOf),Ng=st("".replace),Ut=st("".slice),Bt=(Pt=/b*/g,Xe(Fn,Ma=/a/,"a"),Xe(Fn,Pt,"a"),Ma.lastIndex!==0||Pt.lastIndex!==0),Da=vg.BROKEN_CARET,Ht=/()??/.exec("")[1]!==void 0;(Bt||Ht||Da||kg||Og)&&(lr=function(n){var t,a,o,i,s,l,u,d=this,e=Eg(d),m=yg(n),h=e.raw;if(h)return h.lastIndex=d.lastIndex,t=Xe(lr,h,m),d.lastIndex=h.lastIndex,t;var g=e.groups,f=Da&&d.sticky,p=Xe(bg,d),c=d.source,r=0,S=m;if(f&&(p=Ng(p,"y",""),Ag(p,"g")===-1&&(p+="g"),S=Ut(m,d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&Tg(m,d.lastIndex-1)!==`
`)&&(c="(?: "+c+")",S=" "+S,r++),a=new RegExp("^(?:"+c+")",p)),Ht&&(a=new RegExp("^"+c+"$(?!\\s)",p)),Bt&&(o=d.lastIndex),i=Xe(Fn,f?a:d,S),f?i?(i.input=Ut(i.input,r),i[0]=Ut(i[0],r),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:Bt&&i&&(d.lastIndex=d.global?i.index+i[0].length:o),Ht&&i&&i.length>1&&Xe(wg,i[0],a,function(){for(s=1;s<arguments.length-2;s++)arguments[s]===void 0&&(i[s]=void 0)}),i&&g)for(i.groups=l=Sg(null),s=0;s<g.length;s++)l[(u=g[s])[0]]=i[u[1]];return i});var zn=lr;se({target:"RegExp",proto:!0,forced:/./.exec!==zn},{exec:zn});var Cg=_n,xs=Function.prototype,ja=xs.apply,Ia=xs.call,xg=typeof Reflect=="object"&&Reflect.apply||(Cg?Ia.bind(ja):function(){return Ia.apply(ja,arguments)}),Pa=pn,Ua=yn,Rg=zn,Ba=Q,Rs=fe,qg=nt,Lg=Rs("species"),Ft=RegExp.prototype,qs=function(n,t,a,o){var i=Rs(n),s=!Ba(function(){var e={};return e[i]=function(){return 7},""[n](e)!==7}),l=s&&!Ba(function(){var e=!1,m=/a/;return n==="split"&&((m={}).constructor={},m.constructor[Lg]=function(){return m},m.flags="",m[i]=/./[i]),m.exec=function(){return e=!0,null},m[i](""),!e});if(!s||!l||a){var u=Pa(/./[i]),d=t(i,""[n],function(e,m,h,g,f){var p=Pa(e),c=m.exec;return c===Rg||c===Ft.exec?s&&!f?{done:!0,value:u(m,h,g)}:{done:!0,value:p(h,m,g)}:{done:!1}});Ua(String.prototype,n,d[0]),Ua(Ft,i,d[1])}o&&qg(Ft[i],"sham",!0)},Ir=X,$g=tt,Mg=Ue,Dg=je,jg=Ir("".charAt),Ha=Ir("".charCodeAt),Ig=Ir("".slice),Fa=function(n){return function(t,a){var o,i,s=Mg(Dg(t)),l=$g(a),u=s.length;return l<0||l>=u?n?"":void 0:(o=Ha(s,l))<55296||o>56319||l+1===u||(i=Ha(s,l+1))<56320||i>57343?n?jg(s,l):o:n?Ig(s,l,l+2):i-56320+(o-55296<<10)+65536}},Pg={codeAt:Fa(!1),charAt:Fa(!0)}.charAt,Ls=function(n,t,a){return t+(a?Pg(n,t).length:1)},Pr=X,Ug=Ie,Bg=Math.floor,zt=Pr("".charAt),Hg=Pr("".replace),Kt=Pr("".slice),Fg=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,zg=/\$([$&'`]|\d{1,2})/g,za=Re,Kg=Ee,Gg=ie,Jg=De,Wg=zn,Zg=TypeError,$s=function(n,t){var a=n.exec;if(Gg(a)){var o=za(a,n,t);return o!==null&&Kg(o),o}if(Jg(n)==="RegExp")return za(Wg,n,t);throw new Zg("RegExp#exec called on incompatible receiver")},Vg=xg,Ka=Re,ot=X,Xg=qs,Qg=Q,Yg=Ee,e_=ie,n_=Xn,t_=tt,r_=bn,Ge=Ue,a_=je,i_=Ls,s_=yr,o_=function(n,t,a,o,i,s){var l=a+n.length,u=o.length,d=zg;return i!==void 0&&(i=Ug(i),d=Fg),Hg(s,d,function(e,m){var h;switch(zt(m,0)){case"$":return"$";case"&":return n;case"`":return Kt(t,0,a);case"'":return Kt(t,l);case"<":h=i[Kt(m,1,-1)];break;default:var g=+m;if(g===0)return e;if(g>u){var f=Bg(g/10);return f===0?e:f<=u?o[f-1]===void 0?zt(m,1):o[f-1]+zt(m,1):e}h=o[g-1]}return h===void 0?"":h})},c_=$s,ur=fe("replace"),l_=Math.max,u_=Math.min,d_=ot([].concat),Gt=ot([].push),Ga=ot("".indexOf),Ja=ot("".slice),p_="a".replace(/./,"$0")==="$0",Wa=!!/./[ur]&&/./[ur]("a","$0")==="";Xg("replace",function(n,t,a){var o=Wa?"$":"$0";return[function(i,s){var l=a_(this),u=n_(i)?void 0:s_(i,ur);return u?Ka(u,i,l,s):Ka(t,Ge(l),i,s)},function(i,s){var l=Yg(this),u=Ge(i);if(typeof s=="string"&&Ga(s,o)===-1&&Ga(s,"$<")===-1){var d=a(t,l,u,s);if(d.done)return d.value}var e=e_(s);e||(s=Ge(s));var m,h=l.global;h&&(m=l.unicode,l.lastIndex=0);for(var g,f=[];(g=c_(l,u))!==null&&(Gt(f,g),h);)Ge(g[0])===""&&(l.lastIndex=i_(u,r_(l.lastIndex),m));for(var p,c="",r=0,S=0;S<f.length;S++){for(var w,O=Ge((g=f[S])[0]),T=l_(u_(t_(g.index),u.length),0),C=[],j=1;j<g.length;j++)Gt(C,(p=g[j])===void 0?p:String(p));var $=g.groups;if(e){var q=d_([O],C,T,u);$!==void 0&&Gt(q,$),w=Ge(Vg(s,void 0,q))}else w=o_(O,u,T,C,$,s);T>=r&&(c+=Ja(u,r,T)+w,r=T+O.length)}return c+Ja(u,r)}]},!!Qg(function(){var n=/./;return n.exec=function(){var t=[];return t.groups={a:"7"},t},"".replace(n,"$<a>")!=="7"})||!p_||Wa);var Za=ls,h_=Pe,m_=he,f_=Or.EXISTS,Ms=X,g_=function(n,t,a){return a.get&&Za(a.get,t,{getter:!0}),a.set&&Za(a.set,t,{setter:!0}),h_.f(n,t,a)},Ds=Function.prototype,__=Ms(Ds.toString),js=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,y_=Ms(js.exec);m_&&!f_&&g_(Ds,"name",{configurable:!0,get:function(){try{return y_(js,__(this))[1]}catch{return""}}}),se({target:"Array",stat:!0},{isArray:qr});var b_=at.map;se({target:"Array",proto:!0,forced:!$r("map")},{map:function(n){return b_(this,n,arguments.length>1?arguments[1]:void 0)}});var v_=se,S_=Vn,E_=nn,k_=it,O_=X([].join);v_({target:"Array",proto:!0,forced:S_!==Object||!k_("join",",")},{join:function(n){return O_(E_(this),n===void 0?",":n)}});var w_=!Q(function(){function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype}),T_=me,A_=ie,N_=Ie,C_=w_,Va=wr("IE_PROTO"),dr=Object,x_=dr.prototype,R_=C_?dr.getPrototypeOf:function(n){var t=N_(n);if(T_(t,Va))return t[Va];var a=t.constructor;return A_(a)&&t instanceof a?a.prototype:t instanceof dr?x_:null},Is=he,q_=Q,Ps=X,L_=R_,$_=jr,M_=nn,Us=Ps(gr.f),D_=Ps([].push),j_=Is&&q_(function(){var n=Object.create(null);return n[2]=2,!Us(n,2)}),Xa=function(n){return function(t){for(var a,o=M_(t),i=$_(o),s=j_&&L_(o)===null,l=i.length,u=0,d=[];l>u;)a=i[u++],Is&&!(s?a in o:Us(o,a))||D_(d,n?[a,o[a]]:o[a]);return d}},Bs={entries:Xa(!0),values:Xa(!1)},I_=Bs.entries;se({target:"Object",stat:!0},{entries:function(n){return I_(n)}});var P_=TypeError,U_=Er,B_=Pe,H_=_r,F_=se,z_=Q,K_=qr,G_=Se,J_=Ie,W_=rt,Qa=function(n){if(n>9007199254740991)throw P_("Maximum allowed index exceeded");return n},Ya=function(n,t,a){var o=U_(t);o in n?B_.f(n,o,H_(0,a)):n[o]=a},Z_=ks,V_=$r,X_=dn,Hs=fe("isConcatSpreadable"),Q_=X_>=51||!z_(function(){var n=[];return n[Hs]=!1,n.concat()[0]!==n}),Y_=function(n){if(!G_(n))return!1;var t=n[Hs];return t!==void 0?!!t:K_(n)};F_({target:"Array",proto:!0,arity:1,forced:!Q_||!V_("concat")},{concat:function(n){var t,a,o,i,s,l=J_(this),u=Z_(l,0),d=0;for(t=-1,o=arguments.length;t<o;t++)if(Y_(s=t===-1?l:arguments[t]))for(i=W_(s),Qa(d+i),a=0;a<i;a++,d++)a in s&&Ya(u,d,s[a]);else Qa(d+1),Ya(u,d++,s);return u.length=d,u}});var ey=Ie,ei=jr;se({target:"Object",stat:!0,forced:Q(function(){ei(1)})},{keys:function(n){return ei(ey(n))}});var ny=Re,ty=Ee,ry=Xn,ay=bn,Jt=Ue,iy=je,sy=yr,oy=Ls,ni=$s;qs("match",function(n,t,a){return[function(o){var i=iy(this),s=ry(o)?void 0:sy(o,n);return s?ny(s,o,i):new RegExp(o)[n](Jt(i))},function(o){var i=ty(this),s=Jt(o),l=a(t,i,s);if(l.done)return l.value;if(!i.global)return ni(i,s);var u=i.unicode;i.lastIndex=0;for(var d,e=[],m=0;(d=ni(i,s))!==null;){var h=Jt(d[0]);e[m]=h,h===""&&(i.lastIndex=oy(s,ay(i.lastIndex),u)),m++}return m===0?null:e}]});var cy=et,ly=Ie,uy=Vn,dy=rt,py=TypeError,ti=function(n){return function(t,a,o,i){cy(a);var s=ly(t),l=uy(s),u=dy(s),d=n?u-1:0,e=n?-1:1;if(o<2)for(;;){if(d in l){i=l[d],d+=e;break}if(d+=e,n?d<0:u<=d)throw new py("Reduce of empty array with no initial value")}for(;n?d>=0:u>d;d+=e)d in l&&(i=a(i,l[d],d,s));return i}},hy={left:ti(!1),right:ti(!0)},my=De(ae.process)==="process",fy=hy.left;se({target:"Array",proto:!0,forced:!my&&dn>79&&dn<83||!it("reduce")},{reduce:function(n){var t=arguments.length;return fy(this,n,t,t>1?arguments[1]:void 0)}});var Fs=X,gy=yn,Ur=Date.prototype,ri="Invalid Date",zs="toString",_y=Fs(Ur[zs]),yy=Fs(Ur.getTime);String(new Date(NaN))!==ri&&gy(Ur,zs,function(){var n=yy(this);return n==n?_y(this):ri});var by=Re,vy=me,Sy=Vi,Ey=Ts,ai=RegExp.prototype,ky=Or.PROPER,Oy=yn,wy=Ee,ii=Ue,Ty=Q,Ay=function(n){var t=n.flags;return t!==void 0||"flags"in ai||vy(n,"flags")||!Sy(ai,n)?t:by(Ey,n)},Br="toString",Ks=RegExp.prototype[Br],Ny=Ty(function(){return Ks.call({source:"a",flags:"b"})!=="/a/b"}),Cy=ky&&Ks.name!==Br;(Ny||Cy)&&Oy(RegExp.prototype,Br,function(){var n=wy(this);return"/"+ii(n.source)+"/"+ii(Ay(n))},{unsafe:!0});var xy=Bs.values;se({target:"Object",stat:!0},{values:function(n){return xy(n)}});var Ry=at.some;se({target:"Array",proto:!0,forced:!it("some")},{some:function(n){return Ry(this,n,arguments.length>1?arguments[1]:void 0)}});var si={"swift/urlsession":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
// Create a new URLRequest object
var request = URLRequest(url: URL(string: "`),e(m),e(`")!)

// Set the request method
request.httpMethod = "`),e(h),e(`"

// Set the request content type header
request.addValue("`),e(g),e(`", forHTTPHeaderField: "Content-Type")

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){_(this,i),e(`
request.addValue("`),e(t(r.value)),e('", forHTTPHeaderField: "'),e(t(r.name)),e(`")
`)}).bind(this))),e(`

`),c.length>0&&(e(`
// Add cookies to the request
`),c.forEach((function(r){_(this,i),e(`
request.addValue("`),e(t(r.value)),e('", forHTTPHeaderField: "'),e(t(r.name)),e(`")
`)}).bind(this))),e(`

`),h==="POST"&&p.length>0&&(e(`// Set the request body
`),p.length===1&&p[0].type==="file"?e(`
let fileUrl = URL(fileURLWithPath: "/path/to/file")
let data = try Data(contentsOf: fileUrl)
request.httpBody = data
`):(e(`
let postDataDict = `),e(t(JSON.stringify(p.reduce((function(r,S){return _(this,i),Array.isArray(S.value)||N(S.value),r[S.name]=S.value,r}).bind(this),{})))),e(`
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
`),d},"swift/alamofire":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
let fullUrl = "`),e(m),e(`"

// Set up the request headers
var headers: HTTPHeaders = [:]
`),g.forEach((function(c){_(this,i),e(`
headers["`),e(t(c.name)),e('"] = "'),e(t(c.value)),e(`"
`)}).bind(this)),e(`

`),p.length>0&&(e(`
// Add cookies to the request
`),p.forEach((function(c){_(this,i),e(`
let cookie = HTTPCookie(properties: [
    .domain: "`),e(t(c.domain)),e(`",
    .path: "`),e(t(c.path)),e(`",
    .name: "`),e(t(c.name)),e(`",
    .value: "`),e(t(c.value)),e(`",
])!
HTTPCookieStorage.shared.setCookie(cookie)
`)}).bind(this)),e(`
`)),e(`

// Set up the request parameters
var parameters: Parameters = [:]
`),f.forEach((function(c){_(this,i),e(`
`),Array.isArray(c.value)||N(c.value)==="object"?(e(`
if let jsonData = try? JSONSerialization.data(withJSONObject: `),e(t(JSON.stringify(c.value))),e(`, options: []) {
    if let jsonString = String(data: jsonData, encoding: .utf8) {
        parameters["`),e(t(c.name)),e(`"] = jsonString
    }
}
`)):(e(`
parameters["`),e(t(c.name)),e('"] = "'),e(t(c.value)),e(`"
`)),e(`
`)}).bind(this)),e(`

// Create the request
AF.request(fullUrl, method: .`),e(t(h.toLowerCase())),e(`, parameters: parameters, headers: headers).response { response in
    switch response.result {
    case .success(let data):
        if let data = data {
            print("Response:", String(data: data, encoding: .utf8)!)
        }
    case .failure(let error):
        print("Error:", error.localizedDescription)
    }
}
`),d},"scala/scalaj-http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import scalaj.http._

val url = "`),e(t(m)),e(`"
val method = "`),e(t(h)),e(`"
val mimeType = "`),e(t(g)),e(`"
val headers = `),f.length>0?(e(`Seq(
`),f.forEach((function(r){_(this,i),e(`
  ("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Nil"),e(`
val cookies = `),c.length>0?(e(`Seq(
`),c.forEach((function(r){_(this,i),e(`
  HttpCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Nil"),e(`
val postData = `),p.length>0?(e(`Seq(
`),p.forEach((function(r){_(this,i),e(`
`),Array.isArray(r.value)||N(r.value)==="object"?(e(`
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
`),d},"scala/http4s":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import cats.effect._
import org.http4s._
import org.http4s.client.blaze._
import org.http4s.client.dsl.io._
import org.http4s.headers._
import org.http4s.MediaType._

val url = "`),e(t(m)),e(`"
val method = "`),e(t(h)),e(`"
val mimeType = "`),e(t(g)),e(`"
val headers = `),f.length>0?(e(`Headers(
`),f.forEach((function(r){_(this,i),e(`
  Header.apply("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Headers.empty"),e(`
val cookies = `),c.length>0?(e(`Seq(
`),c.forEach((function(r){_(this,i),e(`
  RequestCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Seq.empty"),e(`
val postData = `),p.length>0?(e(`UrlForm(
`),p.forEach((function(r){_(this,i),e(`
`),Array.isArray(r.value)||N(r.value)==="object"?(e(`
  "`),e(t(r.name)),e('" -> "'),e(t(JSON.stringify(r.value))),e(`",
`)):(e(`
  "`),e(t(r.name)),e('" -> "'),e(t(r.value)),e(`",
`)),e(`
`)}).bind(this)),e(`
)`)):e("UrlForm.empty"),e(`

// Construct the request
implicit val cs = IO.contextShift(ExecutionContext.global)
val client = Http1Client[IO]().unsafeRunSync()
val request = Method.`),e(t(h.toUpperCase())),e(`(Uri.unsafeFromString(url), postData)
  .withHeaders(headers)
  .withCredentials(Credentials(cookies))

// Send the request
val response = client.expect[String](request).unsafeRunSync()

// Handle the response
println("Response: " + response)

// Clean up
client.shutdownNow()
`),d},"scala/akka":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer
import akka.stream.scaladsl._
import scala.concurrent.Future
import scala.util.{Failure, Success}

val url = "`),e(t(m)),e(`"
val method = "`),e(t(h)),e(`"
val mimeType = "`),e(t(g)),e(`"
val headers = List(
`),f.forEach((function(r){_(this,i),e(`
  HttpHeader.parse("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[HttpHeader],
`)}).bind(this)),e(`
)
val cookies = List(
`),c.forEach((function(r){_(this,i),e(`
  HttpCookiePair("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[HttpCookiePair],
`)}).bind(this)),e(`
)
val postData = List(
`),p.forEach((function(r){_(this,i),e(`
  `),Array.isArray(r.value)||N(r.value)==="object"?(e(`
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
  method = HttpMethods.`),e(t(h.toUpperCase())),e(`,
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
`),d},"rust/surf":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
use surf::http::{Method, Url, headers::{Headers, HeaderValue}};

// Construct the request URL
let url = Url::new("`),e(t(m)),e(`").unwrap();

// Set up the request
let mut req = surf::Request::new(`),e(t(h)),e(` , url);

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach((function(c){_(this,i),e(`
req.insert_header("`),e(t(c.name)),e('", HeaderValue::from_str("'),e(t(c.value)),e(`").unwrap());
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
// Add cookies to the request
`),p.forEach((function(c){_(this,i),e(`
req.insert_cookie(surf::http::Cookie::new("`),e(t(c.name)),e('", "'),e(t(c.value)),e(`"));
`)}).bind(this)),e(`
`)),e(`

`),f.length>0&&(e(`
// Send the request
let body = `),f.length===1&&f[0].type==="file"?(e(`
surf::Body::from(surf::http::Form::from(`),f[0].value,e(`))
`)):(e(`
surf::Body::from("`),e(t(f.map((function(c){return _(this,i),Array.isArray(c.value)||N(c.value)==="object"?c.name+"="+encodeURIComponent(JSON.stringify(c.value)):c.name+"="+encodeURIComponent(c.value)}).bind(this)).join("&"))),e(`")
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
`),d},"rust/reqwest":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
let url = "`),e(t(m)),e(`";
let method = "`),e(t(h)),e(`";
let mime_type = "`),e(t(g)),e(`";

let headers = reqwest::header::HeaderMap::new();
`),f.forEach((function(r){_(this,i),e(`
headers.insert("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`".parse().unwrap());
`)}).bind(this)),e(`

let mut cookies = reqwest::cookie::CookieJar::new();
`),c.forEach((function(r){_(this,i),e(`
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
let post_data = "`),e(t(p.map((function(r){return _(this,i),Array.isArray(r.value)||N(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`";
let request_builder = request_builder.body(post_data);
`)),e(`
`)),e(`

let response = request_builder.send().await.unwrap();
let response_text = response.text().await.unwrap();
println!("Response: {}", response_text);
`),d},"rust/hyper":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
// Create a new Hyper client object
let client = hyper::Client::new();

// Construct the request URL
let full_url = "`),e(t(m)),e(`";

// Create the request
let mut req = hyper::Request::new(hyper::Method::`),e(t(h)),e(`, full_url);

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){_(this,i),e(`
req.headers_mut().insert(hyper::header::`),e(t(r.name)),e(", "),e(t(r.value)),e(`.parse().unwrap());
`)}).bind(this)),e(`
`)),e(`

`),c.length>0&&(e(`
// Add cookies to the request
`),c.forEach((function(r){_(this,i),e(`
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
let body = hyper::Body::from("`),e(t(p.map((function(r){return _(this,i),Array.isArray(r.value)||N(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`");
`)),e(`
req.headers_mut().insert(hyper::header::CONTENT_TYPE, "`),e(t(g)),e(`".parse().unwrap());
req.headers_mut().insert(hyper::header::CONTENT_LENGTH, body.len().into());
req.set_body(body);
`)),e(`

// Send the request and get the response
let res = client.request(req).await?;

// Print the response
println!("Response: \\n{:?}", res);
`),d},"ruby/restclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
require 'rest-client'

url = "`),e(t(m)),e(`"
method = "`),e(t(h)),e(`"
mimeType = "`),e(t(g)),e(`"

headers = {
  `),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" => "'),e(t(r.value)),e(`",
  `)}).bind(this)),e(`
}

cookies = {
  `),c.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" => "'),e(t(r.value)),e(`",
  `)}).bind(this)),e(`
}

`),h==="GET"?e(`
  response = RestClient.get(url, headers: headers, cookies: cookies)
`):(e(`
  body = "`),e(t(p.map((function(r){return _(this,i),Array.isArray(r.value)||N(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`"
  response = RestClient::`),e(t(h.downcase)),e(`(url, body, headers: headers, cookies: cookies, content_type: mimeType)
`)),e(`

puts "Response: #{response.body}"
`),d},"ruby/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
require 'net/http'
require 'uri'

url = URI("`),e(t(m)),e(`")
method = "`),e(t(h)),e(`"
mimeType = "`),e(t(g)),e(`"

`),h==="GET"?e(`
  req = Net::HTTP::Get.new(url)
`):(e(`
  body = "`),e(t(p.map((function(r){return _(this,i),Array.isArray(r.value)||N(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`"
  req = Net::HTTP::`),e(t(h.capitalize)),e(`.new(url)
  req.body = body
  req.content_type = mimeType
`)),e(`

`),f.forEach((function(r){_(this,i),e(`
  req['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`'
`)}).bind(this)),e(`

`),c.forEach((function(r){_(this,i),e(`
  req['Cookie'] = '`),e(t(r.name)),e("="),e(t(r.value)),e(`'
`)}).bind(this)),e(`

res = Net::HTTP.start(url.hostname, url.port, use_ssl: url.scheme == 'https') do |http|
  http.request(req)
end

puts "Response: #{res.body}"
`),d},"python/requests":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import requests

# Extract parameters from the options object
fullUrl = "`),e(t(m)),e(`"
method = "`),e(t(h)),e(`"
mimeType = "`),e(t(g)),e(`"
headers = {
    `),f.forEach((function(r){_(this,i),e(`
        '`),e(t(r.name)),e("': '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
}
postData = {
`),p.forEach((function(r){_(this,i),e(`
'`),e(t(r.name)),e("': "),Array.isArray(r.value)||N(r.value)==="object"?(e(`
    '`),e(t(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(t(r.value)),e(`',
`)),e(`
`)}).bind(this)),e(`
}
cookies = {
    `),c.forEach((function(r){_(this,i),e(`
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
`),d},"python/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import http.client

# Extract parameters from the options object
fullUrl = "`),e(t(m)),e(`"
method = "`),e(t(h)),e(`"
mimeType = "`),e(t(g)),e(`"
headers = [
    `),f.forEach((function(r){_(this,i),e(`
        ('`),e(t(r.name)),e("', '"),e(t(r.value)),e(`'),
    `)}).bind(this)),e(`
]
postData = {
`),p.forEach((function(r){_(this,i),e(`
'`),e(t(r.name)),e("': "),Array.isArray(r.value)||N(r.value)==="object"?(e(`
    '`),e(t(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(t(r.value)),e(`',
`)),e(`
`)}).bind(this)),e(`
}
cookies = {
    `),c.forEach((function(r){_(this,i),e(`
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
`),d},"powershell/webrequest":function(n,t,a,o){var i=this;t=t||function(m){return m==null?"":String(m).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(m){return s[m]||m}var d="";function e(m){m!=null&&(d+=m)}return e('$url = "'),e(t(url)),e(`"
$method = "`),e(t(method)),e(`"
$mimeType = "`),e(t(mimeType)),e(`"

$headers = @{
`),headers.forEach((function(m){_(this,i),e(`
  "`),e(t(m.name)),e('" = "'),e(t(m.value)),e(`",
`)}).bind(this)),e(`
}

$cookies = @{
`),cookies.forEach((function(m){_(this,i),e(`
  "`),e(t(m.name)),e('" = "'),e(t(m.value)),e(`",
`)}).bind(this)),e(`
}

`),method==="GET"?e(`
  $req = Invoke-WebRequest -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),postData.forEach((function(m){_(this,i),e(`
    "`),e(t(m.name)),e('" = '),Array.isArray(m.value)||N(m.value)==="object"?(e(`
      `),e(t(JSON.stringify(m.value))),e(` | ConvertTo-Json -Depth 100 -Compress
    `)):(e(`
      '`),e(t(m.value)),e(`'
    `)),e(`,
  `)}).bind(this)),e(`
  }

  $req = Invoke-WebRequest -Uri $url -Method $method -Body $body -Headers $headers -ContentType $mimeType -Cookies $cookies
`)),e(`

Write-Host "Response: " -ForegroundColor Green
Write-Host $req.Content
`),d},"powershell/restmethod":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
$url = "`),e(t(m)),e(`"
$method = "`),e(t(h)),e(`"
$mimeType = "`),e(t(g)),e(`"

$headers = @{
`),f.forEach((function(r){_(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
}

$cookies = @{
`),c.forEach((function(r){_(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
}

`),h==="GET"?e(`
  $req = Invoke-RestMethod -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),p.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" = '),Array.isArray(r.value)||N(r.value)==="object"?(e(`
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
`),d},"php/http2":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php
    $host = parse_url("`),e(t(m)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(t(m)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),g.forEach((function(c){_(this,i),e(' "'),e(t(c.name)),e('" => "'),e(t(c.value)),e('", ')}).bind(this)),e(` );
    $httpCookies = array( `),p.forEach((function(c){_(this,i),e(' "'),e(t(c.name)),e('" => "'),e(t(c.value)),e('", ')}).bind(this)),e(` );
    $httpBody = null;
    if ("`),e(t(h)),e(`" === "POST") {
        `),Array.isArray(f)?(e(`
        $postData = array( `),f.forEach((function(c){_(this,i),e(" '"),e(t(c.name)),e("' => '"),e(t(Array.isArray(c.value)?JSON.stringify(c.value):encodeURIComponent(c.value))),e("', ")}).bind(this)),e(` );
        $httpBody = http_build_query($postData);
        `)):N(f)==="object"&&(e(`
        $httpBody = json_encode(`),e(t(f)),e(`);
    `)),e(`
    }
    $streamContext = stream_context_create([
        'http' => [ 'method' => "`),e(t(h)),e(`",
        'header' => implode("\\r\\n", $httpHeaders),
        'content' => $httpBody, 'follow_location' => false,
        'protocol_version' => 2.0,
    ],
        'ssl' => [ 'verify_peer' => false, 'verify_peer_name' => false, ],
    ]);
    $response = file_get_contents("https://$host$path", false, $streamContext);
    echo "Response: " . $response;
?>
`),d},"php/http1":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php
    $host = parse_url("`),e(t(m)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(t(m)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),g.forEach((function(c){_(this,i),e(' "'),e(t(c.name)),e(": "),e(t(c.value)),e('", ')}).bind(this)),e(` );
    $httpCookies = array( `),p.forEach((function(c){_(this,i),e(' "'),e(t(c.name)),e('" => "'),e(t(c.value)),e('", ')}).bind(this)),e(` );
    $httpBody = null;
    if ("`),e(t(h)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
    $httpBody = new http\\Message\\Body(fopen('`),e(t(f[0].value)),e(`', 'r'));
    `)):(e(`
     $postData = array( `),f.forEach((function(c){_(this,i),e(" '"),e(t(c.name)),e("' => '"),e(t(Array.isArray(c.value)?JSON.stringify(c.value):encodeURIComponent(c.value))),e("', ")}).bind(this)),e(` );
     $httpBody = new http\\Message\\Body(http_build_query($postData));
    `)),e(" ")):N(f)==="object"&&(e(`
    $postData = '`),e(t(JSON.stringify(f))),e(`';
    $httpBody = new http\\Message\\Body($postData);
    `)),e(` }
    $request = new http\\Client\\Request("`),e(t(h)),e(`", "http://$host$path");
    $request->setHeaders($httpHeaders);
    $request->setCookies($httpCookies);
    $request->setBody($httpBody);
    $client = new http\\Client;
    $client->enqueue($request);
    $response = $client->send();
    echo "Response: " . $response->getBody();
?>
`),d},"php/guzzle":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
<?php
    use GuzzleHttp\\Exception\\RequestException;
    $client = new Client();
    $url = "`),e(t(m)),e(`";
    $headers = array( `),g.forEach((function(c){_(this,i),e(' "'),e(t(c.name)),e('" => "'),e(t(c.value)),e('", ')}).bind(this)),e(` );
    $cookies = array( `),p.forEach((function(c){_(this,i),e(' "'),e(t(c.name)),e('" => "'),e(t(c.value)),e('", ')}).bind(this)),e(` );
    $requestBody = null;
    if ("`),e(t(h)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
        $requestBody = array( 'multipart' => [ [ 'name' => '`),e(t(f[0].name)),e("', 'contents' => fopen('"),e(t(f[0].value)),e(`', 'r') ] ] );
    `)):(e(`
        $postData = array( `),f.forEach((function(c){_(this,i),e(" '"),e(t(c.name)),e("' => '"),e(t(Array.isArray(c.value)?JSON.stringify(c.value):encodeURIComponent(c.value))),e("', ")}).bind(this)),e(` );
        $requestBody = http_build_query($postData);
    `)),e(`
    `)):N(f)==="object"&&(e(`
    $postData = '`),e(t(JSON.stringify(f))),e(`';
    $requestBody = $postData;
    `)),e(` }
    try {
        $response = $client->request('`),e(t(h)),e(`', $url, [
            'headers' => $headers,
            'cookies' => $cookies,
            'body' => $requestBody,
        ]);
        echo "Response: " . $response->getBody();
    } catch (RequestException $e) {
        echo "Error: " . $e->getMessage();
    }

?>
`),d},"php/curl":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php

    $url = "`),e(t(m)),e(`";
    $requestHeaders = array( `),g.forEach((function(c){_(this,i),e(' "'),e(t(c.name)),e(": "),e(t(c.value)),e('", ')}).bind(this)),e(` );
    $requestCookies = array( `),p.forEach((function(c){_(this,i),e(' "'),e(t(c.name)),e("=<"),e(t(c.value)),e('>", ')}).bind(this)),e(` );
    $requestBody = null; if ("`),e(t(h)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
    $requestBody = array( '`),e(t(f[0].name)),e("' => new [](poeCURLFile('"),e(t(f[0].value)),e(`') );
    `)):(e(`
    $postData = array( `),f.forEach((function(c){_(this,i),e(`
        '`),e(t(c.name)),e("' => '"),e(t(Array.isArray(c.value)?JSON.stringify(c.value):encodeURIComponent(c.value))),e(`',
    `)}).bind(this)),e(` );
    $requestBody = http_build_query($postData); `)),e(`
    `)):N(f)==="object"&&(e(`
    $postData = array( `),Object.keys(f).forEach((function(c){_(this,i),e(`
        '`),e(t(c)),e("' => '"),e(t(Array.isArray(f[c])?JSON.stringify(f[c]):encodeURIComponent(f[c]))),e(`',
    `)}).bind(this)),e(` );
    $requestBody = http_build_query($postData); `)),e(` } $ch = curl_init(); curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_setopt($ch, CURLOPT_HTTPHEADER, $requestHeaders);
    curl_setopt($ch, CURLOPT_COOKIE, implode("; ", $requestCookies));
    if ("`),e(t(h)),e(`" === "POST") {
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $requestBody); }
    $response = curl_exec($ch);
    curl_close($ch);
    echo "Response: " . $response;
?>
`),d},"perl/useragent":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
`),e(`
use LWP::UserAgent;
my $ua = LWP::UserAgent->new;

`),e(`
my $fullUrl = '`),e(t(m)),e(`';

`),e(`
my $request = HTTP::Request->new('`),e(t(h)),e(`', $fullUrl);

`),g.length>0&&(e(`
`),e(`
`),g.forEach((function(c){_(this,i),e(`
    $request->header('`),e(t(c.name)),e("', '"),e(t(c.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
`),e(`
`),p.forEach((function(c){_(this,i),e(`
    $ua->cookie_jar->set_cookie(0, '`),e(t(c.name)),e("', '"),e(t(c.value)),e(`', '/', 'example.com');
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
`),f.forEach((function(c){_(this,i),e(`
    '`),e(t(c.name)),e("' => '"),e(t(Array.isArray(c.value)?JSON.stringify(c.value):c.value)),e(`',
`)}).bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):N(f)==="object"&&(e(`
my $post_data = {
`),Object.keys(f).forEach((function(c){_(this,i),e(`
'`),e(t(c)),e("' => '"),e(t(Array.isArray(f[c])?JSON.stringify(f[c]):f[c])),e(`',
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
`),d},"perl/tiny":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
`),e(`
use HTTP::Tiny;
my $http = HTTP::Tiny->new;

`),e(`
my $fullUrl = '`),e(t(m)),e(`';

`),e(`
my $options = {
headers => {
    'Content-Type' => '`),e(t(g)),e(`',
    `),f.forEach((function(r){_(this,i),e(`
    '`),e(t(r.name)),e("' => '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
},
`),c.forEach((function(r){_(this,i),e(`
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
`)):N(p)==="object"&&(e(`
my $post_data = {
`),Object.keys(p).forEach((function(r){_(this,i),e(`
    '`),e(t(r)),e("' => '"),e(t(Array.isArray(p[r])?JSON.stringify(p[r]):p[r])),e(`',
`)}).bind(this)),e(`
};
$options->{content} = join('&', map { $ . '=' . $post_data->{$_} } keys %$post_data);
`)),e(`
`)),e(`

`),e(`
my $response = $http->request('`),e(t(h)),e(`', $fullUrl, $options);

`),e(`
if ($response->{success}) {
    print "Response:\\n";
    print $response->{content};
}
`),e(`
else {
    print "Error: " . $response->{status} . "\\n";
}
`),d},"perl/request":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
`),e(`
use HTTP::Request;
my $request = HTTP::Request->new('`),e(t(h)),e("', '"),e(t(m)),e(`');

`),g.length>0&&(e(`
`),e(`
`),g.forEach((function(c){_(this,i),e(`
$request->header('`),e(t(c.name)),e("', '"),e(t(c.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
`),e(`
`),p.forEach((function(c){_(this,i),e(`
$request->header('Cookie', '`),e(t(c.name)),e("="),e(t(c.value)),e(`');
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
`),f.forEach((function(c){_(this,i),e(`
    '`),e(t(c.name)),e("' => '"),e(t(Array.isArray(c.value)?JSON.stringify(c.value):c.value)),e(`',
`)}).bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):N(f)==="object"&&(e(`
my $post_data = {
`),Object.keys(f).forEach((function(c){_(this,i),e(`
'`),e(t(c)),e("' => '"),e(t(Array.isArray(f[c])?JSON.stringify(f[c]):f[c])),e(`',
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
`),d},"ocaml/httpaf":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
(* Construct the request URL *)
let fullUrl = "`),e(t(m)),e(`" in
let headers = Httpaf.Headers.of_list [
  "Content-Type", "`),e(t(g)),e(`";
  `),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('", "'),e(t(r.value)),e(`";
  `)}).bind(this)),e(`
  `),c.forEach((function(r){_(this,i),e(`
    "Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
  `)}).bind(this)),e(`
] in
let body =
`),p.length>0?(e(`
  (match `),e(t(h)),e(` with
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
  (Httpaf.Method.of_string "`),e(t(h)),e(`")
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
`),d},"ocaml/cohttp_lwt":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
(* Set up the request *)
let fullUrl = "`),e(t(m)),e(`" in
let headers = Cohttp.Header.of_list [
  "Content-Type", "`),e(t(g)),e(`";
    `),f.forEach((function(r){_(this,i),e(`
      "`),e(t(r.name)),e('", "'),e(t(r.value)),e(`";
    `)}).bind(this)),e(`
    `),c.forEach((function(r){_(this,i),e(`
      "Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
    `)}).bind(this)),e(`
    ] in
  let body =
  `),p.length>0?(e(`
    (match `),e(t(h)),e(` with
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
let req = Cohttp_lwt_unix.Client.call (`),e(t(h)),e(` |> Cohttp.Code.method_of_string) fullUrl ~headers ~body in
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
`),d},"objectivec/nsurlsession":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(m),e(`";
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),f.forEach((function(r){_(this,i),e(`
    [headers setObject:@"`),e(t(r.value)),e('" forKey:@"'),e(t(r.name)),e(`"];
`)}).bind(this)),e(`
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),p.forEach((function(r){var S=this;_(this,i),e(`
`),Array.isArray(r.value)?(e(`
    NSMutableArray *`),e(t(r.name)),e(`Array = [NSMutableArray array];
    `),r.value.forEach((function(w){var O=this;_(this,S),e(`
    `),N(w)==="object"?(e(`
    NSDictionary *`),e(t(r.name)),e(`Item = @{
    `),Object.keys(w).forEach((function(T){_(this,O),e(`
        @"`),e(t(T)),e('": '),e(t(JSON.stringify(w[T]))),e(`,
    `)}).bind(this)),e(`
    };
    [`),e(t(r.name)),e("Array addObject:"),e(t(r.name)),e(`Item];
    `)):(e(`
        [`),e(t(r.name)),e('Array addObject:@"'),e(t(w)),e(`"];
    `)),e(`
    `)}).bind(this)),e(`
    [parameters setObject:`),e(t(r.name)),e('Array forKey:@"'),e(t(r.name)),e(`"];
`)):N(r.value)==="object"?(e(`
    NSDictionary *`),e(t(r.name)),e(`Dict = @{
    `),Object.keys(r.value).forEach((function(w){_(this,S),e(`
        @"`),e(t(w)),e('": '),e(t(JSON.stringify(r.value[w]))),e(`,
    `)}).bind(this)),e(`
    };
    [parameters setObject:`),e(t(r.name)),e('Dict forKey:@"'),e(t(r.name)),e(`"];
`)):(e(`
    [parameters setObject:@"`),e(t(r.value)),e('" forKey:@"'),e(t(r.name)),e(`"];
`)),e(`
`)}).bind(this)),e(`
NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:fullUrl]];
request.HTTPMethod = @"`),e(t(h)),e(`";
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
`),c.forEach((function(r){_(this,i),e(`
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
`),d},"objectivec/afnetworking":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(m),e(`";

// Set up the request headers
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),g.forEach((function(c){_(this,i),e(`
    [headers setObject:@"`),e(t(c.value)),e('" forKey:@"'),e(t(c.name)),e(`"];
`)}).bind(this)),e(`

// Add cookies to the request
`),p.forEach((function(c){_(this,i),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(t(c.domain)),e(`",
    NSHTTPCookiePath: @"`),e(t(c.path)),e(`",
    NSHTTPCookieName: @"`),e(t(c.name)),e(`",
    NSHTTPCookieValue: @"`),e(t(c.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
`)}).bind(this)),e(`

// Set up the request parameters
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),f.forEach((function(c){var r=this;_(this,i),e(`
    `),Array.isArray(c.value)?(e(`
    NSMutableArray *`),e(t(c.name)),e(`Array = [NSMutableArray array];
    `),c.value.forEach((function(S){_(this,r),e(`
    `),N(S)==="object"?(e(`
    NSDictionary *`),e(t(c.name)),e(`Object = @{
        '`),e(t(Object.keys(S)[0])),e("': "),e(t(JSON.stringify(S[Object.keys(S)[0]]))),e(`,
    };
    [`),e(t(c.name)),e("Array addObject:"),e(t(c.name)),e(`Object];
    `)):(e(`
        [`),e(t(c.name)),e('Array addObject:@"'),e(t(encodeURIComponent(S))),e(`"];
    `)),e(`
    `)}).bind(this)),e(`
    [parameters setObject:`),e(t(c.name)),e('Array forKey:@"'),e(t(c.name)),e(`"];
    `)):N(c.value)==="object"?(e(`
        NSDictionary *`),e(t(c.name)),e(`Object = @{
        '`),e(t(Object.keys(c.value)[0])),e("': "),e(t(JSON.stringify(c.value[Object.keys(c.value)[0]]))),e(`,
        };
        [parameters setObject:`),e(t(c.name)),e('Object forKey:@"'),e(t(c.name)),e(`"];
    `)):(e(`
        [parameters setObject:@"`),e(t(encodeURIComponent(c.value))),e('" forKey:@"'),e(t(c.name)),e(`"];
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
NSString *method = @"`),e(t(h)),e(`";
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
`),d},"lua/httpclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
local http_client = require("httpclient")

-- Extract parameters from the options object
local url = '`),e(t(m)),e(`'
local method = '`),e(t(h)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){var S=this;_(this,i),e(`
    ['`),e(t(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
        {
        `),r.value.forEach((function(w,O){_(this,S),e(`
            `),N(w)==="object"?(e(`
                ['`),e(t(Object.keys(w)[0])),e("'] = "),e(t(JSON.stringify(w[Object.keys(w)[0]]))),e(`,
            `)):(e(`
                `),e(t(O)),e(" = '"),e(t(encodeURIComponent(w))),e(`',
            `)),e(`
        `)}).bind(this)),e(`
        },
    `)):N(r.value)==="object"?(e(`
        {
        ['`),e(t(Object.keys(r.value)[0])),e("'] = "),e(t(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
        },
    `)):(e(`
        '`),e(t(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),c.forEach((function(r){_(this,i),e(`
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
`),d},"lua/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
local http = require("socket.http")
local ltn12 = require("ltn12")

-- Extract parameters from the options object
local url = '`),e(t(m)),e(`'
local method = '`),e(t(h)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){var S=this;_(this,i),e(`
    ['`),e(t(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
    {
    `),r.value.forEach((function(w,O){_(this,S),e(`
    `),N(w)==="object"?(e(`
        ['`),e(t(Object.keys(w)[0])),e("'] = "),e(t(JSON.stringify(w[Object.keys(w)[0]]))),e(`,
    `)):(e(`
        `),e(t(O)),e(" = '"),e(t(encodeURIComponent(w))),e(`',
    `)),e(`
    `)}).bind(this)),e(`
    },
    `)):N(r.value)==="object"?(e(`
    {
    ['`),e(t(Object.keys(r.value)[0])),e("'] = "),e(t(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
    },
    `)):(e(`
    '`),e(t(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),c.forEach((function(r){_(this,i),e(`
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
`),d},"lua/curl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
local curl = require("cURL")

-- Extract parameters from the options object
local url = '`),e(t(m)),e(`'
local method = '`),e(t(h)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){_(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){_(this,i),e(`
    `),Array.isArray(r.value)||N(r.value)==="object"?(e(`
    ['`),e(t(r.name)),e("'] = "),e(t(JSON.stringify(r.value))),e(`,
    `)):(e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),c.forEach((function(r){_(this,i),e(`
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
`),d},"kotlin/okhttp3":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import okhttp3.*
import java.io.IOException

val client = OkHttpClient()

val url = "`),e(t(m)),e(`"
val method = "`),e(t(h)),e(`"
val mimeType = "`),e(t(g)),e(`"

val body = `),p.length>0?(e(`
  `),p.forEach((function(r){_(this,i),e(`
  `),Array.isArray(r.value)||N(r.value)==="object"?(e(`
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
.`),e(t(h.toLowerCase())),e(`(body)
`),f.forEach((function(r){_(this,i),e(`
  .addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`),c.forEach((function(r){_(this,i),e(`
  .addHeader("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`")
`)}).bind(this)),e(`
.build()

val response = client.newCall(request).execute()

println("Response: " + response.body()?.string())
`),d},"kotlin/java":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

val url = URL("`),e(t(m)),e(`")
val connection = url.openConnection() as HttpURLConnection
connection.requestMethod = "`),e(t(h)),e(`"

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){_(this,i),e(`
connection.setRequestProperty("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`)),e(`

`),c.length>0&&(e(`
// Add cookies to the request
`),c.forEach((function(r){_(this,i),e(`
connection.addRequestProperty("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`)),e(`

// Send the request
`),p.length>0?h==="POST"?(e(`
val postData = "`),e(t(p.map((function(r){var S=this;if(_(this,i),Array.isArray(r.value))return r.value.map((function(T){return _(this,S),encodeURIComponent(T.toString(),"UTF-8")}).bind(this)).map((function(T){return _(this,S),r.name+"="+T}).bind(this)).join("&");if(N(r.value)==="object"){var w=Object.values(r.value).map((function(T){return _(this,S),encodeURIComponent(T.toString(),"UTF-8")}).bind(this)),O=Object.keys(r.value);return w.map((function(T,C){return _(this,S),r.name+"["+O[C]+"]="+T}).bind(this)).join("&")}return r.name+"="+encodeURIComponent(r.value.toString(),"UTF-8")}).bind(this)).join("&"))),e(`".toByteArray(Charsets.UTF_8)
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
`),d},"kotlin/fuel":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import com.github.kittinunf.fuel.*
import com.github.kittinunf.fuel.core.*
import com.github.kittinunf.result.*

val fullUrl = "`),e(t(m)),e(`"

val requestHeaders = listOf(
    `),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)}).bind(this)),e(`
)

val requestCookies = listOf(
    `),c.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)}).bind(this)),e(`
)

val parameters = listOf(
    `),p.forEach((function(r){_(this,i),e(`
    `),Array.isArray(r.value)||N(r.value)==="object"?(e(`
    "`),e(t(r.name)),e('" to '),e(t(JSON.stringify(r.value))),e(`,
    `)):(e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)),e(`
    `)}).bind(this)),e(`
)

val request = Fuel.request(Method.`),e(t(h)),e(`, fullUrl)
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
`),d},"javascript/jquery":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
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
  `),c.forEach((function(r){_(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
const url = '`),e(t(m)),e(`';
const method = '`),e(t(h)),e(`';
const mimeType = '`),e(t(g)),e(`';
const headers = {
  `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),c.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/fetch":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
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
  `),c.forEach((function(r){_(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
const url = '`),e(t(m)),e(`';
const method = '`),e(t(h)),e(`';
const mimeType = '`),e(t(g)),e(`';
const headers = {
  `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),c.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/axios":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
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
  `),c.forEach((function(r){_(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
const url = '`),e(t(m)),e(`';
const method = '`),e(t(h)),e(`';
const mimeType = '`),e(t(g)),e(`';
const headers = {
  `),f.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),c.forEach((function(r){_(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/xmlhttprequest":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
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
const url = '`),e(t(m)),e(`';
const method = '`),e(t(h)),e(`';
const mimeType = '`),e(t(g)),e(`';
const headers = [
  `),f.forEach((function(r){_(this,i),e("{ name: '"),e(t(r.name)),e("', value: '"),e(t(r.value)),e("' },")}).bind(this)),e(`
];
const cookies = [
  `),c.forEach((function(r){_(this,i),e("{ name: '"),e(t(r.name)),e("', value: '"),e(t(r.value)),e("' },")}).bind(this)),e(`
];

const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"java/unirest":function(n,t,a,o){var i=this;t=t||function(w){return w==null?"":String(w).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(w){return s[w]||w}var d="";function e(w){w!=null&&(d+=w)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;if(e(`
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class Main {
    public static void main(String[] args) {
        // Construct the request URL
        String fullUrl = "`),e(t(m)),e(`";

        // Set up the request
        com.mashape.unirest.http.HttpRequestWithBody request =
        Unirest.`),e(t(h.toLowerCase())),e(`(fullUrl)
            .header("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(w){_(this,i),e(`
        request.header("`),e(t(w.name)),e('", "'),e(t(w.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),c.length>0&&(e(`
        // Add cookies to the request
        `),c.forEach((function(w){_(this,i),e(`
        request.cookie("`),e(t(w.name)),e('", "'),e(t(w.value)),e(`");
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
        `);var r=p.filter((function(w){return _(this,i),!Array.isArray(w.value)}).bind(this));e(`
        `);var S=p.filter((function(w){return _(this,i),Array.isArray(w.value)}).bind(this));e(`
        request.field("`),e(t(r.map((function(w){return _(this,i),w.name}).bind(this)).join('", "'))),e(`",
        `),e(t(r.map((function(w){return _(this,i),'encodeURIComponent("'+w.value+'")'}).bind(this)).join(", "))),e(`
        `),S.length>0&&(e(`
        `),S.forEach((function(w){var O=this;_(this,i),e(`
            , "`),e(t(w.name)),e(`[]",
            `),e(t(w.value.map((function(T){return _(this,O),'encodeURIComponent("'+T+'")'}).bind(this)).join(", "))),e(`
        `)}).bind(this)),e(`
        `)),e(`
        );
        `)}else e(`
        request.body("`),e(t(p.map((function(w){return _(this,i),w.value}).bind(this)).join(""))),e(`");
        `);e(`
        `)}e(`
        `)}else N(p)==="object"&&(e(`
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
`),d},"java/okhttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import java.io.IOException;
import okhttp3.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // Construct the request URL
        String fullUrl = "`),e(t(m)),e(`";

        // Set up the request
        OkHttpClient client = new OkHttpClient();
        Request.Builder requestBuilder = new Request.Builder()
            .url(fullUrl)
            .method("`),e(t(h)),e(`", null)
            .addHeader("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        requestBuilder.addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),c.length>0&&(e(`
        // Add cookies to the request
        `),c.forEach((function(r){_(this,i),e(`
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
`),d},"java/nethttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
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
        String fullUrl = "`),e(t(m)),e(`";

        // Set up the request
        URL url = new URL(fullUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("`),e(t(h)),e(`");
        connection.setRequestProperty("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        connection.setRequestProperty("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),c.length>0&&(e(`
        // Add cookies to the request
        `),c.forEach((function(r){_(this,i),e(`
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
`),d},"java/asynchttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
import org.asynchttpclient.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Construct the request URL
        String fullUrl = "`),e(t(m)),e(`";

        // Set up the request
        AsyncHttpClient client = Dsl.asyncHttpClient();
        RequestBuilder requestBuilder = new RequestBuilder("`),e(t(h)),e(`")
        .setUrl(fullUrl)
        .addHeader("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        requestBuilder.addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),c.length>0&&(e(`
        // Add cookies to the request
        `),c.forEach((function(r){_(this,i),e(`
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
`),d},"http/rfc7230":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
// https://www.rfc-editor.org/rfc/rfc7230
`),h==="GET"?(e(`
`),e(t(h)),e(" "),e(t(m)),e(` HTTP/1.1
`)):(e(`
`),e(t(h)),e(" "),e(t(m)),e(` HTTP/1.1
Content-Type: `),e(t(g)),e(`
`)),e(`

`),f.forEach((function(r){_(this,i),e(`
`),e(t(r.name)),e(": "),e(t(r.value)),e(`
`)}).bind(this)),e(`

`),c.forEach((function(r){_(this,i),e(`
Cookie: `),e(t(r.name)),e("="),e(t(r.value)),e(`
`)}).bind(this)),e(`

`),h==="POST"&&p.length>0&&(e(`
`),g==="application/x-www-form-urlencoded"?(e(`
`),e(t(p.map((function(r){return _(this,i),r.name+"="+encodeURIComponent(Array.isArray(r.value)||N(r.value)==="object"?JSON.stringify(r.value):r.value)}).bind(this)).join("&"))),e(`
`)):g==="application/json"?(e(`
`),e(t(JSON.stringify(p))),e(`
`)):g==="multipart/form-data"?(e(`
`),p.forEach((function(r){_(this,i),e(`
--`),e(t("boundary-"+Math.random().toString().substr(2))),e(`
Content-Disposition: form-data; name="`),e(t(r.name)),e(`"

`),e(t(Array.isArray(r.value)||N(r.value)==="object"?JSON.stringify(r.value):r.value)),e(`
`)}).bind(this)),e(`
--`),e(t("boundary-"+Math.random().toString().substr(2))),e(`-->
`)):(e(`
`),p.forEach((function(r){_(this,i),e(`
`),e(t(r.name)),e(": "),e(t(r.value)),e(`
`)}).bind(this)),e(`
`)),e(`
`)),e(`
`),d},"go/http":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

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
	url := "`),e(t(m)),e(`"

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
	`),f.forEach((function(c){var r=this;_(this,i),e(`
	`),Array.isArray(c.value)?(e(`
	`),c.value.forEach((function(S){_(this,r),e(`
	form.Add("`),e(t(c.name)),e('[]", fmt.Sprintf("%v", "'),e(t(S)),e(`"))
	`)}).bind(this)),e(`
	`)):N(c.value)==="object"?(e(`
	`),Object.keys(c.value).forEach((function(S){_(this,r),e(`
	form.Add("`),e(t(c.name)),e("["),e(t(S)),e(']", fmt.Sprintf("%v", "'),e(t(c.value[S])),e(`"))
	`)}).bind(this)),e(`
	`)):(e(`
	form.Add("`),e(t(c.name)),e('", fmt.Sprintf("%v", "'),e(t(c.value)),e(`"))
	`)),e(`
	`)}).bind(this)),e(`
	body = strings.NewReader(form.Encode())
	`)),e(`
	`)):e(`
	body = nil
	`),e(`

	// Create a new HTTP request
	req, err := http.NewRequest("`),e(t(h)),e(`", url, body)
	if err != nil {
		fmt.Println(err)
		return
	}

	`),g.length>0&&(e(`
	// Add headers to the request
	`),g.forEach((function(c){_(this,i),e(`
	req.Header.Set("`),e(t(c.name)),e('", "'),e(t(c.value)),e(`")
	`)}).bind(this)),e(`
	`)),e(`

	`),p.length>0&&(e(`
	// Add cookies to the request
	`),p.forEach((function(c){_(this,i),e(`
	req.AddCookie(&http.Cookie{Name: "`),e(t(c.name)),e('", Value: "'),e(t(c.value)),e(`"})
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
`),d},"go/fasthttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
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
    url := "`),e(t(m)),e(`"

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
    `),N(r.value)==="object"?e(`
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
    req.Header.SetMethod("`),e(t(h)),e(`")
    req.Header.SetContentType("`),e(t(g)),e(`")
    req.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36")

    `),f.length>0&&(e(`
    // Add headers to the request
    `),f.forEach((function(r){_(this,i),e(`
    req.Header.Add("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
    `)}).bind(this)),e(`
    `)),e(`

    `),c.length>0&&(e(`
    // Add cookies to the request
    `),c.forEach((function(r){_(this,i),e(`
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
`),d},"dart/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
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
    final url = '`),e(t(m)),e(`';
    final method = '`),e(t(h)),e(`';
    final mimeType = '`),e(t(g)),e(`';
    final headers = {
    `),f.forEach((function(r){_(this,i),e(`
        '`),e(t(r.name)),e("' : '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
    };
    final cookies = {
    `),c.forEach((function(r){_(this,i),e(`
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
`),d},"dart/dio":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
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
            `),p.some((function(r){return _(this,i),N(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
            std::string body = R"({`),p.forEach((function(r){_(this,i),N(r.value)==="object"||Array.isArray(r.value)?(e(`
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
    std::string url = "`),e(t(m)),e(`";
    std::string method = "`),e(t(h)),e(`";
    std::string mimeType = "`),e(t(g)),e(`";
    std::vector<std::string> headers = {
        `),f.forEach((function(r){_(this,i),e(`
        "`),e(t(r.name)),e(": "),e(t(r.value)),e(`",
        `)}).bind(this)),e(`
    };
    std::vector<std::string> cookies = {
        `),c.forEach((function(r){_(this,i),e(`
        "`),e(t(r.name)),e("="),e(t(r.value)),e(`",
        `)}).bind(this)),e(`
    };
    std::vector<std::string> postData = {
        `),p.forEach((function(r){_(this,i),e(`
        {
            "name": "`),e(t(r.name)),e(`",
            `),N(r.value)==="object"||Array.isArray(r.value)?(e(`
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
`),d},"csharp/restsharp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
using RestSharp;

class Program
{
    static void Main(string[] args)
    {
        // Construct the request URL
        var fullUrl = "`),e(t(m)),e(`";

        // Set up the request
        var client = new RestClient(fullUrl);
        var request = new RestRequest("`),e(t(h)),e('", Method.'),e(t(h.toUpperCase())),e(`);
        request.AddHeader("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        request.AddHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),c.length>0&&(e(`
        // Add cookies to the request
        `),c.forEach((function(r){_(this,i),e(`
        request.AddCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),p.some((function(r){return _(this,i),N(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
        var body = new {
            `),p.filter((function(r){return _(this,i),N(r.value)==="object"||Array.isArray(r.value)}).bind(this)).forEach((function(r){_(this,i),e(`
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
`),d},"csharp/httpclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Construct the request URL
        var fullUrl = "`),e(t(m)),e(`";

        // Set up the request
        var client = new HttpClient();
        var request = new HttpRequestMessage(new HttpMethod("`),e(t(h)),e(`"), fullUrl);
        request.Headers.Add("Content-Type", "`),e(t(g)),e(`");

        `),f.length>0&&(e(`
        // Add headers to the request
        `),f.forEach((function(r){_(this,i),e(`
        request.Headers.Add("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),c.length>0&&(e(`
        // Add cookies to the request
        `),c.forEach((function(r){_(this,i),e(`
        var cookie = new System.Net.Cookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e('", "/", "'),e(t(m)),e(`");
        clientHandler.CookieContainer.Add(cookie);
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),p.some((function(r){return _(this,i),N(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
        var formData = new MultipartFormDataContent();
        `),p.forEach((function(r){var S=this;_(this,i),Array.isArray(r.value)?(e(`
                `),r.value.forEach((function(w){_(this,S),e(`
                    formData.Add(new StringContent("`),e(t(w)),e('"), "'),e(t(r.name)),e(`[]");
                `)}).bind(this)),e(`
            `)):N(r.value)==="object"?(e(`
                `),Object.entries(r.value).forEach((function(w){_(this,S);var O=on(w,2),T=O[0],C=O[1];e(`
                    formData.Add(new StringContent("`),e(t(C)),e('"), "'),e(t(r.name)),e("["),e(t(T)),e(`]");
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
`),d},"cpp/iostream":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
std::string fullUrl = "`),e(m),e(`";

// Set up the request headers
std::map<std::string, std::string> headers;
`),g.forEach((function(c){_(this,i),e(`
headers["`),e(t(c.name)),e('"] = "'),e(t(c.value)),e(`";
`)}).bind(this)),e(`

// Add cookies to the request
std::string cookieString;
`),p.forEach((function(c){_(this,i),e(`
cookieString += "`),e(t(c.name)),e("="),e(t(c.value)),e(`; ";
`)}).bind(this)),e(`

// Set up the request parameters
std::map<std::string, std::string> parameters;
`),f.forEach((function(c){var r=this;_(this,i),e(`
`),Array.isArray(c.value)?(e(`
`),c.value.forEach((function(S){_(this,r),e(`
std::string paramString = "`),e(t(c.name)),e("[]="),e(t(S)),e(`";
parameters["`),e(t(c.name)),e(`"] += paramString + "&";
`)}).bind(this)),e(`
`)):N(c.value)==="object"?(e(`
`),Object.entries(c.value).forEach((function(S){_(this,r);var w=on(S,2),O=w[0],T=w[1];e(`
std::string paramString = "`),e(t(c.name)),e("["),e(t(O)),e("]="),e(t(T)),e(`";
parameters["`),e(t(c.name)),e(`"] += paramString + "&";
`)}).bind(this)),e(`
`)):(e(`
std::string paramString = "`),e(t(c.name)),e("="),e(t(c.value)),e(`";
parameters["`),e(t(c.name)),e(`"] += paramString + "&";
`)),e(`
`)}).bind(this)),e(`

// Construct the request
std::string method = "`),e(t(h)),e(`";
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
`),d},"cpp/curl":function(n,t,a,o){var i=this;t=t||function(p){return p==null?"":String(p).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(p){return s[p]||p}var d="";function e(p){p!=null&&(d+=p)}var m=n.url;n.method,n.mimeType;var h=n.headers,g=n.postData,f=n.cookies;return e(`
// Construct the request URL
std::string url = "`),e(m),e(`";

// Set up the request headers
struct curl_slist* headers = NULL;
`),h.forEach((function(p){_(this,i),e(`
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
`),g.forEach((function(p){var c=this;_(this,i),e(`
`),Array.isArray(p.value)?(e(`
`),p.value.forEach((function(r){_(this,c),e(`
std::string paramString = "`),e(t(p.name)),e("[]="),e(t(r)),e(`";
postData += paramString + "&";
`)}).bind(this)),e(`
`)):N(p.value)==="object"?(e(`
`),Object.entries(p.value).forEach((function(r){_(this,c);var S=on(r,2),w=S[0],O=S[1];e(`
std::string paramString = "`),e(t(p.name)),e("["),e(t(w)),e("]="),e(t(O)),e(`";
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
`),d},"cpp/arduino":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
// Construct the request URL
String url = "`),e(m),e(`";

// Set up the request headers
String headers;
`),f.forEach((function(r){_(this,i),e(`
    String headerString = "`),e(t(r.name)),e(": "),e(t(r.value)),e(`";
    headers += headerString + "\\r\\n";
`)}).bind(this)),e(`

// Add cookies to the request
`),c.forEach((function(r){_(this,i),e(`
    String cookieString = "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
    // TODO: Add cookieString to the request
`)}).bind(this)),e(`

// Set up the request parameters
String postData;
`),p.forEach((function(r){var S=this;_(this,i),e(`
    `),Array.isArray(r.value)?(e(`
        `),r.value.forEach((function(w){_(this,S),e(`
            String paramString = "`),e(t(r.name)),e("="),e(t(w)),e(`";
            postData += paramString + "&";
        `)}).bind(this)),e(`
    `)):N(r.value)==="object"?(e(`
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
    client.print("`),e(h),e(` ");
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
`),d},"clojure/ring-client":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`

(require '[ring.util.http-client :as client])

(defn make-request []
    (let [url "`),e(t(m)),e(`"
        headers {`),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        cookies {`),c.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        options {:headers headers
        :cookies cookies
        :content-type "`),e(t(g)),e(`"}
    `),h==="GET"?e(`
        response (client/get url options)]
    `):(e(`
        post-data "`),p.length===1&&p[0].type==="file"?(e(`
    {:multipart true
        :file "`),e(t(p[0].value)),e(`"}
    `)):(e(`
    {`),p.forEach((function(r){_(this,i),e(`
        "`),e(t(r.name)),e('" '),Array.isArray(r.value)||N(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(t(r.value)),e('"')),r.isLast||e(",")}).bind(this)),e(`}
    `)),e(`"
    response (client/post url options post-data)]
    `)),e(`
    (println "Response: " (:body response))))

(make-request)
`),d},"clojure/clj-http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
(require '[clj-http.client :as client])

(defn make-request []
    (let [url "`),e(t(m)),e(`"
        headers {`),f.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        cookies {`),c.forEach((function(r){_(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        options {:headers headers
        :cookies cookies
        :content-type "`),e(t(g)),e(`"}
    `),h==="GET"?e(`
        response (client/get url options)]
    `):(e(`
        post-data "`),p.length===1&&p[0].type==="file"?(e(`
    {:multipart true
        :file "`),e(t(p[0].value)),e(`"}
    `)):(e(`
    {`),p.forEach((function(r){_(this,i),e(`
        "`),e(t(r.name)),e('" '),Array.isArray(r.value)||N(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(t(r.value)),e('"')),r.isLast||e(",")}).bind(this)),e(`}
    `)),e(`"
    response (client/post url options post-data)]
    `)),e(`
    (println (str "`),e(t(h)),e(` " url " HTTP/1.1"))
    (doseq [entry headers]
    (println (str entry)))
    (doseq [entry cookies]
    (println (str "Cookie: " entry)))
    (when (not (empty? post-data))
    (println (str post-data)))
    (println (str "\\nResponse: " (:body response)))))

(make-request)
`),d},"c/ghttp":function(n,t,a,o){var i=this;t=t||function(S){return S==null?"":String(S).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(S){return s[S]||S}var d="";function e(S){S!=null&&(d+=S)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;if(e(`
// Set up the request
struct evhttp_uri *uri = evhttp_uri_parse("`),e(t(m)),e(`");
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
evhttp_request_set_type(req, EVHTTP_REQ_`),e(t(h.toUpperCase())),e(`);

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(S){_(this,i),e(`
evhttp_add_header(req->output_headers, "`),e(t(S.name)),e('", "'),e(t(S.value)),e(`");
`)}).bind(this)),e(`
`)),e(`

`),c.length>0&&(e(`
// Add cookies to the request
`),c.forEach((function(S){_(this,i),e(`
evhttp_add_header(req->output_headers, "Cookie", "`),e(t(S.name)),e("="),e(t(S.value)),e(`");
`)}).bind(this)),e(`
`)),e(`

`),p.length>0){e(`
// Set request body
`);var r=p.map((function(S){var w=this;return _(this,i),Array.isArray(S.value)?S.value.map((function(O){return _(this,w),S.name+"="+encodeURIComponent(JSON.stringify(O))}).bind(this)).join("&"):N(S.value)==="object"?S.name+"="+encodeURIComponent(JSON.stringify(S.value)):S.name+"="+encodeURIComponent(S.value)}).bind(this)).join("&");e(`
evbuffer_add_printf(req->output_buffer, "%s", "`),e(t(r)),e(`");
evhttp_add_header(req->output_headers, "Content-Type", "`),e(t(g)),e(`");
`)}return e(`

// Send the request
if (evhttp_make_request(conn, req, EVHTTP_REQ_`),e(t(h.toUpperCase())),e(`, path) == -1) {
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
`),d},"c/curl":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url,h=n.method,g=n.mimeType;n.headers;var f=n.postData;if(n.cookies,e(`
#include <stdio.h>
#include <stdlib.h>
#include <curl/curl.h>

int main(void) {
CURL *curl;
CURLcode res;
struct curl_slist *headers = NULL;
char *url = "`),e(t(m)),e(`";
char *method = "`),e(t(h)),e(`";
char *mimeType = "`),e(t(g)),e(`";
char *postData = "";
`),f.length>0){e(`
`);var p=f.map((function(c){var r=this;return _(this,i),Array.isArray(c.value)?c.value.map((function(S){return _(this,r),c.name+"="+encodeURIComponent(JSON.stringify(S))}).bind(this)).join("&"):N(c.value)==="object"?c.name+"="+encodeURIComponent(JSON.stringify(c.value)):c.name+"="+encodeURIComponent(c.value)}).bind(this)).join("&");e(`
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
`),d},"brainfuck/brainfuck":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
// Create a new brainfuck program
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.

// Construct the request URL
,[<]>[.>],`),m.split("").forEach((function(r){_(this,i),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}).bind(this)),e(`++++++++[->+++++<]>.

// Set up the request
,[<]>[.>],`),h.split("").forEach((function(r){_(this,i),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}).bind(this)),e(`++++++++[->+++++<]>.

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){_(this,i),e(",[<]>[.>],'"),e(t(r.name)),e(": "),e(t(r.value)),e("',")}).bind(this)),e(`
`)),e(`

`),c.length>0&&(e(`
// Add cookies to the request
`),c.forEach((function(r){_(this,i),e(",[<]>[.>],'Set-Cookie: "),e(t(r.name)),e("="),e(t(r.value)),e("',")}).bind(this)),e(`
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
`),d},"bash/wget":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
wget --verbose --output-document=-
--header="Content-Type: `),e(t(g)),e(`"
`),f.forEach((function(r){_(this,i),e(`
    --header="`),e(t(r.name)),e(": "),e(t(r.value)),e(`"
`)}).bind(this)),e(`
`),c.forEach((function(r){_(this,i),e(`
    --header="Cookie: `),e(t(r.name)),e("="),e(t(r.value)),e(`"
`)}).bind(this)),h==="GET"?(e(`
    "`),e(t(m)),e(`"
`)):h==="POST"?(e(`
    --post-data="`),e(t(p.map((function(r){_(this,i);var S=r.value;return(Array.isArray(S)||N(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    "`),e(t(m)),e(`"
`)):h==="PUT"?(e(`
    --method=PUT
    --body-data="`),e(t(p.map((function(r){_(this,i);var S=r.value;return(Array.isArray(S)||N(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    "`),e(t(m)),e(`"
`)):h==="DELETE"&&(e(`
    --method=DELETE
    "`),e(t(m)),e(`"
`)),e(`
`),d},"bash/httpie":function(n,t,a,o){var i=this;t=t||function(c){return c==null?"":String(c).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(c){return s[c]||c}var d="";function e(c){c!=null&&(d+=c)}var m=n.url;n.method,n.mimeType;var h=n.headers,g=n.postData,f=n.cookies;if(e(`
http --verbose --check --follow
"`),e(t(m)),e(`"
`),e(t(h.map((function(c){return _(this,i),"'"+c.name+":"+c.value+"'"}).bind(this)).join(` 
 `))),e(`
`),f.forEach((function(c){_(this,i),e(`
Cookie:"`),e(t(c.name)),e("="),e(t(c.value)),e(`"
`)}).bind(this)),e(`
`),g.length>0){e(`
`);var p=g.map((function(c){var r=this;return _(this,i),Array.isArray(c.value)?c.value.map((function(S){return _(this,r),"'"+c.name+"="+encodeURIComponent(JSON.stringify(S))+"'"}).bind(this)).join(" "):N(c.value)==="object"?"'"+c.name+"="+encodeURIComponent(JSON.stringify(c.value))+"'":"'"+c.name+"="+encodeURIComponent(c.value)+"'"}).bind(this)).join(` 
 `);e(`
`),e(t(p)),e(`
`)}return e(`
--form
--timeout 120s
--max-redirects 10
`),d},"bash/curl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
curl -X `),e(t(h)),e(`
-H "Content-Type: `),e(t(g)),e(`"
`),f.forEach((function(r){_(this,i),e(`
    -H "`),e(t(r.name)),e(": "),e(t(r.value)),e(`"
`)}).bind(this)),e(`
`),c.forEach((function(r){_(this,i),e(`
    --cookie "`),e(t(r.name)),e("="),e(t(r.value)),e(`"
`)}).bind(this)),p.length>0&&(e(`
    -d `),p.length===1&&p[0].type==="file"?(e(`
        "@`),e(t(p[0].value)),e(`"
    `)):(e(`
        "`),e(t(p.map((function(r){_(this,i);var S=r.value;return(Array.isArray(S)||N(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    `))),e(`
"`),e(t(m)),e(`"
`),d},"r/rcurl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
library(RCurl)

url <- "`),e(t(m)),e(`"
method <- "`),e(t(h)),e(`"
mimeType <- "`),e(t(g)),e(`"

headers <- list(
`),f.forEach((function(r){_(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
)

cookies <- list(
`),c.forEach((function(r){_(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
)

`),h==="GET"?e(`
req <- getURL(url, httpheader = headers, cookie = cookies)
`):(e(`
body <- list(
`),p.forEach((function(r){_(this,i),e(`
"`),e(t(r.name)),e('" = '),Array.isArray(r.value)||N(r.value)==="object"?(e(`
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

`),d},"r/httr":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var m=n.url,h=n.method,g=n.mimeType,f=n.headers,p=n.postData,c=n.cookies;return e(`
library(httr)

url <- "`),e(t(m)),e(`"

req <- VERB("`),e(t(h)),e(`", url)

`),f.forEach((function(r){_(this,i),e(`
req <- add_headers("`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`", req)
`)}).bind(this)),e(`

`),c.forEach((function(r){_(this,i),e(`
req <- add_headers("Cookie" = "`),e(t(r.name)),e("="),e(t(r.value)),e(`", req)
`)}).bind(this)),e(`

`),p.length>0&&(e(`
body <- list(
`),p.forEach((function(r){_(this,i),e(`
"`),e(t(r.name)),e('" = '),Array.isArray(r.value)||N(r.value)==="object"?(e(`
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
`),d}};function Gs(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(t=>{const a=n[t],o=typeof a;o!=="object"&&o!=="function"||Object.isFrozen(a)||Gs(a)}),n}class oi{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Js(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ae(n,...t){const a=Object.create(null);for(const o in n)a[o]=n[o];return t.forEach(function(o){for(const i in o)a[i]=o[i]}),a}const ci=n=>!!n.scope;class qy{constructor(t,a){this.buffer="",this.classPrefix=a.classPrefix,t.walk(this)}addText(t){this.buffer+=Js(t)}openNode(t){if(!ci(t))return;const a=((o,{prefix:i})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const s=o.split(".");return[`${i}${s.shift()}`,...s.map((l,u)=>`${l}${"_".repeat(u+1)}`)].join(" ")}return`${i}${o}`})(t.scope,{prefix:this.classPrefix});this.span(a)}closeNode(t){ci(t)&&(this.buffer+="</span>")}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const li=(n={})=>{const t={children:[]};return Object.assign(t,n),t};class Hr{constructor(){this.rootNode=li(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const a=li({scope:t});this.add(a),this.stack.push(a)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,a){return typeof a=="string"?t.addText(a):a.children&&(t.openNode(a),a.children.forEach(o=>this._walk(t,o)),t.closeNode(a)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(a=>typeof a=="string")?t.children=[t.children.join("")]:t.children.forEach(a=>{Hr._collapse(a)}))}}class Ly extends Hr{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,a){const o=t.root;a&&(o.scope=`language:${a}`),this.add(o)}toHTML(){return new qy(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function hn(n){return n?typeof n=="string"?n:n.source:null}function Ws(n){return Be("(?=",n,")")}function $y(n){return Be("(?:",n,")*")}function My(n){return Be("(?:",n,")?")}function Be(...n){return n.map(t=>hn(t)).join("")}function Fr(...n){return"("+(function(a){const o=a[a.length-1];return typeof o=="object"&&o.constructor===Object?(a.splice(a.length-1,1),o):{}}(n).capture?"":"?:")+n.map(a=>hn(a)).join("|")+")"}function Zs(n){return new RegExp(n.toString()+"|").exec("").length-1}const Dy=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function pr(n,{joinWith:t}){let a=0;return n.map(o=>{a+=1;const i=a;let s=hn(o),l="";for(;s.length>0;){const u=Dy.exec(s);if(!u){l+=s;break}l+=s.substring(0,u.index),s=s.substring(u.index+u[0].length),u[0][0]==="\\"&&u[1]?l+="\\"+String(Number(u[1])+i):(l+=u[0],u[0]==="("&&a++)}return l}).map(o=>`(${o})`).join(t)}const Vs="[a-zA-Z]\\w*",zr="[a-zA-Z_]\\w*",Xs="\\b\\d+(\\.\\d+)?",Qs="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ys="\\b(0b[01]+)",mn={begin:"\\\\[\\s\\S]",relevance:0},jy={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[mn]},Iy={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[mn]},ct=function(n,t,a={}){const o=Ae({scope:"comment",begin:n,end:t,contains:[]},a);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Fr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:Be(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},Py=ct("//","$"),Uy=ct("/\\*","\\*/"),By=ct("#","$"),Hy={scope:"number",begin:Xs,relevance:0},Fy={scope:"number",begin:Qs,relevance:0},zy={scope:"number",begin:Ys,relevance:0},Ky={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[mn,{begin:/\[/,end:/\]/,relevance:0,contains:[mn]}]},Gy={scope:"title",begin:Vs,relevance:0},Jy={scope:"title",begin:zr,relevance:0},Wy={begin:"\\.\\s*"+zr,relevance:0};var Nn=Object.freeze({__proto__:null,APOS_STRING_MODE:jy,BACKSLASH_ESCAPE:mn,BINARY_NUMBER_MODE:zy,BINARY_NUMBER_RE:Ys,COMMENT:ct,C_BLOCK_COMMENT_MODE:Uy,C_LINE_COMMENT_MODE:Py,C_NUMBER_MODE:Fy,C_NUMBER_RE:Qs,END_SAME_AS_BEGIN:function(n){return Object.assign(n,{"on:begin":(t,a)=>{a.data._beginMatch=t[1]},"on:end":(t,a)=>{a.data._beginMatch!==t[1]&&a.ignoreMatch()}})},HASH_COMMENT_MODE:By,IDENT_RE:Vs,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:Wy,NUMBER_MODE:Hy,NUMBER_RE:Xs,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:Iy,REGEXP_MODE:Ky,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(n={})=>{const t=/^#![ ]*\//;return n.binary&&(n.begin=Be(t,/.*\b/,n.binary,/\b.*/)),Ae({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(a,o)=>{a.index!==0&&o.ignoreMatch()}},n)},TITLE_MODE:Gy,UNDERSCORE_IDENT_RE:zr,UNDERSCORE_TITLE_MODE:Jy});function Zy(n,t){n.input[n.index-1]==="."&&t.ignoreMatch()}function Vy(n,t){n.className!==void 0&&(n.scope=n.className,delete n.className)}function Xy(n,t){t&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=Zy,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function Qy(n,t){Array.isArray(n.illegal)&&(n.illegal=Fr(...n.illegal))}function Yy(n,t){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function eb(n,t){n.relevance===void 0&&(n.relevance=1)}const nb=(n,t)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const a=Object.assign({},n);Object.keys(n).forEach(o=>{delete n[o]}),n.keywords=a.keywords,n.begin=Be(a.beforeMatch,Ws(a.begin)),n.starts={relevance:0,contains:[Object.assign(a,{endsParent:!0})]},n.relevance=0,delete a.beforeMatch},tb=["of","and","for","in","not","or","if","then","parent","list","value"],rb="keyword";function eo(n,t,a=rb){const o=Object.create(null);return typeof n=="string"?i(a,n.split(" ")):Array.isArray(n)?i(a,n):Object.keys(n).forEach(function(s){Object.assign(o,eo(n[s],t,s))}),o;function i(s,l){t&&(l=l.map(u=>u.toLowerCase())),l.forEach(function(u){const d=u.split("|");o[d[0]]=[s,ab(d[0],d[1])]})}}function ab(n,t){return t?Number(t):function(a){return tb.includes(a.toLowerCase())}(n)?0:1}const ui={},Me=n=>{console.error(n)},di=(n,...t)=>{console.log(`WARN: ${n}`,...t)},Je=(n,t)=>{ui[`${n}/${t}`]||(console.log(`Deprecated as of ${n}. ${t}`),ui[`${n}/${t}`]=!0)},Cn=new Error;function pi(n,t,{key:a}){let o=0;const i=n[a],s={},l={};for(let u=1;u<=t.length;u++)l[u+o]=i[u],s[u+o]=!0,o+=Zs(t[u-1]);n[a]=l,n[a]._emit=s,n[a]._multi=!0}function ib(n){(function(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)})(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),function(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw Me("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Cn;if(typeof t.beginScope!="object"||t.beginScope===null)throw Me("beginScope must be object"),Cn;pi(t,t.begin,{key:"beginScope"}),t.begin=pr(t.begin,{joinWith:""})}}(n),function(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw Me("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Cn;if(typeof t.endScope!="object"||t.endScope===null)throw Me("endScope must be object"),Cn;pi(t,t.end,{key:"endScope"}),t.end=pr(t.end,{joinWith:""})}}(n)}function sb(n){function t(i,s){return new RegExp(hn(i),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(s?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,s]),this.matchAt+=Zs(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(l=>l[1]);this.matcherRe=t(pr(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(s);if(!l)return null;const u=l.findIndex((e,m)=>m>0&&e!==void 0),d=this.matchIndexes[u];return l.splice(0,u),Object.assign(l,d)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const l=new a;return this.rules.slice(s).forEach(([u,d])=>l.addRule(u,d)),l.compile(),this.multiRegexes[s]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,l){this.rules.push([s,l]),l.type==="begin"&&this.count++}exec(s){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let u=l.exec(s);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,u=d.exec(s)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=Ae(n.classNameAliases||{}),function i(s,l){const u=s;if(s.isCompiled)return u;[Vy,Yy,ib,nb].forEach(e=>e(s,l)),n.compilerExtensions.forEach(e=>e(s,l)),s.__beforeBegin=null,[Xy,Qy,eb].forEach(e=>e(s,l)),s.isCompiled=!0;let d=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),d=s.keywords.$pattern,delete s.keywords.$pattern),d=d||/\w+/,s.keywords&&(s.keywords=eo(s.keywords,n.case_insensitive)),u.keywordPatternRe=t(d,!0),l&&(s.begin||(s.begin=/\B|\b/),u.beginRe=t(u.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(u.endRe=t(u.end)),u.terminatorEnd=hn(u.end)||"",s.endsWithParent&&l.terminatorEnd&&(u.terminatorEnd+=(s.end?"|":"")+l.terminatorEnd)),s.illegal&&(u.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(e){return function(m){return m.variants&&!m.cachedVariants&&(m.cachedVariants=m.variants.map(function(h){return Ae(m,{variants:null},h)})),m.cachedVariants?m.cachedVariants:no(m)?Ae(m,{starts:m.starts?Ae(m.starts):null}):Object.isFrozen(m)?Ae(m):m}(e==="self"?s:e)})),s.contains.forEach(function(e){i(e,u)}),s.starts&&i(s.starts,l),u.matcher=function(e){const m=new o;return e.contains.forEach(h=>m.addRule(h.begin,{rule:h,type:"begin"})),e.terminatorEnd&&m.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&m.addRule(e.illegal,{type:"illegal"}),m}(u),u}(n)}function no(n){return!!n&&(n.endsWithParent||no(n.starts))}class ob extends Error{constructor(t,a){super(t),this.name="HTMLInjectionError",this.html=a}}const Wt=Js,hi=Ae,mi=Symbol("nomatch"),to=function(n){const t=Object.create(null),a=Object.create(null),o=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let u={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Ly};function d(O){return u.noHighlightRe.test(O)}function e(O,T,C){let j="",$="";typeof T=="object"?(j=O,C=T.ignoreIllegals,$=T.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=O,j=T),C===void 0&&(C=!0);const q={code:j,language:$};w("before:highlight",q);const U=q.result?q.result:m(q.language,q.code,C);return U.code=q.code,w("after:highlight",U),U}function m(O,T,C,j){const $=Object.create(null);function q(){if(!R.keywords)return void V.addText(P);let A=0;R.keywordPatternRe.lastIndex=0;let x=R.keywordPatternRe.exec(P),K="";for(;x;){K+=P.substring(A,x.index);const W=te.case_insensitive?x[0].toLowerCase():x[0],ne=(B=W,R.keywords[B]);if(ne){const[ye,dt]=ne;if(V.addText(K),K="",$[W]=($[W]||0)+1,$[W]<=7&&(Fe+=dt),ye.startsWith("_"))K+=x[0];else{const Sn=te.classNameAliases[ye]||ye;Y(x[0],Sn)}}else K+=x[0];A=R.keywordPatternRe.lastIndex,x=R.keywordPatternRe.exec(P)}var B;K+=P.substring(A),V.addText(K)}function U(){R.subLanguage!=null?function(){if(P==="")return;let A=null;if(typeof R.subLanguage=="string"){if(!t[R.subLanguage])return void V.addText(P);A=m(R.subLanguage,P,!0,I[R.subLanguage]),I[R.subLanguage]=A._top}else A=h(P,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(Fe+=A.relevance),V.__addSublanguage(A._emitter,A.language)}():q(),P=""}function Y(A,x){A!==""&&(V.startScope(x),V.addText(A),V.endScope())}function z(A,x){let K=1;const B=x.length-1;for(;K<=B;){if(!A._emit[K]){K++;continue}const W=te.classNameAliases[A[K]]||A[K],ne=x[K];W?Y(ne,W):(P=ne,q(),P=""),K++}}function ee(A,x){return A.scope&&typeof A.scope=="string"&&V.openNode(te.classNameAliases[A.scope]||A.scope),A.beginScope&&(A.beginScope._wrap?(Y(P,te.classNameAliases[A.beginScope._wrap]||A.beginScope._wrap),P=""):A.beginScope._multi&&(z(A.beginScope,x),P="")),R=Object.create(A,{parent:{value:R}}),R}function le(A,x,K){let B=function(W,ne){const ye=W&&W.exec(ne);return ye&&ye.index===0}(A.endRe,K);if(B){if(A["on:end"]){const W=new oi(A);A["on:end"](x,W),W.isMatchIgnored&&(B=!1)}if(B){for(;A.endsParent&&A.parent;)A=A.parent;return A}}if(A.endsWithParent)return le(A.parent,x,K)}function ge(A){return R.matcher.regexIndex===0?(P+=A[0],1):(ut=!0,0)}function ke(A){const x=A[0],K=T.substring(A.index),B=le(R,A,K);if(!B)return mi;const W=R;R.endScope&&R.endScope._wrap?(U(),Y(x,R.endScope._wrap)):R.endScope&&R.endScope._multi?(U(),z(R.endScope,A)):W.skip?P+=x:(W.returnEnd||W.excludeEnd||(P+=x),U(),W.excludeEnd&&(P=x));do R.scope&&V.closeNode(),R.skip||R.subLanguage||(Fe+=R.relevance),R=R.parent;while(R!==B.parent);return B.starts&&ee(B.starts,A),W.returnEnd?0:x.length}let ue={};function _e(A,x){const K=x&&x[0];if(P+=A,K==null)return U(),0;if(ue.type==="begin"&&x.type==="end"&&ue.index===x.index&&K===""){if(P+=T.slice(x.index,x.index+1),!i){const B=new Error(`0 width match regex (${O})`);throw B.languageName=O,B.badRule=ue.rule,B}return 1}if(ue=x,x.type==="begin")return function(B){const W=B[0],ne=B.rule,ye=new oi(ne),dt=[ne.__beforeBegin,ne["on:begin"]];for(const Sn of dt)if(Sn&&(Sn(B,ye),ye.isMatchIgnored))return ge(W);return ne.skip?P+=W:(ne.excludeBegin&&(P+=W),U(),ne.returnBegin||ne.excludeBegin||(P=W)),ee(ne,B),ne.returnBegin?0:W.length}(x);if(x.type==="illegal"&&!C){const B=new Error('Illegal lexeme "'+K+'" for mode "'+(R.scope||"<unnamed>")+'"');throw B.mode=R,B}if(x.type==="end"){const B=ke(x);if(B!==mi)return B}if(x.type==="illegal"&&K==="")return 1;if(lt>1e5&&lt>3*x.index)throw new Error("potential infinite loop, way more iterations than matches");return P+=K,K.length}const te=c(O);if(!te)throw Me(s.replace("{}",O)),new Error('Unknown language: "'+O+'"');const He=sb(te);let Oe="",R=j||He;const I={},V=new u.__emitter(u);(function(){const A=[];for(let x=R;x!==te;x=x.parent)x.scope&&A.unshift(x.scope);A.forEach(x=>V.openNode(x))})();let P="",Fe=0,qe=0,lt=0,ut=!1;try{if(te.__emitTokens)te.__emitTokens(T,V);else{for(R.matcher.considerAll();;){lt++,ut?ut=!1:R.matcher.considerAll(),R.matcher.lastIndex=qe;const A=R.matcher.exec(T);if(!A)break;const x=_e(T.substring(qe,A.index),A);qe=A.index+x}_e(T.substring(qe))}return V.finalize(),Oe=V.toHTML(),{language:O,value:Oe,relevance:Fe,illegal:!1,_emitter:V,_top:R}}catch(A){if(A.message&&A.message.includes("Illegal"))return{language:O,value:Wt(T),illegal:!0,relevance:0,_illegalBy:{message:A.message,index:qe,context:T.slice(qe-100,qe+100),mode:A.mode,resultSoFar:Oe},_emitter:V};if(i)return{language:O,value:Wt(T),illegal:!1,relevance:0,errorRaised:A,_emitter:V,_top:R};throw A}}function h(O,T){T=T||u.languages||Object.keys(t);const C=function(z){const ee={value:Wt(z),illegal:!1,relevance:0,_top:l,_emitter:new u.__emitter(u)};return ee._emitter.addText(z),ee}(O),j=T.filter(c).filter(S).map(z=>m(z,O,!1));j.unshift(C);const $=j.sort((z,ee)=>{if(z.relevance!==ee.relevance)return ee.relevance-z.relevance;if(z.language&&ee.language){if(c(z.language).supersetOf===ee.language)return 1;if(c(ee.language).supersetOf===z.language)return-1}return 0}),[q,U]=$,Y=q;return Y.secondBest=U,Y}function g(O){let T=null;const C=function(q){let U=q.className+" ";U+=q.parentNode?q.parentNode.className:"";const Y=u.languageDetectRe.exec(U);if(Y){const z=c(Y[1]);return z||(di(s.replace("{}",Y[1])),di("Falling back to no-highlight mode for this block.",q)),z?Y[1]:"no-highlight"}return U.split(/\s+/).find(z=>d(z)||c(z))}(O);if(d(C))return;if(w("before:highlightElement",{el:O,language:C}),O.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",O);if(O.children.length>0&&(u.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(O)),u.throwUnescapedHTML))throw new ob("One of your code blocks includes unescaped HTML.",O.innerHTML);T=O;const j=T.textContent,$=C?e(j,{language:C,ignoreIllegals:!0}):h(j);O.innerHTML=$.value,O.dataset.highlighted="yes",function(q,U,Y){const z=U&&a[U]||Y;q.classList.add("hljs"),q.classList.add(`language-${z}`)}(O,C,$.language),O.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(O.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),w("after:highlightElement",{el:O,result:$,text:j})}let f=!1;function p(){if(document.readyState==="loading")return void(f=!0);document.querySelectorAll(u.cssSelector).forEach(g)}function c(O){return O=(O||"").toLowerCase(),t[O]||t[a[O]]}function r(O,{languageName:T}){typeof O=="string"&&(O=[O]),O.forEach(C=>{a[C.toLowerCase()]=T})}function S(O){const T=c(O);return T&&!T.disableAutodetect}function w(O,T){const C=O;o.forEach(function(j){j[C]&&j[C](T)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){f&&p()},!1),Object.assign(n,{highlight:e,highlightAuto:h,highlightAll:p,highlightElement:g,highlightBlock:function(O){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),g(O)},configure:function(O){u=hi(u,O)},initHighlighting:()=>{p(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){p(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(O,T){let C=null;try{C=T(n)}catch(j){if(Me("Language definition for '{}' could not be registered.".replace("{}",O)),!i)throw j;Me(j),C=l}C.name||(C.name=O),t[O]=C,C.rawDefinition=T.bind(null,n),C.aliases&&r(C.aliases,{languageName:O})},unregisterLanguage:function(O){delete t[O];for(const T of Object.keys(a))a[T]===O&&delete a[T]},listLanguages:function(){return Object.keys(t)},getLanguage:c,registerAliases:r,autoDetection:S,inherit:hi,addPlugin:function(O){(function(T){T["before:highlightBlock"]&&!T["before:highlightElement"]&&(T["before:highlightElement"]=C=>{T["before:highlightBlock"](Object.assign({block:C.el},C))}),T["after:highlightBlock"]&&!T["after:highlightElement"]&&(T["after:highlightElement"]=C=>{T["after:highlightBlock"](Object.assign({block:C.el},C))})})(O),o.push(O)},removePlugin:function(O){const T=o.indexOf(O);T!==-1&&o.splice(T,1)}}),n.debugMode=function(){i=!1},n.safeMode=function(){i=!0},n.versionString="11.9.0",n.regex={concat:Be,lookahead:Ws,either:Fr,optional:My,anyNumberOfTimes:$y};for(const O in Nn)typeof Nn[O]=="object"&&Gs(Nn[O]);return Object.assign(n,Nn),n},Qe=to({});Qe.newInstance=()=>to({});var cb=Qe;Qe.HighlightJS=Qe,Qe.default=Qe;var G=Qd(cb);function ro(n){return n?typeof n=="string"?n:n.source:null}function xn(n){return H("(?=",n,")")}function H(...n){return n.map(t=>ro(t)).join("")}function oe(...n){return"("+(function(a){const o=a[a.length-1];return typeof o=="object"&&o.constructor===Object?(a.splice(a.length-1,1),o):{}}(n).capture?"":"?:")+n.map(a=>ro(a)).join("|")+")"}const Kr=n=>H(/\b/,n,/\w$/.test(n)?/\b/:/\B/),lb=["Protocol","Type"].map(Kr),fi=["init","self"].map(Kr),ub=["Any","Self"],Zt=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],gi=["false","nil","true"],db=["assignment","associativity","higherThan","left","lowerThan","none","right"],pb=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],_i=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],ao=oe(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),io=oe(ao,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Vt=H(ao,io,"*"),so=oe(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Kn=oe(so,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),be=H(so,Kn,"*"),Xt=H(/[A-Z]/,Kn,"*"),hb=["attached","autoclosure",H(/convention\(/,oe("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",H(/objc\(/,be,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],mb=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];var We="[0-9](_*[0-9])*",Rn=`\\.(${We})`,qn="[0-9a-fA-F](_*[0-9a-fA-F])*",fb={className:"number",variants:[{begin:`(\\b(${We})((${Rn})|\\.)?|(${Rn}))[eE][+-]?(${We})[fFdD]?\\b`},{begin:`\\b(${We})((${Rn})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Rn})[fFdD]?\\b`},{begin:`\\b(${We})[fFdD]\\b`},{begin:`\\b0[xX]((${qn})\\.?|(${qn})?\\.(${qn}))[pP][+-]?(${We})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${qn})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};const yi="[A-Za-z$_][0-9A-Za-z$_]*",gb=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],_b=["true","false","null","undefined","NaN","Infinity"],oo=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],co=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],lo=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],yb=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],bb=[].concat(lo,oo,co);var Ze="[0-9](_*[0-9])*",Ln=`\\.(${Ze})`,$n="[0-9a-fA-F](_*[0-9a-fA-F])*",bi={className:"number",variants:[{begin:`(\\b(${Ze})((${Ln})|\\.)?|(${Ln}))[eE][+-]?(${Ze})[fFdD]?\\b`},{begin:`\\b(${Ze})((${Ln})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Ln})[fFdD]?\\b`},{begin:`\\b(${Ze})[fFdD]\\b`},{begin:`\\b0[xX]((${$n})\\.?|(${$n})?\\.(${$n}))[pP][+-]?(${Ze})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${$n})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function uo(n,t,a){return a===-1?"":n.replace(t,o=>uo(n,t,a-1))}G.registerLanguage("swift",function(n){const t={match:/\s+/,relevance:0},a=n.COMMENT("/\\*","\\*/",{contains:["self"]}),o=[n.C_LINE_COMMENT_MODE,a],i={match:[/\./,oe(...lb,...fi)],className:{2:"keyword"}},s={match:H(/\./,oe(...Zt)),relevance:0},l=Zt.filter(I=>typeof I=="string").concat(["_|0"]),u={variants:[{className:"keyword",match:oe(...Zt.filter(I=>typeof I!="string").concat(ub).map(Kr),...fi)}]},d={$pattern:oe(/\b\w+/,/#\w+/),keyword:l.concat(pb),literal:gi},e=[i,s,u],m=[{match:H(/\./,oe(..._i)),relevance:0},{className:"built_in",match:H(/\b/,oe(..._i),/(?=\()/)}],h={match:/->/,relevance:0},g=[h,{className:"operator",relevance:0,variants:[{match:Vt},{match:`\\.(\\.|${io})+`}]}],f="([0-9]_*)+",p="([0-9a-fA-F]_*)+",c={className:"number",relevance:0,variants:[{match:`\\b(${f})(\\.(${f}))?([eE][+-]?(${f}))?\\b`},{match:`\\b0x(${p})(\\.(${p}))?([pP][+-]?(${f}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},r=(I="")=>({className:"subst",variants:[{match:H(/\\/,I,/[0\\tnr"']/)},{match:H(/\\/,I,/u\{[0-9a-fA-F]{1,8}\}/)}]}),S=(I="")=>({className:"subst",match:H(/\\/,I,/[\t ]*(?:[\r\n]|\r\n)/)}),w=(I="")=>({className:"subst",label:"interpol",begin:H(/\\/,I,/\(/),end:/\)/}),O=(I="")=>({begin:H(I,/"""/),end:H(/"""/,I),contains:[r(I),S(I),w(I)]}),T=(I="")=>({begin:H(I,/"/),end:H(/"/,I),contains:[r(I),w(I)]}),C={className:"string",variants:[O(),O("#"),O("##"),O("###"),T(),T("#"),T("##"),T("###")]},j=[n.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[n.BACKSLASH_ESCAPE]}],$={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:j},q=I=>{const V=H(I,/\//),P=H(/\//,I);return{begin:V,end:P,contains:[...j,{scope:"comment",begin:`#(?!.*${P})`,end:/$/}]}},U={scope:"regexp",variants:[q("###"),q("##"),q("#"),$]},Y={match:H(/`/,be,/`/)},z=[Y,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${Kn}+`}],ee=[{match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:mb,contains:[...g,c,C]}]}},{scope:"keyword",match:H(/@/,oe(...hb))},{scope:"meta",match:H(/@/,be)}],le={match:xn(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:H(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Kn,"+")},{className:"type",match:Xt,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:H(/\s+&\s+/,xn(Xt)),relevance:0}]},ge={begin:/</,end:/>/,keywords:d,contains:[...o,...e,...ee,h,le]};le.contains.push(ge);const ke={begin:/\(/,end:/\)/,relevance:0,keywords:d,contains:["self",{match:H(be,/\s*:/),keywords:"_|0",relevance:0},...o,U,...e,...m,...g,c,C,...z,...ee,le]},ue={begin:/</,end:/>/,keywords:"repeat each",contains:[...o,le]},_e={begin:/\(/,end:/\)/,keywords:d,contains:[{begin:oe(xn(H(be,/\s*:/)),xn(H(be,/\s+/,be,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:be}]},...o,...e,...g,c,C,...ee,le,ke],endsParent:!0,illegal:/["']/},te={match:[/(func|macro)/,/\s+/,oe(Y.match,be,Vt)],className:{1:"keyword",3:"title.function"},contains:[ue,_e,t],illegal:[/\[/,/%/]},He={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[ue,_e,t],illegal:/\[|%/},Oe={match:[/operator/,/\s+/,Vt],className:{1:"keyword",3:"title"}},R={begin:[/precedencegroup/,/\s+/,Xt],className:{1:"keyword",3:"title"},contains:[le],keywords:[...db,...gi],end:/}/};for(const I of C.variants){const V=I.contains.find(Fe=>Fe.label==="interpol");V.keywords=d;const P=[...e,...m,...g,c,C,...z];V.contains=[...P,{begin:/\(/,end:/\)/,contains:["self",...P]}]}return{name:"Swift",keywords:d,contains:[...o,te,He,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:d,contains:[n.inherit(n.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...e]},Oe,R,{beginKeywords:"import",end:/$/,contains:[...o],relevance:0},U,...e,...m,...g,c,C,...z,...ee,le,ke]}}),G.registerLanguage("scala",function(n){const t=n.regex,a={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:/\$\{/,end:/\}/}]},o={className:"string",variants:[{begin:'"""',end:'"""'},{begin:'"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,a]},{className:"string",begin:'[a-z]+"""',end:'"""',contains:[a],relevance:10}]},i={className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},s={className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,relevance:0},l={className:"class",beginKeywords:"class object trait type",end:/[:={\[\n;]/,excludeEnd:!0,contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},s]},u={className:"function",beginKeywords:"def",end:t.lookahead(/[:={\[(\n;]/),contains:[s]};return{name:"Scala",keywords:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"},contains:[{begin:["//>",/\s+/,/using/,/\s+/,/\S+/],beginScope:{1:"comment",3:"keyword",5:"type"},end:/$/,contains:[{className:"string",begin:/\S+/}]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,o,i,u,l,n.C_NUMBER_MODE,{begin:[/^\s*/,"extension",/\s+(?=[[(])/],beginScope:{2:"keyword"}},{begin:[/^\s*/,/end/,/\s+/,/(extension\b)?/],beginScope:{2:"keyword",4:"keyword"}},{match:/\.inline\b/},{begin:/\binline(?=\s)/,keywords:"inline"},{begin:[/\(\s*/,/using/,/\s+(?!\))/],beginScope:{2:"keyword"}},{className:"meta",begin:"@[A-Za-z]+"}]}}),G.registerLanguage("rust",function(n){const t=n.regex,a={className:"title.function.invoke",relevance:0,begin:t.concat(/\b/,/(?!let|for|while|if|else|match\b)/,n.IDENT_RE,t.lookahead(/\s*\(/))},o="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],s=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:n.IDENT_RE+"!?",type:s,keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.COMMENT("/\\*","\\*/",{contains:["self"]}),n.inherit(n.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+o},{begin:"\\b0o([0-7_]+)"+o},{begin:"\\b0x([A-Fa-f0-9_]+)"+o},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+o}],relevance:0},{begin:[/fn/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,n.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:n.IDENT_RE+"::",keywords:{keyword:"Self",built_in:i,type:s}},{className:"punctuation",begin:"->"},a]}}),G.registerLanguage("ruby",function(n){const t=n.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",o=t.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=t.concat(o,/(::\w+)*/),s={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},l={className:"doctag",begin:"@[A-Za-z]+"},u={begin:"#<",end:">"},d=[n.COMMENT("#","$",{contains:[l]}),n.COMMENT("^=begin","^=end",{contains:[l],relevance:10}),n.COMMENT("^__END__",n.MATCH_NOTHING_RE)],e={className:"subst",begin:/#\{/,end:/\}/,keywords:s},m={className:"string",contains:[n.BACKSLASH_ESCAPE,e],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:t.concat(/<<[-~]?'?/,t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[n.BACKSLASH_ESCAPE,e]})]}]},h="[0-9](_?[0-9])*",g={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${h}))?([eE][+-]?(${h})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},f={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:s}]},p=[m,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{match:[/\b(class|module)\s+/,i]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:s},{match:[/(include|extend)\s+/,i],scope:{2:"title.class"},keywords:s},{relevance:0,match:[i,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:o,scope:"title.class"},{match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[f]},{begin:n.IDENT_RE+"::"},{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[m,{begin:a}],relevance:0},g,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:s},{begin:"("+n.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[n.BACKSLASH_ESCAPE,e],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(u,d),relevance:0}].concat(u,d);e.contains=p,f.contains=p;const c=[{begin:/^\s*=>/,starts:{end:"$",contains:p}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:s,contains:p}}];return d.unshift(u),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:s,illegal:/\/\*/,contains:[n.SHEBANG({binary:"ruby"})].concat(c).concat(d).concat(p)}}),G.registerLanguage("python",function(n){const t=n.regex,a=/[\p{XID_Start}_]\p{XID_Continue}*/u,o=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],i={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:o,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:i,illegal:/#/},u={begin:/\{\{/,relevance:0},d={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s,u,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s,u,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,u,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,u,l]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},e="[0-9](_?[0-9])*",m=`(\\b(${e}))?\\.(${e})|\\b(${e})\\.`,h=`\\b|${o.join("|")}`,g={className:"number",relevance:0,variants:[{begin:`(\\b(${e})|(${m}))[eE][+-]?(${e})[jJ]?(?=${h})`},{begin:`(${m})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${h})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${h})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${h})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${h})`},{begin:`\\b(${e})[jJ](?=${h})`}]},f={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:i,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},p={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:["self",s,g,d,n.HASH_COMMENT_MODE]}]};return l.contains=[d,g,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:i,illegal:/(<\/|\?)|=>/,contains:[s,g,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},d,f,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[p]},{variants:[{match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,p,d]}]}}),G.registerLanguage("powershell",function(n){const t={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},a={begin:"`[\\s\\S]",relevance:0},o={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},i={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[a,o,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},s={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},l=n.inherit(n.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),u={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},d={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[n.TITLE_MODE]},e={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[o]}]},m={begin:/using\s/,end:/$/,returnBegin:!0,contains:[i,s,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},h={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},g={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(t.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},n.inherit(n.TITLE_MODE,{endsParent:!0})]},f=[g,l,a,n.NUMBER_MODE,i,s,u,o,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/@\B/,relevance:0}],p={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",f,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return g.contains.unshift(p),{name:"PowerShell",aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:t,contains:f.concat(d,e,m,h,p)}}),G.registerLanguage("php",function(n){const t=n.regex,a=/(?![A-Za-z0-9])(?![$])/,o=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,a),i=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,a),s={scope:"variable",match:"\\$+"+o},l={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},u=n.inherit(n.APOS_STRING_MODE,{illegal:null}),d=`[ 	
]`,e={scope:"string",variants:[n.inherit(n.QUOTE_STRING_MODE,{illegal:null,contains:n.QUOTE_STRING_MODE.contains.concat(l)}),u,{begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:n.QUOTE_STRING_MODE.contains.concat(l),"on:begin":($,q)=>{q.data._beginMatch=$[1]||$[2]},"on:end":($,q)=>{q.data._beginMatch!==$[1]&&q.ignoreMatch()}},n.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/})]},m={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},h=["false","null","true"],g=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],f=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],p={keyword:g,literal:($=>{const q=[];return $.forEach(U=>{q.push(U),U.toLowerCase()===U?q.push(U.toUpperCase()):q.push(U.toLowerCase())}),q})(h),built_in:f},c=$=>$.map(q=>q.replace(/\|\d+$/,"")),r={variants:[{match:[/new/,t.concat(d,"+"),t.concat("(?!",c(f).join("\\b|"),"\\b)"),i],scope:{1:"keyword",4:"title.class"}}]},S=t.concat(o,"\\b(?!\\()"),w={variants:[{match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),S],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[i,t.concat(/::/,t.lookahead(/(?!class\b)/)),S],scope:{1:"title.class",3:"variable.constant"}},{match:[i,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[i,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},O={scope:"attr",match:t.concat(o,t.lookahead(":"),t.lookahead(/(?!::)/))},T={relevance:0,begin:/\(/,end:/\)/,keywords:p,contains:[O,s,w,n.C_BLOCK_COMMENT_MODE,e,m,r]},C={relevance:0,match:[/\b/,t.concat("(?!fn\\b|function\\b|",c(g).join("\\b|"),"|",c(f).join("\\b|"),"\\b)"),o,t.concat(d,"*"),t.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[T]};T.contains.push(C);const j=[O,w,n.C_BLOCK_COMMENT_MODE,e,m,r];return{case_insensitive:!1,keywords:p,contains:[{begin:t.concat(/#\[\s*/,i),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:h,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:h,keyword:["new","array"]},contains:["self",...j]},...j,{scope:"meta",match:i}]},n.HASH_COMMENT_MODE,n.COMMENT("//","$"),n.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:n.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},s,C,w,{match:[/const/,/\s/,o],scope:{1:"keyword",3:"variable.constant"}},r,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},n.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:p,contains:["self",s,w,n.C_BLOCK_COMMENT_MODE,e,m]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[n.inherit(n.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},n.UNDERSCORE_TITLE_MODE]},e,m]}}),G.registerLanguage("perl",function(n){const t=n.regex,a=/[dualxmsipngr]{0,12}/,o={$pattern:/[\w.]+/,keyword:["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"].join(" ")},i={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:o},s={begin:/->\{/,end:/\}/},l={variants:[{begin:/\$\d/},{begin:t.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},u=[n.BACKSLASH_ESCAPE,i,l],d=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],e=(g,f,p="\\1")=>{const c=p==="\\1"?p:t.concat(p,f);return t.concat(t.concat("(?:",g,")"),f,/(?:\\.|[^\\\/])*?/,c,/(?:\\.|[^\\\/])*?/,p,a)},m=(g,f,p)=>t.concat(t.concat("(?:",g,")"),f,/(?:\\.|[^\\\/])*?/,p,a),h=[l,n.HASH_COMMENT_MODE,n.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),s,{className:"string",contains:u,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+n.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[n.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:e("s|tr|y",t.either(...d,{capture:!0}))},{begin:e("s|tr|y","\\(","\\)")},{begin:e("s|tr|y","\\[","\\]")},{begin:e("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:m("(?:m|qr)?",/\//,/\//)},{begin:m("m|qr",t.either(...d,{capture:!0}),/\1/)},{begin:m("m|qr",/\(/,/\)/)},{begin:m("m|qr",/\[/,/\]/)},{begin:m("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[n.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return i.contains=h,s.contains=h,{name:"Perl",aliases:["pl","pm"],keywords:o,contains:h}}),G.registerLanguage("ocaml",function(n){return{name:"OCaml",aliases:["ml"],keywords:{$pattern:"[a-z_]\\w*!?",keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},illegal:/\/\/|>>/,contains:[{className:"literal",begin:"\\[(\\|\\|)?\\]|\\(\\)",relevance:0},n.COMMENT("\\(\\*","\\*\\)",{contains:["self"]}),{className:"symbol",begin:"'[A-Za-z_](?!')[\\w']*"},{className:"type",begin:"`[A-Z][\\w']*"},{className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},{begin:"[a-z_]\\w*'[\\w']*",relevance:0},n.inherit(n.APOS_STRING_MODE,{className:"string",relevance:0}),n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),{className:"number",begin:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",relevance:0},{begin:/->/}]}}),G.registerLanguage("objectivec",function(n){const t=/[a-zA-Z@][a-zA-Z0-9_]*/,a={$pattern:t,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{"variable.language":["this","super"],$pattern:t,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},illegal:"</",contains:[{className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,n.C_NUMBER_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+a.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:a,contains:[n.UNDERSCORE_TITLE_MODE]},{begin:"\\."+n.UNDERSCORE_IDENT_RE,relevance:0}]}}),G.registerLanguage("lua",function(n){const t="\\[=*\\[",a="\\]=*\\]",o={begin:t,end:a,contains:["self"]},i=[n.COMMENT("--(?!"+t+")","$"),n.COMMENT("--"+t,a,{contains:[o],relevance:10})];return{name:"Lua",keywords:{$pattern:n.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[n.inherit(n.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:i}].concat(i)},n.C_NUMBER_MODE,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{className:"string",begin:t,end:a,contains:[o],relevance:5}])}}),G.registerLanguage("kotlin",function(n){const t={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"@"},o={className:"subst",begin:/\$\{/,end:/\}/,contains:[n.C_NUMBER_MODE]},i={className:"variable",begin:"\\$"+n.UNDERSCORE_IDENT_RE},s={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[i,o]},{begin:"'",end:"'",illegal:/\n/,contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[n.BACKSLASH_ESCAPE,i,o]}]};o.contains.push(s);const l={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+n.UNDERSCORE_IDENT_RE+")?"},u={className:"meta",begin:"@"+n.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[n.inherit(s,{className:"string"}),"self"]}]},d=fb,e=n.COMMENT("/\\*","\\*/",{contains:[n.C_BLOCK_COMMENT_MODE]}),m={variants:[{className:"type",begin:n.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},h=m;return h.variants[1].contains=[m],m.variants[1].contains=[h],{name:"Kotlin",aliases:["kt","kts"],keywords:t,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),n.C_LINE_COMMENT_MODE,e,{className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},a,l,u,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:t,relevance:5,contains:[{begin:n.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[n.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[m,n.C_LINE_COMMENT_MODE,e],relevance:0},n.C_LINE_COMMENT_MODE,e,l,u,s,n.C_NUMBER_MODE]},e]},{begin:[/class|interface|trait/,/\s+/,n.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},n.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},l,u]},s,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},d]}}),G.registerLanguage("javascript",function(n){const t=n.regex,a=yi,o="<>",i="</>",s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(ge,ke)=>{const ue=ge[0].length+ge.index,_e=ge.input[ue];if(_e==="<"||_e===",")return void ke.ignoreMatch();let te;_e===">"&&(((Oe,{after:R})=>{const I="</"+Oe[0].slice(1);return Oe.input.indexOf(I,R)!==-1})(ge,{after:ue})||ke.ignoreMatch());const He=ge.input.substring(ue);((te=He.match(/^\s*=/))||(te=He.match(/^\s+extends\s+/))&&te.index===0)&&ke.ignoreMatch()}},l={$pattern:yi,keyword:gb,literal:_b,built_in:bb,"variable.language":yb},u="[0-9](_?[0-9])*",d=`\\.(${u})`,e="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${e})((${d})|\\.)?|(${d}))[eE][+-]?(${u})\\b`},{begin:`\\b(${e})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"css"}},p={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},c={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,h]},r={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},S=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,g,f,p,c,{match:/\$\d+/},m];h.contains=S.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(S)});const w=[].concat(r,h.contains),O=w.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(w)}]),T={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:O},C={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},j={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...oo,...co]}},$={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[T],illegal:/%/},q={match:t.concat(/\b/,(U=[...lo,"super","import"],t.concat("(?!",U.join("|"),")")),a,t.lookahead(/\(/)),className:"title.function",relevance:0};var U;const Y={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},z={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},T]},ee="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",le={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ee)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[T]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:O,CLASS_REFERENCE:j},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,g,f,p,c,r,{match:/\$\d+/},m,j,{className:"attr",begin:a+t.lookahead(":"),relevance:0},le,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[r,n.REGEXP_MODE,{className:"function",begin:ee,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:O}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o,end:i},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},$,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[T,n.inherit(n.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Y,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[T]},q,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},C,z,{match:/\$[(.]/}]}}),G.registerLanguage("java",function(n){const t=n.regex,a="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",o=a+uo("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),i={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},s={className:"meta",begin:"@"+a,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},l={className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[n.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:i,illegal:/<\/|#/,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[n.BACKSLASH_ESCAPE]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[t.concat(/(?!else)/,a),/\s+/,a,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},contains:[l,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+o+"\\s+)",n.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:i,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[s,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,bi,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},bi,s]}}),G.registerLanguage("http",function(n){const t="HTTP/([32]|1\\.[01])",a={className:"attribute",begin:n.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},o=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+t+" \\d{3})",end:/$/,contains:[{className:"meta",begin:t},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:o}},{begin:"(?=^[A-Z]+ (.*?) "+t+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:t},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:o}},n.inherit(a,{relevance:0})]}}),G.registerLanguage("go",function(n){const t={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:t,illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"string",variants:[n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:n.C_NUMBER_RE+"[i]",relevance:1},n.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[n.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,illegal:/["']/}]}]}}),G.registerLanguage("dart",function(n){const t={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"},o={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:'"""',end:'"""',contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:"'",end:"'",illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:'"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,t,a]}]};a.contains=[n.C_NUMBER_MODE,o];const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],s=i.map(l=>`${l}?`);return{name:"Dart",keywords:{keyword:["abstract","as","assert","async","await","base","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","interface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","sealed","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","when","while","with","yield"],built_in:i.concat(s).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},contains:[o,n.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),n.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",end:"$",relevance:0}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},n.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}),G.registerLanguage("csharp",function(n){const t={keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],literal:["default","false","null","true"]},a=n.inherit(n.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),o={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},i={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},s=n.inherit(i,{illegal:/\n/}),l={className:"subst",begin:/\{/,end:/\}/,keywords:t},u=n.inherit(l,{illegal:/\n/}),d={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},n.BACKSLASH_ESCAPE,u]},e={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},l]},m=n.inherit(e,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},u]});l.contains=[e,d,i,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,o,n.C_BLOCK_COMMENT_MODE],u.contains=[m,d,s,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,o,n.inherit(n.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const h={variants:[e,d,i,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},g={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]},f=n.IDENT_RE+"(<"+n.IDENT_RE+"(\\s*,\\s*"+n.IDENT_RE+")*>)?(\\[\\])?",p={begin:"@"+n.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:t,illegal:/::/,contains:[n.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},h,o,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},a,g,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,g,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+f+"\\s+)+"+n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:t,contains:[{beginKeywords:["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"].join(" "),relevance:0},{begin:n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[n.TITLE_MODE,g],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,relevance:0,contains:[h,o,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},p]}}),G.registerLanguage("cpp",function(n){const t=n.regex,a=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),o="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="(?!struct)("+o+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",l={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},u={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},d={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(u,{className:"string"}),{className:"string",begin:/<.*?>/},a,n.C_BLOCK_COMMENT_MODE]},m={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},h=t.optional(i)+n.IDENT_RE+"\\s*\\(",g={type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]},f={className:"function.dispatch",relevance:0,keywords:{_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]},begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},p=[f,e,l,a,n.C_BLOCK_COMMENT_MODE,d,u],c={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:g,contains:p.concat([{begin:/\(/,end:/\)/,keywords:g,contains:p.concat(["self"]),relevance:0}]),relevance:0},r={className:"function",begin:"("+s+"[\\*&\\s]+)+"+h,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:g,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:o,keywords:g,relevance:0},{begin:h,returnBegin:!0,contains:[m],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[u,d]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[a,n.C_BLOCK_COMMENT_MODE,u,d,l,{begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:["self",a,n.C_BLOCK_COMMENT_MODE,u,d,l]}]},l,a,n.C_BLOCK_COMMENT_MODE,e]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:g,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(c,r,f,p,[e,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:g,contains:["self",l]},{begin:n.IDENT_RE+"::",keywords:g},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}),G.registerLanguage("clojure",function(n){const t="a-zA-Z_\\-!.?+*=<>&'",a="[#]?["+t+"]["+t+"0-9/;:$#]*",o="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",i={$pattern:a,built_in:o+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},s={begin:a,relevance:0},l={scope:"number",relevance:0,variants:[{match:/[-+]?0[xX][0-9a-fA-F]+N?/},{match:/[-+]?0[0-7]+N?/},{match:/[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/},{match:/[-+]?[0-9]+\/[0-9]+N?/},{match:/[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/},{match:/[-+]?([1-9][0-9]*|0)N?/}]},u={scope:"character",variants:[{match:/\\o[0-3]?[0-7]{1,2}/},{match:/\\u[0-9a-fA-F]{4}/},{match:/\\(newline|space|tab|formfeed|backspace|return)/},{match:/\\\S/,relevance:0}]},d={scope:"regex",begin:/#"/,end:/"/,contains:[n.BACKSLASH_ESCAPE]},e=n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),m={scope:"punctuation",match:/,/,relevance:0},h=n.COMMENT(";","$",{relevance:0}),g={className:"literal",begin:/\b(true|false|nil)\b/},f={begin:"\\[|(#::?"+a+")?\\{",end:"[\\]\\}]",relevance:0},p={className:"symbol",begin:"[:]{1,2}"+a},c={begin:"\\(",end:"\\)"},r={endsWithParent:!0,relevance:0},S={keywords:i,className:"name",begin:a,relevance:0,starts:r},w=[m,c,u,d,e,h,p,f,l,g,s],O={beginKeywords:o,keywords:{$pattern:a,keyword:o},end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:a,relevance:0,excludeEnd:!0,endsParent:!0}].concat(w)};return c.contains=[O,S,r],r.contains=w,f.contains=w,{name:"Clojure",aliases:["clj","edn"],illegal:/\S/,contains:[m,c,u,d,e,h,p,f,l,g]}}),G.registerLanguage("c",function(n){const t=n.regex,a=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),o="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="("+o+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",l={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},u={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},d={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(u,{className:"string"}),{className:"string",begin:/<.*?>/},a,n.C_BLOCK_COMMENT_MODE]},m={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},h=t.optional(i)+n.IDENT_RE+"\\s*\\(",g={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},f=[e,l,a,n.C_BLOCK_COMMENT_MODE,d,u],p={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:g,contains:f.concat([{begin:/\(/,end:/\)/,keywords:g,contains:f.concat(["self"]),relevance:0}]),relevance:0},c={begin:"("+s+"[\\*&\\s]+)+"+h,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:g,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:o,keywords:g,relevance:0},{begin:h,returnBegin:!0,contains:[n.inherit(m,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[a,n.C_BLOCK_COMMENT_MODE,u,d,l,{begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:["self",a,n.C_BLOCK_COMMENT_MODE,u,d,l]}]},l,a,n.C_BLOCK_COMMENT_MODE,e]};return{name:"C",aliases:["h"],keywords:g,disableAutodetect:!0,illegal:"</",contains:[].concat(p,c,f,[e,{begin:n.IDENT_RE+"::",keywords:g},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},n.TITLE_MODE]}]),exports:{preprocessor:e,strings:u,keywords:g}}}),G.registerLanguage("brainfuck",function(n){const t={className:"literal",begin:/[+-]+/,relevance:0};return{name:"Brainfuck",aliases:["bf"],contains:[n.COMMENT(/[^\[\]\.,\+\-<> \r\n]/,/[\[\]\.,\+\-<> \r\n]/,{contains:[{match:/[ ]+[^\[\]\.,\+\-<> \r\n]/,relevance:0}],returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",begin:"[\\.,]",relevance:0},{begin:/(?=\+\+|--)/,contains:[t]},t]}}),G.registerLanguage("bash",function(n){const t=n.regex,a={},o={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[a]}]};Object.assign(a,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},o]});const i={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},l={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,a,i]};i.contains.push(l);const u={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,a]},d=n.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),e={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[d,n.SHEBANG(),e,u,n.HASH_COMMENT_MODE,s,{match:/(\/[a-z._-]+)+/},l,{match:/\\"/},{className:"string",begin:/'/,end:/'/},{match:/\\'/},a]}}),G.registerLanguage("r",function(n){const t=n.regex,a=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,o=t.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),i=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,s=t.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:a,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[n.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:a},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),n.HASH_COMMENT_MODE,{scope:"string",contains:[n.BACKSLASH_ESCAPE],variants:[n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[i,o]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,o]},{scope:{1:"punctuation",2:"number"},match:[s,o]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,o]}]},{scope:{3:"operator"},match:[a,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:i},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:s},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}});var vb=function(){function n(){(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),$e(this,"_baseUrl",""),$e(this,"_url",""),$e(this,"_method","GET"),$e(this,"_params",[]),$e(this,"_mimeType","application/x-www-form-urlencoded"),$e(this,"_lang","javascript"),$e(this,"_library","xmlhttprequest")}var t,a;return t=n,(a=[{key:"library",value:function(o){return o=o.toLowerCase(),this._library=o,this}},{key:"lang",value:function(o){var i;if(o=o.toLowerCase(),!this.config()[o])throw new Error("bad lang: "+o);return this._lang=o,this._library=(i=this.config()[o][0])!==null&&i!==void 0?i:null,this}},{key:"mimeType",value:function(o){return this._mimeType=o,this}},{key:"params",value:function(o){return this._params=o,this}},{key:"method",value:function(o){return this._method=o,this}},{key:"url",value:function(o){return o=o.startsWith("/")?o.substring(1):o,this._url=o,this}},{key:"baseUrl",value:function(o){return o.endsWith("/")||(o+="/"),this._baseUrl=o,this}},{key:"convertParams",value:function(){var o,i=this,s=this._baseUrl;s.endsWith("/")||(s+="/");var l=this._url;l.startsWith("/")&&(l=l.substring(1)),this._params.filter((function(h){return _(this,i),h.in==="path"}).bind(this)).forEach((function(h){_(this,i),l=l.replace("{".concat(h.name,"}"),h.value)}).bind(this));var u=this._params.filter((function(h){return _(this,i),h.in==="query"}).bind(this)),d=(function(h,g){var f=this;return _(this,i),Array.isArray(g)?g.map((function(p){return _(this,f),d(h,p)}).bind(this)).join("&"):N(g)==="object"?Object.entries(g).map((function(p){_(this,f);var c=on(p,2),r=c[0],S=c[1];return d("".concat(h,"[").concat(r,"]"),S)}).bind(this)).join("&"):"".concat(h,"=").concat(g)}).bind(this),e=JSON.parse(JSON.stringify(u)).map((function(h){return _(this,i),d(h.name,h.value)}).bind(this)).join("&");e!==""&&(l+="?"+e),l=s+l;var m=(o=s.match(/^https?:\/\/([^\/]+)/i)[1])!==null&&o!==void 0?o:"";return{method:this._method,mimeType:this._mimeType,url:l,host:m,headers:this._params.filter((function(h){return _(this,i),h.in==="headers"}).bind(this)),postData:this._params.filter((function(h){return _(this,i),h.in==="postData"}).bind(this)),cookies:this._params.filter((function(h){return _(this,i),h.in==="cookie"}).bind(this))}}},{key:"cleanup",value:function(o){return o.replace(/&amp;/gim,"&").replace(/&#39;/gim,"'").replace(/&#34;/gim,'"').replace(/\n\n+/gim,`
`).replace(/^\n/gim,"")}},{key:"generate",value:function(){var o,i=(o=si[this._lang+"/"+this._library])!==null&&o!==void 0?o:null;if(!i)throw new Error("bad library");var s=this.convertParams();return this.cleanup(i(s))}},{key:"generateHighlight",value:function(){return G.highlight(this.generate(),{language:this._lang,ignoreIllegals:!0}).value}},{key:"makeHighlightCode",value:function(o){return G.highlight(o,{language:this._lang,ignoreIllegals:!0}).value}},{key:"config",value:function(){var o=this;return Object.keys(si).reduce((function(i,s){_(this,o);var l=on(s.split("/"),2),u=l[0],d=l[1];return i[u]||(i[u]=[]),i[u].push(d),i}).bind(this),{})}}])&&Xd(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),n}();const pe=new vb,Sb=pe.config(),Eb={name:"CodeSimples",components:{CustomDropdownWithSubMenu:Fi},props:{baseUrl:{type:String,required:!1,default:""},url:{type:String,required:!0},method:{type:String,required:!1,default:"GET"},params:{type:Array,required:!1,default:()=>[]},mimeType:{type:String,required:!1,default:"application/x-www-form-urlencoded"}},data(){return{snippetIndex:"javascript",snippetLibraryIndex:"xmlhttprequest",code:"",html:"",showPopup:!1,onPopupIndex:null,vals:[]}},computed:{config(){return Sb}},watch:{},mounted(){this.genCode()},methods:{copyToClipboard(n){this.$openapidoc.copyToClipboard(this.code,n)},onLangClick(n,t=null){this.snippetIndex=n,this.snippetLibraryIndex=t,this.genCode()},getAbsoluteUrl(){const n=this.baseUrl;if(!n)return window.location.origin;if(/^https?:\/\//i.test(n))return n;const t=window.location.origin;return new URL(n,t).href},genCode(){const n=this.method.toUpperCase();pe.baseUrl(this.getAbsoluteUrl()),pe.url(this.url),pe.method(n),pe.params(JSON.parse(JSON.stringify(this.params))),pe.mimeType(this.mimeType),pe.lang(this.snippetIndex),pe.library(this.snippetLibraryIndex),this.code=pe.generate(),this.html=pe.generateHighlight()}}},kb={class:"oapi-code-simple"},Ob={class:"oapi-code-panel"},wb={class:"oapi-code-panel__body"},Tb=["innerHTML"];function Ab(n,t,a,o,i,s){const l=Fi;return y(),b("div",kb,[F(l,{items:s.config,onSelect:s.onLangClick},null,8,["items","onSelect"]),v("div",Ob,[v("div",wb,[v("button",{class:"oapi-code-panel__btn",onClick:t[0]||(t[0]=bo((...u)=>s.copyToClipboard&&s.copyToClipboard(...u),["stop","prevent"]))}," Copy "),v("pre",{class:ve(["language line-numbers",`language-${i.snippetIndex}`])},[v("code",{class:"language",innerHTML:i.html},null,8,Tb)],2)])])])}const po=J(Eb,[["render",Ab]]);const Nb={components:{OpenApiExampleObject:Ye},props:{examples:{type:Object,required:!0},currentLocale:{type:String,required:!0}}},Cb={class:"openapi-examples"},xb={id:"examples"};function Rb(n,t,a,o,i,s){const l=Ye;return y(),b("div",Cb,[v("h2",xb,E(n.$openapidoc.getLocaleText("openapidoc.examples")),1),(y(!0),b(L,null,M(a.examples,(u,d)=>(y(),b("div",{key:d,class:"oapi-schema-block"},[F(l,{"current-locale":a.currentLocale,example:u,name:d,"name-tag":"h3"},null,8,["current-locale","example","name"])]))),128))])}const ho=J(Nb,[["render",Rb],["__scopeId","data-v-f147433f"]]);const qb={name:"OpenApiCallbacks",components:{OpenApiResponses:Zn,OpenApiRequestBody:Wn,OpenApiParameters:Jn},props:{callbacks:{type:Object,default:()=>({})},currentLocale:{type:String,default:""},components:{type:Object,default:()=>({})}}},Lb={key:0,class:"oapi-callbacks"},$b={id:"callbacks"},Mb={class:"oapi-callbacks__list"},Db=["id"],jb=["innerHTML"],Ib={class:"oapi-callback-op__name"},Pb=["innerHTML"];function Ub(n,t,a,o,i,s){const l=Jn,u=Wn,d=Zn;return a.callbacks?(y(),b("div",Lb,[v("h2",$b,E(n.$openapidoc.getLocaleText("openapidoc.callbacks")),1),v("div",Mb,[(y(!0),b(L,null,M(a.callbacks,(e,m)=>(y(),b("div",{key:m},[(y(!0),b(L,null,M(e,(h,g)=>(y(),b("div",{key:g,class:"oapi-callback-method"},[v("h3",{id:g+"-"+m,class:"oapi-callback-method__name"},[v("code",null,E(g),1),D(" - "+E(m),1)],8,Db),h.description?(y(),b("div",{key:0,class:"oapi-callback-method__description",innerHTML:h.description},null,8,jb)):k("",!0),(y(!0),b(L,null,M(h,(f,p)=>(y(),b("div",{key:p,class:"oapi-callback-op"},[v("div",Ib,[v("span",{class:ve(["oapi-method-tag",`oapi-method-tag--${p}`])},E(p),3)]),f.description?(y(),b("div",{key:0,class:"oapi-callback-op__description",innerHTML:f.description},null,8,Pb)):k("",!0),f.parameters?(y(),Z(l,{key:1,parameters:f.parameters,"current-locale":a.currentLocale,components:a.components},null,8,["parameters","current-locale","components"])):k("",!0),f.requestBody?(y(),Z(u,{key:2,"is-cb":"","h-prefix":`${m}-${p}-${g}`,"request-body":f.requestBody,"current-locale":a.currentLocale,components:a.components},null,8,["h-prefix","request-body","current-locale","components"])):k("",!0),f.responses?(y(),Z(d,{key:3,"is-cb":"","h-prefix":`${m}-${p}-${g}`,responses:f.responses,"current-locale":a.currentLocale,components:a.components},null,8,["h-prefix","responses","current-locale","components"])):k("",!0)]))),128))]))),128))]))),128))])])):k("",!0)}const mo=J(qb,[["render",Ub]]);const Bb={name:"OpenApiRoute",components:{OpenApiCallbacks:mo,OpenApiResponses:Zn,OpenApiRequestBody:Wn,OpenApiSecurity:Bi,OpenApiParameters:Jn,OpenApiExamples:ho,CodeSimples:po,OpenApiServer:Pi,OpenApiRouteHeader:Ii},props:{route:{type:[Object,Array],required:!0},subParams:{required:!1},path_doc:{type:String,required:!0},file:{type:String,required:!0},currentLocale:{type:String,required:!0},url:{type:String,required:!1,default:""},server:{type:String,required:!1,default:""},method:{type:String,required:!1,default:"GET"},components:{type:Object,default:()=>({})}},data(){return{lang:"javascript",mimeType:"application/x-www-form-urlencoded",params:[]}},computed:{resolvedSchema(){return un(this.route,[],this.$openapidocRef.definitions,this.$openapidocRef.components)},routeInfo(){return this.$openapidoc.getRouteInfo(this.file,this.url,this.method)}},mounted(){this.genParamsToSimple()},methods:{genParamsToSimple(){if(this.params=[],this.resolvedSchema.requestBody&&Object.keys(this.resolvedSchema.requestBody).length){const t=Object.keys(this.resolvedSchema.requestBody)[0],a=this.resolvedSchema.requestBody[t];if(a&&Object.keys(a).length){this.mimeType=Object.keys(a)[0];const o=a[this.mimeType];if(o.schema){const i=o.schema.properties;for(const s in i){const l=i[s]||{};let u="";if(l.example&&(u=l.example??""),u===""&&l.type&&(u=this.convertStringFormatToMd(l.type,s)),l.type==="array")l.items.type?l.items.type==="array"||l.items.type==="object"?u=[this.handleNestedArrayOrObject(l,s)]:u=[this.convertStringFormatToMd(l.items.type,s)]:l.items.enum?u=[l.items.enum[0]]:(l.items.properties||l.items.additionalProperties)&&(u=[this.handleNestedArrayOrObject(l.items,s)]),this.params.push({in:"postData",name:s,value:JSON.parse(JSON.stringify(u))});else if(l.type==="object"){if(l.additionalProperties&&l.additionalProperties.type)u={[s]:this.convertStringFormatToMd(l.additionalProperties.type,s)};else if(l.properties){u={};for(const d in l.properties){const e=l.properties[d]||{};e.type?u[d]=this.convertStringFormatToMd(e.type,d):(e.properties||e.additionalProperties)&&(u[d]=this.handleNestedArrayOrObject(e,s))}}this.params.push({in:"postData",name:s,value:JSON.parse(JSON.stringify(u))})}else this.params.push({in:"postData",name:s,value:u.toString()})}}}}for(const t in this.resolvedSchema.parameters){const a=this.resolvedSchema.parameters[t],o=a.name??"",i=a.in??"";let s="";a.schema?s=a.schema.default??"":s=a.default??"",s===""&&a.type&&(s=this.convertStringFormatToMd(a.type,o)),s===""&&a.schema&&a.schema.type&&(s=this.convertStringFormatToMd(a.schema.type,o)),s===""&&a.enum&&(s=a.enum[0]??""),this.params.push({in:i,name:o,value:s.toString()})}const n=this.$openapidoc.getParams();for(const t in n){const a=n[t];a.value===""&&a.type&&(a.value=this.convertStringFormatToMd(a.type,a.name)),this.params.push({in:a.pos,name:a.name,value:JSON.parse(JSON.stringify(a.value))})}},handleNestedArrayOrObject(n,t){if(n.type==="array"){if(n.items.type)return n.items.type==="array"?[this.handleNestedArrayOrObject(n.items,t)]:n.items.type==="object"?[this.handleNestedObject(n.items)]:[this.convertStringFormatToMd(n.items.type)];if(n.items.enum)return[n.items.enum[0]];if(n.items.properties||n.items.additionalProperties)return[this.handleNestedObject(n.items)]}else if(n.type==="object")return this.handleNestedObject(n);return""},handleNestedObject(n){if(n.additionalProperties&&n.additionalProperties.type)return{[propertyName]:this.convertStringFormatToMd(n.additionalProperties.type,propertyName)};if(n.properties){const t={};for(const a in n.properties){const o=n.properties[a]||{};o.type?t[a]=this.convertStringFormatToMd(o.type,a):(o.properties||o.additionalProperties)&&(t[a]=this.handleNestedArrayOrObject(o,a))}return t}return""},convertStringFormatToMd(n,t){switch(n){case"date":return"YYYY-MM-DD";case"date-time":return"YYYY-MM-DDTHH:MM:SSZ";case"email":return"example@example.com";case"hostname":return"example.com";case"ipv4":return"192.0.2.0";case"ipv6":return"2001:0db8:85a3:0000:0000:8a2e:0370:7334";case"uri":return"https://example.com";case"integer":return"1";case"number":return"1";case"string":return`{${t}}`;default:return n}}}},Hb={class:"oapi-route"},Fb={key:0,class:"oapi-route__servers"},zb={id:"servers"},Kb={key:1},Gb={id:"info"},Jb=["innerHTML"],Wb={id:"code_simple",class:"text-lg font-bold mb-2"};function Zb(n,t,a,o,i,s){const l=Ii,u=Pi,d=Bi,e=Jn,m=Wn,h=Zn,g=po,f=Eo,p=ho,c=mo;return y(),b("div",Hb,[F(l,{path:a.url,method:a.method,server:a.server,tags:s.resolvedSchema.tags,summary:n.$openapidocRef.tr(a.route,"summary",a.currentLocale),description:n.$openapidocRef.tr(a.route,"description",a.currentLocale),deprecated:a.route.deprecated,"current-locale":a.currentLocale},null,8,["path","method","server","tags","summary","description","deprecated","current-locale"]),s.resolvedSchema.servers?(y(),b("div",Fb,[v("h2",zb,E(n.$openapidoc.getLocaleText("openapidoc.servers")),1),(y(!0),b(L,null,M(s.resolvedSchema.servers,r=>(y(),Z(u,{key:r.url,server:r,"current-locale":a.currentLocale},null,8,["server","current-locale"]))),128))])):k("",!0),s.routeInfo?(y(),b("div",Kb,[v("h2",Gb,E(n.$openapidoc.getLocaleText("openapidoc.info")),1),v("div",{class:"oapi-doc-info",innerHTML:s.routeInfo},null,8,Jb)])):k("",!0),s.resolvedSchema.security?(y(),Z(d,{key:2,security:s.resolvedSchema.security,path_doc:a.path_doc,file:a.file,"current-locale":a.currentLocale},null,8,["security","path_doc","file","current-locale"])):k("",!0),s.resolvedSchema.parameters?(y(),Z(e,{key:3,parameters:s.resolvedSchema.parameters,"current-locale":a.currentLocale,components:a.components},null,8,["parameters","current-locale","components"])):k("",!0),a.subParams?(y(),Z(e,{key:4,parameters:a.subParams,"current-locale":a.currentLocale,components:a.components,title:"Global params"},null,8,["parameters","current-locale","components"])):k("",!0),s.resolvedSchema.requestBody?(y(),Z(m,{key:5,"request-body":s.resolvedSchema.requestBody,"current-locale":a.currentLocale,components:a.components},null,8,["request-body","current-locale","components"])):k("",!0),s.resolvedSchema.responses?(y(),Z(h,{key:6,responses:s.resolvedSchema.responses,"current-locale":a.currentLocale,components:a.components},null,8,["responses","current-locale","components"])):k("",!0),a.url?(y(),Z(f,{key:7},{default:ce(()=>[v("h2",Wb,E(n.$openapidoc.getLocaleText("openapidoc.code_simple"))+": ",1),F(g,{url:a.url,"base-url":a.server,method:a.method,"mime-type":i.mimeType,params:i.params},null,8,["url","base-url","method","mime-type","params"])]),_:1})):k("",!0),s.resolvedSchema.examples?(y(),Z(p,{key:8,examples:s.resolvedSchema.examples,"current-locale":a.currentLocale},null,8,["examples","current-locale"])):k("",!0),s.resolvedSchema.callbacks?(y(),Z(c,{key:9,callbacks:s.resolvedSchema.callbacks,server:a.server,"current-locale":a.currentLocale,components:a.components,simples:n.simples,params:i.params,file:a.file,path_doc:a.path_doc},null,8,["callbacks","server","current-locale","components","simples","params","file","path_doc"])):k("",!0)])}const kv=J(Bb,[["render",Zb]]);const Vb={name:"NotFound"},Xb={class:"oapi-not-found"},Qb=v("h1",{class:""},"404",-1),Yb=v("p",{class:"oapi-not-found__msg"},"Not found",-1),ev=[Qb,Yb];function nv(n,t,a,o,i,s){return y(),b("div",Xb,ev)}const Ov=J(Vb,[["render",nv]]);const tv={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search(n){this.searchInPaths(n)}},mounted(){var n;this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch),this.search=(((n=this.$route.query)==null?void 0:n.query)??"").toString(),this.highlightText()},beforeUnmount(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{highlightText(n=null){if(!this.search||this.search==="")return;if(!n){const o=document.querySelectorAll(".highlighted");for(let i=0;i<o.length;i++)o[i].classList.remove("highlighted");n=document.querySelector(".content-container")}if(!n)return;const t=this.search.replace("#",""),a=new RegExp(t,"gi");if(n.nodeType===Node.TEXT_NODE){if(n.textContent.match(a)){document.createElement("span").classList.add("highlighted");const s=n.textContent.replace(a,u=>`<span class="highlighted">${u}</span>`),l=document.createRange().createContextualFragment(s);n.parentNode.replaceChild(l,n)}}else if(n.nodeType===Node.ELEMENT_NODE){const o=n.childNodes;for(let i=0;i<o.length;i++)this.highlightText(o[i])}},toggleSearch(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?(document.body.style.overflow="hidden",setTimeout(()=>{this.$refs.input.focus()},100)):(document.body.style.overflow="auto",this.highlightText())},searchInPaths(n){if(n=n.toLowerCase(),this.list=[],n==="")return;const t=this.$openapidocRef.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),a=this.$openapidocRef.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),o=a.indexOf(n);if(o!==-1){const i=Math.max(o-50,0),s=Math.min(o+n.length+50,a.length);let l="..."+a.substring(i,s)+"...";l=l.replace(n,"<b>"+n+"</b>"),this.list.push({path:"info",title:t,description:l,route:{name:`openapi-${this.path}${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:"info"},query:{query:n}}})}for(const i in this.doc.paths){if(i==="parameters")continue;const s=this.doc.paths[i];for(const l in s){const u=s[l];let d=i;d.startsWith("/")&&(d=d.substring(1)),d.endsWith("/")&&(d=d.substring(-1)),d=d.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_");const e=this.$openapidocRef.tr(u,"summary",this.currentLocale).toLowerCase(),m=this.$openapidocRef.tr(u,"description",this.currentLocale).toLowerCase();let h=null,g=e.indexOf(n);if(g!==-1){const f=m.substring(0,100)+"...";h={path:i,title:e.replace(n,"<b>"+n+"</b>"),description:f+"...",route:{name:`openapi-${this.path}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:d,mathod:l},query:{query:n}}}}if(g=m.indexOf(n),g!==-1){const f=Math.max(g-50,0),p=Math.min(g+n.length+50,m.length);let c="..."+m.substring(f,p)+"...";c=c.replace(n,"<b>"+n+"</b>"),h?h.description=c:h={path:i,title:e,description:c,route:{name:`openapi-${this.path}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:d,mathod:l},query:{query:n}}}}h&&this.list.push(h)}}}}},rv={class:"oapi-search"},av={key:0,class:"oapi-search-overlay"},iv={class:"oapi-search__wrapper"},sv={class:"oapi-search-box"},ov={class:"oapi-search-box__inner"},cv={class:"oapi-search-item"},lv=["innerHTML"],uv=["textContent"],dv=["innerHTML"],pv=v("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),hv=[pv];function mv(n,t,a,o,i,s){const l=Si;return y(),b("div",rv,[i.isSearchOpen?(y(),b("div",av,[v("div",iv,[v("div",sv,[v("div",ov,[vo(v("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>i.search=u),ref:"input",type:"text",class:"oapi-search-box__input",placeholder:"Search..."},null,512),[[So,i.search]]),(y(!0),b(L,null,M(i.list,(u,d)=>(y(),b("div",{key:d,class:"oapi-search-box__list",onClick:t[1]||(t[1]=(...e)=>s.toggleSearch&&s.toggleSearch(...e))},[F(l,{to:u.route,"active-class":""},{default:ce(()=>[v("div",cv,[v("h5",{class:"oapi-search-item__title",innerHTML:u.title},null,8,lv),v("p",{class:"oapi-search-item__path",textContent:E(u.path)},null,8,uv),v("p",{class:"oapi-search-item__text",innerHTML:u.description},null,8,dv)])]),_:2},1032,["to"])]))),128))])])]),v("button",{class:"oapi-search__close",onClick:t[2]||(t[2]=(...u)=>s.toggleSearch&&s.toggleSearch(...u))},hv)])):k("",!0)])}const wv=J(tv,[["render",mv]]);export{bv as _,Sv as a,Ev as b,kv as c,wv as d,Ov as e};
