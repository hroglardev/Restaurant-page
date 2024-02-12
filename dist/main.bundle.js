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
  const title = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h4', 'our-hours')
  title.innerText = 'Our times'
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(aside, scheduleSection)
  const list = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('ul', 'schedule-list')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(scheduleSection, title, list)
  restaurantSchedule.forEach((day) => {
    const listElement = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', 'day')
    const nameDay = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'day-span')
    const time = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'time-span')
    nameDay.innerText = `${day.day}:`
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
const createHtmlElement = (element, elementClass, id) => {
  const domElement = document.createElement(element)

  if (elementClass) {
    domElement.classList.add(elementClass)
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

/***/ "./src/helpers/startPage.js":
/*!**********************************!*\
  !*** ./src/helpers/startPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startPage: () => (/* binding */ startPage)
/* harmony export */ });
/* harmony import */ var _domElements_Nav_navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements/Nav/navBar */ "./src/domElements/Nav/navBar.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");
/* harmony import */ var _domElements_Form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domElements/Form/form */ "./src/domElements/Form/form.js");
/* harmony import */ var _domElements_ScheduleList_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domElements/ScheduleList/schedule */ "./src/domElements/ScheduleList/schedule.js");





const startPage = () => {
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
    const title = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', 'food-title')
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
/* harmony import */ var _helpers_emptyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/emptyContent */ "./src/helpers/emptyContent.js");
/* harmony import */ var _assets_1_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/1.restaurant-story.jpg */ "./src/assets/1.restaurant-story.jpg");
/* harmony import */ var _assets_2_restaurant_story_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/2.restaurant-story.jpeg */ "./src/assets/2.restaurant-story.jpeg");
/* harmony import */ var _assets_3_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/3.restaurant-story.jpg */ "./src/assets/3.restaurant-story.jpg");
/* harmony import */ var _assets_4_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/4.restaurant-story.jpg */ "./src/assets/4.restaurant-story.jpg");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about.css */ "./src/pages/about.css");









const restaurantStory = {
  image: _assets_1_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_3__,
  text: "In the quaint year of 1995, our culinary journey embarked on a remarkable adventure. It all started with a group of visionaries fueled by the love for extraordinary food. Nestled in the heart of our charming town, our restaurant quickly became a haven for those seeking culinary delights and warm camaraderie. The air was filled with the aroma of rich flavors and the laughter of satisfied patrons. Our commitment to quality, innovation, and community has been the cornerstone of our success.\n\nOver the years, we've grown and evolved, expanding our menu and refining our culinary techniques. Our chefs, inspired by both tradition and innovation, continuously strive to create dishes that captivate the senses and leave a lasting impression on every guest.\n\nToday, our restaurant stands as a testament to the enduring spirit of passion and dedication. We invite you to join us on a journey through the artistry of flavors, where every meal tells a story and every dining experience is a celebration of the extraordinary.",
  alt: 'our restaurant from its humble beginnings in 1995'
}

const restaurantImages = [
  {
    image: _assets_2_restaurant_story_jpeg__WEBPACK_IMPORTED_MODULE_4__,
    alt: 'Two dishes presented by one of our chefs'
  },
  {
    image: _assets_3_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_5__,
    alt: 'A restaurant bar with wooden chairs'
  },
  {
    image: _assets_4_restaurant_story_jpg__WEBPACK_IMPORTED_MODULE_6__,
    alt: 'A plate with french fries, salad, some meat brochettes and some rice'
  }
]

const displayAbout = () => {
  const content = document.querySelector('#content')
  ;(0,_helpers_emptyContent__WEBPACK_IMPORTED_MODULE_2__.emptyContent)(content)
  const section = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', 'page', 'about')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(content, section)

  const sectionTitle = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2')
  sectionTitle.innerText = 'About us'
  const storyContainer = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'story-container')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(section, sectionTitle, storyContainer)

  const image = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'story-img')
  const story = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'story-text')
  image.src = restaurantStory.image
  image.alt = restaurantStory.alt
  story.innerText = restaurantStory.text

  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(storyContainer, image, story)

  const imagesContainer = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'restaurant-images-container')
  ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_0__.appendElements)(section, imagesContainer)
  restaurantImages.forEach((picture) => {
    const restaurantImage = (0,_helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'restaurant-image')
    restaurantImage.src = picture.image
    restaurantImage.alt = picture.alt
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
/* harmony import */ var _helpers_emptyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/emptyContent */ "./src/helpers/emptyContent.js");
/* harmony import */ var _helpers_createHtmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createHtmlElement */ "./src/helpers/createHtmlElement.js");
/* harmony import */ var _helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/appendElements */ "./src/helpers/appendElements.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.css */ "./src/pages/home.css");
/* harmony import */ var _assets_qualityFood_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/qualityFood.jpg */ "./src/assets/qualityFood.jpg");
/* harmony import */ var _assets_delivery_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/delivery.jpg */ "./src/assets/delivery.jpg");
/* harmony import */ var _assets_openAllYear_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/openAllYear.jpg */ "./src/assets/openAllYear.jpg");
/* harmony import */ var _assets_localFood_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/localFood.jpg */ "./src/assets/localFood.jpg");









