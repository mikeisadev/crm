import axios from "axios";

const API_URL = "http://localhost:8000/api";

/**
 * Endpoints without authentication.
 */
export const register = (data: object) => axios.post(`${API_URL}/register`, data);
export const login = (data: object) => axios.post(`${API_URL}/login`, data);

/**
 * Endpoints with authentication.
 */
export const logout = (token: string) => axios.post(`${API_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });

export const getUser = (token: string) => axios.get(`${API_URL}/user`, { headers : { Authorization: `Bearer ${token}` } });
