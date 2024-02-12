/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/delivery.jpg":
/*!*********************************!*\
  !*** ./src/assets/delivery.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delivery.jpg";

/***/ }),

/***/ "./src/assets/localFood.jpg":
/*!**********************************!*\
  !*** ./src/assets/localFood.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "localFood.jpg";

/***/ }),

/***/ "./src/assets/openAllYear.jpg":
/*!************************************!*\
  !*** ./src/assets/openAllYear.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "openAllYear.jpg";

/***/ }),

/***/ "./src/assets/qualityFood.jpg":
/*!************************************!*\
  !*** ./src/assets/qualityFood.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "qualityFood.jpg";

/***/ }),

/***/ "./src/domElements/Form/form.css":
/*!***************************************!*\
  !*** ./src/domElements/Form/form.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/domElements/ScheduleList/schedule.css":
/*!***************************************************!*\
  !*** ./src/domElements/ScheduleList/schedule.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/home.css":
/*!****************************!*\
  !*** ./src/pages/home.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/menu.css":
/*!****************************!*\
  !*** ./src/pages/menu.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/domElements/Form/form.js":
/*!**************************************!*\
  !*** ./src/domElements/Form/form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayForm: () => (/* binding */ displayForm)
/* harmony export */ });
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./src/domElements/Form/validation.js");
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.css */ "./src/domElements/Form/form.css");





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
  const contactSection = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'contact-us')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(aside, contactSection)
  const form = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('form', 'contact-form')
  const fieldSet = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('fieldset', 'input-wrapper')
  const legend = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('legend', 'form-title')
  legend.innerText = 'Contact us'
  form.setAttribute('novalidate', true)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(contactSection, form)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(form, fieldSet)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(fieldSet, legend)

  createFormSection('Name:', 'Lucas', 'name', fieldSet)
  createFormSection('Email:', 'lucas.cubile@yahoo.com', 'email', fieldSet)
  createFormSection('Phone:', '+54911685878', 'phone', fieldSet)

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

"use strict";
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
  if (errorElement.innerText !== '') {
    (0,_helpers_toggleClass__WEBPACK_IMPORTED_MODULE_0__.addClass)(errorElement, 'has-error')
    ;(0,_helpers_toggleClass__WEBPACK_IMPORTED_MODULE_0__.addClass)(input, 'input-error')
  } else {
    (0,_helpers_toggleClass__WEBPACK_IMPORTED_MODULE_0__.removeClass)(errorElement, 'has-error')
    ;(0,_helpers_toggleClass__WEBPACK_IMPORTED_MODULE_0__.removeClass)(input, 'input-error')
  }
}

const activateButton = (button) => {
  const inputs = [...document.querySelectorAll('.form-input')]
  let isValid = inputs.every((inputElement) => !inputElement.classList.contains('has-error') && inputElement.value !== '')
  if (isValid) {
    button.removeAttribute('disabled')
  }
}


/***/ }),

/***/ "./src/domElements/ScheduleList/schedule.js":
/*!**************************************************!*\
  !*** ./src/domElements/ScheduleList/schedule.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displaySchedule: () => (/* binding */ displaySchedule)
/* harmony export */ });
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _schedule_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.css */ "./src/domElements/ScheduleList/schedule.css");




const restaurantSchedule = [
  {
    day: 'Monday',
    isOpen: false
  },
  {
    day: 'Tuesday',
    isOpen: true,
    startTime: '09:00 AM',
    endTime: '10:00 PM'
  },
  {
    day: 'Wednesday',
    isOpen: true,
    startTime: '09:00 AM',
    endTime: '10:00 PM'
  },
  {
    day: 'Thursday',
    isOpen: true,
    startTime: '09:00 AM',
    endTime: '10:00 PM'
  },
  {
    day: 'Friday',
    isOpen: true,
    startTime: '09:00 AM',
    endTime: '11:00 PM'
  },
  {
    day: 'Saturday',
    isOpen: true,
    startTime: '11:00 AM',
    endTime: '11:00 PM'
  },
  {
    day: 'Sunday',
    isOpen: true,
    startTime: '11:00 AM',
    endTime: '09:00 PM'
  }
]

const displaySchedule = () => {
  const aside = document.querySelector('#aside')
  const scheduleSection = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'our-times')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(aside, scheduleSection)
  const list = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('ul', 'schedule-list')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(scheduleSection, list)
  restaurantSchedule.forEach((day) => {
    const listElement = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li')
    if (!day.isOpen) {
      listElement.innerText = `${day.day}: Closed`
      ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(list, listElement)
    } else {
      listElement.innerText = `${day.day}: From ${day.startTime} to ${day.endTime}`
      ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(list, listElement)
    }
  })
}


/***/ }),

/***/ "./src/helpers/appendElements.js":
/*!***************************************!*\
  !*** ./src/helpers/appendElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   removeClass: () => (/* binding */ removeClass)
