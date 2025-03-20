import axios from "axios";

export const BASE_URL = "http://localhost:8000";
export const API_URL = `${BASE_URL}/api`;

export const getCsrf = () => axios.get(`${BASE_URL}/sanctum/csrf-cookie`);

getCsrf()
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Impossible to issue CSRF token.");
        console.error(error.response.data);
    });

const Http = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-type": "application/json"
    }
});

export default Http;