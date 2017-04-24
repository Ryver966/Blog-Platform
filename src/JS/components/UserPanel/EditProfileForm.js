import React, { Component } from 'react';
import '../../../assets/styles/UserPanel.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/Actions';

class EditProfileForm extends Component {

  constructor(props) {
    super(props);

    this.fieldsOnChange = this.fieldsOnChange.bind(this);
    this.setChangedUser = this.setChangedUser.bind(this);

    this.state={
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      dateOfBirth: this.props.user.dateOfBirth,
      phone: this.props.user.phone,
      discord: this.props.user.discord,
      tweeter: this.props.user.tweeter,
      linkedIn: this.props.user.linkedIn,
      gitHub: this.props.user.gitHub
    }
  }

  setChangedUser() {
    updateProfile(this.state.firstName, this.state.lastName, this.state.dateOfBirth, this.state.phone, this.state.discord, this.state.tweeter, this.state.linkedin, this.state.github);
  }

  fieldsOnChange(fieldName, value) {
    this.setState({ [fieldName]: value })
  }

  render() {
    return(
      <div className='profile-form'>
        <h2>Edit Profile</h2>
        <div className='row'>
          <div className='col s12'>
            <div className='personal-information-section'>
              <h3>Personal Information</h3>
              <div className='input-field'>
                <p>First Name</p>
                <input type='text' id='first-name' onChange={ (e) => this.fieldsOnChange('firstName', e.target.value) } onFocus={ (e) => e.target.value='' }  value={ this.state.firstName }  />
              </div>
              <div className='input-field'>
                <p>Last Name</p>
                <input type='text' id='last-name' onChange={ (e) => this.fieldsOnChange('lastName', e.target.value) } onFocus={ (e) => e.target.value='' } value={ this.state.lastName } />
              </div>
              <div className='input-field'>
                <p>Date Of Birth</p>
                <input type='text' id='date-of-birth' onChange={ (e) => this.fieldsOnChange('dateOfBirth', e.target.value) } onFocus={ (e) => e.target.type='date' } value={ this.state.dateOfBirth }/>
              </div>
            </div>
            <div className='contact-section'>
              <h3>Contact</h3>
              <div className='input-field'>
                <p>E-mail (To Change E-mail contact with support)</p>
                <input disabled type='text' value={ this.props.user.email } />
              </div>
              <div className='input-field'>
                <p>Phone Number</p>
                <input type='text' id='phone' onChange={ (e) => this.fieldsOnChange('phone', e.target.value) } onFocus={ (e) => e.target.value='' } value={ this.state.phone } />
              </div>
              <div className='input-field'>
                <p>Discord Nickname</p>
                <input type='text' id='discord' onChange={ (e) => this.fieldsOnChange('discord', e.target.value) } onFocus={ (e) => e.target.value='' } value={ this.state.discord } />
              </div>
              <div className='input-field'>
                <p>Tweeter Profile</p>
                <input type='text' id='tweeter' onChange={ (e) => this.fieldsOnChange('tweeter', e.target.value) } onFocus={ (e) => e.target.value='' } value={ this.state.tweeter} />
              </div>
              <div className='input-field'>
                <p>LinkedIn Profile</p>
                <input type='text' id='linked-in' onChange={ (e) => this.fieldsOnChange('linkedIn', e.target.value) } onFocus={ (e) => e.target.value='' } value={ this.state.linkedIn } />
              </div>
              <div className='input-field'>
                <p>GitHub Profile</p>
                <input type='text' id='git-hub' onChange={(e) => this.fieldsOnChange('gitHub', e.target.value) } onFocus={ (e) => e.target.value='' } value={ this.state.gitHub } />
              </div>
            </div>
            <input type='button' className='btn' onClick={ this.setChangedUser } value='Save Changes' />
          </div>
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