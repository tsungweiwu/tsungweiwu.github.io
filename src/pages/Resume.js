import React, {Component} from 'react'
import {Row, Image} from "react-bootstrap";

export default class Resume extends Component {

	render() {
		return (
			<Row md={2} className="justify-content-md-center">
				<div style={{width: '100%', height: '100vh', marginTop: '3%'}}>
					<iframe className={'pdf'}
							src={`https://drive.google.com/file/d/16t4DgmKGcYTUrcsCQkoKBU1A-hT0NoKZ/preview`}></iframe>
				</div>
			</Row>
		)
	}
}
