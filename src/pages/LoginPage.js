import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import SECRET_KEYS from "../keys";
import { oauth, logout } from "../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginPage extends React.Component {

	responseGoogle = res =>
		this.props.oauth( res.profileObj );

	handleLogout = () =>
		this.props.logout();

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
					onLogoutSuccess={this.handleLogout}
				>
				</GoogleLogout>
			</Container>
		);
	}
};

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	oauth: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};

export default connect( null, { oauth, logout })( LoginPage );
