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
/******/ 		"administrator": 0
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
/******/ 	deferredModules.push(["./ClientApp/administrator/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/administrator/app.css":
/*!*****************************************!*\
  !*** ./ClientApp/administrator/app.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./ClientApp/administrator/app.css?");

/***/ }),

/***/ "./ClientApp/administrator/app.js":
/*!****************************************!*\
  !*** ./ClientApp/administrator/app.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uirouter_angularjs_release_angular_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angularjs/release/angular-ui-router */ \"./node_modules/@uirouter/angularjs/release/angular-ui-router.js\");\n/* harmony import */ var _uirouter_angularjs_release_angular_ui_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uirouter_angularjs_release_angular_ui_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-ui-bootstrap/dist/ui-bootstrap-tpls */ \"./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js\");\n/* harmony import */ var angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_2__);\n﻿\r\n\r\n\r\n\r\n\r\n\r\nconst app = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', [__webpack_require__(/*! angular-animate */ \"./node_modules/angular-animate/index.js\"), __webpack_require__(/*! angular-toastr */ \"./node_modules/angular-toastr/index.js\"), 'ui.bootstrap', 'ui.router']);\r\n\r\napp.config(function ($stateProvider, $urlRouterProvider) {\r\n    \r\n    $stateProvider.state({\r\n        name: 'dashboard',\r\n        url: '/dashboard',\r\n        component: 'dashboardComponent'\r\n    });\r\n\r\n    $stateProvider.state({\r\n        name: 'formNepi',\r\n        url: '/formNepi',\r\n        component: 'formNepiComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiAdd',\r\n        url: '/formNepi/add',\r\n        component: 'formNepiAddComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiEdit',\r\n        url: '/formNepi/{formId}/edit',\r\n        component: 'formNepiEditComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiView',\r\n        url: '/formNepi/{formId}',\r\n        component: 'formNepiViewComponent'\r\n    });   \r\n    $stateProvider.state({\r\n        name: 'formNepiAddEntry',\r\n        url: '/formNepi/{formId}/entry',\r\n        component: 'formNepiAddEntryComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiEditEntry',\r\n        url: '/formNepi/{formId}/entry/{entryId}/edit',\r\n        component: 'formNepiEditEntryComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiViewEntry',\r\n        url: '/formNepi/{formId}/entry/{entryId}',\r\n        component: 'formNepiViewEntryComponent'\r\n    });\r\n\r\n    $stateProvider.state({\r\n        name: 'formFp',\r\n        url: '/formFp',\r\n        component: 'formFpComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formFpAdd',\r\n        url: '/formFp/add',\r\n        component: 'formFpAddComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formFpEdit',\r\n        url: '/formFp/{formId}/edit',\r\n        component: 'formFpEditComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formFpView',\r\n        url: '/formFp/{formId}',\r\n        component: 'formFpViewComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formFpAddEntry',\r\n        url: '/formFp/{formId}/entry',\r\n        component: 'formFpAddEntryComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formFpEditEntry',\r\n        url: '/formFp/{formId}/entry/{entryId}/edit',\r\n        component: 'formFpEditEntryComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formFpViewEntry',\r\n        url: '/formFp/{formId}/entry/{entryId}',\r\n        component: 'formFpViewEntryComponent'\r\n    });\r\n\r\n    $stateProvider.state({\r\n        name: 'formPnc',\r\n        url: '/formPnc',\r\n        component: 'formPncComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formPncAdd',\r\n        url: '/formPnc/add',\r\n        component: 'formPncAddComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formPncEdit',\r\n        url: '/formPnc/{formId}/edit',\r\n        component: 'formPncEditComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formPncView',\r\n        url: '/formPnc/{formId}',\r\n        component: 'formPncViewComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formPncAddEntry',\r\n        url: '/formPnc/{formId}/entry',\r\n        component: 'formPncAddEntryComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formPncEditEntry',\r\n        url: '/formPnc/{formId}/entry/{entryId}/edit',\r\n        component: 'formPncEditEntryComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formPncViewEntry',\r\n        url: '/formPnc/{formId}/entry/{entryId}',\r\n        component: 'formPncViewEntryComponent'\r\n    });\r\n\r\n\r\n    $stateProvider.state({\r\n        name: 'users',\r\n        url: '/users',\r\n        component: 'usersComponent'\r\n    });\r\n    \r\n    $urlRouterProvider.otherwise('/dashboard');\r\n});\r\n\r\napp.controller('mainController', function ($http) {\r\n    const vm = this;\r\n    const pagePrefix = 'app/clientapp/administrator/templates/';\r\n    vm.page = `${pagePrefix}/users.html`;\r\n\r\n    vm.setPage = function (page, event) {\r\n        //debugger;\r\n        var ar = arguments;\r\n        vm.page = `${pagePrefix}/${page}`;\r\n\r\n        event.preventDefault();\r\n    };\r\n\r\n    //var payload = {\r\n    //    items: [\r\n    //        {\r\n    //            barangay: 'gg'\r\n    //        }]\r\n    //};\r\n\r\n    //$http.post('https://localhost:44348/hsforms/api/nepi/upload', payload)\r\n    //    .then(function (resp) {\r\n    //        alert('oye1');\r\n    //    }, function (err) {\r\n    //        alert('oye2');\r\n    //    });\r\n    \r\n\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./ClientApp/administrator/app.js?");

/***/ }),

