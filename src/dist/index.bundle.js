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

/***/ "./businessInfo.js":
/*!*************************!*\
  !*** ./businessInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   businessName: () => (/* binding */ businessName),\n/* harmony export */   contactInfo: () => (/* binding */ contactInfo),\n/* harmony export */   description: () => (/* binding */ description),\n/* harmony export */   hours: () => (/* binding */ hours)\n/* harmony export */ });\nconst businessName = 'Hot Dougs'\nconst description = \"Welcome to Hot Dougs, the place where hot dogs go from ordinary to extraordinary! Our restaurant is a haven for adventurous food enthusiasts who believe that hot dogs should never be boring. \"\nconst hours = 'Sunday: 11am - 5pm, Monday: 11am - 8pm, Tuesday: 11am - 8pm, Wednesday: 11am - 8pm, Thursday: 11am - 8pm, Friday: 11am - 8pm, Saturday: 11am - 10pm'\nconst contactInfo = {\n    owner: 'Doug',\n    phone: '555-5555',\n    address: {\n        street: '123 Downtown St.',\n        city: 'Dudesville',\n        state: 'Montana',\n        stateAbrv: 'MT',\n        zip: '59030'\n    },\n    email: 'doug@hotdougs.com'    \n}\n\n\n//# sourceURL=webpack:///./businessInfo.js?");

/***/ }),

/***/ "./createElement.js":
/*!**************************!*\
  !*** ./createElement.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElement = (parent, element, elementClass, elementId, elementContent) => {\n    const newElement = document.createElement(element)\n    newElement.classList.add(elementClass)\n    newElement.id = elementId\n    newElement.innerHTML = elementContent\n    parent.appendChild(newElement)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack:///./createElement.js?");

/***/ }),

