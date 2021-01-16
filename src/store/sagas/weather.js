import axios from "../../axios-forecast"
import * as actionTypes from "../actions/actionTypes"
import { put, takeEvery, all } from "redux-saga/effects"

export function* fetchCityList({ keyword }) {
  try {
    yield put({
      type: actionTypes.LOAD_CITY_START,
      loading: true,
    })
    const endpoint = `location/search/?query=${keyword}`
    const response = yield axios.get(endpoint)
    yield put({ type: actionTypes.LOAD_CITY_SUCCESS, city: response.data })
  } catch (error) {
    yield put({
      type: actionTypes.LOAD_CITY_FAILED,
      error: true,
    })
  }
}

export function* fetchWeather5Days({ woeid }) {
  try {
    yield put({ type: actionTypes.GET_FORECAST_IS_LOADING, loading: true })
    const endpoint = `/location/${woeid}/`
    const response = yield axios.get(endpoint)
    yield put({
      type: actionTypes.GET_FORECAST_SUCCESS,
      forecastDays: response.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export function* loadCity() {
  yield takeEvery(actionTypes.LOAD_CITY, fetchCityList)
}

export function* loadWeather() {
  yield takeEvery(actionTypes.LOAD_WEATHER, fetchWeather5Days)
}

export default function* weatherSaga() {
  yield all([loadCity(), loadWeather()])
}
