import React, { Component } from 'react';
import SingleService from './SingleService';

const services = [
  {
    title: 'E-Commerce',
    description: 'Ik heb ervaring met e-commerce in react en wordpress',
    icon: 'fas fa-shopping-cart',
  },
  {
    title: 'Responsive Design',
    description: 'Ik hou de regel 1st mobile in gedachten',
    icon: 'fas fa-circle fa-stack-2x text-primary',
  },
  {
    title: 'Web Security',
    description:
      'De fouten opsporing en de verbetering in de code met goede nauwkeurigheid',
    icon: 'fas fa-circle fa-stack-2x text-primary',
  },
];

class Services extends Component {
  render() {
    return (
      <section className='page-section' id='services'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Services</h2>
            <h3 className='section-subheading text-muted'>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className='row text-center'>
            {services.map((service, index) => {
              return <SingleService {...service} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
