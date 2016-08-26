import React, { Component } from 'react';
import UserPage from './../components/UserPage';

export default class Help extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<UserPage />
			</div>
		)
	}
}