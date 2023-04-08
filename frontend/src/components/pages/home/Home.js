import { Container, Row } from 'react-bootstrap';

import HomeHeader from './HomeHeader';
import TopNav from '../../TopNav';
import Values from './Values';

const Home = () => {
  const theme = 'light';
  return (
    <>
      <TopNav theme={theme} />
      <Container className="home d-flex flex-column justify-content-around">
        <HomeHeader theme={theme} />
        <Values />
      </Container>
    </>
  );
};

export default Home;
