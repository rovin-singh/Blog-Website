import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utills/Config";
const Authentication = ({ children }) => {
    const  token  = getToken();
    if (!token) {
        return navigator("/login")
    }
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (!getToken()) {
	// 		return navigate("/login");
	// 	}
	// }, []);
	return children;
};

export default Authentication;
