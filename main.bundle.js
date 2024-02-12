/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domElements/Form/form.js":
/*!**************************************!*\
  !*** ./src/domElements/Form/form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayForm: () => (/* binding */ displayForm)
/* harmony export */ });
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./src/domElements/Form/validation.js");




const createFormSection = (labelText, placeHolder, inputId, parentNode) => {
  const label = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('label', 'form-label')
  const input = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('input', 'form-input', inputId)
  const error = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'error-message')

  label.innerText = labelText
  label.setAttribute('for', inputId)

  input.setAttribute('placeholder', placeHolder)
  input.name = inputId
  input.addEventListener('input', () => (0,_validation__WEBPACK_IMPORTED_MODULE_2__.updateError)(error, input))

  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(parentNode, label, input, error)
}

const thankYouMessage = (form, event, button) => {
  event.preventDefault()
  const message = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'thank-you')
  message.innerText = 'Thank you. We will contact you soon'
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(form, message)
  form.reset()
  button.setAttribute('disabled', true)
  setTimeout(() => {
    message.remove()
  }, 3000)
}

const displayForm = () => {
  const aside = document.querySelector('#aside')
  const form = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('form')
  form.setAttribute('novalidate', true)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(aside, form)

  createFormSection('Name:', 'Lucas', 'name', form)
  createFormSection('Email:', 'lucas.cubile@yahoo.com', 'email', form)
  createFormSection('Phone:', '+54911685878', 'phone', form)

  const submitButton = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'submit')
  submitButton.type = 'submit'
  submitButton.innerText = 'Send'
  submitButton.setAttribute('disabled', true)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(form, submitButton)

  form.addEventListener('submit', (event) => thankYouMessage(form, event, submitButton))
  form.addEventListener('input', () => (0,_validation__WEBPACK_IMPORTED_MODULE_2__.activateButton)(submitButton))
}


/***/ }),

/***/ "./src/domElements/Form/validation.js":
/*!********************************************!*\
  !*** ./src/domElements/Form/validation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateButton: () => (/* binding */ activateButton),
/* harmony export */   updateError: () => (/* binding */ updateError),
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var _helpers_toggleClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/toggleClass */ "./src/helpers/toggleClass.js");


const PHONE = /^\+\d{9,}$/
const EMAIL = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/

const validate = (input) => {
  let error = ''
  if (input.value.trim().length === 0) {
    error = 'Must complete the field'
  }

  if (input.id === 'email' && !EMAIL.test(input.value)) {
    error = 'Must follow the pattern xxxx@xxxx.com'
  }

  if (input.id === 'phone' && !PHONE.test(input.value)) {
    error = 'Must have + sign and contain at least 9 numbers'
  }

  return error
}

const updateError = (errorElement, input) => {
  errorElement.innerText = validate(input)
  ;(0,_helpers_toggleClass__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(errorElement, 'has-error')
  ;(0,_helpers_toggleClass__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(input, 'input-error')
}

const activateButton = (button) => {
  const inputs = [...document.querySelectorAll('.form-input')]
  let isValid = inputs.every((inputElement) => !inputElement.classList.contains('has-error') && inputElement.value !== '')
  if (isValid) {
    button.removeAttribute('disabled')
  }
}


/***/ }),

/***/ "./src/helpers/appendElements.js":
/*!***************************************!*\
  !*** ./src/helpers/appendElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendElements: () => (/* binding */ appendElements)
/* harmony export */ });
const appendElements = (parentNode, ...children) => {
  children.forEach((child) => {
    parentNode.appendChild(child)
  })
}


/***/ }),

/***/ "./src/helpers/createHtmlElement.js":
/*!******************************************!*\
  !*** ./src/helpers/createHtmlElement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)
/* harmony export */ });
const createHtmlElement = (element, elementClasss, id) => {
  const domElement = document.createElement(element)

  if (elementClasss) {
    domElement.classList.add(elementClasss)
  }

  if (id) {
    domElement.id = id
  }

  return domElement
}


/***/ }),

/***/ "./src/helpers/emptyContent.js":
/*!*************************************!*\
  !*** ./src/helpers/emptyContent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyContent: () => (/* binding */ emptyContent)
/* harmony export */ });
const emptyContent = (content) => {
  content.innerHTML = ''
}


/***/ }),

/***/ "./src/helpers/toggleClass.js":
/*!************************************!*\
  !*** ./src/helpers/toggleClass.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleClass: () => (/* binding */ toggleClass)
