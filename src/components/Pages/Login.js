import React, { Component } from 'react';
ìmport Field from '../Common/Field';
import { Field, withFormik } from 'formik';
import * as Yup from 'yup';

const fields = [
  {name: 'email', elementName: 'input', type: 'email', placeholder: 'Jouw email'},
  {name: 'password', elementName: 'input', type: 'password', placeholder: 'Jouw wachtwoord'}
]

class Login extends Component {
  render() {
    return (
    <div className="login-page">
      <div className="container">
        <div className="login-form">
          <div className="row">
            {fields.map((f, i) => {
              return (
              <div className="col-md-12">
              <Field
                key={i}
                {...f}
                value={this.props.values[f.name]}
                name={f.name}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                touched={(this.props.touched[f.name])}
                errors={this.props.errors[f.name]}
              />
              </div>)
            })}
          </div>
        </div>
        </div>
        </div>);
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email is ongeldig.').required('Je moet inloggen met email address'),
    password: Yup.string().required('Je moet je wachtwoord aangeven')
  }),
  handleSubmit: (values, {setSubmitting}) => {
    console.log("Login attempt", values);
  }
});
