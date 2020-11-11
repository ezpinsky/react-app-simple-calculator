import React from 'react';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            result: 0,
            num1: '',
            num2: ''
        }
    }

    handleFirstNum = e => {
        this.setState({num1: parseInt(e.target.value)})
    }
    handleSecondNum = e => {
        this.setState({num2: parseInt(e.target.value)})
    }

    add = e => {
        this.setState({result: this.num1 + this.num2});
    }

    subtract = e => {
        this.setState({result: this.num1 - this.num2});
    }

    multiply = e => {
        this.setState({result: this.num1 * this.num2});
    }

    divide = e => {
        this.setState({result: this.num1 / this.num2});
    }

    render(){
        return (
            <div>
                <h1>Result: {this.state.result}</h1>
                <input onChange={this.handleFirstNum} placeholder="First number" value={this.state.num1} />
                <input onChange={this.handleSecondNum} placeholder="Second number" value={this.state.num2} />
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>x</button>
                <button onClick={this.divide}>÷</button>
            </div>
        );
    }
}

export default Calculator;
