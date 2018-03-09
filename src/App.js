import React from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");



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
	};

	handleChange = (e) => {
		this.setState({ [ e.target.name ]: e.target.value });
	};

  render() {
		console.log( this.state.messagesList );
    return (
      <div>
				<div>
					{this.state.messagesList.map( message =>
						<span>{message}<br/></span>
					)}
				</div>
				<input name="message" onChange={this.handleChange} />
				<button onClick={this.sendMessage}>Send message</button>
      </div>
    );
  }
}

export default App;
