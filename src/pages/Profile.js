import React from "react";
import Sidebar from "../Sidebar";

function Profile() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          padding: "30px",
          background: "#f4f7fc",
          minHeight: "100vh",
        }}
      >
        <h1>👤 Wellness Profile</h1>

        {/* Profile Card */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
            marginTop: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "4px solid #3498db",
            }}
          />

          <h2 style={{ marginTop: "15px" }}>
            Jeevika Balusamy
          </h2>

          <p>Digital Mental Health System User</p>

          <div
            style={{
              marginTop: "20px",
              textAlign: "left",
              maxWidth: "500px",
              margin: "20px auto",
              lineHeight: "2",
            }}
          >
            <h3>📋 Personal Information</h3>

            <p>📧 Email: jeevika@gmail.com</p>

            <p>📱 Phone: +91 9876543210</p>

            <p>🎂 Age: 21</p>

            <p>🏫 Occupation: Student</p>
          </div>

          <div
            style={{
              background: "#fff3cd",
              padding: "20px",
              borderRadius: "12px",
              marginTop: "20px",
              textAlign: "left",
              maxWidth: "500px",
              margin: "20px auto",
            }}
          >
            <h3>🚨 Emergency Contact</h3>

            <p>👤 Name: Balusamy</p>

            <p>❤️ Relationship: Father</p>

            <p>📞 Contact: +91 9876543211</p>

            <p>📧 Email: balusamy@gmail.com</p>
          </div>

          <h1 style={{ color: "#27ae60" }}>
            Wellness Score: 88%
          </h1>

          <h3>🟢 Flourishing</h3>
        </div>

        {/* Wellness Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <Card title="😊 Emotional Strength" value="90%" />
          <Card title="😴 Sleep Health" value="85%" />
          <Card title="🏃 Physical Wellness" value="92%" />
          <Card title="👥 Social Wellness" value="80%" />
        </div>

        {/* Wellness Journey */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🔥 Wellness Journey</h2>

          <p>Current Streak: 14 Days</p>

          <p>Best Streak: 32 Days</p>

          <p>Journal Entries: 24</p>

          <p>Mood Records: 38</p>
        </div>

        {/* Personal Insight */}
        <div
          style={{
            background: "#d4edda",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "25px",
          }}
        >
          <h2>💡 Personal Insight</h2>

          <p>
            You demonstrate strong emotional resilience
            and healthy self-care habits. Continue your
            wellness journey by maintaining consistent
            mood tracking, journaling, and healthy sleep
            habits.
          </p>
        </div>
      </div>
    </>
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

      <h1 style={{ color: "#3498db" }}>
        {value}
      </h1>
    </div>
  );
}

export default Profile;