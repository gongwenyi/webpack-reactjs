import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterPage from './../components/RegisterPage';
import * as authActionCreators from './../reducers/auth/authAction';

@connect(
	state => {
		return {
			auth: state.authReducer,
		}
	},
	dispatch => {
		return {
			actions: bindActionCreators(authActionCreators, dispatch),
		}
	}
)

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<RegisterPage actions={this.props.actions} auth={this.props.auth} />
			</div>
		);
	}
}
