import axios from "axios";
import LocalStorage from "@core/services/local-storage";

const client = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
})

client.interceptors.request.use((config) => {
    const token = LocalStorage.token;
    if (token) {
        config.headers = {...config.headers, Authorization: `Bearer ${ token }`}
    }
    return config
})

export default client;