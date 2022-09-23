import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateNote } from "../API/notes";

const Edit = () => {
    const param = useParams();
    console.log(param)
	const [updateData, setUpdate] = useState({});
	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setUpdate({ ...updateData, [name]: value });
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(updateData);
		updateNote(param.noteId, updateData);
    };
    console.log(updateData)
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
