import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const ValuesItem = ({ value, description, img }) => (
  <Col
    className="my-5 d-flex flex-column justify-content-around align-items-center"
    md={4}
    lg={3}
    sm={6}
    xs={12}
  >
    <Row className="text-center">
      {/* <i className={`${icon} fa-10x`} /> */}
      <img src={img} alt={value} />
    </Row>
    <Row>
      <div className="value-name">{value}</div>
    </Row>
    <Row className="value-description text-center">
      <div className="d-flex flex-column justify-content-center">
        {description}
      </div>
    </Row>
  </Col>
);
ValuesItem.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ValuesItem;
