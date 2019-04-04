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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ \"./src/firebase.js\");\n\r\n\r\n\r\nfunction homeEvents() {\r\n  const loginButton = document.querySelector('.logInWindow');\r\n  const registerButton = document.querySelector('.registerWindow');\r\n  const btnRegisterx = document.querySelector('.btn-register');\r\n  const btnLogx = document.querySelector('.btn-logIn');\r\n\r\n\r\n  if (loginButton) {\r\n    loginButton.addEventListener('click', logInOption);\r\n  }\r\n\r\n  if (registerButton) {\r\n    registerButton.addEventListener('click', registerOption);\r\n\r\n  }\r\n\r\n  function logInOption(event) {\r\n    event.preventDefault();\r\n    console.log('loginoption');\r\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"elementClick\"])('/ingresar');\r\n  }\r\n\r\n  function registerOption(event) {\r\n    event.preventDefault();\r\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"elementClick\"])('/registrar');\r\n  }\r\n\r\n\r\nif (btnRegisterx ) {\r\n  btnRegisterx.addEventListener('click', () => Object(_firebase__WEBPACK_IMPORTED_MODULE_1__[\"signUp\"])());\r\n}\r\n\r\n\r\n\r\nif (btnLogx) {\r\n  btnLogx.addEventListener('click', () => Object(_firebase__WEBPACK_IMPORTED_MODULE_1__[\"logIn\"])());\r\n}\r\n}\r\n\r\nfunction wallEvents() {\r\n  const logOutBtn = document.querySelector('#logout');\r\n  if (logOutBtn) {\r\n    logOutBtn.addEventListener('click', () => Object(_firebase__WEBPACK_IMPORTED_MODULE_1__[\"logOut\"])())\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  homeEvents,\r\n  wallEvents\r\n});\r\n\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/*! exports provided: signUp, logIn, logOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logIn\", function() { return logIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logOut\", function() { return logOut; });\n/* harmony import */ var _templates_logIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/logIn */ \"./src/templates/logIn.js\");\n/* harmony import */ var _templates_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/register */ \"./src/templates/register.js\");\n/* harmony import */ var _templates_wall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/wall */ \"./src/templates/wall.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfirebase.auth().onAuthStateChanged(function(user) {\r\n    if (user) {\r\n      // User is signed in.\r\n      Object(_index__WEBPACK_IMPORTED_MODULE_3__[\"elementClick\"])('/muro');\r\n      var user = firebase.auth().currentUser;\r\n      if(user != null){\r\n      const emailId = user.email;\r\n      console.log(emailId);\r\n      document.getElementById('saludo').innerHTML = 'hola bienvenido' + emailId;\r\n      }\r\n    } else {\r\n      // No user is signed in.\r\n      Object(_index__WEBPACK_IMPORTED_MODULE_3__[\"elementClick\"])('/ingresar');\r\n    }\r\n  });\r\n\r\n\r\n  //Registrar Usuario con correo y contraseña\r\n// document.querySelector('.btn-register').addEventListener('click', signUp);\r\nfunction signUp () {\r\nconst emailSignUp = document.getElementById('email').value;\r\nconst passwordSignUp = document.getElementById('password').value;\r\nfirebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp).catch(function(error) {\r\n    // Handle Errors here.\r\n    var errorCode = error.code;\r\n    var errorMessage = error.message;\r\n    alert(errorMessage);\r\n    // ...\r\n  });\r\n}\r\n\r\n// Iniciar sesión\r\n\r\n// document.querySelector('.btn-logIn').addEventListener('click', logIn);\r\nfunction logIn() {\r\n    const emailLogIn = document.getElementById('emailIn').value;\r\n    const passwordLogIn = document.getElementById('passwordIn').value;\r\n    firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn).catch(function(error) {\r\n        // Handle Errors here.\r\n        var errorCode = error.code;\r\n        var errorMessage = error.message;\r\n        alert(errorMessage);\r\n        // ...\r\n      });\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n// Cerrar sesión\r\n// document.getElementById('logout').addEventListener('click',logOut);\r\nfunction logOut() {\r\n    firebase.auth().signOut();\r\n}\r\n\r\n// document.getElementById(\"logInWindow\").addEventListener('click',logInOption);\r\n// function logInOption () {\r\n//     console.log(\"holis login\");\r\n//     elementClick('/ingresar');\r\n// }\r\n//\r\n// document.getElementById(\"registerWindow\").addEventListener('click',registerOption);\r\n// function registerOption () {\r\n//   console.log(\"holi registrar\");\r\n//     elementClick('/registrar');\r\n// }\r\n\r\n\r\n// export default {\r\n//   signUp,\r\n//   logIn,\r\n//   logOut\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/firebase.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: elementClick, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementClick\", function() { return elementClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _templates_logIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/logIn */ \"./src/templates/logIn.js\");\n/* harmony import */ var _templates_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/register */ \"./src/templates/register.js\");\n/* harmony import */ var _templates_wall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/wall */ \"./src/templates/wall.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\r\n\r\n\r\n\r\n\r\n// import buttons from './firebase.js'\r\n\r\nconst contentDiv = document.querySelector('.content');\r\n\r\nlet routes = {\r\n  '/': {\r\n    template: _templates_logIn__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    events: _events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeEvents\r\n  },\r\n  '/index.html': {\r\n    template: _templates_logIn__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    events: _events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeEvents\r\n  },\r\n  '/ingresar':  {\r\n    template: _templates_logIn__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    events: _events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeEvents\r\n  },\r\n  '/registrar':  {\r\n    template: _templates_register__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    events: _events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeEvents\r\n  },\r\n  '/muro': {\r\n    template: _templates_wall__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    events: _events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].wallEvents\r\n  },\r\n};\r\n\r\nwindow.onpopstate = function () {\r\n // contentDiv.innerHTML = routes[window.location.pathname].template;\r\n}\r\n\r\nlet elementClick = (pathName) => {\r\n  window.history.pushState({}, pathName, window.location.origin + pathName);\r\n  window.history.pushState({}, pathName, window.location.origin + pathName);\r\n  window.history.back();\r\n  contentDiv.innerHTML = routes[pathName].template;\r\n  routes[pathName].events();\r\n\r\n}\r\n\r\ncontentDiv.innerHTML = routes[window.location.pathname].template;\r\n\r\n_events__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeEvents();\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/templates/logIn.js":
/*!********************************!*\
  !*** ./src/templates/logIn.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet logInTemplate = `\r\n<section class=\"tabs\">\r\n  <button class=\"logInWindow\">Iniciar Sesión</button>\r\n  <button class=\"registerWindow\">Registrarse</button>\r\n</section>\r\n\r\n<div class=\"container-tabs\">\r\n  <section class=\"flex-user\" id='containerlogIn'>\r\n    <input id='emailIn' type=\"text\">\r\n    <input id='passwordIn' type=\"password\">\r\n    <button class='btn-logIn'>Iniciar Sesión</button>\r\n  </section>\r\n</div>\r\n`;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (logInTemplate);\r\n\n\n//# sourceURL=webpack:///./src/templates/logIn.js?");

/***/ }),

/***/ "./src/templates/register.js":
/*!***********************************!*\
  !*** ./src/templates/register.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet registerTemplate = `\r\n<section class=\"tabs\">\r\n  <button class=\"logInWindow\">Iniciar Sesión</button>\r\n  <button class=\"registerWindow\">Registrarse</button>\r\n</section>\r\n\r\n<div class=\"container-tabs\">\r\n  <section class='flex-user' id='container'>\r\n    <input id='email' type=\"text\">\r\n    <input id='password' type=\"password\">\r\n    <button class='btn-register'>Register</button>\r\n  </section>\r\n</div>\r\n`;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerTemplate);\r\n\n\n//# sourceURL=webpack:///./src/templates/register.js?");

/***/ }),

/***/ "./src/templates/wall.js":
/*!*******************************!*\
  !*** ./src/templates/wall.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet wallTemplate = `\r\n<section id='login'>\r\n  <p id='saludo'></p>\r\n  <button id='logout'>Cerrar sesión</button>\r\n</section>\r\n`;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (wallTemplate);\r\n\n\n//# sourceURL=webpack:///./src/templates/wall.js?");

/***/ })

/******/ });