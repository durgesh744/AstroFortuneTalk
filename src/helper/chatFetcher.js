import axios from "axios";
import { getItemFromLocalStorage } from "./useLocalStorage";
import { chat_base_url } from "../config/Constants";

const chatFetcher = axios.create({
    baseURL: chat_base_url,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Add a response interceptor
chatFetcher.interceptors.request.use(
    async function (config) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        let user = await getItemFromLocalStorage("user");

        // console.log("Logged User name >>>> ", {user?.user?.jwt?.token)
        config.headers.Authorization = `Bearer ${user?.data?.jwt?.token}`;
        // console.log("Async >>>> ", user?.data?.jwt?.token);

        return config;
    },
    function (error) {
        console.log("Error >>>> ", error);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default chatFetcher;