import { Record } from 'immutable';

const LoginInitialState = Record({
	isFetching: false,
	isLoginSuccess: false,
});

const RegisterInitialState = Record({
	isFetching: false,
	isRegisterSuccess: false,
});

let InitialState = Record({
	login: new LoginInitialState(),
	register: new RegisterInitialState(),
});

export default InitialState;