import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JoinAndAbout = () => (
  <Row className="mt-3">
    <Row className="join-and-about">
      <div>
        The Psitadel is an ever evolving community. We are striving to bring
        technology, education, and free thinking together to create a sovereign
        and sustainable future.
      </div>
    </Row>
    <Row className="join-and-about justify-content-around mt-3" xs={3}>
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

export default JoinAndAbout;
