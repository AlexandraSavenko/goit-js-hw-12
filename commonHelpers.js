import{S as L,i as p,a as S}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function y({hits:t}){const o=document.querySelector(".gallery-container"),s=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:h,comments:b,downloads:w})=>`<ul class="gallery-card">
      <li class="gallery">
      <a class="gallery-link" href="${e}"> 
   <img src="${i}" alt="${r}" width="270" height="160"/>
   </a>
    <div class="discrabe">
  <ul class="discrabe-list">
  <li class="discrabe-item"><b>Likes</b> ${n}</li>
  <li class="discrabe-item"><b>Views</b> ${h}</li>
  <li class="discrabe-item"><b>Comments</b> ${b}</li>
  <li class="discrabe-item"><b>Downloads</b> ${w}</li>
  </ul>
</div>
</li>
    </ul>`).join("");if(o.innerHTML=s,t.length===0)return l(),c();new L(".gallery a",{captionDelay:250,captionData:"alt",captionPosting:"bottom"}).refresh(),l()}function g(){const t=document.querySelector(".loading");t.style.display="flex"}function l(){const t=document.querySelector(".loading");t.style.display="none"}function c(){p.error({title:"Error",position:"topRight",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function P(){p.warning({title:"warning",position:"topRight",title:"",message:"We are sorry, but you`ve reached the end of search results!",backgroundColor:"blue",titleColor:"white",messageColor:"white"})}async function f(t,o){const i={key:"44790874-b72b714502b79af1442269c5d",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await S.get("https://pixabay.com/api/",{params:i})).data}catch(e){throw new Error(e.response.status)}}const q=document.querySelector(".search-form"),m=document.querySelector(".gallery-container"),d=document.querySelector(".btn-load");let u="",a=1;q.addEventListener("submit",v);d.addEventListener("click",$);async function v(t){t.preventDefault();const o=t.currentTarget,s=o.elements.inputtext.value.toLowerCase().trim();if(s==="")return l(),c();g(),m.innerHTML="",u=s,a=1;try{const i=await f(u,a);y(i),d.style.display="flex"}catch{c()}finally{o.reset(),l()}}async function $(){g(),a+=1;const t=60/15;try{a===t&&(d.style.display="none",P());const o=await f(u,a);y(o),m.scrollIntoView({behavior:"smooth",block:"start"});let i=document.querySelector(".gallery").getBoundingClientRect();window.scrollBy({top:i.height*2,left:0,behavior:"smooth"})}catch{c()}finally{l()}}
//# sourceMappingURL=commonHelpers.js.map
