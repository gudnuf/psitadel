import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import HomeHeader from './HomeHeader';
import Values from './Values';
import JoinAndAbout from './JoinAndAbout';
import Contact from './Contact';

const Home = () => {
  const [heroHeight, setHeroHeight] = useState(0);

  const handleWindowResize = (height) => {
    setHeroHeight(height);
  };

  const theme = 'light';
  return (
    <>
      <HomeHeader
        theme={theme}
        className="header-container"
        windowResize={handleWindowResize}
      />
      <Container className="justify-content-around">
        <JoinAndAbout className="" />
        <Values />
        <Contact className="contact-section" />
      </Container>
    </>
  );
};

export default Home;
