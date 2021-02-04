import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';
import AdminWrapper from './components/AdminWrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route 
            path="/admin"
            render={props => (
              <AdminWrapper>
                <Login   />

              </AdminWrapper>
            )}
          />
          
            <Route exact={true} path='/' 
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
      </div>
    );
  }
}
export default App;
