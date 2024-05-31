import axios from "axios";
import { getItemFromLocalStorage } from "./useLocalStorage";

const apiUrl = process.env.BACKEND_URL;

const fetcher = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


// Add a response interceptor
fetcher.interceptors.request.use(
    async function (config) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        let user = await getItemFromLocalStorage("userData");
        // console.log("Logged User name >>>> ", user.jwt.token)
        config.headers.Authorization = `Bearer ${user.accessToken}`;

        // console.log("Async >>>> ", config.headers.Authorization);

        return config;
    },
    function (error) {
        console.log("Error >>>> ", error);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default fetcher;