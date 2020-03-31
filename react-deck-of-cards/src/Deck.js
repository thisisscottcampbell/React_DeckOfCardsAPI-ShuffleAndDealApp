import React, { Component } from 'react';
import axios from "axios";
const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";

class Deck extends Component {
  //deck is the response from my first request which we want set to state
  state = { deck: null, drawn: [] }

  componentDidMount = async () => {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    //think about shape of data for next
    this.setState({ deck: deck.data })
  }

  getCard = async () => {

    let deck_id = this.state.deck.deck_id;
    let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
    let cardRes = await axios.get(cardUrl);
    let card = cardRes.data.cards[0];
    console.log(cardRes.data);
    this.setState(st => ({
      drawn: [
        ...st.drawn, {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`
        }
      ]
    }))

  }
  
  render() {
    return (
      <div>
        <h1>CARD DEALER</h1>
        <button onClick={this.getCard}>Deal!</button>
      </div>
    );
  }
}

export default Deck;