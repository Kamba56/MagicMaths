import React from 'react';
import Btn from './btn';

const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calc">
        <input type="text" placeholder={0} className="calc-input" />
        <div className="btn-contain">
          {buttonArr.map((btn) => (
            <Btn key={btn} btnName={btn} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
