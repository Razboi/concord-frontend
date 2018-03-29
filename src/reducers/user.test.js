import { expect } from "chai";
import { userLoggedIn, userLoggedOut } from "../actions/auth";
import authenticated from "./user";

describe( "user reducer", () => {
	it( "expect to return false", () => {
		expect( authenticated( undefined, {})).to.equal( false );
	});

	it( "expect to return false", () => {
		expect( authenticated( undefined, userLoggedOut())).to.equal( false );
	});

	it( "expect to return true", () => {
		expect( authenticated( undefined, userLoggedIn())).to.equal( true );
	});
});
