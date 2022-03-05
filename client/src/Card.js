import React, { useState } from "react";
import cx from "classnames";

const Card = ({ card }) => {
  const cardImage = (file, alt) => {
    try {
      return (
        <img src={require(`./cards/${file}.png`)} alt={alt} />
      )
    } catch {
      return (
        <img alt={card.name} />
      )
    }
  }

  return (
    <div className={cx({ card: true, flippable: !!card.back })}>
      <div className="card-content">
        <div className="front">
          {cardImage(card.front, card.name)}
        </div>
        {card.back && (
          <div className="back">
            {cardImage(card.back, `back side of ${card.name}`)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