/* harmony export */ });
const toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    element.classList.add(className)
  }
}


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHome: () => (/* binding */ displayHome)
/* harmony export */ });
/* harmony import */ var _helpers_emptyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/emptyContent */ "./src/helpers/emptyContent.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/appendElements */ "./src/helpers/appendElements.js");




const cards = [
  {
    title: 'Quality food',
    image: '',
    text: 'At our restaurant, we take pride in serving you the finest quality food. Our chefs meticulously select the freshest ingredients to create mouthwatering dishes that satisfy your taste buds. Each meal is a culinary experience, crafted with passion and dedication to ensure you enjoy the very best.'
  },
  {
    title: "Can't get to the restaurant?",
    image: '',
    text: 'Experience the convenience of free delivery when you order from us. We believe in making your dining experience effortless and enjoyable. Our prompt and reliable delivery service ensures that your favorite dishes are delivered right to your doorstep, allowing you to savor our delectable offerings in the comfort of your home.'
  },
  {
    title: 'Open all year',
    image: '',
    text: "We are committed to serving you year-round, offering a consistent and welcoming dining experience. Whether it's a sunny day, a winter evening, or any day in between, our doors are open to welcome you. Our dedication to staying open ensures that you can enjoy our exceptional cuisine whenever the craving strikes."
  },
  {
    title: 'Locally sourced ingredients',
    image: '',
    text: 'Embrace the flavors of our community with our commitment to using locally sourced ingredients. We believe in supporting local farmers and producers, ensuring that our dishes are not only delicious but also contribute to the sustainability of the community. Taste the freshness and quality that comes from ingredients harvested right here in our region.'
  }
]

const displayHome = () => {
  const content = document.querySelector('#content')
  ;(0,_helpers_emptyContent__WEBPACK_IMPORTED_MODULE_0__.emptyContent)(content)
  const section = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(content, section)

  const sectionTitle = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2')
  sectionTitle.innerText = 'Why us?'
  const cardContainer = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'card-container')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(section, sectionTitle, cardContainer)

  cards.forEach((card) => {
    const title = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', 'card-title')
    const image = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'card-image')
    const text = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'card-text')
    title.innerText = card.title
    image.src = card.image
    text.innerText = card.text
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(cardContainer, title, image, text)
  })
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _domElements_Form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements/Form/form */ "./src/domElements/Form/form.js");

;


