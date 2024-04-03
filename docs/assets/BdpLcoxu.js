import{_ as W,o as b,c as _,a as v,t as E,S as O,F as L,i as M,d as D,m as V,w as le,T as Xn,U as Pi,V as we,b as F,W as Bo,X as Ho,p as Fo,e as zo,Y as Ko,Z as Jo,$ as Go}from"./qEcSDZDN.js";import{_ as Ui}from"./DwPOiaZ-.js";import{_ as Bi,a as Hi}from"./BykPuthJ.js";import{_ as Wo}from"./BXvlvvPw.js";const Zo={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{getUrl(n){let t=n.url;const a=n.variables;for(const o in a){const s=a[o].default;if(s){const l=`{${o}}`;t=t.replace(l,s)}}return t}}},Vo={class:"oapi-info-head"},Xo={key:0,class:"oapi-info-head__version"},Qo=["innerHTML"],Yo={key:0},ec={id:"servers"},nc=["href"],tc={key:0},rc={key:1,id:"external-documentation"},ac={key:2},ic=["href"];function sc(n,t,a,o,i,s){return b(),_("div",null,[v("div",Vo,[v("h1",null,E(n.$openapidocRef.tr(a.info,"title",a.currentLocale)),1),a.info.version?(b(),_("span",Xo,E(a.info.version),1)):O("",!0)]),v("div",{class:"oapi-info-block",innerHTML:n.$openapidocRef.tr(a.info,"description",a.currentLocale)},null,8,Qo),a.servers?(b(),_("div",Yo,[v("h2",ec,E(n.$openapidoc.getLocaleText("openapidoc.servers")),1),v("ul",null,[(b(!0),_(L,null,M(a.servers,l=>(b(),_("li",{key:l.url},[v("a",{href:s.getUrl(l)},E(s.getUrl(l)),9,nc),D(" - "),l.description?(b(),_("span",tc,E(l.description),1)):O("",!0)]))),128))])])):O("",!0),a.info.externalDocs?(b(),_("h2",rc,E(n.$openapidoc.getLocaleText("openapidoc.external_documentation")),1)):O("",!0),a.info.externalDocs?(b(),_("ul",ac,[v("li",null,[v("a",{href:a.info.externalDocs.url},E(n.$openapidocRef.tr(a.info.externalDocs,"description",a.currentLocale)),9,ic)])])):O("",!0)])}const AS=W(Zo,[["render",sc]]),oc={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},computed:{formattedIn(){if(!this.securityScheme.in)return null;const n=this.securityScheme.in.toString();return n.charAt(0).toUpperCase()+n.slice(1)}}},cc={class:"oapi-sec-scheme"},lc={class:"oapi-sec-scheme__type"},uc={key:0,class:"oapi-sec-scheme__param"},dc={key:1,class:"oapi-sec-scheme__param"},pc={key:2,class:"oapi-sec-scheme__param"},hc={key:3,class:"oapi-sec-scheme__param"},mc={key:4,class:"oapi-sec-scheme__flows"},fc={key:0,class:"oapi-sec-scheme__param"},gc={key:1,class:"oapi-sec-scheme__param"},yc={key:2,class:"oapi-sec-scheme__param"},bc={key:3,class:"oapi-sec-scheme-scopes"},_c={class:"oapi-sec-scheme-scopes__title"},vc={class:"oapi-sec-scheme-scopes__list"},Sc={key:0,class:"oapi-sec-scheme-scope__descr"};function Ec(n,t,a,o,i,s){return b(),_("div",cc,[v("div",lc,[v("span",null,E(a.securityScheme.type),1)]),a.securityScheme.type==="http"&&a.securityScheme.scheme?(b(),_("div",uc,[D(E(n.$openapidoc.getLocaleText("openapidoc.scheme"))+": ",1),v("code",null,E(a.securityScheme.scheme),1)])):O("",!0),a.securityScheme.type==="http"&&a.securityScheme.scheme==="bearer"&&a.securityScheme.bearerFormat?(b(),_("div",dc,[D(E(n.$openapidoc.getLocaleText("openapidoc.bearer_format"))+": ",1),v("code",null,E(a.securityScheme.bearerFormat),1)])):O("",!0),a.securityScheme.type==="apiKey"&&a.securityScheme.in?(b(),_("div",pc,[D(E(n.$openapidoc.getLocaleText("openapidoc.in"))+": ",1),v("code",null,E(a.securityScheme.in),1)])):O("",!0),a.securityScheme.type==="apiKey"&&s.formattedIn&&a.securityScheme.name?(b(),_("div",hc,[D(E(s.formattedIn)+" name: ",1),v("code",null,E(a.securityScheme.name),1)])):O("",!0),a.securityScheme.type==="oauth2"&&a.securityScheme.flows?(b(),_("div",mc,[(b(!0),_(L,null,M(a.securityScheme.flows,(l,c)=>(b(),_("div",{key:c,class:"oapi-sec-scheme__flow"},[v("h4",null,E(c),1),l.authorizationUrl?(b(),_("div",fc,[D(E(n.$openapidoc.getLocaleText("openapidoc.authorization_url"))+": ",1),v("code",null,E(l.authorizationUrl),1)])):O("",!0),l.tokenUrl?(b(),_("div",gc,[D(E(n.$openapidoc.getLocaleText("openapidoc.token_url"))+": ",1),v("code",null,E(l.tokenUrl),1)])):O("",!0),l.refreshUrl?(b(),_("div",yc,[D(E(n.$openapidoc.getLocaleText("openapidoc.refresh_url"))+": ",1),v("code",null,E(l.refreshUrl),1)])):O("",!0),l.scopes&&Object.keys(l.scopes).length?(b(),_("div",bc,[v("span",_c,E(n.$openapidoc.getLocaleText("openapidoc.scopes"))+":",1),v("ul",vc,[(b(!0),_(L,null,M(l.scopes,(d,e)=>(b(),_("li",{key:e,class:"oapi-sec-scheme-scope"},[v("code",null,E(e),1),d?(b(),_("div",Sc,E(d),1)):O("",!0)]))),128))])])):O("",!0)]))),128))])):O("",!0)])}const Fi=W(oc,[["render",Ec]]),Oc={name:"OpenApiExampleObject",props:{lite:Boolean,name:{type:String,default:""},nameTag:{type:String,default:"h3"},example:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}},computed:{valueFormatted(){return this.example.value?JSON.stringify(this.example.value,null,2):null}}},kc={class:"oapi-example-obj"},wc=["innerHTML"],Tc=["innerHTML"],Ac={key:3,class:"oapi-example-obj__value"},xc=["innerHTML"];function Nc(n,t,a,o,i,s){return b(),_("div",kc,[a.name?(b(),V(Xn(a.nameTag),{key:0,class:"oapi-example-obj__name"},{default:le(()=>[D(E(a.name),1)]),_:1})):O("",!0),a.example.summary?(b(),_("div",{key:1,class:"oapi-example-obj__summary",innerHTML:n.$openapidocRef.tr(a.example,"summary",a.currentLocale)},null,8,wc)):O("",!0),a.example.description?(b(),_("div",{key:2,class:"oapi-example-obj__description",innerHTML:n.$openapidocRef.tr(a.example,"description",a.currentLocale)},null,8,Tc)):O("",!0),s.valueFormatted?(b(),_("div",Ac,[v("pre",{innerHTML:s.valueFormatted},null,8,xc)])):O("",!0)])}const on=W(Oc,[["render",Nc]]),Cc={name:"OpenApiSchemaSubObject",props:{title:{type:String,default:""},currentLocale:{type:String,required:!0}},data(){return{}},methods:{}},qc={class:"oapi-schema-sub-obj"},Rc={class:"oapi-schema-sub-obj__head"},Lc={class:"oapi-schema-sub-obj__title"},$c={class:"oapi-schema-sub-obj__content"};function Mc(n,t,a,o,i,s){return b(),_("div",qc,[v("div",Rc,[v("div",Lc,E(a.title),1)]),v("div",null,[v("ul",$c,[Pi(n.$slots,"default")])])])}const zi=W(Cc,[["render",Mc]]);function dn(n){return n<10?"0"+n:n}function Dc(n,t,a,o){var i=a?"":n.getUTCFullYear()+"-"+dn(n.getUTCMonth()+1)+"-"+dn(n.getUTCDate());return t||(i+="T"+dn(n.getUTCHours())+":"+dn(n.getUTCMinutes())+":"+dn(n.getUTCSeconds())+(o?"."+(n.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5):"")+"Z"),i}function Ki(n,t){return t>n.length?n.repeat(Math.trunc(t/n.length)+1).substring(0,t):n}function Qn(...n){const t=a=>a&&typeof a=="object";return n.reduce((a,o)=>(Object.keys(o||{}).forEach(i=>{const s=a[i],l=o[i];t(s)&&t(l)?a[i]=Qn(s,l):a[i]=l}),a),Array.isArray(n[n.length-1])?[]:{})}function jc(n){var t=Ic(n),a=Pc(t,t,t,t),o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{var s=a()*16%16|0;return(i=="x"?s:s&3|8).toString(16)});return o}function Tt(n){return{value:n==="object"?{}:n==="array"?[]:void 0}}function qe(n,t){t&&n.pop()}function Ic(n){var t=0;if(n.length==0)return t;for(var a=0;a<n.length;a++){var o=n.charCodeAt(a);t=(t<<5)-t+o,t=t&t}return t}function Pc(n,t,a,o){return function(){n|=0,t|=0,a|=0,o|=0;var i=n-(t<<27|t>>>5)|0;return n=t^(a<<17|a>>>15),t=a+o|0,a=o+i|0,o=n+i|0,(o>>>0)/4294967296}}function Uc(n,t,a,o,i){let s=me(n,a,o);const l=[];for(let c of t){const{type:d,readOnly:e,writeOnly:h,value:m}=me({type:s.type,...c},a,o,i);s.type&&d&&d!==s.type&&(console.warn("allOf: schemas with different types can't be merged"),s.type=d),s.type=s.type||d,s.readOnly=s.readOnly||e,s.writeOnly=s.writeOnly||h,m!=null&&l.push(m)}if(s.type==="object")return s.value=Qn(s.value||{},...l.filter(c=>typeof c=="object")),s;{s.type==="array"&&(a.quiet||console.warn('OpenAPI Sampler: found allOf with "array" type. Result may be incorrect'));const c=l[l.length-1];return s.value=c??s.value,s}}const oa={multipleOf:"number",maximum:"number",exclusiveMaximum:"number",minimum:"number",exclusiveMinimum:"number",maxLength:"string",minLength:"string",pattern:"string",items:"array",maxItems:"array",minItems:"array",uniqueItems:"array",additionalItems:"array",maxProperties:"object",minProperties:"object",required:"object",additionalProperties:"object",properties:"object",patternProperties:"object",dependencies:"object"};function Rn(n){if(n.type!==void 0)return Array.isArray(n.type)?n.type.length===0?null:n.type[0]:n.type;const t=Object.keys(oa);for(var a=0;a<t.length;a++){let o=t[a],i=oa[o];if(n[o]!==void 0)return i}return null}function Bc(n,t,a){if(Object.prototype.toString.call(t)!=="[object Function]")throw new TypeError("iterator must be a function");if(Array.isArray(n))for(let o=0;o<n.length;o++)t.call(a,n[o],o,n);else for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.call(a,n[o],o,n)}function J(n,t,a){if(arguments.length===3)return J.set(n,t,a);if(arguments.length===2)return J.get(n,t);const o=J.bind(J,n);for(const i in J)J.hasOwnProperty(i)&&(o[i]=J[i].bind(o,n));return o}J.get=function(t,a){const o=Array.isArray(a)?a:J.parse(a);for(let i=0;i<o.length;++i){const s=o[i];if(!(typeof t=="object"&&s in t))throw new Error("Invalid reference token: "+s);t=t[s]}return t};J.set=function(t,a,o){const i=Array.isArray(a)?a:J.parse(a);let s=i[0];if(i.length===0)throw Error("Can not set the root object");for(let l=0;l<i.length-1;++l){let c=i[l];typeof c!="string"&&typeof c!="number"&&(c=String(c)),!(c==="__proto__"||c==="constructor"||c==="prototype")&&(c==="-"&&Array.isArray(t)&&(c=t.length),s=i[l+1],c in t||(s.toString().match(/^(\d+|-)$/)?t[c]=[]:t[c]={}),t=t[c])}return s==="-"&&Array.isArray(t)&&(s=t.length),t[s]=o,this};J.remove=function(n,t){const a=Array.isArray(t)?t:J.parse(t);let o=a[a.length-1];if(o===void 0)throw new Error('Invalid JSON pointer for remove: "'+t+'"');const i=J.get(n,a.slice(0,-1));if(Array.isArray(i)){const s=+o;if(o===""&&isNaN(s))throw new Error('Invalid array index: "'+o+'"');Array.prototype.splice.call(i,s,1)}else delete i[o]};J.dict=function(t,a){const o={};return J.walk(t,function(i,s){o[s]=i},a),o};J.walk=function(t,a,o){const i=[];o=o||function(s){const l=Object.prototype.toString.call(s);return l==="[object Object]"||l==="[object Array]"},function s(l){Bc(l,function(c,d){i.push(String(d)),o(c)?s(c):a(c,J.compile(i)),i.pop()})}(t)};J.has=function(t,a){try{J.get(t,a)}catch{return!1}return!0};J.escape=function(t){return t.toString().replace(/~/g,"~0").replace(/\//g,"~1")};J.unescape=function(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")};J.parse=function(t){if(t==="")return[];if(t.charAt(0)!=="/")throw new Error("Invalid JSON pointer: "+t);return t.substring(1).split(/\//).map(J.unescape)};J.compile=function(t){return t.length===0?"":"/"+t.map(J.escape).join("/")};let Jn={},he=[];function Hc(){Jn={},he=[]}function Ji(n){var a;let t;return n.const!==void 0?t=n.const:n.examples!==void 0&&((a=n.examples)!=null&&a.length)?t=n.examples[0]:n.enum!==void 0&&n.enum.length?t=n.enum[0]:n.default!==void 0&&(t=n.default),t}function ca(n){const t=Ji(n);if(t!==void 0)return{value:t,readOnly:n.readOnly,writeOnly:n.writeOnly,type:null}}function me(n,t,a,o){if(o){if(he.includes(n))return Tt(Rn(n));he.push(n)}if(o&&o.depth>t.maxSampleDepth)return qe(he,o),Tt(Rn(n));if(n.$ref){if(!a)throw new Error("Your schema contains $ref. You must provide full specification in the third parameter.");let c=decodeURIComponent(n.$ref);c.startsWith("#")&&(c=c.substring(1));const d=J.get(a,c);let e;if(Jn[c]!==!0)Jn[c]=!0,e=me(d,t,a,o),Jn[c]=!1;else{const h=Rn(d);e=Tt(h)}return qe(he,o),e}if(n.example!==void 0)return qe(he,o),{value:n.example,readOnly:n.readOnly,writeOnly:n.writeOnly,type:n.type};if(n.allOf!==void 0)return qe(he,o),ca(n)||Uc({...n,allOf:void 0},n.allOf,t,a,o);if(n.oneOf&&n.oneOf.length){n.anyOf&&(t.quiet||console.warn("oneOf and anyOf are not supported on the same level. Skipping anyOf")),qe(he,o);const c=Object.assign({readOnly:n.readOnly,writeOnly:n.writeOnly},n.oneOf[0]);return l(n,c)}if(n.anyOf&&n.anyOf.length){qe(he,o);const c=Object.assign({readOnly:n.readOnly,writeOnly:n.writeOnly},n.anyOf[0]);return l(n,c)}if(n.if&&n.then){qe(he,o);const{if:c,then:d,...e}=n;return me(Qn(e,c,d),t,a,o)}let i=Ji(n),s=null;if(i===void 0){i=null,s=n.type,Array.isArray(s)&&n.type.length>0&&(s=n.type[0]),s||(s=Rn(n));let c=Zi[s];c&&(i=c(n,t,a,o))}return qe(he,o),{value:i,readOnly:n.readOnly,writeOnly:n.writeOnly,type:s};function l(c,d){const e=ca(c);if(e!==void 0)return e;const h=me({...c,oneOf:void 0,anyOf:void 0},t,a,o),m=me(d,t,a,o);if(typeof h.value=="object"&&typeof m.value=="object"){const f=Qn(h.value,m.value);return{...m,value:f}}return m}}function Fc(n,t={},a,o){const i=o&&o.depth||1;let s=Math.min(n.maxItems!=null?n.maxItems:1/0,n.minItems||1);const l=n.prefixItems||n.items||n.contains;Array.isArray(l)&&(s=Math.max(s,l.length));let c=e=>Array.isArray(l)?l[e]||{}:l||{},d=[];if(!l)return d;for(let e=0;e<s;e++){let h=c(e),{value:m}=me(h,t,a,{depth:i+1});d.push(m)}return d}function zc(n){return!0}function Gi(n){let t=0;if(n.type==="number"&&(n.format==="float"||n.format==="double")&&(t=.1),typeof n.exclusiveMinimum=="boolean"||typeof n.exclusiveMaximum=="boolean"){if(n.maximum&&n.minimum)return t=n.exclusiveMinimum?Math.floor(n.minimum)+1:n.minimum,(n.exclusiveMaximum&&t>=n.maximum||!n.exclusiveMaximum&&t>n.maximum)&&(t=(n.maximum+n.minimum)/2),t;if(n.minimum)return n.exclusiveMinimum?Math.floor(n.minimum)+1:n.minimum;if(n.maximum)return n.exclusiveMaximum?n.maximum>0?0:Math.floor(n.maximum)-1:n.maximum>0?0:n.maximum}else{if(n.minimum)return n.minimum;n.exclusiveMinimum?(t=Math.floor(n.exclusiveMinimum)+1,t===n.exclusiveMaximum&&(t=(t+Math.floor(n.exclusiveMaximum)-1)/2)):n.exclusiveMaximum?t=Math.floor(n.exclusiveMaximum)-1:n.maximum&&(t=n.maximum)}return t}function Kc(n,t={},a,o){let i={};const s=o&&o.depth||1;if(n&&typeof n.properties=="object"){let c=(Array.isArray(n.required)?n.required:[]).reduce((d,e)=>(d[e]=!0,d),{});Object.keys(n.properties).forEach(d=>{if(t.skipNonRequired&&!c.hasOwnProperty(d))return;const e=me(n.properties[d],t,a,{propertyName:d,depth:s+1});t.skipReadOnly&&e.readOnly||t.skipWriteOnly&&e.writeOnly||(i[d]=e.value)})}if(n&&typeof n.additionalProperties=="object"){const l=n.additionalProperties["x-additionalPropertiesName"]||"property";i[`${String(l)}1`]=me(n.additionalProperties,t,a,{depth:s+1}).value,i[`${String(l)}2`]=me(n.additionalProperties,t,a,{depth:s+1}).value}return i}const Jc="qwerty!@#$%^123456";function Gc(){return"user@example.com"}function Wc(){return"пошта@укр.нет"}function Zc(n,t){let a="pa$$word";return n>a.length&&(a+="_",a+=Ki(Jc,n-a.length).substring(0,n-a.length)),a}function Ar({min:n,max:t,omitTime:a,omitDate:o}){let i=Dc(new Date("2019-08-24T14:15:22.123Z"),a,o,!1);return i.length<n&&console.warn(`Using minLength = ${n} is incorrect with format "date-time"`),t&&i.length>t&&console.warn(`Using maxLength = ${t} is incorrect with format "date-time"`),i}function Vc(n,t){return Ar({min:n,max:t,omitTime:!1,omitDate:!1})}function Xc(n,t){return Ar({min:n,max:t,omitTime:!0,omitDate:!1})}function Qc(n,t){return Ar({min:n,max:t,omitTime:!1,omitDate:!0}).slice(1)}function Wi(n,t){let a=Ki("string",n);return t&&a.length>t&&(a=a.substring(0,t)),a}function Yc(){return"192.168.0.1"}function el(){return"2001:0db8:85a3:0000:0000:8a2e:0370:7334"}function nl(){return"example.com"}function tl(){return"приклад.укр"}function rl(){return"http://example.com"}function al(){return"../dictionary"}function il(){return"http://example.com/{endpoint}"}function sl(){return"http://example.com/entity/1"}function ol(){return"/entity/1"}function cl(n,t,a){return jc(a||"id")}function ll(){return"/json/pointer"}function ul(){return"1/relative/json/pointer"}function dl(){return"/regex/"}const pl={email:Gc,"idn-email":Wc,password:Zc,"date-time":Vc,date:Xc,time:Qc,ipv4:Yc,ipv6:el,hostname:nl,"idn-hostname":tl,iri:sl,"iri-reference":ol,uri:rl,"uri-reference":al,"uri-template":il,uuid:cl,default:Wi,"json-pointer":ll,"relative-json-pointer":ul,regex:dl};function hl(n,t,a,o){let i=n.format||"default",s=pl[i]||Wi,l=o&&o.propertyName;return s(n.minLength|0,n.maxLength,l)}var Zi={};const ml={skipReadOnly:!1,maxSampleDepth:15};function fl(n,t,a){let o=Object.assign({},ml,t);return Hc(),me(n,o,a).value}function cn(n,t){Zi[n]=t}cn("array",Fc);cn("boolean",zc);cn("integer",Gi);cn("number",Gi);cn("object",Kc);cn("string",hl);const gl={name:"OpenApiSchemaProperty",components:{OpenApiSchemaSubObject:zi,OpenApiExpandIcon:Bi},props:{name:{type:String,default:""},required:{type:Boolean},schema:{type:Object,required:!0},noLines:{type:Boolean},hideTitleDescription:{type:Boolean},open:{type:Boolean},currentLocale:{type:String,required:!0}},data(){return{isOpen:!1}},computed:{resolvedSchema(){return this.schema},isPlainArray(){if(!this.resolvedSchema)return!1;const n=["string","integer","number","boolean"];return this.resolvedSchema.type==="array"&&this.resolvedSchema.items&&n.includes(this.resolvedSchema.items.type)},isObject(){return this.resolvedSchema?this.resolvedSchema.type==="object":!1},isArray(){return this.resolvedSchema?this.resolvedSchema.type==="array":!1},isOneOf(){return!!(this.resolvedSchema&&this.resolvedSchema.oneOf)},isAnyOf(){return!!(this.resolvedSchema&&this.resolvedSchema.anyOf)},hasProperties(){return!!Object.keys(this.resolvedSchema.properties||{}).length},exampleString(){return this.resolvedSchema.example?typeof this.resolvedSchema.example=="object"?JSON.stringify(this.resolvedSchema.example,null,2):this.resolvedSchema.example.toString():""},genExample(){try{return JSON.stringify(fl(this.resolvedSchema,{quiet:!0}))}catch{return null}},computedOneAnyOf(){return this.resolvedSchema?this.resolvedSchema.oneOf||this.resolvedSchema.anyOf:[]},computedType(){let n=this.resolvedSchema.type||"any";return this.isPlainArray?(n=`array<${this.getType(this.resolvedSchema.items)}>`,this.resolvedSchema.nullable&&(n=`${n} or null`),n):this.getType(this.resolvedSchema)},flags(){const n=[];return this.resolvedSchema.deprecated&&n.push("Deprecated"),this.resolvedSchema.readOnly&&n.push("ReadOnly"),this.resolvedSchema.writeOnly&&n.push("WriteOnly"),this.resolvedSchema.uniqueItems&&n.push("UniqueItems"),n},requiredProps(){return this.isObject&&this.resolvedSchema.required&&Array.isArray(this.resolvedSchema.required)?this.resolvedSchema.required:[]},classes(){return{"oapi-prop--is-object":this.isObject,"oapi-prop--no-lines":this.noLines,"oapi-prop--no-name":!this.name,"oapi-prop--deprecated":!!this.resolvedSchema.deprecated}}},created(){this.isOneOf&&(this.isOpen=!0),this.open&&(this.isOpen=!0)},methods:{getType(n){let t=n.type||"any";if(!n)return t;if(n.oneOf||n.anyOf){const a=n.oneOf||n.anyOf||[];return a.length>0&&a[0].type&&a.every(o=>o.type&&o.type===a[0].type)?a[0].type:"mixed"}else n.format&&(t=`${t}:${n.format}`);return n.nullable&&(t=`${t} or null`),t},toggle(){this.isOpen=!this.isOpen}}},yl={class:"oapi-prop-body"},bl={class:"oapi-prop-head"},_l={key:1,class:"oapi-prop__name"},vl={class:"oapi-prop__type"},Sl={key:2,class:"oapi-prop__required"},El={class:"oapi-prop__content"},Ol={key:0,class:"oapi-prop__title"},kl=["innerHTML"],wl={key:2,class:"oapi-prop__ext-docs"},Tl=["innerHTML"],Al=["href"],xl={key:3,class:"oapi-prop-add-info"},Nl=["innerHTML"],Cl={key:4,class:"oapi-prop-add-info"},ql={key:5,class:"oapi-prop-add-info"},Rl={key:6,class:"oapi-prop-add-info"},Ll={key:7,class:"oapi-prop-add-info"},$l={key:8,class:"oapi-prop-add-info"},Ml={key:9,class:"oapi-prop-add-info"},Dl={key:10,class:"oapi-prop-add-info"},jl={key:11,class:"oapi-prop-add-info"},Il={key:12,class:"oapi-prop-add-info"},Pl={key:13,class:"oapi-prop-add-info"},Ul={key:14,class:"oapi-prop-add-info"},Bl=["innerHTML"],Hl={key:15,class:"oapi-prop-add-info oapi-prop-add-info--enums"},Fl={key:16,class:"oapi-prop-flags"},zl={key:1,class:"oapi-prop__props-title"},Kl={key:0,class:"oapi-prop-sub"},Jl={class:"oapi-object__list"},Gl={key:2,class:"oapi-prop__props-title"},Wl={key:0},Zl={key:1},Vl={key:3,class:"oapi-prop-items-of"};function Xl(n,t,a,o,i,s){const l=Bi,c=xr,d=zi;return s.resolvedSchema?(b(),_("li",{key:0,class:we(["oapi-prop",s.classes])},[v("div",yl,[v("div",bl,[s.isObject&&s.hasProperties||s.isOneOf?(b(),_("button",{key:0,class:we(["oapi-prop-head__expand",{"oapi-prop-head__expand--is-open":i.isOpen}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},[F(l)],2)):O("",!0),a.name?(b(),_("div",_l,[v("code",null,E(a.name),1)])):O("",!0),v("div",vl,E(s.computedType),1),a.required?(b(),_("div",Sl,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):O("",!0)]),v("div",El,[s.resolvedSchema.title&&!a.hideTitleDescription?(b(),_("div",Ol,E(n.$openapidocRef.tr(s.resolvedSchema,"title",a.currentLocale)),1)):O("",!0),s.resolvedSchema.description&&!a.hideTitleDescription?(b(),_("div",{key:1,class:"oapi-prop__description",innerHTML:n.$openapidocRef.tr(s.resolvedSchema,"description",a.currentLocale)},null,8,kl)):O("",!0),s.resolvedSchema.externalDocs?(b(),_("div",wl,[s.resolvedSchema.externalDocs.description?(b(),_("div",{key:0,class:"oapi-prop__ext-docs-md",innerHTML:n.$openapidocRef.tr(s.resolvedSchema.externalDocs,"description",a.currentLocale)},null,8,Tl)):O("",!0),v("a",{href:s.resolvedSchema.externalDocs.url,target:"_blank"},E(n.$openapidoc.getLocaleText("openapidoc.external_docs")),9,Al)])):O("",!0),s.genExample?(b(),_("div",xl,[D(E(n.$openapidoc.getLocaleText("openapidoc.example"))+": ",1),v("code",{innerHTML:s.genExample},null,8,Nl)])):O("",!0),s.resolvedSchema.multipleOf!==void 0?(b(),_("div",Cl,[D(E(n.$openapidoc.getLocaleText("openapidoc.multiple_of"))+": ",1),v("code",null,E(s.resolvedSchema.multipleOf),1)])):O("",!0),s.resolvedSchema.maximum!==void 0?(b(),_("div",ql,[v("code",null,E(s.resolvedSchema.exclusiveMaximum?"<":"<=")+" "+E(s.resolvedSchema.maximum),1)])):O("",!0),s.resolvedSchema.minimum!==void 0?(b(),_("div",Rl,[v("code",null,E(s.resolvedSchema.exclusiveMinimum?">":">=")+" "+E(s.resolvedSchema.minimum),1)])):O("",!0),s.resolvedSchema.maxLength!==void 0?(b(),_("div",Ll,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.maxLength),1)])):O("",!0),s.resolvedSchema.minLength!==void 0?(b(),_("div",$l,[D(E(n.$openapidoc.getLocaleText("openapidoc.minimum"))+": ",1),v("code",null,E(s.resolvedSchema.minLength),1)])):O("",!0),s.resolvedSchema.maxItems!==void 0?(b(),_("div",Ml,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.maxItems),1)])):O("",!0),s.resolvedSchema.minItems!==void 0?(b(),_("div",Dl,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum"))+": ",1),v("code",null,E(s.resolvedSchema.minItems),1)])):O("",!0),s.resolvedSchema.maxProperties!==void 0?(b(),_("div",jl,[D(E(n.$openapidoc.getLocaleText("openapidoc.maximum_props"))+": ",1),v("code",null,E(s.resolvedSchema.maxProperties),1)])):O("",!0),s.resolvedSchema.minProperties!==void 0?(b(),_("div",Il,[D(E(n.$openapidoc.getLocaleText("openapidoc.minimum_props"))+": ",1),v("code",null,E(s.resolvedSchema.minProperties),1)])):O("",!0),s.resolvedSchema.additionalProperties!==void 0&&typeof s.resolvedSchema.additionalProperties=="boolean"?(b(),_("div",Pl,[D(E(n.$openapidoc.getLocaleText("openapidoc.additional_properties"))+": ",1),v("code",null,E(!!s.resolvedSchema.additionalProperties),1)])):O("",!0),s.resolvedSchema.pattern?(b(),_("div",Ul,[D(E(n.$openapidoc.getLocaleText("openapidoc.pattern"))+": ",1),v("code",{innerHTML:s.resolvedSchema.pattern},null,8,Bl)])):O("",!0),s.resolvedSchema.enum?(b(),_("div",Hl,[D(E(n.$openapidoc.getLocaleText("openapidoc.enum"))+": ",1),(b(!0),_(L,null,M(s.resolvedSchema.enum,e=>(b(),_("span",{key:e},[v("code",null,E(e),1),D(E(" "))]))),128))])):O("",!0),s.flags.length?(b(),_("div",Fl,[(b(!0),_(L,null,M(s.flags,e=>(b(),_("span",{key:e,class:"oapi-prop-flags__flag"},E(e),1))),128))])):O("",!0)]),s.resolvedSchema.not&&(!s.isObject||i.isOpen)?(b(),V(d,{key:0,"current-locale":a.currentLocale,title:`${n.$openapidoc.getLocaleText("openapidoc.not")}:`},{default:le(()=>[F(c,{"current-locale":a.currentLocale,schema:s.resolvedSchema.not},null,8,["current-locale","schema"])]),_:1},8,["current-locale","title"])):O("",!0),s.isObject&&i.isOpen&&s.hasProperties?(b(),_("div",zl,E(n.$openapidoc.getLocaleText("openapidoc.properties"))+": ",1)):O("",!0)]),s.isObject&&i.isOpen&&s.hasProperties?(b(),_("div",Kl,[v("ul",Jl,[(b(!0),_(L,null,M(s.resolvedSchema.properties,(e,h)=>(b(),V(c,{key:h,schema:e,name:h,"current-locale":a.currentLocale,required:s.requiredProps.includes(h)},null,8,["schema","name","current-locale","required"]))),128))])])):O("",!0),s.resolvedSchema.additionalProperties&&typeof s.resolvedSchema.additionalProperties=="object"&&s.isObject?(b(),V(d,{key:1,title:`${n.$openapidoc.getLocaleText("openapidoc.additional_properties")}:`,"current-locale":a.currentLocale},{default:le(()=>[F(c,{schema:s.resolvedSchema.additionalProperties,"current-locale":a.currentLocale},null,8,["schema","current-locale"])]),_:1},8,["title","current-locale"])):O("",!0),(s.isOneOf||s.isAnyOf)&&i.isOpen?(b(),_("div",Gl,[s.isOneOf?(b(),_("span",Wl,E(n.$openapidoc.getLocaleText("openapidoc.one_of"))+":",1)):O("",!0),!s.isOneOf&&s.isAnyOf?(b(),_("span",Zl,E(n.$openapidoc.getLocaleText("openapidoc.any_of"))+":",1)):O("",!0)])):O("",!0),(s.isOneOf||s.isAnyOf)&&i.isOpen?(b(),_("ul",Vl,[(b(!0),_(L,null,M(s.computedOneAnyOf,(e,h)=>(b(),V(c,{key:h,schema:e,"current-locale":a.currentLocale},null,8,["schema","current-locale"]))),128))])):O("",!0),s.isArray?(b(),V(d,{key:4,title:"Items:","current-locale":a.currentLocale},{default:le(()=>[F(c,{schema:s.resolvedSchema.items,"current-locale":a.currentLocale},null,8,["schema","current-locale"])]),_:1},8,["current-locale"])):O("",!0)],2)):O("",!0)}const xr=W(gl,[["render",Xl]]);/*!
 * allof-merge v0.6.6
 * Copyright (C) 2012-2024 Damir Yusipov
 * Date: Sat, 17 Feb 2024 19:27:36 GMT
 */function _n(n,t){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(a[o[i]]=n[o[i]])}return a}function Ql(n,t){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(a[o[i]]=n[o[i]])}return a}const Yl=(n={},t,a,o)=>{const i=`/${t}`,s=typeof n["/**"]=="function"?n["/**"]({key:t,path:a,value:o}):n["/**"],l=typeof n["/*"]=="function"?n["/*"]({key:t,path:a,value:o}):n["/*"];let c={};if(i in n)c=n[i];else if(!s&&!l)return;return c=typeof c=="function"?c({key:t,path:a,value:o}):c,l&&(c=Object.assign(Object.assign({},l),c)),s?Object.assign(Object.assign({"/**":n["/**"]},s),c):c},Vi=n=>{const t={},a=n.reduce((o,i)=>(Object.keys(i).forEach(s=>o.add(s)),o),new Set);for(const o of a.keys()){const i=n.filter(s=>o in s);if(i.length!==1){if(o.charAt(0)!=="/")throw new Error(`Cannot merge rules. Duplicate key: ${o}. Rules should not have same Rule key`);t[o]=(s,l)=>{const c=i.map(d=>typeof d[o]=="function"?d[o](s,l):d[o]);return Vi(c)}}else t[o]=i[0][o]}return t},Te=n=>typeof n=="object"&&n!==null,At=n=>Array.isArray(n),eu=(n,t,a={})=>{var o,i;t=At(t)?t:[t];const s=At(a.rules)?Vi(a.rules):a.rules,l=[{data:n,state:a.state,path:[],keys:[],keyIndex:-1,rules:s}];for(;l.length>0;){const c=l[l.length-1];if(c.keyIndex>=c.keys.length){for(;!((o=c.hooks)===null||o===void 0)&&o.length;)c.hooks.pop()();l.pop();continue}const d=c.keys[c.keyIndex++],[e,h,m]=l.length>1?[c.data[d],[...c.path,d],Yl(c.rules,d,[...c.path,d],c.data[d])]:[c.data,c.path,s];let f={value:e,path:h,key:d,state:c.state,rules:m};const g=[];for(const p of t){if(!p||typeof p!="function")continue;const u=(i=p(f))!==null&&i!==void 0?i:{},{terminate:r,done:S,exitHook:w}=u,k=Ql(u,["terminate","done","exitHook"]);if(r)return;if(w&&g.push(w),f=Object.assign(Object.assign({},f),k),S){f=null;break}}if(f&&Te(f.value)){const p=At(f.value)?[...f.value.keys()]:Object.keys(f.value);l.push({hooks:g,state:f.state,data:f.value,path:h,keys:p,keyIndex:0,rules:f.rules})}else for(;g.length;)g.pop()()}},nu=()=>{const n=new WeakMap;let t;return[({value:a})=>{t=a},({value:a,path:o,key:i,state:s})=>{if(i=o.length?i:"#",Te(t)&&Te(a)){if(n.has(t))return s.node[i]=n.get(t),{done:!0};const l=Array.isArray(a)?[]:{};s.node[i]=l,n.set(t,l)}else s.node[i]=a;return{value:a,state:Object.assign(Object.assign({},s),{node:s.node[i]})}}]};let Xi=class extends Map{add(t,a){const o=this.get(t);return o?o.push(a):this.set(t,[a]),this}};const tu=(n,t)=>{const a={};for(const o of t)o in n&&(a[o]=n[o],delete n[o]);return a},Qi=(n,t)=>{if(Array.isArray(n)&&Array.isArray(t))return[...n,...t];if(Te(n)&&Te(t)){const a=Object.assign({},n);for(const o of Object.keys(t))a[o]=Qi(a[o],t[o]);return a}return t},pr=n=>n&&n.$ref&&typeof n.$ref=="string",la=n=>n&&n.anyOf&&Array.isArray(n.anyOf),ua=n=>n&&n.oneOf&&Array.isArray(n.oneOf),Yi=(n,t="")=>{const[a=t,o]=n.split("#"),i=o&&o!=="/"?o:"";return{filePath:a,pointer:i,normalized:ru(a,i),jsonPath:ns(i)}},ru=(n,t)=>n?`${n}${t?"#"+t:""}`:t?`#${t}`:"#",es=(n,t,a=[t])=>{if(!Te(n))return;let o=n;const i=ns(t);for(const s of i)if(Array.isArray(o)&&o.length>+s)o=o[+s];else if(Te(o)&&s in o)o=o[s];else{if(!pr(o))return;{const l=Yi(o.$ref);o=l.filePath||a.includes(l.pointer)?void 0:es(n,l.pointer,[...a,l.pointer])}}return o},Yn={slash:/\//g,tilde:/~/g,escapedSlash:/~1/g,escapedTilde:/~0/g},ns=n=>n.split("/").map(t=>decodeURIComponent(t.replace(Yn.escapedSlash,"/").replace(Yn.escapedTilde,"~"))).slice(1),Nr=n=>n.length?"/"+n.map(t=>encodeURIComponent(String(t).replace(Yn.tilde,"~0").replace(Yn.slash,"~1"))).join("/"):"",au=(n,t)=>JSON.stringify(n)==JSON.stringify(t),iu=n=>{let t=1;for(;n*t%1!=0;)t*=10;return t};function su(n){const t=n.reduce((a,o)=>Math.max(a,iu(o)),0);return n.reduce((a,o)=>Math.round(a*t*o*t/ts(a*t,o*t))/t)}function ts(n,t){return t===0?n:ts(t,n%t)}const rs=n=>{if(n.length===0)return[[]];const t=n[0],a=n.slice(1),o=rs(a),i=[];for(const s of t)for(const l of o)i.push([s,...l]);return i},ou=n=>{const t=[];for(const a of n){if(!("properties"in a))continue;const o=new Set(Object.keys(a.properties)),i=new Xi;for(const l of o.values())for(const c of n)if(!(c==a||c.properties&&l in c.properties))if("patternProperties"in c&&c.patternProperties)for(const d of Object.keys(c.patternProperties))new RegExp(d).test(l)||o.delete(l);else"additionalProperties"in c&&(c.additionalProperties===!1?o.delete(l):typeof c.additionalProperties=="object"&&i.add(l,c.additionalProperties));if(!o.size)continue;const s={};for(const l of o.values())i.has(l)?s[l]={allOf:[a.properties[l],...i.get(l)]}:s[l]=a.properties[l];t.push(s)}return t},cu=n=>{const t=[];for(const a of n){if(!("patternProperties"in a))continue;const o=new Set(Object.keys(a.patternProperties));for(const s of n)if(s!=a&&"additionalProperties"in s&&!s.additionalProperties)for(const l of o.values())s.patternProperties&&l in s.patternProperties||o.delete(l);if(!o.size)continue;const i={};for(const s of o.values())i[s]=a.patternProperties[s];t.push(i)}return t},da=n=>{const t={},a=Cr(n);for(const[o,i]of Object.entries(a))i.includes(!1)?t[o]=!1:t[o]=i.length>1?{allOf:i}:i[0];return t},lu=(n,t)=>!!n.reduce((a,o)=>a&&o===!0,!0)||wn(n,t),uu=()=>"Could not merge values, they are probably incompatible",du=n=>`Merge rule not found for key: ${n}`,Cr=n=>{const t={};for(const a of n)for(const o of Object.keys(a))Array.isArray(t[o])?t[o].push(a[o]):t[o]=[a[o]];return t},wn=(n,t)=>{if(n.includes(!1))return!1;const a={},o=Cr(n);"properties"in o&&(o.properties=ou(n)),"patternProperties"in o&&(o.patternProperties=cu(n));for(let[i,s]of Object.entries(o)){if(!s.length)continue;const l=t.mergeRules;let c=`/${i}`in l?l[`/${i}`]:l["/?"];c=c&&!("$"in c)&&"/"in c?c["/"]:c,c=typeof c=="function"?c():c;const d=c&&"$"in c?c.$:void 0;if(!d)throw new Error(du(i));const e=s.length>1?d(s,Object.assign(Object.assign({},t),{allOfItems:n})):s[0];e===void 0?t.mergeError(s):a[i]=e}return Object.keys(a).length?a:void 0},ye=n=>n[n.length-1],Ue=n=>n.reduce((t,a)=>t||a,!1),pn=n=>Math.min(...n),hn=n=>Math.max(...n),pu=n=>n.length>1?n.reduce((t,a)=>`${t}(?=${a})`,""):n[0],as=([n,...t])=>t.reduce((a,o)=>a.filter(i=>o.includes(i)),n),hu=([n,...t])=>t.find(a=>!au(a,n))?void 0:n,de=([n,...t])=>t.reduce((a,o)=>Qi(a,o),n),fn=n=>rs(n).map(t=>({allOf:t})),mu=n=>({anyOf:n}),fu=n=>su(n),gu=(n,t)=>{const a=n.map(i=>i.map(s=>JSON.stringify(s))),o=as(a).map(i=>JSON.parse(i)).sort();return o.length||t.mergeError(n),o},yu=(n,t)=>{const a=n.map(i=>Array.isArray(i)?i:[i]),o=as(a);return o.length===1?o[0]:o.length?o:void 0},is=n=>{const t=new Set;for(const a of n)for(const o of a)t.add(o);return Array.from(t).sort()},bu=(n,t)=>{const a={},o=Cr(n);for(const[i,s]of Object.entries(o))if(s.reduce((l,c)=>l&&Array.isArray(c),!0))a[i]=is(s);else{const l=s.map(c=>Array.isArray(c)?{required:c}:c);a[i]=l.length>1?{allOf:l}:l[0]}return a},ss=(n,t)=>{if(!n.reduce((d,e)=>Array.isArray(e)||d,!1))return wn(n,t);const a=[];let o=1/0,i=0;const s=new Xi;for(const d of t.allOfItems)"additionalItems"in d&&d.additionalItems&&"items"in d&&Array.isArray(d.items)&&s.add(d.items.length,d.additionalItems),"items"in d&&(a.push(d.items),Array.isArray(d.items)&&(i=Math.max(i,d.items.length),"additionalItems"in d&&d.additionalItems===!1&&(o=Math.min(o,d.items.length))));const l=Math.min(i,o),c=[...Array(l)].map(()=>({allOf:[]}));for(const d of a)if(Array.isArray(d))for(let e=0;e<l;e++){const h=[];for(let m=0;m<=e;m++)s.has(m)&&h.push(...s.get(m));e<d.length?c[e].allOf.push(h.length?Object.assign(Object.assign({},d[e]),{allOf:h}):d[e]):c[e].allOf.push(!h.length||{allOf:h})}else c.forEach(({allOf:e})=>e.push(d));return c},_u=(n,t)=>{const a=[],o=[];for(const i of t.allOfItems)"items"in i&&!Array.isArray(i.items)&&o.push(i.items),"additionalItems"in i&&"items"in i&&Array.isArray(i.items)&&a.push(i.additionalItems);return o.length&&a.forEach(i=>i.allOf=o),wn(a,t)},te=(n="draft-06",t={})=>Object.assign(Object.assign(Object.assign(Object.assign({"/maximum":{$:pn},"/exclusiveMaximum":{$:Ue},"/minimum":{$:hn},"/exclusiveMinimum":{$:Ue},"/maxLength":{$:pn},"/minLength":{$:hn},"/maxItems":{$:pn},"/minItems":{$:hn},"/uniqueItems":{$:Ue},"/maxProperties":{$:pn},"/minProperties":{$:hn},"/required":{$:is},"/multipleOf":{$:fu},"/enum":{$:gu},"/type":{$:yu},"/allOf":{"/*":()=>te(n,t),$:fn},"/not":{$:mu},"/oneOf":{"/*":()=>te(n,t),$:fn,sibling:["definitions","$defs","$id","$schema"]},"/anyOf":{"/*":()=>te(n,t),$:fn,sibling:["definitions","$defs","$id","$schema"]},"/properties":{"/*":()=>te(n,t),$:da},"/items":()=>Object.assign(Object.assign({},te(n,t)),{$:ss,"/*":({key:a})=>typeof a=="number"?te(n,t):{}}),"/additionalProperties":()=>Object.assign(Object.assign({},te(n,t)),{$:lu}),"/additionalItems":()=>Object.assign(Object.assign({},te(n,t)),{$:_u}),"/patternProperties":{"/*":()=>te(n,t),$:da},"/pattern":{$:pu},"/readOnly":{$:Ue},"/writeOnly":{$:Ue},"/example":{$:de},"/examples":{$:de},"/deprecated":{$:Ue}},n!=="draft-04"?{"/propertyNames":()=>te(n,t),"/contains":()=>te(n,t),"/dependencies":{"/*":()=>te(n,t),$:bu},"/const":{$:hu},"/exclusiveMaximum":{$:pn},"/exclusiveMinimum":{$:hn},"/$defs":{"/*":()=>te(n,t),$:de}}:{}),{"/definitions":{"/*":()=>te(n,t),$:de},"/xml":{$:de},"/externalDocs":{$:ye},"/description":{$:ye},"/title":{$:ye},"/format":{$:ye},"/default":{$:ye},"/?":{$:ye}}),t),{$:wn}),gn=n=>te(n,{"/discriminator":{$:de},"/oneOf":{"/*":()=>gn(n),$:fn,sibling:["discriminator"]},"/anyOf":{"/*":()=>gn(n),$:fn,sibling:["discriminator"]}}),it=n=>n==="3.0.x"?Object.assign(Object.assign({},gn("draft-04")),{"/items":({key:t})=>Object.assign(Object.assign({},gn("draft-04")),{$:ss})}):gn("draft-06"),He=n=>({"/*":{"/schema":it(n)}}),pa=n=>({"/content":{"/*":{"/schema":it(n),"/encoding":{"/headers":He(n)}}}}),ha=n=>({"/*":{"/headers":He(n),"/content":{"/*":{"/schema":it(n),"/encoding":{"/headers":He(n)}}}}}),vu=(n="3.0.x")=>({"/paths":{"/*":{"/*":{"/parameters":He(n),"/requestBody":pa(n),"/responses":ha(n)},"/parameters":He(n)}},"/components":{"/schemas":{"/*":it(n)},"/responses":ha(n),"/parameters":He(n),"/requestBodies":{"/*":pa(n)},"/headers":He(n)}}),Be=te("draft-06",{"/args":()=>Be,"/nullable":{$:Ue},"/specifiedByURL":{$:ye},"/values":{$:de,"/*":{$:de,"/description":{$:ye},"/deprecated":{$:ye,"/reason":{$:ye}}}},"/interfaces":{$:de,"/*":{$:de}},"/directives":{$:de,"/*":()=>Object.assign(Object.assign({},Be),{"/meta":{$:de}})}}),Su={"/queries":{"/*":()=>Be},"/mutations":{"/*":()=>Be},"/subscriptions":{"/*":()=>Be},"/components":{"/*":{"/*":Be},"/directives":{"/*":{"/args":()=>Be}}}},Ln=(n,t,a)=>{const o=a.sibling||[],i=n,s=t,l=i[s],c=_n(i,[typeof s=="symbol"?s:s+""]),d=tu(c,o);return Object.keys(c).length?Object.assign({[t]:l.map(e=>({allOf:[c,e]}))},d):n},os=(n,t,a,o)=>{const i=[],s=Nr(t),l=[],c={pointer:s,data:"",refs:[]};for(const e of n)if(pr(e)&&!l.includes(e.$ref)){c.data===""&&(c.data=JSON.stringify(n));const{$ref:h}=e,m=_n(e,["$ref"]),{filePath:f,normalized:g,pointer:p}=Yi(h),u=o.find(S=>S.refs.includes(e.$ref)&&S.data===c.data&&p!==S.pointer);if(u)return{allOfItems:[{$ref:"#"+u.pointer}],brokenRefs:l};c.refs.push(g);const r=f?void 0:es(a,p);r===void 0?(l.push(g),i.push(e)):i.push(r),Object.keys(m).length&&i.push(m)}else i.push(e);c.refs.length&&o.push(c);const d=cs(i);return d.find(e=>pr(e)&&!l.includes(e.$ref))?os(d,t,a,o):{allOfItems:d,brokenRefs:l}},cs=n=>{const t=[];for(const a of n)if(Te(a))if(a.allOf&&Array.isArray(a.allOf)){const{allOf:o}=a,i=_n(a,["allOf"]),s=Object.keys(i).length?[...o,i]:o;t.push(...cs(s))}else t.push(a);return t},Eu=n=>{if(typeof n!="object"||!n)return te();if("openapi"in n&&typeof n.openapi=="string"&&/3.+/.test(n.openapi)){const t=n.openapi.startsWith("3.1")?"3.1.x":"3.0.x";return vu(t)}return"graphapi"in n&&typeof n.graphapi=="string"?Su:te()},Ou=(n,t)=>{var a;const o=(a=t==null?void 0:t.rules)!==null&&a!==void 0?a:Eu(n);return((i,s=[],l={})=>{var c;s=Array.isArray(s)?s:[s];const d={"#":void 0},e=Object.assign({state:Object.assign(Object.assign({},(c=l.state)!==null&&c!==void 0?c:{}),{root:d,node:d})},l.rules?{rules:l.rules}:{}),[h,m]=nu();return eu(i,[h,...s,m],e),d["#"]})(n,ku(t),{rules:o})},ku=n=>{const t=new Map;let a=n==null?void 0:n.source;const o=[];return({value:i,key:s,path:l,rules:c,state:d})=>{l.length||n!=null&&n.source||(a=i);const e=S=>{var w;const k=wu(l);k?t.set(...k):(w=n==null?void 0:n.onMergeError)===null||w===void 0||w.call(n,uu(),l,S)},h=()=>{const{node:S}=d,w=Nr(l);if(t.has(w)){const k=t.get(w),T=S[s];Array.isArray(T)&&(T.length<2&&e((i==null?void 0:i.allOf)||[]),T.splice(k,1))}};if(!Te(i)||Array.isArray(i))return{exitHook:h};if(!(S=>!!S&&S["/allOf"]&&"$"in S["/allOf"])(c))return{exitHook:h};const{allOf:m}=i,f=_n(i,["allOf"]),g=[];if(Array.isArray(m)&&g.push(...m),g.length)Object.keys(f).length&&g.push(f);else{const{$ref:S}=f,w=_n(f,["$ref"]);if(n!=null&&n.mergeRefSibling&&S&&Object.keys(w).length>0)g.push({$ref:S},w);else if(n!=null&&n.mergeCombinarySibling){if(la(f)&&c["/anyOf"])return{value:Ln(f,"anyOf",c["/anyOf"]),exitHook:h};if(ua(f)&&c["/oneOf"])return{value:Ln(f,"oneOf",c["/oneOf"]),exitHook:h}}}if(!g.length)return{value:f,exitHook:h};const{allOfItems:p,brokenRefs:u}=os(g,l,a,o);if(u.length)return u.forEach(S=>{var w;return(w=n==null?void 0:n.onRefResolveError)===null||w===void 0?void 0:w.call(n,"Cannot resolve $ref",l,S)}),{value:{allOf:p},exitHook:h};if(p.length<2)return{value:p.length?p[0]:{},exitHook:h};const r=wn(p,{allOfItems:p,mergeRules:c,mergeError:e});return n!=null&&n.mergeCombinarySibling&&la(r)?{value:Ln(r,"anyOf",c["/anyOf"]),exitHook:h}:n!=null&&n.mergeCombinarySibling&&ua(r)?{value:Ln(r,"oneOf",c["/oneOf"]),exitHook:h}:{value:r,exitHook:h}}},wu=n=>{for(let t=n.length-2;t>=0;t--)if(n[t]==="anyOf"||n[t]==="oneOf"){const a=n.slice(0,t+1);return[Nr(a),n[t+1]]}},xt={};function Tu(n){if(typeof n!="object"||!Array.isArray(n.allOf))return n;const t=n.$ref,a=Ou(n,{onMergeError:o=>console.error(o)});return t?a.$ref=t:a.$ref&&delete a.$ref,a}function ma(n,t=[],a,o){if(typeof n!="string"||!n.startsWith("#"))return n;if(xt[n])return xt[n];if(t.includes(n))return{$recursive:!0,$ref:n};const[i,s,l,c]=n.split("/");let d=null;if(s==="definitions"){if(!a||!a[l])return{};d=a[l],d.title=c,t.push(n)}else{if(!o||!o[l]||!o[l][c])return{};d=o[l][c],d.title=c,t.push(n)}return d?xt[n]=vn(d,t,a,o):null}function vn(n,t=[],a={},o={},i=!0){if(typeof n=="string")return ma(n,t,a,o);if(!n||typeof n!="object")return n;if(Array.isArray(n))return n.map(l=>vn(l,t,a,o,i));if(n&&"$ref"in n){const l=n.$ref,c=ma(l,t,a,o);return c?c.$ref||!i?c:{...c,$path:l}:{}}let s={};for(const[l,c]of Object.entries(n)){let d=c;typeof d=="string"&&d.startsWith("#")&&(d={$ref:c}),s[l]=vn(d,t,a,o,l!=="allOf")}return"allOf"in s&&(s=Tu(s)),s}const Au={name:"OpenApiObjectModel",components:{OpenApiSchemaProperty:xr},props:{lite:Boolean,schema:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}},computed:{resolvedSchema(){return vn(this.schema,[],this.$openapidocRef.definitions,this.$openapidocRef.components)},requiredProps(){return this.resolvedSchema.required&&Array.isArray(this.resolvedSchema.required)?this.resolvedSchema.required:[]}},methods:{}},xu={class:"oapi-object__list"};function Nu(n,t,a,o,i,s){const l=xr;return b(),_("div",{class:we(["oapi-object",{"oapi-object--lite":a.lite}])},[v("ul",xu,[F(l,{"hide-title-description":!a.lite,schema:s.resolvedSchema,"current-locale":a.currentLocale,"no-lines":"",open:""},null,8,["hide-title-description","schema","current-locale"])])],2)}const Me=W(Au,[["render",Nu]]),Cu={props:{tabNames:{type:Object,default:null}},data(){return{activeSlotName:null}},computed:{computedTabNames(){return this.tabNames?this.tabNames:Object.keys(this.$slots).reduce((n,t)=>({...n,[t]:this.tabNames&&this.tabNames[t]||t}),{})}},created(){this.activeSlotName=Object.keys(this.$slots)[0]}},qu={class:"oapi-tabs"},Ru={class:"oapi-tabs-list"},Lu=["onClick"],$u={class:"oapi-tabs__content"};function Mu(n,t,a,o,i,s){return b(),_("div",qu,[v("ul",Ru,[(b(!0),_(L,null,M(s.computedTabNames,(l,c)=>(b(),_("li",{key:c,class:we(["oapi-tabs-list__item",{"oapi-tabs-list__item--is-active":c===i.activeSlotName}]),onClick:d=>i.activeSlotName=c},E(l),11,Lu))),128))]),v("div",$u,[Pi(n.$slots,i.activeSlotName)])])}const ls=W(Cu,[["render",Mu]]),Du={name:"OpenApiMediaTypes",components:{OpenApiExampleObject:on,OpenApiTabs:ls,OpenApiObjectModel:Me,OpenApiDropdown:Hi},props:{data:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{selectedMediaType:null}},computed:{types(){return Object.keys(this.data).map(n=>({value:n}))},medaTypeObject(){return this.selectedMediaType===null?null:this.data[this.selectedMediaType]||null}},created(){this.selectedMediaType=Object.keys(this.data||{})[0]||null},methods:{}},ju={class:"oapi-req-body-obj"},Iu={class:"oapi-req-body-obj-content-type"},Pu={class:"oapi-req-body-obj-content-type__label"},Uu={class:"oapi-req-body-obj__schema"},Bu={class:"oapi-req-body-obj__example"},Hu=["innerHTML"],Fu={class:"oapi-req-body-obj__examples"};function zu(n,t,a,o,i,s){const l=Hi,c=Me,d=on,e=ls;return b(),_("div",ju,[v("div",Iu,[v("span",Pu,E(n.$openapidoc.getLocaleText("openapidoc.content_type"))+": ",1),F(l,{modelValue:i.selectedMediaType,"onUpdate:modelValue":t[0]||(t[0]=h=>i.selectedMediaType=h),options:s.types,"text-prop":"value","value-prop":"value"},null,8,["modelValue","options"])]),(b(),V(e,{key:i.selectedMediaType},Bo({_:2},[s.medaTypeObject&&s.medaTypeObject.schema?{name:"Schema",fn:le(()=>[v("div",Uu,[F(c,{schema:s.medaTypeObject.schema,"current-locale":a.currentLocale,lite:""},null,8,["schema","current-locale"])])]),key:"0"}:void 0,s.medaTypeObject&&s.medaTypeObject.example&&!s.medaTypeObject.examples?{name:"Example",fn:le(()=>[v("div",Bu,[v("pre",{innerHTML:JSON.stringify(s.medaTypeObject.example,null,2)},null,8,Hu)])]),key:"1"}:void 0,s.medaTypeObject&&s.medaTypeObject.examples?{name:"Examples",fn:le(()=>[v("div",Fu,[(b(!0),_(L,null,M(s.medaTypeObject.examples,(h,m)=>(b(),V(d,{key:m,example:h,name:m,"current-locale":a.currentLocale,"name-tag":"h4"},null,8,["example","name","current-locale"]))),128))])]),key:"2"}:void 0]),1024))])}const De=W(Du,[["render",zu]]),Ku={name:"OpenApiParameter",components:{OpenApiMediaTypes:De,OpenApiObjectModel:Me},props:{data:{type:Object,required:!0},hideName:Boolean,hideDescription:Boolean,lite:Boolean,currentLocale:{type:String,required:!0}},data(){return{}},computed:{flags(){const n=[];return this.data.deprecated&&n.push("Deprecated"),this.data.allowEmptyValue&&n.push("Allow empty"),this.data.allowReserved&&n.push("Allow reserved"),this.data.allowEmptyValue&&n.push("Explode"),n},exampleString(){return this.data.example?typeof this.data.example=="object"?JSON.stringify(this.data.example,null,2):this.data.example.toString():""}}},Ju={class:"oapi-res-param"},Gu={key:0,class:"oapi-res-param__name"},Wu={key:1,class:"oapi-res-param__required"},Zu={key:2,class:"oapi-res-param-flags"},Vu=["innerHTML"],Xu={key:4,class:"oapi-res-param__param"},Qu={key:5,class:"oapi-res-param__param"},Yu={key:6,class:"oapi-res-param__param"},ed={key:0},nd=["innerHTML"],td={key:7,class:"oapi-res-param__examples"},rd={class:"oapi-res-param__muted"},ad={class:"oapi-res-param-example__name"},id={key:0,class:"oapi-res-param-example__summary"},sd=["innerHTML"],od={key:2,class:"oapi-res-param-example__value"},cd=["innerHTML"],ld={key:8,class:"oapi-res-param__schema"},ud={class:"oapi-res-param__muted"},dd={key:9,class:"oapi-res-param__content"},pd={class:"oapi-res-param__muted"};function hd(n,t,a,o,i,s){const l=Me,c=De;return b(),_("div",Ju,[a.data.name&&!a.hideName?(b(),_("div",Gu,[v("code",null,E(a.data.name),1)])):O("",!0),a.data.required?(b(),_("div",Wu,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):O("",!0),s.flags.length?(b(),_("div",Zu,[(b(!0),_(L,null,M(s.flags,d=>(b(),_("span",{key:d,class:"oapi-res-param-flags__flag"},E(d),1))),128))])):O("",!0),a.data.description&&!a.hideDescription?(b(),_("div",{key:3,class:"oapi-res-param__description",innerHTML:n.$openapidocRef.tr(a.data,"description",a.currentLocale)},null,8,Vu)):O("",!0),a.data.in?(b(),_("div",Xu,[D(E(n.$openapidoc.getLocaleText("openapidoc.in"))+": ",1),v("code",null,E(a.data.in),1)])):O("",!0),a.data.style?(b(),_("div",Qu,[D(E(n.$openapidoc.getLocaleText("openapidoc.style"))+": ",1),v("code",null,E(a.data.style),1)])):O("",!0),a.data.example?(b(),_("div",Yu,[D(E(n.$openapidoc.getLocaleText("openapidoc.example"))+": ",1),s.exampleString.includes(`
`)?(b(),_("br",ed)):O("",!0),v("code",{innerHTML:s.exampleString},null,8,nd)])):O("",!0),a.data.examples?(b(),_("div",td,[v("div",rd,E(n.$openapidoc.getLocaleText("openapidoc.examples"))+": ",1),(b(!0),_(L,null,M(a.data.examples,(d,e)=>(b(),_("div",{key:e,class:"oapi-res-param-example"},[v("div",ad,E(e),1),d.summary?(b(),_("div",id,E(n.$openapidocRef.tr(d,"summary",a.currentLocale)),1)):O("",!0),d.description?(b(),_("div",{key:1,class:"oapi-res-param-example__description",innerHTML:n.$openapidocRef.tr(d,"description",a.currentLocale)},null,8,sd)):O("",!0),d.value?(b(),_("div",od,[v("pre",{innerHTML:JSON.stringify(d.value,null,2)},null,8,cd)])):O("",!0)]))),128))])):O("",!0),a.data.schema?(b(),_("div",ld,[v("div",ud,E(n.$openapidoc.getLocaleText("openapidoc.schema"))+": ",1),F(l,{lite:"",schema:a.data.schema,"current-locale":a.currentLocale},null,8,["schema","current-locale"])])):O("",!0),a.data.content?(b(),_("div",dd,[v("div",pd,E(n.$openapidoc.getLocaleText("openapidoc.content"))+": ",1),F(c,{"current-locale":a.currentLocale,data:a.data.content},null,8,["current-locale","data"])])):O("",!0)])}const ln=W(Ku,[["render",hd]]),md={name:"OpenApiResponse",components:{OpenApiParameter:ln,OpenApiObjectModel:Me,OpenApiMediaTypes:De},props:{response:{type:Object,required:!0},currentLocale:{type:String,required:!0},lite:Boolean},data(){return{}},computed:{isEmpty(){return(!this.response.description||this.lite)&&(!this.response.headers||!Object.keys(this.response.headers).length)&&!this.response.content&&!this.response.schema}}},fd={key:0,class:"oapi-response"},gd=["innerHTML"],yd={key:1,class:"oapi-response__section"},bd={class:"oapi-response__section-title"},_d={class:"oapi-response-header__name"},vd={key:2,class:"oapi-response__section"},Sd={key:0,class:"oapi-response__section-title"},Ed={class:"oapi-response-media-types"},Od={key:3,class:"oapi-response__schema"},kd={key:0,class:"oapi-response__section-title"},wd={class:"oapi-response-media-types"};function Td(n,t,a,o,i,s){const l=ln,c=De,d=Me;return s.isEmpty?O("",!0):(b(),_("div",fd,[a.response.description&&!a.lite?(b(),_("div",{key:0,class:"oapi-response__description",innerHTML:n.$openapidocRef.tr(a.response,"description",a.currentLocale)},null,8,gd)):O("",!0),a.response.headers?(b(),_("div",yd,[v("strong",bd,E(n.$openapidoc.getLocaleText("openapidoc.headers")),1),(b(!0),_(L,null,M(a.response.headers,(e,h)=>(b(),_("div",{key:h,class:"oapi-response-header"},[v("div",_d,[v("code",null,E(h),1)]),F(l,{data:e,"current-locale":a.currentLocale,"hide-name":""},null,8,["data","current-locale"])]))),128))])):O("",!0),a.response.content?(b(),_("div",vd,[a.response.headers?(b(),_("strong",Sd,E(n.$openapidoc.getLocaleText("openapidoc.content")),1)):O("",!0),v("div",Ed,[F(c,{data:a.response.content,"current-locale":a.currentLocale,lite:""},null,8,["data","current-locale"])])])):O("",!0),a.response.schema?(b(),_("div",Od,[a.response.headers||a.response.content?(b(),_("strong",kd,E(n.$openapidoc.getLocaleText("openapidoc.schema")),1)):O("",!0),v("div",wd,[F(d,{schema:a.response.schema,"current-locale":a.currentLocale,lite:""},null,8,["schema","current-locale"])])])):O("",!0)]))}const st=W(md,[["render",Td]]),Ad={components:{OpenApiParameter:ln,OpenApiResponse:st,OpenApiSecurityScheme:Fi,OpenApiMediaTypes:De,OpenApiExampleObject:on,OpenApiObjectModel:Me},props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},xd={key:0},Nd={id:"security-schemes"},Cd=["id","textContent"],qd=["innerHTML"];function Rd(n,t,a,o,i,s){const l=Fi;return b(),_("div",null,[a.components.securitySchemes?(b(),_("div",xd,[v("h2",Nd,E(n.$openapidoc.getLocaleText("openapidoc.security_schemes")),1),(b(!0),_(L,null,M(a.components.securitySchemes,(c,d)=>(b(),_("div",{key:d,class:"oapi-schema-block"},[v("h3",{id:"security-schemes-"+d,textContent:E(d)},null,8,Cd),c.description?(b(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(c,"description",a.currentLocale)},null,8,qd)):O("",!0),F(l,{"current-locale":a.currentLocale,"security-scheme":c},null,8,["current-locale","security-scheme"])]))),128))])):O("",!0)])}const NS=W(Ad,[["render",Rd]]),Ld={props:{components:{type:Object,default:()=>({})},currentLocale:{type:String,required:!0}}},$d={key:0},Md={id:"schemas"},Dd=["id","textContent"],jd=["innerHTML"],Id=["innerHTML"],Pd={key:1},Ud={id:"examples"},Bd={key:2},Hd={id:"request-bodies"},Fd=["id","textContent"],zd={class:"oapi-schema-block__required"},Kd=["innerHTML"],Jd={key:3},Gd={id:"responses"},Wd=["id","textContent"],Zd=["innerHTML"],Vd={key:4},Xd={id:"parameters"},Qd=["id","textContent"],Yd=["innerHTML"],ep={key:5},np={id:"headers"},tp=["id","textContent"],rp=["innerHTML"];function ap(n,t,a,o,i,s){const l=Me,c=on,d=De,e=st,h=ln;return b(),_("div",null,[a.components.schemas?(b(),_("div",$d,[v("h2",Md,E(n.$openapidoc.getLocaleText("openapidoc.schemas")),1),(b(!0),_(L,null,M(a.components.schemas,(m,f)=>(b(),_("div",{key:f,class:"oapi-schema-block"},[v("h3",{id:f,textContent:E(f)},null,8,Dd),m.title?(b(),_("div",{key:0,class:"oapi-schema-block__title",innerHTML:n.$openapidocRef.tr(m,"title",a.currentLocale)},null,8,jd)):O("",!0),m.description?(b(),_("div",{key:1,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Id)):O("",!0),F(l,{class:"oapi-schema-block__model",schema:m,"current-locale":a.currentLocale,root:""},null,8,["schema","current-locale"])]))),128))])):O("",!0),a.components.examples?(b(),_("div",Pd,[v("h2",Ud,E(n.$openapidoc.getLocaleText("openapidoc.examples")),1),(b(!0),_(L,null,M(a.components.examples,(m,f)=>(b(),_("div",{key:f,class:"oapi-schema-block"},[F(c,{example:m,name:f,"current-locale":a.currentLocale,"name-tag":"h3"},null,8,["example","name","current-locale"])]))),128))])):O("",!0),a.components.requestBodies?(b(),_("div",Bd,[v("h2",Hd,E(n.$openapidoc.getLocaleText("openapidoc.request_bodies")),1),(b(!0),_(L,null,M(a.components.requestBodies,(m,f)=>(b(),_("div",{key:f,class:"oapi-schema-block"},[v("h3",{id:f,textContent:E(f)},null,8,Fd),v("div",zd,E(n.$openapidoc.getLocaleText("openapidoc.required")),1),m.description?(b(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Kd)):O("",!0),F(d,{data:m.content,"current-locale":a.currentLocale},null,8,["data","current-locale"])]))),128))])):O("",!0),a.components.responses?(b(),_("div",Jd,[v("h2",Gd,E(n.$openapidoc.getLocaleText("openapidoc.responses")),1),(b(!0),_(L,null,M(a.components.responses,(m,f)=>(b(),_("div",{key:f,class:"oapi-schema-block"},[v("h3",{id:f,textContent:E(f)},null,8,Wd),m.description?(b(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Zd)):O("",!0),F(e,{response:m,"current-locale":a.currentLocale},null,8,["response","current-locale"])]))),128))])):O("",!0),a.components.parameters?(b(),_("div",Vd,[v("h2",Xd,E(n.$openapidoc.getLocaleText("openapidoc.parameters")),1),n.name!=="Authorization"?(b(!0),_(L,{key:0},M(a.components.parameters,(m,f)=>(b(),_("div",{key:f,class:"oapi-schema-block"},[v("h3",{id:f,textContent:E(f)},null,8,Qd),m.description?(b(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,Yd)):O("",!0),F(h,{data:m,"hide-description":"","current-locale":a.currentLocale},null,8,["data","current-locale"])]))),128)):O("",!0)])):O("",!0),a.components.headers?(b(),_("div",ep,[v("h2",np,E(n.$openapidoc.getLocaleText("openapidoc.headers")),1),(b(!0),_(L,null,M(a.components.headers,(m,f)=>(b(),_("div",{key:f,class:"oapi-schema-block"},[v("h3",{id:f,textContent:E(f)},null,8,tp),m.description?(b(),_("div",{key:0,class:"oapi-schema-block__description",innerHTML:n.$openapidocRef.tr(m,"description",a.currentLocale)},null,8,rp)):O("",!0),F(h,{data:m,"current-locale":a.currentLocale,"hide-name":"","hide-description":""},null,8,["data","current-locale"])]))),128))])):O("",!0)])}const CS=W(Ld,[["render",ap]]),ip={props:{path:{type:String,required:!0},method:{type:String,required:!0},tags:{type:Array,default:()=>[]},summary:{type:String,default:null},description:{type:String,default:null},deprecated:Boolean,currentLocale:{type:String,required:!0},server:{type:String,required:!1,default:""}},computed:{requestUrl(){return this.server+""+this.path},title(){return this.summary&&this.summary!==""?this.summary:this.path}}},sp=["id"],op=["textContent"],cp={key:0,class:"oapi-route-header__deprecated",role:"alert"},lp={class:"oapi-route-header__tags"},up=["innerHTML"];function dp(n,t,a,o,i,s){return b(),_("div",{class:we(["oapi-route-header",{"oapi-route-header--deprecated":a.deprecated}])},[v("h1",{id:"method-"+a.method,class:"oapi-route-header__title"},[v("span",{class:we(["oapi-method-tag",`oapi-method-tag--${a.method}`])},E(a.method),3),D(" "+E(s.title),1)],8,sp),v("div",{class:"oapi-route-header__path",onClick:t[0]||(t[0]=l=>n.$openapidoc.copyToClipboard(s.requestUrl,l))},[v("code",{textContent:E(s.requestUrl)},null,8,op)]),a.deprecated?(b(),_("div",cp,[v("span",null,E(n.$openapidoc.getLocaleText("openapidoc.deprecated")),1)])):O("",!0),v("div",lp,[(b(!0),_(L,null,M(a.tags,l=>(b(),_("span",{key:l,class:"oapi-route-header__tag"},E(l),1))),128))]),v("div",{class:"oapi-route-header__description",innerHTML:a.description},null,8,up)],2)}const us=W(ip,[["render",dp]]),pp={name:"OpenApiServer",props:{server:{type:Object,required:!0},currentLocale:{type:String,required:!0}},data(){return{}}},hp={class:"oapi-server"},mp={key:0,class:"oapi-server__url"},fp=["innerHTML"],gp={key:2,class:"oapi-server-vars"},yp={class:"oapi-server-vars__title"},bp={class:"oapi-server-var"},_p={class:"oapi-server-var__name"},vp=["innerHTML"],Sp={key:1,class:"oapi-server-var__default"},Ep={key:2,class:"oapi-server-var__enum"};function Op(n,t,a,o,i,s){return b(),_("div",hp,[a.server.url?(b(),_("div",mp,[v("code",null,E(a.server.url),1)])):O("",!0),a.server.description?(b(),_("div",{key:1,class:"oapi-server__description",innerHTML:n.$openapidocRef.tr(a.server,"description",a.currentLocale)},null,8,fp)):O("",!0),a.server.variables&&Object.keys(a.server.variables).length?(b(),_("div",gp,[v("div",yp,E(n.$openapidoc.getLocaleText("openapidoc.variables")),1),v("ul",null,[(b(!0),_(L,null,M(a.server.variables,(l,c)=>(b(),_("li",bp,[v("div",_p,[v("code",null,E(c),1)]),l.description?(b(),_("div",{key:0,class:"oapi-server-var__description",innerHTML:n.$openapidocRef.tr(l,"description",a.currentLocale)},null,8,vp)):O("",!0),l.default?(b(),_("div",Sp,[D(E(n.$openapidoc.getLocaleText("openapidoc.default"))+": ",1),v("code",null,E(l.default),1)])):O("",!0),l.enum?(b(),_("div",Ep,[D(E(n.$openapidoc.getLocaleText("openapidoc.enum"))+": ",1),(b(!0),_(L,null,M(l.enum,d=>(b(),_("span",{key:d},[v("code",null,E(d),1),D(E(" "))]))),128))])):O("",!0)]))),256))])])):O("",!0)])}const ds=W(pp,[["render",Op]]),kp={name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{getRoute(n){return{name:`openapi-${this.path_doc}-${this.file}${this.$openapidoc.I18nLocaleSuffix()}`,params:{type:"components"},hash:"#"+n}}}},wp={class:"oapi-sec-requirement"},Tp=["data-scheme"],Ap={class:"oapi-sec-requirement-item__scheme"},xp={class:"oapi-sec-requirement-item__scopes"};function Np(n,t,a,o,i,s){const l=Ui;return b(),_("div",wp,[v("ul",null,[(b(!0),_(L,null,M(a.securityRequirement,(c,d)=>(b(),_("li",{key:d,"data-scheme":d},[F(l,{to:s.getRoute(d),class:"oapi-sec-requirement-item"},{default:le(()=>[v("span",Ap,E(d),1),v("ul",xp,[(b(!0),_(L,null,M(c,e=>(b(),_("li",{key:e},[v("code",null,E(e),1)]))),128))])]),_:2},1032,["to"])],8,Tp))),128))])])}const ps=W(kp,[["render",Np],["__scopeId","data-v-8ae7efe1"]]),Cp={name:"OpenApiSecurity",components:{OpenApiSecurityRequirement:ps},props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}}},qp={class:"oapi-route-sec"},Rp={id:"security"},Lp={class:"oapi-route-sec__list"};function $p(n,t,a,o,i,s){const l=ps;return b(),_("div",qp,[v("h2",Rp,E(n.$openapidoc.getLocaleText("openapidoc.security")),1),v("ul",Lp,[(b(!0),_(L,null,M(a.security,(c,d)=>(b(),_("li",{key:d},[F(l,{"security-requirement":c,"current-locale":a.currentLocale,path_doc:a.path_doc,file:a.file},null,8,["security-requirement","current-locale","path_doc","file"])]))),128))])])}const hs=W(Cp,[["render",$p]]),Mp={components:{OpenApiParameter:ln},props:{title:{type:String,required:!1,default:"Parameters"},parameters:{type:Array,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}}},Dp={id:"parameters"},jp=["textContent"];function Ip(n,t,a,o,i,s){const l=ln;return b(),_("div",null,[v("h2",Dp,[v("span",{textContent:E(a.title)},null,8,jp)]),(b(!0),_(L,null,M(a.parameters,c=>(b(),V(l,{key:`${c.name}-${c.in||"def"}`,data:c,"current-locale":a.currentLocale},null,8,["data","current-locale"]))),128))])}const ot=W(Mp,[["render",Ip]]),Pp={name:"OpenApiRequestBody",components:{OpenApiMediaTypes:De},props:{requestBody:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})},isCb:Boolean,hPrefix:{type:String,default:""}}},Up={class:"oapi-req-body"},Bp={key:0,class:"oapi-req-body__required"},Hp=["innerHTML"];function Fp(n,t,a,o,i,s){const l=De;return b(),_("div",Up,[(b(),V(Xn(a.isCb?"h3":"h2"),{id:`${a.hPrefix}request-body`},{default:le(()=>[D(E(n.$openapidoc.getLocaleText("openapidoc.request_body")),1)]),_:1},8,["id"])),a.requestBody.required?(b(),_("div",Bp,E(n.$openapidoc.getLocaleText("openapidoc.required")),1)):O("",!0),a.requestBody.description?(b(),_("div",{key:1,class:"oapi-req-body__description",innerHTML:n.$openapidocRef.tr(a.requestBody,"description",a.currentLocale)},null,8,Hp)):O("",!0),a.requestBody.content?(b(),V(l,{key:2,data:a.requestBody.content,"current-locale":a.currentLocale},null,8,["data","current-locale"])):O("",!0)])}const ct=W(Pp,[["render",Fp]]),zp={name:"OpenApiResponses",components:{OpenApiResponse:st},props:{isCb:Boolean,hPrefix:{type:String,default:""},responses:{type:Object,required:!0},currentLocale:{type:String,required:!0},components:{type:Object,default:()=>({})}}},Kp={class:"oapi-responses"},Jp=["innerHTML"];function Gp(n,t,a,o,i,s){const l=st;return b(),_("div",Kp,[(b(),V(Xn(a.isCb?"h3":"h2"),{id:`${a.hPrefix}responses`},{default:le(()=>[D(E(n.$openapidoc.getLocaleText("openapidoc.responses")),1)]),_:1},8,["id"])),(b(!0),_(L,null,M(a.responses,(c,d)=>(b(),_("div",{key:d,class:"oapi-responses-item"},[(b(),V(Xn(a.isCb?"h4":"h3"),{id:`${a.hPrefix}response-${d}`,class:"oapi-responses-item__status"},{default:le(()=>[D(E(d),1)]),_:2},1032,["id"])),v("div",{class:"oapi-responses-item__description",innerHTML:n.$openapidocRef.tr(c,"description",a.currentLocale)},null,8,Jp),F(l,{lite:"","current-locale":a.currentLocale,response:c},null,8,["current-locale","response"])]))),128))])}const lt=W(zp,[["render",Gp]]),Wp={props:{items:{type:Object,required:!0}},data(){return{isOpen:!1,preSelectedSnippet:"javascript",selectedSnippet:"javascript",selectedLibrary:"xmlhttprequest"}},computed:{selectedText(){return this.selectedSnippet+" / "+this.selectedLibrary}},methods:{handleItemClick(n,t=null){t?(this.selectedSnippet=n,this.selectedLibrary=t,this.$emit("select",n,t),this.isOpen=!1):this.preSelectedSnippet=n}}},ms=n=>(Fo("data-v-5101a728"),n=n(),zo(),n),Zp={class:"oapi-dd-sub"},Vp=ms(()=>v("svg",{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1)),Xp={key:0,class:"oapi-dd-sub-list",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},Qp=["onClick"],Yp={class:"oapi-dd-sub-item"},eh={class:"oapi-dd-sub-item__title"},nh=ms(()=>v("span",{class:"oapi-dd-sub-item__icon"},[v("svg",{viewBox:"0 0 20 20",fill:"currentColor"},[v("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1)),th={key:0,class:"oapi-dd-sub-sub-menu"},rh=["onClick"];function ah(n,t,a,o,i,s){return b(),_("div",Zp,[v("button",{type:"button",class:we(["oapi-dd-sub__btn",{"oapi-dd-sub__btn--is-open":i.isOpen}]),onClick:t[0]||(t[0]=l=>i.isOpen=!i.isOpen)},[v("b",null,E(s.selectedText?s.selectedText:"Select Library"),1),Vp],2),F(Ho,{name:"oapi-dropdown"},{default:le(()=>[i.isOpen?(b(),_("ul",Xp,[(b(!0),_(L,null,M(a.items,(l,c)=>(b(),_("li",{key:c,role:"menuitem",class:"oapi-dd-sub-list__item",onClick:d=>s.handleItemClick(c)},[l?(b(),_(L,{key:0},[v("div",Yp,[v("span",eh,E(c),1),nh]),i.preSelectedSnippet===c?(b(),_("ul",th,[(b(!0),_(L,null,M(l,d=>(b(),_("li",{key:d,class:"oapi-dd-sub-sub-menu__item",onClick:e=>s.handleItemClick(c,d)},E(d),9,rh))),128))])):O("",!0)],64)):(b(),_(L,{key:1},[D(E(l.snippet),1)],64))],8,Qp))),128))])):O("",!0)]),_:1})])}const fs=W(Wp,[["render",ah],["__scopeId","data-v-5101a728"]]);/*!
 * Request Templater v1.3.1
 *
 * Copyright (C) 2012-2023 Pavel Kuz`min (@s00d).
 *
 * Date: Wed, 01 Nov 2023 11:34:05 GMT
 */function x(n){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(n)}function ih(n,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,gs(o.key),o)}}function Pe(n,t,a){return(t=gs(t))in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function y(n,t){if(n!==t)throw new TypeError("Cannot instantiate an arrow function")}function yn(n,t){return function(a){if(Array.isArray(a))return a}(n)||function(a,o){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var s,l,c,d,e=[],h=!0,m=!1;try{if(c=(i=i.call(a)).next,o===0){if(Object(i)!==i)return;h=!1}else for(;!(h=(s=c.call(i)).done)&&(e.push(s.value),e.length!==o);h=!0);}catch(f){m=!0,l=f}finally{try{if(!h&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(m)throw l}}return e}}(n,t)||function(a,o){if(a){if(typeof a=="string")return fa(a,o);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return fa(a,o)}}(n,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function fa(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=n[a];return o}function gs(n){var t=function(a,o){if(typeof a!="object"||a===null)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var s=i.call(a,o||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(a)}(n,"string");return typeof t=="symbol"?t:String(t)}var Nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $n=function(n){return n&&n.Math===Math&&n},ie=$n(typeof globalThis=="object"&&globalThis)||$n(typeof window=="object"&&window)||$n(typeof self=="object"&&self)||$n(typeof Nt=="object"&&Nt)||function(){return this}()||Nt||Function("return this")(),Tn={},Y=function(n){try{return!!n()}catch{return!0}},be=!Y(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),An=!Y(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),oh=An,Mn=Function.prototype.call,je=oh?Mn.bind(Mn):function(){return Mn.apply(Mn,arguments)},qr={},ys={}.propertyIsEnumerable,bs=Object.getOwnPropertyDescriptor,ch=bs&&!ys.call({1:2},1);qr.f=ch?function(n){var t=bs(this,n);return!!t&&t.enumerable}:ys;var Re,Gn,Rr=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}},_s=An,vs=Function.prototype,hr=vs.call,lh=_s&&vs.bind.bind(hr,hr),Q=_s?lh:function(n){return function(){return hr.apply(n,arguments)}},Ss=Q,uh=Ss({}.toString),dh=Ss("".slice),ze=function(n){return dh(uh(n),8,-1)},ph=Y,hh=ze,Ct=Object,mh=Q("".split),ut=ph(function(){return!Ct("z").propertyIsEnumerable(0)})?function(n){return hh(n)==="String"?mh(n,""):Ct(n)}:Ct,dt=function(n){return n==null},fh=dt,gh=TypeError,Ke=function(n){if(fh(n))throw new gh("Can't call method on "+n);return n},yh=ut,bh=Ke,un=function(n){return yh(bh(n))},qt=typeof document=="object"&&document.all,pt={all:qt,IS_HTMLDDA:qt===void 0&&qt!==void 0},_h=pt.all,se=pt.IS_HTMLDDA?function(n){return typeof n=="function"||n===_h}:function(n){return typeof n=="function"},ga=se,vh=pt.all,Ae=pt.IS_HTMLDDA?function(n){return typeof n=="object"?n!==null:ga(n)||n===vh}:function(n){return typeof n=="object"?n!==null:ga(n)},Rt=ie,Sh=se,ht=function(n,t){return arguments.length<2?(a=Rt[n],Sh(a)?a:void 0):Rt[n]&&Rt[n][t];var a},Es=Q({}.isPrototypeOf),Os=ie,Lt=typeof navigator<"u"&&String(navigator.userAgent)||"",ya=Os.process,ba=Os.Deno,_a=ya&&ya.versions||ba&&ba.version,va=_a&&_a.v8;va&&(Gn=(Re=va.split("."))[0]>0&&Re[0]<4?1:+(Re[0]+Re[1])),!Gn&&Lt&&(!(Re=Lt.match(/Edge\/(\d+)/))||Re[1]>=74)&&(Re=Lt.match(/Chrome\/(\d+)/))&&(Gn=+Re[1]);var Sn=Gn,Sa=Sn,Eh=Y,Oh=ie.String,ks=!!Object.getOwnPropertySymbols&&!Eh(function(){var n=Symbol("symbol detection");return!Oh(n)||!(Object(n)instanceof Symbol)||!Symbol.sham&&Sa&&Sa<41}),ws=ks&&!Symbol.sham&&typeof Symbol.iterator=="symbol",kh=ht,wh=se,Th=Es,Ah=Object,Ts=ws?function(n){return typeof n=="symbol"}:function(n){var t=kh("Symbol");return wh(t)&&Th(t.prototype,Ah(n))},xh=String,Nh=se,Ch=function(n){try{return xh(n)}catch{return"Object"}},qh=TypeError,mt=function(n){if(Nh(n))return n;throw new qh(Ch(n)+" is not a function")},Rh=mt,Lh=dt,Lr=function(n,t){var a=n[t];return Lh(a)?void 0:Rh(a)},$t=je,Mt=se,Dt=Ae,$h=TypeError,As={exports:{}},Ea=ie,Mh=Object.defineProperty,$r=function(n,t){try{Mh(Ea,n,{value:t,configurable:!0,writable:!0})}catch{Ea[n]=t}return t},Dh=$r,Oa="__core-js_shared__",Mr=ie[Oa]||Dh(Oa,{}),ka=Mr;(As.exports=function(n,t){return ka[n]||(ka[n]=t!==void 0?t:{})})("versions",[]).push({version:"3.33.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Dr=As.exports,jh=Ke,Ih=Object,Je=function(n){return Ih(jh(n))},Ph=Je,Uh=Q({}.hasOwnProperty),_e=Object.hasOwn||function(n,t){return Uh(Ph(n),t)},Bh=Q,Hh=0,Fh=Math.random(),zh=Bh(1 .toString),xs=function(n){return"Symbol("+(n===void 0?"":n)+")_"+zh(++Hh+Fh,36)},Kh=Dr,wa=_e,Jh=xs,Gh=ks,Wh=ws,rn=ie.Symbol,jt=Kh("wks"),Zh=Wh?rn.for||rn:rn&&rn.withoutSetter||Jh,ve=function(n){return wa(jt,n)||(jt[n]=Gh&&wa(rn,n)?rn[n]:Zh("Symbol."+n)),jt[n]},Vh=je,Ta=Ae,Aa=Ts,Xh=Lr,Qh=function(n,t){var a,o;if(t==="string"&&Mt(a=n.toString)&&!Dt(o=$t(a,n))||Mt(a=n.valueOf)&&!Dt(o=$t(a,n))||t!=="string"&&Mt(a=n.toString)&&!Dt(o=$t(a,n)))return o;throw new $h("Can't convert object to primitive value")},Yh=TypeError,em=ve("toPrimitive"),nm=function(n,t){if(!Ta(n)||Aa(n))return n;var a,o=Xh(n,em);if(o){if(t===void 0&&(t="default"),a=Vh(o,n,t),!Ta(a)||Aa(a))return a;throw new Yh("Can't convert object to primitive value")}return t===void 0&&(t="number"),Qh(n,t)},tm=Ts,jr=function(n){var t=nm(n,"string");return tm(t)?t:t+""},xa=Ae,mr=ie.document,rm=xa(mr)&&xa(mr.createElement),Ir=function(n){return rm?mr.createElement(n):{}},am=Ir,Ns=!be&&!Y(function(){return Object.defineProperty(am("div"),"a",{get:function(){return 7}}).a!==7}),im=be,sm=je,om=qr,cm=Rr,lm=un,um=jr,dm=_e,pm=Ns,Na=Object.getOwnPropertyDescriptor;Tn.f=im?Na:function(n,t){if(n=lm(n),t=um(t),pm)try{return Na(n,t)}catch{}if(dm(n,t))return cm(!sm(om.f,n,t),n[t])};var Ge={},Cs=be&&Y(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),hm=Ae,mm=String,fm=TypeError,xe=function(n){if(hm(n))return n;throw new fm(mm(n)+" is not an object")},gm=be,ym=Ns,bm=Cs,Dn=xe,Ca=jr,_m=TypeError,It=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,Pt="enumerable",Ut="configurable",Bt="writable";Ge.f=gm?bm?function(n,t,a){if(Dn(n),t=Ca(t),Dn(a),typeof n=="function"&&t==="prototype"&&"value"in a&&Bt in a&&!a[Bt]){var o=vm(n,t);o&&o[Bt]&&(n[t]=a.value,a={configurable:Ut in a?a[Ut]:o[Ut],enumerable:Pt in a?a[Pt]:o[Pt],writable:!1})}return It(n,t,a)}:It:function(n,t,a){if(Dn(n),t=Ca(t),Dn(a),ym)try{return It(n,t,a)}catch{}if("get"in a||"set"in a)throw new _m("Accessors not supported");return"value"in a&&(n[t]=a.value),n};var Sm=Ge,Em=Rr,ft=be?function(n,t,a){return Sm.f(n,t,Em(1,a))}:function(n,t,a){return n[t]=a,n},qs={exports:{}},fr=be,Om=_e,Rs=Function.prototype,km=fr&&Object.getOwnPropertyDescriptor,Ht=Om(Rs,"name"),Pr={EXISTS:Ht,PROPER:Ht&&(function(){}).name==="something",CONFIGURABLE:Ht&&(!fr||fr&&km(Rs,"name").configurable)},wm=se,gr=Mr,Tm=Q(Function.toString);wm(gr.inspectSource)||(gr.inspectSource=function(n){return Tm(n)});var et,bn,nt,Ls=gr.inspectSource,Am=se,qa=ie.WeakMap,xm=Am(qa)&&/native code/.test(String(qa)),Nm=xs,Ra=Dr("keys"),Ur=function(n){return Ra[n]||(Ra[n]=Nm(n))},Br={},Cm=xm,$s=ie,qm=Ae,Rm=ft,Ft=_e,zt=Mr,Lm=Ur,$m=Br,La="Object already initialized",yr=$s.TypeError,Mm=$s.WeakMap;if(Cm||zt.state){var fe=zt.state||(zt.state=new Mm);fe.get=fe.get,fe.has=fe.has,fe.set=fe.set,et=function(n,t){if(fe.has(n))throw new yr(La);return t.facade=n,fe.set(n,t),t},bn=function(n){return fe.get(n)||{}},nt=function(n){return fe.has(n)}}else{var Qe=Lm("state");$m[Qe]=!0,et=function(n,t){if(Ft(n,Qe))throw new yr(La);return t.facade=n,Rm(n,Qe,t),t},bn=function(n){return Ft(n,Qe)?n[Qe]:{}},nt=function(n){return Ft(n,Qe)}}var Hr={set:et,get:bn,has:nt,enforce:function(n){return nt(n)?bn(n):et(n,{})},getterFor:function(n){return function(t){var a;if(!qm(t)||(a=bn(t)).type!==n)throw new yr("Incompatible receiver, "+n+" required");return a}}},Fr=Q,Dm=Y,jm=se,jn=_e,br=be,Im=Pr.CONFIGURABLE,Pm=Ls,Um=Hr.enforce,Bm=Hr.get,$a=String,Wn=Object.defineProperty,Hm=Fr("".slice),Fm=Fr("".replace),zm=Fr([].join),Km=br&&!Dm(function(){return Wn(function(){},"length",{value:8}).length!==8}),Jm=String(String).split("String"),Gm=qs.exports=function(n,t,a){Hm($a(t),0,7)==="Symbol("&&(t="["+Fm($a(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),a&&a.getter&&(t="get "+t),a&&a.setter&&(t="set "+t),(!jn(n,"name")||Im&&n.name!==t)&&(br?Wn(n,"name",{value:t,configurable:!0}):n.name=t),Km&&a&&jn(a,"arity")&&n.length!==a.arity&&Wn(n,"length",{value:a.arity});try{a&&jn(a,"constructor")&&a.constructor?br&&Wn(n,"prototype",{writable:!1}):n.prototype&&(n.prototype=void 0)}catch{}var o=Um(n);return jn(o,"source")||(o.source=zm(Jm,typeof t=="string"?t:"")),n};Function.prototype.toString=Gm(function(){return jm(this)&&Bm(this).source||Pm(this)},"toString");var Ms=qs.exports,Wm=se,Zm=Ge,Vm=Ms,Xm=$r,xn=function(n,t,a,o){o||(o={});var i=o.enumerable,s=o.name!==void 0?o.name:t;if(Wm(a)&&Vm(a,s,o),o.global)i?n[t]=a:Xm(t,a);else{try{o.unsafe?n[t]&&(i=!0):delete n[t]}catch{}i?n[t]=a:Zm.f(n,t,{value:a,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return n},Ds={},Qm=Math.ceil,Ym=Math.floor,ef=Math.trunc||function(n){var t=+n;return(t>0?Ym:Qm)(t)},gt=function(n){var t=+n;return t!=t||t===0?0:ef(t)},nf=gt,tf=Math.max,rf=Math.min,af=gt,sf=Math.min,Nn=function(n){return n>0?sf(af(n),9007199254740991):0},of=Nn,yt=function(n){return of(n.length)},cf=un,lf=function(n,t){var a=nf(n);return a<0?tf(a+t,0):rf(a,t)},uf=yt,Ma=function(n){return function(t,a,o){var i,s=cf(t),l=uf(s),c=lf(o,l);if(n&&a!=a){for(;l>c;)if((i=s[c++])!=i)return!0}else for(;l>c;c++)if((n||c in s)&&s[c]===a)return n||c||0;return!n&&-1}},df={includes:Ma(!0),indexOf:Ma(!1)},Kt=_e,pf=un,hf=df.indexOf,mf=Br,Da=Q([].push),js=function(n,t){var a,o=pf(n),i=0,s=[];for(a in o)!Kt(mf,a)&&Kt(o,a)&&Da(s,a);for(;t.length>i;)Kt(o,a=t[i++])&&(~hf(s,a)||Da(s,a));return s},zr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ff=js,gf=zr.concat("length","prototype");Ds.f=Object.getOwnPropertyNames||function(n){return ff(n,gf)};var Is={};Is.f=Object.getOwnPropertySymbols;var yf=ht,bf=Ds,_f=Is,vf=xe,Sf=Q([].concat),Ef=yf("Reflect","ownKeys")||function(n){var t=bf.f(vf(n)),a=_f.f;return a?Sf(t,a(n)):t},ja=_e,Of=Ef,kf=Tn,wf=Ge,Tf=Y,Af=se,xf=/#|\.prototype\./,Cn=function(n,t){var a=Cf[Nf(n)];return a===Rf||a!==qf&&(Af(t)?Tf(t):!!t)},Nf=Cn.normalize=function(n){return String(n).replace(xf,".").toLowerCase()},Cf=Cn.data={},qf=Cn.NATIVE="N",Rf=Cn.POLYFILL="P",Lf=Cn,Jt=ie,$f=Tn.f,Mf=ft,Df=xn,jf=$r,If=function(n,t,a){for(var o=Of(t),i=wf.f,s=kf.f,l=0;l<o.length;l++){var c=o[l];ja(n,c)||a&&ja(a,c)||i(n,c,s(t,c))}},Pf=Lf,oe=function(n,t){var a,o,i,s,l,c=n.target,d=n.global,e=n.stat;if(a=d?Jt:e?Jt[c]||jf(c,{}):(Jt[c]||{}).prototype)for(o in t){if(s=t[o],i=n.dontCallGetSet?(l=$f(a,o))&&l.value:a[o],!Pf(d?o:c+(e?".":"#")+o,n.forced)&&i!==void 0){if(typeof s==typeof i)continue;If(s,i)}(n.sham||i&&i.sham)&&Mf(s,"sham",!0),Df(a,o,s,n)}},Uf=ze,Bf=Q,En=function(n){if(Uf(n)==="Function")return Bf(n)},Ps={};Ps[ve("toStringTag")]="z";var Gt,Kr=String(Ps)==="[object z]",Hf=Kr,Ff=se,Zn=ze,zf=ve("toStringTag"),Kf=Object,Jf=Zn(function(){return arguments}())==="Arguments",Jr=Hf?Zn:function(n){var t,a,o;return n===void 0?"Undefined":n===null?"Null":typeof(a=function(i,s){try{return i[s]}catch{}}(t=Kf(n),zf))=="string"?a:Jf?Zn(t):(o=Zn(t))==="Object"&&Ff(t.callee)?"Arguments":o},Gf=Jr,Wf=String,We=function(n){if(Gf(n)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Wf(n)},Zf=Ae,Vf=ze,Xf=ve("match"),Qf=function(n){var t;return Zf(n)&&((t=n[Xf])!==void 0?!!t:Vf(n)==="RegExp")},Yf=TypeError,Us=function(n){if(Qf(n))throw new Yf("The method doesn't accept regular expressions");return n},eg=ve("match"),Bs=function(n){var t=/./;try{"/./"[n](t)}catch{try{return t[eg]=!1,"/./"[n](t)}catch{}}return!1},ng=oe,Hs=En,tg=Tn.f,rg=Nn,Ia=We,ag=Us,ig=Ke,sg=Bs,Pa=Hs("".startsWith),og=Hs("".slice),cg=Math.min,Ua=sg("startsWith");ng({target:"String",proto:!0,forced:!!(Ua||(Gt=tg(String.prototype,"startsWith"),!Gt||Gt.writable))&&!Ua},{startsWith:function(n){var t=Ia(ig(this));ag(n);var a=rg(cg(arguments.length>1?arguments[1]:void 0,t.length)),o=Ia(n);return Pa?Pa(t,o,a):og(t,a,a+o.length)===o}});var lg=oe,Fs=En,ug=Tn.f,dg=Nn,Ba=We,pg=Us,hg=Ke,mg=Bs,Ha=Fs("".endsWith),fg=Fs("".slice),gg=Math.min,zs=mg("endsWith"),yg=!zs&&!!function(){var n=ug(String.prototype,"endsWith");return n&&!n.writable}();lg({target:"String",proto:!0,forced:!yg&&!zs},{endsWith:function(n){var t=Ba(hg(this));pg(n);var a=arguments.length>1?arguments[1]:void 0,o=t.length,i=a===void 0?o:gg(dg(a),o),s=Ba(n);return Ha?Ha(t,s,i):fg(t,i-s.length,i)===s}});var bg=mt,_g=An,vg=En(En.bind),Sg=ze,Gr=Array.isArray||function(n){return Sg(n)==="Array"},Eg=Q,Og=Y,Ks=se,kg=Jr,wg=Ls,Js=function(){},Tg=[],Gs=ht("Reflect","construct"),Wr=/^\s*(?:class|function)\b/,Ag=Eg(Wr.exec),xg=!Wr.test(Js),mn=function(n){if(!Ks(n))return!1;try{return Gs(Js,Tg,n),!0}catch{return!1}},Ws=function(n){if(!Ks(n))return!1;switch(kg(n)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return xg||!!Ag(Wr,wg(n))}catch{return!0}};Ws.sham=!0;var Ng=!Gs||Og(function(){var n;return mn(mn.call)||!mn(Object)||!mn(function(){n=!0})||n})?Ws:mn,Fa=Gr,Cg=Ng,qg=Ae,Rg=ve("species"),za=Array,Lg=function(n){var t;return Fa(n)&&(t=n.constructor,(Cg(t)&&(t===za||Fa(t.prototype))||qg(t)&&(t=t[Rg])===null)&&(t=void 0)),t===void 0?za:t},Zs=function(n,t){return new(Lg(n))(t===0?0:t)},$g=function(n,t){return bg(n),t===void 0?n:_g?vg(n,t):function(){return n.apply(t,arguments)}},Mg=ut,Dg=Je,jg=yt,Ig=Zs,Ka=Q([].push),Le=function(n){var t=n===1,a=n===2,o=n===3,i=n===4,s=n===6,l=n===7,c=n===5||s;return function(d,e,h,m){for(var f,g,p=Dg(d),u=Mg(p),r=$g(e,h),S=jg(u),w=0,k=m||Ig,T=t?k(d,S):a||l?k(d,0):void 0;S>w;w++)if((c||w in u)&&(g=r(f=u[w],w,p),n))if(t)T[w]=g;else if(g)switch(n){case 3:return!0;case 5:return f;case 6:return w;case 2:Ka(T,f)}else switch(n){case 4:return!1;case 7:Ka(T,f)}return s?-1:o||i?i:T}},bt={forEach:Le(0),map:Le(1),filter:Le(2),some:Le(3),every:Le(4),find:Le(5),findIndex:Le(6),filterReject:Le(7)},Pg=Y,_t=function(n,t){var a=[][n];return!!a&&Pg(function(){a.call(null,t||function(){return 1},1)})},Ug=bt.forEach,_r=_t("forEach")?[].forEach:function(n){return Ug(this,n,arguments.length>1?arguments[1]:void 0)};oe({target:"Array",proto:!0,forced:[].forEach!==_r},{forEach:_r});var Bg=Jr,Hg=Kr?{}.toString:function(){return"[object "+Bg(this)+"]"};Kr||xn(Object.prototype,"toString",Hg,{unsafe:!0});var Wt=Ir("span").classList,Ja=Wt&&Wt.constructor&&Wt.constructor.prototype,Ga=ie,Wa={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Fg=Ja===Object.prototype?void 0:Ja,Zt=_r,zg=ft,Vs=function(n){if(n&&n.forEach!==Zt)try{zg(n,"forEach",Zt)}catch{n.forEach=Zt}};for(var Vt in Wa)Wa[Vt]&&Vs(Ga[Vt]&&Ga[Vt].prototype);Vs(Fg);var Kg=Y,Jg=Sn,Gg=ve("species"),Zr=function(n){return Jg>=51||!Kg(function(){var t=[];return(t.constructor={})[Gg]=function(){return{foo:1}},t[n](Boolean).foo!==1})},Wg=bt.filter;oe({target:"Array",proto:!0,forced:!Zr("filter")},{filter:function(n){return Wg(this,n,arguments.length>1?arguments[1]:void 0)}});var Zg=Q([].slice),Xs=Q,Vg=mt,Xg=Ae,Qg=_e,Za=Zg,Yg=An,Va=Function,ey=Xs([].concat),ny=Xs([].join),Xt={},Xa=Yg?Va.bind:function(n){var t=Vg(this),a=t.prototype,o=Za(arguments,1),i=function(){var s=ey(o,Za(arguments));return this instanceof i?function(l,c,d){if(!Qg(Xt,c)){for(var e=[],h=0;h<c;h++)e[h]="a["+h+"]";Xt[c]=Va("C,a","return new C("+ny(e,",")+")")}return Xt[c](l,d)}(t,s.length,s):t.apply(n,s)};return Xg(a)&&(i.prototype=a),i};oe({target:"Function",proto:!0,forced:Function.bind!==Xa},{bind:Xa});var ty=xe,Qs=function(){var n=ty(this),t="";return n.hasIndices&&(t+="d"),n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.dotAll&&(t+="s"),n.unicode&&(t+="u"),n.unicodeSets&&(t+="v"),n.sticky&&(t+="y"),t},Vr=Y,Xr=ie.RegExp,vr=Vr(function(){var n=Xr("a","y");return n.lastIndex=2,n.exec("abcd")!==null}),ry=vr||Vr(function(){return!Xr("a","y").sticky}),ay={BROKEN_CARET:vr||Vr(function(){var n=Xr("^r","gy");return n.lastIndex=2,n.exec("str")!==null}),MISSED_STICKY:ry,UNSUPPORTED_Y:vr},Ys={},iy=js,sy=zr,Qr=Object.keys||function(n){return iy(n,sy)},oy=be,cy=Cs,ly=Ge,uy=xe,dy=un,py=Qr;Ys.f=oy&&!cy?Object.defineProperties:function(n,t){uy(n);for(var a,o=dy(t),i=py(t),s=i.length,l=0;s>l;)ly.f(n,a=i[l++],o[a]);return n};var In,hy=ht("document","documentElement"),my=xe,fy=Ys,Qa=zr,gy=Br,yy=hy,by=Ir,Sr="prototype",Er="script",eo=Ur("IE_PROTO"),Qt=function(){},no=function(n){return"<"+Er+">"+n+"</"+Er+">"},Ya=function(n){n.write(no("")),n.close();var t=n.parentWindow.Object;return n=null,t},Vn=function(){try{In=new ActiveXObject("htmlfile")}catch{}var n,t,a;Vn=typeof document<"u"?document.domain&&In?Ya(In):(t=by("iframe"),a="java"+Er+":",t.style.display="none",yy.appendChild(t),t.src=String(a),(n=t.contentWindow.document).open(),n.write(no("document.F=Object")),n.close(),n.F):Ya(In);for(var o=Qa.length;o--;)delete Vn[Sr][Qa[o]];return Vn()};gy[eo]=!0;var ei,Yt,_y=Object.create||function(n,t){var a;return n!==null?(Qt[Sr]=my(n),a=new Qt,Qt[Sr]=null,a[eo]=n):a=Vn(),t===void 0?a:fy.f(a,t)},vy=Y,Sy=ie.RegExp,Ey=vy(function(){var n=Sy(".","s");return!(n.dotAll&&n.test(`
`)&&n.flags==="s")}),Oy=Y,ky=ie.RegExp,wy=Oy(function(){var n=ky("(?<a>b)","g");return n.exec("b").groups.a!=="b"||"b".replace(n,"$<a>c")!=="bc"}),an=je,vt=Q,Ty=We,Ay=Qs,xy=ay,Ny=_y,Cy=Hr.get,qy=Ey,Ry=wy,Ly=Dr("native-string-replace",String.prototype.replace),tt=RegExp.prototype.exec,Or=tt,$y=vt("".charAt),My=vt("".indexOf),Dy=vt("".replace),er=vt("".slice),nr=(Yt=/b*/g,an(tt,ei=/a/,"a"),an(tt,Yt,"a"),ei.lastIndex!==0||Yt.lastIndex!==0),ni=xy.BROKEN_CARET,tr=/()??/.exec("")[1]!==void 0;(nr||tr||ni||qy||Ry)&&(Or=function(n){var t,a,o,i,s,l,c,d=this,e=Cy(d),h=Ty(n),m=e.raw;if(m)return m.lastIndex=d.lastIndex,t=an(Or,m,h),d.lastIndex=m.lastIndex,t;var f=e.groups,g=ni&&d.sticky,p=an(Ay,d),u=d.source,r=0,S=h;if(g&&(p=Dy(p,"y",""),My(p,"g")===-1&&(p+="g"),S=er(h,d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&$y(h,d.lastIndex-1)!==`
`)&&(u="(?: "+u+")",S=" "+S,r++),a=new RegExp("^(?:"+u+")",p)),tr&&(a=new RegExp("^"+u+"$(?!\\s)",p)),nr&&(o=d.lastIndex),i=an(tt,g?a:d,S),g?i?(i.input=er(i.input,r),i[0]=er(i[0],r),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:nr&&i&&(d.lastIndex=d.global?i.index+i[0].length:o),tr&&i&&i.length>1&&an(Ly,i[0],a,function(){for(s=1;s<arguments.length-2;s++)arguments[s]===void 0&&(i[s]=void 0)}),i&&f)for(i.groups=l=Ny(null),s=0;s<f.length;s++)l[(c=f[s])[0]]=i[c[1]];return i});var rt=Or;oe({target:"RegExp",proto:!0,forced:/./.exec!==rt},{exec:rt});var jy=An,to=Function.prototype,ti=to.apply,ri=to.call,Iy=typeof Reflect=="object"&&Reflect.apply||(jy?ri.bind(ti):function(){return ri.apply(ti,arguments)}),ai=En,ii=xn,Py=rt,si=Y,ro=ve,Uy=ft,By=ro("species"),rr=RegExp.prototype,ao=function(n,t,a,o){var i=ro(n),s=!si(function(){var e={};return e[i]=function(){return 7},""[n](e)!==7}),l=s&&!si(function(){var e=!1,h=/a/;return n==="split"&&((h={}).constructor={},h.constructor[By]=function(){return h},h.flags="",h[i]=/./[i]),h.exec=function(){return e=!0,null},h[i](""),!e});if(!s||!l||a){var c=ai(/./[i]),d=t(i,""[n],function(e,h,m,f,g){var p=ai(e),u=h.exec;return u===Py||u===rr.exec?s&&!g?{done:!0,value:c(h,m,f)}:{done:!0,value:p(m,h,f)}:{done:!1}});ii(String.prototype,n,d[0]),ii(rr,i,d[1])}o&&Uy(rr[i],"sham",!0)},Yr=Q,Hy=gt,Fy=We,zy=Ke,Ky=Yr("".charAt),oi=Yr("".charCodeAt),Jy=Yr("".slice),ci=function(n){return function(t,a){var o,i,s=Fy(zy(t)),l=Hy(a),c=s.length;return l<0||l>=c?n?"":void 0:(o=oi(s,l))<55296||o>56319||l+1===c||(i=oi(s,l+1))<56320||i>57343?n?Ky(s,l):o:n?Jy(s,l,l+2):i-56320+(o-55296<<10)+65536}},Gy={codeAt:ci(!1),charAt:ci(!0)}.charAt,io=function(n,t,a){return t+(a?Gy(n,t).length:1)},ea=Q,Wy=Je,Zy=Math.floor,ar=ea("".charAt),Vy=ea("".replace),ir=ea("".slice),Xy=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Qy=/\$([$&'`]|\d{1,2})/g,li=je,Yy=xe,eb=se,nb=ze,tb=rt,rb=TypeError,so=function(n,t){var a=n.exec;if(eb(a)){var o=li(a,n,t);return o!==null&&Yy(o),o}if(nb(n)==="RegExp")return li(tb,n,t);throw new rb("RegExp#exec called on incompatible receiver")},ab=Iy,ui=je,St=Q,ib=ao,sb=Y,ob=xe,cb=se,lb=dt,ub=gt,db=Nn,Ye=We,pb=Ke,hb=io,mb=Lr,fb=function(n,t,a,o,i,s){var l=a+n.length,c=o.length,d=Qy;return i!==void 0&&(i=Wy(i),d=Xy),Vy(s,d,function(e,h){var m;switch(ar(h,0)){case"$":return"$";case"&":return n;case"`":return ir(t,0,a);case"'":return ir(t,l);case"<":m=i[ir(h,1,-1)];break;default:var f=+h;if(f===0)return e;if(f>c){var g=Zy(f/10);return g===0?e:g<=c?o[g-1]===void 0?ar(h,1):o[g-1]+ar(h,1):e}m=o[f-1]}return m===void 0?"":m})},gb=so,kr=ve("replace"),yb=Math.max,bb=Math.min,_b=St([].concat),sr=St([].push),di=St("".indexOf),pi=St("".slice),vb="a".replace(/./,"$0")==="$0",hi=!!/./[kr]&&/./[kr]("a","$0")==="";ib("replace",function(n,t,a){var o=hi?"$":"$0";return[function(i,s){var l=pb(this),c=lb(i)?void 0:mb(i,kr);return c?ui(c,i,l,s):ui(t,Ye(l),i,s)},function(i,s){var l=ob(this),c=Ye(i);if(typeof s=="string"&&di(s,o)===-1&&di(s,"$<")===-1){var d=a(t,l,c,s);if(d.done)return d.value}var e=cb(s);e||(s=Ye(s));var h,m=l.global;m&&(h=l.unicode,l.lastIndex=0);for(var f,g=[];(f=gb(l,c))!==null&&(sr(g,f),m);)Ye(f[0])===""&&(l.lastIndex=hb(c,db(l.lastIndex),h));for(var p,u="",r=0,S=0;S<g.length;S++){for(var w,k=Ye((f=g[S])[0]),T=yb(bb(ub(f.index),c.length),0),N=[],j=1;j<f.length;j++)sr(N,(p=f[j])===void 0?p:String(p));var $=f.groups;if(e){var R=_b([k],N,T,c);$!==void 0&&sr(R,$),w=Ye(ab(s,void 0,R))}else w=fb(k,c,T,N,$,s);T>=r&&(u+=pi(c,r,T)+w,r=T+k.length)}return u+pi(c,r)}]},!!sb(function(){var n=/./;return n.exec=function(){var t=[];return t.groups={a:"7"},t},"".replace(n,"$<a>")!=="7"})||!vb||hi);var mi=Ms,Sb=Ge,Eb=be,Ob=Pr.EXISTS,oo=Q,kb=function(n,t,a){return a.get&&mi(a.get,t,{getter:!0}),a.set&&mi(a.set,t,{setter:!0}),Sb.f(n,t,a)},co=Function.prototype,wb=oo(co.toString),lo=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,Tb=oo(lo.exec);Eb&&!Ob&&kb(co,"name",{configurable:!0,get:function(){try{return Tb(lo,wb(this))[1]}catch{return""}}}),oe({target:"Array",stat:!0},{isArray:Gr});var Ab=bt.map;oe({target:"Array",proto:!0,forced:!Zr("map")},{map:function(n){return Ab(this,n,arguments.length>1?arguments[1]:void 0)}});var xb=oe,Nb=ut,Cb=un,qb=_t,Rb=Q([].join);xb({target:"Array",proto:!0,forced:Nb!==Object||!qb("join",",")},{join:function(n){return Rb(Cb(this),n===void 0?",":n)}});var Lb=!Y(function(){function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype}),$b=_e,Mb=se,Db=Je,jb=Lb,fi=Ur("IE_PROTO"),wr=Object,Ib=wr.prototype,Pb=jb?wr.getPrototypeOf:function(n){var t=Db(n);if($b(t,fi))return t[fi];var a=t.constructor;return Mb(a)&&t instanceof a?a.prototype:t instanceof wr?Ib:null},uo=be,Ub=Y,po=Q,Bb=Pb,Hb=Qr,Fb=un,ho=po(qr.f),zb=po([].push),Kb=uo&&Ub(function(){var n=Object.create(null);return n[2]=2,!ho(n,2)}),gi=function(n){return function(t){for(var a,o=Fb(t),i=Hb(o),s=Kb&&Bb(o)===null,l=i.length,c=0,d=[];l>c;)a=i[c++],uo&&!(s?a in o:ho(o,a))||zb(d,n?[a,o[a]]:o[a]);return d}},mo={entries:gi(!0),values:gi(!1)},Jb=mo.entries;oe({target:"Object",stat:!0},{entries:function(n){return Jb(n)}});var Gb=TypeError,Wb=jr,Zb=Ge,Vb=Rr,Xb=oe,Qb=Y,Yb=Gr,e_=Ae,n_=Je,t_=yt,yi=function(n){if(n>9007199254740991)throw Gb("Maximum allowed index exceeded");return n},bi=function(n,t,a){var o=Wb(t);o in n?Zb.f(n,o,Vb(0,a)):n[o]=a},r_=Zs,a_=Zr,i_=Sn,fo=ve("isConcatSpreadable"),s_=i_>=51||!Qb(function(){var n=[];return n[fo]=!1,n.concat()[0]!==n}),o_=function(n){if(!e_(n))return!1;var t=n[fo];return t!==void 0?!!t:Yb(n)};Xb({target:"Array",proto:!0,arity:1,forced:!s_||!a_("concat")},{concat:function(n){var t,a,o,i,s,l=n_(this),c=r_(l,0),d=0;for(t=-1,o=arguments.length;t<o;t++)if(o_(s=t===-1?l:arguments[t]))for(i=t_(s),yi(d+i),a=0;a<i;a++,d++)a in s&&bi(c,d,s[a]);else yi(d+1),bi(c,d++,s);return c.length=d,c}});var c_=Je,_i=Qr;oe({target:"Object",stat:!0,forced:Y(function(){_i(1)})},{keys:function(n){return _i(c_(n))}});var l_=je,u_=xe,d_=dt,p_=Nn,or=We,h_=Ke,m_=Lr,f_=io,vi=so;ao("match",function(n,t,a){return[function(o){var i=h_(this),s=d_(o)?void 0:m_(o,n);return s?l_(s,o,i):new RegExp(o)[n](or(i))},function(o){var i=u_(this),s=or(o),l=a(t,i,s);if(l.done)return l.value;if(!i.global)return vi(i,s);var c=i.unicode;i.lastIndex=0;for(var d,e=[],h=0;(d=vi(i,s))!==null;){var m=or(d[0]);e[h]=m,m===""&&(i.lastIndex=f_(s,p_(i.lastIndex),c)),h++}return h===0?null:e}]});var g_=mt,y_=Je,b_=ut,__=yt,v_=TypeError,Si=function(n){return function(t,a,o,i){g_(a);var s=y_(t),l=b_(s),c=__(s),d=n?c-1:0,e=n?-1:1;if(o<2)for(;;){if(d in l){i=l[d],d+=e;break}if(d+=e,n?d<0:c<=d)throw new v_("Reduce of empty array with no initial value")}for(;n?d>=0:c>d;d+=e)d in l&&(i=a(i,l[d],d,s));return i}},S_={left:Si(!1),right:Si(!0)},E_=ze(ie.process)==="process",O_=S_.left;oe({target:"Array",proto:!0,forced:!E_&&Sn>79&&Sn<83||!_t("reduce")},{reduce:function(n){var t=arguments.length;return O_(this,n,t,t>1?arguments[1]:void 0)}});var go=Q,k_=xn,na=Date.prototype,Ei="Invalid Date",yo="toString",w_=go(na[yo]),T_=go(na.getTime);String(new Date(NaN))!==Ei&&k_(na,yo,function(){var n=T_(this);return n==n?w_(this):Ei});var A_=je,x_=_e,N_=Es,C_=Qs,Oi=RegExp.prototype,q_=Pr.PROPER,R_=xn,L_=xe,ki=We,$_=Y,M_=function(n){var t=n.flags;return t!==void 0||"flags"in Oi||x_(n,"flags")||!N_(Oi,n)?t:A_(C_,n)},ta="toString",bo=RegExp.prototype[ta],D_=$_(function(){return bo.call({source:"a",flags:"b"})!=="/a/b"}),j_=q_&&bo.name!==ta;(D_||j_)&&R_(RegExp.prototype,ta,function(){var n=L_(this);return"/"+ki(n.source)+"/"+ki(M_(n))},{unsafe:!0});var I_=mo.values;oe({target:"Object",stat:!0},{values:function(n){return I_(n)}});var P_=bt.some;oe({target:"Array",proto:!0,forced:!_t("some")},{some:function(n){return P_(this,n,arguments.length>1?arguments[1]:void 0)}});var wi={"swift/urlsession":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
// Create a new URLRequest object
var request = URLRequest(url: URL(string: "`),e(h),e(`")!)

// Set the request method
request.httpMethod = "`),e(m),e(`"

// Set the request content type header
request.addValue("`),e(f),e(`", forHTTPHeaderField: "Content-Type")

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach((function(r){y(this,i),e(`
request.addValue("`),e(t(r.value)),e('", forHTTPHeaderField: "'),e(t(r.name)),e(`")
`)}).bind(this))),e(`

`),u.length>0&&(e(`
// Add cookies to the request
`),u.forEach((function(r){y(this,i),e(`
request.addValue("`),e(t(r.value)),e('", forHTTPHeaderField: "'),e(t(r.name)),e(`")
`)}).bind(this))),e(`

`),m==="POST"&&p.length>0&&(e(`// Set the request body
`),p.length===1&&p[0].type==="file"?e(`
let fileUrl = URL(fileURLWithPath: "/path/to/file")
let data = try Data(contentsOf: fileUrl)
request.httpBody = data
`):(e(`
let postDataDict = `),e(t(JSON.stringify(p.reduce((function(r,S){return y(this,i),Array.isArray(S.value)||x(S.value),r[S.name]=S.value,r}).bind(this),{})))),e(`
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
`),d},"swift/alamofire":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`
// Construct the request URL
let fullUrl = "`),e(h),e(`"

// Set up the request headers
var headers: HTTPHeaders = [:]
`),f.forEach((function(u){y(this,i),e(`
headers["`),e(t(u.name)),e('"] = "'),e(t(u.value)),e(`"
`)}).bind(this)),e(`

`),p.length>0&&(e(`
// Add cookies to the request
`),p.forEach((function(u){y(this,i),e(`
let cookie = HTTPCookie(properties: [
    .domain: "`),e(t(u.domain)),e(`",
    .path: "`),e(t(u.path)),e(`",
    .name: "`),e(t(u.name)),e(`",
    .value: "`),e(t(u.value)),e(`",
])!
HTTPCookieStorage.shared.setCookie(cookie)
`)}).bind(this)),e(`
`)),e(`

// Set up the request parameters
var parameters: Parameters = [:]
`),g.forEach((function(u){y(this,i),e(`
`),Array.isArray(u.value)||x(u.value)==="object"?(e(`
if let jsonData = try? JSONSerialization.data(withJSONObject: `),e(t(JSON.stringify(u.value))),e(`, options: []) {
    if let jsonString = String(data: jsonData, encoding: .utf8) {
        parameters["`),e(t(u.name)),e(`"] = jsonString
    }
}
`)):(e(`
parameters["`),e(t(u.name)),e('"] = "'),e(t(u.value)),e(`"
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
`),d},"scala/scalaj-http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import scalaj.http._

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(f)),e(`"
val headers = `),g.length>0?(e(`Seq(
`),g.forEach((function(r){y(this,i),e(`
  ("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Nil"),e(`
val cookies = `),u.length>0?(e(`Seq(
`),u.forEach((function(r){y(this,i),e(`
  HttpCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Nil"),e(`
val postData = `),p.length>0?(e(`Seq(
`),p.forEach((function(r){y(this,i),e(`
`),Array.isArray(r.value)||x(r.value)==="object"?(e(`
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
      `),p.forEach((function(r){y(this,i),e(`
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
`),d},"scala/http4s":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import cats.effect._
import org.http4s._
import org.http4s.client.blaze._
import org.http4s.client.dsl.io._
import org.http4s.headers._
import org.http4s.MediaType._

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(f)),e(`"
val headers = `),g.length>0?(e(`Headers(
`),g.forEach((function(r){y(this,i),e(`
  Header.apply("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Headers.empty"),e(`
val cookies = `),u.length>0?(e(`Seq(
`),u.forEach((function(r){y(this,i),e(`
  RequestCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`"),
`)}).bind(this)),e(`
)`)):e("Seq.empty"),e(`
val postData = `),p.length>0?(e(`UrlForm(
`),p.forEach((function(r){y(this,i),e(`
`),Array.isArray(r.value)||x(r.value)==="object"?(e(`
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
`),d},"scala/akka":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer
import akka.stream.scaladsl._
import scala.concurrent.Future
import scala.util.{Failure, Success}

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(f)),e(`"
val headers = List(
`),g.forEach((function(r){y(this,i),e(`
  HttpHeader.parse("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[HttpHeader],
`)}).bind(this)),e(`
)
val cookies = List(
`),u.forEach((function(r){y(this,i),e(`
  HttpCookiePair("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`").asInstanceOf[HttpCookiePair],
`)}).bind(this)),e(`
)
val postData = List(
`),p.forEach((function(r){y(this,i),e(`
  `),Array.isArray(r.value)||x(r.value)==="object"?(e(`
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
`),d},"rust/surf":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`
use surf::http::{Method, Url, headers::{Headers, HeaderValue}};

// Construct the request URL
let url = Url::new("`),e(t(h)),e(`").unwrap();

// Set up the request
let mut req = surf::Request::new(`),e(t(m)),e(` , url);

`),f.length>0&&(e(`
// Add headers to the request
`),f.forEach((function(u){y(this,i),e(`
req.insert_header("`),e(t(u.name)),e('", HeaderValue::from_str("'),e(t(u.value)),e(`").unwrap());
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
// Add cookies to the request
`),p.forEach((function(u){y(this,i),e(`
req.insert_cookie(surf::http::Cookie::new("`),e(t(u.name)),e('", "'),e(t(u.value)),e(`"));
`)}).bind(this)),e(`
`)),e(`

`),g.length>0&&(e(`
// Send the request
let body = `),g.length===1&&g[0].type==="file"?(e(`
surf::Body::from(surf::http::Form::from(`),g[0].value,e(`))
`)):(e(`
surf::Body::from("`),e(t(g.map((function(u){return y(this,i),Array.isArray(u.value)||x(u.value)==="object"?u.name+"="+encodeURIComponent(JSON.stringify(u.value)):u.name+"="+encodeURIComponent(u.value)}).bind(this)).join("&"))),e(`")
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
`),d},"rust/reqwest":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
let url = "`),e(t(h)),e(`";
let method = "`),e(t(m)),e(`";
let mime_type = "`),e(t(f)),e(`";

let headers = reqwest::header::HeaderMap::new();
`),g.forEach((function(r){y(this,i),e(`
headers.insert("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`".parse().unwrap());
`)}).bind(this)),e(`

let mut cookies = reqwest::cookie::CookieJar::new();
`),u.forEach((function(r){y(this,i),e(`
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
let post_data = "`),e(t(p.map((function(r){return y(this,i),Array.isArray(r.value)||x(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`";
let request_builder = request_builder.body(post_data);
`)),e(`
`)),e(`

let response = request_builder.send().await.unwrap();
let response_text = response.text().await.unwrap();
println!("Response: {}", response_text);
`),d},"rust/hyper":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
// Create a new Hyper client object
let client = hyper::Client::new();

// Construct the request URL
let full_url = "`),e(t(h)),e(`";

// Create the request
let mut req = hyper::Request::new(hyper::Method::`),e(t(m)),e(`, full_url);

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach((function(r){y(this,i),e(`
req.headers_mut().insert(hyper::header::`),e(t(r.name)),e(", "),e(t(r.value)),e(`.parse().unwrap());
`)}).bind(this)),e(`
`)),e(`

`),u.length>0&&(e(`
// Add cookies to the request
`),u.forEach((function(r){y(this,i),e(`
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
let body = hyper::Body::from("`),e(t(p.map((function(r){return y(this,i),Array.isArray(r.value)||x(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`");
`)),e(`
req.headers_mut().insert(hyper::header::CONTENT_TYPE, "`),e(t(f)),e(`".parse().unwrap());
req.headers_mut().insert(hyper::header::CONTENT_LENGTH, body.len().into());
req.set_body(body);
`)),e(`

// Send the request and get the response
let res = client.request(req).await?;

// Print the response
println!("Response: \\n{:?}", res);
`),d},"ruby/restclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
require 'rest-client'

url = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(f)),e(`"

headers = {
  `),g.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" => "'),e(t(r.value)),e(`",
  `)}).bind(this)),e(`
}

cookies = {
  `),u.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" => "'),e(t(r.value)),e(`",
  `)}).bind(this)),e(`
}

`),m==="GET"?e(`
  response = RestClient.get(url, headers: headers, cookies: cookies)
`):(e(`
  body = "`),e(t(p.map((function(r){return y(this,i),Array.isArray(r.value)||x(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`"
  response = RestClient::`),e(t(m.downcase)),e(`(url, body, headers: headers, cookies: cookies, content_type: mimeType)
`)),e(`

puts "Response: #{response.body}"
`),d},"ruby/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
require 'net/http'
require 'uri'

url = URI("`),e(t(h)),e(`")
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(f)),e(`"

`),m==="GET"?e(`
  req = Net::HTTP::Get.new(url)
`):(e(`
  body = "`),e(t(p.map((function(r){return y(this,i),Array.isArray(r.value)||x(r.value)==="object"?r.name+"="+encodeURIComponent(JSON.stringify(r.value)):r.name+"="+encodeURIComponent(r.value)}).bind(this)).join("&"))),e(`"
  req = Net::HTTP::`),e(t(m.capitalize)),e(`.new(url)
  req.body = body
  req.content_type = mimeType
`)),e(`

`),g.forEach((function(r){y(this,i),e(`
  req['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`'
`)}).bind(this)),e(`

`),u.forEach((function(r){y(this,i),e(`
  req['Cookie'] = '`),e(t(r.name)),e("="),e(t(r.value)),e(`'
`)}).bind(this)),e(`

res = Net::HTTP.start(url.hostname, url.port, use_ssl: url.scheme == 'https') do |http|
  http.request(req)
end

puts "Response: #{res.body}"
`),d},"python/requests":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import requests

# Extract parameters from the options object
fullUrl = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(f)),e(`"
headers = {
    `),g.forEach((function(r){y(this,i),e(`
        '`),e(t(r.name)),e("': '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
}
postData = {
`),p.forEach((function(r){y(this,i),e(`
'`),e(t(r.name)),e("': "),Array.isArray(r.value)||x(r.value)==="object"?(e(`
    '`),e(t(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(t(r.value)),e(`',
`)),e(`
`)}).bind(this)),e(`
}
cookies = {
    `),u.forEach((function(r){y(this,i),e(`
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
`),d},"python/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import http.client

# Extract parameters from the options object
fullUrl = "`),e(t(h)),e(`"
method = "`),e(t(m)),e(`"
mimeType = "`),e(t(f)),e(`"
headers = [
    `),g.forEach((function(r){y(this,i),e(`
        ('`),e(t(r.name)),e("', '"),e(t(r.value)),e(`'),
    `)}).bind(this)),e(`
]
postData = {
`),p.forEach((function(r){y(this,i),e(`
'`),e(t(r.name)),e("': "),Array.isArray(r.value)||x(r.value)==="object"?(e(`
    '`),e(t(JSON.stringify(r.value))),e(`',
`)):(e(`
    '`),e(t(r.value)),e(`',
`)),e(`
`)}).bind(this)),e(`
}
cookies = {
    `),u.forEach((function(r){y(this,i),e(`
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
`),d},"powershell/webrequest":function(n,t,a,o){var i=this;t=t||function(h){return h==null?"":String(h).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(h){return s[h]||h}var d="";function e(h){h!=null&&(d+=h)}return e('$url = "'),e(t(url)),e(`"
$method = "`),e(t(method)),e(`"
$mimeType = "`),e(t(mimeType)),e(`"

$headers = @{
`),headers.forEach((function(h){y(this,i),e(`
  "`),e(t(h.name)),e('" = "'),e(t(h.value)),e(`",
`)}).bind(this)),e(`
}

$cookies = @{
`),cookies.forEach((function(h){y(this,i),e(`
  "`),e(t(h.name)),e('" = "'),e(t(h.value)),e(`",
`)}).bind(this)),e(`
}

`),method==="GET"?e(`
  $req = Invoke-WebRequest -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),postData.forEach((function(h){y(this,i),e(`
    "`),e(t(h.name)),e('" = '),Array.isArray(h.value)||x(h.value)==="object"?(e(`
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
`),d},"powershell/restmethod":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
$url = "`),e(t(h)),e(`"
$method = "`),e(t(m)),e(`"
$mimeType = "`),e(t(f)),e(`"

$headers = @{
`),g.forEach((function(r){y(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
}

$cookies = @{
`),u.forEach((function(r){y(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
}

`),m==="GET"?e(`
  $req = Invoke-RestMethod -Uri $url -Headers $headers -Cookies $cookies
`):(e(`
  $body = @{
  `),p.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" = '),Array.isArray(r.value)||x(r.value)==="object"?(e(`
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
`),d},"php/http2":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`

<?php
    $host = parse_url("`),e(t(h)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(t(h)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),f.forEach((function(u){y(this,i),e(' "'),e(t(u.name)),e('" => "'),e(t(u.value)),e('", ')}).bind(this)),e(` );
    $httpCookies = array( `),p.forEach((function(u){y(this,i),e(' "'),e(t(u.name)),e('" => "'),e(t(u.value)),e('", ')}).bind(this)),e(` );
    $httpBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
        `),Array.isArray(g)?(e(`
        $postData = array( `),g.forEach((function(u){y(this,i),e(" '"),e(t(u.name)),e("' => '"),e(t(Array.isArray(u.value)?JSON.stringify(u.value):encodeURIComponent(u.value))),e("', ")}).bind(this)),e(` );
        $httpBody = http_build_query($postData);
        `)):x(g)==="object"&&(e(`
        $httpBody = json_encode(`),e(t(g)),e(`);
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
`),d},"php/http1":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`

<?php
    $host = parse_url("`),e(t(h)),e(`", PHP_URL_HOST);
    $path = parse_url("`),e(t(h)),e(`", PHP_URL_PATH) ?: "/";
    $httpHeaders = array( `),f.forEach((function(u){y(this,i),e(' "'),e(t(u.name)),e(": "),e(t(u.value)),e('", ')}).bind(this)),e(` );
    $httpCookies = array( `),p.forEach((function(u){y(this,i),e(' "'),e(t(u.name)),e('" => "'),e(t(u.value)),e('", ')}).bind(this)),e(` );
    $httpBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(g)?(e(`
    `),g.length===1&&g[0].type==="file"?(e(`
    $httpBody = new http\\Message\\Body(fopen('`),e(t(g[0].value)),e(`', 'r'));
    `)):(e(`
     $postData = array( `),g.forEach((function(u){y(this,i),e(" '"),e(t(u.name)),e("' => '"),e(t(Array.isArray(u.value)?JSON.stringify(u.value):encodeURIComponent(u.value))),e("', ")}).bind(this)),e(` );
     $httpBody = new http\\Message\\Body(http_build_query($postData));
    `)),e(" ")):x(g)==="object"&&(e(`
    $postData = '`),e(t(JSON.stringify(g))),e(`';
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
`),d},"php/guzzle":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`
<?php
    use GuzzleHttp\\Exception\\RequestException;
    $client = new Client();
    $url = "`),e(t(h)),e(`";
    $headers = array( `),f.forEach((function(u){y(this,i),e(' "'),e(t(u.name)),e('" => "'),e(t(u.value)),e('", ')}).bind(this)),e(` );
    $cookies = array( `),p.forEach((function(u){y(this,i),e(' "'),e(t(u.name)),e('" => "'),e(t(u.value)),e('", ')}).bind(this)),e(` );
    $requestBody = null;
    if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(g)?(e(`
    `),g.length===1&&g[0].type==="file"?(e(`
        $requestBody = array( 'multipart' => [ [ 'name' => '`),e(t(g[0].name)),e("', 'contents' => fopen('"),e(t(g[0].value)),e(`', 'r') ] ] );
    `)):(e(`
        $postData = array( `),g.forEach((function(u){y(this,i),e(" '"),e(t(u.name)),e("' => '"),e(t(Array.isArray(u.value)?JSON.stringify(u.value):encodeURIComponent(u.value))),e("', ")}).bind(this)),e(` );
        $requestBody = http_build_query($postData);
    `)),e(`
    `)):x(g)==="object"&&(e(`
    $postData = '`),e(t(JSON.stringify(g))),e(`';
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
`),d},"php/curl":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`

<?php

    $url = "`),e(t(h)),e(`";
    $requestHeaders = array( `),f.forEach((function(u){y(this,i),e(' "'),e(t(u.name)),e(": "),e(t(u.value)),e('", ')}).bind(this)),e(` );
    $requestCookies = array( `),p.forEach((function(u){y(this,i),e(' "'),e(t(u.name)),e("=<"),e(t(u.value)),e('>", ')}).bind(this)),e(` );
    $requestBody = null; if ("`),e(t(m)),e(`" === "POST") {
    `),Array.isArray(g)?(e(`
    `),g.length===1&&g[0].type==="file"?(e(`
    $requestBody = array( '`),e(t(g[0].name)),e("' => new [](poeCURLFile('"),e(t(g[0].value)),e(`') );
    `)):(e(`
    $postData = array( `),g.forEach((function(u){y(this,i),e(`
        '`),e(t(u.name)),e("' => '"),e(t(Array.isArray(u.value)?JSON.stringify(u.value):encodeURIComponent(u.value))),e(`',
    `)}).bind(this)),e(` );
    $requestBody = http_build_query($postData); `)),e(`
    `)):x(g)==="object"&&(e(`
    $postData = array( `),Object.keys(g).forEach((function(u){y(this,i),e(`
        '`),e(t(u)),e("' => '"),e(t(Array.isArray(g[u])?JSON.stringify(g[u]):encodeURIComponent(g[u]))),e(`',
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
`),d},"perl/useragent":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`
`),e(`
use LWP::UserAgent;
my $ua = LWP::UserAgent->new;

`),e(`
my $fullUrl = '`),e(t(h)),e(`';

`),e(`
my $request = HTTP::Request->new('`),e(t(m)),e(`', $fullUrl);

`),f.length>0&&(e(`
`),e(`
`),f.forEach((function(u){y(this,i),e(`
    $request->header('`),e(t(u.name)),e("', '"),e(t(u.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
`),e(`
`),p.forEach((function(u){y(this,i),e(`
    $ua->cookie_jar->set_cookie(0, '`),e(t(u.name)),e("', '"),e(t(u.value)),e(`', '/', 'example.com');
`)}).bind(this)),e(`
`)),e(`

`),g.length>0&&(e(`
`),e(`
`),Array.isArray(g)?(e(`
`),g.length===1&&g[0].type==="file"?(e(`
my $file = '`),e(t(g[0].value)),e(`';
$request->content($file);
`)):(e(`
my $post_data = {
`),g.forEach((function(u){y(this,i),e(`
    '`),e(t(u.name)),e("' => '"),e(t(Array.isArray(u.value)?JSON.stringify(u.value):u.value)),e(`',
`)}).bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):x(g)==="object"&&(e(`
my $post_data = {
`),Object.keys(g).forEach((function(u){y(this,i),e(`
'`),e(t(u)),e("' => '"),e(t(Array.isArray(g[u])?JSON.stringify(g[u]):g[u])),e(`',
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
`),d},"perl/tiny":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
`),e(`
use HTTP::Tiny;
my $http = HTTP::Tiny->new;

`),e(`
my $fullUrl = '`),e(t(h)),e(`';

`),e(`
my $options = {
headers => {
    'Content-Type' => '`),e(t(f)),e(`',
    `),g.forEach((function(r){y(this,i),e(`
    '`),e(t(r.name)),e("' => '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
},
`),u.forEach((function(r){y(this,i),e(`
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
`),p.forEach((function(r){y(this,i),e(`
    '`),e(t(r.name)),e("' => '"),e(t(Array.isArray(r.value)?JSON.stringify(r.value):r.value)),e(`',
`)}).bind(this)),e(`
};
$options->{content} = join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data);
`)),e(`
`)):x(p)==="object"&&(e(`
my $post_data = {
`),Object.keys(p).forEach((function(r){y(this,i),e(`
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
`),d},"perl/request":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`
`),e(`
use HTTP::Request;
my $request = HTTP::Request->new('`),e(t(m)),e("', '"),e(t(h)),e(`');

`),f.length>0&&(e(`
`),e(`
`),f.forEach((function(u){y(this,i),e(`
$request->header('`),e(t(u.name)),e("', '"),e(t(u.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),p.length>0&&(e(`
`),e(`
`),p.forEach((function(u){y(this,i),e(`
$request->header('Cookie', '`),e(t(u.name)),e("="),e(t(u.value)),e(`');
`)}).bind(this)),e(`
`)),e(`

`),g.length>0&&(e(`
`),e(`
`),Array.isArray(g)?(e(`
`),g.length===1&&g[0].type==="file"?(e(`
my $file = '`),e(t(g[0].value)),e(`';
$request->content($file);
`)):(e(`
my $post_data = {
`),g.forEach((function(u){y(this,i),e(`
    '`),e(t(u.name)),e("' => '"),e(t(Array.isArray(u.value)?JSON.stringify(u.value):u.value)),e(`',
`)}).bind(this)),e(`
};
$request->content(join('&', map { $_ . '=' . $post_data->{$} } keys %$post_data));
`)),e(`
`)):x(g)==="object"&&(e(`
my $post_data = {
`),Object.keys(g).forEach((function(u){y(this,i),e(`
'`),e(t(u)),e("' => '"),e(t(Array.isArray(g[u])?JSON.stringify(g[u]):g[u])),e(`',
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
`),d},"ocaml/httpaf":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
(* Construct the request URL *)
let fullUrl = "`),e(t(h)),e(`" in
let headers = Httpaf.Headers.of_list [
  "Content-Type", "`),e(t(f)),e(`";
  `),g.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('", "'),e(t(r.value)),e(`";
  `)}).bind(this)),e(`
  `),u.forEach((function(r){y(this,i),e(`
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
`),d},"ocaml/cohttp_lwt":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
(* Set up the request *)
let fullUrl = "`),e(t(h)),e(`" in
let headers = Cohttp.Header.of_list [
  "Content-Type", "`),e(t(f)),e(`";
    `),g.forEach((function(r){y(this,i),e(`
      "`),e(t(r.name)),e('", "'),e(t(r.value)),e(`";
    `)}).bind(this)),e(`
    `),u.forEach((function(r){y(this,i),e(`
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
`),d},"objectivec/nsurlsession":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(h),e(`";
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),g.forEach((function(r){y(this,i),e(`
    [headers setObject:@"`),e(t(r.value)),e('" forKey:@"'),e(t(r.name)),e(`"];
`)}).bind(this)),e(`
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),p.forEach((function(r){var S=this;y(this,i),e(`
`),Array.isArray(r.value)?(e(`
    NSMutableArray *`),e(t(r.name)),e(`Array = [NSMutableArray array];
    `),r.value.forEach((function(w){var k=this;y(this,S),e(`
    `),x(w)==="object"?(e(`
    NSDictionary *`),e(t(r.name)),e(`Item = @{
    `),Object.keys(w).forEach((function(T){y(this,k),e(`
        @"`),e(t(T)),e('": '),e(t(JSON.stringify(w[T]))),e(`,
    `)}).bind(this)),e(`
    };
    [`),e(t(r.name)),e("Array addObject:"),e(t(r.name)),e(`Item];
    `)):(e(`
        [`),e(t(r.name)),e('Array addObject:@"'),e(t(w)),e(`"];
    `)),e(`
    `)}).bind(this)),e(`
    [parameters setObject:`),e(t(r.name)),e('Array forKey:@"'),e(t(r.name)),e(`"];
`)):x(r.value)==="object"?(e(`
    NSDictionary *`),e(t(r.name)),e(`Dict = @{
    `),Object.keys(r.value).forEach((function(w){y(this,S),e(`
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
[request setValue:@"`),e(t(f)),e(`" forHTTPHeaderField:@"Content-Type"];
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
`),u.forEach((function(r){y(this,i),e(`
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
`),d},"objectivec/afnetworking":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`
// Construct the request URL
NSString *fullUrl = @"`),e(h),e(`";

// Set up the request headers
NSMutableDictionary *headers = [NSMutableDictionary dictionary];
`),f.forEach((function(u){y(this,i),e(`
    [headers setObject:@"`),e(t(u.value)),e('" forKey:@"'),e(t(u.name)),e(`"];
`)}).bind(this)),e(`

// Add cookies to the request
`),p.forEach((function(u){y(this,i),e(`
NSDictionary *cookieProperties = @{
    NSHTTPCookieDomain: @"`),e(t(u.domain)),e(`",
    NSHTTPCookiePath: @"`),e(t(u.path)),e(`",
    NSHTTPCookieName: @"`),e(t(u.name)),e(`",
    NSHTTPCookieValue: @"`),e(t(u.value)),e(`",
};
NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
[[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
`)}).bind(this)),e(`

// Set up the request parameters
NSMutableDictionary *parameters = [NSMutableDictionary dictionary];
`),g.forEach((function(u){var r=this;y(this,i),e(`
    `),Array.isArray(u.value)?(e(`
    NSMutableArray *`),e(t(u.name)),e(`Array = [NSMutableArray array];
    `),u.value.forEach((function(S){y(this,r),e(`
    `),x(S)==="object"?(e(`
    NSDictionary *`),e(t(u.name)),e(`Object = @{
        '`),e(t(Object.keys(S)[0])),e("': "),e(t(JSON.stringify(S[Object.keys(S)[0]]))),e(`,
    };
    [`),e(t(u.name)),e("Array addObject:"),e(t(u.name)),e(`Object];
    `)):(e(`
        [`),e(t(u.name)),e('Array addObject:@"'),e(t(encodeURIComponent(S))),e(`"];
    `)),e(`
    `)}).bind(this)),e(`
    [parameters setObject:`),e(t(u.name)),e('Array forKey:@"'),e(t(u.name)),e(`"];
    `)):x(u.value)==="object"?(e(`
        NSDictionary *`),e(t(u.name)),e(`Object = @{
        '`),e(t(Object.keys(u.value)[0])),e("': "),e(t(JSON.stringify(u.value[Object.keys(u.value)[0]]))),e(`,
        };
        [parameters setObject:`),e(t(u.name)),e('Object forKey:@"'),e(t(u.name)),e(`"];
    `)):(e(`
        [parameters setObject:@"`),e(t(encodeURIComponent(u.value))),e('" forKey:@"'),e(t(u.name)),e(`"];
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
`),d},"lua/httpclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
local http_client = require("httpclient")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(f)),e(`'
local headers = {
`),g.forEach((function(r){y(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){var S=this;y(this,i),e(`
    ['`),e(t(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
        {
        `),r.value.forEach((function(w,k){y(this,S),e(`
            `),x(w)==="object"?(e(`
                ['`),e(t(Object.keys(w)[0])),e("'] = "),e(t(JSON.stringify(w[Object.keys(w)[0]]))),e(`,
            `)):(e(`
                `),e(t(k)),e(" = '"),e(t(encodeURIComponent(w))),e(`',
            `)),e(`
        `)}).bind(this)),e(`
        },
    `)):x(r.value)==="object"?(e(`
        {
        ['`),e(t(Object.keys(r.value)[0])),e("'] = "),e(t(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
        },
    `)):(e(`
        '`),e(t(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),u.forEach((function(r){y(this,i),e(`
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
`),d},"lua/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
local http = require("socket.http")
local ltn12 = require("ltn12")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(f)),e(`'
local headers = {
`),g.forEach((function(r){y(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){var S=this;y(this,i),e(`
    ['`),e(t(r.name)),e("'] = "),Array.isArray(r.value)?(e(`
    {
    `),r.value.forEach((function(w,k){y(this,S),e(`
    `),x(w)==="object"?(e(`
        ['`),e(t(Object.keys(w)[0])),e("'] = "),e(t(JSON.stringify(w[Object.keys(w)[0]]))),e(`,
    `)):(e(`
        `),e(t(k)),e(" = '"),e(t(encodeURIComponent(w))),e(`',
    `)),e(`
    `)}).bind(this)),e(`
    },
    `)):x(r.value)==="object"?(e(`
    {
    ['`),e(t(Object.keys(r.value)[0])),e("'] = "),e(t(JSON.stringify(r.value[Object.keys(r.value)[0]]))),e(`,
    },
    `)):(e(`
    '`),e(t(encodeURIComponent(r.value))),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),u.forEach((function(r){y(this,i),e(`
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
`),d},"lua/curl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
local curl = require("cURL")

-- Extract parameters from the options object
local url = '`),e(t(h)),e(`'
local method = '`),e(t(m)),e(`'
local mimeType = '`),e(t(f)),e(`'
local headers = {
`),g.forEach((function(r){y(this,i),e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
`)}).bind(this)),e(`
}
local postData = {
`),p.forEach((function(r){y(this,i),e(`
    `),Array.isArray(r.value)||x(r.value)==="object"?(e(`
    ['`),e(t(r.name)),e("'] = "),e(t(JSON.stringify(r.value))),e(`,
    `)):(e(`
    ['`),e(t(r.name)),e("'] = '"),e(t(r.value)),e(`',
    `)),e(`
`)}).bind(this)),e(`
}
local cookies = {
`),u.forEach((function(r){y(this,i),e(`
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
`),d},"kotlin/okhttp3":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import okhttp3.*
import java.io.IOException

val client = OkHttpClient()

val url = "`),e(t(h)),e(`"
val method = "`),e(t(m)),e(`"
val mimeType = "`),e(t(f)),e(`"

val body = `),p.length>0?(e(`
  `),p.forEach((function(r){y(this,i),e(`
  `),Array.isArray(r.value)||x(r.value)==="object"?(e(`
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
`),g.forEach((function(r){y(this,i),e(`
  .addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`),u.forEach((function(r){y(this,i),e(`
  .addHeader("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`")
`)}).bind(this)),e(`
.build()

val response = client.newCall(request).execute()

println("Response: " + response.body()?.string())
`),d},"kotlin/java":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

val url = URL("`),e(t(h)),e(`")
val connection = url.openConnection() as HttpURLConnection
connection.requestMethod = "`),e(t(m)),e(`"

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach((function(r){y(this,i),e(`
connection.setRequestProperty("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`)),e(`

`),u.length>0&&(e(`
// Add cookies to the request
`),u.forEach((function(r){y(this,i),e(`
connection.addRequestProperty("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`")
`)}).bind(this)),e(`
`)),e(`

// Send the request
`),p.length>0?m==="POST"?(e(`
val postData = "`),e(t(p.map((function(r){var S=this;if(y(this,i),Array.isArray(r.value))return r.value.map((function(T){return y(this,S),encodeURIComponent(T.toString(),"UTF-8")}).bind(this)).map((function(T){return y(this,S),r.name+"="+T}).bind(this)).join("&");if(x(r.value)==="object"){var w=Object.values(r.value).map((function(T){return y(this,S),encodeURIComponent(T.toString(),"UTF-8")}).bind(this)),k=Object.keys(r.value);return w.map((function(T,N){return y(this,S),r.name+"["+k[N]+"]="+T}).bind(this)).join("&")}return r.name+"="+encodeURIComponent(r.value.toString(),"UTF-8")}).bind(this)).join("&"))),e(`".toByteArray(Charsets.UTF_8)
connection.setRequestProperty("Content-Type", "`),e(t(f)),e(`")
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
`),d},"kotlin/fuel":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import com.github.kittinunf.fuel.*
import com.github.kittinunf.fuel.core.*
import com.github.kittinunf.result.*

val fullUrl = "`),e(t(h)),e(`"

val requestHeaders = listOf(
    `),g.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)}).bind(this)),e(`
)

val requestCookies = listOf(
    `),u.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)}).bind(this)),e(`
)

val parameters = listOf(
    `),p.forEach((function(r){y(this,i),e(`
    `),Array.isArray(r.value)||x(r.value)==="object"?(e(`
    "`),e(t(r.name)),e('" to '),e(t(JSON.stringify(r.value))),e(`,
    `)):(e(`
    "`),e(t(r.name)),e('" to "'),e(t(r.value)),e(`",
    `)),e(`
    `)}).bind(this)),e(`
)

val request = Fuel.request(Method.`),e(t(m)),e(`, fullUrl)
    .header(requestHeaders)
    .header("Content-Type", "`),e(t(f)),e(`")
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
`),d},"javascript/jquery":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  const fullUrl = url;

  // Set up the request configuration object
  const config = {
    url: fullUrl,
    type: method,
    headers: {
      'Content-Type': mimeType,
      `),g.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    data: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" null "),e(`
  };

  // Add cookies to the request
  `),u.forEach((function(r){y(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
const mimeType = '`),e(t(f)),e(`';
const headers = {
  `),g.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),u.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/fetch":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  // Construct the request configuration object
  var config = {
    method: method,
    headers: {
      'Content-Type': mimeType,
      `),g.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    body: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" null "),e(`
  };

  // Add cookies to the request
  `),u.forEach((function(r){y(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
const mimeType = '`),e(t(f)),e(`';
const headers = {
  `),g.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),u.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/axios":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
// Import the Axios library
import axios from 'axios';

async function makeRequest(url, method, mimeType, headers, cookies, postData) {
  // Construct the request configuration object
  var config = {
    method: method,
    url: url,
    headers: {
      'Content-Type': mimeType,
      `),g.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
    },
    data: `),p.length===1&&p[0].type==="file"?e(`
      new FormData(document.getElementById('#file_upload_form'))
      `):p.length>0?e(`postData
      `):e(" undefined "),e(`
  };

  // Add cookies to the request
  `),u.forEach((function(r){y(this,i),e("document.cookie = '"),e(t(r.name)),e("="),e(t(r.value)),e(`';
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
const mimeType = '`),e(t(f)),e(`';
const headers = {
  `),g.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const cookies = {
  `),u.forEach((function(r){y(this,i),e("'"),e(t(r.name)),e("': '"),e(t(r.value)),e("',")}).bind(this)),e(`
};
const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"javascript/xmlhttprequest":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
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
const mimeType = '`),e(t(f)),e(`';
const headers = [
  `),g.forEach((function(r){y(this,i),e("{ name: '"),e(t(r.name)),e("', value: '"),e(t(r.value)),e("' },")}).bind(this)),e(`
];
const cookies = [
  `),u.forEach((function(r){y(this,i),e("{ name: '"),e(t(r.name)),e("', value: '"),e(t(r.value)),e("' },")}).bind(this)),e(`
];

const postData = `),e(JSON.stringify(p,null,2)),e(`

makeRequest(url, method, mimeType, headers, cookies, postData);
`),d},"java/unirest":function(n,t,a,o){var i=this;t=t||function(w){return w==null?"":String(w).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(w){return s[w]||w}var d="";function e(w){w!=null&&(d+=w)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;if(e(`
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class Main {
    public static void main(String[] args) {
        // Construct the request URL
        String fullUrl = "`),e(t(h)),e(`";

        // Set up the request
        com.mashape.unirest.http.HttpRequestWithBody request =
        Unirest.`),e(t(m.toLowerCase())),e(`(fullUrl)
            .header("Content-Type", "`),e(t(f)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach((function(w){y(this,i),e(`
        request.header("`),e(t(w.name)),e('", "'),e(t(w.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),u.length>0&&(e(`
        // Add cookies to the request
        `),u.forEach((function(w){y(this,i),e(`
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
        `),f==="application/x-www-form-urlencoded"){e(`
        `);var r=p.filter((function(w){return y(this,i),!Array.isArray(w.value)}).bind(this));e(`
        `);var S=p.filter((function(w){return y(this,i),Array.isArray(w.value)}).bind(this));e(`
        request.field("`),e(t(r.map((function(w){return y(this,i),w.name}).bind(this)).join('", "'))),e(`",
        `),e(t(r.map((function(w){return y(this,i),'encodeURIComponent("'+w.value+'")'}).bind(this)).join(", "))),e(`
        `),S.length>0&&(e(`
        `),S.forEach((function(w){var k=this;y(this,i),e(`
            , "`),e(t(w.name)),e(`[]",
            `),e(t(w.value.map((function(T){return y(this,k),'encodeURIComponent("'+T+'")'}).bind(this)).join(", "))),e(`
        `)}).bind(this)),e(`
        `)),e(`
        );
        `)}else e(`
        request.body("`),e(t(p.map((function(w){return y(this,i),w.value}).bind(this)).join(""))),e(`");
        `);e(`
        `)}e(`
        `)}else x(p)==="object"&&(e(`
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
`),d},"java/okhttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
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
            .addHeader("Content-Type", "`),e(t(f)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach((function(r){y(this,i),e(`
        requestBuilder.addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),u.length>0&&(e(`
        // Add cookies to the request
        `),u.forEach((function(r){y(this,i),e(`
        requestBuilder.addHeader("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),Array.isArray(p)?(e(`
        FormBody.Builder formBodyBuilder = new FormBody.Builder();
        `),p.forEach((function(r){y(this,i),e(`
        formBodyBuilder.add("`),e(t(r.name)),e('", "'),e(t(JSON.stringify(r.value))),e(`");
        `)}).bind(this)),e(`
        RequestBody requestBody = formBodyBuilder.build();
        requestBuilder.post(requestBody);
        `)):(e(`
        MediaType mediaType = MediaType.parse("`),e(t(f)),e(`");
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
`),d},"java/nethttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
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
        connection.setRequestProperty("Content-Type", "`),e(t(f)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach((function(r){y(this,i),e(`
        connection.setRequestProperty("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),u.length>0&&(e(`
        // Add cookies to the request
        `),u.forEach((function(r){y(this,i),e(`
        connection.setRequestProperty("Cookie", "`),e(t(r.name)),e("="),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        connection.setDoOutput(true);
        `),Array.isArray(p)?(e(`
        String requestBody = "`),e(t(p.map((function(r){return y(this,i),r.name+"="+encodeURIComponent(r.value,"UTF-8")}).bind(this)).join("&"))),e(`";
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
`),d},"java/asynchttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
import org.asynchttpclient.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Construct the request URL
        String fullUrl = "`),e(t(h)),e(`";

        // Set up the request
        AsyncHttpClient client = Dsl.asyncHttpClient();
        RequestBuilder requestBuilder = new RequestBuilder("`),e(t(m)),e(`")
        .setUrl(fullUrl)
        .addHeader("Content-Type", "`),e(t(f)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach((function(r){y(this,i),e(`
        requestBuilder.addHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),u.length>0&&(e(`
        // Add cookies to the request
        `),u.forEach((function(r){y(this,i),e(`
        requestBuilder.addCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
            // Set up the request body
        `),p.length>0&&(e(`
        `),Array.isArray(p)?(e(`
        StringBuilder bodyBuilder = new StringBuilder();
        `),p.forEach((function(r){y(this,i),e(`
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
`),d},"http/rfc7230":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
// https://www.rfc-editor.org/rfc/rfc7230
`),m==="GET"?(e(`
`),e(t(m)),e(" "),e(t(h)),e(` HTTP/1.1
`)):(e(`
`),e(t(m)),e(" "),e(t(h)),e(` HTTP/1.1
Content-Type: `),e(t(f)),e(`
`)),e(`

`),g.forEach((function(r){y(this,i),e(`
`),e(t(r.name)),e(": "),e(t(r.value)),e(`
`)}).bind(this)),e(`

`),u.forEach((function(r){y(this,i),e(`
Cookie: `),e(t(r.name)),e("="),e(t(r.value)),e(`
`)}).bind(this)),e(`

`),m==="POST"&&p.length>0&&(e(`
`),f==="application/x-www-form-urlencoded"?(e(`
`),e(t(p.map((function(r){return y(this,i),r.name+"="+encodeURIComponent(Array.isArray(r.value)||x(r.value)==="object"?JSON.stringify(r.value):r.value)}).bind(this)).join("&"))),e(`
`)):f==="application/json"?(e(`
`),e(t(JSON.stringify(p))),e(`
`)):f==="multipart/form-data"?(e(`
`),p.forEach((function(r){y(this,i),e(`
--`),e(t("boundary-"+Math.random().toString().substr(2))),e(`
Content-Disposition: form-data; name="`),e(t(r.name)),e(`"

`),e(t(Array.isArray(r.value)||x(r.value)==="object"?JSON.stringify(r.value):r.value)),e(`
`)}).bind(this)),e(`
--`),e(t("boundary-"+Math.random().toString().substr(2))),e(`-->
`)):(e(`
`),p.forEach((function(r){y(this,i),e(`
`),e(t(r.name)),e(": "),e(t(r.value)),e(`
`)}).bind(this)),e(`
`)),e(`
`)),e(`
`),d},"go/http":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`

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
	`),g.forEach((function(u){var r=this;y(this,i),e(`
	`),Array.isArray(u.value)?(e(`
	`),u.value.forEach((function(S){y(this,r),e(`
	form.Add("`),e(t(u.name)),e('[]", fmt.Sprintf("%v", "'),e(t(S)),e(`"))
	`)}).bind(this)),e(`
	`)):x(u.value)==="object"?(e(`
	`),Object.keys(u.value).forEach((function(S){y(this,r),e(`
	form.Add("`),e(t(u.name)),e("["),e(t(S)),e(']", fmt.Sprintf("%v", "'),e(t(u.value[S])),e(`"))
	`)}).bind(this)),e(`
	`)):(e(`
	form.Add("`),e(t(u.name)),e('", fmt.Sprintf("%v", "'),e(t(u.value)),e(`"))
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

	`),f.length>0&&(e(`
	// Add headers to the request
	`),f.forEach((function(u){y(this,i),e(`
	req.Header.Set("`),e(t(u.name)),e('", "'),e(t(u.value)),e(`")
	`)}).bind(this)),e(`
	`)),e(`

	`),p.length>0&&(e(`
	// Add cookies to the request
	`),p.forEach((function(u){y(this,i),e(`
	req.AddCookie(&http.Cookie{Name: "`),e(t(u.name)),e('", Value: "'),e(t(u.value)),e(`"})
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
`),d},"go/fasthttp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
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
    `),p.forEach((function(r){y(this,i),e(`
    `),x(r.value)==="object"?e(`
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
    req.Header.SetContentType("`),e(t(f)),e(`")
    req.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36")

    `),g.length>0&&(e(`
    // Add headers to the request
    `),g.forEach((function(r){y(this,i),e(`
    req.Header.Add("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`")
    `)}).bind(this)),e(`
    `)),e(`

    `),u.length>0&&(e(`
    // Add cookies to the request
    `),u.forEach((function(r){y(this,i),e(`
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
`),d},"dart/http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
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
    final mimeType = '`),e(t(f)),e(`';
    final headers = {
    `),g.forEach((function(r){y(this,i),e(`
        '`),e(t(r.name)),e("' : '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
    };
    final cookies = {
    `),u.forEach((function(r){y(this,i),e(`
        '`),e(t(r.name)),e("' : '"),e(t(r.value)),e(`',
    `)}).bind(this)),e(`
    };
    final postData = [
    `),p.forEach((function(r){y(this,i),e(`
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
`),d},"dart/dio":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
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
            `),p.some((function(r){return y(this,i),x(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
            std::string body = R"({`),p.forEach((function(r){y(this,i),x(r.value)==="object"||Array.isArray(r.value)?(e(`
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
    std::string mimeType = "`),e(t(f)),e(`";
    std::vector<std::string> headers = {
        `),g.forEach((function(r){y(this,i),e(`
        "`),e(t(r.name)),e(": "),e(t(r.value)),e(`",
        `)}).bind(this)),e(`
    };
    std::vector<std::string> cookies = {
        `),u.forEach((function(r){y(this,i),e(`
        "`),e(t(r.name)),e("="),e(t(r.value)),e(`",
        `)}).bind(this)),e(`
    };
    std::vector<std::string> postData = {
        `),p.forEach((function(r){y(this,i),e(`
        {
            "name": "`),e(t(r.name)),e(`",
            `),x(r.value)==="object"||Array.isArray(r.value)?(e(`
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
`),d},"csharp/restsharp":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
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
        request.AddHeader("Content-Type", "`),e(t(f)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach((function(r){y(this,i),e(`
        request.AddHeader("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),u.length>0&&(e(`
        // Add cookies to the request
        `),u.forEach((function(r){y(this,i),e(`
        request.AddCookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),p.some((function(r){return y(this,i),x(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
        var body = new {
            `),p.filter((function(r){return y(this,i),x(r.value)==="object"||Array.isArray(r.value)}).bind(this)).forEach((function(r){y(this,i),e(`
            `),e(t(r.name)),e(" = "),e(t(JSON.stringify(r.value))),e(`,
            `)}).bind(this)),e(`
        };
        request.AddJsonBody(body);
        `)):(e(`
        request.AddParameter("text/plain", "`),e(t(p.map((function(r){return y(this,i),r.name+"="+Uri.EscapeDataString(r.value)}).bind(this)).join("&"))),e(`", ParameterType.RequestBody);
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
`),d},"csharp/httpclient":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
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
        request.Headers.Add("Content-Type", "`),e(t(f)),e(`");

        `),g.length>0&&(e(`
        // Add headers to the request
        `),g.forEach((function(r){y(this,i),e(`
        request.Headers.Add("`),e(t(r.name)),e('", "'),e(t(r.value)),e(`");
        `)}).bind(this)),e(`
        `)),e(`

        `),u.length>0&&(e(`
        // Add cookies to the request
        `),u.forEach((function(r){y(this,i),e(`
        var cookie = new System.Net.Cookie("`),e(t(r.name)),e('", "'),e(t(r.value)),e('", "/", "'),e(t(h)),e(`");
        clientHandler.CookieContainer.Add(cookie);
        `)}).bind(this)),e(`
        `)),e(`

        `),p.length>0&&(e(`
        // Set up the request body
        `),p.some((function(r){return y(this,i),x(r.value)==="object"||Array.isArray(r.value)}).bind(this))?(e(`
        var formData = new MultipartFormDataContent();
        `),p.forEach((function(r){var S=this;y(this,i),Array.isArray(r.value)?(e(`
                `),r.value.forEach((function(w){y(this,S),e(`
                    formData.Add(new StringContent("`),e(t(w)),e('"), "'),e(t(r.name)),e(`[]");
                `)}).bind(this)),e(`
            `)):x(r.value)==="object"?(e(`
                `),Object.entries(r.value).forEach((function(w){y(this,S);var k=yn(w,2),T=k[0],N=k[1];e(`
                    formData.Add(new StringContent("`),e(t(N)),e('"), "'),e(t(r.name)),e("["),e(t(T)),e(`]");
                `)}).bind(this)),e(`
            `)):(e(`
                formData.Add(new StringContent("`),e(t(r.value)),e('"), "'),e(t(r.name)),e(`");
            `)),e(`
        `)}).bind(this)),e(`
        request.Content = formData;
        `)):(e(`
        var requestBody = new StringContent("`),e(t(p.map((function(r){return y(this,i),r.name+"="+Uri.EscapeDataString(r.value)}).bind(this)).join("&"))),e(`");
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
`),d},"cpp/iostream":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method;n.mimeType;var f=n.headers,g=n.postData,p=n.cookies;return e(`
// Construct the request URL
std::string fullUrl = "`),e(h),e(`";

// Set up the request headers
std::map<std::string, std::string> headers;
`),f.forEach((function(u){y(this,i),e(`
headers["`),e(t(u.name)),e('"] = "'),e(t(u.value)),e(`";
`)}).bind(this)),e(`

// Add cookies to the request
std::string cookieString;
`),p.forEach((function(u){y(this,i),e(`
cookieString += "`),e(t(u.name)),e("="),e(t(u.value)),e(`; ";
`)}).bind(this)),e(`

// Set up the request parameters
std::map<std::string, std::string> parameters;
`),g.forEach((function(u){var r=this;y(this,i),e(`
`),Array.isArray(u.value)?(e(`
`),u.value.forEach((function(S){y(this,r),e(`
std::string paramString = "`),e(t(u.name)),e("[]="),e(t(S)),e(`";
parameters["`),e(t(u.name)),e(`"] += paramString + "&";
`)}).bind(this)),e(`
`)):x(u.value)==="object"?(e(`
`),Object.entries(u.value).forEach((function(S){y(this,r);var w=yn(S,2),k=w[0],T=w[1];e(`
std::string paramString = "`),e(t(u.name)),e("["),e(t(k)),e("]="),e(t(T)),e(`";
parameters["`),e(t(u.name)),e(`"] += paramString + "&";
`)}).bind(this)),e(`
`)):(e(`
std::string paramString = "`),e(t(u.name)),e("="),e(t(u.value)),e(`";
parameters["`),e(t(u.name)),e(`"] += paramString + "&";
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
`),d},"cpp/curl":function(n,t,a,o){var i=this;t=t||function(p){return p==null?"":String(p).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(p){return s[p]||p}var d="";function e(p){p!=null&&(d+=p)}var h=n.url;n.method,n.mimeType;var m=n.headers,f=n.postData,g=n.cookies;return e(`
// Construct the request URL
std::string url = "`),e(h),e(`";

// Set up the request headers
struct curl_slist* headers = NULL;
`),m.forEach((function(p){y(this,i),e(`
std::string headerString = "`),e(t(p.name)),e(": "),e(t(p.value)),e(`";
headers = curl_slist_append(headers, headerString.c_str());
`)}).bind(this)),e(`

// Add cookies to the request
std::string cookieData;
`),g.forEach((function(p){y(this,i),e(`
std::string cookieString = "`),e(t(p.name)),e("="),e(t(p.value)),e(`";
cookieData += cookieString + "; ";
`)}).bind(this)),e(`

// Set up the request parameters
std::string postData;
`),f.forEach((function(p){var u=this;y(this,i),e(`
`),Array.isArray(p.value)?(e(`
`),p.value.forEach((function(r){y(this,u),e(`
std::string paramString = "`),e(t(p.name)),e("[]="),e(t(r)),e(`";
postData += paramString + "&";
`)}).bind(this)),e(`
`)):x(p.value)==="object"?(e(`
`),Object.entries(p.value).forEach((function(r){y(this,u);var S=yn(r,2),w=S[0],k=S[1];e(`
std::string paramString = "`),e(t(p.name)),e("["),e(t(w)),e("]="),e(t(k)),e(`";
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
`),d},"cpp/arduino":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
// Construct the request URL
String url = "`),e(h),e(`";

// Set up the request headers
String headers;
`),g.forEach((function(r){y(this,i),e(`
    String headerString = "`),e(t(r.name)),e(": "),e(t(r.value)),e(`";
    headers += headerString + "\\r\\n";
`)}).bind(this)),e(`

// Add cookies to the request
`),u.forEach((function(r){y(this,i),e(`
    String cookieString = "`),e(t(r.name)),e("="),e(t(r.value)),e(`";
    // TODO: Add cookieString to the request
`)}).bind(this)),e(`

// Set up the request parameters
String postData;
`),p.forEach((function(r){var S=this;y(this,i),e(`
    `),Array.isArray(r.value)?(e(`
        `),r.value.forEach((function(w){y(this,S),e(`
            String paramString = "`),e(t(r.name)),e("="),e(t(w)),e(`";
            postData += paramString + "&";
        `)}).bind(this)),e(`
    `)):x(r.value)==="object"?(e(`
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
    client.println("`),e(f),e(`");
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
`),d},"clojure/ring-client":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`

(require '[ring.util.http-client :as client])

(defn make-request []
    (let [url "`),e(t(h)),e(`"
        headers {`),g.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        cookies {`),u.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        options {:headers headers
        :cookies cookies
        :content-type "`),e(t(f)),e(`"}
    `),m==="GET"?e(`
        response (client/get url options)]
    `):(e(`
        post-data "`),p.length===1&&p[0].type==="file"?(e(`
    {:multipart true
        :file "`),e(t(p[0].value)),e(`"}
    `)):(e(`
    {`),p.forEach((function(r){y(this,i),e(`
        "`),e(t(r.name)),e('" '),Array.isArray(r.value)||x(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(t(r.value)),e('"')),r.isLast||e(",")}).bind(this)),e(`}
    `)),e(`"
    response (client/post url options post-data)]
    `)),e(`
    (println "Response: " (:body response))))

(make-request)
`),d},"clojure/clj-http":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
(require '[clj-http.client :as client])

(defn make-request []
    (let [url "`),e(t(h)),e(`"
        headers {`),g.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        cookies {`),u.forEach((function(r){y(this,i),e(`
    "`),e(t(r.name)),e('" "'),e(t(r.value)),e('"'),r.isLast||e(",")}).bind(this)),e(`}
        options {:headers headers
        :cookies cookies
        :content-type "`),e(t(f)),e(`"}
    `),m==="GET"?e(`
        response (client/get url options)]
    `):(e(`
        post-data "`),p.length===1&&p[0].type==="file"?(e(`
    {:multipart true
        :file "`),e(t(p[0].value)),e(`"}
    `)):(e(`
    {`),p.forEach((function(r){y(this,i),e(`
        "`),e(t(r.name)),e('" '),Array.isArray(r.value)||x(r.value)==="object"?e("(json/write-str param.value)"):(e('"'),e(t(r.value)),e('"')),r.isLast||e(",")}).bind(this)),e(`}
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
`),d},"c/ghttp":function(n,t,a,o){var i=this;t=t||function(S){return S==null?"":String(S).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(S){return s[S]||S}var d="";function e(S){S!=null&&(d+=S)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;if(e(`
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

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach((function(S){y(this,i),e(`
evhttp_add_header(req->output_headers, "`),e(t(S.name)),e('", "'),e(t(S.value)),e(`");
`)}).bind(this)),e(`
`)),e(`

`),u.length>0&&(e(`
// Add cookies to the request
`),u.forEach((function(S){y(this,i),e(`
evhttp_add_header(req->output_headers, "Cookie", "`),e(t(S.name)),e("="),e(t(S.value)),e(`");
`)}).bind(this)),e(`
`)),e(`

`),p.length>0){e(`
// Set request body
`);var r=p.map((function(S){var w=this;return y(this,i),Array.isArray(S.value)?S.value.map((function(k){return y(this,w),S.name+"="+encodeURIComponent(JSON.stringify(k))}).bind(this)).join("&"):x(S.value)==="object"?S.name+"="+encodeURIComponent(JSON.stringify(S.value)):S.name+"="+encodeURIComponent(S.value)}).bind(this)).join("&");e(`
evbuffer_add_printf(req->output_buffer, "%s", "`),e(t(r)),e(`");
evhttp_add_header(req->output_headers, "Content-Type", "`),e(t(f)),e(`");
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
`),d},"c/curl":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url,m=n.method,f=n.mimeType;n.headers;var g=n.postData;if(n.cookies,e(`
#include <stdio.h>
#include <stdlib.h>
#include <curl/curl.h>

int main(void) {
CURL *curl;
CURLcode res;
struct curl_slist *headers = NULL;
char *url = "`),e(t(h)),e(`";
char *method = "`),e(t(m)),e(`";
char *mimeType = "`),e(t(f)),e(`";
char *postData = "";
`),g.length>0){e(`
`);var p=g.map((function(u){var r=this;return y(this,i),Array.isArray(u.value)?u.value.map((function(S){return y(this,r),u.name+"="+encodeURIComponent(JSON.stringify(S))}).bind(this)).join("&"):x(u.value)==="object"?u.name+"="+encodeURIComponent(JSON.stringify(u.value)):u.name+"="+encodeURIComponent(u.value)}).bind(this)).join("&");e(`
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
`),d},"brainfuck/brainfuck":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
// Create a new brainfuck program
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.

// Construct the request URL
,[<]>[.>],`),h.split("").forEach((function(r){y(this,i),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}).bind(this)),e(`++++++++[->+++++<]>.

// Set up the request
,[<]>[.>],`),m.split("").forEach((function(r){y(this,i),e("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>++++++[<.+>-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")}).bind(this)),e(`++++++++[->+++++<]>.

`),g.length>0&&(e(`
// Add headers to the request
`),g.forEach((function(r){y(this,i),e(",[<]>[.>],'"),e(t(r.name)),e(": "),e(t(r.value)),e("',")}).bind(this)),e(`
`)),e(`

`),u.length>0&&(e(`
// Add cookies to the request
`),u.forEach((function(r){y(this,i),e(",[<]>[.>],'Set-Cookie: "),e(t(r.name)),e("="),e(t(r.value)),e("',")}).bind(this)),e(`
`)),e(`


`),p.length>0&&(e(`
// Send the request
,[<]>[.>],'`),p.length===1&&p[0].type==="file"?e("multipart/form-data"):e(t(f)),e(`',<

`),p.length===1&&p[0].type==="file"?(e(`
    ,[<]>[.>],'`),e(t(p[0].name)),e("=',<,[>]<[.>],<,[<]>[.>],<,[>]<[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-]<,")):(e(`
    `),p.forEach((function(r){y(this,i),e(`
        ,[<]>[.>],'`),e(t(r.name)),e("=',<,[>]<[.>],'"),e(t(r.value)),e("',")}).bind(this)),e(`
    ,`)),e(`

,[<]>[.>],'',<]
`)),e(`

// Handle the response
,[<]>[.>],'Response:',<[<]>[.>],[<]>[-]>[-]<<[->+>+<<]>>[->+<]>[<.<+>-],<

// Handle errors
,[<]>[.>],'Error:',<[<]>[.>],'Oops! Brainfuck couldn't handle this request. Maybe try Python next time?',`),p.length===1&&p[0].type==="file"&&e(" Remember, uploading files in Brainfuck is like trying to fit a square peg in a round hole."),e(`
`),d},"bash/wget":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
wget --verbose --output-document=-
--header="Content-Type: `),e(t(f)),e(`"
`),g.forEach((function(r){y(this,i),e(`
    --header="`),e(t(r.name)),e(": "),e(t(r.value)),e(`"
`)}).bind(this)),e(`
`),u.forEach((function(r){y(this,i),e(`
    --header="Cookie: `),e(t(r.name)),e("="),e(t(r.value)),e(`"
`)}).bind(this)),m==="GET"?(e(`
    "`),e(t(h)),e(`"
`)):m==="POST"?(e(`
    --post-data="`),e(t(p.map((function(r){y(this,i);var S=r.value;return(Array.isArray(S)||x(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    "`),e(t(h)),e(`"
`)):m==="PUT"?(e(`
    --method=PUT
    --body-data="`),e(t(p.map((function(r){y(this,i);var S=r.value;return(Array.isArray(S)||x(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    "`),e(t(h)),e(`"
`)):m==="DELETE"&&(e(`
    --method=DELETE
    "`),e(t(h)),e(`"
`)),e(`
`),d},"bash/httpie":function(n,t,a,o){var i=this;t=t||function(u){return u==null?"":String(u).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(u){return s[u]||u}var d="";function e(u){u!=null&&(d+=u)}var h=n.url;n.method,n.mimeType;var m=n.headers,f=n.postData,g=n.cookies;if(e(`
http --verbose --check --follow
"`),e(t(h)),e(`"
`),e(t(m.map((function(u){return y(this,i),"'"+u.name+":"+u.value+"'"}).bind(this)).join(` 
 `))),e(`
`),g.forEach((function(u){y(this,i),e(`
Cookie:"`),e(t(u.name)),e("="),e(t(u.value)),e(`"
`)}).bind(this)),e(`
`),f.length>0){e(`
`);var p=f.map((function(u){var r=this;return y(this,i),Array.isArray(u.value)?u.value.map((function(S){return y(this,r),"'"+u.name+"="+encodeURIComponent(JSON.stringify(S))+"'"}).bind(this)).join(" "):x(u.value)==="object"?"'"+u.name+"="+encodeURIComponent(JSON.stringify(u.value))+"'":"'"+u.name+"="+encodeURIComponent(u.value)+"'"}).bind(this)).join(` 
 `);e(`
`),e(t(p)),e(`
`)}return e(`
--form
--timeout 120s
--max-redirects 10
`),d},"bash/curl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
curl -X `),e(t(m)),e(`
-H "Content-Type: `),e(t(f)),e(`"
`),g.forEach((function(r){y(this,i),e(`
    -H "`),e(t(r.name)),e(": "),e(t(r.value)),e(`"
`)}).bind(this)),e(`
`),u.forEach((function(r){y(this,i),e(`
    --cookie "`),e(t(r.name)),e("="),e(t(r.value)),e(`"
`)}).bind(this)),p.length>0&&(e(`
    -d `),p.length===1&&p[0].type==="file"?(e(`
        "@`),e(t(p[0].value)),e(`"
    `)):(e(`
        "`),e(t(p.map((function(r){y(this,i);var S=r.value;return(Array.isArray(S)||x(S)==="object")&&(S=JSON.stringify(S)),encodeURIComponent(r.name)+"="+encodeURIComponent(S)}).bind(this)).join("&"))),e(`"
    `))),e(`
"`),e(t(h)),e(`"
`),d},"r/rcurl":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
library(RCurl)

url <- "`),e(t(h)),e(`"
method <- "`),e(t(m)),e(`"
mimeType <- "`),e(t(f)),e(`"

headers <- list(
`),g.forEach((function(r){y(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
)

cookies <- list(
`),u.forEach((function(r){y(this,i),e(`
  "`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`",
`)}).bind(this)),e(`
)

`),m==="GET"?e(`
req <- getURL(url, httpheader = headers, cookie = cookies)
`):(e(`
body <- list(
`),p.forEach((function(r){y(this,i),e(`
"`),e(t(r.name)),e('" = '),Array.isArray(r.value)||x(r.value)==="object"?(e(`
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

`),d},"r/httr":function(n,t,a,o){var i=this;t=t||function(r){return r==null?"":String(r).replace(l,c)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function c(r){return s[r]||r}var d="";function e(r){r!=null&&(d+=r)}var h=n.url,m=n.method,f=n.mimeType,g=n.headers,p=n.postData,u=n.cookies;return e(`
library(httr)

url <- "`),e(t(h)),e(`"

req <- VERB("`),e(t(m)),e(`", url)

`),g.forEach((function(r){y(this,i),e(`
req <- add_headers("`),e(t(r.name)),e('" = "'),e(t(r.value)),e(`", req)
`)}).bind(this)),e(`

`),u.forEach((function(r){y(this,i),e(`
req <- add_headers("Cookie" = "`),e(t(r.name)),e("="),e(t(r.value)),e(`", req)
`)}).bind(this)),e(`

`),p.length>0&&(e(`
body <- list(
`),p.forEach((function(r){y(this,i),e(`
"`),e(t(r.name)),e('" = '),Array.isArray(r.value)||x(r.value)==="object"?(e(`
    `),e(t(JSON.stringify(r.value))),e(`,
`)):(e(`
    "`),e(t(r.value)),e(`",
`)),e(`
`)}).bind(this)),e(`
)
req <- content(req, as.formula(paste0("`),e(t(f)),e(`", "()")), body)
`)),e(`

res <- content(req)

cat("Response: ")
print(toJSON(res, pretty = TRUE))
`),d}};function _o(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(t=>{const a=n[t],o=typeof a;o!=="object"&&o!=="function"||Object.isFrozen(a)||_o(a)}),n}class Ti{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function vo(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function $e(n,...t){const a=Object.create(null);for(const o in n)a[o]=n[o];return t.forEach(function(o){for(const i in o)a[i]=o[i]}),a}const Ai=n=>!!n.scope;class U_{constructor(t,a){this.buffer="",this.classPrefix=a.classPrefix,t.walk(this)}addText(t){this.buffer+=vo(t)}openNode(t){if(!Ai(t))return;const a=((o,{prefix:i})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const s=o.split(".");return[`${i}${s.shift()}`,...s.map((l,c)=>`${l}${"_".repeat(c+1)}`)].join(" ")}return`${i}${o}`})(t.scope,{prefix:this.classPrefix});this.span(a)}closeNode(t){Ai(t)&&(this.buffer+="</span>")}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const xi=(n={})=>{const t={children:[]};return Object.assign(t,n),t};class ra{constructor(){this.rootNode=xi(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const a=xi({scope:t});this.add(a),this.stack.push(a)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,a){return typeof a=="string"?t.addText(a):a.children&&(t.openNode(a),a.children.forEach(o=>this._walk(t,o)),t.closeNode(a)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(a=>typeof a=="string")?t.children=[t.children.join("")]:t.children.forEach(a=>{ra._collapse(a)}))}}class B_ extends ra{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,a){const o=t.root;a&&(o.scope=`language:${a}`),this.add(o)}toHTML(){return new U_(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function On(n){return n?typeof n=="string"?n:n.source:null}function So(n){return Ze("(?=",n,")")}function H_(n){return Ze("(?:",n,")*")}function F_(n){return Ze("(?:",n,")?")}function Ze(...n){return n.map(t=>On(t)).join("")}function aa(...n){return"("+(function(a){const o=a[a.length-1];return typeof o=="object"&&o.constructor===Object?(a.splice(a.length-1,1),o):{}}(n).capture?"":"?:")+n.map(a=>On(a)).join("|")+")"}function Eo(n){return new RegExp(n.toString()+"|").exec("").length-1}const z_=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Tr(n,{joinWith:t}){let a=0;return n.map(o=>{a+=1;const i=a;let s=On(o),l="";for(;s.length>0;){const c=z_.exec(s);if(!c){l+=s;break}l+=s.substring(0,c.index),s=s.substring(c.index+c[0].length),c[0][0]==="\\"&&c[1]?l+="\\"+String(Number(c[1])+i):(l+=c[0],c[0]==="("&&a++)}return l}).map(o=>`(${o})`).join(t)}const Oo="[a-zA-Z]\\w*",ia="[a-zA-Z_]\\w*",ko="\\b\\d+(\\.\\d+)?",wo="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",To="\\b(0b[01]+)",kn={begin:"\\\\[\\s\\S]",relevance:0},K_={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[kn]},J_={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[kn]},Et=function(n,t,a={}){const o=$e({scope:"comment",begin:n,end:t,contains:[]},a);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=aa("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:Ze(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},G_=Et("//","$"),W_=Et("/\\*","\\*/"),Z_=Et("#","$"),V_={scope:"number",begin:ko,relevance:0},X_={scope:"number",begin:wo,relevance:0},Q_={scope:"number",begin:To,relevance:0},Y_={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[kn,{begin:/\[/,end:/\]/,relevance:0,contains:[kn]}]},ev={scope:"title",begin:Oo,relevance:0},nv={scope:"title",begin:ia,relevance:0},tv={begin:"\\.\\s*"+ia,relevance:0};var Pn=Object.freeze({__proto__:null,APOS_STRING_MODE:K_,BACKSLASH_ESCAPE:kn,BINARY_NUMBER_MODE:Q_,BINARY_NUMBER_RE:To,COMMENT:Et,C_BLOCK_COMMENT_MODE:W_,C_LINE_COMMENT_MODE:G_,C_NUMBER_MODE:X_,C_NUMBER_RE:wo,END_SAME_AS_BEGIN:function(n){return Object.assign(n,{"on:begin":(t,a)=>{a.data._beginMatch=t[1]},"on:end":(t,a)=>{a.data._beginMatch!==t[1]&&a.ignoreMatch()}})},HASH_COMMENT_MODE:Z_,IDENT_RE:Oo,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:tv,NUMBER_MODE:V_,NUMBER_RE:ko,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:J_,REGEXP_MODE:Y_,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(n={})=>{const t=/^#![ ]*\//;return n.binary&&(n.begin=Ze(t,/.*\b/,n.binary,/\b.*/)),$e({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(a,o)=>{a.index!==0&&o.ignoreMatch()}},n)},TITLE_MODE:ev,UNDERSCORE_IDENT_RE:ia,UNDERSCORE_TITLE_MODE:nv});function rv(n,t){n.input[n.index-1]==="."&&t.ignoreMatch()}function av(n,t){n.className!==void 0&&(n.scope=n.className,delete n.className)}function iv(n,t){t&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=rv,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function sv(n,t){Array.isArray(n.illegal)&&(n.illegal=aa(...n.illegal))}function ov(n,t){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function cv(n,t){n.relevance===void 0&&(n.relevance=1)}const lv=(n,t)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const a=Object.assign({},n);Object.keys(n).forEach(o=>{delete n[o]}),n.keywords=a.keywords,n.begin=Ze(a.beforeMatch,So(a.begin)),n.starts={relevance:0,contains:[Object.assign(a,{endsParent:!0})]},n.relevance=0,delete a.beforeMatch},uv=["of","and","for","in","not","or","if","then","parent","list","value"],dv="keyword";function Ao(n,t,a=dv){const o=Object.create(null);return typeof n=="string"?i(a,n.split(" ")):Array.isArray(n)?i(a,n):Object.keys(n).forEach(function(s){Object.assign(o,Ao(n[s],t,s))}),o;function i(s,l){t&&(l=l.map(c=>c.toLowerCase())),l.forEach(function(c){const d=c.split("|");o[d[0]]=[s,pv(d[0],d[1])]})}}function pv(n,t){return t?Number(t):function(a){return uv.includes(a.toLowerCase())}(n)?0:1}const Ni={},Fe=n=>{console.error(n)},Ci=(n,...t)=>{console.log(`WARN: ${n}`,...t)},en=(n,t)=>{Ni[`${n}/${t}`]||(console.log(`Deprecated as of ${n}. ${t}`),Ni[`${n}/${t}`]=!0)},Un=new Error;function qi(n,t,{key:a}){let o=0;const i=n[a],s={},l={};for(let c=1;c<=t.length;c++)l[c+o]=i[c],s[c+o]=!0,o+=Eo(t[c-1]);n[a]=l,n[a]._emit=s,n[a]._multi=!0}function hv(n){(function(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)})(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),function(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw Fe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Un;if(typeof t.beginScope!="object"||t.beginScope===null)throw Fe("beginScope must be object"),Un;qi(t,t.begin,{key:"beginScope"}),t.begin=Tr(t.begin,{joinWith:""})}}(n),function(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw Fe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Un;if(typeof t.endScope!="object"||t.endScope===null)throw Fe("endScope must be object"),Un;qi(t,t.end,{key:"endScope"}),t.end=Tr(t.end,{joinWith:""})}}(n)}function mv(n){function t(i,s){return new RegExp(On(i),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(s?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,s]),this.matchAt+=Eo(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(l=>l[1]);this.matcherRe=t(Tr(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(s);if(!l)return null;const c=l.findIndex((e,h)=>h>0&&e!==void 0),d=this.matchIndexes[c];return l.splice(0,c),Object.assign(l,d)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const l=new a;return this.rules.slice(s).forEach(([c,d])=>l.addRule(c,d)),l.compile(),this.multiRegexes[s]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,l){this.rules.push([s,l]),l.type==="begin"&&this.count++}exec(s){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let c=l.exec(s);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,c=d.exec(s)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=$e(n.classNameAliases||{}),function i(s,l){const c=s;if(s.isCompiled)return c;[av,ov,hv,lv].forEach(e=>e(s,l)),n.compilerExtensions.forEach(e=>e(s,l)),s.__beforeBegin=null,[iv,sv,cv].forEach(e=>e(s,l)),s.isCompiled=!0;let d=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),d=s.keywords.$pattern,delete s.keywords.$pattern),d=d||/\w+/,s.keywords&&(s.keywords=Ao(s.keywords,n.case_insensitive)),c.keywordPatternRe=t(d,!0),l&&(s.begin||(s.begin=/\B|\b/),c.beginRe=t(c.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(c.endRe=t(c.end)),c.terminatorEnd=On(c.end)||"",s.endsWithParent&&l.terminatorEnd&&(c.terminatorEnd+=(s.end?"|":"")+l.terminatorEnd)),s.illegal&&(c.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(e){return function(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(m){return $e(h,{variants:null},m)})),h.cachedVariants?h.cachedVariants:xo(h)?$e(h,{starts:h.starts?$e(h.starts):null}):Object.isFrozen(h)?$e(h):h}(e==="self"?s:e)})),s.contains.forEach(function(e){i(e,c)}),s.starts&&i(s.starts,l),c.matcher=function(e){const h=new o;return e.contains.forEach(m=>h.addRule(m.begin,{rule:m,type:"begin"})),e.terminatorEnd&&h.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&h.addRule(e.illegal,{type:"illegal"}),h}(c),c}(n)}function xo(n){return!!n&&(n.endsWithParent||xo(n.starts))}class fv extends Error{constructor(t,a){super(t),this.name="HTMLInjectionError",this.html=a}}const cr=vo,Ri=$e,Li=Symbol("nomatch"),No=function(n){const t=Object.create(null),a=Object.create(null),o=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let c={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:B_};function d(k){return c.noHighlightRe.test(k)}function e(k,T,N){let j="",$="";typeof T=="object"?(j=k,N=T.ignoreIllegals,$=T.language):(en("10.7.0","highlight(lang, code, ...args) has been deprecated."),en("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=k,j=T),N===void 0&&(N=!0);const R={code:j,language:$};w("before:highlight",R);const U=R.result?R.result:h(R.language,R.code,N);return U.code=R.code,w("after:highlight",U),U}function h(k,T,N,j){const $=Object.create(null);function R(){if(!q.keywords)return void X.addText(P);let A=0;q.keywordPatternRe.lastIndex=0;let C=q.keywordPatternRe.exec(P),K="";for(;C;){K+=P.substring(A,C.index);const Z=ae.case_insensitive?C[0].toLowerCase():C[0],re=(B=Z,q.keywords[B]);if(re){const[Oe,wt]=re;if(X.addText(K),K="",$[Z]=($[Z]||0)+1,$[Z]<=7&&(Xe+=wt),Oe.startsWith("_"))K+=C[0];else{const qn=ae.classNameAliases[Oe]||Oe;ee(C[0],qn)}}else K+=C[0];A=q.keywordPatternRe.lastIndex,C=q.keywordPatternRe.exec(P)}var B;K+=P.substring(A),X.addText(K)}function U(){q.subLanguage!=null?function(){if(P==="")return;let A=null;if(typeof q.subLanguage=="string"){if(!t[q.subLanguage])return void X.addText(P);A=h(q.subLanguage,P,!0,I[q.subLanguage]),I[q.subLanguage]=A._top}else A=m(P,q.subLanguage.length?q.subLanguage:null);q.relevance>0&&(Xe+=A.relevance),X.__addSublanguage(A._emitter,A.language)}():R(),P=""}function ee(A,C){A!==""&&(X.startScope(C),X.addText(A),X.endScope())}function z(A,C){let K=1;const B=C.length-1;for(;K<=B;){if(!A._emit[K]){K++;continue}const Z=ae.classNameAliases[A[K]]||A[K],re=C[K];Z?ee(re,Z):(P=re,R(),P=""),K++}}function ne(A,C){return A.scope&&typeof A.scope=="string"&&X.openNode(ae.classNameAliases[A.scope]||A.scope),A.beginScope&&(A.beginScope._wrap?(ee(P,ae.classNameAliases[A.beginScope._wrap]||A.beginScope._wrap),P=""):A.beginScope._multi&&(z(A.beginScope,C),P="")),q=Object.create(A,{parent:{value:q}}),q}function ue(A,C,K){let B=function(Z,re){const Oe=Z&&Z.exec(re);return Oe&&Oe.index===0}(A.endRe,K);if(B){if(A["on:end"]){const Z=new Ti(A);A["on:end"](C,Z),Z.isMatchIgnored&&(B=!1)}if(B){for(;A.endsParent&&A.parent;)A=A.parent;return A}}if(A.endsWithParent)return ue(A.parent,C,K)}function Se(A){return q.matcher.regexIndex===0?(P+=A[0],1):(kt=!0,0)}function Ne(A){const C=A[0],K=T.substring(A.index),B=ue(q,A,K);if(!B)return Li;const Z=q;q.endScope&&q.endScope._wrap?(U(),ee(C,q.endScope._wrap)):q.endScope&&q.endScope._multi?(U(),z(q.endScope,A)):Z.skip?P+=C:(Z.returnEnd||Z.excludeEnd||(P+=C),U(),Z.excludeEnd&&(P=C));do q.scope&&X.closeNode(),q.skip||q.subLanguage||(Xe+=q.relevance),q=q.parent;while(q!==B.parent);return B.starts&&ne(B.starts,A),Z.returnEnd?0:C.length}let pe={};function Ee(A,C){const K=C&&C[0];if(P+=A,K==null)return U(),0;if(pe.type==="begin"&&C.type==="end"&&pe.index===C.index&&K===""){if(P+=T.slice(C.index,C.index+1),!i){const B=new Error(`0 width match regex (${k})`);throw B.languageName=k,B.badRule=pe.rule,B}return 1}if(pe=C,C.type==="begin")return function(B){const Z=B[0],re=B.rule,Oe=new Ti(re),wt=[re.__beforeBegin,re["on:begin"]];for(const qn of wt)if(qn&&(qn(B,Oe),Oe.isMatchIgnored))return Se(Z);return re.skip?P+=Z:(re.excludeBegin&&(P+=Z),U(),re.returnBegin||re.excludeBegin||(P=Z)),ne(re,B),re.returnBegin?0:Z.length}(C);if(C.type==="illegal"&&!N){const B=new Error('Illegal lexeme "'+K+'" for mode "'+(q.scope||"<unnamed>")+'"');throw B.mode=q,B}if(C.type==="end"){const B=Ne(C);if(B!==Li)return B}if(C.type==="illegal"&&K==="")return 1;if(Ot>1e5&&Ot>3*C.index)throw new Error("potential infinite loop, way more iterations than matches");return P+=K,K.length}const ae=u(k);if(!ae)throw Fe(s.replace("{}",k)),new Error('Unknown language: "'+k+'"');const Ve=mv(ae);let Ce="",q=j||Ve;const I={},X=new c.__emitter(c);(function(){const A=[];for(let C=q;C!==ae;C=C.parent)C.scope&&A.unshift(C.scope);A.forEach(C=>X.openNode(C))})();let P="",Xe=0,Ie=0,Ot=0,kt=!1;try{if(ae.__emitTokens)ae.__emitTokens(T,X);else{for(q.matcher.considerAll();;){Ot++,kt?kt=!1:q.matcher.considerAll(),q.matcher.lastIndex=Ie;const A=q.matcher.exec(T);if(!A)break;const C=Ee(T.substring(Ie,A.index),A);Ie=A.index+C}Ee(T.substring(Ie))}return X.finalize(),Ce=X.toHTML(),{language:k,value:Ce,relevance:Xe,illegal:!1,_emitter:X,_top:q}}catch(A){if(A.message&&A.message.includes("Illegal"))return{language:k,value:cr(T),illegal:!0,relevance:0,_illegalBy:{message:A.message,index:Ie,context:T.slice(Ie-100,Ie+100),mode:A.mode,resultSoFar:Ce},_emitter:X};if(i)return{language:k,value:cr(T),illegal:!1,relevance:0,errorRaised:A,_emitter:X,_top:q};throw A}}function m(k,T){T=T||c.languages||Object.keys(t);const N=function(z){const ne={value:cr(z),illegal:!1,relevance:0,_top:l,_emitter:new c.__emitter(c)};return ne._emitter.addText(z),ne}(k),j=T.filter(u).filter(S).map(z=>h(z,k,!1));j.unshift(N);const $=j.sort((z,ne)=>{if(z.relevance!==ne.relevance)return ne.relevance-z.relevance;if(z.language&&ne.language){if(u(z.language).supersetOf===ne.language)return 1;if(u(ne.language).supersetOf===z.language)return-1}return 0}),[R,U]=$,ee=R;return ee.secondBest=U,ee}function f(k){let T=null;const N=function(R){let U=R.className+" ";U+=R.parentNode?R.parentNode.className:"";const ee=c.languageDetectRe.exec(U);if(ee){const z=u(ee[1]);return z||(Ci(s.replace("{}",ee[1])),Ci("Falling back to no-highlight mode for this block.",R)),z?ee[1]:"no-highlight"}return U.split(/\s+/).find(z=>d(z)||u(z))}(k);if(d(N))return;if(w("before:highlightElement",{el:k,language:N}),k.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",k);if(k.children.length>0&&(c.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(k)),c.throwUnescapedHTML))throw new fv("One of your code blocks includes unescaped HTML.",k.innerHTML);T=k;const j=T.textContent,$=N?e(j,{language:N,ignoreIllegals:!0}):m(j);k.innerHTML=$.value,k.dataset.highlighted="yes",function(R,U,ee){const z=U&&a[U]||ee;R.classList.add("hljs"),R.classList.add(`language-${z}`)}(k,N,$.language),k.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(k.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),w("after:highlightElement",{el:k,result:$,text:j})}let g=!1;function p(){if(document.readyState==="loading")return void(g=!0);document.querySelectorAll(c.cssSelector).forEach(f)}function u(k){return k=(k||"").toLowerCase(),t[k]||t[a[k]]}function r(k,{languageName:T}){typeof k=="string"&&(k=[k]),k.forEach(N=>{a[N.toLowerCase()]=T})}function S(k){const T=u(k);return T&&!T.disableAutodetect}function w(k,T){const N=k;o.forEach(function(j){j[N]&&j[N](T)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){g&&p()},!1),Object.assign(n,{highlight:e,highlightAuto:m,highlightAll:p,highlightElement:f,highlightBlock:function(k){return en("10.7.0","highlightBlock will be removed entirely in v12.0"),en("10.7.0","Please use highlightElement now."),f(k)},configure:function(k){c=Ri(c,k)},initHighlighting:()=>{p(),en("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){p(),en("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(k,T){let N=null;try{N=T(n)}catch(j){if(Fe("Language definition for '{}' could not be registered.".replace("{}",k)),!i)throw j;Fe(j),N=l}N.name||(N.name=k),t[k]=N,N.rawDefinition=T.bind(null,n),N.aliases&&r(N.aliases,{languageName:k})},unregisterLanguage:function(k){delete t[k];for(const T of Object.keys(a))a[T]===k&&delete a[T]},listLanguages:function(){return Object.keys(t)},getLanguage:u,registerAliases:r,autoDetection:S,inherit:Ri,addPlugin:function(k){(function(T){T["before:highlightBlock"]&&!T["before:highlightElement"]&&(T["before:highlightElement"]=N=>{T["before:highlightBlock"](Object.assign({block:N.el},N))}),T["after:highlightBlock"]&&!T["after:highlightElement"]&&(T["after:highlightElement"]=N=>{T["after:highlightBlock"](Object.assign({block:N.el},N))})})(k),o.push(k)},removePlugin:function(k){const T=o.indexOf(k);T!==-1&&o.splice(T,1)}}),n.debugMode=function(){i=!1},n.safeMode=function(){i=!0},n.versionString="11.9.0",n.regex={concat:Ze,lookahead:So,either:aa,optional:F_,anyNumberOfTimes:H_};for(const k in Pn)typeof Pn[k]=="object"&&_o(Pn[k]);return Object.assign(n,Pn),n},sn=No({});sn.newInstance=()=>No({});var gv=sn;sn.HighlightJS=sn,sn.default=sn;var G=sh(gv);function Co(n){return n?typeof n=="string"?n:n.source:null}function Bn(n){return H("(?=",n,")")}function H(...n){return n.map(t=>Co(t)).join("")}function ce(...n){return"("+(function(a){const o=a[a.length-1];return typeof o=="object"&&o.constructor===Object?(a.splice(a.length-1,1),o):{}}(n).capture?"":"?:")+n.map(a=>Co(a)).join("|")+")"}const sa=n=>H(/\b/,n,/\w$/.test(n)?/\b/:/\B/),yv=["Protocol","Type"].map(sa),$i=["init","self"].map(sa),bv=["Any","Self"],lr=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Mi=["false","nil","true"],_v=["assignment","associativity","higherThan","left","lowerThan","none","right"],vv=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],Di=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],qo=ce(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),Ro=ce(qo,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),ur=H(qo,Ro,"*"),Lo=ce(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),at=ce(Lo,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),ke=H(Lo,at,"*"),dr=H(/[A-Z]/,at,"*"),Sv=["attached","autoclosure",H(/convention\(/,ce("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",H(/objc\(/,ke,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],Ev=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];var nn="[0-9](_*[0-9])*",Hn=`\\.(${nn})`,Fn="[0-9a-fA-F](_*[0-9a-fA-F])*",Ov={className:"number",variants:[{begin:`(\\b(${nn})((${Hn})|\\.)?|(${Hn}))[eE][+-]?(${nn})[fFdD]?\\b`},{begin:`\\b(${nn})((${Hn})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${Hn})[fFdD]?\\b`},{begin:`\\b(${nn})[fFdD]\\b`},{begin:`\\b0[xX]((${Fn})\\.?|(${Fn})?\\.(${Fn}))[pP][+-]?(${nn})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${Fn})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};const ji="[A-Za-z$_][0-9A-Za-z$_]*",kv=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],wv=["true","false","null","undefined","NaN","Infinity"],$o=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Mo=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Do=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Tv=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Av=[].concat(Do,$o,Mo);var tn="[0-9](_*[0-9])*",zn=`\\.(${tn})`,Kn="[0-9a-fA-F](_*[0-9a-fA-F])*",Ii={className:"number",variants:[{begin:`(\\b(${tn})((${zn})|\\.)?|(${zn}))[eE][+-]?(${tn})[fFdD]?\\b`},{begin:`\\b(${tn})((${zn})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${zn})[fFdD]?\\b`},{begin:`\\b(${tn})[fFdD]\\b`},{begin:`\\b0[xX]((${Kn})\\.?|(${Kn})?\\.(${Kn}))[pP][+-]?(${tn})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${Kn})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function jo(n,t,a){return a===-1?"":n.replace(t,o=>jo(n,t,a-1))}G.registerLanguage("swift",function(n){const t={match:/\s+/,relevance:0},a=n.COMMENT("/\\*","\\*/",{contains:["self"]}),o=[n.C_LINE_COMMENT_MODE,a],i={match:[/\./,ce(...yv,...$i)],className:{2:"keyword"}},s={match:H(/\./,ce(...lr)),relevance:0},l=lr.filter(I=>typeof I=="string").concat(["_|0"]),c={variants:[{className:"keyword",match:ce(...lr.filter(I=>typeof I!="string").concat(bv).map(sa),...$i)}]},d={$pattern:ce(/\b\w+/,/#\w+/),keyword:l.concat(vv),literal:Mi},e=[i,s,c],h=[{match:H(/\./,ce(...Di)),relevance:0},{className:"built_in",match:H(/\b/,ce(...Di),/(?=\()/)}],m={match:/->/,relevance:0},f=[m,{className:"operator",relevance:0,variants:[{match:ur},{match:`\\.(\\.|${Ro})+`}]}],g="([0-9]_*)+",p="([0-9a-fA-F]_*)+",u={className:"number",relevance:0,variants:[{match:`\\b(${g})(\\.(${g}))?([eE][+-]?(${g}))?\\b`},{match:`\\b0x(${p})(\\.(${p}))?([pP][+-]?(${g}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},r=(I="")=>({className:"subst",variants:[{match:H(/\\/,I,/[0\\tnr"']/)},{match:H(/\\/,I,/u\{[0-9a-fA-F]{1,8}\}/)}]}),S=(I="")=>({className:"subst",match:H(/\\/,I,/[\t ]*(?:[\r\n]|\r\n)/)}),w=(I="")=>({className:"subst",label:"interpol",begin:H(/\\/,I,/\(/),end:/\)/}),k=(I="")=>({begin:H(I,/"""/),end:H(/"""/,I),contains:[r(I),S(I),w(I)]}),T=(I="")=>({begin:H(I,/"/),end:H(/"/,I),contains:[r(I),w(I)]}),N={className:"string",variants:[k(),k("#"),k("##"),k("###"),T(),T("#"),T("##"),T("###")]},j=[n.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[n.BACKSLASH_ESCAPE]}],$={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:j},R=I=>{const X=H(I,/\//),P=H(/\//,I);return{begin:X,end:P,contains:[...j,{scope:"comment",begin:`#(?!.*${P})`,end:/$/}]}},U={scope:"regexp",variants:[R("###"),R("##"),R("#"),$]},ee={match:H(/`/,ke,/`/)},z=[ee,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${at}+`}],ne=[{match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:Ev,contains:[...f,u,N]}]}},{scope:"keyword",match:H(/@/,ce(...Sv))},{scope:"meta",match:H(/@/,ke)}],ue={match:Bn(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:H(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,at,"+")},{className:"type",match:dr,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:H(/\s+&\s+/,Bn(dr)),relevance:0}]},Se={begin:/</,end:/>/,keywords:d,contains:[...o,...e,...ne,m,ue]};ue.contains.push(Se);const Ne={begin:/\(/,end:/\)/,relevance:0,keywords:d,contains:["self",{match:H(ke,/\s*:/),keywords:"_|0",relevance:0},...o,U,...e,...h,...f,u,N,...z,...ne,ue]},pe={begin:/</,end:/>/,keywords:"repeat each",contains:[...o,ue]},Ee={begin:/\(/,end:/\)/,keywords:d,contains:[{begin:ce(Bn(H(ke,/\s*:/)),Bn(H(ke,/\s+/,ke,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:ke}]},...o,...e,...f,u,N,...ne,ue,Ne],endsParent:!0,illegal:/["']/},ae={match:[/(func|macro)/,/\s+/,ce(ee.match,ke,ur)],className:{1:"keyword",3:"title.function"},contains:[pe,Ee,t],illegal:[/\[/,/%/]},Ve={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[pe,Ee,t],illegal:/\[|%/},Ce={match:[/operator/,/\s+/,ur],className:{1:"keyword",3:"title"}},q={begin:[/precedencegroup/,/\s+/,dr],className:{1:"keyword",3:"title"},contains:[ue],keywords:[..._v,...Mi],end:/}/};for(const I of N.variants){const X=I.contains.find(Xe=>Xe.label==="interpol");X.keywords=d;const P=[...e,...h,...f,u,N,...z];X.contains=[...P,{begin:/\(/,end:/\)/,contains:["self",...P]}]}return{name:"Swift",keywords:d,contains:[...o,ae,Ve,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:d,contains:[n.inherit(n.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...e]},Ce,q,{beginKeywords:"import",end:/$/,contains:[...o],relevance:0},U,...e,...h,...f,u,N,...z,...ne,ue,Ne]}}),G.registerLanguage("scala",function(n){const t=n.regex,a={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:/\$\{/,end:/\}/}]},o={className:"string",variants:[{begin:'"""',end:'"""'},{begin:'"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,a]},{className:"string",begin:'[a-z]+"""',end:'"""',contains:[a],relevance:10}]},i={className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},s={className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,relevance:0},l={className:"class",beginKeywords:"class object trait type",end:/[:={\[\n;]/,excludeEnd:!0,contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},s]},c={className:"function",beginKeywords:"def",end:t.lookahead(/[:={\[(\n;]/),contains:[s]};return{name:"Scala",keywords:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"},contains:[{begin:["//>",/\s+/,/using/,/\s+/,/\S+/],beginScope:{1:"comment",3:"keyword",5:"type"},end:/$/,contains:[{className:"string",begin:/\S+/}]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,o,i,c,l,n.C_NUMBER_MODE,{begin:[/^\s*/,"extension",/\s+(?=[[(])/],beginScope:{2:"keyword"}},{begin:[/^\s*/,/end/,/\s+/,/(extension\b)?/],beginScope:{2:"keyword",4:"keyword"}},{match:/\.inline\b/},{begin:/\binline(?=\s)/,keywords:"inline"},{begin:[/\(\s*/,/using/,/\s+(?!\))/],beginScope:{2:"keyword"}},{className:"meta",begin:"@[A-Za-z]+"}]}}),G.registerLanguage("rust",function(n){const t=n.regex,a={className:"title.function.invoke",relevance:0,begin:t.concat(/\b/,/(?!let|for|while|if|else|match\b)/,n.IDENT_RE,t.lookahead(/\s*\(/))},o="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],s=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:n.IDENT_RE+"!?",type:s,keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.COMMENT("/\\*","\\*/",{contains:["self"]}),n.inherit(n.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+o},{begin:"\\b0o([0-7_]+)"+o},{begin:"\\b0x([A-Fa-f0-9_]+)"+o},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+o}],relevance:0},{begin:[/fn/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,n.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:n.IDENT_RE+"::",keywords:{keyword:"Self",built_in:i,type:s}},{className:"punctuation",begin:"->"},a]}}),G.registerLanguage("ruby",function(n){const t=n.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",o=t.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=t.concat(o,/(::\w+)*/),s={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},l={className:"doctag",begin:"@[A-Za-z]+"},c={begin:"#<",end:">"},d=[n.COMMENT("#","$",{contains:[l]}),n.COMMENT("^=begin","^=end",{contains:[l],relevance:10}),n.COMMENT("^__END__",n.MATCH_NOTHING_RE)],e={className:"subst",begin:/#\{/,end:/\}/,keywords:s},h={className:"string",contains:[n.BACKSLASH_ESCAPE,e],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:t.concat(/<<[-~]?'?/,t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[n.BACKSLASH_ESCAPE,e]})]}]},m="[0-9](_?[0-9])*",f={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},g={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:s}]},p=[h,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{match:[/\b(class|module)\s+/,i]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:s},{match:[/(include|extend)\s+/,i],scope:{2:"title.class"},keywords:s},{relevance:0,match:[i,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:o,scope:"title.class"},{match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[g]},{begin:n.IDENT_RE+"::"},{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[h,{begin:a}],relevance:0},f,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:s},{begin:"("+n.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[n.BACKSLASH_ESCAPE,e],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(c,d),relevance:0}].concat(c,d);e.contains=p,g.contains=p;const u=[{begin:/^\s*=>/,starts:{end:"$",contains:p}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:s,contains:p}}];return d.unshift(c),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:s,illegal:/\/\*/,contains:[n.SHEBANG({binary:"ruby"})].concat(u).concat(d).concat(p)}}),G.registerLanguage("python",function(n){const t=n.regex,a=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),o=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],i={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:o,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:i,illegal:/#/},c={begin:/\{\{/,relevance:0},d={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s,c,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s,c,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,c,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,c,l]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},e="[0-9](_?[0-9])*",h=`(\\b(${e}))?\\.(${e})|\\b(${e})\\.`,m=`\\b|${o.join("|")}`,f={className:"number",relevance:0,variants:[{begin:`(\\b(${e})|(${h}))[eE][+-]?(${e})[jJ]?(?=${m})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${m})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${m})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`},{begin:`\\b(${e})[jJ](?=${m})`}]},g={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:i,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},p={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:["self",s,f,d,n.HASH_COMMENT_MODE]}]};return l.contains=[d,f,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:i,illegal:/(<\/|\?)|=>/,contains:[s,f,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},d,g,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[p]},{variants:[{match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[f,p,d]}]}}),G.registerLanguage("powershell",function(n){const t={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},a={begin:"`[\\s\\S]",relevance:0},o={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},i={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[a,o,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},s={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},l=n.inherit(n.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),c={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},d={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[n.TITLE_MODE]},e={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[o]}]},h={begin:/using\s/,end:/$/,returnBegin:!0,contains:[i,s,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},m={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},f={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(t.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},n.inherit(n.TITLE_MODE,{endsParent:!0})]},g=[f,l,a,n.NUMBER_MODE,i,s,c,o,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/@\B/,relevance:0}],p={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",g,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return f.contains.unshift(p),{name:"PowerShell",aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:t,contains:g.concat(d,e,h,m,p)}}),G.registerLanguage("php",function(n){const t=n.regex,a=/(?![A-Za-z0-9])(?![$])/,o=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,a),i=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,a),s={scope:"variable",match:"\\$+"+o},l={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},c=n.inherit(n.APOS_STRING_MODE,{illegal:null}),d=`[ 	
]`,e={scope:"string",variants:[n.inherit(n.QUOTE_STRING_MODE,{illegal:null,contains:n.QUOTE_STRING_MODE.contains.concat(l)}),c,{begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:n.QUOTE_STRING_MODE.contains.concat(l),"on:begin":($,R)=>{R.data._beginMatch=$[1]||$[2]},"on:end":($,R)=>{R.data._beginMatch!==$[1]&&R.ignoreMatch()}},n.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/})]},h={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},m=["false","null","true"],f=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],g=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],p={keyword:f,literal:($=>{const R=[];return $.forEach(U=>{R.push(U),U.toLowerCase()===U?R.push(U.toUpperCase()):R.push(U.toLowerCase())}),R})(m),built_in:g},u=$=>$.map(R=>R.replace(/\|\d+$/,"")),r={variants:[{match:[/new/,t.concat(d,"+"),t.concat("(?!",u(g).join("\\b|"),"\\b)"),i],scope:{1:"keyword",4:"title.class"}}]},S=t.concat(o,"\\b(?!\\()"),w={variants:[{match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),S],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[i,t.concat(/::/,t.lookahead(/(?!class\b)/)),S],scope:{1:"title.class",3:"variable.constant"}},{match:[i,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[i,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},k={scope:"attr",match:t.concat(o,t.lookahead(":"),t.lookahead(/(?!::)/))},T={relevance:0,begin:/\(/,end:/\)/,keywords:p,contains:[k,s,w,n.C_BLOCK_COMMENT_MODE,e,h,r]},N={relevance:0,match:[/\b/,t.concat("(?!fn\\b|function\\b|",u(f).join("\\b|"),"|",u(g).join("\\b|"),"\\b)"),o,t.concat(d,"*"),t.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[T]};T.contains.push(N);const j=[k,w,n.C_BLOCK_COMMENT_MODE,e,h,r];return{case_insensitive:!1,keywords:p,contains:[{begin:t.concat(/#\[\s*/,i),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:m,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:m,keyword:["new","array"]},contains:["self",...j]},...j,{scope:"meta",match:i}]},n.HASH_COMMENT_MODE,n.COMMENT("//","$"),n.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:n.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},s,N,w,{match:[/const/,/\s/,o],scope:{1:"keyword",3:"variable.constant"}},r,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},n.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:p,contains:["self",s,w,n.C_BLOCK_COMMENT_MODE,e,h]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[n.inherit(n.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},n.UNDERSCORE_TITLE_MODE]},e,h]}}),G.registerLanguage("perl",function(n){const t=n.regex,a=/[dualxmsipngr]{0,12}/,o={$pattern:/[\w.]+/,keyword:["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"].join(" ")},i={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:o},s={begin:/->\{/,end:/\}/},l={variants:[{begin:/\$\d/},{begin:t.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},c=[n.BACKSLASH_ESCAPE,i,l],d=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],e=(f,g,p="\\1")=>{const u=p==="\\1"?p:t.concat(p,g);return t.concat(t.concat("(?:",f,")"),g,/(?:\\.|[^\\\/])*?/,u,/(?:\\.|[^\\\/])*?/,p,a)},h=(f,g,p)=>t.concat(t.concat("(?:",f,")"),g,/(?:\\.|[^\\\/])*?/,p,a),m=[l,n.HASH_COMMENT_MODE,n.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),s,{className:"string",contains:c,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+n.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[n.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:e("s|tr|y",t.either(...d,{capture:!0}))},{begin:e("s|tr|y","\\(","\\)")},{begin:e("s|tr|y","\\[","\\]")},{begin:e("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:h("(?:m|qr)?",/\//,/\//)},{begin:h("m|qr",t.either(...d,{capture:!0}),/\1/)},{begin:h("m|qr",/\(/,/\)/)},{begin:h("m|qr",/\[/,/\]/)},{begin:h("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[n.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return i.contains=m,s.contains=m,{name:"Perl",aliases:["pl","pm"],keywords:o,contains:m}}),G.registerLanguage("ocaml",function(n){return{name:"OCaml",aliases:["ml"],keywords:{$pattern:"[a-z_]\\w*!?",keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},illegal:/\/\/|>>/,contains:[{className:"literal",begin:"\\[(\\|\\|)?\\]|\\(\\)",relevance:0},n.COMMENT("\\(\\*","\\*\\)",{contains:["self"]}),{className:"symbol",begin:"'[A-Za-z_](?!')[\\w']*"},{className:"type",begin:"`[A-Z][\\w']*"},{className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},{begin:"[a-z_]\\w*'[\\w']*",relevance:0},n.inherit(n.APOS_STRING_MODE,{className:"string",relevance:0}),n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),{className:"number",begin:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",relevance:0},{begin:/->/}]}}),G.registerLanguage("objectivec",function(n){const t=/[a-zA-Z@][a-zA-Z0-9_]*/,a={$pattern:t,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{"variable.language":["this","super"],$pattern:t,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},illegal:"</",contains:[{className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,n.C_NUMBER_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+a.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:a,contains:[n.UNDERSCORE_TITLE_MODE]},{begin:"\\."+n.UNDERSCORE_IDENT_RE,relevance:0}]}}),G.registerLanguage("lua",function(n){const t="\\[=*\\[",a="\\]=*\\]",o={begin:t,end:a,contains:["self"]},i=[n.COMMENT("--(?!"+t+")","$"),n.COMMENT("--"+t,a,{contains:[o],relevance:10})];return{name:"Lua",keywords:{$pattern:n.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[n.inherit(n.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:i}].concat(i)},n.C_NUMBER_MODE,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{className:"string",begin:t,end:a,contains:[o],relevance:5}])}}),G.registerLanguage("kotlin",function(n){const t={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"@"},o={className:"subst",begin:/\$\{/,end:/\}/,contains:[n.C_NUMBER_MODE]},i={className:"variable",begin:"\\$"+n.UNDERSCORE_IDENT_RE},s={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[i,o]},{begin:"'",end:"'",illegal:/\n/,contains:[n.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[n.BACKSLASH_ESCAPE,i,o]}]};o.contains.push(s);const l={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+n.UNDERSCORE_IDENT_RE+")?"},c={className:"meta",begin:"@"+n.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[n.inherit(s,{className:"string"}),"self"]}]},d=Ov,e=n.COMMENT("/\\*","\\*/",{contains:[n.C_BLOCK_COMMENT_MODE]}),h={variants:[{className:"type",begin:n.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},m=h;return m.variants[1].contains=[h],h.variants[1].contains=[m],{name:"Kotlin",aliases:["kt","kts"],keywords:t,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),n.C_LINE_COMMENT_MODE,e,{className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},a,l,c,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:t,relevance:5,contains:[{begin:n.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[n.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[h,n.C_LINE_COMMENT_MODE,e],relevance:0},n.C_LINE_COMMENT_MODE,e,l,c,s,n.C_NUMBER_MODE]},e]},{begin:[/class|interface|trait/,/\s+/,n.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},n.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},l,c]},s,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},d]}}),G.registerLanguage("javascript",function(n){const t=n.regex,a=ji,o="<>",i="</>",s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(Se,Ne)=>{const pe=Se[0].length+Se.index,Ee=Se.input[pe];if(Ee==="<"||Ee===",")return void Ne.ignoreMatch();let ae;Ee===">"&&(((Ce,{after:q})=>{const I="</"+Ce[0].slice(1);return Ce.input.indexOf(I,q)!==-1})(Se,{after:pe})||Ne.ignoreMatch());const Ve=Se.input.substring(pe);((ae=Ve.match(/^\s*=/))||(ae=Ve.match(/^\s+extends\s+/))&&ae.index===0)&&Ne.ignoreMatch()}},l={$pattern:ji,keyword:kv,literal:wv,built_in:Av,"variable.language":Tv},c="[0-9](_?[0-9])*",d=`\\.(${c})`,e="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${e})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${e})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},f={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},g={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"css"}},p={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,m],subLanguage:"graphql"}},u={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,m]},r={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},S=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,f,g,p,u,{match:/\$\d+/},h];m.contains=S.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(S)});const w=[].concat(r,m.contains),k=w.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(w)}]),T={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:k},N={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},j={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...$o,...Mo]}},$={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[T],illegal:/%/},R={match:t.concat(/\b/,(U=[...Do,"super","import"],t.concat("(?!",U.join("|"),")")),a,t.lookahead(/\(/)),className:"title.function",relevance:0};var U;const ee={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},z={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},T]},ne="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",ue={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ne)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[T]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:k,CLASS_REFERENCE:j},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,f,g,p,u,r,{match:/\$\d+/},h,j,{className:"attr",begin:a+t.lookahead(":"),relevance:0},ue,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[r,n.REGEXP_MODE,{className:"function",begin:ne,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:k}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o,end:i},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},$,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[T,n.inherit(n.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ee,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[T]},R,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},N,z,{match:/\$[(.]/}]}}),G.registerLanguage("java",function(n){const t=n.regex,a="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",o=a+jo("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),i={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},s={className:"meta",begin:"@"+a,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},l={className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[n.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:i,illegal:/<\/|#/,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[n.BACKSLASH_ESCAPE]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[t.concat(/(?!else)/,a),/\s+/,a,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},contains:[l,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+o+"\\s+)",n.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:i,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[s,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,Ii,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},Ii,s]}}),G.registerLanguage("http",function(n){const t="HTTP/([32]|1\\.[01])",a={className:"attribute",begin:n.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},o=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+t+" \\d{3})",end:/$/,contains:[{className:"meta",begin:t},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:o}},{begin:"(?=^[A-Z]+ (.*?) "+t+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:t},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:o}},n.inherit(a,{relevance:0})]}}),G.registerLanguage("go",function(n){const t={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:t,illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"string",variants:[n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:n.C_NUMBER_RE+"[i]",relevance:1},n.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[n.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,illegal:/["']/}]}]}}),G.registerLanguage("dart",function(n){const t={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"},o={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:'"""',end:'"""',contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:"'",end:"'",illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,t,a]},{begin:'"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,t,a]}]};a.contains=[n.C_NUMBER_MODE,o];const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],s=i.map(l=>`${l}?`);return{name:"Dart",keywords:{keyword:["abstract","as","assert","async","await","base","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","interface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","sealed","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","when","while","with","yield"],built_in:i.concat(s).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},contains:[o,n.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),n.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",end:"$",relevance:0}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},n.UNDERSCORE_TITLE_MODE]},n.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}),G.registerLanguage("csharp",function(n){const t={keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],literal:["default","false","null","true"]},a=n.inherit(n.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),o={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},i={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},s=n.inherit(i,{illegal:/\n/}),l={className:"subst",begin:/\{/,end:/\}/,keywords:t},c=n.inherit(l,{illegal:/\n/}),d={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},n.BACKSLASH_ESCAPE,c]},e={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},l]},h=n.inherit(e,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},c]});l.contains=[e,d,i,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,o,n.C_BLOCK_COMMENT_MODE],c.contains=[h,d,s,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,o,n.inherit(n.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const m={variants:[e,d,i,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},f={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]},g=n.IDENT_RE+"(<"+n.IDENT_RE+"(\\s*,\\s*"+n.IDENT_RE+")*>)?(\\[\\])?",p={begin:"@"+n.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:t,illegal:/::/,contains:[n.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},m,o,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},a,f,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,f,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+g+"\\s+)+"+n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:t,contains:[{beginKeywords:["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"].join(" "),relevance:0},{begin:n.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[n.TITLE_MODE,f],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,relevance:0,contains:[m,o,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},p]}}),G.registerLanguage("cpp",function(n){const t=n.regex,a=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),o="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="(?!struct)("+o+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",l={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},d={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},a,n.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},m=t.optional(i)+n.IDENT_RE+"\\s*\\(",f={type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]},g={className:"function.dispatch",relevance:0,keywords:{_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]},begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},p=[g,e,l,a,n.C_BLOCK_COMMENT_MODE,d,c],u={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:f,contains:p.concat([{begin:/\(/,end:/\)/,keywords:f,contains:p.concat(["self"]),relevance:0}]),relevance:0},r={className:"function",begin:"("+s+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:f,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:o,keywords:f,relevance:0},{begin:m,returnBegin:!0,contains:[h],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[c,d]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:f,relevance:0,contains:[a,n.C_BLOCK_COMMENT_MODE,c,d,l,{begin:/\(/,end:/\)/,keywords:f,relevance:0,contains:["self",a,n.C_BLOCK_COMMENT_MODE,c,d,l]}]},l,a,n.C_BLOCK_COMMENT_MODE,e]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:f,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(u,r,g,p,[e,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:f,contains:["self",l]},{begin:n.IDENT_RE+"::",keywords:f},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}),G.registerLanguage("clojure",function(n){const t="a-zA-Z_\\-!.?+*=<>&'",a="[#]?["+t+"]["+t+"0-9/;:$#]*",o="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",i={$pattern:a,built_in:o+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},s={begin:a,relevance:0},l={scope:"number",relevance:0,variants:[{match:/[-+]?0[xX][0-9a-fA-F]+N?/},{match:/[-+]?0[0-7]+N?/},{match:/[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/},{match:/[-+]?[0-9]+\/[0-9]+N?/},{match:/[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/},{match:/[-+]?([1-9][0-9]*|0)N?/}]},c={scope:"character",variants:[{match:/\\o[0-3]?[0-7]{1,2}/},{match:/\\u[0-9a-fA-F]{4}/},{match:/\\(newline|space|tab|formfeed|backspace|return)/},{match:/\\\S/,relevance:0}]},d={scope:"regex",begin:/#"/,end:/"/,contains:[n.BACKSLASH_ESCAPE]},e=n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),h={scope:"punctuation",match:/,/,relevance:0},m=n.COMMENT(";","$",{relevance:0}),f={className:"literal",begin:/\b(true|false|nil)\b/},g={begin:"\\[|(#::?"+a+")?\\{",end:"[\\]\\}]",relevance:0},p={className:"symbol",begin:"[:]{1,2}"+a},u={begin:"\\(",end:"\\)"},r={endsWithParent:!0,relevance:0},S={keywords:i,className:"name",begin:a,relevance:0,starts:r},w=[h,u,c,d,e,m,p,g,l,f,s],k={beginKeywords:o,keywords:{$pattern:a,keyword:o},end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:a,relevance:0,excludeEnd:!0,endsParent:!0}].concat(w)};return u.contains=[k,S,r],r.contains=w,g.contains=w,{name:"Clojure",aliases:["clj","edn"],illegal:/\S/,contains:[h,u,c,d,e,m,p,g,l,f]}}),G.registerLanguage("c",function(n){const t=n.regex,a=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),o="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",s="("+o+"|"+t.optional(i)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",l={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},d={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},e={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},a,n.C_BLOCK_COMMENT_MODE]},h={className:"title",begin:t.optional(i)+n.IDENT_RE,relevance:0},m=t.optional(i)+n.IDENT_RE+"\\s*\\(",f={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},g=[e,l,a,n.C_BLOCK_COMMENT_MODE,d,c],p={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:f,contains:g.concat([{begin:/\(/,end:/\)/,keywords:f,contains:g.concat(["self"]),relevance:0}]),relevance:0},u={begin:"("+s+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:f,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:o,keywords:f,relevance:0},{begin:m,returnBegin:!0,contains:[n.inherit(h,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:f,relevance:0,contains:[a,n.C_BLOCK_COMMENT_MODE,c,d,l,{begin:/\(/,end:/\)/,keywords:f,relevance:0,contains:["self",a,n.C_BLOCK_COMMENT_MODE,c,d,l]}]},l,a,n.C_BLOCK_COMMENT_MODE,e]};return{name:"C",aliases:["h"],keywords:f,disableAutodetect:!0,illegal:"</",contains:[].concat(p,u,g,[e,{begin:n.IDENT_RE+"::",keywords:f},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},n.TITLE_MODE]}]),exports:{preprocessor:e,strings:c,keywords:f}}}),G.registerLanguage("brainfuck",function(n){const t={className:"literal",begin:/[+-]+/,relevance:0};return{name:"Brainfuck",aliases:["bf"],contains:[n.COMMENT(/[^\[\]\.,\+\-<> \r\n]/,/[\[\]\.,\+\-<> \r\n]/,{contains:[{match:/[ ]+[^\[\]\.,\+\-<> \r\n]/,relevance:0}],returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",begin:"[\\.,]",relevance:0},{begin:/(?=\+\+|--)/,contains:[t]},t]}}),G.registerLanguage("bash",function(n){const t=n.regex,a={},o={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[a]}]};Object.assign(a,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},o]});const i={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},l={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,a,i]};i.contains.push(l);const c={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,a]},d=n.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),e={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[d,n.SHEBANG(),e,c,n.HASH_COMMENT_MODE,s,{match:/(\/[a-z._-]+)+/},l,{match:/\\"/},{className:"string",begin:/'/,end:/'/},{match:/\\'/},a]}}),G.registerLanguage("r",function(n){const t=n.regex,a=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,o=t.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),i=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,s=t.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:a,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[n.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:a},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),n.HASH_COMMENT_MODE,{scope:"string",contains:[n.BACKSLASH_ESCAPE],variants:[n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),n.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[i,o]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,o]},{scope:{1:"punctuation",2:"number"},match:[s,o]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,o]}]},{scope:{3:"operator"},match:[a,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:i},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:s},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}});var xv=function(){function n(){(function(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),Pe(this,"_baseUrl",""),Pe(this,"_url",""),Pe(this,"_method","GET"),Pe(this,"_params",[]),Pe(this,"_mimeType","application/x-www-form-urlencoded"),Pe(this,"_lang","javascript"),Pe(this,"_library","xmlhttprequest")}var t,a;return t=n,(a=[{key:"library",value:function(o){return o=o.toLowerCase(),this._library=o,this}},{key:"lang",value:function(o){var i;if(o=o.toLowerCase(),!this.config()[o])throw new Error("bad lang: "+o);return this._lang=o,this._library=(i=this.config()[o][0])!==null&&i!==void 0?i:null,this}},{key:"mimeType",value:function(o){return this._mimeType=o,this}},{key:"params",value:function(o){return this._params=o,this}},{key:"method",value:function(o){return this._method=o,this}},{key:"url",value:function(o){return o=o.startsWith("/")?o.substring(1):o,this._url=o,this}},{key:"baseUrl",value:function(o){return o.endsWith("/")||(o+="/"),this._baseUrl=o,this}},{key:"convertParams",value:function(){var o,i=this,s=this._baseUrl;s.endsWith("/")||(s+="/");var l=this._url;l.startsWith("/")&&(l=l.substring(1)),this._params.filter((function(m){return y(this,i),m.in==="path"}).bind(this)).forEach((function(m){y(this,i),l=l.replace("{".concat(m.name,"}"),m.value)}).bind(this));var c=this._params.filter((function(m){return y(this,i),m.in==="query"}).bind(this)),d=(function(m,f){var g=this;return y(this,i),Array.isArray(f)?f.map((function(p){return y(this,g),d(m,p)}).bind(this)).join("&"):x(f)==="object"?Object.entries(f).map((function(p){y(this,g);var u=yn(p,2),r=u[0],S=u[1];return d("".concat(m,"[").concat(r,"]"),S)}).bind(this)).join("&"):"".concat(m,"=").concat(f)}).bind(this),e=JSON.parse(JSON.stringify(c)).map((function(m){return y(this,i),d(m.name,m.value)}).bind(this)).join("&");e!==""&&(l+="?"+e),l=s+l;var h=(o=s.match(/^https?:\/\/([^\/]+)/i)[1])!==null&&o!==void 0?o:"";return{method:this._method,mimeType:this._mimeType,url:l,host:h,headers:this._params.filter((function(m){return y(this,i),m.in==="headers"}).bind(this)),postData:this._params.filter((function(m){return y(this,i),m.in==="postData"}).bind(this)),cookies:this._params.filter((function(m){return y(this,i),m.in==="cookie"}).bind(this))}}},{key:"cleanup",value:function(o){return o.replace(/&amp;/gim,"&").replace(/&#39;/gim,"'").replace(/&#34;/gim,'"').replace(/\n\n+/gim,`
`).replace(/^\n/gim,"")}},{key:"generate",value:function(){var o,i=(o=wi[this._lang+"/"+this._library])!==null&&o!==void 0?o:null;if(!i)throw new Error("bad library");var s=this.convertParams();return this.cleanup(i(s))}},{key:"generateHighlight",value:function(){return G.highlight(this.generate(),{language:this._lang,ignoreIllegals:!0}).value}},{key:"makeHighlightCode",value:function(o){return G.highlight(o,{language:this._lang,ignoreIllegals:!0}).value}},{key:"config",value:function(){var o=this;return Object.keys(wi).reduce((function(i,s){y(this,o);var l=yn(s.split("/"),2),c=l[0],d=l[1];return i[c]||(i[c]=[]),i[c].push(d),i}).bind(this),{})}}])&&ih(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),n}();const ge=new xv,Nv=ge.config(),Cv={name:"CodeSimples",components:{CustomDropdownWithSubMenu:fs},props:{baseUrl:{type:String,required:!1,default:""},url:{type:String,required:!0},method:{type:String,required:!1,default:"GET"},params:{type:Array,required:!1,default:()=>[]},mimeType:{type:String,required:!1,default:"application/x-www-form-urlencoded"}},data(){return{snippetIndex:"javascript",snippetLibraryIndex:"xmlhttprequest",code:"",html:"",showPopup:!1,onPopupIndex:null,vals:[]}},computed:{config(){return Nv}},watch:{},mounted(){this.genCode()},methods:{copyToClipboard(n){this.$openapidoc.copyToClipboard(this.code,n)},onLangClick(n,t=null){this.snippetIndex=n,this.snippetLibraryIndex=t,this.genCode()},getAbsoluteUrl(){const n=this.baseUrl;if(!n)return window.location.origin;if(/^https?:\/\//i.test(n))return n;const t=window.location.origin;return new URL(n,t).href},genCode(){const n=this.method.toUpperCase();ge.baseUrl(this.getAbsoluteUrl()),ge.url(this.url),ge.method(n),ge.params(JSON.parse(JSON.stringify(this.params))),ge.mimeType(this.mimeType),ge.lang(this.snippetIndex),ge.library(this.snippetLibraryIndex),this.code=ge.generate(),this.html=ge.generateHighlight()}}},qv={class:"oapi-code-simple"},Rv={class:"oapi-code-panel"},Lv={class:"oapi-code-panel__body"},$v=["innerHTML"];function Mv(n,t,a,o,i,s){const l=fs;return b(),_("div",qv,[F(l,{items:s.config,onSelect:s.onLangClick},null,8,["items","onSelect"]),v("div",Rv,[v("div",Lv,[v("button",{class:"oapi-code-panel__btn",onClick:t[0]||(t[0]=Ko((...c)=>s.copyToClipboard&&s.copyToClipboard(...c),["stop","prevent"]))}," Copy "),v("pre",{class:we(["language line-numbers",`language-${i.snippetIndex}`])},[v("code",{class:"language",innerHTML:i.html},null,8,$v)],2)])])])}const Io=W(Cv,[["render",Mv]]),Dv={components:{OpenApiExampleObject:on},props:{examples:{type:Object,required:!0},currentLocale:{type:String,required:!0}}},jv={class:"openapi-examples"},Iv={id:"examples"};function Pv(n,t,a,o,i,s){const l=on;return b(),_("div",jv,[v("h2",Iv,E(n.$openapidoc.getLocaleText("openapidoc.examples")),1),(b(!0),_(L,null,M(a.examples,(c,d)=>(b(),_("div",{key:d,class:"oapi-schema-block"},[F(l,{"current-locale":a.currentLocale,example:c,name:d,"name-tag":"h3"},null,8,["current-locale","example","name"])]))),128))])}const Po=W(Dv,[["render",Pv],["__scopeId","data-v-f147433f"]]),Uv={name:"OpenApiCallbacks",components:{OpenApiResponses:lt,OpenApiRequestBody:ct,OpenApiParameters:ot},props:{callbacks:{type:Object,default:()=>({})},currentLocale:{type:String,default:""},components:{type:Object,default:()=>({})}}},Bv={key:0,class:"oapi-callbacks"},Hv={id:"callbacks"},Fv={class:"oapi-callbacks__list"},zv=["id"],Kv=["innerHTML"],Jv={class:"oapi-callback-op__name"},Gv=["innerHTML"];function Wv(n,t,a,o,i,s){const l=ot,c=ct,d=lt;return a.callbacks?(b(),_("div",Bv,[v("h2",Hv,E(n.$openapidoc.getLocaleText("openapidoc.callbacks")),1),v("div",Fv,[(b(!0),_(L,null,M(a.callbacks,(e,h)=>(b(),_("div",{key:h},[(b(!0),_(L,null,M(e,(m,f)=>(b(),_("div",{key:f,class:"oapi-callback-method"},[v("h3",{id:f+"-"+h,class:"oapi-callback-method__name"},[v("code",null,E(f),1),D(" - "+E(h),1)],8,zv),m.description?(b(),_("div",{key:0,class:"oapi-callback-method__description",innerHTML:m.description},null,8,Kv)):O("",!0),(b(!0),_(L,null,M(m,(g,p)=>(b(),_("div",{key:p,class:"oapi-callback-op"},[v("div",Jv,[v("span",{class:we(["oapi-method-tag",`oapi-method-tag--${p}`])},E(p),3)]),g.description?(b(),_("div",{key:0,class:"oapi-callback-op__description",innerHTML:g.description},null,8,Gv)):O("",!0),g.parameters?(b(),V(l,{key:1,parameters:g.parameters,"current-locale":a.currentLocale,components:a.components},null,8,["parameters","current-locale","components"])):O("",!0),g.requestBody?(b(),V(c,{key:2,"is-cb":"","h-prefix":`${h}-${p}-${f}`,"request-body":g.requestBody,"current-locale":a.currentLocale,components:a.components},null,8,["h-prefix","request-body","current-locale","components"])):O("",!0),g.responses?(b(),V(d,{key:3,"is-cb":"","h-prefix":`${h}-${p}-${f}`,responses:g.responses,"current-locale":a.currentLocale,components:a.components},null,8,["h-prefix","responses","current-locale","components"])):O("",!0)]))),128))]))),128))]))),128))])])):O("",!0)}const Uo=W(Uv,[["render",Wv]]),Zv={name:"OpenApiRoute",components:{OpenApiCallbacks:Uo,OpenApiResponses:lt,OpenApiRequestBody:ct,OpenApiSecurity:hs,OpenApiParameters:ot,OpenApiExamples:Po,CodeSimples:Io,OpenApiServer:ds,OpenApiRouteHeader:us},props:{route:{type:[Object,Array],required:!0},subParams:{required:!1},path_doc:{type:String,required:!0},file:{type:String,required:!0},currentLocale:{type:String,required:!0},url:{type:String,required:!1,default:""},server:{type:String,required:!1,default:""},method:{type:String,required:!1,default:"GET"},components:{type:Object,default:()=>({})}},data(){return{lang:"javascript",mimeType:"application/x-www-form-urlencoded",params:[]}},computed:{resolvedSchema(){return vn(this.route,[],this.$openapidocRef.definitions,this.$openapidocRef.components)},routeInfo(){return this.$openapidoc.getRouteInfo(this.file,this.url,this.method)}},mounted(){this.genParamsToSimple()},methods:{genParamsToSimple(){if(this.params=[],this.resolvedSchema.requestBody&&Object.keys(this.resolvedSchema.requestBody).length){const t=Object.keys(this.resolvedSchema.requestBody)[0],a=this.resolvedSchema.requestBody[t];if(a&&Object.keys(a).length){this.mimeType=Object.keys(a)[0];const o=a[this.mimeType];if(o.schema){const i=o.schema.properties;for(const s in i){const l=i[s]||{};let c="";if(l.example&&(c=l.example??""),c===""&&l.type&&(c=this.convertStringFormatToMd(l.type,s)),l.type==="array")l.items.type?l.items.type==="array"||l.items.type==="object"?c=[this.handleNestedArrayOrObject(l,s)]:c=[this.convertStringFormatToMd(l.items.type,s)]:l.items.enum?c=[l.items.enum[0]]:(l.items.properties||l.items.additionalProperties)&&(c=[this.handleNestedArrayOrObject(l.items,s)]),this.params.push({in:"postData",name:s,value:JSON.parse(JSON.stringify(c))});else if(l.type==="object"){if(l.additionalProperties&&l.additionalProperties.type)c={[s]:this.convertStringFormatToMd(l.additionalProperties.type,s)};else if(l.properties){c={};for(const d in l.properties){const e=l.properties[d]||{};e.type?c[d]=this.convertStringFormatToMd(e.type,d):(e.properties||e.additionalProperties)&&(c[d]=this.handleNestedArrayOrObject(e,s))}}this.params.push({in:"postData",name:s,value:JSON.parse(JSON.stringify(c))})}else this.params.push({in:"postData",name:s,value:c.toString()})}}}}for(const t in this.resolvedSchema.parameters){const a=this.resolvedSchema.parameters[t],o=a.name??"",i=a.in??"";let s="";a.schema?s=a.schema.default??"":s=a.default??"",s===""&&a.type&&(s=this.convertStringFormatToMd(a.type,o)),s===""&&a.schema&&a.schema.type&&(s=this.convertStringFormatToMd(a.schema.type,o)),s===""&&a.enum&&(s=a.enum[0]??""),this.params.push({in:i,name:o,value:s.toString()})}const n=this.$openapidoc.getParams();for(const t in n){const a=n[t];a.value===""&&a.type&&(a.value=this.convertStringFormatToMd(a.type,a.name)),this.params.push({in:a.pos,name:a.name,value:JSON.parse(JSON.stringify(a.value))})}},handleNestedArrayOrObject(n,t){if(n.type==="array"){if(n.items.type)return n.items.type==="array"?[this.handleNestedArrayOrObject(n.items,t)]:n.items.type==="object"?[this.handleNestedObject(n.items)]:[this.convertStringFormatToMd(n.items.type)];if(n.items.enum)return[n.items.enum[0]];if(n.items.properties||n.items.additionalProperties)return[this.handleNestedObject(n.items)]}else if(n.type==="object")return this.handleNestedObject(n);return""},handleNestedObject(n){if(n.additionalProperties&&n.additionalProperties.type)return{[propertyName]:this.convertStringFormatToMd(n.additionalProperties.type,propertyName)};if(n.properties){const t={};for(const a in n.properties){const o=n.properties[a]||{};o.type?t[a]=this.convertStringFormatToMd(o.type,a):(o.properties||o.additionalProperties)&&(t[a]=this.handleNestedArrayOrObject(o,a))}return t}return""},convertStringFormatToMd(n,t){switch(n){case"date":return"YYYY-MM-DD";case"date-time":return"YYYY-MM-DDTHH:MM:SSZ";case"email":return"example@example.com";case"hostname":return"example.com";case"ipv4":return"192.0.2.0";case"ipv6":return"2001:0db8:85a3:0000:0000:8a2e:0370:7334";case"uri":return"https://example.com";case"integer":return"1";case"number":return"1";case"string":return`{${t}}`;default:return n}}}},Vv={class:"oapi-route"},Xv={key:0,class:"oapi-route__servers"},Qv={id:"servers"},Yv={key:1},eS={id:"info"},nS=["innerHTML"],tS={id:"code_simple",class:"text-lg font-bold mb-2"};function rS(n,t,a,o,i,s){const l=us,c=ds,d=hs,e=ot,h=ct,m=lt,f=Io,g=Wo,p=Po,u=Uo;return b(),_("div",Vv,[F(l,{path:a.url,method:a.method,server:a.server,tags:s.resolvedSchema.tags,summary:n.$openapidocRef.tr(a.route,"summary",a.currentLocale),description:n.$openapidocRef.tr(a.route,"description",a.currentLocale),deprecated:a.route.deprecated,"current-locale":a.currentLocale},null,8,["path","method","server","tags","summary","description","deprecated","current-locale"]),s.resolvedSchema.servers?(b(),_("div",Xv,[v("h2",Qv,E(n.$openapidoc.getLocaleText("openapidoc.servers")),1),(b(!0),_(L,null,M(s.resolvedSchema.servers,r=>(b(),V(c,{key:r.url,server:r,"current-locale":a.currentLocale},null,8,["server","current-locale"]))),128))])):O("",!0),s.routeInfo?(b(),_("div",Yv,[v("h2",eS,E(n.$openapidoc.getLocaleText("openapidoc.info")),1),v("div",{class:"oapi-doc-info",innerHTML:s.routeInfo},null,8,nS)])):O("",!0),s.resolvedSchema.security?(b(),V(d,{key:2,security:s.resolvedSchema.security,path_doc:a.path_doc,file:a.file,"current-locale":a.currentLocale},null,8,["security","path_doc","file","current-locale"])):O("",!0),s.resolvedSchema.parameters?(b(),V(e,{key:3,parameters:s.resolvedSchema.parameters,"current-locale":a.currentLocale,components:a.components},null,8,["parameters","current-locale","components"])):O("",!0),a.subParams?(b(),V(e,{key:4,parameters:a.subParams,"current-locale":a.currentLocale,components:a.components,title:"Global params"},null,8,["parameters","current-locale","components"])):O("",!0),s.resolvedSchema.requestBody?(b(),V(h,{key:5,"request-body":s.resolvedSchema.requestBody,"current-locale":a.currentLocale,components:a.components},null,8,["request-body","current-locale","components"])):O("",!0),s.resolvedSchema.responses?(b(),V(m,{key:6,responses:s.resolvedSchema.responses,"current-locale":a.currentLocale,components:a.components},null,8,["responses","current-locale","components"])):O("",!0),a.url?(b(),V(g,{key:7},{default:le(()=>[v("h2",tS,E(n.$openapidoc.getLocaleText("openapidoc.code_simple"))+": ",1),F(f,{url:a.url,"base-url":a.server,method:a.method,"mime-type":i.mimeType,params:i.params},null,8,["url","base-url","method","mime-type","params"])]),_:1})):O("",!0),s.resolvedSchema.examples?(b(),V(p,{key:8,examples:s.resolvedSchema.examples,"current-locale":a.currentLocale},null,8,["examples","current-locale"])):O("",!0),s.resolvedSchema.callbacks?(b(),V(u,{key:9,callbacks:s.resolvedSchema.callbacks,server:a.server,"current-locale":a.currentLocale,components:a.components,simples:n.simples,params:i.params,file:a.file,path_doc:a.path_doc},null,8,["callbacks","server","current-locale","components","simples","params","file","path_doc"])):O("",!0)])}const qS=W(Zv,[["render",rS]]),aS={name:"NotFound"},iS={class:"oapi-not-found"},sS=v("h1",{class:""},"404",-1),oS=v("p",{class:"oapi-not-found__msg"},"Not found",-1),cS=[sS,oS];function lS(n,t,a,o,i,s){return b(),_("div",iS,cS)}const RS=W(aS,[["render",lS]]),uS={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search(n){this.searchInPaths(n)}},mounted(){var n;this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch),this.search=(((n=this.$route.query)==null?void 0:n.query)??"").toString(),this.highlightText()},beforeUnmount(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{highlightText(n=null){if(!this.search||this.search==="")return;if(!n){const o=document.querySelectorAll(".highlighted");for(let i=0;i<o.length;i++)o[i].classList.remove("highlighted");n=document.querySelector(".content-container")}if(!n)return;const t=this.search.replace("#",""),a=new RegExp(t,"gi");if(n.nodeType===Node.TEXT_NODE){if(n.textContent.match(a)){document.createElement("span").classList.add("highlighted");const s=n.textContent.replace(a,c=>`<span class="highlighted">${c}</span>`),l=document.createRange().createContextualFragment(s);n.parentNode.replaceChild(l,n)}}else if(n.nodeType===Node.ELEMENT_NODE){const o=n.childNodes;for(let i=0;i<o.length;i++)this.highlightText(o[i])}},toggleSearch(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?(document.body.style.overflow="hidden",setTimeout(()=>{this.$refs.input.focus()},100)):(document.body.style.overflow="auto",this.highlightText())},searchInPaths(n){if(n=n.toLowerCase(),this.list=[],n==="")return;const t=this.$openapidocRef.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),a=this.$openapidocRef.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),o=a.indexOf(n);if(o!==-1){const i=Math.max(o-50,0),s=Math.min(o+n.length+50,a.length);let l="..."+a.substring(i,s)+"...";l=l.replace(n,"<b>"+n+"</b>"),this.list.push({path:"info",title:t,description:l,route:{name:`openapi-${this.path}-${this.file}${this.$openapidoc.I18nLocaleSuffix()}`,params:{type:"info"},query:{query:n}}})}for(const i in this.doc.paths){if(i==="parameters")continue;const s=this.doc.paths[i];for(const l in s){const c=s[l];let d=i;d.startsWith("/")&&(d=d.substring(1)),d.endsWith("/")&&(d=d.substring(-1)),d=d.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_");const e=this.$openapidocRef.tr(c,"summary",this.currentLocale).toLowerCase(),h=this.$openapidocRef.tr(c,"description",this.currentLocale).toLowerCase();let m=null,f=e.indexOf(n);if(f!==-1){const g=h.substring(0,100)+"...";m={path:i,title:e.replace(n,"<b>"+n+"</b>"),description:g+"...",route:{name:`openapi-${this.path}-${this.file}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{type:d,mathod:l},query:{query:n}}}}if(f=h.indexOf(n),f!==-1){const g=Math.max(f-50,0),p=Math.min(f+n.length+50,h.length);let u="..."+h.substring(g,p)+"...";u=u.replace(n,"<b>"+n+"</b>"),m?m.description=u:m={path:i,title:e,description:u,route:{name:`openapi-${this.path}-${this.file}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{type:d,mathod:l},query:{query:n}}}}m&&this.list.push(m)}}}}},dS={class:"oapi-search"},pS={key:0,class:"oapi-search-overlay"},hS={class:"oapi-search__wrapper"},mS={class:"oapi-search-box"},fS={class:"oapi-search-box__inner"},gS={class:"oapi-search-item"},yS=["innerHTML"],bS=["textContent"],_S=["innerHTML"],vS=v("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),SS=[vS];function ES(n,t,a,o,i,s){const l=Ui;return b(),_("div",dS,[i.isSearchOpen?(b(),_("div",pS,[v("div",hS,[v("div",mS,[v("div",fS,[Jo(v("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>i.search=c),ref:"input",type:"text",class:"oapi-search-box__input",placeholder:"Search..."},null,512),[[Go,i.search]]),(b(!0),_(L,null,M(i.list,(c,d)=>(b(),_("div",{key:d,class:"oapi-search-box__list",onClick:t[1]||(t[1]=(...e)=>s.toggleSearch&&s.toggleSearch(...e))},[F(l,{to:c.route,"active-class":""},{default:le(()=>[v("div",gS,[v("h5",{class:"oapi-search-item__title",innerHTML:c.title},null,8,yS),v("p",{class:"oapi-search-item__path",textContent:E(c.path)},null,8,bS),v("p",{class:"oapi-search-item__text",innerHTML:c.description},null,8,_S)])]),_:2},1032,["to"])]))),128))])])]),v("button",{class:"oapi-search__close",onClick:t[2]||(t[2]=(...c)=>s.toggleSearch&&s.toggleSearch(...c))},SS)])):O("",!0)])}const LS=W(uS,[["render",ES]]);export{AS as _,NS as a,CS as b,qS as c,LS as d,RS as e};
