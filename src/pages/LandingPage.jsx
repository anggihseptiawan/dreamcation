import React from "react";
import landingPage from "../data/landingPage.json";
import { Header } from "../components/header/header.component";

class LandingPage extends React.Component {
	render() {
		console.log(this.props);
		return (
			<>
				<Header />
			</>
		);
	}
}

export default LandingPage;
