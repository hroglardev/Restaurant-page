export const createHtmlElement = (element, elementClasss, id) => {
  const domElement = document.createElement(element)

  if (elementClasss) {
    domElement.classList.add(elementClasss)
  }

  if (id) {
    domElement.id = id
  }
}
