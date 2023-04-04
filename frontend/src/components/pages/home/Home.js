import { Container, Row } from 'react-bootstrap';

import HomeHeader from './HomeHeader';
import TopNav from '../../TopNav';

const Home = () => {
  const theme = 'light';
  return (
    <>
      <Container className="home d-flex flex-column justify-content-around">
        <HomeHeader theme={theme} />
      </Container>
      <Row>
        <TopNav theme={theme} />
      </Row>
    </>
  );
};

export default Home;
