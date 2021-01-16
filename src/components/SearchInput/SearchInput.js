import { Container, Row, Col, FormControl } from 'react-bootstrap'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import classes from './SearchInput.module.css'
import debounce from 'lodash/debounce'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSuggestions:0,
      keyword: '',
    }
    this.inputRef = React.createRef()
    this.onInputChange = debounce(this.onInputChange, 500)
  }
  onInputChange = (evalue) => {
    this.setState({ keyword: evalue})
    this.props.loadCity(evalue)
  }
  getForeCastHandler(woeid, title) {
    this.props.clearCitySuggestion()
    this.props.loadWeather(woeid)
    this.inputRef.current.value = title
  }

  render() {
    return (
      <Container className={classes.SearchInputContainer}>
        <Row className="justify-content-md-center">
          <Col lg="6" >
            {/* TODO: handling for blur */}
            <FormControl placeholder="Enter City"   
              onFocus={() => this.props.showCitySuggestion(true)}          
              onChange={e => this.onInputChange(e.target.value)}
              ref={this.inputRef} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          { this.props.showCitySuggestionFlag && (<Col lg="6">
            <ul className={classes.SearchInputSuggestion}>
              {(this.props.errorCity || this.props.errorCityMsg) && <li>{this.props.errorCityMsg}</li>}
              {this.props.filteredSuggestions.map(city => <li onClick={() => this.getForeCastHandler(city.woeid, city.title)} key={city.woeid}>{city.title}</li>)}
            </ul>
          </Col>)}
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { 
    errorCity: state.city.error,
    errorCityMsg: state.city.errorMsg,
    filteredSuggestions: state.city.citySuggestion,
    showCitySuggestionFlag: state.city.showCitySuggestionFlag,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCity: (keyword) => dispatch(actions.loadCity(keyword)),
    loadWeather: (woeid) => dispatch(actions.loadWeather(woeid)),
    showCitySuggestion: (bool) => dispatch(actions.showCitySuggestion(bool)),
    clearCitySuggestion: () => dispatch(actions.clearCitySuggestion())
  }
}

SearchInput.propTypes = {
  filteredSuggestions: PropTypes.array,
  loadCity: PropTypes.func,
  loadWeather: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)