import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

// gets current state and the action, returns the next state
export default function authenticated( state={}, action={}) {
	switch ( action.type ) {
		case USER_LOGGED_IN:
			return true;
		case USER_LOGGED_OUT:
			return {};
		default:
			return state;
	}
}
