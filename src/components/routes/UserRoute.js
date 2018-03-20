import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRoute = ({ authenticated, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			authenticated ? <Component {...props} /> : <Redirect to="/login" />}
	/>
);

UserRoute.propTypes = {
	component: PropTypes.func.isRequired,
	authenticated: PropTypes.bool.isRequired
};

function mapStateToProps( state ) {
	console.log( !!state.user.authenticated );
	return {
		authenticated: !!state.user.authenticated
	};
};

export default connect( mapStateToProps )( UserRoute );
