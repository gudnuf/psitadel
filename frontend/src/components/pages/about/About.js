import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => (
  <Container>
    <div className="about-page">
      <h1>About Psitadel</h1>
      <p>
        A portmanteau of Psilocybin Citadel, Psitadel is a safe ground for
        psychedelic exploration utilizing the Bitcoin network.{' '}
      </p>
      <h2>Our Mission</h2>
      <p>
        Formed online in 2023, Psitadel is an open-source DAO (decentralized
        autonomous organization) to advocate for mental well-being with
        psychedelic education facilitating direct access to entheogenic
        medicines in a self-sovereign and responsible manner.{' '}
      </p>
      <p>
        The importance of cultural acceptance and rewriting of baseless stigma
        is foundational to these ends.
      </p>
      <p>
        Equally paramount is our belief that utilizing the Bitcoin network,
        which shares a fundamental structure of decentralization and autonomy,
        will highlight the parallel necessity for economic and social reform.
      </p>
      <p>
        Our Mission is to facilitate real-world gatherings to promote the use of
        tools which allow the holistic healing of society’s ills regarding
        mental, physical, spiritual, social, and financial health.
      </p>
      <h2>Funding</h2>
      <p>
        We are currently self-funded working through volunteership building the
        mycelial networks of digital, financial, physical, and human
        connections.
      </p>
      <p>
        All donated funds will be used to grow these foundational layers of
        Psitadel.
      </p>
    </div>
    <Row className="join-and-about justify-content-around mt-3" xs={3}>
      <Col>
        <Button as={Link} to="https://donate.psitadel.com">
          Donate
        </Button>
      </Col>
    </Row>
  </Container>
);

export default About;
