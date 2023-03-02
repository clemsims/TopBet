import Axios from "axios";

const envurl = process.env.REACT_APP_API_URL;

const api = Axios.create({ baseURL: envurl });

// envurl is a codesandbox env variable
console.log(envurl)

export default api;

