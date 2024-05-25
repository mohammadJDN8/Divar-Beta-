import api from "../configs/Api";

const addCategory = (data) => api.post("category",data);
 
export {addCategory}