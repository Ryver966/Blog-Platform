import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/NavBar.css';
import { signOut } from '../../actions/Actions';

class UserOptionsPopup extends Component {
  render() {
    return(
      <div className={ `user-popup row ${ this.props.isUserPopupOpened ? 'show' : 'hide' }` }>
        <ul className='col s6'>
          <li onClick={ () => this.props.goTo(`/${ this.props.user.id }/myProfile/editProfile`) }>My Profile</li>
          <li onClick={ () => this.props.goTo(`/${ this.props.user.id }/myProfile/createBlog`) }>Create New Blog</li>
          <li onClick={ signOut }>Sign Out</li>
        </ul>
        <div className='user-avatar right'>
          <i className={ `material-icons ${ this.props.hasUserAvatar ? 'hide' : 'show' }` }>perm_identity</i>
          <img src={ this.props.user.avatar } className={ this.props.hasUserAvatar ? 'show' : 'hide' } height='80px' width='80px' />
        </div>
      </div>
    )
  }
}

export default UserOptionsPopup;