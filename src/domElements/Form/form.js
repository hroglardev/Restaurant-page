import { appendElements } from '../../helpers/appendElements'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { updateError, activateButton } from './validation'
import './form.css'

const createFormSection = (labelText, placeHolder, inputId, parentNode) => {
  const label = createHtmlElement('label', 'form-label')
  const input = createHtmlElement('input', 'form-input', inputId)
  const error = createHtmlElement('p', 'error-message')

  label.innerText = labelText
  label.setAttribute('for', inputId)

  input.setAttribute('placeholder', placeHolder)
  input.name = inputId
  input.addEventListener('input', () => updateError(error, input))

  appendElements(parentNode, label, input, error)
}

const thankYouMessage = (form, event, button) => {
  event.preventDefault()
  const message = createHtmlElement('p', 'thank-you')
  message.innerText = 'Thank you. We will contact you soon'
  appendElements(form, message)
  form.reset()
  button.setAttribute('disabled', true)
  setTimeout(() => {
    message.remove()
  }, 3000)
}

export const displayForm = () => {
  const aside = document.querySelector('#aside')
  const contactSection = createHtmlElement('section', 'contact-us')
  appendElements(aside, contactSection)
  const form = createHtmlElement('form', 'contact-form')
  const fieldSet = createHtmlElement('fieldset', 'input-wrapper')
  const legend = createHtmlElement('legend', 'form-title')
  legend.innerText = 'Contact us'
  form.setAttribute('novalidate', true)
  appendElements(contactSection, form)
  appendElements(form, fieldSet)
  appendElements(fieldSet, legend)

  const firstDiv = createHtmlElement('div', 'form-section')
  const secondDiv = createHtmlElement('div', 'form-section')
  const thirdDiv = createHtmlElement('div', 'form-section')
  appendElements(fieldSet, firstDiv, secondDiv, thirdDiv)
  createFormSection('Name:', 'Lucas', 'name', firstDiv)
  createFormSection('Email:', 'lucas.cubile@yahoo.com', 'email', secondDiv)
  createFormSection('Phone:', '+54911685878', 'phone', thirdDiv)

  const submitButton = createHtmlElement('button', 'submit')
  submitButton.type = 'submit'
  submitButton.innerText = 'Send'
  submitButton.setAttribute('disabled', true)
  appendElements(form, submitButton)

  form.addEventListener('submit', (event) => thankYouMessage(form, event, submitButton))
  form.addEventListener('input', () => activateButton(submitButton))
}
