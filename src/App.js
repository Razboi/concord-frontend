import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
			<div>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/login" component={LoginPage} />
			</div>
    );
  }
}

export default App;
