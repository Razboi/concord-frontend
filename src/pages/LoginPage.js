import React from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { GoogleLogin } from "react-google-login";
import SECRET_KEYS from "../keys";
import { oauth } from "../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

const MainWrapper = styled( Container )`
	display: flex !important;
	justify-content: center;
`;

const FormWrapper = styled.div`
	margin-top: 150px;
	border: 1px solid #808080;
	padding: 20px 40px;
	width: 340px;
`;

const Separator = styled.span`
	display: block;
	text-align: center;
	margin: 25px auto;
	color: #808080;
`;

const StyledForm = styled( Form )`
	margin-top: 40px;
`;

const GoogleLoginButton = styled( GoogleLogin )`
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
`;

const FacebookLoginButton = styled( Button )`
	background: #4267b2 !important;
	width: 100%;
`;

const LoginButton = styled( Button )`
	background: #7289da !important;
	width: 100%;
`;

const SwitchFormButton = styled( Button )`
	position: absolute;
	right: 20px;
	top: 20px;
`;

const FormHeader = styled.h2`
	text-align: center;
	color: #2c2f33;
`;

class LoginPage extends React.Component {

	responseGoogle = res =>
		this.props.oauth( res.profileObj ).then( () => this.props.history.push("/") );

	render() {
		return (
			<MainWrapper>
				<SwitchFormButton secondary content="Sign up" />
				<FormWrapper>
					<FormHeader>Log In to Concord</FormHeader>


					<StyledForm>
						<Form.Input label="Email" />
						<Form.Input label="Password" type="password" />
						<LoginButton primary content="Log In"/>
					</StyledForm>

					<Separator>Or</Separator>

					<GoogleLoginButton
						clientId={SECRET_KEYS.clientId}
						buttonText="Continue with Google+"
						onSuccess={this.responseGoogle}
						onFailure={this.responseGoogle}
					/>
					<FacebookLoginButton
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
	oauth: PropTypes.func.isRequired
};

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect( null, { oauth })( LoginPage );
