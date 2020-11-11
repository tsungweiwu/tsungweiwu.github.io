import React, {Component} from 'react'
import {Row, Col, Button, Card, Modal, Image} from "react-bootstrap";
import data from './data'
import './styles.css'
import {FiLink} from 'react-icons/fi'

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
			'HTML',
			'CSS',
		],
		filterName: 'All',
		showImage: false,
		imgSrc: '',
		frameLink: '',
	}

	handleFilter = (e) => {
		this.setState({
			filterName: e.target.textContent
		})
	}

	projectLink = (codeURL) => {
		window.open(codeURL)
	}

	imageClick = (src) => {
		this.setState({
			showImage: true,
			imgSrc: src.imageSrc,
			frameLink: src.frame,
		})
	}

	render() {
		return (
			<Row md={2} className="justify-content-md-center">
				<div className="body">
						<Modal
							size="lg"
							aria-labelledby="contained-modal-title-vcenter"
							centered
							show={this.state.showImage}
							onHide={() => this.setState({showImage: false})}
						>
							<Modal.Body>
								<Image src={this.state.imgSrc} style={{width: '100%'}}/>
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={() => this.setState({showImage: false})}>Close</Button>
							</Modal.Footer>
						</Modal>
					<h2>Languages and Frameworks</h2>
					{this.state.languages.map(code => (
						<Button variant='outline-primary' className="btnCode" onClick={this.handleFilter}>{code}</Button>
					))}
					<Row>
						{data.filter(projects => projects.languages.includes(this.state.filterName)).map(filteredProjects => (
							<Col md={6}>
								<Card style={{ marginTop: '2.5vh', backgroundColor: 'transparent', height: '40vh'}} border={'light'}>
									<Card.Body>
										<Card.Title className={'cardTitle'}>
											{filteredProjects.title}
											<FiLink className={"icon"} onClick={() => this.projectLink(filteredProjects.link)}/>
										</Card.Title>

										{!(filteredProjects.frame === '') ? (
											<iframe width="100%" height="235vh" src={filteredProjects.frame}
													frameBorder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen></iframe>
										) : (
										<Card.Img src={filteredProjects.imageSrc} variant="top" onClick={() => this.imageClick(filteredProjects)}/>
											)}

										<Card.Text className={'cardText'}>
											{filteredProjects.description}
										</Card.Text>

										{filteredProjects.languages.filter(code => !(code === 'All')).map(data => (
											<span className="tag">{data}</span>
										))}

									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</div>
			</Row>
		)
	}
}
