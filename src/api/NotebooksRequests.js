import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Fayzullo " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getNotebooksApi = (keyword, pageNumber) =>
  API.get(`/notebooks?keyword=${keyword}&pageNumber=${pageNumber}`);

export const getNotebookApi = (id) => API.get(`/notebooks/${id}`);

export const addNotebookApi = (notebook) => API.post("/add", notebook, config);

export const aditNotebookApi = (notebook) =>
  API.put("/notebooks/edit", notebook, config);

export const removeNotebookApi = (id) =>
  API.delete(`/notebooks/remove/${id}`, config);
