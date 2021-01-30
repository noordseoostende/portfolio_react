import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
      <section className='page-section' id='about'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Over</h2>
            <h3 className='section-subheading text-muted'>
              Het gaat over onze enthousiasme in het werk.
            </h3>
          </div>
          <ul className='timeline'>
            <li>
              <div className='timeline-image'>
                <img
                  className='rounded-circle img-fluid'
                  src='assets/img/about/1.jpg'
                  alt=''
                />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>2009-2011</h4>
                  <h4 className='subheading'>Ons Begin</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    Wij kozen React omdat dat is de beste manier als de
                    webontwikkelaar zich voelen.
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <img
                  className='rounded-circle img-fluid'
                  src='assets/img/about/2.jpg'
                  alt=''
                />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>March 2011</h4>
                  <h4 className='subheading'>
                    Er is een overgang naar de React Native
                  </h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    We zien onze toekomst in jouw bedrijf.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className='timeline-image'>
                <img
                  className='rounded-circle img-fluid'
                  src='assets/img/about/3.jpg'
                  alt=''
                />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>December 2012</h4>
                  <h4 className='subheading'>
                    Overgang naar volledige dienstverlening
                  </h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    Onze portfolio is vanzelfsprekend!
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <img
                  className='rounded-circle img-fluid'
                  src='assets/img/about/4.jpg'
                  alt=''
                />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>July 2014</h4>
                  <h4 className='subheading'>Fase Twee Uitbreiding</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    Wij hebben het al: Creativiteit, Nauwkeurigheid..
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Timeline;
