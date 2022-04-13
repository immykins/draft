import React from 'react';
import Card from './Card';
import Timer from './Timer';

// Table should be kept as dumb as possible. It's focused on displaying card info; all cards + selection logic should be passed down.
const Table = ({ cards }) => {
  const [currentCard, selectCard] = React.useState(null);

  return (
    <div id="Table">
      <Timer initial={5} />
      {/* {currentCard &&
        <div>
          <button type="button">pick card</button>
        </div>
      } */}
      <div id="set-display">
        {cards.map((card, index) => {
          const selected = currentCard && currentCard.name === card.name;
          return (
            <Card
              card={card}
              key={index}
              selected={selected}
              onCardClick={selectCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
