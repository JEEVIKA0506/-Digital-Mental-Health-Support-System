import React, { useState } from "react";
import Sidebar from "../Sidebar";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          minHeight: "100vh",
          padding: "30px",
          background: darkMode ? "#121212" : "#f4f7fc",
          color: darkMode ? "white" : "black",
          transition: "0.3s",
        }}
      >
        <h1>⚙️ Wellness Settings & Preferences</h1>

        {/* Appearance */}
        <div style={card}>
          <h2>🎨 Appearance</h2>

          <label style={label}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            &nbsp; Enable Dark Mode
          </label>
        </div>

        {/* Notifications */}
        <div style={card}>
          <h2>🔔 Notifications</h2>

          <label style={label}>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() =>
                setNotifications(!notifications)
              }
            />
            &nbsp; Daily Wellness Reminders
          </label>

          <br />

          <label style={label}>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={() =>
                setEmailAlerts(!emailAlerts)
              }
            />
            &nbsp; Email Alerts
          </label>
        </div>

        {/* Language */}
        <div style={card}>
          <h2>🌐 Language Preference</h2>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            style={{
              padding: "10px",
              borderRadius: "8px",
              width: "220px",
            }}
          >
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Privacy */}
        <div style={card}>
          <h2>🔒 Privacy & Security</h2>

          <label style={label}>
            <input
              type="checkbox"
              checked={privacyMode}
              onChange={() =>
                setPrivacyMode(!privacyMode)
              }
            />
            &nbsp; Enable Privacy Mode
          </label>

          <p
            style={{
              marginTop: "10px",
              color: darkMode ? "#ccc" : "#555",
            }}
          >
            Privacy Mode hides sensitive wellness
            information from quick view.
          </p>
        </div>

        {/* Wellness Summary */}
        <div
          style={{
            background: darkMode ? "#1e1e1e" : "#d4edda",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          <h2>💡 Current Preferences</h2>

          <p>
            🌙 Dark Mode:
            {darkMode ? " Enabled" : " Disabled"}
          </p>

          <p>
            🔔 Notifications:
            {notifications ? " Enabled" : " Disabled"}
          </p>

          <p>
            📧 Email Alerts:
            {emailAlerts ? " Enabled" : " Disabled"}
          </p>

          <p>🌐 Language: {language}</p>

          <p>
            🔒 Privacy Mode:
            {privacyMode ? " Enabled" : " Disabled"}
          </p>
        </div>
      </div>
    </>
  );
}

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  marginTop: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const label = {
  fontSize: "17px",
  cursor: "pointer",
};

export default Settings;