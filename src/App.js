import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, createPath } from 'react-router-dom';
import Navigation from './components/NavigationPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegistrationPage';

function App() {
  ReactDOM.render ((

      <Router>
        <Navigation />
        <Route pathName='/' exact component={HomePage} />
        <Route createpath="/Login" component={LoginPage} />
        <Route createPath="/Register" component={RegisterPage} />
      </Router>

  ), document.getElementById('App'));
}

export default App;
