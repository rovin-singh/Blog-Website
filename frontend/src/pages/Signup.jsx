import React from "react";
import { useState } from "react";
import {signupApiCall} from "../API/signup"
const Signup = () => {
	const [user, setUser] = useState({});
	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
        if (signupApiCall(user)) {
            console.log("True")
        };
	};
	return (
		<div>
			<h1>Singup Here</h1>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Enter Your Email'
					onChange={onChangeHandler}
					name='email'
				/>
				<br />
				<br />
				<input
					type='password'
					placeholder='Enter Your Password'
					onChange={onChangeHandler}
					name='password'
				/>
				<br />
				<br />
				<input
					type='text'
					placeholder='Enter Your age'
					onChange={onChangeHandler}
					name='age'
				/>
				<br />
				<br />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Signup;
