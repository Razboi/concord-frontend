import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import LoginPage from "./LoginPage";
import sinon from "sinon";
import createBrowserHistory from "history/createBrowserHistory";

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe( "LoginPage renders", () => {
	var
		store,
		history,
		wrapper;

	beforeEach(() => {
		store = mockStore();
		history = createBrowserHistory();
		wrapper = shallow( <LoginPage store={store} history={history} /> ).dive();
	});

	it( "MainWrapper renders with all the children", () => {
		expect( wrapper.find( "#MainWrapper" )).to.have.length( 1 );
		expect( wrapper.find( "#MainWrapper" ).children()).to.have.length( 1 );
	});

	it( "FormWrapper renders with all the children", () => {
		expect( wrapper.find( "#FormWrapper" )).to.have.length( 1 );
		expect( wrapper.find( "#FormWrapper" ).children()).to.have.length( 6 );
	});

	it( "switchFormButton renders", () => {
		expect( wrapper.find( ".switchFormButton" )).to.have.length( 1 );
	});

	it( "formHeader renders", () => {
		expect( wrapper.find( ".formHeader" )).to.have.length( 1 );
	});

	it( "AuthForm renders with all the children", () => {
		expect( wrapper.find( "#AuthForm" )).to.have.length( 1 );
		expect( wrapper.find( "#AuthForm" ).children()).to.have.length( 3 );
	});

	it( "inputs on AuthForm render", () => {
		expect( wrapper.find( ".authInput" )).to.have.length( 2 );
	});

	it( "loginButton renders", () => {
		expect( wrapper.find( ".loginSignupButton" )).to.have.length( 1 );
	});

	it( "separator renders", () => {
		expect( wrapper.find( ".separator" )).to.have.length( 1 );
	});

	it( "oauthButton renders", () => {
		expect( wrapper.find( ".oauthButton" )).to.have.length( 2 );
	});
});


describe( "LoginPage Inputs", () => {
	var
		store,
		history,
		wrapper;

	beforeEach(() => {
		store = mockStore();
		history = createBrowserHistory();
		wrapper = shallow( <LoginPage store={store} history={history} /> ).dive();
	});

	it( "tests that email input changes state.email", () => {
		const event = { target: { name: "email", value: "test@test.com" } };
		wrapper.find( ".authInput.email" ).simulate( "change", event );
		expect( wrapper.state( "email" )).to.equal( "test@test.com" );
	});

	it( "tests that password input changes state.password", () => {
		const event = { target: { name: "password", value: "testing" } };
		wrapper.find( ".authInput.password" ).simulate( "change", event );
		expect( wrapper.state( "password" )).to.equal( "testing" );
	});
});


describe( "LoginPage Login/Signup switching", () => {
	var
		store,
		history,
		wrapper;

	beforeEach(() => {
		store = mockStore();
		history = createBrowserHistory();
		wrapper = shallow( <LoginPage store={store} history={history} /> ).dive();
	});

	it( "switchFormButton button changes", () => {
		expect( wrapper.find( ".switchFormButton" ).props().content ).to.equal( "Sign up" );
		wrapper.find( ".switchFormButton" ).simulate( "click" );
		expect( wrapper.find( ".switchFormButton" ).props().content ).to.equal( "Log In" );
	});

	it( "formHeader changes", () => {
		expect( wrapper.find( ".formHeader" ).props().content ).to.equal( "Log In to Concord" );
		wrapper.find( ".switchFormButton" ).simulate( "click" );
		expect( wrapper.find( ".formHeader" ).props().content ).to.equal( "Sign Up to Concord" );
	});

	it( "login/signup button changes", () => {
		expect( wrapper.find( ".loginSignupButton" ).props().content ).to.equal( "Log In" );
		wrapper.find( ".switchFormButton" ).simulate( "click" );
		expect( wrapper.find( ".loginSignupButton" ).props().content ).to.equal( "Sign Up" );
	});
});
