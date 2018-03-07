import React from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			message: ""
		};
	}
	sendMessage = () => {
		socket.emit("newMessage", this.state.message );
		console.log("Sended");
	};

	handleChange = (e) => {
		this.setState({ [ e.target.name ]: e.target.value });
	};

  render() {
    return (
      <div>
				<input name="message" onChange={this.handleChange} />
				<button onClick={this.sendMessage}>Send message</button>
      </div>
    );
  }
}

export default App;
