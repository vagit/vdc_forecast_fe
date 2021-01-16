import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../../shared/utility"

const initialState = {
  loading: null,
  forecastDays: {
    consolidated_weather: [],
  },
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FORECAST_IS_LOADING:
      return updateObject(state, {
        loading: action.loading,
        forecastDays: {},
      })
    case actionTypes.GET_FORECAST_HAS_ERROR:
      return updateObject(state, {})
    case actionTypes.GET_FORECAST_SUCCESS:
      return updateObject(state, {
        loading: false,
        forecastDays: action.forecastDays,
      })
    default:
      return state
  }
}

export default reducers
