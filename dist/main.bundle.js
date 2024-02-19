/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domElements/Form/form.css":
/*!***************************************!*\
  !*** ./src/domElements/Form/form.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/domElements/ScheduleList/schedule.css":
/*!***************************************************!*\
  !*** ./src/domElements/ScheduleList/schedule.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/about.css":
/*!*****************************!*\
  !*** ./src/pages/about.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/home.css":
/*!****************************!*\
  !*** ./src/pages/home.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/menu.css":
/*!****************************!*\
  !*** ./src/pages/menu.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.css */ "./src/domElements/Form/form.css");





const createFormSection = (labelText, placeHolder, inputId, parentNode) => {
  const label = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('label', 'form-label', '', labelText)
  const input = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('input', 'form-input', inputId)
  const error = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'error-message')

  label.setAttribute('for', inputId)

  input.setAttribute('placeholder', placeHolder)
  input.name = inputId
  input.addEventListener('input', () => (0,_validation__WEBPACK_IMPORTED_MODULE_2__.updateError)(error, input))

  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(parentNode, label, input, error)
}

const thankYouMessage = (form, event, button) => {
  event.preventDefault()
  const message = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'thank-you', '', 'Thank you. We will contact you soon')
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
  const legend = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('legend', 'form-title', '', 'Contact us')

  form.setAttribute('novalidate', true)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(contactSection, form)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(form, fieldSet)
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(fieldSet, legend)

  const name = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'form-section')
  const email = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'form-section')
  const phone = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'form-section')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(fieldSet, name, email, phone)

  createFormSection('Name:', 'Lucas', 'name', name)
  createFormSection('Email:', 'lucas.cubile@yahoo.com', 'email', email)
  createFormSection('Phone:', '+54911685878', 'phone', phone)

  const submitButton = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'submit', '', 'Send')
  submitButton.type = 'submit'
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
    error = 'Must have + sign and at least 9 numbers'
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
  let isValid = inputs.every((inputElement) => !inputElement.classList.contains('input-error') && inputElement.value !== '')
  if (isValid) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', true)
  }
}


/***/ }),

/***/ "./src/domElements/Nav/navBar.js":
/*!***************************************!*\
  !*** ./src/domElements/Nav/navBar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyNavigation: () => (/* binding */ applyNavigation)
/* harmony export */ });
/* harmony import */ var _pages_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/Menu */ "./src/pages/Menu.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/home */ "./src/pages/home.js");




const applyNavigation = () => {
  const homeButton = document.querySelector('#nav-home')
  const menuButton = document.querySelector('#nav-menu')
  const aboutButton = document.querySelector('#nav-about')

  homeButton.addEventListener('click', _pages_home__WEBPACK_IMPORTED_MODULE_2__.displayHome)
  menuButton.addEventListener('click', _pages_Menu__WEBPACK_IMPORTED_MODULE_0__.displayMenu)
  aboutButton.addEventListener('click', _pages_about__WEBPACK_IMPORTED_MODULE_1__.displayAbout)
}


/***/ }),

/***/ "./src/domElements/ScheduleList/schedule.js":
/*!**************************************************!*\
  !*** ./src/domElements/ScheduleList/schedule.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displaySchedule: () => (/* binding */ displaySchedule)
/* harmony export */ });
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _schedule_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.css */ "./src/domElements/ScheduleList/schedule.css");




const restaurantSchedule = [
  {
    day: 'Tuesday',
    isOpen: true,
    startTime: '09:00',
    endTime: '22:00'
  },
  {
    day: 'Wednesday',
    isOpen: true,
    startTime: '09:00',
    endTime: '22:00'
  },
  {
    day: 'Thursday',
    isOpen: true,
    startTime: '09:00',
    endTime: '22:00'
  },
  {
    day: 'Friday',
    isOpen: true,
    startTime: '09:00',
    endTime: '23:00'
  },
  {
    day: 'Saturday',
    isOpen: true,
    startTime: '11:00',
    endTime: '23:00'
  },
  {
    day: 'Sunday',
    isOpen: true,
    startTime: '11:00',
    endTime: '21:00'
  },
  {
    day: 'Monday',
    isOpen: false
  }
]

const displaySchedule = () => {
  const aside = document.querySelector('#aside')
  const scheduleSection = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'our-times')
  const title = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h4', 'our-hours', '', 'Our times')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(aside, scheduleSection)

  const list = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('ul', 'schedule-list')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(scheduleSection, title, list)

  restaurantSchedule.forEach((day) => {
    const listElement = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', 'day')
    const nameDay = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'day-span', '', day.day)
    const time = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'time-span')
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(listElement, nameDay, time)

    if (!day.isOpen) {
      time.innerText = 'Closed'
      ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(list, listElement)
    } else {
      time.innerText = `${day.startTime} to ${day.endTime}`
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
const createHtmlElement = (element, elementClass, id, text = '') => {
  const domElement = document.createElement(element)

  if (elementClass) {
    domElement.classList.add(elementClass)
  }

  if (id) {
    domElement.id = id
  }

  domElement.innerText = text

  return domElement
}


/***/ }),

/***/ "./src/helpers/createImage.js":
/*!************************************!*\
  !*** ./src/helpers/createImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createImage: () => (/* binding */ createImage)
/* harmony export */ });
/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlElement */ "./src/helpers/createHtmlElement.js");


const createImage = (src, alt, className) => {
  const image = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('img', className)
  image.src = src
  image.alt = alt

  return image
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

/***/ "./src/helpers/setPage.js":
/*!********************************!*\
  !*** ./src/helpers/setPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPage: () => (/* binding */ setPage)
/* harmony export */ });
/* harmony import */ var _appendElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _emptyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emptyContent */ "./src/helpers/emptyContent.js");




const setPage = (sectionId, sectionTitleText, containerClass) => {
  const content = document.querySelector('#content')
  ;(0,_emptyContent__WEBPACK_IMPORTED_MODULE_2__.emptyContent)(content)
  const section = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'page', sectionId)
  ;(0,_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(content, section)

  const sectionTitle = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', '', '', sectionTitleText)
  const container = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', containerClass)
  ;(0,_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(section, sectionTitle, container)

  return { section, container }
}


/***/ }),

/***/ "./src/helpers/startApp.js":
/*!*********************************!*\
  !*** ./src/helpers/startApp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startApp: () => (/* binding */ startApp)
/* harmony export */ });
/* harmony import */ var _domElements_Nav_navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements/Nav/navBar */ "./src/domElements/Nav/navBar.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");
/* harmony import */ var _domElements_Form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domElements/Form/form */ "./src/domElements/Form/form.js");
/* harmony import */ var _domElements_ScheduleList_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domElements/ScheduleList/schedule */ "./src/domElements/ScheduleList/schedule.js");





