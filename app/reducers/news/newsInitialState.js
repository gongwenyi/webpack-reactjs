import { Record } from 'immutable';

const UpdateIndexNewsInitialState = new Record({
	isFetching: false,
	data: [],
});

const InitialState = new Record({
	updateIndexNews: new UpdateIndexNewsInitialState(),
});

export default InitialState;
