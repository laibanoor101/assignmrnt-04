import React from 'react';
import './card.css'; // Import the CSS file

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h3>Destination Highlights</h3>
        <p>"Explore breathtaking landscapes and vibrant cultures."</p>
      </div>

      <div className="card">
        <h3>Travel Tips & Hacks</h3>
        <p> "Discover essential tips for smooth travels."</p>
      </div>

      <div className="card">
        <h3>Culinary Adventures</h3>
        <p>"Savor local cuisines and hidden food gems."</p>
      </div>
    </div>
  );
};

export default Card;