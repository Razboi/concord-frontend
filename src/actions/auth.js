import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedIn = () => ({
	type: USER_LOGGED_IN
});

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
});

export const oauth = profile => dispatch =>
api.oauth( profile ).then( token => {
	if ( token ) {
		localStorage.setItem("token", token );
		dispatch( userLoggedIn() );
	}
});

export const signup = credentials => dispatch =>
api.signup( credentials ).then( token => {
	if ( token ) {
		localStorage.setItem("token", token );
		dispatch( userLoggedIn() );
	}
});

export const login = credentials => dispatch =>
api.login( credentials ).then( token => {
	if ( token ) {
		localStorage.setItem("token", token );
		dispatch( userLoggedIn() );
	}
});

export const logout = () => dispatch => {
	localStorage.removeItem("token");
	dispatch( userLoggedOut() );
};
