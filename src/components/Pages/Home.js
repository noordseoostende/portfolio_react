import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title='Welcom in mijn Portfolio!'
          subtitle='LEUK JE TE ONTMOETEN'
          buttonText='Zeg mij meer'
          link='/services'
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
      </div>
    );
  }
}

export default Home;