const startApp = () => {
  (0,_domElements_Nav_navBar__WEBPACK_IMPORTED_MODULE_0__.applyNavigation)()
  ;(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__.displayHome)()
  ;(0,_domElements_Form_form__WEBPACK_IMPORTED_MODULE_2__.displayForm)()
  ;(0,_domElements_ScheduleList_schedule__WEBPACK_IMPORTED_MODULE_3__.displaySchedule)()
}


/***/ }),

/***/ "./src/helpers/toggleClass.js":
/*!************************************!*\
  !*** ./src/helpers/toggleClass.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/pages/Menu.js":
/*!***************************!*\
  !*** ./src/pages/Menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _helpers_setPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/setPage */ "./src/helpers/setPage.js");
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
  const pageSection = (0,_helpers_setPage__WEBPACK_IMPORTED_MODULE_2__.setPage)('our-menu', 'Our menu', 'menu-container')

  menu.forEach((category) => {
    const categorySection = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'food-category')
    const title = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', 'food-title', '', category.section)
    const itemList = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('ul', 'food-list')
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(pageSection.container, categorySection)
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(categorySection, title, itemList)
    category.items.forEach((item) => {
      const listItem = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', 'food-item')
      const nameSpan = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'food-name', '', item.name)
      const priceSpan = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'food-price', '', item.price)

      ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(itemList, listItem)
      ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(listItem, nameSpan, priceSpan)
    })
  })
}


/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAbout: () => (/* binding */ displayAbout)
/* harmony export */ });
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _assets_1_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/1.restaurant-story.jpg */ "./src/assets/1.restaurant-story.jpg");
/* harmony import */ var _assets_2_restaurant_story_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/2.restaurant-story.jpeg */ "./src/assets/2.restaurant-story.jpeg");
/* harmony import */ var _assets_3_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/3.restaurant-story.jpg */ "./src/assets/3.restaurant-story.jpg");
/* harmony import */ var _assets_4_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/4.restaurant-story.jpg */ "./src/assets/4.restaurant-story.jpg");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.css */ "./src/pages/about.css");
/* harmony import */ var _helpers_setPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/setPage */ "./src/helpers/setPage.js");
/* harmony import */ var _helpers_createImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/createImage */ "./src/helpers/createImage.js");










const restaurantStory = {
  image: _assets_1_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_2__,
  text: "In the quaint year of 1995, our culinary journey embarked on a remarkable adventure. It all started with a group of visionaries fueled by the love for extraordinary food. Nestled in the heart of our charming town, our restaurant quickly became a haven for those seeking culinary delights and warm camaraderie. The air was filled with the aroma of rich flavors and the laughter of satisfied patrons. Our commitment to quality, innovation, and community has been the cornerstone of our success.\n\nOver the years, we've grown and evolved, expanding our menu and refining our culinary techniques. Our chefs, inspired by both tradition and innovation, continuously strive to create dishes that captivate the senses and leave a lasting impression on every guest.\n\nToday, our restaurant stands as a testament to the enduring spirit of passion and dedication. We invite you to join us on a journey through the artistry of flavors, where every meal tells a story and every dining experience is a celebration of the extraordinary.",
  alt: 'our restaurant from its humble beginnings in 1995'
}

const restaurantImages = [
  {
    image: _assets_2_restaurant_story_jpeg__WEBPACK_IMPORTED_MODULE_3__,
    alt: 'Two dishes presented by one of our chefs'
  },
  {
    image: _assets_3_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_4__,
    alt: 'A restaurant bar with wooden chairs'
  },
  {
    image: _assets_4_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_5__,
    alt: 'A plate with french fries, salad, some meat brochettes and some rice'
  }
]

const displayAbout = () => {
  const pageSection = (0,_helpers_setPage__WEBPACK_IMPORTED_MODULE_7__.setPage)('about', 'About us', 'story-container')

  const image = (0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_8__.createImage)(restaurantStory.image, restaurantStory.alt, 'story-img')
  const story = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'story-text', '', restaurantStory.text)

  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(pageSection.container, image, story)

  const imagesContainer = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'restaurant-images-container')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(pageSection.section, imagesContainer)
  restaurantImages.forEach((picture) => {
    const restaurantImage = (0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_8__.createImage)(picture.image, picture.alt, 'restaurant-image')
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(imagesContainer, restaurantImage)
  })
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
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.css */ "./src/pages/home.css");
/* harmony import */ var _assets_qualityFood_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/qualityFood.jpg */ "./src/assets/qualityFood.jpg");
/* harmony import */ var _assets_delivery_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/delivery.jpg */ "./src/assets/delivery.jpg");
/* harmony import */ var _assets_openAllYear_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/openAllYear.jpg */ "./src/assets/openAllYear.jpg");
/* harmony import */ var _assets_localFood_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/localFood.jpg */ "./src/assets/localFood.jpg");
/* harmony import */ var _helpers_setPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/setPage */ "./src/helpers/setPage.js");
/* harmony import */ var _helpers_createImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/createImage */ "./src/helpers/createImage.js");










const cards = [
  {
    title: 'Quality food',
    image: _assets_qualityFood_jpg__WEBPACK_IMPORTED_MODULE_3__,
    text: 'At our restaurant, we take pride in serving you the finest quality food. Our chefs meticulously select the freshest ingredients to create mouthwatering dishes that satisfy your taste buds. Each meal is a culinary experience, crafted with passion and dedication to ensure you enjoy the very best.',
    alt: 'Delicious quality food'
  },
  {
    title: "Can't get to us?",
    image: _assets_delivery_jpg__WEBPACK_IMPORTED_MODULE_4__,
    text: 'Experience the convenience of free delivery when you order from us. We believe in making your dining experience effortless and enjoyable. Our prompt and reliable delivery service ensures that your favorite dishes are delivered right to your doorstep, allowing you to savor our delectable offerings in the comfort of your home.',
    alt: 'Convenient delivery service'
  },
  {
    title: 'Open all year',
    image: _assets_openAllYear_jpg__WEBPACK_IMPORTED_MODULE_5__,
    text: "We are committed to serving you year-round, offering a consistent and welcoming dining experience. Whether it's a sunny day, a winter evening, or any day in between, our doors are open to welcome you. Our dedication to staying open ensures that you can enjoy our exceptional cuisine whenever the craving strikes.",
    alt: 'Open all year-round'
  },
  {
    title: 'Local ingredients',
    image: _assets_localFood_jpg__WEBPACK_IMPORTED_MODULE_6__,
    text: 'Embrace the flavors of our community with our commitment to using locally sourced ingredients. We believe in supporting local farmers and producers, ensuring that our dishes are not only delicious but also contribute to the sustainability of the community. Taste the freshness and quality that comes from ingredients harvested right here in our region.',
    alt: 'Locally sourced ingredients'
  }
]

