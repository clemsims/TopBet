import Axios from "axios";
import config from "../config/config"

const api = Axios.create({ baseURL: config.heroku }); // let's modifiy this line to use the config file to use our hosted API.

export default api;