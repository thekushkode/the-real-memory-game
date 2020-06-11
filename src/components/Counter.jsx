import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
        }
    }

    addNum = () => {
        this.setState({
            inputValue: Number(this.state.inputValue) + 1,
        })
    };

    minusNum = () => {
        this.setState({
            inputValue: Number(this.state.inputValue) - 1,
        })
    };

    onChange = (e) => {
        console.log(e.target.value);
        let newNum = e.target.value;
        if (isNaN(newNum)) {
            return;
        }
        this.setState({
            inputValue: newNum,
        })
    }

    onReset = () => {
        this.setState({
            inputValue: 0,
        })
    }



    render() {
        return (
            <div>
                <div className="Counter">
                    <button className="RedBtn" onClick={this.minusNum}>-</button>
                    <div>
                        <input className="Center" type="text" value={this.state.inputValue} onChange={this.onChange} />
                    </div>
                    <button className="GreenBtn" onClick={this.addNum}>+</button>
                </div>
                <div className="Margin">
                    <button onClick={this.onReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Counter;