import{S as L,i as w,a as P}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d({hits:t}){const o=document.querySelector(".gallery-container"),i=t.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:g,comments:h,downloads:b})=>`<ul class="gallery-card">
      <li class="gallery">
      <a class="gallery-link" href="${e}"> 
   <img src="${s}" alt="${r}" width="270" height="160"/>
   </a>
    <div class="discrabe">
  <ul class="discrabe-list">
  <li class="discrabe-item"><b>Likes</b> ${a}</li>
  <li class="discrabe-item"><b>Views</b> ${g}</li>
  <li class="discrabe-item"><b>Comments</b> ${h}</li>
  <li class="discrabe-item"><b>Downloads</b> ${b}</li>
  </ul>
</div>
</li>
    </ul>`).join("");if(o.innerHTML=i,t.length===0)return n(),c();new L(".gallery a",{captionDelay:250,captionData:"alt",captionPosting:"bottom"}).refresh(),n()}function p(){const t=document.querySelector(".loading");t.style.display="flex"}function n(){const t=document.querySelector(".loading");t.style.display="none"}function c(){w.error({title:"Error",position:"topRight",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}async function y(t,o){const s={key:"44790874-b72b714502b79af1442269c5d",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await P.get("https://pixabay.com/api/",{params:s})).data}catch(e){throw new Error(e.response.status)}}const S=document.querySelector(".search-form"),f=document.querySelector(".gallery-container"),m=document.querySelector(".btn-load");let u="",l=1;S.addEventListener("submit",q);m.addEventListener("click",v);async function q(t){t.preventDefault();const o=t.currentTarget,i=o.elements.inputtext.value.toLowerCase().trim();if(i==="")return n(),c();p(),f.innerHTML="",u=i,l=1;try{const s=await y(u,l);d(s),m.style.display="flex"}catch{c()}finally{o.reset(),n()}}async function v(){p(),l+=1;try{const t=await y(u,l);d(t),f.scrollIntoView({behavior:"smooth",block:"start"})}catch{c()}finally{n()}}
//# sourceMappingURL=commonHelpers.js.map
