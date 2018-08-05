
import moment from 'moment'
import remark from 'remark'
import strip from 'strip-markdown'


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
  const err = new Error('Not found error')
  err.code = 'ENOENT' // Triggers 404
  return err
}

/*
 * Strip html from markdown and return string
 */
export const stripMarkdown = (markdownString = '') => {
  let resultString = ''
  remark()
    .use(strip)
    .process(markdownString, function (err, result) {
      if (err) throw err
      resultString = String(result)
    })
  return resultString
}

/**
 * Suffles an array into a random order.
 * @param {Array} arr 
 */
export const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);