import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button>Info</button>
      </div>
      <div>
        <h1 class="cover-heading">Welcome to our Message101.</h1>
        <p class="lead">This is where we first meet hope you enjoy yourself.</p>
        <p class="lead">
          <a href="" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
