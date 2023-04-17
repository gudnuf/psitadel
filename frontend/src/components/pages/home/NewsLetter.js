import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

const NewsLetter = () => (
  <Row classsName="align-items-center ">
    <Row className="text-center my-5">
      <Col xs={12} md={6}>
        <h2>Sign up for our newsletter</h2>
        <p>Stay up to date on the latest happenings within The Psitadel.</p>
      </Col>
      <Col className="d-flex flex-column justify-content-center">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="satoshi@psitadel.com"
            aria-label="User's email"
            aria-describedby="basic-addon2"
          />
          <Button id="basic-addon2">Sign Up</Button>
        </InputGroup>
      </Col>
    </Row>
  </Row>
);

export default NewsLetter;