(0,_domElements_Form_form__WEBPACK_IMPORTED_MODULE_1__.displayForm)()
;(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.displayHome)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDTTtBQUNUO0FBQzFEO0FBQ0E7QUFDQSxnQkFBZ0IsNkVBQWlCO0FBQ2pDLGdCQUFnQiw2RUFBaUI7QUFDakMsZ0JBQWdCLDZFQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msd0RBQVc7QUFDbkQ7QUFDQSxFQUFFLHdFQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZFQUFpQjtBQUNuQztBQUNBLEVBQUUsd0VBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQSxlQUFlLDZFQUFpQjtBQUNoQztBQUNBLEVBQUUsd0VBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2RUFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3RUFBYztBQUNoQjtBQUNBO0FBQ0EsdUNBQXVDLDJEQUFjO0FBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHVEO0FBQ3ZEO0FBQ0EscUJBQXFCLEdBQUc7QUFDeEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsRUFBRSxrRUFBVztBQUNiLEVBQUUsa0VBQVc7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ0pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUNVO0FBQ047QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLEVBQUUsb0VBQVk7QUFDZCxrQkFBa0IsNkVBQWlCO0FBQ25DLEVBQUUsd0VBQWM7QUFDaEI7QUFDQSx1QkFBdUIsNkVBQWlCO0FBQ3hDO0FBQ0Esd0JBQXdCLDZFQUFpQjtBQUN6QyxFQUFFLHdFQUFjO0FBQ2hCO0FBQ0E7QUFDQSxrQkFBa0IsNkVBQWlCO0FBQ25DLGtCQUFrQiw2RUFBaUI7QUFDbkMsaUJBQWlCLDZFQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFjO0FBQ2xCLEdBQUc7QUFDSDs7Ozs7OztVQy9DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05ZO0FBQ1osQ0FBMEM7QUFDVztBQUNyRDtBQUNBLG1FQUFXO0FBQ1gseURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMvRm9ybS9mb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy9Gb3JtL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvZW1wdHlDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXJzL3RvZ2dsZUNsYXNzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRFbGVtZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9jcmVhdGVIdG1sRWxlbWVudCdcclxuaW1wb3J0IHsgdXBkYXRlRXJyb3IsIGFjdGl2YXRlQnV0dG9uIH0gZnJvbSAnLi92YWxpZGF0aW9uJ1xyXG5cclxuY29uc3QgY3JlYXRlRm9ybVNlY3Rpb24gPSAobGFiZWxUZXh0LCBwbGFjZUhvbGRlciwgaW5wdXRJZCwgcGFyZW50Tm9kZSkgPT4ge1xyXG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm0tbGFiZWwnKVxyXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywgJ2Zvcm0taW5wdXQnLCBpbnB1dElkKVxyXG4gIGNvbnN0IGVycm9yID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnZXJyb3ItbWVzc2FnZScpXHJcblxyXG4gIGxhYmVsLmlubmVyVGV4dCA9IGxhYmVsVGV4dFxyXG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRJZClcclxuXHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlSG9sZGVyKVxyXG4gIGlucHV0Lm5hbWUgPSBpbnB1dElkXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB1cGRhdGVFcnJvcihlcnJvciwgaW5wdXQpKVxyXG5cclxuICBhcHBlbmRFbGVtZW50cyhwYXJlbnROb2RlLCBsYWJlbCwgaW5wdXQsIGVycm9yKVxyXG59XHJcblxyXG5jb25zdCB0aGFua1lvdU1lc3NhZ2UgPSAoZm9ybSwgZXZlbnQsIGJ1dHRvbikgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCBtZXNzYWdlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAndGhhbmsteW91JylcclxuICBtZXNzYWdlLmlubmVyVGV4dCA9ICdUaGFuayB5b3UuIFdlIHdpbGwgY29udGFjdCB5b3Ugc29vbidcclxuICBhcHBlbmRFbGVtZW50cyhmb3JtLCBtZXNzYWdlKVxyXG4gIGZvcm0ucmVzZXQoKVxyXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG1lc3NhZ2UucmVtb3ZlKClcclxuICB9LCAzMDAwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUnKVxyXG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVIdG1sRWxlbWVudCgnZm9ybScpXHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCB0cnVlKVxyXG4gIGFwcGVuZEVsZW1lbnRzKGFzaWRlLCBmb3JtKVxyXG5cclxuICBjcmVhdGVGb3JtU2VjdGlvbignTmFtZTonLCAnTHVjYXMnLCAnbmFtZScsIGZvcm0pXHJcbiAgY3JlYXRlRm9ybVNlY3Rpb24oJ0VtYWlsOicsICdsdWNhcy5jdWJpbGVAeWFob28uY29tJywgJ2VtYWlsJywgZm9ybSlcclxuICBjcmVhdGVGb3JtU2VjdGlvbignUGhvbmU6JywgJys1NDkxMTY4NTg3OCcsICdwaG9uZScsIGZvcm0pXHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnc3VibWl0JylcclxuICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnXHJcbiAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9ICdTZW5kJ1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICBhcHBlbmRFbGVtZW50cyhmb3JtLCBzdWJtaXRCdXR0b24pXHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGFua1lvdU1lc3NhZ2UoZm9ybSwgZXZlbnQsIHN1Ym1pdEJ1dHRvbikpXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGFjdGl2YXRlQnV0dG9uKHN1Ym1pdEJ1dHRvbikpXHJcbn1cclxuIiwiaW1wb3J0IHsgdG9nZ2xlQ2xhc3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3RvZ2dsZUNsYXNzJ1xyXG5cclxuY29uc3QgUEhPTkUgPSAvXlxcK1xcZHs5LH0kL1xyXG5jb25zdCBFTUFJTCA9IC9eW2EtejAtOV0rQFthLXowLTldK1xcLlthLXowLTldKyQvXHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGUgPSAoaW5wdXQpID0+IHtcclxuICBsZXQgZXJyb3IgPSAnJ1xyXG4gIGlmIChpbnB1dC52YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICBlcnJvciA9ICdNdXN0IGNvbXBsZXRlIHRoZSBmaWVsZCdcclxuICB9XHJcblxyXG4gIGlmIChpbnB1dC5pZCA9PT0gJ2VtYWlsJyAmJiAhRU1BSUwudGVzdChpbnB1dC52YWx1ZSkpIHtcclxuICAgIGVycm9yID0gJ011c3QgZm9sbG93IHRoZSBwYXR0ZXJuIHh4eHhAeHh4eC5jb20nXHJcbiAgfVxyXG5cclxuICBpZiAoaW5wdXQuaWQgPT09ICdwaG9uZScgJiYgIVBIT05FLnRlc3QoaW5wdXQudmFsdWUpKSB7XHJcbiAgICBlcnJvciA9ICdNdXN0IGhhdmUgKyBzaWduIGFuZCBjb250YWluIGF0IGxlYXN0IDkgbnVtYmVycydcclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRXJyb3IgPSAoZXJyb3JFbGVtZW50LCBpbnB1dCkgPT4ge1xyXG4gIGVycm9yRWxlbWVudC5pbm5lclRleHQgPSB2YWxpZGF0ZShpbnB1dClcclxuICB0b2dnbGVDbGFzcyhlcnJvckVsZW1lbnQsICdoYXMtZXJyb3InKVxyXG4gIHRvZ2dsZUNsYXNzKGlucHV0LCAnaW5wdXQtZXJyb3InKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZhdGVCdXR0b24gPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgaW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWlucHV0JyldXHJcbiAgbGV0IGlzVmFsaWQgPSBpbnB1dHMuZXZlcnkoKGlucHV0RWxlbWVudCkgPT4gIWlucHV0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1lcnJvcicpICYmIGlucHV0RWxlbWVudC52YWx1ZSAhPT0gJycpXHJcbiAgaWYgKGlzVmFsaWQpIHtcclxuICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFwcGVuZEVsZW1lbnRzID0gKHBhcmVudE5vZGUsIC4uLmNoaWxkcmVuKSA9PiB7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAoZWxlbWVudCwgZWxlbWVudENsYXNzcywgaWQpID0+IHtcclxuICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG5cclxuICBpZiAoZWxlbWVudENsYXNzcykge1xyXG4gICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnRDbGFzc3MpXHJcbiAgfVxyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGRvbUVsZW1lbnQuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRvbUVsZW1lbnRcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZW1wdHlDb250ZW50ID0gKGNvbnRlbnQpID0+IHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHRvZ2dsZUNsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBlbXB0eUNvbnRlbnQgfSBmcm9tICcuLi9oZWxwZXJzL2VtcHR5Q29udGVudCdcclxuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZUh0bWxFbGVtZW50J1xyXG5pbXBvcnQgeyBhcHBlbmRFbGVtZW50cyB9IGZyb20gJy4uL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMnXHJcblxyXG5jb25zdCBjYXJkcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ1F1YWxpdHkgZm9vZCcsXHJcbiAgICBpbWFnZTogJycsXHJcbiAgICB0ZXh0OiAnQXQgb3VyIHJlc3RhdXJhbnQsIHdlIHRha2UgcHJpZGUgaW4gc2VydmluZyB5b3UgdGhlIGZpbmVzdCBxdWFsaXR5IGZvb2QuIE91ciBjaGVmcyBtZXRpY3Vsb3VzbHkgc2VsZWN0IHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyB0byBjcmVhdGUgbW91dGh3YXRlcmluZyBkaXNoZXMgdGhhdCBzYXRpc2Z5IHlvdXIgdGFzdGUgYnVkcy4gRWFjaCBtZWFsIGlzIGEgY3VsaW5hcnkgZXhwZXJpZW5jZSwgY3JhZnRlZCB3aXRoIHBhc3Npb24gYW5kIGRlZGljYXRpb24gdG8gZW5zdXJlIHlvdSBlbmpveSB0aGUgdmVyeSBiZXN0LidcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNhbid0IGdldCB0byB0aGUgcmVzdGF1cmFudD9cIixcclxuICAgIGltYWdlOiAnJyxcclxuICAgIHRleHQ6ICdFeHBlcmllbmNlIHRoZSBjb252ZW5pZW5jZSBvZiBmcmVlIGRlbGl2ZXJ5IHdoZW4geW91IG9yZGVyIGZyb20gdXMuIFdlIGJlbGlldmUgaW4gbWFraW5nIHlvdXIgZGluaW5nIGV4cGVyaWVuY2UgZWZmb3J0bGVzcyBhbmQgZW5qb3lhYmxlLiBPdXIgcHJvbXB0IGFuZCByZWxpYWJsZSBkZWxpdmVyeSBzZXJ2aWNlIGVuc3VyZXMgdGhhdCB5b3VyIGZhdm9yaXRlIGRpc2hlcyBhcmUgZGVsaXZlcmVkIHJpZ2h0IHRvIHlvdXIgZG9vcnN0ZXAsIGFsbG93aW5nIHlvdSB0byBzYXZvciBvdXIgZGVsZWN0YWJsZSBvZmZlcmluZ3MgaW4gdGhlIGNvbWZvcnQgb2YgeW91ciBob21lLidcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnT3BlbiBhbGwgeWVhcicsXHJcbiAgICBpbWFnZTogJycsXHJcbiAgICB0ZXh0OiBcIldlIGFyZSBjb21taXR0ZWQgdG8gc2VydmluZyB5b3UgeWVhci1yb3VuZCwgb2ZmZXJpbmcgYSBjb25zaXN0ZW50IGFuZCB3ZWxjb21pbmcgZGluaW5nIGV4cGVyaWVuY2UuIFdoZXRoZXIgaXQncyBhIHN1bm55IGRheSwgYSB3aW50ZXIgZXZlbmluZywgb3IgYW55IGRheSBpbiBiZXR3ZWVuLCBvdXIgZG9vcnMgYXJlIG9wZW4gdG8gd2VsY29tZSB5b3UuIE91ciBkZWRpY2F0aW9uIHRvIHN0YXlpbmcgb3BlbiBlbnN1cmVzIHRoYXQgeW91IGNhbiBlbmpveSBvdXIgZXhjZXB0aW9uYWwgY3Vpc2luZSB3aGVuZXZlciB0aGUgY3JhdmluZyBzdHJpa2VzLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cycsXHJcbiAgICBpbWFnZTogJycsXHJcbiAgICB0ZXh0OiAnRW1icmFjZSB0aGUgZmxhdm9ycyBvZiBvdXIgY29tbXVuaXR5IHdpdGggb3VyIGNvbW1pdG1lbnQgdG8gdXNpbmcgbG9jYWxseSBzb3VyY2VkIGluZ3JlZGllbnRzLiBXZSBiZWxpZXZlIGluIHN1cHBvcnRpbmcgbG9jYWwgZmFybWVycyBhbmQgcHJvZHVjZXJzLCBlbnN1cmluZyB0aGF0IG91ciBkaXNoZXMgYXJlIG5vdCBvbmx5IGRlbGljaW91cyBidXQgYWxzbyBjb250cmlidXRlIHRvIHRoZSBzdXN0YWluYWJpbGl0eSBvZiB0aGUgY29tbXVuaXR5LiBUYXN0ZSB0aGUgZnJlc2huZXNzIGFuZCBxdWFsaXR5IHRoYXQgY29tZXMgZnJvbSBpbmdyZWRpZW50cyBoYXJ2ZXN0ZWQgcmlnaHQgaGVyZSBpbiBvdXIgcmVnaW9uLidcclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5SG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG4gIGVtcHR5Q29udGVudChjb250ZW50KVxyXG4gIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVIdG1sRWxlbWVudCgnc2VjdGlvbicpXHJcbiAgYXBwZW5kRWxlbWVudHMoY29udGVudCwgc2VjdGlvbilcclxuXHJcbiAgY29uc3Qgc2VjdGlvblRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJylcclxuICBzZWN0aW9uVGl0bGUuaW5uZXJUZXh0ID0gJ1doeSB1cz8nXHJcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY2FyZC1jb250YWluZXInKVxyXG4gIGFwcGVuZEVsZW1lbnRzKHNlY3Rpb24sIHNlY3Rpb25UaXRsZSwgY2FyZENvbnRhaW5lcilcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDMnLCAnY2FyZC10aXRsZScpXHJcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnY2FyZC1pbWFnZScpXHJcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY2FyZC10ZXh0JylcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IGNhcmQudGl0bGVcclxuICAgIGltYWdlLnNyYyA9IGNhcmQuaW1hZ2VcclxuICAgIHRleHQuaW5uZXJUZXh0ID0gY2FyZC50ZXh0XHJcbiAgICBhcHBlbmRFbGVtZW50cyhjYXJkQ29udGFpbmVyLCB0aXRsZSwgaW1hZ2UsIHRleHQpXHJcbiAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgeyBkaXNwbGF5SG9tZSB9IGZyb20gJy4vcGFnZXMvaG9tZSdcclxuaW1wb3J0IHsgZGlzcGxheUZvcm0gfSBmcm9tICcuL2RvbUVsZW1lbnRzL0Zvcm0vZm9ybSdcclxuXHJcbmRpc3BsYXlGb3JtKClcclxuZGlzcGxheUhvbWUoKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=