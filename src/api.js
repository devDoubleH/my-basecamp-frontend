import axios from "axios";

const api = axios.create({
  baseURL: "https://my-basecamp-backend-mern.herokuapp.com/",
});

export default api;
