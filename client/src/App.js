import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import cardJSON from "./cards.json";

// this logic needs to be moved outside of the view
class Set {
  // instantiate by injecting a json of the cards for a set
  constructor(json) {
    this.cards = json;
  }

  // returns a random draft booster from the set. A draft booster includes 15 cards with no duplicates:
  // - 1 rare or mythic rare
  // - 3 uncommon
  // - 10 common
  // - 1 basic land (in neon this includes its dual lands)
  makeBooster() {
    //this.cards.
  }
}

class Table extends Component {

  // think about moving some of this logic out of the view
  render() {
    const set = new Set(cardJSON);
    const cards = set.cards.rares;

    return (
      <div id="Table">
        {cards.map((card, index) => {
          return <Card card={card} key={index} />;
        })}
      </div>
    );
  }
}

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
        {/* <p className="App-intro">{this.state.data}</p> */}
      </div>
    );
  }
}

export default App;
