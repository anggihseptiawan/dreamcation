import React from "react";
import { CustomButton } from "../CustomButton/CustomButton.component";
import "./category.style.scss";

export const Category = ({ data }) => {
	return data.map((category, idx) => {
		return (
			<section className="category mt-4" key={`category-${idx}`}>
				<h2>{category.name}</h2>
				<div className="items">
					{category.items.length === 0 ? (
						<div className="alert alert-info">
							There is no catetegory yet
						</div>
					) : (
						category.items.map((item, index) => {
							return (
								<div
									className="item col-md-3"
									key={`category-${idx}-item${index}`}
								>
									<div
										className="card"
										style={{
											height: "180px",
											backgroundImage: `url('${item.imageUrl}')`,
											backgroundSize: "cover",
										}}
									>
										{item.isPopular ? (
											<div className="badge">
												Popular <span>Choice</span>
											</div>
										) : null}
										<CustomButton
											type="link"
											href={`/properties/${item._id}`}
										>
											{item.name}
										</CustomButton>
										<p>
											{item.city}, {item.country}
										</p>
									</div>
								</div>
							);
						})
					)}
				</div>
			</section>
		);
	});
};
