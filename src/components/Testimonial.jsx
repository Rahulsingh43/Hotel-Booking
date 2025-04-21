import React from "react";
import "../App.css";
import "./Testimonial.css";

// Sample testimonial data
const reviews = [
  {
    id: 1,
    name: "Rohit",
    yearsOnAirbnb: 6,
    date: "4 days ago",
    rating: 5,
    comment: "A nice homely feeling with a sweet and caring host.",
    avatar: "/images/avatar.jpg",
  },
  {
    id: 2,
    name: "Marie",
    yearsOnAirbnb: 9,
    date: "February 2025",
    rating: 5,
    comment:
      "It was a pleasure to stay at Annie’s place. Annie was very hospitable. The room was perfect and I slept really well.",
    avatar: "/images/avatar.jpg",
  },
  {
    id: 3,
    name: "Carl",
    yearsOnAirbnb: 2,
    date: "1 week ago",
    rating: 3,
    comment: "Satisfied",
    avatar: "/images/avatar.jpg",
  },
  {
    id: 4,
    name: "Jennifer",
    yearsOnAirbnb: 9,
    date: "January 2025",
    rating: 5,
    comment:
      "The environment is beautiful, and the amenities make it feel just like home. The breakfast was amazing!",
    avatar: "/images/avatar.jpg",
  },
  {
    id: 5,
    name: "Baoer",
    yearsOnAirbnb: 8,
    date: "2 months ago",
    rating: 4,
    comment: "Great experience. Annie was a wonderful host.",
    avatar: "/images/avatar.jpg",
  },
];

// Rating stars component
const StarRating = ({ rating }) => {
  const fullStars = "★".repeat(rating);
  const emptyStars = "☆".repeat(5 - rating);
  return (
    <span className="star-rating">
      {fullStars}
      {emptyStars}
    </span>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Guest Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <img
                src={review.avatar}
                alt={review.name}
                className="review-avatar"
              />
              <div className="review-info">
                <h3>{review.name}</h3>
                <p>{review.yearsOnAirbnb} years on Airbnb</p>
                <StarRating rating={review.rating} />
              </div>
            </div>
            <p className="review-date">{review.date}</p>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
