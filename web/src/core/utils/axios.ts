import axios from "axios";
import Cookies from "@core/services/cookies";

/** Axios client */
export const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    validateStatus: () => true,
})

// Adding authorization header to each request
client.interceptors.request.use((config) => {
    const token = Cookies.token;
    if (token) {
        config.headers = {...config.headers, Authorization: `Bearer ${ token }`}
    }
    return config
})

export default client;