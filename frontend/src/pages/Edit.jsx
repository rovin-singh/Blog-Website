import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote } from "../API/notes";

const Edit = () => {
	const param = useParams();
	const naviagte = useNavigate();
	const [updateData, setUpdate] = useState({});
	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setUpdate({ ...updateData, [name]: value });
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(updateData);
		updateNote(param.noteId, updateData);
		naviagte("/notes");
	};
	console.log(updateData);
	return (
		<div>
			<h2>Edit Here</h2>
			<form onSubmit={onSubmitHandler}>
				<input
					type='text'
					name='Heading'
					onChange={onChangeHandler}
					placeholder='Enter Heading'
				/>
				<br />
				<br />
				<input
					type='text'
					name='Note'
					onChange={onChangeHandler}
					placeholder='Enter Note'
				/>
				<br />
				<br />
				<input
					type='text'
					name='Tag'
					onChange={onChangeHandler}
					placeholder='Enter Tag'
				/>
				<br />
				<br />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Edit;
