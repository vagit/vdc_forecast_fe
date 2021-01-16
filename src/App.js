// import logo from './logo.svg';
import React from 'react'
import PropTypes from 'prop-types'
import ForeCastGroup from 'components/ForeCastGroup/ForeCastGroup'
import SearchInput from 'components/SearchInput/SearchInput'
// import Loading from 'components/UI/Loading/Loading'
import { connect } from 'react-redux'
import './App.css'

// const Error = () => (<div>has error</div>)

function App({ forecastDays }) {
  let days = forecastDays.consolidated_weather
  return (
    <div className="App pd-top-40">
      <SearchInput />
      {/* <Loading show={loading} />
      { error ? <Error /> : <ForeCastGroup city={forecastDays.title} forecastDays={days} /> } */}

      { <ForeCastGroup city={forecastDays.title} forecastDays={days} /> } 
    </div>
  )
}

const mapStateToProps = (state) => ({
  // loading: state.loading,
  // error: state.error,
  forecastDays: state.weather.forecastDays
})

App.propTypes = {
  // loading: PropTypes.bool,
  forecastDays: PropTypes.object,
  // error: PropTypes.bool
}

export default connect(mapStateToProps)(App)
