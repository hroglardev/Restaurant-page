import { appendElements } from '../helpers/appendElements'
import { createHtmlElement } from '../helpers/createHtmlElement'
import { emptyContent } from '../helpers/emptyContent'
import firstImage from '../assets/1.restaurant-story.jpg'
import secondImage from '../assets/2.restaurant-story.jpeg'
import thirdImage from '../assets/3.restaurant-story.jpg'
import fourthImage from '../assets/4.restaurant-story.jpg'
import './about.css'

const restaurantStory = {
  image: firstImage,
  text: "In the quaint year of 1995, our culinary journey embarked on a remarkable adventure. It all started with a group of visionaries fueled by the love for extraordinary food. Nestled in the heart of our charming town, our restaurant quickly became a haven for those seeking culinary delights and warm camaraderie. The air was filled with the aroma of rich flavors and the laughter of satisfied patrons. Our commitment to quality, innovation, and community has been the cornerstone of our success.\n\nOver the years, we've grown and evolved, expanding our menu and refining our culinary techniques. Our chefs, inspired by both tradition and innovation, continuously strive to create dishes that captivate the senses and leave a lasting impression on every guest.\n\nToday, our restaurant stands as a testament to the enduring spirit of passion and dedication. We invite you to join us on a journey through the artistry of flavors, where every meal tells a story and every dining experience is a celebration of the extraordinary.",
  alt: 'our restaurant from its humble beginnings in 1995'
}

const restaurantImages = [
  {
    image: secondImage,
    alt: 'Two dishes presented by one of our chefs'
  },
  {
    image: thirdImage,
    alt: 'A restaurant bar with wooden chairs'
  },
  {
    image: fourthImage,
    alt: 'A plate with french fries, salad, some meat brochettes and some rice'
  }
]

export const displayAbout = () => {
  const content = document.querySelector('#content')
  emptyContent(content)
  const section = createHtmlElement('section', 'page', 'about')
  appendElements(content, section)

  const sectionTitle = createHtmlElement('h2')
  sectionTitle.innerText = 'About us'
  const storyContainer = createHtmlElement('div', 'story-container')
  appendElements(section, sectionTitle, storyContainer)

  const image = createHtmlElement('img', 'story-img')
  const story = createHtmlElement('p', 'story-text')
  image.src = restaurantStory.image
  image.alt = restaurantStory.alt
  story.innerText = restaurantStory.text

  appendElements(storyContainer, image, story)

  const imagesContainer = createHtmlElement('div', 'restaurant-images-container')
  appendElements(section, imagesContainer)
  restaurantImages.forEach((picture) => {
    const restaurantImage = createHtmlElement('img', 'restaurant-image')
    restaurantImage.src = picture.image
    restaurantImage.alt = picture.alt
    appendElements(imagesContainer, restaurantImage)
  })
}
