import { appendElements } from '../helpers/appendElements'
import { createHtmlElement } from '../helpers/createHtmlElement'
import { setPage } from '../helpers/setPage'

import './menu.css'

const menu = [
  {
    section: 'Entrees',
    items: [
      { name: 'Caesar Salad', price: '$8.99' },
      { name: 'Bruschetta', price: '$6.99' },
      { name: 'Garlic Bread', price: '$4.99' },
      { name: 'Spinach and Artichoke Dip', price: '$9.99' },
      { name: 'Mozzarella Sticks', price: '$7.99' },
      { name: 'Shrimp Cocktail', price: '$12.99' }
    ]
  },
  {
    section: 'Main Courses',
    items: [
      { name: 'Spaghetti Bolognese', price: '$12.99' },
      { name: 'Grilled Salmon', price: '$16.99' },
      { name: 'Chicken Alfredo', price: '$14.99' },
      { name: 'Filet Mignon', price: '$24.99' },
      { name: 'Vegetarian Pasta', price: '$11.99' },
      { name: 'Pork Chop with Apple Glaze', price: '$18.99' }
    ]
  },
  {
    section: 'Desserts',
    items: [
      { name: 'Chocolate Cake', price: '$7.99' },
      { name: 'Cheesecake', price: '$8.99' },
      { name: 'Tiramisu', price: '$9.99' },
      { name: 'Key Lime Pie', price: '$6.99' },
      { name: 'Apple Pie', price: '$7.49' },
      { name: 'Chocolate Mousse', price: '$8.49' }
    ]
  },
  {
    section: 'Drinks',
    items: [
      { name: 'Soda', price: '$2.99' },
      { name: 'Iced Tea', price: '$3.49' },
      { name: 'Coffee', price: '$3.99' },
      { name: 'Margarita', price: '$7.99' },
      { name: 'Red Wine', price: '$6.99' },
      { name: 'White Wine', price: '$6.99' },
      { name: 'Craft Beer', price: '$5.99' },
      { name: 'Mojito', price: '$8.49' },
      { name: 'Lemonade', price: '$3.49' }
    ]
  }
]

export const displayMenu = () => {
  const pageSection = setPage('our-menu', 'Our menu', 'menu-container')

  menu.forEach((category) => {
    const categorySection = createHtmlElement('section', 'food-category')
    const title = createHtmlElement('h3', 'food-title', '', category.section)
    const itemList = createHtmlElement('ul', 'food-list')
    appendElements(pageSection.container, categorySection)
    appendElements(categorySection, title, itemList)
    category.items.forEach((item) => {
      const listItem = createHtmlElement('li', 'food-item')
      const nameSpan = createHtmlElement('span', 'food-name', '', item.name)
      const priceSpan = createHtmlElement('span', 'food-price', '', item.price)

      appendElements(itemList, listItem)
      appendElements(listItem, nameSpan, priceSpan)
    })
  })
}
