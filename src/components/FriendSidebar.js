import React from "react";
import { Input, Button } from "semantic-ui-react";
import styled from "styled-components";

const
	Wrapper = styled.div`
		position: absolute;
		right: 0px;
		top: 0px;
		border: 1px solid #808080;
		height: 100%;
		padding: 0px 15px;
	`;

class FriendSidebar extends React.Component {
	render() {
		return (
			<Wrapper>
				<Input placeholder="Username" />
				<Button primary content="Add Friend" />
				<h3>Friends</h3>

			</Wrapper>
		);
	}
}

export default FriendSidebar;
