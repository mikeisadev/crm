import React from 'react';
import { Link, redirect } from 'react-router-dom';

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
    return (
        <div className="container admin-container">
            <div className="container-wrap">
                <div className="sidebar">
                    Sidebar
                </div>
                <div className="main">
                    Main content
                </div>
            </div>
        </div>
    );
}

export default Admin;