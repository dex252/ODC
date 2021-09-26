var OdcWeb =
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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		"algorithmsBundle": 0
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpOdcWeb"] = window["webpackJsonpOdcWeb"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Content/Custom/Algorithms/index.css":
/*!*********************************************!*\
  !*** ./Content/Custom/Algorithms/index.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://OdcWeb/./Content/Custom/Algorithms/index.css?");

/***/ }),

/***/ "./Content/site.css":
/*!**************************!*\
  !*** ./Content/site.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://OdcWeb/./Content/site.css?");

/***/ }),

/***/ "./Scripts/Custom/Algorithms/algorithms-director.js":
/*!**********************************************************!*\
  !*** ./Scripts/Custom/Algorithms/algorithms-director.js ***!
  \**********************************************************/
/*! exports provided: AlgorithmsDirector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlgorithmsDirector\", function() { return AlgorithmsDirector; });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./Scripts/Custom/Algorithms/models.js\");\n/* harmony import */ var _Shared_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/spinner */ \"./Scripts/Shared/spinner.js\");\n/* harmony import */ var _Shared_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/errors */ \"./Scripts/Shared/errors.js\");\n/* harmony import */ var js_guid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-guid */ \"./node_modules/js-guid/dist/index.js\");\n/* harmony import */ var js_guid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_guid__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nconst WorldMap = __webpack_require__(/*! world-map */ \"./node_modules/world-map/src/world-map.js\");\r\n\r\nconst container = $('#content');\r\nconst ALGORITHM_LIST_TAMPLATE = '#list-template';\r\n\r\nconst ALGORITHMS_SELECT = '#algorithm-list';\r\nconst ALGORITHM_DESCRIPTION ='#description';\r\nconst ALGORITHM_DESCRIPTION_TAMPLATE = '#description-template';\r\n\r\nconst INPUT_PARAMS ='#params';\r\nconst INPUT_PARAMS_TEMPLATE ='#params-template';\r\n\r\nconst LIST_ADD_BUTTON = '.list-add-button';\r\nconst LIST_REMOVE_BUTTON = '.list-remove-button';\r\nconst LIST_ITEM_TEMPLATE = '#list-item-template';\r\n\r\nconst SAVE_BUTTON = '#save-button';\r\n\r\nclass AlgorithmsDirector{\r\n    constructor(){  \r\n        this.AlgorithmsList = undefined;\r\n        this.CurrentAlgorithm = undefined;\r\n        this.ActiveMapContainer = undefined;\r\n        this.WorldMapsId = [];\r\n    }\r\n\r\n    async Init(){\r\n        try{\r\n            Object(_Shared_spinner__WEBPACK_IMPORTED_MODULE_1__[\"showSpinner\"])();\r\n            let data = await this.GetAlgorithms();\r\n            this.AlgorithmsList = data.Data;\r\n            \r\n            container.empty();\r\n            container.html(\r\n                $(ALGORITHM_LIST_TAMPLATE).render(data)\r\n            );\r\n\r\n            this.CurrentAlgorithm = data.Data[0];\r\n\r\n            await this.SetCurrentAlgorithm();\r\n        } catch(error){\r\n            Object(_Shared_errors__WEBPACK_IMPORTED_MODULE_2__[\"renderError\"])(error);\r\n        } finally{\r\n            Object(_Shared_spinner__WEBPACK_IMPORTED_MODULE_1__[\"hideSpinner\"])();\r\n        }\r\n    }\r\n\r\n    InitEvents(){\r\n        let DIRECTOR = this;\r\n\r\n        $(document).on('change', ALGORITHMS_SELECT, async (e) =>{\r\n            let target = e.currentTarget;\r\n            let guid = target.options[target.selectedIndex].id;\r\n\r\n            let selected = DIRECTOR.AlgorithmsList.filter(e => e.Guid === guid);\r\n\r\n            if(selected.length !== 1){\r\n                Object(_Shared_errors__WEBPACK_IMPORTED_MODULE_2__[\"renderErrorMessage\"])('Выбранный алгоритм не определен');\r\n                return;\r\n            }\r\n\r\n            DIRECTOR.CurrentAlgorithm = selected[0];\r\n\r\n            await DIRECTOR.SetCurrentAlgorithm();\r\n        });\r\n\r\n        $(document).on('click', LIST_ADD_BUTTON, (e) =>{\r\n            let target = $(e.currentTarget);\r\n            let container = target.data('target');\r\n            let guid = js_guid__WEBPACK_IMPORTED_MODULE_3__[\"Guid\"].newGuid();\r\n            let item = {Id: guid}\r\n\r\n            let template =  $(LIST_ITEM_TEMPLATE).render(item);\r\n            var html = new DOMParser().parseFromString(template, \"text/html\").querySelector(`#list-${guid}`);\r\n            $(container).append(html)\r\n        });\r\n\r\n        $(document).on('click', LIST_REMOVE_BUTTON, (e) =>{\r\n            let target = $(e.currentTarget);\r\n            let container = target.data('target');\r\n\r\n            $(container).remove();\r\n        });\r\n\r\n        $(document).on('click', SAVE_BUTTON, (e) =>{\r\n            //TODO: обновить данные в модели\r\n            DIRECTOR.UpdateValues();\r\n            //TODO: сохранить значения на сервере\r\n            DIRECTOR.SaveValues();\r\n        });\r\n\r\n        $(window).on('resize', (e) =>{\r\n            if(!DIRECTOR.ActiveMapContainer){\r\n                return;\r\n            }\r\n\r\n            this.WorldMapsId.forEach(e => DIRECTOR.SetWorldMapParametres(e));\r\n        });\r\n    }\r\n\r\n    UpdateValues(){\r\n        //....\r\n    }\r\n\r\n    SaveValues(){\r\n        //....\r\n    }\r\n\r\n    async SetCurrentAlgorithm(){\r\n        let descriptionContainer = $(ALGORITHM_DESCRIPTION);\r\n        descriptionContainer.empty();\r\n        descriptionContainer.html(\r\n            $(ALGORITHM_DESCRIPTION_TAMPLATE).render(this.CurrentAlgorithm)\r\n        );\r\n\r\n        let data = await this.GetInputParams(this.CurrentAlgorithm.Guid);\r\n\r\n        let paramsContainer = $(INPUT_PARAMS);\r\n        paramsContainer.empty();\r\n        paramsContainer.html(\r\n            $(INPUT_PARAMS_TEMPLATE).render(data)\r\n        );\r\n\r\n        this.InitWorldMapAttributes(data.Params);\r\n    }\r\n\r\n    InitWorldMapAttributes(params){\r\n        this.ActiveMapContainer = undefined;\r\n        this.WorldMapsId = [];\r\n\r\n        let maps = params.filter(e => e.Type == 'MAP');\r\n\r\n        if(maps.length == 0){\r\n            return;\r\n        }\r\n\r\n        this.SetResizeWorldMapContainer(maps[0]);\r\n\r\n        for (let attr of maps){\r\n            let id = `world-map-${attr.Id}`;\r\n            this.WorldMapsId.push(id);\r\n\r\n            this.SetWorldMapParametres(id);\r\n        }\r\n    }\r\n\r\n    SetResizeWorldMapContainer(map){\r\n        this.ActiveMapContainer = $(`#world-map-${map.Id}`);\r\n    }\r\n\r\n    SetWorldMapParametres(id){\r\n        $(`#${id}`).empty();\r\n\r\n        let mapParametres ={\r\n            width: this.ActiveMapContainer.innerWidth(),\r\n            zoom: true,\r\n            landsColor: '#008282',\r\n            landsBorder: '#fff',\r\n        };\r\n\r\n        var map = new WorldMap(id , mapParametres);\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {string} guid \r\n     * @param {string} version \r\n     * @returns {Promise<Algorithm[]>}\r\n     */\r\n         async GetInputParams(guid){\r\n            return new Promise(async (resolve, reject) => {\r\n                $.ajax({\r\n                    url: '../Algorithms/GetInputParams',\r\n                    type: 'get',\r\n                    data: {guid: guid},\r\n                    cache: false,\r\n                    contentType: \"application/json; charset=utf-8\",\r\n                    error: error => {\r\n                        reject(error);\r\n                    },\r\n                    success: response => {\r\n                        console.info((response));\r\n                        if(response.Status != 'ok'){\r\n                            reject(response);\r\n                        }\r\n    \r\n                        resolve(response.Data);\r\n                    }\r\n                });\r\n    \r\n            });\r\n        }\r\n\r\n    /**\r\n     * \r\n     * @param {string} guid \r\n     * @param {string} version \r\n     * @returns {Promise<Algorithm[]>}\r\n     */\r\n    async GetAlgorithms(guid, version){\r\n        return new Promise(async (resolve, reject) => {\r\n            $.ajax({\r\n                url: '../Algorithms/GetAlgorithms',\r\n                type: 'get',\r\n                data: {guid: guid, version: version},\r\n                cache: false,\r\n                contentType: \"application/json; charset=utf-8\",\r\n                error: error => {\r\n                    reject(error);\r\n                },\r\n                success: response => {\r\n                    console.info((response));\r\n                    if(response.Status != 'ok'){\r\n                        reject(response);\r\n                    }\r\n\r\n                    resolve({Data: response.Data});\r\n                }\r\n            });\r\n\r\n        });\r\n    }\r\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery-exposed.js\")))\n\n//# sourceURL=webpack://OdcWeb/./Scripts/Custom/Algorithms/algorithms-director.js?");

