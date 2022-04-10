import React from "react";
import Card from "./Card";
import Timer from "./Timer";

// Table should be kept as dumb as possible. It just knows how to display cards + timer; card selection logic is passed into it
const Table = ({ cards }) => {
  const [currentCard, selectCard] = React.useState(null);

  return (
    <div id="Table">
      <Timer />
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
