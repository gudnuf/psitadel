// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../images/logos/Avatar-Black.svg';

const TopNav = ({ theme }) => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="logo" />
        Psilocybin Psitadel
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/join">
            Join
          </Nav.Link>
          <Nav.Link href="https://donate.psitadel.com">Donate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

TopNav.propTypes = {
  theme: PropTypes.string,
};

export default TopNav;
