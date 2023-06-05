import axios from "axios";

const URL = "http://13.48.147.57/";

const get = (route) => axios.get(URL + route);

const post = async (route, data) => await axios.post(URL + route, data);

const put = async (route, id, data) =>
  await axios.put(URL + route + "/" + id, data);
const deletes = async (route, id) => await axios.delete(URL + route + "/" + id);

export { get, post, put, deletes };