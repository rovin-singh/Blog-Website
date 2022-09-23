import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "../HOF/Authentication";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Notes from "../pages/Notes";
import Signup from "../pages/Signup";
import Navbar from "./Navbar";
import CreateNote from "../pages/CreateNote";
import Edit from "../pages/Edit";
const AllRoutes = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/notes'
					element={
						<Authentication>
							<Notes />
						</Authentication>
					}
				/>
				<Route
					path='/notes/create'
					element={
						<Authentication>
							<CreateNote />
						</Authentication>
					}
				/>
				<Route
					path='/notes/edit/:noteId'
					element={
						<Authentication>
							<Edit />
						</Authentication>
					}
				/>
			</Routes>
		</div>
	);
};

export default AllRoutes;
