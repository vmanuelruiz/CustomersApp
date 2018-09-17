import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to='/customers'>Customers</Link> <br/>
          <Link to='/customers/300000'>Customer 3000000</Link>
        </div>
      </Router>
    );
  }
}

export default App;
