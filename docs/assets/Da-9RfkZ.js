import{_ as z,a as E,b as V,c as $,d as S}from"./0-YigPKo.js";import{f as U,r as c,h as D,k as n,M as X,g as j,l as q,c as g,b as a,w as t,u as e,a as r,o as p,m as F,S as y,X as G,U as I,n as J}from"./BYj_I_4_.js";import{c as _}from"./DttNQxRM.js";import{d as s}from"./DhqHpXXA.js";import"./y4eX7S1R.js";import"./DpDRfkx3.js";const K={class:"oapi-layout"},P={href:"/","aria-label":"logo"},Q=["innerHTML"],Y={class:"oapi-layout__body"},Z=["innerHTML"],re=U({__name:"apidocs.layout.open-api-3-1",setup(ee){const d=c("docs"),O=D(),{$openapidoc:b,$openapidocBus:oe}=J();let u={...s.servers};Array.isArray(u)||(u=[]);const L=c(u),o=c(!1),l=c(!1),f=n(()=>"open-api-3-1"),x=n(()=>s.name),m=n(()=>_.filesClean),h=n(()=>s.paths_by_tags),A=n(()=>s.localesReload),k=n(()=>s.locales),v=n(()=>b.currentLocale()),T=n(()=>_.logo.replace(":name",x.value)),M=n(()=>_.footer);X(O,()=>{l.value&&(o.value=!1)},{deep:!0,immediate:!0});function B(){o.value=!o.value}function w(){const i=window.innerWidth>=1110;l.value=window.innerWidth<1110,!i&&o.value&&(o.value=!1),i&&(o.value=!0)}return j(()=>{l.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",w)}),q(()=>{window.removeEventListener("resize",w)}),(i,ne)=>{const H=$,C=z,N=S,R=E,W=V;return p(),g("div",K,[a(C,{isMenuOpen:e(o),onToggleMenu:B},{logo:t(()=>[r("a",P,[r("span",{innerHTML:e(T)},null,8,Q)])]),button:t(()=>[a(H,{"current-locale":e(v),files:e(m),file:e(f),path:e(d)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),r("div",Y,[a(R,{isMenuOpen:e(o),isMobile:e(l)},{menu:t(()=>[e(h)?(p(),F(N,{key:0,routes:e(h),"current-locale":e(v),file:e(f),path:e(d),files:e(m),locales:e(k),"locales-reload":e(A),servers:e(L)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):y("",!0)]),_:1},8,["isMenuOpen","isMobile"]),a(W,null,{footer:t(()=>[e(M)?(p(),g("footer",{key:0,class:"oapi-footer",innerHTML:e(M)},null,8,Z)):y("",!0)]),default:t(()=>[a(G,{name:"oapi-fade",tag:"div"},{default:t(()=>[r("div",null,[I(i.$slots,"default")])]),_:3})]),_:3})])])}}});export{re as default};
