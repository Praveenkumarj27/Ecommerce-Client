import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Fayzullo " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getCardsApi = () => API.get("/card", config);

export const addCardApi = (id) => API.post("/card/add", { id }, config);

export const plusCardApi = (id) => API.post(`/card/plus`, { id }, config);

export const minusCardApi = (id) => API.post(`/card/minus`, { id }, config);

export const removeCardApi = (id) => API.post(`/card/remove`, { id }, config);
