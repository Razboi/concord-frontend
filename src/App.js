import React from "react";
import openSocket from "socket.io-client";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

const socket = openSocket("http://192.168.1.15:8000");

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const MessagesBox = styled.div`
	border: 1px solid #808080;
	width: 500px;
	min-height: 500px;
	margin: 0px auto;
`;

const InputBar = styled.div`
	margin: 0px auto;
`;

const InputBox = styled( Input )`
	width: 400px;
`;

const SendButton = styled( Button )`
	width: 100px;
`;

const Username = styled( Input )`
	width: 200px;
`;

const ChangeUsername = styled( Button )`
	width: 100px;
`;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			message: "",
			messagesList: []
		};
	}

	componentDidMount() {
		socket.on("newMessage", data => {
			// the new messages list is the current messages list + the new data
			var newMessages = this.state.messagesList;
			newMessages.push( data );
			this.setState({ messagesList: newMessages });
		});
	}

	sendMessage = () => {
		socket.emit("newMessage", this.state.message );
		this.setState({ message: "" });
	};

	handleChange = (e) => {
		this.setState({ [ e.target.name ]: e.target.value });
	};

	changeUsername = () => {
		socket.emit("changeUsername", this.state.username );
	};

	handleKeyPress = (e) => {
		if ( e.key === "Enter" ) {
			this.sendMessage();
		}
	};

  render() {
    return (
      <Wrapper>
				<Username name="username" label="Username" onChange={this.handleChange} />
				<ChangeUsername secondary content="Change" onClick={this.changeUsername} />
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
      </Wrapper>
    );
  }
}

export default App;
