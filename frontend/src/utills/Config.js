const storeLocalStg = (payload) => {
	const store = localStorage.setItem("token", payload);
	if (!store) {
		return false;
	}
};

const getToken = () => {
    const token = localStorage.getItem("token") || null;
	if (token) {
		return token;
	}
	return false;
};

export { storeLocalStg, getToken };
