import React, { useState } from "react"; // Import useState
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup"; // Assuming you have a Popup component

const Layout = () => {
  // Initialize state for orderPopup
  const [orderPopup, setOrderPopup] = useState(false);

  // Function to toggle the orderPopup state
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Layout;
