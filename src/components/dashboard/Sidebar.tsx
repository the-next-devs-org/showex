import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import {
  DashboardIcon,
  AnalyticsIcon,
  TransactionIcon,
  UserGroupIcon,
  SettingsIcon,
  ProfileIcon
} from './Icons';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: DashboardIcon, label: 'Overview' },
    { path: '/dashboard/analytics', icon: AnalyticsIcon, label: 'Analytics' },
    { path: '/dashboard/transactions', icon: TransactionIcon, label: 'Transactions' },
    { path: '/dashboard/users', icon: UserGroupIcon, label: 'Users' },
    { path: '/dashboard/settings', icon: SettingsIcon, label: 'Settings' },
  ];

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        {/* <h2>Showex</h2> */}
        <a
            className="fw-bold fs-5 d-flex align-items-center navbar-brand"
            href="/"
            data-discover="true"
        >
            <span style={{ color: "rgb(255, 255, 255)" }}>Shox</span>
            <span style={{ color: "rgb(0, 232, 204)" }}>EZ</span>
        </a>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="sidebar-icon">
              <item.icon />
            </span>
            <span className="sidebar-label">{item.label}</span>
          </Link>
        ))}
      </nav>
      {/* <div className="sidebar-footer">
        <Link to="/profile" className="sidebar-profile">
          <span className="sidebar-icon">
            <ProfileIcon />
          </span>
          <span className="sidebar-label">Profile</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;