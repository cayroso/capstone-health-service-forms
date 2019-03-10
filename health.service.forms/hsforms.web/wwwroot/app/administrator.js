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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uirouter_angularjs_release_angular_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angularjs/release/angular-ui-router */ \"./node_modules/@uirouter/angularjs/release/angular-ui-router.js\");\n/* harmony import */ var _uirouter_angularjs_release_angular_ui_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uirouter_angularjs_release_angular_ui_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-ui-bootstrap/dist/ui-bootstrap-tpls */ \"./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js\");\n/* harmony import */ var angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_ui_bootstrap_dist_ui_bootstrap_tpls__WEBPACK_IMPORTED_MODULE_2__);\n﻿\r\n\r\n\r\n\r\n\r\n\r\nconst app = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', [__webpack_require__(/*! angular-animate */ \"./node_modules/angular-animate/index.js\"), __webpack_require__(/*! angular-toastr */ \"./node_modules/angular-toastr/index.js\"), 'ui.bootstrap', 'ui.router']);\r\n\r\napp.config(function ($stateProvider, $urlRouterProvider) {\r\n    \r\n    $stateProvider.state({\r\n        name: 'dashboard',\r\n        url: '/dashboard',\r\n        component: 'dashboardComponent'\r\n    });\r\n\r\n    $stateProvider.state({\r\n        name: 'formNepi',\r\n        url: '/formNepi',\r\n        component: 'formNepiComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiAdd',\r\n        url: '/formNepi/add',\r\n        component: 'formNepiAddComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiEdit',\r\n        url: '/formNepi/{formId}/edit',\r\n        component: 'formNepiEditComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiView',\r\n        url: '/formNepi/{formId}',\r\n        component: 'formNepiViewComponent'\r\n    });   \r\n    $stateProvider.state({\r\n        name: 'formNepiAddEntry',\r\n        url: '/formNepi/{formId}/entry',\r\n        component: 'formNepiAddEntryComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiEditEntry',\r\n        url: '/formNepi/{formId}/entry/{entryId}/edit',\r\n        component: 'formNepiEditEntryComponent'\r\n    });\r\n    $stateProvider.state({\r\n        name: 'formNepiViewEntry',\r\n        url: '/formNepi/{formId}/entry/{entryId}',\r\n        component: 'formNepiViewEntryComponent'\r\n    });\r\n\r\n    $stateProvider.state({\r\n        name: 'formPf',\r\n        url: '/formPf',\r\n        component: 'formPfComponent'\r\n    });\r\n\r\n    $stateProvider.state({\r\n        name: 'formPnc',\r\n        url: '/formPnc',\r\n        component: 'formPncComponent'\r\n    });\r\n    \r\n\r\n    $stateProvider.state({\r\n        name: 'users',\r\n        url: '/users',\r\n        component: 'usersComponent'\r\n    });\r\n    \r\n    $urlRouterProvider.otherwise('/dashboard');\r\n});\r\n\r\napp.controller('mainController', function ($http) {\r\n    const vm = this;\r\n    const pagePrefix = 'app/clientapp/administrator/templates/';\r\n    vm.page = `${pagePrefix}/users.html`;\r\n\r\n    vm.setPage = function (page, event) {\r\n        //debugger;\r\n        var ar = arguments;\r\n        vm.page = `${pagePrefix}/${page}`;\r\n\r\n        event.preventDefault();\r\n    };\r\n\r\n    //var payload = {\r\n    //    items: [\r\n    //        {\r\n    //            barangay: 'gg'\r\n    //        }]\r\n    //};\r\n\r\n    //$http.post('https://localhost:44348/hsforms/api/nepi/upload', payload)\r\n    //    .then(function (resp) {\r\n    //        alert('oye1');\r\n    //    }, function (err) {\r\n    //        alert('oye2');\r\n    //    });\r\n    \r\n\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./ClientApp/administrator/app.js?");

/***/ }),

