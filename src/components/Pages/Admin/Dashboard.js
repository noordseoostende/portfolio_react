import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
    <h1>Je was ingelogd met deze teken: {this.props.auth.token}</h1>)
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
