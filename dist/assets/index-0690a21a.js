(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();let l=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var u=m;function i(){return new DOMException("The request is not allowed","NotAllowedError")}async function p(e){if(!navigator.clipboard)throw i();return navigator.clipboard.writeText(e)}async function f(e){const t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);const r=window.getSelection(),c=window.document.createRange();r.removeAllRanges(),c.selectNode(t),r.addRange(c);let o=!1;try{o=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(t)}if(!o)throw i()}async function m(e){try{await p(e)}catch(t){try{await f(e)}catch(r){throw r||t||i()}}}const y=d(u);const g=document.querySelector("button"),a=document.querySelector("h2");g.addEventListener("click",()=>{const e=l();a.innerText=e});a.addEventListener("click",e=>{y(e.target.textContent).then(()=>{e.target.classList.add("copied"),setTimeout(()=>e.target.classList.remove("copied"),2e3)}).catch(t=>{e.target.innerText=t.message})});