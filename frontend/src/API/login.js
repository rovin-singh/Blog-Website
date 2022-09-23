import axios from "axios";
import { storeLocalStg } from "../utills/Config";
import { URL } from "./congig";
const loginApiCall = async (payload) => {
	return await axios
		.post(`${URL}/user/login`, payload)
		.then((res) => {
			console.log(res);
			if (res.data.token) {
				storeLocalStg(res.data.token);
				return true;
			}
		})
		.catch((e) => {
			console.log("Error:", e);
		});
};

export { loginApiCall };
