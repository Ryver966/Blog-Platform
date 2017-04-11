import React, { Component } from 'react';
import '../assets/styles/App.css';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './reducers/Store';

import MainComponent from './components/MainComponent';
import HomePage from './components/HomePage/HomePage';
import SignInForm from './components/SignForms/SignInForm';
import SignUpForm from './components/SignForms/SignUpForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history = { history }>
          <Route path='/' component={ MainComponent }>
            <IndexRoute component={ HomePage } />
            <Route path='/signUp' component={ SignUpForm } />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
