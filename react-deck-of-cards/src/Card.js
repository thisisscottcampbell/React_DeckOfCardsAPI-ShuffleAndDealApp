import React, { Component } from 'react';
import "./Card.css"

class Card extends Component {
  render() {
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg`;
    return (
      <img 
        style={{transform: transform}} 
        className='Card' 
        src={ this.props.image } 
        alt={ this.props.name } 
      />
    );
  }
}

export default Card;