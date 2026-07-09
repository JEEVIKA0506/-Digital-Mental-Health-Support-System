import React from "react";
import Sidebar from "../Sidebar";

function Dashboard() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          padding: "30px",
        }}
      >
        <h1>🏠 Dashboard</h1>
        <p>Welcome to the Digital Mental Health Support System.</p>
      </div>
    </>
  );
}

export default Dashboard;