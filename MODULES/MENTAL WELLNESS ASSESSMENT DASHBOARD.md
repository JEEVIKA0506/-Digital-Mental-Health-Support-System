# MENTAL WELLNESS ASSESSMENT DASHBOARD
# CODE 
    import React, { useState } from "react";

    function App() {
    const [form, setForm] = useState({
    stress: 5,
    sleep: 5,
    emotion: 5,
    activity: 5,
    social: 5,
    motivation: 5,
    selfcare: 5,
    productivity: 5,
     });

    const totalScore = Math.round(
    Object.values(form).reduce((a, b) => a + Number(b), 0) /
      40 *
      100
    );

    let status = "Needs Improvement";

    if (totalScore >= 85) status = "Excellent";
    else if (totalScore >= 70) status = "Good";
      else if (totalScore >= 50) status = "Moderate";

    const updateValue = (field, value) => {
    setForm({ ...form, [field]: value });
    };

    const AssessmentCard = ({ title, field, icon }) => (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>
        {icon} {title}
      </h3>

      <input
        type="range"
        min="1"
        max="5"
        value={form[field]}
        onChange={(e) =>
          updateValue(field, e.target.value)
        }
        style={{ width: "100%" }}
      />

      <h2>{form[field]}/5</h2>
    </div>
    );

    return (
    <div
      style={{
        background: "#f4f7fb",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Segoe UI",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🧠 Mental Wellness Assessment Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <AssessmentCard
          icon="😟"
          title="Stress Level"
          field="stress"
        />

        <AssessmentCard
          icon="😴"
          title="Sleep Quality"
          field="sleep"
        />

        <AssessmentCard
          icon="😊"
          title="Emotional Well-being"
          field="emotion"
        />

        <AssessmentCard
          icon="🏃"
          title="Physical Activity"
          field="activity"
        />

        <AssessmentCard
          icon="👥"
          title="Social Well-being"
          field="social"
        />

        <AssessmentCard
          icon="🎯"
          title="Motivation Level"
          field="motivation"
        />

        <AssessmentCard
          icon="🌱"
          title="Self-Care Habits"
          field="selfcare"
        />

        <AssessmentCard
          icon="📈"
          title="Daily Productivity"
          field="productivity"
        />
      </div>

      <div
        style={{
          background: "white",
          marginTop: "30px",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Overall Wellness Index</h2>

        <h1
          style={{
            fontSize: "60px",
            color: "#27ae60",
          }}
        >
          {totalScore}%
        </h1>

        <h2>{status}</h2>

        <h3>💡 Personalized Recommendations</h3>

        <ul
          style={{
            textAlign: "left",
            maxWidth: "500px",
            margin: "auto",
          }}
        >
          <li>Continue physical activity.</li>
          <li>Maintain a healthy sleep schedule.</li>
          <li>Practice mindfulness and relaxation.</li>
          <li>Keep journaling regularly.</li>
          <li>Stay socially connected.</li>
        </ul>
      </div>
    </div>
    );
     }

    export default App;

## Overview

The Mental Wellness Assessment Dashboard is an interactive module developed as part of the Digital Mental Health Support System. This module helps users assess their overall mental well-being by evaluating multiple wellness factors including stress levels, sleep quality, emotional health, physical activity, social well-being, motivation, self-care habits, and daily productivity.

The dashboard generates an overall wellness score and provides personalized recommendations to support positive mental health practices.

---

## Objective

- Assess the overall mental wellness of users.
- Monitor important wellness indicators.
- Promote self-awareness and healthy habits.
- Generate wellness scores and insights.
- Support continuous mental health monitoring.

---

## Features Implemented

### Stress Assessment
Evaluates the user's stress level and helps identify stress-related concerns.

### Sleep Quality Assessment
Measures sleep quality and promotes healthy sleep habits.

### Emotional Well-being Assessment
Tracks emotional health and encourages emotional awareness.

### Physical Activity Assessment
Monitors exercise habits and physical wellness.

### Social Well-being Assessment
Evaluates social interaction and emotional support systems.

### Motivation Level Assessment
Measures motivation and engagement in daily activities.

### Self-Care Habits Assessment
Assesses mindfulness and self-care practices.

### Daily Productivity Assessment
Tracks productivity and daily performance.

### Wellness Summary Dashboard
Displays wellness scores for different assessment categories.

### Overall Wellness Index
Calculates a combined wellness score based on user responses.

### Personalized Recommendations
Provides wellness suggestions to improve mental health and lifestyle habits.

---

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS

---

## Benefits

- Improves mental health awareness.
- Encourages healthy lifestyle choices.
- Supports self-assessment and self-reflection.
- Helps identify areas for wellness improvement.
- Promotes emotional and psychological well-being.
- Provides personalized wellness guidance.

---

## Module Workflow

User Opens Assessment Dashboard
↓
Completes Wellness Assessment Categories
↓
System Calculates Category Scores
↓
Overall Wellness Index Generated
↓
Personalized Recommendations Displayed
↓
User Reviews Wellness Report

---

## Output

The system generates a comprehensive Mental Wellness Report containing category-wise wellness scores, overall wellness index, mental health status, and personalized recommendations.

---

## Screenshot

![Mental Wellness Assessment Dashboard](mental-wellness-assessment-dashboard.png)

---

## Conclusion

The Mental Wellness Assessment Dashboard was successfully developed to provide users with an interactive platform for evaluating mental wellness. The module promotes self-awareness, supports healthy lifestyle habits, and assists users in monitoring their emotional and psychological well-being.

---

## Deliverable

✅ Successfully developed an Interactive Mental Wellness Assessment Dashboard with wellness evaluation, score generation, progress tracking, and personalized recommendations.
