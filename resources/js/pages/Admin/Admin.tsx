import React from 'react';
import { Link, redirect } from 'react-router-dom';

import Sidebar from './Sidebar';

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
    return (
        <div className="container admin-container">
            <div className={`admin-wrap`}>
                <Sidebar />
                <div className="main-admin">
                    Main content
                </div>
            </div>
        </div>
    );
}

export default Admin;