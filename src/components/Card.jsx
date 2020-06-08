import React, { Component } from 'react';
import './Card.css';
import numeral from 'numeral';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                { this.props.name }
                <br></br>
                { this.props.likes ? (
                <sup>likes: { numeral(this.props.likes).format('0.0a') }</sup>
                ) : ''}
            </div>
        )
    }
}

export default Card;