import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe( "<App />", () => {
	it( "checks that App renders with childs", () => {
		const wrapper = shallow( <App /> );
		expect( wrapper.find( "div" ).children()).to.have.length( 2 );
	});
});
