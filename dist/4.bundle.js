(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{11:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},12:function(t,e,n){(function(n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){e=e(t,t.document,Date);t.lazySizes=e,"object"==r(n)&&n.exports&&(n.exports=e)}("undefined"!=typeof window?window:{},function(r,d,i){"use strict";var h,p;if(!function(){var t,e={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in p=r.lazySizesConfig||r.lazysizesConfig||{},e)t in p||(p[t]=e[t])}(),!d||!d.getElementsByClassName)return{init:function(){},cfg:p,noSupport:!0};function a(t,e){return _[e]||(_[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),_[e].test(t[E]("class")||"")&&_[e]}function l(t,e){a(t,e)||t.setAttribute("class",(t[E]("class")||"").trim()+" "+e)}function u(t,e){(e=a(t,e))&&t.setAttribute("class",(t[E]("class")||"").replace(e," "))}function f(e,n,t){var r=t?z:"removeEventListener";t&&f(e,n),L.forEach(function(t){e[r](t,n)})}function y(t,e,n,r,o){var i=d.createEvent("Event");return(n=n||{}).instance=h,i.initEvent(e,!r,!o),i.detail=n,t.dispatchEvent(i),i}function m(t,e){var n;!w&&(n=r.picturefill||p.pf)?(e&&e.src&&!t[E]("srcset")&&t.setAttribute("srcset",e.src),n({reevaluate:!0,elements:[t]})):e&&e.src&&(t.src=e.src)}function v(t,e){return(getComputedStyle(t,null)||{})[e]}function o(t,e,n){for(n=n||t.offsetWidth;n<p.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n}var n,c,e,s,g,b=d.documentElement,w=r.HTMLPictureElement,z="addEventListener",E="getAttribute",t=r[z].bind(r),C=r.setTimeout,x=r.requestAnimationFrame||C,A=r.requestIdleCallback,S=/^picture$/i,L=["load","error","lazyincluded","_lazyloaded"],_={},N=Array.prototype.forEach,M=(s=[],g=e=[],F._lsFlush=j,F);function j(){var t=g;for(g=e.length?s:e,c=!(n=!0);t.length;)t.shift()();n=!1}function F(t,e){n&&!e?t.apply(this,arguments):(g.push(t),c||(c=!0,(d.hidden?C:x)(j)))}function O(n,t){return t?function(){M(n)}:function(){var t=this,e=arguments;M(function(){n.apply(t,e)})}}function k(t){function e(){r=null,t()}function n(){var t=i.now()-o;t<99?C(n,99-t):(A||e)(e)}var r,o;return function(){o=i.now(),r=r||C(n,99)}}var P,T,R,W,B,I,G,H,D,$,q,U,J,Q,Y,K,V,X,Z,tt,et,nt,rt,ot,it,at,ct,st,lt,ut,ft=(Z=/^img$/i,tt=/^iframe$/i,et="onscroll"in r&&!/(gle|ing)bot/.test(navigator.userAgent),ot=-1,J=pt,Y=rt=nt=0,K=p.throttleDelay,V=p.ricTimeout,X=A&&49<V?function(){A(yt,{timeout:V}),V!==p.ricTimeout&&(V=p.ricTimeout)}:O(function(){C(yt)},!0),at=O(mt),ct=function(t){at({target:t.target})},st=O(function(e,t,n,r,o){var i,a,c,s;(c=y(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?l(e,p.autosizesClass):e.setAttribute("sizes",r)),n=e[E](p.srcsetAttr),r=e[E](p.srcAttr),o&&(a=(i=e.parentNode)&&S.test(i.nodeName||"")),s=t.firesLoad||"src"in e&&(n||r||a),c={target:e},l(e,p.loadingClass),s&&(clearTimeout(R),R=C(dt,2500),f(e,ct,!0)),a&&N.call(i.getElementsByTagName("source"),vt),n?e.setAttribute("srcset",n):r&&!a&&(tt.test(e.nodeName)?function(e,n){try{e.contentWindow.location.replace(n)}catch(t){e.src=n}}(e,r):e.src=r),o&&(n||a)&&m(e,{src:r})),e._lazyRace&&delete e._lazyRace,u(e,p.lazyClass),M(function(){var t=e.complete&&1<e.naturalWidth;s&&!t||(t&&l(e,"ls-is-cached"),mt(c),e._lazyCache=!0,C(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&rt--},!0)}),ut=k(function(){p.loadMode=3,it()}),{_:function(){B=i.now(),h.elements=d.getElementsByClassName(p.lazyClass),P=d.getElementsByClassName(p.lazyClass+" "+p.preloadClass),t("scroll",it,!0),t("resize",it,!0),t("pageshow",function(t){var e;!t.persisted||(e=d.querySelectorAll("."+p.loadingClass)).length&&e.forEach&&x(function(){e.forEach(function(t){t.complete&&lt(t)})})}),r.MutationObserver?new MutationObserver(it).observe(b,{childList:!0,subtree:!0,attributes:!0}):(b[z]("DOMNodeInserted",it,!0),b[z]("DOMAttrModified",it,!0),setInterval(it,999)),t("hashchange",it,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(t){d[z](t,it,!0)}),/d$|^c/.test(d.readyState)?bt():(t("load",bt),d[z]("DOMContentLoaded",it),C(bt,2e4)),h.elements.length?(pt(),M._lsFlush()):it()},checkElems:it=function(t){var e;(t=!0===t)&&(V=33),Q||(Q=!0,(e=K-(i.now()-Y))<0&&(e=0),t||e<9?X():C(X,e))},unveil:lt=function(t){var e,n,r,o;t._lazyRace||(!(o="auto"==(r=(n=Z.test(t.nodeName))&&(t[E](p.sizesAttr)||t[E]("sizes"))))&&T||!n||!t[E]("src")&&!t.srcset||t.complete||a(t,p.errorClass)||!a(t,p.lazyClass))&&(e=y(t,"lazyunveilread").detail,o&&Ct.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,rt++,st(t,e,o,r,n))},_aLSL:gt});function dt(t){rt--,t&&!(rt<0)&&t.target||(rt=0)}function ht(t){return null==U&&(U="hidden"==v(d.body,"visibility")),U||!("hidden"==v(t.parentNode,"visibility")&&"hidden"==v(t,"visibility"))}function pt(){var t,e,n,r,o,i,a,c,s,l,u,f=h.elements;if((W=p.loadMode)&&rt<8&&(t=f.length)){for(e=0,ot++;e<t;e++)if(f[e]&&!f[e]._lazyRace)if(!et||h.prematureUnveil&&h.prematureUnveil(f[e]))lt(f[e]);else if((a=f[e][E]("data-expand"))&&(o=+a)||(o=nt),s||(s=!p.expand||p.expand<1?500<b.clientHeight&&500<b.clientWidth?500:370:p.expand,l=(h._defEx=s)*p.expFactor,u=p.hFac,U=null,nt<l&&rt<1&&2<ot&&2<W&&!d.hidden?(nt=l,ot=0):nt=1<W&&1<ot&&rt<6?s:0),c!==o&&(I=innerWidth+o*u,G=innerHeight+o,i=-1*o,c=o),l=f[e].getBoundingClientRect(),(q=l.bottom)>=i&&(H=l.top)<=G&&($=l.right)>=i*u&&(D=l.left)<=I&&(q||$||D||H)&&(p.loadHidden||ht(f[e]))&&(T&&rt<3&&!a&&(W<3||ot<4)||function(t,e){var n,r=t,o=ht(t);for(H-=e,q+=e,D-=e,$+=e;o&&(r=r.offsetParent)&&r!=d.body&&r!=b;)(o=0<(v(r,"opacity")||1))&&"visible"!=v(r,"overflow")&&(n=r.getBoundingClientRect(),o=$>n.left&&D<n.right&&q>n.top-1&&H<n.bottom+1);return o}(f[e],o))){if(lt(f[e]),r=!0,9<rt)break}else!r&&T&&!n&&rt<4&&ot<4&&2<W&&(P[0]||p.preloadAfterLoad)&&(P[0]||!a&&(q||$||D||H||"auto"!=f[e][E](p.sizesAttr)))&&(n=P[0]||f[e]);n&&!r&&lt(n)}}function yt(){Q=!1,Y=i.now(),J()}function mt(t){var e=t.target;e._lazyCache?delete e._lazyCache:(dt(t),l(e,p.loadedClass),u(e,p.loadingClass),f(e,ct),y(e,"lazyloaded"))}function vt(t){var e,n=t[E](p.srcsetAttr);(e=p.customMedia[t[E]("data-media")||t[E]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)}function gt(){3==p.loadMode&&(p.loadMode=2),ut()}function bt(){T||(i.now()-B<999?C(bt,999):(T=!0,p.loadMode=3,it(),t("scroll",gt,!0)))}var wt,zt,Et,Ct=(zt=O(function(t,e,n,r){var o,i,a;if(t._lazysizesWidth=r,r+="px",t.setAttribute("sizes",r),S.test(e.nodeName||""))for(i=0,a=(o=e.getElementsByTagName("source")).length;i<a;i++)o[i].setAttribute("sizes",r);n.detail.dataAttr||m(t,n.detail)}),{_:function(){wt=d.getElementsByClassName(p.autosizesClass),t("resize",Et)},checkElems:Et=k(function(){var t,e=wt.length;if(e)for(t=0;t<e;t++)xt(wt[t])}),updateElem:xt});function xt(t,e,n){var r=t.parentNode;r&&(n=o(t,r,n),(e=y(t,"lazybeforesizes",{width:n,dataAttr:!!e})).defaultPrevented||(n=e.detail.width)&&n!==t._lazysizesWidth&&zt(t,r,e,n))}function At(){!At.i&&d.getElementsByClassName&&(At.i=!0,Ct._(),ft._())}return C(function(){p.init&&At()}),h={cfg:p,autoSizer:Ct,loader:ft,init:At,uP:m,aC:l,rC:u,hC:a,fire:y,gW:o,rAF:M}})}).call(this,n(11)(t))},13:function(t,e,o){"use strict";var n,r,c=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=(r={},function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}),l=[];function u(t){for(var e=-1,n=0;n<l.length;n++)if(l[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c=n[a]||0,s="".concat(a," ").concat(c);n[a]=c+1;c=u(s),i={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(l[c].references++,l[c].updater(i)):l.push({identifier:s,updater:function(e,t){var n,r,o;{var i;o=t.singleton?(i=y++,n=p=p||f(t),r=h.bind(null,n,i,!1),h.bind(null,n,i,!0)):(n=f(t),r=function(t,e,n){var r=n.css,o=n.media,n=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media");n&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */"));if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,t),function(){!function(t){if(null===t.parentNode)return;t.parentNode.removeChild(t)}(n)})}return r(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||r(e=t):o()}}(i,e),references:1}),r.push(s)}return r}function f(t){var e,n=document.createElement("style"),r=t.attributes||{};if(void 0!==r.nonce||(e=o.nc)&&(r.nonce=e),Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])}),"function"==typeof t.insert)t.insert(n);else{t=i(t.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}return n}var a,d=(a=[],function(t,e){return a[t]=e,a.filter(Boolean).join("\n")});function h(t,e,n,r){n=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;t.styleSheet?t.styleSheet.cssText=d(e,n):(r=document.createTextNode(n),(n=t.childNodes)[e]&&t.removeChild(n[e]),n.length?t.insertBefore(r,n[e]):t.appendChild(r))}var p=null,y=0;t.exports=function(t,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=c());var a=s(t=t||[],i);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<a.length;e++){var n=u(a[e]);l[n].references--}for(var t=s(t,i),r=0;r<a.length;r++){var o=u(a[r]);0===l[o].references&&(l[o].updater(),l.splice(o,1))}a=t}}}},33:function(t,e){var n="/sw.js";Object.defineProperty(e,"__esModule",{value:!0}),e.default={register:function(t){var e=0<arguments.length&&void 0!==t?t:{};return!!navigator.serviceWorker&&navigator.serviceWorker.register(n,e)}},t.exports=e.default},35:function(t,e,n){(function(t){function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=function(a){"use strict";var s,t=Object.prototype,l=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o,i,a,c,e=e&&e.prototype instanceof m?e:m,e=Object.create(e.prototype),r=new A(r||[]);return e._invoke=(o=t,i=n,a=r,c=f,function(t,e){if(c===h)throw new Error("Generator is already running");if(c===p){if("throw"===t)throw e;return L()}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n){var r=function t(e,n){var r=e.iterator[n.method];if(r===s){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=s,t(e,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}r=u(r,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,y;var r=r.arg;if(!r)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y;{if(!r.done)return r;n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=s)}n.delegate=null;return y}(n,a);if(r){if(r===y)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===f)throw c=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;r=u(o,i,a);if("normal"===r.type){if(c=a.done?p:d,r.arg!==y)return{value:r.arg,done:a.done}}else"throw"===r.type&&(c=p,a.method="throw",a.arg=r.arg)}}),e}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",y={};function m(){}function v(){}function g(){}var b={};b[r]=function(){return this};e=Object.getPrototypeOf,e=e&&e(e(S([])));e&&e!==t&&l.call(e,r)&&(b=e);var w=g.prototype=m.prototype=Object.create(b);function z(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function E(a,c){var e;this._invoke=function(n,r){function t(){return new c(function(t,e){!function e(t,n,r,o){t=u(a[t],a,n);if("throw"!==t.type){var i=t.arg,n=i.value;return n&&"object"===_(n)&&l.call(n,"__await")?c.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):c.resolve(n).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)})}o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function S(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,t=function t(){for(;++n<e.length;)if(l.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=s,t.done=!0,t};return t.next=t}}return{next:L}}function L(){return{value:s,done:!0}}return((v.prototype=w.constructor=g).constructor=v).displayName=i(g,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,i(t,o,"GeneratorFunction")),t.prototype=Object.create(w),t},a.awrap=function(t){return{__await:t}},z(E.prototype),E.prototype[n]=function(){return this},a.AsyncIterator=E,a.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new E(c(t,e,n,r),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},z(w),i(w,o,"Generator"),w[r]=function(){return this},w.toString=function(){return"[object Generator]"},a.keys=function(n){var t,r=[];for(t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=S,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=s),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc"),c=l.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r,o=n.completion;return"throw"===o.type&&(r=o.arg,x(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=s),y}},a}("object"===_(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}).call(this,n(11)(t))},40:function(t,o,i){(function(t){var e,n;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e="undefined"!=typeof window?window:0,n=function(s,t,n){"use strict";var l,a,c,u,f,d;s.addEventListener&&(l=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,a=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,c=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,u=/^picture$/i,f=n.cfg,d={getParent:function(t,e){var n=t,r=t.parentNode;return e&&"prev"!=e||!r||!u.test(r.nodeName||"")||(r=r.parentNode),"self"!=e&&(n="prev"==e?t.previousElementSibling:e&&(r.closest||s.jQuery)&&(r.closest?r.closest(e):jQuery(r).closest(e)[0])||r),n},getFit:function(t){var e,n,r=getComputedStyle(t,null)||{},o=r.content||r.fontFamily,i={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!i.fit&&o&&(e=o.match(a))&&(i.fit=e[1]),i.fit?(!(n=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&o&&(e=o.match(c))&&(n=e[1]),i.parent=d.getParent(t,n)):i.fit=r.objectFit,i},getImageRatio:function(t){for(var e,n,r,o,i=t.parentNode,a=i&&u.test(i.nodeName||"")?i.querySelectorAll("source, img"):[t],c=0;c<a.length;c++)if(o=(t=a[c]).getAttribute(f.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",e=t._lsMedia||t.getAttribute("media"),e=f.customMedia[t.getAttribute("data-media")||e]||e,o&&(!e||(s.matchMedia&&matchMedia(e)||{}).matches)){(n=parseFloat(t.getAttribute("data-aspectratio")))||(o=(o=o.match(l))?"w"==o[2]?(r=o[1],o[3]):(r=o[3],o[1]):(r=t.getAttribute("width"),t.getAttribute("height")),n=r/o);break}return n},calculateSize:function(t,e){var n,r=this.getFit(t),o=r.fit,r=r.parent;return"width"==o||("contain"==o||"cover"==o)&&(n=this.getImageRatio(t))?(r?e=r.clientWidth:r=t,t=e,"width"==o?t=e:(r=e/r.clientHeight)&&("cover"==o&&r<n||"contain"==o&&n<r)&&(t=e*(n/r)),t):e}},n.parentFit=d,t.addEventListener("lazybeforesizes",function(t){var e;t.defaultPrevented||t.detail.instance!=n||(e=t.target,t.detail.width=d.calculateSize(e,t.detail.width))}))},e&&(n=n.bind(null,e,e.document),"object"==r(t)&&t.exports?n(i(12)):(e=[i(12)],void 0===(n="function"==typeof(n=n)?n.apply(o,e):n)||(t.exports=n)))}).call(this,i(11)(t))}}]);