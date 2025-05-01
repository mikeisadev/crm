import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin/Admin';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<PrivateRoute element={<Admin />} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    <Route path="/admin" element={<PrivateRoute element={<Admin />}/>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

const container = document.querySelector('#app');

if (container) {
    createRoot(container).render(<App />);
}