import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import ReactPullToRefresh from 'react-pull-to-refresh';

let count = 1;
export default class About extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	 items: [
        <div key={'item-' + count}>Item {count++}</div>
      ]
	  };
	}

	_handleLeftClick() {
		// this.context.router.push('home/user');
		this.context.router.goBack();
	}

	handleRefresh(resolve, reject) {
    let self = this;
    setTimeout(function () {
      self.addItem() ? resolve() : reject();
    }, 500);
  }

  addItem() {
    this.state.items.push(<div key={'item-' + count}>Item {count++}</div>);
    this.setState({
      items: this.state.items
    });
    return true;
  }

	render() {
		return (
			<div style={{height: '100%'}}>
				<AppBar
					style={{position: 'fixed', top: 0, height: 58}}
			    title={<span style={{fontSize: 18,display: 'block'}}>关于我们</span>}
			    iconElementLeft={<IconButton onTouchTap={() => this._handleLeftClick()}><NavigationArrowBack /></IconButton>} 
			  />
			  <div style={{paddingTop: 60}}>
			  	<ReactPullToRefresh 
				  	onRefresh={(resolve, reject) => this.handleRefresh(resolve, reject)} 
				  	style={{textAlign: 'center'}}
			  	>
		        <h3>下拉刷新</h3>
		        <div>
		          {this.state.items}
		        </div>
		      </ReactPullToRefresh>
			  </div>
			</div>
		)
	}
}

About.contextTypes={
	router: React.PropTypes.object
}