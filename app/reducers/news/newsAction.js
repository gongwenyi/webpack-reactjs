import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import * as ActionTypes from './../../const/ActionTypes';
import data from './indexNews.json';
/**
 * 更新首页的新闻列表
 */
export function updateIndexNews() {
	return dispatch => {
		dispatch(_fetchUpdateIndexNewsStart());
		setTimeout(() => {
			if (data.status === 200) {
				dispatch(_fetchUpdateIndexNewsSuccess(data));
				// console.log(data);
			} else {
				dispatch(_fetchUpdateIndexNewsFaild());
			}
		}, 2000);
	};
}

// 更新首页的新闻列表请求开始
const _fetchUpdateIndexNewsStart = createAction(ActionTypes.FETCH_UPDATEINDEXNEWS_START);

// 更新首页的新闻列表请求成功
const _fetchUpdateIndexNewsSuccess = createAction(ActionTypes.FETCH_UPDATEINDEXNEWS_SUCCESS);

// 更新首页的新闻列表请求失败
const _fetchUpdateIndexNewsFaild = createAction(ActionTypes.FETCH_UPDATEINDEXNEWS_FAILD, (errMsg) => {
	console.log('faild');
});