/***/ "./ClientApp/administrator/main.js":
/*!*****************************************!*\
  !*** ./ClientApp/administrator/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ \"./ClientApp/administrator/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ \"./node_modules/bootstrap/dist/js/bootstrap.bundle.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! startbootstrap-sb-admin/js/sb-admin */ \"./node_modules/startbootstrap-sb-admin/js/sb-admin.js\");\n/* harmony import */ var startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(startbootstrap_sb_admin_js_sb_admin__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ \"./ClientApp/administrator/app.js\");\n/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard */ \"./ClientApp/administrator/pages/dashboard/index.js\");\n/* harmony import */ var _pages_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/forms */ \"./ClientApp/administrator/pages/forms/index.js\");\n/* harmony import */ var _pages_formNepi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/formNepi */ \"./ClientApp/administrator/pages/formNepi/index.js\");\n/* harmony import */ var _pages_formNepi_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/formNepi/add */ \"./ClientApp/administrator/pages/formNepi/add/index.js\");\n/* harmony import */ var _pages_formNepi_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/formNepi/view */ \"./ClientApp/administrator/pages/formNepi/view/index.js\");\n/* harmony import */ var _pages_formNepi_addEntry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/formNepi/addEntry */ \"./ClientApp/administrator/pages/formNepi/addEntry/index.js\");\n/* harmony import */ var _pages_formNepi_editEntry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/formNepi/editEntry */ \"./ClientApp/administrator/pages/formNepi/editEntry/index.js\");\n/* harmony import */ var _pages_formNepi_viewEntry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/formNepi/viewEntry */ \"./ClientApp/administrator/pages/formNepi/viewEntry/index.js\");\n/* harmony import */ var _pages_formPf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/formPf */ \"./ClientApp/administrator/pages/formPf/index.js\");\n/* harmony import */ var _pages_formPnc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/formPnc */ \"./ClientApp/administrator/pages/formPnc/index.js\");\n/* harmony import */ var _pages_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/users */ \"./ClientApp/administrator/pages/users/index.js\");\n﻿\r\n\r\n\r\n//import 'fullcalendar/dist/fullcalendar';\r\n\r\n\r\n\r\n\r\n//import 'bootstrap-material-design/dist/js/bootstrap-material-design';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import './pages/formNepi/edit';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/administrator/main.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/dashboard/index.js":
