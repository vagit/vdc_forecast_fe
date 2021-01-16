import * as actionTypes from './actionTypes'
import axios from '../../axios-forecast'

export const get5DaysByWoeidHasError = (bool) => {
  return {
    type: actionTypes.GET_FORECAST_HAS_ERROR,
    error: bool
  }
}

export const get5DaysByWoeidStart = (bool) => {
  return {
    type: actionTypes.GET_FORECAST_IS_LOADING,
    loading: bool
  }
}

export const get5DaysByWoeidSuccess = (data) => {
  return {
    type: actionTypes.GET_FORECAST_SUCCESS,
    forecastDays: data
  }
}

export const loadWeather = (woeid) => ({
  type: actionTypes.LOAD_WEATHER,
  woeid: woeid
})
