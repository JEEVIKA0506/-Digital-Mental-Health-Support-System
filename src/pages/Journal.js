import React, { useState } from "react";

function Journal() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const saveJournal = () => {
    if (entry.trim() === "") return;

    const newEntry = {
      text: entry,
      date: new Date().toLocaleString(),
    };

    setEntries([newEntry, ...entries]);
    setEntry("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📖 Personal Journal</h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginTop: "20px",
        }}
      >
        <h2>Write Today's Reflection</h2>

        <textarea
          rows="8"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="How are you feeling today?"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginTop: "10px",
          }}
        />

        <button
          onClick={saveJournal}
          style={{
            marginTop: "15px",
            background: "#3498db",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Save Journal
        </button>
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          marginTop: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>📚 Journal History</h2>

        {entries.length === 0 ? (
          <p>No journal entries yet.</p>
        ) : (
          entries.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                paddingBottom: "15px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <small>{item.date}</small>
              <p>{item.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Journal;