parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tZqg":[function(require,module,exports) {
var t=document.querySelector("h2#d-day"),a=document.querySelector("h1#clock");function e(){var a=new Date,e=new Date("".concat(a.getFullYear(),"-12-31"))-a,n=Math.floor(e/864e5),r=Math.floor(e/36e5%24),c=Math.floor(e/6e4%60),o=Math.floor(e/1e3%60),S=String(n).padStart(2,"0"),d=String(r).padStart(2,"0"),i=String(c).padStart(2,"0"),l=String(o).padStart(2,"0");t.innerText="[2023] ".concat(S,"d ").concat(d,"h ").concat(i,"m ").concat(l,"s left!")}function n(){var t=new Date,e=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),r=String(t.getSeconds()).padStart(2,"0");a.innerText="".concat(e,":").concat(n,":").concat(r)}e(),setInterval(e,1e3),n(),setInterval(n,1e3);
},{}]},{},["tZqg"], null)
//# sourceMappingURL=/clock.1880de72.js.map