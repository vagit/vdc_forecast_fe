import PropTypes from 'prop-types'
import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'
import { ICON_BASE_URL, FORMAT_DATE } from '../../shared/constants'
const ForeCastTile = ({ day }) => (
  <Card>
    <Card.Body>
      <Card.Title>{moment(day.applicable_date).format(FORMAT_DATE)} - {day.weather_state_name}</Card.Title>
      <Card.Img src={`${ICON_BASE_URL}${day.weather_state_abbr}.svg`}></Card.Img>
      <Card.Text className="txt-center"><strong>{Math.round(day.max_temp)}°</strong> / {Math.round(day.min_temp)}°</Card.Text>
    </Card.Body>
  </Card>
)

ForeCastTile.propTypes = {
  day: PropTypes.object.isRequired
}

export default ForeCastTile
