import React, { useEffect } from "react";
import "./App.css";
import Card from "./Card";

const Table = () => {
  const [pack, setPack] = React.useState([]);
  const [currentCard, selectCard] = React.useState(null);

  // abstract this logic outside of the component
  useEffect(() => {
    fetch('/drafts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: ''
    }).then((response) => {
      return response.json()
    }).then((data) => {
      setPack(JSON.parse(data).cards);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div id="Table">
      {currentCard &&
        <div>
          <button type="button">pick card</button>
        </div>
      }
      <SetDisplay cards={pack} currentCard={currentCard} onCardClick={selectCard} />
    </div>
  );
}

const SetDisplay = ({ cards, currentCard, onCardClick }) => {
  return (
    <div id="set-display">
      {
        cards.map((card, index) => {
          const selected = currentCard && currentCard.name === card.name
          return <Card card={card} key={index} selected={selected} onCardClick={onCardClick} />;
        })
      }
    </div>
  )
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
};

export default App;
