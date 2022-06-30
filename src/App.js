import React from 'react';
import Calculator from './components/calculator';

class FullCalculator extends React.PureComponent {
  render() {
    return (
      <section className="calc-section">
        <Calculator />
      </section>
    );
  }
}

export default FullCalculator;
