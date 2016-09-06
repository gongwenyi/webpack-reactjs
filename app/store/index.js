import { createStore, applyMiddleware, combineRedcers } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/index';

export default function createStore(initialState): Store {
	const store = createStore(
		combineReducers({ ... reducers }),	// 所有的reduce
		applyMiddleware(
	    reduxThunkMiddleware, 									// 允许我们 dispatch() 函数
	  )
	);
	return store;
}
