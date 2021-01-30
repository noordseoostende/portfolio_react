import React, { Component } from 'react';

class Field extends Component {
  render() {
    return (
      <div className='form-group'>
        {this.props.elementName === 'input' ? (
          <input
            className='form-control'
            id={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            required='required'
            data-validation-required-message='Schrijf jouw naam'
            name={this.props.name}
          />
        ) : (
          <textarea
            className='form-control'
            id={this.props.name}
            placeholder={this.props.placeholder}
            required='required'
            data-validation-required-message='Schrijf jouw boodschap.'
            name={this.props.name}
          />
        )}
        <p className='help-block text-danger'></p>
      </div>
    );
  }
}

export default Field;
