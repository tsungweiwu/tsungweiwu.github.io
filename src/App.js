import React from 'react';
import { Container, Row, Col, Image, Card, Navbar, Nav } from 'react-bootstrap';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Projects from './pages/Projects';
import resume from './assets/Tsung_Wei_Wu_Resume.pdf';
import profileImage from './assets/personal_image.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const workExperience = [
  {
    company: 'Hinge Health',
    role: 'P2 Software Engineer – CV User Experience',
    period: 'Feb 2025 – Present',
    highlights: [
      'Helped launch a backend service that determines whether a mobile device can reliably support camera- and motion-based features, including production infrastructure, monitoring, documentation, and security readiness.',
      'Delivered backend work that decoupled movement-definition logic from tightly coupled code paths, reducing rollout risk and laying the groundwork for the movement-analysis platform to scale.',
      'Owned key backend platform work across schema updates, movement-definition updates, and architecture cleanup, improving maintainability and extensibility of the movement-analysis system.',
      'Led a scheduling-logic migration to a new active-days API, coordinating contract details with a partner team and delivering the implementation on the committed sprint.',
    ],
  },
  {
    company: 'Morgan Stanley',
    role: 'Associate Software Engineer – Investment Operations',
    period: 'Dec 2021 – Dec 2024',
    highlights: [
      'Orchestrated AWS resources (EC2, CloudWatch Logs, Lambda) for production deployments.',
      'Automated infrastructure provisioning via Terraform and integrated Datadog for logs, metrics, and APM traces.',
      'Developed scalable API services with Java Spring Boot; modernized log-level configuration via Spring Cloud Consul.',
    ],
  },
  {
    company: 'Parametric Portfolio Associates',
    role: 'Software Engineer Intern – Investment Operations',
    period: 'Jun 2021 – Dec 2021',
    highlights: [
      'Built a React.js internal tool for the promotions team, boosting productivity by 30%.',
      'Debugged web interfaces and shipped usability improvements to enhance the customer experience.',
    ],
  },
  {
    company: 'Wayfair',
    role: 'Software Engineer Intern – Promotions Experience',
    period: 'Jun 2019 – Aug 2019',
    highlights: ['Contributed to frontend feature development for the promotions engineering team.'],
  },
];

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* ── Navbar ─────────────────────────────────────────────── */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="site-nav">
        <Container>
          <Navbar.Brand
            className="nav-brand"
            onClick={() => scrollTo('about')}
            style={{ cursor: 'pointer' }}
          >
            Tsung Wei Wu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link onClick={() => scrollTo('about')}>About</Nav.Link>
              <Nav.Link onClick={() => scrollTo('experience')}>Experience</Nav.Link>
              <Nav.Link onClick={() => scrollTo('projects')}>Projects</Nav.Link>
              <a
                href={resume}
                download="Tsung_Wei_Wu_Resume.pdf"
                className="btn btn-cv ms-lg-3 mt-2 mt-lg-0"
              >
                Download CV
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ── Hero / About ────────────────────────────────────────── */}
      <section id="about" className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-5 mb-md-0">
              <Image src={profileImage} roundedCircle fluid className="profile-image" />
            </Col>
            <Col md={8}>
              <p className="hero-subtitle">Software Engineer</p>
              <h1 className="hero-name">Tsung Wei Wu</h1>
              <p className="hero-bio">
                Originally from Belize, I am a Software Engineer with a B.S. in Computer Science
                from the University of South Carolina. Based in Montreal, I build thoughtful,
                scalable systems and enjoy working at the intersection of product and engineering.
              </p>
              <p className="hero-auth">Authorized to work in Canada without sponsorship.</p>
              <div className="hero-links">
                <a
                  href="https://github.com/tsungweiwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light me-2 mb-2"
                >
                  <SiGithub size="1.1em" className="me-1" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/tsungweiwu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light me-2 mb-2"
                >
                  <SiLinkedin size="1.1em" className="me-1" /> LinkedIn
                </a>
                <a
                  href={resume}
                  download="Tsung_Wei_Wu_Resume.pdf"
                  className="btn btn-cv mb-2"
                >
                  Download CV
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Work Experience ─────────────────────────────────────── */}
      <section id="experience" className="section">
        <Container>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
          <Row>
            {workExperience.map((job, i) => (
              <Col md={6} key={i} className="mb-4">
                <Card className="h-100 experience-card">
                  <Card.Body>
                    <Card.Title className="exp-company">{job.company}</Card.Title>
                    <Card.Subtitle className="mb-1 exp-role">{job.role}</Card.Subtitle>
                    <p className="exp-period">{job.period}</p>
                    <ul className="exp-bullets">
                      {job.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Projects ────────────────────────────────────────────── */}
      <section id="projects" className="section section-alt">
        <Container>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
          <Projects />
        </Container>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="site-footer">
        <Container>
          <Row className="align-items-center">
            <Col className="text-center text-md-start mb-2 mb-md-0">
              <p className="footer-copy mb-0">© 2025 Tsung Wei Wu</p>
            </Col>
            <Col className="text-center text-md-end">
              <a
                href="https://github.com/tsungweiwu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-3"
              >
                <SiGithub size="1.5em" />
              </a>
              <a
                href="https://www.linkedin.com/in/tsungweiwu/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <SiLinkedin size="1.5em" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
