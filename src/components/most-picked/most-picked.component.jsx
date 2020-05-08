import React from "react";
import "./most-picked.style.scss";

export const MostPicked = (props) => {
	console.log(props);
	return (
		<section className="most-picked">
			<h2>Most Picked</h2>

			<div className="items">
				{props.data.map((item, idx) => (
					<div
						className="item"
						key={item._id}
						style={{
							backgroundImage: `url('${item.imageUrl}')`,
							backgroundSize: "cover",
						}}
					>
						<h4>{item.name}</h4>
						<span>{`${item.city}, ${item.country}`}</span>
						<span className="placeholder">{`$${item.price}per ${item.unit}`}</span>
					</div>
				))}
			</div>
		</section>
	);
};