/***/ "./ClientApp/administrator/main.js":
/*!*****************************************!*\
  !*** ./ClientApp/administrator/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ \"./ClientApp/administrator/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ \"./node_modules/bootstrap/dist/js/bootstrap.bundle.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! startbootstrap-sb-admin/js/sb-admin */ \"./node_modules/startbootstrap-sb-admin/js/sb-admin.js\");\n/* harmony import */ var startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ \"./ClientApp/administrator/app.js\");\n/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard */ \"./ClientApp/administrator/pages/dashboard/index.js\");\n/* harmony import */ var _pages_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/forms */ \"./ClientApp/administrator/pages/forms/index.js\");\n/* harmony import */ var _pages_formNepi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/formNepi */ \"./ClientApp/administrator/pages/formNepi/index.js\");\n/* harmony import */ var _pages_formNepi_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/formNepi/add */ \"./ClientApp/administrator/pages/formNepi/add/index.js\");\n/* harmony import */ var _pages_formNepi_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/formNepi/edit */ \"./ClientApp/administrator/pages/formNepi/edit/index.js\");\n/* harmony import */ var _pages_formNepi_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/formNepi/view */ \"./ClientApp/administrator/pages/formNepi/view/index.js\");\n/* harmony import */ var _pages_formNepi_addEntry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/formNepi/addEntry */ \"./ClientApp/administrator/pages/formNepi/addEntry/index.js\");\n/* harmony import */ var _pages_formNepi_editEntry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/formNepi/editEntry */ \"./ClientApp/administrator/pages/formNepi/editEntry/index.js\");\n/* harmony import */ var _pages_formNepi_viewEntry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/formNepi/viewEntry */ \"./ClientApp/administrator/pages/formNepi/viewEntry/index.js\");\n/* harmony import */ var _pages_formFp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/formFp */ \"./ClientApp/administrator/pages/formFp/index.js\");\n/* harmony import */ var _pages_formFp_add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/formFp/add */ \"./ClientApp/administrator/pages/formFp/add/index.js\");\n/* harmony import */ var _pages_formFp_edit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/formFp/edit */ \"./ClientApp/administrator/pages/formFp/edit/index.js\");\n/* harmony import */ var _pages_formFp_view__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/formFp/view */ \"./ClientApp/administrator/pages/formFp/view/index.js\");\n/* harmony import */ var _pages_formFp_addEntry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/formFp/addEntry */ \"./ClientApp/administrator/pages/formFp/addEntry/index.js\");\n/* harmony import */ var _pages_formFp_editEntry__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/formFp/editEntry */ \"./ClientApp/administrator/pages/formFp/editEntry/index.js\");\n/* harmony import */ var _pages_formFp_viewEntry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/formFp/viewEntry */ \"./ClientApp/administrator/pages/formFp/viewEntry/index.js\");\n/* harmony import */ var _pages_formPnc__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/formPnc */ \"./ClientApp/administrator/pages/formPnc/index.js\");\n/* harmony import */ var _pages_formPnc_add__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/formPnc/add */ \"./ClientApp/administrator/pages/formPnc/add/index.js\");\n/* harmony import */ var _pages_formPnc_edit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/formPnc/edit */ \"./ClientApp/administrator/pages/formPnc/edit/index.js\");\n/* harmony import */ var _pages_formPnc_view__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/formPnc/view */ \"./ClientApp/administrator/pages/formPnc/view/index.js\");\n/* harmony import */ var _pages_formPnc_addEntry__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/formPnc/addEntry */ \"./ClientApp/administrator/pages/formPnc/addEntry/index.js\");\n/* harmony import */ var _pages_formPnc_editEntry__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/formPnc/editEntry */ \"./ClientApp/administrator/pages/formPnc/editEntry/index.js\");\n/* harmony import */ var _pages_formPnc_viewEntry__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/formPnc/viewEntry */ \"./ClientApp/administrator/pages/formPnc/viewEntry/index.js\");\n/* harmony import */ var _pages_users__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/users */ \"./ClientApp/administrator/pages/users/index.js\");\n﻿\r\n\r\n\r\n//import 'fullcalendar/dist/fullcalendar';\r\n\r\n\r\n\r\n\r\n//import 'bootstrap-material-design/dist/js/bootstrap-material-design';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/administrator/main.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/dashboard/index.js":
