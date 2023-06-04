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

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addImage: () => (/* binding */ addImage),\n/* harmony export */   images: () => (/* binding */ images)\n/* harmony export */ });\nconst images = [\n      \n    {\n        name:'hotdogsVeggies',\n        src: 'images/hotdogs-veggies.jpg',\n        link: 'https://www.pexels.com/photo/hot-dogs-and-vegetables-4113507/',\n        alt:'Hotdogs on plates with cherry tomatoes and cellery',\n        credit: 'alleksana',\n        type: 'portrait',\n    },\n    {\n        name:'holdingHotdogs',\n        src: 'images/holding-hotdogs.jpg',\n        link: 'https://www.pexels.com/photo/person-holding-hotdog-sandwiches-12123654/',\n        alt:'Each hand holding a decorated hotdog',\n        credit: 'Kamila Bairam',\n        type: 'portrait',\n    },\n    {\n        name:'kidsHotdogs',\n        src: 'images/kids-hotdogs.jpg',\n        link: 'https://www.pexels.com/photo/a-young-girl-and-boy-smiling-while-holding-hot-dog-sandwiches-8522766/',\n        alt:'A young girl and boy smiling while holding hotdogs',\n        credit: 'RDNE Stock project',\n        type: 'landscape',\n    },\n     {\n        name:'hotdogPyramid',\n        src: 'images/hotdog-pyramid.jpg',\n        link: 'https://www.pexels.com/photo/beef-close-up-delicious-diet-357576/',\n        alt:'Hotdogs stacked on a platter',\n        credit: 'Pixabay',\n        type: 'landscape',\n    },\n    {\n        name:'condiments',\n        src: 'images/condiments.jpg',\n        link: 'https://www.pexels.com/photo/sauces-for-hot-dogs-12157049/',\n        alt:'Condiments on a tray',\n        credit: 'Mayra Abeki',\n        type: 'portrait',\n    },\n    {\n        name:'hotdogsCoke',\n        src: 'images/hotdogs-coke.jpg',\n        link: 'https://www.pexels.com/photo/hot-dogs-with-soda-4113464/',\n        alt:'Hotdogs on a plate with a soda near by',\n        credit: 'alleksana',\n        type: 'portrait',\n    },\n    {\n        name:'grillinDogs',\n        src: 'images/grillin-dogs.jpg',\n        link: 'https://www.pexels.com/photo/two-sausages-on-charcoal-grill-1275692/',\n        alt:'Two hotdogs on a charcoal grill',\n        credit: 'Mateusz Dach',\n        type: 'landscape',\n    },\n    {\n        name:'hotdogsStacked',\n        src: 'images/hotdogs-stacked.jpg',\n        link: 'https://www.pexels.com/photo/hotdog-sandwich-on-white-background-4518645/',\n        alt:'Three hotdogs stacked with toppings',\n        credit: 'Polina Tankilevitch',\n        type: 'portrait',\n    },\n    {\n        name:'hotdogsDisheveled',\n        src: 'images/hotdogs-disheveled.jpg',\n        link: 'https://www.pexels.com/photo/close-up-photo-of-hotdog-sandwiches-4518653/',\n        alt:'Three hotdogs with toppings and white background',\n        credit: 'Polina Tankilevitch',\n        type: 'portrait',\n    },\n    {\n        name:'dougGrillin',\n        src: 'images/doug-grillin.jpg',\n        link:'https://www.pexels.com/photo/gray-haired-man-grilling-hot-dogs-8522762/#',\n        alt:'Gray haired man grilling hotdogs',\n        credit: 'RDNE Stock project',\n        type: 'landscape',\n    },\n]\n\nconst addImage = (parent, imageIndex, imageClass, imageId ) => {\n    const newImage = document.createElement('img')\n    newImage.classList.add(imageClass)\n    newImage.id = imageId\n    newImage.src = images[imageIndex].src\n    newImage.alt = images[imageIndex].alt\n    newImage.innerText = images.credit\n    parent.appendChild(newImage)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/images.js?");

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
/******/ 	__webpack_modules__["./src/images.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;