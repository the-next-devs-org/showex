import React from 'react';
import './DashboardHeader.css';
import { useNavigate } from 'react-router-dom';

const DashboardHeader: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const handleDropdown = () => setDropdownOpen((prev) => !prev);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
    // alert('You have been logged out!');
  };
  return (
    <div className="dashboard-header">
      <div className="header-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-actions">
        <div className="header-user" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="#000" strokeWidth="1.5" />
            <path d="M4 20c0-3.3137 3.134-6 7-6s7 2.6863 7 6" stroke="#000" strokeWidth="1.5" />
          </svg>
          <span className="user-name" onClick={handleDropdown} style={{ cursor: 'pointer' }}>John Doe</span>
          {dropdownOpen && (
            <div className="user-dropdown" style={{ position: 'absolute', top: '100%', right: 0, background: '#fff', border: '1px solid #ddd', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 10 }}>
              <button onClick={handleLogout} style={{ padding: '8px 16px', width: '100%', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;