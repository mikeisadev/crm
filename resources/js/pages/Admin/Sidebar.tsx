import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-wrap">
                <div className="sidebar-head">
                    <div>
                        <button className="close-btn" onClick={toggleSidebar}><Icon name="menu" /></button>
                    </div>
                    <div className="logo">

                    </div>
                </div>
                <div className="sidebar-body">
                    <ul className="sidebar-menu">
                        <li className="menu-item"><Icon name="speed"/><Link to="/admin">Dashboard</Link></li>
                        <li className="menu-item"><Icon name="group"/><Link to="/admin/users">Users</Link></li>
                        <li className="menu-item"><Icon name="settings"/><Link to="/admin/settings">Settings</Link></li>
                    </ul> 
                </div>
                <div className="sidebar-footer">

                </div>
            </div>
        </div>
    );
}

export default Sidebar;