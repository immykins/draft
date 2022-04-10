import React, { useEffect } from "react";
import "./App.css";
import Table from "./Table";

const App = () => {
  const [pack, setPack] = React.useState([]);

  // abstract this logic outside of the component
  useEffect(() => {
    fetch("/drafts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: "",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPack(JSON.parse(data).cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Table cards={pack} />
      </header>
    </div>
  );
};

export default App;
