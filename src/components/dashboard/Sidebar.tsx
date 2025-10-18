import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import {
  DashboardIcon,
  AnalyticsIcon,
  UserGroupIcon,
  SettingsIcon,
  NotificationIcon,
} from './Icons';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
  // console.log(loggedInUser.role);

  const menuItems = [
    { path: '/dashboard', icon: DashboardIcon, label: 'Overview' },
    // { path: '/dashboard/analytics', icon: AnalyticsIcon, label: 'Analytics' },
    { path: '/dashboard/indicators', icon: AnalyticsIcon, label: 'Indicators' },
    // { path: '/dashboard/transactions', icon: TransactionIcon, label: 'Transactions' },
    // Users link sirf admin ke liye
    ...(loggedInUser.role === 1 ? [{ path: '/dashboard/users', icon: UserGroupIcon, label: 'Users' }] : []),
    { path: '/dashboard/notification', icon: NotificationIcon, label: 'Notifications' },
    { path: '/dashboard/settings', icon: SettingsIcon, label: 'Settings' },
  ];

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        <a className="fw-bold fs-5 d-flex align-items-center navbar-brand" href="/" data-discover="true">
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
    </div>
  );
};

export default Sidebar;