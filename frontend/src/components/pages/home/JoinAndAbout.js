import { Row, Col, Button } from 'react-bootstrap';

const JoinAndAbout = () => (
  <>
    <Row className="align-items-center justify-content-center segment">
      <Col>
        <h2>
          <strong>JOIN</strong> a community of like-minded individuals trading
          value.
        </h2>
      </Col>
      <Col>
        <Row>This will be a cool psitadel image</Row>
        <Row>
          <Button>Join</Button>
        </Row>
      </Col>
    </Row>
    <Row className="align-items-center justify-content-center segment">
      <Col>
        <Row>Another awesome AI pic</Row>
        <Button>Learn More</Button>
      </Col>
      <Col>
        <h2>
          The Psitadel is an ever evolving community. Join to stay up to date
          and get involved!
        </h2>
      </Col>
    </Row>
  </>
);

export default JoinAndAbout;
