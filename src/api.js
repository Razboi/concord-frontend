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
		url: "auth",
		data: { credentials: credentials }
	})
	.then( res => res.data )
	.catch( err => console.log( err ) )
};
