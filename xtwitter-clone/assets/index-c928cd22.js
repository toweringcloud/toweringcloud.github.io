function PR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function CR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b0={exports:{}},Dc={},M0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),kR=Symbol.for("react.portal"),xR=Symbol.for("react.fragment"),NR=Symbol.for("react.strict_mode"),DR=Symbol.for("react.profiler"),OR=Symbol.for("react.provider"),LR=Symbol.for("react.context"),bR=Symbol.for("react.forward_ref"),MR=Symbol.for("react.suspense"),VR=Symbol.for("react.memo"),UR=Symbol.for("react.lazy"),_y=Symbol.iterator;function FR(t){return t===null||typeof t!="object"?null:(t=_y&&t[_y]||t["@@iterator"],typeof t=="function"?t:null)}var V0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,F0={};function no(t,e,n){this.props=t,this.context=e,this.refs=F0,this.updater=n||V0}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $0(){}$0.prototype=no.prototype;function Op(t,e,n){this.props=t,this.context=e,this.refs=F0,this.updater=n||V0}var Lp=Op.prototype=new $0;Lp.constructor=Op;U0(Lp,no.prototype);Lp.isPureReactComponent=!0;var wy=Array.isArray,j0=Object.prototype.hasOwnProperty,bp={current:null},B0={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j0.call(e,r)&&!B0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:el,type:t,key:s,ref:o,props:i,_owner:bp.current}}function $R(t,e){return{$$typeof:el,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===el}function jR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ey=/\/+/g;function Wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jR(""+t.key):e.toString(36)}function lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case el:case kR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wh(o,0):r,wy(i)?(n="",t!=null&&(n=t.replace(Ey,"$&/")+"/"),lu(i,e,n,"",function(u){return u})):i!=null&&(Mp(i)&&(i=$R(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ey,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",wy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Wh(s,a);o+=lu(s,e,n,l,i)}else if(l=FR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Wh(s,a++),o+=lu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},uu={transition:null},zR={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:uu,ReactCurrentOwner:bp};ie.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=no;ie.Fragment=xR;ie.Profiler=DR;ie.PureComponent=Op;ie.StrictMode=NR;ie.Suspense=MR;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zR;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=U0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)j0.call(e,l)&&!B0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:el,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:LR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OR,_context:t},t.Consumer=t};ie.createElement=z0;ie.createFactory=function(t){var e=z0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:bR,render:t}};ie.isValidElement=Mp;ie.lazy=function(t){return{$$typeof:UR,_payload:{_status:-1,_result:t},_init:BR}};ie.memo=function(t,e){return{$$typeof:VR,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Dt.current.useCallback(t,e)};ie.useContext=function(t){return Dt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Dt.current.useEffect(t,e)};ie.useId=function(){return Dt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Dt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};ie.useRef=function(t){return Dt.current.useRef(t)};ie.useState=function(t){return Dt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Dt.current.useTransition()};ie.version="18.2.0";M0.exports=ie;var P=M0.exports;const wn=CR(P),HR=PR({__proto__:null,default:wn},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WR=P,qR=Symbol.for("react.element"),KR=Symbol.for("react.fragment"),GR=Object.prototype.hasOwnProperty,QR=WR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YR={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GR.call(e,r)&&!YR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qR,type:t,key:s,ref:o,props:i,_owner:QR.current}}Dc.Fragment=KR;Dc.jsx=H0;Dc.jsxs=H0;b0.exports=Dc;var O=b0.exports,qd={},W0={exports:{}},Xt={},q0={exports:{}},K0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,$){var W=D.length;D.push($);e:for(;0<W;){var ne=W-1>>>1,de=D[ne];if(0<i(de,$))D[ne]=$,D[W]=de,W=ne;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var $=D[0],W=D.pop();if(W!==$){D[0]=W;e:for(var ne=0,de=D.length,mt=de>>>1;ne<mt;){var He=2*(ne+1)-1,zt=D[He],Lt=He+1,en=D[Lt];if(0>i(zt,W))Lt<de&&0>i(en,zt)?(D[ne]=en,D[Lt]=W,ne=Lt):(D[ne]=zt,D[He]=W,ne=He);else if(Lt<de&&0>i(en,W))D[ne]=en,D[Lt]=W,ne=Lt;else break e}}return $}function i(D,$){var W=D.sortIndex-$.sortIndex;return W!==0?W:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=D)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function f(D){if(_=!1,y(D),!v)if(n(l)!==null)v=!0,Cn(I);else{var $=n(u);$!==null&&Bt(f,$.startTime-D)}}function I(D,$){v=!1,_&&(_=!1,g(N),N=-1),m=!0;var W=d;try{for(y($),h=n(l);h!==null&&(!(h.expirationTime>$)||D&&!_e());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var de=ne(h.expirationTime<=$);$=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(l)&&r(l),y($)}else r(l);h=n(l)}if(h!==null)var mt=!0;else{var He=n(u);He!==null&&Bt(f,He.startTime-$),mt=!1}return mt}finally{h=null,d=W,m=!1}}var R=!1,T=null,N=-1,j=5,F=-1;function _e(){return!(t.unstable_now()-F<j)}function ot(){if(T!==null){var D=t.unstable_now();F=D;var $=!0;try{$=T(!0,D)}finally{$?Zt():(R=!1,T=null)}}else R=!1}var Zt;if(typeof p=="function")Zt=function(){p(ot)};else if(typeof MessageChannel<"u"){var Kn=new MessageChannel,Ae=Kn.port2;Kn.port1.onmessage=ot,Zt=function(){Ae.postMessage(null)}}else Zt=function(){E(ot,0)};function Cn(D){T=D,R||(R=!0,Zt())}function Bt(D,$){N=E(function(){D(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Cn(I))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var W=d;d=$;try{return D()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=d;d=D;try{return $()}finally{d=W}},t.unstable_scheduleCallback=function(D,$,W){var ne=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ne+W:ne):W=ne,D){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=W+de,D={id:c++,callback:$,priorityLevel:D,startTime:W,expirationTime:de,sortIndex:-1},W>ne?(D.sortIndex=W,e(u,D),n(l)===null&&D===n(u)&&(_?(g(N),N=-1):_=!0,Bt(f,W-ne))):(D.sortIndex=de,e(l,D),v||m||(v=!0,Cn(I))),D},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(D){var $=d;return function(){var W=d;d=$;try{return D.apply(this,arguments)}finally{d=W}}}})(K0);q0.exports=K0;var XR=q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=P,Qt=XR;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q0=new Set,ma={};function Yi(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(ma[t]=e,t=0;t<e.length;t++)Q0.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,JR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ty={},Iy={};function ZR(t){return Kd.call(Iy,t)?!0:Kd.call(Ty,t)?!1:JR.test(t)?Iy[t]=!0:(Ty[t]=!0,!1)}function eA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tA(t,e,n,r){if(e===null||typeof e>"u"||eA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vp,Up);pt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vp,Up);pt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vp,Up);pt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tA(e,n,i,r)&&(n=null),r||i===null?ZR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Bp=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),Sy=Symbol.iterator;function To(t){return t===null||typeof t!="object"?null:(t=Sy&&t[Sy]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,qh;function Uo(t){if(qh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qh=e&&e[1]||""}return`
`+qh+t}var Kh=!1;function Gh(t,e){if(!t||Kh)return"";Kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function nA(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=Gh(t.type,!1),t;case 11:return t=Gh(t.type.render,!1),t;case 1:return t=Gh(t.type,!0),t;default:return""}}function Xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case Gd:return"Profiler";case $p:return"StrictMode";case Qd:return"Suspense";case Yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X0:return(t.displayName||"Context")+".Consumer";case Y0:return(t._context.displayName||"Context")+".Provider";case jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bp:return e=t.displayName||null,e!==null?e:Xd(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return Xd(t(e))}catch{}}return null}function rA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(e);case 8:return e===$p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iA(t){var e=Z0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=iA(t))}function ew(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Z0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jd(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ry(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tw(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function Zd(t,e){tw(t,e);var n=Jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&ef(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ay(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ef(t,e,n){(e!=="number"||Lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function Is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Py(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Fo(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function nw(t,e){var n=Jr(e.value),r=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,iw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sA=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){sA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function sw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function ow(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var oA=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(t,e){if(e){if(oA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var af=null,Ss=null,Rs=null;function ky(t){if(t=rl(t)){if(typeof af!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Vc(e),af(t.stateNode,t.type,e))}}function aw(t){Ss?Rs?Rs.push(t):Rs=[t]:Ss=t}function lw(){if(Ss){var t=Ss,e=Rs;if(Rs=Ss=null,ky(t),e)for(t=0;t<e.length;t++)ky(e[t])}}function uw(t,e){return t(e)}function cw(){}var Qh=!1;function hw(t,e,n){if(Qh)return t(e,n);Qh=!0;try{return uw(t,e,n)}finally{Qh=!1,(Ss!==null||Rs!==null)&&(cw(),lw())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var r=Vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var lf=!1;if(ar)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{lf=!1}function aA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Xo=!1,bu=null,Mu=!1,uf=null,lA={onError:function(t){Xo=!0,bu=t}};function uA(t,e,n,r,i,s,o,a,l){Xo=!1,bu=null,aA.apply(lA,arguments)}function cA(t,e,n,r,i,s,o,a,l){if(uA.apply(this,arguments),Xo){if(Xo){var u=bu;Xo=!1,bu=null}else throw Error(x(198));Mu||(Mu=!0,uf=u)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xy(t){if(Xi(t)!==t)throw Error(x(188))}function hA(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xy(i),t;if(s===r)return xy(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function fw(t){return t=hA(t),t!==null?pw(t):null}function pw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pw(t);if(e!==null)return e;t=t.sibling}return null}var mw=Qt.unstable_scheduleCallback,Ny=Qt.unstable_cancelCallback,dA=Qt.unstable_shouldYield,fA=Qt.unstable_requestPaint,ze=Qt.unstable_now,pA=Qt.unstable_getCurrentPriorityLevel,Hp=Qt.unstable_ImmediatePriority,gw=Qt.unstable_UserBlockingPriority,Vu=Qt.unstable_NormalPriority,mA=Qt.unstable_LowPriority,yw=Qt.unstable_IdlePriority,Oc=null,Un=null;function gA(t){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Oc,t,void 0,(t.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:_A,yA=Math.log,vA=Math.LN2;function _A(t){return t>>>=0,t===0?32:31-(yA(t)/vA|0)|0}var Vl=64,Ul=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$o(a):(s&=o,s!==0&&(r=$o(s)))}else o=n&~i,o!==0?r=$o(o):s!==0&&(r=$o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-En(e),i=1<<n,r|=t[n],e&=~i;return r}function wA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-En(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=wA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vw(){var t=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),t}function Yh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-En(e),t[e]=n}function TA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-En(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-En(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function _w(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ww,qp,Ew,Tw,Iw,hf=!1,Fl=[],Fr=null,$r=null,jr=null,va=new Map,_a=new Map,xr=[],IA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dy(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function So(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rl(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SA(t,e,n,r,i){switch(e){case"focusin":return Fr=So(Fr,t,e,n,r,i),!0;case"dragenter":return $r=So($r,t,e,n,r,i),!0;case"mouseover":return jr=So(jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return va.set(s,So(va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_a.set(s,So(_a.get(s)||null,t,e,n,r,i)),!0}return!1}function Sw(t){var e=vi(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=dw(n),e!==null){t.blockedOn=e,Iw(t.priority,function(){Ew(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);of=r,n.target.dispatchEvent(r),of=null}else return e=rl(n),e!==null&&qp(e),t.blockedOn=n,!1;e.shift()}return!0}function Oy(t,e,n){cu(t)&&n.delete(e)}function RA(){hf=!1,Fr!==null&&cu(Fr)&&(Fr=null),$r!==null&&cu($r)&&($r=null),jr!==null&&cu(jr)&&(jr=null),va.forEach(Oy),_a.forEach(Oy)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,RA)))}function wa(t){function e(i){return Ro(i,t)}if(0<Fl.length){Ro(Fl[0],t);for(var n=1;n<Fl.length;n++){var r=Fl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&Ro(Fr,t),$r!==null&&Ro($r,t),jr!==null&&Ro(jr,t),va.forEach(e),_a.forEach(e),n=0;n<xr.length;n++)r=xr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)Sw(n),n.blockedOn===null&&xr.shift()}var As=mr.ReactCurrentBatchConfig,Fu=!0;function AA(t,e,n,r){var i=fe,s=As.transition;As.transition=null;try{fe=1,Kp(t,e,n,r)}finally{fe=i,As.transition=s}}function PA(t,e,n,r){var i=fe,s=As.transition;As.transition=null;try{fe=4,Kp(t,e,n,r)}finally{fe=i,As.transition=s}}function Kp(t,e,n,r){if(Fu){var i=df(t,e,n,r);if(i===null)od(t,e,r,$u,n),Dy(t,r);else if(SA(i,t,e,n,r))r.stopPropagation();else if(Dy(t,r),e&4&&-1<IA.indexOf(t)){for(;i!==null;){var s=rl(i);if(s!==null&&ww(s),s=df(t,e,n,r),s===null&&od(t,e,r,$u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else od(t,e,r,null,n)}}var $u=null;function df(t,e,n,r){if($u=null,t=zp(r),t=vi(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function Rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pA()){case Hp:return 1;case gw:return 4;case Vu:case mA:return 16;case yw:return 536870912;default:return 16}default:return 16}}var Mr=null,Gp=null,hu=null;function Aw(){if(hu)return hu;var t,e=Gp,n=e.length,r,i="value"in Mr?Mr.value:Mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hu=i.slice(t,1<r?1-r:void 0)}function du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Ly(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:Ly,this.isPropagationStopped=Ly,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qp=Jt(ro),nl=De({},ro,{view:0,detail:0}),CA=Jt(nl),Xh,Jh,Ao,Lc=De({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(Xh=t.screenX-Ao.screenX,Jh=t.screenY-Ao.screenY):Jh=Xh=0,Ao=t),Xh)},movementY:function(t){return"movementY"in t?t.movementY:Jh}}),by=Jt(Lc),kA=De({},Lc,{dataTransfer:0}),xA=Jt(kA),NA=De({},nl,{relatedTarget:0}),Zh=Jt(NA),DA=De({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),OA=Jt(DA),LA=De({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bA=Jt(LA),MA=De({},ro,{data:0}),My=Jt(MA),VA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $A(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FA[t])?!!e[t]:!1}function Yp(){return $A}var jA=De({},nl,{key:function(t){if(t.key){var e=VA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yp,charCode:function(t){return t.type==="keypress"?du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BA=Jt(jA),zA=De({},Lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vy=Jt(zA),HA=De({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yp}),WA=Jt(HA),qA=De({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),KA=Jt(qA),GA=De({},Lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QA=Jt(GA),YA=[9,13,27,32],Xp=ar&&"CompositionEvent"in window,Jo=null;ar&&"documentMode"in document&&(Jo=document.documentMode);var XA=ar&&"TextEvent"in window&&!Jo,Pw=ar&&(!Xp||Jo&&8<Jo&&11>=Jo),Uy=String.fromCharCode(32),Fy=!1;function Cw(t,e){switch(t){case"keyup":return YA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function JA(t,e){switch(t){case"compositionend":return kw(e);case"keypress":return e.which!==32?null:(Fy=!0,Uy);case"textInput":return t=e.data,t===Uy&&Fy?null:t;default:return null}}function ZA(t,e){if(cs)return t==="compositionend"||!Xp&&Cw(t,e)?(t=Aw(),hu=Gp=Mr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pw&&e.locale!=="ko"?null:e.data;default:return null}}var eP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $y(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eP[t.type]:e==="textarea"}function xw(t,e,n,r){aw(r),e=ju(e,"onChange"),0<e.length&&(n=new Qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zo=null,Ea=null;function tP(t){jw(t,0)}function bc(t){var e=fs(t);if(ew(e))return t}function nP(t,e){if(t==="change")return e}var Nw=!1;if(ar){var ed;if(ar){var td="oninput"in document;if(!td){var jy=document.createElement("div");jy.setAttribute("oninput","return;"),td=typeof jy.oninput=="function"}ed=td}else ed=!1;Nw=ed&&(!document.documentMode||9<document.documentMode)}function By(){Zo&&(Zo.detachEvent("onpropertychange",Dw),Ea=Zo=null)}function Dw(t){if(t.propertyName==="value"&&bc(Ea)){var e=[];xw(e,Ea,t,zp(t)),hw(tP,e)}}function rP(t,e,n){t==="focusin"?(By(),Zo=e,Ea=n,Zo.attachEvent("onpropertychange",Dw)):t==="focusout"&&By()}function iP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(Ea)}function sP(t,e){if(t==="click")return bc(e)}function oP(t,e){if(t==="input"||t==="change")return bc(e)}function aP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:aP;function Ta(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kd.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function zy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hy(t,e){var n=zy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zy(n)}}function Ow(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ow(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lw(){for(var t=window,e=Lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lu(t.document)}return e}function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lP(t){var e=Lw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ow(n.ownerDocument.documentElement,n)){if(r!==null&&Jp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hy(n,s);var o=Hy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uP=ar&&"documentMode"in document&&11>=document.documentMode,hs=null,ff=null,ea=null,pf=!1;function Wy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||hs==null||hs!==Lu(r)||(r=hs,"selectionStart"in r&&Jp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ea&&Ta(ea,r)||(ea=r,r=ju(ff,"onSelect"),0<r.length&&(e=new Qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hs)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},nd={},bw={};ar&&(bw=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Mc(t){if(nd[t])return nd[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bw)return nd[t]=e[n];return t}var Mw=Mc("animationend"),Vw=Mc("animationiteration"),Uw=Mc("animationstart"),Fw=Mc("transitionend"),$w=new Map,qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,e){$w.set(t,e),Yi(e,[t])}for(var rd=0;rd<qy.length;rd++){var id=qy[rd],cP=id.toLowerCase(),hP=id[0].toUpperCase()+id.slice(1);ii(cP,"on"+hP)}ii(Mw,"onAnimationEnd");ii(Vw,"onAnimationIteration");ii(Uw,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(Fw,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dP=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function Ky(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cA(r,e,void 0,t),t.currentTarget=null}function jw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ky(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ky(i,a,u),s=l}}}if(Mu)throw t=uf,Mu=!1,uf=null,t}function we(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var r=t+"__bubble";n.has(r)||(Bw(e,t,2,!1),n.add(r))}function sd(t,e,n){var r=0;e&&(r|=4),Bw(n,t,r,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Bl]){t[Bl]=!0,Q0.forEach(function(n){n!=="selectionchange"&&(dP.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,sd("selectionchange",!1,e))}}function Bw(t,e,n,r){switch(Rw(e)){case 1:var i=AA;break;case 4:i=PA;break;default:i=Kp}n=i.bind(null,e,n,t),i=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}hw(function(){var u=s,c=zp(n),h=[];e:{var d=$w.get(t);if(d!==void 0){var m=Qp,v=t;switch(t){case"keypress":if(du(n)===0)break e;case"keydown":case"keyup":m=BA;break;case"focusin":v="focus",m=Zh;break;case"focusout":v="blur",m=Zh;break;case"beforeblur":case"afterblur":m=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=by;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=WA;break;case Mw:case Vw:case Uw:m=OA;break;case Fw:m=KA;break;case"scroll":m=CA;break;case"wheel":m=QA;break;case"copy":case"cut":case"paste":m=bA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vy}var _=(e&4)!==0,E=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var p=u,y;p!==null;){y=p;var f=y.stateNode;if(y.tag===5&&f!==null&&(y=f,g!==null&&(f=ya(p,g),f!=null&&_.push(Sa(p,f,y)))),E)break;p=p.return}0<_.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==of&&(v=n.relatedTarget||n.fromElement)&&(vi(v)||v[lr]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?vi(v):null,v!==null&&(E=Xi(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=by,f="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Vy,f="onPointerLeave",g="onPointerEnter",p="pointer"),E=m==null?d:fs(m),y=v==null?d:fs(v),d=new _(f,p+"leave",m,n,c),d.target=E,d.relatedTarget=y,f=null,vi(c)===u&&(_=new _(g,p+"enter",v,n,c),_.target=y,_.relatedTarget=E,f=_),E=f,m&&v)t:{for(_=m,g=v,p=0,y=_;y;y=ns(y))p++;for(y=0,f=g;f;f=ns(f))y++;for(;0<p-y;)_=ns(_),p--;for(;0<y-p;)g=ns(g),y--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=ns(_),g=ns(g)}_=null}else _=null;m!==null&&Gy(h,d,m,_,!1),v!==null&&E!==null&&Gy(h,E,v,_,!0)}}e:{if(d=u?fs(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=nP;else if($y(d))if(Nw)I=oP;else{I=iP;var R=rP}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=sP);if(I&&(I=I(t,u))){xw(h,I,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&ef(d,"number",d.value)}switch(R=u?fs(u):window,t){case"focusin":($y(R)||R.contentEditable==="true")&&(hs=R,ff=u,ea=null);break;case"focusout":ea=ff=hs=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Wy(h,n,c);break;case"selectionchange":if(uP)break;case"keydown":case"keyup":Wy(h,n,c)}var T;if(Xp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else cs?Cw(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Pw&&n.locale!=="ko"&&(cs||N!=="onCompositionStart"?N==="onCompositionEnd"&&cs&&(T=Aw()):(Mr=c,Gp="value"in Mr?Mr.value:Mr.textContent,cs=!0)),R=ju(u,N),0<R.length&&(N=new My(N,t,null,n,c),h.push({event:N,listeners:R}),T?N.data=T:(T=kw(n),T!==null&&(N.data=T)))),(T=XA?JA(t,n):ZA(t,n))&&(u=ju(u,"onBeforeInput"),0<u.length&&(c=new My("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}jw(h,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ju(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ya(t,n),s!=null&&r.unshift(Sa(t,s,i)),s=ya(t,e),s!=null&&r.push(Sa(t,s,i))),t=t.return}return r}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ya(n,s),l!=null&&o.unshift(Sa(n,l,a))):i||(l=ya(n,s),l!=null&&o.push(Sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fP=/\r\n?/g,pP=/\u0000|\uFFFD/g;function Qy(t){return(typeof t=="string"?t:""+t).replace(fP,`
`).replace(pP,"")}function zl(t,e,n){if(e=Qy(e),Qy(t)!==e&&n)throw Error(x(425))}function Bu(){}var mf=null,gf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,mP=typeof clearTimeout=="function"?clearTimeout:void 0,Yy=typeof Promise=="function"?Promise:void 0,gP=typeof queueMicrotask=="function"?queueMicrotask:typeof Yy<"u"?function(t){return Yy.resolve(null).then(t).catch(yP)}:vf;function yP(t){setTimeout(function(){throw t})}function ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),On="__reactFiber$"+io,Ra="__reactProps$"+io,lr="__reactContainer$"+io,_f="__reactEvents$"+io,vP="__reactListeners$"+io,_P="__reactHandles$"+io;function vi(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xy(t);t!==null;){if(n=t[On])return n;t=Xy(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[On]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Vc(t){return t[Ra]||null}var wf=[],ps=-1;function si(t){return{current:t}}function Se(t){0>ps||(t.current=wf[ps],wf[ps]=null,ps--)}function ve(t,e){ps++,wf[ps]=t.current,t.current=e}var Zr={},Rt=si(Zr),Ut=si(!1),Li=Zr;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function zu(){Se(Ut),Se(Rt)}function Jy(t,e,n){if(Rt.current!==Zr)throw Error(x(168));ve(Rt,e),ve(Ut,n)}function zw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,rA(t)||"Unknown",i));return De({},n,r)}function Hu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Li=Rt.current,ve(Rt,t),ve(Ut,Ut.current),!0}function Zy(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=zw(t,e,Li),r.__reactInternalMemoizedMergedChildContext=t,Se(Ut),Se(Rt),ve(Rt,t)):Se(Ut),ve(Ut,n)}var Jn=null,Uc=!1,ld=!1;function Hw(t){Jn===null?Jn=[t]:Jn.push(t)}function wP(t){Uc=!0,Hw(t)}function oi(){if(!ld&&Jn!==null){ld=!0;var t=0,e=fe;try{var n=Jn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jn=null,Uc=!1}catch(i){throw Jn!==null&&(Jn=Jn.slice(t+1)),mw(Hp,oi),i}finally{fe=e,ld=!1}}return null}var ms=[],gs=0,Wu=null,qu=0,nn=[],rn=0,bi=null,er=1,tr="";function mi(t,e){ms[gs++]=qu,ms[gs++]=Wu,Wu=t,qu=e}function Ww(t,e,n){nn[rn++]=er,nn[rn++]=tr,nn[rn++]=bi,bi=t;var r=er;t=tr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var s=32-En(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,er=1<<32-En(e)+i|n<<i|r,tr=s+t}else er=1<<s|n<<i|r,tr=t}function Zp(t){t.return!==null&&(mi(t,1),Ww(t,1,0))}function em(t){for(;t===Wu;)Wu=ms[--gs],ms[gs]=null,qu=ms[--gs],ms[gs]=null;for(;t===bi;)bi=nn[--rn],nn[rn]=null,tr=nn[--rn],nn[rn]=null,er=nn[--rn],nn[rn]=null}var Gt=null,Wt=null,Ce=!1,_n=null;function qw(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ev(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,Wt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bi!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,Wt=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tf(t){if(Ce){var e=Wt;if(e){var n=e;if(!ev(t,e)){if(Ef(t))throw Error(x(418));e=Br(n.nextSibling);var r=Gt;e&&ev(t,e)?qw(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Gt=t)}}else{if(Ef(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ce=!1,Gt=t}}}function tv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function Hl(t){if(t!==Gt)return!1;if(!Ce)return tv(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=Wt)){if(Ef(t))throw Kw(),Error(x(418));for(;e;)qw(t,e),e=Br(e.nextSibling)}if(tv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Gt?Br(t.stateNode.nextSibling):null;return!0}function Kw(){for(var t=Wt;t;)t=Br(t.nextSibling)}function Vs(){Wt=Gt=null,Ce=!1}function tm(t){_n===null?_n=[t]:_n.push(t)}var EP=mr.ReactCurrentBatchConfig;function gn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ku=si(null),Gu=null,ys=null,nm=null;function rm(){nm=ys=Gu=null}function im(t){var e=Ku.current;Se(Ku),t._currentValue=e}function If(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Gu=t,nm=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(nm!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Gu===null)throw Error(x(308));ys=t,Gu.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var _i=null;function sm(t){_i===null?_i=[t]:_i.push(t)}function Gw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}function nv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qu(t,e,n,r){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=De({},h,d);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vi|=o,t.lanes=o,t.memoizedState=h}}function rv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Yw=new G0.Component().refs;function Sf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Wr(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(Tn(e,t,i,r),fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Wr(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(Tn(e,t,i,r),fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=Wr(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=zr(t,i,r),e!==null&&(Tn(e,t,r,n),fu(e,t,r))}};function iv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,r)||!Ta(i,s):!0}function Xw(t,e,n){var r=!1,i=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=Ft(e)?Li:Rt.current,r=e.contextTypes,s=(r=r!=null)?Ms(t,i):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Yw,om(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=Ft(e)?Li:Rt.current,i.context=Ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fc.enqueueReplaceState(i,i.state,null),Qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Yw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ov(t){var e=t._init;return e(t._payload)}function Jw(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=qr(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,f){return p===null||p.tag!==6?(p=md(y,g.mode,f),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,f){var I=y.type;return I===us?c(g,p,y.props.children,f,y.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Cr&&ov(I)===p.type)?(f=i(p,y.props),f.ref=Po(g,p,y),f.return=g,f):(f=_u(y.type,y.key,y.props,null,g.mode,f),f.ref=Po(g,p,y),f.return=g,f)}function u(g,p,y,f){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=gd(y,g.mode,f),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function c(g,p,y,f,I){return p===null||p.tag!==7?(p=ki(y,g.mode,f,I),p.return=g,p):(p=i(p,y),p.return=g,p)}function h(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=md(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ll:return y=_u(p.type,p.key,p.props,null,g.mode,y),y.ref=Po(g,null,p),y.return=g,y;case ls:return p=gd(p,g.mode,y),p.return=g,p;case Cr:var f=p._init;return h(g,f(p._payload),y)}if(Fo(p)||To(p))return p=ki(p,g.mode,y,null),p.return=g,p;Wl(g,p)}return null}function d(g,p,y,f){var I=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(g,p,""+y,f);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ll:return y.key===I?l(g,p,y,f):null;case ls:return y.key===I?u(g,p,y,f):null;case Cr:return I=y._init,d(g,p,I(y._payload),f)}if(Fo(y)||To(y))return I!==null?null:c(g,p,y,f,null);Wl(g,y)}return null}function m(g,p,y,f,I){if(typeof f=="string"&&f!==""||typeof f=="number")return g=g.get(y)||null,a(p,g,""+f,I);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ll:return g=g.get(f.key===null?y:f.key)||null,l(p,g,f,I);case ls:return g=g.get(f.key===null?y:f.key)||null,u(p,g,f,I);case Cr:var R=f._init;return m(g,p,y,R(f._payload),I)}if(Fo(f)||To(f))return g=g.get(y)||null,c(p,g,f,I,null);Wl(p,f)}return null}function v(g,p,y,f){for(var I=null,R=null,T=p,N=p=0,j=null;T!==null&&N<y.length;N++){T.index>N?(j=T,T=null):j=T.sibling;var F=d(g,T,y[N],f);if(F===null){T===null&&(T=j);break}t&&T&&F.alternate===null&&e(g,T),p=s(F,p,N),R===null?I=F:R.sibling=F,R=F,T=j}if(N===y.length)return n(g,T),Ce&&mi(g,N),I;if(T===null){for(;N<y.length;N++)T=h(g,y[N],f),T!==null&&(p=s(T,p,N),R===null?I=T:R.sibling=T,R=T);return Ce&&mi(g,N),I}for(T=r(g,T);N<y.length;N++)j=m(T,g,N,y[N],f),j!==null&&(t&&j.alternate!==null&&T.delete(j.key===null?N:j.key),p=s(j,p,N),R===null?I=j:R.sibling=j,R=j);return t&&T.forEach(function(_e){return e(g,_e)}),Ce&&mi(g,N),I}function _(g,p,y,f){var I=To(y);if(typeof I!="function")throw Error(x(150));if(y=I.call(y),y==null)throw Error(x(151));for(var R=I=null,T=p,N=p=0,j=null,F=y.next();T!==null&&!F.done;N++,F=y.next()){T.index>N?(j=T,T=null):j=T.sibling;var _e=d(g,T,F.value,f);if(_e===null){T===null&&(T=j);break}t&&T&&_e.alternate===null&&e(g,T),p=s(_e,p,N),R===null?I=_e:R.sibling=_e,R=_e,T=j}if(F.done)return n(g,T),Ce&&mi(g,N),I;if(T===null){for(;!F.done;N++,F=y.next())F=h(g,F.value,f),F!==null&&(p=s(F,p,N),R===null?I=F:R.sibling=F,R=F);return Ce&&mi(g,N),I}for(T=r(g,T);!F.done;N++,F=y.next())F=m(T,g,N,F.value,f),F!==null&&(t&&F.alternate!==null&&T.delete(F.key===null?N:F.key),p=s(F,p,N),R===null?I=F:R.sibling=F,R=F);return t&&T.forEach(function(ot){return e(g,ot)}),Ce&&mi(g,N),I}function E(g,p,y,f){if(typeof y=="object"&&y!==null&&y.type===us&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ll:e:{for(var I=y.key,R=p;R!==null;){if(R.key===I){if(I=y.type,I===us){if(R.tag===7){n(g,R.sibling),p=i(R,y.props.children),p.return=g,g=p;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Cr&&ov(I)===R.type){n(g,R.sibling),p=i(R,y.props),p.ref=Po(g,R,y),p.return=g,g=p;break e}n(g,R);break}else e(g,R);R=R.sibling}y.type===us?(p=ki(y.props.children,g.mode,f,y.key),p.return=g,g=p):(f=_u(y.type,y.key,y.props,null,g.mode,f),f.ref=Po(g,p,y),f.return=g,g=f)}return o(g);case ls:e:{for(R=y.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=gd(y,g.mode,f),p.return=g,g=p}return o(g);case Cr:return R=y._init,E(g,p,R(y._payload),f)}if(Fo(y))return v(g,p,y,f);if(To(y))return _(g,p,y,f);Wl(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=md(y,g.mode,f),p.return=g,g=p),o(g)):n(g,p)}return E}var Us=Jw(!0),Zw=Jw(!1),il={},Fn=si(il),Aa=si(il),Pa=si(il);function wi(t){if(t===il)throw Error(x(174));return t}function am(t,e){switch(ve(Pa,e),ve(Aa,t),ve(Fn,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nf(e,t)}Se(Fn),ve(Fn,e)}function Fs(){Se(Fn),Se(Aa),Se(Pa)}function eE(t){wi(Pa.current);var e=wi(Fn.current),n=nf(e,t.type);e!==n&&(ve(Aa,t),ve(Fn,n))}function lm(t){Aa.current===t&&(Se(Fn),Se(Aa))}var xe=si(0);function Yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function um(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var pu=mr.ReactCurrentDispatcher,cd=mr.ReactCurrentBatchConfig,Mi=0,Ne=null,Xe=null,tt=null,Xu=!1,ta=!1,Ca=0,TP=0;function gt(){throw Error(x(321))}function cm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function hm(t,e,n,r,i,s){if(Mi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=t===null||t.memoizedState===null?AP:PP,t=n(r,i),ta){s=0;do{if(ta=!1,Ca=0,25<=s)throw Error(x(301));s+=1,tt=Xe=null,e.updateQueue=null,pu.current=CP,t=n(r,i)}while(ta)}if(pu.current=Ju,e=Xe!==null&&Xe.next!==null,Mi=0,tt=Xe=Ne=null,Xu=!1,e)throw Error(x(300));return t}function dm(){var t=Ca!==0;return Ca=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ne.memoizedState=tt=t:tt=tt.next=t,tt}function un(){if(Xe===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=tt===null?Ne.memoizedState:tt.next;if(e!==null)tt=e,Xe=t;else{if(t===null)throw Error(x(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},tt===null?Ne.memoizedState=tt=t:tt=tt.next=t}return tt}function ka(t,e){return typeof e=="function"?e(t):e}function hd(t){var e=un(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Mi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ne.lanes|=c,Vi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dd(t){var e=un(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tE(){}function nE(t,e){var n=Ne,r=un(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,fm(sE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,xa(9,iE.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(x(349));Mi&30||rE(n,e,i)}return i}function rE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iE(t,e,n,r){e.value=n,e.getSnapshot=r,oE(e)&&aE(t)}function sE(t,e,n){return n(function(){oE(e)&&aE(t)})}function oE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function aE(t){var e=ur(t,1);e!==null&&Tn(e,t,1,-1)}function av(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=RP.bind(null,Ne,t),[e.memoizedState,t]}function xa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lE(){return un().memoizedState}function mu(t,e,n,r){var i=Nn();Ne.flags|=t,i.memoizedState=xa(1|e,n,void 0,r===void 0?null:r)}function $c(t,e,n,r){var i=un();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&cm(r,o.deps)){i.memoizedState=xa(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=xa(1|e,n,s,r)}function lv(t,e){return mu(8390656,8,t,e)}function fm(t,e){return $c(2048,8,t,e)}function uE(t,e){return $c(4,2,t,e)}function cE(t,e){return $c(4,4,t,e)}function hE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dE(t,e,n){return n=n!=null?n.concat([t]):null,$c(4,4,hE.bind(null,e,t),n)}function pm(){}function fE(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pE(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mE(t,e,n){return Mi&21?(Rn(n,e)||(n=vw(),Ne.lanes|=n,Vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function IP(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=cd.transition;cd.transition={};try{t(!1),e()}finally{fe=n,cd.transition=r}}function gE(){return un().memoizedState}function SP(t,e,n){var r=Wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yE(t))vE(e,n);else if(n=Gw(t,e,n,r),n!==null){var i=Nt();Tn(n,t,r,i),_E(n,e,r)}}function RP(t,e,n){var r=Wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yE(t))vE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(i.next=i,sm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Gw(t,e,i,r),n!==null&&(i=Nt(),Tn(n,t,r,i),_E(n,e,r))}}function yE(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function vE(t,e){ta=Xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _E(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}var Ju={readContext:ln,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},AP={readContext:ln,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:lv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,hE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SP.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:av,useDebugValue:pm,useDeferredValue:function(t){return Nn().memoizedState=t},useTransition:function(){var t=av(!1),e=t[0];return t=IP.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Nn();if(Ce){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),rt===null)throw Error(x(349));Mi&30||rE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lv(sE.bind(null,r,s,t),[t]),r.flags|=2048,xa(9,iE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nn(),e=rt.identifierPrefix;if(Ce){var n=tr,r=er;n=(r&~(1<<32-En(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PP={readContext:ln,useCallback:fE,useContext:ln,useEffect:fm,useImperativeHandle:dE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:hd,useRef:lE,useState:function(){return hd(ka)},useDebugValue:pm,useDeferredValue:function(t){var e=un();return mE(e,Xe.memoizedState,t)},useTransition:function(){var t=hd(ka)[0],e=un().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1},CP={readContext:ln,useCallback:fE,useContext:ln,useEffect:fm,useImperativeHandle:dE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:dd,useRef:lE,useState:function(){return dd(ka)},useDebugValue:pm,useDeferredValue:function(t){var e=un();return Xe===null?e.memoizedState=t:mE(e,Xe.memoizedState,t)},useTransition:function(){var t=dd(ka)[0],e=un().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1};function $s(t,e){try{var n="",r=e;do n+=nA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kP=typeof WeakMap=="function"?WeakMap:Map;function wE(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ec||(ec=!0,Mf=r),Af(t,e)},n}function EE(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function uv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zP.bind(null,t,e,n),e.then(t,t))}function cv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var xP=mr.ReactCurrentOwner,Vt=!1;function kt(t,e,n,r){e.child=t===null?Zw(e,null,n,r):Us(e,t.child,n,r)}function dv(t,e,n,r,i){n=n.render;var s=e.ref;return Ps(e,i),r=hm(t,e,n,r,s,i),n=dm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Ce&&n&&Zp(e),e.flags|=1,kt(t,e,r,i),e.child)}function fv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,TE(t,e,s,r,i)):(t=_u(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function TE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ta(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Pf(t,e,n,r,i)}function IE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(_s,Ht),Ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(_s,Ht),Ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(_s,Ht),Ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(_s,Ht),Ht|=r;return kt(t,e,i,n),e.child}function SE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,r,i){var s=Ft(n)?Li:Rt.current;return s=Ms(e,s),Ps(e,i),n=hm(t,e,n,r,s,i),r=dm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Ce&&r&&Zp(e),e.flags|=1,kt(t,e,n,i),e.child)}function pv(t,e,n,r,i){if(Ft(n)){var s=!0;Hu(e)}else s=!1;if(Ps(e,i),e.stateNode===null)gu(t,e),Xw(e,n,r),Rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ln(u):(u=Ft(n)?Li:Rt.current,u=Ms(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sv(e,o,r,u),kr=!1;var d=e.memoizedState;o.state=d,Qu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ut.current||kr?(typeof c=="function"&&(Sf(e,n,c,r),l=e.memoizedState),(a=kr||iv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:gn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ln(l):(l=Ft(n)?Li:Rt.current,l=Ms(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&sv(e,o,r,l),kr=!1,d=e.memoizedState,o.state=d,Qu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ut.current||kr?(typeof m=="function"&&(Sf(e,n,m,r),v=e.memoizedState),(u=kr||iv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Cf(t,e,n,r,s,i)}function Cf(t,e,n,r,i,s){SE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zy(e,n,!1),cr(t,e,s);r=e.stateNode,xP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&Zy(e,n,!0),e.child}function RE(t){var e=t.stateNode;e.pendingContext?Jy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jy(t,e.context,!1),am(t,e.containerInfo)}function mv(t,e,n,r,i){return Vs(),tm(i),e.flags|=256,kt(t,e,n,r),e.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function AE(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(xe,i&1),t===null)return Tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zc(o,r,0,null),t=ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xf(n),e.memoizedState=kf,t):mm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=qr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qr(a,s):(s=ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kf,r}return s=t.child,t=s.sibling,r=qr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mm(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ql(t,e,n,r){return r!==null&&tm(r),Us(e,t.child,null,n),t=mm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(x(422))),ql(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zc({mode:"visible",children:r.children},i,0,null),s=ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=kf,s);if(!(e.mode&1))return ql(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=fd(s,r,void 0),ql(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),Tn(r,t,i,-1))}return Em(),r=fd(Error(x(421))),ql(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Br(i.nextSibling),Gt=e,Ce=!0,_n=null,t!==null&&(nn[rn++]=er,nn[rn++]=tr,nn[rn++]=bi,er=t.id,tr=t.overflow,bi=e),e=mm(e,r.children),e.flags|=4096,e)}function gv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),If(t.return,e,n)}function pd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function PE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gv(t,n,e);else if(t.tag===19)gv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pd(e,!0,n,null,s);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DP(t,e,n){switch(e.tag){case 3:RE(e),Vs();break;case 5:eE(e);break;case 1:Ft(e.type)&&Hu(e);break;case 4:am(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Ku,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?AE(t,e,n):(ve(xe,xe.current&1),t=cr(t,e,n),t!==null?t.sibling:null);ve(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return PE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,IE(t,e,n)}return cr(t,e,n)}var CE,Nf,kE,xE;CE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nf=function(){};kE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wi(Fn.current);var s=null;switch(n){case"input":i=Jd(t,i),r=Jd(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=tf(t,i),r=tf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}rf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Co(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OP(t,e,n){var r=e.pendingProps;switch(em(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Ft(e.type)&&zu(),yt(e),null;case 3:return r=e.stateNode,Fs(),Se(Ut),Se(Rt),um(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_n!==null&&(Ff(_n),_n=null))),Nf(t,e),yt(e),null;case 5:lm(e);var i=wi(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)kE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return yt(e),null}if(t=wi(Fn.current),Hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[Ra]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<jo.length;i++)we(jo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Ry(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Py(r,s),we("invalid",r)}rf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,a,t),i=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":bl(r),Ay(r,s,!0);break;case"textarea":bl(r),Cy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[Ra]=r,CE(t,e,!1,!1),e.stateNode=t;e:{switch(o=sf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<jo.length;i++)we(jo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Ry(t,r),i=Jd(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),we("invalid",t);break;case"textarea":Py(t,r),i=tf(t,r),we("invalid",t);break;default:i=r}rf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ow(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&iw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&Fp(t,s,l,o))}switch(n){case"input":bl(t),Ay(t,r,!1);break;case"textarea":bl(t),Cy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Is(t,!!r.multiple,s,!1):r.defaultValue!=null&&Is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)xE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=wi(Pa.current),wi(Fn.current),Hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:zl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return yt(e),null;case 13:if(Se(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Wt!==null&&e.mode&1&&!(e.flags&128))Kw(),Vs(),e.flags|=98560,s=!1;else if(s=Hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[On]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else _n!==null&&(Ff(_n),_n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Je===0&&(Je=3):Em())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Fs(),Nf(t,e),t===null&&Ia(e.stateNode.containerInfo),yt(e),null;case 10:return im(e.type._context),yt(e),null;case 17:return Ft(e.type)&&zu(),yt(e),null;case 19:if(Se(xe),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Co(s,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yu(t),o!==null){for(e.flags|=128,Co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>js&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return yt(e),null}else 2*ze()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=xe.current,ve(xe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return wm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ht&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function LP(t,e){switch(em(e),e.tag){case 1:return Ft(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),Se(Ut),Se(Rt),um(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lm(e),null;case 13:if(Se(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(xe),null;case 4:return Fs(),null;case 10:return im(e.type._context),null;case 22:case 23:return wm(),null;case 24:return null;default:return null}}var Kl=!1,wt=!1,bP=typeof WeakSet=="function"?WeakSet:Set,M=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Df(t,e,n){try{n()}catch(r){be(t,e,r)}}var yv=!1;function MP(t,e){if(mf=Fu,t=Lw(),Jp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:t,selectionRange:n},Fu=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:gn(e.type,_),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(f){be(e,e.return,f)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=yv,yv=!1,v}function na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Df(e,n,s)}i=i.next}while(i!==r)}}function jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function NE(t){var e=t.alternate;e!==null&&(t.alternate=null,NE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Ra],delete e[_f],delete e[vP],delete e[_P])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function DE(t){return t.tag===5||t.tag===3||t.tag===4}function vv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||DE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}var at=null,yn=!1;function Sr(t,e,n){for(n=n.child;n!==null;)OE(t,e,n),n=n.sibling}function OE(t,e,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Oc,n)}catch{}switch(n.tag){case 5:wt||vs(n,e);case 6:var r=at,i=yn;at=null,Sr(t,e,n),at=r,yn=i,at!==null&&(yn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(yn?(t=at,n=n.stateNode,t.nodeType===8?ad(t.parentNode,n):t.nodeType===1&&ad(t,n),wa(t)):ad(at,n.stateNode));break;case 4:r=at,i=yn,at=n.stateNode.containerInfo,yn=!0,Sr(t,e,n),at=r,yn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Df(n,e,o),i=i.next}while(i!==r)}Sr(t,e,n);break;case 1:if(!wt&&(vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}Sr(t,e,n);break;case 21:Sr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Sr(t,e,n),wt=r):Sr(t,e,n);break;default:Sr(t,e,n)}}function _v(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bP),e.forEach(function(r){var i=WP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,yn=!1;break e;case 3:at=a.stateNode.containerInfo,yn=!0;break e;case 4:at=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(at===null)throw Error(x(160));OE(s,o,i),at=null,yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)LE(e,t),e=e.sibling}function LE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mn(e,t),xn(t),r&4){try{na(3,t,t.return),jc(3,t)}catch(_){be(t,t.return,_)}try{na(5,t,t.return)}catch(_){be(t,t.return,_)}}break;case 1:mn(e,t),xn(t),r&512&&n!==null&&vs(n,n.return);break;case 5:if(mn(e,t),xn(t),r&512&&n!==null&&vs(n,n.return),t.flags&32){var i=t.stateNode;try{ga(i,"")}catch(_){be(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tw(i,s),sf(a,o);var u=sf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ow(i,h):c==="dangerouslySetInnerHTML"?iw(i,h):c==="children"?ga(i,h):Fp(i,c,h,u)}switch(a){case"input":Zd(i,s);break;case"textarea":nw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Is(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(i,!!s.multiple,s.defaultValue,!0):Is(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ra]=s}catch(_){be(t,t.return,_)}}break;case 6:if(mn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){be(t,t.return,_)}}break;case 3:if(mn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(_){be(t,t.return,_)}break;case 4:mn(e,t),xn(t);break;case 13:mn(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vm=ze())),r&4&&_v(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,mn(e,t),wt=u):mn(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,m=d.child,d.tag){case 0:case 11:case 14:case 15:na(4,d,d.return);break;case 1:vs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){be(r,n,_)}}break;case 5:vs(d,d.return);break;case 22:if(d.memoizedState!==null){Ev(h);continue}}m!==null?(m.return=d,M=m):Ev(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sw("display",o))}catch(_){be(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){be(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mn(e,t),xn(t),r&4&&_v(t);break;case 21:break;default:mn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(DE(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ga(i,""),r.flags&=-33);var s=vv(t);bf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vv(t);Lf(t,a,o);break;default:throw Error(x(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VP(t,e,n){M=t,bE(t)}function bE(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Kl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Kl;var u=wt;if(Kl=o,(wt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Tv(i):l!==null?(l.return=o,M=l):Tv(i);for(;s!==null;)M=s,bE(s),s=s.sibling;M=i,Kl=a,wt=u}wv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):wv(t)}}function wv(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||jc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}wt||e.flags&512&&Of(e)}catch(d){be(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Ev(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Tv(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jc(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{Of(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{Of(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var UP=Math.ceil,Zu=mr.ReactCurrentDispatcher,gm=mr.ReactCurrentOwner,an=mr.ReactCurrentBatchConfig,ue=0,rt=null,Ge=null,ht=0,Ht=0,_s=si(0),Je=0,Na=null,Vi=0,Bc=0,ym=0,ra=null,bt=null,vm=0,js=1/0,Yn=null,ec=!1,Mf=null,Hr=null,Gl=!1,Vr=null,tc=0,ia=0,Vf=null,yu=-1,vu=0;function Nt(){return ue&6?ze():yu!==-1?yu:yu=ze()}function Wr(t){return t.mode&1?ue&2&&ht!==0?ht&-ht:EP.transition!==null?(vu===0&&(vu=vw()),vu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Rw(t.type)),t):1}function Tn(t,e,n,r){if(50<ia)throw ia=0,Vf=null,Error(x(185));tl(t,n,r),(!(ue&2)||t!==rt)&&(t===rt&&(!(ue&2)&&(Bc|=n),Je===4&&Nr(t,ht)),$t(t,r),n===1&&ue===0&&!(e.mode&1)&&(js=ze()+500,Uc&&oi()))}function $t(t,e){var n=t.callbackNode;EA(t,e);var r=Uu(t,t===rt?ht:0);if(r===0)n!==null&&Ny(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ny(n),e===1)t.tag===0?wP(Iv.bind(null,t)):Hw(Iv.bind(null,t)),gP(function(){!(ue&6)&&oi()}),n=null;else{switch(_w(r)){case 1:n=Hp;break;case 4:n=gw;break;case 16:n=Vu;break;case 536870912:n=yw;break;default:n=Vu}n=zE(n,ME.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ME(t,e){if(yu=-1,vu=0,ue&6)throw Error(x(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=Uu(t,t===rt?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nc(t,r);else{e=r;var i=ue;ue|=2;var s=UE();(rt!==t||ht!==e)&&(Yn=null,js=ze()+500,Ci(t,e));do try{jP();break}catch(a){VE(t,a)}while(1);rm(),Zu.current=s,ue=i,Ge!==null?e=0:(rt=null,ht=0,e=Je)}if(e!==0){if(e===2&&(i=cf(t),i!==0&&(r=i,e=Uf(t,i))),e===1)throw n=Na,Ci(t,0),Nr(t,r),$t(t,ze()),n;if(e===6)Nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!FP(i)&&(e=nc(t,r),e===2&&(s=cf(t),s!==0&&(r=s,e=Uf(t,s))),e===1))throw n=Na,Ci(t,0),Nr(t,r),$t(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:gi(t,bt,Yn);break;case 3:if(Nr(t,r),(r&130023424)===r&&(e=vm+500-ze(),10<e)){if(Uu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vf(gi.bind(null,t,bt,Yn),e);break}gi(t,bt,Yn);break;case 4:if(Nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UP(r/1960))-r,10<r){t.timeoutHandle=vf(gi.bind(null,t,bt,Yn),r);break}gi(t,bt,Yn);break;case 5:gi(t,bt,Yn);break;default:throw Error(x(329))}}}return $t(t,ze()),t.callbackNode===n?ME.bind(null,t):null}function Uf(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&(Ci(t,e).flags|=256),t=nc(t,e),t!==2&&(e=bt,bt=n,e!==null&&Ff(e)),t}function Ff(t){bt===null?bt=t:bt.push.apply(bt,t)}function FP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~ym,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-En(e),r=1<<n;t[n]=-1,e&=~r}}function Iv(t){if(ue&6)throw Error(x(327));Cs();var e=Uu(t,0);if(!(e&1))return $t(t,ze()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var r=cf(t);r!==0&&(e=r,n=Uf(t,r))}if(n===1)throw n=Na,Ci(t,0),Nr(t,e),$t(t,ze()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gi(t,bt,Yn),$t(t,ze()),null}function _m(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(js=ze()+500,Uc&&oi())}}function Ui(t){Vr!==null&&Vr.tag===0&&!(ue&6)&&Cs();var e=ue;ue|=1;var n=an.transition,r=fe;try{if(an.transition=null,fe=1,t)return t()}finally{fe=r,an.transition=n,ue=e,!(ue&6)&&oi()}}function wm(){Ht=_s.current,Se(_s)}function Ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mP(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(em(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zu();break;case 3:Fs(),Se(Ut),Se(Rt),um();break;case 5:lm(r);break;case 4:Fs();break;case 13:Se(xe);break;case 19:Se(xe);break;case 10:im(r.type._context);break;case 22:case 23:wm()}n=n.return}if(rt=t,Ge=t=qr(t.current,null),ht=Ht=e,Je=0,Na=null,ym=Bc=Vi=0,bt=ra=null,_i!==null){for(e=0;e<_i.length;e++)if(n=_i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_i=null}return t}function VE(t,e){do{var n=Ge;try{if(rm(),pu.current=Ju,Xu){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xu=!1}if(Mi=0,tt=Xe=Ne=null,ta=!1,Ca=0,gm.current=null,n===null||n.return===null){Je=1,Na=e,Ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=cv(o);if(m!==null){m.flags&=-257,hv(m,o,a,s,e),m.mode&1&&uv(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){uv(s,u,e),Em();break e}l=Error(x(426))}}else if(Ce&&a.mode&1){var E=cv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),hv(E,o,a,s,e),tm($s(l,a));break e}}s=l=$s(l,a),Je!==4&&(Je=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=wE(s,l,e);nv(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Hr===null||!Hr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var f=EE(s,a,e);nv(s,f);break e}}s=s.return}while(s!==null)}$E(n)}catch(I){e=I,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function UE(){var t=Zu.current;return Zu.current=Ju,t===null?Ju:t}function Em(){(Je===0||Je===3||Je===2)&&(Je=4),rt===null||!(Vi&268435455)&&!(Bc&268435455)||Nr(rt,ht)}function nc(t,e){var n=ue;ue|=2;var r=UE();(rt!==t||ht!==e)&&(Yn=null,Ci(t,e));do try{$P();break}catch(i){VE(t,i)}while(1);if(rm(),ue=n,Zu.current=r,Ge!==null)throw Error(x(261));return rt=null,ht=0,Je}function $P(){for(;Ge!==null;)FE(Ge)}function jP(){for(;Ge!==null&&!dA();)FE(Ge)}function FE(t){var e=BE(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,e===null?$E(t):Ge=e,gm.current=null}function $E(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LP(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,Ge=null;return}}else if(n=OP(n,e,Ht),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Je===0&&(Je=5)}function gi(t,e,n){var r=fe,i=an.transition;try{an.transition=null,fe=1,BP(t,e,n,r)}finally{an.transition=i,fe=r}return null}function BP(t,e,n,r){do Cs();while(Vr!==null);if(ue&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TA(t,s),t===rt&&(Ge=rt=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gl||(Gl=!0,zE(Vu,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=an.transition,an.transition=null;var o=fe;fe=1;var a=ue;ue|=4,gm.current=null,MP(t,n),LE(n,t),lP(gf),Fu=!!mf,gf=mf=null,t.current=n,VP(n),fA(),ue=a,fe=o,an.transition=s}else t.current=n;if(Gl&&(Gl=!1,Vr=t,tc=i),s=t.pendingLanes,s===0&&(Hr=null),gA(n.stateNode),$t(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ec)throw ec=!1,t=Mf,Mf=null,t;return tc&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===Vf?ia++:(ia=0,Vf=t):ia=0,oi(),null}function Cs(){if(Vr!==null){var t=_w(tc),e=an.transition,n=fe;try{if(an.transition=null,fe=16>t?16:t,Vr===null)var r=!1;else{if(t=Vr,Vr=null,tc=0,ue&6)throw Error(x(331));var i=ue;for(ue|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:na(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,m=c.return;if(NE(c),c===u){M=null;break}if(d!==null){d.return=m,M=d;break}M=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(I){be(a,a.return,I)}if(a===o){M=null;break e}var f=a.sibling;if(f!==null){f.return=a.return,M=f;break e}M=a.return}}if(ue=i,oi(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Oc,t)}catch{}r=!0}return r}finally{fe=n,an.transition=e}}return!1}function Sv(t,e,n){e=$s(n,e),e=wE(t,e,1),t=zr(t,e,1),e=Nt(),t!==null&&(tl(t,1,e),$t(t,e))}function be(t,e,n){if(t.tag===3)Sv(t,t,n);else for(;e!==null;){if(e.tag===3){Sv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=$s(n,t),t=EE(e,t,1),e=zr(e,t,1),t=Nt(),e!==null&&(tl(e,1,t),$t(e,t));break}}e=e.return}}function zP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ht&n)===n&&(Je===4||Je===3&&(ht&130023424)===ht&&500>ze()-vm?Ci(t,0):ym|=n),$t(t,e)}function jE(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=Nt();t=ur(t,e),t!==null&&(tl(t,e,n),$t(t,n))}function HP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jE(t,n)}function WP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),jE(t,n)}var BE;BE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,DP(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Ce&&e.flags&1048576&&Ww(e,qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var i=Ms(e,Rt.current);Ps(e,n),i=hm(null,e,r,t,i,n);var s=dm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,Hu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,om(e),i.updater=Fc,e.stateNode=i,i._reactInternals=e,Rf(e,r,t,n),e=Cf(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&Zp(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KP(r),t=gn(r,t),i){case 0:e=Pf(null,e,r,t,n);break e;case 1:e=pv(null,e,r,t,n);break e;case 11:e=dv(null,e,r,t,n);break e;case 14:e=fv(null,e,r,gn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),Pf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),pv(t,e,r,i,n);case 3:e:{if(RE(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qw(t,e),Qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$s(Error(x(423)),e),e=mv(t,e,r,n,i);break e}else if(r!==i){i=$s(Error(x(424)),e),e=mv(t,e,r,n,i);break e}else for(Wt=Br(e.stateNode.containerInfo.firstChild),Gt=e,Ce=!0,_n=null,n=Zw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),r===i){e=cr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return eE(e),t===null&&Tf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,yf(r,i)?o=null:s!==null&&yf(r,s)&&(e.flags|=32),SE(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Tf(e),null;case 13:return AE(t,e,n);case 4:return am(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Us(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),dv(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Ku,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Ut.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),If(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),If(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ps(e,n),i=ln(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=gn(r,e.pendingProps),i=gn(r.type,i),fv(t,e,r,i,n);case 15:return TE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),gu(t,e),e.tag=1,Ft(r)?(t=!0,Hu(e)):t=!1,Ps(e,n),Xw(e,r,i),Rf(e,r,i,n),Cf(null,e,r,!0,t,n);case 19:return PE(t,e,n);case 22:return IE(t,e,n)}throw Error(x(156,e.tag))};function zE(t,e){return mw(t,e)}function qP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new qP(t,e,n,r)}function Tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KP(t){if(typeof t=="function")return Tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jp)return 11;if(t===Bp)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _u(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return ki(n.children,i,s,e);case $p:o=8,i|=8;break;case Gd:return t=on(12,n,e,i|2),t.elementType=Gd,t.lanes=s,t;case Qd:return t=on(13,n,e,i),t.elementType=Qd,t.lanes=s,t;case Yd:return t=on(19,n,e,i),t.elementType=Yd,t.lanes=s,t;case J0:return zc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y0:o=10;break e;case X0:o=9;break e;case jp:o=11;break e;case Bp:o=14;break e;case Cr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ki(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function zc(t,e,n,r){return t=on(22,t,r,e),t.elementType=J0,t.lanes=n,t.stateNode={isHidden:!1},t}function md(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yh(0),this.expirationTimes=Yh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Im(t,e,n,r,i,s,o,a,l){return t=new GP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},om(s),t}function QP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function HE(t){if(!t)return Zr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Ft(n))return zw(t,n,e)}return e}function WE(t,e,n,r,i,s,o,a,l){return t=Im(n,r,!0,t,i,s,o,a,l),t.context=HE(null),n=t.current,r=Nt(),i=Wr(n),s=sr(r,i),s.callback=e??null,zr(n,s,i),t.current.lanes=i,tl(t,i,r),$t(t,r),t}function Hc(t,e,n,r){var i=e.current,s=Nt(),o=Wr(i);return n=HE(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(i,e,o),t!==null&&(Tn(t,i,o,s),fu(t,i,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sm(t,e){Rv(t,e),(t=t.alternate)&&Rv(t,e)}function YP(){return null}var qE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rm(t){this._internalRoot=t}Wc.prototype.render=Rm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Hc(t,e,null,null)};Wc.prototype.unmount=Rm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ui(function(){Hc(null,t,null,null)}),e[lr]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&Sw(t)}};function Am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Av(){}function XP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rc(o);s.call(u)}}var o=WE(e,r,t,0,null,!1,!1,"",Av);return t._reactRootContainer=o,t[lr]=o.current,Ia(t.nodeType===8?t.parentNode:t),Ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=rc(l);a.call(u)}}var l=Im(t,0,!1,null,null,!1,!1,"",Av);return t._reactRootContainer=l,t[lr]=l.current,Ia(t.nodeType===8?t.parentNode:t),Ui(function(){Hc(e,l,n,r)}),l}function Kc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=rc(o);a.call(l)}}Hc(e,o,t,i)}else o=XP(n,e,t,i,r);return rc(o)}ww=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(Wp(e,n|1),$t(e,ze()),!(ue&6)&&(js=ze()+500,oi()))}break;case 13:Ui(function(){var r=ur(t,1);if(r!==null){var i=Nt();Tn(r,t,1,i)}}),Sm(t,1)}};qp=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Nt();Tn(e,t,134217728,n)}Sm(t,134217728)}};Ew=function(t){if(t.tag===13){var e=Wr(t),n=ur(t,e);if(n!==null){var r=Nt();Tn(n,t,e,r)}Sm(t,e)}};Tw=function(){return fe};Iw=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};af=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vc(r);if(!i)throw Error(x(90));ew(r),Zd(r,i)}}}break;case"textarea":nw(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};uw=_m;cw=Ui;var JP={usingClientEntryPoint:!1,Events:[rl,fs,Vc,aw,lw,_m]},ko={findFiberByHostInstance:vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZP={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fw(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||YP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Oc=Ql.inject(ZP),Un=Ql}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JP;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(x(200));return QP(t,e,null,n)};Xt.createRoot=function(t,e){if(!Am(t))throw Error(x(299));var n=!1,r="",i=qE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Im(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Rm(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=fw(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Ui(t)};Xt.hydrate=function(t,e,n){if(!qc(e))throw Error(x(200));return Kc(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Am(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=qE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=WE(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,Ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wc(e)};Xt.render=function(t,e,n){if(!qc(e))throw Error(x(200));return Kc(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!qc(t))throw Error(x(40));return t._reactRootContainer?(Ui(function(){Kc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Xt.unstable_batchedUpdates=_m;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qc(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Kc(t,e,n,!1,r)};Xt.version="18.2.0-next-9e3b772b8-20220608";function KE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KE)}catch(t){console.error(t)}}KE(),W0.exports=Xt;var eC=W0.exports,Pv=eC;qd.createRoot=Pv.createRoot,qd.hydrateRoot=Pv.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Me(){return Me=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Me.apply(this,arguments)}var je;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(je||(je={}));const Cv="popstate";function tC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Da("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$i(i)}return rC(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Fi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nC(){return Math.random().toString(36).substr(2,8)}function kv(t,e){return{usr:t.state,key:t.key,idx:e}}function Da(t,e,n,r){return n===void 0&&(n=null),Me({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?gr(e):e,{state:n,key:e&&e.key||r||nC()})}function $i(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function gr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=je.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Me({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=je.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:g})}function d(E,g){a=je.Push;let p=Da(_.location,E,g);n&&n(p,E),u=c()+1;let y=kv(p,u),f=_.createHref(p);try{o.pushState(y,"",f)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(f)}s&&l&&l({action:a,location:_.location,delta:1})}function m(E,g){a=je.Replace;let p=Da(_.location,E,g);n&&n(p,E),u=c();let y=kv(p,u),f=_.createHref(p);o.replaceState(y,"",f),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:$i(E);return te(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cv,h),l=E,()=>{i.removeEventListener(Cv,h),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let g=v(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:m,go(E){return o.go(E)}};return _}var Be;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Be||(Be={}));const iC=new Set(["lazy","caseSensitive","path","id","index","children"]);function sC(t){return t.index===!0}function $f(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(te(i.index!==!0||!i.children,"Cannot specify children on an index route"),te(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),sC(i)){let l=Me({},i,e(i),{id:a});return r[a]=l,l}else{let l=Me({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=$f(i.children,e,o,r)),l}})}function ws(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?gr(e):e,i=so(r.pathname||"/",n);if(i==null)return null;let s=GE(t);aC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=gC(s[a],_C(i));return o}function oC(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function GE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),GE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:pC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of QE(s.path))i(s,o,l)}),e}function QE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=QE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function aC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lC=/^:\w+$/,uC=3,cC=2,hC=1,dC=10,fC=-2,xv=t=>t==="*";function pC(t,e){let n=t.split("/"),r=n.length;return n.some(xv)&&(r+=fC),e&&(r+=cC),n.filter(i=>!xv(i)).reduce((i,s)=>i+(lC.test(s)?uC:s===""?hC:dC),r)}function mC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:or([i,c.pathname]),pathnameBase:IC(or([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return s}function yC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[h];return m&&!v?u[d]=void 0:u[d]=wC(v||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function vC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _C(t){try{return decodeURI(t)}catch(e){return Fi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wC(t,e){try{return decodeURIComponent(t)}catch(n){return Fi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function so(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function EC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?gr(t):t;return{pathname:n?n.startsWith("/")?n:TC(n,e):e,search:SC(r),hash:RC(i)}}function TC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sl(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=gr(t):(i=Me({},t),te(!i.pathname||!i.pathname.includes("?"),yd("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),yd("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=EC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=t=>t.join("/").replace(/\/\/+/g,"/"),IC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),SC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Pm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function YE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const XE=["post","put","patch","delete"],AC=new Set(XE),PC=["get",...XE],CC=new Set(PC),kC=new Set([301,302,303,307,308]),xC=new Set([307,308]),vd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},NC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},JE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DC=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),ZE="remix-router-transitions";function OC(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;te(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;i=S=>({hasErrorBoundary:w(S)})}else i=DC;let s={},o=$f(t.routes,i,void 0,s),a,l=t.basename||"/",u=Me({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,m=null,v=null,_=t.hydrationData!=null,E=ws(o,t.history.location,l),g=null;if(E==null){let w=tn(404,{pathname:t.history.location.pathname}),{matches:S,route:C}=Uv(o);E=S,g={[C.id]:w}}let p=!E.some(w=>w.route.lazy)&&(!E.some(w=>w.route.loader)||t.hydrationData!=null),y,f={historyAction:t.history.action,location:t.history.location,matches:E,initialized:p,navigation:vd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},I=je.Pop,R=!1,T,N=!1,j=new Map,F=null,_e=!1,ot=!1,Zt=[],Kn=[],Ae=new Map,Cn=0,Bt=-1,D=new Map,$=new Set,W=new Map,ne=new Map,de=new Set,mt=new Map,He=new Map,zt=!1;function Lt(){if(c=t.history.listen(w=>{let{action:S,location:C,delta:b}=w;if(zt){zt=!1;return}Fi(He.size===0||b!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=my({currentLocation:f.location,nextLocation:C,historyAction:S});if(H&&b!=null){zt=!0,t.history.go(b*-1),Nl(H,{state:"blocked",location:C,proceed(){Nl(H,{state:"proceeding",proceed:void 0,reset:void 0,location:C}),t.history.go(b)},reset(){let q=new Map(f.blockers);q.set(H,xo),Pe({blockers:q})}});return}return di(S,C)}),n){HC(e,j);let w=()=>WC(e,j);e.addEventListener("pagehide",w),F=()=>e.removeEventListener("pagehide",w)}return f.initialized||di(je.Pop,f.location),y}function en(){c&&c(),F&&F(),h.clear(),T&&T.abort(),f.fetchers.forEach((w,S)=>xl(S)),f.blockers.forEach((w,S)=>py(S))}function Gn(w){return h.add(w),()=>h.delete(w)}function Pe(w,S){f=Me({},f,w);let C=[],b=[];u.v7_fetcherPersist&&f.fetchers.forEach((H,q)=>{H.state==="idle"&&(de.has(q)?b.push(q):C.push(q))}),h.forEach(H=>H(f,{deletedFetchers:b,unstable_viewTransitionOpts:S})),u.v7_fetcherPersist&&(C.forEach(H=>f.fetchers.delete(H)),b.forEach(H=>xl(H)))}function kn(w,S){var C,b;let H=f.actionData!=null&&f.navigation.formMethod!=null&&vn(f.navigation.formMethod)&&f.navigation.state==="loading"&&((C=w.state)==null?void 0:C._isRedirect)!==!0,q;S.actionData?Object.keys(S.actionData).length>0?q=S.actionData:q=null:H?q=f.actionData:q=null;let J=S.loaderData?Vv(f.loaderData,S.loaderData,S.matches||[],S.errors):f.loaderData,K=f.blockers;K.size>0&&(K=new Map(K),K.forEach((ke,oe)=>K.set(oe,xo)));let z=R===!0||f.navigation.formMethod!=null&&vn(f.navigation.formMethod)&&((b=w.state)==null?void 0:b._isRedirect)!==!0;a&&(o=a,a=void 0),_e||I===je.Pop||(I===je.Push?t.history.push(w,w.state):I===je.Replace&&t.history.replace(w,w.state));let ge;if(I===je.Pop){let ke=j.get(f.location.pathname);ke&&ke.has(w.pathname)?ge={currentLocation:f.location,nextLocation:w}:j.has(w.pathname)&&(ge={currentLocation:w,nextLocation:f.location})}else if(N){let ke=j.get(f.location.pathname);ke?ke.add(w.pathname):(ke=new Set([w.pathname]),j.set(f.location.pathname,ke)),ge={currentLocation:f.location,nextLocation:w}}Pe(Me({},S,{actionData:q,loaderData:J,historyAction:I,location:w,initialized:!0,navigation:vd,revalidation:"idle",restoreScrollPosition:yy(w,S.matches||f.matches),preventScrollReset:z,blockers:K}),ge),I=je.Pop,R=!1,N=!1,_e=!1,ot=!1,Zt=[],Kn=[]}async function fn(w,S){if(typeof w=="number"){t.history.go(w);return}let C=jf(f.location,f.matches,l,u.v7_prependBasename,w,S==null?void 0:S.fromRouteId,S==null?void 0:S.relative),{path:b,submission:H,error:q}=Nv(u.v7_normalizeFormMethod,!1,C,S),J=f.location,K=Da(f.location,b,S&&S.state);K=Me({},K,t.history.encodeLocation(K));let z=S&&S.replace!=null?S.replace:void 0,ge=je.Push;z===!0?ge=je.Replace:z===!1||H!=null&&vn(H.formMethod)&&H.formAction===f.location.pathname+f.location.search&&(ge=je.Replace);let ke=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,oe=my({currentLocation:J,nextLocation:K,historyAction:ge});if(oe){Nl(oe,{state:"blocked",location:K,proceed(){Nl(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),fn(w,S)},reset(){let ye=new Map(f.blockers);ye.set(oe,xo),Pe({blockers:ye})}});return}return await di(ge,K,{submission:H,pendingError:q,preventScrollReset:ke,replace:S&&S.replace,enableViewTransition:S&&S.unstable_viewTransition})}function mR(){if(Fh(),Pe({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){di(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}di(I||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function di(w,S,C){T&&T.abort(),T=null,I=w,_e=(C&&C.startUninterruptedRevalidation)===!0,SR(f.location,f.matches),R=(C&&C.preventScrollReset)===!0,N=(C&&C.enableViewTransition)===!0;let b=a||o,H=C&&C.overrideNavigation,q=ws(b,S,l);if(!q){let ye=tn(404,{pathname:S.pathname}),{matches:Ye,route:fi}=Uv(b);$h(),kn(S,{matches:Ye,loaderData:{},errors:{[fi.id]:ye}});return}if(f.initialized&&!ot&&UC(f.location,S)&&!(C&&C.submission&&vn(C.submission.formMethod))){kn(S,{matches:q});return}T=new AbortController;let J=Do(t.history,S,T.signal,C&&C.submission),K,z;if(C&&C.pendingError)z={[sa(q).route.id]:C.pendingError};else if(C&&C.submission&&vn(C.submission.formMethod)){let ye=await gR(J,S,C.submission,q,{replace:C.replace});if(ye.shortCircuited)return;K=ye.pendingActionData,z=ye.pendingActionError,H=_d(S,C.submission),J=new Request(J.url,{signal:J.signal})}let{shortCircuited:ge,loaderData:ke,errors:oe}=await yR(J,S,q,H,C&&C.submission,C&&C.fetcherSubmission,C&&C.replace,K,z);ge||(T=null,kn(S,Me({matches:q},K?{actionData:K}:{},{loaderData:ke,errors:oe})))}async function gR(w,S,C,b,H){H===void 0&&(H={}),Fh();let q=BC(S,C);Pe({navigation:q});let J,K=zf(b,S);if(!K.route.action&&!K.route.lazy)J={type:Be.error,error:tn(405,{method:w.method,pathname:S.pathname,routeId:K.route.id})};else if(J=await No("action",w,K,b,s,i,l),w.signal.aborted)return{shortCircuited:!0};if(ks(J)){let z;return H&&H.replace!=null?z=H.replace:z=J.location===f.location.pathname+f.location.search,await vo(f,J,{submission:C,replace:z}),{shortCircuited:!0}}if(oa(J)){let z=sa(b,K.route.id);return(H&&H.replace)!==!0&&(I=je.Push),{pendingActionData:{},pendingActionError:{[z.route.id]:J.error}}}if(Ei(J))throw tn(400,{type:"defer-action"});return{pendingActionData:{[K.route.id]:J.data}}}async function yR(w,S,C,b,H,q,J,K,z){let ge=b||_d(S,H),ke=H||q||jv(ge),oe=a||o,[ye,Ye]=Dv(t.history,f,C,ke,S,ot,Zt,Kn,W,$,oe,l,K,z);if($h(me=>!(C&&C.some(pn=>pn.route.id===me))||ye&&ye.some(pn=>pn.route.id===me)),Bt=++Cn,ye.length===0&&Ye.length===0){let me=dy();return kn(S,Me({matches:C,loaderData:{},errors:z||null},K?{actionData:K}:{},me?{fetchers:new Map(f.fetchers)}:{})),{shortCircuited:!0}}if(!_e){Ye.forEach(pn=>{let Ir=f.fetchers.get(pn.key),$e=Oo(void 0,Ir?Ir.data:void 0);f.fetchers.set(pn.key,$e)});let me=K||f.actionData;Pe(Me({navigation:ge},me?Object.keys(me).length===0?{actionData:null}:{actionData:me}:{},Ye.length>0?{fetchers:new Map(f.fetchers)}:{}))}Ye.forEach(me=>{Ae.has(me.key)&&Er(me.key),me.controller&&Ae.set(me.key,me.controller)});let fi=()=>Ye.forEach(me=>Er(me.key));T&&T.signal.addEventListener("abort",fi);let{results:pi,loaderResults:wo,fetcherResults:jh}=await cy(f.matches,C,ye,Ye,w);if(w.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",fi),Ye.forEach(me=>Ae.delete(me.key));let Qn=Fv(pi);if(Qn){if(Qn.idx>=ye.length){let me=Ye[Qn.idx-ye.length].key;$.add(me)}return await vo(f,Qn.result,{replace:J}),{shortCircuited:!0}}let{loaderData:Tr,errors:Dl}=Mv(f,C,ye,wo,z,Ye,jh,mt);mt.forEach((me,pn)=>{me.subscribe(Ir=>{(Ir||me.done)&&mt.delete(pn)})});let Bh=dy(),zh=fy(Bt),Hh=Bh||zh||Ye.length>0;return Me({loaderData:Tr,errors:Dl},Hh?{fetchers:new Map(f.fetchers)}:{})}function uy(w){return u.v7_fetcherPersist&&(ne.set(w,(ne.get(w)||0)+1),de.has(w)&&de.delete(w)),f.fetchers.get(w)||NC}function vR(w,S,C,b){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ae.has(w)&&Er(w);let H=a||o,q=jf(f.location,f.matches,l,u.v7_prependBasename,C,S,b==null?void 0:b.relative),J=ws(H,q,l);if(!J){_o(w,S,tn(404,{pathname:q}));return}let{path:K,submission:z,error:ge}=Nv(u.v7_normalizeFormMethod,!0,q,b);if(ge){_o(w,S,ge);return}let ke=zf(J,K);if(R=(b&&b.preventScrollReset)===!0,z&&vn(z.formMethod)){_R(w,S,K,ke,J,z);return}W.set(w,{routeId:S,path:K}),wR(w,S,K,ke,J,z)}async function _R(w,S,C,b,H,q){if(Fh(),W.delete(w),!b.route.action&&!b.route.lazy){let $e=tn(405,{method:q.formMethod,pathname:C,routeId:S});_o(w,S,$e);return}let J=f.fetchers.get(w),K=zC(q,J);f.fetchers.set(w,K),Pe({fetchers:new Map(f.fetchers)});let z=new AbortController,ge=Do(t.history,C,z.signal,q);Ae.set(w,z);let ke=Cn,oe=await No("action",ge,b,H,s,i,l);if(ge.signal.aborted){Ae.get(w)===z&&Ae.delete(w);return}if(de.has(w)){f.fetchers.set(w,Ar(void 0)),Pe({fetchers:new Map(f.fetchers)});return}if(ks(oe))if(Ae.delete(w),Bt>ke){let $e=Ar(void 0);f.fetchers.set(w,$e),Pe({fetchers:new Map(f.fetchers)});return}else{$.add(w);let $e=Oo(q);return f.fetchers.set(w,$e),Pe({fetchers:new Map(f.fetchers)}),vo(f,oe,{fetcherSubmission:q})}if(oa(oe)){_o(w,S,oe.error);return}if(Ei(oe))throw tn(400,{type:"defer-action"});let ye=f.navigation.location||f.location,Ye=Do(t.history,ye,z.signal),fi=a||o,pi=f.navigation.state!=="idle"?ws(fi,f.navigation.location,l):f.matches;te(pi,"Didn't find any matches after fetcher action");let wo=++Cn;D.set(w,wo);let jh=Oo(q,oe.data);f.fetchers.set(w,jh);let[Qn,Tr]=Dv(t.history,f,pi,q,ye,ot,Zt,Kn,W,$,fi,l,{[b.route.id]:oe.data},void 0);Tr.filter($e=>$e.key!==w).forEach($e=>{let Eo=$e.key,vy=f.fetchers.get(Eo),AR=Oo(void 0,vy?vy.data:void 0);f.fetchers.set(Eo,AR),Ae.has(Eo)&&Er(Eo),$e.controller&&Ae.set(Eo,$e.controller)}),Pe({fetchers:new Map(f.fetchers)});let Dl=()=>Tr.forEach($e=>Er($e.key));z.signal.addEventListener("abort",Dl);let{results:Bh,loaderResults:zh,fetcherResults:Hh}=await cy(f.matches,pi,Qn,Tr,Ye);if(z.signal.aborted)return;z.signal.removeEventListener("abort",Dl),D.delete(w),Ae.delete(w),Tr.forEach($e=>Ae.delete($e.key));let me=Fv(Bh);if(me){if(me.idx>=Qn.length){let $e=Tr[me.idx-Qn.length].key;$.add($e)}return vo(f,me.result)}let{loaderData:pn,errors:Ir}=Mv(f,f.matches,Qn,zh,void 0,Tr,Hh,mt);if(f.fetchers.has(w)){let $e=Ar(oe.data);f.fetchers.set(w,$e)}fy(wo),f.navigation.state==="loading"&&wo>Bt?(te(I,"Expected pending action"),T&&T.abort(),kn(f.navigation.location,{matches:pi,loaderData:pn,errors:Ir,fetchers:new Map(f.fetchers)})):(Pe({errors:Ir,loaderData:Vv(f.loaderData,pn,pi,Ir),fetchers:new Map(f.fetchers)}),ot=!1)}async function wR(w,S,C,b,H,q){let J=f.fetchers.get(w),K=Oo(q,J?J.data:void 0);f.fetchers.set(w,K),Pe({fetchers:new Map(f.fetchers)});let z=new AbortController,ge=Do(t.history,C,z.signal);Ae.set(w,z);let ke=Cn,oe=await No("loader",ge,b,H,s,i,l);if(Ei(oe)&&(oe=await n1(oe,ge.signal,!0)||oe),Ae.get(w)===z&&Ae.delete(w),ge.signal.aborted)return;if(de.has(w)){f.fetchers.set(w,Ar(void 0)),Pe({fetchers:new Map(f.fetchers)});return}if(ks(oe))if(Bt>ke){let Ye=Ar(void 0);f.fetchers.set(w,Ye),Pe({fetchers:new Map(f.fetchers)});return}else{$.add(w),await vo(f,oe);return}if(oa(oe)){_o(w,S,oe.error);return}te(!Ei(oe),"Unhandled fetcher deferred data");let ye=Ar(oe.data);f.fetchers.set(w,ye),Pe({fetchers:new Map(f.fetchers)})}async function vo(w,S,C){let{submission:b,fetcherSubmission:H,replace:q}=C===void 0?{}:C;S.revalidate&&(ot=!0);let J=Da(w.location,S.location,{_isRedirect:!0});if(te(J,"Expected a location on the redirect navigation"),n){let ye=!1;if(S.reloadDocument)ye=!0;else if(JE.test(S.location)){const Ye=t.history.createURL(S.location);ye=Ye.origin!==e.location.origin||so(Ye.pathname,l)==null}if(ye){q?e.location.replace(S.location):e.location.assign(S.location);return}}T=null;let K=q===!0?je.Replace:je.Push,{formMethod:z,formAction:ge,formEncType:ke}=w.navigation;!b&&!H&&z&&ge&&ke&&(b=jv(w.navigation));let oe=b||H;if(xC.has(S.status)&&oe&&vn(oe.formMethod))await di(K,J,{submission:Me({},oe,{formAction:S.location}),preventScrollReset:R});else{let ye=_d(J,b);await di(K,J,{overrideNavigation:ye,fetcherSubmission:H,preventScrollReset:R})}}async function cy(w,S,C,b,H){let q=await Promise.all([...C.map(z=>No("loader",H,z,S,s,i,l)),...b.map(z=>z.matches&&z.match&&z.controller?No("loader",Do(t.history,z.path,z.controller.signal),z.match,z.matches,s,i,l):{type:Be.error,error:tn(404,{pathname:z.path})})]),J=q.slice(0,C.length),K=q.slice(C.length);return await Promise.all([$v(w,C,J,J.map(()=>H.signal),!1,f.loaderData),$v(w,b.map(z=>z.match),K,b.map(z=>z.controller?z.controller.signal:null),!0)]),{results:q,loaderResults:J,fetcherResults:K}}function Fh(){ot=!0,Zt.push(...$h()),W.forEach((w,S)=>{Ae.has(S)&&(Kn.push(S),Er(S))})}function _o(w,S,C){let b=sa(f.matches,S);xl(w),Pe({errors:{[b.route.id]:C},fetchers:new Map(f.fetchers)})}function xl(w){let S=f.fetchers.get(w);Ae.has(w)&&!(S&&S.state==="loading"&&D.has(w))&&Er(w),W.delete(w),D.delete(w),$.delete(w),de.delete(w),f.fetchers.delete(w)}function ER(w){if(u.v7_fetcherPersist){let S=(ne.get(w)||0)-1;S<=0?(ne.delete(w),de.add(w)):ne.set(w,S)}else xl(w);Pe({fetchers:new Map(f.fetchers)})}function Er(w){let S=Ae.get(w);te(S,"Expected fetch controller: "+w),S.abort(),Ae.delete(w)}function hy(w){for(let S of w){let C=uy(S),b=Ar(C.data);f.fetchers.set(S,b)}}function dy(){let w=[],S=!1;for(let C of $){let b=f.fetchers.get(C);te(b,"Expected fetcher: "+C),b.state==="loading"&&($.delete(C),w.push(C),S=!0)}return hy(w),S}function fy(w){let S=[];for(let[C,b]of D)if(b<w){let H=f.fetchers.get(C);te(H,"Expected fetcher: "+C),H.state==="loading"&&(Er(C),D.delete(C),S.push(C))}return hy(S),S.length>0}function TR(w,S){let C=f.blockers.get(w)||xo;return He.get(w)!==S&&He.set(w,S),C}function py(w){f.blockers.delete(w),He.delete(w)}function Nl(w,S){let C=f.blockers.get(w)||xo;te(C.state==="unblocked"&&S.state==="blocked"||C.state==="blocked"&&S.state==="blocked"||C.state==="blocked"&&S.state==="proceeding"||C.state==="blocked"&&S.state==="unblocked"||C.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+C.state+" -> "+S.state);let b=new Map(f.blockers);b.set(w,S),Pe({blockers:b})}function my(w){let{currentLocation:S,nextLocation:C,historyAction:b}=w;if(He.size===0)return;He.size>1&&Fi(!1,"A router only supports one blocker at a time");let H=Array.from(He.entries()),[q,J]=H[H.length-1],K=f.blockers.get(q);if(!(K&&K.state==="proceeding")&&J({currentLocation:S,nextLocation:C,historyAction:b}))return q}function $h(w){let S=[];return mt.forEach((C,b)=>{(!w||w(b))&&(C.cancel(),S.push(b),mt.delete(b))}),S}function IR(w,S,C){if(d=w,v=S,m=C||null,!_&&f.navigation===vd){_=!0;let b=yy(f.location,f.matches);b!=null&&Pe({restoreScrollPosition:b})}return()=>{d=null,v=null,m=null}}function gy(w,S){return m&&m(w,S.map(b=>oC(b,f.loaderData)))||w.key}function SR(w,S){if(d&&v){let C=gy(w,S);d[C]=v()}}function yy(w,S){if(d){let C=gy(w,S),b=d[C];if(typeof b=="number")return b}return null}function RR(w){s={},a=$f(w,i,void 0,s)}return y={get basename(){return l},get state(){return f},get routes(){return o},get window(){return e},initialize:Lt,subscribe:Gn,enableScrollRestoration:IR,navigate:fn,fetch:vR,revalidate:mR,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:uy,deleteFetcher:ER,dispose:en,getBlocker:TR,deleteBlocker:py,_internalFetchControllers:Ae,_internalActiveDeferreds:mt,_internalSetRoutes:RR},y}function LC(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function jf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Gc(i||".",sl(a).map(c=>c.pathnameBase),so(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Cm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:or([n,u.pathname])),$i(u)}function Nv(t,e,n,r){if(!r||!LC(r))return{path:n};if(r.formMethod&&!jC(r.formMethod))return{path:n,error:tn(405,{method:r.formMethod})};let i=()=>({path:n,error:tn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=t1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!vn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,v)=>{let[_,E]=v;return""+m+_+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!vn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}te(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Bf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Bf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=bv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=bv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(vn(c.formMethod))return{path:n,submission:c};let h=gr(n);return e&&h.search&&Cm(h.search)&&l.append("index",""),h.search="?"+l,{path:$i(h),submission:c}}function bC(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Dv(t,e,n,r,i,s,o,a,l,u,c,h,d,m){let v=m?Object.values(m)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),E=t.createURL(i),g=m?Object.keys(m)[0]:void 0,y=bC(n,g).filter((I,R)=>{if(I.route.lazy)return!0;if(I.route.loader==null)return!1;if(MC(e.loaderData,e.matches[R],I)||o.some(j=>j===I.route.id))return!0;let T=e.matches[R],N=I;return Ov(I,Me({currentUrl:_,currentParams:T.params,nextUrl:E,nextParams:N.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===E.pathname+E.search||_.search!==E.search||e1(T,N)}))}),f=[];return l.forEach((I,R)=>{if(!n.some(_e=>_e.route.id===I.routeId))return;let T=ws(c,I.path,h);if(!T){f.push({key:R,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(R),j=zf(T,I.path),F=!1;u.has(R)?F=!1:a.includes(R)?F=!0:N&&N.state!=="idle"&&N.data===void 0?F=s:F=Ov(j,Me({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),F&&f.push({key:R,routeId:I.routeId,path:I.path,matches:T,match:j,controller:new AbortController})}),[y,f]}function MC(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function e1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Ov(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Lv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];te(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Fi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!iC.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Me({},e(i),{lazy:void 0}))}async function No(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=v=>{let _,E=new Promise((g,p)=>_=p);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),E])};try{let v=n.route[t];if(n.route.lazy)if(v){let _,E=await Promise.all([h(v).catch(g=>{_=g}),Lv(n.route,s,i)]);if(_)throw _;u=E[0]}else if(await Lv(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let _=new URL(e.url),E=_.pathname+_.search;throw tn(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:Be.data,data:void 0};else if(v)u=await h(v);else{let _=new URL(e.url),E=_.pathname+_.search;throw tn(404,{pathname:E})}te(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Be.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if($C(u)){let v=u.status;if(kC.has(v)){let g=u.headers.get("Location");if(te(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!JE.test(g))g=jf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let p=new URL(e.url),y=g.startsWith("//")?new URL(p.protocol+g):new URL(g),f=so(y.pathname,o)!=null;y.origin===p.origin&&f&&(g=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Be.redirect,status:v,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Be.error?Be.error:Be.data,response:u};let _,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?_=await u.json():_=await u.text(),l===Be.error?{type:l,error:new Pm(v,u.statusText,_),headers:u.headers}:{type:Be.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Be.error)return{type:l,error:u};if(FC(u)){var d,m;return{type:Be.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Be.data,data:u}}function Do(t,e,n,r){let i=t.createURL(t1(e)).toString(),s={signal:n};if(r&&vn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Bf(r.formData):s.body=r.formData}return new Request(i,s)}function Bf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function bv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function VC(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(te(!ks(c),"Cannot handle redirect results in processLoaderData"),oa(c)){let m=sa(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=v),s[d]=void 0,l||(l=!0,a=YE(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else Ei(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Mv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=VC(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:m}=s[c];te(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(m&&m.signal.aborted))if(oa(v)){let _=sa(t.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=Me({},u,{[_.route.id]:v.error})),t.fetchers.delete(h)}else if(ks(v))te(!1,"Unhandled fetcher revalidation redirect");else if(Ei(v))te(!1,"Unhandled fetcher deferred data");else{let _=Ar(v.data);t.fetchers.set(h,_)}}return{loaderData:l,errors:u}}function Vv(t,e,n,r){let i=Me({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function sa(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Uv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function tn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Pm(t||500,o,new Error(a),!0)}function Fv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ks(n))return{result:n,idx:e}}}function t1(t){let e=typeof t=="string"?gr(t):t;return $i(Me({},e,{hash:""}))}function UC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Ei(t){return t.type===Be.deferred}function oa(t){return t.type===Be.error}function ks(t){return(t&&t.type)===Be.redirect}function FC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function $C(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function jC(t){return CC.has(t.toLowerCase())}function vn(t){return AC.has(t.toLowerCase())}async function $v(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!e1(u,l)&&(s&&s[l.route.id])!==void 0;if(Ei(a)&&(i||c)){let h=r[o];te(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await n1(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function n1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Be.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Be.error,error:i}}return{type:Be.data,data:t.deferredData.data}}}function Cm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function zf(t,e){let n=typeof e=="string"?gr(e).search:e.search;if(t[t.length-1].route.index&&Cm(n||""))return t[t.length-1];let r=sl(t);return r[r.length-1]}function jv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function _d(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function BC(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Oo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function zC(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Ar(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function HC(t,e){try{let n=t.sessionStorage.getItem(ZE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function WC(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(ZE,JSON.stringify(n))}catch(r){Fi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ic.apply(this,arguments)}const Qc=P.createContext(null),r1=P.createContext(null),oo=P.createContext(null),Yc=P.createContext(null),yr=P.createContext({outlet:null,matches:[],isDataRoute:!1}),i1=P.createContext(null);function qC(t,e){let{relative:n}=e===void 0?{}:e;ao()||te(!1);let{basename:r,navigator:i}=P.useContext(oo),{hash:s,pathname:o,search:a}=o1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:or([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ao(){return P.useContext(Yc)!=null}function ol(){return ao()||te(!1),P.useContext(Yc).location}function s1(t){P.useContext(oo).static||P.useLayoutEffect(t)}function lo(){let{isDataRoute:t}=P.useContext(yr);return t?ok():KC()}function KC(){ao()||te(!1);let t=P.useContext(Qc),{basename:e,navigator:n}=P.useContext(oo),{matches:r}=P.useContext(yr),{pathname:i}=ol(),s=JSON.stringify(sl(r).map(l=>l.pathnameBase)),o=P.useRef(!1);return s1(()=>{o.current=!0}),P.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Gc(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:or([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const GC=P.createContext(null);function QC(t){let e=P.useContext(yr).outlet;return e&&P.createElement(GC.Provider,{value:t},e)}function o1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=P.useContext(yr),{pathname:i}=ol(),s=JSON.stringify(sl(r).map(o=>o.pathnameBase));return P.useMemo(()=>Gc(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function YC(t,e,n){ao()||te(!1);let{navigator:r}=P.useContext(oo),{matches:i}=P.useContext(yr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ol(),u;if(e){var c;let _=typeof e=="string"?gr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||te(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=ws(t,{pathname:d}),v=tk(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:or([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:or([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?P.createElement(Yc.Provider,{value:{location:ic({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:je.Pop}},v):v}function XC(){let t=sk(),e=YE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,s)}const JC=P.createElement(XC,null);class ZC extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(yr.Provider,{value:this.props.routeContext},P.createElement(i1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ek(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(Qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(yr.Provider,{value:e},r)}function tk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||JC);let d=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:l.route.Component?v=P.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,P.createElement(ek,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?P.createElement(ZC,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var a1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(a1||{}),sc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sc||{});function nk(t){let e=P.useContext(Qc);return e||te(!1),e}function rk(t){let e=P.useContext(r1);return e||te(!1),e}function ik(t){let e=P.useContext(yr);return e||te(!1),e}function l1(t){let e=ik(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function sk(){var t;let e=P.useContext(i1),n=rk(sc.UseRouteError),r=l1(sc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function ok(){let{router:t}=nk(a1.UseNavigateStable),e=l1(sc.UseNavigateStable),n=P.useRef(!1);return s1(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ic({fromRouteId:e},s)))},[t,e])}function ak(t){let{to:e,replace:n,state:r,relative:i}=t;ao()||te(!1);let{matches:s}=P.useContext(yr),{pathname:o}=ol(),a=lo(),l=Gc(e,sl(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return P.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function lk(t){return QC(t.context)}function uk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=je.Pop,navigator:s,static:o=!1}=t;ao()&&te(!1);let a=e.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=gr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=P.useMemo(()=>{let _=so(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:P.createElement(oo.Provider,{value:l},P.createElement(Yc.Provider,{children:n,value:v}))}new Promise(()=>{});function ck(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:P.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:P.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(this,arguments)}function hk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fk(t,e){return t.button===0&&(!e||e==="_self")&&!dk(t)}const pk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function mk(t,e){return OC({basename:e==null?void 0:e.basename,future:Oa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:tC({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||gk(),routes:t,mapRouteProperties:ck,window:e==null?void 0:e.window}).initialize()}function gk(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Oa({},e,{errors:yk(e.errors)})),e}function yk(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Pm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const vk=P.createContext({isTransitioning:!1}),_k=P.createContext(new Map),wk="startTransition",Bv=HR[wk];function Ek(t){Bv?Bv(t):t()}let Tk=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function Ik(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=P.useState(n.state),[o,a]=P.useState(),[l,u]=P.useState({isTransitioning:!1}),[c,h]=P.useState(),[d,m]=P.useState(),[v,_]=P.useState(),E=P.useRef(new Map),{v7_startTransition:g}=r||{},p=P.useCallback(T=>{g?Ek(T):T()},[g]),y=P.useCallback((T,N)=>{let{deletedFetchers:j,unstable_viewTransitionOpts:F}=N;j.forEach(_e=>E.current.delete(_e)),T.fetchers.forEach((_e,ot)=>{_e.data!==void 0&&E.current.set(ot,_e.data)}),!F||n.window==null||typeof n.window.document.startViewTransition!="function"?p(()=>s(T)):d&&c?(c.resolve(),d.skipTransition(),_({state:T,currentLocation:F.currentLocation,nextLocation:F.nextLocation})):(a(T),u({isTransitioning:!0,currentLocation:F.currentLocation,nextLocation:F.nextLocation}))},[n.window,d,c,E,p]);P.useLayoutEffect(()=>n.subscribe(y),[n,y]),P.useEffect(()=>{l.isTransitioning&&h(new Tk)},[l.isTransitioning]),P.useEffect(()=>{if(c&&o&&n.window){let T=o,N=c.promise,j=n.window.document.startViewTransition(async()=>{p(()=>s(T)),await N});j.finished.finally(()=>{h(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(j)}},[p,o,c,n.window]),P.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,d,i.location,o]),P.useEffect(()=>{!l.isTransitioning&&v&&(a(v.state),u({isTransitioning:!0,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),_(void 0))},[l.isTransitioning,v]);let f=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:T=>n.navigate(T),push:(T,N,j)=>n.navigate(T,{state:N,preventScrollReset:j==null?void 0:j.preventScrollReset}),replace:(T,N,j)=>n.navigate(T,{replace:!0,state:N,preventScrollReset:j==null?void 0:j.preventScrollReset})}),[n]),I=n.basename||"/",R=P.useMemo(()=>({router:n,navigator:f,static:!1,basename:I}),[n,f,I]);return P.createElement(P.Fragment,null,P.createElement(Qc.Provider,{value:R},P.createElement(r1.Provider,{value:i},P.createElement(_k.Provider,{value:E.current},P.createElement(vk.Provider,{value:l},P.createElement(uk,{basename:I,location:i.location,navigationType:i.historyAction,navigator:f},i.initialized?P.createElement(Sk,{routes:n.routes,state:i}):e))))),null)}function Sk(t){let{routes:e,state:n}=t;return YC(e,void 0,n)}const Rk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ak=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wu=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=hk(e,pk),{basename:m}=P.useContext(oo),v,_=!1;if(typeof u=="string"&&Ak.test(u)&&(v=u,Rk))try{let y=new URL(window.location.href),f=u.startsWith("//")?new URL(y.protocol+u):new URL(u),I=so(f.pathname,m);f.origin===y.origin&&I!=null?u=I+f.search+f.hash:_=!0}catch{}let E=qC(u,{relative:i}),g=Pk(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(y){r&&r(y),y.defaultPrevented||g(y)}return P.createElement("a",Oa({},d,{href:v||E,onClick:_||s?r:p,ref:n,target:l}))});var zv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zv||(zv={}));var Hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hv||(Hv={}));function Pk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=lo(),u=ol(),c=o1(t,{relative:o});return P.useCallback(h=>{if(fk(h,n)){h.preventDefault();let d=r!==void 0?r:$i(u)===$i(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var Tt=function(){return Tt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Tt.apply(this,arguments)};function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function La(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ee="-ms-",aa="-moz-",he="-webkit-",u1="comm",Xc="rule",xm="decl",Ck="@import",c1="@keyframes",kk="@layer",xk=Math.abs,Nm=String.fromCharCode,Hf=Object.assign;function Nk(t,e){return nt(t,0)^45?(((e<<2^nt(t,0))<<2^nt(t,1))<<2^nt(t,2))<<2^nt(t,3):0}function h1(t){return t.trim()}function Xn(t,e){return(t=e.exec(t))?t[0]:t}function ee(t,e,n){return t.replace(e,n)}function Eu(t,e){return t.indexOf(e)}function nt(t,e){return t.charCodeAt(e)|0}function Bs(t,e,n){return t.slice(e,n)}function Dn(t){return t.length}function d1(t){return t.length}function Bo(t,e){return e.push(t),t}function Dk(t,e){return t.map(e).join("")}function Wv(t,e){return t.filter(function(n){return!Xn(n,e)})}var Jc=1,zs=1,f1=0,cn=0,Ke=0,uo="";function Zc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Jc,column:zs,length:o,return:"",siblings:a}}function Pr(t,e){return Hf(Zc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function rs(t){for(;t.root;)t=Pr(t.root,{children:[t]});Bo(t,t.siblings)}function Ok(){return Ke}function Lk(){return Ke=cn>0?nt(uo,--cn):0,zs--,Ke===10&&(zs=1,Jc--),Ke}function In(){return Ke=cn<f1?nt(uo,cn++):0,zs++,Ke===10&&(zs=1,Jc++),Ke}function xi(){return nt(uo,cn)}function Tu(){return cn}function eh(t,e){return Bs(uo,t,e)}function Wf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bk(t){return Jc=zs=1,f1=Dn(uo=t),cn=0,[]}function Mk(t){return uo="",t}function wd(t){return h1(eh(cn-1,qf(t===91?t+2:t===40?t+1:t)))}function Vk(t){for(;(Ke=xi())&&Ke<33;)In();return Wf(t)>2||Wf(Ke)>3?"":" "}function Uk(t,e){for(;--e&&In()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return eh(t,Tu()+(e<6&&xi()==32&&In()==32))}function qf(t){for(;In();)switch(Ke){case t:return cn;case 34:case 39:t!==34&&t!==39&&qf(Ke);break;case 40:t===41&&qf(t);break;case 92:In();break}return cn}function Fk(t,e){for(;In()&&t+Ke!==47+10;)if(t+Ke===42+42&&xi()===47)break;return"/*"+eh(e,cn-1)+"*"+Nm(t===47?t:In())}function $k(t){for(;!Wf(xi());)In();return eh(t,cn)}function jk(t){return Mk(Iu("",null,null,null,[""],t=bk(t),0,[0],t))}function Iu(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,m=0,v=0,_=1,E=1,g=1,p=0,y="",f=i,I=s,R=r,T=y;E;)switch(v=p,p=In()){case 40:if(v!=108&&nt(T,h-1)==58){Eu(T+=ee(wd(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:T+=wd(p);break;case 9:case 10:case 13:case 32:T+=Vk(v);break;case 92:T+=Uk(Tu()-1,7);continue;case 47:switch(xi()){case 42:case 47:Bo(Bk(Fk(In(),Tu()),e,n,l),l);break;default:T+="/"}break;case 123*_:a[u++]=Dn(T)*g;case 125*_:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+c:g==-1&&(T=ee(T,/\f/g,"")),m>0&&Dn(T)-h&&Bo(m>32?Kv(T+";",r,n,h-1,l):Kv(ee(T," ","")+";",r,n,h-2,l),l);break;case 59:T+=";";default:if(Bo(R=qv(T,e,n,u,c,i,a,y,f=[],I=[],h,s),s),p===123)if(c===0)Iu(T,e,R,R,f,s,h,a,I);else switch(d===99&&nt(T,3)===110?100:d){case 100:case 108:case 109:case 115:Iu(t,R,R,r&&Bo(qv(t,R,R,0,0,i,a,y,i,f=[],h,I),I),i,I,h,a,r?f:I);break;default:Iu(T,R,R,R,[""],I,0,a,I)}}u=c=m=0,_=g=1,y=T="",h=o;break;case 58:h=1+Dn(T),m=v;default:if(_<1){if(p==123)--_;else if(p==125&&_++==0&&Lk()==125)continue}switch(T+=Nm(p),p*_){case 38:g=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(Dn(T)-1)*g,g=1;break;case 64:xi()===45&&(T+=wd(In())),d=xi(),c=h=Dn(y=T+=$k(Tu())),p++;break;case 45:v===45&&Dn(T)==2&&(_=0)}}return s}function qv(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,m=i===0?s:[""],v=d1(m),_=0,E=0,g=0;_<r;++_)for(var p=0,y=Bs(t,d+1,d=xk(E=o[_])),f=t;p<v;++p)(f=h1(E>0?m[p]+" "+y:ee(y,/&\f/g,m[p])))&&(l[g++]=f);return Zc(t,e,n,i===0?Xc:a,l,u,c,h)}function Bk(t,e,n,r){return Zc(t,e,n,u1,Nm(Ok()),Bs(t,2,-2),0,r)}function Kv(t,e,n,r,i){return Zc(t,e,n,xm,Bs(t,0,r),Bs(t,r+1,-1),r,i)}function p1(t,e,n){switch(Nk(t,e)){case 5103:return he+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+t+t;case 4789:return aa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return he+t+aa+t+Ee+t+t;case 5936:switch(nt(t,e+11)){case 114:return he+t+Ee+ee(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return he+t+Ee+ee(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return he+t+Ee+ee(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return he+t+Ee+t+t;case 6165:return he+t+Ee+"flex-"+t+t;case 5187:return he+t+ee(t,/(\w+).+(:[^]+)/,he+"box-$1$2"+Ee+"flex-$1$2")+t;case 5443:return he+t+Ee+"flex-item-"+ee(t,/flex-|-self/g,"")+(Xn(t,/flex-|baseline/)?"":Ee+"grid-row-"+ee(t,/flex-|-self/g,""))+t;case 4675:return he+t+Ee+"flex-line-pack"+ee(t,/align-content|flex-|-self/g,"")+t;case 5548:return he+t+Ee+ee(t,"shrink","negative")+t;case 5292:return he+t+Ee+ee(t,"basis","preferred-size")+t;case 6060:return he+"box-"+ee(t,"-grow","")+he+t+Ee+ee(t,"grow","positive")+t;case 4554:return he+ee(t,/([^-])(transform)/g,"$1"+he+"$2")+t;case 6187:return ee(ee(ee(t,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),t,"")+t;case 5495:case 3959:return ee(t,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return ee(ee(t,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+t+t;case 4200:if(!Xn(t,/flex-|baseline/))return Ee+"grid-column-align"+Bs(t,e)+t;break;case 2592:case 3360:return Ee+ee(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Xn(r.props,/grid-\w+-end/)})?~Eu(t+(n=n[e].value),"span")?t:Ee+ee(t,"-start","")+t+Ee+"grid-row-span:"+(~Eu(n,"span")?Xn(n,/\d+/):+Xn(n,/\d+/)-+Xn(t,/\d+/))+";":Ee+ee(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Xn(r.props,/grid-\w+-start/)})?t:Ee+ee(ee(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ee(t,/(.+)-inline(.+)/,he+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(t)-1-e>6)switch(nt(t,e+1)){case 109:if(nt(t,e+4)!==45)break;case 102:return ee(t,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+aa+(nt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Eu(t,"stretch")?p1(ee(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ee(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return Ee+i+":"+s+u+(o?Ee+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(nt(t,e+6)===121)return ee(t,":",":"+he)+t;break;case 6444:switch(nt(t,nt(t,14)===45?18:11)){case 120:return ee(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(nt(t,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Ee+"$2box$3")+t;case 100:return ee(t,":",":"+Ee)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(t,"scroll-","scroll-snap-")+t}return t}function oc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function zk(t,e,n,r){switch(t.type){case kk:if(t.children.length)break;case Ck:case xm:return t.return=t.return||t.value;case u1:return"";case c1:return t.return=t.value+"{"+oc(t.children,r)+"}";case Xc:if(!Dn(t.value=t.props.join(",")))return""}return Dn(n=oc(t.children,r))?t.return=t.value+"{"+n+"}":""}function Hk(t){var e=d1(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Wk(t){return function(e){e.root||(e=e.return)&&t(e)}}function qk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case xm:t.return=p1(t.value,t.length,n);return;case c1:return oc([Pr(t,{value:ee(t.value,"@","@"+he)})],r);case Xc:if(t.length)return Dk(n=t.props,function(i){switch(Xn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rs(Pr(t,{props:[ee(i,/:(read-\w+)/,":"+aa+"$1")]})),rs(Pr(t,{props:[i]})),Hf(t,{props:Wv(n,r)});break;case"::placeholder":rs(Pr(t,{props:[ee(i,/:(plac\w+)/,":"+he+"input-$1")]})),rs(Pr(t,{props:[ee(i,/:(plac\w+)/,":"+aa+"$1")]})),rs(Pr(t,{props:[ee(i,/:(plac\w+)/,Ee+"input-$1")]})),rs(Pr(t,{props:[i]})),Hf(t,{props:Wv(n,r)});break}return""})}}var Kk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Hs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Dm=typeof window<"u"&&"HTMLElement"in window,Gk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Qk={},th=Object.freeze([]),Ws=Object.freeze({});function m1(t,e,n){return n===void 0&&(n=Ws),t.theme!==n.theme&&t.theme||e||n.theme}var g1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xk=/(^-|-$)/g;function Gv(t){return t.replace(Yk,"-").replace(Xk,"")}var Jk=/(a)(d)/gi,Qv=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Qv(e%52)+n;return(Qv(e%52)+n).replace(Jk,"$1-$2")}var Ed,Es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},y1=function(t){return Es(5381,t)};function v1(t){return Kf(y1(t)>>>0)}function Zk(t){return t.displayName||t.name||"Component"}function Td(t){return typeof t=="string"&&!0}var _1=typeof Symbol=="function"&&Symbol.for,w1=_1?Symbol.for("react.memo"):60115,ex=_1?Symbol.for("react.forward_ref"):60112,tx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},E1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rx=((Ed={})[ex]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ed[w1]=E1,Ed);function Yv(t){return("type"in(e=t)&&e.type.$$typeof)===w1?E1:"$$typeof"in t?rx[t.$$typeof]:tx;var e}var ix=Object.defineProperty,sx=Object.getOwnPropertyNames,Xv=Object.getOwnPropertySymbols,ox=Object.getOwnPropertyDescriptor,ax=Object.getPrototypeOf,Jv=Object.prototype;function T1(t,e,n){if(typeof e!="string"){if(Jv){var r=ax(e);r&&r!==Jv&&T1(t,r,n)}var i=sx(e);Xv&&(i=i.concat(Xv(e)));for(var s=Yv(t),o=Yv(e),a=0;a<i.length;++a){var l=i[a];if(!(l in nx||n&&n[l]||o&&l in o||s&&l in s)){var u=ox(e,l);try{ix(t,l,u)}catch{}}}}return t}function qs(t){return typeof t=="function"}function Om(t){return typeof t=="object"&&"styledComponentId"in t}function Ti(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Gf(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ba(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Qf(t,e,n){if(n===void 0&&(n=!1),!n&&!ba(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Qf(t[r],e[r]);else if(ba(e))for(var r in e)t[r]=Qf(t[r],e[r]);return t}function Lm(t,e){Object.defineProperty(t,"toString",{value:e})}function al(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var lx=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw al(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Su=new Map,ac=new Map,Ru=1,Yl=function(t){if(Su.has(t))return Su.get(t);for(;ac.has(Ru);)Ru++;var e=Ru++;return Su.set(t,e),ac.set(e,t),e},ux=function(t,e){Ru=e+1,Su.set(t,e),ac.set(e,t)},cx="style[".concat(Hs,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),hx=new RegExp("^".concat(Hs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dx=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},fx=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(hx);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(ux(c,u),dx(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function px(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var I1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Hs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Hs,"active"),r.setAttribute("data-styled-version","6.1.1");var o=px();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},mx=function(){function t(e){this.element=I1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw al(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),gx=function(){function t(e){this.element=I1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),yx=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Zv=Dm,vx={isServer:!Dm,useCSSOMInjection:!Gk},lc=function(){function t(e,n,r){e===void 0&&(e=Ws),n===void 0&&(n={});var i=this;this.options=Tt(Tt({},vx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Dm&&Zv&&(Zv=!1,function(s){for(var o=document.querySelectorAll(cx),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Hs)!=="active"&&(fx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Lm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(g){return ac.get(g)}(h);if(d===void 0)return"continue";var m=s.names.get(d),v=o.getGroup(h);if(m===void 0||v.length===0)return"continue";var _="".concat(Hs,".g").concat(h,'[id="').concat(d,'"]'),E="";m!==void 0&&m.forEach(function(g){g.length>0&&(E+="".concat(g,","))}),l+="".concat(v).concat(_,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Yl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Tt(Tt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new yx(i):r?new mx(i):new gx(i)}(this.options),new lx(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Yl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Yl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Yl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),_x=/&/g,wx=/^\s*\/\/.*$/gm;function S1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=S1(n.children,e)),n})}function Ex(t){var e,n,r,i=t===void 0?Ws:t,s=i.options,o=s===void 0?Ws:s,a=i.plugins,l=a===void 0?th:a,u=function(d,m,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Xc&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(_x,n).replace(r,u))}),o.prefix&&c.push(qk),c.push(zk);var h=function(d,m,v,_){m===void 0&&(m=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var E=d.replace(wx,""),g=jk(v||m?"".concat(v," ").concat(m," { ").concat(E," }"):E);o.namespace&&(g=S1(g,o.namespace));var p=[];return oc(g,Hk(c.concat(Wk(function(y){return p.push(y)})))),p};return h.hash=l.length?l.reduce(function(d,m){return m.name||al(15),Es(d,m.name)},5381).toString():"",h}var Tx=new lc,Yf=Ex(),R1=wn.createContext({shouldForwardProp:void 0,styleSheet:Tx,stylis:Yf});R1.Consumer;wn.createContext(void 0);function Xf(){return P.useContext(R1)}var Ix=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Yf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Lm(this,function(){throw al(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Yf),this.name+e.hash},t}(),Sx=function(t){return t>="A"&&t<="Z"};function e_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Sx(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var A1=function(t){return t==null||t===!1||t===""},P1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!A1(s)&&(Array.isArray(s)&&s.isCss||qs(s)?r.push("".concat(e_(i),":"),s,";"):ba(s)?r.push.apply(r,La(La(["".concat(i," {")],P1(s),!1),["}"],!1)):r.push("".concat(e_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Kk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Kr(t,e,n,r){if(A1(t))return[];if(Om(t))return[".".concat(t.styledComponentId)];if(qs(t)){if(!qs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Kr(i,e,n,r)}var s;return t instanceof Ix?n?(t.inject(n,r),[t.getName(r)]):[t]:ba(t)?P1(t):Array.isArray(t)?Array.prototype.concat.apply(th,t.map(function(o){return Kr(o,e,n,r)})):[t.toString()]}function C1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(qs(n)&&!Om(n))return!1}return!0}var Rx=y1("6.1.1"),Ax=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&C1(e),this.componentId=n,this.baseHash=Es(Rx,n),this.baseStyle=r,lc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ti(i,this.staticRulesId);else{var s=Gf(Kr(this.rules,e,n,r)),o=Kf(Es(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ti(i,o),this.staticRulesId=o}else{for(var l=Es(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=Gf(Kr(h,e,n,r));l=Es(l,d+c),u+=d}}if(u){var m=Kf(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=Ti(i,m)}}return i},t}(),bm=wn.createContext(void 0);bm.Consumer;var Id={};function Px(t,e,n){var r=Om(t),i=t,s=!Td(t),o=e.attrs,a=o===void 0?th:o,l=e.componentId,u=l===void 0?function(f,I){var R=typeof f!="string"?"sc":Gv(f);Id[R]=(Id[R]||0)+1;var T="".concat(R,"-").concat(v1("6.1.1"+R+Id[R]));return I?"".concat(I,"-").concat(T):T}(e.displayName,e.parentComponentId):l,c=e.displayName,h=c===void 0?function(f){return Td(f)?"styled.".concat(f):"Styled(".concat(Zk(f),")")}(t):c,d=e.displayName&&e.componentId?"".concat(Gv(e.displayName),"-").concat(e.componentId):e.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;v=function(f,I){return _(f,I)&&E(f,I)}}else v=_}var g=new Ax(n,d,r?i.componentStyle:void 0);function p(f,I){return function(R,T,N){var j=R.attrs,F=R.componentStyle,_e=R.defaultProps,ot=R.foldedComponentIds,Zt=R.styledComponentId,Kn=R.target,Ae=wn.useContext(bm),Cn=Xf(),Bt=R.shouldForwardProp||Cn.shouldForwardProp,D=function(He,zt,Lt){for(var en,Gn=Tt(Tt({},zt),{className:void 0,theme:Lt}),Pe=0;Pe<He.length;Pe+=1){var kn=qs(en=He[Pe])?en(Gn):en;for(var fn in kn)Gn[fn]=fn==="className"?Ti(Gn[fn],kn[fn]):fn==="style"?Tt(Tt({},Gn[fn]),kn[fn]):kn[fn]}return zt.className&&(Gn.className=Ti(Gn.className,zt.className)),Gn}(j,T,m1(T,Ae,_e)||Ws),$=D.as||Kn,W={};for(var ne in D)D[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"||(ne==="forwardedAs"?W.as=D.forwardedAs:Bt&&!Bt(ne,$)||(W[ne]=D[ne]));var de=function(He,zt){var Lt=Xf(),en=He.generateAndInjectStyles(zt,Lt.styleSheet,Lt.stylis);return en}(F,D),mt=Ti(ot,Zt);return de&&(mt+=" "+de),D.className&&(mt+=" "+D.className),W[Td($)&&!g1.has($)?"class":"className"]=mt,W.ref=N,P.createElement($,W)}(y,f,I)}p.displayName=h;var y=wn.forwardRef(p);return y.attrs=m,y.componentStyle=g,y.displayName=h,y.shouldForwardProp=v,y.foldedComponentIds=r?Ti(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=d,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?function(I){for(var R=[],T=1;T<arguments.length;T++)R[T-1]=arguments[T];for(var N=0,j=R;N<j.length;N++)Qf(I,j[N],!0);return I}({},i.defaultProps,f):f}}),Lm(y,function(){return".".concat(y.styledComponentId)}),s&&T1(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function t_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var n_=function(t){return Object.assign(t,{isCss:!0})};function Mm(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(qs(t)||ba(t)){var r=t;return n_(Kr(t_(th,La([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Kr(i):n_(Kr(t_(i,e)))}function Jf(t,e,n){if(n===void 0&&(n=Ws),!e)throw al(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Mm.apply(void 0,La([i],s,!1)))};return r.attrs=function(i){return Jf(t,e,Tt(Tt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jf(t,e,Tt(Tt({},n),i))},r}var k1=function(t){return Jf(Px,t)},le=k1;g1.forEach(function(t){le[t]=k1(t)});var Cx=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=C1(e),lc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Gf(Kr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&lc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function x1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Mm.apply(void 0,La([t],e,!1)),i="sc-global-".concat(v1(JSON.stringify(r))),s=new Cx(r,i),o=function(l){var u=Xf(),c=wn.useContext(bm),h=wn.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),wn.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,Qk,c,d);else{var m=Tt(Tt({},u),{theme:m1(u,h,o.defaultProps)});s.renderStyles(l,m,c,d)}}return wn.memo(o)}var N1=globalThis&&globalThis.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},D1=Mm(r_||(r_=N1([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));x1(i_||(i_=N1(["",""],["",""])),D1);var r_,i_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},L1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new xx;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nx=function(t){const e=O1(t);return L1.encodeByteArray(e,!0)},uc=function(t){return Nx(t).replace(/\./g,"")},b1=function(t){try{return L1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=()=>Dx().__FIREBASE_DEFAULTS__,Lx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&b1(t[1]);return e&&JSON.parse(e)},nh=()=>{try{return Ox()||Lx()||bx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M1=t=>{var e,n;return(n=(e=nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V1=t=>{const e=M1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},U1=()=>{var t;return(t=nh())===null||t===void 0?void 0:t.config},F1=t=>{var e;return(e=nh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[uc(JSON.stringify(n)),uc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Ux(){var t;const e=(t=nh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $x(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jx(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bx(){try{return typeof indexedDB=="object"}catch{return!1}}function zx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hx,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ll.prototype.create)}}class ll{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,r)}}function Wx(t,e){return t.replace(qx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qx=/\{\$([^}]+)}/g;function Kx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(s_(s)&&s_(o)){if(!cc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function s_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Gx(t,e){const n=new Qx(t,e);return n.subscribe.bind(n)}class Qx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zx(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jx(t){return t===yi?void 0:t}function Zx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const tN={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},nN=se.INFO,rN={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},iN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vm{constructor(e){this.name=e,this._logLevel=nN,this._logHandler=iN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const sN=(t,e)=>e.some(n=>t instanceof n);let o_,a_;function oN(){return o_||(o_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aN(){return a_||(a_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j1=new WeakMap,Zf=new WeakMap,B1=new WeakMap,Rd=new WeakMap,Um=new WeakMap;function lN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j1.set(n,t)}).catch(()=>{}),Um.set(e,t),e}function uN(t){if(Zf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zf.set(t,e)}let ep={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cN(t){ep=t(ep)}function hN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ad(this),e,...n);return B1.set(r,e.sort?e.sort():[e]),Gr(r)}:aN().includes(t)?function(...e){return t.apply(Ad(this),e),Gr(j1.get(this))}:function(...e){return Gr(t.apply(Ad(this),e))}}function dN(t){return typeof t=="function"?hN(t):(t instanceof IDBTransaction&&uN(t),sN(t,oN())?new Proxy(t,ep):t)}function Gr(t){if(t instanceof IDBRequest)return lN(t);if(Rd.has(t))return Rd.get(t);const e=dN(t);return e!==t&&(Rd.set(t,e),Um.set(e,t)),e}const Ad=t=>Um.get(t);function fN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gr(o.result),l.oldVersion,l.newVersion,Gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pN=["get","getKey","getAll","getAllKeys","count"],mN=["put","add","delete","clear"],Pd=new Map;function l_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pd.set(e,s),s}cN(t=>({...t,get:(e,n,r)=>l_(e,n)||t.get(e,n,r),has:(e,n)=>!!l_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tp="@firebase/app",u_="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Vm("@firebase/app"),vN="@firebase/app-compat",_N="@firebase/analytics-compat",wN="@firebase/analytics",EN="@firebase/app-check-compat",TN="@firebase/app-check",IN="@firebase/auth",SN="@firebase/auth-compat",RN="@firebase/database",AN="@firebase/database-compat",PN="@firebase/functions",CN="@firebase/functions-compat",kN="@firebase/installations",xN="@firebase/installations-compat",NN="@firebase/messaging",DN="@firebase/messaging-compat",ON="@firebase/performance",LN="@firebase/performance-compat",bN="@firebase/remote-config",MN="@firebase/remote-config-compat",VN="@firebase/storage",UN="@firebase/storage-compat",FN="@firebase/firestore",$N="@firebase/firestore-compat",jN="firebase",BN="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="[DEFAULT]",zN={[tp]:"fire-core",[vN]:"fire-core-compat",[wN]:"fire-analytics",[_N]:"fire-analytics-compat",[TN]:"fire-app-check",[EN]:"fire-app-check-compat",[IN]:"fire-auth",[SN]:"fire-auth-compat",[RN]:"fire-rtdb",[AN]:"fire-rtdb-compat",[PN]:"fire-fn",[CN]:"fire-fn-compat",[kN]:"fire-iid",[xN]:"fire-iid-compat",[NN]:"fire-fcm",[DN]:"fire-fcm-compat",[ON]:"fire-perf",[LN]:"fire-perf-compat",[bN]:"fire-rc",[MN]:"fire-rc-compat",[VN]:"fire-gcs",[UN]:"fire-gcs-compat",[FN]:"fire-fst",[$N]:"fire-fst-compat","fire-js":"fire-js",[jN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map,rp=new Map;function HN(t,e){try{t.container.addComponent(e)}catch(n){ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bi(t){const e=t.name;if(rp.has(e))return ji.debug(`There were multiple attempts to register component ${e}.`),!1;rp.set(e,t);for(const n of hc.values())HN(n,t);return!0}function rh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qr=new ll("app","Firebase",WN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=BN;function z1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:np,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qr.create("bad-app-name",{appName:String(i)});if(n||(n=U1()),!n)throw Qr.create("no-options");const s=hc.get(i);if(s){if(cc(n,s.options)&&cc(r,s.config))return s;throw Qr.create("duplicate-app",{appName:i})}const o=new eN(i);for(const l of rp.values())o.addComponent(l);const a=new qN(n,r,o);return hc.set(i,a),a}function Fm(t=np){const e=hc.get(t);if(!e&&t===np&&U1())return z1();if(!e)throw Qr.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let i=(r=zN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ji.warn(a.join(" "));return}Bi(new ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="firebase-heartbeat-database",GN=1,Ma="firebase-heartbeat-store";let Cd=null;function H1(){return Cd||(Cd=fN(KN,GN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ma)}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),Cd}async function QN(t){try{return await(await H1()).transaction(Ma).objectStore(Ma).get(W1(t))}catch(e){if(e instanceof dn)ji.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ji.warn(n.message)}}}async function c_(t,e){try{const r=(await H1()).transaction(Ma,"readwrite");await r.objectStore(Ma).put(e,W1(t)),await r.done}catch(n){if(n instanceof dn)ji.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ji.warn(r.message)}}}function W1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=1024,XN=30*24*60*60*1e3;class JN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=h_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=XN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=h_(),{heartbeatsToSend:r,unsentEntries:i}=ZN(this._heartbeatsCache.heartbeats),s=uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function h_(){return new Date().toISOString().substring(0,10)}function ZN(t,e=YN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),d_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),d_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bx()?zx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return c_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return c_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function d_(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){Bi(new ei("platform-logger",e=>new gN(e),"PRIVATE")),Bi(new ei("heartbeat",e=>new JN(e),"PRIVATE")),$n(tp,u_,t),$n(tp,u_,"esm2017"),$n("fire-js","")}tD("");var nD="firebase",rD="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(nD,rD,"app");function q1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iD=q1,K1=new ll("auth","Firebase",q1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Vm("@firebase/auth");function sD(t,...e){dc.logLevel<=se.WARN&&dc.warn(`Auth (${Ji}): ${t}`,...e)}function Au(t,...e){dc.logLevel<=se.ERROR&&dc.error(`Auth (${Ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw $m(t,...e)}function jn(t,...e){return $m(t,...e)}function G1(t,e,n){const r=Object.assign(Object.assign({},iD()),{[e]:n});return new ll("auth","Firebase",r).create(e,{appName:t.name})}function oD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),G1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $m(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return K1.create(t,...e)}function G(t,e,...n){if(!t)throw $m(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Au(e),new Error(e)}function hr(t,e){t||nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aD(){return f_()==="http:"||f_()==="https:"}function f_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aD()||Fx()||"connection"in navigator)?navigator.onLine:!0}function uD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=Vx()||$x()}get(){return lD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=new cl(3e4,6e4);function ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vr(t,e,n,r,i={}){return Y1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ul(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Q1.fetch()(X1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Y1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cD),e);try{const i=new fD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw G1(t,c,u);hn(t,c)}}catch(i){if(i instanceof dn)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function hl(t,e,n,r,i={}){const s=await vr(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function X1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jm(t.config,i):`${t.config.apiScheme}://${i}`}function dD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),hD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jn(t,e,r);return i.customData._tokenResponse=n,i}function p_(t){return t!==void 0&&t.enterprise!==void 0}class pD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mD(t,e){return vr(t,"GET","/v2/recaptchaConfig",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function yD(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vD(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Bm(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:la(kd(i.auth_time)),issuedAtTime:la(kd(i.iat)),expirationTime:la(kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kd(t){return Number(t)*1e3}function Bm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Au("JWT malformed, contained fewer than 3 sections"),null;try{const i=b1(n);return i?JSON.parse(i):(Au("Failed to decode base64 JWT payload"),null)}catch(i){return Au("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _D(t){const e=Bm(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&wD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=la(this.lastLoginAt),this.creationTime=la(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ks(t,yD(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SD(s.providerUserInfo):[],a=ID(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new J1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function TD(t){const e=Oe(t);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ID(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SD(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,e){const n=await Y1(t,{},async()=>{const r=ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=X1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Q1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AD(t,e){return vr(t,"POST","/v2/accounts:revokeToken",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_D(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Va;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Va,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ni{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ED(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new J1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vD(this,e)}reload(){return TD(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ks(this,gD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:f,isAnonymous:I,providerData:R,stsTokenManager:T}=n;G(y&&T,e,"internal-error");const N=Va.fromJSON(this.name,T);G(typeof y=="string",e,"internal-error"),Rr(h,e.name),Rr(d,e.name),G(typeof f=="boolean",e,"internal-error"),G(typeof I=="boolean",e,"internal-error"),Rr(m,e.name),Rr(v,e.name),Rr(_,e.name),Rr(E,e.name),Rr(g,e.name),Rr(p,e.name);const j=new Ni({uid:y,auth:e,email:d,emailVerified:f,displayName:h,isAnonymous:I,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:N,createdAt:g,lastLoginAt:p});return R&&Array.isArray(R)&&(j.providerData=R.map(F=>Object.assign({},F))),E&&(j._redirectEventId=E),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new Va;i.updateFromServerResponse(n);const s=new Ni({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=new Map;function rr(t){hr(t instanceof Function,"Expected a class definition");let e=m_.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,m_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z1.type="NONE";const g_=Z1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(rr(g_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rr(g_);const o=Pu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ni._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iT(e))return"Blackberry";if(sT(e))return"Webos";if(zm(e))return"Safari";if((e.includes("chrome/")||tT(e))&&!e.includes("edge/"))return"Chrome";if(rT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eT(t=At()){return/firefox\//i.test(t)}function zm(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tT(t=At()){return/crios\//i.test(t)}function nT(t=At()){return/iemobile/i.test(t)}function rT(t=At()){return/android/i.test(t)}function iT(t=At()){return/blackberry/i.test(t)}function sT(t=At()){return/webos/i.test(t)}function ih(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PD(t=At()){var e;return ih(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CD(){return jx()&&document.documentMode===10}function oT(t=At()){return ih(t)||rT(t)||sT(t)||iT(t)||/windows phone/i.test(t)||nT(t)}function kD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e=[]){let n;switch(t){case"Browser":n=y_(At());break;case"Worker":n=`${y_(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(t,e={}){return vr(t,"GET","/v2/passwordPolicy",ai(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=6;class OD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v_(this),this.idTokenSubscription=new v_(this),this.beforeStateQueue=new xD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=K1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ND(this),n=new OD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ll("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function li(t){return Oe(t)}class v_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gx(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=jn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bD().appendChild(r)})}function MD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VD="https://www.google.com/recaptcha/enterprise.js?render=",UD="recaptcha-enterprise",FD="NO_RECAPTCHA";class $D{constructor(e){this.type=UD,this.auth=li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new pD(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;p_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(FD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&p_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lT(VD+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function __(t,e,n,r=!1){const i=new $D(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function sp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await __(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await __(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t,e){const n=rh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cc(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function BD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zD(t,e,n){const r=li(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=uT(e),{host:o,port:a}=HD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WD()}function uT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HD(t){const e=uT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:w_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:w_(o)}}}function w_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function qD(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(t,e){return hl(t,"POST","/v1/accounts:signInWithPassword",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}async function QD(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Hm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sp(e,n,"signInWithPassword",KD);case"emailLink":return GD(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sp(e,r,"signUpPassword",qD);case"emailLink":return QD(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return hl(t,"POST","/v1/accounts:signInWithIdp",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="http://localhost";class zi extends Hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:YD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ul(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JD(t){const e=zo(Ho(t)).link,n=e?zo(Ho(e)).deep_link_id:null,r=zo(Ho(t)).deep_link_id;return(r?zo(Ho(r)).link:null)||r||n||e||t}class Wm{constructor(e){var n,r,i,s,o,a;const l=zo(Ho(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=XD((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=JD(e);try{return new Wm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.providerId=co.PROVIDER_ID}static credential(e,n){return Ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wm.parseLink(n);return G(r,"argument-error"),Ua._fromEmailAndCode(e,r.code,r.tenantId)}}co.PROVIDER_ID="password";co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends qm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends dl{constructor(){super("facebook.com")}static credential(e){return zi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends dl{constructor(){super("github.com")}static credential(e){return zi._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends dl{constructor(){super("twitter.com")}static credential(e,n){return zi._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(t,e){return hl(t,"POST","/v1/accounts:signUp",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ni._fromIdTokenResponse(e,r,i),o=E_(r);return new Hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=E_(r);return new Hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function E_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pc(e,n,r,i)}}function cT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,s,e,r):s})}async function e2(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ks(t,cT(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Bm(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(t,e,n=!1){const r="signIn",i=await cT(t,r,e),s=await Hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function n2(t,e){return hT(li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function r2(t,e,n){const r=li(t),o=await sp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&dT(t),l}),a=await Hi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function i2(t,e,n){return n2(Oe(t),co.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s2(t,e){return vr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ks(r,s2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function o2(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function a2(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}const mc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(){const t=At();return zm(t)||ih(t)}const u2=1e3,c2=10;class mT extends pT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=l2()&&kD(),this.fallbackToPolling=oT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);CD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,c2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},u2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mT.type="LOCAL";const h2=mT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends pT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gT.type="SESSION";const yT=gT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await d2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Km("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function p2(t){Bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function m2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function y2(){return vT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="firebaseLocalStorageDb",v2=1,gc="firebaseLocalStorage",wT="fbase_key";class fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oh(t,e){return t.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function _2(){const t=indexedDB.deleteDatabase(_T);return new fl(t).toPromise()}function op(){const t=indexedDB.open(_T,v2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gc,{keyPath:wT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gc)?e(r):(r.close(),await _2(),e(await op()))})})}async function T_(t,e,n){const r=oh(t,!0).put({[wT]:e,value:n});return new fl(r).toPromise()}async function w2(t,e){const n=oh(t,!1).get(e),r=await new fl(n).toPromise();return r===void 0?null:r.value}function I_(t,e){const n=oh(t,!0).delete(e);return new fl(n).toPromise()}const E2=800,T2=3;class ET{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await op(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>T2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sh._getInstance(y2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await m2(),!this.activeServiceWorker)return;this.sender=new f2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await op();return await T_(e,mc,"1"),await I_(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>T_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>w2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>I_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=oh(i,!1).getAll();return new fl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ET.type="LOCAL";const I2=ET;new cl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t,e){return e?rr(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends Hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function S2(t){return hT(t.auth,new Gm(t),t.bypassAuthState)}function R2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),t2(n,new Gm(t),t.bypassAuthState)}async function A2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),e2(n,new Gm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S2;case"linkViaPopup":case"linkViaRedirect":return A2;case"reauthViaPopup":case"reauthViaRedirect":return R2;default:hn(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=new cl(2e3,1e4);async function C2(t,e,n){const r=li(t);oD(t,e,qm);const i=TT(r,n);return new Ii(r,"signInViaPopup",e,i).executeNotNull()}class Ii extends IT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ii.currentPopupAction&&Ii.currentPopupAction.cancel(),Ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=Km();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,P2.get())};e()}}Ii.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2="pendingRedirect",Cu=new Map;class x2 extends IT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cu.get(this.auth._key());if(!e){try{const r=await N2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cu.set(this.auth._key(),e)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function N2(t,e){const n=L2(e),r=O2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function D2(t,e){Cu.set(t._key(),e)}function O2(t){return rr(t._redirectPersistence)}function L2(t){return Pu(k2,t.config.apiKey,t.name)}async function b2(t,e,n=!1){const r=li(t),i=TT(r,e),o=await new x2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=10*60*1e3;class V2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!U2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ST(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=M2&&this.cachedEventUids.clear(),this.cachedEventUids.has(S_(e))}saveEventToCache(e){this.cachedEventUids.add(S_(e)),this.lastProcessedEventTime=Date.now()}}function S_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ST({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function U2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j2=/^https?/;async function B2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await F2(t);for(const n of e)try{if(z2(n))return}catch{}hn(t,"unauthorized-domain")}function z2(t){const e=ip(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!j2.test(n))return!1;if($2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=new cl(3e4,6e4);function R_(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function W2(t){return new Promise((e,n)=>{var r,i,s;function o(){R_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{R_(),n(jn(t,"network-request-failed"))},timeout:H2.get()})}if(!((i=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=MD("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},lT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ku=null,e})}let ku=null;function q2(t){return ku=ku||W2(t),ku}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=new cl(5e3,15e3),G2="__/auth/iframe",Q2="emulator/auth/iframe",Y2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J2(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jm(e,Q2):`https://${t.config.authDomain}/${G2}`,r={apiKey:e.apiKey,appName:t.name,v:Ji},i=X2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ul(r).slice(1)}`}async function Z2(t){const e=await q2(t),n=Bn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:J2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},K2.get());function l(){Bn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tO=500,nO=600,rO="_blank",iO="http://localhost";class A_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sO(t,e,n,r=tO,i=nO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=tT(u)?rO:n),eT(u)&&(e=e||iO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(PD(u)&&a!=="_self")return oO(e||"",a),new A_(null);const h=window.open(e||"",a,c);G(h,t,"popup-blocked");try{h.focus()}catch{}return new A_(h)}function oO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO="__/auth/handler",lO="emulator/auth/handler",uO=encodeURIComponent("fac");async function P_(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ji,eventId:i};if(e instanceof qm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof dl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${uO}=${encodeURIComponent(l)}`:"";return`${cO(t)}?${ul(a).slice(1)}${u}`}function cO({config:t}){return t.emulator?jm(t,lO):`https://${t.authDomain}/${aO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class hO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yT,this._completeRedirectFn=b2,this._overrideRedirectResult=D2}async _openPopup(e,n,r,i){var s;hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await P_(e,n,r,ip(),i);return sO(e,o,Km())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await P_(e,n,r,ip(),i);return p2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Z2(e),r=new V2(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xd,{type:xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xd];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oT()||zm()||ih()}}const dO=hO;var C_="@firebase/auth",k_="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mO(t){Bi(new ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aT(t)},u=new LD(r,i,s,l);return BD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bi(new ei("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new fO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(C_,k_,pO(t)),$n(C_,k_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=5*60,yO=F1("authIdTokenMaxAge")||gO;let x_=null;const vO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yO)return;const i=n==null?void 0:n.token;x_!==i&&(x_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _O(t=Fm()){const e=rh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jD(t,{popupRedirectResolver:dO,persistence:[I2,h2,yT]}),r=F1("authTokenSyncURL");if(r){const s=vO(r);a2(n,s,()=>s(n.currentUser)),o2(n,o=>s(o))}const i=M1("auth");return i&&zD(n,`http://${i}`),n}mO("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="firebasestorage.googleapis.com",AT="storageBucket",wO=2*60*1e3,EO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends dn{constructor(e,n,r=0){super(Nd(e),`Firebase Storage: ${n} (${Nd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function Nd(t){return"storage/"+t}function Qm(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(Ve.UNKNOWN,t)}function TO(t){return new Fe(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function IO(t){return new Fe(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Ve.UNAUTHENTICATED,t)}function RO(){return new Fe(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AO(t){return new Fe(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function PO(){return new Fe(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CO(){return new Fe(Ve.CANCELED,"User canceled the upload/download.")}function kO(t){return new Fe(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function xO(t){return new Fe(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function NO(){return new Fe(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+AT+"' property when initializing the app?")}function DO(){return new Fe(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OO(){return new Fe(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LO(t){return new Fe(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ap(t){return new Fe(Ve.INVALID_ARGUMENT,t)}function PT(){return new Fe(Ve.APP_DELETED,"The Firebase app was deleted.")}function bO(t){return new Fe(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ua(t,e){return new Fe(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Lo(t){throw new Fe(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw xO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(f){f.path.charAt(f.path.length-1)==="/"&&(f.path_=f.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(f){f.path_=decodeURIComponent(f.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===RT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:m,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let f=0;f<y.length;f++){const I=y[f],R=I.regex.exec(e);if(R){const T=R[I.indices.bucket];let N=R[I.indices.path];N||(N=""),r=new qt(T,N),I.postModify(r);break}}if(r==null)throw kO(e);return r}}class MO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(m,l())},E)}function d(){s&&clearTimeout(s)}function m(E,...g){if(u){d();return}if(E){d(),c.call(null,E,...g);return}if(l()||o){d(),c.call(null,E,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(E){v||(v=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function UO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){return t!==void 0}function $O(t){return typeof t=="object"&&!Array.isArray(t)}function Ym(t){return typeof t=="string"||t instanceof String}function N_(t){return Xm()&&t instanceof Blob}function Xm(){return typeof Blob<"u"&&!Ux()}function D_(t,e,n,r){if(r<e)throw ap(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ap(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function CT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Di;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Di||(Di={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Jl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Di.NO_ERROR,l=s.getStatus();if(!a||jO(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Di.ABORT;r(!1,new Jl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Jl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());FO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Qm();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?PT():CO();o(l)}else{const l=PO();o(l)}};this.canceled_?n(!1,new Jl(!1,null,!0)):this.backoffId_=VO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KO(t,e,n,r,i,s,o=!0){const a=CT(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return WO(u,e),zO(u,n),HO(u,s),qO(u,r),new BO(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function QO(...t){const e=GO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xm())return new Blob(t);throw new Fe(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function YO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){if(typeof atob>"u")throw LO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dd{constructor(e,n){this.data=e,this.contentType=n||null}}function JO(t,e){switch(t){case bn.RAW:return new Dd(kT(e));case bn.BASE64:case bn.BASE64URL:return new Dd(xT(t,e));case bn.DATA_URL:return new Dd(eL(e),tL(e))}throw Qm()}function kT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ZO(t){let e;try{e=decodeURIComponent(t)}catch{throw ua(bn.DATA_URL,"Malformed data URL.")}return kT(e)}function xT(t,e){switch(t){case bn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ua(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case bn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ua(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XO(e)}catch(i){throw i.message.includes("polyfill")?i:ua(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class NT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ua(bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=nL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function eL(t){const e=new NT(t);return e.base64?xT(bn.BASE64,e.rest):ZO(e.rest)}function tL(t){return new NT(t).contentType}function nL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){let r=0,i="";N_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(N_(this.data_)){const r=this.data_,i=YO(r,e,n);return i===null?null:new br(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new br(r,!0)}}static getBlob(...e){if(Xm()){const n=e.map(r=>r instanceof br?r.data_:r);return new br(QO.apply(null,n))}else{const n=e.map(o=>Ym(o)?JO(bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new br(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t){let e;try{e=JSON.parse(t)}catch{return null}return $O(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function OT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||sL}}let Zl=null;function oL(t){return!Ym(t)||t.length<2?t:OT(t)}function LT(){if(Zl)return Zl;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return oL(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),Zl=t,Zl}function aL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function lL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return aL(r,t),r}function bT(t,e,n){const r=DT(e);return r===null?null:lL(t,r,n)}function uL(t,e,n,r){const i=DT(e);if(i===null||!Ym(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=ah(d,n,r),v=CT({alt:"media",token:u});return m+v})[0]}function cL(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Jm{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){if(!t)throw Qm()}function hL(t,e){function n(r,i){const s=bT(t,i,e);return MT(s!==null),s}return n}function dL(t,e){function n(r,i){const s=bT(t,i,e);return MT(s!==null),uL(s,i,t.host,t._protocol)}return n}function VT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=RO():i=SO():n.getStatus()===402?i=IO(t.bucket):n.getStatus()===403?i=AO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function UT(t){const e=VT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=TO(t.path)),s.serverResponse=i.serverResponse,s}return n}function fL(t,e,n){const r=e.fullServerUrl(),i=ah(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Jm(i,s,dL(t,n),o);return a.errorHandler=UT(e),a}function pL(t,e){const n=e.fullServerUrl(),r=ah(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new Jm(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=UT(e),a}function mL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function gL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=mL(null,e)),r}function yL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let f=0;f<2;f++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=gL(e,r,i),c=cL(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=br.getBlob(h,r,d);if(m===null)throw DO();const v={name:u.fullPath},_=ah(s,t.host,t._protocol),E="POST",g=t.maxUploadRetryTime,p=new Jm(_,E,hL(t,n),g);return p.urlParams=v,p.headers=o,p.body=m.uploadData(),p.errorHandler=VT(e),p}class vL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Lo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Lo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Lo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Lo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Lo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _L extends vL{initXhr(){this.xhr_.responseType="text"}}function Zm(){return new _L}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wi(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return OT(this._location.path)}get storage(){return this._service}get parent(){const e=rL(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new Wi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bO(e)}}function wL(t,e,n){t._throwIfRoot("uploadBytes");const r=yL(t.storage,t._location,LT(),new br(e,!0),n);return t.storage.makeRequestWithTokens(r,Zm).then(i=>({metadata:i,ref:t}))}function EL(t){t._throwIfRoot("getDownloadURL");const e=fL(t.storage,t._location,LT());return t.storage.makeRequestWithTokens(e,Zm).then(n=>{if(n===null)throw OO();return n})}function TL(t){t._throwIfRoot("deleteObject");const e=pL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Zm)}function IL(t,e){const n=iL(t._location.path,e),r=new qt(t._location.bucket,n);return new Wi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t){return/^[A-Za-z]+:\/\//.test(t)}function RL(t,e){return new Wi(t,e)}function FT(t,e){if(t instanceof eg){const n=t;if(n._bucket==null)throw NO();const r=new Wi(n,n._bucket);return e!=null?FT(r,e):r}else return e!==void 0?IL(t,e):t}function AL(t,e){if(e&&SL(e)){if(t instanceof eg)return RL(t,e);throw ap("To use ref(service, url), the first argument must be a Storage instance.")}else return FT(t,e)}function O_(t,e){const n=e==null?void 0:e[AT];return n==null?null:qt.makeFromBucketSpec(n,t)}function PL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:$1(i,t.app.options.projectId))}class eg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=RT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wO,this._maxUploadRetryTime=EO,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=O_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=O_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){D_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){D_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new MO(PT());{const o=KO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const L_="@firebase/storage",b_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="storage";function jT(t,e,n){return t=Oe(t),wL(t,e,n)}function BT(t){return t=Oe(t),EL(t)}function CL(t){return t=Oe(t),TL(t)}function tg(t,e){return t=Oe(t),AL(t,e)}function kL(t=Fm(),e){t=Oe(t);const r=rh(t,$T).getImmediate({identifier:e}),i=V1("storage");return i&&xL(r,...i),r}function xL(t,e,n,r={}){PL(t,e,n,r)}function NL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new eg(n,r,i,e,Ji)}function DL(){Bi(new ei($T,NL,"PUBLIC").setMultipleInstances(!0)),$n(L_,b_,""),$n(L_,b_,"esm2017")}DL();var OL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,ng=ng||{},Y=OL||self;function lh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LL(t){return Object.prototype.hasOwnProperty.call(t,Od)&&t[Od]||(t[Od]=++bL)}var Od="closure_uid_"+(1e9*Math.random()>>>0),bL=0;function ML(t,e,n){return t.call.apply(t.bind,arguments)}function VL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=ML:It=VL,It.apply(null,arguments)}function eu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function st(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ui(){this.s=this.s,this.o=this.o}var UL=0;ui.prototype.s=!1;ui.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),UL!=0)&&LL(this)};ui.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function M_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(lh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var FL=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function Fa(t){return/^[\s\xa0]*$/.test(t)}function uh(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Ln(t){return uh().indexOf(t)!=-1}function ig(t){return ig[" "](t),t}ig[" "]=function(){};function $L(t,e){var n=Db;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var jL=Ln("Opera"),Gs=Ln("Trident")||Ln("MSIE"),HT=Ln("Edge"),lp=HT||Gs,WT=Ln("Gecko")&&!(uh().toLowerCase().indexOf("webkit")!=-1&&!Ln("Edge"))&&!(Ln("Trident")||Ln("MSIE"))&&!Ln("Edge"),BL=uh().toLowerCase().indexOf("webkit")!=-1&&!Ln("Edge");function qT(){var t=Y.document;return t?t.documentMode:void 0}var up;e:{var Ld="",bd=function(){var t=uh();if(WT)return/rv:([^\);]+)(\)|;)/.exec(t);if(HT)return/Edge\/([\d\.]+)/.exec(t);if(Gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BL)return/WebKit\/(\S+)/.exec(t);if(jL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bd&&(Ld=bd?bd[1]:""),Gs){var Md=qT();if(Md!=null&&Md>parseFloat(Ld)){up=String(Md);break e}}up=Ld}var cp;if(Y.document&&Gs){var V_=qT();cp=V_||parseInt(up,10)||void 0}else cp=void 0;var zL=cp;function $a(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(WT){e:{try{ig(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$a.$.h.call(this)}}st($a,St);var HL={2:"touch",3:"pen",4:"mouse"};$a.prototype.h=function(){$a.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ml="closure_listenable_"+(1e6*Math.random()|0),WL=0;function qL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++WL,this.fa=this.ia=!1}function ch(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function KL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function KT(t){const e={};for(const n in t)e[n]=t[n];return e}const U_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function GT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<U_.length;s++)n=U_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function hh(t){this.src=t,this.g={},this.h=0}hh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new qL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function hp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=zT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ch(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var og="closure_lm_"+(1e6*Math.random()|0),Vd={};function QT(t,e,n,r,i){if(r&&r.once)return XT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)QT(t,e[s],n,r,i);return null}return n=ug(n),t&&t[ml]?t.O(e,n,pl(r)?!!r.capture:!!r,i):YT(t,e,n,!1,r,i)}function YT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=pl(i)?!!i.capture:!!i,a=lg(t);if(a||(t[og]=a=new hh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=GL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)FL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ZT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GL(){function t(n){return e.call(t.src,t.listener,n)}const e=QL;return t}function XT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)XT(t,e[s],n,r,i);return null}return n=ug(n),t&&t[ml]?t.P(e,n,pl(r)?!!r.capture:!!r,i):YT(t,e,n,!0,r,i)}function JT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)JT(t,e[s],n,r,i);else r=pl(r)?!!r.capture:!!r,n=ug(n),t&&t[ml]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dp(s,n,r,i),-1<n&&(ch(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=lg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dp(e,n,r,i)),(n=-1<t?e[t]:null)&&ag(n))}function ag(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ml])hp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ZT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=lg(e))?(hp(n,t),n.h==0&&(n.src=null,e[og]=null)):ch(t)}}}function ZT(t){return t in Vd?Vd[t]:Vd[t]="on"+t}function QL(t,e){if(t.fa)t=!0;else{e=new $a(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ag(t),t=n.call(r,e)}return t}function lg(t){return t=t[og],t instanceof hh?t:null}var Ud="__closure_events_fn_"+(1e9*Math.random()>>>0);function ug(t){return typeof t=="function"?t:(t[Ud]||(t[Ud]=function(e){return t.handleEvent(e)}),t[Ud])}function it(){ui.call(this),this.i=new hh(this),this.S=this,this.J=null}st(it,ui);it.prototype[ml]=!0;it.prototype.removeEventListener=function(t,e,n,r){JT(this,t,e,n,r)};function dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var i=e;e=new St(r,t),GT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=tu(o,r,!0,e)&&i}if(o=e.g=t,i=tu(o,r,!0,e)&&i,i=tu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=tu(o,r,!1,e)&&i}it.prototype.N=function(){if(it.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ch(n[r]);delete t.g[e],t.h--}}this.J=null};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function tu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&hp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var cg=Y.JSON.stringify;class YL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function XL(){var t=hg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JL{constructor(){this.h=this.g=null}add(e,n){const r=eI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var eI=new YL(()=>new ZL,t=>t.reset());class ZL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tb(t){Y.setTimeout(()=>{throw t},0)}let ja,Ba=!1,hg=new JL,tI=()=>{const t=Y.Promise.resolve(void 0);ja=()=>{t.then(nb)}};var nb=()=>{for(var t;t=XL();){try{t.h.call(t.g)}catch(n){tb(n)}var e=eI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ba=!1};function dh(t,e){it.call(this),this.h=t||1,this.g=e||Y,this.j=It(this.qb,this),this.l=Date.now()}st(dh,it);L=dh.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(dg(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){dh.$.N.call(this),dg(this),delete this.g};function fg(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function nI(t){t.g=fg(()=>{t.g=null,t.i&&(t.i=!1,nI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rb extends ui{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nI(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function za(t){ui.call(this),this.h=t,this.g={}}st(za,ui);var F_=[];function rI(t,e,n,r){Array.isArray(n)||(n&&(F_[0]=n.toString()),n=F_);for(var i=0;i<n.length;i++){var s=QT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function iI(t){sg(t.g,function(e,n){this.g.hasOwnProperty(n)&&ag(e)},t),t.g={}}za.prototype.N=function(){za.$.N.call(this),iI(this)};za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fh(){this.g=!0}fh.prototype.Ea=function(){this.g=!1};function ib(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function sb(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ts(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ab(t,n)+(r?" "+r:"")})}function ob(t,e){t.info(function(){return"TIMEOUT: "+e})}fh.prototype.info=function(){};function ab(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return cg(n)}catch{return e}}var Zi={},$_=null;function ph(){return $_=$_||new it}Zi.Ta="serverreachability";function sI(t){St.call(this,Zi.Ta,t)}st(sI,St);function Ha(t){const e=ph();dt(e,new sI(e))}Zi.STAT_EVENT="statevent";function oI(t,e){St.call(this,Zi.STAT_EVENT,t),this.stat=e}st(oI,St);function xt(t){const e=ph();dt(e,new oI(e,t))}Zi.Ua="timingevent";function aI(t,e){St.call(this,Zi.Ua,t),this.size=e}st(aI,St);function gl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var mh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pg(){}pg.prototype.h=null;function j_(t){return t.h||(t.h=t.i())}function uI(){}var yl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mg(){St.call(this,"d")}st(mg,St);function gg(){St.call(this,"c")}st(gg,St);var fp;function gh(){}st(gh,pg);gh.prototype.g=function(){return new XMLHttpRequest};gh.prototype.i=function(){return{}};fp=new gh;function vl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new za(this),this.P=lb,t=lp?125:void 0,this.V=new dh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cI}function cI(){this.i=null,this.g="",this.h=!1}var lb=45e3,pp={},yc={};L=vl.prototype;L.setTimeout=function(t){this.P=t};function mp(t,e,n){t.L=1,t.v=vh(dr(e)),t.s=n,t.S=!0,hI(t,null)}function hI(t,e){t.G=Date.now(),_l(t),t.A=dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),_I(n.i,"t",r),t.C=0,n=t.l.J,t.h=new cI,t.g=$I(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rb(It(t.Pa,t,t.g),t.O)),rI(t.U,t.g,"readystatechange",t.nb),e=t.I?KT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ha(),ib(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&Mn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=Mn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||lp||this.g&&(this.h.h||this.g.ja()||W_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ha(3):Ha(2)),yh(this);var n=this.g.da();this.ca=n;t:if(dI(this)){var r=W_(this.g);t="";var i=r.length,s=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Si(this),ca(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sb(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fa(a)){var u=a;break t}}u=null}if(n=u)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gp(this,n);else{this.i=!1,this.o=3,xt(12),Si(this),ca(this);break e}}this.S?(fI(this,c,o),lp&&this.i&&c==3&&(rI(this.U,this.V,"tick",this.mb),this.V.start())):(Ts(this.j,this.m,o,null),gp(this,o)),c==4&&Si(this),this.i&&!this.J&&(c==4?MI(this.l,this):(this.i=!1,_l(this)))}else kb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),Si(this),ca(this)}}}catch{}finally{}};function dI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function fI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=ub(t,n),i==yc){e==4&&(t.o=4,xt(14),r=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(i==pp){t.o=4,xt(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ts(t.j,t.m,i,null),gp(t,i);dI(t)&&i!=yc&&i!=pp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tg(e),e.M=!0,xt(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),Si(t),ca(t))}L.mb=function(){if(this.g){var t=Mn(this.g),e=this.g.ja();this.C<e.length&&(yh(this),fI(this,t,e),this.i&&t!=4&&_l(this))}};function ub(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?yc:(n=Number(e.substring(n,r)),isNaN(n)?pp:(r+=1,r+n>e.length?yc:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,Si(this)};function _l(t){t.Y=Date.now()+t.P,pI(t,t.P)}function pI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=gl(It(t.lb,t),e)}function yh(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ob(this.j,this.A),this.L!=2&&(Ha(),xt(17)),Si(this),this.o=2,ca(this)):pI(this,this.Y-t)};function ca(t){t.l.H==0||t.J||MI(t.l,t)}function Si(t){yh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,dg(t.V),iI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function gp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yp(n.i,t))){if(!t.K&&yp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)wc(n),Eh(n);else break e;Eg(n),xt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=gl(It(n.ib,n),6e3));if(1>=TI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ri(n,11)}else if((t.K||n.g==t)&&wc(n),!Fa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(yg(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Te(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=FI(r,r.J?r.pa:null,r.Y),o.K){II(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(yh(a),_l(a)),r.g=o}else LI(r);0<n.j.length&&Th(n)}else u[0]!="stop"&&u[0]!="close"||Ri(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ri(n,7):wg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ha(4)}catch{}}function cb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(lh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(lh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function mI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hb(t),r=cb(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var gI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function db(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Oi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Oi){this.h=t.h,vc(this,t.j),this.s=t.s,this.g=t.g,_c(this,t.m),this.l=t.l;var e=t.i,n=new Wa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),B_(this,n),this.o=t.o}else t&&(e=String(t).match(gI))?(this.h=!1,vc(this,e[1]||"",!0),this.s=Wo(e[2]||""),this.g=Wo(e[3]||"",!0),_c(this,e[4]),this.l=Wo(e[5]||"",!0),B_(this,e[6]||"",!0),this.o=Wo(e[7]||"")):(this.h=!1,this.i=new Wa(null,this.h))}Oi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qo(e,z_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qo(e,z_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qo(n,n.charAt(0)=="/"?mb:pb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qo(n,yb)),t.join("")};function dr(t){return new Oi(t)}function vc(t,e,n){t.j=n?Wo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _c(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function B_(t,e,n){e instanceof Wa?(t.i=e,vb(t.i,t.h)):(n||(e=qo(e,gb)),t.i=new Wa(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function vh(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var z_=/[#\/\?@]/g,pb=/[#\?:]/g,mb=/[#\?]/g,gb=/[#\?@]/g,yb=/#/g;function Wa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ci(t){t.g||(t.g=new Map,t.h=0,t.i&&db(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Wa.prototype;L.add=function(t,e){ci(this),this.i=null,t=ho(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yI(t,e){ci(t),e=ho(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vI(t,e){return ci(t),e=ho(t,e),t.g.has(e)}L.forEach=function(t,e){ci(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){ci(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){ci(this);let e=[];if(typeof t=="string")vI(this,t)&&(e=e.concat(this.g.get(ho(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return ci(this),this.i=null,t=ho(this,t),vI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function _I(t,e,n){yI(t,e),0<n.length&&(t.i=null,t.g.set(ho(t,e),rg(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ho(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vb(t,e){e&&!t.j&&(ci(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(yI(this,r),_I(this,i,n))},t)),t.j=e}var _b=class{constructor(t,e){this.g=t,this.map=e}};function wI(t){this.l=t||wb,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wb=10;function EI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function TI(t){return t.h?1:t.g?t.g.size:0}function yp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yg(t,e){t.g?t.g.add(e):t.h=e}function II(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wI.prototype.cancel=function(){if(this.i=SI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function SI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return rg(t.i)}var Eb=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function Tb(){this.g=new Eb}function Ib(t,e,n){const r=n||"";try{mI(t,function(i,s){let o=i;pl(i)&&(o=cg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Sb(t,e){const n=new fh;if(Y.Image){const r=new Image;r.onload=eu(nu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=eu(nu,n,r,"TestLoadImage: error",!1,e),r.onabort=eu(nu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=eu(nu,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function nu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wl(t){this.l=t.ec||null,this.j=t.ob||!1}st(wl,pg);wl.prototype.g=function(){return new _h(this.l,this.j)};wl.prototype.i=function(t){return function(){return t}}({});function _h(t,e){it.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=vg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(_h,it);var vg=0;L=_h.prototype;L.open=function(t,e){if(this.readyState!=vg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qa(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,El(this)),this.readyState=vg};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qa(this)),this.g&&(this.readyState=3,qa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;RI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function RI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?El(this):qa(this),this.readyState==3&&RI(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,El(this))};L.Ya=function(t){this.g&&(this.response=t,El(this))};L.ka=function(){this.g&&El(this)};function El(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qa(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_h.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Rb=Y.JSON.parse;function Ue(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=AI,this.L=this.M=!1}st(Ue,it);var AI="",Ab=/^https?$/i,Pb=["POST","PUT"];L=Ue.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fp.g(),this.C=this.u?j_(this.u):j_(fp),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){H_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=zT(Pb,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kI(this),0<this.B&&((this.L=Cb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=fg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){H_(this,s)}};function Cb(t){return Gs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof ng<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function H_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,PI(t),wh(t)}function PI(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),wh(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wh(this,!0)),Ue.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?CI(this):this.kb())};L.kb=function(){CI(this)};function CI(t){if(t.h&&typeof ng<"u"&&(!t.C[1]||Mn(t)!=4||t.da()!=2)){if(t.v&&Mn(t)==4)fg(t.La,0,t);else if(dt(t,"readystatechange"),Mn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(gI)[1]||null;!i&&Y.self&&Y.self.location&&(i=Y.self.location.protocol.slice(0,-1)),r=!Ab.test(i?i.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var s=2<Mn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",PI(t)}}finally{wh(t)}}}}function wh(t,e){if(t.g){kI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function kI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Mn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Rb(e)}};function W_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case AI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kb(t){const e={};t=(t.g&&2<=Mn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Fa(t[r]))continue;var n=eb(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}KL(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xI(t){let e="";return sg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function _g(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=xI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function bo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function NI(t){this.Ga=0,this.j=[],this.l=new fh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bo("baseRetryDelayMs",5e3,t),this.hb=bo("retryDelaySeedMs",1e4,t),this.eb=bo("forwardChannelMaxRetries",2,t),this.xa=bo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new wI(t&&t.concurrentRequestLimit),this.Ja=new Tb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=NI.prototype;L.ra=8;L.H=1;function wg(t){if(DI(t),t.H==3){var e=t.W++,n=dr(t.I);if(Te(n,"SID",t.K),Te(n,"RID",e),Te(n,"TYPE","terminate"),Tl(t,n),e=new vl(t,t.l,e),e.L=2,e.v=vh(dr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=$I(e.l,null),e.g.ha(e.v)),e.G=Date.now(),_l(e)}UI(t)}function Eh(t){t.g&&(Tg(t),t.g.cancel(),t.g=null)}function DI(t){Eh(t),t.u&&(Y.clearTimeout(t.u),t.u=null),wc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Th(t){if(!EI(t.i)&&!t.m){t.m=!0;var e=t.Na;ja||tI(),Ba||(ja(),Ba=!0),hg.add(e,t),t.C=0}}function xb(t,e){return TI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=gl(It(t.Na,t,e),VI(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new vl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=KT(s),GT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=OI(this,i,e),n=dr(this.I),Te(n,"RID",t),Te(n,"CVER",22),this.F&&Te(n,"X-HTTP-Session-Id",this.F),Tl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(xI(s)))+"&"+e:this.o&&_g(n,this.o,s)),yg(this.i,i),this.bb&&Te(n,"TYPE","init"),this.P?(Te(n,"$req",e),Te(n,"SID","null"),i.aa=!0,mp(i,n,null)):mp(i,n,e),this.H=2}}else this.H==3&&(t?q_(this,t):this.j.length==0||EI(this.i)||q_(this))};function q_(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);Te(r,"SID",t.K),Te(r,"RID",n),Te(r,"AID",t.V),Tl(t,r),t.o&&t.s&&_g(r,t.o,t.s),n=new vl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=OI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),yg(t.i,n),mp(n,r,e)}function Tl(t,e){t.na&&sg(t.na,function(n,r){Te(e,r,n)}),t.h&&mI({},function(n,r){Te(e,r,n)})}function OI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?It(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Ib(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function LI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ja||tI(),Ba||(ja(),Ba=!0),hg.add(e,t),t.A=0}}function Eg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=gl(It(t.Ma,t),VI(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,bI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=gl(It(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xt(10),Eh(this),bI(this))};function Tg(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function bI(t){t.g=new vl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);Te(e,"RID","rpc"),Te(e,"SID",t.K),Te(e,"AID",t.V),Te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Te(e,"TO",t.qa),Te(e,"TYPE","xmlhttp"),Tl(t,e),t.o&&t.s&&_g(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=vh(dr(e)),n.s=null,n.S=!0,hI(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Eh(this),Eg(this),xt(19))};function wc(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function MI(t,e){var n=null;if(t.g==e){wc(t),Tg(t),t.g=null;var r=2}else if(yp(t.i,e))n=e.F,II(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=ph(),dt(r,new aI(r,n)),Th(t)}else LI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&xb(t,e)||r==2&&Eg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ri(t,5);break;case 4:Ri(t,10);break;case 3:Ri(t,6);break;default:Ri(t,2)}}}function VI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ri(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=It(t.pb,t);n||(n=new Oi("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||vc(n,"https"),vh(n)),Sb(n.toString(),r)}else xt(2);t.H=0,t.h&&t.h.za(e),UI(t),DI(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),xt(2)):(this.l.info("Failed to ping google.com"),xt(1))};function UI(t){if(t.H=0,t.ma=[],t.h){const e=SI(t.i);(e.length!=0||t.j.length!=0)&&(M_(t.ma,e),M_(t.ma,t.j),t.i.i.length=0,rg(t.j),t.j.length=0),t.h.ya()}}function FI(t,e,n){var r=n instanceof Oi?dr(n):new Oi(n);if(r.g!="")e&&(r.g=e+"."+r.g),_c(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Oi(null);r&&vc(s,r),e&&(s.g=e),i&&_c(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Te(r,n,e),Te(r,"VER",t.ra),Tl(t,r),r}function $I(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new wl({ob:!0})):new Ue(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function jI(){}L=jI.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Ec(){if(Gs&&!(10<=Number(zL)))throw Error("Environmental error: no available transport.")}Ec.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){it.call(this),this.g=new NI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Fa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fo(this)}st(Yt,it);Yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=FI(t,null,t.Y),Th(t)};Yt.prototype.close=function(){wg(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cg(t),t=n);e.j.push(new _b(e.fb++,t)),e.H==3&&Th(e)};Yt.prototype.N=function(){this.g.h=null,delete this.j,wg(this.g),delete this.g,Yt.$.N.call(this)};function BI(t){mg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}st(BI,mg);function zI(){gg.call(this),this.status=1}st(zI,gg);function fo(t){this.g=t}st(fo,jI);fo.prototype.Ba=function(){dt(this.g,"a")};fo.prototype.Aa=function(t){dt(this.g,new BI(t))};fo.prototype.za=function(t){dt(this.g,new zI)};fo.prototype.ya=function(){dt(this.g,"b")};function Nb(){this.blockSize=-1}function An(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}st(An,Nb);An.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Fd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}An.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Fd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Fd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Fd(this,r),i=0;break}}this.h=i,this.i+=e};An.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function pe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Db={};function Ig(t){return-128<=t&&128>t?$L(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function Vn(t){if(isNaN(t)||!isFinite(t))return Ds;if(0>t)return ut(Vn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=vp;return new pe(e,0)}function HI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(HI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vn(Math.pow(e,8)),r=Ds,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Vn(Math.pow(e,s)),r=r.R(s).add(Vn(o))):(r=r.R(n),r=r.add(Vn(o)))}return r}var vp=4294967296,Ds=Ig(0),_p=Ig(1),K_=Ig(16777216);L=pe.prototype;L.ea=function(){if(sn(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:vp+r)*e,e*=vp}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ir(this))return"0";if(sn(this))return"-"+ut(this).toString(t);for(var e=Vn(Math.pow(t,6)),n=this,r="";;){var i=Ic(n,e).g;n=Tc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ir(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function sn(t){return t.h==-1}L.X=function(t){return t=Tc(this,t),sn(t)?-1:ir(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new pe(n,~t.h).add(_p)}L.abs=function(){return sn(this)?ut(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Tc(t,e){return t.add(ut(e))}L.R=function(t){if(ir(this)||ir(t))return Ds;if(sn(this))return sn(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(sn(t))return ut(this.R(ut(t)));if(0>this.X(K_)&&0>t.X(K_))return Vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ru(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ru(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ru(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ru(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new pe(n,0)};function ru(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mo(t,e){this.g=t,this.h=e}function Ic(t,e){if(ir(e))throw Error("division by zero");if(ir(t))return new Mo(Ds,Ds);if(sn(t))return e=Ic(ut(t),e),new Mo(ut(e.g),ut(e.h));if(sn(e))return e=Ic(t,ut(e)),new Mo(ut(e.g),e.h);if(30<t.g.length){if(sn(t)||sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=_p,r=e;0>=r.X(t);)n=G_(n),r=G_(r);var i=is(n,1),s=is(r,1);for(r=is(r,2),n=is(n,2);!ir(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=is(r,1),n=is(n,1)}return e=Tc(t,i.R(e)),new Mo(i,e)}for(i=Ds;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Vn(n),o=s.R(e);sn(o)||0<o.X(t);)n-=r,s=Vn(n),o=s.R(e);ir(s)&&(s=_p),i=i.add(s),t=Tc(t,o)}return new Mo(i,t)}L.gb=function(t){return Ic(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new pe(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new pe(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new pe(n,this.h^t.h)};function G_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new pe(n,t.h)}function is(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new pe(i,t.h)}Ec.prototype.createWebChannel=Ec.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;mh.NO_ERROR=0;mh.TIMEOUT=8;mh.HTTP_ERROR=6;lI.COMPLETE="complete";uI.EventType=yl;yl.OPEN="a";yl.CLOSE="b";yl.ERROR="c";yl.MESSAGE="d";it.prototype.listen=it.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;An.prototype.digest=An.prototype.l;An.prototype.reset=An.prototype.reset;An.prototype.update=An.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=Vn;pe.fromString=HI;var Ob=function(){return new Ec},Lb=function(){return ph()},$d=mh,bb=lI,Mb=Zi,Q_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Vb=wl,iu=uI,Ub=Ue,Fb=An,Os=pe;const Y_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Vm("@firebase/firestore");function Vo(){return qi.logLevel}function U(t,...e){if(qi.logLevel<=se.DEBUG){const n=e.map(Sg);qi.debug(`Firestore (${po}): ${t}`,...n)}}function fr(t,...e){if(qi.logLevel<=se.ERROR){const n=e.map(Sg);qi.error(`Firestore (${po}): ${t}`,...n)}}function Qs(t,...e){if(qi.logLevel<=se.WARN){const n=e.map(Sg);qi.warn(`Firestore (${po}): ${t}`,...n)}}function Sg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Re(t,e){t||Q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $b{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Bb{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new WI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new _t(e)}}class zb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new Wb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Kb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ze(0,0))}static max(){return new X(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ka.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ka?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Ka{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const Gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ka{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return Gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ie.fromString(e))}static fromName(e){return new B(Ie.fromString(e).popFirst(5))}static empty(){return new B(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ie(e.slice()))}}function Qb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new ti(i,B.empty(),e)}function Yb(t){return new ti(t.readTime,t.key,-1)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(X.min(),B.empty(),-1)}static max(){return new ti(X.max(),B.empty(),-1)}}function Xb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Jb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Sl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Rg._e=-1;function Ih(t){return t==null}function Sc(t){return t===0&&1/t==-1/0}function eM(t){return typeof t=="number"&&Number.isInteger(t)&&!Sc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new su(this.root,e,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new su(this.root,e,this.comparator,!0)}}class su{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new J_(this.data.getIterator())}getIteratorFrom(e){return new J_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class J_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new ft(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new GI("Invalid base64 string: "+s):s}}(e);return new Pt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const tM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(Re(!!t),typeof t=="string"){let e=0;const n=tM.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ki(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pg(t){const e=t.mapValue.fields.__previous_value__;return Ag(e)?Pg(e):e}function Ga(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ag(t)?4:rM(t)?9007199254740991:10:Q()}function qn(t,e){if(t===e)return!0;const n=Gi(t);if(n!==Gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ni(i.timestampValue),a=ni(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ki(i.bytesValue).isEqual(Ki(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),a=qe(s.doubleValue);return o===a?Sc(o)===Sc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(X_(o)!==X_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!qn(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function Ya(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=Gi(t),r=Gi(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qe(s.integerValue||s.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Z_(t.timestampValue,e.timestampValue);case 4:return Z_(Ga(t),Ga(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ki(s),l=Ki(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ce(a[u],l[u]);if(c!==0)return c}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(qe(s.latitude),qe(o.latitude));return a!==0?a:ce(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Xs(a[u],l[u]);if(c)return c}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ou.mapValue&&o===ou.mapValue)return 0;if(s===ou.mapValue)return 1;if(o===ou.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ce(l[h],c[h]);if(d!==0)return d;const m=Xs(a[l[h]],u[c[h]]);if(m!==0)return m}return ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Z_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=ni(t),r=ni(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Js(t){return wp(t)}function wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ni(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ki(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return B.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wp(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function e0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ep(t){return!!t&&"integerValue"in t}function Cg(t){return!!t&&"arrayValue"in t}function t0(t){return!!t&&"nullValue"in t}function n0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xu(t){return!!t&&"mapValue"in t}function ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ha(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ha(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(ha(this.value))}}function QI(t){const e=[];return es(t.fields,(n,r)=>{const i=new ct([n]);if(xu(r)){const s=QI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,X.min(),X.min(),X.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,X.min(),X.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,X.min(),X.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.position=e,this.inclusive=n}}function r0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Xs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function i0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n="asc"){this.field=e,this.dir=n}}function iM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{}class Qe extends YI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oM(e,n,r):n==="array-contains"?new uM(e,r):n==="in"?new cM(e,r):n==="not-in"?new hM(e,r):n==="array-contains-any"?new dM(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aM(e,r):new lM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xs(n,this.value)):n!==null&&Gi(this.value)===Gi(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pn extends YI{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Pn(e,n)}matches(e){return XI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function XI(t){return t.op==="and"}function JI(t){return sM(t)&&XI(t)}function sM(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function Tp(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(JI(t))return t.filters.map(e=>Tp(e)).join(",");{const e=t.filters.map(n=>Tp(n)).join(",");return`${t.op}(${e})`}}function ZI(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&qn(r.value,i.value)}(t,e):t instanceof Pn?function(r,i){return i instanceof Pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ZI(o,i.filters[a]),!0):!1}(t,e):void Q()}function eS(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Js(n.value)}`}(t):t instanceof Pn?function(n){return n.op.toString()+" {"+n.getFilters().map(eS).join(" ,")+"}"}(t):"Filter"}class oM extends Qe{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class aM extends Qe{constructor(e,n){super(e,"in",n),this.keys=tS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lM extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=tS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class uM extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cg(n)&&Ya(n.arrayValue,this.value)}}class cM extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ya(this.value.arrayValue,n)}}class hM extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ya(this.value.arrayValue,n)}}class dM extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ya(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function s0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fM(t,e,n,r,i,s,o)}function kg(t){const e=Z(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ih(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),e.ce=n}return e.ce}function xg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ZI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i0(t.startAt,e.startAt)&&i0(t.endAt,e.endAt)}function Ip(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function pM(t,e,n,r,i,s,o,a){return new mo(t,e,n,r,i,s,o,a)}function Ng(t){return new mo(t)}function o0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nS(t){return t.collectionGroup!==null}function da(t){const e=Z(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Xa(s,r))}),n.has(ct.keyField().canonicalString())||e.le.push(new Xa(ct.keyField(),r))}return e.le}function zn(t){const e=Z(t);return e.he||(e.he=mM(e,da(t))),e.he}function mM(t,e){if(t.limitType==="F")return s0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xa(i.field,s)});const n=t.endAt?new Rc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rc(t.startAt.position,t.startAt.inclusive):null;return s0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sp(t,e){const n=t.filters.concat([e]);return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ac(t,e,n){return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sh(t,e){return xg(zn(t),zn(e))&&t.limitType===e.limitType}function rS(t){return`${kg(zn(t))}|lt:${t.limitType}`}function ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>eS(i)).join(", ")}]`),Ih(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Js(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Js(i)).join(",")),`Target(${r})`}(zn(t))}; limitType=${t.limitType})`}function Rh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of da(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=r0(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,da(r),i)||r.endAt&&!function(o,a,l){const u=r0(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,da(r),i))}(t,e)}function gM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iS(t){return(e,n)=>{let r=!1;for(const i of da(t)){const s=yM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yM(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Xs(l,u):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return KI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM=new Le(B.comparator);function pr(){return vM}const sS=new Le(B.comparator);function Ko(...t){let e=sS;for(const n of t)e=e.insert(n.key,n);return e}function oS(t){let e=sS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ai(){return fa()}function aS(){return fa()}function fa(){return new go(t=>t.toString(),(t,e)=>t.isEqual(e))}const _M=new Le(B.comparator),wM=new ft(B.comparator);function re(...t){let e=wM;for(const n of t)e=e.add(n);return e}const EM=new ft(ce);function TM(){return EM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function uS(t){return{integerValue:""+t}}function IM(t,e){return eM(e)?uS(e):lS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this._=void 0}}function SM(t,e,n){return t instanceof Pc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ag(s)&&(s=Pg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ja?hS(t,e):t instanceof Za?dS(t,e):function(i,s){const o=cS(i,s),a=a0(o)+a0(i.Ie);return Ep(o)&&Ep(i.Ie)?uS(a):lS(i.serializer,a)}(t,e)}function RM(t,e,n){return t instanceof Ja?hS(t,e):t instanceof Za?dS(t,e):n}function cS(t,e){return t instanceof Cc?function(r){return Ep(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pc extends Ah{}class Ja extends Ah{constructor(e){super(),this.elements=e}}function hS(t,e){const n=fS(e);for(const r of t.elements)n.some(i=>qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Za extends Ah{constructor(e){super(),this.elements=e}}function dS(t,e){let n=fS(e);for(const r of t.elements)n=n.filter(i=>!qn(i,r));return{arrayValue:{values:n}}}class Cc extends Ah{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function a0(t){return qe(t.integerValue||t.doubleValue)}function fS(t){return Cg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ja&&i instanceof Ja||r instanceof Za&&i instanceof Za?Ys(r.elements,i.elements,qn):r instanceof Cc&&i instanceof Cc?qn(r.Ie,i.Ie):r instanceof Pc&&i instanceof Pc}(t.transform,e.transform)}class PM{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function pS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dg(t.key,Sn.none()):new Rl(t.key,t.data,Sn.none());{const n=t.data,r=Mt.empty();let i=new ft(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hi(t.key,r,new Kt(i.toArray()),Sn.none())}}function CM(t,e,n){t instanceof Rl?function(i,s,o){const a=i.value.clone(),l=u0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(i,s,o){if(!Nu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=u0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(mS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pa(t,e,n,r){return t instanceof Rl?function(s,o,a,l){if(!Nu(s.precondition,o))return a;const u=s.value.clone(),c=c0(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof hi?function(s,o,a,l){if(!Nu(s.precondition,o))return a;const u=c0(s.fieldTransforms,l,o),c=o.data;return c.setAll(mS(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Nu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function kM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cS(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function l0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ys(r,i,(s,o)=>AM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rl extends Ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hi extends Ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function u0(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,RM(o,a,n[i]))}return r}function c0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,SM(s,o,e))}return r}class Dg extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xM extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&CM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=pS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,r)=>l0(n,r))&&Ys(this.baseMutations,e.baseMutations,(n,r)=>l0(n,r))}}class Og{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return _M}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Og(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ae;function LM(t){switch(t){default:return Q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function gS(t){if(t===void 0)return fr("GRPC error has no .code"),A.UNKNOWN;switch(t){case We.OK:return A.OK;case We.CANCELLED:return A.CANCELLED;case We.UNKNOWN:return A.UNKNOWN;case We.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case We.INTERNAL:return A.INTERNAL;case We.UNAVAILABLE:return A.UNAVAILABLE;case We.UNAUTHENTICATED:return A.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case We.NOT_FOUND:return A.NOT_FOUND;case We.ALREADY_EXISTS:return A.ALREADY_EXISTS;case We.PERMISSION_DENIED:return A.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case We.ABORTED:return A.ABORTED;case We.OUT_OF_RANGE:return A.OUT_OF_RANGE;case We.UNIMPLEMENTED:return A.UNIMPLEMENTED;case We.DATA_LOSS:return A.DATA_LOSS;default:return Q()}}(ae=We||(We={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=new Os([4294967295,4294967295],0);function h0(t){const e=bM().encode(t),n=new Fb;return n.update(e),new Uint8Array(n.digest())}function d0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Os([n,r],0),new Os([i,s],0)]}class Lg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Go(`Invalid padding: ${n}`);if(r<0)throw new Go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Go(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Os.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Os.fromNumber(r)));return i.compare(MM)===1&&(i=new Os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=h0(e),[r,i]=d0(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Lg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=h0(e),[r,i]=d0(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ch(X.min(),i,new Le(ce),pr(),re())}}class Al{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Al(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class yS{constructor(e,n){this.targetId=e,this.fe=n}}class vS{constructor(e,n,r=Pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class f0{constructor(){this.ge=0,this.pe=m0(),this.ye=Pt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Al(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=m0()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class VM{constructor(e){this.Le=e,this.ke=new Map,this.qe=pr(),this.Qe=p0(),this.Ke=new Le(ce)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Ip(s))if(r===0){const o=new B(s.path);this.We(n,o,Et.newNoDocument(o,X.min()))}else Re(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ki(r).toUint8Array()}catch(l){if(l instanceof GI)return Qs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Lg(o,i,s)}catch(l){return Qs(l instanceof Go?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Ip(a.target)){const l=new B(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Et.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=re();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Ch(e,n,this.Ke,this.qe,r);return this.qe=pr(),this.Qe=p0(),this.Ke=new Le(ce),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new f0,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ft(ce),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new f0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function p0(){return new Le(B.comparator)}function m0(){return new Le(B.comparator)}const UM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$M=(()=>({and:"AND",or:"OR"}))();class jM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rp(t,e){return t.useProto3Json||Ih(e)?e:{value:e}}function kc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _S(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BM(t,e){return kc(t,e.toTimestamp())}function Hn(t){return Re(!!t),X.fromTimestamp(function(n){const r=ni(n);return new Ze(r.seconds,r.nanos)}(t))}function bg(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function wS(t){const e=Ie.fromString(t);return Re(SS(e)),e}function Ap(t,e){return bg(t.databaseId,e.path)}function jd(t,e){const n=wS(e);if(n.get(1)!==t.databaseId.projectId)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(ES(n))}function Pp(t,e){return bg(t.databaseId,e)}function zM(t){const e=wS(t);return e.length===4?Ie.emptyPath():ES(e)}function Cp(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ES(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g0(t,e,n){return{name:Ap(t,e),fields:n.value.mapValue.fields}}function HM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Re(c===void 0||typeof c=="string"),Pt.fromBase64String(c||"")):(Re(c===void 0||c instanceof Uint8Array),Pt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:gS(u.code);return new V(c,u.message||"")}(o);n=new vS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jd(t,r.document.name),s=Hn(r.document.updateTime),o=r.document.createTime?Hn(r.document.createTime):X.min(),a=new Mt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Du(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jd(t,r.document),s=r.readTime?Hn(r.readTime):X.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Du([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jd(t,r.document),s=r.removedTargetIds||[];n=new Du([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new OM(i,s),a=r.targetId;n=new yS(a,o)}}return n}function WM(t,e){let n;if(e instanceof Rl)n={update:g0(t,e.key,e.value)};else if(e instanceof Dg)n={delete:Ap(t,e.key)};else if(e instanceof hi)n={update:g0(t,e.key,e.data),updateMask:eV(e.fieldMask)};else{if(!(e instanceof xM))return Q();n={verify:Ap(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Za)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:BM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function qM(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Hn(i.updateTime):Hn(s);return o.isEqual(X.min())&&(o=Hn(s)),new PM(o,i.transformResults||[])}(n,e))):[]}function KM(t,e){return{documents:[Pp(t,e.path)]}}function GM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Pp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return IS(Pn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:os(h.field),direction:XM(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Rp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function QM(t){let e=zM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=TS(h);return d instanceof Pn&&JI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Xa(as(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ih(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Rc(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Rc(m,d)}(n.endAt)),pM(e,i,o,s,a,"F",l,u)}function YM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function TS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=as(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(n.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(as(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pn.create(n.compositeFilter.filters.map(r=>TS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function XM(t){return UM[t]}function JM(t){return FM[t]}function ZM(t){return $M[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return ct.fromServerFormat(t.fieldPath)}function IS(t){return t instanceof Qe?function(n){if(n.op==="=="){if(n0(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(t0(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(n0(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(t0(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:JM(n.op),value:n.value}}}(t):t instanceof Pn?function(n){const r=n.getFilters().map(i=>IS(i));return r.length===1?r[0]:{compositeFilter:{op:ZM(n.op),filters:r}}}(t):Q()}function eV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r,i,s=X.min(),o=X.min(),a=Pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e){this.ut=e}}function nV(t){const e=QM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ac(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(){this.on=new iV}addToCollectionParentIndex(e,n){return this.on.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(ti.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class iV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Zs(0)}static Nn(){return new Zs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.changes=new go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pa(r.mutation,i,Kt.empty(),Ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ko();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=pr();const o=fa(),a=function(){return fa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof hi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),pa(c.mutation,u,c.mutation.getFieldMask(),Ze.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new oV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fa();let i=new Le((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Kt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=aS();c.forEach(d=>{if(!s.has(d)){const m=pS(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(Ai());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,re())).next(c=>({batchId:a,changes:oS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=Ko();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ko();return this.indexManager.getCollectionParents(e,s).next(a=>k.forEach(a,l=>{const u=function(h,d){return new mo(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Et.newInvalidDocument(c)))});let a=Ko();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&pa(c.mutation,u,Kt.empty(),Ze.now()),Rh(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return k.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Hn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:nV(i.bundledQuery),readTime:Hn(i.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(){this.overlays=new Le(B.comparator),this.lr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ai();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=Ai(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ai(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ai(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DM(n,r));let s=this.lr.get(n);s===void 0&&(s=re(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.hr=new ft(et.Pr),this.Ir=new ft(et.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new et(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new et(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new B(new Ie([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new B(new Ie([])),r=new et(n,e),i=new et(n,e+1);let s=re();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return B.comparator(e.key,n.key)||ce(e.gr,n.gr)}static Tr(e,n){return ce(e.gr,n.gr)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ft(et.Pr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(ce);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),k.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new et(new B(s),0);let a=new ft(ce);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),k.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return k.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new et(n,0),i=this.yr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e){this.Cr=e,this.docs=function(){return new Le(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=pr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=pr();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Xb(Yb(c),r)<=0||(i.has(c.key)||Rh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}vr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new dV(this)}getSize(e){return k.resolve(this.size)}}class dV extends sV{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e){this.persistence=e,this.Fr=new go(n=>kg(n),xg),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Mg,this.targetCount=0,this.Nr=Zs.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),k.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.kn(n),k.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Rg(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new fV(this),this.indexManager=new rV,this.remoteDocumentCache=function(i){return new hV(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new tV(n),this.Kr=new lV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new cV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new mV(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return k.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class mV extends Zb{constructor(e){super(),this.currentSequenceNumber=e}}class Vg{constructor(e){this.persistence=e,this.Gr=new Mg,this.zr=null}static jr(e){return new Vg(e)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Hr,r=>{const i=B.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return k.or([()=>k.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ug(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gV;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Vo()<=se.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),k.resolve()):(Vo()<=se.DEBUG&&U("QueryEngine","Query:",ss(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Vo()<=se.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zn(n))):k.resolve())}zi(e,n){if(o0(n))return k.resolve(null);let r=zn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ac(n,null,"F"),r=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Ac(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return o0(n)||i.isEqual(X.min())?k.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?k.resolve(null):(Vo()<=se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ss(n)),this.Xi(e,o,n,Qb(i,-1)).next(a=>a))})}Yi(e,n){let r=new ft(iS(e));return n.forEach((i,s)=>{Rh(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Vo()<=se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",ss(n)),this.Gi.getDocumentsMatchingQuery(e,n,ti.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Le(ce),this.ns=new go(s=>kg(s),xg),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aV(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function _V(t,e,n,r){return new vV(t,e,n,r)}async function RS(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function wV(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=k.resolve();return d.forEach(v=>{m=m.next(()=>c.getEntry(l,v)).next(_=>{const E=u.docVersions.get(v);Re(E!==null),_.version.compareTo(E)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AS(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function EV(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Pt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(_,E,g){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,m,c)&&a.push(n.qr.updateTargetData(s,m))});let l=pr(),u=re();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(TV(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(X.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function TV(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=pr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function IV(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function SV(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function kp(t,e,n){const r=Z(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sl(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function y0(t,e,n){const r=Z(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=Z(l),d=h.ns.get(c);return d!==void 0?k.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,zn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(a=>(RV(r,gM(e),a),{documents:a,ls:s})))}function RV(t,e,n){let r=t.rs.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class v0{constructor(){this.activeTargetIds=TM()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AV{constructor(){this.eo=new v0,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new v0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au=null;function Bd(){return au===null?au=function(){return 268435456+Math.round(2147483648*Math.random())}():au++,"0x"+au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class xV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Bd(),l=this.So(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(U("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Qs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=CV[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Bd();return new Promise((o,a)=>{const l=new Ub;l.setWithCredentials(!0),l.listenOnce(bb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $d.NO_ERROR:const c=l.getResponseJson();U(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case $d.TIMEOUT:U(vt,`RPC '${e}' ${s} timed out`),a(new V(A.DEADLINE_EXCEEDED,"Request time out"));break;case $d.HTTP_ERROR:const h=l.getStatus();if(U(vt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(E){const g=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(m.status);a(new V(v,m.message))}else a(new V(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(A.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{U(vt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);U(vt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Bd(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ob(),a=Lb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Vb({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");U(vt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const v=new kV({co:E=>{m?U(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(U(vt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),U(vt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},lo:()=>h.close()}),_=(E,g,p)=>{E.listen(g,y=>{try{p(y)}catch(f){setTimeout(()=>{throw f},0)}})};return _(h,iu.EventType.OPEN,()=>{m||U(vt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,iu.EventType.CLOSE,()=>{m||(m=!0,U(vt,`RPC '${e}' stream ${i} transport closed`),v.Ro())}),_(h,iu.EventType.ERROR,E=>{m||(m=!0,Qs(vt,`RPC '${e}' stream ${i} transport errored:`,E),v.Ro(new V(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,iu.EventType.MESSAGE,E=>{var g;if(!m){const p=E.data[0];Re(!!p);const y=p,f=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(f){U(vt,`RPC '${e}' stream ${i} received error:`,f);const I=f.status;let R=function(j){const F=We[j];if(F!==void 0)return gS(F)}(I),T=f.message;R===void 0&&(R=A.INTERNAL,T="Unknown error status: "+I+" with message "+f.message),m=!0,v.Ro(new V(R,T)),h.close()}else U(vt,`RPC '${e}' stream ${i} received:`,p),v.Vo(p)}}),_(a,Mb.STAT_EVENT,E=>{E.stat===Q_.PROXY?U(vt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Q_.NOPROXY&&U(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){return new jM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new PS(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new V(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NV extends CS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=HM(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Hn(o.readTime):X.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Cp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ip(l)?{documents:KM(s,l)}:{query:GM(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_S(s,o.resumeToken);const u=Rp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=kc(s,o.snapshotVersion.toTimestamp());const u=Rp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=YM(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Cp(this.serializer),n.removeTarget=e,this.e_(n)}}class DV extends CS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=qM(e.writeResults,e.commitTime),r=Hn(e.commitTime);return this.listener.I_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Cp(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WM(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(A.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(A.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class LV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(fr(n),this.f_=!1):U("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{ts(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.C_.add(4),await Pl(u),u.M_.set("Unknown"),u.C_.delete(4),await xh(u)}(this))})}),this.M_=new LV(r,i)}}async function xh(t){if(ts(t))for(const e of t.v_)await e(!0)}async function Pl(t){for(const e of t.v_)await e(!1)}function kS(t,e){const n=Z(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),jg(n)?$g(n):yo(n).Ho()&&Fg(n,e))}function xS(t,e){const n=Z(t),r=yo(n);n.D_.delete(e),r.Ho()&&NS(n,e),n.D_.size===0&&(r.Ho()?r.Zo():ts(n)&&n.M_.set("Unknown"))}function Fg(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yo(t).u_(e)}function NS(t,e){t.x_.Oe(e),yo(t).c_(e)}function $g(t){t.x_=new VM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),yo(t).start(),t.M_.g_()}function jg(t){return ts(t)&&!yo(t).jo()&&t.D_.size>0}function ts(t){return Z(t).C_.size===0}function DS(t){t.x_=void 0}async function MV(t){t.D_.forEach((e,n)=>{Fg(t,e)})}async function VV(t,e){DS(t),jg(t)?(t.M_.w_(e),$g(t)):t.M_.set("Unknown")}async function UV(t,e,n){if(t.M_.set("Online"),e instanceof vS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xc(t,r)}else if(e instanceof Du?t.x_.$e(e):e instanceof yS?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(X.min()))try{const r=await AS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(Pt.EMPTY_BYTE_STRING,c.snapshotVersion)),NS(s,l);const h=new Ur(c.target,l,u,c.sequenceNumber);Fg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await xc(t,r)}}async function xc(t,e,n){if(!Sl(e))throw e;t.C_.add(1),await Pl(t),t.M_.set("Offline"),n||(n=()=>AS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await xh(t)})}function OS(t,e){return e().catch(n=>xc(t,n,e))}async function Nh(t){const e=Z(t),n=ri(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;FV(e);)try{const i=await IV(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,$V(e,i)}catch(i){await xc(e,i)}LS(e)&&bS(e)}function FV(t){return ts(t)&&t.b_.length<10}function $V(t,e){t.b_.push(e);const n=ri(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function LS(t){return ts(t)&&!ri(t).jo()&&t.b_.length>0}function bS(t){ri(t).start()}async function jV(t){ri(t).E_()}async function BV(t){const e=ri(t);for(const n of t.b_)e.P_(n.mutations)}async function zV(t,e,n){const r=t.b_.shift(),i=Og.from(r,e,n);await OS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nh(t)}async function HV(t,e){e&&ri(t).h_&&await async function(r,i){if(function(o){return LM(o)&&o!==A.ABORTED}(i.code)){const s=r.b_.shift();ri(r).Yo(),await OS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nh(r)}}(t,e),LS(t)&&bS(t)}async function w0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=ts(n);n.C_.add(3),await Pl(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await xh(n)}async function WV(t,e){const n=Z(t);e?(n.C_.delete(2),await xh(n)):e||(n.C_.add(2),await Pl(n),n.M_.set("Unknown"))}function yo(t){return t.O_||(t.O_=function(n,r,i){const s=Z(n);return s.A_(),new NV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:MV.bind(null,t),Io:VV.bind(null,t),a_:UV.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),jg(t)?$g(t):t.M_.set("Unknown")):(await t.O_.stop(),DS(t))})),t.O_}function ri(t){return t.N_||(t.N_=function(n,r,i){const s=Z(n);return s.A_(),new DV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:jV.bind(null,t),Io:HV.bind(null,t),T_:BV.bind(null,t),I_:zV.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Nh(t)):(await t.N_.stop(),t.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Bg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zg(t,e){if(fr("AsyncQueue",`${e}: ${t}`),Sl(t))return new V(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Ko(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.B_=new Le(B.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Q():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class eo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new eo(e,n,Ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qV{constructor(){this.k_=void 0,this.listeners=[]}}class KV{constructor(){this.queries=new go(e=>rS(e),Sh),this.onlineState="Unknown",this.q_=new Set}}async function MS(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qV),i)try{s.k_=await n.onListen(r)}catch(o){const a=zg(o,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Hg(n)}async function VS(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function GV(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Hg(n)}function QV(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hg(t){t.q_.forEach(e=>{e.next()})}class US{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.key=e}}class $S{constructor(e){this.key=e}}class YV{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=re(),this.mutatedKeys=re(),this._a=iS(e),this.aa=new Ls(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new E0,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Rh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),E=!0):this.ha(d,m)||(r.track({type:2,doc:m}),E=!0,(l&&this._a(m,l)>0||u&&this._a(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,c)=>function(d,m){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return v(d)-v(m)}(u.type,c.type)||this._a(u.doc,c.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,s.length!==0||l?{snapshot:new eo(this.query,e.aa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new E0,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new $S(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new FS(r))}),n}da(e){this.ia=e.ls,this.oa=re();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return eo.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class XV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JV{constructor(e){this.key=e,this.Ra=!1}}class ZV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new go(a=>rS(a),Sh),this.fa=new Map,this.ga=new Set,this.pa=new Le(B.comparator),this.ya=new Map,this.wa=new Mg,this.Sa={},this.ba=new Map,this.Da=Zs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function e4(t,e){const n=c4(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await SV(n.localStore,zn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await t4(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&kS(n.remoteStore,o)}return i}async function t4(t,e,n,r,i){t.va=(h,d,m)=>async function(_,E,g,p){let y=E.view.ca(g);y.Zi&&(y=await y0(_.localStore,E.query,!1).then(({documents:R})=>E.view.ca(R,y)));const f=p&&p.targetChanges.get(E.targetId),I=E.view.applyChanges(y,_.isPrimaryClient,f);return I0(_,E.targetId,I.Ta),I.snapshot}(t,h,d,m);const s=await y0(t.localStore,e,!0),o=new YV(e,s.ls),a=o.ca(s.documents),l=Al.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);I0(t,n,u.Ta);const c=new XV(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function n4(t,e){const n=Z(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Sh(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await kp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),xS(n.remoteStore,r.targetId),xp(n,r.targetId)}).catch(Il)):(xp(n,r.targetId),await kp(n.localStore,r.targetId,!0))}async function r4(t,e,n){const r=h4(t);try{const i=await function(o,a){const l=Z(o),u=Ze.now(),c=a.reduce((m,v)=>m.add(v.key),re());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=pr(),_=re();return l.ss.getEntries(m,c).next(E=>{v=E,v.forEach((g,p)=>{p.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,v)).next(E=>{h=E;const g=[];for(const p of a){const y=kM(p,h.get(p.key).overlayedDocument);y!=null&&g.push(new hi(p.key,y,QI(y.value.mapValue),Sn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,g,a)}).next(E=>{d=E;const g=E.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(m,E.batchId,g)})}).then(()=>({batchId:d.batchId,changes:oS(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Le(ce)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Cl(r,i.changes),await Nh(r.remoteStore)}catch(i){const s=zg(i,"Failed to persist write");n.reject(s)}}async function jS(t,e){const n=Z(t);try{const r=await EV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Re(o.Ra):i.removedDocuments.size>0&&(Re(o.Ra),o.Ra=!1))}),await Cl(n,r,e)}catch(r){await Il(r)}}function T0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&Hg(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function i4(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new Le(B.comparator);o=o.insert(s,Et.newNoDocument(s,X.min()));const a=re().add(s),l=new Ch(X.min(),new Map,new Le(ce),o,a);await jS(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Wg(r)}else await kp(r.localStore,e,!1).then(()=>xp(r,e,n)).catch(Il)}async function s4(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await wV(n.localStore,e);zS(n,r,null),BS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cl(n,i)}catch(i){await Il(i)}}async function o4(t,e,n){const r=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Re(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);zS(r,e,n),BS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cl(r,i)}catch(i){await Il(i)}}function BS(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function zS(t,e,n){const r=Z(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function xp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||HS(t,r)})}function HS(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(xS(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Wg(t))}function I0(t,e,n){for(const r of n)r instanceof FS?(t.wa.addReference(r.key,e),a4(t,r)):r instanceof $S?(U("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||HS(t,r.key)):Q()}function a4(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ga.add(r),Wg(t))}function Wg(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new B(Ie.fromString(e)),r=t.Da.next();t.ya.set(r,new JV(n)),t.pa=t.pa.insert(n,r),kS(t.remoteStore,new Ur(zn(Ng(n.path)),r,"TargetPurposeLimboResolution",Rg._e))}}async function Cl(t,e,n){const r=Z(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Ug.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=Z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(u,d=>k.forEach(d.ki,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>k.forEach(d.qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Sl(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.ts.get(d),v=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(d,_)}}}(r.localStore,s))}async function l4(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await RS(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new V(A.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cl(n,r._s)}}function u4(t,e){const n=Z(t),r=n.ya.get(e);if(r&&r.Ra)return re().add(r.key);{let i=re();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function c4(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i4.bind(null,e),e.Va.a_=GV.bind(null,e.eventManager),e.Va.Fa=QV.bind(null,e.eventManager),e}function h4(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=s4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=o4.bind(null,e),e}class S0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=kh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _V(this.persistence,new yV,e.initialUser,this.serializer)}createPersistence(e){return new pV(Vg.jr,this.serializer)}createSharedClientState(e){return new AV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class d4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>T0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=l4.bind(null,this.syncEngine),await WV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KV}()}createDatastore(e){const n=kh(e.databaseInfo.databaseId),r=function(s){return new xV(s)}(e.databaseInfo);return function(s,o,a,l){return new OV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new bV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>T0(this.syncEngine,n,0),function(){return _0.D()?new _0:new PV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new ZV(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);U("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Pl(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=qI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function R0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await m4(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>w0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>w0(e.remoteStore,s)),t._onlineComponents=e}function p4(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function m4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!p4(n))throw n;Qs("Error using user provided cache. Falling back to memory cache: "+n),await Hd(t,new S0)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Hd(t,new S0);return t._offlineComponents}async function qS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await R0(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await R0(t,new d4))),t._onlineComponents}function g4(t){return qS(t).then(e=>e.syncEngine)}async function Np(t){const e=await qS(t),n=e.eventManager;return n.onListen=e4.bind(null,e.syncEngine),n.onUnlisten=n4.bind(null,e.syncEngine),n}function y4(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new WS({next:d=>{o.enqueueAndForget(()=>VS(s,h)),d.fromCache&&l.source==="server"?u.reject(new V(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new US(a,c,{includeMetadataChanges:!0,J_:!0});return MS(s,h)}(await Np(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t,e,n){if(!n)throw new V(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function v4(t,e,n,r){if(e===!0&&r===!0)throw new V(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function P0(t){if(!B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function C0(t){if(B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dh(t);throw new V(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function _4(t,e){if(e<=0)throw new V(A.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}v4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new k0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new k0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $b;switch(r.type){case"firstParty":return new Hb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=A0.get(n);r&&(U("ComponentProvider","Removing Datastore"),A0.delete(n),r.terminate())}(this),Promise.resolve()}}function w4(t,e,n,r={}){var i;const s=(t=Wn(t,Oh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=$1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(u)}t._authCredentials=new jb(new WI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class Xr extends _r{constructor(e,n,r){super(e,n,Ng(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new B(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function qg(t,e,...n){if(t=Oe(t),GS("collection","path",e),t instanceof Oh){const r=Ie.fromString(e,...n);return C0(r),new Xr(t,null,r)}{if(!(t instanceof jt||t instanceof Xr))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return C0(r),new Xr(t.firestore,null,r)}}function QS(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=qI.newId()),GS("doc","path",e),t instanceof Oh){const r=Ie.fromString(e,...n);return P0(r),new jt(t,null,new B(r))}{if(!(t instanceof jt||t instanceof Xr))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return P0(r),new jt(t.firestore,t instanceof Xr?t.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new PS(this,"async_queue_retry"),this.iu=()=>{const n=zd();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=zd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Yr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Sl(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Bg.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function x0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Qi extends Oh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new E4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||YS(this),this._firestoreClient.terminate()}}function T4(t,e){const n=typeof t=="object"?t:Fm(),r=typeof t=="string"?t:e||"(default)",i=rh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=V1("firestore");s&&w4(i,...s)}return i}function Kg(t){return t._firestoreClient||YS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function YS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new nM(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,KS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new f4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this._byteString=e}static fromBase64String(e){try{return new to(Pt.fromBase64String(e))}catch(n){throw new V(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new to(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=/^__.*__$/;class S4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rl(e,this.data,n,this.fieldTransforms)}}class XS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function JS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Yg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Yg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Nc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(JS(this.Iu)&&I4.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class R4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kh(e)}pu(e,n,r,i=!1){return new Yg({Iu:e,methodName:n,gu:r,path:ct.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xg(t){const e=t._freezeSettings(),n=kh(t._databaseId);return new R4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function A4(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Jg("Data must be an object, but it was:",o,r);const a=ZS(r,o);let l,u;if(s.merge)l=new Kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Dp(e,h,n);if(!o.contains(d))throw new V(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tR(c,d)||c.push(d)}l=new Kt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new S4(new Mt(a),l,u)}class bh extends Gg{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bh}}function P4(t,e,n,r){const i=t.pu(1,e,n);Jg("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();es(r,(l,u)=>{const c=Zg(e,l,n);u=Oe(u);const h=i.Ru(c);if(u instanceof bh)s.push(c);else{const d=kl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Kt(s);return new XS(o,a,i.fieldTransforms)}function C4(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Dp(e,r,n)],l=[i];if(s.length%2!=0)throw new V(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Dp(e,s[d])),l.push(s[d+1]);const u=[],c=Mt.empty();for(let d=a.length-1;d>=0;--d)if(!tR(u,a[d])){const m=a[d];let v=l[d];v=Oe(v);const _=o.Ru(m);if(v instanceof bh)u.push(m);else{const E=kl(v,_);E!=null&&(u.push(m),c.set(m,E))}}const h=new Kt(u);return new XS(c,h,o.fieldTransforms)}function k4(t,e,n,r=!1){return kl(n,t.pu(r?4:3,e))}function kl(t,e){if(eR(t=Oe(t)))return Jg("Unsupported field value:",e,t),ZS(t,e);if(t instanceof Gg)return function(r,i){if(!JS(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=kl(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ze.fromDate(r);return{timestampValue:kc(i.serializer,s)}}if(r instanceof Ze){const s=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kc(i.serializer,s)}}if(r instanceof Qg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof to)return{bytesValue:_S(i.serializer,r._byteString)};if(r instanceof jt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Dh(r)}`)}(t,e)}function ZS(t,e){const n={};return KI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,i)=>{const s=kl(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Qg||t instanceof to||t instanceof jt||t instanceof Gg)}function Jg(t,e,n){if(!eR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Dh(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Dp(t,e,n){if((e=Oe(e))instanceof Lh)return e._internalPath;if(typeof e=="string")return Zg(t,e);throw Nc("Field path arguments must be of type string or ",t,!1,void 0,n)}const x4=new RegExp("[~\\*/\\[\\]]");function Zg(t,e,n){if(e.search(x4)>=0)throw Nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lh(...e.split("."))._internalPath}catch{throw Nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(A.INVALID_ARGUMENT,a+t+l)}function tR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new N4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class N4 extends nR{data(){return super.data()}}function Mh(t,e){return typeof e=="string"?Zg(t,e):e instanceof Lh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ey{}class ty extends ey{}function iR(t,e,...n){let r=[];e instanceof ey&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ny).length,a=s.filter(l=>l instanceof Vh).length;if(o>1||o>0&&a>0)throw new V(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Vh extends ty{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Vh(e,n,r)}_apply(e){const n=this._parse(e);return oR(e._query,n),new _r(e.firestore,e.converter,Sp(e._query,n))}_parse(e){const n=Xg(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new V(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){D0(h,c);const m=[];for(const v of h)m.push(N0(l,s,v));d={arrayValue:{values:m}}}else d=N0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||D0(h,c),d=k4(a,o,h,c==="in"||c==="not-in");return Qe.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function D4(t,e,n){const r=e,i=Mh("where",t);return Vh._create(i,r,n)}class ny extends ey{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ny(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)oR(o,l),o=Sp(o,l)}(e._query,n),new _r(e.firestore,e.converter,Sp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ry extends ty{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ry(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new V(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xa(s,o)}(e._query,this._field,this._direction);return new _r(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new mo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function sR(t,e="asc"){const n=e,r=Mh("orderBy",t);return ry._create(r,n)}class iy extends ty{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new iy(e,n,r)}_apply(e){return new _r(e.firestore,e.converter,Ac(e._query,this._limit,this._limitType))}}function O4(t){return _4("limit",t),iy._create("limit",t,"F")}function N0(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new V(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nS(e)&&n.indexOf("/")!==-1)throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!B.isDocumentKey(r))throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return e0(t,new B(r))}if(n instanceof jt)return e0(t,n._key);throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dh(n)}.`)}function D0(t,e){if(!Array.isArray(t)||t.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class L4{convertValue(e,n="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qg(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=ni(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Re(SS(r));const i=new Qa(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aR extends nR{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Mh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ou extends aR{data(e={}){return super.data(e)}}class lR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ou(this._firestore,this._userDataWriter,r.key,r,new Qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ou(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ou(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:M4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function M4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class sy extends L4{constructor(e){super(),this.firestore=e}convertBytes(e){return new to(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function V4(t){t=Wn(t,_r);const e=Wn(t.firestore,Qi),n=Kg(e),r=new sy(e);return rR(t._query),y4(n,t._query).then(i=>new lR(e,r,t,i))}function U4(t,e,n,...r){t=Wn(t,jt);const i=Wn(t.firestore,Qi),s=Xg(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof Lh?C4(s,"updateDoc",t._key,e,n,r):P4(s,"updateDoc",t._key,e),oy(i,[o.toMutation(t._key,Sn.exists(!0))])}function F4(t){return oy(Wn(t.firestore,Qi),[new Dg(t._key,Sn.none())])}function $4(t,e){const n=Wn(t.firestore,Qi),r=QS(t),i=b4(t.converter,e);return oy(n,[A4(Xg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Sn.exists(!1))]).then(()=>r)}function j4(t,...e){var n,r,i;t=Oe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||x0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(x0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof jt)u=Wn(t.firestore,Qi),c=Ng(t._key.path),l={next:h=>{e[o]&&e[o](B4(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Wn(t,_r);u=Wn(h.firestore,Qi),c=h._query;const d=new sy(u);l={next:m=>{e[o]&&e[o](new lR(u,d,h,m))},error:e[o+1],complete:e[o+2]},rR(t._query)}return function(d,m,v,_){const E=new WS(_),g=new US(m,E,v);return d.asyncQueue.enqueueAndForget(async()=>MS(await Np(d),g)),()=>{E.Na(),d.asyncQueue.enqueueAndForget(async()=>VS(await Np(d),g))}}(Kg(u),c,a,l)}function oy(t,e){return function(r,i){const s=new Yr;return r.asyncQueue.enqueueAndForget(async()=>r4(await g4(r),i,s)),s.promise}(Kg(t),e)}function B4(t,e,n){const r=n.docs.get(e._key),i=new sy(t);return new aR(t,i,e._key,r,new Qo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){po=i})(Ji),Bi(new ei("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Qi(new Bb(r.getProvider("auth-internal")),new qb(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),$n(Y_,"4.3.2",e),$n(Y_,"4.3.2","esm2017")})();const z4={apiKey:"AIzaSyDq3IozZH2o-8gy42OQ3ANlpNOE63aDcM8",projectId:"nwitter-reloaded-6f54d",authDomain:"nwitter-reloaded-6f54d.firebaseapp.com",storageBucket:"nwitter-reloaded-6f54d.appspot.com",messagingSenderId:"503758695436",appId:"1:503758695436:web:4730d658fa003f7fda5229"},ay=z1(z4),wr=_O(ay),Uh=T4(ay),ly=kL(ay),H4=le.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
	gap: 20px;
	padding: 50px 0px;
	width: 100%;
	height: 100%;
	max-width: 860px;
`,W4=le.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`,Wd=le.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid #CED46A;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	cursor: pointer;
	svg {
		width: 30px;
		fill: #CED46A;
	}
	&.log-out {
		border-color: tomato;
		svg {
			fill: tomato;
		}
	}
`;function q4(){const t=lo(),e=async()=>{confirm("Are you sure you want to log out?")?(await wr.signOut(),t("/login")):t("/")};return O.jsxs(H4,{children:[O.jsxs(W4,{children:[O.jsx(wu,{to:"/",children:O.jsx(Wd,{children:O.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:[O.jsx("path",{d:"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"}),O.jsx("path",{d:"M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"})]})})}),O.jsx(wu,{to:"/profile",children:O.jsx(Wd,{children:O.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:O.jsx("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",clipRule:"evenodd"})})})}),O.jsx(wu,{to:"/logout",onClick:e,children:O.jsx(Wd,{className:"log-out",children:O.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:O.jsx("path",{fillRule:"evenodd",d:"M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z",clipRule:"evenodd"})})})})]}),O.jsx(lk,{})]})}const K4=le.div`
	height: 180vh;
	display: flex;
	justify-content: center;
	align-items: center;
`,G4=le.span`
	font-size: 24px;
`;function Q4(){return O.jsx(K4,{children:O.jsx(G4,{children:"Loading..."})})}function Y4({children:t}){return wr.currentUser===null?O.jsx(ak,{to:"/login"}):t}const X4=le.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,J4=le.textarea`
	font-size: 16px;
	color: #CED46A;
	background-color: #07553B;
	padding: 20px;
	border: 2px solid #CED46A;
	border-radius: 20px;
	width: 100%;
	resize: none;
	&:focus {
		outline: none;
		color: white;
		border-color: white;
	}
	&::placeholder {
		font-size: 16px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
	}
`,Z4=le.label`
	font-size: 14px;
	font-weight: 600;
	color: #CED46A;
	background-color: #07553B;
	padding: 10px 0px;
	text-align: center;
	border: 1px solid #CED46A;
	border-radius: 20px;
	cursor: pointer;
`,eU=le.input`
	display: none;
`,tU=le.input`
	font-size: 16px;
	color: #07553B;
	background-color: #CED46A;
	padding: 10px 0px;
	text-align: center;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	&:hover,
	&:active {
		opacity: 0.8;
	}
`;function nU(){const[t,e]=P.useState(!1),[n,r]=P.useState(""),[i,s]=P.useState(null),o=u=>{r(u.target.value)},a=u=>{const{files:c}=u.target;c&&c.length===1&&s(c[0])},l=async u=>{u.preventDefault();const c=wr.currentUser;if(!(t||n===""||n.length>180))try{e(!0);const h=await $4(qg(Uh,"tweets"),{tweet:n,createdAt:Date.now(),username:(c==null?void 0:c.displayName)||"Anonymous",userId:(c==null?void 0:c.uid)||"guest"});if(i)if(i.size<=1024*1024){const d=tg(ly,`tweets/${(c==null?void 0:c.uid)||"guest"}/${h.id}}`),m=await jT(d,i),v=await BT(m.ref);await U4(h,{photo:v})}else console.log(`file size more than 1MB : ${i.size}`);r(""),s(null)}catch(h){console.log(h)}finally{e(!1)}};return O.jsxs(X4,{onSubmit:l,children:[O.jsx(J4,{required:!0,value:n,onChange:o,rows:5,maxLength:180,placeholder:"What is happening?!"}),O.jsx(Z4,{htmlFor:"file",children:i?"Photo added ✅":"Add Photo"}),O.jsx(eU,{type:"file",id:"file",onChange:a,accept:"image/*"}),O.jsx(tU,{type:"submit",value:t?"Posting...":"Post Tweet"})]})}const rU=le.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	padding: 20px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 15px;
`,O0=le.div``,iU=le.span`
	font-size: 18px;
	font-weight: 600;
`,sU=le.p`
	font-size: 18px;
	margin: 10px 0px;
`,oU=le.img`
	width: 100px;
	height: 100px;
	border-radius: 15px;
`,aU=le.button`
	font-size: 12px;
	font-weight: 600;
	color: white;
	background-color: tomato;
	border: 0;
	border-radius: 5px;
	padding: 5px 10px;
	text-transform: uppercase;
	cursor: pointer;
`;function uR({id:t,userId:e,username:n,photo:r,tweet:i}){const s=wr.currentUser,o=async()=>{if(!(!confirm("Are you sure you want to delete this tweet?")||(s==null?void 0:s.uid)!==e))try{if(await F4(QS(Uh,"tweets",t)),r){const l=tg(ly,`tweets/${s.uid}/${t}}`);await CL(l)}}catch(l){console.log(l)}};return O.jsxs(rU,{children:[O.jsxs(O0,{children:[O.jsx(iU,{children:n}),O.jsx(sU,{children:i}),(s==null?void 0:s.uid)===e?O.jsx(aU,{onClick:o,children:"Delete"}):null]}),r?O.jsx(O0,{children:O.jsx(oU,{src:r})}):null]})}const lU=le.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;function uU(){const[t,e]=P.useState([]);return P.useEffect(()=>{let n=null;return(async()=>{const i=iR(qg(Uh,"tweets"),sR("createdAt","desc"));n=await j4(i,s=>{const o=s.docs.map(a=>{const{tweet:l,createdAt:u,userId:c,username:h,photo:d}=a.data();return{tweet:l,createdAt:u,userId:c,username:h,photo:d,id:a.id}});e(o)})})(),()=>{n&&n()}},[]),O.jsx(lU,{children:t.map(n=>O.jsx(uR,{...n},n.id))})}const cU=le.div`
	display: grid;
	grid-template-rows: 1fr 5fr;
	overflow-y: scroll;
	gap: 50px;
`;function L0(){return O.jsxs(cU,{children:[O.jsx(nU,{}),O.jsx(uU,{})]})}const hU=le.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`,dU=le.label`
	width: 80px;
	height: 80px;
	overflow: hidden;
	border-radius: 50%;
	background-color: #07553b;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		width: 50px;
	}
`,fU=le.img`
	width: 100%;
`,pU=le.input`
	display: none;
`,mU=le.span`
	font-size: 22px;
`,gU=le.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;function yU(){const t=wr.currentUser,[e,n]=P.useState(t==null?void 0:t.photoURL),[r,i]=P.useState([]),s=async a=>{const{files:l}=a.target;if(l&&l.length===1){const u=l[0];if(u.size<=1024*1024){const c=tg(ly,`avatars/${t==null?void 0:t.uid}`),h=await jT(c,u),d=await BT(h.ref);n(d),t&&await fT(t,{photoURL:d})}else console.log(`file size more than 1MB : ${u.size}`)}},o=async()=>{const a=iR(qg(Uh,"tweets"),D4("userId","==",t==null?void 0:t.uid),sR("createdAt","desc"),O4(25)),u=(await V4(a)).docs.map(c=>{const{tweet:h,createdAt:d,userId:m,username:v,photo:_}=c.data();return{tweet:h,createdAt:d,userId:m,username:v,photo:_,id:c.id}});i(u)};return P.useEffect(()=>{o()},[]),O.jsxs(hU,{children:[O.jsx(dU,{htmlFor:"avatar",children:e?O.jsx(fU,{src:e}):O.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:O.jsx("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",clipRule:"evenodd"})})}),O.jsx(pU,{onChange:s,id:"avatar",type:"file",accept:"image/*"}),O.jsx(mU,{children:(t==null?void 0:t.displayName)??"Anonymous"}),O.jsx(gU,{children:r.map(a=>O.jsx(uR,{...a},a.id))})]})}const cR=le.div`
	height: 100%;
	width: 420px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0px;
`,hR=le.h1`
	font-size: 42px;
`,dR=le.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 50px;
	margin-bottom: 10px;
`,Pi=le.input`
	font-size: 16px;
	width: 100%;
	padding: 10px 20px;
	border-radius: 50px;
	border: none;
	&[type="submit"] {
		background-color: #CED46A;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
`,fR=le.span`
	font-weight: 600;
	color: tomato;
`,vU=le.span`
	margin-top: 20px;
	a {
		color: #1d9bf0;
	}
`,_U=le.span`
	background-color: #ced46a;
	color: #07553b;
	font-weight: 600;
	margin-top: 50px;
	padding: 10px 20px;
	border-radius: 50px;
	border: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`,wU=le.img`
	height: 25px;
`;function pR(){const t=lo(),e=async()=>{try{const n=new Zn;await C2(wr,n),t("/")}catch(n){console.log(n)}};return O.jsxs(_U,{onClick:e,children:[O.jsx(wU,{src:"/xtwitter-clone/github-logo.svg"}),"Continue with Github"]})}function EU(){const t=lo(),[e,n]=P.useState(!1),[r,i]=P.useState(""),[s,o]=P.useState(""),[a,l]=P.useState(""),u=h=>{const{target:{name:d,value:m}}=h;d==="email"?i(m):d==="password"&&o(m)},c=async h=>{if(h.preventDefault(),l(""),console.log(r,s),!(e||r===""||s===""))try{n(!0),await i2(wr,r,s),t("/")}catch(d){d instanceof dn&&l(d.message)}finally{n(!1)}};return O.jsxs(cR,{children:[O.jsx(hR,{children:"Login - English Tweet"}),O.jsxs(dR,{onSubmit:c,children:[O.jsx(Pi,{onChange:u,name:"email",value:r,placeholder:"Email",type:"email",required:!0}),O.jsx(Pi,{onChange:u,name:"password",value:s,placeholder:"Password",type:"password",required:!0}),O.jsx(Pi,{type:"submit",value:e?"Loading...":"Sign In"})]}),a!==""?O.jsx(fR,{children:a}):null,O.jsxs(vU,{children:["Don't have an account?"," ",O.jsx(wu,{to:"/create-account",children:"Create one →"})]}),O.jsx(pR,{})]})}function TU(){const t=lo(),[e,n]=P.useState(!1),[r,i]=P.useState(""),[s,o]=P.useState(""),[a,l]=P.useState(""),[u,c]=P.useState(""),h=m=>{const{target:{name:v,value:_}}=m;v==="name"?i(_):v==="email"?o(_):v==="password"&&l(_)},d=async m=>{if(m.preventDefault(),c(""),console.log(r,s,a),!(e||r===""||s===""||a===""))try{n(!0);const v=await r2(wr,s,a);console.log(v.user),await fT(v.user,{displayName:r}),t("/")}catch(v){v instanceof dn&&c(v.message)}finally{n(!1)}};return O.jsxs(cR,{children:[O.jsx(hR,{children:"Join - English Tweet"}),O.jsxs(dR,{onSubmit:d,children:[O.jsx(Pi,{onChange:h,name:"name",value:r,placeholder:"Name",type:"text",required:!0}),O.jsx(Pi,{onChange:h,name:"email",value:s,placeholder:"Email",type:"email",required:!0}),O.jsx(Pi,{onChange:h,name:"password",value:a,placeholder:"Password",type:"password",required:!0}),O.jsx(Pi,{type:"submit",value:e?"Loading...":"Create Account"})]}),u!==""?O.jsx(fR,{children:u}):null,O.jsx(pR,{})]})}const IU=mk([{path:"/",element:O.jsx(Y4,{children:O.jsx(q4,{})}),children:[{path:"",element:O.jsx(L0,{})},{path:"logout",element:O.jsx(L0,{})},{path:"profile",element:O.jsx(yU,{})}]},{path:"/login",element:O.jsx(EU,{})},{path:"/create-account",element:O.jsx(TU,{})}],{basename:"/xtwitter-clone"}),SU=x1`
  ${D1};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #07553B;
    color: #CED46A;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,RU=le.div`
	height: 100vh;
	display: flex;
	justify-content: center;
`;function AU(){const[t,e]=P.useState(!0),n=async()=>{await wr.authStateReady(),e(!1)};return P.useEffect(()=>{n()}),O.jsxs(RU,{children:[O.jsx(SU,{}),t?O.jsx(Q4,{}):O.jsx(Ik,{router:IU})]})}qd.createRoot(document.getElementById("root")).render(O.jsx(wn.StrictMode,{children:O.jsx(AU,{})}));
