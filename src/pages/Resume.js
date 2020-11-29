import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

export default class Resume extends Component {
    render() {
        return (
            <Row md={2} className="justify-content-md-center">
                <div style={{width: '100%', height: '100vh', marginTop: '3%'}}>
                    <iframe
                        title="resume"
                        className={'pdf'}
                        src={"https://drive.google.com/file/d/1d8yT4Ga2zFMZgrqPM-SOHtJ-ALcFc9U5/preview"}></iframe>
                </div>
            </Row>
        );
    }
}
