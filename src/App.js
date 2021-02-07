import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Admin/Dashboard';

//Admin Pages
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';
import Users from './components/Pages/Admin/Users';
import Posts from './components/Pages/Admin/Posts';

class App extends Component {
  render() {
    return (
      
        <Router>
          <Route 
            path='/admin/users'
            render={props => {
              console.log("Props", props);
              return (
                <div>
              
                {this.props.auth ?
                  <AdminWrapper>
                  <Users />
                  </AdminWrapper>
                :
                    <LoginWrapper>
                      <Login />
                  </LoginWrapper>
              }
              </div>

            )}} 
          />

          <Route 
            path='/admin/posts'
            render={props => {
              
              return (
                <div>
              
                {this.props.auth ?
                  <AdminWrapper>
                    <Posts />
                  </AdminWrapper>
                :
                    <LoginWrapper>
                      <Login />
                  </LoginWrapper>
              }
              </div>

            )
          }}/>
          
          <Route 
          exact={true}
            path="/admin"
            render={props => {
              console.log("Props", props);
              return (
                <div>
              
                {this.props.auth ?
                  <AdminWrapper>
                    <Dashboard />
                  </AdminWrapper>
                :
                    <LoginWrapper>
                      <Login />
                  </LoginWrapper>
              }
              </div>

            )
          }
            }
          />
          
            <Route 
              exact={true} 
              path='/' 
              render={props => (
                
                <PageWrapper>
                  <Home {...props} />
                </PageWrapper>
              )} />
            <Route patch='/about' 
              render={props => (
                <PageWrapper>
                  <About {...props} />
                </PageWrapper>
              )} />
            <Route patch='/contact' 
              render={props => (
                <PageWrapper>
                  <Contact {...props} />
                </PageWrapper>
              )} />
          
        </Router>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
