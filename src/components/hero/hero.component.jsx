import React from "react";
import "./hero.style.scss";
import heroImage from "../../assets/images/item-1.png";
import iconCities from "../../assets/images/icon/icon-cities.svg";
import iconTravelers from "../../assets/images/icon/icon-traveler.svg";
import iconTreasures from "../../assets/images/icon/icon-treasure.svg";
import { CustomButton } from "../CustomButton/CustomButton.component";

import { numberFormat } from "../../utils/numberFormat";

import { Row, Col } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export const Hero = ({ data }) => {
	const { travelers, treasures, cities } = data.hero;

	return (
		<section className="hero">
			<Row>
				<Col xl={12} lg={12} md={12} sm={24}>
					<Title>
						Forget Busy Work, <br /> Start Next Vacation
					</Title>
					<p>
						We provide what you need to enjoy your holiday with
						family. Time to make another memorable moments. Lorem
						ipsum dolor sit amet, consectetur adipisicing elit.
						Laborum debitis corporis harum excepturi quis veritatis!
					</p>
					<CustomButton className="primary mt-2 mb-4">
						Most Picked
					</CustomButton>

					<Row>
						<Col md={8}>
							<img
								className="icon"
								src={iconCities}
								alt="cities"
							/>
							<p>
								<strong>{numberFormat(cities)}</strong> Cities
							</p>
						</Col>
						<Col md={8}>
							<img
								className="icon"
								src={iconTravelers}
								alt="travelers"
							/>
							<p>
								<strong>{numberFormat(travelers)}</strong>{" "}
								Travelers
							</p>
						</Col>
						<Col md={8}>
							<img
								className="icon"
								src={iconTreasures}
								alt="treasures"
							/>
							<p>
								<strong>{numberFormat(treasures)}</strong>{" "}
								Treasures
							</p>
						</Col>
					</Row>
				</Col>
				<Col xl={12} lg={12} md={12} sm={24}>
					<img src={heroImage} alt="image" />
				</Col>
			</Row>
		</section>
	);
};
