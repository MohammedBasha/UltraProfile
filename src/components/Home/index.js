import React, {Component} from 'react';

import Banner from '../Banner/index';
import Work from '../Work/index';
import Portfolio from '../Portfolio/index';
import Profile from '../Profile/index';
import About from '../About/index';
import SocialMedia from '../SocialMedia/index';
import Contact from '../Contact/index';

import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <Banner />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Contact />
      </div>
    );
  }
}

export default Home;
