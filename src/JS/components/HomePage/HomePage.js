import React, { Component } from 'react';
import '../../../assets/styles/HomePage.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';

import SignInForm from '../SignForms/SignInForm';
import SignUpForm from '../SignForms/SignUpForm';

class HomePage extends Component {
  render() {
    console.log(this.props.goTo)
    return(
      <div>
        <div className='row body-header'>
          <SignInForm goTo={ this.props.goTo } />
            <div className='col s8'>
              <a className='container main-page-paragraph'>
            <h3>First Blogging Platform For True Programmers</h3>
            <h5>The best way to easy blogging!</h5>
          </a>
            </div>
          </div>
        </div>
    )
  }
}

export default HomePage;