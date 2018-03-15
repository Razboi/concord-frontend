import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import axios from "axios";

class LoginPage extends React.Component {

	handleOauth = () => {
		axios.get("http://localhost:8000/oauth/google")
		.then( res => console.log( res ) )
		.catch( err => console.log( err ) );
	};

	render() {
		return (
			<Container>
				<h2>Login Page</h2>
				<Link to="/">Back to home</Link>

				<Button onClick={this.handleOauth} primary content="Login with Google+" />
			</Container>
		);
	}
};

export default LoginPage;
