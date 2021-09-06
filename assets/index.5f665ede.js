import{p as e,a as s,o as r,c as o,F as t,r as i,b as n,t as a,d as c,e as l,f as d,w as u,v as m,g as p,h}from"./vendor.4c12fd9c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();function f(){("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&[...document.querySelectorAll("a.link-of-links")].forEach((e=>{e.addEventListener("touchstart",(()=>e.classList.add("hover")),!1),e.addEventListener("touchend",(()=>e.classList.remove("hover")),!1)}))}const g={mounted(){f()},data:()=>({links:[{title:"blog",href:"https://edm00se.io/",descrip:"chronicles in software development"},{title:"misc",href:"https://misc.edm00se.codes/",descrip:"micro-blog for non-software things"},{title:"presos",href:"https://github.com/edm00se/presentations/",descrip:"a home for my speaking materials"},{title:"awesome board games",href:"https://awesomeboard.games/",descrip:"an awesome list for board games"},{title:"parcel-plugin-goodie-bag",href:"https://github.com/edm00se/parcel-plugin-goodie-bag/",descrip:"provides the Promise and fetch goodies needed for IE(11) support w/ parcel bundle loading"},{title:"ama",href:"https://github.com/edm00se/ama/",descrip:"ask me (nearly) anything"}]})};e("data-v-b3659f44");const v={class:"links"},b=["href"];s(),g.render=function(e,s,l,d,u,m){return r(),o("div",v,[(r(!0),o(t,null,i(u.links,(e=>(r(),o("div",{class:"link",key:e.href},[n("a",{class:"link-of-links",href:e.href},[n("h3",null,a(e.title),1),c(" "+a(e.descrip),1)],8,b)])))),128))])},g.__scopeId="data-v-b3659f44";const k={name:"About",components:{Links:g},data:()=>({user:{},loadingComplete:!1}),mounted(){l.get("https://api.github.com/users/edm00se").then((e=>{const s=e.data;this.user=s,this.user.bio_escapified=s.bio.replace(/\n/gim,"<br />"),this.loadingComplete=!0})).catch((e=>console.error(e)))}};e("data-v-40e2fe94");const w={class:"about"},y={class:"main"},L={class:"who"},_=["href"],E=["src"],I=["innerHTML"],M=n("hr",{class:"separator"},null,-1);s(),k.render=function(e,s,t,i,c,l){const h=d("Links");return u((r(),o("div",w,[n("div",y,[n("div",L,[n("a",{class:"user",href:c.user.html_url},[n("img",{class:"whoami img-circle",src:c.user.avatar_url,alt:"@edm00se profile pic from GitHub"},null,8,E),n("h1",null,a(c.user.name),1),n("h3",null,"@"+a(c.user.login),1)],8,_),n("p",{innerHTML:c.user.bio_escapified},null,8,I)]),M,p(h)])],512)),[[m,c.loadingComplete]])},k.__scopeId="data-v-40e2fe94";const P={id:"app"};h({setup:e=>(e,s)=>(r(),o("div",P,[p(k)]))}).mount("#app"),"serviceWorker"in window.navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/sw.js").then((e=>console.log("service worker registerd successfully"))).catch((e=>console.error(e)))}));
