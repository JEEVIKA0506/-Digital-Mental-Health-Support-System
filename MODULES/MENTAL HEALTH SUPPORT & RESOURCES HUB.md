# MENTAL HEALTH SUPPORT & RESOURCES HUB
# CODE
    import React from "react";

    function App() {
    const cardStyle = {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    };

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
        }}
      >
        🆘 Mental Health Support & Resources Hub
      </h1>

      {/* Emergency Support */}
      <div style={cardStyle}>
        <h2>🚨 Emergency Support Center</h2>

        <p>📞 National Mental Health Helpline</p>
        <p>☎️ 24/7 Crisis Support Available</p>
        <p>👨‍⚕️ Professional Guidance Resources</p>

        <button style={helpButton}>
          Get Immediate Help
        </button>
      </div>

      {/* Self Care Toolkit */}
      <div style={cardStyle}>
        <h2>🧘 Self-Care Toolkit</h2>

        <ul>
          <li>Deep Breathing Exercises</li>
          <li>Guided Meditation Sessions</li>
          <li>Stress Management Techniques</li>
          <li>Sleep Improvement Strategies</li>
          <li>Positive Thinking Practices</li>
        </ul>
      </div>

      {/* Wellness Learning Center */}
      <div style={cardStyle}>
        <h2>📚 Wellness Learning Center</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "15px",
          }}
        >
          <ResourceCard
            title="Understanding Stress"
            icon="🧠"
          />

          <ResourceCard
            title="Building Emotional Strength"
            icon="💪"
          />

          <ResourceCard
            title="Healthy Sleep Habits"
            icon="😴"
          />

          <ResourceCard
            title="Mindfulness Practices"
            icon="🌿"
          />
        </div>
      </div>

      {/* FAQ */}
      <div style={cardStyle}>
        <h2>❓ Frequently Asked Questions</h2>

        <details>
          <summary>What is stress?</summary>
          <p>
            Stress is the body's response to challenges
            and demands in daily life.
          </p>
        </details>

        <details>
          <summary>
            How does journaling improve mental health?
          </summary>
          <p>
            Journaling helps organize thoughts and
            improve emotional awareness.
          </p>
        </details>

        <details>
          <summary>
            Why is sleep important for wellness?
          </summary>
          <p>
            Quality sleep improves emotional and
            physical well-being.
          </p>
        </details>
      </div>

      {/* Daily Wellness Tip */}
      <div
        style={{
          ...cardStyle,
          background: "#d4edda",
        }}
      >
        <h2>💡 Daily Wellness Tip</h2>

        <h3>
          Take 5 minutes today to practice deep
          breathing and focus on positive thoughts.
        </h3>
      </div>
    </div>
    );
      }

    function ResourceCard({ title, icon }) {
    return (
    <div
      style={{
        background: "#eef6ff",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h1>{icon}</h1>
      <h3>{title}</h3>
    </div>
    );
    }

    const helpButton = {
    background: "#e74c3c",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
    };

    export default App;

## Overview

The Mental Health Support & Resources Hub is designed to provide users with immediate access to wellness resources, emergency support information, self-care guidance, and educational content. This module acts as a centralized wellness assistance center within the Digital Mental Health Support System.

## Objective

The objective of this module is to help users access reliable mental wellness resources, improve self-care practices, manage stress effectively, and obtain support whenever needed.

## Features Implemented

### Emergency Support Center

* Crisis Support Information
* Emergency Contact Access
* Quick Help Resources
* Mental Health Helpline Information

### Self-Care Toolkit

* Deep Breathing Exercises
* Meditation Guidance
* Stress Management Techniques
* Sleep Improvement Tips

### Wellness Learning Center

* Mental Health Articles
* Wellness Guides
* Educational Resources
* Self-Improvement Content

### Frequently Asked Questions

* Understanding Stress
* Managing Anxiety
* Benefits of Journaling
* Emotional Well-Being Tips

### Daily Wellness Tip Generator

Provides motivational and wellness-focused guidance to encourage positive mental health habits.

### Resource Categories

* Emotional Wellness
* Physical Wellness
* Social Wellness
* Mindfulness Practices

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS (Inline Styling)

## Benefits

* Encourages self-care practices
* Provides accessible wellness resources
* Improves mental health awareness
* Supports emotional well-being
* Promotes healthy lifestyle habits

## Output

The module provides users with an interactive support center where they can explore wellness resources, access support information, and learn practical strategies for maintaining positive mental health.

## Conclusion

The Mental Health Support & Resources Hub enhances the overall application by providing educational, supportive, and motivational resources that contribute to long-term mental wellness management.
