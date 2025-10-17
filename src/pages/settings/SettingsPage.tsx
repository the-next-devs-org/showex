import { useState } from "react";
import "./SettingsPage.css";
import {
  FaUser,
  FaBell,
  FaLock,
  FaPalette,
  FaGlobe,
  FaChartLine,
  FaEnvelope,
  FaShieldAlt,
  FaSave,
  FaMoon,
  FaSun,
  FaCheck,
} from "react-icons/fa";

function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">(
    "idle"
  );

  // Profile Settings
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    phone: "+1 234 567 890",
    bio: "Financial analyst and crypto enthusiast",
  });

  // Notification Settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    priceAlerts: true,
    newsUpdates: false,
    marketAnalysis: true,
    weeklyReports: true,
    systemUpdates: false,
  });

  // Appearance Settings
  const [appearance, setAppearance] = useState({
    theme: "dark",
    accentColor: "cyan",
    fontSize: "medium",
    compactMode: false,
  });

  // Privacy Settings
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showActivity: true,
    dataCollection: true,
    twoFactorAuth: false,
  });

  const handleSave = () => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }, 1000);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: <FaUser /> },
    { id: "notifications", label: "Notifications", icon: <FaBell /> },
    { id: "appearance", label: "Appearance", icon: <FaPalette /> },
    { id: "privacy", label: "Privacy & Security", icon: <FaLock /> },
    { id: "preferences", label: "Preferences", icon: <FaChartLine /> },
  ];

  return (
    <div className="settings-page">
      <div className="settings-container">
        {/* Header */}
        <div className="settings-header">
          <h1>Settings</h1>
          <p className="settings-subtitle">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="settings-content">
          {/* Sidebar Navigation */}
          <aside className="settings-sidebar">
            <nav className="settings-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Settings Content */}
          <main className="settings-main">
            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="settings-section">
                <div className="section-header">
                  <FaUser className="section-icon" />
                  <div>
                    <h2>Profile Settings</h2>
                    <p>Update your personal information</p>
                  </div>
                </div>

                <div className="settings-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        value={profile.fullName}
                        onChange={(e) =>
                          setProfile({ ...profile, fullName: e.target.value })
                        }
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        value={profile.username}
                        onChange={(e) =>
                          setProfile({ ...profile, username: e.target.value })
                        }
                        placeholder="Enter username"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({ ...profile, email: e.target.value })
                        }
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) =>
                          setProfile({ ...profile, phone: e.target.value })
                        }
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Bio</label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                      placeholder="Tell us about yourself"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div className="settings-section">
                <div className="section-header">
                  <FaBell className="section-icon" />
                  <div>
                    <h2>Notification Preferences</h2>
                    <p>Choose what notifications you want to receive</p>
                  </div>
                </div>

                <div className="settings-list">
                  <div className="setting-item">
                    <div className="setting-info">
                      <FaEnvelope className="setting-icon" />
                      <div>
                        <h4>Email Notifications</h4>
                        <p>Receive important updates via email</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.emailNotifications}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            emailNotifications: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaChartLine className="setting-icon" />
                      <div>
                        <h4>Price Alerts</h4>
                        <p>Get notified when prices reach your targets</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.priceAlerts}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            priceAlerts: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaBell className="setting-icon" />
                      <div>
                        <h4>News Updates</h4>
                        <p>Stay informed with latest financial news</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.newsUpdates}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            newsUpdates: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaChartLine className="setting-icon" />
                      <div>
                        <h4>Market Analysis</h4>
                        <p>Receive AI-powered market insights</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.marketAnalysis}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            marketAnalysis: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaEnvelope className="setting-icon" />
                      <div>
                        <h4>Weekly Reports</h4>
                        <p>Get weekly market summary reports</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.weeklyReports}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            weeklyReports: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaBell className="setting-icon" />
                      <div>
                        <h4>System Updates</h4>
                        <p>Notifications about system maintenance</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.systemUpdates}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            systemUpdates: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === "appearance" && (
              <div className="settings-section">
                <div className="section-header">
                  <FaPalette className="section-icon" />
                  <div>
                    <h2>Appearance</h2>
                    <p>Customize the look and feel of your experience</p>
                  </div>
                </div>

                <div className="settings-grid">
                  <div className="appearance-card">
                    <h4>Theme</h4>
                    <div className="theme-options">
                      <button
                        className={`theme-btn ${
                          appearance.theme === "light" ? "active" : ""
                        }`}
                        onClick={() =>
                          setAppearance({ ...appearance, theme: "light" })
                        }
                      >
                        <FaSun />
                        <span>Light</span>
                      </button>
                      <button
                        className={`theme-btn ${
                          appearance.theme === "dark" ? "active" : ""
                        }`}
                        onClick={() =>
                          setAppearance({ ...appearance, theme: "dark" })
                        }
                      >
                        <FaMoon />
                        <span>Dark</span>
                      </button>
                    </div>
                  </div>

                  <div className="appearance-card">
                    <h4>Accent Color</h4>
                    <div className="color-options">
                      <button
                        className={`color-btn cyan ${
                          appearance.accentColor === "cyan" ? "active" : ""
                        }`}
                        onClick={() =>
                          setAppearance({ ...appearance, accentColor: "cyan" })
                        }
                      >
                        {appearance.accentColor === "cyan" && <FaCheck />}
                      </button>
                      <button
                        className={`color-btn blue ${
                          appearance.accentColor === "blue" ? "active" : ""
                        }`}
                        onClick={() =>
                          setAppearance({ ...appearance, accentColor: "blue" })
                        }
                      >
                        {appearance.accentColor === "blue" && <FaCheck />}
                      </button>
                      <button
                        className={`color-btn purple ${
                          appearance.accentColor === "purple" ? "active" : ""
                        }`}
                        onClick={() =>
                          setAppearance({
                            ...appearance,
                            accentColor: "purple",
                          })
                        }
                      >
                        {appearance.accentColor === "purple" && <FaCheck />}
                      </button>
                      <button
                        className={`color-btn green ${
                          appearance.accentColor === "green" ? "active" : ""
                        }`}
                        onClick={() =>
                          setAppearance({ ...appearance, accentColor: "green" })
                        }
                      >
                        {appearance.accentColor === "green" && <FaCheck />}
                      </button>
                    </div>
                  </div>

                  <div className="appearance-card">
                    <h4>Font Size</h4>
                    <select
                      value={appearance.fontSize}
                      onChange={(e) =>
                        setAppearance({
                          ...appearance,
                          fontSize: e.target.value,
                        })
                      }
                      className="appearance-select"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div className="appearance-card">
                    <h4>Compact Mode</h4>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={appearance.compactMode}
                        onChange={(e) =>
                          setAppearance({
                            ...appearance,
                            compactMode: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                    <p className="card-description">
                      Reduce spacing between elements
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === "privacy" && (
              <div className="settings-section">
                <div className="section-header">
                  <FaLock className="section-icon" />
                  <div>
                    <h2>Privacy & Security</h2>
                    <p>Manage your privacy and security settings</p>
                  </div>
                </div>

                <div className="settings-list">
                  <div className="setting-item">
                    <div className="setting-info">
                      <FaUser className="setting-icon" />
                      <div>
                        <h4>Profile Visibility</h4>
                        <p>Make your profile visible to other users</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={privacy.profileVisible}
                        onChange={(e) =>
                          setPrivacy({
                            ...privacy,
                            profileVisible: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaEnvelope className="setting-icon" />
                      <div>
                        <h4>Show Email</h4>
                        <p>Display your email address on your profile</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={privacy.showEmail}
                        onChange={(e) =>
                          setPrivacy({
                            ...privacy,
                            showEmail: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaChartLine className="setting-icon" />
                      <div>
                        <h4>Show Activity</h4>
                        <p>Let others see your recent activity</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={privacy.showActivity}
                        onChange={(e) =>
                          setPrivacy({
                            ...privacy,
                            showActivity: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaGlobe className="setting-icon" />
                      <div>
                        <h4>Data Collection</h4>
                        <p>Allow us to collect anonymous usage data</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={privacy.dataCollection}
                        onChange={(e) =>
                          setPrivacy({
                            ...privacy,
                            dataCollection: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <FaShieldAlt className="setting-icon" />
                      <div>
                        <h4>Two-Factor Authentication</h4>
                        <p>Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={privacy.twoFactorAuth}
                        onChange={(e) =>
                          setPrivacy({
                            ...privacy,
                            twoFactorAuth: e.target.checked,
                          })
                        }
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences */}
            {activeTab === "preferences" && (
              <div className="settings-section">
                <div className="section-header">
                  <FaChartLine className="section-icon" />
                  <div>
                    <h2>Preferences</h2>
                    <p>Configure your trading and analysis preferences</p>
                  </div>
                </div>

                <div className="settings-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Default Currency</label>
                      <select>
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Time Zone</label>
                      <select>
                        <option value="UTC">UTC</option>
                        <option value="EST">EST</option>
                        <option value="PST">PST</option>
                        <option value="GMT">GMT</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Chart Type</label>
                      <select>
                        <option value="candlestick">Candlestick</option>
                        <option value="line">Line</option>
                        <option value="bar">Bar</option>
                        <option value="area">Area</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Default Timeframe</label>
                      <select>
                        <option value="1m">1 Minute</option>
                        <option value="5m">5 Minutes</option>
                        <option value="15m">15 Minutes</option>
                        <option value="1h">1 Hour</option>
                        <option value="1d">1 Day</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Language</label>
                    <select>
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="settings-actions">
              <button
                className={`save-btn ${
                  saveStatus === "saving" ? "saving" : ""
                } ${saveStatus === "saved" ? "saved" : ""}`}
                onClick={handleSave}
                disabled={saveStatus !== "idle"}
              >
                {saveStatus === "idle" && (
                  <>
                    <FaSave />
                    Save Changes
                  </>
                )}
                {saveStatus === "saving" && "Saving..."}
                {saveStatus === "saved" && (
                  <>
                    <FaCheck />
                    Changes Saved!
                  </>
                )}
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
