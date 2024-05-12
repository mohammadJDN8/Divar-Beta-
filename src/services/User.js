import api from "../configs/Api";
import { getCookie } from "../utils/cookie";
const token = getCookie("accessToken");
const getProfile = () => api.get("user/whoami",{headers:{Authorization:`bearer ${token}`}});
export { getProfile };
