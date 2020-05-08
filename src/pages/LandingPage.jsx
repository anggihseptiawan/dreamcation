import React from "react";
import landingPage from "../data/landingPage.json";
import { Header } from "../components/header/header.component";
import { Hero } from "../components/hero/hero.component.jsx";
import { MostPicked } from "../components/most-picked/most-picked.component";
import { Category } from "../components/category/category.component";

class LandingPage extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Hero data={landingPage} />
				<MostPicked data={landingPage.mostPicked} />
				<Category data={landingPage.categories} />
			</>
		);
	}
}

export default LandingPage;
