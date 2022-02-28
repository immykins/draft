import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

class Table extends Component {
  render() {
    const cards = [
      { id: 1, file: "en_9ronA5Xr9N" },
      { id: 2, file: "en_J5uEbSmsIj" },
      { id: 3, file: "en_fYTwiGJW8d" },
      { id: 4, file: "en_gEnWwqIdOE" },
    ];

    return (
      <div id="Table">
        {cards.map(({ id, file }) => {
          return <Card file={file} key={id} />;
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
        <span>Test</span>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
