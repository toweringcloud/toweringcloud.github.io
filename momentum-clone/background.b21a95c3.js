parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JlD7":[function(require,module,exports) {
function n(){var e=["#ef5777","#575fcf","#4bcffa","#34e7e4","#0be881","#f53b57","#3c40c6","#0fbcf9","#00d8d6","#05c46b","#ffc048","#ffdd59","#ff5e57","#d2dae2","#485460","#ffa801","#ffd32a","#ff3f34"],a=function(){return Math.floor(Math.random()*e.length)},t=e[a()],o=e[a()];if(t===o)return n();document.body.style.background="linear-gradient(90deg, ".concat(t,", ").concat(o,")")}function e(){var n=["b01_jan.png","b02_feb.png","b03_mar.png","b04_apr.png","b05_may.png","b06_jun.png","b07_jul.png","b08_aug.png","b09_sep.png","b10_oct.png","b11_nov.png","b12_dec.png"],e=n[Math.floor(Math.random()*n.length)];document.body.style.background="url(".concat("https://raw.githubusercontent.com/toweringcloud/momentum-clone","/main/img/").concat(e,") no-repeat"),document.body.style.backgroundSize="cover"}function a(){savedUserName=localStorage.getItem("userName"),null===savedUserName?n():e()}a(),setInterval(a,5e3);
},{}]},{},["JlD7"], null)
//# sourceMappingURL=/background.b21a95c3.js.map