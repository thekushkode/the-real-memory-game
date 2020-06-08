import React, { Component } from 'react';
import './Card.css';
//import numeral from 'numeral';
import goat from '../goat.gif';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <img src={goat} alt="Memory Card with goat on it" className="Goat-img"></img>
            </div>
        )
    };
};


export default Card;


// class Card extends Component {
    //     render() {
    //         return (
    //             <div className="Card">
    //                 { this.props.name }
    //                 <br></br>
    //                 { this.props.likes ? (
    //                 <sup>likes: { numeral(this.props.likes).format('0.0a') }</sup>
    //                 ) : ''}
    //             </div>
    //         )
    //     }
    // }