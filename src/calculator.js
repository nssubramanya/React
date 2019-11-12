import React from "react";
import ReactDOM from "react-dom";

import "./calculator.css";

class Key extends React.Component {
  handleClick = () => {
    // alert("Hello");
    this.props.clickHandler(this.props.value);
  };

  render() {
    return (
      <button
        className={`Key ${this.props.bkcolor} ${this.props.width}`}
        onClick={this.handleClick}
      >
        {this.props.value}
      </button>
    );
  }
}

class KeyPad extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Key
            value="AC"
            bkcolor="Gray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="+/-"
            bkcolor="Gray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="%"
            bkcolor="Gray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="&#247;"
            bkcolor="Orange"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
        </div>
        <div>
          <Key
            value="7"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="8"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="9"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="X"
            bkcolor="Orange"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
        </div>
        <div>
          <Key
            value="4"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="5"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="6"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="-"
            bkcolor="Orange"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
        </div>
        <div>
          <Key
            value="1"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="2"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="3"
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="+"
            bkcolor="Orange"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
        </div>
        <div>
          <Key
            value="0"
            bkcolor="DarkGray"
            width="DoubleWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="."
            bkcolor="DarkGray"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
          <Key
            value="="
            bkcolor="Orange"
            width="RegularWidth"
            clickHandler={this.handleClick}
          />
        </div>
      </React.Fragment>
    );
  }
}

function Output(props) {
  return (
    <React.Fragment>
      <input className="Output" value={props.output} />
    </React.Fragment>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { outputValue: 0 };
  }

  handleClick = buttonName => {
    alert(buttonName);
  };

  render() {
    return (
      <React.Fragment>
        <Output output={this.state.outputValue} />
        <KeyPad clickHandler={this.handleClick} />
      </React.Fragment>
    );
  }
}

export { Key, KeyPad, Calculator };
