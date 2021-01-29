import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  render() {
    return (
      <section className='page-section' id='contact'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>
              Neem Contact Met Ons Op
            </h2>
            <h3 className='section-subheading text-muted'>
              We kunnen onmiddellijk antwoorden!
            </h3>
          </div>
          <form id='contactForm' name='sentMessage' novalidate='novalidate'>
            <div className='row align-items-stretch mb-5'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    className='form-control'
                    id='name'
                    type='text'
                    placeholder='Jouw Naam *'
                    required='required'
                    data-validation-required-message='Schrijf jouw naam'
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                  <p className='help-block text-danger'></p>
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    id='email'
                    type='email'
                    placeholder='Jouw Email *'
                    required='required'
                    data-validation-required-message='Schrijf jouw email address in.'
                  />
                  <p className='help-block text-danger'></p>
                </div>
                <div className='form-group mb-md-0'>
                  <input
                    className='form-control'
                    id='phone'
                    type='tel'
                    placeholder='Jouw GSM *'
                    required='required'
                    data-validation-required-message='Schrijf jouw telefoonnummer in.'
                  />
                  <p className='help-block text-danger'></p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group form-group-textarea mb-md-0'>
                  <textarea
                    className='form-control'
                    id='message'
                    placeholder='Jouw boodschap *'
                    required='required'
                    data-validation-required-message='Schrijf jouw boodschap.'
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <div id='success'></div>
              <button
                className='btn btn-primary btn-xl text-uppercase'
                id='sendMessageButton'
                type='submit'
              >
                Verzenden
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
