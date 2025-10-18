import React, { useState, useEffect } from "react";
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import axios from "axios";
import { FaEnvelope, FaCheck } from "react-icons/fa";
import Select from "react-select";
import './Notificationpage.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const apiBase = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || '';

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const id = parsedUser.id || parsedUser.userId;
      setUserId(id);

      axios
        .get(`${apiBase}/notications/notifications/${id}`)
        .then((res) => {
          if (res.data && res.data.data) {
            const notifData = res.data.data;

            const parsedNotifications = notifData.notification
              ? JSON.parse(notifData.notification)
              : {};
            const parsedCurrencies = notifData.currencies
              ? JSON.parse(notifData.currencies)
              : [];

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
  }, [apiBase]);

  const handleUpdate = async () => {
    if (!userId) return;

    try {
      setSaveStatus("saving");

      await axios.put(`${apiBase}/notications/notificationsUpdate/${userId}`, {
        notifications,
        defaultCurrencies: preferences.defaultCurrencies,
      });

      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
      toast.success('Notifications updated successfully!');
    } catch (err) {
      console.error("❌ Failed to update notifications:", err);
      setSaveStatus("idle");
      toast.error('Failed to update notifications.');
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
    <div className="">
      <div className="ds-notif-list">
        {[
          {
            key: "emailNotifications",
            icon: <FaEnvelope className="setting-icon" />,
            title: "Email Notifications",
            desc: "Receive important updates via email",
          },
        ].map((item) => (
          <div key={item.key} className="ds-notif-item">
            <div className="ds-notif-info">
              {item.icon}
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
            <label className="ds-notif-toggle">
              <input
                type="checkbox"
                className="ds-notif-toggle-input"
                checked={notifications[item.key as keyof typeof notifications]}
                onChange={(e) =>
                  setNotifications({
                    ...notifications,
                    [item.key]: e.target.checked,
                  })
                }
              />
              <span className="ds-notif-slider" aria-hidden="true"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="ds-notif-form-group">
        <label className="text-white mb-1 block">Select Currencies</label>
        <Select
          className="ds-notif-currency-select"
          classNamePrefix="ds-notif-select"
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
            control: (base) => ({ ...base, backgroundColor: '#fff', borderColor: '#e6e9ee', color: '#111827', boxShadow: 'none' }),
            singleValue: (base) => ({ ...base, color: '#111827' }),
            multiValue: (base) => ({ ...base, backgroundColor: '#eef6f3', color: '#0b3b2e', borderRadius: 6, padding: '2px 6px' }),
            multiValueLabel: (base) => ({ ...base, color: '#0b3b2e', fontWeight: 600 }),
            menu: (base) => ({ ...base, backgroundColor: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? '#eef6f3'
                : state.isFocused
                ? '#f5faf8'
                : '#fff',
              color: state.isSelected ? '#0b3b2e' : '#111827',
              cursor: 'pointer',
            }),
          }}
        />
      </div>

      <div className="ds-notif-actions">
        <button
          className={`ds-notif-save ${saveStatus === "saving" ? "saving" : ""} ${
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

const NotificationPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="ds-root">
        <ToastContainer />
        <div className="ds-header">
          <h1 className="ds-title">Notifications</h1>
          <p className="ds-subtitle">Manage your notifications</p>
        </div>
        <div className="ds-grid">
          <Notifications />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationPage;
