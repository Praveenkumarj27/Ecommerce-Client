import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Fayzullo " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getOrdersApi = () => API.get("/orders/get", config);

export const postOrdersApi = () => API.get("/orders/post", config);
