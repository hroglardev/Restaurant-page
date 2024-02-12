export const createHtmlElement = (element, elementClass, id) => {
  const domElement = document.createElement(element)

  if (elementClass) {
    domElement.classList.add(elementClass)
  }

  if (id) {
    domElement.id = id
  }

  return domElement
}
