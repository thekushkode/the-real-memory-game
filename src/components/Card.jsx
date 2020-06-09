import React, { Component } from 'react';
import './Card.css';
//import numeral from 'numeral';
import goat from '../goat.gif';
import propTypes from 'prop-types';

class Card extends Component {
    // static propTypes = {
    //     name: this.propTypes.string,
    //     likes: this.propTypes.number,
    // }
    constructor(props) {
        super(props);
        this.state = {
            enabled: false,
        }
    }

    handleClick = (e) => {
        this.setState({ enabled: !this.state.enabled });
    }


    render() {
        let innerClass = "Memory-inner";
        if (this.state.enabled) {
            innerClass += " Flipped"
        }
        return (
            <div className="Memorycard" onClick={this.handleClick}>
                <div className={innerClass}>
                    <div className="Card-back">
                        <img src={goat} alt="Memory Card with goat on it" className="Goat-img"></img>
                    </div>
                    <div className="Card-front">
                        ∆
                    </div>
                </div>
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