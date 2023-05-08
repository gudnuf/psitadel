import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-dark py-3">
    <Container>
      <Row className="justify-content-around text-center">
        <Col md={4}>
          <h5 className="footer">About Us</h5>
          <p style={{ textAlign: 'justify' }}>
            Our mission is to facilitate real-world gatherings to promote the
            use of tools which allow the healing of society’s sicknesses
            regarding mental, physical, spiritual, social, and financial health.
            Some tools we use to achieve this are 1. Psilocybin
            (psycho-spiritual), 2. Bitcoin (Socio-financial).
          </p>
        </Col>
        <Col md={4} xs={12} className="">
          <h5 className="footer">Navigation</h5>
          <Row>
            <Col xs={6}>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/join">
                  Join
                </Nav.Link>
              </Nav>
            </Col>
            <Col xs={6}>
              <Nav className="flex-column">
                <Nav.Link href="https://donate.psitadel.com">Donate</Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/miami-conference">
                  Miami Conference
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/miami-conference">Services</Nav.Link>
                <Nav.Link as={Link} to="/miami-conference">Contact</Nav.Link> */}
              </Nav>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <h5 className="footer">Contact</h5>
          <ul style={{ listStyle: 'none' }}>
            <a
              href="https://t.me/psilocybincitadel"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="fa-brands fa-telegram" /> Telegram
              </li>
            </a>
            <a
              href="https://twitter.com/DecrimNat"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="fa-brands fa-twitter" /> Twitter
              </li>
            </a>
            <a
              href="https://github.com/daGoodenough/psitadel"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="fa-brands fa-github" /> GitHub
              </li>
            </a>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
