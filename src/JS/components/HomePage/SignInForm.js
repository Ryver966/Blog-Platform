import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/SignInForm.css'

class SignInForm extends Component {
  render() {
    return(
      <div id='modal1' className='modal'>
        <div className='modal-content row'>
          <h2>Sign In</h2>
          <form className='col s12'>
            <div className='row'>
              <div className='col s12'>
                <div className='input-field-inline'>
                  <input type='email' placeholder='E-mail' className='validate' />
                  <input type='password' placeholder='Password' className='validate' />
                  <input type='button' className='btn' value='Sign In' /><br />
                  <input type='button' className='go-to-other-form-btn' value='Sign Up' /><br />
                  <input type='button' className='go-to-other-form-btn' value='Forgor Password?' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignInForm;
