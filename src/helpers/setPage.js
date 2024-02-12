import { appendElements } from './appendElements'
import { createHtmlElement } from './createHtmlElement'
import { emptyContent } from './emptyContent'

export const setPage = (sectionId, sectionTitleText, containerClass) => {
  const content = document.querySelector('#content')
  emptyContent(content)
  const section = createHtmlElement('section', 'page', sectionId)
  appendElements(content, section)

  const sectionTitle = createHtmlElement('h2', '', '', sectionTitleText)
  const container = createHtmlElement('div', containerClass)
  appendElements(section, sectionTitle, container)

  return { section, container }
}
