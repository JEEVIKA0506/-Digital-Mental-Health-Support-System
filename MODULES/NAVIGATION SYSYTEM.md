# CODE 
    import React, { useState } from "react";
    import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

    /* ---------------- PAGES ---------------- */
    const Home = () => <h2>🏠 Home - Welcome to MindCare</h2>;
    const Dashboard = () => <h2>📊 Dashboard - Mental Health Insights</h2>;
    const Mood = () => <h2>😊 Mood Tracker - Track Your Emotions</h2>;
    const Chatbot = () => <h2>💬 AI Chat Support</h2>;
    const Settings = () => <h2>⚙️ Wellness Settings</h2>;

     /* ---------------- MAIN APP ---------------- */
    export default function App() {
       const [dark, setDark] = useState(false);

    return (
    <Router>
      <div style={dark ? styles.appDark : styles.appLight}>

        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          <h2 style={styles.logo}>🧠 MindCare</h2>

          <NavItem to="/" label="Home" />
          <NavItem to="/dashboard" label="Dashboard" />
          <NavItem to="/mood" label="Mood Tracker" />
          <NavItem to="/chatbot" label="Chat Support" />
          <NavItem to="/settings" label="Settings" />

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            style={styles.toggleBtn}
          >
            {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div style={styles.main}>

          {/* TOP BAR */}
          <div style={styles.topbar}>
            <h3>Digital Mental Health System</h3>
          </div>

          {/* ROUTES */}
          <div style={styles.page}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mood" element={<Mood />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>

      </div>
    </Router>
    );
    }

    /* ---------------- NAV ITEM ---------------- */
    function NavItem({ to, label }) {
    return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.navItem,
        background: isActive ? "#4f46e5" : "transparent",
        color: isActive ? "white" : "#cbd5e1",
      })}
    >
      {label}
    </NavLink>
    );
    }

    /* ---------------- STYLES ---------------- */
    const styles = {
    appLight: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
    background: "#f8fafc",
    color: "#111",
    },
    appDark: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
    background: "#0f172a",
    color: "white",
    },

    sidebar: {
    width: "240px",
    padding: "20px",
    background: "#111827",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    },

    logo: {
    color: "#38bdf8",
    marginBottom: "20px",
    },

    navItem: {
    padding: "10px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "0.3s",
    },

    main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    },

    topbar: {
    padding: "15px",
    background: "#1e293b",
    color: "white",
    },

    page: {
    padding: "20px",
    },

    toggleBtn: {
    marginTop: "20px",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#22c55e",
    color: "white",
    },
    };
