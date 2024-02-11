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



// import { validate } from './validation'

const createFormSection = (labelText, placeHolder, inputId, parentNode) => {
  const label = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('label', 'form-label')
  const input = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('input', 'form-input', inputId)
  const error = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'error-message')

  label.innerText = labelText
  label.setAttribute('for', inputId)

  input.setAttribute('placeholder', placeHolder)
  input.name = inputId
  // input.addEventListener('change', validate(input))

  // error.innerText = validate(input)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(parentNode, label, input, error)
}

const thankYouMessage = (form, event) => {
  event.preventDefault()
  const message = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'thank-you')
  message.innerText = 'Thank you. We will contact you soon'
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(form, message)
  setTimeout(() => {
    message.remove()
  }, 3000)
}

const displayForm = () => {
  const aside = document.querySelector('#aside')
  const form = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('form')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(aside, form)

  createFormSection('Name:', 'Lucas', 'name', form)
  createFormSection('Email:', 'lucas.cubile@yahoo.com', 'email', form)
  createFormSection('Phone:', '+54911685878', 'phone', form)

  const inputs = [...document.querySelectorAll('.form-input')]
  const submitButton = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'submit')
  submitButton.type = 'submit'
  submitButton.innerText = 'Send'
  submitButton.setAttribute('disabled', true)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(form, submitButton)

  form.addEventListener('submit', (event) => thankYouMessage(form, event))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RDtBQUNNO0FBQ25FO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxnQkFBZ0IsNkVBQWlCO0FBQ2pDLGdCQUFnQiw2RUFBaUI7QUFDakMsZ0JBQWdCLDZFQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdFQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZFQUFpQjtBQUNuQztBQUNBLEVBQUUsd0VBQWM7QUFDaEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBLGVBQWUsNkVBQWlCO0FBQ2hDLEVBQUUsd0VBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZFQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxFQUFFLHdFQUFjO0FBQ2hCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDSk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnNEO0FBQ1U7QUFDTjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsRUFBRSxvRUFBWTtBQUNkLGtCQUFrQiw2RUFBaUI7QUFDbkMsRUFBRSx3RUFBYztBQUNoQjtBQUNBLHVCQUF1Qiw2RUFBaUI7QUFDeEM7QUFDQSx3QkFBd0IsNkVBQWlCO0FBQ3pDLEVBQUUsd0VBQWM7QUFDaEI7QUFDQTtBQUNBLGtCQUFrQiw2RUFBaUI7QUFDbkMsa0JBQWtCLDZFQUFpQjtBQUNuQyxpQkFBaUIsNkVBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWM7QUFDbEIsR0FBRztBQUNIOzs7Ozs7O1VDL0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTlk7QUFDWixDQUEwQztBQUNXO0FBQ3JEO0FBQ0EsbUVBQVc7QUFDWCx5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy9Gb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvZW1wdHlDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRFbGVtZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9jcmVhdGVIdG1sRWxlbWVudCdcclxuXHJcbi8vIGltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi92YWxpZGF0aW9uJ1xyXG5cclxuY29uc3QgY3JlYXRlRm9ybVNlY3Rpb24gPSAobGFiZWxUZXh0LCBwbGFjZUhvbGRlciwgaW5wdXRJZCwgcGFyZW50Tm9kZSkgPT4ge1xyXG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm0tbGFiZWwnKVxyXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywgJ2Zvcm0taW5wdXQnLCBpbnB1dElkKVxyXG4gIGNvbnN0IGVycm9yID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnZXJyb3ItbWVzc2FnZScpXHJcblxyXG4gIGxhYmVsLmlubmVyVGV4dCA9IGxhYmVsVGV4dFxyXG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRJZClcclxuXHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlSG9sZGVyKVxyXG4gIGlucHV0Lm5hbWUgPSBpbnB1dElkXHJcbiAgLy8gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdmFsaWRhdGUoaW5wdXQpKVxyXG5cclxuICAvLyBlcnJvci5pbm5lclRleHQgPSB2YWxpZGF0ZShpbnB1dClcclxuICBhcHBlbmRFbGVtZW50cyhwYXJlbnROb2RlLCBsYWJlbCwgaW5wdXQsIGVycm9yKVxyXG59XHJcblxyXG5jb25zdCB0aGFua1lvdU1lc3NhZ2UgPSAoZm9ybSwgZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ3RoYW5rLXlvdScpXHJcbiAgbWVzc2FnZS5pbm5lclRleHQgPSAnVGhhbmsgeW91LiBXZSB3aWxsIGNvbnRhY3QgeW91IHNvb24nXHJcbiAgYXBwZW5kRWxlbWVudHMoZm9ybSwgbWVzc2FnZSlcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG1lc3NhZ2UucmVtb3ZlKClcclxuICB9LCAzMDAwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUnKVxyXG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVIdG1sRWxlbWVudCgnZm9ybScpXHJcbiAgYXBwZW5kRWxlbWVudHMoYXNpZGUsIGZvcm0pXHJcblxyXG4gIGNyZWF0ZUZvcm1TZWN0aW9uKCdOYW1lOicsICdMdWNhcycsICduYW1lJywgZm9ybSlcclxuICBjcmVhdGVGb3JtU2VjdGlvbignRW1haWw6JywgJ2x1Y2FzLmN1YmlsZUB5YWhvby5jb20nLCAnZW1haWwnLCBmb3JtKVxyXG4gIGNyZWF0ZUZvcm1TZWN0aW9uKCdQaG9uZTonLCAnKzU0OTExNjg1ODc4JywgJ3Bob25lJywgZm9ybSlcclxuXHJcbiAgY29uc3QgaW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWlucHV0JyldXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdzdWJtaXQnKVxyXG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCdcclxuICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbmQnXHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gIGFwcGVuZEVsZW1lbnRzKGZvcm0sIHN1Ym1pdEJ1dHRvbilcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHRoYW5rWW91TWVzc2FnZShmb3JtLCBldmVudCkpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFwcGVuZEVsZW1lbnRzID0gKHBhcmVudE5vZGUsIC4uLmNoaWxkcmVuKSA9PiB7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAoZWxlbWVudCwgZWxlbWVudENsYXNzcywgaWQpID0+IHtcclxuICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG5cclxuICBpZiAoZWxlbWVudENsYXNzcykge1xyXG4gICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnRDbGFzc3MpXHJcbiAgfVxyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGRvbUVsZW1lbnQuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRvbUVsZW1lbnRcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZW1wdHlDb250ZW50ID0gKGNvbnRlbnQpID0+IHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbn1cclxuIiwiaW1wb3J0IHsgZW1wdHlDb250ZW50IH0gZnJvbSAnLi4vaGVscGVycy9lbXB0eUNvbnRlbnQnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaGVscGVycy9jcmVhdGVIdG1sRWxlbWVudCdcclxuaW1wb3J0IHsgYXBwZW5kRWxlbWVudHMgfSBmcm9tICcuLi9oZWxwZXJzL2FwcGVuZEVsZW1lbnRzJ1xyXG5cclxuY29uc3QgY2FyZHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdRdWFsaXR5IGZvb2QnLFxyXG4gICAgaW1hZ2U6ICcnLFxyXG4gICAgdGV4dDogJ0F0IG91ciByZXN0YXVyYW50LCB3ZSB0YWtlIHByaWRlIGluIHNlcnZpbmcgeW91IHRoZSBmaW5lc3QgcXVhbGl0eSBmb29kLiBPdXIgY2hlZnMgbWV0aWN1bG91c2x5IHNlbGVjdCB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMgdG8gY3JlYXRlIG1vdXRod2F0ZXJpbmcgZGlzaGVzIHRoYXQgc2F0aXNmeSB5b3VyIHRhc3RlIGJ1ZHMuIEVhY2ggbWVhbCBpcyBhIGN1bGluYXJ5IGV4cGVyaWVuY2UsIGNyYWZ0ZWQgd2l0aCBwYXNzaW9uIGFuZCBkZWRpY2F0aW9uIHRvIGVuc3VyZSB5b3UgZW5qb3kgdGhlIHZlcnkgYmVzdC4nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDYW4ndCBnZXQgdG8gdGhlIHJlc3RhdXJhbnQ/XCIsXHJcbiAgICBpbWFnZTogJycsXHJcbiAgICB0ZXh0OiAnRXhwZXJpZW5jZSB0aGUgY29udmVuaWVuY2Ugb2YgZnJlZSBkZWxpdmVyeSB3aGVuIHlvdSBvcmRlciBmcm9tIHVzLiBXZSBiZWxpZXZlIGluIG1ha2luZyB5b3VyIGRpbmluZyBleHBlcmllbmNlIGVmZm9ydGxlc3MgYW5kIGVuam95YWJsZS4gT3VyIHByb21wdCBhbmQgcmVsaWFibGUgZGVsaXZlcnkgc2VydmljZSBlbnN1cmVzIHRoYXQgeW91ciBmYXZvcml0ZSBkaXNoZXMgYXJlIGRlbGl2ZXJlZCByaWdodCB0byB5b3VyIGRvb3JzdGVwLCBhbGxvd2luZyB5b3UgdG8gc2F2b3Igb3VyIGRlbGVjdGFibGUgb2ZmZXJpbmdzIGluIHRoZSBjb21mb3J0IG9mIHlvdXIgaG9tZS4nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ09wZW4gYWxsIHllYXInLFxyXG4gICAgaW1hZ2U6ICcnLFxyXG4gICAgdGV4dDogXCJXZSBhcmUgY29tbWl0dGVkIHRvIHNlcnZpbmcgeW91IHllYXItcm91bmQsIG9mZmVyaW5nIGEgY29uc2lzdGVudCBhbmQgd2VsY29taW5nIGRpbmluZyBleHBlcmllbmNlLiBXaGV0aGVyIGl0J3MgYSBzdW5ueSBkYXksIGEgd2ludGVyIGV2ZW5pbmcsIG9yIGFueSBkYXkgaW4gYmV0d2Vlbiwgb3VyIGRvb3JzIGFyZSBvcGVuIHRvIHdlbGNvbWUgeW91LiBPdXIgZGVkaWNhdGlvbiB0byBzdGF5aW5nIG9wZW4gZW5zdXJlcyB0aGF0IHlvdSBjYW4gZW5qb3kgb3VyIGV4Y2VwdGlvbmFsIGN1aXNpbmUgd2hlbmV2ZXIgdGhlIGNyYXZpbmcgc3RyaWtlcy5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMnLFxyXG4gICAgaW1hZ2U6ICcnLFxyXG4gICAgdGV4dDogJ0VtYnJhY2UgdGhlIGZsYXZvcnMgb2Ygb3VyIGNvbW11bml0eSB3aXRoIG91ciBjb21taXRtZW50IHRvIHVzaW5nIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cy4gV2UgYmVsaWV2ZSBpbiBzdXBwb3J0aW5nIGxvY2FsIGZhcm1lcnMgYW5kIHByb2R1Y2VycywgZW5zdXJpbmcgdGhhdCBvdXIgZGlzaGVzIGFyZSBub3Qgb25seSBkZWxpY2lvdXMgYnV0IGFsc28gY29udHJpYnV0ZSB0byB0aGUgc3VzdGFpbmFiaWxpdHkgb2YgdGhlIGNvbW11bml0eS4gVGFzdGUgdGhlIGZyZXNobmVzcyBhbmQgcXVhbGl0eSB0aGF0IGNvbWVzIGZyb20gaW5ncmVkaWVudHMgaGFydmVzdGVkIHJpZ2h0IGhlcmUgaW4gb3VyIHJlZ2lvbi4nXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICBlbXB0eUNvbnRlbnQoY29udGVudClcclxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nKVxyXG4gIGFwcGVuZEVsZW1lbnRzKGNvbnRlbnQsIHNlY3Rpb24pXHJcblxyXG4gIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicpXHJcbiAgc2VjdGlvblRpdGxlLmlubmVyVGV4dCA9ICdXaHkgdXM/J1xyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NhcmQtY29udGFpbmVyJylcclxuICBhcHBlbmRFbGVtZW50cyhzZWN0aW9uLCBzZWN0aW9uVGl0bGUsIGNhcmRDb250YWluZXIpXHJcblxyXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gzJywgJ2NhcmQtdGl0bGUnKVxyXG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2NhcmQtaW1hZ2UnKVxyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2NhcmQtdGV4dCcpXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBjYXJkLnRpdGxlXHJcbiAgICBpbWFnZS5zcmMgPSBjYXJkLmltYWdlXHJcbiAgICB0ZXh0LmlubmVyVGV4dCA9IGNhcmQudGV4dFxyXG4gICAgYXBwZW5kRWxlbWVudHMoY2FyZENvbnRhaW5lciwgdGl0bGUsIGltYWdlLCB0ZXh0KVxyXG4gIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCdcclxuaW1wb3J0IHsgZGlzcGxheUhvbWUgfSBmcm9tICcuL3BhZ2VzL2hvbWUnXHJcbmltcG9ydCB7IGRpc3BsYXlGb3JtIH0gZnJvbSAnLi9kb21FbGVtZW50cy9Gb3JtL2Zvcm0nXHJcblxyXG5kaXNwbGF5Rm9ybSgpXHJcbmRpc3BsYXlIb21lKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9