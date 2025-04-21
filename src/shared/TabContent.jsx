import React from "react";
import "./TabContent.css";

const TabContent = ({ activeTab }) => {
  const content = {
    popular: {
      title: "Popular Listings",
      description: "Discover the most popular stays and places.",
    },
    "arts-culture": {
      title: "Arts & Culture",
      description: "Explore places with rich cultural heritage.",
    },
    outdoors: {
      title: "Outdoors",
      description: "Enjoy scenic views and outdoor activities.",
    },
    mountains: {
      title: "Mountains",
      description: "Find peaceful getaways in the mountains.",
    },
    beach: {
      title: "Beach",
      description: "Relax by the sea and enjoy beachside living.",
    },
    "unique-stays": {
      title: "Unique Stays",
      description: "Experience one-of-a-kind accommodations.",
    },
    categories: {
      title: "Categories",
      description: "Browse stays by unique categories.",
    },
    "things-to-do": {
      title: "Things to Do",
      description: "Discover exciting activities in your destination.",
    },
  };

  return (
    <div className="tab-content">
      <h2>{content[activeTab]?.title || "Popular Listings"}</h2>
      <p>{content[activeTab]?.description || "Discover the most popular stays and places."}</p>
    </div>
  );
};

export default TabContent;