const displayHome = () => {
  const pageSection = (0,_helpers_setPage__WEBPACK_IMPORTED_MODULE_7__.setPage)('home', 'Why us?', 'card-container')

  cards.forEach((card) => {
    const homeCard = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('article', 'card')
    const title = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h3', 'card-title', '', card.title)
    const image = (0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_8__.createImage)(card.image, card.alt, 'card-image')
    const text = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', 'card-text', '', card.text)

    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_1__.appendElements)(pageSection.container, homeCard)
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_1__.appendElements)(homeCard, title, image, text)
  })
}


/***/ }),

/***/ "./src/assets/1.restaurant-story.jpg":
/*!*******************************************!*\
  !*** ./src/assets/1.restaurant-story.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "325b0cbea768381c74f1.jpg";

/***/ }),

/***/ "./src/assets/2.restaurant-story.jpeg":
/*!********************************************!*\
  !*** ./src/assets/2.restaurant-story.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7dffb2e444b577eff32.jpeg";

/***/ }),

/***/ "./src/assets/3.restaurant-story.jpg":
/*!*******************************************!*\
  !*** ./src/assets/3.restaurant-story.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2104d6c9f87639a76769.jpg";

/***/ }),

/***/ "./src/assets/4.restaurant-story.jpg":
/*!*******************************************!*\
  !*** ./src/assets/4.restaurant-story.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a7a1b3de4b399a7c7d9.jpg";

/***/ }),

/***/ "./src/assets/delivery.jpg":
/*!*********************************!*\
  !*** ./src/assets/delivery.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e30037c6e559a8c158b3.jpg";

/***/ }),

/***/ "./src/assets/localFood.jpg":
/*!**********************************!*\
  !*** ./src/assets/localFood.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f1ea80427b77f0a76e3.jpg";

/***/ }),

/***/ "./src/assets/openAllYear.jpg":
/*!************************************!*\
  !*** ./src/assets/openAllYear.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bb89a6918ade4824b1c.jpg";

/***/ }),

/***/ "./src/assets/qualityFood.jpg":
/*!************************************!*\
  !*** ./src/assets/qualityFood.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "301272062e59c3b6fdba.jpg";

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_startApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/startApp */ "./src/helpers/startApp.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


;


