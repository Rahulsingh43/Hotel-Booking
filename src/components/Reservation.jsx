import React from "react";
import "../App.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const listing = location.state;

  console.log(listing,'listing');
  const routeToRoomDetail = () => {
        navigate(`/order`,{
          state:{checkIn,checkOut,listing}
        })
  }

  const [checkIn, setCheckIn] = useState("2025-04-26");
  const [checkOut, setCheckOut] = useState("2025-05-01");

  return (
    <section className="reservation container">
      <div className="price-box">
        <h3>₹42,421 <span>for 5 nights</span></h3>
        <div className="date-selector">
          <div>
            <label>Check-in</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}/>
          </div>
          <div>
            <label>Check-out</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Guests</label>
          <select>
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
          </select>
        </div>
        <button className="btn-reserve" onClick={() => routeToRoomDetail()}>Reserve</button>
        <p className="note">You won't be charged yet</p>
      </div>
    </section>
  );
};

export default Reservation;
