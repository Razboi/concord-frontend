import React from "react";
import openSocket from "socket.io-client";
import styled from "styled-components";
import { Input, Button, Container } from "semantic-ui-react";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FriendSidebar from "../components/FriendSidebar";

const
	socket = openSocket( "http://192.168.1.15:8000" ),

	Wrapper = styled( Container )`
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	padding-top: 40px;
`,
	MessagesBox = styled.div`
	border: 1px solid #808080;
	width: 500px;
	min-height: 500px;
	margin: 0px auto;
`,
	InputBar = styled.div`
	margin: 0px auto;
`,
	InputBox = styled( Input )`
	width: 400px;
`,
	SendButton = styled( Button )`
	width: 100px;
`,
	LogoutButton = styled( Button )`
		width: 100px;
		position: absolute;
		left: 20px;
		top: 20px;
	`,
	MessageTo = styled( Input )`
		position: absolute !important;
		top: 0px;
		width: 120px;
	`;

class Homepage extends React.Component {
	constructor() {
		super();
		this.state = {
			message: "",
			to: "",
			messagesList: []
		};
	}

	componentDidMount() {
		socket.emit( "register", localStorage.token );

		socket.on( "newMessage", data => {
			// the new messages list is the current messages list + the new data
			var newMessages = this.state.messagesList;
			newMessages.push( data );
			this.setState({ messagesList: newMessages });
		});
	}

	sendMessage = () => {
		const data = { message: this.state.message, to: this.state.to };
		socket.emit( "newMessage", data );
		this.setState({ message: "" });
	};

	handleChange = ( e ) => {
		this.setState({ [ e.target.name ]: e.target.value });
	};

	handleKeyPress = ( e ) => {
		if ( e.key === "Enter" ) {
			this.sendMessage();
		}
	};

	handleLogout = () => {
		this.props.logout();
	};

	render() {
		return (
			<Wrapper>
				<LogoutButton
					secondary
					content="Logout"
					onClick={this.handleLogout}
				/>
				<MessageTo
					label="To"
					placeholder="username"
					onChange={this.handleChange}
					name="to"
				/>
				<MessagesBox>
					{this.state.messagesList.map( message =>
						<span>{message}<br/></span>
					)}
				</MessagesBox>
				<InputBar>
					<InputBox
						name="message"
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
						value={this.state.message}
					/>
					<SendButton primary onClick={this.sendMessage}>Send</SendButton>
				</InputBar>

				<FriendSidebar />
			</Wrapper>
		);
	}
}

Homepage.propTypes = {
	logout: PropTypes.func.isRequired
};

export default connect( null, { logout })( Homepage );
