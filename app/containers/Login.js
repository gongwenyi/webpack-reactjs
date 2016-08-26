import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginPage from './../components/LoginPage';
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

export default class Login extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<LoginPage actions={this.props.actions} auth={this.props.auth}/>
			</div>
		)
	}
}