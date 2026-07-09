import React from "react";

function WellnessReport() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2c3e50",
        }}
      >
        📄 Wellness Report Generator
      </h1>

      <div
        style={{
          background: "white",
          maxWidth: "800px",
          margin: "30px auto",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>🧠 Mental Wellness Summary</h2>

        <hr />

        <div style={row}>
          <span>Mood Score</span>
          <strong>85%</strong>
        </div>

        <div style={row}>
          <span>Stress Level</span>
          <strong>Low</strong>
        </div>

        <div style={row}>
          <span>Sleep Quality</span>
          <strong>90%</strong>
        </div>

        <div style={row}>
          <span>Emotional Health</span>
          <strong>88%</strong>
        </div>

        <hr />

        <h2 style={{ textAlign: "center" }}>
          Overall Wellness Index
        </h2>

        <h1
          style={{
            textAlign: "center",
            color: "#27ae60",
            fontSize: "60px",
          }}
        >
          88%
        </h1>

        <h2
          style={{
            textAlign: "center",
            color: "#27ae60",
          }}
        >
          🟢 Excellent
        </h2>

        <hr />

        <h2>💡 Recommendations</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Continue Mood Tracking</li>
          <li>Maintain Sleep Schedule</li>
          <li>Practice Mindfulness Daily</li>
          <li>Keep Journaling Regularly</li>
        </ul>

        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          📥 Download Wellness Report
        </button>
      </div>
    </div>
  );
}

const row = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  fontSize: "18px",
};

export default WellnessReport;