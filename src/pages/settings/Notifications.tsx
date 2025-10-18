import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBell, FaEnvelope, FaCheck } from "react-icons/fa";
import Select from "react-select";

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: false,
    priceAlerts: false,
    newsUpdates: false,
    marketAnalysis: false,
    weeklyReports: false,
    systemUpdates: false,
  });

  const [preferences, setPreferences] = useState({
    defaultCurrencies: ["USD"],
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const id = parsedUser.id || parsedUser.userId;
      setUserId(id);

      axios
        .get(`http://localhost:3002/api/notications/notifications/${id}`)
        .then((res) => {
          if (res.data && res.data.data) {
            const notifData = res.data.data;
            const parsedNotifications = JSON.parse(notifData.notification || "{}");
            const parsedCurrencies = JSON.parse(notifData.currencies || "[]");

            setNotifications((prev) => ({
              ...prev,
              ...parsedNotifications,
            }));

            setPreferences((prev) => ({
              ...prev,
              defaultCurrencies: parsedCurrencies,
            }));
          }
        })
        .catch(() => console.log("⚠️ No notification preferences found."));
    }
  }, []);


  const handleUpdate = async () => {
    if (!userId) return;

    try {
      setSaveStatus("saving");

      await axios.put(`http://localhost:3002/api/notications/notificationsUpdate/${userId}`, {
        notifications,
        defaultCurrencies: preferences.defaultCurrencies,
      });

      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch (err) {
      console.error("❌ Failed to update notifications:", err);
      setSaveStatus("idle");
    }
  };

  const currencyOptions = [
    { value: "USD", label: "USD - US Dollar" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
    { value: "JPY", label: "JPY - Japanese Yen" },
    { value: "AUD", label: "AUD - Australian Dollar" },
  ];

  return (
    <div className="settings-section">
      <div className="section-header">
        <FaBell className="section-icon" />
        <div>
          <h2>Notification Preferences</h2>
          <p>Choose what notifications you want to receive</p>
        </div>
      </div>

      <div className="settings-list">
        {[
          {
            key: "emailNotifications",
            icon: <FaEnvelope className="setting-icon" />,
            title: "Email Notifications",
            desc: "Receive important updates via email",
          },
        ].map((item) => (
          <div key={item.key} className="setting-item">
            <div className="setting-info">
              {item.icon}
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications[item.key as keyof typeof notifications]}
                onChange={(e) =>
                  setNotifications({
                    ...notifications,
                    [item.key]: e.target.checked,
                  })
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label className="text-white mb-1 block">Select Currencies</label>
        <Select
          className="currency-select2"
          options={currencyOptions}
          isMulti
          value={currencyOptions.filter((opt) =>
            preferences.defaultCurrencies.includes(opt.value)
          )}
          onChange={(selected) =>
            setPreferences({
              ...preferences,
              defaultCurrencies: selected.map((s) => s.value),
            })
          }
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "#131722",
              borderColor: "#2e3445",
              color: "#fff",
              boxShadow: "none",
              ":hover": { borderColor: "#00ffd1" },
            }),
            singleValue: (base) => ({
              ...base,
              color: "#00ffd1",
            }),
            multiValue: (base) => ({
              ...base,
              backgroundColor: "#00ffd1",
              color: "#000",
            }),
            multiValueLabel: (base) => ({
              ...base,
              color: "#000",
              fontWeight: "600",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "#1a1f2b",
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "#00ffd1"
                : state.isFocused
                ? "#1e2535"
                : "#1a1f2b",
              color: state.isSelected ? "#000" : "#fff",
              cursor: "pointer",
            }),
          }}
        />
      </div>

      <div className="settings-actions flex justify-end mt-4">
        <button
          className={`save-btn ${saveStatus === "saving" ? "saving" : ""} ${
            saveStatus === "saved" ? "saved" : ""
          }`}
          onClick={handleUpdate}
          disabled={saveStatus !== "idle"}
        >
          {saveStatus === "idle" && "Save Changes"}
          {saveStatus === "saving" && "Saving..."}
          {saveStatus === "saved" && (
            <>
              <FaCheck /> Saved!
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Notifications;
