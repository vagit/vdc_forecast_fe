import * as actionTypes from "./actionTypes"

export const loadCityPending = (bool) => ({
  type: actionTypes.LOAD_CITY_START,
  loading: bool,
})

export const loadCityError = (bool) => ({
  type: actionTypes.LOAD_CITY_FAILED,
  error: bool,
})

export const loadCitySuccess = (city) => ({
  type: actionTypes.LOAD_CITY_SUCCESS,
  city: city,
})

export const loadCity = (keyword) => ({
  type: actionTypes.LOAD_CITY,
  keyword: keyword,
})

export const showCitySuggestion = (showBool) => ({
  type: actionTypes.SHOW_CITY_SUGGESTION,
  showCitySuggestionFlag: showBool,
})

export const clearCitySuggestion = () => ({
  type: actionTypes.CLEAR_CITY_SUGGESTION,
})
