import api from "../configs/Api";

const getProfile = () => api.get("user/whoami");
export { getProfile };
