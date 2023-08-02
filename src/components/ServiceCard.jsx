import "../styles/serviceCard.css";
import { useState } from "react";
import ArrowIcon from '../assets/right-arrow.svg';
function ServiceCard({ title, desc, image}) {
  return (
    <>
      <div className="card-container">
        <img src={image} alt={title} loading="lazy" />
        <div className="text-container">
          <h3>{title}</h3>
          <p>{desc}</p>
          <img  
            src={ArrowIcon}
            className="action-icon"
          />
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
