import React from "react";
import './Order.css';
import Navbar from "../shared/Navbar";
import { useLocation } from "react-router-dom";

export default function Order() {
  const location = useLocation();

  const reserveDate = location.state;

  console.log(reserveDate,'oder');
  
  return (
    <>
    <Navbar />
<div className="container">
      <div className="cards">

        {/* Left Panel */}
        <div className="left-panel">

          <div className="section">
            <p>We ask every guest to remember a few simple things about what makes a great guest.</p>
            <ul>
              <li>Follow the house rules</li>
              <li>Treat your Host’s home like your own</li>
            </ul>
          </div>

          <div className="section">
            <div className="host-warning">
              <span className="host-warning-icon">📅</span>
              <div>
                <p>
                  <span className="highlight">The Host will need to accept this request.</span>
                  You’ll pay now, but will get a full refund if your reservation isn’t confirmed within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <p className="razorpay-section">
              Proceed to <strong><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Razorpay_logo.svg" alt="Razorpay" height="16" style={{ verticalAlign: 'middle' }} /></strong>
            </p>
            <p className="note">
              You will be directed to Razorpay to provide your PAN and other details to complete your payment.
            </p>
          </div>

          <div className="section">
            <p className="agreement">
              By selecting the button below, I agree to the 
              <a href="#"> Host's House Rules</a>, 
              <a href="#"> Ground rules for guests</a>, 
              <a href="#"> Airbnb's Rebooking and Refund Policy</a> 
              and that Airbnb can <a href="#">charge my payment method</a> if I'm responsible for damage.
            </p>
            <button className="btn">Continue</button>
          </div>

        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="room-info">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-13420207/original/6b983548-32cf-4ff6-8215-b9e3b4a10b6c.jpeg?im_w=1200"
              alt="Room"
              className="room-img"
            />
            <div className="room-details">
              <span className="room-title">Aragona Room in Casa delle Api!</span>
              <span className="room-meta">Room in home</span>
              <span className="rasting">★ 4.87 (204 reviews) · 🛡 Superhost</span>
            </div>
          </div>

          <div className="price-section">
            <h3>Your total</h3>
            <div className="price-row">
              <span>₹6,797.72 x 1 night</span>
              <span>₹6,797.72</span>
            </div>
            <div className="price-row">
              <span>Taxes</span>
              <span>₹194.67</span>
            </div>
            <div className="price-row price-total">
              <span>Total (<strong>INR</strong>)</span>
              <span>₹6,992.39</span>
            </div>
            <div className="link">Price breakdown</div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
