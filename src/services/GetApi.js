import axios from "axios";

const api = axios.create({
  baseURL: "https://notesapi-production-1112.up.railway.app",
});

export default api;
