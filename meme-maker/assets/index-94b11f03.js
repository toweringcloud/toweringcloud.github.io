(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function f(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=f(o);fetch(o.href,i)}})();const h=document.getElementById("save"),p=document.getElementById("text"),g=document.getElementById("file"),L=document.getElementById("eraser-btn"),C=document.getElementById("destroy-btn"),s=document.getElementById("mode-btn"),I=Array.from(document.getElementsByClassName("color-option")),y=document.getElementById("color"),v=document.getElementById("line-width"),c=document.querySelector("canvas"),t=c.getContext("2d"),a=800,d=800;c.width=a;c.height=d;t.lineWidth=v.value;t.lineCap="round";let m=!1,r=!1;function k(e){if(m){t.lineTo(e.offsetX,e.offsetY),t.stroke();return}t.moveTo(e.offsetX,e.offsetY)}function B(){m=!0}function E(){m=!1,t.beginPath()}function w(e){t.lineWidth=e.target.value}function S(e){t.strokeStyle=e.target.value,t.fillStyle=e.target.value}function b(e){const n=e.target.dataset.color;t.strokeStyle=n,t.fillStyle=n,y.value=n}function x(){r?(r=!1,s.innerText="Fill"):(r=!0,s.innerText="Draw")}function O(){r&&t.fillRect(0,0,a,d)}function P(){t.fillStyle="white",t.fillRect(0,0,a,d)}function T(){t.strokeStyle="white",r=!1,s.innerText="Fill"}function A(e){const n=e.target.files[0],f=URL.createObjectURL(n),l=new Image;l.src=f,l.onload=function(){t.drawImage(l,0,0,a,d),g.value=null}}function D(e){const n=p.value;n!==""&&(t.save(),t.lineWidth=1,t.font="68px sans-serif",t.fillText(n,e.offsetX,e.offsetY),t.restore())}function N(){const e=c.toDataURL(),n=document.createElement("a");n.href=e,n.download="myDrawing.png",n.click()}c.addEventListener("dblclick",D);c.addEventListener("mousemove",k);c.addEventListener("mousedown",B);c.addEventListener("mouseup",E);c.addEventListener("mouseleave",E);c.addEventListener("click",O);v.addEventListener("change",w);y.addEventListener("change",S);I.forEach(e=>e.addEventListener("click",b));s.addEventListener("click",x);C.addEventListener("click",P);L.addEventListener("click",T);g.addEventListener("change",A);h.addEventListener("click",N);
