// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

import logoLight from '../../../images/logos/Logo-black2-transparant-rgb.png';
import logoDark from '../../../images/logos/Avatar-White-rgb.png';

const HomeHeader = ({ theme }) => {
  const dark = theme === 'dark';
  const logo = dark ? logoDark : logoLight;

  return (
    <>
      <Row>
        <Col md={6}>
          <img src={logo} alt="" srcSet="" />
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center flex-column text-center"
        >
          <h1>
            <strong>Real-world</strong> gatherings promoting tools to{' '}
            <em>heal</em> society's mental, physical, spiritual, and financials
            ills.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="home-header">
          <Button>Donate</Button>
        </Col>
        <Col className="home-header">
          <Button>Join</Button>
        </Col>
      </Row>
    </>
  );
};
HomeHeader.propTypes = {
  theme: PropTypes.string,
};

export default HomeHeader;
