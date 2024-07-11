import{S as m,i as u,a as y}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g({hits:r}){const o=document.querySelector(".gallery-container"),s=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:a,comments:p,downloads:f})=>`<ul class="gallery-card">
      <li class="gallery">
      <a class="gallery-link" href="${e}"> 
   <img src="${i}" alt="${t}" width="270" height="160"/>
   </a>
    <div class="discrabe">
  <ul class="discrabe-list">
  <li class="discrabe-item"><b>Likes</b> ${n}</li>
  <li class="discrabe-item"><b>Views</b> ${a}</li>
  <li class="discrabe-item"><b>Comments</b> ${p}</li>
  <li class="discrabe-item"><b>Downloads</b> ${f}</li>
  </ul>
</div>
</li>
    </ul>`).join("");if(o.innerHTML=s,r.length===0)return l(),c();new m(".gallery a",{captionDelay:250,captionData:"alt",captionPosting:"bottom"}).refresh(),l()}function h(){const r=document.querySelector(".loading");r.style.display="flex"}function l(){const r=document.querySelector(".loading");r.style.display="none"}function c(){u.error({title:"Error",position:"topRight",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}async function b(r){let o=15,s=1;const i={key:"44790874-b72b714502b79af1442269c5d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:s};try{const t=(await y.get("https://pixabay.com/api/",{params:i})).data;s+=1;const n=document.querySelector(".btn-load");s>1&&(n.style.display="flex");const a=Math.ceil(t.total/o);return s>a?u.error({position:"topRight",message:"We're sorry, there are no more posts to load"}):t}catch(e){throw new Error(e.response.status)}}const L=document.querySelector(".search-form"),S=document.querySelector(".gallery-container"),d=document.querySelector(".btn-load");L.addEventListener("submit",w);async function w(r){r.preventDefault();const o=r.currentTarget,s=o.elements.inputtext.value.toLowerCase().trim();if(s==="")return l(),c();h(),S.innerHTML="";try{const i=await b(s);g(i)}catch{c()}finally{o.reset()}}d.addEventListener("click",P);function P(){console.log(d)}
//# sourceMappingURL=commonHelpers.js.map
