import React, {Component} from 'react';
import {Row, Col, Button, Card, Modal, Image, Carousel} from 'react-bootstrap';
import data from './data';
import {FiLink} from 'react-icons/fi';

export default class Projects extends Component {
    state = {
        languages: [
            'All',
            'React.js',
            'React Native',
            'JavaScript',
            'TypeScript',
            'Laravel',
            'PHP',
            'Java',
            'C++',
            'C',
            'HTML',
            'CSS',
            'Swift',
            'Python',
        ],
        filterName: 'All',
        showImage: false,
        imgSrc: [],
        frameLink: '',
    };

    handleFilter = (e) => {
        this.setState({
            filterName: e.target.textContent,
        });
        console.log(e.target.textContent);
    };

    projectLink = (codeURL) => {
        window.open(codeURL);
    };

    imageClick = (src) => {
        this.setState({
            showImage: true,
            imgSrc: src.imageSrc,
            frameLink: src.frame,
        });
    };

    render() {
        const images = this.state.imgSrc;
        return (
            <Row md={2} className="justify-content-md-center">
                <div className="bodyContainer">
                    {/*When Clicked, Image Pops up*/}
                    <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.state.showImage}
                        onHide={() => this.setState({showImage: false})}>
                        <Modal.Body>
                            <Carousel>
                                {images.map((img) => (
                                    <Carousel.Item>
                                        <Image src={img} width={'100%'} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() =>
                                    this.setState({showImage: false})
                                }>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/*Tags to click*/}
                    <h2>Languages and Frameworks</h2>
                    {this.state.languages.map((code) => (
                        <Button
                            variant="outline-primary"
                            className="btnCode"
                            onClick={this.handleFilter}
                            active={
                                this.state.filterName === code ? true : false
                            }>
                            {code}
                        </Button>
                    ))}
                    <Row>
                        {data
                            .filter((projects) =>
                                projects.languages.includes(
                                    this.state.filterName,
                                ),
                            )
                            .map((filteredProjects) => (
                                <Col md={6}>
                                    <Card
                                        style={{
                                            marginTop: '2.5vh',
                                            backgroundColor: 'transparent',
                                            minHeight: '50vh',
                                        }}
                                        border={'light'}>
                                        <Card.Body>
                                            {/*Header*/}
                                            <Card.Title className={'cardTitle'}>
                                                {filteredProjects.title}
                                                <FiLink
                                                    className={'icon'}
                                                    onClick={
                                                        filteredProjects.link !==
                                                        ''
                                                            ? () =>
                                                                  this.projectLink(
                                                                      filteredProjects.link,
                                                                  )
                                                            : ''
                                                    }
                                                />
                                            </Card.Title>

                                            {/*Image or Video*/}
                                            {!(
                                                filteredProjects.frame === ''
                                            ) ? (
                                                // eslint-disable-next-line
                                                <iframe
                                                    width="100%"
                                                    height="342vh"
                                                    src={filteredProjects.frame}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                            ) : (
                                                <Carousel>
                                                    {filteredProjects.imageSrc.map(
                                                        (img) => (
                                                            <Carousel.Item>
                                                                <Card.Img
                                                                    src={img}
                                                                    variant="top"
                                                                    height={
                                                                        '350vh'
                                                                    }
                                                                    width={
                                                                        '100%'
                                                                    }
                                                                    onClick={() =>
                                                                        this.imageClick(
                                                                            filteredProjects,
                                                                        )
                                                                    }
                                                                />
                                                            </Carousel.Item>
                                                        ),
                                                    )}
                                                </Carousel>
                                            )}

                                            {/*Description*/}
                                            <textarea
                                                className={'cardText'}
                                                disabled={true}>
                                                {filteredProjects.description}
                                            </textarea>
                                        </Card.Body>

                                        {/*Tags*/}
                                        <div className="tagContainer">
                                            {filteredProjects.languages
                                                .filter(
                                                    (code) => !(code === 'All'),
                                                )
                                                .map((data) => (
                                                    <code className="tag">
                                                        {data}
                                                    </code>
                                                ))}
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>
            </Row>
        );
    }
}
