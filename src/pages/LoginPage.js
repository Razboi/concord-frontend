import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import SECRET_KEYS from "../keys";

class LoginPage extends React.Component {

	responseGoogle = res =>  {
		axios({
			method: "post",
			url: "oauth/google",
			data: { profile: res.profileObj }
		})
		.then( res => localStorage.setItem("token", res.data ) )
		.catch( err => console.log( err ) );
	};

	logout = () => {
		localStorage.removeItem("token");
	};

	render() {
		return (
			<Container>
				<h2>Login Page</h2>
				<Link to="/">Back to home</Link>

				<GoogleLogin
					clientId={SECRET_KEYS.clientId}
					buttonText="Login with google"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
				/>
				<GoogleLogout
					buttonText="Logout"
					onLogoutSuccess={this.logout}
				>
				</GoogleLogout>
			</Container>
		);
	}
};

export default LoginPage;
