import { createHtmlElement } from '../helpers/createHtmlElement'
import { appendElements } from '../helpers/appendElements'
import './home.css'
import qualityFoodImage from '../assets/qualityFood.jpg'
import deliveryImage from '../assets/delivery.jpg'
import openAllYearImage from '../assets/openAllYear.jpg'
import localIngredientsImage from '../assets/localFood.jpg'
import { setPage } from '../helpers/setPage'
import { createImage } from '../helpers/createImage'

const cards = [
  {
    title: 'Quality food',
    image: qualityFoodImage,
    text: 'At our restaurant, we take pride in serving you the finest quality food. Our chefs meticulously select the freshest ingredients to create mouthwatering dishes that satisfy your taste buds. Each meal is a culinary experience, crafted with passion and dedication to ensure you enjoy the very best.',
    alt: 'Delicious quality food'
  },
  {
    title: "Can't get to us?",
    image: deliveryImage,
    text: 'Experience the convenience of free delivery when you order from us. We believe in making your dining experience effortless and enjoyable. Our prompt and reliable delivery service ensures that your favorite dishes are delivered right to your doorstep, allowing you to savor our delectable offerings in the comfort of your home.',
    alt: 'Convenient delivery service'
  },
  {
    title: 'Open all year',
    image: openAllYearImage,
    text: "We are committed to serving you year-round, offering a consistent and welcoming dining experience. Whether it's a sunny day, a winter evening, or any day in between, our doors are open to welcome you. Our dedication to staying open ensures that you can enjoy our exceptional cuisine whenever the craving strikes.",
    alt: 'Open all year-round'
  },
  {
    title: 'Local ingredients',
    image: localIngredientsImage,
    text: 'Embrace the flavors of our community with our commitment to using locally sourced ingredients. We believe in supporting local farmers and producers, ensuring that our dishes are not only delicious but also contribute to the sustainability of the community. Taste the freshness and quality that comes from ingredients harvested right here in our region.',
    alt: 'Locally sourced ingredients'
  }
]

export const displayHome = () => {
  const pageSection = setPage('home', 'Why us?', 'card-container')

  cards.forEach((card) => {
    const homeCard = createHtmlElement('article', 'card')
    const title = createHtmlElement('h3', 'card-title', '', card.title)
    const image = createImage(card.image, card.alt, 'card-image')
    const text = createHtmlElement('p', 'card-text', '', card.text)

    appendElements(pageSection.container, homeCard)
    appendElements(homeCard, title, image, text)
  })
}
