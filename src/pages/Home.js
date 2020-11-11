import React, {Component} from 'react'
import {Row, Image} from "react-bootstrap";
import image from '../assets/personal_image.JPG'

export default class Home extends Component {
	render() {
		return (
			<Row md={2} className="justify-content-md-center" style={this.props.style}>
				<div className="header">
					<Row className="justify-content-center">
						<Image src={image} className="personalImage" roundedCircle></Image>
						<div>
						<h3>About me</h3>
						<p>My name is Tsung Wei, but my friends call me Edison</p>

						<h3>Experience</h3>
						<p>this is testing message this is testing message this is testing message this is testing message </p>

						<h3>Skills</h3>
						<p>this is testing message this is testing message this is testing message this is testing message </p>
						</div>
					</Row>
				</div>
			</Row>
		)
	}
}
