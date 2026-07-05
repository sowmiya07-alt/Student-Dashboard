import axios from "axios";

const API = axios.create({
  baseURL: "https://dummy-invalid-api.com"
});

export default API;