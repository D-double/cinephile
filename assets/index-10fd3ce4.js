(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const _M="modulepreload",yM=function(c,e){return new URL(c,e).href},wa={},r4=function(e,t,a){if(!t||t.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=yM(i,a),i in wa)return;wa[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(!!a)for(let f=n.length-1;f>=0;f--){const u=n[f];if(u.href===i&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":_M,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((f,u)=>{l.addEventListener("load",f),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})};function P9(c,e){const t=Object.create(null),a=c.split(",");for(let n=0;n<a.length;n++)t[a[n]]=!0;return e?n=>!!t[n.toLowerCase()]:n=>!!t[n]}const y1={},f6=[],O2=()=>{},wM=()=>!1,xM=/^on[^a-z]/,x5=c=>xM.test(c),R9=c=>c.startsWith("onUpdate:"),O1=Object.assign,O9=(c,e)=>{const t=c.indexOf(e);t>-1&&c.splice(t,1)},SM=Object.prototype.hasOwnProperty,f1=(c,e)=>SM.call(c,e),Z=Array.isArray,u6=c=>S5(c)==="[object Map]",Ur=c=>S5(c)==="[object Set]",t1=c=>typeof c=="function",D1=c=>typeof c=="string",D9=c=>typeof c=="symbol",N1=c=>c!==null&&typeof c=="object",$r=c=>N1(c)&&t1(c.then)&&t1(c.catch),qr=Object.prototype.toString,S5=c=>qr.call(c),NM=c=>S5(c).slice(8,-1),Wr=c=>S5(c)==="[object Object]",F9=c=>D1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,I8=P9(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N5=c=>{const e=Object.create(null);return t=>e[t]||(e[t]=c(t))},AM=/-(\w)/g,c3=N5(c=>c.replace(AM,(e,t)=>t?t.toUpperCase():"")),kM=/\B([A-Z])/g,N6=N5(c=>c.replace(kM,"-$1").toLowerCase()),A5=N5(c=>c.charAt(0).toUpperCase()+c.slice(1)),T7=N5(c=>c?`on${A5(c)}`:""),z0=(c,e)=>!Object.is(c,e),P8=(c,e)=>{for(let t=0;t<c.length;t++)c[t](e)},G8=(c,e,t)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:t})},we=c=>{const e=parseFloat(c);return isNaN(e)?c:e},TM=c=>{const e=D1(c)?Number(c):NaN;return isNaN(e)?c:e};let xa;const xe=()=>xa||(xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function B9(c){if(Z(c)){const e={};for(let t=0;t<c.length;t++){const a=c[t],n=D1(a)?RM(a):B9(a);if(n)for(const i in n)e[i]=n[i]}return e}else{if(D1(c))return c;if(N1(c))return c}}const EM=/;(?![^(]*\))/g,IM=/:([^]+)/,PM=/\/\*[^]*?\*\//g;function RM(c){const e={};return c.replace(PM,"").split(EM).forEach(t=>{if(t){const a=t.split(IM);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function F3(c){let e="";if(D1(c))e=c;else if(Z(c))for(let t=0;t<c.length;t++){const a=F3(c[t]);a&&(e+=a+" ")}else if(N1(c))for(const t in c)c[t]&&(e+=t+" ");return e.trim()}const OM="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",DM=P9(OM);function Gr(c){return!!c||c===""}const a2=c=>D1(c)?c:c==null?"":Z(c)||N1(c)&&(c.toString===qr||!t1(c.toString))?JSON.stringify(c,jr,2):String(c),jr=(c,e)=>e&&e.__v_isRef?jr(c,e.value):u6(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[a,n])=>(t[`${a} =>`]=n,t),{})}:Ur(e)?{[`Set(${e.size})`]:[...e.values()]}:N1(e)&&!Z(e)&&!Wr(e)?String(e):e;let g2;class Kr{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=g2,!e&&g2&&(this.index=(g2.scopes||(g2.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=g2;try{return g2=this,e()}finally{g2=t}}}on(){g2=this}off(){g2=this.parent}stop(e){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Yr(c){return new Kr(c)}function FM(c,e=g2){e&&e.active&&e.effects.push(c)}function Zr(){return g2}function BM(c){g2&&g2.cleanups.push(c)}const U9=c=>{const e=new Set(c);return e.w=0,e.n=0,e},Xr=c=>(c.w&Y3)>0,Qr=c=>(c.n&Y3)>0,UM=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=Y3},$M=c=>{const{deps:e}=c;if(e.length){let t=0;for(let a=0;a<e.length;a++){const n=e[a];Xr(n)&&!Qr(n)?n.delete(c):e[t++]=n,n.w&=~Y3,n.n&=~Y3}e.length=t}},j8=new WeakMap;let Z6=0,Y3=1;const Se=30;let k2;const L4=Symbol(""),Ne=Symbol("");class $9{constructor(e,t=null,a){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,FM(this,a)}run(){if(!this.active)return this.fn();let e=k2,t=B3;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=k2,k2=this,B3=!0,Y3=1<<++Z6,Z6<=Se?UM(this):Sa(this),this.fn()}finally{Z6<=Se&&$M(this),Y3=1<<--Z6,k2=this.parent,B3=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){k2===this?this.deferStop=!0:this.active&&(Sa(this),this.onStop&&this.onStop(),this.active=!1)}}function Sa(c){const{deps:e}=c;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(c);e.length=0}}let B3=!0;const Jr=[];function A6(){Jr.push(B3),B3=!1}function k6(){const c=Jr.pop();B3=c===void 0?!0:c}function m2(c,e,t){if(B3&&k2){let a=j8.get(c);a||j8.set(c,a=new Map);let n=a.get(t);n||a.set(t,n=U9()),es(n)}}function es(c,e){let t=!1;Z6<=Se?Qr(c)||(c.n|=Y3,t=!Xr(c)):t=!c.has(k2),t&&(c.add(k2),k2.deps.push(c))}function f3(c,e,t,a,n,i){const r=j8.get(c);if(!r)return;let s=[];if(e==="clear")s=[...r.values()];else if(t==="length"&&Z(c)){const o=Number(a);r.forEach((l,f)=>{(f==="length"||f>=o)&&s.push(l)})}else switch(t!==void 0&&s.push(r.get(t)),e){case"add":Z(c)?F9(t)&&s.push(r.get("length")):(s.push(r.get(L4)),u6(c)&&s.push(r.get(Ne)));break;case"delete":Z(c)||(s.push(r.get(L4)),u6(c)&&s.push(r.get(Ne)));break;case"set":u6(c)&&s.push(r.get(L4));break}if(s.length===1)s[0]&&Ae(s[0]);else{const o=[];for(const l of s)l&&o.push(...l);Ae(U9(o))}}function Ae(c,e){const t=Z(c)?c:[...c];for(const a of t)a.computed&&Na(a);for(const a of t)a.computed||Na(a)}function Na(c,e){(c!==k2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}function qM(c,e){var t;return(t=j8.get(c))==null?void 0:t.get(e)}const WM=P9("__proto__,__v_isRef,__isVue"),cs=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(D9)),GM=q9(),jM=q9(!1,!0),KM=q9(!0),Aa=YM();function YM(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...t){const a=l1(this);for(let i=0,r=this.length;i<r;i++)m2(a,"get",i+"");const n=a[e](...t);return n===-1||n===!1?a[e](...t.map(l1)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...t){A6();const a=l1(this)[e].apply(this,t);return k6(),a}}),c}function ZM(c){const e=l1(this);return m2(e,"has",c),e.hasOwnProperty(c)}function q9(c=!1,e=!1){return function(a,n,i){if(n==="__v_isReactive")return!c;if(n==="__v_isReadonly")return c;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&i===(c?e?hV:rs:e?is:ns).get(a))return a;const r=Z(a);if(!c){if(r&&f1(Aa,n))return Reflect.get(Aa,n,i);if(n==="hasOwnProperty")return ZM}const s=Reflect.get(a,n,i);return(D9(n)?cs.has(n):WM(n))||(c||m2(a,"get",n),e)?s:P1(s)?r&&F9(n)?s:s.value:N1(s)?c?os(s):u3(s):s}}const XM=ts(),QM=ts(!0);function ts(c=!1){return function(t,a,n,i){let r=t[a];if(M6(r)&&P1(r)&&!P1(n))return!1;if(!c&&(!K8(n)&&!M6(n)&&(r=l1(r),n=l1(n)),!Z(t)&&P1(r)&&!P1(n)))return r.value=n,!0;const s=Z(t)&&F9(a)?Number(a)<t.length:f1(t,a),o=Reflect.set(t,a,n,i);return t===l1(i)&&(s?z0(n,r)&&f3(t,"set",a,n):f3(t,"add",a,n)),o}}function JM(c,e){const t=f1(c,e);c[e];const a=Reflect.deleteProperty(c,e);return a&&t&&f3(c,"delete",e,void 0),a}function eV(c,e){const t=Reflect.has(c,e);return(!D9(e)||!cs.has(e))&&m2(c,"has",e),t}function cV(c){return m2(c,"iterate",Z(c)?"length":L4),Reflect.ownKeys(c)}const as={get:GM,set:XM,deleteProperty:JM,has:eV,ownKeys:cV},tV={get:KM,set(c,e){return!0},deleteProperty(c,e){return!0}},aV=O1({},as,{get:jM,set:QM}),W9=c=>c,k5=c=>Reflect.getPrototypeOf(c);function f8(c,e,t=!1,a=!1){c=c.__v_raw;const n=l1(c),i=l1(e);t||(e!==i&&m2(n,"get",e),m2(n,"get",i));const{has:r}=k5(n),s=a?W9:t?K9:g0;if(r.call(n,e))return s(c.get(e));if(r.call(n,i))return s(c.get(i));c!==n&&c.get(e)}function u8(c,e=!1){const t=this.__v_raw,a=l1(t),n=l1(c);return e||(c!==n&&m2(a,"has",c),m2(a,"has",n)),c===n?t.has(c):t.has(c)||t.has(n)}function h8(c,e=!1){return c=c.__v_raw,!e&&m2(l1(c),"iterate",L4),Reflect.get(c,"size",c)}function ka(c){c=l1(c);const e=l1(this);return k5(e).has.call(e,c)||(e.add(c),f3(e,"add",c,c)),this}function Ta(c,e){e=l1(e);const t=l1(this),{has:a,get:n}=k5(t);let i=a.call(t,c);i||(c=l1(c),i=a.call(t,c));const r=n.call(t,c);return t.set(c,e),i?z0(e,r)&&f3(t,"set",c,e):f3(t,"add",c,e),this}function Ea(c){const e=l1(this),{has:t,get:a}=k5(e);let n=t.call(e,c);n||(c=l1(c),n=t.call(e,c)),a&&a.call(e,c);const i=e.delete(c);return n&&f3(e,"delete",c,void 0),i}function Ia(){const c=l1(this),e=c.size!==0,t=c.clear();return e&&f3(c,"clear",void 0,void 0),t}function d8(c,e){return function(a,n){const i=this,r=i.__v_raw,s=l1(r),o=e?W9:c?K9:g0;return!c&&m2(s,"iterate",L4),r.forEach((l,f)=>a.call(n,o(l),o(f),i))}}function m8(c,e,t){return function(...a){const n=this.__v_raw,i=l1(n),r=u6(i),s=c==="entries"||c===Symbol.iterator&&r,o=c==="keys"&&r,l=n[c](...a),f=t?W9:e?K9:g0;return!e&&m2(i,"iterate",o?Ne:L4),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:s?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function L3(c){return function(...e){return c==="delete"?!1:this}}function nV(){const c={get(i){return f8(this,i)},get size(){return h8(this)},has:u8,add:ka,set:Ta,delete:Ea,clear:Ia,forEach:d8(!1,!1)},e={get(i){return f8(this,i,!1,!0)},get size(){return h8(this)},has:u8,add:ka,set:Ta,delete:Ea,clear:Ia,forEach:d8(!1,!0)},t={get(i){return f8(this,i,!0)},get size(){return h8(this,!0)},has(i){return u8.call(this,i,!0)},add:L3("add"),set:L3("set"),delete:L3("delete"),clear:L3("clear"),forEach:d8(!0,!1)},a={get(i){return f8(this,i,!0,!0)},get size(){return h8(this,!0)},has(i){return u8.call(this,i,!0)},add:L3("add"),set:L3("set"),delete:L3("delete"),clear:L3("clear"),forEach:d8(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=m8(i,!1,!1),t[i]=m8(i,!0,!1),e[i]=m8(i,!1,!0),a[i]=m8(i,!0,!0)}),[c,t,e,a]}const[iV,rV,sV,oV]=nV();function G9(c,e){const t=e?c?oV:sV:c?rV:iV;return(a,n,i)=>n==="__v_isReactive"?!c:n==="__v_isReadonly"?c:n==="__v_raw"?a:Reflect.get(f1(t,n)&&n in a?t:a,n,i)}const lV={get:G9(!1,!1)},fV={get:G9(!1,!0)},uV={get:G9(!0,!1)},ns=new WeakMap,is=new WeakMap,rs=new WeakMap,hV=new WeakMap;function dV(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mV(c){return c.__v_skip||!Object.isExtensible(c)?0:dV(NM(c))}function u3(c){return M6(c)?c:j9(c,!1,as,lV,ns)}function ss(c){return j9(c,!1,aV,fV,is)}function os(c){return j9(c,!0,tV,uV,rs)}function j9(c,e,t,a,n){if(!N1(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const i=n.get(c);if(i)return i;const r=mV(c);if(r===0)return c;const s=new Proxy(c,r===2?a:t);return n.set(c,s),s}function U3(c){return M6(c)?U3(c.__v_raw):!!(c&&c.__v_isReactive)}function M6(c){return!!(c&&c.__v_isReadonly)}function K8(c){return!!(c&&c.__v_isShallow)}function ls(c){return U3(c)||M6(c)}function l1(c){const e=c&&c.__v_raw;return e?l1(e):c}function T5(c){return G8(c,"__v_skip",!0),c}const g0=c=>N1(c)?u3(c):c,K9=c=>N1(c)?os(c):c;function fs(c){B3&&k2&&(c=l1(c),es(c.dep||(c.dep=U9())))}function us(c,e){c=l1(c);const t=c.dep;t&&Ae(t)}function P1(c){return!!(c&&c.__v_isRef===!0)}function u1(c){return hs(c,!1)}function pV(c){return hs(c,!0)}function hs(c,e){return P1(c)?c:new vV(c,e)}class vV{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:l1(e),this._value=t?e:g0(e)}get value(){return fs(this),this._value}set value(e){const t=this.__v_isShallow||K8(e)||M6(e);e=t?e:l1(e),z0(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:g0(e),us(this))}}function h1(c){return P1(c)?c.value:c}const zV={get:(c,e,t)=>h1(Reflect.get(c,e,t)),set:(c,e,t,a)=>{const n=c[e];return P1(n)&&!P1(t)?(n.value=t,!0):Reflect.set(c,e,t,a)}};function ds(c){return U3(c)?c:new Proxy(c,zV)}function gV(c){const e=Z(c)?new Array(c.length):{};for(const t in c)e[t]=HV(c,t);return e}class CV{constructor(e,t,a){this._object=e,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qM(l1(this._object),this._key)}}function HV(c,e,t){const a=c[e];return P1(a)?a:new CV(c,e,t)}class MV{constructor(e,t,a,n){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new $9(e,()=>{this._dirty||(this._dirty=!0,us(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=a}get value(){const e=l1(this);return fs(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function VV(c,e,t=!1){let a,n;const i=t1(c);return i?(a=c,n=O2):(a=c.get,n=c.set),new MV(a,n,i||!n,t)}function $3(c,e,t,a){let n;try{n=a?c(...a):c()}catch(i){E5(i,e,t)}return n}function y2(c,e,t,a){if(t1(c)){const i=$3(c,e,t,a);return i&&$r(i)&&i.catch(r=>{E5(r,e,t)}),i}const n=[];for(let i=0;i<c.length;i++)n.push(y2(c[i],e,t,a));return n}function E5(c,e,t,a=!0){const n=e?e.vnode:null;if(e){let i=e.parent;const r=e.proxy,s=t;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](c,r,s)===!1)return}i=i.parent}const o=e.appContext.config.errorHandler;if(o){$3(o,null,10,[c,r,s]);return}}LV(c,t,n,a)}function LV(c,e,t,a=!0){console.error(c)}let C0=!1,ke=!1;const J1=[];let Y2=0;const h6=[];let n3=null,m4=0;const ms=Promise.resolve();let Y9=null;function O3(c){const e=Y9||ms;return c?e.then(this?c.bind(this):c):e}function bV(c){let e=Y2+1,t=J1.length;for(;e<t;){const a=e+t>>>1;H0(J1[a])<c?e=a+1:t=a}return e}function Z9(c){(!J1.length||!J1.includes(c,C0&&c.allowRecurse?Y2+1:Y2))&&(c.id==null?J1.push(c):J1.splice(bV(c.id),0,c),ps())}function ps(){!C0&&!ke&&(ke=!0,Y9=ms.then(zs))}function _V(c){const e=J1.indexOf(c);e>Y2&&J1.splice(e,1)}function yV(c){Z(c)?h6.push(...c):(!n3||!n3.includes(c,c.allowRecurse?m4+1:m4))&&h6.push(c),ps()}function Pa(c,e=C0?Y2+1:0){for(;e<J1.length;e++){const t=J1[e];t&&t.pre&&(J1.splice(e,1),e--,t())}}function vs(c){if(h6.length){const e=[...new Set(h6)];if(h6.length=0,n3){n3.push(...e);return}for(n3=e,n3.sort((t,a)=>H0(t)-H0(a)),m4=0;m4<n3.length;m4++)n3[m4]();n3=null,m4=0}}const H0=c=>c.id==null?1/0:c.id,wV=(c,e)=>{const t=H0(c)-H0(e);if(t===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return t};function zs(c){ke=!1,C0=!0,J1.sort(wV);const e=O2;try{for(Y2=0;Y2<J1.length;Y2++){const t=J1[Y2];t&&t.active!==!1&&$3(t,null,14)}}finally{Y2=0,J1.length=0,vs(),C0=!1,Y9=null,(J1.length||h6.length)&&zs()}}function xV(c,e,...t){if(c.isUnmounted)return;const a=c.vnode.props||y1;let n=t;const i=e.startsWith("update:"),r=i&&e.slice(7);if(r&&r in a){const f=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:h}=a[f]||y1;h&&(n=t.map(d=>D1(d)?d.trim():d)),u&&(n=t.map(we))}let s,o=a[s=T7(e)]||a[s=T7(c3(e))];!o&&i&&(o=a[s=T7(N6(e))]),o&&y2(o,c,6,n);const l=a[s+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[s])return;c.emitted[s]=!0,y2(l,c,6,n)}}function gs(c,e,t=!1){const a=e.emitsCache,n=a.get(c);if(n!==void 0)return n;const i=c.emits;let r={},s=!1;if(!t1(c)){const o=l=>{const f=gs(l,e,!0);f&&(s=!0,O1(r,f))};!t&&e.mixins.length&&e.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!i&&!s?(N1(c)&&a.set(c,null),null):(Z(i)?i.forEach(o=>r[o]=null):O1(r,i),N1(c)&&a.set(c,r),r)}function I5(c,e){return!c||!x5(e)?!1:(e=e.slice(2).replace(/Once$/,""),f1(c,e[0].toLowerCase()+e.slice(1))||f1(c,N6(e))||f1(c,e))}let s2=null,Cs=null;function Y8(c){const e=s2;return s2=c,Cs=c&&c.type.__scopeId||null,e}function A1(c,e=s2,t){if(!e||c._n)return c;const a=(...n)=>{a._d&&Ka(-1);const i=Y8(e);let r;try{r=c(...n)}finally{Y8(i),a._d&&Ka(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function E7(c){const{type:e,vnode:t,proxy:a,withProxy:n,props:i,propsOptions:[r],slots:s,attrs:o,emit:l,render:f,renderCache:u,data:h,setupState:d,ctx:p,inheritAttrs:m}=c;let H,z;const C=Y8(c);try{if(t.shapeFlag&4){const V=n||a;H=K2(f.call(V,V,u,i,d,h,p)),z=o}else{const V=e;H=K2(V.length>1?V(i,{attrs:o,slots:s,emit:l}):V(i,null)),z=e.props?o:SV(o)}}catch(V){n0.length=0,E5(V,c,1),H=X(D2)}let M=H;if(z&&m!==!1){const V=Object.keys(z),{shapeFlag:w}=M;V.length&&w&7&&(r&&V.some(R9)&&(z=NV(z,r)),M=Z3(M,z))}return t.dirs&&(M=Z3(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),H=M,Y8(C),H}const SV=c=>{let e;for(const t in c)(t==="class"||t==="style"||x5(t))&&((e||(e={}))[t]=c[t]);return e},NV=(c,e)=>{const t={};for(const a in c)(!R9(a)||!(a.slice(9)in e))&&(t[a]=c[a]);return t};function AV(c,e,t){const{props:a,children:n,component:i}=c,{props:r,children:s,patchFlag:o}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return a?Ra(a,r,l):!!r;if(o&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(r[h]!==a[h]&&!I5(l,h))return!0}}}else return(n||s)&&(!s||!s.$stable)?!0:a===r?!1:a?r?Ra(a,r,l):!0:!!r;return!1}function Ra(c,e,t){const a=Object.keys(e);if(a.length!==Object.keys(c).length)return!0;for(let n=0;n<a.length;n++){const i=a[n];if(e[i]!==c[i]&&!I5(t,i))return!0}return!1}function kV({vnode:c,parent:e},t){for(;e&&e.subTree===c;)(c=e.vnode).el=t,e=e.parent}const TV=c=>c.__isSuspense;function EV(c,e){e&&e.pendingBranch?Z(c)?e.effects.push(...c):e.effects.push(c):yV(c)}const p8={};function q3(c,e,t){return Hs(c,e,t)}function Hs(c,e,{immediate:t,deep:a,flush:n,onTrack:i,onTrigger:r}=y1){var s;const o=Zr()===((s=U1)==null?void 0:s.scope)?U1:null;let l,f=!1,u=!1;if(P1(c)?(l=()=>c.value,f=K8(c)):U3(c)?(l=()=>c,a=!0):Z(c)?(u=!0,f=c.some(V=>U3(V)||K8(V)),l=()=>c.map(V=>{if(P1(V))return V.value;if(U3(V))return z4(V);if(t1(V))return $3(V,o,2)})):t1(c)?e?l=()=>$3(c,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),y2(c,o,3,[d])}:l=O2,e&&a){const V=l;l=()=>z4(V())}let h,d=V=>{h=C.onStop=()=>{$3(V,o,4)}},p;if(L0)if(d=O2,e?t&&y2(e,o,3,[l(),u?[]:void 0,d]):l(),n==="sync"){const V=xL();p=V.__watcherHandles||(V.__watcherHandles=[])}else return O2;let m=u?new Array(c.length).fill(p8):p8;const H=()=>{if(C.active)if(e){const V=C.run();(a||f||(u?V.some((w,F)=>z0(w,m[F])):z0(V,m)))&&(h&&h(),y2(e,o,3,[V,m===p8?void 0:u&&m[0]===p8?[]:m,d]),m=V)}else C.run()};H.allowRecurse=!!e;let z;n==="sync"?z=H:n==="post"?z=()=>r2(H,o&&o.suspense):(H.pre=!0,o&&(H.id=o.uid),z=()=>Z9(H));const C=new $9(l,z);e?t?H():m=C.run():n==="post"?r2(C.run.bind(C),o&&o.suspense):C.run();const M=()=>{C.stop(),o&&o.scope&&O9(o.scope.effects,C)};return p&&p.push(M),M}function IV(c,e,t){const a=this.proxy,n=D1(c)?c.includes(".")?Ms(a,c):()=>a[c]:c.bind(a,a);let i;t1(e)?i=e:(i=e.handler,t=e);const r=U1;V6(this);const s=Hs(n,i.bind(a),t);return r?V6(r):b4(),s}function Ms(c,e){const t=e.split(".");return()=>{let a=c;for(let n=0;n<t.length&&a;n++)a=a[t[n]];return a}}function z4(c,e){if(!N1(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),P1(c))z4(c.value,e);else if(Z(c))for(let t=0;t<c.length;t++)z4(c[t],e);else if(Ur(c)||u6(c))c.forEach(t=>{z4(t,e)});else if(Wr(c))for(const t in c)z4(c[t],e);return c}function P5(c,e){const t=s2;if(t===null)return c;const a=$5(t)||t.proxy,n=c.dirs||(c.dirs=[]);for(let i=0;i<e.length;i++){let[r,s,o,l=y1]=e[i];r&&(t1(r)&&(r={mounted:r,updated:r}),r.deep&&z4(s),n.push({dir:r,instance:a,value:s,oldValue:void 0,arg:o,modifiers:l}))}return c}function s4(c,e,t,a){const n=c.dirs,i=e&&e.dirs;for(let r=0;r<n.length;r++){const s=n[r];i&&(s.oldValue=i[r].value);let o=s.dir[a];o&&(A6(),y2(o,t,8,[c.el,s,c,e]),k6())}}function PV(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return T6(()=>{c.isMounted=!0}),D5(()=>{c.isUnmounting=!0}),c}const _2=[Function,Array],Vs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_2,onEnter:_2,onAfterEnter:_2,onEnterCancelled:_2,onBeforeLeave:_2,onLeave:_2,onAfterLeave:_2,onLeaveCancelled:_2,onBeforeAppear:_2,onAppear:_2,onAfterAppear:_2,onAppearCancelled:_2},RV={name:"BaseTransition",props:Vs,setup(c,{slots:e}){const t=HL(),a=PV();let n;return()=>{const i=e.default&&bs(e.default(),!0);if(!i||!i.length)return;let r=i[0];if(i.length>1){for(const m of i)if(m.type!==D2){r=m;break}}const s=l1(c),{mode:o}=s;if(a.isLeaving)return I7(r);const l=Oa(r);if(!l)return I7(r);const f=Te(l,s,a,t);Ee(l,f);const u=t.subTree,h=u&&Oa(u);let d=!1;const{getTransitionKey:p}=l.type;if(p){const m=p();n===void 0?n=m:m!==n&&(n=m,d=!0)}if(h&&h.type!==D2&&(!p4(l,h)||d)){const m=Te(h,s,a,t);if(Ee(h,m),o==="out-in")return a.isLeaving=!0,m.afterLeave=()=>{a.isLeaving=!1,t.update.active!==!1&&t.update()},I7(r);o==="in-out"&&l.type!==D2&&(m.delayLeave=(H,z,C)=>{const M=Ls(a,h);M[String(h.key)]=h,H._leaveCb=()=>{z(),H._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=C})}return r}}},OV=RV;function Ls(c,e){const{leavingVNodes:t}=c;let a=t.get(e.type);return a||(a=Object.create(null),t.set(e.type,a)),a}function Te(c,e,t,a){const{appear:n,mode:i,persisted:r=!1,onBeforeEnter:s,onEnter:o,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:u,onLeave:h,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:H,onAfterAppear:z,onAppearCancelled:C}=e,M=String(c.key),V=Ls(t,c),w=(x,b)=>{x&&y2(x,a,9,b)},F=(x,b)=>{const G=b[1];w(x,b),Z(x)?x.every(I=>I.length<=1)&&G():x.length<=1&&G()},P={mode:i,persisted:r,beforeEnter(x){let b=s;if(!t.isMounted)if(n)b=m||s;else return;x._leaveCb&&x._leaveCb(!0);const G=V[M];G&&p4(c,G)&&G.el._leaveCb&&G.el._leaveCb(),w(b,[x])},enter(x){let b=o,G=l,I=f;if(!t.isMounted)if(n)b=H||o,G=z||l,I=C||f;else return;let N=!1;const $=x._enterCb=C1=>{N||(N=!0,C1?w(I,[x]):w(G,[x]),P.delayedLeave&&P.delayedLeave(),x._enterCb=void 0)};b?F(b,[x,$]):$()},leave(x,b){const G=String(c.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return b();w(u,[x]);let I=!1;const N=x._leaveCb=$=>{I||(I=!0,b(),$?w(p,[x]):w(d,[x]),x._leaveCb=void 0,V[G]===c&&delete V[G])};V[G]=c,h?F(h,[x,N]):N()},clone(x){return Te(x,e,t,a)}};return P}function I7(c){if(R5(c))return c=Z3(c),c.children=null,c}function Oa(c){return R5(c)?c.children?c.children[0]:void 0:c}function Ee(c,e){c.shapeFlag&6&&c.component?Ee(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function bs(c,e=!1,t){let a=[],n=0;for(let i=0;i<c.length;i++){let r=c[i];const s=t==null?r.key:String(t)+String(r.key!=null?r.key:i);r.type===X1?(r.patchFlag&128&&n++,a=a.concat(bs(r.children,e,s))):(e||r.type!==D2)&&a.push(s!=null?Z3(r,{key:s}):r)}if(n>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function $0(c,e){return t1(c)?(()=>O1({name:c.name},e,{setup:c}))():c}const R8=c=>!!c.type.__asyncLoader,R5=c=>c.type.__isKeepAlive;function DV(c,e){_s(c,"a",e)}function FV(c,e){_s(c,"da",e)}function _s(c,e,t=U1){const a=c.__wdc||(c.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return c()});if(O5(e,a,t),t){let n=t.parent;for(;n&&n.parent;)R5(n.parent.vnode)&&BV(a,e,t,n),n=n.parent}}function BV(c,e,t,a){const n=O5(e,c,a,!0);F5(()=>{O9(a[e],n)},t)}function O5(c,e,t=U1,a=!1){if(t){const n=t[c]||(t[c]=[]),i=e.__weh||(e.__weh=(...r)=>{if(t.isUnmounted)return;A6(),V6(t);const s=y2(e,t,c,r);return b4(),k6(),s});return a?n.unshift(i):n.push(i),i}}const g3=c=>(e,t=U1)=>(!L0||c==="sp")&&O5(c,(...a)=>e(...a),t),UV=g3("bm"),T6=g3("m"),ys=g3("bu"),X9=g3("u"),D5=g3("bum"),F5=g3("um"),$V=g3("sp"),qV=g3("rtg"),WV=g3("rtc");function GV(c,e=U1){O5("ec",c,e)}const ws="components",jV="directives";function f2(c,e){return xs(ws,c,!0,e)||c}const KV=Symbol.for("v-ndc");function Q9(c){return xs(jV,c)}function xs(c,e,t=!0,a=!1){const n=s2||U1;if(n){const i=n.type;if(c===ws){const s=_L(i,!1);if(s&&(s===e||s===c3(e)||s===A5(c3(e))))return i}const r=Da(n[c]||i[c],e)||Da(n.appContext[c],e);return!r&&a?i:r}}function Da(c,e){return c&&(c[e]||c[c3(e)]||c[A5(c3(e))])}function q0(c,e,t,a){let n;const i=t&&t[a];if(Z(c)||D1(c)){n=new Array(c.length);for(let r=0,s=c.length;r<s;r++)n[r]=e(c[r],r,void 0,i&&i[r])}else if(typeof c=="number"){n=new Array(c);for(let r=0;r<c;r++)n[r]=e(r+1,r,void 0,i&&i[r])}else if(N1(c))if(c[Symbol.iterator])n=Array.from(c,(r,s)=>e(r,s,void 0,i&&i[s]));else{const r=Object.keys(c);n=new Array(r.length);for(let s=0,o=r.length;s<o;s++){const l=r[s];n[s]=e(c[l],l,s,i&&i[s])}}else n=[];return t&&(t[a]=n),n}const Ie=c=>c?Ds(c)?$5(c)||c.proxy:Ie(c.parent):null,a0=O1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>Ie(c.parent),$root:c=>Ie(c.root),$emit:c=>c.emit,$options:c=>J9(c),$forceUpdate:c=>c.f||(c.f=()=>Z9(c.update)),$nextTick:c=>c.n||(c.n=O3.bind(c.proxy)),$watch:c=>IV.bind(c)}),P7=(c,e)=>c!==y1&&!c.__isScriptSetup&&f1(c,e),YV={get({_:c},e){const{ctx:t,setupState:a,data:n,props:i,accessCache:r,type:s,appContext:o}=c;let l;if(e[0]!=="$"){const d=r[e];if(d!==void 0)switch(d){case 1:return a[e];case 2:return n[e];case 4:return t[e];case 3:return i[e]}else{if(P7(a,e))return r[e]=1,a[e];if(n!==y1&&f1(n,e))return r[e]=2,n[e];if((l=c.propsOptions[0])&&f1(l,e))return r[e]=3,i[e];if(t!==y1&&f1(t,e))return r[e]=4,t[e];Pe&&(r[e]=0)}}const f=a0[e];let u,h;if(f)return e==="$attrs"&&m2(c,"get",e),f(c);if((u=s.__cssModules)&&(u=u[e]))return u;if(t!==y1&&f1(t,e))return r[e]=4,t[e];if(h=o.config.globalProperties,f1(h,e))return h[e]},set({_:c},e,t){const{data:a,setupState:n,ctx:i}=c;return P7(n,e)?(n[e]=t,!0):a!==y1&&f1(a,e)?(a[e]=t,!0):f1(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(i[e]=t,!0)},has({_:{data:c,setupState:e,accessCache:t,ctx:a,appContext:n,propsOptions:i}},r){let s;return!!t[r]||c!==y1&&f1(c,r)||P7(e,r)||(s=i[0])&&f1(s,r)||f1(a,r)||f1(a0,r)||f1(n.config.globalProperties,r)},defineProperty(c,e,t){return t.get!=null?c._.accessCache[e]=0:f1(t,"value")&&this.set(c,e,t.value,null),Reflect.defineProperty(c,e,t)}};function Fa(c){return Z(c)?c.reduce((e,t)=>(e[t]=null,e),{}):c}let Pe=!0;function ZV(c){const e=J9(c),t=c.proxy,a=c.ctx;Pe=!1,e.beforeCreate&&Ba(e.beforeCreate,c,"bc");const{data:n,computed:i,methods:r,watch:s,provide:o,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:p,activated:m,deactivated:H,beforeDestroy:z,beforeUnmount:C,destroyed:M,unmounted:V,render:w,renderTracked:F,renderTriggered:P,errorCaptured:x,serverPrefetch:b,expose:G,inheritAttrs:I,components:N,directives:$,filters:C1}=e;if(l&&XV(l,a,null),r)for(const v1 in r){const d1=r[v1];t1(d1)&&(a[v1]=d1.bind(t))}if(n){const v1=n.call(t,t);N1(v1)&&(c.data=u3(v1))}if(Pe=!0,i)for(const v1 in i){const d1=i[v1],b2=t1(d1)?d1.bind(t,t):t1(d1.get)?d1.get.bind(t,t):O2,N2=!t1(d1)&&t1(d1.set)?d1.set.bind(t):O2,v2=g1({get:b2,set:N2});Object.defineProperty(a,v1,{enumerable:!0,configurable:!0,get:()=>v2.value,set:Y1=>v2.value=Y1})}if(s)for(const v1 in s)Ss(s[v1],a,t,v1);if(o){const v1=t1(o)?o.call(t):o;Reflect.ownKeys(v1).forEach(d1=>{d6(d1,v1[d1])})}f&&Ba(f,c,"c");function i1(v1,d1){Z(d1)?d1.forEach(b2=>v1(b2.bind(t))):d1&&v1(d1.bind(t))}if(i1(UV,u),i1(T6,h),i1(ys,d),i1(X9,p),i1(DV,m),i1(FV,H),i1(GV,x),i1(WV,F),i1(qV,P),i1(D5,C),i1(F5,V),i1($V,b),Z(G))if(G.length){const v1=c.exposed||(c.exposed={});G.forEach(d1=>{Object.defineProperty(v1,d1,{get:()=>t[d1],set:b2=>t[d1]=b2})})}else c.exposed||(c.exposed={});w&&c.render===O2&&(c.render=w),I!=null&&(c.inheritAttrs=I),N&&(c.components=N),$&&(c.directives=$)}function XV(c,e,t=O2){Z(c)&&(c=Re(c));for(const a in c){const n=c[a];let i;N1(n)?"default"in n?i=w2(n.from||a,n.default,!0):i=w2(n.from||a):i=w2(n),P1(i)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):e[a]=i}}function Ba(c,e,t){y2(Z(c)?c.map(a=>a.bind(e.proxy)):c.bind(e.proxy),e,t)}function Ss(c,e,t,a){const n=a.includes(".")?Ms(t,a):()=>t[a];if(D1(c)){const i=e[c];t1(i)&&q3(n,i)}else if(t1(c))q3(n,c.bind(t));else if(N1(c))if(Z(c))c.forEach(i=>Ss(i,e,t,a));else{const i=t1(c.handler)?c.handler.bind(t):e[c.handler];t1(i)&&q3(n,i,c)}}function J9(c){const e=c.type,{mixins:t,extends:a}=e,{mixins:n,optionsCache:i,config:{optionMergeStrategies:r}}=c.appContext,s=i.get(e);let o;return s?o=s:!n.length&&!t&&!a?o=e:(o={},n.length&&n.forEach(l=>Z8(o,l,r,!0)),Z8(o,e,r)),N1(e)&&i.set(e,o),o}function Z8(c,e,t,a=!1){const{mixins:n,extends:i}=e;i&&Z8(c,i,t,!0),n&&n.forEach(r=>Z8(c,r,t,!0));for(const r in e)if(!(a&&r==="expose")){const s=QV[r]||t&&t[r];c[r]=s?s(c[r],e[r]):e[r]}return c}const QV={data:Ua,props:$a,emits:$a,methods:X6,computed:X6,beforeCreate:t2,created:t2,beforeMount:t2,mounted:t2,beforeUpdate:t2,updated:t2,beforeDestroy:t2,beforeUnmount:t2,destroyed:t2,unmounted:t2,activated:t2,deactivated:t2,errorCaptured:t2,serverPrefetch:t2,components:X6,directives:X6,watch:eL,provide:Ua,inject:JV};function Ua(c,e){return e?c?function(){return O1(t1(c)?c.call(this,this):c,t1(e)?e.call(this,this):e)}:e:c}function JV(c,e){return X6(Re(c),Re(e))}function Re(c){if(Z(c)){const e={};for(let t=0;t<c.length;t++)e[c[t]]=c[t];return e}return c}function t2(c,e){return c?[...new Set([].concat(c,e))]:e}function X6(c,e){return c?O1(Object.create(null),c,e):e}function $a(c,e){return c?Z(c)&&Z(e)?[...new Set([...c,...e])]:O1(Object.create(null),Fa(c),Fa(e??{})):e}function eL(c,e){if(!c)return e;if(!e)return c;const t=O1(Object.create(null),c);for(const a in e)t[a]=t2(c[a],e[a]);return t}function Ns(){return{app:null,config:{isNativeTag:wM,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cL=0;function tL(c,e){return function(a,n=null){t1(a)||(a=O1({},a)),n!=null&&!N1(n)&&(n=null);const i=Ns(),r=new Set;let s=!1;const o=i.app={_uid:cL++,_component:a,_props:n,_container:null,_context:i,_instance:null,version:SL,get config(){return i.config},set config(l){},use(l,...f){return r.has(l)||(l&&t1(l.install)?(r.add(l),l.install(o,...f)):t1(l)&&(r.add(l),l(o,...f))),o},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),o},component(l,f){return f?(i.components[l]=f,o):i.components[l]},directive(l,f){return f?(i.directives[l]=f,o):i.directives[l]},mount(l,f,u){if(!s){const h=X(a,n);return h.appContext=i,f&&e?e(h,l):c(h,l,u),s=!0,o._container=l,l.__vue_app__=o,$5(h.component)||h.component.proxy}},unmount(){s&&(c(null,o._container),delete o._container.__vue_app__)},provide(l,f){return i.provides[l]=f,o},runWithContext(l){M0=o;try{return l()}finally{M0=null}}};return o}}let M0=null;function d6(c,e){if(U1){let t=U1.provides;const a=U1.parent&&U1.parent.provides;a===t&&(t=U1.provides=Object.create(a)),t[c]=e}}function w2(c,e,t=!1){const a=U1||s2;if(a||M0){const n=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:M0._context.provides;if(n&&c in n)return n[c];if(arguments.length>1)return t&&t1(e)?e.call(a&&a.proxy):e}}function aL(){return!!(U1||s2||M0)}function nL(c,e,t,a=!1){const n={},i={};G8(i,U5,1),c.propsDefaults=Object.create(null),As(c,e,n,i);for(const r in c.propsOptions[0])r in n||(n[r]=void 0);t?c.props=a?n:ss(n):c.type.props?c.props=n:c.props=i,c.attrs=i}function iL(c,e,t,a){const{props:n,attrs:i,vnode:{patchFlag:r}}=c,s=l1(n),[o]=c.propsOptions;let l=!1;if((a||r>0)&&!(r&16)){if(r&8){const f=c.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(I5(c.emitsOptions,h))continue;const d=e[h];if(o)if(f1(i,h))d!==i[h]&&(i[h]=d,l=!0);else{const p=c3(h);n[p]=Oe(o,s,p,d,c,!1)}else d!==i[h]&&(i[h]=d,l=!0)}}}else{As(c,e,n,i)&&(l=!0);let f;for(const u in s)(!e||!f1(e,u)&&((f=N6(u))===u||!f1(e,f)))&&(o?t&&(t[u]!==void 0||t[f]!==void 0)&&(n[u]=Oe(o,s,u,void 0,c,!0)):delete n[u]);if(i!==s)for(const u in i)(!e||!f1(e,u))&&(delete i[u],l=!0)}l&&f3(c,"set","$attrs")}function As(c,e,t,a){const[n,i]=c.propsOptions;let r=!1,s;if(e)for(let o in e){if(I8(o))continue;const l=e[o];let f;n&&f1(n,f=c3(o))?!i||!i.includes(f)?t[f]=l:(s||(s={}))[f]=l:I5(c.emitsOptions,o)||(!(o in a)||l!==a[o])&&(a[o]=l,r=!0)}if(i){const o=l1(t),l=s||y1;for(let f=0;f<i.length;f++){const u=i[f];t[u]=Oe(n,o,u,l[u],c,!f1(l,u))}}return r}function Oe(c,e,t,a,n,i){const r=c[t];if(r!=null){const s=f1(r,"default");if(s&&a===void 0){const o=r.default;if(r.type!==Function&&!r.skipFactory&&t1(o)){const{propsDefaults:l}=n;t in l?a=l[t]:(V6(n),a=l[t]=o.call(null,e),b4())}else a=o}r[0]&&(i&&!s?a=!1:r[1]&&(a===""||a===N6(t))&&(a=!0))}return a}function ks(c,e,t=!1){const a=e.propsCache,n=a.get(c);if(n)return n;const i=c.props,r={},s=[];let o=!1;if(!t1(c)){const f=u=>{o=!0;const[h,d]=ks(u,e,!0);O1(r,h),d&&s.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!i&&!o)return N1(c)&&a.set(c,f6),f6;if(Z(i))for(let f=0;f<i.length;f++){const u=c3(i[f]);qa(u)&&(r[u]=y1)}else if(i)for(const f in i){const u=c3(f);if(qa(u)){const h=i[f],d=r[u]=Z(h)||t1(h)?{type:h}:O1({},h);if(d){const p=ja(Boolean,d.type),m=ja(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||f1(d,"default"))&&s.push(u)}}}const l=[r,s];return N1(c)&&a.set(c,l),l}function qa(c){return c[0]!=="$"}function Wa(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function Ga(c,e){return Wa(c)===Wa(e)}function ja(c,e){return Z(e)?e.findIndex(t=>Ga(t,c)):t1(e)&&Ga(e,c)?0:-1}const Ts=c=>c[0]==="_"||c==="$stable",ec=c=>Z(c)?c.map(K2):[K2(c)],rL=(c,e,t)=>{if(e._n)return e;const a=A1((...n)=>ec(e(...n)),t);return a._c=!1,a},Es=(c,e,t)=>{const a=c._ctx;for(const n in c){if(Ts(n))continue;const i=c[n];if(t1(i))e[n]=rL(n,i,a);else if(i!=null){const r=ec(i);e[n]=()=>r}}},Is=(c,e)=>{const t=ec(e);c.slots.default=()=>t},sL=(c,e)=>{if(c.vnode.shapeFlag&32){const t=e._;t?(c.slots=l1(e),G8(e,"_",t)):Es(e,c.slots={})}else c.slots={},e&&Is(c,e);G8(c.slots,U5,1)},oL=(c,e,t)=>{const{vnode:a,slots:n}=c;let i=!0,r=y1;if(a.shapeFlag&32){const s=e._;s?t&&s===1?i=!1:(O1(n,e),!t&&s===1&&delete n._):(i=!e.$stable,Es(e,n)),r=e}else e&&(Is(c,e),r={default:1});if(i)for(const s in n)!Ts(s)&&!(s in r)&&delete n[s]};function De(c,e,t,a,n=!1){if(Z(c)){c.forEach((h,d)=>De(h,e&&(Z(e)?e[d]:e),t,a,n));return}if(R8(a)&&!n)return;const i=a.shapeFlag&4?$5(a.component)||a.component.proxy:a.el,r=n?null:i,{i:s,r:o}=c,l=e&&e.r,f=s.refs===y1?s.refs={}:s.refs,u=s.setupState;if(l!=null&&l!==o&&(D1(l)?(f[l]=null,f1(u,l)&&(u[l]=null)):P1(l)&&(l.value=null)),t1(o))$3(o,s,12,[r,f]);else{const h=D1(o),d=P1(o);if(h||d){const p=()=>{if(c.f){const m=h?f1(u,o)?u[o]:f[o]:o.value;n?Z(m)&&O9(m,i):Z(m)?m.includes(i)||m.push(i):h?(f[o]=[i],f1(u,o)&&(u[o]=f[o])):(o.value=[i],c.k&&(f[c.k]=o.value))}else h?(f[o]=r,f1(u,o)&&(u[o]=r)):d&&(o.value=r,c.k&&(f[c.k]=r))};r?(p.id=-1,r2(p,t)):p()}}}const r2=EV;function lL(c){return fL(c)}function fL(c,e){const t=xe();t.__VUE__=!0;const{insert:a,remove:n,patchProp:i,createElement:r,createText:s,createComment:o,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=O2,insertStaticContent:p}=c,m=(v,g,L,_=null,S=null,A=null,D=!1,E=null,R=!!g.dynamicChildren)=>{if(v===g)return;v&&!p4(v,g)&&(_=y(v),Y1(v,S,A,!0),v=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:k,ref:K,shapeFlag:q}=g;switch(k){case B5:H(v,g,L,_);break;case D2:z(v,g,L,_);break;case R7:v==null&&C(g,L,_,D);break;case X1:N(v,g,L,_,S,A,D,E,R);break;default:q&1?w(v,g,L,_,S,A,D,E,R):q&6?$(v,g,L,_,S,A,D,E,R):(q&64||q&128)&&k.process(v,g,L,_,S,A,D,E,R,O)}K!=null&&S&&De(K,v&&v.ref,A,g||v,!g)},H=(v,g,L,_)=>{if(v==null)a(g.el=s(g.children),L,_);else{const S=g.el=v.el;g.children!==v.children&&l(S,g.children)}},z=(v,g,L,_)=>{v==null?a(g.el=o(g.children||""),L,_):g.el=v.el},C=(v,g,L,_)=>{[v.el,v.anchor]=p(v.children,g,L,_,v.el,v.anchor)},M=({el:v,anchor:g},L,_)=>{let S;for(;v&&v!==g;)S=h(v),a(v,L,_),v=S;a(g,L,_)},V=({el:v,anchor:g})=>{let L;for(;v&&v!==g;)L=h(v),n(v),v=L;n(g)},w=(v,g,L,_,S,A,D,E,R)=>{D=D||g.type==="svg",v==null?F(g,L,_,S,A,D,E,R):b(v,g,S,A,D,E,R)},F=(v,g,L,_,S,A,D,E)=>{let R,k;const{type:K,props:q,shapeFlag:Y,transition:e1,dirs:o1}=v;if(R=v.el=r(v.type,A,q&&q.is,q),Y&8?f(R,v.children):Y&16&&x(v.children,R,null,_,S,A&&K!=="foreignObject",D,E),o1&&s4(v,null,_,"created"),P(R,v,v.scopeId,D,_),q){for(const H1 in q)H1!=="value"&&!I8(H1)&&i(R,H1,null,q[H1],A,v.children,_,S,Z1);"value"in q&&i(R,"value",null,q.value),(k=q.onVnodeBeforeMount)&&G2(k,_,v)}o1&&s4(v,null,_,"beforeMount");const L1=(!S||S&&!S.pendingBranch)&&e1&&!e1.persisted;L1&&e1.beforeEnter(R),a(R,g,L),((k=q&&q.onVnodeMounted)||L1||o1)&&r2(()=>{k&&G2(k,_,v),L1&&e1.enter(R),o1&&s4(v,null,_,"mounted")},S)},P=(v,g,L,_,S)=>{if(L&&d(v,L),_)for(let A=0;A<_.length;A++)d(v,_[A]);if(S){let A=S.subTree;if(g===A){const D=S.vnode;P(v,D,D.scopeId,D.slotScopeIds,S.parent)}}},x=(v,g,L,_,S,A,D,E,R=0)=>{for(let k=R;k<v.length;k++){const K=v[k]=E?A3(v[k]):K2(v[k]);m(null,K,g,L,_,S,A,D,E)}},b=(v,g,L,_,S,A,D)=>{const E=g.el=v.el;let{patchFlag:R,dynamicChildren:k,dirs:K}=g;R|=v.patchFlag&16;const q=v.props||y1,Y=g.props||y1;let e1;L&&o4(L,!1),(e1=Y.onVnodeBeforeUpdate)&&G2(e1,L,g,v),K&&s4(g,v,L,"beforeUpdate"),L&&o4(L,!0);const o1=S&&g.type!=="foreignObject";if(k?G(v.dynamicChildren,k,E,L,_,o1,A):D||d1(v,g,E,null,L,_,o1,A,!1),R>0){if(R&16)I(E,g,q,Y,L,_,S);else if(R&2&&q.class!==Y.class&&i(E,"class",null,Y.class,S),R&4&&i(E,"style",q.style,Y.style,S),R&8){const L1=g.dynamicProps;for(let H1=0;H1<L1.length;H1++){const R1=L1[H1],A2=q[R1],J4=Y[R1];(J4!==A2||R1==="value")&&i(E,R1,A2,J4,S,v.children,L,_,Z1)}}R&1&&v.children!==g.children&&f(E,g.children)}else!D&&k==null&&I(E,g,q,Y,L,_,S);((e1=Y.onVnodeUpdated)||K)&&r2(()=>{e1&&G2(e1,L,g,v),K&&s4(g,v,L,"updated")},_)},G=(v,g,L,_,S,A,D)=>{for(let E=0;E<g.length;E++){const R=v[E],k=g[E],K=R.el&&(R.type===X1||!p4(R,k)||R.shapeFlag&70)?u(R.el):L;m(R,k,K,null,_,S,A,D,!0)}},I=(v,g,L,_,S,A,D)=>{if(L!==_){if(L!==y1)for(const E in L)!I8(E)&&!(E in _)&&i(v,E,L[E],null,D,g.children,S,A,Z1);for(const E in _){if(I8(E))continue;const R=_[E],k=L[E];R!==k&&E!=="value"&&i(v,E,k,R,D,g.children,S,A,Z1)}"value"in _&&i(v,"value",L.value,_.value)}},N=(v,g,L,_,S,A,D,E,R)=>{const k=g.el=v?v.el:s(""),K=g.anchor=v?v.anchor:s("");let{patchFlag:q,dynamicChildren:Y,slotScopeIds:e1}=g;e1&&(E=E?E.concat(e1):e1),v==null?(a(k,L,_),a(K,L,_),x(g.children,L,K,S,A,D,E,R)):q>0&&q&64&&Y&&v.dynamicChildren?(G(v.dynamicChildren,Y,L,S,A,D,E),(g.key!=null||S&&g===S.subTree)&&Ps(v,g,!0)):d1(v,g,L,K,S,A,D,E,R)},$=(v,g,L,_,S,A,D,E,R)=>{g.slotScopeIds=E,v==null?g.shapeFlag&512?S.ctx.activate(g,L,_,D,R):C1(g,L,_,S,A,D,R):B1(v,g,R)},C1=(v,g,L,_,S,A,D)=>{const E=v.component=CL(v,_,S);if(R5(v)&&(E.ctx.renderer=O),ML(E),E.asyncDep){if(S&&S.registerDep(E,i1),!v.el){const R=E.subTree=X(D2);z(null,R,g,L)}return}i1(E,v,g,L,S,A,D)},B1=(v,g,L)=>{const _=g.component=v.component;if(AV(v,g,L))if(_.asyncDep&&!_.asyncResolved){v1(_,g,L);return}else _.next=g,_V(_.update),_.update();else g.el=v.el,_.vnode=g},i1=(v,g,L,_,S,A,D)=>{const E=()=>{if(v.isMounted){let{next:K,bu:q,u:Y,parent:e1,vnode:o1}=v,L1=K,H1;o4(v,!1),K?(K.el=o1.el,v1(v,K,D)):K=o1,q&&P8(q),(H1=K.props&&K.props.onVnodeBeforeUpdate)&&G2(H1,e1,K,o1),o4(v,!0);const R1=E7(v),A2=v.subTree;v.subTree=R1,m(A2,R1,u(A2.el),y(A2),v,S,A),K.el=R1.el,L1===null&&kV(v,R1.el),Y&&r2(Y,S),(H1=K.props&&K.props.onVnodeUpdated)&&r2(()=>G2(H1,e1,K,o1),S)}else{let K;const{el:q,props:Y}=g,{bm:e1,m:o1,parent:L1}=v,H1=R8(g);if(o4(v,!1),e1&&P8(e1),!H1&&(K=Y&&Y.onVnodeBeforeMount)&&G2(K,L1,g),o4(v,!0),q&&p1){const R1=()=>{v.subTree=E7(v),p1(q,v.subTree,v,S,null)};H1?g.type.__asyncLoader().then(()=>!v.isUnmounted&&R1()):R1()}else{const R1=v.subTree=E7(v);m(null,R1,L,_,v,S,A),g.el=R1.el}if(o1&&r2(o1,S),!H1&&(K=Y&&Y.onVnodeMounted)){const R1=g;r2(()=>G2(K,L1,R1),S)}(g.shapeFlag&256||L1&&R8(L1.vnode)&&L1.vnode.shapeFlag&256)&&v.a&&r2(v.a,S),v.isMounted=!0,g=L=_=null}},R=v.effect=new $9(E,()=>Z9(k),v.scope),k=v.update=()=>R.run();k.id=v.uid,o4(v,!0),k()},v1=(v,g,L)=>{g.component=v;const _=v.vnode.props;v.vnode=g,v.next=null,iL(v,g.props,_,L),oL(v,g.children,L),A6(),Pa(),k6()},d1=(v,g,L,_,S,A,D,E,R=!1)=>{const k=v&&v.children,K=v?v.shapeFlag:0,q=g.children,{patchFlag:Y,shapeFlag:e1}=g;if(Y>0){if(Y&128){N2(k,q,L,_,S,A,D,E,R);return}else if(Y&256){b2(k,q,L,_,S,A,D,E,R);return}}e1&8?(K&16&&Z1(k,S,A),q!==k&&f(L,q)):K&16?e1&16?N2(k,q,L,_,S,A,D,E,R):Z1(k,S,A,!0):(K&8&&f(L,""),e1&16&&x(q,L,_,S,A,D,E,R))},b2=(v,g,L,_,S,A,D,E,R)=>{v=v||f6,g=g||f6;const k=v.length,K=g.length,q=Math.min(k,K);let Y;for(Y=0;Y<q;Y++){const e1=g[Y]=R?A3(g[Y]):K2(g[Y]);m(v[Y],e1,L,null,S,A,D,E,R)}k>K?Z1(v,S,A,!0,!1,q):x(g,L,_,S,A,D,E,R,q)},N2=(v,g,L,_,S,A,D,E,R)=>{let k=0;const K=g.length;let q=v.length-1,Y=K-1;for(;k<=q&&k<=Y;){const e1=v[k],o1=g[k]=R?A3(g[k]):K2(g[k]);if(p4(e1,o1))m(e1,o1,L,null,S,A,D,E,R);else break;k++}for(;k<=q&&k<=Y;){const e1=v[q],o1=g[Y]=R?A3(g[Y]):K2(g[Y]);if(p4(e1,o1))m(e1,o1,L,null,S,A,D,E,R);else break;q--,Y--}if(k>q){if(k<=Y){const e1=Y+1,o1=e1<K?g[e1].el:_;for(;k<=Y;)m(null,g[k]=R?A3(g[k]):K2(g[k]),L,o1,S,A,D,E,R),k++}}else if(k>Y)for(;k<=q;)Y1(v[k],S,A,!0),k++;else{const e1=k,o1=k,L1=new Map;for(k=o1;k<=Y;k++){const z2=g[k]=R?A3(g[k]):K2(g[k]);z2.key!=null&&L1.set(z2.key,k)}let H1,R1=0;const A2=Y-o1+1;let J4=!1,ba=0;const B6=new Array(A2);for(k=0;k<A2;k++)B6[k]=0;for(k=e1;k<=q;k++){const z2=v[k];if(R1>=A2){Y1(z2,S,A,!0);continue}let W2;if(z2.key!=null)W2=L1.get(z2.key);else for(H1=o1;H1<=Y;H1++)if(B6[H1-o1]===0&&p4(z2,g[H1])){W2=H1;break}W2===void 0?Y1(z2,S,A,!0):(B6[W2-o1]=k+1,W2>=ba?ba=W2:J4=!0,m(z2,g[W2],L,null,S,A,D,E,R),R1++)}const _a=J4?uL(B6):f6;for(H1=_a.length-1,k=A2-1;k>=0;k--){const z2=o1+k,W2=g[z2],ya=z2+1<K?g[z2+1].el:_;B6[k]===0?m(null,W2,L,ya,S,A,D,E,R):J4&&(H1<0||k!==_a[H1]?v2(W2,L,ya,2):H1--)}}},v2=(v,g,L,_,S=null)=>{const{el:A,type:D,transition:E,children:R,shapeFlag:k}=v;if(k&6){v2(v.component.subTree,g,L,_);return}if(k&128){v.suspense.move(g,L,_);return}if(k&64){D.move(v,g,L,O);return}if(D===X1){a(A,g,L);for(let q=0;q<R.length;q++)v2(R[q],g,L,_);a(v.anchor,g,L);return}if(D===R7){M(v,g,L);return}if(_!==2&&k&1&&E)if(_===0)E.beforeEnter(A),a(A,g,L),r2(()=>E.enter(A),S);else{const{leave:q,delayLeave:Y,afterLeave:e1}=E,o1=()=>a(A,g,L),L1=()=>{q(A,()=>{o1(),e1&&e1()})};Y?Y(A,o1,L1):L1()}else a(A,g,L)},Y1=(v,g,L,_=!1,S=!1)=>{const{type:A,props:D,ref:E,children:R,dynamicChildren:k,shapeFlag:K,patchFlag:q,dirs:Y}=v;if(E!=null&&De(E,null,L,v,!0),K&256){g.ctx.deactivate(v);return}const e1=K&1&&Y,o1=!R8(v);let L1;if(o1&&(L1=D&&D.onVnodeBeforeUnmount)&&G2(L1,g,v),K&6)l8(v.component,L,_);else{if(K&128){v.suspense.unmount(L,_);return}e1&&s4(v,null,g,"beforeUnmount"),K&64?v.type.remove(v,g,L,S,O,_):k&&(A!==X1||q>0&&q&64)?Z1(k,g,L,!1,!0):(A===X1&&q&384||!S&&K&16)&&Z1(R,g,L),_&&V3(v)}(o1&&(L1=D&&D.onVnodeUnmounted)||e1)&&r2(()=>{L1&&G2(L1,g,v),e1&&s4(v,null,g,"unmounted")},L)},V3=v=>{const{type:g,el:L,anchor:_,transition:S}=v;if(g===X1){Q4(L,_);return}if(g===R7){V(v);return}const A=()=>{n(L),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(v.shapeFlag&1&&S&&!S.persisted){const{leave:D,delayLeave:E}=S,R=()=>D(L,A);E?E(v.el,A,R):R()}else A()},Q4=(v,g)=>{let L;for(;v!==g;)L=h(v),n(v),v=L;n(g)},l8=(v,g,L)=>{const{bum:_,scope:S,update:A,subTree:D,um:E}=v;_&&P8(_),S.stop(),A&&(A.active=!1,Y1(D,v,g,L)),E&&r2(E,g),r2(()=>{v.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Z1=(v,g,L,_=!1,S=!1,A=0)=>{for(let D=A;D<v.length;D++)Y1(v[D],g,L,_,S)},y=v=>v.shapeFlag&6?y(v.component.subTree):v.shapeFlag&128?v.suspense.next():h(v.anchor||v.el),U=(v,g,L)=>{v==null?g._vnode&&Y1(g._vnode,null,null,!0):m(g._vnode||null,v,g,null,null,null,L),Pa(),vs(),g._vnode=v},O={p:m,um:Y1,m:v2,r:V3,mt:C1,mc:x,pc:d1,pbc:G,n:y,o:c};let j,p1;return e&&([j,p1]=e(O)),{render:U,hydrate:j,createApp:tL(U,j)}}function o4({effect:c,update:e},t){c.allowRecurse=e.allowRecurse=t}function Ps(c,e,t=!1){const a=c.children,n=e.children;if(Z(a)&&Z(n))for(let i=0;i<a.length;i++){const r=a[i];let s=n[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=n[i]=A3(n[i]),s.el=r.el),t||Ps(r,s)),s.type===B5&&(s.el=r.el)}}function uL(c){const e=c.slice(),t=[0];let a,n,i,r,s;const o=c.length;for(a=0;a<o;a++){const l=c[a];if(l!==0){if(n=t[t.length-1],c[n]<l){e[a]=n,t.push(a);continue}for(i=0,r=t.length-1;i<r;)s=i+r>>1,c[t[s]]<l?i=s+1:r=s;l<c[t[i]]&&(i>0&&(e[a]=t[i-1]),t[i]=a)}}for(i=t.length,r=t[i-1];i-- >0;)t[i]=r,r=e[r];return t}const hL=c=>c.__isTeleport,X1=Symbol.for("v-fgt"),B5=Symbol.for("v-txt"),D2=Symbol.for("v-cmt"),R7=Symbol.for("v-stc"),n0=[];let E2=null;function r1(c=!1){n0.push(E2=c?null:[])}function dL(){n0.pop(),E2=n0[n0.length-1]||null}let V0=1;function Ka(c){V0+=c}function Rs(c){return c.dynamicChildren=V0>0?E2||f6:null,dL(),V0>0&&E2&&E2.push(c),c}function w1(c,e,t,a,n,i){return Rs(c1(c,e,t,a,n,i,!0))}function x2(c,e,t,a,n){return Rs(X(c,e,t,a,n,!0))}function Fe(c){return c?c.__v_isVNode===!0:!1}function p4(c,e){return c.type===e.type&&c.key===e.key}const U5="__vInternal",Os=({key:c})=>c??null,O8=({ref:c,ref_key:e,ref_for:t})=>(typeof c=="number"&&(c=""+c),c!=null?D1(c)||P1(c)||t1(c)?{i:s2,r:c,k:e,f:!!t}:c:null);function c1(c,e=null,t=null,a=0,n=null,i=c===X1?0:1,r=!1,s=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&Os(e),ref:e&&O8(e),scopeId:Cs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:s2};return s?(cc(o,t),i&128&&c.normalize(o)):t&&(o.shapeFlag|=D1(t)?8:16),V0>0&&!r&&E2&&(o.patchFlag>0||i&6)&&o.patchFlag!==32&&E2.push(o),o}const X=mL;function mL(c,e=null,t=null,a=0,n=null,i=!1){if((!c||c===KV)&&(c=D2),Fe(c)){const s=Z3(c,e,!0);return t&&cc(s,t),V0>0&&!i&&E2&&(s.shapeFlag&6?E2[E2.indexOf(c)]=s:E2.push(s)),s.patchFlag|=-2,s}if(yL(c)&&(c=c.__vccOpts),e){e=pL(e);let{class:s,style:o}=e;s&&!D1(s)&&(e.class=F3(s)),N1(o)&&(ls(o)&&!Z(o)&&(o=O1({},o)),e.style=B9(o))}const r=D1(c)?1:TV(c)?128:hL(c)?64:N1(c)?4:t1(c)?2:0;return c1(c,e,t,a,n,r,i,!0)}function pL(c){return c?ls(c)||U5 in c?O1({},c):c:null}function Z3(c,e,t=!1){const{props:a,ref:n,patchFlag:i,children:r}=c,s=e?vL(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:s,key:s&&Os(s),ref:e&&e.ref?t&&n?Z(n)?n.concat(O8(e)):[n,O8(e)]:O8(e):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:r,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==X1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&Z3(c.ssContent),ssFallback:c.ssFallback&&Z3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function $4(c=" ",e=0){return X(B5,null,c,e)}function S4(c="",e=!1){return e?(r1(),x2(D2,null,c)):X(D2,null,c)}function K2(c){return c==null||typeof c=="boolean"?X(D2):Z(c)?X(X1,null,c.slice()):typeof c=="object"?A3(c):X(B5,null,String(c))}function A3(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:Z3(c)}function cc(c,e){let t=0;const{shapeFlag:a}=c;if(e==null)e=null;else if(Z(e))t=16;else if(typeof e=="object")if(a&65){const n=e.default;n&&(n._c&&(n._d=!1),cc(c,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!(U5 in e)?e._ctx=s2:n===3&&s2&&(s2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else t1(e)?(e={default:e,_ctx:s2},t=32):(e=String(e),a&64?(t=16,e=[$4(e)]):t=8);c.children=e,c.shapeFlag|=t}function vL(...c){const e={};for(let t=0;t<c.length;t++){const a=c[t];for(const n in a)if(n==="class")e.class!==a.class&&(e.class=F3([e.class,a.class]));else if(n==="style")e.style=B9([e.style,a.style]);else if(x5(n)){const i=e[n],r=a[n];r&&i!==r&&!(Z(i)&&i.includes(r))&&(e[n]=i?[].concat(i,r):r)}else n!==""&&(e[n]=a[n])}return e}function G2(c,e,t,a=null){y2(c,e,7,[t,a])}const zL=Ns();let gL=0;function CL(c,e,t){const a=c.type,n=(e?e.appContext:c.appContext)||zL,i={uid:gL++,vnode:c,type:a,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ks(a,n),emitsOptions:gs(a,n),emit:null,emitted:null,propsDefaults:y1,inheritAttrs:a.inheritAttrs,ctx:y1,data:y1,props:y1,attrs:y1,slots:y1,refs:y1,setupState:y1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xV.bind(null,i),c.ce&&c.ce(i),i}let U1=null;const HL=()=>U1||s2;let tc,e6,Ya="__VUE_INSTANCE_SETTERS__";(e6=xe()[Ya])||(e6=xe()[Ya]=[]),e6.push(c=>U1=c),tc=c=>{e6.length>1?e6.forEach(e=>e(c)):e6[0](c)};const V6=c=>{tc(c),c.scope.on()},b4=()=>{U1&&U1.scope.off(),tc(null)};function Ds(c){return c.vnode.shapeFlag&4}let L0=!1;function ML(c,e=!1){L0=e;const{props:t,children:a}=c.vnode,n=Ds(c);nL(c,t,n,e),sL(c,a);const i=n?VL(c,e):void 0;return L0=!1,i}function VL(c,e){const t=c.type;c.accessCache=Object.create(null),c.proxy=T5(new Proxy(c.ctx,YV));const{setup:a}=t;if(a){const n=c.setupContext=a.length>1?bL(c):null;V6(c),A6();const i=$3(a,c,0,[c.props,n]);if(k6(),b4(),$r(i)){if(i.then(b4,b4),e)return i.then(r=>{Za(c,r,e)}).catch(r=>{E5(r,c,0)});c.asyncDep=i}else Za(c,i,e)}else Fs(c,e)}function Za(c,e,t){t1(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:N1(e)&&(c.setupState=ds(e)),Fs(c,t)}let Xa;function Fs(c,e,t){const a=c.type;if(!c.render){if(!e&&Xa&&!a.render){const n=a.template||J9(c).template;if(n){const{isCustomElement:i,compilerOptions:r}=c.appContext.config,{delimiters:s,compilerOptions:o}=a,l=O1(O1({isCustomElement:i,delimiters:s},r),o);a.render=Xa(n,l)}}c.render=a.render||O2}V6(c),A6(),ZV(c),k6(),b4()}function LL(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,t){return m2(c,"get","$attrs"),e[t]}}))}function bL(c){const e=t=>{c.exposed=t||{}};return{get attrs(){return LL(c)},slots:c.slots,emit:c.emit,expose:e}}function $5(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(ds(T5(c.exposed)),{get(e,t){if(t in e)return e[t];if(t in a0)return a0[t](c)},has(e,t){return t in e||t in a0}}))}function _L(c,e=!0){return t1(c)?c.displayName||c.name:c.name||e&&c.__name}function yL(c){return t1(c)&&"__vccOpts"in c}const g1=(c,e)=>VV(c,e,L0);function n2(c,e,t){const a=arguments.length;return a===2?N1(e)&&!Z(e)?Fe(e)?X(c,null,[e]):X(c,e):X(c,null,e):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&Fe(t)&&(t=[t]),X(c,e,t))}const wL=Symbol.for("v-scx"),xL=()=>w2(wL),SL="3.3.4",NL="http://www.w3.org/2000/svg",v4=typeof document<"u"?document:null,Qa=v4&&v4.createElement("template"),AL={insert:(c,e,t)=>{e.insertBefore(c,t||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,t,a)=>{const n=e?v4.createElementNS(NL,c):v4.createElement(c,t?{is:t}:void 0);return c==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:c=>v4.createTextNode(c),createComment:c=>v4.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>v4.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,t,a,n,i){const r=t?t.previousSibling:e.lastChild;if(n&&(n===i||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===i||!(n=n.nextSibling)););else{Qa.innerHTML=a?`<svg>${c}</svg>`:c;const s=Qa.content;if(a){const o=s.firstChild;for(;o.firstChild;)s.appendChild(o.firstChild);s.removeChild(o)}e.insertBefore(s,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function kL(c,e,t){const a=c._vtc;a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?c.removeAttribute("class"):t?c.setAttribute("class",e):c.className=e}function TL(c,e,t){const a=c.style,n=D1(t);if(t&&!n){if(e&&!D1(e))for(const i in e)t[i]==null&&Be(a,i,"");for(const i in t)Be(a,i,t[i])}else{const i=a.display;n?e!==t&&(a.cssText=t):e&&c.removeAttribute("style"),"_vod"in c&&(a.display=i)}}const Ja=/\s*!important$/;function Be(c,e,t){if(Z(t))t.forEach(a=>Be(c,e,a));else if(t==null&&(t=""),e.startsWith("--"))c.setProperty(e,t);else{const a=EL(c,e);Ja.test(t)?c.setProperty(N6(a),t.replace(Ja,""),"important"):c[a]=t}}const en=["Webkit","Moz","ms"],O7={};function EL(c,e){const t=O7[e];if(t)return t;let a=c3(e);if(a!=="filter"&&a in c)return O7[e]=a;a=A5(a);for(let n=0;n<en.length;n++){const i=en[n]+a;if(i in c)return O7[e]=i}return e}const cn="http://www.w3.org/1999/xlink";function IL(c,e,t,a,n){if(a&&e.startsWith("xlink:"))t==null?c.removeAttributeNS(cn,e.slice(6,e.length)):c.setAttributeNS(cn,e,t);else{const i=DM(e);t==null||i&&!Gr(t)?c.removeAttribute(e):c.setAttribute(e,i?"":t)}}function PL(c,e,t,a,n,i,r){if(e==="innerHTML"||e==="textContent"){a&&r(a,n,i),c[e]=t??"";return}const s=c.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){c._value=t;const l=s==="OPTION"?c.getAttribute("value"):c.value,f=t??"";l!==f&&(c.value=f),t==null&&c.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof c[e];l==="boolean"?t=Gr(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{c[e]=t}catch{}o&&c.removeAttribute(e)}function n6(c,e,t,a){c.addEventListener(e,t,a)}function RL(c,e,t,a){c.removeEventListener(e,t,a)}function OL(c,e,t,a,n=null){const i=c._vei||(c._vei={}),r=i[e];if(a&&r)r.value=a;else{const[s,o]=DL(e);if(a){const l=i[e]=UL(a,n);n6(c,s,l,o)}else r&&(RL(c,s,r,o),i[e]=void 0)}}const tn=/(?:Once|Passive|Capture)$/;function DL(c){let e;if(tn.test(c)){e={};let a;for(;a=c.match(tn);)c=c.slice(0,c.length-a[0].length),e[a[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):N6(c.slice(2)),e]}let D7=0;const FL=Promise.resolve(),BL=()=>D7||(FL.then(()=>D7=0),D7=Date.now());function UL(c,e){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;y2($L(a,t.value),e,5,[a])};return t.value=c,t.attached=BL(),t}function $L(c,e){if(Z(e)){const t=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{t.call(c),c._stopped=!0},e.map(a=>n=>!n._stopped&&a&&a(n))}else return e}const an=/^on[a-z]/,qL=(c,e,t,a,n=!1,i,r,s,o)=>{e==="class"?kL(c,a,n):e==="style"?TL(c,t,a):x5(e)?R9(e)||OL(c,e,t,a,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WL(c,e,a,n))?PL(c,e,a,i,r,s,o):(e==="true-value"?c._trueValue=a:e==="false-value"&&(c._falseValue=a),IL(c,e,a,n))};function WL(c,e,t,a){return a?!!(e==="innerHTML"||e==="textContent"||e in c&&an.test(e)&&t1(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA"||an.test(e)&&D1(t)?!1:e in c}const b3="transition",U6="animation",a4=(c,{slots:e})=>n2(OV,GL(c),e);a4.displayName="Transition";const Bs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};a4.props=O1({},Vs,Bs);const l4=(c,e=[])=>{Z(c)?c.forEach(t=>t(...e)):c&&c(...e)},nn=c=>c?Z(c)?c.some(e=>e.length>1):c.length>1:!1;function GL(c){const e={};for(const N in c)N in Bs||(e[N]=c[N]);if(c.css===!1)return e;const{name:t="v",type:a,duration:n,enterFromClass:i=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:o=i,appearActiveClass:l=r,appearToClass:f=s,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=c,p=jL(n),m=p&&p[0],H=p&&p[1],{onBeforeEnter:z,onEnter:C,onEnterCancelled:M,onLeave:V,onLeaveCancelled:w,onBeforeAppear:F=z,onAppear:P=C,onAppearCancelled:x=M}=e,b=(N,$,C1)=>{f4(N,$?f:s),f4(N,$?l:r),C1&&C1()},G=(N,$)=>{N._isLeaving=!1,f4(N,u),f4(N,d),f4(N,h),$&&$()},I=N=>($,C1)=>{const B1=N?P:C,i1=()=>b($,N,C1);l4(B1,[$,i1]),rn(()=>{f4($,N?o:i),_3($,N?f:s),nn(B1)||sn($,a,m,i1)})};return O1(e,{onBeforeEnter(N){l4(z,[N]),_3(N,i),_3(N,r)},onBeforeAppear(N){l4(F,[N]),_3(N,o),_3(N,l)},onEnter:I(!1),onAppear:I(!0),onLeave(N,$){N._isLeaving=!0;const C1=()=>G(N,$);_3(N,u),ZL(),_3(N,h),rn(()=>{N._isLeaving&&(f4(N,u),_3(N,d),nn(V)||sn(N,a,H,C1))}),l4(V,[N,C1])},onEnterCancelled(N){b(N,!1),l4(M,[N])},onAppearCancelled(N){b(N,!0),l4(x,[N])},onLeaveCancelled(N){G(N),l4(w,[N])}})}function jL(c){if(c==null)return null;if(N1(c))return[F7(c.enter),F7(c.leave)];{const e=F7(c);return[e,e]}}function F7(c){return TM(c)}function _3(c,e){e.split(/\s+/).forEach(t=>t&&c.classList.add(t)),(c._vtc||(c._vtc=new Set)).add(e)}function f4(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.remove(a));const{_vtc:t}=c;t&&(t.delete(e),t.size||(c._vtc=void 0))}function rn(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let KL=0;function sn(c,e,t,a){const n=c._endId=++KL,i=()=>{n===c._endId&&a()};if(t)return setTimeout(i,t);const{type:r,timeout:s,propCount:o}=YL(c,e);if(!r)return a();const l=r+"end";let f=0;const u=()=>{c.removeEventListener(l,h),i()},h=d=>{d.target===c&&++f>=o&&u()};setTimeout(()=>{f<o&&u()},s+1),c.addEventListener(l,h)}function YL(c,e){const t=window.getComputedStyle(c),a=p=>(t[p]||"").split(", "),n=a(`${b3}Delay`),i=a(`${b3}Duration`),r=on(n,i),s=a(`${U6}Delay`),o=a(`${U6}Duration`),l=on(s,o);let f=null,u=0,h=0;e===b3?r>0&&(f=b3,u=r,h=i.length):e===U6?l>0&&(f=U6,u=l,h=o.length):(u=Math.max(r,l),f=u>0?r>l?b3:U6:null,h=f?f===b3?i.length:o.length:0);const d=f===b3&&/\b(transform|all)(,|$)/.test(a(`${b3}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:d}}function on(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((t,a)=>ln(t)+ln(c[a])))}function ln(c){return Number(c.slice(0,-1).replace(",","."))*1e3}function ZL(){return document.body.offsetHeight}const fn=c=>{const e=c.props["onUpdate:modelValue"]||!1;return Z(e)?t=>P8(e,t):e};function XL(c){c.target.composing=!0}function un(c){const e=c.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _p1={created(c,{modifiers:{lazy:e,trim:t,number:a}},n){c._assign=fn(n);const i=a||n.props&&n.props.type==="number";n6(c,e?"change":"input",r=>{if(r.target.composing)return;let s=c.value;t&&(s=s.trim()),i&&(s=we(s)),c._assign(s)}),t&&n6(c,"change",()=>{c.value=c.value.trim()}),e||(n6(c,"compositionstart",XL),n6(c,"compositionend",un),n6(c,"change",un))},mounted(c,{value:e}){c.value=e??""},beforeUpdate(c,{value:e,modifiers:{lazy:t,trim:a,number:n}},i){if(c._assign=fn(i),c.composing||document.activeElement===c&&c.type!=="range"&&(t||a&&c.value.trim()===e||(n||c.type==="number")&&we(c.value)===e))return;const r=e??"";c.value!==r&&(c.value=r)}},QL=["ctrl","shift","alt","meta"],JL={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>QL.some(t=>c[`${t}Key`]&&!e.includes(t))},yp1=(c,e)=>(t,...a)=>{for(let n=0;n<e.length;n++){const i=JL[e[n]];if(i&&i(t,e))return}return c(t,...a)},eb={beforeMount(c,{value:e},{transition:t}){c._vod=c.style.display==="none"?"":c.style.display,t&&e?t.beforeEnter(c):$6(c,e)},mounted(c,{value:e},{transition:t}){t&&e&&t.enter(c)},updated(c,{value:e,oldValue:t},{transition:a}){!e!=!t&&(a?e?(a.beforeEnter(c),$6(c,!0),a.enter(c)):a.leave(c,()=>{$6(c,!1)}):$6(c,e))},beforeUnmount(c,{value:e}){$6(c,e)}};function $6(c,e){c.style.display=e?c._vod:"none"}const cb=O1({patchProp:qL},AL);let hn;function tb(){return hn||(hn=lL(cb))}const ab=(...c)=>{const e=tb().createApp(...c),{mount:t}=e;return e.mount=a=>{const n=nb(a);if(!n)return;const i=e._component;!t1(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.innerHTML="";const r=t(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function nb(c){return D1(c)?document.querySelector(c):c}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const i6=typeof window<"u";function ib(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const z1=Object.assign;function B7(c,e){const t={};for(const a in e){const n=e[a];t[a]=B2(n)?n.map(c):c(n)}return t}const i0=()=>{},B2=Array.isArray,rb=/\/$/,sb=c=>c.replace(rb,"");function U7(c,e,t="/"){let a,n={},i="",r="";const s=e.indexOf("#");let o=e.indexOf("?");return s<o&&s>=0&&(o=-1),o>-1&&(a=e.slice(0,o),i=e.slice(o+1,s>-1?s:e.length),n=c(i)),s>-1&&(a=a||e.slice(0,s),r=e.slice(s,e.length)),a=ub(a??e,t),{fullPath:a+(i&&"?")+i+r,path:a,query:n,hash:r}}function ob(c,e){const t=e.query?c(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function dn(c,e){return!e||!c.toLowerCase().startsWith(e.toLowerCase())?c:c.slice(e.length)||"/"}function lb(c,e,t){const a=e.matched.length-1,n=t.matched.length-1;return a>-1&&a===n&&L6(e.matched[a],t.matched[n])&&Us(e.params,t.params)&&c(e.query)===c(t.query)&&e.hash===t.hash}function L6(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function Us(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const t in c)if(!fb(c[t],e[t]))return!1;return!0}function fb(c,e){return B2(c)?mn(c,e):B2(e)?mn(e,c):c===e}function mn(c,e){return B2(e)?c.length===e.length&&c.every((t,a)=>t===e[a]):c.length===1&&c[0]===e}function ub(c,e){if(c.startsWith("/"))return c;if(!c)return e;const t=e.split("/"),a=c.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let i=t.length-1,r,s;for(r=0;r<a.length;r++)if(s=a[r],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+a.slice(r-(r===a.length?1:0)).join("/")}var b0;(function(c){c.pop="pop",c.push="push"})(b0||(b0={}));var r0;(function(c){c.back="back",c.forward="forward",c.unknown=""})(r0||(r0={}));function hb(c){if(!c)if(i6){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),sb(c)}const db=/^[^#]+#/;function mb(c,e){return c.replace(db,"#")+e}function pb(c,e){const t=document.documentElement.getBoundingClientRect(),a=c.getBoundingClientRect();return{behavior:e.behavior,left:a.left-t.left-(e.left||0),top:a.top-t.top-(e.top||0)}}const q5=()=>({left:window.pageXOffset,top:window.pageYOffset});function vb(c){let e;if("el"in c){const t=c.el,a=typeof t=="string"&&t.startsWith("#"),n=typeof t=="string"?a?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!n)return;e=pb(n,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function pn(c,e){return(history.state?history.state.position-e:-1)+c}const Ue=new Map;function zb(c,e){Ue.set(c,e)}function gb(c){const e=Ue.get(c);return Ue.delete(c),e}let Cb=()=>location.protocol+"//"+location.host;function $s(c,e){const{pathname:t,search:a,hash:n}=e,i=c.indexOf("#");if(i>-1){let s=n.includes(c.slice(i))?c.slice(i).length:1,o=n.slice(s);return o[0]!=="/"&&(o="/"+o),dn(o,"")}return dn(t,c)+a+n}function Hb(c,e,t,a){let n=[],i=[],r=null;const s=({state:h})=>{const d=$s(c,location),p=t.value,m=e.value;let H=0;if(h){if(t.value=d,e.value=h,r&&r===p){r=null;return}H=m?h.position-m.position:0}else a(d);n.forEach(z=>{z(t.value,p,{delta:H,type:b0.pop,direction:H?H>0?r0.forward:r0.back:r0.unknown})})};function o(){r=t.value}function l(h){n.push(h);const d=()=>{const p=n.indexOf(h);p>-1&&n.splice(p,1)};return i.push(d),d}function f(){const{history:h}=window;h.state&&h.replaceState(z1({},h.state,{scroll:q5()}),"")}function u(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:u}}function vn(c,e,t,a=!1,n=!1){return{back:c,current:e,forward:t,replaced:a,position:window.history.length,scroll:n?q5():null}}function Mb(c){const{history:e,location:t}=window,a={value:$s(c,t)},n={value:e.state};n.value||i(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(o,l,f){const u=c.indexOf("#"),h=u>-1?(t.host&&document.querySelector("base")?c:c.slice(u))+o:Cb()+c+o;try{e[f?"replaceState":"pushState"](l,"",h),n.value=l}catch(d){console.error(d),t[f?"replace":"assign"](h)}}function r(o,l){const f=z1({},e.state,vn(n.value.back,o,n.value.forward,!0),l,{position:n.value.position});i(o,f,!0),a.value=o}function s(o,l){const f=z1({},n.value,e.state,{forward:o,scroll:q5()});i(f.current,f,!0);const u=z1({},vn(a.value,o,null),{position:f.position+1},l);i(o,u,!1),a.value=o}return{location:a,state:n,push:s,replace:r}}function Vb(c){c=hb(c);const e=Mb(c),t=Hb(c,e.state,e.location,e.replace);function a(i,r=!0){r||t.pauseListeners(),history.go(i)}const n=z1({location:"",base:c,go:a,createHref:mb.bind(null,c)},e,t);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function Lb(c){return c=location.host?c||location.pathname+location.search:"",c.includes("#")||(c+="#"),Vb(c)}function bb(c){return typeof c=="string"||c&&typeof c=="object"}function qs(c){return typeof c=="string"||typeof c=="symbol"}const y3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ws=Symbol("");var zn;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(zn||(zn={}));function b6(c,e){return z1(new Error,{type:c,[Ws]:!0},e)}function t3(c,e){return c instanceof Error&&Ws in c&&(e==null||!!(c.type&e))}const gn="[^/]+?",_b={sensitive:!1,strict:!1,start:!0,end:!0},yb=/[.+*?^${}()[\]/\\]/g;function wb(c,e){const t=z1({},_b,e),a=[];let n=t.start?"^":"";const i=[];for(const l of c){const f=l.length?[]:[90];t.strict&&!l.length&&(n+="/");for(let u=0;u<l.length;u++){const h=l[u];let d=40+(t.sensitive?.25:0);if(h.type===0)u||(n+="/"),n+=h.value.replace(yb,"\\$&"),d+=40;else if(h.type===1){const{value:p,repeatable:m,optional:H,regexp:z}=h;i.push({name:p,repeatable:m,optional:H});const C=z||gn;if(C!==gn){d+=10;try{new RegExp(`(${C})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${p}" (${C}): `+V.message)}}let M=m?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(M=H&&l.length<2?`(?:/${M})`:"/"+M),H&&(M+="?"),n+=M,d+=20,H&&(d+=-8),m&&(d+=-20),C===".*"&&(d+=-50)}f.push(d)}a.push(f)}if(t.strict&&t.end){const l=a.length-1;a[l][a[l].length-1]+=.7000000000000001}t.strict||(n+="/?"),t.end?n+="$":t.strict&&(n+="(?:/|$)");const r=new RegExp(n,t.sensitive?"":"i");function s(l){const f=l.match(r),u={};if(!f)return null;for(let h=1;h<f.length;h++){const d=f[h]||"",p=i[h-1];u[p.name]=d&&p.repeatable?d.split("/"):d}return u}function o(l){let f="",u=!1;for(const h of c){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const d of h)if(d.type===0)f+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:H}=d,z=p in l?l[p]:"";if(B2(z)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const C=B2(z)?z.join("/"):z;if(!C)if(H)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${p}"`);f+=C}}return f||"/"}return{re:r,score:a,keys:i,parse:s,stringify:o}}function xb(c,e){let t=0;for(;t<c.length&&t<e.length;){const a=e[t]-c[t];if(a)return a;t++}return c.length<e.length?c.length===1&&c[0]===40+40?-1:1:c.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Sb(c,e){let t=0;const a=c.score,n=e.score;for(;t<a.length&&t<n.length;){const i=xb(a[t],n[t]);if(i)return i;t++}if(Math.abs(n.length-a.length)===1){if(Cn(a))return 1;if(Cn(n))return-1}return n.length-a.length}function Cn(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const Nb={type:0,value:""},Ab=/[a-zA-Z0-9_]/;function kb(c){if(!c)return[[]];if(c==="/")return[[Nb]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(d){throw new Error(`ERR (${t})/"${l}": ${d}`)}let t=0,a=t;const n=[];let i;function r(){i&&n.push(i),i=[]}let s=0,o,l="",f="";function u(){l&&(t===0?i.push({type:0,value:l}):t===1||t===2||t===3?(i.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=o}for(;s<c.length;){if(o=c[s++],o==="\\"&&t!==2){a=t,t=4;continue}switch(t){case 0:o==="/"?(l&&u(),r()):o===":"?(u(),t=1):h();break;case 4:h(),t=a;break;case 1:o==="("?t=2:Ab.test(o)?h():(u(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&s--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:t=3:f+=o;break;case 3:u(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&s--,f="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),r(),n}function Tb(c,e,t){const a=wb(kb(c.path),t),n=z1(a,{record:c,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function Eb(c,e){const t=[],a=new Map;e=Vn({strict:!1,end:!0,sensitive:!1},e);function n(f){return a.get(f)}function i(f,u,h){const d=!h,p=Ib(f);p.aliasOf=h&&h.record;const m=Vn(e,f),H=[p];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of M)H.push(z1({},p,{components:h?h.record.components:p.components,path:V,aliasOf:h?h.record:p}))}let z,C;for(const M of H){const{path:V}=M;if(u&&V[0]!=="/"){const w=u.record.path,F=w[w.length-1]==="/"?"":"/";M.path=u.record.path+(V&&F+V)}if(z=Tb(M,u,m),h?h.alias.push(z):(C=C||z,C!==z&&C.alias.push(z),d&&f.name&&!Mn(z)&&r(f.name)),p.children){const w=p.children;for(let F=0;F<w.length;F++)i(w[F],z,h&&h.children[F])}h=h||z,(z.record.components&&Object.keys(z.record.components).length||z.record.name||z.record.redirect)&&o(z)}return C?()=>{r(C)}:i0}function r(f){if(qs(f)){const u=a.get(f);u&&(a.delete(f),t.splice(t.indexOf(u),1),u.children.forEach(r),u.alias.forEach(r))}else{const u=t.indexOf(f);u>-1&&(t.splice(u,1),f.record.name&&a.delete(f.record.name),f.children.forEach(r),f.alias.forEach(r))}}function s(){return t}function o(f){let u=0;for(;u<t.length&&Sb(f,t[u])>=0&&(f.record.path!==t[u].record.path||!Gs(f,t[u]));)u++;t.splice(u,0,f),f.record.name&&!Mn(f)&&a.set(f.record.name,f)}function l(f,u){let h,d={},p,m;if("name"in f&&f.name){if(h=a.get(f.name),!h)throw b6(1,{location:f});m=h.record.name,d=z1(Hn(u.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),f.params&&Hn(f.params,h.keys.map(C=>C.name))),p=h.stringify(d)}else if("path"in f)p=f.path,h=t.find(C=>C.re.test(p)),h&&(d=h.parse(p),m=h.record.name);else{if(h=u.name?a.get(u.name):t.find(C=>C.re.test(u.path)),!h)throw b6(1,{location:f,currentLocation:u});m=h.record.name,d=z1({},u.params,f.params),p=h.stringify(d)}const H=[];let z=h;for(;z;)H.unshift(z.record),z=z.parent;return{name:m,path:p,params:d,matched:H,meta:Rb(H)}}return c.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:r,getRoutes:s,getRecordMatcher:n}}function Hn(c,e){const t={};for(const a of e)a in c&&(t[a]=c[a]);return t}function Ib(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Pb(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Pb(c){const e={},t=c.props||!1;if("component"in c)e.default=t;else for(const a in c.components)e[a]=typeof t=="object"?t[a]:t;return e}function Mn(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Rb(c){return c.reduce((e,t)=>z1(e,t.meta),{})}function Vn(c,e){const t={};for(const a in c)t[a]=a in e?e[a]:c[a];return t}function Gs(c,e){return e.children.some(t=>t===c||Gs(c,t))}const js=/#/g,Ob=/&/g,Db=/\//g,Fb=/=/g,Bb=/\?/g,Ks=/\+/g,Ub=/%5B/g,$b=/%5D/g,Ys=/%5E/g,qb=/%60/g,Zs=/%7B/g,Wb=/%7C/g,Xs=/%7D/g,Gb=/%20/g;function ac(c){return encodeURI(""+c).replace(Wb,"|").replace(Ub,"[").replace($b,"]")}function jb(c){return ac(c).replace(Zs,"{").replace(Xs,"}").replace(Ys,"^")}function $e(c){return ac(c).replace(Ks,"%2B").replace(Gb,"+").replace(js,"%23").replace(Ob,"%26").replace(qb,"`").replace(Zs,"{").replace(Xs,"}").replace(Ys,"^")}function Kb(c){return $e(c).replace(Fb,"%3D")}function Yb(c){return ac(c).replace(js,"%23").replace(Bb,"%3F")}function Zb(c){return c==null?"":Yb(c).replace(Db,"%2F")}function X8(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function Xb(c){const e={};if(c===""||c==="?")return e;const a=(c[0]==="?"?c.slice(1):c).split("&");for(let n=0;n<a.length;++n){const i=a[n].replace(Ks," "),r=i.indexOf("="),s=X8(r<0?i:i.slice(0,r)),o=r<0?null:X8(i.slice(r+1));if(s in e){let l=e[s];B2(l)||(l=e[s]=[l]),l.push(o)}else e[s]=o}return e}function Ln(c){let e="";for(let t in c){const a=c[t];if(t=Kb(t),a==null){a!==void 0&&(e+=(e.length?"&":"")+t);continue}(B2(a)?a.map(i=>i&&$e(i)):[a&&$e(a)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function Qb(c){const e={};for(const t in c){const a=c[t];a!==void 0&&(e[t]=B2(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return e}const Jb=Symbol(""),bn=Symbol(""),W5=Symbol(""),nc=Symbol(""),qe=Symbol("");function q6(){let c=[];function e(a){return c.push(a),()=>{const n=c.indexOf(a);n>-1&&c.splice(n,1)}}function t(){c=[]}return{add:e,list:()=>c.slice(),reset:t}}function k3(c,e,t,a,n){const i=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((r,s)=>{const o=u=>{u===!1?s(b6(4,{from:t,to:e})):u instanceof Error?s(u):bb(u)?s(b6(2,{from:e,to:u})):(i&&a.enterCallbacks[n]===i&&typeof u=="function"&&i.push(u),r())},l=c.call(a&&a.instances[n],e,t,o);let f=Promise.resolve(l);c.length<3&&(f=f.then(o)),f.catch(u=>s(u))})}function $7(c,e,t,a){const n=[];for(const i of c)for(const r in i.components){let s=i.components[r];if(!(e!=="beforeRouteEnter"&&!i.instances[r]))if(e_(s)){const l=(s.__vccOpts||s)[e];l&&n.push(k3(l,t,a,i,r))}else{let o=s();n.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${i.path}"`));const f=ib(l)?l.default:l;i.components[r]=f;const h=(f.__vccOpts||f)[e];return h&&k3(h,t,a,i,r)()}))}}return n}function e_(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function _n(c){const e=w2(W5),t=w2(nc),a=g1(()=>e.resolve(h1(c.to))),n=g1(()=>{const{matched:o}=a.value,{length:l}=o,f=o[l-1],u=t.matched;if(!f||!u.length)return-1;const h=u.findIndex(L6.bind(null,f));if(h>-1)return h;const d=yn(o[l-2]);return l>1&&yn(f)===d&&u[u.length-1].path!==d?u.findIndex(L6.bind(null,o[l-2])):h}),i=g1(()=>n.value>-1&&n_(t.params,a.value.params)),r=g1(()=>n.value>-1&&n.value===t.matched.length-1&&Us(t.params,a.value.params));function s(o={}){return a_(o)?e[h1(c.replace)?"replace":"push"](h1(c.to)).catch(i0):Promise.resolve()}return{route:a,href:g1(()=>a.value.href),isActive:i,isExactActive:r,navigate:s}}const c_=$0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_n,setup(c,{slots:e}){const t=u3(_n(c)),{options:a}=w2(W5),n=g1(()=>({[wn(c.activeClass,a.linkActiveClass,"router-link-active")]:t.isActive,[wn(c.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&e.default(t);return c.custom?i:n2("a",{"aria-current":t.isExactActive?c.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:n.value},i)}}}),t_=c_;function a_(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function n_(c,e){for(const t in e){const a=e[t],n=c[t];if(typeof a=="string"){if(a!==n)return!1}else if(!B2(n)||n.length!==a.length||a.some((i,r)=>i!==n[r]))return!1}return!0}function yn(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const wn=(c,e,t)=>c??e??t,i_=$0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:t}){const a=w2(qe),n=g1(()=>c.route||a.value),i=w2(bn,0),r=g1(()=>{let l=h1(i);const{matched:f}=n.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),s=g1(()=>n.value.matched[r.value]);d6(bn,g1(()=>r.value+1)),d6(Jb,s),d6(qe,n);const o=u1();return q3(()=>[o.value,s.value,c.name],([l,f,u],[h,d,p])=>{f&&(f.instances[u]=l,d&&d!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),l&&f&&(!d||!L6(f,d)||!h)&&(f.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=n.value,f=c.name,u=s.value,h=u&&u.components[f];if(!h)return xn(t.default,{Component:h,route:l});const d=u.props[f],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,H=n2(h,z1({},p,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(u.instances[f]=null)},ref:o}));return xn(t.default,{Component:H,route:l})||H}}});function xn(c,e){if(!c)return null;const t=c(e);return t.length===1?t[0]:t}const r_=i_;function s_(c){const e=Eb(c.routes,c),t=c.parseQuery||Xb,a=c.stringifyQuery||Ln,n=c.history,i=q6(),r=q6(),s=q6(),o=pV(y3);let l=y3;i6&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=B7.bind(null,y=>""+y),u=B7.bind(null,Zb),h=B7.bind(null,X8);function d(y,U){let O,j;return qs(y)?(O=e.getRecordMatcher(y),j=U):j=y,e.addRoute(j,O)}function p(y){const U=e.getRecordMatcher(y);U&&e.removeRoute(U)}function m(){return e.getRoutes().map(y=>y.record)}function H(y){return!!e.getRecordMatcher(y)}function z(y,U){if(U=z1({},U||o.value),typeof y=="string"){const L=U7(t,y,U.path),_=e.resolve({path:L.path},U),S=n.createHref(L.fullPath);return z1(L,_,{params:h(_.params),hash:X8(L.hash),redirectedFrom:void 0,href:S})}let O;if("path"in y)O=z1({},y,{path:U7(t,y.path,U.path).path});else{const L=z1({},y.params);for(const _ in L)L[_]==null&&delete L[_];O=z1({},y,{params:u(L)}),U.params=u(U.params)}const j=e.resolve(O,U),p1=y.hash||"";j.params=f(h(j.params));const v=ob(a,z1({},y,{hash:jb(p1),path:j.path})),g=n.createHref(v);return z1({fullPath:v,hash:p1,query:a===Ln?Qb(y.query):y.query||{}},j,{redirectedFrom:void 0,href:g})}function C(y){return typeof y=="string"?U7(t,y,o.value.path):z1({},y)}function M(y,U){if(l!==y)return b6(8,{from:U,to:y})}function V(y){return P(y)}function w(y){return V(z1(C(y),{replace:!0}))}function F(y){const U=y.matched[y.matched.length-1];if(U&&U.redirect){const{redirect:O}=U;let j=typeof O=="function"?O(y):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=C(j):{path:j},j.params={}),z1({query:y.query,hash:y.hash,params:"path"in j?{}:y.params},j)}}function P(y,U){const O=l=z(y),j=o.value,p1=y.state,v=y.force,g=y.replace===!0,L=F(O);if(L)return P(z1(C(L),{state:typeof L=="object"?z1({},p1,L.state):p1,force:v,replace:g}),U||O);const _=O;_.redirectedFrom=U;let S;return!v&&lb(a,j,O)&&(S=b6(16,{to:_,from:j}),v2(j,j,!0,!1)),(S?Promise.resolve(S):G(_,j)).catch(A=>t3(A)?t3(A,2)?A:N2(A):d1(A,_,j)).then(A=>{if(A){if(t3(A,2))return P(z1({replace:g},C(A.to),{state:typeof A.to=="object"?z1({},p1,A.to.state):p1,force:v}),U||_)}else A=N(_,j,!0,g,p1);return I(_,j,A),A})}function x(y,U){const O=M(y,U);return O?Promise.reject(O):Promise.resolve()}function b(y){const U=Q4.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(y):y()}function G(y,U){let O;const[j,p1,v]=o_(y,U);O=$7(j.reverse(),"beforeRouteLeave",y,U);for(const L of j)L.leaveGuards.forEach(_=>{O.push(k3(_,y,U))});const g=x.bind(null,y,U);return O.push(g),Z1(O).then(()=>{O=[];for(const L of i.list())O.push(k3(L,y,U));return O.push(g),Z1(O)}).then(()=>{O=$7(p1,"beforeRouteUpdate",y,U);for(const L of p1)L.updateGuards.forEach(_=>{O.push(k3(_,y,U))});return O.push(g),Z1(O)}).then(()=>{O=[];for(const L of v)if(L.beforeEnter)if(B2(L.beforeEnter))for(const _ of L.beforeEnter)O.push(k3(_,y,U));else O.push(k3(L.beforeEnter,y,U));return O.push(g),Z1(O)}).then(()=>(y.matched.forEach(L=>L.enterCallbacks={}),O=$7(v,"beforeRouteEnter",y,U),O.push(g),Z1(O))).then(()=>{O=[];for(const L of r.list())O.push(k3(L,y,U));return O.push(g),Z1(O)}).catch(L=>t3(L,8)?L:Promise.reject(L))}function I(y,U,O){s.list().forEach(j=>b(()=>j(y,U,O)))}function N(y,U,O,j,p1){const v=M(y,U);if(v)return v;const g=U===y3,L=i6?history.state:{};O&&(j||g?n.replace(y.fullPath,z1({scroll:g&&L&&L.scroll},p1)):n.push(y.fullPath,p1)),o.value=y,v2(y,U,O,g),N2()}let $;function C1(){$||($=n.listen((y,U,O)=>{if(!l8.listening)return;const j=z(y),p1=F(j);if(p1){P(z1(p1,{replace:!0}),j).catch(i0);return}l=j;const v=o.value;i6&&zb(pn(v.fullPath,O.delta),q5()),G(j,v).catch(g=>t3(g,12)?g:t3(g,2)?(P(g.to,j).then(L=>{t3(L,20)&&!O.delta&&O.type===b0.pop&&n.go(-1,!1)}).catch(i0),Promise.reject()):(O.delta&&n.go(-O.delta,!1),d1(g,j,v))).then(g=>{g=g||N(j,v,!1),g&&(O.delta&&!t3(g,8)?n.go(-O.delta,!1):O.type===b0.pop&&t3(g,20)&&n.go(-1,!1)),I(j,v,g)}).catch(i0)}))}let B1=q6(),i1=q6(),v1;function d1(y,U,O){N2(y);const j=i1.list();return j.length?j.forEach(p1=>p1(y,U,O)):console.error(y),Promise.reject(y)}function b2(){return v1&&o.value!==y3?Promise.resolve():new Promise((y,U)=>{B1.add([y,U])})}function N2(y){return v1||(v1=!y,C1(),B1.list().forEach(([U,O])=>y?O(y):U()),B1.reset()),y}function v2(y,U,O,j){const{scrollBehavior:p1}=c;if(!i6||!p1)return Promise.resolve();const v=!O&&gb(pn(y.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return O3().then(()=>p1(y,U,v)).then(g=>g&&vb(g)).catch(g=>d1(g,y,U))}const Y1=y=>n.go(y);let V3;const Q4=new Set,l8={currentRoute:o,listening:!0,addRoute:d,removeRoute:p,hasRoute:H,getRoutes:m,resolve:z,options:c,push:V,replace:w,go:Y1,back:()=>Y1(-1),forward:()=>Y1(1),beforeEach:i.add,beforeResolve:r.add,afterEach:s.add,onError:i1.add,isReady:b2,install(y){const U=this;y.component("RouterLink",t_),y.component("RouterView",r_),y.config.globalProperties.$router=U,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>h1(o)}),i6&&!V3&&o.value===y3&&(V3=!0,V(n.location).catch(p1=>{}));const O={};for(const p1 in y3)Object.defineProperty(O,p1,{get:()=>o.value[p1],enumerable:!0});y.provide(W5,U),y.provide(nc,ss(O)),y.provide(qe,o);const j=y.unmount;Q4.add(y),y.unmount=function(){Q4.delete(y),Q4.size<1&&(l=y3,$&&$(),$=null,o.value=y3,V3=!1,v1=!1),j()}}};function Z1(y){return y.reduce((U,O)=>U.then(()=>b(O)),Promise.resolve())}return l8}function o_(c,e){const t=[],a=[],n=[],i=Math.max(e.matched.length,c.matched.length);for(let r=0;r<i;r++){const s=e.matched[r];s&&(c.matched.find(l=>L6(l,s))?a.push(s):t.push(s));const o=c.matched[r];o&&(e.matched.find(l=>L6(l,o))||n.push(o))}return[t,a,n]}function l_(){return w2(W5)}function wp1(){return w2(nc)}const W0={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTYyOGNhZGFkZjBmYmFjMWU3OWFkNDQ2NTNkYzIzMiIsInN1YiI6IjYzOWMzNGFmODFhN2ZjMDBhMjY0MTRiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5C10QBpt4J1DB-rJwd5nyuVwtuCL4zXuPKtlBj2GhtA"}},Qs="https://image.tmdb.org/t/p/original",G5="https://image.tmdb.org/t/p/w500";const f_={key:0,class:"upcoming__item"},u_={alt:"",class:"upcoming__bg"},h_={class:"upcoming__content"},d_={class:"upcoming__title text-limit"},m_={class:"upcoming__desc text-limit"},p_=["src"],v_={class:"upcoming__next-content"},z_=c1("p",{class:"upcoming__next-name"},"Следующий",-1),g_={class:"upcoming__next-title"},C_=c1("div",{class:"upcoming__next-line"},null,-1),H_={__name:"UpcomingItem",props:{movie:Object,index:Number,slideView:Number,next:Object},setup(c){return(e,t)=>{const a=f2("BtnMore"),n=Q9("lazy");return r1(),x2(a4,{name:"upcoming-item",mode:"out-in"},{default:A1(()=>[c.slideView==c.index?(r1(),w1("div",f_,[P5(c1("img",u_,null,512),[[n,h1(Qs)+c.movie.backdrop_path]]),c1("div",h_,[c1("h1",d_,a2(c.movie.title),1),c1("p",m_,a2(c.movie.overview),1),X(a,{id:c.movie.id},null,8,["id"])]),c1("div",{class:"upcoming__next",onClick:t[0]||(t[0]=i=>e.$emit("nextSlide"))},[c1("img",{src:h1(G5)+c.next.backdrop_path,alt:"",class:"upcoming__next-img"},null,8,p_),c1("div",v_,[z_,c1("h3",g_,a2(c.next.title),1),C_])])])):S4("",!0)]),_:1})}}};var M_=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Js;const j5=c=>Js=c,eo=Symbol();function We(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var s0;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(s0||(s0={}));function V_(){const c=Yr(!0),e=c.run(()=>u1({}));let t=[],a=[];const n=T5({install(i){j5(n),n._a=i,i.provide(eo,n),i.config.globalProperties.$pinia=n,a.forEach(r=>t.push(r)),a=[]},use(i){return!this._a&&!M_?a.push(i):t.push(i),this},_p:t,_a:null,_e:c,_s:new Map,state:e});return n}const co=()=>{};function Sn(c,e,t,a=co){c.push(e);const n=()=>{const i=c.indexOf(e);i>-1&&(c.splice(i,1),a())};return!t&&Zr()&&BM(n),n}function c6(c,...e){c.slice().forEach(t=>{t(...e)})}const L_=c=>c();function Ge(c,e){c instanceof Map&&e instanceof Map&&e.forEach((t,a)=>c.set(a,t)),c instanceof Set&&e instanceof Set&&e.forEach(c.add,c);for(const t in e){if(!e.hasOwnProperty(t))continue;const a=e[t],n=c[t];We(n)&&We(a)&&c.hasOwnProperty(t)&&!P1(a)&&!U3(a)?c[t]=Ge(n,a):c[t]=a}return c}const b_=Symbol();function __(c){return!We(c)||!c.hasOwnProperty(b_)}const{assign:N3}=Object;function y_(c){return!!(P1(c)&&c.effect)}function w_(c,e,t,a){const{state:n,actions:i,getters:r}=e,s=t.state.value[c];let o;function l(){s||(t.state.value[c]=n?n():{});const f=gV(t.state.value[c]);return N3(f,i,Object.keys(r||{}).reduce((u,h)=>(u[h]=T5(g1(()=>{j5(t);const d=t._s.get(c);return r[h].call(d,d)})),u),{}))}return o=to(c,l,e,t,a,!0),o}function to(c,e,t={},a,n,i){let r;const s=N3({actions:{}},t),o={deep:!0};let l,f,u=[],h=[],d;const p=a.state.value[c];!i&&!p&&(a.state.value[c]={}),u1({});let m;function H(x){let b;l=f=!1,typeof x=="function"?(x(a.state.value[c]),b={type:s0.patchFunction,storeId:c,events:d}):(Ge(a.state.value[c],x),b={type:s0.patchObject,payload:x,storeId:c,events:d});const G=m=Symbol();O3().then(()=>{m===G&&(l=!0)}),f=!0,c6(u,b,a.state.value[c])}const z=i?function(){const{state:b}=t,G=b?b():{};this.$patch(I=>{N3(I,G)})}:co;function C(){r.stop(),u=[],h=[],a._s.delete(c)}function M(x,b){return function(){j5(a);const G=Array.from(arguments),I=[],N=[];function $(i1){I.push(i1)}function C1(i1){N.push(i1)}c6(h,{args:G,name:x,store:w,after:$,onError:C1});let B1;try{B1=b.apply(this&&this.$id===c?this:w,G)}catch(i1){throw c6(N,i1),i1}return B1 instanceof Promise?B1.then(i1=>(c6(I,i1),i1)).catch(i1=>(c6(N,i1),Promise.reject(i1))):(c6(I,B1),B1)}}const V={_p:a,$id:c,$onAction:Sn.bind(null,h),$patch:H,$reset:z,$subscribe(x,b={}){const G=Sn(u,x,b.detached,()=>I()),I=r.run(()=>q3(()=>a.state.value[c],N=>{(b.flush==="sync"?f:l)&&x({storeId:c,type:s0.direct,events:d},N)},N3({},o,b)));return G},$dispose:C},w=u3(V);a._s.set(c,w);const F=a._a&&a._a.runWithContext||L_,P=a._e.run(()=>(r=Yr(),F(()=>r.run(e))));for(const x in P){const b=P[x];if(P1(b)&&!y_(b)||U3(b))i||(p&&__(b)&&(P1(b)?b.value=p[x]:Ge(b,p[x])),a.state.value[c][x]=b);else if(typeof b=="function"){const G=M(x,b);P[x]=G,s.actions[x]=b}}return N3(w,P),N3(l1(w),P),Object.defineProperty(w,"$state",{get:()=>a.state.value[c],set:x=>{H(b=>{N3(b,x)})}}),a._p.forEach(x=>{N3(w,r.run(()=>x({store:w,app:a._a,pinia:a,options:s})))}),p&&i&&t.hydrate&&t.hydrate(w.$state,p),l=!0,f=!0,w}function q4(c,e,t){let a,n;const i=typeof e=="function";typeof c=="string"?(a=c,n=i?t:e):(n=c,a=c.id);function r(s,o){const l=aL();return s=s||(l?w2(eo,null):null),s&&j5(s),s=Js,s._s.has(a)||(i?to(a,e,n,s):w_(a,n,s)),s._s.get(a)}return r.$id=a,r}const x_=q4("upcoming",{state:()=>({list:[]}),actions:{async getUpcoming(){try{const t=(await(await fetch("https://api.themoviedb.org/3/movie/upcoming?language=ru",W0)).json()).results.filter(a=>a.backdrop_path!=null);this.list=t}catch(c){console.log(c)}}}});const S_={key:0,class:"upcoming"},N_={key:1,class:"loading"},A_=c1("div",{class:"loading__spiner"},null,-1),k_=[A_],T_={__name:"Upcoming",setup(c){let e=x_();e.getUpcoming();const t=g1(()=>e.list);let a=u1(0),n=u1(null);function i(){clearTimeout(n.value),r()}function r(){t.value.length-1==a.value?a.value=0:a.value++,n.value=setTimeout(r,5e3)}return r(),(s,o)=>(r1(),x2(a4,{name:"upcoming"},{default:A1(()=>[t.value.length>0?(r1(),w1("div",S_,[(r1(!0),w1(X1,null,q0(t.value,(l,f)=>(r1(),x2(H_,{key:f,movie:l,index:f,slideView:h1(a),next:t.value[f+1==t.value.length?0:f+1],onNextSlide:i},null,8,["movie","index","slideView","next"]))),128))])):(r1(),w1("div",N_,k_))]),_:1}))}},E_=q4("popular",{state:()=>({moviesList:[],tvsList:[],totalPages:1}),actions:{async getPopular(c,e=1){try{const a=await(await fetch(`https://api.themoviedb.org/3/${c}/popular?language=ru&page=${e}`,W0)).json();this.totalPages=a.total_pages;const n=a.results.filter(i=>i.poster_path!=null);c=="tv"?this.tvsList=n:this.moviesList=n}catch(t){console.log(t)}}},getters:{maxPages(c){return c.totalPages>500?500:c.totalPages}}});function Nn(c){return c!==null&&typeof c=="object"&&"constructor"in c&&c.constructor===Object}function ic(c,e){c===void 0&&(c={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof c[t]>"u"?c[t]=e[t]:Nn(e[t])&&Nn(c[t])&&Object.keys(e[t]).length>0&&ic(c[t],e[t])})}const ao={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function W4(){const c=typeof document<"u"?document:{};return ic(c,ao),c}const I_={document:ao,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(c){return typeof setTimeout>"u"?(c(),null):setTimeout(c,0)},cancelAnimationFrame(c){typeof setTimeout>"u"||clearTimeout(c)}};function V2(){const c=typeof window<"u"?window:{};return ic(c,I_),c}function P_(c){const e=c;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function je(c,e){return e===void 0&&(e=0),setTimeout(c,e)}function Q8(){return Date.now()}function R_(c){const e=V2();let t;return e.getComputedStyle&&(t=e.getComputedStyle(c,null)),!t&&c.currentStyle&&(t=c.currentStyle),t||(t=c.style),t}function O_(c,e){e===void 0&&(e="x");const t=V2();let a,n,i;const r=R_(c);return t.WebKitCSSMatrix?(n=r.transform||r.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(s=>s.replace(",",".")).join(", ")),i=new t.WebKitCSSMatrix(n==="none"?"":n)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=i.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?n=i.m41:a.length===16?n=parseFloat(a[12]):n=parseFloat(a[4])),e==="y"&&(t.WebKitCSSMatrix?n=i.m42:a.length===16?n=parseFloat(a[13]):n=parseFloat(a[5])),n||0}function v8(c){return typeof c=="object"&&c!==null&&c.constructor&&Object.prototype.toString.call(c).slice(8,-1)==="Object"}function D_(c){return typeof window<"u"&&typeof window.HTMLElement<"u"?c instanceof HTMLElement:c&&(c.nodeType===1||c.nodeType===11)}function C2(){const c=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const a=t<0||arguments.length<=t?void 0:arguments[t];if(a!=null&&!D_(a)){const n=Object.keys(Object(a)).filter(i=>e.indexOf(i)<0);for(let i=0,r=n.length;i<r;i+=1){const s=n[i],o=Object.getOwnPropertyDescriptor(a,s);o!==void 0&&o.enumerable&&(v8(c[s])&&v8(a[s])?a[s].__swiper__?c[s]=a[s]:C2(c[s],a[s]):!v8(c[s])&&v8(a[s])?(c[s]={},a[s].__swiper__?c[s]=a[s]:C2(c[s],a[s])):c[s]=a[s])}}}return c}function z8(c,e,t){c.style.setProperty(e,t)}function no(c){let{swiper:e,targetPosition:t,side:a}=c;const n=V2(),i=-e.translate;let r=null,s;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",f=(h,d)=>l==="next"&&h>=d||l==="prev"&&h<=d,u=()=>{s=new Date().getTime(),r===null&&(r=s);const h=Math.max(Math.min((s-r)/o,1),0),d=.5-Math.cos(h*Math.PI)/2;let p=i+d*(t-i);if(f(p,t)&&(p=t),e.wrapperEl.scrollTo({[a]:p}),f(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:p})}),n.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=n.requestAnimationFrame(u)};u()}function Z2(c,e){return e===void 0&&(e=""),[...c.children].filter(t=>t.matches(e))}function io(c,e){e===void 0&&(e=[]);const t=document.createElement(c);return t.classList.add(...Array.isArray(e)?e:[e]),t}function F_(c,e){const t=[];for(;c.previousElementSibling;){const a=c.previousElementSibling;e?a.matches(e)&&t.push(a):t.push(a),c=a}return t}function B_(c,e){const t=[];for(;c.nextElementSibling;){const a=c.nextElementSibling;e?a.matches(e)&&t.push(a):t.push(a),c=a}return t}function D3(c,e){return V2().getComputedStyle(c,null).getPropertyValue(e)}function An(c){let e=c,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function U_(c,e){const t=[];let a=c.parentElement;for(;a;)e?a.matches(e)&&t.push(a):t.push(a),a=a.parentElement;return t}function kn(c,e,t){const a=V2();return t?c[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(c,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(c,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):c.offsetWidth}let q7;function $_(){const c=V2(),e=W4();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in c||c.DocumentTouch&&e instanceof c.DocumentTouch)}}function ro(){return q7||(q7=$_()),q7}let W7;function q_(c){let{userAgent:e}=c===void 0?{}:c;const t=ro(),a=V2(),n=a.navigator.platform,i=e||a.navigator.userAgent,r={ios:!1,android:!1},s=a.screen.width,o=a.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let f=i.match(/(iPad).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),h=!f&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d=n==="Win32";let p=n==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&p&&t.touch&&m.indexOf(`${s}x${o}`)>=0&&(f=i.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),p=!1),l&&!d&&(r.os="android",r.android=!0),(f||h||u)&&(r.os="ios",r.ios=!0),r}function W_(c){return c===void 0&&(c={}),W7||(W7=q_(c)),W7}let G7;function G_(){const c=V2();let e=!1;function t(){const a=c.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(t()){const a=String(c.navigator.userAgent);if(a.includes("Version/")){const[n,i]=a.split("Version/")[1].split(" ")[0].split(".").map(r=>Number(r));e=n<16||n===16&&i<2}}return{isSafari:e||t(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(c.navigator.userAgent)}}function j_(){return G7||(G7=G_()),G7}function K_(c){let{swiper:e,on:t,emit:a}=c;const n=V2();let i=null,r=null;const s=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},o=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(u=>{r=n.requestAnimationFrame(()=>{const{width:h,height:d}=e;let p=h,m=d;u.forEach(H=>{let{contentBoxSize:z,contentRect:C,target:M}=H;M&&M!==e.el||(p=C?C.width:(z[0]||z).inlineSize,m=C?C.height:(z[0]||z).blockSize)}),(p!==h||m!==d)&&s()})}),i.observe(e.el))},l=()=>{r&&n.cancelAnimationFrame(r),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},f=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof n.ResizeObserver<"u"){o();return}n.addEventListener("resize",s),n.addEventListener("orientationchange",f)}),t("destroy",()=>{l(),n.removeEventListener("resize",s),n.removeEventListener("orientationchange",f)})}function Y_(c){let{swiper:e,extendParams:t,on:a,emit:n}=c;const i=[],r=V2(),s=function(f,u){u===void 0&&(u={});const h=r.MutationObserver||r.WebkitMutationObserver,d=new h(p=>{if(e.__preventObserver__)return;if(p.length===1){n("observerUpdate",p[0]);return}const m=function(){n("observerUpdate",p[0])};r.requestAnimationFrame?r.requestAnimationFrame(m):r.setTimeout(m,0)});d.observe(f,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(d)},o=()=>{if(e.params.observer){if(e.params.observeParents){const f=U_(e.hostEl);for(let u=0;u<f.length;u+=1)s(f[u])}s(e.hostEl,{childList:e.params.observeSlideChildren}),s(e.wrapperEl,{attributes:!1})}},l=()=>{i.forEach(f=>{f.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",o),a("destroy",l)}var Z_={on(c,e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const n=t?"unshift":"push";return c.split(" ").forEach(i=>{a.eventsListeners[i]||(a.eventsListeners[i]=[]),a.eventsListeners[i][n](e)}),a},once(c,e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;function n(){a.off(c,n),n.__emitterProxy&&delete n.__emitterProxy;for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];e.apply(a,r)}return n.__emitterProxy=e,a.on(c,n,t)},onAny(c,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof c!="function")return t;const a=e?"unshift":"push";return t.eventsAnyListeners.indexOf(c)<0&&t.eventsAnyListeners[a](c),t},offAny(c){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(c);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(c,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||c.split(" ").forEach(a=>{typeof e>"u"?t.eventsListeners[a]=[]:t.eventsListeners[a]&&t.eventsListeners[a].forEach((n,i)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&t.eventsListeners[a].splice(i,1)})}),t},emit(){const c=this;if(!c.eventsListeners||c.destroyed||!c.eventsListeners)return c;let e,t,a;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return typeof i[0]=="string"||Array.isArray(i[0])?(e=i[0],t=i.slice(1,i.length),a=c):(e=i[0].events,t=i[0].data,a=i[0].context||c),t.unshift(a),(Array.isArray(e)?e:e.split(" ")).forEach(o=>{c.eventsAnyListeners&&c.eventsAnyListeners.length&&c.eventsAnyListeners.forEach(l=>{l.apply(a,[o,...t])}),c.eventsListeners&&c.eventsListeners[o]&&c.eventsListeners[o].forEach(l=>{l.apply(a,t)})}),c}};function X_(){const c=this;let e,t;const a=c.el;typeof c.params.width<"u"&&c.params.width!==null?e=c.params.width:e=a.clientWidth,typeof c.params.height<"u"&&c.params.height!==null?t=c.params.height:t=a.clientHeight,!(e===0&&c.isHorizontal()||t===0&&c.isVertical())&&(e=e-parseInt(D3(a,"padding-left")||0,10)-parseInt(D3(a,"padding-right")||0,10),t=t-parseInt(D3(a,"padding-top")||0,10)-parseInt(D3(a,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(c,{width:e,height:t,size:c.isHorizontal()?e:t}))}function Q_(){const c=this;function e(I){return c.isHorizontal()?I:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[I]}function t(I,N){return parseFloat(I.getPropertyValue(e(N))||0)}const a=c.params,{wrapperEl:n,slidesEl:i,size:r,rtlTranslate:s,wrongRTL:o}=c,l=c.virtual&&a.virtual.enabled,f=l?c.virtual.slides.length:c.slides.length,u=Z2(i,`.${c.params.slideClass}, swiper-slide`),h=l?c.virtual.slides.length:u.length;let d=[];const p=[],m=[];let H=a.slidesOffsetBefore;typeof H=="function"&&(H=a.slidesOffsetBefore.call(c));let z=a.slidesOffsetAfter;typeof z=="function"&&(z=a.slidesOffsetAfter.call(c));const C=c.snapGrid.length,M=c.slidesGrid.length;let V=a.spaceBetween,w=-H,F=0,P=0;if(typeof r>"u")return;typeof V=="string"&&V.indexOf("%")>=0?V=parseFloat(V.replace("%",""))/100*r:typeof V=="string"&&(V=parseFloat(V)),c.virtualSize=-V,u.forEach(I=>{s?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(z8(n,"--swiper-centered-offset-before",""),z8(n,"--swiper-centered-offset-after",""));const x=a.grid&&a.grid.rows>1&&c.grid;x&&c.grid.initSlides(h);let b;const G=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(I=>typeof a.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<h;I+=1){b=0;let N;if(u[I]&&(N=u[I]),x&&c.grid.updateSlide(I,N,h,e),!(u[I]&&D3(N,"display")==="none")){if(a.slidesPerView==="auto"){G&&(u[I].style[e("width")]="");const $=getComputedStyle(N),C1=N.style.transform,B1=N.style.webkitTransform;if(C1&&(N.style.transform="none"),B1&&(N.style.webkitTransform="none"),a.roundLengths)b=c.isHorizontal()?kn(N,"width",!0):kn(N,"height",!0);else{const i1=t($,"width"),v1=t($,"padding-left"),d1=t($,"padding-right"),b2=t($,"margin-left"),N2=t($,"margin-right"),v2=$.getPropertyValue("box-sizing");if(v2&&v2==="border-box")b=i1+b2+N2;else{const{clientWidth:Y1,offsetWidth:V3}=N;b=i1+v1+d1+b2+N2+(V3-Y1)}}C1&&(N.style.transform=C1),B1&&(N.style.webkitTransform=B1),a.roundLengths&&(b=Math.floor(b))}else b=(r-(a.slidesPerView-1)*V)/a.slidesPerView,a.roundLengths&&(b=Math.floor(b)),u[I]&&(u[I].style[e("width")]=`${b}px`);u[I]&&(u[I].swiperSlideSize=b),m.push(b),a.centeredSlides?(w=w+b/2+F/2+V,F===0&&I!==0&&(w=w-r/2-V),I===0&&(w=w-r/2-V),Math.abs(w)<1/1e3&&(w=0),a.roundLengths&&(w=Math.floor(w)),P%a.slidesPerGroup===0&&d.push(w),p.push(w)):(a.roundLengths&&(w=Math.floor(w)),(P-Math.min(c.params.slidesPerGroupSkip,P))%c.params.slidesPerGroup===0&&d.push(w),p.push(w),w=w+b+V),c.virtualSize+=b+V,F=b,P+=1}}if(c.virtualSize=Math.max(c.virtualSize,r)+z,s&&o&&(a.effect==="slide"||a.effect==="coverflow")&&(n.style.width=`${c.virtualSize+V}px`),a.setWrapperSize&&(n.style[e("width")]=`${c.virtualSize+V}px`),x&&c.grid.updateWrapperSize(b,d,e),!a.centeredSlides){const I=[];for(let N=0;N<d.length;N+=1){let $=d[N];a.roundLengths&&($=Math.floor($)),d[N]<=c.virtualSize-r&&I.push($)}d=I,Math.floor(c.virtualSize-r)-Math.floor(d[d.length-1])>1&&d.push(c.virtualSize-r)}if(l&&a.loop){const I=m[0]+V;if(a.slidesPerGroup>1){const N=Math.ceil((c.virtual.slidesBefore+c.virtual.slidesAfter)/a.slidesPerGroup),$=I*a.slidesPerGroup;for(let C1=0;C1<N;C1+=1)d.push(d[d.length-1]+$)}for(let N=0;N<c.virtual.slidesBefore+c.virtual.slidesAfter;N+=1)a.slidesPerGroup===1&&d.push(d[d.length-1]+I),p.push(p[p.length-1]+I),c.virtualSize+=I}if(d.length===0&&(d=[0]),V!==0){const I=c.isHorizontal()&&s?"marginLeft":e("marginRight");u.filter((N,$)=>!a.cssMode||a.loop?!0:$!==u.length-1).forEach(N=>{N.style[I]=`${V}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let I=0;m.forEach($=>{I+=$+(V||0)}),I-=V;const N=I-r;d=d.map($=>$<=0?-H:$>N?N+z:$)}if(a.centerInsufficientSlides){let I=0;if(m.forEach(N=>{I+=N+(V||0)}),I-=V,I<r){const N=(r-I)/2;d.forEach(($,C1)=>{d[C1]=$-N}),p.forEach(($,C1)=>{p[C1]=$+N})}}if(Object.assign(c,{slides:u,snapGrid:d,slidesGrid:p,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){z8(n,"--swiper-centered-offset-before",`${-d[0]}px`),z8(n,"--swiper-centered-offset-after",`${c.size/2-m[m.length-1]/2}px`);const I=-c.snapGrid[0],N=-c.slidesGrid[0];c.snapGrid=c.snapGrid.map($=>$+I),c.slidesGrid=c.slidesGrid.map($=>$+N)}if(h!==f&&c.emit("slidesLengthChange"),d.length!==C&&(c.params.watchOverflow&&c.checkOverflow(),c.emit("snapGridLengthChange")),p.length!==M&&c.emit("slidesGridLengthChange"),a.watchSlidesProgress&&c.updateSlidesOffset(),!l&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const I=`${a.containerModifierClass}backface-hidden`,N=c.el.classList.contains(I);h<=a.maxBackfaceHiddenSlides?N||c.el.classList.add(I):N&&c.el.classList.remove(I)}}function J_(c){const e=this,t=[],a=e.virtual&&e.params.virtual.enabled;let n=0,i;typeof c=="number"?e.setTransition(c):c===!0&&e.setTransition(e.params.speed);const r=s=>a?e.slides[e.getSlideIndexByData(s)]:e.slides[s];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(s=>{t.push(s)});else for(i=0;i<Math.ceil(e.params.slidesPerView);i+=1){const s=e.activeIndex+i;if(s>e.slides.length&&!a)break;t.push(r(s))}else t.push(r(e.activeIndex));for(i=0;i<t.length;i+=1)if(typeof t[i]<"u"){const s=t[i].offsetHeight;n=s>n?s:n}(n||n===0)&&(e.wrapperEl.style.height=`${n}px`)}function ey(){const c=this,e=c.slides,t=c.isElement?c.isHorizontal()?c.wrapperEl.offsetLeft:c.wrapperEl.offsetTop:0;for(let a=0;a<e.length;a+=1)e[a].swiperSlideOffset=(c.isHorizontal()?e[a].offsetLeft:e[a].offsetTop)-t-c.cssOverflowAdjustment()}function cy(c){c===void 0&&(c=this&&this.translate||0);const e=this,t=e.params,{slides:a,rtlTranslate:n,snapGrid:i}=e;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let r=-c;n&&(r=c),a.forEach(o=>{o.classList.remove(t.slideVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let s=t.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*e.size:typeof s=="string"&&(s=parseFloat(s));for(let o=0;o<a.length;o+=1){const l=a[o];let f=l.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=a[0].swiperSlideOffset);const u=(r+(t.centeredSlides?e.minTranslate():0)-f)/(l.swiperSlideSize+s),h=(r-i[0]+(t.centeredSlides?e.minTranslate():0)-f)/(l.swiperSlideSize+s),d=-(r-f),p=d+e.slidesSizesGrid[o];(d>=0&&d<e.size-1||p>1&&p<=e.size||d<=0&&p>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(o),a[o].classList.add(t.slideVisibleClass)),l.progress=n?-u:u,l.originalProgress=n?-h:h}}function ty(c){const e=this;if(typeof c>"u"){const f=e.rtlTranslate?-1:1;c=e&&e.translate&&e.translate*f||0}const t=e.params,a=e.maxTranslate()-e.minTranslate();let{progress:n,isBeginning:i,isEnd:r,progressLoop:s}=e;const o=i,l=r;if(a===0)n=0,i=!0,r=!0;else{n=(c-e.minTranslate())/a;const f=Math.abs(c-e.minTranslate())<1,u=Math.abs(c-e.maxTranslate())<1;i=f||n<=0,r=u||n>=1,f&&(n=0),u&&(n=1)}if(t.loop){const f=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[f],d=e.slidesGrid[u],p=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(c);m>=h?s=(m-h)/p:s=(m+p-d)/p,s>1&&(s-=1)}Object.assign(e,{progress:n,progressLoop:s,isBeginning:i,isEnd:r}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(c),i&&!o&&e.emit("reachBeginning toEdge"),r&&!l&&e.emit("reachEnd toEdge"),(o&&!i||l&&!r)&&e.emit("fromEdge"),e.emit("progress",n)}function ay(){const c=this,{slides:e,params:t,slidesEl:a,activeIndex:n}=c,i=c.virtual&&t.virtual.enabled,r=o=>Z2(a,`.${t.slideClass}${o}, swiper-slide${o}`)[0];e.forEach(o=>{o.classList.remove(t.slideActiveClass,t.slideNextClass,t.slidePrevClass)});let s;if(i)if(t.loop){let o=n-c.virtual.slidesBefore;o<0&&(o=c.virtual.slides.length+o),o>=c.virtual.slides.length&&(o-=c.virtual.slides.length),s=r(`[data-swiper-slide-index="${o}"]`)}else s=r(`[data-swiper-slide-index="${n}"]`);else s=e[n];if(s){s.classList.add(t.slideActiveClass);let o=B_(s,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!o&&(o=e[0]),o&&o.classList.add(t.slideNextClass);let l=F_(s,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!l===0&&(l=e[e.length-1]),l&&l.classList.add(t.slidePrevClass)}c.emitSlidesClasses()}const D8=(c,e)=>{if(!c||c.destroyed||!c.params)return;const t=()=>c.isElement?"swiper-slide":`.${c.params.slideClass}`,a=e.closest(t());if(a){let n=a.querySelector(`.${c.params.lazyPreloaderClass}`);!n&&c.isElement&&(n=a.shadowRoot.querySelector(`.${c.params.lazyPreloaderClass}`)),n&&n.remove()}},j7=(c,e)=>{if(!c.slides[e])return;const t=c.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Ke=c=>{if(!c||c.destroyed||!c.params)return;let e=c.params.lazyPreloadPrevNext;const t=c.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const a=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():Math.ceil(c.params.slidesPerView),n=c.activeIndex;if(c.params.grid&&c.params.grid.rows>1){const r=n,s=[r-e];s.push(...Array.from({length:e}).map((o,l)=>r+a+l)),c.slides.forEach((o,l)=>{s.includes(o.column)&&j7(c,l)});return}const i=n+a-1;if(c.params.rewind||c.params.loop)for(let r=n-e;r<=i+e;r+=1){const s=(r%t+t)%t;(s<n||s>i)&&j7(c,s)}else for(let r=Math.max(n-e,0);r<=Math.min(i+e,t-1);r+=1)r!==n&&(r>i||r<n)&&j7(c,r)};function ny(c){const{slidesGrid:e,params:t}=c,a=c.rtlTranslate?c.translate:-c.translate;let n;for(let i=0;i<e.length;i+=1)typeof e[i+1]<"u"?a>=e[i]&&a<e[i+1]-(e[i+1]-e[i])/2?n=i:a>=e[i]&&a<e[i+1]&&(n=i+1):a>=e[i]&&(n=i);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function iy(c){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:a,params:n,activeIndex:i,realIndex:r,snapIndex:s}=e;let o=c,l;const f=h=>{let d=h-e.virtual.slidesBefore;return d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),d};if(typeof o>"u"&&(o=ny(e)),a.indexOf(t)>=0)l=a.indexOf(t);else{const h=Math.min(n.slidesPerGroupSkip,o);l=h+Math.floor((o-h)/n.slidesPerGroup)}if(l>=a.length&&(l=a.length-1),o===i){l!==s&&(e.snapIndex=l,e.emit("snapIndexChange")),e.params.loop&&e.virtual&&e.params.virtual.enabled&&(e.realIndex=f(o));return}let u;e.virtual&&n.virtual.enabled&&n.loop?u=f(o):e.slides[o]?u=parseInt(e.slides[o].getAttribute("data-swiper-slide-index")||o,10):u=o,Object.assign(e,{previousSnapIndex:s,snapIndex:l,previousRealIndex:r,realIndex:u,previousIndex:i,activeIndex:o}),e.initialized&&Ke(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),r!==u&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function ry(c){const e=this,t=e.params,a=c.closest(`.${t.slideClass}, swiper-slide`);let n=!1,i;if(a){for(let r=0;r<e.slides.length;r+=1)if(e.slides[r]===a){n=!0,i=r;break}}if(a&&n)e.clickedSlide=a,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=i;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var sy={updateSize:X_,updateSlides:Q_,updateAutoHeight:J_,updateSlidesOffset:ey,updateSlidesProgress:cy,updateProgress:ty,updateSlidesClasses:ay,updateActiveIndex:iy,updateClickedSlide:ry};function oy(c){c===void 0&&(c=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:a,translate:n,wrapperEl:i}=e;if(t.virtualTranslate)return a?-n:n;if(t.cssMode)return n;let r=O_(i,c);return r+=e.cssOverflowAdjustment(),a&&(r=-r),r||0}function ly(c,e){const t=this,{rtlTranslate:a,params:n,wrapperEl:i,progress:r}=t;let s=0,o=0;const l=0;t.isHorizontal()?s=a?-c:c:o=c,n.roundLengths&&(s=Math.floor(s),o=Math.floor(o)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?s:o,n.cssMode?i[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-s:-o:n.virtualTranslate||(t.isHorizontal()?s-=t.cssOverflowAdjustment():o-=t.cssOverflowAdjustment(),i.style.transform=`translate3d(${s}px, ${o}px, ${l}px)`);let f;const u=t.maxTranslate()-t.minTranslate();u===0?f=0:f=(c-t.minTranslate())/u,f!==r&&t.updateProgress(c),t.emit("setTranslate",t.translate,e)}function fy(){return-this.snapGrid[0]}function uy(){return-this.snapGrid[this.snapGrid.length-1]}function hy(c,e,t,a,n){c===void 0&&(c=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),a===void 0&&(a=!0);const i=this,{params:r,wrapperEl:s}=i;if(i.animating&&r.preventInteractionOnTransition)return!1;const o=i.minTranslate(),l=i.maxTranslate();let f;if(a&&c>o?f=o:a&&c<l?f=l:f=c,i.updateProgress(f),r.cssMode){const u=i.isHorizontal();if(e===0)s[u?"scrollLeft":"scrollTop"]=-f;else{if(!i.support.smoothScroll)return no({swiper:i,targetPosition:-f,side:u?"left":"top"}),!0;s.scrollTo({[u?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(i.setTransition(0),i.setTranslate(f),t&&(i.emit("beforeTransitionStart",e,n),i.emit("transitionEnd"))):(i.setTransition(e),i.setTranslate(f),t&&(i.emit("beforeTransitionStart",e,n),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(h){!i||i.destroyed||h.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,t&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var dy={getTranslate:oy,setTranslate:ly,minTranslate:fy,maxTranslate:uy,translateTo:hy};function my(c,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${c}ms`,t.wrapperEl.style.transitionDelay=c===0?"0ms":""),t.emit("setTransition",c,e)}function so(c){let{swiper:e,runCallbacks:t,direction:a,step:n}=c;const{activeIndex:i,previousIndex:r}=e;let s=a;if(s||(i>r?s="next":i<r?s="prev":s="reset"),e.emit(`transition${n}`),t&&i!==r){if(s==="reset"){e.emit(`slideResetTransition${n}`);return}e.emit(`slideChangeTransition${n}`),s==="next"?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`)}}function py(c,e){c===void 0&&(c=!0);const t=this,{params:a}=t;a.cssMode||(a.autoHeight&&t.updateAutoHeight(),so({swiper:t,runCallbacks:c,direction:e,step:"Start"}))}function vy(c,e){c===void 0&&(c=!0);const t=this,{params:a}=t;t.animating=!1,!a.cssMode&&(t.setTransition(0),so({swiper:t,runCallbacks:c,direction:e,step:"End"}))}var zy={setTransition:my,transitionStart:py,transitionEnd:vy};function gy(c,e,t,a,n){c===void 0&&(c=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof c=="string"&&(c=parseInt(c,10));const i=this;let r=c;r<0&&(r=0);const{params:s,snapGrid:o,slidesGrid:l,previousIndex:f,activeIndex:u,rtlTranslate:h,wrapperEl:d,enabled:p}=i;if(i.animating&&s.preventInteractionOnTransition||!p&&!a&&!n)return!1;const m=Math.min(i.params.slidesPerGroupSkip,r);let H=m+Math.floor((r-m)/i.params.slidesPerGroup);H>=o.length&&(H=o.length-1);const z=-o[H];if(s.normalizeSlideIndex)for(let M=0;M<l.length;M+=1){const V=-Math.floor(z*100),w=Math.floor(l[M]*100),F=Math.floor(l[M+1]*100);typeof l[M+1]<"u"?V>=w&&V<F-(F-w)/2?r=M:V>=w&&V<F&&(r=M+1):V>=w&&(r=M)}if(i.initialized&&r!==u&&(!i.allowSlideNext&&(h?z>i.translate&&z>i.minTranslate():z<i.translate&&z<i.minTranslate())||!i.allowSlidePrev&&z>i.translate&&z>i.maxTranslate()&&(u||0)!==r))return!1;r!==(f||0)&&t&&i.emit("beforeSlideChangeStart"),i.updateProgress(z);let C;if(r>u?C="next":r<u?C="prev":C="reset",h&&-z===i.translate||!h&&z===i.translate)return i.updateActiveIndex(r),s.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),s.effect!=="slide"&&i.setTranslate(z),C!=="reset"&&(i.transitionStart(t,C),i.transitionEnd(t,C)),!1;if(s.cssMode){const M=i.isHorizontal(),V=h?z:-z;if(e===0){const w=i.virtual&&i.params.virtual.enabled;w&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),w&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{d[M?"scrollLeft":"scrollTop"]=V})):d[M?"scrollLeft":"scrollTop"]=V,w&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1})}else{if(!i.support.smoothScroll)return no({swiper:i,targetPosition:V,side:M?"left":"top"}),!0;d.scrollTo({[M?"left":"top"]:V,behavior:"smooth"})}return!0}return i.setTransition(e),i.setTranslate(z),i.updateActiveIndex(r),i.updateSlidesClasses(),i.emit("beforeTransitionStart",e,a),i.transitionStart(t,C),e===0?i.transitionEnd(t,C):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(V){!i||i.destroyed||V.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(t,C))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function Cy(c,e,t,a){c===void 0&&(c=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof c=="string"&&(c=parseInt(c,10));const n=this;let i=c;return n.params.loop&&(n.virtual&&n.params.virtual.enabled?i=i+n.virtual.slidesBefore:i=n.getSlideIndexByData(i)),n.slideTo(i,e,t,a)}function Hy(c,e,t){c===void 0&&(c=this.params.speed),e===void 0&&(e=!0);const a=this,{enabled:n,params:i,animating:r}=a;if(!n)return a;let s=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(s=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<i.slidesPerGroupSkip?1:s,l=a.virtual&&i.virtual.enabled;if(i.loop){if(r&&!l&&i.loopPreventsSliding)return!1;a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft}return i.rewind&&a.isEnd?a.slideTo(0,c,e,t):a.slideTo(a.activeIndex+o,c,e,t)}function My(c,e,t){c===void 0&&(c=this.params.speed),e===void 0&&(e=!0);const a=this,{params:n,snapGrid:i,slidesGrid:r,rtlTranslate:s,enabled:o,animating:l}=a;if(!o)return a;const f=a.virtual&&n.virtual.enabled;if(n.loop){if(l&&!f&&n.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const u=s?a.translate:-a.translate;function h(z){return z<0?-Math.floor(Math.abs(z)):Math.floor(z)}const d=h(u),p=i.map(z=>h(z));let m=i[p.indexOf(d)-1];if(typeof m>"u"&&n.cssMode){let z;i.forEach((C,M)=>{d>=C&&(z=M)}),typeof z<"u"&&(m=i[z>0?z-1:z])}let H=0;if(typeof m<"u"&&(H=r.indexOf(m),H<0&&(H=a.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(H=H-a.slidesPerViewDynamic("previous",!0)+1,H=Math.max(H,0))),n.rewind&&a.isBeginning){const z=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(z,c,e,t)}return a.slideTo(H,c,e,t)}function Vy(c,e,t){c===void 0&&(c=this.params.speed),e===void 0&&(e=!0);const a=this;return a.slideTo(a.activeIndex,c,e,t)}function Ly(c,e,t,a){c===void 0&&(c=this.params.speed),e===void 0&&(e=!0),a===void 0&&(a=.5);const n=this;let i=n.activeIndex;const r=Math.min(n.params.slidesPerGroupSkip,i),s=r+Math.floor((i-r)/n.params.slidesPerGroup),o=n.rtlTranslate?n.translate:-n.translate;if(o>=n.snapGrid[s]){const l=n.snapGrid[s],f=n.snapGrid[s+1];o-l>(f-l)*a&&(i+=n.params.slidesPerGroup)}else{const l=n.snapGrid[s-1],f=n.snapGrid[s];o-l<=(f-l)*a&&(i-=n.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,n.slidesGrid.length-1),n.slideTo(i,c,e,t)}function by(){const c=this,{params:e,slidesEl:t}=c,a=e.slidesPerView==="auto"?c.slidesPerViewDynamic():e.slidesPerView;let n=c.clickedIndex,i;const r=c.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(c.animating)return;i=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?n<c.loopedSlides-a/2||n>c.slides.length-c.loopedSlides+a/2?(c.loopFix(),n=c.getSlideIndex(Z2(t,`${r}[data-swiper-slide-index="${i}"]`)[0]),je(()=>{c.slideTo(n)})):c.slideTo(n):n>c.slides.length-a?(c.loopFix(),n=c.getSlideIndex(Z2(t,`${r}[data-swiper-slide-index="${i}"]`)[0]),je(()=>{c.slideTo(n)})):c.slideTo(n)}else c.slideTo(n)}var _y={slideTo:gy,slideToLoop:Cy,slideNext:Hy,slidePrev:My,slideReset:Vy,slideToClosest:Ly,slideToClickedSlide:by};function yy(c){const e=this,{params:t,slidesEl:a}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;Z2(a,`.${t.slideClass}, swiper-slide`).forEach((i,r)=>{i.setAttribute("data-swiper-slide-index",r)}),e.loopFix({slideRealIndex:c,direction:t.centeredSlides?void 0:"next"})}function wy(c){let{slideRealIndex:e,slideTo:t=!0,direction:a,setTranslate:n,activeSlideIndex:i,byController:r,byMousewheel:s}=c===void 0?{}:c;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:l,allowSlidePrev:f,allowSlideNext:u,slidesEl:h,params:d}=o;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&d.virtual.enabled){t&&(!d.centeredSlides&&o.snapIndex===0?o.slideTo(o.virtual.slides.length,0,!1,!0):d.centeredSlides&&o.snapIndex<d.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0)),o.allowSlidePrev=f,o.allowSlideNext=u,o.emit("loopFix");return}const p=d.slidesPerView==="auto"?o.slidesPerViewDynamic():Math.ceil(parseFloat(d.slidesPerView,10));let m=d.loopedSlides||p;m%d.slidesPerGroup!==0&&(m+=d.slidesPerGroup-m%d.slidesPerGroup),o.loopedSlides=m;const H=[],z=[];let C=o.activeIndex;typeof i>"u"?i=o.getSlideIndex(o.slides.filter(P=>P.classList.contains(d.slideActiveClass))[0]):C=i;const M=a==="next"||!a,V=a==="prev"||!a;let w=0,F=0;if(i<m){w=Math.max(m-i,d.slidesPerGroup);for(let P=0;P<m-i;P+=1){const x=P-Math.floor(P/l.length)*l.length;H.push(l.length-x-1)}}else if(i>o.slides.length-m*2){F=Math.max(i-(o.slides.length-m*2),d.slidesPerGroup);for(let P=0;P<F;P+=1){const x=P-Math.floor(P/l.length)*l.length;z.push(x)}}if(V&&H.forEach(P=>{o.slides[P].swiperLoopMoveDOM=!0,h.prepend(o.slides[P]),o.slides[P].swiperLoopMoveDOM=!1}),M&&z.forEach(P=>{o.slides[P].swiperLoopMoveDOM=!0,h.append(o.slides[P]),o.slides[P].swiperLoopMoveDOM=!1}),o.recalcSlides(),d.slidesPerView==="auto"&&o.updateSlides(),d.watchSlidesProgress&&o.updateSlidesOffset(),t){if(H.length>0&&V)if(typeof e>"u"){const P=o.slidesGrid[C],b=o.slidesGrid[C+w]-P;s?o.setTranslate(o.translate-b):(o.slideTo(C+w,0,!1,!0),n&&(o.touches[o.isHorizontal()?"startX":"startY"]+=b,o.touchEventsData.currentTranslate=o.translate))}else n&&(o.slideToLoop(e,0,!1,!0),o.touchEventsData.currentTranslate=o.translate);else if(z.length>0&&M)if(typeof e>"u"){const P=o.slidesGrid[C],b=o.slidesGrid[C-F]-P;s?o.setTranslate(o.translate-b):(o.slideTo(C-F,0,!1,!0),n&&(o.touches[o.isHorizontal()?"startX":"startY"]+=b,o.touchEventsData.currentTranslate=o.translate))}else o.slideToLoop(e,0,!1,!0)}if(o.allowSlidePrev=f,o.allowSlideNext=u,o.controller&&o.controller.control&&!r){const P={slideRealIndex:e,direction:a,setTranslate:n,activeSlideIndex:i,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach(x=>{!x.destroyed&&x.params.loop&&x.loopFix({...P,slideTo:x.params.slidesPerView===d.slidesPerView?t:!1})}):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...P,slideTo:o.controller.control.params.slidesPerView===d.slidesPerView?t:!1})}o.emit("loopFix")}function xy(){const c=this,{params:e,slidesEl:t}=c;if(!e.loop||c.virtual&&c.params.virtual.enabled)return;c.recalcSlides();const a=[];c.slides.forEach(n=>{const i=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;a[i]=n}),c.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),a.forEach(n=>{t.append(n)}),c.recalcSlides(),c.slideTo(c.realIndex,0)}var Sy={loopCreate:yy,loopFix:wy,loopDestroy:xy};function Ny(c){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=c?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Ay(){const c=this;c.params.watchOverflow&&c.isLocked||c.params.cssMode||(c.isElement&&(c.__preventObserver__=!0),c[c.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",c.isElement&&requestAnimationFrame(()=>{c.__preventObserver__=!1}))}var ky={setGrabCursor:Ny,unsetGrabCursor:Ay};function Ty(c,e){e===void 0&&(e=this);function t(a){if(!a||a===W4()||a===V2())return null;a.assignedSlot&&(a=a.assignedSlot);const n=a.closest(c);return!n&&!a.getRootNode?null:n||t(a.getRootNode().host)}return t(e)}function Ey(c){const e=this,t=W4(),a=V2(),n=e.touchEventsData;n.evCache.push(c);const{params:i,touches:r,enabled:s}=e;if(!s||!i.simulateTouch&&c.pointerType==="mouse"||e.animating&&i.preventInteractionOnTransition)return;!e.animating&&i.cssMode&&i.loop&&e.loopFix();let o=c;o.originalEvent&&(o=o.originalEvent);let l=o.target;if(i.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in o&&o.which===3||"button"in o&&o.button>0||n.isTouched&&n.isMoved)return;const f=!!i.noSwipingClass&&i.noSwipingClass!=="",u=c.composedPath?c.composedPath():c.path;f&&o.target&&o.target.shadowRoot&&u&&(l=u[0]);const h=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,d=!!(o.target&&o.target.shadowRoot);if(i.noSwiping&&(d?Ty(h,l):l.closest(h))){e.allowClick=!0;return}if(i.swipeHandler&&!l.closest(i.swipeHandler))return;r.currentX=o.pageX,r.currentY=o.pageY;const p=r.currentX,m=r.currentY,H=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,z=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(H&&(p<=z||p>=a.innerWidth-z))if(H==="prevent")c.preventDefault();else return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=p,r.startY=m,n.touchStartTime=Q8(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,i.threshold>0&&(n.allowThresholdMove=!1);let C=!0;l.matches(n.focusableElements)&&(C=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l&&t.activeElement.blur();const M=C&&e.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||M)&&!l.isContentEditable&&o.preventDefault(),i.freeMode&&i.freeMode.enabled&&e.freeMode&&e.animating&&!i.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",o)}function Iy(c){const e=W4(),t=this,a=t.touchEventsData,{params:n,touches:i,rtlTranslate:r,enabled:s}=t;if(!s||!n.simulateTouch&&c.pointerType==="mouse")return;let o=c;if(o.originalEvent&&(o=o.originalEvent),!a.isTouched){a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",o);return}const l=a.evCache.findIndex(F=>F.pointerId===o.pointerId);l>=0&&(a.evCache[l]=o);const f=a.evCache.length>1?a.evCache[0]:o,u=f.pageX,h=f.pageY;if(o.preventedByNestedSwiper){i.startX=u,i.startY=h;return}if(!t.allowTouchMove){o.target.matches(a.focusableElements)||(t.allowClick=!1),a.isTouched&&(Object.assign(i,{startX:u,startY:h,prevX:t.touches.currentX,prevY:t.touches.currentY,currentX:u,currentY:h}),a.touchStartTime=Q8());return}if(n.touchReleaseOnEdges&&!n.loop){if(t.isVertical()){if(h<i.startY&&t.translate<=t.maxTranslate()||h>i.startY&&t.translate>=t.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else if(u<i.startX&&t.translate<=t.maxTranslate()||u>i.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&o.target===e.activeElement&&o.target.matches(a.focusableElements)){a.isMoved=!0,t.allowClick=!1;return}if(a.allowTouchCallbacks&&t.emit("touchMove",o),o.targetTouches&&o.targetTouches.length>1)return;i.currentX=u,i.currentY=h;const d=i.currentX-i.startX,p=i.currentY-i.startY;if(t.params.threshold&&Math.sqrt(d**2+p**2)<t.params.threshold)return;if(typeof a.isScrolling>"u"){let F;t.isHorizontal()&&i.currentY===i.startY||t.isVertical()&&i.currentX===i.startX?a.isScrolling=!1:d*d+p*p>=25&&(F=Math.atan2(Math.abs(p),Math.abs(d))*180/Math.PI,a.isScrolling=t.isHorizontal()?F>n.touchAngle:90-F>n.touchAngle)}if(a.isScrolling&&t.emit("touchMoveOpposite",o),typeof a.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(a.startMoving=!0),a.isScrolling||t.zoom&&t.params.zoom&&t.params.zoom.enabled&&a.evCache.length>1){a.isTouched=!1;return}if(!a.startMoving)return;t.allowClick=!1,!n.cssMode&&o.cancelable&&o.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&o.stopPropagation();let m=t.isHorizontal()?d:p,H=t.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;n.oneWayMovement&&(m=Math.abs(m)*(r?1:-1),H=Math.abs(H)*(r?1:-1)),i.diff=m,m*=n.touchRatio,r&&(m=-m,H=-H);const z=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=H>0?"prev":"next";const C=t.params.loop&&!n.cssMode;if(!a.isMoved){if(C&&t.loopFix({direction:t.swipeDirection}),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const F=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(F)}a.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",o)}let M;a.isMoved&&z!==t.touchesDirection&&C&&Math.abs(m)>=1&&(t.loopFix({direction:t.swipeDirection,setTranslate:!0}),M=!0),t.emit("sliderMove",o),a.isMoved=!0,a.currentTranslate=m+a.startTranslate;let V=!0,w=n.resistanceRatio;if(n.touchReleaseOnEdges&&(w=0),m>0?(C&&!M&&a.currentTranslate>(n.centeredSlides?t.minTranslate()-t.size/2:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>t.minTranslate()&&(V=!1,n.resistance&&(a.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+a.startTranslate+m)**w))):m<0&&(C&&!M&&a.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.size/2:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),a.currentTranslate<t.maxTranslate()&&(V=!1,n.resistance&&(a.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-a.startTranslate-m)**w))),V&&(o.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(a.currentTranslate=a.startTranslate),n.threshold>0)if(Math.abs(m)>n.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,a.currentTranslate=a.startTranslate,i.diff=t.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{a.currentTranslate=a.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}function Py(c){const e=this,t=e.touchEventsData,a=t.evCache.findIndex(M=>M.pointerId===c.pointerId);if(a>=0&&t.evCache.splice(a,1),["pointercancel","pointerout","pointerleave","contextmenu"].includes(c.type)&&!(["pointercancel","contextmenu"].includes(c.type)&&(e.browser.isSafari||e.browser.isWebView)))return;const{params:n,touches:i,rtlTranslate:r,slidesGrid:s,enabled:o}=e;if(!o||!n.simulateTouch&&c.pointerType==="mouse")return;let l=c;if(l.originalEvent&&(l=l.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",l),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&n.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}n.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const f=Q8(),u=f-t.touchStartTime;if(e.allowClick){const M=l.path||l.composedPath&&l.composedPath();e.updateClickedSlide(M&&M[0]||l.target),e.emit("tap click",l),u<300&&f-t.lastClickTime<300&&e.emit("doubleTap doubleClick",l)}if(t.lastClickTime=Q8(),je(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||i.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(n.followFinger?h=r?e.translate:-e.translate:h=-t.currentTranslate,n.cssMode)return;if(n.freeMode&&n.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}let d=0,p=e.slidesSizesGrid[0];for(let M=0;M<s.length;M+=M<n.slidesPerGroupSkip?1:n.slidesPerGroup){const V=M<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;typeof s[M+V]<"u"?h>=s[M]&&h<s[M+V]&&(d=M,p=s[M+V]-s[M]):h>=s[M]&&(d=M,p=s[s.length-1]-s[s.length-2])}let m=null,H=null;n.rewind&&(e.isBeginning?H=n.virtual&&n.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(m=0));const z=(h-s[d])/p,C=d<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;if(u>n.longSwipesMs){if(!n.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(z>=n.longSwipesRatio?e.slideTo(n.rewind&&e.isEnd?m:d+C):e.slideTo(d)),e.swipeDirection==="prev"&&(z>1-n.longSwipesRatio?e.slideTo(d+C):H!==null&&z<0&&Math.abs(z)>n.longSwipesRatio?e.slideTo(H):e.slideTo(d))}else{if(!n.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(l.target===e.navigation.nextEl||l.target===e.navigation.prevEl)?l.target===e.navigation.nextEl?e.slideTo(d+C):e.slideTo(d):(e.swipeDirection==="next"&&e.slideTo(m!==null?m:d+C),e.swipeDirection==="prev"&&e.slideTo(H!==null?H:d))}}function Tn(){const c=this,{params:e,el:t}=c;if(t&&t.offsetWidth===0)return;e.breakpoints&&c.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:n,snapGrid:i}=c,r=c.virtual&&c.params.virtual.enabled;c.allowSlideNext=!0,c.allowSlidePrev=!0,c.updateSize(),c.updateSlides(),c.updateSlidesClasses();const s=r&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&c.isEnd&&!c.isBeginning&&!c.params.centeredSlides&&!s?c.slideTo(c.slides.length-1,0,!1,!0):c.params.loop&&!r?c.slideToLoop(c.realIndex,0,!1,!0):c.slideTo(c.activeIndex,0,!1,!0),c.autoplay&&c.autoplay.running&&c.autoplay.paused&&(clearTimeout(c.autoplay.resizeTimeout),c.autoplay.resizeTimeout=setTimeout(()=>{c.autoplay&&c.autoplay.running&&c.autoplay.paused&&c.autoplay.resume()},500)),c.allowSlidePrev=n,c.allowSlideNext=a,c.params.watchOverflow&&i!==c.snapGrid&&c.checkOverflow()}function Ry(c){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&c.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(c.stopPropagation(),c.stopImmediatePropagation())))}function Oy(){const c=this,{wrapperEl:e,rtlTranslate:t,enabled:a}=c;if(!a)return;c.previousTranslate=c.translate,c.isHorizontal()?c.translate=-e.scrollLeft:c.translate=-e.scrollTop,c.translate===0&&(c.translate=0),c.updateActiveIndex(),c.updateSlidesClasses();let n;const i=c.maxTranslate()-c.minTranslate();i===0?n=0:n=(c.translate-c.minTranslate())/i,n!==c.progress&&c.updateProgress(t?-c.translate:c.translate),c.emit("setTranslate",c.translate,!1)}function Dy(c){const e=this;D8(e,c.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}let En=!1;function Fy(){}const oo=(c,e)=>{const t=W4(),{params:a,el:n,wrapperEl:i,device:r}=c,s=!!a.nested,o=e==="on"?"addEventListener":"removeEventListener",l=e;n[o]("pointerdown",c.onTouchStart,{passive:!1}),t[o]("pointermove",c.onTouchMove,{passive:!1,capture:s}),t[o]("pointerup",c.onTouchEnd,{passive:!0}),t[o]("pointercancel",c.onTouchEnd,{passive:!0}),t[o]("pointerout",c.onTouchEnd,{passive:!0}),t[o]("pointerleave",c.onTouchEnd,{passive:!0}),t[o]("contextmenu",c.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&n[o]("click",c.onClick,!0),a.cssMode&&i[o]("scroll",c.onScroll),a.updateOnWindowResize?c[l](r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",Tn,!0):c[l]("observerUpdate",Tn,!0),n[o]("load",c.onLoad,{capture:!0})};function By(){const c=this,e=W4(),{params:t}=c;c.onTouchStart=Ey.bind(c),c.onTouchMove=Iy.bind(c),c.onTouchEnd=Py.bind(c),t.cssMode&&(c.onScroll=Oy.bind(c)),c.onClick=Ry.bind(c),c.onLoad=Dy.bind(c),En||(e.addEventListener("touchstart",Fy),En=!0),oo(c,"on")}function Uy(){oo(this,"off")}var $y={attachEvents:By,detachEvents:Uy};const In=(c,e)=>c.grid&&e.grid&&e.grid.rows>1;function qy(){const c=this,{realIndex:e,initialized:t,params:a,el:n}=c,i=a.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const r=c.getBreakpoint(i,c.params.breakpointsBase,c.el);if(!r||c.currentBreakpoint===r)return;const o=(r in i?i[r]:void 0)||c.originalParams,l=In(c,a),f=In(c,o),u=a.enabled;l&&!f?(n.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),c.emitContainerClasses()):!l&&f&&(n.classList.add(`${a.containerModifierClass}grid`),(o.grid.fill&&o.grid.fill==="column"||!o.grid.fill&&a.grid.fill==="column")&&n.classList.add(`${a.containerModifierClass}grid-column`),c.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof o[m]>"u")return;const H=a[m]&&a[m].enabled,z=o[m]&&o[m].enabled;H&&!z&&c[m].disable(),!H&&z&&c[m].enable()});const h=o.direction&&o.direction!==a.direction,d=a.loop&&(o.slidesPerView!==a.slidesPerView||h);h&&t&&c.changeDirection(),C2(c.params,o);const p=c.params.enabled;Object.assign(c,{allowTouchMove:c.params.allowTouchMove,allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev}),u&&!p?c.disable():!u&&p&&c.enable(),c.currentBreakpoint=r,c.emit("_beforeBreakpoint",o),d&&t&&(c.loopDestroy(),c.loopCreate(e),c.updateSlides()),c.emit("breakpoint",o)}function Wy(c,e,t){if(e===void 0&&(e="window"),!c||e==="container"&&!t)return;let a=!1;const n=V2(),i=e==="window"?n.innerHeight:t.clientHeight,r=Object.keys(c).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const o=parseFloat(s.substr(1));return{value:i*o,point:s}}return{value:s,point:s}});r.sort((s,o)=>parseInt(s.value,10)-parseInt(o.value,10));for(let s=0;s<r.length;s+=1){const{point:o,value:l}=r[s];e==="window"?n.matchMedia(`(min-width: ${l}px)`).matches&&(a=o):l<=t.clientWidth&&(a=o)}return a||"max"}var Gy={setBreakpoint:qy,getBreakpoint:Wy};function jy(c,e){const t=[];return c.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(n=>{a[n]&&t.push(e+n)}):typeof a=="string"&&t.push(e+a)}),t}function Ky(){const c=this,{classNames:e,params:t,rtl:a,el:n,device:i}=c,r=jy(["initialized",t.direction,{"free-mode":c.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:a},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...r),n.classList.add(...e),c.emitContainerClasses()}function Yy(){const c=this,{el:e,classNames:t}=c;e.classList.remove(...t),c.emitContainerClasses()}var Zy={addClasses:Ky,removeClasses:Yy};function Xy(){const c=this,{isLocked:e,params:t}=c,{slidesOffsetBefore:a}=t;if(a){const n=c.slides.length-1,i=c.slidesGrid[n]+c.slidesSizesGrid[n]+a*2;c.isLocked=c.size>i}else c.isLocked=c.snapGrid.length===1;t.allowSlideNext===!0&&(c.allowSlideNext=!c.isLocked),t.allowSlidePrev===!0&&(c.allowSlidePrev=!c.isLocked),e&&e!==c.isLocked&&(c.isEnd=!1),e!==c.isLocked&&c.emit(c.isLocked?"lock":"unlock")}var Qy={checkOverflow:Xy},Ye={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Jy(c,e){return function(a){a===void 0&&(a={});const n=Object.keys(a)[0],i=a[n];if(typeof i!="object"||i===null){C2(e,a);return}if(["navigation","pagination","scrollbar"].indexOf(n)>=0&&c[n]===!0&&(c[n]={auto:!0}),!(n in c&&"enabled"in i)){C2(e,a);return}c[n]===!0&&(c[n]={enabled:!0}),typeof c[n]=="object"&&!("enabled"in c[n])&&(c[n].enabled=!0),c[n]||(c[n]={enabled:!1}),C2(e,a)}}const K7={eventsEmitter:Z_,update:sy,translate:dy,transition:zy,slide:_y,loop:Sy,grabCursor:ky,events:$y,breakpoints:Gy,checkOverflow:Qy,classes:Zy},Y7={};let rc=class a3{constructor(){let e,t;for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?t=n[0]:[e,t]=n,t||(t={}),t=C2({},t),e&&!t.el&&(t.el=e);const r=W4();if(t.el&&typeof t.el=="string"&&r.querySelectorAll(t.el).length>1){const f=[];return r.querySelectorAll(t.el).forEach(u=>{const h=C2({},t,{el:u});f.push(new a3(h))}),f}const s=this;s.__swiper__=!0,s.support=ro(),s.device=W_({userAgent:t.userAgent}),s.browser=j_(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],t.modules&&Array.isArray(t.modules)&&s.modules.push(...t.modules);const o={};s.modules.forEach(f=>{f({params:t,swiper:s,extendParams:Jy(t,o),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const l=C2({},Ye,o);return s.params=C2({},l,Y7,t),s.originalParams=C2({},s.params),s.passedParams=C2({},t),s.params&&s.params.on&&Object.keys(s.params.on).forEach(f=>{s.on(f,s.params.on[f])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getSlideIndex(e){const{slidesEl:t,params:a}=this,n=Z2(t,`.${a.slideClass}, swiper-slide`),i=An(n[0]);return An(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:a}=e;e.slides=Z2(t,`.${a.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const a=this;e=Math.min(Math.max(e,0),1);const n=a.minTranslate(),r=(a.maxTranslate()-n)*e+n;a.translateTo(r,typeof t>"u"?0:t),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(a=>{const n=e.getSlideClasses(a);t.push({slideEl:a,classNames:n}),e.emit("_slideClass",a,n)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const a=this,{params:n,slides:i,slidesGrid:r,slidesSizesGrid:s,size:o,activeIndex:l}=a;let f=1;if(n.centeredSlides){let u=i[l]?i[l].swiperSlideSize:0,h;for(let d=l+1;d<i.length;d+=1)i[d]&&!h&&(u+=i[d].swiperSlideSize,f+=1,u>o&&(h=!0));for(let d=l-1;d>=0;d-=1)i[d]&&!h&&(u+=i[d].swiperSlideSize,f+=1,u>o&&(h=!0))}else if(e==="current")for(let u=l+1;u<i.length;u+=1)(t?r[u]+s[u]-r[l]<o:r[u]-r[l]<o)&&(f+=1);else for(let u=l-1;u>=0;u-=1)r[l]-r[u]<o&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:a}=e;a.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete&&D8(e,r)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function n(){const r=e.rtlTranslate?e.translate*-1:e.translate,s=Math.min(Math.max(r,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)n(),a.autoHeight&&e.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&e.isEnd&&!a.centeredSlides){const r=e.virtual&&a.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(r.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||n()}a.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const a=this,n=a.params.direction;return e||(e=n==="horizontal"?"vertical":"horizontal"),e===n||e!=="horizontal"&&e!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${n}`),a.el.classList.add(`${a.params.containerModifierClass}${e}`),a.emitContainerClasses(),a.params.direction=e,a.slides.forEach(i=>{e==="vertical"?i.style.width="":i.style.height=""}),a.emit("changeDirection"),t&&a.update()),a}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let a=e||t.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=t,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(t.isElement=!0);const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(n()):Z2(a,n())[0])();return!r&&t.params.createElements&&(r=io("div",t.params.wrapperClass),a.append(r),Z2(a,`.${t.params.slideClass}`).forEach(s=>{r.append(s)})),Object.assign(t,{el:a,wrapperEl:r,slidesEl:t.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:r,hostEl:t.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||D3(a,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||D3(a,"direction")==="rtl"),wrongRTL:D3(r,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(i=>{i.complete?D8(t,i):i.addEventListener("load",r=>{D8(t,r.target)})}),Ke(t),t.initialized=!0,Ke(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const a=this,{params:n,el:i,wrapperEl:r,slides:s}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),n.loop&&a.loopDestroy(),t&&(a.removeClasses(),i.removeAttribute("style"),r.removeAttribute("style"),s&&s.length&&s.forEach(o=>{o.classList.remove(n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),o.removeAttribute("style"),o.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(o=>{a.off(o)}),e!==!1&&(a.el.swiper=null,P_(a)),a.destroyed=!0),null}static extendDefaults(e){C2(Y7,e)}static get extendedDefaults(){return Y7}static get defaults(){return Ye}static installModule(e){a3.prototype.__modules__||(a3.prototype.__modules__=[]);const t=a3.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>a3.installModule(t)),a3):(a3.installModule(e),a3)}};Object.keys(K7).forEach(c=>{Object.keys(K7[c]).forEach(e=>{rc.prototype[e]=K7[c][e]})});rc.use([K_,Y_]);const lo=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function N4(c){return typeof c=="object"&&c!==null&&c.constructor&&Object.prototype.toString.call(c).slice(8,-1)==="Object"}function _4(c,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(a=>t.indexOf(a)<0).forEach(a=>{typeof c[a]>"u"?c[a]=e[a]:N4(e[a])&&N4(c[a])&&Object.keys(e[a]).length>0?e[a].__swiper__?c[a]=e[a]:_4(c[a],e[a]):c[a]=e[a]})}function fo(c){return c===void 0&&(c={}),c.navigation&&typeof c.navigation.nextEl>"u"&&typeof c.navigation.prevEl>"u"}function uo(c){return c===void 0&&(c={}),c.pagination&&typeof c.pagination.el>"u"}function ho(c){return c===void 0&&(c={}),c.scrollbar&&typeof c.scrollbar.el>"u"}function mo(c){c===void 0&&(c="");const e=c.split(" ").map(a=>a.trim()).filter(a=>!!a),t=[];return e.forEach(a=>{t.indexOf(a)<0&&t.push(a)}),t.join(" ")}function ew(c){return c===void 0&&(c=""),c?c.includes("swiper-wrapper")?c:`swiper-wrapper ${c}`:"swiper-wrapper"}function cw(c){let{swiper:e,slides:t,passedParams:a,changedParams:n,nextEl:i,prevEl:r,scrollbarEl:s,paginationEl:o}=c;const l=n.filter(b=>b!=="children"&&b!=="direction"&&b!=="wrapperClass"),{params:f,pagination:u,navigation:h,scrollbar:d,virtual:p,thumbs:m}=e;let H,z,C,M,V,w,F,P;n.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(H=!0),n.includes("controller")&&a.controller&&a.controller.control&&f.controller&&!f.controller.control&&(z=!0),n.includes("pagination")&&a.pagination&&(a.pagination.el||o)&&(f.pagination||f.pagination===!1)&&u&&!u.el&&(C=!0),n.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||s)&&(f.scrollbar||f.scrollbar===!1)&&d&&!d.el&&(M=!0),n.includes("navigation")&&a.navigation&&(a.navigation.prevEl||r)&&(a.navigation.nextEl||i)&&(f.navigation||f.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(V=!0);const x=b=>{e[b]&&(e[b].destroy(),b==="navigation"?(e.isElement&&(e[b].prevEl.remove(),e[b].nextEl.remove()),f[b].prevEl=void 0,f[b].nextEl=void 0,e[b].prevEl=void 0,e[b].nextEl=void 0):(e.isElement&&e[b].el.remove(),f[b].el=void 0,e[b].el=void 0))};n.includes("loop")&&e.isElement&&(f.loop&&!a.loop?w=!0:!f.loop&&a.loop?F=!0:P=!0),l.forEach(b=>{if(N4(f[b])&&N4(a[b]))_4(f[b],a[b]),(b==="navigation"||b==="pagination"||b==="scrollbar")&&"enabled"in a[b]&&!a[b].enabled&&x(b);else{const G=a[b];(G===!0||G===!1)&&(b==="navigation"||b==="pagination"||b==="scrollbar")?G===!1&&x(b):f[b]=a[b]}}),l.includes("controller")&&!z&&e.controller&&e.controller.control&&f.controller&&f.controller.control&&(e.controller.control=f.controller.control),n.includes("children")&&t&&p&&f.virtual.enabled&&(p.slides=t,p.update(!0)),n.includes("children")&&t&&f.loop&&(P=!0),H&&m.init()&&m.update(!0),z&&(e.controller.control=f.controller.control),C&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-pagination"),o.part.add("pagination"),e.el.appendChild(o)),o&&(f.pagination.el=o),u.init(),u.render(),u.update()),M&&(e.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),e.el.appendChild(s)),s&&(f.scrollbar.el=s),d.init(),d.updateSize(),d.setTranslate()),V&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),i.innerHTML=e.hostEl.constructor.nextButtonSvg,i.part.add("button-next"),e.el.appendChild(i)),(!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-button-prev"),r.innerHTML=e.hostEl.constructor.prevButtonSvg,r.part.add("button-prev"),e.el.appendChild(r))),i&&(f.navigation.nextEl=i),r&&(f.navigation.prevEl=r),h.init(),h.update()),n.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),n.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),n.includes("direction")&&e.changeDirection(a.direction,!1),(w||P)&&e.loopDestroy(),(F||P)&&e.loopCreate(),e.update()}function Pn(c,e){c===void 0&&(c={}),e===void 0&&(e=!0);const t={on:{}},a={},n={};_4(t,Ye),t._emitClasses=!0,t.init=!1;const i={},r=lo.map(o=>o.replace(/_/,"")),s=Object.assign({},c);return Object.keys(s).forEach(o=>{typeof c[o]>"u"||(r.indexOf(o)>=0?N4(c[o])?(t[o]={},n[o]={},_4(t[o],c[o]),_4(n[o],c[o])):(t[o]=c[o],n[o]=c[o]):o.search(/on[A-Z]/)===0&&typeof c[o]=="function"?e?a[`${o[2].toLowerCase()}${o.substr(3)}`]=c[o]:t.on[`${o[2].toLowerCase()}${o.substr(3)}`]=c[o]:i[o]=c[o])}),["navigation","pagination","scrollbar"].forEach(o=>{t[o]===!0&&(t[o]={}),t[o]===!1&&delete t[o]}),{params:t,passedParams:n,rest:i,events:a}}function tw(c,e){let{el:t,nextEl:a,prevEl:n,paginationEl:i,scrollbarEl:r,swiper:s}=c;fo(e)&&a&&n&&(s.params.navigation.nextEl=a,s.originalParams.navigation.nextEl=a,s.params.navigation.prevEl=n,s.originalParams.navigation.prevEl=n),uo(e)&&i&&(s.params.pagination.el=i,s.originalParams.pagination.el=i),ho(e)&&r&&(s.params.scrollbar.el=r,s.originalParams.scrollbar.el=r),s.init(t)}function aw(c,e,t,a,n){const i=[];if(!e)return i;const r=o=>{i.indexOf(o)<0&&i.push(o)};if(t&&a){const o=a.map(n),l=t.map(n);o.join("")!==l.join("")&&r("children"),a.length!==t.length&&r("children")}return lo.filter(o=>o[0]==="_").map(o=>o.replace(/_/,"")).forEach(o=>{if(o in c&&o in e)if(N4(c[o])&&N4(e[o])){const l=Object.keys(c[o]),f=Object.keys(e[o]);l.length!==f.length?r(o):(l.forEach(u=>{c[o][u]!==e[o][u]&&r(o)}),f.forEach(u=>{c[o][u]!==e[o][u]&&r(o)}))}else c[o]!==e[o]&&r(o)}),i}const nw=c=>{!c||c.destroyed||!c.params.virtual||c.params.virtual&&!c.params.virtual.enabled||(c.updateSlides(),c.updateProgress(),c.updateSlidesClasses(),c.parallax&&c.params.parallax&&c.params.parallax.enabled&&c.parallax.setTranslate())};function Z7(c,e,t){c===void 0&&(c={});const a=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},i=(r,s)=>{Array.isArray(r)&&r.forEach(o=>{const l=typeof o.type=="symbol";s==="default"&&(s="container-end"),l&&o.children?i(o.children,s):o.type&&(o.type.name==="SwiperSlide"||o.type.name==="AsyncComponentWrapper")?a.push(o):n[s]&&n[s].push(o)})};return Object.keys(c).forEach(r=>{if(typeof c[r]!="function")return;const s=c[r]();i(s,r)}),t.value=e.value,e.value=a,{slides:a,slots:n}}function iw(c,e,t){if(!t)return null;const a=f=>{let u=f;return f<0?u=e.length+f:u>=e.length&&(u=u-e.length),u},n=c.value.isHorizontal()?{[c.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:i,to:r}=t,s=c.value.params.loop?-e.length:0,o=c.value.params.loop?e.length*2:e.length,l=[];for(let f=s;f<o;f+=1)f>=i&&f<=r&&l.push(e[a(f)]);return l.map(f=>(f.props||(f.props={}),f.props.style||(f.props.style={}),f.props.swiperRef=c,f.props.style=n,n2(f.type,{...f.props},f.children)))}const po={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(c,e){let{slots:t,emit:a}=e;const{tag:n,wrapperTag:i}=c,r=u1("swiper"),s=u1(null),o=u1(!1),l=u1(!1),f=u1(null),u=u1(null),h=u1(null),d={value:[]},p={value:[]},m=u1(null),H=u1(null),z=u1(null),C=u1(null),{params:M,passedParams:V}=Pn(c,!1);Z7(t,d,p),h.value=V,p.value=d.value;const w=()=>{Z7(t,d,p),o.value=!0};M.onAny=function(x){for(var b=arguments.length,G=new Array(b>1?b-1:0),I=1;I<b;I++)G[I-1]=arguments[I];a(x,...G)},Object.assign(M.on,{_beforeBreakpoint:w,_containerClasses(x,b){r.value=b}});const F={...M};if(delete F.wrapperClass,u.value=new rc(F),u.value.virtual&&u.value.params.virtual.enabled){u.value.virtual.slides=d.value;const x={cache:!1,slides:d.value,renderExternal:b=>{s.value=b},renderExternalUpdate:!1};_4(u.value.params.virtual,x),_4(u.value.originalParams.virtual,x)}X9(()=>{!l.value&&u.value&&(u.value.emitSlidesClasses(),l.value=!0);const{passedParams:x}=Pn(c,!1),b=aw(x,h.value,d.value,p.value,G=>G.props&&G.props.key);h.value=x,(b.length||o.value)&&u.value&&!u.value.destroyed&&cw({swiper:u.value,slides:d.value,passedParams:x,changedParams:b,nextEl:m.value,prevEl:H.value,scrollbarEl:C.value,paginationEl:z.value}),o.value=!1}),d6("swiper",u),q3(s,()=>{O3(()=>{nw(u.value)})}),T6(()=>{f.value&&(tw({el:f.value,nextEl:m.value,prevEl:H.value,paginationEl:z.value,scrollbarEl:C.value,swiper:u.value},M),a("swiper",u.value))}),D5(()=>{u.value&&!u.value.destroyed&&u.value.destroy(!0,!1)});function P(x){return M.virtual?iw(u,x,s.value):(x.forEach((b,G)=>{b.props||(b.props={}),b.props.swiperRef=u,b.props.swiperSlideIndex=G}),x)}return()=>{const{slides:x,slots:b}=Z7(t,d,p);return n2(n,{ref:f,class:mo(r.value)},[b["container-start"],n2(i,{class:ew(M.wrapperClass)},[b["wrapper-start"],P(x),b["wrapper-end"]]),fo(c)&&[n2("div",{ref:H,class:"swiper-button-prev"}),n2("div",{ref:m,class:"swiper-button-next"})],ho(c)&&n2("div",{ref:C,class:"swiper-scrollbar"}),uo(c)&&n2("div",{ref:z,class:"swiper-pagination"}),b["container-end"]])}}},Ze={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(c,e){let{slots:t}=e,a=!1;const{swiperRef:n}=c,i=u1(null),r=u1("swiper-slide"),s=u1(!1);function o(u,h,d){h===i.value&&(r.value=d)}T6(()=>{!n||!n.value||(n.value.on("_slideClass",o),a=!0)}),ys(()=>{a||!n||!n.value||(n.value.on("_slideClass",o),a=!0)}),X9(()=>{!i.value||!n||!n.value||(typeof c.swiperSlideIndex<"u"&&(i.value.swiperSlideIndex=c.swiperSlideIndex),n.value.destroyed&&r.value!=="swiper-slide"&&(r.value="swiper-slide"))}),D5(()=>{!n||!n.value||n.value.off("_slideClass",o)});const l=g1(()=>({isActive:r.value.indexOf("swiper-slide-active")>=0,isVisible:r.value.indexOf("swiper-slide-visible")>=0,isPrev:r.value.indexOf("swiper-slide-prev")>=0,isNext:r.value.indexOf("swiper-slide-next")>=0}));d6("swiperSlide",l);const f=()=>{s.value=!0};return()=>n2(c.tag,{class:mo(`${r.value}`),ref:i,"data-swiper-slide-index":typeof c.virtualIndex>"u"&&n&&n.value&&n.value.params.loop?c.swiperSlideIndex:c.virtualIndex,onLoadCapture:f},c.zoom?n2("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof c.zoom=="number"?c.zoom:void 0},[t.default&&t.default(l.value),c.lazy&&!s.value&&n2("div",{class:"swiper-lazy-preloader"})]):[t.default&&t.default(l.value),c.lazy&&!s.value&&n2("div",{class:"swiper-lazy-preloader"})])}};function rw(c,e,t,a){return c.params.createElements&&Object.keys(a).forEach(n=>{if(!t[n]&&t.auto===!0){let i=Z2(c.el,`.${a[n]}`)[0];i||(i=io("div",a[n]),i.className=a[n],c.el.append(i)),t[n]=i,e[n]=i}}),t}function vo(c){let{swiper:e,extendParams:t,on:a,emit:n}=c;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const i=m=>(Array.isArray(m)?m:[m]).filter(H=>!!H);function r(m){let H;return m&&typeof m=="string"&&e.isElement&&(H=e.el.querySelector(m),H)?H:(m&&(typeof m=="string"&&(H=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&H.length>1&&e.el.querySelectorAll(m).length===1&&(H=e.el.querySelector(m))),m&&!H?m:H)}function s(m,H){const z=e.params.navigation;m=i(m),m.forEach(C=>{C&&(C.classList[H?"add":"remove"](...z.disabledClass.split(" ")),C.tagName==="BUTTON"&&(C.disabled=H),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](z.lockClass))})}function o(){const{nextEl:m,prevEl:H}=e.navigation;if(e.params.loop){s(H,!1),s(m,!1);return}s(H,e.isBeginning&&!e.params.rewind),s(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function f(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function u(){const m=e.params.navigation;if(e.params.navigation=rw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let H=r(m.nextEl),z=r(m.prevEl);Object.assign(e.navigation,{nextEl:H,prevEl:z}),H=i(H),z=i(z);const C=(M,V)=>{M&&M.addEventListener("click",V==="next"?f:l),!e.enabled&&M&&M.classList.add(...m.lockClass.split(" "))};H.forEach(M=>C(M,"next")),z.forEach(M=>C(M,"prev"))}function h(){let{nextEl:m,prevEl:H}=e.navigation;m=i(m),H=i(H);const z=(C,M)=>{C.removeEventListener("click",M==="next"?f:l),C.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(C=>z(C,"next")),H.forEach(C=>z(C,"prev"))}a("init",()=>{e.params.navigation.enabled===!1?p():(u(),o())}),a("toEdge fromEdge lock unlock",()=>{o()}),a("destroy",()=>{h()}),a("enable disable",()=>{let{nextEl:m,prevEl:H}=e.navigation;m=i(m),H=i(H),[...m,...H].filter(z=>!!z).forEach(z=>z.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass))}),a("click",(m,H)=>{let{nextEl:z,prevEl:C}=e.navigation;z=i(z),C=i(C);const M=H.target;if(e.params.navigation.hideOnClick&&!C.includes(M)&&!z.includes(M)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===M||e.pagination.el.contains(M)))return;let V;z.length?V=z[0].classList.contains(e.params.navigation.hiddenClass):C.length&&(V=C[0].classList.contains(e.params.navigation.hiddenClass)),n(V===!0?"navigationShow":"navigationHide"),[...z,...C].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),o()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:d,disable:p,update:o,init:u,destroy:h})}const sw={key:0,class:"info__wrapper"},ow=["src"],lw={class:"info__content"},fw={class:"info__title"},uw={class:"info__desc text-limit"},hw={class:"info__about"},dw={key:0,class:"info__time"},mw={class:"info__actors"},pw={__name:"InfoBlock",props:["current","open","page"],setup(c){return(e,t)=>{const a=f2("Actors"),n=f2("BtnMore"),i=f2("font-awesome-icon");return r1(),w1("section",{class:F3(["info",{active:c.open}])},[X(a4,{name:"infoblock"},{default:A1(()=>[c.current?(r1(),w1("div",sw,[c1("img",{src:h1(Qs)+c.current.backdrop_path,alt:"",class:"info__img"},null,8,ow),c1("div",lw,[c1("h2",fw,a2(c.current.title||c.current.name),1),c1("p",uw,a2(c.current.overview),1),c1("p",hw,[$4(a2(new Date(c.current.release_date).getFullYear()||new Date(c.current.first_air_date).getFullYear())+", "+a2(c.current.genres.map(r=>r.name).join(", "))+" ",1),c.current.runtime?(r1(),w1("span",dw,a2(new Date(0,0,0,0,c.current.runtime).getHours())+"h "+a2(new Date(0,0,0,0,c.current.runtime).getMinutes())+"m",1)):S4("",!0)]),c1("div",mw,[X(a,{type:c.page,id:c.current.id,count:4},null,8,["type","id"])]),X(n,{id:c.current.id,page:c.page},null,8,["id","page"])])])):S4("",!0)]),_:1}),X(i,{icon:"fa-solid fa-xmark",class:"info__close",onClick:t[0]||(t[0]=r=>e.$emit("close"))})],2)}}},vw=q4("details",{state:()=>({info:null}),actions:{async getDetails(c,e){try{const a=await(await fetch(`https://api.themoviedb.org/3/${e}/${c}?language=ru`,W0)).json();this.info=a}catch(t){console.log(t)}}}});const zw={key:0,class:"content"},gw={alt:"",class:"content__img"},Cw=c1("div",{class:"content__arrow"},null,-1),Hw={key:1,class:"loading"},Mw=c1("div",{class:"loading__spiner"},null,-1),Vw=[Mw],Rn={__name:"Content",props:["type"],setup(c){const e=c;let t=vw(),a=u1([vo]),n=E_(),i={200:{slidesPerView:1.5},576:{slidesPerView:2.5},992:{slidesPerView:3.5},1320:{slidesPerView:4.5},1600:{slidesPerView:5.5}},r=u1(null);const s=u1(!1);n.getPopular(e.type);const o=g1(()=>e.type=="movie"?n.moviesList:n.tvsList);let l=u1(),f=u1(null);async function u(d,p){r.value=null,f.value=p,await t.getDetails(d.id,e.type),r.value=t.info;let m=l.value.offsetTop;window.scroll({top:m-headerId.offsetHeight,behavior:"smooth"}),s.value=!0}function h(){s.value=!1,r.value=null,f.value=null}return(d,p)=>{const m=f2("font-awesome-icon"),H=f2("router-link"),z=Q9("lazy");return r1(),x2(a4,{name:"content"},{default:A1(()=>[o.value.length>0?(r1(),w1("section",zw,[X(H,{to:"/"+c.type,class:"title"},{default:A1(()=>[$4(a2(c.type=="movie"?"Фильмы":"Сереалы")+" ",1),X(m,{icon:["fas","chevron-right"],class:"title__icon"})]),_:1},8,["to"]),X(h1(po),{modules:h1(a),"slides-per-view":5.5,"space-between":24,navigation:"",breakpoints:h1(i)},{default:A1(()=>[(r1(!0),w1(X1,null,q0(o.value,(C,M)=>(r1(),x2(h1(Ze),{class:F3(["content__item",{active:M==h1(f)}]),key:M,onClick:V=>u(C,M)},{default:A1(()=>[P5(c1("img",gw,null,512),[[z,h1(G5)+C.poster_path]]),X(H,{to:`/${c.type}/${C.id}`,class:"content__media-link"},null,8,["to"]),Cw]),_:2},1032,["class","onClick"]))),128)),X(h1(Ze),{class:"content__item"},{default:A1(()=>[X(H,{to:"/"+c.type,class:"content__link"},{default:A1(()=>[X(m,{icon:"fa-solid fa-chevron-right",class:"content__icon"}),c1("span",null,a2(c.type=="movie"?"Все фильмы":"Все сериалы"),1)]),_:1},8,["to"])]),_:1})]),_:1},8,["modules","breakpoints"]),c1("div",{ref_key:"inf",ref:l},[X(pw,{current:h1(r),open:s.value,onClose:h,page:c.type},null,8,["current","open","page"])],512)])):(r1(),w1("div",Hw,Vw))]),_:1})}}},Lw=q4("top",{state:()=>({moviesList:[],tvsList:[]}),actions:{async getTop(c="movie"){try{const a=(await(await fetch(`https://api.themoviedb.org/3/${c}/top_rated?language=ru&page=1`,W0)).json()).results.filter(n=>n.poster_path!=null);a.length=10,c=="tv"?this.tvsList=a:this.moviesList=a}catch(e){console.log(e)}}}});const bw={key:0,class:"rate"},_w=c1("h2",{class:"rate__title"},[$4(" ТОП "),c1("span",{class:"rate__subtitle"},"10")],-1),yw={alt:"",class:"rate__img"},ww={class:"rate__content"},xw={key:1,class:"loading"},Sw=c1("div",{class:"loading__spiner"},null,-1),Nw=[Sw],Aw={__name:"Top",setup(c){let e=Lw();e.getTop();const t=g1(()=>e.moviesList);let a=u1([vo]),n={200:{slidesPerView:1},576:{slidesPerView:2},1100:{slidesPerView:2.5},1320:{slidesPerView:3},1600:{slidesPerView:3.2}};return(i,r)=>{const s=f2("router-link"),o=Q9("lazy");return r1(),x2(a4,{name:"movies"},{default:A1(()=>[t.value.length>0?(r1(),w1("section",bw,[_w,X(h1(po),{modules:h1(a),"slides-per-view":5.5,"space-between":24,navigation:"",breakpoints:h1(n)},{default:A1(()=>[(r1(!0),w1(X1,null,q0(t.value,(l,f)=>(r1(),x2(h1(Ze),{class:"rate__item",key:f},{default:A1(()=>[X(s,{to:"/movie/"+l.id},{default:A1(()=>[P5(c1("img",yw,null,512),[[o,h1(G5)+l.poster_path]]),c1("div",ww,[c1("p",null,a2(f+1),1)])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules","breakpoints"])])):(r1(),w1("div",xw,Nw))]),_:1})}}},kw={__name:"Home",setup(c){return(e,t)=>(r1(),w1("div",null,[X(T_),X(Rn,{type:"movie"}),X(Rn,{type:"tv"}),X(Aw)]))}};/**
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
 */const zo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(c,e){if(!c)throw E6(e)},E6=function(c){return new Error("Firebase Database ("+zo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+c)};/**
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
 */const go=function(c){const e=[];let t=0;for(let a=0;a<c.length;a++){let n=c.charCodeAt(a);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&a+1<c.length&&(c.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(c.charCodeAt(++a)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},Tw=function(c){const e=[];let t=0,a=0;for(;t<c.length;){const n=c[t++];if(n<128)e[a++]=String.fromCharCode(n);else if(n>191&&n<224){const i=c[t++];e[a++]=String.fromCharCode((n&31)<<6|i&63)}else if(n>239&&n<365){const i=c[t++],r=c[t++],s=c[t++],o=((n&7)<<18|(i&63)<<12|(r&63)<<6|s&63)-65536;e[a++]=String.fromCharCode(55296+(o>>10)),e[a++]=String.fromCharCode(56320+(o&1023))}else{const i=c[t++],r=c[t++];e[a++]=String.fromCharCode((n&15)<<12|(i&63)<<6|r&63)}}return e.join("")},sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<c.length;n+=3){const i=c[n],r=n+1<c.length,s=r?c[n+1]:0,o=n+2<c.length,l=o?c[n+2]:0,f=i>>2,u=(i&3)<<4|s>>4;let h=(s&15)<<2|l>>6,d=l&63;o||(d=64,r||(h=64)),a.push(t[f],t[u],t[h],t[d])}return a.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(go(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):Tw(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<c.length;){const i=t[c.charAt(n++)],s=n<c.length?t[c.charAt(n)]:0;++n;const l=n<c.length?t[c.charAt(n)]:64;++n;const u=n<c.length?t[c.charAt(n)]:64;if(++n,i==null||s==null||l==null||u==null)throw new Ew;const h=i<<2|s>>4;if(a.push(h),l!==64){const d=s<<4&240|l>>2;if(a.push(d),u!==64){const p=l<<6&192|u;a.push(p)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}};class Ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Co=function(c){const e=go(c);return sc.encodeByteArray(e,!0)},J8=function(c){return Co(c).replace(/\./g,"")},e5=function(c){try{return sc.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Iw(c){return Ho(void 0,c)}function Ho(c,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:c===void 0&&(c={});break;case Array:c=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Pw(t)||(c[t]=Ho(c[t],e[t]));return c}function Pw(c){return c!=="__proto__"}/**
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
 */function Rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ow=()=>Rw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const c={}.__FIREBASE_DEFAULTS__;if(c)return JSON.parse(c)},Fw=()=>{if(typeof document>"u")return;let c;try{c=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=c&&e5(c[1]);return e&&JSON.parse(e)},K5=()=>{try{return Ow()||Dw()||Fw()}catch(c){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${c}`);return}},Mo=c=>{var e,t;return(t=(e=K5())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[c]},Vo=c=>{const e=Mo(c);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),a]:[e.substring(0,t),a]},Lo=()=>{var c;return(c=K5())===null||c===void 0?void 0:c.config},bo=c=>{var e;return(e=K5())===null||e===void 0?void 0:e[`_${c}`]};/**
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
 */class Y5{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
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
 */function _o(c,e){if(c.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=e||"demo-project",n=c.iat||0,i=c.sub||c.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},c),s="";return[J8(JSON.stringify(t)),J8(JSON.stringify(r)),s].join(".")}/**
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
 */function e2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(e2())}function Bw(){var c;const e=(c=K5())===null||c===void 0?void 0:c.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yo(){const c=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof c=="object"&&c.id!==void 0}function wo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uw(){const c=e2();return c.indexOf("MSIE ")>=0||c.indexOf("Trident/")>=0}function xo(){return zo.NODE_ADMIN===!0}function So(){try{return typeof indexedDB=="object"}catch{return!1}}function No(){return new Promise((c,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(a),c(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var i;e(((i=n.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function $w(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qw="FirebaseError";class q2 extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=qw,Object.setPrototypeOf(this,q2.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G4.prototype.create)}}class G4{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],r=i?Ww(i,a):"Error",s=`${this.serviceName}: ${r} (${n}).`;return new q2(n,s,a)}}function Ww(c,e){return c.replace(Gw,(t,a)=>{const n=e[a];return n!=null?String(n):`<${a}?>`})}const Gw=/\{\$([^}]+)}/g;/**
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
 */function _0(c){return JSON.parse(c)}function j1(c){return JSON.stringify(c)}/**
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
 */const Ao=function(c){let e={},t={},a={},n="";try{const i=c.split(".");e=_0(e5(i[0])||""),t=_0(e5(i[1])||""),n=i[2],a=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:a,signature:n}},jw=function(c){const e=Ao(c),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Kw=function(c){const e=Ao(c).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function C3(c,e){return Object.prototype.hasOwnProperty.call(c,e)}function _6(c,e){if(Object.prototype.hasOwnProperty.call(c,e))return c[e]}function Xe(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function c5(c,e,t){const a={};for(const n in c)Object.prototype.hasOwnProperty.call(c,n)&&(a[n]=e.call(t,c[n],n,c));return a}function y0(c,e){if(c===e)return!0;const t=Object.keys(c),a=Object.keys(e);for(const n of t){if(!a.includes(n))return!1;const i=c[n],r=e[n];if(On(i)&&On(r)){if(!y0(i,r))return!1}else if(i!==r)return!1}for(const n of a)if(!t.includes(n))return!1;return!0}function On(c){return c!==null&&typeof c=="object"}/**
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
 */function I6(c){const e=[];for(const[t,a]of Object.entries(c))Array.isArray(a)?a.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Q6(c){const e={};return c.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[n,i]=a.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function J6(c){const e=c.indexOf("?");if(!e)return"";const t=c.indexOf("#",e);return c.substring(e,t>0?t:void 0)}/**
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
 */class Yw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const a=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)a[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)a[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=a[u-3]^a[u-8]^a[u-14]^a[u-16];a[u]=(h<<1|h>>>31)&4294967295}let n=this.chain_[0],i=this.chain_[1],r=this.chain_[2],s=this.chain_[3],o=this.chain_[4],l,f;for(let u=0;u<80;u++){u<40?u<20?(l=s^i&(r^s),f=1518500249):(l=i^r^s,f=1859775393):u<60?(l=i&r|s&(i|r),f=2400959708):(l=i^r^s,f=3395469782);const h=(n<<5|n>>>27)+l+o+f+a[u]&4294967295;o=s,s=r,r=(i<<30|i>>>2)&4294967295,i=n,n=h}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+r&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const a=t-this.blockSize;let n=0;const i=this.buf_;let r=this.inbuf_;for(;n<t;){if(r===0)for(;n<=a;)this.compress_(e,n),n+=this.blockSize;if(typeof e=="string"){for(;n<t;)if(i[r]=e.charCodeAt(n),++r,++n,r===this.blockSize){this.compress_(i),r=0;break}}else for(;n<t;)if(i[r]=e[n],++r,++n,r===this.blockSize){this.compress_(i),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=t&255,t/=256;this.compress_(this.buf_);let a=0;for(let n=0;n<5;n++)for(let i=24;i>=0;i-=8)e[a]=this.chain_[n]>>i&255,++a;return e}}function Zw(c,e){const t=new Xw(c,e);return t.subscribe.bind(t)}class Xw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let n;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");Qw(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:a},n.next===void 0&&(n.next=X7),n.error===void 0&&(n.error=X7),n.complete===void 0&&(n.complete=X7);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qw(c,e){if(typeof c!="object"||c===null)return!1;for(const t of e)if(t in c&&typeof c[t]=="function")return!0;return!1}function X7(){}function lc(c,e){return`${c} failed: ${e} argument `}/**
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
 */const Jw=function(c){const e=[];let t=0;for(let a=0;a<c.length;a++){let n=c.charCodeAt(a);if(n>=55296&&n<=56319){const i=n-55296;a++,T(a<c.length,"Surrogate pair missing trail surrogate.");const r=c.charCodeAt(a)-56320;n=65536+(i<<10)+r}n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):n<65536?(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},Z5=function(c){let e=0;for(let t=0;t<c.length;t++){const a=c.charCodeAt(t);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const ex=1e3,cx=2,tx=4*60*60*1e3,ax=.5;function Dn(c,e=ex,t=cx){const a=e*Math.pow(t,c),n=Math.round(ax*a*(Math.random()-.5)*2);return Math.min(tx,a+n)}/**
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
 */function F1(c){return c&&c._delegate?c._delegate:c}class S2{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const h4="[DEFAULT]";/**
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
 */class nx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new Y5;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rx(e))try{this.getOrInitializeService({instanceIdentifier:h4})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:n});a.resolve(i)}catch{}}}}clearInstance(e=h4){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=h4){return this.instances.has(e)}getOptions(e=h4){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[i,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);a===s&&r.resolve(n)}return n}onInit(e,t){var a;const n=this.normalizeInstanceIdentifier(t),i=(a=this.onInitCallbacks.get(n))!==null&&a!==void 0?a:new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const n of a)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:ix(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=h4){return this.component?this.component.multipleInstances?e:h4:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ix(c){return c===h4?void 0:c}function rx(c){return c.instantiationMode==="EAGER"}/**
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
 */class sx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var M1;(function(c){c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT"})(M1||(M1={}));const ox={debug:M1.DEBUG,verbose:M1.VERBOSE,info:M1.INFO,warn:M1.WARN,error:M1.ERROR,silent:M1.SILENT},lx=M1.INFO,fx={[M1.DEBUG]:"log",[M1.VERBOSE]:"log",[M1.INFO]:"info",[M1.WARN]:"warn",[M1.ERROR]:"error"},ux=(c,e,...t)=>{if(e<c.logLevel)return;const a=new Date().toISOString(),n=fx[e];if(n)console[n](`[${a}]  ${c.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class X5{constructor(e){this.name=e,this._logLevel=lx,this._logHandler=ux,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M1))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ox[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M1.DEBUG,...e),this._logHandler(this,M1.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M1.VERBOSE,...e),this._logHandler(this,M1.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M1.INFO,...e),this._logHandler(this,M1.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M1.WARN,...e),this._logHandler(this,M1.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M1.ERROR,...e),this._logHandler(this,M1.ERROR,...e)}}const hx=(c,e)=>e.some(t=>c instanceof t);let Fn,Bn;function dx(){return Fn||(Fn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mx(){return Bn||(Bn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ko=new WeakMap,Qe=new WeakMap,To=new WeakMap,Q7=new WeakMap,fc=new WeakMap;function px(c){const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("success",i),c.removeEventListener("error",r)},i=()=>{t(W3(c.result)),n()},r=()=>{a(c.error),n()};c.addEventListener("success",i),c.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&ko.set(t,c)}).catch(()=>{}),fc.set(e,c),e}function vx(c){if(Qe.has(c))return;const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("complete",i),c.removeEventListener("error",r),c.removeEventListener("abort",r)},i=()=>{t(),n()},r=()=>{a(c.error||new DOMException("AbortError","AbortError")),n()};c.addEventListener("complete",i),c.addEventListener("error",r),c.addEventListener("abort",r)});Qe.set(c,e)}let Je={get(c,e,t){if(c instanceof IDBTransaction){if(e==="done")return Qe.get(c);if(e==="objectStoreNames")return c.objectStoreNames||To.get(c);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return W3(c[e])},set(c,e,t){return c[e]=t,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function zx(c){Je=c(Je)}function gx(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=c.call(J7(this),e,...t);return To.set(a,e.sort?e.sort():[e]),W3(a)}:mx().includes(c)?function(...e){return c.apply(J7(this),e),W3(ko.get(this))}:function(...e){return W3(c.apply(J7(this),e))}}function Cx(c){return typeof c=="function"?gx(c):(c instanceof IDBTransaction&&vx(c),hx(c,dx())?new Proxy(c,Je):c)}function W3(c){if(c instanceof IDBRequest)return px(c);if(Q7.has(c))return Q7.get(c);const e=Cx(c);return e!==c&&(Q7.set(c,e),fc.set(e,c)),e}const J7=c=>fc.get(c);function Hx(c,e,{blocked:t,upgrade:a,blocking:n,terminated:i}={}){const r=indexedDB.open(c,e),s=W3(r);return a&&r.addEventListener("upgradeneeded",o=>{a(W3(r.result),o.oldVersion,o.newVersion,W3(r.transaction),o)}),t&&r.addEventListener("blocked",o=>t(o.oldVersion,o.newVersion,o)),s.then(o=>{i&&o.addEventListener("close",()=>i()),n&&o.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}const Mx=["get","getKey","getAll","getAllKeys","count"],Vx=["put","add","delete","clear"],ee=new Map;function Un(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if(ee.get(e))return ee.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,n=Vx.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(n||Mx.includes(t)))return;const i=async function(r,...s){const o=this.transaction(r,n?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(s.shift())),(await Promise.all([l[t](...s),n&&o.done]))[0]};return ee.set(e,i),i}zx(c=>({...c,get:(e,t,a)=>Un(e,t)||c.get(e,t,a),has:(e,t)=>!!Un(e,t)||c.has(e,t)}));/**
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
 */class Lx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bx(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function bx(c){const e=c.getComponent();return(e==null?void 0:e.type)==="VERSION"}const e9="@firebase/app",$n="0.9.18";/**
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
 */const A4=new X5("@firebase/app"),_x="@firebase/app-compat",yx="@firebase/analytics-compat",wx="@firebase/analytics",xx="@firebase/app-check-compat",Sx="@firebase/app-check",Nx="@firebase/auth",Ax="@firebase/auth-compat",kx="@firebase/database",Tx="@firebase/database-compat",Ex="@firebase/functions",Ix="@firebase/functions-compat",Px="@firebase/installations",Rx="@firebase/installations-compat",Ox="@firebase/messaging",Dx="@firebase/messaging-compat",Fx="@firebase/performance",Bx="@firebase/performance-compat",Ux="@firebase/remote-config",$x="@firebase/remote-config-compat",qx="@firebase/storage",Wx="@firebase/storage-compat",Gx="@firebase/firestore",jx="@firebase/firestore-compat",Kx="firebase",Yx="10.3.1";/**
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
 */const c9="[DEFAULT]",Zx={[e9]:"fire-core",[_x]:"fire-core-compat",[wx]:"fire-analytics",[yx]:"fire-analytics-compat",[Sx]:"fire-app-check",[xx]:"fire-app-check-compat",[Nx]:"fire-auth",[Ax]:"fire-auth-compat",[kx]:"fire-rtdb",[Tx]:"fire-rtdb-compat",[Ex]:"fire-fn",[Ix]:"fire-fn-compat",[Px]:"fire-iid",[Rx]:"fire-iid-compat",[Ox]:"fire-fcm",[Dx]:"fire-fcm-compat",[Fx]:"fire-perf",[Bx]:"fire-perf-compat",[Ux]:"fire-rc",[$x]:"fire-rc-compat",[qx]:"fire-gcs",[Wx]:"fire-gcs-compat",[Gx]:"fire-fst",[jx]:"fire-fst-compat","fire-js":"fire-js",[Kx]:"fire-js-all"};/**
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
 */const t5=new Map,t9=new Map;function Xx(c,e){try{c.container.addComponent(e)}catch(t){A4.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,t)}}function U2(c){const e=c.name;if(t9.has(e))return A4.debug(`There were multiple attempts to register component ${e}.`),!1;t9.set(e,c);for(const t of t5.values())Xx(t,c);return!0}function n4(c,e){const t=c.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),c.container.getProvider(e)}/**
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
 */const Qx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},G3=new G4("app","Firebase",Qx);/**
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
 */class Jx{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new S2("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G3.create("app-deleted",{appName:this._name})}}/**
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
 */const j4=Yx;function Eo(c,e={}){let t=c;typeof e!="object"&&(e={name:e});const a=Object.assign({name:c9,automaticDataCollectionEnabled:!1},e),n=a.name;if(typeof n!="string"||!n)throw G3.create("bad-app-name",{appName:String(n)});if(t||(t=Lo()),!t)throw G3.create("no-options");const i=t5.get(n);if(i){if(y0(t,i.options)&&y0(a,i.config))return i;throw G3.create("duplicate-app",{appName:n})}const r=new sx(n);for(const o of t9.values())r.addComponent(o);const s=new Jx(t,a,r);return t5.set(n,s),s}function Q5(c=c9){const e=t5.get(c);if(!e&&c===c9&&Lo())return Eo();if(!e)throw G3.create("no-app",{appName:c});return e}function u2(c,e,t){var a;let n=(a=Zx[c])!==null&&a!==void 0?a:c;t&&(n+=`-${t}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const s=[`Unable to register library "${n}" with version "${e}":`];i&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&s.push("and"),r&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),A4.warn(s.join(" "));return}U2(new S2(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const eS="firebase-heartbeat-database",cS=1,w0="firebase-heartbeat-store";let ce=null;function Io(){return ce||(ce=Hx(eS,cS,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(w0)}}}).catch(c=>{throw G3.create("idb-open",{originalErrorMessage:c.message})})),ce}async function tS(c){try{return await(await Io()).transaction(w0).objectStore(w0).get(Po(c))}catch(e){if(e instanceof q2)A4.warn(e.message);else{const t=G3.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});A4.warn(t.message)}}}async function qn(c,e){try{const a=(await Io()).transaction(w0,"readwrite");await a.objectStore(w0).put(e,Po(c)),await a.done}catch(t){if(t instanceof q2)A4.warn(t.message);else{const a=G3.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});A4.warn(a.message)}}}function Po(c){return`${c.name}!${c.options.appId}`}/**
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
 */const aS=1024,nS=30*24*60*60*1e3;class iS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sS(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Wn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(n=>n.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const i=new Date(n.date).valueOf();return Date.now()-i<=nS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wn(),{heartbeatsToSend:t,unsentEntries:a}=rS(this._heartbeatsCache.heartbeats),n=J8(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Wn(){return new Date().toISOString().substring(0,10)}function rS(c,e=aS){const t=[];let a=c.slice();for(const n of c){const i=t.find(r=>r.agent===n.agent);if(i){if(i.dates.push(n.date),Gn(t)>e){i.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Gn(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class sS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return So()?No().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return qn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return qn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Gn(c){return J8(JSON.stringify({version:2,heartbeats:c})).length}/**
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
 */function oS(c){U2(new S2("platform-logger",e=>new Lx(e),"PRIVATE")),U2(new S2("heartbeat",e=>new iS(e),"PRIVATE")),u2(e9,$n,c),u2(e9,$n,"esm2017"),u2("fire-js","")}oS("");var lS="firebase",fS="10.3.1";/**
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
 */u2(lS,fS,"app");const uS=(c,e)=>e.some(t=>c instanceof t);let jn,Kn;function hS(){return jn||(jn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dS(){return Kn||(Kn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ro=new WeakMap,a9=new WeakMap,Oo=new WeakMap,te=new WeakMap,uc=new WeakMap;function mS(c){const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("success",i),c.removeEventListener("error",r)},i=()=>{t(j3(c.result)),n()},r=()=>{a(c.error),n()};c.addEventListener("success",i),c.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&Ro.set(t,c)}).catch(()=>{}),uc.set(e,c),e}function pS(c){if(a9.has(c))return;const e=new Promise((t,a)=>{const n=()=>{c.removeEventListener("complete",i),c.removeEventListener("error",r),c.removeEventListener("abort",r)},i=()=>{t(),n()},r=()=>{a(c.error||new DOMException("AbortError","AbortError")),n()};c.addEventListener("complete",i),c.addEventListener("error",r),c.addEventListener("abort",r)});a9.set(c,e)}let n9={get(c,e,t){if(c instanceof IDBTransaction){if(e==="done")return a9.get(c);if(e==="objectStoreNames")return c.objectStoreNames||Oo.get(c);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return j3(c[e])},set(c,e,t){return c[e]=t,!0},has(c,e){return c instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in c}};function vS(c){n9=c(n9)}function zS(c){return c===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=c.call(ae(this),e,...t);return Oo.set(a,e.sort?e.sort():[e]),j3(a)}:dS().includes(c)?function(...e){return c.apply(ae(this),e),j3(Ro.get(this))}:function(...e){return j3(c.apply(ae(this),e))}}function gS(c){return typeof c=="function"?zS(c):(c instanceof IDBTransaction&&pS(c),uS(c,hS())?new Proxy(c,n9):c)}function j3(c){if(c instanceof IDBRequest)return mS(c);if(te.has(c))return te.get(c);const e=gS(c);return e!==c&&(te.set(c,e),uc.set(e,c)),e}const ae=c=>uc.get(c);function CS(c,e,{blocked:t,upgrade:a,blocking:n,terminated:i}={}){const r=indexedDB.open(c,e),s=j3(r);return a&&r.addEventListener("upgradeneeded",o=>{a(j3(r.result),o.oldVersion,o.newVersion,j3(r.transaction))}),t&&r.addEventListener("blocked",()=>t()),s.then(o=>{i&&o.addEventListener("close",()=>i()),n&&o.addEventListener("versionchange",()=>n())}).catch(()=>{}),s}const HS=["get","getKey","getAll","getAllKeys","count"],MS=["put","add","delete","clear"],ne=new Map;function Yn(c,e){if(!(c instanceof IDBDatabase&&!(e in c)&&typeof e=="string"))return;if(ne.get(e))return ne.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,n=MS.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(n||HS.includes(t)))return;const i=async function(r,...s){const o=this.transaction(r,n?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(s.shift())),(await Promise.all([l[t](...s),n&&o.done]))[0]};return ne.set(e,i),i}vS(c=>({...c,get:(e,t,a)=>Yn(e,t)||c.get(e,t,a),has:(e,t)=>!!Yn(e,t)||c.has(e,t)}));const Do="@firebase/installations",hc="0.6.4";/**
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
 */const Fo=1e4,Bo=`w:${hc}`,Uo="FIS_v2",VS="https://firebaseinstallations.googleapis.com/v1",LS=60*60*1e3,bS="installations",_S="Installations";/**
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
 */const yS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},k4=new G4(bS,_S,yS);function $o(c){return c instanceof q2&&c.code.includes("request-failed")}/**
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
 */function qo({projectId:c}){return`${VS}/projects/${c}/installations`}function Wo(c){return{token:c.token,requestStatus:2,expiresIn:xS(c.expiresIn),creationTime:Date.now()}}async function Go(c,e){const a=(await e.json()).error;return k4.create("request-failed",{requestName:c,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function jo({apiKey:c}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c})}function wS(c,{refreshToken:e}){const t=jo(c);return t.append("Authorization",SS(e)),t}async function Ko(c){const e=await c();return e.status>=500&&e.status<600?c():e}function xS(c){return Number(c.replace("s","000"))}function SS(c){return`${Uo} ${c}`}/**
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
 */async function NS({appConfig:c,heartbeatServiceProvider:e},{fid:t}){const a=qo(c),n=jo(c),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&n.append("x-firebase-client",l)}const r={fid:t,authVersion:Uo,appId:c.appId,sdkVersion:Bo},s={method:"POST",headers:n,body:JSON.stringify(r)},o=await Ko(()=>fetch(a,s));if(o.ok){const l=await o.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:Wo(l.authToken)}}else throw await Go("Create Installation",o)}/**
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
 */function Yo(c){return new Promise(e=>{setTimeout(e,c)})}/**
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
 */function AS(c){return btoa(String.fromCharCode(...c)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kS=/^[cdef][\w-]{21}$/,i9="";function TS(){try{const c=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(c),c[0]=112+c[0]%16;const t=ES(c);return kS.test(t)?t:i9}catch{return i9}}function ES(c){return AS(c).substr(0,22)}/**
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
 */function J5(c){return`${c.appName}!${c.appId}`}/**
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
 */const Zo=new Map;function Xo(c,e){const t=J5(c);Qo(t,e),IS(t,e)}function Qo(c,e){const t=Zo.get(c);if(t)for(const a of t)a(e)}function IS(c,e){const t=PS();t&&t.postMessage({key:c,fid:e}),RS()}let g4=null;function PS(){return!g4&&"BroadcastChannel"in self&&(g4=new BroadcastChannel("[Firebase] FID Change"),g4.onmessage=c=>{Qo(c.data.key,c.data.fid)}),g4}function RS(){Zo.size===0&&g4&&(g4.close(),g4=null)}/**
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
 */const OS="firebase-installations-database",DS=1,T4="firebase-installations-store";let ie=null;function dc(){return ie||(ie=CS(OS,DS,{upgrade:(c,e)=>{switch(e){case 0:c.createObjectStore(T4)}}})),ie}async function a5(c,e){const t=J5(c),n=(await dc()).transaction(T4,"readwrite"),i=n.objectStore(T4),r=await i.get(t);return await i.put(e,t),await n.done,(!r||r.fid!==e.fid)&&Xo(c,e.fid),e}async function Jo(c){const e=J5(c),a=(await dc()).transaction(T4,"readwrite");await a.objectStore(T4).delete(e),await a.done}async function e7(c,e){const t=J5(c),n=(await dc()).transaction(T4,"readwrite"),i=n.objectStore(T4),r=await i.get(t),s=e(r);return s===void 0?await i.delete(t):await i.put(s,t),await n.done,s&&(!r||r.fid!==s.fid)&&Xo(c,s.fid),s}/**
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
 */async function mc(c){let e;const t=await e7(c.appConfig,a=>{const n=FS(a),i=BS(c,n);return e=i.registrationPromise,i.installationEntry});return t.fid===i9?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function FS(c){const e=c||{fid:TS(),registrationStatus:0};return el(e)}function BS(c,e){if(e.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(k4.create("app-offline"));return{installationEntry:e,registrationPromise:n}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=US(c,t);return{installationEntry:t,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$S(c)}:{installationEntry:e}}async function US(c,e){try{const t=await NS(c,e);return a5(c.appConfig,t)}catch(t){throw $o(t)&&t.customData.serverCode===409?await Jo(c.appConfig):await a5(c.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function $S(c){let e=await Zn(c.appConfig);for(;e.registrationStatus===1;)await Yo(100),e=await Zn(c.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:a}=await mc(c);return a||t}return e}function Zn(c){return e7(c,e=>{if(!e)throw k4.create("installation-not-found");return el(e)})}function el(c){return qS(c)?{fid:c.fid,registrationStatus:0}:c}function qS(c){return c.registrationStatus===1&&c.registrationTime+Fo<Date.now()}/**
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
 */async function WS({appConfig:c,heartbeatServiceProvider:e},t){const a=GS(c,t),n=wS(c,t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&n.append("x-firebase-client",l)}const r={installation:{sdkVersion:Bo,appId:c.appId}},s={method:"POST",headers:n,body:JSON.stringify(r)},o=await Ko(()=>fetch(a,s));if(o.ok){const l=await o.json();return Wo(l)}else throw await Go("Generate Auth Token",o)}function GS(c,{fid:e}){return`${qo(c)}/${e}/authTokens:generate`}/**
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
 */async function pc(c,e=!1){let t;const a=await e7(c.appConfig,i=>{if(!cl(i))throw k4.create("not-registered");const r=i.authToken;if(!e&&YS(r))return i;if(r.requestStatus===1)return t=jS(c,e),i;{if(!navigator.onLine)throw k4.create("app-offline");const s=XS(i);return t=KS(c,s),s}});return t?await t:a.authToken}async function jS(c,e){let t=await Xn(c.appConfig);for(;t.authToken.requestStatus===1;)await Yo(100),t=await Xn(c.appConfig);const a=t.authToken;return a.requestStatus===0?pc(c,e):a}function Xn(c){return e7(c,e=>{if(!cl(e))throw k4.create("not-registered");const t=e.authToken;return QS(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function KS(c,e){try{const t=await WS(c,e),a=Object.assign(Object.assign({},e),{authToken:t});return await a5(c.appConfig,a),t}catch(t){if($o(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Jo(c.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await a5(c.appConfig,a)}throw t}}function cl(c){return c!==void 0&&c.registrationStatus===2}function YS(c){return c.requestStatus===2&&!ZS(c)}function ZS(c){const e=Date.now();return e<c.creationTime||c.creationTime+c.expiresIn<e+LS}function XS(c){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},c),{authToken:e})}function QS(c){return c.requestStatus===1&&c.requestTime+Fo<Date.now()}/**
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
 */async function JS(c){const e=c,{installationEntry:t,registrationPromise:a}=await mc(e);return a?a.catch(console.error):pc(e).catch(console.error),t.fid}/**
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
 */async function eN(c,e=!1){const t=c;return await cN(t),(await pc(t,e)).token}async function cN(c){const{registrationPromise:e}=await mc(c);e&&await e}/**
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
 */function tN(c){if(!c||!c.options)throw re("App Configuration");if(!c.name)throw re("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!c.options[t])throw re(t);return{appName:c.name,projectId:c.options.projectId,apiKey:c.options.apiKey,appId:c.options.appId}}function re(c){return k4.create("missing-app-config-values",{valueName:c})}/**
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
 */const tl="installations",aN="installations-internal",nN=c=>{const e=c.getProvider("app").getImmediate(),t=tN(e),a=n4(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},iN=c=>{const e=c.getProvider("app").getImmediate(),t=n4(e,tl).getImmediate();return{getId:()=>JS(t),getToken:n=>eN(t,n)}};function rN(){U2(new S2(tl,nN,"PUBLIC")),U2(new S2(aN,iN,"PRIVATE"))}rN();u2(Do,hc);u2(Do,hc,"esm2017");/**
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
 */const n5="analytics",sN="firebase_id",oN="origin",lN=60*1e3,fN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vc="https://www.googletagmanager.com/gtag/js";/**
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
 */const h2=new X5("@firebase/analytics");/**
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
 */const uN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},M2=new G4("analytics","Analytics",uN);/**
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
 */function hN(c){if(!c.startsWith(vc)){const e=M2.create("invalid-gtag-resource",{gtagURL:c});return h2.warn(e.message),""}return c}function al(c){return Promise.all(c.map(e=>e.catch(t=>t)))}function dN(c,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(c,e)),t}function mN(c,e){const t=dN("firebase-js-sdk-policy",{createScriptURL:hN}),a=document.createElement("script"),n=`${vc}?l=${c}&id=${e}`;a.src=t?t==null?void 0:t.createScriptURL(n):n,a.async=!0,document.head.appendChild(a)}function pN(c){let e=[];return Array.isArray(window[c])?e=window[c]:window[c]=e,e}async function vN(c,e,t,a,n,i){const r=a[n];try{if(r)await e[r];else{const o=(await al(t)).find(l=>l.measurementId===n);o&&await e[o.appId]}}catch(s){h2.error(s)}c("config",n,i)}async function zN(c,e,t,a,n){try{let i=[];if(n&&n.send_to){let r=n.send_to;Array.isArray(r)||(r=[r]);const s=await al(t);for(const o of r){const l=s.find(u=>u.measurementId===o),f=l&&e[l.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),c("event",a,n||{})}catch(i){h2.error(i)}}function gN(c,e,t,a){async function n(i,...r){try{if(i==="event"){const[s,o]=r;await zN(c,e,t,s,o)}else if(i==="config"){const[s,o]=r;await vN(c,e,t,a,s,o)}else if(i==="consent"){const[s]=r;c("consent","update",s)}else if(i==="get"){const[s,o,l]=r;c("get",s,o,l)}else if(i==="set"){const[s]=r;c("set",s)}else c(i,...r)}catch(s){h2.error(s)}}return n}function CN(c,e,t,a,n){let i=function(...r){window[a].push(arguments)};return window[n]&&typeof window[n]=="function"&&(i=window[n]),window[n]=gN(i,c,e,t),{gtagCore:i,wrappedGtag:window[n]}}function HN(c){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(vc)&&t.src.includes(c))return t;return null}/**
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
 */const MN=30,VN=1e3;class LN{constructor(e={},t=VN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nl=new LN;function bN(c){return new Headers({Accept:"application/json","x-goog-api-key":c})}async function _N(c){var e;const{appId:t,apiKey:a}=c,n={method:"GET",headers:bN(a)},i=fN.replace("{app-id}",t),r=await fetch(i,n);if(r.status!==200&&r.status!==304){let s="";try{const o=await r.json();!((e=o.error)===null||e===void 0)&&e.message&&(s=o.error.message)}catch{}throw M2.create("config-fetch-failed",{httpStatus:r.status,responseMessage:s})}return r.json()}async function yN(c,e=nl,t){const{appId:a,apiKey:n,measurementId:i}=c.options;if(!a)throw M2.create("no-app-id");if(!n){if(i)return{measurementId:i,appId:a};throw M2.create("no-api-key")}const r=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new SN;return setTimeout(async()=>{s.abort()},t!==void 0?t:lN),il({appId:a,apiKey:n,measurementId:i},r,s,e)}async function il(c,{throttleEndTimeMillis:e,backoffCount:t},a,n=nl){var i;const{appId:r,measurementId:s}=c;try{await wN(a,e)}catch(o){if(s)return h2.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:r,measurementId:s};throw o}try{const o=await _N(c);return n.deleteThrottleMetadata(r),o}catch(o){const l=o;if(!xN(l)){if(n.deleteThrottleMetadata(r),s)return h2.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:s};throw o}const f=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Dn(t,n.intervalMillis,MN):Dn(t,n.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return n.setThrottleMetadata(r,u),h2.debug(`Calling attemptFetch again in ${f} millis`),il(c,u,a,n)}}function wN(c,e){return new Promise((t,a)=>{const n=Math.max(e-Date.now(),0),i=setTimeout(t,n);c.addEventListener(()=>{clearTimeout(i),a(M2.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xN(c){if(!(c instanceof q2)||!c.customData)return!1;const e=Number(c.customData.httpStatus);return e===429||e===500||e===503||e===504}class SN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function NN(c,e,t,a,n){if(n&&n.global){c("event",t,a);return}else{const i=await e,r=Object.assign(Object.assign({},a),{send_to:i});c("event",t,r)}}/**
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
 */async function AN(){if(So())try{await No()}catch(c){return h2.warn(M2.create("indexeddb-unavailable",{errorInfo:c==null?void 0:c.toString()}).message),!1}else return h2.warn(M2.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kN(c,e,t,a,n,i,r){var s;const o=yN(c);o.then(d=>{t[d.measurementId]=d.appId,c.options.measurementId&&d.measurementId!==c.options.measurementId&&h2.warn(`The measurement ID in the local Firebase config (${c.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>h2.error(d)),e.push(o);const l=AN().then(d=>{if(d)return a.getId()}),[f,u]=await Promise.all([o,l]);HN(i)||mN(i,f.measurementId),n("js",new Date);const h=(s=r==null?void 0:r.config)!==null&&s!==void 0?s:{};return h[oN]="firebase",h.update=!0,u!=null&&(h[sN]=u),n("config",f.measurementId,h),f.measurementId}/**
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
 */class TN{constructor(e){this.app=e}_delete(){return delete o0[this.app.options.appId],Promise.resolve()}}let o0={},Qn=[];const Jn={};let se="dataLayer",EN="gtag",ei,rl,ci=!1;function IN(){const c=[];if(yo()&&c.push("This is a browser extension environment."),$w()||c.push("Cookies are not available."),c.length>0){const e=c.map((a,n)=>`(${n+1}) ${a}`).join(" "),t=M2.create("invalid-analytics-context",{errorInfo:e});h2.warn(t.message)}}function PN(c,e,t){IN();const a=c.options.appId;if(!a)throw M2.create("no-app-id");if(!c.options.apiKey)if(c.options.measurementId)h2.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${c.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw M2.create("no-api-key");if(o0[a]!=null)throw M2.create("already-exists",{id:a});if(!ci){pN(se);const{wrappedGtag:i,gtagCore:r}=CN(o0,Qn,Jn,se,EN);rl=i,ei=r,ci=!0}return o0[a]=kN(c,Qn,Jn,e,ei,se,t),new TN(c)}function RN(c=Q5()){c=F1(c);const e=n4(c,n5);return e.isInitialized()?e.getImmediate():ON(c)}function ON(c,e={}){const t=n4(c,n5);if(t.isInitialized()){const n=t.getImmediate();if(y0(e,t.getOptions()))return n;throw M2.create("already-initialized")}return t.initialize({options:e})}function DN(c,e,t,a){c=F1(c),NN(rl,o0[c.app.options.appId],e,t,a).catch(n=>h2.error(n))}const ti="@firebase/analytics",ai="0.10.0";function FN(){U2(new S2(n5,(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return PN(a,n,t)},"PUBLIC")),U2(new S2("analytics-internal",c,"PRIVATE")),u2(ti,ai),u2(ti,ai,"esm2017");function c(e){try{const t=e.getProvider(n5).getImmediate();return{logEvent:(a,n,i)=>DN(t,a,n,i)}}catch(t){throw M2.create("interop-component-reg-failed",{reason:t})}}}FN();const ni="@firebase/database",ii="1.0.1";/**
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
 */let sl="";function BN(c){sl=c}/**
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
 */class UN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),j1(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:_0(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $N{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return C3(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ol=function(c){try{if(typeof window<"u"&&typeof window[c]<"u"){const e=window[c];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new UN(e)}}catch{}return new $N},C4=ol("localStorage"),r9=ol("sessionStorage");/**
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
 */const m6=new X5("@firebase/database"),qN=function(){let c=1;return function(){return c++}}(),ll=function(c){const e=Jw(c),t=new Yw;t.update(e);const a=t.digest();return sc.encodeByteArray(a)},G0=function(...c){let e="";for(let t=0;t<c.length;t++){const a=c[t];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?e+=G0.apply(null,a):typeof a=="object"?e+=j1(a):e+=a,e+=" "}return e};let y4=null,ri=!0;const WN=function(c,e){T(!e||c===!0||c===!1,"Can't turn on custom loggers persistently."),c===!0?(m6.logLevel=M1.VERBOSE,y4=m6.log.bind(m6),e&&r9.set("logging_enabled",!0)):typeof c=="function"?y4=c:(y4=null,r9.remove("logging_enabled"))},Q1=function(...c){if(ri===!0&&(ri=!1,y4===null&&r9.get("logging_enabled")===!0&&WN(!0)),y4){const e=G0.apply(null,c);y4(e)}},j0=function(c){return function(...e){Q1(c,...e)}},s9=function(...c){const e="FIREBASE INTERNAL ERROR: "+G0(...c);m6.error(e)},h3=function(...c){const e=`FIREBASE FATAL ERROR: ${G0(...c)}`;throw m6.error(e),new Error(e)},d2=function(...c){const e="FIREBASE WARNING: "+G0(...c);m6.warn(e)},GN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&d2("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fl=function(c){return typeof c=="number"&&(c!==c||c===Number.POSITIVE_INFINITY||c===Number.NEGATIVE_INFINITY)},jN=function(c){if(document.readyState==="complete")c();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,c())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},y6="[MIN_NAME]",E4="[MAX_NAME]",P6=function(c,e){if(c===e)return 0;if(c===y6||e===E4)return-1;if(e===y6||c===E4)return 1;{const t=si(c),a=si(e);return t!==null?a!==null?t-a===0?c.length-e.length:t-a:-1:a!==null?1:c<e?-1:1}},KN=function(c,e){return c===e?0:c<e?-1:1},W6=function(c,e){if(e&&c in e)return e[c];throw new Error("Missing required key ("+c+") in object: "+j1(e))},zc=function(c){if(typeof c!="object"||c===null)return j1(c);const e=[];for(const a in c)e.push(a);e.sort();let t="{";for(let a=0;a<e.length;a++)a!==0&&(t+=","),t+=j1(e[a]),t+=":",t+=zc(c[e[a]]);return t+="}",t},ul=function(c,e){const t=c.length;if(t<=e)return[c];const a=[];for(let n=0;n<t;n+=e)n+e>t?a.push(c.substring(n,t)):a.push(c.substring(n,n+e));return a};function p2(c,e){for(const t in c)c.hasOwnProperty(t)&&e(t,c[t])}const hl=function(c){T(!fl(c),"Invalid JSON number");const e=11,t=52,a=(1<<e-1)-1;let n,i,r,s,o;c===0?(i=0,r=0,n=1/c===-1/0?1:0):(n=c<0,c=Math.abs(c),c>=Math.pow(2,1-a)?(s=Math.min(Math.floor(Math.log(c)/Math.LN2),a),i=s+a,r=Math.round(c*Math.pow(2,t-s)-Math.pow(2,t))):(i=0,r=Math.round(c/Math.pow(2,1-a-t))));const l=[];for(o=t;o;o-=1)l.push(r%2?1:0),r=Math.floor(r/2);for(o=e;o;o-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(n?1:0),l.reverse();const f=l.join("");let u="";for(o=0;o<64;o+=8){let h=parseInt(f.substr(o,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},YN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function XN(c,e){let t="Unknown Error";c==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":c==="permission_denied"?t="Client doesn't have permission to access the desired data.":c==="unavailable"&&(t="The service is unavailable");const a=new Error(c+" at "+e._path.toString()+": "+t);return a.code=c.toUpperCase(),a}const QN=new RegExp("^-?(0*)\\d{1,10}$"),JN=-2147483648,eA=2147483647,si=function(c){if(QN.test(c)){const e=Number(c);if(e>=JN&&e<=eA)return e}return null},R6=function(c){try{c()}catch(e){setTimeout(()=>{const t=e.stack||"";throw d2("Exception was thrown by user callback.",t),e},Math.floor(0))}},cA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},l0=function(c,e){const t=setTimeout(c,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class tA{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(a=>this.appCheck=a)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,a):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(a=>a.addTokenListener(e))}notifyForInvalidToken(){d2(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class aA{constructor(e,t,a){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(n=>this.auth_=n)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Q1("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,a):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',d2(e)}}class p6{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}p6.OWNER="owner";/**
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
 */const gc="5",dl="v",ml="s",pl="r",vl="f",zl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gl="ls",Cl="p",o9="ac",Hl="websocket",Ml="long_polling";/**
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
 */class Vl{constructor(e,t,a,n,i=!1,r="",s=!1,o=!1){this.secure=t,this.namespace=a,this.webSocketOnly=n,this.nodeAdmin=i,this.persistenceKey=r,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=C4.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&C4.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function nA(c){return c.host!==c.internalHost||c.isCustomHost()||c.includeNamespaceInQueryParams}function Ll(c,e,t){T(typeof e=="string","typeof type must == string"),T(typeof t=="object","typeof params must == object");let a;if(e===Hl)a=(c.secure?"wss://":"ws://")+c.internalHost+"/.ws?";else if(e===Ml)a=(c.secure?"https://":"http://")+c.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nA(c)&&(t.ns=c.namespace);const n=[];return p2(t,(i,r)=>{n.push(i+"="+r)}),a+n.join("&")}/**
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
 */class iA{constructor(){this.counters_={}}incrementCounter(e,t=1){C3(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Iw(this.counters_)}}/**
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
 */const oe={},le={};function Cc(c){const e=c.toString();return oe[e]||(oe[e]=new iA),oe[e]}function rA(c,e){const t=c.toString();return le[t]||(le[t]=e()),le[t]}/**
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
 */class sA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let n=0;n<a.length;++n)a[n]&&R6(()=>{this.onMessage_(a[n])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const oi="start",oA="close",lA="pLPCommand",fA="pRTLPCB",bl="id",_l="pw",yl="ser",uA="cb",hA="seg",dA="ts",mA="d",pA="dframe",wl=1870,xl=30,vA=wl-xl,zA=25e3,gA=3e4;class r6{constructor(e,t,a,n,i,r,s){this.connId=e,this.repoInfo=t,this.applicationId=a,this.appCheckToken=n,this.authToken=i,this.transportSessionId=r,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=j0(e),this.stats_=Cc(t),this.urlFn=o=>(this.appCheckToken&&(o[o9]=this.appCheckToken),Ll(t,Ml,o))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gA)),jN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hc((...i)=>{const[r,s,o,l,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,r===oi)this.id=s,this.password=o;else if(r===oA)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+r)},(...i)=>{const[r,s]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(r,s)},()=>{this.onClosed_()},this.urlFn);const a={};a[oi]="t",a[yl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[uA]=this.scriptTagHolder.uniqueCallbackIdentifier),a[dl]=gc,this.transportSessionId&&(a[ml]=this.transportSessionId),this.lastSessionId&&(a[gl]=this.lastSessionId),this.applicationId&&(a[Cl]=this.applicationId),this.appCheckToken&&(a[o9]=this.appCheckToken),typeof location<"u"&&location.hostname&&zl.test(location.hostname)&&(a[pl]=vl);const n=this.urlFn(a);this.log_("Connecting via long-poll to "+n),this.scriptTagHolder.addTag(n,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){r6.forceAllow_=!0}static forceDisallow(){r6.forceDisallow_=!0}static isAvailable(){return r6.forceAllow_?!0:!r6.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YN()&&!ZN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=j1(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const a=Co(t),n=ul(a,vA);for(let i=0;i<n.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const a={};a[pA]="t",a[bl]=e,a[_l]=t,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=j1(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Hc{constructor(e,t,a,n){this.onDisconnect=a,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qN(),window[lA+this.uniqueCallbackIdentifier]=e,window[fA+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const r="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(s){Q1("frame writing exception"),s.stack&&Q1(s.stack),Q1(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Q1("No IE domain setting required")}catch{const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bl]=this.myID,e[_l]=this.myPW,e[yl]=this.currentSerial;let t=this.urlFn(e),a="",n=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xl+a.length<=wl;){const r=this.pendingSegs.shift();a=a+"&"+hA+n+"="+r.seg+"&"+dA+n+"="+r.ts+"&"+mA+n+"="+r.d,n++}return t=t+a,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,a){this.pendingSegs.push({seg:e,ts:t,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const a=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(a,Math.floor(zA)),i=()=>{clearTimeout(n),a()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const n=a.readyState;(!n||n==="loaded"||n==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),t())},a.onerror=()=>{Q1("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
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
 */const CA=16384,HA=45e3;let i5=null;typeof MozWebSocket<"u"?i5=MozWebSocket:typeof WebSocket<"u"&&(i5=WebSocket);class T2{constructor(e,t,a,n,i,r,s){this.connId=e,this.applicationId=a,this.appCheckToken=n,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=j0(this.connId),this.stats_=Cc(t),this.connURL=T2.connectionURL_(t,r,s,n,a),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,a,n,i){const r={};return r[dl]=gc,typeof location<"u"&&location.hostname&&zl.test(location.hostname)&&(r[pl]=vl),t&&(r[ml]=t),a&&(r[gl]=a),n&&(r[o9]=n),i&&(r[Cl]=i),Ll(e,Hl,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,C4.set("previous_websocket_failure",!0);try{let a;xo(),this.mySock=new i5(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const n=a.message||a.data;n&&this.log_(n),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const n=a.message||a.data;n&&this.log_(n),this.onClosed_()}}start(){}static forceDisallow(){T2.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(t);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&i5!==null&&!T2.forceDisallow_}static previouslyFailed(){return C4.isInMemoryStorage||C4.get("previous_websocket_failure")===!0}markConnectionHealthy(){C4.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const a=_0(t);this.onMessage(a)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const a=this.extractFrameCount_(t);a!==null&&this.appendFrame_(a)}}send(e){this.resetKeepAlive();const t=j1(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const a=ul(t,CA);a.length>1&&this.sendString_(String(a.length));for(let n=0;n<a.length;n++)this.sendString_(a[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}T2.responsesRequiredToBeHealthy=2;T2.healthyTimeout=3e4;/**
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
 */class x0{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[r6,T2]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=T2&&T2.isAvailable();let a=t&&!T2.previouslyFailed();if(e.webSocketOnly&&(t||d2("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[T2];else{const n=this.transports_=[];for(const i of x0.ALL_TRANSPORTS)i&&i.isAvailable()&&n.push(i);x0.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}x0.globalTransportInitialized_=!1;/**
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
 */const MA=6e4,VA=5e3,LA=10*1024,bA=100*1024,fe="t",li="d",_A="s",fi="r",yA="e",ui="o",hi="a",di="n",mi="p",wA="h";class xA{constructor(e,t,a,n,i,r,s,o,l,f){this.id=e,this.repoInfo_=t,this.applicationId_=a,this.appCheckToken_=n,this.authToken_=i,this.onMessage_=r,this.onReady_=s,this.onDisconnect_=o,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=j0("c:"+this.id+":"),this.transportManager_=new x0(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,a)},Math.floor(0));const n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=l0(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fe in e){const t=e[fe];t===hi?this.upgradeIfSecondaryHealthy_():t===fi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ui&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=W6("t",e),a=W6("d",e);if(t==="c")this.onSecondaryControl_(a);else if(t==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:di,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=W6("t",e),a=W6("d",e);t==="c"?this.onControl_(a):t==="d"&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=W6(fe,e);if(li in e){const a=e[li];if(t===wA){const n=Object.assign({},a);this.repoInfo_.isUsingEmulator&&(n.h=this.repoInfo_.host),this.onHandshake_(n)}else if(t===di){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let n=0;n<this.pendingDataMessages.length;++n)this.onDataMessage_(this.pendingDataMessages[n]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_A?this.onConnectionShutdown_(a):t===fi?this.onReset_(a):t===yA?s9("Server Error: "+a):t===ui?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):s9("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,a=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gc!==a&&d2("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,a),l0(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(MA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):l0(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(C4.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Sl{put(e,t,a,n){}merge(e,t,a,n){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,a){}onDisconnectMerge(e,t,a){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Nl{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let n=0;n<a.length;n++)a[n].callback.apply(a[n].context,t)}}on(e,t,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:a});const n=this.getInitialEvent(e);n&&t.apply(a,n)}off(e,t,a){this.validateEventType_(e);const n=this.listeners_[e]||[];for(let i=0;i<n.length;i++)if(n[i].callback===t&&(!a||a===n[i].context)){n.splice(i,1);return}}validateEventType_(e){T(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class r5 extends Nl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!oc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new r5}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const pi=32,vi=768;class V1{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let a=0;for(let n=0;n<this.pieces_.length;n++)this.pieces_[n].length>0&&(this.pieces_[a]=this.pieces_[n],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function m1(){return new V1("")}function a1(c){return c.pieceNum_>=c.pieces_.length?null:c.pieces_[c.pieceNum_]}function X3(c){return c.pieces_.length-c.pieceNum_}function b1(c){let e=c.pieceNum_;return e<c.pieces_.length&&e++,new V1(c.pieces_,e)}function Al(c){return c.pieceNum_<c.pieces_.length?c.pieces_[c.pieces_.length-1]:null}function SA(c){let e="";for(let t=c.pieceNum_;t<c.pieces_.length;t++)c.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(c.pieces_[t])));return e||"/"}function kl(c,e=0){return c.pieces_.slice(c.pieceNum_+e)}function Tl(c){if(c.pieceNum_>=c.pieces_.length)return null;const e=[];for(let t=c.pieceNum_;t<c.pieces_.length-1;t++)e.push(c.pieces_[t]);return new V1(e,0)}function $1(c,e){const t=[];for(let a=c.pieceNum_;a<c.pieces_.length;a++)t.push(c.pieces_[a]);if(e instanceof V1)for(let a=e.pieceNum_;a<e.pieces_.length;a++)t.push(e.pieces_[a]);else{const a=e.split("/");for(let n=0;n<a.length;n++)a[n].length>0&&t.push(a[n])}return new V1(t,0)}function s1(c){return c.pieceNum_>=c.pieces_.length}function o2(c,e){const t=a1(c),a=a1(e);if(t===null)return e;if(t===a)return o2(b1(c),b1(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+c+")")}function Mc(c,e){if(X3(c)!==X3(e))return!1;for(let t=c.pieceNum_,a=e.pieceNum_;t<=c.pieces_.length;t++,a++)if(c.pieces_[t]!==e.pieces_[a])return!1;return!0}function I2(c,e){let t=c.pieceNum_,a=e.pieceNum_;if(X3(c)>X3(e))return!1;for(;t<c.pieces_.length;){if(c.pieces_[t]!==e.pieces_[a])return!1;++t,++a}return!0}class NA{constructor(e,t){this.errorPrefix_=t,this.parts_=kl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Z5(this.parts_[a]);El(this)}}function AA(c,e){c.parts_.length>0&&(c.byteLength_+=1),c.parts_.push(e),c.byteLength_+=Z5(e),El(c)}function kA(c){const e=c.parts_.pop();c.byteLength_-=Z5(e),c.parts_.length>0&&(c.byteLength_-=1)}function El(c){if(c.byteLength_>vi)throw new Error(c.errorPrefix_+"has a key path longer than "+vi+" bytes ("+c.byteLength_+").");if(c.parts_.length>pi)throw new Error(c.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pi+") or object contains a cycle "+d4(c))}function d4(c){return c.parts_.length===0?"":"in property '"+c.parts_.join(".")+"'"}/**
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
 */class Vc extends Nl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const a=!document[e];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}static getInstance(){return new Vc}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const G6=1e3,TA=60*5*1e3,zi=30*1e3,EA=1.3,IA=3e4,PA="server_kill",gi=3;class l3 extends Sl{constructor(e,t,a,n,i,r,s,o){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=a,this.onConnectStatus_=n,this.onServerInfoUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.authOverride_=o,this.id=l3.nextPersistentConnectionId_++,this.log_=j0("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=G6,this.maxReconnectDelay_=TA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!xo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&r5.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,a){const n=++this.requestNumber_,i={r:n,a:e,b:t};this.log_(j1(i)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),a&&(this.requestCBHash_[n]=a)}get(e){this.initConnection_();const t=new Y5,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:r=>{const s=r.d;r.s==="ok"?t.resolve(s):t.reject(s)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,a,n){this.initConnection_();const i=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+i),this.listens.has(r)||this.listens.set(r,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(r).has(i),"listen() called twice for same path/queryId.");const s={onComplete:n,hashFn:t,query:e,tag:a};this.listens.get(r).set(i,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(a)})}sendListen_(e){const t=e.query,a=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+a+" for "+n);const i={p:a},r="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(r,i,s=>{const o=s.d,l=s.s;l3.warnOnListenWarnings_(o,t),(this.listens.get(a)&&this.listens.get(a).get(n))===e&&(this.log_("listen response",s),l!=="ok"&&this.removeListen_(a,n),e.onComplete&&e.onComplete(l,o))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&C3(e,"w")){const a=_6(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const n='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();d2(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${n} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=jw(e)?"auth":"gauth",a={cred:e};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(t,a,n=>{const i=n.s,r=n.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,a=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,a)})}unlisten(e,t){const a=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+n),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,n)&&this.connected_&&this.sendUnlisten_(a,n,e._queryObject,t)}sendUnlisten_(e,t,a,n){this.log_("Unlisten on "+e+" for "+t);const i={p:e},r="n";n&&(i.q=a,i.t=n),this.sendRequest(r,i)}onDisconnectPut(e,t,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:a})}onDisconnectMerge(e,t,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:a})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,a,n){const i={p:t,d:a};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,r=>{n&&setTimeout(()=>{n(r.s,r.d)},Math.floor(0))})}put(e,t,a,n){this.putInternal("p",e,t,a,n)}merge(e,t,a,n){this.putInternal("m",e,t,a,n)}putInternal(e,t,a,n,i){this.initConnection_();const r={p:t,d:a};i!==void 0&&(r.h=i),this.outstandingPuts_.push({action:e,request:r,onComplete:n}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,a,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),n&&n(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,a=>{if(a.s!=="ok"){const i=a.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+j1(e));const t=e.r,a=this.requestCBHash_[t];a&&(delete this.requestCBHash_[t],a(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):s9("Unrecognized action received from server: "+j1(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=G6,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=G6,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IA&&(this.reconnectDelay_=G6),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+l3.nextConnectionId_++,i=this.lastSessionId;let r=!1,s=null;const o=function(){s?s.close():(r=!0,a())},l=function(u){T(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(u)};this.realtime_={close:o,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);r?Q1("getToken() completed but was canceled"):(Q1("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,s=new xA(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,a,d=>{d2(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(PA)},i))}catch(u){this.log_("Failed to get token: "+u),r||(this.repoInfo_.nodeAdmin&&d2(u),o())}}}interrupt(e){Q1("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Q1("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xe(this.interruptReasons_)&&(this.reconnectDelay_=G6,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let a;t?a=t.map(i=>zc(i)).join("$"):a="default";const n=this.removeListen_(e,a);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){const a=new V1(e).toString();let n;if(this.listens.has(a)){const i=this.listens.get(a);n=i.get(t),i.delete(t),i.size===0&&this.listens.delete(a)}else n=void 0;return n}onAuthRevoked_(e,t){Q1("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gi&&(this.reconnectDelay_=zi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Q1("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sl.replace(/\./g,"-")]=1,oc()?e["framework.cordova"]=1:wo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=r5.getInstance().currentlyOnline();return Xe(this.interruptReasons_)&&e}}l3.nextPersistentConnectionId_=0;l3.nextConnectionId_=0;/**
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
 */class n1{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new n1(e,t)}}/**
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
 */class c7{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const a=new n1(y6,e),n=new n1(y6,t);return this.compare(a,n)!==0}minPost(){return n1.MIN}}/**
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
 */let g8;class Il extends c7{static get __EMPTY_NODE(){return g8}static set __EMPTY_NODE(e){g8=e}compare(e,t){return P6(e.name,t.name)}isDefinedOn(e){throw E6("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return n1.MIN}maxPost(){return new n1(E4,g8)}makePost(e,t){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new n1(e,g8)}toString(){return".key"}}const v6=new Il;/**
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
 */class C8{constructor(e,t,a,n,i=null){this.isReverse_=n,this.resultGenerator_=i,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(e=e,r=t?a(e.key,t):1,n&&(r*=-1),r<0)this.isReverse_?e=e.left:e=e.right;else if(r===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G1{constructor(e,t,a,n,i){this.key=e,this.value=t,this.color=a??G1.RED,this.left=n??l2.EMPTY_NODE,this.right=i??l2.EMPTY_NODE}copy(e,t,a,n,i){return new G1(e??this.key,t??this.value,a??this.color,n??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let n=this;const i=a(e,n.key);return i<0?n=n.copy(null,null,null,n.left.insert(e,t,a),null):i===0?n=n.copy(null,t,null,null,null):n=n.copy(null,null,null,null,n.right.insert(e,t,a)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return l2.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let a,n;if(a=this,t(e,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),t(e,a.key)===0){if(a.right.isEmpty())return l2.EMPTY_NODE;n=a.right.min_(),a=a.copy(n.key,n.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G1.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G1.RED=!0;G1.BLACK=!1;class RA{copy(e,t,a,n,i){return this}insert(e,t,a){return new G1(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class l2{constructor(e,t=l2.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new l2(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G1.BLACK,null,null))}remove(e){return new l2(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G1.BLACK,null,null))}get(e){let t,a=this.root_;for(;!a.isEmpty();){if(t=this.comparator_(e,a.key),t===0)return a.value;t<0?a=a.left:t>0&&(a=a.right)}return null}getPredecessorKey(e){let t,a=this.root_,n=null;for(;!a.isEmpty();)if(t=this.comparator_(e,a.key),t===0){if(a.left.isEmpty())return n?n.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else t<0?a=a.left:t>0&&(n=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new C8(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new C8(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new C8(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new C8(this.root_,null,this.comparator_,!0,e)}}l2.EMPTY_NODE=new RA;/**
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
 */function OA(c,e){return P6(c.name,e.name)}function Lc(c,e){return P6(c,e)}/**
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
 */let l9;function DA(c){l9=c}const Pl=function(c){return typeof c=="number"?"number:"+hl(c):"string:"+c},Rl=function(c){if(c.isLeafNode()){const e=c.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&C3(e,".sv"),"Priority must be a string or number.")}else T(c===l9||c.isEmpty(),"priority of unexpected type.");T(c===l9||c.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ci;class W1{constructor(e,t=W1.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rl(this.priorityNode_)}static set __childrenNodeConstructor(e){Ci=e}static get __childrenNodeConstructor(){return Ci}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new W1(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:W1.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return s1(e)?this:a1(e)===".priority"?this.priorityNode_:W1.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:W1.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const a=a1(e);return a===null?t:t.isEmpty()&&a!==".priority"?this:(T(a!==".priority"||X3(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,W1.__childrenNodeConstructor.EMPTY_NODE.updateChild(b1(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=hl(this.value_):e+=this.value_,this.lazyHash_=ll(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===W1.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof W1.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,a=typeof this.value_,n=W1.VALUE_TYPE_ORDER.indexOf(t),i=W1.VALUE_TYPE_ORDER.indexOf(a);return T(n>=0,"Unknown leaf type: "+t),T(i>=0,"Unknown leaf type: "+a),n===i?a==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-n}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}W1.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ol,Dl;function FA(c){Ol=c}function BA(c){Dl=c}class UA extends c7{compare(e,t){const a=e.node.getPriority(),n=t.node.getPriority(),i=a.compareTo(n);return i===0?P6(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return n1.MIN}maxPost(){return new n1(E4,new W1("[PRIORITY-POST]",Dl))}makePost(e,t){const a=Ol(e);return new n1(t,new W1("[PRIORITY-POST]",a))}toString(){return".priority"}}const T1=new UA;/**
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
 */const $A=Math.log(2);class qA{constructor(e){const t=i=>parseInt(Math.log(i)/$A,10),a=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const n=a(this.count);this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const s5=function(c,e,t,a){c.sort(e);const n=function(o,l){const f=l-o;let u,h;if(f===0)return null;if(f===1)return u=c[o],h=t?t(u):u,new G1(h,u.node,G1.BLACK,null,null);{const d=parseInt(f/2,10)+o,p=n(o,d),m=n(d+1,l);return u=c[d],h=t?t(u):u,new G1(h,u.node,G1.BLACK,p,m)}},i=function(o){let l=null,f=null,u=c.length;const h=function(p,m){const H=u-p,z=u;u-=p;const C=n(H+1,z),M=c[H],V=t?t(M):M;d(new G1(V,M.node,m,null,C))},d=function(p){l?(l.left=p,l=p):(f=p,l=p)};for(let p=0;p<o.count;++p){const m=o.nextBitIsOne(),H=Math.pow(2,o.count-(p+1));m?h(H,G1.BLACK):(h(H,G1.BLACK),h(H,G1.RED))}return f},r=new qA(c.length),s=i(r);return new l2(a||e,s)};/**
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
 */let ue;const t6={};class r3{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return T(t6&&T1,"ChildrenNode.ts has not been loaded"),ue=ue||new r3({".priority":t6},{".priority":T1}),ue}get(e){const t=_6(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof l2?t:null}hasIndex(e){return C3(this.indexSet_,e.toString())}addIndex(e,t){T(e!==v6,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let n=!1;const i=t.getIterator(n1.Wrap);let r=i.getNext();for(;r;)n=n||e.isDefinedOn(r.node),a.push(r),r=i.getNext();let s;n?s=s5(a,e.getCompare()):s=t6;const o=e.toString(),l=Object.assign({},this.indexSet_);l[o]=e;const f=Object.assign({},this.indexes_);return f[o]=s,new r3(f,l)}addToIndexes(e,t){const a=c5(this.indexes_,(n,i)=>{const r=_6(this.indexSet_,i);if(T(r,"Missing index implementation for "+i),n===t6)if(r.isDefinedOn(e.node)){const s=[],o=t.getIterator(n1.Wrap);let l=o.getNext();for(;l;)l.name!==e.name&&s.push(l),l=o.getNext();return s.push(e),s5(s,r.getCompare())}else return t6;else{const s=t.get(e.name);let o=n;return s&&(o=o.remove(new n1(e.name,s))),o.insert(e,e.node)}});return new r3(a,this.indexSet_)}removeFromIndexes(e,t){const a=c5(this.indexes_,n=>{if(n===t6)return n;{const i=t.get(e.name);return i?n.remove(new n1(e.name,i)):n}});return new r3(a,this.indexSet_)}}/**
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
 */let j6;class Q{constructor(e,t,a){this.children_=e,this.priorityNode_=t,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&Rl(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return j6||(j6=new Q(new l2(Lc),null,r3.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||j6}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?j6:t}}getChild(e){const t=a1(e);return t===null?this:this.getImmediateChild(t).getChild(b1(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(T(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const a=new n1(e,t);let n,i;t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(a,this.children_));const r=n.isEmpty()?j6:this.priorityNode_;return new Q(n,r,i)}}updateChild(e,t){const a=a1(e);if(a===null)return t;{T(a1(e)!==".priority"||X3(e)===1,".priority must be the last token in a path");const n=this.getImmediateChild(a).updateChild(b1(e),t);return this.updateImmediateChild(a,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let a=0,n=0,i=!0;if(this.forEachChild(T1,(r,s)=>{t[r]=s.val(e),a++,i&&Q.INTEGER_REGEXP_.test(r)?n=Math.max(n,Number(r)):i=!1}),!e&&i&&n<2*a){const r=[];for(const s in t)r[s]=t[s];return r}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pl(this.getPriority().val())+":"),this.forEachChild(T1,(t,a)=>{const n=a.hash();n!==""&&(e+=":"+t+":"+n)}),this.lazyHash_=e===""?"":ll(e)}return this.lazyHash_}getPredecessorChildName(e,t,a){const n=this.resolveIndex_(a);if(n){const i=n.getPredecessorKey(new n1(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const a=t.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new n1(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const a=t.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new n1(t,this.children_.get(t)):null}forEachChild(e,t){const a=this.resolveIndex_(e);return a?a.inorderTraversal(n=>t(n.name,n.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const a=this.resolveIndex_(t);if(a)return a.getIteratorFrom(e,n=>n);{const n=this.children_.getIteratorFrom(e.name,n1.Wrap);let i=n.peek();for(;i!=null&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const a=this.resolveIndex_(t);if(a)return a.getReverseIteratorFrom(e,n=>n);{const n=this.children_.getReverseIteratorFrom(e.name,n1.Wrap);let i=n.peek();for(;i!=null&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===K0?-1:0}withIndex(e){if(e===v6||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===v6||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const a=this.getIterator(T1),n=t.getIterator(T1);let i=a.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=a.getNext(),r=n.getNext()}return i===null&&r===null}else return!1;else return!1}}resolveIndex_(e){return e===v6?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WA extends Q{constructor(){super(new l2(Lc),Q.EMPTY_NODE,r3.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const K0=new WA;Object.defineProperties(n1,{MIN:{value:new n1(y6,Q.EMPTY_NODE)},MAX:{value:new n1(E4,K0)}});Il.__EMPTY_NODE=Q.EMPTY_NODE;W1.__childrenNodeConstructor=Q;DA(K0);BA(K0);/**
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
 */const GA=!0;function K1(c,e=null){if(c===null)return Q.EMPTY_NODE;if(typeof c=="object"&&".priority"in c&&(e=c[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof c=="object"&&".value"in c&&c[".value"]!==null&&(c=c[".value"]),typeof c!="object"||".sv"in c){const t=c;return new W1(t,K1(e))}if(!(c instanceof Array)&&GA){const t=[];let a=!1;if(p2(c,(r,s)=>{if(r.substring(0,1)!=="."){const o=K1(s);o.isEmpty()||(a=a||!o.getPriority().isEmpty(),t.push(new n1(r,o)))}}),t.length===0)return Q.EMPTY_NODE;const i=s5(t,OA,r=>r.name,Lc);if(a){const r=s5(t,T1.getCompare());return new Q(i,K1(e),new r3({".priority":r},{".priority":T1}))}else return new Q(i,K1(e),r3.Default)}else{let t=Q.EMPTY_NODE;return p2(c,(a,n)=>{if(C3(c,a)&&a.substring(0,1)!=="."){const i=K1(n);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(a,i))}}),t.updatePriority(K1(e))}}FA(K1);/**
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
 */class jA extends c7{constructor(e){super(),this.indexPath_=e,T(!s1(e)&&a1(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const a=this.extractChild(e.node),n=this.extractChild(t.node),i=a.compareTo(n);return i===0?P6(e.name,t.name):i}makePost(e,t){const a=K1(e),n=Q.EMPTY_NODE.updateChild(this.indexPath_,a);return new n1(t,n)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,K0);return new n1(E4,e)}toString(){return kl(this.indexPath_,0).join("/")}}/**
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
 */class KA extends c7{compare(e,t){const a=e.node.compareTo(t.node);return a===0?P6(e.name,t.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return n1.MIN}maxPost(){return n1.MAX}makePost(e,t){const a=K1(e);return new n1(t,a)}toString(){return".value"}}const YA=new KA;/**
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
 */function Fl(c){return{type:"value",snapshotNode:c}}function w6(c,e){return{type:"child_added",snapshotNode:e,childName:c}}function S0(c,e){return{type:"child_removed",snapshotNode:e,childName:c}}function N0(c,e,t){return{type:"child_changed",snapshotNode:e,childName:c,oldSnap:t}}function ZA(c,e){return{type:"child_moved",snapshotNode:e,childName:c}}/**
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
 */class bc{constructor(e){this.index_=e}updateChild(e,t,a,n,i,r){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(t);return s.getChild(n).equals(a.getChild(n))&&s.isEmpty()===a.isEmpty()||(r!=null&&(a.isEmpty()?e.hasChild(t)?r.trackChildChange(S0(t,s)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?r.trackChildChange(w6(t,a)):r.trackChildChange(N0(t,a,s))),e.isLeafNode()&&a.isEmpty())?e:e.updateImmediateChild(t,a).withIndex(this.index_)}updateFullNode(e,t,a){return a!=null&&(e.isLeafNode()||e.forEachChild(T1,(n,i)=>{t.hasChild(n)||a.trackChildChange(S0(n,i))}),t.isLeafNode()||t.forEachChild(T1,(n,i)=>{if(e.hasChild(n)){const r=e.getImmediateChild(n);r.equals(i)||a.trackChildChange(N0(n,i,r))}else a.trackChildChange(w6(n,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class A0{constructor(e){this.indexedFilter_=new bc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=A0.getStartPost_(e),this.endPost_=A0.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,a=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&a}updateChild(e,t,a,n,i,r){return this.matches(new n1(t,a))||(a=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,a,n,i,r)}updateFullNode(e,t,a){t.isLeafNode()&&(t=Q.EMPTY_NODE);let n=t.withIndex(this.index_);n=n.updatePriority(Q.EMPTY_NODE);const i=this;return t.forEachChild(T1,(r,s)=>{i.matches(new n1(r,s))||(n=n.updateImmediateChild(r,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,n,a)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class XA{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=t=>{const a=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new A0(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,a,n,i,r){return this.rangedFilter_.matches(new n1(t,a))||(a=Q.EMPTY_NODE),e.getImmediateChild(t).equals(a)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,a,n,i,r):this.fullLimitUpdateChild_(e,t,a,i,r)}updateFullNode(e,t,a){let n;if(t.isLeafNode()||t.isEmpty())n=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){n=Q.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let r=0;for(;i.hasNext()&&r<this.limit_;){const s=i.getNext();if(this.withinDirectionalStart(s))if(this.withinDirectionalEnd(s))n=n.updateImmediateChild(s.name,s.node),r++;else break;else continue}}else{n=t.withIndex(this.index_),n=n.updatePriority(Q.EMPTY_NODE);let i;this.reverse_?i=n.getReverseIterator(this.index_):i=n.getIterator(this.index_);let r=0;for(;i.hasNext();){const s=i.getNext();r<this.limit_&&this.withinDirectionalStart(s)&&this.withinDirectionalEnd(s)?r++:n=n.updateImmediateChild(s.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,n,a)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,a,n,i){let r;if(this.reverse_){const u=this.index_.getCompare();r=(h,d)=>u(d,h)}else r=this.index_.getCompare();const s=e;T(s.numChildren()===this.limit_,"");const o=new n1(t,a),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),f=this.rangedFilter_.matches(o);if(s.hasChild(t)){const u=s.getImmediateChild(t);let h=n.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||s.hasChild(h.name));)h=n.getChildAfterChild(this.index_,h,this.reverse_);const d=h==null?1:r(h,o);if(f&&!a.isEmpty()&&d>=0)return i!=null&&i.trackChildChange(N0(t,a,u)),s.updateImmediateChild(t,a);{i!=null&&i.trackChildChange(S0(t,u));const m=s.updateImmediateChild(t,Q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i!=null&&i.trackChildChange(w6(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return a.isEmpty()?e:f&&r(l,o)>=0?(i!=null&&(i.trackChildChange(S0(l.name,l.node)),i.trackChildChange(w6(t,a))),s.updateImmediateChild(t,a).updateImmediateChild(l.name,Q.EMPTY_NODE)):e}}/**
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
 */class _c{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=T1}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:y6}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:E4}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===T1}copy(){const e=new _c;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function QA(c){return c.loadsAllData()?new bc(c.getIndex()):c.hasLimit()?new XA(c):new A0(c)}function Hi(c){const e={};if(c.isDefault())return e;let t;if(c.index_===T1?t="$priority":c.index_===YA?t="$value":c.index_===v6?t="$key":(T(c.index_ instanceof jA,"Unrecognized index type!"),t=c.index_.toString()),e.orderBy=j1(t),c.startSet_){const a=c.startAfterSet_?"startAfter":"startAt";e[a]=j1(c.indexStartValue_),c.startNameSet_&&(e[a]+=","+j1(c.indexStartName_))}if(c.endSet_){const a=c.endBeforeSet_?"endBefore":"endAt";e[a]=j1(c.indexEndValue_),c.endNameSet_&&(e[a]+=","+j1(c.indexEndName_))}return c.limitSet_&&(c.isViewFromLeft()?e.limitToFirst=c.limit_:e.limitToLast=c.limit_),e}function Mi(c){const e={};if(c.startSet_&&(e.sp=c.indexStartValue_,c.startNameSet_&&(e.sn=c.indexStartName_),e.sin=!c.startAfterSet_),c.endSet_&&(e.ep=c.indexEndValue_,c.endNameSet_&&(e.en=c.indexEndName_),e.ein=!c.endBeforeSet_),c.limitSet_){e.l=c.limit_;let t=c.viewFrom_;t===""&&(c.isViewFromLeft()?t="l":t="r"),e.vf=t}return c.index_!==T1&&(e.i=c.index_.toString()),e}/**
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
 */class o5 extends Sl{constructor(e,t,a,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=a,this.appCheckTokenProvider_=n,this.log_=j0("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,a,n){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const r=o5.getListenId_(e,a),s={};this.listens_[r]=s;const o=Hi(e._queryParams);this.restRequest_(i+".json",o,(l,f)=>{let u=f;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(i,u,!1,a),_6(this.listens_,r)===s){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",n(h,null)}})}unlisten(e,t){const a=o5.getListenId_(e,t);delete this.listens_[a]}get(e){const t=Hi(e._queryParams),a=e._path.toString(),n=new Y5;return this.restRequest_(a+".json",t,(i,r)=>{let s=r;i===404&&(s=null,i=null),i===null?(this.onDataUpdate_(a,s,!1,null),n.resolve(s)):n.reject(new Error(s))}),n.promise}refreshAuthToken(e){}restRequest_(e,t={},a){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,i])=>{n&&n.accessToken&&(t.auth=n.accessToken),i&&i.token&&(t.ac=i.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+I6(t);this.log_("Sending REST request for "+r);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(a&&s.readyState===4){this.log_("REST Response for "+r+" received. status:",s.status,"response:",s.responseText);let o=null;if(s.status>=200&&s.status<300){try{o=_0(s.responseText)}catch{d2("Failed to parse JSON response for "+r+": "+s.responseText)}a(null,o)}else s.status!==401&&s.status!==404&&d2("Got unsuccessful REST response for "+r+" Status: "+s.status),a(s.status);a=null}},s.open("GET",r,!0),s.send()})}}/**
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
 */class JA{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function l5(){return{value:null,children:new Map}}function Bl(c,e,t){if(s1(e))c.value=t,c.children.clear();else if(c.value!==null)c.value=c.value.updateChild(e,t);else{const a=a1(e);c.children.has(a)||c.children.set(a,l5());const n=c.children.get(a);e=b1(e),Bl(n,e,t)}}function f9(c,e,t){c.value!==null?t(e,c.value):ek(c,(a,n)=>{const i=new V1(e.toString()+"/"+a);f9(n,i,t)})}function ek(c,e){c.children.forEach((t,a)=>{e(a,t)})}/**
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
 */class ck{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&p2(this.last_,(a,n)=>{t[a]=t[a]-n}),this.last_=e,t}}/**
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
 */const Vi=10*1e3,tk=30*1e3,ak=5*60*1e3;class nk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ck(e);const a=Vi+(tk-Vi)*Math.random();l0(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),t={};let a=!1;p2(e,(n,i)=>{i>0&&C3(this.statsToReport_,n)&&(t[n]=i,a=!0)}),a&&this.server_.reportStats(t),l0(this.reportStats_.bind(this),Math.floor(Math.random()*2*ak))}}/**
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
 */var P2;(function(c){c[c.OVERWRITE=0]="OVERWRITE",c[c.MERGE=1]="MERGE",c[c.ACK_USER_WRITE=2]="ACK_USER_WRITE",c[c.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(P2||(P2={}));function Ul(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wc(c){return{fromUser:!1,fromServer:!0,queryId:c,tagged:!0}}/**
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
 */class f5{constructor(e,t,a){this.path=e,this.affectedTree=t,this.revert=a,this.type=P2.ACK_USER_WRITE,this.source=Ul()}operationForChild(e){if(s1(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new V1(e));return new f5(m1(),t,this.revert)}}else return T(a1(this.path)===e,"operationForChild called for unrelated child."),new f5(b1(this.path),this.affectedTree,this.revert)}}/**
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
 */class k0{constructor(e,t){this.source=e,this.path=t,this.type=P2.LISTEN_COMPLETE}operationForChild(e){return s1(this.path)?new k0(this.source,m1()):new k0(this.source,b1(this.path))}}/**
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
 */class I4{constructor(e,t,a){this.source=e,this.path=t,this.snap=a,this.type=P2.OVERWRITE}operationForChild(e){return s1(this.path)?new I4(this.source,m1(),this.snap.getImmediateChild(e)):new I4(this.source,b1(this.path),this.snap)}}/**
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
 */class T0{constructor(e,t,a){this.source=e,this.path=t,this.children=a,this.type=P2.MERGE}operationForChild(e){if(s1(this.path)){const t=this.children.subtree(new V1(e));return t.isEmpty()?null:t.value?new I4(this.source,m1(),t.value):new T0(this.source,m1(),t)}else return T(a1(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new T0(this.source,b1(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class P4{constructor(e,t,a){this.node_=e,this.fullyInitialized_=t,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(s1(e))return this.isFullyInitialized()&&!this.filtered_;const t=a1(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ik{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rk(c,e,t,a){const n=[],i=[];return e.forEach(r=>{r.type==="child_changed"&&c.index_.indexedValueChanged(r.oldSnap,r.snapshotNode)&&i.push(ZA(r.childName,r.snapshotNode))}),K6(c,n,"child_removed",e,a,t),K6(c,n,"child_added",e,a,t),K6(c,n,"child_moved",i,a,t),K6(c,n,"child_changed",e,a,t),K6(c,n,"value",e,a,t),n}function K6(c,e,t,a,n,i){const r=a.filter(s=>s.type===t);r.sort((s,o)=>ok(c,s,o)),r.forEach(s=>{const o=sk(c,s,i);n.forEach(l=>{l.respondsTo(s.type)&&e.push(l.createEvent(o,c.query_))})})}function sk(c,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,c.index_)),e}function ok(c,e,t){if(e.childName==null||t.childName==null)throw E6("Should only compare child_ events.");const a=new n1(e.childName,e.snapshotNode),n=new n1(t.childName,t.snapshotNode);return c.index_.compare(a,n)}/**
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
 */function t7(c,e){return{eventCache:c,serverCache:e}}function f0(c,e,t,a){return t7(new P4(e,t,a),c.serverCache)}function $l(c,e,t,a){return t7(c.eventCache,new P4(e,t,a))}function u9(c){return c.eventCache.isFullyInitialized()?c.eventCache.getNode():null}function R4(c){return c.serverCache.isFullyInitialized()?c.serverCache.getNode():null}/**
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
 */let he;const lk=()=>(he||(he=new l2(KN)),he);class _1{constructor(e,t=lk()){this.value=e,this.children=t}static fromObject(e){let t=new _1(null);return p2(e,(a,n)=>{t=t.set(new V1(a),n)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:m1(),value:this.value};if(s1(e))return null;{const a=a1(e),n=this.children.get(a);if(n!==null){const i=n.findRootMostMatchingPathAndValue(b1(e),t);return i!=null?{path:$1(new V1(a),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(s1(e))return this;{const t=a1(e),a=this.children.get(t);return a!==null?a.subtree(b1(e)):new _1(null)}}set(e,t){if(s1(e))return new _1(t,this.children);{const a=a1(e),i=(this.children.get(a)||new _1(null)).set(b1(e),t),r=this.children.insert(a,i);return new _1(this.value,r)}}remove(e){if(s1(e))return this.children.isEmpty()?new _1(null):new _1(null,this.children);{const t=a1(e),a=this.children.get(t);if(a){const n=a.remove(b1(e));let i;return n.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,n),this.value===null&&i.isEmpty()?new _1(null):new _1(this.value,i)}else return this}}get(e){if(s1(e))return this.value;{const t=a1(e),a=this.children.get(t);return a?a.get(b1(e)):null}}setTree(e,t){if(s1(e))return t;{const a=a1(e),i=(this.children.get(a)||new _1(null)).setTree(b1(e),t);let r;return i.isEmpty()?r=this.children.remove(a):r=this.children.insert(a,i),new _1(this.value,r)}}fold(e){return this.fold_(m1(),e)}fold_(e,t){const a={};return this.children.inorderTraversal((n,i)=>{a[n]=i.fold_($1(e,n),t)}),t(e,this.value,a)}findOnPath(e,t){return this.findOnPath_(e,m1(),t)}findOnPath_(e,t,a){const n=this.value?a(t,this.value):!1;if(n)return n;if(s1(e))return null;{const i=a1(e),r=this.children.get(i);return r?r.findOnPath_(b1(e),$1(t,i),a):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,m1(),t)}foreachOnPath_(e,t,a){if(s1(e))return this;{this.value&&a(t,this.value);const n=a1(e),i=this.children.get(n);return i?i.foreachOnPath_(b1(e),$1(t,n),a):new _1(null)}}foreach(e){this.foreach_(m1(),e)}foreach_(e,t){this.children.inorderTraversal((a,n)=>{n.foreach_($1(e,a),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,a)=>{a.value&&e(t,a.value)})}}/**
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
 */class F2{constructor(e){this.writeTree_=e}static empty(){return new F2(new _1(null))}}function u0(c,e,t){if(s1(e))return new F2(new _1(t));{const a=c.writeTree_.findRootMostValueAndPath(e);if(a!=null){const n=a.path;let i=a.value;const r=o2(n,e);return i=i.updateChild(r,t),new F2(c.writeTree_.set(n,i))}else{const n=new _1(t),i=c.writeTree_.setTree(e,n);return new F2(i)}}}function Li(c,e,t){let a=c;return p2(t,(n,i)=>{a=u0(a,$1(e,n),i)}),a}function bi(c,e){if(s1(e))return F2.empty();{const t=c.writeTree_.setTree(e,new _1(null));return new F2(t)}}function h9(c,e){return K4(c,e)!=null}function K4(c,e){const t=c.writeTree_.findRootMostValueAndPath(e);return t!=null?c.writeTree_.get(t.path).getChild(o2(t.path,e)):null}function _i(c){const e=[],t=c.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(T1,(a,n)=>{e.push(new n1(a,n))}):c.writeTree_.children.inorderTraversal((a,n)=>{n.value!=null&&e.push(new n1(a,n.value))}),e}function K3(c,e){if(s1(e))return c;{const t=K4(c,e);return t!=null?new F2(new _1(t)):new F2(c.writeTree_.subtree(e))}}function d9(c){return c.writeTree_.isEmpty()}function x6(c,e){return ql(m1(),c.writeTree_,e)}function ql(c,e,t){if(e.value!=null)return t.updateChild(c,e.value);{let a=null;return e.children.inorderTraversal((n,i)=>{n===".priority"?(T(i.value!==null,"Priority writes must always be leaf nodes"),a=i.value):t=ql($1(c,n),i,t)}),!t.getChild(c).isEmpty()&&a!==null&&(t=t.updateChild($1(c,".priority"),a)),t}}/**
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
 */function xc(c,e){return Kl(e,c)}function fk(c,e,t,a,n){T(a>c.lastWriteId,"Stacking an older write on top of newer ones"),n===void 0&&(n=!0),c.allWrites.push({path:e,snap:t,writeId:a,visible:n}),n&&(c.visibleWrites=u0(c.visibleWrites,e,t)),c.lastWriteId=a}function uk(c,e){for(let t=0;t<c.allWrites.length;t++){const a=c.allWrites[t];if(a.writeId===e)return a}return null}function hk(c,e){const t=c.allWrites.findIndex(s=>s.writeId===e);T(t>=0,"removeWrite called with nonexistent writeId.");const a=c.allWrites[t];c.allWrites.splice(t,1);let n=a.visible,i=!1,r=c.allWrites.length-1;for(;n&&r>=0;){const s=c.allWrites[r];s.visible&&(r>=t&&dk(s,a.path)?n=!1:I2(a.path,s.path)&&(i=!0)),r--}if(n){if(i)return mk(c),!0;if(a.snap)c.visibleWrites=bi(c.visibleWrites,a.path);else{const s=a.children;p2(s,o=>{c.visibleWrites=bi(c.visibleWrites,$1(a.path,o))})}return!0}else return!1}function dk(c,e){if(c.snap)return I2(c.path,e);for(const t in c.children)if(c.children.hasOwnProperty(t)&&I2($1(c.path,t),e))return!0;return!1}function mk(c){c.visibleWrites=Wl(c.allWrites,pk,m1()),c.allWrites.length>0?c.lastWriteId=c.allWrites[c.allWrites.length-1].writeId:c.lastWriteId=-1}function pk(c){return c.visible}function Wl(c,e,t){let a=F2.empty();for(let n=0;n<c.length;++n){const i=c[n];if(e(i)){const r=i.path;let s;if(i.snap)I2(t,r)?(s=o2(t,r),a=u0(a,s,i.snap)):I2(r,t)&&(s=o2(r,t),a=u0(a,m1(),i.snap.getChild(s)));else if(i.children){if(I2(t,r))s=o2(t,r),a=Li(a,s,i.children);else if(I2(r,t))if(s=o2(r,t),s1(s))a=Li(a,m1(),i.children);else{const o=_6(i.children,a1(s));if(o){const l=o.getChild(b1(s));a=u0(a,m1(),l)}}}else throw E6("WriteRecord should have .snap or .children")}}return a}function Gl(c,e,t,a,n){if(!a&&!n){const i=K4(c.visibleWrites,e);if(i!=null)return i;{const r=K3(c.visibleWrites,e);if(d9(r))return t;if(t==null&&!h9(r,m1()))return null;{const s=t||Q.EMPTY_NODE;return x6(r,s)}}}else{const i=K3(c.visibleWrites,e);if(!n&&d9(i))return t;if(!n&&t==null&&!h9(i,m1()))return null;{const r=function(l){return(l.visible||n)&&(!a||!~a.indexOf(l.writeId))&&(I2(l.path,e)||I2(e,l.path))},s=Wl(c.allWrites,r,e),o=t||Q.EMPTY_NODE;return x6(s,o)}}}function vk(c,e,t){let a=Q.EMPTY_NODE;const n=K4(c.visibleWrites,e);if(n)return n.isLeafNode()||n.forEachChild(T1,(i,r)=>{a=a.updateImmediateChild(i,r)}),a;if(t){const i=K3(c.visibleWrites,e);return t.forEachChild(T1,(r,s)=>{const o=x6(K3(i,new V1(r)),s);a=a.updateImmediateChild(r,o)}),_i(i).forEach(r=>{a=a.updateImmediateChild(r.name,r.node)}),a}else{const i=K3(c.visibleWrites,e);return _i(i).forEach(r=>{a=a.updateImmediateChild(r.name,r.node)}),a}}function zk(c,e,t,a,n){T(a||n,"Either existingEventSnap or existingServerSnap must exist");const i=$1(e,t);if(h9(c.visibleWrites,i))return null;{const r=K3(c.visibleWrites,i);return d9(r)?n.getChild(t):x6(r,n.getChild(t))}}function gk(c,e,t,a){const n=$1(e,t),i=K4(c.visibleWrites,n);if(i!=null)return i;if(a.isCompleteForChild(t)){const r=K3(c.visibleWrites,n);return x6(r,a.getNode().getImmediateChild(t))}else return null}function Ck(c,e){return K4(c.visibleWrites,e)}function Hk(c,e,t,a,n,i,r){let s;const o=K3(c.visibleWrites,e),l=K4(o,m1());if(l!=null)s=l;else if(t!=null)s=x6(o,t);else return[];if(s=s.withIndex(r),!s.isEmpty()&&!s.isLeafNode()){const f=[],u=r.getCompare(),h=i?s.getReverseIteratorFrom(a,r):s.getIteratorFrom(a,r);let d=h.getNext();for(;d&&f.length<n;)u(d,a)!==0&&f.push(d),d=h.getNext();return f}else return[]}function Mk(){return{visibleWrites:F2.empty(),allWrites:[],lastWriteId:-1}}function u5(c,e,t,a){return Gl(c.writeTree,c.treePath,e,t,a)}function Sc(c,e){return vk(c.writeTree,c.treePath,e)}function yi(c,e,t,a){return zk(c.writeTree,c.treePath,e,t,a)}function h5(c,e){return Ck(c.writeTree,$1(c.treePath,e))}function Vk(c,e,t,a,n,i){return Hk(c.writeTree,c.treePath,e,t,a,n,i)}function Nc(c,e,t){return gk(c.writeTree,c.treePath,e,t)}function jl(c,e){return Kl($1(c.treePath,e),c.writeTree)}function Kl(c,e){return{treePath:c,writeTree:e}}/**
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
 */class Lk{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,a=e.childName;T(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),T(a!==".priority","Only non-priority child changes can be tracked.");const n=this.changeMap.get(a);if(n){const i=n.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(a,N0(a,e.snapshotNode,n.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(a);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(a,S0(a,n.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(a,w6(a,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(a,N0(a,e.snapshotNode,n.oldSnap));else throw E6("Illegal combination of changes: "+e+" occurred after "+n)}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bk{getCompleteChild(e){return null}getChildAfterChild(e,t,a){return null}}const Yl=new bk;class Ac{constructor(e,t,a=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=a}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const a=this.optCompleteServerCache_!=null?new P4(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nc(this.writes_,e,a)}}getChildAfterChild(e,t,a){const n=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:R4(this.viewCache_),i=Vk(this.writes_,n,t,1,a,e);return i.length===0?null:i[0]}}/**
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
 */function _k(c){return{filter:c}}function yk(c,e){T(e.eventCache.getNode().isIndexed(c.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(c.filter.getIndex()),"Server snap not indexed")}function wk(c,e,t,a,n){const i=new Lk;let r,s;if(t.type===P2.OVERWRITE){const l=t;l.source.fromUser?r=m9(c,e,l.path,l.snap,a,n,i):(T(l.source.fromServer,"Unknown source."),s=l.source.tagged||e.serverCache.isFiltered()&&!s1(l.path),r=d5(c,e,l.path,l.snap,a,n,s,i))}else if(t.type===P2.MERGE){const l=t;l.source.fromUser?r=Sk(c,e,l.path,l.children,a,n,i):(T(l.source.fromServer,"Unknown source."),s=l.source.tagged||e.serverCache.isFiltered(),r=p9(c,e,l.path,l.children,a,n,s,i))}else if(t.type===P2.ACK_USER_WRITE){const l=t;l.revert?r=kk(c,e,l.path,a,n,i):r=Nk(c,e,l.path,l.affectedTree,a,n,i)}else if(t.type===P2.LISTEN_COMPLETE)r=Ak(c,e,t.path,a,i);else throw E6("Unknown operation type: "+t.type);const o=i.getChanges();return xk(e,r,o),{viewCache:r,changes:o}}function xk(c,e,t){const a=e.eventCache;if(a.isFullyInitialized()){const n=a.getNode().isLeafNode()||a.getNode().isEmpty(),i=u9(c);(t.length>0||!c.eventCache.isFullyInitialized()||n&&!a.getNode().equals(i)||!a.getNode().getPriority().equals(i.getPriority()))&&t.push(Fl(u9(e)))}}function Zl(c,e,t,a,n,i){const r=e.eventCache;if(h5(a,t)!=null)return e;{let s,o;if(s1(t))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=R4(e),f=l instanceof Q?l:Q.EMPTY_NODE,u=Sc(a,f);s=c.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const l=u5(a,R4(e));s=c.filter.updateFullNode(e.eventCache.getNode(),l,i)}else{const l=a1(t);if(l===".priority"){T(X3(t)===1,"Can't have a priority with additional path components");const f=r.getNode();o=e.serverCache.getNode();const u=yi(a,t,f,o);u!=null?s=c.filter.updatePriority(f,u):s=r.getNode()}else{const f=b1(t);let u;if(r.isCompleteForChild(l)){o=e.serverCache.getNode();const h=yi(a,t,r.getNode(),o);h!=null?u=r.getNode().getImmediateChild(l).updateChild(f,h):u=r.getNode().getImmediateChild(l)}else u=Nc(a,l,e.serverCache);u!=null?s=c.filter.updateChild(r.getNode(),l,u,f,n,i):s=r.getNode()}}return f0(e,s,r.isFullyInitialized()||s1(t),c.filter.filtersNodes())}}function d5(c,e,t,a,n,i,r,s){const o=e.serverCache;let l;const f=r?c.filter:c.filter.getIndexedFilter();if(s1(t))l=f.updateFullNode(o.getNode(),a,null);else if(f.filtersNodes()&&!o.isFiltered()){const d=o.getNode().updateChild(t,a);l=f.updateFullNode(o.getNode(),d,null)}else{const d=a1(t);if(!o.isCompleteForPath(t)&&X3(t)>1)return e;const p=b1(t),H=o.getNode().getImmediateChild(d).updateChild(p,a);d===".priority"?l=f.updatePriority(o.getNode(),H):l=f.updateChild(o.getNode(),d,H,p,Yl,null)}const u=$l(e,l,o.isFullyInitialized()||s1(t),f.filtersNodes()),h=new Ac(n,u,i);return Zl(c,u,t,n,h,s)}function m9(c,e,t,a,n,i,r){const s=e.eventCache;let o,l;const f=new Ac(n,e,i);if(s1(t))l=c.filter.updateFullNode(e.eventCache.getNode(),a,r),o=f0(e,l,!0,c.filter.filtersNodes());else{const u=a1(t);if(u===".priority")l=c.filter.updatePriority(e.eventCache.getNode(),a),o=f0(e,l,s.isFullyInitialized(),s.isFiltered());else{const h=b1(t),d=s.getNode().getImmediateChild(u);let p;if(s1(h))p=a;else{const m=f.getCompleteChild(u);m!=null?Al(h)===".priority"&&m.getChild(Tl(h)).isEmpty()?p=m:p=m.updateChild(h,a):p=Q.EMPTY_NODE}if(d.equals(p))o=e;else{const m=c.filter.updateChild(s.getNode(),u,p,h,f,r);o=f0(e,m,s.isFullyInitialized(),c.filter.filtersNodes())}}}return o}function wi(c,e){return c.eventCache.isCompleteForChild(e)}function Sk(c,e,t,a,n,i,r){let s=e;return a.foreach((o,l)=>{const f=$1(t,o);wi(e,a1(f))&&(s=m9(c,s,f,l,n,i,r))}),a.foreach((o,l)=>{const f=$1(t,o);wi(e,a1(f))||(s=m9(c,s,f,l,n,i,r))}),s}function xi(c,e,t){return t.foreach((a,n)=>{e=e.updateChild(a,n)}),e}function p9(c,e,t,a,n,i,r,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o=e,l;s1(t)?l=a:l=new _1(null).setTree(t,a);const f=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(f.hasChild(u)){const d=e.serverCache.getNode().getImmediateChild(u),p=xi(c,d,h);o=d5(c,o,new V1(u),p,n,i,r,s)}}),l.children.inorderTraversal((u,h)=>{const d=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!f.hasChild(u)&&!d){const p=e.serverCache.getNode().getImmediateChild(u),m=xi(c,p,h);o=d5(c,o,new V1(u),m,n,i,r,s)}}),o}function Nk(c,e,t,a,n,i,r){if(h5(n,t)!=null)return e;const s=e.serverCache.isFiltered(),o=e.serverCache;if(a.value!=null){if(s1(t)&&o.isFullyInitialized()||o.isCompleteForPath(t))return d5(c,e,t,o.getNode().getChild(t),n,i,s,r);if(s1(t)){let l=new _1(null);return o.getNode().forEachChild(v6,(f,u)=>{l=l.set(new V1(f),u)}),p9(c,e,t,l,n,i,s,r)}else return e}else{let l=new _1(null);return a.foreach((f,u)=>{const h=$1(t,f);o.isCompleteForPath(h)&&(l=l.set(f,o.getNode().getChild(h)))}),p9(c,e,t,l,n,i,s,r)}}function Ak(c,e,t,a,n){const i=e.serverCache,r=$l(e,i.getNode(),i.isFullyInitialized()||s1(t),i.isFiltered());return Zl(c,r,t,a,Yl,n)}function kk(c,e,t,a,n,i){let r;if(h5(a,t)!=null)return e;{const s=new Ac(a,e,n),o=e.eventCache.getNode();let l;if(s1(t)||a1(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=u5(a,R4(e));else{const u=e.serverCache.getNode();T(u instanceof Q,"serverChildren would be complete if leaf node"),f=Sc(a,u)}f=f,l=c.filter.updateFullNode(o,f,i)}else{const f=a1(t);let u=Nc(a,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=o.getImmediateChild(f)),u!=null?l=c.filter.updateChild(o,f,u,b1(t),s,i):e.eventCache.getNode().hasChild(f)?l=c.filter.updateChild(o,f,Q.EMPTY_NODE,b1(t),s,i):l=o,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(r=u5(a,R4(e)),r.isLeafNode()&&(l=c.filter.updateFullNode(l,r,i)))}return r=e.serverCache.isFullyInitialized()||h5(a,m1())!=null,f0(e,l,r,c.filter.filtersNodes())}}/**
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
 */class Tk{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const a=this.query_._queryParams,n=new bc(a.getIndex()),i=QA(a);this.processor_=_k(i);const r=t.serverCache,s=t.eventCache,o=n.updateFullNode(Q.EMPTY_NODE,r.getNode(),null),l=i.updateFullNode(Q.EMPTY_NODE,s.getNode(),null),f=new P4(o,r.isFullyInitialized(),n.filtersNodes()),u=new P4(l,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=t7(u,f),this.eventGenerator_=new ik(this.query_)}get query(){return this.query_}}function Ek(c){return c.viewCache_.serverCache.getNode()}function Ik(c,e){const t=R4(c.viewCache_);return t&&(c.query._queryParams.loadsAllData()||!s1(e)&&!t.getImmediateChild(a1(e)).isEmpty())?t.getChild(e):null}function Si(c){return c.eventRegistrations_.length===0}function Pk(c,e){c.eventRegistrations_.push(e)}function Ni(c,e,t){const a=[];if(t){T(e==null,"A cancel should cancel all event registrations.");const n=c.query._path;c.eventRegistrations_.forEach(i=>{const r=i.createCancelEvent(t,n);r&&a.push(r)})}if(e){let n=[];for(let i=0;i<c.eventRegistrations_.length;++i){const r=c.eventRegistrations_[i];if(!r.matches(e))n.push(r);else if(e.hasAnyCallback()){n=n.concat(c.eventRegistrations_.slice(i+1));break}}c.eventRegistrations_=n}else c.eventRegistrations_=[];return a}function Ai(c,e,t,a){e.type===P2.MERGE&&e.source.queryId!==null&&(T(R4(c.viewCache_),"We should always have a full cache before handling merges"),T(u9(c.viewCache_),"Missing event cache, even though we have a server cache"));const n=c.viewCache_,i=wk(c.processor_,n,e,t,a);return yk(c.processor_,i.viewCache),T(i.viewCache.serverCache.isFullyInitialized()||!n.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),c.viewCache_=i.viewCache,Xl(c,i.changes,i.viewCache.eventCache.getNode(),null)}function Rk(c,e){const t=c.viewCache_.eventCache,a=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(T1,(i,r)=>{a.push(w6(i,r))}),t.isFullyInitialized()&&a.push(Fl(t.getNode())),Xl(c,a,t.getNode(),e)}function Xl(c,e,t,a){const n=a?[a]:c.eventRegistrations_;return rk(c.eventGenerator_,e,t,n)}/**
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
 */let m5;class Ok{constructor(){this.views=new Map}}function Dk(c){T(!m5,"__referenceConstructor has already been defined"),m5=c}function Fk(){return T(m5,"Reference.ts has not been loaded"),m5}function Bk(c){return c.views.size===0}function kc(c,e,t,a){const n=e.source.queryId;if(n!==null){const i=c.views.get(n);return T(i!=null,"SyncTree gave us an op for an invalid query."),Ai(i,e,t,a)}else{let i=[];for(const r of c.views.values())i=i.concat(Ai(r,e,t,a));return i}}function Uk(c,e,t,a,n){const i=e._queryIdentifier,r=c.views.get(i);if(!r){let s=u5(t,n?a:null),o=!1;s?o=!0:a instanceof Q?(s=Sc(t,a),o=!1):(s=Q.EMPTY_NODE,o=!1);const l=t7(new P4(s,o,!1),new P4(a,n,!1));return new Tk(e,l)}return r}function $k(c,e,t,a,n,i){const r=Uk(c,e,a,n,i);return c.views.has(e._queryIdentifier)||c.views.set(e._queryIdentifier,r),Pk(r,t),Rk(r,t)}function qk(c,e,t,a){const n=e._queryIdentifier,i=[];let r=[];const s=Q3(c);if(n==="default")for(const[o,l]of c.views.entries())r=r.concat(Ni(l,t,a)),Si(l)&&(c.views.delete(o),l.query._queryParams.loadsAllData()||i.push(l.query));else{const o=c.views.get(n);o&&(r=r.concat(Ni(o,t,a)),Si(o)&&(c.views.delete(n),o.query._queryParams.loadsAllData()||i.push(o.query)))}return s&&!Q3(c)&&i.push(new(Fk())(e._repo,e._path)),{removed:i,events:r}}function Ql(c){const e=[];for(const t of c.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function z6(c,e){let t=null;for(const a of c.views.values())t=t||Ik(a,e);return t}function Jl(c,e){if(e._queryParams.loadsAllData())return a7(c);{const a=e._queryIdentifier;return c.views.get(a)}}function ef(c,e){return Jl(c,e)!=null}function Q3(c){return a7(c)!=null}function a7(c){for(const e of c.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let p5;function Wk(c){T(!p5,"__referenceConstructor has already been defined"),p5=c}function Gk(){return T(p5,"Reference.ts has not been loaded"),p5}let jk=1;class ki{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _1(null),this.pendingWriteTree_=Mk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cf(c,e,t,a,n){return fk(c.pendingWriteTree_,e,t,a,n),n?Y0(c,new I4(Ul(),e,t)):[]}function H4(c,e,t=!1){const a=uk(c.pendingWriteTree_,e);if(hk(c.pendingWriteTree_,e)){let i=new _1(null);return a.snap!=null?i=i.set(m1(),!0):p2(a.children,r=>{i=i.set(new V1(r),!0)}),Y0(c,new f5(a.path,i,t))}else return[]}function n7(c,e,t){return Y0(c,new I4(yc(),e,t))}function Kk(c,e,t){const a=_1.fromObject(t);return Y0(c,new T0(yc(),e,a))}function Yk(c,e){return Y0(c,new k0(yc(),e))}function Zk(c,e,t){const a=Ec(c,t);if(a){const n=Ic(a),i=n.path,r=n.queryId,s=o2(i,e),o=new k0(wc(r),s);return Pc(c,i,o)}else return[]}function v9(c,e,t,a,n=!1){const i=e._path,r=c.syncPointTree_.get(i);let s=[];if(r&&(e._queryIdentifier==="default"||ef(r,e))){const o=qk(r,e,t,a);Bk(r)&&(c.syncPointTree_=c.syncPointTree_.remove(i));const l=o.removed;if(s=o.events,!n){const f=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=c.syncPointTree_.findOnPath(i,(h,d)=>Q3(d));if(f&&!u){const h=c.syncPointTree_.subtree(i);if(!h.isEmpty()){const d=Jk(h);for(let p=0;p<d.length;++p){const m=d[p],H=m.query,z=nf(c,m);c.listenProvider_.startListening(h0(H),v5(c,H),z.hashFn,z.onComplete)}}}!u&&l.length>0&&!a&&(f?c.listenProvider_.stopListening(h0(e),null):l.forEach(h=>{const d=c.queryToTagMap.get(i7(h));c.listenProvider_.stopListening(h0(h),d)}))}eT(c,l)}return s}function Xk(c,e,t,a){const n=Ec(c,a);if(n!=null){const i=Ic(n),r=i.path,s=i.queryId,o=o2(r,e),l=new I4(wc(s),o,t);return Pc(c,r,l)}else return[]}function Qk(c,e,t,a){const n=Ec(c,a);if(n){const i=Ic(n),r=i.path,s=i.queryId,o=o2(r,e),l=_1.fromObject(t),f=new T0(wc(s),o,l);return Pc(c,r,f)}else return[]}function Ti(c,e,t,a=!1){const n=e._path;let i=null,r=!1;c.syncPointTree_.foreachOnPath(n,(h,d)=>{const p=o2(h,n);i=i||z6(d,p),r=r||Q3(d)});let s=c.syncPointTree_.get(n);s?(r=r||Q3(s),i=i||z6(s,m1())):(s=new Ok,c.syncPointTree_=c.syncPointTree_.set(n,s));let o;i!=null?o=!0:(o=!1,i=Q.EMPTY_NODE,c.syncPointTree_.subtree(n).foreachChild((d,p)=>{const m=z6(p,m1());m&&(i=i.updateImmediateChild(d,m))}));const l=ef(s,e);if(!l&&!e._queryParams.loadsAllData()){const h=i7(e);T(!c.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=cT();c.queryToTagMap.set(h,d),c.tagToQueryMap.set(d,h)}const f=xc(c.pendingWriteTree_,n);let u=$k(s,e,t,f,i,o);if(!l&&!r&&!a){const h=Jl(s,e);u=u.concat(tT(c,e,h))}return u}function Tc(c,e,t){const n=c.pendingWriteTree_,i=c.syncPointTree_.findOnPath(e,(r,s)=>{const o=o2(r,e),l=z6(s,o);if(l)return l});return Gl(n,e,i,t,!0)}function Y0(c,e){return tf(e,c.syncPointTree_,null,xc(c.pendingWriteTree_,m1()))}function tf(c,e,t,a){if(s1(c.path))return af(c,e,t,a);{const n=e.get(m1());t==null&&n!=null&&(t=z6(n,m1()));let i=[];const r=a1(c.path),s=c.operationForChild(r),o=e.children.get(r);if(o&&s){const l=t?t.getImmediateChild(r):null,f=jl(a,r);i=i.concat(tf(s,o,l,f))}return n&&(i=i.concat(kc(n,c,a,t))),i}}function af(c,e,t,a){const n=e.get(m1());t==null&&n!=null&&(t=z6(n,m1()));let i=[];return e.children.inorderTraversal((r,s)=>{const o=t?t.getImmediateChild(r):null,l=jl(a,r),f=c.operationForChild(r);f&&(i=i.concat(af(f,s,o,l)))}),n&&(i=i.concat(kc(n,c,a,t))),i}function nf(c,e){const t=e.query,a=v5(c,t);return{hashFn:()=>(Ek(e)||Q.EMPTY_NODE).hash(),onComplete:n=>{if(n==="ok")return a?Zk(c,t._path,a):Yk(c,t._path);{const i=XN(n,t);return v9(c,t,null,i)}}}}function v5(c,e){const t=i7(e);return c.queryToTagMap.get(t)}function i7(c){return c._path.toString()+"$"+c._queryIdentifier}function Ec(c,e){return c.tagToQueryMap.get(e)}function Ic(c){const e=c.indexOf("$");return T(e!==-1&&e<c.length-1,"Bad queryKey."),{queryId:c.substr(e+1),path:new V1(c.substr(0,e))}}function Pc(c,e,t){const a=c.syncPointTree_.get(e);T(a,"Missing sync point for query tag that we're tracking");const n=xc(c.pendingWriteTree_,e);return kc(a,t,n,null)}function Jk(c){return c.fold((e,t,a)=>{if(t&&Q3(t))return[a7(t)];{let n=[];return t&&(n=Ql(t)),p2(a,(i,r)=>{n=n.concat(r)}),n}})}function h0(c){return c._queryParams.loadsAllData()&&!c._queryParams.isDefault()?new(Gk())(c._repo,c._path):c}function eT(c,e){for(let t=0;t<e.length;++t){const a=e[t];if(!a._queryParams.loadsAllData()){const n=i7(a),i=c.queryToTagMap.get(n);c.queryToTagMap.delete(n),c.tagToQueryMap.delete(i)}}}function cT(){return jk++}function tT(c,e,t){const a=e._path,n=v5(c,e),i=nf(c,t),r=c.listenProvider_.startListening(h0(e),n,i.hashFn,i.onComplete),s=c.syncPointTree_.subtree(a);if(n)T(!Q3(s.value),"If we're adding a query, it shouldn't be shadowed");else{const o=s.fold((l,f,u)=>{if(!s1(l)&&f&&Q3(f))return[a7(f).query];{let h=[];return f&&(h=h.concat(Ql(f).map(d=>d.query))),p2(u,(d,p)=>{h=h.concat(p)}),h}});for(let l=0;l<o.length;++l){const f=o[l];c.listenProvider_.stopListening(h0(f),v5(c,f))}}return r}/**
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
 */class Rc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Rc(t)}node(){return this.node_}}class Oc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=$1(this.path_,e);return new Oc(this.syncTree_,t)}node(){return Tc(this.syncTree_,this.path_)}}const aT=function(c){return c=c||{},c.timestamp=c.timestamp||new Date().getTime(),c},Ei=function(c,e,t){if(!c||typeof c!="object")return c;if(T(".sv"in c,"Unexpected leaf node or priority contents"),typeof c[".sv"]=="string")return nT(c[".sv"],e,t);if(typeof c[".sv"]=="object")return iT(c[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(c,null,2))},nT=function(c,e,t){switch(c){case"timestamp":return t.timestamp;default:T(!1,"Unexpected server value: "+c)}},iT=function(c,e,t){c.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(c,null,2));const a=c.increment;typeof a!="number"&&T(!1,"Unexpected increment value: "+a);const n=e.node();if(T(n!==null&&typeof n<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!n.isLeafNode())return a;const r=n.getValue();return typeof r!="number"?a:r+a},rT=function(c,e,t,a){return Dc(e,new Oc(t,c),a)},rf=function(c,e,t){return Dc(c,new Rc(e),t)};function Dc(c,e,t){const a=c.getPriority().val(),n=Ei(a,e.getImmediateChild(".priority"),t);let i;if(c.isLeafNode()){const r=c,s=Ei(r.getValue(),e,t);return s!==r.getValue()||n!==r.getPriority().val()?new W1(s,K1(n)):c}else{const r=c;return i=r,n!==r.getPriority().val()&&(i=i.updatePriority(new W1(n))),r.forEachChild(T1,(s,o)=>{const l=Dc(o,e.getImmediateChild(s),t);l!==o&&(i=i.updateImmediateChild(s,l))}),i}}/**
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
 */class Fc{constructor(e="",t=null,a={children:{},childCount:0}){this.name=e,this.parent=t,this.node=a}}function Bc(c,e){let t=e instanceof V1?e:new V1(e),a=c,n=a1(t);for(;n!==null;){const i=_6(a.node.children,n)||{children:{},childCount:0};a=new Fc(n,a,i),t=b1(t),n=a1(t)}return a}function O6(c){return c.node.value}function sf(c,e){c.node.value=e,z9(c)}function of(c){return c.node.childCount>0}function sT(c){return O6(c)===void 0&&!of(c)}function r7(c,e){p2(c.node.children,(t,a)=>{e(new Fc(t,c,a))})}function lf(c,e,t,a){t&&!a&&e(c),r7(c,n=>{lf(n,e,!0,a)}),t&&a&&e(c)}function oT(c,e,t){let a=t?c:c.parent;for(;a!==null;){if(e(a))return!0;a=a.parent}return!1}function Z0(c){return new V1(c.parent===null?c.name:Z0(c.parent)+"/"+c.name)}function z9(c){c.parent!==null&&lT(c.parent,c.name,c)}function lT(c,e,t){const a=sT(t),n=C3(c.node.children,e);a&&n?(delete c.node.children[e],c.node.childCount--,z9(c)):!a&&!n&&(c.node.children[e]=t.node,c.node.childCount++,z9(c))}/**
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
 */const fT=/[\[\].#$\/\u0000-\u001F\u007F]/,uT=/[\[\].#$\u0000-\u001F\u007F]/,de=10*1024*1024,ff=function(c){return typeof c=="string"&&c.length!==0&&!fT.test(c)},uf=function(c){return typeof c=="string"&&c.length!==0&&!uT.test(c)},hT=function(c){return c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),uf(c)},dT=function(c,e,t,a){a&&e===void 0||Uc(lc(c,"value"),e,t)},Uc=function(c,e,t){const a=t instanceof V1?new NA(t,c):t;if(e===void 0)throw new Error(c+"contains undefined "+d4(a));if(typeof e=="function")throw new Error(c+"contains a function "+d4(a)+" with contents = "+e.toString());if(fl(e))throw new Error(c+"contains "+e.toString()+" "+d4(a));if(typeof e=="string"&&e.length>de/3&&Z5(e)>de)throw new Error(c+"contains a string greater than "+de+" utf8 bytes "+d4(a)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let n=!1,i=!1;if(p2(e,(r,s)=>{if(r===".value")n=!0;else if(r!==".priority"&&r!==".sv"&&(i=!0,!ff(r)))throw new Error(c+" contains an invalid key ("+r+") "+d4(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AA(a,r),Uc(c,s,a),kA(a)}),n&&i)throw new Error(c+' contains ".value" child '+d4(a)+" in addition to actual children.")}},hf=function(c,e,t,a){if(!(a&&t===void 0)&&!uf(t))throw new Error(lc(c,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mT=function(c,e,t,a){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hf(c,e,t,a)},pT=function(c,e){if(a1(e)===".info")throw new Error(c+" failed = Can't modify data under /.info/")},vT=function(c,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ff(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!hT(t))throw new Error(lc(c,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class zT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $c(c,e){let t=null;for(let a=0;a<e.length;a++){const n=e[a],i=n.getPath();t!==null&&!Mc(i,t.path)&&(c.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(n)}t&&c.eventLists_.push(t)}function df(c,e,t){$c(c,t),mf(c,a=>Mc(a,e))}function d3(c,e,t){$c(c,t),mf(c,a=>I2(a,e)||I2(e,a))}function mf(c,e){c.recursionDepth_++;let t=!0;for(let a=0;a<c.eventLists_.length;a++){const n=c.eventLists_[a];if(n){const i=n.path;e(i)?(gT(c.eventLists_[a]),c.eventLists_[a]=null):t=!1}}t&&(c.eventLists_=[]),c.recursionDepth_--}function gT(c){for(let e=0;e<c.events.length;e++){const t=c.events[e];if(t!==null){c.events[e]=null;const a=t.getEventRunner();y4&&Q1("event: "+t.toString()),R6(a)}}}/**
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
 */const CT="repo_interrupt",HT=25;class MT{constructor(e,t,a,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=a,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=l5(),this.transactionQueueTree_=new Fc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VT(c,e,t){if(c.stats_=Cc(c.repoInfo_),c.forceRestClient_||cA())c.server_=new o5(c.repoInfo_,(a,n,i,r)=>{Ii(c,a,n,i,r)},c.authTokenProvider_,c.appCheckProvider_),setTimeout(()=>Pi(c,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{j1(t)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}c.persistentConnection_=new l3(c.repoInfo_,e,(a,n,i,r)=>{Ii(c,a,n,i,r)},a=>{Pi(c,a)},a=>{bT(c,a)},c.authTokenProvider_,c.appCheckProvider_,t),c.server_=c.persistentConnection_}c.authTokenProvider_.addTokenChangeListener(a=>{c.server_.refreshAuthToken(a)}),c.appCheckProvider_.addTokenChangeListener(a=>{c.server_.refreshAppCheckToken(a.token)}),c.statsReporter_=rA(c.repoInfo_,()=>new nk(c.stats_,c.server_)),c.infoData_=new JA,c.infoSyncTree_=new ki({startListening:(a,n,i,r)=>{let s=[];const o=c.infoData_.getNode(a._path);return o.isEmpty()||(s=n7(c.infoSyncTree_,a._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),Wc(c,"connected",!1),c.serverSyncTree_=new ki({startListening:(a,n,i,r)=>(c.server_.listen(a,i,n,(s,o)=>{const l=r(s,o);d3(c.eventQueue_,a._path,l)}),[]),stopListening:(a,n)=>{c.server_.unlisten(a,n)}})}function LT(c){const t=c.infoData_.getNode(new V1(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function qc(c){return aT({timestamp:LT(c)})}function Ii(c,e,t,a,n){c.dataUpdateCount++;const i=new V1(e);t=c.interceptServerDataCallback_?c.interceptServerDataCallback_(e,t):t;let r=[];if(n)if(a){const o=c5(t,l=>K1(l));r=Qk(c.serverSyncTree_,i,o,n)}else{const o=K1(t);r=Xk(c.serverSyncTree_,i,o,n)}else if(a){const o=c5(t,l=>K1(l));r=Kk(c.serverSyncTree_,i,o)}else{const o=K1(t);r=n7(c.serverSyncTree_,i,o)}let s=i;r.length>0&&(s=s7(c,i)),d3(c.eventQueue_,s,r)}function Pi(c,e){Wc(c,"connected",e),e===!1&&yT(c)}function bT(c,e){p2(e,(t,a)=>{Wc(c,t,a)})}function Wc(c,e,t){const a=new V1("/.info/"+e),n=K1(t);c.infoData_.updateSnapshot(a,n);const i=n7(c.infoSyncTree_,a,n);d3(c.eventQueue_,a,i)}function pf(c){return c.nextWriteId_++}function _T(c,e,t,a,n){Gc(c,"set",{path:e.toString(),value:t,priority:a});const i=qc(c),r=K1(t,a),s=Tc(c.serverSyncTree_,e),o=rf(r,s,i),l=pf(c),f=cf(c.serverSyncTree_,e,o,l,!0);$c(c.eventQueue_,f),c.server_.put(e.toString(),r.val(!0),(h,d)=>{const p=h==="ok";p||d2("set at "+e+" failed: "+h);const m=H4(c.serverSyncTree_,l,!p);d3(c.eventQueue_,e,m),ST(c,n,h,d)});const u=Hf(c,e);s7(c,u),d3(c.eventQueue_,u,[])}function yT(c){Gc(c,"onDisconnectEvents");const e=qc(c),t=l5();f9(c.onDisconnect_,m1(),(n,i)=>{const r=rT(n,i,c.serverSyncTree_,e);Bl(t,n,r)});let a=[];f9(t,m1(),(n,i)=>{a=a.concat(n7(c.serverSyncTree_,n,i));const r=Hf(c,n);s7(c,r)}),c.onDisconnect_=l5(),d3(c.eventQueue_,m1(),a)}function wT(c,e,t){let a;a1(e._path)===".info"?a=Ti(c.infoSyncTree_,e,t):a=Ti(c.serverSyncTree_,e,t),df(c.eventQueue_,e._path,a)}function Ri(c,e,t){let a;a1(e._path)===".info"?a=v9(c.infoSyncTree_,e,t):a=v9(c.serverSyncTree_,e,t),df(c.eventQueue_,e._path,a)}function xT(c){c.persistentConnection_&&c.persistentConnection_.interrupt(CT)}function Gc(c,...e){let t="";c.persistentConnection_&&(t=c.persistentConnection_.id+":"),Q1(t,...e)}function ST(c,e,t,a){e&&R6(()=>{if(t==="ok")e(null);else{const n=(t||"error").toUpperCase();let i=n;a&&(i+=": "+a);const r=new Error(i);r.code=n,e(r)}})}function vf(c,e,t){return Tc(c.serverSyncTree_,e,t)||Q.EMPTY_NODE}function jc(c,e=c.transactionQueueTree_){if(e||o7(c,e),O6(e)){const t=gf(c,e);T(t.length>0,"Sending zero length transaction queue"),t.every(n=>n.status===0)&&NT(c,Z0(e),t)}else of(e)&&r7(e,t=>{jc(c,t)})}function NT(c,e,t){const a=t.map(l=>l.currentWriteId),n=vf(c,e,a);let i=n;const r=n.hash();for(let l=0;l<t.length;l++){const f=t[l];T(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=o2(e,f.path);i=i.updateChild(u,f.currentOutputSnapshotRaw)}const s=i.val(!0),o=e;c.server_.put(o.toString(),s,l=>{Gc(c,"transaction put response",{path:o.toString(),status:l});let f=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,f=f.concat(H4(c.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();o7(c,Bc(c.transactionQueueTree_,e)),jc(c,c.transactionQueueTree_),d3(c.eventQueue_,e,f);for(let h=0;h<u.length;h++)R6(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{d2("transaction at "+o.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}s7(c,e)}},r)}function s7(c,e){const t=zf(c,e),a=Z0(t),n=gf(c,t);return AT(c,n,a),a}function AT(c,e,t){if(e.length===0)return;const a=[];let n=[];const r=e.filter(s=>s.status===0).map(s=>s.currentWriteId);for(let s=0;s<e.length;s++){const o=e[s],l=o2(t,o.path);let f=!1,u;if(T(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),o.status===4)f=!0,u=o.abortReason,n=n.concat(H4(c.serverSyncTree_,o.currentWriteId,!0));else if(o.status===0)if(o.retryCount>=HT)f=!0,u="maxretry",n=n.concat(H4(c.serverSyncTree_,o.currentWriteId,!0));else{const h=vf(c,o.path,r);o.currentInputSnapshot=h;const d=e[s].update(h.val());if(d!==void 0){Uc("transaction failed: Data returned ",d,o.path);let p=K1(d);typeof d=="object"&&d!=null&&C3(d,".priority")||(p=p.updatePriority(h.getPriority()));const H=o.currentWriteId,z=qc(c),C=rf(p,h,z);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=C,o.currentWriteId=pf(c),r.splice(r.indexOf(H),1),n=n.concat(cf(c.serverSyncTree_,o.path,C,o.currentWriteId,o.applyLocally)),n=n.concat(H4(c.serverSyncTree_,H,!0))}else f=!0,u="nodata",n=n.concat(H4(c.serverSyncTree_,o.currentWriteId,!0))}d3(c.eventQueue_,t,n),n=[],f&&(e[s].status=2,function(h){setTimeout(h,Math.floor(0))}(e[s].unwatcher),e[s].onComplete&&(u==="nodata"?a.push(()=>e[s].onComplete(null,!1,e[s].currentInputSnapshot)):a.push(()=>e[s].onComplete(new Error(u),!1,null))))}o7(c,c.transactionQueueTree_);for(let s=0;s<a.length;s++)R6(a[s]);jc(c,c.transactionQueueTree_)}function zf(c,e){let t,a=c.transactionQueueTree_;for(t=a1(e);t!==null&&O6(a)===void 0;)a=Bc(a,t),e=b1(e),t=a1(e);return a}function gf(c,e){const t=[];return Cf(c,e,t),t.sort((a,n)=>a.order-n.order),t}function Cf(c,e,t){const a=O6(e);if(a)for(let n=0;n<a.length;n++)t.push(a[n]);r7(e,n=>{Cf(c,n,t)})}function o7(c,e){const t=O6(e);if(t){let a=0;for(let n=0;n<t.length;n++)t[n].status!==2&&(t[a]=t[n],a++);t.length=a,sf(e,t.length>0?t:void 0)}r7(e,a=>{o7(c,a)})}function Hf(c,e){const t=Z0(zf(c,e)),a=Bc(c.transactionQueueTree_,e);return oT(a,n=>{me(c,n)}),me(c,a),lf(a,n=>{me(c,n)}),t}function me(c,e){const t=O6(e);if(t){const a=[];let n=[],i=-1;for(let r=0;r<t.length;r++)t[r].status===3||(t[r].status===1?(T(i===r-1,"All SENT items should be at beginning of queue."),i=r,t[r].status=3,t[r].abortReason="set"):(T(t[r].status===0,"Unexpected transaction status in abort"),t[r].unwatcher(),n=n.concat(H4(c.serverSyncTree_,t[r].currentWriteId,!0)),t[r].onComplete&&a.push(t[r].onComplete.bind(null,new Error("set"),!1,null))));i===-1?sf(e,void 0):t.length=i+1,d3(c.eventQueue_,Z0(e),n);for(let r=0;r<a.length;r++)R6(a[r])}}/**
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
 */function kT(c){let e="";const t=c.split("/");for(let a=0;a<t.length;a++)if(t[a].length>0){let n=t[a];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch{}e+="/"+n}return e}function TT(c){const e={};c.charAt(0)==="?"&&(c=c.substring(1));for(const t of c.split("&")){if(t.length===0)continue;const a=t.split("=");a.length===2?e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):d2(`Invalid query segment '${t}' in query '${c}'`)}return e}const Oi=function(c,e){const t=ET(c),a=t.namespace;t.domain==="firebase.com"&&h3(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&t.domain!=="localhost"&&h3("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||GN();const n=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Vl(t.host,t.secure,a,n,e,"",a!==t.subdomain),path:new V1(t.pathString)}},ET=function(c){let e="",t="",a="",n="",i="",r=!0,s="https",o=443;if(typeof c=="string"){let l=c.indexOf("//");l>=0&&(s=c.substring(0,l-1),c=c.substring(l+2));let f=c.indexOf("/");f===-1&&(f=c.length);let u=c.indexOf("?");u===-1&&(u=c.length),e=c.substring(0,Math.min(f,u)),f<u&&(n=kT(c.substring(f,u)));const h=TT(c.substring(Math.min(c.length,u)));l=e.indexOf(":"),l>=0?(r=s==="https"||s==="wss",o=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{const p=e.indexOf(".");a=e.substring(0,p).toLowerCase(),t=e.substring(p+1),i=a}"ns"in h&&(i=h.ns)}return{host:e,port:o,domain:t,subdomain:a,secure:r,scheme:s,pathString:n,namespace:i}};/**
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
 */class Mf{constructor(e,t,a,n){this.eventType=e,this.eventRegistration=t,this.snapshot=a,this.prevName=n}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+j1(this.snapshot.exportVal())}}class Vf{constructor(e,t,a){this.eventRegistration=e,this.error=t,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class IT{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Kc{constructor(e,t,a,n){this._repo=e,this._path=t,this._queryParams=a,this._orderByCalled=n}get key(){return s1(this._path)?null:Al(this._path)}get ref(){return new H3(this._repo,this._path)}get _queryIdentifier(){const e=Mi(this._queryParams),t=zc(e);return t==="{}"?"default":t}get _queryObject(){return Mi(this._queryParams)}isEqual(e){if(e=F1(e),!(e instanceof Kc))return!1;const t=this._repo===e._repo,a=Mc(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&a&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+SA(this._path)}}class H3 extends Kc{constructor(e,t){super(e,t,new _c,!1)}get parent(){const e=Tl(this._path);return e===null?null:new H3(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class E0{constructor(e,t,a){this._node=e,this.ref=t,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new V1(e),a=z5(this.ref,e);return new E0(this._node.getChild(t),a,T1)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,n)=>e(new E0(n,z5(this.ref,a),T1)))}hasChild(e){const t=new V1(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function H8(c,e){return c=F1(c),c._checkNotDeleted("ref"),e!==void 0?z5(c._root,e):c._root}function z5(c,e){return c=F1(c),a1(c._path)===null?mT("child","path",e,!1):hf("child","path",e,!1),new H3(c._repo,$1(c._path,e))}function Di(c,e){c=F1(c),pT("set",c._path),dT("set",e,c._path,!1);const t=new Y5;return _T(c._repo,c._path,e,null,t.wrapCallback(()=>{})),t.promise}class Yc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const a=t._queryParams.getIndex();return new Mf("value",this,new E0(e.snapshotNode,new H3(t._repo,t._path),a))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vf(this,e,t):null}matches(e){return e instanceof Yc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Zc{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vf(this,e,t):null}createEvent(e,t){T(e.childName!=null,"Child events should have a childName.");const a=z5(new H3(t._repo,t._path),e.childName),n=t._queryParams.getIndex();return new Mf(e.type,this,new E0(e.snapshotNode,a,n),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Zc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function PT(c,e,t,a,n){let i;if(typeof a=="object"&&(i=void 0,n=a),typeof a=="function"&&(i=a),n&&n.onlyOnce){const o=t,l=(f,u)=>{Ri(c._repo,c,s),o(f,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const r=new IT(t,i||void 0),s=e==="value"?new Yc(r):new Zc(e,r);return wT(c._repo,c,s),()=>Ri(c._repo,c,s)}function Fi(c,e,t,a){return PT(c,"value",e,t,a)}Dk(H3);Wk(H3);/**
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
 */const RT="FIREBASE_DATABASE_EMULATOR_HOST",g9={};let OT=!1;function DT(c,e,t,a){c.repoInfo_=new Vl(`${e}:${t}`,!1,c.repoInfo_.namespace,c.repoInfo_.webSocketOnly,c.repoInfo_.nodeAdmin,c.repoInfo_.persistenceKey,c.repoInfo_.includeNamespaceInQueryParams,!0),a&&(c.authTokenProvider_=a)}function FT(c,e,t,a,n){let i=a||c.options.databaseURL;i===void 0&&(c.options.projectId||h3("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Q1("Using default host for project ",c.options.projectId),i=`${c.options.projectId}-default-rtdb.firebaseio.com`);let r=Oi(i,n),s=r.repoInfo,o,l;typeof process<"u"&&process.env&&(l=process.env[RT]),l?(o=!0,i=`http://${l}?ns=${s.namespace}`,r=Oi(i,n),s=r.repoInfo):o=!r.repoInfo.secure;const f=n&&o?new p6(p6.OWNER):new aA(c.name,c.options,e);vT("Invalid Firebase Database URL",r),s1(r.path)||h3("Database URL must point to the root of a Firebase Database (not including a child path).");const u=UT(s,c,f,new tA(c.name,t));return new $T(u,c)}function BT(c,e){const t=g9[e];(!t||t[c.key]!==c)&&h3(`Database ${e}(${c.repoInfo_}) has already been deleted.`),xT(c),delete t[c.key]}function UT(c,e,t,a){let n=g9[e.name];n||(n={},g9[e.name]=n);let i=n[c.toURLString()];return i&&h3("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new MT(c,OT,t,a),n[c.toURLString()]=i,i}class $T{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new H3(this._repo,m1())),this._rootInternal}_delete(){return this._rootInternal!==null&&(BT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&h3("Cannot call "+e+" on a deleted database.")}}function M8(c=Q5(),e){const t=n4(c,"database").getImmediate({identifier:e});if(!t._instanceStarted){const a=Vo("database");a&&qT(t,...a)}return t}function qT(c,e,t,a={}){c=F1(c),c._checkNotDeleted("useEmulator"),c._instanceStarted&&h3("Cannot call useEmulator() after instance has already been initialized.");const n=c._repoInternal;let i;if(n.repoInfo_.nodeAdmin)a.mockUserToken&&h3('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new p6(p6.OWNER);else if(a.mockUserToken){const r=typeof a.mockUserToken=="string"?a.mockUserToken:_o(a.mockUserToken,c.app.options.projectId);i=new p6(r)}DT(n,e,t,i)}/**
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
 */function WT(c){BN(j4),U2(new S2("database",(e,{instanceIdentifier:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return FT(a,n,i,t)},"PUBLIC").setMultipleInstances(!0)),u2(ni,ii,c),u2(ni,ii,"esm2017")}l3.prototype.simpleListen=function(c,e){this.sendRequest("q",{p:c},e)};l3.prototype.echo=function(c,e){this.sendRequest("echo",{d:c},e)};WT();const GT={apiKey:"AIzaSyDoLTUQksxMcpUpfdcO6h4E-gq6fq6cubA",authDomain:"cinephile-6a58f.firebaseapp.com",projectId:"cinephile-6a58f",storageBucket:"cinephile-6a58f.appspot.com",messagingSenderId:"904319273342",appId:"1:904319273342:web:83fd65877376b599988b2f",measurementId:"G-R1EL8LRLNT",databaseURL:"https://cinephile-6a58f-default-rtdb.firebaseio.com"},j2=Eo(GT);RN(j2);function Xc(c,e){var t={};for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&e.indexOf(a)<0&&(t[a]=c[a]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(c);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(c,a[n])&&(t[a[n]]=c[a[n]]);return t}function Bi(c){return c!==void 0&&c.enterprise!==void 0}class jT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}function Lf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KT=Lf,bf=new G4("auth","Firebase",Lf());/**
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
 */const g5=new X5("@firebase/auth");function YT(c,...e){g5.logLevel<=M1.WARN&&g5.warn(`Auth (${j4}): ${c}`,...e)}function F8(c,...e){g5.logLevel<=M1.ERROR&&g5.error(`Auth (${j4}): ${c}`,...e)}/**
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
 */function $2(c,...e){throw Qc(c,...e)}function J2(c,...e){return Qc(c,...e)}function ZT(c,e,t){const a=Object.assign(Object.assign({},KT()),{[e]:t});return new G4("auth","Firebase",a).create(e,{appName:c.name})}function Qc(c,...e){if(typeof c!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=c.name),c._errorFactory.create(t,...a)}return bf.create(c,...e)}function J(c,e,...t){if(!c)throw Qc(e,...t)}function s3(c){const e="INTERNAL ASSERTION FAILED: "+c;throw F8(e),new Error(e)}function m3(c,e){c||s3(e)}/**
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
 */function C9(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.href)||""}function XT(){return Ui()==="http:"||Ui()==="https:"}function Ui(){var c;return typeof self<"u"&&((c=self.location)===null||c===void 0?void 0:c.protocol)||null}/**
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
 */function QT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XT()||yo()||"connection"in navigator)?navigator.onLine:!0}function JT(){if(typeof navigator>"u")return null;const c=navigator;return c.languages&&c.languages[0]||c.language||null}/**
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
 */class X0{constructor(e,t){this.shortDelay=e,this.longDelay=t,m3(t>e,"Short delay should be less than long delay!"),this.isMobile=oc()||wo()}get(){return QT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jc(c,e){m3(c.emulator,"Emulator should always be set here");const{url:t}=c.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class _f{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;s3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;s3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;s3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cE=new X0(3e4,6e4);function Y4(c,e){return c.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:c.tenantId}):e}async function Z4(c,e,t,a,n={}){return yf(c,n,async()=>{let i={},r={};a&&(e==="GET"?r=a:i={body:JSON.stringify(a)});const s=I6(Object.assign({key:c.config.apiKey},r)).slice(1),o=await c._getAdditionalHeaders();return o["Content-Type"]="application/json",c.languageCode&&(o["X-Firebase-Locale"]=c.languageCode),_f.fetch()(wf(c,c.config.apiHost,t,s),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},i))})}async function yf(c,e,t){c._canInitEmulator=!1;const a=Object.assign(Object.assign({},eE),e);try{const n=new tE(c),i=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw V8(c,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const s=i.ok?r.errorMessage:r.error.message,[o,l]=s.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw V8(c,"credential-already-in-use",r);if(o==="EMAIL_EXISTS")throw V8(c,"email-already-in-use",r);if(o==="USER_DISABLED")throw V8(c,"user-disabled",r);const f=a[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ZT(c,f,l);$2(c,f)}}catch(n){if(n instanceof q2)throw n;$2(c,"network-request-failed",{message:String(n)})}}async function Q0(c,e,t,a,n={}){const i=await Z4(c,e,t,a,n);return"mfaPendingCredential"in i&&$2(c,"multi-factor-auth-required",{_serverResponse:i}),i}function wf(c,e,t,a){const n=`${e}${t}?${a}`;return c.config.emulator?Jc(c.config,n):`${c.config.apiScheme}://${n}`}class tE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(J2(this.auth,"network-request-failed")),cE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V8(c,e,t){const a={appName:c.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const n=J2(c,e,a);return n.customData._tokenResponse=t,n}async function aE(c,e){return Z4(c,"GET","/v2/recaptchaConfig",Y4(c,e))}/**
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
 */async function nE(c,e){return Z4(c,"POST","/v1/accounts:delete",e)}async function iE(c,e){return Z4(c,"POST","/v1/accounts:lookup",e)}/**
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
 */function d0(c){if(c)try{const e=new Date(Number(c));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rE(c,e=!1){const t=F1(c),a=await t.getIdToken(e),n=et(a);J(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const i=typeof n.firebase=="object"?n.firebase:void 0,r=i==null?void 0:i.sign_in_provider;return{claims:n,token:a,authTime:d0(pe(n.auth_time)),issuedAtTime:d0(pe(n.iat)),expirationTime:d0(pe(n.exp)),signInProvider:r||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pe(c){return Number(c)*1e3}function et(c){const[e,t,a]=c.split(".");if(e===void 0||t===void 0||a===void 0)return F8("JWT malformed, contained fewer than 3 sections"),null;try{const n=e5(t);return n?JSON.parse(n):(F8("Failed to decode base64 JWT payload"),null)}catch(n){return F8("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function sE(c){const e=et(c);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function I0(c,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof q2&&oE(a)&&c.auth.currentUser===c&&await c.auth.signOut(),a}}function oE({code:c}){return c==="auth/user-disabled"||c==="auth/user-token-expired"}/**
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
 */class lE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=d0(this.lastLoginAt),this.creationTime=d0(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function C5(c){var e;const t=c.auth,a=await c.getIdToken(),n=await I0(c,iE(t,{idToken:a}));J(n==null?void 0:n.users.length,t,"internal-error");const i=n.users[0];c._notifyReloadListener(i);const r=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hE(i.providerUserInfo):[],s=uE(c.providerData,r),o=c.isAnonymous,l=!(c.email&&i.passwordHash)&&!(s!=null&&s.length),f=o?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xf(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(c,u)}async function fE(c){const e=F1(c);await C5(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uE(c,e){return[...c.filter(a=>!e.some(n=>n.providerId===a.providerId)),...e]}function hE(c){return c.map(e=>{var{providerId:t}=e,a=Xc(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function dE(c,e){const t=await yf(c,{},async()=>{const a=I6({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:i}=c.config,r=wf(c,n,"/v1/token",`key=${i}`),s=await c._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",_f.fetch()(r,{method:"POST",headers:s,body:a})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class P0{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:n,expiresIn:i}=await dE(e,t);this.updateTokensAndExpiration(a,n,Number(i))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:n,expirationTime:i}=t,r=new P0;return a&&(J(typeof a=="string","internal-error",{appName:e}),r.refreshToken=a),n&&(J(typeof n=="string","internal-error",{appName:e}),r.accessToken=n),i&&(J(typeof i=="number","internal-error",{appName:e}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new P0,this.toJSON())}_performRefresh(){return s3("not implemented")}}/**
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
 */function w3(c,e){J(typeof c=="string"||typeof c>"u","internal-error",{appName:e})}class w4{constructor(e){var{uid:t,auth:a,stsTokenManager:n}=e,i=Xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await I0(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rE(this,e)}reload(){return fE(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new w4(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await C5(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await I0(this,nE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,n,i,r,s,o,l,f;const u=(a=t.displayName)!==null&&a!==void 0?a:void 0,h=(n=t.email)!==null&&n!==void 0?n:void 0,d=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,p=(r=t.photoURL)!==null&&r!==void 0?r:void 0,m=(s=t.tenantId)!==null&&s!==void 0?s:void 0,H=(o=t._redirectEventId)!==null&&o!==void 0?o:void 0,z=(l=t.createdAt)!==null&&l!==void 0?l:void 0,C=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:V,isAnonymous:w,providerData:F,stsTokenManager:P}=t;J(M&&P,e,"internal-error");const x=P0.fromJSON(this.name,P);J(typeof M=="string",e,"internal-error"),w3(u,e.name),w3(h,e.name),J(typeof V=="boolean",e,"internal-error"),J(typeof w=="boolean",e,"internal-error"),w3(d,e.name),w3(p,e.name),w3(m,e.name),w3(H,e.name),w3(z,e.name),w3(C,e.name);const b=new w4({uid:M,auth:e,email:h,emailVerified:V,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:x,createdAt:z,lastLoginAt:C});return F&&Array.isArray(F)&&(b.providerData=F.map(G=>Object.assign({},G))),H&&(b._redirectEventId=H),b}static async _fromIdTokenResponse(e,t,a=!1){const n=new P0;n.updateFromServerResponse(t);const i=new w4({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:a});return await C5(i),i}}/**
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
 */const $i=new Map;function o3(c){m3(c instanceof Function,"Expected a class definition");let e=$i.get(c);return e?(m3(e instanceof c,"Instance stored in cache mismatched with class"),e):(e=new c,$i.set(c,e),e)}/**
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
 */class Sf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sf.type="NONE";const qi=Sf;/**
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
 */function B8(c,e,t){return`firebase:${c}:${e}:${t}`}class g6{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:n,name:i}=this.auth;this.fullUserKey=B8(this.userKey,n.apiKey,i),this.fullPersistenceKey=B8("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?w4._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new g6(o3(qi),e,a);const n=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=n[0]||o3(qi);const r=B8(a,e.config.apiKey,e.name);let s=null;for(const l of t)try{const f=await l._get(r);if(f){const u=w4._fromJSON(e,f);l!==i&&(s=u),i=l;break}}catch{}const o=n.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!o.length?new g6(i,e,a):(i=o[0],s&&await i._set(r,s.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(r)}catch{}})),new g6(i,e,a))}}/**
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
 */function Wi(c){const e=c.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ef(e))return"Blackberry";if(If(e))return"Webos";if(ct(e))return"Safari";if((e.includes("chrome/")||Af(e))&&!e.includes("edge/"))return"Chrome";if(Tf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=c.match(t);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Nf(c=e2()){return/firefox\//i.test(c)}function ct(c=e2()){const e=c.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Af(c=e2()){return/crios\//i.test(c)}function kf(c=e2()){return/iemobile/i.test(c)}function Tf(c=e2()){return/android/i.test(c)}function Ef(c=e2()){return/blackberry/i.test(c)}function If(c=e2()){return/webos/i.test(c)}function l7(c=e2()){return/iphone|ipad|ipod/i.test(c)||/macintosh/i.test(c)&&/mobile/i.test(c)}function mE(c=e2()){var e;return l7(c)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pE(){return Uw()&&document.documentMode===10}function Pf(c=e2()){return l7(c)||Tf(c)||If(c)||Ef(c)||/windows phone/i.test(c)||kf(c)}function vE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Rf(c,e=[]){let t;switch(c){case"Browser":t=Wi(e2());break;case"Worker":t=`${Wi(e2())}-${c}`;break;default:t=c}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${j4}/${a}`}/**
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
 */class zE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=i=>new Promise((r,s)=>{try{const o=e(i);r(o)}catch(o){s(o)}});a.onAbort=t,this.queue.push(a);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function gE(c,e={}){return Z4(c,"GET","/v2/passwordPolicy",Y4(c,e))}/**
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
 */const CE=6;class HE{constructor(e){var t,a,n,i;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=r.minPasswordLength)!==null&&t!==void 0?t:CE,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,a,n,i,r,s;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(t=o.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(a=o.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(n=o.containsLowercaseLetter)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(i=o.containsUppercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(r=o.containsNumericCharacter)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(s=o.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),o}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let n=0;n<e.length;n++)a=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ME{constructor(e,t,a,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gi(this),this.idTokenSubscription=new Gi(this),this.beforeStateQueue=new zE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=o3(t)),this._initializationPromise=this.queue(async()=>{var a,n;if(!this._deleted&&(this.persistenceManager=await g6.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const a=await this.assertedPersistence.getCurrentUser();let n=a,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o!=null&&o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(r){n=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await C5(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?F1(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(o3(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gE(this),t=new HE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new G4("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&o3(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await g6.create(this,[o3(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,n){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let r=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(s,this,"internal-error"),s.then(()=>{r||i(this.currentUser)}),typeof t=="function"){const o=e.addObserver(t,a,n);return()=>{r=!0,o()}}else{const o=e.addObserver(t);return()=>{r=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(t["X-Firebase-Client"]=a);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&YT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function X4(c){return F1(c)}class Gi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zw(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function VE(){var c,e;return(e=(c=document.getElementsByTagName("head"))===null||c===void 0?void 0:c[0])!==null&&e!==void 0?e:document}function Of(c){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",c),a.onload=e,a.onerror=n=>{const i=J2("internal-error");i.customData=n,t(i)},a.type="text/javascript",a.charset="UTF-8",VE().appendChild(a)})}function LE(c){return`__${c}${Math.floor(Math.random()*1e6)}`}const bE="https://www.google.com/recaptcha/enterprise.js?render=",_E="recaptcha-enterprise",yE="NO_RECAPTCHA";class wE{constructor(e){this.type=_E,this.auth=X4(e)}async verify(e="verify",t=!1){async function a(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(r,s)=>{aE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const l=new jT(o);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,r(l.siteKey)}}).catch(o=>{s(o)})})}function n(i,r,s){const o=window.grecaptcha;Bi(o)?o.enterprise.ready(()=>{o.enterprise.execute(i,{action:e}).then(l=>{r(l)}).catch(()=>{r(yE)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,r)=>{a(this.auth).then(s=>{if(!t&&Bi(window.grecaptcha))n(s,i,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}Of(bE+s).then(()=>{n(s,i,r)}).catch(o=>{r(o)})}}).catch(s=>{r(s)})})}}async function H5(c,e,t,a=!1){const n=new wE(c);let i;try{i=await n.verify(t)}catch{i=await n.verify(t,!0)}const r=Object.assign({},e);return a?Object.assign(r,{captchaResp:i}):Object.assign(r,{captchaResponse:i}),Object.assign(r,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(r,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),r}/**
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
 */function xE(c,e){const t=n4(c,"auth");if(t.isInitialized()){const n=t.getImmediate(),i=t.getOptions();if(y0(i,e??{}))return n;$2(n,"already-initialized")}return t.initialize({options:e})}function SE(c,e){const t=(e==null?void 0:e.persistence)||[],a=(Array.isArray(t)?t:[t]).map(o3);e!=null&&e.errorMap&&c._updateErrorMap(e.errorMap),c._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function NE(c,e,t){const a=X4(c);J(a._canInitEmulator,a,"emulator-config-failed"),J(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const n=!!(t!=null&&t.disableWarnings),i=Df(e),{host:r,port:s}=AE(e),o=s===null?"":`:${s}`;a.config.emulator={url:`${i}//${r}${o}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:r,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||kE()}function Df(c){const e=c.indexOf(":");return e<0?"":c.substr(0,e+1)}function AE(c){const e=Df(c),t=/(\/\/)?([^?#/]+)/.exec(c.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(a);if(n){const i=n[1];return{host:i,port:ji(a.substr(i.length+1))}}else{const[i,r]=a.split(":");return{host:i,port:ji(r)}}}function ji(c){if(!c)return null;const e=Number(c);return isNaN(e)?null:e}function kE(){function c(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c())}/**
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
 */class tt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return s3("not implemented")}_getIdTokenResponse(e){return s3("not implemented")}_linkToIdToken(e,t){return s3("not implemented")}_getReauthenticationResolver(e){return s3("not implemented")}}async function TE(c,e){return Z4(c,"POST","/v1/accounts:update",e)}/**
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
 */async function ve(c,e){return Q0(c,"POST","/v1/accounts:signInWithPassword",Y4(c,e))}/**
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
 */async function EE(c,e){return Q0(c,"POST","/v1/accounts:signInWithEmailLink",Y4(c,e))}async function IE(c,e){return Q0(c,"POST","/v1/accounts:signInWithEmailLink",Y4(c,e))}/**
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
 */class R0 extends tt{constructor(e,t,a,n=null){super("password",a),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new R0(e,t,"password")}static _fromEmailAndCode(e,t,a=null){return new R0(e,t,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const n=await H5(e,a,"signInWithPassword");return ve(e,n)}else return ve(e,a).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await H5(e,a,"signInWithPassword");return ve(e,i)}else return Promise.reject(n)});case"emailLink":return EE(e,{email:this._email,oobCode:this._password});default:$2(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return TE(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IE(e,{idToken:t,email:this._email,oobCode:this._password});default:$2(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function C6(c,e){return Q0(c,"POST","/v1/accounts:signInWithIdp",Y4(c,e))}/**
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
 */const PE="http://localhost";class O4 extends tt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new O4(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$2("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:n}=t,i=Xc(t,["providerId","signInMethod"]);if(!a||!n)return null;const r=new O4(a,n);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(e){const t=this.buildRequest();return C6(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,C6(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,C6(e,t)}buildRequest(){const e={requestUri:PE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=I6(t)}return e}}/**
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
 */function RE(c){switch(c){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OE(c){const e=Q6(J6(c)).link,t=e?Q6(J6(e)).deep_link_id:null,a=Q6(J6(c)).deep_link_id;return(a?Q6(J6(a)).link:null)||a||t||e||c}class at{constructor(e){var t,a,n,i,r,s;const o=Q6(J6(e)),l=(t=o.apiKey)!==null&&t!==void 0?t:null,f=(a=o.oobCode)!==null&&a!==void 0?a:null,u=RE((n=o.mode)!==null&&n!==void 0?n:null);J(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(i=o.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(r=o.languageCode)!==null&&r!==void 0?r:null,this.tenantId=(s=o.tenantId)!==null&&s!==void 0?s:null}static parseLink(e){const t=OE(e);try{return new at(t)}catch{return null}}}/**
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
 */class D6{constructor(){this.providerId=D6.PROVIDER_ID}static credential(e,t){return R0._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const a=at.parseLink(t);return J(a,"argument-error"),R0._fromEmailAndCode(e,a.code,a.tenantId)}}D6.PROVIDER_ID="password";D6.EMAIL_PASSWORD_SIGN_IN_METHOD="password";D6.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class J0 extends Ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class T3 extends J0{constructor(){super("facebook.com")}static credential(e){return O4._fromParams({providerId:T3.PROVIDER_ID,signInMethod:T3.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return T3.credentialFromTaggedObject(e)}static credentialFromError(e){return T3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return T3.credential(e.oauthAccessToken)}catch{return null}}}T3.FACEBOOK_SIGN_IN_METHOD="facebook.com";T3.PROVIDER_ID="facebook.com";/**
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
 */class E3 extends J0{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return O4._fromParams({providerId:E3.PROVIDER_ID,signInMethod:E3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return E3.credentialFromTaggedObject(e)}static credentialFromError(e){return E3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return E3.credential(t,a)}catch{return null}}}E3.GOOGLE_SIGN_IN_METHOD="google.com";E3.PROVIDER_ID="google.com";/**
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
 */class I3 extends J0{constructor(){super("github.com")}static credential(e){return O4._fromParams({providerId:I3.PROVIDER_ID,signInMethod:I3.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return I3.credentialFromTaggedObject(e)}static credentialFromError(e){return I3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return I3.credential(e.oauthAccessToken)}catch{return null}}}I3.GITHUB_SIGN_IN_METHOD="github.com";I3.PROVIDER_ID="github.com";/**
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
 */class P3 extends J0{constructor(){super("twitter.com")}static credential(e,t){return O4._fromParams({providerId:P3.PROVIDER_ID,signInMethod:P3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return P3.credentialFromTaggedObject(e)}static credentialFromError(e){return P3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return P3.credential(t,a)}catch{return null}}}P3.TWITTER_SIGN_IN_METHOD="twitter.com";P3.PROVIDER_ID="twitter.com";/**
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
 */async function ze(c,e){return Q0(c,"POST","/v1/accounts:signUp",Y4(c,e))}/**
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
 */class D4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,n=!1){const i=await w4._fromIdTokenResponse(e,a,n),r=Ki(a);return new D4({user:i,providerId:r,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const n=Ki(a);return new D4({user:e,providerId:n,_tokenResponse:a,operationType:t})}}function Ki(c){return c.providerId?c.providerId:"phoneNumber"in c?"phone":null}/**
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
 */class M5 extends q2{constructor(e,t,a,n){var i;super(t.code,t.message),this.operationType=a,this.user=n,Object.setPrototypeOf(this,M5.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,n){return new M5(e,t,a,n)}}function Bf(c,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(c):t._getIdTokenResponse(c)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?M5._fromErrorAndOperation(c,i,e,a):i})}async function DE(c,e,t=!1){const a=await I0(c,e._linkToIdToken(c.auth,await c.getIdToken()),t);return D4._forOperation(c,"link",a)}/**
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
 */async function FE(c,e,t=!1){const{auth:a}=c,n="reauthenticate";try{const i=await I0(c,Bf(a,n,e,c),t);J(i.idToken,a,"internal-error");const r=et(i.idToken);J(r,a,"internal-error");const{sub:s}=r;return J(c.uid===s,a,"user-mismatch"),D4._forOperation(c,n,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$2(a,"user-mismatch"),i}}/**
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
 */async function Uf(c,e,t=!1){const a="signIn",n=await Bf(c,a,e),i=await D4._fromIdTokenResponse(c,a,n);return t||await c._updateCurrentUser(i.user),i}async function BE(c,e){return Uf(X4(c),e)}/**
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
 */async function $f(c){const e=X4(c);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UE(c,e,t){var a;const n=X4(c),i={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let r;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.emailPasswordEnabled){const l=await H5(n,i,"signUpPassword");r=ze(n,l)}else r=ze(n,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await H5(n,i,"signUpPassword");return ze(n,f)}throw l});const s=await r.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$f(c),l}),o=await D4._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}function $E(c,e,t){return BE(F1(c),D6.credential(e,t)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&$f(c),a})}function qE(c,e,t,a){return F1(c).onIdTokenChanged(e,t,a)}function WE(c,e,t){return F1(c).beforeAuthStateChanged(e,t)}function GE(c,e,t,a){return F1(c).onAuthStateChanged(e,t,a)}function jE(c){return F1(c).signOut()}const V5="__sak";/**
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
 */class qf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(V5,"1"),this.storage.removeItem(V5),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function KE(){const c=e2();return ct(c)||l7(c)}const YE=1e3,ZE=10;class Wf extends qf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KE()&&vE(),this.fallbackToPolling=Pf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),n=this.localCache[t];a!==n&&e(t,n,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((r,s,o)=>{this.notifyListeners(r,o)});return}const a=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(a);if(e.newValue!==r)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!t)return}const n=()=>{const r=this.storage.getItem(a);!t&&this.localCache[a]===r||this.notifyListeners(a,r)},i=this.storage.getItem(a);pE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,ZE):n()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},YE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wf.type="LOCAL";const XE=Wf;/**
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
 */class Gf extends qf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gf.type="SESSION";const jf=Gf;/**
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
 */function QE(c){return Promise.all(c.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class f7{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const a=new f7(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:n,data:i}=t.data,r=this.handlersMap[n];if(!(r!=null&&r.size))return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:n});const s=Array.from(r).map(async l=>l(t.origin,i)),o=await QE(s);t.ports[0].postMessage({status:"done",eventId:a,eventType:n,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}f7.receivers=[];/**
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
 */function nt(c="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return c+t}/**
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
 */class JE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,r;return new Promise((s,o)=>{const l=nt("",20);n.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},a);r={messageChannel:n,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(h.data.response);break;default:clearTimeout(f),clearTimeout(i),o(new Error("invalid_response"));break}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
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
 */function e3(){return window}function eI(c){e3().location.href=c}/**
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
 */function Kf(){return typeof e3().WorkerGlobalScope<"u"&&typeof e3().importScripts=="function"}async function cI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tI(){var c;return((c=navigator==null?void 0:navigator.serviceWorker)===null||c===void 0?void 0:c.controller)||null}function aI(){return Kf()?self:null}/**
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
 */const Yf="firebaseLocalStorageDb",nI=1,L5="firebaseLocalStorage",Zf="fbase_key";class e8{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function u7(c,e){return c.transaction([L5],e?"readwrite":"readonly").objectStore(L5)}function iI(){const c=indexedDB.deleteDatabase(Yf);return new e8(c).toPromise()}function H9(){const c=indexedDB.open(Yf,nI);return new Promise((e,t)=>{c.addEventListener("error",()=>{t(c.error)}),c.addEventListener("upgradeneeded",()=>{const a=c.result;try{a.createObjectStore(L5,{keyPath:Zf})}catch(n){t(n)}}),c.addEventListener("success",async()=>{const a=c.result;a.objectStoreNames.contains(L5)?e(a):(a.close(),await iI(),e(await H9()))})})}async function Yi(c,e,t){const a=u7(c,!0).put({[Zf]:e,value:t});return new e8(a).toPromise()}async function rI(c,e){const t=u7(c,!1).get(e),a=await new e8(t).toPromise();return a===void 0?null:a.value}function Zi(c,e){const t=u7(c,!0).delete(e);return new e8(t).toPromise()}const sI=800,oI=3;class Xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await H9(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>oI)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=f7._getInstance(aI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new JE(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((t=a[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await H9();return await Yi(e,V5,"1"),await Zi(e,V5),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>Yi(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>rI(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zi(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const i=u7(n,!1).getAll();return new e8(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;for(const{fbase_key:n,value:i}of e)a.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!a.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xf.type="LOCAL";const lI=Xf;new X0(3e4,6e4);/**
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
 */function fI(c,e){return e?o3(e):(J(c._popupRedirectResolver,c,"argument-error"),c._popupRedirectResolver)}/**
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
 */class it extends tt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return C6(e,this._buildIdpRequest())}_linkToIdToken(e,t){return C6(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return C6(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uI(c){return Uf(c.auth,new it(c),c.bypassAuthState)}function hI(c){const{auth:e,user:t}=c;return J(t,e,"internal-error"),FE(t,new it(c),c.bypassAuthState)}async function dI(c){const{auth:e,user:t}=c;return J(t,e,"internal-error"),DE(t,new it(c),c.bypassAuthState)}/**
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
 */class Qf{constructor(e,t,a,n,i=!1){this.auth=e,this.resolver=a,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:n,tenantId:i,error:r,type:s}=e;if(r){this.reject(r);return}const o={auth:this.auth,requestUri:t,sessionId:a,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uI;case"linkViaPopup":case"linkViaRedirect":return dI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:$2(this.auth,"internal-error")}}resolve(e){m3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){m3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mI=new X0(2e3,1e4);class s6 extends Qf{constructor(e,t,a,n,i){super(e,t,n,i),this.provider=a,this.authWindow=null,this.pollId=null,s6.currentPopupAction&&s6.currentPopupAction.cancel(),s6.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){m3(this.filter.length===1,"Popup operations only handle one event");const e=nt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(J2(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(J2(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,s6.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if(!((a=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(J2(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mI.get())};e()}}s6.currentPopupAction=null;/**
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
 */const pI="pendingRedirect",U8=new Map;class vI extends Qf{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=U8.get(this.auth._key());if(!e){try{const a=await zI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}U8.set(this.auth._key(),e)}return this.bypassAuthState||U8.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zI(c,e){const t=HI(e),a=CI(c);if(!await a._isAvailable())return!1;const n=await a._get(t)==="true";return await a._remove(t),n}function gI(c,e){U8.set(c._key(),e)}function CI(c){return o3(c._redirectPersistence)}function HI(c){return B8(pI,c.config.apiKey,c.name)}async function MI(c,e,t=!1){const a=X4(c),n=fI(a,e),r=await new vI(a,n,t).execute();return r&&!t&&(delete r.user._redirectEventId,await a._persistUserIfCurrent(r.user),await a._setRedirectUser(null,e)),r}/**
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
 */const VI=10*60*1e3;class LI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!Jf(e)){const n=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";t.onError(J2(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xi(e))}saveEventToCache(e){this.cachedEventUids.add(Xi(e)),this.lastProcessedEventTime=Date.now()}}function Xi(c){return[c.type,c.eventId,c.sessionId,c.tenantId].filter(e=>e).join("-")}function Jf({type:c,error:e}){return c==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bI(c){switch(c.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jf(c);default:return!1}}/**
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
 */async function _I(c,e={}){return Z4(c,"GET","/v1/projects",e)}/**
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
 */const yI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function xI(c){if(c.config.emulator)return;const{authorizedDomains:e}=await _I(c);for(const t of e)try{if(SI(t))return}catch{}$2(c,"unauthorized-domain")}function SI(c){const e=C9(),{protocol:t,hostname:a}=new URL(e);if(c.startsWith("chrome-extension://")){const r=new URL(c);return r.hostname===""&&a===""?t==="chrome-extension:"&&c.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&r.hostname===a}if(!wI.test(t))return!1;if(yI.test(c))return a===c;const n=c.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(a)}/**
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
 */const NI=new X0(3e4,6e4);function Qi(){const c=e3().___jsl;if(c!=null&&c.H){for(const e of Object.keys(c.H))if(c.H[e].r=c.H[e].r||[],c.H[e].L=c.H[e].L||[],c.H[e].r=[...c.H[e].L],c.CP)for(let t=0;t<c.CP.length;t++)c.CP[t]=null}}function AI(c){return new Promise((e,t)=>{var a,n,i;function r(){Qi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qi(),t(J2(c,"network-request-failed"))},timeout:NI.get()})}if(!((n=(a=e3().gapi)===null||a===void 0?void 0:a.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((i=e3().gapi)===null||i===void 0)&&i.load)r();else{const s=LE("iframefcb");return e3()[s]=()=>{gapi.load?r():t(J2(c,"network-request-failed"))},Of(`https://apis.google.com/js/api.js?onload=${s}`).catch(o=>t(o))}}).catch(e=>{throw $8=null,e})}let $8=null;function kI(c){return $8=$8||AI(c),$8}/**
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
 */const TI=new X0(5e3,15e3),EI="__/auth/iframe",II="emulator/auth/iframe",PI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OI(c){const e=c.config;J(e.authDomain,c,"auth-domain-config-required");const t=e.emulator?Jc(e,II):`https://${c.config.authDomain}/${EI}`,a={apiKey:e.apiKey,appName:c.name,v:j4},n=RI.get(c.config.apiHost);n&&(a.eid=n);const i=c._getFrameworks();return i.length&&(a.fw=i.join(",")),`${t}?${I6(a).slice(1)}`}async function DI(c){const e=await kI(c),t=e3().gapi;return J(t,c,"internal-error"),e.open({where:document.body,url:OI(c),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PI,dontclear:!0},a=>new Promise(async(n,i)=>{await a.restyle({setHideOnLeave:!1});const r=J2(c,"network-request-failed"),s=e3().setTimeout(()=>{i(r)},TI.get());function o(){e3().clearTimeout(s),n(a)}a.ping(o).then(o,()=>{i(r)})}))}/**
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
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BI=500,UI=600,$I="_blank",qI="http://localhost";class Ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WI(c,e,t,a=BI,n=UI){const i=Math.max((window.screen.availHeight-n)/2,0).toString(),r=Math.max((window.screen.availWidth-a)/2,0).toString();let s="";const o=Object.assign(Object.assign({},FI),{width:a.toString(),height:n.toString(),top:i,left:r}),l=e2().toLowerCase();t&&(s=Af(l)?$I:t),Nf(l)&&(e=e||qI,o.scrollbars="yes");const f=Object.entries(o).reduce((h,[d,p])=>`${h}${d}=${p},`,"");if(mE(l)&&s!=="_self")return GI(e||"",s),new Ji(null);const u=window.open(e||"",s,f);J(u,c,"popup-blocked");try{u.focus()}catch{}return new Ji(u)}function GI(c,e){const t=document.createElement("a");t.href=c,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
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
 */const jI="__/auth/handler",KI="emulator/auth/handler",YI=encodeURIComponent("fac");async function er(c,e,t,a,n,i){J(c.config.authDomain,c,"auth-domain-config-required"),J(c.config.apiKey,c,"invalid-api-key");const r={apiKey:c.config.apiKey,appName:c.name,authType:t,redirectUrl:a,v:j4,eventId:n};if(e instanceof Ff){e.setDefaultLanguage(c.languageCode),r.providerId=e.providerId||"",Xe(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))r[f]=u}if(e instanceof J0){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(r.scopes=f.join(","))}c.tenantId&&(r.tid=c.tenantId);const s=r;for(const f of Object.keys(s))s[f]===void 0&&delete s[f];const o=await c._getAppCheckToken(),l=o?`#${YI}=${encodeURIComponent(o)}`:"";return`${ZI(c)}?${I6(s).slice(1)}${l}`}function ZI({config:c}){return c.emulator?Jc(c,KI):`https://${c.authDomain}/${jI}`}/**
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
 */const ge="webStorageSupport";class XI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jf,this._completeRedirectFn=MI,this._overrideRedirectResult=gI}async _openPopup(e,t,a,n){var i;m3((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const r=await er(e,t,a,C9(),n);return WI(e,r,nt())}async _openRedirect(e,t,a,n){await this._originValidation(e);const i=await er(e,t,a,C9(),n);return eI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:i}=this.eventManagers[t];return n?Promise.resolve(n):(m3(i,"If manager is not set, promise should be"),i)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await DI(e),a=new LI(e);return t.register("authEvent",n=>(J(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:a.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ge,{type:ge},n=>{var i;const r=(i=n==null?void 0:n[0])===null||i===void 0?void 0:i[ge];r!==void 0&&t(!!r),$2(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pf()||ct()||l7()}}const QI=XI;var cr="@firebase/auth",tr="1.3.0";/**
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
 */class JI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eP(c){switch(c){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cP(c){U2(new S2("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:r,authDomain:s}=a.options;J(r&&!r.includes(":"),"invalid-api-key",{appName:a.name});const o={apiKey:r,authDomain:s,clientPlatform:c,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rf(c)},l=new ME(a,n,i,o);return SE(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),U2(new S2("auth-internal",e=>{const t=X4(e.getProvider("auth").getImmediate());return(a=>new JI(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),u2(cr,tr,eP(c)),u2(cr,tr,"esm2017")}/**
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
 */const tP=5*60,aP=bo("authIdTokenMaxAge")||tP;let ar=null;const nP=c=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>aP)return;const n=t==null?void 0:t.token;ar!==n&&(ar=n,await fetch(c,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function L8(c=Q5()){const e=n4(c,"auth");if(e.isInitialized())return e.getImmediate();const t=xE(c,{popupRedirectResolver:QI,persistence:[lI,XE,jf]}),a=bo("authTokenSyncURL");if(a){const i=nP(a);WE(t,i,()=>i(t.currentUser)),qE(t,r=>i(r))}const n=Mo("auth");return n&&NE(t,`http://${n}`),t}cP("Browser");const e0=q4("shared",{state:()=>({loading:!1,error:null}),actions:{setLoading(c){this.loading=c},setError(c){this.error=c},clearError(){this.error=null}}});/**
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
 */const eu="firebasestorage.googleapis.com",cu="storageBucket",iP=2*60*1e3,rP=10*60*1e3;/**
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
 */class I1 extends q2{constructor(e,t,a=0){super(Ce(e),`Firebase Storage: ${t} (${Ce(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,I1.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ce(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var E1;(function(c){c.UNKNOWN="unknown",c.OBJECT_NOT_FOUND="object-not-found",c.BUCKET_NOT_FOUND="bucket-not-found",c.PROJECT_NOT_FOUND="project-not-found",c.QUOTA_EXCEEDED="quota-exceeded",c.UNAUTHENTICATED="unauthenticated",c.UNAUTHORIZED="unauthorized",c.UNAUTHORIZED_APP="unauthorized-app",c.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",c.INVALID_CHECKSUM="invalid-checksum",c.CANCELED="canceled",c.INVALID_EVENT_NAME="invalid-event-name",c.INVALID_URL="invalid-url",c.INVALID_DEFAULT_BUCKET="invalid-default-bucket",c.NO_DEFAULT_BUCKET="no-default-bucket",c.CANNOT_SLICE_BLOB="cannot-slice-blob",c.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",c.NO_DOWNLOAD_URL="no-download-url",c.INVALID_ARGUMENT="invalid-argument",c.INVALID_ARGUMENT_COUNT="invalid-argument-count",c.APP_DELETED="app-deleted",c.INVALID_ROOT_OPERATION="invalid-root-operation",c.INVALID_FORMAT="invalid-format",c.INTERNAL_ERROR="internal-error",c.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(E1||(E1={}));function Ce(c){return"storage/"+c}function rt(){const c="An unknown error occurred, please check the error payload for server response.";return new I1(E1.UNKNOWN,c)}function sP(c){return new I1(E1.OBJECT_NOT_FOUND,"Object '"+c+"' does not exist.")}function oP(c){return new I1(E1.QUOTA_EXCEEDED,"Quota for bucket '"+c+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lP(){const c="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I1(E1.UNAUTHENTICATED,c)}function fP(){return new I1(E1.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uP(c){return new I1(E1.UNAUTHORIZED,"User does not have permission to access '"+c+"'.")}function hP(){return new I1(E1.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dP(){return new I1(E1.CANCELED,"User canceled the upload/download.")}function mP(c){return new I1(E1.INVALID_URL,"Invalid URL '"+c+"'.")}function pP(c){return new I1(E1.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+c+"'.")}function vP(){return new I1(E1.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cu+"' property when initializing the app?")}function zP(){return new I1(E1.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gP(){return new I1(E1.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CP(c){return new I1(E1.UNSUPPORTED_ENVIRONMENT,`${c} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function M9(c){return new I1(E1.INVALID_ARGUMENT,c)}function tu(){return new I1(E1.APP_DELETED,"The Firebase app was deleted.")}function HP(c){return new I1(E1.INVALID_ROOT_OPERATION,"The operation '"+c+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function m0(c,e){return new I1(E1.INVALID_FORMAT,"String does not match format '"+c+"': "+e)}function Y6(c){throw new I1(E1.INTERNAL_ERROR,"Internal error: "+c)}/**
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
 */class H2{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let a;try{a=H2.makeFromUrl(e,t)}catch{return new H2(e,"")}if(a.path==="")return a;throw pP(e)}static makeFromUrl(e,t){let a=null;const n="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const r="(/(.*))?$",s=new RegExp("^gs://"+n+r,"i"),o={bucket:1,path:3};function l(V){V.path_=decodeURIComponent(V.path)}const f="v[A-Za-z0-9_]+",u=t.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${u}/${f}/b/${n}/o${h}`,"i"),p={bucket:1,path:3},m=t===eu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,H="([^?#]*)",z=new RegExp(`^https?://${m}/${n}/${H}`,"i"),M=[{regex:s,indices:o,postModify:i},{regex:d,indices:p,postModify:l},{regex:z,indices:{bucket:1,path:2},postModify:l}];for(let V=0;V<M.length;V++){const w=M[V],F=w.regex.exec(e);if(F){const P=F[w.indices.bucket];let x=F[w.indices.path];x||(x=""),a=new H2(P,x),w.postModify(a);break}}if(a==null)throw mP(e);return a}}class MP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function VP(c,e,t){let a=1,n=null,i=null,r=!1,s=0;function o(){return s===2}let l=!1;function f(...H){l||(l=!0,e.apply(null,H))}function u(H){n=setTimeout(()=>{n=null,c(d,o())},H)}function h(){i&&clearTimeout(i)}function d(H,...z){if(l){h();return}if(H){h(),f.call(null,H,...z);return}if(o()||r){h(),f.call(null,H,...z);return}a<64&&(a*=2);let M;s===1?(s=2,M=0):M=(a+Math.random())*1e3,u(M)}let p=!1;function m(H){p||(p=!0,h(),!l&&(n!==null?(H||(s=2),clearTimeout(n),u(0)):H||(s=1)))}return u(0),i=setTimeout(()=>{r=!0,m(!0)},t),m}function LP(c){c(!1)}/**
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
 */function bP(c){return c!==void 0}function _P(c){return typeof c=="object"&&!Array.isArray(c)}function st(c){return typeof c=="string"||c instanceof String}function nr(c){return ot()&&c instanceof Blob}function ot(){return typeof Blob<"u"&&!Bw()}function ir(c,e,t,a){if(a<e)throw M9(`Invalid value for '${c}'. Expected ${e} or greater.`);if(a>t)throw M9(`Invalid value for '${c}'. Expected ${t} or less.`)}/**
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
 */function lt(c,e,t){let a=e;return t==null&&(a=`https://${e}`),`${t}://${a}/v0${c}`}function au(c){const e=encodeURIComponent;let t="?";for(const a in c)if(c.hasOwnProperty(a)){const n=e(a)+"="+e(c[a]);t=t+n+"&"}return t=t.slice(0,-1),t}/**
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
 */var x4;(function(c){c[c.NO_ERROR=0]="NO_ERROR",c[c.NETWORK_ERROR=1]="NETWORK_ERROR",c[c.ABORT=2]="ABORT"})(x4||(x4={}));/**
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
 */function yP(c,e){const t=c>=500&&c<600,n=[408,429].indexOf(c)!==-1,i=e.indexOf(c)!==-1;return t||n||i}/**
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
 */class wP{constructor(e,t,a,n,i,r,s,o,l,f,u,h=!0){this.url_=e,this.method_=t,this.headers_=a,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=r,this.callback_=s,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(a,n)=>{if(n){a(!1,new b8(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const r=s=>{const o=s.loaded,l=s.lengthComputable?s.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,l)};this.progressCallback_!==null&&i.addUploadProgressListener(r),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(r),this.pendingConnection_=null;const s=i.getErrorCode()===x4.NO_ERROR,o=i.getStatus();if(!s||yP(o,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===x4.ABORT;a(!1,new b8(!1,null,f));return}const l=this.successCodes_.indexOf(o)!==-1;a(!0,new b8(l,i))})},t=(a,n)=>{const i=this.resolve_,r=this.reject_,s=n.connection;if(n.wasSuccessCode)try{const o=this.callback_(s,s.getResponse());bP(o)?i(o):i()}catch(o){r(o)}else if(s!==null){const o=rt();o.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,o)):r(o)}else if(n.canceled){const o=this.appDelete_?tu():dP();r(o)}else{const o=hP();r(o)}};this.canceled_?t(!1,new b8(!1,null,!0)):this.backoffId_=VP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class b8{constructor(e,t,a){this.wasSuccessCode=e,this.connection=t,this.canceled=!!a}}function xP(c,e){e!==null&&e.length>0&&(c.Authorization="Firebase "+e)}function SP(c,e){c["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NP(c,e){e&&(c["X-Firebase-GMPID"]=e)}function AP(c,e){e!==null&&(c["X-Firebase-AppCheck"]=e)}function kP(c,e,t,a,n,i,r=!0){const s=au(c.urlParams),o=c.url+s,l=Object.assign({},c.headers);return NP(l,e),xP(l,t),SP(l,i),AP(l,a),new wP(o,c.method,l,c.body,c.successCodes,c.additionalRetryCodes,c.handler,c.errorHandler,c.timeout,c.progressCallback,n,r)}/**
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
 */function TP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function EP(...c){const e=TP();if(e!==void 0){const t=new e;for(let a=0;a<c.length;a++)t.append(c[a]);return t.getBlob()}else{if(ot())return new Blob(c);throw new I1(E1.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function IP(c,e,t){return c.webkitSlice?c.webkitSlice(e,t):c.mozSlice?c.mozSlice(e,t):c.slice?c.slice(e,t):null}/**
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
 */function PP(c){if(typeof atob>"u")throw CP("base-64");return atob(c)}/**
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
 */const X2={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class He{constructor(e,t){this.data=e,this.contentType=t||null}}function RP(c,e){switch(c){case X2.RAW:return new He(nu(e));case X2.BASE64:case X2.BASE64URL:return new He(iu(c,e));case X2.DATA_URL:return new He(DP(e),FP(e))}throw rt()}function nu(c){const e=[];for(let t=0;t<c.length;t++){let a=c.charCodeAt(t);if(a<=127)e.push(a);else if(a<=2047)e.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(t<c.length-1&&(c.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=a,r=c.charCodeAt(++t);a=65536|(i&1023)<<10|r&1023,e.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?e.push(239,191,189):e.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(e)}function OP(c){let e;try{e=decodeURIComponent(c)}catch{throw m0(X2.DATA_URL,"Malformed data URL.")}return nu(e)}function iu(c,e){switch(c){case X2.BASE64:{const n=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(n||i)throw m0(c,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case X2.BASE64URL:{const n=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(n||i)throw m0(c,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=PP(e)}catch(n){throw n.message.includes("polyfill")?n:m0(c,"Invalid character found")}const a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n);return a}class ru{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw m0(X2.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=t[1]||null;a!=null&&(this.base64=BP(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=e.substring(e.indexOf(",")+1)}}function DP(c){const e=new ru(c);return e.base64?iu(X2.BASE64,e.rest):OP(e.rest)}function FP(c){return new ru(c).contentType}function BP(c,e){return c.length>=e.length?c.substring(c.length-e.length)===e:!1}/**
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
 */class R3{constructor(e,t){let a=0,n="";nr(e)?(this.data_=e,a=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),a=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),a=e.length),this.size_=a,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(nr(this.data_)){const a=this.data_,n=IP(a,e,t);return n===null?null:new R3(n)}else{const a=new Uint8Array(this.data_.buffer,e,t-e);return new R3(a,!0)}}static getBlob(...e){if(ot()){const t=e.map(a=>a instanceof R3?a.data_:a);return new R3(EP.apply(null,t))}else{const t=e.map(r=>st(r)?RP(X2.RAW,r).data:r.data_);let a=0;t.forEach(r=>{a+=r.byteLength});const n=new Uint8Array(a);let i=0;return t.forEach(r=>{for(let s=0;s<r.length;s++)n[i++]=r[s]}),new R3(n,!0)}}uploadData(){return this.data_}}/**
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
 */function su(c){let e;try{e=JSON.parse(c)}catch{return null}return _P(e)?e:null}/**
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
 */function UP(c){if(c.length===0)return null;const e=c.lastIndexOf("/");return e===-1?"":c.slice(0,e)}function $P(c,e){const t=e.split("/").filter(a=>a.length>0).join("/");return c.length===0?t:c+"/"+t}function ou(c){const e=c.lastIndexOf("/",c.length-2);return e===-1?c:c.slice(e+1)}/**
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
 */function qP(c,e){return e}class c2{constructor(e,t,a,n){this.server=e,this.local=t||e,this.writable=!!a,this.xform=n||qP}}let _8=null;function WP(c){return!st(c)||c.length<2?c:ou(c)}function lu(){if(_8)return _8;const c=[];c.push(new c2("bucket")),c.push(new c2("generation")),c.push(new c2("metageneration")),c.push(new c2("name","fullPath",!0));function e(i,r){return WP(r)}const t=new c2("name");t.xform=e,c.push(t);function a(i,r){return r!==void 0?Number(r):r}const n=new c2("size");return n.xform=a,c.push(n),c.push(new c2("timeCreated")),c.push(new c2("updated")),c.push(new c2("md5Hash",null,!0)),c.push(new c2("cacheControl",null,!0)),c.push(new c2("contentDisposition",null,!0)),c.push(new c2("contentEncoding",null,!0)),c.push(new c2("contentLanguage",null,!0)),c.push(new c2("contentType",null,!0)),c.push(new c2("metadata","customMetadata",!0)),_8=c,_8}function GP(c,e){function t(){const a=c.bucket,n=c.fullPath,i=new H2(a,n);return e._makeStorageReference(i)}Object.defineProperty(c,"ref",{get:t})}function jP(c,e,t){const a={};a.type="file";const n=t.length;for(let i=0;i<n;i++){const r=t[i];a[r.local]=r.xform(a,e[r.server])}return GP(a,c),a}function fu(c,e,t){const a=su(e);return a===null?null:jP(c,a,t)}function KP(c,e,t,a){const n=su(e);if(n===null||!st(n.downloadTokens))return null;const i=n.downloadTokens;if(i.length===0)return null;const r=encodeURIComponent;return i.split(",").map(l=>{const f=c.bucket,u=c.fullPath,h="/b/"+r(f)+"/o/"+r(u),d=lt(h,t,a),p=au({alt:"media",token:l});return d+p})[0]}function YP(c,e){const t={},a=e.length;for(let n=0;n<a;n++){const i=e[n];i.writable&&(t[i.server]=c[i.local])}return JSON.stringify(t)}class uu{constructor(e,t,a,n){this.url=e,this.method=t,this.handler=a,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function hu(c){if(!c)throw rt()}function ZP(c,e){function t(a,n){const i=fu(c,n,e);return hu(i!==null),i}return t}function XP(c,e){function t(a,n){const i=fu(c,n,e);return hu(i!==null),KP(i,n,c.host,c._protocol)}return t}function du(c){function e(t,a){let n;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?n=fP():n=lP():t.getStatus()===402?n=oP(c.bucket):t.getStatus()===403?n=uP(c.path):n=a,n.status=t.getStatus(),n.serverResponse=a.serverResponse,n}return e}function QP(c){const e=du(c);function t(a,n){let i=e(a,n);return a.getStatus()===404&&(i=sP(c.path)),i.serverResponse=n.serverResponse,i}return t}function JP(c,e,t){const a=e.fullServerUrl(),n=lt(a,c.host,c._protocol),i="GET",r=c.maxOperationRetryTime,s=new uu(n,i,XP(c,t),r);return s.errorHandler=QP(e),s}function eR(c,e){return c&&c.contentType||e&&e.type()||"application/octet-stream"}function cR(c,e,t){const a=Object.assign({},t);return a.fullPath=c.path,a.size=e.size(),a.contentType||(a.contentType=eR(null,e)),a}function tR(c,e,t,a,n){const i=e.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function s(){let M="";for(let V=0;V<2;V++)M=M+Math.random().toString().slice(2);return M}const o=s();r["Content-Type"]="multipart/related; boundary="+o;const l=cR(e,a,n),f=YP(l,t),u="--"+o+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+o+`\r
Content-Type: `+l.contentType+`\r
\r
`,h=`\r
--`+o+"--",d=R3.getBlob(u,a,h);if(d===null)throw zP();const p={name:l.fullPath},m=lt(i,c.host,c._protocol),H="POST",z=c.maxUploadRetryTime,C=new uu(m,H,ZP(c,t),z);return C.urlParams=p,C.headers=r,C.body=d.uploadData(),C.errorHandler=du(e),C}class aR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=x4.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=x4.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=x4.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,a,n){if(this.sent_)throw Y6("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),n!==void 0)for(const i in n)n.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,n[i].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Y6("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Y6("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Y6("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Y6("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nR extends aR{initXhr(){this.xhr_.responseType="text"}}function mu(){return new nR}/**
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
 */class F4{constructor(e,t){this._service=e,t instanceof H2?this._location=t:this._location=H2.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new F4(e,t)}get root(){const e=new H2(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ou(this._location.path)}get storage(){return this._service}get parent(){const e=UP(this._location.path);if(e===null)return null;const t=new H2(this._location.bucket,e);return new F4(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw HP(e)}}function iR(c,e,t){c._throwIfRoot("uploadBytes");const a=tR(c.storage,c._location,lu(),new R3(e,!0),t);return c.storage.makeRequestWithTokens(a,mu).then(n=>({metadata:n,ref:c}))}function rR(c){c._throwIfRoot("getDownloadURL");const e=JP(c.storage,c._location,lu());return c.storage.makeRequestWithTokens(e,mu).then(t=>{if(t===null)throw gP();return t})}function sR(c,e){const t=$P(c._location.path,e),a=new H2(c._location.bucket,t);return new F4(c.storage,a)}/**
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
 */function oR(c){return/^[A-Za-z]+:\/\//.test(c)}function lR(c,e){return new F4(c,e)}function pu(c,e){if(c instanceof ft){const t=c;if(t._bucket==null)throw vP();const a=new F4(t,t._bucket);return e!=null?pu(a,e):a}else return e!==void 0?sR(c,e):c}function fR(c,e){if(e&&oR(e)){if(c instanceof ft)return lR(c,e);throw M9("To use ref(service, url), the first argument must be a Storage instance.")}else return pu(c,e)}function rr(c,e){const t=e==null?void 0:e[cu];return t==null?null:H2.makeFromBucketSpec(t,c)}function uR(c,e,t,a={}){c.host=`${e}:${t}`,c._protocol="http";const{mockUserToken:n}=a;n&&(c._overrideAuthToken=typeof n=="string"?n:_o(n,c.app.options.projectId))}class ft{constructor(e,t,a,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=a,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=eu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iP,this._maxUploadRetryTime=rP,this._requests=new Set,n!=null?this._bucket=H2.makeFromBucketSpec(n,this._host):this._bucket=rr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=H2.makeFromBucketSpec(this._url,e):this._bucket=rr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ir("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ir("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new F4(this,e)}_makeRequest(e,t,a,n,i=!0){if(this._deleted)return new MP(tu());{const r=kP(e,this._appId,a,n,t,this._firebaseVersion,i);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,t){const[a,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,a,n).getPromise()}}const sr="@firebase/storage",or="0.11.2";/**
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
 */const vu="storage";function hR(c,e,t){return c=F1(c),iR(c,e,t)}function dR(c){return c=F1(c),rR(c)}function lr(c,e){return c=F1(c),fR(c,e)}function mR(c=Q5(),e){c=F1(c);const a=n4(c,vu).getImmediate({identifier:e}),n=Vo("storage");return n&&pR(a,...n),a}function pR(c,e,t,a={}){uR(c,e,t,a)}function vR(c,{instanceIdentifier:e}){const t=c.getProvider("app").getImmediate(),a=c.getProvider("auth-internal"),n=c.getProvider("app-check-internal");return new ft(t,a,n,e,j4)}function zR(){U2(new S2(vu,vR,"PUBLIC").setMultipleInstances(!0)),u2(sr,or,""),u2(sr,or,"esm2017")}zR();const zu=q4("user",{state:()=>({user:{},images:null}),actions:{async uploadFile(c){let e=c.name.slice(c.name.lastIndexOf(".")),t=this.user.id+"-"+new Date().getTime()+e;const a=mR(j2),n=await lr(a,`users/${this.user.id}/`+t);return await hR(n,c).then(r=>{console.log("Uploaded a blob or file!")}),await dR(lr(a,n.fullPath))},async writeUserData(c,e){const t=e0();t.clearError(),t.setLoading(!0);try{let a=e.info?await this.uploadFile(e.info):e.img;const n=M8(j2);Di(H8(n,"users/"+this.user.id),{username:c,prof_pic:a}),this.getUserInfo(),t.setLoading(!1)}catch(a){throw t.setLoading(!1),t.setError(a.message),a}},async loginUser(c,e){const t=e0();t.clearError(),t.setLoading(!0);try{const a=L8(j2);let n=await $E(a,c,e);this.user={id:n.user.uid},this.getUserInfo(),t.setLoading(!1)}catch(a){throw t.setLoading(!1),t.setError(a.message),a}},async registerUser(c,e){const t=e0();t.clearError(),t.setLoading(!0);try{const a=L8(j2);let n=await UE(a,c,e);this.user={id:n.user.uid},t.setLoading(!1)}catch(a){throw t.setLoading(!1),t.setError(a.message),a}},async autoLoginUser(){const c=L8(j2);await GE(c,e=>{e?(this.user={id:e.uid},this.getUserInfo()):this.user=null})},async logoutUser(){const c=L8(j2);jE(c),this.user=null},async getUserInfo(){const c=M8(j2),e=H8(c,"users/"+this.user.id);Fi(e,t=>{const a=t.val();this.user={...this.user,...a},this.getImages()})},async writeUserImages(c){const e=e0();e.clearError(),e.setLoading(!0);try{for(let t=0;t<c.length;t++){const a=c[t];let n=await this.uploadFile(a),i=new Date().getTime()+`-${t}`;if(!await this.addImgToDB(i,n))throw new Error("Не удалось добавить картинку")}e.setLoading(!1)}catch(t){throw e.setLoading(!1),e.setError(t.message),t}},async addImgToDB(c,e,t=0){try{const a=M8(j2);return Di(H8(a,`users/${this.user.id}/images/`+c),{img_path:e,img_select:t}),!0}catch{return!1}},async getImages(){const c=M8(j2),e=H8(c,`users/${this.user.id}/images`);Fi(e,t=>{const a=t.val();this.images=a})}},getters:{isUserLogged(c){return c.user!=null},userName(c){return c.user?c.user.username?c.user.username:c.user.id:null},userImg(c){return c.user&&c.user.prof_pic?c.user.prof_pic:null}}});let x3="/cinephile";function a6(c,e,t){zu().isUserLogged?t():t("/enter?loginError=true")}const gR=s_({history:Lb(),routes:[{path:"/",name:"home",component:kw,alias:x3},{path:"/movie",name:"movies",component:()=>r4(()=>import("./Films-188f3bc7.js"),["./Films-188f3bc7.js","./ListContent-1cbc4b09.js"],import.meta.url),alias:x3+"/movie",beforeEnter:a6},{path:"/search",name:"search",component:()=>r4(()=>import("./Search-85d89572.js"),[],import.meta.url),alias:x3+"/search",beforeEnter:a6},{path:"/tv",name:"tvs",component:()=>r4(()=>import("./Serials-c126582e.js"),["./Serials-c126582e.js","./ListContent-1cbc4b09.js"],import.meta.url),alias:x3+"/tv",beforeEnter:a6},{path:"/movie/:id",name:"movieid",component:()=>r4(()=>import("./FilmId-b7a3cf4e.js"),["./FilmId-b7a3cf4e.js","./Single-e1fb6823.js"],import.meta.url),alias:x3+"/movie/:id",beforeEnter:a6},{path:"/tv/:id",name:"tvid",component:()=>r4(()=>import("./SerialId-326e2887.js"),["./SerialId-326e2887.js","./Single-e1fb6823.js"],import.meta.url),alias:x3+"/tv/:id",beforeEnter:a6},{path:"/settings",name:"settings",component:()=>r4(()=>import("./Settings-e93acf44.js"),[],import.meta.url),alias:x3+"/settings",beforeEnter:a6},{path:"/enter",name:"enter",component:()=>r4(()=>import("./Enter-ed4d7f59.js"),[],import.meta.url),alias:x3+"/enter"}],linkActiveClass:"active",scrollBehavior(){return{top:0}},fullPath:"/cinephile"}),CR=""+new URL("logo-c3e4c801.svg",import.meta.url).href,HR=""+new URL("search-6f0ce7ed.svg",import.meta.url).href;const MR={class:"header__nav container"},VR=c1("img",{src:CR,alt:"",class:"logo__img"},null,-1),LR=c1("img",{src:HR,alt:""},null,-1),bR=["title"],_R=["src"],yR=c1("span",null,"Настройки",-1),wR=c1("span",null,"Выход",-1),xR={class:"header__wrapper"},SR=c1("h4",null,"Ошибка!",-1),NR={__name:"Navbar",setup(c){let e=e0(),t=g1(()=>e.error);const a=u1([{title:"Главная",url:"/"},{title:"Фильмы",url:"/movie"},{title:"Сериалы",url:"/tv"}]),n=u1(!1),i=u1(0);window.addEventListener("scroll",()=>{i.value=window.scrollY});function r(){e.clearError()}let s=zu(),o=g1(()=>s.isUserLogged);s.autoLoginUser();const l=l_();function f(){s.logoutUser().then(()=>{l.push({name:"home"})})}let u=u1(!1);function h(m){m=="user"?(n.value=!1,u.value=!u.value):(u.value=!1,n.value=!n.value)}let d=g1(()=>s.userImg),p=g1(()=>s.userName);return document.addEventListener("click",m=>{let H=m.target.closest(".header__burger");!m.target.closest(".header__user")&&!H&&(u.value=!1,n.value=!1)}),(m,H)=>{const z=f2("router-link"),C=f2("font-awesome-icon");return r1(),w1("header",{id:"headerId",class:F3(["header",{color:i.value>0}])},[c1("nav",MR,[X(z,{class:"logo",to:"/"},{default:A1(()=>[VR]),_:1}),h1(o)?(r1(),w1("button",{key:0,onClick:H[0]||(H[0]=M=>h("menu")),class:"header__burger"},[X(C,{icon:["fas","bars"],size:"lg"})])):S4("",!0),h1(o)?(r1(),w1("ul",{key:1,class:F3(["header__menu",{active:n.value}]),onClick:H[1]||(H[1]=M=>n.value=!1)},[(r1(!0),w1(X1,null,q0(a.value,(M,V)=>(r1(),w1("li",{key:V},[X(z,{to:M.url,class:"header__link"},{default:A1(()=>[$4(a2(M.title),1)]),_:2},1032,["to"])]))),128)),c1("li",null,[X(z,{to:"/search",class:"header__link"},{default:A1(()=>[LR]),_:1})])],2)):S4("",!0),h1(o)?(r1(),w1("div",{key:2,title:h1(p),onClick:H[2]||(H[2]=M=>h("user")),class:"header__user"},[h1(d)?(r1(),w1("img",{key:0,src:h1(d),alt:"",class:"header__user-img"},null,8,_R)):(r1(),x2(C,{key:1,icon:["fas","circle-user"],class:"header__user-icon"})),c1("ul",{class:F3(["header__user-menu",{active:h1(u)}])},[c1("li",null,[X(z,{to:"/settings",class:"header__user-link"},{default:A1(()=>[X(C,{class:"header__enter",icon:["fas","gears"]}),yR]),_:1})]),c1("li",null,[X(z,{onClick:f,to:"/enter",class:"header__user-link"},{default:A1(()=>[X(C,{class:"header__enter",icon:["fas","arrow-right-from-bracket"]}),wR]),_:1})])],2)],8,bR)):(r1(),x2(z,{key:3,to:"/enter",class:"header__link"},{default:A1(()=>[X(C,{class:"header__enter",icon:["fas","arrow-right-to-bracket"]})]),_:1}))]),c1("div",xR,[X(a4,{name:"error"},{default:A1(()=>[P5(c1("div",{onClick:r,class:"header__error"},[SR,c1("p",null,a2(h1(t)),1),X(C,{icon:"fa-solid fa-xmark",class:"header__error-close",onClick:r})],512),[[eb,h1(t)]])]),_:1})])],2)}}},AR={__name:"App",setup(c){return(e,t)=>{const a=f2("router-view");return r1(),w1(X1,null,[X(NR),X(a)],64)}}};/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */function gu(c,e){return e={exports:{}},c(e,e.exports),e.exports}var V9=gu(function(c){const e=Object.prototype.toString,t=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;c.exports=(i,...r)=>{if(!n(i))throw new TypeError("expected the first argument to be an object");if(r.length===0||typeof Symbol!="function"||typeof a!="function")return i;for(let s of r){let o=a(s);for(let l of o)t.call(s,l)&&(i[l]=s[l])}return i};function n(i){return typeof i=="function"||e.call(i)==="[object Object]"||Array.isArray(i)}}),fr=Object.freeze({__proto__:null,default:V9,__moduleExports:V9}),kR=fr&&V9||fr,ur=gu(function(c){const e=Object.prototype.toString,t=r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype",a=c.exports=(r,...s)=>{let o=0;for(i(r)&&(r=s[o++]),r||(r={});o<s.length;o++)if(n(s[o])){for(const l of Object.keys(s[o]))t(l)&&(n(r[l])&&n(s[o][l])?a(r[l],s[o][l]):r[l]=s[o][l]);kR(r,s[o])}return r};function n(r){return typeof r=="function"||e.call(r)==="[object Object]"}function i(r){return typeof r=="object"?r===null:typeof r!="function"}});const J3=typeof window<"u"&&window!==null,hr=TR();function TR(){return J3&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0):!1}const u4={event:"event",observer:"observer"};function c0(c,e){if(!c.length)return;const t=c.indexOf(e);if(t>-1)return c.splice(t,1)}function dr(c,e){if(c.tagName!=="IMG"||!c.getAttribute("data-srcset"))return"";let t=c.getAttribute("data-srcset").trim().split(",");const a=[],i=c.parentNode.offsetWidth*e;let r,s,o;t.forEach(u=>{u=u.trim(),r=u.lastIndexOf(" "),r===-1?(s=u,o=99999):(s=u.substr(0,r),o=parseInt(u.substr(r+1,u.length-r-2),10)),a.push([o,s])}),a.sort((u,h)=>{if(u[0]<h[0])return 1;if(u[0]>h[0])return-1;if(u[0]===h[0]){if(h[1].indexOf(".webp",h[1].length-5)!==-1)return 1;if(u[1].indexOf(".webp",u[1].length-5)!==-1)return-1}return 0});let l="",f;for(let u=0;u<a.length;u++){f=a[u],l=f[1];const h=a[u+1];if(h&&h[0]<i){l=f[1];break}else if(!h){l=f[1];break}}return l}const ER=(c=1)=>J3&&window.devicePixelRatio||c;function IR(){if(!J3)return!1;let c=!0;function e(t,a){const n={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},i=new Image;i.onload=function(){const r=i.width>0&&i.height>0;a(r)},i.onerror=function(){a(!1)},i.src="data:image/webp;base64,"+n[t]}return e("lossy",t=>{c=t}),e("lossless",t=>{c=t}),e("alpha",t=>{c=t}),e("animation",t=>{c=t}),c}function PR(c,e){let t=null,a=0;return function(){if(t)return;const n=Date.now()-a,i=this,r=arguments,s=function(){a=Date.now(),t=!1,c.apply(i,r)};n>=e?s():t=setTimeout(s,e)}}function RR(){if(!J3)return!1;let c=!1;try{const e=Object.defineProperty({},"passive",{get:function(){c=!0}});window.addEventListener("test",ut,e)}catch{}return c}const OR=RR(),DR={on(c,e,t,a=!1){OR?c.addEventListener(e,t,{capture:a,passive:!0}):c.addEventListener(e,t,a)},off(c,e,t,a=!1){c.removeEventListener(e,t,a)}},L9=(c,e,t)=>{let a=new Image;if(!c||!c.src){const n=new Error("image src is required");return t(n)}c.cors&&(a.crossOrigin=c.cors),a.src=c.src,a.onload=function(){e({naturalHeight:a.naturalHeight,naturalWidth:a.naturalWidth,src:a.src}),a=null},a.onerror=function(n){t(n)}},Me=(c,e)=>typeof getComputedStyle<"u"?getComputedStyle(c,null).getPropertyValue(e):c.style[e],FR=c=>Me(c,"overflow")+Me(c,"overflowY")+Me(c,"overflowX"),BR=c=>{if(!J3)return;if(!(c instanceof Element))return window;let e=c;for(;e&&!(e===document.body||e===document.documentElement||!e.parentNode);){if(/(scroll|auto)/.test(FR(e)))return e;e=e.parentNode}return window};function UR(c){return c!==null&&typeof c=="object"}function ut(){}class $R{constructor(e){this.max=e||100,this._caches=[]}has(e){return this._caches.indexOf(e)>-1}add(e){this.has(e)||(this._caches.push(e),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class qR{constructor(e,t,a,n,i,r,s,o,l,f){this.el=e,this.src=t,this.error=a,this.loading=n,this.bindType=i,this.attempt=0,this.cors=o,this.naturalHeight=0,this.naturalWidth=0,this.options=s,this.rect={},this.$parent=r,this.elRenderer=l,this._imageCache=f,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(e){this.performanceData[e]=Date.now()}update(e){const t=this.src;this.src=e.src,this.loading=e.loading,this.error=e.error,this.filter(),t!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const e in this.options.filter)this.options.filter[e](this,this.options)}renderLoading(e){this.state.loading=!0,L9({src:this.loading,cors:this.cors},()=>{this.render("loading",!1),this.state.loading=!1,e()},()=>{e(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)})}load(e=ut){if(this.attempt>this.options.attempt-1&&this.state.error){this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),e();return}if(!(this.state.rendered&&this.state.loaded)){if(this._imageCache.has(this.src))return this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e();this.renderLoading(()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),L9({src:this.src,cors:this.cors},t=>{this.naturalHeight=t.naturalHeight,this.naturalWidth=t.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),e()},t=>{!this.options.silent&&console.error(t),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)})})}}render(e,t){this.elRenderer(this,e,t)}performance(){let e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const mr="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",WR=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],GR={rootMargin:"0px",threshold:0};class jR{constructor({preLoad:e,error:t,throttleWait:a,preLoadTop:n,dispatchEvent:i,loading:r,attempt:s,silent:o=!0,scale:l,listenEvents:f,filter:u,adapter:h,observer:d,observerOptions:p}){this.version='"3.0.0"',this.lazyContainerMananger=null,this.mode=u4.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:o,dispatchEvent:!!i,throttleWait:a||200,preLoad:e||1.3,preLoadTop:n||0,error:t||mr,loading:r||mr,attempt:s||3,scale:l||ER(l),listenEvents:f||WR,supportWebp:IR(),filter:u||{},adapter:h||{},observer:!!d,observerOptions:p||GR},this._initEvent(),this._imageCache=new $R(200),this.lazyLoadHandler=PR(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?u4.observer:u4.event)}performance(){const e=[];return this.ListenerQueue.map(t=>e.push(t.performance())),e}addLazyBox(e){this.ListenerQueue.push(e),J3&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}add(e,t,a){if(this.ListenerQueue.some(o=>o.el===e))return this.update(e,t),O3(this.lazyLoadHandler);let{src:n,loading:i,error:r,cors:s}=this._valueFormatter(t.value);O3(()=>{n=dr(e,this.options.scale)||n,this._observer&&this._observer.observe(e);const o=Object.keys(t.modifiers)[0];let l;o&&(l=t.instance.$refs[o],l=l?l.el||l:document.getElementById(o)),l||(l=BR(e));const f=new qR(e,n,r,i,t.arg,l,this.options,s,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(f),J3&&(this._addListenerTarget(window),this._addListenerTarget(l)),O3(this.lazyLoadHandler)})}update(e,t,a){let{src:n,loading:i,error:r}=this._valueFormatter(t.value);n=dr(e,this.options.scale)||n;const s=this.ListenerQueue.find(o=>o.el===e);s?s.update({src:n,loading:i,error:r}):(e.getAttribute("lazy")!=="loaded"||e.dataset.src!==n)&&this.add(e,t,a),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),O3(this.lazyLoadHandler)}remove(e){if(!e)return;this._observer&&this._observer.unobserve(e);const t=this.ListenerQueue.find(a=>a.el===e);t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),c0(this.ListenerQueue,t),t.$destroy&&t.$destroy())}removeComponent(e){e&&(c0(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}setMode(e){!hr&&e===u4.observer&&(e=u4.event),this.mode=e,e===u4.event?(this._observer&&(this.ListenerQueue.forEach(t=>{this._observer.unobserve(t.el)}),this._observer=null),this.TargetQueue.forEach(t=>{this._initListen(t.el,!0)})):(this.TargetQueue.forEach(t=>{this._initListen(t.el,!1)}),this._initIntersectionObserver())}_addListenerTarget(e){if(!e)return;let t=this.TargetQueue.find(a=>a.el===e);return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===u4.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}_removeListenerTarget(e){this.TargetQueue.forEach((t,a)=>{t.el===e&&(t.childrenCount--,t.childrenCount||(this._initListen(t.el,!1),this.TargetQueue.splice(a,1),t=null))})}_initListen(e,t){this.options.listenEvents.forEach(a=>DR[t?"on":"off"](e,a,this.lazyLoadHandler))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(e,t)=>{this.Event.listeners[e]||(this.Event.listeners[e]=[]),this.Event.listeners[e].push(t)},this.$once=(e,t)=>{const a=this;function n(){a.$off(e,n),t.apply(a,arguments)}this.$on(e,n)},this.$off=(e,t)=>{if(!t){if(!this.Event.listeners[e])return;this.Event.listeners[e].length=0;return}c0(this.Event.listeners[e],t)},this.$emit=(e,t,a)=>{this.Event.listeners[e]&&this.Event.listeners[e].forEach(n=>n(t,a))}}_lazyLoadHandler(){const e=[];this.ListenerQueue.forEach((t,a)=>{(!t.el||!t.el.parentNode||t.state.loaded)&&e.push(t),t.checkInView()&&(t.state.loaded||t.load())}),e.forEach(t=>{c0(this.ListenerQueue,t),t.$destroy&&t.$destroy()})}_initIntersectionObserver(){hr&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(e=>{this._observer.observe(e.el)}))}_observerHandler(e){e.forEach(t=>{t.isIntersecting&&this.ListenerQueue.forEach(a=>{if(a.el===t.target){if(a.state.loaded)return this._observer.unobserve(a.el);a.load()}})})}_elRenderer(e,t,a){if(!e.el)return;const{el:n,bindType:i}=e;let r;switch(t){case"loading":r=e.loading;break;case"error":r=e.error;break;default:r=e.src;break}if(i?n.style[i]='url("'+r+'")':n.getAttribute("src")!==r&&n.setAttribute("src",r),n.setAttribute("lazy",t),this.$emit(t,e,a),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){const s=new CustomEvent(t,{detail:e});n.dispatchEvent(s)}}_valueFormatter(e){return UR(e)?(!e.src&&!this.options.silent&&console.error("Vue Lazyload warning: miss src with "+e),{src:e.src,loading:e.loading||this.options.loading,error:e.error||this.options.error,cors:this.options.cors}):{src:e,loading:this.options.loading,error:this.options.error,cors:this.options.cors}}}const Cu=(c,e)=>{let t=u3({});const a=()=>{t=c.value.getBoundingClientRect()};return{rect:t,checkInView:()=>(a(),J3&&t.top<window.innerHeight*e&&t.bottom>0&&t.left<window.innerWidth*e&&t.right>0)}};var KR=c=>$0({props:{tag:{type:String,default:"div"}},emits:["show"],setup(e,{emit:t,slots:a}){const n=u1(),i=u3({loaded:!1,error:!1,attempt:0}),r=u1(!1),{rect:s,checkInView:o}=Cu(n,c.options.preLoad),l=()=>{r.value=!0,i.loaded=!0,t("show",r.value)},f=g1(()=>({el:n.value,rect:s,checkInView:o,load:l,state:i}));return T6(()=>{c.addLazyBox(f.value),c.lazyLoadHandler()}),F5(()=>{c.removeComponent(f.value)}),()=>{var u;return X(e.tag,{ref:n},[r.value&&((u=a.default)===null||u===void 0?void 0:u.call(a))])}}});class YR{constructor(e){this.lazy=e,e.lazyContainerMananger=this,this._queue=[]}bind(e,t,a){const n=new XR(e,t,a,this.lazy);this._queue.push(n)}update(e,t,a){const n=this._queue.find(i=>i.el===e);n&&n.update(e,t)}unbind(e,t,a){const n=this._queue.find(i=>i.el===e);n&&(n.clear(),c0(this._queue,n))}}const ZR={selector:"img",error:"",loading:""};class XR{constructor(e,t,a,n){this.el=e,this.vnode=a,this.binding=t,this.options={},this.lazy=n,this._queue=[],this.update(e,t)}update(e,t){this.el=e,this.options=ur({},ZR,t.value),this.getImgs().forEach(n=>{this.lazy.add(n,ur({},this.binding,{value:{src:n.getAttribute("data-src")||n.dataset.src,error:n.getAttribute("data-error")||n.dataset.error||this.options.error,loading:n.getAttribute("data-loading")||n.dataset.loading||this.options.loading}}),this.vnode)})}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){this.getImgs().forEach(t=>this.lazy.remove(t)),this.vnode=null,this.binding=null,this.lazy=null}}var QR=c=>$0({setup(e,{slots:t}){const a=u1(),n=u3({src:"",error:"",loading:"",attempt:c.options.attempt}),i=u3({loaded:!1,error:!1,attempt:0}),{rect:r,checkInView:s}=Cu(a,c.options.preLoad),o=u1(""),l=(h=ut)=>{if(i.attempt>n.attempt-1&&i.error)return c.options.silent||console.log(`VueLazyload log: ${n.src} tried too more than ${n.attempt} times`),h();const d=n.src;L9({src:d},({src:p})=>{o.value=p,i.loaded=!0},()=>{i.attempt++,o.value=n.error,i.error=!0})},f=g1(()=>({el:a.value,rect:r,checkInView:s,load:l,state:i}));T6(()=>{c.addLazyBox(f.value),c.lazyLoadHandler()}),F5(()=>{c.removeComponent(f.value)});const u=()=>{const{src:h,loading:d,error:p}=c._valueFormatter(e.src);i.loaded=!1,n.src=h,n.error=p,n.loading=d,o.value=n.loading};return q3(()=>e.src,()=>{u(),c.addLazyBox(f.value),c.lazyLoadHandler()},{immediate:!0}),()=>{var h;return X(e.tag||"img",{src:o.value,ref:a},[(h=t.default)===null||h===void 0?void 0:h.call(t)])}}}),JR={install(c,e={}){const t=new jR(e),a=new YR(t);if(Number(c.version.split(".")[0])<3)return new Error("Vue version at least 3.0");c.config.globalProperties.$Lazyload=t,c.provide("Lazyload",t),e.lazyComponent&&c.component("lazy-component",KR(t)),e.lazyImage&&c.component("lazy-image",QR(t)),c.directive("lazy",{beforeMount:t.add.bind(t),beforeUpdate:t.update.bind(t),updated:t.lazyLoadHandler.bind(t),unmounted:t.remove.bind(t)}),c.directive("lazy-container",{beforeMount:a.bind.bind(a),updated:a.update.bind(a),unmounted:a.unbind.bind(a)})}};function pr(c,e){var t=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),t.push.apply(t,a)}return t}function B(c){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pr(Object(t),!0).forEach(function(a){q1(c,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(t)):pr(Object(t)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(t,a))})}return c}function b5(c){"@babel/helpers - typeof";return b5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b5(c)}function eO(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function vr(c,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function cO(c,e,t){return e&&vr(c.prototype,e),t&&vr(c,t),Object.defineProperty(c,"prototype",{writable:!1}),c}function q1(c,e,t){return e in c?Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[e]=t,c}function ht(c,e){return aO(c)||iO(c,e)||Hu(c,e)||sO()}function c8(c){return tO(c)||nO(c)||Hu(c)||rO()}function tO(c){if(Array.isArray(c))return b9(c)}function aO(c){if(Array.isArray(c))return c}function nO(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function iO(c,e){var t=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(t!=null){var a=[],n=!0,i=!1,r,s;try{for(t=t.call(c);!(n=(r=t.next()).done)&&(a.push(r.value),!(e&&a.length===e));n=!0);}catch(o){i=!0,s=o}finally{try{!n&&t.return!=null&&t.return()}finally{if(i)throw s}}return a}}function Hu(c,e){if(c){if(typeof c=="string")return b9(c,e);var t=Object.prototype.toString.call(c).slice(8,-1);if(t==="Object"&&c.constructor&&(t=c.constructor.name),t==="Map"||t==="Set")return Array.from(c);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b9(c,e)}}function b9(c,e){(e==null||e>c.length)&&(e=c.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=c[t];return a}function rO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zr=function(){},dt={},Mu={},Vu=null,Lu={mark:zr,measure:zr};try{typeof window<"u"&&(dt=window),typeof document<"u"&&(Mu=document),typeof MutationObserver<"u"&&(Vu=MutationObserver),typeof performance<"u"&&(Lu=performance)}catch{}var oO=dt.navigator||{},gr=oO.userAgent,Cr=gr===void 0?"":gr,e4=dt,S1=Mu,Hr=Vu,y8=Lu;e4.document;var M3=!!S1.documentElement&&!!S1.head&&typeof S1.addEventListener=="function"&&typeof S1.createElement=="function",bu=~Cr.indexOf("MSIE")||~Cr.indexOf("Trident/"),w8,x8,S8,N8,A8,p3="___FONT_AWESOME___",_9=16,_u="fa",yu="svg-inline--fa",B4="data-fa-i2svg",y9="data-fa-pseudo-element",lO="data-fa-pseudo-element-pending",mt="data-prefix",pt="data-icon",Mr="fontawesome-i2svg",fO="async",uO=["HTML","HEAD","STYLE","SCRIPT"],wu=function(){try{return!0}catch{return!1}}(),x1="classic",k1="sharp",vt=[x1,k1];function t8(c){return new Proxy(c,{get:function(t,a){return a in t?t[a]:t[x1]}})}var O0=t8((w8={},q1(w8,x1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),q1(w8,k1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),w8)),D0=t8((x8={},q1(x8,x1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),q1(x8,k1,{solid:"fass",regular:"fasr",light:"fasl"}),x8)),F0=t8((S8={},q1(S8,x1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),q1(S8,k1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),S8)),hO=t8((N8={},q1(N8,x1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),q1(N8,k1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),N8)),dO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,xu="fa-layers-text",mO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,pO=t8((A8={},q1(A8,x1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),q1(A8,k1,{900:"fass",400:"fasr",300:"fasl"}),A8)),Su=[1,2,3,4,5,6,7,8,9,10],vO=Su.concat([11,12,13,14,15,16,17,18,19,20]),zO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],M4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B0=new Set;Object.keys(D0[x1]).map(B0.add.bind(B0));Object.keys(D0[k1]).map(B0.add.bind(B0));var gO=[].concat(vt,c8(B0),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M4.GROUP,M4.SWAP_OPACITY,M4.PRIMARY,M4.SECONDARY]).concat(Su.map(function(c){return"".concat(c,"x")})).concat(vO.map(function(c){return"w-".concat(c)})),p0=e4.FontAwesomeConfig||{};function CO(c){var e=S1.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function HO(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(S1&&typeof S1.querySelector=="function"){var MO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];MO.forEach(function(c){var e=ht(c,2),t=e[0],a=e[1],n=HO(CO(t));n!=null&&(p0[a]=n)})}var Nu={styleDefault:"solid",familyDefault:"classic",cssPrefix:_u,replacementClass:yu,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};p0.familyPrefix&&(p0.cssPrefix=p0.familyPrefix);var S6=B(B({},Nu),p0);S6.autoReplaceSvg||(S6.observeMutations=!1);var W={};Object.keys(Nu).forEach(function(c){Object.defineProperty(W,c,{enumerable:!0,set:function(t){S6[c]=t,v0.forEach(function(a){return a(W)})},get:function(){return S6[c]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){S6.cssPrefix=e,v0.forEach(function(t){return t(W)})},get:function(){return S6.cssPrefix}});e4.FontAwesomeConfig=W;var v0=[];function VO(c){return v0.push(c),function(){v0.splice(v0.indexOf(c),1)}}var S3=_9,Q2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function LO(c){if(!(!c||!M3)){var e=S1.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var t=S1.head.childNodes,a=null,n=t.length-1;n>-1;n--){var i=t[n],r=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(a=i)}return S1.head.insertBefore(e,a),c}}var bO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U0(){for(var c=12,e="";c-- >0;)e+=bO[Math.random()*62|0];return e}function F6(c){for(var e=[],t=(c||[]).length>>>0;t--;)e[t]=c[t];return e}function zt(c){return c.classList?F6(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Au(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _O(c){return Object.keys(c||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Au(c[t]),'" ')},"").trim()}function h7(c){return Object.keys(c||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(c[t].trim(),";")},"")}function gt(c){return c.size!==Q2.size||c.x!==Q2.x||c.y!==Q2.y||c.rotate!==Q2.rotate||c.flipX||c.flipY}function yO(c){var e=c.transform,t=c.containerWidth,a=c.iconWidth,n={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(i," ").concat(r," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:n,inner:o,path:l}}function wO(c){var e=c.transform,t=c.width,a=t===void 0?_9:t,n=c.height,i=n===void 0?_9:n,r=c.startCentered,s=r===void 0?!1:r,o="";return s&&bu?o+="translate(".concat(e.x/S3-a/2,"em, ").concat(e.y/S3-i/2,"em) "):s?o+="translate(calc(-50% + ".concat(e.x/S3,"em), calc(-50% + ").concat(e.y/S3,"em)) "):o+="translate(".concat(e.x/S3,"em, ").concat(e.y/S3,"em) "),o+="scale(".concat(e.size/S3*(e.flipX?-1:1),", ").concat(e.size/S3*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var xO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ku(){var c=_u,e=yu,t=W.cssPrefix,a=W.replacementClass,n=xO;if(t!==c||a!==e){var i=new RegExp("\\.".concat(c,"\\-"),"g"),r=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");n=n.replace(i,".".concat(t,"-")).replace(r,"--".concat(t,"-")).replace(s,".".concat(a))}return n}var Vr=!1;function Ve(){W.autoAddCss&&!Vr&&(LO(ku()),Vr=!0)}var SO={mixout:function(){return{dom:{css:ku,insertCss:Ve}}},hooks:function(){return{beforeDOMElementCreation:function(){Ve()},beforeI2svg:function(){Ve()}}}},v3=e4||{};v3[p3]||(v3[p3]={});v3[p3].styles||(v3[p3].styles={});v3[p3].hooks||(v3[p3].hooks={});v3[p3].shims||(v3[p3].shims=[]);var R2=v3[p3],Tu=[],NO=function c(){S1.removeEventListener("DOMContentLoaded",c),_5=1,Tu.map(function(e){return e()})},_5=!1;M3&&(_5=(S1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S1.readyState),_5||S1.addEventListener("DOMContentLoaded",NO));function AO(c){M3&&(_5?setTimeout(c,0):Tu.push(c))}function a8(c){var e=c.tag,t=c.attributes,a=t===void 0?{}:t,n=c.children,i=n===void 0?[]:n;return typeof c=="string"?Au(c):"<".concat(e," ").concat(_O(a),">").concat(i.map(a8).join(""),"</").concat(e,">")}function Lr(c,e,t){if(c&&c[e]&&c[e][t])return{prefix:e,iconName:t,icon:c[e][t]}}var kO=function(e,t){return function(a,n,i,r){return e.call(t,a,n,i,r)}},Le=function(e,t,a,n){var i=Object.keys(e),r=i.length,s=n!==void 0?kO(t,n):t,o,l,f;for(a===void 0?(o=1,f=e[i[0]]):(o=0,f=a);o<r;o++)l=i[o],f=s(f,e[l],l,e);return f};function TO(c){for(var e=[],t=0,a=c.length;t<a;){var n=c.charCodeAt(t++);if(n>=55296&&n<=56319&&t<a){var i=c.charCodeAt(t++);(i&64512)==56320?e.push(((n&1023)<<10)+(i&1023)+65536):(e.push(n),t--)}else e.push(n)}return e}function w9(c){var e=TO(c);return e.length===1?e[0].toString(16):null}function EO(c,e){var t=c.length,a=c.charCodeAt(e),n;return a>=55296&&a<=56319&&t>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(a-55296)*1024+n-56320+65536:a}function br(c){return Object.keys(c).reduce(function(e,t){var a=c[t],n=!!a.icon;return n?e[a.iconName]=a.icon:e[t]=a,e},{})}function x9(c,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,n=a===void 0?!1:a,i=br(e);typeof R2.hooks.addPack=="function"&&!n?R2.hooks.addPack(c,br(e)):R2.styles[c]=B(B({},R2.styles[c]||{}),i),c==="fas"&&x9("fa",e)}var k8,T8,E8,o6=R2.styles,IO=R2.shims,PO=(k8={},q1(k8,x1,Object.values(F0[x1])),q1(k8,k1,Object.values(F0[k1])),k8),Ct=null,Eu={},Iu={},Pu={},Ru={},Ou={},RO=(T8={},q1(T8,x1,Object.keys(O0[x1])),q1(T8,k1,Object.keys(O0[k1])),T8);function OO(c){return~gO.indexOf(c)}function DO(c,e){var t=e.split("-"),a=t[0],n=t.slice(1).join("-");return a===c&&n!==""&&!OO(n)?n:null}var Du=function(){var e=function(i){return Le(o6,function(r,s,o){return r[o]=Le(s,i,{}),r},{})};Eu=e(function(n,i,r){if(i[3]&&(n[i[3]]=r),i[2]){var s=i[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){n[o.toString(16)]=r})}return n}),Iu=e(function(n,i,r){if(n[r]=r,i[2]){var s=i[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){n[o]=r})}return n}),Ou=e(function(n,i,r){var s=i[2];return n[r]=r,s.forEach(function(o){n[o]=r}),n});var t="far"in o6||W.autoFetchSvg,a=Le(IO,function(n,i){var r=i[0],s=i[1],o=i[2];return s==="far"&&!t&&(s="fas"),typeof r=="string"&&(n.names[r]={prefix:s,iconName:o}),typeof r=="number"&&(n.unicodes[r.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});Pu=a.names,Ru=a.unicodes,Ct=d7(W.styleDefault,{family:W.familyDefault})};VO(function(c){Ct=d7(c.styleDefault,{family:W.familyDefault})});Du();function Ht(c,e){return(Eu[c]||{})[e]}function FO(c,e){return(Iu[c]||{})[e]}function V4(c,e){return(Ou[c]||{})[e]}function Fu(c){return Pu[c]||{prefix:null,iconName:null}}function BO(c){var e=Ru[c],t=Ht("fas",c);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function c4(){return Ct}var Mt=function(){return{prefix:null,iconName:null,rest:[]}};function d7(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,a=t===void 0?x1:t,n=O0[a][c],i=D0[a][c]||D0[a][n],r=c in R2.styles?c:null;return i||r||null}var _r=(E8={},q1(E8,x1,Object.keys(F0[x1])),q1(E8,k1,Object.keys(F0[k1])),E8);function m7(c){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,i=(e={},q1(e,x1,"".concat(W.cssPrefix,"-").concat(x1)),q1(e,k1,"".concat(W.cssPrefix,"-").concat(k1)),e),r=null,s=x1;(c.includes(i[x1])||c.some(function(l){return _r[x1].includes(l)}))&&(s=x1),(c.includes(i[k1])||c.some(function(l){return _r[k1].includes(l)}))&&(s=k1);var o=c.reduce(function(l,f){var u=DO(W.cssPrefix,f);if(o6[f]?(f=PO[s].includes(f)?hO[s][f]:f,r=f,l.prefix=f):RO[s].indexOf(f)>-1?(r=f,l.prefix=d7(f,{family:s})):u?l.iconName=u:f!==W.replacementClass&&f!==i[x1]&&f!==i[k1]&&l.rest.push(f),!n&&l.prefix&&l.iconName){var h=r==="fa"?Fu(l.iconName):{},d=V4(l.prefix,l.iconName);h.prefix&&(r=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!o6.far&&o6.fas&&!W.autoFetchSvg&&(l.prefix="fas")}return l},Mt());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===k1&&(o6.fass||W.autoFetchSvg)&&(o.prefix="fass",o.iconName=V4(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=c4()||"fas"),o}var UO=function(){function c(){eO(this,c),this.definitions={}}return cO(c,[{key:"add",value:function(){for(var t=this,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(s){t.definitions[s]=B(B({},t.definitions[s]||{}),r[s]),x9(s,r[s]);var o=F0[x1][s];o&&x9(o,r[s]),Du()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var n=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(n).map(function(i){var r=n[i],s=r.prefix,o=r.iconName,l=r.icon,f=l[2];t[s]||(t[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(t[s][u]=l)}),t[s][o]=l}),t}}]),c}(),yr=[],l6={},H6={},$O=Object.keys(H6);function qO(c,e){var t=e.mixoutsTo;return yr=c,l6={},Object.keys(H6).forEach(function(a){$O.indexOf(a)===-1&&delete H6[a]}),yr.forEach(function(a){var n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(function(r){typeof n[r]=="function"&&(t[r]=n[r]),b5(n[r])==="object"&&Object.keys(n[r]).forEach(function(s){t[r]||(t[r]={}),t[r][s]=n[r][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(r){l6[r]||(l6[r]=[]),l6[r].push(i[r])})}a.provides&&a.provides(H6)}),t}function S9(c,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),n=2;n<t;n++)a[n-2]=arguments[n];var i=l6[c]||[];return i.forEach(function(r){e=r.apply(null,[e].concat(a))}),e}function U4(c){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];var n=l6[c]||[];n.forEach(function(i){i.apply(null,t)})}function z3(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return H6[c]?H6[c].apply(null,e):void 0}function N9(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,t=c.prefix||c4();if(e)return e=V4(t,e)||e,Lr(Bu.definitions,t,e)||Lr(R2.styles,t,e)}var Bu=new UO,WO=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,U4("noAuto")},GO={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M3?(U4("beforeI2svg",e),z3("pseudoElements2svg",e),z3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,AO(function(){KO({autoReplaceSvgRoot:t}),U4("watch",e)})}},jO={icon:function(e){if(e===null)return null;if(b5(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:V4(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=d7(e[0]);return{prefix:a,iconName:V4(a,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(W.cssPrefix,"-"))>-1||e.match(dO))){var n=m7(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||c4(),iconName:V4(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var i=c4();return{prefix:i,iconName:V4(i,e)||e}}}},L2={noAuto:WO,config:W,dom:GO,parse:jO,library:Bu,findIconDefinition:N9,toHtml:a8},KO=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,a=t===void 0?S1:t;(Object.keys(R2.styles).length>0||W.autoFetchSvg)&&M3&&W.autoReplaceSvg&&L2.dom.i2svg({node:a})};function p7(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(a){return a8(a)})}}),Object.defineProperty(c,"node",{get:function(){if(M3){var a=S1.createElement("div");return a.innerHTML=c.html,a.children}}}),c}function YO(c){var e=c.children,t=c.main,a=c.mask,n=c.attributes,i=c.styles,r=c.transform;if(gt(r)&&t.found&&!a.found){var s=t.width,o=t.height,l={x:s/o/2,y:.5};n.style=h7(B(B({},i),{},{"transform-origin":"".concat(l.x+r.x/16,"em ").concat(l.y+r.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function ZO(c){var e=c.prefix,t=c.iconName,a=c.children,n=c.attributes,i=c.symbol,r=i===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},n),{},{id:r}),children:a}]}]}function Vt(c){var e=c.icons,t=e.main,a=e.mask,n=c.prefix,i=c.iconName,r=c.transform,s=c.symbol,o=c.title,l=c.maskId,f=c.titleId,u=c.extra,h=c.watchable,d=h===void 0?!1:h,p=a.found?a:t,m=p.width,H=p.height,z=n==="fak",C=[W.replacementClass,i?"".concat(W.cssPrefix,"-").concat(i):""].filter(function(b){return u.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(u.classes).join(" "),M={children:[],attributes:B(B({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(H)})},V=z&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/H*16*.0625,"em")}:{};d&&(M.attributes[B4]=""),o&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||U0())},children:[o]}),delete M.attributes.title);var w=B(B({},M),{},{prefix:n,iconName:i,main:t,mask:a,maskId:l,transform:r,symbol:s,styles:B(B({},V),u.styles)}),F=a.found&&t.found?z3("generateAbstractMask",w)||{children:[],attributes:{}}:z3("generateAbstractIcon",w)||{children:[],attributes:{}},P=F.children,x=F.attributes;return w.children=P,w.attributes=x,s?ZO(w):YO(w)}function wr(c){var e=c.content,t=c.width,a=c.height,n=c.transform,i=c.title,r=c.extra,s=c.watchable,o=s===void 0?!1:s,l=B(B(B({},r.attributes),i?{title:i}:{}),{},{class:r.classes.join(" ")});o&&(l[B4]="");var f=B({},r.styles);gt(n)&&(f.transform=wO({transform:n,startCentered:!0,width:t,height:a}),f["-webkit-transform"]=f.transform);var u=h7(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function XO(c){var e=c.content,t=c.title,a=c.extra,n=B(B(B({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),i=h7(a.styles);i.length>0&&(n.style=i);var r=[];return r.push({tag:"span",attributes:n,children:[e]}),t&&r.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),r}var be=R2.styles;function A9(c){var e=c[0],t=c[1],a=c.slice(4),n=ht(a,1),i=n[0],r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(M4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(M4.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(M4.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:r}}var QO={found:!1,width:512,height:512};function JO(c,e){!wu&&!W.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function k9(c,e){var t=e;return e==="fa"&&W.styleDefault!==null&&(e=c4()),new Promise(function(a,n){if(z3("missingIconAbstract"),t==="fa"){var i=Fu(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&be[e]&&be[e][c]){var r=be[e][c];return a(A9(r))}JO(c,e),a(B(B({},QO),{},{icon:W.showMissingIcons&&c?z3("missingIconAbstract")||{}:{}}))})}var xr=function(){},T9=W.measurePerformance&&y8&&y8.mark&&y8.measure?y8:{mark:xr,measure:xr},t0='FA "6.4.2"',eD=function(e){return T9.mark("".concat(t0," ").concat(e," begins")),function(){return Uu(e)}},Uu=function(e){T9.mark("".concat(t0," ").concat(e," ends")),T9.measure("".concat(t0," ").concat(e),"".concat(t0," ").concat(e," begins"),"".concat(t0," ").concat(e," ends"))},Lt={begin:eD,end:Uu},q8=function(){};function Sr(c){var e=c.getAttribute?c.getAttribute(B4):null;return typeof e=="string"}function cD(c){var e=c.getAttribute?c.getAttribute(mt):null,t=c.getAttribute?c.getAttribute(pt):null;return e&&t}function tD(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(W.replacementClass)}function aD(){if(W.autoReplaceSvg===!0)return W8.replace;var c=W8[W.autoReplaceSvg];return c||W8.replace}function nD(c){return S1.createElementNS("http://www.w3.org/2000/svg",c)}function iD(c){return S1.createElement(c)}function $u(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,a=t===void 0?c.tag==="svg"?nD:iD:t;if(typeof c=="string")return S1.createTextNode(c);var n=a(c.tag);Object.keys(c.attributes||[]).forEach(function(r){n.setAttribute(r,c.attributes[r])});var i=c.children||[];return i.forEach(function(r){n.appendChild($u(r,{ceFn:a}))}),n}function rD(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var W8={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(n){t.parentNode.insertBefore($u(n),t)}),t.getAttribute(B4)===null&&W.keepOriginalSource){var a=S1.createComment(rD(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(e){var t=e[0],a=e[1];if(~zt(t).indexOf(W.replacementClass))return W8.replace(e);var n=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,o){return o===W.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var r=a.map(function(s){return a8(s)}).join(`
`);t.setAttribute(B4,""),t.innerHTML=r}};function Nr(c){c()}function qu(c,e){var t=typeof e=="function"?e:q8;if(c.length===0)t();else{var a=Nr;W.mutateApproach===fO&&(a=e4.requestAnimationFrame||Nr),a(function(){var n=aD(),i=Lt.begin("mutate");c.map(n),i(),t()})}}var bt=!1;function Wu(){bt=!0}function E9(){bt=!1}var y5=null;function Ar(c){if(Hr&&W.observeMutations){var e=c.treeCallback,t=e===void 0?q8:e,a=c.nodeCallback,n=a===void 0?q8:a,i=c.pseudoElementsCallback,r=i===void 0?q8:i,s=c.observeMutationsRoot,o=s===void 0?S1:s;y5=new Hr(function(l){if(!bt){var f=c4();F6(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Sr(u.addedNodes[0])&&(W.searchPseudoElements&&r(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&W.searchPseudoElements&&r(u.target.parentNode),u.type==="attributes"&&Sr(u.target)&&~zO.indexOf(u.attributeName))if(u.attributeName==="class"&&cD(u.target)){var h=m7(zt(u.target)),d=h.prefix,p=h.iconName;u.target.setAttribute(mt,d||f),p&&u.target.setAttribute(pt,p)}else tD(u.target)&&n(u.target)})}}),M3&&y5.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sD(){y5&&y5.disconnect()}function oD(c){var e=c.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(a,n){var i=n.split(":"),r=i[0],s=i.slice(1);return r&&s.length>0&&(a[r]=s.join(":").trim()),a},{})),t}function lD(c){var e=c.getAttribute("data-prefix"),t=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",n=m7(zt(c));return n.prefix||(n.prefix=c4()),e&&t&&(n.prefix=e,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&a.length>0&&(n.iconName=FO(n.prefix,c.innerText)||Ht(n.prefix,w9(c.innerText))),!n.iconName&&W.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function fD(c){var e=F6(c.attributes).reduce(function(n,i){return n.name!=="class"&&n.name!=="style"&&(n[i.name]=i.value),n},{}),t=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return W.autoA11y&&(t?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(a||U0()):(e["aria-hidden"]="true",e.focusable="false")),e}function uD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Q2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kr(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=lD(c),a=t.iconName,n=t.prefix,i=t.rest,r=fD(c),s=S9("parseNodeAttributes",{},c),o=e.styleParser?oD(c):[];return B({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:Q2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:r}},s)}var hD=R2.styles;function Gu(c){var e=W.autoReplaceSvg==="nest"?kr(c,{styleParser:!1}):kr(c);return~e.extra.classes.indexOf(xu)?z3("generateLayersText",c,e):z3("generateSvgReplacementMutation",c,e)}var t4=new Set;vt.map(function(c){t4.add("fa-".concat(c))});Object.keys(O0[x1]).map(t4.add.bind(t4));Object.keys(O0[k1]).map(t4.add.bind(t4));t4=c8(t4);function Tr(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M3)return Promise.resolve();var t=S1.documentElement.classList,a=function(u){return t.add("".concat(Mr,"-").concat(u))},n=function(u){return t.remove("".concat(Mr,"-").concat(u))},i=W.autoFetchSvg?t4:vt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(hD));i.includes("fa")||i.push("fa");var r=[".".concat(xu,":not([").concat(B4,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(B4,"])")})).join(", ");if(r.length===0)return Promise.resolve();var s=[];try{s=F6(c.querySelectorAll(r))}catch{}if(s.length>0)a("pending"),n("complete");else return Promise.resolve();var o=Lt.begin("onTree"),l=s.reduce(function(f,u){try{var h=Gu(u);h&&f.push(h)}catch(d){wu||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){qu(h,function(){a("active"),a("complete"),n("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(h){o(),u(h)})})}function dD(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gu(c).then(function(t){t&&qu([t],e)})}function mD(c){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:N9(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:N9(n||{})),c(a,B(B({},t),{},{mask:n}))}}var pD=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,n=a===void 0?Q2:a,i=t.symbol,r=i===void 0?!1:i,s=t.mask,o=s===void 0?null:s,l=t.maskId,f=l===void 0?null:l,u=t.title,h=u===void 0?null:u,d=t.titleId,p=d===void 0?null:d,m=t.classes,H=m===void 0?[]:m,z=t.attributes,C=z===void 0?{}:z,M=t.styles,V=M===void 0?{}:M;if(e){var w=e.prefix,F=e.iconName,P=e.icon;return p7(B({type:"icon"},e),function(){return U4("beforeDOMElementCreation",{iconDefinition:e,params:t}),W.autoA11y&&(h?C["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(p||U0()):(C["aria-hidden"]="true",C.focusable="false")),Vt({icons:{main:A9(P),mask:o?A9(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:F,transform:B(B({},Q2),n),symbol:r,title:h,maskId:f,titleId:p,extra:{attributes:C,styles:V,classes:H}})})}},vD={mixout:function(){return{icon:mD(pD)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Tr,t.nodeCallback=dD,t}}},provides:function(e){e.i2svg=function(t){var a=t.node,n=a===void 0?S1:a,i=t.callback,r=i===void 0?function(){}:i;return Tr(n,r)},e.generateSvgReplacementMutation=function(t,a){var n=a.iconName,i=a.title,r=a.titleId,s=a.prefix,o=a.transform,l=a.symbol,f=a.mask,u=a.maskId,h=a.extra;return new Promise(function(d,p){Promise.all([k9(n,s),f.iconName?k9(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var H=ht(m,2),z=H[0],C=H[1];d([t,Vt({icons:{main:z,mask:C},prefix:s,iconName:n,transform:o,symbol:l,maskId:u,title:i,titleId:r,extra:h,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){var a=t.children,n=t.attributes,i=t.main,r=t.transform,s=t.styles,o=h7(s);o.length>0&&(n.style=o);var l;return gt(r)&&(l=z3("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:n}}}},zD={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.classes,i=n===void 0?[]:n;return p7({type:"layer"},function(){U4("beforeDOMElementCreation",{assembler:t,params:a});var r=[];return t(function(s){Array.isArray(s)?s.map(function(o){r=r.concat(o.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(c8(i)).join(" ")},children:r}]})}}}},gD={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.title,i=n===void 0?null:n,r=a.classes,s=r===void 0?[]:r,o=a.attributes,l=o===void 0?{}:o,f=a.styles,u=f===void 0?{}:f;return p7({type:"counter",content:t},function(){return U4("beforeDOMElementCreation",{content:t,params:a}),XO({content:t.toString(),title:i,extra:{attributes:l,styles:u,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(c8(s))}})})}}}},CD={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,i=n===void 0?Q2:n,r=a.title,s=r===void 0?null:r,o=a.classes,l=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,h=a.styles,d=h===void 0?{}:h;return p7({type:"text",content:t},function(){return U4("beforeDOMElementCreation",{content:t,params:a}),wr({content:t,transform:B(B({},Q2),i),title:s,extra:{attributes:u,styles:d,classes:["".concat(W.cssPrefix,"-layers-text")].concat(c8(l))}})})}}},provides:function(e){e.generateLayersText=function(t,a){var n=a.title,i=a.transform,r=a.extra,s=null,o=null;if(bu){var l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();s=f.width/l,o=f.height/l}return W.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,wr({content:t.innerHTML,width:s,height:o,transform:i,title:n,extra:r,watchable:!0})])}}},HD=new RegExp('"',"ug"),Er=[1105920,1112319];function MD(c){var e=c.replace(HD,""),t=EO(e,0),a=t>=Er[0]&&t<=Er[1],n=e.length===2?e[0]===e[1]:!1;return{value:w9(n?e[0]:e),isSecondary:a||n}}function Ir(c,e){var t="".concat(lO).concat(e.replace(":","-"));return new Promise(function(a,n){if(c.getAttribute(t)!==null)return a();var i=F6(c.children),r=i.filter(function(P){return P.getAttribute(y9)===e})[0],s=e4.getComputedStyle(c,e),o=s.getPropertyValue("font-family").match(mO),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(r&&!o)return c.removeChild(r),a();if(o&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?k1:x1,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?D0[h][o[2].toLowerCase()]:pO[h][l],p=MD(u),m=p.value,H=p.isSecondary,z=o[0].startsWith("FontAwesome"),C=Ht(d,m),M=C;if(z){var V=BO(m);V.iconName&&V.prefix&&(C=V.iconName,d=V.prefix)}if(C&&!H&&(!r||r.getAttribute(mt)!==d||r.getAttribute(pt)!==M)){c.setAttribute(t,M),r&&c.removeChild(r);var w=uD(),F=w.extra;F.attributes[y9]=e,k9(C,d).then(function(P){var x=Vt(B(B({},w),{},{icons:{main:P,mask:Mt()},prefix:d,iconName:M,extra:F,watchable:!0})),b=S1.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(b,c.firstChild):c.appendChild(b),b.outerHTML=x.map(function(G){return a8(G)}).join(`