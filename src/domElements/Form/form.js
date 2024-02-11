import { appendElements } from '../../helpers/appendElements'
import { createHtmlElement } from '../../helpers/createHtmlElement'

// import { validate } from './validation'

const createFormSection = (labelText, placeHolder, inputId, parentNode) => {
  const label = createHtmlElement('label', 'form-label')
  const input = createHtmlElement('input', 'form-input', inputId)
  const error = createHtmlElement('p', 'error-message')

  label.innerText = labelText
  label.setAttribute('for', inputId)

  input.setAttribute('placeholder', placeHolder)
  input.name = inputId
  // input.addEventListener('change', validate(input))

  // error.innerText = validate(input)
  appendElements(parentNode, label, input, error)
}

const thankYouMessage = (form, event) => {
  event.preventDefault()
  const message = createHtmlElement('p', 'thank-you')
  message.innerText = 'Thank you. We will contact you soon'
  appendElements(form, message)
  setTimeout(() => {
    message.remove()
  }, 3000)
}

export const displayForm = () => {
  const aside = document.querySelector('#aside')
  const form = createHtmlElement('form')
  appendElements(aside, form)

  createFormSection('Name:', 'Lucas', 'name', form)
  createFormSection('Email:', 'lucas.cubile@yahoo.com', 'email', form)
  createFormSection('Phone:', '+54911685878', 'phone', form)

  const inputs = [...document.querySelectorAll('.form-input')]
  const submitButton = createHtmlElement('button', 'submit')
  submitButton.type = 'submit'
  submitButton.innerText = 'Send'
  submitButton.setAttribute('disabled', true)
  appendElements(form, submitButton)

  form.addEventListener('submit', (event) => thankYouMessage(form, event))
}
