import { expect } from "chai";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import authenticated from "./user";

describe( "user reducer", () => {
	it( "expect to return false", () => {
		expect( authenticated( undefined, {})).to.equal( false );
	});

	it( "expect to return false", () => {
		expect( authenticated( undefined, { type: USER_LOGGED_OUT })).to.equal( false );
	});

	it( "expect to return true", () => {
		expect( authenticated( undefined, { type: USER_LOGGED_IN })).to.equal( true );
	});
});
