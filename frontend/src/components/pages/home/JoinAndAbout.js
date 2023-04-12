import { Row, Col, Button, Form } from 'react-bootstrap';

const JoinAndAbout = () => (
  <Row className="">
    <Row className="join-and-about">
      <div>
        The Psitadel is an ever evolving community. We are striving to bring
        technology, education, and free thinking together to create a soveriegn
        and sustainable future.
      </div>
    </Row>
    <Row className="join-and-about">
      <Col>
        <Button>Learn More</Button>
      </Col>
      <Col>
        <Button>Donate</Button>
      </Col>
      <Col>
        <Button>Contribute</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>Sign up for our newsletter</h2>
        <p>Stay up to date on the latest happenings within The Psitadel.</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="satoshi@greenpeace.com" />
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Row>
);

export default JoinAndAbout;
