import api from "../configs/Api";

const getProfile = () => api.get("user/whoami").then((res) => res || false);
export { getProfile };
