import React from "react";
import "../App.css";

const Amenities = () => {
  return (
    <section className="amenities container">
      <h3>What this place offers</h3>
      <ul>
        <li>Wifi</li>
        <li>TV</li>
        <li>Kitchen</li>
        <li>Lock on bedroom door</li>
        <li>Free washer</li>
        <li>Dedicated workspace</li>
      </ul>
      <button className="btn-show">Show all amenities</button>
    </section>
  );
};

export default Amenities;
