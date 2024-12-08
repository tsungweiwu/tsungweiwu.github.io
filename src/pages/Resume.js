import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import resume from '../assets/TsungWeiWuUpdated.pdf'

export default class Resume extends Component {

    render() {

        return (
            <Row md={3} className="justify-content-md-center">
                <div style={{width: '50%', height: '80vh', marginTop: '3%'}}>
                    <iframe src={resume} width="100%" height="100%"/>
                </div>
            </Row>
        );
    }
}
