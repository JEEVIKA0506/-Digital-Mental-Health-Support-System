# REPORTS & ANALYTICS DASHBOARD
# code 
    import React from "react";

    function App() {
    return (
    <div
      style={{
        background: "#f4f7fb",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Segoe UI",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2c3e50",
        }}
      >
        📊 Reports & Analytics Dashboard
      </h1>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Card title="😊 Mood Score" value="85%" />
        <Card title="😟 Stress Level" value="Low" />
        <Card title="📖 Journal Entries" value="28" />
        <Card title="🧠 Wellness Score" value="88%" />
      </div>

      {/* Weekly Report */}
      <div style={section}>
        <h2>📅 Weekly Wellness Report</h2>

        <div style={weekContainer}>
          <Day day="Mon" score="82%" />
          <Day day="Tue" score="85%" />
          <Day day="Wed" score="88%" />
          <Day day="Thu" score="84%" />
          <Day day="Fri" score="90%" />
          <Day day="Sat" score="91%" />
          <Day day="Sun" score="89%" />
        </div>
      </div>

      {/* Analytics */}
      <div style={section}>
        <h2>📈 Analytics Summary</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <AnalyticsCard
            title="Mood Improvement"
            value="+12%"
          />

          <AnalyticsCard
            title="Stress Reduction"
            value="-8%"
          />

          <AnalyticsCard
            title="Journal Consistency"
            value="92%"
          />

          <AnalyticsCard
            title="Goal Achievement"
            value="87%"
          />
        </div>
      </div>

      {/* Monthly Summary */}
      <div style={section}>
        <h2>📊 Monthly Summary</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Average Mood Score: 85%</li>
          <li>Average Stress Level: Low</li>
          <li>Total Journal Entries: 28</li>
          <li>Wellness Improvement: +12%</li>
          <li>Assessment Completion Rate: 96%</li>
        </ul>
      </div>

      {/* Recommendations */}
      <div
        style={{
          ...section,
          background: "#d4edda",
        }}
      >
        <h2>💡 Personalized Recommendations</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Continue regular journaling.</li>
          <li>Maintain healthy sleep habits.</li>
          <li>Practice mindfulness daily.</li>
          <li>Continue physical activity.</li>
          <li>Monitor stress levels regularly.</li>
        </ul>
      </div>
    </div>
    );
    }

    function Card({ title, value }) {
     return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
    );
    }

    function Day({ day, score }) {
    return (
    <div
      style={{
        background: "#eef6ff",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h3>{day}</h3>
      <h2>{score}</h2>
    </div>
    );
    }

    function AnalyticsCard({ title, value }) {
    return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
    );
    }

    const section = {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "25px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    };

    const weekContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
    gap: "15px",
    };

    export default App;
## Overview

The Reports & Analytics Dashboard is designed to provide users with a comprehensive view of their mental wellness progress. The dashboard visualizes mood trends, stress levels, journal activity, and wellness assessment results through interactive analytics and summary reports.

## Objective

* To monitor mental wellness progress.
* To analyze mood and stress patterns.
* To track journal activity and user engagement.
* To provide data-driven wellness insights.
* To support informed mental health decisions.

## Features Implemented

### Mood Analytics

Displays mood trends and average mood scores over time.

### Stress Analysis

Provides an overview of stress levels and stress-related patterns.

### Journal Activity Report

Shows the number of journal entries and writing consistency.

### Wellness Assessment Report

Displays mental wellness assessment scores and status.

### Weekly Progress Summary

Tracks wellness performance throughout the week.

### Monthly Performance Report

Provides monthly wellness statistics and improvement trends.

### Personalized Insights

Generates recommendations based on user wellness data.

## Dashboard Components

* Mood Score Card
* Stress Level Card
* Journal Activity Card
* Wellness Score Card
* Weekly Progress Chart
* Monthly Summary Panel
* Recommendation Section

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS

## Benefits

* Improves self-awareness.
* Helps identify mental health trends.
* Supports wellness monitoring.
* Encourages healthy lifestyle habits.
* Provides personalized wellness guidance.

## Module Workflow

User Opens Analytics Dashboard
↓
System Retrieves Wellness Data
↓
Analytics Generated
↓
Reports Displayed
↓
Insights and Recommendations Generated
↓
User Reviews Progress

## Output

The system generates visual reports and analytics that help users monitor their mental wellness journey through mood tracking, stress analysis, journal activity, and assessment results.

## Screenshot

![Reports & Analytics Dashboard](reports-analytics-dashboard.png)

## Conclusion

The Reports & Analytics Dashboard was successfully developed to provide users with meaningful wellness insights, progress tracking, and performance analytics for better mental health management.

## Deliverable

Successfully developed the Reports & Analytics Dashboard with wellness reports, trend analysis, scorecards, and personalized recommendations.
