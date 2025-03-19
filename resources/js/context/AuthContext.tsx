import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, getUser } from '../api';

interface AuthContextType {
    user: any;
    token: string | null;
    login: (data: object) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            getUser(token).then(res => setUser(res.data));
        }
    }, [token]);

    const loginUser = async (data: object) => {
        const response = await login(data);

        setUser(response.data.user);
        setToken(response.data.token);

        localStorage.setItem('token', response.data.token);
    }

    const logoutUser = async () => {
        if (token) await logout(token);

        setUser(null);
        setToken(null);

        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ user, token, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};