/* harmony export */ });
const addClass = (element, className) => {
  element.classList.add(className)
}

const removeClass = (element, className) => {
  element.classList.remove(className)
}


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHome: () => (/* binding */ displayHome)
/* harmony export */ });
/* harmony import */ var _helpers_emptyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/emptyContent */ "./src/helpers/emptyContent.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.css */ "./src/pages/home.css");
/* harmony import */ var _assets_qualityFood_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/qualityFood.jpg */ "./src/assets/qualityFood.jpg");
/* harmony import */ var _assets_qualityFood_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_qualityFood_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_delivery_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/delivery.jpg */ "./src/assets/delivery.jpg");
/* harmony import */ var _assets_delivery_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_delivery_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_openAllYear_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/openAllYear.jpg */ "./src/assets/openAllYear.jpg");
/* harmony import */ var _assets_openAllYear_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_openAllYear_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_localFood_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/localFood.jpg */ "./src/assets/localFood.jpg");
/* harmony import */ var _assets_localFood_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_localFood_jpg__WEBPACK_IMPORTED_MODULE_7__);









const cards = [
  {
    title: 'Quality food',
    image: (_assets_qualityFood_jpg__WEBPACK_IMPORTED_MODULE_4___default()),
    text: 'At our restaurant, we take pride in serving you the finest quality food. Our chefs meticulously select the freshest ingredients to create mouthwatering dishes that satisfy your taste buds. Each meal is a culinary experience, crafted with passion and dedication to ensure you enjoy the very best.'
  },
  {
    title: "Can't get to us?",
    image: (_assets_delivery_jpg__WEBPACK_IMPORTED_MODULE_5___default()),
    text: 'Experience the convenience of free delivery when you order from us. We believe in making your dining experience effortless and enjoyable. Our prompt and reliable delivery service ensures that your favorite dishes are delivered right to your doorstep, allowing you to savor our delectable offerings in the comfort of your home.'
  },
  {
    title: 'Open all year',
    image: (_assets_openAllYear_jpg__WEBPACK_IMPORTED_MODULE_6___default()),
    text: "We are committed to serving you year-round, offering a consistent and welcoming dining experience. Whether it's a sunny day, a winter evening, or any day in between, our doors are open to welcome you. Our dedication to staying open ensures that you can enjoy our exceptional cuisine whenever the craving strikes."
  },
  {
    title: 'Local ingredients',
    image: (_assets_localFood_jpg__WEBPACK_IMPORTED_MODULE_7___default()),
    text: 'Embrace the flavors of our community with our commitment to using locally sourced ingredients. We believe in supporting local farmers and producers, ensuring that our dishes are not only delicious but also contribute to the sustainability of the community. Taste the freshness and quality that comes from ingredients harvested right here in our region.'
  }
]

const displayHome = () => {
  const content = document.querySelector('#content')
  ;(0,_helpers_emptyContent__WEBPACK_IMPORTED_MODULE_0__.emptyContent)(content)
  const section = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'page', 'home')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(content, section)

  const sectionTitle = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2')
  sectionTitle.innerText = 'Why us?'
  const cardContainer = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'card-container')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(section, sectionTitle, cardContainer)

  cards.forEach((card) => {
    const algo = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('article', 'card')
    const title = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', 'card-title')
    const image = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'card-image')
    const text = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'card-text')
    title.innerText = card.title
    image.src = card.image
    text.innerText = card.text
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(cardContainer, algo)
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(algo, title, image, text)
  })
}


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _helpers_emptyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/emptyContent */ "./src/helpers/emptyContent.js");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.css */ "./src/pages/menu.css");





const menu = [
  {
    section: 'Entrees',
    items: [
      { name: 'Caesar Salad', price: '$8.99' },
      { name: 'Bruschetta', price: '$6.99' },
      { name: 'Garlic Bread', price: '$4.99' },
      { name: 'Spinach and Artichoke Dip', price: '$9.99' },
      { name: 'Mozzarella Sticks', price: '$7.99' },
      { name: 'Shrimp Cocktail', price: '$12.99' }
    ]
  },
  {
    section: 'Main Courses',
    items: [
      { name: 'Spaghetti Bolognese', price: '$12.99' },
      { name: 'Grilled Salmon', price: '$16.99' },
      { name: 'Chicken Alfredo', price: '$14.99' },
      { name: 'Filet Mignon', price: '$24.99' },
      { name: 'Vegetarian Pasta', price: '$11.99' },
      { name: 'Pork Chop with Apple Glaze', price: '$18.99' }
    ]
  },
  {
    section: 'Desserts',
    items: [
      { name: 'Chocolate Cake', price: '$7.99' },
      { name: 'Cheesecake', price: '$8.99' },
      { name: 'Tiramisu', price: '$9.99' },
      { name: 'Key Lime Pie', price: '$6.99' },
      { name: 'Apple Pie', price: '$7.49' },
      { name: 'Chocolate Mousse', price: '$8.49' }
    ]
  },
  {
    section: 'Drinks',
    items: [
      { name: 'Soda', price: '$2.99' },
      { name: 'Iced Tea', price: '$3.49' },
      { name: 'Coffee', price: '$3.99' },
      { name: 'Margarita', price: '$7.99' },
      { name: 'Red Wine', price: '$6.99' },
      { name: 'White Wine', price: '$6.99' },
      { name: 'Craft Beer', price: '$5.99' },
      { name: 'Mojito', price: '$8.49' },
      { name: 'Lemonade', price: '$3.49' }
    ]
  }
]

