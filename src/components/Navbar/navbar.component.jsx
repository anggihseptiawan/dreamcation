import React from "react";
import "./navbar.style.scss";
import { Link } from "react-router-dom";

export const Navbar = () => (
	<div className="navbar">
		<Link to="/">Home</Link>
		<Link to="/browse">Browse By</Link>
		<Link to="/stories">Stories</Link>
		<Link to="/agents">Agents</Link>
	</div>
);
