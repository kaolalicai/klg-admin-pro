(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,function(t,n){var u=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=u)},function(t,n,u){t.exports=!u(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var u={}.hasOwnProperty;t.exports=function(t,n){return u.call(t,n)}},function(t,n){var u=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=u)},function(t,n,u){var e=u(39),E=u(18);t.exports=function(t){return e(E(t))}},,,,,function(t,n,u){var e=u(23),E=u(37),s=u(26),r=Object.defineProperty;n.f=u(4)?Object.defineProperty:function(t,n,u){if(e(t),n=s(n,!0),e(u),E)try{return r(t,n,u)}catch(t){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(t[n]=u.value),t}},function(t,n,u){var e=u(14),E=u(22);t.exports=u(4)?function(t,n,u){return e.f(t,n,E(1,u))}:function(t,n,u){return t[n]=u,t}},,function(t,n){var u=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:u)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},,,,function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,u){var e=u(6);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var u=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++u+e).toString(36))}},function(t,n,u){var e=u(40),E=u(28);t.exports=Object.keys||function(t){return e(t,E)}},function(t,n,u){var e=u(6);t.exports=function(t,n){if(!e(t))return t;var u,E;if(n&&"function"==typeof(u=t.toString)&&!e(E=u.call(t)))return E;if("function"==typeof(u=t.valueOf)&&!e(E=u.call(t)))return E;if(!n&&"function"==typeof(u=t.toString)&&!e(E=u.call(t)))return E;throw TypeError("Can't convert object to primitive value")}},function(t,n,u){var e=u(3),E=u(8),s=u(46),r=u(15),a=u(7),C=function(t,n,u){var o,c,l,p=t&C.F,i=t&C.G,d=t&C.S,A=t&C.P,f=t&C.B,h=t&C.W,D=i?E:E[n]||(E[n]={}),F=D.prototype,B=i?e:d?e[n]:(e[n]||{}).prototype;for(o in i&&(u=n),u)(c=!p&&B&&void 0!==B[o])&&a(D,o)||(l=c?B[o]:u[o],D[o]=i&&"function"!=typeof B[o]?u[o]:f&&c?s(l,e):h&&B[o]==l?function(t){var n=function(n,u,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,u)}return new t(n,u,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):A&&"function"==typeof l?s(Function.call,l):l,A&&((D.virtual||(D.virtual={}))[o]=l,t&C.R&&F&&!F[o]&&r(F,o,l)))};C.F=1,C.G=2,C.S=4,C.P=8,C.B=16,C.W=32,C.U=64,C.R=128,t.exports=C},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,u){var e=u(3),E=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return E[t]||(E[t]={})}},function(t,n,u){var e=u(29)("keys"),E=u(24);t.exports=function(t){return e[t]||(e[t]=E(t))}},,,,,,function(t,n,u){var e=u(6),E=u(3).document,s=e(E)&&e(E.createElement);t.exports=function(t){return s?E.createElement(t):{}}},function(t,n,u){t.exports=!u(4)&&!u(5)(function(){return 7!=Object.defineProperty(u(36)("div"),"a",{get:function(){return 7}}).a})},function(t,n){var u={}.toString;t.exports=function(t){return u.call(t).slice(8,-1)}},function(t,n,u){var e=u(38);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,u){var e=u(7),E=u(9),s=u(49)(!1),r=u(30)("IE_PROTO");t.exports=function(t,n){var u,a=E(t),C=0,o=[];for(u in a)u!=r&&e(a,u)&&o.push(u);for(;n.length>C;)e(a,u=n[C++])&&(~s(o,u)||o.push(u));return o}},function(t,n,u){var e=u(18);t.exports=function(t){return Object(e(t))}},,,,function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,u){var e=u(45);t.exports=function(t,n,u){if(e(t),void 0===n)return t;switch(u){case 1:return function(u){return t.call(n,u)};case 2:return function(u,e){return t.call(n,u,e)};case 3:return function(u,e,E){return t.call(n,u,e,E)}}return function(){return t.apply(n,arguments)}}},function(t,n,u){var e=u(17),E=Math.max,s=Math.min;t.exports=function(t,n){return(t=e(t))<0?E(t+n,0):s(t,n)}},function(t,n,u){var e=u(17),E=Math.min;t.exports=function(t){return t>0?E(e(t),9007199254740991):0}},function(t,n,u){var e=u(9),E=u(48),s=u(47);t.exports=function(t){return function(n,u,r){var a,C=e(n),o=E(C.length),c=s(r,o);if(t&&u!=u){for(;o>c;)if((a=C[c++])!=a)return!0}else for(;o>c;c++)if((t||c in C)&&C[c]===u)return t||c||0;return!t&&-1}}},,,,function(t,n,u){t.exports={default:u(63),__esModule:!0}},,,,,,,,function(t,n,u){var e=u(27),E=u(8),s=u(5);t.exports=function(t,n){var u=(E.Object||{})[t]||Object[t],r={};r[t]=n(u),e(e.S+e.F*s(function(){u(1)}),"Object",r)}},function(t,n,u){var e=u(41),E=u(25);u(61)("keys",function(){return function(t){return E(e(t))}})},function(t,n,u){u(62),t.exports=u(8).Object.keys},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,u){"use strict";u.r(n);var e={created:function(){this.content=unescape("%3Ch2%3ERouterSelect%20%u9009%u62E9%u5668%3C/h2%3E%0A%3Cp%3ERouterSelect%u662F%u57FA%u4E8E%20%3Ca%20href%3D%22http%3A//element-cn.eleme.io/%23/zh-CN/component/select%22%3ESelect%3C/a%3E%20%u9009%u62E9%u5668%u7EC4%u4EF6%u884D%u751F%u51FA%u6765%u7684%u9AD8%u9636%u7EC4%u4EF6%uFF0C%u4E3B%u8981%u662F%u89E3%u51B3%u4E00%u4E9B%u901A%u7528%u7684%u8FC7%u6EE4%u67E5%u8BE2%u3001%u540C%u6B65%u8DEF%u7531%uFF08Vue%20Router%uFF09%u573A%u666F%u3002%3C/p%3E%0A%3Ch3%3E%u4EE3%u7801%u6F14%u793A%3C/h3%3E%0A%3Ch4%3E%u57FA%u7840%u5355%u9009%3C/h4%3E%0A%3Cp%3E%u7EC4%u4EF6%u4F1A%u6839%u636E%u9009%u4E2D%u9879%u6765%u540C%u6B65%u9875%u9762%u8DEF%u7531%uFF0C%u8B6C%u5982%u9009%u4E2D%u8FDB%u884C%u4E2D%u9009%u9879%u65F6%uFF0C%u8DEF%u7531%u4F1A%u66F4%u65B0%u4E3A%3Ccode%3E%3Fstatus%3Dpending%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eklg-router-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Efilter-key%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22status%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%u6309%u8BA2%u5355%u72B6%u6001%u7B5B%u9009%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22ORDER_STATUS_OPTIONS%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22handleChange%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EORDER_STATUS_OPTIONS%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u8FDB%u884C%u4E2D%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27pending%27%3C/span%3E%7D%2C%0A%20%20%20%20%20%20%20%20%7B%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u5B8C%u6210%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27done%27%3C/span%3E%7D%2C%0A%20%20%20%20%20%20%20%20%7B%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u5931%u8D25%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27fail%27%3C/span%3E%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20handleChange%28value%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u901A%u5E38%u8FD9%u65F6%u53EF%u4EE5%u6839%u636E%u66F4%u65B0%u540E%u7684%u8DEF%u7531%u4FE1%u606F%u53BB%u83B7%u53D6%u540E%u7AEF%u6570%u636E%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.%24message%28%3Cspan%20class%3D%22hljs-string%22%3E%60%u5F53%u524D%u9009%u4E2D%uFF1A%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bvalue%7D%3C/span%3E%60%3C/span%3E%29%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%u57FA%u7840%u591A%u9009%3C/h4%3E%0A%3Cp%3E%u53EA%u9700%u8981%u8BBE%u7F6E%20%3Ccode%3Emultiple%3C/code%3E%20%u5373%u53EF%u5F00%u542F%u591A%u9009%u6A21%u5F0F%uFF0C%u6B64%u6A21%u5F0F%u4E0B%uFF0C%u8DEF%u7531%u4F1A%u66F4%u65B0%u4E3A%20%3Ccode%3E%3Frole%3DINVESTOR%26amp%3Brole%3DBORROWSER%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eklg-router-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Efilter-key%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22role%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%u6309%u7528%u6237%u89D2%u8272%u7B5B%u9009%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22USER_ROLES_OPTIONS%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amultiple%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22true%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EUSER_ROLES_OPTIONS%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u6295%u8D44%u4EBA%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27INVESTOR%27%3C/span%3E%7D%2C%0A%20%20%20%20%20%20%20%20%7B%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u501F%u6B3E%u4EBA%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27BORROWSER%27%3C/span%3E%7D%2C%0A%20%20%20%20%20%20%20%20%7B%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u5408%u4F5C%u673A%u6784%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27COLLABORATOR%27%3C/span%3E%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3ERouterSelect%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u53EF%u9009%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EdefaultValue%3C/td%3E%0A%3Ctd%3E%u9ED8%u8BA4%u503C%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EfilterKey%3C/td%3E%0A%3Ctd%3E%u9700%u8981%u66F4%u65B0%u7684%u8DEF%u7531%u67E5%u8BE2%u952E%u540D%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esize%3C/td%3E%0A%3Ctd%3E%u9009%u62E9%u6846%u5C3A%u5BF8%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Emedium%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Emedium/small/mini%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eplaceholder%3C/td%3E%0A%3Ctd%3E%u5360%u4F4D%u7B26%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u8BF7%u9009%u62E9%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emultiple%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u591A%u9009%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclearable%3C/td%3E%0A%3Ctd%3E%u5355%u9009%u65F6%u662F%u5426%u53EF%u4EE5%u6E05%u7A7A%u9009%u9879%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efilterable%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u53EF%u641C%u7D22%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u6B63%u5728%u4ECE%u8FDC%u7A0B%u83B7%u53D6%u6570%u636E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoptions%3C/td%3E%0A%3Ctd%3E%u9009%u9879%u952E%u503C%u6570%u636E%5B%7Blabel%3A%27x%27%2Cvalue%3A%27x%27%7D%5D%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EpopperClass%3C/td%3E%0A%3Ctd%3ESelect%20%u4E0B%u62C9%u6846%u7684%u7C7B%u540D%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ERouterSelect%20Event%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3E%u9009%u4E2D%u503C%u53D1%u751F%u53D8%u5316%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E%u76EE%u524D%u7684%u9009%u4E2D%u503C%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},E=u(0),s=Object(E.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);n.default=s.exports},,function(t,n,u){"use strict";u.r(n);var e=u(53),E=u.n(e);function s(t){return E()(t).map(function(n){return{value:n,label:t[n]}})}var r={pending:"进行中",done:"完成",fail:"失败"},a={INVESTOR:"投资人",BORROWSER:"借款人",COLLABORATOR:"合作机构"},C={data:function(){return{ORDER_STATUS_OPTIONS:s(r),USER_ROLES_OPTIONS:s(a)}},methods:{fetchData:function(t){this.$message("当前选中："+t)}}},o=u(0),c=Object(o.a)(C,function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础单选"}},[n("klg-router-select",{attrs:{"filter-key":"status",placeholder:"按订单状态筛选",options:this.ORDER_STATUS_OPTIONS},on:{change:this.fetchData}})],1),n("demo-block",{attrs:{title:"基础多选"}},[n("klg-router-select",{attrs:{"filter-key":"role",placeholder:"按用户角色筛选",options:this.USER_ROLES_OPTIONS,multiple:!0}})],1)],1)},[],!1,null,null,null);n.default=c.exports}]]);