import { Record } from 'immutable';

const UpdateIndexNewsInitialState = Record({
	isFetching: false,
	data: [],
});

let InitialState = Record({
	updateIndexNews: new UpdateIndexNewsInitialState(),
});

export default InitialState;