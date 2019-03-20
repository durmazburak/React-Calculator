import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator_display">0</div>
        <div className="calculator_keys">
          <button className="key_operator" data-action="add">
            +
          </button>
          <button className="key_operator" data-action="subtract">
            -
          </button>
          <button className="key_operator" data-action="multiply">
            x
          </button>
          <button className="key_operator" data-action="divide">
            ÷
          </button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>0</button>
          <button data-action="decimal">.</button>
          <button data-action="clear">AC</button>
          <button class="key_equal" data-action="calculate">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
