import axios from "axios";
const AxiosClient = axios.create({
    baseURL: "https://erudite-descent-233113-default-rtdb.firebaseio.com/",
    headers: {
      "Content-type": "application/json"
    }
});
export default AxiosClient;