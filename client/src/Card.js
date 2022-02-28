import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img src={require(`./cards/${this.props.file}.png`)} />
      </div>
    );
  }
}

export default Card;
