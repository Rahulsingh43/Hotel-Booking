import React from "react";
import "./Footer.css";

const Footer = ({ setActiveTab }) => {
  return (
    <div className="footer">
      <h3>Inspiration for future getaways</h3>
      <nav className="footer-nav">
        <button onClick={() => setActiveTab("popular")}>Popular</button>
        <button onClick={() => setActiveTab("arts-culture")}>Arts & culture</button>
        <button onClick={() => setActiveTab("outdoors")}>Outdoors</button>
        <button onClick={() => setActiveTab("mountains")}>Mountains</button>
        <button onClick={() => setActiveTab("beach")}>Beach</button>
        <button onClick={() => setActiveTab("unique-stays")}>Unique stays</button>
        <button onClick={() => setActiveTab("categories")}>Categories</button>
        <button onClick={() => setActiveTab("things-to-do")}>Things to do</button>
      </nav>
    </div>
  );
};

export default Footer;
