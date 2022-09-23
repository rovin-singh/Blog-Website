import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApiCall } from "../API/login";

const Login = () => {
	const navigate = useNavigate();
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
    loginApiCall(user).then((res) => {
      console.log(res)
			if (res) navigate("/");
		});
	};
	return (
		<div>
			<h1>Login Here</h1>
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
				<input type='submit' />
			</form>
		</div>
	);
};

export default Login;
