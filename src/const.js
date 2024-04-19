/**
 * This file includes all the constant texts.
 */

export const SEARCHBAR_PLACEHOLDER = 'Please type your city'
export const WEATHER_API_MESSAGE_MAP = {
  '1003': 'It\'s not you but us. Something went wrong please try later.',
  '1005': 'We could not retirive data. Please try with another location.',
  '1006': 'We could not find the location that you entered, please try again.',
  'ERR_BAD_REQUEST': 'We cannot process at a moment.'
} 

export const PAGE_NOT_FOUND = 'The page is not found. Please try again.'
export const GEO_LOCATION_DISABLED = 'We need your location permission to use this page, Please turn on the location service and refresh the page.'
export const GEO_LOCATION_NOT_AVAILABE = 'It looks like your device doesn\'t have location service. You can still search by city.' 

export const LOADING_MESSAGE = 'Loading new weather information, plase wait...'

export const SEARCH_CTA_LABEL = {
  loading: 'Loading...',
  default: 'Lookup'
}
export const GEO_LOCATION_LABEL = 'Use Current Location'

// Common Label for weahter 
export const WEATHER_LABELS = {
  c: '°C',
  f: '°F',
  high: 'Hi',
  low: 'Lo'
}
// Weather label for current weather
export const CURRENT_WEATHER_LABELS = {
  labelTop: 'Humidity',
  labelBottom:'Wind Speed'
}

