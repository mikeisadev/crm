import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<div>Home <Navigate to="/login"/></div>} />
                    <Route path="/login" element={<div>Login</div>} />
                    <Route path="/register" element={<div>Register</div>} />

                    <Route path="/admin" element={<PrivateRoute element={<div>Admin</div>}/>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

const container = document.querySelector('#app');

if (container) {
    createRoot(container).render(<App />);
}