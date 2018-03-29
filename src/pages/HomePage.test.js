import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Homepage from "./HomePage";
import sinon from "sinon";

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });


describe( "HomePage renders", () => {
	var
		store,
		wrapper;

	beforeEach(() => {
		store = mockStore();
		wrapper = shallow( <Homepage store={store} /> ).dive();
	});

	it( "Checks that the wrapper renders", () => {
		expect( wrapper.find( "#HomepageWrapper" )).to.have.length( 1 );
	});

	it( "Checks that every child renders", () => {
		expect( wrapper.find( "#HomepageWrapper" ).children()).to.have.length( 5 );
	});

	it( "Checks that the LogoutButton is always rendered", () => {
		expect( wrapper.find( ".logoutButton" )).to.have.length( 1 );
	});

	it( "Checks that the MessageTo input is always rendered", () => {
		expect( wrapper.find( "#MessageTo" )).to.have.length( 1 );
	});

	it( "Checks that the MessagesBox is always rendered", () => {
		expect( wrapper.find( "#MessagesBox" )).to.have.length( 1 );
	});

	it( "Checks that the InputBar is always rendered with 2 children", () => {
		expect( wrapper.find( "#InputBar" )).to.have.length( 1 );
		expect( wrapper.find( "#InputBar" ).children()).to.have.length( 2 );
	});

	it( "Checks that the InputBox is always rendered", () => {
		expect( wrapper.find( "#InputBox" )).to.have.length( 1 );
	});

	it( "Checks that the SendButton is always rendered", () => {
		expect( wrapper.find( ".SendButton" )).to.have.length( 1 );
	});

	it( "Checks that the FriendSidebar is always rendered", () => {
		expect( wrapper.find( "FriendSidebar" )).to.have.length( 1 );
	});
});


describe( "HomePage Inputs", () => {
	var
		store,
		wrapper;

	beforeEach(() => {
		store = mockStore();
		wrapper = shallow( <Homepage store={store} /> ).dive();
	});

	it( "Checks that changing MessageTo changes the state.to", () => {
		const event = { target: { name: "to", value: "test" } };
		expect( wrapper.state( "to" )).to.equal( "" );
		wrapper.find( "#MessageTo" ).simulate( "change", event );
		expect( wrapper.state( "to" )).to.equal( "test" );
	});

	it( "Checks that changing InputBox changes the state.message", () => {
		const event = { target: { name: "message", value: "test" } };
		expect( wrapper.state( "message" )).to.equal( "" );
		wrapper.find( "#InputBox" ).simulate( "change", event );
		expect( wrapper.state( "message" )).to.equal( "test" );
	});
});


describe( "HomePage MessagesBox", () => {
	var
		store,
		wrapper;

	beforeEach(() => {
		store = mockStore();
		wrapper = shallow( <Homepage store={store} /> ).dive();
	});

	it( "Checks that MessagesBox maps state.messagesList", () => {
		expect( wrapper.find( "#MessagesBox" ).children())
			.to.have.length( wrapper.state( "messagesList" ).length );
	});
});
