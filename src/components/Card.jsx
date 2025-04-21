import React from "react";
import "./Card.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ listing }) => {
    const navigate = useNavigate();
  
    const routeToRoomDetail = (id) => {
      console.log('idd',id);
        navigate(`/listing/${id}`,{state:{
          listing
        }})
    }

  return (
    <div className="card">
      <div className="card-header">
        <img src={listing.image} alt={listing.title} className="card-img" />
        <div className="badge">Guest favourite</div>
        <div className="heart-icon">
          <FaHeart />
        </div>
      </div>
      <div className="card-body">
        <div className="host">
          <img src={listing.hostImage} alt="Host" className="host-img" />
        </div>
        <h3 className="location">{listing.location}</h3>
        <p className="description">{listing.description}</p>
        <p className="date">{listing.date}</p>
        <p className="price">
          ₹{listing.price} for {listing.nights} nights
        </p>
        <button onClick={() => routeToRoomDetail(listing.id)}>view</button>
        <div className="rating">
          <FaStar className="star" /> {listing.rating}
        </div>
      </div>
    </div>
  );
};

export default Card;
