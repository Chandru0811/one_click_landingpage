import React from "react";

function Home({ handleLogin }) {
  return (
    <div>
      Home
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  );
}

export default Home;