(0,_helpers_startApp__WEBPACK_IMPORTED_MODULE_0__.startApp)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2xCWTtBQUNaO0FBQ0EsQ0FBNkM7QUFDeEI7QUFDckI7QUFDQSwyREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy9Gb3JtL2Zvcm0uY3NzPzM4NGMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzL1NjaGVkdWxlTGlzdC9zY2hlZHVsZS5jc3M/MGNkYyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuY3NzPzdiODQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuY3NzPzIxMWYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuY3NzPzI1MzIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/ZGQwZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMvRm9ybS9mb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy9Gb3JtL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzL05hdi9uYXZCYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzL1NjaGVkdWxlTGlzdC9zY2hlZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9hcHBlbmRFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9jcmVhdGVIdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9jcmVhdGVJbWFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9lbXB0eUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvc2V0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9zdGFydEFwcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy90b2dnbGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBhcHBlbmRFbGVtZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9jcmVhdGVIdG1sRWxlbWVudCdcclxuaW1wb3J0IHsgdXBkYXRlRXJyb3IsIGFjdGl2YXRlQnV0dG9uIH0gZnJvbSAnLi92YWxpZGF0aW9uJ1xyXG5pbXBvcnQgJy4vZm9ybS5jc3MnXHJcblxyXG5jb25zdCBjcmVhdGVGb3JtU2VjdGlvbiA9IChsYWJlbFRleHQsIHBsYWNlSG9sZGVyLCBpbnB1dElkLCBwYXJlbnROb2RlKSA9PiB7XHJcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVIdG1sRWxlbWVudCgnbGFiZWwnLCAnZm9ybS1sYWJlbCcsICcnLCBsYWJlbFRleHQpXHJcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW5wdXQnLCAnZm9ybS1pbnB1dCcsIGlucHV0SWQpXHJcbiAgY29uc3QgZXJyb3IgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdlcnJvci1tZXNzYWdlJylcclxuXHJcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dElkKVxyXG5cclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2VIb2xkZXIpXHJcbiAgaW5wdXQubmFtZSA9IGlucHV0SWRcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHVwZGF0ZUVycm9yKGVycm9yLCBpbnB1dCkpXHJcblxyXG4gIGFwcGVuZEVsZW1lbnRzKHBhcmVudE5vZGUsIGxhYmVsLCBpbnB1dCwgZXJyb3IpXHJcbn1cclxuXHJcbmNvbnN0IHRoYW5rWW91TWVzc2FnZSA9IChmb3JtLCBldmVudCwgYnV0dG9uKSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICd0aGFuay15b3UnLCAnJywgJ1RoYW5rIHlvdS4gV2Ugd2lsbCBjb250YWN0IHlvdSBzb29uJylcclxuICBhcHBlbmRFbGVtZW50cyhmb3JtLCBtZXNzYWdlKVxyXG4gIGZvcm0ucmVzZXQoKVxyXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG1lc3NhZ2UucmVtb3ZlKClcclxuICB9LCAzMDAwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUnKVxyXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAnY29udGFjdC11cycpXHJcbiAgYXBwZW5kRWxlbWVudHMoYXNpZGUsIGNvbnRhY3RTZWN0aW9uKVxyXG5cclxuICBjb25zdCBmb3JtID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2Zvcm0nLCAnY29udGFjdC1mb3JtJylcclxuICBjb25zdCBmaWVsZFNldCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdmaWVsZHNldCcsICdpbnB1dC13cmFwcGVyJylcclxuICBjb25zdCBsZWdlbmQgPSBjcmVhdGVIdG1sRWxlbWVudCgnbGVnZW5kJywgJ2Zvcm0tdGl0bGUnLCAnJywgJ0NvbnRhY3QgdXMnKVxyXG5cclxuICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpXHJcbiAgYXBwZW5kRWxlbWVudHMoY29udGFjdFNlY3Rpb24sIGZvcm0pXHJcbiAgYXBwZW5kRWxlbWVudHMoZm9ybSwgZmllbGRTZXQpXHJcbiAgYXBwZW5kRWxlbWVudHMoZmllbGRTZXQsIGxlZ2VuZClcclxuXHJcbiAgY29uc3QgbmFtZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnZm9ybS1zZWN0aW9uJylcclxuICBjb25zdCBlbWFpbCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnZm9ybS1zZWN0aW9uJylcclxuICBjb25zdCBwaG9uZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnZm9ybS1zZWN0aW9uJylcclxuICBhcHBlbmRFbGVtZW50cyhmaWVsZFNldCwgbmFtZSwgZW1haWwsIHBob25lKVxyXG5cclxuICBjcmVhdGVGb3JtU2VjdGlvbignTmFtZTonLCAnTHVjYXMnLCAnbmFtZScsIG5hbWUpXHJcbiAgY3JlYXRlRm9ybVNlY3Rpb24oJ0VtYWlsOicsICdsdWNhcy5jdWJpbGVAeWFob28uY29tJywgJ2VtYWlsJywgZW1haWwpXHJcbiAgY3JlYXRlRm9ybVNlY3Rpb24oJ1Bob25lOicsICcrNTQ5MTE2ODU4NzgnLCAncGhvbmUnLCBwaG9uZSlcclxuXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdzdWJtaXQnLCAnJywgJ1NlbmQnKVxyXG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCdcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgYXBwZW5kRWxlbWVudHMoZm9ybSwgc3VibWl0QnV0dG9uKVxyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gdGhhbmtZb3VNZXNzYWdlKGZvcm0sIGV2ZW50LCBzdWJtaXRCdXR0b24pKVxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBhY3RpdmF0ZUJ1dHRvbihzdWJtaXRCdXR0b24pKVxyXG59XHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdG9nZ2xlQ2xhc3MnXHJcblxyXG5jb25zdCBQSE9ORSA9IC9eXFwrXFxkezksfSQvXHJcbmNvbnN0IEVNQUlMID0gL15bYS16MC05XStAW2EtejAtOV0rXFwuW2EtejAtOV0rJC9cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IChpbnB1dCkgPT4ge1xyXG4gIGxldCBlcnJvciA9ICcnXHJcbiAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgIGVycm9yID0gJ011c3QgY29tcGxldGUgdGhlIGZpZWxkJ1xyXG4gIH1cclxuXHJcbiAgaWYgKGlucHV0LmlkID09PSAnZW1haWwnICYmICFFTUFJTC50ZXN0KGlucHV0LnZhbHVlKSkge1xyXG4gICAgZXJyb3IgPSAnTXVzdCBmb2xsb3cgdGhlIHBhdHRlcm4geHh4eEB4eHh4LmNvbSdcclxuICB9XHJcblxyXG4gIGlmIChpbnB1dC5pZCA9PT0gJ3Bob25lJyAmJiAhUEhPTkUudGVzdChpbnB1dC52YWx1ZSkpIHtcclxuICAgIGVycm9yID0gJ011c3QgaGF2ZSArIHNpZ24gYW5kIGF0IGxlYXN0IDkgbnVtYmVycydcclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRXJyb3IgPSAoZXJyb3JFbGVtZW50LCBpbnB1dCkgPT4ge1xyXG4gIGVycm9yRWxlbWVudC5pbm5lclRleHQgPSB2YWxpZGF0ZShpbnB1dClcclxuICBpZiAoZXJyb3JFbGVtZW50LmlubmVyVGV4dCAhPT0gJycpIHtcclxuICAgIGFkZENsYXNzKGVycm9yRWxlbWVudCwgJ2hhcy1lcnJvcicpXHJcbiAgICBhZGRDbGFzcyhpbnB1dCwgJ2lucHV0LWVycm9yJylcclxuICB9IGVsc2Uge1xyXG4gICAgcmVtb3ZlQ2xhc3MoZXJyb3JFbGVtZW50LCAnaGFzLWVycm9yJylcclxuICAgIHJlbW92ZUNsYXNzKGlucHV0LCAnaW5wdXQtZXJyb3InKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlQnV0dG9uID0gKGJ1dHRvbikgPT4ge1xyXG4gIGNvbnN0IGlucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1pbnB1dCcpXVxyXG4gIGxldCBpc1ZhbGlkID0gaW5wdXRzLmV2ZXJ5KChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1lcnJvcicpICYmIGlucHV0RWxlbWVudC52YWx1ZSAhPT0gJycpXHJcbiAgaWYgKGlzVmFsaWQpIHtcclxuICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICB9IGVsc2Uge1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gJy4uLy4uL3BhZ2VzL01lbnUnXHJcbmltcG9ydCB7IGRpc3BsYXlBYm91dCB9IGZyb20gJy4uLy4uL3BhZ2VzL2Fib3V0J1xyXG5pbXBvcnQgeyBkaXNwbGF5SG9tZSB9IGZyb20gJy4uLy4uL3BhZ2VzL2hvbWUnXHJcblxyXG5leHBvcnQgY29uc3QgYXBwbHlOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWhvbWUnKVxyXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1lbnUnKVxyXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1hYm91dCcpXHJcblxyXG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SG9tZSlcclxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnUpXHJcbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWJvdXQpXHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwZW5kRWxlbWVudHMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcGVuZEVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQnXHJcbmltcG9ydCAnLi9zY2hlZHVsZS5jc3MnXHJcblxyXG5jb25zdCByZXN0YXVyYW50U2NoZWR1bGUgPSBbXHJcbiAge1xyXG4gICAgZGF5OiAnVHVlc2RheScsXHJcbiAgICBpc09wZW46IHRydWUsXHJcbiAgICBzdGFydFRpbWU6ICcwOTowMCcsXHJcbiAgICBlbmRUaW1lOiAnMjI6MDAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6ICdXZWRuZXNkYXknLFxyXG4gICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgc3RhcnRUaW1lOiAnMDk6MDAnLFxyXG4gICAgZW5kVGltZTogJzIyOjAwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAnVGh1cnNkYXknLFxyXG4gICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgc3RhcnRUaW1lOiAnMDk6MDAnLFxyXG4gICAgZW5kVGltZTogJzIyOjAwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAnRnJpZGF5JyxcclxuICAgIGlzT3BlbjogdHJ1ZSxcclxuICAgIHN0YXJ0VGltZTogJzA5OjAwJyxcclxuICAgIGVuZFRpbWU6ICcyMzowMCdcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogJ1NhdHVyZGF5JyxcclxuICAgIGlzT3BlbjogdHJ1ZSxcclxuICAgIHN0YXJ0VGltZTogJzExOjAwJyxcclxuICAgIGVuZFRpbWU6ICcyMzowMCdcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogJ1N1bmRheScsXHJcbiAgICBpc09wZW46IHRydWUsXHJcbiAgICBzdGFydFRpbWU6ICcxMTowMCcsXHJcbiAgICBlbmRUaW1lOiAnMjE6MDAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6ICdNb25kYXknLFxyXG4gICAgaXNPcGVuOiBmYWxzZVxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlTY2hlZHVsZSA9ICgpID0+IHtcclxuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2lkZScpXHJcbiAgY29uc3Qgc2NoZWR1bGVTZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAnb3VyLXRpbWVzJylcclxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoNCcsICdvdXItaG91cnMnLCAnJywgJ091ciB0aW1lcycpXHJcbiAgYXBwZW5kRWxlbWVudHMoYXNpZGUsIHNjaGVkdWxlU2VjdGlvbilcclxuXHJcbiAgY29uc3QgbGlzdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCd1bCcsICdzY2hlZHVsZS1saXN0JylcclxuICBhcHBlbmRFbGVtZW50cyhzY2hlZHVsZVNlY3Rpb24sIHRpdGxlLCBsaXN0KVxyXG5cclxuICByZXN0YXVyYW50U2NoZWR1bGUuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdsaScsICdkYXknKVxyXG4gICAgY29uc3QgbmFtZURheSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgJ2RheS1zcGFuJywgJycsIGRheS5kYXkpXHJcbiAgICBjb25zdCB0aW1lID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCAndGltZS1zcGFuJylcclxuICAgIGFwcGVuZEVsZW1lbnRzKGxpc3RFbGVtZW50LCBuYW1lRGF5LCB0aW1lKVxyXG5cclxuICAgIGlmICghZGF5LmlzT3Blbikge1xyXG4gICAgICB0aW1lLmlubmVyVGV4dCA9ICdDbG9zZWQnXHJcbiAgICAgIGFwcGVuZEVsZW1lbnRzKGxpc3QsIGxpc3RFbGVtZW50KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZS5pbm5lclRleHQgPSBgJHtkYXkuc3RhcnRUaW1lfSB0byAke2RheS5lbmRUaW1lfWBcclxuICAgICAgYXBwZW5kRWxlbWVudHMobGlzdCwgbGlzdEVsZW1lbnQpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYXBwZW5kRWxlbWVudHMgPSAocGFyZW50Tm9kZSwgLi4uY2hpbGRyZW4pID0+IHtcclxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjaGlsZClcclxuICB9KVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9IChlbGVtZW50LCBlbGVtZW50Q2xhc3MsIGlkLCB0ZXh0ID0gJycpID0+IHtcclxuICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG5cclxuICBpZiAoZWxlbWVudENsYXNzKSB7XHJcbiAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudENsYXNzKVxyXG4gIH1cclxuXHJcbiAgaWYgKGlkKSB7XHJcbiAgICBkb21FbGVtZW50LmlkID0gaWRcclxuICB9XHJcblxyXG4gIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dFxyXG5cclxuICByZXR1cm4gZG9tRWxlbWVudFxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi9jcmVhdGVIdG1sRWxlbWVudCdcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVJbWFnZSA9IChzcmMsIGFsdCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgY29uc3QgaW1hZ2UgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgY2xhc3NOYW1lKVxyXG4gIGltYWdlLnNyYyA9IHNyY1xyXG4gIGltYWdlLmFsdCA9IGFsdFxyXG5cclxuICByZXR1cm4gaW1hZ2VcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZW1wdHlDb250ZW50ID0gKGNvbnRlbnQpID0+IHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwZW5kRWxlbWVudHMgfSBmcm9tICcuL2FwcGVuZEVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vY3JlYXRlSHRtbEVsZW1lbnQnXHJcbmltcG9ydCB7IGVtcHR5Q29udGVudCB9IGZyb20gJy4vZW1wdHlDb250ZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBhZ2UgPSAoc2VjdGlvbklkLCBzZWN0aW9uVGl0bGVUZXh0LCBjb250YWluZXJDbGFzcykgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgZW1wdHlDb250ZW50KGNvbnRlbnQpXHJcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWN0aW9uJywgJ3BhZ2UnLCBzZWN0aW9uSWQpXHJcbiAgYXBwZW5kRWxlbWVudHMoY29udGVudCwgc2VjdGlvbilcclxuXHJcbiAgY29uc3Qgc2VjdGlvblRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJycsICcnLCBzZWN0aW9uVGl0bGVUZXh0KVxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBjb250YWluZXJDbGFzcylcclxuICBhcHBlbmRFbGVtZW50cyhzZWN0aW9uLCBzZWN0aW9uVGl0bGUsIGNvbnRhaW5lcilcclxuXHJcbiAgcmV0dXJuIHsgc2VjdGlvbiwgY29udGFpbmVyIH1cclxufVxyXG4iLCJpbXBvcnQgeyBhcHBseU5hdmlnYXRpb24gfSBmcm9tICcuLi9kb21FbGVtZW50cy9OYXYvbmF2QmFyJ1xyXG5pbXBvcnQgeyBkaXNwbGF5SG9tZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUnXHJcbmltcG9ydCB7IGRpc3BsYXlGb3JtIH0gZnJvbSAnLi4vZG9tRWxlbWVudHMvRm9ybS9mb3JtJ1xyXG5pbXBvcnQgeyBkaXNwbGF5U2NoZWR1bGUgfSBmcm9tICcuLi9kb21FbGVtZW50cy9TY2hlZHVsZUxpc3Qvc2NoZWR1bGUnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRBcHAgPSAoKSA9PiB7XHJcbiAgYXBwbHlOYXZpZ2F0aW9uKClcclxuICBkaXNwbGF5SG9tZSgpXHJcbiAgZGlzcGxheUZvcm0oKVxyXG4gIGRpc3BsYXlTY2hlZHVsZSgpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFkZENsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxyXG59XHJcbiIsImltcG9ydCB7IGFwcGVuZEVsZW1lbnRzIH0gZnJvbSAnLi4vaGVscGVycy9hcHBlbmRFbGVtZW50cydcclxuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZUh0bWxFbGVtZW50J1xyXG5pbXBvcnQgeyBzZXRQYWdlIH0gZnJvbSAnLi4vaGVscGVycy9zZXRQYWdlJ1xyXG5cclxuaW1wb3J0ICcuL21lbnUuY3NzJ1xyXG5cclxuY29uc3QgbWVudSA9IFtcclxuICB7XHJcbiAgICBzZWN0aW9uOiAnRW50cmVlcycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IG5hbWU6ICdDYWVzYXIgU2FsYWQnLCBwcmljZTogJyQ4Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdCcnVzY2hldHRhJywgcHJpY2U6ICckNi45OScgfSxcclxuICAgICAgeyBuYW1lOiAnR2FybGljIEJyZWFkJywgcHJpY2U6ICckNC45OScgfSxcclxuICAgICAgeyBuYW1lOiAnU3BpbmFjaCBhbmQgQXJ0aWNob2tlIERpcCcsIHByaWNlOiAnJDkuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ01venphcmVsbGEgU3RpY2tzJywgcHJpY2U6ICckNy45OScgfSxcclxuICAgICAgeyBuYW1lOiAnU2hyaW1wIENvY2t0YWlsJywgcHJpY2U6ICckMTIuOTknIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHNlY3Rpb246ICdNYWluIENvdXJzZXMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiAnU3BhZ2hldHRpIEJvbG9nbmVzZScsIHByaWNlOiAnJDEyLjk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdHcmlsbGVkIFNhbG1vbicsIHByaWNlOiAnJDE2Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdDaGlja2VuIEFsZnJlZG8nLCBwcmljZTogJyQxNC45OScgfSxcclxuICAgICAgeyBuYW1lOiAnRmlsZXQgTWlnbm9uJywgcHJpY2U6ICckMjQuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ1ZlZ2V0YXJpYW4gUGFzdGEnLCBwcmljZTogJyQxMS45OScgfSxcclxuICAgICAgeyBuYW1lOiAnUG9yayBDaG9wIHdpdGggQXBwbGUgR2xhemUnLCBwcmljZTogJyQxOC45OScgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VjdGlvbjogJ0Rlc3NlcnRzJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogJ0Nob2NvbGF0ZSBDYWtlJywgcHJpY2U6ICckNy45OScgfSxcclxuICAgICAgeyBuYW1lOiAnQ2hlZXNlY2FrZScsIHByaWNlOiAnJDguOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ1RpcmFtaXN1JywgcHJpY2U6ICckOS45OScgfSxcclxuICAgICAgeyBuYW1lOiAnS2V5IExpbWUgUGllJywgcHJpY2U6ICckNi45OScgfSxcclxuICAgICAgeyBuYW1lOiAnQXBwbGUgUGllJywgcHJpY2U6ICckNy40OScgfSxcclxuICAgICAgeyBuYW1lOiAnQ2hvY29sYXRlIE1vdXNzZScsIHByaWNlOiAnJDguNDknIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHNlY3Rpb246ICdEcmlua3MnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiAnU29kYScsIHByaWNlOiAnJDIuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0ljZWQgVGVhJywgcHJpY2U6ICckMy40OScgfSxcclxuICAgICAgeyBuYW1lOiAnQ29mZmVlJywgcHJpY2U6ICckMy45OScgfSxcclxuICAgICAgeyBuYW1lOiAnTWFyZ2FyaXRhJywgcHJpY2U6ICckNy45OScgfSxcclxuICAgICAgeyBuYW1lOiAnUmVkIFdpbmUnLCBwcmljZTogJyQ2Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdXaGl0ZSBXaW5lJywgcHJpY2U6ICckNi45OScgfSxcclxuICAgICAgeyBuYW1lOiAnQ3JhZnQgQmVlcicsIHByaWNlOiAnJDUuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ01vaml0bycsIHByaWNlOiAnJDguNDknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0xlbW9uYWRlJywgcHJpY2U6ICckMy40OScgfVxyXG4gICAgXVxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2VTZWN0aW9uID0gc2V0UGFnZSgnb3VyLW1lbnUnLCAnT3VyIG1lbnUnLCAnbWVudS1jb250YWluZXInKVxyXG5cclxuICBtZW51LmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XHJcbiAgICBjb25zdCBjYXRlZ29yeVNlY3Rpb24gPSBjcmVhdGVIdG1sRWxlbWVudCgnc2VjdGlvbicsICdmb29kLWNhdGVnb3J5JylcclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gzJywgJ2Zvb2QtdGl0bGUnLCAnJywgY2F0ZWdvcnkuc2VjdGlvbilcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3VsJywgJ2Zvb2QtbGlzdCcpXHJcbiAgICBhcHBlbmRFbGVtZW50cyhwYWdlU2VjdGlvbi5jb250YWluZXIsIGNhdGVnb3J5U2VjdGlvbilcclxuICAgIGFwcGVuZEVsZW1lbnRzKGNhdGVnb3J5U2VjdGlvbiwgdGl0bGUsIGl0ZW1MaXN0KVxyXG4gICAgY2F0ZWdvcnkuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdsaScsICdmb29kLWl0ZW0nKVxyXG4gICAgICBjb25zdCBuYW1lU3BhbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgJ2Zvb2QtbmFtZScsICcnLCBpdGVtLm5hbWUpXHJcbiAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgJ2Zvb2QtcHJpY2UnLCAnJywgaXRlbS5wcmljZSlcclxuXHJcbiAgICAgIGFwcGVuZEVsZW1lbnRzKGl0ZW1MaXN0LCBsaXN0SXRlbSlcclxuICAgICAgYXBwZW5kRWxlbWVudHMobGlzdEl0ZW0sIG5hbWVTcGFuLCBwcmljZVNwYW4pXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwZW5kRWxlbWVudHMgfSBmcm9tICcuLi9oZWxwZXJzL2FwcGVuZEVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQnXHJcbmltcG9ydCBmaXJzdEltYWdlIGZyb20gJy4uL2Fzc2V0cy8xLnJlc3RhdXJhbnQtc3RvcnkuanBnJ1xyXG5pbXBvcnQgc2Vjb25kSW1hZ2UgZnJvbSAnLi4vYXNzZXRzLzIucmVzdGF1cmFudC1zdG9yeS5qcGVnJ1xyXG5pbXBvcnQgdGhpcmRJbWFnZSBmcm9tICcuLi9hc3NldHMvMy5yZXN0YXVyYW50LXN0b3J5LmpwZydcclxuaW1wb3J0IGZvdXJ0aEltYWdlIGZyb20gJy4uL2Fzc2V0cy80LnJlc3RhdXJhbnQtc3RvcnkuanBnJ1xyXG5pbXBvcnQgJy4vYWJvdXQuY3NzJ1xyXG5pbXBvcnQgeyBzZXRQYWdlIH0gZnJvbSAnLi4vaGVscGVycy9zZXRQYWdlJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbWFnZSB9IGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlSW1hZ2UnXHJcblxyXG5jb25zdCByZXN0YXVyYW50U3RvcnkgPSB7XHJcbiAgaW1hZ2U6IGZpcnN0SW1hZ2UsXHJcbiAgdGV4dDogXCJJbiB0aGUgcXVhaW50IHllYXIgb2YgMTk5NSwgb3VyIGN1bGluYXJ5IGpvdXJuZXkgZW1iYXJrZWQgb24gYSByZW1hcmthYmxlIGFkdmVudHVyZS4gSXQgYWxsIHN0YXJ0ZWQgd2l0aCBhIGdyb3VwIG9mIHZpc2lvbmFyaWVzIGZ1ZWxlZCBieSB0aGUgbG92ZSBmb3IgZXh0cmFvcmRpbmFyeSBmb29kLiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiBvdXIgY2hhcm1pbmcgdG93biwgb3VyIHJlc3RhdXJhbnQgcXVpY2tseSBiZWNhbWUgYSBoYXZlbiBmb3IgdGhvc2Ugc2Vla2luZyBjdWxpbmFyeSBkZWxpZ2h0cyBhbmQgd2FybSBjYW1hcmFkZXJpZS4gVGhlIGFpciB3YXMgZmlsbGVkIHdpdGggdGhlIGFyb21hIG9mIHJpY2ggZmxhdm9ycyBhbmQgdGhlIGxhdWdodGVyIG9mIHNhdGlzZmllZCBwYXRyb25zLiBPdXIgY29tbWl0bWVudCB0byBxdWFsaXR5LCBpbm5vdmF0aW9uLCBhbmQgY29tbXVuaXR5IGhhcyBiZWVuIHRoZSBjb3JuZXJzdG9uZSBvZiBvdXIgc3VjY2Vzcy5cXG5cXG5PdmVyIHRoZSB5ZWFycywgd2UndmUgZ3Jvd24gYW5kIGV2b2x2ZWQsIGV4cGFuZGluZyBvdXIgbWVudSBhbmQgcmVmaW5pbmcgb3VyIGN1bGluYXJ5IHRlY2huaXF1ZXMuIE91ciBjaGVmcywgaW5zcGlyZWQgYnkgYm90aCB0cmFkaXRpb24gYW5kIGlubm92YXRpb24sIGNvbnRpbnVvdXNseSBzdHJpdmUgdG8gY3JlYXRlIGRpc2hlcyB0aGF0IGNhcHRpdmF0ZSB0aGUgc2Vuc2VzIGFuZCBsZWF2ZSBhIGxhc3RpbmcgaW1wcmVzc2lvbiBvbiBldmVyeSBndWVzdC5cXG5cXG5Ub2RheSwgb3VyIHJlc3RhdXJhbnQgc3RhbmRzIGFzIGEgdGVzdGFtZW50IHRvIHRoZSBlbmR1cmluZyBzcGlyaXQgb2YgcGFzc2lvbiBhbmQgZGVkaWNhdGlvbi4gV2UgaW52aXRlIHlvdSB0byBqb2luIHVzIG9uIGEgam91cm5leSB0aHJvdWdoIHRoZSBhcnRpc3RyeSBvZiBmbGF2b3JzLCB3aGVyZSBldmVyeSBtZWFsIHRlbGxzIGEgc3RvcnkgYW5kIGV2ZXJ5IGRpbmluZyBleHBlcmllbmNlIGlzIGEgY2VsZWJyYXRpb24gb2YgdGhlIGV4dHJhb3JkaW5hcnkuXCIsXHJcbiAgYWx0OiAnb3VyIHJlc3RhdXJhbnQgZnJvbSBpdHMgaHVtYmxlIGJlZ2lubmluZ3MgaW4gMTk5NSdcclxufVxyXG5cclxuY29uc3QgcmVzdGF1cmFudEltYWdlcyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogc2Vjb25kSW1hZ2UsXHJcbiAgICBhbHQ6ICdUd28gZGlzaGVzIHByZXNlbnRlZCBieSBvbmUgb2Ygb3VyIGNoZWZzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IHRoaXJkSW1hZ2UsXHJcbiAgICBhbHQ6ICdBIHJlc3RhdXJhbnQgYmFyIHdpdGggd29vZGVuIGNoYWlycydcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBmb3VydGhJbWFnZSxcclxuICAgIGFsdDogJ0EgcGxhdGUgd2l0aCBmcmVuY2ggZnJpZXMsIHNhbGFkLCBzb21lIG1lYXQgYnJvY2hldHRlcyBhbmQgc29tZSByaWNlJ1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBwYWdlU2VjdGlvbiA9IHNldFBhZ2UoJ2Fib3V0JywgJ0Fib3V0IHVzJywgJ3N0b3J5LWNvbnRhaW5lcicpXHJcblxyXG4gIGNvbnN0IGltYWdlID0gY3JlYXRlSW1hZ2UocmVzdGF1cmFudFN0b3J5LmltYWdlLCByZXN0YXVyYW50U3RvcnkuYWx0LCAnc3RvcnktaW1nJylcclxuICBjb25zdCBzdG9yeSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ3N0b3J5LXRleHQnLCAnJywgcmVzdGF1cmFudFN0b3J5LnRleHQpXHJcblxyXG4gIGFwcGVuZEVsZW1lbnRzKHBhZ2VTZWN0aW9uLmNvbnRhaW5lciwgaW1hZ2UsIHN0b3J5KVxyXG5cclxuICBjb25zdCBpbWFnZXNDb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ3Jlc3RhdXJhbnQtaW1hZ2VzLWNvbnRhaW5lcicpXHJcbiAgYXBwZW5kRWxlbWVudHMocGFnZVNlY3Rpb24uc2VjdGlvbiwgaW1hZ2VzQ29udGFpbmVyKVxyXG4gIHJlc3RhdXJhbnRJbWFnZXMuZm9yRWFjaCgocGljdHVyZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gY3JlYXRlSW1hZ2UocGljdHVyZS5pbWFnZSwgcGljdHVyZS5hbHQsICdyZXN0YXVyYW50LWltYWdlJylcclxuICAgIGFwcGVuZEVsZW1lbnRzKGltYWdlc0NvbnRhaW5lciwgcmVzdGF1cmFudEltYWdlKVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZUh0bWxFbGVtZW50J1xyXG5pbXBvcnQgeyBhcHBlbmRFbGVtZW50cyB9IGZyb20gJy4uL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMnXHJcbmltcG9ydCAnLi9ob21lLmNzcydcclxuaW1wb3J0IHF1YWxpdHlGb29kSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3F1YWxpdHlGb29kLmpwZydcclxuaW1wb3J0IGRlbGl2ZXJ5SW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2RlbGl2ZXJ5LmpwZydcclxuaW1wb3J0IG9wZW5BbGxZZWFySW1hZ2UgZnJvbSAnLi4vYXNzZXRzL29wZW5BbGxZZWFyLmpwZydcclxuaW1wb3J0IGxvY2FsSW5ncmVkaWVudHNJbWFnZSBmcm9tICcuLi9hc3NldHMvbG9jYWxGb29kLmpwZydcclxuaW1wb3J0IHsgc2V0UGFnZSB9IGZyb20gJy4uL2hlbHBlcnMvc2V0UGFnZSdcclxuaW1wb3J0IHsgY3JlYXRlSW1hZ2UgfSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZUltYWdlJ1xyXG5cclxuY29uc3QgY2FyZHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdRdWFsaXR5IGZvb2QnLFxyXG4gICAgaW1hZ2U6IHF1YWxpdHlGb29kSW1hZ2UsXHJcbiAgICB0ZXh0OiAnQXQgb3VyIHJlc3RhdXJhbnQsIHdlIHRha2UgcHJpZGUgaW4gc2VydmluZyB5b3UgdGhlIGZpbmVzdCBxdWFsaXR5IGZvb2QuIE91ciBjaGVmcyBtZXRpY3Vsb3VzbHkgc2VsZWN0IHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyB0byBjcmVhdGUgbW91dGh3YXRlcmluZyBkaXNoZXMgdGhhdCBzYXRpc2Z5IHlvdXIgdGFzdGUgYnVkcy4gRWFjaCBtZWFsIGlzIGEgY3VsaW5hcnkgZXhwZXJpZW5jZSwgY3JhZnRlZCB3aXRoIHBhc3Npb24gYW5kIGRlZGljYXRpb24gdG8gZW5zdXJlIHlvdSBlbmpveSB0aGUgdmVyeSBiZXN0LicsXHJcbiAgICBhbHQ6ICdEZWxpY2lvdXMgcXVhbGl0eSBmb29kJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ2FuJ3QgZ2V0IHRvIHVzP1wiLFxyXG4gICAgaW1hZ2U6IGRlbGl2ZXJ5SW1hZ2UsXHJcbiAgICB0ZXh0OiAnRXhwZXJpZW5jZSB0aGUgY29udmVuaWVuY2Ugb2YgZnJlZSBkZWxpdmVyeSB3aGVuIHlvdSBvcmRlciBmcm9tIHVzLiBXZSBiZWxpZXZlIGluIG1ha2luZyB5b3VyIGRpbmluZyBleHBlcmllbmNlIGVmZm9ydGxlc3MgYW5kIGVuam95YWJsZS4gT3VyIHByb21wdCBhbmQgcmVsaWFibGUgZGVsaXZlcnkgc2VydmljZSBlbnN1cmVzIHRoYXQgeW91ciBmYXZvcml0ZSBkaXNoZXMgYXJlIGRlbGl2ZXJlZCByaWdodCB0byB5b3VyIGRvb3JzdGVwLCBhbGxvd2luZyB5b3UgdG8gc2F2b3Igb3VyIGRlbGVjdGFibGUgb2ZmZXJpbmdzIGluIHRoZSBjb21mb3J0IG9mIHlvdXIgaG9tZS4nLFxyXG4gICAgYWx0OiAnQ29udmVuaWVudCBkZWxpdmVyeSBzZXJ2aWNlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdPcGVuIGFsbCB5ZWFyJyxcclxuICAgIGltYWdlOiBvcGVuQWxsWWVhckltYWdlLFxyXG4gICAgdGV4dDogXCJXZSBhcmUgY29tbWl0dGVkIHRvIHNlcnZpbmcgeW91IHllYXItcm91bmQsIG9mZmVyaW5nIGEgY29uc2lzdGVudCBhbmQgd2VsY29taW5nIGRpbmluZyBleHBlcmllbmNlLiBXaGV0aGVyIGl0J3MgYSBzdW5ueSBkYXksIGEgd2ludGVyIGV2ZW5pbmcsIG9yIGFueSBkYXkgaW4gYmV0d2Vlbiwgb3VyIGRvb3JzIGFyZSBvcGVuIHRvIHdlbGNvbWUgeW91LiBPdXIgZGVkaWNhdGlvbiB0byBzdGF5aW5nIG9wZW4gZW5zdXJlcyB0aGF0IHlvdSBjYW4gZW5qb3kgb3VyIGV4Y2VwdGlvbmFsIGN1aXNpbmUgd2hlbmV2ZXIgdGhlIGNyYXZpbmcgc3RyaWtlcy5cIixcclxuICAgIGFsdDogJ09wZW4gYWxsIHllYXItcm91bmQnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xvY2FsIGluZ3JlZGllbnRzJyxcclxuICAgIGltYWdlOiBsb2NhbEluZ3JlZGllbnRzSW1hZ2UsXHJcbiAgICB0ZXh0OiAnRW1icmFjZSB0aGUgZmxhdm9ycyBvZiBvdXIgY29tbXVuaXR5IHdpdGggb3VyIGNvbW1pdG1lbnQgdG8gdXNpbmcgbG9jYWxseSBzb3VyY2VkIGluZ3JlZGllbnRzLiBXZSBiZWxpZXZlIGluIHN1cHBvcnRpbmcgbG9jYWwgZmFybWVycyBhbmQgcHJvZHVjZXJzLCBlbnN1cmluZyB0aGF0IG91ciBkaXNoZXMgYXJlIG5vdCBvbmx5IGRlbGljaW91cyBidXQgYWxzbyBjb250cmlidXRlIHRvIHRoZSBzdXN0YWluYWJpbGl0eSBvZiB0aGUgY29tbXVuaXR5LiBUYXN0ZSB0aGUgZnJlc2huZXNzIGFuZCBxdWFsaXR5IHRoYXQgY29tZXMgZnJvbSBpbmdyZWRpZW50cyBoYXJ2ZXN0ZWQgcmlnaHQgaGVyZSBpbiBvdXIgcmVnaW9uLicsXHJcbiAgICBhbHQ6ICdMb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMnXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZVNlY3Rpb24gPSBzZXRQYWdlKCdob21lJywgJ1doeSB1cz8nLCAnY2FyZC1jb250YWluZXInKVxyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBjb25zdCBob21lQ2FyZCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdhcnRpY2xlJywgJ2NhcmQnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDMnLCAnY2FyZC10aXRsZScsICcnLCBjYXJkLnRpdGxlKVxyXG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVJbWFnZShjYXJkLmltYWdlLCBjYXJkLmFsdCwgJ2NhcmQtaW1hZ2UnKVxyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2NhcmQtdGV4dCcsICcnLCBjYXJkLnRleHQpXHJcblxyXG4gICAgYXBwZW5kRWxlbWVudHMocGFnZVNlY3Rpb24uY29udGFpbmVyLCBob21lQ2FyZClcclxuICAgIGFwcGVuZEVsZW1lbnRzKGhvbWVDYXJkLCB0aXRsZSwgaW1hZ2UsIHRleHQpXHJcbiAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgeyBzdGFydEFwcCB9IGZyb20gJy4vaGVscGVycy9zdGFydEFwcCdcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXHJcblxyXG5zdGFydEFwcCgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==