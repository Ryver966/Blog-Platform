import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/SignInForm.css'

class SignUpForm extends Component {
  render() {
    return(
      <div className='modal-back'>
        <div id='modal1' className='modal'>
          <h2>Sign Up</h2>
          <div className='modal-content row'>
            <form className='col s12'>
              <div className='input-field-inline'>
                <input type='email' placeholder='E-mail' className='validate' />
                <input type='password' placeholder='Password' className='validate' />
                <input type='password' placeholder='Confirm Password' className='validate' />
                <p>
                  <input type="checkbox" className="filled-in regulations-checkbox" id="accept-regulations" />
                  <label htmlFor="accept-regulations">Accept all regulations.</label>
                </p>
                <input type='button' className='btn' value='Sign Up' /><br />
                <input type='button' className='go-to-other-form-btn' onClick={ () => this.props.goTo('/signIn') } value="Got Account?" /><br />
                <input type='button' className='go-to-other-form-btn' value='Forgor Password?' />
              </div>
            </form>
          </div>
      </div>
    </div>
    )
  }
}

export default SignUpForm;