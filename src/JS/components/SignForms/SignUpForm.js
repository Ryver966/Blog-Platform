import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/SignInForm.css';

import { signUp } from '../../actions/Actions';

class SignUpForm extends Component {
  render() {
    return(
      <div className='container'>
        <h4>Only 30 seconds you need to register and create your own blog!</h4><br />
            <form>
              <h3>Register</h3>
              <div className='input-field-inline'>
                <input type='email' placeholder='E-mail' id='sign-up-email' className='validate' />
                <input type='password' placeholder='Password' id='sign-up-pass' className='validate' />
                <input type='password' placeholder='Confirm Password' id='sign-up-conf-pass' className='validate' />
                <p>
                  <input type="checkbox" className="filled-in regulations-checkbox" id="accept-regulations" />
                  <label htmlFor="accept-regulations">Accept all regulations.</label>
                </p>
                <input type='button' className='btn' onClick={ () => signUp(document.getElementById('sign-up-email').value, document.getElementById('sign-up-pass').value, document.getElementById('sign-up-conf-pass').value, document.getElementById('accept-regulations')) } value='Sign Up' /><br />
              </div>
            </form>
          </div>
    )
  }
}

export default SignUpForm;