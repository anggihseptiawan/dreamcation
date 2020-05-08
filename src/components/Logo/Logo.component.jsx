import React from "react";
import { CustomButton } from "../CustomButton/CustomButton.component";
import "./Logo.style.scss";

export const Logo = () => (
	<CustomButton className="text-primary" href="/" type="link">
		Dream<span>cation</span>
	</CustomButton>
);
