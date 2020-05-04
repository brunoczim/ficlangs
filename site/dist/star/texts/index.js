/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Star_Texts_Index.bs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../Star Folk Alphabet.ttf":
/*!*********************************!*\
  !*** ../Star Folk Alphabet.ttf ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:font/ttf;base64,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");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/common.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/common.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n    padding: 0;\n    margin: 0;\n}\n\nbody, html {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    font-family: \"Cantarell\", sans-serif;\n    font-size: 12pt;\n    text-align: center;\n}\n\na {\n    color: #00879C;\n    font-weight: bold;\n    text-decoration: none;\n}\n\na:hover {\n    color: #0097A8;\n    text-decoration: underline;\n}\n\na:visited {\n    color: #338899;\n    text-decoration: underline;\n}\n\n#root {\n    padding: 30pt;\n    margin: 0 auto 0 auto;\n}\n\n\nul, ol {\n    margin: 18pt;\n}\n\nli {\n    margin: 8pt;\n}\n\nh1 {\n    margin-top: 10pt;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/star/index.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/star/index.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../common.css */ "./node_modules/css-loader/dist/cjs.js!./src/common.css");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../../Star Folk Alphabet.ttf */ "../Star Folk Alphabet.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\n    font-family: \"Star Folk Alphabet\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.star-folk-alphabet {\n    font-family: \"Star Folk Alphabet\";\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/star/texts/index.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/star/texts/index.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../index.css */ "./node_modules/css-loader/dist/cjs.js!./src/star/index.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../../texts.css */ "./node_modules/css-loader/dist/cjs.js!./src/texts.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
// Module
exports.push([module.i, ".intext-orthography, .boxed-orthography {\n    font-family: \"Star Folk Alphabet\";\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/texts.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/texts.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./common.css */ "./node_modules/css-loader/dist/cjs.js!./src/common.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".buttons-wrapper {\n    margin-top: 10pt;\n}\n\n.title, .paragraph {\n    display: flex;\n}\n\n.title-wrapper, .paragraph-wrapper {\n    margin-top: 10pt;\n    margin-bottom: 10pt;\n}\n\n.button, .active-button, .inactive-button {\n    padding: 4pt;\n    border: 1px solid #8888DD;\n    border-radius: 5pt;\n    font-weight: 600;\n    margin: 4pt;\n}\n\n.button:hover, .active-button:hover, .inactive-button:hover {\n    cursor: pointer;\n}\n\n.button {\n    background-color: #EFFFF8;\n}\n\n.active-button {\n    background-color: #C0F0F6;\n}\n\n.intext-romanization,\n.intext-broad,\n.intext-narrow,\n.intext-literal,\n.intext-attributes,\n.boxed-orthography,\n.boxed-romanization,\n.boxed-broad,\n.boxed-narrow,\n.boxed-literal,\n.boxed-attributes,\n.translation\n{\n    font-size: 14pt;\n    font-weight: normal;\n}\n\n.word {\n    margin-left: 2pt;\n    margin-right: 2pt;\n}\n\n.word-has-boxed {\n    border: 3pt solid #AA55AA;\n    padding: 3pt;\n}\n\n.word-no-boxed {\n    padding: 3pt;\n}\n\n.intext-word:hover {\n    cursor: pointer;\n}\n\n.boxed-word {\n    border-top-style: solid;\n    border-top-width: 2pt;\n    border-top-color: #AA55AA;\n    padding: 4pt;\n}\n\n.text-wrapper {\n    text-align: justify;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Star_Texts_Index.bs.js":
/*!************************************!*\
  !*** ./src/Star_Texts_Index.bs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



((__webpack_require__(/*! ./star/texts/index.css */ "./src/star/texts/index.css")));

/*  Not a pure module */


/***/ }),

/***/ "./src/star/texts/index.css":
/*!**********************************!*\
  !*** ./src/star/texts/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/star/texts/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map