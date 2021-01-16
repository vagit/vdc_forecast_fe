import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import classes from "./Loading.module.css"
import weatherLoading from "assets/images/weather-loading.gif"

const Loading = (props) =>
  props.show ? (
    <Container>
      <Row>
        <Col className={classes.LoadingContainer}>
          <img className={classes.Loading} src={weatherLoading} />
        </Col>
      </Row>
    </Container>
  ) : null

Loading.propTypes = {
  show: PropTypes.bool,
}

export default Loading
