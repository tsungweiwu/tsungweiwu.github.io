import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import image from '../assets/personal_image.JPG';

const workExperience = [
  {
    company: 'Hinge Health',
    role: 'P2 Software Engineer - CV User Experience',
    period: 'Feb 2025 – Current',
  },
  {
    company: 'Morgan Stanley',
    role: 'Associate Software Engineer - Investment Operations',
    period: 'Dec 2021 – Dec 2024',
  },
  {
    company: 'Parametric Portfolio Associates',
    role: 'Software Engineer Intern - Investment Operations',
    period: 'June 2021 – Dec 2021',
  },
  {
    company: 'Wayfair',
    role: 'Software Engineer Intern - Promotions Experience',
    period: 'June 2019 – Aug 2019',
  },
];

function Home() {
  return (
    <Container>
      <Row className="align-items-center mb-5">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image src={image} roundedCircle fluid style={{ width: '15rem', height: '15rem', objectFit: 'cover' }} />
        </Col>
        <Col md={8}>
          <h2>Allow me to introduce myself</h2>
          <p>
            My name is Tsung Wei, and I am a Software Engineer with a Bachelor of Science in Computer Science from the University of South
            Carolina. Originally from Belize, I cultivated my passion for programming early on, which has shaped my career and dedication to technological innovation.
          </p>
          <p>
            I am now living in Montreal, Canada, in pursuit of a new career, eager to contribute my skills and experience to a forward-thinking organization.
          </p>
          <p>
            <strong>I am authorized to work in Canada without sponsorship.</strong>
          </p>
        </Col>
      </Row>

      <hr />

      <h2 className="mt-5 mb-4">Work Experience</h2>
      <Row>
        {workExperience.map((job, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100 bg-dark text-white">
              <Card.Body>
                <Card.Title>{job.company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.role}</Card.Subtitle>
                <Card.Text>{job.period}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
