import{_ as z,a as E,b as V,c as $,d as q}from"./OpenApiMainContent.T9Sfv-P_.js";import{f as D,r,h as S,k as n,M as U,g as j,l as F,c as g,b as s,w as t,u as e,a as c,o as p,m as G,R as y,W as I,T as J,n as K}from"./entry.tMswm5PA.js";import{c as _}from"./config.CKPRotIq.js";import{d as a}from"./docs.request-body-multiple.config.hEUUIUTv.js";import"./nuxt-link.o_QJ7VHF.js";import"./OpenApiDropdown.o3VUtLxc.js";const P={class:"oapi-layout"},Q={href:"/","aria-label":"logo"},X=["innerHTML"],Y={class:"oapi-layout__body"},Z=["innerHTML"],ce=D({__name:"apidocs.layout.request-body-multiple",setup(ee){const d=r("docs"),b=S(),{$openapidoc:O,$openapidocBus:oe}=K();let u={...a.servers};Array.isArray(u)||(u=[]);const L=r(u),o=r(!1),l=r(!1),f=n(()=>"request-body-multiple"),x=n(()=>a.name),m=n(()=>_.filesClean),h=n(()=>a.paths_by_tags),A=n(()=>a.localesReload),T=n(()=>a.locales),v=n(()=>O.currentLocale()),k=n(()=>_.logo.replace(":name",x.value)),M=n(()=>_.footer);U(b,()=>{l.value&&(o.value=!1)},{deep:!0,immediate:!0});function B(){o.value=!o.value}function w(){const i=window.innerWidth>=1110;l.value=window.innerWidth<1110,!i&&o.value&&(o.value=!1),i&&(o.value=!0)}return j(()=>{l.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",w)}),F(()=>{window.removeEventListener("resize",w)}),(i,ne)=>{const H=$,C=z,N=q,R=E,W=V;return p(),g("div",P,[s(C,{isMenuOpen:e(o),onToggleMenu:B},{logo:t(()=>[c("a",Q,[c("span",{innerHTML:e(k)},null,8,X)])]),button:t(()=>[s(H,{"current-locale":e(v),files:e(m),file:e(f),path:e(d)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),c("div",Y,[s(R,{isMenuOpen:e(o),isMobile:e(l)},{menu:t(()=>[e(h)?(p(),G(N,{key:0,routes:e(h),"current-locale":e(v),file:e(f),path:e(d),files:e(m),locales:e(T),"locales-reload":e(A),servers:e(L)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):y("",!0)]),_:1},8,["isMenuOpen","isMobile"]),s(W,null,{footer:t(()=>[e(M)?(p(),g("footer",{key:0,class:"oapi-footer",innerHTML:e(M)},null,8,Z)):y("",!0)]),default:t(()=>[s(I,{name:"oapi-fade",tag:"div"},{default:t(()=>[c("div",null,[J(i.$slots,"default")])]),_:3})]),_:3})])])}}});export{ce as default};
