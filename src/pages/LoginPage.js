import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";

class LoginPage extends React.Component {

	render() {
		return (
			<Container>
				<h2>Login Page</h2>
				<Link to="/">Back to home</Link>
				<a href="http://localhost:8000/oauth/google">
					<Button primary content="Login with Google+" />
				</a>
			</Container>
		);
	}
};

export default LoginPage;
