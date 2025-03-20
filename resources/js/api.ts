import Http from "./Http";
import { API_URL } from "./Http";

/**
 * Endpoints without authentication.
 */
export const register = (data: object | FormData) => Http.post(`${API_URL}/register`, data);
export const login = (data: object | FormData) => Http.post(`${API_URL}/login`, data);

/**
 * Endpoints with authentication.
 */
export const logout = (token: string) => Http.post(`${API_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });

export const getUser = (token: string) => Http.get(`${API_URL}/user`, { headers : { Authorization: `Bearer ${token}` } });
