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

/***/ "./menu.js":
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu),\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = [\n    {\n        name: 'Apple Dog',\n        price: '6.99',\n        description: 'We know you already like hotdogs. Do you like apple and peanut butter? Us too! Try our Apple Dog!',\n        type: 'entre',\n        id: 'appleDog',\n    },\n    {\n        name: 'Cream Cheese Dog',\n        price: '7.99',\n        description: 'This dog is the best! A top quality hoagie with cream cheese, and carmalized onion',\n        type: 'entre',\n        id: 'creamCheeseDog',\n    },\n    {\n        name: 'General Dog',\n        price: '4.99',\n        description: 'Hotdog on a bun',\n        type: 'entre',\n        id: 'generalDog',\n    },\n    {\n        name: 'Naked Dog',\n        price: '3.99',\n        description: 'Hotdog without a bun',\n        type: 'entre',    \n        id: 'nakedDog',\n    },\n    {\n        name: 'Chips',\n        price: '.99',\n        description: 'Pickle Chips',\n        type: 'side', \n        id: 'chips'   \n    },\n    {\n        name: 'Soda',\n        price: '.99',\n        description: 'American sugar water',\n        type: 'drink',\n        id: 'soda'\n    },\n    {\n        name: 'Beer',\n        price: '1.99',\n        description: 'Taste the mountains with your dog',\n        type: 'drink',\n        id: 'beer'\n    },\n]\n\nconst displayMenu = () => {\n    for (let i = 0; i < menu.length; i++) {\n      let header = menu[i].name;\n      let itemId = menu[i].id\n      let itemDesc = menu[i].description\n      let itemPrice = menu[i].price\n      if (menu[i].type === 'entre') {\n        createElement(menuDiv, 'div', 'entreDiv', 'entreDiv', '' )\n        const entreDiv = document.getElementById('entreDiv')\n        createElement(entreDiv, 'h1', 'menuHeader', itemId, header);\n        createElement(entreDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)  \n        createElement(entreDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )    \n        addImage(entreDiv, i, images[i].type, images[i].name)  \n      } else if (menu[i].type === 'side') {\n        const sideDiv = document.getElementById('entreDiv')\n        createElement(sideDiv, 'h1', 'menuHeader', itemId, header);\n        createElement(sideDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)\n        createElement(sideDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )  \n        addImage(sideDiv, i, images[i].type, images[i].name)\n      } else if (menu[i].type === 'drink') {\n        const drinkDiv = document.getElementById('entreDiv')\n        createElement(drinkDiv, 'h1', 'menuHeader', itemId, header);\n        createElement(drinkDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)\n        createElement(drinkDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )  \n        addImage(drinkDiv, i, images[i].type, images[i].name)\n      }\n    }\n  };\n\n\n\n//# sourceURL=webpack:///./menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;