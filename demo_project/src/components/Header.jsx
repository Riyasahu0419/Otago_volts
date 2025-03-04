import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        className="profile-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s"
        alt="Profile"
      />
      <div>
        <p className="welcome-text">Hello, Welcome 🎉</p>
        <h2 className="user-name">John Weak</h2>
      </div>
      <span className="notification-icon">🔔</span>
    </div>
  );
};

export default Header;
