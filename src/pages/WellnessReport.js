import React from "react";
import Sidebar from "../Sidebar";

function WellnessReport() {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "270px", padding: "30px" }}>
        <h1>📄 Wellness Report</h1>

        <h3>Mood Score: 85%</h3>
        <h3>Stress Level: Low</h3>
        <h3>Sleep Quality: 90%</h3>
        <h3>Emotional Health: 88%</h3>

        <hr />

        <h2>Overall Wellness Index: 88%</h2>

        <h3 style={{ color: "green" }}>
          🟢 Excellent
        </h3>

        <button
          style={{
            padding: "12px 20px",
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          📥 Download Report
        </button>
      </div>
    </>
  );
}

export default WellnessReport;