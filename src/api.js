import axios from "axios";

export default {
	oauth: profile =>
	axios({
		method: "post",
		url: "oauth/google",
		data: { profile: profile }
	})
	.then( res => res.data )
	.catch( err => console.log( err ) ),

	login: credentials =>
	axios({
		method: "post",
		url: "auth/login",
		data: { credentials: credentials }
	})
	.then( res => res.data )
	.catch( err => console.log( err ) ),

	signup: credentials =>
	axios({
		method: "post",
		url: "auth/signup",
		data: { credentials: credentials }
	})
	.then( res => res.data )
	.catch( err => console.log( err ) )
};
