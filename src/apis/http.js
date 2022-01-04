import axios from "axios";
import { store } from "../App";
import { logout } from "../redux/actions";
import { getToken } from "../Services/TokenServices";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

axios.interceptors.request.use((config) => {
    config.headers.auth_token = getToken();
    return config;
});

axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        if (err.response?.data?.error === "Invalid Auth Token") {
            store.dispatch(logout());
            window.location = "/login";
        }
        return Promise.reject(err);
    }
);

export default axios;
