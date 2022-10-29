import axios from "axios";
import Cookies from "@core/services/cookies";

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
})

client.interceptors.request.use((config) => {
    const token = Cookies.token;
    if (token) {
        config.headers = {...config.headers, Authorization: `Bearer ${ token }`}
    }
    return config
})

export default client;