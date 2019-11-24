import React, {Component} from 'react';

import Home from '../Home/index';
import Contact from '../Contact/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="website-wrapper">
        <Home />
        <Contact />
      </div>
    );
  }
}

export default App;
