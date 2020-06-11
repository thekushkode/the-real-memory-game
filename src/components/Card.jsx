import React, { Component } from 'react';
import './Card.css';
//import numeral from 'numeral';
import goat from '../goat.gif';
// import propTypes from 'prop-types';

class Card extends Component {
    // static propTypes = {
    //     name: this.propTypes.string,
    //     likes: this.propTypes.number,
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isFlipped: false,
    //     }
    // }

    // handleClick = (e) => {
    //     this.setState({ isFlipped: !this.state.isFlipped });
    // }


    render() {
        let innerClass = "Memory-inner";
        if (this.props.isFlipped) {
            innerClass += " Flipped"
        }
        return (
            <div className="Memorycard" onClick={this.props.pickCard}>
                <div className={innerClass}>
                    <div className="Card-back">
                        <img src={goat} alt="Memory Card with goat on it" className="Goat-img"></img>
                    </div>
                    <div className="Card-front">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        )
    };
};


export default Card;
