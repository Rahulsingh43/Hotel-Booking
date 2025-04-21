import React from "react";
import Card from "./Card";
import "./CardList.css";

const listings = [
  {
    id: 1,
    image: "https://source.unsplash.com/400x300/?house,livingroom",
    hostImage: "https://randomuser.me/api/portraits/women/1.jpg",
    location: "Levallois-Perret, France",
    description: "Stay with Annie · Hrd at retreat",
    date: "26 Apr – 1 May",
    price: "42,421",
    nights: 5,
    rating: 4.94,
  },
  {
    id: 2,
    image: "https://source.unsplash.com/400x300/?bedroom,wood",
    hostImage: "https://randomuser.me/api/portraits/men/2.jpg",
    location: "Pekutatan, Indonesia",
    description: "Stay with Pink Barrel Bali",
    date: "7–12 Apr",
    price: "13,487",
    nights: 5,
    rating: 4.94,
  },
  {
    id: 3,
    image: "https://source.unsplash.com/400x300/?room,colorful",
    hostImage: "https://randomuser.me/api/portraits/women/3.jpg",
    location: "London, UK",
    description: "Stay with Sara · Environmental activist",
    date: "11–16 May",
    price: "26,006",
    nights: 5,
    rating: 4.86,
  },
  {
    id: 4,
    image: "https://source.unsplash.com/400x300/?house,spain",
    hostImage: "https://randomuser.me/api/portraits/men/4.jpg",
    location: "Santa Cruz de Tenerife, Spain",
    description: "Stay with Joel · Hosting for 6 years",
    date: "23–28 Jun",
    price: "33,720",
    nights: 5,
    rating: 4.87,
  },
];

const CardList = () => {

  return (
    <div className="card-list">
      {listings.map((listing) => (
        <Card key={listing.id} listing={listing}  />
      ))}
    </div>
  );
};

export default CardList;
