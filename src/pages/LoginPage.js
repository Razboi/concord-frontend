import React from "react";
import { Container, Form, Button, Header } from "semantic-ui-react";
import { GoogleLogin } from "react-google-login";
import SECRET_KEYS from "../keys";
import { oauth, login, signup } from "../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

const
	MainWrapper = styled( Container )`
	display: flex !important;
	justify-content: center;
`,
	FormWrapper = styled.div`
	margin-top: 150px;
	border: 1px solid #808080;
	padding: 20px 40px;
	width: 340px;
`,
	Separator = styled.span`
	display: block;
	text-align: center;
	margin: 25px auto;
	color: #808080;
`,
	StyledForm = styled( Form )`
	margin-top: 40px;
`,
	GoogleLoginButton = styled( GoogleLogin )`
	display: block;
	margin: auto;
	background: #4285f4;
	color: #fff;
	padding: 10px;
	width: 100%;
	border: none;
	border-radius: 3px;
	font-weight: bold;
	margin-bottom: 10px;
`,
	FacebookLoginButton = styled( Button )`
	background: #4267b2 !important;
	width: 100%;
`,
	LoginButton = styled( Button )`
	background: #7289da !important;
	width: 100%;
`,
	SwitchFormButton = styled( Button )`
	position: absolute;
	right: 20px;
	top: 20px;
`,
	FormHeader = styled( Header )`
	text-align: center;
	color: #2c2f33;
`;

class LoginPage extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			login: true
		};
	}

	responseGoogle = res => {
		if ( res.tokenId ) {
			this.props.oauth( res.tokenId ).then(() => this.props.history.push( "/" ));
		}
	};

	handleChange = e =>
		this.setState({ [ e.target.name ]: e.target.value });

	handleLogin = () => {
		var credentials = { email: this.state.email, password: this.state.password };
		if ( credentials.email !== "" && credentials.password !== "" ) {
			this.props.login( credentials ).then(() => this.props.history.push( "/" ));
		}
	};

	handleSignup = () => {
		var credentials = { email: this.state.email, password: this.state.password };
		if ( credentials.email !== "" && credentials.password !== "" ) {
			this.props.signup( credentials )
				.then(() => this.props.history.push( "/" ));
		}
	};

	switchForm = () =>
		this.setState({ login: !this.state.login });

	render() {
		return (
			<MainWrapper id="MainWrapper">
				<FormWrapper id="FormWrapper">
					{this.state.login ?
						<SwitchFormButton
							className="switchFormButton"
							secondary
							content="Sign up"
							onClick={this.switchForm}
						/>
						:
						<SwitchFormButton
							className="switchFormButton"
							secondary
							content="Log In"
							onClick={this.switchForm}
						/>
					}

					{this.state.login ?
						<FormHeader content="Log In to Concord" as="h2" className="formHeader" />
						:
						<FormHeader content="Sign Up to Concord" as="h2" className="formHeader" />
					}

					<StyledForm id="AuthForm">
						<Form.Input
							className="authInput email"
							label="Email"
							name="email"
							onChange={this.handleChange}
						/>
						<Form.Input
							className="authInput password"
							label="Password"
							type="password"
							name="password"
							onChange={this.handleChange}
						/>
						{this.state.login ?
							<LoginButton
								className="loginSignupButton"
								primary
								content="Log In"
								onClick={this.handleLogin}
							/>
							:
							<LoginButton
								className="loginSignupButton"
								primary
								content="Sign Up"
								onClick={this.handleSignup}
							/>
						}

					</StyledForm>

					<Separator className="separator">Or</Separator>

					<GoogleLoginButton
						className="oauthButton"
						clientId={SECRET_KEYS.clientId}
						buttonText="Continue with Google+"
						onSuccess={this.responseGoogle}
						onFailure={this.responseGoogle}
					/>
					<FacebookLoginButton
						className="oauthButton"
						primary
						content="Continue with Facebook"
					/>
				</FormWrapper>
			</MainWrapper>
		);
	}
};

// define LoginPage props
LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	oauth: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired,
	signup: PropTypes.func.isRequired
};

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect( null, { oauth, login, signup })( LoginPage );
