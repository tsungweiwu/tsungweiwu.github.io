import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import resume from '../assets/TsungWeiWu_Resume2022c.pdf'

export default class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <Row md={3} className="justify-content-md-center">
                <div style={{width: '50%', height: '80vh', marginTop: '3%'}}>
                    <Document file={resume} onLoadSuccess={this.onDocumentLoad}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </Row>
        );
    }
}
