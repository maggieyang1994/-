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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bundle_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bundle/math.js */ \"./bundle/math.js\");\n/* harmony import */ var _bundle_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bundle/component.js */ \"./bundle/component.js\");\n// import a from './bundle/a.js';\n\n\n// import b from './bundle/b.ts';\n// import _ from 'lodash';\n// import './public/css/test.css';\n\nfunction component() {\n  var element = document.createElement('div');\n\n  // lodash 是由当前 script 脚本 import 导入进来的\n  // element.innerHTML = _.join(['Hello', 'webpack5'], ' ');\n  element.innerHTML = \"tree shaking\" + '5 cubed is equal to ' + Object(_bundle_math_js__WEBPACK_IMPORTED_MODULE_0__[\"cube\"])(5);\n  // element.classList.add('hello');\n\n  return element;\n}\n\nconst appleModel = new _bundle_component_js__WEBPACK_IMPORTED_MODULE_1__[\"Apple\"]({\n  model: 'IphoneX'\n}).getModel();\n\nconsole.log(appleModel);\ndocument.body.appendChild(component());\n// console.log(`data from a ${a()}, ${b(\"ts\")}`)\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./bundle/component.js":
/*!*****************************!*\
  !*** ./bundle/component.js ***!
  \*****************************/
/*! exports provided: Person, Apple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Person\", function() { return Person; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Apple\", function() { return Apple; });\n// componetns.js\nclass Person {\n  constructor({ name, age, sex }) {\n    this.className = 'Person';\n    this.name = name;\n    this.age = age;\n    this.sex = sex;\n  }\n  getName() {\n    return this.name;\n  }\n}\nclass Apple {\n  constructor({ model }) {\n    this.className = 'Apple';\n    this.model = model;\n  }\n  getModel() {\n    return this.model;\n  }\n}\n\n//# sourceURL=webpack:///./bundle/component.js?");

/***/ }),

/***/ "./bundle/math.js":
/*!************************!*\
  !*** ./bundle/math.js ***!
  \************************/
/*! exports provided: cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cube\", function() { return cube; });\n// tree-shaking不会清楚自执行函数\nfunction square(x) {\n  console.log('square');\n  return x * x;\n}2;\n\nfunction cube(x) {\n  return x * x * x;\n}\n\n//# sourceURL=webpack:///./bundle/math.js?");

/***/ })

/******/ });