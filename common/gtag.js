import { isBrowser } from './helperFunctions'

export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

const canPushToAnalytics = () => {
  return isBrowser && GA_TRACKING_ID && window.gtag
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const triggerPageview = ( url ) => {
  if ( canPushToAnalytics()) {
    window.gtag( 'config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const triggerEvent = ({ action, category, label, value }) => {
  if ( canPushToAnalytics()) {
    window.gtag( 'event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
