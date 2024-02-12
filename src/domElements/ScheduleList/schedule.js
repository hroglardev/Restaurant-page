import { appendElements } from '../../helpers/appendElements'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import './schedule.css'

const restaurantSchedule = [
  {
    day: 'Tuesday',
    isOpen: true,
    startTime: '09:00',
    endTime: '22:00'
  },
  {
    day: 'Wednesday',
    isOpen: true,
    startTime: '09:00',
    endTime: '22:00'
  },
  {
    day: 'Thursday',
    isOpen: true,
    startTime: '09:00',
    endTime: '22:00'
  },
  {
    day: 'Friday',
    isOpen: true,
    startTime: '09:00',
    endTime: '23:00'
  },
  {
    day: 'Saturday',
    isOpen: true,
    startTime: '11:00',
    endTime: '23:00'
  },
  {
    day: 'Sunday',
    isOpen: true,
    startTime: '11:00',
    endTime: '21:00'
  },
  {
    day: 'Monday',
    isOpen: false
  }
]

export const displaySchedule = () => {
  const aside = document.querySelector('#aside')
  const scheduleSection = createHtmlElement('section', 'our-times')
  const title = createHtmlElement('h4', 'our-hours')
  title.innerText = 'Our times'
  appendElements(aside, scheduleSection)
  const list = createHtmlElement('ul', 'schedule-list')
  appendElements(scheduleSection, title, list)
  restaurantSchedule.forEach((day) => {
    const listElement = createHtmlElement('li', 'day')
    const nameDay = createHtmlElement('span', 'day-span')
    const time = createHtmlElement('span', 'time-span')
    nameDay.innerText = `${day.day}:`
    appendElements(listElement, nameDay, time)
    if (!day.isOpen) {
      time.innerText = 'Closed'
      appendElements(list, listElement)
    } else {
      time.innerText = `${day.startTime} to ${day.endTime}`
      appendElements(list, listElement)
    }
  })
}
