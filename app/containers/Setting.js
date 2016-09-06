import React, { Component } from 'react';
import SettingPage from './../components/SettingPage';

export default class Setting extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<SettingPage />
			</div>
		);
	}
}
