// Card.jsx
import React, { useState } from 'react';
import './Card.css';

const motivationalLines = [
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

const Card = ({ title, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{isFlipped ? motivationalLines[Math.floor(Math.random() * motivationalLines.length)] : content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
