import * as ActionTypes from './../../const/ActionTypes';
import InitialState from './newsInitialState';

const initialState = new InitialState();

export default function newsReducer(state=initialState, action) {
	if(!(state instanceof InitialState)) {
		return initialState.mergeDeep(state);
	}

	switch(action.type) {
		case ActionTypes.FETCH_UPDATEINDEXNEWS_START: 														// 更新首页新闻列表请求开始
			return state.setIn(['updateIndexNews', 'isFetching'], true);
		case ActionTypes.FETCH_UPDATEINDEXNEWS_SUCCESS: 													// 更新首页新闻列表成功
			return state.setIn(['updateIndexNews', 'isFetching'], false)
									.setIn(['updateIndexNews', 'data'], action.payload);
		case ActionTypes.FETCH_UPDATEINDEXNEWS_FAILD: 														// 更新首页新闻列表失败
			return state.setIn(['updateIndexNews', 'isFetching'], false);
	}

	return state;
}
