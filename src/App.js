import React from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

class App extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
