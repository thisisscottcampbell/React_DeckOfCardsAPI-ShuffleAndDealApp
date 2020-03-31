import React, { Component } from 'react';
import axios from "axios";
import Card from './Card'
import './Deck.css'

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
    try {
    let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
    let cardRes = await axios.get(cardUrl);
    if (!cardRes.data.success) {
      throw new Error("No cards remaining!")
    }
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
    }));
   } catch(err) {
    alert(err)
   }
  }
  
  render() {
     const cards = this.state.drawn.map(c => (
      <Card name={c.name} image={c.image} key={c.id} />
    ));
    return (
      <div className='Deck'>
        <h1 className='Deck-title'>♠️ ♥️ CARD DEALER ♣️ ♦️</h1>
        <h5 className='Deck-title subtitle'>react demo app</h5>
        <button className='Deck-btn' onClick={this.getCard}>Deal!</button>
        <div className='deck-cardarea'>{ cards }</div>
      </div>
    );
  }
}

export default Deck;