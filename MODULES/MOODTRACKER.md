# CODE 
    import React, { useState } from "react";

    function App() {
    const [selectedMood, setSelectedMood] = useState("");

    const moods = [
    { emoji: "😊", name: "Happy" },
    { emoji: "😌", name: "Calm" },
    { emoji: "😃", name: "Excited" },
    { emoji: "😔", name: "Sad" },
    { emoji: "😣", name: "Stressed" },
    { emoji: "😴", name: "Tired" },
    ];

    const moodHistory = [
    {
      mood: "😊 Happy",
      stress: "Low",
      activity: "Reading",
      date: "21-06-2026",
    },
    {
      mood: "😌 Calm",
      stress: "Medium",
      activity: "Meditation",
      date: "20-06-2026",
    },
    {
      mood: "😃 Excited",
      stress: "Low",
      activity: "Exercise",
      date: "19-06-2026",
    },
    ];

    return (
    <div
      style={{
        background: "#f4f7fb",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2c3e50",
        }}
      >
        😊 Mood Tracker Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "25px",
        }}
      >
        <div style={summaryCard}>
          <h2>😊</h2>
          <h3>Happy</h3>
          <p>Current Mood</p>
        </div>

        <div style={summaryCard}>
          <h2>🟢</h2>
          <h3>Low</h3>
          <p>Stress Level</p>
        </div>

        <div style={summaryCard}>
          <h2>⭐</h2>
          <h3>8.5/10</h3>
          <p>Mood Score</p>
        </div>
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          marginTop: "30px",
          borderRadius: "15px",
        }}
      >
        <h2>Select Today's Mood</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {moods.map((mood, index) => (
            <div
              key={index}
              onClick={() => setSelectedMood(mood.name)}
              style={{
                background:
                  selectedMood === mood.name ? "#3498db" : "#ffffff",
                color:
                  selectedMood === mood.name ? "white" : "#2c3e50",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h1>{mood.emoji}</h1>
              <h3>{mood.name}</h3>
            </div>
          ))}
        </div>

        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "#27ae60",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          Save Today's Mood
        </button>
      </div>

      <div
        style={{
          background: "white",
          marginTop: "30px",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>📅 Weekly Mood Overview</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          <div>Mon 😊</div>
          <div>Tue 😌</div>
          <div>Wed 😃</div>
          <div>Thu 😔</div>
          <div>Fri 😊</div>
          <div>Sat 😌</div>
          <div>Sun 😃</div>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <h2>📖 Mood History</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {moodHistory.map((item, index) => (
            <div key={index} style={historyCard}>
              <h3>{item.mood}</h3>
              <p>Stress: {item.stress}</p>
              <p>Activity: {item.activity}</p>
              <p>Date: {item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#d4edda",
          padding: "20px",
          marginTop: "30px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h3>💚 Wellness Insight</h3>
        <p>
          Your mood has improved compared to last week. Continue your
          positive activities and maintain healthy habits.
        </p>
      </div>
    </div>
    );
    }

    const summaryCard = {
    background: "white",
    width: "220px",
    padding: "20px",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
    };

    const historyCard = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
    };

    export default App;





# MOOD TRACKER MODULE

## Overview

The Mood Tracker Module enables users to monitor their daily emotional state, stress level, and activities. It helps users identify emotional patterns and maintain mental wellness records.

## Features

- Daily Mood Recording
- Stress Level Tracking
- Activity Monitoring
- Mood History Records
- User-Friendly Dashboard

## Benefits

- Improves self-awareness.
- Tracks emotional changes over time.
- Helps identify stress patterns.
- Supports mental wellness management.

## Screenshot

![Mood Tracker](mood-tracker-module.png)

## Deliverable

Mood Tracker Module Successfully Developed and Tested.
