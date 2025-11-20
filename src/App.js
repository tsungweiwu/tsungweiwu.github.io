import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home.js';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#2e2f32';
    document.body.style.color = 'white';
  }, []);

  return (
    <HashRouter>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <LinkContainer to="/home">
              <Navbar.Brand>Tsung Wei Wu</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/home">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/resume">
                  <Nav.Link>Resume</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Container>

        <footer className="footer mt-auto py-3 bg-dark text-white">
          <Container>
            <Row>
              <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
                <p className="mb-0">Copyright &copy; 2025 Tsung Wei Wu</p>
              </Col>
              <Col md={6} className="text-center text-md-end">
                <a href="https://github.com/tsungweiwu" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                  <SiGithub size={'1.5em'} />
                </a>
                <a href="https://www.linkedin.com/in/tsungweiwu/" target="_blank" rel="noopener noreferrer" className="text-white">
                  <SiLinkedin size={'1.5em'} />
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
