import { useState } from "react";
import { FaChartLine, FaCheck } from "react-icons/fa";
import axios from "axios";

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    defaultCurrency: "USD",
    timeZone: "UTC",
    chartType: "candlestick",
    defaultTimeframe: "1h",
    language: "en",
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">(
    "idle"
  );

  const handleSave = async () => {
    try {
      setSaveStatus("saving");
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      await axios.put(
        `http://localhost:3002/api/preferences/${user.id}`,
        preferences
      );

      setTimeout(() => {
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus("idle"), 1500);
      }, 800);
    } catch (err) {
      console.error("❌ Preferences update failed:", err);
      setSaveStatus("idle");
    }
  };

  return (
    <div className="settings-section">
      <div className="section-header">
        <FaChartLine className="section-icon" />
        <div>
          <h2>Preferences</h2>
          <p>Configure your trading and analysis preferences</p>
        </div>
      </div>

      <div className="settings-form">
        {/* Currency & Timezone */}
        <div className="form-row">
          <div className="form-group">
            <label>Default Currency</label>
            <select
              value={preferences.defaultCurrency}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  defaultCurrency: e.target.value,
                })
              }
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
            </select>
          </div>

          <div className="form-group">
            <label>Time Zone</label>
            <select
              value={preferences.timeZone}
              onChange={(e) =>
                setPreferences({ ...preferences, timeZone: e.target.value })
              }
            >
              <option value="UTC">UTC</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
              <option value="GMT">GMT</option>
            </select>
          </div>
        </div>

        {/* Chart Type & Timeframe */}
        <div className="form-row">
          <div className="form-group">
            <label>Chart Type</label>
            <select
              value={preferences.chartType}
              onChange={(e) =>
                setPreferences({ ...preferences, chartType: e.target.value })
              }
            >
              <option value="candlestick">Candlestick</option>
              <option value="line">Line</option>
              <option value="bar">Bar</option>
              <option value="area">Area</option>
            </select>
          </div>

          <div className="form-group">
            <label>Default Timeframe</label>
            <select
              value={preferences.defaultTimeframe}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  defaultTimeframe: e.target.value,
                })
              }
            >
              <option value="1m">1 Minute</option>
              <option value="5m">5 Minutes</option>
              <option value="15m">15 Minutes</option>
              <option value="1h">1 Hour</option>
              <option value="1d">1 Day</option>
            </select>
          </div>
        </div>

        {/* Language */}
        <div className="form-group">
          <label>Language</label>
          <select
            value={preferences.language}
            onChange={(e) =>
              setPreferences({ ...preferences, language: e.target.value })
            }
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
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

export default Preferences;
