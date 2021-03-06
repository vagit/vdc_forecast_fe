import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ForeCastTile from "components/ForeCastTile/ForeCastTile"
import Loading from "components/UI/Loading/Loading"

const ForeCastGroup = ({ city, forecastDays, loading }) => {
  return (
    <Container>
      <Row className="justify-content-md-center pd-top-40 txt-center ">
        <Col>
          <h3>{`5 Day Weather ${city ? " - " + city : ""}`}</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center pd-top-20">
        <Loading show={loading} />
        {forecastDays.map((item) => (
          <Col xs={10} md={2} key={item.id}>
            <ForeCastTile day={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
};

ForeCastGroup.propTypes = {
  forecastDays: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  loading: PropTypes.bool,
}
ForeCastGroup.defaultProps = {
  city: "",
  forecastDays: [],
  loading: false,
}

export default ForeCastGroup
