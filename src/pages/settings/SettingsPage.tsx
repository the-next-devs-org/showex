import { useState } from "react";
import "./SettingsPage.css";
import {
  FaUser,
  FaBell,
  // FaLock,
  // FaPalette,
  // FaChartLine,
} from "react-icons/fa";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Appearance from "./Appearance";
import Privacy from "./Privacy";
import Preferences from "./Preferences";


function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: <FaUser /> },
    { id: "notifications", label: "Notifications", icon: <FaBell /> },
    // { id: "appearance", label: "Appearance", icon: <FaPalette /> },
    // { id: "privacy", label: "Privacy & Security", icon: <FaLock /> },
    // { id: "preferences", label: "Preferences", icon: <FaChartLine /> },
  ];

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-header">
          <h1>Settings</h1>
          <p className="settings-subtitle">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="settings-content">
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

          <main className="settings-main">
            {activeTab === "profile" && (
              <Profile />
            )}

            {activeTab === "notifications" && (
              <Notifications />
            )}

            {activeTab === "appearance" && (
              <Appearance />
            )}

            {activeTab === "privacy" && (
              <Privacy />
            )}

            {activeTab === "preferences" && (
              <Preferences />
            )}

          </main>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
