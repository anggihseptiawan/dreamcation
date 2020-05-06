import React from "react";
import { CustomButton } from "../CustomButton/CustomButton.component";
import "./Logo.style.scss";

export const Logo = () => (
	<CustomButton className="text-primary" href="/" type="link">
		Stay<span>cation.</span>
	</CustomButton>
);
