import { Record } from 'immutable';

const LoginInitialState = new Record({
	isFetching: false,
	isLoginSuccess: false,
});

const RegisterInitialState = new Record({
	isFetching: false,
	isRegisterSuccess: false,
});

const InitialState = new Record({
	login: new LoginInitialState(),
	register: new RegisterInitialState(),
});

export default InitialState;
