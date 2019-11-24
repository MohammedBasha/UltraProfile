import React, {Component} from 'react';

import NavBar from '../NavBar/index';
import Banner from '../Banner/index';
import Work from '../Work/index';
import Portfolio from '../Portfolio/index';
import Profile from '../Profile/index';
import About from '../About/index';
import SocialMedia from '../SocialMedia/index';
import Contact from '../Contact/index';
import Footer from '../Footer/index';

import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <NavBar />
        <Banner />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
