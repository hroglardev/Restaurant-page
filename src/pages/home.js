import { emptyContent } from '../helpers/emptyContent'
import { createHtmlElement } from '../helpers/createHtmlElement'
import { appendElements } from '../helpers/appendElements'

const cards = [
  {
    title: 'Quality food',
    image: '',
    text: 'At our restaurant, we take pride in serving you the finest quality food. Our chefs meticulously select the freshest ingredients to create mouthwatering dishes that satisfy your taste buds. Each meal is a culinary experience, crafted with passion and dedication to ensure you enjoy the very best.'
  },
  {
    title: "Can't get to the restaurant?",
    image: '',
    text: 'Experience the convenience of free delivery when you order from us. We believe in making your dining experience effortless and enjoyable. Our prompt and reliable delivery service ensures that your favorite dishes are delivered right to your doorstep, allowing you to savor our delectable offerings in the comfort of your home.'
  },
  {
    title: 'Open all year',
    image: '',
    text: "We are committed to serving you year-round, offering a consistent and welcoming dining experience. Whether it's a sunny day, a winter evening, or any day in between, our doors are open to welcome you. Our dedication to staying open ensures that you can enjoy our exceptional cuisine whenever the craving strikes."
  },
  {
    title: 'Locally sourced ingredients',
    image: '',
    text: 'Embrace the flavors of our community with our commitment to using locally sourced ingredients. We believe in supporting local farmers and producers, ensuring that our dishes are not only delicious but also contribute to the sustainability of the community. Taste the freshness and quality that comes from ingredients harvested right here in our region.'
  }
]

export const displayHome = () => {
  const content = document.querySelector('#content')
  emptyContent(content)
  const section = createHtmlElement('section')
  appendElements(content, section)

  const sectionTitle = createHtmlElement('h2')
  sectionTitle.innerText = 'Why us?'
  const cardContainer = createHtmlElement('div', 'card-container')
  appendElements(section, sectionTitle, cardContainer)

  cards.forEach((card) => {
    const title = createHtmlElement('h3', 'card-title')
    const image = createHtmlElement('img', 'card-image')
    const text = createHtmlElement('p', 'card-text')
    title.innerText = card.title
    image.src = card.image
    text.innerText = card.text
    appendElements(cardContainer, title, image, text)
  })
}
