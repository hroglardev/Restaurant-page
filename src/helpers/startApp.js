import { applyNavigation } from '../domElements/Nav/navBar'
import { displayHome } from '../pages/home'
import { displayForm } from '../domElements/Form/form'
import { displaySchedule } from '../domElements/ScheduleList/schedule'

export const startApp = () => {
  applyNavigation()
  displayHome()
  displayForm()
  displaySchedule()
}
