!function(A){var B={};function Q(g){if(B[g])return B[g].exports;var E=B[g]={i:g,l:!1,exports:{}};return A[g].call(E.exports,E,E.exports,Q),E.l=!0,E.exports}Q.m=A,Q.c=B,Q.d=function(A,B,g){Q.o(A,B)||Object.defineProperty(A,B,{enumerable:!0,get:g})},Q.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},Q.t=function(A,B){if(1&B&&(A=Q(A)),8&B)return A;if(4&B&&"object"==typeof A&&A&&A.__esModule)return A;var g=Object.create(null);if(Q.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:A}),2&B&&"string"!=typeof A)for(var E in A)Q.d(g,E,function(B){return A[B]}.bind(null,E));return g},Q.n=function(A){var B=A&&A.__esModule?function(){return A.default}:function(){return A};return Q.d(B,"a",B),B},Q.o=function(A,B){return Object.prototype.hasOwnProperty.call(A,B)},Q.p="",Q(Q.s=35)}({1:function(A,B,Q){"use strict";A.exports=function(A){var B=[];return B.toString=function(){return this.map((function(B){var Q=function(A,B){var Q=A[1]||"",g=A[3];if(!g)return Q;if(B&&"function"==typeof btoa){var E=(n=g,I=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),w="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I),"/*# ".concat(w," */")),c=g.sources.map((function(A){return"/*# sourceURL=".concat(g.sourceRoot||"").concat(A," */")}));return[Q].concat(c).concat([E]).join("\n")}var n,I,w;return[Q].join("\n")}(B,A);return B[2]?"@media ".concat(B[2]," {").concat(Q,"}"):Q})).join("")},B.i=function(A,Q,g){"string"==typeof A&&(A=[[null,A,""]]);var E={};if(g)for(var c=0;c<this.length;c++){var n=this[c][0];null!=n&&(E[n]=!0)}for(var I=0;I<A.length;I++){var w=[].concat(A[I]);g&&E[w[0]]||(Q&&(w[2]?w[2]="".concat(Q," and ").concat(w[2]):w[2]=Q),B.push(w))}},B}},15:function(A,B,Q){var g=Q(4),E=Q(6);"string"==typeof(E=E.__esModule?E.default:E)&&(E=[[A.i,E,""]]);var c={insert:"head",singleton:!1};g(E,c);A.exports=E.locals||{}},3:function(A,B,Q){(B=Q(1)(!1)).push([A.i,'* {\n    padding: 0;\n    margin: 0;\n}\n\nbody, html {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    font-family: "Noto Sans", "Cantarell", "Liberation Sans", "Arial",\n                 sans-serif;\n    font-size: 12pt;\n    text-align: center;\n}\n\na {\n    color: #00879C;\n    font-weight: bold;\n    text-decoration: none;\n}\n\na:hover {\n    color: #0097A8;\n    text-decoration: underline;\n}\n\na:visited {\n    color: #338899;\n    text-decoration: underline;\n}\n\n#root {\n    padding: 30pt;\n    margin: 0 auto 0 auto;\n}\n\n\nul, ol {\n    margin: 18pt;\n}\n\nli {\n    margin: 8pt;\n}\n\nh1 {\n    margin-top: 50pt;\n    margin-bottom: 12pt;\n}\n\nh2 {\n    margin-top: 40pt;\n    margin-bottom: 10pt;\n}\n\nh3 {\n    margin-top: 30pt;\n    margin-bottom: 7pt;\n}\n\nh4 {\n    margin-top: 20pt;\n    margin-bottom: 5pt;\n}\n\ntable {\n    border-collapse: collapse;\n    margin: auto;\n}\n\nth, td {\n    border: 1px solid black;\n    padding: 10pt;\n}\n',""]),A.exports=B},35:function(A,B,Q){"use strict";Q(15)},4:function(A,B,Q){"use strict";var g,E=function(){return void 0===g&&(g=Boolean(window&&document&&document.all&&!window.atob)),g},c=function(){var A={};return function(B){if(void 0===A[B]){var Q=document.querySelector(B);if(window.HTMLIFrameElement&&Q instanceof window.HTMLIFrameElement)try{Q=Q.contentDocument.head}catch(A){Q=null}A[B]=Q}return A[B]}}(),n=[];function I(A){for(var B=-1,Q=0;Q<n.length;Q++)if(n[Q].identifier===A){B=Q;break}return B}function w(A,B){for(var Q={},g=[],E=0;E<A.length;E++){var c=A[E],w=B.base?c[0]+B.base:c[0],F=Q[w]||0,e="".concat(w," ").concat(F);Q[w]=F+1;var C=I(e),i={css:c[1],media:c[2],sourceMap:c[3]};-1!==C?(n[C].references++,n[C].updater(i)):n.push({identifier:e,updater:Y(i,B),references:1}),g.push(e)}return g}function F(A){var B=document.createElement("style"),g=A.attributes||{};if(void 0===g.nonce){var E=Q.nc;E&&(g.nonce=E)}if(Object.keys(g).forEach((function(A){B.setAttribute(A,g[A])})),"function"==typeof A.insert)A.insert(B);else{var n=c(A.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(B)}return B}var e,C=(e=[],function(A,B){return e[A]=B,e.filter(Boolean).join("\n")});function i(A,B,Q,g){var E=Q?"":g.media?"@media ".concat(g.media," {").concat(g.css,"}"):g.css;if(A.styleSheet)A.styleSheet.cssText=C(B,E);else{var c=document.createTextNode(E),n=A.childNodes;n[B]&&A.removeChild(n[B]),n.length?A.insertBefore(c,n[B]):A.appendChild(c)}}function t(A,B,Q){var g=Q.css,E=Q.media,c=Q.sourceMap;if(E?A.setAttribute("media",E):A.removeAttribute("media"),c&&btoa&&(g+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),A.styleSheet)A.styleSheet.cssText=g;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(g))}}var o=null,D=0;function Y(A,B){var Q,g,E;if(B.singleton){var c=D++;Q=o||(o=F(B)),g=i.bind(null,Q,c,!1),E=i.bind(null,Q,c,!0)}else Q=F(B),g=t.bind(null,Q,B),E=function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(Q)};return g(A),function(B){if(B){if(B.css===A.css&&B.media===A.media&&B.sourceMap===A.sourceMap)return;g(A=B)}else E()}}A.exports=function(A,B){(B=B||{}).singleton||"boolean"==typeof B.singleton||(B.singleton=E());var Q=w(A=A||[],B);return function(A){if(A=A||[],"[object Array]"===Object.prototype.toString.call(A)){for(var g=0;g<Q.length;g++){var E=I(Q[g]);n[E].references--}for(var c=w(A,B),F=0;F<Q.length;F++){var e=I(Q[F]);0===n[e].references&&(n[e].updater(),n.splice(e,1))}Q=c}}}},6:function(A,B,Q){var g=Q(1),E=Q(3),c=Q(7),n=Q(8);(B=g(!1)).i(E);var I=c(n);B.push([A.i,'@font-face {\n    font-family: "Star Folk Alphabet";\n    src: url('+I+');\n}\n\n.star-folk-alphabet {\n    font-family: "Star Folk Alphabet";\n}\n',""]),A.exports=B},7:function(A,B,Q){"use strict";A.exports=function(A,B){return B||(B={}),"string"!=typeof(A=A&&A.__esModule?A.default:A)?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),B.hash&&(A+=B.hash),/["'() \t\n]/.test(A)||B.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A)}},8:function(A,B,Q){"use strict";Q.r(B),B.default="data:font/ttf;base64,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"}});
//# sourceMappingURL=phonology.js.map