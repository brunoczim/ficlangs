!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=31)}({1:function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},3:function(n,t,e){(t=e(1)(!1)).push([n.i,'* {\n    padding: 0;\n    margin: 0;\n}\n\nbody, html {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    font-family: "Noto Sans", "Cantarell", "Liberation Sans", "Arial",\n                 sans-serif;\n    font-size: 12pt;\n    text-align: center;\n}\n\na {\n    color: #00879C;\n    font-weight: bold;\n    text-decoration: none;\n}\n\na:hover {\n    color: #0097A8;\n    text-decoration: underline;\n}\n\na:visited {\n    color: #338899;\n    text-decoration: underline;\n}\n\n#root {\n    padding: 30pt;\n    margin: 0 auto 0 auto;\n}\n\n\nul, ol {\n    margin: 18pt;\n}\n\nli {\n    margin: 8pt;\n}\n\nh1 {\n    margin-top: 50pt;\n    margin-bottom: 12pt;\n}\n\nh2 {\n    margin-top: 40pt;\n    margin-bottom: 10pt;\n}\n\nh3 {\n    margin-top: 30pt;\n    margin-bottom: 7pt;\n}\n\nh4 {\n    margin-top: 20pt;\n    margin-bottom: 5pt;\n}\n\n.table-wrapper {\n    overflow: auto;\n    max-width: 100%;\n}\n\ntable {\n    border-collapse: collapse;\n    margin: auto;\n}\n\nth, td {\n    border: 1px solid black;\n    padding: 7pt;\n}\n\nimg {\n    max-width: 500pt;\n    max-height: 500pt;\n    width: 100%;\n    height: auto;\n}\n',""]),n.exports=t},31:function(n,t,e){"use strict";e(32)},32:function(n,t,e){var r=e(4),o=e(33);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},33:function(n,t,e){var r=e(1),o=e(3);(t=r(!1)).i(o),t.push([n.i,"\n\n",""]),n.exports=t},4:function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],u=t.base?i[0]+t.base:i[0],l=e[u]||0,s="".concat(u," ").concat(l);e[u]=l+1;var f=c(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:v(d,t),references:1}),r.push(s)}return r}function l(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function d(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function p(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(n,t){var e,r,o;if(t.singleton){var i=h++;e=m||(m=l(t)),r=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=l(t),r=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=u(n,t),l=0;l<e.length;l++){var s=c(e[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=i}}}}});
//# sourceMappingURL=index.js.map