/***/ "./images.js":
/*!*******************!*\
  !*** ./images.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addImage: () => (/* binding */ addImage),\n/* harmony export */   images: () => (/* binding */ images)\n/* harmony export */ });\nconst images = [\n      \n    {\n        name:'hotdogsVeggies',\n        src: 'images/hotdogs-veggies.jpg',\n        link: 'https://www.pexels.com/photo/hot-dogs-and-vegetables-4113507/',\n        alt:'Hotdogs on plates with cherry tomatoes and cellery',\n        credit: 'alleksana',\n        type: 'portrait',\n    },\n    {\n        name:'holdingHotdogs',\n        src: 'images/holding-hotdogs.jpg',\n        link: 'https://www.pexels.com/photo/person-holding-hotdog-sandwiches-12123654/',\n        alt:'Each hand holding a decorated hotdog',\n        credit: 'Kamila Bairam',\n        type: 'portrait',\n    },\n    {\n        name:'kidsHotdogs',\n        src: 'images/kids-hotdogs.jpg',\n        link: 'https://www.pexels.com/photo/a-young-girl-and-boy-smiling-while-holding-hot-dog-sandwiches-8522766/',\n        alt:'A young girl and boy smiling while holding hotdogs',\n        credit: 'RDNE Stock project',\n        type: 'landscape',\n    },\n     {\n        name:'hotdogPyramid',\n        src: 'images/hotdog-pyramid.jpg',\n        link: 'https://www.pexels.com/photo/beef-close-up-delicious-diet-357576/',\n        alt:'Hotdogs stacked on a platter',\n        credit: 'Pixabay',\n        type: 'landscape',\n    },\n    {\n        name:'condiments',\n        src: 'images/condiments.jpg',\n        link: 'https://www.pexels.com/photo/sauces-for-hot-dogs-12157049/',\n        alt:'Condiments on a tray',\n        credit: 'Mayra Abeki',\n        type: 'portrait',\n    },\n    {\n        name:'hotdogsCoke',\n        src: 'images/hotdogs-coke.jpg',\n        link: 'https://www.pexels.com/photo/hot-dogs-with-soda-4113464/',\n        alt:'Hotdogs on a plate with a soda near by',\n        credit: 'alleksana',\n        type: 'portrait',\n    },\n    {\n        name:'grillinDogs',\n        src: 'images/grillin-dogs.jpg',\n        link: 'https://www.pexels.com/photo/two-sausages-on-charcoal-grill-1275692/',\n        alt:'Two hotdogs on a charcoal grill',\n        credit: 'Mateusz Dach',\n        type: 'landscape',\n    },\n    {\n        name:'hotdogsStacked',\n        src: 'images/hotdogs-stacked.jpg',\n        link: 'https://www.pexels.com/photo/hotdog-sandwich-on-white-background-4518645/',\n        alt:'Three hotdogs stacked with toppings',\n        credit: 'Polina Tankilevitch',\n        type: 'portrait',\n    },\n    {\n        name:'hotdogsDisheveled',\n        src: 'images/hotdogs-disheveled.jpg',\n        link: 'https://www.pexels.com/photo/close-up-photo-of-hotdog-sandwiches-4518653/',\n        alt:'Three hotdogs with toppings and white background',\n        credit: 'Polina Tankilevitch',\n        type: 'portrait',\n    },\n    {\n        name:'dougGrillin',\n        src: 'images/doug-grillin.jpg',\n        link:'https://www.pexels.com/photo/gray-haired-man-grilling-hot-dogs-8522762/#',\n        alt:'Gray haired man grilling hotdogs',\n        credit: 'RDNE Stock project',\n        type: 'landscape',\n    },\n]\n\nconst addImage = (parent, imageIndex, imageClass, imageId ) => {\n    const newImage = document.createElement('img')\n    newImage.classList.add(imageClass)\n    newImage.id = imageId\n    newImage.src = images[imageIndex].src\n    newImage.alt = images[imageIndex].alt\n    newImage.innerText = images.credit\n    parent.appendChild(newImage)\n}\n\n\n\n//# sourceURL=webpack:///./images.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./businessInfo.js */ \"./businessInfo.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./menu.js\");\n/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images.js */ \"./images.js\");\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElement.js */ \"./createElement.js\");\n\n\n\n\n\n\n\n//Top of the page\nconst contentDiv = document.getElementById('content')\n\n//tab logic home, menu, contact\n;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'button', 'btn', 'homeBtn', 'Home')\nconst homeBtn = document.getElementById('homeBtn')\nhomeBtn.addEventListener('click', () => {\n    console.log('home')\n})\n;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'button', 'btn', 'menuBtn', 'Home')\nconst menuBtn = document.getElementById('menurBtn')\nmenuBtn.addEventListener('click', () => {\n    console.log('menu')\n})\n;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'button', 'btn', 'contactBtn', 'Home')\nconst contactBtn = document.getElementById('contactBtn')\ncontactBtn.addEventListener('click', () => {\n    console.log('contact')\n})\n\n\n\n;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'div', 'pictureDiv', 'pictureDiv', '')\nconst pictureDiv = document.getElementById('pictureDiv')\n;(0,_images_js__WEBPACK_IMPORTED_MODULE_2__.addImage)(pictureDiv, 9, _images_js__WEBPACK_IMPORTED_MODULE_2__.images[9].type, _images_js__WEBPACK_IMPORTED_MODULE_2__.images[9].name)\n\n;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'h1', 'header', 'header', _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.businessName)\n;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'div', 'discription', 'discription', _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.description)\n\n//hours\nconst formatDisplayHours = () => {\n    //line break hours at each comma\n    let formatedHours = _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.hours.replace(/,/g, \"<br>\")\n    ;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'div', 'hours', 'hours', formatedHours)\n}\nformatDisplayHours()\n\n//contact info\n;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'div', 'contactDiv', 'contactDiv', '');\nconst contactDiv = document.getElementById('contactDiv')\n    ;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contactDiv, 'div', 'contactInfo', 'ownerInfo', _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.contactInfo.owner)\n    ;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contactDiv, 'div', 'contactInfo', 'phoneInfo', _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.contactInfo.phone)\n    ;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contactDiv, 'div', 'contactInfo', 'addressInfo', _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.contactInfo.address.street)\n    ;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contactDiv, 'div', 'contactInfo', 'addressInfo', _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.contactInfo.address.city + ' ' + _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.contactInfo.address.stateAbrv)\n    ;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contactDiv, 'div', 'contactInfo', 'emailInfo', _businessInfo_js__WEBPACK_IMPORTED_MODULE_0__.contactInfo.email)\n\n//menu\n;(0,_createElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contentDiv, 'div', 'menuDiv', 'menuDiv', '')\nconst menuDiv = document.getElementById('menuDiv')\n//loop menu\n;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.displayMenu)()\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./menu.js":
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu),\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = [\n    {\n        name: 'Apple Dog',\n        price: '6.99',\n        description: 'We know you already like hotdogs. Do you like apple and peanut butter? Us too! Try our Apple Dog!',\n        type: 'entre',\n        id: 'appleDog',\n    },\n    {\n        name: 'Cream Cheese Dog',\n        price: '7.99',\n        description: 'This dog is the best! A top quality hoagie with cream cheese, and carmalized onion',\n        type: 'entre',\n        id: 'creamCheeseDog',\n    },\n    {\n        name: 'General Dog',\n        price: '4.99',\n        description: 'Hotdog on a bun',\n        type: 'entre',\n        id: 'generalDog',\n    },\n    {\n        name: 'Naked Dog',\n        price: '3.99',\n        description: 'Hotdog without a bun',\n        type: 'entre',    \n        id: 'nakedDog',\n    },\n    {\n        name: 'Chips',\n        price: '.99',\n        description: 'Pickle Chips',\n        type: 'side', \n        id: 'chips'   \n    },\n    {\n        name: 'Soda',\n        price: '.99',\n        description: 'American sugar water',\n        type: 'drink',\n        id: 'soda'\n    },\n    {\n        name: 'Beer',\n        price: '1.99',\n        description: 'Taste the mountains with your dog',\n        type: 'drink',\n        id: 'beer'\n    },\n]\n\nconst displayMenu = () => {\n    for (let i = 0; i < menu.length; i++) {\n      let header = menu[i].name;\n      let itemId = menu[i].id\n      let itemDesc = menu[i].description\n      let itemPrice = menu[i].price\n      if (menu[i].type === 'entre') {\n        createElement(menuDiv, 'div', 'entreDiv', 'entreDiv', '' )\n        const entreDiv = document.getElementById('entreDiv')\n        createElement(entreDiv, 'h1', 'menuHeader', itemId, header);\n        createElement(entreDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)  \n        createElement(entreDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )    \n        addImage(entreDiv, i, images[i].type, images[i].name)  \n      } else if (menu[i].type === 'side') {\n        const sideDiv = document.getElementById('entreDiv')\n        createElement(sideDiv, 'h1', 'menuHeader', itemId, header);\n        createElement(sideDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)\n        createElement(sideDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )  \n        addImage(sideDiv, i, images[i].type, images[i].name)\n      } else if (menu[i].type === 'drink') {\n        const drinkDiv = document.getElementById('entreDiv')\n        createElement(drinkDiv, 'h1', 'menuHeader', itemId, header);\n        createElement(drinkDiv, 'p', 'menuDesc', itemId + 'Desc', itemDesc)\n        createElement(drinkDiv, 'h4', 'menuPrice', itemId + 'Price', '$' + itemPrice )  \n        addImage(drinkDiv, i, images[i].type, images[i].name)\n      }\n    }\n  };\n\n\n\n//# sourceURL=webpack:///./menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;