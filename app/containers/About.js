import React, { Component } from 'react';
import AboutPage from './../components/AboutPage';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<AboutPage />
			</div>
		);
	}
}
