import React from "react";
import Sidebar from "../Sidebar";

function Analytics() {
  const moodScore = 85;
  const sleepScore = 90;
  const stressScore = 70;
  const wellnessScore = 82;

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
        <h1>📊 Wellness Analytics Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <ScoreCard title="😊 Mood Score" score={moodScore} />
          <ScoreCard title="😴 Sleep Score" score={sleepScore} />
          <ScoreCard title="😌 Stress Control" score={stressScore} />
          <ScoreCard title="🌟 Wellness Index" score={wellnessScore} />
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >
          <h2>📈 Weekly Wellness Trend</h2>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "15px",
              height: "250px",
              marginTop: "20px",
            }}
          >
            <Bar value={60} label="Mon" />
            <Bar value={75} label="Tue" />
            <Bar value={70} label="Wed" />
            <Bar value={85} label="Thu" />
            <Bar value={90} label="Fri" />
            <Bar value={80} label="Sat" />
            <Bar value={82} label="Sun" />
          </div>
        </div>

        <div
          style={{
            background: "#d4edda",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "25px",
          }}
        >
          <h2>💡 AI Wellness Insight</h2>

          <p>
            Your wellness trend is improving steadily.
            Sleep quality and mood are strong indicators
            of positive mental well-being.
          </p>
        </div>
      </div>
    </>
  );
}

function ScoreCard({ title, score }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>

      <h1 style={{ color: "#3498db" }}>
        {score}%
      </h1>
    </div>
  );
}

function Bar({ value, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "50px",
          height: `${value * 2}px`,
          background: "#3498db",
          borderRadius: "10px 10px 0 0",
        }}
      />

      <p>{label}</p>
    </div>
  );
}

export default Analytics;