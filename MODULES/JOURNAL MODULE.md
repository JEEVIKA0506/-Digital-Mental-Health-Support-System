# JOURNAL MODULE
## Overview

The Journal Module is a digital journaling feature developed as part of the Digital Mental Health Support System. It allows users to record their daily thoughts, experiences, emotions, and reflections in a secure and organized manner. The module promotes self-awareness and supports mental well-being through regular journaling practices.

## Objective
* To provide users with a platform for expressing their thoughts and emotions.
* To encourage daily self-reflection and emotional awareness.
* To maintain a personal record of experiences and feelings.
* To support mental wellness through digital journaling.

## Features Implemented
1. Journal Entry Creation
Users can create and save personal journal entries.
Includes a title and detailed journal content.
2. Daily Reflection
Allows users to document daily experiences and thoughts.
Encourages emotional expression and mindfulness.
3. Journal Statistics
Displays journal-related metrics.
Shows total entries and activity information.
4. Recent Journal Entries
Displays previously recorded journal entries.
Provides quick access to past reflections.
5. Wellness Tips
Provides mental wellness guidance.
Encourages positive habits and self-care practices.

## Technologies Used
* React.js
* JavaScript
* HTML
* CSS
## Module Workflow 
      User Opens Journal Module
                ↓
      Creates Journal Entry
                ↓
      Writes Thoughts & Reflections
                ↓
      Saves Journal Entry
                ↓
      Journal History Updated
                ↓
      User Reviews Previous Entries
# CODE 

    import React, { useState } from "react";

    function App() {
     const [title, setTitle] = useState("");
     const [journal, setJournal] = useState("");

     const entries = [
    {
      title: "Productive Day",
      date: "21-06-2026",
      content: "Completed project tasks and learned React concepts."
    },
    {
      title: "Stress Management",
      date: "20-06-2026",
      content: "Practiced meditation and relaxation techniques."
    },
    {
      title: "Daily Reflection",
      date: "19-06-2026",
      content: "Spent quality time with family and friends."
    }
     ];

    const saveJournal = () => {
    if (title === "" || journal === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Journal Saved Successfully!");
    setTitle("");
    setJournal("");
    };

    return (
    <div
      style={{
        background: "#f4f8fb",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
        📝 Personal Journal
      </h1>

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Journal Writing Section */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Write Today's Reflection</h2>

          <input
            type="text"
            placeholder="Journal Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <textarea
            rows="10"
            placeholder="Write your thoughts here..."
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={saveJournal}
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "12px",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          >
            Save Journal Entry
          </button>
        </div>

        {/* Statistics Section */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📊 Journal Stats</h2>

          <div style={card}>
            <h3>15</h3>
            <p>Total Entries</p>
          </div>

          <div style={card}>
            <h3>7</h3>
            <p>This Week</p>
          </div>

          <div style={card}>
            <h3>92%</h3>
            <p>Reflection Score</p>
          </div>
        </div>
      </div>

      {/* Recent Entries */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "30px auto",
        }}
      >
        <h2>📖 Recent Journal Entries</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {entries.map((entry, index) => (
            <div key={index} style={entryCard}>
              <h3>{entry.title}</h3>
              <small>{entry.date}</small>
              <p>{entry.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wellness Tip */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "#d4edda",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        💚 Wellness Tip:
        <br />
        Writing a journal regularly improves emotional awareness and helps reduce stress.
      </div>
     </div>
     );
     }

     const card = {
    background: "#eef7ff",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "15px",
    };

    const entryCard = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
     boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
     };

     export default App;

