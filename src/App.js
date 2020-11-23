import React, {Component} from 'react';
import {Tab, Row, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Typical from 'react-typical';
import Home from './pages/Home.js';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {Transition, animated} from 'react-spring/renderprops';
import {firebaseAnalytics} from './firebaseConfig';
import queryString from 'query-string';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';

export default class App extends Component {
    state = {
        showHome: true,
        showProject: false,
        showResume: false,
    };

    componentDidMount() {
        document.body.style.backgroundColor = '#2e2f32';
        let src = queryString.parse(window.location.search).s;
        if (src === '1') {
            firebaseAnalytics.logEvent('visited from email');
        }
    }

    toggleHome = (e) => {
        this.setState({
            showHome: true,
            showProject: false,
            showResume: false,
        });
        firebaseAnalytics.logEvent('homepage_visited');
    };

    toggleProject = (e) => {
        this.setState({
            showHome: false,
            showProject: true,
            showResume: false,
        });
        firebaseAnalytics.logEvent('projects_visited');
    };

    toggleResume = (e) => {
        this.setState({
            showHome: false,
            showProject: false,
            showResume: true,
        });
        firebaseAnalytics.logEvent('resume_visited');
    };

    handleGit = () => {
        firebaseAnalytics.logEvent('Github_opened');
        window.open('https://github.com/tsungweiwu');
    };

    handleLinkedIn = () => {
        firebaseAnalytics.logEvent('LinkedIn_opened');
        window.open('https://www.linkedin.com/in/tsungweiwu/');
    };

    render() {
        return (
            <div>
                <header>
                    <Tab.Container defaultActiveKey="/home">
                        <Row
                            md={2}
                            className="justify-content-center"
                            style={{backgroundColor: '#27272b'}}>
                            <Nav>
                                <Nav.Item onClick={this.toggleHome}>
                                    <Nav.Link href="/home">
                                        <Typical
                                            steps={['Tsung Wei Wu']}
                                            wrapper="h4"
                                        />
                                    </Nav.Link>
                                </Nav.Item>

                                <div className="ml-auto" />

                                <Nav.Item onClick={this.toggleProject}>
                                    <Nav.Link href="/projects">
                                        <h4>Projects</h4>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item onClick={this.toggleResume}>
                                    <Nav.Link href="/resume">
                                        <h4>Resume</h4>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Row>

                        <Tab.Content>
                            <Router>
                                <Route
                                    exact
                                    path="/"
                                    render={() => <Redirect to="/home" />}
                                />
                                <Switch>
                                    <Route path="/home">
                                        <Transition
                                            native
                                            from={{opacity: 0}}
                                            enter={{opacity: 1}}
                                            leave={{opacity: 0}}
                                            delay={100}
                                            config={{duration: 1000}}
                                            items={this.state.showHome}>
                                            {(show) =>
                                                show &&
                                                ((props) => (
                                                    <animated.div style={props}>
                                                        <Home />
                                                    </animated.div>
                                                ))
                                            }
                                        </Transition>
                                    </Route>
                                    <Route path="/projects">
                                        <Projects />
                                    </Route>
                                    <Route path="/resume">
                                        <Resume />
                                    </Route>
                                </Switch>
                            </Router>
                        </Tab.Content>
                    </Tab.Container>
                </header>

                <Row md={2} className="justify-content-center">
                    <footer className={'footer'}>
                        <div style={{display: 'inline', float: 'left'}}>
                            <p
                                style={{
                                    fontSize: '1em',
                                }}>
                                Copyright &#169; 2020 Tsung Wei Wu
                            </p>
                        </div>

                        <div style={{display: 'inline', float: 'right'}}>
                            <SiGithub
                                size={'2em'}
                                className={'socialIcons'}
                                onClick={this.handleGit}
                            />
                            <SiLinkedin
                                size={'2em'}
                                className={'socialIcons'}
                                onClick={this.handleLinkedIn}
                            />
                        </div>
                    </footer>
                </Row>
            </div>
        );
    }
}
