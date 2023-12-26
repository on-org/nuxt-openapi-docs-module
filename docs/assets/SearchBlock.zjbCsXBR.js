import{_ as J,o as y,c as _,a as v,t as E,R as k,F as L,i as M,d as D,m as Z,w as ce,S as Fn,T as Ti,U as Ee,b as F,V as ko,W as Oo,p as wo,e as To,X as No,Y as Ao,Z as Co}from"./entry.tMswm5PA.js";import{_ as Ni}from"./nuxt-link.o_QJ7VHF.js";import{_ as Ai,a as Ci}from"./OpenApiDropdown.o3VUtLxc.js";import{_ as xo}from"./client-only.gNT5aGZS.js";const qo={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{getUrl(n){let t=n.url;const a=n.variables;for(const o in a){const s=a[o].default;if(s){const c=`{${o}}`;t=t.replace(c,s)}}return t}}},Ro={class:"oapi-info-head"},Lo={key:0,class:"oapi-info-head__version"},$o=["innerHTML"],Mo={key:0},Do={id:"servers"},jo=["href"],Io={key:0},Po={key:1,id:"external-documentation"},Uo={key:2},Bo=["href"];function Ho(n,t,a,o,i,s){return y(),_("div",null,[v("div",Ro,[v("h1",null,E(n.$openapidocRef.tr(a.info,"title",a.currentLocale)),1),a.info.version?(y(),_("span",Lo,E(a.info.version),1)):k("",!0)]),v("div",{class:"oapi-info-block",innerHTML:n.$openapidocRef.tr(a.info,"description",a.currentLocale)},null,8,$o),a.servers?(y(),_("div",Mo,[v("h2",Do,E(n.$openapidoc.getLocaleText("openapidoc.servers")),1),v("ul",null,[(y(!0),_(L,null,M(a.servers,c=>(y(),_("li",{key:c.url},[v("a",{href:s.getUrl(c)},E(s.getUrl(c)),9,jo),D(" - "),c.description?(y(),_("span",Io,E(c.description),1)):k("",!0)]))),128))])])):k("",!0),a.info.externalDocs?(y(),_("h2",Po,E(n.$openapidoc.getLocaleText("openapidoc.external_documentation")),1)):k("",!0),a.info.externalDocs?(y(),_("ul",Uo,[v("li",null,[v("a",{href:a.info.externalDocs.url},E(n.$openapidocRef.tr(a.info.externalDocs,"description",a.currentLocale)),9,Bo)])])):k("",!0)])}const xv=J(qo,[["render",Ho]]),Fo={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},computed:{formattedIn(){if(!this.securityScheme.in)return null;const n=this.securityScheme.in.toString();return n.charAt(0).toUpperCase()+n.slice(1)}}},zo={class:"oapi-sec-scheme"},Ko={class:"oapi-sec-scheme__type"},Go={key:0,class:"oapi-sec-scheme__param"},Jo={key:1,class:"oapi-sec-scheme__param"},Wo={key:2,class:"oapi-sec-scheme__param"},Zo={key:3,class:"oapi-sec-scheme__param"},Vo={key:4,class:"oapi-sec-scheme__flows"},Xo={key:0,class:"oapi-sec-scheme__param"},Qo={key:1,class:"oapi-sec-scheme__param"},Yo={key:2,class:"oapi-sec-scheme__param"},ec={key:3,class:"oapi-sec-scheme-scopes"},nc={class:"oapi-sec-scheme-scopes__title"},tc={class:"oapi-sec-scheme-scopes__list"},rc={key:0,class:"oapi-sec-scheme-scope__descr"};function ac(n,t,a,o,i,s){return y(),_("div",zo,[v("div",Ko,[v("span",null,E(a.securityScheme.type),1)]),a.securityScheme.type==="http"&&a.securityScheme.scheme?(y(),_("div",Go,[D(E(n.$openapidoc.getLocaleText("openapidoc.scheme"))+": ",1),v("code",null,E(a.securityScheme.scheme),1)])):k("",!0),a.securityScheme.type==="http"&&a.securityScheme.scheme==="bearer"&&a.securityScheme.bearerFormat?(y(),_("div",Jo,[D(E(n.$openapidoc.getLocaleText("openapidoc.bearer_format"))+": ",1),v("code",null,E(a.securityScheme.bearerFormat),1)])):k("",!0),a.securityScheme.type==="apiKey"&&a.securityScheme.in?(y(),_("div",Wo,[D(E(n.$openapidoc.getLocaleText("openapidoc.in"))+": ",1),v("code",null,E(a.securityScheme.in),1)])):k("",!0),a.securityScheme.type==="apiKey"&&s.formattedIn&&a.securityScheme.name?(y(),_("div",Zo,[D(E(s.formattedIn)+" name: ",1),v("code",null,E(a.securityScheme.name),1)])):k("",!0),a.securityScheme.type==="oauth2"&&a.securityScheme.flows?(y(),_("div",Vo,[(y(!0),_(L,null,M(a.securityScheme.flows,(c,u)=>(y(),_("div",{key:u,class:"oapi-sec-scheme__flow"},[v("h4",null,E(u),1),c.authorizationUrl?(y(),_("div",Xo,[D(E(n.$openapidoc.getLocaleText("openapidoc.authorization_url"))+": ",1),v("code",null,E(c.authorizationUrl),1)])):k("",!0),c.tokenUrl?(y(),_("div",Qo,[D(E(n.$openapidoc.getLocaleText("openapidoc.token_url"))+": ",1),v("code",null,E(c.tokenUrl),1)])):k("",!0),c.refreshUrl?(y(),_("div",Yo,[D(E(n.$openapidoc.getLocaleText("openapidoc.refresh_url"))+": ",1),v("code",null,E(c.refreshUrl),1)])):k("",!0),c.scopes&&Object.keys(c.scopes).length?(y(),_("div",ec,[v("span",nc,E(n.$openapidoc.getLocaleText("openapidoc.scopes"))+":",1),v("ul",tc,[(y(!0),_(L,null,M(c.scopes,(d,e)=>(y(),_("li",{key:e,class:"oapi-sec-scheme-scope"},[v("code",null,E(e),1),d?(y(),_("div",rc,E(d),1)):k("",!0)]))),128))])])):k("",!0)]))),128))])):k("",!0)])}const xi=J(Fo,[["render",ac]]),ic={name:"OpenApiExampleObject",props:{lite:Boolean,name:{type:String,default:""},nameTag:{type:String,default:"h3"},example:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}},computed:{valueFormatted(){return this.example.value?JSON.stringify(this.example.value,null,2):null}}},sc={class:"oapi-example-obj"},oc=["innerHTML"],cc=["innerHTML"],lc={key:3,class:"oapi-example-obj__value"},uc=["innerHTML"];function dc(n,t,a,o,i,s){return y(),_("div",sc,[a.name?(y(),Z(Fn(a.nameTag),{key:0,class:"oapi-example-obj__name"},{default:ce(()=>[D(E(a.name),1)]),_:1})):k("",!0),a.example.summary?(y(),_("div",{key:1,class:"oapi-example-obj__summary",innerHTML:n.$openapidocRef.tr(a.example,"summary",a.currentLocale)},null,8,oc)):k("",!0),a.example.description?(y(),_("div",{key:2,class:"oapi-example-obj__description",innerHTML:n.$openapidocRef.tr(a.example,"description",a.currentLocale)},null,8,cc)):k("",!0),s.valueFormatted?(y(),_("div",lc,[v("pre",{innerHTML:s.valueFormatted},null,8,uc)])):k("",!0)])}const tn=J(ic,[["render",dc]]),pc={name:"OpenApiSchemaSubObject",props:{title:{type:String,default:""},currentLocale:{type:String,required:!0}},data(){return{}},methods:{}},hc={class:"oapi-schema-sub-obj"},mc={class:"oapi-schema-sub-obj__head"},fc={class:"oapi-schema-sub-obj__title"},gc={class:"oapi-schema-sub-obj__content"};function bc(n,t,a,o,i,s){return y(),_("div",hc,[v("div",mc,[v("div",fc,E(a.title),1)]),v("div",null,[v("ul",gc,[Ti(n.$slots,"default")])])])}const qi=J(pc,[["render",bc]]),yc={name:"OpenApiSchemaProperty",components:{OpenApiSchemaSubObject:qi,OpenApiExpandIcon:Ai},props:{name:{type:String,default:""},required:{type:Boolean},schema:{type:Object,required:!0},noLines:{type:Boolean},hideTitleDescription:{type:Boolean},open:{type:Boolean},currentLocale:{type:String,required:!0}},data(){return{isOpen:!1}},computed:{resolvedSchema(){return this.schema},isPlainArray(){if(!this.resolvedSchema)return!1;const n=["string","integer","number","boolean"];return this.resolvedSchema.type==="array"&&this.resolvedSchema.items&&n.includes(this.resolvedSchema.items.type)},isObject(){return this.resolvedSchema?this.resolvedSchema.type==="object":!1},isArray(){return this.resolvedSchema?this.resolvedSchema.type==="array":!1},isOneOf(){return!!(this.resolvedSchema&&this.resolvedSchema.oneOf)},isAnyOf(){return!!(this.resolvedSchema&&this.resolvedSchema.anyOf)},hasProperties(){return!!Object.keys(this.resolvedSchema.properties||{}).length},exampleString(){return this.resolvedSchema.example?typeof this.resolvedSchema.example=="object"?JSON.stringify(this.resolvedSchema.example,null,2):this.resolvedSchema.example.toString():""},computedOneAnyOf(){return this.resolvedSchema?this.resolvedSchema.oneOf||this.resolvedSchema.anyOf:[]},computedType(){let n=this.resolvedSchema.type||"any";return this.isPlainArray?(n=`array<${this.getType(this.resolvedSchema.items)}>`,this.resolvedSchema.nullable&&(n=`${n} or null`),n):this.getType(this.resolvedSchema)},flags(){const n=[];return this.resolvedSchema.deprecated&&n.push("Deprecated"),this.resolvedSchema.readOnly&&n.push("ReadOnly"),this.resolvedSchema.writeOnly&&n.push("WriteOnly"),this.resolvedSchema.uniqueItems&&n.push("UniqueItems"),n},requiredProps(){return this.isObject&&this.resolvedSchema.required&&Array.isArray(this.resolvedSchema.required)?this.resolvedSchema.required:[]},classes(){return{"oapi-prop--is-object":this.isObject,"oapi-prop--no-lines":this.noLines,"oapi-prop--no-name":!this.name,"oapi-prop--deprecated":!!this.resolvedSchema.deprecated}}},created(){this.isOneOf&&(this.isOpen=!0),this.open&&(this.isOpen=!0)},methods:{getType(n){let t=n.type||"any";if(!n)return t;if(n.oneOf||n.anyOf){const a=n.oneOf||n.anyOf||[];return a.length>0&&a[0].type&&a.every(o=>o.type&&o.type===a[0].type)?a[0].type:"mixed"}else n.format&&(t=`${t}:${n.format}`);return n.nullable&&(t=`${t} or null`),t},toggle(){this.isOpen=!this.isOpen}}},_c={class:"oapi-prop-body"},vc={class:"oapi-prop-head"},Sc={key:1,class:"oapi-prop__name"},Ec={class:"oapi-prop__type"},kc={key:2,class:"oapi-prop__required"},Oc={class:"oapi-prop__content"},wc={key:0,class:"oapi-prop__title"},Tc=["innerHTML"],Nc={key:2,class:"oapi-prop__ext-docs"},Ac=["innerHTML"],Cc=["href"],xc={key:3,class:"oapi-prop-add-info"},qc={key:0},Rc=["innerHTML"],Lc={key:4,class:"oapi-prop-add-info"},$c={key:5,class:"oapi-prop-add-info"},Mc={key:6,class:"oapi-prop-add-info"},Dc={key:7,class:"oapi-prop-add-info"},jc={key:8,class:"oapi-prop-add-info"},Ic={key:9,class:"oapi-prop-add-info"},Pc={key:10,class:"oapi-prop-add-info"},Uc={key:11,class:"oapi-prop-add-info"},Bc={key:12,class:"oapi-prop-add-info"},Hc={key:13,class:"oapi-prop-add-info"},Fc={key:14,class:"oapi-prop-add-info"},zc=["innerHTML"],Kc={key:15,class:"oapi-prop-add-info oapi-prop-add-info--enums"},Gc={key:16,class:"oapi-prop-flags"},Jc={key:1,class:"oapi-prop__props-title"},Wc={key:0,class:"oapi-prop-sub"},Zc={class:"oapi-object__list"},Vc={key:2,class:"oapi-prop__props-title"},Xc={key:0},Qc={key:1},Yc={key:3,class:"oapi-prop-items-of"};function el(n,t,a,o,i,s){const c=Ai,u=br,d=qi;return s.resolvedSchema?(y(),_("li",{key:0,class:Ee(["oapi-prop",s.classes])},[v("div",_c,[v("div",vc,[s.isObject&&s.hasProperties||s.isOneOf?(y(),_("button",{key:0,class:Ee(["oapi-prop-head__expand",{"oapi-prop-head__expand--is-open":i.isOpen}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},[F(c)],2)):k("",!0),a.name?(y(),_("div",Sc,[v("code",null,E(a.name),1)])):k("",!0),v("div",Ec,E(s.computedType),1),a.required?(y(),_("div",kc,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):k("",!0)]),v("div",Oc,[s.resolvedSchema.title&&!a.hideTitleDescription?(y(),_("div",wc,E(n.$openapidocRef.tr(s.resolvedSchema,"title",a.currentLocale)),1)):k("",!0),s.resolvedSchema.description&&!a.hideTitleDescription?(y(),_("div",{key:1,class:"oapi-prop__description",innerHTML:n.$openapidocRef.tr(s.resolvedSchema,"description",a.currentLocale)},null,8,Tc)):k("",!0),s.resolvedSchema.externalDocs?(y(),_("div",Nc,[s.resolvedSchema.externalDocs.description?(y(),_("div",{key:0,class:"oapi-prop__ext-docs-md",innerHTML:n.$openapidocRef.tr(s.resolvedSchema.externalDocs,"description",a.currentLocale)},null,8,Ac)):k("",!0),v("a",{href:s.resolvedSchema.externalDocs.url,target:"_blank"},E(n.$openapidoc.getLocaleText("openapidoc.external_docs")),9,Cc)])):k("",!0),s.resolvedSchema.example?(y(),_("div",xc,[D(E(n.$openapidoc.getLocaleText("openapidoc.example"))+": ",1),s.exampleString.includes(`
`)?(y(),_("br",qc)):k("",!0),v("code",{innerHTML:s.exampleString},null,8,Rc)])):k("",!0),s.resolvedSchema.multipleOf!==void 0?(y(),_("div",Lc,[D(E(n.$openapidoc.getLocaleText("openapidoc.multiple_of"))+": ",1),v("code",null,E(s.resolvedSchema.multipleOf),1)])):k("",!0),s.resolvedSchema.maximum!==void 0?(y(),_("div",$c,[v("code",null,E(s.resolvedSchema.exclusiveMaximum?"<":"<=")+" "+E(s.resolvedSchema.maximum),1)])):k("",!0),s.resolvedSchema.minimum!==void 0?(y(),_("div",Mc,[v("code",null,E(s.resolvedSchema.exclusiveMinimum?">":">=")+" "+E(s.resolvedSchema.minimum),1)])):k("",!0),s.resolvedSchema.maxLength!==void 0?(y(),_("div",Dc,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.maxLength),1)])):k("",!0),s.resolvedSchema.minLength!==void 0?(y(),_("div",jc,[D(E(n.$openapidoc.getLocaleText("openapidoc.minimum"))+": ",1),v("code",null,E(s.resolvedSchema.minLength),1)])):k("",!0),s.resolvedSchema.maxItems!==void 0?(y(),_("div",Ic,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.maxItems),1)])):k("",!0),s.resolvedSchema.minItems!==void 0?(y(),_("div",Pc,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.minItems),1)])):k("",!0),s.resolvedSchema.maxProperties!==void 0?(y(),_("div",Uc,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum_props"))+": ",1),v("code",null,E(s.resolvedSchema.maxProperties),1)])):k("",!0),s.resolvedSchema.minProperties!==void 0?(y(),_("div",Bc,[D(E(n.$openapidoc.getLocaleText("openapidoc.minimum_props"))+": ",1),v("code",null,E(s.resolvedSchema.minProperties),1)])):k("",!0),s.resolvedSchema.additionalProperties!==void 0&&typeof s.resolvedSchema.additionalProperties=="boolean"?(y(),_("div",Hc,[D(E(n.$openapidoc.getLocaleText("openapidoc.additional_properties"))+": ",1),v("code",null,E(!!s.resolvedSchema.additionalProperties),1)])):k("",!0),s.resolvedSchema.pattern?(y(),_("div",Fc,[D(E(n.$openapidoc.getLocaleText("openapidoc.pattern"))+": ",1),v("code",{innerHTML:s.resolvedSchema.pattern},null,8,zc)])):k("",!0),s.resolvedSchema.enum?(y(),_("div",Kc,[D(E(n.$openapidoc.getLocaleText("openapidoc.enum"))+": ",1),(y(!0),_(L,null,M(s.resolvedSchema.enum,e=>(y(),_("span",{key:e},[v("code",null,E(e),1),D(E(" "))]))),128))])):k("",!0),s.flags.length?(y(),_("div",Gc,[(y(!0),_(L,null,M(s.flags,e=>(y(),_("span",{key:e,class:"oapi-prop-flags__flag"},E(e),1))),128))])):k("",!0)]),s.resolvedSchema.not&&(!s.isObject||i.isOpen)?(y(),Z(d,{key:0,"current-locale":a.currentLocale,title:`${n.$openapidoc.getLocaleText("openapidoc.not")}:`},{default:ce(()=>[F(u,{"current-locale":a.currentLocale,schema:s.resolvedSchema.not},null,8,["current-locale","schema"])]),_:1},8,["current-locale","title"])):k("",!0),s.isObject&&i.isOpen&&s.hasProperties?(y(),_("div",Jc,E(n.$openapidoc.getLocaleText("openapidoc.properties"))+": ",1)):k("",!0)]),s.isObject&&i.isOpen&&s.hasProperties?(y(),_("div",Wc,[v("ul",Zc,[(y(!0),_(L,null,M(s.resolvedSchema.properties,(e,h)=>(y(),Z(u,{key:h,schema:e,name:h,"current-locale":a.currentLocale,required:s.requiredProps.includes(h)},null,8,["schema","name","current-locale","required"]))),128))])])):k("",!0),s.resolvedSchema.additionalProperties&&typeof s.resolvedSchema.additionalProperties=="object"&&s.isObject?(y(),Z(d,{key:1,title:`${n.$openapidoc.getLocaleText("openapidoc.additional_properties")}:`,"current-locale":a.currentLocale},{default:ce(()=>[F(u,{schema:s.resolvedSchema.additionalProperties,"current-locale":a.currentLocale},null,8,["schema","current-locale"])]),_:1},8,["title","current-locale"])):k("",!0),(s.isOneOf||s.isAnyOf)&&i.isOpen?(y(),_("div",Vc,[s.isOneOf?(y(),_("span",Xc,E(n.$openapidoc.getLocaleText("openapidoc.one_of"))+":",1)):k("",!0),!s.isOneOf&&s.isAnyOf?(y(),_("span",Qc,E(n.$openapidoc.getLocaleText("openapidoc.any_of"))+":",1)):k("",!0)])):k("",!0),(s.isOneOf||s.isAnyOf)&&i.isOpen?(y(),_("ul",Yc,[(y(!0),_(L,null,M(s.computedOneAnyOf,(e,h)=>(y(),Z(u,{key:h,schema:e,"current-locale":a.currentLocale},null,8,["schema","current-locale"]))),128))])):k("",!0),s.isArray?(y(),Z(d,{key:4,title:"Items:","current-locale":a.currentLocale},{default:ce(()=>[F(u,{schema:s.resolvedSchema.items,"current-locale":a.currentLocale},null,8,["schema","current-locale"])]),_:1},8,["current-locale"])):k("",!0)],2)):k("",!0)}const br=J(yc,[["render",el]]);/*!
 * allof-merge v0.6.3
 * Copyright (C) 2012-2023 Damir Yusipov
 * Date: Mon, 25 Dec 2023 18:04:43 GMT
 */function hn(n,t){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(a[o[i]]=n[o[i]])}return a}function nl(n,t){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(a[o[i]]=n[o[i]])}return a}const tl=(n={},t,a,o)=>{const i=`/${t}`,s=typeof n["/**"]=="function"?n["/**"]({key:t,path:a,value:o}):n["/**"],c=typeof n["/*"]=="function"?n["/*"]({key:t,path:a,value:o}):n["/*"];let u={};if(i in n)u=n[i];else if(!s&&!c)return;return u=typeof u=="function"?u({key:t,path:a,value:o}):u,c&&(u=Object.assign(Object.assign({},c),u)),s?Object.assign(Object.assign({"/**":n["/**"]},s),u):u},Ri=n=>{const t={},a=n.reduce((o,i)=>(Object.keys(i).forEach(s=>o.add(s)),o),new Set);for(const o of a.keys()){const i=n.filter(s=>o in s);if(i.length!==1){if(o.charAt(0)!=="/")throw new Error(`Cannot merge rules. Duplicate key: ${o}. Rules should not have same Rule key`);t[o]=(s,c)=>{const u=i.map(d=>typeof d[o]=="function"?d[o](s,c):d[o]);return Ri(u)}}else t[o]=i[0][o]}return t},xe=n=>typeof n=="object"&&n!==null,bt=n=>Array.isArray(n),rl=(n,t,a={})=>{var o,i;t=bt(t)?t:[t];const s=bt(a.rules)?Ri(a.rules):a.rules,c=[{data:n,state:a.state,path:[],keys:[],keyIndex:-1,rules:s}];for(;c.length>0;){const u=c[c.length-1];if(u.keyIndex>=u.keys.length){for(;!((o=u.hooks)===null||o===void 0)&&o.length;)u.hooks.pop()();c.pop();continue}const d=u.keys[u.keyIndex++],[e,h,m]=c.length>1?[u.data[d],[...u.path,d],tl(u.rules,d,[...u.path,d],u.data[d])]:[u.data,u.path,s];let g={value:e,path:h,key:d,state:u.state,rules:m};const f=[];for(const p of t){if(!p||typeof p!="function")continue;const l=(i=p(g))!==null&&i!==void 0?i:{},{terminate:r,done:S,exitHook:w}=l,O=nl(l,["terminate","done","exitHook"]);if(r)return;if(w&&f.push(w),g=Object.assign(Object.assign({},g),O),S){g=null;break}}if(g&&xe(g.value)){const p=bt(g.value)?[...g.value.keys()]:Object.keys(g.value);c.push({hooks:f,state:g.state,data:g.value,path:h,keys:p,keyIndex:0,rules:g.rules})}else for(;f.length;)f.pop()()}},al=()=>{const n=new WeakMap;let t;return[({value:a})=>{t=a},({value:a,path:o,key:i,state:s})=>{if(i=o.length?i:"#",xe(t)){if(n.has(t))return s.node[i]=n.get(t),{done:!0};const c=Array.isArray(a)?[]:{};s.node[i]=c,n.set(t,c)}else s.node[i]=a;return{value:a,state:Object.assign(Object.assign({},s),{node:s.node[i]})}}]};let Li=class extends Map{add(t,a){const o=this.get(t);return o?o.push(a):this.set(t,[a]),this}};const il=(n,t)=>{const a={};for(const o of t)o in n&&(a[o]=n[o],delete n[o]);return a},$i=(n,t)=>{if(Array.isArray(n)&&Array.isArray(t))return[...n,...t];if(xe(n)&&xe(t)){const a=Object.assign({},n);for(const o of Object.keys(t))a[o]=$i(a[o],t[o]);return a}return t},tr=n=>n&&n.$ref&&typeof n.$ref=="string",Vr=n=>n&&n.anyOf&&Array.isArray(n.anyOf),Xr=n=>n&&n.oneOf&&Array.isArray(n.oneOf),Mi=(n,t="")=>{const[a=t,o]=n.split("#"),i=o&&o!=="/"?o:"";return{filePath:a,pointer:i,normalized:sl(a,i),jsonPath:ji(i)}},sl=(n,t)=>n?`${n}${t?"#"+t:""}`:t?`#${t}`:"#",Di=(n,t,a=[t])=>{if(!xe(n))return;let o=n;const i=ji(t);for(const s of i)if(Array.isArray(o)&&o.length>+s)o=o[+s];else if(xe(o)&&s in o)o=o[s];else{if(!tr(o))return;{const c=Mi(o.$ref);o=c.filePath||a.includes(c.pointer)?void 0:Di(n,c.pointer,[...a,c.pointer])}}return o},zn={slash:/\//g,tilde:/~/g,escapedSlash:/~1/g,escapedTilde:/~0/g},ji=n=>n.split("/").map(t=>decodeURIComponent(t.replace(zn.escapedSlash,"/").replace(zn.escapedTilde,"~"))).slice(1),yr=n=>n.length?"/"+n.map(t=>encodeURIComponent(String(t).replace(zn.tilde,"~0").replace(zn.slash,"~1"))).join("/"):"",ol=(n,t)=>JSON.stringify(n)==JSON.stringify(t),cl=n=>{let t=1;for(;n*t%1!=0;)t*=10;return t};function ll(n){const t=n.reduce((a,o)=>Math.max(a,cl(o)),0);return n.reduce((a,o)=>Math.round(a*t*o*t/Ii(a*t,o*t))/t)}function Ii(n,t){return t===0?n:Ii(t,n%t)}const Pi=n=>{if(n.length===0)return[[]];const t=n[0],a=n.slice(1),o=Pi(a),i=[];for(const s of t)for(const c of o)i.push([s,...c]);return i},ul=n=>{const t=[];for(const a of n){if(!("properties"in a))continue;const o=new Set(Object.keys(a.properties)),i=new Li;for(const c of o.values())for(const u of n)if(!(u==a||u.properties&&c in u.properties))if("patternProperties"in u&&u.patternProperties)for(const d of Object.keys(u.patternProperties))new RegExp(d).test(c)||o.delete(c);else"additionalProperties"in u&&(u.additionalProperties===!1?o.delete(c):typeof u.additionalProperties=="object"&&i.add(c,u.additionalProperties));if(!o.size)continue;const s={};for(const c of o.values())i.has(c)?s[c]={allOf:[a.properties[c],...i.get(c)]}:s[c]=a.properties[c];t.push(s)}return t},dl=n=>{const t=[];for(const a of n){if(!("patternProperties"in a))continue;const o=new Set(Object.keys(a.patternProperties));for(const s of n)if(s!=a&&"additionalProperties"in s&&!s.additionalProperties)for(const c of o.values())s.patternProperties&&c in s.patternProperties||o.delete(c);if(!o.size)continue;const i={};for(const s of o.values())i[s]=a.patternProperties[s];t.push(i)}return t},Qr=n=>{const t={},a=_r(n);for(const[o,i]of Object.entries(a))i.includes(!1)?t[o]=!1:t[o]=i.length>1?{allOf:i}:i[0];return t},pl=(n,t)=>!!n.reduce((a,o)=>a&&o===!0,!0)||_n(n,t),hl=()=>"Could not merge values, they are probably incompatible",ml=n=>`Merge rule not found for key: ${n}`,_r=n=>{const t={};for(const a of n)for(const o of Object.keys(a))Array.isArray(t[o])?t[o].push(a[o]):t[o]=[a[o]];return t},_n=(n,t)=>{if(n.includes(!1))return!1;const a={},o=_r(n);"properties"in o&&(o.properties=ul(n)),"patternProperties"in o&&(o.patternProperties=dl(n));for(let[i,s]of Object.entries(o)){if(!s.length)continue;const c=t.mergeRules;let u=`/${i}`in c?c[`/${i}`]:c["/?"];u=u&&!("$"in u)&&"/"in u?u["/"]:u,u=typeof u=="function"?u():u;const d=u&&"$"in u?u.$:void 0;if(!d)throw new Error(ml(i));const e=s.length>1?d(s,Object.assign(Object.assign({},t),{allOfItems:n})):s[0];e===void 0?t.mergeError(s):a[i]=e}return Object.keys(a).length?a:void 0},me=n=>n[n.length-1],De=n=>n.reduce((t,a)=>t||a,!1),sn=n=>Math.min(...n),on=n=>Math.max(...n),fl=n=>n.length>1?n.reduce((t,a)=>`${t}(?=${a})`,""):n[0],Ui=([n,...t])=>t.reduce((a,o)=>a.filter(i=>o.includes(i)),n),gl=([n,...t])=>t.find(a=>!ol(a,n))?void 0:n,ue=([n,...t])=>t.reduce((a,o)=>$i(a,o),n),ln=n=>Pi(n).map(t=>({allOf:t})),bl=n=>({anyOf:n}),yl=n=>ll(n),_l=(n,t)=>{const a=n.map(i=>i.map(s=>JSON.stringify(s))),o=Ui(a).map(i=>JSON.parse(i)).sort();return o.length||t.mergeError(n),o},vl=(n,t)=>{const a=n.map(i=>Array.isArray(i)?i:[i]),o=Ui(a);return o.length===1?o[0]:o.length?o:void 0},Bi=n=>{const t=new Set;for(const a of n)for(const o of a)t.add(o);return Array.from(t).sort()},Sl=(n,t)=>{const a={},o=_r(n);for(const[i,s]of Object.entries(o))if(s.reduce((c,u)=>c&&Array.isArray(u),!0))a[i]=Bi(s);else{const c=s.map(u=>Array.isArray(u)?{required:u}:u);a[i]=c.length>1?{allOf:c}:c[0]}return a},Hi=(n,t)=>{if(!n.reduce((d,e)=>Array.isArray(e)||d,!1))return _n(n,t);const a=[];let o=1/0,i=0;const s=new Li;for(const d of t.allOfItems)"additionalItems"in d&&d.additionalItems&&"items"in d&&Array.isArray(d.items)&&s.add(d.items.length,d.additionalItems),"items"in d&&(a.push(d.items),Array.isArray(d.items)&&(i=Math.max(i,d.items.length),"additionalItems"in d&&d.additionalItems===!1&&(o=Math.min(o,d.items.length))));const c=Math.min(i,o),u=[...Array(c)].map(()=>({allOf:[]}));for(const d of a)if(Array.isArray(d))for(let e=0;e<c;e++){const h=[];for(let m=0;m<=e;m++)s.has(m)&&h.push(...s.get(m));e<d.length?u[e].allOf.push(h.length?Object.assign(Object.assign({},d[e]),{allOf:h}):d[e]):u[e].allOf.push(!h.length||{allOf:h})}else u.forEach(({allOf:e})=>e.push(d));return u},El=(n,t)=>{const a=[],o=[];for(const i of t.allOfItems)"items"in i&&!Array.isArray(i.items)&&o.push(i.items),"additionalItems"in i&&"items"in i&&Array.isArray(i.items)&&a.push(i.additionalItems);return o.length&&a.forEach(i=>i.allOf=o),_n(a,t)},ne=(n="draft-06",t={})=>Object.assign(Object.assign(Object.assign(Object.assign({"/maximum":{$:sn},"/exclusiveMaximum":{$:De},"/minimum":{$:on},"/exclusiveMinimum":{$:De},"/maxLength":{$:sn},"/minLength":{$:on},"/maxItems":{$:sn},"/minItems":{$:on},"/uniqueItems":{$:De},"/maxProperties":{$:sn},"/minProperties":{$:on},"/required":{$:Bi},"/multipleOf":{$:yl},"/enum":{$:_l},"/type":{$:vl},"/allOf":{"/*":()=>ne(n,t),$:ln},"/not":{$:bl},"/oneOf":{"/*":()=>ne(n,t),$:ln,sibling:["definitions","$defs","$id","$schema"]},"/anyOf":{"/*":()=>ne(n,t),$:ln,sibling:["definitions","$defs","$id","$schema"]},"/properties":{"/*":()=>ne(n,t),$:Qr},"/items":()=>Object.assign(Object.assign({},ne(n,t)),{$:Hi,"/*":({key:a})=>typeof a=="number"?ne(n,t):{}}),"/additionalProperties":()=>Object.assign(Object.assign({},ne(n,t)),{$:pl}),"/additionalItems":()=>Object.assign(Object.assign({},ne(n,t)),{$:El}),"/patternProperties":{"/*":()=>ne(n,t),$:Qr},"/pattern":{$:fl},"/readOnly":{$:De},"/writeOnly":{$:De},"/example":{$:ue},"/examples":{$:ue},"/deprecated":{$:De}},n!=="draft-04"?{"/propertyNames":()=>ne(n,t),"/contains":()=>ne(n,t),"/dependencies":{"/*":()=>ne(n,t),$:Sl},"/const":{$:gl},"/exclusiveMaximum":{$:sn},"/exclusiveMinimum":{$:on},"/$defs":{"/*":()=>ne(n,t),$:ue}}:{}),{"/definitions":{"/*":()=>ne(n,t),$:ue},"/xml":{$:ue},"/externalDocs":{$:me},"/description":{$:me},"/title":{$:me},"/format":{$:me},"/default":{$:me},"/?":{$:me}}),t),{$:_n}),un=n=>ne(n,{"/discriminator":{$:ue},"/oneOf":{"/*":()=>un(n),$:ln,sibling:["discriminator"]},"/anyOf":{"/*":()=>un(n),$:ln,sibling:["discriminator"]}}),Vn=n=>n==="3.0.x"?Object.assign(Object.assign({},un("draft-04")),{"/items":({key:t})=>Object.assign(Object.assign({},un("draft-04")),{$:Hi})}):un("draft-06"),Ie=n=>({"/*":{"/schema":Vn(n)}}),Yr=n=>({"/content":{"/*":{"/schema":Vn(n),"/encoding":{"/headers":Ie(n)}}}}),ea=n=>({"/*":{"/headers":Ie(n),"/content":{"/*":{"/schema":Vn(n),"/encoding":{"/headers":Ie(n)}}}}}),kl=(n="3.0.x")=>({"/paths":{"/*":{"/*":{"/parameters":Ie(n),"/requestBody":Yr(n),"/responses":ea(n)},"/parameters":Ie(n)}},"/components":{"/schemas":{"/*":Vn(n)},"/responses":ea(n),"/parameters":Ie(n),"/requestBodies":{"/*":Yr(n)},"/headers":Ie(n)}}),je=ne("draft-06",{"/args":()=>je,"/nullable":{$:De},"/specifiedByURL":{$:me},"/values":{$:ue,"/*":{$:ue,"/description":{$:me},"/deprecated":{$:me,"/reason":{$:me}}}},"/interfaces":{$:ue,"/*":{$:ue}},"/directives":{$:ue,"/*":()=>Object.assign(Object.assign({},je),{"/meta":{$:ue}})}}),Ol={"/queries":{"/*":()=>je},"/mutations":{"/*":()=>je},"/subscriptions":{"/*":()=>je},"/components":{"/*":{"/*":je},"/directives":{"/*":{"/args":()=>je}}}},Tn=(n,t,a)=>{const o=a.sibling||[],i=n,s=t,c=i[s],u=hn(i,[typeof s=="symbol"?s:s+""]),d=il(u,o);return Object.keys(u).length?Object.assign({[t]:c.map(e=>({allOf:[u,e]}))},d):n},Fi=(n,t,a,o)=>{const i=[],s=yr(t),c=[],u={pointer:s,data:"",refs:[]};for(const e of n)if(tr(e)&&!c.includes(e.$ref)){u.data===""&&(u.data=JSON.stringify(n));const{$ref:h}=e,m=hn(e,["$ref"]),{filePath:g,normalized:f,pointer:p}=Mi(h),l=o.find(S=>S.refs.includes(e.$ref)&&S.data===u.data&&p!==S.pointer);if(l)return{allOfItems:[{$ref:"#"+l.pointer}],brokenRefs:c};u.refs.push(f);const r=g?void 0:Di(a,p);r===void 0?(c.push(f),i.push(e)):i.push(r),Object.keys(m).length&&i.push(m)}else i.push(e);u.refs.length&&o.push(u);const d=zi(i);return d.find(e=>tr(e)&&!c.includes(e.$ref))?Fi(d,t,a,o):{allOfItems:d,brokenRefs:c}},zi=n=>{const t=[];for(const a of n)if(xe(a))if(a.allOf&&Array.isArray(a.allOf)){const{allOf:o}=a,i=hn(a,["allOf"]),s=Object.keys(i).length?[...o,i]:o;t.push(...zi(s))}else t.push(a);return t},wl=n=>{if(typeof n!="object"||!n)return ne();if("openapi"in n&&typeof n.openapi=="string"&&/3.+/.test(n.openapi)){const t=n.openapi.startsWith("3.1")?"3.1.x":"3.0.x";return kl(t)}return"graphapi"in n&&typeof n.graphapi=="string"?Ol:ne()},Tl=(n,t)=>{var a;const o=(a=t==null?void 0:t.rules)!==null&&a!==void 0?a:wl(n);return((i,s=[],c={})=>{var u;s=Array.isArray(s)?s:[s];const d={"#":void 0},e=Object.assign({state:Object.assign(Object.assign({},(u=c.state)!==null&&u!==void 0?u:{}),{root:d,node:d})},c.rules?{rules:c.rules}:{}),[h,m]=al();return rl(i,[h,...s,m],e),d["#"]})(n,Nl(t),{rules:o})},Nl=n=>{const t=new Map;let a=n==null?void 0:n.source;const o=[];return({value:i,key:s,path:c,rules:u,state:d})=>{c.length||n!=null&&n.source||(a=i);const e=S=>{var w;const O=Al(c);O?t.set(...O):(w=n==null?void 0:n.onMergeError)===null||w===void 0||w.call(n,hl(),c,S)},h=()=>{const{node:S}=d,w=yr(c);if(t.has(w)){const O=t.get(w),T=S[s];Array.isArray(T)&&(T.length<2&&e((i==null?void 0:i.allOf)||[]),T.splice(O,1))}};if(!xe(i)||Array.isArray(i))return{exitHook:h};if(!(S=>!!S&&S["/allOf"]&&"$"in S["/allOf"])(u))return{exitHook:h};const{allOf:m}=i,g=hn(i,["allOf"]),f=[];if(Array.isArray(m)&&f.push(...m),f.length)Object.keys(g).length&&f.push(g);else{const{$ref:S}=g,w=hn(g,["$ref"]);if(n!=null&&n.mergeRefSibling&&S&&Object.keys(w).length>0)f.push({$ref:S},w);else if(n!=null&&n.mergeCombinarySibling){if(Vr(g)&&u["/anyOf"])return{value:Tn(g,"anyOf",u["/anyOf"]),exitHook:h};if(Xr(g)&&u["/oneOf"])return{value:Tn(g,"oneOf",u["/oneOf"]),exitHook:h}}}if(!f.length)return{value:g,exitHook:h};const{allOfItems:p,brokenRefs:l}=Fi(f,c,a,o);if(l.length)return l.forEach(S=>{var w;return(w=n==null?void 0:n.onRefResolveError)===null||w===void 0?void 0:w.call(n,"Cannot resolve $ref",c,S)}),{value:{allOf:p},exitHook:h};if(p.length<2)return{value:p.length?p[0]:{},exitHook:h};const r=_n(p,{allOfItems:p,mergeRules:u,mergeError:e});return n!=null&&n.mergeCombinarySibling&&Vr(r)?{value:Tn(r,"anyOf",u["/anyOf"]),exitHook:h}:n!=null&&n.mergeCombinarySibling&&Xr(r)?{value:Tn(r,"oneOf",u["/oneOf"]),exitHook:h}:{value:r,exitHook:h}}},Al=n=>{for(let t=n.length-2;t>=0;t--)if(n[t]==="anyOf"||n[t]==="oneOf"){const a=n.slice(0,t+1);return[yr(a),n[t+1]]}},yt={};function Cl(n){if(typeof n!="object"||!Array.isArray(n.allOf))return n;const t=n.$ref,a=Tl(n,{onMergeError:o=>console.error(o)});return t?a.$ref=t:a.$ref&&delete a.$ref,a}function na(n,t=[],a,o){if(typeof n!="string"||!n.startsWith("#"))return n;if(yt[n])return yt[n];if(t.includes(n))return{$recursive:!0,$ref:n};const[i,s,c,u]=n.split("/");let d=null;if(s==="definitions"){if(!a||!a[c])return{};d=a[c],d.title=u,t.push(n)}else{if(!o||!o[c]||!o[c][u])return{};d=o[c][u],d.title=u,t.push(n)}return d?yt[n]=mn(d,t,a,o):null}function mn(n,t=[],a={},o={},i=!0){if(typeof n=="string")return na(n,t,a,o);if(!n||typeof n!="object")return n;if(Array.isArray(n))return n.map(c=>mn(c,t,a,o,i));if(n&&"$ref"in n){const c=n.$ref,u=na(c,t,a,o);return u?u.$ref||!i?u:{...u,$path:c}:{}}let s={};for(const[c,u]of Object.entries(n)){let d=u;typeof d=="string"&&d.startsWith("#")&&(d={$ref:u}),s[c]=mn(d,t,a,o,c!=="allOf")}return"allOf"in s&&(s=Cl(s)),s}const xl={name:"OpenApiObjectModel",components:{OpenApiSchemaProperty:br},props:{lite:Boolean,schema:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}},computed:{resolvedSchema(){return mn(this.schema,[],this.$openapidocRef.definitions,this.$openapidocRef.components)},requiredProps(){return this.resolvedSchema.required&&Array.isArray(this.resolvedSchema.required)?this.resolvedSchema.required:[]}},methods:{}},ql={class:"oapi-object__list"};function Rl(n,t,a,o,i,s){const c=br;return y(),_("div",{class:Ee(["oapi-object",{"oapi-object--lite":a.lite}])},[v("ul",ql,[F(c,{"hide-title-description":!a.lite,schema:s.resolvedSchema,"current-locale":a.currentLocale,"no-lines":"",open:""},null,8,["hide-title-description","schema","current-locale"])])],2)}const qe=J(xl,[["render",Rl]]),Ll={props:{tabNames:{type:Object,default:null}},data(){return{activeSlotName:null}},computed:{computedTabNames(){return this.tabNames?this.tabNames:Object.keys(this.$slots).reduce((n,t)=>({...n,[t]:this.tabNames&&this.tabNames[t]||t}),{})}},created(){this.activeSlotName=Object.keys(this.$slots)[0]}},$l={class:"oapi-tabs"},Ml={class:"oapi-tabs-list"},Dl=["onClick"],jl={class:"oapi-tabs__content"};function Il(n,t,a,o,i,s){return y(),_("div",$l,[v("ul",Ml,[(y(!0),_(L,null,M(s.computedTabNames,(c,u)=>(y(),_("li",{key:u,class:Ee(["oapi-tabs-list__item",{"oapi-tabs-list__item--is-active":u===i.activeSlotName}]),onClick:d=>i.activeSlotName=u},E(c),11,Dl))),128))]),v("div",jl,[Ti(n.$slots,i.activeSlotName)])])}const Ki=J(Ll,[["render",Il]]),Pl={name:"OpenApiMediaTypes",components:{OpenApiExampleObject:tn,OpenApiTabs:Ki,OpenApiObjectModel:qe,OpenApiDropdown:Ci},props:{data:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{selectedMediaType:null}},computed:{types(){return Object.keys(this.data).map(n=>({value:n}))},medaTypeObject(){return this.selectedMediaType===null?null:this.data[this.selectedMediaType]||null}},created(){this.selectedMediaType=Object.keys(this.data||{})[0]||null},methods:{}},Ul={class:"oapi-req-body-obj"},Bl={class:"oapi-req-body-obj-content-type"},Hl={class:"oapi-req-body-obj-content-type__label"},Fl={class:"oapi-req-body-obj__schema"},zl={class:"oapi-req-body-obj__example"},Kl=["innerHTML"],Gl={class:"oapi-req-body-obj__examples"};function Jl(n,t,a,o,i,s){const c=Ci,u=qe,d=tn,e=Ki;return y(),_("div",Ul,[v("div",Bl,[v("span",Hl,E(n.$openapidoc.getLocaleText("openapidoc.content_type"))+": ",1),F(c,{modelValue:i.selectedMediaType,"onUpdate:modelValue":t[0]||(t[0]=h=>i.selectedMediaType=h),options:s.types,"text-prop":"value","value-prop":"value"},null,8,["modelValue","options"])]),(y(),Z(e,{key:i.selectedMediaType},ko({_:2},[s.medaTypeObject&&s.medaTypeObject.schema?{name:"Schema",fn:ce(()=>[v("div",Fl,[F(u,{schema:s.medaTypeObject.schema,"current-locale":a.currentLocale,lite:""},null,8,["schema","current-locale"])])]),key:"0"}:void 0,s.medaTypeObject&&s.medaTypeObject.example&&!s.medaTypeObject.examples?{name:"Example",fn:ce(()=>[v("div",zl,[v("pre",{innerHTML:JSON.stringify(s.medaTypeObject.example,null,2)},null,8,Kl)])]),key:"1"}:void 0,s.medaTypeObject&&s.medaTypeObject.examples?{name:"Examples",fn:ce(()=>[v("div",Gl,[(y(!0),_(L,null,M(s.medaTypeObject.examples,(h,m)=>(y(),Z(d,{key:m,example:h,name:m,"current-locale":a.currentLocale,"name-tag":"h4"},null,8,["example","name","current-locale"]))),128))])]),key:"2"}:void 0]),1024))])}const Re=J(Pl,[["render",Jl]]),Wl={name:"OpenApiParameter",components:{OpenApiMediaTypes:Re,OpenApiObjectModel:qe},props:{data:{type:Object,required:!0},hideName:Boolean,hideDescription:Boolean,lite:Boolean,currentLocale:{type:String,required:!0}},data(){return{}},computed:{flags(){const n=[];return this.data.deprecated&&n.push("Deprecated"),this.data.allowEmptyValue&&n.push("Allow empty"),this.data.allowReserved&&n.push("Allow reserved"),this.data.allowEmptyValue&&n.push("Explode"),n},exampleString(){return this.data.example?typeof this.data.example=="object"?JSON.stringify(this.data.example,null,2):this.data.example.toString():""}}},Zl={class:"oapi-res-param"},Vl={key:0,class:"oapi-res-param__name"},Xl={key:1,class:"oapi-res-param__required"},Ql={key:2,class:"oapi-res-param-flags"},Yl=["innerHTML"],eu={key:4,class:"oapi-res-param__param"},nu={key:5,class:"oapi-res-param__param"},tu={key:6,class:"oapi-res-param__param"},ru={key:0},au=["innerHTML"],iu={key:7,class:"oapi-res-param__examples"},su={class:"oapi-res-param__muted"},ou={class:"oapi-res-param-example__name"},cu={key:0,class:"oapi-res-param-example__summary"},lu=["innerHTML"],uu={key:2,class:"oapi-res-param-example__value"},du=["innerHTML"],pu={key:8,class:"oapi-res-param__schema"},hu={class:"oapi-res-param__muted"},mu={key:9,class:"oapi-res-param__content"},fu={class:"oapi-res-param__muted"};function gu(n,t,a,o,i,s){const c=qe,u=Re;return y(),_("div",Zl,[a.data.name&&!a.hideName?(y(),_("div",Vl,[v("code",null,E(a.data.name),1)])):k("",!0),a.data.required?(y(),_("div",Xl,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):k("",!0),s.flags.length?(y(),_("div",Ql,[(y(!0),_(L,null,M(s.flags,d=>(y(),_("span",{key:d,class:"oapi-res-param-flags__flag"},E(d),1))),128))])):k("",!0),a.data.description&&!a.hideDescription?(y(),_("div",{key:3,class:"oapi-res-param__description",innerHTML:n.$openapidocRef.tr(a.data,"description",a.currentLocale)},null,8,Yl)):k("",!0),a.data.in?(y(),_("div",eu,[D(E(n.$openapidoc.getLocaleText("openapidoc.in"))+": ",1),v("code",null,E(a.data.in),1)])):k("",!0),a.data.style?(y(),_("div",nu,[D(E(n.$openapidoc.getLocaleText("openapidoc.style"))+": ",1),v("code",null,E(a.data.style),1)])):k("",!0),a.data.example?(y(),_("div",tu,[D(E(n.$openapidoc.getLocaleText("openapidoc.example"))+": ",1),s.exampleString.includes(`
`)?(y(),_("br",ru)):k("",!0),v("code",{innerHTML:s.exampleString},null,8,au)])):k("",!0),a.data.examples?(y(),_("div",iu,[v("div",su,E(n.$openapidoc.getLocaleText("openapidoc.examples"))+": ",1),(y(!0),_(L,null,M(a.data.examples,(d,e)=>(y(),_("div",{key:e,class:"oapi-res-param-example"},[v("div",ou,E(e),1),d.summary?(y(),_("div",cu,E(n.$openapidocRef.tr(d,"summary",a.currentLocale)),1)):k("",!0),d.description?(y(),_("div",{key:1,class:"oapi-res-param-example__description",innerHTML:n.$openapidocRef.tr(d,"description",a.currentLocale)},null,8,lu)):k("",!0),d.value?(y(),_("div",uu,[v("pre",{innerHTML:JSON.stringify(d.value,null,2)},null,8,du)])):k("",!0)]))),128))])):k("",!0),a.data.schema?(y(),_("div",pu,[v("div",hu,E(n.$openapidoc.getLocaleText("openapidoc.schema"))+": ",1),F(c,{lite:"",schema:a.data.schema,"current-locale":a.currentLocale},null,8,["schema","current-locale"])])):k("",!0),a.data.content?(y(),_("div",mu,[v("div",fu,E(n.$openapidoc.getLocaleText("openapidoc.content"))+": ",1),F(u,{"current-locale":a.currentLocale,data:a.data.content},null,8,["current-locale","data"])])):k("",!0)])}const rn=J(Wl,[["render",gu]]),bu={name:"OpenApiResponse",components:{OpenApiParameter:rn,OpenApiObjectModel:qe,OpenApiMediaTypes:Re},props:{response:{type:Object,required:!0},currentLocale:{type:String,required:!0},lite:Boolean},data(){return{}},computed:{isEmpty(){return(!this.response.description||this.lite)&&(!this.response.headers||!Object.keys(this.response.headers).length)&&!this.response.content&&!this.response.schema}}},yu={key:0,class:"oapi-response"},_u=["innerHTML"],vu={key:1,class:"oapi-response__section"},Su={class:"oapi-response__section-title"},Eu={class:"oapi-response-header__name"},ku={key:2,class:"oapi-response__section"},Ou={key:0,class:"oapi-response__section-title"},wu={class:"oapi-response-media-types"},Tu={key:3,class:"oapi-response__schema"},Nu={key:0,class:"oapi-response__section-title"},Au={class:"oapi-response-media-types"};function Cu(n,t,a,o,i,s){const c=rn,u=Re,d=qe;return s.isEmpty?k("",!0):(y(),_("div",yu,[a.response.description&&!a.lite?(y(),_("div",{key:0,class:"oapi-response__description",innerHTML:n.$openapidocRef.tr(a.response,"description",a.currentLocale)},null,8,_u)):k("",!0),a.response.headers?(y(),_("div",vu,[v("strong",Su,E(n.$openapidoc.getLocaleText("openapidoc.headers")),1),(y(!0),_(L,null,M(a.response.headers,(e,h)=>(y(),_("div",{key:h,class:"oapi-response-header"},[v("div",Eu,[v("code",null,E(h),1)]),F(c,{data:e,"current-locale":a.currentLocale,"hide-name":""},null,8,["data","current-locale"])]))),128))])):k("",!0),a.response.content?(y(),_("div",ku,[a.response.headers?(y(),_("strong",Ou,E(n.$openapidoc.getLocaleText("openapidoc.content")),1)):k("",!0),v("div",wu,[F(u,{data:a.response.content,"current-locale":a.currentLocale,lite:""},null,8,["data","current-locale"])])])):k("",!0),a.response.schema?(y(),_("div",Tu,[a.response.headers||a.response.content?(y(),_("strong",Nu,E(n.$openapidoc.getLocaleText("openapidoc.schema")),1)):k("",!0),v("div",Au,[F(d,{schema:a.response.schema,"current-locale":a.currentLocale,lite:""},null,8,["schema","current-locale"])])])):k("",!0)]))}const Xn=J(bu,[["render",Cu]]),xu={components:{OpenApiParameter:rn,OpenApiResponse:Xn,OpenApiSecurityScheme:xi,OpenApiMediaTypes:Re,OpenApiExampleObject:tn,OpenApiObjectModel:qe},props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},qu={key:0},Ru={id:"security-schemes"},Lu=["id","textContent"],$u=["innerHTML"];function Mu(n,t,a,o,i,s){const c=xi;return y(),_("div",null,[a.components.securitySchemes?(y(),_("div",qu,[v("h2",Ru,E(n.$openapidoc.getLocaleText("openapidoc.security_schemes")),1),(y(!0),_(L,null,M(a.components.securitySchemes,(u,d)=>(y(),_("div",{key:d,class:"oapi-schema-block"},[v("h3",{id:"security-schemes-"+d,textContent:E(d)},null,8,Lu),u.description?(y(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(u,"description",a.currentLocale)},null,8,$u)):k("",!0),F(c,{"current-locale":a.currentLocale,"security-scheme":u},null,8,["current-locale","security-scheme"])]))),128))])):k("",!0)])}const Rv=J(xu,[["render",Mu]]),Du={props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},ju={key:0},Iu={id:"schemas"},Pu=["id","textContent"],Uu=["innerHTML"],Bu=["innerHTML"],Hu={key:1},Fu={id:"examples"},zu={key:2},Ku={id:"request-bodies"},Gu=["id","textContent"],Ju={class:"oapi-schema-block__required"},Wu=["innerHTML"],Zu={key:3},Vu={id:"responses"},Xu=["id","textContent"],Qu=["innerHTML"],Yu={key:4},ed={id:"parameters"},nd=["id","textContent"],td=["innerHTML"],rd={key:5},ad={id:"headers"},id=["id","textContent"],sd=["innerHTML"];function od(n,t,a,o,i,s){const c=qe,u=tn,d=Re,e=Xn,h=rn;return y(),_("div",null,[a.components.schemas?(y(),_("div",ju,[v("h2",Iu,E(n.$openapidoc.getLocaleText("openapidoc.schemas")),1),(y(!0),_(L,null,M(a.components.schemas,(m,g)=>(y(),_("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,Pu),m.title?(y(),_("div",{key:0,class:"oapi-schema-block__title",innerHTML:n.$openapidocRef.tr(m,"title",a.currentLocale)},null,8,Uu)):k("",!0),m.description?(y(),_("div",{key:1,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Bu)):k("",!0),F(c,{class:"oapi-schema-block__model",schema:m,"current-locale":a.currentLocale,root:""},null,8,["schema","current-locale"])]))),128))])):k("",!0),a.components.examples?(y(),_("div",Hu,[v("h2",Fu,E(n.$openapidoc.getLocaleText("openapidoc.examples")),1),(y(!0),_(L,null,M(a.components.examples,(m,g)=>(y(),_("div",{key:g,class:"oapi-schema-block"},[F(u,{example:m,name:g,"current-locale":a.currentLocale,"name-tag":"h3"},null,8,["example","name","current-locale"])]))),128))])):k("",!0),a.components.requestBodies?(y(),_("div",zu,[v("h2",Ku,E(n.$openapidoc.getLocaleText("openapidoc.request_bodies")),1),(y(!0),_(L,null,M(a.components.requestBodies,(m,g)=>(y(),_("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,Gu),v("div",Ju,E(n.$openapidoc.getLocaleText("openapidoc.required")),1),m.description?(y(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Wu)):k("",!0),F(d,{data:m.content,"current-locale":a.currentLocale},null,8,["data","current-locale"])]))),128))])):k("",!0),a.components.responses?(y(),_("div",Zu,[v("h2",Vu,E(n.$openapidoc.getLocaleText("openapidoc.responses")),1),(y(!0),_(L,null,M(a.components.responses,(m,g)=>(y(),_("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,Xu),m.description?(y(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Qu)):k("",!0),F(e,{response:m,"current-locale":a.currentLocale},null,8,["response","current-locale"])]))),128))])):k("",!0),a.components.parameters?(y(),_("div",Yu,[v("h2",ed,E(n.$openapidoc.getLocaleText("openapidoc.parameters")),1),n.name!=="Authorization"?(y(!0),_(L,{key:0},M(a.components.parameters,(m,g)=>(y(),_("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,nd),m.description?(y(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,td)):k("",!0),F(h,{data:m,"hide-description":"","current-locale":a.currentLocale},null,8,["data","current-locale"])]))),128)):k("",!0)])):k("",!0),a.components.headers?(y(),_("div",rd,[v("h2",ad,E(n.$openapidoc.getLocaleText("openapidoc.headers")),1),(y(!0),_(L,null,M(a.components.headers,(m,g)=>(y(),_("div",{key:g,class:"oapi-schema-block"},[v("h3",{id:g,textContent:E(g)},null,8,id),m.description?(y(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,sd)):k("",!0),F(h,{data:m,"current-locale":a.currentLocale,"hide-name":"","hide-description":""},null,8,["data","current-locale"])]))),128))])):k("",!0)])}const Lv=J(Du,[["render",od]]),cd={props:{path:{type:String,required:!0},method:{type:String,required:!0},tags:{type:Array,default:()=>[]},summary:{type:String,default:null},description:{type:String,default:null},deprecated:Boolean,currentLocale:{type:String,required:!0},server:{type:String,required:!1,default:""}},computed:{requestUrl(){return this.server+""+this.path},title(){return this.summary&&this.summary!==""?this.summary:this.path}}},ld=["id"],ud=["textContent"],dd={key:0,class:"oapi-route-header__deprecated",role:"alert"},pd={class:"oapi-route-header__tags"},hd=["innerHTML"];function md(n,t,a,o,i,s){return y(),_("div",{class:Ee(["oapi-route-header",{"oapi-route-header--deprecated":a.deprecated}])},[v("h1",{id:"method-"+a.method,class:"oapi-route-header__title"},[v("span",{class:Ee(["oapi-method-tag",`oapi-method-tag--${a.method}`])},E(a.method),3),D(" "+E(s.title),1)],8,ld),v("div",{class:"oapi-route-header__path",onClick:t[0]||(t[0]=c=>n.$openapidoc.copyToClipboard(s.requestUrl,c))},[v("code",{textContent:E(s.requestUrl)},null,8,ud)]),a.deprecated?(y(),_("div",dd,[v("span",null,E(n.$openapidoc.getLocaleText("openapidoc.deprecated")),1)])):k("",!0),v("div",pd,[(y(!0),_(L,null,M(a.tags,c=>(y(),_("span",{key:c,class:"oapi-route-header__tag"},E(c),1))),128))]),v("div",{class:"oapi-route-header__description",innerHTML:a.description},null,8,hd)],2)}const Gi=J(cd,[["render",md]]),fd={name:"OpenApiServer",props:{server:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}}},gd={class:"oapi-server"},bd={key:0,class:"oapi-server__url"},yd=["innerHTML"],_d={key:2,class:"oapi-server-vars"},vd={class:"oapi-server-vars__title"},Sd={class:"oapi-server-var"},Ed={class:"oapi-server-var__name"},kd=["innerHTML"],Od={key:1,class:"oapi-server-var__default"},wd={key:2,class:"oapi-server-var__enum"};function Td(n,t,a,o,i,s){return y(),_("div",gd,[a.server.url?(y(),_("div",bd,[v("code",null,E(a.server.url),1)])):k("",!0),a.server.description?(y(),_("div",{key:1,class:"oapi-server__description",innerHTML:n.$openapidocRef.tr(a.server,"description",a.currentLocale)},null,8,yd)):k("",!0),a.server.variables&&Object.keys(a.server.variables).length?(y(),_("div",_d,[v("div",vd,E(n.$openapidoc.getLocaleText("openapidoc.variables")),1),v("ul",null,[(y(!0),_(L,null,M(a.server.variables,(c,u)=>(y(),_("li",Sd,[v("div",Ed,[v("code",null,E(u),1)]),c.description?(y(),_("div",{key:0,class:"oapi-server-var__description",innerHTML:n.$openapidocRef.tr(c,"description",a.currentLocale)},null,8,kd)):k("",!0),c.default?(y(),_("div",Od,[D(E(n.$openapidoc.getLocaleText("openapidoc.default"))+": ",1),v("code",null,E(c.default),1)])):k("",!0),c.enum?(y(),_("div",wd,[D(E(n.$openapidoc.getLocaleText("openapidoc.enum"))+": ",1),(y(!0),_(L,null,M(c.enum,d=>(y(),_("span",{key:d},[v("code",null,E(d),1),D(E(" "))]))),128))])):k("",!0)]))),256))])])):k("",!0)])}const Ji=J(fd,[["render",Td]]),Nd={name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{getRoute(n){return{name:`openapi-${this.path_doc}-${this.file}${this.$openapidoc.I18nLocaleSuffix()}`,params:{type:"components"},hash:"#"+n}}}},Ad={class:"oapi-sec-requirement"},Cd=["data-scheme"],xd={class:"oapi-sec-requirement-item__scheme"},qd={class:"oapi-sec-requirement-item__scopes"};function Rd(n,t,a,o,i,s){const c=Ni;return y(),_("div",Ad,[v("ul",null,[(y(!0),_(L,null,M(a.securityRequirement,(u,d)=>(y(),_("li",{key:d,"data-scheme":d},[F(c,{to:s.getRoute(d),class:"oapi-sec-requirement-item"},{default:ce(()=>[v("span",xd,E(d),1),v("ul",qd,[(y(!0),_(L,null,M(u,e=>(y(),_("li",{key:e},[v("code",null,E(e),1)]))),128))])]),_:2},1032,["to"])],8,Cd))),128))])])}const Wi=J(Nd,[["render",Rd],["__scopeId","data-v-8ae7efe1"]]),Ld={name:"OpenApiSecurity",components:{OpenApiSecurityRequirement:Wi},props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}}},$d={class:"oapi-route-sec"},Md={id:"security"},Dd={class:"oapi-route-sec__list"};function jd(n,t,a,o,i,s){const c=Wi;return y(),_("div",$d,[v("h2",Md,E(n.$openapidoc.getLocaleText("openapidoc.security")),1),v("ul",Dd,[(y(!0),_(L,null,M(a.security,(u,d)=>(y(),_("li",{key:d},[F(c,{"security-requirement":u,"current-locale":a.currentLocale,path_doc:a.path_doc,file:a.file},null,8,["security-requirement","current-locale","path_doc","file"])]))),128))])])}const Zi=J(Ld,[["render",jd]]),Id={components:{OpenApiParameter:rn},props:{title:{type:String,required:!1,default:"Parameters"},parameters:{type:Array,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}}},Pd={id:"parameters"},Ud=["textContent"];function Bd(n,t,a,o,i,s){const c=rn;return y(),_("div",null,[v("h2",Pd,[v("span",{textContent:E(a.title)},null,8,Ud)]),(y(!0),_(L,null,M(a.parameters,u=>(y(),Z(c,{key:`${u.name}-${u.in||"def"}`,data:u,"current-locale":a.currentLocale},null,8,["data","current-locale"]))),128))])}const Qn=J(Id,[["render",Bd]]),Hd={name:"OpenApiRequestBody",components:{OpenApiMediaTypes:Re},props:{requestBody:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})},isCb:Boolean,hPrefix:{type:String,default:""}}},Fd={class:"oapi-req-body"},zd={key:0,class:"oapi-req-body__required"},Kd=["innerHTML"];function Gd(n,t,a,o,i,s){const c=Re;return y(),_("div",Fd,[(y(),Z(Fn(a.isCb?"h3":"h2"),{id:`${a.hPrefix}request-body`},{default:ce(()=>[D(E(n.$openapidoc.getLocaleText("openapidoc.request_body")),1)]),_:1},8,["id"])),a.requestBody.required?(y(),_("div",zd,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):k("",!0),a.requestBody.description?(y(),_("div",{key:1,class:"oapi-req-body__description",innerHTML:n.$openapidocRef.tr(a.requestBody,"description",a.currentLocale)},null,8,Kd)):k("",!0),a.requestBody.content?(y(),Z(c,{key:2,data:a.requestBody.content,"current-locale":a.currentLocale},null,8,["data","current-locale"])):k("",!0)])}const Yn=J(Hd,[["render",Gd]]),Jd={name:"OpenApiResponses",components:{OpenApiResponse:Xn},props:{isCb:Boolean,hPrefix:{type:String,default:""},responses:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}}},Wd={class:"oapi-responses"},Zd=["innerHTML"];function Vd(n,t,a,o,i,s){const c=Xn;return y(),_("div",Wd,[(y(),Z(Fn(a.isCb?"h3":"h2"),{id:`${a.hPrefix}responses`},{default:ce(()=>[D(E(n.$openapidoc.getLocaleText("openapidoc.responses")),1)]),_:1},8,["id"])),(y(!0),_(L,null,M(a.responses,(u,d)=>(y(),_("div",{key:d,class:"oapi-responses-item"},[(y(),Z(Fn(a.isCb?"h4":"h3"),{id:`${a.hPrefix}response-${d}`,class:"oapi-responses-item__status"},{default:ce(()=>[D(E(d),1)]),_:2},1032,["id"])),v("div",{class:"oapi-responses-item__description",innerHTML:n.$openapidocRef.tr(u,"description",a.currentLocale)},null,8,Zd),F(c,{lite:"","current-locale":a.currentLocale,response:u},null,8,["current-locale","response"])]))),128))])}const et=J(Jd,[["render",Vd]]),Xd={props:{items:{type:Object,required:!0}},data(){return{isOpen:!1,preSelectedSnippet:"javascript",selectedSnippet:"javascript",selectedLibrary:"xmlhttprequest"}},computed:{selectedText(){return this.selectedSnippet+" / "+this.selectedLibrary}},methods:{handleItemClick(n,t=null){t?(this.selectedSnippet=n,this.selectedLibrary=t,this.$emit("select",n,t),this.isOpen=!1):this.preSelectedSnippet=n}}},Vi=n=>(wo("data-v-5101a728"),n=n(),To(),n),Qd={class:"oapi-dd-sub"},Yd=Vi(()=>v("svg",{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1)),ep={key:0,class:"oapi-dd-sub-list",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},np=["onClick"],tp={class:"oapi-dd-sub-item"},rp={class:"oapi-dd-sub-item__title"},ap=Vi(()=>v("span",{class:"oapi-dd-sub-item__icon"},[v("svg",{viewBox:"0 0 20 20",fill:"currentColor"},[v("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1)),ip={key:0,class:"oapi-dd-sub-sub-menu"},sp=["onClick"];function op(n,t,a,o,i,s){return y(),_("div",Qd,[v("button",{type:"button",class:Ee(["oapi-dd-sub__btn",{"oapi-dd-sub__btn--is-open":i.isOpen}]),onClick:t[0]||(t[0]=c=>i.isOpen=!i.isOpen)},[v("b",null,E(s.selectedText?s.selectedText:"Select Library"),1),Yd],2),F(Oo,{name:"oapi-dropdown"},{default:ce(()=>[i.isOpen?(y(),_("ul",ep,[(y(!0),_(L,null,M(a.items,(c,u)=>(y(),_("li",{key:u,role:"menuitem",class:"oapi-dd-sub-list__item",onClick:d=>s.handleItemClick(u)},[c?(y(),_(L,{key:0},[v("div",tp,[v("span",rp,E(u),1),ap]),i.preSelectedSnippet===u?(y(),_("ul",ip,[(y(!0),_(L,null,M(c,d=>(y(),_("li",{key:d,class:"oapi-dd-sub-sub-menu__item",onClick:e=>s.handleItemClick(u,d)},E(d),9,sp))),128))])):k("",!0)],64)):(y(),_(L,{key:1},[D(E(c.snippet),1)],64))],8,np))),128))])):k("",!0)]),_:1})])}const Xi=J(Xd,[["render",op],["__scopeId","data-v-5101a728"]]);/*!
 * Request Templater v1.3.1
 *
 * Copyright (C) 2012-2023 Pavel Kuz`min (@s00d).
 *
 * Date: Wed, 01 Nov 2023 11:34:05 GMT
 */function A(n){return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(n)}function cp(n,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,Qi(o.key),o)}}function Me(n,t,a){return(t=Qi(t))in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function b(n,t){if(n!==t)throw new TypeError("Cannot instantiate an arrow function")}function dn(n,t){return function(a){if(Array.isArray(a))return a}(n)||function(a,o){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var s,c,u,d,e=[],h=!0,m=!1;try{if(u=(i=i.call(a)).next,o===0){if(Object(i)!==i)return;h=!1}else for(;!(h=(s=u.call(i)).done)&&(e.push(s.value),e.length!==o);h=!0);}catch(g){m=!0,c=g}finally{try{if(!h&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(m)throw c}}return e}}(n,t)||function(a,o){if(a){if(typeof a=="string")return ta(a,o);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ta(a,o)}}(n,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ta(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=n[a];return o}function Qi(n){var t=function(a,o){if(typeof a!="object"||a===null)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var s=i.call(a,o||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(a)}(n,"string");return typeof t=="symbol"?t:String(t)}var _t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nn=function(n){return n&&n.Math===Math&&n},ae=Nn(typeof globalThis=="object"&&globalThis)||Nn(typeof window=="object"&&window)||Nn(typeof self=="object"&&self)||Nn(typeof _t=="object"&&_t)||function(){return this}()||_t||Function("return this")(),vn={},Q=function(n){try{return!!n()}catch{return!0}},fe=!Q(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Sn=!Q(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),up=Sn,An=Function.prototype.call,Le=up?An.bind(An):function(){return An.apply(An,arguments)},vr={},Yi={}.propertyIsEnumerable,es=Object.getOwnPropertyDescriptor,dp=es&&!Yi.call({1:2},1);vr.f=dp?function(n){var t=es(this,n);return!!t&&t.enumerable}:Yi;var Ne,Pn,Sr=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}},ns=Sn,ts=Function.prototype,rr=ts.call,pp=ns&&ts.bind.bind(rr,rr),X=ns?pp:function(n){return function(){return rr.apply(n,arguments)}},rs=X,hp=rs({}.toString),mp=rs("".slice),Ue=function(n){return mp(hp(n),8,-1)},fp=Q,gp=Ue,vt=Object,bp=X("".split),nt=fp(function(){return!vt("z").propertyIsEnumerable(0)})?function(n){return gp(n)==="String"?bp(n,""):vt(n)}:vt,tt=function(n){return n==null},yp=tt,_p=TypeError,Be=function(n){if(yp(n))throw new _p("Can't call method on "+n);return n},vp=nt,Sp=Be,an=function(n){return vp(Sp(n))},St=typeof document=="object"&&document.all,rt={all:St,IS_HTMLDDA:St===void 0&&St!==void 0},Ep=rt.all,ie=rt.IS_HTMLDDA?function(n){return typeof n=="function"||n===Ep}:function(n){return typeof n=="function"},ra=ie,kp=rt.all,ke=rt.IS_HTMLDDA?function(n){return typeof n=="object"?n!==null:ra(n)||n===kp}:function(n){return typeof n=="object"?n!==null:ra(n)},Et=ae,Op=ie,at=function(n,t){return arguments.length<2?(a=Et[n],Op(a)?a:void 0):Et[n]&&Et[n][t];var a},as=X({}.isPrototypeOf),is=ae,kt=typeof navigator<"u"&&String(navigator.userAgent)||"",aa=is.process,ia=is.Deno,sa=aa&&aa.versions||ia&&ia.version,oa=sa&&sa.v8;oa&&(Pn=(Ne=oa.split("."))[0]>0&&Ne[0]<4?1:+(Ne[0]+Ne[1])),!Pn&&kt&&(!(Ne=kt.match(/Edge\/(\d+)/))||Ne[1]>=74)&&(Ne=kt.match(/Chrome\/(\d+)/))&&(Pn=+Ne[1]);var fn=Pn,ca=fn,wp=Q,Tp=ae.String,ss=!!Object.getOwnPropertySymbols&&!wp(function(){var n=Symbol("symbol detection");return!Tp(n)||!(Object(n)instanceof Symbol)||!Symbol.sham&&ca&&ca<41}),os=ss&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Np=at,Ap=ie,Cp=as,xp=Object,cs=os?function(n){return typeof n=="symbol"}:function(n){var t=Np("Symbol");return Ap(t)&&Cp(t.prototype,xp(n))},qp=String,Rp=ie,Lp=function(n){try{return qp(n)}catch{return"Object"}},$p=TypeError,it=function(n){if(Rp(n))return n;throw new $p(Lp(n)+" is not a function")},Mp=it,Dp=tt,Er=function(n,t){var a=n[t];return Dp(a)?void 0:Mp(a)},Ot=Le,wt=ie,Tt=ke,jp=TypeError,ls={exports:{}},la=ae,Ip=Object.defineProperty,kr=function(n,t){try{Ip(la,n,{value:t,configurable:!0,writable:!0})}catch{la[n]=t}return t},Pp=kr,ua="__core-js_shared__",Or=ae[ua]||Pp(ua,{}),da=Or;(ls.exports=function(n,t){return da[n]||(da[n]=t!==void 0?t:{})})("versions",[]).push({version:"3.33.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var wr=ls.exports,Up=Be,Bp=Object,He=function(n){return Bp(Up(n))},Hp=He,Fp=X({}.hasOwnProperty),ge=Object.hasOwn||function(n,t){return Fp(Hp(n),t)},zp=X,Kp=0,Gp=Math.random(),Jp=zp(1 .toString),us=function(n){return"Symbol("+(n===void 0?"":n)+")_"+Jp(++Kp+Gp,36)},Wp=wr,pa=ge,Zp=us,Vp=ss,Xp=os,Ye=ae.Symbol,Nt=Wp("wks"),Qp=Xp?Ye.for||Ye:Ye&&Ye.withoutSetter||Zp,be=function(n){return pa(Nt,n)||(Nt[n]=Vp&&pa(Ye,n)?Ye[n]:Qp("Symbol."+n)),Nt[n]},Yp=Le,ha=ke,ma=cs,eh=Er,nh=function(n,t){var a,o;if(t==="string"&&wt(a=n.toString)&&!Tt(o=Ot(a,n))||wt(a=n.valueOf)&&!Tt(o=Ot(a,n))||t!=="string"&&wt(a=n.toString)&&!Tt(o=Ot(a,n)))return o;throw new jp("Can't convert object to primitive value")},th=TypeError,rh=be("toPrimitive"),ah=function(n,t){if(!ha(n)||ma(n))return n;var a,o=eh(n,rh);if(o){if(t===void 0&&(t="default"),a=Yp(o,n,t),!ha(a)||ma(a))return a;throw new th("Can't convert object to primitive value")}return t===void 0&&(t="number"),nh(n,t)},ih=cs,Tr=function(n){var t=ah(n,"string");return ih(t)?t:t+""},fa=ke,ar=ae.document,sh=fa(ar)&&fa(ar.createElement),Nr=function(n){return sh?ar.createElement(n):{}},oh=Nr,ds=!fe&&!Q(function(){return Object.defineProperty(oh("div"),"a",{get:function(){return 7}}).a!==7}),ch=fe,lh=Le,uh=vr,dh=Sr,ph=an,hh=Tr,mh=ge,fh=ds,ga=Object.getOwnPropertyDescriptor;vn.f=ch?ga:function(n,t){if(n=ph(n),t=hh(t),fh)try{return ga(n,t)}catch{}if(mh(n,t))return dh(!lh(uh.f,n,t),n[t])};var Fe={},ps=fe&&Q(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),gh=ke,bh=String,yh=TypeError,Oe=function(n){if(gh(n))return n;throw new yh(bh(n)+" is not an object")},_h=fe,vh=ds,Sh=ps,Cn=Oe,ba=Tr,Eh=TypeError,At=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Ct="enumerable",xt="configurable",qt="writable";Fe.f=_h?Sh?function(n,t,a){if(Cn(n),t=ba(t),Cn(a),typeof n=="function"&&t==="prototype"&&"value"in a&&qt in a&&!a[qt]){var o=kh(n,t);o&&o[qt]&&(n[t]=a.value,a={configurable:xt in a?a[xt]:o[xt],enumerable:Ct in a?a[Ct]:o[Ct],writable:!1})}return At(n,t,a)}:At:function(n,t,a){if(Cn(n),t=ba(t),Cn(a),vh)try{return At(n,t,a)}catch{}if("get"in a||"set"in a)throw new Eh("Accessors not supported");return"value"in a&&(n[t]=a.value),n};var Oh=Fe,wh=Sr,st=fe?function(n,t,a){return Oh.f(n,t,wh(1,a))}:function(n,t,a){return n[t]=a,n},hs={exports:{}},ir=fe,Th=ge,ms=Function.prototype,Nh=ir&&Object.getOwnPropertyDescriptor,Rt=Th(ms,"name"),Ar={EXISTS:Rt,PROPER:Rt&&(function(){}).name==="something",CONFIGURABLE:Rt&&(!ir||ir&&Nh(ms,"name").configurable)},Ah=ie,sr=Or,Ch=X(Function.toString);Ah(sr.inspectSource)||(sr.inspectSource=function(n){return Ch(n)});var Kn,pn,Gn,fs=sr.inspectSource,xh=ie,ya=ae.WeakMap,qh=xh(ya)&&/native code/.test(String(ya)),Rh=us,_a=wr("keys"),Cr=function(n){return _a[n]||(_a[n]=Rh(n))},xr={},Lh=qh,gs=ae,$h=ke,Mh=st,Lt=ge,$t=Or,Dh=Cr,jh=xr,va="Object already initialized",or=gs.TypeError,Ih=gs.WeakMap;if(Lh||$t.state){var pe=$t.state||($t.state=new Ih);pe.get=pe.get,pe.has=pe.has,pe.set=pe.set,Kn=function(n,t){if(pe.has(n))throw new or(va);return t.facade=n,pe.set(n,t),t},pn=function(n){return pe.get(n)||{}},Gn=function(n){return pe.has(n)}}else{var We=Dh("state");jh[We]=!0,Kn=function(n,t){if(Lt(n,We))throw new or(va);return t.facade=n,Mh(n,We,t),t},pn=function(n){return Lt(n,We)?n[We]:{}},Gn=function(n){return Lt(n,We)}}var qr={set:Kn,get:pn,has:Gn,enforce:function(n){return Gn(n)?pn(n):Kn(n,{})},getterFor:function(n){return function(t){var a;if(!$h(t)||(a=pn(t)).type!==n)throw new or("Incompatible receiver, "+n+" required");return a}}},Rr=X,Ph=Q,Uh=ie,xn=ge,cr=fe,Bh=Ar.CONFIGURABLE,Hh=fs,Fh=qr.enforce,zh=qr.get,Sa=String,Un=Object.defineProperty,Kh=Rr("".slice),Gh=Rr("".replace),Jh=Rr([].join),Wh=cr&&!Ph(function(){return Un(function(){},"length",{value:8}).length!==8}),Zh=String(String).split("String"),Vh=hs.exports=function(n,t,a){Kh(Sa(t),0,7)==="Symbol("&&(t="["+Gh(Sa(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),a&&a.getter&&(t="get "+t),a&&a.setter&&(t="set "+t),(!xn(n,"name")||Bh&&n.name!==t)&&(cr?Un(n,"name",{value:t,configurable:!0}):n.name=t),Wh&&a&&xn(a,"arity")&&n.length!==a.arity&&Un(n,"length",{value:a.arity});try{a&&xn(a,"constructor")&&a.constructor?cr&&Un(n,"prototype",{writable:!1}):n.prototype&&(n.prototype=void 0)}catch{}var o=Fh(n);return xn(o,"source")||(o.source=Jh(Zh,typeof t=="string"?t:"")),n};Function.prototype.toString=Vh(function(){return Uh(this)&&zh(this).source||Hh(this)},"toString");var bs=hs.exports,Xh=ie,Qh=Fe,Yh=bs,em=kr,En=function(n,t,a,o){o||(o={});var i=o.enumerable,s=o.name!==void 0?o.name:t;if(Xh(a)&&Yh(a,s,o),o.global)i?n[t]=a:em(t,a);else{try{o.unsafe?n[t]&&(i=!0):delete n[t]}catch{}i?n[t]=a:Qh.f(n,t,{value:a,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return n},ys={},nm=Math.ceil,tm=Math.floor,rm=Math.trunc||function(n){var t=+n;return(t>0?tm:nm)(t)},ot=function(n){var t=+n;return t!=t||t===0?0:rm(t)},am=ot,im=Math.max,sm=Math.min,om=ot,cm=Math.min,kn=function(n){return n>0?cm(om(n),9007199254740991):0},lm=kn,ct=function(n){return lm(n.length)},um=an,dm=function(n,t){var a=am(n);return a<0?im(a+t,0):sm(a,t)},pm=ct,Ea=function(n){return function(t,a,o){var i,s=um(t),c=pm(s),u=dm(o,c);if(n&&a!=a){for(;c>u;)if((i=s[u++])!=i)return!0}else for(;c>u;u++)if((n||u in s)&&s[u]===a)return n||u||0;return!n&&-1}},hm={includes:Ea(!0),indexOf:Ea(!1)},Mt=ge,mm=an,fm=hm.indexOf,gm=xr,ka=X([].push),_s=function(n,t){var a,o=mm(n),i=0,s=[];for(a in o)!Mt(gm,a)&&Mt(o,a)&&ka(s,a);for(;t.length>i;)Mt(o,a=t[i++])&&(~fm(s,a)||ka(s,a));return s},Lr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bm=_s,ym=Lr.concat("length","prototype");ys.f=Object.getOwnPropertyNames||function(n){return bm(n,ym)};var vs={};vs.f=Object.getOwnPropertySymbols;var _m=at,vm=ys,Sm=vs,Em=Oe,km=X([].concat),Om=_m("Reflect","ownKeys")||function(n){var t=vm.f(Em(n)),a=Sm.f;return a?km(t,a(n)):t},Oa=ge,wm=Om,Tm=vn,Nm=Fe,Am=Q,Cm=ie,xm=/#|\.prototype\./,On=function(n,t){var a=Rm[qm(n)];return a===$m||a!==Lm&&(Cm(t)?Am(t):!!t)},qm=On.normalize=function(n){return String(n).replace(xm,".").toLowerCase()},Rm=On.data={},Lm=On.NATIVE="N",$m=On.POLYFILL="P",Mm=On,Dt=ae,Dm=vn.f,jm=st,Im=En,Pm=kr,Um=function(n,t,a){for(var o=wm(t),i=Nm.f,s=Tm.f,c=0;c<o.length;c++){var u=o[c];Oa(n,u)||a&&Oa(a,u)||i(n,u,s(t,u))}},Bm=Mm,se=function(n,t){var a,o,i,s,c,u=n.target,d=n.global,e=n.stat;if(a=d?Dt:e?Dt[u]||Pm(u,{}):(Dt[u]||{}).prototype)for(o in t){if(s=t[o],i=n.dontCallGetSet?(c=Dm(a,o))&&c.value:a[o],!Bm(d?o:u+(e?".":"#")+o,n.forced)&&i!==void 0){if(typeof s==typeof i)continue;Um(s,i)}(n.sham||i&&i.sham)&&jm(s,"sham",!0),Im(a,o,s,n)}},Hm=Ue,Fm=X,gn=function(n){if(Hm(n)==="Function")return Fm(n)},Ss={};Ss[be("toStringTag")]="z";var jt,$r=String(Ss)==="[object z]",zm=$r,Km=ie,Bn=Ue,Gm=be("toStringTag"),Jm=Object,Wm=Bn(function(){return arguments}())==="Arguments",Mr=zm?Bn:function(n){var t,a,o;return n===void 0?"Undefined":n===null?"Null":typeof(a=function(i,s){try{return i[s]}catch{}}(t=Jm(n),Gm))=="string"?a:Wm?Bn(t):(o=Bn(t))==="Object"&&Km(t.callee)?"Arguments":o},Zm=Mr,Vm=String,ze=function(n){if(Zm(n)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Vm(n)},Xm=ke,Qm=Ue,Ym=be("match"),ef=function(n){var t;return Xm(n)&&((t=n[Ym])!==void 0?!!t:Qm(n)==="RegExp")},nf=TypeError,Es=function(n){if(ef(n))throw new nf("The method doesn't accept regular expressions");return n},tf=be("match"),ks=function(n){var t=/./;try{"/./"[n](t)}catch{try{return t[tf]=!1,"/./"[n](t)}catch{}}return!1},rf=se,Os=gn,af=vn.f,sf=kn,wa=ze,of=Es,cf=Be,lf=ks,Ta=Os("".startsWith),uf=Os("".slice),df=Math.min,Na=lf("startsWith");rf({target:"String",proto:!0,forced:!!(Na||(jt=af(String.prototype,"startsWith"),!jt||jt.writable))&&!Na},{startsWith:function(n){var t=wa(cf(this));of(n);var a=sf(df(arguments.length>1?arguments[1]:void 0,t.length)),o=wa(n);return Ta?Ta(t,o,a):uf(t,a,a+o.length)===o}});var pf=se,ws=gn,hf=vn.f,mf=kn,Aa=ze,ff=Es,gf=Be,bf=ks,Ca=ws("".endsWith),yf=ws("".slice),_f=Math.min,Ts=bf("endsWith"),vf=!Ts&&!!function(){var n=hf(String.prototype,"endsWith");return n&&!n.writable}();pf({target:"String",proto:!0,forced:!vf&&!Ts},{endsWith:function(n){var t=Aa(gf(this));ff(n);var a=arguments.length>1?arguments[1]:void 0,o=t.length,i=a===void 0?o:_f(mf(a),o),s=Aa(n);return Ca?Ca(t,s,i):yf(t,i-s.length,i)===s}});var Sf=it,Ef=Sn,kf=gn(gn.bind),Of=Ue,Dr=Array.isArray||function(n){return Of(n)==="Array"},wf=X,Tf=Q,Ns=ie,Nf=Mr,Af=fs,As=function(){},Cf=[],Cs=at("Reflect","construct"),jr=/^\s*(?:class|function)\b/,xf=wf(jr.exec),qf=!jr.test(As),cn=function(n){if(!Ns(n))return!1;try{return Cs(As,Cf,n),!0}catch{return!1}},xs=function(n){if(!Ns(n))return!1;switch(Nf(n)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return qf||!!xf(jr,Af(n))}catch{return!0}};xs.sham=!0;var Rf=!Cs||Tf(function(){var n;return cn(cn.call)||!cn(Object)||!cn(function(){n=!0})||n})?xs:cn,xa=Dr,Lf=Rf,$f=ke,Mf=be("species"),qa=Array,Df=function(n){var t;return xa(n)&&(t=n.constructor,(Lf(t)&&(t===qa||xa(t.prototype))||$f(t)&&(t=t[Mf])===null)&&(t=void 0)),t===void 0?qa:t},qs=function(n,t){return new(Df(n))(t===0?0:t)},jf=function(n,t){return Sf(n),t===void 0?n:Ef?kf(n,t):function(){return n.apply(t,arguments)}},If=nt,Pf=He,Uf=ct,Bf=qs,Ra=X([].push),Ae=function(n){var t=n===1,a=n===2,o=n===3,i=n===4,s=n===6,c=n===7,u=n===5||s;return function(d,e,h,m){for(var g,f,p=Pf(d),l=If(p),r=jf(e,h),S=Uf(l),w=0,O=m||Bf,T=t?O(d,S):a||c?O(d,0):void 0;S>w;w++)if((u||w in l)&&(f=r(g=l[w],w,p),n))if(t)T[w]=f;else if(f)switch(n){case 3:return!0;case 5:return g;case 6:return w;case 2:Ra(T,g)}else switch(n){case 4:return!1;case 7:Ra(T,g)}return s?-1:o||i?i:T}},lt={forEach:Ae(0),map:Ae(1),filter:Ae(2),some:Ae(3),every:Ae(4),find:Ae(5),findIndex:Ae(6),filterReject:Ae(7)},Hf=Q,ut=function(n,t){var a=[][n];return!!a&&Hf(function(){a.call(null,t||function(){return 1},1)})},Ff=lt.forEach,lr=ut("forEach")?[].forEach:function(n){return Ff(this,n,arguments.length>1?arguments[1]:void 0)};se({target:"Array",proto:!0,forced:[].forEach!==lr},{forEach:lr});var zf=Mr,Kf=$r?{}.toString:function(){return"[object "+zf(this)+"]"};$r||En(Object.prototype,"toString",Kf,{unsafe:!0});var It=Nr("span").classList,La=It&&It.constructor&&It.constructor.prototype,$a=ae,Ma={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Gf=La===Object.prototype?void 0:La,Pt=lr,Jf=st,Rs=function(n){if(n&&n.forEach!==Pt)try{Jf(n,"forEach",Pt)}catch{n.forEach=Pt}};for(var Ut in Ma)Ma[Ut]&&Rs($a[Ut]&&$a[Ut].prototype);Rs(Gf);var Wf=Q,Zf=fn,Vf=be("species"),Ir=function(n){return Zf>=51||!Wf(function(){var t=[];return(t.constructor={})[Vf]=function(){return{foo:1}},t[n](Boolean).foo!==1})},Xf=lt.filter;se({target:"Array",proto:!0,forced:!Ir("filter")},{filter:function(n){return Xf(this,n,arguments.length>1?arguments[1]:void 0)}});var Qf=X([].slice),Ls=X,Yf=it,eg=ke,ng=ge,Da=Qf,tg=Sn,ja=Function,rg=Ls([].concat),ag=Ls([].join),Bt={},Ia=tg?ja.bind:function(n){var t=Yf(this),a=t.prototype,o=Da(arguments,1),i=function(){var s=rg(o,Da(arguments));return this instanceof i?function(c,u,d){if(!ng(Bt,u)){for(var e=[],h=0;h<u;h++)e[h]="a["+h+"]";Bt[u]=ja("C,a","return new C("+ag(e,",")+")")}return Bt[u](c,d)}(t,s.length,s):t.apply(n,s)};return eg(a)&&(i.prototype=a),i};se({target:"Function",proto:!0,forced:Function.bind!==Ia},{bind:Ia});var ig=Oe,$s=function(){var n=ig(this),t="";return n.hasIndices&&(t+="d"),n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.dotAll&&(t+="s"),n.unicode&&(t+="u"),n.unicodeSets&&(t+="v"),n.sticky&&(t+="y"),t},Pr=Q,Ur=ae.RegExp,ur=Pr(function(){var n=Ur("a","y");return n.lastIndex=2,n.exec("abcd")!==null}),sg=ur||Pr(function(){return!Ur("a","y").sticky}),og={BROKEN_CARET:ur||Pr(function(){var n=Ur("^r","gy");return n.lastIndex=2,n.exec("str")!==null}),MISSED_STICKY:sg,UNSUPPORTED_Y:ur},Ms={},cg=_s,lg=Lr,Br=Object.keys||function(n){return cg(n,lg)},ug=fe,dg=ps,pg=Fe,hg=Oe,mg=an,fg=Br;Ms.f=ug&&!dg?Object.defineProperties:function(n,t){hg(n);for(var a,o=mg(t),i=fg(t),s=i.length,c=0;s>c;)pg.f(n,a=i[c++],o[a]);return n};var qn,gg=at("document","documentElement"),bg=Oe,yg=Ms,Pa=Lr,_g=xr,vg=gg,Sg=Nr,dr="prototype",pr="script",Ds=Cr("IE_PROTO"),Ht=function(){},js=function(n){return"<"+pr+">"+n+"</"+pr+">"},Ua=function(n){n.write(js("")),n.close();var t=n.parentWindow.Object;return n=null,t},Hn=function(){try{qn=new ActiveXObject("htmlfile")}catch{}var n,t,a;Hn=typeof document<"u"?document.domain&&qn?Ua(qn):(t=Sg("iframe"),a="java"+pr+":",t.style.display="none",vg.appendChild(t),t.src=String(a),(n=t.contentWindow.document).open(),n.write(js("document.F=Object")),n.close(),n.F):Ua(qn);for(var o=Pa.length;o--;)delete Hn[dr][Pa[o]];return Hn()};_g[Ds]=!0;var Ba,Ft,Eg=Object.create||function(n,t){var a;return n!==null?(Ht[dr]=bg(n),a=new Ht,Ht[dr]=null,a[Ds]=n):a=Hn(),t===void 0?a:yg.f(a,t)},kg=Q,Og=ae.RegExp,wg=kg(function(){var n=Og(".","s");return!(n.dotAll&&n.test(`
`)&&n.flags==="s")}),Tg=Q,Ng=ae.RegExp,Ag=Tg(function(){var n=Ng("(?<a>b)","g");return n.exec("b").groups.a!=="b"||"b".replace(n,"$<a>c")!=="bc"}),en=Le,dt=X,Cg=ze,xg=$s,qg=og,Rg=Eg,Lg=qr.get,$g=wg,Mg=Ag,Dg=wr("native-string-replace",String.prototype.replace),Jn=RegExp.prototype.exec,hr=Jn,jg=dt("".charAt),Ig=dt("".indexOf),Pg=dt("".replace),zt=dt("".slice),Kt=(Ft=/b*/g,en(Jn,Ba=/a/,"a"),en(Jn,Ft,"a"),Ba.lastIndex!==0||Ft.lastIndex!==0),Ha=qg.BROKEN_CARET,Gt=/()??/.exec("")[1]!==void 0;(Kt||Gt||Ha||$g||Mg)&&(hr=function(n){var t,a,o,i,s,c,u,d=this,e=Lg(d),h=Cg(n),m=e.raw;if(m)return m.lastIndex=d.lastIndex,t=en(hr,m,h),d.lastIndex=m.lastIndex,t;var g=e.groups,f=Ha&&d.sticky,p=en(xg,d),l=d.source,r=0,S=h;if(f&&(p=Pg(p,"y",""),Ig(p,"g")===-1&&(p+="g"),S=zt(h,d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&jg(h,d.lastIndex-1)!==`
`)&&(l="(?: "+l+")",S=" "+S,r++),a=new RegExp("^(?:"+l+")",p)),Gt&&(a=new RegExp("^"+l+"$(?!\\s)",p)),Kt&&(o=d.lastIndex),i=en(Jn,f?a:d,S),f?i?(i.input=zt(i.input,r),i[0]=zt(i[0],r),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:Kt&&i&&(d.lastIndex=d.global?i.index+i[0].length:o),Gt&&i&&i.length>1&&en(Dg,i[0],a,function(){for(s=1;s<arguments.length-2;s++)arguments[s]===void 0&&(i[s]=void 0)}),i&&g)for(i.groups=c=Rg(null),s=0;s<g.length;s++)c[(u=g[s])[0]]=i[u[1]];return i});var Wn=hr;se({target:"RegExp",proto:!0,forced:/./.exec!==Wn},{exec:Wn});var Ug=Sn,Is=Function.prototype,Fa=Is.apply,za=Is.call,Bg=typeof Reflect=="object"&&Reflect.apply||(Ug?za.bind(Fa):function(){return za.apply(Fa,arguments)}),Ka=gn,Ga=En,Hg=Wn,Ja=Q,Ps=be,Fg=st,zg=Ps("species"),Jt=RegExp.prototype,Us=function(n,t,a,o){var i=Ps(n),s=!Ja(function(){var e={};return e[i]=function(){return 7},""[n](e)!==7}),c=s&&!Ja(function(){var e=!1,h=/a/;return n==="split"&&((h={}).constructor={},h.constructor[zg]=function(){return h},h.flags="",h[i]=/./[i]),h.exec=function(){return e=!0,null},h[i](""),!e});if(!s||!c||a){var u=Ka(/./[i]),d=t(i,""[n],function(e,h,m,g,f){var p=Ka(e),l=h.exec;return l===Hg||l===Jt.exec?s&&!f?{done:!0,value:u(h,m,g)}:{done:!0,value:p(m,h,g)}:{done:!1}});Ga(String.prototype,n,d[0]),Ga(Jt,i,d[1])}o&&Fg(Jt[i],"sham",!0)},Hr=X,Kg=ot,Gg=ze,Jg=Be,Wg=Hr("".charAt),Wa=Hr("".charCodeAt),Zg=Hr("".slice),Za=function(n){return function(t,a){var o,i,s=Gg(Jg(t)),c=Kg(a),u=s.length;return c<0||c>=u?n?"":void 0:(o=Wa(s,c))<55296||o>56319||c+1===u||(i=Wa(s,c+1))<56320||i>57343?n?Wg(s,c):o:n?Zg(s,c,c+2):i-56320+(o-55296<<10)+65536}},Vg={codeAt:Za(!1),charAt:Za(!0)}.charAt,Bs=function(n,t,a){return t+(a?Vg(n,t).length:1)},Fr=X,Xg=He,Qg=Math.floor,Wt=Fr("".charAt),Yg=Fr("".replace),Zt=Fr("".slice),eb=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,nb=/\$([$&'`]|\d{1,2})/g,Va=Le,tb=Oe,rb=ie,ab=Ue,ib=Wn,sb=TypeError,Hs=function(n,t){var a=n.exec;if(rb(a)){var o=Va(a,n,t);return o!==null&&tb(o),o}if(ab(n)==="RegExp")return Va(ib,n,t);throw new sb("RegExp#exec called on incompatible receiver")},ob=Bg,Xa=Le,pt=X,cb=Us,lb=Q,ub=Oe,db=ie,pb=tt,hb=ot,mb=kn,Ze=ze,fb=Be,gb=Bs,bb=Er,yb=function(n,t,a,o,i,s){var c=a+n.length,u=o.length,d=nb;return i!==void 0&&(i=Xg(i),d=eb),Yg(s,d,function(e,h){var m;switch(Wt(h,0)){case"$":return"$";case"&":return n;case"`":return Zt(t,0,a);case"'":return Zt(t,c);case"<":m=i[Zt(h,1,-1)];break;default:var g=+h;if(g===0)return e;if(g>u){var f=Qg(g/10);return f===0?e:f<=u?o[f-1]===void 0?Wt(h,1):o[f-1]+Wt(h,1):e}m=o[g-1]}return m===void 0?"":m})},_b=Hs,mr=be("replace"),vb=Math.max,Sb=Math.min,Eb=pt([].concat),Vt=pt([].push),Qa=pt("".indexOf),Ya=pt("".slice),kb="a".replace(/./,"$0")==="$0",ei=!!/./[mr]&&/./[mr]("a","$0")==="";cb("replace",function(n,t,a){var o=ei?"$":"$0";return[function(i,s){var c=fb(this),u=pb(i)?void 0:bb(i,mr);return u?Xa(u,i,c,s):Xa(t,Ze(c),i,s)},function(i,s){var c=ub(this),u=Ze(i);if(typeof s=="string"&&Qa(s,o)===-1&&Qa(s,"$<")===-1){var d=a(t,c,u,s);if(d.done)return d.value}var e=db(s);e||(s=Ze(s));var h,m=c.global;m&&(h=c.unicode,c.lastIndex=0);for(var g,f=[];(g=_b(c,u))!==null&&(Vt(f,g),m);)Ze(g[0])===""&&(c.lastIndex=gb(u,mb(c.lastIndex),h));for(var p,l="",r=0,S=0;S<f.length;S++){for(var w,O=Ze((g=f[S])[0]),T=vb(Sb(hb(g.index),u.length),0),C=[],j=1;j<g.length;j++)Vt(C,(p=g[j])===void 0?p:String(p));var $=g.groups;if(e){var R=Eb([O],C,T,u);$!==void 0&&Vt(R,$),w=Ze(ob(s,void 0,R))}else w=yb(O,u,T,C,$,s);T>=r&&(l+=Ya(u,r,T)+w,r=T+O.length)}return l+Ya(u,r)}]},!!lb(function(){var n=/./;return n.exec=function(){var t=[];return t.groups={a:"7"},t},"".replace(n,"$<a>")!=="7"})||!kb||ei);var ni=bs,Ob=Fe,wb=fe,Tb=Ar.EXISTS,Fs=X,Nb=function(n,t,a){return a.get&&ni(a.get,t,{getter:!0}),a.set&&ni(a.set,t,{setter:!0}),Ob.f(n,t,a)},zs=Function.prototype,Ab=Fs(zs.toString),Ks=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,Cb=Fs(Ks.exec);wb&&!Tb&&Nb(zs,"name",{configurable:!0,get:function(){try{return Cb(Ks,Ab(this))[1]}catch{return""}}}),se({target:"Array",stat:!0},{isArray:Dr});var xb=lt.map;se({target:"Array",proto:!0,forced:!Ir("map")},{map:function(n){return xb(this,n,arguments.length>1?arguments[1]:void 0)}});var qb=se,Rb=nt,Lb=an,$b=ut,Mb=X([].join);qb({target:"Array",proto:!0,forced:Rb!==Object||!$b("join",",")},{join:function(n){return Mb(Lb(this),n===void 0?",":n)}});var Db=!Q(function(){function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype}),jb=ge,Ib=ie,Pb=He,Ub=Db,ti=Cr("IE_PROTO"),fr=Object,Bb=fr.prototype,Hb=Ub?fr.getPrototypeOf:function(n){var t=Pb(n);if(jb(t,ti))return t[ti];var a=t.constructor;return Ib(a)&&t instanceof a?a.prototype:t instanceof fr?Bb:null},Gs=fe,Fb=Q,Js=X,zb=Hb,Kb=Br,Gb=an,Ws=Js(vr.f),Jb=Js([].push),Wb=Gs&&Fb(function(){var n=Object.create(null);return n[2]=2,!Ws(n,2)}),ri=function(n){return function(t){for(var a,o=Gb(t),i=Kb(o),s=Wb&&zb(o)===null,c=i.length,u=0,d=[];c>u;)a=i[u++],Gs&&!(s?a in o:Ws(o,a))||Jb(d,n?[a,o[a]]:o[a]);return d}},Zs={entries:ri(!0),values:ri(!1)},Zb=Zs.entries;se({target:"Object",stat:!0},{entries:function(n){return Zb(n)}});var Vb=TypeError,Xb=Tr,Qb=Fe,Yb=Sr,ey=se,ny=Q,ty=Dr,ry=ke,ay=He,iy=ct,ai=function(n){if(n>9007199254740991)throw Vb("Maximum allowed index exceeded");return n},ii=function(n,t,a){var o=Xb(t);o in n?Qb.f(n,o,Yb(0,a)):n[o]=a},sy=qs,oy=Ir,cy=fn,Vs=be("isConcatSpreadable"),ly=cy>=51||!ny(function(){var n=[];return n[Vs]=!1,n.concat()[0]!==n}),uy=function(n){if(!ry(n))return!1;var t=n[Vs];return t!==void 0?!!t:ty(n)};ey({target:"Array",proto:!0,arity:1,forced:!ly||!oy("concat")},{concat:function(n){var t,a,o,i,s,c=ay(this),u=sy(c,0),d=0;for(t=-1,o=arguments.length;t<o;t++)if(uy(s=t===-1?c:arguments[t]))for(i=iy(s),ai(d+i),a=0;a<i;a++,d++)a in s&&ii(u,d,s[a]);else ai(d+1),ii(u,d++,s);return u.length=d,u}});var dy=He,si=Br;se({target:"Object",stat:!0,forced:Q(function(){si(1)})},{keys:function(n){return si(dy(n))}});var py=Le,hy=Oe,my=tt,fy=kn,Xt=ze,gy=Be,by=Er,yy=Bs,oi=Hs;Us("match",function(n,t,a){return[function(o){var i=gy(this),s=my(o)?void 0:by(o,n);return s?py(s,o,i):new RegExp(o)[n](Xt(i))},function(o){var i=hy(this),s=Xt(o),c=a(t,i,s);if(c.done)return c.value;if(!i.global)return oi(i,s);var u=i.unicode;i.lastIndex=0;for(var d,e=[],h=0;(d=oi(i,s))!==null;){var m=Xt(d[0]);e[h]=m,m===""&&(i.lastIndex=yy(s,fy(i.lastIndex),u)),h++}return h===0?null:e}]});var _y=it,vy=He,Sy=nt,Ey=ct,ky=TypeError,ci=function(n){return function(t,a,o,i){_y(a);var s=vy(t),c=Sy(s),u=Ey(s),d=n?u-1:0,e=n?-1:1;if(o<2)for(;;){if(d in c){i=c[d],d+=e;break}if(d+=e,n?d<0:u<=d)throw new ky("Reduce of empty array with no initial value")}for(;n?d>=0:u>d;d+=e)d in c&&(i=a(i,c[d],d,s));return i}},Oy={left:ci(!1),right:ci(!0)},wy=Ue(ae.process)==="process",Ty=Oy.left;se({target:"Array",proto:!0,forced:!wy&&fn>79&&fn<83||!ut("reduce")},{reduce:function(n){var t=arguments.length;return Ty(this,n,t,t>1?arguments[1]:void 0)}});var Xs=X,Ny=En,zr=Date.prototype,li="Invalid Date",Qs="toString",Ay=Xs(zr[Qs]),Cy=Xs(zr.getTime);String(new Date(NaN))!==li&&Ny(zr,Qs,function(){var n=Cy(this);return n==n?Ay(this):li});var xy=Le,qy=ge,Ry=as,Ly=$s,ui=RegExp.prototype,$y=Ar.PROPER,My=En,Dy=Oe,di=ze,jy=Q,Iy=function(n){var t=n.flags;return t!==void 0||"flags"in ui||qy(n,"flags")||!Ry(ui,n)?t:xy(Ly,n)},Kr="toString",Ys=RegExp.prototype[Kr],Py=jy(function(){return Ys.call({source:"a",flags:"b"})!=="/a/b"}),Uy=$y&&Ys.name!==Kr;(Py||Uy)&&My(RegExp.prototype,Kr,function(){var n=Dy(this);return"/"+di(n.source)+"/"+di(Iy(n))},{unsafe:!0});var By=Zs.values;se({target:"Object",stat:!0},{values:function(n){return By(n)}});var Hy=lt.some;se({target:"Array",proto:!0,forced:!ut("some")},{some:function(n){return Hy(this,n,arguments.length>1?arguments[1]:void 0)}});var pi={"swift/urlsession":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
// Create a new URLRequest object
var request = URLRequest(url: URL(string: "`),e(h),e(`")!)

// Set the request method
request.httpMethod = "`),e(m),e(`"

// Set the request content type header
request.addValue("`),e(g),e(`", forHTTPHeaderField: "Content-Type")

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){b(this,i),e(`
request.addValue("`),e(t(r.value)),e('", forHTTPHeaderField: "'),e(t(r.name)),e(`")
`)}).bind(this))),e(`

`),l.length>0&&(e(`
// Add cookies to the request
`),l.forEach((function(r){b(this,i),e(`
request.addValue("`),e(t(r.value)),e('", forHTTPHeaderField: "'),e(t(r.name)),e(`")
`)}).bind(this))),e(`

`),m==="POST"&&p.length>0&&(e(`// Set the request body
`),p.length===1&&p[0].type==="file"?e(`
let fileUrl = URL(fileURLWithPath: "/path/to/file")
let data = try Data(contentsOf: fileUrl)
request.httpBody = data
`):(e(`
let postDataDict = `),e(t(JSON.stringify(p.reduce((function(r,S){return b(this,i),Array.isArray(S.value)||A(S.value),r[S.name]=S.value,r}).bind(this),{})))),e(`
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
`),d},"swift/alamofire":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
let fullUrl = "`),e(h),e(`"

// Set up the request headers
var headers: HTTPHeaders = [:]
`),g.forEach((function(l){b(this,i),e(`
headers["`),e(t(l.name)),e('"] = "'),e(t(l.value)),e(`"
`)}).bind(this)),e(`

`),p.length>0&&(e(`
// Add cookies to the request
`),p.forEach((function(l){b(this,i),e(`
let cookie = HTTPCookie(properties: [
    .domain: "`),e(t(l.domain)),e(`",
    .path: "`),e(t(l.path)),e(`",
    .name: "`),e(t(l.name)),e(`",
    .value: "`),e(t(l.value)),e(`",
])!
HTTPCookieStorage.shared.setCookie(cookie)
`)}).bind(this)),e(`
`)),e(`

// Set up the request parameters
var parameters: Parameters = [:]
`),f.forEach((function(l){b(this,i),e(`
`),Array.isArray(l.value)||A(l.value)==="object"?(e(`
if let jsonData = try? JSONSerialization.data(withJSONObject: `),e(t(JSON.stringify(l.value))),e(`, options: []) {
    if let jsonString = String(data: jsonData, encoding: .utf8) {
        parameters["`),e(t(l.name)),e(`"] = jsonString
    }
}
`)):(e(`
parameters["`),e(t(l.name)),e('"] = "'),e(t(l.value)),e(`"
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
`),d},"scala/scalaj-http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
import scalaj.http._

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(g)),e(`"
val headers = `),f.length>0?(e(`Seq(
`),f.forEach((function(r){b(this,i),e(`
  ("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Nil"),e(`
val cookies = `),l.length>0?(e(`Seq(
`),l.forEach((function(r){b(this,i),e(`
  HttpCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Nil"),e(`
val postData = `),p.length>0?(e(`Seq(
`),p.forEach((function(r){b(this,i),e(`
`),Array.isArray(r.value)||A(r.value)==="object"?(e(`
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
      `),p.forEach((function(r){b(this,i),e(`
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
`),d},"scala/http4s":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
`),f.forEach((function(r){b(this,i),e(`
  Header.apply("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Headers.empty"),e(`
val cookies = `),l.length>0?(e(`Seq(
`),l.forEach((function(r){b(this,i),e(`
  RequestCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Seq.empty"),e(`
val postData = `),p.length>0?(e(`UrlForm(
`),p.forEach((function(r){b(this,i),e(`
`),Array.isArray(r.value)||A(r.value)==="object"?(e(`
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
`),d},"scala/akka":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
`),f.forEach((function(r){b(this,i),e(`
  HttpHeader.parse("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[HttpHeader],
`)}).bind(this)),e(`
)
val cookies = List(
`),l.forEach((function(r){b(this,i),e(`
  HttpCookiePair("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[HttpCookiePair],
`)}).bind(this)),e(`
)
val postData = List(
`),p.forEach((function(r){b(this,i),e(`
  `),Array.isArray(r.value)||A(r.value)==="object"?(e(`
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
`),d},"rust/surf":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
use surf::http::{Method, Url, headers::{Headers, HeaderValue}};

// Construct the request URL
let url = Url::new("`),e(t(h)),e(`").unwrap();

// Set up the request
let mut req = surf::Request::new(`),e(t(m)),e(` , url);

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach((function(l){b(this,i),e(`
req.insert_header("`),e(t(l.name)),e('", HeaderValue::from_str("'),e(t(l.value)),e(`").unwrap());
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
// Add cookies to the request
`),p.forEach((function(l){b(this,i),e(`
req.insert_cookie(surf::http::Cookie::new("`),e(t(l.name)),e('", "'),e(t(l.value)),e(`"));
`)}).bind(this)),e(`
`)),e(`

`),f.length>0&&(e(`
// Send the request
let body = `),f.length===1&&f[0].type==="file"?(e(`
surf::Body::from(surf::http::Form::from(`),f[0].value,e(`))
`)):(e(`
surf::Body::from("`),e(t(f.map((function(l){return b(this,i),Array.isArray(l.value)||A(l.value)==="object"?l.name+"="+encodeURIComponent(JSON.stringify(l.value)):l.name+"="+encodeURIComponent(l.value)}).bind(this)).join("&"))),e(`")
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
`),d},"rust/reqwest":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
let url = "`),e(t(h)),e(`";
let method = "`),e(t(m)),e(`";
let mime_type = "`),e(t(g)),e(`";

let headers = reqwest::header::HeaderMap::new();
`),f.forEach((function(r){b(this,i),e(`
headers.insert("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`".parse().unwrap());
`)}).bind(this)),e(`

let mut cookies = reqwest::cookie::CookieJar::new();
`),l.forEach((function(r){b(this,i),e(`
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
let post_data = "`),e(t(p.map((function(r){return b(this,i),Array.isArray(r.value)||A(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`";
let request_builder = request_builder.body(post_data);
`)),e(`
`)),e(`

let response = request_builder.send().await.unwrap();
let response_text = response.text().await.unwrap();
println!("Response: {}", response_text);
`),d},"rust/hyper":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
// Create a new Hyper client object
let client = hyper::Client::new();

// Construct the request URL
let full_url = "`),e(t(h)),e(`";

// Create the request
let mut req = hyper::Request::new(hyper::Method::`),e(t(m)),e(`, full_url);

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){b(this,i),e(`
req.headers_mut().insert(hyper::header::`),e(t(r.name)),e(", "),e(t(r.value)),e(`.parse().unwrap());
`)}).bind(this)),e(`
`)),e(`

`),l.length>0&&(e(`
// Add cookies to the request
`),l.forEach((function(r){b(this,i),e(`
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
let body = hyper::Body::from("`),e(t(p.map((function(r){return b(this,i),Array.isArray(r.value)||A(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`");
`)),e(`
req.headers_mut().insert(hyper::header::CONTENT_TYPE, "`),e(t(g)),e(`".parse().unwrap());
req.headers_mut().insert(hyper::header::CONTENT_LENGTH, body.len().into());
req.set_body(body);
`)),e(`

// Send the request and get the response
let res = client.request(req).await?;

// Print the response
println!("Response: \\n{:?}", res);
`),d},"ruby/restclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
require 'rest-client'

url = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(g)),e(`"

headers = {
  `),f.forEach((function(r){b(this,i),e(`
    "`),e(t(r.name)),e('" => "'),e(t(r.value)),e(`",
  `)}).bind(this)),e(`
}

cookies = {
  `),l.forEach((function(r){b(this,i),e(`
    "`),e(t(r.name)),e('" => "'),e(t(r.value)),e(`",
  `)}).bind(this)),e(`
}

`),m==="GET"?e(`
  response = RestClient.get(url, headers: headers, cookies: cookies)
`):(e(`
  body = "`),e(t(p.map((function(r){return b(this,i),Array.isArray(r.value)||A(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`"
  response = RestClient::`),e(t(m.downcase)),e(`(url, body, headers: headers, cookies: cookies, content_type: mimeType)
`)),e(`

puts "Response: #{response.body}"
`),d},"ruby/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
require 'net/http'
require 'uri'

url = URI("`),e(t(h)),e(`")
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(g)),e(`"

`),m==="GET"?e(`
  req = Net::HTTP::Get.new(url)
`):(e(`
  body = "`),e(t(p.map((function(r){return b(this,i),Array.isArray(r.value)||A(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`"
  req = Net::HTTP::`),e(t(m.capitalize)),e(`.new(url)
  req.body = body
  req.content_type = mimeType
`)),e(`

`),f.forEach((function(r){b(this,i),e(`
  req['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`'
`)}).bind(this)),e(`

`),l.forEach((function(r){b(this,i),e(`
  req['Cookie'] = '`),e(t(r.name)),e("="),e(t(r.value)),e(`'
`)}).bind(this)),e(`

res = Net::HTTP.start(url.hostname, url.port, use_ssl: url.scheme == 'https') do |http|
  http.request(req)
end

puts "Response: #{res.body}"
`),d},"python/requests":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
import requests

# Extract parameters from the options object
fullUrl = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(g)),e(`"
headers = {
    `),f.forEach((function(r){b(this,i),e(`
        '`),e(t(r.name)),e("': '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
}
postData = {
`),p.forEach((function(r){b(this,i),e(`
'`),e(t(r.name)),e("': "),Array.isArray(r.value)||A(r.value)==="object"?(e(`
    '`),e(t(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(t(r.value)),e(`',
`)),e(`
`)}).bind(this)),e(`
}
cookies = {
    `),l.forEach((function(r){b(this,i),e(`
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
`),d},"python/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
import http.client

# Extract parameters from the options object
fullUrl = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(g)),e(`"
headers = [
    `),f.forEach((function(r){b(this,i),e(`
        ('`),e(t(r.name)),e("', '"),e(t(r.value)),e(`'),
    `)}).bind(this)),e(`
]
postData = {
`),p.forEach((function(r){b(this,i),e(`
'`),e(t(r.name)),e("': "),Array.isArray(r.value)||A(r.value)==="object"?(e(`
    '`),e(t(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(t(r.value)),e(`',
`)),e(`
`)}).bind(this)),e(`
}
cookies = {
    `),l.forEach((function(r){b(this,i),e(`
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
`),d},"powershell/webrequest":function(n,t,a,o){var i=this;t=t||function(h){return h==null?"":String(h).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(h){return s[h]||h}var d="";function e(h){h!=null&&(d+=h)}return e('$url = "'),e(t(url)),e(`"
$method = "`),e(t(method)),e(`"
$mimeType = "`),e(t(mimeType)),e(`"

$headers = @{
`),headers.forEach((function(h){b(this,i),e(`
  "`),e(t(h.name)),e('" = "'),e(t(h.value)),e(`",
`)}).bind(this)),e(`
}

$cookies = @{
`),cookies.forEach((function(h){b(this,i),e(`
  "`),e(t(h.name)),e('" = "'),e(t(h.value)),e(`",
`)}).bind(this)),e(`
}

`),method==="GET"?e(`
  $req = Invoke-WebRequest -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),postData.forEach((function(h){b(this,i),e(`
    "`),e(t(h.name)),e('" = '),Array.isArray(h.value)||A(h.value)==="object"?(e(`
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
`),d},"powershell/restmethod":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
$url = "`),e(t(h)),e(`"
$method = "`),e(t(m)),e(`"
$mimeType = "`),e(t(g)),e(`"

$headers = @{
`),f.forEach((function(r){b(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
}

$cookies = @{
`),l.forEach((function(r){b(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
}

`),m==="GET"?e(`
  $req = Invoke-RestMethod -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),p.forEach((function(r){b(this,i),e(`
    "`),e(t(r.name)),e('" = '),Array.isArray(r.value)||A(r.value)==="object"?(e(`
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
`),d},"php/http2":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php
    $host = parse_url("`),e(t(h)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(t(h)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),g.forEach((function(l){b(this,i),e(' "'),e(t(l.name)),e('" => "'),e(t(l.value)),e('", ')}).bind(this)),e(` );
    $httpCookies = array( `),p.forEach((function(l){b(this,i),e(' "'),e(t(l.name)),e('" => "'),e(t(l.value)),e('", ')}).bind(this)),e(` );
    $httpBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
        `),Array.isArray(f)?(e(`
        $postData = array( `),f.forEach((function(l){b(this,i),e(" '"),e(t(l.name)),e("' => '"),e(t(Array.isArray(l.value)?JSON.stringify(l.value):encodeURIComponent(l.value))),e("', ")}).bind(this)),e(` );
        $httpBody = http_build_query($postData);
        `)):A(f)==="object"&&(e(`
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
`),d},"php/http1":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php
    $host = parse_url("`),e(t(h)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(t(h)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),g.forEach((function(l){b(this,i),e(' "'),e(t(l.name)),e(": "),e(t(l.value)),e('", ')}).bind(this)),e(` );
    $httpCookies = array( `),p.forEach((function(l){b(this,i),e(' "'),e(t(l.name)),e('" => "'),e(t(l.value)),e('", ')}).bind(this)),e(` );
    $httpBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
    $httpBody = new http\\Message\\Body(fopen('`),e(t(f[0].value)),e(`', 'r'));
    `)):(e(`
     $postData = array( `),f.forEach((function(l){b(this,i),e(" '"),e(t(l.name)),e("' => '"),e(t(Array.isArray(l.value)?JSON.stringify(l.value):encodeURIComponent(l.value))),e("', ")}).bind(this)),e(` );
     $httpBody = new http\\Message\\Body(http_build_query($postData));
    `)),e(" ")):A(f)==="object"&&(e(`
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
`),d},"php/guzzle":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
<?php
    use GuzzleHttp\\Exception\\RequestException;
    $client = new Client();
    $url = "`),e(t(h)),e(`";
    $headers = array( `),g.forEach((function(l){b(this,i),e(' "'),e(t(l.name)),e('" => "'),e(t(l.value)),e('", ')}).bind(this)),e(` );
    $cookies = array( `),p.forEach((function(l){b(this,i),e(' "'),e(t(l.name)),e('" => "'),e(t(l.value)),e('", ')}).bind(this)),e(` );
    $requestBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
        $requestBody = array( 'multipart' => [ [ 'name' => '`),e(t(f[0].name)),e("', 'contents' => fopen('"),e(t(f[0].value)),e(`', 'r') ] ] );
    `)):(e(`
        $postData = array( `),f.forEach((function(l){b(this,i),e(" '"),e(t(l.name)),e("' => '"),e(t(Array.isArray(l.value)?JSON.stringify(l.value):encodeURIComponent(l.value))),e("', ")}).bind(this)),e(` );
        $requestBody = http_build_query($postData);
    `)),e(`
    `)):A(f)==="object"&&(e(`
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
`),d},"php/curl":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

<?php

    $url = "`),e(t(h)),e(`";
    $requestHeaders = array( `),g.forEach((function(l){b(this,i),e(' "'),e(t(l.name)),e(": "),e(t(l.value)),e('", ')}).bind(this)),e(` );
    $requestCookies = array( `),p.forEach((function(l){b(this,i),e(' "'),e(t(l.name)),e("=<"),e(t(l.value)),e('>", ')}).bind(this)),e(` );
    $requestBody = null; if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(f)?(e(`
    `),f.length===1&&f[0].type==="file"?(e(`
    $requestBody = array( '`),e(t(f[0].name)),e("' => new [](poeCURLFile('"),e(t(f[0].value)),e(`') );
    `)):(e(`
    $postData = array( `),f.forEach((function(l){b(this,i),e(`
        '`),e(t(l.name)),e("' => '"),e(t(Array.isArray(l.value)?JSON.stringify(l.value):encodeURIComponent(l.value))),e(`',
    `)}).bind(this)),e(` );
    $requestBody = http_build_query($postData); `)),e(`
    `)):A(f)==="object"&&(e(`
    $postData = array( `),Object.keys(f).forEach((function(l){b(this,i),e(`
        '`),e(t(l)),e("' => '"),e(t(Array.isArray(f[l])?JSON.stringify(f[l]):encodeURIComponent(f[l]))),e(`',
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
`),d},"perl/useragent":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
`),e(`
use LWP::UserAgent;
my $ua = LWP::UserAgent->new;

`),e(`
my $fullUrl = '`),e(t(h)),e(`';

`),e(`
my $request = HTTP::Request->new('`),e(t(m)),e(`', $fullUrl);

`),g.length>0&&(e(`
`),e(`
`),g.forEach((function(l){b(this,i),e(`
    $request->header('`),e(t(l.name)),e("', '"),e(t(l.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
`),e(`
`),p.forEach((function(l){b(this,i),e(`
    $ua->cookie_jar->set_cookie(0, '`),e(t(l.name)),e("', '"),e(t(l.value)),e(`', '/', 'example.com');
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
`),f.forEach((function(l){b(this,i),e(`
    '`),e(t(l.name)),e("' => '"),e(t(Array.isArray(l.value)?JSON.stringify(l.value):l.value)),e(`',
`)}).bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):A(f)==="object"&&(e(`
my $post_data = {
`),Object.keys(f).forEach((function(l){b(this,i),e(`
'`),e(t(l)),e("' => '"),e(t(Array.isArray(f[l])?JSON.stringify(f[l]):f[l])),e(`',
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
`),d},"perl/tiny":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
`),e(`
use HTTP::Tiny;
my $http = HTTP::Tiny->new;

`),e(`
my $fullUrl = '`),e(t(h)),e(`';

`),e(`
my $options = {
headers => {
    'Content-Type' => '`),e(t(g)),e(`',
    `),f.forEach((function(r){b(this,i),e(`
    '`),e(t(r.name)),e("' => '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
},
`),l.forEach((function(r){b(this,i),e(`
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
`),p.forEach((function(r){b(this,i),e(`
    '`),e(t(r.name)),e("' => '"),e(t(Array.isArray(r.value)?JSON.stringify(r.value):r.value)),e(`',
`)}).bind(this)),e(`
};
$options->{content} = join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data);
`)),e(`
`)):A(p)==="object"&&(e(`
my $post_data = {
`),Object.keys(p).forEach((function(r){b(this,i),e(`
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
`),d},"perl/request":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
`),e(`
use HTTP::Request;
my $request = HTTP::Request->new('`),e(t(m)),e("', '"),e(t(h)),e(`');

`),g.length>0&&(e(`
`),e(`
`),g.forEach((function(l){b(this,i),e(`
$request->header('`),e(t(l.name)),e("', '"),e(t(l.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
`),e(`
`),p.forEach((function(l){b(this,i),e(`
$request->header('Cookie', '`),e(t(l.name)),e("="),e(t(l.value)),e(`');
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
`),f.forEach((function(l){b(this,i),e(`
    '`),e(t(l.name)),e("' => '"),e(t(Array.isArray(l.value)?JSON.stringify(l.value):l.value)),e(`',
`)}).bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):A(f)==="object"&&(e(`
my $post_data = {
`),Object.keys(f).forEach((function(l){b(this,i),e(`
'`),e(t(l)),e("' => '"),e(t(Array.isArray(f[l])?JSON.stringify(f[l]):f[l])),e(`',
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
`),d},"ocaml/httpaf":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
(* Construct the request URL *)
let fullUrl = "`),e(t(h)),e(`" in
let headers = Httpaf.Headers.of_list [
  "Content-Type", "`),e(t(g)),e(`";
  `),f.forEach((function(r){b(this,i),e(`
    "`),e(t(r.name)),e('", "'),e(t(r.value)),e(`";
  `)}).bind(this)),e(`
  `),l.forEach((function(r){b(this,i),e(`
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
`),d},"ocaml/cohttp_lwt":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
(* Set up the request *)
let fullUrl = "`),e(t(h)),e(`" in
let headers = Cohttp.Header.of_list [
  "Content-Type", "`),e(t(g)),e(`";
    `),f.forEach((function(r){b(this,i),e(`
      "`),e(t(r.name)),e('", "'),e(t(r.value)),e(`";
    `)}).bind(this)),e(`
    `),l.forEach((function(r){b(this,i),e(`
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
`),d},"objectivec/nsurlsession":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(h),e(`";
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),f.forEach((function(r){b(this,i),e(`
    [headers setObject:@"`),e(t(r.value)),e('" forKey:@"'),e(t(r.name)),e(`"];
`)}).bind(this)),e(`
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),p.forEach((function(r){var S=this;b(this,i),e(`
`),Array.isArray(r.value)?(e(`
    NSMutableArray *`),e(t(r.name)),e(`Array = [NSMutableArray array];
    `),r.value.forEach((function(w){var O=this;b(this,S),e(`
    `),A(w)==="object"?(e(`
    NSDictionary *`),e(t(r.name)),e(`Item = @{
    `),Object.keys(w).forEach((function(T){b(this,O),e(`
        @"`),e(t(T)),e('": '),e(t(JSON.stringify(w[T]))),e(`,
    `)}).bind(this)),e(`
    };
    [`),e(t(r.name)),e("Array addObject:"),e(t(r.name)),e(`Item];
    `)):(e(`
        [`),e(t(r.name)),e('Array addObject:@"'),e(t(w)),e(`"];
    `)),e(`
    `)}).bind(this)),e(`
    [parameters setObject:`),e(t(r.name)),e('Array forKey:@"'),e(t(r.name)),e(`"];
`)):A(r.value)==="object"?(e(`
    NSDictionary *`),e(t(r.name)),e(`Dict = @{
    `),Object.keys(r.value).forEach((function(w){b(this,S),e(`
        @"`),e(t(w)),e('": '),e(t(JSON.stringify(r.value[w]))),e(`,
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
`),l.forEach((function(r){b(this,i),e(`
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
`),d},"objectivec/afnetworking":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(h),e(`";

// Set up the request headers
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),g.forEach((function(l){b(this,i),e(`
    [headers setObject:@"`),e(t(l.value)),e('" forKey:@"'),e(t(l.name)),e(`"];
`)}).bind(this)),e(`

// Add cookies to the request
`),p.forEach((function(l){b(this,i),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(t(l.domain)),e(`",
    NSHTTPCookiePath: @"`),e(t(l.path)),e(`",
    NSHTTPCookieName: @"`),e(t(l.name)),e(`",
    NSHTTPCookieValue: @"`),e(t(l.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
`)}).bind(this)),e(`

// Set up the request parameters
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),f.forEach((function(l){var r=this;b(this,i),e(`
    `),Array.isArray(l.value)?(e(`
    NSMutableArray *`),e(t(l.name)),e(`Array = [NSMutableArray array];
    `),l.value.forEach((function(S){b(this,r),e(`
    `),A(S)==="object"?(e(`
    NSDictionary *`),e(t(l.name)),e(`Object = @{
        '`),e(t(Object.keys(S)[0])),e("': "),e(t(JSON.stringify(S[Object.keys(S)[0]]))),e(`,
    };
    [`),e(t(l.name)),e("Array addObject:"),e(t(l.name)),e(`Object];
    `)):(e(`
        [`),e(t(l.name)),e('Array addObject:@"'),e(t(encodeURIComponent(S))),e(`"];
    `)),e(`
    `)}).bind(this)),e(`
    [parameters setObject:`),e(t(l.name)),e('Array forKey:@"'),e(t(l.name)),e(`"];
    `)):A(l.value)==="object"?(e(`
        NSDictionary *`),e(t(l.name)),e(`Object = @{
        '`),e(t(Object.keys(l.value)[0])),e("': "),e(t(JSON.stringify(l.value[Object.keys(l.value)[0]]))),e(`,
        };
        [parameters setObject:`),e(t(l.name)),e('Object forKey:@"'),e(t(l.name)),e(`"];
    `)):(e(`
        [parameters setObject:@"`),e(t(encodeURIComponent(l.value))),e('" forKey:@"'),e(t(l.name)),e(`"];
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
`),d},"lua/httpclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
local http_client = require("httpclient")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){b(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){var S=this;b(this,i),e(`
    ['`),e(t(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
        {
        `),r.value.forEach((function(w,O){b(this,S),e(`
            `),A(w)==="object"?(e(`
                ['`),e(t(Object.keys(w)[0])),e("'] = "),e(t(JSON.stringify(w[Object.keys(w)[0]]))),e(`,
            `)):(e(`
                `),e(t(O)),e(" = '"),e(t(encodeURIComponent(w))),e(`',
            `)),e(`
        `)}).bind(this)),e(`
        },
    `)):A(r.value)==="object"?(e(`
        {
        ['`),e(t(Object.keys(r.value)[0])),e("'] = "),e(t(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
        },
    `)):(e(`
        '`),e(t(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),l.forEach((function(r){b(this,i),e(`
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
`),d},"lua/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
local http = require("socket.http")
local ltn12 = require("ltn12")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){b(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){var S=this;b(this,i),e(`
    ['`),e(t(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
    {
    `),r.value.forEach((function(w,O){b(this,S),e(`
    `),A(w)==="object"?(e(`
        ['`),e(t(Object.keys(w)[0])),e("'] = "),e(t(JSON.stringify(w[Object.keys(w)[0]]))),e(`,
    `)):(e(`
        `),e(t(O)),e(" = '"),e(t(encodeURIComponent(w))),e(`',
    `)),e(`
    `)}).bind(this)),e(`
    },
    `)):A(r.value)==="object"?(e(`
    {
    ['`),e(t(Object.keys(r.value)[0])),e("'] = "),e(t(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
    },
    `)):(e(`
    '`),e(t(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),l.forEach((function(r){b(this,i),e(`
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
`),d},"lua/curl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
local curl = require("cURL")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(g)),e(`'
local headers = {
`),f.forEach((function(r){b(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){b(this,i),e(`
    `),Array.isArray(r.value)||A(r.value)==="object"?(e(`
    ['`),e(t(r.name)),e("'] = "),e(t(JSON.stringify(r.value))),e(`,
    `)):(e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),l.forEach((function(r){b(this,i),e(`
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
`),d},"kotlin/okhttp3":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
import okhttp3.*
import java.io.IOException

val client = OkHttpClient()

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(g)),e(`"

val body = `),p.length>0?(e(`
  `),p.forEach((function(r){b(this,i),e(`
  `),Array.isArray(r.value)||A(r.value)==="object"?(e(`
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
`),f.forEach((function(r){b(this,i),e(`
  .addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`),l.forEach((function(r){b(this,i),e(`
  .addHeader("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`")
`)}).bind(this)),e(`
.build()

val response = client.newCall(request).execute()

println("Response: " + response.body()?.string())
`),d},"kotlin/java":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

val url = URL("`),e(t(h)),e(`")
val connection = url.openConnection() as HttpURLConnection
connection.requestMethod = "`),e(t(m)),e(`"

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){b(this,i),e(`
connection.setRequestProperty("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`)),e(`

`),l.length>0&&(e(`
// Add cookies to the request
`),l.forEach((function(r){b(this,i),e(`
connection.addRequestProperty("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`)),e(`

// Send the request
`),p.length>0?m==="POST"?(e(`
val postData = "`),e(t(p.map((function(r){var S=this;if(b(this,i),Array.isArray(r.value))return r.value.map((function(T){return b(this,S),encodeURIComponent(T.toString(),"UTF-8")}).bind(this)).map((function(T){return b(this,S),r.name+"="+T}).bind(this)).join("&");if(A(r.value)==="object"){var w=Object.values(r.value).map((function(T){return b(this,S),encodeURIComponent(T.toString(),"UTF-8")}).bind(this)),O=Object.keys(r.value);return w.map((function(T,C){return b(this,S),r.name+"["+O[C]+"]="+T}).bind(this)).join("&")}return r.name+"="+encodeURIComponent(r.value.toString(),"UTF-8")}).bind(this)).join("&"))),e(`".toByteArray(Charsets.UTF_8)
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
`),d},"kotlin/fuel":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
import com.github.kittinunf.fuel.*
import com.github.kittinunf.fuel.core.*
import com.github.kittinunf.result.*

val fullUrl = "`),e(t(h)),e(`"

val requestHeaders = listOf(
    `),f.forEach((function(r){b(this,i),e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)}).bind(this)),e(`
)

val requestCookies = listOf(
    `),l.forEach((function(r){b(this,i),e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)}).bind(this)),e(`
)

val parameters = listOf(
    `),p.forEach((function(r){b(this,i),e(`
    `),Array.isArray(r.value)||A(r.value)==="object"?(e(`
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
`),d},"javascript/jquery":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  const fullUrl = url;

  // Set up the request configuration object
  const config = {
    url: fullUrl,
    type: method,
    headers: {
      'Content-Type': mimeType,
      `),f.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    data: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" null "),e(`
  };

  // Add cookies to the request
  `),l.forEach((function(r){b(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
  `),f.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),l.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/fetch":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  // Construct the request configuration object
  var config = {
    method: method,
    headers: {
      'Content-Type': mimeType,
      `),f.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    body: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" null "),e(`
  };

  // Add cookies to the request
  `),l.forEach((function(r){b(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
  `),f.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),l.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/axios":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
// Import the Axios library
import axios from 'axios';

async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  // Construct the request configuration object
  var config = {
    method: method,
    url: url,
    headers: {
      'Content-Type': mimeType,
      `),f.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    data: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" undefined "),e(`
  };

  // Add cookies to the request
  `),l.forEach((function(r){b(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
  `),f.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),l.forEach((function(r){b(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/xmlhttprequest":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
  `),f.forEach((function(r){b(this,i),e("{ name: '"),e(t(r.name)),e("', value: '"),e(t(r.value)),e("' },")}).bind(this)),e(`
];
const cookies = [
  `),l.forEach((function(r){b(this,i),e("{ name: '"),e(t(r.name)),e("', value: '"),e(t(r.value)),e("' },")}).bind(this)),e(`
];

const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"java/unirest":function(n,t,a,o){var i=this;t=t||function(w){return w==null?"":String(w).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(w){return s[w]||w}var d="";function e(w){w!=null&&(d+=w)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;if(e(`
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
        `),f.forEach((function(w){b(this,i),e(`
        request.header("`),e(t(w.name)),e('", "'),e(t(w.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),l.length>0&&(e(`
        // Add cookies to the request
        `),l.forEach((function(w){b(this,i),e(`
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
        `);var r=p.filter((function(w){return b(this,i),!Array.isArray(w.value)}).bind(this));e(`
        `);var S=p.filter((function(w){return b(this,i),Array.isArray(w.value)}).bind(this));e(`
        request.field("`),e(t(r.map((function(w){return b(this,i),w.name}).bind(this)).join('", "'))),e(`",
        `),e(t(r.map((function(w){return b(this,i),'encodeURIComponent("'+w.value+'")'}).bind(this)).join(", "))),e(`
        `),S.length>0&&(e(`
        `),S.forEach((function(w){var O=this;b(this,i),e(`
            , "`),e(t(w.name)),e(`[]",
            `),e(t(w.value.map((function(T){return b(this,O),'encodeURIComponent("'+T+'")'}).bind(this)).join(", "))),e(`
        `)}).bind(this)),e(`
        `)),e(`
        );
        `)}else e(`
        request.body("`),e(t(p.map((function(w){return b(this,i),w.value}).bind(this)).join(""))),e(`");
        `);e(`
        `)}e(`
        `)}else A(p)==="object"&&(e(`
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
`),d},"java/okhttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
        `),f.forEach((function(r){b(this,i),e(`
        requestBuilder.addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),l.length>0&&(e(`
        // Add cookies to the request
        `),l.forEach((function(r){b(this,i),e(`
        requestBuilder.addHeader("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),Array.isArray(p)?(e(`
        FormBody.Builder formBodyBuilder = new FormBody.Builder();
        `),p.forEach((function(r){b(this,i),e(`
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
`),d},"java/nethttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
        `),f.forEach((function(r){b(this,i),e(`
        connection.setRequestProperty("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),l.length>0&&(e(`
        // Add cookies to the request
        `),l.forEach((function(r){b(this,i),e(`
        connection.setRequestProperty("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        connection.setDoOutput(true);
        `),Array.isArray(p)?(e(`
        String requestBody = "`),e(t(p.map((function(r){return b(this,i),r.name+"="+encodeURIComponent(r.value,"UTF-8")}).bind(this)).join("&"))),e(`";
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
`),d},"java/asynchttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
        `),f.forEach((function(r){b(this,i),e(`
        requestBuilder.addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),l.length>0&&(e(`
        // Add cookies to the request
        `),l.forEach((function(r){b(this,i),e(`
        requestBuilder.addCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
            // Set up the request body
        `),p.length>0&&(e(`
        `),Array.isArray(p)?(e(`
        StringBuilder bodyBuilder = new StringBuilder();
        `),p.forEach((function(r){b(this,i),e(`
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
`),d},"http/rfc7230":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
// https://www.rfc-editor.org/rfc/rfc7230
`),m==="GET"?(e(`
`),e(t(m)),e(" "),e(t(h)),e(` HTTP/1.1
`)):(e(`
`),e(t(m)),e(" "),e(t(h)),e(` HTTP/1.1
Content-Type: `),e(t(g)),e(`
`)),e(`

`),f.forEach((function(r){b(this,i),e(`
`),e(t(r.name)),e(": "),e(t(r.value)),e(`
`)}).bind(this)),e(`

`),l.forEach((function(r){b(this,i),e(`
Cookie: `),e(t(r.name)),e("="),e(t(r.value)),e(`
`)}).bind(this)),e(`

`),m==="POST"&&p.length>0&&(e(`
`),g==="application/x-www-form-urlencoded"?(e(`
`),e(t(p.map((function(r){return b(this,i),r.name+"="+encodeURIComponent(Array.isArray(r.value)||A(r.value)==="object"?JSON.stringify(r.value):r.value)}).bind(this)).join("&"))),e(`
`)):g==="application/json"?(e(`
`),e(t(JSON.stringify(p))),e(`
`)):g==="multipart/form-data"?(e(`
`),p.forEach((function(r){b(this,i),e(`
--`),e(t("boundary-"+Math.random().toString().substr(2))),e(`
Content-Disposition: form-data; name="`),e(t(r.name)),e(`"

`),e(t(Array.isArray(r.value)||A(r.value)==="object"?JSON.stringify(r.value):r.value)),e(`
`)}).bind(this)),e(`
--`),e(t("boundary-"+Math.random().toString().substr(2))),e(`-->
`)):(e(`
`),p.forEach((function(r){b(this,i),e(`
`),e(t(r.name)),e(": "),e(t(r.value)),e(`
`)}).bind(this)),e(`
`)),e(`
`)),e(`
`),d},"go/http":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`

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
	`),f.forEach((function(l){var r=this;b(this,i),e(`
	`),Array.isArray(l.value)?(e(`
	`),l.value.forEach((function(S){b(this,r),e(`
	form.Add("`),e(t(l.name)),e('[]", fmt.Sprintf("%v", "'),e(t(S)),e(`"))
	`)}).bind(this)),e(`
	`)):A(l.value)==="object"?(e(`
	`),Object.keys(l.value).forEach((function(S){b(this,r),e(`
	form.Add("`),e(t(l.name)),e("["),e(t(S)),e(']", fmt.Sprintf("%v", "'),e(t(l.value[S])),e(`"))
	`)}).bind(this)),e(`
	`)):(e(`
	form.Add("`),e(t(l.name)),e('", fmt.Sprintf("%v", "'),e(t(l.value)),e(`"))
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
	`),g.forEach((function(l){b(this,i),e(`
	req.Header.Set("`),e(t(l.name)),e('", "'),e(t(l.value)),e(`")
	`)}).bind(this)),e(`
	`)),e(`

	`),p.length>0&&(e(`
	// Add cookies to the request
	`),p.forEach((function(l){b(this,i),e(`
	req.AddCookie(&http.Cookie{Name: "`),e(t(l.name)),e('", Value: "'),e(t(l.value)),e(`"})
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
`),d},"go/fasthttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
    `),p.forEach((function(r){b(this,i),e(`
    `),A(r.value)==="object"?e(`
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
    `),f.forEach((function(r){b(this,i),e(`
    req.Header.Add("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
    `)}).bind(this)),e(`
    `)),e(`

    `),l.length>0&&(e(`
    // Add cookies to the request
    `),l.forEach((function(r){b(this,i),e(`
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
`),d},"dart/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
    `),f.forEach((function(r){b(this,i),e(`
        '`),e(t(r.name)),e("' : '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
    };
    final cookies = {
    `),l.forEach((function(r){b(this,i),e(`
        '`),e(t(r.name)),e("' : '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
    };
    final postData = [
    `),p.forEach((function(r){b(this,i),e(`
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
`),d},"dart/dio":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
            `),p.some((function(r){return b(this,i),A(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
            std::string body = R"({`),p.forEach((function(r){b(this,i),A(r.value)==="object"||Array.isArray(r.value)?(e(`
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
        `),f.forEach((function(r){b(this,i),e(`
        "`),e(t(r.name)),e(": "),e(t(r.value)),e(`",
        `)}).bind(this)),e(`
    };
    std::vector<std::string> cookies = {
        `),l.forEach((function(r){b(this,i),e(`
        "`),e(t(r.name)),e("="),e(t(r.value)),e(`",
        `)}).bind(this)),e(`
    };
    std::vector<std::string> postData = {
        `),p.forEach((function(r){b(this,i),e(`
        {
            "name": "`),e(t(r.name)),e(`",
            `),A(r.value)==="object"||Array.isArray(r.value)?(e(`
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
`),d},"csharp/restsharp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
        `),f.forEach((function(r){b(this,i),e(`
        request.AddHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),l.length>0&&(e(`
        // Add cookies to the request
        `),l.forEach((function(r){b(this,i),e(`
        request.AddCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),p.some((function(r){return b(this,i),A(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
        var body = new {
            `),p.filter((function(r){return b(this,i),A(r.value)==="object"||Array.isArray(r.value)}).bind(this)).forEach((function(r){b(this,i),e(`
            `),e(t(r.name)),e(" = "),e(t(JSON.stringify(r.value))),e(`,
            `)}).bind(this)),e(`
        };
        request.AddJsonBody(body);
        `)):(e(`
        request.AddParameter("text/plain", "`),e(t(p.map((function(r){return b(this,i),r.name+"="+Uri.EscapeDataString(r.value)}).bind(this)).join("&"))),e(`", ParameterType.RequestBody);
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
`),d},"csharp/httpclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
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
        `),f.forEach((function(r){b(this,i),e(`
        request.Headers.Add("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),l.length>0&&(e(`
        // Add cookies to the request
        `),l.forEach((function(r){b(this,i),e(`
        var cookie = new System.Net.Cookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e('", "/", "'),e(t(h)),e(`");
        clientHandler.CookieContainer.Add(cookie);
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),p.some((function(r){return b(this,i),A(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
        var formData = new MultipartFormDataContent();
        `),p.forEach((function(r){var S=this;b(this,i),Array.isArray(r.value)?(e(`
                `),r.value.forEach((function(w){b(this,S),e(`
                    formData.Add(new StringContent("`),e(t(w)),e('"), "'),e(t(r.name)),e(`[]");
                `)}).bind(this)),e(`
            `)):A(r.value)==="object"?(e(`
                `),Object.entries(r.value).forEach((function(w){b(this,S);var O=dn(w,2),T=O[0],C=O[1];e(`
                    formData.Add(new StringContent("`),e(t(C)),e('"), "'),e(t(r.name)),e("["),e(t(T)),e(`]");
                `)}).bind(this)),e(`
            `)):(e(`
                formData.Add(new StringContent("`),e(t(r.value)),e('"), "'),e(t(r.name)),e(`");
            `)),e(`
        `)}).bind(this)),e(`
        request.Content = formData;
        `)):(e(`
        var requestBody = new StringContent("`),e(t(p.map((function(r){return b(this,i),r.name+"="+Uri.EscapeDataString(r.value)}).bind(this)).join("&"))),e(`");
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
`),d},"cpp/iostream":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method;n.mimeType;var g=n.headers,f=n.postData,p=n.cookies;return e(`
// Construct the request URL
std::string fullUrl = "`),e(h),e(`";

// Set up the request headers
std::map<std::string, std::string> headers;
`),g.forEach((function(l){b(this,i),e(`
headers["`),e(t(l.name)),e('"] = "'),e(t(l.value)),e(`";
`)}).bind(this)),e(`

// Add cookies to the request
std::string cookieString;
`),p.forEach((function(l){b(this,i),e(`
cookieString += "`),e(t(l.name)),e("="),e(t(l.value)),e(`; ";
`)}).bind(this)),e(`

// Set up the request parameters
std::map<std::string, std::string> parameters;
`),f.forEach((function(l){var r=this;b(this,i),e(`
`),Array.isArray(l.value)?(e(`
`),l.value.forEach((function(S){b(this,r),e(`
std::string paramString = "`),e(t(l.name)),e("[]="),e(t(S)),e(`";
parameters["`),e(t(l.name)),e(`"] += paramString + "&";
`)}).bind(this)),e(`
`)):A(l.value)==="object"?(e(`
`),Object.entries(l.value).forEach((function(S){b(this,r);var w=dn(S,2),O=w[0],T=w[1];e(`
std::string paramString = "`),e(t(l.name)),e("["),e(t(O)),e("]="),e(t(T)),e(`";
parameters["`),e(t(l.name)),e(`"] += paramString + "&";
`)}).bind(this)),e(`
`)):(e(`
std::string paramString = "`),e(t(l.name)),e("="),e(t(l.value)),e(`";
parameters["`),e(t(l.name)),e(`"] += paramString + "&";
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
`),d},"cpp/curl":function(n,t,a,o){var i=this;t=t||function(p){return p==null?"":String(p).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(p){return s[p]||p}var d="";function e(p){p!=null&&(d+=p)}var h=n.url;n.method,n.mimeType;var m=n.headers,g=n.postData,f=n.cookies;return e(`
// Construct the request URL
std::string url = "`),e(h),e(`";

// Set up the request headers
struct curl_slist* headers = NULL;
`),m.forEach((function(p){b(this,i),e(`
std::string headerString = "`),e(t(p.name)),e(": "),e(t(p.value)),e(`";
headers = curl_slist_append(headers, headerString.c_str());
`)}).bind(this)),e(`

// Add cookies to the request
std::string cookieData;
`),f.forEach((function(p){b(this,i),e(`
std::string cookieString = "`),e(t(p.name)),e("="),e(t(p.value)),e(`";
cookieData += cookieString + "; ";
`)}).bind(this)),e(`

// Set up the request parameters
std::string postData;
`),g.forEach((function(p){var l=this;b(this,i),e(`
`),Array.isArray(p.value)?(e(`
`),p.value.forEach((function(r){b(this,l),e(`
std::string paramString = "`),e(t(p.name)),e("[]="),e(t(r)),e(`";
postData += paramString + "&";
`)}).bind(this)),e(`
`)):A(p.value)==="object"?(e(`
`),Object.entries(p.value).forEach((function(r){b(this,l);var S=dn(r,2),w=S[0],O=S[1];e(`
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
`),d},"cpp/arduino":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
// Construct the request URL
String url = "`),e(h),e(`";

// Set up the request headers
String headers;
`),f.forEach((function(r){b(this,i),e(`
    String headerString = "`),e(t(r.name)),e(": "),e(t(r.value)),e(`";
    headers += headerString + "\\r\\n";
`)}).bind(this)),e(`

// Add cookies to the request
`),l.forEach((function(r){b(this,i),e(`
    String cookieString = "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
    // TODO: Add cookieString to the request
`)}).bind(this)),e(`

// Set up the request parameters
String postData;
`),p.forEach((function(r){var S=this;b(this,i),e(`
    `),Array.isArray(r.value)?(e(`
        `),r.value.forEach((function(w){b(this,S),e(`
            String paramString = "`),e(t(r.name)),e("="),e(t(w)),e(`";
            postData += paramString + "&";
        `)}).bind(this)),e(`
    `)):A(r.value)==="object"?(e(`
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
`),d},"clojure/ring-client":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`

(require '[ring.util.http-client :as client])

(defn make-request []
    (let [url "`),e(t(h)),e(`"
        headers {`),f.forEach((function(r){b(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        cookies {`),l.forEach((function(r){b(this,i),e(`
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
    {`),p.forEach((function(r){b(this,i),e(`
        "`),e(t(r.name)),e('" '),Array.isArray(r.value)||A(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(t(r.value)),e('"')),r.isLast||e(",")}).bind(this)),e(`}
    `)),e(`"
    response (client/post url options post-data)]
    `)),e(`
    (println "Response: " (:body response))))

(make-request)
`),d},"clojure/clj-http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
(require '[clj-http.client :as client])

(defn make-request []
    (let [url "`),e(t(h)),e(`"
        headers {`),f.forEach((function(r){b(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        cookies {`),l.forEach((function(r){b(this,i),e(`
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
    {`),p.forEach((function(r){b(this,i),e(`
        "`),e(t(r.name)),e('" '),Array.isArray(r.value)||A(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(t(r.value)),e('"')),r.isLast||e(",")}).bind(this)),e(`}
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
`),d},"c/ghttp":function(n,t,a,o){var i=this;t=t||function(S){return S==null?"":String(S).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(S){return s[S]||S}var d="";function e(S){S!=null&&(d+=S)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;if(e(`
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
`),f.forEach((function(S){b(this,i),e(`
evhttp_add_header(req->output_headers, "`),e(t(S.name)),e('", "'),e(t(S.value)),e(`");
`)}).bind(this)),e(`
`)),e(`

`),l.length>0&&(e(`
// Add cookies to the request
`),l.forEach((function(S){b(this,i),e(`
evhttp_add_header(req->output_headers, "Cookie", "`),e(t(S.name)),e("="),e(t(S.value)),e(`");
`)}).bind(this)),e(`
`)),e(`

`),p.length>0){e(`
// Set request body
`);var r=p.map((function(S){var w=this;return b(this,i),Array.isArray(S.value)?S.value.map((function(O){return b(this,w),S.name+"="+encodeURIComponent(JSON.stringify(O))}).bind(this)).join("&"):A(S.value)==="object"?S.name+"="+encodeURIComponent(JSON.stringify(S.value)):S.name+"="+encodeURIComponent(S.value)}).bind(this)).join("&");e(`
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
`),d},"c/curl":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url,m=n.method,g=n.mimeType;n.headers;var f=n.postData;if(n.cookies,e(`
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
`);var p=f.map((function(l){var r=this;return b(this,i),Array.isArray(l.value)?l.value.map((function(S){return b(this,r),l.name+"="+encodeURIComponent(JSON.stringify(S))}).bind(this)).join("&"):A(l.value)==="object"?l.name+"="+encodeURIComponent(JSON.stringify(l.value)):l.name+"="+encodeURIComponent(l.value)}).bind(this)).join("&");e(`
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
`),d},"brainfuck/brainfuck":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
// Create a new brainfuck program
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.

// Construct the request URL
,[<]>[.>],`),h.split("").forEach((function(r){b(this,i),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}).bind(this)),e(`++++++++[->+++++<]>.

// Set up the request
,[<]>[.>],`),m.split("").forEach((function(r){b(this,i),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}).bind(this)),e(`++++++++[->+++++<]>.

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(r){b(this,i),e(",[<]>[.>],'"),e(t(r.name)),e(": "),e(t(r.value)),e("',")}).bind(this)),e(`
`)),e(`

`),l.length>0&&(e(`
// Add cookies to the request
`),l.forEach((function(r){b(this,i),e(",[<]>[.>],'Set-Cookie: "),e(t(r.name)),e("="),e(t(r.value)),e("',")}).bind(this)),e(`
`)),e(`


`),p.length>0&&(e(`
// Send the request
,[<]>[.>],'`),p.length===1&&p[0].type==="file"?e("multipart/form-data"):e(t(g)),e(`',<

`),p.length===1&&p[0].type==="file"?(e(`
    ,[<]>[.>],'`),e(t(p[0].name)),e("=',<,[>]<[.>],<,[<]>[.>],<,[>]<[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")):(e(`
    `),p.forEach((function(r){b(this,i),e(`
        ,[<]>[.>],'`),e(t(r.name)),e("=',<,[>]<[.>],'"),e(t(r.value)),e("',")}).bind(this)),e(`
    ,`)),e(`

,[<]>[.>],'',<]
`)),e(`

// Handle the response
,[<]>[.>],'Response:',<[<]>[.>],[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-],<

// Handle errors
,[<]>[.>],'Error:',<[<]>[.>],'Oops! Brainfuck couldn't handle this request. Maybe try Python next time?',`),p.length===1&&p[0].type==="file"&&e(" Remember, uploading files in Brainfuck is like trying to fit a square peg in a round hole."),e(`
`),d},"bash/wget":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
wget --verbose --output-document=-
--header="Content-Type: `),e(t(g)),e(`"
`),f.forEach((function(r){b(this,i),e(`
    --header="`),e(t(r.name)),e(": "),e(t(r.value)),e(`"
`)}).bind(this)),e(`
`),l.forEach((function(r){b(this,i),e(`
    --header="Cookie: `),e(t(r.name)),e("="),e(t(r.value)),e(`"
`)}).bind(this)),m==="GET"?(e(`
    "`),e(t(h)),e(`"
`)):m==="POST"?(e(`
    --post-data="`),e(t(p.map((function(r){b(this,i);var S=r.value;return(Array.isArray(S)||A(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    "`),e(t(h)),e(`"
`)):m==="PUT"?(e(`
    --method=PUT
    --body-data="`),e(t(p.map((function(r){b(this,i);var S=r.value;return(Array.isArray(S)||A(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    "`),e(t(h)),e(`"
`)):m==="DELETE"&&(e(`
    --method=DELETE
    "`),e(t(h)),e(`"
`)),e(`
`),d},"bash/httpie":function(n,t,a,o){var i=this;t=t||function(l){return l==null?"":String(l).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(l){return s[l]||l}var d="";function e(l){l!=null&&(d+=l)}var h=n.url;n.method,n.mimeType;var m=n.headers,g=n.postData,f=n.cookies;if(e(`
http --verbose --check --follow
"`),e(t(h)),e(`"
`),e(t(m.map((function(l){return b(this,i),"'"+l.name+":"+l.value+"'"}).bind(this)).join(` 
 `))),e(`
`),f.forEach((function(l){b(this,i),e(`
Cookie:"`),e(t(l.name)),e("="),e(t(l.value)),e(`"
`)}).bind(this)),e(`
`),g.length>0){e(`
`);var p=g.map((function(l){var r=this;return b(this,i),Array.isArray(l.value)?l.value.map((function(S){return b(this,r),"'"+l.name+"="+encodeURIComponent(JSON.stringify(S))+"'"}).bind(this)).join(" "):A(l.value)==="object"?"'"+l.name+"="+encodeURIComponent(JSON.stringify(l.value))+"'":"'"+l.name+"="+encodeURIComponent(l.value)+"'"}).bind(this)).join(` 
 `);e(`
`),e(t(p)),e(`
`)}return e(`
--form
--timeout 120s
--max-redirects 10
`),d},"bash/curl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
curl -X `),e(t(m)),e(`
-H "Content-Type: `),e(t(g)),e(`"
`),f.forEach((function(r){b(this,i),e(`
    -H "`),e(t(r.name)),e(": "),e(t(r.value)),e(`"
`)}).bind(this)),e(`
`),l.forEach((function(r){b(this,i),e(`
    --cookie "`),e(t(r.name)),e("="),e(t(r.value)),e(`"
`)}).bind(this)),p.length>0&&(e(`
    -d `),p.length===1&&p[0].type==="file"?(e(`
        "@`),e(t(p[0].value)),e(`"
    `)):(e(`
        "`),e(t(p.map((function(r){b(this,i);var S=r.value;return(Array.isArray(S)||A(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    `))),e(`
"`),e(t(h)),e(`"
`),d},"r/rcurl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
library(RCurl)

url <- "`),e(t(h)),e(`"
method <- "`),e(t(m)),e(`"
mimeType <- "`),e(t(g)),e(`"

headers <- list(
`),f.forEach((function(r){b(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
)

cookies <- list(
`),l.forEach((function(r){b(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
)

`),m==="GET"?e(`
req <- getURL(url, httpheader = headers, cookie = cookies)
`):(e(`
body <- list(
`),p.forEach((function(r){b(this,i),e(`
"`),e(t(r.name)),e('" = '),Array.isArray(r.value)||A(r.value)==="object"?(e(`
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

`),d},"r/httr":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(c,u)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function u(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,g=n.mimeType,f=n.headers,p=n.postData,l=n.cookies;return e(`
library(httr)

url <- "`),e(t(h)),e(`"

req <- VERB("`),e(t(m)),e(`", url)

`),f.forEach((function(r){b(this,i),e(`
req <- add_headers("`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`", req)
`)}).bind(this)),e(`

`),l.forEach((function(r){b(this,i),e(`
req <- add_headers("Cookie" = "`),e(t(r.name)),e("="),e(t(r.value)),e(`", req)
`)}).bind(this)),e(`

`),p.length>0&&(e(`
body <- list(
`),p.forEach((function(r){b(this,i),e(`
"`),e(t(r.name)),e('" = '),Array.isArray(r.value)||A(r.value)==="object"?(e(`
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
`),d}};function eo(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(t=>{const a=n[t],o=typeof a;o!=="object"&&o!=="function"||Object.isFrozen(a)||eo(a)}),n}class hi{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function no(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ce(n,...t){const a=Object.create(null);for(const o in n)a[o]=n[o];return t.forEach(function(o){for(const i in o)a[i]=o[i]}),a}const mi=n=>!!n.scope;class Fy{constructor(t,a){this.buffer="",this.classPrefix=a.classPrefix,t.walk(this)}addText(t){this.buffer+=no(t)}openNode(t){if(!mi(t))return;const a=((o,{prefix:i})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const s=o.split(".");return[`${i}${s.shift()}`,...s.map((c,u)=>`${c}${"_".repeat(u+1)}`)].join(" ")}return`${i}${o}`})(t.scope,{prefix:this.classPrefix});this.span(a)}closeNode(t){mi(t)&&(this.buffer+="</span>")}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const fi=(n={})=>{const t={children:[]};return Object.assign(t,n),t};class Gr{constructor(){this.rootNode=fi(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const a=fi({scope:t});this.add(a),this.stack.push(a)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,a){return typeof a=="string"?t.addText(a):a.children&&(t.openNode(a),a.children.forEach(o=>this._walk(t,o)),t.closeNode(a)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(a=>typeof a=="string")?t.children=[t.children.join("")]:t.children.forEach(a=>{Gr._collapse(a)}))}}class zy extends Gr{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,a){const o=t.root;a&&(o.scope=`language:${a}`),this.add(o)}toHTML(){return new Fy(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function bn(n){return n?typeof n=="string"?n:n.source:null}function to(n){return Ke("(?=",n,")")}function Ky(n){return Ke("(?:",n,")*")}function Gy(n){return Ke("(?:",n,")?")}function Ke(...n){return n.map(t=>bn(t)).join("")}function Jr(...n){return"("+(function(a){const o=a[a.length-1];return typeof o=="object"&&o.constructor===Object?(a.splice(a.length-1,1),o):{}}(n).capture?"":"?:")+n.map(a=>bn(a)).join("|")+")"}function ro(n){return new RegExp(n.toString()+"|").exec("").length-1}const Jy=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function gr(n,{joinWith:t}){let a=0;return n.map(o=>{a+=1;const i=a;let s=bn(o),c="";for(;s.length>0;){const u=Jy.exec(s);if(!u){c+=s;break}c+=s.substring(0,u.index),s=s.substring(u.index+u[0].length),u[0][0]==="\\"&&u[1]?c+="\\"+String(Number(u[1])+i):(c+=u[0],u[0]==="("&&a++)}return c}).map(o=>`(${o})`).join(t)}const ao="[a-zA-Z]\\w*",Wr="[a-zA-Z_]\\w*",io="\\b\\d+(\\.\\d+)?",so="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",oo="\\b(0b[01]+)",yn={begin:"\\\\[\\s\\S]",relevance:0},Wy={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[yn]},Zy={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[yn]},ht=function(n,t,a={}){const o=Ce({scope:"comment",begin:n,end:t,contains:[]},a);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Jr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:Ke(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},Vy=ht("//","$"),Xy=ht("/\\*","\\*/"),Qy=ht("#","$"),Yy={scope:"number",begin:io,relevance:0},e_={scope:"number",begin:so,relevance:0},n_={scope:"number",begin:oo,relevance:0},t_={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[yn,{begin:/\[/,end:/\]/,relevance:0,contains:[yn]}]},r_={scope:"title",begin:ao,relevance:0},a_={scope:"title",begin:Wr,relevance:0},i_={begin:"\\.\\s*"+Wr,relevance:0};var Rn=Object.freeze({__proto__:null,APOS_STRING_MODE:Wy,BACKSLASH_ESCAPE:yn,BINARY_NUMBER_MODE:n_,BINARY_NUMBER_RE:oo,COMMENT:ht,C_BLOCK_COMMENT_MODE:Xy,C_LINE_COMMENT_MODE:Vy,C_NUMBER_MODE:e_,C_NUMBER_RE:so,END_SAME_AS_BEGIN:function(n){return Object.assign(n,{"on:begin":(t,a)=>{a.data._beginMatch=t[1]},"on:end":(t,a)=>{a.data._beginMatch!==t[1]&&a.ignoreMatch()}})},HASH_COMMENT_MODE:Qy,IDENT_RE:ao,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:i_,NUMBER_MODE:Yy,NUMBER_RE:io,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:Zy,REGEXP_MODE:t_,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(n={})=>{const t=/^#![ ]*\//;return n.binary&&(n.begin=Ke(t,/.*\b/,n.binary,/\b.*/)),Ce({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(a,o)=>{a.index!==0&&o.ignoreMatch()}},n)},TITLE_MODE:r_,UNDERSCORE_IDENT_RE:Wr,UNDERSCORE_TITLE_MODE:a_});function s_(n,t){n.input[n.index-1]==="."&&t.ignoreMatch()}function o_(n,t){n.className!==void 0&&(n.scope=n.className,delete n.className)}function c_(n,t){t&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=s_,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function l_(n,t){Array.isArray(n.illegal)&&(n.illegal=Jr(...n.illegal))}function u_(n,t){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function d_(n,t){n.relevance===void 0&&(n.relevance=1)}const p_=(n,t)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const a=Object.assign({},n);Object.keys(n).forEach(o=>{delete n[o]}),n.keywords=a.keywords,n.begin=Ke(a.beforeMatch,to(a.begin)),n.starts={relevance:0,contains:[Object.assign(a,{endsParent:!0})]},n.relevance=0,delete a.beforeMatch},h_=["of","and","for","in","not","or","if","then","parent","list","value"],m_="keyword";function co(n,t,a=m_){const o=Object.create(null);return typeof n=="string"?i(a,n.split(" ")):Array.isArray(n)?i(a,n):Object.keys(n).forEach(function(s){Object.assign(o,co(n[s],t,s))}),o;function i(s,c){t&&(c=c.map(u=>u.toLowerCase())),c.forEach(function(u){const d=u.split("|");o[d[0]]=[s,f_(d[0],d[1])]})}}function f_(n,t){return t?Number(t):function(a){return h_.includes(a.toLowerCase())}(n)?0:1}const gi={},Pe=n=>{console.error(n)},bi=(n,...t)=>{console.log(`WARN: ${n}`,...t)},Ve=(n,t)=>{gi[`${n}/${t}`]||(console.log(`Deprecated as of ${n}. ${t}`),gi[`${n}/${t}`]=!0)},Ln=new Error;function yi(n,t,{key:a}){let o=0;const i=n[a],s={},c={};for(let u=1;u<=t.length;u++)c[u+o]=i[u],s[u+o]=!0,o+=ro(t[u-1]);n[a]=c,n[a]._emit=s,n[a]._multi=!0}function g_(n){(function(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)})(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),function(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw Pe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ln;if(typeof t.beginScope!="object"||t.beginScope===null)throw Pe("beginScope must be object"),Ln;yi(t,t.begin,{key:"beginScope"}),t.begin=gr(t.begin,{joinWith:""})}}(n),function(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw Pe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ln;if(typeof t.endScope!="object"||t.endScope===null)throw Pe("endScope must be object"),Ln;yi(t,t.end,{key:"endScope"}),t.end=gr(t.end,{joinWith:""})}}(n)}function b_(n){function t(i,s){return new RegExp(bn(i),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(s?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,s]),this.matchAt+=ro(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(c=>c[1]);this.matcherRe=t(gr(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(s);if(!c)return null;const u=c.findIndex((e,h)=>h>0&&e!==void 0),d=this.matchIndexes[u];return c.splice(0,u),Object.assign(c,d)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const c=new a;return this.rules.slice(s).forEach(([u,d])=>c.addRule(u,d)),c.compile(),this.multiRegexes[s]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,c){this.rules.push([s,c]),c.type==="begin"&&this.count++}exec(s){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let u=c.exec(s);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,u=d.exec(s)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=Ce(n.classNameAliases||{}),function i(s,c){const u=s;if(s.isCompiled)return u;[o_,u_,g_,p_].forEach(e=>e(s,c)),n.compilerExtensions.forEach(e=>e(s,c)),s.__beforeBegin=null,[c_,l_,d_].forEach(e=>e(s,c)),s.isCompiled=!0;let d=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),d=s.keywords.$pattern,delete s.keywords.$pattern),d=d||/\w+/,s.keywords&&(s.keywords=co(s.keywords,n.case_insensitive)),u.keywordPatternRe=t(d,!0),c&&(s.begin||(s.begin=/\B|\b/),u.beginRe=t(u.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(u.endRe=t(u.end)),u.terminatorEnd=bn(u.end)||"",s.endsWithParent&&c.terminatorEnd&&(u.terminatorEnd+=(s.end?"|":"")+c.terminatorEnd)),s.illegal&&(u.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(e){return function(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(m){return Ce(h,{variants:null},m)})),h.cachedVariants?h.cachedVariants:lo(h)?Ce(h,{starts:h.starts?Ce(h.starts):null}):Object.isFrozen(h)?Ce(h):h}(e==="self"?s:e)})),s.contains.forEach(function(e){i(e,u)}),s.starts&&i(s.starts,c),u.matcher=function(e){const h=new o;return e.contains.forEach(m=>h.addRule(m.begin,{rule:m,type:"begin"})),e.terminatorEnd&&h.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&h.addRule(e.illegal,{type:"illegal"}),h}(u),u}(n)}function lo(n){return!!n&&(n.endsWithParent||lo(n.starts))}class y_ extends Error{constructor(t,a){super(t),this.name="HTMLInjectionError",this.html=a}}const Qt=no,_i=Ce,vi=Symbol("nomatch"),uo=function(n){const t=Object.create(null),a=Object.create(null),o=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let u={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:zy};function d(O){return u.noHighlightRe.test(O)}function e(O,T,C){let j="",$="";typeof T=="object"?(j=O,C=T.ignoreIllegals,$=T.language):(Ve("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ve("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=O,j=T),C===void 0&&(C=!0);const R={code:j,language:$};w("before:highlight",R);const U=R.result?R.result:h(R.language,R.code,C);return U.code=R.code,w("after:highlight",U),U}function h(O,T,C,j){const $=Object.create(null);function R(){if(!q.keywords)return void V.addText(P);let N=0;q.keywordPatternRe.lastIndex=0;let x=q.keywordPatternRe.exec(P),K="";for(;x;){K+=P.substring(N,x.index);const W=re.case_insensitive?x[0].toLowerCase():x[0],te=(B=W,q.keywords[B]);if(te){const[ve,gt]=te;if(V.addText(K),K="",$[W]=($[W]||0)+1,$[W]<=7&&(Je+=gt),ve.startsWith("_"))K+=x[0];else{const wn=re.classNameAliases[ve]||ve;Y(x[0],wn)}}else K+=x[0];N=q.keywordPatternRe.lastIndex,x=q.keywordPatternRe.exec(P)}var B;K+=P.substring(N),V.addText(K)}function U(){q.subLanguage!=null?function(){if(P==="")return;let N=null;if(typeof q.subLanguage=="string"){if(!t[q.subLanguage])return void V.addText(P);N=h(q.subLanguage,P,!0,I[q.subLanguage]),I[q.subLanguage]=N._top}else N=m(P,q.subLanguage.length?q.subLanguage:null);q.relevance>0&&(Je+=N.relevance),V.__addSublanguage(N._emitter,N.language)}():R(),P=""}function Y(N,x){N!==""&&(V.startScope(x),V.addText(N),V.endScope())}function z(N,x){let K=1;const B=x.length-1;for(;K<=B;){if(!N._emit[K]){K++;continue}const W=re.classNameAliases[N[K]]||N[K],te=x[K];W?Y(te,W):(P=te,R(),P=""),K++}}function ee(N,x){return N.scope&&typeof N.scope=="string"&&V.openNode(re.classNameAliases[N.scope]||N.scope),N.beginScope&&(N.beginScope._wrap?(Y(P,re.classNameAliases[N.beginScope._wrap]||N.beginScope._wrap),P=""):N.beginScope._multi&&(z(N.beginScope,x),P="")),q=Object.create(N,{parent:{value:q}}),q}function le(N,x,K){let B=function(W,te){const ve=W&&W.exec(te);return ve&&ve.index===0}(N.endRe,K);if(B){if(N["on:end"]){const W=new hi(N);N["on:end"](x,W),W.isMatchIgnored&&(B=!1)}if(B){for(;N.endsParent&&N.parent;)N=N.parent;return N}}if(N.endsWithParent)return le(N.parent,x,K)}function ye(N){return q.matcher.regexIndex===0?(P+=N[0],1):(ft=!0,0)}function we(N){const x=N[0],K=T.substring(N.index),B=le(q,N,K);if(!B)return vi;const W=q;q.endScope&&q.endScope._wrap?(U(),Y(x,q.endScope._wrap)):q.endScope&&q.endScope._multi?(U(),z(q.endScope,N)):W.skip?P+=x:(W.returnEnd||W.excludeEnd||(P+=x),U(),W.excludeEnd&&(P=x));do q.scope&&V.closeNode(),q.skip||q.subLanguage||(Je+=q.relevance),q=q.parent;while(q!==B.parent);return B.starts&&ee(B.starts,N),W.returnEnd?0:x.length}let de={};function _e(N,x){const K=x&&x[0];if(P+=N,K==null)return U(),0;if(de.type==="begin"&&x.type==="end"&&de.index===x.index&&K===""){if(P+=T.slice(x.index,x.index+1),!i){const B=new Error(`0 width match regex (${O})`);throw B.languageName=O,B.badRule=de.rule,B}return 1}if(de=x,x.type==="begin")return function(B){const W=B[0],te=B.rule,ve=new hi(te),gt=[te.__beforeBegin,te["on:begin"]];for(const wn of gt)if(wn&&(wn(B,ve),ve.isMatchIgnored))return ye(W);return te.skip?P+=W:(te.excludeBegin&&(P+=W),U(),te.returnBegin||te.excludeBegin||(P=W)),ee(te,B),te.returnBegin?0:W.length}(x);if(x.type==="illegal"&&!C){const B=new Error('Illegal lexeme "'+K+'" for mode "'+(q.scope||"<unnamed>")+'"');throw B.mode=q,B}if(x.type==="end"){const B=we(x);if(B!==vi)return B}if(x.type==="illegal"&&K==="")return 1;if(mt>1e5&&mt>3*x.index)throw new Error("potential infinite loop, way more iterations than matches");return P+=K,K.length}const re=l(O);if(!re)throw Pe(s.replace("{}",O)),new Error('Unknown language: "'+O+'"');const Ge=b_(re);let Te="",q=j||Ge;const I={},V=new u.__emitter(u);(function(){const N=[];for(let x=q;x!==re;x=x.parent)x.scope&&N.unshift(x.scope);N.forEach(x=>V.openNode(x))})();let P="",Je=0,$e=0,mt=0,ft=!1;try{if(re.__emitTokens)re.__emitTokens(T,V);else{for(q.matcher.considerAll();;){mt++,ft?ft=!1:q.matcher.considerAll(),q.matcher.lastIndex=$e;const N=q.matcher.exec(T);if(!N)break;const x=_e(T.substring($e,N.index),N);$e=N.index+x}_e(T.substring($e))}return V.finalize(),Te=V.toHTML(),{language:O,value:Te,relevance:Je,illegal:!1,_emitter:V,_top:q}}catch(N){if(N.message&&N.message.includes("Illegal"))return{language:O,value:Qt(T),illegal:!0,relevance:0,_illegalBy:{message:N.message,index:$e,context:T.slice($e-100,$e+100),mode:N.mode,resultSoFar:Te},_emitter:V};if(i)return{language:O,value:Qt(T),illegal:!1,relevance:0,errorRaised:N,_emitter:V,_top:q};throw N}}function m(O,T){T=T||u.languages||Object.keys(t);const C=function(z){const ee={value:Qt(z),illegal:!1,relevance:0,_top:c,_emitter:new u.__emitter(u)};return ee._emitter.addText(z),ee}(O),j=T.filter(l).filter(S).map(z=>h(z,O,!1));j.unshift(C);const $=j.sort((z,ee)=>{if(z.relevance!==ee.relevance)return ee.relevance-z.relevance;if(z.language&&ee.language){if(l(z.language).supersetOf===ee.language)return 1;if(l(ee.language).supersetOf===z.language)return-1}return 0}),[R,U]=$,Y=R;return Y.secondBest=U,Y}function g(O){let T=null;const C=function(R){let U=R.className+" ";U+=R.parentNode?R.parentNode.className:"";const Y=u.languageDetectRe.exec(U);if(Y){const z=l(Y[1]);return z||(bi(s.replace("{}",Y[1])),bi("Falling back to no-highlight mode for this block.",R)),z?Y[1]:"no-highlight"}return U.split(/\s+/).find(z=>d(z)||l(z))}(O);if(d(C))return;if(w("before:highlightElement",{el:O,language:C}),O.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",O);if(O.children.length>0&&(u.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(O)),u.throwUnescapedHTML))throw new y_("One of your code blocks includes unescaped HTML.",O.innerHTML);T=O;const j=T.textContent,$=C?e(j,{language:C,ignoreIllegals:!0}):m(j);O.innerHTML=$.value,O.dataset.highlighted="yes",function(R,U,Y){const z=U&&a[U]||Y;R.classList.add("hljs"),R.classList.add(`language-${z}`)}(O,C,$.language),O.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(O.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),w("after:highlightElement",{el:O,result:$,text:j})}let f=!1;function p(){if(document.readyState==="loading")return void(f=!0);document.querySelectorAll(u.cssSelector).forEach(g)}function l(O){return O=(O||"").toLowerCase(),t[O]||t[a[O]]}function r(O,{languageName:T}){typeof O=="string"&&(O=[O]),O.forEach(C=>{a[C.toLowerCase()]=T})}function S(O){const T=l(O);return T&&!T.disableAutodetect}function w(O,T){const C=O;o.forEach(function(j){j[C]&&j[C](T)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){f&&p()},!1),Object.assign(n,{highlight:e,highlightAuto:m,highlightAll:p,highlightElement:g,highlightBlock:function(O){return Ve("10.7.0","highlightBlock will be removed entirely in v12.0"),Ve("10.7.0","Please use highlightElement now."),g(O)},configure:function(O){u=_i(u,O)},initHighlighting:()=>{p(),Ve("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){p(),Ve("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(O,T){let C=null;try{C=T(n)}catch(j){if(Pe("Language definition for '{}' could not be registered.".replace("{}",O)),!i)throw j;Pe(j),C=c}C.name||(C.name=O),t[O]=C,C.rawDefinition=T.bind(null,n),C.aliases&&r(C.aliases,{languageName:O})},unregisterLanguage:function(O){delete t[O];for(const T of Object.keys(a))a[T]===O&&delete a[T]},listLanguages:function(){return Object.keys(t)},getLanguage:l,registerAliases:r,autoDetection:S,inherit:_i,addPlugin:function(O){(function(T){T["before:highlightBlock"]&&!T["before:highlightElement"]&&(T["before:highlightElement"]=C=>{T["before:highlightBlock"](Object.assign({block:C.el},C))}),T["after:highlightBlock"]&&!T["after:highlightElement"]&&(T["after:highlightElement"]=C=>{T["after:highlightBlock"](Object.assign({block:C.el},C))})})(O),o.push(O)},removePlugin:function(O){const T=o.indexOf(O);T!==-1&&o.splice(T,1)}}),n.debugMode=function(){i=!1},n.safeMode=function(){i=!0},n.versionString="11.9.0",n.regex={concat:Ke,lookahead:to,either:Jr,optional:Gy,anyNumberOfTimes:Ky};for(const O in Rn)typeof Rn[O]=="object"&&eo(Rn[O]);return Object.assign(n,Rn),n},nn=uo({});nn.newInstance=()=>uo({});var __=nn;nn.HighlightJS=nn,nn.default=nn;var G=lp(__);function po(n){return n?typeof n=="string"?n:n.source:null}function $n(n){return H("(?=",n,")")}function H(...n){return n.map(t=>po(t)).join("")}function oe(...n){return"("+(function(a){const o=a[a.length-1];return typeof o=="object"&&o.constructor===Object?(a.splice(a.length-1,1),o):{}}(n).capture?"":"?:")+n.map(a=>po(a)).join("|")+")"}const Zr=n=>H(/\b/,n,/\w$/.test(n)?/\b/:/\B/),v_=["Protocol","Type"].map(Zr),Si=["init","self"].map(Zr),S_=["Any","Self"],Yt=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Ei=["false","nil","true"],E_=["assignment","associativity","higherThan","left","lowerThan","none","right"],k_=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],ki=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],ho=oe(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),mo=oe(ho,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),er=H(ho,mo,"*"),fo=oe(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Zn=oe(fo,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),Se=H(fo,Zn,"*"),nr=H(/[A-Z]/,Zn,"*"),O_=["attached","autoclosure",H(/convention\(/,oe("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",H(/objc\(/,Se,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],w_=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];var Xe="[0-9](_*[0-9])*",Mn=`\\.(${Xe})`,Dn="[0-9a-fA-F](_*[0-9a-fA-F])*",T_={className:"number",variants:[{begin:`(\\b(${Xe})((${Mn})|\\.)?|(${Mn}))[eE][+-]?(${Xe})[fFdD]?\\b`},{begin:`\\b(${Xe})((${Mn})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Mn})[fFdD]?\\b`},{begin:`\\b(${Xe})[fFdD]\\b`},{begin:`\\b0[xX]((${Dn})\\.?|(${Dn})?\\.(${Dn}))[pP][+-]?(${Xe})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${Dn})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};const Oi="[A-Za-z$_][0-9A-Za-z$_]*",N_=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],A_=["true","false","null","undefined","NaN","Infinity"],go=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],bo=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],yo=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],C_=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],x_=[].concat(yo,go,bo);var Qe="[0-9](_*[0-9])*",jn=`\\.(${Qe})`,In="[0-9a-fA-F](_*[0-9a-fA-F])*",wi={className:"number",variants:[{begin:`(\\b(${Qe})((${jn})|\\.)?|(${jn}))[eE][+-]?(${Qe})[fFdD]?\\b`},{begin:`\\b(${Qe})((${jn})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${jn})[fFdD]?\\b`},{begin:`\\b(${Qe})[fFdD]\\b`},{begin:`\\b0[xX]((${In})\\.?|(${In})?\\.(${In}))[pP][+-]?(${Qe})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${In})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function _o(n,t,a){return a===-1?"":n.replace(t,o=>_o(n,t,a-1))}G.registerLanguage("swift",function(n){const t={match:/\s+/,relevance:0},a=n.COMMENT("/\\*","\\*/",{contains:["self"]}),o=[n.C_LINE_COMMENT_MODE,a],i={match:[/\./,oe(...v_,...Si)],className:{2:"keyword"}},s={match:H(/\./,oe(...Yt)),relevance:0},c=Yt.filter(I=>typeof I=="string").concat(["_|0"]),u={variants:[{className:"keyword",match:oe(...Yt.filter(I=>typeof I!="string").concat(S_).map(Zr),...Si)}]},d={$pattern:oe(/\b\w+/,/#\w+/),keyword:c.concat(k_),literal:Ei},e=[i,s,u],h=[{match:H(/\./,oe(...ki)),relevance:0},{className:"built_in",match:H(/\b/,oe(...ki),/(?=\()/)}],m={match:/->/,relevance:0},g=[m,{className:"operator",relevance:0,variants:[{match:er},{match:`\\.(\\.|${mo})+`}]}],f="([0-9]_*)+",p="([0-9a-fA-F]_*)+",l={className:"number",relevance:0,variants:[{match:`\\b(${f})(\\.(${f}))?([eE][+-]?(${f}))?\\b`},{match:`\\b0x(${p})(\\.(${p}))?([pP][+-]?(${f}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},r=(I="")=>({className:"subst",variants:[{match:H(/\\/,I,/[0\\tnr"']/)},{match:H(/\\/,I,/u\{[0-9a-fA-F]{1,8}\}/)}]}),S=(I="")=>({className:"subst",match:H(/\\/,I,/[\t ]*(?:[\r\n]|\r\n)/)}),w=(I="")=>({className:"subst",label:"interpol",begin:H(/\\/,I,/\(/),end:/\)/}),O=(I="")=>({begin:H(I,/"""/),end:H(/"""/,I),contains:[r(I),S(I),w(I)]}),T=(I="")=>({begin:H(I,/"/),end:H(/"/,I),contains:[r(I),w(I)]}),C={className:"string",variants:[O(),O("#"),O("##"),O("###"),T(),T("#"),T("##"),T("###")]},j=[n.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[n.BACKSLASH_ESCAPE]}],$={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:j},R=I=>{const V=H(I,/\//),P=H(/\//,I);return{begin:V,end:P,contains:[...j,{scope:"comment",begin:`#(?!.*${P})`,end:/$/}]}},U={scope:"regexp",variants:[R("###"),R("##"),R("#"),$]},Y={match:H(/`/,Se,/`/)},z=[Y,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${Zn}+`}],ee=[{match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:w_,contains:[...g,l,C]}]}},{scope:"keyword",match:H(/@/,oe(...O_))},{scope:"meta",match:H(/@/,Se)}],le={match:$n(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:H(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Zn,"+")},{className:"type",match:nr,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:H(/\s+&\s+/,$n(nr)),relevance:0}]},ye={begin:/</,end:/>/,keywords:d,contains:[...o,...e,...ee,m,le]};le.contains.push(ye);const we={begin:/\(/,end:/\)/,relevance:0,keywords:d,contains:["self",{match:H(Se,/\s*:/),keywords:"_|0",relevance:0},...o,U,...e,...h,...g,l,C,...z,...ee,le]},de={begin:/</,end:/>/,keywords:"repeat each",contains:[...o,le]},_e={begin:/\(/,end:/\)/,keywords:d,contains:[{begin:oe($n(H(Se,/\s*:/)),$n(H(Se,/\s+/,Se,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:Se}]},...o,...e,...g,l,C,...ee,le,we],endsParent:!0,illegal:/["']/},re={match:[/(func|macro)/,/\s+/,oe(Y.match,Se,er)],className:{1:"keyword",3:"title.function"},contains:[de,_e,t],illegal:[/\[/,/%/]},Ge={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[de,_e,t],illegal:/\[|%/},Te={match:[/operator/,/\s+/,er],className:{1:"keyword",3:"title"}},q={begin:[/precedencegroup/,/\s+/,nr],className:{1:"keyword",3:"title"},contains:[le],keywords:[...E_,...Ei],end:/}/};for(const I of C.variants){const V=I.contains.find(Je=>Je.label==="interpol");V.keywords=d;const P=[...e,...h,...g,l,C,...z];V.contains=[...P,{begin:/\(/,end:/\)/,contains:["self",...P]}]}return{name:"Swift",keywords:d,contains:[...o,re,Ge,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:d,contains:[n.inherit(n.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...e]},Te,q,{beginKeywords:"import",end:/$/,contains:[...o],relevance:0},U,...e,...h,...g,l,C,...z,...ee,le,we]}}),G.registerLanguage("scala",function(n){const t=n.regex,a={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:/\$\{/,end:/\}/}]},o={className:"string",variants:[{begin:'"""',end:'"""'},{begin:'"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,a]},{className:"string",begin:'[a-z]+"""',end:'"""',contains:[a],relevance:10}]},i={className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},s={className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,relevance:0},c={className:"class",beginKeywords:"class object trait type",end:/[:={\[\n;]/,excludeEnd:!0,contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},s]},u={className:"function",beginKeywords:"def",end:t.lookahead(/[:={\[(\n;]/),contains:[s]};return{name:"Scala",keywords:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"},contains:[{begin:["//>",/\s+/,/using/,/\s+/,/\S+/],beginScope:{1:"comment",3:"keyword",5:"type"},end:/$/,contains:[{className:"string",begin:/\S+/}]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,o,i,u,c,n.C_NUMBER_MODE,{begin:[/^\s*/,"extension",/\s+(?=[[(])/],beginScope:{2:"keyword"}},{begin:[/^\s*/,/end/,/\s+/,/(extension\b)?/],beginScope:{2:"keyword",4:"keyword"}},{match:/\.inline\b/},{begin:/\binline(?=\s)/,keywords:"inline"},{begin:[/\(\s*/,/using/,/\s+(?!\))/],beginScope:{2:"keyword"}},{className:"meta",begin:"@[A-Za-z]+"}]}}),G.registerLanguage("rust",function(n){const t=n.regex,a={className:"title.function.invoke",relevance:0,begin:t.concat(/\b/,/(?!let|for|while|if|else|match\b)/,n.IDENT_RE,t.lookahead(/\s*\(/))},o="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],s=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:n.IDENT_RE+"!?",type:s,keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.COMMENT("/\\*","\\*/",{contains:["self"]}),n.inherit(n.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+o},{begin:"\\b0o([0-7_]+)"+o},{begin:"\\b0x([A-Fa-f0-9_]+)"+o},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+o}],relevance:0},{begin:[/fn/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,n.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:n.IDENT_RE+"::",keywords:{keyword:"Self",built_in:i,type:s}},{className:"punctuation",begin:"->"},a]}}),G.registerLanguage("ruby",function(n){const t=n.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",o=t.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=t.concat(o,/(::\w+)*/),s={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},c={className:"doctag",begin:"@[A-Za-z]+"},u={begin:"#<",end:">"},d=[n.COMMENT("#","$",{contains:[c]}),n.COMMENT("^=begin","^=end",{contains:[c],relevance:10}),n.COMMENT("^__END__",n.MATCH_NOTHING_RE)],e={className:"subst",begin:/#\{/,end:/\}/,keywords:s},h={className:"string",contains:[n.BACKSLASH_ESCAPE,e],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:t.concat(/<<[-~]?'?/,t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[n.BACKSLASH_ESCAPE,e]})]}]},m="[0-9](_?[0-9])*",g={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},f={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:s}]},p=[h,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{match:[/\b(class|module)\s+/,i]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:s},{match:[/(include|extend)\s+/,i],scope:{2:"title.class"},keywords:s},{relevance:0,match:[i,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:o,scope:"title.class"},{match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[f]},{begin:n.IDENT_RE+"::"},{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[h,{begin:a}],relevance:0},g,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:s},{begin:"("+n.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[n.BACKSLASH_ESCAPE,e],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(u,d),relevance:0}].concat(u,d);e.contains=p,f.contains=p;const l=[{begin:/^\s*=>/,starts:{end:"$",contains:p}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:s,contains:p}}];return d.unshift(u),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:s,illegal:/\/\*/,contains:[n.SHEBANG({binary:"ruby"})].concat(l).concat(d).concat(p)}}),G.registerLanguage("python",function(n){const t=n.regex,a=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),o=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],i={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:o,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:i,illegal:/#/},u={begin:/\{\{/,relevance:0},d={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s,u,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s,u,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,u,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,u,c]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},e="[0-9](_?[0-9])*",h=`(\\b(${e}))?\\.(${e})|\\b(${e})\\.`,m=`\\b|${o.join("|")}`,g={className:"number",relevance:0,variants:[{begin:`(\\b(${e})|(${h}))[eE][+-]?(${e})[jJ]?(?=${m})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${m})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${m})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`},{begin:`\\b(${e})[jJ](?=${m})`}]},f={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:i,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},p={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:["self",s,g,d,n.HASH_COMMENT_MODE]}]};return c.contains=[d,g,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:i,illegal:/(<\/|\?)|=>/,contains:[s,g,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},d,f,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[p]},{variants:[{match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,p,d]}]}}),G.registerLanguage("powershell",function(n){const t={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},a={begin:"`[\\s\\S]",relevance:0},o={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},i={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[a,o,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},s={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},c=n.inherit(n.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),u={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},d={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[n.TITLE_MODE]},e={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[o]}]},h={begin:/using\s/,end:/$/,returnBegin:!0,contains:[i,s,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},m={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},g={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(t.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},n.inherit(n.TITLE_MODE,{endsParent:!0})]},f=[g,c,a,n.NUMBER_MODE,i,s,u,o,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/@\B/,relevance:0}],p={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",f,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return g.contains.unshift(p),{name:"PowerShell",aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:t,contains:f.concat(d,e,h,m,p)}}),G.registerLanguage("php",function(n){const t=n.regex,a=/(?![A-Za-z0-9])(?![$])/,o=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,a),i=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,a),s={scope:"variable",match:"\\$+"+o},c={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},u=n.inherit(n.APOS_STRING_MODE,{illegal:null}),d=`[ 	
]`,e={scope:"string",variants:[n.inherit(n.QUOTE_STRING_MODE,{illegal:null,contains:n.QUOTE_STRING_MODE.contains.concat(c)}),u,{begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:n.QUOTE_STRING_MODE.contains.concat(c),"on:begin":($,R)=>{R.data._beginMatch=$[1]||$[2]},"on:end":($,R)=>{R.data._beginMatch!==$[1]&&R.ignoreMatch()}},n.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/})]},h={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},m=["false","null","true"],g=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],f=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],p={keyword:g,literal:($=>{const R=[];return $.forEach(U=>{R.push(U),U.toLowerCase()===U?R.push(U.toUpperCase()):R.push(U.toLowerCase())}),R})(m),built_in:f},l=$=>$.map(R=>R.replace(/\|\d+$/,"")),r={variants:[{match:[/new/,t.concat(d,"+"),t.concat("(?!",l(f).join("\\b|"),"\\b)"),i],scope:{1:"keyword",4:"title.class"}}]},S=t.concat(o,"\\b(?!\\()"),w={variants:[{match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),S],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[i,t.concat(/::/,t.lookahead(/(?!class\b)/)),S],scope:{1:"title.class",3:"variable.constant"}},{match:[i,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[i,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},O={scope:"attr",match:t.concat(o,t.lookahead(":"),t.lookahead(/(?!::)/))},T={relevance:0,begin:/\(/,end:/\)/,keywords:p,contains:[O,s,w,n.C_BLOCK_COMMENT_MODE,e,h,r]},C={relevance:0,match:[/\b/,t.concat("(?!fn\\b|function\\b|",l(g).join("\\b|"),"|",l(f).join("\\b|"),"\\b)"),o,t.concat(d,"*"),t.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[T]};T.contains.push(C);const j=[O,w,n.C_BLOCK_COMMENT_MODE,e,h,r];return{case_insensitive:!1,keywords:p,contains:[{begin:t.concat(/#\[\s*/,i),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:m,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:m,keyword:["new","array"]},contains:["self",...j]},...j,{scope:"meta",match:i}]},n.HASH_COMMENT_MODE,n.COMMENT("//","$"),n.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:n.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},s,C,w,{match:[/const/,/\s/,o],scope:{1:"keyword",3:"variable.constant"}},r,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},n.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:p,contains:["self",s,w,n.C_BLOCK_COMMENT_MODE,e,h]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[n.inherit(n.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},n.UNDERSCORE_TITLE_MODE]},e,h]}}),G.registerLanguage("perl",function(n){const t=n.regex,a=/[dualxmsipngr]{0,12}/,o={$pattern:/[\w.]+/,keyword:["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"].join(" ")},i={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:o},s={begin:/->\{/,end:/\}/},c={variants:[{begin:/\$\d/},{begin:t.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},u=[n.BACKSLASH_ESCAPE,i,c],d=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],e=(g,f,p="\\1")=>{const l=p==="\\1"?p:t.concat(p,f);return t.concat(t.concat("(?:",g,")"),f,/(?:\\.|[^\\\/])*?/,l,/(?:\\.|[^\\\/])*?/,p,a)},h=(g,f,p)=>t.concat(t.concat("(?:",g,")"),f,/(?:\\.|[^\\\/])*?/,p,a),m=[c,n.HASH_COMMENT_MODE,n.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),s,{className:"string",contains:u,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+n.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[n.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:e("s|tr|y",t.either(...d,{capture:!0}))},{begin:e("s|tr|y","\\(","\\)")},{begin:e("s|tr|y","\\[","\\]")},{begin:e("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:h("(?:m|qr)?",/\//,/\//)},{begin:h("m|qr",t.either(...d,{capture:!0}),/\1/)},{begin:h("m|qr",/\(/,/\)/)},{begin:h("m|qr",/\[/,/\]/)},{begin:h("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[n.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return i.contains=m,s.contains=m,{name:"Perl",aliases:["pl","pm"],keywords:o,contains:m}}),G.registerLanguage("ocaml",function(n){return{name:"OCaml",aliases:["ml"],keywords:{$pattern:"[a-z_]\\w*!?",keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},illegal:/\/\/|>>/,contains:[{className:"literal",begin:"\\[(\\|\\|)?\\]|\\(\\)",relevance:0},n.COMMENT("\\(\\*","\\*\\)",{contains:["self"]}),{className:"symbol",begin:"'[A-Za-z_](?!')[\\w']*"},{className:"type",begin:"`[A-Z][\\w']*"},{className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},{begin:"[a-z_]\\w*'[\\w']*",relevance:0},n.inherit(n.APOS_STRING_MODE,{className:"string",relevance:0}),n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),{className:"number",begin:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",relevance:0},{begin:/->/}]}}),G.registerLanguage("objectivec",function(n){const t=/[a-zA-Z@][a-zA-Z0-9_]*/,a={$pattern:t,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{"variable.language":["this","super"],$pattern:t,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},illegal:"</",contains:[{className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,n.C_NUMBER_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+a.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:a,contains:[n.UNDERSCORE_TITLE_MODE]},{begin:"\\."+n.UNDERSCORE_IDENT_RE,relevance:0}]}}),G.registerLanguage("lua",function(n){const t="\\[=*\\[",a="\\]=*\\]",o={begin:t,end:a,contains:["self"]},i=[n.COMMENT("--(?!"+t+")","$"),n.COMMENT("--"+t,a,{contains:[o],relevance:10})];return{name:"Lua",keywords:{$pattern:n.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[n.inherit(n.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:i}].concat(i)},n.C_NUMBER_MODE,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{className:"string",begin:t,end:a,contains:[o],relevance:5}])}}),G.registerLanguage("kotlin",function(n){const t={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"@"},o={className:"subst",begin:/\$\{/,end:/\}/,contains:[n.C_NUMBER_MODE]},i={className:"variable",begin:"\\$"+n.UNDERSCORE_IDENT_RE},s={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[i,o]},{begin:"'",end:"'",illegal:/\n/,contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[n.BACKSLASH_ESCAPE,i,o]}]};o.contains.push(s);const c={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+n.UNDERSCORE_IDENT_RE+")?"},u={className:"meta",begin:"@"+n.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[n.inherit(s,{className:"string"}),"self"]}]},d=T_,e=n.COMMENT("/\\*","\\*/",{contains:[n.C_BLOCK_COMMENT_MODE]}),h={variants:[{className:"type",begin:n.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},m=h;return m.variants[1].contains=[h],h.variants[1].contains=[m],{name:"Kotlin",aliases:["kt","kts"],keywords:t,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),n.C_LINE_COMMENT_MODE,e,{className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},a,c,u,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:t,relevance:5,contains:[{begin:n.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[n.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[h,n.C_LINE_COMMENT_MODE,e],relevance:0},n.C_LINE_COMMENT_MODE,e,c,u,s,n.C_NUMBER_MODE]},e]},{begin:[/class|interface|trait/,/\s+/,n.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},n.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},c,u]},s,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},d]}}),G.registerLanguage("javascript",function(n){const t=n.regex,a=Oi,o="<>",i="</>",s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(ye,we)=>{const de=ye[0].length+ye.index,_e=ye.input[de];if(_e==="<"||_e===",")return void we.ignoreMatch();let re;_e===">"&&(((Te,{after:q})=>{const I="</"+Te[0].slice(1);return Te.input.indexOf(I,q)!==-1})(ye,{after:de})||we.ignoreMatch());const Ge=ye.input.substring(de);((re=Ge.match(/^\s*=/))||(re=Ge.match(/^\s+extends\s+/))&&re.index===0)&&we.ignoreMatch()}},c={$pattern:Oi,keyword:N_,literal:A_,built_in:x_,"variable.language":C_},u="[0-9](_?[0-9])*",d=`\\.(${u})`,e="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${e})((${d})|\\.)?|(${d}))[eE][+-]?(${u})\\b`},{begin:`\\b(${e})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"css"}},p={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"graphql"}},l={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,m]},r={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},S=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,g,f,p,l,{match:/\$\d+/},h];m.contains=S.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(S)});const w=[].concat(r,m.contains),O=w.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(w)}]),T={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:O},C={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},j={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...go,...bo]}},$={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[T],illegal:/%/},R={match:t.concat(/\b/,(U=[...yo,"super","import"],t.concat("(?!",U.join("|"),")")),a,t.lookahead(/\(/)),className:"title.function",relevance:0};var U;const Y={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},z={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},T]},ee="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",le={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ee)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[T]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:O,CLASS_REFERENCE:j},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,g,f,p,l,r,{match:/\$\d+/},h,j,{className:"attr",begin:a+t.lookahead(":"),relevance:0},le,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[r,n.REGEXP_MODE,{className:"function",begin:ee,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:O}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o,end:i},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},$,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[T,n.inherit(n.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Y,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[T]},R,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},C,z,{match:/\$[(.]/}]}}),G.registerLanguage("java",function(n){const t=n.regex,a="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",o=a+_o("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),i={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},s={className:"meta",begin:"@"+a,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},c={className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[n.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:i,illegal:/<\/|#/,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[n.BACKSLASH_ESCAPE]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[t.concat(/(?!else)/,a),/\s+/,a,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},contains:[c,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+o+"\\s+)",n.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:i,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[s,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,wi,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},wi,s]}}),G.registerLanguage("http",function(n){const t="HTTP/([32]|1\\.[01])",a={className:"attribute",begin:n.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},o=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+t+" \\d{3})",end:/$/,contains:[{className:"meta",begin:t},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:o}},{begin:"(?=^[A-Z]+ (.*?) "+t+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:t},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:o}},n.inherit(a,{relevance:0})]}}),G.registerLanguage("go",function(n){const t={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:t,illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"string",variants:[n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:n.C_NUMBER_RE+"[i]",relevance:1},n.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[n.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,illegal:/["']/}]}]}}),G.registerLanguage("dart",function(n){const t={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"},o={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:'"""',end:'"""',contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:"'",end:"'",illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:'"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,t,a]}]};a.contains=[n.C_NUMBER_MODE,o];const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],s=i.map(c=>`${c}?`);return{name:"Dart",keywords:{keyword:["abstract","as","assert","async","await","base","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","interface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","sealed","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","when","while","with","yield"],built_in:i.concat(s).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},contains:[o,n.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),n.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",end:"$",relevance:0}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},n.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}),G.registerLanguage("csharp",function(n){const t={keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],literal:["default","false","null","true"]},a=n.inherit(n.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),o={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},i={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},s=n.inherit(i,{illegal:/\n/}),c={className:"subst",begin:/\{/,end:/\}/,keywords:t},u=n.inherit(c,{illegal:/\n/}),d={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},n.BACKSLASH_ESCAPE,u]},e={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},c]},h=n.inherit(e,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},u]});c.contains=[e,d,i,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,o,n.C_BLOCK_COMMENT_MODE],u.contains=[h,d,s,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,o,n.inherit(n.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const m={variants:[e,d,i,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},g={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]},f=n.IDENT_RE+"(<"+n.IDENT_RE+"(\\s*,\\s*"+n.IDENT_RE+")*>)?(\\[\\])?",p={begin:"@"+n.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:t,illegal:/::/,contains:[n.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},m,o,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},a,g,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,g,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+f+"\\s+)+"+n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:t,contains:[{beginKeywords:["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"].join(" "),relevance:0},{begin:n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[n.TITLE_MODE,g],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,relevance:0,contains:[m,o,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},p]}}),G.registerLanguage("cpp",function(n){const t=n.regex,a=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),o="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="(?!struct)("+o+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",c={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},u={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},d={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(u,{className:"string"}),{className:"string",begin:/<.*?>/},a,n.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},m=t.optional(i)+n.IDENT_RE+"\\s*\\(",g={type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]},f={className:"function.dispatch",relevance:0,keywords:{_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]},begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},p=[f,e,c,a,n.C_BLOCK_COMMENT_MODE,d,u],l={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:g,contains:p.concat([{begin:/\(/,end:/\)/,keywords:g,contains:p.concat(["self"]),relevance:0}]),relevance:0},r={className:"function",begin:"("+s+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:g,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:o,keywords:g,relevance:0},{begin:m,returnBegin:!0,contains:[h],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[u,d]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[a,n.C_BLOCK_COMMENT_MODE,u,d,c,{begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:["self",a,n.C_BLOCK_COMMENT_MODE,u,d,c]}]},c,a,n.C_BLOCK_COMMENT_MODE,e]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:g,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(l,r,f,p,[e,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:g,contains:["self",c]},{begin:n.IDENT_RE+"::",keywords:g},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}),G.registerLanguage("clojure",function(n){const t="a-zA-Z_\\-!.?+*=<>&'",a="[#]?["+t+"]["+t+"0-9/;:$#]*",o="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",i={$pattern:a,built_in:o+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},s={begin:a,relevance:0},c={scope:"number",relevance:0,variants:[{match:/[-+]?0[xX][0-9a-fA-F]+N?/},{match:/[-+]?0[0-7]+N?/},{match:/[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/},{match:/[-+]?[0-9]+\/[0-9]+N?/},{match:/[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/},{match:/[-+]?([1-9][0-9]*|0)N?/}]},u={scope:"character",variants:[{match:/\\o[0-3]?[0-7]{1,2}/},{match:/\\u[0-9a-fA-F]{4}/},{match:/\\(newline|space|tab|formfeed|backspace|return)/},{match:/\\\S/,relevance:0}]},d={scope:"regex",begin:/#"/,end:/"/,contains:[n.BACKSLASH_ESCAPE]},e=n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),h={scope:"punctuation",match:/,/,relevance:0},m=n.COMMENT(";","$",{relevance:0}),g={className:"literal",begin:/\b(true|false|nil)\b/},f={begin:"\\[|(#::?"+a+")?\\{",end:"[\\]\\}]",relevance:0},p={className:"symbol",begin:"[:]{1,2}"+a},l={begin:"\\(",end:"\\)"},r={endsWithParent:!0,relevance:0},S={keywords:i,className:"name",begin:a,relevance:0,starts:r},w=[h,l,u,d,e,m,p,f,c,g,s],O={beginKeywords:o,keywords:{$pattern:a,keyword:o},end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:a,relevance:0,excludeEnd:!0,endsParent:!0}].concat(w)};return l.contains=[O,S,r],r.contains=w,f.contains=w,{name:"Clojure",aliases:["clj","edn"],illegal:/\S/,contains:[h,l,u,d,e,m,p,f,c,g]}}),G.registerLanguage("c",function(n){const t=n.regex,a=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),o="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="("+o+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",c={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},u={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},d={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(u,{className:"string"}),{className:"string",begin:/<.*?>/},a,n.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},m=t.optional(i)+n.IDENT_RE+"\\s*\\(",g={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},f=[e,c,a,n.C_BLOCK_COMMENT_MODE,d,u],p={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:g,contains:f.concat([{begin:/\(/,end:/\)/,keywords:g,contains:f.concat(["self"]),relevance:0}]),relevance:0},l={begin:"("+s+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:g,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:o,keywords:g,relevance:0},{begin:m,returnBegin:!0,contains:[n.inherit(h,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:[a,n.C_BLOCK_COMMENT_MODE,u,d,c,{begin:/\(/,end:/\)/,keywords:g,relevance:0,contains:["self",a,n.C_BLOCK_COMMENT_MODE,u,d,c]}]},c,a,n.C_BLOCK_COMMENT_MODE,e]};return{name:"C",aliases:["h"],keywords:g,disableAutodetect:!0,illegal:"</",contains:[].concat(p,l,f,[e,{begin:n.IDENT_RE+"::",keywords:g},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},n.TITLE_MODE]}]),exports:{preprocessor:e,strings:u,keywords:g}}}),G.registerLanguage("brainfuck",function(n){const t={className:"literal",begin:/[+-]+/,relevance:0};return{name:"Brainfuck",aliases:["bf"],contains:[n.COMMENT(/[^\[\]\.,\+\-<> \r\n]/,/[\[\]\.,\+\-<> \r\n]/,{contains:[{match:/[ ]+[^\[\]\.,\+\-<> \r\n]/,relevance:0}],returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",begin:"[\\.,]",relevance:0},{begin:/(?=\+\+|--)/,contains:[t]},t]}}),G.registerLanguage("bash",function(n){const t=n.regex,a={},o={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[a]}]};Object.assign(a,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},o]});const i={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,a,i]};i.contains.push(c);const u={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,a]},d=n.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),e={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[d,n.SHEBANG(),e,u,n.HASH_COMMENT_MODE,s,{match:/(\/[a-z._-]+)+/},c,{match:/\\"/},{className:"string",begin:/'/,end:/'/},{match:/\\'/},a]}}),G.registerLanguage("r",function(n){const t=n.regex,a=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,o=t.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),i=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,s=t.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:a,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[n.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:a},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),n.HASH_COMMENT_MODE,{scope:"string",contains:[n.BACKSLASH_ESCAPE],variants:[n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[i,o]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,o]},{scope:{1:"punctuation",2:"number"},match:[s,o]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,o]}]},{scope:{3:"operator"},match:[a,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:i},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:s},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}});var q_=function(){function n(){(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),Me(this,"_baseUrl",""),Me(this,"_url",""),Me(this,"_method","GET"),Me(this,"_params",[]),Me(this,"_mimeType","application/x-www-form-urlencoded"),Me(this,"_lang","javascript"),Me(this,"_library","xmlhttprequest")}var t,a;return t=n,(a=[{key:"library",value:function(o){return o=o.toLowerCase(),this._library=o,this}},{key:"lang",value:function(o){var i;if(o=o.toLowerCase(),!this.config()[o])throw new Error("bad lang: "+o);return this._lang=o,this._library=(i=this.config()[o][0])!==null&&i!==void 0?i:null,this}},{key:"mimeType",value:function(o){return this._mimeType=o,this}},{key:"params",value:function(o){return this._params=o,this}},{key:"method",value:function(o){return this._method=o,this}},{key:"url",value:function(o){return o=o.startsWith("/")?o.substring(1):o,this._url=o,this}},{key:"baseUrl",value:function(o){return o.endsWith("/")||(o+="/"),this._baseUrl=o,this}},{key:"convertParams",value:function(){var o,i=this,s=this._baseUrl;s.endsWith("/")||(s+="/");var c=this._url;c.startsWith("/")&&(c=c.substring(1)),this._params.filter((function(m){return b(this,i),m.in==="path"}).bind(this)).forEach((function(m){b(this,i),c=c.replace("{".concat(m.name,"}"),m.value)}).bind(this));var u=this._params.filter((function(m){return b(this,i),m.in==="query"}).bind(this)),d=(function(m,g){var f=this;return b(this,i),Array.isArray(g)?g.map((function(p){return b(this,f),d(m,p)}).bind(this)).join("&"):A(g)==="object"?Object.entries(g).map((function(p){b(this,f);var l=dn(p,2),r=l[0],S=l[1];return d("".concat(m,"[").concat(r,"]"),S)}).bind(this)).join("&"):"".concat(m,"=").concat(g)}).bind(this),e=JSON.parse(JSON.stringify(u)).map((function(m){return b(this,i),d(m.name,m.value)}).bind(this)).join("&");e!==""&&(c+="?"+e),c=s+c;var h=(o=s.match(/^https?:\/\/([^\/]+)/i)[1])!==null&&o!==void 0?o:"";return{method:this._method,mimeType:this._mimeType,url:c,host:h,headers:this._params.filter((function(m){return b(this,i),m.in==="headers"}).bind(this)),postData:this._params.filter((function(m){return b(this,i),m.in==="postData"}).bind(this)),cookies:this._params.filter((function(m){return b(this,i),m.in==="cookie"}).bind(this))}}},{key:"cleanup",value:function(o){return o.replace(/&amp;/gim,"&").replace(/&#39;/gim,"'").replace(/&#34;/gim,'"').replace(/\n\n+/gim,`
`).replace(/^\n/gim,"")}},{key:"generate",value:function(){var o,i=(o=pi[this._lang+"/"+this._library])!==null&&o!==void 0?o:null;if(!i)throw new Error("bad library");var s=this.convertParams();return this.cleanup(i(s))}},{key:"generateHighlight",value:function(){return G.highlight(this.generate(),{language:this._lang,ignoreIllegals:!0}).value}},{key:"makeHighlightCode",value:function(o){return G.highlight(o,{language:this._lang,ignoreIllegals:!0}).value}},{key:"config",value:function(){var o=this;return Object.keys(pi).reduce((function(i,s){b(this,o);var c=dn(s.split("/"),2),u=c[0],d=c[1];return i[u]||(i[u]=[]),i[u].push(d),i}).bind(this),{})}}])&&cp(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),n}();const he=new q_,R_=he.config(),L_={name:"CodeSimples",components:{CustomDropdownWithSubMenu:Xi},props:{baseUrl:{type:String,required:!1,default:""},url:{type:String,required:!0},method:{type:String,required:!1,default:"GET"},params:{type:Array,required:!1,default:()=>[]},mimeType:{type:String,required:!1,default:"application/x-www-form-urlencoded"}},data(){return{snippetIndex:"javascript",snippetLibraryIndex:"xmlhttprequest",code:"",html:"",showPopup:!1,onPopupIndex:null,vals:[]}},computed:{config(){return R_}},watch:{},mounted(){this.genCode()},methods:{copyToClipboard(n){this.$openapidoc.copyToClipboard(this.code,n)},onLangClick(n,t=null){this.snippetIndex=n,this.snippetLibraryIndex=t,this.genCode()},getAbsoluteUrl(){const n=this.baseUrl;if(!n)return window.location.origin;if(/^https?:\/\//i.test(n))return n;const t=window.location.origin;return new URL(n,t).href},genCode(){const n=this.method.toUpperCase();he.baseUrl(this.getAbsoluteUrl()),he.url(this.url),he.method(n),he.params(JSON.parse(JSON.stringify(this.params))),he.mimeType(this.mimeType),he.lang(this.snippetIndex),he.library(this.snippetLibraryIndex),this.code=he.generate(),this.html=he.generateHighlight()}}},$_={class:"oapi-code-simple"},M_={class:"oapi-code-panel"},D_={class:"oapi-code-panel__body"},j_=["innerHTML"];function I_(n,t,a,o,i,s){const c=Xi;return y(),_("div",$_,[F(c,{items:s.config,onSelect:s.onLangClick},null,8,["items","onSelect"]),v("div",M_,[v("div",D_,[v("button",{class:"oapi-code-panel__btn",onClick:t[0]||(t[0]=No((...u)=>s.copyToClipboard&&s.copyToClipboard(...u),["stop","prevent"]))}," Copy "),v("pre",{class:Ee(["language line-numbers",`language-${i.snippetIndex}`])},[v("code",{class:"language",innerHTML:i.html},null,8,j_)],2)])])])}const vo=J(L_,[["render",I_]]),P_={components:{OpenApiExampleObject:tn},props:{examples:{type:Object,required:!0},currentLocale:{type:String,required:!0}}},U_={class:"openapi-examples"},B_={id:"examples"};function H_(n,t,a,o,i,s){const c=tn;return y(),_("div",U_,[v("h2",B_,E(n.$openapidoc.getLocaleText("openapidoc.examples")),1),(y(!0),_(L,null,M(a.examples,(u,d)=>(y(),_("div",{key:d,class:"oapi-schema-block"},[F(c,{"current-locale":a.currentLocale,example:u,name:d,"name-tag":"h3"},null,8,["current-locale","example","name"])]))),128))])}const So=J(P_,[["render",H_],["__scopeId","data-v-f147433f"]]),F_={name:"OpenApiCallbacks",components:{OpenApiResponses:et,OpenApiRequestBody:Yn,OpenApiParameters:Qn},props:{callbacks:{type:Object,default:()=>({})},currentLocale:{type:String,default:""},components:{type:Object,default:()=>({})}}},z_={key:0,class:"oapi-callbacks"},K_={id:"callbacks"},G_={class:"oapi-callbacks__list"},J_=["id"],W_=["innerHTML"],Z_={class:"oapi-callback-op__name"},V_=["innerHTML"];function X_(n,t,a,o,i,s){const c=Qn,u=Yn,d=et;return a.callbacks?(y(),_("div",z_,[v("h2",K_,E(n.$openapidoc.getLocaleText("openapidoc.callbacks")),1),v("div",G_,[(y(!0),_(L,null,M(a.callbacks,(e,h)=>(y(),_("div",{key:h},[(y(!0),_(L,null,M(e,(m,g)=>(y(),_("div",{key:g,class:"oapi-callback-method"},[v("h3",{id:g+"-"+h,class:"oapi-callback-method__name"},[v("code",null,E(g),1),D(" - "+E(h),1)],8,J_),m.description?(y(),_("div",{key:0,class:"oapi-callback-method__description",innerHTML:m.description},null,8,W_)):k("",!0),(y(!0),_(L,null,M(m,(f,p)=>(y(),_("div",{key:p,class:"oapi-callback-op"},[v("div",Z_,[v("span",{class:Ee(["oapi-method-tag",`oapi-method-tag--${p}`])},E(p),3)]),f.description?(y(),_("div",{key:0,class:"oapi-callback-op__description",innerHTML:f.description},null,8,V_)):k("",!0),f.parameters?(y(),Z(c,{key:1,parameters:f.parameters,"current-locale":a.currentLocale,components:a.components},null,8,["parameters","current-locale","components"])):k("",!0),f.requestBody?(y(),Z(u,{key:2,"is-cb":"","h-prefix":`${h}-${p}-${g}`,"request-body":f.requestBody,"current-locale":a.currentLocale,components:a.components},null,8,["h-prefix","request-body","current-locale","components"])):k("",!0),f.responses?(y(),Z(d,{key:3,"is-cb":"","h-prefix":`${h}-${p}-${g}`,responses:f.responses,"current-locale":a.currentLocale,components:a.components},null,8,["h-prefix","responses","current-locale","components"])):k("",!0)]))),128))]))),128))]))),128))])])):k("",!0)}const Eo=J(F_,[["render",X_]]),Q_={name:"OpenApiRoute",components:{OpenApiCallbacks:Eo,OpenApiResponses:et,OpenApiRequestBody:Yn,OpenApiSecurity:Zi,OpenApiParameters:Qn,OpenApiExamples:So,CodeSimples:vo,OpenApiServer:Ji,OpenApiRouteHeader:Gi},props:{route:{type:[Object,Array],required:!0},subParams:{required:!1},path_doc:{type:String,required:!0},file:{type:String,required:!0},currentLocale:{type:String,required:!0},url:{type:String,required:!1,default:""},server:{type:String,required:!1,default:""},method:{type:String,required:!1,default:"GET"},components:{type:Object,default:()=>({})}},data(){return{lang:"javascript",mimeType:"application/x-www-form-urlencoded",params:[]}},computed:{resolvedSchema(){return mn(this.route,[],this.$openapidocRef.definitions,this.$openapidocRef.components)},routeInfo(){return this.$openapidoc.getRouteInfo(this.file,this.url,this.method)}},mounted(){this.genParamsToSimple()},methods:{genParamsToSimple(){if(this.params=[],this.resolvedSchema.requestBody&&Object.keys(this.resolvedSchema.requestBody).length){const t=Object.keys(this.resolvedSchema.requestBody)[0],a=this.resolvedSchema.requestBody[t];if(a&&Object.keys(a).length){this.mimeType=Object.keys(a)[0];const o=a[this.mimeType];if(o.schema){const i=o.schema.properties;for(const s in i){const c=i[s]||{};let u="";if(c.example&&(u=c.example??""),u===""&&c.type&&(u=this.convertStringFormatToMd(c.type,s)),c.type==="array")c.items.type?c.items.type==="array"||c.items.type==="object"?u=[this.handleNestedArrayOrObject(c,s)]:u=[this.convertStringFormatToMd(c.items.type,s)]:c.items.enum?u=[c.items.enum[0]]:(c.items.properties||c.items.additionalProperties)&&(u=[this.handleNestedArrayOrObject(c.items,s)]),this.params.push({in:"postData",name:s,value:JSON.parse(JSON.stringify(u))});else if(c.type==="object"){if(c.additionalProperties&&c.additionalProperties.type)u={[s]:this.convertStringFormatToMd(c.additionalProperties.type,s)};else if(c.properties){u={};for(const d in c.properties){const e=c.properties[d]||{};e.type?u[d]=this.convertStringFormatToMd(e.type,d):(e.properties||e.additionalProperties)&&(u[d]=this.handleNestedArrayOrObject(e,s))}}this.params.push({in:"postData",name:s,value:JSON.parse(JSON.stringify(u))})}else this.params.push({in:"postData",name:s,value:u.toString()})}}}}for(const t in this.resolvedSchema.parameters){const a=this.resolvedSchema.parameters[t],o=a.name??"",i=a.in??"";let s="";a.schema?s=a.schema.default??"":s=a.default??"",s===""&&a.type&&(s=this.convertStringFormatToMd(a.type,o)),s===""&&a.schema&&a.schema.type&&(s=this.convertStringFormatToMd(a.schema.type,o)),s===""&&a.enum&&(s=a.enum[0]??""),this.params.push({in:i,name:o,value:s.toString()})}const n=this.$openapidoc.getParams();for(const t in n){const a=n[t];a.value===""&&a.type&&(a.value=this.convertStringFormatToMd(a.type,a.name)),this.params.push({in:a.pos,name:a.name,value:JSON.parse(JSON.stringify(a.value))})}},handleNestedArrayOrObject(n,t){if(n.type==="array"){if(n.items.type)return n.items.type==="array"?[this.handleNestedArrayOrObject(n.items,t)]:n.items.type==="object"?[this.handleNestedObject(n.items)]:[this.convertStringFormatToMd(n.items.type)];if(n.items.enum)return[n.items.enum[0]];if(n.items.properties||n.items.additionalProperties)return[this.handleNestedObject(n.items)]}else if(n.type==="object")return this.handleNestedObject(n);return""},handleNestedObject(n){if(n.additionalProperties&&n.additionalProperties.type)return{[propertyName]:this.convertStringFormatToMd(n.additionalProperties.type,propertyName)};if(n.properties){const t={};for(const a in n.properties){const o=n.properties[a]||{};o.type?t[a]=this.convertStringFormatToMd(o.type,a):(o.properties||o.additionalProperties)&&(t[a]=this.handleNestedArrayOrObject(o,a))}return t}return""},convertStringFormatToMd(n,t){switch(n){case"date":return"YYYY-MM-DD";case"date-time":return"YYYY-MM-DDTHH:MM:SSZ";case"email":return"example@example.com";case"hostname":return"example.com";case"ipv4":return"192.0.2.0";case"ipv6":return"2001:0db8:85a3:0000:0000:8a2e:0370:7334";case"uri":return"https://example.com";case"integer":return"1";case"number":return"1";case"string":return`{${t}}`;default:return n}}}},Y_={class:"oapi-route"},ev={key:0,class:"oapi-route__servers"},nv={id:"servers"},tv={key:1},rv={id:"info"},av=["innerHTML"],iv={id:"code_simple",class:"text-lg font-bold mb-2"};function sv(n,t,a,o,i,s){const c=Gi,u=Ji,d=Zi,e=Qn,h=Yn,m=et,g=vo,f=xo,p=So,l=Eo;return y(),_("div",Y_,[F(c,{path:a.url,method:a.method,server:a.server,tags:s.resolvedSchema.tags,summary:n.$openapidocRef.tr(a.route,"summary",a.currentLocale),description:n.$openapidocRef.tr(a.route,"description",a.currentLocale),deprecated:a.route.deprecated,"current-locale":a.currentLocale},null,8,["path","method","server","tags","summary","description","deprecated","current-locale"]),s.resolvedSchema.servers?(y(),_("div",ev,[v("h2",nv,E(n.$openapidoc.getLocaleText("openapidoc.servers")),1),(y(!0),_(L,null,M(s.resolvedSchema.servers,r=>(y(),Z(u,{key:r.url,server:r,"current-locale":a.currentLocale},null,8,["server","current-locale"]))),128))])):k("",!0),s.routeInfo?(y(),_("div",tv,[v("h2",rv,E(n.$openapidoc.getLocaleText("openapidoc.info")),1),v("div",{class:"oapi-doc-info",innerHTML:s.routeInfo},null,8,av)])):k("",!0),s.resolvedSchema.security?(y(),Z(d,{key:2,security:s.resolvedSchema.security,path_doc:a.path_doc,file:a.file,"current-locale":a.currentLocale},null,8,["security","path_doc","file","current-locale"])):k("",!0),s.resolvedSchema.parameters?(y(),Z(e,{key:3,parameters:s.resolvedSchema.parameters,"current-locale":a.currentLocale,components:a.components},null,8,["parameters","current-locale","components"])):k("",!0),a.subParams?(y(),Z(e,{key:4,parameters:a.subParams,"current-locale":a.currentLocale,components:a.components,title:"Global params"},null,8,["parameters","current-locale","components"])):k("",!0),s.resolvedSchema.requestBody?(y(),Z(h,{key:5,"request-body":s.resolvedSchema.requestBody,"current-locale":a.currentLocale,components:a.components},null,8,["request-body","current-locale","components"])):k("",!0),s.resolvedSchema.responses?(y(),Z(m,{key:6,responses:s.resolvedSchema.responses,"current-locale":a.currentLocale,components:a.components},null,8,["responses","current-locale","components"])):k("",!0),a.url?(y(),Z(f,{key:7},{default:ce(()=>[v("h2",iv,E(n.$openapidoc.getLocaleText("openapidoc.code_simple"))+": ",1),F(g,{url:a.url,"base-url":a.server,method:a.method,"mime-type":i.mimeType,params:i.params},null,8,["url","base-url","method","mime-type","params"])]),_:1})):k("",!0),s.resolvedSchema.examples?(y(),Z(p,{key:8,examples:s.resolvedSchema.examples,"current-locale":a.currentLocale},null,8,["examples","current-locale"])):k("",!0),s.resolvedSchema.callbacks?(y(),Z(l,{key:9,callbacks:s.resolvedSchema.callbacks,server:a.server,"current-locale":a.currentLocale,components:a.components,simples:n.simples,params:i.params,file:a.file,path_doc:a.path_doc},null,8,["callbacks","server","current-locale","components","simples","params","file","path_doc"])):k("",!0)])}const $v=J(Q_,[["render",sv]]),ov={name:"NotFound"},cv={class:"oapi-not-found"},lv=v("h1",{class:""},"404",-1),uv=v("p",{class:"oapi-not-found__msg"},"Not found",-1),dv=[lv,uv];function pv(n,t,a,o,i,s){return y(),_("div",cv,dv)}const Mv=J(ov,[["render",pv]]),hv={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search(n){this.searchInPaths(n)}},mounted(){var n;this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch),this.search=(((n=this.$route.query)==null?void 0:n.query)??"").toString(),this.highlightText()},beforeUnmount(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{highlightText(n=null){if(!this.search||this.search==="")return;if(!n){const o=document.querySelectorAll(".highlighted");for(let i=0;i<o.length;i++)o[i].classList.remove("highlighted");n=document.querySelector(".content-container")}if(!n)return;const t=this.search.replace("#",""),a=new RegExp(t,"gi");if(n.nodeType===Node.TEXT_NODE){if(n.textContent.match(a)){document.createElement("span").classList.add("highlighted");const s=n.textContent.replace(a,u=>`<span class="highlighted">${u}</span>`),c=document.createRange().createContextualFragment(s);n.parentNode.replaceChild(c,n)}}else if(n.nodeType===Node.ELEMENT_NODE){const o=n.childNodes;for(let i=0;i<o.length;i++)this.highlightText(o[i])}},toggleSearch(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?(document.body.style.overflow="hidden",setTimeout(()=>{this.$refs.input.focus()},100)):(document.body.style.overflow="auto",this.highlightText())},searchInPaths(n){if(n=n.toLowerCase(),this.list=[],n==="")return;const t=this.$openapidocRef.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),a=this.$openapidocRef.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),o=a.indexOf(n);if(o!==-1){const i=Math.max(o-50,0),s=Math.min(o+n.length+50,a.length);let c="..."+a.substring(i,s)+"...";c=c.replace(n,"<b>"+n+"</b>"),this.list.push({path:"info",title:t,description:c,route:{name:`openapi-${this.path}-${this.file}${this.$openapidoc.I18nLocaleSuffix()}`,params:{type:"info"},query:{query:n}}})}for(const i in this.doc.paths){if(i==="parameters")continue;const s=this.doc.paths[i];for(const c in s){const u=s[c];let d=i;d.startsWith("/")&&(d=d.substring(1)),d.endsWith("/")&&(d=d.substring(-1)),d=d.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_");const e=this.$openapidocRef.tr(u,"summary",this.currentLocale).toLowerCase(),h=this.$openapidocRef.tr(u,"description",this.currentLocale).toLowerCase();let m=null,g=e.indexOf(n);if(g!==-1){const f=h.substring(0,100)+"...";m={path:i,title:e.replace(n,"<b>"+n+"</b>"),description:f+"...",route:{name:`openapi-${this.path}-${this.file}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{type:d,mathod:c},query:{query:n}}}}if(g=h.indexOf(n),g!==-1){const f=Math.max(g-50,0),p=Math.min(g+n.length+50,h.length);let l="..."+h.substring(f,p)+"...";l=l.replace(n,"<b>"+n+"</b>"),m?m.description=l:m={path:i,title:e,description:l,route:{name:`openapi-${this.path}-${this.file}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{type:d,mathod:c},query:{query:n}}}}m&&this.list.push(m)}}}}},mv={class:"oapi-search"},fv={key:0,class:"oapi-search-overlay"},gv={class:"oapi-search__wrapper"},bv={class:"oapi-search-box"},yv={class:"oapi-search-box__inner"},_v={class:"oapi-search-item"},vv=["innerHTML"],Sv=["textContent"],Ev=["innerHTML"],kv=v("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Ov=[kv];function wv(n,t,a,o,i,s){const c=Ni;return y(),_("div",mv,[i.isSearchOpen?(y(),_("div",fv,[v("div",gv,[v("div",bv,[v("div",yv,[Ao(v("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>i.search=u),ref:"input",type:"text",class:"oapi-search-box__input",placeholder:"Search..."},null,512),[[Co,i.search]]),(y(!0),_(L,null,M(i.list,(u,d)=>(y(),_("div",{key:d,class:"oapi-search-box__list",onClick:t[1]||(t[1]=(...e)=>s.toggleSearch&&s.toggleSearch(...e))},[F(c,{to:u.route,"active-class":""},{default:ce(()=>[v("div",_v,[v("h5",{class:"oapi-search-item__title",innerHTML:u.title},null,8,vv),v("p",{class:"oapi-search-item__path",textContent:E(u.path)},null,8,Sv),v("p",{class:"oapi-search-item__text",innerHTML:u.description},null,8,Ev)])]),_:2},1032,["to"])]))),128))])])]),v("button",{class:"oapi-search__close",onClick:t[2]||(t[2]=(...u)=>s.toggleSearch&&s.toggleSearch(...u))},Ov)])):k("",!0)])}const Dv=J(hv,[["render",wv]]);export{xv as _,Rv as a,Lv as b,$v as c,Dv as d,Mv as e};
