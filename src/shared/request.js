import axios from "axios";

const instance = axios.create({
  baseURL: "http://sparta-swan.shop/",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});

export default instance;
