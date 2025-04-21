import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="main-image">
        <img src="/images/hotel1.jpg" alt="Main room" />
      </div>
      <div className="sub-images">
        <img src="/images/hotel2.jpg" alt="Bedroom" />
        <img src="/images/hotel3.jpg" alt="Living Room" />
        <img src="/images/hotel4.jpg" alt="Bathroom" />
        <img src="/images/hotel5.jpg" alt="Kitchen" />
      </div>
    </section>
  );
};

export default Gallery;
