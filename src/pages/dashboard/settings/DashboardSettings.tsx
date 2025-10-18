import React from 'react';
import './DashboardSettings.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const DashboardSettings: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="ds-root">
        <div className="ds-header">
          <h1 className="ds-title">Settings</h1>
          <p className="ds-subtitle">Manage your account and preferences</p>
        </div>

        <div className="ds-grid">
          <div className="ds-card">
            <h2 className="ds-card-title">Profile Settings</h2>
            <div className="ds-form">
              <div className="ds-field">
                <label className="ds-label">First Name</label>
                <input className="ds-input" type="text" defaultValue="John Doe" />
              </div>
              <div className="ds-field">
                <label className="ds-label">Last Name</label>
                <input className="ds-input" type="text" defaultValue="John Doe" />
              </div>
              <div className="ds-field">
                <label className="ds-label">Email Address</label>
                <input className="ds-input" type="email" defaultValue="john@example.com" />
              </div>
              <button className="ds-btn">Save Changes</button>
            </div>
          </div>

          <div className="ds-card">
            <h2 className="ds-card-title">Security</h2>
            <div className="ds-form">
              <div className="ds-field">
                <label className="ds-label">Current Password</label>
                <input className="ds-input" type="password" />
              </div>
              <div className="ds-field">
                <label className="ds-label">New Password</label>
                <input className="ds-input" type="password" />
              </div>
              <div className="ds-field">
                <label className="ds-label">Confirm New Password</label>
                <input className="ds-input" type="password" />
              </div>
              <button className="ds-btn">Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
