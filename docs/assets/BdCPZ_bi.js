import{_ as J,a as W,b as z,c as D,d as S}from"./DzH-m-XC.js";import{f as V,r as u,h as X,k as n,M as q,g as F,l as G,c as k,b as i,w as a,u as e,a as d,n as I,o as f,m as K,S as x,X as P,U as Q}from"./BahJtFiW.js";import{c as m}from"./CIjhWVM3.js";import{d as l}from"./_VurbN1F.js";import"./cp20_NM7.js";import"./CmtHmwLK.js";const Y={class:"oapi-layout"},Z={href:"/","aria-label":"logo"},ee=["innerHTML"],oe={class:"oapi-layout__body"},ne=["innerHTML"],ue=V({__name:"apidocs.layout.links",setup(te){const h=u("docs"),A=X(),{$openapidoc:R,$openapidocBus:v}=I();let p={...l.servers};Array.isArray(p)||(p=[]);const B=u(p),o=u(!1),c=u(!1),_=n(()=>"links"),C=n(()=>l.name),M=n(()=>m.filesClean),w=n(()=>l.paths_by_tags),T=n(()=>l.localesReload??!1),H=n(()=>l.locales),b=n(()=>R.currentLocale()),N=n(()=>m.logo.replace(":name",C.value)),g=n(()=>m.footer);q(A,()=>{c.value&&(o.value=!1)},{deep:!0,immediate:!0});function U(){o.value=!o.value}function y(){const s=window.innerWidth>=1110;c.value=window.innerWidth<1110,!s&&o.value&&(o.value=!1),s&&(o.value=!0)}function L(){const s=JSON.stringify(l,null,4),O=new Blob([s],{type:"application/json"}),r=URL.createObjectURL(O),t=document.createElement("a");t.href=r,t.download=_.value+".json",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)}return F(()=>{c.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",y),v.$on("downloadJsonDoc",L)}),G(()=>{window.removeEventListener("resize",y),v.$off("downloadJsonDoc",L)}),(s,O)=>{const r=D,t=J,j=S,$=W,E=z;return f(),k("div",Y,[i(t,{isMenuOpen:e(o),onToggleMenu:U},{logo:a(()=>[d("a",Z,[d("span",{innerHTML:e(N)},null,8,ee)])]),button:a(()=>[i(r,{"current-locale":e(b),files:e(M),file:e(_),path:e(h)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),d("div",oe,[i($,{isMenuOpen:e(o),isMobile:e(c)},{menu:a(()=>[e(w)?(f(),K(j,{key:0,routes:e(w),"current-locale":e(b),file:e(_),path:e(h),files:e(M),locales:e(H),"locales-reload":e(T),servers:e(B)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):x("",!0)]),_:1},8,["isMenuOpen","isMobile"]),i(E,null,{footer:a(()=>[e(g)?(f(),k("footer",{key:0,class:"oapi-footer",innerHTML:e(g)},null,8,ne)):x("",!0)]),default:a(()=>[i(P,{name:"oapi-fade",tag:"div"},{default:a(()=>[d("div",null,[Q(s.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};
