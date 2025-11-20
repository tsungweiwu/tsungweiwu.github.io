import React, { useState } from 'react';
import { Col, Card, Badge, Modal, Button, Carousel, Image } from 'react-bootstrap';
import { FiLink } from 'react-icons/fi';

function ProjectCard({ project }) {
  const [showImage, setShowImage] = useState(false);

  const handleImageClick = () => setShowImage(true);
  const handleClose = () => setShowImage(false);

  const projectLink = (codeURL) => {
    window.open(codeURL);
  };

  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="h-100 bg-dark text-white">
        {project.frame ? (
          // eslint-disable-next-line
          <iframe
            width="100%"
            height="200px"
            src={project.frame}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={project.title}
          ></iframe>
        ) : (
          <Card.Img
            variant="top"
            src={project.imageSrc[0]}
            onClick={handleImageClick}
            style={{ cursor: 'pointer', height: '200px', objectFit: 'cover' }}
          />
        )}
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            {project.title}
            {project.link && (
              <FiLink
                className="icon"
                onClick={() => projectLink(project.link)}
                style={{ cursor: 'pointer' }}
              />
            )}
          </Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="tagContainer">
            {project.languages
              .filter((lang) => lang !== 'All')
              .map((language, index) => (
                <Badge bg="primary" key={index} className="me-2 mb-2">
                  {language}
                </Badge>
              ))}
          </div>
        </Card.Footer>
      </Card>

      <Modal show={showImage} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {project.imageSrc.map((img, index) => (
              <Carousel.Item key={index}>
                <Image src={img} fluid />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}

export default ProjectCard;