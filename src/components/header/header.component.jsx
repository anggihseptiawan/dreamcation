import React from "react";
import { Logo } from "../Logo/Logo.component";
import { Navbar } from "../Navbar/navbar.component";
import "./header.style.scss";

export const Header = () => (
	<div className="header">
		<Logo />
		<Navbar />
	</div>
);
