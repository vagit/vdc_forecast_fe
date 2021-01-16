import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../../shared/utility"

const initialState = {
  error: null,
  errorMsg: "",
  loading: null,
  citySuggestion: [],
  showCitySuggestionFlag: null,
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CITY_START:
      return updateObject(state, {
        loading: action.loading,
        showCitySuggestionFlag: true,
      })
    case actionTypes.LOAD_CITY_SUCCESS:
      return updateObject(state, {
        citySuggestion: action.city,
        loading: false,
        error: false,
        errorMsg: action.city.length > 0 ? "" : "No results found",
      })
    case actionTypes.LOAD_CITY_FAILED:
      return updateObject(state, {
        error: action.error,
        errorMsg: "No results found",
      })
    case actionTypes.SHOW_CITY_SUGGESTION:
      return updateObject(state, {
        showCitySuggestionFlag: action.showCitySuggestionFlag,
      })
    case actionTypes.CLEAR_CITY_SUGGESTION:
      return updateObject(state, {
        showCitySuggestionFlag: false,
        citySuggestion: [],
      })
    default:
      return state
  }
}

export default reducers
