import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUser, FaSave, FaCheck } from "react-icons/fa";
import { getNames } from "country-list";

const Profile: React.FC = () => {
  const [profile, setProfile] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });

  const [countries, setCountries] = useState<string[]>([]); 
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || 'https://shoxez.com/api';

  useEffect(() => {
    // ✅ load all country names
    const allCountries = getNames().sort();
    setCountries(allCountries);

    const storedUser = localStorage.getItem("user");
    if (!storedUser) return;

    const parsedUser = JSON.parse(storedUser);

    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/profile/${parsedUser.id}`);
        const user = res.data.user;

        setProfile({
          id: user.id,
          firstName: user.firstname,
          lastName: user.lastname,
          email: user.emailaddress,
          country: user.country,
        });
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    if (!profile.id) return;

    try {
      setSaveStatus("saving");

      await axios.put(`${BACKEND_URL}/profileUpdate/${profile.id}`, {
        firstName: profile.firstName,
        lastName: profile.lastName,
        country: profile.country,
      });

      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch (err) {
      console.error("Update failed:", err);
      setSaveStatus("idle");
    }
  };

  return (
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
            <label>First Name</label>
            <input
              type="text"
              value={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              placeholder="Enter your first name"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              placeholder="Enter your last name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={profile.email}
              disabled
              placeholder="Your email address"
            />
          </div>

          {/* ✅ Replaced input with select for country */}
          <div className="form-group">
            <label>Country</label>
            <select
              value={profile.country}
              onChange={(e) => setProfile({ ...profile, country: e.target.value })}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="settings-actions flex justify-end">
          <button
            className={`save-btn ${saveStatus === "saving" ? "saving" : ""} ${
              saveStatus === "saved" ? "saved" : ""
            }`}
            onClick={handleUpdate}
            disabled={saveStatus !== "idle"}
          >
            {saveStatus === "idle" && (
              <>
                <FaSave /> Save Changes
              </>
            )}
            {saveStatus === "saving" && "Saving..."}
            {saveStatus === "saved" && (
              <>
                <FaCheck /> Changes Saved!
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
