import React, { Component } from 'react';
import NewsInfoPage from './../components/NewsInfoPage';

export default class Help extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	id: this.props.params.id
	  };
	}

	render() {
		return (
			<div>
				<NewsInfoPage id={this.state.id}/>
			</div>
		)
	}
}