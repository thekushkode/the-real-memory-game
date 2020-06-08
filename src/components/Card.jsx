import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        //const title = 'Kush is the best';
        return (
            <div className="Card">
                { this.props.name }
                <br></br>
                { this.props.likes ? (
                <sup>likes: { this.props.likes }</sup>
                ) : ''}
            </div>
        )
    }
}

export default Card;