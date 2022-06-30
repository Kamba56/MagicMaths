import React from 'react';
import PropTypes from 'prop-types';

const Btn = (props) => {
  const { btnName } = props;
  return (
    <div className="btn-div" id={btnName}>
      <button type="button" className="btn">{btnName}</button>
    </div>
  );
};

Btn.propTypes = {
  btnName: PropTypes.string.isRequired,
};

const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const Calculator = () => (
  <div className="calc">
    <input type="text" placeholder={0} className="calc-input" />
    <div className="btn-contain">
      {buttonArr.map((btn) => (
        <Btn key={btn} btnName={btn} />
      ))}
    </div>
  </div>
);

export default Calculator;
