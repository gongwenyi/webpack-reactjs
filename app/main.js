import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// import * as reducers from './reducers/index';	// 使用扩展运算符...reducers编译报错，所以使用下面的方式引入
import { authReducer, newsReducer } from './reducers/index';

import App from './containers/App';
import Home from './containers/Home';
import Index from './containers/Index';
import Hot from './containers/Hot';
import NewsInfo from './containers/NewsInfo';
import User from './containers/User';
import Login from './containers/Login';
import Register from './containers/Register';
import Setting from './containers/Setting';
import Help from './containers/Help';
import About from './containers/About';

// 创建store 并且Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
		authReducer,
		newsReducer,
		routing: routerReducer,
  }),
  applyMiddleware(
    reduxThunkMiddleware 									// 允许我们 dispatch() 函数
  )
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>

				<IndexRoute component={Home} />

				<Route path="home" component={Home}>
					<Route path="index" component={Index} />
					<Route path="hot" component={Hot} />
					<Route path="user" component={User} />
				</Route>

				<Route path="newsInfo/:id" component={NewsInfo} />

				<Route path="login" component={Login} />
				<Route path="register" component={Register} />
				<Route path="setting" component={Setting} />
				<Route path="help" component={Help} />
				<Route path="about" component={About} />

			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
