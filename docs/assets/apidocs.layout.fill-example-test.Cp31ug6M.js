import{_ as z,a as E,b as V,c as $,d as D}from"./OpenApiMainContent.T9Sfv-P_.js";import{f as S,r as c,h as U,k as n,M as j,g as q,l as F,c as g,b as s,w as t,u as e,a as r,o as p,m as G,R as x,W as I,T as J,n as K}from"./entry.tMswm5PA.js";import{c as _}from"./config.CKPRotIq.js";import{d as a}from"./docs.fill-example-test.config.64vB6ZMw.js";import"./nuxt-link.o_QJ7VHF.js";import"./OpenApiDropdown.o3VUtLxc.js";const P={class:"oapi-layout"},Q={href:"/","aria-label":"logo"},X=["innerHTML"],Y={class:"oapi-layout__body"},Z=["innerHTML"],re=S({__name:"apidocs.layout.fill-example-test",setup(ee){const d=c("docs"),y=U(),{$openapidoc:O,$openapidocBus:oe}=K();let u={...a.servers};Array.isArray(u)||(u=[]);const b=c(u),o=c(!1),l=c(!1),f=n(()=>"fill-example-test"),L=n(()=>a.name),m=n(()=>_.filesClean),h=n(()=>a.paths_by_tags),A=n(()=>a.localesReload),T=n(()=>a.locales),v=n(()=>O.currentLocale()),k=n(()=>_.logo.replace(":name",L.value)),M=n(()=>_.footer);j(y,()=>{l.value&&(o.value=!1)},{deep:!0,immediate:!0});function B(){o.value=!o.value}function w(){const i=window.innerWidth>=1110;l.value=window.innerWidth<1110,!i&&o.value&&(o.value=!1),i&&(o.value=!0)}return q(()=>{l.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",w)}),F(()=>{window.removeEventListener("resize",w)}),(i,ne)=>{const H=$,C=z,N=D,R=E,W=V;return p(),g("div",P,[s(C,{isMenuOpen:e(o),onToggleMenu:B},{logo:t(()=>[r("a",Q,[r("span",{innerHTML:e(k)},null,8,X)])]),button:t(()=>[s(H,{"current-locale":e(v),files:e(m),file:e(f),path:e(d)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),r("div",Y,[s(R,{isMenuOpen:e(o),isMobile:e(l)},{menu:t(()=>[e(h)?(p(),G(N,{key:0,routes:e(h),"current-locale":e(v),file:e(f),path:e(d),files:e(m),locales:e(T),"locales-reload":e(A),servers:e(b)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):x("",!0)]),_:1},8,["isMenuOpen","isMobile"]),s(W,null,{footer:t(()=>[e(M)?(p(),g("footer",{key:0,class:"oapi-footer",innerHTML:e(M)},null,8,Z)):x("",!0)]),default:t(()=>[s(I,{name:"oapi-fade",tag:"div"},{default:t(()=>[r("div",null,[J(i.$slots,"default")])]),_:3})]),_:3})])])}}});export{re as default};
