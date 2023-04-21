import { Card, InputGroup, Form, Button, Row, Col } from 'react-bootstrap';

const LightningDonation = () => (
  <>
    <Card.Title>Donate Using a Lightning Address</Card.Title>
    <Card.Img
      variant="top"
      src="https://www.pngall.com/wp-content/uploads/2/QR-Code-PNG-Photo.png"
    />
    <Card.Text as={Row} className="justify-content-center">
      <Col md={8}>
        <InputGroup className="mb-3">
          <Form.Control
            value="03lksdhfsdf87sdfhsdf8sdflkjsd"
            aria-label="User's email"
            aria-describedby="basic-addon2"
          />
          <Button id="basic-addon2">
            <i className="fa-solid fa-copy" />
          </Button>
        </InputGroup>
      </Col>
    </Card.Text>
  </>
);

export default LightningDonation;
