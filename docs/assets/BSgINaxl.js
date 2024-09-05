import{_ as G,a as K,b as N,c as W,d as $,e as M}from"./BBKxxenp.js";import{_ as V}from"./Ctz0EXd-.js";import{f as J,h as Z,j as Q,k as X,r as P,l as s,g as Y,m as ee,o as d,c as te,u as e,n as m,b as j,w as ne}from"./DrCf4G5v.js";import{u as oe}from"./CtmrR_TU.js";import{d as re}from"./59Bm8yX0.js";import"./CXLPdVYg.js";import"./Bq3GVmQU.js";const a={openapi:"3.0.0",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],info:{title:"Pet Store","x-title-ru":"Зоомагазин","x-title-de":"Tierhandlung",version:"1.0.0","x-locales-reload":!0,"x-locales":{en:"English",ru:"Русский",de:"Deutsch"},description:`<h1>Introduction</h1>
<p>Petstore illustrate the typical design decisions and tradeoffs a developer makes when building an enterprise application. The demo shows how to document REST API services <strong>OpenAPI format</strong> and is based on <a href="http://petstore.swagger.io/">Petstore sample</a></p>
<ul>
<li><a href="/docs/localization/auth">Auth</a></li>
</ul>
`,"x-description-ru":`<h1>Введение</h1>
<p>Petstore иллюстрирует типичные дизайнерские решения и компромиссы, на которые разработчик идет при создании корпоративного приложения. Демонстрация показывает, как документировать службы REST API в формате <strong>OpenAPI</strong>, и основана на <a href="http://petstore.swagger.io/">Образец зоомагазина</a></p>
<ul>
<li><a href="/ru/docs/localization/auth">Auth</a></li>
</ul>
`,"x-description-de":`<h1>Einführung</h1>
<p>  Petstore veranschaulicht die typischen Designentscheidungen und Kompromisse, die ein Entwickler beim Erstellen einer Unternehmensanwendung trifft.
  Die Demo zeigt, wie REST-API-Dienste im <strong>OpenAPI-Format</strong> dokumentiert werden und basiert auf
  <a href="http://petstore.swagger.io/">Petstore-Beispiel</a></p>
`},externalDocs:{"x-description-ru":"Узнайте, как создать репозиторий Github для вашей спецификации OpenAPI.","x-description-de":"Erfahren Sie, wie Sie ein Github-Repository für Ihre OpenAPI-Spezifikation erstellen.",description:"Find out how to create Github repo for your OpenAPI spec.",url:"https://github.com/Rebilly/generator-openapi-repo"},tags:{pet:{name:"Pet","x-name-ru":"Питомец","x-name-de":"Haustier",description:"Everything about your Pets","x-description-ru":"Все о ваших питомцах","x-description-de":"Alles rund um Ihre Haustiere"}},paths:{"/pet":{post:{tags:["pet"],summary:"Add a new pet to the store","x-summary-ru":"Добавить нового питомца в магазин","x-summary-de":"Fügen Sie dem Geschäft ein neues Haustier hinzu",description:"Add new pet to the store inventory.","x-description-ru":"Добавьте нового питомца в инвентарь магазина.","x-description-de":"Fügen Sie dem Ladeninventar ein neues Haustier hinzu.",operationId:"addPet",responses:{405:{description:"Invalid input"}},security:[{petstore_auth:["write:pets","read:pets"]}],requestBody:"#/components/requestBodies/Pet"}}},components:{schemas:{ApiResponse:{type:"object",properties:{code:{type:"integer",format:"int32"},type:{type:"string"},message:{type:"string"}}},Cat:{description:"A representation of a cat","x-description-ru":"Представление о кошке","x-description-de":"Eine Darstellung einer Katze",allOf:["#/components/schemas/Pet",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting","x-description-ru":"Измеренное умение для охоты","x-description-de":"Die gemessene Fertigkeit für die Jagd",default:"lazy",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},Category:{type:"object",properties:{id:{description:"Category ID","x-description-ru":"Идентификатор категории","x-description-de":"Kategorie ID",allOf:["#/components/schemas/Id"]},name:{description:"Category name","x-description-ru":"Название категории","x-description-de":"Kategoriename",type:"string",minLength:1},sub:{description:"Test Sub Category","x-description-ru":"Тестовая подкатегория","x-description-de":"Unterkategorie testen",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}},Pet:{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:"#/components/schemas/Cat"}},properties:{id:{externalDocs:{description:"Find more info here","x-description-ru":"Узнайте больше здесь","x-description-de":"Weitere Informationen finden Sie hier",url:"https://example.com"},description:"Pet ID"},category:{description:"Categories this pet belongs to","x-description-ru":"Категории, к которым принадлежит этот питомец","x-description-de":"Kategorien, zu denen dieses Haustier gehört",allOf:["#/components/schemas/Category"]},name:{description:"The name given to a pet","x-description-ru":"Имя, данное питомцу","x-description-de":"Der Name, der einem Haustier gegeben wird",type:"string",example:"Guru"}},xml:{name:"Pet"}},Tag:{type:"object",properties:{id:{description:"Tag ID",allOf:["#/components/schemas/Id"]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},requestBodies:{Pet:{content:{"application/json":{schema:{allOf:[{description:"My Pet","x-description-ru":"Мой питомец","x-description-de":"Mein Haustier",title:"Pettie"},"#/components/schemas/Pet"]}},"application/xml":{schema:{type:"object",properties:{name:{type:"string",description:"hooray"}}}}},description:"Pet object that needs to be added to the store","x-description-ru":"Питомец, который нужно добавить в магазин","x-description-de":"Pet-Objekt, das dem Store hinzugefügt werden muss",required:!0},UserArray:{content:{"application/json":{schema:{type:"array",items:"#/components/schemas/User"}}},description:"List of user object",required:!0}},securitySchemes:{basic:{type:"http",scheme:"basic"},petstore_auth:{description:`Get access to data while protecting your account credentials.
OAuth2 is also a safer and more secure way to give you access.
`,type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},examples:{Order:{value:{quantity:"1,",shipDate:"2018-10-19T16:46:45Z,",status:"placed,",complete:!1}}}}},se={class:"content-container"},he=J({__name:"localization",setup(ie){const h=Z(),E=Q(),{$openapidoc:v,$openapidocBus:I,$openapidocRef:f}=X(),g=P(""),z=P(0),y=P((re.path??"").toString()),c=P(a??{}),_=s(()=>"localization"),r=s(()=>h.params.type.toString()),D=s(()=>(h.params.mathod??"default").toString()),w=s(()=>r.value==="info"),S=s(()=>r.value==="auth"),k=s(()=>r.value==="components"),p=s(()=>v.currentLocale());f.setComponents(a.components),f.setDefinitions(a.definitions),f.setDocPath(y.value),f.setFile(_.value);const i=s(()=>{const t={...a.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===D.value)return g.value=o.toString(),t[o]??null}return null}),u=s(()=>{const t={...a.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===D.value)return g.value=o.toString(),t[o][r.value]??null}return null}),l=s(()=>i.value?i.value[r.value]??null:null),C=s(()=>i.value?i.value.parameters??null:null),q=s(()=>{const t=v.currentLocale()??"";return w.value?"[localization] - Info Docs":S.value?"[localization] - Authorization":k.value?"[localization] - Components Docs":l.value?"[localization] - "+(l.value["x-summary-"+t.value]||l.value.summary||""):""}),R=s(()=>{const t=v.currentLocale()??"";return w.value?"[localization] - Info Docs":S.value?"[localization] - Authorization":k.value?"[localization] - Components Docs":l.value&&(l.value["x-description-"+t.value]||l.value.description)||""});oe({title:q.value,meta:[{name:"description",content:R.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=z.value;if(t>0&&a.servers&&!a.servers[t]&&(t=0),!a.servers||!a.servers[t])return"";if(a.servers[t].variables){const o=Object.values(a.servers[t].variables)??[];if(o&&o.length)return o[0].default}return a.servers[t].url??""});function T(t){z.value=t}function B(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",A=>{const x=n.getAttribute("id"),b=window.location.origin+window.location.pathname+"#"+x;v.copyToClipboard(b,A,!1),E.push({path:h.path,hash:"#"+x}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function F(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{I.$on("changeServer",T),F(),B()}),ee(()=>{I.$off("changeServer",T)}),(t,o)=>{const n=G,A=K,x=N,b=W,L=M,H=$,U=V;return d(),te("div",se,[e(w)&&e(c).info?(d(),m(n,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(S)&&e(c).components?(d(),m(A,{key:1,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(k)&&e(c).components?(d(),m(x,{key:2,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(l)?(d(),m(b,{key:3,route:e(l),"current-locale":e(p),method:e(r),components:e(c).components,url:e(g),path_doc:e(y),file:e(_),server:e(O),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(d(),m(b,{key:4,route:e(u),"current-locale":e(p),method:e(r),components:e(c).components,url:e(g),path_doc:e(y),file:e(_),server:e(O),"sub-params":e(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),m(L,{key:5})),j(U,null,{default:ne(()=>[j(H,{"current-locale":e(p),doc:e(c),path:e(y),file:e(_)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};