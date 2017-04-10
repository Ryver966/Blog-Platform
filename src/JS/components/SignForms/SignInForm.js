import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/SignInForm.css'

class SignInForm extends Component {
  render() {
    return(
      <div className='modal-back'>
        <div id='modal1' className='modal'>
          <h2>Sign In</h2>
          <div className='modal-content row'>
            <form className='col s12'>
              <div className='input-field-inline'>
                <input type='email' placeholder='E-mail' className='validate' />
                <input type='password' placeholder='Password' className='validate' />
                <input type='button' className='btn waves-effect waves-light' value='Sign In' /><br />
                <input type='button' className='go-to-other-form-btn' onClick={ ()  =>this.props.goTo('/signUp') } value='Sign Up' /><br />
                <input type='button' className='go-to-other-form-btn' value='Forgor Password?' />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignInForm;