/***/ }),

/***/ "./Scripts/Custom/Algorithms/index.js":
/*!********************************************!*\
  !*** ./Scripts/Custom/Algorithms/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var shared_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/common */ \"./Scripts/Shared/common.js\");\n/* harmony import */ var _algorithms_director__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms-director */ \"./Scripts/Custom/Algorithms/algorithms-director.js\");\n/* harmony import */ var styles_Custom_Algorithms_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/Custom/Algorithms/index.css */ \"./Content/Custom/Algorithms/index.css\");\n/* harmony import */ var styles_Custom_Algorithms_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_Custom_Algorithms_index_css__WEBPACK_IMPORTED_MODULE_2__);\n﻿\r\n\r\n\r\n\r\nconst ALGORITHM_DIRECTOR = new _algorithms_director__WEBPACK_IMPORTED_MODULE_1__[\"AlgorithmsDirector\"]();\r\n\r\n$(async ()  => {\r\n    await ALGORITHM_DIRECTOR.InitEvents();\r\n    await ALGORITHM_DIRECTOR.Init();\r\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery-exposed.js\")))\n\n//# sourceURL=webpack://OdcWeb/./Scripts/Custom/Algorithms/index.js?");

/***/ }),

/***/ "./Scripts/Custom/Algorithms/models.js":
/*!*********************************************!*\
  !*** ./Scripts/Custom/Algorithms/models.js ***!
  \*********************************************/
