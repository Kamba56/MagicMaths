import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Header from './components/Header';
import Quotes from './components/Quotes';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <div>
          <Header />
          <Routes>
            <Route path="calculator" element={<Calculator />} />
            <Route path="/" element={<Home />} />
            <Route path="quote" element={<Quotes />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
