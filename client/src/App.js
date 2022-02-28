import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

class Table extends Component {
  render() {
    const cards = [
      { front: "en_9ronA5Xr9N" },
      { front: "en_fYTwiGJW8d" },
      { front: "en_gEnWwqIdOE", back: "en_J5uEbSmsIj" },
    ];

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
