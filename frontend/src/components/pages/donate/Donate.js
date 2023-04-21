import { Container, Row, Col } from 'react-bootstrap';

import DonationQrs from './DonationQrs';

const Donate = () => (
  <Container>
    <Row>
      <h1>Donate to the Psitadel</h1>
    </Row>
    <Row className="justify-content-center">
      <Col md={6}>
        <DonationQrs />
      </Col>
    </Row>
    <Row>
      <h3>FAQ</h3>
      Carrot menus with FAQ
    </Row>
  </Container>
);

export default Donate;
