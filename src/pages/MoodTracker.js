import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";

function MoodTracker() {
const [selectedMood, setSelectedMood] = useState("");

const [history, setHistory] = useState(() => {
try {
const savedHistory = localStorage.getItem("moodHistory");
return savedHistory ? JSON.parse(savedHistory) : [];
} catch (error) {
return [];
}
});

useEffect(() => {
localStorage.setItem(
"moodHistory",
JSON.stringify(history)
);
}, [history]);

const saveMood = () => {
if (!selectedMood) {
alert("Please select a mood first!");
return;
}

```
const now = new Date().toLocaleString();

const newMood = {
  mood: selectedMood,
  date: now,
};

setHistory([...history, newMood]);

alert("Mood saved successfully!");
```

};

const clearHistory = () => {
const confirmDelete = window.confirm(
"Are you sure you want to clear all mood history?"
);

```
if (confirmDelete) {
  setHistory([]);
  localStorage.removeItem("moodHistory");
}
```

};

return (
<> <Sidebar />

```
  <div
    style={{
      marginLeft: "270px",
      padding: "30px",
      background: "#f4f7fc",
      minHeight: "100vh",
    }}
  >
    <h1>😊 Professional Mood Tracker</h1>

    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "20px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Select Today's Mood</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <MoodButton
          emoji="😁"
          label="Excellent"
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />

        <MoodButton
          emoji="😊"
          label="Happy"
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />

        <MoodButton
          emoji="😐"
          label="Normal"
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />

        <MoodButton
          emoji="😔"
          label="Sad"
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />

        <MoodButton
          emoji="😣"
          label="Stressed"
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
      </div>

      <h3 style={{ marginTop: "20px" }}>
        Selected Mood: {selectedMood || "None"}
      </h3>

      <button
        onClick={saveMood}
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
        Save Mood
      </button>
    </div>

    <div
      style={{
        background: "#fff3cd",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "25px",
      }}
    >
      <h2>📊 Mood Statistics</h2>

      <h3>Total Mood Entries: {history.length}</h3>

      <p>
        Last Recorded Mood:
        {history.length > 0
          ? " " + history[history.length - 1].mood
          : " None"}
      </p>
    </div>

    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "25px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>📅 Mood History</h2>

      <button
        onClick={clearHistory}
        style={{
          background: "#e74c3c",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Clear History
      </button>

      {history.length === 0 ? (
        <p>No mood records available.</p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            {item.date} - {item.mood}
          </div>
        ))
      )}
    </div>

    <div
      style={{
        background: "#d4edda",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "25px",
      }}
    >
      <h2>💡 Wellness Insight</h2>

      <p>
        Regular mood tracking helps identify emotional
        patterns and improve mental well-being.
      </p>
    </div>
  </div>
</>


);
}

function MoodButton({
emoji,
label,
selectedMood,
setSelectedMood,
}) {
return (
<button
onClick={() => setSelectedMood(label)}
style={{
padding: "20px",
borderRadius: "12px",
border:
selectedMood === label
? "3px solid #3498db"
: "1px solid #ddd",
background: "white",
cursor: "pointer",
minWidth: "120px",
fontSize: "18px",
}}
>
<div style={{ fontSize: "35px" }}>{emoji}</div> <div>{label}</div> </button>
);
}

export default MoodTracker;
