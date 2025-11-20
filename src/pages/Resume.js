import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import PDFViewer from 'pdf-viewer-reactjs';
import resume from '../assets/Tsung Wei Wu.pdf';

function Resume() {
  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col>
          <Button variant="primary" href={resume} download="Tsung_Wei_Wu_Resume.pdf" className="mb-4">
            Download CV
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <PDFViewer
            document={{
              url: resume,
            }}
            hideNavbar={true}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;