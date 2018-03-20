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
	console.log("oauth");
	localStorage.setItem("token", token );
	dispatch( userLoggedIn() );
});

export const login = credentials => dispatch =>
api.login( credentials ).then( token => {
	localStorage.setItem("token", token );
	dispatch( userLoggedIn() );
});

export const logout = () => dispatch => {
	console.log("out");
	localStorage.removeItem("token");
	dispatch( userLoggedOut() );
};
