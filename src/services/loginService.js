import axios from "axios";

const baseUrl = "http://localhost:3001/api/login";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default { login };
