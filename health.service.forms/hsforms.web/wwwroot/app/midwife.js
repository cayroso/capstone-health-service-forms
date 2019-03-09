/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"midwife": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./ClientApp/midwife/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/midwife/app.css":
/*!***********************************!*\
  !*** ./ClientApp/midwife/app.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./ClientApp/midwife/app.css?");

/***/ }),

/***/ "./ClientApp/midwife/app.js":
/*!**********************************!*\
  !*** ./ClientApp/midwife/app.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-ui-bootstrap/dist/ui-bootstrap-tpls */ \"./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js\");\n/* harmony import */ var angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_1__);\n﻿\r\n\r\n\r\nconst app = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', [__webpack_require__(/*! angular-animate */ \"./node_modules/angular-animate/index.js\"), __webpack_require__(/*! angular-toastr */ \"./node_modules/angular-toastr/index.js\"), 'ui.bootstrap']);\r\n\r\napp.controller('mainController', function () {\r\n    const vm = this;\r\n    const pagePrefix = 'app/clientapp/administrator/templates/';\r\n    vm.page = `${pagePrefix}/packages.html`;\r\n\r\n    vm.setPage = function (page, event) {\r\n        //debugger;\r\n        var ar = arguments;\r\n        vm.page = `${pagePrefix}/${page}`;\r\n\r\n        event.preventDefault();\r\n    };\r\n\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./ClientApp/midwife/app.js?");

/***/ }),

/***/ "./ClientApp/midwife/controllers/dashboardController.js":
/*!**************************************************************!*\
  !*** ./ClientApp/midwife/controllers/dashboardController.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./ClientApp/midwife/app.js\");\n﻿\r\n\r\n\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].controller('dashboardController', function ($http, toastr) {\r\n    const vm = this;\r\n\r\n\r\n    vm.init = function () {\r\n        $http.get('api/administrator/dashboard')\r\n            .then(function (resp) {\r\n                vm.data = resp.data;\r\n\r\n                let events = [];\r\n\r\n                for (var i = 0; i < resp.data.reservations.length; i++) {\r\n                    var item = resp.data.reservations[i];\r\n\r\n                    events.push({\r\n                        title: item.package.name,\r\n                        start: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fullCalendar.moment(item.dateStart),\r\n                        end: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fullCalendar.moment(item.dateEnd),\r\n                    });\r\n                }\r\n\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#calendar').fullCalendar({\r\n                    //header: { center: 'month,agendaWeek' },\r\n                    defaultView: 'month',\r\n                    //minTime: '07:00:00',\r\n                    //maxTime: '22:59:00',\r\n                    events: events\r\n                });\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n\r\n});\n\n//# sourceURL=webpack:///./ClientApp/midwife/controllers/dashboardController.js?");

/***/ }),

/***/ "./ClientApp/midwife/controllers/formsController.js":
/*!**********************************************************!*\
  !*** ./ClientApp/midwife/controllers/formsController.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./ClientApp/midwife/app.js\");\n﻿\r\n\r\n\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].controller('mainController', function () {\r\n    const vm = this;\r\n    const pagePrefix = 'app/clientapp/administrator/templates/';\r\n    vm.page = `${pagePrefix}/packages.html`;\r\n\r\n    vm.setPage = function (page, event) {\r\n        //debugger;\r\n        var ar = arguments;\r\n        vm.page = `${pagePrefix}/${page}`;\r\n\r\n        event.preventDefault();\r\n    };\r\n\r\n});\n\n//# sourceURL=webpack:///./ClientApp/midwife/controllers/formsController.js?");

/***/ }),

/***/ "./ClientApp/midwife/controllers/mainController.js":
/*!*********************************************************!*\
  !*** ./ClientApp/midwife/controllers/mainController.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./ClientApp/midwife/app.js\");\n﻿\r\n\r\n\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].controller('mainController', function () {\r\n    const vm = this;\r\n    const pagePrefix = 'app/clientapp/administrator/templates/';\r\n    vm.page = `${pagePrefix}/packages.html`;\r\n\r\n    vm.setPage = function (page, event) {\r\n        //debugger;\r\n        var ar = arguments;\r\n        vm.page = `${pagePrefix}/${page}`;\r\n\r\n        event.preventDefault();\r\n    };\r\n\r\n});\n\n//# sourceURL=webpack:///./ClientApp/midwife/controllers/mainController.js?");

/***/ }),

/***/ "./ClientApp/midwife/main.js":
/*!***********************************!*\
  !*** ./ClientApp/midwife/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ \"./ClientApp/midwife/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ \"./node_modules/bootstrap/dist/js/bootstrap.bundle.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! startbootstrap-sb-admin/js/sb-admin */ \"./node_modules/startbootstrap-sb-admin/js/sb-admin.js\");\n/* harmony import */ var startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ \"./ClientApp/midwife/app.js\");\n/* harmony import */ var _controllers_mainController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/mainController */ \"./ClientApp/midwife/controllers/mainController.js\");\n/* harmony import */ var _controllers_dashboardController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/dashboardController */ \"./ClientApp/midwife/controllers/dashboardController.js\");\n/* harmony import */ var _controllers_formsController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/formsController */ \"./ClientApp/midwife/controllers/formsController.js\");\n﻿\r\n\r\n//import 'fullcalendar/dist/fullcalendar';\r\n\r\n\r\n\r\n\r\n//import 'bootstrap-material-design/dist/js/bootstrap-material-design';\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/midwife/main.js?");

/***/ })

/******/ });