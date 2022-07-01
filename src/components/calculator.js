import React, { useState } from 'react';
import Btn from './btn';
import calculate from '../logic/calculate';

const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const Calculator = () => {
  const [solution, getSolution] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    const Target = e.target.textContent;
    getSolution(calculate(solution, Target));
  };

  const { total, next, operation } = solution;
  return (
    <div className="calc">
      <input type="text" value={(total === null ? '' : total) + (operation === null || operation === undefined ? '' : operation) + (next === null ? '' : next)} disabled className="calc-input" placeholder="0" />
      <div className="btn-contain">
        {buttonArr.map((btn) => (
          <Btn key={btn} btnName={btn} event={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;