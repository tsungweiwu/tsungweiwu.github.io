import React, {Component} from 'react';
import {Tab, Row, Nav, NavItem, NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Typical from 'react-typical';
import Home from './pages/Home.js';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {
    HashRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

export default class App extends Component {
    state = {
        showHome: true,
        showProject: false,
        showResume: false,
    };

    componentDidMount() {
        document.body.style.backgroundColor = '#2e2f32';
    }

    toggleHome = (e) => {
        this.setState({
            showHome: true,
            showProject: false,
            showResume: false,
        });
    };

    toggleProject = (e) => {
        this.setState({
            showHome: false,
            showProject: true,
            showResume: false,
        });
    };

    toggleResume = (e) => {
        this.setState({
            showHome: false,
            showProject: false,
            showResume: true,
        });
    };

    handleGit = () => {
        window.open('https://github.com/tsungweiwu');
    };

    handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/tsungweiwu/');
    };

    render() {
        return (
            <div>
                <header>
                    <Tab.Container defaultActiveKey="/home">
                    <HashRouter>
                        <Row
                            md={2}
                            className="justify-content-center"
                            style={{backgroundColor: '#27272b'}}>
                            <Nav>
                                <NavItem>
                                    <NavLink>
                                        <Link 
                                            style={{textDecoration: 'none'}} 
                                            to="/home">
                                                <Typical
                                                    steps={['Tsung Wei Wu']}
                                                    wrapper="h4"
                                                />
                                        </Link>
                                    </NavLink>>
                                </NavItem>

                                <div className="ml-auto" />

                                <NavItem>
                                    <NavLink>
                                        <Link 
                                            style={{textDecoration: 'none'}} 
                                            to="/projects">
                                            <h4>Projects</h4>
                                        </Link>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink>
                                        <Link 
                                            style={{textDecoration: 'none'}} 
                                            to="/resume">
                                            <h4> Resume</h4>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Row>
                        
                        <Tab.Content>
                                <Routes>
                                    <Route
                                        exact
                                        path="/"
                                        element = {<Home />}
                                    />
                                    <Route exact path="/home" element={<Home />} />
                                    <Route exact path="/projects" element={<Projects />} />
                                    <Route exact path="/resume" element={<Resume />} />
                                </Routes>
                            
                        </Tab.Content>
                        </HashRouter>
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
