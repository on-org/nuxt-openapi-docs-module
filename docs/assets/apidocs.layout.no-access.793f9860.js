import{_ as E}from"./nuxt-link.5f533b5e.js";import{_ as V,a as $,b as D,c as S,d as U}from"./OpenApiMainContent.69bd3728.js";import{f as j,r as i,h as q,k as n,M as F,g as G,l as I,c as g,b as s,w as t,u as e,a as u,o as _,m as J,R as y,W as K,T as P,n as Q}from"./entry.dba88898.js";import{c as p}from"./config.7d840204.js";import{d as a}from"./docs.no-access.config.9fc57eaa.js";import"./OpenApiDropdown.c150524c.js";const X={class:"oapi-layout"},Y=["innerHTML"],Z={class:"oapi-layout__body"},ee=["innerHTML"],ue=j({__name:"apidocs.layout.no-access",setup(oe){const d=i("docs"),x=q(),{$openapidoc:O,$openapidocBus:ne}=Q();let r={...a.servers};Array.isArray(r)||(r=[]);const b=i(r),o=i(!1),l=i(!1),f=n(()=>"no-access"),A=n(()=>a.name),m=n(()=>p.filesClean),v=n(()=>a.paths_by_tags),L=n(()=>a.localesReload),k=n(()=>a.locales),M=n(()=>O.currentLocale()),T=n(()=>p.logo.replace(":name",A.value)),h=n(()=>p.footer);F(x,()=>{l.value&&(o.value=!1)},{deep:!0,immediate:!0});function B(){o.value=!o.value}function w(){const c=window.innerWidth>=1110;l.value=window.innerWidth<1110,!c&&o.value&&(o.value=!1),c&&(o.value=!0)}return G(()=>{l.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",w)}),I(()=>{window.removeEventListener("resize",w)}),(c,te)=>{const H=E,C=S,N=V,R=U,W=$,z=D;return _(),g("div",X,[s(N,{isMenuOpen:e(o),onToggleMenu:B},{logo:t(()=>[s(H,{to:"/","active-class":"","aria-label":"logo"},{default:t(()=>[u("span",{innerHTML:e(T)},null,8,Y)]),_:1})]),button:t(()=>[s(C,{"current-locale":e(M),files:e(m),file:e(f),path:e(d)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),u("div",Z,[s(W,{isMenuOpen:e(o),isMobile:e(l)},{menu:t(()=>[e(v)?(_(),J(R,{key:0,routes:e(v),"current-locale":e(M),file:e(f),path:e(d),files:e(m),locales:e(k),"locales-reload":e(L),servers:e(b)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):y("",!0)]),_:1},8,["isMenuOpen","isMobile"]),s(z,null,{footer:t(()=>[e(h)?(_(),g("footer",{key:0,class:"oapi-footer",innerHTML:e(h)},null,8,ee)):y("",!0)]),default:t(()=>[s(K,{name:"oapi-fade",tag:"div"},{default:t(()=>[u("div",null,[P(c.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};
