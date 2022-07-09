import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div id="logo">
      <Link to="/">Math Magicians</Link>
    </div>
    <div className="navigation">
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/calculator">Calculator</Link>
      <Link className="nav" to="/quote">Quote</Link>
    </div>
  </header>
);

export default Header;
