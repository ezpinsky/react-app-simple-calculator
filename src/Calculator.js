import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: "",
    };
  }

  handleFirstNum = (e) => {
    this.setState({ num1: parseInt(e.target.value) });
  };
  handleSecondNum = (e) => {
    this.setState({ num2: parseInt(e.target.value) });
  };

  add = (e) => {
    this.setState({ result: this.state.num1 + this.state.num2 });
  };

  subtract = (e) => {
    this.setState({ result: this.state.num1 - this.state.num2 });
  };

  multiply = (e) => {
    this.setState({ result: this.state.num1 * this.state.num2 });
  };

  divide = (e) => {
    this.setState({ result: this.state.num1 / this.state.num2 });
  };

  clearInput = (e) => {
    this.setState({
      num1: "",
      num2: "",
      result: 0,
    });
  };

  render() {
    const { num1, num2, result } = this.state;
    const { add, subtract, multiply, divide, clearInput } = this;
    return (
      <div>
        <h1>Result: {result}</h1>
        <input
          onChange={this.handleFirstNum}
          placeholder="First number"
          value={num1}
        />
        <input
          onChange={this.handleSecondNum}
          placeholder="Second number"
          value={num2}
        />
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>x</button>
        <button onClick={divide}>÷</button>
        <button onClick={clearInput}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