/*!**********************************************************!*\
  !*** ./ClientApp/administrator/pages/dashboard/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\n\r\n\r\nfunction controller($http, toastr) {\r\n    const vm = this;\r\n\r\n\r\n    vm.init = function () {\r\n        \r\n        $http.get('api/administrator/dashboard')\r\n            .then(function (resp) {\r\n                vm.data = resp.data;\r\n\r\n                let events = [];\r\n\r\n                for (var i = 0; i < resp.data.reservations.length; i++) {\r\n                    var item = resp.data.reservations[i];\r\n\r\n                    events.push({\r\n                        title: item.package.name,\r\n                        start: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fullCalendar.moment(item.dateStart),\r\n                        end: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fullCalendar.moment(item.dateEnd)\r\n                    });\r\n                }\r\n\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#calendar').fullCalendar({\r\n                    //header: { center: 'month,agendaWeek' },\r\n                    defaultView: 'month',\r\n                    //minTime: '07:00:00',\r\n                    //maxTime: '22:59:00',\r\n                    events: events\r\n                });\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n\r\n}\r\n\r\ncontroller.$inject = ['$http', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('dashboardComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/dashboard/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/dashboard/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formNepi/add/index.js":
/*!*************************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/add/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.id = $state.params.formId;\r\n\r\n\r\n    vm.save = function (id) {\r\n        $http.post(`api/nepi/add`, vm.item)\r\n            .then(function (resp) {\r\n                toastr.success('Form Added');\r\n                $state.go('formNepiView', { formId: resp.data});\r\n            }, function (err) {\r\n                toastr.error('error occured');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        vm.item = {\r\n            barangay: '', municipality: '', province: '', region: ''\r\n        };\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiAddComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/add/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/add/index.js?");

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

/***/ "./ClientApp/administrator/pages/formNepi/editEntry/index.js":
/*!*******************************************************************!*\
  !*** ./ClientApp/administrator/pages/formNepi/editEntry/index.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller($http, $state, toastr) {\r\n    const vm = this;\r\n    vm.formId = $state.params.formId;\r\n    vm.entryId = $state.params.entryId;\r\n\r\n    vm.saveEntry = function () {\r\n        if (vm.entry.dateOfBirth === null) {\r\n            toastr.warning('Please enter valid birth date');\r\n            return;\r\n        }\r\n\r\n        $http.post('api/nepi/entry/edit', vm.entry)\r\n            .then(function (resp) {\r\n                toastr.success('Entry Updated');\r\n\r\n                $state.go('formNepiViewEntry', { formId: vm.formId, entryId: vm.entryId });\r\n            }, function (err) {\r\n                toastr.error('error');\r\n            });\r\n    };\r\n\r\n    vm.init = function () {\r\n        $http.get(`api/administrator/forms/nepis/${vm.formId}`)\r\n            .then(function (resp) {\r\n                vm.item = resp.data;\r\n                for (var i = 0; i < vm.item.entries.length; i++) {\r\n                    var entry = vm.item.entries[i];\r\n\r\n                    if (entry.tcL_NEPI_EntryId === vm.entryId) {\r\n                        vm.entry = entry;\r\n                        //debugger;\r\n                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);\r\n                        vm.entry.dateOfBirth = new Date(vm.entry.dateOfBirth);\r\n                        vm.entry.dateNewbornScreeningReferral = new Date(vm.entry.dateNewbornScreeningReferral);\r\n                        vm.entry.dateNewbornScreeningDone = new Date(vm.entry.dateNewbornScreeningDone);\r\n                        vm.entry.cpabttAssessed = new Date(vm.entry.cpabttAssessed);\r\n                        vm.entry.childExclusiveBreastFeed6 = new Date(vm.entry.childExclusiveBreastFeed6);\r\n                        vm.entry.bcg = new Date(vm.entry.bcg);\r\n\r\n                        vm.entry.hepaB1Within24hrs = new Date(vm.entry.hepaB1Within24hrs);\r\n                        vm.entry.hepaB1MoreThan24hrs = new Date(vm.entry.hepaB1MoreThan24hrs);\r\n                        vm.entry.pentavalent1 = new Date(vm.entry.pentavalent1);\r\n                        vm.entry.pentavalent2 = new Date(vm.entry.pentavalent2);\r\n                        vm.entry.pentavalent3 = new Date(vm.entry.pentavalent3);\r\n                        vm.entry.opV1 = new Date(vm.entry.opV1);\r\n                        vm.entry.opV2 = new Date(vm.entry.opV2);\r\n                        vm.entry.opV3 = new Date(vm.entry.opV3);\r\n\r\n                        vm.entry.ipv = new Date(vm.entry.ipv);\r\n                        vm.entry.mcV1 = new Date(vm.entry.mcV1);\r\n                        vm.entry.mcV2 = new Date(vm.entry.mcV2);\r\n\r\n                        vm.entry.dateFullyImmunizedChild = new Date(vm.entry.dateFullyImmunizedChild);\r\n                        vm.entry.rotaVirusVaccine1 = new Date(vm.entry.rotaVirusVaccine1);\r\n                        vm.entry.rotaVirusVaccine2 = new Date(vm.entry.rotaVirusVaccine2);\r\n\r\n                        vm.entry.pcV1 = new Date(vm.entry.pcV1);\r\n                        vm.entry.pcV2 = new Date(vm.entry.pcV2);\r\n                        vm.entry.pcV3 = new Date(vm.entry.pcV3);\r\n                        \r\n                        vm.entry.deworming = new Date(vm.entry.deworming);\r\n\r\n                        return;\r\n                    }\r\n                }\r\n            });\r\n    };\r\n\r\n    vm.init();\r\n}\r\n\r\ncontroller.$inject = ['$http', '$state', 'toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formNepiEditEntryComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formNepi/editEntry/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formNepi/editEntry/index.js?");

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

/***/ "./ClientApp/administrator/pages/formPf/index.js":
/*!*******************************************************!*\
  !*** ./ClientApp/administrator/pages/formPf/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller(toastr) {\r\n\r\n    toastr.success('formPf');\r\n}\r\n\r\ncontroller.$inject = ['toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPfComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPf/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPf/index.js?");

/***/ }),

/***/ "./ClientApp/administrator/pages/formPnc/index.js":
/*!********************************************************!*\
  !*** ./ClientApp/administrator/pages/formPnc/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./ClientApp/administrator/app.js\");\n﻿\r\n\r\n\r\nfunction controller(toastr) {\r\n\r\n    toastr.success('formPnc');\r\n}\r\n\r\ncontroller.$inject = ['toastr'];\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].component('formPncComponent', {\r\n    templateUrl: 'app/clientapp/administrator/pages/formPnc/index.html',\r\n    controller: controller\r\n});\n\n//# sourceURL=webpack:///./ClientApp/administrator/pages/formPnc/index.js?");

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