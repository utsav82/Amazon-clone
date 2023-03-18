import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-8c06e/us-central1/api",
});
export default instance;
