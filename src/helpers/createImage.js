import { createHtmlElement } from './createHtmlElement'

export const createImage = (src, alt, className) => {
  const image = createHtmlElement('img', className)
  image.src = src
  image.alt = alt

  return image
}
