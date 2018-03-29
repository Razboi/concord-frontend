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
	`,
	AddFriendForm = styled.span`
		flex-direction: row;
	`;

class FriendSidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			addFriend: ""
		};
	}
	clearAndSend = ( e ) => {
		const friend = this.state.addFriend;
		this.setState({ addFriend: "" });
		this.props.addFriend( friend );
	};

	handleChange = ( e ) =>
		this.setState({ [ e.target.name ]: e.target.value });

	changeReceiver = ( receiver ) => {
		this.props.setReceiver( receiver );
	}

	render() {
		return (
			<Wrapper id="FriendSidebarWrapper">
				<AddFriendForm id="AddFriendForm">
					<Input
						id="AddFriendInput"
						name="addFriend"
						placeholder="Username"
						onChange={this.handleChange}
						value={this.state.addFriend}
					/>
					<Button
						className="addFriendButton"
						primary
						content="Add Friend"
						onClick={this.clearAndSend}
					/>
				</AddFriendForm>
				<h3>Friends</h3>
				<div id="FriendsContainer">
					{this.props.friends.map(( friend, index ) =>
						<span key={index} onClick={() => this.changeReceiver( friend )}>
							{ friend }<br/>
						</span>
					)}
				</div>
			</Wrapper>
		);
	}
}

export default FriendSidebar;
