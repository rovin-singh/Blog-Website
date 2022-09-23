import axios from "axios";
import { URL } from "./congig";
// const signupApiCall = async(payload) => {
// 	await fetch("https://frozen-shore-28909.herokuapp.com/user/signup", {
// 		method: "POST", // or 'PUT'
// 		headers: {
// 			"Content-Type": "application/json",
// 			"Access-Control-Allow-Origin": "*",
// 		},
// 		body: JSON.stringify(payload),
// 	})
// 		.then((data) => {
// 			console.log("Success:", data.json());
// 		})
// 		.catch((error) => {
// 			console.error("Error:", error);
// 		});
// };

// export { signupApiCall };

const signupApiCall = async (payload) => {
	return await axios
		.post(`${URL}/user/signup`, payload)
		.then((res) => {
			console.log(res);
		})
		.catch((e) => {
			console.log("Error:", e);
		});
};

export { signupApiCall };
