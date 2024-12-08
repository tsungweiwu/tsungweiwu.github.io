import React, {Component} from 'react';
import {Row, Image} from 'react-bootstrap';
import image from '../assets/personal_image.JPG';

const apiUrl = 'https://quotes.rest/qod.json?category=inspire';
export default class Home extends Component {
    state = {
        quote: '',
    };

    render() {
        return (
            <Row
                md={2}
                className="justify-content-center"
                style={this.props.style}>
                <div className="bodyContainer">
                    <Image
                        src={image}
                        className="personalImage"
                        style={{width: '16em'}}
                        roundedCircle></Image>
                    <h3>Allow me to introduce myself</h3>
                    <p>
                        My name is Tsung Wei, and I am a Software Engineer
                        with a Bachelor of Science in Computer Science from the University of South
                        Carolina. I grew up in a small country called Belize,
                        where I first discovered my passion for programming.
                        {<br />}
                        Now I am in Canada in pursuit of a new career,
                        eager to contribute my skills and experience to a forward-thinking organization.
                        {<br />}
                        {<br />}
                    </p>

                    <br/><br/>
                    <h4 style={{
                        textAlign: 'left'
                    }}>
                        Work Experience
                    </h4>

                    <br/>

                    <h5 style={{
                        color: '#bfbbbb',
                        textAlign: 'left'
                    }}>
                        Morgan Stanley
                    </h5>
                    <h6 style={{
                        color: '#bfbbbb',
                        textAlign: 'left'
                    }}>
                        Associate Software Engineer - Investment Operations (Dec 2021 – Dec 2024)
                    </h6>

                    <br/>
                    
                    <h5 style={{
                        color: '#bfbbbb',
                        textAlign: 'left'
                    }}>
                        Parametric Portfolio Associates
                    </h5>
                    <h6 style={{
                        color: '#bfbbbb',
                        textAlign: 'left'
                    }}>
                        Software Engineer Intern - Investment Operations (June 2021 – Dec 2021)
                    </h6>

                    <br/>
                    
                    <h5 style={{
                        color: '#bfbbbb',
                        textAlign: 'left'
                    }}>
                        Wayfair
                    </h5>
                    <h6 style={{
                        color: '#bfbbbb',
                        textAlign: 'left'
                    }}>
                        Software Engineer Intern - Promotions Experience (June 2019 – Aug 2019)
                    </h6>
                </div>
            </Row>
        );
    }
}
