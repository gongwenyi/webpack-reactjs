import React, { Component } from 'react';
import HotPage from './../components/HotPage';

export default class Hot extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<HotPage />
			</div>
		)
	}
}