import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <PageWrapper>
            <Route path='/' component={Home} />
            <Route
              path='/a'
              render={() => {
                return <h1></h1>;
              }}
            />
          </PageWrapper>
        </Router>
      </div>
    );
  }
}
export default App;
