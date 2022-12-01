import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

export const login = (logData) => API.post("/auth/login", logData);

export const register = (formData) => API.post("/auth/register", formData);
