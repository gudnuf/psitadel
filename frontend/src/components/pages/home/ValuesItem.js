import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const ValuesItem = ({ value, description, img }) => (
  <Col
    className="my-3 pb-3 d-flex flex-column justify-content-around align-items-center value-item"
    md={6}
    lg={6}
    xl={3}
    xs={12}
  >
    <Row>
      <div className="value-name pt-2">{value}</div>
    </Row>
    <Row className="text-center value-img">
      {/* <i className={`${icon} fa-10x`} /> */}
      <img src={img} alt={value} />
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
