import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';

export default class Help extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	_handleLeftClick() {
		// this.context.router.push('home/user');
		this.context.router.goBack();
	}

	render() {
		return (
			<div>
				<AppBar
					style={{position: 'fixed', top: 0, height: 58}}
			    title={<span style={{fontSize: 18,display: 'block'}}>帮助</span>}
			    iconElementLeft={<IconButton onTouchTap={() => this._handleLeftClick()}><NavigationClose /></IconButton>}
			  />
			  <div style={{paddingTop: 60}}>
			  	<p>帮助页面</p>
			  </div>
			</div>
		)
	}
}

Help.contextTypes={
	router: React.PropTypes.object
}