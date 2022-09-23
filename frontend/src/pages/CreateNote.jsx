import React from "react";
import { useState } from "react";
import { postNotes } from "../API/notes";

const CreateNote = () => {
	const [userNote, setNote] = useState({});
	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setNote({ ...userNote, [name]: value });
	};
	const onSubmitHandler = (e) => {
        e.preventDefault();
        postNotes(userNote).then(res => {
            alert("Note is Created")
        })
	};
	return (
        <div>
            <h2>Create Your Notes Here</h2>
			<form onSubmit={onSubmitHandler}>
				<input type='text' name='Heading' onChange={onChangeHandler} placeholder="Heading" />
				<br />
				<input type='text' name='Note' onChange={onChangeHandler} placeholder="Note"/>
				<br />
				<input type='text' name='Tag' onChange={onChangeHandler} placeholder="Tag"/>
				<br />
				<input type='submit' />
			</form>
		</div>
	);
};

export default CreateNote;
