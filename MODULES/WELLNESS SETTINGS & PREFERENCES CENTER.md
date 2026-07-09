# CODE 
    import React, { useState } from "react";

    function App() {
    const [darkMode, setDarkMode] = useState(false);

    const pageStyle = {
    backgroundColor: darkMode ? "#121212" : "#f4f7fc",
    color: darkMode ? "#ffffff" : "#2c3e50",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif",
    transition: "all 0.3s ease",
    };

    const cardStyle = {
    backgroundColor: darkMode ? "#1f1f1f" : "#ffffff",
    color: darkMode ? "#ffffff" : "#2c3e50",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      };

    const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#3498db",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
    };

    const logoutStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#e74c3c",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    };

    return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: "center" }}>
        ⚙️ Wellness Settings & Preferences Center
      </h1>

      {/* Appearance Settings */}
      <div style={cardStyle}>
        <h2>🌙 Appearance Settings</h2>

        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />{" "}
          Enable Dark Mode
        </label>
      </div>

      {/* Wellness Reminders */}
      <div style={cardStyle}>
        <h2>🔔 Smart Wellness Reminders</h2>

        <p>
          <input type="checkbox" defaultChecked /> Daily Mood Check-In
        </p>

        <p>
          <input type="checkbox" defaultChecked /> Journal Writing Reminder
        </p>

        <p>
          <input type="checkbox" defaultChecked /> Weekly Assessment Reminder
        </p>

        <p>
          <input type="checkbox" /> Hydration Reminder
        </p>
      </div>

      {/* Wellness Goals */}
      <div style={cardStyle}>
        <h2>🎯 Wellness Goals</h2>

        <p>📅 Mood Tracking Goal : 7 Days</p>
        <p>📖 Journal Goal : 5 Entries</p>
        <p>🏃 Exercise Goal : 4 Days / Week</p>
      </div>

      {/* Personal Preferences */}
      <div style={cardStyle}>
        <h2>🧘 Personal Wellness Preferences</h2>

        <p>
          <input type="radio" name="stress" /> Meditation
        </p>

        <p>
          <input type="radio" name="stress" /> Music
        </p>

        <p>
          <input type="radio" name="stress" defaultChecked /> Walking
        </p>

        <p>
          <input type="radio" name="stress" /> Reading
        </p>
      </div>

      {/* Language */}
      <div style={cardStyle}>
        <h2>🌐 Language Preference</h2>

        <select
          style={{
            padding: "10px",
            borderRadius: "8px",
            width: "200px",
          }}
        >
          <option>English</option>
          <option>Tamil</option>
        </select>
      </div>

      {/* Security */}
      <div style={cardStyle}>
        <h2>🔒 Privacy & Security</h2>

        <button style={buttonStyle}>Change Password</button>

        <button style={buttonStyle}>
          Two-Factor Authentication
        </button>

        <button style={buttonStyle}>Privacy Settings</button>
      </div>

      {/* Logout */}
      <div style={cardStyle}>
        <button style={logoutStyle}>
          🚪 Logout
        </button>
      </div>
    </div>
    );
    }

    export default App;
