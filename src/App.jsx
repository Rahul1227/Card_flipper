// App.jsx
import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [cards, setCards] = useState([{ title: 'Card 1' }]);

  const cardGenerator = () => {
    const newObject = {
      title: `card ${cards.length + 1}`,
      //content: `content ${cards.length + 1}`,
    };
    setCards([...cards, newObject]);
  };

  return (
    <>
      <button className="button" onClick={cardGenerator}>
        Generate Cards
      </button>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} />
        ))}
      </div>
    </>
  );
}

export default App;