/*! exports provided: Algorithm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Algorithm\", function() { return Algorithm; });\n﻿class Algorithm{\r\n    constructor(name, guid, version, parentGuid, description){\r\n        this.Name = name;\r\n        this.Guid = guid;\r\n        this.Version = version;\r\n        this.ParentGuid = parentGuid;\r\n        this.Description = description;\r\n    }\r\n}\n\n//# sourceURL=webpack://OdcWeb/./Scripts/Custom/Algorithms/models.js?");

/***/ }),

/***/ "./Scripts/Shared/common.js":
/*!**********************************!*\
  !*** ./Scripts/Shared/common.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery-exposed.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsrender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsrender */ \"./node_modules/jsrender/jsrender.js\");\n/* harmony import */ var jsrender__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsrender__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-validation */ \"./node_modules/jquery-validation/dist/jquery.validate.js\");\n/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-validation-unobtrusive */ \"./node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js\");\n/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styles_site_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/site.css */ \"./Content/site.css\");\n/* harmony import */ var styles_site_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_site_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var libs_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! libs/bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var libs_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(libs_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://OdcWeb/./Scripts/Shared/common.js?");

/***/ }),

/***/ "./Scripts/Shared/errors.js":
/*!**********************************!*\
  !*** ./Scripts/Shared/errors.js ***!
  \**********************************/
