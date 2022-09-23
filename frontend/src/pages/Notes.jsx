import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../API/notes";

const Notes = () => {
	const [data, setData] = useState([]);
	const getNotesData = () => {
		getNotes().then((res) => {
			setData(res);
		});
	};
	useEffect(() => {
		getNotesData();
	}, [data]);
	// console.log(data);

	return (
		<div style={{ marginTop: "20px" }}>
			<button>
				<Link to='/notes/create'>Create New Note</Link>
			</button>
			<div className='grid'>
				{data.map((item) => (
					<div key={item._id}>
						<h4>{item.Heading}</h4>
						<p>{item.Tag}</p>
						<p>{item.Note}</p>
						<div className='flex'>
							<button onClick={() => deleteNote(item._id)}>Delete</button>
							<button>
								<Link to={`/notes/edit/${item._id}`}>Update</Link>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
