import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Route } from "react-router-dom";
import UserRoute from "./components/routes/UserRoute";

class App extends React.Component {
  render() {
    return (
			<div>
				<UserRoute exact path="/" component={HomePage} />
				<Route path="/login" component={LoginPage} />
			</div>
    );
  }
}

export default App;
