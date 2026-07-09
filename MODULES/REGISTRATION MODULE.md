# CODE 
    import React, { useState } from "react";

    function App() {
    const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    stressLevel: "",
    activity: "",
    password: "",
    confirmPassword: ""
    });

    const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Mental Wellness Profile Created Successfully!");
    };

    return (
    <div
      style={{
        background: "#eef5f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          🧠 Mental Wellness Registration
        </h2>

        <p style={{ textAlign: "center", color: "gray" }}>
          Create your wellness profile to begin your mental health journey.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", margin: "8px 0" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", margin: "8px 0" }}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", margin: "8px 0" }}
          />

          <select
            name="stressLevel"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", margin: "8px 0" }}
          >
            <option value="">Current Stress Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            name="activity"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", margin: "8px 0" }}
          >
            <option value="">Preferred Wellness Activity</option>
            <option>Meditation</option>
            <option>Music</option>
            <option>Reading</option>
            <option>Exercise</option>
            <option>Walking</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", margin: "8px 0" }}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", margin: "8px 0" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
              cursor: "pointer"
            }}
          >
            Create Wellness Profile
          </button>
        </form>
      </div>
    </div>
    );
    }

    export default App;


# REGISTRATION MODULE

## Overview

The Registration Module enables users to create a personalized wellness profile within the Digital Mental Health Support System. Users can enter their details, choose their stress level, and select preferred wellness activities.

## Features

- User Registration
- Stress Level Selection
- Wellness Activity Preference
- Password Validation
- Personalized Wellness Profile

## Workflow

1. User enters personal information.
2. User selects stress level.
3. User chooses a wellness activity.
4. System validates inputs.
5. Profile is created successfully.

## Registration Module Screenshot

![Registration Module](registration_module.png)

## Deliverable

Mental Wellness Registration Module Successfully Developed.
