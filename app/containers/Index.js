import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from './../components/IndexPage';
import * as newsActionCreators from './../reducers/news/newsAction';

@connect(
	state => {
		return {
			news: state.newsReducer,
		}
	},
	dispatch => {
		return {
			actions: bindActionCreators(newsActionCreators, dispatch),
		}
	}
)

export default class Index extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<IndexPage actions={this.props.actions} news={this.props.news} />
			</div>
		)
	}
}