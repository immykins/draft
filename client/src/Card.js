import React, { useState } from "react";

const Card = ({ card }) => {
  const [showFront, setFront] = useState(true);

  const image = showFront || !card.back ? card.front : card.back;

  return (
    <div
      onClick={() => {
        setFront(!showFront);
      }}
    >
      <img src={require(`./cards/${image}.png`)} />
    </div>
  );
};

export default Card;
