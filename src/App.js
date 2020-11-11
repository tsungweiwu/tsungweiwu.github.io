import React, {Component} from 'react';
import {Tab, Row, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Typical from 'react-typical'
import Home from "./pages/Home.js";
import Projects from "./pages/Projects";
import Resume from './pages/Resume'
import {SiGithub, SiLinkedin} from "react-icons/si";
import {Transition, animated} from "react-spring/renderprops";

export default class App extends Component {
	state = {
		showHome: true,
		showProject: false,
		showResume: false,
	}

	componentDidMount() {
		document.body.style.backgroundColor = "#2e2f32"
	}

	toggleHome = e => {
		console.log("Home")
		this.setState({
			showHome: true,
			showProject: false,
			showResume: false,
		})
	}

	toggleProject = e => {
		console.log("Project")
		this.setState({
			showHome: false,
			showProject: true,
			showResume: false,
		})
	}

	toggleResume = e => {
		console.log("Resume")
		this.setState({
			showHome: false,
			showProject: false,
			showResume: true,
		})
	}

	render() {
		return (
			<header>
				<Tab.Container defaultActiveKey="home">
					<Row md={2} className="justify-content-center"
						 style={{backgroundColor: '#27272b'}}>
						<Nav>
							<Nav.Item onClick={this.toggleHome}>
								<Nav.Link eventKey="home">
										<Typical steps={['Tsung Wei Wu']} wrapper="h4"/>
								</Nav.Link>
							</Nav.Item>

							<div className="ml-auto"/>

							<Nav.Item onClick={this.toggleProject}>
								<Nav.Link eventKey="projects">
									<h4>
										Projects
									</h4>
								</Nav.Link>
							</Nav.Item>

							<Nav.Item onClick={this.toggleResume}>
								<Nav.Link eventKey='resume'>
									<h4>
										Resume
									</h4>
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Row>

					<Tab.Content>
						<Tab.Pane eventKey="home">
							<Transition
								native
								from={{opacity: 0}}
								enter={{opacity: 1}}
								leave={{opacity: 0}}
								delay={100}
								config={{duration: 1000}}
								items={this.state.showHome}
								>
								{show => show && (props => (
									<animated.div style={props}>
										<Home/>
									</animated.div>
								))}
							</Transition>
						</Tab.Pane>

						<Tab.Pane eventKey="projects">
							<Transition
								native
								from={{opacity: 0}}
								enter={{opacity: 1}}
								leave={{opacity: 0}}
								delay={100}
								config={{duration: 1000}}
								items={this.state.showProject}
							>
								{show => show && (props => (
									<animated.div style={props}>
										<Projects/>
									</animated.div>
								))}
							</Transition>
						</Tab.Pane>

						<Tab.Pane eventKey="resume">
							<Resume/>
						</Tab.Pane>
					</Tab.Content>
				</Tab.Container>

			<footer className={'footer'}>
				<SiGithub
					size={'2em'}
					className={'socialIcons'}
					onClick={() => window.open('https://github.com/tsungweiwu')}
				/>
				<SiLinkedin
					size={'2em'}
					className={'socialIcons'}
					onClick={() => window.open('https://www.linkedin.com/in/tsungweiwu/')}
				/>
			</footer>
			</header>
		);
	}
}
