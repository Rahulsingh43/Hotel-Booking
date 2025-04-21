import React from "react";
// import "../App.css";
import "./HostInfo.css"
const HostInfo = () => {
  return (
    <section >
    <h2>Meet your host</h2>
    <div className="host-box">
      {/* Left Section */}
      <div className="host-card">
        <img src="/images/host.jpg" alt="Host Annie" className="host-image" />
        <div className="host-info">
          <h3>Annie</h3>
          <p className="superhost-tag">🏆 Superhost</p>
          <div className="reviews-rating">
            <p>
              <strong>103</strong> Reviews
            </p>
            <p>
              ⭐ <strong>4.94</strong> Rating
            </p>
            <p>
              📅 <strong>2</strong> Years hosting
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="host-details">
        <h3>Annie is a Superhost</h3>
        <p>
          Superhosts are experienced, highly rated hosts who are committed to
          providing great stays for guests.
        </p>
        <div className="host-summary">
          <h4>Host details</h4>
          <p>Response rate: 100%</p>
          <p>Responds within an hour</p>
          <button className="btn-message">Message host</button>
        </div>
      </div>
    </div>

    {/* Additional Info */}
    <div className="additional-info">
      <p>🎓 Where I went to school: Université de Lyon</p>
      <p>💼 My work: HRD at retreat</p>
    </div>

    <p className="payment-warning">
      ⚠️ To protect your payment, always use Airbnb to send money and
      communicate with hosts.
    </p>
  </section>
  );
};

export default HostInfo;
