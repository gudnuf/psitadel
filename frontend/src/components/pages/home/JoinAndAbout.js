import { Row, Col, Button, Form } from 'react-bootstrap';

const JoinAndAbout = () => (
  <Row className="mt-3">
    <Row className="join-and-about">
      <div>
        The Psitadel is an ever evolving community. We are striving to bring
        technology, education, and free thinking together to create a sovereign
        and sustainable future.
      </div>
    </Row>
    <Row className="join-and-about justify-content-between mt-3" xs={3}>
      <Button as={Col}>About</Button>
      <Button as={Col}>Donate</Button>
      <Button as={Col}>Contribute</Button>
    </Row>
  </Row>
);

export default JoinAndAbout;
