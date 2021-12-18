/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/push.service-worker.js":
/*!***************************************!*\
  !*** ./client/push.service-worker.js ***!
  \***************************************/
/***/ (() => {

eval("self.addEventListener('install', function (event) {// Perform install steps\n}); // Register event listener for the 'push' event.\n\nself.addEventListener('push', function (event) {\n  console.log(\"Push event\", event); // Keep the service worker alive until the notification is created.\n\n  event.waitUntil( // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.\n  self.registration.showNotification('ServiceWorker Cookbook', {\n    body: 'Alea iacta est'\n  }).then(d => {\n    console.log(\"shown nitification\", d);\n  }).catch(err => {\n    console.error(err);\n  }));\n});\n\n//# sourceURL=webpack:///./client/push.service-worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/push.service-worker.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});