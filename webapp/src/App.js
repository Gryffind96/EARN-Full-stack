import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React KIT</h1>
        </header>
        <Router>
          <Route exact path="/" component={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;
