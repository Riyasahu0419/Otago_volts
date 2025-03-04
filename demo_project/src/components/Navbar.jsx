import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
     <nav className="navbar">
      <Link to="/" className="nav-item">🏠 Home</Link>
      <Link to="/aboutus" className="nav-item">📋 AboutUs</Link>
      <Link to="/contact" className="nav-item">📋 ContactUs</Link>
      <Link to="/resource" className="nav-item">📚 Resource</Link>
      <Link to="/reminder" className="nav-item">⏰ Reminder</Link>
    </nav>
    </>
  );
};

export default Navbar;
