import PropTypes from 'prop-types'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ForeCastTile from 'components/ForeCastTile/ForeCastTile'

const ForeCastGroup = ({ city, forecastDays }) => {
  return (
    <Container>
      <Row className="justify-content-md-center pd-top-40 txt-center "><Col><h3>{`5 Day Weather ${city ? ' - '+ city : ''}`}</h3></Col></Row>
      <Row className="justify-content-md-center pd-top-20">
        {forecastDays.map((item) => <Col xs={10}  md={2} key={item.id}><ForeCastTile day={item} /></Col>)}
      </Row>
    </Container>
  )
}

ForeCastGroup.propTypes = {
  forecastDays: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
}
ForeCastGroup.defaultProps = {
  city: '',
  forecastDays: []
}

export default ForeCastGroup
