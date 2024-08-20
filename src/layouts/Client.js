import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/client/Home";

function Client({
  handleLogout,
  handleLogin,
  handleClientLogin,
  isClientLogin,
}) {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home handleLogin={handleLogin} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Client;
