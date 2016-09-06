import * as ActionTypes from './../../const/ActionTypes';
import InitialState from './authInitialState';

const initialState = new InitialState();

export default function authReducer(state = initialState, action) {
	if (!(state instanceof InitialState)) {
		return initialState.mergeDeep(state);
	}

	switch (action.type) {
		case ActionTypes.FETCH_LOGIN_START: 														// 登录请求开始
			return state.setIn(['login', 'isFetching'], true);
		case ActionTypes.FETCH_LOGIN_SUCCESS: 													// 登录成功
			return state.setIn(['login', 'isFetching'], false)
									.setIn(['login', 'isLoginSuccess'], true);
		case ActionTypes.FETCH_LOGIN_FAILD: 														// 登录失败
			return state.setIn(['login', 'isFetching'], false)
									.setIn(['login', 'isLoginSuccess'], false);
		case ActionTypes.FETCH_REGISTER_START: 														// 注册请求开始
			return state.setIn(['register', 'isFetching'], true);
		case ActionTypes.FETCH_REGISTER_SUCCESS: 													// 注册成功
			return state.setIn(['register', 'isFetching'], false)
									.setIn(['register', 'isRegisterSuccess'], true);
		case ActionTypes.FETCH_REGISTER_FAILD: 														// 注册失败
			return state.setIn(['register', 'isFetching'], false)
									.setIn(['register', 'isRegisterSuccess'], false);
		// no default
	}

	return state;
}
