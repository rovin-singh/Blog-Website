import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div
			style={{ display: "flex", gap: "30px", justifyContent: "space-evenly" }}
		>
			<Link to='/'>Home</Link>
			<Link to='/signup'>Singup</Link>
			<Link to='/login'>Login</Link>
			<Link to="/notes">Notes</Link>
		</div>
	);
};

export default Navbar;
