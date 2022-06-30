import React from 'react';
import Btn from './btn';
import calculate from '../logic/calculate';

const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const Target = e.target.textContent;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, Target));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc">
        <input type="text" value={(total === null ? '' : total) + (operation === null ? '' : operation) + (next === null ? '' : next)} disabled className="calc-input" placeholder="0" />
        <div className="btn-contain">
          {buttonArr.map((btn) => (
            <Btn key={btn} btnName={btn} event={this.handleClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
