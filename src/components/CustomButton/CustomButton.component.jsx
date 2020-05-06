import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Button } from "antd";

import "./CustomButton.style.scss";

export const CustomButton = ({
	children,
	className,
	type,
	target,
	href,
	isDisabled,
	isLoading,
	isExternal,
}) => {
	if (isDisabled) {
		return <button className={`${className} disabled`}>{children}</button>;
	}

	if (isLoading) {
		return (
			<Button type="primary" loading>
				{children}
			</Button>
		);
	}

	if (type === "link") {
		if (isExternal) {
			return (
				<a
					href={href}
					className={className}
					target={target === "_blank" ? "_blank" : null}
					rel={target === "_blank" ? "noopener noreferer" : null}
				>
					{children}
				</a>
			);
		} else {
			return (
				<Link
					to={href}
					className={className}
					target={target === "_blank" ? "_blank" : null}
					rel={target === "_blank" ? "noopener noreferer" : null}
				>
					{children}
				</Link>
			);
		}
	}

	return <button className={className}>{children}</button>;
};

CustomButton.propTypes = {
	type: propTypes.oneOf(["button", "link"]),
	className: propTypes.string,
	target: propTypes.string,
	href: propTypes.string,
	isDisabled: propTypes.bool,
	isLoading: propTypes.string,
	isExternal: propTypes.bool,
};
