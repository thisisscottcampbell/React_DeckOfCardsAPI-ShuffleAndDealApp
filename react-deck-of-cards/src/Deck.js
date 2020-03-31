import React, { Component } from 'react';
import axios from "axios";
const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

class Deck extends Component {
  //deck is the response from my first request which we want set to state
  state = { deck: null }

  async componentDidMount() {
    let deck = await axios.get(API_URL);
    //think about shape of data for next
    this.setState({ deck: deck.data })
  }
  
  render() {
    return (
      <div>
        <h1>CARD DEALER</h1>
        
      </div>
    );
  }
}

export default Deck;