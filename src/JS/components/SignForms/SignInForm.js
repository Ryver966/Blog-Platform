import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/SignForms.css';

import { signIn } from '../../actions/Actions';

class SignInForm extends Component {
  render() {
    return(
          <div className='col l4 s12 sign-form'>
            <div className='container'>
            <form className='col s12'>
              <h3>Sign In</h3>
              <div className='input-field-inline'>
                <input type='email' placeholder='E-mail' id='sign-in-email' className='validate' required />
                <input type='password' placeholder='Password' id='sign-in-pass' className='validate' required />
                <input type='submit' className='btn waves-effect waves-light' onClick={() => signIn(document.getElementById('sign-in-email').value, document.getElementById('sign-in-pass').value)} value='Sign In' /><br />
                <input type='button' className='go-to-other-form-btn' onClick={ ()  =>this.props.goTo('/signUp') } value='Sign Up' /><br />
                <input type='button' className='go-to-other-form-btn' value='Forgor Password?' />
              </div>
            </form>
            </div>
          </div>
    )
  }
}

export default SignInForm;
