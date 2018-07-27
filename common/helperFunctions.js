
import moment from 'moment'

export const remCalc = (pixels) => {
  return `${pixels / 16}rem`
}

/*
 * Calculates the difference between start date 
 * and end date with momentjs
 */ 
export const daysLeft = (startDay, endDay) => {
  const endDate = moment(endDay, 'YYYY-MM-DD')
  const now = moment(startDay, 'YYYY-MM-DD')
  return now.diff(endDate, 'days') * -1
}