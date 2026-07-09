## Dashboard Screenshot

![Dashboard](dashboard.png)




# DASHBOARD 
function App() {
  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Digital Mental Health Support System
      </h1>

      <p style={{ textAlign: "center", color: "gray" }}>
        Mental Wellness Dashboard
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={cardStyle}>
          <h2>😊 Mood Tracker</h2>
          <p>Track your daily emotions.</p>
        </div>

        <div style={cardStyle}>
          <h2>📋 Assessment</h2>
          <p>Evaluate your mental health.</p>
        </div>

        <div style={cardStyle}>
          <h2>📖 Journal</h2>
          <p>Write personal journal entries.</p>
        </div>

        <div style={cardStyle}>
          <h2>💡 Wellness Tips</h2>
          <p>View mental health guidance.</p>
        </div>

        <div style={cardStyle}>
          <h2>📊 Reports</h2>
          <p>Track your progress history.</p>
        </div>

        <div style={cardStyle}>
          <h2>👤 Profile</h2>
          <p>Manage account information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
