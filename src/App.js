// import logo from './logo.svg';
import React from "react"
import PropTypes from "prop-types"
import ForeCastGroup from "components/ForeCastGroup/ForeCastGroup"
import SearchInput from "components/SearchInput/SearchInput"
import { connect } from "react-redux"
import "./App.css"

// const Error = () => (<div>has error</div>)

function App({ forecastDays, loading }) {
  let days = forecastDays.consolidated_weather
  return (
    <div className="App pd-top-40">
      <SearchInput />
      <ForeCastGroup
        loading={loading}
        city={forecastDays.title}
        forecastDays={days}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.weather.loading,
  forecastDays: state.weather.forecastDays,
})

App.propTypes = {
  loading: PropTypes.bool,
  forecastDays: PropTypes.object,
  // error: PropTypes.bool
}

export default connect(mapStateToProps)(App)
