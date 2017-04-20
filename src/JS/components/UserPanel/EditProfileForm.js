import React, { Component } from 'react';
import '../../../assets/styles/UserPanel.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import { connect } from 'react-redux';

class EditProfileForm extends Component {
  render() {
    return(
      <div className='profile-form'>
        <h2>Edit Profile</h2>
        <div className='row'>
          <form className='col s12'>
            <div className='personal-information-section'>
              <h3>Personal Information</h3>
              <div className='input-field'>
                <p>First Name</p>
                <input type='text' placeholder={ this.props.user.firstName } />
              </div>
              <div className='input-field'>
                <p>Last Name</p>
                <input type='text' placeholder={ this.props.user.lastName } />
              </div>
              <div className='input-field'>
                <p>Date Of Birth</p>
                <input type='text' onFocus={ (e) => e.target.type='date' } placeholder={ this.props.user.dateOfBirth }/>
              </div>
            </div>
            <div className='contact-section'>
              <h3>Contact</h3>
              <div className='input-field'>
                <p>E-mail (To Change E-mail contact with support)</p>
                <input disabled type='text' placeholder={ this.props.user.email } />
              </div>
              <div className='input-field'>
                <p>Phone Number</p>
                <input type='text'placeholder={ this.props.user.phone } />
              </div>
              <div className='input-field'>
                <p>Discord Nickname</p>
                <input type='text' placeholder={ this.props.user.discord } />
              </div>
              <div className='input-field'>
                <p>Tweeter Profile</p>
                <input type='text' placeholder={ this.props.user.tweeter} />
              </div>
              <div className='input-field'>
                <p>Facebook Profile</p>
                <input type='text' placeholder={ this.props.user.facebook } />
              </div>
              <div className='input-field'>
                <p>LinkedIn Profile</p>
                <input type='text' placeholder={ this.props.user.linkedIn } />
              </div>
              <div className='input-field'>
                <p>GitHub Profile</p>
                <input type='text' placeholder={ this.props.user.gitHub } />
              </div>
            </div>
            <input type='submit' className='btn' value='Save Changes' />
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(EditProfileForm);