/*!**********************************************************!*\
  !*** ./ClientApp/administrator/pages/dashboard/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\n\r\n\r\nfunction controller($http, toastr) {\r\n    const vm = this;\r\n\r\n\r\n    vm.init = function () {\r\n        \r\n        $http.get('api/administrator/dashboard')\r\n            .then(function (resp) {\r\n                vm.data = resp.data;\r\n                \r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n\r\n}\r\n\r\ncontroller.$inject = ['$http', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('dashboardComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/dashboard/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/dashboard/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formFp/add/index.js":
/*!***********************************************************!*\
  !*** ./ClientApp/administrator/pages/formFp/add/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.save = function (id) {\r\n        $http.post(`api/fp/add`, vm.item)\r\n            .then(function (resp) {\r\n                toastr.success('Form Added');\r\n                $state.go('formFpView', { formId: resp.data});\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        vm.item = {\r\n            barangay: '', municipality: '', province: '', region: ''\r\n        };\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formFpAddComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formFp/add/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formFp/add/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formFp/addEntry/index.js":
/*!****************************************************************!*\
  !*** ./ClientApp/administrator/pages/formFp/addEntry/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n    vm.saveEntry = function () {\r\n\r\n        if (vm.entry.birthDate === null) {\r\n            toastr.warning('Please enter valid birth date');\r\n            return;\r\n        }\r\n        \r\n        $http.post('api/fp/entry/add', vm.entry)\r\n            .then(function (resp) {\r\n                toastr.success('Entry added');\r\n                $state.go('formFpViewEntry', { formId: vm.id, entryId: resp.data });\r\n            }, function (err) {\r\n                toastr.error('error');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/fps/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                var now = new Date();\r\n\r\n                vm.entry = {\r\n                    tcL_FPId: vm.id,\r\n\r\n                    dateOfRegistration: now,\r\n                    familySerialNumber: '',                    \r\n                    name: '',\r\n                    address: '',\r\n\r\n                    birthDate: null,\r\n                    typeOfClient: '',\r\n                    \r\n                    presentMethod: '',\r\n                    previousMethod: '',\r\n\r\n                    \r\n                    dateNextService1: null,\r\n                    dateAccomplishedService1: null,\r\n\r\n                    dateNextService2: null,\r\n                    dateAccomplishedService2: null,\r\n\r\n                    dateNextService3: null,\r\n                    dateAccomplishedService3: null,\r\n\r\n                    dateNextService4: null,\r\n                    dateAccomplishedService4: null,\r\n\r\n                    dateNextService5: null,\r\n                    dateAccomplishedService5: null,\r\n\r\n                    dateNextService6: null,\r\n                    dateAccomplishedService6: null,\r\n\r\n                    dateNextService7: null,\r\n                    dateAccomplishedService7: null,\r\n\r\n                    dateNextService8: null,\r\n                    dateAccomplishedService8: null,\r\n\r\n                    dateNextService9: null,\r\n                    dateAccomplishedService9: null,\r\n\r\n                    dateNextService10: null,\r\n                    dateAccomplishedService10: null,\r\n\r\n                    dateNextService11: null,\r\n                    dateAccomplishedService11: null,\r\n\r\n                    dateNextService12: null,\r\n                    dateAccomplishedService12: null,\r\n\r\n                    dropoutDate: null,\r\n                    dropoutReason: '',\r\n                    \r\n                    remarks: ''\r\n                };\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formFpAddEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formFp/addEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formFp/addEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formFp/edit/index.js":
/*!************************************************************!*\
  !*** ./ClientApp/administrator/pages/formFp/edit/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.save = function (id) {\r\n        var payload = {\r\n            formId: vm.item.tcL_FPId,\r\n            barangay: vm.item.barangay,\r\n            municipality: vm.item.municipality,\r\n            province: vm.item.province,\r\n            region: vm.item.region\r\n        };\r\n        \r\n        $http.post(`api/fp/edit`, payload)\r\n            .then(function (resp) {\r\n                toastr.success('Form Updated');\r\n                $state.go('formFpView', { formId: payload.formId});\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/fps/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formFpEditComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formFp/edit/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formFp/edit/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formFp/editEntry/index.js":
/*!*****************************************************************!*\
  !*** ./ClientApp/administrator/pages/formFp/editEntry/index.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.formId = $state.params.formId;\r\n    vm.entryId = $state.params.entryId;\r\n\r\n    vm.saveEntry = function () {\r\n        if (vm.entry.birthDate === null) {\r\n            toastr.warning('Please enter valid birth date');\r\n            return;\r\n        }\r\n\r\n        $http.post('api/fp/entry/edit', vm.entry)\r\n            .then(function (resp) {\r\n                toastr.success('Entry Updated');\r\n\r\n                $state.go('formFpViewEntry', { formId: vm.formId, entryId: vm.entryId });\r\n            }, function (err) {\r\n                toastr.error('error');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/fps/${vm.formId}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                for (var i = 0; i < vm.item.entries.length; i++) {\r\n                    var entry = vm.item.entries[i];\r\n\r\n                    if (entry.tcL_FP_EntryId === vm.entryId) {\r\n                        vm.entry = entry;\r\n                        //debugger;\r\n                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);\r\n\r\n                        vm.entry.birthDate = new Date(vm.entry.birthDate);\r\n\r\n                        if (vm.entry.dateNextService1 !== null)\r\n                            vm.entry.dateNextService1 = new Date(vm.entry.dateNextService1);\r\n                        if (vm.entry.dateAccomplishedService1 !== null)\r\n                            vm.entry.dateAccomplishedService1 = new Date(vm.entry.dateAccomplishedService1);\r\n                        if (vm.entry.dateNextService2 !== null)\r\n                            vm.entry.dateNextService2 = new Date(vm.entry.dateNextService2);\r\n                        if (vm.entry.dateAccomplishedService2 !== null)\r\n                            vm.entry.dateAccomplishedService2 = new Date(vm.entry.dateAccomplishedService2);\r\n                        if (vm.entry.dateNextService3 !== null)\r\n                            vm.entry.dateNextService3 = new Date(vm.entry.dateNextService3);\r\n                        if (vm.entry.dateAccomplishedService3 !== null)\r\n                            vm.entry.dateAccomplishedService3 = new Date(vm.entry.dateAccomplishedService3);\r\n\r\n                        if (vm.entry.dateNextService4 !== null)\r\n                            vm.entry.dateNextService4 = new Date(vm.entry.dateNextService4);\r\n                        if (vm.entry.dateAccomplishedService4 !== null)\r\n                            vm.entry.dateAccomplishedService4 = new Date(vm.entry.dateAccomplishedService4);\r\n                        if (vm.entry.dateNextService5 !== null)\r\n                            vm.entry.dateNextService5 = new Date(vm.entry.dateNextService5);\r\n                        if (vm.entry.dateAccomplishedService5 !== null)\r\n                            vm.entry.dateAccomplishedService5 = new Date(vm.entry.dateAccomplishedService5);\r\n                        if (vm.entry.dateNextService6 !== null)\r\n                            vm.entry.dateNextService6 = new Date(vm.entry.dateNextService6);\r\n                        if (vm.entry.dateAccomplishedService6 !== null)\r\n                            vm.entry.dateAccomplishedService6 = new Date(vm.entry.dateAccomplishedService6);\r\n                        if (vm.entry.dateNextService7 !== null)\r\n                            vm.entry.dateNextService7 = new Date(vm.entry.dateNextService7);\r\n                        if (vm.entry.dateAccomplishedService7 !== null)\r\n                            vm.entry.dateAccomplishedService7 = new Date(vm.entry.dateAccomplishedService7);\r\n                        if (vm.entry.dateNextService8 !== null)\r\n                            vm.entry.dateNextService8 = new Date(vm.entry.dateNextService8);\r\n                        if (vm.entry.dateAccomplishedService8 !== null)\r\n                            vm.entry.dateAccomplishedService8 = new Date(vm.entry.dateAccomplishedService8);\r\n                        if (vm.entry.dateNextService9 !== null)\r\n                            vm.entry.dateNextService9 = new Date(vm.entry.dateNextService9);\r\n                        if (vm.entry.dateAccomplishedService9 !== null)\r\n                            vm.entry.dateAccomplishedService9 = new Date(vm.entry.dateAccomplishedService9);\r\n                        if (vm.entry.dateNextService10 !== null)\r\n                            vm.entry.dateNextService10 = new Date(vm.entry.dateNextService10);\r\n                        if (vm.entry.dateAccomplishedService10 !== null)\r\n                            vm.entry.dateAccomplishedService10 = new Date(vm.entry.dateAccomplishedService10);\r\n                        if (vm.entry.dateNextService11 !== null)\r\n                            vm.entry.dateNextService11 = new Date(vm.entry.dateNextService11);\r\n                        if (vm.entry.dateAccomplishedService11 !== null)\r\n                            vm.entry.dateAccomplishedService11 = new Date(vm.entry.dateAccomplishedService11);\r\n                        if (vm.entry.dateNextService12 !== null)\r\n                            vm.entry.dateNextService12 = new Date(vm.entry.dateNextService12);\r\n                        if (vm.entry.dateAccomplishedService12 !== null)\r\n                            vm.entry.dateAccomplishedService12 = new Date(vm.entry.dateAccomplishedService12);\r\n                        if (vm.entry.dropoutDate !== null)\r\n                            vm.entry.dropoutDate = new Date(vm.entry.dropoutDate);\r\n\r\n                        return;\r\n                    }\r\n                }\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formFpEditEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formFp/editEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formFp/editEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formFp/index.js":
/*!*******************************************************!*\
  !*** ./ClientApp/administrator/pages/formFp/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, toastr) {\r\n    const vm = this;\r\n\r\n    vm.init = function () {\r\n        $http.get('api/administrator/forms/fps')\r\n            .then(function (resp) {\r\n                vm.items = resp.data;\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formFpComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formFp/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formFp/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formFp/view/index.js":
/*!************************************************************!*\
  !*** ./ClientApp/administrator/pages/formFp/view/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.deleteEntry = function (id) {\r\n        $http.post(`api/fp/entry/${id}/delete`)\r\n            .then(function (resp) {\r\n                toastr.success('Entry removed');\r\n                vm.init();\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/fps/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formFpViewComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formFp/view/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formFp/view/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formFp/viewEntry/index.js":
/*!*****************************************************************!*\
  !*** ./ClientApp/administrator/pages/formFp/viewEntry/index.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.formId = $state.params.formId;\r\n    vm.entryId = $state.params.entryId;\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/fps/${vm.formId}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                for (var i = 0; i < vm.item.entries.length; i++) {\r\n                    var entry = vm.item.entries[i];\r\n\r\n                    if (entry.tcL_FP_EntryId === vm.entryId) {\r\n                        vm.entry = entry;\r\n\r\n                        \r\n                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);\r\n\r\n                        vm.entry.birthDate = new Date(vm.entry.birthDate);\r\n\r\n                        //if (vm.entry.dateNextService1 !== null)\r\n                        //    vm.entry.dateNextService1 = new Date(vm.entry.dateNextService1);\r\n                        //if (vm.entry.dateAccomplishedService1 !== null)\r\n                        //vm.entry.dateAccomplishedService1 = new Date(vm.entry.dateAccomplishedService1);\r\n\r\n                        ////vm.entry.dateNextService2 = new Date(vm.entry.dateNextService2);\r\n                        ////vm.entry.dateAccomplishedService2 = new Date(vm.entry.dateAccomplishedService2);\r\n                        //vm.entry.dateNextService3 = new Date(vm.entry.dateNextService3);\r\n                        //vm.entry.dateAccomplishedService3 = new Date(vm.entry.dateAccomplishedService3);\r\n                        //vm.entry.dateNextService4 = new Date(vm.entry.dateNextService4);\r\n                        //vm.entry.dateAccomplishedService4 = new Date(vm.entry.dateAccomplishedService4);\r\n                        //vm.entry.dateNextService5 = new Date(vm.entry.dateNextService5);\r\n                        //vm.entry.dateAccomplishedService5 = new Date(vm.entry.dateAccomplishedService5);\r\n\r\n                        //vm.entry.dateNextService6 = new Date(vm.entry.dateNextService6);\r\n                        //vm.entry.dateAccomplishedService6 = new Date(vm.entry.dateAccomplishedService6);\r\n                        //vm.entry.dateNextService7 = new Date(vm.entry.dateNextService7);\r\n                        //vm.entry.dateAccomplishedService7 = new Date(vm.entry.dateAccomplishedService7);\r\n\r\n                        //vm.entry.dateNextService8 = new Date(vm.entry.dateNextService8);\r\n                        //vm.entry.dateAccomplishedService8 = new Date(vm.entry.dateAccomplishedService8);\r\n\r\n                        //vm.entry.dateNextService9 = new Date(vm.entry.dateNextService9);\r\n                        //vm.entry.dateAccomplishedService9 = new Date(vm.entry.dateAccomplishedService9);\r\n\r\n                        //vm.entry.dateNextService10 = new Date(vm.entry.dateNextService10);\r\n                        //vm.entry.dateAccomplishedService10 = new Date(vm.entry.dateAccomplishedService10);\r\n\r\n                        //vm.entry.dateNextService11 = new Date(vm.entry.dateNextService11);\r\n                        //vm.entry.dateAccomplishedService11 = new Date(vm.entry.dateAccomplishedService11);\r\n\r\n                        //vm.entry.dateNextService12 = new Date(vm.entry.dateNextService12);\r\n                        //vm.entry.dateAccomplishedService12 = new Date(vm.entry.dateAccomplishedService12);\r\n\r\n                        //vm.entry.dropoutDate = new Date(vm.entry.dropoutDate);\r\n\r\n                        return;\r\n                    }\r\n                }\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formFpViewEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formFp/viewEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formFp/viewEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formNepi/add/index.js":
/*!*************************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/add/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.save = function () {\r\n        debugger;\r\n        $http.post(`api/nepi/add`, vm.item)\r\n            .then(function (resp) {\r\n                toastr.success('Form Added');\r\n                $state.go('formNepiView', { formId: resp.data});\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        vm.item = {\r\n            barangay: '', municipality: '', province: '', region: ''\r\n        };\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiAddComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/add/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/add/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formNepi/addEntry/index.js":
/*!******************************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/addEntry/index.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n    vm.saveEntry = function () {\r\n\r\n        if (vm.entry.dateOfBirth === null) {\r\n            toastr.warning('Please enter valid birth date');\r\n            return;\r\n        }\r\n\r\n        $http.post('api/nepi/entry/add', vm.entry)\r\n            .then(function (resp) {\r\n                toastr.success('Entry added');\r\n                $state.go('formNepiViewEntry', { formId: vm.id, entryId: resp.data });\r\n            }, function (err) {\r\n                toastr.error('error');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/nepis/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                var now = new Date();\r\n\r\n                vm.entry = {\r\n                    tcL_NEPIId: vm.id,\r\n\r\n                    dateOfRegistration: now,\r\n                    dateOfBirth: null,\r\n                    familySerialNumber: '',\r\n                    nhts: '',\r\n                    nameOfChild: '',\r\n                    weight: 0,\r\n                    height: 0,\r\n                    gender: '',\r\n                    nameOfMother: '',\r\n                    address: '',\r\n\r\n                    dateNewbornScreeningReferral: null,\r\n                    dateNewbornScreeningDone: null,\r\n\r\n                    cpabttStatus: '',\r\n                    cpabttAssessed: null,\r\n\r\n                    childExclusiveBreastFeed1: false,\r\n                    childExclusiveBreastFeed2: false,\r\n                    childExclusiveBreastFeed3: false,\r\n                    childExclusiveBreastFeed4: false,\r\n                    childExclusiveBreastFeed5: false,\r\n                    childExclusiveBreastFeed6: null,\r\n\r\n                    complimentaryFeeding6: false,\r\n                    complimentaryFeeding7: false,\r\n                    complimentaryFeeding8: false,\r\n\r\n\r\n                    bcg: null,\r\n\r\n                    hepaB1Within24hrs: null,\r\n                    hepaB1MoreThan24hrs: null,\r\n\r\n                    pentavalent1: null,\r\n                    pentavalent2: null,\r\n                    pentavalent3: null,\r\n\r\n                    opV1: null,\r\n                    opV2: null,\r\n                    opV3: null,\r\n\r\n                    ipv: null,\r\n\r\n                    mcV1: null,\r\n                    mcV2: null,\r\n\r\n                    dateFullyImmunizedChild: null,\r\n\r\n                    rotaVirusVaccine1: null,\r\n                    rotaVirusVaccine2: null,\r\n\r\n\r\n                    pcV1: null,\r\n                    pcV2: null,\r\n                    pcV3: null,\r\n\r\n                    vitaminA1: false,\r\n                    vitaminA2: false,\r\n                    vitaminA3: false,\r\n\r\n                    ironA1: false,\r\n                    ironA2: false,\r\n                    mnP1: false,\r\n                    mnP2: false,\r\n\r\n                    deworming: null,\r\n\r\n                    remarks: ''\r\n                };\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiAddEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/addEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/addEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formNepi/edit/index.js":
/*!**************************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/edit/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n    \r\n\r\n    vm.save = function () {\r\n        var payload = {\r\n            formId: vm.id,\r\n            barangay: vm.item.barangay,\r\n            municipality: vm.item.municipality,\r\n            province: vm.item.province,\r\n            region: vm.item.region\r\n        };\r\n\r\n        $http.post(`api/nepi/edit`, payload)\r\n            .then(function (resp) {\r\n                toastr.success('Form Updated');\r\n                $state.go('formNepiView', { formId: vm.id});\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/nepis/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                for (var i = 0; i < vm.item.entries.length; i++) {\r\n                    var entry = vm.item.entries[i];\r\n\r\n                    if (entry.tcL_NEPI_EntryId === vm.entryId) {\r\n                        vm.entry = entry;\r\n                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);\r\n                        //debugger;\r\n                        return;\r\n                    }\r\n                }\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiEditComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/edit/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/edit/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formNepi/editEntry/index.js":
/*!*******************************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/editEntry/index.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.formId = $state.params.formId;\r\n    vm.entryId = $state.params.entryId;\r\n\r\n    vm.saveEntry = function () {\r\n        if (vm.entry.dateOfBirth === null) {\r\n            toastr.warning('Please enter valid birth date');\r\n            return;\r\n        }\r\n\r\n        $http.post('api/nepi/entry/edit', vm.entry)\r\n            .then(function (resp) {\r\n                toastr.success('Entry Updated');\r\n\r\n                $state.go('formNepiViewEntry', { formId: vm.formId, entryId: vm.entryId });\r\n            }, function (err) {\r\n                toastr.error('error');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/nepis/${vm.formId}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                for (var i = 0; i < vm.item.entries.length; i++) {\r\n                    var entry = vm.item.entries[i];\r\n\r\n                    if (entry.tcL_NEPI_EntryId === vm.entryId) {\r\n                        vm.entry = entry;\r\n                        //debugger;\r\n                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);\r\n                        vm.entry.dateOfBirth = new Date(vm.entry.dateOfBirth);\r\n\r\n                        if (vm.entry.dateNewbornScreeningReferral !== null)\r\n                            vm.entry.dateNewbornScreeningReferral = new Date(vm.entry.dateNewbornScreeningReferral);\r\n                        if (vm.entry.dateNewbornScreeningDone !== null)\r\n                            vm.entry.dateNewbornScreeningDone = new Date(vm.entry.dateNewbornScreeningDone);\r\n                        if (vm.entry.cpabttAssessed !== null)\r\n                            vm.entry.cpabttAssessed = new Date(vm.entry.cpabttAssessed);\r\n                        if (vm.entry.childExclusiveBreastFeed6 !== null)\r\n                            vm.entry.childExclusiveBreastFeed6 = new Date(vm.entry.childExclusiveBreastFeed6);\r\n                        if (vm.entry.bcg !== null)\r\n                            vm.entry.bcg = new Date(vm.entry.bcg);\r\n                        if (vm.entry.hepaB1Within24hrs !== null)\r\n                            vm.entry.hepaB1Within24hrs = new Date(vm.entry.hepaB1Within24hrs);\r\n                        if (vm.entry.hepaB1MoreThan24hrs !== null)\r\n                            vm.entry.hepaB1MoreThan24hrs = new Date(vm.entry.hepaB1MoreThan24hrs);\r\n                        if (vm.entry.pentavalent1 !== null)\r\n                            vm.entry.pentavalent1 = new Date(vm.entry.pentavalent1);\r\n                        if (vm.entry.pentavalent2 !== null)\r\n                            vm.entry.pentavalent2 = new Date(vm.entry.pentavalent2);\r\n                        if (vm.entry.pentavalent3 !== null)\r\n                            vm.entry.pentavalent3 = new Date(vm.entry.pentavalent3);\r\n                        if (vm.entry.opV1 !== null)\r\n                            vm.entry.opV1 = new Date(vm.entry.opV1);\r\n                        if (vm.entry.opV2 !== null)\r\n                            vm.entry.opV2 = new Date(vm.entry.opV2);\r\n                        if (vm.entry.opV3 !== null)\r\n                            vm.entry.opV3 = new Date(vm.entry.opV3);\r\n                        if (vm.entry.ipv !== null)\r\n\r\n                            vm.entry.ipv = new Date(vm.entry.ipv);\r\n                        if (vm.entry.mcV1 !== null)\r\n                            vm.entry.mcV1 = new Date(vm.entry.mcV1);\r\n                        if (vm.entry.mcV2 !== null)\r\n                            vm.entry.mcV2 = new Date(vm.entry.mcV2);\r\n                        if (vm.entry.dateFullyImmunizedChild !== null)\r\n\r\n                            vm.entry.dateFullyImmunizedChild = new Date(vm.entry.dateFullyImmunizedChild);\r\n                        if (vm.entry.rotaVirusVaccine1 !== null)\r\n                            vm.entry.rotaVirusVaccine1 = new Date(vm.entry.rotaVirusVaccine1);\r\n                        if (vm.entry.rotaVirusVaccine2 !== null)\r\n                            vm.entry.rotaVirusVaccine2 = new Date(vm.entry.rotaVirusVaccine2);\r\n                        if (vm.entry.pcV1 !== null)\r\n                            vm.entry.pcV1 = new Date(vm.entry.pcV1);\r\n                        if (vm.entry.pcV2 !== null)\r\n                            vm.entry.pcV2 = new Date(vm.entry.pcV2);\r\n                        if (vm.entry.pcV3 !== null)\r\n                            vm.entry.pcV3 = new Date(vm.entry.pcV3);\r\n                        if (vm.entry.deworming !== null)\r\n                            vm.entry.deworming = new Date(vm.entry.deworming);\r\n\r\n                        return;\r\n                    }\r\n                }\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiEditEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/editEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/editEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formNepi/index.js":
/*!*********************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, toastr) {\r\n    const vm = this;\r\n\r\n\r\n\r\n    vm.init = function () {\r\n        $http.get('api/administrator/forms/nepis')\r\n            .then(function (resp) {\r\n                vm.items = resp.data;\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formNepi/view/index.js":
/*!**************************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/view/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.deleteEntry = function (id) {\r\n        $http.post(`api/nepi/entry/${id}/delete`)\r\n            .then(function (resp) {\r\n                toastr.success('Entry removed');\r\n                vm.init();\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/nepis/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiViewComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/view/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/view/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formNepi/viewEntry/index.js":
/*!*******************************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/viewEntry/index.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.formId = $state.params.formId;\r\n    vm.entryId = $state.params.entryId;\r\n    \r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/nepis/${vm.formId}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                for (var i = 0; i < vm.item.entries.length; i++) {\r\n                    var entry = vm.item.entries[i];\r\n\r\n                    if (entry.tcL_NEPI_EntryId === vm.entryId) {\r\n                        vm.entry = entry;\r\n                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);\r\n                        //debugger;\r\n                        return;\r\n                    }\r\n                }\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiViewEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/viewEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/viewEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formPnc/add/index.js":
/*!************************************************************!*\
  !*** ./ClientApp/administrator/pages/formPnc/add/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.save = function (id) {\r\n        $http.post(`api/pnc/add`, vm.item)\r\n            .then(function (resp) {\r\n                toastr.success('Form Added');\r\n                $state.go('formPncView', { formId: resp.data});\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        vm.item = {\r\n            barangay: '', municipality: '', province: '', region: ''\r\n        };\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPncAddComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPnc/add/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPnc/add/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formPnc/addEntry/index.js":
/*!*****************************************************************!*\
  !*** ./ClientApp/administrator/pages/formPnc/addEntry/index.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n    vm.saveEntry = function () {\r\n\r\n        if (vm.entry.birthDate === null) {\r\n            toastr.warning('Please enter valid birth date');\r\n            return;\r\n        }\r\n\r\n        $http.post('api/pnc/entry/add', vm.entry)\r\n            .then(function (resp) {\r\n                toastr.success('Entry added');\r\n                $state.go('formPncViewEntry', { formId: vm.id, entryId: resp.data });\r\n            }, function (err) {\r\n                toastr.error('error');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/pncs/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                var now = new Date();\r\n\r\n                vm.entry = {\r\n                    tcL_PNCId: vm.id,\r\n\r\n                    dateOfRegistration: now,\r\n                    familySerialNumber: '',\r\n                    name: '',\r\n                    address: '',\r\n                    age: 0,\r\n                    lmpDate: null,\r\n                    lmpgp: '',\r\n                    edc: null,\r\n\r\n                    prenatalVisitTrimester1: null,\r\n                    prenatalVisitTrimester2: null,\r\n                    prenatalVisitTrimester3: null,\r\n\r\n                    //  PART II\r\n\r\n                    tetanusStatus: '',\r\n\r\n                    dateTetanusToxiodVaccine1: null,\r\n                    dateTetanusToxiodVaccine2: null,\r\n                    dateTetanusToxiodVaccine3: null,\r\n                    dateTetanusToxiodVaccine4: null,\r\n                    dateTetanusToxiodVaccine5: null,\r\n\r\n                    ironWithFolicDateGiven1: null,\r\n                    ironWithFolicNumberGiven1: 0,\r\n\r\n                    ironWithFolicDateGiven2: null,\r\n                    ironWithFolicNumberGiven2: 0,\r\n\r\n                    ironWithFolicDateGiven3: null,\r\n                    ironWithFolicNumberGiven3: 0,\r\n\r\n                    ironWithFolicDateGiven4: null,\r\n                    ironWithFolicNumberGiven4: 0,\r\n\r\n                    ironWithFolicDateGiven5: null,\r\n                    ironWithFolicNumberGiven5: 0,\r\n\r\n                    ironWithFolicDateGiven6: null,\r\n                    ironWithFolicNumberGiven6: 0,\r\n\r\n                    dateSTITested: null,\r\n                    dateSTIResult: null,\r\n                    dateSTIPenicillin: null,\r\n\r\n                    pregnancyDateTerminated: null,\r\n                    pregnancyOutcome: '',\r\n                    pregnancyGender: '',\r\n\r\n                    birthWeight : 0,\r\n                    placeOfHealthFacility: '',\r\n                    placeOfNIO: '',\r\n                    attendedBy: '',\r\n\r\n                    remarks: ''\r\n                };\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPncAddEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPnc/addEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPnc/addEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formPnc/edit/index.js":
/*!*************************************************************!*\
  !*** ./ClientApp/administrator/pages/formPnc/edit/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.save = function (id) {\r\n        var payload = {\r\n            formId: vm.item.tcL_PNCId,\r\n            barangay: vm.item.barangay,\r\n            municipality: vm.item.municipality,\r\n            province: vm.item.province,\r\n            region: vm.item.region\r\n        };\r\n        \r\n        $http.post(`api/pnc/edit`, payload)\r\n            .then(function (resp) {\r\n                toastr.success('Form Updated');\r\n                $state.go('formPncView', { formId: payload.formId});\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/pncs/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPncEditComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPnc/edit/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPnc/edit/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formPnc/editEntry/index.js":
/*!******************************************************************!*\
  !*** ./ClientApp/administrator/pages/formPnc/editEntry/index.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.formId = $state.params.formId;\r\n    vm.entryId = $state.params.entryId;\r\n\r\n    vm.saveEntry = function () {\r\n        if (vm.entry.birthDate === null) {\r\n            toastr.warning('Please enter valid birth date');\r\n            return;\r\n        }\r\n\r\n        $http.post('api/pnc/entry/edit', vm.entry)\r\n            .then(function (resp) {\r\n                toastr.success('Entry Updated');\r\n\r\n                $state.go('formPncViewEntry', { formId: vm.formId, entryId: vm.entryId });\r\n            }, function (err) {\r\n                toastr.error('error');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/pncs/${vm.formId}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                for (var i = 0; i < vm.item.entries.length; i++) {\r\n                    var entry = vm.item.entries[i];\r\n\r\n                    if (entry.tcL_PNC_EntryId === vm.entryId) {\r\n                        vm.entry = entry;\r\n                        //debugger;\r\n                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);\r\n\r\n                        if (vm.entry.lmpDate !== null)\r\n                            vm.entry.lmpDate = new Date(vm.entry.lmpDate);\r\n                        if (vm.entry.edc !== null)\r\n                            vm.entry.edc = new Date(vm.entry.edc);\r\n\r\n                        if (vm.entry.prenatalVisitTrimester1 !== null)\r\n                            vm.entry.prenatalVisitTrimester1 = new Date(vm.entry.prenatalVisitTrimester1);\r\n                        if (vm.entry.prenatalVisitTrimester2 !== null)\r\n                            vm.entry.prenatalVisitTrimester2 = new Date(vm.entry.prenatalVisitTrimester2);\r\n                        if (vm.entry.prenatalVisitTrimester3 !== null)\r\n                            vm.entry.prenatalVisitTrimester3 = new Date(vm.entry.prenatalVisitTrimester3);\r\n                        if (vm.entry.dateTetanusToxiodVaccine1 !== null)\r\n                            vm.entry.dateTetanusToxiodVaccine1 = new Date(vm.entry.dateTetanusToxiodVaccine1);\r\n                        if (vm.entry.dateTetanusToxiodVaccine2 !== null)\r\n                            vm.entry.dateTetanusToxiodVaccine2 = new Date(vm.entry.dateTetanusToxiodVaccine2);\r\n                        if (vm.entry.dateTetanusToxiodVaccine3 !== null)\r\n                            vm.entry.dateTetanusToxiodVaccine3 = new Date(vm.entry.dateTetanusToxiodVaccine3);\r\n                        if (vm.entry.dateTetanusToxiodVaccine4 !== null)\r\n                            vm.entry.dateTetanusToxiodVaccine4 = new Date(vm.entry.dateTetanusToxiodVaccine4);\r\n                        if (vm.entry.dateTetanusToxiodVaccine5 !== null)\r\n                            vm.entry.dateTetanusToxiodVaccine5 = new Date(vm.entry.dateTetanusToxiodVaccine5);\r\n\r\n                        if (vm.entry.ironWithFolicDateGiven1 !== null)\r\n                            vm.entry.ironWithFolicDateGiven1 = new Date(vm.entry.ironWithFolicDateGiven1);\r\n                        if (vm.entry.ironWithFolicDateGiven2 !== null)\r\n                            vm.entry.ironWithFolicDateGiven2 = new Date(vm.entry.ironWithFolicDateGiven2);\r\n                        if (vm.entry.ironWithFolicDateGiven3 !== null)\r\n                            vm.entry.ironWithFolicDateGiven3 = new Date(vm.entry.ironWithFolicDateGiven3);\r\n                        if (vm.entry.ironWithFolicDateGiven4 !== null)\r\n                            vm.entry.ironWithFolicDateGiven4 = new Date(vm.entry.ironWithFolicDateGiven4);\r\n                        if (vm.entry.ironWithFolicDateGiven5 !== null)\r\n                            vm.entry.ironWithFolicDateGiven5 = new Date(vm.entry.ironWithFolicDateGiven5);\r\n                        if (vm.entry.ironWithFolicDateGiven6 !== null)\r\n                            vm.entry.ironWithFolicDateGiven6 = new Date(vm.entry.ironWithFolicDateGiven6);\r\n\r\n                        if (vm.entry.dateSTITested !== null)\r\n                            vm.entry.dateSTITested = new Date(vm.entry.dateSTITested);\r\n                        if (vm.entry.dateSTIResult !== null)\r\n                            vm.entry.dateSTIResult = new Date(vm.entry.dateSTIResult);\r\n                        if (vm.entry.dateSTIPenicillin !== null)\r\n                            vm.entry.dateSTIPenicillin = new Date(vm.entry.dateSTIPenicillin);\r\n\r\n                        if (vm.entry.pregnancyDateTerminated !== null)\r\n                            vm.entry.pregnancyDateTerminated = new Date(vm.entry.pregnancyDateTerminated);\r\n\r\n                        return;\r\n                    }\r\n                }\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPncEditEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPnc/editEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPnc/editEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formPnc/index.js":
/*!********************************************************!*\
  !*** ./ClientApp/administrator/pages/formPnc/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, toastr) {\r\n    const vm = this;\r\n\r\n    vm.init = function () {\r\n        $http.get('api/administrator/forms/pncs')\r\n            .then(function (resp) {\r\n                vm.items = resp.data;\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPncComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPnc/index.html',\r\n    controller: controller\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPnc/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formPnc/view/index.js":
/*!*************************************************************!*\
  !*** ./ClientApp/administrator/pages/formPnc/view/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.deleteEntry = function (id) {\r\n        $http.post(`api/pnc/entry/${id}/delete`)\r\n            .then(function (resp) {\r\n                toastr.success('Entry removed');\r\n                vm.init();\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/pncs/${vm.id}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPncViewComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPnc/view/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPnc/view/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formPnc/viewEntry/index.js":
/*!******************************************************************!*\
  !*** ./ClientApp/administrator/pages/formPnc/viewEntry/index.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.formId = $state.params.formId;\r\n    vm.entryId = $state.params.entryId;\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/pncs/${vm.formId}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                for (var i = 0; i < vm.item.entries.length; i++) {\r\n                    var entry = vm.item.entries[i];\r\n\r\n                    if (entry.tcL_PNC_EntryId === vm.entryId) {\r\n                        vm.entry = entry;\r\n                        \r\n                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);\r\n                        \r\n                        return;\r\n                    }\r\n                }\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPncViewEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPnc/viewEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPnc/viewEntry/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/forms/index.js":
/*!******************************************************!*\
  !*** ./ClientApp/administrator/pages/forms/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller(toastr) {\r\n\r\n    toastr.success('oyexxxxxxxxxx');\r\n}\r\n\r\ncontroller.$inject = ['toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formsComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/forms/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/forms/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/users/index.js":
/*!******************************************************!*\
  !*** ./ClientApp/administrator/pages/users/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction usersController($http, toastr, $uibModal) {\r\n    const vm = this;\r\n    vm.selectedItem = null;\r\n    toastr.success('xx', 'yyxxxxxxxxxxxxy');\r\n    vm.setSelectedItem = function (item) {\r\n        if (item === vm.selectedItem) {\r\n            vm.selectedItem = null;\r\n            return;\r\n        }\r\n\r\n        vm.selectedItem = item;\r\n    };\r\n\r\n    vm.dlgAddUser = function () {\r\n        var modalInst = $uibModal.open({\r\n            animation: true,\r\n            templateUrl: 'app/clientapp/administrator/pages/users/addUser.html',\r\n            controller: 'addUserModalInstanceCtrl',\r\n            size: 'lg'\r\n        });\r\n\r\n        modalInst.result.then(function (resp) {\r\n\r\n            //var payload = {\r\n            //    id: vm.selectedItem.reservationId,\r\n            //    amountPaid: resp.amountPaid,\r\n            //    referenceNumber: resp.referenceNumber\r\n            //};\r\n\r\n            //$http.post(`api/customer/reservation/pay`, payload)\r\n            //    .then(function (resp) {\r\n            //        toastr.success('Reservation paid', 'Payment Success');\r\n            //        getReservations();\r\n            //    }, function (err) {\r\n            //        toastr.danger('An error occured while updating reservation', 'Payment Failed');\r\n            //    });\r\n        });\r\n    };\r\n\r\n    vm.dlgEditUser = function () {\r\n        var modalInst = $uibModal.open({\r\n            animation: true,\r\n            templateUrl: 'app/clientapp/administrator/pages/users/editUser.html',\r\n            controller: 'editUserModalInstanceCtrl',\r\n            size: 'lg',\r\n            resolve: {\r\n                item: function () {\r\n                    return vm.selectedItem;\r\n                }\r\n            }\r\n        });\r\n\r\n        modalInst.result.then(function (resp) {\r\n            $http.post(`api/administrator/users/edit`, resp)\r\n                .then(function (resp) {\r\n                    toastr.success('User updated', 'Update Success');\r\n                    init();\r\n                }, function (err) {\r\n                    toastr.error('An error occured while updating user', 'Update Failed');\r\n                });\r\n        });\r\n    };\r\n\r\n    function init() {\r\n        $http.get('api/administrator/users')\r\n            .then(function (resp) {\r\n                vm.items = resp.data;\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    }\r\n\r\n    init();\r\n}\r\nusersController.$inject = ['$http', 'toastr', '$uibModal'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('usersComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/users/index.html',\r\n    controller: usersController\r\n});\r\n\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].controller('addUserModalInstanceCtrl', function ($scope, $uibModalInstance) {\r\n\r\n    $scope.item = {};\r\n\r\n    $scope.ok = function () {\r\n        $uibModalInstance.close($scope.item);\r\n    };\r\n\r\n    $scope.cancel = function () {\r\n        $uibModalInstance.dismiss('cancel');\r\n    };\r\n});\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].controller('editUserModalInstanceCtrl', function ($scope, $uibModalInstance, toastr, item) {\r\n\r\n    $scope.item = angular.copy(item);\r\n\r\n    $scope.ok = function () {        \r\n        $uibModalInstance.close($scope.item);\r\n    };\r\n\r\n    $scope.cancel = function () {\r\n        $uibModalInstance.dismiss('cancel');\r\n    };\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/users/index.js?");

/***/ })

/******/ });