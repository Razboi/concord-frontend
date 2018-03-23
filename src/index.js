import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoggedIn } from "./actions/auth";

const store = createStore( rootReducer, composeWithDevTools(
	applyMiddleware( thunk )
));

if ( localStorage.token ) {
	store.dispatch( userLoggedIn());
}

ReactDOM.render((
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
),
document.getElementById( "root" ));
registerServiceWorker();