/*! exports provided: renderErrorMessage, renderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderErrorMessage\", function() { return renderErrorMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderError\", function() { return renderError; });\n﻿const error = $('#modal-error');\r\n\r\n/**\r\n * \r\n * @param {string} text\r\n */\r\nfunction renderErrorMessage(text) {\r\n\r\n    $('.modal-error-body').empty();\r\n    $('.modal-error-body').html(\r\n        $('#render-user-error').render({ 'RenderMessage': text })\r\n    );\r\n\r\n    // @ts-ignore\r\n    error.modal('show');\r\n};\r\n\r\nfunction renderError(response) {\r\n    if (response.status == 500) {\r\n        renderErrorMessage('Внутренняя ошибка сервера');\r\n        return;\r\n    }\r\n\r\n    if (response.status == 0) {\r\n        renderErrorMessage('Сервер не доступен');\r\n        return;\r\n    }\r\n\r\n    if (response.responseJSON && response.responseJSON.message) {\r\n        renderErrorMessage(response.responseJSON.message);\r\n        return;\r\n    }\r\n\r\n    //Дикая ошибка при приведении типов от сервера (возвращает namespace класса Authenticate и подробности ошибки)\r\n    if (response.responseJSON) {\r\n        $('.modal-error-body').empty();\r\n        $('.modal-error-body').html(\r\n            $('#render-detail-error').render(response.responseJSON)\r\n        );\r\n        // @ts-ignore\r\n        error.modal('show');\r\n        return;\r\n    }\r\n\r\n    if (response.statusText != null) {\r\n        $('.modal-error-body').empty();\r\n        $('.modal-error-body').html(\r\n            $('#render-user-error').render(response)\r\n        );\r\n    } else {\r\n        renderErrorMessage('Произошла неизвестная ошибка');\r\n        return;\r\n    }\r\n\r\n    // @ts-ignore\r\n    error.modal('show');\r\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery-exposed.js\")))\n\n//# sourceURL=webpack://OdcWeb/./Scripts/Shared/errors.js?");

/***/ }),

/***/ "./Scripts/Shared/spinner.js":
/*!***********************************!*\
  !*** ./Scripts/Shared/spinner.js ***!
  \***********************************/
/*! exports provided: showSpinner, hideSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSpinner\", function() { return showSpinner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideSpinner\", function() { return hideSpinner; });\n﻿const spinner = $('#modal-spinner');\r\n\r\nfunction showSpinner() {\r\n    // @ts-ignore\r\n    spinner.modal('show');\r\n};\r\n\r\nfunction hideSpinner() {\r\n    setTimeout(() => {\r\n        // @ts-ignore\r\n        spinner.modal('hide');\r\n    }, 500);\r\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery-exposed.js\")))\n\n//# sourceURL=webpack://OdcWeb/./Scripts/Shared/spinner.js?");

/***/ }),

/***/ 1:
/*!*****************************************************************!*\
  !*** multi babel-polyfill ./Scripts/Custom/Algorithms/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./Scripts/Custom/Algorithms/index.js */\"./Scripts/Custom/Algorithms/index.js\");\n\n\n//# sourceURL=webpack://OdcWeb/multi_babel-polyfill_./Scripts/Custom/Algorithms/index.js?");

/***/ })

/******/ });