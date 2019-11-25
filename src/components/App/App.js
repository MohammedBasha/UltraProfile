import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from '../NavBar/index';
import Home from '../Home/index';
import Contact from '../Contact/index';
import Footer from '../Footer/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="website-wrapper">
          <NavBar />
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
