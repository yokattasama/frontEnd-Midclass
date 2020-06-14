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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/vue-router/dist/vue-router.esm.js from dll-reference vue_dll ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vue_dll */ "dll-reference vue_dll"))(6);

/***/ }),

/***/ "./node_modules/vue/dist/vue.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/vue/dist/vue.js from dll-reference vue_dll ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vue_dll */ "dll-reference vue_dll"))(2);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.js */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n\n // let a = require('./a.js')\n// import $ from 'jquery'\n// import './css/a.css'\n// import './css/b.css'\n// import './less/index.less'\n// import moment from 'moment'\n// import 'moment/locale/zh-cn'\n// moment.locale('zh-CN')\n// let a = moment().calendar();\n// console.log(a);\n// import './scss/index.scss'\n// import 'bootstrap/dist/css/bootstrap.css'\n// console.log(a)\n// console.log('1243242342')\n// console.log('牛逼')\n// window.alert('牛逼啊兄弟')\n// let a = 1;\n// if (a = 1) {\n//   import('jquery').then(({ default: $})=> {\n//     console.log('动态引入了jQuery');\n//     console.log($)\n//   })\n// }\n\nvue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar Home = {\n  template: \"<h2>我是 home 页面</h2>\"\n};\nvar News = {\n  template: \"<h2>我是 news 页面</h2>\"\n};\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  routes: [{\n    path: '/home',\n    component: Home\n  }, {\n    path: '/news',\n    component: News\n  }]\n});\nnew vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  el: '#app',\n  data: {\n    msg: '我是首页'\n  },\n  router: router\n});\nconsole.log('我是index.html');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzM2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUvZGlzdC92dWUuanMnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJzsgLy8gbGV0IGEgPSByZXF1aXJlKCcuL2EuanMnKVxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuLy8gaW1wb3J0ICcuL2Nzcy9hLmNzcydcbi8vIGltcG9ydCAnLi9jc3MvYi5jc3MnXG4vLyBpbXBvcnQgJy4vbGVzcy9pbmRleC5sZXNzJ1xuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG4vLyBpbXBvcnQgJ21vbWVudC9sb2NhbGUvemgtY24nXG4vLyBtb21lbnQubG9jYWxlKCd6aC1DTicpXG4vLyBsZXQgYSA9IG1vbWVudCgpLmNhbGVuZGFyKCk7XG4vLyBjb25zb2xlLmxvZyhhKTtcbi8vIGltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuLy8gY29uc29sZS5sb2coYSlcbi8vIGNvbnNvbGUubG9nKCcxMjQzMjQyMzQyJylcbi8vIGNvbnNvbGUubG9nKCfniZvpgLwnKVxuLy8gd2luZG93LmFsZXJ0KCfniZvpgLzllYrlhYTlvJ8nKVxuLy8gbGV0IGEgPSAxO1xuLy8gaWYgKGEgPSAxKSB7XG4vLyAgIGltcG9ydCgnanF1ZXJ5JykudGhlbigoeyBkZWZhdWx0OiAkfSk9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ+WKqOaAgeW8leWFpeS6hmpRdWVyeScpO1xuLy8gICAgIGNvbnNvbGUubG9nKCQpXG4vLyAgIH0pXG4vLyB9XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcbnZhciBIb21lID0ge1xuICB0ZW1wbGF0ZTogXCI8aDI+5oiR5pivIGhvbWUg6aG16Z2iPC9oMj5cIlxufTtcbnZhciBOZXdzID0ge1xuICB0ZW1wbGF0ZTogXCI8aDI+5oiR5pivIG5ld3Mg6aG16Z2iPC9oMj5cIlxufTtcbnZhciByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgcm91dGVzOiBbe1xuICAgIHBhdGg6ICcvaG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lXG4gIH0sIHtcbiAgICBwYXRoOiAnL25ld3MnLFxuICAgIGNvbXBvbmVudDogTmV3c1xuICB9XVxufSk7XG5uZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgZGF0YToge1xuICAgIG1zZzogJ+aIkeaYr+mmlumhtSdcbiAgfSxcbiAgcm91dGVyOiByb3V0ZXJcbn0pO1xuY29uc29sZS5sb2coJ+aIkeaYr2luZGV4Lmh0bWwnKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "dll-reference vue_dll":
/*!**************************!*\
  !*** external "vue_dll" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vue_dll;

/***/ })

/******/ });