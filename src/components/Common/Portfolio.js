import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../assets/img/portfolio/webd.jpeg';
import img2 from '../assets/img/portfolio/web2.jpg';
import img3 from '../assets/img/portfolio/web3.png';
import img4 from '../assets/img/portfolio/web4.jpg';
import img5 from '../assets/img/portfolio/web5.jpg';
import img6 from '../assets/img/portfolio/web6.jpg';

const portfolio = [
  { title: 'WebDesign', subtitle: 'UI/UX', image: img1 },
  { title: 'Digitale Marketing', subtitle: 'Google', image: img2 },
  { title: 'Webontwikkeling', subtitle: 'frontend/backend', image: img3 },
  { title: 'Teamwerk', subtitle: 'Obelisk/GoogleDigitaal', image: img4 },
  { title: 'Monitoring', subtitle: 'Webbeveiliging', image: img5 },
  { title: 'Public Relations', subtitle: 'Academie', image: img6 },
];

class Portfolio extends Component {
  render() {
    return (
      <section className='page-section bg-light' id='portfolio'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Portfolio</h2>
            <h3 className='section-subheading text-muted'>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className='row'>
            {portfolio.map((item, index) => {
              return <PortfolioItem {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
