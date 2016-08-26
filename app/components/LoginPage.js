import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Snackbar from 'material-ui/Snackbar';
// import imgLogo from '../imgs/header.png';
import imgLogo from '../imgs/logo.jpg';

export default class Login extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username: localStorage.getItem('username') ? localStorage.getItem('username') : '',								// 用户名
	  	password: '',								// 密码
	  	submitBtnIsDisabled: true,	// 提交按钮不可点击
	  	refreshStatus: 'hide',			// 提交请求中 loading表示请求中，将显示进度条 hide表示请求结束，隐藏进度条
	  	open: false,									// snackbar 提示是否显示
	  	message: '',								// snackbar 提示内容 
	  };
	}
	/**
	 * 跳转到返回首页
	 */
	_handleLeftClick() {
		this.context.router.push('home/user');
		// this.context.router.goBack();
	}
	/**
	 * 跳转到注册页
	 */
	_handleRightClick() {
		localStorage.setItem('isRegisterSuccess', 'false');
		this.context.router.push('register');
	}
	/**
	 * 用户名输入改变
	 */
	_usernameChange(e) {
		let username = e.target.value;
		this.setState({
			username: username,
			submitBtnIsDisabled: !(username.length>=3 && this.state.password.length>=6),
			open: false
		});
	}
	/**
	 * 密码输入改变
	 */
	_passwordChange(e) {
		let password = e.target.value;
		this.setState({
			password: password,
			submitBtnIsDisabled: !(password.length>=6 && this.state.username.length>=3),
			open: false
		});
	}
	/**
	 * 提交
	 */
	_submit() {
		let username = this.state.username,
				password = this.state.password;
		// this.setState({
		// 	refreshStatus: 'loading'
		// });
		// if (username === 'gwy' && password === '123456') {
		// 	this.setState({
		// 		refreshStatus: 'hide'
		// 	});
		// }
		// 如果用户名或密码不是用户注册时的，就提示错误，否则调用登录方法
		if(username !== localStorage.getItem('username') || password !== localStorage.getItem('password')) {
			this.setState({
				open: true,
				message: '用户名或密码错误',
			});
			return false;
		} else {
			this.props.actions.login(username, password);
		}
	}
	/**
	 * 接收到新的props
	 */
	componentWillReceiveProps(nextProps) {
		if(nextProps.auth.login.isFetching) {
			this.setState({refreshStatus: 'loading'});
		} else {
			this.setState({refreshStatus: 'hide'});
		} 
		// if(nextProps.auth.login.isLoginSuccess) {
		// 	this.context.router.push('home');
		// }
		if(localStorage.getItem('isLogin') === 'true') {
			console.log(localStorage.getItem('isLogin'))	 // string
			console.log(typeof localStorage.getItem('isLogin'))	 // string
			this.context.router.push('home/user');
		}
	}
	
	render() {
		return <div>
						<AppBar
							style={{height: 58}}
					    title={<span style={{fontSize: 18,display: 'block'}}>登录</span>}
					    iconElementLeft={<IconButton onTouchTap={() => this._handleLeftClick()}><NavigationClose /></IconButton>}
					    iconElementRight={<FlatButton onTouchTap={() => this._handleRightClick()} label="注册" />} 
					  />

						<div style={styles.container}>
							<div style={styles.logoBox}>
								<img style={styles.logo} src={imgLogo} />
							</div>
							
							<TextField
					      hintText="请输入用户名"
					      value={this.state.username}
					      fullWidth={true}
								onChange={(e) => this._usernameChange(e)} 
							/>

					    <TextField
					      hintText="请输入密码"
					      value={this.state.password}
					      fullWidth={true}
					      type="password"
								onChange={(e) => this._passwordChange(e)} 
							/>

					    <RaisedButton
					    	style={styles.raisedBtn}
								label="登录"
								primary={true}
								fullWidth={true}
								disabled={this.state.submitBtnIsDisabled}
								onClick={() => this._submit()} 
							/>

							{/*<div style={styles.bottomText}>
								没有账号？<Link to="register">注册</Link>
							</div>*/}
							
							<div style={styles.refreshBox}>
						    <RefreshIndicator
						      size={40}
						      left={0}
						      top={0}
						      status={this.state.refreshStatus}
						      style={styles.refresh} 
						    />
						  </div>
				   	</div>

				   	<Snackbar
		          open={this.state.open}
		          message={this.state.message}
		          autoHideDuration={4000}
		        />	
				   </div>
	}
}

Login.contextTypes={
	router: React.PropTypes.object
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
	},
	logoBox: {
		width: 120,
		height: 120,
		marginBottom: 30,
		// borderRadius: '100%',
		// borderWidth: 2,
		// borderColor: '#00bcd4',
		// borderStyle: 'solid',
		// overflow: 'hidden',
	},
	logo: {
		width: '100%',
	},
	raisedBtn: {
		marginTop: 15,
	},
	bottomText: {
		alignSelf: 'flex-end',
		marginTop: 20,
		fontSize: 14,
		color: '#999',
	},
	refreshBox: {
    position: 'relative',
    marginTop: 30,
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
}