const displayMenu = () => {
  const content = document.querySelector('#content')
  ;(0,_helpers_emptyContent__WEBPACK_IMPORTED_MODULE_2__.emptyContent)(content)
  const section = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'page', 'our-menu')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(content, section)

  const sectionTitle = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2')
  sectionTitle.innerText = 'Our menu'
  const menuContainer = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'menu-container')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(section, sectionTitle, menuContainer)

  menu.forEach((category) => {
    const categorySection = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'food-category')
    const title = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3')
    title.innerText = category.section
    const itemList = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('ul', 'food-list')
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(menuContainer, categorySection)
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(categorySection, title, itemList)
    category.items.forEach((item) => {
      const listItem = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', 'food-item')
      const nameSpan = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'food-name')
      const priceSpan = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'food-price')
      nameSpan.innerText = `${item.name}`
      priceSpan.innerText = `${item.price}`
      ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(itemList, listItem)
      ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(listItem, nameSpan, priceSpan)
    })
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _domElements_Form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements/Form/form */ "./src/domElements/Form/form.js");
/* harmony import */ var _domElements_ScheduleList_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domElements/ScheduleList/schedule */ "./src/domElements/ScheduleList/schedule.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


;





(0,_domElements_Form_form__WEBPACK_IMPORTED_MODULE_2__.displayForm)()
;(0,_domElements_ScheduleList_schedule__WEBPACK_IMPORTED_MODULE_3__.displaySchedule)()
;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.displayMenu)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlk7QUFDWjtBQUNBLENBQTBDO0FBQ0E7QUFDVztBQUNnQjtBQUNoRDtBQUNyQjtBQUNBLG1FQUFXO0FBQ1gsb0ZBQWU7QUFDZix5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvZGVsaXZlcnkuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbG9jYWxGb29kLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL29wZW5BbGxZZWFyLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3F1YWxpdHlGb29kLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMvRm9ybS9mb3JtLmNzcz8zODRjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy9TY2hlZHVsZUxpc3Qvc2NoZWR1bGUuY3NzPzBjZGMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuY3NzPzIxMWYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuY3NzPzI1MzIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/ZGQwZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMvRm9ybS9mb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy9Gb3JtL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzL1NjaGVkdWxlTGlzdC9zY2hlZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9hcHBlbmRFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9jcmVhdGVIdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9lbXB0eUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvdG9nZ2xlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGVsaXZlcnkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibG9jYWxGb29kLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm9wZW5BbGxZZWFyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInF1YWxpdHlGb29kLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGFwcGVuZEVsZW1lbnRzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcHBlbmRFbGVtZW50cydcclxuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2NyZWF0ZUh0bWxFbGVtZW50J1xyXG5pbXBvcnQgeyB1cGRhdGVFcnJvciwgYWN0aXZhdGVCdXR0b24gfSBmcm9tICcuL3ZhbGlkYXRpb24nXHJcbmltcG9ydCAnLi9mb3JtLmNzcydcclxuXHJcbmNvbnN0IGNyZWF0ZUZvcm1TZWN0aW9uID0gKGxhYmVsVGV4dCwgcGxhY2VIb2xkZXIsIGlucHV0SWQsIHBhcmVudE5vZGUpID0+IHtcclxuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdsYWJlbCcsICdmb3JtLWxhYmVsJylcclxuICBjb25zdCBpbnB1dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbnB1dCcsICdmb3JtLWlucHV0JywgaW5wdXRJZClcclxuICBjb25zdCBlcnJvciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2Vycm9yLW1lc3NhZ2UnKVxyXG5cclxuICBsYWJlbC5pbm5lclRleHQgPSBsYWJlbFRleHRcclxuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0SWQpXHJcblxyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZUhvbGRlcilcclxuICBpbnB1dC5uYW1lID0gaW5wdXRJZFxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdXBkYXRlRXJyb3IoZXJyb3IsIGlucHV0KSlcclxuXHJcbiAgYXBwZW5kRWxlbWVudHMocGFyZW50Tm9kZSwgbGFiZWwsIGlucHV0LCBlcnJvcilcclxufVxyXG5cclxuY29uc3QgdGhhbmtZb3VNZXNzYWdlID0gKGZvcm0sIGV2ZW50LCBidXR0b24pID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ3RoYW5rLXlvdScpXHJcbiAgbWVzc2FnZS5pbm5lclRleHQgPSAnVGhhbmsgeW91LiBXZSB3aWxsIGNvbnRhY3QgeW91IHNvb24nXHJcbiAgYXBwZW5kRWxlbWVudHMoZm9ybSwgbWVzc2FnZSlcclxuICBmb3JtLnJlc2V0KClcclxuICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBtZXNzYWdlLnJlbW92ZSgpXHJcbiAgfSwgMzAwMClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FzaWRlJylcclxuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWN0aW9uJywgJ2NvbnRhY3QtdXMnKVxyXG4gIGFwcGVuZEVsZW1lbnRzKGFzaWRlLCBjb250YWN0U2VjdGlvbilcclxuICBjb25zdCBmb3JtID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2Zvcm0nLCAnY29udGFjdC1mb3JtJylcclxuICBjb25zdCBmaWVsZFNldCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdmaWVsZHNldCcsICdpbnB1dC13cmFwcGVyJylcclxuICBjb25zdCBsZWdlbmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnbGVnZW5kJywgJ2Zvcm0tdGl0bGUnKVxyXG4gIGxlZ2VuZC5pbm5lclRleHQgPSAnQ29udGFjdCB1cydcclxuICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpXHJcbiAgYXBwZW5kRWxlbWVudHMoY29udGFjdFNlY3Rpb24sIGZvcm0pXHJcbiAgYXBwZW5kRWxlbWVudHMoZm9ybSwgZmllbGRTZXQpXHJcbiAgYXBwZW5kRWxlbWVudHMoZmllbGRTZXQsIGxlZ2VuZClcclxuXHJcbiAgY3JlYXRlRm9ybVNlY3Rpb24oJ05hbWU6JywgJ0x1Y2FzJywgJ25hbWUnLCBmaWVsZFNldClcclxuICBjcmVhdGVGb3JtU2VjdGlvbignRW1haWw6JywgJ2x1Y2FzLmN1YmlsZUB5YWhvby5jb20nLCAnZW1haWwnLCBmaWVsZFNldClcclxuICBjcmVhdGVGb3JtU2VjdGlvbignUGhvbmU6JywgJys1NDkxMTY4NTg3OCcsICdwaG9uZScsIGZpZWxkU2V0KVxyXG5cclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ3N1Ym1pdCcpXHJcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0J1xyXG4gIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnU2VuZCdcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgYXBwZW5kRWxlbWVudHMoZm9ybSwgc3VibWl0QnV0dG9uKVxyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gdGhhbmtZb3VNZXNzYWdlKGZvcm0sIGV2ZW50LCBzdWJtaXRCdXR0b24pKVxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBhY3RpdmF0ZUJ1dHRvbihzdWJtaXRCdXR0b24pKVxyXG59XHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdG9nZ2xlQ2xhc3MnXHJcblxyXG5jb25zdCBQSE9ORSA9IC9eXFwrXFxkezksfSQvXHJcbmNvbnN0IEVNQUlMID0gL15bYS16MC05XStAW2EtejAtOV0rXFwuW2EtejAtOV0rJC9cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IChpbnB1dCkgPT4ge1xyXG4gIGxldCBlcnJvciA9ICcnXHJcbiAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgIGVycm9yID0gJ011c3QgY29tcGxldGUgdGhlIGZpZWxkJ1xyXG4gIH1cclxuXHJcbiAgaWYgKGlucHV0LmlkID09PSAnZW1haWwnICYmICFFTUFJTC50ZXN0KGlucHV0LnZhbHVlKSkge1xyXG4gICAgZXJyb3IgPSAnTXVzdCBmb2xsb3cgdGhlIHBhdHRlcm4geHh4eEB4eHh4LmNvbSdcclxuICB9XHJcblxyXG4gIGlmIChpbnB1dC5pZCA9PT0gJ3Bob25lJyAmJiAhUEhPTkUudGVzdChpbnB1dC52YWx1ZSkpIHtcclxuICAgIGVycm9yID0gJ011c3QgaGF2ZSArIHNpZ24gYW5kIGNvbnRhaW4gYXQgbGVhc3QgOSBudW1iZXJzJ1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVFcnJvciA9IChlcnJvckVsZW1lbnQsIGlucHV0KSA9PiB7XHJcbiAgZXJyb3JFbGVtZW50LmlubmVyVGV4dCA9IHZhbGlkYXRlKGlucHV0KVxyXG4gIGlmIChlcnJvckVsZW1lbnQuaW5uZXJUZXh0ICE9PSAnJykge1xyXG4gICAgYWRkQ2xhc3MoZXJyb3JFbGVtZW50LCAnaGFzLWVycm9yJylcclxuICAgIGFkZENsYXNzKGlucHV0LCAnaW5wdXQtZXJyb3InKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZW1vdmVDbGFzcyhlcnJvckVsZW1lbnQsICdoYXMtZXJyb3InKVxyXG4gICAgcmVtb3ZlQ2xhc3MoaW5wdXQsICdpbnB1dC1lcnJvcicpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZhdGVCdXR0b24gPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgaW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWlucHV0JyldXHJcbiAgbGV0IGlzVmFsaWQgPSBpbnB1dHMuZXZlcnkoKGlucHV0RWxlbWVudCkgPT4gIWlucHV0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1lcnJvcicpICYmIGlucHV0RWxlbWVudC52YWx1ZSAhPT0gJycpXHJcbiAgaWYgKGlzVmFsaWQpIHtcclxuICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwZW5kRWxlbWVudHMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcGVuZEVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQnXHJcbmltcG9ydCAnLi9zY2hlZHVsZS5jc3MnXHJcblxyXG5jb25zdCByZXN0YXVyYW50U2NoZWR1bGUgPSBbXHJcbiAge1xyXG4gICAgZGF5OiAnTW9uZGF5JyxcclxuICAgIGlzT3BlbjogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogJ1R1ZXNkYXknLFxyXG4gICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgc3RhcnRUaW1lOiAnMDk6MDAgQU0nLFxyXG4gICAgZW5kVGltZTogJzEwOjAwIFBNJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAnV2VkbmVzZGF5JyxcclxuICAgIGlzT3BlbjogdHJ1ZSxcclxuICAgIHN0YXJ0VGltZTogJzA5OjAwIEFNJyxcclxuICAgIGVuZFRpbWU6ICcxMDowMCBQTSdcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogJ1RodXJzZGF5JyxcclxuICAgIGlzT3BlbjogdHJ1ZSxcclxuICAgIHN0YXJ0VGltZTogJzA5OjAwIEFNJyxcclxuICAgIGVuZFRpbWU6ICcxMDowMCBQTSdcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogJ0ZyaWRheScsXHJcbiAgICBpc09wZW46IHRydWUsXHJcbiAgICBzdGFydFRpbWU6ICcwOTowMCBBTScsXHJcbiAgICBlbmRUaW1lOiAnMTE6MDAgUE0nXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6ICdTYXR1cmRheScsXHJcbiAgICBpc09wZW46IHRydWUsXHJcbiAgICBzdGFydFRpbWU6ICcxMTowMCBBTScsXHJcbiAgICBlbmRUaW1lOiAnMTE6MDAgUE0nXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6ICdTdW5kYXknLFxyXG4gICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgc3RhcnRUaW1lOiAnMTE6MDAgQU0nLFxyXG4gICAgZW5kVGltZTogJzA5OjAwIFBNJ1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlTY2hlZHVsZSA9ICgpID0+IHtcclxuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2lkZScpXHJcbiAgY29uc3Qgc2NoZWR1bGVTZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAnb3VyLXRpbWVzJylcclxuICBhcHBlbmRFbGVtZW50cyhhc2lkZSwgc2NoZWR1bGVTZWN0aW9uKVxyXG4gIGNvbnN0IGxpc3QgPSBjcmVhdGVIdG1sRWxlbWVudCgndWwnLCAnc2NoZWR1bGUtbGlzdCcpXHJcbiAgYXBwZW5kRWxlbWVudHMoc2NoZWR1bGVTZWN0aW9uLCBsaXN0KVxyXG4gIHJlc3RhdXJhbnRTY2hlZHVsZS5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2xpJylcclxuICAgIGlmICghZGF5LmlzT3Blbikge1xyXG4gICAgICBsaXN0RWxlbWVudC5pbm5lclRleHQgPSBgJHtkYXkuZGF5fTogQ2xvc2VkYFxyXG4gICAgICBhcHBlbmRFbGVtZW50cyhsaXN0LCBsaXN0RWxlbWVudClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IGAke2RheS5kYXl9OiBGcm9tICR7ZGF5LnN0YXJ0VGltZX0gdG8gJHtkYXkuZW5kVGltZX1gXHJcbiAgICAgIGFwcGVuZEVsZW1lbnRzKGxpc3QsIGxpc3RFbGVtZW50KVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFwcGVuZEVsZW1lbnRzID0gKHBhcmVudE5vZGUsIC4uLmNoaWxkcmVuKSA9PiB7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAoZWxlbWVudCwgZWxlbWVudENsYXNzcywgaWQpID0+IHtcclxuICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG5cclxuICBpZiAoZWxlbWVudENsYXNzcykge1xyXG4gICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnRDbGFzc3MpXHJcbiAgfVxyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGRvbUVsZW1lbnQuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRvbUVsZW1lbnRcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZW1wdHlDb250ZW50ID0gKGNvbnRlbnQpID0+IHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFkZENsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxyXG59XHJcbiIsImltcG9ydCB7IGVtcHR5Q29udGVudCB9IGZyb20gJy4uL2hlbHBlcnMvZW1wdHlDb250ZW50J1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQnXHJcbmltcG9ydCB7IGFwcGVuZEVsZW1lbnRzIH0gZnJvbSAnLi4vaGVscGVycy9hcHBlbmRFbGVtZW50cydcclxuaW1wb3J0ICcuL2hvbWUuY3NzJ1xyXG5pbXBvcnQgcXVhbGl0eUZvb2RJbWFnZSBmcm9tICcuLi9hc3NldHMvcXVhbGl0eUZvb2QuanBnJ1xyXG5pbXBvcnQgZGVsaXZlcnlJbWFnZSBmcm9tICcuLi9hc3NldHMvZGVsaXZlcnkuanBnJ1xyXG5pbXBvcnQgb3BlbkFsbFllYXJJbWFnZSBmcm9tICcuLi9hc3NldHMvb3BlbkFsbFllYXIuanBnJ1xyXG5pbXBvcnQgbG9jYWxJbmdyZWRpZW50c0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9sb2NhbEZvb2QuanBnJ1xyXG5cclxuY29uc3QgY2FyZHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdRdWFsaXR5IGZvb2QnLFxyXG4gICAgaW1hZ2U6IHF1YWxpdHlGb29kSW1hZ2UsXHJcbiAgICB0ZXh0OiAnQXQgb3VyIHJlc3RhdXJhbnQsIHdlIHRha2UgcHJpZGUgaW4gc2VydmluZyB5b3UgdGhlIGZpbmVzdCBxdWFsaXR5IGZvb2QuIE91ciBjaGVmcyBtZXRpY3Vsb3VzbHkgc2VsZWN0IHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyB0byBjcmVhdGUgbW91dGh3YXRlcmluZyBkaXNoZXMgdGhhdCBzYXRpc2Z5IHlvdXIgdGFzdGUgYnVkcy4gRWFjaCBtZWFsIGlzIGEgY3VsaW5hcnkgZXhwZXJpZW5jZSwgY3JhZnRlZCB3aXRoIHBhc3Npb24gYW5kIGRlZGljYXRpb24gdG8gZW5zdXJlIHlvdSBlbmpveSB0aGUgdmVyeSBiZXN0LidcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNhbid0IGdldCB0byB1cz9cIixcclxuICAgIGltYWdlOiBkZWxpdmVyeUltYWdlLFxyXG4gICAgdGV4dDogJ0V4cGVyaWVuY2UgdGhlIGNvbnZlbmllbmNlIG9mIGZyZWUgZGVsaXZlcnkgd2hlbiB5b3Ugb3JkZXIgZnJvbSB1cy4gV2UgYmVsaWV2ZSBpbiBtYWtpbmcgeW91ciBkaW5pbmcgZXhwZXJpZW5jZSBlZmZvcnRsZXNzIGFuZCBlbmpveWFibGUuIE91ciBwcm9tcHQgYW5kIHJlbGlhYmxlIGRlbGl2ZXJ5IHNlcnZpY2UgZW5zdXJlcyB0aGF0IHlvdXIgZmF2b3JpdGUgZGlzaGVzIGFyZSBkZWxpdmVyZWQgcmlnaHQgdG8geW91ciBkb29yc3RlcCwgYWxsb3dpbmcgeW91IHRvIHNhdm9yIG91ciBkZWxlY3RhYmxlIG9mZmVyaW5ncyBpbiB0aGUgY29tZm9ydCBvZiB5b3VyIGhvbWUuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdPcGVuIGFsbCB5ZWFyJyxcclxuICAgIGltYWdlOiBvcGVuQWxsWWVhckltYWdlLFxyXG4gICAgdGV4dDogXCJXZSBhcmUgY29tbWl0dGVkIHRvIHNlcnZpbmcgeW91IHllYXItcm91bmQsIG9mZmVyaW5nIGEgY29uc2lzdGVudCBhbmQgd2VsY29taW5nIGRpbmluZyBleHBlcmllbmNlLiBXaGV0aGVyIGl0J3MgYSBzdW5ueSBkYXksIGEgd2ludGVyIGV2ZW5pbmcsIG9yIGFueSBkYXkgaW4gYmV0d2Vlbiwgb3VyIGRvb3JzIGFyZSBvcGVuIHRvIHdlbGNvbWUgeW91LiBPdXIgZGVkaWNhdGlvbiB0byBzdGF5aW5nIG9wZW4gZW5zdXJlcyB0aGF0IHlvdSBjYW4gZW5qb3kgb3VyIGV4Y2VwdGlvbmFsIGN1aXNpbmUgd2hlbmV2ZXIgdGhlIGNyYXZpbmcgc3RyaWtlcy5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMb2NhbCBpbmdyZWRpZW50cycsXHJcbiAgICBpbWFnZTogbG9jYWxJbmdyZWRpZW50c0ltYWdlLFxyXG4gICAgdGV4dDogJ0VtYnJhY2UgdGhlIGZsYXZvcnMgb2Ygb3VyIGNvbW11bml0eSB3aXRoIG91ciBjb21taXRtZW50IHRvIHVzaW5nIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cy4gV2UgYmVsaWV2ZSBpbiBzdXBwb3J0aW5nIGxvY2FsIGZhcm1lcnMgYW5kIHByb2R1Y2VycywgZW5zdXJpbmcgdGhhdCBvdXIgZGlzaGVzIGFyZSBub3Qgb25seSBkZWxpY2lvdXMgYnV0IGFsc28gY29udHJpYnV0ZSB0byB0aGUgc3VzdGFpbmFiaWxpdHkgb2YgdGhlIGNvbW11bml0eS4gVGFzdGUgdGhlIGZyZXNobmVzcyBhbmQgcXVhbGl0eSB0aGF0IGNvbWVzIGZyb20gaW5ncmVkaWVudHMgaGFydmVzdGVkIHJpZ2h0IGhlcmUgaW4gb3VyIHJlZ2lvbi4nXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICBlbXB0eUNvbnRlbnQoY29udGVudClcclxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAncGFnZScsICdob21lJylcclxuICBhcHBlbmRFbGVtZW50cyhjb250ZW50LCBzZWN0aW9uKVxyXG5cclxuICBjb25zdCBzZWN0aW9uVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInKVxyXG4gIHNlY3Rpb25UaXRsZS5pbm5lclRleHQgPSAnV2h5IHVzPydcclxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjYXJkLWNvbnRhaW5lcicpXHJcbiAgYXBwZW5kRWxlbWVudHMoc2VjdGlvbiwgc2VjdGlvblRpdGxlLCBjYXJkQ29udGFpbmVyKVxyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBjb25zdCBhbGdvID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2FydGljbGUnLCAnY2FyZCcpXHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMycsICdjYXJkLXRpdGxlJylcclxuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdjYXJkLWltYWdlJylcclxuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdjYXJkLXRleHQnKVxyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gY2FyZC50aXRsZVxyXG4gICAgaW1hZ2Uuc3JjID0gY2FyZC5pbWFnZVxyXG4gICAgdGV4dC5pbm5lclRleHQgPSBjYXJkLnRleHRcclxuICAgIGFwcGVuZEVsZW1lbnRzKGNhcmRDb250YWluZXIsIGFsZ28pXHJcbiAgICBhcHBlbmRFbGVtZW50cyhhbGdvLCB0aXRsZSwgaW1hZ2UsIHRleHQpXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBhcHBlbmRFbGVtZW50cyB9IGZyb20gJy4uL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaGVscGVycy9jcmVhdGVIdG1sRWxlbWVudCdcclxuaW1wb3J0IHsgZW1wdHlDb250ZW50IH0gZnJvbSAnLi4vaGVscGVycy9lbXB0eUNvbnRlbnQnXHJcbmltcG9ydCAnLi9tZW51LmNzcydcclxuXHJcbmNvbnN0IG1lbnUgPSBbXHJcbiAge1xyXG4gICAgc2VjdGlvbjogJ0VudHJlZXMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiAnQ2Flc2FyIFNhbGFkJywgcHJpY2U6ICckOC45OScgfSxcclxuICAgICAgeyBuYW1lOiAnQnJ1c2NoZXR0YScsIHByaWNlOiAnJDYuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0dhcmxpYyBCcmVhZCcsIHByaWNlOiAnJDQuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ1NwaW5hY2ggYW5kIEFydGljaG9rZSBEaXAnLCBwcmljZTogJyQ5Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdNb3p6YXJlbGxhIFN0aWNrcycsIHByaWNlOiAnJDcuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ1NocmltcCBDb2NrdGFpbCcsIHByaWNlOiAnJDEyLjk5JyB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZWN0aW9uOiAnTWFpbiBDb3Vyc2VzJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogJ1NwYWdoZXR0aSBCb2xvZ25lc2UnLCBwcmljZTogJyQxMi45OScgfSxcclxuICAgICAgeyBuYW1lOiAnR3JpbGxlZCBTYWxtb24nLCBwcmljZTogJyQxNi45OScgfSxcclxuICAgICAgeyBuYW1lOiAnQ2hpY2tlbiBBbGZyZWRvJywgcHJpY2U6ICckMTQuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0ZpbGV0IE1pZ25vbicsIHByaWNlOiAnJDI0Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdWZWdldGFyaWFuIFBhc3RhJywgcHJpY2U6ICckMTEuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ1BvcmsgQ2hvcCB3aXRoIEFwcGxlIEdsYXplJywgcHJpY2U6ICckMTguOTknIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHNlY3Rpb246ICdEZXNzZXJ0cycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IG5hbWU6ICdDaG9jb2xhdGUgQ2FrZScsIHByaWNlOiAnJDcuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0NoZWVzZWNha2UnLCBwcmljZTogJyQ4Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdUaXJhbWlzdScsIHByaWNlOiAnJDkuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0tleSBMaW1lIFBpZScsIHByaWNlOiAnJDYuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0FwcGxlIFBpZScsIHByaWNlOiAnJDcuNDknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0Nob2NvbGF0ZSBNb3Vzc2UnLCBwcmljZTogJyQ4LjQ5JyB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZWN0aW9uOiAnRHJpbmtzJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogJ1NvZGEnLCBwcmljZTogJyQyLjk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdJY2VkIFRlYScsIHByaWNlOiAnJDMuNDknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0NvZmZlZScsIHByaWNlOiAnJDMuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ01hcmdhcml0YScsIHByaWNlOiAnJDcuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ1JlZCBXaW5lJywgcHJpY2U6ICckNi45OScgfSxcclxuICAgICAgeyBuYW1lOiAnV2hpdGUgV2luZScsIHByaWNlOiAnJDYuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0NyYWZ0IEJlZXInLCBwcmljZTogJyQ1Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdNb2ppdG8nLCBwcmljZTogJyQ4LjQ5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdMZW1vbmFkZScsIHByaWNlOiAnJDMuNDknIH1cclxuICAgIF1cclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5TWVudSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG4gIGVtcHR5Q29udGVudChjb250ZW50KVxyXG4gIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVIdG1sRWxlbWVudCgnc2VjdGlvbicsICdwYWdlJywgJ291ci1tZW51JylcclxuICBhcHBlbmRFbGVtZW50cyhjb250ZW50LCBzZWN0aW9uKVxyXG5cclxuICBjb25zdCBzZWN0aW9uVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInKVxyXG4gIHNlY3Rpb25UaXRsZS5pbm5lclRleHQgPSAnT3VyIG1lbnUnXHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnbWVudS1jb250YWluZXInKVxyXG4gIGFwcGVuZEVsZW1lbnRzKHNlY3Rpb24sIHNlY3Rpb25UaXRsZSwgbWVudUNvbnRhaW5lcilcclxuXHJcbiAgbWVudS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlTZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAnZm9vZC1jYXRlZ29yeScpXHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMycpXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBjYXRlZ29yeS5zZWN0aW9uXHJcbiAgICBjb25zdCBpdGVtTGlzdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCd1bCcsICdmb29kLWxpc3QnKVxyXG4gICAgYXBwZW5kRWxlbWVudHMobWVudUNvbnRhaW5lciwgY2F0ZWdvcnlTZWN0aW9uKVxyXG4gICAgYXBwZW5kRWxlbWVudHMoY2F0ZWdvcnlTZWN0aW9uLCB0aXRsZSwgaXRlbUxpc3QpXHJcbiAgICBjYXRlZ29yeS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2xpJywgJ2Zvb2QtaXRlbScpXHJcbiAgICAgIGNvbnN0IG5hbWVTcGFuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCAnZm9vZC1uYW1lJylcclxuICAgICAgY29uc3QgcHJpY2VTcGFuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCAnZm9vZC1wcmljZScpXHJcbiAgICAgIG5hbWVTcGFuLmlubmVyVGV4dCA9IGAke2l0ZW0ubmFtZX1gXHJcbiAgICAgIHByaWNlU3Bhbi5pbm5lclRleHQgPSBgJHtpdGVtLnByaWNlfWBcclxuICAgICAgYXBwZW5kRWxlbWVudHMoaXRlbUxpc3QsIGxpc3RJdGVtKVxyXG4gICAgICBhcHBlbmRFbGVtZW50cyhsaXN0SXRlbSwgbmFtZVNwYW4sIHByaWNlU3BhbilcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCB7IGRpc3BsYXlIb21lIH0gZnJvbSAnLi9wYWdlcy9ob21lJ1xyXG5pbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gJy4vcGFnZXMvbWVudSdcclxuaW1wb3J0IHsgZGlzcGxheUZvcm0gfSBmcm9tICcuL2RvbUVsZW1lbnRzL0Zvcm0vZm9ybSdcclxuaW1wb3J0IHsgZGlzcGxheVNjaGVkdWxlIH0gZnJvbSAnLi9kb21FbGVtZW50cy9TY2hlZHVsZUxpc3Qvc2NoZWR1bGUnXHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJ1xyXG5cclxuZGlzcGxheUZvcm0oKVxyXG5kaXNwbGF5U2NoZWR1bGUoKVxyXG5kaXNwbGF5TWVudSgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==