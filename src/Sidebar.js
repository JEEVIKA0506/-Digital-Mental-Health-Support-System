import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#2c3e50",
        color: "white",
        padding: "20px",
        position: "fixed",
      }}
    >
      <h2>🧠 Mental Health System</h2>

      <hr />

      <MenuItem to="/dashboard" text="🏠 Dashboard" />
      <MenuItem to="/moodtracker" text="😊 Mood Tracker" />
      <MenuItem to="/journal" text="📖 Journal" />
      <MenuItem to="/assessment" text="📝 Assessment" />
      <MenuItem to="/analytics" text="📊 Analytics" />
      <MenuItem to="/profile" text="👤 Profile" />
      <MenuItem to="/settings" text="⚙️ Settings" />
      <MenuItem to="/supporthub" text="🆘 Support Hub" />
      <MenuItem to="/report" text="📄 Wellness Report" />

      <hr />

      <MenuItem to="/" text="🚪 Logout" />
    </div>
  );
}

function MenuItem({ to, text }) {
  return (
    <Link
      to={to}
      style={{
        display: "block",
        color: "white",
        textDecoration: "none",
        padding: "10px 0",
        fontSize: "16px",
      }}
    >
      {text}
    </Link>
  );
}

export default Sidebar;