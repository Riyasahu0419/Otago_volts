import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./Pages/ContactUs";
import Resource from "./Pages/Resource";
import Reminder from "./Pages/Reminder";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/aboutus" element={<AboutUs />} />
       
      </Routes>
    </>
  );
};

export default App;
