import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionCopyright from 'material-ui/svg-icons/action/copyright';
import ActionHelpOutline from 'material-ui/svg-icons/action/help-outline';
import Divider from 'material-ui/Divider';
import imgLogo from '../imgs/header.png';

export default class HomeUser extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isLogin: false,		// 用户是否登录
	  	username: '',			// 用户名
	  	password: '',				// 手机号
	  };
	}
	/*
	 * 组件开始渲染之前判断用户是否已经登录
	 */
	componentWillMount() {
		if(localStorage.getItem('isLogin') === 'true') {		// 如果用户登录成功
			this.setState({
				isLogin: true,
				username: localStorage.getItem('username'),
				password: localStorage.getItem('password'),
			});
		}
	}
	/*
	 * 登录 跳转到登录页
	 */
	_handleLogin() {
		this.context.router.push('login');
	}
	/*
	 * 退出 
	 */
	_handleLogout() {
		localStorage.setItem('isLogin', 'false');
		this.setState({
			isLogin: false,
		})
	}

	render() {
		// 如果用户登录成功，显示用户名和手机号，否则显示登录按钮
		var userInfo = '';	
		if(this.state.isLogin) {
			userInfo = (
				<div style={styles.userInfoBox}>
					<p style={styles.userInfo}>{this.state.username}</p>
					<p style={styles.userInfo}>{this.state.password}</p>
					<RaisedButton 
						style={styles.logoutBtn}
						label="退出" 
						onClick={() => this._handleLogout()}
					/>
				</div>
			);
		} else {
			userInfo = (
				<RaisedButton 
					label="登录" 
					primary={true} 
					onClick={() => this._handleLogin()} 
				/>
			);
		}
		return (
			<div style={styles.content}>
				<div style={styles.logoBox}>
					<img style={styles.logo} src={imgLogo} />
				</div>

				{userInfo}

				<div style={styles.listBox}>
					<List>
						<Divider />
			      <Link style={styles.links} to="setting">
			      	<ListItem primaryText="设置" leftIcon={<ActionSettings />} />
			      </Link>

			      <Divider />
			      <Link style={styles.links} to="help">
			      	<ListItem primaryText="帮助" leftIcon={<ActionHelpOutline />} />
			      </Link>

			      <Divider />
			      <Link style={styles.links} to="about">
			      	<ListItem primaryText="关于我们" leftIcon={<ActionCopyright />} />
			      </Link>

			      <Divider />
			    </List>
				</div>
				
			</div>
		)
	}
}

HomeUser.contextTypes={
	router: React.PropTypes.object
}

const styles = {
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 50,
	},
	logoBox: {
		width: 120,
		height: 120,
		marginBottom: 20,
		borderRadius: '100%',
		// borderWidth: 2,
		// borderColor: '#00bcd4',
		// borderStyle: 'solid',
		overflow: 'hidden',
	},
	logo: {
		width: '100%',
	},
	userInfoBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	userInfo: {
		marginTop: 6,
		marginBottom: 6,
	},
	logoutBtn: {
		marginTop: 20,
	},
	listBox: {
		width: '100%',
		marginTop: 50,
	},
	links: {
		textDecoration: 'none',
	}
}