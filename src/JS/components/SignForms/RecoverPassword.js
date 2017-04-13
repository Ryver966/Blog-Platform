import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/SignForms.css';

class RecoverPassword extends Component {
  render() {
    return(
      <div className='container sign-form'>
        <h4>If you don't remeber password, put your email in field and we'll give you new one!</h4><br />
        <form>
          <h3>Get New Password</h3>
          <div className='input-field-inline'>
            <input type='email' placeholder='E-mail' required />
            <input type='button' className='btn' value='Send' />
            <input type='button' className='go-to-other-form-btn' onClick={ () => this.props.goTo('/') } value='Have An Account Already? ' />
          </div>
        </form>
      </div>
    )
  }
}

export default RecoverPassword;