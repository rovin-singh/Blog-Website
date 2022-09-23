import axios from "axios";
import { getToken } from "../utills/Config";
import { URL } from "./congig";

const headers = {
	"Content-Type": "application/json",
	"Authorization": "B " + getToken(),
};

const getNotes = async () => {
	return await axios
		.get(`${URL}/notes`, {
			headers: headers,
		})
		.then((res) => {
			return res.data;
		})
		.catch((e) => {
			console.log("Error:", e);
		});
};

const postNotes = async (payload) => {
	return await axios
		.post(`${URL}/notes/create`, payload, {
			headers: headers,
		})
		.then((res) => {
			console.log(res);
		})
		.catch((e) => {
			console.log("Error:", e);
		});
};

const deleteNote = async (id) => {
	return await axios
		.delete(`${URL}/notes/delete/${id}`, {
			headers: headers,
		})
		.then((res) => {
			return res;
		})
		.catch((e) => {
			console.log("Error:", e);
		});
};

const updateNote = async (id, payload) => {
	console.log(id,payload,"Got it")
	return await axios
		.patch(`${URL}/notes/edit/${id}`, payload, {
			headers: headers,
		})
		.then((res) => {
			console.log(res);
		})
		.catch((e) => {
			console.log("Error:", e);
		});
};
export { postNotes, getNotes, deleteNote, updateNote };
