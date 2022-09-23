import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utills/Config";
const Authentication = ({ children }) => {
	const token = getToken();

	if (!token) {
		return <Navigate to='/login' />;
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
