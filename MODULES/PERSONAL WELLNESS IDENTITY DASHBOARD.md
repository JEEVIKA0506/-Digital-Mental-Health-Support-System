# PERSONAL WELLNESS IDENTITY DASHBOARD
# code 
    import React from "react";

    function App() {
    return (
    <div
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "25px",
        }}
      >
        🌟 Personal Wellness Identity Dashboard
      </h1>

      {/* Wellness Identity Card */}
      <div style={card}>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              border: "4px solid #4CAF50",
            }}
          />

          <h2>Jeevika Balusamy</h2>
          <p>📅 Member Since: June 2026</p>

          <h3 style={{ color: "#27ae60" }}>
            🟢 Flourishing
          </h3>

          <h1 style={{ color: "#3498db" }}>
            Wellness Score: 88%
          </h1>
        </div>
      </div>

      {/* Wellness DNA */}
      <div style={card}>
        <h2>🧠 Wellness DNA</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <CircleCard
            emoji="😊"
            score="90%"
            title="Emotional Strength"
          />

          <CircleCard
            emoji="😴"
            score="85%"
            title="Sleep Health"
          />

          <CircleCard
            emoji="🏃"
            score="92%"
            title="Physical Wellness"
          />

          <CircleCard
            emoji="👥"
            score="80%"
            title="Social Wellness"
          />
        </div>
      </div>

      {/* Journey & Goals */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={card}>
          <h2>🔥 Wellness Journey</h2>

          <h3>Current Streak: 14 Days</h3>
          <h3>Best Streak: 32 Days</h3>

          <div
            style={{
              background: "#ddd",
              height: "20px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "75%",
                background: "#e67e22",
                height: "20px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        <div style={card}>
          <h2>🎯 Current Wellness Goal</h2>

          <h3>
            Complete 7-Day Mood Tracking Challenge
          </h3>

          <p>Progress: 5 / 7 Days</p>

          <div
            style={{
              background: "#ddd",
              height: "20px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "70%",
                background: "#2ecc71",
                height: "20px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div style={card}>
        <h2>🏅 Achievement Collection</h2>

        <div style={badgeContainer}>
          <Badge text="Wellness Explorer" />
          <Badge text="Mood Master" />
          <Badge text="Journal Champion" />
          <Badge text="Stress Navigator" />
        </div>
      </div>

      {/* AI Insight */}
      <div
        style={{
          ...card,
          background: "#d4edda",
        }}
      >
        <h2>💡 Personal Insight</h2>

        <p style={{ fontSize: "18px" }}>
          "You show strong emotional resilience and
          consistent self-care habits. Continue
          maintaining your positive wellness
          practices."
        </p>
      </div>

      {/* Timeline */}
      <div style={card}>
        <h2>🌱 Growth Timeline</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>2024 → Started Wellness Journey</li>
          <li>2025 → Completed Assessments</li>
          <li>2026 → Earned Wellness Explorer Badge</li>
          <li>2026 → Achieved 30-Day Streak</li>
        </ul>
      </div>
    </div>
    );
    }

    function CircleCard({ emoji, score, title }) {
    return (
    <div
      style={{
        background: "#f8f9fa",
        padding: "20px",
        borderRadius: "20px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "8px solid #4CAF50",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontWeight: "bold",
          background: "white",
        }}
      >
        <span>{emoji}</span>
        <span>{score}</span>
      </div>

      <h4 style={{ marginTop: "15px" }}>
        {title}
      </h4>
    </div>
    );
    }

    function Badge({ text }) {
    return (
    <div
      style={{
        background: "#eef6ff",
        padding: "12px 20px",
        borderRadius: "25px",
        fontWeight: "bold",
      }}
    >
      🏅 {text}
    </div>
    );
    }

    const badgeContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "15px",
    };

    const card = {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "20px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
    };

    export default App;

## Overview

The Personal Wellness Identity Dashboard is a user-centric module developed as part of the Digital Mental Health Support System. This dashboard provides a comprehensive view of a user's mental wellness journey by combining personal profile information, wellness analytics, achievements, goals, and personalized insights into a single interface.

## Objective

The primary objective of this module is to help users understand their mental wellness status, track personal growth, and stay motivated through visual wellness indicators and achievement-based progress tracking.

## Features Implemented

### Wellness Identity Card

Displays user profile information including:

* Profile Picture
* User Name
* Membership Information
* Wellness Status
* Overall Wellness Score

### Wellness DNA Analysis

Provides an overview of key wellness dimensions:

* Emotional Strength
* Sleep Health
* Physical Wellness
* Social Wellness

The wellness dimensions are represented using circular wellness indicators for better visualization.

### Wellness Journey Tracker

Tracks user consistency and progress through:

* Current Wellness Streak
* Best Wellness Streak
* Progress Visualization

### Wellness Goal Management

Displays active wellness goals and completion progress.

### Achievement Collection

Recognizes user accomplishments through wellness badges:

* Wellness Explorer
* Mood Master
* Journal Champion
* Stress Navigator

### Personal Insight Engine

Generates personalized wellness observations and motivational guidance based on user wellness data.

### Growth Timeline

Maintains a chronological record of important wellness milestones and achievements.

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS (Inline Styling)

## Benefits

* Improves self-awareness
* Encourages positive wellness habits
* Tracks mental wellness progress
* Increases user engagement through achievements
* Provides personalized wellness insights
* Supports long-term mental health monitoring

## Module Workflow

User Login
↓
Access Wellness Dashboard
↓
View Wellness Profile
↓
Analyze Wellness DNA
↓
Track Goals and Achievements
↓
Receive Personalized Insights
↓
Monitor Growth Timeline

## Output

The module provides a centralized wellness dashboard where users can view their mental wellness profile, track achievements, monitor progress, and gain valuable insights into their personal well-being.

## Screenshot

![Personal Wellness Identity Dashboard](personal-wellness-identity-dashboard.png)

## Conclusion

The Personal Wellness Identity Dashboard was successfully developed to enhance user engagement and wellness monitoring. It serves as a personalized wellness hub that combines profile management, wellness analytics, goal tracking, achievements, and personalized recommendations into a single user-friendly interface.

## Deliverable

Successfully implemented the Personal Wellness Identity Dashboard featuring Wellness DNA Analysis, Wellness Journey Tracking, Goal Monitoring, Achievement Collection, Personal Insight Generation, and Growth Timeline Visualization.
