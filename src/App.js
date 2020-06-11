import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import * as bs from 'react-bootstrap'; shouldnt really do this

function generateDeck() {
  let symbols = ['🇺🇸', '🦠', '🖥', '🐐', '🦄', '💩', '😈', '🍆'];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    deck.push({ isFlipped: false, symbol: symbols[i % 8] });
  }
  return shuffle(deck);
};

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      won: false,
    }
  }

  pickCard = (cardIndex) => {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    } else {
      let cardToFlip = { ...this.state.deck[cardIndex] };
      cardToFlip.isFlipped = true;
      let newPickedCards = this.state.pickedCards.concat(cardIndex);
      let newDeck = this.state.deck.map((card, index) => {
        if (cardIndex === index) {
          return cardToFlip;
        }
        return card;
      })
      if (newPickedCards.length === 2) {
        let card1Index = newPickedCards[0];
        let card2Index = newPickedCards[1];
        if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
          // this.unflipCards(card1Index, card2Index);
          setTimeout(() => { this.unflipCards(card1Index, card2Index) }, 1000)
        }
        newPickedCards = [];
      }
      this.setState({
        deck: newDeck,
        pickedCards: newPickedCards,
      })
    }
  };

  unflipCards = (card1Index, card2Index) => {
    let card1 = { ...this.state.deck[card1Index] };
    let card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;
    let newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      }
      if (card2Index === index) {
        return card2;
      }
      return card;
    })
    this.setState({
      deck: newDeck,
    })
  }


  render() {

    let cardsJSX = this.state.deck.map((card, index) => {
      return <Card symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)} />
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>GWD Presents: Memory</h1>
          <h4>Match Cards To Win!</h4>
        </header>
        <main>
          <div className="Card-container">
            {cardsJSX.slice(0, 4)}
          </div>
          <div className="Card-container">
            {cardsJSX.slice(4, 8)}
          </div>
          <div className="Card-container">
            {cardsJSX.slice(8, 12)}
          </div>
          <div className="Card-container">
            {cardsJSX.slice(12, 16)}
          </div>
        </main>
      </div>
    );
  };
};

export default App;
