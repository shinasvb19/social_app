import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-app-sm6d.onrender.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
export default instance;
