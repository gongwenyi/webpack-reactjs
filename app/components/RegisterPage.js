import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Checkbox from 'material-ui/Checkbox';
// import imgLogo from '../imgs/header.png';
import imgLogo from '../imgs/logo.jpg';

export default class Register extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username: '',								// 用户名
	  	password: '',								// 密码
	  	password2: '',							// 确认密码
	  	passwordType: 'password',		// 密码输入框类型 text显示原文  password显示密文
	  	submitBtnIsDisabled: true,	// 提交按钮不可点击
	  	refreshStatus: 'hide',			// 提交请求中 loading表示请求中，将显示进度条 hide表示请求结束，隐藏进度条
	  };
	}
	_handleLeftClick() {
		// this.context.router.push('login');
		this.context.router.goBack();
	}
	// _handleRightClick() {
	// 	this.context.router.push('login');
	// }
	/**
	 * 用户名输入改变
	 */
	_usernameChange(e) {
		let username = e.target.value;
		this.setState({
			username: username,
			submitBtnIsDisabled: !(username.length>=3 && this.state.password.length>=6 && this.state.password2.length>=6)
		});
	}
	/**
	 * 密码输入改变
	 */
	_passwordChange(e) {
		let password = e.target.value;
		this.setState({
			password: password,
			submitBtnIsDisabled: !(password.length>=6 && this.state.username.length>=3 && this.state.password2.length>=6)
		});
	}
	/**
	 * 确认密码输入改变
	 */
	_password2Change(e) {
		let password2 = e.target.value;
		this.setState({
			password2: password2,
			submitBtnIsDisabled: !(password2.length>=6 && this.state.username.length>=3 && password2 === this.state.password)
		});
	}
	/**
	 * 显示或隐藏密码
	 * e                 element   触发事件的checkbox
	 * isInputChecked    bool      是否选中
	 */
	_handleCheckbox(e, isInputChecked) {
		if(isInputChecked) {
			this.setState({passwordType: 'text'});
		} else {
			this.setState({passwordType: 'password'});
		}
	}
	/**
	 * 提交
	 */
	_submit() {
		let username = this.state.username,
				password = this.state.password,
				password2 = this.state.password2;
		
		this.props.actions.register(username, password);
	}
	/**
	 * 接收到新的props
	 */
	componentWillReceiveProps(nextProps) {
		if(nextProps.auth.register.isFetching) {
			this.setState({refreshStatus: 'loading'});
		} else {
			this.setState({refreshStatus: 'hide'});
		}

		// if(nextProps.auth.register.isRegisterSuccess) {
		// 	this.context.router.push('login');
		// }
		if(localStorage.getItem('isRegisterSuccess') === 'true') {
			this.context.router.push('login');
		}
	}
	
	render() {
		return <div>
						<AppBar
							style={{height: 58}}
					    title={<span style={{fontSize: 18,display: 'block'}}>注册</span>}
					    iconElementLeft={<IconButton onTouchTap={() => this._handleLeftClick()}><NavigationClose /></IconButton>}
					    /*iconElementRight={<FlatButton onTouchTap={() => this._handleRightClick()} label="登录" />}*/
					  />

						<div style={styles.container}>
							<div style={styles.logoBox}>
								<img style={styles.logo} src={imgLogo} />
							</div>
							
							<TextField
					      hintText="请输入用户名(至少3位)"
					      value={this.state.username}
					      fullWidth={true}
					      type={'text'}
								onChange={(e) => this._usernameChange(e)}
							/>

					    <TextField
					      hintText="请输入密码(至少6位)"
					      value={this.state.password}
					      fullWidth={true}
					      type={this.state.passwordType}
								onChange={(e) => this._passwordChange(e)} 
							/>

							<TextField
					      hintText="请确认密码"
					      value={this.state.password2}
					      fullWidth={true}
					      type={this.state.passwordType}
								onChange={(e) => this._password2Change(e)} 
							/>

							<Checkbox
					      label="显示密码"
					      style={styles.checkbox}
					      iconStyle={styles.checkboxIcon}
					      labelStyle={styles.checkboxLabel}
					      onCheck={(e, isInputChecked) => this._handleCheckbox(e, isInputChecked)}
					    />

					    <RaisedButton
					    	style={styles.raisedBtn}
								label="注册"
								primary={true}
								fullWidth={true}
								disabled={this.state.submitBtnIsDisabled}
								onClick={() => this._submit()} 
							/>

							{/*<div style={styles.bottomText}>
								已有账号？<Link to="login">登录</Link>
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
				  </div>
	}
}

Register.contextTypes={
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
	checkbox: {
		marginTop: 5,
		marginBottom: 5,
	},
	checkboxIcon: {
		marginRight: 5,
	},
	checkboxLabel: {
		fontSize: 14,
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