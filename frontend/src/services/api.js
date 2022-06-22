import axios from "axios";

const api = axios.create({
  baseURL: "https://bannergenerator.herokuapp.com",
});

export default api;
