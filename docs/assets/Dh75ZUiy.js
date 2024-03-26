import{_ as F,a as W,b as M,c as H,d as G,e as V}from"./CS6cvqKt.js";import{_ as Z}from"./pWAC-K-K.js";import{f as K,h as Q,j as X,r as k,k as r,g as Y,l as ee,c as te,u as e,m as h,b as D,w as oe,n as se,o as d}from"./BYj_I_4_.js";import{u as ne}from"./BDA3X4wF.js";import{d as re}from"./DhqHpXXA.js";import"./y4eX7S1R.js";import"./DpDRfkx3.js";const a={openapi:"3.1.0",info:{title:"Sample Pet Store App",summary:"A pet store manager.",description:"This is a sample server for a pet store.",termsOfService:"https://example.com/terms/",contact:{name:"API Support",url:"https://www.example.com/support",email:"support@example.com"},license:{name:"Apache 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.1"},paths:{"/pet/findByTags":{get:{summary:"Finds Pets by tags",description:"Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.",operationId:"findPetsByTags",deprecated:!0,parameters:[{name:"tags",in:"query",description:"Tags to filter by",required:!0,style:"form",schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"successful operation"}},security:[{petstore_auth:["write:pets","read:pets"]}],tags:["other"]}},"/store/inventory":{get:{summary:"Returns pet inventories by status",description:"Returns a map of status codes to quantities",operationId:"getInventory",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",additionalProperties:{type:"integer",format:"int32"}}}}}},security:[{api_key:[]}],tags:["other"]}}},webhooks:{newPet:{post:{requestBody:{description:"Information about a new pet in the system",content:{"application/json":{schema:"#/components/schemas/Pet"}}},responses:{200:{description:"Return a 200 status to indicate that the data was received successfully"}},tags:["webhooks"]},put:{requestBody:{description:"Information about a new pet in the system",content:{"application/json":{schema:"#/components/schemas/Pet"}}},responses:{200:{description:"Return a 200 status to indicate that the data was received successfully"}},tags:["webhooks"]}},systemCleanup:{post:{requestBody:{description:"Information about a new pet in the system",content:{"application/json":{schema:"#/components/schemas/Pet"}}},responses:{200:{description:"Return a 200 status to indicate that the data was received successfully"}},tags:["webhooks"]},put:{requestBody:{description:"Information about a new pet in the system",content:{"application/json":{schema:"#/components/schemas/Pet"}}},responses:{200:{description:"Return a 200 status to indicate that the data was received successfully"}},tags:["webhooks"]}}},components:{schemas:{ApiResponse:{type:"object",properties:{code:{type:"integer",format:"int32"},type:{type:"string"},message:{type:"string"}}},Cat:{description:"A representation of a cat",allOf:["#/components/schemas/Pet",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},Category:{type:"object",properties:{id:{description:"Category ID",allOf:["#/components/schemas/Id"]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}},Dog:{description:"A representation of a dog",allOf:["#/components/schemas/Pet",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},HoneyBee:{description:"A representation of a honey bee",allOf:["#/components/schemas/Pet",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14}},required:["honeyPerDay"]}]},Id:{type:"integer",format:"int64",readOnly:!0},Order:{type:"object",properties:{id:{description:"Order ID",allOf:["#/components/schemas/Id"]},petId:{description:"Pet ID",allOf:["#/components/schemas/Id"]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},rqeuestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}},Pet:{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:"#/components/schemas/Cat",dog:"#/components/schemas/Dog",bee:"#/components/schemas/HoneyBee"}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:["#/components/schemas/Id"]},category:{description:"Categories this pet belongs to",allOf:["#/components/schemas/Category"]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["#/components/schemas/Pet"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:"#/components/schemas/Tag"},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string"}},xml:{name:"Pet"}},Tag:{type:"object",properties:{id:{description:"Tag ID",allOf:["#/components/schemas/Id"]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}},User:{type:"object",properties:{id:"#/components/schemas/Id",pet:{oneOf:["#/components/schemas/Pet","#/components/schemas/Tag"]},username:{description:"User supplied username",type:"string",minLength:4,example:"John78"},firstName:{description:"User first name",type:"string",minLength:1,example:"John"},lastName:{description:"User last name",type:"string",minLength:1,example:"Smith"},email:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},password:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},phone:{description:"User phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0},userStatus:{description:"User status",type:"integer",format:"int32"}},xml:{name:"User"}}},requestBodies:{Pet:{content:{"application/json":{schema:{allOf:[{description:"My Pet",title:"Pettie"},"#/components/schemas/Pet"]}},"application/xml":{schema:{type:"object",properties:{name:{type:"string",description:"hooray"}}}}},description:"Pet object that needs to be added to the store",required:!0},UserArray:{content:{"application/json":{schema:{type:"array",items:"#/components/schemas/User"}}},description:"List of user object",required:!0}},securitySchemes:{basic:{type:"http",scheme:"basic"},petstore_auth:{description:`Get access to data while protecting your account credentials.
OAuth2 is also a safer and more secure way to give you access.
`,type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},examples:{Order:{value:{quantity:"1,",shipDate:"2018-10-19T16:46:45Z,",status:"placed,",complete:!1}}}},tags:{}},ae={class:"content-container"},fe=K({__name:"open-api-3-1",setup(ie){const y=Q(),L=X(),{$openapidoc:v,$openapidocBus:g,$openapidocRef:_}=se(),b=k(""),j=k(0),w=k(re.path.toString()),p=k(a??{}),f=r(()=>"open-api-3-1"),n=r(()=>y.params.type.toString()),A=r(()=>(y.params.mathod??"default").toString()),I=r(()=>n.value==="info"),S=r(()=>n.value==="auth"),O=r(()=>n.value==="components"),m=r(()=>v.currentLocale());_.setComponents(a.components),_.setDefinitions(a.definitions),_.setDocPath(w.value),_.setFile(f.value);const i=r(()=>{const o={...a.paths};if(!o)return null;for(const s in o){let t=s.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===A.value)return b.value=s.toString(),o[s]??null}return null}),c=r(()=>{const o={...a.webhooks};if(!o)return null;for(const s in o){let t=s.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===A.value)return b.value=s.toString(),o[s][n.value]??null}return null}),u=r(()=>i.value?i.value[n.value]??null:null),T=r(()=>i.value?i.value.parameters??null:null),R=r(()=>{const o=v.currentLocale()??"";return I.value?"[open-api-3-1] - Info Docs":S.value?"[open-api-3-1] - Authorization":O.value?"[open-api-3-1] - Components Docs":u.value?"[open-api-3-1] - "+(u.value["x-summary-"+o.value]||u.value.summary||""):""}),B=r(()=>{const o=v.currentLocale()??"";return I.value?"[open-api-3-1] - Info Docs":S.value?"[open-api-3-1] - Authorization":O.value?"[open-api-3-1] - Components Docs":u.value&&(u.value["x-description-"+o.value]||u.value.description)||""});ne({title:R.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const C=r(()=>{if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[n.value]&&i.value[n.value].servers&&i.value[n.value].servers[0])return i.value[n.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[n.value]&&c.value[n.value].servers&&c.value[n.value].servers[0])return c.value[n.value].servers[0].url??null}let o=j.value;if(o>0&&a.servers&&!a.servers[o]&&(o=0),!a.servers||!a.servers[o])return"";if(a.servers[o].variables){const s=Object.values(a.servers[o].variables)??[];if(s&&s.length)return s[0].default}return a.servers[o].url??""});function U(o){j.value=o}function z(){var s;(((s=document.querySelector(".content-container"))==null?void 0:s.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",l=>{const x=t.getAttribute("id"),P=window.location.origin+window.location.pathname+"#"+x;v.copyToClipboard(P,l,!1),L.push({path:y.path,hash:"#"+x}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function N(){if(y.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function q(){const o=JSON.stringify(a,null,4),s=new Blob([o],{type:"application/json"}),t=URL.createObjectURL(s),l=document.createElement("a");l.href=t,l.download=f.value+".json",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(t)}return Y(()=>{g.$on("downloadJsonDoc",q),g.$on("changeServer",U),N(),z()}),ee(()=>{g.$off("downloadJsonDoc",q),g.$off("changeServer",U)}),(o,s)=>{const t=F,l=W,x=M,P=H,$=V,E=G,J=Z;return d(),te("div",ae,[e(I)&&e(p).info?(d(),h(t,{key:0,info:e(p).info,servers:e(p).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(S)&&e(p).components?(d(),h(l,{key:1,components:e(p).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(O)&&e(p).components?(d(),h(x,{key:2,components:e(p).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(u)?(d(),h(P,{key:3,route:e(u),"current-locale":e(m),method:e(n),components:e(p).components,url:e(b),path_doc:e(w),file:e(f),server:e(C),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(d(),h(P,{key:4,route:e(c),"current-locale":e(m),method:e(n),components:e(p).components,url:e(b),path_doc:e(w),file:e(f),server:e(C),"sub-params":e(T)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),h($,{key:5})),D(J,null,{default:oe(()=>[D(E,{"current-locale":e(m),doc:e(p),path:e(w),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
