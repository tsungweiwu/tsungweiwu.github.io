import React, {Component} from 'react';
import axios from 'axios';
import {Row, Image} from 'react-bootstrap';
import image from '../assets/personal_image.jpg';

const apiUrl = 'https://quotes.rest/qod.json?category=inspire';
export default class Home extends Component {
    state = {
        quote: '',
    };

    componentDidMount() {
        axios({method: 'get', url: `${apiUrl}`}).then((response) => {
            this.setState({
                quote: response.data.contents.quotes[0],
            });
        });

        // fetch('https://quotes.rest/qod.json?category=inspire', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         this.setState({
        //             quote: data.contents.quotes[0],
        //         });
        //     });
    }

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
                        majoring in Computer Science at the University of South
                        Carolina. I grew up in a small country called Belize,
                        where I obtained my Associates Degree in Computer
                        Science.
                        {<br />}
                        {<br />}I have used Java abundantly throughout the
                        course of my studies, however I have discovered a
                        passion for web development with my first start up. We
                        were a group of friends looking for ways to earn some
                        pocket money, so we came up with an approach to build
                        simple websites for local stores around the towns in
                        Belize.
                        {<br />}
                        {<br />}I have recently completed an internship
                        revolving around FullStack Engineering at Wayfair. This
                        experience has exposed me to a variety of languages and
                        workflows, but the learning never ends. If given a task,
                        I will strive towards completing with an open mind
                        towards:
                    </p>
                    <ol
                        style={{
                            textAlign: 'left',
                            marginTop: '1.5em',
                        }}>
                        <li>
                            Learning new things and aspiring to be better than I
                            previously was.
                        </li>
                        <li>
                            Adapting and working alongside with new people to
                            understanding their workflow.
                        </li>
                        <li>
                            Maintaining progress, and meeting deadlines and
                            expectations.
                        </li>
                        <li>
                            Providing constructive feedback and cooperation to
                            the team.
                        </li>
                    </ol>

                    <figure className="quote">
                        <h4>{this.state.quote.title}</h4>
                        <blockquote>{this.state.quote.quote}</blockquote>
                        <figcaption>
                            &mdash; {this.state.quote.author},{' '}
                            <cite>{this.state.quote.date}</cite>
                        </figcaption>
                    </figure>
                </div>
            </Row>
        );
    }
}
