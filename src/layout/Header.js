import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'blue' };

const Header = () => {
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      {' | '}
      <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </div>
  );
};

export default Header;
