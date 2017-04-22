import React, { Component } from 'react';
import '../../../assets/styles/UserPanel.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import { changePassword } from '../../actions/Actions';

class ChangePasswordForm extends Component {
  render() {
    return(
      <form className='profile-form'>
        <h2>Change Password</h2>
        <div className='input-field'>
          <p>Password</p>
          <input type='password' id='old-password' required />
        </div>
        <div className='input-field'>
          <p>New Password</p>
          <input type='password' id='new-password' required />
        </div>
        <div className='input-field'>
          <p>Confirm New Password</p>
          <input type='password' id='conf-new-password' required />
        </div>
        <input type='buttton' onClick={ () => changePassword(document.getElementById('old-password').value, document.getElementById('new-password').value, document.getElementById('conf-new-password').value) } className='btn' value='Change Password' />
      </form>
    )
  }
}

export default ChangePasswordForm;