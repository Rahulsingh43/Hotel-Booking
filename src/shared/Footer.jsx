import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Support Section */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Centre</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighbourhood concern</li>
          </ul>
        </div>

        {/* Hosting Section */}
        <div className="footer-section">
          <h4>Hosting</h4>
          <ul>
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Join a free Hosting class</li>
            <li>Find a co-host</li>
          </ul>
        </div>

        {/* Airbnb Section */}
        <div className="footer-section">
          <h4>Airbnb</h4>
          <ul>
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
        <div className="social-icons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
