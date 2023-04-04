import { Navbar, Nav, Container } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';

const TopNav = ({ theme }) => (
  <Navbar bg={theme} expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

TopNav.propTypes = {
  theme: PropTypes.string,
};

export default TopNav;
