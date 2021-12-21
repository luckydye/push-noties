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

/***/ "./client/main.js":
/*!************************!*\
  !*** ./client/main.js ***!
  \************************/
/***/ (() => {

eval("// This function is needed because Chrome doesn't accept a base64 encoded string\n// as value for applicationServerKey in pushManager.subscribe yet\n// https://bugs.chromium.org/p/chromium/issues/detail?id=802280\nfunction urlBase64ToUint8Array(base64String) {\n  var padding = '='.repeat((4 - base64String.length % 4) % 4);\n  var base64 = (base64String + padding).replace(/\\-/g, '+').replace(/_/g, '/');\n  var rawData = window.atob(base64);\n  var outputArray = new Uint8Array(rawData.length);\n\n  for (var i = 0; i < rawData.length; ++i) {\n    outputArray[i] = rawData.charCodeAt(i);\n  }\n\n  return outputArray;\n} // register service worker\n\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('./push.service-worker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n  setTimeout(() => {\n    enablePushNotificatins();\n  }, 1000 * 2);\n}\n\nasync function enablePushNotificatins() {\n  console.log(\"requesting permission\");\n\n  if (window.Notification.permission !== \"granted\") {\n    const res = await Notification.requestPermission();\n\n    if (res !== \"granted\") {\n      console.log(\"notification permission denied\");\n      return;\n    }\n  }\n\n  console.log(\"permission granted\");\n\n  if (isSafari()) {\n    testNotification();\n    subscribeToPushSafari();\n  } else {\n    const api_path_service1 = \"/api/push/\";\n    const api_path_service2 = \"https://dev.luckydye.de/api/push/\";\n    subscribeToPush(api_path_service1);\n  }\n}\n\nfunction testNotification() {\n  new Notification(\"Lokal Test Notification\", {\n    icon: \"/icon/icon-192x192.png\"\n  });\n}\n\nfunction isSafari() {\n  return !navigator.userAgent.match(\"Chrome/\");\n}\n\nasync function subscribeToPushSafari() {\n  console.log(\"subscribing to safari push\");\n}\n\nasync function subscribeToPush(api_path) {\n  console.log(\"subscribing to push\");\n  return navigator.serviceWorker.ready.then(function (registration) {\n    // Use the PushManager to get the user's subscription to the push service.\n    return registration.pushManager.getSubscription().then(async function (subscription) {\n      // If a subscription was found, return it.\n      if (subscription) {\n        console.log(\"already subscribed\");\n        return subscription;\n      } // Get the server's public key\n\n\n      const response = await fetch(api_path + 'vapidPublicKey');\n      const vapidPublicKey = await response.text(); // Chrome doesn't accept the base64-encoded (string) vapidPublicKey yet\n      // urlBase64ToUint8Array() is defined in /tools.js\n\n      const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey); // Otherwise, subscribe the user (userVisibleOnly allows to specify that we don't plan to\n      // send notifications that don't have a visible effect for the user).\n\n      return registration.pushManager.subscribe({\n        userVisibleOnly: true,\n        applicationServerKey: convertedVapidKey\n      });\n    });\n  }).then(function (subscription) {\n    console.log('sub', subscription); // Send the subscription details to the server using the Fetch API.\n\n    fetch(api_path + 'register', {\n      method: 'post',\n      headers: {\n        'Content-type': 'application/json'\n      },\n      body: JSON.stringify({\n        subscription: subscription\n      })\n    });\n  });\n}\n\n//# sourceURL=webpack:///./client/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/main.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});