const cards = [
  {
    title: 'Quality food',
    image: _assets_qualityFood_jpg__WEBPACK_IMPORTED_MODULE_4__,
    text: 'At our restaurant, we take pride in serving you the finest quality food. Our chefs meticulously select the freshest ingredients to create mouthwatering dishes that satisfy your taste buds. Each meal is a culinary experience, crafted with passion and dedication to ensure you enjoy the very best.',
    alt: 'Delicious quality food'
  },
  {
    title: "Can't get to us?",
    image: _assets_delivery_jpg__WEBPACK_IMPORTED_MODULE_5__,
    text: 'Experience the convenience of free delivery when you order from us. We believe in making your dining experience effortless and enjoyable. Our prompt and reliable delivery service ensures that your favorite dishes are delivered right to your doorstep, allowing you to savor our delectable offerings in the comfort of your home.',
    alt: 'Convenient delivery service'
  },
  {
    title: 'Open all year',
    image: _assets_openAllYear_jpg__WEBPACK_IMPORTED_MODULE_6__,
    text: "We are committed to serving you year-round, offering a consistent and welcoming dining experience. Whether it's a sunny day, a winter evening, or any day in between, our doors are open to welcome you. Our dedication to staying open ensures that you can enjoy our exceptional cuisine whenever the craving strikes.",
    alt: 'Open all year-round'
  },
  {
    title: 'Local ingredients',
    image: _assets_localFood_jpg__WEBPACK_IMPORTED_MODULE_7__,
    text: 'Embrace the flavors of our community with our commitment to using locally sourced ingredients. We believe in supporting local farmers and producers, ensuring that our dishes are not only delicious but also contribute to the sustainability of the community. Taste the freshness and quality that comes from ingredients harvested right here in our region.',
    alt: 'Locally sourced ingredients'
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
    image.alt = card.alt
    text.innerText = card.text
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(cardContainer, algo)
    ;(0,_helpers_appendElements__WEBPACK_IMPORTED_MODULE_2__.appendElements)(algo, title, image, text)
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
/* harmony import */ var _helpers_startPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/startPage */ "./src/helpers/startPage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


;


(0,_helpers_startPage__WEBPACK_IMPORTED_MODULE_0__.startPage)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJZO0FBQ1o7QUFDQSxDQUErQztBQUMxQjtBQUNyQjtBQUNBLDZEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzL0Zvcm0vZm9ybS5jc3M/Mzg0YyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMvU2NoZWR1bGVMaXN0L3NjaGVkdWxlLmNzcz8wY2RjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5jc3M/N2I4NCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5jc3M/MjExZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5jc3M/MjUzMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz9kZDBkIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy9Gb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzL0Zvcm0vdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMvTmF2L25hdkJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMvU2NoZWR1bGVMaXN0L3NjaGVkdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXJzL2FwcGVuZEVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXJzL2NyZWF0ZUh0bWxFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXJzL2VtcHR5Q29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVycy9zdGFydFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMvdG9nZ2xlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL01lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgYXBwZW5kRWxlbWVudHMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcGVuZEVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQnXHJcbmltcG9ydCB7IHVwZGF0ZUVycm9yLCBhY3RpdmF0ZUJ1dHRvbiB9IGZyb20gJy4vdmFsaWRhdGlvbidcclxuaW1wb3J0ICcuL2Zvcm0uY3NzJ1xyXG5cclxuY29uc3QgY3JlYXRlRm9ybVNlY3Rpb24gPSAobGFiZWxUZXh0LCBwbGFjZUhvbGRlciwgaW5wdXRJZCwgcGFyZW50Tm9kZSkgPT4ge1xyXG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm0tbGFiZWwnKVxyXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2lucHV0JywgJ2Zvcm0taW5wdXQnLCBpbnB1dElkKVxyXG4gIGNvbnN0IGVycm9yID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnZXJyb3ItbWVzc2FnZScpXHJcblxyXG4gIGxhYmVsLmlubmVyVGV4dCA9IGxhYmVsVGV4dFxyXG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRJZClcclxuXHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlSG9sZGVyKVxyXG4gIGlucHV0Lm5hbWUgPSBpbnB1dElkXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB1cGRhdGVFcnJvcihlcnJvciwgaW5wdXQpKVxyXG5cclxuICBhcHBlbmRFbGVtZW50cyhwYXJlbnROb2RlLCBsYWJlbCwgaW5wdXQsIGVycm9yKVxyXG59XHJcblxyXG5jb25zdCB0aGFua1lvdU1lc3NhZ2UgPSAoZm9ybSwgZXZlbnQsIGJ1dHRvbikgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCBtZXNzYWdlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAndGhhbmsteW91JylcclxuICBtZXNzYWdlLmlubmVyVGV4dCA9ICdUaGFuayB5b3UuIFdlIHdpbGwgY29udGFjdCB5b3Ugc29vbidcclxuICBhcHBlbmRFbGVtZW50cyhmb3JtLCBtZXNzYWdlKVxyXG4gIGZvcm0ucmVzZXQoKVxyXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG1lc3NhZ2UucmVtb3ZlKClcclxuICB9LCAzMDAwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUnKVxyXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAnY29udGFjdC11cycpXHJcbiAgYXBwZW5kRWxlbWVudHMoYXNpZGUsIGNvbnRhY3RTZWN0aW9uKVxyXG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVIdG1sRWxlbWVudCgnZm9ybScsICdjb250YWN0LWZvcm0nKVxyXG4gIGNvbnN0IGZpZWxkU2V0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ZpZWxkc2V0JywgJ2lucHV0LXdyYXBwZXInKVxyXG4gIGNvbnN0IGxlZ2VuZCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdsZWdlbmQnLCAnZm9ybS10aXRsZScpXHJcbiAgbGVnZW5kLmlubmVyVGV4dCA9ICdDb250YWN0IHVzJ1xyXG4gIGZvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgdHJ1ZSlcclxuICBhcHBlbmRFbGVtZW50cyhjb250YWN0U2VjdGlvbiwgZm9ybSlcclxuICBhcHBlbmRFbGVtZW50cyhmb3JtLCBmaWVsZFNldClcclxuICBhcHBlbmRFbGVtZW50cyhmaWVsZFNldCwgbGVnZW5kKVxyXG5cclxuICBjcmVhdGVGb3JtU2VjdGlvbignTmFtZTonLCAnTHVjYXMnLCAnbmFtZScsIGZpZWxkU2V0KVxyXG4gIGNyZWF0ZUZvcm1TZWN0aW9uKCdFbWFpbDonLCAnbHVjYXMuY3ViaWxlQHlhaG9vLmNvbScsICdlbWFpbCcsIGZpZWxkU2V0KVxyXG4gIGNyZWF0ZUZvcm1TZWN0aW9uKCdQaG9uZTonLCAnKzU0OTExNjg1ODc4JywgJ3Bob25lJywgZmllbGRTZXQpXHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnc3VibWl0JylcclxuICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnXHJcbiAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9ICdTZW5kJ1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICBhcHBlbmRFbGVtZW50cyhmb3JtLCBzdWJtaXRCdXR0b24pXHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGFua1lvdU1lc3NhZ2UoZm9ybSwgZXZlbnQsIHN1Ym1pdEJ1dHRvbikpXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGFjdGl2YXRlQnV0dG9uKHN1Ym1pdEJ1dHRvbikpXHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi4vLi4vaGVscGVycy90b2dnbGVDbGFzcydcclxuXHJcbmNvbnN0IFBIT05FID0gL15cXCtcXGR7OSx9JC9cclxuY29uc3QgRU1BSUwgPSAvXlthLXowLTldK0BbYS16MC05XStcXC5bYS16MC05XSskL1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKGlucHV0KSA9PiB7XHJcbiAgbGV0IGVycm9yID0gJydcclxuICBpZiAoaW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZXJyb3IgPSAnTXVzdCBjb21wbGV0ZSB0aGUgZmllbGQnXHJcbiAgfVxyXG5cclxuICBpZiAoaW5wdXQuaWQgPT09ICdlbWFpbCcgJiYgIUVNQUlMLnRlc3QoaW5wdXQudmFsdWUpKSB7XHJcbiAgICBlcnJvciA9ICdNdXN0IGZvbGxvdyB0aGUgcGF0dGVybiB4eHh4QHh4eHguY29tJ1xyXG4gIH1cclxuXHJcbiAgaWYgKGlucHV0LmlkID09PSAncGhvbmUnICYmICFQSE9ORS50ZXN0KGlucHV0LnZhbHVlKSkge1xyXG4gICAgZXJyb3IgPSAnTXVzdCBoYXZlICsgc2lnbiBhbmQgY29udGFpbiBhdCBsZWFzdCA5IG51bWJlcnMnXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVycm9yID0gKGVycm9yRWxlbWVudCwgaW5wdXQpID0+IHtcclxuICBlcnJvckVsZW1lbnQuaW5uZXJUZXh0ID0gdmFsaWRhdGUoaW5wdXQpXHJcbiAgaWYgKGVycm9yRWxlbWVudC5pbm5lclRleHQgIT09ICcnKSB7XHJcbiAgICBhZGRDbGFzcyhlcnJvckVsZW1lbnQsICdoYXMtZXJyb3InKVxyXG4gICAgYWRkQ2xhc3MoaW5wdXQsICdpbnB1dC1lcnJvcicpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlbW92ZUNsYXNzKGVycm9yRWxlbWVudCwgJ2hhcy1lcnJvcicpXHJcbiAgICByZW1vdmVDbGFzcyhpbnB1dCwgJ2lucHV0LWVycm9yJylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmF0ZUJ1dHRvbiA9IChidXR0b24pID0+IHtcclxuICBjb25zdCBpbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taW5wdXQnKV1cclxuICBsZXQgaXNWYWxpZCA9IGlucHV0cy5ldmVyeSgoaW5wdXRFbGVtZW50KSA9PiAhaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaGFzLWVycm9yJykgJiYgaW5wdXRFbGVtZW50LnZhbHVlICE9PSAnJylcclxuICBpZiAoaXNWYWxpZCkge1xyXG4gICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gJy4uLy4uL3BhZ2VzL01lbnUnXHJcbmltcG9ydCB7IGRpc3BsYXlBYm91dCB9IGZyb20gJy4uLy4uL3BhZ2VzL2Fib3V0J1xyXG5pbXBvcnQgeyBkaXNwbGF5SG9tZSB9IGZyb20gJy4uLy4uL3BhZ2VzL2hvbWUnXHJcblxyXG5leHBvcnQgY29uc3QgYXBwbHlOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWhvbWUnKVxyXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1lbnUnKVxyXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1hYm91dCcpXHJcblxyXG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SG9tZSlcclxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnUpXHJcbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWJvdXQpXHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwZW5kRWxlbWVudHMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcGVuZEVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQnXHJcbmltcG9ydCAnLi9zY2hlZHVsZS5jc3MnXHJcblxyXG5jb25zdCByZXN0YXVyYW50U2NoZWR1bGUgPSBbXHJcbiAge1xyXG4gICAgZGF5OiAnVHVlc2RheScsXHJcbiAgICBpc09wZW46IHRydWUsXHJcbiAgICBzdGFydFRpbWU6ICcwOTowMCcsXHJcbiAgICBlbmRUaW1lOiAnMjI6MDAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6ICdXZWRuZXNkYXknLFxyXG4gICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgc3RhcnRUaW1lOiAnMDk6MDAnLFxyXG4gICAgZW5kVGltZTogJzIyOjAwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAnVGh1cnNkYXknLFxyXG4gICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgc3RhcnRUaW1lOiAnMDk6MDAnLFxyXG4gICAgZW5kVGltZTogJzIyOjAwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAnRnJpZGF5JyxcclxuICAgIGlzT3BlbjogdHJ1ZSxcclxuICAgIHN0YXJ0VGltZTogJzA5OjAwJyxcclxuICAgIGVuZFRpbWU6ICcyMzowMCdcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogJ1NhdHVyZGF5JyxcclxuICAgIGlzT3BlbjogdHJ1ZSxcclxuICAgIHN0YXJ0VGltZTogJzExOjAwJyxcclxuICAgIGVuZFRpbWU6ICcyMzowMCdcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogJ1N1bmRheScsXHJcbiAgICBpc09wZW46IHRydWUsXHJcbiAgICBzdGFydFRpbWU6ICcxMTowMCcsXHJcbiAgICBlbmRUaW1lOiAnMjE6MDAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6ICdNb25kYXknLFxyXG4gICAgaXNPcGVuOiBmYWxzZVxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlTY2hlZHVsZSA9ICgpID0+IHtcclxuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2lkZScpXHJcbiAgY29uc3Qgc2NoZWR1bGVTZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAnb3VyLXRpbWVzJylcclxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoNCcsICdvdXItaG91cnMnKVxyXG4gIHRpdGxlLmlubmVyVGV4dCA9ICdPdXIgdGltZXMnXHJcbiAgYXBwZW5kRWxlbWVudHMoYXNpZGUsIHNjaGVkdWxlU2VjdGlvbilcclxuICBjb25zdCBsaXN0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3VsJywgJ3NjaGVkdWxlLWxpc3QnKVxyXG4gIGFwcGVuZEVsZW1lbnRzKHNjaGVkdWxlU2VjdGlvbiwgdGl0bGUsIGxpc3QpXHJcbiAgcmVzdGF1cmFudFNjaGVkdWxlLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudCgnbGknLCAnZGF5JylcclxuICAgIGNvbnN0IG5hbWVEYXkgPSBjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsICdkYXktc3BhbicpXHJcbiAgICBjb25zdCB0aW1lID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCAndGltZS1zcGFuJylcclxuICAgIG5hbWVEYXkuaW5uZXJUZXh0ID0gYCR7ZGF5LmRheX06YFxyXG4gICAgYXBwZW5kRWxlbWVudHMobGlzdEVsZW1lbnQsIG5hbWVEYXksIHRpbWUpXHJcbiAgICBpZiAoIWRheS5pc09wZW4pIHtcclxuICAgICAgdGltZS5pbm5lclRleHQgPSAnQ2xvc2VkJ1xyXG4gICAgICBhcHBlbmRFbGVtZW50cyhsaXN0LCBsaXN0RWxlbWVudClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpbWUuaW5uZXJUZXh0ID0gYCR7ZGF5LnN0YXJ0VGltZX0gdG8gJHtkYXkuZW5kVGltZX1gXHJcbiAgICAgIGFwcGVuZEVsZW1lbnRzKGxpc3QsIGxpc3RFbGVtZW50KVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFwcGVuZEVsZW1lbnRzID0gKHBhcmVudE5vZGUsIC4uLmNoaWxkcmVuKSA9PiB7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAoZWxlbWVudCwgZWxlbWVudENsYXNzLCBpZCkgPT4ge1xyXG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpXHJcblxyXG4gIGlmIChlbGVtZW50Q2xhc3MpIHtcclxuICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50Q2xhc3MpXHJcbiAgfVxyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGRvbUVsZW1lbnQuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRvbUVsZW1lbnRcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZW1wdHlDb250ZW50ID0gKGNvbnRlbnQpID0+IHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwbHlOYXZpZ2F0aW9uIH0gZnJvbSAnLi4vZG9tRWxlbWVudHMvTmF2L25hdkJhcidcclxuaW1wb3J0IHsgZGlzcGxheUhvbWUgfSBmcm9tICcuLi9wYWdlcy9ob21lJ1xyXG5pbXBvcnQgeyBkaXNwbGF5Rm9ybSB9IGZyb20gJy4uL2RvbUVsZW1lbnRzL0Zvcm0vZm9ybSdcclxuaW1wb3J0IHsgZGlzcGxheVNjaGVkdWxlIH0gZnJvbSAnLi4vZG9tRWxlbWVudHMvU2NoZWR1bGVMaXN0L3NjaGVkdWxlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0UGFnZSA9ICgpID0+IHtcclxuICBhcHBseU5hdmlnYXRpb24oKVxyXG4gIGRpc3BsYXlIb21lKClcclxuICBkaXNwbGF5Rm9ybSgpXHJcbiAgZGlzcGxheVNjaGVkdWxlKClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWRkQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwZW5kRWxlbWVudHMgfSBmcm9tICcuLi9oZWxwZXJzL2FwcGVuZEVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlSHRtbEVsZW1lbnQnXHJcbmltcG9ydCB7IGVtcHR5Q29udGVudCB9IGZyb20gJy4uL2hlbHBlcnMvZW1wdHlDb250ZW50J1xyXG5pbXBvcnQgJy4vbWVudS5jc3MnXHJcblxyXG5jb25zdCBtZW51ID0gW1xyXG4gIHtcclxuICAgIHNlY3Rpb246ICdFbnRyZWVzJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogJ0NhZXNhciBTYWxhZCcsIHByaWNlOiAnJDguOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0JydXNjaGV0dGEnLCBwcmljZTogJyQ2Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdHYXJsaWMgQnJlYWQnLCBwcmljZTogJyQ0Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdTcGluYWNoIGFuZCBBcnRpY2hva2UgRGlwJywgcHJpY2U6ICckOS45OScgfSxcclxuICAgICAgeyBuYW1lOiAnTW96emFyZWxsYSBTdGlja3MnLCBwcmljZTogJyQ3Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdTaHJpbXAgQ29ja3RhaWwnLCBwcmljZTogJyQxMi45OScgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VjdGlvbjogJ01haW4gQ291cnNlcycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IG5hbWU6ICdTcGFnaGV0dGkgQm9sb2duZXNlJywgcHJpY2U6ICckMTIuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0dyaWxsZWQgU2FsbW9uJywgcHJpY2U6ICckMTYuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ0NoaWNrZW4gQWxmcmVkbycsIHByaWNlOiAnJDE0Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdGaWxldCBNaWdub24nLCBwcmljZTogJyQyNC45OScgfSxcclxuICAgICAgeyBuYW1lOiAnVmVnZXRhcmlhbiBQYXN0YScsIHByaWNlOiAnJDExLjk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdQb3JrIENob3Agd2l0aCBBcHBsZSBHbGF6ZScsIHByaWNlOiAnJDE4Ljk5JyB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZWN0aW9uOiAnRGVzc2VydHMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiAnQ2hvY29sYXRlIENha2UnLCBwcmljZTogJyQ3Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdDaGVlc2VjYWtlJywgcHJpY2U6ICckOC45OScgfSxcclxuICAgICAgeyBuYW1lOiAnVGlyYW1pc3UnLCBwcmljZTogJyQ5Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdLZXkgTGltZSBQaWUnLCBwcmljZTogJyQ2Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdBcHBsZSBQaWUnLCBwcmljZTogJyQ3LjQ5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdDaG9jb2xhdGUgTW91c3NlJywgcHJpY2U6ICckOC40OScgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VjdGlvbjogJ0RyaW5rcycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IG5hbWU6ICdTb2RhJywgcHJpY2U6ICckMi45OScgfSxcclxuICAgICAgeyBuYW1lOiAnSWNlZCBUZWEnLCBwcmljZTogJyQzLjQ5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdDb2ZmZWUnLCBwcmljZTogJyQzLjk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdNYXJnYXJpdGEnLCBwcmljZTogJyQ3Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdSZWQgV2luZScsIHByaWNlOiAnJDYuOTknIH0sXHJcbiAgICAgIHsgbmFtZTogJ1doaXRlIFdpbmUnLCBwcmljZTogJyQ2Ljk5JyB9LFxyXG4gICAgICB7IG5hbWU6ICdDcmFmdCBCZWVyJywgcHJpY2U6ICckNS45OScgfSxcclxuICAgICAgeyBuYW1lOiAnTW9qaXRvJywgcHJpY2U6ICckOC40OScgfSxcclxuICAgICAgeyBuYW1lOiAnTGVtb25hZGUnLCBwcmljZTogJyQzLjQ5JyB9XHJcbiAgICBdXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheU1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICBlbXB0eUNvbnRlbnQoY29udGVudClcclxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAncGFnZScsICdvdXItbWVudScpXHJcbiAgYXBwZW5kRWxlbWVudHMoY29udGVudCwgc2VjdGlvbilcclxuXHJcbiAgY29uc3Qgc2VjdGlvblRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJylcclxuICBzZWN0aW9uVGl0bGUuaW5uZXJUZXh0ID0gJ091ciBtZW51J1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ21lbnUtY29udGFpbmVyJylcclxuICBhcHBlbmRFbGVtZW50cyhzZWN0aW9uLCBzZWN0aW9uVGl0bGUsIG1lbnVDb250YWluZXIpXHJcblxyXG4gIG1lbnUuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5U2VjdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWN0aW9uJywgJ2Zvb2QtY2F0ZWdvcnknKVxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDMnLCAnZm9vZC10aXRsZScpXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBjYXRlZ29yeS5zZWN0aW9uXHJcbiAgICBjb25zdCBpdGVtTGlzdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCd1bCcsICdmb29kLWxpc3QnKVxyXG4gICAgYXBwZW5kRWxlbWVudHMobWVudUNvbnRhaW5lciwgY2F0ZWdvcnlTZWN0aW9uKVxyXG4gICAgYXBwZW5kRWxlbWVudHMoY2F0ZWdvcnlTZWN0aW9uLCB0aXRsZSwgaXRlbUxpc3QpXHJcbiAgICBjYXRlZ29yeS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2xpJywgJ2Zvb2QtaXRlbScpXHJcbiAgICAgIGNvbnN0IG5hbWVTcGFuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCAnZm9vZC1uYW1lJylcclxuICAgICAgY29uc3QgcHJpY2VTcGFuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCAnZm9vZC1wcmljZScpXHJcbiAgICAgIG5hbWVTcGFuLmlubmVyVGV4dCA9IGAke2l0ZW0ubmFtZX1gXHJcbiAgICAgIHByaWNlU3Bhbi5pbm5lclRleHQgPSBgJHtpdGVtLnByaWNlfWBcclxuICAgICAgYXBwZW5kRWxlbWVudHMoaXRlbUxpc3QsIGxpc3RJdGVtKVxyXG4gICAgICBhcHBlbmRFbGVtZW50cyhsaXN0SXRlbSwgbmFtZVNwYW4sIHByaWNlU3BhbilcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBhcHBlbmRFbGVtZW50cyB9IGZyb20gJy4uL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaGVscGVycy9jcmVhdGVIdG1sRWxlbWVudCdcclxuaW1wb3J0IHsgZW1wdHlDb250ZW50IH0gZnJvbSAnLi4vaGVscGVycy9lbXB0eUNvbnRlbnQnXHJcbmltcG9ydCBmaXJzdEltYWdlIGZyb20gJy4uL2Fzc2V0cy8xLnJlc3RhdXJhbnQtc3RvcnkuanBnJ1xyXG5pbXBvcnQgc2Vjb25kSW1hZ2UgZnJvbSAnLi4vYXNzZXRzLzIucmVzdGF1cmFudC1zdG9yeS5qcGVnJ1xyXG5pbXBvcnQgdGhpcmRJbWFnZSBmcm9tICcuLi9hc3NldHMvMy5yZXN0YXVyYW50LXN0b3J5LmpwZydcclxuaW1wb3J0IGZvdXJ0aEltYWdlIGZyb20gJy4uL2Fzc2V0cy80LnJlc3RhdXJhbnQtc3RvcnkuanBnJ1xyXG5pbXBvcnQgJy4vYWJvdXQuY3NzJ1xyXG5cclxuY29uc3QgcmVzdGF1cmFudFN0b3J5ID0ge1xyXG4gIGltYWdlOiBmaXJzdEltYWdlLFxyXG4gIHRleHQ6IFwiSW4gdGhlIHF1YWludCB5ZWFyIG9mIDE5OTUsIG91ciBjdWxpbmFyeSBqb3VybmV5IGVtYmFya2VkIG9uIGEgcmVtYXJrYWJsZSBhZHZlbnR1cmUuIEl0IGFsbCBzdGFydGVkIHdpdGggYSBncm91cCBvZiB2aXNpb25hcmllcyBmdWVsZWQgYnkgdGhlIGxvdmUgZm9yIGV4dHJhb3JkaW5hcnkgZm9vZC4gTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2Ygb3VyIGNoYXJtaW5nIHRvd24sIG91ciByZXN0YXVyYW50IHF1aWNrbHkgYmVjYW1lIGEgaGF2ZW4gZm9yIHRob3NlIHNlZWtpbmcgY3VsaW5hcnkgZGVsaWdodHMgYW5kIHdhcm0gY2FtYXJhZGVyaWUuIFRoZSBhaXIgd2FzIGZpbGxlZCB3aXRoIHRoZSBhcm9tYSBvZiByaWNoIGZsYXZvcnMgYW5kIHRoZSBsYXVnaHRlciBvZiBzYXRpc2ZpZWQgcGF0cm9ucy4gT3VyIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSwgaW5ub3ZhdGlvbiwgYW5kIGNvbW11bml0eSBoYXMgYmVlbiB0aGUgY29ybmVyc3RvbmUgb2Ygb3VyIHN1Y2Nlc3MuXFxuXFxuT3ZlciB0aGUgeWVhcnMsIHdlJ3ZlIGdyb3duIGFuZCBldm9sdmVkLCBleHBhbmRpbmcgb3VyIG1lbnUgYW5kIHJlZmluaW5nIG91ciBjdWxpbmFyeSB0ZWNobmlxdWVzLiBPdXIgY2hlZnMsIGluc3BpcmVkIGJ5IGJvdGggdHJhZGl0aW9uIGFuZCBpbm5vdmF0aW9uLCBjb250aW51b3VzbHkgc3RyaXZlIHRvIGNyZWF0ZSBkaXNoZXMgdGhhdCBjYXB0aXZhdGUgdGhlIHNlbnNlcyBhbmQgbGVhdmUgYSBsYXN0aW5nIGltcHJlc3Npb24gb24gZXZlcnkgZ3Vlc3QuXFxuXFxuVG9kYXksIG91ciByZXN0YXVyYW50IHN0YW5kcyBhcyBhIHRlc3RhbWVudCB0byB0aGUgZW5kdXJpbmcgc3Bpcml0IG9mIHBhc3Npb24gYW5kIGRlZGljYXRpb24uIFdlIGludml0ZSB5b3UgdG8gam9pbiB1cyBvbiBhIGpvdXJuZXkgdGhyb3VnaCB0aGUgYXJ0aXN0cnkgb2YgZmxhdm9ycywgd2hlcmUgZXZlcnkgbWVhbCB0ZWxscyBhIHN0b3J5IGFuZCBldmVyeSBkaW5pbmcgZXhwZXJpZW5jZSBpcyBhIGNlbGVicmF0aW9uIG9mIHRoZSBleHRyYW9yZGluYXJ5LlwiLFxyXG4gIGFsdDogJ291ciByZXN0YXVyYW50IGZyb20gaXRzIGh1bWJsZSBiZWdpbm5pbmdzIGluIDE5OTUnXHJcbn1cclxuXHJcbmNvbnN0IHJlc3RhdXJhbnRJbWFnZXMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IHNlY29uZEltYWdlLFxyXG4gICAgYWx0OiAnVHdvIGRpc2hlcyBwcmVzZW50ZWQgYnkgb25lIG9mIG91ciBjaGVmcydcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiB0aGlyZEltYWdlLFxyXG4gICAgYWx0OiAnQSByZXN0YXVyYW50IGJhciB3aXRoIHdvb2RlbiBjaGFpcnMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogZm91cnRoSW1hZ2UsXHJcbiAgICBhbHQ6ICdBIHBsYXRlIHdpdGggZnJlbmNoIGZyaWVzLCBzYWxhZCwgc29tZSBtZWF0IGJyb2NoZXR0ZXMgYW5kIHNvbWUgcmljZSdcclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5QWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICBlbXB0eUNvbnRlbnQoY29udGVudClcclxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NlY3Rpb24nLCAncGFnZScsICdhYm91dCcpXHJcbiAgYXBwZW5kRWxlbWVudHMoY29udGVudCwgc2VjdGlvbilcclxuXHJcbiAgY29uc3Qgc2VjdGlvblRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJylcclxuICBzZWN0aW9uVGl0bGUuaW5uZXJUZXh0ID0gJ0Fib3V0IHVzJ1xyXG4gIGNvbnN0IHN0b3J5Q29udGFpbmVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdzdG9yeS1jb250YWluZXInKVxyXG4gIGFwcGVuZEVsZW1lbnRzKHNlY3Rpb24sIHNlY3Rpb25UaXRsZSwgc3RvcnlDb250YWluZXIpXHJcblxyXG4gIGNvbnN0IGltYWdlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdzdG9yeS1pbWcnKVxyXG4gIGNvbnN0IHN0b3J5ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnc3RvcnktdGV4dCcpXHJcbiAgaW1hZ2Uuc3JjID0gcmVzdGF1cmFudFN0b3J5LmltYWdlXHJcbiAgaW1hZ2UuYWx0ID0gcmVzdGF1cmFudFN0b3J5LmFsdFxyXG4gIHN0b3J5LmlubmVyVGV4dCA9IHJlc3RhdXJhbnRTdG9yeS50ZXh0XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRzKHN0b3J5Q29udGFpbmVyLCBpbWFnZSwgc3RvcnkpXHJcblxyXG4gIGNvbnN0IGltYWdlc0NvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAncmVzdGF1cmFudC1pbWFnZXMtY29udGFpbmVyJylcclxuICBhcHBlbmRFbGVtZW50cyhzZWN0aW9uLCBpbWFnZXNDb250YWluZXIpXHJcbiAgcmVzdGF1cmFudEltYWdlcy5mb3JFYWNoKChwaWN0dXJlKSA9PiB7XHJcbiAgICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ3Jlc3RhdXJhbnQtaW1hZ2UnKVxyXG4gICAgcmVzdGF1cmFudEltYWdlLnNyYyA9IHBpY3R1cmUuaW1hZ2VcclxuICAgIHJlc3RhdXJhbnRJbWFnZS5hbHQgPSBwaWN0dXJlLmFsdFxyXG4gICAgYXBwZW5kRWxlbWVudHMoaW1hZ2VzQ29udGFpbmVyLCByZXN0YXVyYW50SW1hZ2UpXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBlbXB0eUNvbnRlbnQgfSBmcm9tICcuLi9oZWxwZXJzL2VtcHR5Q29udGVudCdcclxuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZUh0bWxFbGVtZW50J1xyXG5pbXBvcnQgeyBhcHBlbmRFbGVtZW50cyB9IGZyb20gJy4uL2hlbHBlcnMvYXBwZW5kRWxlbWVudHMnXHJcbmltcG9ydCAnLi9ob21lLmNzcydcclxuaW1wb3J0IHF1YWxpdHlGb29kSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3F1YWxpdHlGb29kLmpwZydcclxuaW1wb3J0IGRlbGl2ZXJ5SW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2RlbGl2ZXJ5LmpwZydcclxuaW1wb3J0IG9wZW5BbGxZZWFySW1hZ2UgZnJvbSAnLi4vYXNzZXRzL29wZW5BbGxZZWFyLmpwZydcclxuaW1wb3J0IGxvY2FsSW5ncmVkaWVudHNJbWFnZSBmcm9tICcuLi9hc3NldHMvbG9jYWxGb29kLmpwZydcclxuXHJcbmNvbnN0IGNhcmRzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnUXVhbGl0eSBmb29kJyxcclxuICAgIGltYWdlOiBxdWFsaXR5Rm9vZEltYWdlLFxyXG4gICAgdGV4dDogJ0F0IG91ciByZXN0YXVyYW50LCB3ZSB0YWtlIHByaWRlIGluIHNlcnZpbmcgeW91IHRoZSBmaW5lc3QgcXVhbGl0eSBmb29kLiBPdXIgY2hlZnMgbWV0aWN1bG91c2x5IHNlbGVjdCB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMgdG8gY3JlYXRlIG1vdXRod2F0ZXJpbmcgZGlzaGVzIHRoYXQgc2F0aXNmeSB5b3VyIHRhc3RlIGJ1ZHMuIEVhY2ggbWVhbCBpcyBhIGN1bGluYXJ5IGV4cGVyaWVuY2UsIGNyYWZ0ZWQgd2l0aCBwYXNzaW9uIGFuZCBkZWRpY2F0aW9uIHRvIGVuc3VyZSB5b3UgZW5qb3kgdGhlIHZlcnkgYmVzdC4nLFxyXG4gICAgYWx0OiAnRGVsaWNpb3VzIHF1YWxpdHkgZm9vZCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNhbid0IGdldCB0byB1cz9cIixcclxuICAgIGltYWdlOiBkZWxpdmVyeUltYWdlLFxyXG4gICAgdGV4dDogJ0V4cGVyaWVuY2UgdGhlIGNvbnZlbmllbmNlIG9mIGZyZWUgZGVsaXZlcnkgd2hlbiB5b3Ugb3JkZXIgZnJvbSB1cy4gV2UgYmVsaWV2ZSBpbiBtYWtpbmcgeW91ciBkaW5pbmcgZXhwZXJpZW5jZSBlZmZvcnRsZXNzIGFuZCBlbmpveWFibGUuIE91ciBwcm9tcHQgYW5kIHJlbGlhYmxlIGRlbGl2ZXJ5IHNlcnZpY2UgZW5zdXJlcyB0aGF0IHlvdXIgZmF2b3JpdGUgZGlzaGVzIGFyZSBkZWxpdmVyZWQgcmlnaHQgdG8geW91ciBkb29yc3RlcCwgYWxsb3dpbmcgeW91IHRvIHNhdm9yIG91ciBkZWxlY3RhYmxlIG9mZmVyaW5ncyBpbiB0aGUgY29tZm9ydCBvZiB5b3VyIGhvbWUuJyxcclxuICAgIGFsdDogJ0NvbnZlbmllbnQgZGVsaXZlcnkgc2VydmljZSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnT3BlbiBhbGwgeWVhcicsXHJcbiAgICBpbWFnZTogb3BlbkFsbFllYXJJbWFnZSxcclxuICAgIHRleHQ6IFwiV2UgYXJlIGNvbW1pdHRlZCB0byBzZXJ2aW5nIHlvdSB5ZWFyLXJvdW5kLCBvZmZlcmluZyBhIGNvbnNpc3RlbnQgYW5kIHdlbGNvbWluZyBkaW5pbmcgZXhwZXJpZW5jZS4gV2hldGhlciBpdCdzIGEgc3VubnkgZGF5LCBhIHdpbnRlciBldmVuaW5nLCBvciBhbnkgZGF5IGluIGJldHdlZW4sIG91ciBkb29ycyBhcmUgb3BlbiB0byB3ZWxjb21lIHlvdS4gT3VyIGRlZGljYXRpb24gdG8gc3RheWluZyBvcGVuIGVuc3VyZXMgdGhhdCB5b3UgY2FuIGVuam95IG91ciBleGNlcHRpb25hbCBjdWlzaW5lIHdoZW5ldmVyIHRoZSBjcmF2aW5nIHN0cmlrZXMuXCIsXHJcbiAgICBhbHQ6ICdPcGVuIGFsbCB5ZWFyLXJvdW5kJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMb2NhbCBpbmdyZWRpZW50cycsXHJcbiAgICBpbWFnZTogbG9jYWxJbmdyZWRpZW50c0ltYWdlLFxyXG4gICAgdGV4dDogJ0VtYnJhY2UgdGhlIGZsYXZvcnMgb2Ygb3VyIGNvbW11bml0eSB3aXRoIG91ciBjb21taXRtZW50IHRvIHVzaW5nIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cy4gV2UgYmVsaWV2ZSBpbiBzdXBwb3J0aW5nIGxvY2FsIGZhcm1lcnMgYW5kIHByb2R1Y2VycywgZW5zdXJpbmcgdGhhdCBvdXIgZGlzaGVzIGFyZSBub3Qgb25seSBkZWxpY2lvdXMgYnV0IGFsc28gY29udHJpYnV0ZSB0byB0aGUgc3VzdGFpbmFiaWxpdHkgb2YgdGhlIGNvbW11bml0eS4gVGFzdGUgdGhlIGZyZXNobmVzcyBhbmQgcXVhbGl0eSB0aGF0IGNvbWVzIGZyb20gaW5ncmVkaWVudHMgaGFydmVzdGVkIHJpZ2h0IGhlcmUgaW4gb3VyIHJlZ2lvbi4nLFxyXG4gICAgYWx0OiAnTG9jYWxseSBzb3VyY2VkIGluZ3JlZGllbnRzJ1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgZW1wdHlDb250ZW50KGNvbnRlbnQpXHJcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWN0aW9uJywgJ3BhZ2UnLCAnaG9tZScpXHJcbiAgYXBwZW5kRWxlbWVudHMoY29udGVudCwgc2VjdGlvbilcclxuXHJcbiAgY29uc3Qgc2VjdGlvblRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJylcclxuICBzZWN0aW9uVGl0bGUuaW5uZXJUZXh0ID0gJ1doeSB1cz8nXHJcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY2FyZC1jb250YWluZXInKVxyXG4gIGFwcGVuZEVsZW1lbnRzKHNlY3Rpb24sIHNlY3Rpb25UaXRsZSwgY2FyZENvbnRhaW5lcilcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgY29uc3QgYWxnbyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdhcnRpY2xlJywgJ2NhcmQnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDMnLCAnY2FyZC10aXRsZScpXHJcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnY2FyZC1pbWFnZScpXHJcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY2FyZC10ZXh0JylcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IGNhcmQudGl0bGVcclxuICAgIGltYWdlLnNyYyA9IGNhcmQuaW1hZ2VcclxuICAgIGltYWdlLmFsdCA9IGNhcmQuYWx0XHJcbiAgICB0ZXh0LmlubmVyVGV4dCA9IGNhcmQudGV4dFxyXG4gICAgYXBwZW5kRWxlbWVudHMoY2FyZENvbnRhaW5lciwgYWxnbylcclxuICAgIGFwcGVuZEVsZW1lbnRzKGFsZ28sIHRpdGxlLCBpbWFnZSwgdGV4dClcclxuICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCB7IHN0YXJ0UGFnZSB9IGZyb20gJy4vaGVscGVycy9zdGFydFBhZ2UnXHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJ1xyXG5cclxuc3RhcnRQYWdlKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9