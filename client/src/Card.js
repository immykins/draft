import React, { useState } from "react";
import cx from "classnames";

const Card = ({ card }) => {
  const frontImage = (path, alt) => {
    try {
      return (
        <img src={require(`./cards/${card.front}.png`)} alt={alt} />
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
          {frontImage(`./cards/${card.front}.png`, card.name)}
        </div>
        {card.back && (
          <div className="back">
            <img src={require(`./cards/${card.back}.png`)} alt={`back side of ${card.name}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
