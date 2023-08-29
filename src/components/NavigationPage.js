import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
}


export default Navigation;