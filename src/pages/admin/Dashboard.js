import React from "react";

function Dashboard({ handleLogout }) {
  return (
    <div>
      Dashboard <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
}

export default Dashboard;
