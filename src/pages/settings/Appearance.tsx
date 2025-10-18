import { useState } from "react";
import { FaPalette, FaSun, FaMoon, FaCheck } from "react-icons/fa";
import axios from "axios";

const Appearance = () => {
  const [appearance, setAppearance] = useState({
    theme: "light",
    accentColor: "blue",
    fontSize: "medium",
    compactMode: false,
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">(
    "idle"
  );

  const handleSave = async () => {
    try {
      setSaveStatus("saving");
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      await axios.put(`http://localhost:3002/api/appearance/${user.id}`, appearance);

      setTimeout(() => {
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus("idle"), 1500);
      }, 800);
    } catch (err) {
      console.error("❌ Appearance update failed:", err);
      setSaveStatus("idle");
    }
  };

  return (
    <div className="settings-section">
      <div className="section-header">
        <FaPalette className="section-icon" />
        <div>
          <h2>Appearance</h2>
          <p>Customize the look and feel of your experience</p>
        </div>
      </div>

      <div className="settings-grid">
        {/* Theme */}
        <div className="appearance-card">
          <h4>Theme</h4>
          <div className="theme-options">
            <button
              className={`theme-btn ${
                appearance.theme === "light" ? "active" : ""
              }`}
              onClick={() => setAppearance({ ...appearance, theme: "light" })}
            >
              <FaSun />
              <span>Light</span>
            </button>
            <button
              className={`theme-btn ${
                appearance.theme === "dark" ? "active" : ""
              }`}
              onClick={() => setAppearance({ ...appearance, theme: "dark" })}
            >
              <FaMoon />
              <span>Dark</span>
            </button>
          </div>
        </div>

        {/* Accent Color */}
        <div className="appearance-card">
          <h4>Accent Color</h4>
          <div className="color-options">
            {["cyan", "blue", "purple", "green"].map((color) => (
              <button
                key={color}
                className={`color-btn ${color} ${
                  appearance.accentColor === color ? "active" : ""
                }`}
                onClick={() =>
                  setAppearance({ ...appearance, accentColor: color })
                }
              >
                {appearance.accentColor === color && <FaCheck />}
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div className="appearance-card">
          <h4>Font Size</h4>
          <select
            value={appearance.fontSize}
            onChange={(e) =>
              setAppearance({ ...appearance, fontSize: e.target.value })
            }
            className="appearance-select"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Compact Mode */}
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
          <p className="card-description">Reduce spacing between elements</p>
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

export default Appearance;
