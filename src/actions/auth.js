import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const
	userLoggedIn = () => ({
		type: USER_LOGGED_IN
	}),

	userLoggedOut = () => ({
		type: USER_LOGGED_OUT
	}),

	oauth = googleToken => dispatch =>
		api.oauth( googleToken ).then( token => {
			if ( token ) {
				localStorage.setItem( "token", token );
				dispatch( userLoggedIn());
			}
		}),

	signup = credentials => dispatch =>
		api.signup( credentials ).then( token => {
			if ( token ) {
				localStorage.setItem( "token", token );
				dispatch( userLoggedIn());
			}
		}),

	login = credentials => dispatch =>
		api.login( credentials ).then( token => {
			if ( token ) {
				localStorage.setItem( "token", token );
				dispatch( userLoggedIn());
			}
		}),

	logout = () => dispatch => {
		localStorage.removeItem( "token" );
		dispatch( userLoggedOut());
	};
