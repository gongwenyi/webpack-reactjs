import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import * as ActionTypes from './../../const/ActionTypes';
import data from './login.json';

/**
 * 用户注册
 * username string 用户名
 * password string 密码
 */
export function register(username, password) {
	return dispatch => {
		dispatch(_fetchRegisterStart());
		
		dispatch(_fetchRegisterSuccess(username, password));
	}
}
// 注册请求开始
const _fetchRegisterStart = createAction(ActionTypes.FETCH_REGISTER_START);

// 注册请求成功
const _fetchRegisterSuccess = createAction(ActionTypes.FETCH_REGISTER_SUCCESS, (username, password) => {
	console.log('register success');
	// 如果用户注册成功，本地存储用户的数据，注意：只能存储字符串，其他类型的数据都会隐式调用toString转成字符串
	localStorage.setItem('isRegisterSuccess', 'true');
	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
});

// 注册请求失败
const _fetchRegisterFaild = createAction(ActionTypes.FETCH_REGISTER_FAILD, (errMsg) => {
	console.log('login faild');
});
/**
 *用户登录
 */
// export function login(username, password) {
// 	return dispatch => {
// 		console.log(loginJson);
// 		dispatch(_fetchLoginStart());
// 		return fetch('./login.json')
// 			.then(response => response.json())
// 			.then(data => {
// 				console.log(data);
// 				if(data.status === 200) {
// 					dispatch(_fetchLoginSuccess(data));
// 				} else {
// 					dispatch(_fetchLoginFaild(data.errMsg));
// 				}
// 			})
// 			.catch(err => {
// 				console.log('error');
// 			});
// 	}
// }

export function login(username, password) {
	return dispatch => {
		dispatch(_fetchLoginStart());
		setTimeout(() => {
			if(data.status == 200) {
				dispatch(_fetchLoginSuccess(data));
			} else {
				dispatch(_fetchLoginFaild())
			}
		}, 2000);
	}
}

// 登录请求开始
const _fetchLoginStart = createAction(ActionTypes.FETCH_LOGIN_START);

// 登录请求成功
const _fetchLoginSuccess = createAction(ActionTypes.FETCH_LOGIN_SUCCESS, (data) => {
	console.log('login success');
	// 如果用户登录成功，本地存储用户的数据，注意：只能存储字符串，其他类型的数据都会隐式调用toString转成字符串
	localStorage.setItem('isLogin', 'true');
	// localStorage.setItem('username', data.username);
	// localStorage.setItem('phone', data.phone);
});

// 登录请求失败
const _fetchLoginFaild = createAction(ActionTypes.FETCH_LOGIN_FAILD, (errMsg) => {
	console.log('login faild');
});