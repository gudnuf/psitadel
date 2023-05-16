import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => (
  <Row className="mt-5 justify-content-around">
    <Row className="join-and-about justify-content-center align-items-center">
      <Col md={6} xs={12}>
        <a href="https://t.me/psilocyibincitadel">
          <i className="fa-brands fa-telegram" />
          <div id="home-telegram-link">https://t.me/psilocyibincitadel</div>
        </a>
      </Col>
      <Col className="mt-2">
        <div>Hang out or be a lurker in our Telegram channel</div>
      </Col>
    </Row>

    <Row className=" mt-5 join-and-about justify-content-around mt-3" xs={3}>
      <Col>
        <Button as={Link} to="/about">
          About
        </Button>
      </Col>
      <Col>
        <Button as={Link} to="https://donate.psitadel.com">
          Donate
        </Button>
      </Col>
    </Row>
  </Row>
);

export default Contact;
