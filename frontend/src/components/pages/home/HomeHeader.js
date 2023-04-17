// eslint-disable-next-line import/no-extraneous-dependencies
import { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

import heroHorizontal from '../../../images/hero.png';
import heroVertical from '../../../images/hero_vertical.png';

const HomeHeader = ({ theme, windowResize }) => {
  const [heroImage, setHeroImage] = useState(null);
  const heroImageRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      windowResize(height);
      setHeroHeight(height);
    });
    observer.observe(heroImageRef.current);
    if (window.innerWidth < 768) {
      setHeroImage(heroVertical);
    }
    if (window.innerWidth >= 768) {
      setHeroImage(heroHorizontal);
    }
    return () => observer.disconnect();
  }, [window.innerWidth]);

  return (
    <Container
      className="hero"
      fluid
      style={{ position: 'static', height: heroHeight }}
    >
      <img
        src={heroImage}
        alt="thriving citadel with giant mushrooms"
        style={{ width: '100%', zIndex: '0', position: 'absolute', left: 0 }}
        ref={heroImageRef}
      />
      <Row
        className="justify-content-center"
        style={{
          position: 'absolute',
          zIndex: 10,
          height: heroHeight,
        }}
      >
        <Col
          md={9}
          className="d-flex justify-content-center flex-column text-center hero"
        >
          <h1 className="hero">
            <strong>Real-world</strong> gatherings promoting tools to{' '}
            <em>heal</em> society's mental, physical, spiritual, and financials
            ills.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <Button>Donate</Button>
        </Col>
        <Col className="">
          <Button>Join</Button>
        </Col>
      </Row>
    </Container>
  );
};

HomeHeader.propTypes = {
  theme: PropTypes.string.isRequired,
  windowResize: PropTypes.func.isRequired,
};

export default HomeHeader;
