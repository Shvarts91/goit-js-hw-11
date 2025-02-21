import{a as m,i as p,S as u}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();function f(s){return m.get("https://pixabay.com/api/",{params:{key:"48923193-3438f3437d6b65fcb88350802",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits).catch(e=>console.log(e))}const g=document.querySelector(".list-images");function d(s){const e=s.map(t=>`<li>
    <a class='gallery-link' href='${t.largeImageURL}'>
    <img class='gallery-img' src='${t.webformatURL}' alt='${t.tags}'>
    <div class='image-info-block'>
    <p class='image-info-parametr'>
    <span class='image-name-parametr'>Likes</span>
    <span class='image-value-parametr'>${t.likes}</span>
    </p>
    <p class='image-info-parametr'>
    <span class='image-name-parametr'>Views</span>
    <span class='image-value-parametr'>${t.views}</span>
    </p>
    <p class='image-info-parametr'>
    <span class='image-name-parametr'>Comments</span>
    <span class='image-value-parametr'>${t.comments}</span>
    </p>
    <p class='image-info-parametr'>
    <span class='image-name-parametr'>Downloads</span>
    <span class='image-value-parametr'>${t.downloads}</span>
    </p>
    </div>
    </a>
    </li>`).join("");g.insertAdjacentHTML("afterbegin",e)}const h=document.querySelector("form"),n=document.querySelector(".input-form"),y=document.querySelector(".list-images"),l=document.querySelector(".loader");h.addEventListener("submit",s=>{s.preventDefault(),n.value.trim()&&(v(),l.classList.add("is-active"),f(n.value).then(e=>{if(l.classList.remove("is-active"),(e==null?void 0:e.length)===0)return p.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16"});e&&(d(e),c.refresh())}))});function v(){return y.innerHTML=""}let c=new u(".list-images a");c.on("show.simplelightbox",function(){});
//# sourceMappingURL=index.js.map
