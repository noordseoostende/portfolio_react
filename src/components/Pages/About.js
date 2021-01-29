import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title='Over mij'
          subtitle='Ik ben de webontwikkelaar.'
          showButton={false}
          image={image}
        />
        <Timeline />
        <Team />
      </div>
    );
  }
}

export default About;
