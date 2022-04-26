/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeDiv = document.getElementById(\"home\");\r\nconst menuDiv = document.getElementById(\"menu\");\r\nconst aboutUsDiv = document.getElementById(\"about-us\");\r\nconst contactDiv = document.getElementById(\"contact\");\r\naboutUsDiv.addEventListener(\"click\", () => aboutUs());\r\n\r\nlet aboutUs = () => {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.innerHTML = \"\";\r\n    content.innerHTML = `\r\n    <div id=\"content-container\" class=\"content-container\">\r\n    <p class=\"our-story\">La nostra storia<p><hr><p class=\"story\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \r\n    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \r\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \r\n    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n    <br>\r\n    <p class=\"story\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, \r\n    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \r\n    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \r\n    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, \r\n    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. \r\n    Ut enim ad minima veniam, quis nostrum exercitat-<br>ionem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? \r\n    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, \r\n    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\r\n    </div>`;\r\n\r\n    homeDiv.classList.remove(\"clicked\");\r\n    menuDiv.classList.remove(\"clicked\");\r\n    aboutUsDiv.classList.add(\"clicked\");\r\n    contactDiv.classList.remove(\"clicked\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutUs);\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeDiv = document.getElementById(\"home\");\r\nconst menuDiv = document.getElementById(\"menu\");\r\nconst aboutUsDiv = document.getElementById(\"about-us\");\r\nconst contactDiv = document.getElementById(\"contact\");\r\ncontactDiv.addEventListener(\"click\", () => contact());\r\n\r\nlet contact = () => {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.innerHTML = \"\";\r\n    content.innerHTML = `\r\n    <div id=\"content-container\" class=\"content-container\">\r\n    <p class=\"our-story\">Visita Il Ristorante<p><hr>\r\n    <br><p class=\"story\">\r\n    2022 <br>\r\n    Sammichele di Bari (BA)\r\n    <br><br>\r\n    <p class=\"story\"><strong>Email:</strong> contact@ilristorante.com</p><br>\r\n    <p class=\"story\"><strong>Info e Prenotazioni:</strong> 555 5555555</p><br>\r\n    <p class=\"story\"><strong>Orari di apertura:</strong><br>\r\n    Lunedì; 16.00 - 21.00<br>\r\n    Martedì: CHIUSO<br>\r\n    Mercoledì: 16.00 - 21.00<br>\r\n    Giovedì: 16.00 - 21.00<br>\r\n    Venerdì: 16.00 - 21.00<br>\r\n    Sabato: 16.00 - 21.00<br>\r\n    Domenica: 16.00 - 21.00</p>\r\n    </div>`;\r\n\r\n    homeDiv.classList.remove(\"clicked\");\r\n    menuDiv.classList.remove(\"clicked\");\r\n    aboutUsDiv.classList.remove(\"clicked\");\r\n    contactDiv.classList.add(\"clicked\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeDiv = document.getElementById(\"home\");\r\nconst menuDiv = document.getElementById(\"menu\");\r\nconst aboutUsDiv = document.getElementById(\"about-us\");\r\nconst contactDiv = document.getElementById(\"contact\");\r\nhomeDiv.addEventListener(\"click\", () => home());\r\n\r\nlet home = () => {\r\n    const content = document.getElementById(\"content\");\r\n    const title = document.createElement(\"div\");\r\n    const subTitle = document.createElement(\"div\");\r\n\r\n    content.innerHTML = \"\";\r\n\r\n    title.classList = \"title\";\r\n    subTitle.classList = \"sub-title\";\r\n\r\n    title.textContent = \"Il Ristorante\";\r\n    subTitle.textContent = \"Braceria Sammichele di Bari\";\r\n\r\n    content.appendChild(title);\r\n    content.appendChild(subTitle);\r\n\r\n    homeDiv.classList.add(\"clicked\");\r\n    menuDiv.classList.remove(\"clicked\");\r\n    aboutUsDiv.classList.remove(\"clicked\");\r\n    contactDiv.classList.remove(\"clicked\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n_about_us__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeDiv = document.getElementById(\"home\");\r\nconst menuDiv = document.getElementById(\"menu\");\r\nconst aboutUsDiv = document.getElementById(\"about-us\");\r\nconst contactDiv = document.getElementById(\"contact\");\r\nmenuDiv.addEventListener(\"click\", () => menu());\r\n\r\nlet menu = () => {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n    content.innerHTML = `\r\n    <div id=\"content-container\" class=\"content-container\">\r\n    <p class=\"category\">Antipasti  20 Euro</p>\r\n    <hr>\r\n    <p class=\"description\"> Cruditè di terra: carpaccio di manzo, carpaccio di scottona, carpaccio di equino </p>\r\n    <p class=\"category\">Primi  15 Euro</p>\r\n    <hr>\r\n    <p class=\"description\"> Parmigiana di melanzane </p>\r\n    <p class=\"category\">Secondi  25 Euro</p>\r\n    <hr>\r\n    <p class=\"description\"> T-Bone su pietra lavica </p>\r\n  </div>\r\n    `;\r\n\r\n    homeDiv.classList.remove(\"clicked\");\r\n    menuDiv.classList.add(\"clicked\");\r\n    aboutUsDiv.classList.remove(\"clicked\");\r\n    contactDiv.classList.remove(\"clicked\");\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;