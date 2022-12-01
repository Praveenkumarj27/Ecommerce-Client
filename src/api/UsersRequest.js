import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Fayzullo " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getUsers = () => API.get("/all_users", config);

export const searchUsers = (search) =>
  API.get(`/all_users?search=${search}`, config);

export const userProfile = (userId) => API.get(`/user/${userId}`, config);

export const updateProfile = (updateInfo) =>
  API.put("/profile", updateInfo, config);

export const getOrderedApi = () => API.get("/profile", config);
