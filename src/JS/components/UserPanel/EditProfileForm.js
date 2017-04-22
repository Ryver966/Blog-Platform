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
      facebook: this.props.user.facebook,
      linkedIn: this.props.user.linkedIn,
      gitHub: this.props.user.gitHub
    }
  }

  setChangedUser() {
    this.props.user.firstName = this.state.firstName;
    this.props.user.lastName = this.state.lastName;
    this.props.user.dateOfBirth = this.state.dateOfBirth;
    this.props.user.phone = this.state.phone;
    this.props.user.discord = this.state.discord;
    this.props.user.tweeter = this.state.tweeter;
    this.props.user.linkedIn = this.state.linkedIn;
    this.props.user.gitHub = this.state.gitHub;

    updateProfile(this.props.user);
  }

  fieldsOnChange() {
    this.setState({
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      dateOfBirth: document.getElementById('date-of-birth').value,
      phone: document.getElementById('phone').value,
      discord: document.getElementById('discord').value,
      tweeter: document.getElementById('tweeter').value,
      facebook: document.getElementById('facebook').value,
      linkedIn: document.getElementById('linked-in').value,
      gitHub: document.getElementById('git-hub').value
    })
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
                <input type='text' id='first-name' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.value='' }  value={ this.state.firstName }  />
              </div>
              <div className='input-field'>
                <p>Last Name</p>
                <input type='text' id='last-name' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.value='' } value={ this.state.lastName } />
              </div>
              <div className='input-field'>
                <p>Date Of Birth</p>
                <input type='text' id='date-of-birth' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.type='date' } value={ this.state.dateOfBirth }/>
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
                <input type='text' id='phone' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.value='' } value={ this.state.phone } />
              </div>
              <div className='input-field'>
                <p>Discord Nickname</p>
                <input type='text' id='discord' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.value='' } value={ this.state.discord } />
              </div>
              <div className='input-field'>
                <p>Tweeter Profile</p>
                <input type='text' id='tweeter' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.value='' } value={ this.state.tweeter} />
              </div>
              <div className='input-field'>
                <p>Facebook Profile</p>
                <input type='text' id='facebook' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.value='' } value={ this.state.facebook } />
              </div>
              <div className='input-field'>
                <p>LinkedIn Profile</p>
                <input type='text' id='linked-in' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.value='' } value={ this.state.linkedIn } />
              </div>
              <div className='input-field'>
                <p>GitHub Profile</p>
                <input type='text' id='git-hub' onChange={ this.fieldsOnChange } onFocus={ (e) => e.target.value='' } value={ this.state.gitHub } />
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