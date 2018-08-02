
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

// Throw 404 error if the page was not found.
// https://github.com/zeit/next.js/issues/4451
export const notFoundError = () => {
  const err = new Error( 'Not found error' )
  err.code = 'ENOENT' // Triggers 404
  return err
}