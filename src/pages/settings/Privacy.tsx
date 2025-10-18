import { useState } from "react";
import {
  FaLock,
  FaUser,
  FaEnvelope,
  FaChartLine,
  FaGlobe,
  FaShieldAlt,
  FaCheck,
} from "react-icons/fa";
import axios from "axios";

const Privacy = () => {
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showActivity: true,
    dataCollection: false,
    twoFactorAuth: false,
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">(
    "idle"
  );

  const handleSave = async () => {
    try {
      setSaveStatus("saving");
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      await axios.put(`http://localhost:3002/api/privacy/${user.id}`, privacy);

      setTimeout(() => {
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus("idle"), 1500);
      }, 800);
    } catch (err) {
      console.error("❌ Privacy update failed:", err);
      setSaveStatus("idle");
    }
  };

  return (
    <div className="settings-section">
      <div className="section-header">
        <FaLock className="section-icon" />
        <div>
          <h2>Privacy & Security</h2>
          <p>Manage your privacy and security settings</p>
        </div>
      </div>

      <div className="settings-list">
        {/* Profile Visibility */}
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
                setPrivacy({ ...privacy, profileVisible: e.target.checked })
              }
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        {/* Show Email */}
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
                setPrivacy({ ...privacy, showEmail: e.target.checked })
              }
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        {/* Show Activity */}
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
                setPrivacy({ ...privacy, showActivity: e.target.checked })
              }
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        {/* Data Collection */}
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
                setPrivacy({ ...privacy, dataCollection: e.target.checked })
              }
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        {/* Two-Factor Authentication */}
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
                setPrivacy({ ...privacy, twoFactorAuth: e.target.checked })
              }
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="settings-actions">
        <button
          className={`save-btn ${
            saveStatus === "saving"
              ? "saving"
              : saveStatus === "saved"
              ? "saved"
              : ""
          }`}
          onClick={handleSave}
          disabled={saveStatus !== "idle"}
        >
          {saveStatus === "idle" && "Save Changes"}
          {saveStatus === "saving" && "Saving..."}
          {saveStatus === "saved" && (
            <>
              <FaCheck /> Changes Saved!
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Privacy;
