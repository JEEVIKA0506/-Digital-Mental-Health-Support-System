import React, { useState } from "react";
import Sidebar from "../Sidebar";

function Assessment() {
  const [score, setScore] = useState(null);

  const [answers, setAnswers] = useState({
    stress: 0,
    sleep: 0,
    mood: 0,
    energy: 0,
    focus: 0,
  });

  const calculateScore = () => {
    const total =
      Number(answers.stress) +
      Number(answers.sleep) +
      Number(answers.mood) +
      Number(answers.energy) +
      Number(answers.focus);

    const percentage = Math.round((total / 25) * 100);
    setScore(percentage);
  };

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
        <h1>🧠 Mental Wellness Assessment</h1>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          <Question
            text="How well did you manage stress today?"
            name="stress"
            answers={answers}
            setAnswers={setAnswers}
          />

          <Question
            text="How was your sleep quality?"
            name="sleep"
            answers={answers}
            setAnswers={setAnswers}
          />

          <Question
            text="How positive was your mood today?"
            name="mood"
            answers={answers}
            setAnswers={setAnswers}
          />

          <Question
            text="How energetic did you feel?"
            name="energy"
            answers={answers}
            setAnswers={setAnswers}
          />

          <Question
            text="How focused were you today?"
            name="focus"
            answers={answers}
            setAnswers={setAnswers}
          />

          <button
            onClick={calculateScore}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Calculate Wellness Score
          </button>
        </div>

        {score !== null && (
          <div
            style={{
              background: "#d4edda",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "25px",
            }}
          >
            <h2>🎯 Wellness Score: {score}%</h2>

            <h3>
              {score >= 80
                ? "🟢 Excellent"
                : score >= 60
                ? "🟡 Good"
                : "🔴 Needs Attention"}
            </h3>
          </div>
        )}
      </div>
    </>
  );
}

function Question({
  text,
  name,
  answers,
  setAnswers,
}) {
  return (
    <div style={{ marginBottom: "25px" }}>
      <h3>{text}</h3>

      <select
        value={answers[name]}
        onChange={(e) =>
          setAnswers({
            ...answers,
            [name]: e.target.value,
          })
        }
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
        }}
      >
        <option value="0">Select</option>
        <option value="1">Poor</option>
        <option value="2">Fair</option>
        <option value="3">Average</option>
        <option value="4">Good</option>
        <option value="5">Excellent</option>
      </select>
    </div>
  );
}

export default Assessment;