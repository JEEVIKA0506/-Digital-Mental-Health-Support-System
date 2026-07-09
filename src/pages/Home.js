import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
          width: "80%",
          maxWidth: "900px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            color: "#2c3e50",
            fontSize: "42px",
          }}
        >
          🧠 Digital Mental Health Support System
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            marginTop: "20px",
          }}
        >
          Monitor • Track • Improve Your Mental Wellness Journey
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <Feature title="😊 Mood Tracking" />
          <Feature title="📖 Personal Journal" />
          <Feature title="🧠 Wellness Assessment" />
          <Feature title="📊 Analytics Dashboard" />
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            marginTop: "40px",
            padding: "15px 40px",
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function Feature({ title }) {
  return (
    <div
      style={{
        background: "#f4f7fc",
        padding: "20px",
        borderRadius: "12px",
        fontWeight: "bold",
      }}
    >
      {title}
    </div>
  );
}

export default Home;