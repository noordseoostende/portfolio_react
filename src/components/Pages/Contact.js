import React, { Component } from 'react';
import Field from '../Common/Field';
const fields = {
  sections: [
    [
      {
        name: 'name',
        elementName: 'input',
        type: 'text',
        placeholder: 'Jouw naam *',
      },
      {
        name: 'email',
        elementName: 'input',
        type: 'email',
        placeholder: 'Jouw email *',
      },
      {
        name: 'phone',
        elementName: 'input',
        type: 'text',
        placeholder: 'Jouw GSM *',
      },
    ],
    [
      {
        name: 'message',
        elementName: 'textarea',
        type: 'text',
        placeholder: 'Schtijf jouw boodschap *',
      },
    ],
  ],
};

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
  submitForm = e => {
    e.preventDefault();
    alert('Het is gedaan. Dank u wel!');
  };

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
          <form
            onSubmit={e => this.submitForm(e)}
            name='sentMessage'
            novalidate='novalidate'
          >
            <div className='row align-items-stretch mb-5'>
              {fields.sections.map((section, sectionIndex) => {
                console.log('Rendering section', sectionIndex, 'with', section);
                return (
                  <div className='col-md-6' key={sectionIndex}>
                    {section.map((field, i) => {
                      return (
                        <Field
                          {...field}
                          key={i}
                          value={this.state[field.name]}
                          onChange={e =>
                            this.setState({ [field.name]: e.target.value })
                          }
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className='text-center'>
              <div id='success'></div>
              <button
                className='btn btn-primary btn-xl text-uppercase'
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
