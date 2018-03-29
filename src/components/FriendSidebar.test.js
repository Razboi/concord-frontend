import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import FriendSidebar from "./FriendSidebar";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

describe( "FriendSidebar renders", () => {
	var
		friends = [ "test", "test2" ],
		addFriend,
		setReceiver,
		wrapper;

	beforeEach(() => {
		addFriend = sinon.spy();
		setReceiver = sinon.spy();
		wrapper = shallow( <FriendSidebar
			addFriend={addFriend}
			friends={friends}
			setReceiver={setReceiver} /> );
	});

	it( "expects wrapper and all the children to render", () => {
		expect( wrapper.find( "#FriendSidebarWrapper" )).to.have.length( 1 );
		expect( wrapper.find( "#FriendSidebarWrapper" ).children()).to.have.length( 3 );
	});

	it( "expects all AddFriendForm children to render", () => {
		expect( wrapper.find( "#AddFriendForm" ).children()).to.have.length( 2 );
	});

	it( "expects all FriendsContainer to map props.friends", () => {
		expect( wrapper.find( "#FriendsContainer" ).children()).to.have.length( friends.length );
	});

	it( "expects state.addFriend to change when input changes", () => {
		const event = { target: { name: "addFriend", value: "test" } };
		wrapper.find( "#AddFriendInput" ).simulate( "change", event );
		expect( wrapper.state( "addFriend" )).to.equal( "test" );
	});

	it( "expects addFriend to be called when addFriendButton is clicked", () => {
		wrapper.find( ".addFriendButton" ).simulate( "click" );
		expect( addFriend.called ).to.equal( true );
	});

	it( "expects setReceiver to be called when any child of FriendsContainer is clicked", () => {
		wrapper.find( "#FriendsContainer" ).children().first().simulate( "click" );
		expect( setReceiver.called ).to.equal( true );
	});
});
