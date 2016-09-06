import React, { Component } from 'react';
import HelpPage from './../components/HelpPage';

export default class Help extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<HelpPage />
			</div>
		);
	}
}
