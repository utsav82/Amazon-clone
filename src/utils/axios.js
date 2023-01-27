import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-9b7d4/us-central1/api",
});
export default instance;
