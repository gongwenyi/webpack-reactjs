import React, { Component } from 'react';
import { Link } from 'react-router';
import WellcomePage from './../components/WellcomePage';

export default class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<div style={styles.nav}>
						<Link activeStyle={{color: '#fff'}} style={styles.navItem} to="home/index">首页</Link>
						<Link activeStyle={{color: '#fff'}} style={styles.navItem} to="home/hot">热门</Link>
						<Link activeStyle={{color: '#fff'}} style={styles.navItem} to="home/user">我</Link>
				</div>
				{this.props.children || <WellcomePage />}
			</div>
		)
	}
}

const styles= {
	nav: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1000,
		position: 'fixed',
		left: 0,
		bottom: 0,
		width: '100%',
		backgroundColor: '#00bcd4',
	},
	navItem: {
		flex: 1,
		textAlign: 'center',
		// borderWidth: 1,
		// borderColor: '#ccc',
		// borderStyle: 'solid',
		paddingTop: 15,
		paddingBottom: 15,
		color: '#ddd',
		textDecoration: 'none',
	},

}