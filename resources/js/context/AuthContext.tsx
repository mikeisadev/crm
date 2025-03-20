import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, getUser } from '../api';

interface AuthContextType {
    getUserObj: () => any;
    getToken: () => string | null;
    loginUser: (data: object) => Promise<void>;
    logoutUser: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            getUser(token).then(res => {
                console.log(res.data);
                
                setUser(res.data)
            });
        }
    }, [token]);

    const loginUser = async (data: FormData | object) => {
        return new Promise(async (resolve, reject) => {
            const response = await login(data);

            setUser(response.data.user);
            setToken(response.data.token);
    
            localStorage.setItem('token', response.data.token);

            resolve(response);
        });
    }

    const logoutUser = async () => {
        if (token) await logout(token);

        setUser(null);
        setToken(null);

        localStorage.removeItem('token');
    }

    const getUserObj = () => user;

    const getToken = () => token;

    return (
        <AuthContext.Provider value={{ getUserObj, getToken, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};