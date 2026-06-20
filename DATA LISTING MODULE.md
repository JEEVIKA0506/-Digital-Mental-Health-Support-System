# CODE 
    function App() {
    const records = [
    {
      date: "21-06-2026",
      mood: "😊 Happy",
      stress: "Low",
      activity: "Meditation",
      remarks: "Feeling positive today!",
    },
    {
      date: "20-06-2026",
      mood: "😌 Calm",
      stress: "Medium",
      activity: "Reading",
      remarks: "Relaxed and at peace.",
    },
    {
      date: "19-06-2026",
      mood: "🤩 Excited",
      stress: "Low",
      activity: "Walking",
      remarks: "Great energy all day.",
    },
    {
      date: "18-06-2026",
      mood: "😊 Relaxed",
      stress: "Low",
      activity: "Music Therapy",
      remarks: "A calm, soothing evening.",
    },
    ];

    return (
    <div
      style={{
        background: "#f5f9fc",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
        🧠 Digital Mental Health Support System
      </h1>

      <h3 style={{ textAlign: "center", color: "#666" }}>
        Mood Analytics & Data Listing
      </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <div style={card}>
          <h2>😊</h2>
          <h3>8.5 / 10</h3>
          <p>Mood Score</p>
        </div>

        <div style={card}>
          <h2>😌</h2>
          <h3>Low</h3>
          <p>Stress Level</p>
        </div>

        <div style={card}>
          <h2>📖</h2>
          <h3>12</h3>
          <p>Journal Entries</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {records.map((record, index) => (
          <div key={index} style={recordCard}>
            <div style={recordHeader}>
              <h3 style={{ margin: 0 }}>{record.mood}</h3>
              <span style={{ color: "#777", fontSize: "14px" }}>{record.date}</span>
            </div>
            <p style={{ margin: "10px 0" }}>
              <strong>Stress Level:</strong> {record.stress}
            </p>
            <p style={{ margin: "10px 0" }}>
              <strong>Activity:</strong> {record.activity}
            </p>
            <p style={{ margin: "10px 0", color: "#555" }}>
              <strong>Remarks:</strong> {record.remarks}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#d4edda",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        💚 Wellness Insight:
        <br />
        Your mood has improved by 20% this week.
      </div>
    </div>
    );
    }

    const card = {
     background: "white",
     padding: "20px",
     width: "220px",
     textAlign: "center",
     borderRadius: "10px",
     boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
     };

    const recordCard = {
     background: "white",
     padding: "20px",
     borderRadius: "10px",
     boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
     display: "flex",
        flexDirection: "column",
    };

    const recordHeader = {
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
     marginBottom: "15px",
     };

    export default App;




# DATA LISTING MODULE

## Overview

The Data Listing Module displays user mood records and wellness activities in a structured tabular format. It helps users review their emotional history and wellness progress.

## Features

- Mood History Tracking
- Stress Level Monitoring
- Activity Records
- Summary Statistics
- Organized Table View

## Screenshot

![Data Listing](data_listing.png)

## Deliverable

Data Listing Module Successfully Developed.
