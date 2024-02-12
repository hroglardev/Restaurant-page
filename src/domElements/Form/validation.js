import { addClass, removeClass } from '../../helpers/toggleClass'

const PHONE = /^\+\d{9,}$/
const EMAIL = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/

export const validate = (input) => {
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

export const updateError = (errorElement, input) => {
  errorElement.innerText = validate(input)
  if (errorElement.innerText !== '') {
    addClass(errorElement, 'has-error')
    addClass(input, 'input-error')
  } else {
    removeClass(errorElement, 'has-error')
    removeClass(input, 'input-error')
  }
}

export const activateButton = (button) => {
  const inputs = [...document.querySelectorAll('.form-input')]
  let isValid = inputs.every((inputElement) => !inputElement.classList.contains('input-error') && inputElement.value !== '')
  if (isValid) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', true)
  }
}
