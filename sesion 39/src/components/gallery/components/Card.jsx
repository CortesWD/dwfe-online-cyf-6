/**
 * Dependencies
 */
import React from "react";

function Card({ url, title }) {
  return (
    <div className="image-card">
      <img src={url} alt={title} className="card-img" />
    </div>
  );
}

export default Card;
