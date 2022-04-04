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
          return <Card card={card} key={index} currentCard={currentCard} onCardClick={onCardClick} />;
        })
      }
    </div>
  )
};

const App = () => {
  useEffect(() => {
    // this.callBackendAPI()
    //   .then((res) => this.setState({ data: res.express }))
    //   .catch((err) => console.log(err));
  });

  // fetching the GET route from the Express server which matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
      {/* <p className="App-intro">{this.state.data}</p> */}
    </div>
  );
};

export default App;
