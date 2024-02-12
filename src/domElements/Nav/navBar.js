import { displayMenu } from '../../pages/Menu'
import { displayAbout } from '../../pages/about'
import { displayHome } from '../../pages/home'

export const applyNavigation = () => {
  const homeButton = document.querySelector('#nav-home')
  const menuButton = document.querySelector('#nav-menu')
  const aboutButton = document.querySelector('#nav-about')

  homeButton.addEventListener('click', displayHome)
  menuButton.addEventListener('click', displayMenu)
  aboutButton.addEventListener('click', displayAbout)
}
