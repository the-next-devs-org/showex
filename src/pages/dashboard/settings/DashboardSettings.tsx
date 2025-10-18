import React from 'react';
import './DashboardSettings.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const DashboardSettings: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-settings">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account and preferences</p>
      </div>

      <div className="settings-grid">
        <div className="settings-section">
          <h2>Profile Settings</h2>
          <div className="settings-form">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" defaultValue="John Doe" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" defaultValue="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" defaultValue="john@example.com" />
            </div>
            <button className="save-button">Save Changes</button>
          </div>
        </div>

        <div className="settings-section">
          <h2>Security</h2>
          <div className="settings-form">
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input type="password" />
            </div>
            <button className="save-button">Update Password</button>
          </div>
        </div>

        {/* <div className="settings-section">
          <h2>Notifications</h2>
          <div className="settings-toggles">
            <div className="toggle-item">
              <div className="toggle-info">
                <h3>Email Notifications</h3>
                <p>Receive email updates about your account</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="toggle-item">
              <div className="toggle-info">
                <h3>Transaction Alerts</h3>
                <p>Get notified about new transactions</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="toggle-item">
              <div className="toggle-info">
                <h3>Marketing Updates</h3>
                <p>Receive news and promotional materials</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section danger-zone">
          <h2>Danger Zone</h2>
          <div className="danger-actions">
            <div className="danger-item">
              <div className="danger-info">
                <h3>Deactivate Account</h3>
                <p>Temporarily disable your account</p>
              </div>
              <button className="danger-button">Deactivate</button>
            </div>
            <div className="danger-item">
              <div className="danger-info">
                <h3>Delete Account</h3>
                <p>Permanently delete your account and all data</p>
              </div>
              <button className="danger-button delete">Delete</button>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;