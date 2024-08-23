import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/client/Home";
import "../styles/client.css";
import Header from "../components/client/Header";
import Footer from "../components/client/Footer";
import LeadMagnetPopup from "../pages/client/LeadMagnetPopup";
import Success from "../pages/client/Success";
import Error from "../pages/client/Error";

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
          <LeadMagnetPopup />
          <Success />
          <Error />
          <Header />
          <Routes>
            <Route path="/" element={<Home handleLogin={handleLogin} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Client;
