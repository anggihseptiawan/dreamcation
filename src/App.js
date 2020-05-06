import React from "react";
import "./App.scss";
import LandingPage from "./pages/LandingPage";
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="container">
			<Route exact path="/" component={LandingPage} />
		</div>
	);
}

export default App;
