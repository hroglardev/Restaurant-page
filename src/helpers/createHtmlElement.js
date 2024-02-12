export const createHtmlElement = (element, elementClass = '', id = '', text = '') => {
  const domElement = document.createElement(element)

  if (elementClass) {
    domElement.classList.add(elementClass)
  }

  if (id) {
    domElement.id = id
  }

  if (text) {
    domElement.innerText = text
  }

  return domElement
}
