import React, { Component } from 'react';
import TeamMember from './TeamMember';

import team1 from '../assets/img/team/1.png';
import team2 from '../assets/img/team/2.png';
import team3 from '../assets/img/team/3.jpg';

const members = [
  { name: 'Isabella La Vernaye', role: 'Designer', image: team1 },
  { name: 'Sophie La Mole', role: 'Marketeer', image: team2 },
  { name: 'Karel Afanasiev', role: 'Webontwikkelaar', image: team3 },
];

class Team extends Component {
  render() {
    return (
      <section className='page-section bg-light' id='team'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>
              Ons Geweldige Team
            </h2>
            <h3 className='section-subheading text-muted'>
              We zijn proffesionele werkers.
            </h3>
          </div>
          <div className='row'>
            {members.map((member, i) => {
              return <TeamMember {...member} key={i} />;
            })}
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'>
            <p className='large text-muted'>
              Volg ons op Twitter, Facebook, Linkedin
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
