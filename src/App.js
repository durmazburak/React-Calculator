import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0"
    };
  }

  onClickEvent = e => {
    e.preventDefault();
    const value = e.target.value; // basılan tuş
    let result = this.state.result; //ilk baştaki değer  = 0
    if (result === "0") {
      result = "";
      this.setState({ result: result + value });
    } else if (value === "AC") {
      let stop = result.slice(0, result.length - 1);
      this.setState({ result: stop });
    } else if (value === "=") {
      /*eslint-disable-next-line*/
      let output = eval(result);
      if (output.toString().length >= 10) {
        output = output.toString().substring(0, 8);
        this.setState({ result: output });
      } else {
        this.setState({ result: output.toString() });
      }
    } else {
      this.setState({ result: result + value });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator_display" id="display">
          {this.state.result}
        </div>
        <div className="calculator_keys">
          <button
            className="key_operator"
            onClick={this.onClickEvent}
            value="+"
          >
            +
          </button>
          <button
            className="key_operator"
            onClick={this.onClickEvent}
            value="-"
          >
            -
          </button>
          <button
            className="key_operator"
            onClick={this.onClickEvent}
            value="*"
          >
            x
          </button>
          <button
            className="key_operator"
            onClick={this.onClickEvent}
            value="/"
          >
            ÷
          </button>
          <button onClick={this.onClickEvent} value="7">
            {" "}
            7{" "}
          </button>
          <button onClick={this.onClickEvent} value="8">
            {" "}
            8{" "}
          </button>
          <button onClick={this.onClickEvent} value="9">
            {" "}
            9{" "}
          </button>
          <button onClick={this.onClickEvent} value="4">
            {" "}
            4{" "}
          </button>
          <button onClick={this.onClickEvent} value="5">
            {" "}
            5{" "}
          </button>
          <button onClick={this.onClickEvent} value="6">
            {" "}
            6{" "}
          </button>
          <button onClick={this.onClickEvent} value="1">
            {" "}
            1{" "}
          </button>
          <button onClick={this.onClickEvent} value="2">
            {" "}
            2{" "}
          </button>
          <button onClick={this.onClickEvent} value="3">
            {" "}
            3{" "}
          </button>
          <button onClick={this.onClickEvent} value="0">
            {" "}
            0{" "}
          </button>
          <button data-action="decimal" onClick={this.onClickEvent} value=".">
            .
          </button>
          <button data-action="clear" onClick={this.onClickEvent} value="AC">
            AC
          </button>
          <button className="key_equal" onClick={this.onClickEvent} value="=">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
